(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_kgbv-nsbav_kgbv-nsbav_module_ts"],{

/***/ 90816:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/kgbv-nsbav/kgbv-nsbav-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KgbvNsbavPageRoutingModule": function() { return /* binding */ KgbvNsbavPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kgbv_nsbav_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kgbv-nsbav.page */ 61594);




const routes = [
    {
        path: '',
        component: _kgbv_nsbav_page__WEBPACK_IMPORTED_MODULE_0__.KgbvNsbavPage
    }
];
let KgbvNsbavPageRoutingModule = class KgbvNsbavPageRoutingModule {
};
KgbvNsbavPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KgbvNsbavPageRoutingModule);



/***/ }),

/***/ 25170:
/*!************************************************************!*\
  !*** ./src/app/pages/tnvn/kgbv-nsbav/kgbv-nsbav.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KgbvNsbavPageModule": function() { return /* binding */ KgbvNsbavPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _kgbv_nsbav_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kgbv-nsbav-routing.module */ 90816);
/* harmony import */ var _kgbv_nsbav_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kgbv-nsbav.page */ 61594);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








let KgbvNsbavPageModule = class KgbvNsbavPageModule {
};
KgbvNsbavPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _kgbv_nsbav_routing_module__WEBPACK_IMPORTED_MODULE_0__.KgbvNsbavPageRoutingModule
        ],
        declarations: [_kgbv_nsbav_page__WEBPACK_IMPORTED_MODULE_1__.KgbvNsbavPage]
    })
], KgbvNsbavPageModule);



/***/ }),

/***/ 61594:
/*!**********************************************************!*\
  !*** ./src/app/pages/tnvn/kgbv-nsbav/kgbv-nsbav.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KgbvNsbavPage": function() { return /* binding */ KgbvNsbavPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_kgbv_nsbav_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./kgbv-nsbav.page.html */ 98925);
/* harmony import */ var _kgbv_nsbav_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kgbv-nsbav.page.scss */ 81713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);












