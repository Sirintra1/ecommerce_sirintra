import { Component, Input } from '@angular/core';

/**
 * Generated class for the IonPaymentsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-payments',
  templateUrl: 'ion-payments.html'
})
export class IonPaymentsComponent {
  @Input() paymentgateway: any;
  text: string;
  channel: any;

  constructor() {
    console.log('Hello IonPaymentsComponent Component');
    this.text = 'Hello World';
  }

}
