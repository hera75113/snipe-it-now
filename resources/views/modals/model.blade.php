<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">{{ trans('admin/models/table.create') }}</h4>
        </div>
        <div class="modal-body">
            <div class="alert alert-danger" id="modal_error_msg" style="display:none">
            </div>
            <div class="dynamic-form-row">
                <div class="col-md-4 col-xs-12"><label for="modal-name">{{ trans('general.name') }}:
                    </label></div>
                <div class="col-md-8 col-xs-12 required"><input type='text' id='modal-name' class="form-control"></div>
            </div>

            <div class="dynamic-form-row">
                <div class="col-md-4 col-xs-12"><label for="modal-manufacturer_id">{{ trans('general.manufacturer') }}:
                    </label></div>
                <div class="col-md-8 col-xs-12 required">{{ Form::select('modal-manufacturer', $manufacturer , '', array('class'=>'select2 parent', 'style'=>'width:100%','id' =>'modal-manufacturer_id')) }}</div>
            </div>

            <div class="dynamic-form-row">
                <div class="col-md-4 col-xs-12"><label for="modal-category_id">{{ trans('general.category') }}:
                    </label></div>
                <div class="col-md-8 col-xs-12 required">{{ Form::select('modal-category', $category ,'', array('class'=>'select2 parent', 'style'=>'width:100%','id' => 'modal-category_id')) }}</div>
            </div>

            <div class="dynamic-form-row">
                <div class="col-md-4 col-xs-12"><label for="modal-modelno">{{ trans('general.model_no') }}:</label></div>
                <div class="col-md-8 col-xs-12"><input type='text' id='modal-model_number' class="form-control"></div>
            </div>

            <div class="dynamic-form-row">
                <div class="col-md-4 col-xs-12"><label for="modal-fieldset_id">{{ trans('admin/models/general.fieldset') }}:</label></div>
                <div class="col-md-8 col-xs-12">{{ Form::select('custom_fieldset', \App\Helpers\Helper::customFieldsetList(),Input::old('custom_fieldset'), array('class'=>'select2', 'id'=>'modal-fieldset_id', 'style'=>'width:350px')) }}</div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('button.cancel') }}</button>
            <button type="button" class="btn btn-primary" id="modal-save">{{ trans('general.save') }}</button>
        </div>
    </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
