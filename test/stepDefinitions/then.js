//import { Given, When, Then } from 'cucumber';
import myAccount from '../pageobjects/ta-myaccount.page';
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import ffcDemoPropertyType from '../pageobjects/ffc-demo-property-type';
import ffcDemoEmail from '../pageobjects/ffc-demo-email';

defineSupportCode(function({ Then }) {

    // *** belongs to fcc-demo feature
    Then(/^I am asked if the property is still accessible$/, function() {
      //ffcDemoPropertyType.propertyStillAccessible.message.true();
      //const header = $('h1=Is the property is still accessible?')
      //console.log(header.getText())
      
    });

    Then(/^I am told the service is unavailable$/, function() {
      ffcDemoEmail.unavailableService.isExisting();
    });

});
