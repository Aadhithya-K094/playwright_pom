(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_index_index_module_ts"],{

/***/ 10744:
/*!**************************************************!*\
  !*** ./src/app/pages/tnvn/index/index.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageModule": function() { return /* binding */ IndexPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page */ 61392);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);







const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage
    }
];
let IndexPageModule = class IndexPageModule {
};
IndexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage]
    })
], IndexPageModule);



/***/ }),

/***/ 61392:
/*!************************************************!*\
  !*** ./src/app/pages/tnvn/index/index.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPage": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./index.page.html */ 19699);
/* harmony import */ var _index_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page.scss */ 63515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/regulatory.service */ 63987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/post.service */ 62538);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tnvn/services/network.service */ 81508);
/* harmony import */ var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/emimodal/emimodal.component */ 79615);
/* harmony import */ var src_app_components_observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/observationfinalremark/observationfinalremark.component */ 26463);
/* harmony import */ var src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/apiErrorLog/apiErrorLog.component */ 98747);


















let IndexPage = class IndexPage {
    constructor(router, rcservice, route, alertService, _apiService, _translate, alertController, usersessionservice, loading, modalController, _router, userSessionService, activatedRoute, _alertService, _postService, ionicStore, networkService) {
        this.router = router;
        this.rcservice = rcservice;
        this.route = route;
        this.alertService = alertService;
        this._apiService = _apiService;
        this._translate = _translate;
        this.alertController = alertController;
        this.usersessionservice = usersessionservice;
        this.loading = loading;
        this.modalController = modalController;
        this._router = _router;
        this.userSessionService = userSessionService;
        this.activatedRoute = activatedRoute;
        this._alertService = _alertService;
        this._postService = _postService;
        this.ionicStore = ionicStore;
        this.networkService = networkService;
        this.questEnglish = true;
        this.questTamil = false;
        this.classList = [];
        this.storedFinalData = [];
        this.check = true;
        this.actualValueList = [];
        this.progressValue = 100;
        this.listedDistrict = false;
        this.listedEduDistrict = false;
        this.listedBlock = false;
        this.listedZone = false;
        this.listedTotalTeachers = false;
        this.listedTotalStudents = false;
        this.correctedDistrict = "";
        this.correctedEduDistrict = "";
        this.correctedBlock = "";
        this.correctedZone = "";
        this.correctedTotalTeachers = "";
        this.correctedTotalStudents = "";
        this.correctedClass = [];
        this.isOpen = false;
        this.submitted = false;
        this.obs_submit_btn = false;
        this.ppSchBaseDetails = [];
        this.getSchoolDetails = (schoolId) => {
            let records = {
                nodal_name: this.masterApiResponse.basic_info.nodal_name,
                nodal_id: this.masterApiResponse.basic_info.nodal_id,
                dist_id: this.masterApiResponse.basic_info.dist_id,
                edu_dist_id: this.masterApiResponse.basic_info.edu_dist_id,
                block_id: this.masterApiResponse.basic_info.block_id,
                block_name: this.masterApiResponse.basic_info.block_name,
                edu_dist_name: this.masterApiResponse.basic_info.edu_dist_name,
                district_name: this.masterApiResponse.basic_info.district_name,
                total: this.masterApiResponse.basic_info.total,
                catty_id: this.masterApiResponse.basic_info.catty_id,
                cate_type: this.masterApiResponse.basic_info.cate_type,
                teach_tot: this.masterApiResponse.basic_info.teach_tot,
                nonteach_tot: this.masterApiResponse.basic_info.nonteach_tot,
                totstaff: this.masterApiResponse.basic_info.totstaff,
                total_students: this.masterApiResponse.basic_info.total_students,
                school_name: this.masterApiResponse.basic_info.school_name,
                school_id: this.masterApiResponse.basic_info.school_id,
                udise_code: this.masterApiResponse.basic_info.udise_code,
                class_info: this.masterApiResponse.basic_info.class_info,
                districts: this.masterApiResponse.basic_info.districts,
            };
            this.schoolDetails = records;
            let schoolData = {
                schoolId: this.schoolDetails.school_id,
                schoolName: this.schoolDetails.school_name,
                distName: this.schoolDetails.district_name,
                eduDistName: this.schoolDetails.edu_dist_name,
                blockName: this.schoolDetails.block_name,
                cateType: this.schoolDetails.cate_type,
            };
            this.loading.dismiss();
            localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
            let apiData = {
                pageNo: "2",
                pageName: "emiselection",
                apiResponse: {
                    records: this.schoolDetails,
                },
                pageDetails: {},
                pageFlow: this.pageFlow,
                correctedDetails: {},
                correctedClass: this.correctedClass,
            };
            this.loading.dismiss();
        };
    }
    ionViewDidEnter() {
        this.ionicStore.getData('ppSchBaseDetails').then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.ppSchBaseDetails = data ? data : [];
            this.user_type = this.userSessionService.emis_usertype();
            this.currentPage = this.route.snapshot.queryParamMap.get("currentPage");
            this.class_with_sec = localStorage.getItem('selectedClassSection');
            // this.classroom_section_status = Number(localStorage.getItem("classroom_section_status"));
            this.metho_section_status = Number(localStorage.getItem("metho_section_status"));
            this.stu_attend_section_status = Number(localStorage.getItem("stu_attend_section_status"));
            this.assessment_section_status = Number(localStorage.getItem("assessment_section_status"));
            // this.omr_rand_stu_section_status = Number(localStorage.getItem("omr_rand_stu_section_status"));
            // this.omr_scanner_section_status = Number(localStorage.getItem("omr_scanner_section_status"));
            // this.omr_student_section_status = Number(localStorage.getItem("omr_student_section_status"));
            this.notebook_section_status = Number(localStorage.getItem("notebook_section_status"));
            this.pre_obs_qns_section_status = Number(localStorage.getItem("pre_obs_qns_section_status"));
            this.obs_report_section_status = Number(localStorage.getItem("obs_report_section_status"));
            this.hod_inspect_section_status = Number(localStorage.getItem("hod_inspect_section_status"));
            this.emidata_section_status = Number(localStorage.getItem("emidata_section_status"));
            this.kgbv_section_status = Number(localStorage.getItem("kgbv_section_status"));
            // this.emiverify_section_status = Number(localStorage.getItem("emiverify_section_status"));
            // this.obs_another_section_status = Number(localStorage.getItem("obs_another_section_status"));
            this.end_obs_section_status = Number(localStorage.getItem("end_obs_section_status"));
            this.finaldata = localStorage.getItem("finaldata");
            this.routingList = JSON.parse(localStorage.getItem("routingList"));
            if (this.routingList) {
                this.routingList = this.routingList;
            }
            else {
                this.routingList = [];
            }
            if (this.finaldata) {
                this.finaldata = this.finaldata;
            }
            else {
                this.finaldata = null;
            }
            this.classInfo = localStorage.getItem("classInfo");
            if (this.classInfo) {
                this.classInfo = JSON.parse(this.classInfo);
                this.class_id = this.classInfo.class_id;
                this.class_with_sec = this.class_with_sec;
            }
            else {
                this.class_id = this.route.snapshot.queryParamMap.get("class_id");
                this.class_with_sec = this.class_with_sec;
            }
            this.schoolInfo = localStorage.getItem("schoolInfo");
            if (this.schoolInfo) {
                this.schoolInfo = JSON.parse(this.schoolInfo);
                this.school_id = this.schoolInfo.schoolId;
            }
            else {
                this.school_id = this.route.snapshot.queryParamMap.get("school_id");
            }
            let languageStatus = localStorage.getItem("language");
            if (languageStatus != null) {
                this.languageType = languageStatus;
                this._apiService.languageChange(this.languageType);
                this.appLanguage();
            }
            else {
                this.appLanguage();
            }
            this.getPPsections();
            this.selectedlevel = localStorage.getItem("selectedlevel");
            // this.warn();
            this.ionicStore.getOffStorage().then((response) => {
                if (response) {
                    this.masterApiResponse = response;
                    if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                        this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                    }
                }
            });
            this.schlMngId = localStorage.getItem("schlMngId");
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
        this._translate.get("classroomSelection").subscribe((res) => {
            this.classroomSelection = res;
        });
        this._translate.get("teachingmethodology").subscribe((res) => {
            this.teachingmethodology = res;
        });
        this._translate.get("studentAttendance").subscribe((res) => {
            this.studentAttendance = res;
        });
        this._translate.get("studentAssessment").subscribe((res) => {
            this.studentAssessment = res;
        });
        this._translate.get("omrRandomStudents").subscribe((res) => {
            this.omrRandomStudents = res;
        });
        this._translate.get("omrScanner").subscribe((res) => {
            this.omrScanner = res;
        });
        this._translate.get("omrScanned").subscribe((res) => {
            this.omrScanned = res;
        });
        this._translate.get("notebookVerification").subscribe((res) => {
            this.notebookVerification = res;
        });
        this._translate.get("postObservationQuestions").subscribe((res) => {
            this.postObservationQuestions = res;
        });
        this._translate.get("obsReport").subscribe((res) => {
            this.obsReport = res;
        });
        this._translate.get("schoolInspection").subscribe((res) => {
            this.schoolInspection = res;
        });
        this._translate.get("emisdataValReport").subscribe((res) => {
            this.emisdataValReport = res;
        });
        this._translate.get("emisReport").subscribe((res) => {
            this.emisReport = res;
        });
        this._translate.get("Verification").subscribe((res) => {
            this.Verification = res;
        });
        this._translate.get("submitObservation").subscribe((res) => {
            this.submitObservation = res;
        });
        this._translate.get("secondClassObservation").subscribe((res) => {
            this.secondClassObservation = res;
        });
        this._translate.get("secondClassObservationComplete").subscribe((res) => {
            this.secondClassObservationComplete = res;
        });
        this._translate.get("secondObservationagainSubmit").subscribe((res) => {
            this.secondObservationagainSubmit = res;
        });
        this._translate.get("saveAndContinue").subscribe((res) => {
            this.saveAndContinue = res;
        });
        this._translate.get("yes").subscribe((res) => {
            this.Yes = res;
        });
        this._translate.get("no").subscribe((res) => {
            this.No = res;
        });
        this._translate.get("school").subscribe((res) => {
            this.school = res;
        });
        this._translate.get("primary").subscribe((res) => {
            this.primary = res;
        });
        this._translate.get("secondary").subscribe((res) => {
            this.secondary = res;
        });
        this._translate.get("middle").subscribe((res) => {
            this.middle = res;
        });
        this._translate.get("district").subscribe((res) => {
            this.district = res;
        });
        this._translate.get("educationalDistrict").subscribe((res) => {
            this.educationalDistrict = res;
        });
        this._translate.get("block").subscribe((res) => {
            this.block = res;
        });
        this._translate.get("zone").subscribe((res) => {
            this.zone = res;
        });
        this._translate.get("giveCheck").subscribe((res) => {
            this.giveCheck = res;
        });
        this._translate.get("teachersTotal").subscribe((res) => {
            this.teachersTotal = res;
        });
        this._translate.get("observetheClass").subscribe((res) => {
            this.observetheClass = res;
        });
        this._translate.get("observeQuestion").subscribe((res) => {
            this.observeQuestion = res;
        });
        this._translate.get("observeQuestionOne").subscribe((res) => {
            this.observeQuestionOne = res;
        });
        this._translate.get("studentsTotal").subscribe((res) => {
            this.studentsTotal = res;
        });
        this._translate.get("boysTotal").subscribe((res) => {
            this.boysTotal = res;
        });
        this._translate.get("girlsTotal").subscribe((res) => {
            this.girlsTotal = res;
        });
        this._translate.get("class").subscribe((res) => {
            this.class = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("anotherclass").subscribe((res) => {
            this.anotherclass = res;
        });
        this._translate.get("observe").subscribe((res) => {
            this.observe = res;
        });
        this._translate.get("teacherSanctioned").subscribe((res) => {
            this.teacherSanctioned = res;
        });
        this._translate.get("teachersAvailable").subscribe((res) => {
            this.teachersAvailable = res;
        });
        this._translate
            .get("teachersDeputationSameSchool")
            .subscribe((res) => {
            this.teachersDeputationSameSchool = res;
        });
        this._translate
            .get("teachersDeputationOtherSchool")
            .subscribe((res) => {
            this.teachersDeputationOtherSchool = res;
        });
        this._translate.get("teachersOnLongLeave").subscribe((res) => {
            this.teachersOnLongLeave = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("vacanciesTotal").subscribe((res) => {
            this.vacanciesTotal = res;
        });
        this._translate
            .get("teacherSanctionedRequired")
            .subscribe((res) => {
            this.teacherSanctionedRequired = res;
        });
        this._translate
            .get("teachersAvailableRequired")
            .subscribe((res) => {
            this.teachersAvailableRequired = res;
        });
        this._translate
            .get("teachersDeputationSameSchoolRequired")
            .subscribe((res) => {
            this.teachersDeputationSameSchoolRequired = res;
        });
        this._translate
            .get("teachersDeputationOtherSchoolRequired")
            .subscribe((res) => {
            this.teachersDeputationOtherSchoolRequired = res;
        });
        this._translate
            .get("teachersOnLongLeaveRequired")
            .subscribe((res) => {
            this.teachersOnLongLeaveRequired = res;
        });
    }
    ngOnInit() {
    }
    navigateBack() {
        this.router.navigate(['/tnvntabs/page-route/dashboardc']);
    }
    warn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.observeList = '1';
            const alert = yield this.alertController.create({
                cssClass: 'obsWarnInfo',
                header: this.observetheClass + " " + this.selectedClass + " " + this.selectedSection + " " + this.observeQuestion + " " + this.observeQuestionOne,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        handler: data => {
                            // this.obs_submit_btn = true;
                            this.observeClass();
                        }
                    },
                    {
                        cssClass: 'alertButton',
                        text: 'Yes',
                        handler: data => {
                            // this.obs_submit_btn = true;
                            this.emisValidation();
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    obsanotherWarnInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.observeList = '2';
            const alert = yield this.alertController.create({
                cssClass: 'obsWarnInfo',
                header: this.secondClassObservation + " " + this.selectedClass + " " + this.selectedSection + " " + this.secondClassObservationComplete + " " + this.secondObservationagainSubmit,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        handler: data => {
                            this.goToTeacherSelection();
                            // this.obs_submit_btn = true;
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
    getPPsections() {
        debugger;
        if (this.finaldata != null) {
            if (this.routingList.length > 0) {
                this.routingList = JSON.parse(localStorage.getItem("routingList"));
                this.routingList.forEach((element, index) => {
                    if (element.section_name == "methodology") {
                        element.section_status = this.metho_section_status;
                    }
                    else if (element.section_name == "attendance/student-attendance") {
                        element.section_status = this.stu_attend_section_status;
                    }
                    else if (element.section_name == "assessment") {
                        element.section_status = this.assessment_section_status;
                    }
                    else if (element.section_name == "notebook") {
                        element.section_status = this.notebook_section_status;
                    }
                    else if (element.section_name == "pre-observation-question") {
                        element.section_status = this.pre_obs_qns_section_status;
                    }
                    else if (element.section_name == "observation") {
                        element.section_status = this.obs_report_section_status;
                    }
                    else if (element.section_name == "hodinspection") {
                        element.section_status = this.hod_inspect_section_status;
                    }
                    else if (element.section_name == "emidata") {
                        element.section_status = this.emidata_section_status;
                    }
                    else if (element.section_name == "kgbv-nsbav-inspection") {
                        element.section_status = this.kgbv_section_status;
                    }
                });
                localStorage.setItem("routingList", JSON.stringify(this.routingList));
            }
            else if (this.routingList.length == 0) {
                this._apiService.getPPSections().subscribe((response) => {
                    if (response.status == 200 && response.dataStatus == true) {
                        this.routingList = response.records.base_sections;
                        this.sub_sections_list = response.records.sections;
                        localStorage.setItem("subSectionsList", JSON.stringify(this.sub_sections_list));
                        this.routingList.forEach((element, index) => {
                            if (element.id == "1") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "methodology";
                                    element.section_status = this.metho_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "2") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "attendance/student-attendance";
                                    element.section_status = this.stu_attend_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "3") {
                                element.section_name = undefined;
                                element.section_status = undefined;
                            }
                            else if (element.id == "4" && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "assessment";
                                    element.section_status = this.assessment_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "5") {
                                element.section_name = undefined;
                                element.section_status = undefined;
                            }
                            else if (element.id == "6") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "notebook";
                                    element.section_status = this.notebook_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "7") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "pre-observation-question";
                                    element.section_status = this.pre_obs_qns_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "8") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "observation";
                                    element.section_status = this.obs_report_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "9" && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "hodinspection";
                                    element.section_status = this.hod_inspect_section_status == 0 ? 0 : undefined;
                                }
                            }
                            else if (element.id == "10" && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "emidata";
                                    element.section_status = this.emidata_section_status == 0 ? 0 : undefined;
                                }
                            }
                            else if (element.id == "11" && (this.schlMngId == 32 || this.schlMngId == 36) && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "kgbv-nsbav-inspection";
                                    element.section_status = this.kgbv_section_status == 0 ? 0 : undefined;
                                }
                            }
                        });
                        this.routingList = this.routingList.filter((sr) => sr.section_status != undefined);
                        localStorage.setItem("routingList", JSON.stringify(this.routingList));
                    }
                });
            }
            // else if (this.routingList.length == 0) {
            // this._apiService.getPPSections().subscribe((response: any) => {
            //   if (response.status == 200 && response.dataStatus == true) {
            //     this.routingList = response.records.base_sections;
            //     this.sub_sections_list = response.records.sections;
            //     localStorage.setItem("subSectionsList", JSON.stringify(this.sub_sections_list));
            //     this.routingList.forEach((element, index) => {
            //       if (element.id == "1") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "methodology";
            //         element.section_status = this.metho_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "2") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "attendance/student-attendance";
            //         element.section_status = this.stu_attend_section_status == 1 ? 1 : 0;
            //         }
            //       }
            //       else if (element.id == "3") {
            //         element.section_name = undefined;
            //         element.section_status = undefined;
            //       }
            //       else if (element.id == "4") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //           element.section_name = "assessment";
            //           element.section_status = this.assessment_section_status == 1 ? 1 : 0;
            //         }
            //       }
            //       else if (element.id == "5") {
            //         element.section_name = undefined;
            //         element.section_status = undefined;
            //       }
            //       else if (element.id == "6") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "notebook";
            //         element.section_status = this.notebook_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "7") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "pre-observation-question";
            //         element.section_status = this.pre_obs_qns_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "8") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "observation";
            //         element.section_status = this.obs_report_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "9") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "hodinspection";
            //         element.section_status = this.hod_inspect_section_status == 0 ? 0 : undefined;
            //         }
            //       } else if (element.id == "10") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "emidata";
            //         element.section_status = this.emidata_section_status == 0 ? 0 : undefined;
            //         }
            //       }
            //     });
            //     this.routingList = this.routingList.filter((sr) => sr.section_status != undefined);
            //     localStorage.setItem("routingList", JSON.stringify(this.routingList));
            //   }
            // });
            // }
        }
        else if (this.finaldata == null) {
            if (this.routingList.length > 0) {
                this.routingList = JSON.parse(localStorage.getItem("routingList"));
                this.routingList.forEach((element, index) => {
                    if (element.section_name == "methodology") {
                        element.section_status = this.metho_section_status;
                    }
                    else if (element.section_name == "attendance/student-attendance") {
                        element.section_status = this.stu_attend_section_status;
                    }
                    else if (element.section_name == "assessment") {
                        element.section_status = this.assessment_section_status;
                    }
                    else if (element.section_name == "notebook") {
                        element.section_status = this.notebook_section_status;
                    }
                    else if (element.section_name == "pre-observation-question") {
                        element.section_status = this.pre_obs_qns_section_status;
                    }
                    else if (element.section_name == "observation") {
                        element.section_status = this.obs_report_section_status;
                    }
                    else if (element.section_name == "hodinspection") {
                        element.section_status = this.hod_inspect_section_status;
                    }
                    else if (element.section_name == "emidata") {
                        element.section_status = this.emidata_section_status;
                    }
                    else if (element.section_name == "kgbv-nsbav-inspection") {
                        element.section_status = this.kgbv_section_status;
                    }
                });
                localStorage.setItem("routingList", JSON.stringify(this.routingList));
            }
            else if (this.routingList.length == 0) {
                this._apiService.getPPSections().subscribe((response) => {
                    if (response.status == 200 && response.dataStatus == true) {
                        this.routingList = response.records.base_sections;
                        this.sub_sections_list = response.records.sections;
                        localStorage.setItem("subSectionsList", JSON.stringify(this.sub_sections_list));
                        this.routingList.forEach((element, index) => {
                            if (element.id == "1") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "methodology";
                                    element.section_status = this.metho_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "2") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "attendance/student-attendance";
                                    element.section_status = this.stu_attend_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "3") {
                                element.section_name = undefined;
                                element.section_status = undefined;
                            }
                            else if (element.id == "4" && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "assessment";
                                    element.section_status = this.assessment_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "5") {
                                element.section_name = undefined;
                                element.section_status = undefined;
                            }
                            else if (element.id == "6") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "notebook";
                                    element.section_status = this.notebook_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "7") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "pre-observation-question";
                                    element.section_status = this.pre_obs_qns_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "8") {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "observation";
                                    element.section_status = this.obs_report_section_status == 1 ? 1 : 0;
                                }
                            }
                            else if (element.id == "9" && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "hodinspection";
                                    element.section_status = this.hod_inspect_section_status == 0 ? 0 : 1;
                                }
                            }
                            else if (element.id == "10" && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "emidata";
                                    element.section_status = this.emidata_section_status == 0 ? 0 : 1;
                                }
                            }
                            else if (element.id == "11" && (this.schlMngId == 32 || this.schlMngId == 36) && Number(this.user_type != 8)) {
                                let _class = element.class.split(',');
                                let test = _class.find(x => Number(x) == Number(this.class_id));
                                if (test) {
                                    element.section_name = "kgbv-nsbav-inspection";
                                    element.section_status = this.kgbv_section_status == 0 ? 0 : 1;
                                }
                            }
                        });
                        this.routingList = this.routingList.filter((sr) => sr.section_status != undefined);
                        localStorage.setItem("routingList", JSON.stringify(this.routingList));
                    }
                });
            }
            // else if (this.routingList.length == 0) {
            // this._apiService.getPPSections().subscribe((response: any) => {
            //   if (response.status == 200 && response.dataStatus == true) {
            //     this.routingList = response.records.base_sections;
            //     this.sub_sections_list = response.records.sections;
            //     localStorage.setItem("subSectionsList", JSON.stringify(this.sub_sections_list));
            //     this.routingList.forEach((element, index) => {
            //       if (element.id == "1") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "methodology";
            //         element.section_status = this.metho_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "2") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "attendance/student-attendance";
            //         element.section_status = this.stu_attend_section_status == 1 ? 1 : 0;
            //         }
            //       }
            //       else if (element.id == "3") {
            //         element.section_name = undefined;
            //         element.section_status = undefined;
            //       }
            //       else if (element.id == "4") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //           element.section_name = "assessment";
            //           element.section_status = this.assessment_section_status == 1 ? 1 : 0;
            //         }
            //       }
            //       else if (element.id == "5") {
            //         element.section_name = undefined;
            //         element.section_status = undefined;
            //       }
            //       else if (element.id == "6") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "notebook";
            //         element.section_status = this.notebook_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "7") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "pre-observation-question";
            //         element.section_status = this.pre_obs_qns_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "8") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "observation";
            //         element.section_status = this.obs_report_section_status == 1 ? 1 : 0;
            //         }
            //       } else if (element.id == "9") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "hodinspection";
            //         element.section_status = this.hod_inspect_section_status == 0 ? 0 : 1;
            //         }
            //       } else if (element.id == "10") {
            //         let _class = element.class.split(',');
            //         let _class_length = _class.length - 1;
            //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
            //         element.section_name = "emidata";
            //         element.section_status = this.emidata_section_status == 0 ? 0 : 1;
            //         }
            //       }
            //     });
            //     this.routingList = this.routingList.filter((sr) => sr.section_status != undefined);
            //     localStorage.setItem("routingList", JSON.stringify(this.routingList));
            //   }
            // });
            // }
        }
    }
    routeToForm(secName, i, secStatus, lang) {
        debugger;
        this.secname = secName;
        this.secstatus = secStatus;
        this.langstatus = lang;
        // if (secName == "attendance/student-attendance" && this.metho_section_status == 0) {
        //   this.alertService.showAlert("Please complete methodology section");
        // } else 
        if (secName == "assessment" && this.stu_attend_section_status == 0 && Number(this.class_id) >= 1 && Number(this.class_id) <= 12) {
            this.alertService.showAlert("Please complete student attendance section");
        }
        // else if (secName == "omr-random-student" && this.assessment_section_status == 0) {
        //   this.alertService.showAlert("Please complete student assessment section");
        // } else if (secName == "omr-scanner" && this.omr_rand_stu_section_status == 0) {
        //   this.alertService.showAlert("Please verify OMR students section");
        // } else if (secName == "omrscanner" && this.omr_scanner_section_status == 0) {
        //   this.alertService.showAlert("Please complete OMR scanning section");
        // } 
        else if (secName == "notebook" && this.stu_attend_section_status == 0 && (Number(this.class_id) >= 1 && Number(this.class_id) <= 2 || Number(this.class_id) >= 9 && Number(this.class_id) <= 12)) {
            this.alertService.showAlert("Please complete student attendance section");
        }
        else if (secName == "notebook" && this.stu_attend_section_status == 0 && Number(this.class_id) >= 3 && Number(this.class_id) <= 8) {
            this.alertService.showAlert("Please complete student attendance section");
        }
        else if (secName == "notebook" && this.assessment_section_status == 0 && Number(this.user_type) != 8 && Number(this.class_id) >= 3 && Number(this.class_id) <= 8) {
            this.alertService.showAlert("Please complete student assessment section");
        }
        // else if (secName == "pre-observation-question" && this.notebook_section_status == 0) {
        //   this.alertService.showAlert("Please complete notebook section");
        // } 
        else if (secName == "observation" && this.metho_section_status == 0) {
            this.alertService.showAlert("Please complete teaching methodology section");
        }
        else if (secName == "observation" && this.stu_attend_section_status == 0) {
            this.alertService.showAlert("Please complete student attendance section");
        }
        else if (secName == "observation" && this.notebook_section_status == 0) {
            this.alertService.showAlert("Please complete student interaction section");
        }
        else if (secName == "observation" && this.pre_obs_qns_section_status == 0) {
            this.alertService.showAlert("Please complete post observation questions section");
        }
        else if (secName == "observation" && this.assessment_section_status == 0 && Number(this.user_type) != 8 && Number(this.class_id) >= 3 && Number(this.class_id) <= 8) {
            this.alertService.showAlert("Please complete student assessment section");
        }
        // else if (secName == "hodinspection" && this.obs_report_section_status == 0) {
        //   this.alertService.showAlert("Please complete observation report section");
        // } 
        // else if (secName == "emidata" && this.hod_inspect_section_status == 0) {
        //   this.alertService.showAlert("Please complete school inspection section");
        // } 
        // else if (secName == "emiverify" && this.emidata_section_status == 0) {
        //   this.alertService.showAlert("Please complete emis data validation section");
        // } 
        // else if (secName == "observation-another-class" && this.emiverify_section_status == 0) {
        //   this.alertService.showAlert("Please complete emis data verification section");
        // } 
        // else if (secName == "observation/endObservation" && this.obs_report_section_status == 0) {
        //   this.alertService.showAlert("Please complete observation report section");
        // } 
        else if (secName == "emidata" || secName == "emiverify") {
            this.router.navigate(['/tnvntabs/page-route/' + secName, this.school_id]);
        }
        else {
            this.router.navigate(['/tnvntabs/page-route/' + secName]);
        }
        // this.router.navigate(['/tabs/rc-grant-form'], { queryParams: { 'AppID': this.Applicationid, 'secID': this.keyid, 'secName': this.secname, 'schoolName': this.schoolname, 'district': this.district, 'appType': this.applicationType, 'secindex': i, 'secStatus': this.secstatus, 'langStat': this.langstatus }, skipLocationChange: false });
    }
    obsfinalSubmit() {
        this.obs_submit_btn = true;
        this.previousData = JSON.parse(localStorage.getItem("finaldata"));
        if (this.previousData != null) {
            this.selectedChoice = 'No';
        }
        else {
            this.selectedChoice = 'Yes';
        }
        // this.ionicStore.getOffStorage().then((response) => {
        //   if (response) {
        //     this.masterApiResponse = response;
        //     if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
        //       this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
        //     }
        //   }
        //   this.ionicStore.getStoreData().then((response) => {
        //     this.storeDetail = response;
        //     if (this.storeDetail == null || this.storeDetail == undefined) {
        //       this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
        //     }
        //     this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass
        //       .class_id;
        //     this.selectedSection = this.storeDetail.pages.pageData[5].pageDetails.section;
        //     if (this.previousData == undefined || this.previousData == null) {
        //       this.warn();
        //     } else {
        //       this.obsanotherWarnInfo();
        //     }
        //   })
        // });
    }
    presentModal(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            this.presentValue = listedValue;
            this.divisionType = type;
            switch (this.divisionType) {
                case "district": {
                    this.getDistrictList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                case "edu_district": {
                    this.getEducationalDistrictList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                case "block": {
                    this.getBlocksList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                case "zone": {
                    this.getZoneList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                default: {
                    this.getCountData(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
            }
        });
    }
    emisValidation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedChoice = 'Yes';
            this.goToTeacherSelection();
        });
    }
    observeClass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let checkLstStep = [];
            this.routingList.filter(x => {
                if (x.section_name == "hodinspection" || x.section_name == "emidata" || x.section_name == "kgbv-nsbav-inspection") {
                    checkLstStep.push(x.section_status);
                }
            });
            if (!checkLstStep.includes(0)) {
                this.selectedChoice = 'No';
                this.goToTeacherSelection();
            }
            else {
                this._alertService.showAlert("Please fill school inspection and EMIS validation section");
            }
        });
    }
    getDistrictList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            this.schoolDetails.districts.forEach((data) => {
                if (data.district_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.id,
                        item: data.district_name,
                    });
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.dist_id = response.data.id;
                    this.correctedDistrict = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getEducationalDistrictList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const districtDetail = {
                district_id: this.schoolDetails.dist_id,
            };
            let temp_eduDistrictList = this.masterApiResponse.obs_info.edu_dist.filter((data) => data.district_id == this.schoolDetails.dist_id);
            temp_eduDistrictList.forEach((data) => {
                if (data.edn_dist_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.id,
                        item: data.edn_dist_name,
                    });
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.edu_dist_id = response.data.id;
                    this.correctedEduDistrict = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getBlocksList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const blockDetail = {
                edu_dist_id: this.schoolDetails.edu_dist_id,
            };
            let temp_blockList = this.masterApiResponse.obs_info.blocks.filter((data) => data.edu_dist_id == this.schoolDetails.edu_dist_id);
            temp_blockList.forEach((data) => {
                if (data.block_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.id,
                        item: data.block_name,
                    });
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.block_id = response.data.id;
                    this.correctedBlock = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getZoneList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const zoneDetail = {
                block_id: this.schoolDetails.block_id,
            };
            let temp_ZoneList = [];
            this.masterApiResponse.obs_info.nodals.forEach((data) => {
                if (data.edu_dist_id == this.schoolDetails.edu_dist_id &&
                    data.district_id == this.schoolDetails.dist_id &&
                    data.block_id == this.schoolDetails.block_id) {
                    temp_ZoneList.push(data);
                }
            });
            temp_ZoneList.forEach((data, index) => {
                if (data.nodal_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.hss_school_id,
                        item: data.hss_school_name,
                    });
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.school_id = response.data.id;
                    this.correctedZone = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getCountData(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    switch (this.divisionType) {
                        case "teacher_count": {
                            this.correctedTotalTeachers = response.data;
                            break;
                        }
                        case "student_count": {
                            this.correctedTotalStudents = response.data;
                            break;
                        }
                        case "count": {
                            if (selectedGender == "girls") {
                                this.correctedClass[selectedIndex].girls = response.data.toString();
                                this.correctedClass[selectedIndex].showCorrected_Girls = true;
                                this.correctedClass[selectedIndex].listetClassGirls = false;
                            }
                            else {
                                this.correctedClass[selectedIndex].boys = response.data.toString();
                                this.correctedClass[selectedIndex].showCorrected_Boys = true;
                                this.correctedClass[selectedIndex].listetClassBoys = false;
                            }
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
            });
            return yield modal.present();
        });
    }
    addCorrectedVariable() {
        this.correctedClass.forEach((data, index) => {
            data["listetClassBoys"] = false;
            data["listetClassGirls"] = false;
            data["showCorrected_Boys"] = false;
            data["showCorrected_Girls"] = false;
            data["checked"] = false;
        });
    }
    isAllClassChecked(currentValue, index, array) {
        return ((currentValue.listetClassGirls == true ||
            currentValue.showCorrected_Girls == true) &&
            (currentValue.listetClassBoys == true ||
                currentValue.showCorrected_Boys == true));
    }
    goToTeacherSelection() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            localStorage.removeItem("routingList");
            localStorage.setItem("selectedSection", this.storeDetail.pages.pageData[5].pageDetails.section);
            this.storedFinalData = yield this.ionicStore.getFinalData();
            console.log(this.storedFinalData, "goto menu items");
            let level = localStorage.getItem("selectedlevel");
            let createdby_role_id = localStorage.getItem("createdby_role");
            const usertype = localStorage.getItem("usertype");
            const veracity_type = localStorage.getItem("veracity_type");
            let observation_id = localStorage.getItem("observation_id");
            const { school_id, school_name, udise_code } = this.storeDetail.pages.pageData[0].pageDetails;
            let emiverfiyInfo;
            if (level == '1' || veracity_type == 'inspection') {
                if (localStorage.getItem("veracity_type") == 'inspection') {
                    level = '5';
                }
                if (this.storeDetail.pages.pageData[1].pageFlow != 'observation') {
                    emiverfiyInfo = this.storeDetail.pages.pageData[2].pageDetails;
                }
                else {
                    let school_info = {};
                    school_info.created_by = localStorage.getItem("username");
                    school_info.veracity_type = localStorage.getItem("veracity_type");
                    school_info.district_id = this.masterApiResponse.basic_info.dist_id;
                    school_info.district_name = this.masterApiResponse.basic_info.district_name;
                    school_info.block_id = this.masterApiResponse.basic_info.block_id;
                    school_info.block_name = this.masterApiResponse.basic_info.block_name;
                    school_info.edu_dist_id = this.masterApiResponse.basic_info.edu_dist_id;
                    school_info.edu_dist_name = this.masterApiResponse.basic_info.edu_dist_name;
                    school_info.nodal_id = this.masterApiResponse.basic_info.nodal_id;
                    school_info.nodal_name = this.masterApiResponse.basic_info.nodal_name;
                    if (this.storeDetail.pages.pageData[2]) {
                        school_info.teacherSanctioned = this.storeDetail.pages.pageData[2].pageDetails.teacherSanctioned;
                        school_info.teachersAvailable = this.storeDetail.pages.pageData[2].pageDetails.teachersAvailable;
                        school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationOtherSchool;
                        school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationSameSchool;
                        school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[2].pageDetails.teachersOnLongLeave;
                        school_info.teachers_alloted = this.storeDetail.pages.pageData[2].pageDetails.teachers_alloted;
                        school_info.total_students = this.storeDetail.pages.pageData[2].pageDetails.total_students;
                    }
                    emiverfiyInfo = school_info;
                }
            }
            else {
                let school_info = {};
                school_info.created_by = localStorage.getItem("username");
                school_info.veracity_type = localStorage.getItem("veracity_type");
                school_info.district_id = this.masterApiResponse.basic_info.dist_id;
                school_info.district_name = this.masterApiResponse.basic_info.district_name;
                school_info.block_id = this.masterApiResponse.basic_info.block_id;
                school_info.block_name = this.masterApiResponse.basic_info.block_name;
                school_info.edu_dist_id = this.masterApiResponse.basic_info.edu_dist_id;
                school_info.edu_dist_name = this.masterApiResponse.basic_info.edu_dist_name;
                school_info.nodal_id = this.masterApiResponse.basic_info.nodal_id;
                school_info.nodal_name = this.masterApiResponse.basic_info.nodal_name;
                if (this.storeDetail.pages.pageData[2]) {
                    school_info.teacherSanctioned = this.storeDetail.pages.pageData[2].pageDetails.teacherSanctioned;
                    school_info.teachersAvailable = this.storeDetail.pages.pageData[2].pageDetails.teachersAvailable;
                    school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationOtherSchool;
                    school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationSameSchool;
                    school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[2].pageDetails.teachersOnLongLeave;
                    school_info.teachers_alloted = this.storeDetail.pages.pageData[2].pageDetails.teachers_alloted;
                    school_info.total_students = this.storeDetail.pages.pageData[2].pageDetails.total_students;
                }
                emiverfiyInfo = school_info;
            }
            const schoolInfo = {
                school_id: school_id,
                school_name: school_name,
                observation_id: observation_id,
                level: level,
                subject_id: this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id,
                subject_name: this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject,
                createdby_role: createdby_role_id,
                latitude: localStorage.getItem("latitude"),
                longitude: localStorage.getItem("longitude"),
                udise_code: localStorage.getItem("udise_code") //udise_code
            };
            let mediumIds;
            let classInfo;
            if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass) {
                mediumIds = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map((el) => {
                    return el.medium_id;
                });
                classInfo = {
                    class: this.storeDetail.pages.pageData[5].pageDetails.selectedClass
                        .class_id,
                    medium: mediumIds.toString(),
                    class_type: this.storeDetail.pages.pageData[5].pageDetails.classType,
                    section: this.storeDetail.pages.pageData[5].pageDetails.section,
                    teacher_name: this.storeDetail.pages.pageData[5].pageDetails
                        .teacherDetails.teacher_name,
                    // teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid,
                    teacher_emisid: this.masterApiResponse.basic_info.teacher_emisid,
                };
            }
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
                if (this.storeDetail.pages.pageData[5].pageDetails.teacherDetails) {
                    teacher = {
                        // teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid,
                        teacher_emisid: this.masterApiResponse.basic_info.teacher_emisid,
                        teacher_name: this.storeDetail.pages.pageData[5].pageDetails
                            .teacherDetails.teacher_name,
                        reason: this.storeDetail.pages.pageData[5].pageDetails.reasonDetails,
                        description: "Reason for not observing teacher",
                    };
                }
            }
            const not_verfied = {
                schools: schoolReasons,
                class: teacher == undefined ? {} : teacher,
                student: studentReasons,
            };
            let learning_outcome_data;
            let student_assessment_data;
            if ((_a = this.storeDetail.pages.pageData[8]) === null || _a === void 0 ? void 0 : _a.correctedDetails) {
                if (this.storeDetail.pages.pageData[10]) {
                    student_assessment_data = this.storeDetail.pages.pageData[10].pageDetails;
                }
                learning_outcome_data = {
                    subject: this.storeDetail.pages.pageData[8].pageDetails.subject,
                    term: this.storeDetail.pages.pageData[8].pageDetails.term,
                    unit: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo
                        .chapter_no,
                    learning_outcome: this.storeDetail.pages.pageData[8].correctedDetails
                        .unitInfo.learning_outcome,
                    question_data: student_assessment_data,
                };
            }
            else {
                learning_outcome_data = {};
            }
            let observation_reportconst = {};
            if (this.storeDetail.pages.pageData[11]) {
                observation_reportconst = {
                    strength: this.storeDetail.pages.pageData[11].pageDetails.strength,
                    improvement: this.storeDetail.pages.pageData[11].pageDetails.improvement,
                };
            }
            let observation_data;
            let emis_data;
            let gra_data;
            let omr_data;
            if (this.storeDetail.pages.pageData[2]) {
                emis_data = {
                    emis_classdata: this.storeDetail.pages.pageData[2].correctedClass,
                    emis_correctedData: this.storeDetail.pages.pageData[2].correctedDetails,
                };
            }
            if (this.storeDetail.pages.pageData[18]) {
                omr_data = this.storeDetail.pages.pageData[18].omrData;
            }
            if (this.storeDetail.pages.pageData[20]) {
                gra_data = this.storeDetail.pages.pageData[20].correctedDetails.graStudents;
            }
            if (this.storeDetail.pages.pageData[10]) {
                student_assessment_data = this.storeDetail.pages.pageData[10].pageDetails;
            }
            let customizationdata = [];
            if (this.storeDetail.pages.pageData[7]) {
                customizationdata = [...this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList];
                if (this.storeDetail.pages.pageData[14]) {
                    customizationdata = [...customizationdata, ...this.storeDetail.pages.pageData[14].correctedDetails.sec_data];
                }
                if (this.storeDetail.pages.pageData[16]) {
                    customizationdata = [...customizationdata, ...this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList];
                }
                if (this.storeDetail.pages.pageData[15]) {
                    customizationdata = [...customizationdata, ...this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList];
                }
                observation_data = {
                    observation_dataInfo: customizationdata,
                };
            }
            if (Number(this.userSessionService.teacher_type()) == 103 && Number(localStorage.getItem("school_management")) == 2) {
                basicInfoObj['workflow'] = 2;
            }
            else {
                basicInfoObj['workflow'] = localStorage.getItem("selectedWorkflow");
            }
            let finalData = {
                basic_info: basicInfoObj,
                not_verfied: not_verfied,
                attendance_data: (_b = this.storeDetail.pages.pageData[6]) === null || _b === void 0 ? void 0 : _b.correctedDetails,
                learning_outcome_data: learning_outcome_data,
                student_assessment_data: student_assessment_data,
                observation_data: observation_data,
                omr_data: omr_data,
                gra_data: gra_data,
                scores_section: JSON.parse(localStorage.getItem('scoreSection')),
                emis_data: emis_data,
                observation_report: observation_reportconst,
                final_remarks: localStorage.getItem("remarks"),
                final_feedbacks: localStorage.getItem("finalobserverfeedbacks")
            };
            debugger;
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
                    this.storedFinalData = [finalData];
                }
                this.ionicStore.setFinalData(this.storedFinalData);
                this.loading.present();
                let uniqueId = localStorage.getItem("uniqueId");
                let apiObj = {
                    json: JSON.stringify(this.storedFinalData),
                    unique_id: uniqueId + this.observeList
                };
                this._apiService.postfinalinfo(apiObj).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        if (data.status == 200 && data.dataStatus == true) {
                            localStorage.setItem("saveApiCall", '0');
                            let logDataNew = {
                                username: localStorage.getItem("username"),
                                udise_code: localStorage.getItem("udise_code"),
                                observation_id: localStorage.getItem("observation_id"),
                                form_name: "Save Observation",
                                action_name: "Final observation submission",
                                data: "Observation Saved Successfully",
                                completion_percentage: this.progressValue
                            };
                            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                            }, (error) => {
                                this._alertService.showAlert("SOMETHING WENT WRONG");
                            });
                            if (this.selectedChoice == 'Yes') {
                                let tempdata = this.storeDetail.pages.pageData;
                                let removeitem = [];
                                let arrayindex = 0;
                                this.storeDetail.pages.currentProgress = this.progressValue;
                                if (level == "1") {
                                    if (this.storeDetail.pages.pageData[1].pageFlow == 'observation') {
                                        arrayindex = 2;
                                    }
                                    else {
                                        arrayindex = 2;
                                    }
                                }
                                else {
                                    arrayindex = 2;
                                }
                                for (var i = arrayindex; i < this.storeDetail.pages.pageData.length; i++) {
                                    removeitem.push(i);
                                }
                                for (var j = removeitem.length - 1; j >= 0; j--) {
                                    this.storeDetail.pages.pageData.splice(removeitem[j], 1);
                                }
                                ;
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this.ionicStore.setOffStorage(this.masterApiResponse);
                                localStorage.setItem("finaldata", JSON.stringify(this.masterApiResponse));
                                this.ionicStore.removeFinalData();
                                localStorage.setItem("observation_id", '');
                                localStorage.removeItem("chapterId");
                                localStorage.removeItem("scannedData");
                                localStorage.removeItem("routingList");
                                localStorage.removeItem('selectedClassSection');
                                localStorage.removeItem("classroom_section_status");
                                localStorage.removeItem("metho_section_status");
                                localStorage.removeItem("stu_attend_section_status");
                                localStorage.removeItem("assessment_section_status");
                                // localStorage.removeItem("omr_rand_stu_section_status");
                                // localStorage.removeItem("omr_scanner_section_status");
                                // localStorage.removeItem("omr_student_section_status");
                                localStorage.removeItem("notebook_section_status");
                                localStorage.removeItem("pre_obs_qns_section_status");
                                localStorage.removeItem("obs_report_section_status");
                                // localStorage.removeItem("hod_inspect_section_status");
                                // localStorage.removeItem("emidata_section_status");
                                // localStorage.removeItem("emiverify_section_status");
                                localStorage.setItem("hod_inspect_section_status", this.hod_inspect_section_status);
                                localStorage.setItem("emidata_section_status", this.emidata_section_status);
                                localStorage.setItem("kgbv_section_status", this.kgbv_section_status);
                                this.loading.dismiss();
                                this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
                                if (this.storeDetail.pages.pageData.length <= 2) {
                                    this._router.navigate([
                                        "/tnvntabs/page-route/classroom",
                                    ]);
                                }
                            }
                            else {
                                this.loading.dismiss();
                                localStorage.setItem("storedDetails", '');
                                this.ionicStore.removeStoreData();
                                this.ionicStore.removeFinalData();
                                localStorage.removeItem("chapterId");
                                localStorage.setItem("observation_id", '');
                                localStorage.removeItem("finaldata");
                                localStorage.removeItem("scannedData");
                                localStorage.removeItem("routingList");
                                localStorage.removeItem('selectedClassSection');
                                localStorage.removeItem("classroom_section_status");
                                localStorage.removeItem("metho_section_status");
                                localStorage.removeItem("stu_attend_section_status");
                                localStorage.removeItem("assessment_section_status");
                                // localStorage.removeItem("omr_rand_stu_section_status");
                                // localStorage.removeItem("omr_scanner_section_status");
                                // localStorage.removeItem("omr_student_section_status");
                                localStorage.removeItem("notebook_section_status");
                                localStorage.removeItem("pre_obs_qns_section_status");
                                localStorage.removeItem("obs_report_section_status");
                                localStorage.removeItem("hod_inspect_section_status");
                                localStorage.removeItem("emidata_section_status");
                                localStorage.removeItem("kgbv_section_status");
                                this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
                                // localStorage.removeItem("emiverify_section_status");
                                this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                            }
                        }
                        else {
                            throw data.msg;
                        }
                    }
                    catch (err) {
                        this._alertService.showAlert(err);
                    }
                }), (error) => {
                    this.ionicStore.removeFinalData();
                    localStorage.removeItem("finaldata");
                    localStorage.setItem("observation_id", '');
                    localStorage.removeItem("chapterId");
                    localStorage.removeItem("scannedData");
                    localStorage.removeItem("routingList");
                    localStorage.removeItem('selectedClassSection');
                    localStorage.removeItem("classroom_section_status");
                    localStorage.removeItem("metho_section_status");
                    localStorage.removeItem("stu_attend_section_status");
                    localStorage.removeItem("assessment_section_status");
                    // localStorage.removeItem("omr_rand_stu_section_status");
                    // localStorage.removeItem("omr_scanner_section_status");
                    // localStorage.removeItem("omr_student_section_status");
                    localStorage.removeItem("notebook_section_status");
                    localStorage.removeItem("pre_obs_qns_section_status");
                    localStorage.removeItem("obs_report_section_status");
                    localStorage.removeItem("hod_inspect_section_status");
                    localStorage.removeItem("emidata_section_status");
                    localStorage.removeItem("kgbv_section_status");
                    // localStorage.removeItem("emiverify_section_status");
                    this.loading.dismiss();
                    this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
                    this._router.navigate(["/tnvntabs/page-route/dashboardc"]);
                    this._alertService.showAlert(error);
                });
            }
            else {
                this.networkInfo = 'No internet connection';
                this.loading.dismiss();
                this._alertService.showAlert(this.networkInfo, 'Please check your mobile data or wifi connection.');
            }
        });
    }
    checkActualData(division, data) {
        this.divisionType = division;
        switch (this.divisionType) {
            case "district": {
                this.schoolDetails.dist_id = data;
                break;
            }
            case "edu_district": {
                this.schoolDetails.edu_dist_id = data;
                break;
            }
            case "block": {
                this.schoolDetails.block_id = data;
                break;
            }
            case "zone": {
                this.schoolDetails.school_id = data;
                break;
            }
            case "teacher_count": {
                this.correctedTotalTeachers = data;
                break;
            }
            case "student_count": {
                this.correctedTotalStudents = data;
                break;
            }
            default: {
                break;
            }
        }
    }
    openDiscussModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_11__.ObservationfinalremarkComponent,
                cssClass: "",
                componentProps: {},
                showBackdrop: false,
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((dataReturned) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                // this.hideKeyboard = false;
                // let level = localStorage.getItem("selectedlevel")
                yield localStorage.setItem("finalobserverfeedbacks", dataReturned.data);
                localStorage.removeItem("routingList");
                this.previousData = JSON.parse(localStorage.getItem("finaldata"));
                if (this.previousData != null) {
                    this.selectedChoice = 'No';
                }
                this.ionicStore.getOffStorage().then((response) => {
                    if (response) {
                        this.masterApiResponse = response;
                        if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                            this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                        }
                    }
                    this.ionicStore.getStoreData().then((response) => {
                        this.storeDetail = response;
                        if (this.storeDetail == null || this.storeDetail == undefined) {
                            this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                        }
                        this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass
                            .class_id;
                        this.selectedSection = this.storeDetail.pages.pageData[5].pageDetails.section;
                        if (this.previousData == undefined || this.previousData == null) {
                            this.warn();
                        }
                        else {
                            this.obsanotherWarnInfo();
                        }
                    });
                });
            }));
            this._apiService.name.subscribe((response) => {
                if (response == "showText") {
                    let body = document.getElementsByTagName("ion-modal")[0];
                    body.classList.add("new-info");
                }
            });
            return yield modal.present();
        });
    }
    showErrorLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_12__.ApiErrorLogComponent,
                componentProps: {
                    selectedlevel: this.selectedlevel,
                    questionList: [],
                },
                cssClass: "my-custom-modal-apierror",
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    saveDisable() {
        if ((this.schlMngId == 32 || this.schlMngId == 36) && (this.metho_section_status == 1 && this.notebook_section_status == 1 && this.pre_obs_qns_section_status == 1 && this.obs_report_section_status == 1 && this.hod_inspect_section_status == 1 && this.emidata_section_status == 1 && this.kgbv_section_status == 1)) {
            return false;
        }
        else if ((this.schlMngId != 32 || this.schlMngId != 36) && (this.metho_section_status == 1 && this.notebook_section_status == 1 && this.pre_obs_qns_section_status == 1 && this.obs_report_section_status == 1 && this.hod_inspect_section_status == 1 && this.emidata_section_status == 1 && this.kgbv_section_status == 0)) {
            return false;
        }
        else {
            return true;
        }
    }
};
IndexPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__.RegulatoryService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__.PostService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService },
    { type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService }
];
IndexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IndexPage);



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

