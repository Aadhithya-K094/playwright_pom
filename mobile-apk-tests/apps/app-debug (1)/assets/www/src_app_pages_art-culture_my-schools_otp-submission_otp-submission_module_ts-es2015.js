(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_my-schools_otp-submission_otp-submission_module_ts"],{

/***/ 22122:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/otp-submission/otp-submission-routing.module.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpSubmissionPageRoutingModule": function() { return /* binding */ OtpSubmissionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _otp_submission_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-submission.page */ 41825);




const routes = [
    {
        path: '',
        component: _otp_submission_page__WEBPACK_IMPORTED_MODULE_0__.OtpSubmissionPage
    }
];
let OtpSubmissionPageRoutingModule = class OtpSubmissionPageRoutingModule {
};
OtpSubmissionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpSubmissionPageRoutingModule);



/***/ }),

/***/ 93674:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/otp-submission/otp-submission.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpSubmissionPageModule": function() { return /* binding */ OtpSubmissionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _otp_submission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-submission-routing.module */ 22122);
/* harmony import */ var _otp_submission_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-submission.page */ 41825);







let OtpSubmissionPageModule = class OtpSubmissionPageModule {
};
OtpSubmissionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_submission_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpSubmissionPageRoutingModule
        ],
        declarations: [_otp_submission_page__WEBPACK_IMPORTED_MODULE_1__.OtpSubmissionPage]
    })
], OtpSubmissionPageModule);



/***/ }),

/***/ 41825:
/*!************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/otp-submission/otp-submission.page.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpSubmissionPage": function() { return /* binding */ OtpSubmissionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_otp_submission_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./otp-submission.page.html */ 19778);
/* harmony import */ var _otp_submission_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-submission.page.scss */ 91123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let OtpSubmissionPage = class OtpSubmissionPage {
    constructor(router, userSessionService, route, emisService, alertService) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.route = route;
        this.emisService = emisService;
        this.alertService = alertService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.otp = "";
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emisName = this.userSessionService.emis_username();
        this.route.queryParams.subscribe((params) => {
            this.data = JSON.parse(params['data']);
        });
    }
    backBtn() {
        this.router.navigate(["/tabs/pums-session-details"]);
    }
    otpdata(event) {
        console.log(event.detail.value, "oooo");
        this.otp = event.detail.value;
    }
    otpSave() {
        if (this.data.StartStatus == 1) {
            let data = {
                "IndexId": this.data.IndexId,
                "EndOtp": this.otp
            };
            this.emisService.ArpVerifyOtp({ "records": data }).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success(res.message);
                    this.router.navigate(["/tabs/my-schools"]);
                }
                else {
                    this.alertService.error(res.message);
                }
            });
        }
        else {
            let data = {
                "IndexId": "",
                "SchlId": this.data.school_id,
                "ArpId": this.emisName,
                "BatchId": this.data.batch_id,
                "GroupId": this.data.id,
                "Session": this.data.session,
                "StartOtp": this.otp
            };
            this.emisService.ArpVerifyOtp({ "records": data }).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success(res.message);
                    this.router.navigate(["/tabs/my-schools"]);
                }
                else {
                    this.alertService.error(res.message);
                }
            });
        }
    }
};
OtpSubmissionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
OtpSubmissionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-otp-submission',
        template: _raw_loader_otp_submission_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_otp_submission_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OtpSubmissionPage);



/***/ }),

/***/ 91123:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/otp-submission/otp-submission.page.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #917AFE;\n}\n\n.x {\n  display: inline-block;\n  width: 200px;\n  height: 50px;\n  font-size: 25px;\n  color: #917AFE;\n  border: 1px solid black;\n  text-align: center;\n  border-radius: 10px;\n  --padding-start: 7px;\n}\n\n.btnLabel {\n  background-color: #917AFE;\n  padding: 12px;\n  color: white;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.btnIcon {\n  padding-left: 10px;\n  color: white;\n}\n\n.whiteDiv {\n  background-color: white;\n  height: 50%;\n  border-top-left-radius: 3em;\n  border-top-right-radius: 3em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.rowDiv {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.otpDiv {\n  font-weight: 600;\n  font-size: 20px;\n  color: white;\n}\n\n.optMainDiv {\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC1zdWJtaXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFFQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBSiIsImZpbGUiOiJvdHAtc3VibWlzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM5MTdBRkU7XHJcbn1cclxuXHJcbi54IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjOTE3QUZFO1xyXG4gICAgLy8gbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XHJcbn1cclxuXHJcbi5idG5MYWJlbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE3QUZFO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuSWNvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuLndoaXRlRGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM2VtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnJvd0RpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ub3RwRGl2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vcHRNYWluRGl2IHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 19778:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/my-schools/otp-submission/otp-submission.page.html ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>otp_submission</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header>\r\n\r\n  <ion-toolbar class=\"toolbar\">\r\n\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n\r\n      </ion-icon>\r\n\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">Session Details</ion-title>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content style=\"--background:#917AFE\">\r\n  <div class=\"optMainDiv\">\r\n    <div style=\"text-align:center;\">\r\n      <!-- <img src=\"../../../../../assets/images/art-culture/otpimg.png\"><br><br> -->\r\n      <ion-label class=\"otpDiv\">Please enter the OTP</ion-label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"whiteDiv\">\r\n    <div>\r\n    <ion-row class=\"rowDiv\">\r\n\r\n      <ion-col>\r\n        <ion-input class=\"x\" #otp1 [(ngModel)]=\"otp\" required=\"true\" (ionChange)=\"otpdata($event)\" maxLength=\"10\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <!-- <ion-col>\r\n        <ion-input class=\"x\" #otp2 required=\"true\" maxLength=\"1\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-input class=\"x\" #otp3 required=\"true\" maxLength=\"1\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-input class=\"x\" #otp4 required=\"true\" maxLength=\"1\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-input class=\"x\" #otp5 required=\"true\" maxLength=\"1\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-input class=\"x\" #otp6 required=\"true\" maxLength=\"1\">\r\n        </ion-input>\r\n      </ion-col> -->\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div style=\"text-align: center;\" (click)=\"otpSave()\">\r\n          <ion-label class=\"btnLabel\">Submit</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n   \r\n  </div>\r\n </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_my-schools_otp-submission_otp-submission_module_ts-es2015.js.map