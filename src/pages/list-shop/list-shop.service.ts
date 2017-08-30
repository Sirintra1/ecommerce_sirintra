import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ListShopModel } from '../list-shop/list-shop.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';


/*
  Generated class for the ListShopServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListShopServiceProvider {

  constructor(public http: Http, public log:LogServiceProvider) {
    this.log.info('Hello ListShopServiceProvider Provider');
  }
  getListShop(): Promise<ListShopModel> {
    return this.http.get('./assets/example_data/listshop.json')
      .toPromise()
      .then(response => response.json() as ListShopModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
