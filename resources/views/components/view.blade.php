@extends('layouts/default')

{{-- Page title --}}
@section('title')

 {{ $component->name }}
 {{ trans('general.component') }}
@parent
@stop

{{-- Right header --}}
@section('header_right')
    @can('components.manage')
<div class="dropdown pull-right">
  <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">{{ trans('button.actions') }}
      <span class="caret"></span>
  </button>
  <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">
        @if ($component->assigned_to != '')
          @can('components.checkin')
          <li role="presentation"><a href="{{ route('checkin/component', $component->id) }}">{{ trans('admin/components/general.checkin') }}</a></li>
          @endcan
        @else
          @can('components.checkout')
          <li role="presentation"><a href="{{ route('checkout/component', $component->id)  }}">{{ trans('admin/components/general.checkout') }}</a></li>
          @endcan
        @endif
         @can('components.edit')
        <li role="presentation"><a href="{{ route('update/component', $component->id) }}">{{ trans('admin/components/general.edit') }}</a></li>
       @endcan

  </ul>
</div>
    @endcan
@stop


{{-- Page content --}}
@section('content')

<div class="row">
  <div class="col-md-9">
    <div class="box box-default">

      <div class="box-body">
        <div class="row">
          <div class="col-md-12">
            <div class="table table-responsive">

            <table
            name="component_users"
            class="table table-striped snipe-table"
            id="table"
            data-url="{{route('api.components.view', $component->id)}}"
            data-cookie="true"
            data-click-to-select="true"
            data-cookie-id-table="componentDetailTable-{{ config('version.hash_version') }}">
              <thead>
                <tr>
                  <th data-switchable="false" data-searchable="false" data-sortable="false" data-field="name">{{ trans('general.asset') }}</th>
                  <th data-switchable="false" data-searchable="false" data-sortable="false" data-field="qty">{{ trans('general.qty') }}</th>
                  <th data-switchable="false" data-searchable="false" data-sortable="false" data-field="created_at">{{ trans('general.date') }}</th>
                </tr>
              </thead>
            </table>
          </div>

          </div>
        </div>
      </div>
  </div>
    </div>


  <!-- side address column -->
  <div class="col-md-3">

      @if ($component->serial!='')
          <div class="col-md-12" style="padding-bottom: 5px;"><strong>{{ trans('admin/hardware/form.serial') }}: </strong>
              {{ $component->serial }} </div>
      @endif

    @if ($component->purchase_date)
        <div class="col-md-12" style="padding-bottom: 5px;"><strong>{{ trans('admin/components/general.date') }}: </strong>
        {{ $component->purchase_date }} </div>
    @endif

    @if ($component->purchase_cost)
        <div class="col-md-12" style="padding-bottom: 5px;"><strong>{{ trans('admin/components/general.cost') }}:</strong>
        {{ $snipeSettings->default_currency }}

        {{ \App\Helpers\Helper::formatCurrencyOutput($component->purchase_cost) }} </div>
    @endif

    @if ($component->order_number)
        <div class="col-md-12" style="padding-bottom: 5px;"><strong>{{ trans('admin/components/general.order') }}:</strong>
        {{ $component->order_number }} </div>
    @endif

  </div>
</div>

@stop

@section('moar_scripts')
@include ('partials.bootstrap-table', ['exportFile' => 'component' . $component->name . '-export', 'search' => false])
@stop
