(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuiyakamsession_vasipuiyakamsession_module_ts"],{

/***/ 32942:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamsessionPageRoutingModule": function() { return /* binding */ VasipuiyakamsessionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuiyakamsession.page */ 74503);




const routes = [
    {
        path: '',
        component: _vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamsessionPage
    }
];
let VasipuiyakamsessionPageRoutingModule = class VasipuiyakamsessionPageRoutingModule {
};
VasipuiyakamsessionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VasipuiyakamsessionPageRoutingModule);



/***/ }),

/***/ 65266:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamsessionPageModule": function() { return /* binding */ VasipuiyakamsessionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vasipuiyakamsession_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vasipuiyakamsession-routing.module */ 32942);
/* harmony import */ var _vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuiyakamsession.page */ 74503);







let VasipuiyakamsessionPageModule = class VasipuiyakamsessionPageModule {
};
VasipuiyakamsessionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _vasipuiyakamsession_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamsessionPageRoutingModule
        ],
        declarations: [_vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_1__.VasipuiyakamsessionPage]
    })
], VasipuiyakamsessionPageModule);



/***/ }),

/***/ 74503:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VasipuiyakamsessionPage": function() { return /* binding */ VasipuiyakamsessionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vasipuiyakamsession_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vasipuiyakamsession.page.html */ 76682);
/* harmony import */ var _vasipuiyakamsession_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vasipuiyakamsession.page.scss */ 7220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _instruction_instruction_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../instruction/instruction.page */ 90737);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);














