import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateCompiler, TranslateLoader } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { MESSAGE_FORMAT_CONFIG } from 'ngx-translate-messageformat-compiler';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CloukitDropoutModule } from '@cloukit/dropout';
import { CloukitThemeModule } from '@cloukit/theme';
import { CloukitNotificationModule } from '@cloukit/notification';
import { AppComponent } from './app.component';
import { BackendHealthComponent } from './components/backend-health/backend-health.component';
import { PluralizationI18nDemoComponent } from './components/pluralization-i18n-demo/pluralization-i18n-demo.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json?r=2018-03-09--1837');
}

@NgModule({
  declarations: [
    AppComponent,
    BackendHealthComponent,
    PluralizationI18nDemoComponent,
    CreateTicketComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CloukitThemeModule,
    CloukitNotificationModule,
    CloukitDropoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [
    { provide: MESSAGE_FORMAT_CONFIG, useValue: { intlSupport: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
