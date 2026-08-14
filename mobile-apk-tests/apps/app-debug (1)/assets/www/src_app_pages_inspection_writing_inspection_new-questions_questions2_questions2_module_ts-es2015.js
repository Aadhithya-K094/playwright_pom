(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_new-questions_questions2_questions2_module_ts"],{

/***/ 80895:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions2/questions2-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Questions2PageRoutingModule": function() { return /* binding */ Questions2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _questions2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions2.page */ 12629);




const routes = [
    {
        path: '',
        component: _questions2_page__WEBPACK_IMPORTED_MODULE_0__.Questions2Page
    }
];
let Questions2PageRoutingModule = class Questions2PageRoutingModule {
};
Questions2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Questions2PageRoutingModule);



/***/ }),

/***/ 29830:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions2/questions2.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Questions2PageModule": function() { return /* binding */ Questions2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _questions2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions2-routing.module */ 80895);
/* harmony import */ var _questions2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions2.page */ 12629);







let Questions2PageModule = class Questions2PageModule {
};
Questions2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _questions2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Questions2PageRoutingModule
        ],
        declarations: [_questions2_page__WEBPACK_IMPORTED_MODULE_1__.Questions2Page]
    })
], Questions2PageModule);



/***/ }),

/***/ 12629:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions2/questions2.page.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Questions2Page": function() { return /* binding */ Questions2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_questions2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./questions2.page.html */ 64124);
/* harmony import */ var _questions2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions2.page.scss */ 6250);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);










