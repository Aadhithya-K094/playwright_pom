(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuclasslist_vasipuclasslist_module_ts"],{

/***/ 13421:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist-routing.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuclasslistPageRoutingModule": function() { return /* binding */ VasipuclasslistPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuclasslist.page */ 96350);




const routes = [
    {
        path: '',
        component: _vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_0__.VasipuclasslistPage
    }
];
let VasipuclasslistPageRoutingModule = class VasipuclasslistPageRoutingModule {
};
VasipuclasslistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VasipuclasslistPageRoutingModule);



/***/ }),

/***/ 32055:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuclasslistPageModule": function() { return /* binding */ VasipuclasslistPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vasipuclasslist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuclasslist-routing.module */ 13421);
/* harmony import */ var _vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuclasslist.page */ 96350);







let VasipuclasslistPageModule = class VasipuclasslistPageModule {
};
VasipuclasslistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vasipuclasslist_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuclasslistPageRoutingModule
        ],
        declarations: [_vasipuclasslist_page__WEBPACK_IMPORTED_MODULE_1__.VasipuclasslistPage]
    })
], VasipuclasslistPageModule);



/***/ }),

/***/ 96350:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.page.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuclasslistPage": function() { return /* binding */ VasipuclasslistPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vasipuclasslist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vasipuclasslist.page.html */ 76872);
/* harmony import */ var _vasipuclasslist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuclasslist.page.scss */ 15861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let VasipuclasslistPage = class VasipuclasslistPage {
    constructor(modalCtrl, navParams, userService, usersessionService, sqliteDB) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.usersessionService = usersessionService;
        this.sqliteDB = sqliteDB;
        this.fourth = false;
        this.sixth = false;
        this.username = this.usersessionService.emis_username();
        this.schoolClassData = this.navParams.get('schoolListData');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log(this.schoolClassData);
        this.localData();
    }
    closeModal() {
        this.modalCtrl.dismiss();
    }
    localData() {
        debugger;
        this.schoolRecord = [];
        this.dataList = [];
        this.fourTotal = 0;
        this.fiveTotal = 0;
        this.sixTotal = 0;
        this.sevenTotal = 0;
        this.eightTotal = 0;
        this.nineTotal = 0;
        let query = 'SELECT * FROM VISchool' +
            ' WHERE RP_Id = ' + this.username + ' AND schoolId = ' + this.schoolClassData[0].SchlId;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.schoolRecord = this.dataList;
                console.log(this.schoolRecord, "in local");
                this.fourTotal = this.dataList.filter(x => x.class_studying_id == 4).length;
                this.fiveTotal = this.dataList.filter(x => x.class_studying_id == 5).length;
                this.sixTotal = this.dataList.filter(x => x.class_studying_id == 6).length;
                this.sevenTotal = this.dataList.filter(x => x.class_studying_id == 7).length;
                this.eightTotal = this.dataList.filter(x => x.class_studying_id == 8).length;
                this.nineTotal = this.dataList.filter(x => x.class_studying_id == 9).length;
                console.log("in local");
            }
            else {
                this.getSchoolDetails();
            }
        });
    }
    getSchoolDetails() {
        this.schoolRecord = [];
        this.fourTotal = 0;
        this.fiveTotal = 0;
        this.sixTotal = 0;
        this.sevenTotal = 0;
        this.eightTotal = 0;
        this.nineTotal = 0;
        fetch('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + this.schoolClassData[0].SchlId + '_1.json').then(res => res.json()).then(manage => {
            console.log("in Server");
            this.schoolRecord = manage.studentlist;
            console.log(this.schoolRecord, "in Server");
            this.fourTotal = manage.studentlist.filter(x => x.class_studying_id == 4).length;
            this.fiveTotal = manage.studentlist.filter(x => x.class_studying_id == 5).length;
            this.sixTotal = manage.studentlist.filter(x => x.class_studying_id == 6).length;
            this.sevenTotal = manage.studentlist.filter(x => x.class_studying_id == 7).length;
            this.eightTotal = manage.studentlist.filter(x => x.class_studying_id == 8).length;
            this.nineTotal = manage.studentlist.filter(x => x.class_studying_id == 9).length;
            this.insertLocalData(manage.studentlist);
        });
    }
    insertLocalData(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO VISchool VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                [null, element.class_section, element.class_studying_id, element.dob, element.gender,
                    element.name, element.phone_number, element.unique_id_no, element.user_id, this.username, this.schoolClassData[0].SchlId]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored Locally");
        });
    }
};
VasipuclasslistPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService }
];
VasipuclasslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-vasipuclasslist',
        template: _raw_loader_vasipuclasslist_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vasipuclasslist_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VasipuclasslistPage);



/***/ }),

/***/ 15861:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.page.scss ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXNpcHVjbGFzc2xpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 76872:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuclasslist/vasipuclasslist.page.html ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">மாணவர்களின் எண்ணிக்கை</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-row class=\"card-item\" style=\"border: 1px solid; text-align: center;\">\r\n        <ion-col size=\"1.5\"> 4th </ion-col>\r\n        <ion-col size=\"1.5\"> 5th </ion-col>\r\n        <ion-col size=\"1.5\"> 6th </ion-col>\r\n        <ion-col size=\"1.5\"> 7th </ion-col>\r\n        <ion-col size=\"1.5\"> 8th </ion-col>\r\n        <ion-col size=\"1.5\"> 9th </ion-col>\r\n        <ion-col size=\"3\"> Total </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"card-item\" style=\"border: 1px solid; text-align: center;\">\r\n        <ion-col size=\"1.5\"> {{fourTotal}} </ion-col>   \r\n        <ion-col size=\"1.5\"> {{fiveTotal}} </ion-col>\r\n        <ion-col size=\"1.5\"> {{sixTotal }}</ion-col>\r\n        <ion-col size=\"1.5\"> {{sevenTotal}} </ion-col>\r\n        <ion-col size=\"1.5\"> {{eightTotal}} </ion-col>\r\n        <ion-col size=\"1.5\"> {{nineTotal}} </ion-col>\r\n        <ion-col size=\"3\"> {{fourTotal + fiveTotal + sixTotal + sevenTotal + eightTotal + nineTotal}} </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuclasslist_vasipuclasslist_module_ts-es2015.js.map