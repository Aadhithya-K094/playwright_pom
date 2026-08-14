(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation_observation_module_ts"],{

/***/ 38932:
/*!***************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpandableComponent": function() { return /* binding */ ExpandableComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_expandable_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./expandable.component.html */ 93032);
/* harmony import */ var _expandable_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expandable.component.scss */ 63680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let ExpandableComponent = class ExpandableComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
ExpandableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 }
];
ExpandableComponent.propDecorators = {
    expandWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ["expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["expanded",] }],
    expandHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ["expandHeight",] }]
};
ExpandableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-expandable',
        template: _raw_loader_expandable_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_expandable_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExpandableComponent);



/***/ }),

/***/ 56885:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-discussion/observation-discussion.component.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationDiscussionComponent": function() { return /* binding */ ObservationDiscussionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observation_discussion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observation-discussion.component.html */ 72496);
/* harmony import */ var _observation_discussion_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation-discussion.component.scss */ 98726);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);







let ObservationDiscussionComponent = class ObservationDiscussionComponent {
    constructor(_router, _apiService, ionicStore) {
        this._router = _router;
        this._apiService = _apiService;
        this.ionicStore = ionicStore;
        this.misMatchAttendance = [];
        this.displayCounter = (selectedAnswerDetail) => {
        };
        this.createPage = () => {
            let apiData = {
                pageNo: '11',
                pageName: 'observationDiscussion_DIKSHA',
                apiResponse: {
                    records: {}
                },
            };
            this.storeDetail.pages.pageData[10] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
        };
        this.goToBackPage = () => {
            this.misMatchAttendance = this.storeDetail.pages.pageData[5].correctedDetails;
            if (this.misMatchAttendance.length) {
                this._router.navigate(['/tnvntabs/page-route/attendance/student-data']);
            }
            else {
                this._router.navigate(['/tnvntabs/page-route/observation']);
            }
        };
    }
    ngOnInit() {
        this.ionicStore.getStoreData()
            .then((response) => {
            this.storeDetail = response;
            if (this.storeDetail.pages.pageData[10] == undefined) {
                this.createPage();
            }
            else {
                this.sectionData = this.storeDetail.pages.pageData[5].correctedDetails.customizeSectionList.find((data) => data.sec_id == "6");
            }
        });
    }
};
ObservationDiscussionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService }
];
ObservationDiscussionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-observation-discussion',
        template: _raw_loader_observation_discussion_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observation_discussion_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationDiscussionComponent);



/***/ }),

/***/ 36013:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-end/observation-end.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationEndComponent": function() { return /* binding */ ObservationEndComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observation_end_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observation-end.component.html */ 17110);
/* harmony import */ var _observation_end_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation-end.component.scss */ 46002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/network.service */ 81508);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);












let ObservationEndComponent = class ObservationEndComponent {
    constructor(ionicStore, _apiService, _alertService, alertController, loading, _router, networkService, _translate) {
        this.ionicStore = ionicStore;
        this._apiService = _apiService;
        this._alertService = _alertService;
        this.alertController = alertController;
        this.loading = loading;
        this._router = _router;
        this.networkService = networkService;
        this._translate = _translate;
        this.classList = [];
        this.storedFinalData = [];
        this.check = true;
        this.actualValueList = [];
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
        this.createPage = () => {
            let apiData = {
                pageNo: '14',
                pageName: 'Observation_complete_percentage',
                apiResponse: {
                    records: {}
                },
            };
            this.storeDetail.pages.pageData[13] = apiData;
            this.storeDetail.pages.currentProgress = this.progressValue;
            this.ionicStore.setStoreData(this.storeDetail);
        };
        this.finalSubmit = () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.removeItem("classInfo");
            localStorage.removeItem("schoolInfo");
            localStorage.removeItem("teacherInfo");
            localStorage.removeItem("routingList");
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
            // localStorage.removeItem("emiverify_section_status");      
            this.ionicStore.removeOffStorage();
            this._router.navigate(["/tnvntabs/page-route/dashboardc"]);
        });
    }
    ngOnInit() {
        this.progressValue = 100;
        this.appLanguage();
        this.teacherDetail = JSON.parse(localStorage.getItem('teacherInfo'));
        this.schoolDetail = JSON.parse(localStorage.getItem('schoolInfo'));
        this.classDetail = JSON.parse(localStorage.getItem('classInfo'));
        this.selectedSection = localStorage.getItem("selectedSection");
        this.ionicStore.getOffStorage().then((response) => {
            if (response) {
                this.masterApiResponse = response;
            }
            this.ionicStore.getStoreData()
                .then((response) => {
                this.storeDetail = response;
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                // if(!this.storeDetail) {
                //   this.createPage();
                // }                                
                // if (this.storeDetail.pages.pageData[13] == undefined || this.storeDetail.pages.pageData[13] == null) {
                // }
            });
        });
    }
    showAlert(alertInfo = "", message = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "",
                cssClass: "my-custom-class",
                message: this.DoneNote,
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
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get('Observation').subscribe((res) => {
            this.Observation = res;
        });
        this._translate.get('goToHomepage').subscribe((res) => {
            this.goToHomepage = res;
        });
        this._translate.get('DoneNote').subscribe((res) => {
            this.DoneNote = res;
        });
        this._translate.get('successfullyCompleted').subscribe((res) => {
            this.successfullyCompleted = res;
        });
        this._translate.get('congratulations').subscribe((res) => {
            this.congratulations = res;
        });
        this._translate.get('class').subscribe((res) => {
            this.class = res;
        });
        this._translate.get('done').subscribe((res) => {
            this.done = res;
        });
    }
};
ObservationEndComponent.ctorParameters = () => [
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService }
];
ObservationEndComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-observation-end',
        template: _raw_loader_observation_end_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observation_end_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationEndComponent);



/***/ }),

/***/ 61631:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-teaching/observation-teaching.component.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationTeachingComponent": function() { return /* binding */ ObservationTeachingComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observation_teaching_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observation-teaching.component.html */ 5806);
/* harmony import */ var _observation_teaching_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation-teaching.component.scss */ 4085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);









let ObservationTeachingComponent = class ObservationTeachingComponent {
    constructor(_apiService, _router, _alertService, ionicStore, _translate) {
        this._apiService = _apiService;
        this._router = _router;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.standardList = [];
        this.selectedClass = [];
    }
    ngOnInit() {
        this.appLanguage();
        this.ionicStore.getStoreData().then((response) => {
            this.storeDetail = response;
            this.selectedClass = this.storeDetail.pages.pageData[5].correctedDetails;
            if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass.length ==
                1) {
                this.classSelect = this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0].class_id;
            }
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
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("standardInfo").subscribe((res) => {
            this.standardInfo = res;
        });
        this._translate.get("teaching").subscribe((res) => {
            this.teaching = res;
        });
        this._translate.get("classroomObservation").subscribe((res) => {
            this.classroomObservation = res;
        });
        this._translate.get("Observation").subscribe((res) => {
            this.observation = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("selectStandard").subscribe((res) => {
            this.selectStandard = res;
        });
    }
    radioChecked(event) {
        this.selectedStandard = event;
    }
    goToMethodolgyQuestions() {
        if (this.selectedStandard != undefined) {
            this.classData = this.storeDetail.pages.pageData[5].pageDetails;
            let selectClass = this.storeDetail.pages.pageData[5].correctedDetails.filter((data) => data.class_id == this.selectedStandard.class_id);
            let classInfo = {
                mediumInfo: this.classData.mediumInfo,
                subjectInfo: this.classData.subjectInfo,
                classType: this.classData.classType,
                class_id: this.selectedStandard.class_id.toString(),
            };
            localStorage.setItem("classInfo", JSON.stringify(classInfo));
            if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass.length ==
                1) {
                let givenClassId = this.storeDetail.pages.pageData[5].pageDetails
                    .selectedClass[0].class_id;
                let selectedClassId = selectClass[0].class_id;
                if (givenClassId != selectedClassId) {
                    this.storeDetail.pages.pageData.splice(5);
                    this.ionicStore.setStoreData(this.storeDetail);
                }
            }
            this.storeDetail.pages.pageData[5].pageDetails.selectedClass = selectClass;
            this.ionicStore.setStoreData(this.storeDetail);
            let isRegularTeacher = this.storeDetail.pages.pageData[5].correctedDetails
                .regularTeacher;
            if (isRegularTeacher) {
                this._router.navigate(["/tnvntabs/page-route/methodology"]);
            }
            else {
                this._router.navigate(["/tnvntabs/page-route/assessment"]);
            }
        }
        else {
            this._alertService.showAlert(null, this.selectStandard);
        }
    }
};
ObservationTeachingComponent.ctorParameters = () => [
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
ObservationTeachingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-observation-teaching",
        template: _raw_loader_observation_teaching_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observation_teaching_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationTeachingComponent);



/***/ }),

