(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_profile_profile_module_ts"],{

/***/ 76344:
/*!**************************************************************!*\
  !*** ./src/app/pages/cwsn/profile/profile-routing.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": function() { return /* binding */ ProfileRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 90077);




const routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent,
    }
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ProfileRoutingModule);



/***/ }),

/***/ 90077:
/*!*********************************************************!*\
  !*** ./src/app/pages/cwsn/profile/profile.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.component.html */ 57392);
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss */ 93727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);











let ProfileComponent = class ProfileComponent {
    constructor(router, route, fb, cwsnService, userSessionService, alertService, ionicstorage) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.cwsnService = cwsnService;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.ionicstorage = ionicstorage;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US');
    }
    ngOnInit() {
        this.initialValidator();
        this.getSplEducatorProfile();
        // this.patchFormValues();
        this.form.disable();
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.title = this.routeData.queryParams.title;
        this.mode = this.routeData.queryParams.mode;
        console.log('title', this.title, 'mode', this.mode);
    }
    title(arg0, title, arg2, mode) {
        throw new Error("Method not implemented.");
    }
    getSplEducatorProfile() {
        debugger;
        this.ionicstorage.getData('CwsnProfileInfo').then((data) => {
            if (data) {
                this.patchFormValues(data.CwsnProfileInfo);
            }
            else {
                this.cwsnService.getSplEducatorProfile(this.userSessionService.emis_username()).subscribe(data => {
                    if (data.result.length === 0) {
                        this.alertService.warning('Form throw was error please retry');
                        return;
                    }
                    else {
                        this.ionicstorage
                            .insertData_Replace('CwsnProfileInfo', { CwsnProfileInfo: data.result });
                        this.patchFormValues(data.result);
                        console.log(data.result);
                    }
                });
            }
        });
    }
    patchFormValues(data) {
        if (data.length == 0) {
            this.alertService.warning('Form throw was error please retry');
            return;
        }
        else {
            data.forEach(element => {
                if (element.gender == '2') {
                    this.gender = 'Female';
                }
                else {
                    this.gender = 'Male';
                }
                let dob = element.staff_dob;
                this.setDob = this.pipe.transform(dob, 'dd-MM-yyyy');
                let doj = element.staff_join;
                this.setDoj = this.pipe.transform(doj, 'dd-MM-yyyy');
                this.form.patchValue({
                    name: element.teacher_name,
                    dob: this.setDob,
                    gender: element.Gender,
                    bloodgroup: element.bloodGroup,
                    aadhaarnum: element.aadhar_no,
                    mobilenum: element.mbl_nmbr,
                    qualification: element.professional,
                    doj: this.setDoj,
                    schoolName: element.school_name,
                    district: element.district_name,
                    block: element.block_name,
                    exprience: element.experience,
                    // rcinum: null,
                    emailid: element.email_id,
                    homeAddress: element.address,
                });
            });
        }
    }
    initialValidator() {
        this.form = this.fb.group({
            name: [null],
            dob: [null],
            gender: [null],
            bloodgroup: [null],
            aadhaarnum: [null],
            mobilenum: [null],
            qualification: [null],
            doj: [null],
            schoolName: [null],
            district: [null],
            block: [null],
            exprience: [null],
            // rcinum: [null],
            emailid: [null],
            homeAddress: [null],
        });
    }
    goBack() {
        this.router.navigate(["/tabs/cwsn/dashboard"]);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-profile",
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileComponent);



/***/ }),

/***/ 64798:
/*!******************************************************!*\
  !*** ./src/app/pages/cwsn/profile/profile.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": function() { return /* binding */ ProfileModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 76344);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component */ 90077);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







let ProfileModule = class ProfileModule {
};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfileRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ]
    })
], ProfileModule);



/***/ }),

