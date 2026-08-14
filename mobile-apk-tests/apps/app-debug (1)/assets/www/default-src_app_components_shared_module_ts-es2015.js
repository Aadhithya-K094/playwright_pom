(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_components_shared_module_ts"],{

/***/ 68312:
/*!*******************************************!*\
  !*** ./src/app/common-pipe/search-all.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchAllPipe": function() { return /* binding */ SearchAllPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let SearchAllPipe = class SearchAllPipe {
    transform(value, args) {
        debugger;
        if (!args) {
            return value;
        }
        return value.filter((value) => {
            let isIn = false;
            for (let key in value) {
                let text = value[key];
                if (text) {
                    if (text.toString().toLowerCase().match(args.toString().toLowerCase())) {
                        isIn = true;
                        break;
                    }
                }
            }
            return isIn;
        });
    }
};
SearchAllPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'searchall'
    })
], SearchAllPipe);



/***/ }),

/***/ 40036:
/*!*************************************************************************!*\
  !*** ./src/app/components/assessmentmodal/assessmentmodal.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessmentmodalComponent": function() { return /* binding */ AssessmentmodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_assessmentmodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assessmentmodal.component.html */ 43241);
/* harmony import */ var _assessmentmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assessmentmodal.component.scss */ 99804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let AssessmentmodalComponent = class AssessmentmodalComponent {
    constructor(navParams, modalController, _alerService, _apiService, _translate) {
        this.navParams = navParams;
        this.modalController = modalController;
        this._alerService = _alerService;
        this._apiService = _apiService;
        this._translate = _translate;
        this.reasonList = [];
        this.mediumList = [];
        this.randomQuestionList = [];
    }
    ngOnInit() {
        this.viewName = this.navParams.data.viewName;
        this.reasonList = this.navParams.data.reasonList || [];
        let otherObj = { "reason": "Others", "language_id": "2" };
        const index = this.reasonList.findIndex(object => object.reason === otherObj.reason);
        if (index === -1) {
            this.reasonList.push(otherObj);
        }
        this.studentDetail = this.navParams.data.studentDetail;
        this.mediumList = this.navParams.data.mediumList;
        this.randomQuestionList = this.navParams.data.questionList;
        if (this.randomQuestionList) {
            const ansEmpty = this.randomQuestionList.filter((rq) => rq.ans === "");
            const ansPresent = this.randomQuestionList.filter((rq) => rq.ans !== "");
            if (ansEmpty.length > 0) {
                if (ansPresent.length > 0) {
                    const question = ansPresent[0];
                    this.randomQuestionList.forEach((rq) => {
                        rq.ans = question.ans;
                    });
                }
                else {
                    this.randomQuestionList.forEach((rq) => {
                        rq.ans = "check if the student is answering correctly";
                    });
                }
            }
        }
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
            switch (this.languageType) {
                case "en":
                    this.reasonList = this.reasonList.filter((sr) => sr.language_id == 2);
                    break;
                case "ta":
                    this.reasonList = this.reasonList.filter((sr) => sr.language_id == 1);
                default:
                    break;
            }
        });
    }
    _initialiseTranslation() {
        this._translate.get("selectInstruction").subscribe((res) => {
            this.selectInstruction = res;
        });
        this._translate.get("ReasonAssessing").subscribe((res) => {
            this.ReasonAssessing = res;
        });
        this._translate.get("studentIdentify").subscribe((res) => {
            this.studentIdentify = res;
        });
        this._translate.get("chooseMedium").subscribe((res) => {
            this.chooseMedium = res;
        });
        this._translate.get("ok").subscribe((res) => {
            this.ok = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
    }
    mySelectHandler(event) { }
    selectReason(reason, index) {
        this.selectedReason = reason;
    }
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let submittedData = data;
            if (submittedData != "Cancel" && this.viewName === "view1") {
                if (this.selectedReason != undefined) {
                    let studentReason = {
                        student_emisid: this.studentDetail.id,
                        student_name: this.studentDetail.name,
                        reason: this.selectedReason.reason,
                        description: "Reason for not assessing student",
                    };
                    yield this.modalController.dismiss(studentReason);
                }
                else {
                    this._alerService.showAlert("Please check any one");
                }
            }
            else {
                yield this.modalController.dismiss(submittedData);
            }
        });
    }
};
AssessmentmodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
AssessmentmodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-assessmentmodal",
        template: _raw_loader_assessmentmodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assessmentmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssessmentmodalComponent);



/***/ }),

/***/ 20471:
/*!*************************************************************************!*\
  !*** ./src/app/components/attendancemodal/attendancemodal.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancemodalComponent": function() { return /* binding */ AttendancemodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_attendancemodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./attendancemodal.component.html */ 40222);
/* harmony import */ var _attendancemodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendancemodal.component.scss */ 18580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let AttendancemodalComponent = class AttendancemodalComponent {
    constructor(modalController, navParams, _apiService, _translate, _alertService) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._translate = _translate;
        this._alertService = _alertService;
        this.showInput = false;
        this.misMatchReasonList = [];
        this.studentName = "";
        this.showErrorMessage = false;
        this.misMatchReasonList = navParams.get("misMatchReasonList");
        this.studentName = navParams.get("student");
    }
    ngOnInit() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
        switch (this.languageType) {
            case "en":
                this.misMatchReasonList = this.misMatchReasonList.filter((sr) => sr.language_id == 2);
                break;
            case "ta":
                this.misMatchReasonList = this.misMatchReasonList.filter((sr) => sr.language_id == 1);
            default:
                break;
        }
    }
    _initialiseTranslation() {
        this._translate.get("reasonInfoTxt").subscribe((res) => {
            this.reasonInfoTxt = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
    }
    mcqAnswer(data, index) {
        if (data.reason.toLowerCase() === "other" || data.reason === "மற்றவை") {
            this.showInput = true;
        }
        else {
            this.showInput = false;
        }
        this.selectedReason = data;
    }
    dismiss(selectedValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let reasonInfo;
            if (selectedValue !== "Cancel") {
                if (!this.selectedReason) {
                    this._alertService.showAlert("Please Select", "Please select the reason for mismatch");
                    return;
                }
                if (this.showInput && !this.reasonInput) {
                    this.showErrorMessage = true;
                    return;
                }
                if (this.selectedReason.reason != "Other") {
                    reasonInfo = {
                        id: this.selectedReason.reason_id,
                        reason: this.selectedReason.reason,
                    };
                }
                else {
                    reasonInfo = {
                        id: this.selectedReason.reason_id,
                        reason: this.reasonInput,
                    };
                }
            }
            else {
                reasonInfo = {
                    id: "0",
                    reason: "Cancel",
                };
            }
            const onClosedData = "Wrapped Up!";
            yield this.modalController.dismiss(reasonInfo);
        });
    }
};
AttendancemodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
AttendancemodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-attendancemodal",
        template: _raw_loader_attendancemodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_attendancemodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AttendancemodalComponent);



/***/ }),

/***/ 71414:
/*!***********************************************************************!*\
  !*** ./src/app/components/classroommodal/classroommodal.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassroommodalComponent": function() { return /* binding */ ClassroommodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_classroommodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./classroommodal.component.html */ 2113);
/* harmony import */ var _classroommodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classroommodal.component.scss */ 47101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ClassroommodalComponent = class ClassroommodalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
ClassroommodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ClassroommodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-classroommodal',
        template: _raw_loader_classroommodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_classroommodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassroommodalComponent);



/***/ }),

/***/ 94926:
/*!***********************************************************************!*\
  !*** ./src/app/components/dashboardmodal/dashboardmodal.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardmodalComponent": function() { return /* binding */ DashboardmodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dashboardmodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboardmodal.component.html */ 21408);
/* harmony import */ var _dashboardmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboardmodal.component.scss */ 59618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let DashboardmodalComponent = class DashboardmodalComponent {
    constructor(modalController, navParams, _alertService, _apiService, _translate) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertService = _alertService;
        this._apiService = _apiService;
        this._translate = _translate;
        this.lname = "";
        this.schoolReasons = [];
        this.unVisitedSchoolList = [];
        this.allSchoolList = [];
        this.selectedReason = [];
        this.reasonDataList = [];
        this.planToVisitSchool = (school) => {
            this.selectedSchool = school.value;
        };
        this.mySelectHandler = (event, index, school) => {
            this.lname = event;
            this.selectedReason[index] = this.lname;
            let reasonDetail = {
                school_id: school.school_id,
                school_name: school.school_name,
                reason: this.lname,
                description: "Reasons for not selecting the following schools",
            };
            if (!this.reasonDataList.length) {
                this.reasonDataList.push(reasonDetail);
            }
            else {
                const findIndex = this.reasonDataList.findIndex((data) => data.school_id === reasonDetail.school_id);
                if (findIndex !== -1) {
                    this.reasonDataList.splice(findIndex, 1);
                }
                this.reasonDataList.push(reasonDetail);
            }
        };
        this.inputHandler = (type, inputValue, index, school) => {
            let reasonDetail = {
                school_id: school.school_id,
                school_name: school.school_name,
                reason: inputValue,
                description: "Reasons for not selecting the following schools",
            };
            if (!this.reasonDataList.length) {
                this.reasonDataList.push(reasonDetail);
            }
            else {
                const findIndex = this.reasonDataList.findIndex((data) => data.school_id === reasonDetail.school_id);
                if (findIndex !== -1) {
                    this.reasonDataList.splice(findIndex, 1);
                }
                this.reasonDataList.push(reasonDetail);
            }
        };
        this.schoolReasons = navParams.get("schoolReason");
        this.unVisitedSchoolList = navParams.get("unVisitedSchoolList");
        this.allSchoolList = navParams.get("allSchoolList");
        this.allSchoolList = this.allSchoolList.filter(val => !this.unVisitedSchoolList.includes(val));
    }
    ngOnInit() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
            switch (this.languageType) {
                case "en":
                    this.schoolReasons = this.schoolReasons.filter((sr) => sr.language_id == 2);
                    break;
                case "ta":
                    this.schoolReasons = this.schoolReasons.filter((sr) => sr.language_id == 1);
                default:
                    break;
            }
        });
    }
    _initialiseTranslation() {
        this._translate.get("schoolsReason").subscribe((res) => {
            this.schoolsReason = res;
        });
        this._translate.get("visitSchool").subscribe((res) => {
            this.visitSchool = res;
        });
        this._translate.get("chooseSchool").subscribe((res) => {
            this.chooseSchool = res;
        });
        this._translate.get("reason").subscribe((res) => {
            this.reason = res;
        });
        this._translate.get("Others").subscribe((res) => {
            this.Others = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
    }
    dismiss(submitted) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let onClosedData = submitted;
            if (onClosedData != "Cancel") {
                if (this.reasonDataList.length === this.allSchoolList.length &&
                    this.selectedSchool) {
                    let reasonInfo = {
                        reasonList: this.reasonDataList,
                        schoolDetail: this.selectedSchool,
                    };
                    yield this.modalController.dismiss(reasonInfo);
                }
                else {
                    this._alertService.showAlert("Please Enter All Options");
                }
            }
            else {
                yield this.modalController.dismiss(onClosedData);
            }
        });
    }
};
DashboardmodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
DashboardmodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-dashboardmodal",
        template: _raw_loader_dashboardmodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboardmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardmodalComponent);



