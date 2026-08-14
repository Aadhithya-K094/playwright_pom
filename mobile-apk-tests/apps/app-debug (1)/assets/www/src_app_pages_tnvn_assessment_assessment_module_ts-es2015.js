(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_assessment_module_ts"],{

/***/ 82559:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/assement-performance/assement-performance.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssementPerformanceComponent": function() { return /* binding */ AssementPerformanceComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_assement_performance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assement-performance.component.html */ 72712);
/* harmony import */ var _assement_performance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assement-performance.component.scss */ 18732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/assessmentmodal/assessmentmodal.component */ 40036);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 91841);














let AssementPerformanceComponent = class AssementPerformanceComponent {
    constructor(modalController, _storage, _apiService, _router, loading, ionicStore, _alertService, _translate, http) {
        this.modalController = modalController;
        this._storage = _storage;
        this._apiService = _apiService;
        this._router = _router;
        this.loading = loading;
        this.ionicStore = ionicStore;
        this._alertService = _alertService;
        this._translate = _translate;
        this.http = http;
        this.isMenuOpen = false;
        this.pageName = "page1";
        this.studentList = [];
        this.tempStudentList = [];
        this.studentCount = 0;
        this.score = 0;
        this.isQuestionsDisplayed = false;
        this.displayBtn = "NEXT";
        this.questionList = [];
        this.options = [];
        this.optionList = [];
        this.assessmentAnswers = [];
    }
    ngOnInit() {
        this.progressValue = Math.round(((9 - 2) / 12) * 100);
        this.appLanguage();
        this.loading.present();
        this.classInfo = localStorage.getItem("classInfo");
        this.classInfo = JSON.parse(this.classInfo);
        // this.ionicStore.getOffStorage().then((response) => {
        //   this.masterApiResponse = response;
        //   this.getRandomQuestions();
        //   if (this.storeDetail.pages.pageData[10] == undefined || this.storeDetail.pages.pageData[10] == null) {
        //     let apiData = {
        //       pageNo: "11",
        //       pageName: "stu_Assessment_questions",
        //       apiResponse: {
        //         records: {
        //           questionList: this.randomQuestionList,
        //           options: this.options,
        //           accessedStudents: this.studentList,
        //         },
        //       },
        //       correctedDetails: {
        //         question_data: [],
        //       },
        //     };
        //     this.storeDetail.pages.pageData[10] = apiData;
        //     this.ionicStore.setStoreData(this.storeDetail);
        //   }
        // });
        this.ionicStore.getStoreData().then((response) => {
            this.storeDetail = response;
            this.storeDetail.pages.currentPage = "stu_Assessment_questions";
            this.ionicStore.setStoreData(this.storeDetail);
            if (this.storeDetail.pages.pageData[9] != undefined) {
                const accessedStudents = this.storeDetail.pages.pageData[9].correctedDetails.studentList.filter((data) => data.accessed == "yes");
                this.tempStudentList = accessedStudents;
            }
            else {
                const accessedStudents = this.storeDetail.pages.pageData[6].correctedDetails.filter((data) => data.accessed == "yes");
                this.tempStudentList = accessedStudents;
            }
            const colorCodes = ["#FF5733", "#A99844", "#86D765", "#65D7B1", "#B865D7"];
            const contentCodes = ["#F9AD9C", "#D9C976", "#B0E899", "#99ECD0", "#CEAADB"];
            for (var i = 0; i < this.tempStudentList.length; i++) {
                this.tempStudentList[i].backgroundColor = colorCodes[i];
                this.tempStudentList[i].contentColor = contentCodes[i];
            }
            this.studentList = JSON.parse(JSON.stringify(this.tempStudentList));
            // this.unitInfo = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo;      
            // this.options = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.options;
            // this.questionList = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.questions;
            // this.learningOutcomeData = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo;
            // this.getRandomQuestions();
            this.ionicStore.getOffStorage().then((response) => {
                this.masterApiResponse = response;
                this.getRandomQuestions();
                if (this.storeDetail.pages.pageData[10] == undefined || this.storeDetail.pages.pageData[10] == null) {
                    let apiData = {
                        pageNo: "11",
                        pageName: "stu_Assessment_questions",
                        apiResponse: {
                            records: {
                                questionList: this.randomQuestionList,
                                // options: this.options,
                                accessedStudents: this.studentList,
                            },
                        },
                        correctedDetails: {
                            question_data: [],
                        },
                    };
                    this.storeDetail.pages.pageData[10] = apiData;
                    this.ionicStore.setStoreData(this.storeDetail);
                }
            });
            this.loading.dismiss();
            // if (this.storeDetail.pages.pageData[10] == undefined || this.storeDetail.pages.pageData[10] == null) {
            //   let apiData = {
            //     pageNo: "11",
            //     pageName: "stu_Assessment_questions",
            //     apiResponse: {
            //       records: {
            //         questionList: this.questionList,
            //         options: this.options,
            //         accessedStudents: this.studentList,
            //       },
            //     },
            //     correctedDetails: {
            //       question_data: [],
            //     },
            //   };
            //   this.storeDetail.pages.pageData[10] = apiData;
            //   this.ionicStore.setStoreData(this.storeDetail);
            // }
        });
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("studentAsessment").subscribe((res) => {
            this.studentAsessment = res;
        });
        this._translate.get("learningOutcome").subscribe((res) => {
            this.learningOutcome = res;
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
        this._translate.get("submitAssessement").subscribe((res) => {
            this.submitAssessement = res;
        });
    }
    toggleAccordion(i) {
        this.isMenuOpen = !this.isMenuOpen;
        this.itemIndex = i;
    }
    openAssessmentModal(refer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    moveNext(mainquestion) {
        debugger;
        if (!this.isQuestionsDisplayed) {
            let studentData = this.storeDetail.pages.pageData[10].correctedDetails
                .question_data.length;
            if (studentData != this.studentList.length) {
                let randomData = {
                    student_emisid: this.studentList[this.studentCount].id,
                    student_name: this.studentList[this.studentCount].name,
                    backgroundColor: this.studentList[this.studentCount].backgroundColor,
                    questions: this.randomQuestionList,
                    options: this.options,
                };
                let tempQuestionDataSize = this.storeDetail.pages.pageData[10]
                    .correctedDetails.question_data.length;
                if (!tempQuestionDataSize) {
                    this.storeDetail.pages.pageData[10].correctedDetails.question_data.push(randomData);
                    this.ionicStore.setStoreData(this.storeDetail);
                }
                else {
                    let studentIds = this.storeDetail.pages.pageData[10].correctedDetails.question_data.map((el) => {
                        return el.student_emisid;
                    });
                    if (!studentIds.includes(randomData.student_emisid)) {
                        this.storeDetail.pages.pageData[10].correctedDetails.question_data.push(randomData);
                        this.ionicStore.setStoreData(this.storeDetail);
                    }
                }
            }
            this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];
            this.isQuestionsDisplayed = true;
            this.pageName = "page2";
            if (this.studentCount == this.studentList.length - 1) {
                this.displayBtn = "SUBMIT ASSESSMENT";
                this.studentCount = this.studentCount + 1;
            }
        }
        else if (this.displayBtn == "NEXT") {
            // localStorage.setItem('main_question',mainquestion['questions']);
            console.log('fnjnnnfnfnf', mainquestion);
            let index = mainquestion['questions'].length - 1;
            // const final_selected_option = mainquestion['questions'][index]['questions'].lastIndexOf("selected_option");
            this.final_selected_option = mainquestion['questions'][index]['questions'].find(obj => obj.selected_option != undefined);
            console.log(this.final_selected_option, 'final_selected_option');
            if (this.final_selected_option != undefined && this.final_selected_option != "") {
                if (this.studentCount != this.studentList.length - 1) {
                    this.studentCount = this.studentCount + 1;
                    // this.getRandomQuestions();          
                    let studentData = this.storeDetail.pages.pageData[10].correctedDetails
                        .question_data.length;
                    let randomData = {
                        student_emisid: this.studentList[this.studentCount].id,
                        student_name: this.studentList[this.studentCount].name,
                        backgroundColor: this.studentList[this.studentCount].backgroundColor,
                        questions: this.randomQuestionList,
                        // options: this.options,
                        ans: "",
                    };
                    if (studentData != this.studentList.length) {
                        if (this.storeDetail.pages.pageData[10].correctedDetails.question_data.some(person => person.student_emisid == randomData.student_emisid)) {
                        }
                        else {
                            this.storeDetail.pages.pageData[10].correctedDetails.question_data.push(randomData);
                            this.ionicStore.setStoreData(this.storeDetail);
                        }
                    }
                    this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];
                    if (this.studentCount == this.studentList.length - 1) {
                        this.displayBtn = "SUBMIT ASSESSMENT";
                    }
                }
                mainquestion['questions'].forEach((items) => {
                    items.questions.forEach((item) => {
                        if (item.correct_answer == item.option_1) {
                            if (item.selected_option == item.option_1) {
                                this.score++;
                            }
                        }
                        if (item.correct_answer == item.option_2) {
                            if (item.selected_option == item.option_2) {
                                this.score++;
                            }
                        }
                        if (item.correct_answer == item.option_3) {
                            if (item.selected_option == item.option_1) {
                                this.score++;
                            }
                        }
                        if (item.correct_answer == item.option_4) {
                            if (item.selected_option == item.option_1) {
                                this.score++;
                            }
                        }
                    });
                });
                // this.score = this.score + 1;
                let assessStuList = {
                    student_emisid: this.studentData.student_emisid,
                    student_name: this.studentData.student_name,
                    questions: String(this.studentData.questions.length),
                    score: String(this.score),
                    // grade: grade,
                    // ans: answer,
                };
                let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                stu_Assessment_Result.correctedDetails.assessed_StuList.push(assessStuList);
                stu_Assessment_Result.correctedDetails.assessed_StuList = stu_Assessment_Result.correctedDetails.assessed_StuList.filter((test, index, array) => index == array.findIndex((findTest) => findTest.student_emisid == test.student_emisid));
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
            }
            else {
                let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
                this._alertService.showAlert("Please Fill all Answers");
            }
        }
        else {
            let index = mainquestion['questions'].length - 1;
            // const final_selected_option = mainquestion['questions'][index]['questions'].lastIndexOf("selected_option");  
            this.final_selected_option = mainquestion['questions'][index]['questions'].find(obj => obj.selected_option != undefined);
            if (this.final_selected_option != undefined && this.final_selected_option != "") {
                // this.storeDetail.pages.pageData[10][
                //   "pageDetails"
                // ] = this.assessmentAnswers;
                this.storeDetail.pages.currentProgress = this.progressValue;
                mainquestion['questions'].forEach((items) => {
                    items.questions.forEach((item) => {
                        if (item.correct_answer == item.option_1) {
                            if (item.selected_option == item.option_1) {
                                this.score++;
                            }
                        }
                        if (item.correct_answer == item.option_2) {
                            if (item.selected_option == item.option_2) {
                                this.score++;
                            }
                        }
                        if (item.correct_answer == item.option_3) {
                            if (item.selected_option == item.option_1) {
                                this.score++;
                            }
                        }
                        if (item.correct_answer == item.option_4) {
                            if (item.selected_option == item.option_1) {
                                this.score++;
                            }
                        }
                    });
                });
                let assessStuList = {
                    student_emisid: this.studentData.student_emisid,
                    student_name: this.studentData.student_name,
                    questions: String(this.studentData.questions.length),
                    score: String(this.score),
                    // grade: grade,
                    // ans: answer,
                };
                let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                stu_Assessment_Result.correctedDetails.assessed_StuList.push(assessStuList);
                stu_Assessment_Result.correctedDetails.assessed_StuList = stu_Assessment_Result.correctedDetails.assessed_StuList.filter((test, index, array) => index == array.findIndex((findTest) => findTest.student_emisid == test.student_emisid));
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                // if (this.storeDetail.pages.pageData[7]) {
                //   if(Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) <= 10 ){
                //     this._router.navigate(["/tnvntabs/page-route/notebook"]);
                //   } else{
                //     this._router.navigate(["/tnvntabs/page-route/hodinspection"]);
                //   }          
                // } else {          
                //  if (this.storeDetail.pages.pageData[6] > 0) {
                //     this._router.navigate(["/tnvntabs/page-route/attendance/student-data"]);
                //   } else {
                //     this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                //   }
                // }
            }
            else {
                let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
                this._alertService.showAlert("Please Fill all Answers");
            }
        }
    }
    moveBack() {
        debugger;
        if (this.isQuestionsDisplayed) {
            if (this.displayBtn == "SUBMIT ASSESSMENT") {
                this.studentCount = this.studentCount - 1;
                if (this.studentCount == 0) {
                    this.isQuestionsDisplayed = false;
                    this.pageName = "page1";
                }
                else {
                    this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];
                }
                this.displayBtn = "NEXT";
            }
            else if (this.studentCount != 0) {
                this.studentCount = this.studentCount - 1;
                this.studentData = this.storeDetail.pages.pageData[10].correctedDetails.question_data[this.studentCount];
            }
            else {
                this.isQuestionsDisplayed = false;
                this.pageName = "page1";
            }
            let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
            localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
        }
        else {
            let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
            localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
            this._router.navigate(["/tnvntabs/page-route/assessment/s-assessment"]);
        }
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    getRandomQuestions() {
        this.randomQuestionList = [];
        // const noOfRandomQues = this.unitInfo.no_of_random_qus;
        const noOfRandomQues = 5;
        this.http.get("assets/tnvn/assess_qns.json").subscribe((data) => {
            // this.questionList = data;
            this.randomQuestionList = data;
            console.log(this.randomQuestionList, 'ugdvuwadvhvqyfdy');
            // for (let i = 0; i < noOfRandomQues; i++) {
            //   let idx;
            //   idx = this.getRandomInt(0, this.questionList.length);       
            //   const found = this.randomQuestionList.some(
            //     (el) => el == this.questionList[idx]
            //   );
            //   if (!found) {
            //     this.randomQuestionList.push(this.questionList[idx]);
            //   } else {
            //     idx = this.getRandomInt(0, this.questionList.length);
            //     this.randomQuestionList.push(this.questionList[idx]);
            //   }
            // }
        }, error => {
        });
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
        // this.moveNext();
    }
    checkPassValue(answer, question, mainquestion) {
        // console.log(answer, question, mainquestion,studentData,index)
        question.optioncheck = true;
        question.selected_option = answer.value;
        let splitedanswer = question.correct_answer.split(' ');
        let answerdata = splitedanswer[0] + '_' + splitedanswer[1];
        if (question[answerdata] == answer.value) {
            // this.score = this.score + 1;
            question['passvalue_boolean'] = true;
            let getpassvalue = mainquestion['pass_logic'].split('/');
            let countofpassvalue = Number(getpassvalue[0]) / Number(getpassvalue[1]);
            let getpassvaluefromquestions = mainquestion['questions'].filter(s => s.passvalue_boolean == true).length;
            let countofquestionpassvalue = getpassvaluefromquestions / Number(mainquestion['questions_to_display']);
            // console.log(countofquestionpassvalue >= countofpassvalue,countofquestionpassvalue,countofpassvalue)
            if (countofquestionpassvalue >= countofpassvalue) {
                console.log('pass');
                mainquestion['pass'] = true;
            }
            else {
                console.log('fail');
                mainquestion['pass'] = false;
            }
        }
        else {
            // if(this.score != 0) {
            //   this.score = this.score - 1;
            // }
            question['passvalue_boolean'] = false;
            let getpassvalue = mainquestion['pass_logic'].split('/');
            let countofpassvalue = Number(getpassvalue[0]) / Number(getpassvalue[1]);
            let getpassvaluefromquestions = mainquestion['questions'].filter(s => s.passvalue_boolean == true).length;
            let countofquestionpassvalue = getpassvaluefromquestions / Number(mainquestion['questions_to_display']);
            // console.log(countofquestionpassvalue >= countofpassvalue,countofquestionpassvalue,countofpassvalue)
            if (countofquestionpassvalue >= countofpassvalue) {
                // console.log('pass')
                mainquestion['pass'] = true;
            }
            else {
                // console.log('fail')
                mainquestion['pass'] = false;
            }
        }
        //  console.log(this.questions)
    }
};
AssementPerformanceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient }
];
AssementPerformanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-assement-performance",
        template: _raw_loader_assement_performance_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assement_performance_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssementPerformanceComponent);