let KgbvNsbavPage = class KgbvNsbavPage {
    constructor(apiService, _translate, _alertService, ionicStore, _router, userSessionService, loading) {
        this.apiService = apiService;
        this._translate = _translate;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this._router = _router;
        this.userSessionService = userSessionService;
        this.loading = loading;
        this.currentIndex = 0;
        this.sectionList = [];
        this.headerClicked = true;
        this.methodologyQuestions = [];
        this.question_no = 0;
        this.subQuestionNo = 0;
        this.displayCounter = (selectedAnswerDetail) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            let answerDetail = selectedAnswerDetail;
            let currentSectionId = this.sectionList[this.selectedSection].sec_id;
            let answerdQuestion_SectionId = answerDetail.question.sec_id;
            if (currentSectionId == answerdQuestion_SectionId) {
                let answerType = answerDetail.question.type_of_ans;
                switch (answerType) {
                    case "6": {
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                        break;
                    }
                    case "5": {
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                        break;
                    }
                    case "1": {
                        let selectedAnswer = {
                            answer_id: answerDetail.answer.id,
                            answer: answerDetail.answer.ans,
                        };
                        if (selectedAnswer.answer.toLowerCase() == "other" ||
                            selectedAnswer.answer == "மற்றவை") {
                            selectedAnswer["otherAns"] = answerDetail.otherAnswer;
                        }
                        if (this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex] != undefined) {
                            this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = selectedAnswer;
                        }
                        break;
                    }
                    case "2": {
                        let selectedAnswer = {
                            answer_id: answerDetail.answer.id,
                            answer: answerDetail.answer.ans,
                        };
                        let answerInfo = selectedAnswer.answer
                            .split(" ")
                            .join("")
                            .toLowerCase();
                        let selectedAnswerList = this.sectionList[this.selectedSection]
                            .questionList[answerDetail.questionIndex].selectedAnswer;
                        if (!selectedAnswerList.length) {
                            this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(selectedAnswer);
                            this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                        }
                        else {
                            let answerIds = selectedAnswerList.map((el) => {
                                return el.answer_id;
                            });
                            const found = answerIds.includes(selectedAnswer.answer_id);
                            if (found) {
                                let indexInfo = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.findIndex((answer) => answer.answer_id == selectedAnswer.answer_id);
                                this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = false;
                                this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.splice(indexInfo, 1);
                            }
                            else {
                                if (answerInfo == "noneoftheabove" ||
                                    answerInfo.toLowerCase() == "no" ||
                                    answerInfo == "none" ||
                                    answerInfo == "இல்லை" ||
                                    answerInfo == "எதுவுமில்லை" ||
                                    answerInfo == "மேற்கூறியஎதுவும்இல்லை" ||
                                    answerInfo.toLowerCase() == "other" ||
                                    answerInfo == "மற்றவை") {
                                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach((element) => {
                                        element.checked = false;
                                    });
                                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(selectedAnswer);
                                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                                }
                                else {
                                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans.forEach((ansData, index) => {
                                        let listanswer = ansData.ans
                                            .split(" ")
                                            .join("")
                                            .toLowerCase();
                                        if (listanswer == "noneoftheabove" ||
                                            listanswer == "none" ||
                                            answerInfo.toLowerCase() == "no" ||
                                            answerInfo == "இல்லை" ||
                                            listanswer == "எதுவுமில்லை" ||
                                            listanswer == "மேற்கூறியஎதுவும்இல்லை" ||
                                            listanswer.toLowerCase() == "other" ||
                                            listanswer == "மற்றவை") {
                                            this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[index].checked = false;
                                        }
                                    });
                                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer.push(selectedAnswer);
                                    this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked = true;
                                }
                            }
                        }
                        break;
                    }
                    case "3": {
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                        break;
                    }
                    case "4": {
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                        break;
                    }
                    default: {
                        break;
                    }
                }
                this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                if (answerDetail.question.type_of_ans != "2") {
                    yield this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);
                }
                else {
                    let status1 = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;
                    if (status1) {
                        if (this.previousQuestion_id != answerDetail.question.ob_qus_id) {
                            yield this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);
                        }
                    }
                    else {
                        let childQus = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].child_qus;
                        let questionindexlength = [];
                        for (var i = 0; i < childQus.length; i++) {
                            this.sectionList[this.selectedSection].questionList.forEach((question, childquestionIndex) => {
                                if (Number(childQus[i]) == (question.ob_qus_id)) {
                                    questionindexlength.push(childquestionIndex);
                                    this.subQuestionNo--;
                                    this.sectionList[this.selectedSection].questionList.splice(childquestionIndex, 1);
                                }
                            });
                            this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                        }
                        this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                    }
                }
                if (answerDetail.answer.child_qus != undefined) {
                    if (answerDetail.answer.child_qus.length > 0) {
                        if (answerDetail.question.type_of_ans != "2") {
                            this.subQuestionNo = 0;
                            answerDetail.answer.child_qus.forEach((datad, childQuestion_Index) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                let newQuestion = yield this.methodologyQuestions.find((data1, index) => data1.ob_qus_id == datad.toString());
                                if (newQuestion != undefined) {
                                    yield this.addSubQuestions(newQuestion, answerDetail.questionIndex, answerDetail.question, answerDetail.answerIndex);
                                }
                            }));
                        }
                        else {
                            let status = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;
                            if (this.previousQuestion_id != answerDetail.question.ob_qus_id) {
                                this.subQuestionNo = 0;
                            }
                            this.previousQuestion_id = answerDetail.question.ob_qus_id;
                            if (status) {
                                answerDetail.answer.child_qus.forEach((datad, childQuestion_Index) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                    let newQuestion = yield this.methodologyQuestions.find((data1, index) => data1.ob_qus_id == datad.toString());
                                    if (newQuestion != undefined) {
                                        yield this.addSubQuestions(newQuestion, answerDetail.questionIndex, answerDetail.question, answerDetail.answerIndex);
                                    }
                                }));
                            }
                        }
                    }
                }
            }
            this.pageDetail = this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList;
            let questionList = this.pageDetail[this.selectedSection].questionList;
            let sum = 0;
            for (var i = 0; i < questionList.length; i++) {
                let answerType = questionList[i].type_of_ans;
                if (answerType == "1") {
                    if (questionList[i].selectedAnswer.answer_id != undefined && questionList[i].selectedAnswer.answer_id != '') {
                        sum += 1;
                    }
                }
                else if (answerType == "2") {
                    if (questionList[i].selectedAnswer.length > 0) {
                        sum += 1;
                    }
                    const otherFound = lodash__WEBPACK_IMPORTED_MODULE_7___default().find(questionList[i].selectedAnswer, (sa) => sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை");
                }
                else {
                    if (questionList[i].selectedAnswer != "") {
                        sum += 1;
                    }
                }
            }
            if (sum) {
                this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList[this.selectedSection].count = sum;
            }
            let statusCheckData = questionList.every(this.checkValid);
            if (statusCheckData) {
                this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
            }
            let statusCheck;
            let sectionList = this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList;
            let statusCheckArray = [];
            for (var i = 0; i < sectionList.length; i++) {
                questionList = sectionList[i].questionList;
                statusCheck = questionList.every(this.checkValid);
                if (statusCheck == true) {
                    statusCheckArray.push(statusCheck);
                }
            }
            if (statusCheckArray.length == sectionList.length) {
                this.statusCheck = statusCheck;
            }
        });
        this.addSubQuestions = (newQuestion, questionIndex, parentQuestion, answerIndex = "") => {
            let questionexist = this.sectionList[this.selectedSection].questionList.some(function (el) {
                return el.ob_qus_id == newQuestion.ob_qus_id;
            });
            this.sectionList[this.selectedSection].questionList.forEach(() => {
            });
            if (questionexist != true) {
                let i = 0;
                let temp_Questions = JSON.parse(JSON.stringify(newQuestion));
                if (temp_Questions.ans != null) {
                    // temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
                    // let removeSpace = temp_Questions.ans.replace(/\s/g, '')
                    // let rmoveQute = removeSpace.replace('"{"', '{"')
                    temp_Questions.ans = JSON.parse(temp_Questions.ans);
                }
                if ((Number(this.classType) == Number(temp_Questions.classtype) ||
                    temp_Questions.classtype == "3" || Number(this.classType) == 3) &&
                    (this.isClassPresent(temp_Questions.class, this.classroomSelection_ClassList_Ids) == true ||
                        this.isNonSelectedClass_present(temp_Questions.class, this.classroomSelection_ClassList_Ids) == true)) {
                    this.subQuestionNo++;
                    let questionNo = this.subQuestionNo;
                    temp_Questions["question_no"] =
                        this.sectionList[this.selectedSection].questionList[questionIndex]
                            .question_no +
                            "." +
                            questionNo;
                    this.sectionList[this.selectedSection].questionList.splice(questionIndex + questionNo, 0, temp_Questions);
                    this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                }
            }
        };
        this.isClassPresent = (classList, classroomSelection_ClassList_Ids) => {
            let Ques_ClassList = classList.split(",");
            let status = Ques_ClassList.includes(this.selectedClass);
            return status;
        };
    }
    ionViewWillEnter() {
        debugger;
        this.checkedAssessments = localStorage.getItem("checkedAssessments");
        this.teachertype = this.userSessionService.teacher_type();
        this.ionicStore.getStoreData().then((response) => {
            debugger;
            this.storeDetail = response;
            this.storeDetail.pages.currentPage = "kgbvNsbavInspection";
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            console.log('storeDetailstoreDetail', this.storeDetail);
            this.classType = 3;
            this.selectedSubject = this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
            this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id.toString();
            this.classroomSelection_ClassList = this.storeDetail.pages.pageData[5].correctedDetails;
            this.classroomSelection_ClassList_Ids = this.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
            let classDetail = this.storeDetail.pages.pageData[5].pageDetails;
            if (this.storeDetail.pages.pageData[21] == undefined || this.storeDetail.pages.pageData[21] == null) {
                debugger;
                this.getMethodology(3, classDetail.selectedClass.class_id, this.classroomSelection_ClassList_Ids, this.classroomSelection_ClassList);
            }
            else {
                debugger;
                this.sectionList = this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList;
                this.methodologyQuestions = this.storeDetail.pages.pageData[21].correctedDetails.methodologyQuestions;
                this.selectedSection = this.storeDetail.pages.pageData[21].correctedDetails.selectedSection;
                this.headerClicked = this.storeDetail.pages.pageData[21].correctedDetails.headerClicked;
                this.currentIndex = this.storeDetail.pages.pageData[21].correctedDetails.currentIndex;
                let statusCheckArray = [];
                let statusCheck;
                for (var i = 0; i < this.sectionList.length; i++) {
                    let questionList = this.sectionList[i].questionList;
                    statusCheck = questionList.every(this.checkValid);
                    if (statusCheck == true) {
                        statusCheckArray.push(statusCheck);
                    }
                }
                if (statusCheckArray.length == this.sectionList.length) {
                    this.statusCheck = true;
                }
                console.log(this.sectionList, 'this.sectionList');
            }
        });
    }
    ngOnInit() {
        this.appLanguage();
        this.progressValue = Math.round(((5 - 2) / 15) * 100);
    }
    appLanguage() {
        this.apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this.previouslanguage = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    getMethodology(classType, classId, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
        debugger;
        let classDetail = {
            class_id: classId.toString(),
            classtype: 3,
        };
        let tempsectionList = [];
        let tempQuestionList = [];
        this.ionicStore.getOffStorage().then((response) => {
            var _a, _b, _c;
            this.loading.dismiss();
            this.masterApiResponse = response;
            console.log('masterApiResponsemasterApiResponse', this.masterApiResponse);
            tempsectionList = (_a = this.masterApiResponse) === null || _a === void 0 ? void 0 : _a.methodologys;
            tempQuestionList = (_b = this.masterApiResponse) === null || _b === void 0 ? void 0 : _b.methodology_questions_lang;
            let methodologyQuesList = [];
            tempQuestionList === null || tempQuestionList === void 0 ? void 0 : tempQuestionList.forEach((data) => {
                let quesClassList = data.class.split(",");
                let allSelectionClassList = classroomSelection_ClassList;
                let allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
                let status = quesClassList.includes(this.selectedClass);
                let isNon_SelectedPresent;
                if (allSelectionClassList_Ids.length && quesClassList.length) {
                    isNon_SelectedPresent = quesClassList.includes(this.selectedClass);
                    if (isNon_SelectedPresent || status) {
                        isNon_SelectedPresent = true;
                    }
                    else {
                        isNon_SelectedPresent = false;
                    }
                }
                else {
                    isNon_SelectedPresent = false;
                }
                if (isNon_SelectedPresent == true &&
                    (Number(data.classtype) == 1 || data.classtype == "3" || Number(data.classtype) == 2)) {
                    if (data.sec_id == 8 || data.sec_id == 15) {
                        if (status) {
                            methodologyQuesList.push(data);
                        }
                    }
                    else if (data.sec_id == 3 || data.sec_id == 10) {
                        if (status) {
                            methodologyQuesList.push(data);
                        }
                    }
                    else {
                        methodologyQuesList.push(data);
                    }
                }
            });
            let records = {
                methodology: tempsectionList,
                methodology_questions: methodologyQuesList,
            };
            debugger;
            // let a = JSON.parse(JSON.stringify(records?.methodology));    
            let a = records === null || records === void 0 ? void 0 : records.methodology;
            this.methodologyQuestions = records === null || records === void 0 ? void 0 : records.methodology_questions;
            (_c = this.methodologyQuestions) === null || _c === void 0 ? void 0 : _c.forEach((data) => {
                let selectedAnswer;
                let answerType = data.type_of_ans;
                switch (answerType) {
                    case "6": {
                        selectedAnswer = "";
                        break;
                    }
                    case "5": {
                        selectedAnswer = "";
                        break;
                    }
                    case "1": {
                        selectedAnswer = {
                            answer_id: "",
                            answer: "",
                        };
                        break;
                    }
                    case "2": {
                        selectedAnswer = [];
                        break;
                    }
                    case "3": {
                        selectedAnswer = "";
                        break;
                    }
                    case "4": {
                        selectedAnswer = "";
                        break;
                    }
                    default: {
                        break;
                    }
                }
                data["selectedAnswer"] = selectedAnswer;
            });
            console.log(this.sectionList, 'this.sectionList');
            debugger;
            this.sectionList = records === null || records === void 0 ? void 0 : records.methodology;
            // if(this.checkedAssessments == 'Assessments'){
            //   this.sectionList = this.sectionList.filter((data)=> Number(data.sec_id) == 29) 
            // }else{
            //   this.sectionList = this.sectionList.filter((data)=> Number(data.sec_id) != 7 && Number(data.sec_id) != 14 && Number(data.sec_id) != 3 && Number(data.sec_id) != 10 && Number(data.sec_id) != 19 && Number(data.sec_id) != 20 && Number(data.sec_id) != 21 && Number(data.sec_id) != 22 && Number(data.sec_id) != 23 && Number(data.sec_id) != 24 && Number(data.sec_id) != 26&& Number(data.sec_id) != 27&& Number(data.sec_id) != 29 && Number(data.sec_id) != 30 && Number(data.sec_id) != 31 && Number(data.sec_id) != 32 && Number(data.sec_id) != 33)
            // }
            if (this.checkedAssessments == 'Assessments') {
                this.sectionList = this.sectionList.filter((data) => Number(data.sec_id) == 30 || Number(data.sec_id) == 31 || Number(data.sec_id) == 32 || Number(data.sec_id) == 33);
            }
            else {
                this.sectionList = this.sectionList.filter((data) => Number(data.sec_id) == 30 || Number(data.sec_id) == 31 || Number(data.sec_id) == 32 || Number(data.sec_id) == 33);
            }
            console.log(this.sectionList);
            this.sectionList.forEach((data, index) => {
                this.question_no = 0;
                this.methodologyQuestions = this.methodologyQuestions.sort((a, b) => (Number(a.priority) > Number(b.priority)) ? 1 : ((Number(b.priority) > Number(a.priority)) ? -1 : 0));
                console.log(this.methodologyQuestions, 'this.methodologyQuestions');
                let questions = this.methodologyQuestions.filter((data1, index1) => {
                    delete data1.score;
                    if (data.sec_id == data1.sec_id && data1.parent_id == "-1") {
                        debugger;
                        const answer = data1;
                        if (data1.sec_id == "7" || data1.sec_id == "14" || Number(data1.sec_id) == 3 || Number(data1.sec_id) == 10 || Number(data1.sec_id) == 19 || Number(data1.sec_id) == 20 || Number(data1.sec_id) == 21 || Number(data1.sec_id) == 22 || Number(data1.sec_id) == 23 || Number(data1.sec_id) == 24) {
                            if (data1.class.includes(classId)) {
                                if (data1.ans != null && data1.ans) {
                                    if (data1.ans.ans) {
                                    }
                                    else {
                                        answer.ans = data1.ans
                                            .replace(/^\s+|\s+$/g, "")
                                            .replace(/\n/g, "");
                                        answer.ans = JSON.parse(answer.ans);
                                        if (answer.ans.ans != undefined) {
                                            answer.ans.ans.forEach((element) => {
                                                element["checked"] = false;
                                            });
                                        }
                                    }
                                }
                                return answer;
                            }
                        }
                        else {
                            if (data1.ans != null && data1.ans != '') {
                                if (Number(data1.type_of_ans) != 5 && Number(data1.type_of_ans) != 5) {
                                    // answer.ans =
                                    // typeof data1.ans != "string"
                                    //   ? data1.ans
                                    //   : data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                                    if (typeof data1.ans != "string") {
                                        answer.ans = data1.ans;
                                    }
                                    else {
                                        answer.ans = data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                                    }
                                    if (typeof answer.ans == "string") {
                                        // let removeSpace = answer.ans.replace(/\s/g, '')
                                        // let rmoveQute = removeSpace.replace('"{"', '{"')
                                        answer.ans = JSON.parse(answer.ans);
                                        console.log(answer.ans, 'answer.ans');
                                    }
                                    else {
                                        answer.ans = answer.ans;
                                    }
                                    // answer.ans =
                                    //   typeof answer.ans == "string"
                                    //     ? JSON.parse(answer.ans)
                                    //     : answer.ans;
                                    if (answer.ans.ans != undefined) {
                                        answer.ans.ans.forEach((element) => {
                                            element["checked"] = false;
                                        });
                                    }
                                }
                            }
                            return answer;
                        }
                    }
                });
                this.sectionList[index]["status"] = "inactive";
                this.sectionList[index]["questionList"] = questions;
                this.sectionList[index]["isAnswerd"] = false;
                this.sectionList[index]["count"] = 0;
            });
            console.log(this.sectionList);
            this.loading.dismiss();
            this.sectionList.forEach((data) => {
                this.question_no = 0;
                let removedata = [];
                debugger;
                data.questionList.filter((question, index) => {
                    if (Number(question.subject_id) != 0) {
                        let subjects = question.subject_id.split(",").map(i => Number(i));
                        if (subjects.includes(this.selectedSubject)) {
                            this.question_no = this.question_no + 1;
                            question.question_no = this.question_no;
                            return question;
                        }
                        else {
                            removedata.push(index);
                        }
                    }
                    else if (Number(question.subject_id) == 0) {
                        this.question_no = this.question_no + 1;
                        question.question_no = this.question_no;
                        return question;
                    }
                });
                for (var i = removedata.length - 1; i >= 0; i--) {
                    data.questionList.splice(removedata[i], 1);
                }
            });
            this.sectionList = this.sectionList.filter((data) => {
                if (data.questionList.length > 0) {
                    data.questionList = data.questionList.sort((a, b) => (Number(a.priority) > Number(b.priority)) ? 1 : ((Number(b.priority) > Number(a.priority)) ? -1 : 0));
                    return data;
                }
            });
            console.log(this.sectionList, 'this.sectionList');
            let apiData = {
                pageNo: "22",
                pageName: "kgbvNsbavInspection",
                apiResponse: {
                    records: {
                        sectionList: a,
                        methodologyQuestions: this.methodologyQuestions,
                        customizeSectionList: this.sectionList,
                    },
                },
                correctedDetails: {
                    methodologyQuestions: this.methodologyQuestions,
                    customizeSectionList: this.sectionList,
                    headerClicked: false,
                    currentIndex: 0,
                    selectedSection: "",
                },
            };
            this.storeDetail.pages.pageData[21] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            this.headerClicked = true;
            this.currentIndex = 0;
            this.selectedSection = this.currentIndex;
            // if(this.checkedAssessments == 'Assessments'){
            //   this.sectionList = this.sectionList.filter((data)=> Number(data.sec_id) == 29)  
            // }else{
            //   this.sectionList = this.sectionList.filter((data)=> Number(data.sec_id) != 7 && Number(data.sec_id) != 14 && Number(data.sec_id) != 3 && Number(data.sec_id) != 10 && Number(data.sec_id) != 19 && Number(data.sec_id) != 20 && Number(data.sec_id) != 21 && Number(data.sec_id) != 22 && Number(data.sec_id) != 23 && Number(data.sec_id) != 24 && Number(data.sec_id) != 26&& Number(data.sec_id) != 27&& Number(data.sec_id) != 29 && Number(data.sec_id) != 30 && Number(data.sec_id) != 31 && Number(data.sec_id) != 32 && Number(data.sec_id) != 33)
            // }
            // this.sectionList = this.sectionList.filter((data)=> Number(data.sec_id) == 30 && Number(data.sec_id) == 31 && Number(data.sec_id) == 32 && Number(data.sec_id) == 33)
            this.sectionList[this.currentIndex].status = "active";
            this.sectionName = this.sectionList[this.currentIndex].sec_name;
            this.storeDetail.pages.pageData[21].correctedDetails.selectedSection = this.selectedSection;
            this.storeDetail.pages.pageData[21].correctedDetails.headerClicked = this.headerClicked;
            this.storeDetail.pages.pageData[21].correctedDetails.currentIndex = this.currentIndex;
            this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        });
    }
    toggleAccordion1(name, sectionIndex, index) {
        this.sectionName = name;
        this.selectedSection = sectionIndex;
        this.sectionList.forEach((data, currentindex) => {
            if (currentindex == index) {
                this.sectionList[index]["status"] = "active";
                this.currentIndex = index;
                this.storeDetail.pages.pageData[21].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[21].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[21].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            }
            else {
                this.sectionList[currentindex]["status"] = "inactive";
                this.storeDetail.pages.pageData[21].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[21].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[21].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            }
        });
    }
    isNonSelectedClass_present(classList, classroomSelection_ClassList_Ids) {
        let Ques_ClassList = classList.split(",");
        let allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
        let getIndex = allSelectionClassList_Ids.indexOf(this.selectedClass);
        if (getIndex != -1)
            allSelectionClassList_Ids.splice(getIndex, 1);
        let isNon_SelectedPresent;
        if (allSelectionClassList_Ids.length && Ques_ClassList.length) {
            isNon_SelectedPresent = allSelectionClassList_Ids.includes(Ques_ClassList[0]);
        }
        else {
            isNon_SelectedPresent = false;
        }
        return isNon_SelectedPresent;
    }
    removeSubQuestions(question_RefId, question_Id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let temp = [];
            yield this.sectionList[this.selectedSection].questionList.forEach((question, questionIndex) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (question.parent_id == question_Id) {
                    debugger;
                    temp.splice(0, 0, questionIndex);
                    yield this.removeSubQuestions(question.ob_qus_id, question.ob_qus_id);
                }
            }));
            temp.forEach((questionIndex, arrayIndex) => {
                this.sectionList[this.selectedSection].questionList.splice(questionIndex, 1);
            });
            yield this.sectionList.forEach((section, index) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (section.questionList.length == 0) {
                    this.sectionList.splice(index);
                }
            }));
            this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        });
    }
    _initialiseTranslation() {
        this._translate.get("teaching").subscribe((res) => {
            this.teaching = res;
        });
        this._translate.get("methodology").subscribe((res) => {
            this.methodology = res;
        });
        this._translate.get("fillAnswer").subscribe((res) => {
            this.fillAnswer = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("save").subscribe((res) => {
            this.save = res;
        });
        this._translate.get("kgbvKgbv").subscribe((res) => {
            this.kgbvKgbv = res;
        });
        this._translate.get("kgbvnsbav").subscribe((res) => {
            this.kgbvnsbav = res;
        });
        this._translate.get("kgbvInspec").subscribe((res) => {
            this.kgbvInspec = res;
        });
    }
    moveIndex() {
        let logDataNew = {
            username: localStorage.getItem("username"),
            udise_code: localStorage.getItem("udise_code"),
            observation_id: localStorage.getItem("observation_id"),
            form_name: "Class room observation L" + this.currentIndex,
            action_name: "next & back",
            data: "Next Section",
            completion_percentage: this.progressValue
        };
        this.apiService.setActivityLog(logDataNew).subscribe((response) => {
        }, (error) => {
            this._alertService.showAlert("SOMETHING WENT WRONG");
        });
        this.pageDetail = this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList;
        let questionList = this.pageDetail[this.selectedSection].questionList;
        let statusCheck = questionList.every(this.checkValid);
        if (statusCheck) {
            this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            if (this.currentIndex <= this.sectionList.length - 2) {
                this.sectionList[this.currentIndex].status = "inactive";
                this.currentIndex = this.currentIndex + 1;
                this.sectionList[this.currentIndex].status = "active";
                this.selectedSection = this.currentIndex;
                this.sectionName = this.sectionList[this.currentIndex].sec_name;
                this.storeDetail.pages.pageData[21].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[21].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            }
            else {
                let level = localStorage.getItem("selectedlevel");
                if (Number(level) > 1) {
                    let level = localStorage.getItem("selectedlevel");
                    let getfinaldata = localStorage.getItem("finaldata");
                    let getteacherlength = localStorage.getItem("teacherlength");
                    if (level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "1") } });
                    }
                    else if (level == '1' && !getfinaldata) {
                        // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);    
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "1") } });
                    }
                    else {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "1") } });
                    }
                }
                else {
                    if (this.storeDetail.pages.pageData[5].correctedDetails.class_id == '9' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '10' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '11' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '12') {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "1") } });
                    }
                    else {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "1") } });
                    }
                }
            }
        }
        else {
            this._alertService.showAlert(this.fillAnswer);
        }
    }
    backIndex() {
        let logDataNew = {
            username: localStorage.getItem("username"),
            udise_code: localStorage.getItem("udise_code"),
            observation_id: localStorage.getItem("observation_id"),
            form_name: "Class room observation L" + this.currentIndex,
            action_name: "next & back",
            data: "Back Section",
            completion_percentage: this.progressValue
        };
        this.apiService.setActivityLog(logDataNew).subscribe((response) => {
        }, (error) => {
            this._alertService.showAlert("SOMETHING WENT WRONG");
        });
        if (this.currentIndex == 0) {
            this.headerClicked = false;
        }
        if (this.headerClicked == true) {
            if (this.currentIndex < this.sectionList.length) {
                if (this.currentIndex != 0) {
                    this.sectionList[this.currentIndex].status = "inactive";
                    this.currentIndex = this.currentIndex - 1;
                    this.sectionList[this.currentIndex].status = "active";
                    this.selectedSection = this.currentIndex;
                    this.sectionName = this.sectionList[this.currentIndex].sec_name;
                    this.storeDetail.pages.pageData[21].correctedDetails.selectedSection = this.selectedSection;
                    this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.pageData[21].correctedDetails.currentIndex = this.currentIndex;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                }
                else {
                    this.headerClicked = false;
                    this.storeDetail.pages.pageData[21].correctedDetails.headerClicked = this.headerClicked;
                    this.storeDetail.pages.pageData[21].correctedDetails.currentIndex = this.currentIndex;
                    this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                }
            }
        }
        else {
            let selectedClass = this.storeDetail.pages.pageData[5].correctedDetails;
            if (this.storeDetail.pages.pageData[21].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd == true) {
                // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "metho_section_status": localStorage.setItem("metho_section_status", "1")}});  
                let value = Number(localStorage.getItem("kgbv_section_status"));
                if (value == 0) {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "0") } });
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "1") } });
                }
            }
            else {
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "kgbv_section_status": localStorage.setItem("kgbv_section_status", "0") } });
            }
        }
    }
    checkValid(element, index, array) {
        let status = true;
        let answerType = element.type_of_ans;
        if (answerType == "1") {
            if (element.selectedAnswer.answer_id == undefined) {
                status = false;
            }
            else {
                if (element.selectedAnswer.answer_id == "") {
                    status = false;
                }
            }
        }
        else if (answerType == "2") {
            if (!element.selectedAnswer.length) {
                status = false;
            }
        }
        else {
            if (element.selectedAnswer == "") {
                status = false;
            }
        }
        return status;
    }
};
KgbvNsbavPage.ctorParameters = () => [
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService }
];
KgbvNsbavPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-kgbv-nsbav',
        template: _raw_loader_kgbv_nsbav_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_kgbv_nsbav_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KgbvNsbavPage);



