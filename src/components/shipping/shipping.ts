import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { CheckoutServiceProvider } from '../../pages/checkout/checkout.service';
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
  @Input() listshipping: any;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  address = {};
  data: any = {
    order: {
      shipping: {},
      items: [],
      payment: {},
      amount: 0,
      discount: 0,
      totalamount: 0,
      cart: '',
      tran: 0
    }
  };

  constructor(public alertCtrl: AlertController, public checkoutServiceProvider: CheckoutServiceProvider) {
    console.log('Hello ShippingComponent Component');
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'New Address',
      inputs: [
        {
          name: 'firstname',
          placeholder: 'Firstname'
        },
        {
          name: 'lastname',
          placeholder: 'Lastname'
        },
        {
          name: 'tel',
          placeholder: 'Tel'
        },
        {
          name: 'address',
          placeholder: 'Address'
        },
        {
          name: 'subdistrict',
          placeholder: 'Subdistrict'
        },
        {
          name: 'district',
          placeholder: 'District'
        },
        {
          name: 'province',
          placeholder: 'Province'
        },
        {
          name: 'postcode',
          placeholder: 'Postcode'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.listaddress.push(data);
            this.saveAddressData(data)
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  saveAddressData(data) {
    this.address = data;
    this.checkoutServiceProvider.saveAddressData(this.address).then((data) => {
    }, (error) => {
      console.error(error);
    });
  }




  selectaddress(data) {
    this.data.order.shipping = data;
  }
  setproduct(product, shipping) {
    var checkProduct = false;
    if (this.data.order.products && this.data.order.products.length > 0) {
      // console.log('+++++++++++++++++++++++++++++++++');
      this.data.order.products.forEach(itm => {
        if (itm.name === product.name) {
          checkProduct = true;
        }
      });
    }
    if (!checkProduct) {
      this.data.order.items.push({
        product: product,
        qty: product.qty,
        amount: product.itemamount,
        delivery: shipping.shipping
      });
    }
  }
  stepValidation() {
    if (this.data.order.shipping && this.data.order.shipping.address) {
      if (this.data.order.items.length === this.listshipping.products.length) {
        this.data.order.items.forEach(itm => {
          this.data.order.tran += itm.delivery.price;
          // console.log(this.data.order.tran);
        });
        this.data.order.amount = this.listshipping.amount;
        this.data.order.cart = this.listshipping._id;
        // console.log(this.listshipping);
        // console.log(this.data);
        this.gotoNext.emit(this.data);
      } else {
        alert('Please select products');
      }
    } else {
      alert('Please select shipping');
    }
  }

}