/***/ }),

/***/ 68584:
/*!*******************************************************************************!*\
  !*** ./src/app/components/graassessmentmodal/graassessmentmodal.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraAssessmentmodalComponent": function() { return /* binding */ GraAssessmentmodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_graassessmentmodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./graassessmentmodal.component.html */ 71360);
/* harmony import */ var _graassessmentmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graassessmentmodal.component.scss */ 4036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let GraAssessmentmodalComponent = class GraAssessmentmodalComponent {
    constructor(navParams, modalController, _alerService, _apiService, _translate) {
        this.navParams = navParams;
        this.modalController = modalController;
        this._alerService = _alerService;
        this._apiService = _apiService;
        this._translate = _translate;
        this.reasonList = [];
        this.mediumList = [];
        this.randomQuestionList = [];
        this.attemptedPercentageValue = Math.round((9 / 10) * 100);
        this.attemptedProgress = Math.round((9 / 10) * 100);
        this.correctedProgress = Math.round((7 / 10) * 100);
        this.percentage = Math.round((7 / 10) * 100);
        this.percentageValue = Math.round((7 / 10) * 100);
    }
    ngOnInit() {
        this.viewName = this.navParams.data.viewName;
        this.attemptedProgress = Number(this.viewName.attempted_words) / Number(this.viewName.book_total_words);
        this.correctedProgress = Number(this.viewName.correct_words) / Number(this.viewName.book_total_words);
        this.percentage = Number(this.viewName.correct_words) / Number(this.viewName.book_total_words);
        this.attemptedPercentageValue = Number(this.viewName.correct_words) / Number(this.viewName.attempted_words);
        this.percentageValue = Math.round(this.percentage * 100);
        this.attemptedPercentage = Math.round(this.attemptedPercentageValue * 100);
        this.reasonList = this.navParams.data.reasonList || [];
        let otherObj = { "reason": "Others", "language_id": "2" };
        const index = this.reasonList.findIndex(object => object.reason === otherObj.reason);
        if (index === -1) {
            this.reasonList.push(otherObj);
        }
        this.studentDetail = this.navParams.data.studentDetail;
        this.mediumList = this.navParams.data.mediumList;
        this.randomQuestionList = this.navParams.data.questionList;
        if (this.randomQuestionList) {
            const ansEmpty = this.randomQuestionList.filter((rq) => rq.ans === "");
            const ansPresent = this.randomQuestionList.filter((rq) => rq.ans !== "");
            if (ansEmpty.length > 0) {
                if (ansPresent.length > 0) {
                    const question = ansPresent[0];
                    this.randomQuestionList.forEach((rq) => {
                        rq.ans = question.ans;
                    });
                }
                else {
                    this.randomQuestionList.forEach((rq) => {
                        rq.ans = "check if the student is answering correctly";
                    });
                }
            }
        }
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
            switch (this.languageType) {
                case "en":
                    this.reasonList = this.reasonList.filter((sr) => sr.language_id == 2);
                    break;
                case "ta":
                    this.reasonList = this.reasonList.filter((sr) => sr.language_id == 1);
                default:
                    break;
            }
        });
    }
    _initialiseTranslation() {
        this._translate.get("selectInstruction").subscribe((res) => {
            this.selectInstruction = res;
        });
        this._translate.get("ReasonAssessing").subscribe((res) => {
            this.ReasonAssessing = res;
        });
        this._translate.get("studentIdentify").subscribe((res) => {
            this.studentIdentify = res;
        });
        this._translate.get("chooseMedium").subscribe((res) => {
            this.chooseMedium = res;
        });
        this._translate.get("ok").subscribe((res) => {
            this.ok = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
    }
    mySelectHandler(event) { }
    selectReason(reason, index) {
        this.selectedReason = reason;
    }
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let submittedData = data;
            if (submittedData != "Cancel" && this.viewName === "view1") {
                if (this.selectedReason != undefined) {
                    let studentReason = {
                        student_emisid: this.studentDetail.id,
                        student_name: this.studentDetail.name,
                        reason: this.selectedReason.reason,
                        description: "Reason for not assessing student",
                    };
                    yield this.modalController.dismiss(studentReason);
                }
                else {
                    this._alerService.showAlert("Please check any one");
                }
            }
            else {
                yield this.modalController.dismiss(submittedData);
            }
        });
    }
};
GraAssessmentmodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
GraAssessmentmodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-graassessmentmodal",
        template: _raw_loader_graassessmentmodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_graassessmentmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GraAssessmentmodalComponent);



/***/ }),

/***/ 20601:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/graassessmentreasonmodal/graassessmentreasonmodal.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraAssessmentReasonmodalComponent": function() { return /* binding */ GraAssessmentReasonmodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_graassessmentreasonmodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./graassessmentreasonmodal.component.html */ 40212);
/* harmony import */ var _graassessmentreasonmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graassessmentreasonmodal.component.scss */ 89143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let GraAssessmentReasonmodalComponent = class GraAssessmentReasonmodalComponent {
    constructor(navParams, modalController, _alerService, _apiService, _translate) {
        this.navParams = navParams;
        this.modalController = modalController;
        this._alerService = _alerService;
        this._apiService = _apiService;
        this._translate = _translate;
        this.reasonList = [];
        this.selectedReason = '';
        this.mediumList = [];
        this.randomQuestionList = [];
        this.attemptedProgress = Math.round((9 / 10) * 100);
        this.correctedProgress = Math.round((7 / 10) * 100);
        this.percentage = Math.round((7 / 10) * 100);
    }
    ngOnInit() {
        this.viewName = this.navParams.data.viewName;
        this.reasonList = this.navParams.data.reasonList || [];
        let otherObj = { "reason": "Others", "language_id": "2" };
        const index = this.reasonList.findIndex(object => object.reason === otherObj.reason);
        if (index === -1) {
            this.reasonList.push(otherObj);
        }
        this.studentDetail = this.navParams.data.studentDetail;
        this.mediumList = this.navParams.data.mediumList;
        this.randomQuestionList = this.navParams.data.questionList;
        if (this.randomQuestionList) {
            const ansEmpty = this.randomQuestionList.filter((rq) => rq.ans === "");
            const ansPresent = this.randomQuestionList.filter((rq) => rq.ans !== "");
            if (ansEmpty.length > 0) {
                if (ansPresent.length > 0) {
                    const question = ansPresent[0];
                    this.randomQuestionList.forEach((rq) => {
                        rq.ans = question.ans;
                    });
                }
                else {
                    this.randomQuestionList.forEach((rq) => {
                        rq.ans = "check if the student is answering correctly";
                    });
                }
            }
        }
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
            switch (this.languageType) {
                case "en":
                    this.reasonList = this.reasonList.filter((sr) => sr.language_id == 2);
                    break;
                case "ta":
                    this.reasonList = this.reasonList.filter((sr) => sr.language_id == 1);
                default:
                    break;
            }
        });
    }
    _initialiseTranslation() {
        this._translate.get("selectInstruction").subscribe((res) => {
            this.selectInstruction = res;
        });
        this._translate.get("ReasonAssessing").subscribe((res) => {
            this.ReasonAssessing = res;
        });
        this._translate.get("studentIdentify").subscribe((res) => {
            this.studentIdentify = res;
        });
        this._translate.get("chooseMedium").subscribe((res) => {
            this.chooseMedium = res;
        });
        this._translate.get("ok").subscribe((res) => {
            this.ok = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
    }
    mySelectHandler(event) { }
    selectReason(reason) {
        this.selectedReason = reason;
    }
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let submittedData = data;
            if (this.selectedReason != "") {
                this.viewName.selectedReason = this.selectedReason;
                yield this.modalController.dismiss(this.viewName);
            }
        });
    }
    canceldismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.viewName);
        });
    }
};
GraAssessmentReasonmodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
GraAssessmentReasonmodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-graassessmentreasonmodal",
        template: _raw_loader_graassessmentreasonmodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_graassessmentreasonmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GraAssessmentReasonmodalComponent);



/***/ }),

/***/ 60006:
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": function() { return /* binding */ NavigationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./navigation.component.html */ 54533);
/* harmony import */ var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.component.scss */ 68087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() { }
};
NavigationComponent.ctorParameters = () => [];
NavigationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-navigation',
        template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NavigationComponent);



/***/ }),

/***/ 35340:
/*!*******************************************************************************!*\
  !*** ./src/app/components/notification-modal/notification-modal.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationModalComponent": function() { return /* binding */ NotificationModalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_notification_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification-modal.component.html */ 57771);
/* harmony import */ var _notification_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification-modal.component.scss */ 71338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let NotificationModalComponent = class NotificationModalComponent {
    constructor(modalController, navParams, _alertService, _apiService, _translate) {
        this.modalController = modalController;
        this.navParams = navParams;
        this._alertService = _alertService;
        this._apiService = _apiService;
        this._translate = _translate;
    }
    ngOnInit() {
        this.appLanguage();
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("notificationHeading").subscribe((res) => {
            this.notificationHeading = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
    }
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(data);
        });
    }
};
NotificationModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
NotificationModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-notification-modal",
        template: _raw_loader_notification_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationModalComponent);



/***/ }),

/***/ 69945:
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": function() { return /* binding */ NotificationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.component.html */ 95297);
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ 43945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification-modal/notification-modal.component */ 35340);






