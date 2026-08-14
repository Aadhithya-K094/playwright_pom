(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_commonpages_samplecooming_samplecooming_module_ts"],{

/***/ 92168:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/commonpages/samplecooming/samplecooming-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplecoomingPageRoutingModule": function() { return /* binding */ SamplecoomingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _samplecooming_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samplecooming.page */ 58419);




const routes = [
    {
        path: '',
        component: _samplecooming_page__WEBPACK_IMPORTED_MODULE_0__.SamplecoomingPage
    }
];
let SamplecoomingPageRoutingModule = class SamplecoomingPageRoutingModule {
};
SamplecoomingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SamplecoomingPageRoutingModule);



/***/ }),

/***/ 72618:
/*!*************************************************************************!*\
  !*** ./src/app/pages/commonpages/samplecooming/samplecooming.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplecoomingPageModule": function() { return /* binding */ SamplecoomingPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _samplecooming_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samplecooming-routing.module */ 92168);
/* harmony import */ var _samplecooming_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplecooming.page */ 58419);







let SamplecoomingPageModule = class SamplecoomingPageModule {
};
SamplecoomingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _samplecooming_routing_module__WEBPACK_IMPORTED_MODULE_0__.SamplecoomingPageRoutingModule
        ],
        declarations: [_samplecooming_page__WEBPACK_IMPORTED_MODULE_1__.SamplecoomingPage]
    })
], SamplecoomingPageModule);



/***/ }),

/***/ 58419:
/*!***********************************************************************!*\
  !*** ./src/app/pages/commonpages/samplecooming/samplecooming.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplecoomingPage": function() { return /* binding */ SamplecoomingPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_samplecooming_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./samplecooming.page.html */ 85291);
/* harmony import */ var _samplecooming_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samplecooming.page.scss */ 8505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);






let SamplecoomingPage = class SamplecoomingPage {
    constructor(router, userService, route) {
        this.router = router;
        this.userService = userService;
        this.route = route;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        //debugger
        this.routeData = this.route.snapshot;
        this.title = this.routeData.queryParams.title;
    }
    goToBack() {
        this.router.navigate(['/tabs/cwsn/dashboard']);
    }
};
SamplecoomingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
SamplecoomingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-samplecooming',
        template: _raw_loader_samplecooming_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_samplecooming_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SamplecoomingPage);



/***/ }),

/***/ 8505:
/*!*************************************************************************!*\
  !*** ./src/app/pages/commonpages/samplecooming/samplecooming.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW1wbGVjb29taW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 85291:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/samplecooming/samplecooming.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> {{title}} </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;padding-top:50%;color:#8B67B3\">\r\n      <ion-label>Coming Soon...</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_commonpages_samplecooming_samplecooming_module_ts-es2015.js.map