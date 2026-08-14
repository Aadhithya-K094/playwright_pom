(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_new-inspection-question_new-inspection-question_m-bcb638"],{

/***/ 48745:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-inspection-question/new-inspection-question-routing.module.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInspectionQuestionPageRoutingModule": function() { return /* binding */ NewInspectionQuestionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _new_inspection_question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-inspection-question.page */ 4267);




const routes = [
    {
        path: '',
        component: _new_inspection_question_page__WEBPACK_IMPORTED_MODULE_0__.NewInspectionQuestionPage
    }
];
let NewInspectionQuestionPageRoutingModule = class NewInspectionQuestionPageRoutingModule {
};
NewInspectionQuestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewInspectionQuestionPageRoutingModule);



/***/ }),

/***/ 23202:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-inspection-question/new-inspection-question.module.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInspectionQuestionPageModule": function() { return /* binding */ NewInspectionQuestionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _new_inspection_question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-inspection-question-routing.module */ 48745);
/* harmony import */ var _new_inspection_question_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-inspection-question.page */ 4267);







let NewInspectionQuestionPageModule = class NewInspectionQuestionPageModule {
};
NewInspectionQuestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_inspection_question_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewInspectionQuestionPageRoutingModule
        ],
        declarations: [_new_inspection_question_page__WEBPACK_IMPORTED_MODULE_1__.NewInspectionQuestionPage]
    })
], NewInspectionQuestionPageModule);



/***/ }),

/***/ 4267:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-inspection-question/new-inspection-question.page.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInspectionQuestionPage": function() { return /* binding */ NewInspectionQuestionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_new_inspection_question_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-inspection-question.page.html */ 40071);
/* harmony import */ var _new_inspection_question_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-inspection-question.page.scss */ 43625);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);












