(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_ca-student-list_ca-student-list_module_ts"],{

/***/ 36060:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/ca-student-list/ca-student-list-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaStudentListPageRoutingModule": function() { return /* binding */ CaStudentListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ca_student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ca-student-list.page */ 18074);




const routes = [
    {
        path: '',
        component: _ca_student_list_page__WEBPACK_IMPORTED_MODULE_0__.CaStudentListPage
    }
];
let CaStudentListPageRoutingModule = class CaStudentListPageRoutingModule {
};
CaStudentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CaStudentListPageRoutingModule);



/***/ }),

/***/ 527:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/ca-student-list/ca-student-list.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaStudentListPageModule": function() { return /* binding */ CaStudentListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ca_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ca-student-list-routing.module */ 36060);
/* harmony import */ var _ca_student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ca-student-list.page */ 18074);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








let CaStudentListPageModule = class CaStudentListPageModule {
};
CaStudentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ca_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CaStudentListPageRoutingModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_ca_student_list_page__WEBPACK_IMPORTED_MODULE_1__.CaStudentListPage]
    })
], CaStudentListPageModule);



/***/ }),

/***/ 18074:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/ca-student-list/ca-student-list.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaStudentListPage": function() { return /* binding */ CaStudentListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ca_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ca-student-list.page.html */ 48665);
/* harmony import */ var _ca_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ca-student-list.page.scss */ 27968);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);













