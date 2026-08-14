(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_attendance_attendance_module_ts"],{

/***/ 83327:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/attendance-verify/attendance-verify.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendanceVerifyComponent": function() { return /* binding */ AttendanceVerifyComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./attendance-verify.component.html */ 35316);
/* harmony import */ var _attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance-verify.component.scss */ 93782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/network.service */ 81508);











let AttendanceVerifyComponent = class AttendanceVerifyComponent {
    constructor(_router, ionicStore, _apiService, loading, _alertService, networkService, _translate) {
        this._router = _router;
        this.ionicStore = ionicStore;
        this._apiService = _apiService;
        this.loading = loading;
        this._alertService = _alertService;
        this.networkService = networkService;
        this._translate = _translate;
        this.storedFinalData = [];
        this.ppSchBaseDetails = [];
        this.finalSubmit = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const level = localStorage.getItem("selectedlevel");
            const usertype = localStorage.getItem("usertype");
            const veracity_type = localStorage.getItem("veracity_type");
            const { school_id, school_name, udise_code } = this.storeDetail.pages.pageData[0].pageDetails;
            let emiverfiyInfo;
            if (level == '1' || veracity_type == 'inspection') {
                if (this.storeDetail.pages.pageData[1].pageFlow != 'observation') {
                    emiverfiyInfo = this.storeDetail.pages.pageData[3].pageDetails;
                }
                else {
                    let school_info = {};
                    school_info.created_by = localStorage.getItem("username");
                    school_info.veracity_type = localStorage.getItem("veracity_type");
                    school_info.district_id = this.masterApiResponse.dist_id;
                    school_info.district_name = this.masterApiResponse.district_name;
                    school_info.block_id = this.masterApiResponse.block_id;
                    school_info.block_name = this.masterApiResponse.block_name;
                    school_info.edu_dist_id = this.masterApiResponse.edu_dist_id;
                    school_info.edu_dist_name = this.masterApiResponse.edu_dist_name;
                    school_info.nodal_id = this.masterApiResponse.nodal_id;
                    school_info.nodal_name = this.masterApiResponse.nodal_name;
                    school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
                    school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
                    school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
                    school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
                    school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
                    school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
                    school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;
                    emiverfiyInfo = school_info;
                }
            }
            else {
                let school_info = {};
                school_info.created_by = localStorage.getItem("username");
                school_info.veracity_type = localStorage.getItem("veracity_type");
                school_info.district_id = this.masterApiResponse.dist_id;
                school_info.district_name = this.masterApiResponse.district_name;
                school_info.block_id = this.masterApiResponse.block_id;
                school_info.block_name = this.masterApiResponse.block_name;
                school_info.edu_dist_id = this.masterApiResponse.edu_dist_id;
                school_info.edu_dist_name = this.masterApiResponse.edu_dist_name;
                school_info.nodal_id = this.masterApiResponse.nodal_id;
                school_info.nodal_name = this.masterApiResponse.nodal_name;
                school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
                school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
                school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
                school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
                school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
                school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
                school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;
                emiverfiyInfo = school_info;
            }
            const schoolInfo = {
                school_id: school_id,
                school_name: school_name,
                level: level,
                udise_code: udise_code
            };
            let mediumIds = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map((el) => {
                return el.medium_id;
            });
            const classInfo = {
                class: this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0]
                    .class_id,
                medium: mediumIds.toString(),
                class_type: this.storeDetail.pages.pageData[5].pageDetails.classType,
                section: this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0]
                    .section,
                teacher_name: this.storeDetail.pages.pageData[5].pageDetails
                    .teacherDetails.teacher_name,
                teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails
                    .teacherDetails.teacher_emisid,
            };
            const basicInfoObj = Object.assign(Object.assign(Object.assign({}, schoolInfo), emiverfiyInfo), classInfo);
            const schoolReasons = this.storeDetail.pages.pageData[0].pageDetails
                .schoolsReasons;
            let studentReasons;
            if (this.storeDetail.pages.pageData[9]) {
                studentReasons = this.storeDetail.pages.pageData[9].pageDetails
                    .studentReasonList;
            }
            else {
                studentReasons = {};
            }
            let teacher;
            if (this.storeDetail.pages.pageData[5].pageDetails.reasonDetails != undefined) {
                teacher = {
                    teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails
                        .teacherDetails.teacher_emisid,
                    teacher_name: this.storeDetail.pages.pageData[5].pageDetails
                        .teacherDetails.teacher_name,
                    reason: this.storeDetail.pages.pageData[5].pageDetails.reasonDetails,
                    description: "Reason for not observing teacher",
                };
            }
            const not_verfied = {
                schools: schoolReasons,
                teacher: teacher == undefined ? {} : teacher,
                student: studentReasons,
            };
            let learning_outcome_data;
            if (this.storeDetail.pages.pageData[8]) {
                learning_outcome_data = {
                    subject: this.storeDetail.pages.pageData[8].pageDetails.subject,
                    term: this.storeDetail.pages.pageData[8].pageDetails.term,
                    unit: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo
                        .chapter_no,
                    learning_outcome: this.storeDetail.pages.pageData[8].correctedDetails
                        .unitInfo.learning_outcome,
                    question_data: this.storeDetail.pages.pageData[10].pageDetails,
                };
            }
            else {
                learning_outcome_data = {};
            }
            let observation_reportconst = {};
            if (this.storeDetail.pages.pageData[9]) {
                observation_reportconst = {
                    strength: this.storeDetail.pages.pageData[9].pageDetails.strength,
                    improvement: this.storeDetail.pages.pageData[9].pageDetails.improvement,
                };
            }
            let observation_data;
            if (this.storeDetail.pages.pageData[7]) {
                observation_data = {
                    observation_dataInfo: this.storeDetail.pages.pageData[7].apiResponse
                        .records.customizeSectionList,
                };
            }
            let finalData = {
                basic_info: basicInfoObj,
                not_verfied: not_verfied,
                attendance_data: this.storeDetail.pages.pageData[6].pageDetails.misMatchStudentList,
                otherattendance_data: this.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList,
                learning_outcome_data: learning_outcome_data,
                observation_data: this.storeDetail.pages.pageData[7]
                    ? observation_data.observation_dataInfo
                    : {},
                observation_report: this.storeDetail.pages.pageData[7]
                    ? observation_reportconst
                    : {},
                final_remarks: "Good",
            };
            let final = {
                json: JSON.stringify(finalData),
            };
            let connectionStatus = this.networkService.getCurrentNetworkStatus();
            if (connectionStatus != 1) {
                this.storedFinalData = yield this.ionicStore.getFinalData();
                if (this.storedFinalData == undefined || this.storedFinalData == null) {
                    this.storedFinalData = [];
                    this.storedFinalData.push(finalData);
                }
                else {
                    this.storedFinalData.push(finalData);
                }
                this.ionicStore.setFinalData(this.storedFinalData);
                this.loading.present();
                this._apiService.postfinalinfo({ json: JSON.stringify(this.storedFinalData) }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    this.ionicStore.removeStoreData();
                    this.ionicStore.removeOffStorage();
                    this.ionicStore.removeFinalData();
                    localStorage.removeItem("classInfo");
                    localStorage.removeItem("chapterId");
                    localStorage.removeItem("schoolInfo");
                    localStorage.removeItem("teacherInfo");
                    localStorage.removeItem("finaldata");
                    this.loading.dismiss();
                    this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
                    this._router.navigate(['/tabs/school-info'], { queryParams: { 'Id': 1, 'data': 1, 'udise': this.masterApiResponse.udise_code }, skipLocationChange: false });
                }), (error) => {
                    this.ionicStore.removeStoreData();
                    this.ionicStore.removeOffStorage();
                    this.ionicStore.removeFinalData();
                    localStorage.removeItem("classInfo");
                    localStorage.removeItem("finaldata");
                    localStorage.removeItem("chapterId");
                    localStorage.removeItem("schoolInfo");
                    localStorage.removeItem("teacherInfo");
                    this.loading.dismiss();
                    this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
                    this._router.navigate(["/tnvntabs/page-route/dashboardc"]);
                });
            }
            else {
                this.loading.dismiss();
                this._alertService.showAlert(this.networkInfo);
            }
        });
    }
    ngOnInit() {
        this.ionicStore.getData('ppSchBaseDetails').then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.ppSchBaseDetails = data ? data : [];
            this.appLanguage();
            this.schoolDetail = JSON.parse(localStorage.getItem("schoolInfo"));
            this.ionicStore.getOffStorage().then((response) => {
                if (response) {
                    this.masterApiResponse = response;
                }
                this.ionicStore.getStoreData().then((response) => {
                    this.storeDetail = response;
                    this.classDetail = this.storeDetail.pages.pageData[14].pageDetails.selectedClass;
                    this.selectedSection = this.storeDetail.pages.pageData[14].pageDetails.sectionList[0];
                });
            });
        }));
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("thankyou").subscribe((res) => {
            this.thankyou = res;
        });
        this._translate.get("Attendance").subscribe((res) => {
            this.Attendance = res;
        });
        this._translate.get("Verification").subscribe((res) => {
            this.Verification = res;
        });
        this._translate.get("networkInfo").subscribe((res) => {
            this.networkInfo = res;
        });
        this._translate.get("class").subscribe((res) => {
            this.class = res;
        });
        this._translate.get("done").subscribe((res) => {
            this.done = res;
        });
    }
};
AttendanceVerifyComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
AttendanceVerifyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-attendance-verify",
        template: _raw_loader_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AttendanceVerifyComponent);



