import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonFormWizardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-form-wizard',
  templateUrl: 'ion-form-wizard.html'
})
export class IonFormWizardComponent {
  tabs: any = '1';
  @Input() steps:Array<any>;
  constructor() {
    console.log('Hello IonFormWizardComponent Component');
  }

}