let CaStudentListPage = class CaStudentListPage {
    constructor(router, http, route, cwsnService, alertService, networkService, sqliteDB, ionicstorage, userSessionService) {
        this.router = router;
        this.http = http;
        this.route = route;
        this.cwsnService = cwsnService;
        this.alertService = alertService;
        this.networkService = networkService;
        this.sqliteDB = sqliteDB;
        this.ionicstorage = ionicstorage;
        this.userSessionService = userSessionService;
        this.hideSchoolList = false;
        this.totalSchool = 0;
        this.totalUnScreenStds = 0;
        this.totalScreenStds = 0;
        this.totalNoscrStds = 0;
        this.totalParScreenStds = 0;
        this.schoolList = [];
        this.studentList = [];
        this.stuFunData = [];
        this.totalStudents = 0;
        this.paramdata = {};
        this.usertype = '';
        this.interVenRes = [];
        this.searchText = '';
        this.gridViewStudList = [];
        this.cwsnAllDisability = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.searchText = '';
        this.user_id = this.userSessionService.emis_username();
        this.ionicstorage.getData('menuValue').then((menuValue) => {
            this.menuValue = menuValue;
        });
        this.route.queryParams.subscribe(data => {
            var _a;
            this.paramdata = JSON.parse(data.item);
            this.studentList = [];
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.totalStudents = this.schoolList.length;
            this.schoolName = this.paramdata.SchlNme;
            this.SchoolIdNo = parseInt(this.paramdata.SchlId);
            this.getStdList((_a = this.paramdata) === null || _a === void 0 ? void 0 : _a.SchlId);
        });
        this.routeData = this.route.snapshot;
        this.title = this.routeData.queryParams.title;
        this.mode = this.routeData.queryParams.mode;
    }
    ionViewWillEnter() {
        this.getDisability();
    }
    getStdList(schId) {
        this.ionicstorage.getData('getUserDetailsCwsn').then((userData) => {
            this.usertype = userData;
            let UsertypeTxt = '';
            if (this.usertype == 1) {
                UsertypeTxt = 'SpecialEdu';
            }
            else {
                UsertypeTxt = 'Therapist';
            }
            let query = 'SELECT * FROM cwsn_ca_stud_list' +
                ' WHERE SchlId = "' + schId + '"';
            this.sqliteDB.executeQuery(query).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (res.rows.length > 0) {
                    this.studentList = [];
                    let temp = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        temp.push(res.rows.item(i));
                    }
                    ;
                    let query2 = 'SELECT * FROM fun_assessment_qstns' +
                        ' WHERE user_name = "' + UsertypeTxt + '"';
                    this.sqliteDB.executeQuery(query2).then(domRes => {
                        let temp1 = [];
                        for (var i = 0; i < domRes.rows.length; i++) {
                            temp1.push(domRes.rows.item(i));
                        }
                        let domainList = this.domainParse(temp1);
                        let query3 = 'SELECT * FROM stud_fun_assessment' +
                            ' WHERE user_id = "' + this.user_id + '"';
                        this.sqliteDB.executeQuery(query3).then((stdRes) => {
                            let query4 = 'SELECT * FROM stud_int_assessment' +
                                ' WHERE user_id = "' + this.user_id + '"';
                            this.sqliteDB.executeQuery(query4).then((interRes) => {
                                this.interVenRes = [];
                                debugger;
                                for (var i = 0; i < interRes.rows.length; i++) {
                                    this.interVenRes.push(interRes.rows.item(i));
                                }
                                ;
                                let assRes = [];
                                for (var i = 0; i < stdRes.rows.length; i++) {
                                    assRes.push(stdRes.rows.item(i));
                                }
                                ;
                                this.stuFunData = assRes;
                                this.studentList = this.calcAssessedStd(temp, assRes, domainList);
                                this.gridViewStudList = this.studentList.filter(dd => dd.Grid == 1);
                                this.studentList = this.studentList.filter(dd => !dd.Grid);
                                this.studentListCopy = this.studentList;
                                this.getDisabilityName();
                                this.filterScreenUnScreenStudent(this.studentList);
                            });
                        });
                    });
                }
                else {
                    this.alertService.warning("No data found");
                }
            }));
        });
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
        arr.forEach(element => {
            if (element.assStatus == 1) {
                screenCount++;
            }
            else if (element.assStatus == 2) {
                unScreenCount++;
            }
            else if (element.assStatus == '') {
                noScreeningCount++;
            }
        });
        this.totalScreenStds = screenCount;
        this.totalParScreenStds = unScreenCount;
        this.totalUnScreenStds = noScreeningCount;
    }
    getStudListInSearch(event) {
        this.searchTerm = event.detail.value.trim();
        if (this.studentListCopy.length > 0) {
            this.studentList = this.studentListCopy.filter((item) => {
                return item.Name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            });
        }
    }
    ionViewWillLeave() {
        this.textData = "";
    }
    gotoStudentDetails(item) {
        this.ionicstorage.insertData_Replace('studentData', item);
        // if (this.stuFunData.length > 0) {
        //   let stuFunFilter = this.stuFunData.filter((key) => key.studId == item.studId);
        //   this.ionicstorage.insertData_Replace('stuFunData', stuFunFilter);
        //   this.ionicstorage.getData('stuFunData').then(
        //     (stuFunData) => {
        //     })
        // }
        item.mode = this.mode;
        if (this.menuValue == 1) {
            this.router.navigate(['/tabs/ca-student-details'], { queryParams: { item: JSON.stringify(item), menuValue: this.menuValue, title: this.title, mode: this.mode } });
        }
        else if (this.menuValue == 2) {
            this.router.navigate(['/tabs/evaluation'], { queryParams: { item: JSON.stringify(item), menuValue: this.menuValue, title: this.title, mode: this.mode } });
        }
        else if (this.menuValue == 3) {
            this.router.navigate(['/tabs/ca-intervention'], { queryParams: { item: JSON.stringify(item), menuValue: this.menuValue, title: this.title, mode: this.mode } });
        }
    }
    // onSync() {
    //   let query = 'DELETE FROM cwsn_sch_list';
    //   this.sqliteDB.executeQuery(query).then(res => {
    //     if (res) {
    //       // this.checkLocalDB();
    //     }
    //   });
    // }
    goBack() {
        this.router.navigate(["/tabs/screaning-menu"], { queryParams: { item: JSON.stringify(this.paramdata), title: this.title, mode: this.mode } });
    }
    calcAssessedStd(stdList = [], assRes = [], domainList = []) {
        let finalstdList = [];
        for (let i = 0; i < stdList.length; i++) {
            let assDomains = [];
            let finalDomList = [];
            const srDis = stdList[i].screen_disability.split(',').map(e => +e);
            let filteredStdRes = assRes.filter(obj => { return obj.stud_id == stdList[i].studId; });
            for (let j = 0; j < domainList.length; j++) {
                const domDis = domainList[j].disability_type.split(',').map(e => +e);
                let isDisabilityFound = srDis.some(v => domDis.indexOf(v) !== -1);
                if (isDisabilityFound) {
                    finalDomList.push(domainList[j]);
                }
                ;
                let isDomIn = filteredStdRes.find(o => { return o.domain_id == domainList[j].domain_id; });
                if (isDomIn) {
                    assDomains.push(domainList[j]);
                }
            }
            ;
            const srDis2 = stdList[i].screen_disability.split(',').map(e => e.trim());
            const arr = ["6", "18", "19", "20", "21", "22"];
            const allValid = srDis2.every(val => arr.includes(val));
            if (srDis2.length > 0 && allValid) {
                stdList[i].Grid = 1;
            }
            stdList[i].assStatus = this.assessLvl(finalDomList, assDomains, stdList[i].studId, this.interVenRes);
            finalstdList.push(stdList[i]);
        }
        ;
        return finalstdList;
    }
    assessLvl(domList = [], assList = [], stdId, interRes = []) {
        let idx = interRes.findIndex(obj => { return obj.stud_id == stdId; });
        let a = domList.length, b = assList.length;
        let status = '';
        if ((a == b) && (a && b)) {
            if (idx != -1) {
                status = "1";
            }
            else {
                status = "2";
            }
        }
        else if (a > b && b > 0) {
            status = "2";
        }
        return status;
    }
    domainParse(questionList) {
        var helper = {};
        let domainListArray = questionList.reduce(function (r, o) {
            var key = o.domain_name + '-' + o.domain_id;
            if (!helper[key]) {
                helper[key] = Object.assign({}, o); // create a copy of o
                r.push(helper[key]);
            }
            else {
                helper[key].disability_type = helper[key].disability_type + "," + o.disability_type;
            }
            return r;
        }, []);
        return domainListArray;
    }
    getDisability() {
        this.ionicstorage.getData('cwsn_diff_able_json').then((data) => {
            if (!data) {
                this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.cwsn_diff_able_json).subscribe((data) => {
                    this.cwsnAllDisability = data.cwsn_diff_able;
                    this.ionicstorage.insertData_Replace('cwsn_diff_able_json', data.cwsn_diff_able);
                    this.getDisabilityName();
                });
            }
            else {
                this.cwsnAllDisability = data;
            }
        });
    }
    getDisabilityName() {
        if (this.gridViewStudList.length > 0) {
            for (let index = 0; index < this.gridViewStudList.length; index++) {
                const element = this.gridViewStudList[index];
                element.screen_name = "";
                if (element.screen_disability) {
                    let arr = element.screen_disability.split(',').map(e => e.trim());
                    if (arr) {
                        let names = [];
                        for (let i = 0; i < arr.length; i++) {
                            const disId = arr[i];
                            const match = this.cwsnAllDisability.find(d => d.id == disId);
                            if (match) {
                                names.push(match.value);
                            }
                        }
                        element.screen_name = names.join(', ');
                    }
                }
            }
        }
    }
};
CaStudentListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService }
];
CaStudentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-ca-student-list',
        template: _raw_loader_ca_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ca_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CaStudentListPage);