/***/ }),

/***/ 14145:
/*!************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/attendance.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePageModule": function() { return /* binding */ AttendancePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.page */ 83708);
/* harmony import */ var _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-attendance/student-attendance.component */ 48726);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);
/* harmony import */ var _student_data_student_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-data/student-data.component */ 47678);
/* harmony import */ var _attendance_verify_attendance_verify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attendance-verify/attendance-verify.component */ 83327);
/* harmony import */ var _student_attendance_sub_student_attendance_sub_student_attendance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-attendance/sub-student-attendance/sub-student-attendance.component */ 60410);
/* harmony import */ var _student_data_sub_attendance_verify_sub_attendance_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-data/sub-attendance-verify/sub-attendance-verify.component */ 75539);













const routes = [
    {
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage
    },
    {
        path: 'student-attendance',
        component: _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_1__.StudentAttendanceComponent
    },
    {
        path: 'student-data',
        component: _student_data_student_data_component__WEBPACK_IMPORTED_MODULE_3__.StudentDataComponent
    },
    {
        path: 'attendance-verify',
        component: _attendance_verify_attendance_verify_component__WEBPACK_IMPORTED_MODULE_4__.AttendanceVerifyComponent,
    },
    {
        path: 'otherClass-attendance',
        component: _student_attendance_sub_student_attendance_sub_student_attendance_component__WEBPACK_IMPORTED_MODULE_5__.SubStudentAttendanceComponent,
    },
    {
        path: 'otherClass-attendance-verify',
        component: _student_data_sub_attendance_verify_sub_attendance_verify_component__WEBPACK_IMPORTED_MODULE_6__.SubAttendanceVerifyComponent,
    }
];
let AttendancePageModule = class AttendancePageModule {
};
AttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)
        ],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage,
            _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_1__.StudentAttendanceComponent,
            _student_data_student_data_component__WEBPACK_IMPORTED_MODULE_3__.StudentDataComponent,
            _attendance_verify_attendance_verify_component__WEBPACK_IMPORTED_MODULE_4__.AttendanceVerifyComponent,
            _student_attendance_sub_student_attendance_sub_student_attendance_component__WEBPACK_IMPORTED_MODULE_5__.SubStudentAttendanceComponent,
            _student_data_sub_attendance_verify_sub_attendance_verify_component__WEBPACK_IMPORTED_MODULE_6__.SubAttendanceVerifyComponent
        ],
        entryComponents: []
    })
], AttendancePageModule);



/***/ }),

/***/ 83708:
/*!**********************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/attendance.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttendancePage": function() { return /* binding */ AttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./attendance.page.html */ 43194);
/* harmony import */ var _attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.page.scss */ 56805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);











