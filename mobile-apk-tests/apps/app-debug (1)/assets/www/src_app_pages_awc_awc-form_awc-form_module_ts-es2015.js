(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_awc-form_awc-form_module_ts"],{

/***/ 2429:
/*!***************************************************************!*\
  !*** ./src/app/pages/awc/awc-form/awc-form-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcFormPageRoutingModule": function() { return /* binding */ AwcFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awc_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-form.page */ 10128);




const routes = [
    {
        path: '',
        component: _awc_form_page__WEBPACK_IMPORTED_MODULE_0__.AwcFormPage
    }
];
let AwcFormPageRoutingModule = class AwcFormPageRoutingModule {
};
AwcFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AwcFormPageRoutingModule);



/***/ }),

/***/ 26358:
/*!*******************************************************!*\
  !*** ./src/app/pages/awc/awc-form/awc-form.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcFormPageModule": function() { return /* binding */ AwcFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awc_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-form-routing.module */ 2429);
/* harmony import */ var _awc_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-form.page */ 10128);
/* harmony import */ var _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commonpages/dynamic-form-table/dynamic-form-table.module */ 41721);








let AwcFormPageModule = class AwcFormPageModule {
};
AwcFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _awc_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwcFormPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__.DynamicFormTablePageModule
        ],
        declarations: [_awc_form_page__WEBPACK_IMPORTED_MODULE_1__.AwcFormPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
    })
], AwcFormPageModule);



/***/ }),

/***/ 10128:
/*!*****************************************************!*\
  !*** ./src/app/pages/awc/awc-form/awc-form.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcFormPage": function() { return /* binding */ AwcFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_awc_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./awc-form.page.html */ 84807);
/* harmony import */ var _awc_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-form.page.scss */ 82939);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);












