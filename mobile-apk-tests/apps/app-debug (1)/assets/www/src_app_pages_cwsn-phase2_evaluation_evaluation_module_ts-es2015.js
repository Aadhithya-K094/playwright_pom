(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_evaluation_evaluation_module_ts"],{

/***/ 20051:
/*!***************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/evaluation/evaluation-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationPageRoutingModule": function() { return /* binding */ EvaluationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _evaluation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluation.page */ 43376);




const routes = [
    {
        path: '',
        component: _evaluation_page__WEBPACK_IMPORTED_MODULE_0__.EvaluationPage
    }
];
let EvaluationPageRoutingModule = class EvaluationPageRoutingModule {
};
EvaluationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EvaluationPageRoutingModule);



/***/ }),

/***/ 76664:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/evaluation/evaluation.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationPageModule": function() { return /* binding */ EvaluationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _evaluation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluation-routing.module */ 20051);
/* harmony import */ var _evaluation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluation.page */ 43376);







let EvaluationPageModule = class EvaluationPageModule {
};
EvaluationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _evaluation_routing_module__WEBPACK_IMPORTED_MODULE_0__.EvaluationPageRoutingModule
        ],
        declarations: [_evaluation_page__WEBPACK_IMPORTED_MODULE_1__.EvaluationPage]
    })
], EvaluationPageModule);



/***/ }),

/***/ 43376:
/*!*****************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/evaluation/evaluation.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvaluationPage": function() { return /* binding */ EvaluationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_evaluation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./evaluation.page.html */ 4246);
/* harmony import */ var _evaluation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evaluation.page.scss */ 940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client/utilities */ 22560);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
















