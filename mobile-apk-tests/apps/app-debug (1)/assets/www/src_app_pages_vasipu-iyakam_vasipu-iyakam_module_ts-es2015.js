(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipu-iyakam_module_ts"],{

/***/ 54371:
/*!*********************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuIyakamPageRoutingModule": function() { return /* binding */ VasipuIyakamPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipu-iyakam.page */ 68035);




const routes = [
    {
        path: '',
        component: _vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_0__.VasipuIyakamPage
    },
    {
        path: 'vi-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vasipu-iyakam_vasipuiyakamprofile_vasipuiyakamprofile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vasipuiyakamprofile/vasipuiyakamprofile.module */ 8681)).then(m => m.VasipuiyakamprofilePageModule)
    },
    {
        path: 'vi-library',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vasipu-iyakam_vasipuiyakamlibrary_vasipuiyakamlibrary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vasipuiyakamlibrary/vasipuiyakamlibrary.module */ 63628)).then(m => m.VasipuiyakamlibraryPageModule)
    },
    {
        path: 'vi-otp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vasipu-iyakam_vasipuotp_vasipuotp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vasipuotp/vasipuotp.module */ 88910)).then(m => m.VasipuotpPageModule)
    },
    {
        path: 'vi-session',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_vasipu-iyakam_instruction_instruction_page_ts"), __webpack_require__.e("src_app_pages_vasipu-iyakam_vasipuiyakamsession_vasipuiyakamsession_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vasipuiyakamsession/vasipuiyakamsession.module */ 65266)).then(m => m.VasipuiyakamsessionPageModule)
    },
    {
        path: 'vi-classlist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vasipu-iyakam_vasipuclasslist_vasipuclasslist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vasipuclasslist/vasipuclasslist.module */ 32055)).then(m => m.VasipuclasslistPageModule)
    },
    {
        path: 'vi-photoupload',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vasipu-iyakam_photoupload_photoupload_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./photoupload/photoupload.module */ 17464)).then(m => m.PhotouploadPageModule)
    },
    {
        path: 'vi-instruction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_vasipu-iyakam_instruction_instruction_page_ts"), __webpack_require__.e("src_app_pages_vasipu-iyakam_instruction_instruction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./instruction/instruction.module */ 7101)).then(m => m.InstructionPageModule)
    },
    {
        path: 'vasipuiyakam-report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vasipu-iyakam_vasipuiyakam-report_vasipuiyakam-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vasipuiyakam-report/vasipuiyakam-report.module */ 19068)).then(m => m.VasipuiyakamReportPageModule)
    }
];
let VasipuIyakamPageRoutingModule = class VasipuIyakamPageRoutingModule {
};
VasipuIyakamPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VasipuIyakamPageRoutingModule);



/***/ }),

/***/ 56575:
/*!*************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuIyakamPageModule": function() { return /* binding */ VasipuIyakamPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vasipu_iyakam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipu-iyakam-routing.module */ 54371);
/* harmony import */ var _vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipu-iyakam.page */ 68035);







let VasipuIyakamPageModule = class VasipuIyakamPageModule {
};
VasipuIyakamPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vasipu_iyakam_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuIyakamPageRoutingModule
        ],
        declarations: [_vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_1__.VasipuIyakamPage]
    })
], VasipuIyakamPageModule);



/***/ }),

/***/ 68035:
/*!***********************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuIyakamPage": function() { return /* binding */ VasipuIyakamPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vasipu_iyakam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vasipu-iyakam.page.html */ 8310);
/* harmony import */ var _vasipu_iyakam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipu-iyakam.page.scss */ 88723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);










