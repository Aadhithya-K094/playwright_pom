(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_omr-student_omr-student_module_ts"],{

/***/ 77711:
/*!****************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/omr-student/omr-student.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OmrStudentComponent": function() { return /* binding */ OmrStudentComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_omr_student_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./omr-student.component.html */ 16060);
/* harmony import */ var _omr_student_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omr-student.component.scss */ 32378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);












let OmrStudentComponent = class OmrStudentComponent {
    /*-- Language Variables Ends --*/
    constructor(modalController, _apiService, _router, loading, alertController, _alertService, ionicStore, _translate) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._router = _router;
        this.loading = loading;
        this.alertController = alertController;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.attendanceList = [];
        this.misMatchReason = [{ "id": 1, "reason": "OMR sheets over/not available/damaged" }, { "id": 2, "reason": "CWSN" }, { "id": 3, "reason": "Other" }];
        this.groups = {};
        this.absentList = [];
        this.misMatchList = [];
        this.sectionStudentList = [];
        this.misMatchReasons = [];
        this.getStudentAttendanceList = (class_id, schoolId) => {
            let schoolDetail = {
                class_id: class_id,
                school_id: schoolId,
            };
            let allStudents = this.masterStudentsData.all;
            let absent_infoList = [];
            let absent_dataList = [];
            if (this.masterStudentsData.absent_info) {
                absent_infoList = this.masterStudentsData.absent_info;
            }
            if (this.masterStudentsData.absent_data) {
                absent_dataList = this.masterStudentsData.absent_data;
            }
            let classArray = class_id.split(",");
            let selectedClassStudents = allStudents.filter((data) => classArray.includes(data.class_studying_id));
            let selectedClassAbsentInfo = absent_infoList.length
                ? absent_infoList.filter((data) => classArray.includes(data.class_studying_id))
                : false;
            let selectedClassAbsentData = absent_dataList.filter((data) => classArray.includes(data.class_studying_id));
            let records = {
                all: selectedClassStudents
            };
            this.attendanceList = records.all;
            this.attendanceList.forEach((data, index) => {
                data.status = "active";
            });
            let groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(this.attendanceList, (a) => a.class_studying_id);
            let sectionStudent = [];
            if (this.selectedSection) {
                groups[class_id] = groups[class_id].filter((data, index) => {
                    if (data.class_section == this.selectedSection) {
                        return data;
                    }
                });
                let boys = groups[class_id].filter((data, index) => {
                    if (Number(data.gender) == 1) {
                        return data;
                    }
                });
                let girls = groups[class_id].filter((data, index) => {
                    if (Number(data.gender) == 2) {
                        return data;
                    }
                });
                girls = girls.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                boys = boys.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                groups[class_id] = [];
                groups[class_id] = girls;
                for (var i = 0; i < boys.length; i++) {
                    groups[class_id].push(boys[i]);
                }
                sectionStudent = groups[class_id];
            }
            else {
                let classes = class_id.split(',');
                for (var i = 0; i < classes.length; i++) {
                    let boys = groups[classes[i]].filter((data, index) => {
                        if (Number(data.gender) == 1) {
                            return data;
                        }
                    });
                    let girls = groups[classes[i]].filter((data, index) => {
                        if (Number(data.gender) == 2) {
                            return data;
                        }
                    });
                    girls = girls.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                    boys = boys.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
                    groups[classes[i]] = girls;
                    for (var j = 0; j < boys.length; j++) {
                        groups[classes[i]].push(boys[j]);
                    }
                }
            }
            this.groups = groups;
            this.absentList = [];
            this.loading.dismiss();
            let apiData = {
                pageNo: "20",
                pageName: "omrscanner",
                apiResponse: {
                    records: {
                        attendanceList: this.attendanceList,
                        absentList: this.absentList,
                        misMatchReasonList: this.misMatchReasons,
                        sectionStudentList: sectionStudent,
                    },
                },
                pageDetails: {
                    misMatchStudentList: [],
                },
            };
            this.storeDetail.pages.pageData[19] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
        };
        this.getReasonsList = () => {
            let records = {
                mismatch_reasons: this.masterApiResponse.mismatch_reasons,
            };
            this.misMatchReasons = records.mismatch_reasons;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
        };
        this.goToClassroom = () => {
            if (this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id]) {
                for (var i = 0; i < this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length; i++) {
                    if (this.groups[this.selectedClass][i].selectedReason) {
                        this.groups[this.selectedClass][i].selectedReasonData = this.misMatchReason[Number(this.groups[this.selectedClass][i].selectedReason) - 1].reason;
                    }
                }
            }
            this.storeDetail.pages.pageData[18].omrData = this.groups[this.selectedClass];
            localStorage.setItem("final-omr-student-list", JSON.stringify(this.storeDetail.pages.pageData[18].omrData));
            this._router.navigate(["/tnvntabs/page-route/omr-scanner"]);
        };
        this.gotoCamera = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.setItem("Camera", "1");
            this._router.navigate(["/tnvntabs/page-route/omr-scanner"]);
        });
    }
    ngOnInit() {
        this.progressValue = 70;
        this.appLanguage();
        this.schoolInfo = localStorage.getItem("schoolInfo");
        this.schoolInfo = JSON.parse(this.schoolInfo);
        this.ionicStore.getStudentsData().then((response) => {
            this.masterStudentsData = response;
            if (this.masterStudentsData == null || this.masterStudentsData == undefined) {
                this.masterStudentsData = JSON.parse(localStorage.getItem("studentsData"));
            }
        });
        this.ionicStore.getOffStorage().then((response) => {
            this.masterApiResponse = response;
            if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
            }
            this.ionicStore.getStoreData().then((response) => {
                this.storeDetail = response;
                if (this.storeDetail == null || this.storeDetail == undefined) {
                    this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                }
                console.log(this.storeDetail);
                this.selectedClass = this.storeDetail.pages.pageData[5].correctedDetails.class_id;
                let scanned_students = [];
                if (this.storeDetail.pages.pageData[18].omrData) {
                    let omrData = this.storeDetail.pages.pageData[18].omrData;
                    if (omrData) {
                        if (omrData.length > 0) {
                            scanned_students = omrData.filter((data) => {
                                if (data.scanned == true && data.status == 'active') {
                                    return data;
                                }
                            });
                        }
                        else if (omrData.length > 0) {
                            scanned_students = omrData.filter((data) => {
                                if (data.scanned == true && data.status == 'active') {
                                    return data;
                                }
                            });
                        }
                    }
                    else if (omrData.length > 0) {
                        scanned_students = omrData.filter((data) => {
                            if (data.scanned == true && data.status == 'active') {
                                return data;
                            }
                        });
                    }
                    else {
                        scanned_students = [];
                    }
                }
                else {
                    scanned_students = [];
                }
                this.scanned_students = scanned_students.length;
                this.storeDetail.pages.currentPage = "omrScanner";
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                this.selectedSection = this.storeDetail.pages.pageData[5].pageDetails.section;
                if (this.storeDetail.pages.pageData[18] == undefined || this.storeDetail.pages.pageData[18] == null) {
                    this.groups[this.selectedClass] = this.storeDetail.pages.pageData[18].omrData;
                    this.groups[this.selectedClass] = this.groups[this.selectedClass].filter((data, index) => {
                        if (data.status == "active") {
                            return data;
                        }
                    });
                    this.total_no_of_students = this.groups[this.selectedClass].length;
                    this.getReasonsList();
                }
                else {
                    this.attendanceList = this.storeDetail.pages.pageData[18].omrData;
                    if (this.storeDetail.pages.pageData[5].pageDetails.section && this.storeDetail.pages.pageData[18].omrData.length > 0) {
                        this.groups[this.selectedClass] = this.storeDetail.pages.pageData[18].omrData;
                        this.groups[this.selectedClass] = this.groups[this.selectedClass].filter((data, index) => {
                            if (data.status == "active") {
                                return data;
                            }
                        });
                        this.total_no_of_students = this.groups[this.selectedClass].length;
                    }
                    else if (this.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents) {
                        this.groups[this.selectedClass] = this.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents;
                        this.groups[this.selectedClass] = this.groups[this.selectedClass].filter((data, index) => {
                            if (data.status == "active") {
                                return data;
                            }
                        });
                        this.total_no_of_students = this.groups[this.selectedClass].length;
                    }
                    else {
                        this.groups[this.selectedClass] = this.storeDetail.pages.pageData[18].omrData[this.selectedClass];
                        this.groups[this.selectedClass] = this.groups[this.selectedClass].filter((data, index) => {
                            if (data.status == "active") {
                                return data;
                            }
                        });
                    }
                    this.total_no_of_students = this.groups[this.selectedClass].length;
                }
            });
        });
        this.progressData =
            Number(this.scanned_students) /
                Number(this.total_no_of_students);
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("studentAttendance").subscribe((res) => {
            this.studentAttendance = res;
        });
        this._translate.get("rollCall_Info").subscribe((res) => {
            this.rollCall_Info = res;
        });
        this._translate.get("p").subscribe((res) => {
            this.p = res;
        });
        this._translate.get("a").subscribe((res) => {
            this.a = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
        });
    }
    showNoteAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Note to Observer while scanning the OMR sheet:",
                cssClass: "my-custom-class",
                message: "<li>Take the clear picture of the OMR sheet.</li><br><li>Please scan in portrait mode (vertically) and on a flat surface.</li><br> <li>Also, make sure all 4 borders are scanned correctly.</li>",
                buttons: [{
                        text: "ok",
                        handler: () => { }
                    }],
            });
            yield alert.present();
        });
    }
    makeAttendance(stu_detail, attedanceStatus, index, key) {
        let absentListId;
        if (this.absentList.length) {
            absentListId = this.absentList.map((el) => {
                return el.id;
            });
        }
        if (attedanceStatus == "p") {
            this.groups[key][index].status = "active";
            if (this.absentList.length) {
                const found = absentListId.includes(stu_detail.id);
                if (found) {
                    if (this.misMatchList.indexOf(stu_detail) == -1) {
                        this.misMatchList.push(stu_detail);
                    }
                }
            }
        }
        else {
            this.groups[key][index].status = "Inactive";
            if (this.absentList.length) {
                const found = !absentListId.includes(stu_detail.id);
                if (found) {
                    if (this.misMatchList.indexOf(stu_detail) == -1) {
                        this.misMatchList.push(stu_detail);
                    }
                }
            }
        }
    }
    isAttendanceTaken(currentValue, index, array) {
        return currentValue.status != "none";
    }
    openDiscussModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id]) {
                for (var i = 0; i < this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length; i++) {
                    if (this.groups[this.selectedClass][i].selectedReason) {
                        this.groups[this.selectedClass][i].selectedReasonData = this.misMatchReason[Number(this.groups[this.selectedClass][i].selectedReason) - 1].reason;
                    }
                }
            }
            this.storeDetail.pages.pageData[18].omrData = this.groups[this.selectedClass];
            for (let i = 0; i < this.storeDetail.pages.pageData[18].omrData.length; i++) {
                this.storeDetail.pages.pageData[18].omrData[i].omr_questions = JSON.parse(localStorage.getItem('omrQuestions_Data'));
            }
            for (let i = 0; i < this.storeDetail.pages.pageData[18].omrData.length; i++) {
                for (let j = 0; j < this.storeDetail.pages.pageData[18].omrData[i].omr_questions.length; j++) {
                    let cls = this.storeDetail.pages.pageData[18].omrData[i].scanned;
                    if (cls == true) {
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].medium = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionA = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionB = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionC = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionD = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].subject = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].class = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].selectedOmrAns = this.storeDetail.pages.pageData[18].omrData[i].selectedOmrAns[j];
                    }
                    else if (cls == false) {
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].medium = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionA = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionB = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionC = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].optionD = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].subject = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].class = undefined;
                        this.storeDetail.pages.pageData[18].omrData[i].omr_questions[j].selectedOmrAns = null;
                    }
                }
            }
            ;
            localStorage.setItem("final-omr-student-list", JSON.stringify(this.storeDetail.pages.pageData[18].omrData));
            yield this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            let logDataNew = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Omr Scanning",
                action_name: "On all student completion",
                data: "Omr Scanning students status updated",
                completion_percentage: this.progressValue
            };
            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            let Groupstatus = [];
            if (this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id]) {
                for (var i = 0; i < this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length; i++) {
                    if (this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id][i].selectedReason || this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id][i].scanned == true) {
                        Groupstatus.push(this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id][i]);
                    }
                }
            }
            if (Groupstatus.length != this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length) {
                this._alertService.showAlert("Please scan or fill the reason to all students");
            }
            else {
                if (Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) >= 3 && Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) <= 9) {
                    // this._router.navigate(["/tnvntabs/page-route/google-read-assessment"]);  
                    // this._router.navigate(["/tnvntabs/page-route/notebook"]);  
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                }
                else if (Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) == 10 || Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) < 3) {
                    // this._router.navigate(["/tnvntabs/page-route/notebook"]);  
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                }
                else {
                    // this._router.navigate(["/tnvntabs/page-route/hodinspection"]); 
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'assessment_section_status': localStorage.setItem('assessment_section_status', "1") } });
                }
            }
        });
    }
};
OmrStudentComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService }
];
OmrStudentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "omr-student",
        template: _raw_loader_omr_student_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_omr_student_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OmrStudentComponent);



