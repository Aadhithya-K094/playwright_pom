(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_school-zone_school-zone_module_ts"],{

/***/ 40292:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stem_new/school-zone/school-zone-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolZonePageRoutingModule": function() { return /* binding */ SchoolZonePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _school_zone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-zone.page */ 55990);




const routes = [
    {
        path: '',
        component: _school_zone_page__WEBPACK_IMPORTED_MODULE_0__.SchoolZonePage
    }
];
let SchoolZonePageRoutingModule = class SchoolZonePageRoutingModule {
};
SchoolZonePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchoolZonePageRoutingModule);



/***/ }),

/***/ 62957:
/*!******************************************************************!*\
  !*** ./src/app/pages/stem_new/school-zone/school-zone.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolZonePageModule": function() { return /* binding */ SchoolZonePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _school_zone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-zone-routing.module */ 40292);
/* harmony import */ var _school_zone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-zone.page */ 55990);







let SchoolZonePageModule = class SchoolZonePageModule {
};
SchoolZonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _school_zone_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolZonePageRoutingModule
        ],
        declarations: [_school_zone_page__WEBPACK_IMPORTED_MODULE_1__.SchoolZonePage]
    })
], SchoolZonePageModule);



/***/ }),

/***/ 55990:
/*!****************************************************************!*\
  !*** ./src/app/pages/stem_new/school-zone/school-zone.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolZonePage": function() { return /* binding */ SchoolZonePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_school_zone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./school-zone.page.html */ 24281);
/* harmony import */ var _school_zone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-zone.page.scss */ 27004);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _class_sec_list_class_sec_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../class-sec-list/class-sec-list.page */ 15907);












let SchoolZonePage = class SchoolZonePage {
    constructor(router, sqliteDB, userService, upload, http, usersessionService, alertController, modalCtrl) {
        this.router = router;
        this.sqliteDB = sqliteDB;
        this.userService = userService;
        this.upload = upload;
        this.http = http;
        this.usersessionService = usersessionService;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.username = this.usersessionService.emis_user_id();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // this.getServerData()
        this.localData();
    }
    navigateBack() {
        this.router.navigate(['/tabs/stem-dashboard']);
    }
    localData() {
        let query = 'SELECT * FROM schlZonedetails' +
            ' WHERE BlkId = "' + this.username + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.schoolListData = [];
                this.schoolListData = this.dataList;
            }
            else {
                this.getServerData();
            }
        });
    }
    getServerData() {
        this.schoolListData = [];
        this.userService.getschoolZoneDetails().subscribe((response) => {
            this.schoolListData = response.result;
            this.insertLocalData(this.schoolListData);
        });
    }
    insertLocalData(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO schlZonedetails VALUES (?,?,?,?,?,?,?)",
                [null, this.username, element.BlkName, element.SchlId, element.SchlName,
                    element.UdiseCode, element.MobileNo]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored Locally");
        });
    }
    localStudentData(item) {
        let query = 'SELECT * FROM AllStemStudentslists' +
            ' WHERE SchlId = "' + item + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                console.log("local json");
                this.pageImage(item, '1');
            }
            else {
                console.log("server json");
                this.studentData(item);
            }
        });
    }
    studentData(item) {
        var bucketName = "renewalapplicationemis";
        var filename = "middle_school_profile_info_data_" + item + ".json";
        let expiry = 1800;
        this.upload.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                this.http.get(result.url).subscribe((data) => {
                    this.Data = data;
                    this.insertStudentLocalData(data.studentlist, item);
                    // this.pageImage(item,'2')
                });
            }
        });
    }
    insertStudentLocalData(elementData, item) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO AllStemStudentslists VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                [null, item, element.class_section, element.class_studying_id, element.dob, element.gender, element.group_code, element.id, element.name, element.phone_number, element.user_id]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            this.pageImage(item, '2');
        });
    }
    pageImage(schoolid, local) {
        this.router.navigate(['/tabs/otp-page'], { queryParams: { "schoolId": schoolid, "local": local } });
    }
    viewData(schId) {
        this.schoolClassData = [];
        this.userService.getclassDetails(schId).subscribe((response) => {
            this.schoolClassData = response.result;
            this.schoolAlert();
        });
    }
    insertLocalData1(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO schlZonedetails VALUES (?,?,?,?,?,?,?)",
                [null, this.username, element.BlkName, element.SchlId, element.SchlName,
                    element.UdiseCode, element.MobileNo]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored Locally");
        });
    }
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _class_sec_list_class_sec_list_page__WEBPACK_IMPORTED_MODULE_6__.ClassSecListPage,
                componentProps: { schoolClassData: this.schoolClassData },
                cssClass: 'view-image-modal'
            });
            yield modal.present();
        });
    }
};
SchoolZonePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController }
];
SchoolZonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-school-zone',
        template: _raw_loader_school_zone_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_school_zone_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchoolZonePage);



/***/ }),

/***/ 27004:
/*!******************************************************************!*\
  !*** ./src/app/pages/stem_new/school-zone/school-zone.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC16b25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzY2hvb2wtem9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhcmQtc3RlbS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH0gXHJcbiAgXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I4NTdmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSAiXX0= */");

/***/ }),

/***/ 24281:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/school-zone/school-zone.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <div class=\"login-bg\">\r\n    <div>\r\n      <ion-buttons slot=\"start\" class=\"back-icon\">\r\n        <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n        </ion-icon>\r\n        <ion-title style=\"margin-top: 2%;font-size: 11px;\">Your School Zone</ion-title>\r\n      </ion-buttons>\r\n    </div>\r\n\r\n    <ion-row class=\"card-item\">\r\n\r\n      <ion-col size=\"12\" style=\"padding-top: 5%;\">\r\n        <ion-card style=\"color: #6B4DC9;font-weight: bolder;padding: 5px\">\r\n          <ion-row>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\">School name</ion-col>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\">UDISE</ion-col>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\">Contact</ion-col>\r\n            <ion-col size=\"1.5\" style=\"text-align: center;\">View</ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"padding: 3px\" *ngFor=\"let item of schoolListData\">\r\n          <ion-row >\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\" (click)=\"localStudentData(item.SchlId)\">\r\n              <div> {{item.SchlName}} </div>\r\n              <div style=\"font-size: small;\"> {{item.BlkName}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;align-self: center;\" (click)=\"localStudentData(item.SchlId)\">\r\n              <div> {{item.UdiseCode}} </div>\r\n            </ion-col> \r\n            <ion-col size=\"3.5\" style=\"text-align: center;align-self: center;\" (click)=\"localStudentData(item.SchlId)\">\r\n              <div> {{item.MobileNo}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" style=\"text-align: center;align-self: center;\" (click)=\"viewData(item.SchlId)\">\r\n              <ion-icon name=\"eye-outline\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row> \r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_school-zone_school-zone_module_ts-es2015.js.map