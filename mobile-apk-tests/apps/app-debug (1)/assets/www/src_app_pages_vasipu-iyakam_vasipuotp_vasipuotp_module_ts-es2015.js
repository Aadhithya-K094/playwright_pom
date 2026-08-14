(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuotp_vasipuotp_module_ts"],{

/***/ 53069:
/*!***************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuotp/vasipuotp-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuotpPageRoutingModule": function() { return /* binding */ VasipuotpPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vasipuotp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuotp.page */ 99992);




const routes = [
    {
        path: '',
        component: _vasipuotp_page__WEBPACK_IMPORTED_MODULE_0__.VasipuotpPage
    }
];
let VasipuotpPageRoutingModule = class VasipuotpPageRoutingModule {
};
VasipuotpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VasipuotpPageRoutingModule);



/***/ }),

/***/ 88910:
/*!*******************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuotp/vasipuotp.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuotpPageModule": function() { return /* binding */ VasipuotpPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vasipuotp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuotp-routing.module */ 53069);
/* harmony import */ var _vasipuotp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuotp.page */ 99992);







let VasipuotpPageModule = class VasipuotpPageModule {
};
VasipuotpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vasipuotp_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuotpPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_vasipuotp_page__WEBPACK_IMPORTED_MODULE_1__.VasipuotpPage]
    })
], VasipuotpPageModule);



/***/ }),

/***/ 99992:
/*!*****************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuotp/vasipuotp.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuotpPage": function() { return /* binding */ VasipuotpPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vasipuotp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vasipuotp.page.html */ 12809);
/* harmony import */ var _vasipuotp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuotp.page.scss */ 85264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);






// import { AlertController } from '@ionic/angular';


let VasipuotpPage = class VasipuotpPage {
    constructor(router, alertService, route, userService) {
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.local = this.routeData.queryParams.local;
        this.userID = this.routeData.queryParams.userID;
        this.batch = this.routeData.queryParams.batch;
        console.log(this.routeData);
        console.log(this.schoolId);
        console.log(this.local);
        console.log(this.userID);
        console.log(this.batch);
        this.form.reset();
    }
    initialValidator() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            one: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            two: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            three: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            four: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            five: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            six: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
    }
    gotoNextField(item, nextElement, id) {
        if (id == '1') {
            if (parseInt(this.form.value.one) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['one'].setValue('');
                this.form.controls['one'].updateValueAndValidity();
            }
        }
        if (id == '2') {
            if (parseInt(this.form.value.two) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['two'].setValue('');
                this.form.controls['two'].updateValueAndValidity();
            }
        }
        if (id == '3') {
            if (parseInt(this.form.value.three) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['three'].setValue('');
                this.form.controls['three'].updateValueAndValidity();
            }
        }
        if (id == '4') {
            if (parseInt(this.form.value.four) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['four'].setValue('');
                this.form.controls['four'].updateValueAndValidity();
            }
        }
        if (id == '5') {
            if (parseInt(this.form.value.five) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['five'].setValue('');
                this.form.controls['five'].updateValueAndValidity();
            }
        }
        if (id == '6') {
            if (parseInt(this.form.value.six) <= 9) {
            }
            else {
                this.form.controls['six'].setValue('');
                this.form.controls['six'].updateValueAndValidity();
            }
        }
    }
    onPage() {
        if (this.form.valid) {
            let value = this.form.value.one.toString() + this.form.value.two.toString();
            let value1 = value.toString() + this.form.value.three.toString();
            let value2 = value1.toString() + this.form.value.four.toString();
            let value3 = value2.toString() + this.form.value.five.toString();
            let value4 = value3.toString() + this.form.value.six.toString();
            this.userService.getVasipuIyakamOTP(value4, this.schoolId).subscribe((response) => {
                if (response.dataStatus == true) {
                    this.alertService.success('OTP valid');
                    console.log('OTP valid');
                    this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": value4, "schoolId": this.schoolId, "batch": this.batch, "status": 2 } });
                }
                else {
                    this.alertService.error('OTP invalid');
                }
            });
        }
        else {
            this.validateAllFormFields(this.form);
            this.alertService.error('Please Fill all the Fields');
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/vasipu-iyakam/vi-session']);
    }
};
VasipuotpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
VasipuotpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-vasipuotp',
        template: _raw_loader_vasipuotp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vasipuotp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VasipuotpPage);



