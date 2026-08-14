(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuiyakamlibrary_vasipuiyakamlibrary_module_ts"],{

/***/ 25952:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamlibrary/vasipuiyakamlibrary-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamlibraryPageRoutingModule": function() { return /* binding */ VasipuiyakamlibraryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vasipuiyakamlibrary_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuiyakamlibrary.page */ 56535);




const routes = [
    {
        path: '',
        component: _vasipuiyakamlibrary_page__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamlibraryPage
    }
];
let VasipuiyakamlibraryPageRoutingModule = class VasipuiyakamlibraryPageRoutingModule {
};
VasipuiyakamlibraryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VasipuiyakamlibraryPageRoutingModule);



/***/ }),

/***/ 63628:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamlibrary/vasipuiyakamlibrary.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamlibraryPageModule": function() { return /* binding */ VasipuiyakamlibraryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vasipuiyakamlibrary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuiyakamlibrary-routing.module */ 25952);
/* harmony import */ var _vasipuiyakamlibrary_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuiyakamlibrary.page */ 56535);







let VasipuiyakamlibraryPageModule = class VasipuiyakamlibraryPageModule {
};
VasipuiyakamlibraryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vasipuiyakamlibrary_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamlibraryPageRoutingModule
        ],
        declarations: [_vasipuiyakamlibrary_page__WEBPACK_IMPORTED_MODULE_1__.VasipuiyakamlibraryPage]
    })
], VasipuiyakamlibraryPageModule);



/***/ }),

/***/ 56535:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamlibrary/vasipuiyakamlibrary.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamlibraryPage": function() { return /* binding */ VasipuiyakamlibraryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vasipuiyakamlibrary_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vasipuiyakamlibrary.page.html */ 10018);
/* harmony import */ var _vasipuiyakamlibrary_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuiyakamlibrary.page.scss */ 44637);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);












let VasipuiyakamlibraryPage = class VasipuiyakamlibraryPage {
    constructor(route, router, sqliteDB, upload, alertService, http, usersessionService, NetworkService, loading) {
        this.route = route;
        this.router = router;
        this.sqliteDB = sqliteDB;
        this.upload = upload;
        this.alertService = alertService;
        this.http = http;
        this.usersessionService = usersessionService;
        this.NetworkService = NetworkService;
        this.loading = loading;
        this.datatest = [];
        this.username = this.usersessionService.emis_username();
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.CycleId = this.routeData.queryParams.CycleId;
        this.InsertClsSec = this.routeData.queryParams.InsertClsSec;
        this.TotalClsSec = this.routeData.queryParams.TotalClsSec;
        var date = new Date();
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        this.currentDate = [year, month, day].join('-');
        this.localData();
        this.localbatchRecord();
        // setTimeout(() => {
        //   this.loading.dismiss();
        //   },3000);
    }
    callPhoneNumber(phoneNumber) {
        const telUrl = 'tel:' + phoneNumber;
        window.open(telUrl, '_system');
    }
    navigateBack() {
        this.router.navigate(['/tabs/vasipu-iyakam'], { queryParams: { "CycleId": this.CycleId, "InsertClsSec": this.InsertClsSec, "TotalClsSec": this.TotalClsSec } });
        // this.router.navigate(['/tabs/vasipu-iyakam']);
    }
    localData() {
        let query = 'SELECT * FROM vasipuIyakKamLibrary' +
            ' WHERE UserId = "' + this.username + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.schoolListData = [];
                this.schoolListData = this.dataList.filter(x => x.UserId == this.username);
                console.log("in local");
            }
            else {
                this.getServerData();
                // this.checkNetwork('1','')
                console.log("in json");
            }
        });
    }
    getServerData() {
        this.schoolListData = [];
        fetch('https://d1wpyxz35bzzz4.cloudfront.net/vasipu_iyakam_user_mapping_school_list_stage.json').then(res => res.json()).then(manage => {
            const final = manage.data.map(row => {
                const combinedRow = {};
                manage.columns.forEach((key, index) => { combinedRow[key] = row[index]; });
                return combinedRow;
            });
            this.insertLocalData(final);
            this.schoolListData = final.filter(x => x.UserId == this.username);
        });
    }
    insertLocalData(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO vasipuIyakKamLibrary VALUES (?,?,?,?,?,?,?,?,?)",
                [null, element.MobileNo, element.SchlId, element.SchlName, element.SchlUdise,
                    element.UserId, element.UserName, element.district_id, element.district_name]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("school list LocalData Stored Locally");
        });
    }
    localStudentData(schoolid, schoolName) {
        this.router.navigate(['/tabs/vasipu-iyakam/vi-session'], { queryParams: { "schoolId": schoolid, "userID": this.username, "schoolName": schoolName, "CycleId": this.CycleId, "InsertClsSec": this.InsertClsSec } });
        // this.router.navigate(['/tabs/vasipu-iyakam/vi-session'], { queryParams: { "schoolId": schoolid, "userID": this.username,"schoolName": schoolName} });
    }
    localDataStudent(schoolId, SchlName) {
        this.loading.show();
        let query = 'SELECT * FROM VIStudenData' +
            ' WHERE RP_Id = ' + this.username + ' AND schoolId = ' + schoolId;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                console.log("in local");
                this.localStudentData(schoolId, SchlName);
            }
            else {
                this.studentData(schoolId, SchlName);
                // this.checkNetwork('2',schoolId)
                console.log("in json");
            }
        });
    }
    studentData(schoolId, SchlName) {
        let data;
        this.checkNetwork();
        fetch('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_diff_lang_med_' + schoolId + '_1.json').then(res => res.json()).then(manage => {
            console.log("in Server");
            if (manage.studentlist) {
                data = manage.studentlist;
                this.insertLocalDataStudent(manage.studentlist, schoolId, SchlName);
            }
            else {
                this.alertService.error("No Network");
            }
        });
    }
    insertLocalDataStudent(elementData, schoolId, SchlName) {
        let query = 'SELECT * FROM VIStudenData' +
            ' WHERE RP_Id = ' + this.username + ' AND schoolId = ' + schoolId;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length == 0) {
                let insertRows = [];
                elementData.forEach(element => {
                    insertRows.push([
                        "INSERT INTO VIStudenData VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                        [null, element.class_section, element.class_studying_id, element.dob, element.gender,
                            element.name, element.phone_number, element.unique_id_no, element.user_id, this.username, schoolId, '', '', '', '', this.currentDate, 0]
                    ]);
                });
                this.sqliteDB.bulkInsert(insertRows).then((result) => {
                    console.info("LocalData Stored student Locally");
                    this.localStudentData(schoolId, SchlName);
                });
            }
        });
    }
    checkNetwork() {
        if (this.NetworkService.getCurrentNetworkStatus() == 0) {
            console.log("online");
        }
        else {
            this.alertService.error("Ensure that your internet connection is stable");
            console.log("offline");
            this.navigateBack();
        }
    }
    localbatchRecord() {
        let query = 'SELECT * FROM VIStatusbatchDatas';
        //  +
        // ' WHERE ActiveDate = ' + this.currentDate;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataListbatch = [];
                this.batchRecord = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataListbatch.push(data.rows.item(i));
                }
                this.batchRecord = this.dataListbatch.filter(item => item.ActiveDate == this.currentDate);
                // console.log("batchRecord Local",this.batchRecord)
                if (this.batchRecord.length == 0) {
                    this.deleteBatch();
                }
            }
            else {
                this.deleteBatch();
            }
        });
    }
    deleteBatch() {
        let deleteQuery1 = 'DELETE FROM VIStatusbatchDatas';
        let deleteQuery3 = 'DELETE FROM VasipuIStatusDetail';
        this.sqliteDB.executeQuery(deleteQuery1).then((result1) => {
            this.sqliteDB.executeQuery(deleteQuery3).then((result2) => {
                console.log(result1, "result");
            });
        });
    }
};
VasipuiyakamlibraryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService }
];
VasipuiyakamlibraryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-vasipuiyakamlibrary',
        template: _raw_loader_vasipuiyakamlibrary_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vasipuiyakamlibrary_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VasipuiyakamlibraryPage);



