(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_hod_school-info_school-info_module_ts"],{

/***/ 20841:
/*!*********************************************************************!*\
  !*** ./src/app/pages/hod/school-info/school-info-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolInfoPageRoutingModule": function() { return /* binding */ SchoolInfoPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _school_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-info.page */ 98799);




const routes = [
    {
        path: '',
        component: _school_info_page__WEBPACK_IMPORTED_MODULE_0__.SchoolInfoPage
    }
];
let SchoolInfoPageRoutingModule = class SchoolInfoPageRoutingModule {
};
SchoolInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchoolInfoPageRoutingModule);



/***/ }),

/***/ 81252:
/*!*************************************************************!*\
  !*** ./src/app/pages/hod/school-info/school-info.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolInfoPageModule": function() { return /* binding */ SchoolInfoPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _school_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-info-routing.module */ 20841);
/* harmony import */ var _school_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-info.page */ 98799);







let SchoolInfoPageModule = class SchoolInfoPageModule {
};
SchoolInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _school_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolInfoPageRoutingModule
        ],
        declarations: [_school_info_page__WEBPACK_IMPORTED_MODULE_1__.SchoolInfoPage]
    })
], SchoolInfoPageModule);



/***/ }),

/***/ 98799:
/*!***********************************************************!*\
  !*** ./src/app/pages/hod/school-info/school-info.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolInfoPage": function() { return /* binding */ SchoolInfoPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_school_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./school-info.page.html */ 26462);
/* harmony import */ var _school_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-info.page.scss */ 38655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);









let SchoolInfoPage = class SchoolInfoPage {
    constructor(fb, userService, route, router, alertService, userSessionService) {
        this.fb = fb;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.userSessionService = userSessionService;
        this.noData = true;
        this.submitted = false;
        this.routeData = this.route.snapshot;
        this.Id = this.routeData.queryParams.Id;
        this.data = this.routeData.queryParams.data;
        this.udise = this.routeData.queryParams.udise;
        // this.udise = '33280702308';
        // this.schoolId = this.routeData.queryParams.schoolId;
        // this.schoolName = this.routeData.queryParams.schoolName;
        // this.district = this.routeData.queryParams.district;
        // this.block = this.routeData.queryParams.block;
        this.username = this.userSessionService.emis_username();
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.getSchoolInfo();
        // if (this.data == 1) {
        // } else {
        //   this.schoolInfo = [];
        //   this.form.controls['udise'].setValue('');
        // }
    }
    initialValidator() {
        this.form = this.fb.group({
            'udise': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
        });
    }
    getSchoolInfo() {
        //debugger
        // if (this.form.valid) {
        // this.userService.getSchoolInfo(this.form.value.udise).subscribe((res) => {
        this.userService.getSchoolInfo(this.udise).subscribe((res) => {
            if (res.dataStatus) {
                this.noData = false;
                this.noDataFound = false;
                this.schoolInfo = res.result[0];
            }
            else {
                this.noData = true;
                this.noDataFound = true;
            }
        });
        // } else {
        //   this.submitted = true;
        //   this.alertService.error('Invalid UDISE Format');
        // }
    }
    goToBack() {
        this.router.navigate(['/tabs/dashboard']);
    }
    goToInspection() {
        //debugger
        // this.router.navigate(['/tabs/questions']);
        if (this.Id == 1) {
            this.userService.getHodStatus(this.schoolInfo.SclId, this.username, 1006).subscribe((res) => {
                if (res.dataStatus) {
                    if (res.result == 2) {
                        this.router.navigate(['/tabs/questions'], { queryParams: { 'Id': 1, 'CattyId': this.schoolInfo.CattyId, 'schoolId': this.schoolInfo.SclId, 'class4': this.schoolInfo.Class4Tot, 'class9': this.schoolInfo.Class9Tot }, skipLocationChange: false });
                    }
                    else {
                        this.alertService.error('Already Submitted for Today');
                    }
                }
            });
        }
        else {
            if (this.schoolInfo.CattyId == 1 || this.schoolInfo.CattyId == 2 || this.schoolInfo.CattyId == 3) {
                this.userService.getCivilStatus(this.schoolInfo.SclId, this.username, 1007).subscribe((res) => {
                    if (res.dataStatus) {
                        if (res.result == 2) {
                            this.router.navigate(['/tabs/primary-questions'], { queryParams: { 'Id': 2, 'schoolId': this.schoolInfo.SclId }, skipLocationChange: false });
                        }
                        else {
                            this.alertService.error('Already Submitted for Today');
                        }
                    }
                });
            }
            else {
                this.userService.getCivilStatus(this.schoolInfo.SclId, this.username, 1008).subscribe((res) => {
                    if (res.dataStatus) {
                        if (res.result == 2) {
                            this.router.navigate(['/tabs/secondary-questions'], { queryParams: { 'Id': 2, 'schoolId': this.schoolInfo.SclId }, skipLocationChange: false });
                        }
                        else {
                            this.alertService.error('Already Submitted for Today');
                        }
                    }
                });
            }
        }
    }
    onKeypressEvent(event) {
        //debugger
        this.udiseLen = this.form.value.udise;
        let len = this.udiseLen.length;
        if (len == 11) {
        }
        else {
            this.schoolInfo = [];
            this.noData = true;
        }
    }
};
SchoolInfoPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService }
];
SchoolInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-school-info',
        template: _raw_loader_school_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_school_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchoolInfoPage);



/***/ }),