/***/ }),

/***/ 85264:
/*!*******************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuotp/vasipuotp.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n\n.header-image {\n  background: url(\"/assets/images/connect.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid white;\n  background-color: #FFFFFF;\n  margin-top: 55%;\n  height: 100%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 5px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.otpEnter {\n  border: 2px solid #707070;\n  border-radius: 10%;\n}\n\nion-input {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksMkVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJ2YXNpcHVvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYXJkLXN0ZW0ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuLmhlYWRlci1pbWFnZXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29ubmVjdC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH0gXHJcbiAgXHJcbiAgLmNhcmQtaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi10b3A6IDU1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9IFxyXG5cclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDtcclxuICB9XHJcblxyXG4gIC5vdHBFbnRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 12809:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuotp/vasipuotp.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <!-- <div class=\"content login-bg\" [hidden]=\"isImageHidden\" *ngIf=\"local == 2\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" style=\"text-align:center;margin-top: 50%;\">\r\n        <div> <img src=\"/assets/images/loadingimage.png\"> </div>\r\n        <div style=\"margin-top: 5%;color: white;font-size: 30px;\"> Downloading... </div>\r\n        <div style=\"margin-top: 3%;color: white;font-size: 20px;\"> School Data </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div> -->\r\n\r\n  <div class=\"header-image\">\r\n\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n      <ion-title style=\"margin-top: 3%;font-size: 11px;margin-left: 3%;\">Connect with school</ion-title>\r\n    </ion-buttons>\r\n\r\n    <ion-row class=\"card-item\">\r\n      <ion-col size=\"12\" style=\"margin-top: 7%;padding-top: 15%;\">\r\n        <form [formGroup]=\"form\">\r\n          <ion-row>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field1 type=\"number\" maxlength=\"1\" formControlName=\"one\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field2,'1')\">\r\n              </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field2 type=\"number\" maxlength=\"1\" formControlName=\"two\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field3,'2')\"> </ion-input>\r\n            </ion-col>\r\n            `\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field3 type=\"number\" maxlength=\"1\" formControlName=\"three\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field4,'3')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field4 type=\"number\" maxlength=\"1\" formControlName=\"four\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field5,'4')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field5 type=\"number\" maxlength=\"1\" formControlName=\"five\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field6,'5')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"1.9\">\r\n              <ion-input #Field6 type=\"number\" maxlength=\"1\" formControlName=\"six\" class=\"otpEnter\"\r\n                (ionChange)=\"gotoNextField($event,Field7,'6')\"> </ion-input>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"text-align:center;color:#6C6C6C;font-weight: 900;margin-top: 5%;\">\r\n              Please enter the OTP\r\n              <ion-row style=\"text-align:center;padding-bottom:5px\">\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"(form.controls.one.hasError('required') && (form.controls.one.dirty || form.controls.one.touched)) && (form.controls.two.hasError('required') && (form.controls.two.dirty || form.controls.two.touched)) && (form.controls.three.hasError('required')&& (form.controls.three.dirty || form.controls.three.touched)) && (form.controls.four.hasError('required')&& (form.controls.four.dirty || form.controls.four.touched)) && (form.controls.five.hasError('required')&& (form.controls.five.dirty || form.controls.five.touched)) && (form.controls.six.hasError('required')&& (form.controls.six.dirty || form.controls.six.touched))\">\r\n                  Please Fill the all Fields</p>\r\n              </ion-row>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"text-align: center;margin-top: 5%;\" (click)=\"onPage()\">\r\n        <img src=\"/assets/images/Submitbutton.png\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuotp_vasipuotp_module_ts-es2015.js.map