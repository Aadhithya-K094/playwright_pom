(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_school-schedule_school-schedule_module_ts"],{

/***/ 86511:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/stem_new/school-schedule/school-schedule-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolSchedulePageRoutingModule": function() { return /* binding */ SchoolSchedulePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _school_schedule_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-schedule.page */ 3376);




const routes = [
    {
        path: '',
        component: _school_schedule_page__WEBPACK_IMPORTED_MODULE_0__.SchoolSchedulePage
    }
];
let SchoolSchedulePageRoutingModule = class SchoolSchedulePageRoutingModule {
};
SchoolSchedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchoolSchedulePageRoutingModule);



/***/ }),

/***/ 10558:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stem_new/school-schedule/school-schedule.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolSchedulePageModule": function() { return /* binding */ SchoolSchedulePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _school_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-schedule-routing.module */ 86511);
/* harmony import */ var _school_schedule_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-schedule.page */ 3376);







let SchoolSchedulePageModule = class SchoolSchedulePageModule {
};
SchoolSchedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _school_schedule_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolSchedulePageRoutingModule
        ],
        declarations: [_school_schedule_page__WEBPACK_IMPORTED_MODULE_1__.SchoolSchedulePage]
    })
], SchoolSchedulePageModule);



/***/ }),

/***/ 3376:
/*!************************************************************************!*\
  !*** ./src/app/pages/stem_new/school-schedule/school-schedule.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolSchedulePage": function() { return /* binding */ SchoolSchedulePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_school_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./school-schedule.page.html */ 81941);
/* harmony import */ var _school_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-schedule.page.scss */ 41171);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _class_sec_list_class_sec_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../class-sec-list/class-sec-list.page */ 15907);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);