let AttendancePage = class AttendancePage {
    constructor(actionSheetController, ionicStore, loading, _router, _alertService, _translate, _apiService) {
        this.actionSheetController = actionSheetController;
        this.ionicStore = ionicStore;
        this.loading = loading;
        this._router = _router;
        this._alertService = _alertService;
        this._translate = _translate;
        this._apiService = _apiService;
        this.selectedClass = undefined;
        this.selectedSection = undefined;
        this.sectionList = [];
        this.classList = [];
        this.createPage = () => {
            let apiData = {
                pageNo: "15",
                pageName: "Other_classroom",
                apiResponse: {
                    records: {},
                },
                pageDetails: {
                    selectedClass: "",
                    selectedSetion: "",
                    sectionList: [],
                },
            };
            this.storeDetail.pages.pageData[14] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
        };
        this.goToOtherClassAttendance = () => {
            if (this.selectedClass != undefined &&
                this.selectedClass != "" &&
                this.selectedSection != undefined &&
                this.selectedSection != "") {
                this.storeDetail.pages.pageData[14].pageDetails.selectedClass = this.selectedClass;
                this.storeDetail.pages.pageData[14].pageDetails.selectedSetion = this.selectedSection;
                this.storeDetail.pages.pageData[14].pageDetails.sectionList = this.sectionList;
                let allStudents = this.masterApiResponse.StudentsData.all;
                this.ionicStore.setStoreData(this.storeDetail);
                this._router.navigate(["/tnvntabs/page-route/attendance/otherClass-attendance"]);
            }
            else {
                this._alertService.showAlert("Attendance Verification", "Please select from the below any");
                return;
            }
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.appLanguage();
            this.loading.present();
            yield this.ionicStore.getOffStorage().then((response) => {
                this.masterApiResponse = response;
                this.ionicStore.getStoreData().then((response) => {
                    this.loading.dismiss();
                    this.storeDetail = response;
                    this.storeDetail.pages.currentPage = "Other_classroom";
                    this.ionicStore.setStoreData(this.storeDetail);
                    if (this.storeDetail.pages.pageData[14] == undefined) {
                        this.createPage();
                    }
                    else {
                        this.selectedClass = this.storeDetail.pages.pageData[14].pageDetails.selectedClass;
                        this.selectedSection = this.storeDetail.pages.pageData[14].pageDetails.selectedSetion;
                        this.sectionList = this.storeDetail.pages.pageData[14].pageDetails.sectionList;
                    }
                    let classDetail = JSON.parse(localStorage.getItem("classInfo"));
                    classDetail = this.storeDetail.pages.pageData[5].correctedDetails;
                    var flags = [], studentclass = [], l = this.masterApiResponse.StudentsData.all.length, i;
                    for (i = 0; i < l; i++) {
                        if (flags[this.masterApiResponse.StudentsData.all[i].class_studying_id])
                            continue;
                        flags[this.masterApiResponse.StudentsData.all[i].class_studying_id] = true;
                        studentclass.push(this.masterApiResponse.StudentsData.all[i].class_studying_id);
                    }
                    if (this.storeDetail.pages.pageData[5].correctedDetails.length > 1) {
                        this.classList = this.storeDetail.pages.pageData[5].apiResponse.records.school_class_info.filter((data) => data.class_id != classDetail[0].class_id);
                    }
                    else {
                        this.classList = this.storeDetail.pages.pageData[5].apiResponse.records.school_class_info.filter((data) => data.class_id != classDetail[0].class_id);
                    }
                    this.classList = this.classList.filter((data) => Number(data.class_id) < 13);
                    let tempclass = [];
                    this.classList = this.classList.filter((classdata) => {
                        studentclass.forEach((data) => {
                            if (Number(data) == Number(classdata.class_id)) {
                                tempclass.push(classdata);
                            }
                        });
                    });
                    this.classList = tempclass;
                });
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
        this._translate.get("Attendance").subscribe((res) => {
            this.Attendance = res;
        });
        this._translate.get("Verification").subscribe((res) => {
            this.Verification = res;
        });
        this._translate.get("verifyAnotherClass").subscribe((res) => {
            this.verifyAnotherClass = res;
        });
        this._translate
            .get("completeAttendance_verify")
            .subscribe((res) => {
            this.completeAttendance_verify = res;
        });
        this._translate.get("selectClass").subscribe((res) => {
            this.selectClass = res;
        });
        this._translate.get("selectSection").subscribe((res) => {
            this.selectSection = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
    }
    classSelectHandler(event) {
        this.selectedClass = event;
        this.sectionList = event.section
            .replace(/[0-9]/, "")
            .split(",")
            .filter((a) => a != "");
    }
    sectionHandler(event) {
        this.selectedSection = event;
    }
};
AttendancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService }
];
AttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-attendance",
        template: _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AttendancePage);



/***/ }),

/***/ 48726:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-attendance/student-attendance.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentAttendanceComponent": function() { return /* binding */ StudentAttendanceComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-attendance.component.html */ 98916);
/* harmony import */ var _student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-attendance.component.scss */ 93808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);













