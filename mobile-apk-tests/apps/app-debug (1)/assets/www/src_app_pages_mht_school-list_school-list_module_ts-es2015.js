(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_school-list_school-list_module_ts"],{

/***/ 83514:
/*!*********************************************************************!*\
  !*** ./src/app/pages/mht/school-list/school-list-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolListPageRoutingModule": function() { return /* binding */ SchoolListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-list.page */ 54000);




const routes = [
    {
        path: '',
        component: _school_list_page__WEBPACK_IMPORTED_MODULE_0__.SchoolListPage
    }
];
let SchoolListPageRoutingModule = class SchoolListPageRoutingModule {
};
SchoolListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchoolListPageRoutingModule);



/***/ }),

/***/ 25752:
/*!*************************************************************!*\
  !*** ./src/app/pages/mht/school-list/school-list.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolListPageModule": function() { return /* binding */ SchoolListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-list-routing.module */ 83514);
/* harmony import */ var _school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-list.page */ 54000);







let SchoolListPageModule = class SchoolListPageModule {
};
SchoolListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolListPageRoutingModule
        ],
        declarations: [_school_list_page__WEBPACK_IMPORTED_MODULE_1__.SchoolListPage]
    })
], SchoolListPageModule);



/***/ }),

/***/ 54000:
/*!***********************************************************!*\
  !*** ./src/app/pages/mht/school-list/school-list.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolListPage": function() { return /* binding */ SchoolListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./school-list.page.html */ 19063);
/* harmony import */ var _school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-list.page.scss */ 74851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _mht_view_modal_mht_view_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mht-view-modal/mht-view-modal.page */ 13756);
/* harmony import */ var _commonpages_summarypopuppage_summarypopuppage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../commonpages/summarypopuppage/summarypopuppage.page */ 74352);












