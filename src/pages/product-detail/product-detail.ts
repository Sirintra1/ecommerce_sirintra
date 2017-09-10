import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductDetailModel } from '../product-detail/product-detail.model';
import { ProductDetailServiceProvider } from '../product-detail/product-detail.service';
import { CartPage } from '../cart/cart';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { SocialSharing } from "@ionic-native/social-sharing";
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { ShopDetailPage } from "../shop-detail/shop-detail";
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
  product: any;
  productdetailData: ProductDetailModel = new ProductDetailModel;
  groups:Array<any>;
  

  constructor(
    private socialSharing: SocialSharing,
    public navCtrl: NavController,
    public navParams: NavParams,
    public productDetailService: ProductDetailServiceProvider,
    public log: LogServiceProvider,
    public authorizeProvider: AuthorizeProvider,
    public loadingCtrl: LoadingController
  ) {
    this.product = navParams.get('data') || { _id: 'test'};
    console.log(this.product);
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad ProductDetailPage');
    this.getProductdetailData();
  }
  getProductdetailData() {
    let loadingCtrl = this.loadingCtrl.create();
    loadingCtrl.present();
    this.productDetailService.getProductDetail(this.product._id).then((data) => {
      loadingCtrl.dismiss();
      this.productdetailData = data;
      this.groups = [
        {
            name: '5',
            percent: '60%',
            sum: 2
          },
          {
            name: '4',
            percent: '25%',
            sum: 1
          },
          {
            name: '3',
            percent: '0%',
            sum: 0
          },
          {
            name: '2',
            percent: '0%',
            sum: 0
          },
          {
            name: '1',
            percent: '25%',
            sum: 1
          }
        ];
      //console.log(this.productdetailData);
    }, (err) => {
      loadingCtrl.dismiss();
      this.log.error(err);
    });
  }

  addToCart(product) {
    this.authorizeProvider.isAuthorization();
    let loadingCtrl = this.loadingCtrl.create();
    let user = this.authorizeProvider.getAuthorization()
    if (user) {
      loadingCtrl.present();
      this.productDetailService.addToCart(product).then((data) => {
        loadingCtrl.dismiss();
        this.navCtrl.push(CartPage)
      }, (error) => {
        loadingCtrl.dismiss();
        console.error(error);
      });
    }
  }

  socialShare() {
    this.socialSharing.share('ทดสอบการแชร์จากแอป', 'แชร์ๆๆๆ', null, 'https://assets.wired.com/photos/w_1534/wp-content/uploads/2016/09/ff_nike-hyperadapt_angle_front.jpg').then(data => {
      alert('share success');
    }).catch(err => {
      alert(err);
    });
  }

  goToShop() {
    this.navCtrl.push(ShopDetailPage, { data: this.productdetailData.shop });
  }

}
