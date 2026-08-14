(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_assessment-questions_assessment-questions_module_ts"],{

/***/ 77873:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/assessment-questions/assessment-questions-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentQuestionsPageRoutingModule": function() { return /* binding */ AssessmentQuestionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _assessment_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assessment-questions.page */ 96760);




const routes = [
    {
        path: '',
        component: _assessment_questions_page__WEBPACK_IMPORTED_MODULE_0__.AssessmentQuestionsPage
    }
];
let AssessmentQuestionsPageRoutingModule = class AssessmentQuestionsPageRoutingModule {
};
AssessmentQuestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AssessmentQuestionsPageRoutingModule);



/***/ }),

/***/ 3464:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/assessment-questions/assessment-questions.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentQuestionsPageModule": function() { return /* binding */ AssessmentQuestionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _assessment_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assessment-questions-routing.module */ 77873);
/* harmony import */ var _assessment_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assessment-questions.page */ 96760);







let AssessmentQuestionsPageModule = class AssessmentQuestionsPageModule {
};
AssessmentQuestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _assessment_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssessmentQuestionsPageRoutingModule
        ],
        declarations: [_assessment_questions_page__WEBPACK_IMPORTED_MODULE_1__.AssessmentQuestionsPage]
    })
], AssessmentQuestionsPageModule);



/***/ }),

/***/ 96760:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/assessment-questions/assessment-questions.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentQuestionsPage": function() { return /* binding */ AssessmentQuestionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_assessment_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assessment-questions.page.html */ 85219);
/* harmony import */ var _assessment_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assessment-questions.page.scss */ 12658);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);














