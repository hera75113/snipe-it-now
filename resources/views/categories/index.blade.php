@extends('layouts/default')

{{-- Page title --}}
@section('title')
{{ trans('admin/categories/general.asset_categories') }}
@parent
@stop


@section('header_right')
<a href="{{ route('categories.create') }}" class="btn btn-primary pull-right">
  {{ trans('general.create') }}</a>
@stop

{{-- Page content --}}
@section('content')

<div class="row">
  <div class="col-md-12">
    <div class="box box-default">
      <div class="box-body">
        <div class="table-responsive">
          <table
            class="table table-striped snipe-table"
            name="categories"
            id="table"
            data-url="{{route('api.categories.index') }}"
            data-cookie="true"
            data-click-to-select="true"
            data-cookie-id-table="categoriesTable-{{ config('version.hash_version') }}">
            <thead>
              <tr>
                <th data-sortable="true" data-field="id" data-visible="false">{{ trans('general.id') }}</th>
                <th data-sortable="true" data-field="name" data-formatter="categoriesLinkFormatter">{{ trans('admin/categories/table.title') }}</th>
                <th data-sortable="true" data-field="category_type">{{ trans('general.type') }}</th>
                <th data-searchable="false" data-sortable="false" data-field="assets_count">{{ trans('general.assets') }}</th>
                <th data-searchable="false" data-sortable="true" data-field="require_acceptance" data-formatter="trueFalseFormatter">{{ trans('admin/categories/table.require_acceptance') }}</th>
                <th data-searchable="false" data-sortable="true" data-field="use_default_eula" data-formatter="trueFalseFormatter">{{ trans('admin/categories/table.eula_text') }}</th>
                <th data-formatter="categoriesActionsFormatter" data-switchable="false" data-searchable="false" data-sortable="false" data-field="actions">{{ trans('table.actions') }}</th>
              </tr>
            </thead>
          </table>
        </div>
      </div><!-- /.box-body -->
    </div><!-- /.box -->
  </div>
</div>

@stop

@section('moar_scripts')
@include ('partials.bootstrap-table', ['exportFile' => 'categories-export', 'search' => true])
@stop

