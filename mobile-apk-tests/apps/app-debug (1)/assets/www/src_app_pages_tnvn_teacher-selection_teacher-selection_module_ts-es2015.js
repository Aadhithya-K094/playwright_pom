(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_teacher-selection_teacher-selection_module_ts"],{

/***/ 12872:
/*!**************************************************************************!*\
  !*** ./src/app/pages/tnvn/teacher-selection/teacher-selection.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSelectionPageModule": function() { return /* binding */ TeacherSelectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _teacher_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher-selection.page */ 75984);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _teacher_selection_page__WEBPACK_IMPORTED_MODULE_0__.TeacherSelectionPage
    }
];
let TeacherSelectionPageModule = class TeacherSelectionPageModule {
};
TeacherSelectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_teacher_selection_page__WEBPACK_IMPORTED_MODULE_0__.TeacherSelectionPage,
        ],
        entryComponents: []
    })
], TeacherSelectionPageModule);



/***/ }),

/***/ 75984:
/*!************************************************************************!*\
  !*** ./src/app/pages/tnvn/teacher-selection/teacher-selection.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherSelectionPage": function() { return /* binding */ TeacherSelectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_teacher_selection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./teacher-selection.page.html */ 66468);
/* harmony import */ var _teacher_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-selection.page.scss */ 20178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/classroommodal/classroommodal.component */ 71414);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/emimodal/emimodal.component */ 79615);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/post.service */ 62538);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);














