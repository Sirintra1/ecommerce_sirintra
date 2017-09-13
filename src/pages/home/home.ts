import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';


import { HomeService } from './home.service';
import { HomeModel } from "./home.model";
import { ProductDetailPage } from "../product-detail/product-detail";
import { ShopDetailPage } from "../shop-detail/shop-detail";
import { ListProductPage } from '../list-product/list-product';
import { ListShopPage } from '../list-shop/list-shop';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ShopFormPage } from "../shop-form/shop-form";
import { ListShopServiceProvider } from "../list-shop/list-shop.service";
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
  constructor(public navCtrl: NavController,
    public homeService: HomeService,
    public loadingCtrl: LoadingController,
    public log: LogServiceProvider,
    public listShopService: ListShopServiceProvider,
    public modalCtrl: ModalController
  ) {
  }

  ionViewWillEnter() {
    this.getHomeData();
  }

  getHomeData() {

    let loading = this.loadingCtrl.create();
    loading.present();
    this.homeService.getData().then((data) => {
      this.home = data;
      loading.dismiss();
    }, (error) => {
      console.error(error);
      loading.dismiss();
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
    this.navCtrl.push(ListProductPage, { view: e });
  }
  openPageShopList(e) {
    console.log(e);
    this.navCtrl.push(ListShopPage);
  }

  createShop() {
    let modal = this.modalCtrl.create(ShopFormPage);
    // Getting data from the modal:
    modal.onDidDismiss(data => {
      console.log('MODAL DATA', data);
      if (data) {
        this.listShopService.addShop(data)
          .then((resp) => {
            console.log(resp);
          }, (err) => {
            console.log(err);
          });
      };
    });
    modal.present();
  }


}
