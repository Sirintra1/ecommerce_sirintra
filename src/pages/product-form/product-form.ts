import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProductModel } from "./product-form.model";

/**
 * Generated class for the ProductFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-form',
  templateUrl: 'product-form.html',
})
export class ProductFormPage {
  productForm: ProductModel = new ProductModel();
  image: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductFormPage');
  }

  createProduct() {
    this.viewCtrl.dismiss({ data: this.productForm });
  }

  addImage() {
    this.productForm.images.push(this.image);
    this.image = "";
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
