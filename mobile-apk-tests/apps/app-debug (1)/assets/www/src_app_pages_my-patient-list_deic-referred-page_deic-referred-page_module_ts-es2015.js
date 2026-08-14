(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_my-patient-list_deic-referred-page_deic-referred-page_module_ts"],{

/***/ 79950:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/my-patient-list/deic-referred-page/deic-referred-page-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeicReferredPagePageRoutingModule": function() { return /* binding */ DeicReferredPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _deic_referred_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deic-referred-page.page */ 26246);




const routes = [
    {
        path: '',
        component: _deic_referred_page_page__WEBPACK_IMPORTED_MODULE_0__.DeicReferredPagePage
    }
];
let DeicReferredPagePageRoutingModule = class DeicReferredPagePageRoutingModule {
};
DeicReferredPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DeicReferredPagePageRoutingModule);



/***/ }),

/***/ 80578:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/my-patient-list/deic-referred-page/deic-referred-page.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeicReferredPagePageModule": function() { return /* binding */ DeicReferredPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _deic_referred_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deic-referred-page-routing.module */ 79950);
/* harmony import */ var _deic_referred_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deic-referred-page.page */ 26246);







let DeicReferredPagePageModule = class DeicReferredPagePageModule {
};
DeicReferredPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _deic_referred_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeicReferredPagePageRoutingModule
        ],
        declarations: [_deic_referred_page_page__WEBPACK_IMPORTED_MODULE_1__.DeicReferredPagePage]
    })
], DeicReferredPagePageModule);



/***/ }),

/***/ 26246:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/my-patient-list/deic-referred-page/deic-referred-page.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeicReferredPagePage": function() { return /* binding */ DeicReferredPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_deic_referred_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./deic-referred-page.page.html */ 35888);
/* harmony import */ var _deic_referred_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deic-referred-page.page.scss */ 4193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _my_patient_view_modal_my_patient_view_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-patient-view-modal/my-patient-view-modal.page */ 313);
/* harmony import */ var _commonpages_summarypopuppage_summarypopuppage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../commonpages/summarypopuppage/summarypopuppage.page */ 74352);