let VasipuiyakamsessionPage = class VasipuiyakamsessionPage {
    constructor(route, userService, modalCtrl, router, sqliteDB, fb, alertService, http, usersessionService, alertController, loading) {
        this.route = route;
        this.userService = userService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.sqliteDB = sqliteDB;
        this.fb = fb;
        this.alertService = alertService;
        this.http = http;
        this.usersessionService = usersessionService;
        this.alertController = alertController;
        this.loading = loading;
        this.dataList = [];
        this.batchRecord = [];
        this.studentRecordFilter = [];
        this.totalStudentRecord = [];
        this.dataListInstruction = [];
        this.classData = [];
        this.classdataList = [];
        this.classresult = [];
        this.batchListtest = [];
        this.compleBatchStatus = false;
        this.activeClass = 0;
        this.totalsecData = [];
        this.emis_username = this.usersessionService.emis_username();
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.vasiIpyakam();
        this.routeData = this.route.snapshot;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.schoolName = this.routeData.queryParams.schoolName;
        this.activeClass = 0;
        this.CycleId = this.routeData.queryParams.CycleId;
        this.InsertClsSec = this.routeData.queryParams.InsertClsSec;
        this.TotalClsSec = this.routeData.queryParams.TotalClsSec;
        console.log(this.TotalClsSec, this.CycleId, this.InsertClsSec, "this.InsertClsSec");
        this.userID = this.emis_username;
        this.attadActive = false;
        this.classActive = false;
        this.compleBatchStatus = false;
        this.filterActive = false;
        this.filterClasssec = '';
        this.filtersec = '';
        var date = new Date();
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        this.currentDate = [year, month, day].join('-');
        this.onSelectTotalSec();
        this.localClassGETJSONDetails();
        // this.localbatchRecord();
        this.localInstructionRecord();
        this.getlocalStudentRecord();
        this.nextStudentlistActive = false;
        // this.Index = 0;
        this.initializeForm();
    }
    localbatchRecord() {
        let query = 'SELECT * FROM VIStatusbatchDatas' +
            ' WHERE userid = ' + this.userID;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataListbatch = [];
                this.batchRecord = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataListbatch.push(data.rows.item(i));
                }
                this.batchRecord = this.dataListbatch;
                // console.log("batchRecord Local",this.batchRecord)
            }
            else {
                if (this.batchRecord.length > 0) {
                    this.insertLocalBatchData(this.batchRecord);
                }
                else {
                    this.getbatchDetails();
                }
            }
        });
    }
    getbatchDetails() {
        this.batchRecord = [];
        this.batchRecord.push({ batchid: 1, batch: 1, sync: 1, schoolId: this.schoolId, userid: this.userID });
        for (let i = 2; i <= 4; i++) {
            this.batchRecord.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID });
        }
        this.insertLocalBatchData(this.batchRecord);
    }
    insertLocalBatchData(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO VIStatusbatchDatas VALUES (?,?,?,?,?,?,?,?,?)",
                [null, element.batchid, element.batch, '', element.sync, '',
                    element.userid, this.currentDate, 0]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored status batch Locally", result);
            this.localbatchRecord();
        });
    }
    localInstructionRecord() {
        this.dataListInstruction = [];
        let query = 'SELECT * FROM VIInstructionData' +
            ' WHERE userid = ' + this.userID;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.inActive = true;
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataListInstruction.push(data.rows.item(i));
                }
            }
            else {
                this.inActive = false;
                this.schoolAlert(0);
            }
        });
    }
    schoolAlert(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _instruction_instruction_page__WEBPACK_IMPORTED_MODULE_4__.InstructionPage,
                componentProps: { schoolID: this.schoolId, sync: id },
                cssClass: 'view-image-modal'
            });
            yield modal.present();
            const { data, role } = yield modal.onWillDismiss();
            if (role == 'success') {
            }
        });
    }
    localClassGETJSONDetails() {
        this.batchRecord = [];
        this.batchListtest = [];
        let query = 'SELECT * FROM VIClassData' +
            ' WHERE UserId = "' + this.userID + '"';
        //  +
        //   ' WHERE UserId = "' + this.userID + '"';
        //  + '"' +
        // ' And school_id = "' + this.schoolId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.totalclassJsonData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.totalclassJsonData.push(data.rows.item(i));
                }
                this.classJsonData = this.totalclassJsonData.filter(item => item.school_id == this.schoolId);
                // console.log(this.totalclassJsonData,"this.totalclassJsonData");
                if (this.classJsonData.length != 0) {
                    this.activeClass = 1;
                }
                this.dateclassJsonData = this.totalclassJsonData.filter(item => item.ActiveDate == this.currentDate);
                const uniqueAddresses1 = Array.from(new Set(this.dateclassJsonData.map(a => a.Batch)))
                    .map(Batch => {
                    return this.dateclassJsonData.find(a => a.Batch === Batch);
                });
                let uniqueAddresses = uniqueAddresses1.sort((a, b) => a.Batch.toString().localeCompare(b.Batch.toString()));
                let cmpbatch = uniqueAddresses.filter(item => item.school_id == this.schoolId);
                this.cmpbatch = cmpbatch.length;
                for (let w = 0; w < uniqueAddresses.length; w++) {
                    // this.batchRecord.push({ batchid: uniqueAddresses[w].Batch, batch: uniqueAddresses[w].Batch, sync: 3, schoolId: this.schoolId, userid: this.userID })
                    // this.batchListtest.push({ batchid: uniqueAddresses[w].Batch, batch: uniqueAddresses[w].Batch, sync: 3, schoolId: this.schoolId, userid: this.userID })
                    this.batchListtest.push({ batchid: w + 1, batch: w + 1, sync: 3, schoolId: this.schoolId, userid: this.userID });
                }
                this.localbatchRecord();
                // if (this.batchListtest.length == 0) {
                //   this.batchRecord = []
                //   this.batchRecord.push({ batchid: 1, batch: 1, sync: 1, schoolId: this.schoolId, userid: this.userID })
                //   for (let i = 2; i <= 4; i++) {
                //     this.batchRecord.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID })
                //   }
                //   this.localbatchRecord()
                // }
                // if (this.batchListtest.length < 4) {
                //   if (this.batchListtest.length == 1) {
                //     for (let i = 2; i <= 4; i++) {
                //       let sync = 0
                //       if (i == 2) {
                //         sync = 1
                //       }
                //       this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord()
                //   }
                //   if (this.batchListtest.length == 2) {
                //     for (let i = 3; i <= 4; i++) {
                //       let sync = 0
                //       if (i == 3) {
                //         sync = 1
                //       }
                //       this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord()
                //   }
                //   if (this.batchListtest.length == 3) {
                //     for (let i = 4; i <= 4; i++) {
                //       let sync = 0
                //       if (i == 4) {
                //         sync = 1
                //       }
                //       this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord()
                //   }
                // } else {
                //   if (this.batchListtest.length == 0) {
                //     this.batchRecord = []
                //     this.batchRecord.push({ batchid: 1, batch: 1, sync: 1, schoolId: this.schoolId, userid: this.userID })
                //     for (let i = 2; i <= 4; i++) {
                //       this.batchRecord.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID })
                //       this.batchListtest.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord() 
                //   }
                // }
                // console.log(this.classJsonData,"this.classJsonData");
                this.localTotalBatchDetails();
            }
            else {
                console.log("server class");
                this.getclassJSON();
            }
        });
    }
    localTotalBatchDetails() {
        this.totalBatchData = [];
        this.totalBatchStatus = [];
        this.compleBatchStatus = false;
        let query = 'SELECT * FROM VIBatchData' +
            ' WHERE UserId = "' + this.userID + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.totalBatchStatus.push(data.rows.item(i));
                }
                this.totalBatchData = this.totalBatchStatus.filter(item => item.SchlId == this.schoolId);
                // console.log(this.totalBatchData, "this.totalBatchStatus");
                if (this.totalBatchData[0].InsertBatchCount == this.totalBatchData[0].BatchCount) {
                    this.compleBatchStatus = true;
                }
                // this.createUserBatch()
            }
            else {
                // this.getclassJSON()
            }
        });
    }
    getclassJSON() {
        this.totalBatchData = [];
        this.classJsonData = [];
        this.batchRecord = [];
        this.compleBatchStatus = false;
        this.userService.vasipuIyakamClassSecStatus(this.emis_username).subscribe((res) => {
            if (res.result) {
                let VIStudsListStoreGet = res.result.VIStudsListStoreGet;
                let VIUserSchlBatchCount = res.result.VIUserSchlBatchCount;
                let VIUsersTotalClsSec = res.result.VIUsersTotalClsSec;
                let VIUsersCurrentDay = res.result.VIUsersCurrentDay;
                this.totalclassJsonData = VIStudsListStoreGet;
                if (VIStudsListStoreGet.length == 0 && (VIUsersCurrentDay.length == 0 || VIUsersCurrentDay.length != 0)) {
                    this.CycleId = parseInt(VIUsersTotalClsSec[0].CycleId) + 1;
                }
                else {
                    this.CycleId = parseInt(VIUsersTotalClsSec[0].CycleId);
                }
                if (VIStudsListStoreGet.length == 0) {
                    // let filterData1 = VIUsersCurrentDay.filter(item=> item.school_id == this.schoolId)
                    // this.classJsonData = filterData1;
                    this.dateclassJsonData = VIUsersCurrentDay.filter(item => item.activity_date == this.currentDate);
                }
                else {
                    let filterData1 = VIStudsListStoreGet.filter(item => item.school_id == this.schoolId);
                    this.classJsonData = filterData1;
                    if (VIStudsListStoreGet.length != 0 && VIUsersCurrentDay.length != 0) {
                        this.dateclassJsonData = VIUsersCurrentDay.filter(item => item.activity_date == this.currentDate);
                    }
                    else {
                        this.dateclassJsonData = VIStudsListStoreGet.filter(item => item.activity_date == this.currentDate);
                    }
                }
                if (this.classJsonData.length != 0) {
                    this.activeClass = 1;
                }
                let filterData2 = VIUserSchlBatchCount.filter(item => item.SchlId == this.schoolId);
                this.totalBatchData = filterData2;
                // this.updateBatchCount()
                // console.log(this.classJsonData,"this.classJsonData",this.totalBatchData,"totalBatchData");
                if (this.totalBatchData[0].InsertBatchCount == this.totalBatchData[0].BatchCount) {
                    this.compleBatchStatus = true;
                }
                const uniqueAddresses1 = Array.from(new Set(this.dateclassJsonData.map(a => a.Batch)))
                    .map(Batch => {
                    return this.dateclassJsonData.find(a => a.Batch === Batch);
                });
                let uniqueAddresses = uniqueAddresses1.sort((a, b) => a.Batch.toString().localeCompare(b.Batch.toString()));
                //  console.log(uniqueAddresses1,uniqueAddresses,"13232435678579");
                let cmpbatch = uniqueAddresses.filter(item => item.school_id == this.schoolId);
                this.cmpbatch = cmpbatch.length;
                if (VIUsersCurrentDay.length == 0) {
                    for (let w = 0; w < uniqueAddresses.length; w++) {
                        this.batchRecord.push({ batchid: uniqueAddresses[w].Batch, batch: uniqueAddresses[w].Batch, sync: 3, schoolId: this.schoolId, userid: this.userID });
                        this.batchListtest.push({ batchid: uniqueAddresses[w].Batch, batch: uniqueAddresses[w].Batch, sync: 3, schoolId: this.schoolId, userid: this.userID });
                    }
                }
                else {
                    for (let w = 0; w < uniqueAddresses.length; w++) {
                        this.batchRecord.push({ batchid: w + 1, batch: w + 1, sync: 3, schoolId: this.schoolId, userid: this.userID });
                        this.batchListtest.push({ batchid: w + 1, batch: w + 1, sync: 3, schoolId: this.schoolId, userid: this.userID });
                    }
                }
                // console.log(this.batchListtest.length,"this.batchListtest.length");
                if (this.batchListtest.length == 0) {
                    this.batchRecord = [];
                    this.batchRecord.push({ batchid: 1, batch: 1, sync: 1, schoolId: this.schoolId, userid: this.userID });
                    for (let i = 2; i <= 4; i++) {
                        this.batchRecord.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID });
                    }
                    this.localbatchRecord();
                }
                if (this.batchListtest.length == 4) {
                    this.localbatchRecord();
                }
                if (this.batchListtest.length < 4) {
                    if (this.batchListtest.length == 1) {
                        for (let i = 2; i <= 4; i++) {
                            let sync = 0;
                            if (i == 2) {
                                sync = 1;
                            }
                            this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID });
                        }
                        this.localbatchRecord();
                    }
                    if (this.batchListtest.length == 2) {
                        for (let i = 3; i <= 4; i++) {
                            let sync = 0;
                            if (i == 3) {
                                sync = 1;
                            }
                            this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID });
                        }
                        this.localbatchRecord();
                    }
                    if (this.batchListtest.length == 3) {
                        for (let i = 4; i <= 4; i++) {
                            let sync = 0;
                            if (i == 4) {
                                sync = 1;
                            }
                            this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID });
                        }
                        this.localbatchRecord();
                    }
                }
                else {
                    if (this.batchListtest.length == 0) {
                        this.batchRecord = [];
                        this.batchRecord.push({ batchid: 1, batch: 1, sync: 1, schoolId: this.schoolId, userid: this.userID });
                        for (let i = 2; i <= 4; i++) {
                            this.batchRecord.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID });
                            this.batchListtest.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID });
                        }
                        this.localbatchRecord();
                    }
                }
                this.insertLocalClassList(VIStudsListStoreGet);
                this.insertLocalTotalBatch(VIUserSchlBatchCount);
                this.insertLocalTotalSecList(VIUsersTotalClsSec);
            }
        });
    }
    updateBatchCount() {
        let count = this.totalBatchData[0].InsertBatchCount;
        // console.log(count,"countcountcount");
        // this.totalBatchData[0].InsertBatchCount = this.classJsonData.length
        let query3 = 'UPDATE VIBatchData SET InsertBatchCount = "' + count + '" WHERE VIBatchData.UserId = "' + this.emis_username + '" And VIBatchData.SchlId = "' + this.schoolId + '"';
        this.sqliteDB.update(query3).then(res => {
            // console.log("upload Batch Count");
        });
    }
    insertLocalClassList(elementData) {
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO VIClassData VALUES (?,?,?,?,?,?,?,?,?)",
                [null, element.class_id, element.section, element.school_id, element.activity_date,
                    element.Batch, this.userID, this.currentDate, 0]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            console.info("LocalData Stored class Locally", result);
        });
    }
    insertLocalTotalBatch(elementData) {
        let query = 'SELECT * FROM VIBatchData' +
            ' WHERE SchlId = "' + this.schoolId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length == 0) {
                let insertRows = [];
                elementData.forEach(element => {
                    let InsertBatchCount;
                    if (element.InsertBatchCount == null || element.InsertBatchCount == "") {
                        InsertBatchCount = 0;
                    }
                    else {
                        InsertBatchCount = element.InsertBatchCount;
                    }
                    insertRows.push([
                        "INSERT INTO VIBatchData VALUES (?,?,?,?,?,?,?)",
                        [null, element.UserId, element.UserName, element.SchlId, element.SchlName, element.BatchCount, InsertBatchCount]
                    ]);
                });
                this.sqliteDB.bulkInsert(insertRows).then((result) => {
                    console.info("LocalData Stored Total batch Locally", result);
                    // this.updateBatchCount()
                    this.localTotalBatchDetails();
                });
            }
        });
    }
    onSelectTotalSec() {
        this.totalsecData = [];
        let query = 'SELECT * FROM VIStatusClsSecData' +
            ' WHERE UserId = "' + this.emis_username + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.totalsecData.push(data.rows.item(i));
                }
                this.TotalClsSec = this.totalsecData[0].TotalClsSec;
                // console.log(this.totalsecData,"this.totalsecData");
            }
            else {
            }
        });
    }
    insertLocalTotalSecList(elementData) {
        let CycleId;
        let InsertClsSec;
        // console.log(elementData,"elementData");
        let query = 'SELECT * FROM VIStatusClsSecData' +
            ' WHERE UserId = "' + this.emis_username + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
            }
            else {
                let insertRows = [];
                // elementData.forEach(element => {
                if (elementData[0].CycleId == null || elementData[0].CycleId == '') {
                    this.CycleId = 1;
                }
                if (elementData[0].InsertClsSec == null || elementData[0].InsertClsSec == "") {
                    InsertClsSec = 0;
                }
                else {
                    InsertClsSec = elementData[0].InsertClsSec;
                }
                this.TotalClsSec = elementData[0].TotalClsSec;
                // console.log(this.TotalClsSec,"this.TotalClsSec");
                insertRows.push([
                    "INSERT INTO VIStatusClsSecData VALUES (?,?,?,?,?)",
                    [null, elementData[0].TotalClsSec, elementData[0].UserId, InsertClsSec, this.CycleId,
                    ]
                ]);
                // });
                this.sqliteDB.bulkInsert(insertRows).then((result) => {
                    console.info("LocalData Stored total section Locally", result);
                    this.onSelectTotalSec();
                });
            }
        });
    }
    getlocalStudentRecord() {
        this.studentRecord = [];
        let query = 'SELECT * FROM VIStudenData' +
            ' WHERE RP_Id = ' + this.userID + ' AND schoolId = ' + this.schoolId;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.studentRecord.push(data.rows.item(i));
                }
                let totalsmallstudent = 0;
                let totalbigstudent = 0;
                let totalsmallstudent4;
                let totalsmallstudent5;
                let totalbigstudent6;
                let totalbigstudent7;
                let totalbigstudent8;
                let totalbigstudent9;
                totalsmallstudent4 = this.studentRecord.filter(item => item.class_studying_id == 4);
                totalsmallstudent5 = this.studentRecord.filter(item => item.class_studying_id == 5);
                totalsmallstudent = totalsmallstudent4.length + totalsmallstudent5.length;
                totalbigstudent6 = this.studentRecord.filter(item => item.class_studying_id == 6);
                totalbigstudent7 = this.studentRecord.filter(item => item.class_studying_id == 7);
                totalbigstudent8 = this.studentRecord.filter(item => item.class_studying_id == 8);
                totalbigstudent9 = this.studentRecord.filter(item => item.class_studying_id == 9);
                totalbigstudent = totalbigstudent6.length + totalbigstudent7.length + totalbigstudent8.length + totalbigstudent9.length;
                this.totalsmallstudent = totalsmallstudent;
                this.totalbigstudent = totalbigstudent;
            }
            else {
            }
        });
    }
    classdropdownList(id) {
        if (parseInt(this.TotalClsSec) == this.totalclassJsonData.length) {
            this.confirmAlert();
        }
        if (this.compleBatchStatus == true) {
            // if( parseInt(this.TotalClsSec)  == this.totalclassJsonData.length) {
            //   this.confirmAlert()
            // } else {
            // this.alertService.success("All Batch completed in " + this.schoolName)
            this.alertPopup("All Batch completed in " + this.schoolName);
            // }
        }
        else {
            if (this.inActive == true) {
                this.index = id;
                this.classActive = true;
                this.classList = [];
                this.classListOrginal = [];
                var result = this.studentRecord.filter(function (a) {
                    var key = a.class_studying_id + '|' + a.class_section;
                    if (!this[key]) {
                        this[key] = true;
                        return true;
                    }
                }, Object.create(null));
                let final = [];
                result.forEach((element) => {
                    let id = element.class_studying_id;
                    if (id == 4 || id == 5 || id == 6 || id == 7 || id == 8 || id == 9) {
                        final.push(element);
                    }
                });
                let cls = [...new Set(final.map(x => x.class_studying_id))];
                cls.forEach((val) => {
                    for (let i = 0; i < final.length; i++) {
                        if (val == final[i].class_studying_id) {
                            let obj = { 'class': final[i].class_studying_id, 'sec': final[i].class_section };
                            this.classList.push(obj);
                            this.classListOrginal.push(obj);
                            // console.log(this.classList,this.classListOrginal,"this school class sec list");
                        }
                    }
                });
            }
            else {
                this.localInstructionRecord();
            }
        }
    }
    // createUserBatch(){
    //   if(this.classJsonData){
    //     const uniqueBatch = Array.from(new Set(this.classJsonData.map(a => a.Batch)))
    //     .map(Batch => {
    //       return this.classJsonData.find(a => a.Batch === Batch)
    //     })
    //     let TotaluniqueBatch = uniqueBatch.sort((a, b) => a.Batch.toString().localeCompare(b.Batch.toString())) 
    //   }
    // }
    initializeForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            class: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
            classList: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
            presentTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
            student_details: this.fb.array([]),
        });
        this.form.controls['total'].disable();
    }
    onSurveyList(item) {
        this.nextStudentlistActive = true;
        const control = this.form.controls['student_details'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = [];
        this.queslist = this.form.controls.student_details;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist.push(this.fb.group({
                    IndxID: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                    SchlID: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.schoolId, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                    class: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[i].class, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                    sec: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[i].sec, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                    total: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                    presentTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                }));
            }
        }
        for (let i = 0; i < item.length; i++) {
            let studentfilter = this.studentRecord.filter(items => (items.class_studying_id == item[i].class) && (items.class_section == item[i].sec));
            this.form.controls['student_details']['controls'][i].controls['total'].setValue(studentfilter.length);
            this.form.controls['student_details']['controls'][i].controls['total'].updateValueAndValidity();
        }
        // console.log(this.form, "form");
    }
    compareClass(classArray) {
        if (this.classJsonData) {
            this.classresult = [];
            for (const obj1 of this.classJsonData) {
                const matchingObj = classArray.find(obj2 => (obj2.class === obj1.class_id) && (obj2.sec === obj1.section));
                if (matchingObj) {
                    this.classresult.push({ class: obj1.class_id, object1: obj1, object2: matchingObj });
                }
            }
            // console.log(this.classresult, "compare class list");
            return this.classresult;
        }
    }
    selectClass(data) {
        this.compareClass(data.detail.value);
        this.classArray = data.detail.value;
        let classArray = data.detail.value;
        let filterclassArray4 = classArray.filter(item => (item.class == '4') || (item.class == '5'));
        let filterclassArray9 = classArray.filter(item => (item.class == '6') || (item.class == '7') || (item.class == '8') || (item.class == '9'));
        if (this.classresult.length != 0) {
            this.form.controls['class'].setValue('');
            this.form.controls['class'].setValidators(null);
            this.form.controls['class'].updateValueAndValidity();
            if (this.classresult.length == 1) {
                // this.alertService.error("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்")
                this.alertPopup("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்");
            }
            else {
                // this.alertService.error("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்")
                this.alertPopup("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்");
            }
            const control = this.form.controls['student_details'];
            for (let i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
            }
            this.activeNextAttd = false;
        }
        else {
            let InsertBatchCount;
            if (this.totalBatchData[0].InsertBatchCount == null) {
                InsertBatchCount = 0;
            }
            else {
                InsertBatchCount = this.totalBatchData[0].InsertBatchCount;
            }
            if ((parseInt(InsertBatchCount) + 1) == parseInt(this.totalBatchData[0].BatchCount)) {
                if (this.classList.length != (this.classJsonData.length + classArray.length)) {
                    this.deleteAlert();
                }
                else {
                    if (this.classList.length == (this.classJsonData.length + classArray.length)) {
                        this.activeNextAttd = true;
                        this.form.controls['total'].setValue('');
                        this.form.controls['presentTotal'].setValue('');
                        this.form.controls['total'].setValidators(null);
                        this.form.controls['presentTotal'].setValidators(null);
                        this.form.controls['total'].updateValueAndValidity();
                        this.form.controls['presentTotal'].updateValueAndValidity();
                        this.totalStudentRecord = [];
                        this.studentRecordFilter = [];
                        if (this.form.value.class.length != 0) {
                            this.nextStudentlistActive = false;
                            let studentfilter;
                            for (let i = 0; i < data.detail.value.length; i++) {
                                studentfilter = this.studentRecord.filter(item => (item.class_studying_id == data.detail.value[i].class) && (item.class_section == data.detail.value[i].sec));
                                for (let i = 0; i < studentfilter.length; i++) {
                                    this.studentRecordFilter.push(studentfilter[i]);
                                }
                                this.studentRecordFilter.sort((a, b) => {
                                    const nameA = a.name.toLowerCase();
                                    const nameB = b.name.toLowerCase();
                                    if (nameA < nameB) {
                                        return -1;
                                    }
                                    if (nameA > nameB) {
                                        return 1;
                                    }
                                    return 0; // names are equal
                                });
                                this.totalStudentRecord = this.studentRecordFilter;
                            }
                            this.onSurveyList(data.detail.value);
                        }
                        else {
                            // this.alertService.error('Please select class');
                            this.alertPopup('Please select class');
                        }
                    }
                }
            }
            else {
                if (filterclassArray4.length != 0 && filterclassArray9.length != 0) {
                    this.form.controls['class'].setValue('');
                    this.form.controls['class'].setValidators(null);
                    this.form.controls['class'].updateValueAndValidity();
                    // this.alertService.error("4&5 தொடக்க நிலை வகுப்புகளையும் 6 முதல் 9 வகுப்பு வரை உள்ள உயர்நிலை வகுப்புகளையும் இணைக்க இயலாது")
                    this.alertPopup("4&5 தொடக்க நிலை வகுப்புகளையும் 6 முதல் 9 வகுப்பு வரை உள்ள உயர்நிலை வகுப்புகளையும் இணைக்க இயலாது");
                    this.activeNextAttd = false;
                    const control = this.form.controls['student_details'];
                    for (let i = control.length - 1; i >= 0; i--) {
                        control.removeAt(i);
                    }
                }
                else {
                    this.activeNextAttd = true;
                    this.form.controls['total'].setValue('');
                    this.form.controls['presentTotal'].setValue('');
                    this.form.controls['total'].setValidators(null);
                    this.form.controls['presentTotal'].setValidators(null);
                    this.form.controls['total'].updateValueAndValidity();
                    this.form.controls['presentTotal'].updateValueAndValidity();
                    this.totalStudentRecord = [];
                    this.studentRecordFilter = [];
                    if (this.form.value.class.length != 0) {
                        this.nextStudentlistActive = false;
                        let studentfilter;
                        for (let i = 0; i < data.detail.value.length; i++) {
                            studentfilter = this.studentRecord.filter(item => (item.class_studying_id == data.detail.value[i].class) && (item.class_section == data.detail.value[i].sec));
                            for (let i = 0; i < studentfilter.length; i++) {
                                this.studentRecordFilter.push(studentfilter[i]);
                            }
                            this.studentRecordFilter.sort((a, b) => {
                                const nameA = a.name.toLowerCase();
                                const nameB = b.name.toLowerCase();
                                if (nameA < nameB) {
                                    return -1;
                                }
                                if (nameA > nameB) {
                                    return 1;
                                }
                                return 0; // names are equal
                            });
                            this.totalStudentRecord = this.studentRecordFilter;
                        }
                        this.onSurveyList(data.detail.value);
                    }
                    else {
                        // this.alertService.error('Please select class');
                        this.alertPopup('Please select class');
                    }
                }
            }
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    gotoAttandPage(classdata) {
        if (this.form.controls.presentTotal.value == this.form.controls.total.value) {
            this.gotoNext(classdata.toString());
        }
        else {
            if (this.form.valid) {
                this.attadActive = true;
            }
            else {
                this.validateAllFormFields(this.form);
                this.alertService.error("Please fill all Field");
            }
        }
    }
    callPhoneNumber(phoneNumber) {
        const telUrl = 'tel:' + phoneNumber;
        window.open(telUrl, '_system');
    }
    gotostudentpage() {
        this.attadActive = false;
    }
    gotoNext(classdata) {
        this.classData = [];
        let total = this.studentRecordFilter.filter(item => item.prst == '');
        let totalabst = this.studentRecordFilter.filter(item => (item.prst == 1) || (item.prst == 2));
        // let userName = totalabst.map(user_id => user_id.user_id)
        // console.log(totalabst,"totalabst");
        this.totalprstOD = parseInt(this.form.value.total) - parseInt(this.form.value.presentTotal);
        this.totalStudent = this.studentRecordFilter.length;
        for (var q = 0; q < this.form.controls.class.value.length; q++) {
            let finaltotalabsts = this.studentRecordFilter.filter(item => (item.class_studying_id == this.form.controls.class.value[q].class && item.class_section == this.form.controls.class.value[q].sec && item.prst == ''));
            let totalabstsperClass = this.studentRecordFilter.filter(item => (item.class_studying_id == this.form.controls.class.value[q].class && item.class_section == this.form.controls.class.value[q].sec));
            // let datafinaltotalabsts = userName.filter(item=> (item.class == this.form.controls.class.value[q].class_studying_id && item.class_section == this.form.controls.class.value[q].sec && item.prst == ''))
            let totalabsts = this.studentRecordFilter.filter(item => (item.class_studying_id == this.form.controls.class.value[q].class && item.class_section == this.form.controls.class.value[q].sec) && (item.prst == 1 || item.prst == 2));
            let userName = totalabsts.map(user_id => user_id.user_id);
            if (this.form.controls.student_details.value[q].presentTotal == finaltotalabsts.length) {
                let data = {
                    "ClsId": this.form.controls.class.value[q].class,
                    "SchlId": this.schoolId,
                    "Sec": this.form.controls.class.value[q].sec,
                    "TotStudnt": totalabstsperClass.length,
                    "AbsentStud": userName.toString()
                };
                this.classData.push(data);
                // console.log(data,"datadata",this.classData);
            }
            else {
                total = [];
            }
        }
        if (total.length == parseInt(this.form.value.presentTotal)) {
            this.classinsertLocalData(this.classData);
        }
        else {
            let count = this.studentRecordFilter.length - parseInt(this.form.value.presentTotal);
            if (this.form.value.class.length == 1) {
                // this.alertService.error('வருகை தராத மாணவர்களின் எண்ணிக்கை ' + count + ' சரியாக உள்ளீடவும்.')
                this.alertPopup('வருகை தராத மாணவர்களின் எண்ணிக்கை ' + count + ' சரியாக உள்ளீடவும்.');
            }
            else {
                // this.alertService.error('வகுப்பு வாரியாக வருகை தராத மாணவர்களின் எண்ணிக்கையை '+ count +' சரியாக உள்ளீடவும்.')
                this.alertPopup('வகுப்பு வாரியாக வருகை தராத மாணவர்களின் எண்ணிக்கையை ' + count + ' சரியாக உள்ளீடவும்.');
            }
        }
    }
    classinsertLocalData(elementData) {
        let cls = JSON.stringify(this.form.controls.class.value);
        let insertRows = [];
        elementData.forEach(element => {
            insertRows.push([
                "INSERT INTO vasipuBatchStudentTable VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [null, '', '', '', element.ClsId,
                    element.Sec, this.index, element.ClsId, this.schoolId, element.Sec, element.TotStudnt, element.AbsentStud, this.userID, this.currentDate, 0]
            ]);
        });
        this.sqliteDB.bulkInsert(insertRows).then((result) => {
            // console.log("Abdullll",this.batchRecord)
            console.info("LocalData Stored FInal students Locally", result);
            this.goToNextPage(this.index);
        });
    }
    nextpageOut(id, schoolId) {
        if (this.compleBatchStatus == true) {
            if (parseInt(this.TotalClsSec) == this.totalclassJsonData.length) {
                this.confirmAlert();
            }
            else {
                // this.alertService.success("All Batch completed")
                this.alertPopup("All Batch completed");
            }
        }
        else {
            if (schoolId == this.schoolId) {
                let cls = JSON.stringify(this.form.controls.class.value);
                this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": id, "status": 1, "class": cls, "CycleId": this.CycleId, "InsertClsSec": this.InsertClsSec, "schoolName": this.schoolName } });
                // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": id, "status": 1, "class": cls } })
            }
            else {
                // this.alertService.error("நீங்கள் தேர்வு செய்த Batch - க்கு  வேறொரு பள்ளியில் பாடம் எடுத்துளீர்கள். அந்த குறிப்பிட்ட பள்ளியை கிளிக் செய்து Batch -ஐ Complete செய்யவும்.")
                this.alertPopup("நீங்கள் தேர்வு செய்த Batch - க்கு  வேறொரு பள்ளியில் பாடம் எடுத்துளீர்கள். அந்த குறிப்பிட்ட பள்ளியை கிளிக் செய்து Batch -ஐ Complete செய்யவும்.");
            }
        }
    }
    goToNextPage(id) {
        // let cls = JSON.stringify(this.form.controls.class.value);
        this.loading.show();
        this.classSectionUpdate();
        // setTimeout(() => {
        // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls } })
        // },3000);
    }
    studentStatus(userid, id, stu_detail, attedanceStatus, index, key, filter) {
        // console.log("class attandance");
        let total = this.studentRecordFilter.filter(item => item.prst == '');
        this.totalprstOD = parseInt(this.form.value.total) - parseInt(this.form.value.presentTotal);
        this.totalStudent = total.length;
        this.studentRecordFilter[index].prst = id;
        // let query2 = 'UPDATE VIStudenData SET prst = "' + id + '" WHERE VIStudenData.user_id = "' + userid + '" And VIStudenData.schoolId = "' + this.schoolId + '"';
        // this.sqliteDB.update(query2).then(res => {
        //   console.log("upload attandance");
        // });
    }
    navigateBack() {
        this.router.navigate(['/tabs/vasipu-iyakam/vi-library'], { queryParams: { "CycleId": this.CycleId, "InsertClsSec": this.InsertClsSec, "schoolName": this.schoolName } });
        // this.router.navigate(['/tabs/vasipu-iyakam/vi-library']);
    }
    calculateTotal(event, total, prst, i) {
        if (total == prst || total > prst) {
            let totals = 0;
            let totalprsts = 0;
            for (let i = 0; i < this.form.controls['student_details'].value.length; i++) {
                totals += parseInt(this.form.controls.student_details.value[i].total);
                if (this.form.controls.student_details.value[i].presentTotal != null && this.form.controls.student_details.value[i].presentTotal != '') {
                    totalprsts += parseInt(this.form.controls.student_details.value[i].presentTotal);
                    this.form.controls['presentTotal'].setValue(totalprsts);
                    this.form.controls['presentTotal'].updateValueAndValidity();
                }
                this.form.controls['total'].setValue(totals);
                this.form.controls['total'].updateValueAndValidity();
            }
        }
        else {
            this.form.controls['student_details']['controls'][i].controls['presentTotal'].setValue('');
            this.form.controls['student_details']['controls'][i].controls['presentTotal'].updateValueAndValidity();
            this.alertService.error("invalid");
        }
    }
    viewData() {
        this.schoolAlert('');
    }
    studentAttUpdate() {
        let cls = JSON.stringify(this.form.controls.class.value);
        let total = this.studentRecordFilter.filter(item => item.prst != '');
        if (total.length != 0) {
            for (let i = 0; i < total.length; i++) {
                let query2 = 'UPDATE VIStudenData SET prst = "' + this.studentRecordFilter[i].prst + '", batch = "' + this.index + '" WHERE VIStudenData.user_id = "' + this.studentRecordFilter[i].user_id + '" And VIStudenData.schoolId = "' + this.schoolId + '"';
                this.sqliteDB.update(query2).then(res => {
                    // console.log("upload attandance");
                });
            }
            this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls, "CycleId": this.CycleId, "InsertClsSec": this.InsertClsSec, "schoolName": this.schoolName } });
            // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls } })
        }
        else {
            this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls, "CycleId": this.CycleId, "InsertClsSec": this.InsertClsSec, "schoolName": this.schoolName } });
            // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls } })
        }
    }
    classSectionUpdate() {
        let recordClass = [];
        for (let i = 0; i < this.form.controls.class.value.length; i++) {
            let data = {
                "class_id": this.form.controls.class.value[i].class,
                "section": this.form.controls.class.value[i].sec,
                "school_id": this.schoolId,
                "activity_date": this.currentDate,
                "Batch": this.index,
                "UserId": this.userID,
            };
            recordClass.push(data);
        }
        // console.log(recordClass,this.form.controls.class,"this.form.controls.class",this.index);
        this.insertLocalClassList(recordClass);
        setTimeout(() => {
            this.studentAttUpdate();
        }, 1000);
    }
    vasiIpyakam() {
        let query = 'SELECT * FROM VasipuIStatusDetail';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.syncstudentStatusData = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.syncstudentStatusData.push(data.rows.item(i));
                }
                // console.log(this.syncstudentStatusData);
                for (var m = 0; m < this.syncstudentStatusData.length; m++) {
                    if (this.syncstudentStatusData[m].status == 2) {
                        let datajson = JSON.parse(this.syncstudentStatusData[m].ClsSec);
                        let userID = this.syncstudentStatusData[m].userId;
                        let schoolID = this.syncstudentStatusData[m].schlid;
                        let batchID = this.syncstudentStatusData[m].batchId;
                        let data = {
                            "records": [{
                                    "IndexId": "",
                                    "UserId": this.syncstudentStatusData[m].userId,
                                    "SchlId": this.syncstudentStatusData[m].schlid,
                                    "Batch": this.syncstudentStatusData[m].batchId,
                                    "StudId1": this.syncstudentStatusData[m].stud_1,
                                    "StudId2": this.syncstudentStatusData[m].stud_2,
                                    "StudId3": this.syncstudentStatusData[m].stud_3,
                                    "StartTime": this.syncstudentStatusData[m].start,
                                    "EndTime": this.syncstudentStatusData[m].end,
                                    "StartPhoto": this.syncstudentStatusData[m].startphoto,
                                    "StartPhotoName": this.syncstudentStatusData[m].startphotoblob,
                                    "EndPhoto": this.syncstudentStatusData[m].endphoto,
                                    "EndPhotoName": this.syncstudentStatusData[m].endphotoblob,
                                    "StartLat": this.syncstudentStatusData[m].lat1,
                                    "StartLongi": this.syncstudentStatusData[m].long1,
                                    "EndLat": this.syncstudentStatusData[m].lat2,
                                    "EndLongi": this.syncstudentStatusData[m].long2,
                                    "Data": datajson,
                                }]
                        };
                        this.userService.submitSessionData(data).subscribe((res) => {
                            // console.log(res);
                            if (res.dataStatus) {
                                let query5 = 'UPDATE VIStatusbatchDatas SET sync = 3 WHERE VIStatusbatchDatas.userid = "' + userID + '" And VIStatusbatchDatas.batch = "' + batchID + '"';
                                let query2 = 'UPDATE VasipuIStatusDetail SET status = 3 WHERE VasipuIStatusDetail.schlid = "' + schoolID + '" And VasipuIStatusDetail.batchId = "' + batchID + '"';
                                return this.sqliteDB.update(query5).then(res => {
                                    return this.sqliteDB.update(query2).then(res => {
                                        // console.log("upload start session");
                                    });
                                });
                            }
                            else {
                            }
                        });
                    }
                }
            }
            else {
            }
        });
    }
    //pop
    deleteAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Notification',
                // subHeader: 'Next cycle will start',
                message: 'இது உங்களின் கடைசி batch-ஆக இருப்பதனால், மீதமுள்ள அனைத்து வகுப்பு மற்றும் பிரிவுகளையும் தேர்ந்தெடுக்கவும்.',
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
                            this.form.controls['class'].setValue('');
                            this.form.controls['class'].setValidators(null);
                            this.form.controls['class'].updateValueAndValidity();
                            this.activeNextAttd = false;
                            const control = this.form.controls['student_details'];
                            for (let i = control.length - 1; i >= 0; i--) {
                                control.removeAt(i);
                            }
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    selectfilterClass(item) {
        this.filterClasssec = '';
        this.filtersec = '';
        this.filterClasssec = item.detail.value.class;
        this.filtersec = item.detail.value.sec;
        // this.pushfilter = []
        // this.classArray
        // let itemdata = item.detail.value
        // if(itemdata.length != 0){
        //   this.filterActive = true
        // } else {
        //   this.filterActive = false
        // }
        // // console.log(itemdata,"item");
        // for(let i=0; i < itemdata.length; i++){
        //  let filter = this.studentRecordFilter.filter(item=> item.class_studying_id == itemdata[i].class && item.class_section == itemdata[i].sec)
        // //  this.pushfilter.push(filter)
        //  for (let n = 0; n < filter.length; n++) {
        //   this.pushfilter.push(filter[n])
        // }
        // }
        // console.log(this.pushfilter,"pushfilter");
    }
    //pop
    confirmAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'popCalssInfo',
                header: 'Alert',
                // subHeader: 'Next cycle will start',
                message: 'உங்களின் ஒரு முழு சுற்று நிறைவுற்றது. அடுத்த சுற்றை துவங்க Ok-வை Click செய்யவும்.',
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
                            this.router.navigate(['/tabs/home']);
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    alertPopup(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Notification',
                cssClass: 'popCalssInfo',
                // subHeader:' Batch '+ this.batch +' completed',
                message: text,
                buttons: [
                    {
                        text: 'OK',
                        cssClass: 'alert-button-confirm',
                    },
                ],
            });
            yield alert.present();
        });
    }
};
VasipuiyakamsessionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService }
];
VasipuiyakamsessionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-vasipuiyakamsession',
        template: _raw_loader_vasipuiyakamsession_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vasipuiyakamsession_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VasipuiyakamsessionPage);



