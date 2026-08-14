(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_writing-inspection_writing-inspection_module_ts"],{

/***/ 43347:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/writing-inspection-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WritingInspectionPageRoutingModule": function() { return /* binding */ WritingInspectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _writing_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writing-inspection.page */ 82790);




const routes = [
    {
        path: '',
        component: _writing_inspection_page__WEBPACK_IMPORTED_MODULE_0__.WritingInspectionPage
    },
    {
        path: 'my-inspection',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection_my-inspection_mo-09775a").then(__webpack_require__.bind(__webpack_require__, /*! ./my-inspection/my-inspection.module */ 73186)).then(m => m.MyInspectionPageModule)
    },
    {
        path: 'my-inspection-dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-dashboard_my-ins-9ddb64").then(__webpack_require__.bind(__webpack_require__, /*! ./my-inspection-dashboard/my-inspection-dashboard.module */ 62428)).then(m => m.MyInspectionDashboardPageModule)
    },
    {
        path: 'my-inspection-question',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-question_my-insp-60693b").then(__webpack_require__.bind(__webpack_require__, /*! ./my-inspection-question/my-inspection-question.module */ 16842)).then(m => m.MyInspectionQuestionPageModule)
    }
];
let WritingInspectionPageRoutingModule = class WritingInspectionPageRoutingModule {
};
WritingInspectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WritingInspectionPageRoutingModule);



/***/ }),

/***/ 16822:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/writing-inspection.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WritingInspectionPageModule": function() { return /* binding */ WritingInspectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _writing_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writing-inspection-routing.module */ 43347);
/* harmony import */ var _writing_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writing-inspection.page */ 82790);







let WritingInspectionPageModule = class WritingInspectionPageModule {
};
WritingInspectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _writing_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.WritingInspectionPageRoutingModule
        ],
        declarations: [_writing_inspection_page__WEBPACK_IMPORTED_MODULE_1__.WritingInspectionPage]
    })
], WritingInspectionPageModule);



/***/ }),

/***/ 82790:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/writing-inspection.page.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WritingInspectionPage": function() { return /* binding */ WritingInspectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_writing_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./writing-inspection.page.html */ 94282);
/* harmony import */ var _writing_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writing-inspection.page.scss */ 49533);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);










