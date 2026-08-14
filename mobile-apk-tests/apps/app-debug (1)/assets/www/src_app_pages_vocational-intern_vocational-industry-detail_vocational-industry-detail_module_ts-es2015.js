(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vocational-intern_vocational-industry-detail_vocational-industry-detail_module_ts"],{

/***/ 36912:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-industry-detail/vocational-industry-detail-routing.module.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocationalIndustryDetailPageRoutingModule": function() { return /* binding */ VocationalIndustryDetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vocational_industry_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocational-industry-detail.page */ 96997);




const routes = [
    {
        path: '',
        component: _vocational_industry_detail_page__WEBPACK_IMPORTED_MODULE_0__.VocationalIndustryDetailPage
    }
];
let VocationalIndustryDetailPageRoutingModule = class VocationalIndustryDetailPageRoutingModule {
};
VocationalIndustryDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VocationalIndustryDetailPageRoutingModule);



/***/ }),

/***/ 21666:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-industry-detail/vocational-industry-detail.module.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocationalIndustryDetailPageModule": function() { return /* binding */ VocationalIndustryDetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vocational_industry_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocational-industry-detail-routing.module */ 36912);
/* harmony import */ var _vocational_industry_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vocational-industry-detail.page */ 96997);







let VocationalIndustryDetailPageModule = class VocationalIndustryDetailPageModule {
};
VocationalIndustryDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vocational_industry_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.VocationalIndustryDetailPageRoutingModule
        ],
        declarations: [_vocational_industry_detail_page__WEBPACK_IMPORTED_MODULE_1__.VocationalIndustryDetailPage]
    })
], VocationalIndustryDetailPageModule);



/***/ }),

/***/ 96997:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-industry-detail/vocational-industry-detail.page.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocationalIndustryDetailPage": function() { return /* binding */ VocationalIndustryDetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vocational_industry_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vocational-industry-detail.page.html */ 90589);
/* harmony import */ var _vocational_industry_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vocational-industry-detail.page.scss */ 93445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let VocationalIndustryDetailPage = class VocationalIndustryDetailPage {
    constructor(router, route, userService, userSessionService, datePipe) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.userSessionService = userSessionService;
        this.datePipe = datePipe;
        let current_date = new Date();
        this.currentDate = this.datePipe.transform(current_date, 'yyyy-MM-dd');
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.dataList = JSON.parse(params['data']);
            this.selectedDate = JSON.parse(params['selecteddate']);
        });
        this.gotoForm = true;
        if (this.currentDate < this.selectedDate || this.currentDate > this.selectedDate) {
            this.gotoForm = false;
        }
        else if (this.currentDate == this.selectedDate) {
        }
        else {
        }
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe((params) => {
            this.dataList = JSON.parse(params['data']);
            this.selectedDate = JSON.parse(params['selecteddate']);
        });
        this.gotoForm = true;
        if (this.currentDate < this.selectedDate || this.currentDate > this.selectedDate) {
            this.gotoForm = false;
        }
        else if (this.currentDate == this.selectedDate) {
        }
        else {
        }
    }
    goBack() {
        this.router.navigate(["/tabs/vocational-intern"], { queryParams: { 'data': JSON.stringify(this.selectedDate) } });
    }
    getdailogopen(data) {
        this.industryData = data;
        this.router.navigate(["/tabs/vocational-question-form"], { queryParams: { 'data': JSON.stringify(this.industryData), 'alldata': JSON.stringify(this.dataList), 'selectedDate': JSON.stringify(this.selectedDate) } });
    }
};
VocationalIndustryDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe }
];
VocationalIndustryDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-vocational-industry-detail',
        template: _raw_loader_vocational_industry_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vocational_industry_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VocationalIndustryDetailPage);



/***/ }),

/***/ 93445:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-industry-detail/vocational-industry-detail.page.scss ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-card-clr {\n  background-color: #dcbcff;\n  padding: 10px;\n}\n\n.ion-card-margin-top-bottom {\n  padding: 5px;\n  color: black;\n  font-size: 11px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.head {\n  color: #8B67B3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvY2F0aW9uYWwtaW5kdXN0cnktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUpBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7QUFDSiIsImZpbGUiOiJ2b2NhdGlvbmFsLWluZHVzdHJ5LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNhcmQtY2xyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2JjZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW9uLWNhcmQtbWFyZ2luLXRvcC1ib3R0b217XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuaGVhZHtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 90589:
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vocational-intern/vocational-industry-detail/vocational-industry-detail.page.html ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Industry Details</ion-title>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards ion-card-clr\" *ngIf=\"dataList.length > 0\">\r\n      <ng-container *ngFor=\"let item1 of dataList\">\r\n        <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n          <ion-row *ngIf=\"gotoForm\">\r\n            <ion-col size=\"12\" style=\"background-color: #8B67B3;border-radius: 10px;text-align: center;\">\r\n                <button class=\"btn\" style=\"color: white;\" (click)=\"getdailogopen(item1)\">Go to form</button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"Div_style\">\r\n              <div class=\"card-text text-center\">\r\n                <ion-label class=\"schoolnames head\"><b>{{item1.industry_name | uppercase}}</b></ion-label>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"3.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">Group Name</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"0.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">:</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"8\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">{{item1.VOCStudList[0].group_name}}</ion-label>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">POC Designation</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"0.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">:</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"7\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">{{item1.industry_poc_designation}}</ion-label>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">POC Contact</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"0.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">:</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">{{item1.industry_poc_number}}</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"1.9\" class=\"Div_style\">\r\n              <div class=\"card-text text-left\">\r\n                <a href=\"tel:{{item1.industry_poc_number}}\" *ngIf=\"item1.industry_poc_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:#8B67B3\"></ion-icon>\r\n                </a>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">Total Students</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"0.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">:</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"7\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">{{item1.VOCStudList.length}}</ion-label>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">Incharge Teacher</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"0.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">:</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">{{item1.Tchrname1}}</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"1.9\" class=\"Div_style\">\r\n              <div class=\"card-text text-left\">\r\n                <a href=\"tel:{{item1.TchrNumber1}}\" *ngIf=\"item1.TchrNumber1 != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:#8B67B3\"></ion-icon>\r\n                </a>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"4.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">Additional Teacher</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"0.5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">:</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"5\" class=\"Div_style\">\r\n              <div class=\"card-text\">\r\n                <ion-label class=\"schoolnames ion-card-margin-top-bottom\">{{item1.Tchrname2}}</ion-label>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"1.9\" class=\"Div_style\">\r\n              <div class=\"card-text text-left\">\r\n                <a href=\"tel:{{item1.TchrNumber2}}\" *ngIf=\"item1.TchrNumber2 != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:#8B67B3\"></ion-icon>\r\n                </a>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ng-container>\r\n    </div>\r\n    <div *ngIf=\"dataList.length == 0\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text cards ion-card-clr\">\r\n          <ion-label class=\"schoolnames\">No Data Found</ion-label>\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vocational-intern_vocational-industry-detail_vocational-industry-detail_module_ts-es2015.js.map