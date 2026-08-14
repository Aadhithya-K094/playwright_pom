(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_hod_questions_questions_module_ts"],{

/***/ 90055:
/*!*****************************************************************!*\
  !*** ./src/app/pages/hod/questions/questions-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPageRoutingModule": function() { return /* binding */ QuestionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.page */ 9288);




const routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_0__.QuestionsPage
    }
];
let QuestionsPageRoutingModule = class QuestionsPageRoutingModule {
};
QuestionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuestionsPageRoutingModule);



/***/ }),

/***/ 87890:
/*!*********************************************************!*\
  !*** ./src/app/pages/hod/questions/questions.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPageModule": function() { return /* binding */ QuestionsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-routing.module */ 90055);
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.page */ 9288);







let QuestionsPageModule = class QuestionsPageModule {
};
QuestionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuestionsPageRoutingModule
        ],
        declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_1__.QuestionsPage]
    })
], QuestionsPageModule);



/***/ }),

/***/ 9288:
/*!*******************************************************!*\
  !*** ./src/app/pages/hod/questions/questions.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionsPage": function() { return /* binding */ QuestionsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./questions.page.html */ 64786);
/* harmony import */ var _questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions.page.scss */ 75010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/aws.service */ 56263);












let QuestionsPage = class QuestionsPage {
    constructor(router, fb, geolocation, alertService, userSessionService, utilityService, route, awsService) {
        this.router = router;
        this.fb = fb;
        this.geolocation = geolocation;
        this.alertService = alertService;
        this.userSessionService = userSessionService;
        this.utilityService = utilityService;
        this.route = route;
        this.awsService = awsService;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US');
        this.saveActive = false;
    }
    ngOnInit() {
        this.initialValidator();
        this.getLatLong();
    }
    ionViewDidEnter() {
        this.today = new Date();
        this.todayDate = this.pipe.transform(this.today, 'yyyy-MM-dd');
        this.routeData = this.route.snapshot;
        this.Id = this.routeData.queryParams.Id;
        this.schoolId = this.routeData.queryParams.schoolId;
        this.class4 = this.routeData.queryParams.class4;
        this.class9 = this.routeData.queryParams.class9;
        this.cattyId = this.routeData.queryParams.CattyId;
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emis_user_id = this.userSessionService.emis_user_id();
        this.emis_username = this.userSessionService.emis_username();
        this.saveActive = false;
        this.getSurveyQuestionsbyId();
    }
    initialValidator() {
        this.form = this.fb.group({
            survey_question: this.fb.array([]),
        });
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.locationCordinates = resp.coords;
            this.lat = this.locationCordinates.latitude;
            this.long = this.locationCordinates.longitude;
        }).catch((error) => {
            // console.log('Error getting location', error);
        });
    }
    getSurveyQuestionsbyId() {
        this.finaldata = [];
        this.awsService.getSurveyQuestions(1006).subscribe(res => {
            if (res) {
                this.data = res;
                if (this.data.length > 0) {
                    this.noDataFound = false;
                }
                else {
                    this.noDataFound = true;
                }
                // this.headingList = Array.from(new Set(this.data.map(s => s.Q_GtropTxt)))
                //   .map(ClsID => {
                //     return {
                //       Q_GtropTxt: ClsID,
                //     }
                //   });
                this.headingList = this.data.map(item => item.Q_GtropTxt)
                    .filter((value, index, self) => self.indexOf(value) === index);
                this.headingListIndex = this.headingList[0];
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].UserTyp.indexOf(',') != -1) {
                        this.valuedata = this.data[i];
                        var users = this.data[i].UserTyp.split(',');
                        for (let j = 0; j < users.length; j++) {
                            this.quesdata = {
                                "QuestID": this.valuedata.QuestID,
                                "Quest": this.valuedata.Quest,
                                "QuestTyp": this.valuedata.QuestTyp,
                                "Q_Group": this.valuedata.Q_Group,
                                "Q_GtropTxt": this.valuedata.Q_GtropTxt,
                                "UserTyp": users[j],
                                "SchoolTypeID": this.valuedata.SchoolTypeID,
                                "SchoolCattyID": this.valuedata.SchoolCattyID,
                                "minlength": this.valuedata.minlength,
                                "maxlength": this.valuedata.maxlength,
                                "survey_id": this.valuedata.survey_id,
                                "required": this.valuedata.required
                            };
                            this.finaldata.push(this.quesdata);
                        }
                    }
                    else {
                        this.finaldata.push(this.data[i]);
                    }
                    this.getSurveyQuestions();
                }
            }
            else {
                this.noDataFound = true;
            }
        });
    }
    getSurveyQuestions() {
        this.filterData = this.finaldata;
        this.onHODQuestions(this.filterData);
    }
    onHODQuestions(item) {
        const control = this.form.controls['survey_question'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = this.form.controls.survey_question;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist.push(this.fb.group({
                    IndxID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                    SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.schoolId, null),
                    AllotYr: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                    SurId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].survey_id, null),
                    SurDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.todayDate, null),
                    QId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].QuestID, null),
                    ResInt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                    ResChar: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                    Remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
                    Lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.lat, null),
                    Long: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.long, null),
                    CreationUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.emis_username, null),
                    EmisUserID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.emis_user_id, null),
                    EmisUserTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.emis_usertype, null),
                    ActSts: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(1, null),
                    Q_Group: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].Q_Group, null),
                    Q_GtropTxt: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].Q_GtropTxt, null),
                    Quest: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].Quest, null),
                    QuestTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].QuestTyp, null),
                    min: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].minlength, null),
                    max: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].maxlength, null),
                    UserTyp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(item[i].UserTyp, null)
                }));
                if (this.queslist.value[i]['ResInt'] == null || this.queslist.value[i]['ResInt'] == 1 || this.queslist.value[i]['ResInt'] == "") {
                    this.form.controls['survey_question']['controls'][i].controls['ResInt'].setValue('1');
                }
                else {
                    this.form.controls['survey_question']['controls'][i].controls['ResInt'].setValue('2');
                }
                if (this.queslist.value[i]['QuestTyp'] == 2 && (this.queslist.value[i]['QId'] == 1050 || this.queslist.value[i]['QId'] == 1040)) {
                    this.form.controls['survey_question']['controls'][i].controls['ResInt'].setValue('0');
                    this.form.controls['survey_question']['controls'][i].controls['ResChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                }
                else {
                    this.form.controls['survey_question']['controls'][i].controls['ResChar'].setValue('');
                    this.form.controls['survey_question']['controls'][i].controls['ResChar'].setValidators(null);
                }
                this.form.controls['survey_question']['controls'][i].controls['ResChar'].updateValueAndValidity();
                if (this.cattyId == 1 || this.cattyId == 2 || this.cattyId == 3) {
                    if (this.queslist.value[i]['QuestTyp'] == 1 && (this.queslist.value[i]['QId'] == 1047 || this.queslist.value[i]['QId'] == 1048)) {
                        this.form.controls['survey_question']['controls'][i].controls['ResInt'].setValue('');
                        this.form.controls['survey_question']['controls'][i].controls['ResChar'].setValue('');
                    }
                }
                if (this.queslist.value[i]['QId'] == 1053 || this.queslist.value[i]['QId'] == 1054 || this.queslist.value[i]['QId'] == 1055 || this.queslist.value[i]['QId'] == 1056) {
                    this.form.controls['survey_question']['controls'][i].controls['ResInt'].setValue('0');
                }
            }
        }
    }
    onRadioChange(event, index, qid) {
        this.isCheck = event.detail.value;
        if (qid == 1038) {
            if (this.isCheck == 2) {
                this.reasonActive = true;
                this.form.controls['survey_question']['controls'][index].controls['ResChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }
            else {
                this.reasonActive = false;
                this.form.controls['survey_question']['controls'][index].controls['ResChar'].setValidators(null);
                this.form.controls['survey_question']['controls'][index].controls['ResChar'].setValue("");
            }
            this.form.controls['survey_question']['controls'][index].controls['ResChar'].updateValueAndValidity();
        }
        if (qid == 1052) {
            if (this.isCheck == 2) {
                this.toiletActive = true;
                this.form.controls['survey_question']['controls'][index + 1].controls['ResInt'].setValue('0');
                this.form.controls['survey_question']['controls'][index + 2].controls['ResInt'].setValue('0');
                this.form.controls['survey_question']['controls'][index + 3].controls['ResInt'].setValue('0');
                this.form.controls['survey_question']['controls'][index + 4].controls['ResInt'].setValue('0');
                this.form.controls['survey_question']['controls'][index + 1].controls['ResChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.form.controls['survey_question']['controls'][index + 2].controls['ResChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.form.controls['survey_question']['controls'][index + 3].controls['ResChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.form.controls['survey_question']['controls'][index + 4].controls['ResChar'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            }
            else {
                this.toiletActive = false;
                this.form.controls['survey_question']['controls'][index + 1].controls['ResChar'].setValidators(null);
                this.form.controls['survey_question']['controls'][index + 1].controls['ResChar'].setValue("");
                this.form.controls['survey_question']['controls'][index + 2].controls['ResChar'].setValidators(null);
                this.form.controls['survey_question']['controls'][index + 2].controls['ResChar'].setValue("");
                this.form.controls['survey_question']['controls'][index + 3].controls['ResChar'].setValidators(null);
                this.form.controls['survey_question']['controls'][index + 3].controls['ResChar'].setValue("");
                this.form.controls['survey_question']['controls'][index + 4].controls['ResChar'].setValidators(null);
                this.form.controls['survey_question']['controls'][index + 4].controls['ResChar'].setValue("");
            }
            this.form.controls['survey_question']['controls'][index + 1].controls['ResChar'].updateValueAndValidity();
            this.form.controls['survey_question']['controls'][index + 2].controls['ResChar'].updateValueAndValidity();
            this.form.controls['survey_question']['controls'][index + 3].controls['ResChar'].updateValueAndValidity();
            this.form.controls['survey_question']['controls'][index + 4].controls['ResChar'].updateValueAndValidity();
        }
    }
    onFinalSave() {
        this.submitted = true;
        var resdata = {
            "records": this.form.value.survey_question
        };
        if (this.form.valid) {
            this.utilityService.SaveHodSurvey(resdata).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success(res.message);
                    // this.router.navigate(['/tnvntabs/page-route/dashboardc']);
                    this.router.navigate(['/tabs/dashboard']);
                }
                else {
                    this.alertService.error(res.message);
                    this.saveActive = false;
                    this.router.navigate(['/tabs/dashboard']);
                }
            });
        }
        else {
            this.validateAllFormFields(this.form);
            this.headingListIndex = this.headingList[2];
            this.alertService.error('Please Fill all the Required Fields');
        }
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    onNext(heading) {
        if (heading == 'Academic') {
            this.headingListIndex = this.headingList[1];
        }
        else if (heading == 'Administrative') {
            this.saveActive = true;
            this.headingListIndex = this.headingList[2];
        }
        else {
            this.headingListIndex = this.headingList[0];
        }
    }
    goToBack(heading) {
        if (heading == 'Academic') {
            this.router.navigate(['/tabs/school-info']);
        }
        else if (heading == 'Administrative') {
            this.headingListIndex = this.headingList[0];
            this.saveActive = false;
        }
        else if (heading == 'Infrastructure') {
            this.headingListIndex = this.headingList[1];
            this.saveActive = false;
        }
        else {
            // this.headingListIndex = this.headingList[0];
        }
    }
};
QuestionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_emis_aws_service__WEBPACK_IMPORTED_MODULE_6__.AwsService }
];
QuestionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-questions',
        template: _raw_loader_questions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuestionsPage);



