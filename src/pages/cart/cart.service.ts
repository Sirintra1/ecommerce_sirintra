import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { CartModel } from "./cart.model";
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { Constants } from "../../app/app.contants";

@Injectable()
export class CartService {
  constructor(public http: Http, public log: LogServiceProvider) {

  }

  getData(): Promise<CartModel> {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    return this.http.get(Constants.URL + '/api/carts/get-by-user/' + user._id)
      .toPromise()
      .then(response => response.json() as CartModel)
      .catch(this.handleError);
  }

  updateCartData(cart): Promise<CartModel> {
    return this.http.put(Constants.URL + '/api/carts/get-by-user/' + cart._id, cart)
      .toPromise()
      .then(response => response.json() as CartModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
