(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_flhmethodology_flhmethodology_module_ts"],{

/***/ 51061:
/*!***********************************************************************!*\
  !*** ./src/app/pages/tnvn/flhmethodology/flhmethodology.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlhMethodologyComponent": function() { return /* binding */ FlhMethodologyComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_flhmethodology_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./flhmethodology.component.html */ 54471);
/* harmony import */ var _flhmethodology_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flhmethodology.component.scss */ 84959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);











let FlhMethodologyComponent = class FlhMethodologyComponent {
    constructor(_router, apiService, _translate, _alertService, ionicStore, loading, el) {
        this._router = _router;
        this.apiService = apiService;
        this._translate = _translate;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this.loading = loading;
        this.el = el;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.headerClicked = false;
        this.currentIndex = 0;
        this.question_no = 0;
        this.methodologyQuestions = [];
        this.sectionList = [];
        this.questionList = [];
        this.tempQuestions = [];
        this.finalAnswerdList = {};
        this.subQuestionNo = 0;
        this.methodologyData = [];
        this.displayCounter = (selectedAnswerDetail) => {
            let answerDetail = selectedAnswerDetail;
            let currentSectionId = this.sectionList[this.selectedSection].sec_id;
            let answerdQuestion_SectionId = answerDetail.question.sec_id;
            if (currentSectionId == answerdQuestion_SectionId) {
                let answerType = answerDetail.question.type_of_ans;
                switch (answerType) {
                    case "0": {
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
                                    answerInfo == "none" ||
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
                    default: {
                        break;
                    }
                }
                this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                this.ionicStore.setStoreData(this.storeDetail);
                if (answerDetail.question.type_of_ans != "2") {
                    this.removeSubQuestions(answerDetail.question.ref_id, answerDetail.question.ob_qus_id);
                }
                else {
                    let status1 = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;
                    if (status1) {
                        this.removeSubQuestions(answerDetail.question.ref_id, answerDetail.question.ob_qus_id);
                    }
                }
                if (answerDetail.answer.child_qus != undefined) {
                    if (answerDetail.answer.child_qus.length > 0) {
                        this.subQuestionNo = 0;
                        let status = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;
                        if (answerDetail.question.type_of_ans) {
                            answerDetail.answer.child_qus.forEach((datad, childQuestion_Index) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                let newQuestion = yield this.methodologyQuestions.find((data1, index) => data1.ref_id == datad.toString());
                                if (newQuestion != undefined) {
                                    yield this.addSubQuestions(newQuestion, answerDetail.questionIndex, answerDetail.question, answerDetail.answerIndex);
                                }
                            }));
                        }
                        else {
                            let status = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;
                            if (status) {
                                answerDetail.answer.child_qus.forEach((datad, childQuestion_Index) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                    let newQuestion = yield this.methodologyQuestions.find((data1, index) => data1.ref_id == datad.toString());
                                    if (newQuestion != undefined) {
                                        yield this.addSubQuestions(newQuestion, answerDetail.questionIndex, answerDetail.question, answerDetail.answerIndex);
                                    }
                                }));
                            }
                        }
                    }
                }
            }
        };
        this.addSubQuestions = (newQuestion, questionIndex, parentQuestion, answerIndex = "") => {
            let i = 0;
            let temp_Questions = JSON.parse(JSON.stringify(newQuestion));
            if (temp_Questions.ans != null) {
                temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
                temp_Questions.ans = JSON.parse(temp_Questions.ans);
            }
            if ((this.classType == temp_Questions.classtype ||
                temp_Questions.classtype == "3") &&
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
                this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                this.ionicStore.setStoreData(this.storeDetail);
            }
        };
        this.isClassPresent = (classList, classroomSelection_ClassList_Ids) => {
            let Ques_ClassList = classList.split(",");
            let status = Ques_ClassList.includes(this.selectedClass);
            return status;
        };
    }
    ngOnInit() {
        this.progressValue = Math.round(((6 - 2) / 12) * 100);
        this.appLanguage();
        this.loading.present();
        this.ionicStore.getOffStorage().then((response) => {
            this.masterApiResponse = response;
            this.ionicStore.getStoreData().then((response) => {
                this.storeDetail = response;
                this.storeDetail.pages.currentPage = "teachingMethodology";
                this.ionicStore.setStoreData(this.storeDetail);
                this.classType = this.storeDetail.pages.pageData[5].pageDetails.classType;
                this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0].class_id;
                this.classroomSelection_ClassList = this.storeDetail.pages.pageData[5].correctedDetails;
                this.classroomSelection_ClassList_Ids = this.storeDetail.pages.pageData[5].correctedDetails.map((data) => {
                    return data.class_id;
                });
                let classDetail = this.storeDetail.pages.pageData[5].pageDetails;
                if (this.storeDetail.pages.pageData[7] == undefined) {
                    this.getMethodology(classDetail.classType, classDetail.selectedClass[0].class_id, this.classroomSelection_ClassList_Ids, this.classroomSelection_ClassList);
                }
                else {
                    this.sectionList = this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
                    this.methodologyQuestions = this.storeDetail.pages.pageData[7].correctedDetails.methodologyQuestions;
                    this.selectedSection = this.storeDetail.pages.pageData[7].correctedDetails.selectedSection;
                    this.headerClicked = this.storeDetail.pages.pageData[7].correctedDetails.headerClicked;
                    this.currentIndex = this.storeDetail.pages.pageData[7].correctedDetails.currentIndex;
                    this.loading.dismiss();
                }
            });
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
        this._translate.get("classroom").subscribe((res) => {
            this.classroom = res;
        });
        this._translate.get("Practices").subscribe((res) => {
            this.Practices = res;
        });
        this._translate.get("teaching").subscribe((res) => {
            this.teaching = res;
        });
        this._translate.get("methodology").subscribe((res) => {
            this.methodology = res;
        });
        this._translate.get("fillAnswer").subscribe((res) => {
            this.fillAnswer = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
    }
    getMethodology(classType, classId, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
        let classDetail = {
            class_id: classId,
            classtype: classType,
        };
        let tempsectionList = [];
        let tempQuestionList = [];
        if (this.languageType == "en") {
            tempsectionList = this.masterApiResponse.methodologys.filter((data) => {
                if (data.lang == this.languageType) {
                    return data;
                }
            });
            let tempQuesEN;
            tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data) => {
                if (data.lang == this.languageType) {
                    return data;
                }
            });
        }
        else if (this.languageType == "ta") {
            tempsectionList = this.masterApiResponse.methodologys.filter((data) => {
                if (data.lang == this.languageType) {
                    return data;
                }
            });
            let tempQuesEN;
            tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data) => {
                if (data.lang == this.languageType) {
                    return data;
                }
            });
        }
        else {
        }
        let methodologyQuesList = [];
        tempQuestionList.forEach((data) => {
            let quesClassList = data.class.split(",");
            let allSelectionClassList = classroomSelection_ClassList;
            let allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
            let status = quesClassList.includes(this.selectedClass);
            let isNon_SelectedPresent;
            if (allSelectionClassList_Ids.length && quesClassList.length) {
                isNon_SelectedPresent = allSelectionClassList_Ids.filter((ac) => quesClassList.includes(ac));
                if (isNon_SelectedPresent.length > 0 || status) {
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
                (data.classtype == classType || data.classtype == "3")) {
                if (data.sec_id == "8" || data.sec_id == "15") {
                    if (status) {
                        methodologyQuesList.push(data);
                    }
                }
                else if (data.sec_id == "3" || data.sec_id == "10") {
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
        let a = JSON.parse(JSON.stringify(records.methodology));
        this.methodologyQuestions = records.methodology_questions;
        this.methodologyQuestions.forEach((data) => {
            let selectedAnswer;
            let answerType = data.type_of_ans;
            switch (answerType) {
                case "0": {
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
                default: {
                    break;
                }
            }
            data["selectedAnswer"] = selectedAnswer;
        });
        this.sectionList = records.methodology;
        this.sectionList.forEach((data, index) => {
            this.question_no = 0;
            let questions = this.methodologyQuestions.filter((data1, index1) => {
                if (data.sec_id == data1.sec_id && data1.parent_id == "-1") {
                    const answer = data1;
                    if (data1.sec_id == "7" || data1.sec_id == "14") {
                        if (data1.class.includes(classId)) {
                            if (data1.ans != null) {
                                answer.ans = data1.ans
                                    .replace(/^\s+|\s+$/g, "")
                                    .replace(/\n/g, "");
                                answer.ans = JSON.parse(answer.ans);
                                answer.ans.ans.forEach((element) => {
                                    element["checked"] = false;
                                });
                            }
                            this.question_no = this.question_no + 1;
                            answer.question_no = this.question_no;
                            return answer;
                        }
                    }
                    else {
                        if (data1.ans != null) {
                            answer.ans =
                                typeof data1.ans != "string"
                                    ? data1.ans
                                    : data1.ans.replace(/^\s+|\s+$/g, "").replace(/\n/g, "");
                            answer.ans =
                                typeof answer.ans == "string"
                                    ? JSON.parse(answer.ans)
                                    : answer.ans;
                            answer.ans.ans.forEach((element) => {
                                element["checked"] = false;
                            });
                        }
                        this.question_no = this.question_no + 1;
                        answer.question_no = this.question_no;
                        return answer;
                    }
                }
            });
            this.sectionList[index]["status"] = "inactive";
            this.sectionList[index]["questionList"] = questions;
            this.sectionList[index]["isAnswerd"] = false;
        });
        this.loading.dismiss();
        let apiData = {
            pageNo: "8",
            pageName: "teachingMethodology",
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
        this.storeDetail.pages.pageData[7] = apiData;
        this.ionicStore.setStoreData(this.storeDetail);
    }
    toggleAccordion1(name, sectionIndex, index) {
        this.sectionName = name;
        this.selectedSection = sectionIndex;
        this.sectionList.forEach((data, currentindex) => {
            if (currentindex == index) {
                this.sectionList[index]["status"] = "active";
                this.currentIndex = index;
                this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
            }
            else {
                this.sectionList[currentindex]["status"] = "inactive";
                this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
            }
        });
    }
    broadcastName(name) {
        this.change.emit(name);
    }
    removeSubQuestions(question_RefId, question_Id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let temp = [];
            yield this.sectionList[this.selectedSection].questionList.forEach((question, questionIndex) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (question.parent_id == question_Id) {
                    temp.splice(0, 0, questionIndex);
                    yield this.removeSubQuestions(question.ref_id, question.ob_qus_id);
                }
            }));
            temp.forEach((questionIndex, arrayIndex) => {
                this.sectionList[this.selectedSection].questionList.splice(questionIndex, 1);
            });
            this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
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
    moveIndex() {
        if (this.headerClicked == false) {
            this.headerClicked = true;
            this.currentIndex = 0;
            this.selectedSection = this.currentIndex;
            this.sectionList[this.currentIndex].status = "active";
            this.sectionName = this.sectionList[this.currentIndex].sec_name;
            this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
            this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
            this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
            this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
        }
        else {
            this.pageDetail = this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList;
            let questionList = this.pageDetail[this.selectedSection].questionList;
            let statusCheck = questionList.every(this.checkValid);
            if (statusCheck) {
                this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
                this.ionicStore.setStoreData(this.storeDetail);
                if (this.currentIndex <= this.sectionList.length - 2) {
                    this.sectionList[this.currentIndex].status = "inactive";
                    this.currentIndex = this.currentIndex + 1;
                    this.sectionList[this.currentIndex].status = "active";
                    this.selectedSection = this.currentIndex;
                    this.sectionName = this.sectionList[this.currentIndex].sec_name;
                    this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
                    this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                    this.ionicStore.setStoreData(this.storeDetail);
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/assessment"]);
                }
            }
            else {
                this._alertService.showAlert(this.fillAnswer);
            }
        }
    }
    backIndex() {
        if (this.headerClicked == true) {
            if (this.currentIndex < this.sectionList.length) {
                if (this.currentIndex != 0) {
                    this.sectionList[this.currentIndex].status = "inactive";
                    this.currentIndex = this.currentIndex - 1;
                    this.sectionList[this.currentIndex].status = "active";
                    this.selectedSection = this.currentIndex;
                    this.sectionName = this.sectionList[this.currentIndex].sec_name;
                    this.storeDetail.pages.pageData[7].correctedDetails.selectedSection = this.selectedSection;
                    this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                    this.ionicStore.setStoreData(this.storeDetail);
                }
                else {
                    this.headerClicked = false;
                    for (let sectionIndex in this.sectionList) {
                        this.sectionList[sectionIndex].status = "inactive";
                    }
                    this.storeDetail.pages.pageData[7].correctedDetails.headerClicked = this.headerClicked;
                    this.storeDetail.pages.pageData[7].correctedDetails.currentIndex = this.currentIndex;
                    this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    this.ionicStore.setStoreData(this.storeDetail);
                }
            }
        }
        else {
            let selectedClass = this.storeDetail.pages.pageData[6].correctedDetails;
            if (selectedClass.length == 1) {
                this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
            }
            else {
                this._router.navigate(["/tnvntabs/page-route/observation/observationTeaching"]);
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
            if (element.selectedAnswer.answer.toLowerCase() == "other" ||
                element.selectedAnswer.answer == "மற்றவை") {
                if (!element.selectedAnswer.otherAns ||
                    element.selectedAnswer.otherAns == "") {
                    status = false;
                }
            }
        }
        else if (answerType == "2") {
            if (!element.selectedAnswer.length) {
                status = false;
            }
            const otherFound = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(element.selectedAnswer, (sa) => sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை");
            if (otherFound) {
                if (!otherFound.otherAns || otherFound.otherAns == "") {
                    status = false;
                }
            }
        }
        else {
            if (element.selectedAnswer == "") {
                status = false;
            }
        }
        return status;
    }
    ionViewWillLeave() { }
    just() { }
};
FlhMethodologyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef }
];
FlhMethodologyComponent.propDecorators = {
    headersize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["headersize", { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef },] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
FlhMethodologyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-flh-methodology",
        template: _raw_loader_flhmethodology_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_flhmethodology_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FlhMethodologyComponent);



/***/ }),

/***/ 3015:
/*!********************************************************************!*\
  !*** ./src/app/pages/tnvn/flhmethodology/flhmethodology.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlhMethodologyModule": function() { return /* binding */ FlhMethodologyModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _flhmethodology_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flhmethodology.component */ 51061);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _flhmethodology_component__WEBPACK_IMPORTED_MODULE_0__.FlhMethodologyComponent
    }
];
let FlhMethodologyModule = class FlhMethodologyModule {
};
FlhMethodologyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_flhmethodology_component__WEBPACK_IMPORTED_MODULE_0__.FlhMethodologyComponent]
    })
], FlhMethodologyModule);



