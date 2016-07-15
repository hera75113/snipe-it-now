<?php
namespace App\Http\Controllers;

use App\Http\Requests\AssetFileRequest;
use App\Helpers\Helper;
use App\Models\Accessory;
use App\Models\LicenseSeat;
use App\Models\Actionlog;
use App\Models\Asset;
use App\Models\Group;
use App\Models\Company;
use App\Models\Location;
use App\Models\Setting;
use App\Models\Statuslabel;
use App\Http\Requests\SaveUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Models\Ldap;
use Auth;
use Config;
use Crypt;
use DB;
use HTML;
use Illuminate\Support\Facades\Log;
use Input;
use Lang;
use League\Csv\Reader;
use Mail;
use Redirect;
use Response;
use Str;
use Symfony\Component\HttpFoundation\JsonResponse;
use URL;
use View;
use Illuminate\Http\Request;

/**
 * This controller handles all actions related to Users for
 * the Snipe-IT Asset Management application.
 *
 * @version    v1.0
 */


class UsersController extends Controller
{


    /**
    * Returns a view that invokes the ajax tables which actually contains
    * the content for the users listing, which is generated in getDatatable().
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @see UsersController::getDatatable() method that generates the JSON response
    * @since [v1.0]
    * @return View
    */
    public function getIndex()
    {
        return View::make('users/index');
    }

    /**
    * Returns a view that displays the user creation form.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function getCreate()
    {

        $groups = Group::pluck('name', 'id');

        if (Input::old('groups')) {
            $userGroups = Group::whereIn('id', Input::old('groups'))->pluck('name', 'id');
        } else {
            $userGroups = collect();
        }

        $permissions = config('permissions');
        $userPermissions = Helper::selectedPermissionsArray($permissions, Input::old('permissions', array()));

        $location_list = Helper::locationsList();
        $manager_list = Helper::managerList();
        $company_list = Helper::companyList();

        return View::make('users/edit', compact('groups', 'userGroups', 'permissions', 'userPermissions'))
        ->with('location_list', $location_list)
        ->with('manager_list', $manager_list)
        ->with('company_list', $company_list)
        ->with('user', new User);
    }

    /**
    * Validate and store the new user data, or return an error.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return Redirect
    */
    public function postCreate(SaveUserRequest $request)
    {

        $user = new User;
        //Username, email, and password need to be handled specially because the need to respect config values on an edit.
        $user->email = $data['email'] = e($request->input('email'));
        $user->username = $data['username'] = e($request->input('username'));
        if ($request->has('password')) {
            $user->password = bcrypt($request->input('password'));
            $data['password'] =  $request->input('password');
        }
        // Update the user
        $user->first_name = e($request->input('first_name'));
        $user->last_name = e($request->input('last_name'));
        $user->locale = e($request->input('locale'));
        $user->employee_num = e($request->input('employee_num'));
        $user->activated = e($request->input('activated', $user->activated));
        $user->jobtitle = e($request->input('jobtitle'));
        $user->phone = e($request->input('phone'));
        $user->location_id = e($request->input('location_id'));
        $user->company_id = e(Company::getIdForUser($request->input('company_id')));
        $user->manager_id = e($request->input('manager_id'));
        $user->notes = e($request->input('notes'));
        $user->permissions = json_encode($request->input('permission'));


        if ($user->manager_id == "") {
            $user->manager_id = null;
        }

        if ($user->location_id == "") {
            $user->location_id = null;
        }

        if ($user->company_id == "") {
            $user->company_id = null;
        }


        if ($user->save()) {

            if ($request->has('groups')) {
                $user->groups()->sync($request->input('groups'));
            } else {
                $user->groups()->sync(array());
            }
            
            if (($request->input('email_user') == 1) && ($request->has('email'))) {
              // Send the credentials through email
                $data = array();
                $data['email'] = e($request->input('email'));
                $data['username'] = e($request->input('username'));
                $data['first_name'] = e($request->input('first_name'));
                $data['password'] = e($request->input('password'));

                Mail::send('emails.send-login', $data, function ($m) use ($user) {
                    $m->to($user->email, $user->first_name . ' ' . $user->last_name);
                    $m->subject('Welcome ' . $user->first_name);
                });
            }
            return redirect::route('users')->with('success', trans('admin/users/message.success.create'));
        }

        return redirect()->back()->withInput()->withErrors($user->getErrors());



    }