let NotificationComponent = class NotificationComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    openNotifyModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_2__.NotificationModalComponent,
                cssClass: "my-custom-modal-dashboarc",
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => { });
            return yield modal.present();
        });
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
NotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-notification",
        template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationComponent);



/***/ }),

/***/ 6709:
/*!***************************************************************************!*\
  !*** ./src/app/components/observationmodal/observationmodal.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationmodalComponent": function() { return /* binding */ ObservationmodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observationmodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observationmodal.component.html */ 22733);
/* harmony import */ var _observationmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observationmodal.component.scss */ 78722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);







let ObservationmodalComponent = class ObservationmodalComponent {
    constructor(modalController, _apiService, navParams, _translate) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._translate = _translate;
        this.showTextarea = false;
        this.submitted = false;
        this.teacherDetails = navParams.get("teacherDetails");
    }
    ngOnInit() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
        this.showTextarea = false;
    }
    _initialiseTranslation() {
        this._translate.get("didDiscuss").subscribe((res) => {
            this.didDiscuss = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
        this._translate.get("yes").subscribe((res) => {
            this.yes = res;
        });
        this._translate.get("no").subscribe((res) => {
            this.no = res;
        });
        this._translate.get("giveReason").subscribe((res) => {
            this.giveReason = res;
        });
    }
    dismiss(value, reason) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (value === "no") {
                const v = reason.value.trim();
                if (v.length === 0) {
                    reason.value = undefined;
                    this.submitted = true;
                    return;
                }
            }
            const onClosedData = "Wrapped Up!";
            let body1 = document.getElementsByTagName("ion-modal")[0];
            body1.classList.remove("new-info");
            yield this.modalController.dismiss(value);
            this.showTextarea = false;
        });
    }
    addClass() {
        this._apiService.setName("showText");
    }
};
ObservationmodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService }
];
ObservationmodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-observationmodal",
        template: _raw_loader_observationmodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observationmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationmodalComponent);



/***/ }),

/***/ 75946:
/*!**************************************************************************!*\
  !*** ./src/app/components/observerremark/observationremark.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationremarkComponent": function() { return /* binding */ ObservationremarkComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observationremark_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observationremark.component.html */ 65228);
/* harmony import */ var _observationremark_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observationremark.component.scss */ 83186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let ObservationremarkComponent = class ObservationremarkComponent {
    constructor(modalController, _apiService, navParams, _translate, _router) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._translate = _translate;
        this._router = _router;
        this.showTextarea = false;
        this.submitted = false;
        this.remarks = '';
        this.teacherDetails = navParams.get("teacherDetails");
    }
    ngOnInit() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
        this.showTextarea = false;
    }
    _initialiseTranslation() {
        this._translate.get("didDiscuss").subscribe((res) => {
            this.didDiscuss = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
        this._translate.get("yes").subscribe((res) => {
            this.yes = res;
        });
        this._translate.get("no").subscribe((res) => {
            this.no = res;
        });
        this._translate.get("giveReason").subscribe((res) => {
            this.giveReason = res;
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem("remarks", this.remarks);
            const onClosedData = "Wrapped Up!";
            let body1 = document.getElementsByTagName("ion-modal")[0];
            body1.classList.remove("new-info");
            yield this.modalController.dismiss(this.remarks);
            this.showTextarea = false;
            this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "pre_obs_qns_section_status": localStorage.setItem("pre_obs_qns_section_status", "1") } }]);
        });
    }
    getRemarks(remarks) {
        this.remarks = remarks;
    }
    addClass() {
        this._apiService.setName("showText");
    }
};
ObservationremarkComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ObservationremarkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-observationremark",
        template: _raw_loader_observationremark_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observationremark_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationremarkComponent);



/***/ }),

/***/ 11143:
/*!***********************************************************!*\
  !*** ./src/app/components/progress/progress.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressComponent": function() { return /* binding */ ProgressComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./progress.component.html */ 35981);
/* harmony import */ var _progress_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.component.scss */ 40512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);






let ProgressComponent = class ProgressComponent {
    constructor(_apiService, _translate) {
        this._apiService = _apiService;
        this._translate = _translate;
    }
    ngOnInit() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get('completed').subscribe((res) => {
            this.completed = res;
        });
    }
};
ProgressComponent.ctorParameters = () => [
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService }
];
ProgressComponent.propDecorators = {
    progress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input, args: ['progress',] }]
};
ProgressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-progress',
        template: _raw_loader_progress_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_progress_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProgressComponent);



/***/ }),

/***/ 28801:
/*!*************************************************************!*\
  !*** ./src/app/components/questions/questions.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsComponent": function() { return /* binding */ QuestionsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_questions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./questions.component.html */ 16924);
/* harmony import */ var _questions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.component.scss */ 75463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);




//import { Camera, CameraOptions } from "@ionic-native/camera/ngx";


//import { AlertService } from "src/app/services/tnvn/services/alert.service";




let QuestionsComponent = class QuestionsComponent {
    constructor(camera, alertService, uploadService, file, _translate, apiService) {
        this.camera = camera;
        this.alertService = alertService;
        this.uploadService = uploadService;
        this.file = file;
        this._translate = _translate;
        this.apiService = apiService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.imageData = "";
        this.inputanswer = "";
        this.openModal = false;
        this.date = new Date().getDate();
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth();
        this.myDate = "";
    }
    ngOnInit() {
        this.month = Number(this.month) + 1;
        if (Number(this.month) < 10) {
            this.month = '0' + this.month;
        }
        if (Number(this.date) < 10) {
            this.date = '0' + this.date;
        }
        this.myDate = this.year + '-' + this.month + '-' + this.date;
        this.apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("fillAnswer").subscribe((res) => {
            this.fillAnswer = res;
        });
    }
    answerChecked(answer, question, answerIndex, questionIndex) {
        debugger;
        let questionInfo = {
            answer: answer,
            question: question,
            answerIndex: answerIndex,
            questionIndex: questionIndex,
        };
        this.valueChange.emit(questionInfo);
    }
    otherChange(answer, question, answerIndex, questionIndex, otherAnswer) {
        let questionInfo = {
            answer: answer,
            question: question,
            answerIndex: answerIndex,
            questionIndex: questionIndex,
            otherAnswer: otherAnswer,
        };
        // This can be optimised later, if time permits
        if ((answer.ans.toLowerCase() === "other" || answer.ans.toLowerCase() === "others" || answer.ans === "மற்றவை") &&
            question.type_of_ans === "2") {
            question.selectedAnswer[0].otherAns = otherAnswer;
        }
        if ((answer.ans.toLowerCase() === "other" || answer.ans.toLowerCase() === "others" || answer.ans === "மற்றவை") &&
            question.type_of_ans === "1") {
            this.valueChange.emit(questionInfo);
        }
    }
    // onSelectFile(event) {
    //     if (event.target.files && event.target.files[0]) {
    //       if (event.target.files[0].size <= 1000000000) {
    //         var fileName = event.target.files[0].name;
    //         var splittedName = fileName.split(".");
    //         const fileReader: FileReader = new FileReader();
    //         fileReader.readAsDataURL(event.target.files[0]);
    //         fileReader.onload = (event: Event) => {
    //           this.uploadUrl = fileReader.result;
    //           var bucketName = "renewalapplicationemis";
    //           var filename = splittedName[0];
    //           var ext = splittedName[1];
    //           let expiry: number = 300;
    //           this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
    //             if (result) {
    //               let files: FileList = this.doc_file;
    //               let file: File = files[0];
    //               this.uploadService.uploadFile(result.url, file).subscribe((res) => {
    //                 //this.form.controls.Pht1.setValue(result.key);
    //                 this.getUploadedFiles(result.key);
    //               });
    //               this.alertService.success('File Uploaded Successfully');
    //             }
    //             else {
    //               this.alertService.error('Error in Uploading File please try again');
    //             }
    //           });
    //         };
    //       } else {
    //         this.alertService.error('File Can`t uploaded because Image size should not exceed 1GB');
    //       }
    //     }
    //   }
    getUploadedFiles(key) {
        var bucketName = "renewalapplicationemis";
        var filename = key;
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                return result.url;
            }
            else {
                this.alertService.error('Error in Uploading File please try again');
            }
        });
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.data);
        if (result == true) {
            return event;
        }
        else {
            event.target.value = event.target.value.slice(0, -1);
        }
    }
    openCamera(answer, question, answerIndex, questionIndex) {
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then((imageData) => {
            {
                this.file.resolveLocalFilesystemUrl(imageData).then((entry) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    entry.file(file => {
                        var fileName = file.name;
                        this.docfile = file;
                        var splittedName = fileName.split(".");
                        const fileReader = new FileReader();
                        fileReader.readAsDataURL(file);
                        fileReader.onload = (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            this.uploadUrl = fileReader.result;
                            var bucketName = "renewalapplicationemis";
                            var filename = splittedName[0];
                            var ext = splittedName[1];
                            let expiry = 300;
                            yield this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                if (result) {
                                    let file = this.docfile;
                                    yield this.uploadService.uploadFile(result.url, file).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                        yield this.uploadService.getUploadedFiles(bucketName, file, expiry).subscribe((urlresult) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                                            if (urlresult) {
                                                this.imageData = result.key;
                                                let questionInfo = {
                                                    answer: this.imageData,
                                                    question: question,
                                                    answerIndex: answerIndex,
                                                    questionIndex: questionIndex,
                                                };
                                                this.valueChange.emit(questionInfo);
                                            }
                                            else {
                                                this.alertService.error('Error in Uploading File please try again');
                                            }
                                        }));
                                    }));
                                    this.alertService.success('File Uploaded Successfully');
                                }
                            }));
                        });
                    });
                }));
            }
        }, (err) => {
            alert("error " + JSON.stringify(err));
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            const formData = new FormData();
        };
        reader.readAsArrayBuffer(file);
    }
    getQuestion(question, id) {
        if (question.selectedAnswer.length) {
            let selectedAnswerIds = question.selectedAnswer.map((el) => {
                return el.answer_id;
            });
            let found = selectedAnswerIds.includes(id);
            return found;
        }
        else {
            return false;
        }
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService }
];
QuestionsComponent.propDecorators = {
    treeData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }]
};
QuestionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-questions",
        template: _raw_loader_questions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questions_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuestionsComponent);



/***/ }),

