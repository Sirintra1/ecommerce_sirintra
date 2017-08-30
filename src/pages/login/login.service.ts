import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthorizeModel } from "./login.model";
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public http: Http) {
    console.log('Hello LoginServiceProvider Provider');
  }

  onAuthorization(): Promise<AuthorizeModel> { // signup
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
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
