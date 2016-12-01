<?php

namespace App\Http\Controllers\Auth;

use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use App\Models\Setting;
use App\Models\Ldap;
use App\Models\User;
use Auth;
use Config;
use Illuminate\Http\Request;
use Input;
use Redirect;
use Log;
use View;
use PragmaRX\Google2FA\Google2FA;



/**
 * This controller handles authentication for the user, including local
 * database users and LDAP users.
 *
 * @todo Move LDAP methods into user model for better separation of concerns.
 * @author [A. Gianotto] [<snipe@snipe.net>]
 * @version    v1.0
 */
class AuthController extends Controller
{

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    // This tells the auth controller to use username instead of email address
    protected $username = 'username';

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => ['logout','postTwoFactorAuth','getTwoFactorAuth','getTwoFactorEnroll']]);
    }


    function showLoginForm()
    {
        if (Auth::check()) {
            return redirect()->intended('dashboard');
        }
        return View::make('auth.login');
    }


    private function login_via_ldap(Request $request)
    {
        LOG::debug("Binding user to LDAP.");
        $ldap_user = Ldap::findAndBindUserLdap($request->input('username'), $request->input('password'));
        if(!$ldap_user) {
            LOG::debug("LDAP user ".$request->input('username')." not found in LDAP or could not bind");
            throw new \Exception("Could not find user in LDAP directory");
        } else {
            LOG::debug("LDAP user ".$request->input('username')." successfully bound to LDAP");
        }

        // Check if the user already exists in the database and was imported via LDAP
        $user = User::where('username', '=', Input::get('username'))->whereNull('deleted_at')->where('ldap_import','=',1)->first();
        LOG::debug("Local auth lookup complete");

        // The user does not exist in the database. Try to get them from LDAP.
        // If user does not exist and authenticates successfully with LDAP we
        // will create it on the fly and sign in with default permissions
        if (!$user) {
            LOG::debug("Local user ".Input::get('username')." does not exist");
            LOG::debug("Creating local user ".Input::get('username'));

            if ($user = Ldap::createUserFromLdap($ldap_user)) { //this handles passwords on its own
                LOG::debug("Local user created.");
            } else {
                LOG::debug("Could not create local user.");
                throw new \Exception("Could not create local user");
            }
            // If the user exists and they were imported from LDAP already
        } else {
            LOG::debug("Local user ".$request->input('username')." exists in database. Updating existing user against LDAP.");

            $ldap_attr = Ldap::parseAndMapLdapAttributes($ldap_user);

            if (Setting::getSettings()->ldap_pw_sync=='1') {
                $user->password = bcrypt($request->input('password'));
            }

            $user->email = $ldap_attr['email'];
            $user->first_name = $ldap_attr['firstname'];
            $user->last_name = $ldap_attr['lastname'];
            $user->save();
        } // End if(!user)
        return $user;
    }


    /**
     * Account sign in form processing.
     *
     * @return Redirect
     */
    public function login(Request $request)
    {
        $validator = $this->validator(Input::all());

        if ($validator->fails()) {
            return redirect()->back()->withInput()->withErrors($validator);
        }

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        $throttles = $this->isUsingThrottlesLoginsTrait();
        $this->maxLoginAttempts = config('auth.throttle.max_attempts');
        $this->lockoutTime = config('auth.throttle.lockout_duration');

        if ($throttles && $lockedOut = $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        $user = null;

        // Should we even check for LDAP users?
        if (Setting::getSettings()->ldap_enabled=='1') {
            LOG::debug("LDAP is enabled.");
            try {
              $user = $this->login_via_ldap($request);
              Auth::login($user, true);

            // If the user was unable to login via LDAP, log the error and let them fall through to
            // local authentication.
            } catch (\Exception $e) {
                LOG::error("There was an error authenticating the LDAP user: ".$e->getMessage());
            }
        }

        // If the user wasn't authenticated via LDAP, skip to local auth
        if(!$user) {
          LOG::debug("Authenticating user against database.");
          // Try to log the user in
          if (!Auth::attempt(Input::only('username', 'password'), Input::get('remember-me', 0))) {

              if ($throttles && ! $lockedOut) {
                  $this->incrementLoginAttempts($request);
              }

              LOG::debug("Local authentication failed.");
              return redirect()->back()->withInput()->with('error', trans('auth/message.account_not_found'));
          } else {
              if ($throttles) {
                  $this->clearLoginAttempts($request);
              }
          }
        }

        // Get the page we were before
        $redirect = \Session::get('loginRedirect', 'home');

        // Unset the page we were before from the session
        \Session::forget('loginRedirect');

        // Redirect to the users page
        return redirect()->to($redirect)->with('success', trans('auth/message.signin.success'));
    }


    /**
     * Two factor enrollment page
     *
     * @return Redirect
     */
    public function getTwoFactorEnroll()
    {

        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'You must be logged in.');
        }

        $user = Auth::user();
        $google2fa = app()->make('PragmaRX\Google2FA\Contracts\Google2FA');

        if ($user->two_factor_secret=='') {
            $user->two_factor_secret = $google2fa->generateSecretKey(32);
            $user->save();
        }


        $google2fa_url = $google2fa->getQRCodeGoogleUrl(
            urlencode(Setting::getSettings()->site_name),
            urlencode($user->username),
            $user->two_factor_secret
        );

        return View::make('auth.two_factor_enroll')->with('google2fa_url',$google2fa_url);

    }


    /**
     * Two factor code form page
     *
     * @return Redirect
     */
    public function getTwoFactorAuth() {
        return View::make('auth.two_factor');
    }

    /**
     * Two factor code submission
     *
     * @return Redirect
     */
    public function postTwoFactorAuth(Request $request) {

        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'You must be logged in.');
        }

        $user = Auth::user();
        $secret = $request->get('two_factor_secret');
        $google2fa = app()->make('PragmaRX\Google2FA\Contracts\Google2FA');
        $valid = $google2fa->verifyKey($user->two_factor_secret, $secret);

        if ($valid) {
            $user->two_factor_enrolled = 1;
            $user->save();
            $request->session()->put('2fa_authed', 'true');
            return redirect()->route('home')->with('success', 'You are logged in!');
        }

        return redirect()->route('two-factor')->with('error', 'Invalid two-factor code');


    }


    /**
     * Logout page.
     *
     * @return Redirect
     */
    public function logout(Request $request)
    {
        $request->session()->forget('2fa_authed');
        Auth::logout();
        return redirect()->route('login')->with('success', 'You have successfully logged out!');
    }


    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => 'required',
            'password' => 'required',
        ]);
    }

    /**
     * Get the login lockout error message.
     *
     * @param  int  $seconds
     * @return string
     */
    protected function getLockoutErrorMessage($seconds)
    {
        return \Lang::has('auth/message.throttle')
            ? \Lang::get('auth/message.throttle', ['seconds' => $seconds])
            : 'Too many login attempts. Please try again in '.$seconds.' seconds.';
    }


}
