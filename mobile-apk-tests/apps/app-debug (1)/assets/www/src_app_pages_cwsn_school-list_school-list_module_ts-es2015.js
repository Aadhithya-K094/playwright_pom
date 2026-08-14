(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_school-list_school-list_module_ts"],{

/***/ 54116:
/*!**********************************************************************!*\
  !*** ./src/app/pages/cwsn/school-list/school-list-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialEducatorsPageRoutingModule": function() { return /* binding */ SpecialEducatorsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-list.page */ 53427);




const routes = [
    {
        path: '',
        component: _school_list_page__WEBPACK_IMPORTED_MODULE_0__.SpecialEducatorsPage
    }
];
let SpecialEducatorsPageRoutingModule = class SpecialEducatorsPageRoutingModule {
};
SpecialEducatorsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpecialEducatorsPageRoutingModule);



/***/ }),

/***/ 67923:
/*!**************************************************************!*\
  !*** ./src/app/pages/cwsn/school-list/school-list.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialEducatorsPageModule": function() { return /* binding */ SpecialEducatorsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-list-routing.module */ 54116);
/* harmony import */ var _school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-list.page */ 53427);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








let SpecialEducatorsPageModule = class SpecialEducatorsPageModule {
};
SpecialEducatorsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecialEducatorsPageRoutingModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_school_list_page__WEBPACK_IMPORTED_MODULE_1__.SpecialEducatorsPage]
    })
], SpecialEducatorsPageModule);



/***/ }),

/***/ 53427:
/*!************************************************************!*\
  !*** ./src/app/pages/cwsn/school-list/school-list.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialEducatorsPage": function() { return /* binding */ SpecialEducatorsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./school-list.page.html */ 22232);
/* harmony import */ var _school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-list.page.scss */ 14081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/shared.service */ 7386);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network-service */ 34442);











