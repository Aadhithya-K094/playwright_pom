(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-questions_summative-questions_module_ts"],{

/***/ 80169:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/question-filter.pipe.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionFilterPipe": function() { return /* binding */ QuestionFilterPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let QuestionFilterPipe = class QuestionFilterPipe {
    constructor() {
        this.element = [];
    }
    transform(value, args) {
        if (value.length > 0) {
            // this.findduplicate(this.element, args)
            let argument = value.length;
            let argument2 = Number(args);
            this.generateUniqueRandom(argument, argument2);
            let newarr = value.filter((s, index) => {
                let findinde = this.element.some((v) => v == index);
                if (findinde == true) {
                    return s;
                }
            });
            return newarr;
        }
        else {
            return value;
        }
    }
    generateUniqueRandom(maxNr, arg) {
        //Generate random number
        this.random = Math.floor(Math.random() * maxNr);
        //Coerce to number by boxing
        this.random = Number(this.random);
        if (!this.element.includes(this.random)) {
            this.element.push(this.random);
            if (this.element.length < arg) {
                return this.generateUniqueRandom(maxNr, arg);
            }
            else {
                return this.random;
            }
        }
        else {
            if (this.element.length < arg) {
                //Recursively generate number
                return this.generateUniqueRandom(maxNr, arg);
            }
            else {
                return false;
            }
        }
    }
};
QuestionFilterPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'questionFilter'
    })
], QuestionFilterPipe);



/***/ }),

/***/ 42304:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions-routing.module.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeQuestionsPageRoutingModule": function() { return /* binding */ SummativeQuestionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _summative_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-questions.page */ 71490);




const routes = [
    {
        path: '',
        component: _summative_questions_page__WEBPACK_IMPORTED_MODULE_0__.SummativeQuestionsPage
    }
];
let SummativeQuestionsPageRoutingModule = class SummativeQuestionsPageRoutingModule {
};
SummativeQuestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SummativeQuestionsPageRoutingModule);



/***/ }),

/***/ 78066:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.module.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeQuestionsPageModule": function() { return /* binding */ SummativeQuestionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _summative_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-questions-routing.module */ 42304);
/* harmony import */ var _summative_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-questions.page */ 71490);
/* harmony import */ var _question_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-filter.pipe */ 80169);








let SummativeQuestionsPageModule = class SummativeQuestionsPageModule {
};
SummativeQuestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _summative_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeQuestionsPageRoutingModule
        ],
        declarations: [_summative_questions_page__WEBPACK_IMPORTED_MODULE_1__.SummativeQuestionsPage, _question_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.QuestionFilterPipe]
    })
], SummativeQuestionsPageModule);



/***/ }),

/***/ 71490:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.page.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeQuestionsPage": function() { return /* binding */ SummativeQuestionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_summative_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./summative-questions.page.html */ 74638);
/* harmony import */ var _summative_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-questions.page.scss */ 18858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);








// import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';