    /**
    * JSON handler for creating a user through a modal popup
    *
    * @todo Handle validation more graciously
    * @author [B. Wetherington] [<uberbrady@gmail.com>]
    * @since [v1.8]
    * @return string JSON
    */
    public function store()
    {

        $user = new User;
        $inputs = Input::except('csrf_token', 'password_confirm', 'groups', 'email_user');
        $inputs['activated'] = true;

        $user->first_name = e(Input::get('first_name'));
        $user->last_name = e(Input::get('last_name'));
        $user->username = e(Input::get('username'));
        $user->email = e(Input::get('email'));
        if (Input::has('password')) {
            $user->password = bcrypt(Input::get('password'));
        }

        $user->activated = true;



      // Was the user created?
        if ($user->save()) {

            if (Input::get('email_user') == 1) {
                // Send the credentials through email
                $data = array();
                $data['email'] = e(Input::get('email'));
                $data['first_name'] = e(Input::get('first_name'));
                $data['last_name'] = e(Input::get('last_name'));
                $data['password'] = e(Input::get('password'));

                Mail::send('emails.send-login', $data, function ($m) use ($user) {
                    $m->to($user->email, $user->first_name . ' ' . $user->last_name);
                    $m->subject('Welcome ' . $user->first_name);
                });
            }

            return JsonResponse::create($user);

        } else {
            return JsonResponse::create(["error" => "Failed validation: " . print_r($user->getErrors(), true)], 500);
        }



    }

    /**
    * Returns a view that displays the edit user form
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param int $id
    * @return View
    */
    public function getEdit($id = null)
    {
        try {
            // Get the user information
            $user = User::find($id);
            $permissions = config('permissions');

            if (!Company::isCurrentUserHasAccess($user)) {
                return redirect()->route('users')->with('error', trans('general.insufficient_permissions'));
            }

            $groups = Group::pluck('name', 'id');

            $userGroups = $user->groups()->pluck('name', 'id');
            $user->permissions = $user->decodePermissions();
            $userPermissions = Helper::selectedPermissionsArray($permissions, $user->permissions);

            $location_list = Helper::locationsList();
            $company_list = Helper::companyList();
            $manager_list = Helper::managerList();
        } catch (UserNotFoundException $e) {
            // Prepare the error message
            $error = trans('admin/users/message.user_not_found', compact('id'));

            // Redirect to the user management page
            return redirect()->route('users')->with('error', $error);
        }

        // Show the page
        return View::make('users/edit', compact('user', 'groups', 'userGroups', 'permissions', 'userPermissions'))
                        ->with('location_list', $location_list)
                        ->with('company_list', $company_list)
                        ->with('manager_list', $manager_list);
    }

    /**
    * Validate and save edited user data from edit form.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param  int  $id
    * @return Redirect
    */
    public function postEdit(UpdateUserRequest $request, $id = null)
    {
        // We need to reverse the UI specific logic for our
        // permissions here before we update the user.
        $permissions = $request->input('permissions', array());
        app('request')->request->set('permissions', $permissions);

        // Only update the email address if locking is set to false
        if (config('app.lock_passwords')) {
            return redirect()->route('users')->with('error', 'Denied! You cannot update user information on the demo.');
        }

        try {
            // Get the user information
            $user = User::find($id);

            if (!Company::isCurrentUserHasAccess($user)) {
                return redirect()->route('users')->with('error', trans('general.insufficient_permissions'));
            }
        } catch (UserNotFoundException $e) {
            // Prepare the error message
            $error = trans('admin/users/message.user_not_found', compact('id'));

            // Redirect to the user management page
            return redirect()->route('users')->with('error', $error);
        }

        // First handle anything exclusive to editing.
        if ($request->has('groups')) {
            $user->groups()->sync($request->input('groups'));
        } else {
            $user->groups()->sync(array());
        }
        // Do we want to update the user password?
        if ($request->has('password')) {
            $user->password = bcrypt($request->input('password'));
        }
        if ( $request->has('username')) {
            $user->username = e($request->input('username'));
        }
        $user->email = e($request->input('email'));


       // Update the user
        $user->first_name = e($request->input('first_name'));
        $user->last_name = e($request->input('last_name'));
        $user->locale = e($request->input('locale'));
        $user->employee_num = e($request->input('employee_num'));
        $user->activated = e($request->input('activated', $user->activated));
        $user->jobtitle = e($request->input('jobtitle'));
        $user->phone = e($request->input('phone'));
        $user->location_id = e($request->input('location_id'));
        $user->company_id = e(Company::getIdForUser($request->input('company_id')));
        $user->manager_id = e($request->input('manager_id'));
        $user->notes = e($request->input('notes'));
        $user->permissions = json_encode($request->input('permission'));


        if ($user->manager_id == "") {
            $user->manager_id = null;
        }

        if ($user->location_id == "") {
            $user->location_id = null;
        }

        if ($user->company_id == "") {
            $user->company_id = null;
        }


            // Was the user updated?
        if ($user->save()) {


            // Prepare the success message
            $success = trans('admin/users/message.success.update');

            // Redirect to the user page
            return redirect()->route('users')->with('success', $success);
        }

            return redirect()->back()->withInput()->withErrors($user->getErrors());

    }