/***/ 73895:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-update/observation-update.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationUpdateComponent": function() { return /* binding */ ObservationUpdateComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observation_update_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observation-update.component.html */ 53190);
/* harmony import */ var _observation_update_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation-update.component.scss */ 31190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_components_observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/observationmodal/observationmodal.component */ 6709);










let ObservationUpdateComponent = class ObservationUpdateComponent {
    constructor(modalController, _apiService, _router, ionicStore, _translate) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._router = _router;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.misMatchAttendance = [];
        this.strength = [];
        this.improvement = [];
        this.currentImprovement = [];
        this.allTeachersList = [];
        this.improvedList = [];
        this.needimproveList = [];
        this.createPage = () => {
            let apiData = {
                pageNo: "13",
                pageName: "ObservationReport_update",
                apiResponse: {
                    records: {},
                },
            };
            this.storeDetail.pages.pageData[12] = apiData;
            this.storeDetail.pages.currentProgress = this.progressValue;
            this.ionicStore.setStoreData(this.storeDetail);
        };
        this.goToBackPage = () => {
            this.misMatchAttendance = this.storeDetail.pages.pageData[6].correctedDetails;
            if (this.misMatchAttendance.length) {
                this._router.navigate(["/tnvntabs/page-route/attendance/student-data"]);
            }
            else {
                this._router.navigate(["/tnvntabs/page-route/observation"]);
            }
        };
    }
    ngOnInit() {
        let teacherInfo = localStorage.getItem('teacherInfo');
        this.teacherDetails = JSON.parse(teacherInfo);
        this.progressValue = Math.round(((13 - 2) / 14) * 100);
        this.appLanguage();
        this.ionicStore.getStoreData().then((response) => {
            this.storeDetail = response;
            this.storeDetail.pages.currentPage = "ObservationReport_update";
            this.ionicStore.setStoreData(this.storeDetail);
            this.teacherDetails = this.storeDetail.pages.pageData[5].pageDetails.teacherDetails;
            if (this.storeDetail.pages.pageData[11]) {
                this.currentImprovement = this.storeDetail.pages.pageData[11].pageDetails.improvement;
                if (this.teacherDetails.improvement) {
                    if (this.teacherDetails.improvement != "null") {
                        this.improvement = this.teacherDetails.improvement.split("|");
                        let currentImprovementData = this.currentImprovement.map((data) => {
                            return data.action_item_description;
                        });
                        this.improvement = this.improvement.filter((i) => i);
                        this.improvement.forEach((previmprovement) => {
                            const found = currentImprovementData.includes(previmprovement);
                            if (found) {
                                this.needimproveList.push(previmprovement);
                            }
                            else {
                                this.improvedList.push(previmprovement);
                            }
                        });
                    }
                }
            }
            this.improvedList = this.improvedList.filter((i) => i);
            if (this.storeDetail.pages.pageData[12] == undefined || this.storeDetail.pages.pageData[12] == null) {
                this.createPage();
            }
            else {
            }
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
        this._translate.get("Observation").subscribe((res) => {
            this.Observation = res;
        });
        this._translate.get("Report").subscribe((res) => {
            this.Report = res;
        });
        this._translate.get("UpdateObservation").subscribe((res) => {
            this.UpdateObservation = res;
        });
        this._translate.get("Congratulate").subscribe((res) => {
            this.Congratulate = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
        });
        this._translate.get("noData").subscribe((res) => {
            this.noData = res;
        });
        this._translate.get("encourage").subscribe((res) => {
            this.encourage = res;
        });
        this._translate.get("workPreviousObservation").subscribe((res) => {
            this.workPreviousObservation = res;
        });
        this._translate.get("submitObservation").subscribe((res) => {
            this.submitObservation = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
    }
    openDiscussModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__.ObservationmodalComponent,
                cssClass: "my-custom-modal-updateObservation",
                componentProps: {
                    teacherDetails: this.teacherDetails,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned.data) {
                    let level = localStorage.getItem("selectedlevel");
                    this._router.navigate(["/tnvntabs/page-route/hodinspection"]);
                }
            });
            this._apiService.name.subscribe((response) => {
                if (response == "showText") {
                    let body = document.getElementsByTagName("ion-modal")[0];
                    body.classList.add("new-info");
                }
            });
            return yield modal.present();
        });
    }
};
ObservationUpdateComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService }
];
ObservationUpdateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-observation-update",
        template: _raw_loader_observation_update_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observation_update_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationUpdateComponent);



/***/ }),

/***/ 53554:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationComponent": function() { return /* binding */ ObservationComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observation.component.html */ 93615);
/* harmony import */ var _observation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observation.component.scss */ 83012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/file-path/ngx */ 33002);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dom-to-image */ 83697);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);

















