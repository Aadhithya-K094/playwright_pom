(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_ooscsurvey_ooscsurvey_module_ts"],{

/***/ 84968:
/*!************************************************************!*\
  !*** ./src/app/pages/oosc/ooscsurvey/ooscsurvey.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OoscsurveyPageModule": function() { return /* binding */ OoscsurveyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ooscsurvey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ooscsurvey.page */ 72131);







const routes = [
    {
        path: '',
        component: _ooscsurvey_page__WEBPACK_IMPORTED_MODULE_0__.OoscsurveyPage
    }
];
let OoscsurveyPageModule = class OoscsurveyPageModule {
};
OoscsurveyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_ooscsurvey_page__WEBPACK_IMPORTED_MODULE_0__.OoscsurveyPage]
    })
], OoscsurveyPageModule);



/***/ }),

/***/ 72131:
/*!**********************************************************!*\
  !*** ./src/app/pages/oosc/ooscsurvey/ooscsurvey.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OoscsurveyPage": function() { return /* binding */ OoscsurveyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ooscsurvey_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ooscsurvey.page.html */ 82783);
/* harmony import */ var _ooscsurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ooscsurvey.page.scss */ 69386);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/network-service */ 34442);














let OoscsurveyPage = class OoscsurveyPage {
    constructor(router, route, alertService, http, userService, loadingCtrl, emisService, alertCtrl, userSessionService, sqliteDB, networkService, alertController) {
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.http = http;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.emisService = emisService;
        this.alertCtrl = alertCtrl;
        this.userSessionService = userSessionService;
        this.sqliteDB = sqliteDB;
        this.networkService = networkService;
        this.alertController = alertController;
        this.schoolList = [];
        this.cenGovSchlList = [];
        this.govSchlList = [];
        this.fullAidSchoolList = [];
        this.unAidSchlList = [];
        this.parAidSchlList = [];
        this.schoolLength = 0;
        this.toBeAdmitted = [];
        this.toBeValidated = [];
        // toBeVerified: any = [];
        this.toBeSurvey = [];
        // nonTarget: any = [];
        this.noData = false;
        this.getOOSCSchlStuList = [];
        this.acYrList = [
            // { label: '2022-2023', value: '2022-2023' },
            // { label: '2023-2024', value: '2023-2024' },
            // { label: '2024-2025', value: '2024-2025' },
            { label: '2024-2025', value: '2024-25' },
            { label: '2025-2026', value: '2025-26' },
        ];
        this.currentYear = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.current_year = (new Date()).getFullYear() + 14;
        this.teacher_id = this.userSessionService.teacher_id();
        this.routeData = this.route.snapshot;
        this.paramsId = this.routeData.queryParams.Id;
        this.pageId = this.routeData.queryParams.page;
        this.active = this.routeData.queryParams.active;
        if (this.paramsId == 1 && this.pageId == 1) {
            this.ooscAlert();
        }
        else {
            this.onPageView();
        }
        this.currentYear = localStorage.getItem('acYear');
    }
    onPageView() {
        if (this.pageId == 1) {
            this.blocklistActive = true;
            this.studentlistActive = false;
            this.schoolActive = false;
            this.getUserDetails();
        }
        else {
            this.blocklistActive = false;
            this.studentlistActive = true;
            this.schoolActive = false;
            this.checkOoscStudLocal(this.routeData.queryParams.school, this.routeData.queryParams.schoolname, this.routeData.queryParams.year);
        }
    }
    getUserDetails() {
        this.userService.getOoscUserDetails(this.teacher_id).subscribe(res => {
            if (res.dataStatus == true) {
                var getOoscUserDetails = res.result;
                if (getOoscUserDetails.length > 0) {
                    this.distId = getOoscUserDetails[0].district_id;
                    this.checkOoscBlockLocal();
                }
            }
            else {
                this.alertService.error("Something went wrong");
            }
        });
    }
    checkOoscBlockLocal() {
        this.blocklist = [];
        let query = 'SELECT * FROM ooscBlocks';
        return this.sqliteDB.getDataLocalDB(query).then(oscblock => {
            if (oscblock.rows.length > 0) {
                let temp = [];
                for (var i = 0; i < oscblock.rows.length; i++) {
                    temp.push(oscblock.rows.item(i));
                }
                ;
                if (temp.length > 0) {
                    this.blockLength = temp.length;
                    this.blocklistActive = true;
                    this.blocklist = temp.map(l => { return { label: l.block_name, value: l.block_id }; });
                    this.blocklist.sort((a, b) => {
                        if (a.label < b.label)
                            return -1;
                        if (a.label > b.label)
                            return 1;
                        return 0;
                    });
                    this.blockListCopy = this.blocklist;
                }
                else {
                    this.blocklistActive = false;
                }
            }
            else {
                this.getBlockList();
            }
        });
    }
    getBlockList() {
        this.blockLength = 0;
        this.emisService.getOOSCBlockList(this.distId).subscribe(res => {
            if (res.dataStatus == true) {
                var block = res.result;
                if (block.length > 0) {
                    this.blockLength = block.length;
                    let distDeleteQuery = 'DELETE FROM ooscBlocks WHERE district_id = "' + this.distId + '"';
                    return this.sqliteDB.getDataLocalDB(distDeleteQuery).then(obdata => {
                        let sqlArray = [];
                        block.forEach(element => {
                            sqlArray.push(['INSERT INTO ooscBlocks VALUES (?,?,?,?)', [null, this.distId, element.block_id, element.block_name]]);
                        });
                        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                            this.checkOoscBlockLocal();
                        });
                    });
                }
                else {
                    this.alertService.error('No OOSC students Available');
                }
            }
        });
    }
    getFilterBlocklist(event) {
        this.searchTerm = event.detail.value.trim();
        this.searchTerm = this.searchTerm;
        if (this.blockListCopy.length > 0) {
            this.blocklist = this.blockListCopy.filter((item) => {
                return item.label.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            });
        }
    }
    checkOoscSchoolLocal(event) {
        this.blocklistActive = false;
        this.schoolActive = true;
        this.blockId = event;
        this.cenGovSchlList = [];
        this.govSchlList = [];
        this.fullAidSchoolList = [];
        this.unAidSchlList = [];
        this.parAidSchlList = [];
        this.schoolList = [];
        this.schoolLength = 0;
        let query = 'SELECT * FROM ooscSchools' +
            ' WHERE block_id = "' + event + '"';
        return this.sqliteDB.getDataLocalDB(query).then(oscSchl => {
            if (oscSchl.rows.length > 0) {
                let schlTemp = [];
                for (var i = 0; i < oscSchl.rows.length; i++) {
                    schlTemp.push(oscSchl.rows.item(i));
                }
                ;
                if (schlTemp.length > 0) {
                    this.filterSchoolList = schlTemp;
                    this.schoolLength = this.filterSchoolList.length;
                    if (this.filterSchoolList.length > 0) {
                        for (let i = 0; i < this.filterSchoolList.length; i++) {
                            this.filterSchoolList[i].filter = 1;
                            if (this.filterSchoolList[i].school_type_id == 5) { // central government
                                this.cenGovSchlList.push(this.filterSchoolList[i]);
                            }
                            if (this.filterSchoolList[i].school_type_id == 1) { // government
                                this.govSchlList.push(this.filterSchoolList[i]);
                            }
                            if (this.filterSchoolList[i].school_type_id == 2) { //fully-aided
                                this.fullAidSchoolList.push(this.filterSchoolList[i]);
                            }
                            if (this.filterSchoolList[i].school_type_id == 3) { // un-aided
                                this.unAidSchlList.push(this.filterSchoolList[i]);
                            }
                            if (this.filterSchoolList[i].school_type_id == 4) { // partially-aided
                                this.parAidSchlList.push(this.filterSchoolList[i]);
                            }
                        }
                        this.schoolList = this.filterSchoolList.map(l => { return { label: l.school_name, value: l.school_id }; });
                        this.schoolList.sort((a, b) => {
                            if (a.label < b.label)
                                return -1;
                            if (a.label > b.label)
                                return 1;
                            return 0;
                        });
                        this.schoolListCopy = this.schoolList;
                    }
                    else {
                        this.schoolList = [];
                        this.schoolLength = 0;
                        this.noDataAlert();
                    }
                }
            }
            else {
                this.getSchoolList(event);
            }
        });
    }
    getSchoolList(event) {
        this.emisService.getOoscSchoolList(event).subscribe(res => {
            if (res.dataStatus == true) {
                var SchoolList = res.result;
                if (SchoolList.length > 0) {
                    let schlDeleteQuery = 'DELETE FROM ooscSchools WHERE block_id = "' + event + '"';
                    return this.sqliteDB.getDataLocalDB(schlDeleteQuery).then(osdata => {
                        let sqlArray = [];
                        SchoolList.forEach(element => {
                            sqlArray.push(['INSERT INTO ooscSchools VALUES (?,?,?,?,?,?)', [null, event, element.school_id, element.school_name, element.school_type_id, element.school_type]]);
                        });
                        this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                            this.checkOoscSchoolLocal(event);
                        });
                    });
                }
            }
            else {
                this.alertService.error('No OOSC students available in this block');
            }
        });
    }
    getFilterSchoolist(event) {
        this.searchTerm = event.detail.value.trim();
        this.searchTerm = this.searchTerm;
        this.cenGovSchlList.forEach((item) => {
            if (item.school_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
            }
        });
        this.govSchlList.filter((item) => {
            if (item.school_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
            }
        });
        this.fullAidSchoolList.filter((item) => {
            if (item.school_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
            }
        });
        this.unAidSchlList.filter((item) => {
            if (item.school_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
            }
        });
        this.parAidSchlList.filter((item) => {
            if (item.school_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
            }
        });
    }
    ionViewWillLeave() {
        this.textData = "";
    }
    checkOoscStudLocal(school_id, school_name, ac_year) {
        this.blocklistActive = false;
        this.schoolActive = false;
        this.activeSchoolName = school_name;
        this.activeSchoolId = school_id;
        this.studentLength = 0;
        this.femaleStuLength = 0;
        this.maleStuLength = 0;
        this.toBeAdmitted = [];
        this.toBeValidated = [];
        // this.toBeVerified = [];
        this.toBeSurvey = [];
        // this.nonTarget = [];
        if (ac_year == '' || ac_year == null || ac_year == undefined) {
            // this.current_month = (new Date()).getMonth()+1;
            // // console.log(new Date(),'this.current_year',this.current_year,'month',this.current_month)
            // if (this.current_month >= 6 && this.current_month <= 12) {
            //   this.acyear = (this.current_year + '-' + (this.current_year + 1));
            // } else {
            //   this.acyear = ((this.current_year - 1) + '-' + (this.current_year))
            // }
            // console.log('get year this.acyear',this.acyear)
            // this.acyear = '2023-2024'; // cmd by Priya
            // this.acyear = '2024-2025';
            this.acyear = "2025-26";
            ac_year = this.acyear;
        }
        else {
            this.acyear = ac_year;
        }
        // let query = 'SELECT * FROM ooscStudentsDetail WHERE school_id = "' + this.activeSchoolId + '"';
        let query = 'SELECT * FROM ooscStudentsDetail WHERE school_id = "' + this.activeSchoolId + '" AND acad_yr = "' + ac_year + '"';
        return this.sqliteDB.getDataLocalDB(query).then(oscStud => {
            let studTemp = [];
            if (oscStud.rows.length > 0) {
                for (var i = 0; i < oscStud.rows.length; i++) {
                    studTemp.push(oscStud.rows.item(i));
                }
                ;
                this.studentlistActive = true;
                if (ac_year != '' && ac_year != null && ac_year != undefined) {
                    if (studTemp.length > 0) {
                        this.filterStudList = studTemp.filter(tt => tt.ac_year == ac_year);
                        this.filterStudList = studTemp;
                        if (this.filterStudList.length > 0) {
                            var student = this.filterStudList;
                            if (student.length > 0) {
                                this.studentLength = student.length;
                                for (let i = 0; i < student.length; i++) {
                                    if (student[i].reason_type == 'To be admitted') {
                                        this.toBeAdmitted.push(student[i]);
                                    }
                                    // if (student[i].reason_type == 'To be verified') {
                                    //   this.toBeVerified.push(student[i]);
                                    // }
                                    if (student[i].reason_type == 'To be surveyed') {
                                        this.toBeSurvey.push(student[i]);
                                    }
                                    if (student[i].reason_type == 'To be Validated') {
                                        this.toBeValidated.push(student[i]);
                                    }
                                    // if (student[i].reason_type == 'Non-Target') {
                                    //   this.nonTarget.push(student[i]);
                                    // }
                                }
                                this.maleStudentList = student.filter(tt => tt.gender == '1');
                                this.maleStudentList.sort((a, b) => {
                                    if (a.student_name < b.student_name)
                                        return -1;
                                    if (a.student_name > b.student_name)
                                        return 1;
                                    return 0;
                                });
                                this.maleStuLength = this.maleStudentList.length;
                                this.femaleStudentList = student.filter(tt => tt.gender == '2');
                                this.femaleStudentList.sort((a, b) => {
                                    if (a.student_name < b.student_name)
                                        return -1;
                                    if (a.student_name > b.student_name)
                                        return 1;
                                    return 0;
                                });
                                this.femaleStuLength = this.femaleStudentList.length;
                                this.studentList = [...this.maleStudentList, ...this.femaleStudentList];
                                this.studentListCopy = this.studentList;
                            }
                            else {
                                this.studentlistActive = false;
                            }
                        }
                        else {
                            this.studentlistActive = true;
                            this.schoolActive = false;
                            this.alertService.error('No OOSC students available');
                        }
                    }
                }
                else {
                    this.alertService.error('Please select academic Year');
                }
            }
            else {
                this.getDropOutList();
            }
        });
    }
    getDropOutList() {
        this.emisService.getOoscDropoutStudentList(this.activeSchoolId, this.acyear).subscribe(res => {
            this.masterstudentList = res.result;
            if (res.dataStatus == true) {
                this.getOOSCStuList();
            }
            else {
                this.masterstudentList = [];
                this.studentlistActive = true;
                this.alertService.error('No OOSC Students Available in this school');
            }
        });
    }
    getOOSCStuList() {
        this.emisService.OoscSurveyAdmStudGet(this.activeSchoolId).subscribe(res => {
            // this.emisService.getOOSCSchlStuList(this.activeSchoolId).subscribe(res => {
            if (res.dataStatus == true) {
                var uerDetails = res.result;
                if (uerDetails.length > 0) {
                    this.getOOSCSchlStuList = res.result;
                    this.getStudentDetails();
                }
                else {
                    this.getStudentDetails();
                }
            }
            else {
                this.getStudentDetails();
            }
        });
    }
    getStudentDetails() {
        var filterStudDetails;
        filterStudDetails = this.masterstudentList;
        if (this.masterstudentList.length > 0) {
            for (let i = 0; i < this.masterstudentList.length; i++) {
                let stuDetails;
                if (this.getOOSCSchlStuList.length > 0) {
                    stuDetails = this.getOOSCSchlStuList.find(tt => tt.StudentId == this.masterstudentList[i].stud_id);
                    if (stuDetails) {
                        Object.assign(this.masterstudentList[i], { Reason: stuDetails.ReasonId }, { subReason: stuDetails.SubReasonId }, { reason_type: 'To be surveyed' }, { Status: this.masterstudentList[i].Status });
                        // Object.assign(this.masterstudentList[i], { Reason: stuDetails.dropout_reason }, { reason_type: stuDetails.reason_type }, { Status: stuDetails.Status });
                    }
                    else {
                        Object.assign(this.masterstudentList[i], { Reason: '' }, { subReason: '' }, { reason_type: 'To be surveyed' }, { Status: '' });
                    }
                }
                else {
                    Object.assign(this.masterstudentList[i], { Reason: '' }, { subReason: '' }, { reason_type: 'To be surveyed' }, { Status: '' });
                }
            }
            if (this.masterstudentList[0].reason_type) {
                this.insertStudLocalDB();
            }
        }
    }
    insertStudLocalDB() {
        // Insert
        if (this.masterstudentList.length > 0) {
            let schlDeleteQuery = 'DELETE FROM ooscStudentsDetail WHERE school_id = "' + this.activeSchoolId + '" AND acad_yr = "' + this.acyear + '"';
            return this.sqliteDB.getDataLocalDB(schlDeleteQuery).then(oscStuddata => {
                let sqlArray = [];
                this.masterstudentList.forEach(element => {
                    sqlArray.push(['INSERT INTO ooscStudentsDetail VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.district_id, element.district_name, element.block_id, element.block_name, element.school_id, element.school_name, element.udise_code, element.school_type_id, element.school_type, element.stud_id, element.student_name, element.father_name, element.mother_name, element.new_emis_id, element.old_emis_no, element.phone_number, element.class_studying_id, element.gender, element.Address, element.cwsn_student, element.differently_abled, element.diff_abled_reason, element.lastUpdate, element.ac_year, element.Reason, element.reason_type, element.Status, element.acad_yr, element.subReason]]);
                });
                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                    this.checkOoscStudLocal(this.activeSchoolId, this.activeSchoolName, this.acyear);
                });
            });
        }
    }
    getFilterStudentlist(event) {
        this.searchTerm = event.detail.value.trim();
        this.searchTerm = this.searchTerm;
        this.toBeAdmitted.forEach((item) => {
            if (item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
                this.noData = true;
            }
            if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            }
            else {
                return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            }
        });
        // this.toBeVerified.filter((item) => {
        this.toBeValidated.filter((item) => {
            if (item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
                this.noData = true;
            }
            if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            }
            else {
                return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            }
        });
        // this.nonTarget.filter((item) => {
        //   if (item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
        //     item.filter = 1;
        //   } else {
        //     item.filter = 2;
        //     this.noData = true;
        //   }
        //   if (item.Address != null) {
        //     return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1;
        //   } else {
        //     return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1;
        //   }
        // });
        this.toBeSurvey.filter((item) => {
            if (item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
            }
            else {
                item.filter = 2;
                this.noData = true;
            }
            if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            }
            else {
                return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
            }
        });
    }
    goToHome() {
        this.router.navigate(['/tabs/oosctype']);
    }
    backToBlock() {
        console.log('backToBlock', this.blocklistActive);
        this.blocklistActive = true;
        this.schoolActive = false;
        this.studentlistActive = false;
    }
    backToSchool() {
        this.blocklistActive = false;
        this.schoolActive = true;
        this.studentlistActive = false;
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    goToOoscSurvey(studentData) {
        if (this.paramsId == 1) {
            this.router.navigate(['/tabs/ooscnewsurvey'], { queryParams: { 'studentDetails': JSON.stringify(studentData), 'teacher': this.teacher_id, 'school': this.activeSchoolId, 'block': this.blockId, 'Id': this.paramsId, 'schoolname': this.activeSchoolName, 'active': this.active, 'page': this.pageId, 'distId': this.distId }, skipLocationChange: false });
        }
        else {
            this.router.navigate(['/tabs/ooscquestions'], { queryParams: { 'studentDetails': JSON.stringify(studentData), 'teacher': this.teacher_id, 'school': this.activeSchoolId, 'block': this.blockId, 'Id': this.paramsId, 'schoolname': this.activeSchoolName, 'active': this.active, 'page': this.pageId, 'distId': this.distId }, skipLocationChange: false });
        }
    }
    noDataAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Alert',
                subHeader: '',
                message: 'No OOSC Students Available in this Block.',
                cssClass: 'my-custom-class',
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
        });
    }
    getAcYr() {
        this.current_month = (new Date()).getMonth() + 1;
        // console.log(new Date(),'this.current_year',this.current_year,'month',this.current_month)
        if (this.current_month >= 6 && this.current_month <= 12) {
            this.acyear = (this.current_year + '-' + (this.current_year + 1));
        }
        else {
            this.acyear = ((this.current_year - 1) + '-' + (this.current_year));
        }
    }
    ooscAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '***முக்கிய குறிப்பு***',
                message: `பள்ளி செல்லா/இடைநின்றக் குழந்தைகள் கணக்கெடுப்பில், முதலில்  உங்கள் பள்ளியில்/ வகுப்பில் பள்ளி செல்லாக் குழந்தைகளின் விவரங்களை சரிபார்த்து கணக்கெடுப்பு முடிப்பதை உறுதி செய்ய வேண்டும்.`,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            this.onPageView();
                        }
                    },
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
};
OoscsurveyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController }
];
OoscsurveyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-ooscsurvey',
        template: _raw_loader_ooscsurvey_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ooscsurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OoscsurveyPage);



