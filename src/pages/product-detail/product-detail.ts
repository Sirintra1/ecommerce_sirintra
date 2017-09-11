import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { ProductDetailModel } from '../product-detail/product-detail.model';
import { ProductDetailServiceProvider } from '../product-detail/product-detail.service';
import { CartPage } from '../cart/cart';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { SocialSharing } from "@ionic-native/social-sharing";
import { AuthorizeProvider } from "../../providers/authorize/authorize";
import { ShopDetailPage } from "../shop-detail/shop-detail";
import { WriteReviewPage } from "../write-review/write-review";
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
  groups: Array<any>;
  isLiked: boolean;
  nameOfLike: string;

  constructor(
    private socialSharing: SocialSharing,
    public navCtrl: NavController,
    public navParams: NavParams,
    public productDetailService: ProductDetailServiceProvider,
    public log: LogServiceProvider,
    public authorizeProvider: AuthorizeProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController
  ) {
    this.product = navParams.get('data') || { _id: 'test' };
    this.groups = [
      {
        name: '5',
        percent: '0%',
        sum: 0
      },
      {
        name: '4',
        percent: '0%',
        sum: 0
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
        percent: '0%',
        sum: 0
      }
    ];
    this.isLiked = false;
    this.nameOfLike = this.isLiked ? 'ios-heart' : 'ios-heart-outline';
    //console.log(this.product);
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
      this.reviewSummary(this.productdetailData.reviews);
      //console.log(this.productdetailData);
    }, (err) => {
      loadingCtrl.dismiss();
      this.log.error(err);
    });
  }

  reviewSummary(reviews) {
    reviews.forEach(element => {
      switch (Math.round(element.rate)) {
        case 5:
          this.groups[0].sum += 1;
          this.groups[0].percent = ((this.groups[0].sum / reviews.length) * 100) + '%';
          break;
        case 4:
          this.groups[1].sum += 1;
          this.groups[1].percent = ((this.groups[1].sum / reviews.length) * 100) + '%';
          break;
        case 3:
          this.groups[2].sum += 1;
          this.groups[2].percent = ((this.groups[2].sum / reviews.length) * 100) + '%';
          break;
        case 2:
          this.groups[3].sum += 1;
          this.groups[3].percent = ((this.groups[3].sum / reviews.length) * 100) + '%';
          break;
        case 1:
          this.groups[4].sum += 1;
          this.groups[4].percent = ((this.groups[4].sum / reviews.length) * 100) + '%';
          break;
        default:

      }
    });

    //console.log(this.groups);
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

  liked() {
    this.isLiked = !this.isLiked;
    this.nameOfLike = this.isLiked ? 'ios-heart' : 'ios-heart-outline';
    //alert(this.isLiked);
  }

  writeReview() {
    let modal = this.modalCtrl.create(WriteReviewPage, { data: this.product },);
    // Getting data from the modal:
    modal.onDidDismiss(data => {
      console.log('MODAL DATA', data);
    });
    modal.present();
  }

  goToShop() {
    this.navCtrl.push(ShopDetailPage, { data: this.productdetailData.shop });
  }

  gotoOtherProduct(e) {
    this.navCtrl.push(ProductDetailPage, { data: e });
  }

}
