(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_pre-observation-question_pre-observation-question_module_ts"],{

/***/ 10310:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tnvn/pre-observation-question/pre-observation-question.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreObservationQuestionComponent": function() { return /* binding */ PreObservationQuestionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_pre_observation_question_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pre-observation-question.component.html */ 28930);
/* harmony import */ var _pre_observation_question_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pre-observation-question.component.scss */ 57408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_components_observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/observerremark/observationremark.component */ 75946);













let PreObservationQuestionComponent = class PreObservationQuestionComponent {
    constructor(_router, apiService, _translate, _alertService, ionicStore, loading, el, alertController, modalController) {
        this._router = _router;
        this.apiService = apiService;
        this._translate = _translate;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this.loading = loading;
        this.el = el;
        this.alertController = alertController;
        this.modalController = modalController;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.headerClicked = true;
        this.currentIndex = 0;
        this.question_no = 0;
        this.hideKeyboard = false;
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
                    case "4": {
                        this.sectionList[this.selectedSection].questionList[answerDetail.questionIndex].selectedAnswer = answerDetail.answer;
                        break;
                    }
                    default: {
                        break;
                    }
                }
                this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
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
                            this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        }
                        this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                    }
                }
                if (answerDetail.answer.child_qus != undefined) {
                    if (answerDetail.answer.child_qus.length > 0) {
                        if (answerDetail.question.type_of_ans != "2") {
                            this.subQuestionNo = 0;
                            answerDetail.answer.child_qus.forEach((datad, childQuestion_Index) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                                answerDetail.answer.child_qus.forEach((datad, childQuestion_Index) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
            this.pageDetail = this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
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
                    if (questionList[i].selectedAnswer != "") {
                        sum += 1;
                    }
                }
            }
            if (sum) {
                this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList[this.selectedSection].count = sum;
            }
            let statusCheckData = questionList.every(this.checkValid);
            if (statusCheckData) {
                this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
            }
            let statusCheck;
            let sectionList = this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
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
                    // temp_Questions.ans = temp_Questions.ans.replace(/^\s+|\s+$/g, "");
                    // let removeSpace = temp_Questions.ans.replace(/\s/g, '')
                    // let rmoveQute = removeSpace.replace('"{"', '{"')
                    temp_Questions.ans = JSON.parse(temp_Questions.ans);
                }
                if ((Number(this.classType) == Number(temp_Questions.classtype) ||
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
                    this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
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
        debugger;
        this.progressValue = 84;
        this.loading.present();
        this.ionicStore.getOffStorage().then((response) => {
            this.masterApiResponse = response;
            if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
            }
            this.loading.dismiss();
            this.ionicStore.getStoreData().then((response) => {
                this.storeDetail = response;
                if (this.storeDetail == null || this.storeDetail == undefined) {
                    this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                }
                this.loading.dismiss();
                this.storeDetail.pages.currentPage = "preObservationQuestion";
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                console.log(this.storeDetail, 'this.storeDetail');
                this.classType = 3;
                this.selectedSubject = this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
                this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id.toString();
                this.classroomSelection_ClassList = this.storeDetail.pages.pageData[5].correctedDetails;
                this.classroomSelection_ClassList_Ids = this.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
                let classDetail = this.storeDetail.pages.pageData[5].pageDetails;
                if (this.storeDetail.pages.pageData[16] == undefined || this.storeDetail.pages.pageData[16] == null) {
                    this.getMethodology(3, classDetail.selectedClass.class_id, this.classroomSelection_ClassList_Ids, this.classroomSelection_ClassList);
                }
                else {
                    this.sectionList = this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
                    this.methodologyQuestions = this.storeDetail.pages.pageData[16].correctedDetails.methodologyQuestions;
                    this.selectedSection = this.storeDetail.pages.pageData[16].correctedDetails.selectedSection;
                    this.headerClicked = this.storeDetail.pages.pageData[16].correctedDetails.headerClicked;
                    this.currentIndex = this.storeDetail.pages.pageData[16].correctedDetails.currentIndex;
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
        });
        this.appLanguage();
    }
    showAlert(alertInfo = "", message = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let alertText1 = "Kindly fill these sections by silently observing the teacher.<br>";
            let alertText2 = "\Kindly fill the Pre-observation section at the end by asking the teacher";
            const alert = yield this.alertController.create({
                header: "",
                cssClass: "my-custom-class",
                message: alertText1 + " " + " " + alertText2,
                backdropDismiss: false,
                buttons: [{
                        text: "ok",
                        handler: () => {
                        }
                    }],
            });
            yield alert.present();
        });
    }
    appLanguage() {
        this.apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this.previouslanguage = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
            // if(this.storeDetail){
            //   this.classroomSelection_ClassList = this.storeDetail.pages.pageData[5].correctedDetails;        
            //   this.classroomSelection_ClassList_Ids = this.storeDetail.pages.pageData[5].correctedDetails.class_id.toString();
            //   let classDetail = this.storeDetail.pages.pageData[5].pageDetails;      
            //   this.getMethodology(
            //     3,
            //     classDetail.selectedClass.class_id,
            //     this.classroomSelection_ClassList_Ids,
            //     this.classroomSelection_ClassList
            //   );
            // }
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
        this._translate.get("postObservation").subscribe((res) => {
            this.postObservation = res;
        });
        this._translate.get("questions").subscribe((res) => {
            this.questions = res;
        });
        this._translate.get("preObservationReport").subscribe((res) => {
            this.preObservationReport = res;
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
    getMethodology(classType, classId, classroomSelection_ClassList_Ids, classroomSelection_ClassList) {
        let classDetail = {
            class_id: classId,
            classtype: 3,
        };
        let tempsectionList = [];
        let tempQuestionList = [];
        tempsectionList = this.masterApiResponse.methodologys;
        tempQuestionList = this.masterApiResponse.methodology_questions_lang;
        // if (this.languageType == "en") {      
        //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
        //     if(data.lang == this.languageType){
        //       return data
        //     }
        //   });    
        //   let tempQuesEN;      
        //   tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
        //     if(data.lang == this.languageType){
        //       return data
        //     }
        //   });        
        // } else if (this.languageType == "ta") {
        //   tempsectionList = this.masterApiResponse.methodologys.filter((data)=>{
        //     if(data.lang == this.languageType){
        //       return data
        //     }
        // });
        // let tempQuesEN;    
        // tempQuestionList = this.masterApiResponse.methodology_questions_lang.filter((data)=>{
        //   if(data.lang == this.languageType){
        //     return data
        //   }
        // });            
        // } else {
        // }    
        let methodologyQuesList = [];
        tempQuestionList.forEach((data) => {
            let quesClassList = data.class.split(",");
            let allSelectionClassList = classroomSelection_ClassList;
            let allSelectionClassList_Ids = classroomSelection_ClassList_Ids;
            let status = quesClassList.includes(this.selectedClass);
            let isNon_SelectedPresent;
            if (allSelectionClassList_Ids.length && quesClassList.length) {
                isNon_SelectedPresent = quesClassList.includes(this.selectedClass);
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
                (Number(data.classtype) == Number(classType) || Number(data.classtype) == 3 || Number(data.classtype) == 2 || Number(data.classtype) == 1)) {
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
        this.sectionList = records.methodology;
        this.methodologyQuestions = this.methodologyQuestions.sort((a, b) => (Number(a.priority) > Number(b.priority)) ? 1 : ((Number(b.priority) > Number(a.priority)) ? -1 : 0));
        this.sectionList.forEach((data, index) => {
            this.question_no = 0;
            let questions = this.methodologyQuestions.filter((data1, index1) => {
                var _a;
                if (Number(data.sec_id) == Number(data1.sec_id) && data1.parent_id == "-1") {
                    delete data.score;
                    const answer = data1;
                    if (answer.ans) {
                        // answer.ans = data1.ans
                        // .replace(/^\s+|\s+$/g, "")
                        // .replace(/\n/g, "");
                        // answer.ans = JSON.parse(answer.ans);
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
                        (_a = answer.ans) === null || _a === void 0 ? void 0 : _a.ans.forEach((element) => {
                            element["checked"] = false;
                        });
                    }
                    this.question_no = this.question_no + 1;
                    answer.question_no = this.question_no;
                    return answer;
                }
            });
            if (this.storeDetail.pages.pageData[5].correctedDetails.class_id.toString()) {
                questions = questions.filter((data) => data.class.includes(this.storeDetail.pages.pageData[5].correctedDetails.class_id.toString()));
            }
            this.sectionList[index]["status"] = "inactive";
            this.sectionList[index]["questionList"] = questions;
            this.sectionList[index]["isAnswerd"] = false;
        });
        this.loading.dismiss();
        // this.sectionList.forEach((data)=>{      
        //   let removedata = []
        //   data.questionList.filter((question,index)=>{        
        //     if(Number(question.subject_id)!=0){
        //         let subjects = question.subject_id.split(",");            
        //         if(subjects.includes(this.selectedSubject)){                          
        //           return question;
        //         }            
        //         else{                            
        //           removedata.push(index)              
        //         }
        //       }
        //   })
        //   for (var i = removedata.length -1; i >= 0; i--){
        //         data.questionList.splice(removedata[i], 1);
        //     } 
        // });       
        // this.sectionList = this.sectionList.filter((data)=>{
        //     if(data.questionList.length>0){
        //       return data
        //     }
        //   });  
        let apiData = {
            pageNo: "17",
            pageName: "preObservationQuestion",
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
        this.storeDetail.pages.pageData[16] = apiData;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
        this.headerClicked = true;
        this.currentIndex = 0;
        this.selectedSection = this.currentIndex;
        this.sectionList = this.sectionList.filter((data) => Number(data.sec_id) == 3);
        this.sectionList[this.currentIndex].status = "active";
        this.sectionName = this.sectionList[this.currentIndex].sec_name;
        this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
        this.storeDetail.pages.pageData[16].correctedDetails.headerClicked = this.headerClicked;
        this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
        this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
    }
    toggleAccordion1(name, sectionIndex, index) {
        this.sectionName = name;
        this.selectedSection = sectionIndex;
        this.sectionList.forEach((data, currentindex) => {
            if (currentindex == index) {
                this.sectionList[index]["status"] = "active";
                this.currentIndex = index;
                this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[16].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            }
            else {
                this.sectionList[currentindex]["status"] = "inactive";
                this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[16].correctedDetails.headerClicked = this.headerClicked;
                this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            }
        });
    }
    broadcastName(name) {
        this.change.emit(name);
    }
    removeSubQuestions(question_RefId, question_Id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let temp = [];
            yield this.sectionList[this.selectedSection].questionList.forEach((question, questionIndex) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (question.parent_id == question_Id) {
                    temp.splice(0, 0, questionIndex);
                    yield this.removeSubQuestions(question.ob_qus_id, question.ob_qus_id);
                }
            }));
            temp.forEach((questionIndex, arrayIndex) => {
                this.sectionList[this.selectedSection].questionList.splice(questionIndex, 1);
            });
            yield this.sectionList.forEach((section, index) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                if (section.questionList.length == 0) {
                    this.sectionList.splice(index);
                }
            }));
            this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
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
        this.pageDetail = this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
        let questionList = this.pageDetail[this.selectedSection].questionList;
        let statusCheck = questionList.every(this.checkValid);
        if (statusCheck) {
            this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList[this.selectedSection].isAnswerd = true;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            if (this.currentIndex <= this.sectionList.length - 2) {
                this.sectionList[this.currentIndex].status = "inactive";
                this.currentIndex = this.currentIndex + 1;
                this.sectionList[this.currentIndex].status = "active";
                this.selectedSection = this.currentIndex;
                this.sectionName = this.sectionList[this.currentIndex].sec_name;
                this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
                this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            }
            else {
                this.hideKeyboard = true;
                this.openDiscussModal();
            }
        }
        else {
            this._alertService.showAlert(this.fillAnswer);
        }
    }
    openDiscussModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_7__.ObservationremarkComponent,
                cssClass: "",
                componentProps: {},
                showBackdrop: false,
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                this.hideKeyboard = false;
                let level = localStorage.getItem("selectedlevel");
                yield localStorage.setItem("remarks", dataReturned.data);
                // this._router.navigate(["/tnvntabs/page-route/observation"]);  
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "pre_obs_qns_section_status": localStorage.setItem("pre_obs_qns_section_status", "1") } });
            }));
            this.apiService.name.subscribe((response) => {
                if (response == "showText") {
                    let body = document.getElementsByTagName("ion-modal")[0];
                    body.classList.add("new-info");
                }
            });
            return yield modal.present();
        });
    }
    backIndex() {
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
                    this.storeDetail.pages.pageData[16].correctedDetails.selectedSection = this.selectedSection;
                    this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                }
                else {
                    this.headerClicked = false;
                    this.storeDetail.pages.pageData[16].correctedDetails.headerClicked = this.headerClicked;
                    this.storeDetail.pages.pageData[16].correctedDetails.currentIndex = this.currentIndex;
                    this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList = this.sectionList;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                }
            }
        }
        else {
            let selectedClass = this.storeDetail.pages.pageData[5].correctedDetails;
            this.pageDetail = this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList;
            let questionList = this.pageDetail[this.selectedSection].questionList;
            let statusCheck = questionList.every(this.checkValid);
            if (statusCheck) {
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "pre_obs_qns_section_status": localStorage.getItem("pre_obs_qns_section_status") } });
            }
            else {
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "pre_obs_qns_section_status": localStorage.getItem("pre_obs_qns_section_status") } });
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
                if (element.selectedAnswer.answer == "") {
                    status = false;
                }
            }
        }
        else if (answerType == "2") {
            if (!element.selectedAnswer.length) {
                status = false;
            }
            const otherFound = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(element.selectedAnswer, (sa) => sa.answer.toLowerCase() == "other" || sa.answer == "மற்றவை");
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
PreObservationQuestionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
PreObservationQuestionComponent.propDecorators = {
    headersize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["headersize", { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }]
};
PreObservationQuestionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-pre-observation-question",
        template: _raw_loader_pre_observation_question_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pre_observation_question_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PreObservationQuestionComponent);



