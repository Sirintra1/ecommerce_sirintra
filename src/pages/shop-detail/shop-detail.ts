import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopModel } from '../shop-detail/shop-detail.model';
import { ShopDetailServiceProvider } from '../shop-detail/shop-detail.service';

/**
 * Generated class for the ShopDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  shopDetailData: ShopModel = new ShopModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopDetailService: ShopDetailServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopDetailPage');
    this.getShopDetailData() ;
  }
  getShopDetailData() {
    this.shopDetailService
      .getShopDetail()
      .then((data) => {
        this.shopDetailData = data;
        console.log(data);
      }, (err) => {
        console.log(err);
      });
  }
}