(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-dashboard_primary-dashboard_module_ts"],{

/***/ 64717:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryDashboardPageRoutingModule": function() { return /* binding */ PrimaryDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _primary_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-dashboard.page */ 79414);




const routes = [
    {
        path: '',
        component: _primary_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryDashboardPage
    }
];
let PrimaryDashboardPageRoutingModule = class PrimaryDashboardPageRoutingModule {
};
PrimaryDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrimaryDashboardPageRoutingModule);



/***/ }),

/***/ 62311:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryDashboardPageModule": function() { return /* binding */ PrimaryDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _primary_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-dashboard-routing.module */ 64717);
/* harmony import */ var _primary_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-dashboard.page */ 79414);







let PrimaryDashboardPageModule = class PrimaryDashboardPageModule {
};
PrimaryDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _primary_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryDashboardPageRoutingModule
        ],
        declarations: [_primary_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryDashboardPage]
    })
], PrimaryDashboardPageModule);



/***/ }),

/***/ 79414:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryDashboardPage": function() { return /* binding */ PrimaryDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_primary_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./primary-dashboard.page.html */ 25837);
/* harmony import */ var _primary_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-dashboard.page.scss */ 64554);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);











let PrimaryDashboardPage = class PrimaryDashboardPage {
    constructor(router, route, userSessionService, utilityService, sqliteDB, alertController, alertService) {
        this.router = router;
        this.route = route;
        this.userSessionService = userSessionService;
        this.utilityService = utilityService;
        this.sqliteDB = sqliteDB;
        this.alertController = alertController;
        this.alertService = alertService;
        this.menuLists = [
            {
                id: 1,
                menu: 'General Questions',
                image: 'assets/icons/question.svg',
                server: 'assets/icons/sids/server_general.svg',
                url: '/tabs/primary-schooldata',
                sync: 1
            },
            {
                id: 2,
                menu: 'Building',
                image: 'assets/icons/Iconawesomebuilding.svg',
                server: 'assets/icons/Iconawesome-building.svg',
                url: '/tabs/primary-new-dashboard',
                sync: 1
            },
            {
                id: 3,
                menu: 'Common Spaces',
                image: 'assets/icons/sids/local_commanspace.svg',
                server: 'assets/icons/sids/server_commonspace.svg',
                url: '/tabs/primary-commonspaces',
                sync: 1
            }
        ];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US');
        this.filterGeneral = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.vistId = this.routeData.queryParams.vistId;
        this.udiseCode = this.utilityService.udiseCode;
        this.visitstatus = this.routeData.visitstatus;
        this.sessionUserName = this.userSessionService.emis_username();
        this.sessionTypeName = this.userSessionService.emis_usertype();
        this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        console.log("newSidsRoute", this.schoolId, this.vistId, this.sessionUserName, this.sessionTypeName);
        this.generalServerData();
        this.serverData();
        this.getBuilding();
        this.getFloor();
        this.getRoom();
    }
    navigateNext(item) {
        if (+item.id == 3) {
            if (this.serverDataBuilding && this.serverDataFloor && this.serverDataRoom && +this.menuLists[0].sync == 3) {
                this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
            }
            else {
                this.alertService.error("Please fill and sync the school and building questions");
            }
        }
        else {
            this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
        }
        // this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus':this.visitstatus }, skipLocationChange: false });
    }
    goToBack() {
    }
    serverData() {
        debugger;
        let query = 'SELECT * FROM sidsPrimaryCommonServer' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataListData.push(data.rows.item(i));
                }
                console.log('Server', dataListData);
                if (dataListData[0].Status == 3) {
                    this.menuLists[2].sync = 3;
                    this.serverDatas = true;
                }
                else {
                    this.checkLocalDB();
                }
            }
            else {
                this.serverDatas = false;
                console.log('Local');
                this.generalQuestionServer();
                // this.checkLocalDB();
                // this.getGeneralWater();
            }
        }).catch(err => console.log(err));
    }
    generalServerData() {
        debugger;
        let query = 'SELECT * FROM sidsPrimaryGeneralServer' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataListData.push(data.rows.item(i));
                }
                console.log('Server general', dataListData);
                if (dataListData[0].Status == 3) {
                    this.generalServer = true;
                    this.menuLists[0].sync = 3;
                }
                else {
                    this.checkLocalDBGeneral();
                }
            }
            else {
                this.generalServer = false;
                console.log('Local general');
                this.serverGeneralQues();
            }
        }).catch(err => console.log(err));
    }
    checkLocalDB() {
        let safety = 'SELECT * FROM sids_primary_safety_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let common = 'SELECT * FROM sids_primary_compoundwall_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let water = 'SELECT * FROM sids_primary_water_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let playground = 'SELECT * FROM sids_primary_playground_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        debugger;
        return this.sqliteDB.getDataLocalDB(safety).then(data => {
            if (data.rows.length > 0) {
                return this.sqliteDB.getDataLocalDB(common).then(data => {
                    if (data.rows.length > 0) {
                        this.commonSave = true;
                        return this.sqliteDB.getDataLocalDB(water).then(data => {
                            if (data.rows.length > 0) {
                                this.waterSave = true;
                                return this.sqliteDB.getDataLocalDB(playground).then(data => {
                                    if (data.rows.length > 0) {
                                        if (this.visitstatus == 2) {
                                            this.menuLists[2].sync = 3;
                                        }
                                        else {
                                            this.menuLists[2].sync = 2;
                                        }
                                        this.playgroundSave = true;
                                    }
                                    else {
                                        this.playgroundSave = false;
                                    }
                                });
                            }
                            else {
                                this.waterSave = false;
                            }
                        });
                    }
                    else {
                        this.commonSave = false;
                    }
                });
            }
            else {
                this.safetySave = true;
            }
        });
    }
    checkLocalDBGeneral() {
        let selectQuery = 'SELECT * FROM sids_primary_general_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(selectQuery).then(data => {
            if (data.rows.length > 0) {
                if (this.visitstatus == 2) {
                    this.menuLists[0].sync = 3;
                }
                else {
                    this.menuLists[0].sync = 2;
                }
            }
            else {
                this.generalServer = false;
            }
        });
    }
    getBuilding() {
        let query = 'SELECT * FROM sidsPrimaryBuildSavesDatas' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataListData.push(data.rows.item(i));
                }
                let filterBuilding = dataListData.filter(dd => +dd.Status != 3);
                if (filterBuilding.length > 0) {
                    this.serverDataBuilding = false;
                    if (+filterBuilding[0].Status == 2) {
                        this.menuLists[1].sync = 2;
                    }
                    else {
                        this.menuLists[1].sync = 1;
                    }
                }
                else {
                    this.serverDataBuilding = true;
                    this.menuLists[1].sync = 3;
                }
                console.log("Building IF", dataListData, this.serverDataBuilding);
            }
            else {
                this.serverDataBuilding = false;
                console.log("Building ELSE", data.rows);
                this.addBuildingServer();
            }
        });
    }
    getFloor() {
        let query = 'SELECT * FROM sidsPrimaryFloorSaveDatas' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataListData.push(data.rows.item(i));
                }
                let filterFloor = dataListData.filter(dd => +dd.Status != 3);
                if (filterFloor.length > 0) {
                    this.serverDataFloor = false;
                    if (+filterFloor[0].Status == 2) {
                        this.menuLists[1].sync = 2;
                    }
                    else {
                        this.menuLists[1].sync = 1;
                    }
                }
                else {
                    this.serverDataFloor = true;
                    this.menuLists[1].sync = 3;
                }
                console.log("Floor IF", dataListData, this.serverDataFloor);
            }
            else {
                this.serverDataFloor = false;
                this.addFloorServer();
                console.log("Floor ELSE", data.rows);
            }
        });
    }
    getRoom() {
        let query = 'SELECT * FROM sidsPrimaryRoomSaves' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataListData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataListData.push(data.rows.item(i));
                }
                let filterRoom = dataListData.filter(dd => +dd.Status != 3);
                if (filterRoom.length > 0) {
                    this.serverDataRoom = false;
                    if (+filterRoom[0].Status == 2) {
                        this.menuLists[1].sync = 2;
                    }
                    else {
                        this.menuLists[1].sync = 1;
                    }
                }
                else {
                    this.serverDataRoom = true;
                    this.menuLists[1].sync = 3;
                }
                console.log("Room IF", dataListData, this.serverDataRoom);
                if (this.serverDataBuilding && this.serverDataFloor && this.serverDataRoom) {
                    this.menuLists[1].sync = 3;
                }
                // if(!this.serverDataBuilding || !this.serverDataFloor || !this.serverDataRoom){
                //   this.menuLists[1].sync = 2;
                // }
            }
            else {
                console.log("Room ELSE", data.rows);
                this.serverDataRoom = false;
                this.addRoomServer();
            }
        });
    }
    finalSave() {
        if (this.generalServer) {
            if (this.serverDataBuilding && this.serverDataFloor && this.serverDataRoom) {
                if (this.serverDatas) {
                    this.schoolAlert();
                }
                else {
                    this.beforeSchoolAlert(3);
                }
            }
            else {
                // this.alertService.error("Please Sync Building Datas");
                this.beforeSchoolAlert(2);
            }
        }
        else {
            // this.alertService.error("Please Sync General Datas");
            this.beforeSchoolAlert(1);
        }
    }
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmation',
                // subHeader: 'Successfully Saved',
                message: ' Are you sure you want to submit the details?  ' + ' ' + ' Submit only if entire visit is over',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click',
                    },
                    {
                        cssClass: 'cancel_click',
                        text: 'Save',
                        handler: data => {
                            this.onFinalSave();
                            console.log("Complete Check");
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    onFinalSave() {
        let data = {
            "records": {
                "IndexId": this.vistId,
                "SchlId": this.schoolId,
                "VistUId": this.sessionUserName,
                "VistUTy": this.sessionTypeName,
                "VistDate": this.todayDateFormat,
                "VistStas": "2"
            }
        };
        this.utilityService.saveVisitSids(data).subscribe(res => {
            this.onAllDelete();
        });
    }
    onAllDelete() {
        let query = 'DELETE FROM  sidsPrimaryBuildingQuestion WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
        let query1 = 'DELETE FROM  sidsPrimaryFloorQuestion WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
        let query2 = 'DELETE FROM  newPrimaryRoomscommons WHERE SchlId =' + this.schoolId + ' AND VistId =' + this.vistId;
        let query3 = 'DELETE FROM  sidsPrimaryFloorSaveDatas WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
        let query4 = 'DELETE FROM  sids_primary_general_schooldata WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
        let query5 = 'DELETE FROM  sids_primary_playground_data WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
        let query6 = 'DELETE FROM  sids_primary_water_schooldata WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
        let query7 = 'DELETE FROM  sids_primary_compoundwall_data WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
        let query8 = 'DELETE FROM  sidsPrimaryRoomSaves WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
        let query9 = 'DELETE FROM  sidsPrimaryBuildSavesDatas WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
        let query10 = 'DELETE FROM  sidsPrimaryCommonServer WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
        let query11 = 'DELETE FROM  sids_primary_safety_data WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
        let query12 = 'DELETE FROM  sidsPrimaryGeneralServer WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            return this.sqliteDB.getDataLocalDB(query1).then(data => {
                return this.sqliteDB.getDataLocalDB(query2).then(data => {
                    return this.sqliteDB.getDataLocalDB(query3).then(data => {
                        return this.sqliteDB.getDataLocalDB(query4).then(data => {
                            return this.sqliteDB.getDataLocalDB(query5).then(data => {
                                return this.sqliteDB.getDataLocalDB(query6).then(data => {
                                    return this.sqliteDB.getDataLocalDB(query7).then(data => {
                                        return this.sqliteDB.getDataLocalDB(query8).then(data => {
                                            return this.sqliteDB.getDataLocalDB(query9).then(data => {
                                                return this.sqliteDB.getDataLocalDB(query10).then(data => {
                                                    return this.sqliteDB.getDataLocalDB(query11).then(data => {
                                                        return this.sqliteDB.getDataLocalDB(query12).then(data => {
                                                            console.log(data, "delete");
                                                            this.router.navigate(['/tabs/sids-dashboard']);
                                                            for (let i = 0; i < this.menuLists.length; i++) {
                                                                this.menuLists[i].sync = 1;
                                                            }
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
    goback() {
        this.router.navigate(['/tabs/primary-sids-school']);
    }
    beforeSchoolAlert(school) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: school == 1 ? 'General Question' : school == 2 ? "Building Question" : "Common Spaces",
                // subHeader: 'Successfully Saved',
                message: school == 1 ? ' Please Sync General Questions ' : school == 1 ? !this.serverDataBuilding ? 'Please Sync All Building Questions' : !this.serverDataFloor ? 'Please Sync All Floor Questions' : !this.serverDataRoom ? 'Please Sync All Room Questions' : 'Please Sync Building Questions' : "Please Sync Common Spaces",
                buttons: [
                    // {
                    //   text: 'Cancel',
                    //   role: 'cancel',
                    //   cssClass: 'cancel_click',
                    // },
                    {
                        cssClass: 'cancel_click',
                        text: 'Done',
                        handler: data => {
                            if (school == 1) {
                                this.router.navigate(['/tabs/primary-sids-schooldata'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
                            }
                            if (school == 2) {
                                this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
                            }
                            if (school == 3) {
                                this.router.navigate(['/tabs/primary-commonspaces'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
                            }
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    generalQuestionServer() {
        debugger;
        this.utilityService.SidsSchlGenrlInfoGet(this.vistId).subscribe(res => {
            if (res.dataStatus) {
                this.filterGeneral = res.result;
                console.log("filterGeneral", this.filterGeneral);
                this.checkLocalsafety();
                this.checkLocalplayground();
                this.checkLocalwater();
                this.checkLocalcommon();
                this.serverDatas = true;
                this.insertLocalDB();
                this.menuLists[2].sync = 3;
            }
            else {
                this.checkLocalDB();
            }
        });
    }
    getGeneralWater() {
        this.utilityService.SidsDrinWatTypDet(this.schoolId, this.vistId).subscribe(res => {
            if (res.dataStatus) {
                this.filterWater = res.result;
                console.log("filterWater", this.filterWater);
                this.checkLocalwater();
            }
        });
    }
    serverGeneralQues() {
        this.utilityService.SidsGeneralQuesGet(this.vistId).subscribe(res => {
            if (res.dataStatus) {
                this.filterServerGeneral = res.result;
                console.log("filterServerGeneral", this.filterServerGeneral);
                this.checkLocalgeneral();
                this.insertLocalDB2();
                this.menuLists[0].sync = 3;
                this.generalServer = true;
            }
            else {
                this.checkLocalDBGeneral();
            }
        });
    }
    checkLocalgeneral() {
        let selectQuery = 'SELECT * FROM sids_primary_general_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(selectQuery).then(data => {
            if (data.rows.length > 0) {
            }
            else {
                if (this.filterServerGeneral.length > 0) {
                    let Text = 'https://deka0egrc3bqo.cloudfront.net/';
                    const general = 'INSERT INTO sids_primary_general_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(general, [
                        null, this.filterServerGeneral[0].SchlId, this.filterServerGeneral[0].VistUId, this.filterServerGeneral[0].IndexId, this.filterServerGeneral[0].SiteNum, parseFloat(this.filterServerGeneral[0].TotalArea), +this.filterServerGeneral[0].PurpLaptopYN == 1 ? true : false,
                        this.filterServerGeneral[0].PurpLaptopFun, this.filterServerGeneral[0].PurpLaptopNonFun, +this.filterServerGeneral[0].PurpComputerYN == 1 ? true : false, this.filterServerGeneral[0].PurpComputerFun, this.filterServerGeneral[0].PurpComputerNonFun,
                        +this.filterServerGeneral[0].PurpTabYN == 1 ? true : false, this.filterServerGeneral[0].PurpTabFun, this.filterServerGeneral[0].PurpTabNonFun, +this.filterServerGeneral[0].PurpPrinterYN == 1 ? true : false,
                        this.filterServerGeneral[0].PurpPrinterFun, this.filterServerGeneral[0].PurpPrinterNonFun, +this.filterServerGeneral[0].PurpProjectorYN == 1 ? true : false, this.filterServerGeneral[0].PurpProjectorFun, this.filterServerGeneral[0].PurpProjectorNonFun,
                        this.filterServerGeneral[0].GeneralPhoto ? Text + this.filterServerGeneral[0].GeneralPhoto : '', this.filterServerGeneral[0].GeneralPhoto, this.filterServerGeneral[0].GeneralLatitude, this.filterServerGeneral[0].GeneralLongitude,
                        this.filterServerGeneral[0].EntrancePhoto ? Text + this.filterServerGeneral[0].EntrancePhoto : '', this.filterServerGeneral[0].EntrancePhoto, 1
                    ]).then(insertres => {
                        if (insertres.insertId) {
                            console.log('Inserted SIDS General School Data');
                        }
                    });
                }
            }
        });
    }
    checkLocalcommon() {
        let deleteQuery = 'SELECT * FROM sids_primary_compoundwall_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.commonSave = true;
            }
            else {
                const common = 'INSERT INTO sids_primary_compoundwall_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(common, [
                    null, this.schoolId, this.vistId, this.filterGeneral[0].IndexId, this.filterGeneral[0].CmpdwallSta,
                    parseFloat(this.filterGeneral[0].CmpdwallReqLen), this.filterGeneral[0].CmpdwallReqt,
                    parseFloat(this.filterGeneral[0].CmpdwallHTInc), parseFloat(this.filterGeneral[0].AreaWW), parseFloat(this.filterGeneral[0].AreaReplastering),
                    parseFloat(this.filterGeneral[0].AreaBrickwork), +this.filterGeneral[0].GateYn == 1 ? true : false, this.filterGeneral[0].GateFunc, 1
                ]).then(insertres => {
                    if (insertres.insertId) {
                        console.log('Inserted SIDS Common School Data');
                    }
                });
            }
        });
    }
    checkLocalplayground() {
        let deleteQuery = 'SELECT * FROM sids_primary_playground_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.playgroundSave = true;
            }
            else {
                const datainsert = 'INSERT INTO sids_primary_playground_data VALUES (?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(datainsert, [
                    null, this.schoolId, this.vistId, this.filterGeneral[0].IndexId, +this.filterGeneral[0].PlaygroYn == 1 ? true : false,
                    parseFloat(this.filterGeneral[0].PlaygroArea), this.filterGeneral[0].PlayKerbwall,
                    +this.filterGeneral[0].OutsiClsYN == 1 ? true : false, this.filterGeneral[0].OutsiClsNum, 1
                ]).then(insertres => {
                    if (insertres.insertId) {
                    }
                });
            }
        });
    }
    checkLocalsanitation() {
        let deleteQuery = 'SELECT * FROM sids_sanitation_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
            }
            else {
                const sanitation = 'INSERT INTO sids_sanitation_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(sanitation, [null, this.filterGeneral[0].SchlId, this.filterGeneral[0].VistUId, +this.filterGeneral[0].DustYN == 1 ? true : false, +this.filterGeneral[0].NapkYn == 1 ? true : false,
                    this.filterGeneral[0].NapkFun, this.filterGeneral[0].NapkRepair, this.filterGeneral[0].SanWstDis, this.filterGeneral[0].SanWstDisFun,
                    this.filterGeneral[0].SanWstDisRepair, this.filterGeneral[0].SoapHwLunch, this.filterGeneral[0].soapHwToilet, this.filterGeneral[0].ToilClen,
                    this.filterGeneral[0].ToilWstDis, this.filterGeneral[0].ToiletWstDispSoak, this.filterGeneral[0].ToiletWstDispSeptic,
                    this.filterGeneral[0].SeptiTankFun, this.filterGeneral[0].SeptiTankShap, parseFloat(this.filterGeneral[0].SeptiLen),
                    parseFloat(this.filterGeneral[0].SeptiBrea), parseFloat(this.filterGeneral[0].SeptiRadi), parseFloat(this.filterGeneral[0].SeptiHeit), this.filterGeneral[0].SepticTankEmpty
                ]).then(insertres => {
                    if (insertres.insertId) {
                        console.log('Inserted SIDS Sanitation School Data');
                    }
                });
            }
        });
    }
    checkLocalwater() {
        let deleteQuery = 'SELECT * FROM sids_primary_water_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.waterSave = true;
            }
            else {
                const datainsert = 'INSERT INTO sids_primary_water_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(datainsert, [
                    null, this.schoolId, this.vistId, this.filterGeneral[0].IndexId,
                    this.filterGeneral[0].WatAvaiSchool, this.filterGeneral[0].ResUnAvaiWater, this.filterGeneral[0].srcWaterAvai,
                    this.filterGeneral[0].BorWelFunc, this.filterGeneral[0].BorwelClosed,
                    this.filterGeneral[0].BorWelReqReapir, this.filterGeneral[0].DWWatAvai, +this.filterGeneral[0].DWSumpYn == 1 ? true : false,
                    this.filterGeneral[0].DWSumpFun, this.filterGeneral[0].DWSumpAvai, this.filterGeneral[0].DWPumpYn,
                    this.filterGeneral[0].DWPumpFun, this.filterGeneral[0].DWPumpRepair, this.filterGeneral[0].NumDWStation,
                ]).then(insertres => {
                    if (insertres.insertId) {
                        console.log('Inserted SIDS water School Data', insertres);
                    }
                });
            }
        });
    }
    checkLocalsafety() {
        let deleteQuery = 'SELECT * FROM sids_primary_safety_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.safetySave = true;
            }
            else {
                const safety = 'INSERT INTO sids_primary_safety_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(safety, [
                    null, this.schoolId, this.vistId, this.filterGeneral[0].IndexId, +this.filterGeneral[0].EBliShiYn == 1 ? true : false,
                    +this.filterGeneral[0].RefilAreReq == 1 ? true : false, parseFloat(this.filterGeneral[0].RefilSqft), +this.filterGeneral[0].WatLoggYn == 1 ? true : false, this.filterGeneral[0].WatLogRepair,
                    +this.filterGeneral[0].TrePrunReq == 1 ? true : false, +this.filterGeneral[0].OpenWellYn == 1 ? true : false, +this.filterGeneral[0].CmnDustbinYN == 1 ? true : false, +this.filterGeneral[0].ChulhaYn == 1 ? true : false,
                    this.filterGeneral[0].ChulhaFunc, this.filterGeneral[0].ChulhaRepair, +this.filterGeneral[0].SChSepticTank == 1 ? true : false,
                    this.filterGeneral[0].SepticTankFun, this.filterGeneral[0].SepticTankRepaired, 1
                ]).then(insertres => {
                    if (insertres.insertId) {
                        console.log('Inserted SIDS Safety School Data');
                    }
                });
            }
        });
    }
    insertLocalDB() {
        const datainsert = "INSERT INTO sidsPrimaryCommonServer VALUES (?,?,?,?)";
        this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "3"]).then(insertres => {
            console.log('server inserted successfully', insertres);
        });
    }
    addBuildingServer() {
        this.utilityService.getBuildingSids(this.vistId, this.schoolId).subscribe(res => {
            if (res.dataStatus) {
                this.filterbuild = res.result;
                // console.log("filterBuild",this.filterbuild);
                this.menuLists[1].sync = 3;
                this.serverDataBuilding = true;
                this.insertLocalBuild(this.filterbuild);
            }
        });
    }
    insertLocalBuild(BuildingArray) {
        console.log("Building Array", BuildingArray);
        const dataList = "INSERT INTO sidsPrimaryBuildingQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const dataList2 = "INSERT INTO sidsPrimaryBuildSavesDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
        let Text = 'https://deka0egrc3bqo.cloudfront.net/';
        BuildingArray.forEach(element => {
            let idbuild = parseInt(element.BldgId) - 100;
            const bulsidsPrimarySave = 'create table IF NOT EXISTS sidsPrimaryBuildSavesDatas(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), BuildingId Varchar(50),Status Varchar(50),Condition Varchar(50),BuildName Varchar(50),BuildCondi Varchar(50), ClosingQuestions Varchar(50), FloorCondition Varchar(50), BuildIndex Varchar(50))';
            this.sqliteDB.insert(dataList2, [null, idbuild, this.schoolId, this.vistId, idbuild, element.BldgId, "1", "false", "Building Name", "", "", "", element.IndexId]).then(insertres => {
                console.log('sidsPrimaryBuildSavesDatas successfully');
            });
        });
        BuildingArray.forEach(element => {
            this.sqliteDB.insert(dataList, [null, this.schoolId, this.vistId, element.BldgId, element.IndexId,
                element.BldgName, element.BldgAge, element.BldgFundSourceCons,
                element.BldgType, parseFloat(element.BldgLength), parseFloat(element.BldgBre),
                element.BldgCondition, element.BldgRepair ? element.BldgRepair.toString() : element.BldgRepair,
                parseFloat(element.AreaWeatheringReq), parseFloat(element.AreaPressedTiles), parseFloat(element.PipeNeedHwDw), parseFloat(element.PipeNeedToilet), parseFloat(element.WireLenElectrcty), parseFloat(element.AreaWaterLeakage),
                parseFloat(element.AreaExtWw), parseFloat(element.AreaIntWw), parseFloat(element.AreaReplasting), parseFloat(element.AreaReflooring),
                parseFloat(element.AreaFlrPatchwrk), +element.AuditoriumYn == 1 ? true : false,
                element.AuditoriumStageReqt ? element.AuditoriumStageReqt.toString() : element.AuditoriumStageReqt, parseFloat(element.AuditoriumStageArea), parseFloat(element.AuditoriumStageHeight),
                parseFloat(element.AuditoriumStageAreaLevel), element.AuditoriumLights, element.AuditoriumFans,
                +element.AuditoriumPrjtYn == 1 ? true : false, +element.AuditoriumPrjtFunc, element.RampAvailYn,
                +element.RampRepairYn == 1 ? true : false, +element.FireExtYn == 1 ? true : false, +element.FirstAidKitYn == 1 ? true : false,
                +element.CCTVCameraYn == 1 ? true : false, +element.BuildTabsYn == 1 ? true : false, +element.BuildTabsNumber, +element.BuildReapairComArea == 1 ? true : false,
                element.BldgFrontPhoto ? Text + element.BldgFrontPhoto : '', element.BldgFrontPhoto, element.BldgLatitude, element.BldgLongitude
            ]).then(insertres => {
                console.log('sidsPrimaryBuildingQuestion successfully', insertres);
                let idbuild = parseInt(element.BldgId) - 100;
                let name = element.BldgName;
                console.log(this.schoolId, element.BldgId);
                let query = 'UPDATE sidsPrimaryBuildSavesDatas SET Status = 3 WHERE sidsPrimaryBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                let query1 = 'UPDATE sidsPrimaryBuildSavesDatas SET BuildName="' + name + '" WHERE sidsPrimaryBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                let query2 = 'UPDATE sidsPrimaryBuildSavesDatas SET BuildCondi="' + element.BldgCondition + '", FloorCondition="' + 1 + '" WHERE sidsPrimaryBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                // console.log("Update Query 1 ",query,"  Update Query 2  " ,query1);
                return this.sqliteDB.update(query).then(data => {
                    return this.sqliteDB.update(query1).then(data => {
                        return this.sqliteDB.update(query2).then(data => {
                            console.log("update building");
                        });
                    });
                });
            });
        });
    }
    addFloorServer() {
        this.utilityService.SidsFloorVisitDet(this.schoolId, this.vistId).subscribe(res => {
            if (res.dataStatus) {
                this.filterfloor = res.result;
                this.menuLists[1].sync = 3;
                this.serverDataFloor = true;
                console.log("filterfloor", this.filterfloor);
                this.insertLocalFloor(this.filterfloor);
            }
            else {
                if (this.serverDataBuilding) {
                    this.serverDataFloor = true;
                    this.serverDataRoom = true;
                }
            }
        });
    }
    insertLocalFloor(floorArray) {
        const dataList = "INSERT INTO sidsPrimaryFloorQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const dataList2 = "INSERT INTO sidsPrimaryFloorSaveDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        floorArray.forEach(element => {
            let floor = parseInt(element.FoolrId) - 1000;
            let build = parseInt(element.BldgId) - 100;
            this.sqliteDB.insert(dataList2, [null, floor, this.schoolId, this.vistId, build, floor, element.FoolrId, "1", "Floor Name", "", "", "", element.BldgIdxId, element.IndexId]).then(insertres => {
                console.log('sidsPrimaryFloorSaveDatas successfully');
            });
        });
        floorArray.forEach(element => {
            this.sqliteDB.insert(dataList, [null, this.schoolId, this.vistId, element.BldgId, element.BldgIdxId, element.FoolrId, element.IndexId,
                element.FloorNum, element.FloorCondi, +element.FloorSafety == 1 ? true : false,
                element.ReqParapetWall, parseFloat(element.ParapetWallLength), parseFloat(element.ParapetWallHeight),
                parseFloat(element.ParapetWallWhiteWash), parseFloat(element.ParapetWallReplasting), parseFloat(element.ParapetWallBrickWork),
                +element.BldOhtYn == 1 ? true : false, element.FunBldOhtYn, element.RepairSteps, element.FoolrTy,
                parseFloat(element.FoolrAreReq), element.OutPipY, parseFloat(element.PipLenNeed), element.WeatheringReq,
                +element.RoofCleaYn == 1 ? true : false, +element.CorridorYn == 1 ? true : false, element.CorriCondi, parseFloat(element.CorriLen),
                parseFloat(element.CorridorWidth), element.CorriLighFunc, element.CorridorRepair,
                parseFloat(element.AreaWw), parseFloat(element.AreaReplastering), parseFloat(element.AreaReflooring), parseFloat(element.AreaCeilingPlaster),
                parseFloat(element.AreaFlrPatchwork), element.DoorReplace, element.JaalisReplace, element.DoorRepair,
                element.JaalisRepair, parseFloat(element.DoorRepaint), parseFloat(element.JaalisRepaint)
            ]).then(insertres => {
                console.log('sidsPrimaryFloorQuestion successfully', insertres);
                let name = "";
                if (+element.FloorNum == 1) {
                    name = "Ground";
                }
                if (+element.FloorNum == 2) {
                    name = "First";
                }
                if (+element.FloorNum == 3) {
                    name = "Second";
                }
                if (+element.FloorNum == 4) {
                    name = "Third";
                }
                if (+element.FloorNum == 5) {
                    name = "Fourth";
                }
                if (+element.FloorNum == 6) {
                    name = "Fifth";
                }
                if (+element.FloorNum == 7) {
                    name = "Terrace";
                }
                let idbuild = parseInt(element.BldgId) - 100;
                let idfloor = parseInt(element.FoolrId) - 1000;
                // let updateQuery =  'UPDATE sidsPrimaryFloorSaveDatas SET Status = 3 , FloorName="' + name + '"' +
                //   ' WHERE SclId = "' + this.schoolId + '"' +
                //   ' And BuildIndx = "' + idbuild + '"' +
                //   ' And FloorId = "' + element.FloorId + '"';
                let query1 = 'UPDATE sidsPrimaryFloorSaveDatas SET Status = 3 WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                let query2 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorName="' + name + '" WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                let query3 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorClose = ' + "3" + ' WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                let query4 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorCondi= "' + element.FloorCondi + '", RoomCondition= "' + 1 + '" WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                console.log("UPDATE", query1);
                return this.sqliteDB.update(query1).then(data => {
                    return this.sqliteDB.update(query2).then(data => {
                        return this.sqliteDB.update(query3).then(data => {
                            return this.sqliteDB.update(query4).then(data => {
                                console.log("UPDATE data", data);
                            });
                        });
                    });
                });
            });
        });
    }
    addRoomServer() {
        this.utilityService.SidsRoomsVisitDet(this.schoolId, this.vistId).subscribe(res => {
            if (res.dataStatus) {
                this.filterRoom = res.result;
                console.log("filterRoom", this.filterRoom);
                this.serverDataRoom = true;
                this.menuLists[1].sync = 3;
                this.insertLocalRoom(this.filterRoom);
            }
            else {
                if (this.serverDataFloor) {
                    this.serverDataRoom = true;
                }
            }
        });
    }
    insertLocalRoom(RoomArray) {
        const dataList = "INSERT INTO newPrimaryRoomscommons VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const dataList2 = "INSERT INTO sidsPrimaryRoomSaves VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        RoomArray.forEach(element => {
            let idroom = parseInt(element.RoomId) - 10000;
            let floor = parseInt(element.FloorId) - 1000;
            let build = parseInt(element.BldgId) - 100;
            this.sqliteDB.insert(dataList2, [null, idroom, this.schoolId, this.vistId, build, floor, element.RoomId, "1", "Room", element.BldgIdxId, element.FloorIdxId, element.IndxId]).then(insertres => {
                console.log('sidsPrimaryRoomSaves successfully', idroom, floor, build);
            });
        });
        let Text = 'https://deka0egrc3bqo.cloudfront.net/';
        RoomArray.forEach(element => {
            this.sqliteDB.insert(dataList, [null, element.IndxId, element.ToilIndxId, this.schoolId, this.vistId, element.BldgIdxId, element.BldgId, element.FloorIdxId, element.FloorId, element.RoomId,
                element.RoomUse, element.RoomName, element.RoomCondition, element.RepairType,
                element.MajorRepair, element.MinorRepair, parseFloat(element.AreaPlastering),
                parseFloat(element.AreaExtWw), parseFloat(element.AreaIntWw), parseFloat(element.AreaReplastering),
                parseFloat(element.AreaReflooring), parseFloat(element.AreaPatchwork), element.DoorReplace,
                element.WindowReplace, element.DoorRepair, element.WindowRepair,
                parseFloat(element.DoorRepaint), parseFloat(element.WindowRepaint), element.LatrinReplace,
                element.UrinalReplace, parseFloat(element.PipeNeed), parseFloat(element.DrainageNeed),
                parseFloat(element.RoomLength), parseFloat(element.RoomBreadth), parseFloat(element.RoomHeight),
                element.FloorType, element.BenchFunc, element.DeskFunc,
                element.TubelightFunc, element.FansFunc, element.Cupboard,
                element.RoomCeilingYn, element.RoomCeilingPhoto ? Text + element.RoomCeilingPhoto : '', element.RoomCeilingPhoto, element.RoomCeilingLatitude, element.RoomCeilingLongitude,
                element.TeacherTableYn == 1 ? true : false, element.TelevisionYn == 1 ? true : false, element.TelevisionFuncYn == 1 ? true : false,
                element.SmartboardPrjtYn == 1 ? true : false, element.SmartboardPrjtFuncYn == 1 ? true : false, element.ClassRoomProjYn == 1 ? true : false, element.ClassRoomProjFuncYn == 1 ? true : false,
                element.LabType, element.LabComputerYn == 1 ? true : false, element.LabComputerFunc,
                element.LabComputerRepair, element.LabWatersupplyYn, +element.LabDrainage == 1 ? true : false,
                element.LabPhotoOne ? Text + element.LabPhotoOne : '', element.LabPhotoOne, element.LabLatitude, element.LabLongitude,
                element.LibraryBooks, element.HmRoomTblYn, element.StaffrmUsedBy,
                element.KitchenWtrSrc, element.KitchenLPGConYn == 1 ? true : false, +element.KitchenWtrSupply == 1 ? true : false,
                element.KitchenStorageYn == 1 ? true : false, element.KitchenCleanYn == 1 ? true : false,
                element.DiningFunctionalYn == 1 ? true : false, element.DiningSeatingCapacity, element.DiningSeatingWtrSupply,
                element.NoonmealStorageClean,
                element.StoreRoomPurpose, element.StrroomStorageClean == 1 ? true : false,
                element.ReasonEmpty,
                element.ToiletType, element.ToiletWaterCon, element.ToiletWasteDis,
                +element.IwcToilet == 1 ? true : false, element.Iwccubicles, element.IwccubiclesFunc,
                +element.EwcToilet == 1 ? true : false, element.Ewccubicles, element.Ewccubiclesfunc,
                +element.UrinalToilet == 1 ? true : false, element.Urinals, element.Urinalsfunc,
                element.ToiletTapsFunc, element.ToiletNeedTabs, element.ToiletBucket,
                element.Toiletmugs, element.SizeSuitable, element.Roof,
                element.SanitWasteDisp, element.HwFacility,
                element.AuditoriumYn == 1 ? true : false, element.AuditoriumStageYn == 1 ? true : false, element.AuditoriumStageReqt,
                parseFloat(element.AuditoriumStageArea), parseFloat(element.AuditoriumStageHeight), parseFloat(element.AuditoriumStageAreaLevel),
                element.AuditoriumLights, element.AuditoriumFans,
                element.AuditoriumPrjtYn, element.AuditoriumPrjtFunc,
                element.SmartRoomFacilityYn == 1 ? true : false, element.SmartRoomDeviceFunYn == 1 ? true : false, element.SmartRoomComputersYn == 1 ? true : false,
                element.SmartRoomFunComp, element.SmartRoomFunCompRepair,
                element.SmartRoomPhotoOne ? Text + element.SmartRoomPhotoOne : '', element.SmartRoomPhotoOne, element.SmartRoomLatitude, element.SmartRoomLongitude,
            ]).then(insertres => {
                console.info("Room Details Stored Locally", insertres);
                let id = parseInt(element.BldgId) - 100;
                let floor = parseInt(element.FloorId) - 1000;
                let room = parseInt(element.RoomId) - 10000;
                let updateQuery = 'UPDATE sidsPrimaryRoomSaves SET Status = 3, RoomName="' + element.RoomName + '"' +
                    ' WHERE SclId = "' + this.schoolId + '"' +
                    ' And BuildIndx = "' + id + '"' +
                    ' And FloorIndx = "' + floor + '"' +
                    ' And RoomId = "' + element.RoomId + '"';
                console.log("sidsPrimaryRoomSaves query", updateQuery, id, floor, room);
                return this.sqliteDB.update(updateQuery).then(data => {
                    console.log("update room", data);
                    let query = 'SELECT * FROM sidsPrimaryRoomSaves';
                    return this.sqliteDB.getDataLocalDB(query).then(data => {
                        let sidsFloor = [];
                        for (var i = 0; i < data.rows.length; i++) {
                            sidsFloor.push(data.rows.item(i));
                        }
                        console.log("555555", sidsFloor);
                    });
                });
            });
        });
    }
    insertLocalDB2() {
        const datainsert = "INSERT INTO sidsPrimaryGeneralServer VALUES (?,?,?,?)";
        this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "3"]).then(insertres => {
            console.log('server inserted successfully', this.schoolId, this.vistId);
            this.goToBack();
        });
    }
    getPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.menuLists[0].sync == 3 && this.menuLists[1].sync == 3 && this.menuLists[2].sync == 3) {
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Confirmation',
                    subHeader: 'Already Data entered if want to update',
                    buttons: [
                        {
                            text: 'No',
                            role: 'cancel',
                            cssClass: 'cancel_click',
                            handler: data => {
                                this.router.navigate(['/tabs/primary-sids-school']);
                                // console.log("Complete Check")
                            }
                        },
                        {
                            cssClass: 'cancel_click',
                            text: 'Yes',
                            handler: data => {
                                console.log("Data Change");
                            }
                        }
                    ],
                    backdropDismiss: false
                });
                yield alert.present();
            }
        });
    }
};
PrimaryDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
PrimaryDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-primary-dashboard',
        template: _raw_loader_primary_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_primary_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrimaryDashboardPage);



