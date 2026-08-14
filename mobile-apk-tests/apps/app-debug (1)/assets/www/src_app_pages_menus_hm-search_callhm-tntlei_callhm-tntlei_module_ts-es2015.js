(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_menus_hm-search_callhm-tntlei_callhm-tntlei_module_ts"],{

/***/ 80898:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-tntlei/callhm-tntlei-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallHmTntleiPageRoutingModule": function() { return /* binding */ CallHmTntleiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _callhm_tntlei_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callhm-tntlei.page */ 79221);




const routes = [
    {
        path: '',
        component: _callhm_tntlei_page__WEBPACK_IMPORTED_MODULE_0__.CallHmTntleiPage
    }
];
let CallHmTntleiPageRoutingModule = class CallHmTntleiPageRoutingModule {
};
CallHmTntleiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CallHmTntleiPageRoutingModule);



/***/ }),

/***/ 13725:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-tntlei/callhm-tntlei.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallHmTntleiPageModule": function() { return /* binding */ CallHmTntleiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _callhm_tntlei_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callhm-tntlei-routing.module */ 80898);
/* harmony import */ var _callhm_tntlei_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callhm-tntlei.page */ 79221);







let CallHmTntleiPageModule = class CallHmTntleiPageModule {
};
CallHmTntleiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _callhm_tntlei_routing_module__WEBPACK_IMPORTED_MODULE_0__.CallHmTntleiPageRoutingModule
        ],
        declarations: [_callhm_tntlei_page__WEBPACK_IMPORTED_MODULE_1__.CallHmTntleiPage]
    })
], CallHmTntleiPageModule);



/***/ }),

/***/ 79221:
/*!***************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-tntlei/callhm-tntlei.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallHmTntleiPage": function() { return /* binding */ CallHmTntleiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_callhm_tntlei_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./callhm-tntlei.page.html */ 75454);
/* harmony import */ var _callhm_tntlei_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callhm-tntlei.page.scss */ 30897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);






let CallHmTntleiPage = class CallHmTntleiPage {
    constructor(router, _apiService) {
        this.router = router;
        this._apiService = _apiService;
        this.tntlei_low_score_list = [];
        this.tntlei_high_score_list = [];
        this.date = new Date().toLocaleDateString();
    }
    ngOnInit() {
        // this._apiService.getSchoolsByTntlei().subscribe((data: any) => {           
        //   this.tntlei_low_score_list = data.records.tntlei_low;
        //   this.tntlei_high_score_list = data.records.tntlei_high;      
        // })
    }
    ionViewDidEnter() {
        this._apiService.getSchoolsByTntlei().subscribe((data) => {
            console.log(data);
            this.tntlei_low_score_list = data.records.tntlei_low;
            this.tntlei_high_score_list = data.records.tntlei_high;
        });
    }
    goToBack() {
        this.router.navigate(['/tabs/call-hm']);
    }
    goToReport(data) {
        localStorage.setItem("tntlei_data", JSON.stringify(data));
        this.router.navigate(['/tabs/callhm-observation']);
    }
    goToMenuData() {
        this.router.navigate(['/tabs/my-inspection-dashboard']);
    }
};
CallHmTntleiPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
CallHmTntleiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-callhm-tntlei',
        template: _raw_loader_callhm_tntlei_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_callhm_tntlei_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CallHmTntleiPage);



/***/ }),

