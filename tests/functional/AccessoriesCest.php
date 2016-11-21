<?php


class AccessoriesCest
{
    public function _before(FunctionalTester $I)
    {
         $I->amOnPage('/login');
         $I->fillField('username', 'snipeit');
         $I->fillField('password', 'snipeit');
         $I->click('Login');
    }

    // tests
    public function tryToTest(FunctionalTester $I)
    {
        $I->wantTo('ensure that the create accessories form loads without errors');
        $I->lookForwardTo('seeing it load without errors');
        $I->amOnPage('/admin/accessories/create');
        $I->dontSee('Create Accessory', '.page-header');
        $I->see('Create Accessory', 'h1.pull-left');
    }

    public function failsEmptyValidation(FunctionalTester $I)
    {
        $I->wantTo("Test Validation Fails with blank elements");
        $I->amOnPage('/admin/accessories/create');
        $I->click('Save');
        $I->seeElement('.alert-danger');
        $I->see('The name field is required.', '.alert-msg');
        $I->see('The category id field is required.', '.alert-msg');
        $I->see('The qty field is required.', '.alert-msg');
    }

    public function failsShortValidation(FunctionalTester $I)
    {
        $I->wantTo("Test Validation Fails with short name");
        $I->amOnPage('/admin/accessories/create');
        $I->fillField('name', 't2');
        $I->fillField('qty', '-15');
        $I->fillField('min_amt', '-15');
        $I->click('Save');
        $I->seeElement('.alert-danger');
        $I->see('The name must be at least 3 characters', '.alert-msg');
        $I->see('The category id field is required', '.alert-msg');
        $I->see('The qty must be at least 1', '.alert-msg');
        $I->see('The min amt must be at least 0', '.alert-msg');
    }

    public function passesCorrectValidation(FunctionalTester $I)
    {
        $accessory = factory(App\Models\Accessory::class,'accessory')->make();
        $values = [
            'company_id'       => $accessory->company_id,
            'name'          => $accessory->name,
            'category_id'   => $accessory->category_id,
            'manufacturer_id'  => $accessory->manufacturer_id,
            'location_id'      => $accessory->location_id,
            'order_number'  => $accessory->order_number,
            'purchase_date' => '2016-01-01',
            'purchase_cost' => $accessory->purchase_cost,
            'qty'           => $accessory->qty,
            'min_amt'       => $accessory->min_amt
        ];

        $I->wantTo("Test Validation Succeeds");
        $I->amOnPage('/admin/accessories/create');

        $I->submitForm('form#create-form', $values);
        $I->seeRecord('accessories', $values);

        $I->dontSee('&lt;span class=&quot;');
        $I->seeElement('.alert-success');
    }

    public function allowsDelete(FunctionalTester $I)
    {
        $I->wantTo('Ensure I can delete an accessory');
        $I->amOnPage( route('delete/accessory', $I->getAccessoryId() ) );
        $I->seeElement('.alert-success');
    }
}
