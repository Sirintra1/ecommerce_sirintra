import { Component, ViewChild } from '@angular/core';
import { Slides } from "ionic-angular";

/**
 * Generated class for the FormWizardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'form-wizard',
  templateUrl: 'form-wizard.html'
})
export class FormWizardComponent {
  @ViewChild('formWizard') formWizard: Slides;
  tabs: any = '0';
  text: string;

  constructor() {
    console.log('Hello FormWizardComponent Component');
    this.text = 'Hello World';
  }

  selectTab(index) {
    this.formWizard.slideTo(index);
  }

  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
  }

  ngAfterViewInit() {
    this.formWizard.lockSwipes(true);
  }

  slidePrev() {
    this.formWizard.lockSwipes(false);
    this.formWizard.slidePrev();
    this.formWizard.lockSwipes(true);
  }

  slideNext() {
    this.formWizard.lockSwipes(false);
    this.formWizard.slideNext();
    this.formWizard.lockSwipes(true);
  }

}
