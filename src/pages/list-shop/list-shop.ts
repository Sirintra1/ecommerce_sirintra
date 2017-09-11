import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListShopModel } from '../list-shop/list-shop.model';
import { ListShopServiceProvider } from '../list-shop/list-shop.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ShopDetailPage } from "../shop-detail/shop-detail";

/**
 * Generated class for the ListShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-shop',
  templateUrl: 'list-shop.html',
})
export class ListShopPage {
  listShopData: ListShopModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, public listShopService: ListShopServiceProvider, public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ListShopPage');
    this.getListShopData();
  }
  getListShopData() {
    this.listShopService.getListShop().then((data) => {
      this.listShopData = data;
      this.log.info(this.listShopData);
    }, (err) => {
      this.log.error(err);
    });
  }

  selectShop(e) {
    this.navCtrl.push(ShopDetailPage, { data: e });
  }

}
