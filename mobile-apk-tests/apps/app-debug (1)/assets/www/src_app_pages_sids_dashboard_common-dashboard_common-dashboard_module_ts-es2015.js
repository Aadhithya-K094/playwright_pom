(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_dashboard_common-dashboard_common-dashboard_module_ts"],{

/***/ 1529:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard-routing.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonDashboardPageRoutingModule": function() { return /* binding */ CommonDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _common_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-dashboard.page */ 70592);




const routes = [
    {
        path: '',
        component: _common_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.CommonDashboardPage
    }
];
let CommonDashboardPageRoutingModule = class CommonDashboardPageRoutingModule {
};
CommonDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommonDashboardPageRoutingModule);



/***/ }),

/***/ 92616:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonDashboardPageModule": function() { return /* binding */ CommonDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _common_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-dashboard-routing.module */ 1529);
/* harmony import */ var _common_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-dashboard.page */ 70592);







let CommonDashboardPageModule = class CommonDashboardPageModule {
};
CommonDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _common_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonDashboardPageRoutingModule
        ],
        declarations: [_common_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.CommonDashboardPage]
    })
], CommonDashboardPageModule);



/***/ }),

/***/ 70592:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.page.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonDashboardPage": function() { return /* binding */ CommonDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_common_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./common-dashboard.page.html */ 14610);
/* harmony import */ var _common_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-dashboard.page.scss */ 91445);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);















