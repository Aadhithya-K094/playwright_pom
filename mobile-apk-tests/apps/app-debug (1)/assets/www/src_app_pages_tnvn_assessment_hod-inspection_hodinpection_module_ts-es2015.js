(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_hod-inspection_hodinpection_module_ts"],{

/***/ 87694:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/hod-inspection/hod-inspection.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HodInspectionComponent": function() { return /* binding */ HodInspectionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_hod_inspection_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./hod-inspection.component.html */ 7992);
/* harmony import */ var _hod_inspection_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hod-inspection.component.scss */ 86791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);











let HodInspectionComponent = class HodInspectionComponent {
    /*-- Language Variables Ends --*/
    constructor(_router, apiService, _translate, _alertService, ionicStore, loading, el) {
        this._router = _router;
        this.apiService = apiService;
        this._translate = _translate;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this.loading = loading;
        this.el = el;
        this.myDate = (new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay());
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.headerClicked = true;
        this.currentIndex = 0;
        this.question_no = 0;
        this.methodologyQuestions = [];
        this.sectionList = [];
        this.questionList = [];
        this.tempQuestions = [];
        this.finalAnswerdList = {};
        this.subQuestionNo = 0; /* subQuestion Number .....*/
        this.methodologyData = [];
        this.progressValue = 65;
        this.displayCounter = (selectedAnswerDetail) => {
            debugger;
            let answerDetail = selectedAnswerDetail;
            let currentSectionId = this.sectionList[this.selectedSection].sec_id;
            let answerdQuestion_SectionId = answerDetail.question.sec_id;
            if (currentSectionId == answerdQuestion_SectionId) {
                let answerType = answerDetail.question.type_of_ans;
                switch (answerType) {
                    case "5": {
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                        break;
                    }
                    case "6": {
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
                                    answerInfo.toLowerCase() == "no" ||
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
                this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                /*  Check Question type here ...*/
                if (answerDetail.question.type_of_ans != "2") {
                    this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);
                }
                else {
                    let status1 = this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].ans.ans[answerDetail.answerIndex].checked;
                    if (status1) {
                        if (this.previousQuestion_id != answerDetail.question.ob_qus_id) {
                            this.removeSubQuestions(answerDetail.question.ob_qus_id, answerDetail.question.ob_qus_id);
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
                            this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        }
                        this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                    }
                }
                if (answerDetail.answer.child_qus != undefined) {
                    /*  Check Child is present or not for current Quesiton ....*/
                    if (answerDetail.answer.child_qus.length > 0) {
                        /*  Check Question type here ...*/
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
            this.pageDetail = this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
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
                    const otherFound = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(questionList[i].selectedAnswer, (sa) => sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை");
                }
                else {
                    if (questionList[i].selectedAnswer != "" && questionList[i].selectedAnswer != undefined) {
                        sum += 1;
                    }
                }
            }
            if (sum) {
                this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList[this.selectedSection].count = sum;
            }
            let statusCheckData = questionList.every(this.checkValid);
            if (statusCheckData) {
                this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
            }
            let statusCheck;
            let sectionList = this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
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
        };
        this.addSubQuestions = (newQuestion, questionIndex, parentQuestion, answerIndex = "") => {
            let questionexist = this.sectionList[this.selectedSection].questionList.some(function (el) {
                return el.ob_qus_id == newQuestion.ob_qus_id;
            });
            this.sectionList[this.selectedSection].questionList.forEach(() => {
            });
            if (questionexist != true) {
                let i = 0;
                let temp_Questions = JSON.parse(JSON.stringify(newQuestion));
                if (temp_Questions.ans != null && temp_Questions.ans) {
                    temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
                    temp_Questions.ans = JSON.parse(temp_Questions.ans);
                }
                if ((Number(this.classType) == Number(temp_Questions.classtype) ||
                    temp_Questions.classtype == "3") &&
                    (this.isClassPresent(temp_Questions.class, this.classroomSelection_ClassList_Ids) == true ||
                        this.isNonSelectedClass_present(temp_Questions.class, this.classroomSelection_ClassList_Ids) == true)) {
                    this.subQuestionNo++; /* subQuestion Number .....*/
                    let questionNo = this.subQuestionNo;
                    temp_Questions["question_no"] =
                        this.sectionList[this.selectedSection].questionList[questionIndex]
                            .question_no +
                            "." +
                            questionNo;
                    this.sectionList[this.selectedSection].questionList.splice(questionIndex + questionNo, 0, temp_Questions);
                    this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                }
            }
        };
        this.isClassPresent = (classList, classroomSelection_ClassList_Ids) => {
            let Ques_ClassList = classList.split(",");
            let status = Ques_ClassList.includes(this.selectedClass);
            return status;
        };
    }
    get myVar() {
        return this.languageType;
    }
    set myVar(value) {
        if (value != this.languageType) {
            this.languageType = value;
        }
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.present();
            this.appLanguage();
            let value = localStorage.getItem("hod_inspect_section_status");
            if (Number(value) == 0) {
                this._alertService.showAlert(this.schoolInspectionNote);
            }
            yield this.ionicStore.getOffStorage().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.masterApiResponse = response;
                if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                    this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                }
                this.loading.dismiss();
                yield this.ionicStore.getStoreData().then((response) => {
                    this.storeDetail = response;
                    if (this.storeDetail == null || this.storeDetail == undefined) {
                        this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                    }
                    this.storeDetail.pages.currentPage = "hodInspection";
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                    this.classType = this.storeDetail.pages.pageData[5].pageDetails.classType;
                    if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass) {
                        this.selectedSubject = this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
                        this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id;
                        this.classroomSelection_ClassList = this.storeDetail.pages.pageData[5].correctedDetails;
                        this.classroomSelection_ClassList_Ids = this.storeDetail.pages.pageData[5].correctedDetails.class_id;
                    }
                    let classDetail = this.storeDetail.pages.pageData[5].pageDetails;
                    // this.getMethodology(
                    //   classDetail.classType,            
                    //   this.classroomSelection_ClassList_Ids,
                    //   this.classroomSelection_ClassList
                    // );
                    /*  Check This Page is Registered or Not, If 'Registered' move to 'else' part...  */
                    if (this.storeDetail.pages.pageData[15] == undefined || this.storeDetail.pages.pageData[15] == null) {
                        this.getMethodology(classDetail.classType, this.classroomSelection_ClassList_Ids, this.classroomSelection_ClassList);
                    }
                    else {
                        this.sectionList = this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
                        this.methodologyQuestions = this.storeDetail.pages.pageData[15].correctedDetails.methodologyQuestions;
                        this.selectedSection = this.storeDetail.pages.pageData[15].correctedDetails.selectedSection;
                        this.headerClicked = this.storeDetail.pages.pageData[15].correctedDetails.headerClicked;
                        this.currentIndex = this.storeDetail.pages.pageData[15].correctedDetails.currentIndex;
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
                    }
                });
            }));
        });
    }
    appLanguage() {
        this.apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this.previouslanguage = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
            //this._alertService.showAlert(this.schoolInspectionNote)
            if (this.storeDetail) {
                this.classroomSelection_ClassList = this.storeDetail.pages.pageData[5].correctedDetails;
                this.classroomSelection_ClassList_Ids = this.storeDetail.pages.pageData[5].correctedDetails.class_id;
                let classDetail = this.storeDetail.pages.pageData[5].pageDetails;
                // this.getMethodology(
                //   classDetail.classType,          
                //   this.classroomSelection_ClassList_Ids,
                //   this.classroomSelection_ClassList
                // );
            }
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
        this._translate.get("schoolInspection").subscribe((res) => {
            this.schoolInspection = res;
        });
        this._translate.get("school").subscribe((res) => {
            this.school = res;
        });
        this._translate.get("schoolInspectionNote").subscribe((res) => {
            this.schoolInspectionNote = res;
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
        this._translate.get("save").subscribe((res) => {
            this.save = res;
        });
    }
    getMethodology(classType, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
        let classDetail = {
            classtype: classType,
        };
        let tempsectionList = [];
        let tempQuestionList = [];
        // if (this.languageType == "en") {      
        //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
        //     if(data.lang == this.languageType&& Number(data.sec_id) == 19 || Number(data.sec_id) == 20 || Number(data.sec_id) == 21){
        //       return data
        //     }
        //   });
        //   let tempQuesEN;      
        //   tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
        //     if(data.lang == "en"){
        //       return data
        //     }
        //   });        
        // } else if (this.languageType == "ta") {
        //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
        //     if(data.lang == this.languageType&& Number(data.sec_id) == 22 || Number(data.sec_id) == 23 || Number(data.sec_id) == 24){
        //       return data
        //     }
        //   });
        // let tempQuesEN;    
        // tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
        //   if(data.lang == "ta"){
        //     return data
        //   }
        // });      
        // }        
        tempsectionList = this.masterApiResponse.methodologys.filter((data) => {
            if (Number(data.sec_id) == 19 || Number(data.sec_id) == 20 || Number(data.sec_id) == 21) {
                return data;
            }
        });
        tempQuestionList = this.masterApiResponse.methodology_questions_lang;
        let methodologyQuesList = [];
        methodologyQuesList = tempQuestionList;
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
        this.sectionList = records.methodology;
        this.sectionList.forEach((data, index) => {
            this.question_no = 0;
            this.methodologyQuestions = this.methodologyQuestions.sort((a, b) => (Number(a.priority) > Number(b.priority)) ? 1 : ((Number(b.priority) > Number(a.priority)) ? -1 : 0));
            let questions = this.methodologyQuestions.filter((data1, index1) => {
                var _a;
                if (Number(data.sec_id) == Number(data1.sec_id) && data1.parent_id == "-1") {
                    delete data.score;
                    const answer = data1;
                    if (answer.ans) {
                        answer.ans = data1.ans
                            .replace(/^\s+|\s+$/g, "")
                            .replace(/\n/g, "");
                        answer.ans = JSON.parse(answer.ans);
                        (_a = answer.ans) === null || _a === void 0 ? void 0 : _a.ans.forEach((element) => {
                            element["checked"] = false;
                        });
                    }
                    this.question_no = this.question_no + 1;
                    answer.question_no = this.question_no;
                    return answer;
                }
            });
            if (this.storeDetail.pages.pageData[5].correctedDetails.class_id) {
                questions = questions.filter((data) => data.class.includes(this.storeDetail.pages.pageData[5].correctedDetails.class_id));
            }
            this.sectionList[index]["status"] = "inactive";
            this.sectionList[index]["questionList"] = questions;
            this.sectionList[index]["isAnswerd"] = false;
            this.sectionList[index]["count"] = 0;
        });
        let apiData = {
            pageNo: "16",
            pageName: "hodInspection",
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
        this.storeDetail.pages.pageData[15] = apiData;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
        this.headerClicked = true;
        this.currentIndex = 0;
        this.selectedSection = this.currentIndex;
        this.sectionList[this.currentIndex].status = "active";
        this.sectionName = this.sectionList[this.currentIndex].sec_name;
        this.sectionList.filter((data) => Number(data.sec_id) != 7 && Number(data.sec_id) != 14 && Number(data.sec_id) == 19 && Number(data.sec_id) == 20 && Number(data.sec_id) == 21);
        this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
        this.storeDetail.pages.pageData[15].correctedDetails.headerClicked = this.headerClicked;
        this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
        this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
    }
    /*  Toggle section active or inactive .....*/
    toggleAccordion1(name, sectionIndex, index) {
        this.sectionName = name;
        this.selectedSection = sectionIndex;
        this.sectionList.forEach((data, currentindex) => {
            if (currentindex == index) {
                this.sectionList[index]["status"] = "active";
                this.currentIndex = index;
                this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[15].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            }
            else {
                this.sectionList[currentindex]["status"] = "inactive";
                this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[15].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            }
        });
    }
    broadcastName(name) {
        this.change.emit(name);
    }
    /*  Removing SubQuestions here...... */
    removeSubQuestions(question_RefId, question_Id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let temp = [];
            yield this.sectionList[this.selectedSection].questionList.forEach((question, questionIndex) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (question.parent_id == question_Id) {
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
            this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
        });
    }
    isNonSelectedClass_present(classList, classroomSelection_ClassList_Ids) {
        if (this.selectedClass) {
            let Ques_ClassList = classList.split(",");
            // let allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
            // let getIndex = allSelectionClassList_Ids.indexOf(this.selectedClass);
            // if (getIndex != -1) allSelectionClassList_Ids.splice(getIndex, 1);
            // let isNon_SelectedPresent;
            // if (allSelectionClassList_Ids.length && Ques_ClassList.length) {
            //   isNon_SelectedPresent = allSelectionClassList_Ids.includes(
            //     Ques_ClassList[0]
            //   );
            // } else {
            //   isNon_SelectedPresent = false;
            // }
            let allSelectionClassList_Ids = classroomSelection_ClassList_Ids.toString();
            let getIndex = allSelectionClassList_Ids.indexOf(this.selectedClass.toString());
            // if (getIndex != -1) allSelectionClassList_Ids.splice(getIndex, 1);
            let isNon_SelectedPresent;
            if (allSelectionClassList_Ids.length && Ques_ClassList.length) {
                isNon_SelectedPresent = allSelectionClassList_Ids.includes(Ques_ClassList[0]);
            }
            else {
                isNon_SelectedPresent = false;
            }
            return isNon_SelectedPresent;
        }
        return true;
    }
    /* Move to Next Section or Page ....*/
    moveIndex() {
        let logDataNew = {
            username: localStorage.getItem("username"),
            udise_code: localStorage.getItem("udise_code"),
            observation_id: localStorage.getItem("observation_id"),
            form_name: "School room observation L" + this.currentIndex,
            action_name: "next",
            data: "Moving to next section",
            completion_percentage: this.progressValue
        };
        this.apiService.setActivityLog(logDataNew).subscribe((response) => {
        }, (error) => {
            this._alertService.showAlert("SOMETHING WENT WRONG");
        });
        this.pageDetail = this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList;
        let questionList = this.pageDetail[this.selectedSection].questionList;
        let statusCheck = questionList.every(this.checkValid);
        if (statusCheck) {
            this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            if (this.currentIndex <= this.sectionList.length - 2) {
                this.sectionList[this.currentIndex].status = "inactive";
                this.currentIndex = this.currentIndex + 1;
                this.sectionList[this.currentIndex].status = "active";
                this.selectedSection = this.currentIndex;
                this.sectionName = this.sectionList[this.currentIndex].sec_name;
                this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            }
            else {
                let level = localStorage.getItem("selectedlevel");
                if (Number(level) > 1) {
                    let level = localStorage.getItem("selectedlevel");
                    let getfinaldata = localStorage.getItem("finaldata");
                    let getteacherlength = localStorage.getItem("teacherlength");
                    if (level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                        if (this.storeDetail.pages.pageData[2]) {
                            if (this.storeDetail.pages.pageData[2].correctedDetails) {
                                // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                        }
                        else {
                            // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                    else if (level == '1' && !getfinaldata) {
                        if (this.storeDetail.pages.pageData[2]) {
                            if (this.storeDetail.pages.pageData[2].correctedDetails) {
                                // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                        }
                        else {
                            // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                    else {
                        // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                    }
                }
                else {
                    if (this.storeDetail.pages.pageData[5].correctedDetails.class_id == '9' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '10' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '11' || this.storeDetail.pages.pageData[5].correctedDetails.class_id == '12') {
                        if (this.storeDetail.pages.pageData[2]) {
                            if (this.storeDetail.pages.pageData[2].correctedDetails) {
                                // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);   
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                        }
                        else {
                            // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);  
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                    else {
                        if (this.storeDetail.pages.pageData[2]) {
                            if (this.storeDetail.pages.pageData[2].correctedDetails) {
                                // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]); 
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                            }
                        }
                        else {
                            // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);  
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                }
            }
        }
        else {
            let value = localStorage.getItem("hod_inspect_section_status");
            if (Number(value) == 0) {
                this._alertService.showAlert(this.fillAnswer);
            }
        }
    }
    /* Move to Previous Section or Page ....*/
    backIndex() {
        let logDataNew = {
            username: localStorage.getItem("username"),
            udise_code: localStorage.getItem("udise_code"),
            observation_id: localStorage.getItem("observation_id"),
            form_name: "School room observation L" + this.currentIndex,
            action_name: "back",
            data: "Moving to back section",
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
                    this.storeDetail.pages.pageData[15].correctedDetails.selectedSection = this.selectedSection;
                    this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                }
                else {
                    this.headerClicked = false;
                    this.storeDetail.pages.pageData[15].correctedDetails.headerClicked = this.headerClicked;
                    this.storeDetail.pages.pageData[15].correctedDetails.currentIndex = this.currentIndex;
                    this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                }
            }
        }
        else {
            let selectedClass = this.storeDetail.pages.pageData[5].correctedDetails;
            if (selectedClass.length == 1) {
                let level = localStorage.getItem("selectedlevel");
                let isRegularTeacher = this.storeDetail.pages.pageData[4].correctedDetails
                    .regularTeacher;
                if (Number(level) > 1) {
                    // this._router.navigate(["/tnvntabs/page-route/classroom"]);
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                    let value = Number(localStorage.getItem("hod_inspect_section_status"));
                    if (value == 0) {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0") } });
                    }
                    else {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                    }
                }
                else {
                    if (this.storeDetail.pages.pageData[2] != null) {
                        // this._router.navigate(["/tnvntabs/page-route/emiverify",this.storeDetail.pages.pageData[0].pageDetails.school_id]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        let value = Number(localStorage.getItem("hod_inspect_section_status"));
                        if (value == 0) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                    else {
                        // this._router.navigate(["/tnvntabs/page-route/emidata",this.storeDetail.pages.pageData[0].pageDetails.school_id]);   
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        let value = Number(localStorage.getItem("hod_inspect_section_status"));
                        if (value == 0) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                }
            }
            else {
                if (this.selectedClass) {
                    if (Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id) < 3 || Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id) > 8) {
                        // this._router.navigate(["/tnvntabs/page-route/attendance/student-attendance"]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        let value = Number(localStorage.getItem("hod_inspect_section_status"));
                        if (value == 0) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                    else {
                        // this._router.navigate(["/tnvntabs/page-route/observation"]);
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        let value = Number(localStorage.getItem("hod_inspect_section_status"));
                        if (value == 0) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                        }
                    }
                }
                else {
                    // this._router.navigate(["/tnvntabs/page-route/dashboardc"]); 
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                    let value = Number(localStorage.getItem("hod_inspect_section_status"));
                    if (value == 0) {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "0") } });
                    }
                    else {
                        this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "hod_inspect_section_status": localStorage.setItem("hod_inspect_section_status", "1") } });
                    }
                }
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
                if (element.selectedAnswer.answer == "" && element.selectedAnswer.answer_id == "") {
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
            if (element.selectedAnswer == "" && element.selectedAnswer != 0) {
                status = false;
            }
        }
        return status;
    }
    ionViewWillLeave() { }
    just() { }
};
HodInspectionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef }
];
HodInspectionComponent.propDecorators = {
    headersize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["headersize", { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef },] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
HodInspectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-hod-inspection",
        template: _raw_loader_hod_inspection_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_hod_inspection_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HodInspectionComponent);



/***/ }),

/***/ 5184:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/hod-inspection/hodinpection.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HodInspectionModule": function() { return /* binding */ HodInspectionModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _hod_inspection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hod-inspection.component */ 87694);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _hod_inspection_component__WEBPACK_IMPORTED_MODULE_0__.HodInspectionComponent
    }
];
let HodInspectionModule = class HodInspectionModule {
};
HodInspectionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_hod_inspection_component__WEBPACK_IMPORTED_MODULE_0__.HodInspectionComponent]
    })
], HodInspectionModule);



