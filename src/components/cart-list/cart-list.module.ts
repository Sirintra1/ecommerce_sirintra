import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CartlistComponent } from './cart-list';

@NgModule({
  declarations: [
    CartlistComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CartlistComponent
  ]
})
export class CartlistComponentModule {}