/***/ }),

/***/ 3425:
/*!************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/assessment.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentPageModule": function() { return /* binding */ AssessmentPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _assessment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assessment.page */ 20683);
/* harmony import */ var _student_assessment_student_assessment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-assessment/student-assessment.component */ 18182);
/* harmony import */ var _assement_performance_assement_performance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assement-performance/assement-performance.component */ 82559);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);










const routes = [
    {
        path: '',
        component: _assessment_page__WEBPACK_IMPORTED_MODULE_0__.AssessmentPage
    },
    {
        path: 's-assessment',
        component: _student_assessment_student_assessment_component__WEBPACK_IMPORTED_MODULE_1__.StudentAssessmentComponent,
    },
    {
        path: 'student-performance',
        component: _assement_performance_assement_performance_component__WEBPACK_IMPORTED_MODULE_2__.AssementPerformanceComponent,
    }
];
let AssessmentPageModule = class AssessmentPageModule {
};
AssessmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        declarations: [_assessment_page__WEBPACK_IMPORTED_MODULE_0__.AssessmentPage,
            _student_assessment_student_assessment_component__WEBPACK_IMPORTED_MODULE_1__.StudentAssessmentComponent,
            _assement_performance_assement_performance_component__WEBPACK_IMPORTED_MODULE_2__.AssementPerformanceComponent],
        exports: [],
        entryComponents: []
    })
], AssessmentPageModule);



