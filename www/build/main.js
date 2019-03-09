webpackJsonp([3],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, dataservice) {
        this.navCtrl = navCtrl;
        this.dataservice = dataservice;
        this.model = {};
    }
    LoginPage.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            var name = JSON.parse(localStorage.getItem("userdetails"));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    LoginPage.prototype.loginForm = function (value) {
        var _this = this;
        console.log(value);
        this.dataservice.login(value).subscribe(function (res) {
            _this.loginData = res;
            if (res.message == 'Authentication failed. User not found.') {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()("Oh noes!", res.message);
            }
            else if (res.message == 'Authentication failed. Wrong password.') {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert___default()("Oh noes!", res.message);
            }
            else {
                localStorage.setItem('currentUser', JSON.stringify({ token: res.token }));
                localStorage.setItem('userdetails', JSON.stringify({ user: res.user }));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('loginform'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */])
    ], LoginPage.prototype, "loginform", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\KIRUPA\Ionic\simpleapp\src\pages\login\login.html"*/'<ion-content padding>\n\n    <form name="loginform" id="loginform" #loginform="ngForm" novalidate (ngSubmit)="loginForm(loginform.value)">\n\n        <div align="center" class="logoholder">\n\n            <img src="./assets/imgs/logo.png" />\n\n        </div>\n\n        <ion-list >\n\n            <ion-item>\n\n                <ion-label style="color:#564545" color="primary" floating>Email</ion-label>\n\n                <ion-input  required type="email" #email="ngModel" ngModel pattern="[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" id="email" name="email"></ion-input>\n\n\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label style="color:#564545" color="primary" floating>Password</ion-label>\n\n              <ion-input type="password" name="password" #password="ngModel" ngModel autocomplete="off" id="password"  pattern="^[a-zA-Z1-9].*" minlength="8" maxlength="12" required ></ion-input>\n\n\n\n            </ion-item>\n\n        </ion-list>\n\n        <div class="bttnbar">\n\n           <a routerLink="/home"> <button style="background:#564545" ion-button block type="submit">Login</button></a>\n\n        </div>\n\n        <div align="center">\n\n            <div><button ion-button clear class="signup" style="color:#564545" type="button" (click)="register()">Sign Up</button></div>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <div><button ion-button clear class="forgetpass" style="color:#564545" type="button" (click)="gotToForgetpassword()">Forgot Password?</button></div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n    </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\KIRUPA\Ionic\simpleapp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__app_data_service__["a" /* DataService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFeedbackPage = /** @class */ (function () {
    function AddFeedbackPage(navCtrl, navParams, dataservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataservice = dataservice;
        this.myDate = new Date();
    }
    AddFeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddFeedbackPage');
        var date = new Date();
        console.log(date);
    };
    AddFeedbackPage.prototype.goToBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AddFeedbackPage.prototype.savefeedback = function (value) {
        var _this = this;
        var getDate = new Date();
        var getData = JSON.parse(localStorage.getItem("userdetails"));
        var data = {
            'userId': getData.user._id,
            'date': getDate,
            'repName': value.nameRep,
            'customerName': value.customerName,
            'issuseType': value.issuseType,
            'issuseDes': value.issuseDes,
            'status': value.status,
            'readStatus': 0
        };
        this.dataservice.addFeedbackService(data).subscribe(function (res) {
            _this.feedBack = res;
            __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Oh noes!", res.message);
            _this.myForm.resetForm();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ruleaddform'),
        __metadata("design:type", Object)
    ], AddFeedbackPage.prototype, "myForm", void 0);
    AddFeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-feedback',template:/*ion-inline-start:"C:\KIRUPA\Ionic\simpleapp\src\pages\add-feedback\add-feedback.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n      <ion-buttons class="backBtn" (click)="goToBack()" left>\n          <button ion-button icon-only class="backBtn">\n            <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n     <ion-title>Add FeedBack</ion-title>\n  </ion-navbar>\n </ion-header>\n\n<ion-content padding>\n  <form name="ruleaddform" id="ruleaddform" #ruleaddform="ngForm" novalidate>\n      <ion-row>\n          <ion-col col-12>\n              <ion-item>\n                  <ion-label floating >Rep Name</ion-label>\n                  <ion-input type="text"  id="nameRep" required name="nameRep" #nameRep="ngModel" ngModel minlength="3" maxlength="10"></ion-input>\n              </ion-item>\n          </ion-col>\n          <ion-col col-12>\n              <ion-item>\n                  <ion-label  floating>Customer Name</ion-label>\n                  <ion-input type="text"   id="customerName" name="customerName" #customerName="ngModel" ngModel></ion-input>\n              </ion-item>\n\n          </ion-col>\n          <!-- <ion-col col-12>\n              <ion-item>\n                  <ion-label color="primary" floating> Select Condition</ion-label>\n                  <ion-select [(ngModel)]="model.condition" #condition="ngModel" id="condition" name="condition" (ionChange)="callCondition(condition.value)" required>\n                      <ion-option selected value="<">\n                          <(lower than) </ion-option>\n                              <ion-option value=">"> >(higher than) </ion-option>\n                              <ion-option value="="> =(equal) </ion-option>\n                              <ion-option value="INTERRUPT"> INTERRUPT </ion-option>\n                  </ion-select>\n\n              </ion-item>\n          </ion-col> -->\n          <ion-col col-12>\n              <ion-item>\n                  <ion-label  floating>Issuse Type</ion-label>\n                  <ion-select  id="issuseType" name="issuseType" #issuseType="ngModel" ngModel required>\n                      <ion-option>Condition</ion-option>\n                  </ion-select>\n              </ion-item>\n          </ion-col>\n\n          <ion-col col-12>\n              <ion-item id="textBox">\n                  <ion-label floating >Issues Description</ion-label>\n                  <ion-input type="text"   id="issuseDes" name="issuseDes" #issuseDes="ngModel" ngModel></ion-input>\n              </ion-item>\n          </ion-col>\n\n          <ion-col col-12>\n            <ion-item>\n                <ion-label  floating>Status</ion-label>\n                <ion-select  id="status" name="status" #status="ngModel" ngModel required>\n                    <ion-option>Condition</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n        \n      </ion-row>\n      <div class="bttnbar">\n          <button style="backgroundcolor:brown" ion-button block type="submit" [disabled]="!ruleaddform.valid" (click)="savefeedback(ruleaddform.value)">Save</button>\n      </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\KIRUPA\Ionic\simpleapp\src\pages\add-feedback\add-feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* DataService */]])
    ], AddFeedbackPage);
    return AddFeedbackPage;
}());