let SchoolListPage = class SchoolListPage {
    constructor(usersessionService, alert, router, userService, route, sqliteDB, modalCtrl) {
        this.usersessionService = usersessionService;
        this.alert = alert;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.sqliteDB = sqliteDB;
        this.modalCtrl = modalCtrl;
        this.data = [];
        this.noData = false;
        this.schoolList = [];
        this.dataListtotal = [];
        this.acYear = '2024-25';
        this.UserName = this.usersessionService.emis_username();
        this.DistrictId = this.usersessionService.user_id();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        var checkViewType = localStorage.getItem('viewType');
        if (checkViewType && checkViewType != undefined) {
            this.viewType = JSON.parse(checkViewType);
            this.checkLocalDb();
        }
        else {
            this.schoolAlert();
        }
    }
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _mht_view_modal_mht_view_modal_page__WEBPACK_IMPORTED_MODULE_6__.MhtViewModalPage,
                // componentProps: { schoolClassData: this.currentSchListModel },
                cssClass: 'fullscreen'
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            this.handleModalClose(data);
        });
    }
    openModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.userService.getGetMhtSummaryOfVisit(this.UserName, item.school_id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (res.result) {
                    const modal = yield this.modalCtrl.create({
                        component: _commonpages_summarypopuppage_summarypopuppage_page__WEBPACK_IMPORTED_MODULE_7__.SummarypopuppagePage,
                        componentProps: {
                            schoolname: item.school_name,
                            reportname: 'Summary report',
                            items: res.result.map(item => ({
                                date: item.update_date,
                                date_ts: this.addTimeOffset(item.updationts),
                                count: parseInt(item.ScreenedCount, 10),
                                image: item.visit_photo
                            }))
                        },
                        cssClass: 'view-image-modal_capturedimage',
                        backdropDismiss: true,
                    });
                    yield modal.present();
                }
                else {
                    this.alert.error('No data found');
                }
            }));
        });
    }
    addTimeOffset(dateString) {
        if (!dateString)
            return "Invalid Date";
        // Convert the input string into a Date object
        const date = new Date(dateString.replace(" ", "T")); // Ensure proper format for parsing
        if (isNaN(date.getTime()))
            return "Invalid Date"; // Check if date is valid
        // Add 5 hours and 30 minutes
        date.setHours(date.getHours() + 5);
        date.setMinutes(date.getMinutes() + 30);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Ensure 2-digit format
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        console.log(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    handleModalClose(data) {
        if (data && data != undefined) {
            this.viewType = data;
            localStorage.removeItem('viewType');
            localStorage.setItem('viewType', JSON.stringify(data));
            this.onSync();
        }
    }
    totalSchCountLocalDb() {
        // let query = 'SELECT * FROM mhtSchoolCountDB' +
        // ' WHERE UserName = "' + this.UserName + '"';
        this.pat_Screened = '0';
        this.screened = '0';
        this.tot_schools = '0';
        let query = 'SELECT * FROM mhtSchoolCountDB';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.dataListtotal = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataListtotal.push(data.rows.item(i));
                }
                let newTotalCount = [];
                newTotalCount = this.dataListtotal.filter(dd => dd.UserName == this.UserName);
                this.pat_Screened = newTotalCount[0].pat_Screened;
                this.screened = newTotalCount[0].screened;
                this.tot_schools = newTotalCount[0].tot_schools;
            }
            else {
                this.totalSchoolCounts();
            }
        });
    }
    totalSchoolCounts() {
        var _a, _b, _c;
        this.SchoolCounts = {};
        this.pat_Screened = '0';
        this.screened = '0';
        this.tot_schools = '0';
        if (((_a = this.viewType) === null || _a === void 0 ? void 0 : _a.type) != 2) {
            this.userService.mhtTotalSchoolCount2(this.UserName, this.acYear, (_c = (_b = this.viewType) === null || _b === void 0 ? void 0 : _b.diagnosis) === null || _c === void 0 ? void 0 : _c.value).subscribe((res) => {
                if (res.dataStatus) {
                    this.SchoolCounts = res.result;
                    // this.pat_Screened = this.SchoolCounts.ScreenedCount[0].Partially_Screened;
                    // this.screened = this.SchoolCounts.ScreenedCount[0].Screened;
                    this.screened = this.schoolList.length;
                    this.tot_schools = this.SchoolCounts.TotalSchlCount[0].TotalSchool;
                    // this.totalSchCountinsertLocalDB()
                }
            });
        }
        else {
            this.userService.mhtTotalSchoolCount(this.UserName, this.acYear).subscribe((res) => {
                if (res.dataStatus) {
                    this.SchoolCounts = res.result;
                    this.pat_Screened = this.SchoolCounts.ScreenedCount[0].Partially_Screened;
                    this.screened = this.SchoolCounts.ScreenedCount[0].Screened;
                    this.tot_schools = this.SchoolCounts.TotalSchlCount[0].TotalSchool;
                    // this.totalSchCountinsertLocalDB()
                }
            });
        }
    }
    checkLocalDb() {
        let query = 'SELECT * FROM mhtSchoolListDB';
        this.data = [];
        this.schoolList = [];
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.schoolList.push(data.rows.item(i));
                    this.data.push(data.rows.item(i));
                }
                this.acYear = data.rows.item(0)['acYear'];
                this.totalSchoolCounts();
            }
            else {
                this.getSchoolList();
            }
        });
    }
    getSchoolList() {
        var _a, _b, _c, _d, _e, _f;
        this.data = [];
        this.schoolList = [];
        this.SchoolCounts = {};
        this.pat_Screened = '0';
        this.screened = '0';
        this.tot_schools = '0';
        if (this.viewType.type != 2 && ((_b = (_a = this.viewType) === null || _a === void 0 ? void 0 : _a.diagnosis) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            this.userService.getDiagnosis(this.viewType.type).subscribe((res) => {
                var _a, _b;
                if (res.dataStatus) {
                    this.viewType.diagnosis = res.result;
                }
                var data = {
                    records: {
                        "type": (_a = this.viewType) === null || _a === void 0 ? void 0 : _a.type,
                        "diagnosis": (_b = this.viewType) === null || _b === void 0 ? void 0 : _b.diagnosis,
                        "userName": this.UserName,
                        "acYear": this.acYear
                    }
                };
                this.userService.getMHTSchoolList2(data).subscribe((res) => {
                    if (res.dataStatus) {
                        this.schoolList = res.result;
                        this.data = this.schoolList;
                        this.insertLocalDB(this.data);
                    }
                    else {
                        this.alert.error("No students were found in any school for this diagnosis");
                    }
                });
            });
        }
        else {
            var data = {
                records: {
                    "type": (_c = this.viewType) === null || _c === void 0 ? void 0 : _c.type,
                    "diagnosis": (_e = (_d = this.viewType) === null || _d === void 0 ? void 0 : _d.diagnosis) === null || _e === void 0 ? void 0 : _e.map(item => item.value),
                    "userName": this.UserName,
                    "acYear": this.acYear
                }
            };
            if (((_f = this.viewType) === null || _f === void 0 ? void 0 : _f.type) != 2) {
                this.userService.getMHTSchoolList2(data).subscribe((res) => {
                    if (res.dataStatus) {
                        this.schoolList = res.result;
                        this.data = this.schoolList;
                        this.insertLocalDB(this.data);
                    }
                    else {
                        this.alert.error("No students were found in any school for this diagnosis");
                    }
                });
            }
            else {
                this.userService.getMHTSchoolList(this.DistrictId, this.UserName, this.acYear).subscribe((res) => {
                    if (res.dataStatus) {
                        this.schoolList = res.result;
                        this.data = this.schoolList;
                        this.insertLocalDB(this.data);
                    }
                    else {
                        this.alert.error("No students were found in any school for this diagnosis");
                    }
                });
            }
        }
    }
    insertLocalDB(key) {
        key.forEach((element) => {
            const datainsert = 'INSERT INTO mhtSchoolListDB VALUES (?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, this.acYear, element.school_id, element.school_name, element.status, element.longitude, element.latitude]).then(insertres => {
                if (insertres.insertId) {
                }
            });
        });
        this.checkLocalDb();
    }
    totalSchCountinsertLocalDB() {
        // key.forEach((element,) => {
        const datainsert = 'INSERT INTO mhtSchoolCountDB VALUES (?,?,?,?,?)';
        this.sqliteDB.insert(datainsert, [null, this.pat_Screened, this.screened, this.tot_schools, this.UserName]).then(insertres => {
            if (insertres.insertId) {
            }
        });
        // });
    }
    onGoButton() {
        this.router.navigate(['/tabs/home']);
    }
    navigateToClassSection(item) {
        var _a;
        localStorage.setItem('Latt', item.latitude);
        localStorage.setItem('Longg', item.longitude);
        if (((_a = this.viewType) === null || _a === void 0 ? void 0 : _a.type) != 2) {
            this.router.navigate(['/tabs/class-student-list'], { queryParams: { 'SchlId': item.school_id, 'Latt': item.latitude, 'Longg': item.longitude, 'ClsID': '', 'Sectn': '', 'SchName': item.school_name, 'session': 1, 'acYear': this.acYear }, skipLocationChange: false });
        }
        else {
            this.router.navigate(['/tabs/mht-class-list'], { queryParams: { 'SchlId': item.school_id, 'Latt': item.latitude, 'Longg': item.longitude, Id: 2, 'SchName': item.school_name, 'acYear': this.acYear }, skipLocationChange: false });
        }
    }
    getSchoolListInSearch(event) {
        // this.searchTerm = event.detail.value.trim();
        this.searchTerm = this.textData;
        this.schoolList = this.data.filter((item) => {
            // Convert both to lowercase and perform the search
            const schoolNameLower = item.school_name.toLowerCase();
            const searchTermLower = this.searchTerm.toLowerCase();
            return schoolNameLower.indexOf(searchTermLower) > -1;
            // return item.school_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
        if (this.schoolList.length > 0) {
            this.noData = false;
        }
        else {
            this.noData = true;
        }
    }
    ionViewWillLeave() {
        this.textData = "";
    }
    refreshTable() {
        let query = 'DELETE FROM mhtSchoolListDB';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
        });
    }
    onSync() {
        let query = 'DELETE FROM mhtSchoolListDB';
        this.sqliteDB.executeQuery(query).then(res => {
            if (res) {
                var checkViewType = localStorage.getItem('viewType');
                if (checkViewType && checkViewType != undefined) {
                    this.viewType = JSON.parse(checkViewType);
                    this.checkLocalDb();
                }
            }
        });
    }
};
SchoolListPage.ctorParameters = () => [
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController }
];
SchoolListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-school-list',
        template: _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchoolListPage);