/***/ }),

/***/ 86791:
/*!************************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/hod-inspection/hod-inspection.component.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\n.inScroll {\n  height: 0px;\n}\n.Scroll {\n  height: calc(100% - 110px) !important;\n}\n.inact {\n  font-size: 12px;\n  font-weight: 300px;\n  border-radius: 10px;\n  margin: 10px;\n  color: #000000;\n}\n.act {\n  font-size: 12px;\n  font-weight: 300px;\n  margin: 10px;\n  border-radius: 10px;\n  background-color: #8B67B3;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: 4px;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvZC1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFDSjtBQUFJO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRVA7QUFDQztFQUNFLFdBQUE7QUFFSDtBQUFDO0VBQ0UscUNBQUE7QUFHSDtBQURDO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUlIO0FBRkc7RUFDRSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUlMO0FBRkE7RUFDRyxrQkFBQTtBQUtIO0FBSEM7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBTUg7QUFGQyx1REFBQTtBQUNBO0VBQ0csdUJBQUE7RUFDQSxVQUFBO0FBS0o7QUFISTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FBS1A7QUFBQztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFHSjtBQUNDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUVKO0FBQ0k7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1A7QUFJQzs7b0JBQUE7QUFHQTtFQUNHLGNBQUE7QUFESjtBQUdDO0VBQ0csYUFBQTtBQUFKO0FBRUM7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFDQztFQUNBLGVBQUE7QUFFRDtBQUFDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUVIO0FBQ0M7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0g7QUFFQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFBSDtBQUdDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQURIO0FBSUM7RUFDRyxhQUFBO0FBREo7QUFJQzs7Ozs7RUFLRSxrQkFBQTtBQURIO0FBSUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQURIO0FBS0E7RUFDRyxXQUFBO0VBQ0EsUUFBQTtBQUZIIiwiZmlsZSI6ImhvZC1pbnNwZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMWVtIDAuMzVlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4zNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsMjEwLDIxMCwxKTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC8qIERlZmluZSB0aGUgc3R5bGUgcnVsZXMgZm9yIHRoZSAnYXJyb3cgaWNvbnMnICovXHJcbiAgICBzcGFuIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIHJpZ2h0OiAxZW07XHJcbiAgICAgICB0b3A6IDEuMmVtO1xyXG4gICAgICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICB9XHJcbiB9XHJcbiAuaW5TY3JvbGx7XHJcbiAgIGhlaWdodDogMHB4OyAgXHJcbiB9XHJcbiAuU2Nyb2xse1xyXG4gICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KSAhaW1wb3J0YW50OyBcclxufVxyXG4gLmluYWN0e1xyXG4gICBmb250LXNpemU6IDEycHg7IFxyXG4gICBmb250LXdlaWdodDogMzAwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIG1hcmdpbjogMTBweDtcclxuICAgY29sb3I6ICMwMDAwMDA7IFxyXG4gICB9XHJcbiAgIC5hY3R7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4OyBcclxuICAgICAvLyBtaW4td2lkdGg6IDcwJTsgICBcclxuICAgICBmb250LXdlaWdodDogMzAwcHg7XHJcbiAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjdCMzsgICBcclxuICAgICB9XHJcbnNlY3Rpb257XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gc2VjdGlvbiBoMntcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuIH1cclxuXHJcblxyXG4gLyogSGVyZSB3ZSBkZWZpbmUgdGhlIGFjdHVhbCAnbWVudScgYW5kIGl0cyAnb3B0aW9ucycgKi9cclxuIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIDJlbSBhdXRvO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiB9XHJcblxyXG5cclxuIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuIH1cclxuXHJcblxyXG4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTAsIDIxMCwgMjEwLCAxKTtcclxuXHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICByaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG4gLyogRm9sbG93aW5nIGNsYXNzZXMgZGlzcGxheS9oaWRlIHRoZSAnbWVudSdcclxuIC8vIGJhc2VkIG9uIHRoZSBzdGF0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGluIHRoZVxyXG4gLy8gY29tcG9uZW50IGNsYXNzICovXHJcbiAuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrXHJcbiB9XHJcbiAuaW5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLW9uZXtcclxuICAgYmFja2dyb3VuZDogI0JCNkJEOTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG4gfVxyXG4gLmluYWN0e1xyXG4gZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItdHdve1xyXG5cclxuICAgYmFja2dyb3VuZDogIzU2Q0NGMjtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLXRocmVle1xyXG5cclxuICAgYmFja2dyb3VuZDogI0YyOTk0QTtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtaGVhZGVyLWZvdXJ7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNzk4NUYyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZml2ZXtcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM0QUYyQzA7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWJvZHl7XHJcbiAgICBwYWRkaW5nOjEycHg7XHJcbiB9XHJcblxyXG4gLnNlY3Rpb24tMSBpb24taWNvbixcclxuIC5zZWN0aW9uLTIgaW9uLWljb24sXHJcbiAuc2VjdGlvbi0zIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNCBpb24taWNvbixcclxuIC5zZWN0aW9uLTUgaW9uLWljb257IFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG59IFxyXG5cclxuLmlvbi1jaGVjay1pbWcuYWN0aXZle1xyXG4gICB3aWR0aDogMTVweDtcclxuICAgaGVpZ2h0OiAxNXB4O1xyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgdG9wOiA0cHg7XHJcbiAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG5pb24taWNvbiAgeyBcclxuICAgei1pbmRleDogMjI7XHJcbiAgIHRvcDogNHB4O1xyXG5cclxufSBcclxuICJdfQ== */");

