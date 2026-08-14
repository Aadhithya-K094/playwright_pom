(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_screaning-menu_screaning-menu_module_ts"],{

/***/ 91053:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/screaning-menu/screaning-menu-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreaningMenuPageRoutingModule": function() { return /* binding */ ScreaningMenuPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _screaning_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screaning-menu.page */ 86839);




const routes = [
    {
        path: '',
        component: _screaning_menu_page__WEBPACK_IMPORTED_MODULE_0__.ScreaningMenuPage
    }
];
let ScreaningMenuPageRoutingModule = class ScreaningMenuPageRoutingModule {
};
ScreaningMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScreaningMenuPageRoutingModule);



/***/ }),

/***/ 84639:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/screaning-menu/screaning-menu.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreaningMenuPageModule": function() { return /* binding */ ScreaningMenuPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _screaning_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screaning-menu-routing.module */ 91053);
/* harmony import */ var _screaning_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screaning-menu.page */ 86839);







let ScreaningMenuPageModule = class ScreaningMenuPageModule {
};
ScreaningMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _screaning_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScreaningMenuPageRoutingModule
        ],
        declarations: [_screaning_menu_page__WEBPACK_IMPORTED_MODULE_1__.ScreaningMenuPage]
    })
], ScreaningMenuPageModule);



/***/ }),

/***/ 86839:
/*!*************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/screaning-menu/screaning-menu.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreaningMenuPage": function() { return /* binding */ ScreaningMenuPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_screaning_menu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./screaning-menu.page.html */ 88884);
/* harmony import */ var _screaning_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screaning-menu.page.scss */ 38459);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);










let ScreaningMenuPage = class ScreaningMenuPage {
    constructor(router, http, route, cwsnService, alertService, sqliteDB, ionicstorage) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.cwsnService = cwsnService;
        this.alertService = alertService;
        this.sqliteDB = sqliteDB;
        this.ionicstorage = ionicstorage;
        this.assessmentMenuList = [
            { label: 'Functional Assessment', value: '1', img: '../../../../assets/icons/cwsn/Functional-Grey.svg' },
            { label: 'Current Performance and Goal Setting', value: '2', img: '../../../../assets/icons/cwsn/Annual Evaluation-Grey.svg' },
            { label: 'Intervention', value: '3', img: '../../../../assets/icons/cwsn/Goal-Grey.svg' }
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.title = this.routeData.queryParams.title;
        this.mode = this.routeData.queryParams.mode;
        this.ionicstorage.getData('schlName').then((schlName) => {
            // let str = schlName
            this.schlName = schlName.charAt(0) + schlName.substring(1).toLowerCase();
            console.log('schlName', schlName.charAt(0) + schlName.substring(1).toLowerCase());
        });
        this.route.queryParams.subscribe(data => {
            this.paramData = JSON.parse(data.item);
            console.log('paramData', this.paramData);
        });
    }
    navigateStudents(menuValue) {
        this.ionicstorage.insertData_Replace('menuValue', menuValue);
        this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(this.paramData), 'menuValue': menuValue, 'zonelId': this.ZonalId, title: this.title, mode: this.mode } });
    }
    navigateBack() {
        this.router.navigate(['/tabs/cwsn/ca-school-list'], { queryParams: { item: JSON.stringify(this.paramData), 'mode': this.mode, 'title': this.title } });
    }
};
ScreaningMenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService }
];
ScreaningMenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-screaning-menu',
        template: _raw_loader_screaning_menu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_screaning_menu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScreaningMenuPage);



/***/ }),

