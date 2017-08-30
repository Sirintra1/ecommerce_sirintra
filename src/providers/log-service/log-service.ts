import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LogServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LogServiceProvider {

  constructor(public http: Http) {
    console.log('Hello LogServiceProvider Provider');
  }
  info(message: any) {
    console.log(message);
  }
  error(error: any) {
    console.error(error);
  }
  warning(warning: any) {
    console.warn(warning);
  }
}
