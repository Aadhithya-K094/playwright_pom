(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_congratulation_congratulation_module_ts"],{

/***/ 92959:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/congratulation/congratulation-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongratulationPageRoutingModule": function() { return /* binding */ CongratulationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _congratulation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./congratulation.page */ 84355);




const routes = [
    {
        path: '',
        component: _congratulation_page__WEBPACK_IMPORTED_MODULE_0__.CongratulationPage
    }
];
let CongratulationPageRoutingModule = class CongratulationPageRoutingModule {
};
CongratulationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CongratulationPageRoutingModule);



/***/ }),

/***/ 72501:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/congratulation/congratulation.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongratulationPageModule": function() { return /* binding */ CongratulationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _congratulation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./congratulation-routing.module */ 92959);
/* harmony import */ var _congratulation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./congratulation.page */ 84355);







let CongratulationPageModule = class CongratulationPageModule {
};
CongratulationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _congratulation_routing_module__WEBPACK_IMPORTED_MODULE_0__.CongratulationPageRoutingModule
        ],
        declarations: [_congratulation_page__WEBPACK_IMPORTED_MODULE_1__.CongratulationPage]
    })
], CongratulationPageModule);



/***/ }),

/***/ 84355:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/congratulation/congratulation.page.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CongratulationPage": function() { return /* binding */ CongratulationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_congratulation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./congratulation.page.html */ 8334);
/* harmony import */ var _congratulation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./congratulation.page.scss */ 68731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);






let CongratulationPage = class CongratulationPage {
    constructor(router, ionicstoragess) {
        this.router = router;
        this.ionicstoragess = ionicstoragess;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.levelData();
    }
    levelData() {
        this.ionicstoragess.getData('eetSurveyLevel').then((dataa) => {
            if (dataa != null) {
                this.level = dataa;
                console.log(this.level, 'levsczfsf');
            }
        }, (error) => console.error(error));
    }
    theEnd() {
        this.router.navigate(['/tabs/school-observation']);
    }
};
CongratulationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService }
];
CongratulationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-congratulation',
        template: _raw_loader_congratulation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_congratulation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CongratulationPage);



/***/ }),

/***/ 68731:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/congratulation/congratulation.page.scss ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thankyou {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  animation: congraluation 1s;\n}\n.thankyou img {\n  width: 170px;\n}\n.thankyou h3 {\n  font-size: 27px;\n  font-weight: bold;\n  color: #333;\n  padding: 13px 0px 2px;\n}\n.thankyou h5 {\n  color: #888;\n  padding: 0px 35px;\n  font-size: 17px;\n}\n.thankyou .btn {\n  margin-top: 20px;\n  color: #fff;\n}\n@keyframes congraluation {\n  0% {\n    transform: scale(0);\n  }\n  25% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n  75% {\n    transform: scale(1.1);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.congrats {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  width: 70%;\n  margin: 60px auto 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmdyYXR1bGF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQUk7RUFFSSxnQkFBQTtFQUVBLFdBQUE7QUFBUjtBQUlBO0VBQ0k7SUFDSSxtQkFBQTtFQUROO0VBR0U7SUFDSSxxQkFBQTtFQUROO0VBR0U7SUFDSSxtQkFBQTtFQUROO0VBR0U7SUFDSSxxQkFBQTtFQUROO0VBR0U7SUFDSSxtQkFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBRkoiLCJmaWxlIjoiY29uZ3JhdHVsYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoYW5reW91e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFuaW1hdGlvbjogY29uZ3JhbHVhdGlvbiAxcztcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICB9XHJcbiAgICBoM3tcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAwcHggMnB4O1xyXG4gICAgfVxyXG4gICAgaDV7XHJcbiAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICAvLyBwYWRkaW5nOiAxMHB4IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjOGI2N2IzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNvbmdyYWx1YXRpb24ge1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIDI1JXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxuICAgIDc1JXtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb25ncmF0c3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvIDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 8334:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/congratulation/congratulation.page.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"text-align: center;\">Ennum Ezhuthum Survey</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"\">\r\n    <img src=\"/assets/images/ennum-ezhuthum/congratulation.gif\" class=\"congrats\"/>\r\n  </div>\r\n  <div class=\"thankyou\">\r\n    <div>\r\n      <img src=\"/assets/images/ennum-ezhuthum/Award.svg\" />\r\n      <h3>Congratulations!</h3>\r\n      <h5 *ngIf=\"this.level == 'L1' || this.level == 'L2'\">You have completed all assessments and met your target today</h5>\r\n      <h5 *ngIf=\"this.level == 'L3'\">Congratulations! You have completed the school visit</h5>\r\n      <ion-button class=\"btn\" (click)=\"theEnd()\">OK</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_congratulation_congratulation_module_ts-es2015.js.map