let DeicReferredPagePage = class DeicReferredPagePage {
    constructor(router, alert, userService, alertService, usersessionService, modalCtrl) {
        this.router = router;
        this.alert = alert;
        this.userService = userService;
        this.alertService = alertService;
        this.usersessionService = usersessionService;
        this.modalCtrl = modalCtrl;
        this.expandedIndex = null;
        this.acYear = '2024-25';
        this.flag = '2';
        this.mhtOrAwc = 'mht';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        debugger;
        this.UserName = this.usersessionService.emis_username();
        var checkMyPatientViewType = localStorage.getItem('myPatientViewType');
        if (checkMyPatientViewType && checkMyPatientViewType != undefined) {
            this.myPatientViewType = JSON.parse(checkMyPatientViewType);
            this.fetchReferralData();
        }
        else {
            this.schoolAlert();
        }
    }
    onGoButton() {
        this.router.navigate(['/tabs/home']);
    }
    fetchReferralData() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.PhaseId = (this.flag == "1" && this.acYear === "2023-24") ? ["1", "2"] :
            (this.flag == "1" && this.acYear === "2024-25") ? ["3", "4"] : null;
        if (((_a = this.myPatientViewType) === null || _a === void 0 ? void 0 : _a.type) != 2 && ((_c = (_b = this.myPatientViewType) === null || _b === void 0 ? void 0 : _b.diagnosis) === null || _c === void 0 ? void 0 : _c.length) === 0) {
            this.userService.getDiagnosis(this.myPatientViewType.type).subscribe((res) => {
                var _a, _b, _c;
                if (res.dataStatus) {
                    this.myPatientViewType.diagnosis = res.result;
                }
                var data = {
                    records: {
                        "type": ((_a = this.myPatientViewType) === null || _a === void 0 ? void 0 : _a.type) ? (_b = this.myPatientViewType) === null || _b === void 0 ? void 0 : _b.type : 2,
                        "diagnosis": (_c = this.myPatientViewType) === null || _c === void 0 ? void 0 : _c.diagnosis,
                        "userName": this.UserName,
                        "acYear": this.acYear,
                        "phaseId": this.PhaseId,
                        "flag": this.flag
                    }
                };
                this.userService.getDEICStudents(data).subscribe((res) => {
                    if (res.result) {
                        this.referralData = res.result;
                    }
                    else {
                        this.referralData = [];
                        this.alertService.warning('No data found');
                    }
                });
            });
        }
        else {
            var data = {
                records: {
                    "type": ((_d = this.myPatientViewType) === null || _d === void 0 ? void 0 : _d.type) ? (_e = this.myPatientViewType) === null || _e === void 0 ? void 0 : _e.type : 2,
                    "diagnosis": (_g = (_f = this.myPatientViewType) === null || _f === void 0 ? void 0 : _f.diagnosis) === null || _g === void 0 ? void 0 : _g.map(item => item.value),
                    "userName": this.UserName,
                    "acYear": this.acYear,
                    "phaseId": this.PhaseId,
                    "flag": this.flag
                }
            };
            if (((_h = this.myPatientViewType) === null || _h === void 0 ? void 0 : _h.type) != 2) {
                this.userService.getDEICStudents(data).subscribe((res) => {
                    if (res.result) {
                        this.referralData = res.result;
                    }
                    else {
                        this.referralData = [];
                        this.alertService.warning('No data found');
                    }
                });
            }
            else {
                var data = {
                    records: {
                        "type": ((_j = this.myPatientViewType) === null || _j === void 0 ? void 0 : _j.type) ? (_k = this.myPatientViewType) === null || _k === void 0 ? void 0 : _k.type : 2,
                        "diagnosis": (_m = (_l = this.myPatientViewType) === null || _l === void 0 ? void 0 : _l.diagnosis) === null || _m === void 0 ? void 0 : _m.map(item => item.value),
                        "userName": this.UserName,
                        "acYear": this.acYear,
                        "phaseId": this.PhaseId,
                        "flag": this.flag
                    }
                };
                this.userService.getDEICStudents(data).subscribe((res) => {
                    if (res.result) {
                        this.referralData = res.result;
                    }
                    else {
                        this.referralData = [];
                        this.alertService.warning('No data found');
                    }
                });
            }
        }
    }
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _my_patient_view_modal_my_patient_view_modal_page__WEBPACK_IMPORTED_MODULE_5__.MyPatientViewModalPage,
                componentProps: { mhtOrAwc: this.mhtOrAwc },
                cssClass: 'fullscreen'
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            this.handleModalClose(data);
        });
    }
    handleModalClose(data) {
        if (data && data != undefined) {
            this.myPatientViewType = data;
            localStorage.removeItem('myPatientViewType');
            localStorage.setItem('myPatientViewType', JSON.stringify(data));
            this.fetchReferralData();
        }
    }
    toggleDetails(index) {
        this.expandedIndex = this.expandedIndex === index ? null : index;
    }
    onSelect(selectedValue) {
        this.acYear = selectedValue;
        this.fetchReferralData();
    }
    onTreatmentSelect(item, selectedValue) {
        let params = {
            "records": {
                "generalId": item.general_id,
                "studId": item.id,
                "rbskRemarks": selectedValue,
                "updatedBy": this.UserName
            }
        };
        this.userService.postDEICUpdateTreatmentStatus(params).subscribe((res) => {
            console.log(res);
            if (res.message) {
                console.log("inside");
                this.alertService.warning(res.message);
            }
            else {
                this.alertService.warning('Unable to update data');
            }
        });
    }
    onTypeSelect(flagging) {
        localStorage.removeItem('myPatientViewType');
        localStorage.setItem('myPatientViewType', JSON.stringify({ "type": "2", "diagnosis": [] }));
        var checkMyPatientViewType = localStorage.getItem('myPatientViewType');
        this.myPatientViewType = JSON.parse(checkMyPatientViewType);
        if (flagging === '1') {
            this.mhtOrAwc = 'Awc';
        }
        else {
            this.mhtOrAwc = 'mht';
        }
        this.flag = flagging;
        this.fetchReferralData();
    }
    openVisitStatusModal(record) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log("inside");
            this.userService.getDEICgetVisitedDate(record.id, this.flag).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (res.result) {
                    const modal = yield this.modalCtrl.create({
                        component: _commonpages_summarypopuppage_summarypopuppage_page__WEBPACK_IMPORTED_MODULE_6__.SummarypopuppagePage,
                        componentProps: {
                            schoolname: record.Name,
                            reportname: 'Visit report',
                            items: res.result.map(item => ({
                                date: item.visited_date,
                                date_ts: item.visited_date,
                            }))
                        },
                        cssClass: 'view-image-modal_capturedimage',
                        backdropDismiss: true,
                    });
                    yield modal.present();
                }
                else {
                    this.alert.error('No data found');
                }
            }));
        });
    }
};
DeicReferredPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
DeicReferredPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-deic-referred-page',
        template: _raw_loader_deic_referred_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_deic_referred_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeicReferredPagePage);



