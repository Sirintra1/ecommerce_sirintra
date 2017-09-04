import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LogServiceProvider } from '../../providers/log-service/log-service';

import { shippingModel } from './checkout.model';
import { confirmModel } from './checkout.model';
import { addressModel } from './checkout.model';
import { saveOrder } from "./checkout.model";
import { paymentModel } from "./checkout.model";

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
  getConfirm(): Promise<confirmModel> {
    return this.http.get('./assets/example_data/confirm.json')
      .toPromise()
      .then(response => response.json() as confirmModel)
      .catch(this.handleError);
  }

  getPayment(): Promise<paymentModel> {
    return this.http.get('./assets/example_data/payments.json')
      .toPromise()
      .then(response => response.json() as paymentModel)
      .catch(this.handleError);
  }

  getShipping(): Promise<shippingModel> {
    return this.http.get('./assets/example_data/shipping.json')
      .toPromise()
      .then(response => response.json() as shippingModel)
      .catch(this.handleError);
  }

  getAddress(): Promise<addressModel> {
    return this.http.get('./assets/example_data/address.json')
      .toPromise()
      .then(response => response.json() as addressModel)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
