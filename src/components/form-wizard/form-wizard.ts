import { Component } from '@angular/core';

/**
 * Generated class for the FormWizardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'form-wizard',
  templateUrl: 'form-wizard.html'
})
export class FormWizardComponent {

  text: string;

  constructor() {
    console.log('Hello FormWizardComponent Component');
    this.text = 'Hello World';
  }

}