/***/ }),

/***/ 7992:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/hod-inspection/hod-inspection.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{schoolInspection}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\" scrollX=\"false\" scrollY=\"false\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>\r\n    <ion-text color=\"dark\" class=\"text-italic\">\r\n      <p class=\"fs-12 p-2\" style=\"background-color:#e6deed !important;margin-bottom:0px\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.schoolInspectionNote}}</span>.</p>         \r\n      </ion-text>  \r\n      <div style=\"border:none\">\r\n        <ion-tabs >          \r\n          <ion-tab-bar style=\"background-color:#e6deed;overflow-x:scroll;border:none\" slot=\"bottom\" >             \r\n            <ion-tab-button [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inact': 'act'\" *ngFor=\"let methodology of sectionList; let i = index\"  (click)=\"this.headerClicked = true;toggleAccordion1(methodology.sec_name,i,i)\" >  \r\n              <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology.status == 'active' &&{'color':'#ffffff','padding-left':'10px'}\" *ngIf=\"languageType=='en'\">{{methodology.sec_name}} ({{methodology.count}}/{{methodology.questionList.length}})</ion-label>  \r\n              <ion-label class=\"ion-text-uppercase\" [ngStyle]=\"this.headerClicked && methodology.status == 'active' &&{'color':'#ffffff','padding-left':'10px'}\" *ngIf=\"languageType=='ta'\" style=\"font-size: 9px !important;\">{{methodology.sec_name_tamil}} ({{methodology.count}}/{{methodology.questionList.length}})</ion-label>  \r\n            </ion-tab-button>    \r\n                                                                                \r\n          </ion-tab-bar>  \r\n        </ion-tabs>   \r\n      </div>           \r\n      <section      \r\n      *ngFor=\"let methodology of sectionList; let i = index\" [ngClass]=\"this.headerClicked && methodology.status != 'active'? 'inScroll': 'Scroll'\" style=\"overflow-y: scroll !important;background-color:#e6deed\"\r\n    >    \r\n\r\n      <ng-container *ngIf=\"methodology.questionList\">\r\n        <ng-container *ngIf=\"methodology.questionList.length > 0\">                 \r\n        \r\n          <div\r\n            [ngClass]=\"methodology.status\"            \r\n            class=\"method-body h-100\"\r\n            style=\"border:none;background:#e6deed\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>            \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <!-- [disabled] = \"!this.statusCheck\" -->\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_assessment_hod-inspection_hodinpection_module_ts-es2015.js.map