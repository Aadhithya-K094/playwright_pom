(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_student-from_student-from_module_ts"],{

/***/ 89359:
/*!***********************************************************************!*\
  !*** ./src/app/pages/mht/student-from/student-from-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFromPageRoutingModule": function() { return /* binding */ StudentFromPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _student_from_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-from.page */ 58008);




const routes = [
    {
        path: '',
        component: _student_from_page__WEBPACK_IMPORTED_MODULE_0__.StudentFromPage
    }
];
let StudentFromPageRoutingModule = class StudentFromPageRoutingModule {
};
StudentFromPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentFromPageRoutingModule);



/***/ }),

/***/ 56418:
/*!***************************************************************!*\
  !*** ./src/app/pages/mht/student-from/student-from.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFromPageModule": function() { return /* binding */ StudentFromPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _student_from_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-from-routing.module */ 89359);
/* harmony import */ var _student_from_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-from.page */ 58008);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








let StudentFromPageModule = class StudentFromPageModule {
};
StudentFromPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_from_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentFromPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
        ],
        declarations: [_student_from_page__WEBPACK_IMPORTED_MODULE_1__.StudentFromPage]
    })
], StudentFromPageModule);



/***/ }),

/***/ 58008:
/*!*************************************************************!*\
  !*** ./src/app/pages/mht/student-from/student-from.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentFromPage": function() { return /* binding */ StudentFromPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_from_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-from.page.html */ 21444);
/* harmony import */ var _student_from_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-from.page.scss */ 35405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/diagnosis.service */ 10293);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/network.service */ 81508);