let NewInspectionQuestionPage = class NewInspectionQuestionPage {
    constructor(router, alertService, route, userService, uploadService, http, fb, el, usersessionService) {
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.userService = userService;
        this.uploadService = uploadService;
        this.http = http;
        this.fb = fb;
        this.el = el;
        this.usersessionService = usersessionService;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US');
        this.class_flag = [
            { "value": "1", "label": "Classes 1-3" },
            { "value": "2", "label": "Classes 4-5" },
            { "value": "3", "label": "Classes 6-10" },
            { "value": "4", "label": "Classes 11-12" }
        ];
        this.recordData = [];
        this.PP_Training1_5 = [
            {
                QNo: "1",
                Question: "How did the facilitators introduce the session to the participants? [Select all that apply]",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Explained the purpose and/or objectives of the session', value: '1' },
                    { label: 'Shared the agenda of the session', value: '2' },
                    { label: 'Shared the expectations for participation', value: '3' },
                    { label: 'Not Applicable', value: '4' },
                ],
            },
            {
                QNo: "2",
                Question: "How did the facilitators support participants during discussion or practice time? [Select all that apply]",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Observed the discussion/practice', value: '1' },
                    { label: 'Spent time with different groups', value: '2' },
                    { label: 'Asked questions', value: '3' },
                    { label: 'Encouraged participation', value: '4' },
                    { label: 'Cleared doubts', value: '5' },
                    { label: 'Not applicable', value: '6' },
                ],
            },
            {
                QNo: "3",
                Question: "How was the content in the PPT used during the training?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'Content was read out word-by-word', value: '1' },
                    { label: 'Content was used to explain the PPT using own words', value: '2' },
                    { label: 'Explanation was different from the content on the PPT', value: '3' },
                    { label: 'Not applicable', value: '4' },
                ],
            },
            {
                QNo: "4",
                Question: "What kind of questions did the facilitators ask to check if the participants were following the session?  [Select all that apply]",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Yes/no questions like "Did you understand?"', value: '1' },
                    { label: 'Factual questions about recalling the content explained', value: '2' },
                    { label: 'Factual questions about recalling the instructions for activities', value: '3' },
                    { label: 'Open questions about explaining the content using their own words', value: '4' },
                    { label: 'No questions were asked', value: '5' },
                    // {label : 'Other: _______', value: '6'},
                ],
            },
            {
                QNo: "5",
                Question: "What did the facilitators do when the participants did not follow the session? [Select all that apply]",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Repeated the explanation', value: '1' },
                    { label: 'Explained using a different example', value: '2' },
                    { label: 'Asked follow up questions', value: '3' },
                    { label: 'Encouraged participants to ask questions or share doubts', value: '4' },
                    { label: 'Not Applicable', value: '5' },
                    // {label : 'Other: _______', value: '6'},
                ],
            },
            {
                QNo: "6",
                Question: "How did the facilitators share responsibilities within the session?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'A facilitator presented most of the training content; The other facilitator supported', value: '1' },
                    { label: 'The facilitators took turns to present the training content', value: '2' },
                    { label: 'There was no coordination/planning between the facilitators', value: '3' },
                    { label: 'Not applicable', value: '4' },
                    // {label : 'Other: _______', value: '5'},
                ],
            }
        ];
        this.PP_Training1_6 = [
            {
                QNo: "1",
                Question: "Please enter the number of participants at the training session.",
                AnsType: "9",
                Obser_focus: "",
                Options: [],
            },
            {
                QNo: "2",
                Question: "When did the session start?",
                AnsType: "11",
                Obser_focus: "",
                Options: [],
            },
            {
                QNo: "3",
                Question: "Select the facilities available at the location of the training? [select all that apply]",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Ventilated Trainig Rooms', value: '1' },
                    { label: 'Clean Toilets', value: '2' },
                    { label: 'Drinking Water Facility', value: '3' },
                    { label: 'Electricity Facility', value: '4' },
                    { label: 'Internet Facility', value: '5' },
                    { label: 'Mobile network connectivity', value: '6' },
                ]
            },
            {
                QNo: "4",
                Question: "What tech infrastructure was used for the training? [Select all that apply]",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Computer', value: '1' },
                    { label: 'Projector', value: '2' },
                    { label: 'Speaker', value: '3' },
                    { label: 'Mic', value: '4' },
                    { label: 'LCD TV', value: '5' },
                    { label: 'Not applicable for this session', value: '6' },
                ],
            },
            {
                QNo: "5",
                Question: "Which of the following resources were available during the session? [Select all that apply]",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'PPT', value: '1' },
                    { label: 'Handout', value: '2' },
                    { label: 'TLMs', value: '3' },
                    { label: 'Videos', value: '4' },
                    { label: 'Not applicable for this session', value: '5' },
                ],
            },
            {
                QNo: "6",
                Question: "How many participants were engaged in the discussion or practice?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'More than 90%', value: '1' },
                    { label: '75-90%', value: '2' },
                    { label: '50-74%', value: '3' },
                    { label: 'Less than 50%', value: '4' },
                    { label: 'Not applicable for this session', value: '5' },
                ],
            },
            {
                QNo: "7",
                Question: "How did participants participate in the discussions? ",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'Passive Listener', value: '1' },
                    { label: 'Actively discussed in small groups', value: '2' },
                    { label: 'Actively discussed in larger groups', value: '3' },
                    { label: 'Actively involved in the demo', value: '4' },
                    { label: 'Not applicable for this session', value: '5' },
                ],
            },
            {
                QNo: "8",
                Question: "How many participants were engaged during the activity time?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'More than 90%', value: '1' },
                    { label: '75-90%', value: '2' },
                    { label: '50-74%', value: '3' },
                    { label: 'Less than 50%', value: '4' },
                    { label: 'Not applicable for this session', value: '5' },
                ],
            },
            {
                QNo: "9",
                Question: "Did the resource person(s) ask training specific questions to the teachers to check if they are following the session?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'Yes, at the end of the session', value: '1' },
                    { label: 'Yes, at different points of the session', value: '2' },
                    { label: 'No questions were asked', value: '3' },
                    { label: 'Not applicable for this session', value: '4' },
                ],
            },
            {
                QNo: "10",
                Question: "How many participants asked questions or raised doubts during or after the session?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'More than 50%', value: '1' },
                    { label: '25-50%', value: '2' },
                    { label: 'Less than 25%', value: '3' },
                    { label: 'No questions or doubts were asked', value: '4' },
                ],
            },
            {
                QNo: "11",
                Question: "How was the content delivery?",
                AnsType: "12",
                Obser_focus: "",
                Options: [
                    { label: 'The content was clear - all of the explanation and discussion was about the topic', value: '1' },
                    { label: 'The content was not completely clear - some parts of the explanation or discussion were not related to the topic or too short/long', value: '2' },
                    { label: 'The content was not clear - most of the explanation or discussion was not about the topic or too short/long', value: '3' },
                    { label: 'Other', value: '4' },
                ],
            },
            {
                QNo: "12",
                Question: "How was learning summarized at the end of each session?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'The resource person(s) summarized the main points', value: '1' },
                    { label: 'The resource person(s) guided the participants to summarize the main points', value: '2' },
                    { label: 'There was no summary', value: '3' },
                ],
            }
        ];
        this.PP_Training1_7 = [
            {
                QNo: "1",
                Question: "How many of the participants were able to participate and complete all three acitivties?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'More than 90%', value: '1' },
                    { label: '75-90%', value: '2' },
                    { label: '50-74%', value: '3' },
                    { label: 'Less than 50%', value: '4' },
                    { label: 'Not applicable for this session', value: '5' },
                ],
            },
            {
                QNo: "2",
                Question: "Was the trainer able to deliver the content in an engaging friendly way to the participants?",
                AnsType: "1",
                Obser_focus: "",
                Options: [
                    { label: 'The content was clear - participants were able to have open discussions was about the topic', value: '1' },
                    { label: 'The content was not completely clear - some parts of the explanation or discussion were too prescriptive and not engaging', value: '2' },
                    { label: 'The content was not clear - most of the explanation or discussion was not about the topic or too short/long as well as not engaging the audience', value: '3' },
                    { label: 'Other', value: '4' },
                ],
            },
            {
                QNo: "3",
                Question: "Was the facilitator able to communicate the core agenda of Kalai Arangam",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Need for clarity', value: '1' },
                    { label: 'Some participants seemed to have clarity about some aspects', value: '2' },
                    { label: 'Majority participants seemed to have clarity about the core agenda.', value: '3' },
                    { label: 'All participants not only seem to have clarity but were sharing new ideas to add to the agenda', value: '4' },
                ],
            },
            {
                QNo: "4",
                Question: "Explanation of the processes and steps involved for screening and carrying out SHWP program was clear.",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Not Satisfactory', value: '1' },
                    { label: 'Satisfactory', value: '2' },
                    { label: 'Good', value: '3' },
                    { label: 'Very Good', value: '4' },
                ],
            },
            {
                QNo: "5",
                Question: "Simplification of medical concepts in the session by resource person",
                AnsType: "6",
                Obser_focus: "",
                Options: [
                    { label: 'Not Satisfactory', value: '1' },
                    { label: 'Satisfactory', value: '2' },
                    { label: 'Good', value: '3' },
                    { label: 'Very Good', value: '4' },
                ],
            }
        ];
        this.sessionEmisUsertype = this.usersessionService.emis_username();
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        this.dateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        this.form.reset();
        this.ActiveQuetion = false;
        this.QuesActive = false;
        this.cpt_ActiveQuestion = false;
        this.tpd2_ActiveQuestion = false;
        this.jsonActive = false;
        this.studentData();
    }
    initialValidator() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            one: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            two: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            three: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            four: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            five: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            six: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            class_flag: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
        });
        this.questionform = this.fb.group({
            survey_question: this.fb.array([]),
            itk_question: this.fb.array([]),
            training_question: this.fb.array([]),
            general_question: this.fb.array([]),
            cpt_question: this.fb.array([]),
            tpd_question: this.fb.array([]),
        });
    }
    goToBack() {
        this.router.navigate(['/tabs/home']);
    }
    onKeyup(item, nextElement, id) {
        if (item.keyCode == 8) {
            nextElement.setFocus();
        }
        if (id == 6) {
            if (item.keyCode == 13) {
                this.onUniqueCode();
            }
        }
    }
    gotoNextField(item, nextElement, id) {
        if (id == '1') {
            if (parseInt(this.form.value.one) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['one'].setValue('');
                this.form.controls['one'].updateValueAndValidity();
            }
        }
        if (id == '2') {
            if (parseInt(this.form.value.two) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['two'].setValue('');
                this.form.controls['two'].updateValueAndValidity();
            }
        }
        if (id == '3') {
            if (parseInt(this.form.value.three) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['three'].setValue('');
                this.form.controls['three'].updateValueAndValidity();
            }
        }
        if (id == '4') {
            if (parseInt(this.form.value.four) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['four'].setValue('');
                this.form.controls['four'].updateValueAndValidity();
            }
        }
        if (id == '5') {
            if (parseInt(this.form.value.five) <= 9) {
                nextElement.setFocus();
            }
            else {
                this.form.controls['five'].setValue('');
                this.form.controls['five'].updateValueAndValidity();
            }
        }
        if (id == '6') {
            if (parseInt(this.form.value.six) <= 9) {
            }
            else {
                this.form.controls['six'].setValue('');
                this.form.controls['six'].updateValueAndValidity();
            }
        }
    }
    onUniqueCode() {
        console.log(this.form.value);
        if (this.form.valid) {
            let value = this.form.value.one.toString() + this.form.value.two.toString();
            let value1 = value.toString() + this.form.value.three.toString();
            let value2 = value1.toString() + this.form.value.four.toString();
            let value3 = value2.toString() + this.form.value.five.toString();
            let value4 = value3.toString() + this.form.value.six.toString();
            this.otp = value4;
            debugger;
            this.userService.getOTPData(value4, this.dateFormat).subscribe(res => {
                if (res.dataStatus) {
                    this.QuesActive = true;
                    this.trainerCodeDate = res.result[0];
                    if (this.trainerCodeDate.ProgramType == '11' || this.trainerCodeDate.ProgramType == '12' ||
                        this.trainerCodeDate.ProgramType == '13' || this.trainerCodeDate.ProgramType == '17') {
                        this.ActiveQuetion = true;
                    }
                    if (this.trainerCodeDate.ProgramType == '21' || this.trainerCodeDate.ProgramType == '22' ||
                        this.trainerCodeDate.ProgramType == '23') {
                        this.PP_ActiveQuestion = true;
                    }
                    if (this.trainerCodeDate.ProgramType == '26') {
                        this.cpt_ActiveQuestion = true;
                    }
                    if (this.trainerCodeDate.ProgramType == '29' || this.trainerCodeDate.ProgramType == '30') {
                        this.tpd2_ActiveQuestion = true;
                    }
                    console.log(this.trainerCodeDate.ProgramType, "code");
                    this.studentData();
                }
                else {
                    this.QuesActive = false;
                    this.alertService.error('Invalid Code');
                    this.router.navigate(['/tabs/home']);
                    // this.studentData()
                }
            });
        }
        else {
            this.alertService.error('Invalid Code');
        }
    }
    onClassChange(event) {
        this.studentData();
        console.log(event, this.form.value.class_flag);
        if (this.form.value.class_flag == 1) {
        }
    }
    studentData() {
        this.jsonActive = false;
        var bucketName1 = "studentapp-content";
        var filename1 = "Payirchipaarvai_GenQuestion.json";
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName1, filename1, expiry).subscribe((result) => {
            if (result) {
                this.http.get(result.url).subscribe((data) => {
                    this.question = data;
                    this.questionJson3(this.question);
                });
            }
        });
        // this.questionJson3(this.PP_Training1_6)
        //   if(this.ActiveQuetion) {
        //   var bucketName = "studentapp-content";
        //   var filename ="Payirchipaarvai_TrainingSpecific1to5.json"
        //   let expiry1: number = 1800;
        //   this.uploadService.getUploadedFiles(bucketName, filename, expiry1).subscribe((result) => {
        //   if (result) {
        //   this.http.get<any>(result.url).subscribe((data) => {
        //   this.question1 = data;
        //   this.questionJson1(this.question1)
        //   console.log(this.question1,"this.question1")
        //   })
        //   }
        //   })
        // } else {
        //   const control = <FormArray>this.questionform.controls['itk_question'];
        //   for (let i = control.length - 1; i >= 0; i--) {
        //     control.removeAt(i)
        //   }
        // }
        // if(this.PP_ActiveQuestion) {
        //   this.questionJson2(this.PP_Training1_5);
        //   console.log(this.PP_Training1_5,"this.question2")
        // } 
        // if(this.cpt_ActiveQuestion) {
        //   this.questionJson4(this.PP_Training1_7);
        //   console.log(this.PP_Training1_7,"this.question3")
        // } 
        this.question5 = [];
        if (this.trainerCodeDate.ActiveJson == '1') {
            var bucketName = "studentapp-content";
            var filename = "Payirchi_Parvai_Training_Specific_" + this.trainerCodeDate.ProgramType + ".json";
            let expiry1 = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry1).subscribe((result) => {
                if (result) {
                    this.jsonActive = true;
                    this.http.get(result.url).subscribe((data) => {
                        this.question5 = data;
                        this.questionJson5(this.question5);
                    });
                }
                else {
                    this.jsonActive = false;
                }
            });
        }
        else {
            const control = this.questionform.controls['tpd_question'];
            for (let i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
            }
        }
    }
    questionJson(item) {
        const control = this.questionform.controls['survey_question'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = this.questionform.controls.survey_question;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist.push(this.fb.group({
                    IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    ProgramType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    OtpNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.otp),
                    Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].QNo),
                    Question: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Question),
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Options),
                    AnsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].AnsType),
                    Response: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
                    CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                }));
            }
            console.log(this.questionform.value, "questionform");
        }
    }
    questionJson1(item) {
        const control = this.questionform.controls['itk_question'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist1 = this.questionform.controls.itk_question;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist1.push(this.fb.group({
                    IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    ProgramType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    OtpNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.otp),
                    Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.queslist3.length + i + 1),
                    Question: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Question),
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Options),
                    AnsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].AnsType),
                    Response: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
                    CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                }));
            }
            console.log(this.questionform.value, "questionform");
        }
    }
    questionJson2(item) {
        const control = this.questionform.controls['training_question'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist2 = this.questionform.controls.training_question;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist2.push(this.fb.group({
                    IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    ProgramType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    OtpNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.otp),
                    Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(i + 1 + this.queslist3.length),
                    Question: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Question),
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Options),
                    AnsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].AnsType),
                    Response: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
                    CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                }));
            }
            console.log(this.questionform.value, "questionform");
        }
    }
    // general_question
    questionJson3(item) {
        const control = this.questionform.controls['general_question'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist3 = this.questionform.controls.general_question;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist3.push(this.fb.group({
                    IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    ProgramType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    OtpNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.otp),
                    Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].QNo),
                    Question: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Question),
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Options),
                    AnsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].AnsType),
                    Response: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
                    CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                }));
            }
            console.log(this.questionform.value, "questionform");
        }
    }
    questionJson5(item) {
        console.log(item, "item2234567");
        const control = this.questionform.controls['tpd_question'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist5 = this.questionform.controls.tpd_question;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist5.push(this.fb.group({
                    IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    ProgramType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    OtpNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.otp),
                    Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.queslist3.length + i + 1),
                    Question: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Question),
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Options),
                    AnsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].AnsType),
                    Response: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
                    CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                }));
            }
            console.log(this.questionform.value, "questionform");
        }
    }
    questionJson4(item) {
        const control = this.questionform.controls['cpt_question'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist4 = this.questionform.controls.cpt_question;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist4.push(this.fb.group({
                    IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    ProgramType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                    OtpNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.otp),
                    Qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.queslist3.length + i + 1),
                    Question: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Question),
                    option: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].Options),
                    AnsType: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(item[i].AnsType),
                    Response: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
                    CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
                }));
            }
            console.log(this.questionform.value, "questionform");
        }
    }
    onSave() {
        console.log(this.questionform);
        if (this.questionform.valid) {
            this.submitted = false;
            let record = [];
            this.recordData = [];
            for (let i = 0; i < this.queslist3.length; i++) {
                record = [{
                        "IndexId": "",
                        "ProgramType": this.trainerCodeDate.ProgramType,
                        "OtpNo": this.otp,
                        "Qid": this.queslist3.value[i].Qid,
                        "Response": this.queslist3.value[i].Response.toString(),
                        "CreationUser": this.sessionEmisUsertype
                    }];
                this.recordData.push(record[0]);
            }
            if (this.jsonActive) {
                for (let i = 0; i < this.queslist5.value.length; i++) {
                    record = [{
                            "IndexId": "",
                            "ProgramType": this.trainerCodeDate.ProgramType,
                            "OtpNo": this.otp,
                            "Qid": this.queslist5.value[i].Qid,
                            "Response": this.queslist5.value[i].Response.toString(),
                            "CreationUser": this.sessionEmisUsertype
                        }];
                    this.recordData.push(record[0]);
                }
            }
            //   if(this.ActiveQuetion){
            //       console.log("test")
            //       for(let i=0; i <= 4; i++){
            //         record =  [{
            //           "IndexId": "",
            //           "ProgramType": this.trainerCodeDate.ProgramType,
            //           "OtpNo": this.otp,
            //           "Qid": this.queslist1.value[i].Qid,
            //           "Response": this.queslist1.value[i].Response.toString(),
            //           "CreationUser": this.sessionEmisUsertype
            //       } ]
            //       this.recordData.push(record[0])
            //       }
            //   }
            //   if(this.PP_ActiveQuestion){
            //     console.log("test")
            //     for(let i=0; i <this.queslist2.value.length; i++){
            //       record =  [{
            //         "IndexId": "",
            //         "ProgramType": this.trainerCodeDate.ProgramType,
            //         "OtpNo": this.otp,
            //         "Qid": this.queslist2.value[i].Qid,
            //         "Response": this.queslist2.value[i].Response.toString(),
            //         "CreationUser": this.sessionEmisUsertype
            //     } ]
            //     this.recordData.push(record[0])
            //     }
            // }
            // if(this.cpt_ActiveQuestion){
            //   for(let i=0; i <this.queslist4.value.length; i++){
            //     record =  [{
            //       "IndexId": "",
            //       "ProgramType": this.trainerCodeDate.ProgramType,
            //       "OtpNo": this.otp,
            //       "Qid":  this.queslist4.value[i].Qid,
            //       "Response": this.queslist4.value[i].Response.toString(),
            //       "CreationUser": this.sessionEmisUsertype
            //   } ]
            //     this.recordData.push(record[0])
            //     }
            // }
            // if(this.tpd2_ActiveQuestion){
            //   for(let i=0; i <this.queslist5.value.length; i++){
            //     record =  [{
            //       "IndexId": "",
            //       "ProgramType": this.trainerCodeDate.ProgramType,
            //       "OtpNo": this.otp,
            //       "Qid":  this.queslist5.value[i].Qid,
            //       "Response": this.queslist5.value[i].Response.toString(),
            //       "CreationUser": this.sessionEmisUsertype
            //   } ]
            //   this.recordData.push(record[0])
            //   }
            // }
            let data = {
                "records": this.recordData
            };
            console.log(data, "data");
            this.userService.savepayirchiparvai(data).subscribe(res => {
                console.log(res, "res");
                this.alertService.success('Success');
                this.router.navigate(['/tabs/home']);
            });
        }
        else {
            this.submitted = true;
            this.alertService.error('Please Fill all the Required Fields');
            this.validateAllFormFields(this.questionform);
            this.questionform.markAllAsTouched();
            this.focusValidator();
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    focusValidator() {
        const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
        invalidControl.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        // invalidControl.scrollTo(50, 0);
        invalidControl.focus();
    }
    ionViewWillLeave() {
        this.submitted = false;
    }
};
NewInspectionQuestionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService }
];
NewInspectionQuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-new-inspection-question',
        template: _raw_loader_new_inspection_question_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_inspection_question_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewInspectionQuestionPage);



