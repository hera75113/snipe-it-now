<?php
namespace App\Http\Transformers;

use App\Models\Location;
use Illuminate\Database\Eloquent\Collection;
use Gate;
use App\Helpers\Helper;

class LocationsTransformer
{

    public function transformLocations(Collection $locations, $total)
    {
        $array = array();
        foreach ($locations as $location) {
            $array[] = self::transformLocation($location);
        }
        return (new DatatablesTransformer)->transformDatatables($array, $total);
    }

    public function transformLocation(Location $location = null)
    {
        if ($location) {

            $children_arr = [];
            foreach($location->childLocations as $child) {
                $children_arr[] = [
                    'id' => (int) $child->id,
                    'name' => $child->name
                ];
            }

            $array = [
                'id' => (int) $location->id,
                'name' => e($location->name),
                'image' =>   ($location->image) ? app('locations_upload_url').e($location->image) : null,
                'address' => e($location->address),
                'city' => e($location->city),
                'state' => e($location->state),
                'country' => e($location->country),
                'zip' => e($location->zip),
                'assigned_assets_count' => (int) $location->assigned_assets_count,
                'assets_count'    => (int) $location->assets_count,
                'users_count'    => (int) $location->users_count,

                'created_at' => Helper::getFormattedDateObject($location->created_at, 'datetime'),
                'updated_at' => Helper::getFormattedDateObject($location->updated_at, 'datetime'),
                'parent' => ($location->parent) ? [
                    'id' => (int) $location->parent->id,
                    'name'=> e($location->parent->name)
                ] : null,
                'manager' => ($location->manager) ? (new UsersTransformer)->transformUser($location->manager) : null,


                'children' => $children_arr,
            ];

            $permissions_array['available_actions'] = [
                'update' => Gate::allows('update', Location::class) ? true : false,
                'delete' => (Gate::allows('delete', Department::class) && ($location->assigned_assets_count==0) && ($location->assets_count==0) && ($location->users_count==0) && ($location->deleted_at=='')) ? true : false,
            ];

            $array += $permissions_array;

            return $array;
        }


    }



}
