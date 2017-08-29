import { Component ,Input} from '@angular/core';

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

  constructor() {
    console.log('Hello CartListComponent Component');
    this.text = 'Hello World';
  }

}