let ObservationComponent = class ObservationComponent {
    constructor(modalController, alertController, _router, _apiService, loading, ionicStore, _translate, userSessionService, platform, filePath, socialSharing, file) {
        this.modalController = modalController;
        this.alertController = alertController;
        this._router = _router;
        this._apiService = _apiService;
        this.loading = loading;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.userSessionService = userSessionService;
        this.platform = platform;
        this.filePath = filePath;
        this.socialSharing = socialSharing;
        this.file = file;
        this.items = [];
        this.class123 = [];
        this.class45 = [];
        this.class678 = [];
        this.misMatchAttendance = [];
        this.date = new Date().toLocaleDateString();
        this.showdata = false;
        this.accessedStudentList = [];
        this.graStudentList = [];
        this.scannedStudentList = [];
        this._areas = {
            aos: [],
            aod: [],
        };
        this.shareImage = () => {
            const div = document.getElementById("PrintObservation");
            const table = document.getElementById("container");
            const options = { background: "white", height: div.clientHeight + 50, width: div.clientWidth + 50 };
            dom_to_image__WEBPACK_IMPORTED_MODULE_10___default().toPng(div, options).then((dataUrl) => {
                var doc = new jspdf__WEBPACK_IMPORTED_MODULE_7__.jsPDF("p", "mm", "a4");
                var width = doc.internal.pageSize.getWidth();
                var height = doc.internal.pageSize.getHeight();
                doc.addImage(dataUrl, 'PNG', 10, 10, width, height);
                let pdfOutput = doc.output();
                let buffer = new ArrayBuffer(pdfOutput.length);
                let array = new Uint8Array(buffer);
                for (var i = 0; i < pdfOutput.length; i++) {
                    array[i] = pdfOutput.charCodeAt(i);
                }
                this.filePath.resolveNativePath('file://')
                    .then(filePath => console.log(filePath))
                    .catch(err => console.log(err));
                this.file.listDir(this.file.externalDataDirectory, '').then((folderList) => {
                });
                const directory = this.file.externalDataDirectory;
                const fileName = "Observationreport.pdf";
                let options = { replace: true };
                this.file.checkFile(directory, fileName).then((success) => {
                    this.file.writeFile(directory, fileName, buffer, options)
                        .then((success) => {
                    })
                        .catch((error) => {
                    });
                })
                    .catch((error) => {
                    this.file.writeFile(directory, fileName, buffer)
                        .then((success) => {
                    })
                        .catch((error) => {
                    });
                });
            })
                .catch(function (error) {
            });
            if (this.platform.is('cordova')) {
                const fileName = "Observationreport.pdf";
                let ROOT_DIRECTORY = this.file.externalDataDirectory + fileName;
                this.socialSharing.share("Message", "Subject", ROOT_DIRECTORY, "")
                    .then((entries) => {
                })
                    .catch((error) => {
                    alert('error ' + JSON.stringify(error));
                });
            }
        };
        this.getAreas = (groupedQuestions, area) => {
            var _a, _b, _c;
            for (const key in groupedQuestions) {
                if (groupedQuestions.hasOwnProperty(key)) {
                    const elements = groupedQuestions[key];
                    const elementsSorted = lodash__WEBPACK_IMPORTED_MODULE_2___default().sortBy(elements, ["action_priority"]);
                    for (let i = 0; i < elementsSorted.length; i++) {
                        let action = elementsSorted[i];
                        if (action.type_of_ans == "1") {
                            let ansdata = action.ans.ans.filter((data) => {
                                if (data.ans == action.selectedans) {
                                    return data;
                                }
                            });
                            if (action.selectedans && ansdata.length > 0) {
                                if (((_a = ansdata[0]) === null || _a === void 0 ? void 0 : _a.action_item_description) == '')
                                    continue;
                                action.selectedAnswer = { "answer_id": ansdata[0].id, "answer": ansdata[0].ans };
                            }
                        }
                        // if(action.selectedans){
                        //   if(action.selectedans == 'Yes'){
                        //     action.selectedAnswer = {"answer_id" : '1', "answer" : "Yes"}
                        //   }
                        //   else if(elementsSorted[i].selectedans == 'No'){
                        //     action.selectedAnswer = {"answer_id" : '2', "answer" : "No"}
                        //   }
                        //   else if(action.selectedans == 'ஆம்'){
                        //     action.selectedAnswer = {"answer_id" : '1', "answer" : "ஆம்"}
                        //   }
                        //   else if(action.selectedans == 'இல்லை'){
                        //     action.selectedAnswer = {"answer_id" : '1', "answer" : "இல்லை"}
                        //   }            
                        // }
                        if (action.ans == null)
                            continue;
                        if (((_c = (_b = action.ans) === null || _b === void 0 ? void 0 : _b.aos) === null || _c === void 0 ? void 0 : _c.length) == 0)
                            continue;
                        const selAnswer = action.selectedAnswer;
                        const answerId = (selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id) != undefined ? selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id : '';
                        console.log(selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id, 'selAnswer.answer_id');
                        const _area = action.ans[area];
                        const ans = action.ans.ans;
                        let joinedSel, isAOS;
                        if (Array.isArray(selAnswer)) {
                            joinedSel = selAnswer.map((s) => s.answer_id).sort();
                            if (action.action_name == "CCE record") {
                                if (joinedSel.join() == "1,2,3") {
                                    if (_area[1]) {
                                        if (_area[1].length > 1) {
                                            isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area.toString(), joinedSel.join());
                                        }
                                    }
                                }
                                else {
                                    joinedSel.forEach((js) => {
                                        isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area, js);
                                    });
                                }
                            }
                            else {
                                joinedSel.forEach((js) => {
                                    isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area, js);
                                });
                            }
                        }
                        else {
                            joinedSel = selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id;
                            isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area, Number(joinedSel));
                        }
                        if (elementsSorted[i].action_name == "Pedagogy" && elementsSorted[i].classtype == '2' && elementsSorted[i].action_priority == '1') {
                            if (isAOS) {
                                if (Array.isArray(joinedSel)) {
                                    if (_area[1] && _area[1].length > 1) {
                                        this._areas[area].push({
                                            action_item_description: _area[1],
                                            param_id: action.param_id.toString()
                                        });
                                    }
                                    else {
                                        joinedSel.forEach((jss) => {
                                            const f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, (a) => a.id == Number(jss));
                                            f.param_id = action.param_id.toString();
                                            this._areas[area].push(f);
                                        });
                                    }
                                }
                                else {
                                    const f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, (a) => a.id == Number(joinedSel));
                                    f.param_id = action.param_id.toString();
                                    this._areas[area].push(f);
                                }
                            }
                        }
                        else {
                            if (isAOS) {
                                if (Array.isArray(joinedSel)) {
                                    if (_area[1] && _area[1].length > 1) {
                                        this._areas[area].push({
                                            action_item_description: _area[1],
                                            param_id: action.param_id.toString()
                                        });
                                    }
                                    else {
                                        joinedSel.forEach((jss) => {
                                            const f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, (a) => a.id == Number(jss));
                                            f.param_id = action.param_id.toString();
                                            this._areas[area].push(f);
                                        });
                                    }
                                }
                                else {
                                    const f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, (a) => a.id == Number(joinedSel));
                                    let found = false;
                                    ans.forEach((data) => {
                                        if (data.action_item_description == "") {
                                            found = true;
                                        }
                                    });
                                    if (found) {
                                        continue;
                                    }
                                    f.param_id = action.param_id.toString();
                                    this._areas[area].push(f);
                                }
                                break;
                            }
                        }
                        if (isAOS) {
                            if (Array.isArray(joinedSel)) {
                                if (_area[1] && _area[1].length > 1) {
                                    this._areas[area].push({
                                        action_item_description: _area[1],
                                        param_id: action.param_id.toString()
                                    });
                                }
                                else {
                                    joinedSel.forEach((jss) => {
                                        const f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, (a) => a.id == Number(jss));
                                        f.param_id = action.param_id.toString();
                                        this._areas[area].push(f);
                                    });
                                }
                            }
                            else {
                                const f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, (a) => a.id == Number(joinedSel));
                                f.param_id = action.param_id.toString();
                                this._areas[area].push(f);
                            }
                        }
                    }
                }
            }
        };
        this.checkpedagogy = (groupedQuestions, area) => {
            var _a, _b;
            for (const key in groupedQuestions) {
                if (groupedQuestions.hasOwnProperty(key)) {
                    const elements = groupedQuestions[key];
                    const elementsSorted = lodash__WEBPACK_IMPORTED_MODULE_2___default().sortBy(elements, ["action_priority"]);
                    for (let i = 0; i < elementsSorted.length; i++) {
                        const action = elementsSorted[i];
                        if (action.type_of_ans == "1") {
                            let ansdata = action.ans.ans.filter((data) => {
                                if (data.ans == action.selectedans) {
                                    return data;
                                }
                            });
                            if (action.selectedans && ansdata.length > 0) {
                                action.selectedAnswer = { "answer_id": ansdata[0].id, "answer": ansdata[0].ans };
                            }
                        }
                        // if(action.selectedans){
                        //   if(action.selectedans == 'Yes'){
                        //     action.selectedAnswer = {"answer_id" : '1', "answer" : "Yes"}
                        //   }
                        //   else if(elementsSorted[i].selectedans == 'No'){
                        //     action.selectedAnswer = {"answer_id" : '2', "answer" : "No"}
                        //   }
                        //   else if(action.selectedans == 'ஆம்'){
                        //     action.selectedAnswer = {"answer_id" : '1', "answer" : "ஆம்"}
                        //   }
                        //   else if(action.selectedans == 'இல்லை'){
                        //     action.selectedAnswer = {"answer_id" : '1', "answer" : "இல்லை"}
                        //   } 
                        // }
                        if (action.ans == null)
                            continue;
                        if (((_b = (_a = action.ans) === null || _a === void 0 ? void 0 : _a.aos) === null || _b === void 0 ? void 0 : _b.length) == 0)
                            continue;
                        const selAnswer = action.selectedAnswer;
                        const answerId = (selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id) != undefined ? selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id : '';
                        // if (!action.ans) continue;
                        if (action.classtype == '2' && action.action_name == "Pedagogy") {
                            if (action.class == '1' || action.class == '2' || action.class == '3') {
                                for (let j = 0; j < selAnswer.length; j++) {
                                    this.class123.push(selAnswer[j].answer_id);
                                }
                            }
                            if (action.class == '4' || action.class == '5') {
                                for (let j = 0; j < selAnswer.length; j++) {
                                    this.class45.push(selAnswer[j].answer_id);
                                }
                            }
                            if (action.class == '6' || action.class == '7' || action.class == '8') {
                                for (let j = 0; j < selAnswer.length; j++) {
                                    this.class678.push(selAnswer[j].answer_id);
                                }
                            }
                        }
                    }
                }
            }
            if (this.class123.length > 0 && this.class45.length > 0) {
                if (this.class123.indexOf('4') != -1 && this.class45.indexOf('8') != -1) {
                    for (var i = 0; i < this._areas.aos.length; i++) {
                        if (this._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                    }
                    for (var i = 0; i < this._areas.aod.length; i++) {
                        if (this._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                            this._areas.aod.splice(i, 1);
                        }
                    }
                    if (this.languageType == 'en') {
                        const data = { param_id: '2', action_item_description: 'Please Follow the steps in the pedagogy.' };
                        if (this._areas.aod) {
                            if (this._areas.aod[0].param_id.toString() == '1') {
                                this._areas.aod.splice(1, 0, data);
                            }
                            else {
                                this._areas.aod.unshift(data);
                            }
                        }
                    }
                    else {
                        const data = { param_id: '2', action_item_description: 'கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.' };
                        if (this._areas.aod) {
                            if (this._areas.aod[0].param_id.toString() == '1') {
                                this._areas.aod.splice(1, 0, data);
                            }
                            else {
                                this._areas.aod.unshift(data);
                            }
                        }
                    }
                }
                else if (this.class123.indexOf('4') == -1 && this.class45.indexOf('8') == -1) {
                    for (var i = 0; i < this._areas.aod.length; i++) {
                        if (this._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                            this._areas.aod.splice(i, 1);
                        }
                    }
                    for (var i = 0; i < this._areas.aos.length; i++) {
                        if (this._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                    }
                    if (this.languageType == 'en') {
                        const data = { param_id: '2', action_item_description: 'You are following the steps in the pedagogy. Well done!' };
                        if (this._areas.aos) {
                            if (this._areas.aos[0].param_id.toString() == '1') {
                                this._areas.aos.splice(1, 0, data);
                            }
                            else {
                                this._areas.aos.unshift(data);
                            }
                        }
                    }
                    else {
                        const data = { param_id: '2', action_item_description: 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!' };
                        if (this._areas.aos) {
                            if (this._areas.aos[0].param_id.toString() == '1') {
                                this._areas.aos.splice(1, 0, data);
                            }
                            else {
                                this._areas.aos.unshift(data);
                            }
                        }
                    }
                }
                else if (this.class123.indexOf('4') == -1 && this.class45.indexOf('8') != -1) {
                    for (var i = 0; i < this._areas.aod.length; i++) {
                        if (this._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                            this._areas.aod.splice(i, 1);
                        }
                    }
                    for (var i = 0; i < this._areas.aos.length; i++) {
                        if (this._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                    }
                }
                else if (this.class123.indexOf('4') != -1 && this.class45.indexOf('8') == -1) {
                    for (var i = 0; i < this._areas.aod.length; i++) {
                        if (this._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                            this._areas.aod.splice(i, 1);
                        }
                    }
                    for (var i = 0; i < this._areas.aos.length; i++) {
                        if (this._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                    }
                }
            }
            if (this.class123 && !this.class45) {
                if (this.class123.indexOf('4') != -1) {
                    for (var i = 0; i < this._areas.aos.length; i++) {
                        if (this._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                    }
                }
                else {
                    for (var i = 0; i < this._areas.aod.length; i++) {
                        if (this._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                            this._areas.aod.splice(i, 1);
                        }
                    }
                }
                if (this.class45 && !this.class123) {
                    if (this.class45.indexOf('8') != -1) {
                        for (var i = 0; i < this._areas.aos.length; i++) {
                            if (this._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                                this._areas.aos.splice(i, 1);
                            }
                            if (this._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                                this._areas.aos.splice(i, 1);
                            }
                        }
                    }
                    else {
                        for (var i = 0; i < this._areas.aod.length; i++) {
                            if (this._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                                this._areas.aod.splice(i, 1);
                            }
                            if (this._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                                this._areas.aod.splice(i, 1);
                            }
                        }
                    }
                }
            }
            if (this.class678.length > 0) {
                if (this.class678.indexOf('8') != -1) {
                    for (var i = 0; i < this._areas.aos.length; i++) {
                        if (this._areas.aos[i].action_item_description == 'You follow the steps in the ALM pedagogy. Well done!') {
                            this._areas.aos.splice(i, 1);
                        }
                        if (this._areas.aos[i].action_item_description == 'நீங்கள் ALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                            this._areas.aos.splice(i, 1);
                        }
                    }
                }
                else {
                    for (var i = 0; i < this._areas.aod.length; i++) {
                        if (this._areas.aod[i].action_item_description == 'Follow the steps in the ALM pedagogy.') {
                            this._areas.aod.splice(i, 1);
                        }
                        if (this._areas.aod[i].action_item_description == 'ALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                            this._areas.aod.splice(i, 1);
                        }
                    }
                }
            }
            this._areas.aos = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(this._areas.aos, (_this) => _this.param_id.toString());
            this._areas.aod = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(this._areas.aod, (_this) => _this.param_id.toString());
        };
        this.getList = () => {
            var _a, _b, _c;
            debugger;
            if (this.storeDetail.pages.pageData[7] != undefined) {
                let questionData;
                if ((_a = this.storeDetail.pages.pageData[14]) === null || _a === void 0 ? void 0 : _a.correctedDetails) {
                    if ((_b = this.storeDetail.pages.pageData[16]) === null || _b === void 0 ? void 0 : _b.correctedDetails) {
                        questionData = [...this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList, ...this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList, ...this.storeDetail.pages.pageData[14].correctedDetails.sec_data];
                    }
                    else {
                        questionData = [...this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList, ...this.storeDetail.pages.pageData[14].correctedDetails.sec_data];
                    }
                }
                else {
                    if ((_c = this.storeDetail.pages.pageData[16]) === null || _c === void 0 ? void 0 : _c.correctedDetails) {
                        questionData = [...this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList, ...this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList];
                    }
                    else {
                        questionData = [...this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList];
                    }
                }
                let questionsList = [];
                questionData.forEach((element) => {
                    element.questionList.forEach((v) => {
                        questionsList.push(v);
                    });
                });
                questionsList.sort((x, y) => {
                    return (Number(x.param_priority) - Number(y.param_priority) ||
                        Number(x.action_priority) - Number(y.action_priority));
                });
                const groupedQuestions = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(questionsList, "param_priority");
                localStorage.setItem("scoreSection", JSON.stringify(groupedQuestions));
                this.getAreas(groupedQuestions, "aos");
                this.getAreas(groupedQuestions, "aod");
                this._areas.aos = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(this._areas.aos, (_this) => _this.action_item_description);
                this._areas.aod = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(this._areas.aod, (_this) => _this.action_item_description);
                this._areas.aos = this._areas.aos.filter((data) => {
                    if (data.action_item_description && data.action_item_description != "") {
                        return data;
                    }
                });
                this._areas.aod = this._areas.aod.filter((data) => {
                    if (data.action_item_description && data.action_item_description != "") {
                        return data;
                    }
                });
                let logDataNew = {
                    username: localStorage.getItem("username"),
                    udise_code: localStorage.getItem("udise_code"),
                    observation_id: localStorage.getItem("observation_id"),
                    form_name: "Observation Report",
                    action_name: "Observation Report data",
                    data: JSON.stringify(this._areas),
                    completion_percentage: this.progressValue
                };
                this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                }, (error) => {
                });
                this.checkpedagogy(groupedQuestions, this._areas);
            }
        };
        this.createPage = () => {
            let apiData = {
                pageNo: "12",
                pageName: "observationReport",
                apiResponse: {
                    records: {},
                },
                pageDetails: {
                    strength: [],
                    improvement: [],
                },
            };
            this.storeDetail.pages.pageData[11] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
        };
        this.goToNextPage = () => {
            debugger;
            this.misMatchAttendance = [];
            this.storeDetail.pages.pageData[11].pageDetails.strength = this._areas.aos;
            this.storeDetail.pages.pageData[11].pageDetails.improvement = this._areas.aod;
            this.storeDetail.pages.currentProgress = this.progressValue;
            let usertype = localStorage.getItem("usertype");
            let level = localStorage.getItem("selectedlevel");
            let getfinaldata = localStorage.getItem("finaldata");
            let getteacherlength = localStorage.getItem("teacherlength");
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
            if (getfinaldata || this.user_type == 8) {
                // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1") } });
            }
            else {
                if (JSON.parse(localStorage.getItem('emis_status')) == 1) {
                    // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);   
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1") } });
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1") } });
                }
            }
        };
        this.goBack = () => {
            if (Number(this.storeDetail.pages.pageData[5].correctedDetails.class_id) > 8) {
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1") } });
            }
            else {
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1") } });
            }
        };
        this.items = [
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
        ];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.progressValue = 89;
            this.appLanguage();
            this.loading.present();
            this.observer_name = this.userSessionService.teacher_name();
            this.designation = this.userSessionService.type_teacher();
            let teacherInfo = localStorage.getItem("teacherInfo");
            this.teachertype = this.userSessionService.teacher_type();
            this.user_type = this.userSessionService.emis_usertype();
            this.remarks = localStorage.getItem("remarks");
            this.teacherDetails = JSON.parse(teacherInfo);
            let classInfo = localStorage.getItem("classInfo");
            this.classDetails = JSON.parse(classInfo);
            let schoolInfo = localStorage.getItem("schoolInfo");
            this.schoolDetails = JSON.parse(schoolInfo);
            yield this.ionicStore.getStoreData().then((response) => {
                var _a, _b;
                this.storeDetail = response;
                if (this.storeDetail == null) {
                    if (this.storeDetail == null || this.storeDetail == undefined) {
                        this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                    }
                    let logDataNew = {
                        username: localStorage.getItem("username"),
                        udise_code: localStorage.getItem("udise_code"),
                        observation_id: localStorage.getItem("observation_id"),
                        form_name: "Observation Report",
                        action_name: "Observation Report data",
                        data: JSON.stringify(this.storeDetail),
                        completion_percentage: this.progressValue
                    };
                    this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                    }, (error) => {
                    });
                }
                if (this.storeDetail.pages.pageData[5] && this.teacherDetails == null) {
                    this.teacherDetails = this.storeDetail.pages.pageData[5].pageDetails.teacherDetails;
                }
                if (this.storeDetail.pages.pageData[0] && this.schoolDetails == null) {
                    this.schoolDetails = this.storeDetail.pages.pageData[0].pageDetails;
                }
                if (this.storeDetail.pages.pageData[18]) {
                    if (this.storeDetail.pages.pageData[18].omrData) {
                        if (this.storeDetail.pages.pageData[18].omrData.length > 0) {
                            this.scannedStudentList = this.storeDetail.pages.pageData[18].omrData.filter((data) => {
                                if (data.scanned == true || data.scanned == false) {
                                    return data;
                                }
                            });
                        }
                        else {
                            this.scannedStudentList = this.storeDetail.pages.pageData[18].omrData.filter((data) => {
                                if (data.scanned == true || data.scanned == false) {
                                    return data;
                                }
                            });
                        }
                    }
                }
                if (this.storeDetail.pages.pageData[20]) {
                    if (this.storeDetail.pages.pageData[20].correctedDetails.graStudents) {
                        if (this.storeDetail.pages.pageData[20].correctedDetails.graStudents.length > 0) {
                            this.graStudentList = this.storeDetail.pages.pageData[20].correctedDetails.graStudents;
                        }
                    }
                }
                let Grades = ["A", "B", "C", "D"];
                if (this.scannedStudentList.length > 0) {
                    for (var i = 0; i < this.scannedStudentList.length; i++) {
                        let gradesIdx = Math.floor(Math.random() * Grades.length);
                        this.scannedStudentList[i].grade = Grades[gradesIdx];
                        let scan_status = this.storeDetail.pages.pageData[18].omrData[i].scanned;
                        if (scan_status == true) {
                            this.storeDetail.pages.pageData[18].omrData[i].omr_score = String(this.scannedStudentList[i].CorrectAns.length) + "/" + String(this.scannedStudentList[i].questionsAns.length);
                        }
                        else if (scan_status == false) {
                            this.storeDetail.pages.pageData[18].omrData[i].omr_score = null;
                        }
                    }
                }
                if (this.storeDetail.pages.pageData[18]) {
                    if (this.storeDetail.pages.pageData[18].omrData) {
                        localStorage.setItem("final-omr-student-list", JSON.stringify(this.storeDetail.pages.pageData[18].omrData));
                    }
                }
                this.storeDetail.pages.currentPage = "observationReport";
                this.selectedclass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id;
                this.selectedSection = this.storeDetail.pages.pageData[5].pageDetails.section;
                if (Number(this.selectedclass) != 9 && Number(this.selectedclass) != 10 && Number(this.selectedclass) != 11 && Number(this.selectedclass) != 12) {
                    this.showdata = true;
                }
                this.ionicStore.setStoreData(this.storeDetail);
                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                if (this.storeDetail.pages.pageData[11] == undefined || this.storeDetail.pages.pageData[11] == null) {
                    this.createPage();
                }
                if (this.storeDetail.pages.pageData[8]) {
                    if ((_a = this.storeDetail.pages.pageData[8]) === null || _a === void 0 ? void 0 : _a.unitInfo) {
                        this.chapterDetail = (_b = this.storeDetail.pages.pageData[8]) === null || _b === void 0 ? void 0 : _b.correctedDetails.unitInfo.learning_outcome;
                        if (this.storeDetail.pages.pageData[10]) {
                            this.accessedStudentList = lodash__WEBPACK_IMPORTED_MODULE_2___default().remove(lodash__WEBPACK_IMPORTED_MODULE_2___default().flattenDeep(this.storeDetail.pages.pageData[10].pageDetails), (lodash__WEBPACK_IMPORTED_MODULE_2___default().undefined));
                        }
                    }
                }
                this.getList();
                this.loading.dismiss();
            });
            if (this.platform.is("android")) {
            }
        });
    }
    showInputAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Note to Observer while scanning the OMR sheet:",
                cssClass: "my-custom-class",
                message: "<li>Take the clear picture of the OMR sheet.</li><br><li>Please scan in portrait mode (vertically) and on a flat surface.</li><br> <li>Also, make sure all 4 borders are scanned correctly.</li>",
                backdropDismiss: false,
                buttons: [{
                        text: "ok",
                        handler: () => { }
                    }],
            });
            yield alert.present();
        });
    }
    successInPreventScreenshot(isDone) {
    }
    errorInPreventScreenshot(isError) {
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("Observation").subscribe((res) => {
            this.Observation = res;
        });
        this._translate.get("observedDate").subscribe((res) => {
            this.observedDate = res;
        });
        this._translate.get("Report").subscribe((res) => {
            this.Report = res;
        });
        this._translate.get("discussReport").subscribe((res) => {
            this.discussReport = res;
        });
        this._translate.get("schoolObserved").subscribe((res) => {
            this.schoolObserved = res;
        });
        this._translate.get("standardObserved").subscribe((res) => {
            this.standardObserved = res;
        });
        this._translate.get("subject").subscribe((res) => {
            this.subject = res;
        });
        this._translate.get("studentTested").subscribe((res) => {
            this.studentTested = res;
        });
        this._translate.get("TodayReport").subscribe((res) => {
            this.TodayReport = res;
        });
        this._translate.get("areastrength").subscribe((res) => {
            this.areastrength = res;
        });
        this._translate.get("areaImprovement").subscribe((res) => {
            this.areaImprovement = res;
        });
        this._translate.get("assessmentResults").subscribe((res) => {
            this.assessmentResults = res;
        });
        this._translate.get("shareonwhatsapp").subscribe((res) => {
            this.shareonwhatsapp = res;
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
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.items.map((listItem) => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    ngOnDestroy() {
        if (this.platform.is("android")) {
        }
    }
};
ObservationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__.FilePath },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__.SocialSharing },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File }
];
ObservationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: "app-observation",
        template: _raw_loader_observation_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observation_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationComponent);



