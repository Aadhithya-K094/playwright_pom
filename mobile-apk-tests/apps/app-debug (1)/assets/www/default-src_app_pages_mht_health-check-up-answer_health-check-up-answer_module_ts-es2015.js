(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_mht_health-check-up-answer_health-check-up-answer_module_ts"],{

/***/ 50338:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCheckUpAnswerPageRoutingModule": function() { return /* binding */ HealthCheckUpAnswerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-check-up-answer.page */ 98614);




const routes = [
    {
        path: '',
        component: _health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_0__.HealthCheckUpAnswerPage
    }
];
let HealthCheckUpAnswerPageRoutingModule = class HealthCheckUpAnswerPageRoutingModule {
};
HealthCheckUpAnswerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HealthCheckUpAnswerPageRoutingModule);



/***/ }),

/***/ 88778:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCheckUpAnswerPageModule": function() { return /* binding */ HealthCheckUpAnswerPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _health_check_up_answer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health-check-up-answer-routing.module */ 50338);
/* harmony import */ var _health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-check-up-answer.page */ 98614);
/* harmony import */ var _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonpages/dynamic-form-table/dynamic-form-table.module */ 41721);








let HealthCheckUpAnswerPageModule = class HealthCheckUpAnswerPageModule {
};
HealthCheckUpAnswerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _health_check_up_answer_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthCheckUpAnswerPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__.DynamicFormTablePageModule
        ],
        declarations: [_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__.HealthCheckUpAnswerPage],
        exports: [_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__.HealthCheckUpAnswerPage],
        providers: [_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__.HealthCheckUpAnswerPage]
    })
], HealthCheckUpAnswerPageModule);



/***/ }),

/***/ 98614:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthCheckUpAnswerPage": function() { return /* binding */ HealthCheckUpAnswerPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_health_check_up_answer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./health-check-up-answer.page.html */ 47100);
/* harmony import */ var _health_check_up_answer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-check-up-answer.page.scss */ 64877);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);













