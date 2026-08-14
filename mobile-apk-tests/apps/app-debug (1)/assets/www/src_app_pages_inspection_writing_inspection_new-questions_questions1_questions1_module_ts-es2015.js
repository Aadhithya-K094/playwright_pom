(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_new-questions_questions1_questions1_module_ts"],{

/***/ 2210:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions1/questions1-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Questions1PageRoutingModule": function() { return /* binding */ Questions1PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _questions1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions1.page */ 74893);




const routes = [
    {
        path: '',
        component: _questions1_page__WEBPACK_IMPORTED_MODULE_0__.Questions1Page
    }
];
let Questions1PageRoutingModule = class Questions1PageRoutingModule {
};
Questions1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Questions1PageRoutingModule);



/***/ }),

/***/ 90473:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions1/questions1.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Questions1PageModule": function() { return /* binding */ Questions1PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _questions1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions1-routing.module */ 2210);
/* harmony import */ var _questions1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions1.page */ 74893);







let Questions1PageModule = class Questions1PageModule {
};
Questions1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _questions1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Questions1PageRoutingModule
        ],
        declarations: [_questions1_page__WEBPACK_IMPORTED_MODULE_1__.Questions1Page]
    })
], Questions1PageModule);



/***/ }),

/***/ 74893:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions1/questions1.page.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Questions1Page": function() { return /* binding */ Questions1Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_questions1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./questions1.page.html */ 68896);
/* harmony import */ var _questions1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions1.page.scss */ 66160);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);










