import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ShopDetailModel, AddressModel } from '../shop-detail/shop-detail.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";
import { ProductItemModel } from "../../app/app.model";
/*
  Generated class for the ShopDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopDetailServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello ShopDetailServiceProvider Provider');
  }
  getShopDetail(id): Promise<ShopDetailModel> {
    return this.http.get(Constants.URL + '/api/shopmasters/' + id)
      .toPromise()
      .then(response => response.json() as ShopDetailModel)
      .catch(this.handleError);
  }

  getShopAddressData(): Promise<Array<AddressModel>> {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    return this.http.get(Constants.URL + '/api/addresses/userid/' + user._id)
      .toPromise()
      .then(response => response.json() as Array<AddressModel>)
      .catch(this.handleError);
  }

  getShopProductData(id): Promise<Array<ProductItemModel>> {
    return this.http.get(Constants.URL + '/api/products/shopid/' + id)
      .toPromise()
      .then(response => response.json() as Array<ProductItemModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