/***/ 63515:
/*!**************************************************!*\
  !*** ./src/app/pages/tnvn/index/index.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.ion-text-wrap {\n  margin-left: 15px;\n}\n\n.bgcolor {\n  background-color: #91a0f3;\n}\n\n.ticktrue {\n  color: green;\n}\n\n.tickfalse {\n  color: red;\n}\n\n.secname {\n  font-size: 18px;\n}\n\n.btnbg {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n\n.btnbgreject {\n  background-color: red;\n  color: white;\n}\n\n.language {\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  color: var(--ion-color-primary);\n  margin: 8px;\n  padding: 10px;\n  box-shadow: 5px 7px 5px #c6c5c5;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  margin: 5px;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.custom-popup {\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999999;\n  padding: 420px;\n  top: -240px;\n  left: -400px;\n}\n\n.custom-popup .bg-white {\n  width: 320px;\n  border-radius: 10px;\n}\n\n.custom-popup .bg-white .cls-btn {\n  top: -10px;\n  right: -10px;\n}\n\n.optbtn {\n  text-align: end;\n}\n\n.note {\n  color: red;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.d-flex {\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n\n.pdf {\n  font-family: \"Times New Roman\", Times, serif;\n  color: grey;\n}\n\n::ng-deep.alertButton {\n  background: #8B67B3 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUdFO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FBQUo7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtBQUZKOztBQUtFO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNRTtFQUNFLGFBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQUlJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRk47O0FBR007RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQURSOztBQU9FO0VBQ0UsZUFBQTtBQUpKOztBQU9FO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO0FBSko7O0FBT0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBTUU7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUFISiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvbi10ZXh0LXdyYXB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5iZ2NvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkxYTBmMztcclxuICB9XHJcblxyXG4gIC50aWNrdHJ1ZXtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gIC50aWNrZmFsc2V7XHJcbiAgICBjb2xvcjogcmVkXHJcbiAgfVxyXG5cclxuICAuc2VjbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmJ0bmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuYnRuYmdyZWplY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubGFuZ3VhZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA3cHggNXB4ICNjNmM1YzVcclxuICB9XHJcblxyXG4gIC50ZXh0YWxpbmd7XHJcbiAgICB0ZXh0LWFsaWduOmVuZDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXJzdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcG9wdXB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICBwYWRkaW5nOiA0MjBweDtcclxuICAgIHRvcDogLTI0MHB4O1xyXG4gICAgbGVmdDogLTQwMHB4O1xyXG4gICAgLmJnLXdoaXRle1xyXG4gICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC5jbHMtYnRue1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAub3B0YnRue1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuXHJcbiAgLm5vdGV7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICB9XHJcblxyXG4gIC5kLWZsZXh7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAucGRme1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAuYWxlcnRCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzhCNjdCMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 19699:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/index/index.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"margin-left: 20px;\">Palli Paarvai Sections</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-icon class=\"back-icon\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-label style=\"color: white;margin-right: 15px;font-size: 19px;\" slot=\"end\" *ngIf=\"finaldata == null\">Obs-1</ion-label>\r\n    <ion-label style=\"color: white;margin-right: 15px;font-size: 19px;\" slot=\"end\" *ngIf=\"finaldata != null\">Obs-2</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"text-align: right;\">\r\n    <button (click)=\"showErrorLog()\" style=\"background: #fff;\">\r\n      <ion-icon  name=\"alert-circle-outline\" style=\"float:right;font-size: 30px;\" ></ion-icon>\r\n    </button>\r\n  </div>\r\n  <ion-row class=\"borderstyle\">\r\n    <ion-col size=\"12\" class=\"padding\">\r\n      <ion-row>\r\n        <!-- <ion-col size=\"6\">\r\n          <ion-label class=\"headlabel\">Palli Paarvai Sections</ion-label>\r\n        </ion-col> -->\r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n          <ion-label class=\"headlabel\" style=\"font-size: 19px;\">You are Observing: Class {{class_id}} {{class_with_sec}}</ion-label>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\">\r\n          <div class=\"textaling\">\r\n            <ion-label class=\"headlabel language\" (click)=\"changeEnglish()\">E</ion-label>\r\n            <ion-label class=\"headlabel language\" (click)=\"changeTamil()\">த</ion-label>\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div *ngFor=\"let key of routingList;let i =index\">\r\n    <div *ngIf=\"languageType == 'en'\">\r\n      <ion-card class=\"bgcolor\"\r\n        (click)=\"routeToForm(key.section_name,i,key.section_status,1)\">\r\n        <ion-item style=\"font-size: 18px;\">\r\n          {{key.name}}\r\n          <!-- {{key.section_name == 'methodology' ? this.teachingmethodology : \"\"}}\r\n          {{key.section_name == 'attendance/student-attendance' ? this.studentAttendance : \"\"}}\r\n          {{key.section_name == 'assessment' ? this.studentAssessment: \"\"}}\r\n          {{key.section_name == 'notebook' ? this.notebookVerification : \"\"}}\r\n          {{key.section_name == 'pre-observation-question' ? this.postObservationQuestions : \"\"}}\r\n          {{key.section_name == 'observation' ? this.obsReport : \"\"}}\r\n          {{key.section_name == 'hodinspection' ? this.schoolInspection : \"\"}}\r\n          {{key.section_name == 'emidata' ? this.emisdataValReport : \"\"}} -->\r\n          <ion-icon slot=\"end\" class=\"tickfalse\" name=\"close-outline\" *ngIf=\"key.section_status == 0\"></ion-icon>\r\n          <ion-icon slot=\"end\" class=\"ticktrue\" name=\"checkmark-outline\" *ngIf=\"key.section_status == 1\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngIf=\"languageType == 'ta'\">\r\n      <ion-card class=\"bgcolor\"\r\n        (click)=\"routeToForm(key.section_name,i,key.section_status,1)\">\r\n        <ion-item style=\"font-size: 18px;\">\r\n          {{key.Tamil_name || key.tamil_name}}\r\n          <!-- {{key.section_name == 'methodology' ? this.teachingmethodology : \"\"}}\r\n          {{key.section_name == 'attendance/student-attendance' ? this.studentAttendance : \"\"}}\r\n          {{key.section_name == 'assessment' ? this.studentAssessment: \"\"}}\r\n          {{key.section_name == 'notebook' ? this.notebookVerification : \"\"}}\r\n          {{key.section_name == 'pre-observation-question' ? this.postObservationQuestions : \"\"}}\r\n          {{key.section_name == 'observation' ? this.obsReport : \"\"}}\r\n          {{key.section_name == 'hodinspection' ? this.schoolInspection : \"\"}}\r\n          {{key.section_name == 'emidata' ? this.emisdataValReport : \"\"}} -->\r\n          <ion-icon slot=\"end\" class=\"tickfalse\" name=\"close-outline\" *ngIf=\"key.section_status == 0\"></ion-icon>\r\n          <ion-icon slot=\"end\" class=\"ticktrue\" name=\"checkmark-outline\" *ngIf=\"key.section_status == 1\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-footer style=\"height: 50px; background-color: #2d9cdb;\" [hidden]=\"obs_submit_btn\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button *ngIf=\"finaldata == null\" class=\"btn-next done\" [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0\" (click)=\"obsfinalSubmit()\">\r\n        <ion-label [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-22': this.languageType == 'ta'\r\n        }\"\r\n          \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button *ngIf=\"finaldata != null\" class=\"btn-next done\" [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0 || emidata_section_status == 0\" (click)=\"obsfinalSubmit()\">\r\n        <ion-label [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-22': this.languageType == 'ta'\r\n        }\"\r\n          \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>       \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"selectedChoice == 'Yes' || selectedChoice == 'No'\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button *ngIf=\"selectedChoice == 'Yes'\" class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label         \r\n          >{{saveAndContinue}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button *ngIf=\"selectedChoice == 'No'\" class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-22': this.languageType == 'ta'\r\n        }\"\r\n          \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>      \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer> -->\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"finaldata == null\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0\" class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label style=\"font-size: 20px !important;\"         \r\n          >{{selectedChoice == 'Yes' ? saveAndContinue : submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>     \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"finaldata != null && user_type != 8\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button [disabled]=\"saveDisable()\"  class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label style=\"font-size: 20px !important;\"         \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>     \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"finaldata != null && user_type == 8\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0\"  class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label style=\"font-size: 20px !important;\"         \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>     \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_index_index_module_ts-es2015.js.map