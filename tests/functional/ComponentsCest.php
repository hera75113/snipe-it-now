<?php


class ComponentsCest
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
        $I->wantTo('ensure that the create components form loads without errors');
        $I->lookForwardTo('seeing it load without errors');
        $I->amOnPage(route('create/component'));
        $I->dontSee('Create Component', '.page-header');
        $I->see('Create Component', 'h1.pull-left');
    }

    public function failsEmptyValidation(FunctionalTester $I)
    {
        $I->wantTo("Test Validation Fails with blank elements");
        $I->amOnPage(route('create/component'));
        $I->click('Save');
        $I->seeElement('.alert-danger');
        $I->see('The name field is required.', '.alert-msg');
        $I->see('The category id field is required.', '.alert-msg');
        $I->see('The qty field is required.', '.alert-msg');
    }

    public function failsShortValidation(FunctionalTester $I)
    {
        $I->wantTo("Test Validation Fails with short name");
        $I->amOnPage(route('create/component'));
        $I->fillField('name', 't2');
        $I->fillField('qty', '-15');
        $I->fillField('min_amt', '-15');
        $I->click('Save');
        $I->seeElement('.alert-danger');
        $I->see('The name must be at least 3 characters', '.alert-msg');
        $I->see('The qty must be at least 1', '.alert-msg');
    }

    public function passesCorrectValidation(FunctionalTester $I)
    {
        $component = factory(App\Models\Component::class, 'component')->make();

        $values = [
            'name'              => $component->name,
            'category_id'       => $component->category_id,
            'location_id'       => $component->location_id,
            'qty'               => $component->qty,
            'min_amt'           => $component->min_amt,
            'serial'            => $component->serial,
            'company_id'        => $component->company_id,
            'order_number'      => $component->order_number,
            'purchase_date'     => '2016-01-01',
            'purchase_cost'     => $component->purchase_cost,
        ];
        $I->wantTo("Test Validation Succeeds");
        $I->amOnPage(route('create/component'));
        $I->submitForm('form#create-form', $values);
        $I->seeRecord('components', $values);
        $I->dontSee('&lt;span class=&quot;');
        $I->seeElement('.alert-success');
    }
    public function allowsDelete(FunctionalTester $I)
    {
        $I->wantTo('Ensure I can delete a component');
        $I->amOnPage(route('delete/component', $I->getComponentId()));
        $I->seeElement('.alert-success');
    }
}