let WritingInspectionPage = class WritingInspectionPage {
    constructor(fb, utilityService, router, route, userSessionService, alertService) {
        this.fb = fb;
        this.utilityService = utilityService;
        this.router = router;
        this.route = route;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.questionData = [];
        this.totalSubject = [
            { value: "Tamil" },
            { value: "English" },
            { value: "Maths" },
        ];
        this.tamil = [
            { value: "பாடல்/கதைப்பாடல் " },
            { value: "கதை / நடித்தல் " },
            { value: "கலந்துரையாடல் " },
            { value: "விளையாட்டு" },
            { value: "படித்தல் உத்திகள்" },
            { value: "எழுதுதல் உத்திகள்" }
        ];
        this.english = [
            { value: "Song or Chant" },
            { value: "Story" },
            { value: "Circle Time" },
            { value: "Large-group/Small group activity" },
        ];
        this.maths = [
            { value: "Indoor & Outdoor Games" },
            { value: "Puppetry" },
            { value: "Songs" },
            { value: "Arts & Crafts" },
            { value: "Role Play" },
        ];
        this.cascadeData = [
            { value: "KRPs to RPs (District)" },
            { value: "RPs to Teachers (Block)" }
        ];
        this.startSession = [
            { value: "PPT" },
            { value: "Handout" },
            { value: "TLMs" },
            { value: "Technical Infrastructure (LCD)" },
        ];
        this.learning = [
            { value: "Story Corner" },
            { value: "Song Corner" },
            { value: "Activity Corner" },
            { value: "Reading/Puppet Corner" },
            { value: "Art & Craft Corner" },
        ];
        this.training = [
            { value: "Ask doubts at the end of the session" },
            { value: "Avoid phone usage during the sessions" },
            { value: "Being on time after breaks" },
            { value: "Avoid peer discussion during the session" },
        ];
        this.classData = [
            { value: "TLMs" },
            { value: "PPT" },
            { value: "Handout" },
            { value: "Video" },
        ];
        this.classSession = [
            { value: "Process explanation by RP with PPT" },
            { value: "Demo video with discussion" },
            { value: "Group activity" },
            { value: "Demo activity by participants" },
        ];
        this.activity = [
            { value: "Song" },
            { value: "Story" },
            { value: "Game" },
            { value: "Activity/Discussion" },
        ];
        this.percentage = [
            { value: "More than 90%" },
            { value: "75 - 90%" },
            { value: "50-75%" },
            { value: "Less than 50%" },
        ];
        this.RPs = [
            { value: "An RP presented the training content; The other RP supported" },
            { value: "The RPs took turns to present the training content" },
            { value: "There was no coordination/planning  between RPs" },
            { value: "Other" },
        ];
        this.PPT = [
            { value: "Content was read out word-by-word" },
            { value: "Content was used to explain the PPT using own words" },
            { value: "Explanation was different from the content on the PPT" },
            { value: "Other" },
        ];
        this.RP = [
            { value: "Yes, at the end of each session" },
            { value: "Yes, at the end of some sessions" },
            { value: "No questions are asked" }
        ];
        this.session = [
            { value: "Introductory Session" },
            { value: "Model Classroom by RP" },
            { value: "Session on THB & WB" },
            { value: "Participant Demonstration" },
            { value: "TLM Preparation" },
            { value: "Feedback Quiz" }
        ];
        this.mathsSever = false;
        this.sessionSever = false;
        this.queslistData = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        debugger;
        this.form.reset();
        this.QuesActive = false;
        this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        this.userid = this.userSessionService.emis_username();
        // this.jsonData()
        // this.getDistricData()
        // this.getAnsData(this.userid)
        this.routeData = this.route.snapshot;
        this.id = this.routeData.queryParams.id;
        this.teacherid = this.routeData.queryParams.userid;
        this.date = this.routeData.queryParams.date;
        this.page = this.routeData.queryParams.page;
        this.time = this.routeData.queryParams.time;
        if (this.page == 1) {
            this.getAnsData();
        }
        else {
            this.jsonData();
        }
    }
    jsonData() {
        this.jsonIfData = [];
        this.utilityService.getQuestion().subscribe((response) => {
            this.jsonIfData = response.result;
            this.onFormArray(response.result);
        });
    }
    initialValidator() {
        this.form = this.fb.group({
            training_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            // trainingId: new FormControl('', Validators.required),
            questions: this.fb.array([]),
        });
    }
    onChangeData(val) {
        if (val == 'KRPs to RPs (District)') {
            this.cascade = false;
        }
        else {
            this.cascade = true;
        }
    }
    onChangeLanguage(val) {
        if (val == 'Tamil') {
            this.tamilData = true;
        }
        else {
            this.tamilData = false;
        }
        if (val == 'English') {
            this.englishData = true;
        }
        else {
            this.englishData = false;
        }
        if (val == 'Maths') {
            this.mathsData = true;
        }
        else {
            this.mathsData = false;
        }
    }
    onChangeSession(val) {
        if (val == 'Model Classroom by RP') {
            this.classroom = true;
        }
        else {
            this.classroom = false;
        }
        if (val == 'Participant Demonstration') {
            this.participant = true;
        }
        else {
            this.participant = false;
        }
    }
    onChangeRPs(val) {
        if (val == '1') {
            this.rpsSession = true;
        }
        else {
            this.rpsSession = false;
        }
    }
    onChangeothers(val, i) {
        if (i == '13') {
            if (val == 'Other') {
                this.other = true;
            }
            else {
                this.other = false;
                this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue(val);
                this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
            }
        }
        if (i == '22') {
            if (val == 'Other') {
                this.other1 = true;
            }
            else {
                this.other1 = false;
                this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue(val);
                this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
            }
        }
        if (i == '23') {
            if (val == 'Other') {
                this.other2 = true;
            }
            else {
                this.other2 = false;
                this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue(val);
                this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
            }
        }
    }
    onFormArray(questionData) {
        const control = this.form.controls['questions'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = this.form.controls.questions;
        if (questionData.length > 0) {
            for (let i = 0; i < questionData.length; i++) {
                this.queslist.push(this.fb.group({
                    IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
                    QuestId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(questionData[i].IndxId, null),
                    QText: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(questionData[i].Questions, null),
                    QuesResp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
                    UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.userid, null)
                }));
                if (questionData[i].IndxId == 5 || questionData[i].IndxId == 9 ||
                    questionData[i].IndxId == 9 || questionData[i].IndxId == 10 || questionData[i].IndxId == 11 || questionData[i].IndxId == 12 || questionData[i].IndxId == 13 || questionData[i].IndxId == 14 ||
                    questionData[i].IndxId == 15 || questionData[i].IndxId == 22 || questionData[i].IndxId == 24 || questionData[i].IndxId == 25 || questionData[i].IndxId == 26) {
                    this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue("");
                    this.form.controls['questions']['controls'][i].controls['QuesResp'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                    this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
                }
            }
        }
        console.log('this.form.controls.questions', this.form.controls.questions);
    }
    onFormArrays(questionData) {
        const control = this.form.controls['questions'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = this.form.controls.questions;
        if (questionData.length > 0) {
            for (let i = 0; i < questionData.length; i++) {
                this.queslist.push(this.fb.group({
                    IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
                    QuestId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(questionData[i].IndxId, null),
                    QText: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(questionData[i].Questions, null),
                    QuesResp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
                    UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.userid, null)
                }));
            }
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    onFormArrayData(questionData) {
        this.severData = true;
        const control = this.form.controls['questions'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = this.form.controls.questions;
        if (questionData.length > 0) {
            for (let i = 0; i < questionData.length; i++) {
                this.queslist.push(this.fb.group({
                    IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
                    QuestId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(questionData[i].QuestId, null),
                    QText: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(questionData[i].ques, null),
                    QuesResp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(questionData[i].QuesResp, null),
                    UserId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.userid, null)
                }));
                var temp = questionData[i].QuesResp;
                if (questionData[i].QuestId == 10 || questionData[i].QuestId == 11 || questionData[i].QuestId == 13) {
                    this.sessionSever = true;
                    let data = temp.split(',');
                    console.log(data, "data");
                    this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue(data);
                    this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
                }
                if (questionData[i].QuesResp != '' && (questionData[i].QuestId == 6 || questionData[i].QuestId == 7 || questionData[i].QuestId == 8)) {
                    let data = [];
                    if (i == 5) {
                        this.tamilData = true;
                        this.tamilSever = true;
                    }
                    if (i == 6) {
                        this.englishData = true;
                        this.englishSever = true;
                    }
                    if (i == 7) {
                        this.mathsData = true;
                        this.mathsSever = true;
                    }
                    data = temp.split(',');
                    console.log(data, "data");
                    this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue(data);
                    this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
                }
            }
        }
        console.log(this.form.value, "form");
    }
    getDistricData() {
        this.utilityService.getDistrict().subscribe((response) => {
            this.districData = [];
            this.districData = response.result.schooldist;
        });
    }
    getAnsData() {
        this.utilityService.getTrainerData(this.teacherid, this.date, this.id, this.time).subscribe((response) => {
            this.questionAnsData = [];
            this.questionAnsData = response.result;
            if (response.dataStatus) {
                this.onFormArrayData(this.questionAnsData);
            }
            else {
                this.jsonData();
            }
        });
        // this.utilityService.getEnnumEzhuthum(userData).subscribe((response) => {
        //     this.questionAnsData = []
        //     this.questionAnsData = response.result
        //     if (response.dataStatus) {
        //         this.onFormArrayData(this.questionAnsData)
        //     } else {
        //         this.jsonData()
        //     }
        // });
    }
    getBlockData(id) {
        let districtId = this.districData.filter((item) => item.district_name == id);
        this.utilityService.getBlock(districtId[0].id).subscribe((response) => {
            this.blockData = [];
            this.blockData = response.blockList;
            console.log(this.blockData, "list");
        });
    }
    onChangeString(data, i) {
        let item = data.toString();
        this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue(item);
        //    this.form.controls['questions']['controls'][i].controls['ques_response'].setValidators(false);
        this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
    }
    onChangeDataothers(data, i) {
        this.form.controls['questions']['controls'][i].controls['QuesResp'].setValue(data);
        this.form.controls['questions']['controls'][i].controls['QuesResp'].updateValueAndValidity();
    }
    onSave() {
        debugger;
        this.queslistData = [];
        if (this.form.valid) {
            this.submitted = true;
            for (let i = 0; i < this.form.value.questions.length; i++) {
                if (this.form.value.questions[i].QuesResp.length > 0) {
                    var quesres = this.form.value.questions[i].QuesResp.toString();
                }
                else {
                    var quesres = this.form.value.questions[i].QuesResp;
                }
                let datas = {
                    IndxId: '',
                    QuestId: this.form.value.questions[i].QuestId,
                    QuesResp: quesres,
                    UserId: this.userid,
                    Date: this.todayDateFormat,
                    TrId: this.trainerCodeDate.TraningId
                };
                this.queslistData.push(datas);
            }
            let data = {
                "records": this.queslistData
            };
            this.utilityService.saveEnnumEzhuthum(data).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success('Saved');
                    this.router.navigate(['/tabs/home']);
                }
            });
        }
        else {
            this.validateAllFormFields(this.form);
            this.alertService.error('Please Fill all the Required Fields');
        }
    }
    goToBack() {
        if (this.page == 1) {
            this.router.navigate(['/tabs/my-inspection-dashboard']);
        }
        else {
            this.router.navigate(['/tabs/home']);
        }
    }
    onUniqueCode() {
        console.log(this.form.value);
        debugger;
        this.trainerCodeDate = [];
        this.utilityService.getUniCodeData(this.form.value.training_id, this.todayDateFormat).subscribe(res => {
            if (res.dataStatus) {
                this.QuesActive = true;
                this.trainerCodeDate = res.result[0];
            }
            else {
                this.QuesActive = false;
                this.alertService.error('Invalid Training Unique Code');
                this.router.navigate(['/tabs/home']);
            }
        });
    }
};
WritingInspectionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
WritingInspectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-writing-inspection',
        template: _raw_loader_writing_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_writing_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WritingInspectionPage);



