<?php

namespace App\Observers;

use App\Models\Accessory;
use App\Models\Setting;
use App\Models\Actionlog;
use Auth;

class AccessoryObserver
{
    /**
     * Listen to the User created event.
     *
     * @param  Accessory  $accessory
     * @return void
     */
    public function updated(Accessory $accessory)
    {

        $logAction = new Actionlog();
        $logAction->item_type = Accessory::class;
        $logAction->item_id = $accessory->id;
        $logAction->created_at =  date("Y-m-d H:i:s");
        $logAction->user_id = Auth::user()->id;
        $logAction->logaction('update');


    }


    /**
     * Listen to the Accessory created event, and increment
     * the next_auto_tag_base value in the settings table when i
     * a new accessory is created.
     *
     * @param  Accessory  $accessory
     * @return void
     */
    public function created(Accessory $accessory)
    {
        $settings = Setting::first();
        $settings->increment('next_auto_tag_base');
        \Log::debug('Setting new next_auto_tag_base value');

        $logAction = new Actionlog();
        $logAction->item_type = Accessory::class;
        $logAction->item_id = $accessory->id;
        $logAction->created_at =  date("Y-m-d H:i:s");
        $logAction->user_id = Auth::user()->id;
        $logAction->logaction('create');

    }

    /**
     * Listen to the Accessory deleting event.
     *
     * @param  Accessory  $accessory
     * @return void
     */
    public function deleting(Accessory $accessory)
    {
        $logAction = new Actionlog();
        $logAction->item_type = Accessory::class;
        $logAction->item_id = $accessory->id;
        $logAction->created_at =  date("Y-m-d H:i:s");
        $logAction->user_id = Auth::user()->id;
        $logAction->logaction('delete');
    }
}