/***/ 38655:
/*!*************************************************************!*\
  !*** ./src/app/pages/hod/school-info/school-info.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formLine {\n  --background: transparent;\n}\n\n.header {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.ion-margin-bottom {\n  margin-bottom: 0px;\n  border-radius: 15px;\n}\n\n.row-width {\n  width: 100%;\n}\n\n.ionlbl {\n  color: #0e0b0b;\n  font-size: 26px !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.input-txt {\n  border-bottom: 1px solid;\n  color: #8B67B3;\n}\n\n.formLine {\n  color: red;\n  font-size: 20px !important;\n  padding-top: 5px;\n}\n\n.icon-aln {\n  margin: auto;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.icon-color {\n  zoom: 1.8;\n  color: #8B67B3;\n}\n\n.title {\n  background: white;\n  margin-top: 10px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  border-radius: 15px;\n  border-left: 5px solid #8b67b3;\n}\n\n.title-clr {\n  color: #0e0b0b;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n}\n\n.value {\n  color: #8B67B3;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n\n.value-data {\n  color: #8B67B3;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\n.title-nodata {\n  background: white;\n  margin-top: 10px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  border-radius: 15px;\n  border-left: 5px solid #8b67b3;\n  border-right: 5px solid #8b67b3;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHlCQUFBO0FBREo7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQURBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsU0FBQTtFQUFTLGNBQUE7QUFRWDs7QUFOQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBU0Y7O0FBTkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFVRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBVUY7O0FBUkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBV0Y7O0FBUkE7RUFDRSwwQkFBQTtBQVdGIiwiZmlsZSI6InNjaG9vbC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtTGluZXtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmlvbi1tYXJnaW4tYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIC5yb3ctd2lkdGgge1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcbiAgLmlvbmxibCB7XHJcbiAgICBjb2xvcjpyZ2IoMTQsIDExLCAxMSk7XHJcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcclxuICB9XHJcbi52YWxpZC1jbHIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmlucHV0LXR4dCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIGNvbG9yOiM4QjY3QjNcclxufVxyXG4uZm9ybUxpbmUge1xyXG4gIGNvbG9yOnJlZDtcclxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5pY29uLWFsbiB7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmljb24tY29sb3Ige1xyXG4gIHpvb206MS44O2NvbG9yOiM4QjY3QjNcclxufVxyXG4udGl0bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxuICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzhiNjdiMztcclxufVxyXG4udGl0bGUtY2xyIHtcclxuICBjb2xvcjpyZ2IoMTQsIDExLCAxMSk7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHhcclxufVxyXG4udmFsdWUge1xyXG4gIGNvbG9yOiM4QjY3QjM7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIHBhZGRpbmctdG9wOjBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4XHJcbn1cclxuXHJcbi52YWx1ZS1kYXRhIHtcclxuICBjb2xvcjojOEI2N0IzO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aXRsZS1ub2RhdGEge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxuICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzhiNjdiMztcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 26462:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hod/school-info/school-info.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n    <ion-title class=\"pt-15\" style=\"font-size: 20px\">School Information</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"form\">\r\n\r\n    \r\n\r\n  <!-- <ion-row>\r\n    <ion-col size=\"12\" class=\"header\">\r\n      <ion-item lines=\"none\" class=\"ion-margin-bottom\">\r\n        <ion-row class=\"row-width\">\r\n          <ion-col size=\"12\" style=\"padding-left:0px\">\r\n            <ion-label position=\"floating\" class=\"ionlbl\"><span>\r\n            </span> UDISE<span class=\"valid-clr\"> *</span>\r\n          </ion-label>\r\n          <ion-input class=\"input-txt\" type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter UDISE\"\r\n                    formControlName=\"udise\" (keypress)=\"onKeypressEvent($event)\">\r\n                  </ion-input>\r\n                  <div class=\"formLine\">\r\n                    {{(form.controls.udise.errors && (form.controls.udise.dirty || form.controls.udise.touched))&& form.controls.udise.errors?.required ? 'UDISE is required' : ''}}\r\n                  </div>\r\n               \r\n          </ion-col>\r\n       \r\n          <ion-col size=\"12\" style=\"text-align: center;padding-bottom:10px;color:white\">\r\n            <ion-button size=\"default\" class=\"loginButton\" (click)=\"getSchoolInfo()\" style=\"color:white\"> Submit </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n               \r\n      </ion-item>\r\n   \r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n\r\n\r\n  <ion-row class=\"title-nodata\" *ngIf=\"noDataFound \">\r\n    <ion-col size=\"12\" class=\"value-data\">\r\n      <ion-label>No Data Found</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n\r\n\r\n<ion-row class=\"title\" *ngIf=\"!noData \">\r\n  <ion-col size=\"12\" class=\"title-clr\">\r\n    <ion-label>School Name</ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" class=\"value\">\r\n    <ion-label>{{schoolInfo.SclNam}}</ion-label>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"title\" *ngIf=\"!noData \">\r\n  <ion-col size=\"12\"  class=\"title-clr\">\r\n    <ion-label>District</ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" class=\"value\">\r\n    <ion-label>{{schoolInfo.DistNam}}</ion-label>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"title\" *ngIf=\"!noData \">\r\n  <ion-col size=\"12\" class=\"title-clr\">\r\n    <ion-label>Block</ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" class=\"value\">\r\n    <ion-label>{{schoolInfo.block_name}}</ion-label>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"title\" *ngIf=\"!noData \">\r\n  <ion-col size=\"12\" class=\"title-clr\">\r\n    <ion-label>Management</ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" class=\"value\">\r\n    <ion-label>{{schoolInfo.ManagNam}}</ion-label>\r\n  </ion-col>\r\n</ion-row>\r\n  </form>\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"footer-clr\" (click)=\"goToInspection()\" *ngIf=\"!noData\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>Start Inspection</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_hod_school-info_school-info_module_ts-es2015.js.map