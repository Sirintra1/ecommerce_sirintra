import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsNavigationPage } from "../tabs-navigation/tabs-navigation";

/**
 * Generated class for the CompleteOrderedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-complete-ordered',
  templateUrl: 'complete-ordered.html',
})
export class CompleteOrderedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteOrderedPage');
  }

  goHome() {

    window.localStorage.removeItem('cart');
    this.app.getRootNav().setRoot(TabsNavigationPage); // set full page
    // this.navCtrl.setRoot(TabsNavigationPage);
  }

}