let AssessmentQuestionsPage = class AssessmentQuestionsPage {
    constructor(navCtrl, router, route, formBuilder, cwsnService, alertService, networkService, sqliteDB, ionicstorage, userSessionService, cdref) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.cwsnService = cwsnService;
        this.alertService = alertService;
        this.networkService = networkService;
        this.sqliteDB = sqliteDB;
        this.ionicstorage = ionicstorage;
        this.userSessionService = userSessionService;
        this.cdref = cdref;
        // schoolList: any = [];
        // items: any = [];
        this.itemHeight = 0;
        this.openpopup = true;
        this.assessmentList = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe("en-US");
        this.assessmentQstnList = [];
        this.qstnArray = [];
        this.serverData = [];
        this.menuValue = '';
        // this.items = [
        //   { expanded: false },
        //   { expanded: false },
        //   { expanded: false },
        //   { expanded: false },
        //   { expanded: false },
        //   { expanded: false },
        //   { expanded: false },
        //   { expanded: false },
        //   { expanded: false }
        // ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.assessmentList = [];
        console.log('ionViewDidEnter', this.assessmentList);
        // this.assessmentList.clear();
        console.log('Assessment Questions ionViewDidEnter');
        this.user_id = this.userSessionService.emis_username();
        this.ionicstorage.getData('getUserDetailsCwsn').then((userData) => {
            console.log('userData', userData);
            if (userData == 1) {
                this.usertype = 'SpecialEdu';
            }
            else {
                this.usertype = 'Therapist';
            }
            console.log('usertype', this.usertype);
        });
        this.ionicstorage.getData('studentData').then((studData) => {
            console.log('studData', studData);
            this.studentData = studData;
            this.studName = studData.Name;
            this.schlId = studData.SchlId;
            this.studId = studData.studId;
            this.initialValidators();
            this.checkAssementLocal();
        });
        this.route.queryParams.subscribe(data => {
            if (data) {
                this.domainDetails = JSON.parse(data.item);
                this.domainName = this.domainDetails.domain_name;
                this.menuValue = data.menuValue;
            }
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title;
            this.mode = this.routeData.queryParams.mode;
            this.language = 'Tamil';
        });
        // this.mode = this.routeData.queryParams.mode;
    }
    //Initial form validation 
    initialValidators() {
        //Assessment Form
        this.assessmentForm = this.formBuilder.group({
            headingAry: this.formBuilder.array([]),
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
        console.log('inside checkAssementLocal', this.user_id);
        // let query = 'SELECT * FROM fun_assessment_qstns';
        let query = 'SELECT * FROM fun_assessment_qstns' +
            ' WHERE user_name = "' + this.usertype + '"' +
            // ' AND StuId = "' + this.studId + '"' +
            ' AND domain_id = "' + this.domainDetails.domain_id + '"';
        this.sqliteDB.executeQuery(query).then(res => {
            console.log('local data=', res, 'local DB length', res.rows.length, 'studentData', this.studentData);
            if (res.rows.length > 0) {
                let temp = [];
                for (var i = 0; i < res.rows.length; i++) {
                    console.log('local DB item', res.rows.item(i));
                    // let isDisabilityFound = JSON.parse("[" + res.rows.item(i).disability_type + "]").some( ai => this.studentData.screen_disability.includes(ai));
                    const aV = res.rows.item(i).disability_type.split(',').map(e => +e);
                    const bV = this.studentData.screen_disability.split(',').map(e => +e);
                    let isDisabilityFound = bV.some(v => aV.indexOf(v) !== -1);
                    console.log('isDisabilityFound', isDisabilityFound);
                    if (isDisabilityFound == true) {
                        temp.push(res.rows.item(i));
                    }
                    else {
                        console.log('No Questions Found for the disabilities');
                    }
                }
                this.assessmentQstnList = temp;
                console.log('assessmentQstnList', this.assessmentQstnList);
                this.checklocalDB();
            }
            else {
                this.alertService.warning('No Questions Found');
            }
            ;
        });
    }
    ;
    checklocalDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log('checkLocalDB');
            let query;
            query = 'SELECT * FROM stud_fun_assessment' +
                ' WHERE user_id = "' + this.user_id + '"' +
                ' AND stud_id = "' + this.studId + '"' +
                ' AND domain_id = "' + this.domainDetails.domain_id + '"';
            yield this.sqliteDB.executeQuery(query).then((res) => {
                console.log('checkLocalDB ass res', res, 'length', res.rows.length);
                this.assStudDetails = [];
                if (res.rows.length > 0) {
                    console.log('Inside if', res.rows.item(i));
                    let asstemp = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        asstemp.push(res.rows.item(i));
                    }
                    this.assStudDetails = asstemp;
                    console.log('getFormArray');
                    this.makingFormArray();
                }
                else {
                    console.log('Inside else ');
                    this.assStudDetails = [];
                    this.getDatafromServer();
                    // this.getFormArray();
                }
            });
        });
    }
    getDatafromServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            // console.log('inside getDatafromServer')
            if (this.currNetWrkSts == 0) {
                this.cwsnService.getStudAssDomainDetails(this.user_id, this.studId, this.domainDetails.domain_id).subscribe(res => {
                    console.log('getDatafromServer', res);
                    if (res.dataStatus == true) {
                        if (res.result.length > 0) {
                            this.serverData = res.result;
                            this.insertStudAssDataLocal(res.result, 3);
                        }
                        else {
                            this.serverData = [];
                            this.makingFormArray();
                            // this.alertService.warning('No Data Found');
                            // return
                        }
                    }
                    else {
                        this.serverData = [];
                        this.makingFormArray();
                        // this.alertService.warning('No Data Found');
                    }
                });
            }
            else {
                this.makingFormArray();
            }
        });
    }
    makingFormArray() {
        this.subDomainArray = [...new Map(this.assessmentQstnList.map(item => [item['subdomain_id'], item])).values()];
        console.log('subDomainArray', this.subDomainArray);
        // setTimeout(() => {
        if (this.subDomainArray.length > 0) {
            this.SubDomainFormDetails(this.subDomainArray);
            this.tabsData = 1;
        }
        else {
            // //console.log('Else subDomainArray')
        }
    }
    groupByQstn(qstnList) {
        debugger;
        console.log('groupByQstn', qstnList);
        var helper = {};
        // this.qstnArray = [];
        this.qstnArray.push(qstnList.reduce(function (r, o) {
            // //console.log('r',r,'o',o)
            var key = o.subdomain_id + '-' + o.q_id;
            console.log('key', key);
            if (!helper[key]) {
                // //console.log('not key');
                helper[key] = Object.assign({}, o); // create a copy of o
                // //console.log('helper',helper[key])
                r.push(helper[key]);
                // //console.log('r',r)
            }
            else {
                // //console.log('key else');
                helper[key].used += o.used;
                helper[key].instances += o.instances;
                // //console.log('helper',helper[key])
            }
            return r;
        }, []));
        console.log('qstnArray', this.qstnArray);
    }
    //set form values for yearly leaves
    SubDomainFormDetails(data) {
        console.log('subDomain data', data, 'student disability type', this.studentData.screen_disability);
        this.assessmentList = [];
        this.qstnArray = [];
        // debugger
        for (let i = 0; i < data.length; i++) {
            // console.log('includes screen_disability', ( Arrays.equals(array1, array2))JSON.parse("[" + data[i].disability_type + "]")).includes(JSON.parse("[" + this.studentData.screen_disability + "]")))
            console.log('data[i].disability_type', (JSON.parse("[" + data[i].disability_type + "]")), 'this.studentData.screen_disability', JSON.parse("[" + this.studentData.screen_disability + "]"));
            // let isDisabilityFound = JSON.parse("[" + data[i].disability_type + "]").some( ai => this.studentData.screen_disability.includes(ai));
            // console.log('isDisabilityFound',isDisabilityFound);
            // if(isDisabilityFound == true) {
            this.assessmentList = this.assessmentForm.controls.headingAry;
            let qstnIndex = this.assessmentQstnList.filter((key) => key.subdomain_id == data[i].subdomain_id);
            console.log('qstnIndex', qstnIndex);
            setTimeout(() => {
                // set form values for yearly leaves
                this.assessmentList.push(this.formBuilder.group({
                    index_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', null),
                    subdomain_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(data[i].subdomain_id, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
                    sub_domain: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(data[i].sub_domain, null),
                    // questList: grpbyQstn,
                    questionAry: this.formBuilder.array([]),
                    indexVal: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(false, null),
                    // app_status: new FormControl(data[i].ApprovalStatus, null),
                }));
                debugger;
                this.groupByQstn(qstnIndex);
                // const control = <FormArray>this.assessmentList.controls[i]['controls']["questionAry"];
                this.questionList = this.assessmentList.controls[i]['controls'].questionAry;
                console.log('i', i, 'this.qstnArray[i]', this.qstnArray[i]);
                for (let j = 0; j < this.qstnArray[i].length; j++) {
                    let question = this.qstnArray[i][j];
                    console.log('question', question, 'qstnIndex', qstnIndex, 'subdomain_id', question.subdomain_id, 'q_id', question.q_id);
                    let optnIndex = qstnIndex.filter((key) => key.subdomain_id == question.subdomain_id && key.q_id == question.q_id);
                    console.log('optnIndex', optnIndex);
                    console.log('assStudDetails', this.assStudDetails);
                    let stuQstnIndex = [];
                    if (this.assStudDetails.length > 0) {
                        stuQstnIndex = this.assStudDetails.filter((key) => key.stud_id == this.studId && key.subdomain_id == question.subdomain_id && key.q_id == question.q_id);
                        console.log('stuQstnIndex', stuQstnIndex);
                    }
                    else {
                        stuQstnIndex = [];
                    }
                    //console.log('question',this.qstnArray[i][j])
                    let indexId;
                    let qstnVal;
                    if (stuQstnIndex.length > 0) {
                        console.log('inside if stuQstnIndex', stuQstnIndex, stuQstnIndex[0].q_val);
                        indexId = stuQstnIndex[0].index_id;
                        console.log('question.option_type');
                        if (question.option_type == 'single') {
                            qstnVal = parseInt(stuQstnIndex[0].q_val);
                        }
                        else {
                            qstnVal = stuQstnIndex[0].q_val;
                        }
                    }
                    else {
                        console.log('inside else stuQstnIndex');
                        indexId = '';
                        qstnVal = null;
                    }
                    console.log('qstnVal', qstnVal, 'optnIndex', optnIndex);
                    debugger;
                    // setTimeout(() => {
                    this.questionList.push(this.formBuilder.group({
                        index_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(indexId, null),
                        q_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(question.q_id, null),
                        q_format: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(question.q_format, null),
                        q_text_eng: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(question.q_text_eng, null),
                        q_text_tam: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(question.q_text_tam, null),
                        option_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(question.option_type, null),
                        q_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(qstnVal, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
                        optionAry: this.formBuilder.array([]),
                        optionAryVAl: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(optnIndex, null),
                    }));
                    console.log('questionList', this.questionList);
                    // debugger
                    this.optionList = this.questionList.controls[j]['controls'].optionAry;
                    console.log('optionList', this.optionList);
                    debugger;
                    for (let k = 0; k < optnIndex.length; k++) {
                        console.log('optnIndex', optnIndex, 'question.q_val', this.assessmentForm.value.headingAry[i].questionAry[j].q_val);
                        let option = optnIndex[k];
                        let choiceVal;
                        if (this.assessmentForm.value.headingAry[i].questionAry[j].option_type == 'multiple') {
                            console.log('option.choice_id', option.choice_id);
                            if (this.assessmentForm.value.headingAry[i].questionAry[j].q_val != null) {
                                var re = "/" + option.choice_id.toString() + "/gi";
                                console.log('re', re);
                                // var re = new RegExp("\\s" + option.choice_id.toString() + "\\s", "g");
                                // use of String search() Method
                                if (this.assessmentForm.value.headingAry[i].questionAry[j].q_val.search(re) == -1) {
                                    console.log("Not Found");
                                }
                                else {
                                    console.log("Found");
                                }
                                console.log('q_val val', this.assessmentForm.value.headingAry[i].questionAry[j].q_val, 'choice_id val', option.choice_id);
                                console.log('includes', (JSON.parse("[" + this.assessmentForm.value.headingAry[i].questionAry[j].q_val + "]")).includes(option.choice_id));
                                if ((JSON.parse("[" + this.assessmentForm.value.headingAry[i].questionAry[j].q_val + "]")).includes(option.choice_id) == true) {
                                    console.log('true');
                                    choiceVal = option.choice_id;
                                }
                                else {
                                    console.log('false');
                                    choiceVal = null;
                                }
                            }
                            else {
                                choiceVal = null;
                            }
                        }
                        else {
                            console.log('inside radio');
                        }
                        this.optionList.push(this.formBuilder.group({
                            choice_val: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(choiceVal, null),
                            choice_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(option.choice_id, null),
                            choice_text_eng: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(option.choice_text_eng, null),
                            choice_text_tam: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(option.choice_text_tam, null),
                        }));
                    }
                    // },500)
                }
                // console.log('questionAry format', this.assessmentForm.get('headingAry')['controls'][i]['controls']['questionAry'])
                console.log('assessmentList', this.assessmentList);
            }, 500);
            // } else {
            //   this.alertService.success('No Assessment Questions Found');
            // }
            // this.tabsData = 1;
        }
    }
    getTabs(event) {
        // this.tabsData = event.target.value
    }
    headerAccord(i) {
        debugger;
        const headingControls = this.assessmentForm.get('headingAry')['controls'];
        // console.log("header",i, this.assessmentForm);
        if (this.assessmentForm.value.headingAry[i].indexVal) {
            for (let o = 0; o < headingControls.length; o++) {
                headingControls[o].get('indexVal').setValue(false);
                headingControls[o].get('indexVal').updateValueAndValidity();
            }
            this.cdref.detectChanges();
        }
        else {
            for (let o = 0; o < headingControls.length; o++) {
                headingControls[o].get('indexVal').setValue(false);
                headingControls[o].get('indexVal').updateValueAndValidity();
            }
            headingControls[i].get('indexVal').setValue(true);
            headingControls[i].get('indexVal').updateValueAndValidity();
            this.cdref.detectChanges();
        }
        // this.tabsData = 1
        // if (this.indexVal == i) {
        //   this.indexVal = '';
        //   this.cdref.detectChanges();
        // } else {
        //   this.indexVal = i;
        //   this.cdref.detectChanges();
        // }
    }
    saveFunAssess() {
        // //console.log('this.assessmentForm.valid',this.assessmentForm.value)
        debugger;
        let submitArray = [];
        for (let i = 0; i < this.assessmentForm.value.headingAry.length; i++) {
            //  //console.log('heading array save',this.assessmentForm.value.headingAry[i].sub_domain)
            for (let j = 0; j < this.assessmentForm.value.headingAry[i].questionAry.length; j++) {
                console.log('questionAry array save', this.assessmentForm.value.headingAry[i].questionAry[j].q_id, 'q_val', this.assessmentForm.value.headingAry[i].questionAry[j].q_val);
                let choice_val_array = [];
                for (let k = 0; k < this.assessmentForm.value.headingAry[i].questionAry[j].optionAry.length; k++) {
                    // //console.log('optionAry array save',this.assessmentForm.value.headingAry[i].questionAry[j].optionAry[k].choice_id)
                    console.log('choice val', this.assessmentForm.value.headingAry[i].questionAry[j].optionAry[k].choice_val);
                    if (this.assessmentForm.value.headingAry[i].questionAry[j].option_type == 'multiple' && this.assessmentForm.value.headingAry[i].questionAry[j].optionAry[k].choice_val != false && this.assessmentForm.value.headingAry[i].questionAry[j].optionAry[k].choice_val != null) {
                        console.log('Inside multiple if');
                        choice_val_array.push(this.assessmentForm.value.headingAry[i].questionAry[j].optionAry[k].choice_id);
                        // this.assessmentList.controls[i]['controls'].questionAry.controls[j]['controls'].q_val.setValue(eve.detail.value);
                    }
                }
                console.log('choice_val_array', choice_val_array);
                if (this.assessmentForm.value.headingAry[i].questionAry[j].option_type == 'multiple') {
                    this.assessmentList.controls[i]['controls'].questionAry.controls[j]['controls'].q_val.setValue(choice_val_array.toString());
                }
                // this.assessmentList.controls[i]['controls'].questionAry.setValue({q_val: choice_val_array.toString()});
                console.log('setvalue', this.assessmentForm.value.headingAry[i].questionAry[j].q_val);
                console.log('schlId', this.schlId);
                submitArray.push({
                    IndxId: this.assessmentForm.value.headingAry[i].questionAry[j].index_id,
                    userId: this.user_id,
                    schlId: this.schlId,
                    studId: this.studId,
                    domainId: this.domainDetails.domain_id,
                    subDomainId: this.assessmentForm.value.headingAry[i].subdomain_id,
                    qstnId: this.assessmentForm.value.headingAry[i].questionAry[j].q_id,
                    qstnVal: this.assessmentForm.value.headingAry[i].questionAry[j].q_val,
                    currentDate: this.pipe.transform(new Date(), "yyyy-MM-dd"),
                    status: 1, // "current Date"
                });
            }
        }
        debugger;
        console.log('submitArray', submitArray);
        console.log('this.assessmentForm.valid', this.assessmentForm);
        if (this.assessmentForm.valid) {
            this.assSave = false;
            let params = {
                records: submitArray
            };
            console.log('user_id', this.user_id, 'stud_id', this.studId, 'domain_id', this.domainDetails.domain_id);
            let insertIndex = submitArray.filter((key) => key.IndxId != '');
            console.log('insertIndex', insertIndex);
            if (insertIndex.length > 0) {
                this.uptStudAssDataLocal(submitArray, 3);
            }
            else {
                this.insertStudAssDataLocal(submitArray, 2);
            }
            setTimeout(() => {
                if (this.currNetWrkSts == 0) {
                    this.cwsnService.saveStudFuncAssessDetails(params).subscribe((data) => {
                        if (data.dataStatus == true) {
                            this.assSave = false;
                            if (data.result_array.length > 0) {
                                data.result_array.forEach(element => {
                                    console.log('update element', element);
                                    let uptQuery = 'UPDATE stud_fun_assessment SET q_status = 3 , index_id = "' + element.id + '", q_val="' + element.ans + '"' +
                                        ' WHERE user_id = "' + this.user_id + '"' +
                                        ' AND stud_id = "' + this.studId + '"' +
                                        ' AND domain_id = "' + this.domainDetails.domain_id + '"' +
                                        ' AND q_id = "' + element.quest_id + '"';
                                    console.log('stud uptQuery', uptQuery);
                                    this.sqliteDB.update(uptQuery).then(res => {
                                        console.log('Updated locally', res);
                                    });
                                });
                            }
                            this.uptStudDomainStatus(3);
                            this.alertService.success(data.message);
                            this.navigateBack();
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
                    this.navigateBack();
                }
            }, 500);
        }
        else {
            this.alertService.error("Field is Required");
            this.assSave = true;
        }
    }
    uptStudDomainStatus(status) {
        console.log('uptStudDomainStatus');
        // submitArray.forEach(element => {
        let uptDomainQuery = 'UPDATE stu_domain_status SET d_status = "' + status + '"' +
            ' WHERE stud_id = "' + this.studId + '"' +
            ' AND domain_id = "' + this.domainDetails.domain_id + '"';
        console.log('rrrr uptDomainQuery', uptDomainQuery);
        this.sqliteDB.update(uptDomainQuery).then(res => {
            console.log(' upt stu_domain_status updated locally', res);
        });
        // });
    }
    uptStudAssDataLocal(submitArray, status) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            submitArray.forEach((element) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                let uptQuery = 'UPDATE stud_fun_assessment SET q_val = "' + element.qstnVal + '"' +
                    ' WHERE stud_id = "' + element.studId + '"' +
                    ' AND domain_id = "' + element.domainId + '"' +
                    ' AND subdomain_id = "' + element.subDomainId + '"' +
                    'AND q_id = "' + element.qstnId + '"';
                console.log('11111111', uptQuery);
                yield this.sqliteDB.update(uptQuery).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    console.log('2222222222 uptStudAssDataLocal updated locally', res);
                }));
            }));
        });
    }
    insertStudAssDataLocal(submitArray, status) {
        let delQuery = 'DELETE FROM stud_fun_assessment' +
            ' WHERE user_id = "' + this.user_id + '"' +
            ' AND stud_id = "' + this.studId + '"' +
            ' AND domain_id = "' + this.domainDetails.domain_id + '"';
        console.log('submitArray', submitArray);
        this.sqliteDB.executeQuery(delQuery).then(res => {
            // if (res) {
            console.log('Inside delete');
            let sqlArray = [];
            submitArray.forEach(element => {
                sqlArray.push(['INSERT INTO stud_fun_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,domain_name,subdomain_id,q_id,q_val,date,q_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.IndxId, element.userId, element.schlId, element.studId, element.domainId, element.domainName, element.subDomainId, element.qstnId, element.qstnVal, this.pipe.transform(new Date(), "yyyy-MM-dd"), status]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                console.log('insertres', insertres);
                // this.insertStudDomainlocal();
                this.checkAssementLocal();
                // this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(item), 'zonleId': this.ZonalId, title: this.title, mode: this.mode } });
            });
            // }
        });
    }
    // insertStud(submitArray) {
    //   let delQuery = 'DELETE FROM stud_fun_assessment' +
    //     ' WHERE user_id = "' + this.user_id + '"' +
    //     ' AND stud_id = "' + this.studId + '"' +
    //     ' AND domain_id = "' + this.domainDetails.domain_id + '"';
    //   console.log('submitArray', submitArray)
    //   this.sqliteDB.executeQuery(delQuery).then(res => {
    //     // if (res) {
    //     console.log('Inside delete')
    //     let sqlArray = [];
    //     submitArray.forEach(element => {
    //       sqlArray.push(['INSERT INTO stud_fun_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,subdomain_id,q_id,q_val,date,q_status) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [null, element.IndxId, element.userId, element.schlId, element.studId, element.domainId, element.subDomainId, element.qstnId, element.qstnVal, this.pipe.transform(new Date(), "yyyy-MM-dd"), 2]]);
    //     });
    //     this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
    //       console.log('insertres', insertres)
    //       this.checkAssementLocal();
    //       this.navigateBack();
    //       // this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(item), 'zonleId': this.ZonalId, title: this.title, mode: this.mode } });
    //     });
    //     // }
    //   });
    // }
    // navigatenextsegment(val, i) {
    //   this.tabsData = 2
    //   if (this.indexVal == i) {
    //     this.indexVal = ''
    //   } else {
    //     this.indexVal = i
    //   }
    // }
    // navigatelastsegment(val, i) {
    //   this.tabsData = 3
    //   if (this.indexVal == i) {
    //     this.indexVal = ''
    //     this.indexVal = i
    //   }
    // }
    // popup() {
    //   this.openpopup = false
    // }
    navigateBack() {
        console.log('this.assessmentQstnList', this.assessmentQstnList, 'assessmentList', this.assessmentList);
        if (this.assessmentList.length > 0) {
            this.assessmentList.clear();
        }
        this.router.navigate(["/tabs/ca-domain-list"], { queryParams: { title: this.title, mode: this.mode, menuValue: this.menuValue } });
    }
};
AssessmentQuestionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_7__.CWSNService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef }
];
AssessmentQuestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-assessment-questions',
        template: _raw_loader_assessment_questions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assessment_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssessmentQuestionsPage);



