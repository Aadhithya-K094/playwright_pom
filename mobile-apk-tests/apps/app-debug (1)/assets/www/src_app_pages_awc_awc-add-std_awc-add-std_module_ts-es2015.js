(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_awc-add-std_awc-add-std_module_ts"],{

/***/ 64174:
/*!*********************************************************************!*\
  !*** ./src/app/pages/awc/awc-add-std/awc-add-std-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcAddStdPageRoutingModule": function() { return /* binding */ AwcAddStdPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awc_add_std_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-add-std.page */ 55437);




const routes = [
    {
        path: '',
        component: _awc_add_std_page__WEBPACK_IMPORTED_MODULE_0__.AwcAddStdPage
    }
];
let AwcAddStdPageRoutingModule = class AwcAddStdPageRoutingModule {
};
AwcAddStdPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AwcAddStdPageRoutingModule);



/***/ }),

/***/ 99040:
/*!*************************************************************!*\
  !*** ./src/app/pages/awc/awc-add-std/awc-add-std.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcAddStdPageModule": function() { return /* binding */ AwcAddStdPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awc_add_std_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-add-std-routing.module */ 64174);
/* harmony import */ var _awc_add_std_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-add-std.page */ 55437);







let AwcAddStdPageModule = class AwcAddStdPageModule {
};
AwcAddStdPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _awc_add_std_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwcAddStdPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_awc_add_std_page__WEBPACK_IMPORTED_MODULE_1__.AwcAddStdPage]
    })
], AwcAddStdPageModule);



/***/ }),

/***/ 55437:
/*!***********************************************************!*\
  !*** ./src/app/pages/awc/awc-add-std/awc-add-std.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcAddStdPage": function() { return /* binding */ AwcAddStdPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_awc_add_std_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./awc-add-std.page.html */ 51481);
/* harmony import */ var _awc_add_std_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-add-std.page.scss */ 87824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);










let AwcAddStdPage = class AwcAddStdPage {
    constructor(router, route, userService, alertService, userSessionService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.alertService = alertService;
        this.userSessionService = userSessionService;
        this.paramData = '';
        this.submitted = false;
    }
    ngOnInit() {
        this.addStdFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            Childname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z _ ]+$')]),
            ChildDob: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            BirthWeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^([1-5]|[1-4].[0-9]||[1-4].[0-9][1-9]|[0].[5-9]|[0].[5-9][0-9])$')]),
            Parentname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z _ ]+$')]),
            Parentmobileno: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[6-9][0-9]{9,9}$')]),
            AdhaarNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]{12,12}$')),
            ChildRchid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]{12,12}$')),
            picmeID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]{12,12}$'))
        });
    }
    onGoButton() {
        this.router.navigate(['/tabs/awc-student-list'], { queryParams: { data: JSON.stringify(this.paramData), id: this.phase_id, viewstatus: this.viewstatus, phaseName: this.phaseName, AcYears: this.AcYears } });
    }
    ionViewDidEnter() {
        this.submitted = false;
        this.addStdFrom.reset();
        this.paramData = JSON.parse(this.route.snapshot.queryParams.data);
        this.routeData = this.route.snapshot;
        this.phase_id = this.routeData.queryParams.id;
        this.viewstatus = this.routeData.queryParams.viewstatus;
        this.phaseName = this.routeData.queryParams.phaseName;
        this.AcYears = this.routeData.queryParams.AcYears;
    }
    onSubmit() {
        this.submitted = true;
        // let data: any ={};
        let newDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD HH:mm:ss');
        if (this.addStdFrom.valid) {
            let obj = {
                records: {
                    DistrictId: this.userSessionService.district_id(),
                    DistrictName: this.paramData.DistrictName,
                    BlockId: this.userSessionService.mht_block_id(),
                    HealthBlockName: '',
                    AwcCode: this.paramData.AwcCode,
                    AwcName: this.paramData.AwcName,
                    StatusType: 99,
                    Addedts: newDate
                }
            };
            Object.entries(this.addStdFrom.value).forEach(([key, value]) => {
                obj.records[key] = value;
            });
            obj.records.ChildDob = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.addStdFrom.value.ChildDob).format('YYYY-MM-DD');
            obj.records.IndexId = '';
            this.userService.AwcAnganvadiStuCUD(obj).subscribe((res) => {
                if (res.dataStatus) {
                    this.submitted = false;
                    // this.studentList = res.result;
                    this.router.navigate(['/tabs/awc-student-list'], { queryParams: { data: JSON.stringify(this.paramData), id: this.phase_id, viewstatus: this.viewstatus, phaseName: this.phaseName, AcYears: this.AcYears } });
                }
                else {
                    this.alertService.warning(res.message);
                }
            });
        }
        else {
            this.alertService.warning('Form is invalid');
        }
    }
};
AwcAddStdPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService }
];
AwcAddStdPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-awc-add-std',
        template: _raw_loader_awc_add_std_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_awc_add_std_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AwcAddStdPage);



/***/ }),

