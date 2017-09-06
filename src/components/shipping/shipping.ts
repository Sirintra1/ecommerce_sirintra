import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';
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
  @Input() listshipping: Array<any>;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  data: any = {
    shipping: {},
    products: [],
    total: 0
  };
  
  constructor(public alertCtrl: AlertController) {
    console.log('Hello ShippingComponent Component');
  }

  // showPrompt() {
  //   let prompt = this.alertCtrl.create({
  //     title: 'New Address',
  //     inputs: [
  //       {
  //         name: 'firstname',
  //         placeholder: 'Firstname'
  //       },
  //       {
  //         name: 'lastname',
  //         placeholder: 'Lastname'
  //       },
  //       {
  //         name: 'tel',
  //         placeholder: 'Tel'
  //       },
  //       {
  //         name: 'address',
  //         placeholder: 'Address'
  //       },
  //       {
  //         name: 'subdistrict',
  //         placeholder: 'Subdistrict'
  //       },
  //       {
  //         name: 'district',
  //         placeholder: 'District'
  //       },
  //       {
  //         name: 'province',
  //         placeholder: 'Province'
  //       },
  //       {
  //         name: 'postcode',
  //         placeholder: 'Postcode'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: data => {
  //           this.listaddress.push(data);
  //           console.log('Saved clicked');
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }

  // selectaddress(address) {
  //   console.log(address);
  //   this.data.shipping = address;
  // }
  // setproduct(product, shipping) {
  //   var checkProduct = false;
  //   if (this.data.products && this.data.products.length > 0) {
  //     this.data.products.forEach(itm => {
  //       if (itm.name === product.name) {
  //         // console.log('checkProduct = true');
  //         checkProduct = true;
  //       }
  //     });
  //   }
  //   if (!checkProduct) {
  //     // console.log('checkProduct = false');
  //     this.data.products.push({
  //       name: product.name,
  //       qty: product.qty,
  //       price: product.price,
  //       choice: {
  //         discription: shipping.discription,
  //         type: shipping.type
  //       }
  //     });
  //   }
  // }
  // stepValidation() {
  //   if (this.data.shipping && this.data.shipping.address) {
  //     if (this.data.products.length === this.listshipping.products.length) {
  //       this.gotoNext.emit(this.data);
  //     } else {
  //       alert('Please select products');
  //     }
  //   }else{
  //     alert('Please select shipping');
  //   }
  // }

}