/***/ }),

/***/ 75010:
/*!*********************************************************!*\
  !*** ./src/app/pages/hod/questions/questions.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  max-width: 100% !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.header {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.header-txt {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  border-radius: 10px;\n}\n\n.heading-txt {\n  background: #e6ccff;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.item-style {\n  margin-bottom: 15px;\n  border-radius: 6px;\n}\n\n.background {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  padding: 0px;\n}\n\n.ques-txt {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.bt-10 {\n  padding-bottom: 10p;\n}\n\n.list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.item-border {\n  border-radius: 10px;\n  border-top: 5px solid #8b67b3;\n}\n\nion-list {\n  background: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQVNGOztBQVBBO0VBQ0UsV0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQVdGOztBQVRBO0VBQ0UsK0JBQUE7QUFZRjs7QUFUQTtFQUNFLDBCQUFBO0FBWUY7O0FBVEE7RUFDRSxtQkFBQTtFQUNFLDZCQUFBO0FBWUo7O0FBVEE7RUFDRSw0QkFBQTtBQVlGIiwiZmlsZSI6InF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xyXG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi52YWxpZC1jbHIge1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmhlYWRlci10eHQge1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaGVhZGluZy10eHQge1xyXG4gIGJhY2tncm91bmQ6ICNlNmNjZmY7XHJcbiAgLy8gcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5pdGVtLXN0eWxlIHtcclxuICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcbi5iYWNrZ3JvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzowcHg7XHJcbn1cclxuLnF1ZXMtdHh0IHtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcbi5idC0xMCB7XHJcbiAgcGFkZGluZy1ib3R0b206MTBwXHJcbn1cclxuLmxpc3Qge1xyXG4gIHBhZGRpbmctYm90dG9tOjBweDtcclxuICBwYWRkaW5nLXRvcDowcHhcclxufVxyXG4ucmFkaW8ge1xyXG4gIHBhZGRpbmctcmlnaHQ6NDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDNweFxyXG59XHJcbi5sYmwge1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuLmlucHV0LWNsciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgY29sb3I6cmVkO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tYm9yZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICM4YjY3YjM7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 64786:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hod/questions/questions.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack(headingListIndex)\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" style=\"font-size: 20px\">HOD Inspection</ion-title>\r\n    <!-- <ion-title class=\"pt-15\">{{headingListIndex}}</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <form [formGroup]=\"form\">\r\n\r\n    <ion-grid class=\"ion-no-padding\" *ngIf=\"noDataFound\" style=\"padding-top:30%;color: #8B67B3;\">\r\n      <ion-row class=\"text-message\">\r\n        <ion-col size=\"12\" style=\"text-align: center !important;\">\r\n          <ion-label>No Data Found</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div size=\"12\" class=\"header\">\r\n\r\n      <ion-row class=\"heading-txt\">\r\n        <ion-label>{{headingListIndex}}</ion-label>\r\n      </ion-row>\r\n\r\n      <div formArrayName=\"survey_question\">\r\n        <ion-row *ngFor=\"let item of form.get('survey_question')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n          <ion-col size=\"12\" class=\"ion-no-padding\" *ngIf=\"headingListIndex === item.value.Q_GtropTxt\">\r\n\r\n            <!-- <ion-item lines=\"none\" class=\"item-style\"\r\n              *ngIf=\"(item.value.QuestTyp == '1' && (item.value.QId != '1047' || item.value.QId != '1048'))\"> -->\r\n            <ion-item lines=\"none\" class=\"item-style item-border\" *ngIf=\"(item.value.QuestTyp == '1' && (item.value.QId == '1034' || item.value.QId == '1035' ||\r\n              item.value.QId == '1036' || item.value.QId == '1037' ||\r\n              item.value.QId == '1038' || item.value.QId == '1041' ||\r\n              item.value.QId == '1042' || item.value.QId == '1043' ||\r\n              item.value.QId == '1044' || item.value.QId == '1045' || \r\n              item.value.QId == '1046' || item.value.QId == '1049' ||\r\n              item.value.QId == '1051' || item.value.QId == '1052' ||\r\n              item.value.QId == '1057' || item.value.QId == '1058' ||\r\n              item.value.QId == '1059' || item.value.QId == '1060' ||\r\n              item.value.QId == '1061'))\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  <!-- <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">{{i+1}}.</span> -->\r\n                  {{item.value.Quest}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-row class=bt-10>\r\n                  <ion-list class=\"list\">\r\n                    <ion-radio-group formControlName=\"ResInt\" (ionChange)=\"onRadioChange($event,i,item.value.QId)\">\r\n                      <ion-item lines=\"none\">\r\n                        <ion-radio value=\"1\"></ion-radio><span class=\"radio\">Yes</span>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\">\r\n                        <ion-radio value=\"2\"></ion-radio><span class=\"radio\">No</span>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n                </ion-row>\r\n                <ion-col size=\"12\" *ngIf=\"item.value.QId == '1038' && reasonActive\" class=\"txtspace\">\r\n                  <ion-label class=\"lbl\">\r\n                    <span class=\"index-aln\" style=\"color: #7c1313;font-weight: bolder;\">(i).</span>\r\n                    Reason<span class=\"valid-clr\">*</span>\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" placeholder=\"Please Enter Your Reason\" formControlName=\"ResChar\"\r\n                    class=\"input-clr\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-col><br>\r\n            </ion-item>\r\n\r\n\r\n            <!-- <div *ngIf=\"cattyId == 4 || cattyId == 5\"> -->\r\n            <ion-item lines=\"none\" class=\"item-style item-border\"\r\n              *ngIf=\"(item.value.QuestTyp == '1' && item.value.QId == '1047' && (cattyId == 4 || cattyId == 5))\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Quest}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-row class=bt-10>\r\n                  <ion-list class=\"list\">\r\n                    <ion-radio-group formControlName=\"ResInt\" (ionChange)=\"onRadioChange($event,i,item.value.QId)\">\r\n                      <ion-item lines=\"none\">\r\n                        <ion-radio value=\"1\"></ion-radio><span class=\"radio\">Yes</span>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\">\r\n                        <ion-radio value=\"2\"></ion-radio><span class=\"radio\">No</span>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n                </ion-row>\r\n              </ion-col><br>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-style item-border\"\r\n              *ngIf=\"(item.value.QuestTyp == '1' && item.value.QId == '1048' && (cattyId == '4' || cattyId == '5'))\">\r\n              <ion-col size=\"12\" class=\"txtspace background\">\r\n                <ion-label class=\"ques-txt\">\r\n                  {{item.value.Quest}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-row class=bt-10>\r\n                  <ion-list class=\"list\">\r\n                    <ion-radio-group formControlName=\"ResInt\" (ionChange)=\"onRadioChange($event,i,item.value.QId)\">\r\n                      <ion-item lines=\"none\">\r\n                        <ion-radio value=\"1\"></ion-radio><span class=\"radio\">Yes</span>\r\n                      </ion-item>\r\n                      <ion-item lines=\"none\">\r\n                        <ion-radio value=\"2\"></ion-radio><span class=\"radio\">No</span>\r\n                      </ion-item>\r\n                    </ion-radio-group>\r\n                  </ion-list>\r\n                </ion-row>\r\n              </ion-col><br>\r\n            </ion-item>\r\n\r\n            <!-- </div> -->\r\n\r\n\r\n\r\n            <ion-item lines=\"none\" class=\"item-style item-border\" *ngIf=\"item.value.QuestTyp == '2' && item.value.QId == '1050'\">\r\n              <ion-col size=\"12\" class=\"txtspace\">\r\n                <ion-label class=\"lbl\">\r\n                  {{item.value.Quest}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" formControlName=\"ResChar\"\r\n                  class=\"input-clr\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-style item-border\"\r\n              *ngIf=\"item.value.QuestTyp == '2' && ((item.value.QId == '1053' || item.value.QId == '1054' || item.value.QId == '1055' || item.value.QId == '1056') && toiletActive)\">\r\n              <ion-col size=\"12\" class=\"txtspace\">\r\n                <ion-label class=\"lbl\">\r\n                  {{item.value.Quest}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" formControlName=\"ResChar\"\r\n                  class=\"input-clr\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-style item-border\"\r\n              *ngIf=\"(item.value.QuestTyp == '2' && item.value.QId == '1040' && (cattyId == '1' || cattyId == '2' || cattyId == '3'))\">\r\n              <ion-col size=\"12\" class=\"txtspace\">\r\n                <ion-label class=\"lbl\">\r\n                  How many students studying in 4th standard?<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-label style=\"color:brown\">Total students in 4th standard - {{class4}}</ion-label>\r\n                <ion-input type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" formControlName=\"ResChar\"\r\n                  class=\"input-clr\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-style item-border\"\r\n              *ngIf=\"(item.value.QuestTyp == '2' && item.value.QId == '1040' && (cattyId == '4' || cattyId == '5'))\">\r\n              <ion-col size=\"12\" class=\"txtspace\">\r\n                <ion-label class=\"lbl\">\r\n                  How many students studying in 9th standard?<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-label style=\"color:brown\">Total students in 9th standard - {{class9}}</ion-label>\r\n                <ion-input type=\"text\" pattern=\"[0-9]*\" placeholder=\"Please Enter Your Answer\" formControlName=\"ResChar\"\r\n                  class=\"input-clr\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-style item-border\" *ngIf=\"item.value.QuestTyp == '3'\">\r\n              <ion-col size=\"12\" class=\"txtspace\">\r\n                <ion-label class=\"lbl\">\r\n                  {{item.value.Quest}}<span class=\"valid-clr\">*</span>\r\n                </ion-label>\r\n                <ion-input type=\"text\" pattern=\"^[a-zA-Z \\b]+$\" placeholder=\"Please Enter Your Answer\"\r\n                  formControlName=\"ResChar\" class=\"input-clr\">\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n            <ion-item lines=\"none\" class=\"item-style item-border\" *ngIf=\"item.value.QuestTyp == '4'\">\r\n              <ion-col size=\"12\" class=\"txtspace\">\r\n                <ion-label class=\"lbl\"> <span class=\"index-aln\"\r\n                    style=\"color: #7c1313;font-weight: bolder;\">{{i+1}}.</span>{{item.value.Quest}}<ion-icon\r\n                    name=\"calendar\" color=\"primary\">\r\n                  </ion-icon><span class=\"valid-clr\">*</span></ion-label>\r\n                <ion-datetime display-timezone=\"utc\" displayFormat=\"DD/MM/YYYY\" formControlName=\"ResChar\"\r\n                  style=\"padding-bottom: 10px;padding-top:0px;padding-left:6px\" max=\"{{todayDate}}\">\r\n                </ion-datetime>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"(submitted && item.controls['ResChar'].hasError('required')) && (submitted || item.controls['ResChar'].dirty || item.controls['ResChar'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"item.controls['ResChar'].hasError('pattern')\">Invalid Format\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-item>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" (click)=\"onNext(headingListIndex)\" *ngIf=\"!noDataFound && !saveActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>Next</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<ion-footer class=\"footer-clr\" (click)=\"onFinalSave()\" *ngIf=\"!noDataFound && saveActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_hod_questions_questions_module_ts-es2015.js.map