/***/ 97759:
/*!*************************************************************************!*\
  !*** ./src/app/components/schoolListModal/schoollistmodal.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolListModalComponent": function() { return /* binding */ SchoolListModalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_schoollistmodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./schoollistmodal.component.html */ 91945);
/* harmony import */ var _schoollistmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schoollistmodal.component.scss */ 70597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);









let SchoolListModalComponent = class SchoolListModalComponent {
    constructor(navParams, modalController, userSessionService, _alerService, _apiService, _translate) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.userSessionService = userSessionService;
        this._alerService = _alerService;
        this._apiService = _apiService;
        this._translate = _translate;
        this.viewName = [];
        this.schoolList = [];
        this.reasonList = [];
        this.mediumList = [];
        this.randomQuestionList = [];
        this.attemptedPercentageValue = Math.round((9 / 10) * 100);
        this.attemptedProgress = Math.round((9 / 10) * 100);
        this.correctedProgress = Math.round((7 / 10) * 100);
        this.percentage = Math.round((7 / 10) * 100);
        this.percentageValue = Math.round((7 / 10) * 100);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.viewName = yield this.navParams.data.viewName;
            let selectedlevel = yield this.navParams.data.selectedlevel;
            let requestData = {
                "username": localStorage.getItem("username"),
                "zone_id": '',
                "block_id": '',
                "level": selectedlevel
            };
            if (Number(this.userSessionService.emis_usertype()) == 6) {
                requestData.zone_id = this.viewName.zone_id;
                requestData.block_id = this.userSessionService.block_id();
            }
            if (Number(this.userSessionService.emis_usertype()) != 6) {
                requestData.block_id = this.viewName.block_id;
            }
            let schoolList = [];
            this._apiService.getObservedSchools(requestData).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(response);
                this.schoolList = response.records.schoolList;
                for (var i = 0; i < this.schoolList.length; i++) {
                    for (var j = 0; j < this.schoolList[i].cluster_schoool_list.length; j++) {
                        this.schoolList[i].cluster_schoool_list = this.schoolList[i].cluster_schoool_list.sort((a, b) => (b.status > a.status) ? 1 : ((a.status > b.status) ? -1 : 0));
                    }
                }
            }), (error) => {
                // this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            // this.attemptedProgress = Number(this.viewName.attempted_words) / Number(this.viewName.book_total_words);
            // this.correctedProgress = Number(this.viewName.correct_words) / Number(this.viewName.book_total_words);
            // this.percentage = Number(this.viewName.correct_words) / Number(this.viewName.book_total_words);
            // this.attemptedPercentageValue = Number(this.viewName.correct_words) / Number(this.viewName.attempted_words);
            // this.percentageValue = Math.round(this.percentage*100);
            // this.attemptedPercentage = Math.round(this.attemptedPercentageValue*100);
            this._apiService.languageInfo.subscribe((data) => {
                this.languageType = data;
                this._translate.use(this.languageType);
                this._initialiseTranslation();
                switch (this.languageType) {
                    case "en":
                        this.reasonList = this.reasonList.filter((sr) => sr.language_id == 2);
                        break;
                    case "ta":
                        this.reasonList = this.reasonList.filter((sr) => sr.language_id == 1);
                    default:
                        break;
                }
            });
        });
    }
    _initialiseTranslation() {
        this._translate.get("selectInstruction").subscribe((res) => {
            this.selectInstruction = res;
        });
        this._translate.get("ReasonAssessing").subscribe((res) => {
            this.ReasonAssessing = res;
        });
        this._translate.get("studentIdentify").subscribe((res) => {
            this.studentIdentify = res;
        });
        this._translate.get("chooseMedium").subscribe((res) => {
            this.chooseMedium = res;
        });
        this._translate.get("ok").subscribe((res) => {
            this.ok = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
    }
    mySelectHandler(event) { }
    selectReason(reason, index) {
        this.selectedReason = reason;
    }
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let submittedData = data;
            if (submittedData != "Cancel" && this.viewName === "view1") {
                if (this.selectedReason != undefined) {
                    let studentReason = {
                        student_emisid: this.studentDetail.id,
                        student_name: this.studentDetail.name,
                        reason: this.selectedReason.reason,
                        description: "Reason for not assessing student",
                    };
                    yield this.modalController.dismiss(studentReason);
                }
                else {
                    this._alerService.showAlert("Please check any one");
                }
            }
            else {
                yield this.modalController.dismiss(submittedData);
            }
        });
    }
};
SchoolListModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
SchoolListModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-schoollistmodal",
        template: _raw_loader_schoollistmodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_schoollistmodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchoolListModalComponent);



/***/ }),

/***/ 30881:
/*!*********************************************!*\
  !*** ./src/app/components/shared.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress/progress.component */ 11143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ 60006);
/* harmony import */ var _classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classroommodal/classroommodal.component */ 71414);
/* harmony import */ var _assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessmentmodal/assessmentmodal.component */ 40036);
/* harmony import */ var _observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observationmodal/observationmodal.component */ 6709);
/* harmony import */ var _observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observerremark/observationremark.component */ 75946);
/* harmony import */ var _attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendancemodal/attendancemodal.component */ 20471);
/* harmony import */ var _dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboardmodal/dashboardmodal.component */ 94926);
/* harmony import */ var _emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emimodal/emimodal.component */ 79615);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./questions/questions.component */ 28801);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification/notification.component */ 69945);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ionic-selectable */ 93319);
/* harmony import */ var _notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notification-modal/notification-modal.component */ 35340);
/* harmony import */ var _graassessmentmodal_graassessmentmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graassessmentmodal/graassessmentmodal.component */ 68584);
/* harmony import */ var _graassessmentreasonmodal_graassessmentreasonmodal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./graassessmentreasonmodal/graassessmentreasonmodal.component */ 20601);
/* harmony import */ var _schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./schoolListModal/schoollistmodal.component */ 97759);
/* harmony import */ var _apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./apiErrorLog/apiErrorLog.component */ 98747);
/* harmony import */ var _observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./observationfinalremark/observationfinalremark.component */ 26463);
/* harmony import */ var _common_pipe_search_all__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common-pipe/search-all */ 68312);
























let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule)({
        declarations: [
            _progress_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent,
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent,
            _classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__.ClassroommodalComponent,
            _assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_3__.AssessmentmodalComponent,
            _observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__.ObservationmodalComponent,
            _observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_5__.ObservationremarkComponent,
            _observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_16__.ObservationfinalremarkComponent,
            _attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_6__.AttendancemodalComponent,
            _dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_7__.DashboardmodalComponent,
            _emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
            _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__.QuestionsComponent,
            _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__.NotificationComponent,
            _notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_11__.NotificationModalComponent,
            _graassessmentmodal_graassessmentmodal_component__WEBPACK_IMPORTED_MODULE_12__.GraAssessmentmodalComponent,
            _graassessmentreasonmodal_graassessmentreasonmodal_component__WEBPACK_IMPORTED_MODULE_13__.GraAssessmentReasonmodalComponent,
            _schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_14__.SchoolListModalComponent,
            _apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_15__.ApiErrorLogComponent,
            _common_pipe_search_all__WEBPACK_IMPORTED_MODULE_17__.SearchAllPipe
        ],
        entryComponents: [
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent,
            _classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__.ClassroommodalComponent,
            _assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_3__.AssessmentmodalComponent,
            _observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__.ObservationmodalComponent,
            _observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_5__.ObservationremarkComponent,
            _observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_16__.ObservationfinalremarkComponent,
            _attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_6__.AttendancemodalComponent,
            _dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_7__.DashboardmodalComponent,
            _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__.QuestionsComponent,
            _emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
            _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__.NotificationComponent,
            _notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_11__.NotificationModalComponent,
            _graassessmentmodal_graassessmentmodal_component__WEBPACK_IMPORTED_MODULE_12__.GraAssessmentmodalComponent,
            _graassessmentreasonmodal_graassessmentreasonmodal_component__WEBPACK_IMPORTED_MODULE_13__.GraAssessmentReasonmodalComponent,
            _schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_14__.SchoolListModalComponent,
            _apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_15__.ApiErrorLogComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_23__.IonicSelectableModule
        ],
        providers: [],
        exports: [_progress_progress_component__WEBPACK_IMPORTED_MODULE_0__.ProgressComponent,
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent,
            _classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__.ClassroommodalComponent,
            _assessmentmodal_assessmentmodal_component__WEBPACK_IMPORTED_MODULE_3__.AssessmentmodalComponent,
            _observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__.ObservationmodalComponent,
            _observerremark_observationremark_component__WEBPACK_IMPORTED_MODULE_5__.ObservationremarkComponent,
            _observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_16__.ObservationfinalremarkComponent,
            _attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_6__.AttendancemodalComponent,
            _dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_7__.DashboardmodalComponent,
            _questions_questions_component__WEBPACK_IMPORTED_MODULE_9__.QuestionsComponent,
            _emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
            _notification_notification_component__WEBPACK_IMPORTED_MODULE_10__.NotificationComponent,
            _notification_modal_notification_modal_component__WEBPACK_IMPORTED_MODULE_11__.NotificationModalComponent,
            _graassessmentmodal_graassessmentmodal_component__WEBPACK_IMPORTED_MODULE_12__.GraAssessmentmodalComponent,
            _graassessmentreasonmodal_graassessmentreasonmodal_component__WEBPACK_IMPORTED_MODULE_13__.GraAssessmentReasonmodalComponent,
            _schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_14__.SchoolListModalComponent,
            _apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_15__.ApiErrorLogComponent,
            _common_pipe_search_all__WEBPACK_IMPORTED_MODULE_17__.SearchAllPipe
        ],
    })
], SharedModule);



/***/ }),

