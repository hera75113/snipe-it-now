<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Ldap;
use Validator;
use App\Models\Setting;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function ldaptest()
    {

        if (Setting::getSettings()->ldap_enabled!='1') {
            \Log::debug('LDAP is not enabled cannot test.');
            return response()->json(['message' => 'LDAP is not enabled, cannot test.'], 400);
        }

        \Log::debug('Preparing to test LDAP connection');

        try {
            $connection = Ldap::connectToLdap();
            try {
                \Log::debug('attempting to bind to LDAP for LDAP test');
                Ldap::bindAdminToLdap($connection);
                return response()->json(['message' => 'It worked!'], 200);
            } catch (\Exception $e) {
                \Log::debug('Bind failed');
                return response()->json(['message' => $e->getMessage()], 400);
                //return response()->json(['message' => $e->getMessage()], 500);
            }
        } catch (\Exception $e) {
            \Log::debug('Connection failed');
            return response()->json(['message' => $e->getMessage()], 600);
        }


    }

    public function ldaptestlogin(Request $request)
    {

        if (Setting::getSettings()->ldap_enabled!='1') {
            \Log::debug('LDAP is not enabled. Cannot test.');
            return response()->json(['message' => 'LDAP is not enabled, cannot test.'], 400);
        }


        $rules = array(
            'ldaptest_user' => 'required',
            'ldaptest_password' => 'required'
        );

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            \Log::debug('LDAP Validation test failed.');
            $validation_errors = implode(' ',$validator->errors()->all());
            return response()->json(['message' => $validator->errors()->all()], 400);
        }
        

        \Log::debug('Preparing to test LDAP login');
        try {
            $connection = Ldap::connectToLdap();
            try {
                Ldap::bindAdminToLdap($connection);
                \Log::debug('Attempting to bind to LDAP for LDAP test');
                try {
                    $ldap_user = Ldap::findAndBindUserLdap($request->input('ldaptest_user'), $request->input('ldaptest_password'));
                    if ($ldap_user) {
                        \Log::debug('It worked! '. $request->input('ldaptest_user').' successfully binded to LDAP.');
                        return response()->json(['message' => 'It worked! '. $request->input('ldaptest_user').' successfully binded to LDAP.'], 200);
                    }
                    return response()->json(['message' => 'Login Failed. '. $request->input('ldaptest_user').' did not successfully bind to LDAP.'], 400);

                } catch (\Exception $e) {
                    \Log::debug('LDAP login failed');
                    return response()->json(['message' => $e->getMessage()], 400);
                }

            } catch (\Exception $e) {
                \Log::debug('Bind failed');
                return response()->json(['message' => $e->getMessage()], 400);
                //return response()->json(['message' => $e->getMessage()], 500);
            }
        } catch (\Exception $e) {
            \Log::debug('Connection failed');
            return response()->json(['message' => $e->getMessage()], 500);
        }


    }

}
