import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListProductServiceProvider } from '../list-product/list-product.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { ProductDetailPage } from "../product-detail/product-detail";
import { ProductItemModel } from "../../app/app.model";
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
  listProductData: Array<ProductItemModel>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public listProductService: ListProductServiceProvider, public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ListProductPage');
    let view = this.navParams.get('view');
    if (view === 'shop') {
      let data = this.navParams.get('data');
      this.getListProductByShop(data);
    } else {
      this.getListProductByHome(view);
    }
  }

  getListProductByShop(data) {
    this.listProductService.getProductListByShop(data).then((data) => {
      this.listProductData = data;
    }, (err) => {
      this.log.error(err);
    });
  }

  getListProductByHome(view) {
    this.listProductService.getProductListByHome(view).then((data) => {
      this.listProductData = data;
    }, (err) => {
      this.log.error(err);
    });
  }

  selectedItem(e) {
    this.navCtrl.push(ProductDetailPage);
  }
}
