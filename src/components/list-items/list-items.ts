import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Generated class for the ListItemsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-items',
  templateUrl: 'list-items.html'
})
export class ListItemsComponent {

  @Input() items:any;
  @Output() itemClicked:EventEmitter<any> = new EventEmitter<any>();
  constructor() {

  }

  onClick(item){
    this.itemClicked.emit(item);
  }

}
