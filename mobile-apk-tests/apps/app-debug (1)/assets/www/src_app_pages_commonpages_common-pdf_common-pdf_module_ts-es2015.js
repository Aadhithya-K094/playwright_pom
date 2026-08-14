(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_commonpages_common-pdf_common-pdf_module_ts"],{

/***/ 75557:
/*!***************************************************************************!*\
  !*** ./src/app/pages/commonpages/common-pdf/common-pdf-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonPdfPageRoutingModule": function() { return /* binding */ CommonPdfPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _common_pdf_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-pdf.page */ 2770);




const routes = [
    {
        path: '',
        component: _common_pdf_page__WEBPACK_IMPORTED_MODULE_0__.CommonPdfPage
    }
];
let CommonPdfPageRoutingModule = class CommonPdfPageRoutingModule {
};
CommonPdfPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommonPdfPageRoutingModule);



/***/ }),

/***/ 2122:
/*!*******************************************************************!*\
  !*** ./src/app/pages/commonpages/common-pdf/common-pdf.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonPdfPageModule": function() { return /* binding */ CommonPdfPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _common_pdf_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-pdf-routing.module */ 75557);
/* harmony import */ var _common_pdf_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-pdf.page */ 2770);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ 3621);








let CommonPdfPageModule = class CommonPdfPageModule {
};
CommonPdfPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _common_pdf_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonPdfPageRoutingModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__.PdfViewerModule
        ],
        declarations: [_common_pdf_page__WEBPACK_IMPORTED_MODULE_1__.CommonPdfPage]
    })
], CommonPdfPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_commonpages_common-pdf_common-pdf_module_ts-es2015.js.map