/***/ }),

/***/ 49533:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/writing-inspection.page.scss ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row-head {\n  margin: 1%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.radio {\n  padding-left: 15px;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.div_head {\n  background: white;\n  border-radius: 10px;\n}\n\n.text-aln {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.ques-txt {\n  font-size: medium;\n  color: var(--ion-color-primary);\n}\n\n.divhead {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 3%;\n}\n\n.school {\n  padding-left: 10px;\n  color: #8b3038;\n  background: #dfd5eb;\n  margin: 3%;\n  border-radius: 10px;\n}\n\n.headerText {\n  text-align: center;\n  font-size: medium;\n  border-style: dotted;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-top: 5%;\n  color: #8b67b3;\n  background-color: #deb4324f;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-input {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nion-select {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.trainIdstyle {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyaXRpbmctaW5zcGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QUFMSjs7QUFRQTtFQUNFLG1CQUFBO0VBQ0UsaUJBQUE7RUFHQSxpQkFBQTtBQVBKOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0UsaUJBQUE7RUFFQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQXdCRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBckJKOztBQXdCRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBckJKOztBQXdCRTtFQUNFLGtCQUFBO0FBckJKIiwiZmlsZSI6IndyaXRpbmctaW5zcGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWhlYWQge1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5yYWRpbyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyBcclxufVxyXG5cclxuLnZhbGlkLWNsciB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcblxyXG4uZGl2X2hlYWQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWFsbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vLyBpb24tcmFkaW8ge1xyXG4vLyAgICAgbWFyZ2luOiAzJTtcclxuLy8gICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcclxuLy8gfVxyXG5cclxuLnF1ZXMtdHh0IHsgXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcclxufVxyXG5cclxuLmRpdmhlYWQge1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlOyBcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLnNjaG9vbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiAjOGIzMDM4O1xyXG4gIGJhY2tncm91bmQ6ICNkZmQ1ZWI7XHJcbiAgbWFyZ2luOiAzJTtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuICBcclxuLmhlYWRlclRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgLy8gY29sb3I6IG9yYW5nZXJlZDtcclxuICAgIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGNvbG9yOiAjOGI2N2IzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlYjQzMjRmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4vLyAgIGlvbi1pbnB1dFt0eXBlPVwiZGF0ZVwiXTpub3QoLmhhcy12YWx1ZSk6YmVmb3Jle1xyXG4vLyAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuLy8gICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgIzhiNjdiMztcclxuLy8gICB9XHJcbiAgIFxyXG4vLyAgIC5pbnB1dC1jbHIge1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuLy8gICB9XHJcblxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGI2N2IzO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICB9XHJcbiBcclxuICBpb24tc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAudHJhaW5JZHN0eWxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLy8gY29sb3I6IGJyb3duO1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 94282:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/writing-inspection/writing-inspection.page.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Ennum Ezhuthum Observation </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 4%;\">\r\n    <ion-row class=\"divhead\" *ngIf=\"page != 1\">\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Training Details\r\n          (Before the training session begins) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          Training Unique Code <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" maxlength=\"6\"\r\n          formControlName=\"training_id\">\r\n        </ion-input>\r\n       \r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"form.controls['training_id'].hasError('required') && (form.controls['training_id'].dirty || form.controls['training_id'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row style=\"font-style: italic;font-size:13px\">\r\n          <ion-label><span style=\"color:red;padding-right:10px;\">Note:</span>Please enter the unique ID generated by the trainer for the training session</ion-label>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" >\r\n        <div class=\"text-center\" (click)=\"onUniqueCode()\" *ngIf=\"this.form.value.training_id\">\r\n          <ion-button style=\"color:white\">Submit</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"QuesActive\">\r\n        <ion-row class=\"school trainIdstyle\">\r\n          <ion-col size=\"12\" style=\"color: black;\">\r\n            <ion-label>School Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.SchlNme}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\"  style=\"color: black;\">\r\n            <ion-label>Trainner Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.TchNme}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n \r\n    <div class=\"div_head\" formArrayName=\"questions\" *ngIf=\"QuesActive || page == 1\">\r\n      <ion-row class=\"row-head\" *ngFor=\"let item of form.get('questions')['controls']; let i = index;\"\r\n        [formGroupName]=\"i\">\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '5'\">\r\n          <ion-label class=\"ques-txt\">\r\n            1 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-radio-group (ionChange)=\"onChangeLanguage($event.detail.value)\" formControlName=\"QuesResp\">\r\n            <ion-item lines=\"none\" *ngFor=\"let data of totalSubject\">\r\n              <ion-radio value={{data.value}}></ion-radio> <span class=\"radio\"> {{data.value}} </span>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '6' && tamilData\">\r\n          <ion-label class=\"ques-txt\">\r\n            A . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"tamilSever\"\r\n            formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of tamil\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!tamilSever\">\r\n            <ion-select-option *ngFor=\"let data of tamil\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n\r\n\r\n          <!-- <ion-list style=\"background:transparent\" lines=\"none\">\r\n            <ion-item *ngFor=\"let data of tamil\">\r\n              <ion-label>{{data.value}}</ion-label>\r\n              <ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\r\n            </ion-item>\r\n          </ion-list> -->\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '7' && englishData\">\r\n          <ion-label class=\"ques-txt\">\r\n            A . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-list style=\"background:transparent\" lines=\"none\">\r\n\r\n            <!-- <div *ngFor=\"let data of english; let i=index\">\r\n              <ion-input type=checkbox” formControlName =\"QuesResp\" value=\"{{data.value}}\"> {{data.value}}\r\n            </ion-input> \r\n          </div> -->\r\n\r\n            <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"englishSever\"\r\n              formControlName=\"QuesResp\">\r\n              <ion-select-option *ngFor=\"let data of english\" [value]=\"data.value\"> {{data.value}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n\r\n            <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n              (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!englishSever\">\r\n              <ion-select-option *ngFor=\"let data of english\" [value]=\"data.value\"> {{data.value}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n            <ion-row>\r\n              <p class=\"error-message\"\r\n                *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '8' && mathsData\">\r\n          <ion-label class=\"ques-txt\">\r\n            A . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"mathsSever\"\r\n            formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of maths\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!mathsSever\">\r\n            <ion-select-option *ngFor=\"let data of maths\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '9'\">\r\n          <ion-label class=\"ques-txt\">\r\n            2 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-input type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" pattern=\"[0-9]*\"\r\n            class=\"input-clr\" formControlName=\"QuesResp\">\r\n          </ion-input>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n          <ion-row>\r\n            <p class=\"error-message\" *ngIf=\"item.controls['QuesResp'].hasError('pattern')\">Invalid Format\r\n            </p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '10'\">\r\n\r\n          <div class=\"headerText\" size=\"12\"> Adoption of Training Guidelines\r\n            (At the start of the training session) </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '10'\">\r\n          <ion-label class=\"ques-txt\">\r\n            1 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"sessionSever\"\r\n            formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of startSession\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!sessionSever\">\r\n            <ion-select-option *ngFor=\"let data of startSession\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '11'\">\r\n          <ion-label class=\"ques-txt\">\r\n            2 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"sessionSever\"\r\n            formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of learning\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!sessionSever\">\r\n            <ion-select-option *ngFor=\"let data of learning\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '12'\">\r\n          <ion-label class=\"ques-txt\">\r\n            3 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-radio-group formControlName=\"QuesResp\" (ionChange)=\"onChangeRPs($event.detail.value)\">\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='1'></ion-radio> <span class=\"radio\"> 1 </span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='2'></ion-radio> <span class=\"radio\"> 2 </span>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '13'\">\r\n          <ion-label class=\"ques-txt\">\r\n            4 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"sessionSever\"\r\n            formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of training\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!sessionSever\">\r\n            <ion-select-option *ngFor=\"let data of training\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '14'\">\r\n          <div class=\"headerText\" size=\"12\"> Alignment with the Training Model </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '14'\">\r\n          <ion-label class=\"ques-txt\">\r\n            1 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-radio-group (ionChange)=\"onChangeothers($event.detail.value,i)\" formControlName=\"QuesResp\">\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='Yes'></ion-radio> <span class=\"radio\"> Yes </span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='No'></ion-radio> <span class=\"radio\"> No </span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='Other'></ion-radio> <span class=\"radio\"> Other </span>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n\r\n          <div *ngIf=\"other\">\r\n            <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n              (ionChange)=\"onChangeDataothers($event.detail.value,i)\">\r\n            </ion-input>\r\n          </div>\r\n\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '15'\">\r\n          <ion-label class=\"ques-txt\">\r\n            2 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"QuesResp\"\r\n            (ionChange)=\"onChangeSession($event.detail.value)\">\r\n            <ion-select-option *ngFor=\"let data of session\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '16' && classroom\">\r\n          <ion-label class=\"ques-txt\">\r\n            A . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"sessionSever\"\r\n            formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of classData\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!sessionSever\">\r\n            <ion-select-option *ngFor=\"let data of classData\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <!-- <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\">\r\n            <ion-select-option *ngFor=\"let data of classData\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select> -->\r\n\r\n          <!-- <ion-list style=\"background:transparent\" lines=\"none\">\r\n            <ion-item *ngFor=\"let data of classData\">\r\n              <ion-label>{{data.value}}</ion-label>\r\n              <ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\r\n            </ion-item>\r\n          </ion-list> -->\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '17' && classroom\">\r\n          <ion-label class=\"ques-txt\">\r\n            B . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" *ngIf=\"sessionSever\"\r\n            formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of classSession\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\" *ngIf=\"!sessionSever\">\r\n            <ion-select-option *ngFor=\"let data of classSession\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <!-- <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeString($event.detail.value,i)\">\r\n            <ion-select-option *ngFor=\"let data of classSession\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select> -->\r\n\r\n          <!-- <ion-list style=\"background:transparent\" lines=\"none\">\r\n            <ion-item *ngFor=\"let data of classSession\">\r\n              <ion-label>{{data.value}}</ion-label>\r\n              <ion-checkbox color=\"primary\" slot=\"start\"></ion-checkbox>\r\n            </ion-item>\r\n          </ion-list> -->\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '18' && participant\">\r\n          <ion-label class=\"ques-txt\">\r\n            A . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-radio-group formControlName=\"QuesResp\">\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='Yes'></ion-radio> <span class=\"radio\"> Yes </span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='No'></ion-radio> <span class=\"radio\"> No </span>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '19' && participant\">\r\n          <ion-label class=\"ques-txt\">\r\n            B. {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of activity\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '20' && participant\">\r\n          <ion-label class=\"ques-txt\">\r\n            C . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-radio-group formControlName=\"QuesResp\">\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='Yes'></ion-radio> <span class=\"radio\"> Yes </span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='No'></ion-radio> <span class=\"radio\"> No </span>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '21'\">\r\n          <ion-label class=\"ques-txt\">\r\n            3 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of percentage\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '22'\">\r\n          <ion-label class=\"ques-txt\">\r\n            4 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"QuesResp\">\r\n          </ion-input>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '23'\">\r\n          <div class=\"headerText\" size=\"12\"> Facilitation Practices </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '23' && rpsSession\">\r\n          <ion-label class=\"ques-txt\">\r\n            A . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of RPs\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '24'\">\r\n          <ion-label class=\"ques-txt\">\r\n            1 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            (ionChange)=\"onChangeothers($event.detail.value,i)\" formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of PPT\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <div *ngIf=\"other1\">\r\n            <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n              (ionChange)=\"onChangeDataothers($event.detail.value,i)\">\r\n            </ion-input>\r\n          </div>\r\n\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '25'\">\r\n          <ion-label class=\"ques-txt\">\r\n            2 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"QuesResp\">\r\n            <ion-select-option *ngFor=\"let data of RP\" [value]=\"data.value\"> {{data.value}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n          <div *ngIf=\"other2\">\r\n            <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n              (ionChange)=\"onChangeDataothers($event.detail.value,i)\">\r\n            </ion-input>\r\n          </div>\r\n\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"item.value.QuestId == '26'\">\r\n          <ion-label class=\"ques-txt\">\r\n            3 . {{item.value.QText}} <span class=\"valid-clr\">*</span>\r\n          </ion-label>\r\n          <ion-radio-group formControlName=\"QuesResp\">\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='Clearly in a logical flow'></ion-radio> <span class=\"radio\"> Clearly in a logical flow\r\n              </span>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-radio value='Vague / Not clear'></ion-radio> <span class=\"radio\"> Vague / Not clear </span>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          <ion-row>\r\n            <p class=\"error-message\"\r\n              *ngIf=\"(item.controls['QuesResp'].hasError('required')) && (submitted || item.controls['QuesResp'].dirty || item.controls['QuesResp'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n\r\n      </ion-row>\r\n\r\n    </div>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" style=\"background-color: transparent !important;\" (click)=\"onSave()\" *ngIf=\"QuesActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;font-weight:500;\">\r\n      <div>\r\n        <ion-button disabled=\"false\" style=\"width: 100%; color: white;height: 60px;\">\r\n          Save\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_writing-inspection_writing-inspection_module_ts-es2015.js.map