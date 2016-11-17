<?php
?>
@extends('layouts/default')

{{-- Page title --}}
@section('title')
    {{ trans('general.unaccepted_asset_report') }}
    @parent
@stop

{{-- Page content --}}
@section('content')

<div class="row">
  <div class="col-md-12">

  <div class="box box-default">
    <div class="box-body">

      <div class="table-responsive">
        <table
        name="unacceptedAssetsReport"
        id="table"
        data-cookie="true"
        data-click-to-select="true"
        data-cookie-id-table="unacceptedAssets">
           <thead>
           <tr role="row">
               <th class="col-sm-1">{{ trans('admin/companies/table.title') }}</th>
               <th class="col-sm-1">{{ trans('general.category') }}</th>
               <th class="col-sm-1">{{ trans('admin/hardware/form.model') }}</th>
               <th class="col-sm-1">{{ trans('admin/hardware/form.name') }}</th>
               <th class="col-sm-1">{{ trans('admin/hardware/table.asset_tag') }}</th>
               <th class="col-sm-1">{{ trans('admin/hardware/table.checkoutto') }}</th>
           </tr>
           </thead>
           <tbody>
           @if ($assetsForReport)
               @foreach ($assetsForReport as $assetItem)
                   <tr>
                       <td>{{ is_null($assetItem->company) ? '' : $assetItem->company->name }}</td>
                       <td>{{ $assetItem->model->category->name }}</td>
                       <td>{{ $assetItem->model->name }}</td>
                       <td>{{ link_to(config('app.url').'/hardware/'.$assetItem->id.'/view',$assetItem->showAssetName()) }}</td>
                       <td>{{ $assetItem->asset_tag }}</td>
                       <td>{{ link_to(config('app.url').'/admin/users/'.$assetItem->assigned_to.'/view', $assetItem->assigneduser->fullName())}}</td>
                   </tr>
               @endforeach
           @endif
           </tbody>
           <tfoot>
           <tr>
           </tr>
           </tfoot>
       </table>
     </div>
    </div>
  </div>
</div>
</div>

    @section('moar_scripts')
    <script src="{{ asset('assets/js/bootstrap-table.js') }}"></script>
    <script src="{{ asset('assets/js/extensions/cookie/bootstrap-table-cookie.js') }}"></script>
    <script src="{{ asset('assets/js/extensions/mobile/bootstrap-table-mobile.js') }}"></script>
    <script src="{{ asset('assets/js/extensions/export/bootstrap-table-export.js') }}"></script>
    <script src="{{ asset('assets/js/extensions/export/tableExport.js') }}"></script>
    <script src="{{ asset('assets/js/extensions/export/jquery.base64.js') }}"></script>
    <script type="text/javascript">
        $('#table').bootstrapTable({
            classes: 'table table-responsive table-no-bordered',
            undefinedText: '',
            iconsPrefix: 'fa',
            showRefresh: true,
            search: true,
            pageSize: {{ $snipeSettings->per_page }},
            pagination: true,
            sidePagination: 'client',
            sortable: true,
            cookie: true,
            mobileResponsive: true,
            showExport: true,
            showColumns: true,
            exportDataType: 'all',
            exportTypes: ['csv', 'txt','json', 'xml'],
            maintainSelected: true,
            paginationFirstText: "{{ trans('general.first') }}",
            paginationLastText: "{{ trans('general.last') }}",
            paginationPreText: "{{ trans('general.previous') }}",
            paginationNextText: "{{ trans('general.next') }}",
            pageList: ['10','25','50','100','150','200'],
            icons: {
                paginationSwitchDown: 'fa-caret-square-o-down',
                paginationSwitchUp: 'fa-caret-square-o-up',
                columns: 'fa-columns',
                refresh: 'fa-refresh'
            },

        });
    </script>
    @stop

@stop
