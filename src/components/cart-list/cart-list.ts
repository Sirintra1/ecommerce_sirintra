import { Component, Input } from '@angular/core';

/**
 * Generated class for the CartlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'cart-list',
  templateUrl: 'cart-list.html'
})
export class CartlistComponent {
  @Input() carts: any;
  text: string;

  constructor() {
    console.log('Hello CartlistComponent Component');
    this.text = 'Hello World';
  }

}
