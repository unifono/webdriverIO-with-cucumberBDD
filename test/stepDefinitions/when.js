//import { Given, When, Then } from 'cucumber';
import loginPage from '../pageobjects/ta-login.page';
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import startPage from '../pageobjects/ffc-demo-startclaim.page';
import ffcDemoPropertyType from '../pageobjects/ffc-demo-property-type';
import ffcDemoDateOfSubsidence from '../pageobjects/ffc-demo-date-of-subsidence';
import ffcDemoPropertyAccessible from '../pageobjects/ffc-demo-property-accessible';
import ffcDemoMineType from '../pageobjects/ffc-demo-mine-type';
import ffcDemoEmail from '../pageobjects/ffc-demo-email';

defineSupportCode(function({ When }) {
  
   // *** belongs to ffc-poc feature
  When(/^I start a new claim$/, function() {
    //startPage.startNewClaim.click();
    ffcDemoPropertyType.open();
  });

   // *** belongs to ffc-poc feature
  When(/^I select home as the property type$/, function() {
    ffcDemoPropertyType.homeRadioButton.click();
  });

    // *** belongs to ffc-poc feature
    When(/^I save and continue$/, function() {
      //startPage.startNewClaim.click();
      ffcDemoPropertyType.saveAndContinueButton.click();
    });

    // *** belongs to ffc-poc feature
    When(/^I confirm the property is still accessible$/, function() {
      ffcDemoPropertyAccessible.yesRadioButton.click();
      ffcDemoPropertyAccessible.saveAndContinueButton.click();
    });

    // *** belongs to ffc-poc feature
    When(/^I enter 01 01 1970 as the subsidence start date$/, function() {
      ffcDemoDateOfSubsidence.enterDay('01');
      ffcDemoDateOfSubsidence.enterMonth('01');
      ffcDemoDateOfSubsidence.enterYear('1970');
      ffcDemoDateOfSubsidence.saveAndContinueButton.click();
    });

    // *** belongs to ffc-poc feature
    When(/^I select gold mine$/, function() {
      ffcDemoMineType.goldCheckBox.click();
      ffcDemoMineType.saveAndContinueButton.click();
    });

    // *** belongs to ffc-poc feature
    When(/^I enter my email address$/, function() {
      ffcDemoEmail.enterEmail();
      ffcDemoEmail.submitButton.click();
    })

});
