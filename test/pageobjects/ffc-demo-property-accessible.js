import Page from './page';
import utl   from '../../utilities/common-utilities';

class propertyAccessible extends Page {

    /**
    * define elements
    */


    get serviceName()   { return $('//.govuk-header__link--service-name'); }
    get headingQuestion()   { return $('//.govuk-fieldset__heading'); }
    get questionHint()     { return $('//#accessible-hint'); }
    get yesRadioButton() { return $('//*[(@id = "accessible-1")]');}  
    get saveAndContinueButton()    { return $('.govuk-button');}

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('')       
        browser.pause(3000);
    }
    /**
     * your page specific methods
     */
}

export default new propertyAccessible()