/***/ 99804:
/*!***************************************************************************!*\
  !*** ./src/app/components/assessmentmodal/assessmentmodal.component.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3Nlc3NtZW50bW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 18580:
/*!***************************************************************************!*\
  !*** ./src/app/components/attendancemodal/attendancemodal.component.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".errorMessage {\n  font-size: 11px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2Vtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImF0dGVuZGFuY2Vtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvck1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 47101:
/*!*************************************************************************!*\
  !*** ./src/app/components/classroommodal/classroommodal.component.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzc3Jvb21tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 59618:
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboardmodal/dashboardmodal.component.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("select option {\n  font-size: 12px;\n}\n\n.select_box.plan {\n  font-size: 12px;\n  border-radius: 5px;\n  border: 2px solid #000000;\n}\n\n.input-icons ion-icon {\n  position: absolute;\n}\n\nion-icon {\n  min-width: 40px;\n  right: 0;\n  padding: 5px 7px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZG1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0MseUJBQUE7QUFFTDs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0FBSUoiLCJmaWxlIjoiZGFzaGJvYXJkbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWxlY3Qgb3B0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5zZWxlY3RfYm94LnBsYW57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcclxufVxyXG4uaW5wdXQtaWNvbnMgaW9uLWljb257IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxufSBcclxuaW9uLWljb24gIHsgXHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6NXB4IDdweCAwcHggMHB4O1xyXG5cclxufSAiXX0= */");

/***/ }),

/***/ 4036:
/*!*********************************************************************************!*\
  !*** ./src/app/components/graassessmentmodal/graassessmentmodal.component.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress {\n  background-color: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWFzc2Vzc21lbnRtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiZ3JhYXNzZXNzbWVudG1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ 89143:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/graassessmentreasonmodal/graassessmentreasonmodal.component.scss ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-md {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyYWFzc2Vzc21lbnRyZWFzb25tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiZ3JhYXNzZXNzbWVudHJlYXNvbm1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtbWR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ 68087:
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list ion-item {\n  border-bottom: 1px solid #BDBDBD;\n}\n\nion-icon {\n  right: 0;\n  position: absolute;\n  top: 2px;\n  padding-right: 12px;\n}\n\n.border-bottom-primary {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQ0FBQTtBQUFKOztBQUVBO0VBQ0ksUUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBR0E7RUFDSSx3QkFBQTtBQUFKIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWxpc3QgaW9uLWl0ZW17XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JEQkRCRDtcclxufVxyXG5pb24taWNvbntcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmJvcmRlci1ib3R0b20tcHJpbWFyeXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxufSJdfQ== */");

/***/ }),

/***/ 71338:
/*!*********************************************************************************!*\
  !*** ./src/app/components/notification-modal/notification-modal.component.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notifications-wrapper {\n  position: relative;\n  height: 100%;\n}\n.notifications-wrapper .n-footer {\n  position: absolute;\n  bottom: 15px;\n  width: calc(100% - 20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUNKIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb25zLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5uLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 43945:
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 78722:
/*!*****************************************************************************!*\
  !*** ./src/app/components/observationmodal/observationmodal.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion_text-area {\n  border: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9ubW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxpQkFBQTtBQUFBIiwiZmlsZSI6Im9ic2VydmF0aW9ubW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uX3RleHQtYXJlYXtcclxuXHJcbmJvcmRlcjoxcHggc29saWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 83186:
/*!****************************************************************************!*\
  !*** ./src/app/components/observerremark/observationremark.component.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-area {\n  border: 2px solid;\n  min-height: 250px;\n  font-size: 18px;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9ucmVtYXJrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoib2JzZXJ2YXRpb25yZW1hcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1hcmVhIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 40512:
/*!*************************************************************!*\
  !*** ./src/app/components/progress/progress.component.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-outer {\n  width: 100%;\n  text-align: center;\n  background-color: #C4C4C4;\n  color: #fff;\n}\n\n.progress-inner {\n  overflow: hidden;\n  background-color: #8B67B3;\n  height: 20px;\n}\n\n.percentage-value {\n  position: absolute;\n  top: 0;\n  margin-bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksV0FBQTtFQUNKLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0k7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQUtJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRlIiLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgICAucHJvZ3Jlc3Mtb3V0ZXIge1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XHJcbiAgICBjb2xvcjogI2ZmZjsgICBcclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3MtaW5uZXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojOEI2N0IzO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuXHJcbiAgICB9XHJcbiAgICAucGVyY2VudGFnZS12YWx1ZXtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 75463:
/*!***************************************************************!*\
  !*** ./src/app/components/questions/questions.component.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-transparent {\n  --background: transparent !important ;\n}\n\nion-content {\n  --background: #f2f2f7;\n}\n\nion-datetime {\n  height: auto;\n  width: auto;\n  max-width: 350px;\n}\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));\n  grid-gap: 0 10px;\n}\n\nion-modal {\n  --width: 290px;\n  --height: 382px;\n  --border-radius: 8px;\n}\n\nion-modal ion-datetime {\n  height: 382px;\n}\n\n.section {\n  background-color: white;\n  position: relative;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1rem;\n  max-width: 300px;\n  width: 100%;\n  border: none;\n}\n\nion-datetime {\n  height: 100%;\n  transform: translateY(4px);\n  width: 100%;\n}\n\nion-icon {\n  z-index: 100;\n}\n\nion-label {\n  max-width: 100% !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.header {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.header-txt {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  border-radius: 10px;\n}\n\n.heading-txt {\n  background: #e6ccff;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.item-style {\n  margin-bottom: 15px;\n  border-radius: 6px;\n}\n\n.background {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  padding: 0px;\n}\n\n.ques-txt {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.bt-10 {\n  padding-bottom: 10p;\n}\n\n.list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.item-border {\n  border-radius: 10px;\n  border-top: 5px solid #8b67b3;\n}\n\nion-list {\n  background: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUlBO0VBQ0UsMEJBQUE7QUFERjs7QUFHQTtFQUNFLFVBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFTRjs7QUFQQTtFQUNFLCtCQUFBO0FBVUY7O0FBUEE7RUFDRSwwQkFBQTtBQVVGOztBQVBBO0VBQ0UsbUJBQUE7RUFDRSw2QkFBQTtBQVVKOztBQVBBO0VBQ0UsNEJBQUE7QUFVRiIsImZpbGUiOiJxdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctdHJhbnNwYXJlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2YyZjJmNztcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcblxyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjg4cHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAwIDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCB7XHJcbiAgLS13aWR0aDogMjkwcHg7XHJcbiAgLS1oZWlnaHQ6IDM4MnB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5pb24tbW9kYWwgaW9uLWRhdGV0aW1lIHtcclxuICBoZWlnaHQ6IDM4MnB4O1xyXG59XHJcbi5zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuaW9uLWRhdGV0aW1lIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnZhbGlkLWNsciB7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6MTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXR4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206MTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5oZWFkaW5nLXR4dCB7XHJcbiAgYmFja2dyb3VuZDogI2U2Y2NmZjtcclxuICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLml0ZW0tc3R5bGUge1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuLmJhY2tncm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOjBweDtcclxufVxyXG4ucXVlcy10eHQge1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuLmJ0LTEwIHtcclxuICBwYWRkaW5nLWJvdHRvbToxMHBcclxufVxyXG4ubGlzdCB7XHJcbiAgcGFkZGluZy1ib3R0b206MHB4O1xyXG4gIHBhZGRpbmctdG9wOjBweFxyXG59XHJcbi5yYWRpbyB7XHJcbiAgcGFkZGluZy1yaWdodDo0MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXRvcDogM3B4XHJcbn1cclxuLmxibCB7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4uaW5wdXQtY2xyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgcGFkZGluZy1sZWZ0OjBweDtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuaW9uLWlucHV0IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzhiNjdiMztcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 70597:
/*!***************************************************************************!*\
  !*** ./src/app/components/schoolListModal/schoollistmodal.component.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress {\n  background-color: none;\n}\n\n.last-row {\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  line-height: 1.5;\n  border-bottom: none;\n}\n\n.observed {\n  color: green;\n}\n\n.not-observed {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbGxpc3Rtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFFO0VBQ0UsWUFBQTtBQUdKOztBQURFO0VBQ0UsVUFBQTtBQUlKIiwiZmlsZSI6InNjaG9vbGxpc3Rtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbn1cclxuLmxhc3Qtcm93eyAgXHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgICAgXHJcbiAgfVxyXG4gIC5vYnNlcnZlZHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgLm5vdC1vYnNlcnZlZHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 43241:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/assessmentmodal/assessmentmodal.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text *ngIf=\"viewName!='refer'\" color=\"\" class=\"ion-text-center pt-2\">\r\n      <p><b> {{studentDetail?.name}}</b></p>\r\n    </ion-text>\r\n\r\n    <div *ngIf=\"viewName=='view1'\">\r\n      <ion-list lines=\"none\">\r\n        <ion-radio-group>\r\n          <ion-list-header>\r\n            <ion-label [ngClass]=\"{'ta-font': this.languageType === 'ta'}\">{{this.ReasonAssessing}}: </ion-label>\r\n          </ion-list-header>\r\n\r\n          <ion-item *ngFor=\"let reasonInfo of reasonList;let i = index\">\r\n            <ion-label class=\"radio-btn-label fs-12\"> {{reasonInfo.reason}}</ion-label>\r\n            <ion-radio class=\"radio-btn\" slot=\"start\" value={{reasonInfo.reason}}\r\n              (click)=\"selectReason(reasonInfo,i)\"></ion-radio>\r\n          </ion-item>\r\n\r\n        </ion-radio-group>\r\n\r\n      </ion-list>\r\n    </div>\r\n\r\n\r\n    <!---MEDIUM OF INSTURCTION-->\r\n\r\n\r\n    <div *ngIf=\"viewName=='view2'\" class=\"mb-3\">\r\n      <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n        <p [ngClass]=\"{'ta-font': this.languageType === 'ta'}\">{{this.selectInstruction}} :</p>\r\n      </ion-text>\r\n\r\n      <ion-item class=\"border\">\r\n        <!-- <div class=\"select_box\"> -->\r\n        <ion-label>{{ this.chooseMedium }}</ion-label>\r\n        <ion-select ngModel (ngModelChange)=\"mySelectHandler($event)\">\r\n          <!-- <ion-select-option value=\"\" disabled selected hidden>{{this.chooseMedium}}</ion-select-option> -->\r\n          <ion-select-option *ngFor=\"let data of mediumList\" [value]=\"data\">{{data.medium}}</ion-select-option>\r\n        </ion-select>\r\n        <!-- </div> -->\r\n      </ion-item>\r\n    </div>\r\n\r\n\r\n\r\n    <!---->\r\n\r\n\r\n\r\n\r\n    <!--REFER-->\r\n    <div *ngIf=\"viewName=='refer'\" class=\"mb-3\">\r\n      <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n        <p [ngClass]=\"{'ta-font': this.languageType === 'ta'}\">{{this.studentIdentify}}:</p>\r\n      </ion-text>\r\n      <div class=\"text-center\">\r\n        <p *ngFor=\"let question of randomQuestionList;let i =index\" class=\"mb-0\"> Q{{i+1}}, {{question.ans}} </p>\r\n\r\n        <ion-button color=\"primary\" class=\"btn_modal-cancel\" (click)=\"dismiss('Ok')\"\r\n          [ngClass]=\"{'ta-font': this.languageType === 'ta'}\">{{this.ok}}</ion-button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div *ngIf=\"viewName!='refer'\" class=\"d-flex justify-content-center\">\r\n      <ion-button class=\"btn_modal-cancel\" (click)=\"dismiss('Cancel')\"\r\n        [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">\r\n        {{this.cancel}}</ion-button>\r\n      <ion-button class=\"btn_modal-success\" (click)=\"dismiss('Submit')\"\r\n        [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">\r\n        {{this.submit}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 40222:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/attendancemodal/attendancemodal.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"mb-0\">\r\n        <b>{{ studentName }} </b>\r\n      </p>\r\n      <p\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-10': this.languageType === 'ta',\r\n          'fs-16': this.languageType === 'en'\r\n        }\"\r\n      >\r\n        {{ this.reasonInfoTxt }}:\r\n      </p>\r\n    </ion-text>\r\n    <div>\r\n      <ion-list lines=\"none\">\r\n        <ion-radio-group>\r\n          <ion-item\r\n            *ngFor=\"let reasonData of misMatchReasonList; let i = index\"\r\n          >\r\n            <ion-label class=\"text-show fs-12\">{{\r\n              reasonData.reason\r\n            }}</ion-label>\r\n            <ion-radio\r\n              class=\"radio-btn\"\r\n              slot=\"start\"\r\n              value=\"{{ reasonData.reason_id }}\"\r\n              (ionSelect)=\"mcqAnswer(reasonData, i)\"\r\n            >\r\n            </ion-radio>\r\n          </ion-item>\r\n          <ion-item *ngIf=\"showInput\">\r\n            <input\r\n              required=\"true\"\r\n              type=\"text\"\r\n              [(ngModel)]=\"reasonInput\"\r\n              name=\"name\"\r\n              class=\"w-100\"\r\n            />\r\n          </ion-item>\r\n          <div class=\"error errorMessage\" *ngIf=\"showInput && showErrorMessage\">\r\n            Please type the reason for mismatch\r\n          </div>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <ion-button\r\n        class=\"btn_modal-cancel\"\r\n        (click)=\"dismiss('Cancel')\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-10': this.languageType === 'ta',\r\n          'modal-btn-w-50': this.languageType === 'ta'\r\n        }\"\r\n      >\r\n        {{ this.cancel }}</ion-button\r\n      >\r\n      <ion-button\r\n        class=\"btn_modal-success\"\r\n        (click)=\"dismiss('value')\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-10': this.languageType === 'ta',\r\n          'modal-btn-w-50': this.languageType === 'ta'\r\n        }\"\r\n      >\r\n        {{ this.submit }}</ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 2113:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classroommodal/classroommodal.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <div class=\"modalcontent-wrapper\">\r\n        <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n            <p class=\"fs-12\"> Select standards available for observation :</p>\r\n        </ion-text>\r\n\r\n          <ion-list  lines=\"none\">\r\n              <ion-item >\r\n                <ion-checkbox slot=\"start\" color=\"success\" class=\"m-2\"></ion-checkbox>\r\n                <ion-label>1</ion-label>\r\n              </ion-item>\r\n              <ion-item>\r\n                  <ion-checkbox slot=\"start\" color=\"success\"  class=\"m-2\"></ion-checkbox>\r\n                  <ion-label>2</ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-checkbox slot=\"start\" color=\"success\"  class=\"m-2\"></ion-checkbox>\r\n                    <ion-label>3</ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                      <ion-checkbox slot=\"start\" color=\"success\"  class=\"m-2\"></ion-checkbox>\r\n                      <ion-label>4</ion-label>\r\n                    </ion-item>\r\n            </ion-list>\r\n            <div class=\"d-flex justify-content-center\">\r\n                <ion-button class=\"btn_modal-cancel\" (click)=\"dismiss()\">Cancel</ion-button>\r\n                <ion-button  class=\"btn_modal-success\">Submit</ion-button>\r\n                </div>\r\n     </div>\r\n      </ion-content>\r\n    ");

/***/ }),