let StudentAttendanceComponent = class StudentAttendanceComponent {
    constructor(modalController, userSessionService, _apiService, _router, loading, alertController, _alertService, ionicStore, _translate) {
        this.modalController = modalController;
        this.userSessionService = userSessionService;
        this._apiService = _apiService;
        this._router = _router;
        this.loading = loading;
        this.alertController = alertController;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.attendanceList = [];
        this.groups = {};
        this.absentList = [];
        this.misMatchList = [];
        this.sectionStudentList = [];
        this.misMatchReasons = [];
        this.attendanceMarked = false;
        this.getStudentAttendanceList = (class_id, schoolId) => {
            let schoolDetail = {
                class_id: class_id,
                school_id: schoolId,
            };
            let logDataNew = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Student attendance Page",
                action_name: "Student attendance data",
                data: JSON.stringify(this.masterStudentsData.all),
                completion_percentage: this.progressValue
            };
            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
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
                all: selectedClassStudents,
            };
            this.attendanceList = records.all;
            this.attendanceList.forEach((data, index) => {
                data.status = "active";
                data.scanned = false;
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
            let apiData = {
                pageNo: "7",
                pageName: "stu_Attendance",
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
                correctedDetails: [],
            };
            this.loading.dismiss();
            this.storeDetail.pages.pageData[6] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        };
        this.getReasonsList = () => {
            let records = {
                mismatch_reasons: this.masterApiResponse.mismatch_reasons,
            };
            this.misMatchReasons = records.mismatch_reasons;
            this.storeDetail.pages.pageData[6].apiResponse.records.misMatchReasonList = this.misMatchReasons;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        };
        this.goToClassroom = () => {
            let value = localStorage.getItem("stu_attend_section_status");
            const found = this.attendanceList.every(this.isAttendanceTaken);
            if (found && this.attendanceMarked && Number(value) == 1) {
                this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
            }
            else {
                this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "0") } }]);
                this._alertService.showAlert("Please Mark Attendance");
            }
        };
        this.goToObservationTeaching = () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var _a;
            let logDataNew = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Student attendance",
                action_name: "On submission",
                data: "Student attendance completed successfully",
                completion_percentage: this.progressValue
            };
            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            const found = this.attendanceList.every(this.isAttendanceTaken);
            if (found) {
                this.attendanceMarked = true;
                if (this.misMatchList.length) {
                    this.misMatchList.forEach((data, index) => {
                        data["reasonInfo"] = "";
                    });
                }
                let misMatchData = {
                    attendanceMisMatchList: this.misMatchList,
                };
                this.storeDetail.pages.pageData[6].correctedDetails =
                    this.groups[this.selectedClass];
                this.storeDetail.pages.pageData[6].pageDetails.misMatchStudentList =
                    this.attendanceList;
                this.storeDetail.pages.currentProgress = this.progressValue;
                this.classData = yield this.storeDetail.pages.pageData[5].pageDetails;
                let classInfo = {
                    mediumInfo: this.classData.mediumInfo,
                    subjectInfo: this.classData.subjectInfo,
                    classType: this.classData.classType,
                    class_id: this.selectedClass.toString(),
                };
                localStorage.setItem("classInfo", JSON.stringify(classInfo));
                let isRegularTeacher = true;
                isRegularTeacher = (_a = this.storeDetail.pages.pageData[5].correctedDetails) === null || _a === void 0 ? void 0 : _a.regularTeacher;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                if (this.selectedClass) {
                    if (isRegularTeacher) {
                        if (Number(this.storeDetail.pages.pageData[5].observationflow) == 1) {
                            this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                        }
                    }
                    else {
                        if (this.classData.selectedClass.class_id == '9' || this.classData.selectedClass.class_id == '10' || this.classData.selectedClass.class_id == '11' || this.classData.selectedClass.class_id == '12') {
                            let level = localStorage.getItem("selectedlevel");
                            let getfinaldata = localStorage.getItem("finaldata");
                            let getteacherlength = localStorage.getItem("teacherlength");
                            if (level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                                if (Number(this.usertype) == 8) {
                                    if (Number(this.classData.selectedClass.class_id) <= 12) {
                                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                    }
                                    else {
                                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                    }
                                }
                                else if (Number(this.classData.selectedClass.class_id) <= 12) {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                                else {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                            }
                            else if (level == '1' && !getfinaldata) {
                                if (Number(this.usertype) == 8) {
                                    if (Number(this.classData.selectedClass.class_id) <= 12) {
                                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                    }
                                    else {
                                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                    }
                                }
                                else if (Number(this.classData.selectedClass.class_id) <= 12) {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                                else {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                            }
                            else {
                                if (Number(this.usertype) == 8) {
                                    if (Number(this.classData.selectedClass.class_id) <= 12) {
                                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                    }
                                    else {
                                        this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                    }
                                }
                                else if (Number(this.classData.selectedClass.class_id) <= 12) {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                                else {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                            }
                        }
                        else {
                            if (Number(this.usertype) == 8) {
                                if (Number(this.classData.selectedClass.class_id) <= 12) {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                                else {
                                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                                }
                            }
                            else {
                                this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                            }
                        }
                    }
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1") } }]);
                }
            }
            else {
                this.attendanceMarked = false;
                this._alertService.showAlert("Please Mark Attendance");
            }
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.progressValue = Math.round(((7 - 2) / 14) * 100);
            this.appLanguage();
            this.schoolInfo = localStorage.getItem("schoolInfo");
            this.teachertype = this.userSessionService.teacher_type();
            this.usertype = this.userSessionService.emis_usertype();
            this.schoolInfo = JSON.parse(this.schoolInfo);
            try {
                yield this.ionicStore.getStudentsData().then((response) => {
                    if (response == null || response == undefined) {
                        let logDataNew = {
                            username: localStorage.getItem("username"),
                            udise_code: localStorage.getItem("udise_code"),
                            observation_id: localStorage.getItem("observation_id"),
                            form_name: "Student Attendance",
                            action_name: "Get student list from storage",
                            data: response,
                            completion_percentage: this.progressValue
                        };
                        this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                        }, (error) => {
                            this._alertService.showAlert("SOMETHING WENT WRONG");
                        });
                        this.masterStudentsData = JSON.parse(localStorage.getItem("studentsData"));
                    }
                    else {
                        this.masterStudentsData = response;
                    }
                });
            }
            catch (e) {
                let logDataNew = {
                    username: localStorage.getItem("username"),
                    udise_code: localStorage.getItem("udise_code"),
                    observation_id: localStorage.getItem("observation_id"),
                    form_name: "Student Attendance",
                    action_name: "Error in student list from storage",
                    data: e,
                    completion_percentage: this.progressValue
                };
                this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                }, (error) => {
                    this._alertService.showAlert("SOMETHING WENT WRONG");
                });
            }
            yield this.ionicStore.getOffStorage().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.masterApiResponse = response;
                if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                    this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                    let logDataNew = {
                        username: localStorage.getItem("username"),
                        udise_code: localStorage.getItem("udise_code"),
                        observation_id: localStorage.getItem("observation_id"),
                        form_name: "Get Stored Data",
                        action_name: "Issue in Getting Stored Data in attendance page",
                        data: "Issue in Getting Stored Data in attendance page",
                        completion_percentage: this.progressValue
                    };
                    this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                    }, (error) => {
                        this._alertService.showAlert("SOMETHING WENT WRONG");
                    });
                }
                try {
                    yield this.ionicStore.getStoreData().then((response) => {
                        this.storeDetail = response;
                        if (this.storeDetail == null) {
                            this.storeDetail = JSON.parse(localStorage.getItem('storedDetails'));
                        }
                        this.storeDetail.pages.currentPage = "stu_Attendance";
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                        this.selectedClass = this.storeDetail.pages.pageData[5].correctedDetails.class_id;
                        this.selectedSection = this.storeDetail.pages.pageData[5].pageDetails.section;
                        if (this.storeDetail.pages.pageData[6] == undefined || this.storeDetail.pages.pageData[6] == null) {
                            this.loading.present();
                            this.getStudentAttendanceList(this.selectedClass.toString(), this.schoolInfo.schoolId);
                            this.getReasonsList();
                        }
                        else {
                            this.attendanceList = this.storeDetail.pages.pageData[6].apiResponse.records.attendanceList;
                            if (this.storeDetail.pages.pageData[5].pageDetails.section && this.storeDetail.pages.pageData[6].correctedDetails.length > 0) {
                                this.groups[this.selectedClass] = this.storeDetail.pages.pageData[6].correctedDetails.filter((data) => {
                                    if (data.class_section == this.storeDetail.pages.pageData[5].pageDetails.section) {
                                        return data;
                                    }
                                });
                            }
                            else if (this.storeDetail.pages.pageData[5].pageDetails.section && this.storeDetail.pages.pageData[6].apiResponse.records.attendanceList.length > 0) {
                                this.groups[this.selectedClass] = this.storeDetail.pages.pageData[6].apiResponse.records.attendanceList.filter((data) => {
                                    if (data.class_section == this.storeDetail.pages.pageData[5].pageDetails.section) {
                                        return data;
                                    }
                                });
                            }
                            else {
                                this.groups = this.storeDetail.pages.pageData[6].correctedDetails.filter((data) => {
                                    if (data.class_section == this.storeDetail.pages.pageData[5].pageDetails.section) {
                                        return data;
                                    }
                                });
                            }
                            this.absentList = this.storeDetail.pages.pageData[6].apiResponse.records.absentList;
                            this.misMatchReasons = this.storeDetail.pages.pageData[6].apiResponse.records.misMatchReasonList;
                            this.misMatchList = this.storeDetail.pages.pageData[6].pageDetails.misMatchStudentList;
                        }
                    });
                }
                catch (e) {
                    let logDataNew = {
                        username: localStorage.getItem("username"),
                        udise_code: localStorage.getItem("udise_code"),
                        observation_id: localStorage.getItem("observation_id"),
                        form_name: "Student attendance",
                        action_name: "Error in Fetching student data",
                        data: e,
                        completion_percentage: this.progressValue
                    };
                    this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                    }, (error) => {
                        this._alertService.showAlert("SOMETHING WENT WRONG");
                    });
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
        this._translate.get("save").subscribe((res) => {
            this.save = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
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
};
StudentAttendanceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService }
];
StudentAttendanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-student-attendance",
        template: _raw_loader_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentAttendanceComponent);



