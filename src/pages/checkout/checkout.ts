import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { CheckoutServiceProvider } from './checkout.service';
import { addressModel } from './checkout.model';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public checkoutServiceProvider: CheckoutServiceProvider, public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad CheckoutPage');
    this.getAddress();
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

}
