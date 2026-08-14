(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);






// import { MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';

const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            // MatInputModule,
            // MatButtonModule,
            // MatFormFieldModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            // MatIconModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.component */ 55041);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 35758);














let LoginPage = class LoginPage {
    constructor(authService, statusBar, router, alertService, httpClient, alertController, appComponent, storage) {
        this.authService = authService;
        this.statusBar = statusBar;
        this.router = router;
        this.alertService = alertService;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.appComponent = appComponent;
        this.storage = storage;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.hide = true;
    }
    ngOnInit() {
        this.initializeValidators();
        this.checkLogin();
    }
    initializeValidators() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
            // username: new FormControl('30641502', Validators.required), // oosc
            // password: new FormControl('7401@1969', Validators.required)
        });
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    checkLogin() {
        const token = window.localStorage.getItem('user_token');
        if (token) {
            this.router.navigate(['/tabs/home']);
        }
    }
    login() {
        if (this.form.valid) {
            const records = { records: { emis_username: this.form.value.username, emis_password: this.form.value.password } };
            this.authService.validateAttendance(records, 1);
            this.onLearnerJson();
        }
        else {
            this.alertService.error('Login ID and Password is required');
        }
    }
    onKeydown(event) {
        console.log("event key", event);
        if (event.key === 'Enter') {
            this.hide = false;
            this.login();
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray) {
                for (const item of control.controls) {
                    if (item instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
                        this.validateAllFormFields(item);
                    }
                }
            }
        });
    }
    ionViewWillEnter() {
        this.statusBar.backgroundColorByHexString('#8B67B3');
    }
    // learners
    getJsonFromMultipleSources() {
        // let volnteerSchool = this.httpClient.get('https://d1wpyxz35bzzz4.cloudfront.net/govt_aided_and_partial_aided.json');
        let language = this.httpClient.get('https://d1wpyxz35bzzz4.cloudfront.net/cognates_language_wise.json');
        let state = this.httpClient.get('https://d1wpyxz35bzzz4.cloudfront.net/statewise.json');
        let district = this.httpClient.get('https://d1wpyxz35bzzz4.cloudfront.net/base_app_dist_master.json');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([language, state, district]);
    }
    onLearnerJson() {
        debugger;
        this.getJsonFromMultipleSources().subscribe(jsondata => {
            debugger;
            // this.list1(jsondata);
            this.list2(jsondata);
            this.list3(jsondata);
            this.list4(jsondata);
        });
    }
    list3(jsondata) {
        this.storage.set('state', { result: jsondata[1].state }).then(r => {
            console.log('state success');
        });
    }
    list4(jsondata) {
        this.storage.set('district', { result: jsondata[2].base_app }).then(r => {
            console.log('district success');
        });
    }
    list1(jsondata) {
        this.storage.set('volnteerSchool', { result: jsondata[0].govt_aided }).then(r => {
            console.log('Volunteer school success');
        });
    }
    list2(jsondata) {
        this.storage.set('language', { result: jsondata[0].language }).then(r => {
            console.log('language success');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\n  background: url(\"/assets/images/login/login-bg.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n\nform {\n  margin-top: 10%;\n  justify-content: center;\n}\n\nion-icon {\n  zoom: 1;\n}\n\nion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h {\n  --padding-start: 0 !important;\n}\n\n.loginButton {\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n}\n\n.content {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n\n.mat-form-field-underline {\n  position: absolute;\n  width: 80%;\n  pointer-events: none;\n  transform: scaleY(1.0001);\n}\n\n.formLine {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\nion-item {\n  --background: transparent;\n  --color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtGQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLE9BQUE7QUFHRjs7QUFBQTtFQUNFLDZCQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBTUY7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBT0Y7O0FBTEE7RUFFRSwwQkFBQTtBQU9GOztBQUxBO0VBQ0UseUJBQUE7RUFDQSwwQ0FBQTtBQVFGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iZ3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2xvZ2luL2xvZ2luLWJnLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICB6b29tOjE7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnNjLWlvbi1pbnB1dC1tZC1oOm5vdCguaXRlbS1sYWJlbCksIGlvbi1pdGVtOm5vdCguaXRlbS1sYWJlbCkgLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubG9naW5CdXR0b24ge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uY29udGVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEuMDAwMSk7XHJcbn1cclxuLmZvcm1MaW5le1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuaW9uLWxhYmVsXHJcbntcclxuICBmb250LXNpemU6MThweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxufSJdfQ== */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"content login-bg\">\r\n    <form name=\"form\" [formGroup]=\"form\" novalidate>\r\n      <div class=\"smart-container\">\r\n\r\n        <ion-item class=\"formLine light-back\" >\r\n          <ion-label position=\"floating\" color=\"primary\">User Name <span class=\"valid-astrict-clr\">*</span></ion-label>\r\n          <ion-input type=\"text\" formControlName=\"username\" autocomplete=\"off\" tabindex=\"1\">\r\n          </ion-input>\r\n        </ion-item>\r\n       \r\n        <ion-item class=\"formLine\">\r\n          <ion-label position=\"floating\" color=\"primary\">Password <span class=\"valid-astrict-clr\">*</span></ion-label>\r\n          <ion-input [type]=\"passwordType\" formControlName=\"password\" autocomplete=\"off\"\r\n            (keydown)=\"onKeydown($event)\">\r\n          </ion-input>\r\n          <ion-icon slot=\"end\" [name]=\"passwordIcon\" class=\"passwordIcon\" (click)=\"hideShowPassword()\"\r\n            style=\"float:right; margin-top: auto !important; \"></ion-icon>\r\n        </ion-item>\r\n       \r\n        <ion-button size=\"default\" class=\"loginButton\" (click)=\"login()\"> Login </ion-button>\r\n        <br />\r\n        <br />\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts-es2015.js.map