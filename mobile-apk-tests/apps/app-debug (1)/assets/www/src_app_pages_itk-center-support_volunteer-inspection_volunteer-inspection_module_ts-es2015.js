(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_volunteer-inspection_volunteer-inspection_module_ts"],{

/***/ 64855:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection-routing.module.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VolunteerInspectionPageRoutingModule": function() { return /* binding */ VolunteerInspectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./volunteer-inspection.page */ 41175);




const routes = [
    {
        path: '',
        component: _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspectionPage
    }
];
let VolunteerInspectionPageRoutingModule = class VolunteerInspectionPageRoutingModule {
};
VolunteerInspectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VolunteerInspectionPageRoutingModule);



/***/ }),

/***/ 27575:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.module.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VolunteerInspectionPageModule": function() { return /* binding */ VolunteerInspectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _volunteer_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./volunteer-inspection-routing.module */ 64855);
/* harmony import */ var _volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volunteer-inspection.page */ 41175);







let VolunteerInspectionPageModule = class VolunteerInspectionPageModule {
};
VolunteerInspectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _volunteer_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.VolunteerInspectionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_volunteer_inspection_page__WEBPACK_IMPORTED_MODULE_1__.VolunteerInspectionPage]
    })
], VolunteerInspectionPageModule);



/***/ }),

/***/ 41175:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.page.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VolunteerInspectionPage": function() { return /* binding */ VolunteerInspectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_volunteer_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./volunteer-inspection.page.html */ 70161);
/* harmony import */ var _volunteer_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volunteer-inspection.page.scss */ 10081);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/json.service */ 77232);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);









// import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';