let SummativeQuestionsPage = class SummativeQuestionsPage {
    constructor(alertController, route, apiService, router, ionicstorage, alertService, networkService, userSessionService, uploadService, modalCtrl, toast) {
        this.alertController = alertController;
        this.route = route;
        this.apiService = apiService;
        this.router = router;
        this.ionicstorage = ionicstorage;
        this.alertService = alertService;
        this.networkService = networkService;
        this.userSessionService = userSessionService;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.showSkipModel = false;
        this.id = "";
        this.student = {
            name: "",
            user_id: ""
        };
        this.questionsData = [];
        this.answers = [];
        this.studentsList = [];
        this.SHOWMOTTU = false;
        this.SHOWMALAR = false;
        this.SHOWARUMU = false;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emis_usertype1 = this.userSessionService.emis_usertype1();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.startTime = this.pipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
        console.log(this.startTime, 'fsdsfsfsfsfsfsf');
        // this.studetnList = []
        this.schId = this.route.snapshot.queryParamMap.get("schId");
        this.assYear = this.route.snapshot.queryParamMap.get("assYear");
        this.assType = this.route.snapshot.queryParamMap.get("assType");
        this.udiseCode = this.route.snapshot.queryParamMap.get("udiseCode");
        this.observation_id = this.route.snapshot.queryParamMap.get("observation_id");
        this.level = this.route.snapshot.queryParamMap.get("level");
        console.log(this.level);
        console.log(this.observation_id, 'iddddd');
        this.indexNum = this.route.snapshot.queryParamMap.get("i");
        console.log(this.schId, this.assYear, this.assType, this.indexNum, 'jksdlfj4wfhjw8rf');
        // if (this.emis_usertype == '39' && this.emis_usertype1 == '1') {
        //   this.scrnNmbr = 'L1 - 4';
        // }
        // else if (this.emis_usertype == '6' && this.emis_usertype1 == '1') {
        //   this.scrnNmbr = 'L2 - 4';
        // }
        if (this.level == 'L1') {
            this.scrnNmbr = 'L1 - 3';
        }
        else if (this.level == 'L2') {
            this.scrnNmbr = 'L2 - 3';
        }
        else if (this.level == 'L3') {
            this.scrnNmbr = 'L3 - 3';
        }
    }
    back() {
        this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level } });
    }
    ionViewWillEnter() {
        this.questions = [];
        this.findIndexVal = '';
        this.live_img_url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.ImgUrl;
        console.log(this.live_img_url, 'live_img_url');
        this.ionicstorage.getData('summativeAsseData').then((dataa) => {
            console.log(dataa, '4783yfhuity87w4e');
            this.class = dataa.classdata;
            this.Medium = dataa.subject;
            this.subjectkey = dataa.subjectkey;
            this.term = dataa.term;
            this.viewassessmenbtn = dataa.viewassessment;
            // this.studentsList = this.studentOrder(dataa.studentlist);
            this.studentsList = dataa.studentlist;
            console.log(this.studentsList, 'studentsList');
            this.weekofyear = dataa.week_of_year;
            // this.studentsList = this.studentOrder(dataa.studentlist);
            this.route.params.subscribe(params => {
                this.id = params['id'];
                this.subId = params['sub'];
                console.log(this.id, '82ryf948ehrf', this.subId);
                let questionsData = this.studentsList.find(s => s.id == this.id && s.subject_id == this.subId);
                if (typeof questionsData['questionset'] == 'object') {
                    if (questionsData['questionset']['Arumbu'] != undefined) {
                        this.SHOWARUMU = true;
                        this.SHOWMOTTU = false;
                        this.SHOWMALAR = false;
                        questionsData['questionset']['Arumbu'].filter(val => { val.passvalue_count = 0; val.pass = false; val.alloptioncheck = false; return val; });
                        questionsData['questionset']['Arumbu'].filter(val => val.questions.filter(s => { s.passvalue_boolean = false; s.optioncheck = false; s.selected_option = ""; return s; }));
                        this.questions = questionsData['questionset'];
                    }
                    else if (questionsData['questionset']['Mottu'] != undefined) {
                        this.SHOWARUMU = false;
                        this.SHOWMOTTU = true;
                        this.SHOWMALAR = false;
                        questionsData['questionset']['Mottu'].filter(val => { val.passvalue_count = 0; val.pass = false; val.alloptioncheck = false; return val; });
                        questionsData['questionset']['Mottu'].filter(val => val.questions.filter(s => { s.passvalue_boolean = false; s.optioncheck = false; s.selected_option = ""; return s; }));
                        this.questions = questionsData['questionset'];
                    }
                    else if (questionsData['questionset']['Malar'] != undefined) {
                        this.SHOWARUMU = false;
                        this.SHOWMOTTU = false;
                        this.SHOWMALAR = true;
                        questionsData['questionset']['Malar'].filter(val => { val.passvalue_count = 0; val.pass = false; val.alloptioncheck = false; return val; });
                        questionsData['questionset']['Malar'].filter(val => val.questions.filter(s => { s.passvalue_boolean = false; s.optioncheck = false; s.selected_option = ""; return s; }));
                        this.questions = questionsData['questionset'];
                    }
                }
                else {
                    this.questions = [];
                }
            });
            this.findIndexVal = this.studentsList.findIndex(e => e.id == this.id && e.subject_id == this.subId);
            console.log(this.findIndexVal, 'find index value');
            if (this.findIndexVal !== -1) {
                this.student = this.studentsList[this.findIndexVal];
                this.class_name = this.studentsList[this.findIndexVal].assessment_name;
                const myArray = this.class_name.split('-');
                this.subject = myArray[1];
                this.class_num = myArray[0];
                console.log(this.class_name, 'class name ', this.class_num, '', this.subject);
                this.minimum_correct = this.student['minimum_correct'];
                this.student['g1_qa_count'] = 0;
                this.student['g1_score'] = 0;
                this.student['g2_qa_count'] = 0;
                this.student['g2_score'] = 0;
                this.student['g3_qa_count'] = 0;
                this.student['g3_score'] = 0;
            }
            else {
                this.router.navigate(['/tabs/menu']);
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('userInfo').then((dataa) => {
            this.username = dataa.username;
            this.schoolid = dataa.school_id;
            this.token = dataa.token;
        }, (error) => console.error(error));
    }
    studentOrder(data) {
        console.log(data, this.indexNum, 'okokokokokokok');
        this.singledatalist = [];
        let female = data.filter(v => v.gender == '2');
        let ts = female.sort((a, b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        let male = data.filter(v => v.gender == '1');
        male.sort((a, b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        let newll = female.concat(male);
        return newll;
        // for (let i = this.indexNum; i < this.indexNum + 1; i++) {
        //   this.singledatalist = [data[i]]
        // }    
        // console.log(this.singledatalist,'aitoooooooooooooo');
        // return this.singledatalist
    }
    changeModelStatusHandler() {
        this.showSkipModel = !this.showSkipModel;
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Skip student?',
                message: `Select the reason for skipping the student ${this.student.name} (${this.student.user_id})`,
                inputs: [
                    {
                        type: 'radio',
                        label: 'Absent today',
                        value: 'Absent_today'
                    },
                    {
                        type: 'radio',
                        label: 'Left school after marking attendance',
                        value: 'Left_school_after_marking_attendance'
                    },
                    {
                        type: 'radio',
                        label: 'Present in school but unwell',
                        value: 'Present_in_school_but_unwell'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        // id: 'cancel-button',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Submit',
                        cssClass: 'alertButton',
                        // id: 'confirm-button',
                        handler: (data) => {
                            if (data != undefined) {
                                this.skipStudent(data);
                            }
                            else {
                                this.alertService.error('Please select options');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    onAnswerSelect(question, answer) {
        let checkAlreadyExistingItemInArray = this.answers.findIndex((el) => el.question == question);
        if (checkAlreadyExistingItemInArray == -1) {
            this.answers.push({
                question: question,
                answer: answer
            });
        }
    }
    findQuestionWithANswer(title, answer) {
        return this.answers.findIndex(e => e.title === title && e.answer == answer) !== -1;
    }
    saveAndMove() {
        this.apiService.markAssessed(this.id);
        this.router.navigate(['/tabs/summative-student']);
    }
    findStudentToBeAssessed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (typeof this.questions == 'object') {
                let getarumbulenght = yield this.questions['Arumbu'].length;
                if (getarumbulenght > 0) {
                    let allQuestionchecked = yield this.checkValidation(this.questions['Arumbu'], getarumbulenght);
                    if (allQuestionchecked == true) {
                        let getarumbupassedlogiclenght = yield this.questions['Arumbu'].filter(n => n.pass == true).length;
                        this.questions['status'] = 1;
                        if (getarumbupassedlogiclenght >= this.minimum_correct) {
                            if (this.questions['Mottu'] != undefined) {
                                let getmottulenght = this.questions['Mottu'].length;
                                if (getmottulenght > 0) {
                                    let questionsData = this.studentsList.find(s => s.id == this.id && s.subject_id == this.subId);
                                    questionsData['questionset']['Mottu'].filter(val => { val.passvalue_count = 0; val.pass = false; val.alloptioncheck = false; return val; });
                                    questionsData['questionset']['Mottu'].filter(val => val.questions.filter(s => { s.passvalue_boolean = false; s.optioncheck = false; s.selected_option = ""; return s; }));
                                    this.questions = questionsData['questionset'];
                                    this.SHOWMOTTU = true;
                                    this.SHOWARUMU = false;
                                    this.SHOWMALAR = false;
                                }
                                else {
                                    this.findNextStudentToBeAssessed();
                                }
                            }
                            else {
                                this.findNextStudentToBeAssessed();
                            }
                        }
                        else {
                            this.findNextStudentToBeAssessed();
                        }
                    }
                    else {
                        this.presentAlert();
                    }
                }
            }
        });
    }
    findNextStudentToBeAssessed() {
        debugger;
        this.apiService.initializeNetworkEvents();
        this.studentsList.filter(s => {
            console.log(s.id, this.id, 's.id,this.id');
            if (s.id == this.id) {
                s.isAssessed = true;
            }
        });
        this.endTime = this.pipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
        console.log(this.endTime, 'endTime');
        let seperatestudent = this.studentsList.find(v => v.id == this.id && v.subject_id == this.subId);
        console.log(seperatestudent, 'seperatestudent');
        seperatestudent.academic_id = seperatestudent['acad_id'];
        seperatestudent.teacher_id = this.username;
        seperatestudent.assessment_type = this.apiService.getdataassessed_typeformativeid();
        seperatestudent.student_status = seperatestudent.questionset['status'];
        seperatestudent.status_of_assessed = 'Assessed';
        seperatestudent.start_time = this.startTime;
        seperatestudent.end_time = this.endTime;
        seperatestudent.assmnt_status = 'assessed';
        seperatestudent.observation_id = this.observation_id;
        if (seperatestudent['questionset']['Arumbu'] != undefined && seperatestudent['questionset']['Arumbu'].length > 0) {
            seperatestudent['g1_score'] = seperatestudent['questionset']['Arumbu'].filter(val => val.pass == true).length;
            seperatestudent['g1_qa_count'] = seperatestudent['questionset']['Arumbu'].length;
        }
        if (seperatestudent['questionset']['Mottu'] != undefined && seperatestudent['questionset']['Mottu'].length > 0) {
            seperatestudent['g2_score'] = seperatestudent['questionset']['Mottu'].filter(val => val.pass == true).length;
            seperatestudent['g2_qa_count'] = seperatestudent['questionset']['Mottu'].length;
        }
        if (seperatestudent['questionset']['Malar'] != undefined && seperatestudent['questionset']['Malar'].length > 0) {
            seperatestudent['g3_score'] = seperatestudent['questionset']['Malar'].filter(val => val.pass == true).length;
            seperatestudent['g3_qa_count'] = seperatestudent['questionset']['Malar'].length;
        }
        if (seperatestudent.class_studying_id == 1) {
            seperatestudent['questionset']['Mottu'] = '';
            seperatestudent['questionset']['Malar'] = '';
        }
        else if (seperatestudent.class_studying_id == 2) {
            seperatestudent['questionset']['Malar'] = '';
            if (seperatestudent['baseline_grade'] == 1 && seperatestudent['g1_score'] < seperatestudent['minimum_correct']) {
                seperatestudent['questionset']['Mottu'] = '';
            }
        }
        else if (seperatestudent.class_studying_id == 3) {
            if (seperatestudent['baseline_grade'] == 1 && seperatestudent['g1_score'] < seperatestudent['minimum_correct']) {
                seperatestudent['questionset']['Mottu'] = '';
                seperatestudent['questionset']['Malar'] = '';
            }
            if (seperatestudent['baseline_grade'] == 2 && seperatestudent['g2_score'] < seperatestudent['minimum_correct']) {
                seperatestudent['questionset']['Malar'] = '';
            }
        }
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            //un command
            debugger;
            console.log(seperatestudent, 'seperatestudent');
            this.apiService.saveSummativeAssessmentDetails(seperatestudent, this.token).subscribe(data => {
                try {
                    if (data.status == 200 && data.dataStatus == true) {
                        this.commonAlert('Success', 'Assessment successfully Saved');
                        this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectkey: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn, week_of_year: this.weekofyear });
                        // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed !== true && el.isSkipped == false));
                        // if (studentsToBeAssessed.length > 0) {
                        //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                        // } else {
                        //   this.alertService.success("All Students assessed!", false);
                        //   this.router.navigate(['/tabs/summative-student']);
                        // }
                        this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level } });
                    }
                    else {
                        // this.alertService.error(data.msg)
                        throw 'No data found in this student list';
                    }
                }
                catch (err) {
                    this.toast.presentToast(err, 'error');
                }
            });
        }
        else {
            // call functions on network offline, such as firebase.goOffline()
            // this.apiService.displayToast("Offline, Data stored in local!!", false);
            this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectkey: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn, week_of_year: this.weekofyear });
            this.ionicstorage.getData('remaingusersummative').then((dataa) => {
                var store;
                if (dataa == undefined || dataa == null) {
                    store = [];
                }
                else {
                    store = dataa.remainingdata;
                }
                store.push(seperatestudent);
                console.log(store, '309823wru832ru');
                this.ionicstorage
                    .insertData_Replace('remaingusersummative', { remainingdata: store });
                let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed !== true && el.isSkipped == false));
                if (studentsToBeAssessed.length > 0) {
                    // this.router.navigate(['/tabs/summative-class-selection', studentsToBeAssessed[0].id]);
                    this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level } });
                }
                else {
                    this.commonAlert('All Students assessed!', 'Offline: Data stored in local.');
                    // this.apiService.displayToast("All Students assessed!", false)
                    this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level } });
                }
            }, (error) => console.error(error));
            this.offlinePopup();
        }
    }
    offlinePopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Assessment Completed Successfully',
                message: 'Offline: Data stored in local!!',
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    errorLog(err, payload) {
        let record = {
            "observation_id": "",
            "school_id": this.schId,
            "student_id": "",
            "oberved_date": "",
            "oberved_by": this.username,
            "page": this.scrnNmbr,
            "error": err,
            "payload": JSON.stringify(payload),
            "result": ""
        };
        console.log(record, 'recordrecord');
        this.apiService.eet_error_log(record).subscribe(data => {
            try {
                if (data.status == 200) {
                    throw "Data Saved Successfully";
                }
                else {
                    throw "Server not found";
                }
            }
            catch (err) {
                // this.apiService.displayToast(err, false);
                console.log('Error log api ' + err);
            }
        });
    }
    findNextStudentForMottu() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let getmottulenght = yield this.questions['Mottu'].length;
            if (getmottulenght > 0) {
                let allQuestioncheckedmottu = yield this.checkValidation(this.questions['Mottu'], getmottulenght);
                if (allQuestioncheckedmottu == true) {
                    let getmottupassedlogiclenght = yield this.questions['Mottu'].filter(n => n.pass == true).length;
                    if (getmottupassedlogiclenght >= this.minimum_correct) {
                        this.questions['status'] = 2;
                        if (this.questions['Malar'] != undefined) {
                            let getmalarlenght = this.questions['Malar'].length;
                            if (getmalarlenght > 0) {
                                let questionsData = this.studentsList.find(s => s.id == this.id && s.subject_id == this.subId);
                                questionsData['questionset']['Malar'].filter(val => { val.passvalue_count = 0; val.pass = false; val.alloptioncheck = false; return val; });
                                questionsData['questionset']['Malar'].filter(val => val.questions.filter(s => { s.passvalue_boolean = false; s.optioncheck = false; s.selected_option = ""; return s; }));
                                this.questions = questionsData['questionset'];
                                this.SHOWARUMU = false;
                                this.SHOWMOTTU = false;
                                this.SHOWMALAR = true;
                            }
                            else {
                                this.findNextStudentToBeAssessed();
                            }
                        }
                        else {
                            this.findNextStudentToBeAssessed();
                        }
                    }
                    else {
                        this.findNextStudentToBeAssessed();
                    }
                }
                else {
                    this.presentAlert();
                }
            }
        });
    }
    findNextStudentForMalar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let getmalarlenght = yield this.questions['Malar'].length;
            if (getmalarlenght > 0) {
                let allQuestioncheckedmalar = yield this.checkValidation(this.questions['Malar'], getmalarlenght);
                if (allQuestioncheckedmalar == true) {
                    let getmalarpassedlogiclenght = yield this.questions['Malar'].filter(n => n.pass == true).length;
                    this.questions['status'] = 2;
                    if (getmalarpassedlogiclenght >= this.minimum_correct) {
                        this.questions['status'] = 3;
                        this.findNextStudentToBeAssessed();
                    }
                    else {
                        this.findNextStudentToBeAssessed();
                    }
                }
                else {
                    this.presentAlert();
                }
            }
        });
    }
    checkValidation(questionset, lengthof) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let getqustionsetchecked = yield questionset.filter(v => {
                if (v.questions.length > 0) {
                    let singleoptioncheck = v.questions.filter(s => s.optioncheck == true);
                    if (singleoptioncheck >= v.questions_to_display) {
                        v.alloptioncheck = true;
                        return v;
                    }
                    else {
                        v.alloptioncheck = false;
                        return v;
                    }
                }
                else {
                    v.alloptioncheck = true;
                    return v;
                }
            });
            let checkstatus = yield getqustionsetchecked.filter(n => n.alloptioncheck == true).length;
            // this.questonsetpassvalue = await questionset.filter(s => s.pass == true).lenght;
            if (checkstatus == lengthof) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                subHeader: '',
                message: 'Please fill all answers',
                buttons: [{
                        text: 'OK',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        handler: (blah) => {
                            alert.dismiss();
                        }
                    }]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    skipStudent(reason) {
        debugger;
        console.log(this.studentsList, 'skip students');
        this.studentsList.filter(s => {
            if (s.id == this.id) { //&& s.subject_id == this.subId
                if (reason == 'Left_school_after_marking_attendance' || reason == 'Present_in_school_but_unwell') {
                    s.isSkipped = true;
                    s.skippedReason = reason;
                    s.assmnt_status = reason;
                }
                else {
                    s.isSkipped = true;
                    s.skippedReason = reason;
                    s.assmnt_status = reason;
                }
            }
        });
        let seperatestudent = this.studentsList.filter(v => v.id == this.id); //&& v.subject_id == this.subId
        seperatestudent.forEach(e => {
            e.academic_id = e.acad_id;
            e.teacher_id = this.username;
            e.assessment_type = this.apiService.getdataassessed_typeformativeid();
            e.status_of_assessed = reason;
            e.questionset = '';
            e.observation_id = this.observation_id;
        });
        this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: this.studentsList });
        console.log(seperatestudent, 'seperatestudent');
        // seperatestudent.academic_id = "1";
        // seperatestudent.teacher_id = this.username;
        // seperatestudent.assessment_type = this.apiService.getdataassessed_typeformativeid();
        // seperatestudent.status_of_assessed = reason;
        // this.alertService.success("Online!!", false);
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            this.apiService.saveSummativeAssessmentDetails(seperatestudent, this.token).subscribe(data => {
                try {
                    if (data.status == 200 && data.dataStatus == true) {
                        this.commonAlert('Success', 'Student Skipped Successfully.');
                        this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectksy: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn });
                        // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed == false && el.isSkipped != true));
                        // if (studentsToBeAssessed.length > 0) {
                        //   this.apiService.markSkipped(studentsToBeAssessed[0].id, reason);
                        //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                        // } else {
                        //   this.alertService.success("All Students assessed!", false)
                        //   this.router.navigate(['/tabs/summative-student']);
                        // }
                        // this.alertService.success("All Students assessed!", false)
                        this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level } }); //skipStuID : seperatestudent.id ,asstStatus : reason
                    }
                    else {
                        // this.alertService.error(data.msg)
                        throw 'No data found in this student list';
                    }
                }
                catch (err) {
                    this.toast.presentToast(err, 'error');
                }
            });
        }
        else {
            // call functions on network offline, such as firebase.goOffline();
            this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectkey: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn });
            this.commonAlert('Student Skipped Successfully', 'Offline: Data stored in local!!');
            debugger;
            this.ionicstorage.getData('remaingusersummative').then((dataa) => {
                var store;
                if (dataa == undefined || dataa == null) {
                    store = [];
                }
                else {
                    store = dataa.remainingdata;
                }
                store.push(seperatestudent);
                console.log(store), 'sssssssssssssssssssssssss';
                let skipStu = this.studentsList.filter(e => e.id == store[0].id);
                console.log('skipstu...', skipStu);
                for (let i = 0; i < skipStu.length; i++) {
                    console.log(skipStu[i]);
                    skipStu[i].assmnt_status = reason;
                }
                console.log(skipStu, "afterrrrrrrrrrrrrrrr......");
                let skipPayload = store.flat();
                this.ionicstorage.insertData_Replace('remaingusersummative', { remainingdata: skipPayload });
                console.log(skipPayload, 'skipPayload');
                let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed == false && el.isSkipped != true));
                if (studentsToBeAssessed.length > 0) {
                    this.apiService.markSkipped(studentsToBeAssessed[0].id, reason);
                    // this.router.navigate(['/tabs/summative-class-selection', ]);
                    this.router.navigate(['/tabs/summative-class-selection', studentsToBeAssessed[0].id], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level, skipStuID: store[0].id, asstStatus: reason } });
                }
                else {
                    this.commonAlert('All Students assessed!', 'Offline: Data stored in local.');
                    this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level } });
                }
                //Shahul Code
                this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, udiseCode: this.udiseCode, observation_id: this.observation_id, level: this.level } });
            }, (error) => console.error(error));
        }
    }
    checkPassValue(answer, question, mainquestion) {
        question.optioncheck = true;
        question.selected_option = answer.value;
        let splitedanswer = question.correct_answer.split(' ');
        let answerdata = splitedanswer[0] + '_' + splitedanswer[1];
        if (question[answerdata] == answer.value) {
            question['passvalue_boolean'] = true;
            let getpassvalue = mainquestion['pass_logic'].split('/');
            let countofpassvalue = Number(getpassvalue[0]) / Number(getpassvalue[1]);
            let getpassvaluefromquestions = mainquestion['questions'].filter(s => s.passvalue_boolean == true).length;
            let countofquestionpassvalue = getpassvaluefromquestions / Number(mainquestion['questions_to_display']);
            if (countofquestionpassvalue >= countofpassvalue) {
                mainquestion['pass'] = true;
            }
            else {
                mainquestion['pass'] = false;
            }
        }
        else {
            question['passvalue_boolean'] = false;
        }
    }
    commonAlert(SubHeader, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: SubHeader,
                message: msg,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: () => { }
                    },
                ],
            });
            yield alert.present();
        });
    }
    viewImage(imageName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.image = this.live_img_url.concat(imageName.toString());
            console.log(this.image, 'imagagaga');
            const modal = yield this.modalCtrl.create({
                component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_10__.ViewImagePage,
                componentProps: { image: this.image },
                cssClass: 'view-image-modal'
            });
            yield modal.present();
        });
    }
};
SummativeQuestionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_8__.ToastService }
];
SummativeQuestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-summative-questions',
        template: _raw_loader_summative_questions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_summative_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SummativeQuestionsPage);



