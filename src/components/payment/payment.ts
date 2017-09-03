import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the PaymentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment',
  templateUrl: 'payment.html'
})
export class PaymentComponent {
  data: any;

  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello PaymentComponent Component');
  }

  stepValidation() {
    this.gotoNext.emit(this.data);
  }

}
