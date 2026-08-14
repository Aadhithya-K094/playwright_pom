(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_notebook-verification_notebook_module_ts"],{

/***/ 57728:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/notebook-verification/notebook-verification.component.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotebookVerificationComponent": function() { return /* binding */ NotebookVerificationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_notebook_verification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notebook-verification.component.html */ 59895);
/* harmony import */ var _notebook_verification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notebook-verification.component.scss */ 38561);
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














let NotebookVerificationComponent = class NotebookVerificationComponent {
    constructor(modalController, alertController, _storage, _apiService, userSessionService, _router, loading, ionicStore, _alertService, _translate) {
        this.modalController = modalController;
        this.alertController = alertController;
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
            debugger;
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
            this.usertype = this.userSessionService.emis_usertype();
            this.classInfo = localStorage.getItem("classInfo");
            this.classInfo = JSON.parse(this.classInfo);
            this.showQuestionsAlert(this.notebookReport);
            yield this.ionicStore.getOffStorage().then((response) => {
                this.masterApiResponse = response;
                if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                    this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                }
            });
            this.ionicStore.getStoreData().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.storeDetail = response;
                if (this.storeDetail == null || this.storeDetail == undefined) {
                    this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                }
                this.storeDetail.pages.currentPage = "notebook_verifications";
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", (this.storeDetail));
                let notebookquestions = [];
                notebookquestions = this.masterApiResponse.methodology_questions_lang.filter((data) => Number(data.sec_id) == 26);
                this.sectionData = this.masterApiResponse.methodologys.filter((data) => Number(data.sec_id) == 26);
                this.sectionData[0].questionList = [];
                // else{
                //   notebookquestions = this.masterApiResponse.methodology_questions_lang.filter((data)=>data.lang==this.languageType && Number(data.sec_id) == 14)      
                //   this.sectionData = this.masterApiResponse.methodologys.filter((data)=>Number(data.sec_id)==14)
                //   this.sectionData[0].questionList = []
                // }            
                notebookquestions = notebookquestions.sort((a, b) => (a.action_priority > b.action_priority) ? 1 : ((b.action_priority > a.action_priority) ? -1 : 0));
                for (var i = 0; i < notebookquestions.length; i++) {
                    delete notebookquestions[i].score;
                    if (notebookquestions[i].ans) {
                        if (!notebookquestions[i].ans.ans) {
                            notebookquestions[i].ans = JSON.parse(notebookquestions[i].ans);
                        }
                    }
                    if (notebookquestions[i].ans != null) {
                        if (notebookquestions[i].ans.ans) {
                            notebookquestions[i].child_qus = this.masterApiResponse.methodology_questions_lang.filter((data) => {
                                var _a;
                                for (var j = 0; j < ((_a = notebookquestions[i].ans.ans[0]) === null || _a === void 0 ? void 0 : _a.child_qus.length); j++) {
                                    if (data.ob_qus_id == notebookquestions[i].ans.ans[0].child_qus[j]) {
                                        return data;
                                    }
                                }
                            });
                            if (notebookquestions[i].child_qus.length > 0) {
                                if (notebookquestions[i].child_qus[0].ans && notebookquestions[i].child_qus[0].ans != "") {
                                    if (!notebookquestions[i].child_qus[0].ans.ans) {
                                        notebookquestions[i].child_qus[0].ans = JSON.parse(notebookquestions[i].child_qus[0].ans);
                                    }
                                }
                            }
                            notebookquestions[i].child_qus = notebookquestions[i].child_qus;
                        }
                    }
                    notebookquestions[i].class = notebookquestions[i].class.split(",");
                    if (notebookquestions[i].subject_id) {
                        notebookquestions[i].subject_id = notebookquestions[i].subject_id.split(",");
                        if (notebookquestions[i].subject_id.includes(this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id) || notebookquestions[i].subject_id.includes("0")) {
                            this.notebookQuestionList.push(notebookquestions[i]);
                        }
                    }
                }
                let crtDtlsClass_id = this.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
                this.notebookQuestionList = this.notebookQuestionList.filter((data) => JSON.parse(data.class.includes(crtDtlsClass_id)));
                this.notebookQuestionList = this.notebookQuestionList.sort((a, b) => (Number(a.priority) > Number(b.priority)) ? 1 : ((Number(b.priority) > Number(a.priority)) ? -1 : 0));
                let studentList = this.storeDetail.pages.pageData[6].correctedDetails.filter((data) => data.status == 'active');
                let dataLength;
                if (this.storeDetail.pages.pageData[6].correctedDetails.length > 3) {
                    dataLength = 3;
                }
                else {
                    dataLength = this.storeDetail.pages.pageData[6].correctedDetails.length;
                }
                for (i = 0; i < this.notebookQuestionList.length; i++) {
                    if (this.storeDetail.pages.pageData[6].correctedDetails.length) {
                        let idx;
                        idx = Math.floor(Math.random() * studentList.length);
                        if (studentList[idx] != undefined) {
                            studentList[idx].questions = this.notebookQuestionList[i];
                            this.tempStudentList.push(studentList[idx]);
                        }
                        studentList.splice(idx, 1);
                    }
                }
                const colorCodes = ["#FF5733", "#A99844", "#86D765", "#65D7B1", "#B865D7", "#EE776F", "#E5AA68", "#D7E45A", "#78CD4A", "#6EF2C2", "#CD7EF2", "#F27EAF"];
                for (var i = 0; i < this.tempStudentList.length; i++) {
                    this.tempStudentList[i].backgroundColor = colorCodes[i];
                }
                this.studentList = JSON.parse(JSON.stringify(this.tempStudentList));
                this.loading.dismiss();
                if (this.storeDetail.pages.pageData[14] == undefined || this.storeDetail.pages.pageData[14] == null) {
                    let apiData = {
                        pageNo: "15",
                        pageName: "notebook",
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
                    this.storeDetail.pages.pageData[14] = apiData;
                    yield this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", (this.storeDetail));
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
    showQuestionsAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "",
                cssClass: "my-custom-class",
                backdropDismiss: false,
                message: message,
                buttons: [{
                        text: "ok",
                    }],
            });
            yield alert.present();
        });
    }
    selectedDate(selectedDate) {
        this.studentData.signedDate = selectedDate.detail.value;
    }
    selectedAnsData(selectedans) {
        this.studentData.selectedans = selectedans.target.value;
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        debugger;
        if (!this.isQuestionsDisplayed) {
            let studentData = this.storeDetail.pages.pageData[14].correctedDetails
                .question_data.length;
            if (studentData != this.studentList.length) {
                let randomData = {
                    student_emisid: this.studentList[this.studentCount].id,
                    student_name: this.studentList[this.studentCount].name,
                    backgroundColor: this.studentList[this.studentCount].backgroundColor,
                    questions: this.notebookQuestionList[this.studentCount],
                    options: this.options,
                };
                let tempQuestionDataSize = this.storeDetail.pages.pageData[14]
                    .correctedDetails.question_data.length;
                if (!tempQuestionDataSize) {
                    this.storeDetail.pages.pageData[14].correctedDetails.question_data.push(randomData);
                }
                else {
                    let studentIds = this.storeDetail.pages.pageData[14].correctedDetails.question_data.map((el) => {
                        return el.student_emisid;
                    });
                    if (!studentIds.includes(randomData.student_emisid)) {
                        this.storeDetail.pages.pageData[14].correctedDetails.question_data.push(randomData);
                        let secData = {};
                        secData = this.notebookQuestionList[this.studentCount];
                        secData.student_emisid = this.studentList[this.studentCount].id;
                        secData.student_name = this.studentList[this.studentCount].name;
                        secData.selectedans = this.studentData.selectedans;
                        secData.signed_date = this.studentData.signedDate;
                        this.sectionData[0].questionList.push(secData);
                        this.storeDetail.pages.pageData[14].correctedDetails.sec_data = this.sectionData;
                    }
                }
            }
            this.studentData = this.storeDetail.pages.pageData[14].correctedDetails.question_data[this.studentCount];
            this.isQuestionsDisplayed = true;
            this.pageName = "page2";
            if (this.studentCount == this.studentList.length - 1) {
                this.displayBtn = "SUBMIT";
                this.studentCount = this.studentCount + 1;
            }
        }
        else if (this.displayBtn == "NEXT") {
            console.log(this.studentData);
            if (this.studentData.selectedans != undefined && this.studentData.selectedans != "") {
                console.log("1");
                if (this.studentData.selectedans == 'Yes') {
                    if (Number((_a = this.studentData.questions.child_qus[0]) === null || _a === void 0 ? void 0 : _a.type_of_ans) == 4 || Number((_b = this.studentData.questions.child_qus[0]) === null || _b === void 0 ? void 0 : _b.type_of_ans) == 5) {
                        this.studentCount = this.studentCount + 1;
                        let studentData = this.storeDetail.pages.pageData[14].correctedDetails
                            .question_data.length;
                        let randomData = {
                            student_emisid: this.studentList[this.studentCount].id,
                            student_name: this.studentList[this.studentCount].name,
                            backgroundColor: this.studentList[this.studentCount].backgroundColor,
                            questions: this.notebookQuestionList[this.studentCount],
                            options: this.options,
                            ans: "",
                        };
                        if (studentData != this.studentList.length) {
                            if (this.storeDetail.pages.pageData[14].correctedDetails.question_data.some(person => person.student_emisid == randomData.student_emisid)) {
                            }
                            else {
                                this.storeDetail.pages.pageData[14].correctedDetails.question_data.push(randomData);
                                let secData = {};
                                secData = this.notebookQuestionList[this.studentCount];
                                secData.student_emisid = this.studentList[this.studentCount].id;
                                secData.student_name = this.studentList[this.studentCount].name;
                                secData.selectedans = this.studentData.selectedans;
                                secData.signed_date = this.studentData.signedDate;
                                this.sectionData[0].questionList.push(secData);
                                this.storeDetail.pages.pageData[14].correctedDetails.sec_data = this.sectionData;
                            }
                        }
                        this.studentData = this.storeDetail.pages.pageData[14].correctedDetails.question_data[this.studentCount];
                        if (this.studentCount == this.studentList.length - 1) {
                            this.displayBtn = "SUBMIT";
                        }
                    }
                    else {
                        if (this.studentData.questions.child_qus[0]) {
                            if (!this.studentData.questions.child_qus[0].selectedans && this.studentData.questions.child_qus[0].ans != '' && this.studentData.questions.child_qus[0].type_of_ans != "2") {
                                this.showQuestionsAlert("Please Select the date");
                            }
                            else {
                                if (this.studentData.questions.child_qus[0].selectedans == 'Yes' && this.studentData.questions.child_qus[0].type_of_ans != "2" && this.studentData.questions.child_qus[0].ans.ans[0].child_qus.length > 0 && !this.studentData.signedDate) {
                                    this.showQuestionsAlert("Please Select the date");
                                }
                                else {
                                    this.studentCount = this.studentCount + 1;
                                    let studentData = this.storeDetail.pages.pageData[14].correctedDetails
                                        .question_data.length;
                                    let randomData = {
                                        student_emisid: this.studentList[this.studentCount].id,
                                        student_name: this.studentList[this.studentCount].name,
                                        backgroundColor: this.studentList[this.studentCount].backgroundColor,
                                        questions: this.notebookQuestionList[this.studentCount],
                                        options: this.options,
                                        ans: "",
                                    };
                                    if (studentData != this.studentList.length) {
                                        if (this.storeDetail.pages.pageData[14].correctedDetails.question_data.some(person => person.student_emisid == randomData.student_emisid)) {
                                        }
                                        else {
                                            this.storeDetail.pages.pageData[14].correctedDetails.question_data.push(randomData);
                                            let secData = {};
                                            secData = this.notebookQuestionList[this.studentCount];
                                            secData.student_emisid = this.studentList[this.studentCount].id;
                                            secData.student_name = this.studentList[this.studentCount].name;
                                            secData.selectedans = this.studentData.selectedans;
                                            secData.signed_date = this.studentData.signedDate;
                                            this.sectionData[0].questionList.push(secData);
                                            this.storeDetail.pages.pageData[14].correctedDetails.sec_data = this.sectionData;
                                        }
                                    }
                                    this.studentData = this.storeDetail.pages.pageData[14].correctedDetails.question_data[this.studentCount];
                                    if (this.studentCount == this.studentList.length - 1) {
                                        this.displayBtn = "SUBMIT";
                                    }
                                }
                            }
                        }
                        else {
                            this.studentCount = this.studentCount + 1;
                            let studentData = this.storeDetail.pages.pageData[14].correctedDetails
                                .question_data.length;
                            let randomData = {
                                student_emisid: this.studentList[this.studentCount].id,
                                student_name: this.studentList[this.studentCount].name,
                                backgroundColor: this.studentList[this.studentCount].backgroundColor,
                                questions: this.notebookQuestionList[this.studentCount],
                                options: this.options,
                                ans: "",
                            };
                            if (studentData != this.studentList.length) {
                                if (this.storeDetail.pages.pageData[14].correctedDetails.question_data.some(person => person.student_emisid == randomData.student_emisid)) {
                                }
                                else {
                                    this.storeDetail.pages.pageData[14].correctedDetails.question_data.push(randomData);
                                    let secData = {};
                                    secData = this.notebookQuestionList[this.studentCount];
                                    secData.student_emisid = this.studentList[this.studentCount].id;
                                    secData.student_name = this.studentList[this.studentCount].name;
                                    secData.selectedans = this.studentData.selectedans;
                                    secData.signed_date = this.studentData.signedDate;
                                    this.sectionData[0].questionList.push(secData);
                                    this.storeDetail.pages.pageData[14].correctedDetails.sec_data = this.sectionData;
                                }
                            }
                            this.studentData = this.storeDetail.pages.pageData[14].correctedDetails.question_data[this.studentCount];
                            if (this.studentCount == this.studentList.length - 1) {
                                this.displayBtn = "SUBMIT";
                            }
                        }
                    }
                }
                else {
                    this.studentCount = this.studentCount + 1;
                    let studentData = this.storeDetail.pages.pageData[14].correctedDetails
                        .question_data.length;
                    let randomData = {
                        student_emisid: this.studentList[this.studentCount].id,
                        student_name: this.studentList[this.studentCount].name,
                        backgroundColor: this.studentList[this.studentCount].backgroundColor,
                        questions: this.notebookQuestionList[this.studentCount],
                        options: this.options,
                        ans: "",
                    };
                    if (studentData != this.studentList.length) {
                        if (this.storeDetail.pages.pageData[14].correctedDetails.question_data.some(person => person.student_emisid == randomData.student_emisid)) {
                        }
                        else {
                            this.storeDetail.pages.pageData[14].correctedDetails.question_data.push(randomData);
                            let secData = {};
                            secData = this.notebookQuestionList[this.studentCount];
                            secData.student_emisid = this.studentList[this.studentCount].id;
                            secData.student_name = this.studentList[this.studentCount].name;
                            secData.selectedans = this.studentData.selectedans;
                            secData.signed_date = this.studentData.signedDate;
                            this.sectionData[0].questionList.push(secData);
                            this.storeDetail.pages.pageData[14].correctedDetails.sec_data = this.sectionData;
                        }
                    }
                    this.studentData = this.storeDetail.pages.pageData[14].correctedDetails.question_data[this.studentCount];
                    if (this.studentCount == this.studentList.length - 1) {
                        this.displayBtn = "SUBMIT";
                    }
                }
            }
            else {
                console.log("2");
                this.showQuestionsAlert("Please Select Answer");
            }
        }
        else {
            if (this.studentData.selectedans != undefined && this.studentData.selectedans != "") {
                this.storeDetail.pages.pageData[14]["pageDetails"] = this.assessmentAnswers;
                let secData = {};
                if (this.studentList.length == 1) {
                    this.studentCount = 0;
                }
                secData = this.notebookQuestionList[this.studentCount];
                secData.student_emisid = (_c = this.studentList[this.studentCount]) === null || _c === void 0 ? void 0 : _c.id;
                secData.student_name = (_d = this.studentList[this.studentCount]) === null || _d === void 0 ? void 0 : _d.name;
                if (this.studentData) {
                    secData.selectedans = this.studentData.selectedans;
                    secData.signed_date = this.studentData.signedDate;
                }
                this.sectionData[0].questionList.push(secData);
                this.storeDetail.pages.pageData[14].correctedDetails.sec_data = this.sectionData;
                this.storeDetail.pages.currentProgress = this.progressValue;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", (this.storeDetail));
                let getfinaldata = localStorage.getItem("finaldata");
                if (this.studentData.selectedans == 'Yes') {
                    if (Number((_e = this.studentData.questions.child_qus[0]) === null || _e === void 0 ? void 0 : _e.type_of_ans) == 4 || Number((_f = this.studentData.questions.child_qus[0]) === null || _f === void 0 ? void 0 : _f.type_of_ans) == 5) {
                        if (this.storeDetail.pages.pageData[7]) {
                            if (getfinaldata || this.usertype == 8) {
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                            }
                            else {
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                            }
                        }
                        else {
                            if (this.storeDetail.pages.pageData[6] > 0) {
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                            }
                            else {
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                            }
                        }
                    }
                    else {
                        if (this.studentData.questions.ans.ans[0].child_qus.length == 0) {
                            if (this.storeDetail.pages.pageData[7]) {
                                if (getfinaldata || this.usertype == 8) {
                                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                }
                                else {
                                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                }
                            }
                            else {
                                if (this.storeDetail.pages.pageData[6] > 0) {
                                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                }
                                else {
                                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                }
                            }
                        }
                        else {
                            if (!((_g = this.studentData.questions.child_qus[0]) === null || _g === void 0 ? void 0 : _g.selectedans) && ((_h = this.studentData.questions.child_qus[0]) === null || _h === void 0 ? void 0 : _h.ans) != '' && ((_j = this.studentData.questions.child_qus[0]) === null || _j === void 0 ? void 0 : _j.type_of_ans) != "2") {
                                this.showQuestionsAlert("Please Select the date");
                            }
                            else {
                                if (this.studentData.questions.child_qus[0].selectedans == 'Yes' && this.studentData.questions.child_qus[0].type_of_ans != "2" && this.studentData.questions.child_qus[0].ans.ans[0].child_qus.length > 0 && !this.studentData.signedDate) {
                                    this.showQuestionsAlert("Please Select the date");
                                }
                                else {
                                    if (this.storeDetail.pages.pageData[7]) {
                                        if (getfinaldata || this.usertype == 8) {
                                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                        }
                                        else {
                                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                        }
                                    }
                                    else {
                                        if (this.storeDetail.pages.pageData[6] > 0) {
                                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                        }
                                        else {
                                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    if (this.storeDetail.pages.pageData[7]) {
                        if (getfinaldata || this.usertype == 8) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                        }
                    }
                    else {
                        if (this.storeDetail.pages.pageData[6] > 0) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'notebook_section_status': localStorage.setItem('notebook_section_status', "1") } });
                        }
                    }
                }
            }
            else {
                this.showQuestionsAlert("Please Select Answer");
            }
        }
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
            if (this.usertype == 8) {
                let value = Number(localStorage.getItem("notebook_section_status"));
                if (value == 0) {
                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "0") } }]);
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "1") } }]);
                }
            }
            else {
                if (this.storeDetail.pages.pageData[5].correctedDetails.class_id) {
                    if (Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id) >= 3 && Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id) <= 9) {
                        let value = Number(localStorage.getItem("notebook_section_status"));
                        if (value == 0) {
                            this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "0") } }]);
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "1") } }]);
                        }
                    }
                    else {
                        let value = Number(localStorage.getItem("notebook_section_status"));
                        if (value == 0) {
                            this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "0") } }]);
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "1") } }]);
                        }
                    }
                }
                else {
                    let value = Number(localStorage.getItem("notebook_section_status"));
                    if (value == 0) {
                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "0") } }]);
                    }
                    else {
                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "notebook_section_status": localStorage.setItem("notebook_section_status", "1") } }]);
                    }
                }
            }
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
        let questionData = {};
        if (ans.checked) {
            if (ans.checked == true) {
                ans.checked = false;
            }
            else {
                ans.checked = true;
            }
        }
        else {
            ans.checked = true;
        }
        if (this.assessmentAnswers[this.studentCount]) {
            if (grade.type_of_ans == 2) {
                let answer = [];
                answer = this.assessmentAnswers[this.studentCount].ans;
                answer.push(ans);
                questionData = {
                    student_emisid: this.studentData.student_emisid,
                    student_name: this.studentData.student_name,
                    questions: this.studentData.questions,
                    grade: grade,
                    ans: answer,
                };
            }
        }
        else {
            let answer = [];
            answer.push(ans);
            questionData = {
                student_emisid: this.studentData.student_emisid,
                student_name: this.studentData.student_name,
                questions: this.studentData.questions,
                grade: grade,
                ans: answer,
            };
        }
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
NotebookVerificationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService }
];
NotebookVerificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-notebook-verification",
        template: _raw_loader_notebook_verification_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notebook_verification_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotebookVerificationComponent);



