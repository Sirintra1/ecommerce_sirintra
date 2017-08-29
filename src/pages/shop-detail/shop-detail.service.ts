import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ShopModel } from '../shop-detail/shop-detail.model';
/*
  Generated class for the ShopDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ShopDetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ShopDetailServiceProvider Provider');
  }
  getShopDetail(): Promise<ShopModel> {
    return this.http.get('./assets/example_data/shopdetail.json')
      .toPromise()
      .then(response => response.json() as ShopModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
