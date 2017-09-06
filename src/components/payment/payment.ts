import { Component, Output, EventEmitter, Input } from '@angular/core';

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
  data: any = {};
  @Input() paymentgateway: any;
  @Input() datashipping: any;
  datapayment: any = {};
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  channel: string = 'credit';
  constructor() {
    console.log('Hello PaymentComponent Component');
  }

  stepValidation() {
    this.gotoNext.emit(this.datapayment);
  }

  // paymenttype(type) {
  //   this.data.paymenttype = type;
  // }
  countername(name) {
    this.data.counterservice = name;
  }

  paymentType(e) {
    this.datapayment = e;
  }


}
