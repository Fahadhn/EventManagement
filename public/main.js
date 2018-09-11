(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<!--<app-home></app-home>\n<app-events></app-events>-->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./body/home/home.component */ "./src/app/body/home/home.component.ts");
/* harmony import */ var _body_events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./body/events/event-list/event-list.component */ "./src/app/body/events/event-list/event-list.component.ts");
/* harmony import */ var _body_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./body/events/single-event/single-event.component */ "./src/app/body/events/single-event/single-event.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _body_events_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./body/events/add-event/add-event.component */ "./src/app/body/events/add-event/add-event.component.ts");
/* harmony import */ var _body_organizer_organizer_home_organizer_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./body/organizer/organizer-home/organizer-home.component */ "./src/app/body/organizer/organizer-home/organizer-home.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { FlexLayoutModule }       from "@angular/flex-layout";














var appRoutes = [
    { path: '', component: _body_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
    { path: 'events', component: _body_events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_19__["EventListComponent"] },
    { path: 'events/:eventId', component: _body_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_20__["SingleEventComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"] },
    { path: 'add', component: _body_events_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_22__["AddEventComponent"] },
    { path: 'organizer', component: _body_organizer_organizer_home_organizer_home_component__WEBPACK_IMPORTED_MODULE_23__["OrganizerHomeComponent"] },
    { path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"], _body_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _body_events_event_list_event_list_component__WEBPACK_IMPORTED_MODULE_19__["EventListComponent"], _body_events_single_event_single_event_component__WEBPACK_IMPORTED_MODULE_20__["SingleEventComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _body_events_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_22__["AddEventComponent"], _body_organizer_organizer_home_organizer_home_component__WEBPACK_IMPORTED_MODULE_23__["OrganizerHomeComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                //FlexLayoutModule,
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcFabModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcIconModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcMenuModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcImageListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcChipsModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcTypographyModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcFormFieldModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_14__["MdcTextFieldModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.createOrganizer = function (name, email, mobile1, mobile2, work1, work2, logoUrl, password) {
        var AuthData = {
            name: name,
            email: email,
            mobile1: mobile1,
            mobile2: mobile2,
            work1: work1,
            work2: work2,
            logoUrl: logoUrl,
            password: password
        };
        this.http.post('http://localhost:3000/organizers/register', AuthData)
            .subscribe(function (response) {
            console.log(response); //
        });
    };
    AuthService.prototype.login = function (email, password) {
        var LoginData = {
            email: email,
            password: password
        };
        this.http.post('http://localhost:3000/organizers/login', LoginData)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <mat-card-title>تسجيل الدخول</mat-card-title>\n  <mat-card-content>\n      <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLaoding\"> <!-- #postEvent=\"ngForm\" by adding this we can access the values inside this form -->\n          <mat-form-field>\n            <input \n              matInput \n              name=\"email\" \n              type=\"email\" \n              placeholder=\"البريد الالكتروني\" \n              required \n              ngModel \n              email \n              #email=\"ngModel\">\n            <mat-error *ngIf=\"email.invalid\">بريد الكتروني خاطئ</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput \n              name=\"password\" \n              type=\"password\" \n              placeholder=\"الرقم السري\" \n              required \n              ngModel \n              #password=\"ngModel\">\n            <mat-error *ngIf=\"password.invalid\">الرقم السري غير صحيح</mat-error>\n          </mat-form-field>\n          <br>\n          <button mat-raised-button color=\"accent\" type=\"submit\">دخول</button>\n        </form>\n  </mat-card-content>  \n</mat-card>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 70%;\n  margin: auto auto; }\n\nmat-form-field {\n  width: 70%; }\n\nmat-spinner {\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n    <mat-card-title>إضافة منظم</mat-card-title>\n    <mat-card-content>\n        <form (submit)=\"onRegister(registerForm)\" #registerForm=\"ngForm\" *ngIf=\"!isLaoding\"> <!-- #postEvent=\"ngForm\" by adding this we can access the values inside this form -->\n          <mat-form-field>\n            <input \n              matInput\n              ngModel \n              name=\"name\" \n              type=\"text\"\n              placeholder=\"اسم المنظم\" \n              required>\n          </mat-form-field>\n          <mat-form-field>\n            <input \n              matInput \n              ngModel\n              name=\"email\" \n              #email=\"ngModel\"\n              type=\"email\" \n              placeholder=\"البريد الالكتروني\" \n              required \n              email> <!-- #email=\"ngModel\" bu adding this i can access the specific value on the input field inside the form (for ex *ngIf=\"email.invalid\") -->\n            <mat-error *ngIf=\"email.invalid\">أرجو إدخال بريد الكتروني صحيح</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input \n              matInput\n              ngModel \n              name=\"mobile1\" \n              #mobile1=\"ngModel\"\n              type=\"tel\" \n              placeholder=\"رقم الجوال\" \n              required> \n            <mat-error *ngIf=\"mobile1.invalid\">أرجو إدخال رقم جوال صحيح</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input \n              matInput\n              ngModel \n              name=\"mobile2\" \n              #mobile2=\"ngModel\"\n              type=\"tel\" \n              placeholder=\"رقم جوال إضافي\"> \n            <mat-error *ngIf=\"mobile1.invalid\">أرجو إدخال رقم جوال صحيح</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input \n              matInput\n              ngModel \n              name=\"work1\" \n              #work1=\"ngModel\"\n              type=\"tel\" \n              placeholder=\"رقم الهاتف\"> \n            <mat-error *ngIf=\"work1.invalid\">أرجو إدخال رقم هاتف صحيح</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input \n              matInput\n              ngModel \n              name=\"work2\" \n              #work2=\"ngModel\"\n              type=\"tel\" \n              placeholder=\"رقم هاتف إضافي\"> \n            <mat-error *ngIf=\"work2.invalid\">أرجو إدخال رقم هاتف صحيح</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input \n              matInput\n              ngModel \n              name=\"logoUrl\" \n              #logoUrl=\"ngModel\"\n              type=\"url\" \n              placeholder=\"رابط اللوقو للمنظم\"\n              required> \n            <mat-error *ngIf=\"logoUrl.invalid\">أرجو إدخال رابط صحيح</mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input \n              matInput \n              ngModel\n              name=\"password\" \n              type=\"password\" \n              placeholder=\"الرقم السري\" \n              required\n              #password=\"ngModel\">\n            <mat-error *ngIf=\"password.invalid\">الرقم السري غير صحيح</mat-error>\n          </mat-form-field>\n          <br>\n            <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!registerForm.form.valid\">تسجيل</button>\n          </form>\n    </mat-card-content>\n  </mat-card>\n    \n"

/***/ }),

/***/ "./src/app/auth/register/register.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 70%;\n  margin: auto auto; }\n\nmat-form-field {\n  width: 70%; }\n\nmat-spinner {\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    } //inject auth service to be used in this component
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function (form) {
        if (form.invalid) {
            return;
        }
        console.log(form.value); //correct
        this.authService.createOrganizer(form.value.name, form.value.email, form.value.mobile1, form.value.mobile2, form.value.work1, form.value.work2, form.value.logoUrl, form.value.password);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/body/events/add-event/add-event.component.html":
/*!****************************************************************!*\
  !*** ./src/app/body/events/add-event/add-event.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>إضافة فعالية</mat-card-title>\n  <mat-card-content>\n      <form [formGroup]=\"formGroup\" (submit)=\"onAddEvent(postEvent)\" #postEvent=\"ngForm\">\n        <mat-horizontal-stepper linear #stepper>\n          <mat-step [stepControl]=\"formGroup\">\n              <ng-template matStepLabel>Fill out your name</ng-template>\n              <mat-form-field>\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperNext>Next</button>\n              </div>\n          </mat-step>\n          <mat-step [stepControl]=\"formGroup\">\n              <ng-template matStepLabel>Fill out your address</ng-template>\n              <mat-form-field>\n                <input matInput placeholder=\"Address\" formControlName=\"firstCtrl\" required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n              </div>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            You are now done.\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\n            </div>\n          </mat-step>\n        </mat-horizontal-stepper>\n      </form>\n\n      <!-- <form (submit)=\"onAddEvent(postEvent)\" #postEvent=\"ngForm\">          \n        <mat-horizontal-stepper formArrayName=\"formArray\" linear>\n            <mat-step>\n              <mat-form-field>\n                  <input  \n                  ngModel\n                  matinput\n                  name=\"name\" \n                  type=\"text\"\n                  label=\"اسم المنظم\" \n                  required>\n              </mat-form-field>\n              <div>\n                <button mat-button matStepperNext type=\"button\">Next</button>\n              </div>\n            </mat-step>\n            <mat-step>\n              ...\n              <div>\n                <button mat-button matStepperPrevious type=\"button\">Back</button>\n                <button mat-button matStepperNext type=\"button\">Next</button>\n              </div>\n            </mat-step>\n            ...\n          </mat-horizontal-stepper>\n        </form> -->\n      <!-- <form (submit)=\"onAddEvent(postEvent)\" #postEvent=\"ngForm\">  #postEvent=\"ngForm\" by adding this we can access the values inside this form \n        <mdc-text-field\n        ngModel\n        name=\"name\"\n        type=\"text\"\n        label=\"اسم الفعالية\"\n        [required]=\"true\"\n        [dense]=\"true\" \n        ></mdc-text-field> -->\n      <!-- <mdc-text-field\n        ngModel\n        name=\"name\"\n        type=\"text\"\n        label=\"اسم الفعالية\"\n        [required]=\"true\"\n        [dense]=\"true\" \n        ></mdc-text-field> -->\n        <!-- <mat-form-field>\n        <input  \n          ngModel\n          matinput\n          name=\"name\" \n          type=\"text\"\n          label=\"اسم المنظم\" \n          required>\n        </mat-form-field>   -->\n        <!--<mat-form-field>\n          <input \n            matInput \n            ngModel\n            name=\"email\" \n            #email=\"ngModel\"\n            type=\"email\" \n            placeholder=\"البريد الالكتروني\" \n            required \n            email>  #email=\"ngModel\" bu adding this i can access the specific value on the input field inside the form (for ex *ngIf=\"email.invalid\") \n          <mat-error *ngIf=\"email.invalid\">أرجو إدخال بريد الكتروني صحيح</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input \n            matInput\n            ngModel \n            name=\"mobile1\" \n            #mobile1=\"ngModel\"\n            type=\"number\" \n            placeholder=\"رقم الجوال\" \n            required> \n          <mat-error *ngIf=\"mobile1.invalid\">أرجو إدخال رقم جوال صحيح</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input \n            matInput\n            ngModel \n            name=\"mobile2\" \n            #mobile2=\"ngModel\"\n            type=\"number\" \n            placeholder=\"رقم جوال إضافي\"> \n          <mat-error *ngIf=\"mobile1.invalid\">أرجو إدخال رقم جوال صحيح</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input \n            matInput\n            ngModel \n            name=\"work1\" \n            #work1=\"ngModel\"\n            type=\"number\" \n            placeholder=\"رقم الهاتف\"> \n          <mat-error *ngIf=\"work1.invalid\">أرجو إدخال رقم هاتف صحيح</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input \n            matInput\n            ngModel \n            name=\"work2\" \n            #work2=\"ngModel\"\n            type=\"number\" \n            placeholder=\"رقم هاتف إضافي\"> \n          <mat-error *ngIf=\"work2.invalid\">أرجو إدخال رقم هاتف صحيح</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input \n            matInput\n            ngModel \n            name=\"logoUrl\" \n            #logoUrl=\"ngModel\"\n            type=\"url\" \n            placeholder=\"رابط اللوقو للمنظم\"\n            required> \n          <mat-error *ngIf=\"logoUrl.invalid\">أرجو إدخال رابط صحيح</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input \n            matInput \n            name=\"password\" \n            type=\"password\" \n            placeholder=\"الرقم السري\" \n            required>\n        </mat-form-field>-->\n          <!-- <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"!postEvent.form.valid\">دخول</button>\n        </form> -->\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/body/events/add-event/add-event.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/body/events/add-event/add-event.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/events/add-event/add-event.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/body/events/add-event/add-event.component.ts ***!
  \**************************************************************/
/*! exports provided: AddEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEventComponent", function() { return AddEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddEventComponent = /** @class */ (function () {
    //secondFormGroup: FormGroup;
    function AddEventComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.formGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AddEventComponent.prototype.onAddEvent = function (form) {
        if (form.invalid)
            return;
        console.log(form.value);
        //name = form.value.name;
        //email = form.value.email;
        //}
        //}
    };
    AddEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__(/*! ./add-event.component.html */ "./src/app/body/events/add-event/add-event.component.html"),
            styles: [__webpack_require__(/*! ./add-event.component.scss */ "./src/app/body/events/add-event/add-event.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "./src/app/body/events/event-list/event-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/body/events/event-list/event-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spacer\"></div>\n<mat-card>\n<!--<mat-grid-list [cols]=\"grid\">\n   <mat-grid-tile *ngFor=\"let event of events\">\n            <mat-card>  \n                <mat-card-header>\n                    <mat-card-title>\n                        {{ event.name }}\n                        <mat-icon class=\"mat-icon-rtl-mirror\" [routerLink]=\"['/events', event._id]\">mode_edit</mat-icon>\n                    </mat-card-title>\n                </mat-card-header>\n                <img mat-card-image class=\"card-image-style\" [src]=\"event.imagesUrl\">\n            </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>-->\n<mat-card-header mdcTypography mdcHeadline4>جميع الفعاليات</mat-card-header>\n    <mdc-chip-set [filter]=\"true\">\n        <mdc-chip [primary]=\"true\" *ngFor=\"let event of events\">\n            <mdc-chip-text>{{ event.category }}</mdc-chip-text>\n        </mdc-chip>\n    </mdc-chip-set>\n    <mdc-image-list [masonry]=\"true\" [textProtection]=\"true\" class=\"masonry-image-list\">\n        <mdc-image-list-item *ngFor=\"let event of events\">\n        <img mdcImageListImage [src]=\"event.imagesUrl\">\n        <mdc-image-list-supporting>\n            <span mdcImageListLabel>{{ event.name }}<br>\n            {{ event.date }}</span>\n            <mdc-icon [routerLink]=\"['/events', event._id]\">link</mdc-icon>\n        </mdc-image-list-supporting>\n        </mdc-image-list-item>\n    </mdc-image-list>\n</mat-card>"

/***/ }),

/***/ "./src/app/body/events/event-list/event-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/body/events/event-list/event-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image-style {\n  width: 400px; }\n\n/*.mat-card-style{\n      background-color: white;\n  }*/\n\n.spacer {\n  margin-top: 35px; }\n\n.container {\n  position: relative; }\n\n.text-block {\n  position: absolute;\n  top: 20px;\n  background-color: rgba(0, 0, 0, 0.345);\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.mdc-image-list__label {\n  line-height: initial; }\n"

/***/ }),

/***/ "./src/app/body/events/event-list/event-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/body/events/event-list/event-list.component.ts ***!
  \****************************************************************/
/*! exports provided: EventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListComponent", function() { return EventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event.service */ "./src/app/body/events/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventListComponent = /** @class */ (function () {
    function EventListComponent(eventsService, breakpointObserver) {
        this.eventsService = eventsService;
        this.breakpointObserver = breakpointObserver;
        this.events = [];
        /**
        * The number of colums in the mat-grid-list directive.
        */
        this.grid = "5";
    }
    EventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        /***************************************************************/
        //RETURN ALL EVENTS TO THE HTML TEMPLATE
        /***************************************************************/
        this.eventsService.getAllEvents().subscribe(function (events) {
            _this.events = events; // use events in the html template
        });
        /***************************************************************/
        //RESPONSIVNESS USING LIBRARY ANGULAR MATERIAL LAYOUT LIBRARY
        /***************************************************************/
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].XSmall
        ])
            .subscribe(function (result) {
            if (result.matches) {
                _this.grid = "1"; // use grid in the html template
            }
        });
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Medium
        ])
            .subscribe(function (result) {
            if (result.matches) {
                _this.grid = "2"; // use grid in the html template
            }
        });
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Large
        ])
            .subscribe(function (result) {
            if (result.matches) {
                _this.grid = "3"; // use grid in the html template
            }
        });
        /***************************************************************/
        //END OF RESPONSIVENESS SETINGS
        /***************************************************************/
    };
    EventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/body/events/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.scss */ "./src/app/body/events/event-list/event-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], EventListComponent);
    return EventListComponent;
}());



