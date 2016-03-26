<?php
/**
 * This controller handles all actions related to Consumables for
 * the Snipe-IT Asset Management application.
 *
 * PHP version 5.5.9
 * @package    Snipe-IT
 * @version    v1.8
 */
 namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Actionlog;
use App\Models\Company;
use App\Models\Consumable;
use App\Models\Setting;
use App\Models\User;
use Auth;
use Config;
use DB;
use Input;
use Lang;
use Mail;
use Redirect;
use Slack;
use Str;
use View;

class ConsumablesController extends Controller
{
    /**
     * Show a list of all the consumables.
     *
     * @return View
     */

    public function getIndex()
    {
        return View::make('consumables/index');
    }


    /**
     * Consumable create.
     *
     * @return View
     */
    public function getCreate()
    {
        // Show the page
        $category_list = array('' => '') + DB::table('categories')->where('category_type', '=', 'consumable')->whereNull('deleted_at')->orderBy('name', 'ASC')->lists('name', 'id');
        $company_list = Helper::companyList();
        $location_list = Helper::locationsList();

        return View::make('consumables/edit')
            ->with('consumable', new Consumable)
            ->with('category_list', $category_list)
            ->with('company_list', $company_list)
            ->with('location_list', $location_list);
    }


    /**
     * Consumable create form processing.
     *
     * @return Redirect
     */
    public function postCreate()
    {

        // create a new model instance
        $consumable = new Consumable();

        // Update the consumable data
        $consumable->name                   = e(Input::get('name'));
        $consumable->category_id            = e(Input::get('category_id'));
        $consumable->location_id            = e(Input::get('location_id'));
        $consumable->company_id             = Company::getIdForCurrentUser(Input::get('company_id'));
        $consumable->order_number           = e(Input::get('order_number'));
        $consumable->min_amt                = e(Input::get('min_amt'));

        if (e(Input::get('purchase_date')) == '') {
            $consumable->purchase_date       =  null;
        } else {
            $consumable->purchase_date       = e(Input::get('purchase_date'));
        }

        if (e(Input::get('purchase_cost')) == '0.00') {
            $consumable->purchase_cost       =  null;
        } else {
            $consumable->purchase_cost       = e(Input::get('purchase_cost'));
        }

        $consumable->qty                    = e(Input::get('qty'));
        $consumable->user_id                = Auth::user()->id;

        // Was the consumable created?
        if ($consumable->save()) {
            // Redirect to the new consumable  page
            return Redirect::to("admin/consumables")->with('success', Lang::get('admin/consumables/message.create.success'));
        }

        return Redirect::back()->withInput()->withErrors($consumable->getErrors());


    }

    /**
     * Consumable update.
     *
     * @param  int  $consumableId
     * @return View
     */
    public function getEdit($consumableId = null)
    {
        // Check if the consumable exists
        if (is_null($consumable = Consumable::find($consumableId))) {
            // Redirect to the blogs management page
            return Redirect::to('admin/consumables')->with('error', Lang::get('admin/consumables/message.does_not_exist'));
        } elseif (!Company::isCurrentUserHasAccess($consumable)) {
            return Redirect::to('admin/consumables')->with('error', Lang::get('general.insufficient_permissions'));
        }

            $category_list =  Helper::categoryList();
        $company_list = Helper::companyList();
        $location_list = Helper::locationsList();

        return View::make('consumables/edit', compact('consumable'))
            ->with('category_list', $category_list)
            ->with('company_list', $company_list)
            ->with('location_list', $location_list);
    }


    /**
     * Consumable update form processing page.
     *
     * @param  int  $consumableId
     * @return Redirect
     */
    public function postEdit($consumableId = null)
    {
        // Check if the blog post exists
        if (is_null($consumable = Consumable::find($consumableId))) {
            // Redirect to the blogs management page
            return Redirect::to('admin/consumables')->with('error', Lang::get('admin/consumables/message.does_not_exist'));
        } elseif (!Company::isCurrentUserHasAccess($consumable)) {
            return Redirect::to('admin/consumables')->with('error', Lang::get('general.insufficient_permissions'));
        }


        // Update the consumable data
        $consumable->name                   = e(Input::get('name'));
        $consumable->category_id            = e(Input::get('category_id'));
        $consumable->location_id            = e(Input::get('location_id'));
        $consumable->company_id             = Company::getIdForCurrentUser(Input::get('company_id'));
        $consumable->order_number           = e(Input::get('order_number'));
        $consumable->min_amt                   = e(Input::get('min_amt'));

        if (e(Input::get('purchase_date')) == '') {
            $consumable->purchase_date       =  null;
        } else {
            $consumable->purchase_date       = e(Input::get('purchase_date'));
        }

        if (e(Input::get('purchase_cost')) == '0.00') {
            $consumable->purchase_cost       =  null;
        } else {
            $consumable->purchase_cost       = e(Input::get('purchase_cost'));
        }

        $consumable->qty                    = e(Input::get('qty'));

        // Was the consumable created?
        if ($consumable->save()) {
            // Redirect to the new consumable page
            return Redirect::to("admin/consumables")->with('success', Lang::get('admin/consumables/message.update.success'));
        }

        return Redirect::back()->withInput()->withErrors($consumable->getErrors());




    }

