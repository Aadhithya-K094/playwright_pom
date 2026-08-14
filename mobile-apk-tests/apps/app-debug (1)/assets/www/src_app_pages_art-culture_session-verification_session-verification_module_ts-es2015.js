(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_session-verification_session-verification_module_ts"],{

/***/ 8173:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-verification/session-verification-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionVerificationPageRoutingModule": function() { return /* binding */ SessionVerificationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _session_verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-verification.page */ 50027);




const routes = [
    {
        path: '',
        component: _session_verification_page__WEBPACK_IMPORTED_MODULE_0__.SessionVerificationPage
    }
];
let SessionVerificationPageRoutingModule = class SessionVerificationPageRoutingModule {
};
SessionVerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SessionVerificationPageRoutingModule);



/***/ }),

/***/ 51858:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-verification/session-verification.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionVerificationPageModule": function() { return /* binding */ SessionVerificationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _session_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-verification-routing.module */ 8173);
/* harmony import */ var _session_verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-verification.page */ 50027);







let SessionVerificationPageModule = class SessionVerificationPageModule {
};
SessionVerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _session_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.SessionVerificationPageRoutingModule
        ],
        declarations: [_session_verification_page__WEBPACK_IMPORTED_MODULE_1__.SessionVerificationPage]
    })
], SessionVerificationPageModule);



/***/ }),

/***/ 50027:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-verification/session-verification.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionVerificationPage": function() { return /* binding */ SessionVerificationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_session_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./session-verification.page.html */ 92737);
/* harmony import */ var _session_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-verification.page.scss */ 42591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let SessionVerificationPage = class SessionVerificationPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    backBtn() {
        this.router.navigate(["/tabs/art-culture"]);
    }
};
SessionVerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SessionVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-session-verification',
        template: _raw_loader_session_verification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_session_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessionVerificationPage);



/***/ }),

/***/ 42591:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-verification/session-verification.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #8934E7;\n}\n\n.Div_card {\n  margin: 12%;\n  border: 2px solid #8934E7;\n  padding: 13px;\n  text-align: center;\n  border-bottom: 9px solid #8934E7;\n  border-left: 8px solid #8934E7;\n  border-radius: 14px;\n  font-size: 16px;\n  background-color: #F7F7F7;\n  font-weight: bold;\n  color: #575757;\n}\n\n.Div_style {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGlCQUFBO0FBR0oiLCJmaWxlIjoic2Vzc2lvbi12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM4OTM0RTc7XHJcbiAgfVxyXG4gIC5EaXZfY2FyZHtcclxuICAgIG1hcmdpbjogMTIlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzg5MzRFNztcclxuICAgIHBhZGRpbmc6IDEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiA5cHggc29saWQgIzg5MzRFNztcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzg5MzRFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzU3NTc1NztcclxuICB9XHJcbiAgLkRpdl9zdHlsZXtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 92737:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/session-verification/session-verification.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"backBtn()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Art and Culture</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"Div_card\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"Div_style\">\r\n        <div>ARP Name</div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"Div_style\">\r\n        <div>Aadhithya</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"Div_style\">\r\n        <div>School Name</div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"Div_style\">\r\n        <div>Government HSS</div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"Div_style\">\r\n        <div>Date</div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"Div_style\">\r\n        <div>01-07-2001</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_session-verification_session-verification_module_ts-es2015.js.map