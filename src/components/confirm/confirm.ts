import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * Generated class for the ConfirmComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmComponent {
  data: any;
  @Input() confirm: any;
  @Output() gotoNext: EventEmitter<any> = new EventEmitter<any>();
  confirmdiscount: string;
  constructor() {
    console.log('Hello ConfirmComponent Component');
  }

}