let HealthCheckUpAnswerPage = class HealthCheckUpAnswerPage {
    constructor(sqliteDB, router, http, fb, route, alertService, userSessionService, emisService, networkService, uploadService, el) {
        this.sqliteDB = sqliteDB;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.route = route;
        this.alertService = alertService;
        this.userSessionService = userSessionService;
        this.emisService = emisService;
        this.networkService = networkService;
        this.uploadService = uploadService;
        this.el = el;
        this.formArrayList = {
            controls: []
        };
        this.currPage = 0;
        this.currStdId = '';
        this.listFromApi = [];
        this.jsonList = [];
        this.jsonOptions = [];
        this.jsnQues = [];
        this.issubmitted = false;
        this.paramData = '';
        this.formPost = [];
        this.refferedTo = '';
        this.scrnerId = '';
        this.scrnedStatus = '';
        this.currNetWrkSts = '';
        this.dynamicFilters = '';
    }
    ngOnInit() {
        this.formGroupList = this.fb.group({
            formGroupPages: this.fb.array([])
        });
    }
    ionViewDidEnter() {
        //     let query = 'drop table health_screen_ques';
        // this.sqliteDB.update(query).then(res => { 
        // }); 
        // ======network status-(0,1)(in,out)==========
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        debugger;
        this.paramData = this.route.snapshot.queryParams;
        let currPage = Number(this.paramData.pageId);
        if (this.paramData.clsID) {
            this.dynamicFilters = {
                class: '' + this.paramData.ClsID + '',
                gender: '' + this.paramData.Gender + ''
            };
        }
        else {
            this.dynamicFilters = {
                gender: '' + this.paramData.Gender + ''
            };
        }
        this.currPage = currPage - 1;
        this.formGroupList.reset();
        let formArr = this.formGroupList.get('formGroupPages');
        formArr.controls = [];
        this.scrnerId = this.userSessionService.emis_username();
        this.scrnedStatus = this.paramData.status;
        this.acYear = this.paramData.acYear;
        this.checkLocalDB(1);
    }
    onSync() {
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            this.currPage = 0;
            this.formGroupList.reset();
            let formArr = this.formGroupList.get('formGroupPages');
            formArr.controls = [];
            let query = 'DELETE FROM health_screen_ques_list' +
                ' WHERE block_id = "' + 1 + '"';
            this.sqliteDB.update(query).then(res => {
                if (res) {
                    this.checkLocalDB(1);
                }
            });
        }
        else {
            this.alertService.warning('Please Connect Network');
        }
    }
    checkLocalDB(type) {
        this.networkService.initializeNetworkEvents();
        let query = 'SELECT * FROM health_screen_ques_list' +
            ' WHERE block_id = "' + 1 + '"';
        this.sqliteDB.update(query).then(res => {
            if (res.rows.length > 0) {
                if (type == 1) {
                    this.jsonList = [];
                    this.jsonList = JSON.parse(res.rows.item(0).questions);
                    for (let i = 0; i < this.jsonList.length; i++) {
                        this.jsonList[i]['Page' + (i + 1)] = this.dynamicFilter(this.jsonList[i]['Page' + (i + 1)]);
                    }
                    this.loadJson();
                    // console.log('jsonnnnn', this.jsonList);
                }
            }
            else {
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    this.jsonConverter(type);
                }
                else {
                    this.alertService.warning('Please check your internet');
                }
            }
        });
    }
    jsonParse(data, column) {
        let arr = [];
        for (let i = 0; i < data.length; i++) {
            let obj = {};
            for (let j = 0; j < column.length; j++) {
                obj[column[j]] = data[i][j];
            }
            obj.subques = [];
            obj.isMapped = false;
            arr.push(obj);
        }
        ;
        return arr;
    }
    jsonConverter(type) {
        let healthQues = 'https://d1wpyxz35bzzz4.cloudfront.net/health24_quest_master_json.json';
        let mainQues = [];
        this.http.get(healthQues).subscribe((data) => {
            let ques = this.jsonParse(data.questions.data, data.questions.columns);
            this.jsonOptions = this.jsonParse(data.options.data, data.options.columns);
            this.jsnQues = this.quesFormat(ques);
            for (let i = 0; i < this.jsnQues.length; i++) {
                if (this.jsnQues[i].map == 0) {
                    this.jsnQues[i].mapped = true;
                    mainQues.push(this.jsnQues[i]);
                }
                else {
                    this.jsnQues[i].mapped = false;
                }
            }
            for (let i = 0; i < mainQues.length; i++) {
                mainQues[i].subques = this.subQusParse(mainQues[i]);
            }
            // =========page filter===========
            let filterByPage = [];
            for (let i = 0; i < mainQues.length; i++) {
                if (filterByPage.length == 0) {
                    filterByPage = [
                        { Page1: [mainQues[i]], Page_Title: 'Status' },
                        { Page2: [], Page_Title: 'கண் பரிசோதனை EYE Screening' },
                        { Page3: [], Page_Title: 'அளவீடுகள் BMI' },
                        { Page4: [], Page_Title: 'சுகாதார பரிசோதனை Health' },
                    ];
                }
                else {
                    for (let j = 0; j < filterByPage.length; j++) {
                        if ((j + 1) == mainQues[i].page) {
                            let index = filterByPage[j]['Page' + mainQues[i].page].findIndex(obj => obj.controlName == mainQues[i].controlName);
                            if (index == -1) {
                                filterByPage[j]['Page' + mainQues[i].page].push(mainQues[i]);
                            }
                        }
                    }
                }
            }
            let questions = JSON.stringify(filterByPage);
            let sqlArray = [];
            sqlArray.push(['INSERT INTO health_screen_ques_list VALUES (?,?,?)', [null, 1, questions]]);
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                if (type == 1) {
                    this.checkLocalDB(1);
                }
            });
        }, error => {
            this.alertService.warning("Error While getting Questions");
        });
    }
    dynamicFilter(list) {
        for (let obj in this.dynamicFilters) {
            list = list.filter(obj1 => {
                var _a;
                return (_a = obj1[obj]) === null || _a === void 0 ? void 0 : _a.includes(this.dynamicFilters[obj]);
            });
        }
        ;
        for (let j = 0; j < list.length; j++) {
            if (list[j].subques.length > 0) {
                list[j].subques = this.dynamicFilter(list[j].subques);
            }
        }
        return list;
    }
    loadJson() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.formGroupList.reset();
            for (let i = 0; i < this.jsonList.length; i++) {
                let temp = "Page" + (i + 1) + "";
                let formArr = this.formGroupList.get('formGroupPages');
                let obj = this.fb.group({
                    grandParentFA: this.fb.array([]),
                    value: this.fb.control("")
                });
                obj.patchValue({
                    value: this.jsonList[i][temp],
                });
                formArr.controls.push(obj);
            }
            this.formArrayList.controls = [];
            this.formArrayList = this.formGroupList.get('formGroupPages');
            localStorage.setItem("listFromApi", '');
            this.formGroupList.updateValueAndValidity();
            this.navigateNextPage();
        });
    }
    subQusParse(obj) {
        let arr = [];
        for (let i = 0; i < this.jsnQues.length; i++) {
            if (!this.jsnQues[i].isMapped && obj.controlName == this.jsnQues[i].map) {
                this.jsnQues[i].isMapped = true;
                arr.push(this.jsnQues[i]);
            }
        }
        for (let j = 0; j < arr.length; j++) {
            arr[j].subques = this.subQusParse(arr[j]);
        }
        arr.sort(function (a, b) { return a.seq_id - b.seq_id; });
        return arr;
    }
    quesFormat(ques) {
        let arr = [];
        for (let i = 0; i < ques.length; i++) {
            ques[i].class = ques[i].class.split(',');
            ques[i].gender = ques[i].gender.split(',');
            ques[i].ques_text = ques[i].q_type;
            ques[i].valid = true;
            // ===========info============
            ques[i].info = '';
            // ques[i].info = this.infoParse(ques[i]);
            // ============expected===============
            if (ques[i].expected) {
                ques[i].expected = ques[i].expected.split(',');
            }
            else {
                ques[i].expected = [];
            }
            if (ques[i].expected.length > 0) {
                for (let j = 0; j < ques[i].expected.length; j++) {
                    if (ques[i].expected[j] == 'true' || ques[i].expected[j] == 'TRUE') {
                        ques[i].expected[j] = true;
                    }
                    else if (ques[i].expected[j] == 'false' || ques[i].expected[j] == 'FALSE') {
                        ques[i].expected[j] = false;
                    }
                    else if (ques[i].expected[j]) {
                        ques[i].expected[j] = (ques[i].expected[j]);
                    }
                }
            }
            // ========options=============
            if (ques[i].ques_type == 5 || ques[i].ques_type == 1 || ques[i].ques_type == 6) {
                ques[i].ques_option = [];
                ques[i].options = ques[i].options.split(',');
                for (let j = 0; j < this.jsonOptions.length; j++) {
                    let index = ques[i].options.findIndex(x => { return x == this.jsonOptions[j].id; });
                    if (index > -1) {
                        ques[i].ques_option.push({ id: this.jsonOptions[j].value, value: this.jsonOptions[j].label });
                    }
                }
            }
            arr.push(ques[i]);
        }
        return arr;
    }
    infoParse(data) {
        let finalInfo = '';
        if (data.infoType == 1) {
            finalInfo = data.info.split('-');
            finalInfo = (finalInfo === null || finalInfo === void 0 ? void 0 : finalInfo.length) > 0 ? finalInfo : [finalInfo];
        }
        else if (data.infoType == 3) {
            finalInfo = 'https://deka0egrc3bqo.cloudfront.net/health_docs/' + data.info + '';
        }
        return finalInfo;
    }
    navigateNextPage() {
        this.currPage = this.currPage + 1;
        Object.assign(this.paramData.pageId, this.currPage);
        this.router.navigate([], { queryParams: this.paramData });
        this.issubmitted = false;
        // this.loadNextForm();
        let query = 'SELECT * FROM health_screen_ques' +
            ' WHERE school_key_id = "' + this.paramData.SchlId + '"' +
            ' And StuId = "' + this.paramData.studentid + '"';
        debugger;
        this.sqliteDB.update(query).then(res => {
            let temp = [];
            if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                    temp.push(res.rows.item(i));
                }
                ;
                localStorage.setItem("listFromApi", JSON.stringify(temp));
                this.loadNextForm(this.currPage - 1);
            }
            else {
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    this.emisService.GetStudHealthScrn(this.paramData.studentid, this.acYear).subscribe((res1) => {
                        if (res1.dataStatus) {
                            localStorage.setItem("listFromApi", JSON.stringify(res1.result.QusetDetails));
                            let query = 'DELETE FROM health_screen_ques' +
                                ' WHERE school_key_id = "' + this.paramData.SchlId + '"' +
                                ' And StuId = "' + this.paramData.studentid + '"';
                            this.sqliteDB.update(query).then(res => {
                                let sqlArray = [];
                                res1.result.QusetDetails.forEach(element => {
                                    sqlArray.push(['INSERT INTO health_screen_ques VALUES (?,?,?,?,?,?)', [null, this.paramData.SchlId, this.paramData.studentid, element.Qid, element.ResChar, 1]]);
                                });
                                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                                    this.loadNextForm(this.currPage - 1);
                                });
                            });
                            this.loadNextForm(this.currPage - 1);
                        }
                        else {
                            localStorage.setItem("listFromApi", JSON.stringify(''));
                        }
                        this.loadNextForm(this.currPage - 1);
                    }, error => {
                        localStorage.setItem("listFromApi", JSON.stringify(''));
                        this.loadNextForm(this.currPage - 1);
                    });
                }
                else {
                    this.loadNextForm(this.currPage - 1);
                }
            }
            ;
        });
    }
    onGoButton() {
        debugger;
        this.router.navigate([this.paramData.navigateUrl], { queryParams: JSON.parse(this.paramData.navigate) });
    }
    feedback() {
        this.router.navigate(['/tabs/final-feedback']);
    }
    loadNextForm(slice) {
        let formArr = this.formGroupList.get('formGroupPages');
        let mV = this.paramData.module;
        let conV = (mV == 'MHT' || mV == 'CWSN') ? this.jsonList.length : 1;
        for (let i = 0; i < conV; i++) {
            this.formArrayList.controls.splice(i, 1);
            let obj = this.fb.group({
                grandParentFA: this.fb.array([]),
                value: this.fb.control("")
            });
            let ques = [];
            if ((i + 1) == 2 && mV == 'CWSN') {
                ques = [];
            }
            else {
                ques = this.jsonList[i]['Page' + (i + 1)];
            }
            obj.patchValue({
                value: ques
            });
            formArr.controls.splice(i, 0, obj);
            this.formGroupList.updateValueAndValidity();
            //  console.log(this.formGroupList,"Forms")
        }
    }
    insertScenStds(arr, scrnSts, serverSts, pmoa, rbsk, mentalHealth, dentalSpeciallist, cwsn) {
        let query = 'DELETE FROM healthStdScrnDetails' +
            ' WHERE StudId = "' + this.paramData.studentid + '"';
        ;
        this.sqliteDB.update(query).then(res => {
            let sqlArray = [];
            arr.forEach(element => {
                sqlArray.push(['INSERT INTO healthStdScrnDetails VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.StdntId, element.ScrngDate, element.SchoolId, element.Sec, element.StudentClass, scrnSts, serverSts, pmoa, rbsk, mentalHealth, dentalSpeciallist, cwsn]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                this.router.navigate(['/tabs/health-studentlist'], { queryParams: { data: JSON.stringify(this.paramData) } });
            });
        });
    }
    generatePost(data) {
        if (parseInt(data.controlName) > 0 && data.ques_type != 3 && data.ques_type != 0) {
            let obj = {
                "IndxID": data.IndxID,
                "Qid": data.controlName,
                "ResChar": "",
                "isactive": "1"
            };
            if (data.ques_type == 12) {
                obj.ResChar = data[data.controlName] ? 1 : 2;
            }
            else if (data.ques_type == 5) {
                if (data[data.controlName] != undefined) {
                    if (data[data.controlName].id != undefined) {
                        obj.ResChar = data[data.controlName].id;
                    }
                    else {
                        obj.ResChar = data[data.controlName];
                    }
                }
                else {
                    obj.ResChar = data[data.controlName];
                }
            }
            else if (data.ques_type == 6) {
                let temp = '';
                if (data[data.controlName].length > 1) {
                    for (let j = 0; j < data[data.controlName].length; j++) {
                        temp = data[data.controlName][j].id + "," + temp;
                    }
                }
                else {
                    temp = data[data.controlName][0].id;
                }
                obj.ResChar = temp;
            }
            else {
                obj.ResChar = data[data.controlName];
            }
            if (obj.ResChar != '') {
                this.formPost.push(obj);
            }
        }
        ;
        if (data.subques != undefined) {
            if (data.subques.length > 0) {
                for (let i = 0; i < data.subques.length; i++) {
                    this.generatePost(data.subques[i]);
                }
                ;
            }
        }
        ;
    }
    navigatePreviousPage() {
        this.currPage = this.currPage - 2;
        this.navigateNextPage();
    }
    checkFormValid() {
        let formValid = true;
        let totalForms = this.formGroupList.get('formGroupPages');
        // console.log(totalForms.controls[this.currPage - 1].value);
        if (totalForms.controls[this.currPage - 1].invalid) {
            formValid = false;
        }
        if (formValid) {
            this.insertScrValues(this.currPage);
        }
        else {
            this.alertService.warning('form is invalid');
            this.issubmitted = true;
        }
    }
    insertScrValues(pageNo) {
        if (this.scrnedStatus == 1) {
            this.navigateNextPage();
        }
        else {
            let totalForms = this.formGroupList.get('formGroupPages');
            this.formPost = [];
            let currFormTotal = totalForms.controls[pageNo - 1].value.grandParentFA;
            // console.log(totalForms.controls[pageNo - 1].value);
            for (let i = 0; i < currFormTotal.length; i++) {
                this.generatePost(currFormTotal[i]);
            }
            ;
            let quesIds = '';
            this.formPost.forEach(obj => {
                quesIds ? quesIds = quesIds + "," + obj.Qid : quesIds = obj.Qid;
            });
            let query = 'DELETE FROM health_screen_ques' +
                ' WHERE school_key_id = "' + this.paramData.SchlId + '"' +
                ' And StuId = "' + this.paramData.studentid + '"' +
                ' And Qid IN (' + quesIds + ')';
            this.sqliteDB.update(query).then(res => {
                // if (res) {
                let sqlArray = [];
                this.formPost.forEach(element => {
                    sqlArray.push(['INSERT INTO health_screen_ques VALUES (?,?,?,?,?,?)', [null, this.paramData.SchlId, this.paramData.studentid, element.Qid, element.ResChar, element.isactive]]);
                });
                this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                    this.navigateNextPage();
                });
                // }
            });
        }
    }
    callFromChildDom(event) {
        // console.log('child form', typeof (event));
        // let Curform:any = event.arr[event.i].controls;
        if (!event.controls) {
            let Curform = event.list.controls;
            let docMent = [3, 4, 5, 6, 66, 8, 9, 10, 11, 12];
            let bmi = [14, 15];
            if (docMent.includes(Curform.controlName.value)) {
                // =============document upload===============
                this.addRemoveValidation(this.findeyeDoc(event.arr), event.arr, 10);
            }
            else if (bmi.includes(Curform.controlName.value)) {
                this.calcBmi(event);
            }
        }
        else {
            if (event.controls[0]) {
                let parentForm = event.controls[0];
                if (parentForm.controls.controlName.value == 2) {
                    let eysQues = parentForm.controls.subques.controls;
                    this.addRemoveValidation(this.findeyeDoc(eysQues), eysQues, 10);
                }
            }
        }
    }
    findeyeDoc(arr) {
        var _a;
        let docTrue = false;
        for (let i = 0; i < arr.length; i++) {
            let ctrl = arr[i].controls;
            if (((_a = ctrl[ctrl.controlName.value]) === null || _a === void 0 ? void 0 : _a.value) == 1) {
                docTrue = true;
                break;
            }
        }
        ;
        return docTrue;
    }
    calcBmi(event) {
        let weCtrl = event.arr[event.arr.length - 3].controls;
        let heCtrl = event.arr[event.arr.length - 2].controls;
        let bmiCtrl = event.arr[event.arr.length - 1];
        let bmiVal = 0, heVal = 0, weVal = 0;
        heVal = Number(weCtrl[weCtrl.controlName.value].value);
        weVal = Number(heCtrl[heCtrl.controlName.value].value);
        bmiVal = Number((weVal / Math.pow((heVal / 100), 2)).toFixed(2));
        bmiCtrl.patchValue({
            [bmiCtrl.controls.controlName.value]: bmiVal ? bmiVal : 'Invalid'
        });
    }
    addRemoveValidation(status, arr, i) {
        var _a;
        let ctrl = (_a = arr[i]) === null || _a === void 0 ? void 0 : _a.controls;
        if (ctrl) {
            ctrl.hidden.setValue(1);
            if (status) {
                ctrl.hidden.setValue(0);
                ctrl[ctrl.controlName.value].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
            }
            else {
                ctrl[ctrl.controlName.value].setValidators(null);
                ctrl[ctrl.controlName.value].setValue('');
            }
            ctrl[ctrl.controlName.value].updateValueAndValidity();
        }
    }
    refCalc(type, arr) {
        let refStatus = 0;
        let refQues = [];
        if (type == 1) {
            refQues = [3, 4, 6, 12];
        }
        else if (type == 2) {
            refQues = [61, 54, 59, 60];
        }
        else if (type == 3) {
            refQues = [30];
        }
        else if (type == 4) {
            refQues = [3, 6, 19, 36, 40, 44, 47, 61, 52, 54, 62, 65];
        }
        for (let i = 0; i < arr.length; i++) {
            if (refQues.includes(arr[i].Qid) || type == 5) {
                if (arr[i].ResChar == 1) {
                    refStatus = 1;
                    break;
                }
            }
        }
        return refStatus;
    }
};
HealthCheckUpAnswerPage.ctorParameters = () => [
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef }
];
HealthCheckUpAnswerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-health-check-up-answer',
        template: _raw_loader_health_check_up_answer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_health_check_up_answer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HealthCheckUpAnswerPage);



