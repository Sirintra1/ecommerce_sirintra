import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FavoriteModel } from '../favorite/favorite.model';

/*
  Generated class for the FavoriteServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FavoriteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello FavoriteServiceProvider Provider');
  }
  getFavorite(): Promise<FavoriteModel> {
    return this.http.get('./assets/example_data/favorite.json')
      .toPromise()
      .then(response => response.json() as FavoriteModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