/***/ }),

/***/ 43625:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-inspection-question/new-inspection-question.page.scss ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".otpEnter {\n  border: 2px solid #707070;\n  border-radius: 10%;\n  text-align: center;\n}\n\n.school {\n  border-top: dotted;\n  border-bottom: dotted;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\n.valid-clr {\n  color: red;\n}\n\nion-input {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.input-clr {\n  padding-left: 10px !important;\n}\n\nion-select {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.trainIdstyle {\n  padding-left: 10px;\n}\n\nion-datetime {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.normal {\n  border-bottom: 1px solid;\n}\n\n.error {\n  border-bottom: 1px solid;\n  opacity: 1;\n  border: 1px solid red;\n  box-shadow: 0px 0px 5px 1px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1pbnNwZWN0aW9uLXF1ZXN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRztFQUNDLDZCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQUFGIiwiZmlsZSI6Im5ldy1pbnNwZWN0aW9uLXF1ZXN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdHBFbnRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0gXHJcblxyXG4gIC5zY2hvb2wge1xyXG4gICAgYm9yZGVyLXRvcDogZG90dGVkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcblxyXG4gIC52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgIH1cclxuXHJcbiAgIC5pbnB1dC1jbHIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH0gXHJcbiBcclxuICBpb24tc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAudHJhaW5JZHN0eWxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLy8gY29sb3I6IGJyb3duO1xyXG4gIH1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhiNjdiMztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4OyAgXHJcbn1cclxuXHJcbi5ub3JtYWx7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZWQ7XHJcbn1cclxuXHJcbiAgIl19 */");

