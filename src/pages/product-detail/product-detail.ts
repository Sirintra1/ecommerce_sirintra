import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDetailModel } from '../product-detail/product-detail.model';
import { ProductDetailServiceProvider } from '../product-detail/product-detail.service';
/**
 * Generated class for the ProductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  product:any;
  productdetailData: ProductDetailModel = new ProductDetailModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public productDetailService: ProductDetailServiceProvider) {
    this.product = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    this.getProductdetailData();
  }
  getProductdetailData() {
    this.productDetailService
      .getProductDetail()
      .then((data) => {
        this.productdetailData = data;
        console.log(this.productdetailData);
      }, (err) => {
        console.log(err);
      });
  }
  addToCart() {
    alert('thank you');
  }

}
