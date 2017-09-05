import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CartService } from "./cart.service";
import { CartModel } from "./cart.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { FormGroup, FormControl } from '@angular/forms';
import { counterRangeValidator } from '../../components/counter-input/counter-input';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { CheckoutPage } from "../checkout/checkout";


/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  loading: any;
  cart: CartModel = new CartModel();
  counterForm: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider,
    public authorizeProvider: AuthorizeProvider
  ) {
    this.loading = loadingCtrl.create();
    this.counterForm = new FormGroup({
      counter: new FormControl()
    });
  }

  ionViewWillEnter() {
    this.authorizeProvider.isAuthorization();
    let user = this.authorizeProvider.getAuthorization()
    if (user) {
      this.getCartData();
    }
  }

  ionViewDidLeave() {
    let user = this.authorizeProvider.getAuthorization()
    if (user && this.cart._id) {
      this.updateCartDataService();
    }
  }

  getCartData() {
    this.loading.present();
    this.cartService.getData().then((data) => {
      this.log.info(data);
      this.cart = data;
      this.loading.dismiss();
    }, (error) => {
      this.log.error(error);
      this.loading.dismiss();
    });
  }

  updateCartDataService() {
    this.loading.present();
    this.cartService.updateCartData(this.cart).then((data) => {
      window.localStorage.setItem('cart', JSON.stringify(data));
      console.log(data);
      this.loading.dismiss();
    }, (error) => {
      this.loading.dismiss();
      console.error(error);
    });
  }

  gotoProductDetail(item) {
    this.navCtrl.push(ProductDetailPage, item)
  }

  gotocheckout() {
    this.navCtrl.push(CheckoutPage)
  }

  deleteItem(e) {
    this.cart.products.splice(e.index, 1);
    this.onCalculate(e);
  }

  changeQtyItem(e) {
    this.onCalculate(e);
  }

  onCalculate(item) {
    let length = this.cart.products.length;
    this.cart.amount = 0;
    for (var i = 0; i < length; i++) {
      this.cart.amount = this.cart.amount + this.cart.products[i].itemamount;
    }
  }
}