let VolunteerInspectionPage = class VolunteerInspectionPage {
    constructor(router, route, platform, alert, el, cdRef, fb, modalController, http, userSesstion, ionicStorage, jsonApi, emisService, loader, sqliteDB, userService, networkService, geolocation, alertController, file, modalCtrl, pipe, camera, androidPermissions) {
        this.router = router;
        this.route = route;
        this.platform = platform;
        this.alert = alert;
        this.el = el;
        this.cdRef = cdRef;
        this.fb = fb;
        this.modalController = modalController;
        this.http = http;
        this.userSesstion = userSesstion;
        this.ionicStorage = ionicStorage;
        this.jsonApi = jsonApi;
        this.emisService = emisService;
        this.loader = loader;
        this.sqliteDB = sqliteDB;
        this.userService = userService;
        this.networkService = networkService;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.pipe = pipe;
        this.camera = camera;
        this.androidPermissions = androidPermissions;
        this.blockDropdown = [];
        this.savedVolunteerData = [];
        this.volunteerData = [];
        this.edit_status = "";
        // this.loader.show();
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewWillEnter() {
        this.todayDate = this.pipe.transform(new Date(), "yyyy-MM-dd");
        this.month = this.pipe.transform(new Date(), 'MM');
        this.LeadVol = this.userSesstion.emis_username();
        this.getVolunteer();
        this.route.queryParams.subscribe(params => { this.volId = params.volunteerId, this.searchTxt = params.searchTxt; });
    }
    initialValidator() {
        this.VForm = this.fb.group({
            VolunteerForm: this.fb.array([])
        });
    }
    getVolunteer() {
        this.ionicStorage.getData('ItkCenterVolunteer').then(res => {
            if (res && res != null) {
                this.onVolunteerList(res);
                this.volunteerData = res;
            }
            else {
                this.emisService.ItkCenterVolunJson(1).subscribe(res => {
                    if (res.dataStatus) {
                        this.onVolunteerList(res.result);
                        this.ionicStorage.insertData_Replace('ItkCenterVolunteer', res.result);
                        this.volunteerData = res.result;
                    }
                });
            }
        });
    }
    geoLocation() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.usrLat = resp.coords.latitude.toString();
            this.usrLong = resp.coords.longitude.toString();
            // }).catch((error: any) => console.log(error));
        }).catch((error) => {
            console.log('Error getting current lat long ', error);
            if (error.message === 'Illegal Access') {
                this.alert.alertToTurnOnPermission('Location', 'Location');
            }
        });
    }
    onVolunteerList(item) {
        debugger;
        const control = this.VForm.controls['VolunteerForm'];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
        this.queslist = this.VForm.controls.VolunteerForm;
        if (item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                this.queslist.push(this.fb.group({
                    sno: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].id, null),
                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].id, null),
                    indexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', null),
                    qid: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_id, null),
                    qusText: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_text, null),
                    qusSubId: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_sub_id, null),
                    qusSub: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].qusSub, null),
                    // qusSub: new FormControl(item[i].sub_ques_yn, null),
                    qusType: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_type_id, null),
                    qusOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_option, null),
                    qusRes: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].qusRes, +item[i].q_validation == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required : null),
                    // qusRes: new FormControl(item[i].qusRes, null ),
                    qusMin: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_min_valid, null),
                    qusMax: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_max_valid, null),
                    qusValidation: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_validation, null),
                    qusPattern: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_pattern, null),
                    qusActive: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].qusActive, null),
                    qusGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].q_group_id, null),
                    totalSub: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].sub_q_count, null),
                    DropDownType: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].dropdown_type, null),
                    ImageView: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', null),
                    qusDisable: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].qus_disable, null),
                    qusSubAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].qus_subanswer, null),
                    qusScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].score, null),
                    qusResScore: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', null),
                    qusScoreSplit: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(item[i].split_score ? JSON.parse(item[i].split_score) : '', null),
                }));
            }
        }
        for (let i = 0; i < this.VForm.value.VolunteerForm.length; i++) {
            if (this.VForm.value.VolunteerForm[i].qusOption) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusOption'].setValue(JSON.parse(this.VForm.value.VolunteerForm[i].qusOption));
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusOption'].updateValueAndValidity();
            }
            if (this.VForm.value.VolunteerForm[i].qusMin) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.minLength(this.VForm.value.VolunteerForm[i].qusMin));
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
            }
            if (this.VForm.value.VolunteerForm[i].qusMax) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.maxLength(this.VForm.value.VolunteerForm[i].qusMax));
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
            }
            if (this.VForm.value.VolunteerForm[i].qusPattern) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.pattern(this.VForm.value.VolunteerForm[i].qusPattern));
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
            }
        }
        setTimeout(() => {
            if (this.savedVolunteerData.length > 0) {
                for (let i = 0; i < this.VForm.value.VolunteerForm.length; i++) {
                    for (let j = 0; j < this.savedVolunteerData.length; j++) {
                        if (this.VForm.value.VolunteerForm[i].qid == this.savedVolunteerData[j].q_id) {
                            // this.VForm.controls['VolunteerForm']['controls'][i].controls['qusActive'].setValue(1);
                            if (+this.savedVolunteerData[j].q_type_id == 6) {
                                if (this.savedVolunteerData[j].volun_response) {
                                    // if(+this.savedVolunteerData[j].DropDownType != 1 && +this.savedVolunteerData[j].DropDownType != 2){
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(+this.savedVolunteerData[j].volun_response);
                                    this.savedVolunteerData[j].qusOption = this.VForm.value.VolunteerForm[i].qusOption;
                                    // }
                                }
                            }
                            else if (+this.savedVolunteerData[j].q_type_id == 7) {
                                if (this.savedVolunteerData[j].volun_response) {
                                    // if(+this.savedVolunteerData[j].DropDownType != 1 && +this.savedVolunteerData[j].DropDownType != 2){
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(Array.from(this.savedVolunteerData[j].volun_response.split(",").map(Number)));
                                    this.savedVolunteerData[j].qusOption = this.VForm.value.VolunteerForm[i].qusOption;
                                    // }
                                }
                            }
                            else if (+this.savedVolunteerData[j].q_type_id == 10) {
                                if (this.savedVolunteerData[j].volun_response) {
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(this.savedVolunteerData[j].volun_response);
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('https://deka0egrc3bqo.cloudfront.net/' + this.savedVolunteerData[j].volun_response);
                                }
                            }
                            else {
                                if (this.savedVolunteerData[j].volun_response) {
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(this.savedVolunteerData[j].volun_response);
                                }
                                // else{
                                //   this.VForm.controls['VolunteerForm']['controls'][i].controls['qusActive'].setValue('');
                                // }
                            }
                            if (this.savedVolunteerData[j].volun_response) {
                                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusActive'].setValue(1);
                            }
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(this.savedVolunteerData[j].volun_score);
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['indexId'].setValue(this.savedVolunteerData[j].id);
                            if (+this.edit_status == 1) {
                                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusDisable'].setValue("");
                            }
                            else {
                                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusDisable'].setValue(1);
                            }
                            // this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(this.savedVolunteerData[j].Response);
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                        }
                    }
                }
            }
        }, 1000);
        console.log(this.VForm);
    }
    onSave() {
        for (let i = 0; i < this.VForm.value.VolunteerForm.length; i++) {
            if (+this.VForm.value.VolunteerForm[i].qusValidation == 1) {
                if (this.VForm.value.VolunteerForm[i].qusRes == "" || this.VForm.value.VolunteerForm[i].qusRes == null) {
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(null);
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                    this.alert.error("Field is Required");
                }
            }
        }
        if (this.VForm.valid) {
            this.submitted = false;
            if (this.networkService.getCurrentNetworkStatus() == 0) {
                this.syncServer();
            }
            else {
                this.alert.error("No network connection. Please Connect to the Internet");
            }
        }
        else {
            this.submitted = true;
            // this.alert.error("Field is Required");
            this.focusValidator();
        }
    }
    syncServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'உறுதிப்படுத்தல்',
                message: 'சமர்பிக்கும் முன், தங்களின் அனைத்து பதில்களும் சரியாக உள்ளதா என்பதை சரிபார்க்கவும். படிவத்தை ஒருமுறை சமர்பித்த பின் மீண்டும் உங்களால் மாற்றங்களைச் செய்ய முடியாது.',
                backdropDismiss: false,
                cssClass: 'Volunteer',
                buttons: [
                    {
                        text: 'சமர்பிக்கிறேன்',
                        cssClass: 'buttonOne',
                        handler: () => {
                            var _a;
                            var req = [];
                            for (var i = 0; i < this.VForm.value.VolunteerForm.length; i++) {
                                let option;
                                if (this.VForm.value.VolunteerForm[i].qusType == 6) {
                                    option = this.VForm.value.VolunteerForm[i].qusOption.filter(dd => dd.id == this.VForm.value.VolunteerForm[i].qusRes);
                                }
                                req.push({
                                    "id": this.VForm.value.VolunteerForm[i].indexId,
                                    "volunteer_id": this.volId,
                                    "lead_vol": this.LeadVol,
                                    "master_idx_id": this.VForm.value.VolunteerForm[i].id,
                                    "q_id": this.VForm.value.VolunteerForm[i].qid,
                                    "volun_response": +this.VForm.value.VolunteerForm[i].qusType == 7 ? this.VForm.value.VolunteerForm[i].qusRes.toString() : this.VForm.value.VolunteerForm[i].qusRes,
                                    "volun_response_text": +this.VForm.value.VolunteerForm[i].qusType == 7 ? this.VForm.value.VolunteerForm[i].qusRes.toString() :
                                        +this.VForm.value.VolunteerForm[i].qusType == 6 ? (_a = option[0]) === null || _a === void 0 ? void 0 : _a.name : this.VForm.value.VolunteerForm[i].qusRes,
                                    "volun_score": this.VForm.value.VolunteerForm[i].qusRes ? this.VForm.value.VolunteerForm[i].qusResScore : '',
                                    "latitude": this.usrLat,
                                    "longitude": this.usrLong
                                });
                            }
                            let data = {
                                "ItkVolunteer": [
                                    {
                                        "IndxID": "",
                                        "LeadVol": this.LeadVol,
                                        "volunteer_Id": this.volId,
                                        "SurveyMonth": this.month,
                                        "surveyDate": this.todayDate,
                                        "QGroupId": 1,
                                    }
                                ],
                                "records": req,
                            };
                            this.emisService.ItkVolunCenterResponse(data).subscribe(res => {
                                if (res.dataStatus) {
                                    this.alert.success(res.message);
                                    this.initialValidator();
                                    this.router.navigate(['tabs/itk-center-dashboard']);
                                }
                                else {
                                    this.alert.error(res.message);
                                }
                            });
                        }
                    },
                    {
                        text: 'மாற்றம் செய்ய வேண்டும்',
                        cssClass: 'buttonTwo',
                        handler: () => {
                            this.alertController.dismiss();
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    focusValidator() {
        const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
        invalidControl.scrollIntoView({ behavior: "smooth", inline: "nearest" });
        // invalidControl.scrollTo(50, 0);
        invalidControl.focus();
    }
    onEvent(item, i, total) {
        // console.log("ionChange",item, i, total)
        debugger;
        for (let n = 1; n <= total; n++) {
            if (item.detail.value == this.volunteerData[i + n].qus_subanswer) {
                if (this.VForm.value.VolunteerForm[i].qid == this.volunteerData[i + n].match_sub_quest) {
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                    if (+this.volunteerData[i + n].q_validation == 1) {
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                    }
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
                }
            }
            else {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
            }
        }
        if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
            let selectValue = this.VForm.value.VolunteerForm[i].qusScoreSplit.filter(dd => dd.id == item.detail.value);
            if (selectValue.length > 0) {
                // if(this.VForm.value.VolunteerForm[i].qusValidation == 1){
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(selectValue[0].score);
                // }
            }
            else {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
            }
        }
        this.cdRef.detectChanges();
    }
    onCheckBox(item, i, total) {
        console.log("onCheckBox", item.detail.value, i, total);
        if (i == 0) {
            for (let m = 0; m < item.detail.value.length; m++) {
                if (item.detail.value[m] == 8) {
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(item.detail.value[m]);
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
                    break;
                }
            }
        }
        for (let n = 1; n <= total; n++) {
            let isIncluded = false;
            let array = this.volunteerData[i + n].qus_subanswer.split(",");
            for (let i = 0; i < item.detail.value.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (item.detail.value[i] == array[j]) {
                        isIncluded = true;
                        break;
                    }
                }
            }
            // let isIncluded = this.volunteerData[i+n].qus_subanswer.includes(item.detail.value.toString());
            if (isIncluded) {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                if (+this.volunteerData[i + n].q_validation == 1) {
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                }
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
            }
            else {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['ImageView'].updateValueAndValidity();
            }
        }
        if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
            let value = 0;
            for (let k = 0; k < item.detail.value.length; k++) {
                let selectValue = this.VForm.value.VolunteerForm[i].qusScoreSplit.filter(dd => dd.id == item.detail.value[k]);
                if (selectValue.length > 0) {
                    value += +selectValue[0].score;
                    if (+this.VForm.value.VolunteerForm[i].qid == 7.1 || +this.VForm.value.VolunteerForm[i].qid == 7.2) {
                        this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(value);
                        break;
                    }
                    else {
                        this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(value);
                    }
                }
                else {
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
                }
            }
        }
        console.log(this.VForm.value.VolunteerForm);
    }
    onDropDown(item, i, total) {
        // console.log(item,i,total);
        debugger;
        for (let n = 1; n <= total; n++) {
            let splited = this.volunteerData[i + n].qus_subanswer.split(",");
            if (splited.length < 2) {
                if (item.detail.value == this.volunteerData[i + n].qus_subanswer) {
                    if (this.VForm.value.VolunteerForm[i].qid == this.volunteerData[i + n].match_sub_quest) {
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                        if (+this.volunteerData[i + n].q_validation == 1) {
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                        }
                    }
                }
                else {
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusResScore'].setValue("");
                }
            }
            else {
                if ((item.detail.value == splited[0]) || (item.detail.value == splited[1]) || (item.detail.value == splited[2])) {
                    if (this.VForm.value.VolunteerForm[i].qid == this.volunteerData[i + n].match_sub_quest) {
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                        if (+this.volunteerData[i + n].q_validation == 1) {
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('1');
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                        }
                    }
                }
                else {
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusValidation'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusResScore'].setValue("");
                }
            }
        }
        if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
            let selectValue = this.VForm.value.VolunteerForm[i].qusScoreSplit.filter(dd => dd.id == item.detail.value);
            if (selectValue.length > 0) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(selectValue[0].score);
            }
            else {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
            }
        }
    }
    onEventDropDown(event, i) {
        this.VForm.controls['VolunteerForm']['controls'][i + 1].controls['qusRes'].setValue('');
        // console.log("ionChange Dropdown",event, this.blockList)
        // this.blockDropdown = this.blockList.filter(dd => +dd.DistId == +event.detail.value);
        // for(let i=0; i<this.VForm.value.VolunteerForm.length; i++){
        //   if(+this.VForm.value.VolunteerForm[i].DropDownType == 2){
        //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
        //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusOption'].setValue(this.blockDropdown);
        //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusOption'].updateValueAndValidity();
        //   }
        // }
    }
    onEventPatch(item, i, value) {
        if (value == 1) {
            for (let n = 1; n <= item; n++) {
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
            }
        }
        if (value == 2) {
            this.emisService.getSchoolInfo(this.VForm.value.VolunteerForm[i].qusRes).subscribe((res) => {
                if (res.result) {
                    let schoolDeatils = res.result[0];
                    debugger;
                    for (let n = 1; n <= item; n++) {
                        if (n == 1) {
                            if (schoolDeatils.SclNam) {
                                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(schoolDeatils.SclNam);
                                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(this.edit_status == 1 ? '' : '1');
                            }
                            else {
                                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                            }
                        }
                        else if (n == 2) {
                            if (+this.VForm.value.VolunteerForm[i + n].DropDownType == 1) {
                                if (schoolDeatils.DistID) {
                                    // this.VForm.controls['VolunteerForm']['controls'][i+n].controls['qusRes'].setValue(+schoolDeatils.DistID);
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(this.edit_status == 1 ? '' : '1');
                                }
                                else {
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                                }
                            }
                        }
                        else if (n == 3) {
                            if (+this.VForm.value.VolunteerForm[i + n].DropDownType == 2) {
                                if (schoolDeatils.BlkID) {
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(schoolDeatils.BlkID);
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(this.edit_status == 1 ? '' : '1');
                                }
                                else {
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                                }
                            }
                        }
                        else {
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                        }
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                    }
                }
            });
        }
    }
    onEventText(ev, i, id) {
        if (id == 1) {
            if (ev.detail.value == '') {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
            }
            if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(this.VForm.value.VolunteerForm[i].qusScoreSplit[0].score);
            }
        }
        if (id == 2) {
        }
    }
    onEventNumber(ev, i, id, total) {
        // console.log(ev, total)
        if (ev.detail.value.length == 11) {
            this.emisService.getSchoolInfo(ev.detail.value).subscribe((res) => {
                if (res.result) {
                    let schoolDeatils = res.result[0];
                    debugger;
                    if (schoolDeatils.BlkID && schoolDeatils.DistID && schoolDeatils.SclId) {
                        for (let n = 1; n <= total; n++) {
                            if (n == 1) {
                                if (schoolDeatils.SclNam) {
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(schoolDeatils.SclNam);
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(this.edit_status == 1 ? '' : '1');
                                }
                                else {
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                                    this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                                }
                            }
                            else if (n == 2) {
                                if (+this.VForm.value.VolunteerForm[i + n].DropDownType == 1) {
                                    if (schoolDeatils.DistID) {
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(+schoolDeatils.DistID);
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(this.edit_status == 1 ? '' : '1');
                                    }
                                    else {
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                                    }
                                }
                            }
                            else if (n == 3) {
                                if (+this.VForm.value.VolunteerForm[i + n].DropDownType == 2) {
                                    if (schoolDeatils.BlkID) {
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue(+schoolDeatils.BlkID);
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue(this.edit_status == 1 ? '' : '1');
                                    }
                                    else {
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusDisable'].setValue('');
                                    }
                                }
                            }
                            else {
                                this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                            }
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('1');
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                        }
                    }
                    else {
                        this.alert.error("Wrong udisecode");
                        for (let n = 1; n <= total; n++) {
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                            this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                        }
                        this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                        this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                        this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                    }
                }
                else {
                    this.alert.error(res.message);
                    for (let n = 1; n <= total; n++) {
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValue('');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].setValidators(null);
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].setValue('');
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusRes'].updateValueAndValidity();
                        this.VForm.controls['VolunteerForm']['controls'][i + n].controls['qusActive'].updateValueAndValidity();
                    }
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required);
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                }
            });
            // console.log(this.VForm)
        }
        if (this.VForm.value.VolunteerForm[i].qusScoreSplit) {
            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(this.VForm.value.VolunteerForm[i].qusScoreSplit[0].score);
        }
        else {
            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
        }
    }
    onSelectFile(event, i) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg" || event.target.files[0].type == "image/png") {
                if (event.target.files[0].size <= 1048576) {
                    let doc_file = event.target.files;
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    var fileType = splittedName[1];
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        let uploadUrl = fileReader.result;
                        var bucketName = "renewalapplicationemis";
                        var ext = splittedName[1];
                        let expiry = 300;
                        if (this.networkService.getCurrentNetworkStatus() == 0) {
                            this.userService.getFileUrl(bucketName, ext, fileName, expiry).subscribe((result) => {
                                if (result) {
                                    // let files: FileList = doc_file;
                                    // let file: File = files[0];
                                    // this.emisService.uploadFile(result.url, file).subscribe((res) => {
                                    //   this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue(fileReader.result)
                                    //   this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(result.key);              
                                    //   if(this.VForm.value.VolunteerForm[i].qusScoreSplit){
                                    //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue(this.VForm.value.VolunteerForm[i].qusScoreSplit[0].score);
                                    //   }else{
                                    //     this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue("");
                                    //   }
                                    //   this.alert.success('File Uploaded Successfully');
                                    // });
                                }
                                else {
                                    this.alert.error('Error in Uploading File please try again');
                                    this.alert.error("No network connection. Please Connect to the Internet");
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');
                                    if (this.fileEmpty) {
                                        this.fileEmpty = false;
                                    }
                                    else {
                                        this.fileEmpty = true;
                                    }
                                }
                            });
                        }
                        else {
                            this.alert.error("No network connection. Please Connect to the Internet");
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
                            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');
                            if (this.fileEmpty) {
                                this.fileEmpty = false;
                            }
                            else {
                                this.fileEmpty = true;
                            }
                            this.jpgimage.nativeElement.value = "";
                        }
                    };
                }
                else {
                    this.alert.error('File Can`t uploaded because Image size should not exceed 1 MB');
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');
                    if (this.fileEmpty) {
                        this.fileEmpty = false;
                    }
                    else {
                        this.fileEmpty = true;
                    }
                    this.el.nativeElement.value = "";
                }
            }
            else {
                this.alert.error('Please upload only JPG / JPEG / PNG image format');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');
                if (this.fileEmpty) {
                    this.fileEmpty = false;
                }
                else {
                    this.fileEmpty = true;
                }
                this.jpgimage.nativeElement.value = "";
            }
        }
        else {
            this.alert.error('Please upload only JPG / JPEG / PNG image format');
            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
            this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
            this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
            this.VForm.controls['VolunteerForm']['controls'][i].controls['qusResScore'].setValue('');
            if (this.fileEmpty) {
                this.fileEmpty = false;
            }
            else {
                this.fileEmpty = true;
            }
        }
    }
    S3ImgaeSave(i, s3ImgObj) {
        this.emisService.S3ImageSave(s3ImgObj).subscribe(res => {
            if (res.dataStatus) {
            }
            else {
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
                this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
                this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
            }
        });
    }
    uploadImgDelete(i) {
        this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue('');
        this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue('');
        this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].updateValueAndValidity();
        this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].updateValueAndValidity();
    }
    viewImage(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__.ViewImagePage,
                cssClass: 'view-image-modal'
            });
            yield modal.present();
        });
    }
    ionViewWillLeave() {
        this.initialValidator();
        this.imageView = '';
        this.submitted = false;
        this.savedVolunteerData = [];
        this.volunteerData = [];
    }
    goBack() {
        this.router.navigate(['/tabs/teacher/volunteer-search']);
    }
    openCamera(i) {
        this.androidPermission();
        debugger;
        const options = {
            quality: 60,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.BACK
        };
        this.camera.getPicture(options).then((imageData) => {
            // console.log("CameraPicture",imageData)
            var bucketName = "renewalapplicationemis";
            let expiry = 1800;
            let filename = imageData.substring(imageData.lastIndexOf("/") + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf("/") + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                if (base64string) {
                    const base = base64string.split("base64,");
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_7__.base64StringToBlob)(base[1], "image/jpg");
                    if (blob.size <= 3145728) {
                        this.userService
                            .getFileUrl1(bucketName, splitedImage[1], splitedImage[0], expiry)
                            .subscribe((result) => {
                            if (result) {
                                //  console.log("result",result);
                                this.userService
                                    .uploadFile(result.url, blob)
                                    .subscribe((res) => {
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['ImageView'].setValue(base64string);
                                    this.VForm.controls['VolunteerForm']['controls'][i].controls['qusRes'].setValue(result.key);
                                    this.alert.success('File Uploaded Successfully');
                                    // console.log("responce",res);
                                    // this.form.controls['form_questions']['controls'][i].controls['result'].setValue(this.imageKey);
                                    this.alert.success("File Uploaded Successfully");
                                });
                            }
                        });
                    }
                    else {
                        this.alert.error("File Can`t uploaded because Image size should not exceed 3 MB");
                    }
                }
            });
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    androidPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            if (!result.hasPermission) {
                console.log("no camera permission");
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
    }
};
VolunteerInspectionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClient },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService },
    { type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_5__.JsonService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_14__.EmisService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_12__.LoadingService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_16__.UserService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__.NetworkService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_9__.AndroidPermissions }
];
VolunteerInspectionPage.propDecorators = {
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['jpgimage',] }]
};
VolunteerInspectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-volunteer-inspection',
        template: _raw_loader_volunteer_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_volunteer_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VolunteerInspectionPage);



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