    /**
     * Delete the given consumable.
     *
     * @param  int  $consumableId
     * @return Redirect
     */
    public function getDelete($consumableId)
    {
        // Check if the blog post exists
        if (is_null($consumable = Consumable::find($consumableId))) {
            // Redirect to the blogs management page
            return Redirect::to('admin/consumables')->with('error', Lang::get('admin/consumables/message.not_found'));
        } elseif (!Company::isCurrentUserHasAccess($consumable)) {
            return Redirect::to('admin/consumables')->with('error', Lang::get('general.insufficient_permissions'));
        }

            $consumable->delete();

            // Redirect to the locations management page
            return Redirect::to('admin/consumables')->with('success', Lang::get('admin/consumables/message.delete.success'));

    }



    /**
    *  Get the consumable information to present to the consumable view page
    *
    * @param  int  $consumableId
    * @return View
    **/
    public function getView($consumableID = null)
    {
        $consumable = Consumable::find($consumableID);

        if (isset($consumable->id)) {


            if (!Company::isCurrentUserHasAccess($consumable)) {
                return Redirect::to('admin/consumables')->with('error', Lang::get('general.insufficient_permissions'));
            } else {
                return View::make('consumables/view', compact('consumable'));
            }
        } else {
            // Prepare the error message
            $error = Lang::get('admin/consumables/message.does_not_exist', compact('id'));

            // Redirect to the user management page
            return Redirect::route('consumables')->with('error', $error);
        }


    }

    /**
    * Check out the consumable to a person
    **/
    public function getCheckout($consumableId)
    {
        // Check if the consumable exists
        if (is_null($consumable = Consumable::find($consumableId))) {
            // Redirect to the consumable management page with error
            return Redirect::to('consumables')->with('error', Lang::get('admin/consumables/message.not_found'));
        } elseif (!Company::isCurrentUserHasAccess($consumable)) {
            return Redirect::to('admin/consumables')->with('error', Lang::get('general.insufficient_permissions'));
        }

        // Get the dropdown of users and then pass it to the checkout view
        $users_list = Helper::usersList();

        return View::make('consumables/checkout', compact('consumable'))->with('users_list', $users_list);

    }

    /**
    * Check out the consumable to a person
    **/
    public function postCheckout($consumableId)
    {
      // Check if the consumable exists
        if (is_null($consumable = Consumable::find($consumableId))) {
            // Redirect to the consumable management page with error
            return Redirect::to('consumables')->with('error', Lang::get('admin/consumables/message.not_found'));
        } elseif (!Company::isCurrentUserHasAccess($consumable)) {
            return Redirect::to('admin/consumables')->with('error', Lang::get('general.insufficient_permissions'));
        }

        $admin_user = Auth::user();
        $assigned_to = e(Input::get('assigned_to'));

      // Check if the user exists
        if (is_null($user = User::find($assigned_to))) {
            // Redirect to the consumable management page with error
            return Redirect::to('admin/consumables')->with('error', Lang::get('admin/consumables/message.user_does_not_exist'));
        }

      // Update the consumable data
        $consumable->assigned_to = e(Input::get('assigned_to'));

        $consumable->users()->attach($consumable->id, array(
        'consumable_id' => $consumable->id,
        'user_id' => $admin_user->id,
        'assigned_to' => e(Input::get('assigned_to'))));

        $logaction = new Actionlog();
        $logaction->consumable_id = $consumable->id;
        $logaction->checkedout_to = $consumable->assigned_to;
        $logaction->asset_type = 'consumable';
        $logaction->location_id = $user->location_id;
        $logaction->user_id = Auth::user()->id;
        $logaction->note = e(Input::get('note'));

        $settings = Setting::getSettings();

        if ($settings->slack_endpoint) {

            $slack_settings = [
                'username' => $settings->botname,
                'channel' => $settings->slack_channel,
                'link_names' => true
            ];

            $client = new \Maknz\Slack\Client($settings->slack_endpoint, $slack_settings);

            try {
                    $client->attach([
                        'color' => 'good',
                        'fields' => [
                            [
                                'title' => 'Checked Out:',
                                'value' => strtoupper($logaction->asset_type).' <'.config('app.url').'/admin/consumables/'.$consumable->id.'/view'.'|'.$consumable->name.'> checked out to <'.config('app.url').'/admin/users/'.$user->id.'/view|'.$user->fullName().'> by <'.config('app.url').'/admin/users/'.$admin_user->id.'/view'.'|'.$admin_user->fullName().'>.'
                            ],
                            [
                                'title' => 'Note:',
                                'value' => e($logaction->note)
                            ],
                        ]
                    ])->send('Consumable Checked Out');

            } catch (Exception $e) {

            }
        }


        $log = $logaction->logaction('checkout');

        $consumable_user = DB::table('consumables_users')->where('assigned_to', '=', $consumable->assigned_to)->where('consumable_id', '=', $consumable->id)->first();

        $data['log_id'] = $logaction->id;
        $data['eula'] = $consumable->getEula();
        $data['first_name'] = $user->first_name;
        $data['item_name'] = $consumable->name;
        $data['checkout_date'] = $logaction->created_at;
        $data['item_tag'] = '';
        $data['expected_checkin'] = '';
        $data['note'] = $logaction->note;
        $data['require_acceptance'] = $consumable->requireAcceptance();


        if (($consumable->requireAcceptance()=='1')  || ($consumable->getEula())) {

            Mail::send('emails.accept-asset', $data, function ($m) use ($user) {
                $m->to($user->email, $user->first_name . ' ' . $user->last_name);
                $m->subject('Confirm consumable delivery');
            });
        }

      // Redirect to the new consumable page
        return Redirect::to("admin/consumables")->with('success', Lang::get('admin/consumables/message.checkout.success'));



    }