/***/ }),

/***/ 20683:
/*!**********************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/assessment.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentPage": function() { return /* binding */ AssessmentPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_assessment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assessment.page.html */ 10476);
/* harmony import */ var _assessment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assessment.page.scss */ 21295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);













let AssessmentPage = class AssessmentPage {
    /*-- Language Variables Ends --*/
    constructor(modalController, _storage, _router, apiService, _alertService, _translate, alertController, ionicStore, loading, toast) {
        this.modalController = modalController;
        this._storage = _storage;
        this._router = _router;
        this.apiService = apiService;
        this._alertService = _alertService;
        this._translate = _translate;
        this.alertController = alertController;
        this.ionicStore = ionicStore;
        this.loading = loading;
        this.toast = toast;
        this.termList = [{ id: 1, term: "Term 1" }, { id: 2, term: "Term 2" }, { id: 3, term: "Term 3" }];
        this.dummychapterList = [{ chapter_id: 1, chapter_name: "Numbers" }];
        this.topicList = [{ topic_id: 1, topic_name: "Place Value Chart" }];
        this.subtopicList = [{ subtopic_id: 1, subtopic_name: "Recap of successesor and Predecessor" }];
        this.chapterList = [];
        this.showUnit = false;
        this.btnDisabled = true;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.isMenuOpen = false;
        this.chapData = [];
        this.taxonObj = {};
        this.getTermList = () => {
            let records = {
                term: this.termList,
            };
            this.termList = records.term;
            let apiData = {
                pageNo: "9",
                pageName: "stu_Assessment_term",
                apiResponse: {
                    records: {
                        termList: this.termList,
                    },
                },
            };
            this.storeDetail.pages.pageData[8] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        };
        this.backPage = () => {
            if (Number(this.selectedClass) >= 1 && Number(this.selectedClass <= 2)) {
                debugger;
                let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
            }
            let isRegularTeacher = true;
            if (isRegularTeacher) {
                let value = Number(localStorage.getItem("assessment_section_status"));
                if (value == 0) {
                    // this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "0") } });
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                }
            }
            else {
                let value = Number(localStorage.getItem("assessment_section_status"));
                if (value == 0) {
                    // this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "0") } });
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                }
            }
        };
        this.goToStudentAssessmentPage = () => {
            if (this.selectedChptr != undefined || this.selectedChptr != null) {
                if (Number(this.selectedClass) >= 3 && Number(this.selectedClass <= 12)) {
                    this._router.navigate(["/tnvntabs/page-route/omr-random-student"]);
                }
                else {
                    debugger;
                    // this._router.navigate(["/tnvntabs/page-route/assessment/s-assessment"]);   
                    let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                    localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
                    this._router.navigate(["/tnvntabs/page-route/assessment/s-assessment"]);
                }
            }
            else {
                this.toast.presentToast('Please select chapter', 'error');
            }
            // if(Number(this.selectedClass) < 3 || 8 < (this.selectedClass)){      
            //   if(Number(this.selectedClass)>=3 && Number(this.selectedClass) <= 12){      
            //     this._router.navigate(["/tnvntabs/page-route/google-read-assessment"])
            //     this._router.navigate(["/tnvntabs/page-route/notebook"]) 
            //   }
            //   else{        
            //     this._router.navigate(["/tnvntabs/page-route/hodinspection"]) 
            //   }
            // }    
            // else{
            //   this._router.navigate(["/tnvntabs/page-route/omr-random-student"]);
            // }
        };
    }
    ngOnInit() {
        this.loading.present();
        this.ionicStore.getStoreData().then((response) => {
            this.loading.dismiss();
            this.storeDetail = response;
            if (this.storeDetail == null || this.storeDetail == undefined) {
                this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
            }
            this.classDetail = this.storeDetail.pages.pageData[5].pageDetails;
            this.selectedClass = this.classDetail.selectedClass.class_id;
            if (Number(this.selectedClass) < 1 || Number(this.selectedClass) > 12) {
                this.showAlert();
            }
            this.selectedSection = this.classDetail.section;
            this.storeDetail.pages.currentPage = "stu_Assessment_term";
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            if (this.storeDetail.pages.pageData[8] == undefined || this.storeDetail.pages.pageData[8] == null) {
                this.getTermList();
                let pageDetails = {
                    subject: this.classDetail.subjectInfo.subject,
                    term: this.selectedTerm,
                };
                this.storeDetail.pages.pageData[8]["pageDetails"] = pageDetails;
                this.storeDetail.pages.currentProgress = this.progressValue;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            }
            else {
                if (this.storeDetail.pages.pageData[8].apiResponse.records
                    .chapterList != undefined) {
                    this.chapterList = this.storeDetail.pages.pageData[8].apiResponse.records.chapterList;
                }
                if (this.storeDetail.pages.pageData[8].correctedDetails != undefined) {
                    this.selectedTerm = this.storeDetail.pages.pageData[8].correctedDetails.term_id;
                    this.selectedChapter = this.storeDetail.pages.pageData[8].correctedDetails.chapter_id;
                    this.unitInfo = this.storeDetail.pages.pageData[8].correctedDetails.unitInfo;
                    this.showUnit = this.storeDetail.pages.pageData[8].correctedDetails.showUnit;
                    this.btnDisabled = false;
                }
                else {
                }
            }
        });
        this.taxonObj = JSON.parse(localStorage.getItem('taxonObj'));
        this.progressValue = Math.round(((7 - 2) / 12) * 100);
        this.appLanguage();
        this.classDetail = localStorage.getItem("classInfo");
        this.classDetail = this.classDetail.replace(/'/g, '"');
        this.classDetail = JSON.parse(this.classDetail);
        this.ionicStore.getOffStorage().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.masterApiResponse = response;
            this.masterApiResponse.StuAssQuestion = response.StuAssQuestion;
            this.masterApiResponse.OmrQuestionsData = response.OmrQuestionsData;
            console.log(this.masterApiResponse.OmrQuestionsData, 'this.masterApiResponse.OmrQuestionsData');
            if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
            }
            this.chapterWiseData();
        }));
    }
    chapterWiseData() {
        debugger;
        console.log('aiuhbdibqbdiub', this.masterApiResponse.StuAssQuestion);
        if (this.masterApiResponse.StuAssQuestion != undefined || this.masterApiResponse.StuAssQuestion != null) {
            this.chapData = this.masterApiResponse.StuAssQuestion.filter(obj => obj.subject_id == this.taxonObj.subject && obj.class_studying_id == this.taxonObj.classId && obj.medium_id == this.taxonObj.mediumId);
            console.log(this.chapData, 'chapDatachapData');
        }
        else {
            this.showImageAlert();
        }
    }
    chapterSelectHandler(event) {
        debugger;
        if (event.target.value != undefined) {
            console.log(event.target.value.taxonomy_ids);
            const getRanArr = new Promise((resolve, reject) => {
                let arrLength = event.target.value.taxonomy_ids;
                let randomArr = [];
                for (var i = 0; i < 2; i++) {
                    let random = Math.floor(Math.random() * arrLength.length);
                    randomArr.push(arrLength[random]);
                    arrLength.splice(random, 1);
                }
                // const random = Math.floor(Math.random() * arrLength.length);
                // const randomArr = []
                // randomArr.push(arrLength[random])
                // if(random == arrLength.length){
                //   randomArr.push(arrLength[random-1])
                // }
                // else{
                //   randomArr.push(arrLength[random+1])
                // }
                console.log(randomArr, 'randomArr');
                resolve(randomArr);
            });
            getRanArr.then((res) => {
                const getRanArr2 = new Promise((resolve, reject) => {
                    let filterTaxonomys = this.masterApiResponse.OmrQuestionsData.filter(obj => obj.subject == this.taxonObj.subject && obj.class == this.taxonObj.classId && obj.medium == this.taxonObj.mediumId && (obj.taxonomy_id == res[0] || obj.taxonomy_id == res[1]));
                    console.log(filterTaxonomys, 'filterTaxonomys');
                    resolve(filterTaxonomys);
                });
                getRanArr2.then((res2) => {
                    console.log(res2, 'filterTaxonomys');
                    this.masterApiResponse.OmrRandomQues = [];
                    let cunt = res2.length - 1;
                    if (res2.length >= 2) {
                        for (var i = 0; i < 2; i++) {
                            let index = Math.floor(Math.random() * res2.length);
                            this.masterApiResponse.OmrRandomQues.push(res2[index]);
                            res2.splice(index, 1);
                        }
                        // const randomnum = Math.floor(Math.random() * res2.length);
                        // this.masterApiResponse.OmrRandomQues.push(res2[randomnum])
                        // if(randomnum < cunt){
                        //   this.masterApiResponse.OmrRandomQues.push(res2[randomnum+1])
                        // }
                        // else{
                        //   this.masterApiResponse.OmrRandomQues.push(res2[randomnum-1])
                        // }
                    }
                    this.ionicStore.setOffStorage(this.masterApiResponse);
                    console.log(this.masterApiResponse, 'this.masterApiResponse.OmrRandomQues');
                });
            });
            // setTimeout(() => {
            //   let sdfsdf = this.masterApiResponse.OmrQuestionsData.filter(obj => obj.subject == this.taxonObj.subject && obj.class == this.taxonObj.classId && obj.medium == this.taxonObj.mediumId)
            //   console.log(sdfsdf, 'sdfsdf')
            //   setTimeout(() => {
            //     let filterTaxonomys = sdfsdf.filter(obj => obj.taxonomy_id == randomArr[0] || obj.taxonomy_id == randomArr[1])
            //     if(filterTaxonomys.length >= 2){
            //       console.log(filterTaxonomys, 'filterTaxonomys')
            //       this.masterApiResponse.OmrRandomQues = []
            //       const randomnum = Math.floor(Math.random() * filterTaxonomys.length);
            //       this.masterApiResponse.OmrRandomQues.push(filterTaxonomys[randomnum])
            //       if(randomnum == filterTaxonomys.length){
            //         this.masterApiResponse.OmrRandomQues.push(filterTaxonomys[randomnum-1])
            //       }
            //       else{
            //         this.masterApiResponse.OmrRandomQues.push(filterTaxonomys[randomnum+1])
            //       }
            //       this.ionicStore.setOffStorage(this.masterApiResponse);
            //       console.log(this.masterApiResponse,'this.masterApiResponse.OmrRandomQues');
            //     }
            //     else{
            //       this.toast.presentToast('Please reselect this chapter', 'error');
            //     }
            //   }, 1000);
            // }, 500);
            // debugger
            // console.log('term1111111111',this.checkedChapter.chapter_name);
            // console.log('termddddd',this.chapterData.chapterDataList);
            // let gettax=[]
            //  gettax=this.chapterData.chapterDataList.filter((mf)=>mf.chapter_name==this.checkedChapter.chapter_name).map(role => role.taxonomy_id);
            // console.log(gettax,"ffffffffffffffff");
            // this.saveData = false;
        }
    }
    showImageAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "This is an alert!",
                cssClass: "my-custom-class",
                subHeader: 'No Chapter Available',
                buttons: [
                    {
                        text: "Ok",
                        cssClass: "cancel_click",
                        handler: () => {
                            if (this.selectedClass >= 1 && this.selectedClass <= 12) {
                                // this._router.navigate(["/tnvntabs/page-route/google-read-assessment"])
                                // this._router.navigate(["/tnvntabs/page-route/notebook"])
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                            }
                            else if (this.selectedClass < 3 || this.selectedClass <= 12) {
                                // this._router.navigate(["/tnvntabs/page-route/notebook"])
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/hodinspection"])
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                            }
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    showAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "",
                cssClass: "my-custom-class",
                message: "No Questions available",
                backdropDismiss: false,
                buttons: [{
                        text: "ok",
                        handler: () => {
                            if (this.selectedClass >= 1 && this.selectedClass <= 12) {
                                // this._router.navigate(["/tnvntabs/page-route/google-read-assessment"])
                                // this._router.navigate(["/tnvntabs/page-route/notebook"]) 
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                            }
                            else if (this.selectedClass < 3 || this.selectedClass <= 12) {
                                // this._router.navigate(["/tnvntabs/page-route/notebook"]) 
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/hodinspection"]) 
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                            }
                        }
                    }],
            });
            yield alert.present();
        });
    }
    appLanguage() {
        this.apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("studentAsessment").subscribe((res) => {
            this.studentAsessment = res;
        });
        this._translate.get("assessment_Info").subscribe((res) => {
            this.assessment_Info = res;
        });
        this._translate.get("proceedAssess").subscribe((res) => {
            this.proceedAssess = res;
        });
        this._translate.get("standard").subscribe((res) => {
            this.standard = res;
        });
        this._translate.get("subject").subscribe((res) => {
            this.subject = res;
        });
        this._translate.get("selectTerm").subscribe((res) => {
            this.selectTerm = res;
        });
        this._translate.get("SelectChapter").subscribe((res) => {
            this.SelectChapter = res;
        });
        this._translate.get("SelectTopic").subscribe((res) => {
            this.SelectTopic = res;
        });
        this._translate.get("SelectSubTopic").subscribe((res) => {
            this.SelectSubTopic = res;
        });
        this._translate.get("SelectUnit").subscribe((res) => {
            this.SelectUnit = res;
        });
        this._translate.get("testingStudents").subscribe((res) => {
            this.testingStudents = res;
        });
        this._translate.get("noUnit").subscribe((res) => {
            this.noUnit = res;
        });
        this._translate.get("Unit").subscribe((res) => {
            this.Unit = res;
        });
        this._translate.get("learningOutcome").subscribe((res) => {
            this.learningOutcome = res;
        });
        this._translate.get("noQuestions").subscribe((res) => {
            this.noQuestions = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("save").subscribe((res) => {
            this.save = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
    }
    ScanOmr() {
        this._router.navigate(["/tnvntabs/page-route/omr-random-student"]);
    }
    toggleAccordion(i) {
        this.isMenuOpen = !this.isMenuOpen;
        this.itemIndex = i;
    }
    broadcastName(name) {
        this.change.emit(name);
    }
    mySelectHandlerChapter(selectedValue) {
        this.selectedChapter = selectedValue;
        let chapterDetail = {
            chapter_id: selectedValue,
        };
        let allChaptersList = this.masterApiResponse.learning_outcome;
        let allAssessmentQuestions = this.masterApiResponse
            .questions_ans;
        let selectedAssessementQuestions = [];
        let optionList = [];
        let termChapterList = allChaptersList.filter((data) => data.chapter_id == chapterDetail.chapter_id);
        let tempLearningOutcome = termChapterList[Math.floor(Math.random() * termChapterList.length)];
        selectedAssessementQuestions = allAssessmentQuestions.filter((data) => data.lo_id == tempLearningOutcome.lo_id);
        if (!selectedAssessementQuestions.length) {
            this._alertService.showAlert(this.noQuestions);
        }
        Object.entries(tempLearningOutcome).forEach(([key, value]) => {
            let keyName = key.split("_", 1);
            if (keyName.toString() == "option") {
                let keyid = key.split("_")[1];
                let optionData = {
                    id: keyid,
                    option: value,
                };
                optionList.push(optionData);
            }
        });
        Object.entries(tempLearningOutcome).forEach(([key, value]) => {
            let keyName = key.split("_", 1);
            if (keyName.toString() == "grade") {
                let keyid = key.split("_")[2];
                optionList.forEach((data) => {
                    let optionData = data;
                    if (optionData.id == keyid) {
                        data["grade"] = value;
                    }
                });
            }
        });
        let records = {
            chapter_no: tempLearningOutcome.chapter_no,
            learning_outcome: tempLearningOutcome.lo_name,
            learning_outcome_id: tempLearningOutcome.lo_id,
            options: optionList,
            no_of_random_qus: tempLearningOutcome.no_of_random_qus,
            questions: selectedAssessementQuestions,
        };
        this.unitInfo = records;
        localStorage.setItem("chapterId", selectedValue);
        this.showUnit = true;
        if (selectedAssessementQuestions.length) {
            this.btnDisabled = false;
        }
        else {
            this.btnDisabled = false;
        }
        let correctedDetails = {
            term_id: this.selectedTerm,
            chapter_id: selectedValue,
            unitInfo: this.unitInfo,
            showUnit: true,
        };
        this.storeDetail.pages.pageData[8]["correctedDetails"] = correctedDetails;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
    }
    mySelectHandler(selectedValue) {
        this.selectedTerm = selectedValue.target.value;
        let mediumIds = this.classDetail.mediumInfo.map((el) => {
            return el.medium_id;
        });
        let termInfo = {
            class_id: this.classDetail.selectedClass.class_id,
            term_id: selectedValue.target.value,
            medium_id: mediumIds,
            subject_id: this.classDetail.subjectInfo.subject_id,
        };
        let allChapterList = this.masterApiResponse.chapters;
        let tempChapterList = [];
        if (termInfo.subject_id == "7") {
            termInfo.subject_id = "1";
        }
        if (termInfo.subject_id == "2") {
            termInfo.subject_id = "8";
        }
        allChapterList.forEach((data) => {
            if (Number(data.class) == Number(termInfo.class_id) &&
                Number(data.subject_id) == Number(termInfo.subject_id) &&
                Number(data.term) == Number(termInfo.term_id) &&
                termInfo.medium_id.includes(data.medium_id)) {
                tempChapterList.push(data);
            }
        });
        let records = {
            chapters: tempChapterList,
        };
        this.chapterList = records.chapters;
        this.storeDetail.pages.pageData[8].apiResponse.records["chapterList"] = this.chapterList;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
    }
};
AssessmentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService }
];
AssessmentPage.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
AssessmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-assessment",
        template: _raw_loader_assessment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assessment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssessmentPage);