let VasipuIyakamPage = class VasipuIyakamPage {
    constructor(router, userService, navCtrl, usersessionService, sqliteDB, alertController, alertCtrl, loading) {
        this.router = router;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.usersessionService = usersessionService;
        this.sqliteDB = sqliteDB;
        this.alertController = alertController;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.saveData = [];
        this.sessionEmisUsertype = this.usersessionService.emis_usertype();
        this.emis_username = this.usersessionService.emis_username();
    }
    ngOnInit() { }
    ionViewDidEnter() { }
    profile() {
        this.loading.show();
        this.router.navigate(['/tabs/vasipu-iyakam/vi-profile']);
    }
    report() {
        this.loading.show();
        this.router.navigate(['/tabs/vasipu-iyakam/vasipuiyakam-report']);
    }
    library() {
        this.loading.show();
        this.router.navigate(['/tabs/vasipu-iyakam/vi-library'], { queryParams: { "CycleId": this.CycleId, "InsertClsSec": this.InsertClsSec, "TotalClsSec": this.TotalClsSec } });
        // this.router.navigate(['/tabs/vasipu-iyakam/vi-library']);
    }
    navigateBack() {
        this.router.navigate(['/tabs/home']);
    }
    localJSONDetails() {
        let query = 'SELECT * FROM VIClassData' +
            ' WHERE UserId = "' + this.emis_username + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.classJsonData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.classJsonData.push(data.rows.item(i));
                }
                this.InsertClsSec = this.totalsecData[0].InsertClsSec;
                // console.log(this.totalsecData, this.totalsecData[0].InsertClsSec, this.classJsonData, this.classJsonData.length);
                if (parseInt(this.totalsecData[0].TotalClsSec) <= this.classJsonData.length) {
                    console.log("delete");
                    this.deleteQuery();
                }
                else {
                    this.library();
                }
            }
            else {
                console.log(this.classJsonData, "No Data");
                this.library();
            }
        });
    }
    localTotalDetails() {
        let query = 'SELECT * FROM VIStatusClsSecData' +
            ' WHERE UserId = "' + this.emis_username + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.localJSONDetails();
                this.totalsecData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.totalsecData.push(data.rows.item(i));
                }
                // console.log(this.totalsecData, "this.totalsecData");
                this.InsertClsSec = this.totalsecData[0].InsertClsSec;
                if (this.totalsecData[0].CycleId == null) {
                    this.CycleId = 1;
                }
                else {
                    this.CycleId = this.totalsecData[0].CycleId;
                }
                this.TotalClsSec = this.totalsecData[0].TotalClsSec;
            }
            else {
                this.InsertClsSec = 0;
                this.CycleId = 1;
                this.library();
                // console.log(this.classJsonData, "this.totalsecData No Data");
            }
        });
    }
    deleteQuery() {
        this.saveData = [];
        let query = 'SELECT * FROM VasipuIStatusDetail';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.saveData.push(data.rows.item(i));
                }
                let filter = this.saveData.filter(item => item.status == 2);
                let filter1 = this.saveData.filter(item => item.status != 3);
                if (filter1.length == 0) {
                    if (filter.length != 0) {
                        this.schoolAlert();
                    }
                    else {
                        this.delete();
                    }
                }
                else {
                    if (filter.length != 0) {
                        this.schoolAlert();
                    }
                    else {
                        this.library();
                    }
                }
            }
            else {
                this.delete();
            }
        });
    }
    delete() {
        let deleteQuery1 = 'DELETE FROM VIStatusbatchDatas WHERE userid = ' + this.emis_username;
        let deleteQuery2 = 'DELETE FROM VIClassData WHERE UserId =' + this.emis_username;
        let deleteQuery3 = 'DELETE FROM VasipuIStatusDetail';
        let deleteQuery4 = 'DELETE FROM VIBatchData';
        let deleteQuery5 = 'DELETE FROM VIStatusClsSecData';
        let deleteQuery6 = 'DELETE FROM VIStudenData';
        this.sqliteDB.executeQuery(deleteQuery1).then((result1) => {
            this.sqliteDB.executeQuery(deleteQuery2).then((result2) => {
                this.sqliteDB.executeQuery(deleteQuery3).then((result3) => {
                    this.sqliteDB.executeQuery(deleteQuery4).then((result3) => {
                        this.sqliteDB.executeQuery(deleteQuery5).then((result3) => {
                            this.sqliteDB.executeQuery(deleteQuery6).then((result3) => {
                                // console.log(result1, "result");
                                this.library();
                            });
                        });
                    });
                });
            });
        });
    }
    //pop
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Please turn on your internet',
                message: 'அடுத்த சுற்றை துவங்க வேண்டுமெனில், உங்களின் தற்போதைய Batch தரவுகளை Server -ல் சேமிக்க வேண்டும். தயவு செய்து Internet Connection-ஐ ON செய்யவும். ',
                buttons: [
                    // {
                    //   text: 'Cancel',
                    //   role: 'cancel',
                    //   cssClass: 'cancel_click',
                    // },
                    {
                        cssClass: 'cancel_click',
                        text: 'OK',
                        handler: data => {
                            this.navigateBack();
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
};
VasipuIyakamPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService }
];
VasipuIyakamPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-vasipu-iyakam',
        template: _raw_loader_vasipu_iyakam_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vasipu_iyakam_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VasipuIyakamPage);



/***/ }),

/***/ 47224:
/*!***********************************************************!*\
  !*** ./src/app/services/tnvn/services/loading.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 100000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    show(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 1000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => {
            });
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 88723:
/*!*************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-menu {\n  border-right: 1px solid;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.new-menu1 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.new-menuRow {\n  padding: 5px;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  margin: 5%;\n}\n\n.menuTxt {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdS1peWFrYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoidmFzaXB1LWl5YWthbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW1lbnUge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubmV3LW1lbnUxIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm5ldy1tZW51Um93IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4ubWVudVR4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 8310:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipu-iyakam.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Select Catagory - {{emis_username}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row style=\"padding: 5px;margin-left: 5%;margin-top: 1%;\">\r\n    <ion-col size=\"12\" class=\"newprimaryTex\" style=\"text-align: left;\">\r\n      <ion-label>Menus</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"new-menuRow\">\r\n    <ion-col size=\"4\" (click)=\"profile()\" class=\"new-menu\">\r\n      <ion-row>\r\n        <img src=\"/assets/images/vasipuiyagam/profile_icon.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text menuTxt\">\r\n          <ion-label class=\"newsecondaryTex\">கருத்தாளரின் விவரம்</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" (click)=\"localTotalDetails()\" class=\"new-menu\">\r\n      <ion-row>\r\n        <img src=\"/assets/images/vasipuiyagam/library_icon.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text menuTxt\">\r\n          <ion-label class=\"newsecondaryTex\">இன்றைய வாசிப்பு இயக்கம்</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" (click)=\"report()\" class=\"new-menu1\">\r\n      <ion-row>\r\n        <img src=\"/assets/images/vasipuiyagam/dashboard3.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text menuTxt\">\r\n          <ion-label class=\"newsecondaryTex\">இம்மாத வாசிப்பு இயக்கம்</ion-label>\r\n        </ion-col> \r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipu-iyakam_module_ts-es2015.js.map