/***/ }),

/***/ 84959:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tnvn/flhmethodology/flhmethodology.component.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: 4px;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaG1ldGhvZG9sb2d5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRVA7QUFFQTtFQUNHLGtCQUFBO0FBQ0g7QUFDQztFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSDtBQUVDLHVEQUFBO0FBQ0E7RUFDRyx1QkFBQTtFQUNBLFVBQUE7QUFDSjtBQUNJO0VBQ0csY0FBQTtFQUNBLFlBQUE7QUFDUDtBQUlDO0VBQ0csa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQURKO0FBS0M7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBRko7QUFLSTtFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIUDtBQVFDOztvQkFBQTtBQUdBO0VBQ0csY0FBQTtBQUxKO0FBT0M7RUFDRyxhQUFBO0FBSko7QUFNQztFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFISDtBQUtDO0VBQ0EsZUFBQTtBQUZEO0FBSUM7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkg7QUFLQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFISDtBQU1DO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUpIO0FBT0M7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBTEg7QUFRQztFQUNHLGFBQUE7QUFMSjtBQVFDOzs7OztFQUtFLGtCQUFBO0FBTEg7QUFRQTtFQUNHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBTEg7QUFTQTtFQUNHLFdBQUE7RUFDQSxRQUFBO0FBTkgiLCJmaWxlIjoiZmxobWV0aG9kb2xvZ3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxZW0gMC4zNWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjM1ZW07XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMCwyMTAsMjEwLDEpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLyogRGVmaW5lIHRoZSBzdHlsZSBydWxlcyBmb3IgdGhlICdhcnJvdyBpY29ucycgKi9cclxuICAgIHNwYW4ge1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgcmlnaHQ6IDFlbTtcclxuICAgICAgIHRvcDogMS4yZW07XHJcbiAgICAgICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgIH1cclxuIH1cclxuXHJcbnNlY3Rpb257XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gc2VjdGlvbiBoMntcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuIH1cclxuXHJcblxyXG4gLyogSGVyZSB3ZSBkZWZpbmUgdGhlIGFjdHVhbCAnbWVudScgYW5kIGl0cyAnb3B0aW9ucycgKi9cclxuIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiB9XHJcblxyXG5cclxuIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuIH1cclxuXHJcblxyXG4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKTtcclxuXHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICByaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG4gLyogRm9sbG93aW5nIGNsYXNzZXMgZGlzcGxheS9oaWRlIHRoZSAnbWVudSdcclxuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxyXG4gLy8gY29tcG9uZW50IGNsYXNzICovXHJcbiAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiB9XHJcbiAuaW5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLW9uZXtcclxuICAgYmFja2dyb3VuZDogI0JCNkJEOTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG4gfVxyXG4gLmluYWN0e1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItdHdve1xyXG5cclxuICAgYmFja2dyb3VuZDogIzU2Q0NGMjtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLXRocmVle1xyXG5cclxuICAgYmFja2dyb3VuZDogI0YyOTk0QTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLWZvdXJ7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNzk4NUYyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZml2ZXtcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM0QUYyQzA7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiB9XHJcblxyXG4gLnNlY3Rpb24tMSBpb24taWNvbixcclxuIC5zZWN0aW9uLTIgaW9uLWljb24sXHJcbiAuc2VjdGlvbi0zIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNCBpb24taWNvbixcclxuIC5zZWN0aW9uLTUgaW9uLWljb257IFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG5cclxuLmlvbi1jaGVjay1pbWcuYWN0aXZle1xyXG4gICB3aWR0aDogMTVweDtcclxuICAgaGVpZ2h0OiAxNXB4O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgdG9wOiA0cHg7XHJcbiAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG5pb24taWNvbiAgeyBcclxuICAgei1pbmRleDogMjI7XHJcbiAgIHRvcDogNHB4O1xyXG5cclxufSBcclxuICJdfQ== */");