/***/ }),

/***/ 18182:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/student-assessment/student-assessment.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentAssessmentComponent": function() { return /* binding */ StudentAssessmentComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-assessment.component.html */ 17303);
/* harmony import */ var _student_assessment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-assessment.component.scss */ 39524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/post.service */ 62538);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/assessmentmodal/assessmentmodal.component */ 40036);













let StudentAssessmentComponent = class StudentAssessmentComponent {
    constructor(modalController, _apiService, _router, _postService, _alertService, loading, ionicStore, _translate) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._router = _router;
        this._postService = _postService;
        this._alertService = _alertService;
        this.loading = loading;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.attendanceList = [];
        this.randomStudentList = [];
        this.reasonList = [];
        this.mediumInfoList = [];
        this.studentReasons = [];
        this.getStudentAttendanceList = (classMedium, schoolId) => {
            classMedium["school_id"] = schoolId;
            let tempStudents = [];
            if (this.storeDetail.pages.pageData[5].pageDetails.section) {
                tempStudents = this.storeDetail.pages.pageData[6].correctedDetails.filter((data) => data.status == 'active');
            }
            else {
                tempStudents = this.storeDetail.pages.pageData[6].apiResponse.records.attendanceList.filter((data) => data.class_studying_id == classMedium.class_id);
                tempStudents = tempStudents.filter((data) => data.status == 'active');
            }
            let records = {
                all: tempStudents,
            };
            this.attendanceList = records.all;
            let tempAttendanceList = JSON.parse(JSON.stringify(records.all));
            let i;
            for (i = 0; i < 5; i++) {
                if (this.attendanceList.length) {
                    let idx;
                    idx = Math.floor(Math.random() * this.attendanceList.length);
                    this.randomStudentList.push(this.attendanceList[idx]);
                    this.randomStudentList[i]["accessed"] = "none";
                    this.attendanceList.splice(idx, 1);
                }
            }
            this.loading.dismiss();
            let apiData = {
                pageNo: "10",
                pageName: "stu_Assessment_accessed",
                apiResponse: {
                    records: {
                        attendanceList: tempAttendanceList,
                    },
                },
                correctedDetails: {
                    studentList: this.randomStudentList,
                },
            };
            this.storeDetail.pages.pageData[9] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            this.getAssesmentReasons();
        };
    }
    ngOnInit() {
        this.progressValue = Math.round(((8 - 2) / 12) * 100);
        this.appLanguage();
        this.classMedium = localStorage.getItem("classInfo");
        this.classMedium = JSON.parse(this.classMedium);
        this.schoolInfo = localStorage.getItem("schoolInfo");
        this.schoolInfo = JSON.parse(this.schoolInfo);
        this.ionicStore.getOffStorage().then((response) => {
            this.masterApiResponse = response;
            this.ionicStore.getStoreData().then((response) => {
                this.storeDetail = response;
                this.storeDetail.pages.currentPage = "stu_Assessment_accessed";
                this.ionicStore.setStoreData(this.storeDetail);
                this.mediumInfoList = this.storeDetail.pages.pageData[5].apiResponse.records.medium_info;
                if (this.storeDetail.pages.pageData[9] == undefined || this.storeDetail.pages.pageData[9] == null) {
                    this.getStudentAttendanceList(this.classMedium, this.schoolInfo.schoolId);
                }
                else {
                    let apiData = this.storeDetail.pages.pageData[9].apiResponse.records;
                    let correctedInfo = this.storeDetail.pages.pageData[9]
                        .correctedDetails;
                    this.reasonList = apiData.stu_reasonList;
                    this.randomStudentList = correctedInfo.studentList;
                    let get_randomStudentList = JSON.parse(localStorage.getItem('randomStudentList'));
                    if (get_randomStudentList.length == 0) {
                        this.randomStudentList = correctedInfo.studentList;
                    }
                }
                let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                if (stu_Assessment_Result == null || stu_Assessment_Result == undefined) {
                    let apiData = {
                        pageNo: "21",
                        pageName: "stu_Assessment_Result",
                        correctedDetails: {
                            assessed_StuList: [],
                            Not_assessed_StuList: []
                        },
                    };
                    localStorage.setItem('stu_Assessment_Result', JSON.stringify(apiData));
                }
            });
        });
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("studentAsessment").subscribe((res) => {
            this.studentAsessment = res;
        });
        this._translate.get("access_Info").subscribe((res) => {
            this.access_Info = res;
        });
        this._translate.get("canAssessed").subscribe((res) => {
            this.canAssessed = res;
        });
        this._translate.get("ReasonAssessing").subscribe((res) => {
            this.ReasonAssessing = res;
        });
        this._translate.get("yes").subscribe((res) => {
            this.yes = res;
        });
        this._translate.get("no").subscribe((res) => {
            this.no = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
    }
    openAssessmentModal(viewInfo, status, studentDetail, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_7__.AssessmentmodalComponent,
                componentProps: {
                    viewName: viewInfo,
                    studentDetail: studentDetail,
                    reasonList: this.reasonList,
                    mediumList: this.mediumInfoList,
                },
                backdropDismiss: false,
                cssClass: viewInfo == "view1"
                    ? "my-custom-modal-s_assessment"
                    : "my-custom-modal-assessment",
            });
            modal.onDidDismiss().then((response) => {
                if (response.data != "Cancel" && viewInfo == "view1") {
                    const found = this.studentReasons.filter((data) => data.student_emisid == response.data.student_emisid &&
                        data.reason == response.data.reason);
                    if (!this.studentReasons.length) {
                        this.studentReasons.push(response.data);
                    }
                    else {
                        let studentIds = this.studentReasons.map((el) => {
                            return el.student_emisid;
                        });
                        if (!studentIds.includes(response.data.student_emisid)) {
                            this.studentReasons.push(response.data);
                        }
                        else {
                            const found = this.studentReasons.find((data) => data.student_emisid == response.data.student_emisid);
                            if (found.reason != response.data.reason) {
                                const findIndex = this.studentReasons.indexOf(found);
                                this.studentReasons.splice(findIndex, 1);
                                this.studentReasons.push(response.data);
                            }
                        }
                    }
                    let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
                    stu_Assessment_Result.correctedDetails.Not_assessed_StuList = this.studentReasons;
                    stu_Assessment_Result.correctedDetails.Not_assessed_StuList = stu_Assessment_Result.correctedDetails.Not_assessed_StuList.filter((test, index, array) => index == array.findIndex((findTest) => findTest.student_emisid == test.student_emisid));
                    localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
                    this.addnewRandom(status, index, studentDetail);
                }
                else if (response.data != "Cancel" && viewInfo == "view2") {
                    this.addnewRandom(status, index, studentDetail);
                }
            });
            if (viewInfo == "view1") {
                return yield modal.present();
            }
            else {
                this.addnewRandom(status, index, studentDetail);
            }
        });
    }
    getAssesmentReasons() {
        let stu_reasons = this.masterApiResponse.student_reasons;
        let records = {
            student_reasons: stu_reasons,
        };
        this.reasonList = records.student_reasons;
        this.storeDetail.pages.pageData[9].apiResponse.records["stu_reasonList"] = this.reasonList;
        this.ionicStore.setStoreData(this.storeDetail);
    }
    addnewRandom(status, index, studentDetail) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let statusType = status;
            if (statusType == "no") {
                this.randomStudentList[index].accessed = "no";
                if (this.attendanceList.length) {
                    const item = this.attendanceList[Math.floor(Math.random() * this.attendanceList.length)];
                    this.randomStudentList.push(item);
                    this.attendanceList.splice(this.attendanceList.indexOf(item), 1);
                    studentDetail.addedStudent = item;
                }
            }
            else {
                this.randomStudentList[index].accessed = "yes";
                if (this.randomStudentList.length > 5 && studentDetail.addedStudent) {
                    this.randomStudentList.splice(this.randomStudentList.indexOf(studentDetail.addedStudent), 1);
                }
            }
        });
    }
    goBack() {
        let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
        localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
        this._router.navigate(["/tnvntabs/page-route/assessment"]);
    }
    goToStudentPerformance() {
        debugger;
        let stu_Assessment_Result = JSON.parse(localStorage.getItem('stu_Assessment_Result'));
        localStorage.setItem('stu_Assessment_Result', JSON.stringify(stu_Assessment_Result));
        let pageDetails = {
            studentReasonList: this.studentReasons,
        };
        console.log(pageDetails, 'hbdjbddbdbdb');
        if (this.storeDetail.pages.pageData[9] != undefined) {
            this.storeDetail.pages.pageData[9]["pageDetails"] = pageDetails;
            this.storeDetail.pages.pageData[9].correctedDetails.studentList = this.randomStudentList;
        }
        this.storeDetail.pages.currentProgress = this.progressValue;
        this.ionicStore.setStoreData(this.storeDetail);
        if (this.storeDetail.pages.pageData[10] != undefined) {
            let questionAccessedStudents = this.storeDetail.pages.pageData[10].apiResponse.records.accessedStudents.map((el) => {
                return el.id;
            });
            let currentAccessedStudents = this.storeDetail.pages.pageData[9].correctedDetails.studentList.map((el) => {
                return el.id;
            });
            if (JSON.stringify(questionAccessedStudents) !=
                JSON.stringify(currentAccessedStudents)) {
                this.storeDetail.pages.pageData.splice(8);
                this.ionicStore.setStoreData(this.storeDetail);
            }
        }
        const accessedStudents = this.randomStudentList.filter((data) => data.accessed == "none" || !data.accessed);
        console.log(accessedStudents, 'accessedStudents');
        if (accessedStudents.length > 0) {
            this._alertService.showAlert("Please Select Students");
        }
        else {
            this._router.navigate(["/tnvntabs/page-route/assessment/student-performance"]);
        }
    }
};
StudentAssessmentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService }
];
StudentAssessmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-student-assessment",
        template: _raw_loader_student_assessment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_assessment_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentAssessmentComponent);



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

