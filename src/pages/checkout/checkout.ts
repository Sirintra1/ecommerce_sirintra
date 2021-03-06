import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, App } from 'ionic-angular';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { CheckoutServiceProvider } from './checkout.service';
import { CheckoutModel, AddressListModel, PaymentMasterModel } from './checkout.model';

import { CompleteOrderedPage } from "../complete-ordered/complete-ordered";
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { FormAddressPage } from '../form-address/form-address';
import { CartService } from "../cart/cart.service";
import { CartModel } from "../cart/cart.model";


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
  steps: Array<any> = [
    {
      value: 1,
      title: "SHIPPING"
    },
    {
      value: 2,
      title: "PAYMENT"
    },
    {
      value: 3,
      title: "CONFIRM"
    }
  ];
  currentstep: number = 1;

  // form variable 1
  cartData: CartModel = new CartModel();
  order: CheckoutModel = new CheckoutModel();
  address: AddressListModel = new AddressListModel();
  // end form variable 1
  // ******************************************************************************************  
  // form variable 2
  payment: PaymentMasterModel = new PaymentMasterModel();
  // end form variable 2
  // ******************************************************************************************  
  // form variable 3

  // end form variable 4

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public checkoutServiceProvider: CheckoutServiceProvider,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider,
    public authorizeProvider: AuthorizeProvider,
    public modalCtrl: ModalController,
    public cartService: CartService,
    public app: App
  ) {
  }

  ionViewWillEnter() {
    this.authorizeProvider.isAuthorization();
    let user = this.authorizeProvider.getAuthorization()
    if (user) {
      this.getCartData();
      this.getAddress();
      this.getPaymentGateway();
    }
  }

  // form function 1

  getCartData() {
    let loading = this.loadingCtrl.create();
    loading.present();
    setTimeout(() => {
      this.cartData = JSON.parse(window.localStorage.getItem('cart')).cart;
      loading.dismiss();
    }, 2000);
  }

  getAddress() {
    this.checkoutServiceProvider.getAddressListData().then((data) => {
      this.address = data;
    }, (error) => {
      console.log(error);
    });
  }

  getPaymentGateway() {
    this.checkoutServiceProvider.getPaymentGatewayData().then((data) => {
      this.payment = data;
    }, (error) => {
      console.log(error);
    });
  }

  completedShippingStep(e) {
    this.order = e;
    this.currentstep = 2;
    console.log('------ 1 ------', this.order);
  }

  // end form function 1
  // ******************************************************************************************
  // form function 2

  completedPaymentStep(e) {
    this.order.payment = e;
    console.log('------ 2 ------', this.order);
    this.currentstep = 3;
  }

  // end form function 2
  // ******************************************************************************************
  // form function 3

  completedConfirmStep(e) {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.order = e;
    let order = {
      items: this.order.items,
      amount: this.order.amount,
      discountcode: this.order.discountcode,
      discount: this.order.discount,
      totalamount: this.order.totalamount,
      deliveryprice: this.order.deliveryprice,
      shipping: this.order.shipping,
      payment: this.order.payment
    }
    console.log('------ 3 ------', order);
    this.checkoutServiceProvider.saveOrderData(order).then((data) => {
      data.shipping = order.shipping;
      window.localStorage.setItem('order', JSON.stringify(data));
      this.app.getRootNav().setRoot(CompleteOrderedPage); // set full page
      loading.dismiss();
    }, (error) => {
      loading.dismiss();
      alert(JSON.stringify(error));
      console.log(error);

    });
  }

  // end form function 3




}

  // openFormAddress(e) {
  //   let modal = this.modalCtrl.create(FormAddressPage);
  //   // Getting data from the modal:
  //   modal.onDidDismiss(data => {
  //     this.checkoutServiceProvider.saveAddressData(data).then(resp => {
  //       this.getAddressData();
  //     })
  //     console.log(data);
  //   });
  //   modal.present();
  // }