/***/ }),

/***/ 69386:
/*!************************************************************!*\
  !*** ./src/app/pages/oosc/ooscsurvey/ooscsurvey.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --ion-background-color: transparent;\n  --padding-start: 5px !important;\n  --padding-end: 5px !important;\n  --inner-padding-end: 5px;\n  --inner-padding-start: 5px;\n}\n\nion-searchbar {\n  background: #e4d1eb;\n}\n\n.color1 {\n  background-color: #f8f2fa;\n  --background: #f8f2fa;\n  padding: 0px;\n}\n\n.color2 {\n  background-color: #e4d1eb;\n  --background: #e4d1eb;\n  padding: 0px;\n}\n\n.searchbar {\n  display: contents;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-inline-end: 10px;\n  white-space: pre-line;\n}\n\n.name {\n  color: darkslategray !important;\n}\n\n.label {\n  padding-left: 15px;\n}\n\n.avatar {\n  width: auto;\n  padding-right: 10px;\n}\n\n.name {\n  font-size: 16px;\n}\n\n.designation {\n  font-size: 14px !important;\n  color: darkslategray;\n  white-space: pre-line;\n}\n\n.call {\n  margin: auto;\n  zoom: 1.3;\n  color: midnightblue;\n}\n\n.button {\n  margin-left: 10px;\n}\n\n.card-class {\n  text-align: center;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\n.head {\n  padding-left: 15px;\n  padding-top: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sub-head {\n  padding-left: 15px;\n  color: #2176b9;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.line {\n  border-bottom: 2px solid #aaaabb;\n  margin-left: 9px;\n  margin-right: 9px;\n  border-radius: 5px;\n}\n\nion-card {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.total {\n  background: white;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.total-txt {\n  color: darkslategray;\n  font-weight: 600;\n}\n\n.total-subtxt {\n  color: darkslategray;\n  font-weight: 600;\n  text-align: end;\n}\n\nion-avatar {\n  width: 36px;\n  height: 26px;\n}\n\nimg {\n  border-radius: 0px;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.user-icon {\n  padding-top: 1px;\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9vc2NzdXJ2ZXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsd0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6Im9vc2NzdXJ2ZXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogNXB4O1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTRkMWViO1xyXG59XHJcblxyXG4uY29sb3IxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMmZhO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y4ZjJmYTtcclxuICBwYWRkaW5nOiAwcHhcclxufVxyXG5cclxuLmNvbG9yMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZDFlYjtcclxuICAtLWJhY2tncm91bmQ6ICNlNGQxZWI7XHJcbiAgcGFkZGluZzogMHB4XHJcbn1cclxuXHJcbi5zZWFyY2hiYXIge1xyXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDBweDtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmRlc2lnbmF0aW9uIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi5jYWxsIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgem9vbTogMS4zO1xyXG4gIGNvbG9yOiBtaWRuaWdodGJsdWU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jbGFzcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZVxyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3ViLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjb2xvcjogIzIxNzZiOTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhYWJiO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4XHJcbn1cclxuXHJcbi50b3RhbC10eHQge1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50b3RhbC1zdWJ0eHQge1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uZC1ub25lIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udXNlci1pY29uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");

/***/ }),