/***/ }),

/***/ 54181:
/*!**************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationModule": function() { return /* binding */ ObservationModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _observation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observation.component */ 53554);
/* harmony import */ var src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/expandable/expandable.component */ 38932);
/* harmony import */ var _observation_update_observation_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observation-update/observation-update.component */ 73895);
/* harmony import */ var _observation_end_observation_end_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observation-end/observation-end.component */ 36013);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);
/* harmony import */ var _observation_discussion_observation_discussion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observation-discussion/observation-discussion.component */ 56885);
/* harmony import */ var _observation_teaching_observation_teaching_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observation-teaching/observation-teaching.component */ 61631);













const routes = [
    {
        path: '',
        component: _observation_component__WEBPACK_IMPORTED_MODULE_0__.ObservationComponent
    },
    {
        path: 'observationDiscussion',
        component: _observation_discussion_observation_discussion_component__WEBPACK_IMPORTED_MODULE_5__.ObservationDiscussionComponent,
    },
    {
        path: 'observationTeaching',
        component: _observation_teaching_observation_teaching_component__WEBPACK_IMPORTED_MODULE_6__.ObservationTeachingComponent
    },
    {
        path: 'updateObservation',
        component: _observation_update_observation_update_component__WEBPACK_IMPORTED_MODULE_2__.ObservationUpdateComponent
    },
    {
        path: 'endObservation',
        component: _observation_end_observation_end_component__WEBPACK_IMPORTED_MODULE_3__.ObservationEndComponent
    }
];
let ObservationModule = class ObservationModule {
};
ObservationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)
        ],
        declarations: [_observation_component__WEBPACK_IMPORTED_MODULE_0__.ObservationComponent,
            _observation_teaching_observation_teaching_component__WEBPACK_IMPORTED_MODULE_6__.ObservationTeachingComponent,
            _observation_discussion_observation_discussion_component__WEBPACK_IMPORTED_MODULE_5__.ObservationDiscussionComponent,
            _observation_end_observation_end_component__WEBPACK_IMPORTED_MODULE_3__.ObservationEndComponent,
            _observation_update_observation_update_component__WEBPACK_IMPORTED_MODULE_2__.ObservationUpdateComponent,
            src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__.ExpandableComponent,
        ],
        exports: [],
        entryComponents: []
    })
], ObservationModule);



