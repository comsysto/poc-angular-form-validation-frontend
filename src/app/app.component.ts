import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
    <div class="lang">
      <button (click)="localeDe()" [class.langActive]="currentLanguage() == 'de'">DE</button>
      <button (click)="localeEn()" [class.langActive]="currentLanguage() == 'en'">EN</button>
      <span translate style="padding-left:5px;">app.language.label</span>
    </div>
    <app-backend-health></app-backend-health>
  </div>
  <app-pluralization-i18n-demo></app-pluralization-i18n-demo>
  `,
  styles: [
    `.app { margin-top:30px; display:flex; justify-content:space-between; }`,
    `.langActive { font-weight:bold; }`,
    `.lang { display:flex; align-items: center; }`
  ]
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  localeDe() {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
  localeEn() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  currentLanguage() {
    return this.translate.currentLang;
  }
}
