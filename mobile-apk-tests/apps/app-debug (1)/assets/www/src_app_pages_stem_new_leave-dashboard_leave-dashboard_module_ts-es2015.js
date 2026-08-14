(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_leave-dashboard_leave-dashboard_module_ts"],{

/***/ 57636:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/stem_new/leave-dashboard/leave-dashboard-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveDashboardPageRoutingModule": function() { return /* binding */ LeaveDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _leave_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-dashboard.page */ 31400);




const routes = [
    {
        path: '',
        component: _leave_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.LeaveDashboardPage
    }
];
let LeaveDashboardPageRoutingModule = class LeaveDashboardPageRoutingModule {
};
LeaveDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LeaveDashboardPageRoutingModule);



/***/ }),

/***/ 40256:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stem_new/leave-dashboard/leave-dashboard.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveDashboardPageModule": function() { return /* binding */ LeaveDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _leave_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leave-dashboard-routing.module */ 57636);
/* harmony import */ var _leave_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-dashboard.page */ 31400);







let LeaveDashboardPageModule = class LeaveDashboardPageModule {
};
LeaveDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _leave_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveDashboardPageRoutingModule
        ],
        declarations: [_leave_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.LeaveDashboardPage]
    })
], LeaveDashboardPageModule);



/***/ }),

/***/ 31400:
/*!************************************************************************!*\
  !*** ./src/app/pages/stem_new/leave-dashboard/leave-dashboard.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveDashboardPage": function() { return /* binding */ LeaveDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_leave_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./leave-dashboard.page.html */ 11664);
/* harmony import */ var _leave_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leave-dashboard.page.scss */ 26520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let LeaveDashboardPage = class LeaveDashboardPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateBack() {
        this.router.navigate(['/tabs/stem-dashboard']);
    }
    applyAlert() {
        this.router.navigate(['/tabs/stem-leave']);
    }
    approvedAlert() {
        this.router.navigate(['/tabs/leave-history']);
    }
};
LeaveDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LeaveDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-leave-dashboard',
        template: _raw_loader_leave_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_leave_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LeaveDashboardPage);



/***/ }),

/***/ 26520:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stem_new/leave-dashboard/leave-dashboard.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\n  background: url(\"/assets/images/SplashScreen.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n\n.cardicon1 {\n  background: url(\"/assets/images/leaveApply.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon2 {\n  background: url(\"/assets/images/leave.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnRkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsOEVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0U7RUFDRSx5RUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDRTtFQUNFLG9CQUFBO0FBRUoiLCJmaWxlIjoibGVhdmUtZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvU3BsYXNoU2NyZWVuLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0gXHJcbiAgLmNhcmRpY29uMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2xlYXZlQXBwbHkucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmRpY29uMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2xlYXZlLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICBcclxuICAudG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 11664:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/leave-dashboard/leave-dashboard.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Stem Education</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" (click)=\"applyAlert()\">\r\n        <div class=\"cardicon1\">\r\n          <div> Apply Leave </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"approvedAlert()\">\r\n        <div class=\"cardicon2\">\r\n          <div> Approved Status & History </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_leave-dashboard_leave-dashboard_module_ts-es2015.js.map