//# sourceMappingURL=add-feedback.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listpage_listpage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_feedback_add_feedback__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingpagePage = /** @class */ (function () {
    function LandingpagePage(navCtrl, navParams, nav, alrtCtrl, loadingCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nav = nav;
        this.alrtCtrl = alrtCtrl;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.loader = this.loadingCtrl.create({
            content: "Please Wait...",
        });
    }
    LandingpagePage_1 = LandingpagePage;
    LandingpagePage.prototype.alert = function (message) {
        this.alrtCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LandingpagePage.prototype.ngOnInit = function () {
    };
    LandingpagePage.prototype.addUser = function (user) {
    };
    LandingpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingpagePage');
    };
    LandingpagePage.prototype.openPage = function (page) {
        switch (page) {
            case 'addFeed':
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__add_feedback_add_feedback__["a" /* AddFeedbackPage */]);
                break;
            case 'list':
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__listpage_listpage__["a" /* ListpagePage */]);
                break;
            case 'profile':
                this.nav.setRoot(LandingpagePage_1);
                break;
            case 'history':
                this.nav.setRoot(LandingpagePage_1);
                break;
        }
    };
    LandingpagePage = LandingpagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landingpage',template:/*ion-inline-start:"C:\KIRUPA\Ionic\simpleapp\src\pages\landingpage\landingpage.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-navbar>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-navbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n   \n\n    <div class="quicklinks">\n        <ion-grid class="gatewayselection">\n            <ion-row>\n                <ion-col>\n                    <button type="button" (click)="openPage(\'addFeed\')">\n                    <img src="./assets/imgs/utilities.png" />\n                    <p>Add FeedBack</p>\n                </button>\n                </ion-col>\n                <ion-col>\n                    <button type="button" (click)="openPage(\'list\')">\n                    <img src="./assets/imgs/groups.png" />\n                    <p>List FeedBack</p>\n                </button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <button type="button" (click)="openPage(\'profile\')">\n                              <img src="./assets/imgs/mode.png" />\n                              <p>Profile</p>\n                          </button>\n                </ion-col>\n                <ion-col>\n                    <button type="button" (click)="page(\'history\')">\n                      <img src="./assets/imgs/schedule.png" />\n                      <p>History</p>\n                  </button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\KIRUPA\Ionic\simpleapp\src\pages\landingpage\landingpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__app_data_service__["a" /* DataService */]])
    ], LandingpagePage);
    return LandingpagePage;
    var LandingpagePage_1;
}());