/***/ }),

/***/ 4193:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/my-patient-list/deic-referred-page/deic-referred-page.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\n}\n\nion-card-header {\n  background: #8b67b3;\n  color: white;\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\nion-col {\n  padding: 8px;\n  font-size: 0.95em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlaWMtcmVmZXJyZWQtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJkZWljLXJlZmVycmVkLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGI2N2IzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBpb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 35888:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-patient-list/deic-referred-page/deic-referred-page.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">My patient list</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"secondary\">\r\n  <div>\r\n    <ion-item style=\"background-color: white;margin: 20px;border-radius: 18px;font-size: 20px;font-weight: bold;\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"6\">\r\n          <ion-label>Filter by</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" style=\"display: flex; align-items: center; justify-content: end;\" (click)=\"schoolAlert()\">\r\n          <ion-label>{{(myPatientViewType?.type == 'D1' || myPatientViewType?.type == 'D2' || myPatientViewType?.type == 'D3' || myPatientViewType?.type == 'D4') ? (myPatientViewType?.type + ' filter') : myPatientViewType?.type == '1' ? ('All Diagnosis filter') : 'No filter'}}</ion-label>\r\n          <ion-icon name=\"caret-down-outline\" style=\"font-size: 12px; color: #808080ba; margin-left: 3px;\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item style=\"background-color: white;margin: 20px;border-radius: 18px;font-size: 20px;font-weight: bold;\">\r\n      <ion-label>Academic Year</ion-label>\r\n      <ion-select label-placement=\"stacked\" [(ngModel)]=\"acYear\" (ngModelChange)=\"onSelect($event)\" placeholder=\"Select AY\">\r\n        <ion-select-option value=\"2023-24\">2023-24</ion-select-option>\r\n        <ion-select-option value=\"2024-25\">2024-25</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item style=\"background-color: white;margin: 20px;border-radius: 18px;font-size: 20px;font-weight: bold;\">\r\n      <ion-label>Type of child</ion-label>\r\n      <ion-select label-placement=\"stacked\" [(ngModel)]=\"flag\" (ngModelChange)=\"onTypeSelect($event)\" placeholder=\"Select Type\">\r\n        <ion-select-option value=\"1\">AWC</ion-select-option>\r\n        <ion-select-option value=\"2\">MHT</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </div>\r\n  <ion-list>\r\n    <div\r\n    style=\"padding: 5px;text-align: center;background-color: rgb(104, 82, 156);color: white;font-weight: bold;border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n    <ion-label>\r\n      List of children\r\n    </ion-label>\r\n  </div>\r\n    <ng-container *ngFor=\"let record of referralData; let i = index\">\r\n      <!-- List Item -->\r\n      <ion-item (click)=\"toggleDetails(i)\">\r\n        <ion-label>\r\n          {{ i+1 }}. {{ record.Name }}</ion-label>\r\n        <ion-icon [name]=\"expandedIndex === i ? 'chevron-up' : 'chevron-down'\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <!-- Details Card -->\r\n      <ion-card *ngIf=\"expandedIndex === i\">\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Visited Status:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.Visitstu ? record.Visitstu : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>School Name:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.school_name ? record.school_name : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Age:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.age ? record.age : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Phone Number:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.PhnNmbr ? record.PhnNmbr : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Provisional Diagnosis:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.GeneralHealth ? record.GeneralHealth : '-'}}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Treatment Required:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.students_treatment_details?.length > 0 && record.students_treatment_details[0]?.trmt_req == 1 ? 'Medical Management' : record.students_treatment_details[0]?.trmt_req == 2 ? 'Surgical Management' : '-'}}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Treatment Name:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.students_treatment_details?.length > 0 && record.students_treatment_details[0]?.med_trmt_name ? record.students_treatment_details[0]?.med_trmt_name : record.students_treatment_details[0]?.sur_name ? record.students_treatment_details[0]?.sur_name : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Status:</strong></ion-col>\r\n              <ion-col size=\"8\">{{record.med_status == 1? 'Initiated' : record.med_status ==\r\n                2? 'On treatment' : record.med_status == 3? 'Completed' : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Referral To:</strong></ion-col>\r\n              <ion-col size=\"8\">{{record.students_treatment_details?.length > 0 && record.students_treatment_details[0]?.referral_option == 1? 'Govt' :\r\n                record.students_treatment_details[0]?.referral_option == 2? 'DEIC' : \r\n                record.students_treatment_details[0]?.referral_option == 3? 'Private' : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Reason for Referral:</strong></ion-col>\r\n              <ion-col size=\"8\">{{record.students_treatment_details?.length > 0 && record.students_treatment_details[0]?.referral_reason == 1? 'Confirmation of Diagnosis' :\r\n                record.students_treatment_details[0]?.referral_reason == 2? 'Co-morbid condition(specify)' : record.students_treatment_details[0]?.referral_reason == 3? 'Expert opinion' : \r\n                record.students_treatment_details[0]?.referral_reason == 4? 'Further investigations(Lab/ECHO/X-Ray/Blood/OAE/BERA)' : record.students_treatment_details[0]?.referral_reason == 5? 'Surgical Mangement' :\r\n                record.students_treatment_details[0]?.referral_reason == 6? 'Therapy Intervention(Speech/Physio/Counselling/Early intervention)': record.students_treatment_details[0]?.referral_reason == 7? 'Others' : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Follow Up Visit:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.students_treatment_details?.length > 0 && record.students_treatment_details[0]?.follow_up_visit != '0000-00-00' \r\n                && record.students_treatment_details[0]?.follow_up_visit ? (record.students_treatment_details[0]?.follow_up_visit | date: 'dd-MM-yyyy') : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Date of Visit:</strong></ion-col>\r\n              <ion-col size=\"7\">{{ record.visited_date ? record.visited_date : '-'}}</ion-col>\r\n              <ion-col size=\"1\" *ngIf=\"record.Visitstu == 'visited'\"><ion-icon (click)=\"openVisitStatusModal(record);$event.stopPropagation()\" name=\"eye\" style=\"font-size: 20px; color: #8b67b3;\"></ion-icon></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Diagnosis/Treatment Received:</strong></ion-col>\r\n              <ion-col size=\"8\">{{ record.students_treatment_details?.length > 0 && record.diagnosis_received ? record.diagnosis_received : '-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"4\"><strong>Outcome Status:</strong></ion-col>\r\n              <ion-col size=\"8\">\r\n                {{ record.OutcomeStatus == 1 ? 'Treatment completed' : record.OutcomeStatus == 2 ? 'On Medical Management': \r\n                record.OutcomeStatus == 3 ? 'On Surgical Management' : record.OutcomeStatus == 4 ? 'Surgery planned on':\r\n                record.OutcomeStatus == 5 ? 'Not willing for Surgery' : record.OutcomeStatus == 6 ? 'Surgery Follow up at Private':\r\n                record.OutcomeStatus == 7 ? 'Others' : record.OutcomeStatus == 8 ? 'Death':\r\n                record.OutcomeStatus == 9 ? 'Migration' : record.OutcomeStatus == 10 ? 'Under observation & follow up':'-' }}</ion-col>\r\n            </ion-row>\r\n            <ion-row *ngIf=\"record.general_id\">\r\n              <ion-col size=\"4\"><strong>Doctor updation of child status:</strong></ion-col>\r\n              <ion-col size=\"8\">\r\n                <ion-select label-placement=\"stacked\" [(ngModel)]=\"record.students_treatment_details[0].rbsk_remarks\" (ngModelChange)=\"onTreatmentSelect(record,$event)\" placeholder=\"Select Treatment\">\r\n                  <ion-select-option value=\"1\">Treatment Completed</ion-select-option>\r\n                  <ion-select-option value=\"2\">Surgery required</ion-select-option>\r\n                  <ion-select-option value=\"3\">Treatment inprogress</ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ng-container>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_my-patient-list_deic-referred-page_deic-referred-page_module_ts-es2015.js.map