/***/ }),

/***/ 60410:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-attendance/sub-student-attendance/sub-student-attendance.component.ts ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubStudentAttendanceComponent": function() { return /* binding */ SubStudentAttendanceComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_sub_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sub-student-attendance.component.html */ 33810);
/* harmony import */ var _sub_student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-student-attendance.component.scss */ 42736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);












let SubStudentAttendanceComponent = class SubStudentAttendanceComponent {
    constructor(modalController, _apiService, _router, alertController, _alertService, loading, ionicStore, _translate) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._router = _router;
        this.alertController = alertController;
        this._alertService = _alertService;
        this.loading = loading;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.attendanceList = [];
        this.absentList = [];
        this.misMatchList = [];
        this.getStudentAttendanceList = (class_id, schoolId) => {
            let schoolDetail = {
                class_id: class_id,
                school_id: schoolId,
            };
            let allStudents = this.masterApiResponse.StudentsData.all;
            let selectedClassStudents = allStudents.filter((data) => data.class_studying_id == class_id);
            let selectedClassAbsentInfo = [];
            let selectedClassAbsentData = [];
            let records = {
                all: selectedClassStudents,
                absent_info: selectedClassAbsentInfo.length
                    ? selectedClassAbsentInfo
                    : false,
                absent_data: selectedClassAbsentData,
            };
            this.attendanceList = records.all;
            this.attendanceList.forEach((data, index) => {
                data["status"] = "active";
            });
            // this.groups = _.groupBy(this.attendanceList, (a) => a.class_studying_id);
            let groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(this.attendanceList, (a) => a.class_studying_id);
            let sectionStudent = [];
            if (this.storeDetail.pages.pageData[14].pageDetails.selectedSetion) {
                groups[this.selectedClass] = groups[this.selectedClass].filter((data, index) => {
                    if (data.class_section == this.storeDetail.pages.pageData[14].pageDetails.selectedSetion) {
                        return data;
                    }
                });
            }
            sectionStudent = groups[this.selectedClass];
            this.groups = groups;
            this.absentList = records.absent_info == false ? "" : records.absent_info;
            this.loading.dismiss();
            let apiData = {
                pageNo: "16",
                pageName: "other_class_attendance",
                apiResponse: {
                    records: {
                        attendanceList: this.attendanceList,
                        absentList: this.absentList,
                    },
                },
                pageDetails: {
                    misMatchStudentList: [],
                },
            };
            this.storeDetail.pages.pageData[15] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
        };
        this.goToOtherClassroom = () => {
            this._router.navigate(["/tnvntabs/page-route/attendance"]);
        };
        this.goToObservationTeaching = () => {
            const found = this.attendanceList.every(this.isAttendanceTaken);
            if (found) {
                if (this.misMatchList.length) {
                    this.misMatchList.forEach((data, index) => {
                        data["reasonInfo"] = "";
                    });
                }
                let misMatchData = {
                    attendanceMisMatchList: this.misMatchList,
                };
                // this.storeDetail.pages.pageData[15]["correctedDetails"] =
                //   misMatchData.attendanceMisMatchList;
                // this.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList =
                //   misMatchData.attendanceMisMatchList;
                this.storeDetail.pages.pageData[15]["correctedDetails"] =
                    [];
                this.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList =
                    this.attendanceList;
                this.ionicStore.setStoreData(this.storeDetail);
                let otherClassMismatch = this.storeDetail.pages.pageData[15]
                    .correctedDetails;
                if (otherClassMismatch.length) {
                    this._router.navigate([
                        "/tnvntabs/page-route/attendance/otherClass-attendance-verify",
                    ]);
                }
                else {
                    let level = localStorage.getItem("selectedlevel");
                    if (level == '1') {
                        let selectedflow = this.storeDetail.pages.pageData[1].pageFlow;
                        if (selectedflow == 'observation') {
                            this._router.navigate([
                                "/tnvntabs/page-route/emidata",
                                this.storeDetail.pages.pageData[0].pageDetails.school_id,
                            ]);
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/attendance/attendance-verify"]);
                        }
                    }
                    else {
                        this._router.navigate(["/tnvntabs/page-route/attendance/attendance-verify"]);
                    }
                }
            }
            else {
                this._alertService.showAlert("Please Mark Attendance");
            }
        };
    }
    ngOnInit() {
        this.appLanguage();
        this.loading.present();
        this.schoolInfo = localStorage.getItem("schoolInfo");
        this.schoolInfo = JSON.parse(this.schoolInfo);
        this.ionicStore.getOffStorage().then((response) => {
            this.masterApiResponse = response;
            this.ionicStore.getStoreData().then((response) => {
                this.storeDetail = response;
                this.storeDetail.pages.currentPage = "other_class_attendance";
                this.ionicStore.setStoreData(this.storeDetail);
                this.selectedClass = this.storeDetail.pages.pageData[14].pageDetails.selectedClass.class_id;
                if (this.storeDetail.pages.pageData[15] == undefined) {
                    if (this.selectedClass) {
                        this.getStudentAttendanceList(this.selectedClass.toString(), this.schoolInfo.schoolId);
                    }
                }
                else {
                    this.attendanceList = this.storeDetail.pages.pageData[15].apiResponse.records.attendanceList;
                    this.groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(this.attendanceList, (a) => a.class_studying_id);
                    this.absentList = this.storeDetail.pages.pageData[15].apiResponse.records.absentList;
                    this.misMatchList = this.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList;
                    this.loading.dismiss();
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
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
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
};
SubStudentAttendanceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService }
];
SubStudentAttendanceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-sub-student-attendance",
        template: _raw_loader_sub_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sub_student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubStudentAttendanceComponent);



/***/ }),