/***/ 82783:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/ooscsurvey/ooscsurvey.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"blocklistActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goToHome()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Block List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"back-iconNew\" (click)=\"getBlockList()\">\r\n      <ion-icon name=\"sync\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"schoolActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"backToBlock()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">School List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"back-iconNew\" (click)=\"getSchoolList(blockId)\">\r\n      <ion-icon name=\"sync\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-header *ngIf=\"studentlistActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"backToSchool()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Student List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"back-iconNew\" (click)=\"getDropOutList()\">\r\n      <ion-icon name=\"sync\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"blocklistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Blocks</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{blockLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-searchbar style=\"padding-left : 0px; padding-right: 0px; background: none;\"\r\n      (ionChange)=\"getFilterBlocklist($event)\" placeholder=\"Search\" class=\"search\" *ngIf=\"blocklistActive\">\r\n    </ion-searchbar>\r\n\r\n    <div *ngIf=\"blocklistActive\">\r\n      <ion-card *ngFor=\"let item of blocklist; let i = index;\" (click)=\"checkOoscSchoolLocal(item.value)\">\r\n        <ion-row style=\"width:100%\">\r\n          <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n            <img src=\"./../../../../../../assets/icons/Block.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n            <ion-label class=\"ion-text-wrap\">{{item.label}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <ion-row *ngIf=\"schoolActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Schools</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{schoolLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-searchbar style=\"padding-left : 0px; padding-right: 0px; background: none;\" [(ngModel)]=\"textData\"\r\n      (ionChange)=\"getFilterSchoolist($event)\" placeholder=\"Search\" class=\"search\"\r\n      *ngIf=\"schoolActive && schoolListCopy?.length != 0\"></ion-searchbar>\r\n\r\n    <div *ngIf=\"schoolActive\">\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.govSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Government Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of govSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.fullAidSchoolList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Fully Aided Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of fullAidSchoolList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.unAidSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Un-aided Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of unAidSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.parAidSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Partially Aided Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of parAidSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.cenGovSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Central Govt Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of cenGovSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\" style=\"margin-bottom:5px\">\r\n      <ion-col size=\"12\" class=\"total-txt\" style=\"text-align: left;\">\r\n        <ion-label>{{activeSchoolName}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Academic Year</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <!-- <ion-label>{{currentYear}}</ion-label> -->\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            style=\"max-width: 100% !important;padding-left:0px\" [(ngModel)]=\"acyear\"\r\n            (ionChange)=\"checkOoscStudLocal(activeSchoolId,activeSchoolName,$event.detail.value)\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of acYrList\"> {{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-card *ngIf=\"studentlistActive\" style=\"margin:5px 0px;\">\r\n      <ion-item>\r\n        <ion-row style=\"width:100%\">\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\"></span>Academic\r\n              Year</ion-label>\r\n          </ion-col>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            style=\"max-width: 100% !important;padding-left:0px\" [(ngModel)]=\"acyear\"\r\n            (ionChange)=\"checkOoscStudLocal(activeSchoolId,activeSchoolName,$event.detail.value)\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of acYrList\"> {{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-card> -->\r\n\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Students</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{studentLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Boys</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{maleStuLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Girls</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{femaleStuLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-searchbar style=\"padding-left : 0px; padding-right: 0px; background: none;\"\r\n      (ionChange)=\"getFilterStudentlist($event)\" placeholder=\"Search\" class=\"search\" *ngIf=\"studentlistActive\">\r\n    </ion-searchbar>\r\n\r\n    <ion-row *ngIf=\"studentlistActive\">\r\n      <ion-col size=\"12\" style=\"padding:0px\">\r\n\r\n        <div style=\"margin-top:15px;\" *ngIf=\"this.toBeSurvey != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be surveyed</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of toBeSurvey\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <!-- <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p> -->\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{ (item.Status == 1 && (item.Reason == 10 || item.subReason == 90 || item.subReason == 91)) ? 'To be validated': (item.Status == 1 && item.Reason != 10) ? 'To be admitted' : 'To be surveyed'}}</p>\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{ (item.Status == 1 && (item.Reason == 10 || item.subReason == 90 || item.subReason == 91)) ? 'To be validated': (item.Status == 1 && item.Reason != 10) ? 'To be admitted' : 'To be surveyed'}}</p>\r\n\r\n                <!-- <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p> -->\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{ (item.Status == 1 && (item.Reason == 10 || item.subReason == 90 || item.subReason == 91)) ? 'To be validated': (item.Status == 1 && item.Reason != 10) ? 'To be admitted' : 'To be surveyed'}}</p>\r\n\r\n                <!-- <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p> -->\r\n              </ion-label>\r\n\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status != 1\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div>\r\n\r\n        <div style=\"margin-top:15px;\" *ngIf=\"this.toBeAdmitted != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be admitted</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of toBeAdmitted\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy' }}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == null || item.Status == ''\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 2 || item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div>\r\n\r\n\r\n        <div style=\"margin-top:15px;\" *ngIf=\"this.toBeValidated != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be Validated</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of toBeValidated\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n                <p style=\"color: green\">Status : Closed</p>\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n                <p style=\"color: green\">Status : Closed</p>\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n                <p style=\"color: green\">Status : Closed</p>\r\n              </ion-label>\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == null || item.Status == ''\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 2 || item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div>\r\n\r\n        <!-- <div style=\"margin-top:15px;\" *ngIf=\"this.nonTarget != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be Validated</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of nonTarget\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == null || item.Status == ''\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 2 || item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_oosc_ooscsurvey_ooscsurvey_module_ts-es2015.js.map