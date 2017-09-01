import { Component } from '@angular/core';

/**
 * Generated class for the IonFormWizardStepComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-form-wizard-step',
  templateUrl: 'ion-form-wizard-step.html'
})
export class IonFormWizardStepComponent {

  text: string;

  constructor() {
    console.log('Hello IonFormWizardStepComponent Component');
    this.text = 'Hello World';
  }

}
