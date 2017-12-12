<?php

return array(

    'does_not_exist' => '모델이 존재하지 않습니다.',
    'assoc_users'	 => '이 모델은 현재 하나 이상의 자산들과 연결되어 있기에 삭제 할 수 없습니다. 자산들을 삭제하고 다시 삭제하길 시도하세요. ',


    'create' => array(
        'error'   => '모델이 생성되지 않았습니다. 다시 시도하세요.',
        'success' => '모델이 생성되었습니다.',
        'duplicate_set' => '이름, 제조사 그리고 모델 번호가 같은 자산 모델이 존재합니다.',
    ),

    'update' => array(
        'error'   => '모델이 갱신되지 않았습니다. 다시 시도하세요.',
        'success' => '모델이 갱신되었습니다.'
    ),

    'delete' => array(
        'confirm'   => '이 자산 모델을 삭제 하시겠습니까?',
        'error'   => '모델을 삭제하는 중 문제가 발생했습니다. 다시 시도해 주세요.',
        'success' => '모델이 삭제되었습니다.'
    ),

    'restore' => array(
        'error'   		=> '모델이 복원되지 않았습니다. 다시 시도해 주세요.',
        'success' 		=> '모델이 복원되었습니다.'
    ),

    'bulkedit' => array(
        'error'   		=> '변경된 항목이 없어서, 갱신되지 않습니다.',
        'success' 		=> '모델 갱신됨.'
    ),

    'bulkdelete' => array(
        'error'   		    => 'No models were selected, so nothing was deleted.',
        'success' 		    => ':success_count model(s) deleted!',
        'success_partial' 	=> ':success_count model(s) were deleted, however :fail_count were unable to be deleted because they still have assets associated with them.'
    ),

);