let SpecialEducatorsPage = class SpecialEducatorsPage {
    constructor(router, route, cwsnService, sqliteDB, alertService, http, networkService, sharedService) {
        this.router = router;
        this.route = route;
        this.cwsnService = cwsnService;
        this.sqliteDB = sqliteDB;
        this.alertService = alertService;
        this.http = http;
        this.networkService = networkService;
        this.sharedService = sharedService;
        this.hideSchoolList = false;
        this.totalSchool = 0;
        this.totalUnScreenSchool = 0;
        this.totalScreenSchool = 0;
        this.totalNoCWSNStudents = 0;
        this.schoolList = [];
        this.schl_chk_count = 0;
        this.searchText = '';
    }
    ngOnInit() {
        console.log('github test master');
    }
    ionViewDidEnter() {
        this.schl_chk_count = 0;
        this.route.params.subscribe(data => {
            let id = parseInt(data.id);
            this.userId = id;
        });
        this.routeData = this.route.snapshot;
        this.title = this.routeData.queryParams.title;
        this.mode = this.routeData.queryParams.mode;
        // ====schoollist data check in local db======
        this.cwsnService.cwsnP1Post('load', 0);
        this.checkLocalDB();
    }
    checkLocalDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.schoolList = [];
            let query = 'SELECT * FROM cwsn_sch_list' +
                ' WHERE ZoneId = "' + this.userId + '"';
            yield this.sqliteDB.executeQuery(query).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (res.rows.length > 0) {
                    let temp = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        // Object.assign(temp[i], { isChecked: false });
                        temp.push(res.rows.item(i));
                    }
                    let schoolList = temp;
                    schoolList = schoolList.filter((value, index, self) => index === self.findIndex((t) => (t.SchlId === value.SchlId && t.SchlId === value.SchlId)));
                    // this.schl_chk_count = 0;
                    for (let i = 0; i < schoolList.length; i++) {
                        let sec_query = 'SELECT * FROM cwsn_student_list' +
                            ' WHERE school_key_id = "' + schoolList[i].SchlId + '"';
                        debugger;
                        yield this.sqliteDB.executeQuery(sec_query).then(res => {
                            if (res.rows.length > 0) {
                                let schl_temp = [];
                                for (var j = 0; j < res.rows.length; j++) {
                                    schl_temp.push(res.rows.item(j));
                                }
                                ;
                                this.studentData = schl_temp;
                                let tot = 0;
                                let cwsn_tot = 0;
                                let Scrn = 0;
                                let Unscrn = 0;
                                let nocwsncnt = 0;
                                let schl_total_filter = this.studentData.filter(obj => obj.school_key_id == schoolList[i].SchlId);
                                let schl_cwsn_total_filter = this.studentData.filter(obj => obj.school_key_id == schoolList[i].SchlId && obj.cwsnStatus != null);
                                let schl_scrn_filter = this.studentData.filter(obj => obj.school_key_id == schoolList[i].SchlId && obj.cwsnStatus != null && (obj.ScrSts != null && obj.ScrSts != ''));
                                let schl_unscrn_filter = this.studentData.filter(obj => obj.school_key_id == schoolList[i].SchlId && obj.cwsnStatus != null && (obj.ScrSts == null || obj.ScrSts == ''));
                                let schl_no_filter = this.studentData.filter(obj => obj.school_key_id == schoolList[i].SchlId && obj.cwsnStatus == null || obj.cwsnStatus == '');
                                if (schl_total_filter.length > 0) { //cwsnStatus
                                    tot = schl_total_filter.length;
                                }
                                if (schl_cwsn_total_filter.length > 0) { //cwsnStatus
                                    cwsn_tot = schl_cwsn_total_filter.length;
                                }
                                if (schl_scrn_filter.length > 0) { //cwsnStatus
                                    Scrn = schl_scrn_filter.length;
                                }
                                if (schl_unscrn_filter.length > 0) { //cwsnStatus
                                    Unscrn = schl_unscrn_filter.length;
                                }
                                if (schl_no_filter.length > 0) { //cwsnStatus
                                    nocwsncnt = schl_no_filter.length;
                                }
                                let value = this.filterScreenUnScreenStudent(schoolList);
                                let { screenStatus, unScreenStatus, noScreeningStatus } = value;
                                this.screenStatus = screenStatus;
                                this.unScreenStatus = unScreenStatus;
                                this.noScreeningStatus = noScreeningStatus;
                                let scrn_sts;
                                if (cwsn_tot > 0 && cwsn_tot == Scrn) {
                                    scrn_sts = 'Screened';
                                }
                                if (cwsn_tot > 0 && cwsn_tot > Scrn) {
                                    scrn_sts = 'PartialyScreened';
                                }
                                schoolList[i].totStud = tot;
                                schoolList[i].cwsnstud = cwsn_tot;
                                schoolList[i].scrStud = Scrn;
                                // this.totalScreenSchool = Scrn;
                                // this.totalUnScreenSchool = (this.unScreenStatus - Scrn);
                                // this.totalNoCWSNStudents = nocwsncnt;
                                let uptquery = 'UPDATE cwsn_sch_list SET totStud="' + tot + '", cwsnstud="' + cwsn_tot + '", Screenstatus="' + scrn_sts + '", scrStud="' + Scrn + '"' +
                                    'WHERE SchlId = "' + schoolList[i].SchlId + '"';
                                return this.sqliteDB.update(uptquery).then(res => {
                                    // console.log(schoolList[i].SchlId, "Updated cwsn_sch_list count");  
                                });
                            }
                            else {
                                let value = this.filterScreenUnScreenStudent(schoolList);
                                let { screenStatus, unScreenStatus, noScreeningStatus } = value;
                                this.screenStatus = screenStatus;
                                this.unScreenStatus = unScreenStatus;
                            }
                        });
                        if ((schoolList[i].checked_status == 1)) {
                            schoolList[i].isChecked = true;
                        }
                        else {
                            schoolList[i].isChecked = false;
                        }
                        this.schoolList.push(schoolList[i]);
                    }
                    this.schoolListCopy = this.schoolList;
                    this.totalSchool = this.schoolList.length;
                }
                else {
                    this.getSchoolList(this.userId);
                }
                ;
            }));
        });
    }
    ;
    checkBox(i, eve, SchlId) {
        let checked_status = 0;
        if (eve.detail.checked == true) {
            checked_status = 1;
        }
        else {
            if (this.networkService.getCurrentNetworkStatus() == 0) { //online
                this.cwsnService.cwsnP1Post('uncheck', SchlId);
                checked_status = 0;
                this.schoolList[i].isChecked = false;
            }
            else { //offline
                checked_status = 1;
                this.schoolList[i].isChecked = true;
                this.alertService.warning('Please check your internet connection');
            }
        }
        ;
        let query = 'UPDATE cwsn_sch_list SET checked_status="' + checked_status + '"' +
            'WHERE SchlId = "' + SchlId + '"';
        return this.sqliteDB.update(query).then(res => {
            let chkCnt = this.schoolList.filter(obj => {
                return obj.isChecked;
            });
            if (chkCnt.length > 1) {
                for (let i = 0; i < this.schoolList.length; i++) {
                    if (!this.schoolList[i].isChecked) {
                        this.schoolList[i].isDisable = true;
                    }
                }
            }
            else {
                for (let i = 0; i < this.schoolList.length; i++) {
                    if (!this.schoolList[i].isChecked) {
                        this.schoolList[i].isDisable = false;
                    }
                }
            }
        });
        // }
    }
    getSchoolList(id) {
        // let school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_phase1_skl_list_' + id + '_json.json';
        // let school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_skl_count_' + id + '_json.json';
        // let school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_spl_edu_sch_list_'+id+'_json.json';
        // this.http.get<any>(school_list_json).subscribe((data) => {
        //   if (data) {
        //     this.insertData(data[0]);
        //   } else {
        //     this.alertService.warning('No Schools Found');
        //   }
        // })
        this.cwsnService.getschoolListall(id).subscribe(data => {
            if (data.dataStatus) {
                this.insertData(data.result);
            }
            else {
                this.alertService.warning(data.message);
            }
        });
    }
    goBack() {
        if (this.title == 'Comprehensive Assessment') {
            this.router.navigate(['/tabs/cwsn-menu'], { queryParams: { title: this.title, mode: this.mode } });
        }
        else {
            this.router.navigate(['/tabs/cwsn/dashboard']);
        }
        // this.router.navigate(["/tabs/cwsn/cluster"], { queryParams: { title: 'My Schools', mode: this.mode } });
    }
    enSureValueHereOrNot(arr) {
        let value = [];
        arr.map(id => {
            if (id.SchlId !== null && id.SchlId !== undefined && id.SchlId !== '') {
                value = id;
            }
            else {
                value.length = 0;
            }
        });
        return value;
    }
    filterScreenUnScreenStudent(arr) {
        let screenCount = 0;
        let unScreenCount = 0;
        let noScreeningCount = 0;
        let screenStatus;
        let unScreenStatus;
        let noScreeningStatus;
        arr.forEach(element => {
            // if (element.cwsnstatus > 0 && element.Screenstatus === 'Screened') {
            //   screenStatus = element.Screenstatus
            //   screenCount++;
            // }  
            // if (element.cwsnstatus > 0 && (element.Screenstatus === 'PartialyScreened' || element.Screenstatus === 'YetToStart')) {
            //   unScreenStatus = element.Screenstatus
            //   unScreenCount++;
            // }
            // if (element.cwsnstatus === 0) {
            //   noScreeningStatus = element.Screenstatus
            //   noScreeningCount++;
            // }
            if (element.cwsnstud > 0 && element.cwsnstud == element.scrStud) {
                screenStatus = element.Screenstatus;
                screenCount++;
            }
            if (element.cwsnstud > 0 && element.cwsnstud > element.scrStud) {
                unScreenStatus = element.Screenstatus;
                unScreenCount++;
            }
            if (element.cwsnstud === 0) {
                noScreeningStatus = '';
                noScreeningCount++;
            }
        });
        this.totalScreenSchool = screenCount;
        this.totalUnScreenSchool = unScreenCount;
        this.totalNoCWSNStudents = noScreeningCount;
        return { screenStatus, unScreenStatus, noScreeningStatus };
    }
    getSchoolListInSearch(event) {
        this.searchTerm = event.detail.value.trim();
        if (this.schoolListCopy.length > 0) {
            this.schoolList = this.schoolListCopy.filter((item) => {
                return item.SchlNme.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            });
        }
    }
    ionViewWillLeave() {
        this.textData = "";
    }
    schoolSelected(item) {
        item.mode = this.mode;
        if (item.isChecked == false) {
            this.alertService.warning('Only marked schools are able to screen');
        }
        else {
            let query = 'SELECT * FROM cwsn_student_list' +
                ' WHERE school_key_id = "' + item.SchlId + '"';
            this.sqliteDB.executeQuery(query).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (res.rows.length > 0) {
                    if (this.title == 'Comprehensive Assessment') {
                        this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(item), 'zonleId': this.userId, title: this.title, mode: this.mode } });
                    }
                    else {
                        this.router.navigate([`/tabs/cwsn/summary-list-cwsn/${this.userId}`], { queryParams: item, skipLocationChange: true });
                    }
                }
                else {
                    this.networkService.initializeNetworkEvents();
                    if (this.networkService.getCurrentNetworkStatus() == 0) {
                        yield this.sharedService.onClassStudentStaffList(item.SchlId).then(r => {
                            this.cwsnService.CwsnNewGet(item.SchlId).subscribe(data => {
                                if (data.dataStatus) {
                                    let delQry = 'delete FROM cwsn_student_list where school_key_id=' + item.SchlId + '';
                                    this.sqliteDB.executeQuery(delQry).then(res => {
                                        let query = 'SELECT * FROM Student_List where SchlD=' + item.SchlId + '';
                                        this.sqliteDB.executeQuery(query).then(res => {
                                            for (let j = 0; j < data.result.length; j++) {
                                                for (var i = 0; i < res.rows.length; i++) {
                                                    if (data.result[j].stdCls == 1) {
                                                    }
                                                    let stddata = res.rows.item(i);
                                                    if (data.result[j].stdId == stddata.studentid) {
                                                        data.result[j].gendr = stddata.Gendr;
                                                        data.result[j].sec = stddata.SECTION;
                                                        data.result[j].stdCls = stddata.Stud_ClsID;
                                                    }
                                                }
                                                ;
                                            }
                                            this.inserStdtData(data.result, item);
                                        });
                                    });
                                }
                                else {
                                    this.alertService.warning(data.message);
                                }
                            }, error => {
                                this.alertService.warning('Unable to get data');
                            });
                        });
                    }
                    else {
                        this.alertService.warning('Please check your internet');
                    }
                }
            }));
        }
    }
    inserStdtData(list, item) {
        let sqlArray = [];
        list.forEach(element => {
            sqlArray.push(['INSERT INTO cwsn_student_list (id,school_key_id,StuId,name,cwsnStatus,ScrSts,refer_to,scrSts_Local,nid,udid,ScreenedDate,da_name,unique_id_no,isPost,Class,Sec,gender,IndexId) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.school_id, element.stdId, element.name, element.referedfrom, element.scrindexid, element.goto, 3, element.nid, element.udid, element.screening_date, element.da_name, element.userId, 3, element.stdCls, element.sec, element.gendr, element.nidIndex]]);
        });
        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
            this.router.navigate([`/tabs/cwsn/summary-list-cwsn/${this.userId}`], { queryParams: item, skipLocationChange: true });
        });
    }
    ;
    insertData(list) {
        let sqlArray = [];
        list.forEach(element => {
            sqlArray.push(['INSERT INTO cwsn_sch_list VALUES (?,?,?,?,?,?,?,?,?,?)', [null, this.userId, parseInt(element.SchlId), element.SchlNme, element.tot, element.screen, element.Screenstatus, element.cwsnstatus, 0, element.udise_code]]);
        });
        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
            this.checkLocalDB();
        });
    }
    ;
    onSync() {
        let query = 'DELETE FROM cwsn_sch_list';
        this.sqliteDB.executeQuery(query).then(res => {
            if (res) {
                this.checkLocalDB();
            }
        });
    }
};
SpecialEducatorsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService }
];
SpecialEducatorsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-school-list",
        template: _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SpecialEducatorsPage);



