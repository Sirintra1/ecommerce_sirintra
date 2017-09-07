import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";
import { ProductItemModel } from "../../app/app.model";
/*
  Generated class for the ListProductServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListProductServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    this.log.info('Hello ListProductServiceProvider Provider');
  }

  getProductListByHome(view): Promise<Array<ProductItemModel>> {
    return this.http.get(Constants.URL + '/api/getproducttop/' + view)
      .toPromise()
      .then(response => response.json() as Array<ProductItemModel>)
      .catch(this.handleError);
  }

  getProductListByShop(data): Promise<Array<ProductItemModel>> {
    return this.http.get(Constants.URL + '/api/productsbycategorybyshop/all/' + data._id)
      .toPromise()
      .then(response => response.json() as Array<ProductItemModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
}
