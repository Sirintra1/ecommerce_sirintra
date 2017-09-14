import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController, ModalController, LoadingController } from 'ionic-angular';
import { CheckoutServiceProvider } from '../../pages/checkout/checkout.service';
import { FormAddressPage } from "../../pages/form-address/form-address";
/**
 * Generated class for the ShippingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shipping',
  templateUrl: 'shipping.html'
})
export class ShippingComponent {
  @Input() listaddress: Array<any>;
  @Input() cartItems: any;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  constructor(public alertCtrl: AlertController, public checkoutServiceProvider: CheckoutServiceProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
    console.log('Hello ShippingComponent Component');
  }

  selectedaddress(address) {
    this.cartItems.shipping = address;
    console.log(this.cartItems.shipping);    
  }

  selectedShipping(item, shipping) {
    item.delivery = shipping;
    this.calculate();
    console.log(item);
  }

  calculate() {
    let cart = this.cartItems;
    cart.amount = 0;
    cart.discount = 0;
    cart.deliveryprice = 0;
    cart.totalamount = 0;
    for (let i = 0; i < cart.items.length; i++) {
      // By item
      let price = cart.items[i].product.promotionprice ? cart.items[i].product.promotionprice : cart.items[i].product.price;
      // By Items
      cart.items[i].amount = cart.items[i].product.price * cart.items[i].qty;
      cart.items[i].discount = (cart.items[i].product.price - price) * cart.items[i].qty;
      cart.items[i].deliveryprice = (cart.items[i].delivery ? cart.items[i].delivery.price : 0) * cart.items[i].qty;
      cart.items[i].totalamount = (cart.items[i].amount - cart.items[i].discount) + cart.items[i].deliveryprice;
      // By order
      cart.amount += cart.items[i].amount;
      cart.discount += cart.items[i].discount;
      cart.deliveryprice += cart.items[i].deliveryprice;
      cart.totalamount += cart.items[i].totalamount;
    }
  }

  openModal() {
    let modal = this.modalCtrl.create(FormAddressPage);
    modal.onDidDismiss((data) => {
      console.log(data);
      if (data) {
        this.createAddress(data.address);
      }
    })
    modal.present();
  }

  createAddress(address) {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.checkoutServiceProvider.createAddressData(address).then((data) => {
      if (this.listaddress.length > 0) {
        this.listaddress.push(data);
      } else {
        this.listaddress = [data];
      }
      loading.dismiss();
    }, (error) => {
      console.log(error);
      loading.dismiss();
    });
  }

  stepValidation() {
    let cart = this.cartItems;
    if(!cart.shipping){
      return;
    }
    for (let i = 0; i < cart.items.length; i++) {
      if (!cart.items[i].delivery) {
        alert('กรุณาระบุวิธีจัดส่งสินค้า');
        return;
      }
    }
    console.log('สำเร็จ 1');
    this.gotoNext.emit(cart);
  }

}
