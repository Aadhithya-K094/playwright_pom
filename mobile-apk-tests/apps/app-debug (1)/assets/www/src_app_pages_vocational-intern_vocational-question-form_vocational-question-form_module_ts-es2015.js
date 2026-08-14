(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vocational-intern_vocational-question-form_vocational-question-form_module_ts"],{

/***/ 74319:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocationalQuestionFormPageRoutingModule": function() { return /* binding */ VocationalQuestionFormPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _vocational_question_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocational-question-form.page */ 5579);




const routes = [
    {
        path: '',
        component: _vocational_question_form_page__WEBPACK_IMPORTED_MODULE_0__.VocationalQuestionFormPage
    }
];
let VocationalQuestionFormPageRoutingModule = class VocationalQuestionFormPageRoutingModule {
};
VocationalQuestionFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VocationalQuestionFormPageRoutingModule);



/***/ }),

/***/ 39364:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocationalQuestionFormPageModule": function() { return /* binding */ VocationalQuestionFormPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _vocational_question_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vocational-question-form-routing.module */ 74319);
/* harmony import */ var _vocational_question_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vocational-question-form.page */ 5579);







let VocationalQuestionFormPageModule = class VocationalQuestionFormPageModule {
};
VocationalQuestionFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vocational_question_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.VocationalQuestionFormPageRoutingModule
        ],
        declarations: [_vocational_question_form_page__WEBPACK_IMPORTED_MODULE_1__.VocationalQuestionFormPage]
    })
], VocationalQuestionFormPageModule);



/***/ }),

/***/ 5579:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.page.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VocationalQuestionFormPage": function() { return /* binding */ VocationalQuestionFormPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_vocational_question_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vocational-question-form.page.html */ 9335);
/* harmony import */ var _vocational_question_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vocational-question-form.page.scss */ 17428);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);









let VocationalQuestionFormPage = class VocationalQuestionFormPage {
    constructor(router, route, userService, userSessionService, datePipe, alertservice) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.userSessionService = userSessionService;
        this.datePipe = datePipe;
        this.alertservice = alertservice;
        this.userName = this.userSessionService.emis_username();
        let current_date = new Date();
        this.currentDate = this.datePipe.transform(current_date, 'yyyy-MM-dd');
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.industryDet = JSON.parse(params['data']);
            this.alldata = JSON.parse(params['alldata']);
            this.selectedDate = JSON.parse(params['selectedDate']);
            this.vocationalId = this.industryDet.id;
            console.log(this.industryDet, this.alldata);
        });
        this.questionGet();
    }
    ionViewDidEnter() {
        this.questionGet();
    }
    questionGet() {
        this.reason = null;
        this.questionList = [];
        this.userService.baseQuestionGet().subscribe(res => {
            if (res.dataStatus) {
                this.questionList = res.result;
                if (this.questionList) {
                    this.questionList = this.questionList.filter((x) => x.language == 1);
                    this.questionList.forEach(element => {
                        element.selectedQuesId = null;
                    });
                    this.calldataAPI();
                }
            }
        });
    }
    calldataAPI() {
        let data = {
            'selectedDate': this.selectedDate,
            'vocIndexId': this.vocationalId
        };
        this.insertValue = [];
        this.showSubmit = true;
        this.userService.VOCFormGet(data).subscribe(res => {
            if (res.dataStatus) {
                this.insertValue = res.result;
                this.showSubmit = false;
                if (this.questionList) {
                    for (let i = 0; i < this.questionList.length; i++) {
                        for (let j = 0; j < this.insertValue.length; j++) {
                            if (this.questionList[i].id == this.insertValue[j].answer_id) {
                                this.questionList[i].selectedQuesId = 1;
                                this.reason = this.insertValue[j].recommendation;
                            }
                        }
                    }
                }
            }
            else {
                this.showSubmit = true;
            }
            if (this.currentDate < this.selectedDate || this.currentDate > this.selectedDate) {
                this.showSubmit = false;
            }
        });
    }
    selectedQuesId(data, index) {
        for (let i = 0; i < this.questionList.length; i++) {
            if (this.questionList[i].ques_id == data.ques_id) {
                this.questionList[i].selectedQuesId = null;
            }
        }
        this.questionList[index].selectedQuesId = 1;
    }
    goBack() {
        this.router.navigate(["/tabs/vocational-industry-detail"], { queryParams: { 'data': JSON.stringify(this.alldata) } });
    }
    onKeyup(event, i) {
        console.log(event.target.value, "event");
        this.reason = event.target.value;
        this.questionList[i].selectedQuesId = 1;
    }
    save() {
        this.finalrecords = [];
        this.finalData = this.questionList.filter((x) => x.selectedQuesId == 1);
        console.log(this.finalData, "final");
        if (this.finalData.length == 11) {
            if (this.reason != '' && this.reason != null && this.reason != undefined) {
            }
            else {
                this.alertservice.error('Please enter the recommndation');
            }
        }
        else if (this.finalData.length == 12) {
            if (this.reason != '' && this.reason != null && this.reason != undefined) {
                //save api
                this.alertservice.success('Success');
                this.finalrecords = this.finalData.map(item => {
                    return {
                        'id': "",
                        'voc_index_id': this.vocationalId,
                        'quesId': item.ques_id == '0' ? item.id : item.ques_id,
                        'answerId': item.id,
                        'recommendation': item.id == '43' ? this.reason : item.id == '86' ? this.reason : '',
                        'statusBy': this.userName,
                        'entry_date': this.selectedDate,
                        'isactive': 1
                    };
                });
                console.log(this.finalrecords, "this.finalrecords");
                this.userService.VOCFormCud({ "records": this.finalrecords }).subscribe(res => {
                    if (res.dataStatus) {
                        this.alertservice.success('Form Submitted Successfully');
                        this.goBack();
                    }
                    else {
                        this.alertservice.error('Please check the filled data');
                    }
                });
            }
            else {
                this.alertservice.error('Please enter the recommndation');
            }
        }
        else {
            this.alertservice.error('Please Select the missing fields');
        }
    }
};
VocationalQuestionFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
VocationalQuestionFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-vocational-question-form',
        template: _raw_loader_vocational_question_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vocational_question_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VocationalQuestionFormPage);



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

