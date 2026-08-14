(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-dashboard_my-ins-9ddb64"],{

/***/ 94529:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-dashboard/my-inspection-dashboard-routing.module.ts ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspectionDashboardPageRoutingModule": function() { return /* binding */ MyInspectionDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_inspection_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-inspection-dashboard.page */ 87788);




const routes = [
    {
        path: '',
        component: _my_inspection_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.MyInspectionDashboardPage
    }
];
let MyInspectionDashboardPageRoutingModule = class MyInspectionDashboardPageRoutingModule {
};
MyInspectionDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyInspectionDashboardPageRoutingModule);



/***/ }),

/***/ 62428:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-dashboard/my-inspection-dashboard.module.ts ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspectionDashboardPageModule": function() { return /* binding */ MyInspectionDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_inspection_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-inspection-dashboard-routing.module */ 94529);
/* harmony import */ var _my_inspection_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-inspection-dashboard.page */ 87788);







let MyInspectionDashboardPageModule = class MyInspectionDashboardPageModule {
};
MyInspectionDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_inspection_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyInspectionDashboardPageRoutingModule
        ],
        declarations: [_my_inspection_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.MyInspectionDashboardPage]
    })
], MyInspectionDashboardPageModule);



/***/ }),

/***/ 87788:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-dashboard/my-inspection-dashboard.page.ts ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspectionDashboardPage": function() { return /* binding */ MyInspectionDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_my_inspection_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-inspection-dashboard.page.html */ 83318);
/* harmony import */ var _my_inspection_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-inspection-dashboard.page.scss */ 23770);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);










let MyInspectionDashboardPage = class MyInspectionDashboardPage {
    constructor(router, fb, utilityService, userSessionService, alertService) {
        this.router = router;
        this.fb = fb;
        this.utilityService = utilityService;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        this.userid = this.userSessionService.emis_username();
        this.form.controls.date.setValue(this.todayDateFormat);
        if (this.form.value.date) {
            this.onSave();
        }
    }
    initialValidator() {
        this.form = this.fb.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.userid),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
    }
    goToBack() {
        this.router.navigate(['/tabs/inspectionEnnumezhuthum']);
    }
    goToMenuData(id) {
        this.router.navigate(['/tabs/inspectionquestion'], { queryParams: { "id": id } });
    }
    onSave() {
        this.utilityService.getTrainer(this.userid, this.form.value.date).subscribe((response) => {
            if (response.dataStatus) {
                this.noData = false;
                this.trainerData = [];
                this.trainerData = response.result;
                if (this.trainerData) {
                    this.dataServe = true;
                }
            }
            else {
                this.noData = true;
            }
        });
    }
    view(id, date, time) {
        debugger;
        this.router.navigate(['/tabs/writing-inspection'], { queryParams: { "page": 1, "id": id, "userid": this.userid,
                "date": date, 'time': time } });
    }
    onClickFuntion(event) {
        debugger;
        console.log(event);
    }
};
MyInspectionDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
MyInspectionDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-my-inspection-dashboard',
        template: _raw_loader_my_inspection_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_inspection_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyInspectionDashboardPage);



/***/ }),

/***/ 23770:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-dashboard/my-inspection-dashboard.page.scss ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trainIdstyle {\n  background: white;\n  margin: 4%;\n  padding: 10px;\n  color: crimson;\n  border-radius: 10px;\n}\n\n.valueData {\n  color: black;\n}\n\n.labelData {\n  color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWluc3BlY3Rpb24tZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJteS1pbnNwZWN0aW9uLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhaW5JZHN0eWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG59XHJcblxyXG4udmFsdWVEYXRhe1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn1cclxuXHJcbi5sYWJlbERhdGEge1xyXG4gICAgY29sb3I6IGJyb3duO1xyXG59Il19 */");

/***/ }),

/***/ 83318:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection-dashboard/my-inspection-dashboard.page.html ***!
  \************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> My Inspection </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 4%;\">\r\n\r\n    <ion-row class=\"bt-10 trainIdstyle\">\r\n      <ion-col size=\"12\" style=\"border: 2px solid #8b67b3;display: flex;width: 100%;\" class=\"list\">\r\n        <ion-input style=\"color: #8b67b3\" type=\"date\" formControlName=\"date\" placeholder=\"Please Select Date\">\r\n        </ion-input>\r\n        <!-- <ion-icon style=\"padding-top:5px\" name=\"calendar\" class=\"fs-30\" color=\"primary\"></ion-icon>     -->\r\n      </ion-col>\r\n      <ion-row>\r\n        <p class=\"error-message\"\r\n          *ngIf=\"form.controls['date'].hasError('required') && (form.controls['date'].dirty || form.controls['date'].touched)\">\r\n          Field is required</p>\r\n      </ion-row>\r\n      <ion-col size=\"12\" style=\"text-align: center;margin-top: 5%;\" *ngIf=\"this.form.value.date\">\r\n        <ion-button style=\"color: white;\" (click)=\"onSave()\"> Submit </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <div *ngIf=\"noData\">\r\n      <ion-row class=\"trainIdstyle\">\r\n        <ion-col size=\"6\" class=\"labelData\">\r\n          <ion-label>No Data Found</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div *ngIf=\"!noData\">\r\n      <ion-row class=\"trainIdstyle\" *ngFor=\"let data of trainerData\">\r\n        <ion-col size=\"6\" class=\"labelData\">\r\n          <ion-label>School Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"valueData\">\r\n          <ion-label>{{data.school_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"labelData\">\r\n          <ion-label>Trainner Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"valueData\">\r\n          <ion-label>{{data.teacher_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"labelData\">\r\n          <ion-label>Trainner Unique Code</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"valueData\">\r\n          <ion-label>{{data.TrCode}}</ion-label>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\" class=\"labelData\">\r\n        <ion-label>Trainner Type :</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"valueData\">\r\n        <ion-label>{{data.teacher_name}}</ion-label>\r\n      </ion-col> -->\r\n        <ion-col size=\"6\" class=\"labelData\">\r\n          <ion-label>Time</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"valueData\">\r\n          <ion-label>{{data.CrtTime | date:\"hh:mm a\"}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"margin-top: 5%;color: white;text-align: center;\">\r\n          <ion-button (click)=\"view(data.TrId,this.form.value.date,data.Time)\" style=\"color: white;\">View</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-dashboard_my-ins-9ddb64-es2015.js.map