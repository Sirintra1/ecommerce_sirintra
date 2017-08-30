import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthorizeModel } from "./register.model";

/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RegisterServiceProvider Provider');
  }

  newAuthorization(): Promise<AuthorizeModel> { // signup
    return this.http.get('./assets/example_data/profile.json')
      .toPromise()
      .then(response => {
        let data = response.json() as AuthorizeModel;
        window.localStorage.setItem('e7e_ecommerce_buy_user', JSON.stringify(data));
        return data;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
