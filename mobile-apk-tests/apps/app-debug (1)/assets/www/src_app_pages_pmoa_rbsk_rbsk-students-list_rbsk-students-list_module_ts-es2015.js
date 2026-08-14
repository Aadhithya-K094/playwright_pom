(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_rbsk_rbsk-students-list_rbsk-students-list_module_ts"],{

/***/ 59068:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/pmoa/rbsk/rbsk-students-list/rbsk-students-list-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbskStudentsListPageRoutingModule": function() { return /* binding */ RbskStudentsListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _rbsk_students_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rbsk-students-list.page */ 52927);




const routes = [
    {
        path: '',
        component: _rbsk_students_list_page__WEBPACK_IMPORTED_MODULE_0__.RbskStudentsListPage
    }
];
let RbskStudentsListPageRoutingModule = class RbskStudentsListPageRoutingModule {
};
RbskStudentsListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RbskStudentsListPageRoutingModule);



/***/ }),

/***/ 5322:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/pmoa/rbsk/rbsk-students-list/rbsk-students-list.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbskStudentsListPageModule": function() { return /* binding */ RbskStudentsListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rbsk_students_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rbsk-students-list-routing.module */ 59068);
/* harmony import */ var _rbsk_students_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rbsk-students-list.page */ 52927);







let RbskStudentsListPageModule = class RbskStudentsListPageModule {
};
RbskStudentsListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rbsk_students_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.RbskStudentsListPageRoutingModule
        ],
        declarations: [_rbsk_students_list_page__WEBPACK_IMPORTED_MODULE_1__.RbskStudentsListPage]
    })
], RbskStudentsListPageModule);



/***/ }),

/***/ 52927:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/pmoa/rbsk/rbsk-students-list/rbsk-students-list.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RbskStudentsListPage": function() { return /* binding */ RbskStudentsListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_rbsk_students_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rbsk-students-list.page.html */ 88821);
/* harmony import */ var _rbsk_students_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rbsk-students-list.page.scss */ 1901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);






let RbskStudentsListPage = class RbskStudentsListPage {
    constructor(alertService, router) {
        this.alertService = alertService;
        this.router = router;
        this.listData = [{ name: "test1" }, { name: "test2" }, { name: "test3" }];
    }
    ngOnInit() {
    }
    goToBack() {
        this.router.navigate(['/tabs/home']);
    }
    questionsPage() {
        this.router.navigate(['/tabs/rbsk-questions']);
    }
};
RbskStudentsListPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RbskStudentsListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rbsk-students-list',
        template: _raw_loader_rbsk_students_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rbsk_students_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RbskStudentsListPage);



/***/ }),

/***/ 1901:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/pmoa/rbsk/rbsk-students-list/rbsk-students-list.page.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectText {\n  border: 1px solid #bcc4cb;\n  background-color: aliceblue;\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\n.rowdata {\n  padding: 10px;\n}\n\n.card-school {\n  margin: 5%;\n  border-radius: 5%;\n}\n\n.footer-verified {\n  color: white;\n  padding: 10px;\n  text-align: center;\n}\n\n.reset {\n  color: white;\n  --background: #6c757d;\n  padding-right: 15px;\n}\n\n.primarydata {\n  color: white;\n  padding-right: 15px;\n}\n\n.back-icon {\n  color: white;\n}\n\n.todays-quiz-icon {\n  font-size: 25px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJic2stc3R1ZGVudHMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDRTtFQUVFLGVBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoicmJzay1zdHVkZW50cy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RUZXh0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiY2M0Y2I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7IFxyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufSBcclxuXHJcbi5yb3dkYXRhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXNjaG9vbCB7IFxyXG4gICAgbWFyZ2luOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG59XHJcblxyXG4uZm9vdGVyLXZlcmlmaWVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXNldCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucHJpbWFyeWRhdGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG4uYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC50b2RheXMtcXVpei1pY29uXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ 88821:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/rbsk/rbsk-students-list/rbsk-students-list.page.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Class Student List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-card class=\"card-school\">\r\n    <ion-row class=\"rowdata\">\r\n      <ion-col size=\"12\">\r\n        <ion-label position=\"floating\">School</ion-label>\r\n        <ion-input type=\"\" text class=\"selectText\" placeholder=\"School name\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label position=\"floating\">Class</ion-label>\r\n        <ion-input type=\"\" text class=\"selectText\" placeholder=\"Class\">\r\n        </ion-input>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label position=\"floating\">Sec</ion-label>\r\n        <ion-input type=\"\" text class=\"selectText\" placeholder=\"Sec\">\r\n        </ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"card-school\">\r\n    <ion-row class=\"rowdata\" *ngFor=\"let data of listData; let i = index;\">\r\n\r\n      <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" size=\"2\" (click)=\"questionsPage()\">\r\n        <div>\r\n          <ion-title style=\"font-size: 13px;color: black;padding-inline: 0px !important;padding-top: 6px;\"> {{i+1}}\r\n          </ion-title>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" class=\"col-table\" size=\"8\" (click)=\"questionsPage()\">\r\n        <div class=\"col-content\">\r\n          <ion-title\r\n            style=\"font-size: 13px;color: #000000b3;padding-inline: 0px !important;text-align: start;padding-top: 6px;\">\r\n            {{data.name}} </ion-title>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col [ngClass]=\"(i % 2 == 0) ? 'odd' : 'even'\" class=\"col-table\" size=\"2\" (click)=\"questionsPage()\">\r\n        <ion-icon (click)=\"questionsPage()\" class=\"todays-quiz-icon\"\r\n          src=\"../../../../assets/icons/pmoa/right-arrow.svg\">\r\n        </ion-icon>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <!-- <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-verified\">\r\n      <ion-button class=\"reset\">Reset</ion-button>\r\n      <ion-button class=\"primarydata\" (click)=\"nextPage()\">Save</ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer>\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-verified\" >\r\n        <ion-button class=\"reset\" >Reset</ion-button>\r\n        <ion-button class=\"primary\" color=\"primary\" >Save</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pmoa_rbsk_rbsk-students-list_rbsk-students-list_module_ts-es2015.js.map