/***/ }),

/***/ 7220:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagealign {\n  padding: 3%;\n  padding-top: 4% !important;\n}\n\n.pagealignbatch {\n  padding: 3% !important;\n}\n\n.selectdata {\n  border: 1px solid #BE3455;\n  background-color: white !important;\n}\n\n.headleft {\n  text-align: start;\n  padding-left: 15px;\n}\n\n.headright {\n  text-align: end;\n  padding-left: 15px;\n}\n\n.headCard {\n  border-radius: 2%;\n  margin-bottom: 5%;\n}\n\n.form-bgn {\n  border-top-right-radius: 5%;\n  border-top-left-radius: 5%;\n  background-color: #dce0e0;\n  margin: 3%;\n}\n\n.textItem {\n  padding: 5%;\n}\n\n.totalHed {\n  border-top: dotted;\n  padding-top: 5%;\n  margin-top: 6%;\n  text-align: center;\n}\n\n.studHed {\n  padding: 5px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.corner-head {\n  border-left: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdWl5YWthbXNlc3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0U7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBRko7O0FBT0U7RUFDRSxXQUFBO0FBSko7O0FBT0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFPSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSk47O0FBT0k7RUFDRSxzQkFBQTtBQUpOIiwiZmlsZSI6InZhc2lwdWl5YWthbXNlc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VhbGlnbntcclxuICBwYWRkaW5nOiAzJTtcclxuICBwYWRkaW5nLXRvcDogNCUgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5wYWdlYWxpZ25iYXRjaHtcclxuICBwYWRkaW5nOiAzJSAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDMlICFpbXBvcnRhbnQ7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0ZGF0YSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JFMzQ1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGxlZnQge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweFxyXG59XHJcblxyXG4uaGVhZHJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4XHJcbn1cclxuXHJcbi5oZWFkQ2FyZCB7XHJcbiAgLy8gcGFkZGluZzogMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbiAgLmZvcm0tYmdue1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlMGUwO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgfVxyXG5cclxuICAudGV4dEl0ZW0ge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvdGFsSGVkIHtcclxuICAgICAgYm9yZGVyLXRvcDogZG90dGVkO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0dWRIZWQge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcm5lci1oZWFkIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICAgIH0iXX0= */");

/***/ }),