/***/ }),

/***/ 8471:
/*!********************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/notebook-verification/notebook.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotebokkVerificationModule": function() { return /* binding */ NotebokkVerificationModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notebook_verification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notebook-verification.component */ 57728);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _notebook_verification_component__WEBPACK_IMPORTED_MODULE_0__.NotebookVerificationComponent
    }
];
let NotebokkVerificationModule = class NotebokkVerificationModule {
};
NotebokkVerificationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_notebook_verification_component__WEBPACK_IMPORTED_MODULE_0__.NotebookVerificationComponent,
        ],
        entryComponents: []
    })
], NotebokkVerificationModule);



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

/***/ 38561:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/notebook-verification/notebook-verification.component.scss ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\n  display: block;\n}\n\n.inactive {\n  display: none;\n}\n\n.header-accordion {\n  margin: 0;\n  background: #F2C94C;\n  font-family: Arial;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 22px;\n  /* identical to box height */\n  color: #FFFFFF;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n\nion-modal {\n  --width: 100px;\n  --height: 102px;\n  --border-radius: 8px;\n}\n\nion-modal ion-datetime {\n  height: 102px;\n}\n\nion-label {\n  max-width: 100% !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.header {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.header-txt {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  border-radius: 10px;\n}\n\n.heading-txt {\n  background: #e6ccff;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.item-style {\n  margin-bottom: 15px;\n  border-radius: 6px;\n}\n\n.background {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  padding: 0px;\n}\n\n.ques-txt {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.bt-10 {\n  padding-bottom: 10p;\n}\n\n.list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.item-native {\n  background: #fff;\n}\n\n.item-border {\n  border-radius: 10px;\n  border-top: 5px solid #8b67b3;\n}\n\nion-list {\n  background: white !important;\n}\n\n.has-focus.sc-ion-input-md-h input.sc-ion-input-md {\n  background: blue !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGVib29rLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFFQztFQUNHLGFBQUE7QUFDSjs7QUFDQztFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVBOztBQUVBO0VBQ0kscUNBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7QUFFSjs7QUFTQTtFQUNFLDBCQUFBO0FBTkY7O0FBUUE7RUFDRSxVQUFBO0FBTEY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0FBTEY7O0FBT0E7RUFDRSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBSUY7O0FBRkE7RUFDRSwrQkFBQTtBQUtGOztBQUZBO0VBQ0UsMEJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxtQkFBQTtFQUNFLDZCQUFBO0FBT0o7O0FBSkE7RUFDRSw0QkFBQTtBQU9GOztBQUpBO0VBQ0UsMkJBQUE7QUFPRiIsImZpbGUiOiJub3RlYm9vay12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiB9XHJcblxyXG4gLmluYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiAuaGVhZGVyLWFjY29yZGlvbntcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogI0YyQzk0QztcclxuZm9udC1mYW1pbHk6IEFyaWFsO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5jb2xvcjogI0ZGRkZGRjtcclxuaGVpZ2h0OiA2MHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5iZy10cmFuc3BhcmVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59XHJcbmlvbi1tb2RhbCB7XHJcbiAgICAtLXdpZHRoOiAxMDBweDtcclxuICAgIC0taGVpZ2h0OiAxMDJweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLW1vZGFsIGlvbi1kYXRldGltZSB7XHJcbiAgICBoZWlnaHQ6IDEwMnB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udmFsaWQtY2xyIHtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgcGFkZGluZzoxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItdHh0IHtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICAvLyBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmhlYWRpbmctdHh0IHtcclxuICBiYWNrZ3JvdW5kOiAjZTZjY2ZmO1xyXG4gIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uaXRlbS1zdHlsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6MHB4O1xyXG59XHJcbi5xdWVzLXR4dCB7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4uYnQtMTAge1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcFxyXG59XHJcbi5saXN0IHtcclxuICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgcGFkZGluZy10b3A6MHB4XHJcbn1cclxuLnJhZGlvIHtcclxuICBwYWRkaW5nLXJpZ2h0OjQwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAzcHhcclxufVxyXG4ubGJsIHtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcbi5pbnB1dC1jbHIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0tbmF0aXZle1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxufVxyXG4uaXRlbS1ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzhiNjdiMztcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oYXMtZm9jdXMuc2MtaW9uLWlucHV0LW1kLWggaW5wdXQuc2MtaW9uLWlucHV0LW1ke1xyXG4gIGJhY2tncm91bmQ6Ymx1ZSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 59895:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/notebook-verification/notebook-verification.component.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{ notebookVerification}}</b>\r\n          </ion-title>\r\n        </ion-col>                \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"color-lyellow\">\r\n\r\n\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n  <p class=\"fs-12 p-2\" style=\"margin-bottom:0px\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.notebookReport}}</span>.</p>         \r\n  </ion-text>  \r\n  <div *ngIf=\"pageName == 'page1'\">\r\n    <div *ngFor=\"let item of tempStudentList; let i = index\" class=\"mb-1\">\r\n      <h5\r\n        class=\"text-center header-accordion\"\r\n        (click)=\"rearrangeStudent(item, i)\"\r\n        [style.background]=\"item?.backgroundColor\"\r\n      >\r\n        {{ item?.name }}        \r\n      </h5>      \r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"pageName == 'page2'\">\r\n    <h5 class=\"text-center header-accordion\"  [style.background]=\"studentData?.backgroundColor\">\r\n      <b>{{ studentData?.student_name }}</b>\r\n    </h5>\r\n    \r\n    <section style=\"padding-top:10px\">\r\n      <ion-item lines=\"none\" style=\"padding-bottom:10px\" style=\"background:#fff\" class=\"item-style item-border\">\r\n        <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">\r\n        <ion-label  class=\"ques-txt\" *ngIf=\"this.languageType=='en'\">\r\n          {{ studentData?.questions.ob_qus_name }}\r\n        </ion-label>\r\n        <ion-label  class=\"ques-txt\" *ngIf=\"this.languageType=='ta'\">\r\n          {{ studentData?.questions.ob_qus_name_tamil }}\r\n        </ion-label>\r\n \r\n        <!-- <ion-row class=bt-10>\r\n          <ion-list   class=\"list\">\r\n            <ion-radio-group [(ngModel)]=\"studentData.selectedans\">\r\n              <ion-item lines=\"none\" class=\"bg-transparent\" *ngFor=\"let optionData of studentData.questions?.ans.ans\" >\r\n                <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='en'\">\r\n                  {{ optionData?.ans}}</ion-label\r\n                >\r\n                <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='ta'\">\r\n                  {{ optionData?.ans_tamil}}</ion-label\r\n                >\r\n                <ion-radio\r\n                  slot=\"start\"\r\n                  color=\"favorite\"\r\n                  value=\"{{ optionData?.ans }}\"\r\n                  (click)=\"\r\n                    selectedAnswer(optionData, optionData)\r\n                  \"\r\n                ></ion-radio>\r\n              </ion-item>            \r\n          </ion-radio-group>\r\n          </ion-list>\r\n        </ion-row> -->\r\n\r\n        <ion-row  *ngIf=\"studentData?.questions?.type_of_ans=='1'\" class=bt-10>\r\n          <ion-list   class=\"list\">\r\n            <ion-radio-group [(ngModel)]=\"studentData.selectedans\">\r\n              <ion-item lines=\"none\" class=\"bg-transparent\" *ngFor=\"let optionData of studentData?.questions?.ans.ans\" >\r\n                <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='en'\">\r\n                  {{ optionData?.ans}}</ion-label\r\n                >\r\n                <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='ta'\">\r\n                  {{ optionData?.ans_tamil}}</ion-label\r\n                >\r\n                <ion-radio\r\n                  slot=\"start\"\r\n                  color=\"favorite\"\r\n                  value=\"{{ optionData?.ans }}\"\r\n                  (click)=\"\r\n                    selectedAnswer(optionData, studentData.questions)\r\n                  \"\r\n                ></ion-radio>\r\n              </ion-item>            \r\n          </ion-radio-group>\r\n          </ion-list>\r\n        </ion-row>\r\n\r\n        <ion-row  *ngIf=\"studentData?.questions?.type_of_ans=='2'\" class=bt-10>\r\n          <ion-list   class=\"list\">\r\n            <ng-container *ngFor=\"let optionData of studentData?.questions?.ans.ans\">\r\n              <ion-item lines = \"none\" class=\"bg-transparent\">\r\n                <ion-checkbox\r\n                  slot=\"start\"\r\n                  color=\"success\"\r\n                  class=\"m-2\"\r\n                  (ionChange)=\"selectedAnswer(optionData,studentData.questions)\"\r\n                  [checked]=\"optionData.checked\"\r\n                  [disabled]=\"false\"\r\n                ></ion-checkbox>\r\n                <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='en'\">\r\n                  {{ optionData?.ans}}</ion-label\r\n                >\r\n                <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='ta'\">\r\n                  {{ optionData?.ans_tamil}}</ion-label\r\n                >                </ion-item>       \r\n            </ng-container>              \r\n          </ion-list>\r\n        </ion-row>          \r\n        \r\n        <ion-row class=bt-10 *ngIf=\"studentData?.questions?.type_of_ans=='4'\">\r\n          <ion-list  style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n            <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n            <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n          </ion-list>\r\n        </ion-row>\r\n        \r\n        <ion-row class=bt-10 *ngIf=\"studentData?.questions?.type_of_ans=='5' || studentData?.questions?.type_of_ans=='0'\">\r\n          <ion-list  style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n            <ion-input  style=\"color: #000000\" type=\"text\" value=\"{{studentData.selectedans}}\" (ionChange)=\"selectedAnsData($event)\"  placeholder=\"Enter the input\"></ion-input>            \r\n          </ion-list>\r\n        </ion-row> \r\n      </ion-col><br>\r\n    </ion-item>          \r\n        <div *ngFor=\"let questionData of studentData.questions?.child_qus\">\r\n        <ion-item lines=\"none\"  *ngIf=\"studentData.selectedans=='Yes'||studentData.selectedans=='ஆம்'\" style=\"padding-bottom:10px\" class=\"item-style item-border\">\r\n          <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">\r\n            <ion-label  class=\"ques-txt\" *ngIf=\"this.languageType=='en'\">\r\n              {{questionData?.ob_qus_name }}\r\n            </ion-label>\r\n            <ion-label  class=\"ques-txt\" *ngIf=\"this.languageType=='ta'\">\r\n              {{ questionData?.ob_qus_name_tamil }}\r\n            </ion-label>\r\n          <ion-row  *ngIf=\"questionData.type_of_ans=='1'\" class=bt-10>\r\n            <ion-list   class=\"list\">\r\n              <ion-radio-group [(ngModel)]=\"questionData.selectedans\">\r\n                <ion-item lines=\"none\" class=\"bg-transparent\" *ngFor=\"let optionData of questionData?.ans.ans\" >\r\n                  <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='en'\">\r\n                    {{ optionData?.ans}}</ion-label\r\n                  >\r\n                  <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='ta'\">\r\n                    {{ optionData?.ans_tamil}}</ion-label\r\n                  >\r\n                  <ion-radio\r\n                    slot=\"start\"\r\n                    color=\"favorite\"\r\n                    value=\"{{ optionData?.ans }}\"\r\n                    (click)=\"\r\n                      selectedAnswer(optionData, questionData)\r\n                    \"\r\n                  ></ion-radio>\r\n                </ion-item>            \r\n            </ion-radio-group>\r\n            </ion-list>\r\n          </ion-row>\r\n\r\n          <ion-row  *ngIf=\"questionData.type_of_ans=='2'\" class=bt-10>\r\n            <ion-list   class=\"list\">\r\n              <ng-container *ngFor=\"let optionData of questionData?.ans.ans\">\r\n                <ion-item lines = \"none\" class=\"bg-transparent\">\r\n                  <ion-checkbox\r\n                    slot=\"start\"\r\n                    color=\"success\"\r\n                    class=\"m-2\"\r\n                    (ionChange)=\"selectedAnswer(optionData,questionData)\"\r\n                    [checked]=\"optionData.checked\"\r\n                    [disabled]=\"false\"\r\n                  ></ion-checkbox>\r\n                  <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='en'\">\r\n                    {{ optionData?.ans}}</ion-label\r\n                  >\r\n                  <ion-label class=\"text-wrap\" *ngIf=\"this.languageType=='ta'\">\r\n                    {{ optionData?.ans_tamil}}</ion-label\r\n                  >                </ion-item>       \r\n              </ng-container>              \r\n            </ion-list>\r\n          </ion-row>          \r\n          \r\n          <ion-row class=bt-10 *ngIf=\"questionData.type_of_ans=='4'\">\r\n            <ion-list *ngIf=\"languageType == 'en'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n              <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n              <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n            </ion-list>\r\n            <ion-list *ngIf=\"languageType == 'ta'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n              <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n              <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n            </ion-list>\r\n          </ion-row>\r\n          \r\n          <ion-row class=bt-10 *ngIf=\"questionData.type_of_ans=='5' || questionData.type_of_ans=='0'\">\r\n            <ion-list *ngIf=\"languageType == 'en'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n              <ion-input  style=\"color: #000000\" type=\"text\" value=\"{{studentData.selectedans}}\"  placeholder=\"Enter the input\"></ion-input>            \r\n            </ion-list>\r\n          </ion-row>          \r\n        </ion-col><br>\r\n      </ion-item>         \r\n      \r\n      <ion-item  lines=\"none\" *ngIf=\"studentData.selectedans=='Yes'&&questionData.selectedans=='Yes'&&questionData?.ans.ans[0].child_qus.length>0&&questionData.ob_qus_id!=187&&questionData.ob_qus_id!=90\" style=\"padding-bottom:10px\" class=\"item-style item-border\">\r\n        <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">\r\n        <ion-label  *ngIf=\"languageType == 'en'\" class=\"ques-txt\">\r\n          When did the teacher last sign the notebook?\r\n        </ion-label>                  \r\n        <ion-row class=bt-10>\r\n          <ion-list *ngIf=\"languageType == 'en'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n            <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n            <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n          </ion-list>\r\n        </ion-row>\r\n        <ion-label *ngIf=\"languageType == 'ta'\" class=\"ques-txt\">\r\n          ஆசிரியர் கடைசியாக பாடக்குறிப்பேடுகளை எப்போது கையெழுத்திட்டுள்ளார்?\r\n        </ion-label>            \r\n        <ion-row class=bt-10>\r\n          <ion-list *ngIf=\"languageType == 'ta'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n            <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n            <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n          </ion-list>\r\n        </ion-row>\r\n      </ion-col><br>\r\n    </ion-item>    \r\n\r\n    <ion-item  lines=\"none\" *ngIf=\"studentData.selectedans=='Yes' && questionData.selectedans=='Yes' && questionData?.ans.ans[0].child_qus.length > 0 && questionData.ob_qus_id == 518 \" style=\"padding-bottom:10px\" class=\"item-style item-border\">\r\n      <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">\r\n      <ion-label  *ngIf=\"languageType == 'en'\" class=\"ques-txt\">\r\n        When did the teacher last issue the library book?\r\n      </ion-label>                  \r\n      <ion-row class=bt-10>\r\n        <ion-list *ngIf=\"languageType == 'en'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n          <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n          <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n        </ion-list>\r\n      </ion-row>\r\n\r\n      <ion-label *ngIf=\"languageType == 'ta'\" class=\"ques-txt\">\r\n        ஆசிரியர் கடைசியாக நூலகப் புத்தகத்தை எப்போது வழங்கினார்?\r\n      </ion-label>            \r\n      <ion-row class=bt-10>\r\n        <ion-list *ngIf=\"languageType == 'ta'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n          <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n          <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n        </ion-list>\r\n      </ion-row>\r\n      \r\n    </ion-col><br>\r\n  </ion-item>    \r\n\r\n    \r\n\r\n\r\n\r\n<ion-item   lines=\"none\" *ngIf=\"studentData.selectedans=='Yes'&&questionData.selectedans=='Yes'&&questionData?.ans.ans[0].child_qus.length>0&&questionData.ob_qus_id==90\" style=\"padding-bottom:10px\" class=\"item-style item-border\">\r\n  <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">     \r\n  <ion-label *ngIf=\"languageType == 'en'\" class=\"ques-txt\">\r\n    What is the latest correction date?\r\n  </ion-label>            \r\n  <ion-label *ngIf=\"languageType == 'ta'\" class=\"ques-txt\">\r\n    இறுதியாக பயிற்சிப் புத்தகத்தைத் திருத்திய நாள் எது?\r\n  </ion-label>  \r\n  <ion-row class=bt-10>\r\n    <ion-list *ngIf=\"languageType == 'en'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n      <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n      <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n    </ion-list>\r\n  </ion-row>\r\n  <ion-row class=bt-10>\r\n    <ion-list *ngIf=\"languageType == 'ta'\" style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n      <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{studentData.signedDate}}\" (ionChange)=\"selectedDate($event)\" placeholder=\"Select the date\"></ion-input>            \r\n      <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n    </ion-list>\r\n  </ion-row>\r\n</ion-col><br>\r\n</ion-item>  \r\n\r\n\r\n</div>           \r\n      </section>\r\n  </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"moveBack()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button\r\n        class=\"btn-next\"\r\n        [ngClass]=\"displayBtn != 'NEXT' ? 'submit' : ''\"\r\n        (click)=\"moveNext()\"\r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{\r\n            displayBtn == \"NEXT\" ? this.save : this.submitAssessement\r\n          }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_assessment_notebook-verification_notebook_module_ts-es2015.js.map