/***/ }),

/***/ 74851:
/*!*************************************************************!*\
  !*** ./src/app/pages/mht/school-list/school-list.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maindiv {\n  margin: 20px;\n  padding: 15px;\n  background-color: white;\n  border-radius: 15px;\n}\n\n.blockLabel {\n  font-weight: 600;\n  font-size: 18px;\n  margin-left: 8px;\n}\n\n.dropDown {\n  border: 1px solid grey;\n  padding-right: 10px;\n  font-size: 15px;\n  margin-top: 10px;\n  margin-left: 8px;\n  margin-right: 8px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.cardTotal {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #68529c;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.cardtotal2 {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #3975c4;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.cardTotal3 {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #be4eb9;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.totalNo {\n  font-size: 20px;\n  color: #68529c;\n  font-weight: 500;\n}\n\n.totalText {\n  font-size: 14px;\n  color: black;\n}\n\n.col {\n  align-self: center;\n}\n\n.classNo {\n  font-size: 18px;\n  color: #68529c;\n  font-weight: 600;\n}\n\n.classcard {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.classText {\n  font-size: 14px;\n  color: black;\n}\n\n.schName {\n  font-size: 16px;\n  color: #68529c;\n  font-weight: 500;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  border-radius: 25px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.1rem;\n  font-weight: 400;\n  color: #7f8490;\n  background-color: white;\n  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1) !important;\n}\n\n.labelClass {\n  width: 95%;\n  padding: 6px;\n  padding-left: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  margin-left: 10px;\n}\n\n.mainCard {\n  padding: 8px;\n  border-radius: 15px;\n  border-left: 4px solid #68529c;\n  border-right: 4px solid #68529c;\n}\n\n.headerData {\n  color: #68529c;\n  font-size: 12px;\n  background-color: aliceblue;\n  padding: 10px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.countData {\n  font-size: 15px;\n  background-color: #8b67b3;\n  color: aliceblue;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.custom-modal-class {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBRUEsb0RBQUE7QUFjSjs7QUFaRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWVKOztBQWJFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQywrQkFBQTtBQWdCTDs7QUFiRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQWdCSjs7QUFkRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZEU7RUFDRSx5QkFBQTtBQWlCSiIsImZpbGUiOiJzY2hvb2wtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmJsb2NrTGFiZWx7XHJcbiAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLmRyb3BEb3due1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmRUb3RhbHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY2FyZHRvdGFsMntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDU3LCAxMTcsIDE5Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY2FyZFRvdGFsM3tcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiKDE5MCwgNzgsIDE4NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udG90YWxOb3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOnJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4udG90YWxUZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6YmxhY2tcclxufVxyXG4uY29se1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5jbGFzc05ve1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM2ODUyOWM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5jbGFzc2NhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiKDEwNCwgODIsIDE1Nik7IFxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2xhc3NUZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6YmxhY2tcclxufVxyXG4uc2NoTmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOnJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgOHB4IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjN2Y4NDkwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGFiZWxDbGFzc3tcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAubWFpbkNhcmR7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJEYXRhIHtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICAuY291bnREYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjY3YjM7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tbW9kYWwtY2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIC8vbG9naW5cclxuXHJcblxyXG5cclxuLy8gICAubG9naW4tYmd7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9Mb2dpbkltZy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcblxyXG4gICJdfQ== */");

