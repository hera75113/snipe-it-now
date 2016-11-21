<?php


class DepreciationCest
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
        $I->wantTo('Test Depreciation Creation');
        $I->lookForwardTo('seeing it load without errors');
        $I->amOnPage(route('create/depreciations'));
        $I->seeInTitle('Create Depreciation');
        $I->dontSee('Create Depreciation', '.page-header');
        $I->see('Create Depreciation', 'h1.pull-left');
    }

    public function failsEmptyValidation(FunctionalTester $I)
    {
        $I->wantTo("Test Validation Fails with blank elements");
        $I->amOnPage(route('create/depreciations'));
        $I->click('Save');
        $I->seeElement('.alert-danger');
        $I->see('The name field is required.', '.alert-msg');
        $I->see('The months field is required.', '.alert-msg');
    }

    public function failsShortValidation(FunctionalTester $I)
    {
        $I->wantTo("Test Validation Fails with short name");
        $I->amOnPage(route('create/depreciations'));
        $I->fillField('name', 't2');
        $I->click('Save');
        $I->seeElement('.alert-danger');
        $I->see('The name must be at least 3 characters', '.alert-msg');
    }

    public function passesCorrectValidation(FunctionalTester $I)
    {
        $depreciation = factory(App\Models\Depreciation::class, 'depreciation')->make();
        $values = [
            'name'      => $depreciation->name,
            'months'    => $depreciation->months
        ];
        $I->wantTo("Test Validation Succeeds");
        $I->amOnPage(route('create/depreciations'));
        $I->submitForm('form#create-form', $values);
        $I->seeRecord('depreciations', $values);
        $I->seeElement('.alert-success');
    }

    public function allowsDelete(FunctionalTester $I)
    {
        $I->wantTo('Ensure I can delete a depreciation');
        $I->amOnPage(route('delete/depreciations', $I->getDepreciationId()));
        $I->seeElement('.alert-success');
    }
}
