(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_stc-activity_module_ts"],{

/***/ 50913:
/*!*******************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-activity-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StcActivityPageRoutingModule": function() { return /* binding */ StcActivityPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stc_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stc-activity.page */ 33235);




const routes = [
    {
        path: '',
        component: _stc_activity_page__WEBPACK_IMPORTED_MODULE_0__.StcActivityPage
    },
];
let StcActivityPageRoutingModule = class StcActivityPageRoutingModule {
};
StcActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StcActivityPageRoutingModule);



/***/ }),

/***/ 953:
/*!***********************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-activity.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StcActivityPageModule": function() { return /* binding */ StcActivityPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _stc_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stc-activity-routing.module */ 50913);
/* harmony import */ var _stc_activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stc-activity.page */ 33235);







let StcActivityPageModule = class StcActivityPageModule {
};
StcActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stc_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.StcActivityPageRoutingModule
        ],
        declarations: [_stc_activity_page__WEBPACK_IMPORTED_MODULE_1__.StcActivityPage]
    })
], StcActivityPageModule);



/***/ }),

/***/ 33235:
/*!*********************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-activity.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StcActivityPage": function() { return /* binding */ StcActivityPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_stc_activity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stc-activity.page.html */ 70044);
/* harmony import */ var _stc_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stc-activity.page.scss */ 56182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/json.service */ 77232);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);








let StcActivityPage = class StcActivityPage {
    constructor(router, jsonService, route, sqlLite, ionStorage) {
        this.router = router;
        this.jsonService = jsonService;
        this.route = route;
        this.sqlLite = sqlLite;
        this.ionStorage = ionStorage;
        this.airArray = [];
        this.schoolList = [];
        this.districtList = [];
        this.blockList = [];
    }
    ngOnInit() {
        // this.getSchoolList();
        this.getDistBlk();
        this.getStateList();
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe((params) => {
            this.Type = params['Type'];
            this.airArray = [];
            if (this.Type == 1) {
                this.airArray.push({
                    icon: "assets/icon/EV_Profile.svg",
                    name: "Center Name",
                    url: "/tabs/center-details",
                }, {
                    icon: "assets/icon/Center_Profile.svg",
                    name: "Staff Details",
                    url: "/tabs/stc-staff-details",
                }, {
                    icon: "assets/icon/Student_Profile.svg",
                    name: "Student Details",
                    url: "/tabs/stc-student-details",
                });
            }
            if (this.Type == 2) {
                this.airArray.push({
                    icon: "assets/icon/EV_Profile.svg",
                    name: "Special Training Centre details ",
                    url: "/tabs/center-details",
                }, {
                    icon: "assets/icon/Center_Profile.svg",
                    name: "Staff Details",
                    url: "/tabs/stc-staff-details",
                }, {
                    icon: "assets/icon/Student_Profile.svg",
                    name: "Student Details",
                    url: "/tabs/stc-student-details",
                });
            }
        });
    }
    goToMenu(item) {
        this.router.navigate([item.url], { queryParams: { Type: this.Type } });
    }
    navigateBack() {
        this.router.navigate(['/tabs/stc-dashboard'], { queryParams: { Type: this.Type } });
    }
    getSchoolList() {
        this.ionStorage.getData('schoolList').then(res => {
            if (res) { }
            else {
                this.jsonService.schoolList().subscribe(res => {
                    if (res) {
                        this.schoolList = [];
                        this.schoolList = res[0];
                        this.ionStorage.removeKey('schoolList').then(res => {
                            this.ionStorage.insertData_Replace('schoolList', this.schoolList);
                        });
                        this.schoolList.forEach(res => {
                            if (this.districtList.length > 0) {
                                let len = this.districtList.filter(val => val.district_id == res.district_id);
                                if (len.length > 0) { }
                                else {
                                    this.districtList.push({ 'district_id': res.district_id, 'district_name': res.district_name });
                                }
                            }
                            else {
                                this.districtList.push({ 'district_id': res.district_id, 'district_name': res.district_name });
                            }
                        });
                        this.schoolList.forEach(res => {
                            if (this.blockList.length > 0) {
                                let len = this.blockList.filter(val => val.block_id == res.block_id);
                                if (len.length > 0) { }
                                else {
                                    this.blockList.push({ 'block_id': res.block_id, block_name: res.block_name.toUpperCase(), 'district_id': res.district_id, 'district_name': res.district_name });
                                }
                            }
                            else {
                                this.blockList.push({ 'block_id': res.block_id, block_name: res.block_name.toUpperCase(), 'district_id': res.district_id, 'district_name': res.district_name });
                            }
                        });
                        this.ionStorage.removeKey('districtList').then(res => {
                            this.ionStorage.insertData_Replace('districtList', this.districtList);
                        });
                        this.ionStorage.removeKey('blockList').then(res => {
                            this.ionStorage.insertData_Replace('blockList', this.blockList);
                        });
                    }
                });
            }
        });
    }
    getDistBlk() {
        this.ionStorage.getData('blockList').then(res => {
            if (res) { }
            else {
                this.jsonService.DistBlkList().subscribe(res => {
                    if (res) {
                        this.blockList = res[0].schoolnew_dist;
                        this.ionStorage.removeKey('blockList').then(res => {
                            this.ionStorage.insertData_Replace('blockList', this.blockList);
                        });
                        this.blockList.forEach(res => {
                            if (this.districtList.length > 0) {
                                let len = this.districtList.filter(val => val.district_id == res.District_id);
                                if (len.length > 0) { }
                                else {
                                    this.districtList.push({ 'district_id': res.District_id, 'district_name': res.district_name });
                                }
                            }
                            else {
                                this.districtList.push({ 'district_id': res.District_id, 'district_name': res.district_name });
                            }
                        });
                        this.ionStorage.removeKey('districtList').then(res => {
                            this.ionStorage.insertData_Replace('districtList', this.districtList);
                        });
                    }
                });
            }
        });
    }
    getStateList() {
        this.ionStorage.getData('stateList').then(res => {
            if (res) { }
            else {
                this.jsonService.StateList().subscribe(res => {
                    if (res) {
                        this.stateList = res[0].baseapp_state;
                        this.languageList = res[0].schoolnew_medium;
                        this.ionStorage.removeKey('stateList').then(res => {
                            this.ionStorage.insertData_Replace('stateList', this.stateList);
                        });
                        this.ionStorage.removeKey('languageList').then(res => {
                            this.ionStorage.insertData_Replace('languageList', this.languageList);
                        });
                    }
                });
            }
        });
    }
};
StcActivityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_3__.JsonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService }
];
StcActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stc-activity',
        template: _raw_loader_stc_activity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stc_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StcActivityPage);