let EvaluationPage = class EvaluationPage {
    constructor(router, http, eRef, renderer, route, formBuilder, cwsnService, alertService, networkService, sqliteDB, ionicstorage, userSessionService) {
        this.router = router;
        this.http = http;
        this.eRef = eRef;
        this.renderer = renderer;
        this.route = route;
        this.formBuilder = formBuilder;
        this.cwsnService = cwsnService;
        this.alertService = alertService;
        this.networkService = networkService;
        this.sqliteDB = sqliteDB;
        this.ionicstorage = ionicstorage;
        this.userSessionService = userSessionService;
        this.InterventionList = [];
        this.qstnArray = [];
        this.assessmentList = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe("en-US");
        this.interVenList = [];
        this.countVal = 0;
        this.class_id = '';
        this.supportList = [
            { label: 'Adaptation in the School and Class Room Required', value: 1 },
            { label: 'Home-Based', value: 2 },
            { label: 'School + Center', value: 3 },
            { label: 'Home + Center', value: 4 },
            { label: 'No Therapeutic Intervention', value: 5 },
        ];
        this.stuFundData = [];
    }
    ngOnInit() {
        this.stars = [0, 1, 2, 3, 4];
        this.messages = [];
        this.initialValidators();
    }
    ionViewDidEnter() {
        this.ratting = [
            { label: '0', value: '0', rate: '' },
            { label: '1', value: '1', rate: '' },
            { label: '2', value: '2', rate: '' },
            { label: '3', value: '3', rate: '' },
            { label: '4', value: '4', rate: '' }
        ];
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        this.user_id = this.userSessionService.emis_username();
        this.route.queryParams.subscribe(data => {
            this.allStudentData = JSON.parse(data.item);
        });
        this.routeData = this.route.snapshot;
        this.title = this.routeData.queryParams.title;
        this.mode = this.routeData.queryParams.mode;
        this.ionicstorage.getData('studentData').then((studData) => {
            this.studentData = studData;
            this.studName = studData.Name;
            this.schlId = studData.SchlId;
            this.studId = studData.studId;
            this.class_id = studData.Class ? String(studData.Class) : '';
            this.stuFundData = [];
            this.ionicstorage.getData('stuFunData').then((stuFunData) => {
                this.stuFundData = stuFunData;
                this.checkFunlocalDB();
            });
        });
    }
    checkFunlocalDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.interventionForm.controls.headingAry.clear();
            let assIntTemp = [];
            let assquery = 'SELECT * FROM fun_assessment_qstns';
            this.sqliteDB.executeQuery(assquery).then(res1 => {
                if (res1.rows.length > 0) {
                    for (var i = 0; i < res1.rows.length; i++) {
                        assIntTemp.push(res1.rows.item(i));
                    }
                    let query = 'SELECT * FROM stud_fun_assessment' +
                        ' WHERE user_id = "' + this.user_id + '"' +
                        ' AND stud_id = "' + this.studId + '"';
                    this.sqliteDB.executeQuery(query).then((res) => {
                        this.funAssStudDetails = [];
                        if (res.rows.length > 0) {
                            let asstemp = [];
                            for (var i = 0; i < res.rows.length; i++) {
                                let assRes = res.rows.item(i);
                                assRes.q_val = assRes.q_val.split(",");
                                let accFilterData = assIntTemp.filter((key) => {
                                    key.q_val = assRes.q_val;
                                    // return key.q_id == assRes.q_id && assRes.q_val.includes(key.choice_id.toString()) && this.class_id;
                                    return key.q_id == assRes.q_id && assRes.q_val.includes(key.choice_id.toString());
                                });
                                asstemp = [...accFilterData, ...asstemp];
                            }
                            ;
                            this.funAssStudDetails = asstemp;
                            this.checkAssementLocal();
                        }
                        else {
                            this.funAssStudDetails = [];
                            this.getFunDatafromServer();
                        }
                    });
                }
            });
        });
    }
    getFunDatafromServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currNetWrkSts == 0) {
                this.cwsnService.getStudAssDetails(this.user_id, this.studId).subscribe(res => {
                    if (res.dataStatus == true) {
                        if (res.result.length > 0) {
                            this.funServerData = res.result;
                            this.insertStudAssDataLocal(res.result, 3);
                        }
                        else {
                            this.funServerData = [];
                        }
                    }
                    else {
                        this.funServerData = [];
                    }
                });
            }
            else {
                // this.makingFormArray();
            }
        });
    }
    insertStudAssDataLocal(submitArray, status) {
        let delQuery = 'DELETE FROM stud_fun_assessment' +
            ' WHERE user_id = "' + this.user_id + '"' +
            ' AND stud_id = "' + this.studId + '"';
        this.sqliteDB.executeQuery(delQuery).then(res => {
            let sqlArray = [];
            submitArray.forEach(element => {
                sqlArray.push(['INSERT INTO stud_fun_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,domain_name,subdomain_id,q_id,q_val,date,q_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.IndxId, element.userId, element.schlId, element.studId, element.domainId, element.domainName, element.subDomainId, element.qstnId, element.qstnVal, this.pipe.transform(new Date(), "yyyy-MM-dd"), status]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                this.checkFunlocalDB();
            });
        });
    }
    getInterventionList() {
        let intervention_json = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.cwsn_intervensions_phase2;
        debugger;
        this.http.get(intervention_json).subscribe((data) => {
            if (data.cwsn_inter_phase2.length > 0) {
                this.insertInterventionData(data.cwsn_inter_phase2);
            }
            else {
                this.alertService.warning('No Interventions Found');
            }
        });
    }
    headerAccord(i) {
        if (this.indexVal == i) {
            this.indexVal = '';
        }
        else {
            this.indexVal = i;
        }
    }
    skillheaderAccord(form, val) {
        form.patchValue({
            isOpen: !val
        });
    }
    setStudentLevel(rate, xval, ival, jval, kval, form) {
        for (let i = 0; i < this.interventionForm.value.headingAry.length; i++) {
            for (let j = 0; j < this.interventionForm.value.headingAry[i].questionAry.length; j++) {
                for (let k = 0; k < this.interventionForm.value.headingAry[i].questionAry[j].optionAry.length; k++) {
                    if (i == ival && j == jval && k == kval) {
                        this.assessmentList.controls[i]['controls'].questionAry.controls[j]['controls'].optionAry.controls[k]['controls'].rate_val.setValue(rate.value);
                    }
                    else {
                    }
                }
            }
        }
        ;
        if (rate.value > 2) {
            form.patchValue({
                goal_val_id: false
            });
        }
    }
    setGoal(goalVal, ival, jval, kval) {
        if (goalVal.checked == true) {
            this.assessmentList.controls[ival]['controls'].questionAry.controls[jval]['controls'].optionAry.controls[kval]['controls'].goal_val.setValue(1);
        }
        else {
            this.assessmentList.controls[ival]['controls'].questionAry.controls[jval]['controls'].optionAry.controls[kval]['controls'].goal_val.setValue(0);
        }
        // this.assessmentList.controls[ival]['controls'].questionAry.controls[jval]['controls'].optionAry.controls[kval]['controls'].goal_val.updateValueandValidity();
    }
    //Initial form validation 
    initialValidators() {
        this.interventionForm = this.formBuilder.group({
            headingAry: this.formBuilder.array([]),
            support: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
        });
    }
    lanChange(language) {
        if (language == 'English') {
            this.language = 'Tamil';
        }
        else {
            this.language = 'English';
        }
    }
    checkAssementLocal() {
        let query = 'SELECT * FROM intervention_qstns';
        this.sqliteDB.executeQuery(query).then(res => {
            if (res.rows.length > 0) {
                this.funAssStudDetails;
                this.interVenList = [];
                for (var i = 0; i < res.rows.length; i++) {
                    this.interVenList.push(res.rows.item(i));
                }
                ;
                this.interVenList = this.interVenList.filter(obj => {
                    let clsSplit = obj.age_category ? obj.age_category.split(",") : [];
                    return clsSplit.includes(this.class_id);
                });
                this.domainArray = [];
                for (let i = 0; i < this.funAssStudDetails.length; i++) {
                    let item = this.funAssStudDetails[i];
                    let idx = this.domainArray.findIndex(obj => { return obj.domain_id == item.domain_id; });
                    if (idx != -1) {
                        this.domainArray[idx].intervenList.push(item);
                    }
                    else {
                        let obj = {
                            domain_id: item.domain_id,
                            domain_name: item.domain_name,
                            intervenList: [item]
                        };
                        this.domainArray.push(obj);
                    }
                }
                ;
                this.interventionForm.controls["support"].setValue('');
                this.interventionForm.controls['support'].updateValueAndValidity();
                this.checklocalDB();
            }
            else {
                this.getInterventionList();
            }
            ;
        });
    }
    ;
    checklocalDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let query;
            query = 'SELECT * FROM stud_int_assessment' +
                ' WHERE user_id = "' + this.user_id + '"' +
                ' AND stud_id = "' + this.studId + '"';
            this.assStudDetails = [];
            yield this.sqliteDB.executeQuery(query).then((res) => {
                if (res.rows.length > 0) {
                    let asstemp = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        asstemp.push(res.rows.item(i));
                    }
                    ;
                    debugger;
                    this.assStudDetails = asstemp;
                    this.makingFormArray();
                }
                else {
                    this.assStudDetails = [];
                    this.getDatafromServer();
                }
            });
        });
    }
    getDatafromServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.currNetWrkSts == 0) {
                this.cwsnService.getStudInterventionDetails(this.user_id, this.studId).subscribe(res => {
                    if (res.dataStatus == true) {
                        if (res.result.length > 0) {
                            this.insertStudInterDataLocal(res.result, 3);
                        }
                        else {
                            this.makingFormArray();
                        }
                    }
                    else {
                        this.makingFormArray();
                    }
                });
            }
            else {
                this.makingFormArray();
            }
        });
    }
    makingFormArray() {
        // this.domainArray = [...new Map(this.assessmentQstnList.map(item =>    
        //   [item['domain_id'], item])).values()];
        // if (this.domainArray.length > 0) {
        //   this.domainFormDetails(this.domainArray);
        // } else {
        // }
        this.domainFormDetails();
    }
    groupByQstn(qstnList) {
        var helper = {};
        this.qstnArray.push(qstnList.reduce(function (r, o) {
            var key = o.domain_id + '-' + o.skills + '-' + o.sub_skills;
            if (!helper[key]) {
                helper[key] = Object.assign({}, o); // create a copy of o
                r.push(helper[key]);
            }
            else {
                helper[key].used += o.used;
                helper[key].instances += o.instances;
            }
            return r;
        }, []));
    }
    //set form values for yearly leaves
    domainFormDetails() {
        this.countVal = 0;
        this.assessmentList = [];
        this.qstnArray = [];
        this.interventionForm.controls.headingAry.clear();
        this.assessmentList = this.interventionForm.controls.headingAry;
        debugger;
        for (let i = 0; i < this.domainArray.length; i++) {
            let qstnIndex = [];
            let finalInterVen = [];
            let choiceInt = [...new Map(this.domainArray[i].intervenList.map(item => [item['choice_intervension'], item])).values()];
            for (let j = 0; j < choiceInt.length; j++) {
                if (choiceInt[j].choice_intervension > 0) {
                    this.interVenList.forEach(ele => {
                        ele.domain_id = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_12__.cloneDeep)(choiceInt[j].domain_id);
                        ele.domain_name = (0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_12__.cloneDeep)(choiceInt[j].domain_name);
                        if (choiceInt[j].choice_intervension == ele.intervention_type_id) {
                            qstnIndex.push((0,_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_12__.cloneDeep)(ele));
                        }
                    });
                }
            }
            ;
            setTimeout(() => {
                this.assessmentList.push(this.formBuilder.group({
                    domain_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.domainArray[i].domain_id, null),
                    domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.domainArray[i].domain_name, null),
                    subdomain_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.domainArray[i].subdomain_id, null),
                    sub_domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.domainArray[i].sub_domain, null),
                    questionAry: this.formBuilder.array([]),
                    isHide: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false)
                }));
                this.groupByQstn(qstnIndex);
                this.questionList = this.assessmentList.controls[i]['controls'].questionAry;
                this.assessmentList.controls[i].patchValue({
                    isHide: this.qstnArray[i].length > 0 ? false : true
                });
                this.domainArray[i].isHide = this.qstnArray[i].length > 0 ? false : true;
                if (!(this.interventionForm.value.headingAry[i].isHide)) {
                    this.countVal = this.countVal + 1;
                }
                if (this.countVal == 0) {
                    let stuQstnIndex = [];
                    if (this.assStudDetails.length > 0) {
                        stuQstnIndex = this.assStudDetails.filter((key) => key.user_id == this.user_id && key.stud_id == this.studId);
                    }
                    else {
                        stuQstnIndex = [];
                    }
                    if (stuQstnIndex.length > 0) {
                        if (stuQstnIndex[0].support != '' && stuQstnIndex[0].support != null && stuQstnIndex[0].support != 0) {
                            this.interventionForm.controls['support'].setValue(stuQstnIndex[0].support);
                        }
                        else {
                            this.interventionForm.controls['support'].setValue(5);
                        }
                    }
                    else {
                        this.interventionForm.controls['support'].setValue(5);
                    }
                    this.interventionForm.controls['support'].updateValueAndValidity();
                }
                for (let j = 0; j < this.qstnArray[i].length; j++) {
                    this.assessmentList.controls[i]['controls'];
                    let question = this.qstnArray[i][j];
                    let optnIndex = qstnIndex.filter((key) => key.domain_id == question.domain_id && (key.skills == question.skills && key.sub_skills == question.sub_skills));
                    this.questionList.push(this.formBuilder.group({
                        intervention_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(question.intervention_type_id, null),
                        intervention_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(question.intervention_type, null),
                        intervension: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(question.intervension, null),
                        intervension_tamil: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(question.intervension_tamil, null),
                        skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(question.skills, null),
                        sub_skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(question.sub_skills, null),
                        optionAry: this.formBuilder.array([]),
                        isOpen: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(true)
                    }));
                    this.optionList = this.questionList.controls[j]['controls'].optionAry;
                    // for (let k = 0; k < optnIndex.length; k++) {
                    for (let k = 0; k < optnIndex.length; k++) {
                        let option = optnIndex[k];
                        let stuQstnIndex = [];
                        if (this.assStudDetails.length > 0) {
                            stuQstnIndex = this.assStudDetails.filter((key) => key.user_id == this.user_id && key.stud_id == this.studId && key.intervension_idx_id == option.intervension_idx_id);
                        }
                        else {
                            stuQstnIndex = [];
                        }
                        let indexId;
                        let goalVal;
                        let RateVal;
                        if (stuQstnIndex.length > 0) {
                            if (stuQstnIndex[0].support != '' && stuQstnIndex[0].support != null && stuQstnIndex[0].support != 0) {
                                this.interventionForm.controls['support'].setValue(stuQstnIndex[0].support);
                            }
                            else {
                                this.interventionForm.controls['support'].setValue('');
                            }
                            this.interventionForm.controls['support'].updateValueAndValidity();
                            if (stuQstnIndex.length > 0) {
                                indexId = stuQstnIndex[0].index_id;
                                goalVal = parseInt(stuQstnIndex[0].goal_val);
                                RateVal = stuQstnIndex[0].rate_val;
                            }
                            else {
                                indexId = '';
                                goalVal = false;
                                RateVal = null;
                            }
                        }
                        else {
                            indexId = '';
                            goalVal = false;
                            RateVal = null;
                        }
                        ;
                        this.optionList.push(this.formBuilder.group({
                            index_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(indexId, null),
                            intervension_idx_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(option.intervension_idx_id, null),
                            intervention_type_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(option.intervention_type_id, null),
                            intervention_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(option.intervention_type, null),
                            goal: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(option.goal, null),
                            goal_tamil: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(option.goal_tamil, null),
                            rate_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(RateVal, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
                            goal_val_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(goalVal, null),
                            goal_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(goalVal, null),
                            inter_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(option.inter_status, null),
                        }));
                    }
                    if (this.questionList.length > 0) {
                        this.countVal = this.countVal + 1;
                    }
                }
            }, 500);
        }
    }
    getTabs(event) {
        // this.tabsData = event.target.value
    }
    saveGoalSettings() {
        let submitArray = [];
        if (this.countVal == 0) {
            let index_id;
            if (this.assStudDetails.length > 0) {
                index_id = this.assStudDetails[0].index_id;
            }
            else {
                index_id = '';
            }
            submitArray.push({
                id: index_id,
                user_id: this.user_id,
                school_id: this.schlId,
                student_id: this.studId,
                domain_id: 0,
                domain_name: 0,
                subdomain_id: 0,
                intervension_idx_id: 0,
                rating: 0,
                goal: 0,
                support_in: this.interventionForm.value.support,
                evaluation_type: 0,
                // currentDate: this.pipe.transform(new Date(), "yyyy-MM-dd"), // "current Date",
                status: 1,
            });
        }
        else {
            for (let i = 0; i < this.interventionForm.value.headingAry.length; i++) {
                if (!(this.interventionForm.value.headingAry[i].isHide)) {
                    for (let j = 0; j < this.interventionForm.value.headingAry[i].questionAry.length; j++) {
                        for (let k = 0; k < this.interventionForm.value.headingAry[i].questionAry[j].optionAry.length; k++) {
                            let goalVal;
                            if (this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].goal_val != false && this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].goal_val != 0 && this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].goal_val != null && this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].goal_val != undefined) {
                                goalVal = 1;
                            }
                            else {
                                goalVal = 0;
                            }
                            submitArray.push({
                                id: this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].index_id,
                                user_id: this.user_id,
                                school_id: this.schlId,
                                student_id: this.studId,
                                domain_id: this.interventionForm.value.headingAry[i].domain_id,
                                domain_name: this.interventionForm.value.headingAry[i].domain,
                                subdomain_id: this.interventionForm.value.headingAry[i].subdomain_id,
                                intervension_idx_id: this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].intervension_idx_id,
                                rating: this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].rate_val,
                                goal: goalVal,
                                support_in: this.interventionForm.value.support,
                                evaluation_type: this.interventionForm.value.headingAry[i].questionAry[j].optionAry[k].intervention_type_id,
                                // currentDate: this.pipe.transform(new Date(), "yyyy-MM-dd"), // "current Date",
                                status: 1,
                            });
                        }
                    }
                }
            }
        }
        let goal_count = 0;
        if (this.domainArray.length > 0) {
            for (let i = 0; i < this.domainArray.length; i++) {
                let goalFilterIndex = submitArray.filter((key) => key.goal != 0 && key.domain_id == this.domainArray[i].domain_id && !(key.isHide));
                if ((goalFilterIndex.length == 0 || goalFilterIndex.length > 10) && !this.domainArray[i].isHide) {
                    goal_count = goal_count + 1;
                }
            }
        }
        let goalFilterIndex = submitArray.filter((key) => key.goal != 0 && this.domainArray);
        if (this.interventionForm.valid) {
            if (goal_count == 0) {
                this.assSave = false;
                let params = {
                    records: submitArray
                };
                let insertIndex = submitArray.filter((key) => key.IndxId != '' && key.domainId);
                if (insertIndex.length > 0) {
                    this.uptStudAssDataLocal(submitArray, 3);
                }
                else {
                    this.insertStudInterDataLocal(submitArray, 2);
                }
                setTimeout(() => {
                    if (this.currNetWrkSts == 0) {
                        this.cwsnService.saveStudInterventionDetails(params).subscribe((data) => {
                            if (data.dataStatus == true) {
                                this.assSave = false;
                                if (data.result_array.length > 0) {
                                    data.result_array.forEach(element => {
                                        let uptQuery = 'UPDATE stud_int_assessment SET inter_status = 3 , index_id = "' + element.id + '"' +
                                            ' WHERE user_id = "' + this.user_id + '"' +
                                            ' AND stud_id = "' + this.studId + '"';
                                        this.sqliteDB.update(uptQuery).then(res => {
                                        });
                                    });
                                }
                                this.uptStudDomainStatus(3);
                                this.alertService.success(data.message);
                                this.goToNext();
                            }
                            else {
                                this.uptStudDomainStatus(2);
                                this.alertService.error(data.message);
                            }
                        }, error => {
                            this.alertService.error("Unable to connect to the server.  Please try after some time.");
                        });
                    }
                    else {
                        this.uptStudDomainStatus(2);
                        this.alertService.success('Data Inserted Locally.');
                        this.goToNext();
                    }
                }, 500);
            }
            else {
                this.alertService.error("You can select only Ten goals for a domain");
                this.assSave = true;
            }
        }
        else {
            this.alertService.error("Field is Required");
            this.assSave = true;
        }
    }
    uptStudDomainStatus(status) {
        // submitArray.forEach(element => {
        let uptDomainQuery = 'UPDATE stud_int_assessment SET inter_status = "' + status + '"' +
            ' WHERE stud_id = "' + this.studId + '"';
        this.sqliteDB.update(uptDomainQuery).then(res => {
        });
        // });
    }
    uptStudAssDataLocal(submitArray, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            submitArray.forEach((element) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                let uptQuery = 'UPDATE stud_int_assessment SET q_val = "' + element.qstnVal + '"' +
                    ' WHERE stud_id = "' + element.studId + '"' +
                    ' AND domain_id = "' + element.domainId + '"' +
                    ' AND subdomain_id = "' + element.subDomainId + '"' +
                    'AND q_id = "' + element.qstnId + '"';
                yield this.sqliteDB.update(uptQuery).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                }));
            }));
        });
    }
    insertStudInterDataLocal(submitArray, status) {
        let delQuery = 'DELETE FROM stud_int_assessment' +
            ' WHERE user_id = "' + this.user_id + '"' +
            ' AND stud_id = "' + this.studId + '"';
        this.sqliteDB.executeQuery(delQuery).then(res => {
            let sqlArray = [];
            submitArray.forEach(element => {
                sqlArray.push(['INSERT INTO stud_int_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,domain_name,subdomain_id,intervension_idx_id,intervention_type_id,rate_val,goal_val,support,date,inter_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.id, element.user_id, element.school_id, element.student_id, element.domain_id, element.domain_name, element.subdomain_id, element.intervension_idx_id, element.evaluation_type, parseInt(element.rating), element.goal, element.support_in, this.pipe.transform(new Date(), "yyyy-MM-dd"), 2]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                this.checklocalDB();
            });
        });
    }
    // insertStud(submitArray) {
    //   let delQuery = 'DELETE FROM stud_int_assessment' +
    //     ' WHERE user_id = "' + this.user_id + '"' +
    //     ' AND stud_id = "' + this.studId + '"';
    //   this.sqliteDB.executeQuery(delQuery).then(res => {
    //     if (res) {
    //       let sqlArray = [];
    //       submitArray.forEach(element => {
    //         sqlArray.push(['INSERT INTO stud_int_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,subdomain_id,intervension_idx_id,intervention_type_id,rate_val,goal_val,support,date,inter_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.IndxId, element.userId, element.schlId, element.studId, element.domainId, element.subDomainId, element.intervension_idx_id, element.intervention_type_id, parseInt(element.rate_val), element.goal_val, element.support, this.pipe.transform(new Date(), "yyyy-MM-dd"), 2]]);
    //       });
    //       this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
    //         this.checkAssementLocal();
    //         this.goToNext();
    //         // this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(item), 'zonleId': this.ZonalId, title: this.title, mode: this.mode } });
    //       });
    //     }
    //   });
    // }
    insertInterventionData(list) {
        let delQuery = 'DELETE FROM intervention_qstns';
        this.sqliteDB.executeQuery(delQuery).then(res => {
            let sqlArray = [];
            list.forEach(element => {
                // element.screen = 0;
                sqlArray.push(['INSERT INTO intervention_qstns VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, this.user_id, element.user, this.studId, this.allStudentData.Name, '', '', element.subdomain_idx_id, element.sub_domain, element.id, element.intervention_type_id, element.intervention_type, element.intervension, element.intervension_tamil, element.skills, element.sub_skills, element.goal, element.goal_tamil, element.inter_status, element.age_category]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                this.checkAssementLocal();
            });
        });
    }
    ;
    goToNext() {
        if (this.interventionForm.valid) {
            this.assessmentList.clear();
            this.router.navigate(['/tabs/ca-intervention'], { queryParams: { item: JSON.stringify(this.allStudentData), title: this.title, mode: this.mode } });
        }
        else {
            this.alertService.error("Field is Required");
        }
    }
    navigateBack() {
        if (this.interventionForm.valid) {
            this.assessmentList.clear();
        }
        this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(this.allStudentData), title: this.title, mode: this.mode } });
        // this.router.navigate(["/tabs/ca-domain-list"], { queryParams: { title: this.title, mode: this.mode } });
    }
};
EvaluationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService }
];
EvaluationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-evaluation',
        template: _raw_loader_evaluation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_evaluation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EvaluationPage);



