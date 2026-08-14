(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_clsroom-observation_clsroom-observation_module_ts"],{

/***/ 33462:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClsroomObservationPageRoutingModule": function() { return /* binding */ ClsroomObservationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _clsroom_observation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clsroom-observation.page */ 50149);




const routes = [
    {
        path: '',
        component: _clsroom_observation_page__WEBPACK_IMPORTED_MODULE_0__.ClsroomObservationPage
    }
];
let ClsroomObservationPageRoutingModule = class ClsroomObservationPageRoutingModule {
};
ClsroomObservationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClsroomObservationPageRoutingModule);



/***/ }),

/***/ 6388:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClsroomObservationPageModule": function() { return /* binding */ ClsroomObservationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _clsroom_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clsroom-observation-routing.module */ 33462);
/* harmony import */ var _clsroom_observation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clsroom-observation.page */ 50149);







let ClsroomObservationPageModule = class ClsroomObservationPageModule {
};
ClsroomObservationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _clsroom_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClsroomObservationPageRoutingModule
        ],
        declarations: [_clsroom_observation_page__WEBPACK_IMPORTED_MODULE_1__.ClsroomObservationPage]
    })
], ClsroomObservationPageModule);



/***/ }),

/***/ 50149:
/*!****************************************************************************!*\
  !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation.page.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClsroomObservationPage": function() { return /* binding */ ClsroomObservationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_clsroom_observation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clsroom-observation.page.html */ 94197);
/* harmony import */ var _clsroom_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clsroom-observation.page.scss */ 15581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ClsroomObservationPage = class ClsroomObservationPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            this.title = data.title;
        });
    }
    goBack() {
        this.router.navigate(['/tabs/cwsn/dashboard']);
    }
};
ClsroomObservationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ClsroomObservationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clsroom-observation',
        template: _raw_loader_clsroom_observation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clsroom_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClsroomObservationPage);



/***/ }),

/***/ 15581:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation.page.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsc3Jvb20tb2JzZXJ2YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSiIsImZpbGUiOiJjbHNyb29tLW9ic2VydmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59Il19 */");

/***/ }),

/***/ 94197:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/clsroom-observation/clsroom-observation.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{ title }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_clsroom-observation_clsroom-observation_module_ts-es2015.js.map