//# sourceMappingURL=landingpage.js.map

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-feedback/add-feedback.module": [
		451,
		2
	],
	"../pages/landingpage/landingpage.module": [
		452,
		1
	],
	"../pages/listpage/listpage.module": [
		453,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 229;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(397);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_landingpage_landingpage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listpage_listpage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_feedback_add_feedback__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_landingpage_landingpage__["a" /* LandingpagePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listpage_listpage__["a" /* ListpagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_feedback_add_feedback__["a" /* AddFeedbackPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-feedback/add-feedback.module#AddFeedbackPageModule', name: 'AddFeedbackPage', segment: 'add-feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landingpage/landingpage.module#LandingpagePageModule', name: 'LandingpagePage', segment: 'landingpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listpage/listpage.module#ListpagePageModule', name: 'ListpagePage', segment: 'listpage', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_landingpage_landingpage__["a" /* LandingpagePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_listpage_listpage__["a" /* ListpagePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_feedback_add_feedback__["a" /* AddFeedbackPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\KIRUPA\Ionic\simpleapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\KIRUPA\Ionic\simpleapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/map';


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseURL = 'https://medicaltracking.herokuapp.com';
    }
    /* login service */
    DataService.prototype.login = function (value) {
        var _this = this;
        return this.http.post(this.baseURL + '/user/login', value)
            .map(function (result) { return _this.userloginservice = result.json(); });
    };
    /* end */
    DataService.prototype.addFeedbackService = function (value) {
        var _this = this;
        return this.http.post(this.baseURL + '/feedback/addFeedBack', value)
            .map(function (result) { return _this.AddFeedBack = result.json(); });
    };
    /* find feedbacklist */
    DataService.prototype.findFeedBackList = function (value) {
        var _this = this;
        return this.http.post(this.baseURL + '/feedback/finduserFeedBack', value)
            .map(function (result) { return _this.AddFeedBack = result.json(); });
    };
    /* end */
    /** read feedback */
    DataService.prototype.readfeedbackservice = function (value) {
        var _this = this;
        return this.http.post(this.baseURL + '/feedback/readFeedback', value)
            .map(function (result) { return _this.AddFeedBack = result.json(); });
    };
    /* end */
    /* del feedback */
    DataService.prototype.delfeedbackservice = function (value) {
        var _this = this;
        return this.http.post(this.baseURL + '/feedback/delFeedback', value)
            .map(function (result) { return _this.AddFeedBack = result.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landingpage_landingpage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listpage_listpage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        var name = JSON.parse(localStorage.getItem("userdetails"));
        this.username = name.user.name;
        this.email = name.user.email;
        console.log(this.username);
    }
    HomePage.prototype.openPage = function (page) {
        switch (page) {
            case 'dashboard':
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__landingpage_landingpage__["a" /* LandingpagePage */]);
                break;
            case 'list':
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__listpage_listpage__["a" /* ListpagePage */]);
                break;
            default:
                this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__landingpage_landingpage__["a" /* LandingpagePage */]);
                break;
        }
    };
    HomePage.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userdetails');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__landingpage_landingpage__["a" /* LandingpagePage */];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\KIRUPA\Ionic\simpleapp\src\pages\home\home.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n      <div class="userdetails">\n\n          <img src="./assets/imgs/default.png" />\n\n          <button class="links" clear (click)="goToProfile();" menuClose>{{username}}</button>\n\n          <button class="links" clear (click)="goToProfile();" menuClose>{{email}}</button>\n\n      </div>\n\n      <ion-list>\n\n          <button menuClose ion-item (click)="openPage(\'home\')">\n\n          <img src="./assets/icon/Menu_home.png" width="32" height="32" />\n\n          Home\n\n        </button>\n\n        \n\n          <div class="menudivider"></div>\n\n          <button menuClose ion-item (click)="openPage(\'settings\')">\n\n            <img src="./assets/icon/Menu_settings.png" width="32" height="32" />\n\n          Settings</button>\n\n          <button menuClose ion-item (click)="openPage(\'about\')">\n\n            <img src="./assets/icon/Menu_info.png" width="32" height="32" />\n\n          About</button>\n\n          <button menuClose ion-item (click)="openPage(\'update\')">\n\n            <img src="./assets/imgs/upgrade.png" width="25" height="25" />\n\n          Update</button>\n\n          <button menuClose ion-item (click)="NotificationOpen()">\n\n            <img src="./assets/imgs/abt_mobile.png" width="25" height="25" />\n\n          Notifications</button>\n\n          <div class="menudivider"></div>\n\n          <button menuClose ion-item (click)="logout()">\n\n            <img src="./assets/icon/Menu_logout.png" width="32" height="32" />\n\n          Logout</button>\n\n      </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\KIRUPA\Ionic\simpleapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ListpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListpagePage = /** @class */ (function () {
    function ListpagePage(navCtrl, navParams, loadingCtrl, nav, dataservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.dataservice = dataservice;
    }
    ListpagePage.prototype.ngOnInit = function () {
        var _this = this;
        var getData = JSON.parse(localStorage.getItem("userdetails"));
        var data = {
            'userId': getData.user._id
        };
        this.dataservice.findFeedBackList(data).subscribe(function (res) {
            _this.feedbackList = res.result;
        });
    };
    ListpagePage.prototype.NotificationDetails = function (value) {
        var _this = this;
        var data = {
            'userId': value.userId,
            '_id': value._id,
            'readStatus': 1
        };
        this.dataservice.readfeedbackservice(data).subscribe(function (res) {
            _this.feedbackList = res.result;
        });
    };
    ListpagePage.prototype.ionViewDidLoad = function () { };
    ListpagePage.prototype.goToBack = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ListpagePage.prototype.del = function (value) {
        var _this = this;
        var data = {
            '_id': value._id,
            'userId': value.userId
        };
        this.dataservice.delfeedbackservice(data).subscribe(function (res) {
            _this.feedbackList = res.result;
            if (res.message == 'Delete Successfully') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Oh noes!", res.message);
            }
            else if (res.message == 'Cannot Delete') {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()("Oh noes!", res.message);
            }
        });
    };
    ListpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listpage',template:/*ion-inline-start:"C:\KIRUPA\Ionic\simpleapp\src\pages\listpage\listpage.html"*/'<ion-header>\n    <ion-navbar hideBackButton>\n        <ion-buttons class="backBtn" (click)="goToBack()" left>\n            <button ion-button icon-only class="backBtn">\n              <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n       <ion-title><pre>  FeedBack List</pre></ion-title>\n    </ion-navbar>\n   </ion-header>\n\n   <ion-content padding>\n    <ion-card *ngFor="let list of feedbackList">\n        <ion-item [color]="list.readStatus==false  ? \'light\':\'white\'">\n            <ion-label>\n                <h2></h2>\n                <ion-row>\n                    <ion-col style="color:blueviolet" aling="center"><pre>        {{list.issuseType}}</pre>\n                    </ion-col>\n                    <ion-col></ion-col>\n                    <ion-col></ion-col>  \n                    <ion-col></ion-col>  \n                    <ion-col></ion-col> \n                    <ion-col> \n                        <ion-icon name="trash" (click)="del(list)" style="color:brown"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <div (click)="NotificationDetails(list)">\n               <ion-label align="center">Rep Name : {{list.repName}}</ion-label>\n                <ion-note item-start>Issue Des : {{list.issuseDes}}</ion-note>\n                <ion-note item-start>Date : {{list.date | date}}</ion-note>\n\n                </div>\n                <!-- <ion-badge item-end>End Date:{{item?.endDate}}</ion-badge> -->\n            </ion-label>\n            <!--    <ion-toggle [(ngModel)]="item.isChecked" (ionChange)="activateschedule(item)"></ion-toggle>-->\n            <!-- <ion-note item-end>End Date:{{item?.endDate}}</ion-note> -->\n        </ion-item>\n    </ion-card>\n  </ion-content>'/*ion-inline-end:"C:\KIRUPA\Ionic\simpleapp\src\pages\listpage\listpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */],
            __WEBPACK_IMPORTED_MODULE_2__app_data_service__["a" /* DataService */]])
    ], ListpagePage);
    return ListpagePage;
}());

//# sourceMappingURL=listpage.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map