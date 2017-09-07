import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the ConfirmComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmComponent {
  data: any;
  @Input() confirmgateway: any;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  confirmdiscount: number;
  constructor() {
    console.log('Hello ConfirmComponent Component');
  }

  discount(data) {
    if (data > 0) {
      if (this.confirmgateway.order.amount && this.confirmgateway.order.amount >= data) {
        this.confirmdiscount = data;
      } else {
        this.confirmdiscount = this.confirmgateway.order.amount;
      }
    } else {
      this.confirmdiscount = 0;
    }

  }

  stepValidation() {
    if (this.confirmdiscount && !undefined) {
      console.log('มีส่วนลด');
      this.confirmgateway.order.totalamount = ((this.confirmgateway.order.tran || 0) + (this.confirmgateway.order.amount || 0)) - (this.confirmdiscount || 0);
    } else {
      this.confirmgateway.order.totalamount = ((this.confirmgateway.order.tran || 0) + (this.confirmgateway.order.amount || 0));
    }
    this.gotoNext.emit(this.confirmgateway);
  }

}
