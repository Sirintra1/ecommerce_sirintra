import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListShopModel } from '../list-shop/list-shop.model';
import { ListShopServiceProvider } from '../list-shop/list-shop.service';

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
  listShopData: ListShopModel = new ListShopModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public listShopService: ListShopServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListShopPage');
    this.getListShopData();
  }
  getListShopData() {
    this.listShopService
      .getListShop()
      .then((data) => {
        this.listShopData = data;
        console.log(this.listShopData);
      }, (err) => {
        console.log(err);
      });
  }

}
