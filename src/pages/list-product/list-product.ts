import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProductModel } from '../list-product/list-product.model';
import { ListProductServiceProvider } from '../list-product/list-product.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the ListProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-product',
  templateUrl: 'list-product.html',
})
export class ListProductPage {
  listProductData: ListProductModel = new ListProductModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public listProductService: ListProductServiceProvider, public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ListProductPage');
    this.getListProductData();
  }
  getListProductData() {
    this.listProductService
      .getListProfile()
      .then((data) => {
        this.listProductData = data;
      }, (err) => {
        this.log.error(err);
      });
  }
}
