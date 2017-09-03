import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { CheckoutServiceProvider } from './checkout.service';
import { addressModel } from './checkout.model';
import { shippingModel } from './checkout.model';
import { CompleteOrderedPage } from "../complete-ordered/complete-ordered";

/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  address: addressModel = new addressModel();
  shipping: shippingModel = new shippingModel();
  steps: Array<any> = [
    {
      value : 1,
      title : "SHIPPING"
    },
    {
      value : 2,
      title : "PAYMENT"
    },
    {
      value : 3,
      title : "CONFIRM"
    }
  ];
  currentstep:number = 1;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public checkoutServiceProvider: CheckoutServiceProvider, 
    public log: LogServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad CheckoutPage');
    this.getAddress();
    this.getShipping();
  }
  getAddress() {
    this.checkoutServiceProvider
      .getAddress()
      .then((data) => {
        this.address = data;
        this.log.info(this.address);
      }, (err) => {
        this.log.error(err);
      });
  }
  getShipping() {
    this.checkoutServiceProvider
      .getShipping()
      .then((data) => {
        this.shipping = data;
        this.log.info(this.shipping);
      }, (err) => {
        this.log.error(err);
      });
  }

  completedShippingStep(e){
    alert('completedShippingStep');
    this.currentstep += 1;
  }

  completedPaymentStep(e){
    alert('completedPaymentStep');
    this.currentstep += 1;
  }

  completedConfirmStep(e){
    alert('completedConfirmStep');
    this.navCtrl.push(CompleteOrderedPage);
  }

}