/***/ 47678:
/*!******************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-data/student-data.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDataComponent": function() { return /* binding */ StudentDataComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-data.component.html */ 44327);
/* harmony import */ var _student_data_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-data.component.scss */ 93149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/attendancemodal/attendancemodal.component */ 20471);











let StudentDataComponent = class StudentDataComponent {
    constructor(modalController, _apiService, _router, ionicStore, _translate, _alertService) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._router = _router;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this._alertService = _alertService;
        this.misMatchAttendance = [];
        this.misMatchReasons = [];
        this.goToObservation = () => {
            if (this.storeDetail.pages.pageData[5]) {
                this._router.navigate(["/tnvntabs/page-route/observation"]);
            }
            else {
                if (this.storeDetail.pages.pageData[5])
                    this._router.navigate(["/tnvntabs/page-route/assessment/student-performance"]);
            }
        };
        this.goToAttendanceVerify = () => {
            const isAllAssessed = this.misMatchAttendance.filter((_ma) => _ma.reasonInfo == "");
            if (isAllAssessed.length == 0) {
                this.ionicStore.setStoreData(this.storeDetail);
                if (this.storeDetail.pages.pageData[5]) {
                    this._router.navigate(["/tnvntabs/page-route/observation/updateObservation"]);
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                }
            }
            else {
                this._alertService.showAlert("Attendance Vertification", "Please verify attendance for all the students");
            }
        };
    }
    ionViewWillEnter() {
        this.appLanguage();
        this.ionicStore.getStoreData().then((response) => {
            this.storeDetail = response;
            this.misMatchAttendance = this.storeDetail.pages.pageData[5].correctedDetails;
            this.misMatchReasons = this.storeDetail.pages.pageData[5].apiResponse.records.misMatchReasonList;
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
        this._translate.get("Attendance").subscribe((res) => {
            this.Attendance = res;
        });
        this._translate.get("Verification").subscribe((res) => {
            this.Verification = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
        });
        this._translate.get("mismatchInfo").subscribe((res) => {
            this.mismatchInfo = res;
        });
        this._translate.get("reasonMismatch").subscribe((res) => {
            this.reasonMismatch = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
    }
    presentModal(studentName, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedIndex = index;
            const modal = yield this.modalController.create({
                component: src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__.AttendancemodalComponent,
                componentProps: {
                    misMatchReasonList: this.misMatchReasons,
                    student: studentName,
                },
                backdropDismiss: false,
                cssClass: "my-custom-modal-attendance",
            });
            modal.onDidDismiss().then((response) => {
                if (response.data.reason != "Cancel") {
                    this.misMatchAttendance[this.selectedIndex].reasonInfo =
                        response.data.reason;
                }
            });
            return yield modal.present();
        });
    }
};
StudentDataComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
StudentDataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-student-data",
        template: _raw_loader_student_data_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_data_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentDataComponent);



/***/ }),

/***/ 75539:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-data/sub-attendance-verify/sub-attendance-verify.component.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubAttendanceVerifyComponent": function() { return /* binding */ SubAttendanceVerifyComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_sub_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sub-attendance-verify.component.html */ 45642);
/* harmony import */ var _sub_attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub-attendance-verify.component.scss */ 79672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/attendancemodal/attendancemodal.component */ 20471);