/***/ }),

/***/ 63680:
/*!*****************************************************************!*\
  !*** ./src/app/components/expandable/expandable.component.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usd0JBQUE7QUFDSiIsImZpbGUiOiJleHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xsYXBzZWQge1xyXG4gICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 98726:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-discussion/observation-discussion.component.scss ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLWRpc2N1c3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoib2JzZXJ2YXRpb24tZGlzY3Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRob2QtaGVhZGVyLWZvdXJ7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzc5ODVGMjtcclxuICAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuIFxyXG4gIH0iXX0= */");

/***/ }),

/***/ 46002:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-end/observation-end.component.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYnNlcnZhdGlvbi1lbmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 4085:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-teaching/observation-teaching.component.scss ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYnNlcnZhdGlvbi10ZWFjaGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 31190:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation-update/observation-update.component.scss ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJvYnNlcnZhdGlvbi11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ 83012:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tnvn/observation/observation.component.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p,\nh5,\nul > li {\n  font-size: 12px;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n/* Zebra striping */\n\ntr:nth-of-type(odd) {\n  background: #eee;\n}\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold;\n}\n\ntd, th {\n  border: 1px solid #ccc;\n  word-break: break-all;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5Q0FBQTtBQUVKOztBQUFBO0VBQ0kscUNBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURFLG1CQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEU7RUFFRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJvYnNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAsXHJcbmg1LFxyXG51bD5saXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2U2ZGVlZCAhaW1wb3J0YW50OyAgXHJcbiAgfVxyXG4uYmctdHJhbnNwYXJlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnRcclxufVxyXG5cclxudGFibGUgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG4gIH1cclxuICAvKiBaZWJyYSBzdHJpcGluZyAqL1xyXG4gIHRyOm50aC1vZi10eXBlKG9kZCkgeyBcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7IFxyXG4gIH1cclxuICB0aCB7IFxyXG4gICAgYmFja2dyb3VuZDogIzMzMzsgXHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gIH1cclxuICB0ZCwgdGggeyBcclxuICAgIC8vcGFkZGluZzogNnB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 93032:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\r\n  <ng-content></ng-content>\r\n</div>");

/***/ }),

