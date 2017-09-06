import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopDetailModel, AddressModel } from '../shop-detail/shop-detail.model';
import { ShopDetailServiceProvider } from '../shop-detail/shop-detail.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ProductItemModel } from "../../app/app.model";

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
  shopDetailData: ShopDetailModel = new ShopDetailModel();
  address: Array<AddressModel>;
  products: Array<ProductItemModel>;
  shop: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopDetailService: ShopDetailServiceProvider, public log: LogServiceProvider) {
    this.shop = this.navParams.get('data');
    console.log(this.shop);
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ShopDetailPage');
    this.getShopDetailData();
  }
  getShopDetailData() {
    this.shopDetailService.getShopDetail(this.shop._id).then((data) => {
      this.shopDetailData = data;
      this.log.info(data);
    }, (err) => {
      this.log.error(err);
    });
  }

  getShopAddressData() {
    this.shopDetailService.getShopAddressData().then((data) => {
      this.address = data;
    }, (err) => {
      this.log.error(err);
    });
  }

  getProductsByShopData() {
    this.shopDetailService.getShopProductData(this.shop._id).then((data) => {
      this.products = data;
    }, (err) => {
      this.log.error(err);
    });
  }

}