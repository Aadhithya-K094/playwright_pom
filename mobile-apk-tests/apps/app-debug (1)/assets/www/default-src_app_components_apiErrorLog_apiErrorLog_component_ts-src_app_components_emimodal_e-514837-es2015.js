(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"],{

/***/ 98747:
/*!*****************************************************************!*\
  !*** ./src/app/components/apiErrorLog/apiErrorLog.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiErrorLogComponent": function() { return /* binding */ ApiErrorLogComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_apiErrorLog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./apiErrorLog.component.html */ 70074);
/* harmony import */ var _apiErrorLog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiErrorLog.component.scss */ 49921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);









let ApiErrorLogComponent = class ApiErrorLogComponent {
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
            this.viewName = JSON.parse(localStorage.getItem('Error'));
            console.log(this.viewName);
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
            if (submittedData != "Cancel" && this.viewName == "view1") {
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
ApiErrorLogComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService }
];
ApiErrorLogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-apiErrorLog",
        template: _raw_loader_apiErrorLog_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_apiErrorLog_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ApiErrorLogComponent);



/***/ }),

/***/ 79615:
/*!***********************************************************!*\
  !*** ./src/app/components/emimodal/emimodal.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmimodalComponent": function() { return /* binding */ EmimodalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_emimodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emimodal.component.html */ 62040);
/* harmony import */ var _emimodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emimodal.component.scss */ 67841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let EmimodalComponent = class EmimodalComponent {
    constructor(modalController, navParams, _alerService, _apiService, _translate) {
        this.modalController = modalController;
        this._alerService = _alerService;
        this._apiService = _apiService;
        this._translate = _translate;
        this.listedValue = navParams.get("listedValue");
        this.actualValue = navParams.get("actualValue");
        this.divisionType = navParams.get("divisionType");
        this.correction = navParams.get("correction");
        this.showCategory = navParams.get("showCategory");
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
        this._translate.get("correctionIn").subscribe((res) => {
            this.correctionIn = res;
        });
        this._translate.get("listed_Value").subscribe((res) => {
            this.listed_Value = res;
        });
        this._translate.get("actual_Value").subscribe((res) => {
            this.actual_Value = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("submit").subscribe((res) => {
            this.submit = res;
        });
        this._translate.get("chooseItem").subscribe((res) => {
            this.chooseItem = res;
        });
    }
    mySelectHandler(selectedValue) {
        this.selectedValue = selectedValue;
    }
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (data != "Cancel") {
                const correctedValue = data;
                if (correctedValue != undefined) {
                    yield this.modalController.dismiss(correctedValue);
                }
                else {
                    this._alerService.showAlert(null, "Please fill the actual value");
                }
            }
            else {
                yield this.modalController.dismiss(data);
            }
        });
    }
};
EmimodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService }
];
EmimodalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-emimodal",
        template: _raw_loader_emimodal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emimodal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmimodalComponent);



/***/ }),

/***/ 26463:
/*!***************************************************************************************!*\
  !*** ./src/app/components/observationfinalremark/observationfinalremark.component.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservationfinalremarkComponent": function() { return /* binding */ ObservationfinalremarkComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_observationfinalremark_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./observationfinalremark.component.html */ 64070);
/* harmony import */ var _observationfinalremark_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observationfinalremark.component.scss */ 11556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);








let ObservationfinalremarkComponent = class ObservationfinalremarkComponent {
    constructor(modalController, _apiService, navParams, _translate, _router) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this._translate = _translate;
        this._router = _router;
        this.showTextarea = false;
        this.submitted = false;
        this.remarks = '';
        // this.teacherDetails = navParams.get("teacherDetails");
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
            localStorage.setItem("finalobserverfeedbacks", this.remarks);
            const onClosedData = "Wrapped Up!";
            let body1 = document.getElementsByTagName("ion-modal")[0];
            body1.classList.remove("new-info");
            yield this.modalController.dismiss(this.remarks);
            this.showTextarea = false;
            // this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "pre_obs_qns_section_status": localStorage.setItem("pre_obs_qns_section_status", "1")}}])
        });
    }
    getRemarks(remarks) {
        this.remarks = remarks;
    }
    addClass() {
        this._apiService.setName("showText");
    }
};
ObservationfinalremarkComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ObservationfinalremarkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-observationfinalremark',
        template: _raw_loader_observationfinalremark_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_observationfinalremark_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ObservationfinalremarkComponent);



/***/ }),

/***/ 69564:
/*!*********************************************************!*\
  !*** ./src/app/services/tnvn/services/alert.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": function() { return /* binding */ AlertService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 65481);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 34255);






let AlertService = class AlertService {
    constructor(alertController, apiService, _translate, toastController, diagnostic) {
        this.alertController = alertController;
        this.apiService = apiService;
        this._translate = _translate;
        this.toastController = toastController;
        this.diagnostic = diagnostic;
        this.appLanguage();
    }
    appLanguage() {
        this.apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("ok").subscribe((res) => {
            this.ok = res;
        });
    }
    showAlert(alertInfo = "", message = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: alertInfo,
                message: message,
                buttons: [{ text: this.ok }],
            });
            yield alert.present();
        });
    }
    toast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
                color: 'success'
            });
            toast.present();
        });
    }
    customtoast(message, time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: time
            });
            toast.present();
        });
    }
    info(message) {
        this.toast(message);
    }
    custommessage(message, time) {
        this.customtoast(message, time);
    }
    warning(message) {
        this.toast(message);
    }
    success(message, keepAfterNavigationChange = false) {
        this.toast(message);
    }
    alert(message) {
        this.toast(message);
    }
    error(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                color: 'danger',
                duration: 2000
            });
            toast.present();
        });
    }
    alertWhite(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    alertToTurnOnPermission(headerMsg, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `Need ${headerMsg} Permission`,
                message: `This app need to access ${message} in order to use this feature. Go to settings and turn on ${message} permission manually.`,
                buttons: [{
                        text: 'Cancel',
                        cssClass: 'alert-btn alert-cancel-btn',
                        handler: () => {
                        }
                    }, {
                        text: 'Go to settings',
                        cssClass: 'alert-btn alert-yes-btn',
                        handler: () => {
                            this.diagnostic.switchToSettings();
                        }
                    }],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_1__.Diagnostic }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root",
    })
], AlertService);



