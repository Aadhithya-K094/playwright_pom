(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_sids-dashboard_sids-dashboard_module_ts"],{

/***/ 69929:
/*!****************************************************************************!*\
  !*** ./src/app/pages/sids/sids-dashboard/sids-dashboard-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidsDashboardPageRoutingModule": function() { return /* binding */ SidsDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sids_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sids-dashboard.page */ 72322);




const routes = [
    {
        path: '',
        component: _sids_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.SidsDashboardPage
    }
];
let SidsDashboardPageRoutingModule = class SidsDashboardPageRoutingModule {
};
SidsDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SidsDashboardPageRoutingModule);



/***/ }),

/***/ 29362:
/*!********************************************************************!*\
  !*** ./src/app/pages/sids/sids-dashboard/sids-dashboard.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidsDashboardPageModule": function() { return /* binding */ SidsDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sids_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sids-dashboard-routing.module */ 69929);
/* harmony import */ var _sids_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sids-dashboard.page */ 72322);







let SidsDashboardPageModule = class SidsDashboardPageModule {
};
SidsDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sids_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.SidsDashboardPageRoutingModule
        ],
        declarations: [_sids_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.SidsDashboardPage]
    })
], SidsDashboardPageModule);



/***/ }),

/***/ 72322:
/*!******************************************************************!*\
  !*** ./src/app/pages/sids/sids-dashboard/sids-dashboard.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidsDashboardPage": function() { return /* binding */ SidsDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_sids_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sids-dashboard.page.html */ 37358);
/* harmony import */ var _sids_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sids-dashboard.page.scss */ 32867);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let SidsDashboardPage = class SidsDashboardPage {
    constructor(router) {
        this.router = router;
        this.inspectionList = [];
    }
    ngOnInit() {
        this.getDashboard();
    }
    getDashboard() {
        this.inspectionList = [
            {
                id: 19,
                menu: 'Primary School',
                image: 'assets/icons/PMS.svg',
                url: '/tabs/primary-sids-school'
            },
            // {
            //   id: 22,
            //   menu: 'Higher Secondary',
            //   image: 'assets/icons/HSS.svg',
            //   url:'/tabs/sids-school'
            // }
        ];
    }
    goToSurvey(item) {
        this.router.navigate([item.url]);
    }
    goToBack() {
        this.router.navigate(['/tabs/dashboard']);
    }
};
SidsDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SidsDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sids-dashboard',
        template: _raw_loader_sids_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sids_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SidsDashboardPage);



/***/ }),

/***/ 32867:
/*!********************************************************************!*\
  !*** ./src/app/pages/sids/sids-dashboard/sids-dashboard.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRzLWRhc2hib2FyZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 37358:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/sids-dashboard/sids-dashboard.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">SIDS Survey</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-row>\r\n    <ion-col size=\"3\" class=\"menu menu-txt\"  *ngFor=\"let item of inspectionList\">\r\n      <ion-row (click)=\"goToSurvey(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_sids-dashboard_sids-dashboard_module_ts-es2015.js.map