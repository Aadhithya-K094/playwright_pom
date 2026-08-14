(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_ooscnewsurvey_ooscnewsurvey_module_ts"],{

/***/ 77761:
/*!**************************************************************************!*\
  !*** ./src/app/pages/oosc/ooscnewsurvey/ooscnewsurvey-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OoscnewsurveyPageRoutingModule": function() { return /* binding */ OoscnewsurveyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ooscnewsurvey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ooscnewsurvey.page */ 21504);




const routes = [
    {
        path: '',
        component: _ooscnewsurvey_page__WEBPACK_IMPORTED_MODULE_0__.OoscnewsurveyPage
    }
];
let OoscnewsurveyPageRoutingModule = class OoscnewsurveyPageRoutingModule {
};
OoscnewsurveyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OoscnewsurveyPageRoutingModule);



/***/ }),

/***/ 56946:
/*!******************************************************************!*\
  !*** ./src/app/pages/oosc/ooscnewsurvey/ooscnewsurvey.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OoscnewsurveyPageModule": function() { return /* binding */ OoscnewsurveyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ooscnewsurvey_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ooscnewsurvey-routing.module */ 77761);
/* harmony import */ var _ooscnewsurvey_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ooscnewsurvey.page */ 21504);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








let OoscnewsurveyPageModule = class OoscnewsurveyPageModule {
};
OoscnewsurveyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ooscnewsurvey_routing_module__WEBPACK_IMPORTED_MODULE_0__.OoscnewsurveyPageRoutingModule
        ],
        declarations: [_ooscnewsurvey_page__WEBPACK_IMPORTED_MODULE_1__.OoscnewsurveyPage]
    })
], OoscnewsurveyPageModule);



/***/ }),

/***/ 21504:
/*!****************************************************************!*\
  !*** ./src/app/pages/oosc/ooscnewsurvey/ooscnewsurvey.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OoscnewsurveyPage": function() { return /* binding */ OoscnewsurveyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ooscnewsurvey_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ooscnewsurvey.page.html */ 55736);
/* harmony import */ var _ooscnewsurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ooscnewsurvey.page.scss */ 21260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 16030);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/network-service */ 34442);







// import { Geolocation } from '@ionic-native/geolocation/ngx';

// import { Coordinates , Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';