/***/ 30897:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-tntlei/callhm-tntlei.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-icon-new {\n  width: 8%;\n  margin: auto;\n  border: 4px solid #FFFFFF;\n  border: 4px solid #FFFFFF;\n  border: 4px solid var(--cs-background-secondary, #FFFFFF);\n  overflow: visible;\n  float: right;\n  border-radius: 6px;\n}\n\n.menu-txt-new {\n  color: slategray;\n  font-size: 14px;\n  /* padding-top: 5px; */\n  /* text-align: center; */\n  font-size: 12px;\n  padding-bottom: 5px;\n  background: white;\n  margin: 15px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxobS10bnRsZWkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQUEseURBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRUoiLCJmaWxlIjoiY2FsbGhtLXRudGxlaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1pY29uLW5ldyB7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY3MtYmFja2dyb3VuZC1zZWNvbmRhcnksICNGRkZGRkYpO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLm1lbnUtdHh0LW5ldyB7XHJcbiAgICBjb2xvcjogc2xhdGVncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLyogcGFkZGluZy10b3A6IDVweDsgKi9cclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ 75454:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menus/hm-search/callhm-tntlei/callhm-tntlei.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Call HMs </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-row class=\"menu-txt-new\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <!-- <ion-label>Menus</ion-label>  -->\r\n    </ion-col>\r\n    <ion-col size=\"12\" class=\"menu\">\r\n      <ion-row >\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label  style=\"font-size: 14px;color:#8B67B3\">Logic for the list:</ion-label><br>\r\n          <ion-label class=\"lbl-text\">The list displays the top 5 school that received highest and lowest TNTLEI.</ion-label><br>\r\n          <ion-label class=\"lbl-text\">3 of which are Primary & Upper Middle and 2 are High/Higher Secondary Schools.</ion-label><br>\r\n          <ion-label class=\"lbl-text\">Least in red and Highest in green</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"menu-txt\" style=\"background: #908c8b;\">    \r\n    <ion-col size=\"12\" class=\"menu\" style=\"background: #908c8b;\">\r\n      <ion-row >\r\n        <ion-col size=\"12\" class=\"menu-text\" style=\"background: #908c8b;\">\r\n          <ion-label class=\"lbl-text\" style=\"color:white\">Based on Observations conducted on {{this.date}}:</ion-label>        \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>  \r\n\r\n  <ion-row *ngFor=\"let tntlei_low of tntlei_low_score_list; let i = index\" class=\"menu-txt-new\">    \r\n    <ion-col size=\"12\" class=\"menu\">\r\n      <ion-row >\r\n        <ion-col size=\"12\" class=\"menu-text\" (click)=\"goToReport(tntlei_low)\">\r\n          <ion-label style=\"color:red\"  class=\"lbl-text\">{{i+1}}. {{tntlei_low.school_name}} , {{tntlei_low.district_name}}</ion-label>                  \r\n          <img src=\"/assets/icons/arrow.svg\" class=\"menu-icon-new\">\r\n        </ion-col>\r\n        <!-- <ion-col size=\"4\"  (click)=\"goToReport(tntlei_low)\">\r\n          <ion-label style=\"color:red\"  class=\"lbl-text\">{{i+1}}. {{tntlei_low.school_name}}</ion-label>        \r\n  \r\n        </ion-col>    \r\n  \r\n      <ion-col size=\"4\" (click)=\"goToReport(tntlei_low)\">\r\n        \r\n        <ion-label style=\"color:red\"  class=\"lbl-text\">{{tntlei_low.district_name}}</ion-label>        \r\n        \r\n      </ion-col>\r\n    \r\n  \r\n    <ion-col size=\"4\" (click)=\"goToReport(tntlei_low)\">\r\n  \r\n      <img src=\"/assets/icons/arrow.svg\" class=\"menu-icon-new\">\r\n    </ion-col> -->\r\n  \r\n      </ion-row>\r\n      \r\n\r\n    </ion-col>\r\n  </ion-row>  \r\n  \r\n  <ion-row *ngFor=\"let tntlei_high of tntlei_high_score_list; let i = index\" class=\"menu-txt-new\">    \r\n    <ion-col size=\"12\" class=\"menu\">\r\n      <ion-row >        \r\n        <ion-col size=\"12\" class=\"menu-text\" (click)=\"goToReport(tntlei_high)\">\r\n          <ion-label style=\"color:green\"  class=\"lbl-text\">{{i+6}}. {{tntlei_high.school_name}} , {{tntlei_high.district_name}}</ion-label>        \r\n          <!-- <ion-label style=\"color:green\"  class=\"lbl-text\">{{tntlei_high.district_name}}</ion-label>         -->\r\n          <img src=\"/assets/icons/arrow.svg\" class=\"menu-icon-new\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>    \r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menus_hm-search_callhm-tntlei_callhm-tntlei_module_ts-es2015.js.map