    public function getDatatable()
    {
        $consumables = Consumable::select('consumables.*')->whereNull('consumables.deleted_at')
            ->with('company', 'location', 'category', 'users');

        if (Input::has('search')) {
            $consumables = $consumables->TextSearch(e(Input::get('search')));
        }

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

        $allowed_columns = ['id','name','order_number','min_amt','purchase_date','purchase_cost','companyName','category'];
        $order = Input::get('order') === 'asc' ? 'asc' : 'desc';
        $sort = in_array(Input::get('sort'), $allowed_columns) ? Input::get('sort') : 'created_at';

        switch ($sort) {
            case 'category':
                $consumables = $consumables->OrderCategory($order);
                break;
            case 'location':
                $consumables = $consumables->OrderLocation($order);
                break;
            case 'companyName':
                $consumables = $consumables->OrderCompany($order);
                break;
            default:
                $consumables = $consumables->orderBy($sort, $order);
                break;
        }

        $consumCount = $consumables->count();
        $consumables = $consumables->skip($offset)->take($limit)->get();

        $rows = array();

        foreach ($consumables as $consumable) {
            $actions = '<nobr><a href="'.route('checkout/consumable', $consumable->id).'" style="margin-right:5px;" class="btn btn-info btn-sm" '.(($consumable->numRemaining() > 0 ) ? '' : ' disabled').'>'.Lang::get('general.checkout').'</a><a href="'.route('update/consumable', $consumable->id).'" class="btn btn-warning btn-sm" style="margin-right:5px;"><i class="fa fa-pencil icon-white"></i></a><a data-html="false" class="btn delete-asset btn-danger btn-sm" data-toggle="modal" href="'.route('delete/consumable', $consumable->id).'" data-content="'.Lang::get('admin/consumables/message.delete.confirm').'" data-title="'.Lang::get('general.delete').' '.htmlspecialchars($consumable->name).'?" onClick="return false;"><i class="fa fa-trash icon-white"></i></a></nobr>';
            $company = $consumable->company;

            $rows[] = array(
                'id'            => $consumable->id,
                'name'          => (string)link_to('admin/consumables/'.$consumable->id.'/view', e($consumable->name)),
                'location'   => ($consumable->location) ? e($consumable->location->name) : '',
                'min_amt'           => e($consumable->min_amt),
                'qty'           => e($consumable->qty),
                'category'           => ($consumable->category) ? e($consumable->category->name) : 'Missing category',
                'order_number'  => e($consumable->order_number),
                'purchase_date'  => e($consumable->purchase_date),
                'purchase_cost'  => ($consumable->purchase_cost!='') ? number_format($consumable->purchase_cost, 2): '' ,
                'numRemaining'  => $consumable->numRemaining(),
                'actions'       => $actions,
                'companyName'   => is_null($company) ? '' : e($company->name),
            );
        }

        $data = array('total' => $consumCount, 'rows' => $rows);

        return $data;

    }

    public function getDataView($consumableID)
    {
        //$consumable = Consumable::find($consumableID);
        $consumable = Consumable::with(array('consumableAssigments'=>
        function ($query) {
            $query->orderBy('created_at', 'DESC');
        },
        'consumableAssigments.admin'=> function ($query) {
        },
        'consumableAssigments.user'=> function ($query) {
        },
        ))->find($consumableID);

  //  $consumable->load('consumableAssigments.admin','consumableAssigments.user');

        if (!Company::isCurrentUserHasAccess($consumable)) {
            return ['total' => 0, 'rows' => []];
        }

        $rows = array();

        foreach ($consumable->consumableAssigments as $consumable_assignment) {
            $rows[] = array(
            'name' => (string)link_to('/admin/users/'.$consumable_assignment->user->id.'/view', e($consumable_assignment->user->fullName())),
            'created_at' => ($consumable_assignment->created_at->format('Y-m-d H:i:s')=='-0001-11-30 00:00:00') ? '' : $consumable_assignment->created_at->format('Y-m-d H:i:s'),
            'admin' => ($consumable_assignment->admin) ? e($consumable_assignment->admin->fullName()) : '',
            );
        }

        $consumableCount = $consumable->users->count();
        $data = array('total' => $consumableCount, 'rows' => $rows);
        return $data;
    }
}