/***/ 21408:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboardmodal/dashboardmodal.component.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p\r\n        class=\"color-dgrey\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-9': this.languageType === 'ta',\r\n          'fs-12': this.languageType === 'en'\r\n        }\"\r\n      >\r\n        {{ this.schoolsReason }}\r\n      </p>\r\n    </ion-text>\r\n    <ion-list lines=\"none\">\r\n      <ion-item *ngFor=\"let school of allSchoolList; let i = index\">\r\n        <ion-label class=\"color-dgrey fs-12\"\r\n          >{{ school.school_name }}:\r\n          <div *ngIf=\"selectedReason[i] != 'Others'\" class=\"select_box\">\r\n            <select\r\n              ngModel\r\n              (ngModelChange)=\"mySelectHandler($event, i, school)\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>{{\r\n                this.reason\r\n              }}</option>\r\n\r\n              <option\r\n                *ngFor=\"let reason_info of schoolReasons\"\r\n                [ngValue]=\"reason_info.reason\"\r\n                >{{ reason_info.reason }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div *ngIf=\"selectedReason[i] == 'Others'\" class=\"input-icons\">\r\n            <ion-icon\r\n              name=\"close\"\r\n              class=\"text-danger\"\r\n              (click)=\"mySelectHandler('none', i, school)\"\r\n            ></ion-icon>\r\n            <input\r\n              type=\"text\"\r\n              name=\"lname\"\r\n              class=\"w-100\"\r\n              (change)=\"inputHandler('input', $event.target.value, i, school)\"\r\n              placeholder=\"Others\"\r\n              disabled\r\n            />\r\n          </div>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n  <div class=\"px-2\">\r\n    <ion-label class=\"color-black\"\r\n      ><b\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-10': this.languageType === 'ta',\r\n          'fs-11': this.languageType === 'en'\r\n        }\"\r\n      >\r\n        {{ this.visitSchool }}</b\r\n      >\r\n      <div>      \r\n        <ion-item  class=\"border\"> \r\n          <ion-label>{{ this.chooseSchool }}</ion-label>\r\n          <ionic-selectable item-content [(ngModel)]=\"school_id\" itemValueField=\"school_id\" itemTextField=\"school_name\" [items]=\"unVisitedSchoolList\" [canSearch]=\"true\"\r\n          (onChange)=\"planToVisitSchool($event)\">\r\n          </ionic-selectable>\r\n        </ion-item>    \r\n      </div>\r\n    </ion-label>\r\n  </div>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <div class=\"d-flex justify-content-center\">\r\n      <ion-button\r\n        class=\"btn_modal-cancel\"\r\n        (click)=\"dismiss('Cancel')\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-11': this.languageType === 'ta',\r\n          'modal-btn-w-50': this.languageType === 'ta'\r\n        }\"\r\n      >\r\n        {{ this.cancel }}</ion-button\r\n      >\r\n      <ion-button\r\n        class=\"btn_modal-success\"\r\n        (click)=\"dismiss('Submit')\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-11': this.languageType === 'ta',\r\n          'modal-btn-w-50': this.languageType === 'ta'\r\n        }\"\r\n      >\r\n        {{ this.submit }}</ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 71360:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/graassessmentmodal/graassessmentmodal.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-icon name=\"close-circle\" style=\"float: right;font-size:30px\" (click)=\"dismiss(ok)\"></ion-icon>\r\n  <div class=\"modalcontent-wrapper\" *ngIf=\"this.viewName.score\">\r\n    <ion-text  color=\"\" class=\"ion-text-center pt-2\" style=\"color:#8B67B3;font-size: 16px;\">\r\n      <p><b> {{this.viewName?.name}} ({{this.viewName?.user_id}}) assessment completed successfully</b></p>\r\n    </ion-text>\r\n\r\n    <div >\r\n      <ion-text>Attempted Words</ion-text>\r\n      <div style=\"display:flex;align-items: center;\">        \r\n        <ion-progress-bar [value]=\"this.attemptedProgress\" style=\"color:#007bff;width:80%\"></ion-progress-bar>\r\n        <ion-text style=\"width:20%;text-align: center;\">{{this.viewName.attempted_words}}/{{this.viewName.book_total_words}}</ion-text>\r\n      </div>        \r\n    </div>\r\n\r\n\r\n    <div>\r\n      <ion-text>Corrected Words</ion-text>\r\n      <div style=\"display:flex;align-items: center;\">        \r\n        <ion-progress-bar [value]=\"this.correctedProgress\"  style=\"color:#28a745;width:80%\"></ion-progress-bar>\r\n        <ion-text style=\"width:20%;text-align: center;\">{{this.viewName.correct_words}}/{{this.viewName.book_total_words}}</ion-text>\r\n      </div>        \r\n    </div>\r\n\r\n    <div >\r\n      <ion-text>% of correct words/attempted words</ion-text>\r\n      <div style=\"display:flex;align-items: center;\">        \r\n        <ion-progress-bar [value]=\"this.attemptedPercentageValue\" style=\"color:#28a745;width:80%\"></ion-progress-bar>\r\n        <ion-text style=\"width:20%;text-align: center;\">{{this.attemptedPercentage}}</ion-text>\r\n      </div>        \r\n    </div>    \r\n\r\n    <div >\r\n      <ion-text>% of correct words/book total words</ion-text>\r\n      <div style=\"display:flex;align-items: center;\">        \r\n        <ion-progress-bar [value]=\"this.percentage\"  style=\"color:#28a745;width:80%\"></ion-progress-bar>\r\n        <ion-text style=\"width:20%;text-align: center;\">{{this.percentageValue}}</ion-text>\r\n      </div>        \r\n    </div>   \r\n\r\n    \r\n  </div>\r\n\r\n  <div class=\"modalcontent-wrapper\" *ngIf=\"this.viewName.selectedReason\">\r\n    <ion-text  color=\"\" class=\"ion-text-center pt-2\" style=\"color:#8B67B3;font-size: 16px;\">\r\n      <p><b> {{this.viewName?.name}} ({{this.viewName?.user_id}}) assessment not completed </b></p>\r\n    </ion-text>\r\n\r\n    <div  style=\"text-align: center;color:red\">\r\n      <ion-text style=\"font-size:24px;text-align: center;\">{{this.viewName.selectedReason}}</ion-text>         \r\n    </div>                  \r\n  </div>\r\n\r\n  <div  class=\"d-flex justify-content-center\">      \r\n    <ion-button class=\"btn_modal-success\" (click)=\"dismiss('ok')\"\r\n      [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">\r\n      ok</ion-button>\r\n  </div>   \r\n</ion-content>");