/***/ 38459:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/screaning-menu/screaning-menu.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 15px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n  border-radius: 15px;\n}\n\n.size {\n  font-size: 10px;\n  text-transform: capitalize;\n  font-weight: 600;\n}\n\n.card-align {\n  min-height: auto;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 25px;\n  background-color: #FF79B7;\n  border-radius: 15px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: white;\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  text-align: end;\n  padding: 3px;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 20px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 20px;\n}\n\nion-label .schoolnames {\n  font-size: 10px;\n}\n\n.label {\n  color: white;\n}\n\n.align {\n  text-align: center;\n}\n\n.box {\n  border: 1px #b9b8b8;\n  background-color: #ece4e4;\n  display: flex;\n  padding-right: 3px;\n  padding-left: 3px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin: 1px;\n}\n\n.box:host {\n  --background:var(--ion-background-color, #532044);\n}\n\n.text {\n  font-size: 12px;\n  color: #525252;\n  font-weight: bold;\n  font-family: none;\n}\n\n.card-align .cards .card-design {\n  border-radius: 15px;\n  padding: 20px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n  border-left: 6px solid #8B66B3;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: bold;\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.btn {\n  text-align: center;\n  border-radius: 10px;\n}\n\n.btn-style {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n}\n\n.download {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n  border: 2px #8B66B3;\n  background-color: white !important;\n  font-size: smaller;\n}\n\n.icon-outer {\n  padding: 3px;\n  background-color: var(--icon-color);\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: var(--seconday-color-change);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVhbmluZy1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0UsK0JBQUE7QUFDSjs7QUFFRTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFFRSxnQkFBQTtBQUFKOztBQUlRO0VBQ0ksOENBQUE7RUFLQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUFOWjs7QUFVWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBUmhCOztBQVVnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFScEI7O0FBWVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUdBLGtCQUFBO0VBQ0EsaUJBQUE7QUFaaEI7O0FBY2dCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFacEI7O0FBaUJRO0VBQ0ksYUFBQTtBQWZaOztBQWtCUTtFQUNJLG1CQUFBO0FBaEJaOztBQTZCRTtFQUNFLGVBQUE7QUExQko7O0FBNkJFO0VBQ0UsWUFBQTtBQTFCSjs7QUE2QkU7RUFDRSxrQkFBQTtBQTFCSjs7QUE2QkU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTNCSjs7QUErQkU7RUFDRSxpREFBQTtBQTVCSjs7QUErQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUE1Qko7O0FBb0NRO0VBR0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQW5DWjs7QUFzQ1k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFwQ2hCOztBQXNDZ0I7RUFDSSxlQUFBO0FBcENwQjs7QUF1Q2dCO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBckNwQjs7QUEwQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXhDaEI7O0FBMENnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBeENwQjs7QUE2Q1E7RUFDSSxhQUFBO0VBRUEsdUNBQUE7RUFDQSwwQ0FBQTtBQTVDWjs7QUFrREU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBL0NKOztBQW1ERTtFQUNFLFlBQUE7RUFJQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUFuREo7O0FBcURFO0VBQ0UsWUFBQTtFQUNDLFlBQUE7RUFDRCxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQWxESjs7QUE4RUU7RUFDRSxZQUFBO0VBQ0EsbUNBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FBNUVKOztBQTZFSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBM0VOIiwiZmlsZSI6InNjcmVhbmluZy1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVjYXJkLWxheW91dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAlYmFzZS1sYXlvdXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpemUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1hbGlnbiB7XHJcbiAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgXHJcbiAgICAuY2FyZHMge1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7IHNlY29uZGF5LWNvbG9yXHJcbiAgICAgICAgLmNsdXN0ZXItZGVzaWduIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1sZWZ0KTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAgICAgICAgIC8vIG1hcmdpbjogMTJweCAwO1xyXG4gICAgICAgICAgICAvLyBtYXJnaW46IDE2cHg7XHJcbiAgICAgICAgICAgIC5jbHVzdGVyLXRleHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OUI3O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuaWNvbi1vdXRlciB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgLmljb24taW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlvbi1jYXJkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlvbi1jYXJkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLy8gJWNhcmQtbGF5b3V0e1xyXG4gIC8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vICAgICBtYXJnaW46IDIwcHg7XHJcbiAgLy8gICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgLy8gICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIC5zY2hvb2xuYW1lcyB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICBib3JkZXI6IDFweCByZ2IoMTg1LCAxODQsIDE4NCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMjgsIDIyOCk7XHJcbiAgICA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuYm94Omhvc3Qge1xyXG4gICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjNTMyMDQ0KTtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM1MjUyNTI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2FyZC1hbGlnbiB7XHJcbiAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICBcclxuICAgIC5jYXJkcyB7XHJcbiAgICAgICAgLmNhcmQtZGVzaWduIHtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiBweDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM4QjY2QjM7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gIFxyXG4gICAgICAgICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgLnRvdGFsQ291bnRMYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgLnNjaG9vbG5hbWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmltYWdlLW91dGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItbGVmdDogNnB4IHNvbGlkIGRhcmtibHVlO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zdHlsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuICAuZG93bmxvYWR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBib3JkZXI6IDJweCAjOEI2NkIzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlclxyXG4gIH1cclxuICBcclxuICAvLyAuaGVhZCB7XHJcbiAgLy8gICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIC8vICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gaW9uLWNvbCBwIHtcclxuICAvLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIC8vIH1cclxuICBcclxuICAvLyBoNSB7XHJcbiAgLy8gICBjb2xvcjogZ3JlZW47XHJcbiAgLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gLnBvcGNhcmQge1xyXG4gIC8vICAgcGFkZGluZzogMjBweDtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgLy8gfVxyXG4gIC8vIGlvbi1iYWNrZHJvcCB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICAvLyAuY2hlY2tib3h7XHJcbiAgLy8gICAtLWNoZWNrbWFyay1jb2xvcjp3aGl0ZTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmljb24tb3V0ZXIge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAuaWNvbi1pbm5lcntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ 88884:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/screaning-menu/screaning-menu.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar text-wrap>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <!-- <ion-title class=\"pt-15\">{{schName}}</ion-title> -->\r\n    <ion-title class=\"pt-15\" text-wrap>{{schlName}}</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards\" *ngFor=\"let menuItem of assessmentMenuList;let i = index\">\r\n      <!-- {{mode}} : mode {{menuItem.value}} : menuItem -->\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"navigateStudents(menuItem.value)\"\r\n        [ngStyle]=\"{'background': menuItem.value ? 'var(--seconday-color-change)' : '#E9E9E9'}\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"schoolnames\"\r\n            [ngStyle]=\"{'background': menuItem.value  ? 'var(--seconday-color-change)' : '#E9E9E9', 'color': (mode == 'DarkMode' && menuItem.value != '1') ? '#4c4a4a' : (mode == 'DarkMode' && menuItem.value == '1') ? 'var(--primary-text-color)' : '#4c4a4a'}\">\r\n            {{menuItem.label}} </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src={{menuItem.img}} />\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn-phase2_screaning-menu_screaning-menu_module_ts-es2015.js.map