/***/ }),

/***/ 49921:
/*!*******************************************************************!*\
  !*** ./src/app/components/apiErrorLog/apiErrorLog.component.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress {\n  background-color: none;\n}\n\n.last-row {\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  line-height: 1.5;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaUVycm9yTG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoiYXBpRXJyb3JMb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG59XHJcbi5sYXN0LXJvd3sgIFxyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7ICAgIFxyXG4gIH0iXX0= */");

/***/ }),

/***/ 67841:
/*!*************************************************************!*\
  !*** ./src/app/components/emimodal/emimodal.component.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myModal {\n  width: auto !important;\n  margin: 0 auto;\n  bottom: auto !important;\n  bottom: initial !important;\n  max-height: none !important;\n  max-height: initial !important;\n  height: auto !important;\n  min-height: 0 !important;\n  min-height: initial !important;\n}\n.myModal ion-content {\n  position: relative;\n  bottom: auto;\n  bottom: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSwwQkFBQTtFQUVBLDJCQUFBO0VBQUEsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQUEsOEJBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQUEsZUFBQTtBQUFSIiwiZmlsZSI6ImVtaW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15TW9kYWx7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuXHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiBpbml0aWFsO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 11556:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/observationfinalremark/observationfinalremark.component.scss ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-area {\n  border: 2px solid;\n  min-height: 250px;\n  font-size: 18px;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uZmluYWxyZW1hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJvYnNlcnZhdGlvbmZpbmFscmVtYXJrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYXJlYSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ 70074:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/apiErrorLog/apiErrorLog.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>  \r\n  <div >\r\n    <ion-icon name=\"close-circle\" style=\"float: right;font-size:30px\" (click)=\"dismiss(ok)\"></ion-icon>\r\n  </div>\r\n  <div style=\"text-align: center;margin: 10px;\">     \r\n    <ion-text >\r\n      <div [innerHTML]=\"viewName.error\"></div>\r\n    </ion-text>\r\n  </div>\r\n  <div  class=\"d-flex justify-content-center\">      \r\n    <ion-button class=\"btn_modal-success\" (click)=\"dismiss('ok')\"\r\n      [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-11': this.languageType == 'ta','modal-btn-w-50': this.languageType == 'ta'}\">\r\n      ok</ion-button>\r\n  </div>   \r\n</ion-content>");

/***/ }),

/***/ 62040:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/emimodal/emimodal.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">              \r\n      <p>{{this.correctionIn}} {{correction!= 'undefined'? this.showCategory:'None'}}</p>\r\n    </ion-text>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label><span [ngClass]=\"{'ta-font': this.languageType === 'ta'}\"> {{this.listed_Value}}</span> :<br>{{listedValue}} </ion-label>              \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label><span [ngClass]=\"{'ta-font': this.languageType === 'ta'}\">{{this.actual_Value}}</span> : <br>                  \r\n        <div *ngIf=\"!(divisionType === 'teacher_count' || divisionType === 'student_count' || divisionType === 'count')\" class=\"select_box\">\r\n          <select ngModel (ngModelChange)=\"mySelectHandler($event)\">\r\n            <option value=\"\" disabled selected hidden>{{this.chooseItem}}</option>                    \r\n            <option *ngFor=\"let data of actualValue\" [ngValue]=\"data\">{{data.item}}</option>      \r\n          </select>\r\n        </div>\r\n        <div  *ngIf=\"(divisionType === 'teacher_count' || divisionType === 'student_count' || divisionType === 'count')\" class=\"input-icons\">\r\n          <input type=\"number\" name=\"lname\" class=\"w-100\" [(ngModel)]=\"this.selectedValue\" [placeholder]=\"this.actual_Value\"/>                  \r\n        </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      \r\n    </ion-list>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <ion-button class=\"btn_modal-cancel\" (click)=\"dismiss('Cancel')\"  [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">{{this.cancel}}</ion-button>\r\n      <ion-button  class=\"btn_modal-success\" (click)=\"dismiss(this.selectedValue)\"  [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">{{this.submit}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 64070:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/observationfinalremark/observationfinalremark.component.html ***!
  \*******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p> \r\n        <span\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType === 'ta',\r\n            'fs-9': this.languageType === 'ta'\r\n          }\"\r\n          ><b>Observer Final Feedbacks (if any)</b></span\r\n        >\r\n      </p>\r\n    </ion-text>\r\n   \r\n    <div class=\"text-center\">\r\n      \r\n        <textarea auto-grow=\"true\" placeholder=\"Enter your feedbacks (max 200 characters)\" class=\"text-area\"\r\n          (change)=\"getRemarks($event.target.value)\" rows=\"6\"></textarea>\r\n      \r\n     \r\n\r\n      <ion-button\r\n        style=\"color:#fff\"        \r\n        (click)=\"dismiss()\"\r\n        class=\"br-30\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-12': this.languageType === 'ta'\r\n        }\"\r\n        ><b>{{ this.submit }}</b></ion-button>\r\n        <ion-text color=\"dark\" class=\"text-italic\">\r\n          <p class=\"fs-12 p-2\"><span>Note</span>:If no feedbacks, click on submit to proceed</p>\r\n        </ion-text>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837-es2015.js.map