/***/ }),

/***/ 40212:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/graassessmentreasonmodal/graassessmentreasonmodal.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-icon name=\"close-circle\" style=\"float: right;font-size:30px\" (click)=\"dismiss('ok')\"></ion-icon>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text  color=\"\" class=\"ion-text-center pt-2\" style=\"color:#8B67B3;font-size: 16px;\">\r\n      <p><b> Please select the reason for skipping a student?</b></p>\r\n    </ion-text>\r\n\r\n    <div >\r\n      <ion-list>\r\n        <ion-radio-group value=\"selectedReason\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>Issue with \"Google Read Along\" app</ion-label>\r\n            <ion-radio slot=\"start\" (click)=\"selectReason('Issue with Google Read Along app')\" value=\"Issue with Google Read Along app\"></ion-radio>\r\n          </ion-item>\r\n      \r\n          <ion-item lines=\"none\">\r\n            <ion-label>Others</ion-label>\r\n            <ion-radio slot=\"start\" (click)=\"selectReason('others')\" value=\"others\"></ion-radio>\r\n          </ion-item>\r\n                \r\n        </ion-radio-group>\r\n      </ion-list>      \r\n    </div>\r\n\r\n    <div  class=\"d-flex justify-content-center\">\r\n      <ion-button class=\"btn_modal-cancel\" (click)=\"canceldismiss('cancel')\"\r\n        [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">\r\n        Cancel</ion-button>\r\n      <ion-button class=\"btn_modal-success\" (click)=\"dismiss('ok')\"\r\n        [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">\r\n        ok</ion-button>\r\n    </div>    \r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ 54533:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n<!-- List of Text Items -->\r\n<p class=\"fs-15 text-center border-bottom-primary color-blue mb-0\"><b>Quick Navigation</b></p>\r\n<ion-icon name=\"close\" class=\"text-danger\" ></ion-icon>\r\n\r\n<ion-list lines=\"none\" class=\"p-0\">\r\n  <ion-item>\r\n    <ion-label class=\"color-lgrey fs-15\"><b>EMIS Verification</b></ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label class=\"color-lgrey fs-15\"><b>Classroom Details</b></ion-label>\r\n</ion-item>\r\n<ion-item>\r\n    <ion-label class=\"color-lgrey fs-15\"><b>Observations</b></ion-label>\r\n  </ion-item>\r\n    <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-label  class=\"color-lgrey fs-15\">Teaching Observations</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label class=\"color-lgrey fs-15\">Classroom Observations</ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label  class=\"color-lgrey fs-15\">Questions for teachers</ion-label>\r\n            </ion-item>\r\n    </ion-list> \r\n  <ion-item>\r\n    <ion-label >Student Assesment</ion-label>\r\n  </ion-item>\r\n    <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-label  class=\"color-lgrey fs-15\">Check for understanding</ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label class=\"color-lgrey fs-15\">LO based assesment</ion-label>\r\n          </ion-item>  \r\n    </ion-list>\r\n</ion-list>\r\n    </ion-content>\r\n    <ion-footer style=\"height:38px;background-color: #2D9CDB;\">\r\n      <!-- <ion-text > -->\r\n        <p style=\"text-align: center;color:white;font-size: 16px;padding-top: 8px;\"><b>Dashboard</b></p>\r\n      <!-- </ion-text> -->\r\n    </ion-footer>\r\n  ");

/***/ }),

/***/ 57771:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification-modal/notification-modal.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper notifications-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p >\r\n        {{ this.notificationHeading }}\r\n      </p>\r\n    </ion-text>\r\n\r\n    <div class=\"d-flex justify-content-center n-footer\">\r\n      <ion-button\r\n        class=\"btn_modal-cancel\"\r\n        (click)=\"dismiss('Cancel')\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-11': this.languageType === 'ta',\r\n          'modal-btn-w-50': this.languageType === 'ta'\r\n        }\"\r\n        >{{ this.cancel }}</ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 95297:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-icon (click)=\"openNotifyModal()\" name=\"notifications\" class=\"notification-icon\"></ion-icon>\r\n");

/***/ }),

/***/ 22733:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/observationmodal/observationmodal.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p>\r\n        <span\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType === 'ta',\r\n            'fs-9': this.languageType === 'ta'\r\n          }\"\r\n          >{{ this.didDiscuss }}</span\r\n        >\r\n        <b> {{ teacherDetails.teacher_name }} ?</b>\r\n      </p>\r\n    </ion-text>\r\n    <div class=\"text-center\">\r\n      <ion-button\r\n        class=\"btn_modal-cancel\"\r\n        (click)=\"addClass(); showTextarea = true\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-10': this.languageType === 'ta'\r\n        }\"\r\n        >{{ this.no }}</ion-button\r\n      >\r\n      <ion-button\r\n        class=\"btn_modal-success\"\r\n        (click)=\"dismiss('yes',''); showTextarea = false\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-10': this.languageType === 'ta'\r\n        }\"\r\n        >{{ this.yes }}</ion-button\r\n      >\r\n    </div>\r\n    <div *ngIf=\"showTextarea\" class=\"text-center\">\r\n      <ion-item>\r\n        <ion-textarea\r\n          placeholder=\"Reason for not discussing\"\r\n          class=\"ion_text-area\"\r\n          #reason\r\n        ></ion-textarea>\r\n      </ion-item>\r\n      <p\r\n        *ngIf=\"submitted\"\r\n        class=\"error\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-10': this.languageType === 'ta'\r\n        }\"\r\n      >\r\n        {{ this.giveReason }}\r\n      </p>\r\n\r\n      <ion-button\r\n        color=\"primary\"\r\n        (click)=\"dismiss('no', reason)\"\r\n        class=\"br-30\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-12': this.languageType === 'ta'\r\n        }\"\r\n        ><b>{{ this.submit }}</b></ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 65228:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/observerremark/observationremark.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p>\r\n        <span\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType === 'ta',\r\n            'fs-9': this.languageType === 'ta'\r\n          }\"\r\n          ><b>Observer Remarks (if any)</b></span\r\n        >\r\n      </p>\r\n    </ion-text>\r\n   \r\n    <div class=\"text-center\">\r\n      \r\n        <textarea auto-grow=\"true\" placeholder=\"Enter your remarks (max 200 characters)\" class=\"text-area\"\r\n          (change)=\"getRemarks($event.target.value)\" rows=\"6\"></textarea>\r\n      \r\n     \r\n\r\n      <ion-button\r\n        style=\"color:#fff\"        \r\n        (click)=\"dismiss()\"\r\n        class=\"br-30\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-12': this.languageType === 'ta'\r\n        }\"\r\n        ><b>{{ this.submit }}</b></ion-button>\r\n        <ion-text color=\"dark\" class=\"text-italic\">\r\n          <p class=\"fs-12 p-2\"><span>Note</span>:If no remarks, click on submit to proceed</p>\r\n        </ion-text>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 35981:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/progress/progress.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"progress-outer position-relative\">\r\n    <div class=\"progress-inner\" [style.width.%]=\"progress\" >\r\n   \r\n    </div>\r\n    <p class=\"percentage-value\">{{progress}}% <span [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-14': this.languageType === 'ta'}\">{{this.completed}}</span></p>\r\n</div>");

/***/ }),