    /**
    * Delete a user
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param  int  $id
    * @return Redirect
    */
    public function getDelete($id = null)
    {
        try {
            // Get user information
            $user = User::find($id);

            // Check if we are not trying to delete ourselves
            if ($user->id === Auth::user()->id) {
                // Prepare the error message
                $error = trans('admin/users/message.error.delete');

                // Redirect to the user management page
                return redirect()->route('users')->with('error', $error);
            }


            // Do we have permission to delete this user?
            if ((!Auth::user()->isSuperUser()) || (config('app.lock_passwords'))) {
                // Redirect to the user management page
                return redirect()->route('users')->with('error', 'Insufficient permissions!');
            }

            if (count($user->assets) > 0) {

                // Redirect to the user management page
                return redirect()->route('users')->with('error', 'This user still has ' . count($user->assets) . ' assets associated with them.');
            }

            if (count($user->licenses) > 0) {

                // Redirect to the user management page
                return redirect()->route('users')->with('error', 'This user still has ' . count($user->licenses) . ' licenses associated with them.');
            }

            if (count($user->accessories) > 0) {

                // Redirect to the user management page
                return redirect()->route('users')->with('error', 'This user still has ' . count($user->accessories) . ' accessories associated with them.');
            }

            // Delete the user
            $user->delete();

            // Prepare the success message
            $success = trans('admin/users/message.success.delete');

            // Redirect to the user management page
            return redirect()->route('users')->with('success', $success);
        } catch (UserNotFoundException $e) {
            // Prepare the error message
            $error = trans('admin/users/message.user_not_found', compact('id'));

            // Redirect to the user management page
            return redirect()->route('users')->with('error', $error);
        }
    }

    /**
    * Returns a view that confirms the user's a bulk delete will be applied to.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.7]
    * @return View
    */
    public function postBulkEdit()
    {

        if ((!Input::has('edit_user')) || (count(Input::has('edit_user')) == 0)) {
            return redirect()->back()->with('error', 'No users selected');
        } else {
            $statuslabel_list = Helper::statusLabelList();
            $user_raw_array = array_keys(Input::get('edit_user'));
            $licenses = DB::table('license_seats')->whereIn('assigned_to', $user_raw_array)->get();

            //print_r($licenses);

            $users = User::whereIn('id', $user_raw_array)->with('groups', 'assets', 'licenses', 'accessories')->get();
           // $users = Company::scopeCompanyables($users)->get();

            return View::make('users/confirm-bulk-delete', compact('users', 'statuslabel_list'));
        }
    }

    /**
    * Soft-delete bulk users
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return Redirect
    */
    public function postBulkSave()
    {

        if ((!Input::has('edit_user')) || (count(Input::has('edit_user')) == 0)) {
            return redirect()->back()->with('error', 'No users selected');
        } elseif ((!Input::has('status_id')) || (count(Input::has('status_id')) == 0)) {
            return redirect()->route('users')->with('error', 'No status selected');
        } else {

            $user_raw_array = Input::get('edit_user');
            $asset_array = array();

            if (($key = array_search(Auth::user()->id, $user_raw_array)) !== false) {
                unset($user_raw_array[$key]);
            }

            if (!Auth::user()->isSuperUser()) {
                return redirect()->route('users')->with('error', trans('admin/users/message.insufficient_permissions'));
            }

            if (!config('app.lock_passwords')) {

                $users = User::whereIn('id', $user_raw_array)->get();
                $assets = Asset::whereIn('assigned_to', $user_raw_array)->get();
                $accessories = DB::table('accessories_users')->whereIn('assigned_to', $user_raw_array)->get();
                $licenses = DB::table('license_seats')->whereIn('assigned_to', $user_raw_array)->get();
                $license_array = array();
                $accessory_array = array();



                foreach ($assets as $asset) {

                    $asset_array[] = $asset->id;

                    // Update the asset log
                    $logaction = new Actionlog();
                    $logaction->asset_id = $asset->id;
                    $logaction->checkedout_to = $asset->assigned_to;
                    $logaction->asset_type = 'hardware';
                    $logaction->user_id = Auth::user()->id;
                    $logaction->note = 'Bulk checkin asset and delete user';
                    $logaction->logaction('checkin from');

                    Asset::whereIn('id', $asset_array)->update(
                        array(
                                'status_id' => e(Input::get('status_id')),
                                'assigned_to' => null,
                            )
                    );
                }

                foreach ($accessories as $accessory) {
                    $accessory_array[] = $accessory->accessory_id;
                    // Update the asset log
                    $logaction = new Actionlog();
                    $logaction->accessory_id = $accessory->id;
                    $logaction->checkedout_to = $accessory->assigned_to;
                    $logaction->asset_type = 'accessory';
                    $logaction->user_id = Auth::user()->id;
                    $logaction->note = 'Bulk checkin accessory and delete user';
                    $logaction->logaction('checkin from');


                }

                foreach ($licenses as $license) {
                    $license_array[] = $license->id;
                    // Update the asset log
                    $logaction = new Actionlog();
                    $logaction->asset_id = $license->id;
                    $logaction->checkedout_to = $license->assigned_to;
                    $logaction->asset_type = 'software';
                    $logaction->user_id = Auth::user()->id;
                    $logaction->note = 'Bulk checkin license and delete user';
                    $logaction->logaction('checkin from');
                }

                LicenseSeat::whereIn('id', $license_array)->update(['assigned_to' => null]);

                foreach ($users as $user) {
                    $user->accessories()->sync(array());
                    $user->delete();
                }




                return redirect()->route('users')->with('success', 'Your selected users have been deleted and their assets have been updated.');
            } else {
                return redirect()->route('users')->with('error', 'Bulk delete is not enabled in this installation');
            }

        }
    }

