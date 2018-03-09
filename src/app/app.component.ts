import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <cloukit-dropout-outlet></cloukit-dropout-outlet>
  <cloukit-notification-outlet-loader
    theme="notification"
    placement="bottomLeft"
    offsetX="80"
    offsetY="0"
  ></cloukit-notification-outlet-loader>
  <div class="app">
    <div><h2>Frontend</h2></div>
    <div class="lang">
      <button (click)="localeDe()" class="langButton" [class.langActive]="currentLanguage() == 'de'">DE</button>
      <button (click)="localeEn()" class="langButton" [class.langActive]="currentLanguage() == 'en'">EN</button>
      <span translate style="padding-left:5px;min-width:100px;">app.language.label</span>
    </div>
    <app-backend-health class="health" [backendUrl]="backendUrl"></app-backend-health>
  </div>
  <app-create-ticket [backendUrl]="backendUrl"></app-create-ticket>
  <app-pluralization-i18n-demo></app-pluralization-i18n-demo>
  `,
  styleUrls: [ 'app.component.css', 'app.shared.styles.css' ]
})
export class AppComponent {
  backendUrl = 'https://poc-angular-form-validation.herokuapp.com'

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
