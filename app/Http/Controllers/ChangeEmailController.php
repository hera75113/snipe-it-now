<?php
/**
 * This controller handles all actions for users changing their email address in their profile
 *  for the Snipe-IT Asset Management application.
 *
 * PHP version 5.5.9
 * @package    Snipe-IT
 * @version    v1.0
 */
namespace App\Http\Controllers;

use Input;
use Redirect;
use Validator;
use View;
use Config;
use Lang;

class ChangeEmailController extends Controller
{
    /**
     * User change email page.
     *
     * @return View
     */
    public function getIndex()
    {
        // Get the user information
        $user = Auth::user();

        // Show the page
        return View::make('account/change-email', compact('user'));
    }

    /**
     * Users change email form processing page.
     *
     * @return Redirect
     */
    public function postIndex()
    {


        if (config('app.lock_passwords')) {
            return Redirect::route('change-password')->with('error', Lang::get('admin/users/table.lock_passwords'));
        } else {

            // Declare the rules for the form validation
            $rules = array(
                'current_password' => 'required|between:3,32',
                'email'            => 'required|email|unique:users,email,'.Auth::user()->email.',email',
                'email_confirm'    => 'required|same:email',
            );

            // Create a new validator instance from our validation rules
            $validator = Validator::make(Input::all(), $rules);

            // If validation fails, we'll exit the operation now.
            if ($validator->fails()) {
                // Ooops.. something went wrong
                return Redirect::back()->withInput()->withErrors($validator);
            }

            // Grab the user
            $user = Auth::user();

            // Check the user current password
            if (! $user->checkPassword(Input::get('current_password'))) {
                // Set the error message
                $this->messageBag->add('current_password', 'Your current password is incorrect');

                // Redirect to the change email page
                return Redirect::route('change-email')->withErrors($this->messageBag);
            }

            // Update the user email
            $user->email = Input::get('email');
            $user->save();

            // Redirect to the settings page
            return Redirect::route('change-email')->with('success', 'Email successfully updated');
        }
    }
}