let SchoolSchedulePage = class SchoolSchedulePage {
    constructor(router, sqliteDB, userService, upload, http, usersessionService, alertController, route, modalCtrl, alertService) {
        this.router = router;
        this.sqliteDB = sqliteDB;
        this.userService = userService;
        this.upload = upload;
        this.http = http;
        this.usersessionService = usersessionService;
        this.alertController = alertController;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.autoslot = true;
        this.restoreslot = false;
        this.autoassData = [];
        this.test = [];
        this.alldatelist = [];
        this.finalArray = [];
        this.noSlot = [];
        this.leaverecord = [];
        this.username = this.usersessionService.emis_username();
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.item = this.routeData.queryParams.item;
        this.startdate = this.routeData.queryParams.startdate;
        this.enddate = this.routeData.queryParams.enddate;
        this.statusMode = this.routeData.queryParams.statusMode;
        this.cycleNo = this.routeData.queryParams.cycle;
        this.eventstartdate = this.routeData.queryParams.eventstartdate;
        this.eventenddate = this.routeData.queryParams.eventenddate;
        this.activeLeave = false;
        this.activeReset = false;
        this.leaverecord = [];
        console.log(this.item, "1", this.startdate, "2", this.enddate, "3", this.statusMode, "4", this.eventstartdate, "6", this.eventenddate, "7");
        var date = new Date();
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        this.currentDate = [year, month, day].join('-');
        var current = new Date(this.currentDate);
        var start = new Date(this.startdate);
        var end = new Date(this.enddate);
        if (start == end || this.currentDate == this.enddate || this.currentDate == this.startdate || (current < end && current > start)) {
            this.activeReset = true;
        }
        else {
        }
        this.getDate();
        if (this.item == 'auto') {
            this.autoslot = true;
            this.restoreslot = false;
        }
        else {
            this.autoslot = false;
            this.restoreslot = true;
        }
        this.getServerData();
    }
    getDate() {
        this.userService.getCalendar().subscribe((response) => {
            this.allDate = response.result;
            this.autoassign();
        });
    }
    navigateBack() {
        this.router.navigate(['/tabs/stem-cycle']);
    }
    getServerData() {
        this.schoolListData = [];
        this.userService.getTotalSlot(this.username).subscribe((response) => {
            //  this.insertLocalData(this.schoolListData)
            let data;
            for (let i = 0; i < response.result.length; i++) {
                let slotcout = parseInt(response.result[i].TotStudents) / 60;
                let rem = parseInt(response.result[i].TotStudents) % 60;
                let slot;
                if (Math.round(slotcout) == 1 || Math.round(slotcout) == 0) {
                    slot = 1;
                }
                else {
                    if (10 < rem) {
                        slot = parseInt(slotcout.toString().split('.')[0]) + 1;
                    }
                    else {
                        slot = Math.round(slotcout);
                    }
                }
                data = {
                    StemMembrCntNo: response.result[i].StemMembrCntNo,
                    TotStudents: response.result[i].TotStudents,
                    block_name: response.result[i].block_name,
                    district_name: response.result[i].district_name,
                    edu_dist_name: response.result[i].edu_dist_name,
                    school_id: response.result[i].school_id,
                    school_name: response.result[i].school_name,
                    udise_code: response.result[i].udise_code,
                    user_id: response.result[i].user_id,
                    slot: slot,
                    Status: response.result[i].Status
                };
                this.schoolListData.push(data);
            }
        });
    }
    viewData(schId) {
        this.schoolClassData = [];
        this.userService.getclassDetails(schId).subscribe((response) => {
            this.schoolClassData = response.result;
            this.schoolAlert();
        });
    }
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _class_sec_list_class_sec_list_page__WEBPACK_IMPORTED_MODULE_6__.ClassSecListPage,
                componentProps: { schoolClassData: this.schoolClassData },
                cssClass: 'view-image-modal'
            });
            yield modal.present();
        });
    }
    pageschool(schoolid, slot, school_name) {
        this.router.navigate(['/tabs/stem-calendar'], { queryParams: { "schoolId": schoolid, "slot": slot, "school_name": school_name, item: this.item, "startdate": this.startdate, "enddate": this.enddate, "eventstartdate": this.eventstartdate, "eventenddate": this.eventenddate, 'statusMode': this.statusMode, 'cycle': this.cycleNo } });
    }
    view() {
        this.router.navigate(['/tabs/view-schedule']);
    }
    viewCalendar(item) {
        this.router.navigate(['/tabs/view-calendar'], { queryParams: { "item": item, "startdate": this.startdate, "enddate": this.enddate, "eventstartdate": this.eventstartdate, "eventenddate": this.eventenddate, 'statusMode': this.statusMode, 'cycle': this.cycleNo } });
    }
    autoassign() {
        this.userService.getAutoSlot(this.username).subscribe((response) => {
            this.autoAssignData = response.result;
            this.filteritem = response.result;
            this.leaverecord = response.result.UserLeaveCount;
            // for (let i = 0; i < response.result.UserLeaveCount.length; i++) {
            //   var mm
            //   var dd
            //   const todays = new Date(this.eventenddate);
            //   const yyyy = todays.getFullYear();
            //   mm = todays.getMonth() + 1; // Months start at 0! 
            //   dd = todays.getDate() + (1 + i);
            //   if (dd < 10) { dd = '0' + dd; }
            //   if (mm < 10) { mm = '0' + mm; }
            //   const formattedToday = yyyy + '-' + mm + '-' + dd;
            //  let data =   {
            //       BlkId: response.result.UserLeaveCount[i].BlkId,
            //       BlkName: response.result.UserLeaveCount[i].BlkName,
            //       CycleId: response.result.UserLeaveCount[i].CycleId,
            //       DistId: response.result.UserLeaveCount[i].DistId,
            //       DistName: response.result.UserLeaveCount[i].DistName,
            //       LeaveCount: response.result.UserLeaveCount[i].LeaveCount,
            //       LeaveDate: response.result.UserLeaveCount[i].LeaveDate,
            //       MobileNo: response.result.UserLeaveCount[i].MobileNo,
            //       ProGramType: response.result.UserLeaveCount[i].ProGramType,
            //       SchlId: response.result.UserLeaveCount[i].SchlId,
            //       SchlName: response.result.UserLeaveCount[i].SchlName,
            //       TotStudents: response.result.UserLeaveCount[i].TotStudents,
            //       UdiseCode: response.result.UserLeaveCount[i].UdiseCode,
            //       UserId: response.result.UserLeaveCount[i].UserId,
            //       date: formattedToday
            //     };
            //     this.leaverecord.push(data) 
            // }
            console.log(this.leaverecord, "leave");
            if (this.leaverecord.length != 0) {
                this.activeLeave = true;
            }
            else {
                this.activeLeave = false;
            }
            this.onautoassign();
        });
    }
    onautoassign() {
        this.finalArray = [];
        this.test = [];
        var noDay;
        let mm;
        let dd;
        let slot = this.autoAssignData.TotalSlot[0].TotalSlots;
        debugger;
        const todays = new Date(this.eventstartdate);
        const yyyy = todays.getFullYear();
        mm = todays.getMonth() + 1; // Months start at 0! 
        dd = todays.getDate() + 0;
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        const formattedToday = yyyy + '-' + mm + '-' + dd;
        console.log(formattedToday, "formattedToday");
        for (var i = 0; i < this.allDate.length; i++) {
            if (this.allDate[i].date == formattedToday) {
                let noslot = (parseInt(slot) / 2);
                console.log(noslot, "noslot");
                noslot = noslot + 4;
                for (var n = 0; n < noslot; n++) {
                    this.alldatelist.push({ "date": this.allDate[i + n].date, "session": "1" }, { "date": this.allDate[i + n].date, "session": "2" });
                }
            }
        }
        if (formattedToday) {
            for (var m = 0; m < this.autoAssignData.SchoolList.length; m++) {
                noDay = this.autoAssignData.SchoolList[m].TotalSlots;
                for (var n = 0; n < noDay; n++) {
                    var data = {
                        "IndxID": n,
                        "UserId": this.username,
                        "SchlId": this.autoAssignData.SchoolList[m].SchlId,
                        "StartDate": "",
                        "Session": '',
                        "Days": this.autoAssignData.SchoolList[m].Days,
                        "MobileNo": this.autoAssignData.SchoolList[m].MobileNo,
                        "Remain": this.autoAssignData.SchoolList[m].Remain,
                        "SchlName": this.autoAssignData.SchoolList[m].SchlName,
                        "Slot": this.autoAssignData.SchoolList[m].Slot,
                        "TotStudents": this.autoAssignData.SchoolList[m].TotStudents,
                        "TotalSlots": this.autoAssignData.SchoolList[m].TotalSlots,
                        "UdiseCode": this.autoAssignData.SchoolList[m].UdiseCode,
                        "latitude": this.autoAssignData.SchoolList[m].latitude,
                        "longitude": this.autoAssignData.SchoolList[m].longitude,
                    };
                    this.test.push(data);
                }
            }
        }
        for (var m = 0; m < this.test.length; m++) {
            var num = parseInt(this.test[m].TotalSlots) + m;
            if (this.alldatelist.length != num - 1) {
                num = num - 1;
            }
            else {
                num = this.test.length - 1;
            }
            var data1 = {
                "IndxID": this.test[m].IndxID,
                "SchlId": this.test[m].SchlId,
                "UserId": this.username,
                "StartDate": this.alldatelist[m].date,
                "endDate": this.alldatelist[num].date,
                "Session": this.alldatelist[m].session,
                "Days": this.test[m].Days,
                "MobileNo": this.test[m].MobileNo,
                "Remain": this.test[m].Remain,
                "SchlName": this.test[m].SchlName,
                "Slot": this.test[m].Slot,
                "TotStudents": this.test[m].TotStudents,
                "TotalSlots": this.test[m].TotalSlots,
                "UdiseCode": this.test[m].UdiseCode,
                "latitude": this.test[m].latitude,
                "longitude": this.test[m].longitude,
            };
            this.finalArray.push(data1);
        }
        this.filterdata = this.finalArray.filter((item => item.IndxID == 0));
        console.log(this.filterdata);
        this.autoslot = true;
        // const key = 'SchlId';
        // this.finalArray = [...new Map(this.finalArray.map(item =>
        // [item[key], item])).values()];
        // console.log(this.finalArray,"123");
    }
    onSaveautoassign() {
        this.autoassData = [];
        for (let i = 0; i < this.finalArray.length; i++) {
            let data = {
                "IndexId": "",
                "ProgramType": "3",
                "UserId": this.finalArray[i].UserId,
                "SchlId": this.finalArray[i].SchlId,
                "PlanningDate": this.finalArray[i].StartDate,
                "Session": this.finalArray[i].Session,
                "Type": this.statusMode,
                "CycleId": this.cycleNo,
            };
            this.autoassData.push(data);
        }
        let data = {
            "records": this.autoassData
        };
        this.userService.AutoAssign(data).subscribe((response) => {
            if (response.dataStatus) {
                this.alertService.success('Auto Slot Saved');
                this.router.navigate(['/tabs/stem-cycle']);
            }
            else {
                this.alertService.success(response.message);
                this.router.navigate(['/tabs/stem-cycle']);
            }
        });
    }
    scheduleRest() {
        let query = 'UPDATE stemModedetail SET Status="' + 1 + '"' +
            // 'WHERE UserId = "' + this.username + '"';
            'WHERE EventStartDate = "' + this.startdate + '" And UserId = "' + this.username + '"';
        return this.sqliteDB.update(query).then(res => {
            console.log(1, "Updated In server");
            this.router.navigate(['/tabs/stem-cycle']);
        });
    }
    manualReset() {
        console.log("manual");
        var filter = this.schoolListData.filter((item) => item.Status == 1);
        for (let i = 0; i < filter.length; i++) {
            var data = {
                "records": [{
                        "UserId": this.username,
                        "SchlId": filter[i].school_id,
                        "CycleId": this.cycleNo
                    }]
            };
            this.userService.resetslot(data).subscribe((response) => {
                this.scheduleRest();
            });
        }
        if (filter.length == 0) {
            this.scheduleRest();
        }
    }
    autoReset() {
        console.log(this.filterdata);
        // var filter = this.filterdata.filter((item) => item.Status == 1)
        // for (let i = 0; i < this.filterdata.length; i++) {
        // console.log(this.filterdata[i].school_id); 
        var data = {
            "records": {
                "UserId": this.username,
                "CycleId": this.cycleNo
            }
        };
        this.userService.resetAutoslot(data).subscribe((response) => {
            this.scheduleRest();
        });
    }
    //pop
    resetAlert(id, item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'calssInfo',
                header: 'Reset',
                subHeader: ' Ensure that you want to clear your current schedule list in the calendar ',
                // message: 'If you have completed, please click ok',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click',
                        handler: data => {
                            // this.schedule('auto');
                        }
                    },
                    {
                        cssClass: 'cancel_click',
                        text: item,
                        handler: data => {
                            if (id == 1) {
                                this.autoReset();
                            }
                            if (id == 2) {
                                this.manualReset();
                            }
                            if (id == 3) {
                                this.onSaveautoassign();
                            }
                        }
                    },
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
};
SchoolSchedulePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService }
];
SchoolSchedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-school-schedule',
        template: _raw_loader_school_schedule_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_school_schedule_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchoolSchedulePage);



