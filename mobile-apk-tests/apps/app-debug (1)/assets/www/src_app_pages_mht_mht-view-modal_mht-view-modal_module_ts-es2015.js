(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_mht-view-modal_mht-view-modal_module_ts"],{

/***/ 62518:
/*!***************************************************************************!*\
  !*** ./src/app/pages/mht/mht-view-modal/mht-view-modal-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MhtViewModalPageRoutingModule": function() { return /* binding */ MhtViewModalPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mht_view_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mht-view-modal.page */ 13756);




const routes = [
    {
        path: '',
        component: _mht_view_modal_page__WEBPACK_IMPORTED_MODULE_0__.MhtViewModalPage
    }
];
let MhtViewModalPageRoutingModule = class MhtViewModalPageRoutingModule {
};
MhtViewModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MhtViewModalPageRoutingModule);



/***/ }),

/***/ 34162:
/*!*******************************************************************!*\
  !*** ./src/app/pages/mht/mht-view-modal/mht-view-modal.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MhtViewModalPageModule": function() { return /* binding */ MhtViewModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mht_view_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mht-view-modal-routing.module */ 62518);
/* harmony import */ var _mht_view_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mht-view-modal.page */ 13756);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








let MhtViewModalPageModule = class MhtViewModalPageModule {
};
MhtViewModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mht_view_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MhtViewModalPageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
        ],
        declarations: [_mht_view_modal_page__WEBPACK_IMPORTED_MODULE_1__.MhtViewModalPage]
    })
], MhtViewModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_mht_mht-view-modal_mht-view-modal_module_ts-es2015.js.map