/***/ }),

/***/ 940:
/*!*******************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/evaluation/evaluation.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .back {\n  background-color: #E6DDEB;\n  padding-top: 5px;\n  padding-bottom: 50px;\n}\n\nion-segment {\n  border: 1px solid white;\n  border-radius: 40px;\n  background-color: white;\n}\n\n.bredcrumb {\n  border: 2px solid #8B67B3;\n  border-radius: 40px;\n  padding: 10px;\n  margin: 20px;\n}\n\n.size {\n  font-size: 12px;\n  text-transform: lowercase;\n}\n\nion-breadcrumbs {\n  color: #8B67B3;\n  font-weight: 900;\n}\n\n.card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.radio {\n  font-size: 12px;\n  color: var(--primary-text-color);\n  font-family: none;\n}\n\n.card-align {\n  min-height: 100%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 25px;\n  background-color: #FF79B7;\n  border-radius: 10px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards .cluster-design .skill-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 25px;\n  background-color: #8B66B3;\n  border-radius: 10px;\n  margin: 7px;\n}\n\n.card-align .cards .cluster-design .skill-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  text-align: end;\n  padding: 3px;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 20px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-label .schoolnames {\n  font-size: 10px;\n}\n\n.label {\n  color: white;\n}\n\n.align {\n  text-align: center;\n}\n\n.box {\n  border: 1px solid #b9b8b8;\n  border-radius: 2px;\n  display: flex;\n  height: 20px;\n  width: 20px;\n  align-items: center;\n  justify-content: center;\n  margin: 7px;\n  line-height: 0;\n}\n\n.box:host {\n  --background: var(--ion-background-color, #532044);\n}\n\n.text {\n  font-size: 12px;\n  color: var(--primary-text-color);\n  font-weight: bold;\n  font-family: none;\n}\n\n.card-align .cards .card-design {\n  margin-right: 9px;\n  margin-left: 9px;\n  border-radius: 10px;\n  padding: 10px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: bold;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.btn {\n  text-align: center;\n  border-radius: 10px;\n}\n\n.btn-style {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n}\n\n.download {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n  border: 2px #8B66B3;\n  background-color: white !important;\n  font-size: smaller;\n}\n\n.head {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-col p {\n  margin-left: 10px;\n}\n\nh5 {\n  color: green;\n  font-weight: bold;\n}\n\n.popcard {\n  padding: 20px;\n  border-radius: 50px;\n}\n\nion-backdrop {\n  background-color: transparent !important;\n}\n\n.checkbox {\n  --checkmark-color: white;\n  text-align: center;\n}\n\n.align-middle-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n  padding: 10px;\n  width: 50px;\n}\n\nion-item {\n  --background: transparent !important;\n  color: var(--text-color-black);\n}\n\n.support-item-class {\n  background: #F0F0F0 !important;\n  color: var(--text-color-black);\n  margin: 10px !important;\n  border-radius: 15px;\n  max-width: 100% !important;\n  padding-left: 0px;\n  padding: 10px;\n}\n\n.radio-icon {\n  border-color: var(--icon-color) !important;\n}\n\n.radio-inner {\n  background: var(--icon-color) !important;\n}\n\n.stars {\n  flex: 0 0 50%;\n}\n\n.star__label {\n  flex: 0 0 50%;\n  margin: 0;\n}\n\n.star__rating__info {\n  flex: 100%;\n  min-height: 30px;\n}\n\n.star {\n  cursor: pointer;\n  width: 24px;\n  height: auto;\n  fill: white;\n  stroke: #888888;\n  transform: scale(0.8);\n  transition: transform 200ms ease-in-out;\n}\n\n.star path {\n  transition: fill 200ms ease-in-out, stroke 100ms ease-in-out;\n}\n\n.active {\n  fill: #917AFE;\n  stroke: #6747fe;\n}\n\n.select-icon {\n  color: #8B66B3 !important;\n}\n\n.cusRow {\n  padding: 0 0;\n}\n\n.isNotRated {\n  background-color: rgba(255, 0, 0, 0.06);\n}\n\n.pl-1 {\n  padding-left: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2YWx1YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7QUFDSjs7QUFpQkE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQWRKOztBQWlCQTtFQUVJLGdCQUFBO0FBZko7O0FBa0JRO0VBQ0ksOENBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUFoQlo7O0FBa0JZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFoQmhCOztBQWtCZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQWhCcEI7O0FBb0JZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBbEJoQjs7QUFvQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QUFsQnBCOztBQXNCWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBR0Esa0JBQUE7RUFDQSxpQkFBQTtBQXRCaEI7O0FBd0JnQjtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBdEJwQjs7QUEyQlE7RUFDSSxhQUFBO0FBekJaOztBQTRCUTtFQUNJLGdCQUFBO0FBMUJaOztBQStCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBNUJKOztBQXNDQTtFQUNJLGVBQUE7QUFuQ0o7O0FBc0NBO0VBQ0ksWUFBQTtBQW5DSjs7QUFzQ0E7RUFDSSxrQkFBQTtBQW5DSjs7QUFzQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBbkNKOztBQXNDQTtFQUNJLGtEQUFBO0FBbkNKOztBQXNDQTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFuQ0o7O0FBMENRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FBdkNaOztBQTBDWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQXhDaEI7O0FBMENnQjtFQUNJLGVBQUE7QUF4Q3BCOztBQTJDZ0I7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQ0FBQTtBQTFDcEI7O0FBOENZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUE1Q2hCOztBQThDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTVDcEI7O0FBaURRO0VBQ0ksYUFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUEvQ1o7O0FBcURBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQWxESjs7QUFzREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBbkRKOztBQXNEQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFuREo7O0FBc0RBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQW5ESjs7QUFzREE7RUFDSSxpQkFBQTtBQW5ESjs7QUFzREE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFuREo7O0FBc0RBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBbkRKOztBQXNEQTtFQUNJLHdDQUFBO0FBbkRKOztBQXNEQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7QUFuREo7O0FBc0RBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFuREo7O0FBc0RBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBbkRKOztBQXNEQTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7QUFuREo7O0FBc0RBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQW5ESjs7QUFzREE7RUFDSSwwQ0FBQTtBQW5ESjs7QUFzREE7RUFDSSx3Q0FBQTtBQW5ESjs7QUFzREE7RUFDSSxhQUFBO0FBbkRKOztBQXNEQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FBbkRKOztBQXNEQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQW5ESjs7QUFzREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0VBQ0EsdUNBQUE7QUFyREo7O0FBdURJO0VBQ0ksNERBQUE7QUFyRFI7O0FBeURBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUF0REo7O0FBeURBO0VBQ0kseUJBQUE7QUF0REo7O0FBeURBO0VBQ0ksWUFBQTtBQXRESjs7QUF5REE7RUFDSSx1Q0FBQTtBQXRESjs7QUF5REE7RUFDSSw2QkFBQTtBQXRESiIsImZpbGUiOiJldmFsdWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IC5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnJlZGNydW1iIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnNpemUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG5cclxuaW9uLWJyZWFkY3J1bWJzIHtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuJWNhcmQtbGF5b3V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbiVyYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMiUgMCUgMiUgNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGQyO1xyXG59XHJcblxyXG4lcmFkaW8tZ3JvdXAtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnJhZGlvIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAuY2FyZHMge1xyXG4gICAgICAgIC5jbHVzdGVyLWRlc2lnbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLmNsdXN0ZXItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc5Qjc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2tpbGwtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjY2QjM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uLW91dGVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmljb24taW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWNhcmQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4lYmFzZS1sYXlvdXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWNhcmQtb3V0ZXItZGVzaWduIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwgLnNjaG9vbG5hbWVzIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uYm94IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOWI4Yjg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uYm94Omhvc3Qge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgIzUzMjA0NCk7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtYWxpZ24ge1xyXG4gICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcblxyXG4gICAgLmNhcmRzIHtcclxuICAgICAgICAuY2FyZC1kZXNpZ24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICBAZXh0ZW5kICViYXNlLWxheW91dDtcclxuXHJcbiAgICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgLnRvdGFsQ291bnRMYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zY2hvb2xuYW1lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmltYWdlLW91dGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbn1cclxuXHJcbi5idG4tc3R5bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5kb3dubG9hZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlcjogMnB4ICM4QjY2QjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyXHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pb24tY29sIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucG9wY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuaW9uLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGlnbi1taWRkbGUtY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ibGFjayk7XHJcbn1cclxuXHJcbi5zdXBwb3J0LWl0ZW0tY2xhc3Mge1xyXG4gICAgYmFja2dyb3VuZDogI0YwRjBGMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItYmxhY2spO1xyXG4gICAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG4ucmFkaW8taWNvbiB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWljb24tY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yYWRpby1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhcnMge1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxufVxyXG5cclxuLnN0YXJfX2xhYmVsIHtcclxuICAgIGZsZXg6IDAgMCA1MCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zdGFyX19yYXRpbmdfX2luZm8ge1xyXG4gICAgZmxleDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zdGFyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgc3Ryb2tlOiAjODg4ODg4O1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICBwYXRoIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UtaW4tb3V0LCBzdHJva2UgMTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgZmlsbDogIzkxN0FGRTtcclxuICAgIHN0cm9rZTogZGFya2VuKCM5MTdBRkUsIDEwJSk7XHJcbn1cclxuXHJcbi5zZWxlY3QtaWNvbiB7XHJcbiAgICBjb2xvciA6ICM4QjY2QjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c1JvdyB7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbn1cclxuXHJcbi5pc05vdFJhdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMCAwIC8gNiUpO1xyXG59XHJcblxyXG4ucGwtMSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 4246:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/evaluation/evaluation.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{studName}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" (click)=\"lanChange(language)\">\r\n      <img *ngIf=\"language == 'Tamil'\" src=\"./../../../../../../assets/icons/cwsn/English.svg\">\r\n      <img *ngIf=\"language == 'English'\" src=\"./../../../../../../assets/icons/cwsn/Tamil.svg\">\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"back\">\r\n    <div class=\"card-align ion-card-margin\"> \r\n\r\n      <form [formGroup]=\"interventionForm\">\r\n        <div formArrayName=\"headingAry\">\r\n          <div class=\"cards\">\r\n            <ng-container *ngFor=\"let item of interventionForm.get('headingAry')['controls']; let i = index;\"\r\n              [formGroupName]=\"i\">\r\n              <!-- {{item.value | json}} -->\r\n              <ion-card class=\"cluster-design ion-card-margin-top-bottom\" [hidden]=\"(item.value.isHide)\">\r\n\r\n                <div class=\"cluster-text\" (click)=\"headerAccord(i)\">\r\n                  <span>{{item.value.domain}}</span>\r\n                  <div class=\"icon-outer\">\r\n                    <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != i\"></ion-icon>\r\n                    <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == i\" name=\"remove-outline\"></ion-icon>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"indexVal == i\">\r\n                  <div formArrayName=\"questionAry\" style=\"color: var(--seconday-color-change)\">\r\n                    <div *ngFor=\"let questionItem of item.controls.questionAry.controls; let j=index\"\r\n                      formGroupName=\"{{j}}\">\r\n\r\n                      <div class=\"skill-text\" (click)=\"skillheaderAccord(questionItem,questionItem.value.isOpen)\"\r\n                        *ngIf=\"(questionItem.value.skills != '' && questionItem.value.skills != 0) || (questionItem.value.sub_skills != '' && questionItem.value.sub_skills != 0)\">\r\n                        <span\r\n                          *ngIf=\"questionItem.value.skills != '' && questionItem.value.skills != 0\">{{questionItem.value.skills}}</span>\r\n\r\n                        <span\r\n                          *ngIf=\"(questionItem.value.skills == '' || questionItem.value.skills == 0) && questionItem.value.sub_skills != '' && questionItem.value.sub_skills != 0\">{{questionItem.value.sub_skills}}</span>\r\n\r\n                        <div class=\"icon-outer\">\r\n                          <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"!questionItem.value.isOpen\"></ion-icon>\r\n                          <ion-icon class=\"icon-inner\" *ngIf=\"questionItem.value.isOpen\" name=\"remove-outline\">\r\n                          </ion-icon>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"questionItem.value.isOpen\">\r\n                        <ion-row>\r\n                          <ion-col size=\"6\">\r\n                            <div class=\"card-text\">\r\n                              <ion-label class=\"text pl-1\">Goal </ion-label>\r\n                            </div>\r\n                          </ion-col>\r\n\r\n                          <ion-col size=\"4.5\" class=\"align\">\r\n                            <ion-label class=\"text\">Rating</ion-label>\r\n                          </ion-col>\r\n\r\n                          <ion-col size=\"1.5\" class=\"text-center\">\r\n                            <ion-label class=\"text\">Action</ion-label>\r\n                          </ion-col>\r\n                        </ion-row>\r\n\r\n                        <div>\r\n                          <div formArrayName=\"optionAry\">\r\n                            <div class=\"cusRow\" style=\"padding-left: 0px\"\r\n                              *ngFor=\"let optionItem of questionItem.controls.optionAry.controls; let k=index\"\r\n                              formGroupName=\"{{k}}\">\r\n                              <div [class.isNotRated]=\"!optionItem.value.rate_val\">\r\n                                <ion-row class=\"align-items-center\" style=\"border-top:1px solid #B6B6B6\">\r\n                                  <ion-col size=\"6\">\r\n                                    <div class=\"card-text pl-1\">\r\n                                      <ion-label class=\"text\">{{k+1}}. {{optionItem.value.goal}} {{optionItem.value.goal_tamil}}\r\n                                      </ion-label>\r\n                                    </div>\r\n                                  </ion-col> \r\n\r\n                                  <ion-col size=\"4.5\">\r\n                                    <ion-row class=\"align-middle-center\">\r\n                                      <ng-container *ngFor=\"let boxItem of ratting; index as x\">\r\n                                        <div class=\"box\"\r\n                                          [ngStyle]=\"{'background': ((optionItem.value.rate_val != '') && (optionItem.value.rate_val == boxItem.value) && (optionItem.value.rate_val < 3)) ? '#D46588' : (optionItem.value.rate_val != '' && optionItem.value.rate_val > 2 && optionItem.value.rate_val == boxItem.value) ? '#0DCB00' : '#F1F1F1','color': optionItem.value.rate_val == '' ? 'var(--primary-text-color)' : '#000'}\"\r\n                                          (click)=\"setStudentLevel(boxItem,x,i,j,k,optionItem)\">{{boxItem.label}}</div>\r\n                                      </ng-container>\r\n                                    </ion-row>\r\n                                  </ion-col>\r\n\r\n                                  <ion-col size=\"1.5\" class=\"align-middle-center\">\r\n                                    <ion-row class=\"align-middle-center\">\r\n                                      <ion-checkbox [disabled]=\"(optionItem.value.rate_val>=3)\" class=\"checkbox\" formControlName=\"goal_val_id\"\r\n                                        (ionChange)=\"setGoal($event.detail,i,j,k)\" labelPlacement=\"end\">\r\n                                      </ion-checkbox>\r\n                                    </ion-row>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </ion-card>\r\n\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <br>\r\n \r\n        <div class=\"cards\" *ngIf=\"assessmentList?.length != 0\">\r\n          <ng-container>\r\n            <!-- {{item.value | json}} -->\r\n            <ion-card class=\"cluster-design ion-card-margin-top-bottom\">\r\n              <div class=\"skill-text\" style=\"padding:15px 25px; margin:0px\">\r\n                <span>Supported In</span>\r\n              </div>\r\n              <div>\r\n                <!-- <ion-item> -->\r\n                <ion-row>\r\n                  <ion-col size=\"12\" >\r\n                    <ion-select class=\"support-item-class\" ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"support\" disabled=\"{{countVal != 0 ? 'false' : 'true'}}\">\r\n                      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of supportList\"> {{item.label}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <!-- </ion-item> -->\r\n                <ion-row>\r\n                  <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n                      padding-right: 10px;\"\r\n                    *ngIf=\"interventionForm.controls['support'].hasError('required') && (interventionForm.controls['support'].dirty || interventionForm.controls['support'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </div>\r\n            </ion-card>\r\n          </ng-container>\r\n        </div>\r\n      </form>\r\n\r\n      <ion-row *ngIf=\"assessmentList?.length != 0\">\r\n        <ion-col size=\"12\" class=\"btn\">\r\n          <ion-button size=\"default\" class=\"btn-style\" (click)=\"saveGoalSettings()\">Submit</ion-button>\r\n          <!-- <ion-button size=\"default\" class=\"btn-style\" (click)=\"goToNext()\">Next</ion-button> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- no data container{{assessmentList}} : assessmentList {{countVal}} : countVal -->\r\n    <div *ngIf=\"assessmentList.length == 0\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"no-data\">\r\n          <ion-label>\r\n            No Data Found\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn-phase2_evaluation_evaluation_module_ts-es2015.js.map