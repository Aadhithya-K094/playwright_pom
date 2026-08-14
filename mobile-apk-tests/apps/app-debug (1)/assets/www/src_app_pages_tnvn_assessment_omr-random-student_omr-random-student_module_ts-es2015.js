(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_omr-random-student_omr-random-student_module_ts"],{

/***/ 46931:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/omr-random-student/omr-random-student.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OmrRandomStudentComponent": function() { return /* binding */ OmrRandomStudentComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_omr_random_student_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./omr-random-student.html */ 71243);
/* harmony import */ var _omr_random_student_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omr-random-student.component.scss */ 58267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/assessmentmodal/assessmentmodal.component */ 40036);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);














let OmrRandomStudentComponent = class OmrRandomStudentComponent {
    constructor(modalController, _storage, _apiService, userSessionService, _router, loading, ionicStore, _alertService, _translate) {
        this.modalController = modalController;
        this._storage = _storage;
        this._apiService = _apiService;
        this.userSessionService = userSessionService;
        this._router = _router;
        this.loading = loading;
        this.ionicStore = ionicStore;
        this._alertService = _alertService;
        this._translate = _translate;
        this.date = new Date().getDate();
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.myDate = "";
        this.notebookQuestionList = [];
        this.isMenuOpen = false;
        this.pageName = "page1";
        this.sectionData = [];
        this.studentList = [];
        this.tempStudentList = [];
        this.studentCount = 0;
        this.isQuestionsDisplayed = false;
        this.displayBtn = "NEXT";
        this.randomQuestionList = [];
        this.questionList = [];
        this.options = [];
        this.optionList = [];
        this.assessmentAnswers = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.month = Number(this.month) + 1;
            if (Number(this.month) < 10) {
                this.month = '0' + this.month;
            }
            if (Number(this.date) < 10) {
                this.date = '0' + this.date;
            }
            this.myDate = this.year + '-' + this.month + '-' + this.date;
            this.progressValue = Math.round(((9 - 2) / 12) * 100);
            this.appLanguage();
            this.loading.present();
            this.teachertype = this.userSessionService.teacher_type();
            this.classInfo = localStorage.getItem("classInfo");
            this.classInfo = JSON.parse(this.classInfo);
            yield this.ionicStore.getOffStorage().then((response) => {
                this.masterApiResponse = response;
                if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                    this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                }
            });
            this.ionicStore.getStoreData().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                this.storeDetail = response;
                if (this.storeDetail == null || this.storeDetail == undefined) {
                    this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                }
                this.storeDetail.pages.currentPage = "notebook_verifications";
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                if (this.storeDetail.pages.pageData[17] == undefined || this.storeDetail.pages.pageData[17] == null) {
                    let notebookquestions = [];
                    if (this.languageType == 'en') {
                        notebookquestions = this.masterApiResponse.methodology_questions_lang.filter((data) => data.lang == this.languageType && Number(data.sec_id) == 7);
                        this.sectionData = this.masterApiResponse.methodologys.filter((data) => Number(data.sec_id) == 26);
                        this.sectionData[0].questionList = [];
                    }
                    notebookquestions = notebookquestions.sort((a, b) => (a.action_priority > b.action_priority) ? 1 : ((b.action_priority > a.action_priority) ? -1 : 0));
                    for (var i = 0; i < notebookquestions.length; i++) {
                        delete notebookquestions[i].score;
                        if (notebookquestions[i].ans) {
                            notebookquestions[i].ans = JSON.parse(notebookquestions[i].ans);
                        }
                        if (notebookquestions[i].ans.ans) {
                            notebookquestions[i].child_qus = this.masterApiResponse.methodology_questions_lang.filter((data) => {
                                if (data.ob_qus_id == notebookquestions[i].ans.ans[0].child_qus) {
                                    return data;
                                }
                            });
                            notebookquestions[i].child_qus = notebookquestions[i].child_qus[0];
                        }
                        notebookquestions[i].class = notebookquestions[i].class.split(",");
                        if (notebookquestions[i].subject_id) {
                            notebookquestions[i].subject_id = notebookquestions[i].subject_id.split(",");
                            if (notebookquestions[i].subject_id.includes(this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id) || notebookquestions[i].subject_id.includes("0")) {
                                this.notebookQuestionList.push(notebookquestions[i]);
                            }
                        }
                    }
                    this.notebookQuestionList = this.notebookQuestionList.filter((data) => JSON.parse(data.class.includes(this.storeDetail.pages.pageData[5].correctedDetails.class_id)));
                    let studentList = [];
                    // if(this.storeDetail.pages.pageData[18]?.omrData.length>0){
                    //   studentList = this.storeDetail.pages.pageData[18].omrData
                    // }
                    // else if(this.storeDetail.pages.pageData[18]?.correctedDetails.length>0){
                    //   studentList = this.storeDetail.pages.pageData[18].correctedDetails
                    // }
                    // else{
                    //   if(this.storeDetail.pages.pageData[17]?.apiResponse.records.accessedStudents.length>0){
                    //     studentList = this.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents
                    //   }else{
                    //     studentList= this.storeDetail.pages.pageData[6].correctedDetails.filter((data)=>data.status == 'active');
                    //   }
                    // }  
                    if (((_a = this.storeDetail.pages.pageData[18]) === null || _a === void 0 ? void 0 : _a.omrData.length) > 0) {
                        studentList = this.storeDetail.pages.pageData[18].omrData;
                    }
                    else {
                        studentList = this.storeDetail.pages.pageData[6].correctedDetails.filter((data) => data.status == 'active');
                    }
                    // let dataLength;
                    // if(this.storeDetail.pages.pageData[6].correctedDetails.length>3){
                    //   dataLength = 3
                    // }
                    // else{
                    //   dataLength = this.storeDetail.pages.pageData[6].correctedDetails.length
                    // }            
                    for (i = 0; i < 5; i++) {
                        // if (this.storeDetail.pages.pageData[6].correctedDetails.length) {
                        let idx;
                        idx = Math.floor(Math.random() * studentList.length);
                        if (studentList[idx] != undefined) {
                            studentList[idx].questions = this.notebookQuestionList[i];
                            this.tempStudentList.push(studentList[idx]);
                        }
                        studentList.splice(idx, 1);
                        // }
                    }
                    const colorCodes = ["#FF5733", "#A99844", "#86D765", "#65D7B1", "#B865D7", "#EE776F", "#E5AA68", "#D7E45A", "#78CD4A", "#6EF2C2", "#CD7EF2", "#F27EAF"];
                    for (var i = 0; i < this.tempStudentList.length; i++) {
                        this.tempStudentList[i].backgroundColor = colorCodes[i];
                        this.tempStudentList[i].omr_questions = "";
                    }
                    this.studentList = JSON.parse(JSON.stringify(this.tempStudentList));
                    localStorage.setItem("final-omr-student-list", JSON.stringify(this.studentList));
                    let apiData = {
                        pageNo: "18",
                        pageName: "omr-random-student",
                        apiResponse: {
                            records: {
                                questionList: this.questionList,
                                options: this.options,
                                accessedStudents: this.studentList,
                            },
                        },
                        correctedDetails: {
                            question_data: [],
                            sec_data: [],
                        },
                    };
                    this.loading.dismiss();
                    this.storeDetail.pages.pageData[17] = apiData;
                    yield this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                }
                else {
                    this.loading.dismiss();
                    // if(this.storeDetail.pages.pageData[18]?.omrData.length>0){          
                    //   this.studentList = this.storeDetail.pages.pageData[18].omrData
                    //   this.tempStudentList = this.storeDetail.pages.pageData[18].omrData
                    // }
                    // else if(this.storeDetail.pages.pageData[18]?.correctedDetails.length>0){          
                    //   this.studentList = this.storeDetail.pages.pageData[18].correctedDetails
                    //   this.tempStudentList = this.storeDetail.pages.pageData[18].correctedDetails
                    // }
                    // else{          
                    //   if(this.storeDetail.pages.pageData[17]?.apiResponse.records.accessedStudents.length>0){            
                    //     this.studentList = this.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents
                    //     this.tempStudentList = this.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents
                    //   }
                    // }  
                    // let studentList=[]; 
                    // if(this.storeDetail.pages.pageData[18]?.omrData.length>0){
                    //   studentList = this.storeDetail.pages.pageData[18].omrData
                    // } else {
                    //   studentList= this.storeDetail.pages.pageData[6].correctedDetails.filter((data)=>data.status == 'active');
                    // }
                    // this.tempStudentList = [];
                    // for (i = 0; i < 5; i++) {
                    //     let idx;          
                    //     idx = Math.floor(Math.random() * studentList.length);          
                    //     if(studentList[idx]!=undefined){
                    //       studentList[idx].questions = this.notebookQuestionList[i]
                    //       this.tempStudentList.push(studentList[idx]);      
                    //     }          
                    //     studentList.splice(idx, 1);              
                    // }   
                    // const colorCodes = ["#FF5733","#A99844","#86D765","#65D7B1","#B865D7","#EE776F","#E5AA68","#D7E45A","#78CD4A","#6EF2C2","#CD7EF2","#F27EAF"]      
                    // for(var i=0;i<this.tempStudentList.length;i++){
                    //   this.tempStudentList[i].backgroundColor = colorCodes[i]
                    //   if(this.tempStudentList[i].scanned == true){                  
                    //     this.tempStudentList[i].scanned = true
                    //   }
                    // }      
                    // this.studentList = JSON.parse(JSON.stringify(this.tempStudentList)); 
                    // localStorage.setItem("final-omr-student-list", JSON.stringify(this.studentList));
                    debugger;
                    this.studentList = JSON.parse(localStorage.getItem("final-omr-student-list"));
                    this.tempStudentList = this.studentList;
                    this.storeDetail.pages.pageData[18].omrData = this.studentList;
                    this.storeDetail.pages.pageData[18].correctedDetails = this.studentList;
                    this.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents = this.studentList;
                }
            }));
        });
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    selectedDate(selectedDate) {
        this.studentData.signedDate = selectedDate.detail.value;
    }
    _initialiseTranslation() {
        this._translate.get("studentAsessment").subscribe((res) => {
            this.studentAsessment = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
        });
        this._translate.get("VerificationData").subscribe((res) => {
            this.Verification = res;
        });
        this._translate.get("notebookVerification").subscribe((res) => {
            this.notebookVerification = res;
        });
        this._translate.get("notebookSign").subscribe((res) => {
            this.notebookSign = res;
        });
        this._translate.get("learningOutcome").subscribe((res) => {
            this.learningOutcome = res;
        });
        this._translate.get("notebookReport").subscribe((res) => {
            this.notebookReport = res;
        });
        this._translate.get("grade").subscribe((res) => {
            this.grade = res;
        });
        this._translate.get("subject").subscribe((res) => {
            this.subject = res;
        });
        this._translate.get("referAnswer").subscribe((res) => {
            this.referAnswer = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("save").subscribe((res) => {
            this.save = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submitAssessement = res;
        });
    }
    toggleAccordion(i) {
        this.isMenuOpen = !this.isMenuOpen;
        this.itemIndex = i;
    }
    openAssessmentModal(refer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_6__.AssessmentmodalComponent,
                componentProps: {
                    viewName: refer,
                    questionList: this.studentData.questions,
                },
                cssClass: "my-custom-modal-assessment",
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    moveNext() {
        this._router.navigate(["/tnvntabs/page-route/omr-scanner"]);
    }
    moveBack() {
        if (this.isQuestionsDisplayed) {
            if (this.displayBtn == "SUBMIT") {
                this.studentCount = this.studentCount - 1;
                if (this.studentCount == 0) {
                    this.isQuestionsDisplayed = false;
                    this.pageName = "page1";
                }
                else {
                    this.studentData = this.storeDetail.pages.pageData[14].correctedDetails.question_data[this.studentCount];
                }
                this.displayBtn = "NEXT";
            }
            else if (this.studentCount != 0) {
                this.studentCount = this.studentCount - 1;
                this.studentData = this.storeDetail.pages.pageData[14].correctedDetails.question_data[this.studentCount];
            }
            else {
                this.isQuestionsDisplayed = false;
                this.pageName = "page1";
            }
        }
        else {
            this._router.navigate(["/tnvntabs/page-route/assessment"]);
            // if(this.storeDetail.pages.pageData[5].correctedDetails.class_id){
            //   if(Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id)>3 && Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id)<9){          
            //     this._router.navigate(["/tnvntabs/page-route/assessment"]);     
            //   } else{
            //     this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);          
            //   }       
            // }else{
            //   this._router.navigate(["/tnvntabs/page-route/assessment"]);
            // }      
        }
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    getRandomQuestions() {
        this.randomQuestionList = [];
        const noOfRandomQues = this.unitInfo.no_of_random_qus;
        for (let i = 0; i < noOfRandomQues; i++) {
            let idx;
            idx = this.getRandomInt(0, this.questionList.length);
            const found = this.randomQuestionList.some((el) => el == this.questionList[idx]);
            if (!found) {
                this.randomQuestionList.push(this.questionList[idx]);
            }
            else {
                idx = this.getRandomInt(0, this.questionList.length);
                this.randomQuestionList.push(this.questionList[idx]);
            }
        }
    }
    getGrade(emisId) {
        const foundStudent = this.studentList.find((s) => s.id == emisId);
        if (foundStudent) {
            return foundStudent.class_section;
        }
        else {
            return null;
        }
    }
    selectedAnswer(ans, grade) {
        let questionData = {
            student_emisid: this.studentData.student_emisid,
            student_name: this.studentData.student_name,
            questions: this.studentData.questions,
            grade: grade,
            ans: ans,
        };
        this.assessmentAnswers[this.studentCount] = questionData;
    }
    rearrangeStudent(student, indexd) {
        let tempStudents = JSON.parse(JSON.stringify(this.studentList));
        let filterStudent = tempStudents.filter((data, index) => index >= indexd);
        let previousItems = tempStudents.filter((studentInfo) => !filterStudent.includes(previousItems));
        this.studentList = filterStudent.concat(previousItems);
        this.moveNext();
    }
};
OmrRandomStudentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService }
];
OmrRandomStudentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-omr-random-student",
        template: _raw_loader_omr_random_student_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_omr_random_student_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OmrRandomStudentComponent);