class Port {
}
let StudentFromPage = class StudentFromPage {
    constructor(sqliteDB, formBuilder, route, alert, router, usersessionService, networkService, userService, alertController, diagnosisService) {
        this.sqliteDB = sqliteDB;
        this.formBuilder = formBuilder;
        this.route = route;
        this.alert = alert;
        this.router = router;
        this.usersessionService = usersessionService;
        this.networkService = networkService;
        this.userService = userService;
        this.alertController = alertController;
        this.diagnosisService = diagnosisService;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe("en-US");
        this.buttonlocal = true;
        this.stdName = '';
        this.stdUniId = 0;
        this.submitted = false;
        this.StudentForm = [];
        this.MultiDrop = true;
        this.MultiDropTab = true;
        this.labelList = [];
        this.TabletList = [];
        this.label = [];
        this.noSpecial = "^[a-zA-Z \b]+$";
        this.Action_taken = [
            { value: "1", label: "Treatment given during camp" },
            { value: "2", label: "Referred to PHC / CHC / Sub-district hospital" },
            { value: "3", label: "Referred to DEIC" },
            { value: "4", label: "No action required" },
            { value: "5", label: "Child already under treatment" },
        ];
        this.Tablets_Pres = [
            { value: "1", label: "Yes" },
            { value: "2", label: "No" },
        ];
        this.Follow_req = [
            { value: "1", label: "Yes" },
            { value: "2", label: "No" },
        ];
        this.Status_req = [
            { value: "1", label: "Normal" },
            { value: "2", label: "To be Diagnosed" },
            { value: "3", label: "Absent" },
            { value: "4", label: "Long Absent" },
        ];
        this.outcome_status = [
            { value: "1", label: "Treatment completed" },
            { value: "2", label: "On Medical Management" },
            { value: "3", label: "On Surgical Management" },
            { value: "4", label: "Surgery planned on" },
            { value: "5", label: "Not willing for Surgery" },
            { value: "6", label: "Surgery Follow up at Private" },
            { value: "8", label: "Death" },
            { value: "9", label: "Migration" },
            { value: "10", label: "Under observation & follow up" },
            { value: "7", label: "Others" },
        ];
        this.date = new Date().toISOString();
        this.getArrayData = [];
        this.getTabletArray = [];
        this.serverData = [];
        this.StudentGet = {};
        this.diagnoses = this.diagnosisService.getDiagnoses();
        this.tabletsPrescribed = this.diagnosisService.getTabletsPrescribed();
    }
    portChange(event) {
    }
    ngOnInit() {
        this.initialValidators();
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.paramsId = this.routeData.queryParams.Id;
        this.SchlId = this.routeData.queryParams.SchlId;
        this.Doct_name = this.routeData.queryParams.Doct_name;
        this.Doct_No = this.routeData.queryParams.Doct_No;
        this.student_ID = this.routeData.queryParams.student_ID;
        this.Sectn = this.routeData.queryParams.Sectn;
        this.ClsID = this.routeData.queryParams.ClsID;
        this.SchName = this.routeData.queryParams.SchName;
        this.ComptStatus = this.routeData.queryParams.ComptStatus;
        this.stdUniId = this.routeData.queryParams.emisId ? Number(this.routeData.queryParams.emisId) : 0;
        this.stdName = this.routeData.queryParams.stdName;
        this.acYear = this.routeData.queryParams.acYear;
        this.userLatt = this.routeData.queryParams.userLatt;
        this.userLongg = this.routeData.queryParams.userLongg;
        this.schoolLatt = this.routeData.queryParams.schoolLatt;
        this.schoolLongg = this.routeData.queryParams.schoolLongg;
        this.LoginUserName = this.usersessionService.emis_username();
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let yes = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0);
        this.yesterdayDate = this.pipe.transform(yes, "yyyy-MM-dd");
        if (this.acYear == '2023-24') {
            this.Action_taken = [
                { value: "1", label: "Treatment given during camp" },
                { value: "2", label: "Referred to PHC / CHC / Sub-district hospital" },
                { value: "3", label: "Referred to DEIC" },
                { value: "4", label: "No action required" },
                { value: "5", label: "Child already under treatment" },
            ];
        }
        else {
            this.Action_taken = [
                { value: "1", label: "Treatment given during camp" },
                { value: "2", label: "Referred to PHC / CHC / Sub-district hospital" },
                { value: "3", label: "Referred to DEIC" },
                { value: "5", label: "Child already under treatment" },
            ];
        }
        this.MultiDropTab = false;
        this.checkLocalDb();
    }
    initialValidators() {
        this.form = this.formBuilder.group({
            Condition_Diagn: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
            Diadnosed_TextField: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
            Prescribtion_TextField: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
            Action_taken: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(""),
            outcome_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(""),
            Follow_Up_Req: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
            date_Req: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
            Tabets_prescribed_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
            Tabets_prescribed: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
            surgery_plannedon: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
            other_outcome_sts: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null)
        });
    }
    checkLocalDb() {
        this.isDisable = false;
        this.MultiDrop = true;
        this.MultiDropTab = true;
        this.localstatus = "0";
        this.StudentGet = {};
        this.getStndFormDeatails();
        // const query = "SELECT * FROM mhtStudentFormDetailsDB WHERE StudentId=" + this.student_ID;
        // return this.sqliteDB.getDataLocalDB(query).then(data => {
        //   if (data.rows.length > 0) {
        //     this.localstatus = "2";
        //     let temp = [];
        //     for (var i = 0; i < data.rows.length; i++) {
        //       temp.push(data.rows.item(i));
        //     }
        //     this.StudentGet= temp[0];
        //     this.onCheck(this.StudentGet);
        //   } else {
        //     this.isDisable = false;
        //     this.MultiDrop = true;
        //     this.MultiDropTab = true;
        //     this.localstatus = "0";
        //     this.StudentGet = {};
        //     this.getStndFormDeatails();
        //   }
        // });
    }
    onCheck(StudentGet) {
        this.isDisable = true;
        this.loadQuestion(StudentGet);
        if (StudentGet.DgnsdCndn == 1) {
            this.form.controls["status"].setValue('1');
        }
        else {
            let diagVal = [];
            let conDiag = [];
            let tabletsPrescribed = [];
            var str = StudentGet.DgnsdCndn;
            var temp = new Array();
            temp = str.split(",");
            this.getArrayData = [];
            this.diagnoses.forEach(element => {
                for (let i = 0; i < temp.length; i++) {
                    if (element['value'] == temp[i]) {
                        this.getArrayData.push(element['label']);
                        conDiag.push(element);
                    }
                }
            });
            var str = StudentGet.TabPresc;
            var tempVal = new Array();
            tempVal = str.split(",");
            this.getTabletArray = [];
            this.tabletsPrescribed.forEach(element => {
                for (let i = 0; i < tempVal.length; i++) {
                    if (element['value'] == tempVal[i]) {
                        this.getTabletArray.push(element['label']);
                        tabletsPrescribed.push(element);
                    }
                }
            });
            for (let i = 0; i < temp.length; i++) {
                diagVal.push({ value: temp[i], label: temp[i] });
            }
            this.form.controls["status"].setValue('2');
            this.form.controls["Condition_Diagn"].setValue(conDiag);
            this.form.controls["Tabets_prescribed"].setValue(tabletsPrescribed);
            this.form.controls["Action_taken"].setValue(StudentGet.ActTkn);
            this.form.controls["Follow_Up_Req"].setValue(StudentGet.FlwReqd);
            this.form.controls["date_Req"].setValue(StudentGet.FlwReqDate);
            this.form.controls["Tabets_prescribed_status"].setValue(StudentGet.TabYn);
            // this.form.controls["Tabets_prescribed"].setValue(StudentGet.TabPresc);
            this.form.controls.Diadnosed_TextField.setValue(StudentGet.DgnsdCndnOth);
            this.form.controls.Prescribtion_TextField.setValue(StudentGet.TabPrescOth);
            this.form.controls["outcome_status"].setValue(StudentGet.outcome_status);
            this.form.controls["surgery_plannedon"].setValue(StudentGet.surgery_plannedon);
            this.form.controls["other_outcome_sts"].setValue(StudentGet.other_outcome_sts);
            if (this.isDisable == true) {
                if ((temp.includes("Others") == true) || (this.getArrayData.includes('Others') == true)) {
                    // if (temp.includes("Others") == true) {
                    this.MultiDrop = true;
                }
                else {
                    this.MultiDrop = false;
                }
            }
            else {
                this.MultiDrop = false;
            }
            if (this.isDisable == true) {
                if ((tempVal.includes("Others") == true) || (this.getTabletArray.includes("Others") == true)) {
                    this.MultiDropTab = true;
                }
                else {
                    this.MultiDropTab = false;
                }
            }
            else {
                this.MultiDropTab = false;
            }
            if (StudentGet.LocalStatus == 0) {
                this.buttonlocal = true;
            }
            else if (StudentGet.LocalStatus == null) {
                this.buttonlocal = false;
            }
        }
        this.getStatus();
    }
    outComeStatus() {
        this.form.controls["surgery_plannedon"].setValue('');
        this.form.controls["other_outcome_sts"].setValue('');
        if (this.form.value.outcome_status == '4') {
            this.form.controls["surgery_plannedon"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
        }
        else {
            this.form.controls["surgery_plannedon"].setValidators(null);
        }
        if (this.form.value.outcome_status == '7') {
            this.form.controls["other_outcome_sts"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
        }
        else {
            this.form.controls["other_outcome_sts"].setValidators(null);
        }
        this.form.controls["surgery_plannedon"].updateValueAndValidity();
        this.form.controls["other_outcome_sts"].updateValueAndValidity();
    }
    getStatus() {
        let id = this.form.value.status;
        if (id == 2) {
            this.submitted = false;
            this.form.controls["Action_taken"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
            this.form.controls["Condition_Diagn"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
            this.form.controls["outcome_status"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
        }
        else {
            this.form.controls["Condition_Diagn"].setValue('');
            this.form.controls["Action_taken"].setValue('');
            this.form.controls["Tabets_prescribed"].setValue('');
            this.form.controls["Tabets_prescribed_status"].setValue('');
            this.form.controls["Follow_Up_Req"].setValue('');
            this.form.controls["date_Req"].setValue('');
            this.form.controls["Diadnosed_TextField"].setValue('');
            this.form.controls["Prescribtion_TextField"].setValue('');
            this.form.controls["outcome_status"].setValue('');
            this.form.controls["Condition_Diagn"].setValidators(null);
            this.form.controls["Action_taken"].setValidators(null);
            this.form.controls["Diadnosed_TextField"].setValidators(null);
            this.form.controls["Prescribtion_TextField"].setValidators(null);
            this.form.controls["outcome_status"].setValidators(null);
            this.form.controls["surgery_plannedon"].setValidators(null);
            this.form.controls["other_outcome_sts"].setValidators(null);
            this.MultiDrop = false;
            this.MultiDropTab = false;
        }
        this.form.controls["Diadnosed_TextField"].updateValueAndValidity();
        this.form.controls["Prescribtion_TextField"].updateValueAndValidity();
        this.form.controls["Condition_Diagn"].updateValueAndValidity();
        this.form.controls["Action_taken"].updateValueAndValidity();
        this.form.controls["outcome_status"].updateValueAndValidity();
        this.form.controls["surgery_plannedon"].updateValueAndValidity();
        this.form.controls["other_outcome_sts"].updateValueAndValidity();
    }
    loadQuestion(data) {
        let diagVal = [];
        let conDiag = [];
        let tabletsPrescribed = [];
        var str = data.DgnsdCndn;
        var temp = new Array();
        temp = str.split(",");
        this.getArrayData = [];
        this.diagnoses.forEach(element => {
            for (let i = 0; i < temp.length; i++) {
                if (element['value'] == temp[i]) {
                    this.getArrayData.push(element['label']);
                    conDiag.push(element);
                }
            }
        });
        var str = data.TabPresc;
        var tempVal = new Array();
        tempVal = str.split(",");
        this.getTabletArray = [];
        this.tabletsPrescribed.forEach(element => {
            for (let i = 0; i < tempVal.length; i++) {
                if (element['value'] == tempVal[i]) {
                    this.getTabletArray.push(element['label']);
                    tabletsPrescribed.push(element);
                }
            }
        });
        console.log(data.Status, "ststus");
        let sts = data.Status;
        this.form.controls.status.setValue(sts);
        this.form.controls.Tabets_prescribed_status.setValue(data.TabYn);
        this.form.controls.Diadnosed_TextField.setValue(data.DgnsdCndnOth);
        this.form.controls.Prescribtion_TextField.setValue(data.TabPrescOth);
        this.form.controls.Action_taken.setValue(data.ActTkn);
        this.form.controls["Condition_Diagn"].setValue(conDiag);
        this.form.controls["Tabets_prescribed"].setValue(tabletsPrescribed);
        this.form.controls.Follow_Up_Req.setValue(data.FlwReqd);
        this.form.controls.date_Req.setValue(data.FlwReqDate);
        this.form.controls["outcome_status"].setValue(data.outcome_status);
        this.form.controls["surgery_plannedon"].setValue(data.surgery_plannedon);
        this.form.controls["other_outcome_sts"].setValue(data.other_outcome_sts);
        this.getStatus();
    }
    getStndFormDeatails() {
        this.userService.getMHTStudentFormDeatails(this.student_ID, this.acYear).subscribe((res) => {
            if (res.dataStatus) {
                this.StudentGet = res.result[0];
                this.isDisable = true;
                this.form.controls["status"].setValue(this.StudentGet.Status);
                if (this.StudentGet.Status == 2) {
                    let diagVal = [];
                    var str = this.StudentGet.DgnsdCndn;
                    var temp = new Array();
                    temp = str.split(",");
                    this.getArrayData = [];
                    this.diagnoses.forEach(element => {
                        for (let i = 0; i < temp.length; i++) {
                            if (element['value'] == temp[i]) {
                                this.getArrayData.push(element['label']);
                            }
                        }
                    });
                    var str = this.StudentGet.TabPresc;
                    var tempVal = new Array();
                    tempVal = str.split(",");
                    this.getTabletArray = [];
                    this.tabletsPrescribed.forEach(element => {
                        for (let i = 0; i < tempVal.length; i++) {
                            if (element['value'] == tempVal[i]) {
                                this.getTabletArray.push(element['label']);
                            }
                        }
                    });
                    for (let i = 0; i < temp.length; i++) {
                        diagVal.push({ value: temp[i], label: temp[i] });
                    }
                    if (this.isDisable == true) {
                        if ((temp.includes("Others") == true) || (this.getArrayData.includes("Others") == true)) {
                            this.MultiDrop = true;
                        }
                        else {
                            this.MultiDrop = false;
                        }
                    }
                    else {
                        this.MultiDrop = false;
                    }
                    if (this.isDisable == true) {
                        if ((tempVal.includes("Others") == true) || (this.getTabletArray.includes("Others") == true)) {
                            this.MultiDropTab = true;
                        }
                        else {
                            this.MultiDropTab = false;
                        }
                    }
                    else {
                        this.MultiDropTab = false;
                    }
                    this.loadQuestion(this.StudentGet);
                    // this.insertLocalDB([this.StudentGet]);
                }
            }
        });
    }
    insertLocalDB(key) {
        key.forEach((element, data) => {
            const datainsert = 'INSERT INTO mhtStudentFormDetailsDB VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, element.ActTkn, element.DgnsdCndn, element.DgnsdCndnOth, element.DrMobile, element.DrName, element.FlwReqDate, element.FlwReqd, element.IndexId, element.LocalStatus, element.SchoolId, element.StudentId, element.TabPresc, element.TabPrescOth, element.TabValue, element.TabYn, element.Username, element.Status]).then(insertres => {
                if (insertres.insertId) {
                }
            });
        });
    }
    insertLocalDB2(element) {
        const datainsert = 'INSERT INTO mhtStudentFormDetailsDB VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        this.sqliteDB.insert(datainsert, [null, element.ActTkn, element.DgnsdCndn, element.DgnsdCndnOth, element.DrMobile, element.DrName, element.FlwReqDate, element.FlwReqd, element.IndexId, element.LocalStatus, element.SchoolId, element.StudentId, element.TabPresc, element.TabPrescOth, element.TabValue, element.TabYn, element.Username, element.Status]).then(insertres => {
            if (insertres.insertId) {
            }
        });
    }
    getothers(id) {
        if (id.length > 0) {
            this.MultiDrop = id.some(function (el) { return el.value == '52'; });
            if (this.MultiDrop == true) {
                this.form.controls["Diadnosed_TextField"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.noSpecial)]);
            }
            else {
                this.form.controls["Diadnosed_TextField"].setValue('');
                this.form.controls["Diadnosed_TextField"].setValidators(null);
            }
            this.form.controls["Diadnosed_TextField"].updateValueAndValidity();
        }
    }
    getTabothers(id) {
        this.MultiDropTab == false;
        if (id.length > 0) {
            this.MultiDropTab = id.some(function (el) { return el.value == '45'; });
            if (this.MultiDropTab == true) {
                this.form.controls["Prescribtion_TextField"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.noSpecial)]);
            }
            else {
                this.form.controls["Prescribtion_TextField"].setValue('');
                this.form.controls["Prescribtion_TextField"].setValidators(null);
            }
            this.form.controls["Prescribtion_TextField"].updateValueAndValidity();
        }
    }
    diagnosisChange(event) {
        this.getothers(event.value);
    }
    tabletsPrescribedChange(event) {
        this.getTabothers(event.value);
    }
    getTabStatus(tabid) {
        if (tabid == 1) {
            this.form.controls["Tabets_prescribed"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
        }
        else {
            this.form.controls["Tabets_prescribed"].setValue('');
            this.form.controls["Tabets_prescribed"].setValidators(null);
            this.form.controls["Prescribtion_TextField"].setValue('');
            this.form.controls["Prescribtion_TextField"].setValidators(null);
            this.form.controls["Prescribtion_TextField"].updateValueAndValidity();
        }
        this.form.controls["Tabets_prescribed"].updateValueAndValidity();
    }
    onGoButton() {
        this.router.navigate(['/tabs/class-student-list'], { queryParams: { 'SchlId': this.SchlId, 'ClsID': this.ClsID, 'Sectn': this.Sectn, 'SchName': this.SchName, acYear: this.acYear }, skipLocationChange: false });
        this.form.reset();
    }
    submitButton() {
        this.labelList = [];
        this.TabletList = [];
        if (this.form.valid) {
            let diagparamval;
            if (this.form.value.status == 2) {
                var data = this.form.value.Condition_Diagn;
                for (let i = 0; i < data.length; i++) {
                    this.labelList.push(data[i]);
                }
                diagparamval = Array.prototype.map.call(this.form.value.Condition_Diagn, function (item) { return item.value; }).join(",");
            }
            else {
                diagparamval = 0;
            }
            let tabletPres;
            if (this.form.value.Tabets_prescribed_status == 1) {
                var data = this.form.value.Tabets_prescribed;
                for (let i = 0; i < data.length; i++) {
                    this.TabletList.push(data[i]);
                }
                tabletPres = Array.prototype.map.call(this.form.value.Tabets_prescribed, function (item) { return item.value; }).join(",");
            }
            let secondParam;
            secondParam = {
                records: {
                    SchoolId: this.SchlId,
                    Username: this.LoginUserName,
                    UserLatt: this.userLatt,
                    UserLongg: this.userLongg,
                    VisitPhoto: localStorage.getItem('VisitPhoto')
                }
            };
            let params;
            if (Object.keys(this.StudentGet).length > 0) {
                params = {
                    records: {
                        IndexId: this.StudentGet.IndexId,
                        SchoolId: this.SchlId,
                        StudentId: this.student_ID,
                        Username: this.LoginUserName,
                        DrName: this.Doct_name,
                        DrMobile: this.Doct_No,
                        DgnsdCndn: diagparamval,
                        DgnsdCndnOth: this.form.value.Diadnosed_TextField,
                        ActTkn: this.form.value.Action_taken,
                        TabYn: this.form.value.Tabets_prescribed_status,
                        TabPresc: tabletPres,
                        TabPrescOth: this.form.value.Prescribtion_TextField,
                        TabValue: "",
                        FlwReqd: this.form.value.Follow_Up_Req,
                        FlwReqDate: this.form.value.date_Req,
                        LocalStatus: this.localstatus,
                        Status: this.form.value.status,
                        OutcomeSts: this.form.value.outcome_status,
                        SurgeryPlannedOn: this.form.value.surgery_plannedon,
                        OtherOutcomeStatus: this.form.value.other_outcome_sts,
                        acYear: this.acYear,
                        userLatt: this.userLatt,
                        userLongg: this.userLongg,
                        schoolLatt: this.schoolLatt,
                        schoolLongg: this.schoolLongg
                    }
                };
                this.studentDelete();
            }
            else {
                params = {
                    records: {
                        IndexId: "",
                        SchoolId: this.SchlId,
                        StudentId: this.student_ID,
                        Username: this.LoginUserName,
                        DrName: this.Doct_name,
                        DrMobile: this.Doct_No,
                        DgnsdCndn: diagparamval,
                        DgnsdCndnOth: this.form.value.Diadnosed_TextField,
                        ActTkn: this.form.value.Action_taken,
                        TabYn: this.form.value.Tabets_prescribed_status,
                        TabPresc: tabletPres,
                        TabPrescOth: this.form.value.Prescribtion_TextField,
                        TabValue: "",
                        FlwReqd: this.form.value.Follow_Up_Req,
                        FlwReqDate: this.form.value.date_Req,
                        LocalStatus: this.localstatus,
                        Status: this.form.value.status,
                        OutcomeSts: this.form.value.outcome_status,
                        SurgeryPlannedOn: this.form.value.surgery_plannedon,
                        OtherOutcomeStatus: this.form.value.other_outcome_sts,
                        acYear: this.acYear,
                        userLatt: this.userLatt,
                        userLongg: this.userLongg,
                        schoolLatt: this.schoolLatt,
                        schoolLongg: this.schoolLongg
                    }
                };
            }
            this.savePhoto(secondParam);
            this.onlineServerSave(params);
        }
        else {
            this.alert.error("Please fill the required fields");
            this.submitted = true;
        }
    }
    savePhoto(params) {
        console.log(params);
        debugger;
        this.userService.saveMHTGeoFencingPhoto(params).subscribe((data) => {
        });
    }
    onlineServerSave(params) {
        this.localstatus = "1";
        // this.userService.saveMHTGeoFencingPhoto()
        this.userService.saveMHTStudentForm(params).subscribe((data) => {
            if (data.status == 200 && data.dataStatus == true) {
                let updateQuery = 'UPDATE mhtStudentListDB SET ComptStatus = 1,LocalTick = 0 WHERE mhtStudentListDB.StuId = "' + this.student_ID + '"';
                return this.sqliteDB.update(updateQuery).then(data => {
                    this.alert.success("Submitted Successfully");
                    this.form.reset();
                    this.onGoButton();
                });
            }
            else {
                this.alert.error(data.message);
                this.alert.error("Dulpicate Entry Message");
            }
        });
    }
    saveofflineData(params) {
        this.serverData = params.records;
        this.localstatus = "2";
        const query = "SELECT * FROM mhtStudentFormDetailsDB WHERE StudentId=" + this.student_ID;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.studentDelete();
            }
            else {
                this.insertLocalDB2(this.serverData);
                let updateQuery = 'UPDATE mhtStudentListDB SET LocalTick = 2 WHERE mhtStudentListDB.StuId = "' + this.student_ID + '"';
                return this.sqliteDB.update(updateQuery).then(data => {
                    this.alert.success("Student data saved as locally");
                    this.onGoButton();
                });
            }
        });
    }
    studentDelete() {
        let query = 'DELETE FROM mhtStudentFormDetailsDB' +
            ' WHERE StudentId = "' + this.student_ID + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            // this.insertLocalDB2(this.StudentGet);
            this.alert.success("Student data updated successfully");
        });
    }
    editBtn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmation',
                subHeader: 'Are you sure want to edit the form?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel'
                    },
                    {
                        text: 'Yes',
                        handler: data => {
                            this.isDisable = false;
                        }
                    }
                ],
            });
            yield alert.present();
        });
    }
    followUpchange(event) {
        // date_Req
        if (event.target.value == 2) {
            this.form.patchValue({
                date_Req: ''
            });
        }
    }
};
StudentFromPage.ctorParameters = () => [
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_6__.DiagnosisService }
];
StudentFromPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-student-from',
        template: _raw_loader_student_from_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_from_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentFromPage);