/***/ 93727:
/*!***********************************************************!*\
  !*** ./src/app/pages/cwsn/profile/profile.component.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nion-textarea {\n  padding-left: 0px !important;\n}\n\n.card-align {\n  border-radius: 10px;\n}\n\n.card-align .form .form-group .form-group__textarea-value, .card-align .form .form-group .form-group__value {\n  margin: 4px 0;\n  /* padding: 9px; */\n  border: 1px solid var(--input-border);\n  border-radius: 10px;\n}\n\n::ng-deep .native-input[disabled].sc-ion-input-md {\n  opacity: 1 !important;\n}\n\n::ng-deep .native-textarea[disabled].sc-ion-textarea-md {\n  opacity: 1 !important;\n}\n\n.card-align .form {\n  padding: 15px;\n}\n\n.card-align .form .form-group {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--text-color-black);\n  letter-spacing: 0.3px;\n}\n\n.card-align .form .form-group .form-group__value {\n  color: var(--primary-text-color);\n  -webkit-padding-start: 10px !important;\n  font-weight: 500;\n  --background: var(--disabled-input-background);\n  opacity: 1;\n}\n\n.card-align .form .form-group .form-group__textarea-value {\n  opacity: 1;\n  font-weight: 500;\n  color: var(--primary-text-color);\n  --background: var(--disabled-input-background);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0NBQUE7QUFERjs7QUFJQTtFQUNFLHdDQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQVNFO0VBRUUsYUFBQTtBQVBKOztBQVNJO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0FBUk47O0FBVU07RUFDRSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFSUjs7QUFXTTtFQUVFLGdDQTNESztFQTRETCxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxVQUFBO0FBVlI7O0FBYU07RUFHRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0F2RUs7RUF3RUwsOENBQUE7QUFiUiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRleHQtY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiVjYXJkLWxheW91dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvLyBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbiVsYWJlbC1kZXNpZ24ge1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgLyogcGFkZGluZzogOXB4OyAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uYXRpdmUtaW5wdXRbZGlzYWJsZWRdLnNjLWlvbi1pbnB1dC1tZCB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWRpc2FibGVkLWlucHV0LWJhY2tncm91bmQpICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG46Om5nLWRlZXAgLm5hdGl2ZS10ZXh0YXJlYVtkaXNhYmxlZF0uc2MtaW9uLXRleHRhcmVhLW1kIHtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgLy8gcGFkZGluZzogMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAvLyBwYWRkaW5nOiAgMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmZvcm0tZ3JvdXBfX3RpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWJsYWNrKTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tZ3JvdXBfX3ZhbHVlIHtcclxuICAgICAgICBAZXh0ZW5kICVsYWJlbC1kZXNpZ247XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZC1pbnB1dC1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1ncm91cF9fdGV4dGFyZWEtdmFsdWUge1xyXG4gICAgICAgIEBleHRlbmQgJWxhYmVsLWRlc2lnbjtcclxuICAgICAgICAvLyAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tZGlzYWJsZWQtaW5wdXQtYmFja2dyb3VuZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 57392:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/profile/profile.component.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <form class=\"form\" [formGroup]=\"form\">\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Name</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"name\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">DOB</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"dob\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Gender</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"gender\"></ion-input>\r\n      </div>\r\n       <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Blood Group</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"bloodgroup\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Aadhaar Number</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"aadhaarnum\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Mobile Number</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"mobilenum\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Qualification</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"qualification\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Date of Joining</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"doj\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">School Name</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"schoolName\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">District</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"district\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Block</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"block\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Year of Experience</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"exprience\"></ion-input>\r\n      </div>\r\n      <!-- <div class=\"form-group\" *ngIf=\"rcinum !== null\">\r\n        <ion-label class=\"form-group__title\">RCI Number</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"rcinum\"></ion-input>\r\n      </div> -->\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Email Id</ion-label>\r\n        <ion-input class=\"form-group__value\" formControlName=\"emailid\"></ion-input>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-label class=\"form-group__title\">Home Address</ion-label>\r\n        <ion-textarea class=\"form-group__textarea-value\" style=\"padding-left:0px;\" formControlName=\"homeAddress\"></ion-textarea>\r\n      </div> \r\n    </form>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_profile_profile_module_ts-es2015.js.map