/***/ }),

/***/ 57026:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tnvn/pre-observation-question/pre-observation-question.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreObservationQuestionModule": function() { return /* binding */ PreObservationQuestionModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pre_observation_question_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pre-observation-question.component */ 10310);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _pre_observation_question_component__WEBPACK_IMPORTED_MODULE_0__.PreObservationQuestionComponent
    }
];
let PreObservationQuestionModule = class PreObservationQuestionModule {
};
PreObservationQuestionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_pre_observation_question_component__WEBPACK_IMPORTED_MODULE_0__.PreObservationQuestionComponent]
    })
], PreObservationQuestionModule);



/***/ }),

/***/ 57408:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tnvn/pre-observation-question/pre-observation-question.component.scss ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  cursor: pointer;\n  position: relative;\n  padding: 1em 0.35em;\n  font-size: 1.35em;\n  font-family: Verdana;\n  border-bottom: 1px solid #d2d2d2;\n  margin: 0;\n  /* Define the style rules for the 'arrow icons' */\n}\nh2 span {\n  position: absolute;\n  right: 1em;\n  top: 1.2em;\n  font-size: 0.95em;\n}\nsection {\n  position: relative;\n}\nsection h2 {\n  font-weight: bold;\n  font-family: Arial;\n}\n/* Here we define the actual 'menu' and its 'options' */\n.image-wrapper {\n  margin: 0 auto 2em auto;\n  width: 20%;\n}\n.image-wrapper img {\n  display: block;\n  margin: auto;\n}\np {\n  line-height: 1.2em;\n  margin: 0 0 1em 0;\n  font-family: Verdana;\n  font-size: 1rem;\n}\ndiv {\n  position: relative;\n  padding: 2em;\n  background: #e6e6e6;\n  border-bottom: 1px solid #d2d2d2;\n}\ndiv ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}\n/* Following classes display/hide the 'menu'\n// based on the state change detection in the\n// component class */\n.active {\n  display: block;\n}\n.inactive {\n  display: none;\n}\n.method-header-one {\n  background: #BB6BD9;\n  padding: 0.51em 0.35em;\n}\n.inact {\n  font-size: 12px;\n}\n.method-header-two {\n  background: #56CCF2;\n  padding: 0.51em 0.35em;\n}\n.method-header-three {\n  background: #F2994A;\n  padding: 0.51em 0.35em;\n}\n.method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n.method-header-five {\n  background: #4AF2C0;\n  padding: 0.51em 0.35em;\n}\n.method-body {\n  padding: 12px;\n}\n.section-1 ion-icon,\n.section-2 ion-icon,\n.section-3 ion-icon,\n.section-4 ion-icon,\n.section-5 ion-icon {\n  position: absolute;\n}\n.ion-check-img.active {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  border-radius: 50%;\n  top: 4px;\n  z-index: 2;\n}\nion-icon {\n  z-index: 22;\n  top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZS1vYnNlcnZhdGlvbi1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGlEQUFBO0FBQ0o7QUFBSTtFQUNHLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUVQO0FBRUE7RUFDRyxrQkFBQTtBQUNIO0FBQ0M7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBRUg7QUFFQyx1REFBQTtBQUNBO0VBQ0csdUJBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUNHLGNBQUE7RUFDQSxZQUFBO0FBQ1A7QUFHQztFQUNHLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUlDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQURKO0FBSUk7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRlA7QUFPQzs7b0JBQUE7QUFHQTtFQUNHLGNBQUE7QUFKSjtBQU1DO0VBQ0csYUFBQTtBQUhKO0FBS0M7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkg7QUFJQztFQUNBLGVBQUE7QUFERDtBQUdDO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQURIO0FBSUM7RUFFRSxtQkFBQTtFQUNBLHNCQUFBO0FBRkg7QUFLQztFQUVFLG1CQUFBO0VBQ0Esc0JBQUE7QUFISDtBQU1DO0VBRUUsbUJBQUE7RUFDQSxzQkFBQTtBQUpIO0FBT0M7RUFDRyxhQUFBO0FBSko7QUFPQzs7Ozs7RUFLRSxrQkFBQTtBQUpIO0FBT0E7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUpIO0FBUUE7RUFDRyxXQUFBO0VBQ0EsUUFBQTtBQUxIIiwiZmlsZSI6InByZS1vYnNlcnZhdGlvbi1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDFlbSAwLjM1ZW07XHJcbiAgICBmb250LXNpemU6IDEuMzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjEwLDIxMCwyMTAsMSk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAvKiBEZWZpbmUgdGhlIHN0eWxlIHJ1bGVzIGZvciB0aGUgJ2Fycm93IGljb25zJyAqL1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICByaWdodDogMWVtO1xyXG4gICAgICAgdG9wOiAxLjJlbTtcclxuICAgICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gICAgfVxyXG4gfVxyXG5cclxuc2VjdGlvbntcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiBzZWN0aW9uIGgye1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gfVxyXG5cclxuXHJcbiAvKiBIZXJlIHdlIGRlZmluZSB0aGUgYWN0dWFsICdtZW51JyBhbmQgaXRzICdvcHRpb25zJyAqL1xyXG4gLmltYWdlLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMmVtIGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuIH1cclxuIFxyXG4gcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICBtYXJnaW46IDAgMCAxZW0gMDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gfVxyXG5cclxuXHJcbiBkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAxKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxMCwgMjEwLCAyMTAsIDEpO1xyXG5cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuIH1cclxuXHJcbiAvKiBGb2xsb3dpbmcgY2xhc3NlcyBkaXNwbGF5L2hpZGUgdGhlICdtZW51J1xyXG4gLy8gYmFzZWQgb24gdGhlIHN0YXRlIGNoYW5nZSBkZXRlY3Rpb24gaW4gdGhlXHJcbiAvLyBjb21wb25lbnQgY2xhc3MgKi9cclxuIC5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxuIH1cclxuIC5pbmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItb25le1xyXG4gICBiYWNrZ3JvdW5kOiAjQkI2QkQ5O1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcbiB9XHJcbiAuaW5hY3R7XHJcbiBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAubWV0aG9kLWhlYWRlci10d297XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjNTZDQ0YyO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItdGhyZWV7XHJcblxyXG4gICBiYWNrZ3JvdW5kOiAjRjI5OTRBO1xyXG4gICBwYWRkaW5nOjAuNTFlbSAwLjM1ZW07XHJcblxyXG4gfVxyXG4gLm1ldGhvZC1oZWFkZXItZm91cntcclxuXHJcbiAgIGJhY2tncm91bmQ6ICM3OTg1RjI7XHJcbiAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuXHJcbiB9XHJcbiAubWV0aG9kLWhlYWRlci1maXZle1xyXG5cclxuICAgYmFja2dyb3VuZDogIzRBRjJDMDtcclxuICAgcGFkZGluZzowLjUxZW0gMC4zNWVtO1xyXG5cclxuIH1cclxuIC5tZXRob2QtYm9keXtcclxuICAgIHBhZGRpbmc6MTJweDtcclxuIH1cclxuXHJcbiAuc2VjdGlvbi0xIGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tMiBpb24taWNvbixcclxuIC5zZWN0aW9uLTMgaW9uLWljb24sXHJcbiAuc2VjdGlvbi00IGlvbi1pY29uLFxyXG4gLnNlY3Rpb24tNSBpb24taWNvbnsgXHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbn0gXHJcblxyXG4uaW9uLWNoZWNrLWltZy5hY3RpdmV7XHJcbiAgIHdpZHRoOiAxNXB4O1xyXG4gICBoZWlnaHQ6IDE1cHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICB0b3A6IDRweDtcclxuICAgei1pbmRleDogMjtcclxufVxyXG5cclxuXHJcbmlvbi1pY29uICB7IFxyXG4gICB6LWluZGV4OiAyMjtcclxuICAgdG9wOiA0cHg7XHJcblxyXG59IFxyXG4gIl19 */");

