import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchModel } from './search.model';
import { SearchServiceProvider } from './search.service';
import { LogServiceProvider } from '../../providers/log-service/log-service';

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
  searchData: SearchModel = new SearchModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchServiceProvider: SearchServiceProvider, public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad SearchPage');
    this.getSearchData();
  }

  getSearchData() {
    this.searchServiceProvider.getData().then((data) => {
      this.searchData = data;
      window.localStorage.setItem('array', JSON.stringify(this.searchData));

        this.log.info(this.searchData);
    }, (error) => {
        this.log.error(error);
    });
  }

  searchInput(e) {
    if (e && e == 'reload') {
      this.getSearchData();
    } else {
      this.searchData.items = e;
    }
  }

}