/***/ 18732:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/assement-performance/assement-performance.component.scss ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\n  display: block;\n}\n\n.inactive {\n  display: none;\n}\n\n.header-accordion {\n  margin: 0;\n  background: #F2C94C;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 23px;\n  /* identical to box height */\n  color: #FFFFFF;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n\n.questionnumber {\n  color: #2176b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2VtZW50LXBlcmZvcm1hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVDO0VBQ0csYUFBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtFQUNBLG1CQUFBO0VBQ0osa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUE7O0FBQUE7RUFDSSx5Q0FBQTtBQUdKOztBQURBO0VBQ0kscUNBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7QUFJSiIsImZpbGUiOiJhc3NlbWVudC1wZXJmb3JtYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxuIH1cclxuXHJcbiAuaW5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuLmhlYWRlci1hY2NvcmRpb257XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjJDOTRDO1xyXG5mb250LWZhbWlseTogQXJpYWw7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMThweDtcclxubGluZS1oZWlnaHQ6IDIzcHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbmNvbG9yOiAjRkZGRkZGO1xyXG5oZWlnaHQ6IDM1cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTZkZWVkICFpbXBvcnRhbnQ7ICBcclxuICB9XHJcbi5iZy10cmFuc3BhcmVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcblxyXG4ucXVlc3Rpb25udW1iZXJ7XHJcbiAgICBjb2xvcjogIzIxNzZiOTtcclxufSJdfQ== */");

/***/ }),

