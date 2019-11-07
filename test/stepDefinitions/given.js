//import { Given, When, Then } from 'cucumber';
import loginPage from '../pageobjects/ta-login.page';
import { defineSupportCode } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import startPage from '../pageobjects/ffc-demo-startclaim.page';

defineSupportCode(function({ Given }) {

   // *** belongs to ffc-poc feature
   Given(/^I am on the start page$/, function() {
    startPage.open();     // navigating to login page
  });

});