/***/ }),

/***/ 53247:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/omr-random-student/omr-random-student.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OmrRandomStudentModule": function() { return /* binding */ OmrRandomStudentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _omr_random_student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omr-random-student.component */ 46931);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _omr_random_student_component__WEBPACK_IMPORTED_MODULE_0__.OmrRandomStudentComponent
    }
];
let OmrRandomStudentModule = class OmrRandomStudentModule {
};
OmrRandomStudentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_omr_random_student_component__WEBPACK_IMPORTED_MODULE_0__.OmrRandomStudentComponent,
        ],
        entryComponents: []
    })
], OmrRandomStudentModule);



/***/ }),

/***/ 47224:
/*!***********************************************************!*\
  !*** ./src/app/services/tnvn/services/loading.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 100000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    show(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 1000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => {
            });
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 58267:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/omr-random-student/omr-random-student.component.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\n  display: block;\n}\n\n.inactive {\n  display: none;\n}\n\n.header-accordion {\n  margin: 0;\n  background: #F2C94C;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px;\n  /* identical to box height */\n  color: #FFFFFF;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n\nion-modal {\n  --width: 100px;\n  --height: 102px;\n  --border-radius: 8px;\n}\n\nion-modal ion-datetime {\n  height: 102px;\n}\n\nion-label {\n  max-width: 100% !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.header {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.header-txt {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  border-radius: 10px;\n}\n\n.heading-txt {\n  background: #e6ccff;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.item-style {\n  margin-bottom: 15px;\n  border-radius: 6px;\n}\n\n.background {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  padding: 0px;\n}\n\n.ques-txt {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.bt-10 {\n  padding-bottom: 10p;\n}\n\n.list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.item-native {\n  background: #fff;\n}\n\n.item-border {\n  border-radius: 10px;\n  border-top: 5px solid #8b67b3;\n}\n\nion-list {\n  background: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9tci1yYW5kb20tc3R1ZGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQztFQUNHLGFBQUE7QUFDSjs7QUFDQztFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVBOztBQUVBO0VBQ0kscUNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7QUFFSjs7QUFTQTtFQUNFLDBCQUFBO0FBTkY7O0FBUUE7RUFDRSxVQUFBO0FBTEY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0FBTEY7O0FBT0E7RUFDRSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkE7RUFDRSwrQkFBQTtBQUtGOztBQUZBO0VBQ0UsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxtQkFBQTtFQUNFLDZCQUFBO0FBT0o7O0FBSkE7RUFDRSw0QkFBQTtBQU9GIiwiZmlsZSI6Im9tci1yYW5kb20tc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxuIH1cclxuXHJcbiAuaW5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5oZWFkZXItYWNjb3JkaW9ue1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiAjRjJDOTRDO1xyXG5mb250LWZhbWlseTogQXJpYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMThweDtcclxubGluZS1oZWlnaHQ6IDIycHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbmNvbG9yOiAjRkZGRkZGO1xyXG5oZWlnaHQ6IDYwcHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmJnLXRyYW5zcGFyZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuaW9uLW1vZGFsIHtcclxuICAgIC0td2lkdGg6IDEwMHB4O1xyXG4gICAgLS1oZWlnaHQ6IDEwMnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuICBpb24tbW9kYWwgaW9uLWRhdGV0aW1lIHtcclxuICAgIGhlaWdodDogMTAycHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5pb24tbGFiZWwge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi52YWxpZC1jbHIge1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci10eHQge1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaGVhZGluZy10eHQge1xyXG4gIGJhY2tncm91bmQ6ICNlNmNjZmY7XHJcbiAgLy8gcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5pdGVtLXN0eWxlIHtcclxuICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5iYWNrZ3JvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuLnF1ZXMtdHh0IHtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcbi5idC0xMCB7XHJcbiAgcGFkZGluZy1ib3R0b206MTBwXHJcbn1cclxuLmxpc3Qge1xyXG4gIHBhZGRpbmctYm90dG9tOjBweDtcclxuICBwYWRkaW5nLXRvcDowcHhcclxufVxyXG4ucmFkaW8ge1xyXG4gIHBhZGRpbmctcmlnaHQ6NDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDNweFxyXG59XHJcbi5sYmwge1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuLmlucHV0LWNsciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1uYXRpdmV7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG59XHJcbi5pdGVtLWJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjOGI2N2IzO1xyXG59XHJcblxyXG5pb24tbGlzdCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 71243:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/omr-random-student/omr-random-student.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>OMR STUDENTS LIST</b>\r\n          </ion-title>\r\n        </ion-col>                \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"color-lyellow\">\r\n\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n  <p class=\"fs-12 p-2\" style=\"margin-bottom:0px\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">Note:Please conduct assessment for the students mentioned</span>.</p>         \r\n  </ion-text>  \r\n  <div *ngIf=\"pageName == 'page1'\">\r\n    <div *ngFor=\"let item of tempStudentList; let i = index\" class=\"mb-1\">\r\n      <h5\r\n        class=\"text-center header-accordion\"\r\n        (click)=\"rearrangeStudent(item, i)\"\r\n        [style.background]=\"item?.backgroundColor\"\r\n      >\r\n        {{ item.name }} ({{ item.user_id }})        \r\n      </h5>      \r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"pageName == 'page2'\">\r\n    <h5 class=\"text-center header-accordion\"  [style.background]=\"studentData?.backgroundColor\">\r\n      <b>{{ studentData?.student_name }}</b>\r\n    </h5>\r\n    \r\n    <section style=\"padding-top:10px\">    \r\n      <ion-item lines=\"none\" style=\"padding-bottom:10px\" style=\"background:#fff\" class=\"item-style item-border\">\r\n        <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">\r\n        <ion-label  class=\"ques-txt\">\r\n          {{ studentData.questions.ob_qus_name }}\r\n        </ion-label>\r\n \r\n        <ion-row class=bt-10>\r\n          <ion-list   class=\"list\">\r\n            <ion-radio-group [(ngModel)]=\"studentData.selectedans\">\r\n              <ion-item lines=\"none\" class=\"bg-transparent\" *ngFor=\"let optionData of studentData.questions.ans.ans\" >\r\n                <ion-label class=\"text-wrap\">\r\n                  {{ optionData.ans}}</ion-label\r\n                >\r\n                <ion-radio\r\n                  slot=\"start\"\r\n                  color=\"favorite\"\r\n                  value=\"{{ optionData.ans }}\"\r\n                  (click)=\"\r\n                    selectedAnswer(optionData, optionData)\r\n                  \"\r\n                ></ion-radio>\r\n              </ion-item>            \r\n          </ion-radio-group>\r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col><br>\r\n    </ion-item>  \r\n        <ion-item lines=\"none\" *ngIf=\"studentData.selectedans=='Yes'||studentData.selectedans=='ஆம்'\" style=\"padding-bottom:10px\" class=\"item-style item-border\">\r\n          <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">\r\n          <ion-label  class=\"ques-txt\">\r\n            {{studentData.questions.child_qus.ob_qus_name}}\r\n          </ion-label>\r\n \r\n          <ion-row class=bt-10>\r\n            <ion-list  style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n              <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n              <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n            </ion-list>\r\n          </ion-row>\r\n        </ion-col><br>\r\n      </ion-item>          \r\n              </section>\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"moveBack()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button\r\n        class=\"btn-next\"\r\n        [ngClass]=\"displayBtn != 'NEXT' ? 'submit' : ''\"\r\n        (click)=\"moveNext()\"\r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >\r\n          <!-- {{\r\n            displayBtn == \"SAVE\" ? this.next : this.submitAssessement\r\n          }} -->\r\n          {{ this.save }}\r\n          </ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_assessment_omr-random-student_omr-random-student_module_ts-es2015.js.map