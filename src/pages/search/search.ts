import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchModel } from '../search/search.model';
import { SearchServiceProvider } from '../search/search.service';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchService: SearchServiceProvider,public log: LogServiceProvider) {
  }

  ionViewDidLoad() {
    this.log.info('ionViewDidLoad SearchPage');
    this.getSearchData();
  }
  getSearchData() {
    this.searchService
      .getSearch()
      .then((data) => {
        this.searchData = data;
        this.log.info(this.searchData);
      }, (err) => {
        this.log.error(err);
      });
  }

}