let OoscnewsurveyPage = class OoscnewsurveyPage {
    constructor(fb, router, uploadService, http, geolocation, emisService, platform, userSessionService, route, camera, alertService, modalCtrl, file, androidPermissions, locationAccuracy, alertController, sqliteDB, networkService) {
        this.fb = fb;
        this.router = router;
        this.uploadService = uploadService;
        this.http = http;
        this.geolocation = geolocation;
        this.emisService = emisService;
        this.platform = platform;
        this.userSessionService = userSessionService;
        this.route = route;
        this.camera = camera;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
        this.alertController = alertController;
        this.sqliteDB = sqliteDB;
        this.networkService = networkService;
        this.addrFormat = "[a-zA-Z0-9. !@#$%^&*/;:,_`~'-]*";
        // migrationType1: Array<{ 'label': any, 'value': any }> = [
        //   { label: 'Seasonal Migration', value: '1' },
        //   { label: 'Permanently migrated ', value: '2' }
        // ];
        this.migrationType1 = [
            { label: 'Seasonal Migration', value: '1' },
            { label: 'Permanent Migration ', value: '2' }
        ];
        this.migrationType1_1 = [
            { label: 'Work', value: '1' },
            { label: 'Natural calamity', value: '2' },
            { label: "Child's education", value: '3' },
            { label: 'Discrimination', value: '4' },
            { label: 'Death of parent/guardian', value: '5' },
            { label: 'Marriage', value: '6' },
            { label: 'Debt or financial crisis', value: '7' }
        ];
        this.migrationPeriod = [
            { label: 'From', value: '1' },
            { label: 'To', value: '2' }
        ];
        this.migrationType2 = [
            { label: 'Migrated from other country ', value: '4' },
            { label: 'Migrated from other state ', value: '1' },
            { label: 'Migrated from other districts ', value: '2' },
            { label: 'Migrated from other block', value: '3' },
        ];
        this.migrationType3 = [
            // { label: 'Migrated to other state ', value: '1' },
            { label: 'Migrated to other districts ', value: '2' },
            { label: 'Migrated to other block', value: '3' },
        ];
        this.yearList = [
            { label: '2023', value: '2023' },
            { label: '2024', value: '2024' }
        ];
        this.monthList = [
            { label: 'January', value: '1' },
            { label: 'February', value: '2' },
            { label: 'March', value: '3' },
            { label: 'April', value: '4' },
            { label: 'May', value: '5' },
            { label: 'June', value: '6' },
            { label: 'July', value: '7' },
            { label: 'August', value: '8' },
            { label: 'September', value: '9' },
            { label: 'October', value: '10' },
            { label: 'November', value: '11' },
            { label: 'December', value: '12' }
        ];
        this.classList = [
            { label: 'I', value: '1' },
            { label: 'II', value: '2' },
            { label: 'III', value: '3' },
            { label: 'IV', value: '4' },
            { label: 'V', value: '5' },
            { label: 'VI', value: '6' },
            { label: 'VII', value: '7' },
            { label: 'VIII', value: '8' },
            { label: 'IX', value: '9' },
            { label: 'X', value: '10' },
            { label: 'XI', value: '11' },
            { label: 'XII', value: '12' },
        ];
        this.studentData = {};
        this.routeFields = {};
        this.ReasonId = {};
        this.SubReasonId = {};
        this.TypeId = {};
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe('en-US');
        this.insroldept = false;
        this.spacepatern = /^[^\s].*$/;
        this.emis_username = this.userSessionService.emis_username();
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        debugger;
        this.imageData = '';
        this.typeActive = false;
        this.subReActive = false;
        this.districtName = '';
        this.schoolName = '';
        this.routeData = this.route.snapshot;
        this.routeFields = this.routeData.queryParams;
        this.route.queryParams.subscribe((params) => {
            this.studentData = JSON.parse(params['studentDetails']);
            this.userform.patchValue(this.studentData);
            if (this.studentData.SubReasonId == '92') {
                this.getUdiseCode();
            }
        });
        this.getDropdownList();
        this.form.controls["SchoolId"].setValue(this.routeFields.school);
        this.form.controls["StudentId"].setValue(this.studentData.stud_id);
        this.form.controls["BlockId"].setValue(this.routeFields.block);
        this.form.controls["ReasonId"].setValue('');
        console.log('this.form', this.form.value, this.studentData.ac_year);
        console.log('this.userform', this.userform.value);
        this.getLatLong();
    }
    initialValidator() {
        this.userform = this.fb.group({
            'student_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.student_name, null),
            'father_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.father_name, null),
            'mother_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.mother_name, null),
            'new_emis_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.new_emis_id, null),
            'Address': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.Address, null),
            'cwsn_student': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.cwsn_student, null),
            'diff_abled_reason': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.diff_abled_reason, null),
            'differently_abled': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.differently_abled, null),
            'ac_year': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.ac_year, null),
            'school_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.school_name, null),
            'stud_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.stud_id, null),
            'class_studying_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.class_studying_id, null),
            'acad_yr': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.acad_yr, null),
        });
        this.form = this.fb.group({
            "Id": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            "UserId": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.userSessionService.emis_username(), null),
            "BlockId": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.routeFields.block, null),
            "SchoolId": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.routeFields.school, null),
            "StudentId": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.studentData.stud_id, null),
            'ReasonId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'SubReasonId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'TypeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'LabourDistrict': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'LabourBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'LabourAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'AcademicDistrict': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'AcademicBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'AcademicSchool': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ParentDiseaseOther': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ChildDiseaseOther': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationType': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'Migrationpurpose': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationSubType': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationState': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationDistrict': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationPeriod': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationYear': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationMonth': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'MigrationAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateSchoolName': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateSchoolAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateSchoolMobileNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateDistrict': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateBlock': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateInstitute': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateRollNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateDepartment': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateEmisNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'admitted_udise': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateChildAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateRegNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateProof': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateDob': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'ValidateMadrassa': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            "ValidateState": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            "ValidateClass": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            "ValidateInstituteName": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            "OtherCountry": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            "stud_pass_sts": new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
        });
    }
    getLatLong() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.options = {
                    maximumAge: 3000,
                    enableHighAccuracy: true
                };
                this.geolocation.getCurrentPosition(this.options).then((pos) => {
                    this.currentPos = pos;
                    const location = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                        time: new Date(),
                    };
                    this.lat = location.lat;
                    this.long = location.lng;
                    resolve(pos);
                }, (err) => {
                    reject(err.message);
                });
            });
        });
    }
    getDropdownList() {
        this.allDropoutReason = [];
        this.reasonList = [];
        // let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_dropout_reason_2024_25_json_stage.json';
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_dropout_reason_2024_25_json_prod.json';
        this.http.get(json_name).subscribe((data) => {
            this.allDropoutReason = data;
            let reasonList = [...new Map(this.allDropoutReason.map(item => [item['reason_type'], item])).values()];
            this.reasonList = reasonList.map(item => { return { label: item.reason_type, value: item.reason_type_id, reasontype_id: item.id }; });
            console.log('this.reasonList', this.reasonList);
            // this.getSurvey(3190, 23642576);
            this.getSurvey(this.routeFields.school, this.studentData.stud_id);
        });
        this.getDistList(1, '', '');
    }
    getSurvey(schoolId, stuId) {
        this.insroldept = false;
        this.emisService.OoscSurveyAdmGet(schoolId, stuId).subscribe(res => {
            if (res.dataStatus) {
                this.stuSaveActive = true;
                this.savedStuData = res.result[0];
                this.stuIndexId = this.savedStuData.Id;
                this.form.patchValue(this.savedStuData);
                if (this.savedStuData.SubReasonId == '92') {
                    this.getUdiseCode();
                }
                if (this.savedStuData.ReasonId) {
                    let ReasonId = this.reasonList.filter(tt => tt.value == this.savedStuData.ReasonId);
                    this.form.controls['ReasonId'].setValue(ReasonId[0]);
                }
                this.savedStuData.SubReasonId ? this.getSubreasonList(2, this.savedStuData.ReasonId) : '';
                this.savedStuData.TypeId ? this.getTypeList(2, this.savedStuData.SubReasonId) : '';
                if (this.savedStuData.ReasonId == 1) {
                    this.savedStuData.LabourDistrict ? this.getDistList(2, this.savedStuData.LabourDistrict, 'LabourDistrict') : '';
                    this.savedStuData.LabourBlock ? this.getBlockList(2, this.savedStuData.LabourBlock, 'LabourBlock', this.savedStuData.LabourDistrict) : '';
                }
                if (this.savedStuData.ReasonId == 5) {
                    this.savedStuData.AcademicDistrict ? this.getDistList(2, this.savedStuData.AcademicDistrict, 'AcademicDistrict') : '';
                    this.savedStuData.AcademicBlock ? this.getBlockList(2, this.savedStuData.AcademicBlock, 'AcademicBlock', this.savedStuData.AcademicDistrict) : '';
                    this.savedStuData.AcademicSchool ? this.onAcadBlockChange(2, this.savedStuData.AcademicSchool, 'AcademicSchool', this.savedStuData.AcademicBlock) : '';
                }
                if (this.savedStuData.ReasonId == 9) {
                    if (this.savedStuData.OtherCountry) {
                        let OtherCountry = this.countryList.filter(tt => tt.value == this.savedStuData.OtherCountry);
                        this.form.controls['OtherCountry'].setValue(OtherCountry[0]);
                    }
                    // if (this.savedStuData.MigrationType) {
                    //   let MigrationType = this.reasonList.filter(tt => tt.value == this.savedStuData.MigrationType);
                    //   this.form.controls['MigrationType'].setValue(MigrationType[0]);
                    // }
                    // if (this.savedStuData.MigrationSubType) {
                    //   if (this.savedStuData.TypeId == 184 || this.savedStuData.TypeId == 185) {
                    //     var MigrationSubType = this.migrationType1.filter(tt => tt.value == this.savedStuData.MigrationSubType);
                    //   } else {
                    //     var MigrationSubType = this.migrationType1_1.filter(tt => tt.value == this.savedStuData.MigrationSubType);
                    //   }
                    //   this.form.controls['MigrationSubType'].setValue(MigrationSubType[0]);
                    // }
                    if (this.savedStuData.MigrationType) {
                        if (this.savedStuData.TypeId == 184 || this.savedStuData.TypeId == 185) {
                            var MigrationType = this.migrationType1.filter(tt => tt.value == this.savedStuData.MigrationType);
                        }
                        else {
                            var MigrationType = this.migrationType1_1.filter(tt => tt.value == this.savedStuData.MigrationType);
                        }
                        this.form.controls['MigrationType'].setValue(MigrationType[0]);
                        var MigrationType = this.migrationType1.filter(tt => tt.value == this.savedStuData.MigrationType);
                        this.form.controls['MigrationType'].setValue(MigrationType[0]);
                        var Migrationpurpose = this.migrationType1_1.filter(tt => tt.value == this.savedStuData.migrat_purpose);
                        this.form.controls['Migrationpurpose'].setValue(Migrationpurpose[0]);
                    }
                    // if (this.savedStuData.MigrationSubType) {
                    //   let MigrationSubType = this.migrationType2.filter(tt => tt.value == this.savedStuData.MigrationSubType);
                    //   this.form.controls['MigrationSubType'].setValue(MigrationSubType[0]);
                    // }
                    this.savedStuData.MigrationState ? this.getDistList(3, this.savedStuData.MigrationState, 'MigrationState') : '';
                    this.savedStuData.MigrationDistrict ? this.getDistList(2, this.savedStuData.MigrationDistrict, 'MigrationDistrict') : '';
                    this.savedStuData.MigrationBlock ? this.getBlockList(2, this.savedStuData.MigrationBlock, 'MigrationBlock', this.savedStuData.MigrationDistrict) : '';
                    if (this.savedStuData.MigrationPeriod) {
                        let MigrationPeriod = this.migrationPeriod.filter(tt => tt.value == this.savedStuData.MigrationPeriod);
                        this.form.controls['MigrationPeriod'].setValue(MigrationPeriod[0]);
                    }
                    if (this.savedStuData.MigrationYear) {
                        let MigrationYear = this.yearList.filter(tt => tt.value == this.savedStuData.MigrationYear);
                        this.form.controls['MigrationYear'].setValue(MigrationYear[0]);
                    }
                    if (this.savedStuData.MigrationMonth) {
                        let MigrationMonth = this.monthList.filter(tt => tt.value == this.savedStuData.MigrationMonth);
                        this.form.controls['MigrationMonth'].setValue(MigrationMonth[0]);
                    }
                }
                if (this.savedStuData.ReasonId == 10) {
                    if (this.savedStuData.OtherCountry) {
                        let OtherCountry = this.countryList.filter(tt => tt.value == this.savedStuData.OtherCountry);
                        this.form.controls['OtherCountry'].setValue(OtherCountry[0]);
                    }
                    this.savedStuData.ValidateDistrict ? this.getDistList(2, this.savedStuData.ValidateDistrict, 'ValidateDistrict') : '';
                    this.savedStuData.ValidateBlock ? this.getBlockList(2, this.savedStuData.ValidateBlock, 'ValidateBlock', this.savedStuData.ValidateDistrict) : '';
                    // this.savedStuData.ValidateInstitute ? this.onValidateInst(2, this.savedStuData.ValidateInstitute, 'ValidateInstitute', this.savedStuData.ValidateDistrict) : '';
                    debugger;
                    this.savedStuData.ValidateState ? this.getDistList(3, this.savedStuData.ValidateState, 'ValidateState') : '';
                    if (this.savedStuData.ValidateState == 124) {
                        this.insroldept = true;
                    }
                    if (this.savedStuData.ValidateClass) {
                        let ValidateClass = this.classList.filter(tt => tt.value == this.savedStuData.ValidateClass);
                        this.form.controls['ValidateClass'].setValue(ValidateClass[0]);
                    }
                }
                if (this.savedStuData.ValidateProof) {
                    this.form.controls['ValidateProof'].setValue(this.savedStuData.ValidateProof);
                    this.viewPic('show');
                }
            }
            else {
                this.initialValidator();
                this.stuSaveActive = false;
            }
        });
    }
    onReasonChange(event, reason_type_id) {
        debugger;
        // this.reasonTypeId = reason_type_id;
        // console.log('this.reasonTypeId1',reason_type_id)
        this.onFormReset1();
        this.form.controls['SubReasonId'].setValue('');
        this.form.controls['TypeId'].setValue('');
        this.getSubreasonList(1, event);
    }
    onSubReasonChange(event, reason_type_id) {
        this.reasonTypeId = reason_type_id;
        console.log('this.reasonTypeId', this.reasonTypeId);
        this.onFormReset();
        this.form.controls['TypeId'].setValue('');
        this.getTypeList(1, event);
        this.districtName = '';
        this.schoolName = '';
    }
    onTypeChange(event) {
        this.onFormReset();
    }
    onDropStateChange(event) {
        debugger;
        if (event != 124) {
            this.insroldept = true;
        }
        else {
            this.insroldept = false;
        }
        this.form.controls['ValidateDistrict'].setValue('');
        this.form.controls['ValidateBlock'].setValue('');
        this.form.controls['ValidateInstituteName'].setValue('');
        this.form.controls['ValidateRollNo'].setValue('');
        this.form.controls['ValidateDepartment'].setValue('');
    }
    onDropDistChange(event) {
        if (this.form.value.ReasonId.value == 1) {
            this.form.controls['LabourBlock'].setValue('');
        }
        if (this.form.value.ReasonId.value == 9) {
            this.form.controls['MigrationBlock'].setValue('');
        }
        if (this.form.value.ReasonId.value == 5) {
            this.form.controls['AcademicBlock'].setValue('');
        }
        if (this.form.value.ReasonId.value == 10) {
            this.form.controls['ValidateBlock'].setValue('');
            // this.form.controls['ValidateInstitute'].setValue('');
            this.form.controls['ValidateInstituteName'].setValue('');
        }
        this.getBlockList(1, '', '', event);
    }
    getSubreasonList(id, event) {
        this.subReasonList = [];
        let subReasonList = this.allDropoutReason.filter(tt => tt.reason_type_id == event);
        let list = subReasonList.filter(tt => tt.sub_reason != '');
        if (list.length > 0) {
            this.subReActive = true;
            let subReasonListDistinct = [...new Map(subReasonList.map(item => [item['sub_reason'], item])).values()];
            this.subReasonList = subReasonListDistinct.map(item => { return { label: item.sub_reason, value: item.sub_reason_id, reasontype_id: item.id }; });
            if (id == 2) { // for form patch
                let SubReasonId = this.subReasonList.filter(tt => tt.value == this.savedStuData.SubReasonId);
                this.form.controls['SubReasonId'].setValue(SubReasonId[0]);
            }
        }
        else {
            this.subReActive = false;
        }
    }
    getTypeList(id, event) {
        this.typeReasonList = [];
        let typeReasonList = this.allDropoutReason.filter(tt => tt.sub_reason_id == event);
        let typeList = typeReasonList.filter(tt => tt.type != '' && tt.subreason_type != '');
        if (typeList.length > 0) {
            this.form.controls['TypeId'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.typeActive = true;
            let typeReasonListDistinct = [...new Map(typeReasonList.map(item => [item['subreason_type'], item])).values()];
            this.typeReasonList = typeReasonListDistinct.map(item => { return { label: item.subreason_type, value: item.id }; });
            if (id == 2) { // for form patch
                let TypeId = this.typeReasonList.filter(tt => tt.value == this.savedStuData.TypeId);
                this.form.controls['TypeId'].setValue(TypeId[0]);
            }
        }
        else {
            this.typeActive = false;
            this.form.controls['TypeId'].setValue('');
            this.form.controls['TypeId'].setValidators(null);
        }
        this.form.controls['TypeId'].updateValueAndValidity();
    }
    getDistList(id, formvalue, formcrl) {
        debugger;
        this.distList = [];
        this.stateList = [];
        this.newstateList = [];
        this.countryList = [];
        let country_json = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_country.json';
        this.http.get(country_json).subscribe((data) => {
            if (data) {
                let country = data.country.filter(tt => tt.country_code != 1078);
                this.countryList = country.map(l => { return { label: l.country_name, value: l.country_code }; });
                console.log('this.countryList', this.countryList);
                let stateList = data.state.filter(tt => tt.state_name != 'Tamil Nadu');
                this.stateList = stateList.map(l => { return { label: l.state_name, value: l.state_code }; });
                this.newstateList = data.state.map(l => { return { label: l.state_name, value: l.state_code }; });
                this.distList = data.district.map(l => { return { label: l.district_name, value: l.disid }; });
                this.distList.sort((a, b) => {
                    if (a.label < b.label)
                        return -1;
                    if (a.label > b.label)
                        return 1;
                    return 0;
                });
                if (id == 2) { // for form patch
                    let value = this.distList.filter(tt => tt.value == formvalue);
                    if (value && value.length > 0) {
                        this.form.controls[formcrl].setValue(value[0]);
                    }
                    else {
                        this.form.controls[formcrl].setValue('');
                    }
                }
                if (id == 3) { // for form patch
                    if (formvalue == 124) {
                        var value = this.newstateList.filter(tt => tt.value == formvalue);
                    }
                    else {
                        var value = this.stateList.filter(tt => tt.value == formvalue);
                    }
                    if (value && value.length > 0) {
                        this.form.controls[formcrl].setValue(value[0]);
                    }
                }
            }
        });
    }
    getBlockList(id, formvalue, formcrl, distId) {
        this.blockList = [];
        this.masterBlockList = [];
        let query = 'SELECT * FROM allBlockDetails';
        return this.sqliteDB.getDataLocalDB(query).then(block => {
            if (block.rows.length > 0) {
                let blockTemp = [];
                for (var i = 0; i < block.rows.length; i++) {
                    blockTemp.push(block.rows.item(i));
                }
                ;
                this.masterBlockList = blockTemp;
                block = this.masterBlockList.filter(tt => tt.district_id == distId);
                const key = 'blkid';
                let black_unique_list = [...new Map(block.map(item => [item[key], item])).values()];
                if (this.masterBlockList) {
                    if (this.masterBlockList.length > 0) {
                        this.blockList = black_unique_list.map(l => { return { label: l.block_name, value: l.blkid }; });
                        this.blockList.sort((a, b) => {
                            if (a.label < b.label)
                                return -1;
                            if (a.label > b.label)
                                return 1;
                            return 0;
                        });
                        if (id == 2) { // for form patch
                            let value = this.blockList.filter(tt => tt.value == formvalue);
                            if (value && value.length > 0) {
                                this.form.controls[formcrl].setValue(value[0]);
                            }
                        }
                    }
                }
            }
            else {
                this.getBlockList1(distId, id, formvalue, formcrl, distId);
            }
        });
        // if (id == 2) {  // for form patch
        //   let value = this.blockList.filter(tt => tt.value == formvalue);
        //   this.form.controls[formcrl].setValue(value[0]);
        // }
        // this.blockList = [];
        // let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_habitation.json';
        // this.http.get<any>(json_name).subscribe((data) => {
        //   if (data) {
        //     this.allBlockList = data.block;
        //     let filterBlockList: any[] = this.allBlockList.filter(tt => tt.district_id == distId);
        //     this.blockList = filterBlockList.map(l => { return { label: l.block_name, value: l.blkid }; });
        //     this.blockList.sort((a, b) => {
        //       if (a.label < b.label)
        //         return -1;
        //       if (a.label > b.label)
        //         return 1;
        //       return 0;
        //     });
        //     if (id == 2) {  // for form patch
        //       let value = this.blockList.filter(tt => tt.value == formvalue);
        //       this.form.controls[formcrl].setValue(value[0]);
        //     }
        //   }
        // });
    }
    getBlockList1(eventval, id, formvalue, formcrl, distId) {
        let connectionStatus = this.networkService.getCurrentNetworkStatus();
        if (connectionStatus !== 1) {
            let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_habitation.json';
            this.http.get(json_name).subscribe((data) => {
                this.masterBlockList = data.block;
                this.masterHabitationList = data.habitation;
                this.masterLocalityList = data.localbodycode;
                if (this.masterBlockList) {
                    if (this.masterBlockList.length > 0) {
                        let blkDeleteQuery = 'DELETE FROM allBlockDetails';
                        return this.sqliteDB.getDataLocalDB(blkDeleteQuery).then(blockdata => {
                            let sqlArray = [];
                            this.masterBlockList.forEach(element => {
                                sqlArray.push(['INSERT INTO allBlockDetails VALUES (?,?,?,?)', [null, element.district_id, element.blkid, element.block_name]]);
                            });
                            this.sqliteDB.bulkInsert(sqlArray).then((insertres) => {
                                this.checkBlockLocalDB(eventval, id, formvalue, formcrl, distId);
                            });
                        });
                    }
                }
            });
        }
    }
    checkBlockLocalDB(eventval, id, formvalue, formcrl, distId) {
        this.blockList = [];
        this.masterBlockList = [];
        let query = 'SELECT * FROM allBlockDetails';
        return this.sqliteDB.getDataLocalDB(query).then(block => {
            if (block.rows.length > 0) {
                let blockTemp = [];
                for (var i = 0; i < block.rows.length; i++) {
                    blockTemp.push(block.rows.item(i));
                }
                ;
                this.masterBlockList = blockTemp;
                block = this.masterBlockList.filter(tt => tt.district_id == eventval);
                const key = 'blkid';
                let black_unique_list = [...new Map(block.map(item => [item[key], item])).values()];
                if (this.masterBlockList) {
                    if (this.masterBlockList.length > 0) {
                        this.blockList = black_unique_list.map(l => { return { label: l.block_name, value: l.blkid }; });
                        this.blockList.sort((a, b) => {
                            if (a.label < b.label)
                                return -1;
                            if (a.label > b.label)
                                return 1;
                            return 0;
                        });
                    }
                }
                this.getBlockList(id, formvalue, formcrl, distId);
            }
            else {
                this.getBlockList1(eventval, id, formvalue, formcrl, distId);
            }
        });
    }
    onAcadBlockChange(id, formvalue, formcrl, blockId) {
        if (id == 1) {
            this.form.controls['AcademicSchool'].setValue('');
        }
        this.schoolList = [];
        this.emisService.getOoscSchoolList(blockId).subscribe(res => {
            if (res.dataStatus) {
                let schoolList = res.result;
                this.schoolList = schoolList.map(l => { return { label: l.school_name, value: l.school_id }; });
                this.schoolList.sort((a, b) => {
                    if (a.label < b.label)
                        return -1;
                    if (a.label > b.label)
                        return 1;
                    return 0;
                });
                if (id == 2) { // for form patch
                    let value = this.schoolList.filter(tt => tt.value == formvalue);
                    this.form.controls[formcrl].setValue(value[0]);
                }
            }
            else {
                // this.alertService.error(res.message);
            }
        });
    }
    onValidateInst(id, formvalue, formcrl, distId) {
        debugger;
        this.instituteList = [];
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/umis_master_collegelist.json';
        this.http.get(json_name).subscribe((data) => {
            if (data) {
                let distIntFilter = data.filter(tt => tt.district_id == distId);
                this.instituteList = distIntFilter.map(l => { return { label: l.institutename, value: l.id }; });
                this.instituteList.sort((a, b) => {
                    if (a.label < b.label)
                        return -1;
                    if (a.label > b.label)
                        return 1;
                    return 0;
                });
                if (id == 2) { // for form patch
                    let value = this.instituteList.filter(tt => tt.value == formvalue);
                    this.form.controls[formcrl].setValue(value[0]);
                }
            }
        });
    }
    onMigration(id, event) {
        debugger;
        if (id == 1) {
            this.form.controls['MigrationSubType'].setValue('');
            this.form.controls['MigrationState'].setValue('');
            this.form.controls['MigrationDistrict'].setValue('');
            this.form.controls['MigrationBlock'].setValue('');
            this.form.controls['MigrationPeriod'].setValue('');
            this.form.controls['MigrationYear'].setValue('');
            this.form.controls['MigrationMonth'].setValue('');
            this.form.controls['MigrationAddress'].setValue('');
        }
        if (id == 2) {
            this.form.controls['OtherCountry'].setValue('');
            this.form.controls['MigrationState'].setValue('');
            this.form.controls['MigrationDistrict'].setValue('');
            this.form.controls['MigrationBlock'].setValue('');
        }
    }
    onFormReset() {
        this.ReasonId = "";
        this.SubReasonId = "";
        this.TypeId = "";
        this.ReasonId = this.form.value.ReasonId ? this.form.value.ReasonId : '';
        this.SubReasonId = this.form.value.SubReasonId ? this.form.value.SubReasonId : '';
        this.TypeId = this.form.value.TypeId ? this.form.value.TypeId : '';
        var migrationtype = this.form.value.MigrationType ? this.form.value.MigrationType : '';
        var migration_purpose = this.form.value.Migrationpurpose ? this.form.value.Migrationpurpose : '';
        this.form.reset();
        this.form.controls['UserId'].setValue(this.userSessionService.emis_username());
        this.form.controls['BlockId'].setValue(this.routeFields.block);
        this.form.controls['SchoolId'].setValue(this.routeFields.school);
        this.form.controls['StudentId'].setValue(this.studentData.stud_id);
        this.form.controls['ReasonId'].setValue(this.ReasonId);
        this.form.controls['SubReasonId'].setValue(this.SubReasonId);
        this.form.controls['TypeId'].setValue(this.TypeId);
        this.form.controls['MigrationType'].setValue(migrationtype);
        this.form.controls['Migrationpurpose'].setValue(migration_purpose);
    }
    onFormReset1() {
        this.ReasonId = "";
        this.SubReasonId = "";
        this.TypeId = "";
        this.ReasonId = this.form.value.ReasonId ? this.form.value.ReasonId : '';
        this.SubReasonId = this.form.value.SubReasonId ? this.form.value.SubReasonId : '';
        this.TypeId = this.form.value.TypeId ? this.form.value.TypeId : '';
        this.form.reset();
        this.form.controls['UserId'].setValue(this.userSessionService.emis_username());
        this.form.controls['BlockId'].setValue(this.routeFields.block);
        this.form.controls['SchoolId'].setValue(this.routeFields.school);
        this.form.controls['StudentId'].setValue(this.studentData.stud_id);
        this.form.controls['ReasonId'].setValue(this.ReasonId);
    }
    onFormValidator() {
        var _a, _b, _c, _d, _e;
        debugger;
        if (this.form.value.ReasonId.value == 1) {
            this.form.controls['LabourDistrict'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['LabourBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['LabourAddress'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['LabourDistrict'].setValue('');
            this.form.controls['LabourDistrict'].setValidators(null);
            this.form.controls['LabourBlock'].setValue('');
            this.form.controls['LabourBlock'].setValidators(null);
            this.form.controls['LabourAddress'].setValue('');
            this.form.controls['LabourAddress'].setValidators(null);
        }
        if (this.form.value.ReasonId.value == 5 && this.form.value.SubReasonId.value == 23) {
            this.form.controls['AcademicDistrict'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['AcademicBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['AcademicSchool'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['AcademicDistrict'].setValue('');
            this.form.controls['AcademicDistrict'].setValidators(null);
            this.form.controls['AcademicBlock'].setValue('');
            this.form.controls['AcademicBlock'].setValidators(null);
            this.form.controls['AcademicSchool'].setValue('');
            this.form.controls['AcademicSchool'].setValidators(null);
        }
        if (this.form.value.ReasonId.value == 6 && this.form.value.SubReasonId.value == 37 && ((_a = this.form.value.TypeId) === null || _a === void 0 ? void 0 : _a.value) == 124) {
            this.form.controls['ParentDiseaseOther'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['ParentDiseaseOther'].setValue('');
            this.form.controls['ParentDiseaseOther'].setValidators(null);
        }
        if (this.form.value.ReasonId.value == 6 && this.form.value.SubReasonId.value == 38 && ((_b = this.form.value.TypeId) === null || _b === void 0 ? void 0 : _b.value) == 135) {
            this.form.controls['ChildDiseaseOther'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['ChildDiseaseOther'].setValue('');
            this.form.controls['ChildDiseaseOther'].setValidators(null);
        }
        if (this.form.value.ReasonId.value == 9) {
            this.form.controls['MigrationType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['MigrationType'].setValue('');
            this.form.controls['MigrationType'].setValidators(null);
        }
        // if (this.form.value.MigrationType && this.form.value.TypeId?.value != 188) {
        //   this.form.controls['MigrationSubType'].setValidators(Validators.required);
        // } else {
        //   this.form.controls['MigrationSubType'].setValue('');
        //   this.form.controls['MigrationSubType'].setValidators(null);
        // }
        if (this.form.value.MigrationPeriod) {
            this.form.controls['MigrationYear'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['MigrationYear'].setValue('');
            this.form.controls['MigrationYear'].setValidators(null);
        }
        if (this.form.value.MigrationYear) {
            this.form.controls['MigrationMonth'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['MigrationMonth'].setValue('');
            this.form.controls['MigrationMonth'].setValidators(null);
        }
        // if (this.form.value.MigrationSubType.value == 1) {
        //   this.form.controls['MigrationState'].setValidators(Validators.required);
        // } else {
        //   this.form.controls['MigrationState'].setValue('');
        //   this.form.controls['MigrationState'].setValidators(null);
        // }
        // if ((this.form.value.MigrationSubType && (this.form.value.MigrationSubType.value == 2 || this.form.value.MigrationSubType.value == 3)) || (this.form.value.MigrationType && this.form.value.MigrationType.value == 1 && this.form.value.TypeId.value == 188)) {
        //   this.form.controls['MigrationDistrict'].setValidators(Validators.required);
        // } else {
        //   this.form.controls['MigrationDistrict'].setValue('');
        //   this.form.controls['MigrationDistrict'].setValidators(null);
        // }
        // if ((this.form.value.MigrationSubType && this.form.value.MigrationSubType.value == 3) || (this.form.value.MigrationType && this.form.value.MigrationType.value == 1 && this.form.value.TypeId.value == 188)) {
        //   this.form.controls['MigrationBlock'].setValidators(Validators.required);
        // } else {
        //   this.form.controls['MigrationBlock'].setValue('');
        //   this.form.controls['MigrationBlock'].setValidators(null);
        // }
        if (this.form.value.MigrationType && this.form.value.MigrationType.value == 1 && ((_c = this.form.value.TypeId) === null || _c === void 0 ? void 0 : _c.value) == 188) {
            this.form.controls['MigrationAddress'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['MigrationAddress'].setValue('');
            this.form.controls['MigrationAddress'].setValidators(null);
        }
        if ((this.form.value.ReasonId.value == 9 && (((_d = this.form.value.TypeId) === null || _d === void 0 ? void 0 : _d.value) == 184 || ((_e = this.form.value.TypeId) === null || _e === void 0 ? void 0 : _e.value) == 185))) {
            this.form.controls['MigrationPeriod'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['MigrationPeriod'].setValue('');
            this.form.controls['MigrationPeriod'].setValidators(null);
        }
        if (this.form.value.ReasonId.value == 10 && (this.form.value.SubReasonId.value == 64 || this.form.value.SubReasonId.value == 65 || this.form.value.SubReasonId.value == 66)) {
            this.form.controls['ValidateSchoolAddress'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
            this.form.controls['ValidateSchoolMobileNumber'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[6-9]{1}[0-9]{9}')]);
        }
        else {
            this.form.controls['ValidateSchoolAddress'].setValue('');
            this.form.controls['ValidateSchoolAddress'].setValidators(null);
            this.form.controls['ValidateSchoolMobileNumber'].setValue('');
            this.form.controls['ValidateSchoolMobileNumber'].setValidators(null);
        }
        if (this.form.value.ReasonId.value == 10 && (this.form.value.SubReasonId.value == 64 || this.form.value.SubReasonId.value == 65 || this.form.value.SubReasonId.value == 66) || this.form.value.SubReasonId.value == 78) {
            this.form.controls['ValidateSchoolName'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['ValidateSchoolName'].setValue('');
            this.form.controls['ValidateSchoolName'].setValidators(null);
        }
        // if (this.form.value.SubReasonId.value == 78 || this.form.value.SubReasonId.value == 86) {
        //   this.form.controls['ValidateState'].setValidators(Validators.required);
        // } else {
        //   this.form.controls['ValidateState'].setValue('');
        //   this.form.controls['ValidateState'].setValidators(null);
        // }
        if (this.form.value.SubReasonId.value == 78) {
            // this.form.controls['ValidateState'].setValidators(Validators.required);
            this.form.controls['ValidateClass'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            // this.form.controls['ValidateState'].setValue('');
            // this.form.controls['ValidateState'].setValidators(null);
            this.form.controls['ValidateClass'].setValue('');
            this.form.controls['ValidateClass'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 68) {
            this.form.controls['ValidateEmisNo'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('[0-9]*')]);
        }
        else {
            this.form.controls['ValidateEmisNo'].setValue('');
            this.form.controls['ValidateEmisNo'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 92) {
            this.form.controls['admitted_udise'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[0-9]{11}$')]);
        }
        else {
            this.form.controls['admitted_udise'].setValue('');
            this.form.controls['admitted_udise'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 69) {
            this.form.controls['ValidateChildAddress'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['ValidateChildAddress'].setValue('');
            this.form.controls['ValidateChildAddress'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 70) {
            this.form.controls['ValidateRegNo'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('[0-9]*')]);
        }
        else {
            this.form.controls['ValidateRegNo'].setValue('');
            this.form.controls['ValidateRegNo'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 67 || this.form.value.SubReasonId.value == 73 || this.form.value.SubReasonId.value == 74 ||
            this.form.value.SubReasonId.value == 80 ||
            this.form.value.SubReasonId.value == 84 || this.form.value.SubReasonId.value == 85) {
            this.form.controls['ValidateDistrict'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['ValidateBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            // this.form.controls['ValidateInstitute'].setValidators(Validators.required);
            // this.form.controls['ValidateInstituteName'].setValidators(Validators.required);
        }
        else if (this.form.value.SubReasonId.value == 81 || this.form.value.SubReasonId.value == 82) {
            this.form.controls['ValidateState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            if (this.form.value.ValidateState.value == 124) {
                this.form.controls['ValidateDistrict'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls['ValidateBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            }
            else {
                this.form.controls['ValidateDistrict'].setValidators(null);
                this.form.controls['ValidateDistrict'].setValue('');
                this.form.controls['ValidateBlock'].setValidators(null);
                this.form.controls['ValidateBlock'].setValue('');
            }
        }
        else if (this.form.value.SubReasonId.value == 78 || this.form.value.SubReasonId.value == 86) {
            this.form.controls['ValidateState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['ValidateState'].setValue('');
            this.form.controls['ValidateState'].setValidators(null);
            this.form.controls['ValidateDistrict'].setValue('');
            this.form.controls['ValidateDistrict'].setValidators(null);
            this.form.controls['ValidateBlock'].setValue('');
            this.form.controls['ValidateBlock'].setValidators(null);
        }
        if ((this.form.value.SubReasonId.value == 77 || this.form.value.SubReasonId.value == 83) || this.form.value.SubReasonId.value == 67 || this.form.value.SubReasonId.value == 73 || this.form.value.SubReasonId.value == 74 ||
            this.form.value.SubReasonId.value == 80 ||
            this.form.value.SubReasonId.value == 81 || this.form.value.SubReasonId.value == 82 ||
            this.form.value.SubReasonId.value == 84 || this.form.value.SubReasonId.value == 85) {
            this.form.controls['ValidateInstituteName'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['ValidateInstituteName'].setValue('');
            this.form.controls['ValidateInstituteName'].setValidators(null);
        }
        // if (this.form.value.SubReasonId.value == 80 || this.form.value.SubReasonId.value == 81 || this.form.value.SubReasonId.value == 82 ||
        //   this.form.value.SubReasonId.value == 83 || this.form.value.SubReasonId.value == 84 || this.form.value.SubReasonId.value == 85)
        if (this.form.value.SubReasonId.value == 80 || this.form.value.SubReasonId.value == 81 || this.form.value.SubReasonId.value == 82 ||
            this.form.value.SubReasonId.value == 84 || this.form.value.SubReasonId.value == 85) {
            // this.form.controls['ValidateRollNo'].setValidators(Validators.required);
            this.form.controls['ValidateRollNo'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('[0-9]*')]);
            this.form.controls['ValidateDepartment'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['ValidateRollNo'].setValue('');
            this.form.controls['ValidateRollNo'].setValidators(null);
            this.form.controls['ValidateDepartment'].setValue('');
            this.form.controls['ValidateDepartment'].setValidators(null);
        }
        // if (this.form.value.SubReasonId.value == 71 || this.form.value.SubReasonId.value == 72 || this.form.value.SubReasonId.value == 75) {
        //     // this.form.value.SubReasonId.value == 79
        //   this.form.controls['ValidateProof'].setValidators(Validators.required);
        // }
        // else if(this.form.value.SubReasonId.value == 79){
        //   this.form.controls['ValidateProof'].setValidators(null);
        // }
        // else {
        //   this.form.controls['ValidateProof'].setValue('');
        //   this.form.controls['ValidateProof'].setValidators(null);
        // }
        this.form.controls['ValidateProof'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        if (this.form.value.SubReasonId.value == 72 || this.form.value.SubReasonId.value == 75) {
            this.form.controls['ValidateDob'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['ValidateDob'].setValue('');
            this.form.controls['ValidateDob'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 76) {
            this.form.controls['ValidateMadrassa'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.spacepatern)]);
        }
        else {
            this.form.controls['ValidateMadrassa'].setValue('');
            this.form.controls['ValidateMadrassa'].setValidators(null);
        }
        // if (this.form.value.SubReasonId.value == 87 || this.form.value.MigrationSubType.value == 4) {
        //   this.form.controls['OtherCountry'].setValidators(Validators.required);
        // }
        // else {
        //   this.form.controls['OtherCountry'].setValue('');
        //   this.form.controls['OtherCountry'].setValidators(null);
        // }
        if (this.form.value.SubReasonId.value == 88 || this.form.value.SubReasonId.value == 89) {
            this.form.controls['MigrationBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['MigrationDistrict'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['MigrationBlock'].setValue('');
            this.form.controls['MigrationBlock'].setValidators(null);
            this.form.controls['MigrationDistrict'].setValue('');
            this.form.controls['MigrationDistrict'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 90) {
            this.form.controls['MigrationState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['MigrationState'].setValue('');
            this.form.controls['MigrationState'].setValidators(null);
        }
        if (this.form.value.SubReasonId.value == 91) {
            this.form.controls['OtherCountry'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        }
        else {
            this.form.controls['OtherCountry'].setValue('');
            this.form.controls['OtherCountry'].setValidators(null);
        }
        this.form.controls['LabourDistrict'].updateValueAndValidity();
        this.form.controls['LabourBlock'].updateValueAndValidity();
        this.form.controls['LabourAddress'].updateValueAndValidity();
        this.form.controls['AcademicDistrict'].updateValueAndValidity();
        this.form.controls['AcademicBlock'].updateValueAndValidity();
        this.form.controls['AcademicSchool'].updateValueAndValidity();
        this.form.controls['ParentDiseaseOther'].updateValueAndValidity();
        this.form.controls['ChildDiseaseOther'].updateValueAndValidity();
        this.form.controls['MigrationType'].updateValueAndValidity();
        this.form.controls['MigrationSubType'].updateValueAndValidity();
        this.form.controls['MigrationState'].updateValueAndValidity();
        this.form.controls['MigrationDistrict'].updateValueAndValidity();
        this.form.controls['MigrationBlock'].updateValueAndValidity();
        this.form.controls['MigrationPeriod'].updateValueAndValidity();
        this.form.controls['MigrationYear'].updateValueAndValidity();
        this.form.controls['MigrationMonth'].updateValueAndValidity();
        this.form.controls['MigrationAddress'].updateValueAndValidity();
        this.form.controls['ValidateSchoolName'].updateValueAndValidity();
        this.form.controls['ValidateSchoolAddress'].updateValueAndValidity();
        this.form.controls['ValidateSchoolMobileNumber'].updateValueAndValidity();
        this.form.controls['ValidateDistrict'].updateValueAndValidity();
        this.form.controls['ValidateBlock'].updateValueAndValidity();
        this.form.controls['ValidateInstitute'].updateValueAndValidity();
        this.form.controls['ValidateRollNo'].updateValueAndValidity();
        this.form.controls['ValidateDepartment'].updateValueAndValidity();
        this.form.controls['ValidateEmisNo'].updateValueAndValidity();
        this.form.controls['admitted_udise'].updateValueAndValidity();
        this.form.controls['ValidateChildAddress'].updateValueAndValidity();
        this.form.controls['ValidateRegNo'].updateValueAndValidity();
        this.form.controls['ValidateProof'].updateValueAndValidity();
        this.form.controls['ValidateDob'].updateValueAndValidity();
        this.form.controls['ValidateMadrassa'].updateValueAndValidity();
        this.form.controls['ValidateState'].updateValueAndValidity();
        this.form.controls['ValidateClass'].updateValueAndValidity();
        this.form.controls['ValidateInstituteName'].updateValueAndValidity();
        // this.form.controls['stud_pass_sts'].updateValueAndValidity();
        this.form.controls['OtherCountry'].updateValueAndValidity();
    }
    onSave() {
        debugger;
        this.onFormValidator();
        debugger;
        if (this.form.valid) {
            let data = {
                "records": {
                    "Id": this.stuIndexId ? this.stuIndexId : '',
                    "UserId": this.userSessionService.emis_username(),
                    "BlockId": this.routeFields.block,
                    "SchoolId": this.routeFields.school,
                    "StudentId": this.studentData.stud_id,
                    'ReasonId': this.form.value.ReasonId ? this.form.value.ReasonId.value : '',
                    'SubReasonId': this.form.value.SubReasonId ? this.form.value.SubReasonId.value : '',
                    'TypeId': this.form.value.TypeId ? this.form.value.TypeId.value : this.reasonTypeId,
                    'LabourDistrict': this.form.value.LabourDistrict ? this.form.value.LabourDistrict.value : '',
                    'LabourBlock': this.form.value.LabourBlock ? this.form.value.LabourBlock.value : '',
                    'LabourAddress': this.form.value.LabourAddress,
                    'AcademicDistrict': this.form.value.AcademicDistrict ? this.form.value.AcademicDistrict.value : '',
                    'AcademicBlock': this.form.value.AcademicBlock ? this.form.value.AcademicBlock.value : '',
                    'AcademicSchool': this.form.value.AcademicSchool ? this.form.value.AcademicSchool.value : '',
                    'ParentDiseaseOther': this.form.value.ParentDiseaseOther,
                    'ChildDiseaseOther': this.form.value.ChildDiseaseOther,
                    'MigrationType': this.form.value.MigrationType ? this.form.value.MigrationType.value : '',
                    'MigrationSubType': this.form.value.MigrationSubType ? this.form.value.MigrationSubType.value : '',
                    'MigrationState': this.form.value.MigrationState ? this.form.value.MigrationState.value : '',
                    'MigrationDistrict': this.form.value.MigrationDistrict ? this.form.value.MigrationDistrict.value : '',
                    'MigrationBlock': this.form.value.MigrationBlock ? this.form.value.MigrationBlock.value : '',
                    'MigrationPeriod': this.form.value.MigrationPeriod ? this.form.value.MigrationPeriod.value : '',
                    'MigrationYear': this.form.value.MigrationYear ? this.form.value.MigrationYear.value : '',
                    'MigrationMonth': this.form.value.MigrationMonth ? this.form.value.MigrationMonth.value : '',
                    'MigrationAddress': this.form.value.MigrationAddress,
                    'ValidateSchoolName': this.form.value.ValidateSchoolName,
                    'ValidateSchoolAddress': this.form.value.ValidateSchoolAddress,
                    'ValidateSchoolMobileNumber': this.form.value.ValidateSchoolMobileNumber,
                    'ValidateDistrict': this.form.value.ValidateDistrict ? this.form.value.ValidateDistrict.value : '',
                    'ValidateBlock': this.form.value.ValidateBlock ? this.form.value.ValidateBlock.value : '',
                    'ValidateInstitute': this.form.value.ValidateInstitute ? this.form.value.ValidateInstitute.value : '',
                    'ValidateRollNo': this.form.value.ValidateRollNo,
                    'ValidateDepartment': this.form.value.ValidateDepartment,
                    'ValidateEmisNo': this.form.value.ValidateEmisNo,
                    'admitted_udise': this.form.value.admitted_udise,
                    'ValidateChildAddress': this.form.value.ValidateChildAddress,
                    'ValidateRegNo': this.form.value.ValidateRegNo,
                    'ValidateProof': this.form.value.ValidateProof,
                    'ValidateDob': this.form.value.ValidateDob ? this.pipe.transform(this.form.value.ValidateDob, 'yyyy-MM-dd') : '',
                    'ValidateMadrassa': this.form.value.ValidateMadrassa,
                    "ValidateState": this.form.value.ValidateState ? this.form.value.ValidateState.value : '',
                    "ValidateClass": this.form.value.ValidateClass ? this.form.value.ValidateClass.value : '',
                    "Latitude": this.lat ? this.lat : '',
                    "Longtitude": this.long ? this.long : '',
                    "ValidateInstituteName": this.form.value.ValidateInstituteName ? this.form.value.ValidateInstituteName : '',
                    "SurveyCls": this.studentData.class_studying_id,
                    "OtherCountry": this.form.value.OtherCountry ? this.form.value.OtherCountry.value : '',
                    "stud_pass_sts": this.form.value.stud_pass_sts ? this.form.value.stud_pass_sts : '',
                    "migrat_purpose": this.form.value.Migrationpurpose ? this.form.value.Migrationpurpose.value : '',
                }
            };
            this.emisService.OoscNewSurveySave(data, true).subscribe(res => {
                if (res.dataStatus) {
                    // this.getSurvey(this.routeFields.school, this.studentData.stud_id);
                    this.alertService.success(res.message);
                    this.navigateBack();
                    let reason_type = 'To be surveyed';
                    let query = 'UPDATE ooscStudentsDetail SET Reason="' + this.form.value.ReasonId.value + '",' +
                        'subReason="' + this.form.value.SubReasonId.value + '",' +
                        'reason_type="' + reason_type + '", Status= 1 WHERE stud_id = "' + this.studentData.stud_id + '"';
                    this.sqliteDB.update(query).then(res => {
                        console.log('update' + this.studentData.stud_id, +res);
                    });
                }
                else {
                    this.alertService.error(res.message);
                }
            });
        }
        else {
            this.validateAllFormFields(this.form);
        }
    }
    navigateBack() {
        this.router.navigate(['/tabs/ooscsurvey'], { queryParams: { 'school': this.routeFields.school, 'schoolname': this.userform.value.school_name, 'block': this.form.value.BlockId, 'year': this.userform.value.acad_yr, 'Id': 1 }, skipLocationChange: false });
        // this.form.reset();
        this.form.controls['admitted_udise'].setValue('');
        this.districtName = '';
        this.schoolName = '';
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }
    // Image upload
    /*  Opening Camera here.....   */
    openCameraOn() {
        const options = {
            quality: 100,
            targetWidth: 200,
            targetHeight: 200,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: false,
        };
        this.platform.ready().then(() => {
            this.camera.getPicture(options).then((imageData) => {
                var bucketName = "renewalapplicationemis";
                let expiry = 300;
                let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");
                this.file.readAsDataURL(imagename, filename).then((base64string) => {
                    if (base64string) {
                        const base = base64string.split('base64,');
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_12__.base64StringToBlob)(base[1], 'image/jpg');
                        if (blob.size <= 3145728) {
                            this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                                if (result) {
                                    this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                        this.form.controls.ValidateProof.setValue(result.key);
                                        this.cameraKey = result.key;
                                        this.viewPic('show');
                                        this.alertService.success('File Uploaded Successfully');
                                    });
                                }
                            });
                        }
                        else {
                            this.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                        }
                    }
                });
            }, (err) => {
                // Handle error
                console.log("LOG", err);
                alert("error " + JSON.stringify(err));
            });
        });
    }
    viewPic(fun) {
        var bucketName = "renewalapplicationemis";
        var filename = this.form.value.ValidateProof;
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (result) {
                this.imageData = result.url;
                console.log(this.imageData);
                if (fun == 'modal') {
                    const modal = yield this.modalCtrl.create({
                        component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_11__.ViewImagePage,
                        componentProps: { image: this.imageData },
                        cssClass: 'view-image-modal'
                    });
                    yield modal.present();
                }
            }
            else {
                this.alertService.error('Error in getting image file');
            }
        }));
    }
    onUploadFile(event) {
        debugger;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size <= 10485760) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                // this.fileType = splittedName[1];
                // var splittedName = fileName.split('.').pop();
                this.fileType = fileName.split('.').pop();
                ;
                // var ans = fileName.split('.').pop();
                // console.log('ans',ans,fileName);
                if (this.fileType == 'jpeg' || this.fileType == 'jpg' || this.fileType == 'png') {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event1) => {
                        this.uploadUrl = fileReader.result;
                        var bucketName = "renewalapplicationemis";
                        var filename = splittedName[0];
                        var ext = splittedName[1];
                        let expiry = 300;
                        this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                            if (result) {
                                let files = this.doc_file;
                                let file = files[0];
                                this.uploadService.uploadFile(result.url, file).subscribe((res) => {
                                    // this.imageActive = true;
                                    event.target.value = '';
                                    this.form.controls.ValidateProof.setValue(result.key);
                                    this.cameraKey = result.key;
                                    this.viewPic(result.key);
                                });
                                this.alertService.success('File Uploaded Successfully');
                            }
                            else {
                                this.alertService.error('Error in Uploading File please try again');
                            }
                        });
                    };
                }
                else {
                    this.alertService.error('File Type Not Valid.');
                }
            }
            else {
                this.alertService.error('File Can`t uploaded because Image size should not exceed 10 MB');
            }
        }
    }
    getUdiseCode() {
        let udise = this.form.value.admitted_udise;
        if (+udise.length == 11) {
            this.emisService.getSchoolInfo(this.form.value.admitted_udise).subscribe((res) => {
                if (res.dataStatus) {
                    if (res.result[0].SclNam != null) {
                        var schoolInfo = res.result;
                        this.districtName = schoolInfo[0].DistNam;
                        this.schoolName = schoolInfo[0].SclNam;
                    }
                    else {
                        this.alertService.warning('Please give Correct Udise Code');
                        this.districtName = '';
                        this.schoolName = '';
                        this.form.controls['admitted_udise'].setValue('');
                        this.form.controls['admitted_udise'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern('^[0-9]{11}$')]);
                        this.form.controls['admitted_udise'].updateValueAndValidity();
                    }
                }
                else {
                    this.districtName = '';
                    this.schoolName = '';
                    this.alertService.error(res.message);
                }
            });
        }
        else {
            this.districtName = '';
            this.schoolName = '';
        }
    }
};
OoscnewsurveyPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_8__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_7__.EmisService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_4__.LocationAccuracy },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_13__.SqlitedatabaseService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_14__.NetworkService }
];
OoscnewsurveyPage.propDecorators = {
    loadingPortsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['loadingPortsComponent',] }],
    dischargingPortsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['dischargingPortsComponent',] }]
};
OoscnewsurveyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-ooscnewsurvey',
        template: _raw_loader_ooscnewsurvey_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ooscnewsurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OoscnewsurveyPage);



/***/ }),

/***/ 21260:
/*!******************************************************************!*\
  !*** ./src/app/pages/oosc/ooscnewsurvey/ooscnewsurvey.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-background-color {\n  --ion-item-background: #015f01d5;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 6px;\n  margin-right: 18px;\n  margin-left: 18px;\n}\n\n.card-align {\n  padding: 10px !important;\n  background-color: white;\n  color: black;\n}\n\n.lbl-style {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  color: crimson;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.item .sc-ion-label-md-h {\n  white-space: none;\n}\n\n.lbl-style1 {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.btn-style {\n  --background: crimson;\n  color: white;\n  font-weight: 800;\n  float: right;\n}\n\n.lbl-style-black {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  color: black;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.center {\n  margin: auto;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 34px;\n  padding-inline-end: 26px;\n}\n\nion-toggle {\n  zoom: 0.7;\n}\n\n.qus-txt {\n  font-size: 17px;\n  padding-left: 15px;\n}\n\n.index-aln {\n  padding-right: 5px;\n  color: firebrick;\n}\n\n.toggle-aln {\n  text-align: center;\n  margin-top: 4px;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2.2%;\n}\n\n.area-item-style {\n  padding-left: 2%;\n}\n\n.btn-style {\n  background-color: #ff3300;\n}\n\nion-header {\n  background-color: #397ffc !important;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\nion-label {\n  font-size: 17px;\n}\n\n.radio-yn {\n  padding-right: 60px;\n  padding-left: 5px;\n}\n\n.lbl-color {\n  color: red;\n}\n\n.calendar-icon {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.error-message {\n  padding: 5px !important;\n  color: red;\n}\n\n.total {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.total-txt {\n  color: darkslategray;\n  font-weight: 600;\n}\n\n.total-subtxt {\n  color: darkslategray;\n  font-weight: 600;\n  text-align: end;\n}\n\nion-list {\n  background: white !important;\n}\n\n.fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.upload-btn {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-size: 16px;\n  padding-left: 15px;\n  background: #f2e6ff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 5px;\n}\n\n.upload-icon {\n  color: #8B67B3;\n}\n\n.user-icon {\n  padding-top: 1px;\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\nion-button {\n  --color: white !important;\n}\n\na:not([href]):not([class]) {\n  color: blue !important;\n  text-decoration: underline !important;\n}\n\nion-row {\n  width: 100% !important;\n}\n\n.error {\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.ionic-selectable-value-item {\n  white-space: pre-line !important;\n}\n\nionic-selectable {\n  white-space: pre-line !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9vc2NuZXdzdXJ2ZXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0RBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrREFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQUo7O0FBR0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGtEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBRUEsMEJBQUE7RUFFQSx3QkFBQTtBQUFKOztBQUdFO0VBQ0UsU0FBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUlFO0VBQ0Usb0NBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSx1QkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlFO0VBQ0UsNEJBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlFO0VBQ0UsVUFBQTtBQURKOztBQUlFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsY0FBQTtBQURKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtBQURKOztBQUlFO0VBQ0Usc0JBQUE7RUFDQSxxQ0FBQTtBQURKOztBQUlFO0VBQ0Usc0JBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFLRTtFQUNFLGdDQUFBO0FBRko7O0FBS0U7RUFDRSxnQ0FBQTtBQUZKIiwiZmlsZSI6Im9vc2NuZXdzdXJ2ZXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMTVmMDFkNTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYWxpZ24ge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmwtc3R5bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udHNGcmVlLU5ldC1Qcm94aW1hTm92YUFsdFJlZ3VsYXJcIjtcclxuICAgIGNvbG9yOiBjcmltc29uO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDEyNWVtO1xyXG4gIH1cclxuICBcclxuICAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmwtc3R5bGUxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnRzRnJlZS1OZXQtUHJveGltYU5vdmFBbHRSZWd1bGFyXCI7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMTI1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tc3R5bGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBjcmltc29uO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmxibC1zdHlsZS1ibGFjayB7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250c0ZyZWUtTmV0LVByb3hpbWFOb3ZhQWx0UmVndWxhclwiO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDEyNWVtO1xyXG4gIH1cclxuICBcclxuICAuY2VudGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbGVydC1yYWRpby1sYWJlbC5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA1MnB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDM0cHg7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAyNnB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdG9nZ2xlIHtcclxuICAgIHpvb206IDAuNztcclxuICB9XHJcbiAgXHJcbiAgLnF1cy10eHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuaW5kZXgtYWxuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiBmaXJlYnJpY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2dnbGUtYWxuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tc3R5bGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjIlO1xyXG4gIH1cclxuICBcclxuICAuYXJlYS1pdGVtLXN0eWxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogMiVcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zdHlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzMzAwO1xyXG4gICAgO1xyXG4gIH1cclxuICBcclxuICBpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTdmZmMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAucmFkaW8teW4ge1xyXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxuICBcclxuICAubGJsLWNvbG9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxlbmRhci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAudG90YWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4XHJcbiAgfVxyXG4gIFxyXG4gIC50b3RhbC10eHQge1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAudG90YWwtc3VidHh0IHtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGVJbnB1dCB7XHJcbiAgICB3aWR0aDogMC4xcHg7XHJcbiAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGVJbnB1dCBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzcxNzE3MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogLjVlbSAxZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAudmFsaWQtY2xyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWQtYnRuIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJlNmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnVwbG9hZC1pY29uIHtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gIH1cclxuICBcclxuICAudXNlci1pY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC51c2VyLWljb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYTpub3QoW2hyZWZdKTpub3QoW2NsYXNzXSkge1xyXG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tcm93IHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lcnJvcntcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuaW9uaWMtc2VsZWN0YWJsZS12YWx1ZS1pdGVte1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb25pYy1zZWxlY3RhYmxlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 55736:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/ooscnewsurvey/ooscnewsurvey.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"navigateBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 18px;\">OOSC Survey Questions</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div style=\"font-size: 13px;\" class=\"user-icon-label\">\r\n          <ion-label class=\"user-icon-label\">{{emis_username}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid>\r\n\r\n    <form [formGroup]=\"userform\">\r\n\r\n      <ion-row class=\"total\" style=\"padding-top: 15px;\r\n        padding-bottom: 5px;\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label>Basic Data</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">1.</span>Student name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"student_name\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">2.</span>Father Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"father_name\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">3.</span>Mother Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"mother_name\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">4.</span>Student Emis No</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-input type=\"text\" formControlName=\"new_emis_id\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">5.</span>Address of the child</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-textarea formControlName=\"Address\" maxlength=\"300\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-textarea>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">6.</span>Whether the child is differently\r\n              abled</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-item lines=\"none\" *ngIf=\"userform.value.cwsn_student == 1\">\r\n              <ion-input type=\"text\" style=\"color: var(--ion-color-primary,#388);\" readonly=true>Yes</ion-input>\r\n            </ion-item>\r\n            <ion-item lines=\"none\" *ngIf=\"userform.value.cwsn_student == 2\">\r\n              <ion-input type=\"text\" style=\"color: var(--ion-color-primary,#388);\" readonly=true>No</ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"userform.value.cwsn_student == '1'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label><span class=\"index-aln\">(i).</span>Disability Type</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea formControlName=\"diff_abled_reason\" maxlength=\"300\"\r\n            style=\"color: var(--ion-color-primary,#388);\" readonly=true disabled=\"true\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-card>\r\n    </form>\r\n    <form [formGroup]=\"form\">\r\n      <ion-row class=\"total\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label class=\"ion-text-wrap\">OOSC Data</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">1.</span>Reason for drop out<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"ReasonId\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"reasonList\" [canSearch]=\"true\" [canClear]=\"false\" closeButton=\"false\"\r\n                closeButtonSlot=\"end\" closeButtonText=\"Cancel\" (onChange)=\"onReasonChange($event.value.value,$event.value.reasontype_id)\" >\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ReasonId'].hasError('required') && (form.controls['ReasonId'].dirty || form.controls['ReasonId'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <ion-card *ngIf=\"form.value.ReasonId && subReActive\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">2.</span>Sub-Reason for drop out<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"SubReasonId\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"subReasonList\" [canSearch]=\"true\" [canClear]=\"false\" closeButton=\"false\"\r\n                closeButtonSlot=\"end\" closeButtonText=\"Cancel\" (onChange)=\"onSubReasonChange($event.value.value,$event.value.reasontype_id)\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['SubReasonId'].hasError('required') && (form.controls['SubReasonId'].dirty || form.controls['SubReasonId'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 92\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">3</span>Admitted Udise.<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n\r\n             <ion-input type=\"tel\" placeholder=\"Enter the Udisecode\" formControlName=\"admitted_udise\" (ionChange)=\"getUdiseCode()\"\r\n              style=\"color: var(--ion-color-primary,#388);\" maxlength=\"11\" pattern=\"[0-9]*\"></ion-input>\r\n            </ion-item>\r\n              <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['admitted_udise'].hasError('required') && (form.controls['admitted_udise'].dirty || form.controls['admitted_udise'].touched)\">\r\n                      Field is required</p>\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['admitted_udise'].hasError('pattern')\">\r\n                      Must be exactly 11 digits</p>\r\n              </ion-row>\r\n\r\n             <div *ngIf=\"this.schoolName\" class=\"mb-10\" style=\"padding: 10px 5px 10px 20px;\">\r\n              <ion-label>{{schoolName}} , {{districtName}} </ion-label>\r\n            </div>\r\n          \r\n      </ion-card>\r\n\r\n      <div *ngIf=\"form.value.ReasonId.value == 9\">\r\n        <ion-card >\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">3.</span>Migration Type <span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"MigrationType\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"migrationType1\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['MigrationType'].hasError('required') && (form.controls['MigrationType'].dirty || form.controls['MigrationType'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card >\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">4.</span>Migration Purpose\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"Migrationpurpose\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"migrationType1_1\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['Migrationpurpose'].hasError('required') && (form.controls['Migrationpurpose'].dirty || form.controls['Migrationpurpose'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 90\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">5.</span>State<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationState\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"stateList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationState'].hasError('required') && (form.controls['MigrationState'].dirty || form.controls['MigrationState'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.SubReasonId.value == 91\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">5.</span>Country<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"OtherCountry\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"countryList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['OtherCountry'].hasError('required') && (form.controls['OtherCountry'].dirty || form.controls['OtherCountry'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.SubReasonId.value == 88 || form.value.SubReasonId.value == 89\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">5.</span>District<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationDistrict\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"distList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropDistChange($event.value.value)\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationDistrict'].hasError('required') && (form.controls['MigrationDistrict'].dirty || form.controls['MigrationDistrict'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n\r\n          <ion-card *ngIf=\"form.value.SubReasonId.value == 88 || form.value.SubReasonId.value == 89\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">6.</span>\r\n                    Block<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationBlock'].hasError('required') && (form.controls['MigrationBlock'].dirty || form.controls['MigrationBlock'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 79\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">3.</span>student pass or fail</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"stud_pass_sts\" value=\"{{this.form.value.stud_pass_sts}}\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['stud_pass_sts'].hasError('required') && (form.controls['stud_pass_sts'].dirty || form.controls['stud_pass_sts'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value && typeActive\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">2(i).</span>Dropout Type<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"TypeId\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"typeReasonList\" [canSearch]=\"true\" [canClear]=\"false\" closeButton=\"false\"\r\n                closeButtonSlot=\"end\" closeButtonText=\"Cancel\" (onChange)=\"onTypeChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['TypeId'].hasError('required') && (form.controls['TypeId'].dirty || form.controls['TypeId'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div *ngIf=\"form.value.ReasonId && (form.value.ReasonId.value == 1 && form.value.SubReasonId)\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">3.</span>District<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"LabourDistrict\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"distList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropDistChange($event.value.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['LabourDistrict'].hasError('required') && (form.controls['LabourDistrict'].dirty || form.controls['LabourDistrict'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n\r\n        <ion-card *ngIf=\"form.value.LabourDistrict\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">4.</span>\r\n                  Block<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"LabourBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['LabourBlock'].hasError('required') && (form.controls['LabourBlock'].dirty || form.controls['LabourBlock'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.LabourBlock\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">5.</span>{{ form.value.SubReasonId.value == 1 ? 'Address of the Establishment / Company /\r\n                Shop / House' : 'Address of the Establishment / Company /\r\n                Shop' }}<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"LabourAddress\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['LabourAddress'].hasError('required') && (form.controls['LabourAddress'].dirty || form.controls['LabourAddress'].touched)\">\r\n              Field is required</p>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['LabourAddress'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.value.ReasonId.value == 5 && form.value.SubReasonId.value == 23\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">i.</span>District<span\r\n                  class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"AcademicDistrict\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"distList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropDistChange($event.value.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['AcademicDistrict'].hasError('required') && (form.controls['AcademicDistrict'].dirty || form.controls['AcademicDistrict'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.AcademicDistrict\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">ii.</span>Block<span\r\n                  class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"AcademicBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onAcadBlockChange(1,'','',$event.value.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['AcademicBlock'].hasError('required') && (form.controls['AcademicBlock'].dirty || form.controls['AcademicBlock'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.AcademicBlock\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">iii.</span>School<span\r\n                  class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"AcademicSchool\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"schoolList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['AcademicSchool'].hasError('required') && (form.controls['AcademicSchool'].dirty || form.controls['AcademicSchool'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <ion-card\r\n        *ngIf=\"form.value.ReasonId.value == 6 && form.value.SubReasonId.value == 37 && this.form.value.TypeId?.value == 124\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">2(ii).</span> Please specify others<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter\" formControlName=\"ParentDiseaseOther\" maxlength=\"300\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ParentDiseaseOther'].hasError('required') && (form.controls['ParentDiseaseOther'].dirty || form.controls['ParentDiseaseOther'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ParentDiseaseOther'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card\r\n        *ngIf=\"form.value.ReasonId.value == 6 && form.value.SubReasonId.value == 38 && this.form.value.TypeId?.value == 135\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">2(ii).</span>Please specify others<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter\" formControlName=\"ChildDiseaseOther\" maxlength=\"300\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ChildDiseaseOther'].hasError('required') && (form.controls['ChildDiseaseOther'].dirty || form.controls['ChildDiseaseOther'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ChildDiseaseOther'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n      <div *ngIf=\"form.value.ReasonId.value == 9\">\r\n        <ion-card *ngIf=\"form.value.TypeId?.value\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">3.</span>Migration Type 1<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\"\r\n                *ngIf=\"form.value.TypeId?.value == 184 || form.value.TypeId?.value == 185\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"MigrationType\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"migrationType1\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onMigration(1,$event)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\" *ngIf=\"form.value.TypeId?.value == 188\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"MigrationType\" itemValueField=\"value\" itemTextField=\"label\"\r\n                  [items]=\"migrationType1_1\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                  (onChange)=\"onMigration(1,$event)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['MigrationType'].hasError('required') && (form.controls['MigrationType'].dirty || form.controls['MigrationType'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card\r\n          *ngIf=\"form.value.MigrationType && (form.value.TypeId?.value == 184 || form.value.TypeId?.value == 185)\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">4.</span>Migration Type 2<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\" *ngIf=\"form.value.TypeId?.value == 185\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"MigrationSubType\" itemValueField=\"value\" itemTextField=\"label\"\r\n                  [items]=\"migrationType2\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                  (onChange)=\"onMigration(2,$event)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\" *ngIf=\"form.value.TypeId?.value == 184\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"MigrationSubType\" itemValueField=\"value\" itemTextField=\"label\"\r\n                  [items]=\"migrationType3\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                  (onChange)=\"onMigration(2,$event)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n              *ngIf=\"form.controls['MigrationSubType'].hasError('required') && (form.controls['MigrationSubType'].dirty || form.controls['MigrationSubType'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <div *ngIf=\"form.value.MigrationSubType\">\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationSubType.value == 4\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">4(i).</span>Country<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"OtherCountry\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"countryList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['OtherCountry'].hasError('required') && (form.controls['OtherCountry'].dirty || form.controls['OtherCountry'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationSubType.value == 1\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">4(i).</span>State<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationState\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"stateList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationState'].hasError('required') && (form.controls['MigrationState'].dirty || form.controls['MigrationState'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationSubType.value == 2 || form.value.MigrationSubType.value == 3\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">4(i).</span>District<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationDistrict\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"distList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropDistChange($event.value.value)\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationDistrict'].hasError('required') && (form.controls['MigrationDistrict'].dirty || form.controls['MigrationDistrict'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationSubType.value == 3 && form.value.MigrationDistrict\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">4(ii).</span>\r\n                    Block<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationBlock'].hasError('required') && (form.controls['MigrationBlock'].dirty || form.controls['MigrationBlock'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationSubType?.value\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">5.</span>\r\n                    Which period of the year did they migrate? <span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationPeriod\" itemValueField=\"value\" itemTextField=\"label\"\r\n                    [items]=\"migrationPeriod\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationPeriod'].hasError('required') && (form.controls['MigrationPeriod'].dirty || form.controls['MigrationPeriod'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationPeriod\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">6.</span>\r\n                    Year<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationYear\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"yearList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationYear'].hasError('required') && (form.controls['MigrationYear'].dirty || form.controls['MigrationYear'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationYear\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">7.</span>\r\n                    Month<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationMonth\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"monthList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationMonth'].hasError('required') && (form.controls['MigrationMonth'].dirty || form.controls['MigrationMonth'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n        </div>\r\n\r\n        <div\r\n          *ngIf=\"(form.value.TypeId && form.value.TypeId?.value) == 188 && (form.value.MigrationType && form.value.MigrationType.value == 1)\">\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">3(i).</span>District<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationDistrict\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"distList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropDistChange($event.value.value)\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationDistrict'].hasError('required') && (form.controls['MigrationDistrict'].dirty || form.controls['MigrationDistrict'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationDistrict\">\r\n            <ion-item>\r\n              <ion-row style=\"width:100%\">\r\n                <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                  <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                    <span class=\"index-aln\">3(ii).</span>\r\n                    Block<span class=\"lbl-color\">*</span>\r\n                  </ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                  <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                    formControlName=\"MigrationBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                    [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                  </ionic-selectable>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationBlock'].hasError('required') && (form.controls['MigrationBlock'].dirty || form.controls['MigrationBlock'].touched)\">\r\n                Field is required</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n\r\n\r\n          <ion-card *ngIf=\"form.value.MigrationBlock\">\r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n                <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">3(iii).</span>Address of the\r\n                  Establishment/Company/Shop<span class=\"lbl-color\">*</span></ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-item lines=\"none\" class=\"area-item-style\">\r\n              <ion-textarea placeholder=\"Please Enter\" formControlName=\"MigrationAddress\" maxlength=\"300\"\r\n                style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n            </ion-item>\r\n            <ion-row class=\"error\">\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                *ngIf=\"form.controls['MigrationAddress'].hasError('required') && (form.controls['MigrationAddress'].dirty || form.controls['MigrationAddress'].touched)\">\r\n                Field is required</p>\r\n              <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['MigrationAddress'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n            </ion-row>\r\n          </ion-card>\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div\r\n        *ngIf=\"form.value.ReasonId.value == 10 && (form.value.SubReasonId.value == 64 || form.value.SubReasonId.value == 65 || form.value.SubReasonId.value == 66)\">\r\n        <ion-card *ngIf=\"form.value.SubReasonId.value\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">i.</span>School Name<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateSchoolName\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateSchoolName'].hasError('required') && (form.controls['ValidateSchoolName'].dirty || form.controls['ValidateSchoolName'].touched)\">\r\n              Field is required</p>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ValidateSchoolName'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card\r\n          *ngIf=\"form.value.SubReasonId.value == 64 || form.value.SubReasonId.value == 65 || form.value.SubReasonId.value == 66\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">ii.</span>School Address<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateSchoolAddress\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateSchoolAddress'].hasError('required') && (form.controls['ValidateSchoolAddress'].dirty || form.controls['ValidateSchoolAddress'].touched)\">\r\n              Field is required</p>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ValidateSchoolAddress'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card\r\n          *ngIf=\"form.value.SubReasonId.value == 64 || form.value.SubReasonId.value == 65 || form.value.SubReasonId.value == 66\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">iii.</span>School Contact Number<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-input type=\"tel\" placeholder=\"Please Enter\" formControlName=\"ValidateSchoolMobileNumber\"\r\n              style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\" pattern=\"^[6-9]{1}[0-9]{9}\"></ion-input>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateSchoolMobileNumber'].hasError('required') && (form.controls['ValidateSchoolMobileNumber'].dirty || form.controls['ValidateSchoolMobileNumber'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n      padding-right: 10px;\" *ngIf=\"form.controls['ValidateSchoolMobileNumber'].hasError('pattern')\">\r\n              Invalid Format</p>\r\n          </ion-row>\r\n\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 68\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">i.</span>Actual EMIS No.<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-input type=\"tel\" placeholder=\"Please Enter\" formControlName=\"ValidateEmisNo\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\" pattern=\"[0-9]*\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n    padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ValidateEmisNo'].hasError('required') && (form.controls['ValidateEmisNo'].dirty || form.controls['ValidateEmisNo'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n    padding-right: 10px;\" *ngIf=\"form.controls['ValidateEmisNo'].hasError('pattern')\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 69\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">i.</span>Address of the Child<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateChildAddress\" maxlength=\"300\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ValidateChildAddress'].hasError('required') && (form.controls['ValidateChildAddress'].dirty || form.controls['ValidateChildAddress'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ValidateChildAddress'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 70\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">i.</span>Reg. No<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-input type=\"tel\" placeholder=\"Please Enter\" formControlName=\"ValidateRegNo\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"20\" pattern=\"[0-9]*\"></ion-input>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n    padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ValidateRegNo'].hasError('required') && (form.controls['ValidateRegNo'].dirty || form.controls['ValidateRegNo'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n    padding-right: 10px;\" *ngIf=\"form.controls['ValidateRegNo'].hasError('pattern')\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div *ngIf=\"form.value.SubReasonId.value == 77 || form.value.SubReasonId.value == 83\">\r\n        <ion-card>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">i.</span>Name of the Institution<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateInstituteName\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateInstituteName'].hasError('required') && (form.controls['ValidateInstituteName'].dirty || form.controls['ValidateInstituteName'].touched)\">\r\n              Field is required</p>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ValidateInstituteName'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"form.value.SubReasonId.value == 67 || form.value.SubReasonId.value == 73 || form.value.SubReasonId.value == 74 \r\n       || form.value.SubReasonId.value == 80 ||\r\n        form.value.SubReasonId.value == 84 || form.value.SubReasonId.value == 85\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">i.</span>District<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateDistrict\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"distList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropDistChange($event.value.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateDistrict'].hasError('required') && (form.controls['ValidateDistrict'].dirty || form.controls['ValidateDistrict'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateDistrict\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">ii.</span>Block<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <!-- <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"ValidateBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onValidateInst(1,$event.value.value,'',form.value.ValidateDistrict.value)\">\r\n              </ionic-selectable> -->\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onValidateInst(1,$event.value.value,'',form.value.ValidateDistrict.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateBlock'].hasError('required') && (form.controls['ValidateBlock'].dirty || form.controls['ValidateBlock'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateBlock\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">iii.</span> Name of Institute<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateInstituteName\" maxlength=\"300\"\r\n                style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n\r\n                <!-- <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateInstitute\" itemValueField=\"value\" itemTextField=\"label\"\r\n                  [items]=\"instituteList\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable> -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateInstituteName'].hasError('required') && (form.controls['ValidateInstituteName'].dirty || form.controls['ValidateInstituteName'].touched)\">\r\n              Field is required</p>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ValidateInstituteName'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.value.SubReasonId.value == 81 || form.value.SubReasonId.value == 82\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">i.</span>State<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateState\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"newstateList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropStateChange($event.value.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateState'].hasError('required') && (form.controls['ValidateState'].dirty || form.controls['ValidateState'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n        \r\n        <ion-card *ngIf=\"form.value.ValidateState && this.form.value.ValidateState.value == 124\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">ii.</span>District<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateDistrict\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"distList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onDropDistChange($event.value.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateDistrict'].hasError('required') && (form.controls['ValidateDistrict'].dirty || form.controls['ValidateDistrict'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateDistrict\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">iii.</span>Block<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <!-- <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"ValidateBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onValidateInst(1,$event.value.value,'',form.value.ValidateDistrict.value)\">\r\n              </ionic-selectable> -->\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateBlock\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"blockList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onValidateInst(1,$event.value.value,'',form.value.ValidateDistrict.value)\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateBlock'].hasError('required') && (form.controls['ValidateBlock'].dirty || form.controls['ValidateBlock'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateBlock || insroldept\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">{{ insroldept ? 'ii.' : 'iv.' }}</span> Name of Institute<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateInstituteName\" maxlength=\"300\"\r\n                style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n\r\n                <!-- <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateInstitute\" itemValueField=\"value\" itemTextField=\"label\"\r\n                  [items]=\"instituteList\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable> -->\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateInstituteName'].hasError('required') && (form.controls['ValidateInstituteName'].dirty || form.controls['ValidateInstituteName'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateInstituteName\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">{{ insroldept ? 'iii.' : 'v.' }}</span>Roll No<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateRollNo\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateRollNo'].hasError('required') && (form.controls['ValidateRollNo'].dirty || form.controls['ValidateRollNo'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n      padding-right: 10px;\" *ngIf=\"form.controls['ValidateRollNo'].hasError('pattern')\">\r\n              Invalid Format</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateRollNo\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">{{ insroldept ? 'iv.' : 'vi.' }}</span>Department<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateDepartment\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateDepartment'].hasError('required') && (form.controls['ValidateDepartment'].dirty || form.controls['ValidateDepartment'].touched)\">\r\n              Field is required</p>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ValidateDepartment'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div *ngIf=\"\r\n          form.value.SubReasonId.value == 80 || form.value.SubReasonId.value == 84 || form.value.SubReasonId.value == 85\">\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateInstituteName\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">iv.</span>Roll No<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateRollNo\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateRollNo'].hasError('required') && (form.controls['ValidateRollNo'].dirty || form.controls['ValidateRollNo'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n      padding-right: 10px;\" *ngIf=\"form.controls['ValidateRollNo'].hasError('pattern')\">\r\n              Invalid Format</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.ValidateRollNo\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">v.</span>Department<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateDepartment\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateDepartment'].hasError('required') && (form.controls['ValidateDepartment'].dirty || form.controls['ValidateDepartment'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n      </div>\r\n\r\n      <ion-card>\r\n        <ion-row class=\"bck\">\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n             <ion-label class=\"ion-text-wrap\">\r\n              camera\r\n              <span class=\"lbl-color\">*</span>\r\n              </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" style=\"text-align: center;\">\r\n            <div style=\"padding: 15px;\">\r\n              <ion-icon name=\"camera\" style=\"font-size: 70px;padding-top: 12px;color: #343232;\" width=\"600\" height=\"100\"\r\n                (click)=\"openCameraOn()\"></ion-icon>\r\n            </div><br>\r\n            <ion-label style=\"text-align: center;\">Camera</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"align-self: center;\">\r\n            <div style=\"text-align: center;\">\r\n              <p style=\"font-size: 12px;\">(Or)</p>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" style=\"align-self: end;text-align: center;\">\r\n            <div style=\"padding: 15px;\">\r\n              <input type=\"file\" name=\"file1\" id=\"file1\" accept=\"image/*\" class=\"fileInput\"\r\n                (change)=\"onUploadFile($event)\" />\r\n              <label for=\"file1\" class=\"upload-txt\">\r\n                <div style=\"align-self: center;\">\r\n                  <img src=\"../../assets/icons/images.png\" style=\"height: 30%;width: 65%;\">\r\n                </div>\r\n              </label>\r\n            </div><br>\r\n\r\n            <ion-label style=\"text-align: center;\">Gallery</ion-label>\r\n          </ion-col>\r\n\r\n          <!-- <ion-col size=\"12\" style=\"text-align: center;\">\r\n            <div>\r\n              <img *ngIf=\"imageData != '' && imageData != null && imageData != undefined\" src=\"{{imageData}}\"\r\n                class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" (click)=\"viewPic('modal')\">\r\n            </div>\r\n          </ion-col> -->\r\n\r\n          <ion-col size=\"12\" style=\"text-align: center;\">\r\n            <div>\r\n              <img *ngIf=\"form.value.ValidateProof\" src=\"{{imageData}}\" class=\"img image\" width=\"50%\" height=\"50%\"\r\n                style=\"padding:0;margin:0\" (click)=\"viewPic('modal')\">\r\n            </div>\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ValidateProof'].hasError('required') && (form.controls['ValidateProof'].dirty || form.controls['ValidateProof'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 72 || form.value.SubReasonId.value == 75\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">ii.</span>DOB<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\r\n          <ion-datetime placeholder=\"Select Date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"ValidateDob\"\r\n            style=\"padding-left:6px\"></ion-datetime>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ValidateDob'].hasError('required') && (form.controls['ValidateDob'].dirty || form.controls['ValidateDob'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"form.value.SubReasonId.value == 76\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">i.</span>Name of the Madrassa<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateMadrassa\" maxlength=\"300\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row class=\"error\">\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['ValidateMadrassa'].hasError('required') && (form.controls['ValidateMadrassa'].dirty || form.controls['ValidateMadrassa'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n                      *ngIf=\"form.controls['ValidateMadrassa'].hasError('pattern')\">\r\n                      The value should not start with a space.</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div *ngIf=\"form.value.SubReasonId.value == 78\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">i.</span>State<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateState\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"stateList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateState'].hasError('required') && (form.controls['ValidateState'].dirty || form.controls['ValidateState'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">ii.</span>Name of School<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"area-item-style\">\r\n            <ion-textarea placeholder=\"Please Enter\" formControlName=\"ValidateSchoolName\" maxlength=\"300\"\r\n              style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateSchoolName'].hasError('required') && (form.controls['ValidateSchoolName'].dirty || form.controls['ValidateSchoolName'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">iii.</span>Class<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateClass\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"classList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateClass'].hasError('required') && (form.controls['ValidateClass'].dirty || form.controls['ValidateClass'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n \r\n        <ion-card *ngIf=\"form.value.SubReasonId.value == 86\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">i.</span>State<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"ValidateState\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"stateList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n              *ngIf=\"form.controls['ValidateState'].hasError('required') && (form.controls['ValidateState'].dirty || form.controls['ValidateState'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card *ngIf=\"form.value.SubReasonId.value == 87\">\r\n          <ion-item>\r\n            <ion-row style=\"width:100%\">\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">i.</span>Country<span class=\"lbl-color\">*</span>\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"OtherCountry\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"countryList\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n          <ion-row class=\"error\">\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n          padding-right: 10px;\"\r\n              *ngIf=\"form.controls['OtherCountry'].hasError('required') && (form.controls['OtherCountry'].dirty || form.controls['OtherCountry'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n     \r\n\r\n\r\n      <!-- <div class=\"footer-txt\" style=\"padding-bottom: 34px;padding-top:0px;\"> -->\r\n        <!-- *ngIf=\"this.studentData.ac_year == '2024-2025'\" -->\r\n      <div class=\"footer-txt\" style=\"padding-bottom: 34px;padding-top:0px;\">\r\n        <div class=\"sumbit-button\">\r\n          <ion-button expand=\"block\" (click)=\"onSave()\">\r\n           {{stuSaveActive ? 'Update' : 'Submit'}}</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_oosc_ooscnewsurvey_ooscnewsurvey_module_ts-es2015.js.map