/***/ }),

/***/ 40071:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/new-inspection-question/new-inspection-question.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>பயிற்சி பார்வை</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 4%;\">\r\n    <ion-row style=\"background-color: aliceblue;padding: 2%;\">\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-label style=\"font-weight: bolder;\"> Please Enter The OTP <span class=\"valid-clr\">*</span></ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1.9\">\r\n        <ion-input #Field1 type=\"number\" maxlength=\"1\" formControlName=\"one\" class=\"otpEnter\"\r\n          (ionChange)=\"gotoNextField($event,Field2,'1')\" (keyup)=\"onKeyup($event,Field1,'1')\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1.9\">\r\n        <ion-input #Field2 type=\"number\" maxlength=\"1\" formControlName=\"two\" class=\"otpEnter\"\r\n          (ionChange)=\"gotoNextField($event,Field3,'2')\" (keyup)=\"onKeyup($event,Field1,'2')\"> </ion-input>\r\n      </ion-col>\r\n      `\r\n      <ion-col size=\"1.9\">\r\n        <ion-input #Field3 type=\"number\" maxlength=\"1\" formControlName=\"three\" class=\"otpEnter\"\r\n          (ionChange)=\"gotoNextField($event,Field4,'3')\" (keyup)=\"onKeyup($event,Field2,'3')\"> </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1.9\">\r\n        <ion-input #Field4 type=\"number\" maxlength=\"1\" formControlName=\"four\" class=\"otpEnter\"\r\n          (ionChange)=\"gotoNextField($event,Field5,'4')\" (keyup)=\"onKeyup($event,Field3,'4')\"> </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1.9\">\r\n        <ion-input #Field5 type=\"number\" maxlength=\"1\" formControlName=\"five\" class=\"otpEnter\"\r\n          (ionChange)=\"gotoNextField($event,Field6,'5')\" (keyup)=\"onKeyup($event,Field4,'5')\"> </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1.9\">\r\n        <ion-input #Field6 type=\"number\" maxlength=\"1\" formControlName=\"six\" class=\"otpEnter\"\r\n          (ionChange)=\"gotoNextField($event,Field7,'6')\" (keyup)=\"onKeyup($event,Field5,'6')\"> </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <div class=\"text-center\" (click)=\"onUniqueCode()\">\r\n          <ion-button style=\"color:white\">Submit</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"QuesActive\">\r\n        <ion-row class=\"school trainIdstyle\">\r\n          <ion-col size=\"12\" style=\"color: black;\" *ngIf=\"trainerCodeDate.sch_other_yn == 1\">\r\n            <ion-label>School Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: black;\" *ngIf=\"trainerCodeDate.sch_other_yn == 2\">\r\n            <ion-label>Venue Location</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\" *ngIf=\"trainerCodeDate.sch_other_yn == 1\">\r\n            <ion-label>{{trainerCodeDate.SchlName}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\" *ngIf=\"trainerCodeDate.sch_other_yn == 2\">\r\n            <ion-label>{{trainerCodeDate.VenueLocation}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: black;\">\r\n            <ion-label>Trainner Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.Trainername}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: black;\">\r\n            <ion-label>Program Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.ProgramName}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </form>\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"QuesActive\">\r\n        <ion-label class=\"ques-txt\">\r\n          Classes<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"class_flag\"\r\n          (ionChange)=\"onClassChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of class_flag\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"form.controls['class_flag'].hasError('required') && (form.controls['class_flag'].dirty || form.controls['class_flag'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col> -->\r\n\r\n      <form [formGroup]=\"questionform\" class=\"form-horizontal\" style=\"margin: 4%;background-color: aliceblue;padding: 2%;\" *ngIf=\"QuesActive\">\r\n        <div formArrayName=\"general_question\">\r\n\r\n          <ion-row size=\"12\" *ngFor=\"let item of questionform.get('general_question')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n\r\n              <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 9\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\"  type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                  formControlName=\"Response\" maxlength=\"4\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n \r\n              <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 11\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n              <!-- <ion-datetime type=\"time\" displayFormat=\"hh:mm:ss\" placeholder=\"Select Time\" formControlName=\"Response\">\r\n              </ion-datetime> -->\r\n                <!-- <ion-input type=\"time\" placeholder=\"Time\" class=\"input-clr\"\r\n                  formControlName=\"Response\">\r\n                </ion-input> -->\r\n                <ion-datetime [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" presentation=\"time\" class=\"input-clr\" displayFormat=\"hh:mm A\" formControlName=\"Response\" placeholder=\"Select Start Time\"></ion-datetime>\r\n\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 6\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" \r\n                  formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\">\r\n                  <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" *ngIf=\"item.value.AnsType == 1\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\">\r\n                  <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" *ngIf=\"item.value.AnsType == 12\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\">\r\n                  <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n               <!-- <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.Qid == 11 && showother\">\r\n                <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                  formControlName=\"Response\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col> -->\r\n\r\n            </ion-row>\r\n          </div>\r\n\r\n          <div formArrayName=\"tpd_question\" *ngIf=\"jsonActive\">\r\n            <ion-row size=\"12\" *ngFor=\"let item of questionform.get('tpd_question')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n                <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 9\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\"  type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                    formControlName=\"Response\" maxlength=\"4\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n   \r\n                <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 11\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-datetime [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" presentation=\"time\" class=\"input-clr\" displayFormat=\"hh:mm A\" formControlName=\"Response\" placeholder=\"Select Start Time\"></ion-datetime>\r\n  \r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n  \r\n                <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 6\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" \r\n                    formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\">\r\n                    <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n  \r\n                <ion-col size=\"12\" *ngIf=\"item.value.AnsType == 1\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\">\r\n                    <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n  \r\n                <ion-col size=\"12\" *ngIf=\"item.value.AnsType == 12\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\">\r\n                    <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n  \r\n              </ion-row>\r\n            </div>\r\n          \r\n\r\n          <!-- <div formArrayName=\"cpt_question\" *ngIf=\"cpt_ActiveQuestion\">\r\n\r\n            <ion-row size=\"12\" *ngFor=\"let item of questionform.get('cpt_question')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n  \r\n                <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 9\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                    formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n  \r\n                <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 6\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" \r\n                    formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                    <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n  \r\n                <ion-col size=\"12\" *ngIf=\"item.value.AnsType == 1\">\r\n                  <ion-label class=\"ques-txt\">\r\n                    {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                    <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n  \r\n              </ion-row>\r\n            </div>\r\n\r\n        <div formArrayName=\"itk_question\" *ngIf=\"ActiveQuetion\">\r\n          <ion-row class=\"text-aln\"\r\n            *ngFor=\"let item of questionform.get('itk_question')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n\r\n              <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 9\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                  formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 6\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n                  formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                  <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" *ngIf=\"item.value.AnsType == 1\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                  <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n        </div>\r\n\r\n        <div formArrayName=\"training_question\" *ngIf=\"PP_ActiveQuestion\">\r\n          <ion-row class=\"text-aln\"\r\n            *ngFor=\"let item of questionform.get('training_question')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n\r\n              <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 9\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n                  formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"item.value.AnsType == 6\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n                  formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                  <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" *ngIf=\"item.value.AnsType == 1\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Qid}} . {{item.value.Question}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"Response\" [ngClass]=\"submitted && item.controls['Response'].hasError('required') ? 'error' : 'normal'\" >\r\n                  <ion-select-option *ngFor=\"let data of item.value.option\" [value]=\"data.label\"> {{data.label}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(item.controls['Response'].hasError('required')) && (item.controls['Response'].dirty || item.controls['Response'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n        </div> -->\r\n      </form>\r\n\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\" *ngFor=\"let item of Data\">\r\n        <ion-label class=\"ques-txt\">\r\n          {{item.QNo}} .  {{item.Question}}<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" \r\n        >\r\n        <ion-select-option *ngFor=\"let data of item.Options\" [value]=\"data.value\"> {{data.label}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n      </ion-col> -->\r\n \r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" style=\"background-color: transparent !important;\" (click)=\"onSave()\" *ngIf=\"QuesActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;font-weight:500;\">\r\n      <div>\r\n        <ion-button disabled=\"false\" style=\"width: 100%; color: white;height: 60px;\">\r\n          Save\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_new-inspection-question_new-inspection-question_m-bcb638-es2015.js.map