/***/ }),

/***/ 44217:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/omr-student/omr-student.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OmrStudentModule": function() { return /* binding */ OmrStudentModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _omr_student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omr-student.component */ 77711);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _omr_student_component__WEBPACK_IMPORTED_MODULE_0__.OmrStudentComponent
    }
];
let OmrStudentModule = class OmrStudentModule {
};
OmrStudentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_omr_student_component__WEBPACK_IMPORTED_MODULE_0__.OmrStudentComponent,
        ],
        entryComponents: []
    })
], OmrStudentModule);



/***/ }),

/***/ 32378:
/*!******************************************************************************!*\
  !*** ./src/app/pages/tnvn/assessment/omr-student/omr-student.component.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.student-present {\n  background: #43A047;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\nbutton.student-absent {\n  background: #F44537;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\n.sc-ion-label-md-h {\n  padding-left: 1rem;\n  display: block;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.background {\n  background-color: #e6deed !important;\n}\n\n#background-comtent {\n  background: #e6deed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9tci1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0kscUJBQUE7QUFFTjs7QUFBRTtFQUNFLHlDQUFBO0FBR0o7O0FBQUU7RUFDRSxvQ0FBQTtBQUdKOztBQURFO0VBQ0UsOEJBQUE7QUFJSiIsImZpbGUiOiJvbXItc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5zdHVkZW50LXByZXNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNBMDQ3OyAgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4OyAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuYnV0dG9uLnN0dWRlbnQtYWJzZW50e1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NDUzNztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7ICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG4uc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuICAubm8tcGFkZGluZyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlNmRlZWQgIWltcG9ydGFudDsgIFxyXG4gIH1cclxuICBcclxuICAuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmRlZWQgIWltcG9ydGFudFxyXG4gIH1cclxuICAjYmFja2dyb3VuZC1jb210ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZGVlZCAhaW1wb3J0YW50XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 16060:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/omr-student/omr-student.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>OMR SCANNING </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<app-progress [progress]=\"this.progressValue\"></app-progress>\r\n<ion-content class=\"background\">\r\n  <div *ngFor=\"let attendance of groups | keyvalue\">\r\n    <div style=\"background-color: #e6deed;text-align:center;margin:auto;width: 100%;padding-left: 13%;padding-top: 10px;display:flex\">\r\n      <button style=\"background-color: #6b4b9c;text-align:center;color:#ffffff;font-size: 18px;display: flex;border-radius: 25px;\" (click)=\"gotoCamera()\">\r\n        <ion-icon\r\n        style=\"padding:10px\"\r\n        name=\"camera\"\r\n        class=\"fs-30\"        \r\n      ></ion-icon>\r\n        <span style=\"padding:10px\">SCAN OMR SHEETS</span>\r\n      </button>\r\n      <ion-icon\r\n      style=\"padding:10px\"\r\n      name=\"information-circle\"\r\n      class=\"fs-30\"   \r\n      (click) = \"showNoteAlert()\"     \r\n    ></ion-icon>\r\n    </div>       \r\n       \r\n    <div class=\"text-align-center\">Grade: {{ attendance.key }} {{selectedSection}}</div>\r\n    <ion-row\r\n      \r\n      *ngFor=\"let item of attendance.value; let i = index\"      \r\n    >\r\n      <ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n        <ion-label\r\n          ><b>{{ item.name }} ({{ item.user_id }})</b></ion-label\r\n        >\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col *ngIf = \"item.scanned==false\" class=\"my-auto\" size=\"6\">\r\n        <ion-item class=\"border\" lines=\"none\">\r\n        <ion-label style=\"font-size:12px;font-weight:bold\" *ngIf=\"!item.selectedReason\"> Select Reason</ion-label>\r\n        <ion-select\r\n          [(ngModel)]=\"item.selectedReason\"          \r\n          style=\"max-width: 100%;\"\r\n        >\r\n          <ion-select-option\r\n            *ngFor=\"let reasonData of misMatchReason\"\r\n            [value]=\"reasonData.id\"\r\n            >{{ reasonData.reason }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      </ion-col>\r\n      <ion-col *ngIf = \"item.scanned==true\" class=\"my-auto\">\r\n        <ion-label\r\n          style=\"color:green;align-items: center;text-align:center;\"><b>Completed</b></ion-label\r\n        > \r\n      </ion-col>      \r\n    </ion-row>\r\n  </div>  \r\n</ion-content>\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToClassroom()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"openDiscussModal()\">\r\n        <ion-label\r\n          class=\"no-padding\"\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{this.submit}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_assessment_omr-student_omr-student_module_ts-es2015.js.map