/***/ }),

/***/ 18858:
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.page.scss ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ion-title {\n  font-family: 'Ubuntu' !important;\n  font-size: 24px;\n  line-height: 28px;\n}\n\n\n.skip-btn-box {\n  width: calc(100% - 10%);\n  margin: 10px auto;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\nion-content{\nposition: relative;\n}\nion-content{\n  --background: url(\"/assets/images/ennum-ezhuthum/screen-back.png\") 0 0/100% 100% no-repeat\n}\n.center-align-flex{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-card{\n  padding: 10px;\n}\n.font-weight-bold{\n  font-weight: bold;\n}\n\n\nion-header{\n  background: #27AE60;\n}\n\n.marginTop{\n  margin: 5px auto;\n} */\nion-title {\n  font-size: 15px;\n}\n.headeralign {\n  text-align: center;\n  font-size: large;\n}\nion-back-button {\n  color: #fff;\n}\n.questionnumber {\n  color: #2176b9;\n}\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5 !important;\n}\n::ng-deep.alertButton {\n  background: #e5e5e5 !important;\n}\n.back-icon {\n  color: white;\n  zoom: 1.5;\n  margin-left: 0px;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1xdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUEwQ0E7RUFDRSxlQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFDQTtFQUNFLDhCQUFBO0FBRUY7QUFDQTtFQUNFLDhCQUFBO0FBRUY7QUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic3VtbWF0aXZlLXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpb24tdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG5cclxuXHJcbi5za2lwLWJ0bi1ib3gge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9lbm51bS1lemh1dGh1bS9zY3JlZW4tYmFjay5wbmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXRcclxufVxyXG4uY2VudGVyLWFsaWduLWZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5mb250LXdlaWdodC1ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuaW9uLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiAjMjdBRTYwO1xyXG59XHJcblxyXG4ubWFyZ2luVG9we1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbn0gKi9cclxuXHJcbmlvbi10aXRsZXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJhbGlnbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5pb24tYmFjay1idXR0b257XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnF1ZXN0aW9ubnVtYmVye1xyXG4gIGNvbG9yOiAjMjE3NmI5O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5hbGVydEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206MS41O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 74638:
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.page.html ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <!-- <ion-back-button defaultHref=\"/tabs/summative-class-selection\"></ion-back-button> -->\r\n      <ion-icon name=\"arrow-back\" (click)=\"back()\">\r\n      </ion-icon>\r\n   </ion-buttons>\r\n    <ion-title>SUMMATIVE ASSESSMENT</ion-title>\r\n    <!-- <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 5</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && emis_usertype1 == '1'\">L2 - 5</span> -->\r\n    <span class=\"header-span\">{{scrnNmbr}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"content\">\r\n  <!-- <app-overlay-skip-modal [btnHit]=\"changeModelStatusHandler()\" [studentName]=\"student.name\" *ngIf=\"showSkipModel\">\r\n  </app-overlay-skip-modal> -->\r\n  <ion-card>\r\n    <!-- <ion-note>Note : Please enters the answers of the student</ion-note> -->\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n\r\n          <ion-text color=\"primary\" class=\"ion-text-center\">\r\n            <h5>{{class_num}}<br>{{subject}}</h5>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <ion-text color=\"dark ion-text-center\">\r\n            <h5>{{student.name}} ({{student.user_id}})</h5>\r\n          </ion-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"ion-text-center\">\r\n      <ion-button (click)=\"presentAlertConfirm()\" color=\"danger\">SKIP TO NEXT STUDENT &gt;&gt;</ion-button>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"SHOWARUMU\">\r\n      <!-- <div class=\"headeralign\">ARUMBU</div> -->\r\n      <ion-card *ngFor=\"let item of questions.Arumbu; let i = index\">\r\n        <div *ngIf=\"item.question_type == 'direct'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div>\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <audio controls=\"false\">\r\n              <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n              Your browser does not support the audio element.\r\n            </audio>\r\n            <div>**************************</div>\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).</span><audio controls=\"false\">\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n                  Your browser does not support the audio element.\r\n                </audio>\r\n              </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"SHOWMOTTU\">\r\n      <!-- <div class=\"headeralign\">MOTTU</div> -->\r\n      <ion-card *ngFor=\"let item of questions.Mottu; let i = index\">\r\n        <div *ngIf=\"item.question_type == 'direct'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <span innerHTML=\"{{data.question}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span> <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                  alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\" >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <audio controls>\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mpeg\">\r\n                  Your browser does not support the audio element.\r\n                </audio> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"SHOWMALAR\">\r\n      <!-- <div class=\"headeralign\">MALAR</div> -->\r\n      <ion-card *ngFor=\"let item of questions.Malar; let i = index\">\r\n        <div *ngIf=\"item.question_type == 'direct'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <span innerHTML=\"{{data.question}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span> <ion-item class=\"marginTop\" (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                  alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span><span innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                  <ion-item class=\"marginTop\"  (click)=\"viewImage(data.question)\"><img src=\"{{live_img_url}}{{data.question}}\"\r\n                    alt=\"No Image Available\" style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_1}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_2}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_3}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\"  >\r\n                      <img src=\"{{live_img_url}}{{data.option_4}}\"\r\n                      alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n          <ion-card-header>\r\n            <ion-card-title><span class=\"questionnumber\">Q{{i+1}}.  </span> {{item.question_title}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <div *ngFor=\"let data of item.questions | questionFilter:item.questions_to_display; let j = index\">\r\n            <div >\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).   </span> <audio controls>\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mpeg\">\r\n                  Your browser does not support the audio element.\r\n                </audio></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                <ion-list>\r\n                  <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\" [value]=\"data.selected_option\">\r\n                    <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                      {{data.option_1}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                      {{data.option_2}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                      {{data.option_3}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                    </ion-item>\r\n\r\n                    <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                      {{data.option_4}}\r\n                      <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n              </ion-card-content>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer collapse=\"fade\">\r\n  <ion-toolbar class=\"ion-text-center\" style=\"--background: white !important;\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <!-- <ion-col>\r\n          <ion-button (click)=\"check()\" class=\"btn-submit\" color=\"secondary\"  expand=\"block\">BACK</ion-button>\r\n        </ion-col> -->\r\n        <ion-col>\r\n          <ion-button *ngIf=\"!SHOWMALAR && !SHOWMOTTU\" (click)=\"findStudentToBeAssessed()\" color=\"primary\" expand=\"block\"><span style=\"color:#fff;\">SUBMIT ANSWER</span>\r\n          </ion-button>\r\n          <ion-button *ngIf=\"SHOWMOTTU\" (click)=\"findNextStudentForMottu()\" color=\"primary\" expand=\"block\"><span style=\"color:#fff;\">SUBMIT ANSWER</span></ion-button>\r\n          <ion-button *ngIf=\"SHOWMALAR\" (click)=\"findNextStudentForMalar()\" color=\"primary\" expand=\"block\"><span style=\"color:#fff;\">SUBMIT ANSWER</span></ion-button>\r\n        </ion-col>\r\n      \r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-questions_summative-questions_module_ts-es2015.js.map