/***/ }),

/***/ 12658:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/cwsn-phase2/assessment-questions/assessment-questions.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .back {\n  background-color: #E6DDEB;\n  padding-top: 5px;\n  padding-bottom: 50px;\n}\n\nion-segment {\n  border: 1px solid white;\n  border-radius: 40px;\n  background-color: white;\n}\n\n.bredcrumb {\n  border: 2px solid #8B67B3;\n  border-radius: 40px;\n  padding: 10px;\n  margin: 20px;\n}\n\n.size {\n  font-size: 12px;\n  text-transform: lowercase;\n}\n\nion-breadcrumbs {\n  color: #8B67B3;\n  font-weight: 900;\n}\n\n.card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.radio {\n  font-size: 12px;\n  color: var(--primary-text-color);\n  font-family: none;\n}\n\n.card-align {\n  min-height: 100%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 25px;\n  background-color: #FF79B7;\n  border-radius: 10px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  text-align: end;\n  padding: 3px;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 20px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-label .schoolnames {\n  font-size: 10px;\n}\n\n.label {\n  color: white;\n}\n\n.align {\n  text-align: center;\n}\n\n.box {\n  border: 1px #b9b8b8;\n  background-color: #ece4e4;\n  display: flex;\n  padding-right: 3px;\n  padding-left: 3px;\n  padding-bottom: 0px;\n  padding-top: 0px;\n  margin: 1px;\n}\n\n.box:host {\n  --background: var(--ion-background-color, #532044);\n}\n\n.text {\n  font-size: 12px;\n  color: var(--primary-text-color);\n  font-weight: bold;\n  font-family: none;\n}\n\n.card-align .cards .card-design {\n  margin-right: 9px;\n  margin-left: 9px;\n  border-radius: 10px;\n  padding: 10px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: bold;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.btn {\n  text-align: center;\n  border-radius: 10px;\n}\n\n.btn-style {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n}\n\n.download {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n  border: 2px #8B66B3;\n  background-color: white !important;\n  font-size: smaller;\n}\n\n.head {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-col p {\n  margin-left: 10px;\n}\n\nh5 {\n  color: green;\n  font-weight: bold;\n}\n\n.popcard {\n  padding: 20px;\n  border-radius: 50px;\n}\n\nion-backdrop {\n  background-color: transparent !important;\n}\n\n.checkbox {\n  --checkmark-color: white;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n  padding: 10px;\n  width: 50px;\n}\n\nion-item {\n  --background: transparent !important;\n  color: var(--text-color-black);\n}\n\n.radio-icon {\n  border-color: var(--icon-color) !important;\n}\n\n.radio-inner {\n  background: var(--icon-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2Vzc21lbnQtcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUlBO0VBQ0ksa0NBQUE7QUFESjs7QUFRQTtFQUNJLHdDQUFBO0FBTEo7O0FBeUJBO0VBQ0ksZUFBQTtFQUVBLGdDQUFBO0VBQ0EsaUJBQUE7QUF2Qko7O0FBMEJBO0VBRUksZ0JBQUE7QUF4Qko7O0FBNkJRO0VBQ0ksOENBQUE7RUFLQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUEvQlo7O0FBbUNZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFqQ2hCOztBQW1DZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQWpDcEI7O0FBcUNZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLGlCQUFBO0FBckNoQjs7QUF1Q2dCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFyQ3BCOztBQTBDUTtFQUNJLGFBQUE7QUF4Q1o7O0FBMkNRO0VBQ0ksZ0JBQUE7QUF6Q1o7O0FBc0RBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFuREo7O0FBNkRBO0VBQ0ksZUFBQTtBQTFESjs7QUE2REE7RUFDSSxZQUFBO0FBMURKOztBQTZEQTtFQUNJLGtCQUFBO0FBMURKOztBQTZEQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBM0RKOztBQStEQTtFQUNJLGtEQUFBO0FBNURKOztBQStEQTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUE1REo7O0FBbUVRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FBaEVaOztBQW1FWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQWpFaEI7O0FBbUVnQjtFQUNJLGVBQUE7QUFqRXBCOztBQW9FZ0I7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQ0FBQTtBQW5FcEI7O0FBdUVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFyRWhCOztBQXVFZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXJFcEI7O0FBMEVRO0VBQ0ksYUFBQTtFQUVBLHVDQUFBO0VBQ0EsMENBQUE7QUF6RVo7O0FBK0VBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQTVFSjs7QUFnRkE7RUFDSSxZQUFBO0VBSUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBaEZKOztBQW1GQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFoRko7O0FBbUZBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQWhGSjs7QUFtRkE7RUFDSSxpQkFBQTtBQWhGSjs7QUFtRkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFoRko7O0FBbUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBaEZKOztBQW1GQTtFQUNJLHdDQUFBO0FBaEZKOztBQW1GQTtFQUNJLHdCQUFBO0FBaEZKOztBQW9GQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQWpGSjs7QUFvRkE7RUFDSSxvQ0FBQTtFQUNBLDhCQUFBO0FBakZKOztBQW9GQTtFQUNJLDBDQUFBO0FBakZKOztBQW9GQTtFQUNJLHdDQUFBO0FBakZKIiwiZmlsZSI6ImFzc2Vzc21lbnQtcXVlc3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IC5iYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnJlZGNydW1iIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnNpemUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxufVxyXG5cclxuaW9uLWJyZWFkY3J1bWJzIHtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuJWNhcmQtbGF5b3V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgLy8gbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4vLyAgIGlvbi1jb250ZW50e1xyXG4vLyAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxuLy8gICB9XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgLy8gYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpXHJcbn1cclxuXHJcblxyXG4lcmFkaW8tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIlIDAlIDIlIDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRkMjtcclxufVxyXG5cclxuJXJhZGlvLWdyb3VwLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtYWxpZ24ge1xyXG4gICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5jYXJkcyB7XHJcblxyXG4gICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7IHNlY29uZGF5LWNvbG9yXHJcbiAgICAgICAgLmNsdXN0ZXItZGVzaWduIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAvLyBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1sZWZ0KTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBtYXJnaW46IDEycHggMDtcclxuICAgICAgICAgICAgLy8gbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgICAgICAuY2x1c3Rlci10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzlCNztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uLW91dGVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmljb24taW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWNhcmQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vICVjYXJkLWxheW91dHtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBtYXJnaW46IDIwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAxNXB4O1xyXG4vLyAgIH1cclxuXHJcbiViYXNlLWxheW91dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tY2FyZC1vdXRlci1kZXNpZ24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjOEI2NkIzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCAuc2Nob29sbmFtZXMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggcmdiKDE4NSwgMTg0LCAxODQpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjI4LCAyMjgpO1xyXG4gICAgO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW46IDFweDtcclxuXHJcbn1cclxuXHJcbi5ib3g6aG9zdCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjNTMyMDQ0KTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuXHJcbiAgICAuY2FyZHMge1xyXG4gICAgICAgIC5jYXJkLWRlc2lnbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG5cclxuICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAudG90YWxDb3VudExhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNjaG9vbG5hbWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Utb3V0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBkYXJrYmx1ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bi1zdHlsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5kb3dubG9hZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJvcmRlcjogMnB4ICM4QjY2QjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyXHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pb24tY29sIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmg1IHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucG9wY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuaW9uLWJhY2tkcm9wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyB3aWR0aDogNyU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ibGFjayk7XHJcbn1cclxuXHJcbi5yYWRpby1pY29uIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhZGlvLWlubmVyIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 85219:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/assessment-questions/assessment-questions.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{studName}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" (click)=\"lanChange(language)\">\r\n      <img *ngIf=\"language == 'Tamil'\" src=\"./../../../../../../assets/icons/cwsn/English.svg\">\r\n      <img *ngIf=\"language == 'English'\" src=\"./../../../../../../assets/icons/cwsn/Tamil.svg\">\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"back\">\r\n    <ion-card class=\"bredcrumb\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-label style=\"color: var(--primary-text-color)\">Functional Assessment</ion-label>\r\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n          <ion-label style=\"color: var(--vertical-line-header)\">{{ domainName }}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n\r\n    <div class=\"card-align ion-card-margin\" *ngIf=\"tabsData == 1;\">\r\n\r\n      <form [formGroup]=\"assessmentForm\">\r\n        <div formArrayName=\"headingAry\">\r\n          <div class=\"cards\">\r\n            <ng-container *ngFor=\"let item of assessmentForm.get('headingAry')['controls']; let i = index;\"\r\n              [formGroupName]=\"i\">\r\n              <!-- {{item.value.sub_domain}} -->\r\n              <ion-card class=\"cluster-design ion-card-margin-top-bottom\">\r\n                <div class=\"cluster-text\" (click)=\"headerAccord(i)\">\r\n                  <span>{{item.value.sub_domain}}</span>\r\n                  <div class=\"icon-outer\">\r\n                    <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"!item.value.indexVal\"></ion-icon>\r\n                    <ion-icon class=\"icon-inner\" *ngIf=\"item.value.indexVal\" name=\"remove-outline\"></ion-icon>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"item.value.indexVal\">\r\n\r\n                  <div formArrayName=\"questionAry\" style=\"color: var(--seconday-color-change)\">\r\n                    <div *ngFor=\"let questionItem of item.controls.questionAry.controls; let j=index\"\r\n                      formGroupName=\"{{j}}\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\" class=\"text\">\r\n                          <div class=\"card-text\" style=\"margin-left:15px;\">\r\n                            <!-- {{questionItem }} -->\r\n                            <ion-label *ngIf=\"language == 'Tamil'\" class=\"schoolnames\">{{j + 1}}. {{questionItem.value.q_text_tam}}\r\n                            </ion-label>\r\n                            <ion-label *ngIf=\"language == 'English'\" class=\"schoolnames\">\r\n                              {{questionItem.value.q_text_eng}}\r\n                            </ion-label>\r\n                          </div>\r\n                        </ion-col>\r\n                        <!-- <ion-col size=\"2\">\r\n                          <img src=\"./../../../../../../assets/icons/cwsn/lang_icon.png\">\r\n                        </ion-col> -->\r\n                      </ion-row>\r\n\r\n                      <!-- <div formArrayName=\"optionAry\"> -->\r\n                      <ion-row>\r\n                        <ion-col *ngIf=\"questionItem.value.option_type == 'single'\">\r\n\r\n                          <!-- {{this.assessmentForm.value.headingAry[i].questionAry[j].q_val}} -->\r\n                          <ion-radio-group formControlName=\"q_val\">\r\n                            <div formArrayName=\"optionAry\">\r\n                              <ion-item lines=\"none\" class=\"item-style radio_group\"\r\n                                *ngFor=\"let optionItem of questionItem.controls.optionAry.controls; let k=index\"\r\n                                formGroupName=\"{{k}}\">\r\n                                <!-- {{optionItem | json}} -->\r\n                                <ion-col size=\"1\">\r\n                                  <ion-radio [value]=\"optionItem.value.choice_id\" class=\"red_radio\"></ion-radio>\r\n                                </ion-col>\r\n                                <ion-col size=\"11\">\r\n                                  <span *ngIf=\"language == 'Tamil'\"\r\n                                    class=\"radio\">{{optionItem.value.choice_text_tam}}</span>\r\n                                  <span *ngIf=\"language == 'English'\"\r\n                                    class=\"radio\">{{optionItem.value.choice_text_eng}}</span>\r\n                                </ion-col>\r\n                              </ion-item>\r\n                            </div>\r\n                          </ion-radio-group>\r\n                        </ion-col>\r\n\r\n                        <ion-col *ngIf=\"questionItem.value.option_type == 'multiple'\">\r\n                          <!-- <ion-item-group> -->\r\n                          <div formArrayName=\"optionAry\">\r\n                            <ion-item lines=\"none\" class=\"item-style\"\r\n                              *ngFor=\"let optionItem of questionItem.controls.optionAry.controls; let k=index\"\r\n                              formGroupName=\"{{k}}\">\r\n                              <ion-col size=\"1\">\r\n                                <ion-checkbox class=\"checkbox\" formControlName=\"choice_val\" labelPlacement=\"end\">\r\n                                </ion-checkbox>\r\n                              </ion-col>\r\n                              <ion-col size=\"11\">\r\n                                <span *ngIf=\"language == 'Tamil'\" class=\"radio\">{{optionItem.value.choice_text_tam}}\r\n                                </span>\r\n                                <span *ngIf=\"language == 'English'\" class=\"radio\">{{optionItem.value.choice_text_eng}}\r\n                                </span>\r\n                              </ion-col>\r\n                            </ion-item>\r\n                          </div>\r\n                          <!-- </ion-item-group> -->\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </ion-card>\r\n\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <ion-row *ngIf=\"assessmentList?.length != 0\">\r\n        <ion-col size=\"12\" class=\"btn\">\r\n          <ion-button size=\"default\" class=\"btn-style\" (click)=\"saveFunAssess()\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn-phase2_assessment-questions_assessment-questions_module_ts-es2015.js.map