/***/ 16924:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/questions/questions.component.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section *ngFor=\"let question of treeData; let in = index\" >  \r\n  <ion-item lines=\"none\" *ngIf=\"question && question.type_of_ans == '1'\" class=\"item-style item-border\" style=\"padding-bottom:10px;margin-bottom:20px\">\r\n    <ion-col size=\"12\" class=\"txtspace background\">\r\n    <!-- <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}. {{ question.ob_qus_name }}\r\n    </ion-label> -->\r\n\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}. <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}. <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ in+1 }}. <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label> \r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}. <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>        \r\n    <ion-row class=bt-10>\r\n      <ion-list  class=\"list\">\r\n        <ion-radio-group [(ngModel)]=\"question.selectedAnswer.answer_id\">\r\n          <ng-container *ngFor=\"let answer of question.ans.ans; let i1 = index\">\r\n            <ion-item lines=\"none\" class=\"bg-transparent\">\r\n              <ion-label *ngIf=\"languageType=='en'\"><span [innerHTML]=\"answer.ans\"></span></ion-label>\r\n            <ion-label *ngIf=\"languageType=='ta'\"><span [innerHTML]=\"answer.ans_tamil\"></span></ion-label>\r\n              <ion-radio\r\n                color=\"favorite\"\r\n                slot=\"start\"\r\n                (click)=\"answerChecked(answer, question, i1, in)\"\r\n                value=\"{{ answer.id }}\"\r\n              ></ion-radio>\r\n              <app-questions [treeData]=\"answer.questionList\"></app-questions>\r\n            </ion-item>\r\n            <ion-item\r\n            lines=\"none\"\r\n              *ngIf=\"\r\n                (answer.ans.toLowerCase() === 'other' || answer.ans.toLowerCase() === 'others' ||  answer.ans_tamil === 'மற்றவை') &&\r\n                (question.selectedAnswer.answer.toLowerCase() === 'other' ||question.selectedAnswer.answer.toLowerCase() === 'others' ||\r\n                  question.selectedAnswer.answer === 'மற்றவை')\r\n              \"\r\n            >\r\n              <ion-input\r\n                #other\r\n                autofocus=\"true\"\r\n                [(ngModel)]=\"answer.otherAns\"\r\n                placeholder=\"Enter value for other\"\r\n                required=\"true\"\r\n                (ionBlur)=\"otherChange(answer, question, i1, in, answer.otherAns)\"\r\n              ></ion-input>\r\n            </ion-item>\r\n          </ng-container>\r\n        </ion-radio-group>        \r\n      </ion-list>\r\n    </ion-row>\r\n  </ion-col><br>\r\n</ion-item>  \r\n\r\n  <ion-item lines=\"none\" *ngIf=\"question && question.type_of_ans == '2'\" class=\"item-style item-border\">\r\n    <ion-col size=\"12\" class=\"txtspace background\">\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}. <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ in+1 }}. <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>  \r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}. <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>        \r\n    <ion-row class=bt-10>\r\n      <ion-list  class=\"list\">\r\n        <ng-container *ngFor=\"let answer of question.ans.ans; let i1 = index\">\r\n          <ion-item lines = \"none\" class=\"bg-transparent\">\r\n            <ion-checkbox\r\n              slot=\"start\"\r\n              color=\"success\"\r\n              class=\"m-2\"\r\n              (ionChange)=\"answerChecked(answer, question, i1, in)\"\r\n              [checked]=\"answer.checked\"\r\n              [disabled]=\"false\"\r\n            ></ion-checkbox>\r\n            <ion-label *ngIf=\"languageType=='en'\"><span [innerHTML]=\"answer.ans\"></span></ion-label>\r\n            <ion-label *ngIf=\"languageType=='ta'\"><span [innerHTML]=\"answer.ans_tamil\"></span></ion-label>\r\n\r\n          </ion-item>\r\n          <ion-item\r\n          lines=\"none\"\r\n            *ngIf=\"\r\n              (answer.ans.toLowerCase() === 'other' || answer.ans.toLowerCase() === 'others' || answer.ans_tamil === 'மற்றவை') &&\r\n              answer.checked\r\n            \"\r\n          >\r\n            <ion-input\r\n              [(ngModel)]=\"answer.otherAns\"\r\n              placeholder=\"Enter value for other\"\r\n              required=\"true\"\r\n              (ionBlur)=\"otherChange(answer, question, i1, in, answer.otherAns)\"\r\n            ></ion-input>\r\n          </ion-item>\r\n        </ng-container>      \r\n      </ion-list>\r\n    </ion-row>\r\n  </ion-col><br>\r\n</ion-item>  \r\n\r\n  <ion-item lines=\"none\"  *ngIf=\"question.ans == '' && question.type_of_ans == '3'\" class=\"item-style item-border\">\r\n    <ion-col size=\"12\" class=\"txtspace background\">\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    \r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ in+1 }}. <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ in+1 }}. <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>      \r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>        \r\n    <ion-row class=bt-10>\r\n      <ion-list  class=\"list\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div lines=\"none\" style=\"margin:auto;width: 100%\">\r\n              <button style=\"background-color: #6b4b9c;color:#ffffff;font-size: 20px;display: flex;border-radius: 25px;\" (click)=\"openCamera('camera', question, '', in)\">\r\n                <ion-icon\r\n                style=\"padding:10px\"\r\n                name=\"camera\"\r\n                class=\"fs-30\"        \r\n              ></ion-icon>\r\n                <span style=\"padding:10px\">Take Picture</span>\r\n              </button>\r\n            </div>             \r\n            <span *ngIf=\"question.selectedAnswer != ''\" style=\"font-size:20px;color:green\">\r\n              Uploaded\r\n            </span>\r\n          </ion-col>\r\n          <ion-col>\r\n            \r\n\r\n          </ion-col>\r\n        </ion-row>   \r\n      </ion-list>\r\n    </ion-row>\r\n  </ion-col><br>\r\n</ion-item>  \r\n\r\n  <ion-item lines=\"none\" *ngIf=\"question && (question.type_of_ans == '5' || question.type_of_ans == '0')\" class=\"item-style item-border\">\r\n    <ion-col size=\"12\" class=\"txtspace background\">\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>   \r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>        \r\n    <ion-row class=bt-10>\r\n      <ion-list  class=\"list\">\r\n        <ion-item lines=\"none\">\r\n          <input\r\n          style=\"width:100%;border:1px solid #000\"        \r\n          type=\"text\"        \r\n          required\r\n          (change)=\"answerChecked($event.target.value, question, '', in)\"          \r\n          [(ngModel)]=\"question.selectedAnswer\"        \r\n          />                     \r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-row>\r\n  </ion-col><br>\r\n</ion-item>  \r\n\r\n<ion-item lines=\"none\" *ngIf=\"question && question.type_of_ans == '6'\" class=\"item-style item-border\">\r\n  <ion-col size=\"12\" class=\"txtspace background\">\r\n  <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n    {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n  </ion-label>\r\n  <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n    {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n  </ion-label>\r\n  <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n    {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n  </ion-label>\r\n  <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n    {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n  </ion-label>\r\n  <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n    {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n  </ion-label>   \r\n  <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n    {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n  </ion-label>        \r\n  <ion-row class=bt-10>\r\n    <ion-list  class=\"list\">\r\n      <ion-item lines=\"none\">\r\n        <input\r\n        style=\"width:100%;border:1px solid #000\"        \r\n        type=\"number\"        \r\n        required\r\n        (change)=\"answerChecked($event.target.value, question, '', in)\"          \r\n        [(ngModel)]=\"question.selectedAnswer\"        \r\n        />                     \r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-row>\r\n</ion-col><br>\r\n</ion-item>  \r\n\r\n\r\n  \r\n  <ion-item lines=\"none\" *ngIf=\"question && question.type_of_ans == '4'\"  class=\"item-style item-border\" style=\"padding-bottom:10px;margin-bottom:20px\">\r\n    <ion-col size=\"12\" class=\"txtspace background\" style=\"padding-bottom:10px\">\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no==(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no>(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ in+1 }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>\r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='en'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name\"></span>\r\n    </ion-label>    \r\n    <ion-label *ngIf=\"question.question_no!=(in+1)&&question.question_no<(in+1)&&languageType=='ta'\" class=\"ques-txt\">\r\n      {{ question.question_no }}.  <span [innerHTML]=\"question.ob_qus_name_tamil\"></span>\r\n    </ion-label>        \r\n    <ion-row class=bt-10>\r\n      <ion-list  style=\"border: 1px solid #000000;display:flex;width:100%\" class=\"list\">\r\n        <ion-input  style=\"color: #000000\" type=\"date\" max=\"{{myDate}}\" value=\"{{question.selectedAnswer}}\" (ionChange)=\"answerChecked($event.target.value, question, '', in)\" placeholder=\"Select the date\"></ion-input>                \r\n        <ion-icon style=\"padding-top:5px\" name=\"calendar\" class=\"fs-30\" color=\"primary\"></ion-icon>    \r\n      </ion-list>\r\n    </ion-row>\r\n    </ion-col><br>\r\n  </ion-item>  \r\n</section>\r\n");

/***/ }),

/***/ 91945:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/schoolListModal/schoollistmodal.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div style=\"display:list-item\">\r\n    <ion-icon name=\"close-circle\" style=\"float: right;font-size:30px\" (click)=\"dismiss(ok)\"></ion-icon>\r\n  </div> \r\n  <div class=\"modalcontent-wrapper\" >\r\n    <ion-grid  style=\"background-color: #fff;border-radius: 15px;padding:0;border: 1px solid #000\">      \r\n            <ion-row justify-content-end style=\"background-color: #d5cae0;border-top-left-radius: 15px;border-top-right-radius: 15px;line-height: 1.5\" >\r\n              <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"2\" align-self-stretch>                \r\n                <ion-text>\r\n                  Id\r\n                </ion-text>\r\n              </ion-col>\r\n              <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"6\" align-self-stretch>                \r\n                <ion-text>\r\n                  School Name\r\n                </ion-text>\r\n              </ion-col>\r\n              \r\n              <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\"  align-self-stretch>\r\n                Status\r\n              </ion-col>                            \r\n            </ion-row>   \r\n      \r\n          <ion-row   *ngFor=\"let school of schoolList;let i = index\"   style=\"background-color: #fff;color:#000;line-height:1.5;border-bottom: 1px solid #000;\" [ngClass]=\"{'last-row': i === schoolList.length-1}\" >\r\n            <ion-row   style=\"background-color: #fff;color:#000;line-height:2.5;border-bottom: 1px solid #000;width:100%\" >\r\n              <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;width:100%\" >                \r\n                {{ school?.cluster_name }}  \r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row   *ngFor=\"let schooldata of school.cluster_schoool_list;let j = index\"   style=\"background-color: #fff;color:#000;line-height:1.5;border-bottom: 1px solid #000;width:100%;text-align: center;\"  >\r\n              <ion-col padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"2\" >\r\n                {{ j+1 }}\r\n              </ion-col>\r\n\r\n              <ion-col padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"6\" >\r\n                {{ schooldata?.school_name }}\r\n              </ion-col>\r\n\r\n              <ion-col  padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\" [ngClass]=\"{'observed': schooldata?.status === 'Observed','not-observed': schooldata?.status === 'Not Observed'}\">                              \r\n                {{ schooldata?.status }}  \r\n                <ion-label *ngIf=\"schooldata?.status == 'Observed'\"> BY {{schooldata?.createdby}}</ion-label>    \r\n              </ion-col> \r\n            </ion-row>                                                         \r\n          </ion-row> \r\n          \r\n          \r\n          <!-- <ion-row   *ngFor=\"let school of schoolList;let i = index\"  justify-content-end style=\"background-color: #fff;color:#000;line-height:1.5;border-bottom: 1px solid #000;\" [ngClass]=\"{'last-row': i === schoolList.length-1}\" >\r\n            <ion-col padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"6\" align-self-stretch>\r\n              {{ school?.school_name }}\r\n            </ion-col>\r\n            \r\n            <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"6\" [ngClass]=\"{'observed': school?.status === 'Observed','not-observed': school?.status === 'Not Observed'}\">                              \r\n              {{ school?.status }}      \r\n            </ion-col>                                        \r\n          </ion-row>    -->\r\n    \r\n    </ion-grid>     \r\n  </div>\r\n  \r\n  <div  class=\"d-flex justify-content-center\">      \r\n    <ion-button class=\"btn_modal-success\" (click)=\"dismiss('ok')\"\r\n      [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">\r\n      ok</ion-button>\r\n  </div>   \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_shared_module_ts-es2015.js.map