/***/ 72496:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-discussion/observation-discussion.component.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n              <ion-buttons slot=\"\">\r\n                  <ion-menu-button></ion-menu-button>\r\n                </ion-buttons>\r\n          </ion-col>\r\n          <ion-col class=\"\">\r\n              <ion-title class=\"ion-text-center fs-16\"><b>OBSERVATION <br>DISCUSSION</b>\r\n              </ion-title></ion-col>\r\n          <ion-col>\r\n              <app-notification></app-notification>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>    \r\n  <section class=\"p-0 h-100\">  \r\n    <h4 class=\"method-header-four text-white text-center m-0\">\r\n     <b> {{sectionData?.sec_name}} </b>       \r\n    </h4>\r\n    <div *ngIf=\"sectionData?.questionList.length\"\r\n        class=\"content-wrapper bg-dark-violet h-100\">\r\n    <app-questions [treeData]=\"sectionData?.questionList\" (valueChange)='displayCounter($event)'></app-questions>\r\n    </div>\r\n</section>\r\n  </ion-content>\r\n    <ion-footer style=\"height:50px;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button  class=\"btn-back\" (click)=\"goToBackPage()\">\r\n              <ion-label>BACK</ion-label>\r\n            </ion-tab-button>\r\n            <ion-tab-button class=\"btn-next\"  [routerLink]=\"['/tnvntabs/page-route/observation/updateObservation']\">\r\n              <ion-label>NEXT</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>        \r\n      </ion-footer>\r\n\r\n\r\n");

/***/ }),

