import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateCompiler, TranslateLoader } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { MESSAGE_FORMAT_CONFIG } from 'ngx-translate-messageformat-compiler';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { BackendHealthComponent } from './components/backend-health/backend-health.component';
import { PluralizationI18nDemoComponent } from './components/pluralization-i18n-demo/pluralization-i18n-demo.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BackendHealthComponent,
    PluralizationI18nDemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
