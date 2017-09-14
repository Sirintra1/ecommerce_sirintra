import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LogServiceProvider } from '../../providers/log-service/log-service';
import { Constants } from "../../app/app.contants";
import { AddressListModel, AddressModel, PaymentMasterModel, CheckoutModel } from "./checkout.model";

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

  getAddressListData(): Promise<AddressListModel> {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    // return this.http.post(Constants.URL + '/api/carts', cart)
    return this.http.get(Constants.URL + '/api/addressbyuser/' + user._id)
      .toPromise()
      .then(response => response.json() as AddressListModel)
      .catch(this.handleError);
  }

  createAddressData(address): Promise<AddressModel> {
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    address.user = user;
    // return this.http.post(Constants.URL + '/api/carts', cart)
    return this.http.post(Constants.URL + '/api/addresses', address)
      .toPromise()
      .then(response => response.json() as AddressModel)
      .catch(this.handleError);
  }

  getPaymentGatewayData(): Promise<PaymentMasterModel> {
    // return this.http.get()    
    return this.http.get('./assets/example_data/payments.json')
      .toPromise()
      .then(response => response.json() as PaymentMasterModel)
      .catch(this.handleError);
  }

  saveOrderData(order): Promise<CheckoutModel> {
    // return this.http.get()    
    let user = JSON.parse(window.localStorage.getItem('e7e_jjecommerce_buy_user'));
    order.user = user;
    return this.http.post(Constants.URL + '/api/orders', order)
      .toPromise()
      .then(response => response.json() as CheckoutModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