/***/ 10081:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.page.scss ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\nion-select::part(text) {\n  white-space: normal;\n}\n\nion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n\nion-content .header-text {\n  background: #f4f4f4;\n  padding: 15px;\n  border-radius: 10px 10px 0px 0px;\n}\n\nion-content .middle-text {\n  border-radius: 0px 0px 10px 10px;\n}\n\nion-content .question {\n  border: 1px solid grey;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\nion-content .question p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\nion-content .question ion-select {\n  max-width: 100%;\n  width: 100%;\n}\n\nion-content .question ion-item {\n  margin: 0px 0;\n  --padding-start: 10px;\n  font-size: 14px;\n}\n\nion-content ion-radio-group {\n  display: flex;\n}\n\nion-content ion-radio-group ion-item {\n  margin: 0 !important;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n\n.popUp {\n  position: fixed;\n  top: 100%;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n  z-index: 1000;\n}\n\n.popUp .blackdrop {\n  background: rgba(0, 0, 0, 0.7);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\n.popUp .img-card {\n  position: relative;\n  width: 90%;\n  height: 90%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  z-index: 1;\n}\n\n.popUp .img-card .popupStyle {\n  width: 100%;\n  height: 70%;\n  border-radius: 20px;\n  background: #fff;\n  text-align: center;\n  overflow-y: scroll;\n}\n\n.popUp .img-card img {\n  max-width: 90%;\n  max-height: 180px;\n  border-radius: 20px;\n  margin: 15px 0px 15px;\n}\n\n.popUp .img-card table {\n  text-align: left;\n  width: 90%;\n  margin: 0px auto 20px;\n  font-size: 15px;\n}\n\n.popUp .img-card button {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 5px solid #9162b0;\n  color: #9162b0;\n  font-size: 29px;\n  padding: 5px 5px;\n  position: absolute;\n  top: -15px;\n  right: -10px;\n  z-index: 1;\n}\n\n.popUp.open {\n  top: 0%;\n}\n\n.saveBtn {\n  --border-radius: 15px;\n  text-transform: capitalize;\n  color: #FFF;\n  display: flex;\n  margin: 10px auto;\n  height: 40px;\n  font-size: 15px;\n  font-weight: bold;\n  width: 40%;\n}\n\n.error-message {\n  color: red !important;\n  margin: 0px 0px 0px 5px;\n}\n\n.questionSub {\n  border: 1.5px solid #480ca8;\n  border-radius: 10px;\n  margin: 10px auto;\n}\n\n.questionSub p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.questionSub ion-select {\n  max-width: 100%;\n  width: 100%;\n}\n\n.questionSub ion-item {\n  margin: 0px 0;\n  --padding-start: 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvbHVudGVlci1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDRTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVKOztBQURJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFHUjs7QUFESTtFQUVJLGdDQUFBO0FBRVI7O0FBQUk7RUFDRSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFBTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFDTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBQ007RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBRUk7RUFDRSxhQUFBO0FBQU47O0FBQ007RUFDRSxvQkFBQTtBQUNSOztBQUlFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUFESjs7QUFFSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQVI7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUNRO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNWOztBQUNRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNaOztBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ1o7O0FBQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFDVjs7QUFFSTtFQUNJLE9BQUE7QUFBUjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJRTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUdJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUROOztBQUlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFGTjs7QUFJSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFGTiIsImZpbGUiOiJ2b2x1bnRlZXItaW5zcGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAuaGVhZGVyLXRleHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm1pZGRsZS10ZXh0e1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucXVlc3Rpb24ge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpb24tc2VsZWN0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLXJhZGlvLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWRJbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4ICM5OGE2ZDkxYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3BVcHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIC5ibGFja2Ryb3B7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltZy1jYXJke1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAucG9wdXBTdHlsZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwcHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICM5MTYyYjA7XHJcbiAgICAgICAgICBjb2xvcjogIzkxNjJiMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLm9wZW57XHJcbiAgICAgICAgdG9wOiAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNhdmVCdG57XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZXtcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNXB4O1xyXG4gIH1cclxuICBcclxuICAucXVlc3Rpb25TdWIge1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNDgwY2E4O1xyXG4gIC8vICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgbWFyZ2luOiAwcHggMDtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 70161:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/volunteer-inspection/volunteer-inspection.page.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n      <ion-button><ion-icon slot=\"icon-only\" style=\"zoom:1\" name=\"arrow-back\"></ion-icon></ion-button>\r\n    </ion-buttons> \r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">ITK Center Questions</div>\r\n    </ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"VForm\">\r\n    <div formArrayName=\"VolunteerForm\">\r\n      <div size=\"12\" *ngFor=\"let item of VForm.get('VolunteerForm')['controls']; let i = index;\" [formGroupName]=\"i\">\r\n        \r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 1 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\" (ionChange)=\"onEvent($event,i,item.value.totalSub)\">\r\n            <ion-col size=\"12\">\r\n              <ion-radio-group  value=\"true\" formControlName=\"qusRes\" >\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>ஆம் </ion-label>\r\n                  <ion-radio slot=\"start\" value=\"1\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>இல்லை</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"2\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 1 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\" (ionChange)=\"onEvent($event,i,item.value.totalSub)\">\r\n            <ion-col size=\"12\">\r\n              <ion-radio-group value=\"true\" formControlName=\"qusRes\" >\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>ஆம் </ion-label>\r\n                  <ion-radio slot=\"start\" value=\"1\"></ion-radio>\r\n                </ion-item>\r\n                <ion-item disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" mode=\"md\" lines=\"none\">\r\n                  <ion-label>இல்லை</ion-label>\r\n                  <ion-radio slot=\"start\" value=\"2\"></ion-radio>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  *ngIf=\"item.value.qusType == 2 && !!item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\" >\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"text\" (ionChange)=\"onEventText($event, i, 1)\" formControlName=\"qusRes\" placeholder=\"Please enter\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n\r\n        </div>\r\n\r\n        <div class=\"questionSub\"  *ngIf=\"item.value.qusType == 2 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"text\" (ionChange)=\"onEventText($event, i, 2)\" formControlName=\"qusRes\" placeholder=\"Please enter\"></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n  \r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 3 && !item.value.qusSubId\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"tel\" (ionChange)=\"onEventNumber($event, i, 1, item.value.totalSub)\" maxlength=\"{{item.value.qusMax}}\" minlength=\"{{item.value.qusMin}}\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} digit number </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} digit number </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 3 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"tel\" (ionChange)=\"onEventNumber($event, i, 2, item.value.totalSub)\" maxlength=\"{{item.value.qusMax}}\" minlength=\"{{item.value.qusMin}}\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} digit number </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} digit number </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"*ngIf=\"item.value.qusType == 4 && !item.value.qusSubId\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"email\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\"*ngIf=\"item.value.qusType == 4 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\" >\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-input type=\"email\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-input>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 5 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-textarea rows=\"5\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 5 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-label></ion-label>\r\n                <ion-textarea rows=\"5\" formControlName=\"qusRes\" placeholder=\"Please enter\" ></ion-textarea>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('minlength') \"> Enter the minimum {{item.value.qusMin}} text </p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('maxlength')\"> Enter the minimum {{item.value.qusMax}} text </p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 6 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onDropDown($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"false\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption \" [value]=\"option.id\" >{{ option.name }}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 6 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onDropDown($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"false\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption\" [value]=\"option.id\" >{{option.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 7 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onCheckBox($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"true\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption\" [value]=\"option.id\" >{{option.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 7 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-select (ionChange)=\"onCheckBox($event, i, item.value.totalSub)\" formControlName=\"qusRes\" multiple=\"true\" placeholder=\"Please select\" [interfaceOptions]=\"{header:'Select option'}\">\r\n                  <ion-select-option *ngFor=\"let option of item.value.qusOption\" [value]=\"option.id\" >{{option.name}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 8 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"DD/MM/YYYY hh:mm A\" placeholder=\"Select Date\"></ion-datetime>\r\n                <ion-icon name=\"calendar-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') \"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 8 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"DD/MM/YYYY hh:mm A\" placeholder=\"Select Date \"></ion-datetime>\r\n                <ion-icon name=\"calendar-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') ||  item.controls['qusRes'].hasError('minlength') || item.controls['qusRes'].hasError('maxlength')\"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 9 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"hh:mm A\" placeholder=\"Select Time\"></ion-datetime>\r\n                <ion-icon name=\"time-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') ||  item.controls['qusRes'].hasError('minlength') || item.controls['qusRes'].hasError('maxlength')\"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 9 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-datetime style=\"width: 100%;\" formControlName=\"qusRes\" displayFormat=\"hh:mm A\" placeholder=\"Select Time\"></ion-datetime>\r\n                <ion-icon name=\"time-outline\"></ion-icon>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\">\r\n            <p class=\"error-message\" *ngIf=\"item.controls['qusRes'].hasError('pattern') ||  item.controls['qusRes'].hasError('minlength') || item.controls['qusRes'].hasError('maxlength')\"> Enter valid data</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\" *ngIf=\"item.value.qusType == 10 && !item.value.qusSubId\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"!item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <!-- <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-input *ngIf=\"!fileEmpty\" type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\"></ion-input>\r\n                <ion-input *ngIf=\"fileEmpty\" type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\"></ion-input>\r\n              </ion-item> -->\r\n              <div style=\"margin-top: 10px;\" (click)=\"openCamera(i)\">\r\n                <ion-col size=\"1\" style=\"text-align: center;\">\r\n                  <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"8\">\r\n                  <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                    Click to Capture Image\r\n                  </label>\r\n                </ion-col>\r\n              </div>\r\n            </ion-col>\r\n            <!-- <label class=\"valid-clr1\" style=\"color: #480ca8;margin: 0px 10px; display: block;\">Only JPG / JPEG / PNG allowed, size 1 MB </label> -->\r\n          </ion-row>\r\n          <ion-row *ngIf=\"item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n                <ion-button *ngIf=\"edit_status == '1'\" (click)=\"uploadImgDelete(i)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                  <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                </ion-button>\r\n                <img (click)=\"viewImage(item.value.ImageView)\" src=\"{{item.value.ImageView}}\" class=\"uploadImage\">\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"questionSub\" *ngIf=\"item.value.qusType == 10 && item.value.qusSubId == item.value.qid && item.value.qusActive == '1'\">\r\n          <ion-row class=\"header-text\">\r\n            <p>{{item.value.qid}} . {{item.value.qusText}}<span *ngIf=\"item.value.qusValidation == 1\" style=\"color: red;font-size: 25px;\">*</span></p>\r\n          </ion-row>\r\n          <ion-row *ngIf=\"!item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <!-- <ion-item mode=\"md\" fill=\"outline\" disabled=\"{{item.value.qusDisable == '1' ? true : false}}\">\r\n                <ion-input *ngIf=\"!fileEmpty\" type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\" #fileInput></ion-input>\r\n                <ion-input *ngIf=\"fileEmpty\"type=\"file\" formControlName=\"qusRes\" (change)=\"onSelectFile($event, i)\" placeholder=\"Please select image\" accept=\".jpg,.JPEG,.PNG\" #fileInput></ion-input>\r\n              </ion-item> -->\r\n              <div style=\"margin-top: 10px;\" (click)=\"openCamera(i)\">\r\n                <ion-col size=\"1\" style=\"text-align: center;\">\r\n                  <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"8\">\r\n                  <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                    Click to Capture Image\r\n                  </label>\r\n                </ion-col>\r\n              </div>\r\n            </ion-col>\r\n            <!-- <label class=\"valid-clr1\" style=\"color: #480ca8;margin: 0px 10px; display: block;\">Only JPG / JPEG / PNG allowed, size 1 MB </label> -->\r\n          </ion-row>\r\n          <ion-row *ngIf=\"item.value.ImageView\" class=\"middle-text\" >\r\n            <ion-col size=\"12\">\r\n              <ion-item mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n                <ion-button (click)=\"uploadImgDelete(i)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                  <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                </ion-button>\r\n                <img (click)=\"viewImage(item.value.ImageView)\" src=\"{{item.value.ImageView}}\" class=\"uploadImage\">\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin: 0px 0px 5px 10px;\" >\r\n            <p class=\"error-message\" *ngIf=\"(submitted && item.controls['qusRes'].hasError('required')) && (submitted || item.controls['qusRes'].dirty || item.controls['qusRes'].touched)\">  Field is Required</p>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <ion-col size=\"12\" *ngIf=\"volunteerData.length == 0\">\r\n    <ion-label style=\"display: flex; align-items: center; justify-content: center;\">No Data Found</ion-label>\r\n  </ion-col>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"volunteerData.length > 0\">\r\n  <!-- <ion-button [disabled]=\"VolunteerForm.invalid\" size=\"default\" class=\"saveBtn\" style=\"font-size: 12px;\" (click)=\"onSave()\"> சேமிக்கவும் </ion-button> -->\r\n  <ion-button size=\"default\" class=\"saveBtn\" style=\"font-size: 12px;\" (click)=\"onSave()\"> சமர்பிக்க </ion-button>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_itk-center-support_volunteer-inspection_volunteer-inspection_module_ts-es2015.js.map