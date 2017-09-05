import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


import { HomeService } from './home.service';
import { HomeModel } from "./home.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { ShopDetailPage } from "../shop-detail/shop-detail";
import { ListProductPage } from '../list-product/list-product';
import { ListShopPage } from '../list-shop/list-shop';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  //images: Array<string> = [];
  home: HomeModel = new HomeModel();
  loading: any = this.loadingCtrl.create();
  constructor(public navCtrl: NavController,
    public homeService: HomeService,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.getHomeData();
  }

  getHomeData() {
    this.loading.present();
    this.homeService.getData().then((data) => {
      this.home = data;
      this.loading.dismiss();
    }, (error) => {
      console.error(error);
      this.loading.dismiss();
    });
  }

  selectedItem(e) {
    this.navCtrl.push(ProductDetailPage, { data: e });
  }

  selectedShop(e) {
    this.navCtrl.push(ShopDetailPage, { data: e });
  }

  openPageProductList(e) {
    console.log(e);
    this.navCtrl.push(ListProductPage);
  }
  openPageShopList(e) {
    console.log(e);
    this.navCtrl.push(ListShopPage);
  }
}