let Questions2Page = class Questions2Page {
    constructor(fb, userService, router, route, userSessionService, alertService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.questionData = [];
        this.training1 = [
            { "value": "1", "label": "Tamil" },
            { "value": "2", "label": "English" },
            { "value": "3", "label": "Maths" }
        ];
        this.training2 = [
            { "value": "1", "label": "Introduction to Term 2 content and classroom activities" },
            { "value": "2", "label": "Classroom activity demo and exploration of Term 2 THB and WB" },
            { "value": "3", "label": "Participants' presentation" },
            { "value": "4", "label": "Classroom management techniques" },
            { "value": "5", "label": "TLM preparation for Term 2" },
            { "value": "6", "label": "Other" }
        ];
        this.adoption1 = [
            { "value": "1", "label": "Venue details" },
            { "value": "2", "label": "Training title" },
            { "value": "3", "label": "Agenda" },
            { "value": "4", "label": "Others" }
        ];
        this.adoption2 = [
            { "value": "1", "label": "Computer" },
            { "value": "2", "label": "LCD Projector" },
            { "value": "3", "label": "Speaker" },
            { "value": "4", "label": "Mic" },
            { "value": "5", "label": "LCD" }
        ];
        this.adoption3 = [
            { "value": "1", "label": "PPT" },
            { "value": "2", "label": "Handout" },
            { "value": "3", "label": "TLMs" },
            { "value": "4", "label": "Videos" },
            { "value": "5", "label": "Not applicable" }
        ];
        this.adoption4 = [
            { "value": "1", "label": "Session 1" },
            { "value": "2", "label": "Session 2" }
        ];
        this.alignment1 = [
            { "value": "1", "label": "More than 90%" },
            { "value": "2", "label": "75-90%" },
            { "value": "3", "label": "50-74%" },
            { "value": "4", "label": "Less than 50%" }
        ];
        this.alignment2 = [
            { "value": "1", "label": "The RPs summarized the main points" },
            { "value": "2", "label": "The RPs guided the participants to summarize the main points" },
            { "value": "3", "label": "There was no summary" }
        ];
        this.alignment3 = [
            { "value": "1", "label": "Explanation using PPT" },
            { "value": "2", "label": "Discussion in small groups" },
            { "value": "3", "label": "Discussion as a large group" },
            { "value": "4", "label": "Other" }
        ];
        this.alignment4 = [
            { "value": "1", "label": "Shared the objective of the video" },
            { "value": "2", "label": "Played the video completely" },
            { "value": "3", "label": "Paused the video and asked questions" },
            { "value": "4", "label": "Facilitated an interactive discussion" },
            { "value": "5", "label": "Other" }
        ];
        this.alignment13 = [
            { "value": "1", "label": "Explanation using PPT" },
            { "value": "2", "label": "Demo by RP" },
            { "value": "3", "label": "Discussion on the demo" },
            { "value": "4", "label": "Discussion on the THB and WB" },
            { "value": "5", "label": "Other" }
        ];
        this.alignment5 = [
            { "value": "1", "label": "Read the THB/WB independently" },
            { "value": "2", "label": "Discussed the activities in groups" },
            { "value": "3", "label": "Created TLMs" },
            { "value": "4", "label": "Performed short demos for each other" },
            // { "value": "5", "label": "Filled the lesson plan format" },
            { "value": "5", "label": "Mostly listened to what the RP or a few participants shared" }
        ];
        this.alignment6 = [
            { "value": "1", "label": "Walked around the space and observed discussions" },
            { "value": "2", "label": "Cleared doubts" },
            { "value": "3", "label": "Modelled activities" },
            { "value": "4", "label": "Other" }
        ];
        this.alignment34 = [
            { "value": "1", "label": "Walked around and observed" },
            { "value": "2", "label": "Shared observation and feedback with the participants" },
            { "value": "3", "label": "Mostly watched the participants practice " },
            { "value": "4", "label": "Other" }
        ];
        this.alignment43 = [
            { "value": "1", "label": "Shared the objective of the video" },
            { "value": "2", "label": "Played the video completely" },
            { "value": "3", "label": "Paused the video and asked questions" },
            { "value": "4", "label": "Facilitated an interactive discussion" },
            { "value": "5", "label": "Other" }
        ];
        this.alignment44 = [
            { "value": "1", "label": "Explanation using PPT" },
            { "value": "2", "label": "Demo by RP" },
            { "value": "3", "label": "Discussion on the demo or explanation" },
            { "value": "4", "label": "Other" }
        ];
        this.alignment53 = [
            { "value": "1", "label": "Shared the objective of the video" },
            { "value": "2", "label": "Played the video completely" },
            { "value": "3", "label": "Paused the video and asked questions" },
            { "value": "4", "label": "Facilitated an interactive discussion" },
            { "value": "5", "label": "Did not use any video" }
        ];
        this.alignment54 = [
            { "value": "1", "label": "Read the THB/WB independently" },
            { "value": "2", "label": "Discussed in groups" },
            { "value": "3", "label": "Created TLMs" },
            { "value": "4", "label": "N/A (observing district-level training)" },
            { "value": "5", "label": "Mostly listened to what the RP or other participants shared" },
            { "value": "6", "label": "Other" }
        ];
        this.alignment55 = [
            { "value": "1", "label": "Walked around and observed discussions" },
            { "value": "2", "label": "Cleared doubts" },
            { "value": "3", "label": "Modelled activities" },
            { "value": "4", "label": "Other" }
        ];
        this.facilitation1 = [
            { "value": "1", "label": "Content was read out word-by-word" },
            { "value": "2", "label": "Content was used to explain the PPT using own words" },
            { "value": "3", "label": "Explanation was different from the content on the PPT" },
            { "value": "4", "label": "Not applicable" },
            { "value": "5", "label": "Other" }
        ];
        this.facilitation2 = [
            { "value": "1", "label": "The content was clear - all of the explanation and discussion were about the session topic" },
            { "value": "2", "label": "The content was not completely clear - some parts of the explanation or discussion were not related to the topic or rushed" },
            { "value": "3", "label": "Other" }
        ];
        this.facilitation3 = [
            { "value": "1", "label": "Yes, at the end of the session" },
            { "value": "2", "label": "Yes, at different points of the session" },
            { "value": "3", "label": "No questions were asked" }
        ];
        this.facilitation4 = [
            { "value": "1", "label": "More than 50%" },
            { "value": "2", "label": "25-50%" },
            { "value": "3", "label": "Less than 25%" },
            { "value": "4", "label": "No questions or doubts were asked" }
        ];
        this.facilitation5 = [
            { "value": "1", "label": "An RP presented the training content; The other RP supported" },
            { "value": "2", "label": "The RPs took turns to present the training content" },
            { "value": "3", "label": "There was no coordination/planning  between RPs" },
            { "value": "4", "label": "Not applicable" },
            { "value": "5", "label": "Other" }
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
            training_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
        this.questionform = this.fb.group({
            training1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            training2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            training2remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            adoption1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adoption1remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            adoption2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adoption3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            adoption4: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            alignment1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            alignment2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            alignment3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            alignment3remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            alignment4: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            alignment4remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            alignment5: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            alignment5remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            alignment6: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            alignment6remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            facilitation1: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            facilitation1remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            facilitation2: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            facilitation2remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            facilitation3: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            facilitation4: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            facilitation5: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            facilitation5remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null)
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
    ontraining2Change(event) {
        if (this.questionform.value.training2 == 6) {
            this.questionform.controls['training2remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['training2remark'].setValue("");
            this.questionform.controls['training2remark'].setValidators(null);
        }
        this.questionform.controls['training2remark'].updateValueAndValidity();
        if (this.questionform.value.training2 == 1 || this.questionform.value.training2 == 3 || this.questionform.value.training2 == 4) {
            this.questionform.controls['alignment3'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.questionform.controls['alignment4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['alignment3'].setValue("");
            this.questionform.controls['alignment3'].setValidators(null);
            this.questionform.controls['alignment4'].setValue("");
            this.questionform.controls['alignment4'].setValidators(null);
        }
        this.questionform.controls['alignment3'].updateValueAndValidity();
        this.questionform.controls['alignment4'].updateValueAndValidity();
        if (this.questionform.value.training2 == 5) {
            this.questionform.controls['alignment3'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.questionform.controls['alignment4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.questionform.controls['alignment5'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['alignment3'].setValue("");
            this.questionform.controls['alignment3'].setValidators(null);
            this.questionform.controls['alignment4'].setValue("");
            this.questionform.controls['alignment4'].setValidators(null);
            this.questionform.controls['alignment5'].setValue("");
            this.questionform.controls['alignment5'].setValidators(null);
        }
        this.questionform.controls['alignment3'].updateValueAndValidity();
        this.questionform.controls['alignment4'].updateValueAndValidity();
        this.questionform.controls['alignment5'].updateValueAndValidity();
        if (this.questionform.value.training2 == 2) {
            this.questionform.controls['alignment3'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.questionform.controls['alignment4'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.questionform.controls['alignment5'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.questionform.controls['alignment6'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['alignment3'].setValue("");
            this.questionform.controls['alignment3'].setValidators(null);
            this.questionform.controls['alignment4'].setValue("");
            this.questionform.controls['alignment4'].setValidators(null);
            this.questionform.controls['alignment5'].setValue("");
            this.questionform.controls['alignment5'].setValidators(null);
            this.questionform.controls['alignment6'].setValue("");
            this.questionform.controls['alignment6'].setValidators(null);
        }
        this.questionform.controls['alignment3'].updateValueAndValidity();
        this.questionform.controls['alignment4'].updateValueAndValidity();
        this.questionform.controls['alignment5'].updateValueAndValidity();
        this.questionform.controls['alignment6'].updateValueAndValidity();
    }
    onadoption1Change(event) {
        this.adoption1Active = false;
        let value = this.questionform.value.adoption1;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 4) {
                    this.adoption1Active = true;
                }
            });
        }
    }
    onadoption4Change(event) {
        if (this.questionform.value.adoption4 == 2) {
            this.questionform.controls['facilitation5'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            this.questionform.controls['facilitation5remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['facilitation5'].setValue("");
            this.questionform.controls['facilitation5'].setValidators(null);
            this.questionform.controls['facilitation5remark'].setValue("");
            this.questionform.controls['facilitation5remark'].setValidators(null);
        }
        this.questionform.controls['facilitation5'].updateValueAndValidity();
        this.questionform.controls['facilitation5remark'].updateValueAndValidity();
    }
    onalignment3Change(event) {
        this.alignment3Active = false;
        let value = this.questionform.value.alignment3;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 4) {
                    this.alignment3Active = true;
                }
            });
        }
    }
    onalignment4Change(event) {
        this.alignment4Active = false;
        let value = this.questionform.value.alignment4;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 5) {
                    this.alignment4Active = true;
                }
            });
        }
    }
    onalignment13Change(event) {
        debugger;
        this.alignment13Active = false;
        let value = this.questionform.value.alignment3;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 5) {
                    this.alignment13Active = true;
                }
            });
        }
    }
    onalignment6Change(event) {
        this.alignment6Active = false;
        let value = this.questionform.value.alignment6;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 4) {
                    this.alignment6Active = true;
                }
            });
        }
    }
    onalignment34Change(event) {
        this.alignment34Active = false;
        let value = this.questionform.value.alignment4;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 4) {
                    this.alignment34Active = true;
                }
            });
        }
    }
    onalignment43Change(event) {
        this.alignment43Active = false;
        let value = this.questionform.value.alignment3;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 5) {
                    this.alignment43Active = true;
                }
            });
        }
    }
    onalignment44Change(event) {
        this.alignment44Active = false;
        let value = this.questionform.value.alignment4;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 4) {
                    this.alignment44Active = true;
                }
            });
        }
    }
    onalignment54Change(event) {
        this.alignment54Active = false;
        let value = this.questionform.value.alignment4;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 6) {
                    this.alignment54Active = true;
                }
            });
        }
    }
    onalignment55Change(event) {
        this.alignment55Active = false;
        let value = this.questionform.value.alignment5;
        if (value.length > 0) {
            value.forEach((res) => {
                if (res == 4) {
                    this.alignment55Active = true;
                }
            });
        }
    }
    onfacilitation1Change(event) {
        if (this.questionform.value.facilitation1 == 5) {
            this.questionform.controls['facilitation1remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['facilitation1remark'].setValue("");
            this.questionform.controls['facilitation1remark'].setValidators(null);
        }
        this.questionform.controls['facilitation1remark'].updateValueAndValidity();
    }
    onfacilitation2Change(event) {
        if (this.questionform.value.facilitation2 == 3) {
            this.questionform.controls['facilitation2remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['facilitation2remark'].setValue("");
            this.questionform.controls['facilitation2remark'].setValidators(null);
        }
        this.questionform.controls['facilitation2remark'].updateValueAndValidity();
    }
    onfacilitation5Change(event) {
        if (this.questionform.value.facilitation5 == 5) {
            this.questionform.controls['facilitation5remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['facilitation5remark'].setValue("");
            this.questionform.controls['facilitation5remark'].setValidators(null);
        }
        this.questionform.controls['facilitation5remark'].updateValueAndValidity();
    }
    goToBack() {
        this.router.navigate(['/tabs/home']);
    }
    onSave() {
        debugger;
        if (this.adoption1Active) {
            this.questionform.controls['adoption1remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['adoption1remark'].setValue("");
            this.questionform.controls['adoption1remark'].setValidators(null);
        }
        this.questionform.controls['adoption1remark'].updateValueAndValidity();
        // if(this.questionform.value.training2 == 1 || this.questionform.value.training2 == 2 || this.questionform.value.training2 == 4) {
        //   if (this.alignment3Active || this.alignment13Active || this.alignment43Active) {
        //     this.questionform.controls['alignment3remark'].setValidators(Validators.required);
        //   } else {
        //     this.questionform.controls['alignment3remark'].setValue("");
        //     this.questionform.controls['alignment3remark'].setValidators(null);
        //   }
        //   this.questionform.controls['alignment3remark'].updateValueAndValidity();
        // }
        if (this.questionform.value.training2 == 3 || this.questionform.value.training2 == 5) {
            this.questionform.controls['alignment3remark'].setValue("");
            this.questionform.controls['alignment3remark'].setValidators(null);
        }
        if (this.questionform.value.training2 == 2) {
            this.questionform.controls['alignment4remark'].setValue("");
            this.questionform.controls['alignment4remark'].setValidators(null);
        }
        if (this.questionform.value.training2 == 1) {
            if (this.alignment3Active) {
                this.questionform.controls['alignment3remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment3remark'].setValue("");
                this.questionform.controls['alignment3remark'].setValidators(null);
            }
            this.questionform.controls['alignment3remark'].updateValueAndValidity();
        }
        if (this.questionform.value.training2 == 2) {
            if (this.alignment13Active) {
                this.questionform.controls['alignment3remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment3remark'].setValue("");
                this.questionform.controls['alignment3remark'].setValidators(null);
            }
            this.questionform.controls['alignment3remark'].updateValueAndValidity();
        }
        if (this.questionform.value.training2 == 4) {
            if (this.alignment43Active) {
                this.questionform.controls['alignment3remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment3remark'].setValue("");
                this.questionform.controls['alignment3remark'].setValidators(null);
            }
            this.questionform.controls['alignment3remark'].updateValueAndValidity();
        }
        //   if(this.questionform.value.training2 == 1 || this.questionform.value.training2 == 3 || this.questionform.value.training2 == 4 || this.questionform.value.training2 == 5) {
        //   if (this.alignment4Active || this.alignment34Active || this.alignment44Active || this.alignment54Active) {
        //     this.questionform.controls['alignment4remark'].setValidators(Validators.required);
        //   } else {
        //     this.questionform.controls['alignment4remark'].setValue("");
        //     this.questionform.controls['alignment4remark'].setValidators(null);
        //   }
        //   this.questionform.controls['alignment4remark'].updateValueAndValidity();
        // }
        if (this.questionform.value.training2 == 1) {
            if (this.alignment4Active) {
                this.questionform.controls['alignment4remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment4remark'].setValue("");
                this.questionform.controls['alignment4remark'].setValidators(null);
            }
            this.questionform.controls['alignment4remark'].updateValueAndValidity();
        }
        if (this.questionform.value.training2 == 3) {
            if (this.alignment34Active) {
                this.questionform.controls['alignment4remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment4remark'].setValue("");
                this.questionform.controls['alignment4remark'].setValidators(null);
            }
            this.questionform.controls['alignment4remark'].updateValueAndValidity();
        }
        if (this.questionform.value.training2 == 4) {
            if (this.alignment44Active) {
                this.questionform.controls['alignment4remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment4remark'].setValue("");
                this.questionform.controls['alignment4remark'].setValidators(null);
            }
            this.questionform.controls['alignment4remark'].updateValueAndValidity();
        }
        if (this.questionform.value.training2 == 5) {
            if (this.alignment54Active) {
                this.questionform.controls['alignment4remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment4remark'].setValue("");
                this.questionform.controls['alignment4remark'].setValidators(null);
            }
            this.questionform.controls['alignment4remark'].updateValueAndValidity();
        }
        if (this.alignment6Active) {
            this.questionform.controls['alignment6remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
        }
        else {
            this.questionform.controls['alignment6remark'].setValue("");
            this.questionform.controls['alignment6remark'].setValidators(null);
        }
        this.questionform.controls['alignment6remark'].updateValueAndValidity();
        if (this.questionform.value.training2 == 5) {
            if (this.alignment55Active) {
                this.questionform.controls['alignment5remark'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            }
            else {
                this.questionform.controls['alignment5remark'].setValue("");
                this.questionform.controls['alignment5remark'].setValidators(null);
            }
            this.questionform.controls['alignment5remark'].updateValueAndValidity();
        }
        if (this.form.valid && this.questionform.valid) {
            var data = {
                "records": {
                    "IndexId": "",
                    "training_code": this.form.value.training_id,
                    "user_name": this.emis_username,
                    "training1": this.questionform.value.training1,
                    "training2": this.questionform.value.training2,
                    "training2remark": this.questionform.value.training2remark,
                    "adoption1": this.questionform.value.adoption1.toString(),
                    "adoption1remark": this.questionform.value.adoption1remark,
                    "adoption2": this.questionform.value.adoption2.toString(),
                    "adoption3": this.questionform.value.adoption3.toString(),
                    "adoption4": this.questionform.value.adoption4,
                    "alignment1": this.questionform.value.alignment1,
                    'alignment2': this.questionform.value.alignment2,
                    "alignment3": this.questionform.value.alignment3.toString(),
                    "alignment3remark": this.questionform.value.alignment3remark,
                    "alignment4": this.questionform.value.alignment4.toString(),
                    "alignment4remark": this.questionform.value.alignment4remark,
                    "alignment5": this.questionform.value.alignment5.toString(),
                    "alignment5remark": this.questionform.value.alignment5remark,
                    "alignment6": this.questionform.value.alignment6.toString(),
                    "alignment6remark": this.questionform.value.alignment6remark,
                    "facilitation1": this.questionform.value.facilitation1,
                    "facilitation1remark": this.questionform.value.facilitation1remark,
                    "facilitation2": this.questionform.value.facilitation2,
                    "facilitation2remark": this.questionform.value.facilitation2remark,
                    'facilitation3': this.questionform.value.facilitation3,
                    "facilitation4": this.questionform.value.facilitation4,
                    "facilitation5": this.questionform.value.facilitation5,
                    "facilitation5remark": this.questionform.value.facilitation5remark,
                }
            };
            console.log('data', data);
            this.userService.saveCrcQuestions2(data).subscribe((res) => {
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
            this.alertService.error('Please Fill all the Required Fields');
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
Questions2Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
Questions2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-questions2',
        template: _raw_loader_questions2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questions2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Questions2Page);



/***/ }),

/***/ 6250:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/inspection/writing_inspection/new-questions/questions2/questions2.page.scss ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row-head {\n  margin: 1%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.radio {\n  padding-left: 15px;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.div_head {\n  background: white;\n  border-radius: 10px;\n}\n\n.text-aln {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.ques-txt {\n  font-size: medium;\n  color: var(--ion-color-primary);\n}\n\n.divhead {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 3%;\n}\n\n.school {\n  padding-left: 10px;\n  color: #8b3038;\n  background: #dfd5eb;\n  margin: 3%;\n  border-radius: 10px;\n}\n\n.headerText {\n  text-align: center;\n  font-size: medium;\n  border-style: dotted;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-top: 5%;\n  color: #8b67b3;\n  background-color: #deb4324f;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\nion-input {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nion-select {\n  border: 1px solid #8b67b3;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.trainIdstyle {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uczIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBUUU7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FBTE47O0FBUUU7RUFDRSxtQkFBQTtFQUNFLGlCQUFBO0VBR0EsaUJBQUE7QUFQTjs7QUFVRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtFQUNFLGlCQUFBO0VBRUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFUTjs7QUF3Qkk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXJCTjs7QUF3Qkk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXJCTjs7QUF3Qkk7RUFDRSxrQkFBQTtBQXJCTiIsImZpbGUiOiJxdWVzdGlvbnMyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctaGVhZCB7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDsgXHJcbiAgfVxyXG4gIFxyXG4gIC52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAuZGl2X2hlYWQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1hbG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8gaW9uLXJhZGlvIHtcclxuICAvLyAgICAgbWFyZ2luOiAzJTtcclxuICAvLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxyXG4gIC8vIH1cclxuICBcclxuICAucXVlcy10eHQgeyBcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcclxuICB9XHJcbiAgXHJcbiAgLmRpdmhlYWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbiAgICAgIC8vIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY2hvb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICM4YjMwMzg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGZkNWViO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICB9XHJcbiAgICBcclxuICAuaGVhZGVyVGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAvLyBjb2xvcjogb3JhbmdlcmVkO1xyXG4gICAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgY29sb3I6ICM4YjY3YjM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWI0MzI0ZjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgLy8gICBpb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICAvLyAgICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAvLyAgICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbiAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICM4YjY3YjM7XHJcbiAgLy8gICB9XHJcbiAgICAgXHJcbiAgLy8gICAuaW5wdXQtY2xyIHtcclxuICAvLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIC8vICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIC8vICAgfVxyXG4gIFxyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhiNjdiMztcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgfVxyXG4gICBcclxuICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGI2N2IzO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC50cmFpbklkc3R5bGV7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgLy8gY29sb3I6IGJyb3duO1xyXG4gICAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 64124:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/new-questions/questions2/questions2.page.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> பயிற்சி பார்வை </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 4%;\">\r\n    <ion-row class=\"divhead\">\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          Training Unique Code <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" maxlength=\"6\"\r\n          formControlName=\"training_id\">\r\n        </ion-input>\r\n\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"form.controls['training_id'].hasError('required') && (form.controls['training_id'].dirty || form.controls['training_id'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row style=\"font-style: italic;font-size:13px\">\r\n          <ion-label><span style=\"color:red;padding-right:10px;\">Note:</span>Please enter the unique ID generated by the\r\n            trainer for the training session</ion-label>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <div class=\"text-center\" (click)=\"onUniqueCode()\" *ngIf=\"this.form.value.training_id\">\r\n          <ion-button style=\"color:white\">Submit</ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" *ngIf=\"QuesActive\">\r\n        <ion-row class=\"school trainIdstyle\">\r\n          <ion-col size=\"12\" style=\"color: black;\">\r\n            <ion-label>School Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.SchlNme}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: black;\">\r\n            <ion-label>Trainner Name</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"color: brown;\">\r\n            <ion-label>{{trainerCodeDate.TchNme}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n  </form>\r\n\r\n  <form [formGroup]=\"questionform\" class=\"form-horizontal\" style=\"margin: 4%;\"\r\n    *ngIf=\"QuesActive\">\r\n  <!-- <form [formGroup]=\"questionform\" class=\"form-horizontal\" style=\"margin: 4%;\"> -->\r\n    <ion-row class=\"divhead\">\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Training Details\r\n          (Before the training begins) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . Which subject training is being observed?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"training1\">\r\n          <ion-select-option *ngFor=\"let data of training1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['training1'].hasError('required') && (questionform.controls['training1'].dirty || questionform.controls['training1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . Which session is being observed?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"training2\"\r\n          (ionChange)=\"ontraining2Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of training2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['training2'].hasError('required') && (questionform.controls['training2'].dirty || questionform.controls['training2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 6\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"training2remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['training2remark'].hasError('required') && (questionform.controls['training2remark'].dirty || questionform.controls['training2remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Adoption of Training Guidelines\r\n          (At the start of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . What is displayed on the board?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adoption1\"\r\n          (ionChange)=\"onadoption1Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of adoption1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adoption1'].hasError('required') && (questionform.controls['adoption1'].dirty || questionform.controls['adoption1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"adoption1Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"adoption1remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adoption1remark'].hasError('required') && (questionform.controls['adoption1remark'].dirty || questionform.controls['adoption1remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . What tech infrastructure is used for the training?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"adoption2\">\r\n          <ion-select-option *ngFor=\"let data of adoption2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adoption2'].hasError('required') && (questionform.controls['adoption2'].dirty || questionform.controls['adoption2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Which of the following resources were available at the start of the session? <span\r\n            class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adoption3\">\r\n          <ion-select-option *ngFor=\"let data of adoption3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adoption3'].hasError('required') && (questionform.controls['adoption3'].dirty || questionform.controls['adoption3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . How many RPs execute the session? <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"adoption4\" (ionChange)=\"onadoption4Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of adoption4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['adoption4'].hasError('required') && (questionform.controls['adoption4'].dirty || questionform.controls['adoption4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Alignment with the Training plan\r\n          (During the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . What percentage of participants were actively engaged throughout the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\"  cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment1\">\r\n          <ion-select-option *ngFor=\"let data of alignment1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment1'].hasError('required') && (questionform.controls['alignment1'].dirty || questionform.controls['alignment1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . How was learning summarized at the end of session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment2\">\r\n          <ion-select-option *ngFor=\"let data of alignment2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment2'].hasError('required') && (questionform.controls['alignment2'].dirty || questionform.controls['alignment2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 1\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . What was observed during the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment3\" (ionChange)=\"onalignment3Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3'].hasError('required') && (questionform.controls['alignment3'].dirty || questionform.controls['alignment3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 1 && alignment3Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\"\r\n          formControlName=\"alignment3remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3remark'].hasError('required') && (questionform.controls['alignment3remark'].dirty || questionform.controls['alignment3remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 1\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . How did the RPs use the video during the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"alignment4\"\r\n          (ionChange)=\"onalignment4Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4'].hasError('required') && (questionform.controls['alignment4'].dirty || questionform.controls['alignment4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 1 && alignment4Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment4remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4remark'].hasError('required') && (questionform.controls['alignment4remark'].dirty || questionform.controls['alignment4remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . What was observed during the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment3\" (ionChange)=\"onalignment13Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment13\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3'].hasError('required') && (questionform.controls['alignment3'].dirty || questionform.controls['alignment3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 2 && alignment13Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment3remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3remark'].hasError('required') && (questionform.controls['alignment3remark'].dirty || questionform.controls['alignment3remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . How many participants were engaged in the discussion and demonstration?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"alignment4\">\r\n          <ion-select-option *ngFor=\"let data of alignment1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4'].hasError('required') && (questionform.controls['alignment4'].dirty || questionform.controls['alignment4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          5 . What did the participants do during the planning for microteaching time? <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment5\">\r\n          <ion-select-option *ngFor=\"let data of alignment5\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment5'].hasError('required') && (questionform.controls['alignment5'].dirty || questionform.controls['alignment5'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          6 . How did the RPs support the participants during planning for microteaching time?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment6\" (ionChange)=\"onalignment6Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment6\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment6'].hasError('required') && (questionform.controls['alignment6'].dirty || questionform.controls['alignment6'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 2 && alignment6Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment6remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment6remark'].hasError('required') && (questionform.controls['alignment6remark'].dirty || questionform.controls['alignment6remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 3\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . What percentage of participants demonstrated the presentation?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"alignment3\">\r\n          <ion-select-option *ngFor=\"let data of alignment1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3'].hasError('required') && (questionform.controls['alignment3'].dirty || questionform.controls['alignment3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 3\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . How did the RPs support the participants during the presentation time?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment4\" (ionChange)=\"onalignment34Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment34\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4'].hasError('required') && (questionform.controls['alignment4'].dirty || questionform.controls['alignment4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 3 && alignment34Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment4remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4remark'].hasError('required') && (questionform.controls['alignment4remark'].dirty || questionform.controls['alignment4remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 4\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . How did the RPs use the video during the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\"  cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"alignment3\" (ionChange)=\"onalignment43Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment43\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3'].hasError('required') && (questionform.controls['alignment3'].dirty || questionform.controls['alignment3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 4 && alignment43Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment3remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3remark'].hasError('required') && (questionform.controls['alignment3remark'].dirty || questionform.controls['alignment3remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 4\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . What was observed during the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment4\" (ionChange)=\"onalignment44Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment44\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4'].hasError('required') && (questionform.controls['alignment4'].dirty || questionform.controls['alignment4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 4 && alignment44Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment4remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4remark'].hasError('required') && (questionform.controls['alignment4remark'].dirty || questionform.controls['alignment4remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 5\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . How did the RPs use the video on TLM preparation?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"alignment3\">\r\n          <ion-select-option *ngFor=\"let data of alignment53\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment3'].hasError('required') && (questionform.controls['alignment3'].dirty || questionform.controls['alignment3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 5\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . What did the participants do during the TLM preparation time?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"alignment4\" (ionChange)=\"onalignment54Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment54\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4'].hasError('required') && (questionform.controls['alignment4'].dirty || questionform.controls['alignment4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 5 && alignment54Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment4remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment4remark'].hasError('required') && (questionform.controls['alignment4remark'].dirty || questionform.controls['alignment4remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 5\">\r\n        <ion-label class=\"ques-txt\">\r\n          5 . How did the RPs support the participants during the TLM preparation time?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"alignment5\" (ionChange)=\"onalignment55Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of alignment55\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment5'].hasError('required') && (questionform.controls['alignment5'].dirty || questionform.controls['alignment5'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.training2 == 5 && alignment55Active\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"alignment5remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['alignment5remark'].hasError('required') && (questionform.controls['alignment5remark'].dirty || questionform.controls['alignment5remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <div class=\"headerText\" size=\"12\"> Facilitation Practices\r\n          (At the end of the session) </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          1 . How was the content in the PPT used during the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"facilitation1\" (ionChange)=\"onfacilitation1Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of facilitation1\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation1'].hasError('required') && (questionform.controls['facilitation1'].dirty || questionform.controls['facilitation1'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.questionform.value.facilitation1 == 5\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"facilitation1remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation1remark'].hasError('required') && (questionform.controls['facilitation1remark'].dirty || questionform.controls['facilitation1remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          2 . How was the session content presented to the participants?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"facilitation2\" (ionChange)=\"onfacilitation2Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of facilitation2\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation2'].hasError('required') && (questionform.controls['facilitation2'].dirty || questionform.controls['facilitation2'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"this.questionform.value.facilitation2 == 3\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"facilitation2remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation2remark'].hasError('required') && (questionform.controls['facilitation2remark'].dirty || questionform.controls['facilitation2remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          3 . Did the RPs ask questions to the participants to check if they are following the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"facilitation3\">\r\n          <ion-select-option *ngFor=\"let data of facilitation3\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation3'].hasError('required') && (questionform.controls['facilitation3'].dirty || questionform.controls['facilitation3'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\">\r\n        <ion-label class=\"ques-txt\">\r\n          4 . How many participants asked questions or raised doubts over the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"facilitation4\">\r\n          <ion-select-option *ngFor=\"let data of facilitation4\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation4'].hasError('required') && (questionform.controls['facilitation4'].dirty || questionform.controls['facilitation4'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.adoption4 == 2\">\r\n        <ion-label class=\"ques-txt\">\r\n          5 . How did the RPs share responsibilities within the session?<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\"  cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n          formControlName=\"facilitation5\" (ionChange)=\"onfacilitation5Change($event.detail.value)\">\r\n          <ion-select-option *ngFor=\"let data of facilitation5\" [value]=\"data.value\"> {{data.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation5'].hasError('required') && (questionform.controls['facilitation5'].dirty || questionform.controls['facilitation5'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"text-aln\" *ngIf=\"questionform.value.adoption4 == 2 && questionform.value.facilitation5 == 5\">\r\n        <ion-label class=\"ques-txt\">\r\n          i . Remarks<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\" formControlName=\"facilitation5remark\">\r\n        </ion-input>\r\n        <ion-row>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"questionform.controls['facilitation5remark'].hasError('required') && (questionform.controls['facilitation5remark'].dirty || questionform.controls['facilitation5remark'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" style=\"background-color: transparent !important;\" (click)=\"onSave()\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;font-weight:500;\">\r\n      <div>\r\n        <ion-button disabled=\"false\" style=\"width: 100%; color: white;height: 60px;\">\r\n          Save\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->\r\n\r\n<ion-footer class=\"footer-clr\" style=\"background-color: transparent !important;\" (click)=\"onSave()\" *ngIf=\"QuesActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;font-weight:500;\">\r\n      <div>\r\n        <ion-button disabled=\"false\" style=\"width: 100%; color: white;height: 60px;\">\r\n          Save\r\n        </ion-button>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_new-questions_questions2_questions2_module_ts-es2015.js.map