    /**
    * Restore a deleted user
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param  int  $id
    * @return Redirect
    */
    public function getRestore($id = null)
    {

            // Get user information
        if (!$user = User::onlyTrashed()->find($id)) {
            return redirect()->route('users')->with('error', trans('admin/users/messages.user_not_found'));
        }

        if (!Company::isCurrentUserHasAccess($user)) {
            return redirect()->route('users')->with('error', trans('general.insufficient_permissions'));
        } else {

            // Restore the user
            if (User::withTrashed()->where('id', $id)->restore()) {
                return redirect()->route('users')->with('success', trans('admin/users/message.success.restored'));
            } else {
                return redirect()->route('users')->with('error', 'User could not be restored.');
            }

        }
    }


    /**
    * Return a view with user detail
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param  int  $userId
    * @return View
    */
    public function getView($userId = null)
    {

        $user = User::with('assets', 'assets.model', 'consumables', 'accessories', 'licenses', 'userloc')->withTrashed()->find($userId);

        $userlog = $user->userlog->load('assetlog', 'consumablelog', 'assetlog.model', 'licenselog', 'accessorylog', 'userlog', 'adminlog');

        if (isset($user->id)) {

            if (!Company::isCurrentUserHasAccess($user)) {
                return redirect()->route('users')->with('error', trans('general.insufficient_permissions'));
            } else {
                return View::make('users/view', compact('user', 'userlog'));
            }
        } else {
            // Prepare the error message
            $error = trans('admin/users/message.user_not_found', compact('id'));

            // Redirect to the user management page
            return redirect()->route('users')->with('error', $error);
        }
    }

    /**
    * Unsuspend a user.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param  int  $id
    * @return Redirect
    */
    public function getUnsuspend($id = null)
    {
        try {
            // Get user information
            //$user = User::find($id);

            // Check if we are not trying to unsuspend ourselves
            if ($user->id === Auth::user()->id) {
                // Prepare the error message
                $error = trans('admin/users/message.error.unsuspend');

                // Redirect to the user management page
                return redirect()->route('users')->with('error', $error);
            }

            // Do we have permission to unsuspend this user?
            if ($user->isSuperUser() && !Auth::user()->isSuperUser()) {
                // Redirect to the user management page
                return redirect()->route('users')->with('error', 'Insufficient permissions!');
            }

            // Prepare the success message
            $success = trans('admin/users/message.success.unsuspend');

            // Redirect to the user management page
            return redirect()->route('users')->with('success', $success);
        } catch (UserNotFoundException $e) {
            // Prepare the error message
            $error = trans('admin/users/message.user_not_found', compact('id'));

            // Redirect to the user management page
            return redirect()->route('users')->with('error', $error);
        }
    }