/***/ 17428:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.page.scss ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-clr {\n  background-color: #f4eaff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvY2F0aW9uYWwtcXVlc3Rpb24tZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InZvY2F0aW9uYWwtcXVlc3Rpb24tZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY2xye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWFmZjtcclxuICAgIC8vIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ 9335:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.page.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Form Details</ion-title>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"Div_style\">\r\n        <div class=\"card-text text-center\">\r\n          <ion-label class=\"schoolnames ion-card-margin-top-bottom\"><b>Monitoring Visit - Question</b></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"cards ion-card-clr bg-clr\" *ngIf=\"questionList.length > 0\">\r\n      <ng-container *ngFor=\"let item1 of questionList;let i=index;\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"Div_style\">\r\n            <ion-label class=\"schoolnames head\" *ngIf=\"item1.ques_id == 0\"><b>{{item1.ques_no}} . {{item1.name}} <span style=\"color: red;\">*</span></b></ion-label>\r\n            <div class=\"Div_style\" style=\"padding-left: 40px;\" *ngIf=\"item1.ques_id != 0\">\r\n              <!-- Bind a separate selected value for each question -->\r\n              <ion-radio-group [(ngModel)]=\"item1.selectedQuesId\" [disabled]=\"insertValue.length > 0\">\r\n                <ion-item lines=\"none\" class=\"item-style ml-2\" style=\"font-size: 12px;\">\r\n                  <ion-radio [value]=\"item1.selectedQuesId\" class=\"item1.id\" (click)=\"selectedQuesId(item1,i)\" [disabled]=\"insertValue.length > 0\"></ion-radio>\r\n                  <span class=\"radio\">{{item1.name}}</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </div>\r\n            <div class=\"Div_style mt-2\" style=\"padding-left: 40px;margin-bottom: 10px;\" *ngIf=\"(item1.id == '43' || item1.id == '86')\">\r\n              <ion-label class=\"schoolnames head\" >\r\n                <ion-item>\r\n                  <ion-input\r\n                    #other\r\n                    autofocus=\"true\"\r\n                    placeholder=\"Enter the Recommendation\"\r\n                    required=\"true\"\r\n                    (keyup)=\"onKeyup($event,i)\"\r\n                    value=\"{{this.reason}}\"\r\n                    [disabled]=\"insertValue.length > 0\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n                <!-- <div class=\"error errorMessage\" *ngIf=\"showInput && showErrorMessage\">\r\n                  Please type the reason for mismatch\r\n                </div> -->\r\n              </ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ng-container>\r\n\r\n      <ion-row *ngIf=\"showSubmit\">\r\n        <ion-col size=\"12\" style=\"text-align: center; margin-top: 10px;\">\r\n          <div style=\"text-align: center;\" (click)=\"save()\" >\r\n            <button class=\"btn\" style=\"background-color: #8B67B3; border-radius: 10px;color: white;\">Submit</button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card>\r\n  \r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vocational-intern_vocational-question-form_vocational-question-form_module_ts-es2015.js.map