/***/ }),

/***/ 14081:
/*!**************************************************************!*\
  !*** ./src/app/pages/cwsn/school-list/school-list.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design, .header-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.header-data .sync-icon .icon {\n  font-size: 30px;\n}\n\n.card-align .cards .card-design {\n  border-radius: 10px;\n  padding: 10px 20px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-left: 6px solid #6261cb;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(2) {\n  border-left: 6px solid #04c03d;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(3) {\n  border-left: 6px solid var(--unscreened-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(4) {\n  border-left: 6px solid var(--primary-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .totalSch {\n  color: #6261cb;\n}\n\n.card-align .cards .totalStu {\n  color: #04c03d;\n}\n\n.card-align .cards .totalUnscreenStu {\n  color: var(--unscreened-text-color);\n}\n\n.card-align .cards .newlyStu {\n  color: var(--primary-text-color);\n}\n\n.card-align .search-result .search-box {\n  padding: 0;\n  --background: #fff;\n}\n\n.card-align .search-result .search-data {\n  border-radius: 15px;\n  border: 1px solid #ffffff;\n}\n\n.card-align .search-result .search-data .school-list {\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n\n.card-align .search-result .search-data .school-list .school-list__icon {\n  color: #C8E6C9;\n  font-size: 24px;\n}\n\n.card-align .search-result .search-data:last-child {\n  margin-bottom: 0;\n}\n\n.dataNotFound {\n  text-align: center;\n  padding: 10px 0;\n  font-size: 16px;\n}\n\n.screened {\n  color: var(--screened-text-color) !important;\n}\n\n.unScreened {\n  color: var(--unscreened-text-color) !important;\n}\n\n.checkImg {\n  width: 25px;\n}\n\n.checkAndR {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  grid-gap: 10px;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBZ0JBO0VBQ0Usa0NBQUE7QUFiRjs7QUFnQkE7RUFDRSwrQkFBQTtBQWJGOztBQWdCQTtFQUNFLHdDQUFBO0FBYkY7O0FBbUJRO0VBQ0ksZUFBQTtBQWhCWjs7QUF5Qk07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQXRCUjs7QUF3QlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBdEJaOztBQXVCVTtFQUNFLGVBQUE7QUFyQlo7O0FBdUJVO0VBQ0UsaUJBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFyQmQ7O0FBd0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF0Qlo7O0FBdUJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFyQlo7O0FBeUJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQXZCTjs7QUF5Qkk7RUFDRSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUF2Qk47O0FBeUJJO0VBQ0UsbURBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBdkJOOztBQXlCSTtFQUVFLGdEQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQXhCTjs7QUErQkk7RUFBWSxjQUFBO0FBNUJoQjs7QUE2Qkk7RUFBWSxjQUFBO0FBMUJoQjs7QUEyQkk7RUFBb0IsbUNBQUE7QUF4QnhCOztBQXlCSTtFQUFZLGdDQUFBO0FBdEJoQjs7QUE2Qk07RUFHRSxVQUFBO0VBQ0Esa0JBQUE7QUE3QlI7O0FBK0JNO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQTdCUjs7QUErQlE7RUFDRSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBN0JWOztBQThCVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBNUJaOztBQWdDTTtFQUNFLGdCQUFBO0FBOUJSOztBQW1DRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFoQ0o7O0FBb0NBO0VBQ0UsNENBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsOENBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsV0FBQTtBQWpDRjs7QUFvQ0E7RUFDRSxhQUFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBakNKIiwiZmlsZSI6InNjaG9vbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4lY2FyZC1sYXlvdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuJWJhc2UtbGF5b3V0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWNhcmQtb3V0ZXItZGVzaWdue1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi1jYXJkLWlubmVyLWRlc2lnbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbi5oZWFkZXItZGF0YXtcclxuICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gICAgLnN5bmMtaWNvbntcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuICAuY2FyZC1hbGlnbntcclxuICAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAgLmNhcmRze1xyXG4gICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAuY2FyZC1kZXNpZ257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gICAgICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgLnRvdGFsQ291bnRMYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNjaG9vbG5hbWVze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLW91dGVye1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoMSl7IFxyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM2MjYxY2I7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgyKXsgXHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzA0YzAzZDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgzKXsgXHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDQpeyBcclxuICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDBBMEEwO1xyXG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLy8gLmNhcmQtYWxpZ246bGFzdC1jaGlsZHtcclxuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoNCl7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMzsgfVxyXG4gICAgXHJcbiAgICAudG90YWxTY2h7ICBjb2xvcjogIzYyNjFjYjsgIH1cclxuICAgIC50b3RhbFN0dXsgIGNvbG9yOiAjMDRjMDNkOyAgfVxyXG4gICAgLnRvdGFsVW5zY3JlZW5TdHV7ICBjb2xvcjogdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKTsgIH1cclxuICAgIC5uZXdseVN0dXsgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpOyAgfVxyXG4gICAgLy8gLm5ld2x5U3R1eyAgY29sb3I6ICMwMEEwQTA7ICB9XHJcbiAgICAvLyAubmV3bHlTdHV7ICBjb2xvcjogIzhCNjZCMzsgIH1cclxuICAgIH1cclxuICAgIC8vIHNlYXJjaCByZXN1bHRcclxuICAgIC5zZWFyY2gtcmVzdWx0e1xyXG4gICAgICAvLyBwYWRkaW5nOiAwIDEwcHggMTBweDtcclxuICAgICAgLnNlYXJjaC1ib3h7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMCAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2gtZGF0YXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgICAgIC5zY2hvb2wtbGlzdHsgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgLnNjaG9vbC1saXN0X19pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogI0M4RTZDOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWRhdGE6bGFzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGF0YU5vdEZvdW5ke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcblxyXG4uc2NyZWVuZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1zY3JlZW5lZC10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udW5TY3JlZW5lZCB7ICAgIFxyXG4gIGNvbG9yOiB2YXIoLS11bnNjcmVlbmVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja0ltZyB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5jaGVja0FuZFIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 22232:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/school-list/school-list.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of Schools</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards\" *ngIf=\"title != 'Comprehensive Assessment'\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalSch\">{{totalSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Total Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Total_School.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalStu\">{{totalScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Screened Schools</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/cwsn/Screenedschools.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalUnscreenStu\">{{totalUnScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Unscreened Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img *ngIf=\"this.mode == 'LightMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Unscreenedschools.svg\" />\r\n          <img *ngIf=\"this.mode == 'DarkMode'\" class=\"img\"\r\n            src=\"../../../../assets/icons/cwsn/Unscreenedschools_dark.svg\" />\r\n\r\n        </div>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel newlyStu\">{{totalNoCWSNStudents}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Schools without CWSN</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <!-- <img class=\"img\" src=\"../../../../assets/icons/cwsn/Notscreened.svg\" />  -->\r\n          <img *ngIf=\"this.mode == 'LightMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Notscreened_Black.svg\" />\r\n          <img *ngIf=\"this.mode == 'DarkMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Notscreened_white.svg\" />\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div class=\"cards\" *ngIf=\"title == 'Comprehensive Assessment'\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalSch\">{{totalSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Total Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Total_School.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalStu\">{{totalScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Evaluated Schools</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/cwsn/Screenedschools.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalUnscreenStu\">{{totalUnScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Unevaluated Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img *ngIf=\"this.mode == 'LightMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Unscreenedschools.svg\" />\r\n          <img *ngIf=\"this.mode == 'DarkMode'\" class=\"img\"\r\n            src=\"../../../../assets/icons/cwsn/Unscreenedschools_dark.svg\" />\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n\r\n    <div class=\"search-result\">\r\n      <ion-item class=\"customInput\">\r\n        <ion-input class=\"col-12\" placeholder=\"Search\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n        </ion-input>\r\n        <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n      </ion-item> \r\n      <ion-card class=\"search-data ion-card-margin-top-bottom\"\r\n        *ngFor=\"let item of schoolList| searchall:searchText;let i = index\">\r\n        <!-- {{schoolList.isChecked}} : isChecked , {{schl_chk_count}} : schl_chk_count -->\r\n        <ion-row>\r\n\r\n          <ion-col size=\"9\">\r\n            <div class=\"school-list\">\r\n\r\n              <ion-label class=\"school-list__name\" (click)=\"schoolSelected(item)\"\r\n                [class.screened]=\"item.cwsnstud > 0 && item.cwsnstud == item.scrStud\"\r\n                [class.unScreened]=\"item.cwsnstud > 0 && item.cwsnstud > item.scrStud\">\r\n                {{item.SchlNme}} <span *ngIf=\"item.udise_code\">({{item.udise_code}})</span></ion-label>\r\n\r\n              <!-- <div style=\"justify-content: end;\"> -->\r\n              <!-- <img *ngIf=\"item.cwsnstud > 0 && item.cwsnstud == item.scrStud\" class=\"img\" style=\"width: 6%;\"\r\n                  src=\"../../../../assets/icons/Tick.svg\" />\r\n\r\n                  <ion-checkbox [disabled]=\"item.isDisable\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkBox(i,$event,item.SchlId)\"></ion-checkbox> -->\r\n              <!-- </div> -->\r\n\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"3\" class=\"checkAndR\">\r\n            <img *ngIf=\"item.cwsnstud > 0 && item.cwsnstud == item.scrStud\" class=\"checkImg\"\r\n              src=\"../../../../assets/icons/Tick.svg\" />\r\n\r\n            <ion-checkbox [disabled]=\"item.isDisable\" [(ngModel)]=\"item.isChecked\"\r\n              (ionChange)=\"checkBox(i,$event,item.SchlId)\"></ion-checkbox>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n\r\n        <ng-template #schlIdNotFound>\r\n          <h4 class=\"dataNotFound\">Data Not Found</h4>\r\n        </ng-template>\r\n      </ion-card>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_school-list_school-list_module_ts-es2015.js.map