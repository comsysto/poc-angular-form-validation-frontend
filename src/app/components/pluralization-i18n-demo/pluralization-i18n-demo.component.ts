import { Component } from '@angular/core';

@Component({
  selector: 'app-pluralization-i18n-demo',
  templateUrl: 'pluralization-i18n-demo.component.html',
  styleUrls: [ 'pluralization-i18n-demo.component.css', '../../app.shared.styles.css' ]
})
export class PluralizationI18nDemoComponent {

  numCats = [ 1 ];

  constructor() { }

  addCat() {
    this.numCats.push(1);
  }

  removeCat() {
    if (this.numCats.length > 0) {
      this.numCats.pop();
    }
  }

  removeCatPossible() {
    return this.numCats.length > 0;
  }

  addCatPossible() {
    return this.numCats.length < 5;
  }
}