/***/ }),

/***/ 28930:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/pre-observation-question/pre-observation-question.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header id=\"headersize\">\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{postObservation }} <br />{{questions}} </b>\r\n          </ion-title>\r\n        </ion-col>               \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content id=\"content_size\">\r\n  <app-progress\r\n    id=\"progress_size\"\r\n    [progress]=\"this.progressValue\"\r\n  ></app-progress>\r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p\r\n      class=\"fs-12 color-lgrey\"\r\n      [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-12': this.languageType == 'ta'}\"\r\n      style=\"background-color:#e6deed;margin-bottom:0px\"\r\n    >\r\n      {{this.preObservationReport}}\r\n    </p>\r\n  </ion-text>  \r\n  <div class=\"p-0\">\r\n    <section\r\n      class=\"p-0 section-1 border\"\r\n      *ngFor=\"let methodology of sectionList; let i = index\" style=\"overflow-y: scroll !important;background-color:#e6deed!important;\"\r\n    >    \r\n\r\n      <ng-container *ngIf=\"methodology.questionList\">\r\n        <ng-container *ngIf=\"methodology.questionList.length > 0\">          \r\n          <div\r\n            [ngClass]=\"methodology.status\"\r\n            [ngStyle]=\"{ 'background-color': methodology.sec_color}\"\r\n            class=\"method-body h-100\"\r\n          >\r\n            <app-questions\r\n              [treeData]=\"methodology.questionList\"\r\n              (valueChange)=\"displayCounter($event)\"\r\n            ></app-questions>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"hideKeyboard==false\" style=\"height: 50px;\" id=\"footersize\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <!-- [disabled] = \"!this.statusCheck\" -->\r\n      <ion-tab-button class=\"btn-next\" (click)=\"moveIndex()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_pre-observation-question_pre-observation-question_module_ts-es2015.js.map