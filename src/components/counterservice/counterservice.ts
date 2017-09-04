import { Component, Input } from '@angular/core';
import { IonPaymentsComponent } from "../ion-payments/ion-payments";

/**
 * Generated class for the CounterserviceComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'counterservice',
  templateUrl: 'counterservice.html'
})
export class CounterserviceComponent {
  @Input() paymentgateway: any;
  @Input() value: string;
  text: string;

  constructor(public parent: IonPaymentsComponent) {
    console.log('Hello CounterserviceComponent Component');
    this.text = 'Hello World';
  }

}
