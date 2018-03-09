webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app { margin-top:30px; display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-pack:justify; -ms-flex-pack:justify; justify-content:space-between; }\n.langActive { font-weight:bold; }\n.lang { display:-webkit-box; display:-ms-flexbox; display:flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; }\n.langButton { margin-right:5px; }\n.health {\n  min-width: 220px;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        this.backendUrl = 'https://poc-angular-form-validation.herokuapp.com';
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
    AppComponent.prototype.localeDe = function () {
        this.translate.setDefaultLang('de');
        this.translate.use('de');
    };
    AppComponent.prototype.localeEn = function () {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    };
    AppComponent.prototype.currentLanguage = function () {
        return this.translate.currentLang;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "\n  <cloukit-dropout-outlet></cloukit-dropout-outlet>\n  <cloukit-notification-outlet-loader\n    theme=\"notification\"\n    placement=\"bottomLeft\"\n    offsetX=\"80\"\n    offsetY=\"0\"\n  ></cloukit-notification-outlet-loader>\n  <div class=\"app\">\n    <div><h2>Frontend</h2></div>\n    <div class=\"lang\">\n      <button (click)=\"localeDe()\" class=\"langButton\" [class.langActive]=\"currentLanguage() == 'de'\">DE</button>\n      <button (click)=\"localeEn()\" class=\"langButton\" [class.langActive]=\"currentLanguage() == 'en'\">EN</button>\n      <span translate style=\"padding-left:5px;min-width:100px;\">app.language.label</span>\n    </div>\n    <app-backend-health class=\"health\" [backendUrl]=\"backendUrl\"></app-backend-health>\n  </div>\n  <app-create-ticket [backendUrl]=\"backendUrl\"></app-create-ticket>\n  <app-pluralization-i18n-demo></app-pluralization-i18n-demo>\n  ",
            styles: [__webpack_require__("./src/app/app.component.css"), __webpack_require__("./src/app/app.shared.styles.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["d" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_translate_messageformat_compiler__ = __webpack_require__("./node_modules/ngx-translate-messageformat-compiler/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cloukit_dropout__ = __webpack_require__("./node_modules/@cloukit/dropout/dropout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cloukit_theme__ = __webpack_require__("./node_modules/@cloukit/theme/theme.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cloukit_notification__ = __webpack_require__("./node_modules/@cloukit/notification/notification.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_backend_health_backend_health_component__ = __webpack_require__("./src/app/components/backend-health/backend-health.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_pluralization_i18n_demo_pluralization_i18n_demo_component__ = __webpack_require__("./src/app/components/pluralization-i18n-demo/pluralization-i18n-demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_create_ticket_create_ticket_component__ = __webpack_require__("./src/app/components/create-ticket/create-ticket.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json?r=2018-03-09--1837');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_backend_health_backend_health_component__["a" /* BackendHealthComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_pluralization_i18n_demo_pluralization_i18n_demo_component__["a" /* PluralizationI18nDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_create_ticket_create_ticket_component__["a" /* CreateTicketComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__cloukit_theme__["b" /* CloukitThemeModule */],
                __WEBPACK_IMPORTED_MODULE_9__cloukit_notification__["b" /* CloukitNotificationModule */],
                __WEBPACK_IMPORTED_MODULE_7__cloukit_dropout__["a" /* CloukitDropoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]],
                    },
                    compiler: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateCompiler */],
                        useClass: __WEBPACK_IMPORTED_MODULE_5_ngx_translate_messageformat_compiler__["b" /* TranslateMessageFormatCompiler */]
                    }
                })
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5_ngx_translate_messageformat_compiler__["a" /* MESSAGE_FORMAT_CONFIG */], useValue: { intlSupport: true } }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.shared.styles.css":
/***/ (function(module, exports) {

module.exports = "button {\n  border:1px solid #1080C1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #1080C1;\n  font-size: 15px;\n  color:#fff;\n  cursor: pointer;\n}\nbutton:hover {\n  border:1px solid #1080C1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #fff;\n  font-size: 15px;\n  color:#1080C1;\n}\nbutton:disabled {\n  border:1px solid #85B1CB;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #85B1CB;\n  font-size: 15px;\n  color:#efefef;\n  cursor: not-allowed;\n}\nh2 {\n  color: #1080C1;\n  text-transform: uppercase;\n  font-size:35px;\n  font-weight:300;\n  margin:0;\n  padding:0;\n}\n\n"

/***/ }),

/***/ "./src/app/components/backend-health/backend-health.component.css":
/***/ (function(module, exports) {

module.exports = ".health {\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n  -webkit-box-align:center;\n      -ms-flex-align:center;\n          align-items:center;\n}\n.label {\n  margin-right:10px;\n}\n.healthOk {\n  width: 30px;\n  height: 30px;\n  background-color:#39C110;\n  border-radius:50%;\n}\n.healthFail {\n  width: 30px;\n  height: 30px;\n  background-color:#C11010;\n  border-radius:50%;\n}\n.spinner {\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-scaleout 0.3s infinite ease-in-out;\n  animation: sk-scaleout 0.3s infinite ease-in-out;\n}\n@-webkit-keyframes sk-scaleout {\n  0% { -webkit-transform: scale(0) }\n  100% {\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 100% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n    opacity: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/backend-health/backend-health.component.html":
/***/ (function(module, exports) {

module.exports = "<a [href]=\"backendUrl\" target=\"_blank\" class=\"health\">\n  <div class=\"label\" translate>backend.health.label</div>\n  <div\n    [class.spinner]=\"healthCheckInProgress\"\n    [class.healthOk]=\"!healthCheckInProgress && backendIsHealthy\"\n    [class.healthFail]=\"!healthCheckInProgress && !backendIsHealthy\"\n  ></div>\n</a>\n"

/***/ }),

/***/ "./src/app/components/backend-health/backend-health.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendHealthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BackendHealthComponent = /** @class */ (function () {
    function BackendHealthComponent(http) {
        this.http = http;
        this.healthCheckInProgress = true;
    }
    BackendHealthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get(this.backendUrl + '/api/greetings')
            .map(function () { return true; })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(false); })
            .subscribe(function (health) {
            _this.healthCheckInProgress = false;
            _this.backendIsHealthy = health;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], BackendHealthComponent.prototype, "backendUrl", void 0);
    BackendHealthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-backend-health',
            template: __webpack_require__("./src/app/components/backend-health/backend-health.component.html"),
            styles: [__webpack_require__("./src/app/components/backend-health/backend-health.component.css"), __webpack_require__("./src/app/app.shared.styles.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BackendHealthComponent);
    return BackendHealthComponent;
}());



/***/ }),

/***/ "./src/app/components/create-ticket/create-ticket.component.css":
/***/ (function(module, exports) {

module.exports = ".createTicket {\n  margin-top:60px;\n}\n.initError {\n  margin-top:10px;\n  margin-bottom:10px;\n  color:#fff;\n  padding:5px;\n  background-color: rgb(193, 16, 16);\n}\n.formRow {\n  margin-top:15px;\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n}\n.formLabel {\n  padding-top:10px;\n  width:200px;\n  min-width:200px;\n  max-width:200px;\n  font-weight:bold;\n  margin-right:20px;\n}\n.formInputField {\n  padding:8px;\n  font-size:16px;\n  outline:0;\n  border:2px solid #1080C1;\n  width:300px;\n}\n.formInputFieldError {\n  border: 2px solid rgb(193, 16, 16);\n}\n.formInputFieldValid {\n  border: 2px solid #21C110;\n}\n.formError {\n  background-color: rgb(193, 16, 16);\n  padding:3px;\n  color:#fff;\n}\n.formButtons {\n  margin-top:20px;\n}\n"

/***/ }),

/***/ "./src/app/components/create-ticket/create-ticket.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"createTicket\">\n    <h3 translate>createTicket.headline</h3>\n    <div translate>createTicket.description</div>\n    <div class=\"initError\" *ngIf=\"initFormError\">ERROR INITIALIZING THE FORM. MOST LIKELY BACKEND IS DOWN.</div>\n    <form [formGroup]=\"form\" *ngIf=\"form\">\n      <div class=\"formRow\">\n        <div class=\"formLabel\" translate>createTicket.field.id.label</div>\n        <div class=\"formInput\">\n          <input\n            class=\"formInputField\"\n            [class.formInputFieldValid]=\"!form.pristine && !form.controls.id?.errors\"\n            [class.formInputFieldError]=\"!form.pristine && form.controls.id?.errors\"\n            formControlName=\"id\" type=\"text\" />\n          <div\n            class=\"formError\"\n            *ngIf=\"!form.pristine && form.controls.id?.errors\"\n          >{{displayErrors('id')}}</div>\n        </div>\n      </div>\n      <div class=\"formRow\">\n        <div class=\"formLabel\" translate>createTicket.field.summary.label</div>\n        <div class=\"formInput\">\n          <input\n            class=\"formInputField\"\n            [class.formInputFieldValid]=\"!form.pristine && !form.controls.summary?.errors\"\n            [class.formInputFieldError]=\"!form.pristine && form.controls.summary?.errors\"\n            formControlName=\"summary\" type=\"text\" />\n          <div\n            class=\"formError\"\n            *ngIf=\"!form.pristine && form.controls.summary?.errors\"\n          >{{displayErrors('summary')}}</div>\n        </div>\n      </div>\n      <div class=\"formRow\">\n        <div class=\"formLabel\" translate>createTicket.field.description.label</div>\n        <div class=\"formInput\">\n          <input\n            class=\"formInputField\"\n            [class.formInputFieldValid]=\"!form.pristine && !form.controls.description?.errors\"\n            [class.formInputFieldError]=\"!form.pristine && form.controls.description?.errors\"\n            formControlName=\"description\" type=\"text\" />\n          <div\n            class=\"formError\"\n            *ngIf=\"!form.pristine && form.controls.description?.errors\"\n          >{{displayErrors('description')}}</div>\n        </div>\n      </div>\n      <div class=\"formRow\">\n        <div class=\"formLabel\" translate>createTicket.field.reporter.label</div>\n        <div class=\"formInput\">\n          <input\n            class=\"formInputField\"\n            [class.formInputFieldValid]=\"!form.pristine && !form.controls.reporter?.errors\"\n            [class.formInputFieldError]=\"!form.pristine && form.controls.reporter?.errors\"\n            formControlName=\"reporter\" type=\"text\" />\n          <div\n            class=\"formError\"\n            *ngIf=\"!form.pristine && form.controls.reporter?.errors\"\n          >{{displayErrors('reporter')}}</div>\n        </div>\n      </div>\n      <div class=\"formButtons\">\n        <button\n          type=\"button\"\n          translate\n          (click)=\"createTicket()\"\n        >createTicket.submit.label</button>\n      </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/create-ticket/create-ticket.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTicketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cloukit_notification__ = __webpack_require__("./node_modules/@cloukit/notification/notification.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CreateTicketComponent = /** @class */ (function () {
    function CreateTicketComponent(http, translate, notificationService) {
        this.http = http;
        this.translate = translate;
        this.notificationService = notificationService;
        this.preDestroy = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["a" /* Subject */]();
        this.initFormError = false;
    }
    CreateTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm(this.translate.currentLang);
        this.translate
            .onLangChange
            .takeUntil(this.preDestroy)
            .subscribe(function (change) {
            _this.initForm(change.lang);
        });
    };
    CreateTicketComponent.prototype.ngOnDestroy = function () {
        this.preDestroy.next(true);
        this.preDestroy.complete();
    };
    CreateTicketComponent.prototype.initForm = function (lang) {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept-Language': lang
            })
        };
        this.http
            .get(this.backendUrl + '/api/tickets/validation_rules', httpOptions)
            .catch(function () {
            _this.initFormError = true;
            // Stop propagating further!
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].empty();
        })
            .subscribe(function (fieldValidationRules) {
            _this.validationRules = fieldValidationRules;
            _this.initFormGroup();
        });
    };
    CreateTicketComponent.prototype.initFormGroup = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', this.buildValidatorsForField('id')),
            summary: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', this.buildValidatorsForField('summary')),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', this.buildValidatorsForField('description')),
            reporter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', this.buildValidatorsForField('reporter')),
        });
    };
    CreateTicketComponent.prototype.createTicket = function () {
        var _this = this;
        this.form.markAsDirty();
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept-Language': this.translate.currentLang
            })
        };
        this.http
            .post(this.backendUrl + '/api/tickets', this.form.value, httpOptions)
            .catch(function (errors) {
            _this.notificationService.addNotification(new __WEBPACK_IMPORTED_MODULE_8__cloukit_notification__["a" /* CloukitNotification */](errors.error.message, errors.error.errors.map(function (f) { return "[" + f.field + "]: " + f.message + " --- "; }).join(''), __WEBPACK_IMPORTED_MODULE_8__cloukit_notification__["d" /* CloukitNotificationType */].ERROR, null, null, 5000));
            // Stop propagating further!
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].empty();
        })
            .subscribe(function (fieldValidationRules) {
            console.log('save ok');
            _this.notificationService.addNotification(new __WEBPACK_IMPORTED_MODULE_8__cloukit_notification__["a" /* CloukitNotification */](_this.translate.instant('createTicket.success'), '', __WEBPACK_IMPORTED_MODULE_8__cloukit_notification__["d" /* CloukitNotificationType */].SUCCESS, null, null, 5000));
        });
    };
    CreateTicketComponent.prototype.buildValidatorsForField = function (field) {
        var fieldRule = this.validationRules.find(function (r) { return r.field === field; });
        var validatorFnArray = [];
        for (var _i = 0, _a = fieldRule.validations; _i < _a.length; _i++) {
            var validationRule = _a[_i];
            if (validationRule.type === 'pattern') {
                var patternRule = validationRule;
                validatorFnArray.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern(patternRule.pattern));
            }
            if (validationRule.type === 'minLength') {
                var minRule = validationRule;
                validatorFnArray.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(minRule.length));
            }
            if (validationRule.type === 'maxLength') {
                var maxRule = validationRule;
                validatorFnArray.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(maxRule.length));
            }
            if (validationRule.type === 'required') {
                validatorFnArray.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required);
            }
        }
        return validatorFnArray;
    };
    CreateTicketComponent.prototype.displayErrors = function (field) {
        var _this = this;
        var errors = this.form.controls[field].errors;
        var errorString = '';
        if (!Object(__WEBPACK_IMPORTED_MODULE_11_util__["isNullOrUndefined"])(errors)) {
            var errorKeys = Object.keys(errors);
            var _loop_1 = function (errorKey) {
                var rule = this_1.validationRules.find(function (r) { return r.field === field; });
                var errorByKey = rule.validations.find(function (v) { return v.type === _this.mapAngularValidationTypesToBackendValidationTypes(errorKey); });
                if (!Object(__WEBPACK_IMPORTED_MODULE_11_util__["isNullOrUndefined"])(errorByKey)) {
                    errorString = errorString + errorByKey.message + ' ';
                }
            };
            var this_1 = this;
            for (var _i = 0, errorKeys_1 = errorKeys; _i < errorKeys_1.length; _i++) {
                var errorKey = errorKeys_1[_i];
                _loop_1(errorKey);
            }
        }
        return errorString;
    };
    CreateTicketComponent.prototype.mapAngularValidationTypesToBackendValidationTypes = function (angularValidationType) {
        if (angularValidationType === 'minlength') {
            return 'minLength';
        }
        if (angularValidationType === 'maxlength') {
            return 'maxLength';
        }
        return angularValidationType;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], CreateTicketComponent.prototype, "backendUrl", void 0);
    CreateTicketComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-create-ticket',
            template: __webpack_require__("./src/app/components/create-ticket/create-ticket.component.html"),
            styles: [__webpack_require__("./src/app/components/create-ticket/create-ticket.component.css"), __webpack_require__("./src/app/app.shared.styles.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["d" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_8__cloukit_notification__["c" /* CloukitNotificationService */]])
    ], CreateTicketComponent);
    return CreateTicketComponent;
}());