let SubAttendanceVerifyComponent = class SubAttendanceVerifyComponent {
    constructor(modalController, _apiService, ionicStore, _router, _translate, _alertService) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this.ionicStore = ionicStore;
        this._router = _router;
        this._translate = _translate;
        this._alertService = _alertService;
        this.misMatchAttendance = [];
        this.misMatchReasons = [];
        this.goToOtherClassAttendance = () => {
            this._router.navigate(["/tnvntabs/page-route/attendance/otherClass-attendance"]);
        };
        this.goToAttendanceVerify = () => {
            const isAllAssessed = this.misMatchAttendance.filter((_ma) => _ma.reasonInfo == "");
            if (isAllAssessed.length == 0) {
                this.storeDetail.pages.pageData[13].correctedDetails = this.misMatchAttendance;
                this.ionicStore.setStoreData(this.storeDetail);
                this._router.navigate(["/tnvntabs/page-route/attendance/attendance-verify"]);
            }
            else {
                this._alertService.showAlert("Attendance Vertification", "Please verify attendance for all the students");
            }
        };
    }
    ionViewWillEnter() {
        this.appLanguage();
        this.ionicStore.getStoreData().then((response) => {
            this.storeDetail = response;
            this.misMatchAttendance = this.storeDetail.pages.pageData[13].correctedDetails;
            this.misMatchReasons = this.storeDetail.pages.pageData[5].apiResponse.records.misMatchReasonList;
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
        this._translate.get("Attendance").subscribe((res) => {
            this.Attendance = res;
        });
        this._translate.get("Verification").subscribe((res) => {
            this.Verification = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
        });
        this._translate.get("mismatchInfo").subscribe((res) => {
            this.mismatchInfo = res;
        });
        this._translate.get("reasonMismatch").subscribe((res) => {
            this.reasonMismatch = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
    }
    presentModal(studentName, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedIndex = index;
            const modal = yield this.modalController.create({
                component: src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__.AttendancemodalComponent,
                componentProps: {
                    misMatchReasonList: this.misMatchReasons,
                    student: studentName,
                },
                backdropDismiss: false,
                cssClass: "my-custom-modal-attendance",
            });
            modal.onDidDismiss().then((response) => {
                if (response.data.reason != "Cancel") {
                    this.misMatchAttendance[this.selectedIndex].reasonInfo =
                        response.data.reason;
                }
            });
            return yield modal.present();
        });
    }
};
SubAttendanceVerifyComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService }
];
SubAttendanceVerifyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-sub-attendance-verify",
        template: _raw_loader_sub_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sub_attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubAttendanceVerifyComponent);



/***/ }),

/***/ 93782:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/attendance-verify/attendance-verify.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLXZlcmlmeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 56805:
/*!************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/attendance.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin_0_10 {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImF0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbl8wXzEwIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ 93808:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-attendance/student-attendance.component.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.student-present {\n  background: #43A047;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\nbutton.student-absent {\n  background: #F44537;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\n.sc-ion-label-md-h {\n  padding-left: 1rem;\n  display: block;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.background {\n  background-color: #e6deed !important;\n}\n\n#background-comtent {\n  background: #e6deed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDRTtFQUNJLHFCQUFBO0FBRU47O0FBQUU7RUFDRSx5Q0FBQTtBQUdKOztBQURFO0VBQ0Usb0NBQUE7QUFJSjs7QUFGRTtFQUNFLDhCQUFBO0FBS0oiLCJmaWxlIjoic3R1ZGVudC1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLnN0dWRlbnQtcHJlc2VudHtcclxuICAgIGJhY2tncm91bmQ6ICM0M0EwNDc7ICBcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7ICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG5idXR0b24uc3R1ZGVudC1hYnNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQ0NTM3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuXHJcbi5zYy1pb24tbGFiZWwtbWQtaHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4gIC5uby1wYWRkaW5nIHtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2U2ZGVlZCAhaW1wb3J0YW50OyAgXHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVlZCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gICNiYWNrZ3JvdW5kLWNvbXRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZkZWVkICFpbXBvcnRhbnRcclxuICB9Il19 */");

/***/ }),

/***/ 42736:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-attendance/sub-student-attendance/sub-student-attendance.component.scss ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button.student-present {\n  background: #43A047;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\nbutton.student-absent {\n  background: #F44537;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\n.sc-ion-label-md-h {\n  padding-left: 1rem;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1zdHVkZW50LWF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoic3ViLXN0dWRlbnQtYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5zdHVkZW50LXByZXNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNBMDQ3OyAgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4OyAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuYnV0dG9uLnN0dWRlbnQtYWJzZW50e1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NDUzNztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7ICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG4uc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9Il19 */");

/***/ }),

/***/ 93149:
/*!********************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-data/student-data.component.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWRhdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 79672:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/attendance/student-data/sub-attendance-verify/sub-attendance-verify.component.scss ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItYXR0ZW5kYW5jZS12ZXJpZnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 35316:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/attendance-verify/attendance-verify.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar class=\"new-background-color\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-buttons slot=\"\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                  </ion-buttons>\r\n            </ion-col>\r\n            <ion-col class=\"\">\r\n                <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\"><b>{{this.Attendance}}<br>{{this.Verification}}</b>\r\n                </ion-title></ion-col>\r\n            <ion-col>\r\n                <app-notification></app-notification>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    \r\n    </ion-toolbar>\r\n   \r\n  </ion-header>\r\n  <ion-content>\r\n\r\n      <div class=\"content-wrapper\"> \r\n          <section>  \r\n              <ion-text color=\"\" class=\"ion-text-center\">\r\n              <h2 class=\"text-muted fs-18\"><b [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.thankyou}}</b></h2>\r\n                \r\n                      <h1 class=\"fs-18 lh-2\"><b><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.class}}</span> {{classDetail?.class_id}} {{selectedSection}} <br> {{schoolDetail?.schoolName}}\r\n                      </b></h1>\r\n                    </ion-text>\r\n            </section> \r\n  </div>\r\n    </ion-content>\r\n    <ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">    \r\n            <ion-tab-button  class=\"btn-next done\"  (click)=\"finalSubmit()\">\r\n              <ion-label style = \"font-size:18px!important\" [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.done}}</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>\r\n      </ion-footer>\r\n  \r\n  \r\n  ");

/***/ }),