let TeacherSelectionPage = class TeacherSelectionPage {
    constructor(loading, modalController, _router, _apiService, _alertService, _postService, activatedRoute, ionicStore, _translate) {
        this.loading = loading;
        this.modalController = modalController;
        this._router = _router;
        this._apiService = _apiService;
        this._alertService = _alertService;
        this._postService = _postService;
        this.activatedRoute = activatedRoute;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.showDropdown = false;
        this.lname = "";
        this.changedValue = "";
        this.teacherReasons = [];
        this.isChanged = false;
        this.btnDisabled = true;
        this.getSchoolTeacherDetail = (schoolId) => {
            let records = {
                teacher: this.masterApiResponse.teacher_details,
                reasons: this.masterApiResponse.teacher_reasons,
            };
            let totalRecords = records;
            this.teacherReasons = records.reasons;
            this.teacherReasons = this.filterListByLang(this.teacherReasons);
            localStorage.setItem("teacherlength", this.masterApiResponse.teacher_details.length);
            this.teacherDetails = this.masterApiResponse.teacher_details[Math.floor(Math.random() * this.masterApiResponse.teacher_details.length)];
            this.teacher_id = this.teacherDetails.teacher_emisid;
            localStorage.setItem("teacherInfo", JSON.stringify(this.teacherDetails));
            let apiData = {
                pageNo: "5",
                pageName: "teacherSeleciton",
                apiResponse: {
                    records: totalRecords,
                },
                pageDetails: {
                    teacherDetails: this.teacherDetails,
                    teacher_id: this.teacher_id,
                },
                tempInfo: {
                    showDropdown: false,
                },
            };
            this.storeDetail.pages.pageData[4] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
        };
        this.addData = (status) => {
            this.storeDetail.pages.pageData[4].tempInfo.showDropdown = status;
            this.ionicStore.setStoreData(this.storeDetail);
            this.btnDisabled = false;
        };
        this.goToClassroom = () => {
            let teacherReason;
            if (!this.regularTeacher) {
                teacherReason = {
                    reason: this.selectedReason,
                    description: "Reason for not observing teacher",
                };
            }
            let correctedDetails = {
                changedValue: this.changedValue,
                isChanged: this.isChanged,
                regularTeacher: this.regularTeacher,
            };
            this.storeDetail.pages.pageData[4]["correctedDetails"] = correctedDetails;
            this.storeDetail.pages.pageData[4].pageDetails.teacherDetails.teacher_emisid = this.teacher_id;
            this.storeDetail.pages.currentProgress = this.progressValue;
            this.ionicStore.setStoreData(this.storeDetail);
            if (this.regularTeacher != undefined && this.regularTeacher) {
                if (!this.isChanged && this.changedValue == "") {
                    this._alertService.showAlert("Please check any");
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/classroom"]);
                }
            }
            else {
                if (this.selectedReason == undefined) {
                    this._alertService.showAlert("Please Select Reason");
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/classroom"]);
                }
            }
        };
    }
    ionViewWillEnter() {
        this.regularTeacher = true;
        this.checkedValue = true;
        this.loading.present();
        this.ngOnInit();
        this.loading.dismiss();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.progressValue = Math.round(((5 - 2) / 12) * 100);
            this.appLanguage();
            this.loading.present();
            yield this.ionicStore.getOffStorage().then((response) => {
                this.masterApiResponse = response;
                this.ionicStore.getStoreData().then((response) => {
                    this.storeDetail = response;
                    this.loading.dismiss();
                    this.storeDetail.pages.currentPage = "teacherSeleciton";
                    this.ionicStore.setStoreData(this.storeDetail);
                    this.schoolInfo = localStorage.getItem("schoolInfo");
                    this.schoolInfo = JSON.parse(this.schoolInfo);
                    if (this.storeDetail.pages.pageData[4] == undefined) {
                        this.getSchoolTeacherDetail(this.schoolInfo.schoolId);
                    }
                    else {
                        let apiResponse = this.storeDetail.pages.pageData[4].apiResponse
                            .records;
                        this.teacherReasons = apiResponse.reasons;
                        this.teacherReasons = this.filterListByLang(this.teacherReasons);
                        if (this.storeDetail.pages.pageData[4].pageDetails != undefined) {
                            this.teacherDetails = this.storeDetail.pages.pageData[4].pageDetails.teacherDetails;
                            this.teacher_id = this.storeDetail.pages.pageData[4].pageDetails.teacherDetails.teacher_emisid;
                            this.showDropdown = this.storeDetail.pages.pageData[4].tempInfo.showDropdown;
                            if (this.storeDetail.pages.pageData[4].pageDetails.reasonDetails !=
                                undefined) {
                                this.selectedReason = this.storeDetail.pages.pageData[4].pageDetails.reasonDetails.reason;
                            }
                            if (this.showDropdown) {
                                this.btnDisabled = false;
                            }
                        }
                        if (this.storeDetail.pages.pageData[4].correctedDetails != undefined) {
                            this.changedValue = this.storeDetail.pages.pageData[4].correctedDetails.changedValue;
                            this.isChanged = this.storeDetail.pages.pageData[4].correctedDetails.isChanged;
                            this.regularTeacher = this.storeDetail.pages.pageData[4].correctedDetails.regularTeacher;
                            this.checkedValue = this.regularTeacher ? "true" : "false";
                        }
                    }
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
        if (this.storeDetail) {
            this.teacherReasons = this.filterListByLang(this.storeDetail.pages.pageData[4].apiResponse.records.reasons);
        }
        this._translate.get("teacher").subscribe((res) => {
            this.teacher = res;
        });
        this._translate.get("teacherEmisId").subscribe((res) => {
            this.teacherEmisId = res;
        });
        this._translate.get("IsCorrect").subscribe((res) => {
            this.IsCorrect = res;
        });
        this._translate.get("Selection").subscribe((res) => {
            this.Selection = res;
        });
        this._translate.get("takeAttendance").subscribe((res) => {
            this.takeAttendance = res;
        });
        this._translate.get("doIt").subscribe((res) => {
            this.doIt = res;
        });
        this._translate.get("todayObserving").subscribe((res) => {
            this.todayObserving = res;
        });
        this._translate.get("proceedObservation").subscribe((res) => {
            this.proceedObservation = res;
        });
        this._translate.get("yes").subscribe((res) => {
            this.yes = res;
        });
        this._translate.get("no").subscribe((res) => {
            this.no = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
        });
        this._translate.get("noneAbove").subscribe((res) => {
            this.noneAbove = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("start").subscribe((res) => {
            this.start = res;
        });
        this._translate.get("giveReason").subscribe((res) => {
            this.giveReason = res;
        });
    }
    filterListByLang(list) {
        switch (this.languageType) {
            case "en":
                list = list.filter((sr) => sr.language_id == 2);
                break;
            case "ta":
                list = list.filter((sr) => sr.language_id == 1);
            default:
                break;
        }
        return list;
    }
    mySelectHandler(event) {
        this.lname = event.replace(/\s/g, "");
        if (this.lname == "Multigrade") {
            this.presentModal();
        }
    }
    mySelectReason(event) {
        this.selectedReason = event.target.value;
        this.masterApiResponse.teacher_details = this.masterApiResponse.teacher_details.filter((data) => {
            if (data.teacher_emisid != this.teacher_id) {
                return data;
            }
        });
        this.getSchoolTeacherDetail(this.schoolInfo.schoolId);
        this.regularTeacher = this.NewBoolean;
        this.checkedValue = this.regularTeacher;
        let teacherReason = {
            reason: this.selectedReason,
            description: "Reason for not observing teacher",
        };
        this.storeDetail.pages.pageData[4].pageDetails["reasonDetails"] = teacherReason;
        this.selectedReason = undefined;
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__.ClassroommodalComponent,
                cssClass: " my-custom-modal-classroom",
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    proceedCheck(changedValue) {
        this.changedValue = changedValue;
        this.isChanged = false;
        this.teacher_id = this.storeDetail.pages.pageData[4].pageDetails.teacherDetails.teacher_emisid;
    }
    presentModald(listedValue, type, correction, showCategory) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_3__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: "",
                    divisionType: type,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                if (response.data != "Cancel") {
                    this.teacher_id = response.data;
                    this.changedValue = response.data;
                    this.isChanged = true;
                }
            });
            return yield modal.present();
        });
    }
    backToEmiVerify() {
        if (this.storeDetail.pages.pageData[3]) {
            this._router.navigate(["/tnvntabs/page-route/emiverify", this.schoolInfo.schoolId]);
        }
        else {
            this._router.navigate(["/tnvntabs/page-route/dashboardc"]);
        }
    }
};
TeacherSelectionPage.ctorParameters = () => [
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__.PostService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService }
];
TeacherSelectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-teacher-selection",
        template: _raw_loader_teacher_selection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_teacher_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TeacherSelectionPage);



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