/***/ }),

/***/ 64554:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.page.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menuicon {\n  width: 30%;\n  margin: 10px auto;\n  overflow: visible;\n}\n\n.menu-text {\n  padding: 10px !important;\n}\n\n.question {\n  background-color: #F3F4FA !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local {\n  background-color: #70BBFF !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local ion-label {\n  color: white !important;\n  font-weight: 500;\n}\n\n.server {\n  background-color: #A37A5C !important;\n  color: white;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3QkFBQTtBQUVKOztBQUFBO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFGSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFBRTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSiIsImZpbGUiOiJwcmltYXJ5LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudWljb24ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuLm1lbnUtdGV4dHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ucXVlc3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGM0Y0RkEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2NhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBCQkZGICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlcnZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMzdBNUMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 25837:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.page.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"chevronback\" size=\"large\" name=\"chevron-back-outline\" (click)=\"goback()\"></ion-icon>\r\n    </ion-buttons> -->\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goback()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"padding-left: 10px;\">SIDS Dashboard ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-card style=\"padding-bottom: 30px;\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"menu menus-txt secondary\" *ngFor=\"let item of menuLists; let i = index\" style=\"background-color: white;\">\r\n        \r\n        <div [ngClass]=\"(item.sync == 1) ? 'question' : (item.sync == 2) ? 'local' : 'server'\">\r\n          <ion-row (click)=\"navigateNext(item)\">\r\n            <img [src]=\"(item.sync == 1) ? item.image : (item.sync == 2) ? item.server : item.server\" class=\"menuicon\">\r\n            <ion-col size=\"12\" class=\"menu-text\" style=\"text-align: center;\">\r\n              <ion-label *ngIf=\"item.sync == 1\" style=\"color: #555555; font-weight: 400;\">{{item.menu}}</ion-label>\r\n              <ion-label *ngIf=\"item.sync == 2\" style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n              <ion-label *ngIf=\"item.sync == 3\" style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <!-- <div *ngIf=\"serverDatas && generalServer && serverDataBuilding && serverDataFloor && serverDataRoom\" class=\"server\">\r\n          <ion-row (click)=\"navigateNext(item,item.menu)\">\r\n            <img [src]=\"item.server\" class=\"menuicon\">\r\n            <ion-col size=\"12\" class=\"menu-text\" style=\"text-align: center;\">\r\n              <ion-label style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div> -->\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-row *ngIf=\"serverDatas || serverDataBuilding && serverDataFloor && serverDataRoom\" style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: #A27B5C;font-weight: bold; text-align: center;\">\r\n      <ion-label>Only partial data has been entered. Enter all data and submit final save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: rgb(139, 103, 179);font-weight: bold;\">\r\n      <ion-label>Data cannot be edited once synced to server\r\n      </ion-label>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"8\" style=\"text-align: center;margin-bottom: 5%;\">\r\n      <ion-label>Data Saved in Local</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" style=\"margin-bottom: 5%;\">\r\n      <img src=\"assets/icons/syncwithserver.svg\" class=\"floImg\">\r\n    </ion-col>\r\n    <ion-col size=\"8\" style=\"text-align: center;\">\r\n      <ion-label>Data Saved in Server</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <img src=\"assets/icons/localSync.svg\" class=\"floImg\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;margin-top: 3%;color: rgb(165, 7, 7);font-weight: bold;\">\r\n      <ion-label>Notes : </ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: rgb(139, 103, 179);font-weight: bold;\">\r\n      <ion-label>Please click on final save only if you have completed the visit and submitted all details fully.\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row (click)=\"finalSave()\" style=\"text-align: center;color: aliceblue;padding: 10px\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n      <ion-label> Final Save </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-dashboard_primary-dashboard_module_ts-es2015.js.map