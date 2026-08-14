(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection_my-inspection_mo-09775a"],{

/***/ 58689:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection-routing.module.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspectionPageRoutingModule": function() { return /* binding */ MyInspectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-inspection.page */ 8800);




const routes = [
    {
        path: '',
        component: _my_inspection_page__WEBPACK_IMPORTED_MODULE_0__.MyInspectionPage
    }
];
let MyInspectionPageRoutingModule = class MyInspectionPageRoutingModule {
};
MyInspectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyInspectionPageRoutingModule);



/***/ }),

/***/ 73186:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.module.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspectionPageModule": function() { return /* binding */ MyInspectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-inspection-routing.module */ 58689);
/* harmony import */ var _my_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-inspection.page */ 8800);







let MyInspectionPageModule = class MyInspectionPageModule {
};
MyInspectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _my_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyInspectionPageRoutingModule
        ],
        declarations: [_my_inspection_page__WEBPACK_IMPORTED_MODULE_1__.MyInspectionPage]
    })
], MyInspectionPageModule);



/***/ }),

/***/ 8800:
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.page.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspectionPage": function() { return /* binding */ MyInspectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_my_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-inspection.page.html */ 38045);
/* harmony import */ var _my_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-inspection.page.scss */ 23880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let MyInspectionPage = class MyInspectionPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToBack() {
        this.router.navigate(['/tabs/home']);
    }
    goToMenuData() {
        this.router.navigate(['/tabs/my-inspection-dashboard']);
    }
};
MyInspectionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MyInspectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-inspection',
        template: _raw_loader_my_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyInspectionPage);



/***/ }),

/***/ 23880:
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.page.scss ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 38045:
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.page.html ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> My Inspection </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-row class=\"menu-txt\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <!-- <ion-label>Menus</ion-label>  -->\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\">\r\n      <ion-row (click)=\"goToMenuData()\" >\r\n        <img src=\"/assets/icons/EnnumEzhuthumIcon.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\"> Ennum Ezhuthum </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection_my-inspection_mo-09775a-es2015.js.map