/***/ 17110:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-end/observation-end.component.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar class=\"new-background-color\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-buttons slot=\"\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                  </ion-buttons>\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-title\r\n                class=\"ion-text-center\"\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n              >\r\n                <b>{{ this.Observation }} <br /> </b>\r\n              </ion-title>\r\n            </ion-col>            \r\n           \r\n            <ion-col> \r\n                <app-notification></app-notification>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    \r\n    </ion-toolbar>\r\n   \r\n  </ion-header>\r\n  <ion-content>\r\n    <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n      <div class=\"content-wrapper\">  \r\n  \r\n    <ion-text color=\"\" class=\"ion-text-center text-success\">\r\n        <h3 [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-24': this.languageType == 'ta'}\"><b>{{this.congratulations}}</b></h3>\r\n      </ion-text>\r\n\r\n          <div class=\"check-mark\"> <ion-img width=\"80\" height=\"80\" src='../assets/icons/icons-checks.png'></ion-img></div>\r\n\r\n          <section>  \r\n              <ion-text color=\"\" class=\"ion-text-center\">\r\n              <h2 class=\"text-muted fs-18\"><b><span [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-14': this.languageType == 'ta'}\">{{this.successfullyCompleted}}</span>:</b></h2>\r\n                \r\n                      <h1 class=\"fs-18 lh-2\"><b> {{schoolDetail?.schoolName}}  <br><span>{{this.class}}</span> {{classDetail?.class_id}} {{selectedSection}} <br>{{teacherDetail?.teacher_name}}\r\n                      </b></h1>\r\n                    </ion-text>\r\n            </section> \r\n  </div>\r\n    </ion-content>\r\n    <ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">    \r\n            <ion-tab-button  class=\"btn-next done\" (click)=\"finalSubmit()\">\r\n              <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{goToHomepage}}</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>        \r\n      </ion-footer>\r\n  \r\n  \r\n  ");

/***/ }),

/***/ 5806:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-teaching/observation-teaching.component.html ***!
  \***************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar class=\"pale-nave_blue\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-buttons slot=\"\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                  </ion-buttons>\r\n            </ion-col>\r\n            <ion-col class=\"\">\r\n                <ion-title class=\"ion-text-center fs-16\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\"><b>{{ this.classroomObservation }}</b>\r\n                </ion-title></ion-col>\r\n            <ion-col>\r\n                <app-notification></app-notification>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n      <app-progress [progress]=\"28\"></app-progress>\r\n\r\n    <section class=\"p-0 h-100\">  \r\n      <div\r\n          class=\"content-wrapper h-100\">\r\n      <p class=\"fs-16 mb-0\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.standardInfo}}</span> :</p>\r\n     <ion-list lines=\"none\" class=\"bg-transparent\">\r\n        <ion-radio-group [(ngModel)]=\"classSelect\">\r\n      <ion-item class=\"bg-transparent\" *ngFor=\"let standard of selectedClass\">\r\n         <ion-label >{{standard.class_id}}</ion-label>\r\n         <ion-radio color=\"favorite\" slot=\"start\" (click)=\"radioChecked(standard)\" value={{standard.class_id}} ></ion-radio>\r\n       </ion-item>\r\n     \r\n      </ion-radio-group>\r\n       </ion-list>\r\n     \r\n      </div>\r\n  </section>\r\n  \r\n  \r\n     \r\n  \r\n    </ion-content>\r\n  \r\n    <ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button  class=\"btn-back\" [routerLink]=\"['/tnvntabs/page-route/attendance/student-attendance']\">\r\n              <ion-label  [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}</ion-label>\r\n            </ion-tab-button>\r\n            <ion-tab-button  class=\"btn-next\" (click)=\"goToMethodolgyQuestions()\">\r\n              <ion-label  [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>\r\n      </ion-footer>\r\n  \r\n  \r\n  ");

/***/ }),

