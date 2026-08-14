(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil-evaluation_dashboard_dashboard_module_ts"],{

/***/ 59827:
/*!************************************************************************************!*\
  !*** ./src/app/pages/civil/civil-evaluation/dashboard/dashboard-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 54532);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 11254:
/*!****************************************************************************!*\
  !*** ./src/app/pages/civil/civil-evaluation/dashboard/dashboard.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 59827);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 54532);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 54532:
/*!**************************************************************************!*\
  !*** ./src/app/pages/civil/civil-evaluation/dashboard/dashboard.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 13706);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 19002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let DashboardPage = class DashboardPage {
    constructor(route, userService, alertService, router, userSessionService) {
        this.route = route;
        this.userService = userService;
        this.alertService = alertService;
        this.router = router;
        this.userSessionService = userSessionService;
        this.routeData = this.route.snapshot;
        this.Id = this.routeData.queryParams.Id;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.username = this.userSessionService.emis_username();
    }
    ngOnInit() {
    }
    goToPrimary() {
        //debugger
        this.userService.getCivilStatus(3509, this.username, 1007).subscribe((res) => {
            if (res.dataStatus) {
                if (res.result == 2) {
                    this.router.navigate(['/tabs/primary-questions'], { queryParams: { 'Id': 1, 'schoolId': this.schoolId }, skipLocationChange: false });
                }
                else {
                    this.alertService.error('Already Submitted for Today');
                }
            }
        });
        // this.router.navigate(['/tabs/primary-questions'], { queryParams: { 'Id': 1,'schoolId':this.schoolId}, skipLocationChange: false });
    }
    goToSecondary() {
        this.userService.getCivilStatus(3509, this.username, 1008).subscribe((res) => {
            if (res.dataStatus) {
                if (res.result == 2) {
                    this.router.navigate(['/tabs/primary-questions'], { queryParams: { 'Id': 1, 'schoolId': this.schoolId }, skipLocationChange: false });
                }
                else {
                    this.alertService.error('Already Submitted for Today');
                }
            }
        });
        // this.router.navigate(['/tabs/secondary-questions'], { queryParams: { 'Id': 2, 'schoolId': this.schoolId }, skipLocationChange: false });
    }
    goToBack() {
        this.router.navigate(['/tabs/school-info']);
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 19002:
/*!****************************************************************************!*\
  !*** ./src/app/pages/civil/civil-evaluation/dashboard/dashboard.page.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formLine {\n  --background: transparent;\n}\n\n.header {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.ion-margin-bottom {\n  margin-bottom: 0px;\n  border-radius: 15px;\n}\n\n.row-width {\n  width: 100%;\n}\n\n.ionlbl {\n  color: #0e0b0b;\n  font-size: 22px !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.input-txt {\n  border-bottom: 1px solid;\n  color: #8B67B3;\n}\n\n.formLine {\n  color: red;\n  font-size: 16px !important;\n  padding-top: 5px;\n}\n\n.icon-aln {\n  margin: auto;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.icon-color {\n  zoom: 1.8;\n  color: #8B67B3;\n}\n\n.title {\n  background: white;\n  margin-top: 10px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n  margin-right: 15px;\n  border-radius: 15px;\n  border-left: 5px solid #8b67b3;\n}\n\n.title-clr {\n  color: #0e0b0b;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n}\n\n.value {\n  color: #8B67B3;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSx5QkFBQTtBQURKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQXNCLDBCQUFBO0FBRzFCOztBQURBO0VBQ0UsVUFBQTtBQUlGOztBQUZBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsU0FBQTtFQUFTLGNBQUE7QUFTWDs7QUFQQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBVUY7O0FBUEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBVUY7O0FBUkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFXRiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1MaW5le1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgfVxyXG5cclxuICAuaW9uLW1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgLnJvdy13aWR0aCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gIH1cclxuICAuaW9ubGJsIHtcclxuICAgIGNvbG9yOnJnYigxNCwgMTEsIDExKTtmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxuICB9XHJcbi52YWxpZC1jbHIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmlucHV0LXR4dCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIGNvbG9yOiM4QjY3QjNcclxufVxyXG4uZm9ybUxpbmUge1xyXG4gIGNvbG9yOnJlZDtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbi5pY29uLWFsbiB7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuLmljb24tY29sb3Ige1xyXG4gIHpvb206MS44O2NvbG9yOiM4QjY3QjNcclxufVxyXG4udGl0bGUge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxuICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgIzhiNjdiMztcclxufVxyXG4udGl0bGUtY2xyIHtcclxuICBjb2xvcjpyZ2IoMTQsIDExLCAxMSk7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHhcclxufVxyXG4udmFsdWUge1xyXG4gIGNvbG9yOiM4QjY3QjM7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIHBhZGRpbmctdG9wOjBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4XHJcbn0iXX0= */");

/***/ }),

/***/ 13706:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil-evaluation/dashboard/dashboard.page.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <!-- <ion-title class=\"pt-15\">HOD Inspection</ion-title> -->\r\n    <ion-title class=\"pt-15\">Civil Evaluation</ion-title>\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-row class=\"title\" style=\"margin:15px\" (click)=\"goToPrimary()\">\r\n    <ion-col size=\"12\" class=\"title-clr\" style=\"padding:15px\">\r\n      <ion-label>Primary Civil Evaluation</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"title\"  style=\"margin:15px\" (click)=\"goToSecondary()\">\r\n    <ion-col size=\"12\" class=\"title-clr\"  style=\"padding:15px\">\r\n      <ion-label>Secondary Civil Evaluation</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_civil_civil-evaluation_dashboard_dashboard_module_ts-es2015.js.map