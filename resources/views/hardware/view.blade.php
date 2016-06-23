@extends('layouts/default')

{{-- Page title --}}
@section('title')
{{ trans('admin/hardware/general.view') }} {{ $asset->asset_tag }}
@parent
@stop




{{-- Right header --}}
@section('header_right')
<div class="dropdown pull-right">
  <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">{{ trans('button.actions') }}
      <span class="caret"></span>
  </button>
  <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">
      @if ($asset->assetstatus->deployable=='1')
        @if ($asset->assigned_to != '')
          <li role="presentation"><a href="{{ route('checkin/hardware', $asset->id) }}">{{ trans('admin/hardware/general.checkin') }}</a></li>
        @else
          <li role="presentation"><a href="{{ route('checkout/hardware', $asset->id)  }}">{{ trans('admin/hardware/general.checkout') }}</a></li>
        @endif
      @endif
        <li role="presentation"><a href="{{ route('update/hardware', $asset->id) }}">{{ trans('admin/hardware/general.edit') }}</a></li>
        <li role="presentation"><a href="{{ route('clone/hardware', $asset->id) }}">{{ trans('admin/hardware/general.clone') }}</a></li>
  </ul>
</div>
@stop




{{-- Page content --}}
@section('content')




<div class="row">
  <div class="col-md-12">



    <!-- Custom Tabs -->
    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <li class="active">
          <a href="#details" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-info-circle"></i></span> <span class="hidden-xs hidden-sm">Details</span></a>
        </li>
        <li>
          <a href="#software" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-floppy-o"></i></span> <span class="hidden-xs hidden-sm">Licenses</span></a>
        </li>
          <li>
              <a href="#components" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-hdd-o"></i></span> <span class="hidden-xs hidden-sm">Components</span></a>
          </li>
        <li>
          <a href="#maintenances" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-wrench"></i></span> <span class="hidden-xs hidden-sm">Maintenances</span></a>
        </li>

        <li>
          <a href="#history" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-history"></i></span> <span class="hidden-xs hidden-sm">History</span></a>
        </li>
        <li>
          <a href="#files" data-toggle="tab"><span class="hidden-lg hidden-md"><i class="fa fa-files-o"></i></span> <span class="hidden-xs hidden-sm">Files</span></a>
        </li>
        <li class="pull-right">
            <a href="#" data-toggle="modal" data-target="#uploadFileModal"><i class="fa fa-paperclip"></i> </a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane fade in active" id="details">
          <div class="row">
          <div class="col-md-8">
            <div class="table-responsive" style="margin-top: 10px;">
              <table class="table">
                  <tbody>
                  @if ($asset->company)
                      <tr>
                          <td>{{ trans('general.company') }}</td>
                          <td>{{ $asset->company->name }}</td>
                      </tr>
                  @endif
                    @if ($asset->name)
                    <tr>
                      <td>{{ trans('admin/hardware/form.name') }}</td>
                      <td>{{ $asset->name }}</td>
                    </tr>
                    @endif
                    @if ($asset->serial)
                    <tr>
                      <td>{{ trans('admin/hardware/form.serial') }}</td>
                      <td>{{ $asset->serial  }}</td>
                    </tr>
                    @endif
                    @if ($asset->model->manufacturer)
                      <tr>
                        <td>{{ trans('admin/hardware/form.manufacturer') }}</td>
                        <td>
                          <a href="{{ route('view/manufacturer', $asset->model->manufacturer->id) }}">
                          {{ $asset->model->manufacturer->name }}
                          </a>
                         </td>
                      </tr>
                      <tr>
                        <td>{{ trans('admin/hardware/form.model') }}</td>
                        <td>
                          <a href="{{ route('view/model', $asset->model->id) }}">
                          {{ $asset->model->name }}
                          </a>
                         </td>
                      </tr>
                      <tr>
                        <td>{{ trans('admin/models/table.modelnumber') }}</td>
                        <td>
                          {{ $asset->model->modelno }}
                         </td>
                      </tr>
                    @endif

                    @if ($asset->model->fieldset)
                    @foreach($asset->model->fieldset->fields as $field)
                      <tr>
                        <td>{{ $field->name }}</td>
                        <td>
                          {{ $asset->{$field->db_column_name()} }}
                         </td>
                      </tr>
                      @endforeach
                    @endif



                    @if ($asset->purchase_date)
                      <tr>
                        <td>{{ trans('admin/hardware/form.date') }}</td>
                        <td>
                          {{ date('M d, Y',strtotime($asset->purchase_date)) }}
                         </td>
                      </tr>
                    @endif

                    @if ($asset->purchase_cost)

                      <tr>
                        <td>{{ trans('admin/hardware/form.cost') }}</td>
                        <td>
                          @if (($asset->id) && ($asset->userloc))
                            {{ $asset->userloc->currency }}
                          @elseif (($asset->id) && ($asset->assetloc))
                            {{ $asset->assetloc->currency }}
                          @else
                            {{ \App\Models\Setting::first()->default_currency }}
                          @endif
                          {{ number_format($asset->purchase_cost,2) }}

                          @if ($asset->order_number)
                              (Order #{{ $asset->order_number }})
                          @endif

                         </td>
                      </tr>
                    @endif


                    @if ($asset->supplier_id)
                      <tr>
                        <td>{{ trans('admin/hardware/form.supplier') }}</td>
                        <td>
                          <a href="{{ route('view/supplier', $asset->supplier_id) }}">
                          {{ $asset->supplier->name }}
                          </a>
                         </td>
                      </tr>
                    @endif

                    @if ($asset->warranty_months)

                    <tr{!! $asset->warrantee_expires() < date("Y-m-d") ? ' class="warning"' : '' !!}>
                      <td>{{ trans('admin/hardware/form.warranty') }}</td>
                      <td>
                        {{ $asset->warranty_months }}
                        {{ trans('admin/hardware/form.months') }}

                        ({{ trans('admin/hardware/form.expires') }}
                        {{ $asset->warrantee_expires() }})
                       </td>
                    </tr>
                    @endif

                    @if ($asset->depreciation)
                      <tr>
                        <td>{{ trans('admin/hardware/form.depreciation') }}</td>
                        <td>
                            {{ $asset->depreciation->name }}
                            ({{ $asset->depreciation->months }}
                            {{ trans('admin/hardware/form.months') }}
                            )
                         </td>
                      </tr>
                      <tr>
                        <td>
                          {{ trans('admin/hardware/form.fully_depreciated') }}
                        </td>
                        <td>
                          @if ($asset->time_until_depreciated()->y > 0)
                           {{ $asset->time_until_depreciated()->y }}
                           {{ trans('admin/hardware/form.years') }},
                          @endif
                          {{ $asset->time_until_depreciated()->m }}
                          {{ trans('admin/hardware/form.months') }}
                          ({{ $asset->depreciated_date()->format('Y-m-d') }})
                         </td>
                      </tr>

                    @endif
                    @if ($asset->model->eol)
                      <tr>
                        <td>{{ trans('admin/hardware/form.eol_rate') }}</td>
                        <td>
                          {{ $asset->model->eol }}
                          {{ trans('admin/hardware/form.months') }}

                          (
                          {{ trans('admin/hardware/form.eol_date') }}:
                          {{ $asset->eol_date() }}
                          @if ($asset->months_until_eol())
                            (
                            @if ($asset->months_until_eol()->y > 0) {{ $asset->months_until_eol()->y }}
                            {{ trans('general.years') }},
                            @endif

                            {{ $asset->months_until_eol()->m }}
                            {{ trans('general.months') }}
                          @endif
                        )
                         </td>
                      </tr>
                    @endif
                    @if ($asset->expected_checkin!='')
                      <tr>
                        <td>{{ trans('admin/hardware/form.expected_checkin') }}</td>
                        <td>
                          {{ $asset->expected_checkin }}
                         </td>
                      </tr>
                   @endif
                   <tr>
                      <td>{{ trans('admin/hardware/form.notes') }}</td>
                      <td>{{ $asset->notes }}</td>
                    </tr>
                   @if ($asset->created_at)
                      <tr>
                          <td>{{ trans('general.created_at') }}</td>
                          <td>
                              {{ $user->created_at->format('F j, Y h:iA') }}
                          </td>
                      </tr>
                   @endif
                  </tbody>
              </table>
            </div> <!-- /table-responsive -->
          </div><!-- /col -->

          <div class="col-md-4">

              @if ($asset->image)
                  <img src="{{ Config::get('app.url') }}/uploads/assets/{{{ $asset->image }}}" class="assetimg">
              @else
                  @if ($asset->model->image!='')
                      <img src="{{ Config::get('app.url') }}/uploads/models/{{{ $asset->model->image }}}" class="assetimg">
                  @endif
              @endif

              @if  (App\Models\Setting::getSettings()->qr_code=='1')
                 <img src="{{ config('get.url') }}/hardware/{{ $asset->id }}/qr_code" class="img-thumbnail pull-right" style="height: 100px; width: 100px; margin-right: 10px;">
              @endif


            @if (($asset->assigneduser) && ($asset->assigned_to > 0) && ($asset->deleted_at==''))
                <h4>{{ trans('admin/hardware/form.checkedout_to') }}</h4>
                <p><img src="{{ $asset->assigneduser->gravatar() }}" class="user-image-inline" alt="{{ $asset->assigneduser->fullName() }}">
                <a href="{{ route('view/user', $asset->assigned_to) }}">{{ $asset->assigneduser->fullName() }}</a></p>

                    <ul class="list-unstyled">


                      @if (isset($asset->assigneduser->email))
                        <li><i class="fa fa-envelope-o"></i> <a href="mailto:{{ $asset->assigneduser->email }}">{{ $asset->assigneduser->email }}</a></li>
                      @endif

                      @if ((isset($asset->assigneduser->phone)) && ($asset->assigneduser->phone!=''))
                        <li><i class="fa fa-phone"></i> {{ $asset->assigneduser->phone }}</li>
                      @endif

                      @if (isset($asset->userloc))
                        <li>{{ $asset->userloc->name }}
                        <li>{{ $asset->userloc->address }}
                        @if (isset($asset->userloc->address2))
                          {{ $asset->userloc->address2 }}
                        @endif
                        </li>
                        @if (isset($asset->assetloc->city))
                          <li>{{ $asset->assetloc->city }}, {{ $asset->assetloc->state }} {{ $asset->assetloc->zip }}</li>
                        @endif

                      @elseif (isset($asset->assetloc))
                          <li>{{ $asset->assetloc->name }}
                          <li>{{ $asset->assetloc->address }}
                          @if (isset($asset->assetloc->address2))
                            {{ $asset->assetloc->address2 }}
                          @endif
                          </li>
                          @if (isset($asset->assetloc->city))
                            <li>{{ $asset->assetloc->city }}, {{ $asset->assetloc->state }} {{ $asset->assetloc->zip }}</li>
                          @endif

                      @endif
                    </ul>

			          @endif
          </div>
        </div><!-- /row -->
        </div><!-- /.tab-pane -->

          <div class="tab-pane fade" id="components">
              <!-- checked out assets table -->
              <div class="row">
                  <div class="col-md-12">
                      <table class="table table-striped">

                          <tbody>
                          <?php $totalCost = 0; ?>

                          @foreach ($asset->components as $component)
                              @if (is_null($component->deleted_at))
                                  <tr>
                                      <td><a href="{{ route('view/component', $component->id) }}">{{ $component->name }}</a></td>
                                  </tr>
                              @endif
                          @endforeach
                          </tbody>
                          <tfoot>
                          <tr>
                              <td colspan="7" class="text-right">{{ $use_currency.$totalCost }}</td>
                          </tr>
                          </tfoot>
                      </table>
                   </div>
              </div>
          </div>
        <div class="tab-pane fade" id="software">
          <div class="row">
          <div class="col-md-12">
          <!-- Licenses assets table -->

          @if (count($asset->licenses) > 0)
          <table class="table">
            <thead>
              <tr>
                <th class="col-md-4">{{ trans('general.name') }}</th>
                <th class="col-md-4"><span class="line"></span>{{ trans('admin/licenses/form.license_key') }}</th>
                <th class="col-md-1"><span class="line"></span>{{ trans('table.actions') }}</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($asset->licenseseats as $seat)
              <tr>
                <td><a href="{{ route('view/license', $seat->license->id) }}">{{ $seat->license->name }}</a></td>
                <td>{{ $seat->license->serial }}</td>
                <td><a href="{{ route('checkin/license', $seat->id) }}" class="btn-flat info btn-sm">{{ trans('general.checkin') }}</a>
                </td>
              </tr>
              @endforeach
            </tbody>
          </table>
          @else

          <div class="col-md-12">
            <div class="alert alert-info alert-block">
              <i class="fa fa-info-circle"></i>
              {{ trans('general.no_results') }}
            </div>
          </div>
          @endif
          </div><!-- /col -->
        </div>
        </div>
        <div class="tab-pane fade" id="maintenances">
          <div class="row">
          <div class="col-md-12">
          <h6>{{ trans('general.asset_maintenances') }}
          [ <a href="{{ route('create/asset_maintenances', $asset->id) }}">{{ trans('button.add') }}</a> ]
          </h6>

          <!-- Asset Maintenance table -->
          @if (count($asset->assetmaintenances) > 0)
              <table class="table table-striped">
                  <thead>
                  <tr>
                      <th>{{ trans('admin/asset_maintenances/table.supplier_name') }}</th>
                      <th>{{ trans('admin/asset_maintenances/form.title') }}</th>
                      <th>{{ trans('admin/asset_maintenances/form.asset_maintenance_type') }}</th>
                      <th>{{ trans('admin/asset_maintenances/form.start_date') }}</th>
                      <th>{{ trans('admin/asset_maintenances/form.completion_date') }}</th>
                      <th>{{ trans('admin/asset_maintenances/table.is_warranty') }}</th>
                      <th>{{ trans('admin/asset_maintenances/form.cost') }}</th>
                      <th>{{ trans('general.admin') }}</th>
                      <th>{{ trans('table.actions') }}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <?php $totalCost = 0; ?>

                  @foreach ($asset->assetmaintenances as $assetMaintenance)
                      @if (is_null($assetMaintenance->deleted_at))
                      <tr>
                          <td><a href="{{ route('view/supplier', $assetMaintenance->supplier_id) }}">{{ $assetMaintenance->supplier->name }}</a></td>
                          <td>{{ $assetMaintenance->title }}</td>
                          <td>{{ $assetMaintenance->asset_maintenance_type }}</td>
                          <td>{{ $assetMaintenance->start_date }}</td>
                          <td>{{ $assetMaintenance->completion_date }}</td>
                          <td>{{ $assetMaintenance->is_warranty ? trans('admin/asset_maintenances/message.warranty') : trans('admin/asset_maintenances/message.not_warranty') }}</td>
                          <td class="text-right"><nobr>{{ $use_currency.$assetMaintenance->cost }}</nobr></td>
                          <td>

                              @if ($assetMaintenance->admin)
                                  <a href="{{ config('app.url')  }}/admin/users/{{ $assetMaintenance->admin->id }}/view">{{ $assetMaintenance->admin->fullName() }}</a>
                              @endif

                              </td>
                            <?php $totalCost += $assetMaintenance->cost; ?>
                          <td><a href="{{ route('update/asset_maintenance', $assetMaintenance->id) }}" class="btn btn-warning btn-sm"><i class="fa fa-pencil icon-white"></i></a>
                          </td>
                      </tr>
                      @endif
                  @endforeach
                  </tbody>
                  <tfoot>
                  <tr>
                      <td colspan="7" class="text-right">{{ $use_currency.number_format($totalCost, 2) }}</td>
                  </tr>
                  </tfoot>
              </table>
          @else

              <div class="alert alert-info alert-block">
                  <i class="fa fa-info-circle"></i>
                  {{ trans('general.no_results') }}
              </div>
          @endif
        </div>
      </div>
        </div>

        <div class="tab-pane fade" id="history">
          <!-- checked out assets table -->
          <div class="row">
          <div class="col-md-12">
          <table class="table table-hover table-fixed break-word">
              <thead>
                  <tr>
                      <th class="col-md-3">{{ trans('general.date') }}</th>
                      <th class="col-md-2"><span class="line"></span>{{ trans('general.admin') }}</th>
                      <th class="col-md-2"><span class="line"></span>{{ trans('table.actions') }}</th>
                      <th class="col-md-2"><span class="line"></span>{{ trans('general.user') }}</th>
                      <th class="col-md-3"><span class="line"></span>{{ trans('general.notes') }}</th>
                  </tr>
              </thead>
              <tbody>
              @if (count($asset->assetlog) > 0)
                  @foreach ($asset->assetlog as $log)

                  <tr>
                      <td>{{ $log->created_at }}</td>
                      <td>
                          @if (isset($log->user_id))
                          {{ $log->adminlog->fullName() }}
                          @endif
                      </td>
                      <td>{{ $log->action_type }}</td>
                      <td>
                          @if ((isset($log->checkedout_to)) && ($log->checkedout_to!=0) && ($log->checkedout_to!=''))

                              @if ($log->userlog->deleted_at=='')
                                  <a href="{{ route('view/user', $log->checkedout_to) }}">
                                  {{ $log->userlog->fullName() }}
                                   </a>
                              @else
                                  <del>{{ $log->userlog->fullName() }}</del>
                              @endif

                          @endif
                      </td>
                      <td>
                          @if ($log->note) {{ $log->note }}
                          @endif
                      </td>
                  </tr>

                  @endforeach
                  @endif
                  <tr>
                      <td>{{ $asset->created_at }}</td>
                      <td>
                          @if ($asset->adminuser)
                              {{ $asset->adminuser->fullName() }}
                          @else
                              @trans('general.unknown_admin')
                          @endif

                      </td>
                      <td>{{ trans('general.created_asset') }}</td>
                      <td></td>
                      <td>
      <!--             @if ($asset->notes)
                      {{ $asset->notes }}
                      @endif -->
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>
        </div>
        <div class="tab-pane fade" id="files">
          <div class="row">


        {{ Form::open([
        'method' => 'POST',
        'route' => ['upload/asset', $asset->id],
        'files' => true, 'class' => 'form-horizontal' ]) }}

        <div class="col-md-2">
            <span class="btn btn-default btn-file">Browse for file...
                {{ Form::file('assetfile[]', ['multiple' => 'multiple']) }}
            </span>
        </div>
        <div class="col-md-7">
            {{ Form::text('notes', Input::old('notes', Input::old('notes')), array('class' => 'form-control','placeholder' => 'Notes')) }}
        </div>
        <div class="col-md-3">
          <button type="submit" class="btn btn-primary">{{ trans('button.upload') }}</button>
        </div>

        <div class="col-md-12">
            <p>{{ trans('admin/hardware/general.filetype_info') }}</p>
            <hr>
        </div>

        {{ Form::close() }}

          <div class="col-md-12">


          <table class="table table-hover">
                <thead>
                    <tr>
                        <th class="col-md-4">{{ trans('general.notes') }}</th>
                        <th class="col-md-2"></th>
                        <th class="col-md-4"><span class="line"></span>{{ trans('general.file_name') }}</th>
                        <th class="col-md-2"></th>
                        <th class="col-md-2"></th>
                    </tr>
                </thead>
                <tbody>
                    @if (count($asset->uploads) > 0)
                        @foreach ($asset->uploads as $file)
                        <tr>
                            <td>
                                @if ($file->note)
                                    {{ $file->note }}
                                @endif
                            </td>
                            <td>
                                @if ( \App\Helpers\Helper::checkUploadIsImage($file->get_src('assets')))
                                     <a href="../{{ $asset->id }}/showfile/{{ $file->id }}" data-toggle="lightbox" data-type="image"><img src="../{{ $asset->id }}/showfile/{{ $file->id }}"" class="img-thumbnail" style="max-width: 50px;"></a>
                                @endif
                            </td>
                            <td>
                                {{ $file->filename }}
                            </td>
                            <td>
                                @if ($file->filename)
                                <a href="{{ route('show/assetfile', [$asset->id, $file->id]) }}" class="btn btn-default">{{ trans('general.download') }}</a>
                                @endif
                            </td>
                            <td>
                                <a class="btn delete-asset btn-danger btn-sm" href="{{ route('delete/assetfile', [$asset->id, $file->id]) }}"><i class="fa fa-trash icon-white"></i></a>
                            </td>
                        </tr>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="4">
                                {{ trans('general.no_results') }}
                            </td>
                        </tr>

                    @endif

                </tbody>
            </table>
        </div>
      </div>
    </div>

    </div><!-- nav-tabs-custom -->


  </div>
</div>

@section('moar_scripts')
<script>
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
</script>
@stop

@stop