/***/ 53190:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-update/observation-update.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{ this.Observation }}<br />{{ this.Report }} <br /> </b>\r\n          </ion-title>\r\n        </ion-col>                \r\n        <ion-col> \r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center\">\r\n      <h5 class=\"m-0\">\r\n        <b\r\n          ><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n            this.UpdateObservation\r\n          }}</span>\r\n          : {{ reportDate }}</b\r\n        >\r\n      </h5>\r\n    </ion-text>\r\n\r\n    <section *ngIf=\"this.improvement.length\">\r\n      <p class=\"text-success\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.Congratulate\r\n        }}</span\r\n        >:\r\n      </p>\r\n\r\n      <ul *ngIf=\"improvedList.length > 0\">\r\n        <li *ngFor=\"let improved of improvedList | slice: 0:2\">\r\n          {{ improved }}\r\n        </li>\r\n      </ul>\r\n      <ion-text color=\"dark\" class=\"text-italic\">\r\n        <p class=\"fs-12\">\r\n          <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n            this.Note\r\n          }}</span>\r\n          : {{ this.workPreviousObservation }}\r\n        </p>\r\n      </ion-text>\r\n      <p class=\"text-danger\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n          {{ this.encourage }}</span\r\n        >:\r\n      </p>\r\n      <ul>\r\n        <li *ngFor=\"let needimprove of needimproveList | slice: 0:2\">\r\n          {{ needimprove }}\r\n        </li>\r\n      </ul>      \r\n    </section>\r\n\r\n    <section *ngIf=\"!this.improvement.length\">\r\n      <p\r\n        class=\"text-success\"\r\n        [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n      >\r\n        {{ this.noData }}\r\n      </p>\r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToBackPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next submit\" (click)=\"openDiscussModal()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.submitObservation }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 93615:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n            <b>{{ this.Observation }}<br/>{{ this.Report }}  </b>\r\n          </ion-title>\r\n        </ion-col>              \r\n        <ion-col> \r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-button  (click)=\"shareImage()\">\r\n    <ion-label style=\"color:#fff\"\r\n      >{{this.shareonwhatsapp}}\r\n    </ion-label>\r\n    <ion-icon color =\"light\" name=\"share\"></ion-icon>\r\n\r\n  </ion-button>  \r\n  <div  id=\"PrintObservation\"  style=\"max-width: 600px;margin: auto;padding: 10px;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;\">\r\n\r\n    <div color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"fs-12\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.discussReport\r\n        }}</span\r\n        ><br /><b>\r\n          {{ teacherDetails?.teacher_name }} [{{\r\n            teacherDetails?.teacher_id\r\n          }}]\r\n        </b>\r\n      </p>\r\n    </div>\r\n\r\n    <div color=\"dark\" class=\"\">\r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.observedDate}}</span>\r\n        :<b> {{ this.date }}</b>\r\n      </p>\r\n\r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">Observed By</span>\r\n        :<b> {{ this.observer_name }}, {{ this.designation }}</b>\r\n      </p>\r\n      \r\n      <p style=\"margin-bottom:2px\" *ngIf=\"schoolDetails?.schoolName\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.schoolObserved\r\n        }}</span>\r\n        : <b>{{ schoolDetails?.schoolName }} {{ schoolDetails?.eduDistName }}</b>\r\n      </p>\r\n\r\n      <p style=\"margin-bottom:2px\" *ngIf=\"schoolDetails?.school_name\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.schoolObserved\r\n        }}</span>\r\n        : <b>{{ schoolDetails?.school_name }} </b>\r\n      </p>      \r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.standardObserved\r\n        }}</span>\r\n        :<b> {{ this.selectedclass }} {{this.selectedSection}}</b>\r\n      </p>\r\n\r\n      <p *ngIf=\"this.showdata==true\" style=\"margin-bottom:10px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.studentTested\r\n        }}</span>\r\n        : <br />\r\n        <b> {{ chapterDetail }} </b>\r\n      </p>\r\n    </div>\r\n\r\n    <div color=\"dark\">\r\n      <h5\r\n        class=\"text-center fs-12\"\r\n        [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n      >\r\n        <b>{{ this.TodayReport }}</b>\r\n      </h5>\r\n    </div>\r\n\r\n    <section>\r\n      <h5>\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.areastrength\r\n        }}</span>\r\n        :\r\n      </h5>\r\n      <ul class=\"my-nav-1\">\r\n        <li *ngFor=\"let strength of _areas.aos | slice: 0:5\">\r\n          <span *ngIf=\"strength.action_item_description && strength?.action_item_description != '' && this.languageType=='en'\">\r\n            {{ strength?.action_item_description }}\r\n         </span>\r\n         <span *ngIf=\"strength.action_item_description_tamil && strength?.action_item_description_tamil != '' && this.languageType=='ta'\">\r\n          {{ strength?.action_item_description_tamil }}\r\n       </span>\r\n        </li>\r\n      </ul>\r\n      <h5>\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.areaImprovement\r\n        }}</span>\r\n        :\r\n      </h5>\r\n      <ul class=\"my-nav-2\">\r\n        <li *ngFor=\"let week of _areas.aod | slice: 0:5\">\r\n          <span *ngIf=\"week.action_item_description && week?.action_item_description != ''&& this.languageType=='en'\">\r\n            {{ week?.action_item_description }}\r\n          </span>\r\n          <span *ngIf=\"week.action_item_description_tamil && week?.action_item_description_tamil != ''&& this.languageType=='ta'\">\r\n            {{ week?.action_item_description_tamil }}\r\n          </span>\r\n        </li>\r\n      </ul>\r\n      \r\n      <h5 *ngIf=\"scannedStudentList.length>0 && this.showdata==true\">\r\n        <span  [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\" >{{\r\n          this.assessmentResults\r\n        }}</span\r\n        >:\r\n      </h5>\r\n      <div *ngIf=\"scannedStudentList.length>0\" style=\"margin: 5px;\">\r\n        <!-- <div *ngFor=\"let student of scannedStudentList\" style=\"display: flex\">\r\n          <p >{{student?.name}}</p>\r\n          <p>&nbsp;:&nbsp;</p>\r\n          <p *ngIf=\"student?.CorrectAns\" style=\"font-weight: bold;\">{{ student?.CorrectAns.length }}/{{ student?.questionsAns.length  }}</p>\r\n          <p *ngIf=\"!student?.CorrectAns\" style=\"font-weight: bold;color:#ff0000\"> {{ student?.selectedReasonData }}</p>\r\n        </div> -->\r\n\r\n        <ion-grid>\r\n   \r\n          <ion-row style=\"background-color:#8B67B3;font-size: 12px;\">\r\n            <ion-col style=\"border: 1px solid #000;width:20%\">\r\n              <ion-text style=\"color:#fff;text-align:center\">\r\n                Student Name\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000;width:20%\" *ngIf=\"scannedStudentList[0].CorrectAns\">\r\n              <ion-text style=\"color:#fff;text-align:center\">\r\n                Score / Reason\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000;width:20%\" *ngIf=\"!scannedStudentList[0].CorrectAns\">\r\n              <ion-text style=\"color:#fff;text-align:center\">\r\n                Score / Reason\r\n              </ion-text>\r\n            </ion-col>                \r\n          </ion-row>\r\n\r\n          <ion-row *ngFor=\"let student of scannedStudentList; let i = index\" style=\"font-size: 12px;\">\r\n            <ion-col style=\"border: 1px solid #000\">\r\n              <ion-text>\r\n                <b>{{student?.name}}</b>\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000\" *ngIf=\"student?.CorrectAns\">\r\n              <ion-text>\r\n                <b>{{ student?.CorrectAns.length }}/{{ student?.questionsAns.length  }}</b>\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000\" *ngIf=\"!student?.CorrectAns\">\r\n              <b style=\"color: #ff0000;\">{{ student?.selectedReasonData }}</b>\r\n            </ion-col>                 \r\n          </ion-row>      \r\n        </ion-grid>\r\n\r\n\r\n      </div>\r\n      <!-- <ion-grid *ngIf=\"scannedStudentList.length>0\" style=\"background-color: #fff;border-radius: 8px;\">\r\n        <ion-card style=\"border-radius: 8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n            <ion-card-title >\r\n              <ion-row lines=\"none\" justify-content-end style=\"margin:15px\">\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                   Name\r\n                </ion-col>\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                  Subject\r\n                </ion-col>\r\n                <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                  Score\r\n                </ion-col>                \r\n              </ion-row>   \r\n            </ion-card-title>                                    \r\n        </ion-card>   \r\n        <ion-card *ngFor=\"let student of scannedStudentList\" style=\"border-radius: 8px;background-color: #fff;color:#000;\" >          \r\n          <ion-card-content >\r\n            <ion-row  lines=\"none\" justify-content-end>\r\n              <ion-col padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.name }}\r\n              </ion-col>\r\n              <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                {{ classDetails?.subjectInfo.subject }}\r\n              </ion-col>                \r\n              <ion-col *ngIf=\"student.CorrectAns\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.CorrectAns.length }}/{{ student?.questionsAns.length  }}\r\n              </ion-col>\r\n              <ion-col *ngIf=\"!student.CorrectAns\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.selectedReasonData }} \r\n                </ion-col>                     \r\n            </ion-row>   \r\n          </ion-card-content >                                 \r\n      </ion-card>                \r\n      </ion-grid>   -->\r\n\r\n      <h5 *ngIf=\"graStudentList.length>0\" style=\"padding-top:10px\">\r\n        <span  [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\" >GRA Assessment result</span\r\n        >:\r\n      </h5>  \r\n      <div *ngIf=\"graStudentList.length>0\" style=\"margin: 5px;\">\r\n        <div *ngFor=\"let student of graStudentList\" style=\"display: flex\">\r\n          <p >{{student?.name}}</p>\r\n          <p>&nbsp;:&nbsp;</p>\r\n          <p *ngIf=\"student?.correct_words\" style=\"font-weight: bold;\">{{ student?.correct_words }}/{{ student?.book_total_words }}</p>\r\n          <p *ngIf=\"!student?.correct_words\" style=\"font-weight: bold;color:#ff0000\"> {{ student?.selectedReason }}</p>\r\n        </div>\r\n      </div>         \r\n     <!-- <ion-grid *ngIf=\"graStudentList.length>0\" style=\"background-color: #fff;border-radius: 8px;\">\r\n        <ion-card style=\"border-radius:8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n            <ion-card-title >\r\n              <ion-row lines=\"none\" justify-content-end style=\"margin:15px\">\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                   Name\r\n                </ion-col>\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                  Subject\r\n                </ion-col>\r\n                <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                  Score\r\n                </ion-col>                \r\n              </ion-row>   \r\n            </ion-card-title>                                    \r\n        </ion-card>   \r\n        <ion-card *ngFor=\"let student of graStudentList\" style=\"border-radius: 10px;background-color: #fff;color:#000;\" >          \r\n          <ion-card-content >\r\n            <ion-row  lines=\"none\" justify-content-end>\r\n              <ion-col padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.name }}\r\n              </ion-col>\r\n              <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                {{ classDetails?.subjectInfo.subject }}\r\n              </ion-col>                \r\n              <ion-col *ngIf=\"student.correct_words\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.correct_words }}/{{ student?.book_total_words }}\r\n              </ion-col>\r\n              <ion-col *ngIf=\"!student.correct_words\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                         {{student?.selectedReason}} \r\n                </ion-col>                     \r\n            </ion-row>   \r\n          </ion-card-content >                                 \r\n      </ion-card>                \r\n      </ion-grid>   -->\r\n\r\n      <p class=\"mb-0\" *ngIf=\"this.remarks\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"><b>Observer Remarks</b></span\r\n        >: {{ this.remarks }}\r\n      </p>        \r\n      \r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goBack()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToNextPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.save }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_observation_observation_module_ts-es2015.js.map