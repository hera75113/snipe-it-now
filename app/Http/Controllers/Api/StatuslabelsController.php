<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Helpers\Helper;
use App\Models\Statuslabel;
use App\Models\Asset;
use App\Http\Transformers\StatuslabelsTransformer;
use App\Http\Transformers\AssetsTransformer;

class StatuslabelsController extends Controller
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
        $this->authorize('view', Statuslabel::class);
        $allowed_columns = ['id','name','created_at'];

        $statuslabels = Statuslabel::withCount('assets');

        if ($request->has('search')) {
            $statuslabels = $statuslabels->TextSearch($request->input('search'));
        }

        $offset = $request->input('offset', 0);
        $limit = $request->input('limit', 50);
        $order = $request->input('order') === 'asc' ? 'asc' : 'desc';
        $sort = in_array($request->input('sort'), $allowed_columns) ? $request->input('sort') : 'created_at';
        $statuslabels->orderBy($sort, $order);

        $total = $statuslabels->count();
        $statuslabels = $statuslabels->skip($offset)->take($limit)->get();
        return (new StatuslabelsTransformer)->transformStatuslabels($statuslabels, $total);
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
        $this->authorize('create', Statuslabel::class);
        $request->except('deployable', 'pending','archived');

        if (!$request->has('type')) {
            return response()->json(Helper::formatStandardApiResponse('error', null, ["type" => ["Status label type is required."]]));
        }

        $statuslabel = new Statuslabel;
        $statuslabel->fill($request->all());

        $statusType = Statuslabel::getStatuslabelTypesForDB($request->input('type'));
        $statuslabel->deployable        =  $statusType['deployable'];
        $statuslabel->pending           =  $statusType['pending'];
        $statuslabel->archived          =  $statusType['archived'];

        if ($statuslabel->save()) {
            return response()->json(Helper::formatStandardApiResponse('success', $statuslabel, trans('admin/statuslabels/message.create.success')));
        }
        return response()->json(Helper::formatStandardApiResponse('error', null, $statuslabel->getErrors()));

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
        $this->authorize('view', Statuslabel::class);
        $statuslabel = Statuslabel::findOrFail($id);
        return (new StatuslabelsTransformer)->transformStatuslabel($statuslabel);
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
        $this->authorize('edit', Statuslabel::class);
        $statuslabel = Statuslabel::findOrFail($id);
        
        $request->except('deployable', 'pending','archived');

        if (!$request->has('type')) {
            return response()->json(Helper::formatStandardApiResponse('error', null, 'Status label type is required.'));
        }

        $statuslabel->fill($request->all());

        $statusType = Statuslabel::getStatuslabelTypesForDB($request->input('type'));
        $statuslabel->deployable        =  $statusType['deployable'];
        $statuslabel->pending           =  $statusType['pending'];
        $statuslabel->archived          =  $statusType['archived'];

        if ($statuslabel->save()) {
            return response()->json(Helper::formatStandardApiResponse('success', $statuslabel, trans('admin/statuslabels/message.update.success')));
        }

        return response()->json(Helper::formatStandardApiResponse('error', null, $statuslabel->getErrors()));
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
        $this->authorize('delete', Statuslabel::class);
        $statuslabel = Statuslabel::findOrFail($id);
        $this->authorize('delete', $statuslabel);
        $statuslabel->delete();
        return response()->json(Helper::formatStandardApiResponse('success', null,  trans('admin/statuslabels/message.delete.success')));

    }



     /**
     * Show a count of assets by status label for pie chart
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v3.0]
     * @return \Illuminate\Http\Response
     */

    public function getAssetCountByStatuslabel()
    {

        $statusLabels = Statuslabel::get();
        $labels=[];
        $points=[];
        $colors=[];
        foreach ($statusLabels as $statusLabel) {
            if ($statusLabel->assets()->count() > 0) {
                $labels[]=$statusLabel->name;
                $points[]=$statusLabel->assets()->whereNull('assigned_to')->count();
                if ($statusLabel->color!='') {
                    $colors[]=$statusLabel->color;
                }
            }
        }
        
        $colors_array = array_merge($colors, Helper::chartColors());

        $result= [
            "labels" => $labels,
            "datasets" => [ [
                "data" => $points,
                "backgroundColor" => $colors_array,
                "hoverBackgroundColor" =>  $colors_array
            ]]
        ];
        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function assets(Request $request, $id)
    {
        $this->authorize('view', Statuslabel::class);
        $this->authorize('index', Asset::class);
        $assets = Asset::where('status_id','=',$id);

        $allowed_columns = [
            'id',
            'name'
        ];

        $offset = request('offset', 0);
        $limit = $request->input('limit', 50);
        $order = $request->input('order') === 'asc' ? 'asc' : 'desc';
        $sort = in_array($request->input('sort'), $allowed_columns) ? $request->input('sort') : 'created_at';
        $assets->orderBy($sort, $order);

        $total = $assets->count();
        $assets = $assets->skip($offset)->take($limit)->get();


        return (new AssetsTransformer)->transformAssets($assets, $total);
    }


    /**
     * Returns a boolean response based on whether the status label
     * is one that is deployable.
     *
     * This is used by the hardware create/edit view to determine whether
     * we should provide a dropdown of users for them to check the asset out to.
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @since [v4.0]
     * @return Bool
     */
    public function checkIfDeployable($id) {
        $statuslabel = Statuslabel::findOrFail($id);
        if ($statuslabel->getStatuslabelType()=='deployable') {
            return '1';
        }

        return '0';
    }
}