/***/ }),

/***/ 81713:
/*!************************************************************!*\
  !*** ./src/app/pages/tnvn/kgbv-nsbav/kgbv-nsbav.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n.list-md-lines-none .item {\n  --background: none ;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n  padding-left: 2px;\n}\n.inactive {\n  display: none;\n}\n.inScroll {\n  height: 0px;\n}\n.Scroll {\n  height: calc(100% - 80px) !important;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n  font-weight: 300px;\n  border-radius: 10px;\n  margin: 10px;\n  color: #000000;\n}\n.act {\n  font-size: 12px;\n  font-weight: 300;\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #8B67B3;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: auto;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  color: #ffffff;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtnYnYtbnNiYXYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRVA7QUFFQTtFQUNHLGtCQUFBO0FBQ0g7QUFDQztFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSDtBQUVDLHVEQUFBO0FBQ0E7RUFDRyx1QkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUFDUDtBQUdDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFKO0FBSUM7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFJSTtFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGUDtBQU9DO0VBQ0UsbUJBQUE7QUFKSDtBQU9DOztvQkFBQTtBQUdBO0VBQ0csY0FBQTtFQUNBLGlCQUFBO0FBSko7QUFNQztFQUNHLGFBQUE7QUFISjtBQUtDO0VBQ0UsV0FBQTtBQUZIO0FBSUM7RUFDQyxvQ0FBQTtBQURGO0FBR0M7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBQUg7QUFFQztFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRDtBQUNDO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDSDtBQUNDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUNIO0FBRUM7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBQUg7QUFHQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFESDtBQUlDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUZIO0FBS0M7RUFDRyxhQUFBO0FBRko7QUFLQzs7Ozs7RUFLRSxrQkFBQTtBQUZIO0FBS0E7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRkg7QUFNQTtFQUNHLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhIIiwiZmlsZSI6ImtnYnYtbnNiYXYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMWVtIDAuMzVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4zNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsMjEwLDIxMCwxKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXHJcbiAgICBzcGFuIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICB0b3A6IDEuMmVtO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICB9XHJcbiB9XHJcblxyXG5zZWN0aW9ue1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIHNlY3Rpb24gaDJ7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICBmb250LWZhbWlseTogQXJpYWw7XHJcbiB9XHJcblxyXG5cclxuIC8qIEhlcmUgd2UgZGVmaW5lIHRoZSBhY3R1YWwgJ21lbnUnIGFuZCBpdHMgJ29wdGlvbnMnICovXHJcbiAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyZW0gYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gfVxyXG4gXHJcbiBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiB9XHJcblxyXG5cclxuIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDEpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLCAyMTAsIDIxMCwgMSk7XHJcblxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gfVxyXG5cclxuIC5saXN0LW1kLWxpbmVzLW5vbmUgLml0ZW17XHJcbiAgIC0tYmFja2dyb3VuZDogbm9uZVxyXG4gfVxyXG5cclxuIC8qIEZvbGxvd2luZyBjbGFzc2VzIGRpc3BsYXkvaGlkZSB0aGUgJ21lbnUnXHJcbiAvLyBiYXNlZCBvbiB0aGUgc3RhdGUgY2hhbmdlIGRldGVjdGlvbiBpbiB0aGVcclxuIC8vIGNvbXBvbmVudCBjbGFzcyAqL1xyXG4gLmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gfVxyXG4gLmluYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiAuaW5TY3JvbGx7XHJcbiAgIGhlaWdodDogMHB4OyAgXHJcbiB9XHJcbiAuU2Nyb2xse1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gODBweCkgIWltcG9ydGFudDsgIFxyXG59XHJcbiAubWV0aG9kLWhlYWRlci1vbmV7XHJcbiAgIGJhY2tncm91bmQ6ICNCQjZCRDk7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuIH1cclxuIC5pbmFjdHtcclxuIGZvbnQtc2l6ZTogMTJweDsgXHJcbiBmb250LXdlaWdodDogMzAwcHg7XHJcbiBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gbWFyZ2luOiAxMHB4O1xyXG4gY29sb3I6ICMwMDAwMDA7IFxyXG4gfVxyXG4gLmFjdHtcclxuICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgLy8gbWluLXdpZHRoOiA3MCU7ICAgXHJcbiAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgIG1hcmdpbjogMTBweDtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjdCMzsgICBcclxuICAgfVxyXG4gLm1ldGhvZC1oZWFkZXItdHdve1xyXG5cclxuICAgYmFja2dyb3VuZDogIzU2Q0NGMjtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLXRocmVle1xyXG5cclxuICAgYmFja2dyb3VuZDogI0YyOTk0QTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLWZvdXJ7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNzk4NUYyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZml2ZXtcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM0QUYyQzA7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiB9XHJcblxyXG4gLnNlY3Rpb24tMSBpb24taWNvbixcclxuIC5zZWN0aW9uLTIgaW9uLWljb24sXHJcbiAuc2VjdGlvbi0zIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNCBpb24taWNvbixcclxuIC5zZWN0aW9uLTUgaW9uLWljb257IFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG5cclxuLmlvbi1jaGVjay1pbWcuYWN0aXZle1xyXG4gICB3aWR0aDogMTVweDsgICBcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBib3JkZXItcmFkaXVzOiA1MCU7IFxyXG4gICB0b3A6IGF1dG87XHJcbiAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG5pb24taWNvbiAgeyBcclxuICAgei1pbmRleDogMjI7ICAgXHJcbiAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICBmb250LXNpemU6IDMwcHg7XHJcbn0gXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 98925:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/kgbv-nsbav/kgbv-nsbav.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{kgbvKgbv}} <br />{{kgbvnsbav}} {{kgbvInspec}} </b>\r\n          </ion-title>\r\n        </ion-col>               \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\" scrollX=\"false\" scrollY=\"false\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>  \r\n\r\n    <div style=\"border:none;background-color:none\">\r\n      <ion-tabs >          \r\n        <ion-tab-bar style=\"background-color:#e6deed;overflow-x:scroll;border:none;justify-content:start;\" slot=\"bottom\" > \r\n          <ng-container *ngFor=\"let methodology of sectionList; let i = index\">\r\n            <ion-tab-button *ngIf=\"methodology\" [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inact': 'act'\"  (click)=\"this.headerClicked = true;toggleAccordion1(methodology.sec_name,i,i)\" >  \r\n              <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology.status == 'active' &&{'color':'#ffffff','padding-left':'10px'}\">{{methodology?.sec_name}} ({{methodology?.count}}/{{methodology?.questionList.length}})</ion-label><!--*ngIf=\"languageType=='en'\"-->  \r\n              <!-- <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology.status == 'active'  &&{'color':'#ffffff','padding-left':'10px'}\" *ngIf=\"languageType=='ta'\">{{methodology?.sec_name_tamil}} ({{methodology?.count}}/{{methodology?.questionList.length}})</ion-label>   -->\r\n              \r\n            </ion-tab-button>\r\n          </ng-container>                                                        \r\n        </ion-tab-bar>  \r\n      </ion-tabs>   \r\n    </div>      \r\n   \r\n      <section      \r\n      *ngFor=\"let methodology of sectionList; let i = index\" [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inScroll': 'Scroll'\" style=\"overflow-y: scroll !important;background-color:#e6deed!important\"\r\n    >    \r\n\r\n      <ng-container *ngIf=\"methodology.questionList\">\r\n        <ng-container *ngIf=\"methodology.questionList.length > 0\">                 \r\n        \r\n          <div\r\n            [ngClass]=\"methodology.status\"            \r\n            class=\"method-body h-100\"\r\n            style=\"border:none;background:#e6deed\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>            \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          >{{back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <!-- [disabled] = \"!this.statusCheck\" -->\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          >{{save}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_kgbv-nsbav_kgbv-nsbav_module_ts-es2015.js.map