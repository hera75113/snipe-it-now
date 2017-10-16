<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use App\Helpers\Helper;
use Auth;

class DepartmentsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        parent::__construct();
    }

    /**
     * Returns a view that invokes the ajax tables which actually contains
     * the content for the assets listing, which is generated in getDatatable.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @see AssetController::getDatatable() method that generates the JSON response
     * @since [v4.0]
     * @return View
     */
    public function index(Request $request)
    {
        $this->authorize('index', Department::class);
        $company = null;
        if ($request->has('company_id')) {
            $company = Company::find($request->input('company_id'));
        }
        return view('departments/index')->with('company', $company);
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
        $this->authorize('create', Department::class);
        $department = new Department;
        $department->fill($request->all());
        $department->user_id = Auth::user()->id;
        $department->manager_id = ($request->has('manager_id' ) ? $request->input('manager_id') : null);

        if ($department->save()) {
            return redirect()->route("departments.index")->with('success', trans('admin/departments/message.create.success'));
        }
        return redirect()->back()->withInput()->withErrors($department->getErrors());
    }

    /**
     * Returns a view that invokes the ajax tables which actually contains
     * the content for the department detail page.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $id
     * @since [v4.0]
     * @return \Illuminate\Contracts\View\View
     */
    public function show($id)
    {
        $department = Department::find($id);

        if (isset($department->id)) {
            return view('departments/view', compact('department'));
        }
        return redirect()->route('departments.index')->with('error', trans('admin/departments/message.does_not_exist', compact('id')));
    }


    /**
     * Returns a form view used to create a new department.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @see DepartmentsController::postCreate() method that validates and stores the data
     * @since [v4.0]
     * @return \Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('departments/edit')->with('item', new Department)
            ->with('manager_list', Helper::managerList())
            ->with('location_list', Helper::locationsList())
            ->with('company_list', Helper::companyList());
    }


    /**
     * Validates and deletes selected department.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $locationId
     * @since [v4.0]
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        if (is_null($department = Department::find($id))) {
            return redirect()->to(route('departments.index'))->with('error', trans('admin/departments/message.not_found'));
        }

        if ($department->users->count() > 0) {
            return redirect()->to(route('departments.index'))->with('error', trans('admin/departments/message.assoc_users'));
        }

        $department->delete();
        return redirect()->back()->with('success', trans('admin/departments/message.delete.success'));

    }

    /**
     * Makes a form view to edit location information.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @see LocationsController::postCreate() method that validates and stores
     * @param int $locationId
     * @since [v1.0]
     * @return \Illuminate\Contracts\View\View
     */
    public function edit($id = null)
    {
        if (is_null($item = Department::find($id))) {
            return redirect()->back()->with('error', trans('admin/locations/message.does_not_exist'));
        }
        return view('departments/edit', compact('item'))
            ->with('manager_list', Helper::managerList())
            ->with('location_list', Helper::locationsList())
            ->with('company_list', Helper::companyList());
    }

    public function update(Request $request, $id) {

        $this->authorize('create', Department::class);
        if (is_null($department = Department::find($id))) {
            return redirect()->route('departments.index')->with('error', trans('admin/departments/message.does_not_exist'));
        }

        $department->fill($request->all());
        $department->manager_id = ($request->has('manager_id' ) ? $request->input('manager_id') : null);

        if ($department->save()) {
            return redirect()->route("departments.index")->with('success', trans('admin/departments/message.update.success'));
        }
        return redirect()->back()->withInput()->withErrors($department->getErrors());
    }
}