/***/ }),

/***/ 41171:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stem_new/school-schedule/school-schedule.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n\n.totalStu {\n  border-top: dotted;\n  border-right: dotted;\n  text-align: center;\n}\n\n.totalStu1 {\n  border-top: dotted;\n  text-align: center;\n}\n\n.totalslot {\n  border-top: dotted;\n  border-right: dotted;\n  text-align: center;\n}\n\n.colorStu {\n  color: #A856FF;\n}\n\n.colorStu1 {\n  color: #FF006F;\n}\n\n.icon-top {\n  background-color: #8a1de4;\n  margin-left: 1%;\n  margin-right: 1%;\n  color: #f8f9fa;\n  border-radius: 25px;\n  padding-top: 2%;\n  padding-bottom: 2%;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n\n.classview {\n  background-color: #B357FF;\n  color: #FFFFFF;\n}\n\n.classview1 {\n  background-color: #FF006F;\n  color: #FFFFFF;\n}\n\n.header-top {\n  color: #B357FF;\n  font-weight: bold;\n}\n\n.header-top1 {\n  color: #FF006F;\n  font-weight: bold;\n}\n\n.listview {\n  --background: #B357FF;\n  color: #FFFFFF;\n}\n\n.auto {\n  text-align: center;\n  font-weight: bold;\n  padding-left: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1zY2hlZHVsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQztFQUNDLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNBLG9CQUFBO0FBQ0E7O0FBRUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNBOztBQUVBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0E7O0FBRUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDQTs7QUFFQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNBOztBQUVBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0E7O0FBRUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFDQTs7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNBIiwiZmlsZSI6InNjaG9vbC1zY2hlZHVsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmd7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9jYXJkLXN0ZW0ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59IFxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206Mi4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWl0ZW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiODU3ZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59IFxyXG5cclxuLnRvdGFsU3R1IHtcclxuICBib3JkZXItdG9wOiBkb3R0ZWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBkb3R0ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG90YWxTdHUxIHtcclxuICBib3JkZXItdG9wOiBkb3R0ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gLnRvdGFsc2xvdCB7XHJcbiAgYm9yZGVyLXRvcDogZG90dGVkO1xyXG4gIGJvcmRlci1yaWdodDogZG90dGVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbG9yU3R1IHtcclxuICBjb2xvcjogI0E4NTZGRjtcclxufVxyXG5cclxuLmNvbG9yU3R1MSB7XHJcbiAgY29sb3I6ICNGRjAwNkY7XHJcbn1cclxuXHJcbi5pY29uLXRvcCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhMWRlNDtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICBjb2xvcjogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbnBhZGRpbmctaW5saW5lOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1pdGVtIHtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxuYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiODU3ZmY7XHJcbmJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbm1hcmdpbi10b3A6IDE1JTtcclxuaGVpZ2h0OiAxMDAlO1xyXG59IFxyXG5cclxuLmNsYXNzdmlldyB7IFxyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjQjM1N0ZGO1xyXG5jb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmNsYXNzdmlldzEgeyBcclxuYmFja2dyb3VuZC1jb2xvcjogI0ZGMDA2RjtcclxuY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5oZWFkZXItdG9we1xyXG5jb2xvcjojQjM1N0ZGO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlci10b3Axe1xyXG5jb2xvcjojRkYwMDZGO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxpc3R2aWV3IHtcclxuLS1iYWNrZ3JvdW5kOiAjQjM1N0ZGO1xyXG5jb2xvcjogI0ZGRkZGRjsgXHJcbn1cclxuXHJcbi5hdXRvIHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxucGFkZGluZy1sZWZ0OiA1JTtcclxufSJdfQ== */");

/***/ }),

