import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ShopDetailModel, AddressModel } from '../shop-detail/shop-detail.model';
import { ShopDetailServiceProvider } from '../shop-detail/shop-detail.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ProductItemModel } from "../../app/app.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { ListProductPage } from "../list-product/list-product";

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public shopDetailService: ShopDetailServiceProvider, public log: LogServiceProvider, public loadingCtrl: LoadingController) {
    this.shop = this.navParams.get('data');
    console.log(this.shop);
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ShopDetailPage');
    this.getShopDetailData();
    // this.getProductsByShopData();
  }

  getShopDetailData() {
    let loadingCtrl = this.loadingCtrl.create();
    loadingCtrl.present();
    this.shopDetailService.getShopDetail(this.shop._id).then((data) => {
      loadingCtrl.dismiss();
      this.shopDetailData = data;
      console.log(this.shopDetailData);
      this.log.info(data);
    }, (err) => {
      loadingCtrl.dismiss();
      this.log.error(err);
    });
  }

  // getShopAddressData() {
  //   let loadingCtrl = this.loadingCtrl.create();
  //   loadingCtrl.present();
  //   this.shopDetailService.getShopAddressData().then((data) => {
  //     loadingCtrl.dismiss();
  //     this.address = data;
  //   }, (err) => {
  //     loadingCtrl.dismiss();
  //     this.log.error(err);
  //   });
  // }

  // getProductsByShopData() {
  //   this.shopDetailService.getShopProductData(this.shop._id).then((data) => {
  //     this.products = data;
  //   }, (err) => {
  //     this.log.error(err);
  //   });
  // }

  goToProductDetail(e) {
    this.navCtrl.push(ProductDetailPage, { data: e });
  }

  goToProductList(e) {
    this.navCtrl.push(ListProductPage, { data: e, view: 'shop' });
  }

}