/***/ }),

/***/ 19063:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/school-list/school-list.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">School List (AY {{acYear}})</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\">\r\n        </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n          <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div>\r\n    <ion-item style=\"background-color: white;margin: 20px;border-radius: 18px;font-size: 20px;font-weight: bold;\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"6\">\r\n          <ion-label>Filter by</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" style=\"display: flex; align-items: center; justify-content: end;\" (click)=\"schoolAlert()\">\r\n          <ion-label>{{(viewType?.type == 'D1' || viewType?.type == 'D2' || viewType?.type == 'D3' || viewType?.type == 'D4') ? (viewType?.type + ' filter') : viewType?.type == '1' ? ('All Diagnosis filter') : 'No filter'}}</ion-label>\r\n          <ion-icon name=\"caret-down-outline\" style=\"font-size: 12px; color: #808080ba; margin-left: 3px;\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item style=\"background-color: white;margin: 20px;border-radius: 18px;font-size: 20px;font-weight: bold;\">\r\n      <ion-label>Academic Year</ion-label>\r\n      <ion-select label-placement=\"stacked\" [(ngModel)]=\"acYear\" (ngModelChange)=\"onSync()\" placeholder=\"Select AY\">\r\n        <ion-select-option value=\"2023-24\">2023-24</ion-select-option>\r\n        <ion-select-option value=\"2024-25\">2024-25</ion-select-option>\r\n        <ion-select-option value=\"2025-26\">2025-26</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <div *ngIf=\"acYear\">\r\n    <div>\r\n      <ion-row style=\"background-color: white;border-left: 8px solid #6968D9;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label\r\n            style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{tot_schools}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Total Schools </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../../assets/icons/Total_School.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"background-color: white;border-left: 8px solid #E169E9;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label\r\n            style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{screened}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Total Screened Schools </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../../assets/icons/Screened_School.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row style=\"background-color: white;border-left: 8px solid #439DE3;margin: 20px;border-radius: 18px;\"\r\n      *ngIf=\"viewType?.type == 2\">\r\n        <ion-col size=\"10\">\r\n          <ion-label\r\n            style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{pat_Screened}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Total Partially Screened Schools </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../../assets/icons/Partialy_screened_school.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"maindiv\">\r\n\r\n      <!-- <ion-row style=\"margin:10px;justify-content: center;\">\r\n          <ion-col size=\"6\" class=\"square\" >\r\n            <ion-card style=\"border-radius: 5px;\" >\r\n              <ion-label>\r\n                <div class=\"headerData\"> Total Schools </div>\r\n                <div class=\"countData\"> 10 </div>\r\n              </ion-label>\r\n            </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"square\" >\r\n              <ion-card style=\"border-radius: 5px;\" >\r\n                <ion-label>\r\n                  <div class=\"headerData\"> Total Schools Screened </div>\r\n                  <div class=\"countData\"> 4 </div>\r\n                </ion-label>\r\n              </ion-card>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"square\" >\r\n                <ion-card style=\"border-radius: 5px;\" >\r\n                  <ion-label>\r\n                    <div class=\"headerData\"> Schools Partialy screened</div>\r\n                    <div class=\"countData\"> 3 </div>\r\n                  </ion-label>\r\n                </ion-card>\r\n                </ion-col>\r\n                <ion-col size=\"6\" class=\"square\" >\r\n                  <ion-card style=\"border-radius: 5px;\" >\r\n                    <ion-label>\r\n                      <div class=\"headerData\"> Schools Yet to be Screened </div>\r\n                      <div class=\"countData\"> 3 </div>\r\n                    </ion-label>\r\n                  </ion-card>\r\n                  </ion-col>\r\n            </ion-row> -->\r\n\r\n\r\n\r\n      <ion-searchbar [(ngModel)]=\"textData\" (ionChange)=\"getSchoolListInSearch($event)\"></ion-searchbar>\r\n      <ion-card class=\"mainCard\" (click)=\"navigateToClassSection(item)\"\r\n        *ngFor=\"let item of this.schoolList; let i = index;\">\r\n        <ion-row>\r\n          <ion-col size=\"10\" class=\"col\">\r\n            <div style=\"width: 100%;\">\r\n              <ion-label class=\"schName\"><b>{{i+1}}.</b> {{item.school_name}}</ion-label>\r\n            </div>\r\n            <div style=\"width: 100%;\" *ngIf=\"item.status == 1\">\r\n              <ion-label\r\n                style=\"font-size: 10px;font-weight:600;background: #f3f3f3;padding: 4px;border-radius: 5px;color:green\">Fully\r\n                Screened</ion-label>\r\n            </div>\r\n            <div style=\"width: 100%;\" *ngIf=\"item.status == 3\">\r\n              <ion-label\r\n                style=\"font-size: 10px;font-weight:600;background: #f3f3f3;padding: 4px;border-radius: 5px;color:red\">Yet\r\n                To Screen</ion-label>\r\n            </div>\r\n            <div style=\"width: 100%;\" *ngIf=\"item.status == 2\">\r\n              <ion-label\r\n                style=\"font-size: 10px;font-weight:600;background: #f3f3f3;padding: 4px;border-radius: 5px;color:orange\">Partially\r\n                Screened</ion-label>\r\n            </div>\r\n            <div style=\"width: 100%;\" *ngIf=\"item.status == 4\">\r\n              <ion-label\r\n                style=\"font-size: 10px;font-weight:600;background: #f3f3f3;padding: 4px;border-radius: 5px;color:rgb(47, 170, 226)\">No\r\n                Referred Students</ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <!-- <ion-col *ngIf=\"item.status == 1 || item.status == 2\" size=\"2\" class=\"icon-col\" style=\"display: flex; justify-content: flex-end; align-items: center;\">\r\n            <ion-icon (click)=\"openModal(item);$event.stopPropagation()\" name=\"eye\" style=\"font-size: 20px; color: #8b67b3;\"></ion-icon>\r\n          </ion-col> -->\r\n        </ion-row>\r\n      </ion-card>\r\n      <div *ngIf=\"noData\" class=\"listDiv\">\r\n        <div style=\"text-align: center;font-size: 13px; margin-top: 10px;\">\r\n          <ion-label>No Data Found</ion-label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n<!-- <ion-content>\r\n  <div class=\"login-bg\">\r\n    <ion-row style=\"background-color: white;padding:10px;\">\r\n      <div>\r\n        <ion-label>\r\n          Login\r\n        </ion-label>\r\n      </div>\r\n      <div>\r\n      <ion-input></ion-input>\r\n      </div>\r\n      <div>\r\n      <ion-input></ion-input>\r\n      </div>\r\n    </ion-row>\r\n  </div>\r\n\r\n\r\n</ion-content> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mht_school-list_school-list_module_ts-es2015.js.map