/***/ }),

/***/ "./src/app/body/events/event.service.ts":
/*!**********************************************!*\
  !*** ./src/app/body/events/event.service.ts ***!
  \**********************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { environment }  from '../../../environments/environment';
//import { Event }        from "./event.model";
//const httpOptions = {
//headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};
var EventService = /** @class */ (function () {
    //private eventUrl = '/events';
    //private events: Event[];
    //private eventsUpdated = new Subject<Event[]>();
    function EventService(http) {
        this.http = http;
    }
    //GET all events from the server
    EventService.prototype.getAllEvents = function () {
        return this.http.get('http://localhost:3000/events')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (events) {
            return events;
        }));
    };
    EventService.prototype.getSingleEvent = function (eventId) {
        console.log("calling http://localhost:3000/events/" + eventId);
        return this.http.get('http://localhost:3000/events/' + eventId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            return event;
        }));
    };
    EventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/body/events/single-event/single-event.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/body/events/single-event/single-event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">  \n<mat-grid-list [cols]=\"grid\" rowHeight=\"700px\">\n    <mat-grid-tile [colspan]=\"colspan\"> <!--image and description-->\n        <mat-card>   \n            <img mat-card-image class=\"event-image-style\" [src]=\"event?.imagesUrl\">\n            <mat-card-content>\n                  <h3>{{ event?.name }}</h3>\n                  <p matLine>{{ event?.description }}</p>\n          </mat-card-content>\n        </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile> <!--event card-->\n        <mat-card>\n                <mat-icon matListIcon>date_range</mat-icon>\n                <p matLine> {{ event?.date | date }} </p>\n        </mat-card>\n        <li>\n                <mat-icon matListIcon>location_on</mat-icon>\n                <p matLine> {{ event?.location }} </p>\n        </li>\n        <li>\n                <mat-icon matListIcon>perm_identity</mat-icon>\n                <p matLine> {{ event?.organizer }} </p>\n        </li> \n    </mat-grid-tile>\n</mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/body/events/single-event/single-event.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/body/events/single-event/single-event.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  margin-top: 35px; }\n\n.grid-container {\n  margin: 0 10%; }\n"