/***/ 81941:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/school-schedule/school-schedule.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <div class=\"login-bg\">\r\n    <div>\r\n      <ion-buttons slot=\"start\" class=\"back-icon\">\r\n        <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n        </ion-icon>\r\n        <ion-title style=\"margin-top: 2%;font-size: 11px;\">Your School Zone</ion-title>\r\n      </ion-buttons>\r\n    </div>\r\n\r\n    <ion-row class=\"card-item\">\r\n      <ion-col size=\"12\" style=\"padding-top: 5%;\" *ngIf=\"!restoreslot\">\r\n        <ion-card style=\"background-color: #A856FF;padding: 5px;color: white;font-size: large;\">\r\n          <ion-row>\r\n            <ion-col size=\"8\">View Calendar</ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: end;\" (click)=\"viewCalendar('auto')\">\r\n              <img src='/assets/images/stem-arrow.png'>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" style=\"padding-top: 5%;\" *ngIf=\"restoreslot\">\r\n        <ion-card style=\"background-color: #A856FF;padding: 5px;color: white;font-size: large;\">\r\n          <ion-row>\r\n            <ion-col size=\"8\">View Calendar</ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: end;\" (click)=\"viewCalendar('manual')\">\r\n              <img src='/assets/images/stem-arrow.png'>\r\n            </ion-col>\r\n            <!-- <ion-col size=\"6\" (click)=\"view()\">View Schedule</ion-col> -->\r\n            <!-- <ion-col size=\"6\" style=\"text-align: end;\" (click)=\"viewCalendar('manual')\">\r\n              View Calendar\r\n            </ion-col> -->\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!-- Manual -->\r\n      <ion-col size=\"12\" style=\"padding-top: 5%;\" *ngIf=\"restoreslot\">\r\n        <ion-card style=\"color: #6B4DC9;font-weight: bolder;padding: 5px\">\r\n          <ion-row>\r\n            <ion-col size=\"4\" style=\"text-align: center;\">School name</ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;\">UDISE</ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;\">Contact</ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"padding: 3px\" *ngFor=\"let item of schoolListData\">\r\n          <ion-row style=\"padding-bottom: 3%;\" (click)=\"pageschool(item.school_id,item.slot,item.school_name)\">\r\n            <ion-col size=\"11\" style=\"text-align: end;color: #16712a;\" *ngIf=\"item.Status == 1\">\r\n              <div> Slot Booked </div>\r\n            </ion-col>\r\n            <ion-col size=\"1\" style=\"text-align: start;color: #16712a;\" *ngIf=\"item.Status == 1\">\r\n              <ion-icon name='checkmark-circle'></ion-icon>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;\">\r\n              <div> {{item.school_name}} </div>\r\n              <div style=\"font-size: small;\"> {{item.block_name}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n              <div> {{item.udise_code}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n              <div> {{item.StemMembrCntNo}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"totalStu\">\r\n              <div class=\"colorStu\">Total number of Student</div>\r\n              <div class=\"colorStu\">{{item.TotStudents}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"totalStu1\">\r\n              <div class=\"colorStu\">No of slots required</div>\r\n              <div class=\"colorStu\">{{item.slot}}</div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card *ngFor=\"let item of leaverecord\" style=\"color: #FF006F;\">\r\n          <ion-row *ngIf=\"item.LeaveCount == 1 && activeLeave\" style=\"padding-bottom: 3%;\">\r\n            <ion-col size=\"4\" style=\"text-align: center;\">\r\n              <div> {{item.SchlName}} </div>\r\n              <div style=\"font-size: small;\"> {{item.BlkName}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n              <div> {{item.udise_code}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n              <div> {{item.MobileNo}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"totalStu\">\r\n              <div class=\"colorStu1\">Total number of Student</div>\r\n              <div class=\"colorStu1\">{{item.TotStudents}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"totalStu1\">\r\n              <div class=\"colorStu1\">No of slots required</div>\r\n              <div class=\"colorStu1\">2</div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row  *ngIf=\"item.LeaveCount == 0.5\" style=\"padding-bottom: 3%;\" (click)=\"pageschool(item.SchlId,1,item.SchlName)\">\r\n            <ion-col size=\"4\" style=\"text-align: center;\">\r\n              <div> {{item.SchlName}} </div>\r\n              <div style=\"font-size: small;\"> {{item.BlkName}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n              <div> {{item.udise_code}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\" style=\"text-align: center;align-self: center;\">\r\n              <div> {{item.MobileNo}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"totalStu\">\r\n              <div class=\"colorStu\">Total number of Student</div>\r\n              <div class=\"colorStu\">{{item.TotStudents}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"totalStu1\">\r\n              <div class=\"colorStu\">No of slots required</div>\r\n              <div class=\"colorStu\">1</div>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          \r\n        </ion-card>\r\n      </ion-col>\r\n\r\n      <!-- Auto -->\r\n      <ion-col size=\"12\" style=\"padding-top: 0%;\" *ngIf=\"autoslot && !restoreslot\">\r\n        <ion-row class=\"auto\"> Auto Assigned Schedule </ion-row>\r\n        <ion-card style=\"margin-bottom: 5%;\" *ngFor=\"let item of filterdata\">\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"classview\">\r\n              <div>School Name</div>\r\n              <div style=\"font-weight: bold;\">{{item.SchlName}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"classview\">\r\n              <div>Udise Code</div>\r\n              <div style=\"font-weight: bold;\">{{item.UdiseCode}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div class=\"header-top\">Duration</div>\r\n              <div>{{item.StartDate}}</div>\r\n              <div>{{item.endDate}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <div><span class=\"header-top\"> SLOT : </span> {{item.TotalSlots}}</div>\r\n                  <div class=\"header-top\">Mobile No</div>\r\n                  <div>{{item.MobileNo}}</div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n            <!-- <ion-col size=\"6\" class=\"classview\" style=\"text-align: center;\" *ngIf=\"item.Session == 1\">\r\n              <div> Session 1</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"classview\" style=\"text-align: center;\" *ngIf=\"item.Session == 2\">\r\n              <div> Session 2</div>\r\n            </ion-col> -->\r\n\r\n            <!-- <ion-col size=\"3\" class=\"classview\" style=\"text-align: center;\" (click)=\"pageschool(item.SchlId,item.Slot,item.SchlName)\">\r\n              <ion-icon name=\"calendar-number-outline\"></ion-icon>\r\n            </ion-col> -->\r\n            <!-- <ion-col size=\"6\" *ngIf=\"item.Session == 1\">\r\n              <ion-button class=\"listview\">Slot 1</ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\" *ngIf=\"item.Session == 2\">\r\n              <ion-button class=\"listview\">Slot 2</ion-button>\r\n            </ion-col> -->\r\n            <!-- <ion-col size=\"12\" *ngIf=\"item.ProgramType == 3\">Stem Program Session 1</ion-col>  -->\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card *ngFor=\"let item of leaverecord\">\r\n          <ion-row *ngIf=\"activeLeave\">\r\n            <ion-col size=\"6\" class=\"classview1\">\r\n              <div>School Name</div>\r\n              <div style=\"font-weight: bold;\">{{item.SchlName}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"classview1\">\r\n              <div>Udise Code</div>\r\n              <div style=\"font-weight: bold;\">{{item.UdiseCode}}</div>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <div class=\"header-top1\">Duration</div>\r\n              <div>{{item.Date.date}}</div>\r\n              <!-- <div>{{item.date}}</div> -->\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-row>\r\n                <ion-col size=\"12\">\r\n                  <div *ngIf=\"item.LeaveCount == 1\"><span class=\"header-top1\"> SLOT : </span> 2</div>\r\n                  <div *ngIf=\"item.LeaveCount == 0.5\"><span class=\"header-top1\"> SLOT : </span> 1</div>\r\n                  <div class=\"header-top1\">Mobile No</div>\r\n                  <div>{{item.MobileNo}}</div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"autoslot && !restoreslot && activeReset\">\r\n  <ion-row style=\"padding: 3%;font-weight: bolder;background: white !important;\">\r\n    <ion-col size=\"12\">\r\n      <div>Notes : <span> If you want to go back to (the other category). Please, click Reset </span> </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\"\r\n      style=\"text-align: center; color: white;padding: 3%;font-weight: bolder;background-color: var(--ion-color-primary) !important;\">\r\n      <div (click)=\"onSaveautoassign()\">Save</div>\r\n    </ion-col>\r\n    <ion-col size=\"6\"\r\n      style=\"text-align: center; color: white;padding: 3%;font-weight: bolder;background-color: #f46a6a !important;\">\r\n      <div (click)=\"resetAlert('1','Reset')\">Reset</div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"restoreslot && activeReset\"> \r\n  <ion-row style=\"padding: 0%;font-weight: bolder;background: white !important;\">\r\n    <ion-col size=\"12\">\r\n      <div>Notes : <span> If you want to go back to (the other category). Please, click Reset </span> </div>\r\n    </ion-col>\r\n    <ion-col size=\"12\"\r\n      style=\"text-align: center; color: white;padding: 3%;font-weight: bolder;background-color: #f46a6a !important;\">\r\n      <div (click)=\"resetAlert('2','Reset')\">Reset</div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_school-schedule_school-schedule_module_ts-es2015.js.map