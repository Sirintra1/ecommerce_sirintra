import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CheckoutServiceProvider } from '../../pages/checkout/checkout.service';

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
  @Input() paymentgateway: any;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  channel: string = 'credit';
  selectedGateway: any = {
    paymenttype: this.channel
  };
  constructor(public checkoutServiceProvider: CheckoutServiceProvider) {
    console.log('Hello PaymentComponent Component');
  }


  paymentType(paymentType) {
    this.selectedGateway = paymentType;
    console.log(this.selectedGateway);
  }

  formcredit(item) {
    this.selectedGateway.creditno = item.creditno;
    this.selectedGateway.creditname = item.creditname;
    this.selectedGateway.expdate = item.expdate;
    this.selectedGateway.creditcvc = item.creditcvc;
    console.log(this.selectedGateway);
  }

  counterservice(counterservice) {
    this.selectedGateway.counterservice = counterservice.name;
    console.log(this.selectedGateway);
  }

  stepValidation() {
    if (this.selectedGateway.paymenttype === 'credit') {
      if (!this.selectedGateway.creditno || !this.selectedGateway.creditname || !this.selectedGateway.expdate || !this.selectedGateway.creditcvc) {
        alert('กรุณาระบุข้อมูลบัตร');
        return;
      }
    } else if (this.selectedGateway.paymenttype === 'bank') {
      if (!this.selectedGateway.counterservice) {
        alert('กรุณาระบุข้อมูลแบงค์');
        return;
      }
    }

    this.gotoNext.emit(this.selectedGateway);
  }

}
