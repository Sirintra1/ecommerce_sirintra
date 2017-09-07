import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LogServiceProvider } from '../../providers/log-service/log-service';

// import { shippingModel } from './checkout.model';
// import { confirmModel } from './checkout.model';
import { address } from './checkout.model';
// import { saveOrder } from "./checkout.model";
import { ShippingModel } from "./checkout.model";
import { paymentModel } from "./checkout.model";

import { Constants } from "../../app/app.contants";

/*
  Generated class for the CheckoutServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CheckoutServiceProvider {

  constructor(public http: Http, public log: LogServiceProvider) {
    console.log('Hello CheckoutServiceProvider Provider');
  }
  getData(): Promise<ShippingModel> {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    return this.http.get(Constants.URL + '/api/carts/get-by-user/' + user._id)
      .toPromise()
      .then(response => response.json() as ShippingModel)
      .catch(this.handleError);
  }

  // getAddressData(): Promise<addressModel> {
  //   return this.http.get(Constants.URL + '/api/addressesbyuser')
  //     .toPromise()
  //     .then(response => response.json() as addressModel)
  //     .catch(this.handleError);
  // }

  getAddressData() {
    return this.http.get(Constants.URL + '/api/addresses')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  saveAddressData(address): Promise<address> {
    return this.http.post(Constants.URL + '/api/addresses', address)
      .toPromise()
      .then(response => response.json() as address)
      .catch(this.handleError);
  }

  saveOrderData(order) {
    return this.http.post(Constants.URL + '/api/order', order)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  // getConfirm(): Promise<confirmModel> {
  //   return this.http.get('./assets/example_data/confirm.json')
  //     .toPromise()
  //     .then(response => response.json() as confirmModel)
  //     .catch(this.handleError);
  // }

  getPayment(): Promise<paymentModel> {
    return this.http.get('./assets/example_data/payments.json')
      .toPromise()
      .then(response => response.json() as paymentModel)
      .catch(this.handleError);
  }

  // getShipping(): Promise<shippingModel> {
  //   return this.http.get('./assets/example_data/shipping.json')
  //     .toPromise()
  //     .then(response => response.json() as shippingModel)
  //     .catch(this.handleError);
  // }

  // getAddress(): Promise<addressModel> {
  //   return this.http.get('./assets/example_data/address.json')
  //     .toPromise()
  //     .then(response => response.json() as addressModel)
  //     .catch(this.handleError);
  // }
  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
