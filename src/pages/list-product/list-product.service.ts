import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ListProductModel } from '../list-product/list-product.model';

/*
  Generated class for the ListProductServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ListProductServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ListProductServiceProvider Provider');
  }

  getListProfile(): Promise<ListProductModel> {
    return this.http.get('./assets/example_data/listproduct.json')
      .toPromise()
      .then(response => response.json() as ListProductModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
}
