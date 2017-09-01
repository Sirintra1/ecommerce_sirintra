import { Component, Input } from '@angular/core';

/**
 * Generated class for the ShippingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shipping',
  templateUrl: 'shipping.html'
})
export class ShippingComponent {
  @Input() listaddress: Array<any>;
  text: string;

  constructor() {
    console.log('Hello ShippingComponent Component');
    this.text = 'Hello World';
  }

}