/***/ }),

/***/ "./src/app/components/pluralization-i18n-demo/pluralization-i18n-demo.component.css":
/***/ (function(module, exports) {

module.exports = ".pluralizationDemo {\n  margin-top:80px;\n}\n.cat {\n  width:40px;\n  height: 70px;\n  margin-right:10px;\n}\n.cat:nth-of-type(1) path {\n  fill: #90C110;\n}\n.cat:nth-of-type(2) path {\n  fill: #7610C1;\n}\n.cat:nth-of-type(3) path {\n  fill: #C15410;\n}\n.cat:nth-of-type(4) path {\n  fill: #10B0C1;\n}\n.cat:nth-of-type(5) path {\n  fill: #C11068;\n}\n.cats {\n  margin-top:10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom:15px;\n  height:70px;\n}\npre {\n  background-color:#efefef;\n  padding:4px;\n}\n"

/***/ }),

/***/ "./src/app/components/pluralization-i18n-demo/pluralization-i18n-demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pluralizationDemo\">\n  <h3 translate>pluralizationDemo.headline</h3>\n  <div class=\"cats\">\n    <svg *ngFor=\"let i of numCats\" class=\"cat\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 521.48 957.94\">\n      <path d=\"M24.664 903.655c-18.373-21.16-27.438-53.23-23.915-84.09 3.623-35.77 31.633-63.97 23.915-102.65-3.829-84.26-31.467-157.24-6.802-234.15 26.021-108.28 112.92-141.18 175.78-192.55 14.983-5.154 26.065-15.681 36.088-28.072 11.753-9.193 21.965-20.53 29.878-31.467 9.047-27.524 4.3-61.767 18.719-88.708 10.038-17.346 18.474-36.48 33-50.217C377.02 75.599 371.588 9.579 395.607.863c34.18-9.46 11.324 61.082 26.658 82.712 26.441 1.112 45.114 15.76 58.844 34.23 8.21 18.714 35.014 16.848 39.653 35.29 3.958 16.806-9.135 38.478-21.629 51.527-10.986 12.288-27.134 14.366-35.3 28.76-12.708 28.471 4.273 67.531 5.324 99.514-1.69 33.542 2.81 70.758-17.335 97.78-3.02 21.83-23.195 31.623-30.34 51.688-16.414 28.237-42.354 77.827-41.313 111.55.331 52.629 19.951 115.32 27.888 167.24 18.694 9.203 57.595-.39 51.941 22.344-24.918 41.426-170.65 34.301-198.64 36.821-58.195-1.488-118 2.167-174.78-6.85-33.6-10.435-39.406 16.643-31.028 45.484 8.03 15.138 19.151 27.569 34.168 36.539 25.625 9.596 52.35 21.575 82.232 20.793 32.172 5.176 59.141 1.054 93.075-2.455 20.675-11.455 108.15-7.45 61.448 17.79-94.43 42.48-258.63 33.88-301.8-27.95z\"/>\n    </svg>\n  </div>\n  <div translate [translateParams]=\"{ count: numCats.length }\">pluralizationDemo.cats</div>\n  <pre>\"There &#123;count, plural, =0&#123;are} one&#123;is} other&#123;are}} &#123;count} &#123;count, plural, =0&#123;cats} one&#123;cat} other&#123;cats}}\"</pre>\n  <button (click)=\"removeCat()\" [disabled]=\"!removeCatPossible()\" translate>pluralizationDemo.removeCat</button>\n  <button (click)=\"addCat()\" [disabled]=\"!addCatPossible()\" translate>pluralizationDemo.addCat</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pluralization-i18n-demo/pluralization-i18n-demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralizationI18nDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PluralizationI18nDemoComponent = /** @class */ (function () {
    function PluralizationI18nDemoComponent() {
        this.numCats = [1];
    }
    PluralizationI18nDemoComponent.prototype.addCat = function () {
        this.numCats.push(1);
    };
    PluralizationI18nDemoComponent.prototype.removeCat = function () {
        if (this.numCats.length > 0) {
            this.numCats.pop();
        }
    };
    PluralizationI18nDemoComponent.prototype.removeCatPossible = function () {
        return this.numCats.length > 0;
    };
    PluralizationI18nDemoComponent.prototype.addCatPossible = function () {
        return this.numCats.length < 5;
    };
    PluralizationI18nDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pluralization-i18n-demo',
            template: __webpack_require__("./src/app/components/pluralization-i18n-demo/pluralization-i18n-demo.component.html"),
            styles: [__webpack_require__("./src/app/components/pluralization-i18n-demo/pluralization-i18n-demo.component.css"), __webpack_require__("./src/app/app.shared.styles.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PluralizationI18nDemoComponent);
    return PluralizationI18nDemoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map