let Questions1Page = class Questions1Page {
    constructor(fb, userService, router, route, userSessionService, alertService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.questionData = [];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
        this.class_flag = [
            { "value": "1", "label": "Classes 1-3" },
            { "value": "2", "label": "Classes 4-5" },
            { "value": "3", "label": "Classes 6-10" },
            { "value": "4", "label": "Classes 11-12" }
        ];
        this.meeting2 = [
            { value: "1", label: "Sharing of best practices" },
            { value: "2", label: "Planning for the next month and participant demo presentations" },
            { value: "3", label: "TLM Preparation" },
            { value: "4", label: "Doubts Clarification" }
        ];
        this.adop1 = [
            { value: "1", label: "Computer" },
            { value: "2", label: "Projector" },
            { value: "3", label: "Speaker" },
            { value: "4", label: "Mic" },
            { value: "5", label: "LCD-TV" },
        ];
        this.adop2 = [
            { value: "1", label: "Handout" },
            { value: "2", label: "TLMs" },
            { value: "3", label: "Videos" },
            { value: "4", label: "Not applicable" }
        ];
        this.adop3 = [
            { value: "1", label: "Ask doubts at the end of the session" },
            { value: "2", label: "Avoid phone usage during the session" },
            { value: "3", label: "Listen and participate during the session" },
            { value: "4", label: "Be on time after break" },
            { value: "5", label: "None" }
        ];
        this.adop4 = [
            { value: "1", label: "More than 90%" },
            { value: "2", label: "75-90%" },
            { value: "3", label: "50-75%" },
            { value: "4", label: "Less than 50%" }
        ];
        this.adop5 = [
            { value: "1", label: "Explained the practices" },
            { value: "2", label: "Demonstrated the practices" },
            { value: "3", label: "Shared TLMs used in their classrooms" },
            { value: "4", label: "Shared photos/videos from their classrooms" },
            { value: "5", label: "Presented the outcomes of those practices" }
        ];
        this.adop6 = [
            { value: "1", label: "Read the THB/WB independently" },
            { value: "2", label: "Discussed the activities in groups" },
            { value: "3", label: "Created TLMs" },
            { value: "4", label: "Performed short demos for each other" },
            { value: "5", label: "Filled the Lesson Plan format" }
        ];
        this.adop7 = [
            { value: "1", label: "Walked around and observed preparation" },
            { value: "2", label: "Shared observation and feedback with the teachers" },
            { value: "3", label: "Mostly watched teachers practice" },
            { value: "4", label: "Didn't support" },
            { value: "5", label: "Demo did not happen" }
        ];
        this.adop8 = [
            { value: "1", label: "More than 90%" },
            { value: "2", label: "75-90%" },
            { value: "3", label: "50-75%" },
            { value: "4", label: "Less than 50%" },
            { value: "5", label: "Demo did not happen" }
        ];
        this.adop9 = [
            { value: "1", label: "More than 90%" },
            { value: "2", label: "75-90%" },
            { value: "3", label: "50-75%" },
            { value: "4", label: "Less than 50%" },
            { value: "5", label: "TLM preparation didn't happen" }
        ];
        this.adop10 = [
            { value: "1", label: "Walked around the space and observed discussions" },
            { value: "2", label: "Cleared doubts" },
            { value: "3", label: "Did not support" },
            { value: "4", label: "Other" }
        ];
        this.adop11 = [
            { value: "1", label: "Actively discussed in small groups" },
            { value: "2", label: "Actively discussed as one large group" },
            { value: "3", label: "Mostly listened to what the facilitator shared/modelled" },
            { value: "4", label: "Mostly listened to what the facilitator shared/modelled" },
            { value: "5", label: "Mostly listened to what a few teachers shared/modelled" }
        ];
        this.align1 = [
            { value: "1", label: "More than 90%" },
            { value: "2", label: "75-90%" },
            { value: "3", label: "50-75%" },
            { value: "4", label: "Less than 50%" }
        ];
        this.fac1 = [
            { value: "1", label: "Video was played but was not followed by a discussion" },
            { value: "2", label: "Video was played, followed by a discussion" },
            { value: "3", label: "Video was not played" },
            { value: "4", label: "Other" }
        ];
        this.fac2 = [
            { value: "1", label: "Yes, at the end of the session" },
            { value: "2", label: "Yes, at different points of the session" },
            { value: "3", label: "No questions were asked" }
        ];
        this.fac3 = [
            { value: "1", label: "More than 50%" },
            { value: "2", label: "25-50%" },
            { value: "3", label: "Less than 25%" },
            { value: "4", label: "No questions or doubts were asked" }
        ];
        this.fac4 = [
            { value: "1", label: "Yes, facilitator summarized the main points" },
            { value: "2", label: "Yes, facilitator guided the participants to summarise the main points" },
            { value: "3", label: "No" }
        ];
        this.meeting11 = [
            { value: "1", label: "Std 6-10 Tamil" },
            { value: "2", label: "Std 6-10 English" },
            { value: "3", label: "Std 6-10 Maths" },
            { value: "4", label: "Std 6-10 Science" },
            { value: "5", label: "Std 6-10 Social science" }
        ];
        this.meeting111 = [
            { value: "1", label: "Std 1-3 Tamil" },
            { value: "2", label: "Std 1-3 English" },
            { value: "3", label: "Std 1-3 Maths" },
            { value: "4", label: "Std 1-3 Phonetics" },
        ];
        this.meeting112 = [
            { value: "1", label: "Std 4-5 Tamil" },
            { value: "2", label: "Std 4-5 English" },
            { value: "3", label: "Std 4-5 Maths" },
            { value: "4", label: "Std 4-5 Bridge Course" },
            { value: "5", label: "Std 4-5 Spoken English" }
        ];
        this.meeting12 = [
            { value: "1", label: "Previous month's lesson review" },
            { value: "2", label: "Previous month's lesson exemplar" },
            { value: "3", label: "Planning for the next month" },
            { value: "4", label: "Next month's lesson exemplar" },
            { value: "5", label: "Psychometric game" }
        ];
        this.adop21 = [
            { value: "1", label: "Computer" },
            { value: "2", label: "Projector" },
            { value: "3", label: "Speaker" },
            { value: "4", label: "Mic" },
            { value: "5", label: "LCD" }
        ];
        this.adop22 = [
            { value: "1", label: "Linktree Mapped in Facilitator's App" },
            { value: "2", label: "Text books" },
            { value: "3", label: "Low cost TLMs" }
        ];
        this.adop23 = [
            { value: "1", label: "Ask doubts at the end of the session" },
            { value: "2", label: "Avoid phone usage during the session" },
            { value: "3", label: "Listen and participate during the session" },
            { value: "4", label: "Be on time after break" },
            { value: "5", label: "None" }
        ];
        this.align21 = [
            { value: "1", label: "More than 90%" },
            { value: "2", label: "75-90%" },
            { value: "3", label: "50-75%" },
            { value: "4", label: "Less than 50%" }
        ];
        this.align27 = [
            { value: "1", label: "Actively discussed in small groups" },
            { value: "2", label: "Actively discussed as one large group" },
            { value: "3", label: "Mostly listened to what the RP shared/modelled" },
            { value: "4", label: "Mostly listened to what a few participants shared/modelled" }
        ];
        this.align28 = [
            { value: "1", label: "Facilitator displayed the video" },
            { value: "2", label: "Facilitator gave instructions to play the game" },
            { value: "3", label: "Facilitator played the game" },
            { value: "4", label: "Participants played the game" }
        ];
        this.align29 = [
            { value: "1", label: "Walked around and observed" },
            { value: "2", label: "Shared observation and feedback to the teachers" },
            { value: "3", label: "Mostly watched teachers practice" },
            { value: "4", label: "Not supported" }
        ];
        this.fac_prac1 = [
            { value: "1", label: "Yes, at the end of the session" },
            { value: "2", label: "Yes, at different points of the session" },
            { value: "3", label: "No questions were asked" }
        ];
        this.fac_prac2 = [
            { value: "1", label: "More than 50%" },
            { value: "2", label: "25-50%" },
            { value: "3", label: "Less than 25%" },
            { value: "4", label: "No questions or doubts were asked" }
        ];
        this.fac_prac3 = [
            { value: "1", label: "Yes- Facilitator summarized the major points" },
            { value: "2", label: "Yes - Facilitator guided the participants to summarise the main points" },
            { value: "3", label: "No" }
        ];
        this.meeting32 = [
            { value: "1", label: "Group discussion for remedial activities" },
            { value: "2", label: "Learning outcomes and Assessment" },
            { value: "3", label: "Spoken English" }
        ];
        this.adop31 = [
            { value: "1", label: "Computer" },
            { value: "2", label: "Projector" },
            { value: "3", label: "Speaker" },
            { value: "4", label: "Mic" },
            { value: "5", label: "LCD TV" }
        ];
        this.adop32 = [
            { value: "1", label: "Ask doubts at the end of the session" },
            { value: "2", label: "Avoid phone usage during the session" },
            { value: "3", label: "Listen and participate during the session" },
            { value: "4", label: "Be on time after break" },
            { value: "5", label: "None" }
        ];
        this.adop33 = [
            { value: "1", label: "Walked around and observed" },
            { value: "2", label: "Shared observation and feedback to the teachers" },
            { value: "3", label: "Mostly watched teachers practice " },
            { value: "4", label: "Did not support" }
        ];
        this.adop34 = [
            { value: "1", label: "Actively discussed in small groups" },
            { value: "2", label: "Actively discussed as one large group" },
            { value: "3", label: "Mostly listened to what the facilitator shared/modelled" },
            { value: "4", label: "Mostly listened to what a few participants shared/modelled" }
        ];
        this.align31 = [
            { value: "1", label: "More than 90%" },
            { value: "2", label: "75-90%" },
            { value: "3", label: "50-75%" },
            { value: "4", label: "Less than 50%" }
        ];
        this.fac_prac31 = [
            { value: "1", label: "Yes, at the end of the session" },
            { value: "2", label: "Yes, at different points of the session" },
            { value: "3", label: "No questions were asked" }
        ];
        this.fac_prac32 = [
            { value: "1", label: "More than 50%" },
            { value: "2", label: "25-50%" },
            { value: "3", label: "Less than 25%" },
            { value: "4", label: "No questions or doubts were asked" }
        ];
        this.fac_prac33 = [
            { value: "1", label: "Yes- Facilitator summarized the major points" },
            { value: "2", label: "Yes - Facilitator guided the participants to summarise the main points" },
            { value: "3", label: "No" }
        ];
        this.general1 = [
            { value: "1", label: "Grade 1 to 3" },
            { value: "2", label: "Grade 4 & 5" },
            { value: "3", label: "Grade 6 to 10" },
            { value: "4", label: "Grade 11 & 12" }
        ];
        this.general2 = [
            { value: "1", label: "Tamil" },
            { value: "2", label: "English" },
            { value: "3", label: "Mathematics" },
            { value: "4", label: "Science" },
            { value: "5", label: "Social" }
        ];
        this.general5 = [
            { value: "1", label: "Tamil" },
            { value: "2", label: "English" },
            { value: "3", label: "Mathematics" },
            { value: "4", label: "Phonetics" }
        ];
        this.general6 = [
            { value: "1", label: "Tamil" },
            { value: "2", label: "English" },
            { value: "3", label: "Mathematics" },
            { value: "4", label: "Bridge Course" },
            { value: "5", label: "Spoken English" }
        ];
        this.general3 = [
            { value: "1", label: "Std 11-12 Tamil" },
            { value: "2", label: "Std 11-12 English" },
            { value: "3", label: "Std 11-12 Mathematics" },
            { value: "4", label: "Std 11-12 Physics" },
            { value: "5", label: "Std 11-12 Chemistry" },
            { value: "6", label: "Std 11-12 Biology" },
            { value: "7", label: "Std 11-12 Computer Science" },
            { value: "8", label: "Std 11-12 Economics" },
            { value: "9", label: "Std 11-12 Commerce" },
            { value: "10", label: "Std 11-12 Accountancy" },
            { value: "11", label: "Std 11-12 History" },
            { value: "12", label: "Std 11-12 Geography" }
        ];
        this.general4 = [
            { "value": "1", "label": "Yes" },
            { "value": "2", "label": "No" }
        ];
        this.mathsSever = false;
        this.sessionSever = false;
        this.queslistData = [];
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        debugger;
        this.form.reset();
        this.questionform.reset();
        this.QuesActive = false;
        this.dateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
        this.emis_username = this.userSessionService.emis_username();
        this.routeData = this.route.snapshot;
        this.id = this.routeData.queryParams.id;
        this.teacherid = this.routeData.queryParams.userid;
        this.date = this.routeData.queryParams.date;
        this.page = this.routeData.queryParams.page;
        this.time = this.routeData.queryParams.time;
    }
    initialValidator() {
        this.form = this.fb.group({
            training_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            class_flag: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
        this.questionform = this.fb.group({
            general1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            general2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            meeting1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            meeting2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            meeting3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop4: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop5: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop6: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop7: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop8: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop9: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop10: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adop11: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align4: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align5: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align6: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align7: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align8: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align9: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            align10: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            fac_prac1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            fac_prac2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            fac_prac3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            fac_prac4: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
    }
    onUniqueCode() {
        console.log(this.form.value, this.dateFormat);
        debugger;
        this.trainerCodeDate = [];
        this.userService.getUniCodeData(this.form.value.training_id, this.dateFormat).subscribe(res => {
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
    onChange(event) {
        debugger;
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        console.log(this.questionform.value.meeting2);
        let value = this.questionform.value.meeting2;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 1) {
                    this.active1 = true;
                }
                if (res == 2) {
                    this.active2 = true;
                }
                if (res == 3) {
                    this.active3 = true;
                }
            });
        }
    }
    onChanges3(event) {
        this.active31 = false;
        let value = this.questionform.value.meeting2;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 1) {
                    this.active31 = true;
                }
            });
        }
    }
    onChange2(event) {
        this.active11 = false;
        this.active12 = false;
        this.active13 = false;
        this.active14 = false;
        this.active15 = false;
        console.log(this.questionform.value.meeting2);
        let value = this.questionform.value.meeting2;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 1) {
                    this.active11 = true;
                }
                if (res == 2) {
                    this.active12 = true;
                }
                if (res == 3) {
                    this.active13 = true;
                }
                if (res == 4) {
                    this.active14 = true;
                }
                if (res == 5) {
                    this.active15 = true;
                }
            });
        }
    }
    goToBack() {
        this.router.navigate(['/tabs/home']);
    }
    onSubjectChange(event) {
        debugger;
        if (this.questionform.value.general1 == 2) {
            this.questionform.controls['general2'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['general2'].setValue("");
            this.questionform.controls['general2'].setValidators(null);
        }
        this.questionform.controls['general2'].updateValueAndValidity();
    }
    onClassChange(event) {
        console.log(event, this.form.value.class_flag);
        if (this.form.value.class_flag == 1) {
            // if (this.form.value.class_flag == 1) {
            //     this.questionform.controls['meeting3'].setValue("");
            //     this.questionform.controls['meeting3'].setValidators(null);
            //     this.questionform.controls['align3'].setValue("");
            //     this.questionform.controls['align3'].setValidators(null);
            //     this.questionform.controls['align4'].setValue("");
            //     this.questionform.controls['align4'].setValidators(null);
            //     this.questionform.controls['align5'].setValue("");
            //     this.questionform.controls['align5'].setValidators(null);
            //     this.questionform.controls['align6'].setValue("");
            //     this.questionform.controls['align6'].setValidators(null);
            //     this.questionform.controls['align7'].setValue("");
            //     this.questionform.controls['align7'].setValidators(null);
            //     this.questionform.controls['align8'].setValue("");
            //     this.questionform.controls['align8'].setValidators(null);
            //     this.questionform.controls['align9'].setValue("");
            //     this.questionform.controls['align9'].setValidators(null);
            //     this.questionform.controls['align10'].setValue("");
            //     this.questionform.controls['align10'].setValidators(null);
            // } else {
            //     this.questionform.controls['meeting3'].setValidators(Validators.required);
            //     this.questionform.controls['align3'].setValidators(Validators.required);
            //     this.questionform.controls['align4'].setValidators(Validators.required);
            //     this.questionform.controls['align5'].setValidators(Validators.required);
            //     this.questionform.controls['align6'].setValidators(Validators.required);
            //     this.questionform.controls['align7'].setValidators(Validators.required);
            //     this.questionform.controls['align8'].setValidators(Validators.required);
            //     this.questionform.controls['align9'].setValidators(Validators.required);
            //     this.questionform.controls['align10'].setValidators(Validators.required);
            // }
            // this.questionform.controls['meeting3'].updateValueAndValidity();
            // this.questionform.controls['align3'].updateValueAndValidity();
            // this.questionform.controls['align4'].updateValueAndValidity();
            // this.questionform.controls['align5'].updateValueAndValidity();
            // this.questionform.controls['align6'].updateValueAndValidity();
            // this.questionform.controls['align7'].updateValueAndValidity();
            // this.questionform.controls['align8'].updateValueAndValidity();
            // this.questionform.controls['align9'].updateValueAndValidity();
            // this.questionform.controls['align10'].updateValueAndValidity();
        }
        if (this.form.value.class_flag == 1 || this.form.value.class_flag == 2 || this.form.value.class_flag == 3) {
            if (this.form.value.class_flag == 1 || this.form.value.class_flag == 2 || this.form.value.class_flag == 3) {
                this.questionform.controls['adop4'].setValue("");
                this.questionform.controls['adop4'].setValidators(null);
                this.questionform.controls['adop5'].setValue("");
                this.questionform.controls['adop5'].setValidators(null);
                this.questionform.controls['adop6'].setValue("");
                this.questionform.controls['adop6'].setValidators(null);
                this.questionform.controls['adop7'].setValue("");
                this.questionform.controls['adop7'].setValidators(null);
                this.questionform.controls['adop8'].setValue("");
                this.questionform.controls['adop8'].setValidators(null);
                this.questionform.controls['adop9'].setValue("");
                this.questionform.controls['adop9'].setValidators(null);
                this.questionform.controls['adop10'].setValue("");
                this.questionform.controls['adop10'].setValidators(null);
                this.questionform.controls['adop11'].setValue("");
                this.questionform.controls['adop11'].setValidators(null);
                this.questionform.controls['fac_prac4'].setValue("");
                this.questionform.controls['fac_prac4'].setValidators(null);
            }
            else {
                this.questionform.controls['adop4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop5'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop6'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop7'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop8'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop9'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop10'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop11'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['fac_prac4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            this.questionform.controls['adop4'].updateValueAndValidity();
            this.questionform.controls['adop5'].updateValueAndValidity();
            this.questionform.controls['adop6'].updateValueAndValidity();
            this.questionform.controls['adop7'].updateValueAndValidity();
            this.questionform.controls['adop8'].updateValueAndValidity();
            this.questionform.controls['adop9'].updateValueAndValidity();
            this.questionform.controls['adop10'].updateValueAndValidity();
            this.questionform.controls['adop11'].updateValueAndValidity();
            this.questionform.controls['fac_prac4'].updateValueAndValidity();
        }
        if (this.form.value.class_flag == 4) {
            if (this.form.value.class_flag == 4) {
                this.questionform.controls['meeting3'].setValue("");
                this.questionform.controls['meeting3'].setValidators(null);
                this.questionform.controls['adop5'].setValue("");
                this.questionform.controls['adop5'].setValidators(null);
                this.questionform.controls['adop6'].setValue("");
                this.questionform.controls['adop6'].setValidators(null);
                this.questionform.controls['adop7'].setValue("");
                this.questionform.controls['adop7'].setValidators(null);
                this.questionform.controls['adop8'].setValue("");
                this.questionform.controls['adop8'].setValidators(null);
                this.questionform.controls['adop9'].setValue("");
                this.questionform.controls['adop9'].setValidators(null);
                this.questionform.controls['adop10'].setValue("");
                this.questionform.controls['adop10'].setValidators(null);
                this.questionform.controls['adop11'].setValue("");
                this.questionform.controls['adop11'].setValidators(null);
                this.questionform.controls['align3'].setValue("");
                this.questionform.controls['align3'].setValidators(null);
                this.questionform.controls['align4'].setValue("");
                this.questionform.controls['align4'].setValidators(null);
                this.questionform.controls['align5'].setValue("");
                this.questionform.controls['align5'].setValidators(null);
                this.questionform.controls['align6'].setValue("");
                this.questionform.controls['align6'].setValidators(null);
                this.questionform.controls['align7'].setValue("");
                this.questionform.controls['align7'].setValidators(null);
                this.questionform.controls['align8'].setValue("");
                this.questionform.controls['align8'].setValidators(null);
                this.questionform.controls['align9'].setValue("");
                this.questionform.controls['align9'].setValidators(null);
                this.questionform.controls['align10'].setValue("");
                this.questionform.controls['align10'].setValidators(null);
                this.questionform.controls['fac_prac4'].setValue("");
                this.questionform.controls['fac_prac4'].setValidators(null);
            }
            else {
                this.questionform.controls['meeting3'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop5'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop6'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop7'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop8'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop9'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop10'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['adop11'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align3'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align5'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align6'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align7'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align8'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align9'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align10'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['fac_prac4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            this.questionform.controls['meeting3'].updateValueAndValidity();
            this.questionform.controls['adop5'].updateValueAndValidity();
            this.questionform.controls['adop6'].updateValueAndValidity();
            this.questionform.controls['adop7'].updateValueAndValidity();
            this.questionform.controls['adop8'].updateValueAndValidity();
            this.questionform.controls['adop9'].updateValueAndValidity();
            this.questionform.controls['adop10'].updateValueAndValidity();
            this.questionform.controls['adop11'].updateValueAndValidity();
            this.questionform.controls['align3'].updateValueAndValidity();
            this.questionform.controls['align4'].updateValueAndValidity();
            this.questionform.controls['align5'].updateValueAndValidity();
            this.questionform.controls['align6'].updateValueAndValidity();
            this.questionform.controls['align7'].updateValueAndValidity();
            this.questionform.controls['align8'].updateValueAndValidity();
            this.questionform.controls['align9'].updateValueAndValidity();
            this.questionform.controls['align10'].updateValueAndValidity();
            this.questionform.controls['fac_prac4'].updateValueAndValidity();
        }
    }
    onChanges(event) {
        this.adop5active1 = false;
        let value = this.questionform.value.adop2;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 3) {
                    this.adop5active1 = true;
                }
            });
        }
    }
    onSave() {
        debugger;
        // if (this.form.value.class_flag == 1) {
        //     if (this.active1) {
        //         this.questionform.controls['adop4'].setValidators(Validators.required);
        //         this.questionform.controls['adop5'].setValidators(Validators.required);
        //     } else {
        //         this.questionform.controls['adop4'].setValue("");
        //         this.questionform.controls['adop4'].setValidators(null);
        //         this.questionform.controls['adop5'].setValue("");
        //         this.questionform.controls['adop5'].setValidators(null);
        //     }
        //     this.questionform.controls['adop4'].updateValueAndValidity();
        //     this.questionform.controls['adop5'].updateValueAndValidity();
        //     if (this.adop5active1 == undefined || this.adop5active1 == null || !this.adop5active1) {
        //         if (this.adop5active1 == undefined || this.adop5active1 == null || !this.adop5active1) {
        //             this.questionform.controls['fac_prac1'].setValue("");
        //             this.questionform.controls['fac_prac1'].setValidators(null);
        //         } else {
        //             this.questionform.controls['fac_prac1'].setValidators(Validators.required);
        //         }
        //         this.questionform.controls['fac_prac1'].updateValueAndValidity();
        //     }
        //     if (this.active2) {
        //         this.questionform.controls['adop6'].setValidators(Validators.required);
        //         this.questionform.controls['adop7'].setValidators(Validators.required);
        //         this.questionform.controls['adop8'].setValidators(Validators.required);
        //     } else {
        //         this.questionform.controls['adop6'].setValue("");
        //         this.questionform.controls['adop6'].setValidators(null);
        //         this.questionform.controls['adop7'].setValue("");
        //         this.questionform.controls['adop7'].setValidators(null);
        //         this.questionform.controls['adop8'].setValue("");
        //         this.questionform.controls['adop8'].setValidators(null);
        //     }
        //     this.questionform.controls['adop6'].updateValueAndValidity();
        //     this.questionform.controls['adop7'].updateValueAndValidity();
        //     this.questionform.controls['adop8'].updateValueAndValidity();
        //     if (this.active3) {
        //         this.questionform.controls['adop9'].setValidators(Validators.required);
        //     } else {
        //         this.questionform.controls['adop9'].setValue("");
        //         this.questionform.controls['adop9'].setValidators(null);
        //     }
        //     this.questionform.controls['adop9'].updateValueAndValidity();
        // }
        if (this.form.value.class_flag == 2 || this.form.value.class_flag == 1 || this.form.value.class_flag == 3) {
            if (this.active11) {
                this.questionform.controls['align1'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align2'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['align1'].setValue("");
                this.questionform.controls['align1'].setValidators(null);
                this.questionform.controls['align2'].setValue("");
                this.questionform.controls['align2'].setValidators(null);
            }
            this.questionform.controls['align1'].updateValueAndValidity();
            this.questionform.controls['align2'].updateValueAndValidity();
            if (this.active12) {
                this.questionform.controls['align3'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['align3'].setValue("");
                this.questionform.controls['align3'].setValidators(null);
            }
            this.questionform.controls['align3'].updateValueAndValidity();
            if (this.active13) {
                this.questionform.controls['align4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align5'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['align4'].setValue("");
                this.questionform.controls['align4'].setValidators(null);
                this.questionform.controls['align5'].setValue("");
                this.questionform.controls['align5'].setValidators(null);
            }
            this.questionform.controls['align4'].updateValueAndValidity();
            this.questionform.controls['align5'].updateValueAndValidity();
            if (this.active14) {
                this.questionform.controls['align6'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.questionform.controls['align7'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['align6'].setValue("");
                this.questionform.controls['align6'].setValidators(null);
                this.questionform.controls['align7'].setValue("");
                this.questionform.controls['align7'].setValidators(null);
            }
            this.questionform.controls['align6'].updateValueAndValidity();
            this.questionform.controls['align7'].updateValueAndValidity();
            if (this.active15) {
                this.questionform.controls['align8'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['align8'].setValue("");
                this.questionform.controls['align8'].setValidators(null);
            }
            this.questionform.controls['align8'].updateValueAndValidity();
        }
        if (this.form.value.class_flag == 4) {
            if (this.active31) {
                this.questionform.controls['adop3'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['adop3'].setValue("");
                this.questionform.controls['adop3'].setValidators(null);
            }
            this.questionform.controls['adop3'].updateValueAndValidity();
        }
        console.log(this.form.value, "this.form");
        if (this.form.valid && this.questionform.valid) {
            var data = {
                "records": {
                    "IndexId": "",
                    "training_code": this.form.value.training_id,
                    "user_name": this.emis_username,
                    "class_flag": this.form.value.class_flag,
                    "meeting1": this.questionform.value.meeting1,
                    "spoken_english_qs": this.questionform.value.general2,
                    "meeting2": this.questionform.value.meeting2.toString(),
                    "meeting3": this.questionform.value.meeting3.toString(),
                    "adop1": this.questionform.value.adop1.toString(),
                    "adop2": this.questionform.value.adop2.toString(),
                    "adop3": this.questionform.value.adop3.toString(),
                    "adop4": this.questionform.value.adop4.toString(),
                    "adop5": this.questionform.value.adop5.toString(),
                    "adop6": this.pipe.transform(this.questionform.value.adop6, 'yyyy-MM-dd hh:mm:ss'),
                    "adop7": this.questionform.value.adop7.toString(),
                    "adop8": this.questionform.value.adop8.toString(),
                    "adop9": this.questionform.value.adop9.toString(),
                    "adop10": this.questionform.value.adop10.toString(),
                    "adop11": this.questionform.value.adop11.toString(),
                    "align1": this.questionform.value.align1.toString(),
                    "align2": this.questionform.value.align2.toString(),
                    "align3": this.questionform.value.align3.toString(),
                    "align4": this.questionform.value.align4.toString(),
                    "align5": this.questionform.value.align5.toString(),
                    "align6": this.questionform.value.align6.toString(),
                    "align7": this.questionform.value.align7.toString(),
                    "align8": this.questionform.value.align8.toString(),
                    "align9": this.questionform.value.align9.toString(),
                    "align10": this.questionform.value.align10.toString(),
                    "fac_prac1": this.questionform.value.fac_prac1.toString(),
                    "fac_prac2": this.questionform.value.fac_prac2.toString(),
                    "fac_prac3": this.questionform.value.fac_prac3.toString(),
                    "fac_prac4": this.questionform.value.fac_prac4.toString()
                }
            };
            console.log('data', data);
            this.userService.saveCRC(data).subscribe((res) => {
                if (res.dataStatus) {
                    this.alertService.success(res.message);
                    this.router.navigate(['/tabs/home']);
                }
                else {
                    this.alertService.error(res.message);
                    this.router.navigate(['/tabs/home']);
                }
            });
        }
        else {
            this.validateAllFormFields(this.form);
            this.validateAllFormFields(this.questionform);
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
};
Questions1Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
Questions1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-questions1',
        template: _raw_loader_questions1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questions1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Questions1Page);



/***/ }),

/***/ 66160:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions1/questions1.page.scss ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row-head {\n  margin: 1%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.radio {\n  padding-left: 15px;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.div_head {\n  background: white;\n  border-radius: 10px;\n}\n\n.text-aln {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.ques-txt {\n  font-size: medium;\n  color: var(--ion-color-primary);\n}\n\n.divhead {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 3%;\n}\n\n.school {\n  padding-left: 10px;\n  color: #8b3038;\n  background: #dfd5eb;\n  margin: 3%;\n  border-radius: 10px;\n}\n\n.headerText {\n  text-align: center;\n  font-size: medium;\n  border-style: dotted;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-top: 5%;\n  color: #8b67b3;\n  background-color: #deb4324f;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-input {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nion-select {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.trainIdstyle {\n  padding-left: 10px;\n}\n\nion-datetime {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uczEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBUUU7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FBTE47O0FBUUU7RUFDRSxtQkFBQTtFQUNFLGlCQUFBO0VBR0EsaUJBQUE7QUFQTjs7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNFLGlCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUTjs7QUF3Qkk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXJCTjs7QUF3Qkk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXJCTjs7QUF3Qkk7RUFDRSxrQkFBQTtBQXJCTjs7QUF5QkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXRCSiIsImZpbGUiOiJxdWVzdGlvbnMxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctaGVhZCB7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDsgXHJcbiAgfVxyXG4gIFxyXG4gIC52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAuZGl2X2hlYWQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1hbG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gaW9uLXJhZGlvIHtcclxuICAvLyAgICAgbWFyZ2luOiAzJTtcclxuICAvLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxyXG4gIC8vIH1cclxuICBcclxuICAucXVlcy10eHQgeyBcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcclxuICB9XHJcbiAgXHJcbiAgLmRpdmhlYWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY2hvb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICM4YjMwMzg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZkNWViO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICB9XHJcbiAgICBcclxuICAuaGVhZGVyVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAvLyBjb2xvcjogb3JhbmdlcmVkO1xyXG4gICAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgY29sb3I6ICM4YjY3YjM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWI0MzI0ZjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgLy8gICBpb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICAvLyAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAvLyAgICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbiAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgLy8gICB9XHJcbiAgICAgXHJcbiAgLy8gICAuaW5wdXQtY2xyIHtcclxuICAvLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIC8vICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIC8vICAgfVxyXG4gIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhiNjdiMztcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgfVxyXG4gICBcclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGI2N2IzO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC50cmFpbklkc3R5bGV7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgLy8gY29sb3I6IGJyb3duO1xyXG4gICAgfVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7ICBcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 68896:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/new-questions/questions1/questions1.page.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> பயிற்சி பார்வை </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 4%;\">\r\n    <ion-row class=\"divhead\">\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          Training Unique Code <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" maxlength=\"6\"\r\n          formControlName=\"training_id\">\r\n        </ion-input>\r\n\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"form.controls['training_id'].hasError('required') && (form.controls['training_id'].dirty || form.controls['training_id'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row style=\"font-style: italic;font-size:13px\">\r\n          <ion-label><span style=\"color:red;padding-right:10px;\">Note:</span>Please enter the unique ID generated by the\r\n            trainer for the training session</ion-label>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <div class=\"text-center\" (click)=\"onUniqueCode()\" *ngIf=\"this.form.value.training_id\">\r\n          <ion-button style=\"color:white\">Submit</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"QuesActive\">\r\n        <ion-row class=\"school trainIdstyle\">\r\n          <ion-col size=\"12\" style=\"color: black;\">\r\n            <ion-label>School Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.SchlNme}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: black;\">\r\n            <ion-label>Trainner Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.TchNme}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"QuesActive\">\r\n        <ion-label class=\"ques-txt\">\r\n          Classes<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"class_flag\"\r\n          (ionChange)=\"onClassChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of class_flag\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"form.controls['class_flag'].hasError('required') && (form.controls['class_flag'].dirty || form.controls['class_flag'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </form>\r\n\r\n  <form [formGroup]=\"questionform\" class=\"form-horizontal\" style=\"margin: 4%;\"\r\n    *ngIf=\"QuesActive && this.form.value.class_flag == 0\">\r\n    <ion-row class=\"divhead\">\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> General Details</div>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Which grade-handling teachers are present in the room?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of general1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please select the subject that the teachers are discussing.<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\" *ngIf=\"this.form.value.class_flag == 3\">\r\n          <ion-select-option *ngFor=\"let data of general2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\" *ngIf=\"this.form.value.class_flag == 2\">\r\n          <ion-select-option *ngFor=\"let data of general6\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\" *ngIf=\"this.form.value.class_flag == 1\">\r\n          <ion-select-option *ngFor=\"let data of general5\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.questionform.value.class_flag == 4\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please select the subject that the teachers are discussing.<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of general3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.questionform.value.general1 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Did the teachers discuss the \"Spoken English\" program's content along with the exemplary content? .<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general2\">\r\n          <ion-select-option *ngFor=\"let data of general4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general2'].hasError('required') && (questionform.controls['general2'].dirty || questionform.controls['general2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Training Details\r\n          (Before the training session begins) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please enter the number of teachers at the training session<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n          formControlName=\"meeting1\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting1'].hasError('required') && (questionform.controls['meeting1'].dirty || questionform.controls['meeting1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Please select the session that was observed<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting2\"\r\n          (ionChange)=\"onChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of meeting2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting2'].hasError('required') && (questionform.controls['meeting2'].dirty || questionform.controls['meeting2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Adoption of Meeting Guidelines\r\n          (At the start of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . What tech infrastructure was used for the training?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop1\">\r\n          <ion-select-option *ngFor=\"let data of adop1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop1'].hasError('required') && (questionform.controls['adop1'].dirty || questionform.controls['adop1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Which of the following resources were available at the start of the session?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop2\"\r\n          (ionChange)=\"onChanges($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of adop2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop2'].hasError('required') && (questionform.controls['adop2'].dirty || questionform.controls['adop2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Which of these training etiquettes were shared with the teachers at the start?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop3\">\r\n          <ion-select-option *ngFor=\"let data of adop3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop3'].hasError('required') && (questionform.controls['adop3'].dirty || questionform.controls['adop3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active1\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of teachers shared their best practices?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop4\">\r\n          <ion-select-option *ngFor=\"let data of adop4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop4'].hasError('required') && (questionform.controls['adop4'].dirty || questionform.controls['adop4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active1\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . How did the teachers share best practices?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop5\">\r\n          <ion-select-option *ngFor=\"let data of adop5\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop5'].hasError('required') && (questionform.controls['adop5'].dirty || questionform.controls['adop5'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active2\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What did the teachers do during the planning time?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop6\">\r\n          <ion-select-option *ngFor=\"let data of adop6\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop6'].hasError('required') && (questionform.controls['adop6'].dirty || questionform.controls['adop6'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active2\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . How did the facilitator support the teachers during demo teaching time?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop7\">\r\n          <ion-select-option *ngFor=\"let data of adop7\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop7'].hasError('required') && (questionform.controls['adop7'].dirty || questionform.controls['adop7'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active2\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of the teachers carried out the demo?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop8\">\r\n          <ion-select-option *ngFor=\"let data of adop8\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop8'].hasError('required') && (questionform.controls['adop8'].dirty || questionform.controls['adop8'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active3\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of the teachers participated in the TLM preparation?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop9\">\r\n          <ion-select-option *ngFor=\"let data of adop9\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop9'].hasError('required') && (questionform.controls['adop9'].dirty || questionform.controls['adop9'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . How did the facilitator(s) support the teachers?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop10\">\r\n          <ion-select-option *ngFor=\"let data of adop10\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop10'].hasError('required') && (questionform.controls['adop10'].dirty || questionform.controls['adop10'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          5 . How did teachers participate in the discussions?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop11\">\r\n          <ion-select-option *ngFor=\"let data of adop11\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop11'].hasError('required') && (questionform.controls['adop11'].dirty || questionform.controls['adop11'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Alignment with the CRC Meeting plan\r\n          (During the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . What percentage of teachers were actively engaged throughout the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align1\">\r\n          <ion-select-option *ngFor=\"let data of align1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align1'].hasError('required') && (questionform.controls['align1'].dirty || questionform.controls['align1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . When did the session end?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-datetime displayFormat=\"hh:mm A\" formControlName=\"align2\" placeholder=\"Select End Time\"></ion-datetime>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align2'].hasError('required') && (questionform.controls['align2'].dirty || questionform.controls['align2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\">Facilitation Practices\r\n          (At the end of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"adop5active1\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . How was the video used during the training?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac1\">\r\n          <ion-select-option *ngFor=\"let data of fac1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac1'].hasError('required') && (questionform.controls['fac_prac1'].dirty || questionform.controls['fac_prac1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Did the facilitator(s) ask questions to the teachers to check if they are following the session?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac2\">\r\n          <ion-select-option *ngFor=\"let data of fac2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac2'].hasError('required') && (questionform.controls['fac_prac2'].dirty || questionform.controls['fac_prac2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . How many participants asked questions or raised doubts over the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac3\">\r\n          <ion-select-option *ngFor=\"let data of fac3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac3'].hasError('required') && (questionform.controls['fac_prac3'].dirty || questionform.controls['fac_prac3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Did the facilitator(s) summarize learning at the end of session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac4\">\r\n          <ion-select-option *ngFor=\"let data of fac4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac4'].hasError('required') && (questionform.controls['fac_prac4'].dirty || questionform.controls['fac_prac4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <form [formGroup]=\"questionform\" class=\"form-horizontal\" style=\"margin: 4%;\"\r\n    *ngIf=\"QuesActive && (this.form.value.class_flag == 2 || this.form.value.class_flag == 3 || this.form.value.class_flag == 1)\">\r\n    <ion-row class=\"divhead\">\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> General Details </div>\r\n      </ion-col> -->\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Which grade-handling teachers are present in the room?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of general1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col> -->\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.form.value.class_flag == 4\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please select the subject that the teachers are discussing.<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of general3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Training Details\r\n          (Before the training session begins) </div>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\"\r\n        *ngIf=\"(this.form.value.class_flag == 2 || this.form.value.class_flag == 3 || this.form.value.class_flag == 1)\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please select the subject that the teachers are discussing.<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\" *ngIf=\"this.form.value.class_flag == 3\">\r\n          <ion-select-option *ngFor=\"let data of general2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\" *ngIf=\"this.form.value.class_flag == 2\">\r\n          <ion-select-option *ngFor=\"let data of general6\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\" *ngIf=\"this.form.value.class_flag == 1\">\r\n          <ion-select-option *ngFor=\"let data of general5\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please select the subject that the teachers are discussing<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting1\"\r\n          *ngIf=\"this.form.value.class_flag == 3\">\r\n          <ion-select-option *ngFor=\"let data of meeting11\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting1\"\r\n          *ngIf=\"this.form.value.class_flag == 1\">\r\n          <ion-select-option *ngFor=\"let data of meeting111\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting1\"\r\n          *ngIf=\"this.form.value.class_flag == 2\">\r\n          <ion-select-option *ngFor=\"let data of meeting112\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting1'].hasError('required') && (questionform.controls['meeting1'].dirty || questionform.controls['meeting1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.questionform.value.meeting1 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          1(A) . Did the teachers discuss the \"Spoken English\" program's content along with the exemplary content?\r\n          .<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general2\">\r\n          <ion-select-option *ngFor=\"let data of general4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general2'].hasError('required') && (questionform.controls['general2'].dirty || questionform.controls['general2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Please select the session that was observed<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting2\"\r\n          (ionChange)=\"onChange2($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of meeting12\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting2'].hasError('required') && (questionform.controls['meeting2'].dirty || questionform.controls['meeting2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Please enter the number of teachers at the training session<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n          formControlName=\"meeting3\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting3'].hasError('required') && (questionform.controls['meeting3'].dirty || questionform.controls['meeting3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Adoption of Meeting Guidelines\r\n          (At the start of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . What tech infrastructure was used for the training?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop1\">\r\n          <ion-select-option *ngFor=\"let data of adop21\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop1'].hasError('required') && (questionform.controls['adop1'].dirty || questionform.controls['adop1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Which of the following resources were available at the start of the session?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop2\">\r\n          <ion-select-option *ngFor=\"let data of adop22\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop2'].hasError('required') && (questionform.controls['adop2'].dirty || questionform.controls['adop2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Which of these training etiquettes were shared with the teachers at the start?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop3\">\r\n          <ion-select-option *ngFor=\"let data of adop23\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop3'].hasError('required') && (questionform.controls['adop3'].dirty || questionform.controls['adop3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Alignment with the CRC Meeting plan\r\n          (During the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active11\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of teachers shared previous month's SET INDUCTION<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align1\">\r\n          <ion-select-option *ngFor=\"let data of align21\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align1'].hasError('required') && (questionform.controls['align1'].dirty || questionform.controls['align1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active11\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of teachers shared about the TLM used in the classroom?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align2\">\r\n          <ion-select-option *ngFor=\"let data of align21\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align2'].hasError('required') && (questionform.controls['align2'].dirty || questionform.controls['align2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active12\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of teachers were actively engaged throughout the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align3\">\r\n          <ion-select-option *ngFor=\"let data of align21\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align3'].hasError('required') && (questionform.controls['align3'].dirty || questionform.controls['align3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active13\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of teachers participated in TLM creation for next month?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align4\">\r\n          <ion-select-option *ngFor=\"let data of align21\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align4'].hasError('required') && (questionform.controls['align4'].dirty || questionform.controls['align4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active13\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of teachers participated in creation of activities?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align5\">\r\n          <ion-select-option *ngFor=\"let data of align21\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align5'].hasError('required') && (questionform.controls['align5'].dirty || questionform.controls['align5'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active14\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . What percentage of teachers were actively engaged throughout the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align6\">\r\n          <ion-select-option *ngFor=\"let data of align21\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align6'].hasError('required') && (questionform.controls['align6'].dirty || questionform.controls['align6'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active14\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . How did teachers participate in the discussions?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align7\">\r\n          <ion-select-option *ngFor=\"let data of align27\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align7'].hasError('required') && (questionform.controls['align7'].dirty || questionform.controls['align7'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active15\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . How the pshycometric game session was conducted?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align8\">\r\n          <ion-select-option *ngFor=\"let data of align28\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align8'].hasError('required') && (questionform.controls['align8'].dirty || questionform.controls['align8'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . How did the facilitator support the teachers during the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align9\">\r\n          <ion-select-option *ngFor=\"let data of align29\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align9'].hasError('required') && (questionform.controls['align9'].dirty || questionform.controls['align9'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . When did the session end?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-datetime displayFormat=\"hh:mm A\" formControlName=\"align10\" placeholder=\"Select End Time\"></ion-datetime>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align10'].hasError('required') && (questionform.controls['align10'].dirty || questionform.controls['align10'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\">Facilitation Practices\r\n          (At the end of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Did the facilitator(s) ask questions to the teachers to check if they are following the session?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac1\">\r\n          <ion-select-option *ngFor=\"let data of fac_prac1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac1'].hasError('required') && (questionform.controls['fac_prac1'].dirty || questionform.controls['fac_prac1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . How many participants asked questions or raised doubts over the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac2\">\r\n          <ion-select-option *ngFor=\"let data of fac_prac2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac2'].hasError('required') && (questionform.controls['fac_prac2'].dirty || questionform.controls['fac_prac2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Did the facilitator(s) summarize at the end of session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac3\">\r\n          <ion-select-option *ngFor=\"let data of fac_prac3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac3'].hasError('required') && (questionform.controls['fac_prac3'].dirty || questionform.controls['fac_prac3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n  <form [formGroup]=\"questionform\" class=\"form-horizontal\" style=\"margin: 4%;\"\r\n    *ngIf=\"QuesActive && this.form.value.class_flag == 4\">\r\n    <ion-row class=\"divhead\">\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> General Details </div>\r\n      </ion-col> -->\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Which grade-handling teachers are present in the room?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of general1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col> -->\r\n\r\n      <!-- <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.form.value.class_flag == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please select the subject that the teachers are discussing.<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of general2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general1'].hasError('required') && (questionform.controls['general1'].dirty || questionform.controls['general1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col> -->\r\n \r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Training Details\r\n          (Before the training session begins) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.form.value.class_flag == 4\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Please select the subject that the teachers are discussing.<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n\r\n        <!-- <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting1\"\r\n        *ngIf=\"this.form.value.class_flag == 2\">\r\n        <ion-select-option *ngFor=\"let data of meeting112\" [value]=\"data.value\"> {{data.label}}\r\n        </ion-select-option>\r\n      </ion-select> -->\r\n\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting1\"\r\n          (ionChange)=\"onSubjectChange($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of general3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select> \r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting1'].hasError('required') && (questionform.controls['meeting1'].dirty || questionform.controls['meeting1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.questionform.value.meeting1 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          1(A) . Did the teachers discuss the \"Spoken English\" program's content along with the exemplary content? .<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"general2\">\r\n          <ion-select-option *ngFor=\"let data of general4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['general2'].hasError('required') && (questionform.controls['general2'].dirty || questionform.controls['general2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Please enter the number of teachers at the training session<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n          formControlName=\"meeting1\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting1'].hasError('required') && (questionform.controls['meeting1'].dirty || questionform.controls['meeting1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Please select the session that was observed<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"meeting2\"\r\n          (ionChange)=\"onChanges3($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of meeting32\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['meeting2'].hasError('required') && (questionform.controls['meeting2'].dirty || questionform.controls['meeting2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Adoption of Meeting Guidelines\r\n          (At the start of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . What tech infrastructure was used for the training?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop1\">\r\n          <ion-select-option *ngFor=\"let data of adop31\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop1'].hasError('required') && (questionform.controls['adop1'].dirty || questionform.controls['adop1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Which of these training etiquettes were shared with the teachers at the start?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop2\">\r\n          <ion-select-option *ngFor=\"let data of adop32\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop2'].hasError('required') && (questionform.controls['adop2'].dirty || questionform.controls['adop2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"active31\">\r\n        <ion-label class=\"ques-txt\">\r\n          # . How did the facilitator support the teachers during group discussion?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop3\">\r\n          <ion-select-option *ngFor=\"let data of adop33\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop3'].hasError('required') && (questionform.controls['adop3'].dirty || questionform.controls['adop3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . How did teachers participate in the discussions?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adop4\">\r\n          <ion-select-option *ngFor=\"let data of adop34\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adop4'].hasError('required') && (questionform.controls['adop4'].dirty || questionform.controls['adop4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Alignment with the CRC Meeting plan\r\n          (During the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . What percentage of teachers were actively engaged throughout the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"align1\">\r\n          <ion-select-option *ngFor=\"let data of align31\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align1'].hasError('required') && (questionform.controls['align1'].dirty || questionform.controls['align1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . When did the session end?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-datetime displayFormat=\"hh:mm A\" formControlName=\"align2\" placeholder=\"Select End Time\"></ion-datetime>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['align2'].hasError('required') && (questionform.controls['align2'].dirty || questionform.controls['align2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\">Facilitation Practices\r\n          (At the end of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Did the facilitator(s) ask questions to the teachers to check if they are following the session?<span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac1\">\r\n          <ion-select-option *ngFor=\"let data of fac_prac31\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac1'].hasError('required') && (questionform.controls['fac_prac1'].dirty || questionform.controls['fac_prac1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . How many participants asked questions or raised doubts over the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac2\">\r\n          <ion-select-option *ngFor=\"let data of fac_prac32\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac2'].hasError('required') && (questionform.controls['fac_prac2'].dirty || questionform.controls['fac_prac2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Did the facilitator(s) summarize at the end of session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"fac_prac3\">\r\n          <ion-select-option *ngFor=\"let data of fac_prac33\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['fac_prac3'].hasError('required') && (questionform.controls['fac_prac3'].dirty || questionform.controls['fac_prac3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n\r\n    </ion-row>\r\n  </form>\r\n\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" style=\"background-color: transparent !important;\" (click)=\"onSave()\" *ngIf=\"QuesActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;font-weight:500;\">\r\n      <div>\r\n        <ion-button disabled=\"false\" style=\"width: 100%; color: white;height: 60px;\">\r\n          Save\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_new-questions_questions1_questions1_module_ts-es2015.js.map