/***/ }),

/***/ 44637:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamlibrary/vasipuiyakamlibrary.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-bg {\n  background: url(\"/assets/images/vasipuiyagam/inraiyavaasipuiyakkam_banner_image.svg\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 35%;\n}\n\nion-col {\n  text-align: center;\n}\n\n.corner {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-right: 1px solid;\n  align-self: center;\n}\n\n.cardhead {\n  padding: 7px;\n}\n\n.corner-head {\n  border-right: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdWl5YWthbWxpYnJhcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csbUhBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtBQUNKIiwiZmlsZSI6InZhc2lwdWl5YWthbWxpYnJhcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5oZWFkZXItYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3Zhc2lwdWl5YWdhbS9pbnJhaXlhdmFhc2lwdWl5YWtrYW1fYmFubmVyX2ltYWdlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgfSBcclxuXHJcbiAgaW9uLWNvbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29ybmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkaGVhZCB7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgfVxyXG5cclxuICAuY29ybmVyLWhlYWQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 10018:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuiyakamlibrary/vasipuiyakamlibrary.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>இன்றைய வாசிப்பு இயக்கம் \r\n      <div style=\"padding-top: 2px;font-size: small;\">{{username}}</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"header-bg\">\r\n    <ion-col size=\"12\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-card class=\"newsecondary cardhead\">\r\n    <ion-row>\r\n      <ion-col class=\"corner-head\" size=\"5\"> School Name\r\n      </ion-col>\r\n      <ion-col class=\"corner-head\" size=\"4\"> Udise\r\n      </ion-col>\r\n      <ion-col size=\"3\"> HM contact\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card> \r\n \r\n  <ion-card *ngFor=\"let item of schoolListData\">\r\n    <ion-row>\r\n      <ion-col size=\"5\" class=\"corner\" (click)=\"localDataStudent(item.SchlId,item.SchlName)\"> {{item.SchlName}}\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"corner\" (click)=\"localDataStudent(item.SchlId,item.SchlName)\"> {{item.SchlUdise}}\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"newsecondaryTex\" style=\"align-self: center;\"> \r\n        <ion-icon name=\"call\" (click)=\"callPhoneNumber(item.MobileNo)\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuiyakamlibrary_vasipuiyakamlibrary_module_ts-es2015.js.map