/***/ }),

/***/ 35405:
/*!***************************************************************!*\
  !*** ./src/app/pages/mht/student-from/student-from.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blockLabel {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.dropDown {\n  padding-right: 15px;\n  font-size: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.input-text {\n  padding-right: 15px;\n  font-size: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.yesNoLabel {\n  width: 100%;\n  padding: 6px;\n  padding-left: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.btnDiv2 {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n  background-color: #ee4f4f;\n}\n\n.subBtn {\n  color: white;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n}\n\n.footer-txt {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 19px;\n}\n\n.footer-bckclr {\n  background: var(--ion-color-primary);\n}\n\n.footer-syncbckclr {\n  background: #3e8f3e;\n}\n\n.footer-txt-clr {\n  color: white;\n}\n\n.mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  padding: 10px;\n  margin-bottom: 15px;\n  position: sticky;\n  top: 0px;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZnJvbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksb0NBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRkoiLCJmaWxlIjoic3R1ZGVudC1mcm9tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ja0xhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5kcm9wRG93biB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNlNmYzZmY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLy8gIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC10ZXh0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ueWVzTm9MYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5EaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ0bkRpdjIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDc5LCA3OSk7XHJcbn1cclxuXHJcbi5zdWJCdG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmZvb3Rlci10eHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLmZvb3Rlci1iY2tjbHIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZm9vdGVyLXN5bmNiY2tjbHIge1xyXG4gICAgYmFja2dyb3VuZDogIzNlOGYzZTtcclxufVxyXG5cclxuLmZvb3Rlci10eHQtY2xyIHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4ubWFpbkxhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkE4Qjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59Il19 */");