    /**
    * Return a view containing a pre-populated new user form,
    * populated with some fields from an existing user.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @param  int  $id
    * @return Redirect
    */
    public function getClone($id = null)
    {
        // We need to reverse the UI specific logic for our
        // permissions here before we update the user.
        $permissions = Input::get('permissions', array());
        //$this->decodePermissions($permissions);
        app('request')->request->set('permissions', $permissions);


        try {
            // Get the user information
            $user_to_clone = User::withTrashed()->find($id);
            $user = clone $user_to_clone;
            $user->first_name = '';
            $user->last_name = '';
            $user->email = substr($user->email, ($pos = strpos($user->email, '@')) !== false ? $pos : 0);
            ;
            $user->id = null;

            // Get this user groups
            $userGroups = $user_to_clone->groups()->lists('name', 'id');

            // Get a list of all the available groups
            $groups = Group::pluck('name', 'id');

            // Get all the available permissions
            $permissions = config('permissions');
            $clonedPermissions = $user_to_clone->decodePermissions();

            $userPermissions =Helper::selectedPermissionsArray($permissions, $clonedPermissions);
            //$this->encodeAllPermissions($permissions);

            $location_list = Helper::locationsList();
            $company_list = Helper::companyList();
            $manager_list = Helper::managerList();

            // Show the page
            return View::make('users/edit', compact('groups', 'userGroups', 'permissions', 'userPermissions'))
                            ->with('location_list', $location_list)
                            ->with('company_list', $company_list)
                            ->with('manager_list', $manager_list)
                            ->with('user', $user)
                            ->with('groups', $groups)
                            ->with('userGroups', $userGroups)
                            ->with('clone_user', $user_to_clone);
        } catch (UserNotFoundException $e) {
            // Prepare the error message
            $error = trans('admin/users/message.user_not_found', compact('id'));

            // Redirect to the user management page
            return redirect()->route('users')->with('error', $error);
        }
    }

    /**
    * Return user import view
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return View
    */
    public function getImport()
    {
        // Get all the available groups
        //$groups = Sentry::getGroupProvider()->findAll();
        // Selected groups
        $selectedGroups = Input::old('groups', array());
        // Get all the available permissions
        $permissions = config('permissions');
        //$this->encodeAllPermissions($permissions);
        // Selected permissions
        $selectedPermissions = Input::old('permissions', array('superuser' => -1));
        //$this->encodePermissions($selectedPermissions);
        // Show the page
        return View::make('users/import', compact('groups', 'selectedGroups', 'permissions', 'selectedPermissions'));
    }

    /**
    * Handle user import file
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.0]
    * @return Redirect
    */
    public function postImport()
    {

        if (!ini_get("auto_detect_line_endings")) {
            ini_set("auto_detect_line_endings", '1');
        }

        $csv = Reader::createFromPath(Input::file('user_import_csv'));
        $csv->setNewline("\r\n");

        if (Input::get('has_headers') == 1) {
            $csv->setOffset(1);
        }

        $duplicates = '';

        $nbInsert = $csv->each(function ($row) use ($duplicates) {

            if (array_key_exists(2, $row)) {

                if (Input::get('activate') == 1) {
                    $activated = '1';
                } else {
                    $activated = '0';
                }

                $pass = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 15);

                // Location
                if (array_key_exists('4', $row)) {
                    $user_location_id = trim($row[4]);
                    if ($user_location_id=='') {
                        $user_location_id = null;
                    }
                }



                try {
                    // Check if this email already exists in the system
                    $user = User::where('username', $row[2])->first();
                    if ($user) {
                        $duplicates .= $row[2] . ', ';
                    } else {

                        $newuser = array(
                            'first_name' => trim(e($row[0])),
                            'last_name' => trim(e($row[1])),
                            'username' => trim(e($row[2])),
                            'email' => trim(e($row[3])),
                            'password' => bcrypt($pass),
                            'activated' => $activated,
                            'location_id' => trim(e($user_location_id)),
                            'phone' => trim(e($row[5])),
                            'jobtitle' => trim(e($row[6])),
                            'employee_num' => trim(e($row[7])),
                            //'company_id' => Company::getIdForUser($row[8]),
                            'permissions' => '{"user":1}',
                            'notes' => 'Imported user'
                        );
                        //dd($newuser);

                        DB::table('users')->insert($newuser);


                        if (((Input::get('email_user') == 1) && !config('app.lock_passwords'))) {
                            // Send the credentials through email
                            if ($row[3] != '') {
                                $data = array();
                                $data['username'] = trim(e($row[2]));
                                $data['first_name'] = trim(e($row[0]));
                                $data['password'] = $pass;

                                if ($newuser['email']) {
                                    Mail::send('emails.send-login', $data, function ($m) use ($newuser) {
                                        $m->to($newuser['email'], $newuser['first_name'] . ' ' . $newuser['last_name']);
                                        $m->subject('Welcome ' . $newuser['first_name']);
                                    });
                                }
                            }
                        }
                    }
                } catch (Exception $e) {
                    echo 'Caught exception: ', $e->getMessage(), "\n";
                }
                return true;
            }
        });