let AwcFormPage = class AwcFormPage {
    constructor(sqliteDB, router, http, fb, route, alertService, userService, userSessionService) {
        this.sqliteDB = sqliteDB;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.route = route;
        this.alertService = alertService;
        this.userService = userService;
        this.userSessionService = userSessionService;
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
        this.stdId = {};
        this.showForm = false;
        this.paramData = '';
        this.formPost = [];
        this.refferedTo = '';
        this.getDetailsStdList = [];
        this.nextPageButton = false;
        this.healthBlockList = [];
    }
    ngOnInit() {
        this.formGroupList = this.fb.group({
            formGroupPages: this.fb.array([])
        });
    }
    ionViewDidEnter() {
        this.showForm = false;
        this.paramData = JSON.parse(this.route.snapshot.queryParams.data);
        this.stdId = this.paramData.ChildId;
        this.editable = this.route.snapshot.queryParams.fun;
        let currPage = this.paramData.pageId;
        this.routeData = this.route.snapshot;
        this.phase_id = this.routeData.queryParams.id;
        this.viewstatus = this.routeData.queryParams.viewstatus;
        this.phaseName = this.routeData.queryParams.phaseName;
        this.AcYears = this.routeData.queryParams.AcYears;
        this.awcCode = this.routeData.queryParams.awcCode;
        this.userLatt = this.routeData.queryParams.userLatt;
        this.userLongg = this.routeData.queryParams.userLongg;
        this.schoolLatt = this.routeData.queryParams.schoolLatt;
        this.schoolLongg = this.routeData.queryParams.schoolLongg;
        this.IndexId = this.paramData.IndexId;
        this.currUser = this.userSessionService.emis_username();
        this.currPage = currPage - 1;
        this.formGroupList.reset();
        let formArr = this.formGroupList.get('formGroupPages');
        formArr.controls = [];
        // this.getStudent();
        this.checkLocalDB();
        // this.jsonConverter();
        this.getHealthBlockList();
    }
    getStudent() {
        this.userService.getAwcStdDetails(this.IndexId).subscribe(res => {
            let response = res.result[(this.phase_id == 1 ? 0 : this.phase_id == 3 ? 0 : this.phase_id == 5 ? 0 : 1)].details;
            for (let i = 0; i < response.length; i++) {
                this.getDetailsStdList.push(response[i].q_id);
            }
            ;
            this.checkLocalDB();
        });
    }
    getHealthBlockList() {
        this.healthBlockList = [];
        this.userService.healthBlockList().subscribe(res => {
            if (res.dataStatus) {
                this.healthBlockList = res.result;
            }
        });
    }
    onSync() {
        this.currPage = 0;
        this.formGroupList.reset();
        let formArr = this.formGroupList.get('formGroupPages');
        formArr.controls = [];
        let query = 'DELETE FROM awc_screen_ques_list' +
            ' WHERE block_id = "' + 1 + '"';
        this.sqliteDB.executeQuery(query).then(res => {
            if (res) {
                this.checkLocalDB();
            }
        });
    }
    checkLocalDB() {
        let query = 'SELECT * FROM awc_screen_ques_list' +
            ' WHERE block_id = "' + 1 + '"';
        this.sqliteDB.executeQuery(query).then(res => {
            if (res.rows.length > 0) {
                let data = res.rows.item(0);
                data = data ? JSON.parse(data.questions) : [];
                let mainQues = [];
                let ques;
                ques = this.jsonParse(data.questions.data, data.questions.columns);
                if (this.editable != 'Edit') {
                    this.viewData = true;
                    ques = ques.filter(obj => obj.ques_type == 0 || obj.ques_type == 3 || this.getDetailsStdList.includes((obj.controlName).toString()));
                }
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
                mainQues.sort((a, b) => (a.seq_id < b.seq_id ? -1 : 1));
                for (let i = 0; i < mainQues.length; i++) {
                    mainQues[i].subques = this.subQusParse(mainQues[i]);
                    (mainQues[i].subques).sort((a, b) => (a.seq_id < b.seq_id ? -1 : 1));
                }
                // =========page filter===========
                let filterByPage = [];
                const allPages = [...new Set(mainQues.map(item => item.page))];
                const ascPages = [...allPages].sort((a, b) => a - b);
                for (let i = 0; i < ascPages.length; i++) {
                    let pageName = 'Page' + ascPages[i];
                    filterByPage.push({ [pageName]: [], Page_Title: pageName });
                }
                for (let i = 0; i < mainQues.length; i++) {
                    // if (filterByPage.length == 0) {
                    //   // let obj = {
                    //   //   Page1 : [mainQues[i]]
                    //   // };
                    //   filterByPage = [{ Page1: [mainQues[i]], Page_Title: 'Questions' }, { Page2: [], Page_Title: 'page2' }, { Page3: [], Page_Title: 'page3' }];
                    // } else {
                    for (let j = 0; j < filterByPage.length; j++) {
                        if ((j + 1) == mainQues[i].page) {
                            let index = filterByPage[j]['Page' + mainQues[i].page].findIndex(obj => obj.controlName == mainQues[i].controlName);
                            if (index == -1) {
                                filterByPage[j]['Page' + mainQues[i].page].push(mainQues[i]);
                            }
                        }
                    }
                    // }
                }
                this.jsonList = [];
                this.jsonList = filterByPage;
                this.loadJson();
            }
            else {
                this.jsonConverter();
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
    jsonConverter() {
        // let awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_staging.json';
        let awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_production.json';
        let mainQues = [];
        this.http.get(awcQues).subscribe((data) => {
            let questions = JSON.stringify(data);
            let sqlArray = [];
            sqlArray.push(['INSERT INTO awc_screen_ques_list VALUES (?,?,?)', [null, 1, questions]]);
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                this.checkLocalDB();
            });
        }, error => {
            this.alertService.warning("Error While getting Questions");
        });
    }
    loadJson() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
            this.formArrayList.control = [];
            this.formArrayList = this.formGroupList.get('formGroupPages');
            localStorage.setItem("listFromApi", '');
            this.formGroupList.updateValueAndValidity();
            this.navigateNextPage(1);
        });
    }
    subQusParse(obj) {
        let isseq = true;
        let arr = [];
        for (let i = 0; i < this.jsnQues.length; i++) {
            if (!this.jsnQues[i].isMapped && obj.controlName == this.jsnQues[i].map) {
                this.jsnQues[i].isMapped = true;
                arr.push(this.jsnQues[i]);
            }
        }
        ;
        for (let j = 0; j < arr.length; j++) {
            arr[j].subques = this.subQusParse(arr[j]);
        }
        ;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].seq_id) {
                isseq = false;
                break;
            }
        }
        ;
        // if(isseq) {
        // }
        return arr;
    }
    quesFormat(ques) {
        let arr = [];
        for (let i = 0; i < ques.length; i++) {
            ques[i].age_years = ques[i].age_years.split(',');
            ques[i].ques_text = ques[i].q_type;
            ques[i].valid = true;
            ques[i].seq_id = ques[i].seq_id;
            ques[i].option_mapping = ques[i].option_mapping;
            // ============expected===============
            if (ques[i].expected) {
                ques[i].expected = ques[i].expected.split(',');
            }
            else {
                ques[i].expected = [];
            }
            if (ques[i].expected.length > 0) {
                for (let j = 0; j < ques[i].expected.length; j++) {
                    if (ques[i].expected[j] == 'true') {
                        ques[i].expected[j] = true;
                    }
                    else if (ques[i].expected[j] == 'false') {
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
    navigateNextPage(type) {
        this.userService.GetAwcScrDet(this.paramData.IndexId, this.phase_id).subscribe((res) => {
            if (type == 2) {
                this.currPage = this.currPage - 2;
            }
            localStorage.setItem("listFromApi", '');
            this.formArrayList.controls.splice(this.currPage, 1);
            this.currPage = this.currPage + 1;
            this.paramData.pageId = this.currPage;
            this.router.navigate([], { queryParams: { data: JSON.stringify(this.paramData) } });
            this.issubmitted = false;
            if (res.dataStatus) {
                localStorage.setItem("listFromApi", JSON.stringify(res.result[0].Details));
            }
            else {
                localStorage.setItem("listFromApi", JSON.stringify(''));
            }
            this.loadNextForm();
        }, error => {
            if (type == 2) {
                this.currPage = this.currPage - 2;
            }
            localStorage.setItem("listFromApi", '');
            this.formArrayList.controls.splice(this.currPage, 1);
            this.currPage = this.currPage + 1;
            this.paramData.pageId = this.currPage;
            this.router.navigate([], { queryParams: { data: JSON.stringify(this.paramData) } });
            this.issubmitted = false;
            localStorage.setItem("listFromApi", JSON.stringify(''));
            this.loadNextForm();
        });
    }
    onGoButton() {
        this.router.navigate(['/tabs/awc-student-list'], { queryParams: { data: JSON.stringify(this.paramData), id: this.phase_id, viewstatus: this.viewstatus, phaseName: this.phaseName, AcYears: this.AcYears } });
    }
    feedback() {
        this.router.navigate(['/tabs/final-feedback']);
    }
    loadNextForm() {
        let tempFormList = this.jsonList;
        let temp = "Page" + ((this.currPage - 1) + 1) + "";
        let formArr = this.formGroupList.get('formGroupPages');
        let obj = this.fb.group({
            grandParentFA: this.fb.array([]),
            value: this.fb.control("")
        });
        obj.patchValue({
            value: tempFormList[(this.currPage - 1)][temp],
        });
        formArr.controls.splice((this.currPage - 1), 0, obj);
        this.formArrayList = this.formGroupList.get('formGroupPages');
        setTimeout(() => {
            var _a;
            if (((_a = this.formArrayList.controls[0].value.value[0]) === null || _a === void 0 ? void 0 : _a.value) == '1') {
                this.nextPageButton = true;
            }
            else {
                this.nextPageButton = false;
            }
        }, 0);
        this.formGroupList.updateValueAndValidity();
        this.showForm = true;
    }
    callFromChildDom(event) {
        if ((event === null || event === void 0 ? void 0 : event.qId) == 68 && (event === null || event === void 0 ? void 0 : event.value) == 1) {
            this.nextPageButton = true;
        }
        else {
            this.nextPageButton = false;
        }
        // let totalForms: any = this.formGroupList.get('formGroupPages') as FormArray;
        // let currFormTotal: any = totalForms.controls[0].controls.grandParentFA.controls;
        // for (let i = 0; i < currFormTotal.length && currFormTotal.length > 12; i++) {
        //   this.currControl = currFormTotal[i];
        // }
    }
    formatAcademicYear(yearString) {
        const years = yearString.split('-');
        if (years.length === 2) {
            const startYear = years[0];
            const endYear = years[1].slice(-2);
            return `${startYear}-${endYear}`;
        }
        return yearString;
    }
    saveAll(currpage) {
        this.issubmitted = true;
        let formValid = true;
        this.formPost = [];
        let totalForms = this.formGroupList.get('formGroupPages');
        for (let i = 0; i < totalForms.controls.length; i++) {
            let currFormTotal = totalForms.controls[i].value.grandParentFA;
            for (let i = 0; i < currFormTotal.length; i++) {
                this.generatePost(currFormTotal[i]);
            }
            ;
            if (totalForms.controls[i].invalid && currpage == 1 && i == 0) {
                formValid = false;
            }
            else if (currpage != 1 && totalForms.controls[i].invalid) {
                formValid = false;
            }
        }
        ;
        if (formValid) {
            let newDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD');
            let obj = {
                "awc": [
                    {
                        "IndxID": null,
                        "AwcCode": this.paramData.AwcCode,
                        "ScrenDate": newDate,
                        "childId": this.paramData.IndexId,
                        "referredStatus": this.refferedTo,
                        "AcYear": this.formatAcademicYear(this.AcYears),
                        // "userLatt": this.userLatt,
                        // "userLongg": this.userLongg,
                        // "schoolLatt": this.schoolLatt,
                        // "schoolLongg": this.schoolLongg
                    }
                ],
                "awcDet": this.formPost,
                "PhaseId": this.phase_id
            };
            this.paramData;
            let secondParam;
            secondParam = {
                records: {
                    AwcCode: this.awcCode,
                    Username: this.currUser,
                    // UserLatt: this.userLatt,
                    // UserLongg: this.userLongg,
                    // VisitPhoto: localStorage.getItem('VisitPhoto')
                }
            };
            // this.savePhoto(secondParam);
            this.userService.AwcScrCUD(obj).subscribe((res) => {
                if (res.dataStatus) {
                    this.issubmitted = false;
                    this.alertService.warning(res.message);
                    this.router.navigate(['/tabs/awc-student-list'], { queryParams: { data: JSON.stringify(this.paramData), id: this.phase_id, viewstatus: this.viewstatus, phaseName: this.phaseName, AcYears: this.AcYears } });
                }
                else {
                    this.alertService.warning(res.message);
                }
            });
        }
        else {
            this.issubmitted = true;
            this.alertService.warning('Form is invalid');
        }
    }
    savePhoto(params) {
        this.userService.saveAWCGeoFencingPhoto(params).subscribe((data) => {
        });
    }
    generatePost(data) {
        //  
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
            if (data.controlName == 53) {
                this.refferedTo = data[data.controlName];
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
        this.navigateNextPage(2);
    }
    ageCalculator(date) {
        // var userinput = document.getElementById("DOB").value;  
        var dob = new Date(date);
        //extract the year, month, and date from user date input  
        var dobdobYear = dob.getFullYear();
        var dobdobMonth = dob.getMonth();
        // var dobdobDate = dob.getDate();  
        //get the current date from the system  
        var now = new Date();
        //extract the year, month, and date from current date  
        var currentYear = now.getFullYear();
        var currentMonth = now.getMonth();
        var currentDate = now.getDate();
        //declare a variable to collect the age in year, month, and days  
        var age = {};
        var ageString = "";
        //get years  
        let yearAge = currentYear - dobdobYear;
        //get months  
        if (currentMonth >= dobdobMonth)
            //get months when current month is greater  
            var monthAge = currentMonth - dobdobMonth;
        else {
            yearAge--;
            var monthAge = 12 + currentMonth - dobdobMonth;
        }
        //get days  
        if (currentDate >= dobdobMonth)
            //get days when the current date is greater  
            var dateAge = currentDate - dobdobMonth;
        else {
            monthAge--;
            var dateAge = 31 + currentDate - dobdobMonth;
            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }
        //group the age in a single variable  
        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };
        let ageageString = '';
        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
            ageageString = age.years + " yr, " + age.months + "m";
        else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
            ageString = age.days + "days";
        //when current month and date is same as birth date and month  
        else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
            ageageString = age.years + "yr" + "0m";
        else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
            ageageString = age.years + "y," + age.months + " m";
        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
            ageageString = age.months + "m";
        else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
            ageageString = age.years + "y,0m";
        else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
            ageageString = age.months + "m";
        //  
        //display the calculated age  
        return ageageString;
    }
    checkFormValid() {
        //  
        let formValid = true;
        let totalForms = this.formGroupList.get('formGroupPages');
        if (totalForms.controls[this.currPage - 1].invalid) {
            formValid = false;
        }
        if (formValid || (this.viewstatus == 2)) {
            this.navigateNextPage(1);
        }
        else {
            this.alertService.warning('form is invalid');
            this.issubmitted = true;
        }
    }
};
AwcFormPage.ctorParameters = () => [
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService }
];
AwcFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-awc-form',
        template: _raw_loader_awc_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_awc_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AwcFormPage);



/***/ }),

