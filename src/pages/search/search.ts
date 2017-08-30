import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchModel } from './search.model';
import { SearchServiceProvider } from './search.service';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchItem: SearchModel = new SearchModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchServiceProvider: SearchServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.getSearchData();
  }

  getSearchData() {
    this.searchServiceProvider.getData().then((data) => {
      this.searchItem = data;
      window.localStorage.setItem('array', JSON.stringify(this.searchItem));

      console.log(this.searchItem);
    }, (error) => {
      console.error(error);
    });
  }

  searchInput(e) {
    if (e && e == 'reload') {
      this.getSearchData();
    }
    this.searchItem.items = e;
    
  }

}