/***/ }),

/***/ "./src/app/body/events/single-event/single-event.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/body/events/single-event/single-event.component.ts ***!
  \********************************************************************/
/*! exports provided: SingleEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleEventComponent", function() { return SingleEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/body/events/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleEventComponent = /** @class */ (function () {
    function SingleEventComponent(eventsService, route, breakpointObserver) {
        this.eventsService = eventsService;
        this.route = route;
        this.breakpointObserver = breakpointObserver;
        this.grid = "3";
        this.colspan = "2";
    }
    SingleEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['eventId']; //must use the same name in the routes of app.model.ts > { path: 'events/:eventId', component: .. 
        this.eventsService.getSingleEvent(id).subscribe(function (event) {
            _this.event = event; // use events in the html template
        });
        /***************************************************************/
        //RESPONSIVNESS USING LIBRARY ANGULAR MATERIAL LAYOUT LIBRARY
        /***************************************************************/
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small
        ])
            .subscribe(function (result) {
            if (result.matches) {
                _this.grid = "1"; // use grid in the html template
                _this.colspan = "1";
            }
        });
        this.breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large
        ])
            .subscribe(function (result) {
            if (result.matches) {
                _this.grid = "3"; // use grid in the html template
                _this.colspan = "2";
            }
        });
        /***************************************************************/
        //END OF RESPONSIVENESS SETINGS
        /***************************************************************/
    };
    SingleEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-event',
            template: __webpack_require__(/*! ./single-event.component.html */ "./src/app/body/events/single-event/single-event.component.html"),
            styles: [__webpack_require__(/*! ./single-event.component.scss */ "./src/app/body/events/single-event/single-event.component.scss")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], SingleEventComponent);
    return SingleEventComponent;
}());