/***/ 82939:
/*!*******************************************************!*\
  !*** ./src/app/pages/awc/awc-form/awc-form.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background:transparent !important;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.subBtn {\n  color: white;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n}\n\n.submit {\n  background-color: #F96C94;\n  color: white;\n  text-align: center;\n  width: 30%;\n  padding: 6px;\n  border-radius: 12px;\n}\n\n.divsub {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 5px;\n}\n\n.quesRow {\n  background-color: #F7F7F7;\n  width: 100%;\n  border-radius: 12px;\n  margin-top: 8px;\n}\n\n.mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 15px;\n}\n\n.p-5p {\n  padding: 5px;\n}\n\n.card-align {\n  margin: 0 !important;\n}\n\n.userlabel {\n  zoom: 1.5;\n}\n\n.text-white {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3Yy1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Msa0JBQUE7RUFDQyxtQkFBQTtBQUdOOztBQURBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFMQTtFQUNJLFlBQUE7QUFRSjs7QUFMQTtFQUNJLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxTQUFBO0FBU0o7O0FBTkE7RUFDSSxZQUFBO0FBU0oiLCJmaWxlIjoiYXdjLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uYnRuRGl2e1xyXG4gICAgd2lkdGg6MTAwJSA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uc3ViQnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk2Qzk0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLmRpdnN1YntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnJhZGlve1xyXG4gICAgcGFkZGluZy1yaWdodDo0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHhcclxufVxyXG4ucXVlc1Jvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLm1haW5MYWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkE4Qjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5wLTVwIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNhcmQtYWxpZ24ge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXJsYWJlbCB7XHJcbiAgICB6b29tOiAxLjU7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ 84807:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/awc-form/awc-form.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Anganwadi Screening</div>\r\n      <!-- <div class=\"ion-text-wrap floatLabel\">\r\n      ( {{AcYears}} - {{phaseName}} )\r\n      </div> -->\r\n      <div class=\"ion-text-wrap floatLabel\" style=\"font-size: 13px;\">\r\n        <!-- <ion-icon class=\"userlabel\" ></ion-icon> -->\r\n        {{awcCode}} &nbsp; &nbsp;( {{AcYears}} - {{phaseName}} )\r\n      </div>\r\n      <!-- <div class=\"ion-text-wrap\" (click)=\"onSync()\">get latest Ques</div> -->\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n       </ion-icon>\r\n   </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"margin:20px\">\r\n    <div class=\"mainLable\"> \r\n      <h6 *ngIf=\"paramData\">Name: {{paramData.Childname}}</h6>\r\n      <h6 *ngIf=\"paramData\">Age : {{ageCalculator(paramData.ChildDob)}}</h6>\r\n      <h6 *ngIf=\"paramData\">Gender :{{paramData.Gender==1?'Male':'Female'}}</h6>\r\n    </div>\r\n    <!-- <div class=\"mainLable\"> \r\n      <ion-label>Question & Answer</ion-label>\r\n    </div> -->\r\n  <ion-card class=\"card-align ion-card-margin\" >\r\n    <div class=\"staffList_Content bg_lightBlue mt-3\">\r\n        <div class=\"container\">\r\n            <form [formGroup]=\"formGroupList\"> \r\n                    <div formArrayName=\"formGroupPages\">\r\n                        <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n                            <div formGroupName=\"{{i}}\">\r\n                                <div formArrayName=\"grandParentFA\" *ngIf=\"(i+1)==currPage\">\r\n                                    <app-aws-dynamic-form1 [list]=\"list['controls'].value.value\" index=\"'0'\" [formGrp]=\"list\"\r\n                                        formArrName=\"grandParentFA\" [submitted]=\"issubmitted\" [viewstatus]=\"viewstatus\" (childDom)=\"callFromChildDom($event)\" [healthBlock]=\"healthBlockList\">\r\n                                    </app-aws-dynamic-form1>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-center gap-3\">\r\n                        <ion-button class=\"btn_lightRed border-0 rounded-0 text-white\" (click)=\"navigatePreviousPage()\" *ngIf=\"currPage>1\">Previous</ion-button>\r\n                        <!-- <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"saveAll(currPage)\">Submit</ion-button> -->\r\n                        <ion-button class=\"btn_lightRed border-0 rounded-0 text-white\" (click)=\"saveAll(currPage)\" *ngIf=\"(currPage == jsonList.length && (this.editable != 'View') && viewstatus == 1) || (!nextPageButton && currPage == 1 && viewstatus == 1)\">Submit</ion-button>\r\n                        <ion-button class=\"btn_lightRed border-0 rounded-0 text-white\" (click)=\"checkFormValid()\" *ngIf=\"jsonList.length>1 && !(jsonList.length==currPage) && (nextPageButton || currPage != 1)\">Next </ion-button>\r\n                    </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</ion-card>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_awc_awc-form_awc-form_module_ts-es2015.js.map