/***/ 87824:
/*!*************************************************************!*\
  !*** ./src/app/pages/awc/awc-add-std/awc-add-std.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blockLabel {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.dropDown {\n  font-size: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n\nion-item {\n  --background:transparent !important;\n  color: grey;\n}\n\nion-label {\n  --inner-border-width: 0 0 0 0;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 5px;\n}\n\n.reqfiled {\n  color: red;\n  font-size: 14px;\n}\n\n.yesNoLabel {\n  width: 100%;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.radiobt {\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.footer-aln {\n  color: white;\n  background: #68529c;\n  font-size: 18px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 22px;\n}\n\n.footer-txt {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3Yy1hZGQtc3RkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBRUksZUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFBSjs7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiYXdjLWFkZC1zdGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2NrTGFiZWx7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxufVxyXG4uZHJvcERvd257XHJcbiAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2U2ZjNmZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAvLyAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMCAwO1xyXG59XHJcblxyXG4ucmFkaW97XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweFxyXG59XHJcbi5yZXFmaWxlZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnllc05vTGFiZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4ucmFkaW9idHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5mb290ZXItYWxuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLy8gLyBwYWRkaW5nOiAxMHB4OyAvXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgfVxyXG4gIC5mb290ZXItdHh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ 51481:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/awc-add-std/awc-add-std.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Add Child</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"addStdFrom\">\r\n    <div style=\"margin: 15px;\">\r\n      <ion-card style=\"padding: 15px;\">\r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Child Name<span style=\"color: red;\"> *</span>\r\n          </ion-label>\r\n        </div>\r\n        <div>\r\n          <ion-input class=\"dropDown\" formControlName=\"Childname\"></ion-input>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('Childname').hasError('required') && submitted\">Field is required</p>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('Childname').hasError('pattern')\">Characters Only Allowed</p>\r\n        </div>\r\n  \r\n  \r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Child DOB<span style=\"color: red;\"> *</span>\r\n          </ion-label>\r\n        </div>\r\n        <div class=\"yesNoLabel\">\r\n          <ion-row>\r\n            <ion-col size=\"10\">\r\n              <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"Select Date\" min=\"2016-01-01\" formControlName=\"ChildDob\">\r\n              </ion-datetime>\r\n            </ion-col>\r\n            <ion-col size=\"2\" style=\"align-self: center;zoom: 1.2; color: rgb(104, 82, 156);\">\r\n              <div>\r\n                <ion-icon name=\"calendar\"></ion-icon>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('ChildDob').hasError('required') && submitted\">Field is required</p>\r\n\r\n  \r\n        <ion-row style=\"background-color: white;margin:5px;\">\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Gender<span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n  \r\n          <ion-row class=\"radiobt\">\r\n            <ion-col>\r\n              <ion-radio-group formControlName=\"Gender\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\" class=\"red_radio\"></ion-radio><span class=\"radio\">Male</span>\r\n                  <ion-radio value=\"2\" class=\"green_radio\"></ion-radio><span class=\"radio\">Female</span>\r\n                  <!-- <ion-radio value=\"3\" class=\"green_radio\"></ion-radio><span class=\"radio\">Trans Gender</span> -->\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-row>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('Gender').hasError('required') && submitted\">Field is required</p>\r\n  \r\n  \r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Birth Weight<span style=\"color: red;\"> *</span>\r\n          </ion-label>\r\n        </div>\r\n        <div>\r\n          <ion-input class=\"dropDown\" formControlName=\"BirthWeight\" type=\"tel\"></ion-input>\r\n        </div>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('BirthWeight').hasError('required') && submitted\">Field is required</p>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('BirthWeight').hasError('pattern')\">1 - 5 only allowed</p>\r\n  \r\n  \r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Parent Name<span style=\"color: red;\"> *</span>\r\n          </ion-label>\r\n        </div>\r\n        <div>\r\n          <ion-input class=\"dropDown\" formControlName=\"Parentname\" ></ion-input>\r\n        </div>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('Parentname').hasError('required') && submitted\">Field is required</p>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('Parentname').hasError('pattern')\">Characters Only Allowed</p>\r\n  \r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Parent Mobile No<span style=\"color: red;\"> *</span>\r\n          </ion-label>\r\n        </div>\r\n        <div>\r\n          <ion-input class=\"dropDown\" type=\"tel\" formControlName=\"Parentmobileno\"></ion-input>\r\n        </div>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('Parentmobileno').hasError('required') && submitted\">Field is required</p>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('Parentmobileno').hasError('pattern')\">Enter Valid Mobile Number</p>\r\n  \r\n  \r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Aadhaar No\r\n          </ion-label>\r\n        </div>\r\n        <div>\r\n          <ion-input class=\"dropDown\" formControlName=\"AdhaarNo\" type=\"tel\"></ion-input>\r\n        </div>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('AdhaarNo').hasError('required') && submitted\">Field is required</p>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('AdhaarNo').hasError('pattern')\">\r\n          Enter 12 Digit Id\r\n        </p>\r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Child Rch Id\r\n          </ion-label>\r\n        </div>\r\n        <div>\r\n          <ion-input class=\"dropDown\" formControlName=\"ChildRchid\" type=\"tel\"></ion-input>\r\n        </div>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('ChildRchid').hasError('pattern')\">\r\n          Enter 12 Digit Id\r\n        </p>\r\n        \r\n\r\n        <!-- =============== -->\r\n        <div style=\"padding-top: 20px;\">\r\n          <ion-label class=\"blockLabel\">\r\n            Mother's PICME id\r\n          </ion-label>\r\n        </div>\r\n        <div>\r\n          <ion-input class=\"dropDown\" formControlName=\"picmeID\" type=\"tel\"></ion-input>\r\n        </div>\r\n        <p class=\"reqfiled\" *ngIf=\"addStdFrom.get('picmeID').hasError('pattern')\">\r\n          Enter 12 Digit Id\r\n        </p>\r\n        <!-- ================= -->\r\n  \r\n        <div class=\"footer-txt\" style=\"padding-bottom: 20px;padding-top: 20px;\">\r\n          <ion-label class=\"footer-aln\" style=\"font-size:15px\" (click)=\"onSubmit()\">\r\n            Submit\r\n          </ion-label>\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_awc_awc-add-std_awc-add-std_module_ts-es2015.js.map