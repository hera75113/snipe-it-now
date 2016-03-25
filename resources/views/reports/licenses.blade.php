@extends('layouts/default')

{{-- Page title --}}
@section('title')
{{ trans('general.license_report') }} 
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
      name="licensesReport"
      id="table"
      class="table table-striped"
      data-cookie="true"
      data-click-to-select="true"
      data-cookie-id-table="licensesReportTable">
        <thead>
        <tr role="row">
            <th class="col-sm-1">{{ trans('admin/companies/table.title') }}</th>
            <th class="col-sm-1">{{ trans('admin/licenses/table.title') }}</th>
            <th class="col-sm-1">{{ trans('admin/licenses/table.serial') }}</th>
            <th class="col-sm-1">{{ trans('admin/licenses/form.seats') }}</th>
            <th class="col-sm-1">{{ trans('admin/licenses/form.remaining_seats') }}</th>
            <th class="col-sm-1">{{ trans('admin/licenses/form.expiration') }}</th>
            <th class="col-sm-1">{{ trans('admin/licenses/form.date') }}</th>
            <th class="col-sm-1">{{ trans('admin/licenses/form.cost') }}</th>
        </tr>
    </thead>
    <tbody>

        @foreach ($licenses as $license)
        <tr>
            <td>{{ is_null($license->company) ? '' : $license->company->name }}</td>
            <td>{{ $license->name }}</td>
            <td>{{ mb_strimwidth($license->serial, 0, 50, "...") }}</td>
            <td>{{ $license->seats }}</td>
            <td>{{ $license->remaincount() }}</td>
            <td>{{ $license->expiration_date }}</td>
            <td>{{ $license->purchase_date }}</td>
            <td>
            {{ \App\Models\Setting::first()->default_currency }}
            {{ number_format($license->purchase_cost) }}</td>
        </tr>
        @endforeach
    </tbody>
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
        pageSize: {{ \App\Models\Setting::getSettings()->per_page }},
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