/***/ }),

/***/ 56182:
/*!***********************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-activity.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-menu {\n  border: 1px solid #c7c7c7;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: auto 10px;\n}\n\n.menu-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  padding: 0px;\n  margin: 10px auto;\n}\n\n.menuList {\n  margin: 5px;\n  border: 1px solid #BEBEBE;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.divList {\n  border: 1px solid #630094;\n  padding: 5px 10px;\n  border-radius: 50px;\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0Yy1hY3Rpdml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3RjLWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctbWVudSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG59XHJcblxyXG4ubWVudS10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5tZW51TGlzdHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JFQkVCRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZMaXN0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYzMDA5NDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4vLyAucm93LWhlYWR7XHJcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M3YzdjNztcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4vLyB9XHJcblxyXG4vLyAuYm9yZGVyQ3Nze1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M3YzdjNztcclxuLy8gfSJdfQ== */");

/***/ }),

/***/ 70044:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/stc-activity.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{Type == 1 ? 'Tamil Mozhi Karpom' : 'RSTC'}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"row-head\">\r\n    <ion-col *ngFor=\"let item of airArray; let i=index\" class=\"menuList\">\r\n      <ion-row (click)=\"goToMenu(item)\">\r\n        <div class=\"divList\">\r\n          <img src=\"{{item.icon}}\" style=\"margin: 10px auto;width: 44px;\r\n          height: 33px;\">\r\n        </div>\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"newsecondaryTex\">{{item.name}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stc-activity_stc-activity_module_ts-es2015.js.map