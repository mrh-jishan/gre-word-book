import {Component} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isFlip = false

  constructor() {
  }

  flipMe() {
    this.isFlip = !this.isFlip
  }

  goNext() {
    this.isFlip = false
  }

  goPrev() {
    this.isFlip = false
  }

}