/***/ }),

/***/ 21444:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/student-from/student-from.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">Student Form (AY {{acYear}})</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <div class=\"mainLable\"> \r\n    <h6 *ngIf=\"stdName\"><b>Name:</b> {{stdName}}</h6>\r\n    <h6 *ngIf=\"stdUniId\"><b>Id:</b> {{stdUniId}}</h6>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <ion-card style=\"margin: 15px;\">\r\n      <div style=\"margin:20px;background-color: white;padding: 15px;border-radius: 15px; \">\r\n        <!-- <div style=\"text-align: end;\" (click)=\"editBtn()\">\r\n          <ion-icon name=\"create\" style=\"zoom: 2;color:rgb(57, 117, 196);background-color: #ffe7e7;padding: 4px;border-radius: 5px;\"></ion-icon>\r\n        </div> -->\r\n        <!-- {{this.form.value.status == 1}} ------- {{this.ComptStatus}} -->\r\n        \r\n        <div style=\"text-align: end;\" (click)=\"editBtn()\" *ngIf=\"this.ComptStatus != '' && this.ComptStatus != null && this.ComptStatus != '0' || this.localstatus == '2'\">\r\n          <div>\r\n            <ion-label style=\"background-color: #eeeeee;padding: 5px;border-radius: 5px;\">Edit<span>\r\n                <ion-icon name=\"create\"\r\n                  style=\"zoom: 1;color:rgb(57, 117, 196);padding-left: 3px;\"></ion-icon>\r\n              </span></ion-label>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-label class=\"blockLabel\">\r\n          Status<span style=\"color: red;\"> *</span>\r\n        </ion-label>\r\n        <div style=\"width: 100%; padding: 5px; margin-bottom: 5px; border: 2px solid #b4b4b4; border-radius: 10px;\">\r\n          <div style=\"border: 1px solid rgb(180, 180, 180); border-radius: 3px;\">\r\n            <ion-radio-group formControlName=\"status\" (ionChange)=\"getStatus()\">\r\n              <ion-row>\r\n                <ion-item lines=\"none\" class=\"item-style\" *ngFor=\"let item of Status_req\">\r\n                  <ion-radio [value]=\"item.value\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-radio><span\r\n                    style=\"padding-right:40px;padding-left: 5px\">{{item.label}}</span>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"form.value.status == 2\">\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Condition Diagnosed<span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <!-- [canClear]=\"true\"\r\n          clearButtonText=\"Cancel\" -->\r\n          <ion-item lines=\"none\" class=\"item-style\" class=\"dropDown\">\r\n            <ionic-selectable \r\n            placeholder=\"Select Diagnosis\" \r\n            formControlName=\"Condition_Diagn\" \r\n            [disabledItems]=\"(isDisable || (acYear == '2023-24')) ? diagnoses : []\"\r\n            item-content\r\n              itemValueField=\"value\" \r\n              itemTextField=\"label\" \r\n              [items]=\"diagnoses\" \r\n              [isMultiple]=\"true\" \r\n              [canSearch]=\"true\"\r\n              (onChange)=\"diagnosisChange($event)\">\r\n            </ionic-selectable>\r\n          </ion-item>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.Condition_Diagn.errors?.required\">\r\n            Field is required</p>\r\n          <div *ngIf=\"MultiDrop == true\">\r\n            <div style=\"padding-top: 20px;\">\r\n              <ion-label class=\"blockLabel\">\r\n                Other Diagnosis<span style=\"color: red;\"> *</span>\r\n              </ion-label>\r\n            </div>\r\n\r\n            <div>\r\n              <ion-input class=\"dropDown\" formControlName=\"Diadnosed_TextField\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-input>\r\n            </div>\r\n            <p style=\"color: red;font-size: 14px;\"\r\n              *ngIf=\"submitted && form.controls.Diadnosed_TextField.errors?.required\">Field is required</p>\r\n\r\n              <!-- <div class=\"formLine\" style=\"color:red; font-size: 16px !important;\r\n        padding-top: 5px;\">\r\n          {{(submitted && form.controls.Diadnosed_TextField.required && (form.controls.Diadnosed_TextField.dirty ||\r\n          form.controls.Diadnosed_TextField.touched))&& form.controls.Diadnosed_TextField.errors ? 'Field is required'\r\n          : ''}}\r\n        </div> -->\r\n        <p style=\"color: red;font-size: 14px;\" *ngIf=\"form.controls.Diadnosed_TextField.errors?.pattern\">Please enter text only</p>\r\n\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Action Taken<span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <ion-select class=\"select-tab\" placeholder=\"Select Action\" autocomplete=\"off\" class=\"dropDown\"\r\n            formControlName=\"Action_taken\" [disabled]=\"isDisable || (acYear == '2023-24')\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Action_taken\">{{item.label}}</ion-select-option>\r\n\r\n          </ion-select>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.Action_taken.errors?.required\">Field\r\n            is required</p>\r\n\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Tablets Prescribed\r\n            </ion-label>\r\n          </div>\r\n\r\n          <div class=\"yesNoLabel\">\r\n            <ion-radio-group formControlName=\"Tabets_prescribed_status\" (ionChange)=\"getTabStatus($event.detail.value)\">\r\n              <ion-row>\r\n                <ion-item lines=\"none\" class=\"item-style\" *ngFor=\"let item of Tablets_Pres\">\r\n                  <ion-radio [value]=\"item.value\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-radio><span\r\n                    style=\"padding-right:40px;padding-left: 5px\">{{item.label}}</span>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n          </div>\r\n\r\n\r\n\r\n          <div *ngIf=\"form.value.Tabets_prescribed_status == 1\">\r\n            <div style=\"padding-top: 20px;\">\r\n              <ion-label class=\"blockLabel\">\r\n                Select Prescribed\r\n              </ion-label>\r\n            </div>\r\n            <ion-item lines=\"none\" class=\"item-style\" class=\"dropDown\">\r\n              <!-- <ion-label>Diagnosis</ion-label> -->\r\n              <ionic-selectable placeholder=\"Select Prescription\" item-content formControlName=\"Tabets_prescribed\"\r\n                itemValueField=\"value\" itemTextField=\"label\" [items]=\"tabletsPrescribed\" [isMultiple]=\"true\"\r\n                [canSearch]=\"true\" (onChange)=\"tabletsPrescribedChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </div>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.Tabets_prescribed.errors?.required\">\r\n            Field is required</p>\r\n          <div  *ngIf=\"MultiDropTab == true && form.value.Tabets_prescribed_status == 1\">\r\n            <div style=\"padding-top: 20px;\">\r\n              <ion-label class=\"blockLabel\">\r\n                Other Prescribtions<span style=\"color: red;\"> *</span>\r\n              </ion-label>\r\n            </div>\r\n\r\n            <div>\r\n              <ion-input class=\"dropDown\" formControlName=\"Prescribtion_TextField\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-input>\r\n            </div>\r\n            <p style=\"color: red;font-size: 14px;\"\r\n              *ngIf=\"submitted && form.controls.Prescribtion_TextField.errors?.required\">Field is required</p>\r\n\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"form.controls.Prescribtion_TextField.errors?.pattern\">Please enter text only</p>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Follow-up Required\r\n            </ion-label>\r\n          </div>\r\n\r\n\r\n          <div class=\"yesNoLabel\">\r\n            <ion-radio-group formControlName=\"Follow_Up_Req\" (ionChange)=\"followUpchange($event)\">\r\n              <ion-row>\r\n                <ion-item lines=\"none\" class=\"item-style\" *ngFor=\"let item of Follow_req\">\r\n                  <ion-radio [value]=\"item.value\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-radio><span\r\n                    style=\"padding-right:40px;padding-left: 5px\">{{item.label}}</span>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n          </div>\r\n          <div>\r\n            <div *ngIf=\"this.form.value.Follow_Up_Req == '1'\">\r\n\r\n              <div style=\"padding-top: 20px;\">\r\n                <ion-label class=\"blockLabel\">\r\n                  Date\r\n                </ion-label>\r\n              </div>\r\n\r\n              <div class=\"yesNoLabel\">\r\n                <ion-row>\r\n                  <ion-col size=\"10\">\r\n                    <ion-datetime displayFormat=\"DD/MM/YYYY\" [min]=\"yesterdayDate\" placeholder=\"Select Date\"\r\n                      formControlName=\"date_Req\" [disabled]=\"isDisable || (acYear == '2023-24')\">\r\n                    </ion-datetime>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" style=\"align-self: center;zoom: 1.2; color: rgb(104, 82, 156);\">\r\n                    <div>\r\n                      <ion-icon name=\"calendar\"></ion-icon>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Outcome Status <span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <ion-select class=\"select-tab\" placeholder=\"Select Outcome Status\" autocomplete=\"off\" class=\"dropDown\"\r\n            formControlName=\"outcome_status\" (ionChange)=\"outComeStatus()\" [disabled]=\"isDisable\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of outcome_status\">{{item.label}}</ion-select-option>\r\n\r\n          </ion-select>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.outcome_status.errors?.required\">Field\r\n            is required</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"this.form.value.outcome_status == '7'\">\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n             Reason <span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n          <ion-input formControlName=\"other_outcome_sts\" type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-text\">\r\n          </ion-input>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.other_outcome_sts.errors?.required\">Field\r\n            is required</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"this.form.value.outcome_status == '4'\">\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Month and Year <span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <div class=\"yesNoLabel\">\r\n            <ion-row>\r\n              <ion-col size=\"10\">\r\n                <ion-datetime displayFormat=\"MM/YYYY\" pickerFormat=\"MM YYYY\" placeholder=\"Select Month and Year\"\r\n                  formControlName=\"surgery_plannedon\" [disabled]=\"isDisable\" [max]=\"2050-12\" [min]=\"2024-01\">\r\n                </ion-datetime>\r\n              </ion-col>\r\n              <ion-col size=\"2\" style=\"align-self: center;zoom: 1.2; color: rgb(104, 82, 156);\">\r\n                <div>\r\n                  <ion-icon name=\"calendar\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </div>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.surgery_plannedon.errors?.required\">Field\r\n            is required</p>\r\n          \r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      <div>\r\n      <div class=\"btnDiv\" *ngIf=\"!isDisable || (acYear == '2023-24')\">\r\n        <div>\r\n          <ion-button expand=\"block\" (click)=\"submitButton()\" class=\"subBtn\">Submit</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </ion-card>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mht_student-from_student-from_module_ts-es2015.js.map