        return redirect()->route('users')->with('duplicates', $duplicates)->with('success', 'Success');
    }

    /**
    * Return JSON response with a list of user details for the getIndex() view.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.6]
    * @see UsersController::getIndex() method that consumed this JSON response
    * @return string JSON
    */
    public function getDatatable($status = null)
    {

        if (Input::has('offset')) {
            $offset = e(Input::get('offset'));
        } else {
            $offset = 0;
        }

        if (Input::has('limit')) {
            $limit = e(Input::get('limit'));
        } else {
            $limit = 50;
        }

        if (Input::get('sort')=='name') {
            $sort = 'first_name';
        } else {
            $sort = e(Input::get('sort'));
        }

        $users = User::select(array('users.id','users.employee_num','users.email','users.username','users.location_id','users.manager_id','users.first_name','users.last_name','users.created_at','users.notes','users.company_id', 'users.deleted_at','users.activated'))
        ->with('assets', 'accessories', 'consumables', 'licenses', 'manager', 'groups', 'userloc', 'company');
        $users = Company::scopeCompanyables($users);

        switch ($status) {
            case 'deleted':
                $users = $users->withTrashed()->Deleted();
                break;
        }

        if (Input::has('search')) {
            $users = $users->TextSearch(Input::get('search'));
        }

         $order = Input::get('order') === 'asc' ? 'asc' : 'desc';

        switch (Input::get('sort')) {
            case 'manager':
                $users = $users->OrderManager($order);
                break;
            case 'location':
                $users = $users->OrderLocation($order);
                break;
            default:
                $allowed_columns =
                [
                 'last_name','first_name','email','username','employee_num',
                 'assets','accessories', 'consumables','licenses','groups','activated','created_at'
                ];

                $sort = in_array($sort, $allowed_columns) ? $sort : 'first_name';
                $users = $users->orderBy($sort, $order);
                break;
        }

        $userCount = $users->count();
        $users = $users->skip($offset)->take($limit)->get();
        $rows = array();

        foreach ($users as $user) {
            $group_names = '';
            $inout = '';
            $actions = '<nobr>';

            foreach ($user->groups as $group) {
                $group_names .= '<a href="' . config('app.url') . '/admin/groups/' . $group->id . '/edit" class="label  label-default">' . $group->name . '</a> ';
            }


            if (!is_null($user->deleted_at)) {

                $actions .= '<a href="' . route('restore/user', $user->id) . '" class="btn btn-warning btn-sm"><i class="fa fa-share icon-white"></i></a> ';
            } else {

                if ($user->accountStatus() == 'suspended') {
                    $actions .= '<a href="' . route('unsuspend/user', $user->id) . '" class="btn btn-default btn-sm"><span class="fa fa-clock-o"></span></a> ';
                }

                $actions .= '<a href="' . route('update/user', $user->id) . '" class="btn btn-warning btn-sm"><i class="fa fa-pencil icon-white"></i></a> ';

                $actions .= '<a href="' . route('clone/user', $user->id) . '" class="btn btn-info btn-sm"><i class="fa fa-clone"></i></a>';

                if ((Auth::user()->id !== $user->id) && (!config('app.lock_passwords'))) {
                    $actions .= '<a data-html="false" class="btn delete-asset btn-danger btn-sm" data-toggle="modal" href="' . route('delete/user', $user->id) . '" data-content="Are you sure you wish to delete this user?" data-title="Delete ' . htmlspecialchars($user->first_name) . '?" onClick="return false;"><i class="fa fa-trash icon-white"></i></a> ';
                } else {
                    $actions .= ' <span class="btn delete-asset btn-danger btn-sm disabled"><i class="fa fa-trash icon-white"></i></span>';
                }
            }
            $actions .= '</nobr>';

            $rows[] = array(
                'id'         => $user->id,
                'checkbox'      => ($status!='deleted') ? '<div class="text-center hidden-xs hidden-sm"><input type="checkbox" name="edit_user['.e($user->id).']" class="one_required"></div>' : '',
                'name'          => '<a title="'.e($user->fullName()).'" href="../admin/users/'.e($user->id).'/view">'.e($user->fullName()).'</a>',
                'email'         => ($user->email!='') ?
                            '<a href="mailto:'.e($user->email).'" class="hidden-md hidden-lg">'.e($user->email).'</a>'
                            .'<a href="mailto:'.e($user->email).'" class="hidden-xs hidden-sm"><i class="fa fa-envelope"></i></a>'
                            .'</span>' : '',
                'username'         => e($user->username),
                'location'      => ($user->userloc) ? e($user->userloc->name) : '',
                'manager'         => ($user->manager) ? '<a title="' . e($user->manager->fullName()) . '" href="users/' . e($user->manager->id) . '/view">' . e($user->manager->fullName()) . '</a>' : '',
                'assets'        => $user->assets->count(),
                'employee_num'  => e($user->employee_num),
                'licenses'        => $user->licenses->count(),
                'accessories'        => $user->accessories->count(),
                'consumables'        => $user->consumables->count(),
                'groups'        => $group_names,
                'notes'         => e($user->notes),
                'created_at' => ($user->created_at!='')  ? e($user->created_at->format('F j, Y h:iA')) : '',
                'activated'      => ($user->activated=='1') ? '<i class="fa fa-check"></i>' : '<i class="fa fa-times"></i>',
                'actions'       => ($actions) ? $actions : '',
                'companyName'   => is_null($user->company) ? '' : e($user->company->name)
            );
        }

        $data = array('total'=>$userCount, 'rows'=>$rows);
        return $data;
    }

    /**
    * Return JSON response with a list of user details for the getIndex() view.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.6]
    * @param int $userId
    * @return string JSON
    */
    public function postUpload(AssetFileRequest $request, $userId = null)
    {


        $user = User::find($userId);
        $destinationPath = config('app.private_uploads') . '/users';

        if (isset($user->id)) {

            if (!Company::isCurrentUserHasAccess($user)) {
                return redirect()->route('users')->with('error', trans('general.insufficient_permissions'));
            }

            foreach (Input::file('file') as $file) {

                $extension = $file->getClientOriginalExtension();
                $filename = 'user-' . $user->id . '-' . str_random(8);
                $filename .= '-' . str_slug($file->getClientOriginalName()) . '.' . $extension;
                $upload_success = $file->move($destinationPath, $filename);

              //Log the deletion of seats to the log
                $logaction = new Actionlog();
                $logaction->asset_id = $user->id;
                $logaction->asset_type = 'user';
                $logaction->user_id = Auth::user()->id;
                $logaction->note = e(Input::get('notes'));
                $logaction->checkedout_to = null;
                $logaction->created_at = date("Y-m-d h:i:s");
                $logaction->filename = $filename;
                $logaction->action_type = 'uploaded';
                $logaction->save();

            }
            return JsonResponse::create($logaction);

        } else {
            return JsonResponse::create(["error" => "Failed validation: ".print_r($logaction->getErrors(), true)], 500);
        }
    }


    /**
    * Delete file
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.6]
    * @param  int  $userId
    * @param  int  $fileId
    * @return Redirect
    */
    public function getDeleteFile($userId = null, $fileId = null)
    {
        $user = User::find($userId);
        $destinationPath = config('app.private_uploads').'/users';

        // the license is valid
        if (isset($user->id)) {

            if (!Company::isCurrentUserHasAccess($user)) {
                return redirect()->route('users')->with('error', trans('general.insufficient_permissions'));
            } else {
                $log = Actionlog::find($fileId);
                $full_filename = $destinationPath . '/' . $log->filename;
                if (file_exists($full_filename)) {
                    unlink($destinationPath . '/' . $log->filename);
                }
                $log->delete();
                return redirect()->back()->with('success', trans('admin/users/message.deletefile.success'));
            }
        } else {
            // Prepare the error message
            $error = trans('admin/users/message.does_not_exist', compact('id'));

            // Redirect to the licence management page
            return redirect()->route('users')->with('error', $error);
        }
    }

    /**
    * Display/download the uploaded file
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v1.6]
    * @param  int  $userId
    * @param  int  $fileId
    * @return mixed
    */
    public function displayFile($userId = null, $fileId = null)
    {

        $user = User::find($userId);

        // the license is valid
        if (isset($user->id)) {
            if (!Company::isCurrentUserHasAccess($user)) {
                return redirect()->route('users')->with('error', trans('general.insufficient_permissions'));
            } else {
                $log = Actionlog::find($fileId);
                $file = $log->get_src();
                return Response::download($file);
            }
        } else {
            // Prepare the error message
            $error = trans('admin/users/message.does_not_exist', compact('id'));

            // Redirect to the licence management page
            return redirect()->route('users')->with('error', $error);
        }
    }

    /**
    * Return view for LDAP import
    *
    * @author Aladin Alaily
    * @since [v1.8]
    * @return View
    */
    public function getLDAP()
    {

        $location_list = Helper::locationsList();

        try {
            $ldapconn = Ldap::connectToLdap();
        } catch (\Exception $e) {
            return redirect()->route('users')->with('error',$e->getMessage());
        }


        try {
            Ldap::bindAdminToLdap($ldapconn);
        } catch (\Exception $e) {
            return redirect()->route('users')->with('error',$e->getMessage());
        }

        return View::make('users/ldap')
              ->with('location_list', $location_list);

    }


    /**
    * Declare the rules for the ldap fields validation.
    *
    * @author Aladin Alaily
    * @since [v1.8]
    * @var array
    * @deprecated 3.0
    * @todo remove this method in favor of other validation
    * @var array
    */

    protected $ldapValidationRules = array(
        'firstname' => 'required|string|min:2',
        'lastname' => 'required|string|min:2',
        'employee_number' => 'string',
        'username' => 'required|min:2|unique:users,username',
        'email' => 'email|unique:users,email',
    );

    /**
    * LDAP form processing.
    *
    * @author Aladin Alaily
    * @since [v1.8]
    * @return Redirect
    */
    public function postLDAP()
    {
        ini_set('max_execution_time', 600); //600 seconds = 10 minutes
        ini_set('memory_limit', '500M');

        $ldap_result_username = Setting::getSettings()->ldap_username_field;
        $ldap_result_last_name = Setting::getSettings()->ldap_lname_field;
        $ldap_result_first_name = Setting::getSettings()->ldap_fname_field;

        $ldap_result_active_flag = Setting::getSettings()->ldap_active_flag_field;
        $ldap_result_emp_num = Setting::getSettings()->ldap_emp_num;
        $ldap_result_email = Setting::getSettings()->ldap_email;


        $location_id = e(Input::get('location_id'));

        try {
            $ldapconn = Ldap::connectToLdap();
        } catch (\Exception $e) {
            return redirect()->back()->withInput()->with('error',$e->getMessage());
        }

        try {
            Ldap::bindAdminToLdap($ldapconn);
        } catch (\Exception $e) {
            return redirect()->back()->withInput()->with('error',$e->getMessage());
        }

        $summary = array();

        $results = Ldap::findLdapUsers();

        for ($i = 0; $i < $results["count"]; $i++) {
            if (empty($ldap_result_active_flag) || $results[$i][$ldap_result_active_flag][0] == "TRUE") {

                $item = array();
                $item["username"] = isset($results[$i][$ldap_result_username][0]) ? $results[$i][$ldap_result_username][0] : "";
                $item["employee_number"] = isset($results[$i][$ldap_result_emp_num][0]) ? $results[$i][$ldap_result_emp_num][0] : "";
                $item["lastname"] = isset($results[$i][$ldap_result_last_name][0]) ? $results[$i][$ldap_result_last_name][0] : "";
                $item["firstname"] = isset($results[$i][$ldap_result_first_name][0]) ? $results[$i][$ldap_result_first_name][0] : "";
                $item["email"] = isset($results[$i][$ldap_result_email][0]) ? $results[$i][$ldap_result_email][0] : "" ;

                // User exists
                $item["createorupdate"] = 'updated';
                if (!$user = User::where('username', $item["username"])->first()) {
                    $user = new User;
                    $item["createorupdate"] = 'created';
                }


              // Create the user if they don't exist.
                $pass = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 20);

                $user->first_name = e($item["firstname"]);
                $user->last_name = e($item["lastname"]);
                $user->username = e($item["username"]);
                $user->email = e($item["email"]);
                $user->employee_num = e($item["employee_number"]);
                $user->password = bcrypt($pass);
                $user->activated = 1;
                $user->location_id = e($location_id);
                $user->notes = 'Imported from LDAP';
                $user->ldap_import = 1;

                $errors = '';

                if ($user->save()) {
                    $item["note"] = $item["createorupdate"];
                    $item["status"]='success';
                } else {
                  //$errors_array = array($user->getErrors());
                    foreach ($user->getErrors()->getMessages() as $key => $err) {
                      //echo $user->getErrors();
                        $errors .='<li>'.$err[0];
                    }
                    $item["note"] = $errors;
                    $item["status"]='error';
                }

                array_push($summary, $item);
            }

        }



        return redirect()->route('ldap/user')->with('success', "OK")->with('summary', $summary);
    }

    /**
    * Return JSON containing a list of assets assigned to a user.
    *
    * @author [A. Gianotto] [<snipe@snipe.net>]
    * @since [v3.0]
    * @return string JSON
    */
    public function getAssetList($userId)
    {
        $assets = Asset::where('assigned_to', '=', $userId)->get();
        return response()->json($assets);
        //$foo = Asset::where('assigned_to','=',$userId)->get();
        //print_r($foo);
    }
}