/***/ 43194:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/attendance.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.Attendance}}<br> {{this.Verification}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n    <h3 class=\"color-dgrey mt-2\"\r\n      [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-11': this.languageType == 'ta','fs-18': this.languageType == 'en'}\">\r\n      <b>{{this.verifyAnotherClass}}.</b></h3>\r\n    <p class=\"color-dgrey px-1\"><span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-11': this.languageType == 'ta'}\">\r\n        {{this.completeAttendance_verify}}</span>:</p>\r\n  </ion-text>\r\n\r\n  <ion-list lines=\"none\" class=\"margin_0_10\">\r\n    <ion-item class=\"border\">\r\n        <ion-label> {{ this.selectClass }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedClass\" (ngModelChange)=\"classSelectHandler($event)\"\r\n          *ngIf=\"classList.length else noClass \">\r\n          <ion-select-option *ngFor=\"let classData of classList\" [value]=\"classData\">{{classData.class_id}}</ion-select-option>\r\n        </ion-select>\r\n        <ng-template #noClass>\r\n          <ion-select-option value=\"\">No Class Available</ion-select-option>\r\n        </ng-template>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"border\">\r\n        <ion-label> {{ this.selectSection }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedSection\" (ngModelChange)=\"sectionHandler($event)\"\r\n          *ngIf=\"sectionList.length else nosection \">\r\n          <ion-select-option *ngFor=\"let section of sectionList\" [value]=\"section\">{{section}}</ion-select-option>\r\n        </ion-select>\r\n        <ng-template #nosection>\r\n          <ion-select-option value=\"\">No Section Available</ion-select-option>\r\n        </ng-template>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-next done\" (click)=\"goToOtherClassAttendance()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 98916:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-attendance/student-attendance.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{this.studentAttendance}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>                   \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<app-progress [progress]=\"this.progressValue\"></app-progress>\r\n<ion-content class=\"background\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p\r\n      class=\"fs-12 p-2 color-dgrey\"\r\n      [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n    >\r\n      {{ this.rollCall_Info }}\r\n    </p>\r\n  </ion-text>  \r\n  <div *ngFor=\"let attendance of groups | keyvalue\">\r\n    <div class=\"text-align-center\">Grade: {{ attendance.key }} {{selectedSection}}</div>\r\n    <ion-row\r\n      [ngClass]=\"i % 2 == 0 ? 'bg-grey' : ''\"\r\n      *ngFor=\"let item of attendance.value; let i = index\"\r\n    >\r\n      <ion-col size=\"9\">\r\n        <ion-label\r\n          ><b>{{ item.name }}</b></ion-label\r\n        >\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-present\"\r\n          (click)=\"makeAttendance(item, 'p', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'active',\r\n            opacity_not_one: item.status != 'active'\r\n          }\"\r\n        >\r\n          {{ this.p }}\r\n        </button>\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-absent opacity_not_one\"\r\n          (click)=\"makeAttendance(item, 'a', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'Inactive',\r\n            opacity_not_one: item.status != 'Inactive'\r\n          }\"\r\n        >\r\n          {{ this.a }}\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>  \r\n</ion-content>\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToClassroom()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToObservationTeaching()\">\r\n        <ion-label\r\n          class=\"no-padding\"\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 33810:
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-attendance/sub-student-attendance/sub-student-attendance.component.html ***!
  \*************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title\r\n            class=\"ion-text-center fs-15\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{ this.studentAttendance }}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p\r\n      class=\"fs-12 p-2 color-dgrey\"\r\n      [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n    >\r\n      {{ this.rollCall_Info }}\r\n    </p>\r\n  </ion-text>  \r\n  <div *ngFor=\"let attendance of groups | keyvalue\">\r\n    <div class=\"text-align-center\">Grade: {{ attendance.key }}</div>\r\n    <ion-row\r\n      [ngClass]=\"i % 2 == 0 ? 'bg-grey' : ''\"\r\n      *ngFor=\"let item of attendance.value; let i = index\"\r\n    >\r\n      <ion-col size=\"9\">\r\n        <ion-label\r\n          ><b>{{ item.name }}</b></ion-label\r\n        >\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-present\"\r\n          (click)=\"makeAttendance(item, 'p', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'active',\r\n            opacity_not_one: item.status != 'active'\r\n          }\"\r\n        >\r\n          {{ this.p }}\r\n        </button>\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-absent opacity_not_one\"\r\n          (click)=\"makeAttendance(item, 'a', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'Inactive',\r\n            opacity_not_one: item.status != 'Inactive'\r\n          }\"\r\n        >\r\n          {{ this.a }}\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToOtherClassroom()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToObservationTeaching()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n");

/***/ }),

/***/ 44327:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-data/student-data.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.Attendance}}<br> {{this.Verification}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"notifications\" class=\"notification-icon\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p class=\"fs-12 p-2\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.Note}}</span> : <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.mismatchInfo}}</span>.</p>\r\n  </ion-text> \r\n  <ion-row *ngFor=\"let studentData of misMatchAttendance;let i = index\" class=\"mt-2\"\r\n    [ngClass]=\"studentData.reasonInfo == ''? 'color-lpink':'color-lgreen'\">\r\n    <ion-col (click)=\"presentModal(studentData.name, i)\">\r\n      <ion-label class=\"color-dgrey\"><b>{{studentData.name}}</b> :</ion-label>\r\n      <p class=\"mb-0 fs-12 text-center color-blue\">\r\n        {{studentData.reasonInfo == ''? this.reasonMismatch :studentData.reasonInfo }}</p>\r\n    </ion-col>\r\n  </ion-row>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height:50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToObservation()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToAttendanceVerify()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>");

/***/ }),

/***/ 45642:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-data/sub-attendance-verify/sub-attendance-verify.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.Attendance}}<br> {{this.Verification}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"notifications\" class=\"notification-icon\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p class=\"fs-12 p-2\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.Note}}</span> : <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.mismatchInfo}}</span>.</p>\r\n  </ion-text>  \r\n  <ion-row *ngFor=\"let studentData of misMatchAttendance;let i = index\" class=\"mt-2\"\r\n    [ngClass]=\"studentData.reasonInfo == ''? 'color-lpink':'color-lgreen'\">\r\n    <ion-col (click)=\"presentModal(studentData.name,i)\">\r\n      <ion-label class=\"color-dgrey\"><b>{{studentData.name}}</b> :</ion-label>\r\n      <p class=\"mb-0 fs-12 text-center color-blue\">\r\n        {{studentData.reasonInfo == ''? this.reasonMismatch:studentData.reasonInfo }}</p>\r\n    </ion-col>\r\n  </ion-row>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height:50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToOtherClassAttendance()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToAttendanceVerify()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_attendance_attendance_module_ts-es2015.js.map