/***/ 20178:
/*!**************************************************************************!*\
  !*** ./src/app/pages/tnvn/teacher-selection/teacher-selection.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLXNlbGVjdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 66468:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/teacher-selection/teacher-selection.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.teacher}}<br>{{this.Selection}}<br>\r\n            </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <div class=\"content-wrapper\">\r\n\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"color-dgrey\"> {{schoolInfo?.schoolName}} </p>\r\n      <p class=\"color-dgrey\"><b><span\r\n            [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.todayObserving}}</span><br>\r\n          {{teacherDetails?.teacher_name}} [{{teacherDetails?.teacher_emisid}}]</b></p>\r\n\r\n    </ion-text>\r\n\r\n\r\n    <ion-list lines=\"none\">\r\n      <p class=\"text-center mb-0\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.proceedObservation}}</p>\r\n      <ion-radio-group [(ngModel)]=\"checkedValue\">\r\n        <div class=\"radio-toggle\">\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"yes\"  (click)=\"addData(true);regularTeacher=true;showDropdown=true\">\r\n            </ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{yes}}\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"no\" \r\n              (click)=\"addData(false);regularTeacher=false;showDropdown=true\"></ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{no}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"checkedValue && regularTeacher && showDropdown\" lines=\"none\">\r\n      <p class=\"text-center mb-0\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{teacherEmisId}} ({{teacherDetails?.teacher_emisid}}) {{IsCorrect}}</p>\r\n      <ion-radio-group >\r\n        <div class=\"radio-toggle\">\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"true1\" (click)=\"proceedCheck('correct')\">\r\n            </ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{yes}}\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"false1\"\r\n              (click)=\"presentModald(teacherDetails.teacher_emisid,'count','ID','')\"></ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{no}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>    \r\n\r\n    <ion-list lines=\"none\">\r\n      <div *ngIf=\"regularTeacher && showDropdown\">\r\n        <p class=\"color-lgrey pl-3\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.emiIdVerify}}</p>\r\n\r\n        <ion-grid class=\"p-0\">\r\n          <ion-row>          \r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-text color=\"dark\" class=\"text-italic\">\r\n          <p *ngIf=\"this.languageType == 'en'\" class=\"fs-12 p-2\"><span>{{this.Note}}</span>: {{this.doIt}}\r\n            {{this.teacherDetails?.teacher_name}}'s {{this.takeAttendance}}</p>\r\n\r\n          <p *ngIf=\"this.languageType == 'ta'\" class=\"fs-12 p-2\"><span\r\n              [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.Note}}</span>:{{this.takeAttendance}}\r\n            {{this.teacherDetails?.teacher_name}} {{this.doIt}}</p>         \r\n        </ion-text>\r\n      </div>\r\n      <div *ngIf=\"regularTeacher ==false && showDropdown\">\r\n        <ion-item>\r\n          <div class=\"select_box\">\r\n            <select [(ngModel)]=\"selectedReason\" (change)=\"mySelectReason($event)\">\r\n              <option [ngValue]=\"selectedReason\" disabled selected>{{this.giveReason}}</option>\r\n              <option *ngFor=\"let reason_info of teacherReasons\" [ngValue]=\"reason_info.reason\">{{reason_info.reason}}\r\n              </option>\r\n              <option value=\"\">{{this.noneAbove}}</option>\r\n            </select>\r\n          </div>\r\n        </ion-item>\r\n        <ion-text color=\"dark\" class=\"text-italic\">\r\n          <p class=\"fs-12 p-2\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{Note}}</span>: Proceed to\r\n            {{teacherDetails.teacher_name}}’s class to take attendance</p>\r\n        </ion-text>\r\n\r\n      </div>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n<ion-footer style=\"height:50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backToEmiVerify()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToClassroom()\" [disabled]=\"btnDisabled\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">\r\n          {{this.start}}</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_teacher-selection_teacher-selection_module_ts-es2015.js.map