let CommonDashboardPage = class CommonDashboardPage {
    constructor(router, transfer, route, sidsService, userSessionService, utilityService, NetworkService, sqliteDB, file, alertController, alertService) {
        this.router = router;
        this.transfer = transfer;
        this.route = route;
        this.sidsService = sidsService;
        this.userSessionService = userSessionService;
        this.utilityService = utilityService;
        this.NetworkService = NetworkService;
        this.sqliteDB = sqliteDB;
        this.file = file;
        this.alertController = alertController;
        this.alertService = alertService;
        this.menuLists = [
            {
                id: 1,
                menu: 'General Questions',
                image: 'assets/icons/question.svg',
                server: 'assets/icons/sids/server_general.svg',
                url: '/tabs/sids-schooldata',
                sync: 1
            },
            {
                id: 2,
                menu: 'Building',
                image: 'assets/icons/Iconawesomebuilding.svg',
                server: 'assets/icons/Iconawesome-building.svg',
                url: '/tabs/new-dashboard',
                sync: 1
            },
            {
                id: 3,
                menu: 'Common Spaces',
                image: 'assets/icons/sids/local_commanspace.svg',
                server: 'assets/icons/sids/server_commonspace.svg',
                url: '/tabs/sids-commonspaces',
                sync: 1
            }
        ];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
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
        // this.autoSync();
    }
    navigateNext(item) {
        if (+item.id == 3) {
            if (this.serverDataBuilding && this.serverDataFloor && this.serverDataRoom && +this.menuLists[0].sync == 3) {
                this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1' }, skipLocationChange: false });
            }
            else {
                this.alertService.error("Please fill and sync the school and building questions");
            }
        }
        else {
            this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1' }, skipLocationChange: false });
        }
        // this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1' }, skipLocationChange: false });
    }
    goToBack() {
    }
    serverData() {
        debugger;
        let query = 'SELECT * FROM sidsCommonServer' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.menuLists[2].sync = 3;
                this.serverDatas = true;
                console.log('Server');
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
        let query = 'SELECT * FROM sidsGeneralServer' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.generalServer = true;
                this.menuLists[0].sync = 3;
                console.log('Server general');
            }
            else {
                this.generalServer = false;
                console.log('Local general');
                this.serverGeneralQues();
            }
        }).catch(err => console.log(err));
    }
    checkLocalDB() {
        let safety = 'SELECT * FROM sids_safety_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let common = 'SELECT * FROM sids_compoundwall_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let water = 'SELECT * FROM sids_water_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let playground = 'SELECT * FROM sids_playground_data' +
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
        let selectQuery = 'SELECT * FROM sids_general_schooldata' +
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
        let query = 'SELECT * FROM sidsBuildSavesDatas' +
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
        let query = 'SELECT * FROM sidsFloorSaveDatas' +
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
        let query = 'SELECT * FROM sidsRoomSaves' +
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
        this.sidsService.SecVistorSaveSchlDeta(data).subscribe(res => {
            this.onAllDelete();
        });
    }
    onAllDelete() {
        let query = 'DELETE FROM  sidsBuildingQuestion';
        let query1 = 'DELETE FROM  sidsFloorQuestion';
        let query2 = 'DELETE FROM  newRoomscommons';
        let query3 = 'DELETE FROM  sidsFloorSaveDatas';
        let query4 = 'DELETE FROM  sids_general_schooldata';
        let query5 = 'DELETE FROM  sids_sanitation_schooldata';
        let query6 = 'DELETE FROM  sids_water_schooldata';
        let query7 = 'DELETE FROM  sids_compoundwall_data';
        let query8 = 'DELETE FROM  sidsRoomSaves';
        let query9 = 'DELETE FROM  sidsBuildSavesDatas';
        let query10 = 'DELETE FROM  sidsCommonServer';
        let query11 = 'DELETE FROM  sids_safety_data';
        let query12 = 'DELETE FROM  sidsGeneralServer';
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
                                                            this.menuLists = [
                                                                {
                                                                    id: 1,
                                                                    menu: 'General Questions',
                                                                    image: 'assets/icons/question.svg',
                                                                    server: 'assets/icons/sids/server_general.svg',
                                                                    url: '/tabs/sids-schooldata',
                                                                    sync: 1
                                                                },
                                                                {
                                                                    id: 2,
                                                                    menu: 'Building',
                                                                    image: 'assets/icons/Iconawesomebuilding.svg',
                                                                    server: 'assets/icons/Iconawesome-building.svg',
                                                                    url: '/tabs/new-dashboard',
                                                                    sync: 1
                                                                },
                                                                {
                                                                    id: 3,
                                                                    menu: 'Common Spaces',
                                                                    image: 'assets/icons/sids/local_commanspace.svg',
                                                                    server: 'assets/icons/sids/server_commonspace.svg',
                                                                    url: '/tabs/sids-commonspaces',
                                                                    sync: 1
                                                                }
                                                            ];
                                                            this.router.navigate(['/tabs/dashboard']);
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
        this.router.navigate(['/tabs/sids-school']);
    }
    beforeSchoolAlert(school) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
                                this.router.navigate(['/tabs/sids-schooldata'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
                            }
                            if (school == 2) {
                                this.router.navigate(['/tabs/new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
                            }
                            if (school == 3) {
                                this.router.navigate(['/tabs/sids-commonspaces'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus': this.visitstatus }, skipLocationChange: false });
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
        this.sidsService.SecSidsSchlGenrlInfoGet(this.vistId).subscribe(res => {
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
        this.sidsService.SecSidsGeneralQuesGet(this.vistId).subscribe(res => {
            if (res.dataStatus) {
                this.filterServerGeneral = res.result;
                console.log("filterServerGeneral", this.filterServerGeneral);
                // let Text = 'data:image/jpeg;base64,'
                // let addText = Text+this.filterServerGeneral[0].GeneralPhoto;
                // this.filterServerGeneral[0].GeneralPhoto = "";
                // this.filterServerGeneral[0].GeneralPhoto = addText;
                debugger;
                if (this.filterServerGeneral[0].GeneralPhoto) {
                    let url = 'https://deka0egrc3bqo.cloudfront.net/' + this.filterServerGeneral[0].GeneralPhoto;
                    const fileTransfer = this.transfer.create();
                    fileTransfer.download(url, this.file.externalDataDirectory + this.filterServerGeneral[0].GeneralPhoto, true).then((entry) => {
                        this.file.readAsDataURL(this.file.externalDataDirectory, this.filterServerGeneral[0].GeneralPhoto).then((base64string) => {
                            this.filterServerGeneral[0].GeneralPhoto = base64string;
                            this.checkLocalgeneral();
                            this.insertLocalDB2();
                            this.menuLists[0].sync = 3;
                            this.generalServer = true;
                        });
                    });
                }
                else {
                    this.checkLocalgeneral();
                    this.insertLocalDB2();
                    this.menuLists[0].sync = 3;
                    this.generalServer = true;
                }
            }
            else {
                this.checkLocalDBGeneral();
            }
        });
    }
    checkLocalgeneral() {
        let selectQuery = 'SELECT * FROM sids_general_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(selectQuery).then(data => {
            if (data.rows.length > 0) {
            }
            else {
                if (this.filterServerGeneral.length > 0) {
                    const general = 'INSERT INTO sids_general_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                    this.sqliteDB.insert(general, [
                        // null, this.filterServerGeneral[0].SchlId, this.filterServerGeneral[0].VistUId, this.filterServerGeneral[0].SiteNum, parseFloat(this.filterServerGeneral[0].TotalArea), +this.filterServerGeneral[0].PurpLaptopYN == 1 ? true : false,
                        // this.filterServerGeneral[0].PurpLaptopFun, this.filterServerGeneral[0].PurpLaptopNonFun, +this.filterServerGeneral[0].PurpComputerYN == 1 ? true : false, this.filterServerGeneral[0].PurpComputerFun, this.filterServerGeneral[0].PurpComputerNonFun,
                        // +this.filterServerGeneral[0].PurpTabYN == 1 ? true : false, this.filterServerGeneral[0].PurpTabFun, this.filterServerGeneral[0].PurpTabNonFun, +this.filterServerGeneral[0].PurpPrinterYN == 1 ? true : false,
                        // this.filterServerGeneral[0].PurpPrinterFun, this.filterServerGeneral[0].PurpPrinterNonFun, +this.filterServerGeneral[0].PurpProjectorYN == 1 ? true : false, this.filterServerGeneral[0].PurpProjectorFun, this.filterServerGeneral[0].PurpProjectorNonFun, 1
                        null, this.filterServerGeneral[0].SchlId, this.filterServerGeneral[0].VistUId, this.filterServerGeneral[0].SiteNum, parseFloat(this.filterServerGeneral[0].TotalArea), parseFloat(this.filterServerGeneral[0].TotalLandAreaExcludPg),
                        this.filterServerGeneral[0].LaptopNumFunc, this.filterServerGeneral[0].ComputerNumFunc, this.filterServerGeneral[0].TabNumFunc, this.filterServerGeneral[0].PrinterNumFunc,
                        this.filterServerGeneral[0].PrjctrNumFunc, this.filterServerGeneral[0].ScannerNumFunc, +this.filterServerGeneral[0].InternetYn == 1 ? true : false, this.filterServerGeneral[0].InternetType,
                        this.filterServerGeneral[0].InternetTypeOthers, this.filterServerGeneral[0].InternetServProv, this.filterServerGeneral[0].InternetServProvOthers, this.filterServerGeneral[0].Bandwidth,
                        this.filterServerGeneral[0].GeneralPhoto,
                        this.filterServerGeneral[0].GeneralPhotoName,
                        // this.filterServerGeneral[0].ElectricityAvai, 
                        this.filterServerGeneral[0].SolarPanelAvai, this.filterServerGeneral[0].GeneratorAvai, this.filterServerGeneral[0].GeneralLatitude, this.filterServerGeneral[0].GeneralLongitude, 1
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
        let deleteQuery = 'SELECT * FROM sids_compoundwall_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.commonSave = true;
            }
            else {
                const common = 'INSERT INTO sids_compoundwall_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(common, [
                    null, this.schoolId, this.vistId, this.filterGeneral[0].CmpdwallSta,
                    parseFloat(this.filterGeneral[0].CmpdwallReqLen), this.filterGeneral[0].CmpdwallReqt,
                    parseFloat(this.filterGeneral[0].CmpdwallHTInc), parseFloat(this.filterGeneral[0].AreaWW), parseFloat(this.filterGeneral[0].AreaReplastering),
                    parseFloat(this.filterGeneral[0].AreaBrickwork), parseInt(this.filterGeneral[0].SchoolTotalGates), this.filterGeneral[0].GateFunc, 1
                ]).then(insertres => {
                    if (insertres.insertId) {
                        console.log('Inserted SIDS Common School Data');
                    }
                });
            }
        });
    }
    checkLocalplayground() {
        let deleteQuery = 'SELECT * FROM sids_playground_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.playgroundSave = true;
            }
            else {
                const datainsert = 'INSERT INTO sids_playground_data VALUES (?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(datainsert, [
                    null, this.schoolId, this.vistId, this.filterGeneral[0].PlaygroYn == 1 ? true : false, this.filterGeneral[0].PlaygroOutdoorGamYn == 1 ? true : false,
                    parseFloat(this.filterGeneral[0].PlaygroArea),
                    this.filterGeneral[0].OutsiClsNum, 1
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
        let deleteQuery = 'SELECT * FROM sids_water_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.waterSave = true;
            }
            else {
                const datainsert = 'INSERT INTO sids_water_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(datainsert, [
                    null, this.schoolId, this.vistId,
                    this.filterGeneral[0].WatAvaiSchool, this.filterGeneral[0].ResUnAvaiWater, this.filterGeneral[0].srcWaterAvai, this.filterGeneral[0].srcWaterOthers,
                    this.filterGeneral[0].BorWelFunc, this.filterGeneral[0].FreqWaterAvail, this.filterGeneral[0].DWSumpYn == 1 ? true : false,
                    this.filterGeneral[0].DWSumpFun, this.filterGeneral[0].DWSumpAvai, this.filterGeneral[0].DWPumpYn == 1 ? true : false,
                    this.filterGeneral[0].DWPumpFun, this.filterGeneral[0].DWPumpRepair, this.filterGeneral[0].NumDWStation, this.filterGeneral[0].WaterRoFunc,
                    this.filterGeneral[0].srcDrnkWaterAvai, this.filterGeneral[0].srcDrnkWaterAvaiOthers, this.filterGeneral[0].WaterComHandwash
                ]).then(insertres => {
                    if (insertres.insertId) {
                        console.log('Inserted SIDS water School Data', insertres);
                    }
                });
            }
        });
    }
    checkLocalsafety() {
        let deleteQuery = 'SELECT * FROM sids_safety_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            if (data.rows.length > 0) {
                this.safetySave = true;
            }
            else {
                const safety = 'INSERT INTO sids_safety_data VALUES (?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(safety, [
                    null, this.schoolId, this.vistId, this.filterGeneral[0].EBliShiYn == 1 ? true : false,
                    this.filterGeneral[0].RefilAreReq == 1 ? true : false, this.filterGeneral[0].WatLoggYn == 1 ? true : false, this.filterGeneral[0].WatLogRepair,
                    this.filterGeneral[0].OpenWellYn == 1 ? true : false, this.filterGeneral[0].CmnDustbinYN == 1 ? true : false, 1
                ]).then(insertres => {
                    if (insertres.insertId) {
                        console.log('Inserted SIDS Safety School Data');
                    }
                });
            }
        });
    }
    insertLocalDB() {
        const datainsert = "INSERT INTO sidsCommonServer VALUES (?,?,?,?)";
        this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "1"]).then(insertres => {
            console.log('server inserted successfully', insertres);
        });
    }
    addBuildingServer() {
        this.sidsService.SecSidsBulidVisitGet(this.vistId, this.schoolId).subscribe(res => {
            if (res.dataStatus) {
                this.filterbuild = res.result;
                // console.log("filterBuild",this.filterbuild);
                this.menuLists[1].sync = 3;
                this.serverDataBuilding = true;
                // for(let i=0; i<this.filterbuild.length; i++){
                //   if(this.filterbuild[i].BldgFrontPhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgFrontPhoto).then(responce =>{
                //       this.filterbuild[i].BldgFrontPhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                //   if(this.filterbuild[i].BldgBackPhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgBackPhoto).then(responce =>{
                //       this.filterbuild[i].BldgBackPhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                //   if(this.filterbuild[i].BldgRightSidePhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgRightSidePhoto).then(responce =>{
                //       this.filterbuild[i].BldgRightSidePhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                //   if(this.filterbuild[i].BldgLeftSidePhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgLeftSidePhoto).then(responce =>{
                //       this.filterbuild[i].BldgLeftSidePhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                // }
                this.insertLocalBuild(this.filterbuild);
            }
        });
    }
    insertLocalBuild(BuildingArray) {
        let Text = 'https://deka0egrc3bqo.cloudfront.net/';
        console.log("Building Array", BuildingArray);
        const dataList = "INSERT INTO sidsBuildingQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const dataList2 = "INSERT INTO sidsBuildSavesDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        BuildingArray.forEach(element => {
            let idbuild = parseInt(element.BldgId) - 100;
            this.sqliteDB.insert(dataList2, [null, idbuild, this.schoolId, this.vistId, "", element.BldgId, "1", "false", "Building Name", "", ""]).then(insertres => {
                console.log('sidsBuildSavesDatas successfully');
            });
        });
        BuildingArray.forEach(element => {
            this.sqliteDB.insert(dataList, [null, this.schoolId, this.vistId, element.BldgId, "",
                element.BldgName,
                // element.BldgAge,
                element.BldgFundSourceCons, element.BldgFundSourceConsOthers,
                element.BldgType, parseFloat(element.BldgLength), parseFloat(element.BldgBre),
                element.BldgCondition, parseFloat(element.ElectricityAvai), element.BldgRepair ? element.BldgRepair.toString() : element.BldgRepair,
                parseFloat(element.AreaWeatheringReq), parseFloat(element.AreaPressedTiles), parseFloat(element.PipeNeedHwDw), parseFloat(element.PipeNeedToilet), parseFloat(element.WireLenElectrcty), parseFloat(element.AreaWaterLeakage),
                parseFloat(element.AreaExtWw),
                parseFloat(element.AreaIntWw), parseFloat(element.AreaReplasting), parseFloat(element.AreaReflooring),
                parseFloat(element.AreaFlrPatchwrk), +element.AuditoriumYn == 1 ? true : false,
                // element.AuditoriumStageReqt ? element.AuditoriumStageReqt.toString() : element.AuditoriumStageReqt , parseFloat(element.AuditoriumStageArea), parseFloat(element.AuditoriumStageHeight), 
                // parseFloat(element.AuditoriumStageAreaLevel), 
                element.AuditoriumLights, element.AuditoriumFans,
                +element.AuditoriumPrjtYn == 1 ? true : false,
                // +element.AuditoriumPrjtFunc, 
                element.RampAvailYn,
                +element.RampRepairYn == 1 ? true : false, +element.RampHandrailYn == 1 ? true : false, +element.FireExtYn == 1 ? true : false,
                // +element.FirstAidKitYn == 1 ? true : false, +element.CCTVCameraYn == 1 ? true : false,
                //  +element.BuildTabsYn == 1 ? true : false, +element.BuildTabsNumber, 
                +element.BuildReapairComArea == 1 ? true : false, element.BldgYrConst, element.BldgConstAgency,
                element.BldgConstOthers, element.AudiStageStatus,
                Text + element.BldgFrontPhoto, element.BldgFrontPhotoName, element.BldgExterior, element.BldgInterior, +element.RainWaterFacilityYn == 1 ? true : false,
                // Text+element.BldgBackPhoto, element.BldgBackPhotoName, Text+element.BldgRightSidePhoto, element.BldgRightSidePhotoName, Text+element.BldgLeftSidePhoto, element.BldgLeftSidePhotoName,
                element.LATITUDE, element.LOGITUDE
            ]).then(insertres => {
                console.log('sidsBuildingQuestion successfully', insertres);
                let idbuild = parseInt(element.BldgId) - 100;
                let name = element.BldgName;
                console.log(this.schoolId, element.BldgId);
                let query = 'UPDATE sidsBuildSavesDatas SET Status = 3 WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                let query1 = 'UPDATE sidsBuildSavesDatas SET BuildName="' + name + '" WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                let query2 = 'UPDATE sidsBuildSavesDatas SET BuildCondi="' + element.BldgCondition + '", FloorCondition="' + 1 + '" WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
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
    downloadPhoto(image) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let url = 'https://deka0egrc3bqo.cloudfront.net/' + image;
            const fileTransfer = this.transfer.create();
            yield fileTransfer.download(url, this.file.externalDataDirectory + image, true).then((entry) => {
                this.file.readAsDataURL(this.file.externalDataDirectory, image).then((base64string) => {
                    return base64string;
                });
            });
        });
    }
    addFloorServer() {
        this.sidsService.SecSidsFloorVisitDet(this.schoolId, this.vistId).subscribe(res => {
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
        const dataList = "INSERT INTO sidsFloorQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const dataList2 = "INSERT INTO sidsFloorSaveDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        floorArray.forEach(element => {
            let floor = parseInt(element.FoolrId) - 1000;
            let build = parseInt(element.BldgId) - 100;
            this.sqliteDB.insert(dataList2, [null, floor, this.schoolId, this.vistId, build, "", element.FoolrId, "1", "Floor Name", "", "", ""]).then(insertres => {
                console.log('sidsFloorSaveDatas successfully');
            });
        });
        floorArray.forEach(element => {
            this.sqliteDB.insert(dataList, [null, this.schoolId, this.vistId, element.BldgId, "", element.FoolrId, "",
                element.FloorNum, element.FloorCondi, +element.FloorSafety == 1 ? true : false,
                element.ReqParapetWall, parseFloat(element.ParapetWallLength), parseFloat(element.ParapetWallHeight),
                parseFloat(element.ParapetWallWhiteWash), parseFloat(element.ParapetWallReplasting), parseFloat(element.ParapetWallBrickWork),
                +element.BldOhtYn == 1 ? true : false, element.FunBldOhtYn, element.RepairSteps, element.FoolrTy,
                parseFloat(element.FoolrAreReq), element.OutPipY, parseFloat(element.PipLenNeed), element.WeatheringReq,
                +element.RoofCleaYn == 1 ? true : false, +element.CorridorYn == 1 ? true : false, element.CorriCondi, parseFloat(element.CorriLen),
                parseFloat(element.CorridorWidth), element.CorriLighFunc, element.CorridorRepair,
                parseFloat(element.AreaWw), parseFloat(element.AreaReplastering), parseFloat(element.AreaReflooring), parseFloat(element.AreaCeilingPlaster),
                parseFloat(element.AreaFlrPatchwork),
                // element.DoorReplace, 
                element.JaalisReplace,
                // element.DoorRepair,
                element.JaalisRepair,
                // parseFloat(element.DoorRepaint), 
                parseFloat(element.JaalisRepaint)
            ]).then(insertres => {
                console.log('sidsFloorQuestion successfully', insertres);
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
                // let updateQuery =  'UPDATE sidsFloorSaveDatas SET Status = 3 , FloorName="' + name + '"' +
                //   ' WHERE SclId = "' + this.schoolId + '"' +
                //   ' And BuildIndx = "' + idbuild + '"' +
                //   ' And FloorId = "' + element.FloorId + '"';
                let query1 = 'UPDATE sidsFloorSaveDatas SET Status = 3 WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                let query2 = 'UPDATE sidsFloorSaveDatas SET FloorName="' + name + '" WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                let query3 = 'UPDATE sidsFloorSaveDatas SET FloorClose = ' + "3" + ' WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                let query4 = 'UPDATE sidsFloorSaveDatas SET FloorCondi= "' + element.FloorCondi + '", RoomCondition= "' + 1 + '" WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
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
        this.sidsService.SecSidsRoomsVisitDet(this.schoolId, this.vistId).subscribe(res => {
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
        let Text = 'https://deka0egrc3bqo.cloudfront.net/';
        const dataList = "INSERT INTO newRoomscommons VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        const dataList2 = "INSERT INTO sidsRoomSaves VALUES (?,?,?,?,?,?,?,?,?)";
        RoomArray.forEach(element => {
            let idroom = parseInt(element.RoomId) - 10000;
            let floor = parseInt(element.FloorId) - 1000;
            let build = parseInt(element.BldgId) - 100;
            this.sqliteDB.insert(dataList2, [null, idroom, this.schoolId, this.vistId, build, floor, element.RoomId, "1", "Room"]).then(insertres => {
                console.log('sidsRoomSaves successfully', idroom, floor, build);
            });
        });
        RoomArray.forEach(element => {
            this.sqliteDB.insert(dataList, [null, null, this.schoolId, this.vistId, "", element.BldgId, "", element.FloorId, element.RoomId,
                element.RoomUse, element.RoomName, element.RoomCondition, element.RepairType,
                element.MajorRepair, element.MinorRepair, parseFloat(element.AreaPlastering),
                // parseFloat(element.AreaExtWw), 
                parseFloat(element.AreaIntWw), parseFloat(element.AreaReplastering),
                parseFloat(element.AreaReflooring), parseFloat(element.AreaPatchwork), element.DoorReplace,
                element.WindowReplace, element.DoorRepair, element.WindowRepair,
                parseFloat(element.DoorRepaint), parseFloat(element.WindowRepaint), element.LatrinReplace,
                element.UrinalReplace, parseFloat(element.PipeNeed), parseFloat(element.DrainageNeed),
                parseFloat(element.RoomLength), parseFloat(element.RoomBreadth),
                // parseFloat(element.RoomHeight),
                element.FloorType, element.NumBenchAvail, element.NumDesksAvail,
                element.TubelightFunc, element.FansFunc, element.Cupboard, element.NumCupboardReq,
                element.TeacherTableYn == 1 ? true : false,
                // element.TelevisionYn == 1 ? true : false, 
                element.TelevisionFuncYn == 1 ? true : false,
                // element.SmartboardPrjtYn == 1 ? true : false, 
                element.SmartboardPrjtFuncYn == 1 ? true : false,
                element.ClassRoomProjYn == 1 ? true : false,
                // element.ClassRoomProjFuncYn == 1 ? true : false,
                element.LabType,
                // element.LabComputerYn == 1 ? true : false, 
                element.LabComputerFunc,
                element.LabComputerRepair, element.LabWatersupplyYn, +element.LabDrainage == 1 ? true : false,
                element.LibraryBooks,
                // element.HmRoomTblYn, 
                element.StaffrmUsedBy,
                element.KitchenWtrSrc, element.KitchenLPGConYn == 1 ? true : false, +element.KitchenWtrSupply == 1 ? true : false,
                element.KitchenStorageYn == 1 ? true : false, element.KitchenCleanYn == 1 ? true : false, element.KitchenCleanYn == 1 ? true : false,
                element.DiningFunctionalYn == 1 ? true : false, element.DiningSeatingCapacity, element.DiningSeatingWtrSupply,
                element.NoonmealStorageClean,
                element.StoreRoomPurpose, element.StrroomStorageClean == 1 ? true : false,
                element.ReasonEmpty,
                element.ToiletType, element.ToiletWaterCon, element.ToiletWasteDis,
                // +element.IwcToilet == 1 ? true : false, 
                element.Iwccubicles, element.IwccubiclesFunc,
                // +element.EwcToilet == 1 ? true : false, 
                element.Ewccubicles, element.Ewccubiclesfunc,
                // +element.UrinalToilet == 1 ? true : false, 
                element.Urinals, element.Urinalsfunc,
                element.ToiletTapsFunc, element.ToiletNeedTabs, element.ToiletBucket,
                element.Toiletmugs, element.SizeSuitable, element.Roof, element.ToiletSanitaryPad,
                element.SanitWasteDisp, element.HwFacility,
                element.AuditoriumYn == 1 ? true : false, element.AuditoriumStageYn == 1 ? true : false,
                // element.AuditoriumStageReqt,
                // parseFloat(element.AuditoriumStageArea), 
                // parseFloat(element.AuditoriumStageHeight), 
                // parseFloat(element.AuditoriumStageAreaLevel),
                element.AuditoriumLights, element.AuditoriumFans,
                // element.AuditoriumPrjtYn, 
                element.AuditoriumPrjtFunc,
                element.SmartRoomFacilityYn == 1 ? true : false, element.SmartRoomDeviceFunYn == 1 ? true : false, element.SmartRoomComputersYn == 1 ? true : false,
                element.SmartRoomFunComp, element.SmartRoomFunCompRepair,
                element.RoomArea, element.NumChairAvail, element.NumTableAvail, element.LabInternetConn == 1 ? true : false,
                element.LabInternetConnType, element.LabBandwidth, element.LabServiceProvider, element.LabServiceProviderOthers,
                element.LabProjector, element.LabPrinter, element.LabWebCamera, element.LabMic, element.LabHeadphones, element.LabLatitude, element.LabLogitude,
                Text + element.LabPhotoOne, element.LabPhotoOneName,
                // Text+element.LabPhotoTwo, element.LabPhotoTwoName, 
                element.HmRoomToiletYn == 1 ? true : false,
                element.HmRoomToiletStatus, element.DiningRoomHandwash == 1 ? true : false, element.DiningNumTapFunc, element.ToiletCubicSideHandRail,
                element.AudiStageStatus, element.SmartTabletFunc, element.SmartSpeakerFunc, element.SmartPaFunc,
                element.SmartInternet == 1 ? true : false, element.SmartInternetConnType, element.SmartInternetConnTypeOthers,
                element.SmartBandwidth, element.SmartServiceProvider, element.SmartServiceProviderOthers,
            ]).then(insertres => {
                console.info("Room Details Stored Locally", insertres);
                let id = parseInt(element.BldgId) - 100;
                let floor = parseInt(element.FloorId) - 1000;
                let room = parseInt(element.RoomId) - 10000;
                let updateQuery = 'UPDATE sidsRoomSaves SET Status = 3, RoomName="' + element.RoomName + '"' +
                    ' WHERE SclId = "' + this.schoolId + '"' +
                    ' And BuildIndx = "' + id + '"' +
                    ' And FloorIndx = "' + floor + '"' +
                    ' And RoomId = "' + element.RoomId + '"';
                console.log("sidsRoomSaves query", updateQuery, id, floor, room);
                return this.sqliteDB.update(updateQuery).then(data => {
                    console.log("update room", data);
                    let query = 'SELECT * FROM sidsRoomSaves';
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
        const datainsert = "INSERT INTO sidsGeneralServer VALUES (?,?,?,?)";
        this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "1"]).then(insertres => {
            console.log('server inserted successfully', this.schoolId, this.vistId);
            this.goToBack();
        });
    }
    getPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
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
                                this.router.navigate(['/tabs/sids-school']);
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
    autoSync() {
        this.NetworkService.onNetworkChange().subscribe((status) => {
            if (status == src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.ConnectionStatus.Online) {
                // if(!this.generalServer){
                //   this.onSyncSaveGeneral();
                // }
                // if(!this.serverDatas){
                //   this.onSyncSaveCommon();
                // }
                // if(!this.serverDataBuilding && !this.serverDataFloor && !this.serverDataRoom){
                //   this.onSyncSaveBuilding();
                // }
            }
        });
    }
    onSyncSaveGeneral() {
        let selectQuery = 'SELECT * FROM sids_general_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        ' And Status = 2"';
        return this.sqliteDB.getDataLocalDB(selectQuery).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                let dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataList.push(data.rows.item(i));
                }
                let dataImage = dataList[0].GeneralPhoto.split(',');
                if (dataList.length > 0) {
                    const records = {
                        "records": {
                            "IndexId": "",
                            "SchlId": this.schoolId,
                            "VistUId": this.vistId,
                            "SiteNum": dataList[0].SiteNum,
                            "TotalArea": dataList[0].TotalArea,
                            "TotalLandAreaExcludPg": dataList[0].TotalLandAreaExcludPg,
                            "LaptopNumFunc": dataList[0].LaptopNumFunc,
                            "ComputerNumFunc": dataList[0].ComputerNumFunc,
                            "TabNumFunc": dataList[0].TabNumFunc,
                            "ScannerNumFunc": dataList[0].ScannerNumFunc,
                            "PrinterNumFunc": dataList[0].PurpPrinterFun,
                            "PrjctrNumFunc": dataList[0].PrjctrNumFunc,
                            "InternetYn": dataList[0].InternetYn == "false" ? 2 : 1,
                            "InternetType": dataList[0].InternetType,
                            "InternetTypeOthers": dataList[0].InternetTypeOthers,
                            "InternetServProv": dataList[0].InternetServProv,
                            "InternetServProvOthers": dataList[0].InternetServProvOthers,
                            "Bandwidth": dataList[0].Bandwidth,
                            "GeneralPhoto": dataImage[1],
                            // "ElectricityAvai": dataList[0].ElectricityAvai,
                            "SolarPanelAvai": dataList[0].SolarPanelAvai,
                            "GeneratorAvai": dataList[0].GeneratorAvai,
                        }
                    };
                    // console.log("records",records)
                    this.sidsService.SidsGeneralQues(records).subscribe(res => {
                        if (res.dataStatus) {
                            let query = 'UPDATE sids_general_schooldata SET Status = ' + "1" + ' WHERE sids_general_schooldata.SchlId = "' + this.schoolId + '" And sids_general_schooldata.VistUId = "' + this.vistId + '"';
                            return this.sqliteDB.update(query).then(data => {
                                const datainsert = "INSERT INTO sidsGeneralServer VALUES (?,?,?,?)";
                                this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "1"]).then(insertres => {
                                    console.log('server inserted successfully', insertres);
                                });
                                this.generalServerData();
                                this.alertService.success('Saved Successfully');
                            });
                        }
                    });
                }
            }
        });
    }
    onSyncSaveCommon() {
        let safety = 'SELECT * FROM sids_safety_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let playground = 'SELECT * FROM sids_playground_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let compoundWall = 'SELECT * FROM sids_compoundwall_data' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        let water = 'SELECT * FROM sids_water_schooldata' +
            ' WHERE SchlId = "' + this.schoolId + '"' +
            ' And VistUId = "' + this.vistId + '"';
        return this.sqliteDB.getDataLocalDB(safety).then(data1 => {
            return this.sqliteDB.getDataLocalDB(playground).then(data2 => {
                return this.sqliteDB.getDataLocalDB(compoundWall).then(data3 => {
                    return this.sqliteDB.getDataLocalDB(water).then(data4 => {
                        let dataList1 = [];
                        let dataList3 = [];
                        let dataList4 = [];
                        let dataList2 = [];
                        if (data1.rows.length > 0) {
                            for (var i = 0; i < data1.rows.length; i++) {
                                dataList1.push(data1.rows.item(i));
                            }
                        }
                        if (data2.rows.length > 0) {
                            for (var i = 0; i < data2.rows.length; i++) {
                                dataList2.push(data2.rows.item(i));
                            }
                        }
                        if (data3.rows.length > 0) {
                            for (var i = 0; i < data3.rows.length; i++) {
                                dataList3.push(data3.rows.item(i));
                            }
                        }
                        if (data4.rows.length > 0) {
                            for (var i = 0; i < data4.rows.length; i++) {
                                dataList4.push(data4.rows.item(i));
                            }
                        }
                        if (dataList1.length > 0 && dataList2.length > 0 && dataList3.length > 0 && dataList4.length > 0) {
                            let data = {
                                "records": {
                                    "IndexId": "",
                                    "SchlId": this.schoolId,
                                    "VistUId": this.vistId,
                                    "EBliShiYn": dataList1[0].EBliShiYn == "false" ? 2 : dataList1[0].EBliShiYn == "true" ? 1 : dataList1[0].EBliShiYn == true ? 1 : 2,
                                    "RefilAreReq": dataList1[0].RefilAreReq == "false" ? 2 : dataList1[0].RefilAreReq == "true" ? 1 : dataList1[0].RefilAreReq == true ? 1 : 2,
                                    "WatLoggYn": dataList1[0].WatLoggYn == "false" ? 2 : dataList1[0].WatLoggYn == "true" ? 1 : dataList1[0].WatLoggYn == true ? 1 : 2,
                                    "WatLogRepair": dataList1[0].WatLogRepair,
                                    "OpenWellYn": dataList1[0].OpenWellYn == "false" ? 2 : dataList1[0].OpenWellYn == "true" ? 1 : dataList1[0].OpenWellYn == true ? 1 : 2,
                                    "CmnDustbinYN": dataList1[0].CmnDustbinYN == "false" ? 2 : dataList1[0].CmnDustbinYN == "true" ? 1 : dataList1[0].CmnDustbinYN == true ? 1 : 2,
                                    "PlaygroYn": dataList2[0].PlaygroYn == "false" ? 2 : dataList2[0].PlaygroYn == "true" ? 1 : dataList2[0].PlaygroYn == true ? 1 : 2,
                                    "PlaygroOutdoorGamYn": dataList2[0].PlaygroOutdoorGamYn == "false" ? 2 : dataList2[0].PlaygroOutdoorGamYn == "true" ? 1 : dataList2[0].PlaygroOutdoorGamYn == true ? 1 : 2,
                                    "PlaygroArea": dataList2[0].PlaygroArea,
                                    "OutsiClsNum": dataList2[0].OutsiClsNum,
                                    "WatAvaiSchool": dataList4[0].WatAvaiSchool,
                                    "ResUnAvaiWater": dataList4[0].ResUnAvaiWater ? dataList4[0].ResUnAvaiWater.toString() : dataList4[0].ResUnAvaiWater,
                                    "srcWaterAvai": dataList4[0].srcWaterAvai ? dataList4[0].srcWaterAvai.toString() : dataList4[0].srcWaterAvai,
                                    "srcWaterOthers": dataList4[0].srcWaterOthers,
                                    "BorWelFunc": dataList4[0].BorWelFunc,
                                    "FreqWaterAvail": dataList4[0].FreqWaterAvail,
                                    "DWSumpYn": dataList4[0].DWSumpYn == "false" ? 2 : dataList4[0].DWSumpYn == "true" ? 1 : dataList4[0].DWSumpYn == true ? 1 : 2,
                                    "DWSumpFun": dataList4[0].DWSumpFun,
                                    "DWSumpAvai": dataList4[0].DWSumpAvai,
                                    "DWPumpYn": dataList4[0].DWPumpYn == "false" ? 2 : dataList4[0].DWPumpYn == "true" ? 1 : dataList4[0].DWPumpYn == true ? 1 : 2,
                                    "DWPumpFun": dataList4[0].DWPumpFun,
                                    "DWPumpRepair": dataList4[0].DWPumpRepair,
                                    "NumDWStation": dataList4[0].NumDWStation,
                                    "WaterRoFunc": dataList4[0].WaterRoFunc,
                                    "srcDrnkWaterAvai": dataList4[0].srcDrnkWaterAvai,
                                    "srcDrnkWaterAvaiOthers": dataList4[0].srcDrnkWaterAvaiOthers,
                                    "WaterComHandwash": dataList4[0].WaterComHandwash,
                                    "CmpdwallSta": dataList3[0].CmpdwallSta,
                                    "CmpdwallReqLen": dataList3[0].CmpdwallReqLen,
                                    "CmpdwallReqt": dataList3[0].CmpdwallReqt ? dataList3[0].CmpdwallReqt.toString() : dataList3[0].CmpdwallReqt,
                                    "CmpdwallHTInc": dataList3[0].CmpdwallHTInc,
                                    "AreaWW": dataList3[0].AreaWW,
                                    "AreaReplastering": dataList3[0].AreaReplastering,
                                    "AreaBrickwork": dataList3[0].AreaBrickwork,
                                    "SchoolTotalGates": dataList3[0].SchoolTotalGates,
                                    "GateFunc": dataList3[0].GateFunc,
                                }
                            };
                            this.sidsService.SecSidsSchlGenrlInfo(data).subscribe(res => {
                                if (res.dataStatus) {
                                    const datainsert = "INSERT INTO sidsCommonServer VALUES (?,?,?,?)";
                                    this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "1"]).then(insertres => {
                                        console.log('server inserted successfully', insertres);
                                    });
                                    this.serverData();
                                    this.alertService.success('Saved Successfully');
                                }
                            });
                        }
                    });
                });
            });
        });
    }
    onSyncSaveBuilding() {
        let query = 'SELECT * FROM sidsBuildSavesDatas' +
            ' WHERE SclId = "' + this.schoolId + '"' +
            ' And VistId = "' + this.vistId + '"' +
            ' And Status = 2 And ClosingQuestions = 2';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                let dataListBuilding = [];
                for (var i = 0; i < data.rows.length; i++) {
                    dataListBuilding.push(data.rows.item(i));
                }
                console.log("checkBuildSavedata", dataListBuilding);
                if (dataListBuilding.length > 0) {
                    let query = 'SELECT * FROM sidsBuildingQuestion' +
                        ' WHERE SclId = "' + this.schoolId + '"' +
                        ' And BuildingId = "' + dataListBuilding[0].BuildingId + '"' +
                        ' And VistId = "' + this.vistId + '"';
                    return this.sqliteDB.getDataLocalDB(query).then(datas => {
                        let dataListBuildingSave = [];
                        for (var i = 0; i < datas.rows.length; i++) {
                            dataListBuildingSave.push(datas.rows.item(i));
                        }
                        if (dataListBuildingSave.length > 0) {
                            let data = {
                                "records": {
                                    "IndexId": "",
                                    "SchlId": this.schoolId,
                                    "VistId": this.vistId,
                                    "BldgId": dataListBuilding[0].BuildingId,
                                    "BldgName": dataListBuildingSave[0].BldgName,
                                    "BldgFundSourceCons": dataListBuildingSave[0].BldgFundSourceCons,
                                    "BldgFundSourceConsOthers": dataListBuildingSave[0].BldgFundSourceConsOthers,
                                    "BldgType": dataListBuildingSave[0].BldgType,
                                    "BldgLength": dataListBuildingSave[0].BldgLength,
                                    "BldgBre": dataListBuildingSave[0].BldgBre,
                                    "BldgCondition": dataListBuildingSave[0].BldgCondition,
                                    "BldgRepair": dataListBuildingSave[0].BldgRepair,
                                    "BldgYrConst": dataListBuildingSave[0].BldgYrConst,
                                    "BldgConstAgency": dataListBuildingSave[0].BldgConstAgency,
                                    "BldgConstOthers": dataListBuildingSave[0].BldgConstOthers,
                                    "BldgFrontPhoto": dataListBuildingSave[0].BldgFrontPhoto,
                                    "BldgExterior": dataListBuildingSave[0].BldgExterior,
                                    "BldgInterior": dataListBuildingSave[0].BldgInterior,
                                    "RainWaterFacilityYn": dataListBuildingSave[0].RainWaterFacilityYn == "false" ? 2 : dataListBuildingSave[0].RainWaterFacilityYn == "true" ? 1 : dataListBuildingSave[0].RainWaterFacilityYn,
                                    // "BldgBackPhoto": dataListBuildingSave[0].BldgBackPhoto,
                                    // "BldgRightSidePhoto": dataListBuildingSave[0].BldgRightSidePhoto,
                                    // "BldgLeftSidePhoto": dataListBuildingSave[0].BldgLeftSidePhoto,
                                    "LATITUDE": dataListBuildingSave[0].LATITUDE,
                                    "LOGITUDE": dataListBuildingSave[0].LOGITUDE,
                                    "PipeNeedHwDw": dataListBuildingSave[0].PipeNeedHwDw,
                                    "PipeNeedToilet": dataListBuildingSave[0].PipeNeedToilet,
                                    "WireLenElectrcty": dataListBuildingSave[0].WireLenElectrcty,
                                    "AreaWaterLeakage": dataListBuildingSave[0].AreaWaterLeakage,
                                    "AreaExtWw": dataListBuildingSave[0].AreaExtWw,
                                    "AreaIntWw": dataListBuildingSave[0].AreaIntWw,
                                    "AreaReplasting": dataListBuildingSave[0].AreaReplasting,
                                    "AreaReflooring": dataListBuildingSave[0].AreaReflooring,
                                    "AreaFlrPatchwrk": dataListBuildingSave[0].AreaFlrPatchwrk,
                                    "AuditoriumYn": dataListBuildingSave[0].AuditoriumYn == "false" ? 2 : dataListBuildingSave[0].AuditoriumYn == "true" ? 1 : dataListBuildingSave[0].AuditoriumYn,
                                    "AudiStageStatus": dataListBuildingSave[0].AudiStageStatus,
                                    "AuditoriumLights": dataListBuildingSave[0].AuditoriumLights,
                                    "AuditoriumFans": dataListBuildingSave[0].AuditoriumFans,
                                    "AuditoriumPrjtYn": dataListBuildingSave[0].AuditoriumPrjtYn == "false" ? 2 : dataListBuildingSave[0].AuditoriumPrjtYn == "true" ? 1 : dataListBuildingSave[0].AuditoriumPrjtYn,
                                    "RampAvailYn": dataListBuildingSave[0].RampAvailYn,
                                    "RampRepairYn": dataListBuildingSave[0].RampRepairYn == "false" ? 2 : dataListBuildingSave[0].RampRepairYn == "true" ? 1 : dataListBuildingSave[0].RampRepairYn,
                                    "RampHandrailYn": dataListBuildingSave[0].RampHandrailYn == "false" ? 2 : dataListBuildingSave[0].RampHandrailYn == "true" ? 1 : dataListBuildingSave[0].RampHandrailYn,
                                    "FireExtYn": dataListBuildingSave[0].FireExtYn == "false" ? 2 : dataListBuildingSave[0].FireExtYn == "true" ? 1 : dataListBuildingSave[0].FireExtYn,
                                    "BuildReapairComArea": dataListBuildingSave[0].BuildReapairComArea == "false" ? 2 : dataListBuildingSave[0].BuildReapairComArea == "true" ? 1 : dataListBuildingSave[0].BuildReapairComArea,
                                    "AreaWeatheringReq": dataListBuildingSave[0].AreaWeatheringReq == "false" ? 2 : dataListBuildingSave[0].AreaWeatheringReq == "true" ? 1 : dataListBuildingSave[0].AreaWeatheringReq,
                                    "AreaPressedTiles": dataListBuildingSave[0].AreaPressedTiles == "false" ? 2 : dataListBuildingSave[0].AreaPressedTiles == "true" ? 1 : dataListBuildingSave[0].AreaPressedTiles,
                                }
                            };
                            this.sidsService.SecSidsBulidVisit(data).subscribe(res => {
                                if (res.dataStatus) {
                                    this.alertService.success('Saved Successfully');
                                    let query = 'UPDATE sidsBuildSavesDatas SET Status = ' + "3" + ',ClosingQuestions =' + "3" + ' WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + dataListBuilding[0].BuildingId + '"';
                                    let query2 = 'DELETE FROM SidsBulidVisitGet WHERE SchlId = "' + this.schoolId + '"' +
                                        ' And VistUId = "' + this.vistId + '"' + ' And BuildId = "' + dataListBuilding[0].BuildingId + '"';
                                    return this.sqliteDB.update(query).then(data => {
                                        return this.sqliteDB.getDataLocalDB(query2).then(data => {
                                            let BuildIndexId = res.IndexId;
                                            let query = 'SELECT * FROM sidsFloorSaveDatas' +
                                                ' WHERE SclId = "' + this.schoolId + '"' +
                                                ' And VistId = "' + this.vistId + '"' +
                                                ' And Status = 2 And FloorClose = 2';
                                            return this.sqliteDB.getDataLocalDB(query).then(data => {
                                                if (data.rows.length > 0) {
                                                    let dataListData = [];
                                                    for (var i = 0; i < data.rows.length; i++) {
                                                        dataListData.push(data.rows.item(i));
                                                    }
                                                    if (dataListData.length > 0) {
                                                    }
                                                }
                                            });
                                        });
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    }
};
CommonDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__.FileTransfer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
CommonDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-common-dashboard',
        template: _raw_loader_common_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_common_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommonDashboardPage);



/***/ }),

/***/ 91445:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.page.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menuicon {\n  width: 30%;\n  margin: 10px auto;\n  overflow: visible;\n}\n\n.menu-text {\n  padding: 10px !important;\n}\n\n.question {\n  background-color: #F3F4FA !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local {\n  background-color: #70BBFF !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local ion-label {\n  color: white !important;\n  font-weight: 500;\n}\n\n.server {\n  background-color: #A37A5C !important;\n  color: white;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBRTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUZJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUlOOztBQUFFO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKIiwiZmlsZSI6ImNvbW1vbi1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVpY29uIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5tZW51LXRleHR7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnF1ZXN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjNGNEZBICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICBcclxuICAubG9jYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwQkJGRiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTM3QTVDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 14610:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"chevronback\" size=\"large\" name=\"chevron-back-outline\" (click)=\"goback()\"></ion-icon>\r\n    </ion-buttons> -->\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goback()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"padding-left: 10px;\">SIDS Dashboard ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-card style=\"padding-bottom: 30px;\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"menu menus-txt secondary\" *ngFor=\"let item of menuLists; let i = index\" style=\"background-color: white;\">\r\n        \r\n        <div [ngClass]=\"(item.sync == 1) ? 'question' : (item.sync == 2) ? 'local' : 'server'\">\r\n          <ion-row (click)=\"navigateNext(item)\">\r\n            <img [src]=\"(item.sync == 1) ? item.image : (item.sync == 2) ? item.server : item.server\" class=\"menuicon\">\r\n            <ion-col size=\"12\" class=\"menu-text\" style=\"text-align: center;\">\r\n              <ion-label *ngIf=\"item.sync == 1\" style=\"color: #555555; font-weight: 400;\">{{item.menu}}</ion-label>\r\n              <ion-label *ngIf=\"item.sync == 2\" style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n              <ion-label *ngIf=\"item.sync == 3\" style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <!-- <div *ngIf=\"serverDatas && generalServer && serverDataBuilding && serverDataFloor && serverDataRoom\" class=\"server\">\r\n          <ion-row (click)=\"navigateNext(item,item.menu)\">\r\n            <img [src]=\"item.server\" class=\"menuicon\">\r\n            <ion-col size=\"12\" class=\"menu-text\" style=\"text-align: center;\">\r\n              <ion-label style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div> -->\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-row *ngIf=\"serverDatas || serverDataBuilding && serverDataFloor && serverDataRoom\" style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: #A27B5C;font-weight: bold; text-align: center;\">\r\n      <ion-label>Only partial data has been entered. Enter all data and submit final save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: rgb(139, 103, 179);font-weight: bold;\">\r\n      <ion-label>Data cannot be edited once synced to server\r\n      </ion-label>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"8\" style=\"text-align: center;margin-bottom: 5%;\">\r\n      <ion-label>Data Saved in Local</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" style=\"margin-bottom: 5%;\">\r\n      <img src=\"assets/icons/syncwithserver.svg\" class=\"floImg\">\r\n    </ion-col>\r\n    <ion-col size=\"8\" style=\"text-align: center;\">\r\n      <ion-label>Data Saved in Server</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <img src=\"assets/icons/localSync.svg\" class=\"floImg\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;margin-top: 3%;color: rgb(165, 7, 7);font-weight: bold;\">\r\n      <ion-label>Notes : </ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: rgb(139, 103, 179);font-weight: bold;\">\r\n      <ion-label>Please click on final save only if you have completed the visit and submitted all details fully.\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row (click)=\"finalSave()\" style=\"text-align: center;color: aliceblue;padding: 10px\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n      <ion-label> Final Save </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_dashboard_common-dashboard_common-dashboard_module_ts-es2015.js.map