<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Http\Transformers\DepartmentsTransformer;
use App\Helpers\Helper;
use Auth;

class DepartmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('view', Department::class);
        $allowed_columns = ['id','name'];

        $departments = Department::select([
            'id',
            'name',
            'location_id'
        ])->with('users')->withCount('users');

        if ($request->has('search')) {
            $departments = $departments->TextSearch($request->input('search'));
        }

        $offset = $request->input('offset', 0);
        $limit = $request->input('limit', 50);
        $order = $request->input('order') === 'asc' ? 'asc' : 'desc';
        $sort = in_array($request->input('sort'), $allowed_columns) ? $request->input('sort') : 'created_at';
        $departments->orderBy($sort, $order);

        $total = $departments->count();
        $departments = $departments->skip($offset)->take($limit)->get();
        return (new DepartmentsTransformer)->transformDepartments($departments, $total);

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

        if ($department->save()) {
            return response()->json(Helper::formatStandardApiResponse('success', $department, trans('admin/departments/message.create.success')));
        }
        return response()->json(Helper::formatStandardApiResponse('error', null, $department->getErrors()));

    }

    /**
     * Display the specified resource.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $this->authorize('view', Department::class);
        $department = Department::findOrFail($id);
        return (new DepartmentsTransformer)->transformDepartment($department);
    }



    /**
     * Validates and deletes selected location.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $locationId
     * @since [v1.0]
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
        return redirect()->to(route('departments.index'))->with('success', trans('admin/departments/message.delete.success'));

    }

}