/***/ }),

/***/ 64877:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer.page.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background:transparent !important;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nh6 {\n  color: var(--text-color-black);\n}\n\nh5 {\n  margin: 1rem;\n}\n\n.container {\n  padding: 15px !important;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.subBtn {\n  color: white;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n}\n\n.submit {\n  background-color: #F96C94;\n  color: white;\n  text-align: center;\n  width: 30%;\n  padding: 6px;\n  border-radius: 12px;\n}\n\n.divsub {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 5px;\n}\n\n.quesRow {\n  background-color: #F7F7F7;\n  width: 100%;\n  border-radius: 12px;\n  margin-top: 8px;\n}\n\n.mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  padding: 10px;\n  margin-bottom: 15px;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 5;\n}\n\n.p-5p {\n  padding: 5px;\n}\n\n.card-align {\n  margin: 0 !important;\n  border-radius: 10px;\n}\n\n.back-iconNew {\n  color: white;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.gap-3 {\n  grid-gap: 3%;\n  gap: 3%;\n}\n\n.m0 {\n  margin: 0;\n}\n\n.m20p {\n  margin: 20px;\n}\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem !important;\n  margin-top: 0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1jaGVjay11cC1hbnN3ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0FBQ0o7O0FBRUU7RUFDRSwrQkFBQTtBQUNKOztBQUVFO0VBQ0Usd0NBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFFRSx3QkFBQTtBQUFKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNDLGtCQUFBO0VBQ0MsbUJBQUE7QUFBTjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBREE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBRkE7RUFDSSx1QkFBQTtBQUtKOztBQUZBO0VBQ0ksWUFBQTtFQUFBLE9BQUE7QUFLSjs7QUFGQTtFQUNJLFNBQUE7QUFLSjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFGQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7QUFLSiIsImZpbGUiOiJoZWFsdGgtY2hlY2stdXAtYW5zd2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAvLyBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuLmJ0bkRpdiB7XHJcbiAgICB3aWR0aDoxMDAlIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdWJCdG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdWJtaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NkM5NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbi5kaXZzdWJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yYWRpb3tcclxuICAgIHBhZGRpbmctcmlnaHQ6NDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4XHJcbn1cclxuLnF1ZXNSb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5tYWluTGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBOEI4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ucC01cCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYmFjay1pY29uTmV3IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmdhcC0zIHtcclxuICAgIGdhcDogMyU7XHJcbn1cclxuXHJcbi5tMCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tMjBwIHtcclxuICBtYXJnaW46MjBweFxyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 47100:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/health-check-up-answer/health-check-up-answer.page.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">Health Module Questions (AY {{acYear}})</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <!-- <div class=\"mainLable\"> \r\n    <ion-row class=\"text-row\">\r\n      <ion-col size=\"12\">\r\n        <h6 *ngIf=\"paramData\" class=\"m0\">Name: {{paramData.studentname}}({{paramData.UniqId}})</h6>\r\n        <h6 *ngIf=\"paramData\" class=\"m0\">Gender :{{paramData.Gender==1?'Male':'Female'}}</h6>\r\n      </ion-col> -->\r\n  <!-- <ion-col size=\"6\"> \r\n        <h6 *ngIf=\"paramData\" class=\"m0\">Class: {{paramData.ClsID}},{{paramData.Sectn}}</h6>\r\n       </ion-col> -->\r\n  <!-- </ion-row>\r\n  </div> -->\r\n  <div class=\"m20p\">\r\n    <ion-card class=\"card-align ion-card-margin\">\r\n      <ion-row class=\"container\">\r\n        <ion-col size=\"12\">\r\n          <div>\r\n            <h6 *ngIf=\"paramData\" class=\"m0\"><b>Name:</b> {{paramData.studentname}} ({{paramData.UniqId}})</h6>\r\n            <h6 *ngIf=\"paramData\" class=\"m0\"><b>Gender:</b> {{paramData.Gender==1?'Male':'Female'}}</h6>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <h5 class=\"text-center\">Health and wellbeing</h5>\r\n    \r\n    <ion-card class=\"card-align ion-card-margin\">\r\n      <div class=\"staffList_Content bg_lightBlue\">\r\n        <div class=\"container\">\r\n          <form [formGroup]=\"formGroupList\">\r\n            <div formArrayName=\"formGroupPages\">\r\n              <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n                <div formGroupName=\"{{i}}\">\r\n                  <div formArrayName=\"grandParentFA\">\r\n                    <app-dynamic-health-form-mode [list]=\"list['controls'].value.value\" index=\"'0'\" [formGrp]=\"list\"\r\n                      formArrName=\"grandParentFA\" [submitted]=\"issubmitted\" (childDom)=\"callFromChildDom($event)\">\r\n                    </app-dynamic-health-form-mode>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_mht_health-check-up-answer_health-check-up-answer_module_ts-es2015.js.map