/***/ 76682:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"!attadActive\">\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\" *ngIf=\"!attadActive\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div>{{emis_username}}</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">{{schoolName}}</div>\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"attadActive\">\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"gotostudentpage()\" *ngIf=\"attadActive\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div style=\"font-size: small;\">{{emis_username}} - {{schoolName}}</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">Total Present : {{this.form.value.presentTotal}} - Batch {{index}}</div>\r\n      </ion-title>\r\n    <!-- <ion-title>Total Present : {{this.form.value.presentTotal}}</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!attadActive\">\r\n  <ion-row class=\"pagealign\">\r\n    <ion-col size=\"12\">\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\">\r\n        <ion-row>\r\n          <ion-col size=\"9\" class=\"headleft\" *ngIf=\"totalsmallstudent != '0'\">Total No. of. Students (4-5 Std)</ion-col>\r\n          <ion-col size=\"3\" class=\"headright\" *ngIf=\"totalsmallstudent != '0'\"><b>{{totalsmallstudent}}</b></ion-col>\r\n          <ion-col size=\"9\" class=\"headleft\" *ngIf=\"totalbigstudent != '0'\">Total No. of. Students (6-9 Std)</ion-col>\r\n          <ion-col size=\"3\" class=\"headright\" *ngIf=\"totalbigstudent != '0'\"><b>{{totalbigstudent}}</b></ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\">\r\n        <ion-row>\r\n          <ion-col size=\"9\" style=\"text-align: start;\">Instructions</ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: end; padding-right: 15px; font-size: large;\" (click)=\"schoolAlert(1)\">\r\n            <ion-icon name=\"eye-outline\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\">\r\n        <ion-row *ngFor=\"let data of totalBatchData\">\r\n          <ion-col size=\"9\" style=\"text-align: start; align-self: center;\">Total Batch in this school</ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: end; align-self: center;\" *ngIf=\"data.InsertBatchCount != null\">\r\n            {{data.InsertBatchCount}}/{{data.BatchCount}}\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: end; align-self: center;\" *ngIf=\"data.InsertBatchCount == null\">\r\n            0 /{{data.BatchCount}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\" *ngIf=\"activeClass == '1'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" style=\"text-align: start; align-self: center;\">Total Section completed in this school</ion-col>\r\n          <ion-col size=\"2\" *ngFor=\"let data of classJsonData\" style=\"text-align: end; align-self: center;\">\r\n            {{data.class_id}} - {{data.section}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"pagealignbatch\">\r\n    <ion-col size=\"3\" *ngFor=\"let bat of batchRecord; let i = index\" >\r\n      <ion-card *ngIf=\"bat.sync == 0\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: #76727a8f !important; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 1\" class=\"newprimary\" style=\"font-weight: bolder;padding: 15px 0px;\"\r\n        (click)=\"classdropdownList(bat.batchid)\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 3\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: rgb(48, 167, 72) !important; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 2\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: #70BBFF; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 4\" (click)=\"nextpageOut(bat.batchid,bat.schoolId)\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: #a07b4b; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n    <form [formGroup]=\"form\" class=\"pagealignbatch form-bgn\" *ngIf=\"classActive\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"textItem\">\r\n          <ion-label class=\"newsecondaryTex\"> Class </ion-label>\r\n          <ion-select class=\"selectdata\" label=\"Default label\" formControlName=\"class\" (ionChange)=\"selectClass($event)\" [multiple]=\"true\"\r\n            placeholder=\"Class\">\r\n            <ion-select-option [value]=\"cls\" *ngFor=\"let cls of classList\">{{cls.class}} -\r\n              {{cls.sec}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"12\" formArrayName=\"student_details\">\r\n          <ion-row *ngFor=\"let item of form.get('student_details')['controls']; let i = index;\" [formGroupName]=\"i\" style=\"padding: 3%;\">\r\n            <ion-col size=\"6\" style=\"padding: 5px;\">\r\n              <ion-label class=\"newsecondaryTex\"> Total student in {{item.value.class}}-{{item.value.sec}} </ion-label>\r\n              <ion-input class=\"selectdata\" type=\"number\" placeholder=\"Total students\" formControlName=\"total\" disabled\r\n                style=\"text-align: center;\">\r\n              </ion-input>\r\n              <ion-row>\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"(item.controls['total'].hasError('required')) && (item.controls['total'].dirty || item.controls['total'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n  \r\n            <ion-col size=\"6\" style=\"padding: 5px;\">\r\n              <ion-label class=\"newsecondaryTex\"> Total present in {{item.value.class}}-{{item.value.sec}} </ion-label>\r\n              <ion-input class=\"selectdata\" type=\"number\" placeholder=\"Total present\" formControlName=\"presentTotal\" \r\n                (ionChange)=\"calculateTotal($event,item.value.total,item.value.presentTotal,i)\"\r\n                style=\"text-align: center;\">\r\n              </ion-input>\r\n              <ion-row>\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"(item.controls['presentTotal'].hasError('required')) && (item.controls['presentTotal'].dirty || item.controls['presentTotal'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row *ngIf=\"this.form.controls.presentTotal.value != ''\" class=\"newsecondaryTex totalHed\">\r\n            <ion-col size=\"6\" style=\"padding: 5px;\">\r\n              <ion-label class=\"newsecondaryTex\"> Batch Total : {{this.form.controls.total.value}} </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\" style=\"padding: 5px;color: #4a4b4a;\">\r\n              <ion-label class=\"newsecondaryTex\"> Batch present Total : {{this.form.value.presentTotal}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"12\" style=\"text-align: center;color: white;\">\r\n          <ion-button class=\"newprimary\" (click)=\"gotoAttandPage(this.form.value.class)\">next</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"attadActive\">\r\n  <ion-card>\r\n    <ion-row class=\"newsecondary studHed\">\r\n      <ion-col size=\"5.5\">\r\n        Name\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"corner-head\">\r\n        Class\r\n      </ion-col>\r\n      <ion-col size=\"2.5\" class=\"corner-head\">\r\n        contact\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"corner-head\">\r\n        Status\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-row class=\"newsecondary studHed\">\r\n      <ion-col size=\"5\" style=\"text-align: start;align-self: center;\">\r\n        <ion-label class=\"newsecondaryTex\" style=\"color: #fff;\"> <ion-icon name=\"filter-outline\"></ion-icon> Class & sec Filter </ion-label>\r\n     </ion-col>\r\n      <ion-col size=\"7\">\r\n        <ion-select class=\"selectdata\" style=\"color: #114a53;\" label=\"Default label\" (ionChange)=\"selectfilterClass($event)\"\r\n        placeholder=\"Please Select\">\r\n        <ion-select-option [value]=\"cls\" *ngFor=\"let cls of classArray\">{{cls.class}} -\r\n          {{cls.sec}}</ion-select-option> \r\n      </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <!-- <div *ngIf=\"filterActive\">\r\n    <ion-card *ngFor=\"let data of pushfilter; let i = index\" style=\"padding: 5px;\">\r\n      <ion-row style=\"text-align: center;\">\r\n        <ion-col size=\"5.5\" style=\"align-self: center;\">\r\n          {{data.name}}\r\n          <div style=\"font-size: small;\"> {{data.user_id}} </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"corner-head\" style=\"align-self: center;\">\r\n          {{data.class_studying_id}} - {{data.class_section}}\r\n        </ion-col>\r\n        <ion-col size=\"2.5\" class=\"corner-head\" style=\"align-self: center;\">\r\n          <ion-icon name=\"call\" (click)=\"callPhoneNumber(data.phone_number)\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\" class=\"corner-head\">\r\n          <ion-button *ngIf=\"data.prst == ''\" (click)=\"studentStatus(data.user_id,1,data, 'p', i, data.key,'2')\"\r\n          style=\"color: white;--background: #58B3BE !important\">P</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '1'\" (click)=\"studentStatus(data.user_id,2,data, 'p', i, data.key,'2')\"\r\n            style=\"color: white;--background: #F9877A !important;\">A</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '2'\" (click)=\"studentStatus(data.user_id,'',data, 'od', i, data.key,'2')\"\r\n            style=\"color: white;--background: rgb(220, 178, 14)\">OD</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n    <div *ngFor=\"let data of studentRecordFilter; let i = index\">\r\n     <ion-card *ngIf=\"(filterClasssec == '') || (filterClasssec == data.class_studying_id && filtersec == data.class_section)\">\r\n      <ion-row style=\"text-align: center;\">\r\n        <ion-col size=\"5.5\" style=\"align-self: center;\">\r\n          {{data.name}}\r\n          <div style=\"font-size: small;\"> {{data.user_id}} </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"corner-head\" style=\"align-self: center;\">\r\n          {{data.class_studying_id}} - {{data.class_section}}\r\n        </ion-col>\r\n        <ion-col size=\"2.5\" class=\"corner-head\" style=\"align-self: center;\">\r\n          <ion-icon name=\"call\" (click)=\"callPhoneNumber(data.phone_number)\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\" class=\"corner-head\">\r\n          <ion-button *ngIf=\"data.prst == ''\" (click)=\"studentStatus(data.user_id,1,data, 'p', i, data.key,'1')\"\r\n          style=\"color: white;--background: #58B3BE !important\">P</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '1'\" (click)=\"studentStatus(data.user_id,2,data, 'p', i, data.key,'1')\"\r\n            style=\"color: white;--background: #F9877A !important;\">A</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '2'\" (click)=\"studentStatus(data.user_id,'',data, 'od', i, data.key,'1')\"\r\n            style=\"color: white;--background: rgb(220, 178, 14)\">OD</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n    </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"attadActive\">\r\n  <ion-row>\r\n    <ion-col size=\"6\" style=\"text-align: center;\">\r\n     <ion-button class=\"newsecondary\" (click)=\"gotostudentpage()\">Back</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\" style=\"text-align: center;\">\r\n      <ion-button class=\"newprimary\" (click)=\"gotoNext(this.form.controls.class.value)\">Save</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuiyakamsession_vasipuiyakamsession_module_ts-es2015.js.map