/***/ }),

/***/ "./src/app/body/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/body/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"slideshow\">\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n</ul>\n<div class=\"landing-header\">\n  <h1>مرحبا بكم في عالم من الأحلام</h1>\n  <button mat-stroked-button routerLink=\"/events\">اكتشف الفعاليات</button>\n\n"

/***/ }),

/***/ "./src/app/body/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/body/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-header {\n  z-index: 1;\n  position: relative;\n  padding-top: 40vh;\n  text-align: center; }\n\n.slideshow {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.slideshow li {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  opacity: 0;\n  z-index: 0;\n  -webkit-animation: imageAnimation 50s linear infinite;\n          animation: imageAnimation 50s linear infinite; }\n\n.slideshow li:nth-child(1) {\n  background-image: url(http://i.imgur.com/K3mPv14.jpg); }\n\n.slideshow li:nth-child(2) {\n  background-image: url(http://i.imgur.com/SBEmFpv.jpg);\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s; }\n\n.slideshow li:nth-child(3) {\n  background-image: url(http://i.imgur.com/emvhOnb.jpg);\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n\n.slideshow li:nth-child(4) {\n  background-image: url(http://i.imgur.com/2LSMCmJ.jpg);\n  -webkit-animation-delay: 30s;\n          animation-delay: 30s; }\n\n.slideshow li:nth-child(5) {\n  background-image: url(http://i.imgur.com/TVGe0Ef.jpg);\n  -webkit-animation-delay: 40s;\n          animation-delay: 40s; }\n\n@-webkit-keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  20% {\n    opacity: 1; }\n  30% {\n    opacity: 0; } }\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in; }\n  10% {\n    opacity: 1;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out; }\n  20% {\n    opacity: 1; }\n  30% {\n    opacity: 0; } }\n\n/* Older browser support - class added by modernizr */\n\n.no-cssanimations .slideshow li {\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/body/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/body/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/body/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/body/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/body/organizer/organizer-home/organizer-home.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/body/organizer/organizer-home/organizer-home.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">  \n  <h1 class=\"mat-h1\">Dashboard</h1>  \n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">  \n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">  \n      <mat-card class=\"dashboard-card\">  \n        <mat-card-header>  \n          <mat-card-title>  \n            {{card.title}}  \n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">  \n              <mat-icon>more_vert</mat-icon>  \n            </button>  \n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">  \n              <button mat-menu-item>Expand</button>  \n              <button mat-menu-item>Remove</button>  \n            </mat-menu>  \n          </mat-card-title>  \n        </mat-card-header>  \n        <mat-card-content class=\"dashboard-card-content\">  \n          <div>Card Content Here</div>  \n        </mat-card-content>  \n      </mat-card>  \n    </mat-grid-tile>  \n  </mat-grid-list>  \n</div>"

