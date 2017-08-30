import { Component, Input } from '@angular/core';
import { LogServiceProvider } from '../../providers/log-service/log-service';
/**
 * Generated class for the CartListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html'
})
export class CartListComponent {
  @Input() carts: any;
  text: string;

  constructor(public log: LogServiceProvider) {
    this.log.info('Hello CartListComponent Component');
    this.text = 'Hello World';
  }

}