/***/ 21295:
/*!************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/assessment.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.icon-check {\n  padding: 0px 100px 0px 100px;\n}\n.icon-success {\n  color: green;\n  font-size: 32px;\n}\n.icon-danger {\n  color: red;\n  font-size: 32px;\n}\n.radio-toggle {\n  display: flex;\n  justify-content: space-between;\n}\nion-item {\n  --background:transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2Vzc21lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDOztvQkFBQTtBQVVBO0VBQ0QsNEJBQUE7QUFOQTtBQVFDO0VBQ0csWUFBQTtFQUNBLGVBQUE7QUFMSjtBQU9DO0VBQ0csVUFBQTtFQUNBLGVBQUE7QUFKSjtBQVFDO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBTEg7QUFRQTtFQUNHLG1DQUFBO0FBTEgiLCJmaWxlIjoiYXNzZXNzbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogRm9sbG93aW5nIGNsYXNzZXMgZGlzcGxheS9oaWRlIHRoZSAnbWVudSdcclxuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxyXG4gLy8gY29tcG9uZW50IGNsYXNzICovXHJcbi8vICAuc2VsZWN0X2JveHtcclxuLy8gICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyB9XHJcbi8vIHNlbGVjdCBvcHRpb257XHJcbi8vICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gfVxyXG5cclxuIC5pY29uLWNoZWNre1xyXG5wYWRkaW5nOjBweCAxMDBweCAwcHggMTAwcHg7ICAgIFxyXG4gfVxyXG4gLmljb24tc3VjY2Vzc3tcclxuICAgIGNvbG9yOmdyZWVuIDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuIH1cclxuIC5pY29uLWRhbmdlcntcclxuICAgIGNvbG9yOnJlZCA7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiB9XHJcblxyXG5cclxuIC5yYWRpby10b2dnbGV7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4gXHJcbmlvbi1pdGVte1xyXG4gICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 39524:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/student-assessment/student-assessment.component.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sc-ion-label-md-h {\n  padding-left: 1rem;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.background {\n  background-color: #e6deed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtYXNzZXNzbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5Q0FBQTtBQUVGOztBQUFBO0VBQ0Usb0NBQUE7QUFHRiIsImZpbGUiOiJzdHVkZW50LWFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlNmRlZWQgIWltcG9ydGFudDsgIFxyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmRlZWQgIWltcG9ydGFudFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 72712:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/assement-performance/assement-performance.component.html ***!
  \**************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title\r\n            class=\"ion-text-center fs-15\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n            ><b>{{ this.studentAsessment }}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-text color=\"dark\">\r\n    <div class=\"\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"mb-0 color-lgrey\">\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                this.grade\r\n              }}</span>\r\n              : <b>{{ classInfo?.class_id }}</b>\r\n            </p>\r\n          </ion-col>\r\n          <ion-col>\r\n            <p class=\"mb-0 color-lgrey\">\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                this.subject\r\n              }}</span>\r\n              : <b>{{ classInfo?.subjectInfo.subject }}</b>\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div>\r\n      <p class=\"fs-12 pl-1 mb-0 color-lgrey\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.learningOutcome\r\n        }}</span>\r\n        : <b>{{ learningOutcomeData?.learning_outcome }}</b>\r\n      </p>\r\n    </div>\r\n  </ion-text>\r\n\r\n  <div *ngIf=\"pageName == 'page1'\">\r\n    <div *ngFor=\"let item of tempStudentList; let i = index\" class=\"mb-1\">\r\n      <h5\r\n        class=\"text-center header-accordion\"\r\n        (click)=\"rearrangeStudent(item, i)\"\r\n        [style.background]=\"item.backgroundColor\"\r\n      >\r\n        {{ item.name }}        \r\n      </h5>\r\n      <div [ngClass]=\"this.itemIndex == i ? 'active' : 'inactive'\">\r\n        <p class=\"text-italic px-3\">\r\n          Was the student able to respond to your question?\r\n        </p>\r\n        <div class=\"d-flex justify-content-around icon-check\">\r\n          <ion-icon name=\"checkmark\" class=\"icon-success\"></ion-icon>\r\n          <ion-icon name=\"close\" class=\"icon-danger\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"pageName == 'page2'\">\r\n    <h5 class=\"text-center header-accordion\" [style.background]=\"studentData?.backgroundColor\">\r\n      <b>{{ studentData?.student_name }}</b>\r\n    </h5>\r\n    <!-- <div>\r\n      <section class=\"p-4 list-ques\" [style.background]=\"studentData?.contentColor\">\r\n        <p *ngFor=\"let questionData of studentData.questions; let i = index\">\r\n          Q{{ i + 1 }} :{{ questionData.question }}\r\n        </p>\r\n        <ion-list lines=\"none\" class=\"bg-transparent\">\r\n          <ion-radio-group [(ngModel)]=\"studentData.ans\">\r\n            <ng-container\r\n              *ngFor=\"let optionData of studentData.options; let i = index\"\r\n            >\r\n              <ion-item class=\"bg-transparent\" *ngIf=\"optionData.option\">\r\n                <ion-label class=\"text-wrap\">\r\n                  {{ optionData.option }}</ion-label\r\n                >\r\n                <ion-radio\r\n                  slot=\"start\"\r\n                  color=\"favorite\"\r\n                  value=\"{{ optionData.option }}\"\r\n                  (click)=\"\r\n                    selectedAnswer(optionData.option, optionData.grade)\r\n                  \"\r\n                ></ion-radio>\r\n              </ion-item>\r\n            </ng-container>\r\n          </ion-radio-group>\r\n        </ion-list>\r\n        <p\r\n          class=\"text-center text-primary\"\r\n          (click)=\"openAssessmentModal('refer')\"\r\n          [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n        >\r\n          {{ this.referAnswer }}\r\n        </p>\r\n      </section>\r\n    </div> -->\r\n\r\n    <!-- <div>\r\n      <ion-card *ngFor=\"let item of studentData.questions; let i = index\">\r\n            <div *ngIf=\"item.question_type == 'direct'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span><span\r\n                      innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        {{data.option_1}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        {{data.option_2}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        {{data.option_3}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        {{data.option_4}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'Image Based Question'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div *ngFor=\"let data of item.questions| baselineQuestionFilter:item.questions_to_display; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                    <ion-item class=\"marginTop\"><img (click)=\"openViewer(live_img_url,data.question)\"\r\n                        src=\"{{live_img_url}}{{data.question}}\" alt=\"No Image Available\"\r\n                        style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        {{data.option_1}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        {{data.option_2}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        {{data.option_3}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        {{data.option_4}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'images_based_answer'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span><span\r\n                      innerHTML=\"{{data.question}}\"></span> </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item style=\"width: 70%;\">\r\n                          <img (click)=\"openViewer(live_img_url,data.option_1)\" src=\"{{live_img_url}}{{data.option_1}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n                      </ion-item>\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"><img (click)=\"openViewer(live_img_url,data.option_2)\"\r\n                            src=\"{{live_img_url}}{{data.option_2}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item style=\"width: 70%;\">\r\n                          <img (click)=\"openViewer(live_img_url,data.option_3)\" src=\"{{live_img_url}}{{data.option_3}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"><img (click)=\"openViewer(live_img_url,data.option_4)\"\r\n                            src=\"{{live_img_url}}{{data.option_4}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'image_based_qa'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}). </span>\r\n                    <ion-item class=\"marginTop\"><img (click)=\"openViewer(live_img_url,data.question)\"\r\n                        src=\"{{live_img_url}}{{data.question}}\" alt=\"No Image Available\"\r\n                        style=\"width: 65%;\" /></ion-item></ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"> <img (click)=\"openViewer(live_img_url,data.option_1)\"\r\n                            src=\"{{live_img_url}}{{data.option_1}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        <ion-item><ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio></ion-item>\r\n                        <ion-item style=\"width: 70%;\"><img (click)=\"openViewer(live_img_url,data.option_2)\"\r\n                            src=\"{{live_img_url}}{{data.option_2}}\" alt=\"No Image Available\"\r\n                            style=\"width: 65%;\" /></ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                          <img (click)=\"openViewer(live_img_url,data.option_3)\" src=\"{{live_img_url}}{{data.option_3}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        <ion-item>\r\n                          <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                        </ion-item>\r\n                        <ion-item style=\"width: 70%;\">\r\n                          <img (click)=\"openViewer(live_img_url,data.option_4)\" src=\"{{live_img_url}}{{data.option_4}}\"\r\n                            alt=\"No Image Available\" style=\"width: 65%;\" />\r\n                        </ion-item>\r\n\r\n\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div *ngIf=\"item.question_type == 'audia_based_question'\">\r\n              <ion-card-header>\r\n                <ion-card-title><span class=\"questionnumber\">Q{{i+1}}. </span> <span\r\n                    innerHTML=\"{{item.question_title}}\"></span></ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <div\r\n                *ngFor=\"let data of item.questions; let j = index\">\r\n                <audio controls=\"false\">\r\n                  <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n                  Your browser does not support the audio element.\r\n                </audio>\r\n\r\n\r\n                <ion-card-header>\r\n                  <ion-card-title><span class=\"questionnumber\">Q{{i+1}}({{j}}).</span><audio controls=\"false\">\r\n                      <source src=\"{{live_img_url}}{{data.question}}\" type=\"audio/mp3\">\r\n                      Your browser does not support the audio element.\r\n                    </audio>\r\n                  </ion-card-title>\r\n                </ion-card-header>\r\n\r\n                <ion-card-content>\r\n                  <ion-list>\r\n                    <ion-radio-group (ionChange)=\"checkPassValue($event.target,data,item)\"\r\n                      [value]=\"data.selected_option\">\r\n                      <ion-item *ngIf=\"data.option_1\" class=\"marginTop\">\r\n                        {{data.option_1}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_1}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_2\" class=\"marginTop\">\r\n                        {{data.option_2}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_2}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_3\" class=\"marginTop\">\r\n                        {{data.option_3}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_3}}\"></ion-radio>\r\n                      </ion-item>\r\n\r\n                      <ion-item *ngIf=\"data.option_4\" class=\"marginTop\">\r\n                        {{data.option_4}}\r\n                        <ion-radio slot=\"start\" value=\"{{data.option_4}}\"></ion-radio>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n\r\n\r\n\r\n                </ion-card-content>\r\n\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n      </ion-card>\r\n    </div> -->\r\n\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"moveBack()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button\r\n        class=\"btn-next\"\r\n        [ngClass]=\"displayBtn != 'NEXT' ? 'submit' : ''\"\r\n        (click)=\"moveNext(studentData)\"\r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{\r\n            displayBtn == \"NEXT\" ? this.next : this.submitAssessement\r\n          }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 10476:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/assessment.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{this.studentAsessment}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>                   \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n  <div class=\"content-wrapper\">    \r\n    <h5 class=\"color-dgrey\">\r\n      <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n        >{{this.proceedAssess}}</span\r\n      >:\r\n      <b\r\n        ><span\r\n          [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n          >{{this.standard}}</span\r\n        >\r\n        {{selectedClass}} {{selectedSection}}</b\r\n      >\r\n    </h5>\r\n    <h5 class=\"color-dgrey\">\r\n      <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n        >{{subject}}</span\r\n      >: <b>{{classDetail?.subjectInfo.subject}}</b>\r\n    </h5>\r\n    <div >\r\n      <h5 class=\"color-dgrey\" style=\"margin-top: 2rem;\">\r\n        <span [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">Select Chapter:</span>\r\n      </h5>\r\n      <ion-item>\r\n        <ion-select placeholder=\"Select Completed Chapter\" style=\"min-width: 100%;\" [(ngModel)]=\"selectedChptr\" (ionChange)=\"chapterSelectHandler($event)\">\r\n          <ion-select-option [value]=\"item\" *ngFor=\"let item of chapData\">{{item.chapter_name}}</ion-select-option>\r\n          <ion-label *ngIf=\"chapData == '' || chapData.length == 0\">No Data Found</ion-label>\r\n        </ion-select>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n          >{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>      \r\n      <ion-tab-button\r\n        class=\"btn-next\"\r\n        \r\n        (click)=\"goToStudentAssessmentPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\"\r\n          >{{this.save}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 17303:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/student-assessment/student-assessment.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{this.studentAsessment}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>                \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\">\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-row\r\n    *ngFor=\"let randomStudent of randomStudentList; let i = index\"\r\n    class=\"mt-2\"\r\n    [ngClass]=\"\r\n      randomStudent.accessed == 'yes'\r\n        ? 'color-lgreen'\r\n        : randomStudent.accessed == 'no'\r\n        ? 'color-lpink'\r\n        : 'bg-grey '\r\n    \"\r\n  >\r\n    <ion-col [size]=\"8\">\r\n      <ion-label>\r\n        <b [ngClass]=\"{ 'fs-12': this.languageType == 'ta' }\">\r\n          {{ randomStudent.name }}</b\r\n        >\r\n        :<br />\r\n        <p\r\n          style=\"padding-left: 1rem;\"\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-10': this.languageType == 'ta'\r\n          }\"\r\n        >\r\n          {{ this.canAssessed }}?\r\n        </p>\r\n      </ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"my-auto\">\r\n      <ion-label\r\n        (click)=\"openAssessmentModal('view2', 'yes', randomStudent, i)\"\r\n      >\r\n        <p\r\n          class=\"text-white m-0 text-center bg-green br-radius-45\"\r\n          [ngClass]=\"{\r\n            opacity_one: this.randomStudentList[i].accessed == 'yes',\r\n            opacity_not_one: this.randomStudentList[i].accessed != 'yes',\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-11': this.languageType == 'ta'\r\n          }\"\r\n        >\r\n          <b>{{ this.yes }}</b>\r\n        </p>\r\n      </ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"2\" class=\"my-auto\">\r\n      <ion-label (click)=\"openAssessmentModal('view1', 'no', randomStudent, i)\">\r\n        <p\r\n          class=\"text-white m-0 text-center bg-red br-radius-45\"\r\n          [ngClass]=\"{\r\n            opacity_one: this.randomStudentList[i].accessed == 'no',\r\n            opacity_not_one: this.randomStudentList[i].accessed != 'no',\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-11': this.languageType == 'ta'\r\n          }\"\r\n        >\r\n          <b>{{ this.no }}</b>\r\n        </p>\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button\r\n        class=\"btn-back\"\r\n       (click)=\"goBack()\"\r\n      >\r\n      <!-- [routerLink]=\"['/tnvntabs/page-route/assessment']\" -->\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToStudentPerformance()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_assessment_assessment_module_ts-es2015.js.map