/***/ }),

/***/ "./src/app/body/organizer/organizer-home/organizer-home.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/body/organizer/organizer-home/organizer-home.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/body/organizer/organizer-home/organizer-home.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/body/organizer/organizer-home/organizer-home.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrganizerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerHomeComponent", function() { return OrganizerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrganizerHomeComponent = /** @class */ (function () {
    function OrganizerHomeComponent() {
        // Number of cards to be generated with column and rows to be covered  
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    OrganizerHomeComponent.prototype.ngOnInit = function () {
    };
    OrganizerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organizer-home',
            template: __webpack_require__(/*! ./organizer-home.component.html */ "./src/app/body/organizer/organizer-home/organizer-home.component.html"),
            styles: [__webpack_require__(/*! ./organizer-home.component.scss */ "./src/app/body/organizer/organizer-home/organizer-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrganizerHomeComponent);
    return OrganizerHomeComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- adding space before the menu -->\n<!--<div class=\"space\"></div>-->\n\n<!-- header menu starts here -->\n<mat-toolbar color=\"primary\" class=\"toolbar-display\">\n    <!-- this is the logo item -->\n        <img src=\"assets/logo-nav.png\" alt=\"Smiley face\">\n            \n    <!-- This fills the remaining space of the current row -->\n    <span class=\"fill-remaining-space\"></span>\n    \n    <!-- this is the menu items -->\n    <span>\n        <button mat-button routerLink=\"/\">الرئيسية</button>\n        <button mat-button routerLink=\"/events\">الفعاليات</button>\n        <button mat-button>اتصل بنا</button>\n    </span>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.space {\n  margin-top: 35px; }\n\n.toolbar-display {\n  z-index: 1;\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'http://localhost:3000',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macuser/Desktop/workspace/EventManagement/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map