/***/ }),

/***/ 54471:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/flhmethodology/flhmethodology.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>FLH<br />{{ this.methodology }} <br /> </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>\r\n  <div class=\"p-0\">\r\n    <section\r\n      class=\"p-0 section-1 border\"\r\n      *ngFor=\"let methodology of sectionList; let i = index\"\r\n    >\r\n      <ng-container *ngIf=\"methodology.questionList\">\r\n        <ng-container *ngIf=\"methodology.questionList.length > 0\">\r\n          <ion-img\r\n            class=\"ion-check-img\"\r\n            [ngClass]=\"\r\n              this.headerClicked && methodology.isAnswerd\r\n                ? 'active'\r\n                : 'inactive'\r\n            \"\r\n            src=\"./assets/img/checkmark.png\"\r\n          ></ion-img>\r\n          <h2\r\n            id=\"sectionHeight\"\r\n            [ngClass]=\"\r\n              this.headerClicked && methodology.status != 'active'\r\n                ? 'inact'\r\n                : ''\r\n            \"\r\n            [ngStyle]=\"{ 'background-color': methodology.sec_header_color }\"\r\n            class=\"method-header-one text-white text-center\"\r\n          >\r\n            {{ methodology.sec_name }}\r\n          </h2>\r\n\r\n          <div\r\n            [ngClass]=\"methodology.status\"\r\n            [ngStyle]=\"{ 'background-color': methodology.sec_color }\"\r\n            class=\"method-body h-100\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_flhmethodology_flhmethodology_module_ts-es2015.js.map