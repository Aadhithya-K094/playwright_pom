(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_approval-dashboard_approval-dashboard_module_ts"],{

/***/ 3106:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/stem_new/approval-dashboard/approval-dashboard-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalDashboardPageRoutingModule": function() { return /* binding */ ApprovalDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _approval_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-dashboard.page */ 3307);




const routes = [
    {
        path: '',
        component: _approval_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.ApprovalDashboardPage
    }
];
let ApprovalDashboardPageRoutingModule = class ApprovalDashboardPageRoutingModule {
};
ApprovalDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ApprovalDashboardPageRoutingModule);



/***/ }),

/***/ 26734:
/*!********************************************************************************!*\
  !*** ./src/app/pages/stem_new/approval-dashboard/approval-dashboard.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalDashboardPageModule": function() { return /* binding */ ApprovalDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _approval_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-dashboard-routing.module */ 3106);
/* harmony import */ var _approval_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-dashboard.page */ 3307);







let ApprovalDashboardPageModule = class ApprovalDashboardPageModule {
};
ApprovalDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _approval_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApprovalDashboardPageRoutingModule
        ],
        declarations: [_approval_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.ApprovalDashboardPage]
    })
], ApprovalDashboardPageModule);



/***/ }),

/***/ 3307:
/*!******************************************************************************!*\
  !*** ./src/app/pages/stem_new/approval-dashboard/approval-dashboard.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalDashboardPage": function() { return /* binding */ ApprovalDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_approval_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./approval-dashboard.page.html */ 81914);
/* harmony import */ var _approval_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-dashboard.page.scss */ 49083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ApprovalDashboardPage = class ApprovalDashboardPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateBack() {
        this.router.navigate(['/tabs/stem-dashboard']);
    }
    approvedAlert() {
        this.router.navigate(['/tabs/leave-approval']);
    }
};
ApprovalDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ApprovalDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-approval-dashboard',
        template: _raw_loader_approval_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_approval_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApprovalDashboardPage);



/***/ }),

/***/ 49083:
/*!********************************************************************************!*\
  !*** ./src/app/pages/stem_new/approval-dashboard/approval-dashboard.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\n  background: url(\"/assets/images/SplashScreen.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n\n.cardicon2 {\n  background: url(\"/assets/images/approval.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHJvdmFsLWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnRkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxvQkFBQTtBQUtKIiwiZmlsZSI6ImFwcHJvdmFsLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1NwbGFzaFNjcmVlbi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9IFxyXG4gIC5jYXJkaWNvbjIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9hcHByb3ZhbC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuICAudG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICB9XHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 81914:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/approval-dashboard/approval-dashboard.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Stem Education</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" (click)=\"approvedAlert()\">\r\n        <div class=\"cardicon2\">\r\n          <div> Leave Approval Request </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_approval-dashboard_approval-dashboard_module_ts-es2015.js.map