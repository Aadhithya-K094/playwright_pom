(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_screening-status_screening-status_module_ts"],{

/***/ 96754:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreeningStatusPageRoutingModule": function() { return /* binding */ ScreeningStatusPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _screening_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screening-status.page */ 8888);




const routes = [
    {
        path: '',
        component: _screening_status_page__WEBPACK_IMPORTED_MODULE_0__.ScreeningStatusPage
    }
];
let ScreeningStatusPageRoutingModule = class ScreeningStatusPageRoutingModule {
};
ScreeningStatusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScreeningStatusPageRoutingModule);



/***/ }),

/***/ 65811:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreeningStatusPageModule": function() { return /* binding */ ScreeningStatusPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _screening_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screening-status-routing.module */ 96754);
/* harmony import */ var _screening_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screening-status.page */ 8888);







let ScreeningStatusPageModule = class ScreeningStatusPageModule {
};
ScreeningStatusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _screening_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScreeningStatusPageRoutingModule
        ],
        declarations: [_screening_status_page__WEBPACK_IMPORTED_MODULE_1__.ScreeningStatusPage]
    })
], ScreeningStatusPageModule);



/***/ }),

/***/ 8888:
/*!***************************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreeningStatusPage": function() { return /* binding */ ScreeningStatusPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_screening_status_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./screening-status.page.html */ 85200);
/* harmony import */ var _screening_status_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screening-status.page.scss */ 72666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ScreeningStatusPage = class ScreeningStatusPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onGoButton() {
        this.router.navigate(['/tabs/home']);
    }
};
ScreeningStatusPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ScreeningStatusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-screening-status',
        template: _raw_loader_screening_status_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_screening_status_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScreeningStatusPage);



/***/ }),

/***/ 72666:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbmluZy1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJzY3JlZW5pbmctc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 85200:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/screening-status/screening-status.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"center-text\">\r\n    2025-26 screening will begin soon\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pmoa_pmoa_screening-status_screening-status_module_ts-es2015.js.map