/***/ }),

/***/ 27968:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/ca-student-list/ca-student-list.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design, .header-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n  border-radius: 15px;\n}\n\n.header-data .sync-icon .icon {\n  font-size: 30px;\n}\n\n.card-align .cards .card-design {\n  border-radius: 15px;\n  padding: 10px 20px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-left: 6px solid #D46588;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(2) {\n  border-left: 6px solid #04c03d;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(3) {\n  border-left: 6px solid var(--unscreened-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(4) {\n  border-left: 6px solid #127CCE;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .totalSch {\n  color: #D46588;\n}\n\n.card-align .cards .totalStu {\n  color: #04c03d;\n}\n\n.card-align .cards .totalUnscreenStu {\n  color: var(--unscreened-text-color);\n}\n\n.card-align .cards .uneveStd {\n  color: #127CCE;\n}\n\n.card-align .cards .newlyStu {\n  color: var(--primary-text-color);\n}\n\n.card-align .search-result .search-box {\n  padding: 0;\n  --background: #fff;\n}\n\n.card-align .search-result .search-data {\n  border-radius: 15px;\n  border: 1px solid #ffffff;\n}\n\n.card-align .search-result .search-data .school-list {\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n\n.card-align .search-result .search-data .school-list .school-list__icon {\n  color: #C8E6C9;\n  font-size: 24px;\n}\n\n.card-align .search-result .search-data:last-child {\n  margin-bottom: 0;\n}\n\n.dataNotFound {\n  text-align: center;\n  padding: 10px 0;\n  font-size: 16px;\n}\n\n.screened {\n  color: var(--screened-text-color) !important;\n}\n\n.unScreened {\n  color: var(--unscreened-text-color) !important;\n}\n\n.vertical-line-header {\n  border-right: 1px solid var(--vertical-line-header);\n  margin: 10px 0px;\n}\n\n.search-card {\n  border-left: 6px solid #3E8EED;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n  padding: 0px 15px;\n}\n\n.vertical-line {\n  border-right: 1px solid var(--primary-text-color);\n  color: var(--primary-text-color);\n  font-size: 1rem;\n  margin: 10px 0px;\n}\n\n.heading {\n  text-align: center;\n  align-self: center;\n  color: var(--vertical-line-header);\n  font-weight: 500;\n}\n\n.eye-icon {\n  text-align: center !important;\n  align-self: center !important;\n  zoom: 1.5 !important;\n  color: var(--primary-text-color) !important;\n}\n\n.ion-row-margin-top-bottom {\n  margin: 0px !important;\n}\n\n.cusSearch {\n  margin: 0 !important;\n  padding: 10px 0;\n  --background: white;\n}\n\n.sc-ion-searchbar-md-h {\n  --border-radius: 15px !important;\n}\n\n.customInput {\n  border-radius: 20px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.rowpMedium {\n  padding: 5px 25px;\n  text-transform: uppercase;\n}\n\n.rowColr {\n  background-color: #8B67B3;\n  margin: 20px;\n  border-radius: 10px;\n}\n\n.centerRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhLXN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQWVBO0VBQ0Usa0NBQUE7QUFaRjs7QUFlQTtFQUNFLCtCQUFBO0FBWkY7O0FBZUE7RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0FBWkY7O0FBbUJJO0VBQ0UsZUFBQTtBQWhCTjs7QUEyQkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQXhCTjs7QUEyQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUF6QlI7O0FBMkJRO0VBQ0UsZUFBQTtBQXpCVjs7QUE0QlE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQTFCVjs7QUE4Qk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTVCUjs7QUE4QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTVCVjs7QUFpQ0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBL0JOOztBQWtDSTtFQUNFLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQWhDTjs7QUFtQ0k7RUFDRSxtREFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUFqQ047O0FBb0NJO0VBQ0UsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBbENOOztBQTBDSTtFQUNFLGNBQUE7QUF4Q047O0FBMkNJO0VBQ0UsY0FBQTtBQXpDTjs7QUE0Q0k7RUFDRSxtQ0FBQTtBQTFDTjs7QUE2Q0k7RUFDRSxjQUFBO0FBM0NOOztBQThDSTtFQUNFLGdDQUFBO0FBNUNOOztBQXVESTtFQUdFLFVBQUE7RUFDQSxrQkFBQTtBQXZETjs7QUEwREk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBeEROOztBQTBETTtFQUNFLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF4RFI7O0FBMERRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF4RFY7O0FBNkRJO0VBQ0UsZ0JBQUE7QUEzRE47O0FBZ0VBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTdERjs7QUFpRUE7RUFDRSw0Q0FBQTtBQTlERjs7QUFpRUE7RUFDRSw4Q0FBQTtBQTlERjs7QUFpRUE7RUFDRSxtREFBQTtFQUlBLGdCQUFBO0FBakVGOztBQW9FQTtFQUNFLDhCQUFBO0VBRUEsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlCQUFBO0FBbEVGOztBQXFFQTtFQUVFLGlEQUFBO0VBRUEsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFwRUY7O0FBdUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFwRUY7O0FBdUVBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7QUFwRUY7O0FBdUVBO0VBQ0Usc0JBQUE7QUFwRUY7O0FBdUVBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFwRUY7O0FBdUVBO0VBQ0UsZ0NBQUE7QUFwRUY7O0FBdUVBO0VBQ0UsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBcEVGOztBQXVFQTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFwRUo7O0FBdUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQWMsbUJBQUE7QUFuRWxCOztBQXNFQTtFQUNFLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixrQkFBQTtBQWhFL0QiLCJmaWxlIjoiY2Etc3R1ZGVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVjYXJkLWxheW91dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuJWJhc2UtbGF5b3V0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi1jYXJkLW91dGVyLWRlc2lnbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjOEI2NkIzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWNhcmQtaW5uZXItZGVzaWduIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItZGF0YSB7XHJcbiAgQGV4dGVuZCAlYmFzZS1sYXlvdXQ7XHJcblxyXG4gIC5zeW5jLWljb24ge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcblxyXG4gIC5jYXJkcyB7XHJcblxyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIC5jYXJkLWRlc2lnbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgQGV4dGVuZCAlYmFzZS1sYXlvdXQ7XHJcblxyXG4gICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC50b3RhbENvdW50TGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjaG9vbG5hbWVzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmltYWdlLW91dGVyIHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgI0Q0NjU4ODtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzA0YzAzZDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzEyN0NDRTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmNhcmQtYWxpZ246bGFzdC1jaGlsZHtcclxuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoNCl7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMzsgfVxyXG5cclxuICAgIC50b3RhbFNjaCB7XHJcbiAgICAgIGNvbG9yOiAjRDQ2NTg4O1xyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbFN0dSB7XHJcbiAgICAgIGNvbG9yOiAjMDRjMDNkO1xyXG4gICAgfVxyXG5cclxuICAgIC50b3RhbFVuc2NyZWVuU3R1IHtcclxuICAgICAgY29sb3I6IHZhcigtLXVuc2NyZWVuZWQtdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuZXZlU3RkIHtcclxuICAgICAgY29sb3I6ICMxMjdDQ0U7XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld2x5U3R1IHtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLm5ld2x5U3R1eyAgY29sb3I6ICMwMEEwQTA7ICB9XHJcbiAgICAvLyAubmV3bHlTdHV7ICBjb2xvcjogIzhCNjZCMzsgIH1cclxuICB9XHJcblxyXG4gIC8vIHNlYXJjaCByZXN1bHRcclxuICAuc2VhcmNoLXJlc3VsdCB7XHJcblxyXG4gICAgLy8gcGFkZGluZzogMCAxMHB4IDEwcHg7XHJcbiAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgIC8vIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAvLyBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWRhdGEge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG5cclxuICAgICAgLnNjaG9vbC1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgIC5zY2hvb2wtbGlzdF9faWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogI0M4RTZDOTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWRhdGE6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0YU5vdEZvdW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbi5zY3JlZW5lZCB7XHJcbiAgY29sb3I6IHZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51blNjcmVlbmVkIHtcclxuICBjb2xvcjogdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVydGljYWwtbGluZS1oZWFkZXIge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXZlcnRpY2FsLWxpbmUtaGVhZGVyKTtcclxuICAvLyBoZWlnaHQ6IDE1cHg7XHJcbiAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtY2FyZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjM0U4RUVEO1xyXG4gIC8vIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG4udmVydGljYWwtbGluZSB7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNzA3MDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIC8vIGNvbG9yOiAjMzMzMzMzO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tdmVydGljYWwtbGluZS1oZWFkZXIpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5leWUtaWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgem9vbTogMS41ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1yb3ctbWFyZ2luLXRvcC1ib3R0b20ge1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXNTZWFyY2gge1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbUlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucm93cE1lZGl1bSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5yb3dDb2xyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjY3QjM7XHJcbiAgICBtYXJnaW46IDIwcHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jZW50ZXJSb3d7XHJcbiAgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 48665:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/ca-student-list/ca-student-list.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of Students</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalSch\">{{studentList.length + gridViewStudList.length}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Total Students</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Total_Students.svg\" /> \r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalStu\">{{totalScreenStds}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Evaluated</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Unscreened_Students.svg\" /> \r\n         </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalUnscreenStu\">{{totalParScreenStds}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Partially Evaluated</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Screened_Students.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel uneveStd\">{{totalUnScreenStds + gridViewStudList.length }}</ion-label>\r\n          <ion-label class=\"schoolnames\">Unevaluated</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/unEve.svg\" />\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n  </ion-card>\r\n\r\n   <ion-item class=\"customInput\" *ngIf=\"studentList.length > 0\">\r\n      <ion-input class=\"col-12\" placeholder=\"Search\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n      </ion-input>\r\n      <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n    </ion-item>\r\n\r\n  <ion-card class=\"ion-card-margin\" *ngIf=\"studentList.length > 0\">\r\n    <!-- <div class=\"search-result\"> -->\r\n    <!-- <ion-sear chbar [(ngModel)]=\"textData\" (ionChange)=\"getSchoolListInSearch($event)\" class=\"search-box\"></ion-sear> -->\r\n    <!-- <ion-card class=\"search-data ion-card-margin-top-bottom\" *ngFor=\"let item of schoolList\"> -->\r\n\r\n    <ion-grid class=\"heading\">\r\n      <ion-row>\r\n        <ion-col size=\"2\" class=\"vertical-line-header\">\r\n          <div>\r\n            Sno\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"vertical-line-header\">\r\n          <div>\r\n            Name\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"vertical-line-header\">\r\n          <div>\r\n            Status\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"heading\">\r\n          <div>\r\n            View\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <!-- {{studentList | json}} -->\r\n      <ion-row *ngFor=\"let item of studentList|searchall:searchText; let i = index\" (click)=\"gotoStudentDetails(item)\">\r\n        <ion-col size=\"2\" class=\"ion-text-center vertical-line\" text-center>\r\n          <div>\r\n            <ion-label>{{i + 1}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"5\" class=\"vertical-line\">\r\n          <div class=\"pl-1\"> \r\n           <div> <ion-label> {{item.Name}} </ion-label></div>\r\n           <div> <ion-label> {{item.EMIS_No}} </ion-label></div>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\" class=\"vertical-line\">\r\n          <div class=\"text-center\">\r\n            <ion-label *ngIf=\"!item.assStatus\" >-</ion-label>\r\n            <ion-label class=\"screened\" *ngIf=\"item.assStatus == 1\" >Evaluated</ion-label>\r\n            <ion-label class=\"unScreened\" *ngIf=\"item.assStatus == 2\" >Partially</ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" class=\"eye-icon\">\r\n          <div class=\"ion-text-center\">\r\n            <ion-label>\r\n              <ion-icon name=\"eye\"></ion-icon>\r\n            </ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n\r\n  <div *ngIf=\"gridViewStudList.length > 0\" class=\"rowpMedium rowColr\" >\r\n    <div class=\"font-14\"><ion-text style=\"color: white;\">Note: </ion-text>  \r\n      <p style=\"color: white; text-transform: uppercase; font-style: italic;\">\r\n        The following disability types do not have functional assessments\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <ion-card *ngIf=\"gridViewStudList.length > 0\" class=\"ion-card-margin\">\r\n    <ion-grid class=\"heading\">\r\n      <ion-row>\r\n        <ion-col size=\"2\" class=\"vertical-line-header\">\r\n          <div>\r\n            Sno\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"vertical-line-header\">\r\n          <div>\r\n            Name\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"vertical-line-header\">\r\n          <div>\r\n            Disability\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <!-- {{studentList | json}} -->\r\n      <ion-row *ngFor=\"let item of gridViewStudList; let i = index\" class=\"centerRow\">\r\n        <ion-col size=\"2\" class=\"ion-text-center vertical-line\" text-center>\r\n          <div>\r\n            <ion-label>{{i + 1}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"5\" class=\"vertical-line\">\r\n          <div class=\"pl-1\"> \r\n           <div> <ion-label> {{item.Name}} </ion-label></div>\r\n           <div> <ion-label> {{item.EMIS_No}} </ion-label></div>\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"5\" >\r\n          <div class=\"text-center\">\r\n              {{item.screen_name}}\r\n          </div>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-card>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn-phase2_ca-student-list_ca-student-list_module_ts-es2015.js.map