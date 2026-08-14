(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_neverenrollment-quest_neverenrollment-quest_module_ts"],{

/***/ 99467:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/oosc/neverenrollment-quest/neverenrollment-quest-routing.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeverenrollmentQuestPageRoutingModule": function() { return /* binding */ NeverenrollmentQuestPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _neverenrollment_quest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neverenrollment-quest.page */ 6959);




const routes = [
    {
        path: '',
        component: _neverenrollment_quest_page__WEBPACK_IMPORTED_MODULE_0__.NeverenrollmentQuestPage
    }
];
let NeverenrollmentQuestPageRoutingModule = class NeverenrollmentQuestPageRoutingModule {
};
NeverenrollmentQuestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NeverenrollmentQuestPageRoutingModule);



/***/ }),

/***/ 5872:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/oosc/neverenrollment-quest/neverenrollment-quest.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeverenrollmentQuestPageModule": function() { return /* binding */ NeverenrollmentQuestPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);
/* harmony import */ var _neverenrollment_quest_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neverenrollment-quest-routing.module */ 99467);
/* harmony import */ var _neverenrollment_quest_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neverenrollment-quest.page */ 6959);










const routes = [
    {
        path: '',
        component: _neverenrollment_quest_page__WEBPACK_IMPORTED_MODULE_2__.NeverenrollmentQuestPage
    }
];
let NeverenrollmentQuestPageModule = class NeverenrollmentQuestPageModule {
};
NeverenrollmentQuestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _neverenrollment_quest_routing_module__WEBPACK_IMPORTED_MODULE_1__.NeverenrollmentQuestPageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        declarations: [_neverenrollment_quest_page__WEBPACK_IMPORTED_MODULE_2__.NeverenrollmentQuestPage],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation]
    })
], NeverenrollmentQuestPageModule);



/***/ }),

/***/ 6959:
/*!********************************************************************************!*\
  !*** ./src/app/pages/oosc/neverenrollment-quest/neverenrollment-quest.page.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeverenrollmentQuestPage": function() { return /* binding */ NeverenrollmentQuestPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_neverenrollment_quest_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./neverenrollment-quest.page.html */ 82340);
/* harmony import */ var _neverenrollment_quest_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neverenrollment-quest.page.scss */ 87336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 16030);






















let NeverenrollmentQuestPage = class NeverenrollmentQuestPage {
    constructor(fb, alertService, http, networkService, sqliteDB, userSessionService, emisService, router, route, geolocation, camera, platform, file, uploadService, modalCtrl, androidPermissions, locationAccuracy) {
        this.fb = fb;
        this.alertService = alertService;
        this.http = http;
        this.networkService = networkService;
        this.sqliteDB = sqliteDB;
        this.userSessionService = userSessionService;
        this.emisService = emisService;
        this.router = router;
        this.route = route;
        this.geolocation = geolocation;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.androidPermissions = androidPermissions;
        this.locationAccuracy = locationAccuracy;
        this.nesFormAllow = false;
        this.surveydataAllow = 0;
        this.habitationHide = true;
        this.changeDrop = false;
        this.IndxID = '';
        this.udise = "[0-9]*";
        this.noSpecial = "^[a-zA-Z \b]+$";
        this.mobileNo = "^[6-9]{1}[0-9]{9}";
        this.pinNo = "^[0-9]{6}";
        this.aadhar = "^[0-9]{12}";
        this.rollNum = "[a-zA-Z0-9]*";
        this.rationHolderName = "^[a-zA-Z. \b]+$";
        this.instituteName = "[a-zA-Z ,.'-_&]*";
        this.addrFormat = "[a-zA-Z0-9. !@#$%^&*/;:,_`~'-]*";
        this.uidNoFormat = "^[T][N][0-9]{16}$";
        this.diff_nidFormat = "^[T][N][A-Z]{5}[0-9]{5}[/][0-9]{4}$";
        this.genderList = [
            { label: 'Boy', value: '1' },
            { label: 'Girl', value: '2' },
            { label: 'Transgender', value: '3' }
        ];
        this.communityList = [
            { label: 'SC', value: '1' },
            { label: 'ST ', value: '2' },
            { label: 'MBC', value: '3' },
            { label: 'BC', value: '4' },
            { label: 'BC-M', value: '5' },
            { label: 'OC', value: '6' }
        ];
        this.religionList = [
            { label: 'Hindu', value: '1' },
            { label: 'Christian ', value: '2' },
            { label: 'Muslim', value: '3' },
            { label: 'Others', value: '4' }
        ];
        this.differentlyAbledList = [
            { label: 'Acid Attack victims', value: '1' },
            { label: 'Autism', value: '2' },
            { label: 'Cerebral Palsy', value: '3' },
            { label: 'Chronic Neurological conditsions', value: '4' },
            { label: 'Dwarfism', value: '5' },
            { label: 'Hearing Impairment', value: '6' },
            { label: 'Hemophilia', value: '7' },
            { label: 'Intellectual Disability', value: '8' },
            { label: 'Leprosy Cured', value: '9' },
            { label: 'Locomotor Impairment/Handicap', value: '10' },
            { label: 'Mental Illness', value: '11' },
            { label: 'Multiple disability', value: '12' },
            { label: 'Multiple Sclerosis', value: '13' },
            { label: 'Muscular dystrophy', value: '14' },
            { label: 'Parkinsons disease', value: '15' },
            { label: 'Sickle cell disease', value: '16' },
            { label: 'Specific Learning disability', value: '17' },
            { label: 'Speech Impairment', value: '18' },
            { label: 'Thalassemia', value: '19' },
            { label: 'Visual Impairment (Blindness)', value: '20' },
            { label: 'Visual Impairment (Low-vision)', value: '21' },
            { label: 'Others', value: '22' }
        ];
        this.class = [
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
        this.child_req_support = [
            { label: 'Financial support', value: '1' },
            { label: 'Academic support', value: '2' },
            { label: 'School support', value: '3' },
            { label: 'Counselling support', value: '4' },
            { label: 'SMC/Panchayat support', value: '5' },
        ];
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe('en-US');
        this.showDisBlk = false;
        this.typeshow = false;
        this.imageData = "";
        this.showtypetwo = false;
        this.surveyshow = false;
        this.migstatedis = false;
        this.otherdisease = false;
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewDidEnter() {
        debugger;
        this.isBtnDisabled = false;
        this.imageData = "";
        this.studentName = '';
        this.distId = this.userSessionService.district_id();
        this.teacher_id = this.userSessionService.teacher_id();
        this.today = new Date();
        this.routeData = this.route.snapshot;
        this.current_year = (new Date()).getFullYear();
        let year1 = this.current_year - 5;
        let year2 = this.current_year - 18;
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const startDate = new Date(year2, currentMonth, 1);
        const endDate = new Date(year1, currentMonth, 1);
        this.minDate = this.pipe.transform(startDate, 'yyyy-MM-dd');
        this.maxDate = this.pipe.transform(endDate, 'yyyy-MM-dd');
        this.Id = this.routeData.queryParams.Id;
        this.pagefun = this.routeData.queryParams.fun;
        if (this.pagefun == 'edit') {
            this.route.queryParams.subscribe((params) => {
                this.studentData = JSON.parse(params['studentDetails']);
                this.studentName = this.studentData.student_name;
                this.fatherName = this.studentData.father_name;
                this.motherName = this.studentData.mother_name;
                this.gurdianName = this.studentData.guardian_name;
                this.phone1 = this.studentData.phone_no;
                this.phone2 = this.studentData.mobileno_parent;
                this.phone3 = this.studentData.alternative_mobile_no;
                this.studEmisNo = this.studentData.new_emis_id;
                this.studentAddress = this.studentData.address;
                this.corporation = this.studentData.corporation;
                this.aadhar_no = this.studentData.aadhar_no;
                this.studentId = this.studentData.stud_id;
                this.studentId = this.studentData.school_name;
                this.stuClsId = this.studentData.class_studying_id;
                debugger;
            });
        }
        else {
            // this.indexID = '';
        }
        if (this.studentName) {
            this.surveyshow = true;
        }
        else {
            this.surveyshow = false;
            this.first = false;
        }
        this.teacher_id = this.userSessionService.teacher_id();
        this.getAcYr();
        this.getOOSCMasterDetailsJson();
        this.never_enroll_json();
    }
    never_enroll_json() {
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/oosc_never_enroll_reason.json';
        this.http.get(json_name).subscribe((data) => {
            debugger;
            this.total_reasonfordropoutList = data;
            console.log(this.total_reasonfordropoutList);
            let reasonfordropoutListdata = ([...new Set(this.total_reasonfordropoutList.map(item => item.reason))]);
            let reasonfordropoutListdatafilter = reasonfordropoutListdata.filter(tt => tt != 'TO BE VALIDATED');
            this.reasonfordropoutList = reasonfordropoutListdatafilter.map(item => { return { label: item, value: item }; });
            this.checkGPSPermission();
        });
    }
    getAcYr() {
        debugger;
        this.current_month = (new Date()).getMonth() + 1;
        if (this.current_month >= 6 && this.current_month <= 12) {
            this.acyear = (this.current_year + '-' + (this.current_year + 1));
        }
        else {
            this.acyear = ((this.current_year - 1) + '-' + (this.current_year));
        }
    }
    initialValidator() {
        this.surveyform = this.fb.group({
            'IndxID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'survey_today': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'survey_block': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'survey_local_body': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            // 'survey_habitation': new FormControl(null, Validators.required),
            'survey_habitation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
            'survey_NEC': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required)
        });
        this.form = this.fb.group({
            'dropout_reason': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'flag': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
            // 'student_name': new FormControl(this.studentName, null),
            // 'father_name': new FormControl(this.fatherName, null),
            // 'mother_name': new FormControl(this.motherName, null),
            // 'student_emis_no': new FormControl(this.studEmisNo, null),
            'IndxID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.IndxID, null),
            // 'ACYr': new FormControl('', null),
            // 'TeachID': new FormControl(this.teacher_id, null),
            // 'SchlID': new FormControl(this.schoolId, null),
            // 'StudID': new FormControl(this.studentId, null),
            'da_yn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.cwsn_student, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'da_type': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.disabilityType, null),
            'DrpOutRsn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'DrpOutSubRsn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'DrpOutRsnTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'DrpOutRsnsubTyp': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'migrate_state': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'migrate_dist': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'migrate_block': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'denial_dist': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'denial_block': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'denial_schoolid': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'disease': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'diff_nid': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'diff_uid': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            // 'SplSchl': new FormControl('', null),
            // 'SplSchlUdise': new FormControl('', null),
            // 'MigrntAddrs': new FormControl('', null),
            // 'MigrntIncmAddrs': new FormControl('', [Validators.pattern(this.addrFormat)]),
            // 'ChildLabrYN': new FormControl('', null),
            // 'ChillabrRsn': new FormControl('', null),
            // 'NeverEnrollDistrict': new FormControl(this.distId, null),
            // 'StudentType': new FormControl('', null),
            // 'PrsntSts': new FormControl('', null),
            'AdmitSchlID': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]),
            'student_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            // 'DirctSpcl': new FormControl('', null),
            // 'SpclTrngTyp': new FormControl('', null),
            // 'ActSts': new FormControl('', null),
            // 'help': new FormControl('', null),
            // 'relDprt': new FormControl('', null),
            // 'Remrks': new FormControl('', [Validators.pattern(this.addrFormat)]),
            'latitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'longitude': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'block_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'AdmitSchool': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'district_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            // 'Type': new FormControl('', null),
            'student_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]),
            'corporation': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)),
            'aadhar_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.aadhar)]),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'dob': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            'community_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'religion_id': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'father_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
            'mother_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
            'guardian_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]),
            'phone_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]),
            'mobileno_parent': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]),
            'alternative_mobile_no': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.mobileNo)]),
            // 'Class': new FormControl('', [Validators.required]),
            // 'MigratBlockName': new FormControl('', null),
            'survey_photo': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
            // 'Status': new FormControl('', null),
            // 'student_name': new FormControl('', null),
            'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'sch_willing_yn': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            'admiss_cls': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
            // 'remarks': new FormControl('', null),
            'remarks': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.addrFormat)]),
            'child_support': new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', null),
        });
    }
    updateNidNo(event) {
        // this.form.controls['diff_nid'].setValue(event.target.value);
        // this.form.controls["diff_nid"].updateValueAndValidity();
    }
    updateUidNo(event) {
        // this.form.controls['diff_uid'].setValue(event.target.value);
        // this.form.controls["diff_uid"].updateValueAndValidity();
    }
    getLatLong() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
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
    surveyCheck() {
        this.surveydataAllow = 1;
        this.first = true;
        this.surveyform.reset();
    }
    onSurveyChange(event) {
        debugger;
        this.surveyOtherQuestion = event;
        if (this.surveyOtherQuestion == 2) {
            this.surveyform.controls["survey_block"].setValue('');
            this.surveyform.controls["survey_local_body"].setValue('');
            this.surveyform.controls["survey_habitation"].setValue('');
            this.surveyform.controls["survey_NEC"].setValue('');
            this.surveyform.controls['survey_block'].updateValueAndValidity();
            this.surveyform.controls['survey_local_body'].updateValueAndValidity();
            this.surveyform.controls['survey_habitation'].updateValueAndValidity();
            this.surveyform.controls['survey_NEC'].updateValueAndValidity();
            this.isBtnDisabled = true;
            this.alertService.error("You didn't go for the survey today");
            this.surveydataAllow = 0;
            this.surveyshow = false;
            this.first = false;
        }
        else {
            this.isBtnDisabled = false;
            this.onOoscDistrictChange('change', this.distId, 'present');
        }
    }
    onBlockChange(event) {
        debugger;
        this.surveyform.controls["survey_local_body"].setValue('');
        this.surveyform.controls["survey_local_body"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        this.surveyform.controls['survey_local_body'].updateValueAndValidity();
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_habitation.json';
        this.http.get(json_name).subscribe((data) => {
            this.masterBlockList = data.block;
            this.masterHabitationList = data.habitation;
            this.masterLocalityList = data.localbodycode;
            if (this.masterLocalityList.length > 0) {
                var locality = this.masterLocalityList.filter(tt => tt.BlkId == event);
                locality.push({ BlkId: "", DistId: "", IndxId: "", LoclBodyCode: "13298", Name: "Other", TamilName: "", ZoneTypId: "" });
                this.localBodyList;
                this.localBodyList = locality.map(lb => { return { label: lb.Name, value: lb.LoclBodyCode }; });
                this.localBodyList.sort((a, b) => {
                    if (a.label < b.label)
                        return -1;
                    if (a.label > b.label)
                        return 1;
                    return 0;
                });
            }
        });
    }
    onLocalBodyChange(event) {
        debugger;
        this.localBdy = event;
        this.surveyform.controls["survey_habitation"].setValue('');
        this.surveyform.controls["survey_habitation"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        this.surveyform.controls['survey_habitation'].updateValueAndValidity();
        if (event == '13298') {
            this.habitationHide = false;
            this.surveyform.controls["survey_habitation"].setValue('92298');
            this.surveyform.controls["survey_habitation"].setValidators(null);
            this.surveyform.controls['survey_habitation'].updateValueAndValidity();
        }
        else {
            this.habitationHide = true;
        }
        if (this.masterHabitationList.length > 0) {
            var habitation = this.masterHabitationList.filter(tt => tt.LocalBodyId == event);
            habitation.push({ BlkId: "", DistId: "", IndxId: "92298", LoclBodyCode: "13298", Name: "Other", TamilName: "", ZoneTypId: "92298", HabitCode: "92298" });
            this.habitationList = habitation.map(l => { return { label: l.Name, value: l.HabitCode }; });
            this.habitationList.sort((a, b) => {
                if (a.label < b.label)
                    return -1;
                if (a.label > b.label)
                    return 1;
                return 0;
            });
        }
    }
    getBlockList(eventval) {
        debugger;
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
                                this.checkBlockLocalDB(eventval);
                            });
                        });
                    }
                }
            });
        }
    }
    checkBlockLocalDB(eventval) {
        debugger;
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
                        this.ooscBlockList = black_unique_list.map(l => { return { label: l.block_name, value: l.blkid }; });
                        this.ooscBlockList.sort((a, b) => {
                            if (a.label < b.label)
                                return -1;
                            if (a.label > b.label)
                                return 1;
                            return 0;
                        });
                    }
                }
            }
            else {
                this.getBlockList(eventval);
            }
            if (this.studentData.block_id != undefined) {
                var data1 = this.ooscBlockList.filter(x => x.value == this.studentData.block_id);
                this.form.controls['block_id'].setValue({ label: data1[0].label, value: data1[0].value });
                this.onOoscBlockChange(this.studentData.block_id, 'change');
            }
        });
    }
    onOoscDistrictChange(fun, eventval, funNam) {
        debugger;
        this.surveyform.controls["survey_block"].setValue('');
        this.surveyform.controls["survey_block"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        this.surveyform.controls['survey_block'].updateValueAndValidity();
        var block;
        if (fun == 'change') {
            this.changeDrop = true;
            // this.form.controls["MigratBlock"].setValue('');
            if (funNam == 'present') {
                // this.form.controls["block"].setValue('');
                // this.form.controls["AdmitSchool"].setValue('');
                // this.form.controls["AdmitSchlID"].setValue(0);
                // this.form.controls["AdmsnNo"].setValue('');
                // if ((this.surveydataAllow == 1) || (this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn.value == '75')) {
                //   if (this.surveydataAllow == 1) {
                //     this.form.controls["AdmitSchool"].setValidators(null);
                //     this.form.controls["block"].setValidators(null);
                //   } else {
                //     this.form.controls["AdmitSchool"].setValidators(Validators.required);
                //     this.form.controls["block"].setValidators(Validators.required);
                //   }
                //   this.form.controls["AdmitSchlID"].setValidators([Validators.required, Validators.pattern(this.udise)]);
                //   this.form.controls["AdmsnNo"].setValidators(null);
                // } else {
                //   this.form.controls["block"].setValidators(null);
                //   this.form.controls["AdmitSchool"].setValidators(null);
                //   this.form.controls["AdmitSchlID"].setValidators([Validators.pattern(this.udise)]);
                //   this.form.controls["AdmsnNo"].setValidators([Validators.pattern(this.emisNo)]);
                // }
            }
            else {
                // if (this.form.value.DrpOutRsn.value != 20) {
                //   this.form.controls["MigrntAddrs"].setValue('');
                //   this.form.controls["MigrntAddrs"].setValidators([Validators.required, Validators.pattern(this.addrFormat)]);
                // } else {
                //   if (this.form.value.MigrntYN == 4) {
                //     this.form.controls["MigratBlock"].setValue('');
                //     this.form.controls["MigratBlock"].setValidators(Validators.required);
                //   }
                // }
            }
            this.checkBlockLocalDB(eventval);
            // block = this.masterBlockList.filter(tt => tt.district_id == eventval);
        }
        else {
            // this.changeDrop = false;
            // eventval = eventval;
            // if (funNam == 'present') {
            //   if (this.form.value.DistrictId != '' && this.form.value.DistrictId != null && this.form.value.DistrictId != undefined) {
            //     if (this.form.value.DrpOutRsn.value == '75') {
            //       this.form.controls["block"].setValidators(Validators.required);
            //       this.form.controls["AdmitSchool"].setValidators(Validators.required);
            //       this.form.controls["AdmitSchlID"].setValidators([Validators.required, Validators.pattern(this.udise)]);
            //     } else {
            //       this.form.controls["block"].setValidators(null);
            //       this.form.controls["AdmitSchool"].setValidators(null);
            //       this.form.controls["AdmitSchlID"].setValidators([Validators.pattern(this.udise)]);
            //     }
            //     this.checkBlockLocalDB(eventval);
            //   }
            // } else {
            //   this.checkBlockLocalDB(eventval);
            // }
        }
        this.surveyform.controls['survey_block'].updateValueAndValidity();
        // this.form.controls['block'].updateValueAndValidity();
        // this.form.controls['MigrntAddrs'].updateValueAndValidity();
        // this.form.controls['AdmitSchool'].updateValueAndValidity();
        // this.form.controls['AdmitSchlID'].updateValueAndValidity();
        // this.form.controls['AdmsnNo'].updateValueAndValidity();
    }
    loadingPortChange(event) {
        this.disabledDischargingPorts = this.ooscStateList;
    }
    onSurveyNECChange() {
        if (this.surveyOtherQuestion == 1) {
            this.isBtnDisabled = false;
        }
    }
    onSurveySave() {
        debugger;
        this.isBtnDisabled = true;
        if (this.surveyform.valid) {
            //  if (this.localBdy == 13298) {
            //   this.surveyform.value.survey_habitation = '92298';
            // } else {
            //   if (this.surveyform.value.survey_habitation != '' || this.surveyform.value.survey_habitation != null && this.surveyform.value.survey_habitation != 0) {
            //     this.surveyform.value.survey_habitation = this.surveyform.value.survey_habitation.HabitCode
            //   }
            // }
            // var data = this.surveyform.value;
            var dis_id = this.totalDistricts.filter(x => x.value == this.distId);
            var data = {
                "records": {
                    'ac_year': this.acyear,
                    'teacher_id': this.teacher_id,
                    'survey_today_status': this.surveyform.value.survey_today,
                    'survey_district': dis_id[0].value,
                    'survey_block': this.surveyform.value.survey_block.value,
                    'survey_local_body': this.surveyform.value.survey_local_body.value,
                    'survey_habitation': this.surveyform.value.survey_habitation,
                    'identify_child_yn': this.surveyform.value.survey_NEC
                }
            };
            debugger;
            this.emisService.OoscNvrEnrollSave(data, true).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success(res.message);
                    this.emisService.OoscNvrEnrollGet(this.userSessionService.teacher_id(), true).subscribe(res => {
                        debugger;
                        if (res.result[0].identify_child_yn == '1') {
                            this.IndxID = res.result[0].id;
                            this.form.controls['IndxID'].setValue(this.IndxID);
                            this.survey_NEC = res.result[0].identify_child_yn;
                            this.nesFormAllow = true;
                            this.surveydataAllow = 0;
                            this.first = false;
                        }
                        else {
                            this.IndxID = '';
                            this.survey_NEC = 0;
                            this.nesFormAllow = false;
                            this.surveyshow = false;
                            this.first = false;
                            this.surveydataAllow = 0;
                        }
                    });
                }
                else {
                    this.isBtnDisabled = false;
                }
            });
        }
        else {
            this.isBtnDisabled = false;
            this.alertService.error("Please fill the above fields");
        }
    }
    goToHome() {
        this.surveyform.controls["survey_today"].setValue('');
        this.surveyform.controls["survey_NEC"].setValue('');
        this.surveyform.reset();
        this.router.navigate(['/tabs/never-enrollment-stu-list'], { queryParams: { 'id': '0' }, skipLocationChange: false });
        // if (this.Id == 1) {
        //   this.router.navigate(['/tabs/ooscsurvey'], { queryParams: { 'school': this.schoolId, 'schoolname': this.schoolname, 'block': this.blockId, 'Id': this.Id, 'year': this.ac_year }, skipLocationChange: false });
        // } else if (this.Id == 4) {
        //   this.router.navigate(['/tabs/other-district-survey'], { queryParams: { 'school': this.schoolId, 'block': this.block, 'Id': this.Id }, skipLocationChange: false });
        // } else if (this.Id == 2) {
        //   if (this.surveydataAllow == 1) {
        //     this.surveydataAllow = 0;
        //   } else {
        //     this.router.navigate(['/tabs/never-enrollment-stu-list'], { queryParams: { 'id': '0' }, skipLocationChange: false });
        //   }
        // } else if (this.Id == 5) {
        //   this.router.navigate(['/tabs/survey-by-me']);
        // }
        // else {
        //   this.router.navigate(['/tabs/oosctype']);
        // }
    }
    getOOSCMasterDetailsJson() {
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_country.json';
        this.http.get(json_name).subscribe((data) => {
            if (data) {
                this.totalcountry = data.state.map(l => { return { label: l.state_name, value: l.state_code }; });
                this.totalDistricts = data.district.map(l => { return { label: l.district_name, value: l.disid }; });
                this.totalDistricts.sort((a, b) => {
                    if (a.label < b.label)
                        return -1;
                    if (a.label > b.label)
                        return 1;
                    return 0;
                });
            }
        });
    }
    onSave() {
        debugger;
        this.form.valid;
        this.form.controls['flag'].setValue(1);
        this.isBtnDisabled = true;
        this.getLatLong();
        setTimeout(() => {
            this.form.controls['latitude'].setValue(this.lat);
            this.form.controls['longitude'].setValue(this.long);
            var dateformat = this.form.value.dob;
            var datevalue = this.pipe.transform(dateformat, 'yyyy-MM-dd');
            this.form.controls['dob'].setValue(datevalue);
            if (this.form.value.AdmitSchlID == '') {
                this.form.controls['AdmitSchlID'].setValue('0');
            }
            if (this.form.value.IndxID != null && this.form.value.IndxID != '' && this.form.value.IndxID != undefined) {
                for (let Obj in this.form.value) {
                    this.form.controls[Obj].valid;
                }
                if (this.form.valid) {
                    var data = this.form.value;
                    data.AdmitSchool.value ? data.school_id = data.AdmitSchool.value : data.school_id = "";
                    data.migrate_state ? data.migrate_state = data.migrate_state.value : data.migrate_state = "";
                    data.migrate_dist ? data.migrate_dist = data.migrate_dist.value : data.migrate_dist = "";
                    data.migrate_block ? data.migrate_block = data.migrate_block.value : data.migrate_block = "";
                    data.district_id ? data.district_id = data.district_id.value : data.district_id = "";
                    data.block_id ? data.block_id = data.block_id.value : data.block_id = "";
                    data.id = data.IndxID;
                    data.child_support ? data.child_support = data.child_support.value : data.child_support = "";
                    data.denial_dist ? data.denial_dist = data.denial_dist.value : data.denial_dist = "";
                    data.denial_block ? data.denial_block = data.denial_block.value : data.denial_block = "";
                    data.denial_schoolid.value ? data.denial_schoolid = data.denial_schoolid.value : data.denial_schoolid = "";
                    let keysToRemove = ['DrpOutRsn', 'DrpOutSubRsn', 'DrpOutRsnTyp', 'DrpOutRsnsubTyp', 'IndxID', 'AdmitSchool', 'AdmitSchlID'];
                    keysToRemove.forEach(key => {
                        delete data[key];
                    });
                    var datarecord = {
                        "records": data
                    };
                    this.emisService.OoscNvrEnrollSave(datarecord, true).subscribe(res => {
                        if (res.dataStatus == true) {
                            this.nesFormAllow = false;
                            this.alertService.success(res.message);
                            this.isBtnDisabled = false;
                            this.router.navigate(['/tabs/never-enrollment-stu-list'], { queryParams: { 'id': '0' }, skipLocationChange: false });
                        }
                        else {
                            this.isBtnDisabled = false;
                            this.alertService.error(res.message);
                        }
                    });
                }
                else {
                    this.alertService.error('Please fill all the required fields');
                    this.isBtnDisabled = false;
                }
            }
            else {
                if (this.form.valid) {
                    var data = this.form.value;
                    console.log('data', data);
                    this.emisService.OoscNvrEnrollSave(data, true).subscribe(res => {
                        if (res.dataStatus == true) {
                            this.alertService.success(res.message);
                            this.isBtnDisabled = false;
                        }
                        else {
                            this.isBtnDisabled = false;
                            this.alertService.error(res.message);
                        }
                    });
                }
                else {
                    this.isBtnDisabled = false;
                    this.alertService.error('Please fill all the required fields');
                }
            }
            var data = this.form.value;
            console.log(data);
        }, 10000);
    }
    goToOoscSurvey() {
        debugger;
        this.isBtnDisabled = false;
        this.surveyshow = true;
        this.surveydataAllow = 2;
        this.initialValidator();
    }
    onDiffAbleChange(eventVal, fun) {
        debugger;
        if (eventVal == 1) {
            this.form.controls['da_type'].setValue('');
            this.form.controls['da_type'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls['diff_nid'].setValue('');
            this.form.controls["diff_nid"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.diff_nidFormat));
            this.form.controls['diff_uid'].setValue('');
            this.form.controls["diff_uid"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.uidNoFormat)]);
        }
        else {
            this.form.controls['da_type'].setValue('');
            this.form.controls['da_type'].setValidators(null);
            this.form.controls['diff_nid'].setValue('');
            this.form.controls['diff_nid'].setValidators(null);
            this.form.controls['diff_uid'].setValue('');
            this.form.controls['diff_uid'].setValidators(null);
        }
        this.form.controls['da_type'].updateValueAndValidity();
        this.form.controls['diff_nid'].updateValueAndValidity();
        this.form.controls['diff_uid'].updateValueAndValidity();
    }
    onChildChange(event) {
        debugger;
        if (event == '1') {
            this.form.controls["block_id"].setValidators(null);
            this.form.controls["AdmitSchool"].setValidators(null);
            this.form.controls["AdmitSchlID"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.udise)]);
            this.form.controls['child_support'].setValue('');
            this.form.controls['child_support'].setValidators(null);
            this.form.controls['child_support'].updateValueAndValidity();
        }
        else {
            this.form.controls['admiss_cls'].setValue('');
            this.form.controls['district_id'].setValue('');
            this.form.controls['block_id'].setValue('');
            this.form.controls['AdmitSchool'].setValue('');
            this.form.controls['AdmitSchlID'].setValue('');
            this.form.controls['student_id'].setValue('');
            this.form.controls['remarks'].setValue('');
            this.form.controls['admiss_cls'].setValidators(null);
            ;
            this.form.controls['district_id'].setValidators(null);
            ;
            this.form.controls['block_id'].setValidators(null);
            ;
            this.form.controls['AdmitSchool'].setValidators(null);
            ;
            this.form.controls['AdmitSchlID'].setValidators(null);
            ;
            this.form.controls['student_id'].setValidators(null);
            ;
            this.form.controls['remarks'].setValidators(null);
            ;
            this.form.controls['admiss_cls'].updateValueAndValidity();
            this.form.controls['district_id'].updateValueAndValidity();
            this.form.controls['block_id'].updateValueAndValidity();
            this.form.controls['AdmitSchool'].updateValueAndValidity();
            this.form.controls['AdmitSchlID'].updateValueAndValidity();
            this.form.controls['student_id'].updateValueAndValidity();
            this.form.controls['remarks'].updateValueAndValidity();
        }
    }
    onOoscBlockChange(eventval, fun) {
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/master_json/' + this.form.value.block_id.value + '-blkwise_school.json';
        this.http.get(json_name).subscribe((data) => {
            if (data) {
                this.masterSchoolList = data;
                if (this.masterSchoolList.length > 0) {
                    if (this.form.value.block_id != '' && this.form.value.block_id != null && this.form.value.block_id != undefined) {
                        school = this.masterSchoolList.filter(tt => tt.block_id == eventval);
                    }
                    var school;
                    if (this.masterSchoolList) {
                        if (this.masterSchoolList.length > 0) {
                            if (this.form.value.block_id != '' && this.form.value.block_id != null && this.form.value.block_id != undefined) {
                                school = this.masterSchoolList.filter(tt => tt.block_id == eventval);
                            }
                            else {
                                school = this.masterSchoolList;
                            }
                            this.ooscSchoolList = school.map(l => { return { label: l.school_name, value: l.school_id, udise: l.udise_code }; });
                            this.ooscSchoolList.sort((a, b) => {
                                if (a.label < b.label)
                                    return -1;
                                if (a.label > b.label)
                                    return 1;
                                return 0;
                            });
                        }
                    }
                    debugger;
                    if (this.studentData.school_id) {
                        var data1 = this.ooscSchoolList.filter(x => x.value == this.studentData.school_id);
                        if (data1.length > 0) {
                            this.form.controls['AdmitSchool'].setValue({ label: data1[0].label, value: data1[0].value, udise: data1[0].udise });
                            this.form.controls['AdmitSchlID'].setValue(data1[0].udise);
                        }
                    }
                }
            }
        });
        this.form.controls["AdmitSchool"].updateValueAndValidity();
        this.form.controls["AdmitSchlID"].updateValueAndValidity();
    }
    denialBlockChange(eventval, act) {
        debugger;
        this.form.controls["denial_schoolid"].setValue('');
        let json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/master_json/' + this.form.value.denial_block.value + '-blkwise_school.json';
        this.http.get(json_name).subscribe((data) => {
            if (data) {
                this.masterSchoolList = data;
                if (this.masterSchoolList.length > 0) {
                    if (this.form.value.denial_block != '' && this.form.value.denial_block != null && this.form.value.denial_block != undefined) {
                        school = this.masterSchoolList.filter(tt => tt.block_id == eventval);
                    }
                    var school;
                    if (this.masterSchoolList) {
                        if (this.masterSchoolList.length > 0) {
                            if (this.form.value.denial_block != '' && this.form.value.denial_block != null && this.form.value.denial_block != undefined) {
                                school = this.masterSchoolList.filter(tt => tt.block_id == eventval);
                            }
                            else {
                                school = this.masterSchoolList;
                            }
                            this.denialSchoolList = school.map(l => { return { label: l.school_name, value: l.school_id, udise: l.udise_code }; });
                            this.denialSchoolList.sort((a, b) => {
                                if (a.label < b.label)
                                    return -1;
                                if (a.label > b.label)
                                    return 1;
                                return 0;
                            });
                        }
                    }
                    debugger;
                    if (act == 'patch') {
                        var data1 = this.denialSchoolList.filter(x => x.value == this.studentData.denial_schoolid);
                        if (data1.length > 0) {
                            this.form.controls['denial_schoolid'].setValue({ label: data1[0].label, value: data1[0].value, udise: data1[0].udise });
                        }
                    }
                }
            }
        });
        this.form.controls["AdmitSchool"].updateValueAndValidity();
        this.form.controls["AdmitSchlID"].updateValueAndValidity();
    }
    onOoscSchoolChange(event) {
        debugger;
        console.log('event', event);
        if (this.form.value.block_id.value) {
            var udise = event.value.udise;
            if (event != '') {
                this.form.controls['AdmitSchlID'].setValue(udise);
            }
            else {
                this.form.controls['AdmitSchlID'].setValue(0);
            }
        }
        this.form.controls["AdmitSchlID"].updateValueAndValidity();
    }
    AgeCalc(formName) {
        debugger;
        let calcage = 0;
        let dob = new Date(this[formName].value.dob);
        let currDate = new Date();
        var diff = currDate.getTime() - dob.getTime();
        calcage = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        this[formName].patchValue({
            age: calcage
        });
    }
    dropOutEventChange(event, act) {
        debugger;
        this.form.controls["DrpOutSubRsn"].setValue('');
        this.form.controls["DrpOutRsnTyp"].setValue('');
        this.form.controls["DrpOutRsnsubTyp"].setValue('');
        this.form.controls["migrate_state"].setValue('');
        this.form.controls["migrate_dist"].setValue('');
        this.form.controls["migrate_block"].setValue('');
        this.form.controls["DrpOutSubRsn"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
        this.form.controls["DrpOutRsnTyp"].setValidators(null);
        this.form.controls["DrpOutRsnsubTyp"].setValidators(null);
        this.form.controls["migrate_state"].setValidators(null);
        this.form.controls["migrate_dist"].setValidators(null);
        this.form.controls["migrate_block"].setValidators(null);
        this.form.controls['DrpOutSubRsn'].updateValueAndValidity();
        this.form.controls['DrpOutRsnTyp'].updateValueAndValidity();
        this.form.controls['DrpOutRsnsubTyp'].updateValueAndValidity();
        this.form.controls['migrate_state'].updateValueAndValidity();
        this.form.controls['migrate_dist'].updateValueAndValidity();
        this.form.controls['migrate_block'].updateValueAndValidity();
        this.typeshow = false;
        this.showtypetwo = false;
        this.showDisBlk = false;
        let reasonfordropoutListdata = this.total_reasonfordropoutList.filter(item => item.reason == event);
        let reasonfordropoutListsubreason = ([...new Set(reasonfordropoutListdata.map(item => item.sub_reason))]);
        this.reasonfordropoutListsubreason = reasonfordropoutListsubreason.map(item => { return { label: item, value: item }; });
        if (act == 'patch') {
            this.form.controls['DrpOutSubRsn'].setValue({ label: this.rsnData[0].sub_reason, value: this.rsnData[0].sub_reason });
        }
    }
    dropOutEventChangeSub(event, act) {
        debugger;
        this.showtypetwo = false;
        this.showDisBlk = false;
        this.otherdisease = false;
        if (event != "Denial of admission in School") {
            this.denaildisblock = false;
            let reasonfordropoutListdata = this.total_reasonfordropoutList.filter(item => (item.sub_reason == event) && (item.type != ""));
            if (reasonfordropoutListdata.length > 0) {
                if (act == "update") {
                    this.form.controls["dropout_reason"].setValue(null);
                    this.form.controls['dropout_reason'].updateValueAndValidity();
                }
                this.typeshow = true;
                this.form.controls["DrpOutRsnTyp"].setValue('');
                this.form.controls["migrate_state"].setValue('');
                this.form.controls["migrate_dist"].setValue('');
                this.form.controls["migrate_block"].setValue('');
                this.form.controls["DrpOutRsnsubTyp"].setValue('');
                this.form.controls["DrpOutRsnTyp"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
                this.form.controls["DrpOutRsnsubTyp"].setValidators(null);
                this.form.controls["migrate_state"].setValidators(null);
                this.form.controls["migrate_dist"].setValidators(null);
                this.form.controls["migrate_block"].setValidators(null);
                this.form.controls['DrpOutRsnsubTyp'].updateValueAndValidity();
                // this.form.controls['DrpOutSubRsn'].updateValueAndValidity();
                this.form.controls['migrate_state'].updateValueAndValidity();
                this.form.controls['migrate_dist'].updateValueAndValidity();
                this.form.controls['migrate_block'].updateValueAndValidity();
                var reasonfordropoutListtype = ([...new Set(reasonfordropoutListdata.map(item => item.type))]);
                this.reasonfordropoutListType = reasonfordropoutListtype.map(item => { return { label: item, value: item }; });
            }
            else {
                this.typeshow = false;
                let dataid = this.total_reasonfordropoutList.filter(x => (x.sub_reason == event && x.reason == this.form.value.DrpOutRsn.value));
                this.form.controls["dropout_reason"].setValue(dataid[0].id);
                this.form.controls['dropout_reason'].updateValueAndValidity();
                this.form.controls["DrpOutRsnTyp"].setValue('');
                this.form.controls["migrate_state"].setValue('');
                this.form.controls["migrate_dist"].setValue('');
                this.form.controls["migrate_block"].setValue('');
                this.form.controls["DrpOutRsnsubTyp"].setValue('');
                this.form.controls["DrpOutRsnTyp"].setValidators(null);
                this.form.controls["DrpOutRsnsubTyp"].setValidators(null);
                this.form.controls["migrate_state"].setValidators(null);
                this.form.controls["migrate_dist"].setValidators(null);
                this.form.controls["migrate_block"].setValidators(null);
                this.form.controls['DrpOutRsnTyp'].updateValueAndValidity();
                // this.form.controls['DrpOutSubRsn'].updateValueAndValidity();
                this.form.controls['DrpOutRsnsubTyp'].updateValueAndValidity();
                this.form.controls['migrate_state'].updateValueAndValidity();
                this.form.controls['migrate_dist'].updateValueAndValidity();
                this.form.controls['migrate_block'].updateValueAndValidity();
                this.reasonfordropoutListType = [];
            }
        }
        else {
            let dataid = this.total_reasonfordropoutList.filter(x => (x.sub_reason == event && x.reason == this.form.value.DrpOutRsn.value));
            this.form.controls["dropout_reason"].setValue(dataid[0].id);
            this.form.controls['dropout_reason'].updateValueAndValidity();
            this.form.controls["denial_dist"].setValue('');
            this.form.controls['denial_dist'].updateValueAndValidity();
            this.form.controls["denial_block"].setValue('');
            this.form.controls['denial_block'].updateValueAndValidity();
            this.form.controls["denial_schoolid"].setValue('');
            this.form.controls['denial_schoolid'].updateValueAndValidity();
            this.typeshow = false;
            this.denaildisblock = true;
        }
        if (act == 'patch') {
            if (this.rsnData[0].type == "Inbound (The Child migrated and has come in)") {
                this.migstatedis = true;
            }
            else {
                this.migstatedis = false;
            }
            this.form.controls['DrpOutRsnTyp'].setValue({ label: this.rsnData[0].type, value: this.rsnData[0].type });
        }
    }
    dropOutEventChangetyp(event, act) {
        this.migstatedis = false;
        if (event == "Outbound (The child migrated and has gone out)" || event == "Inbound (The Child migrated and has come in)") {
            if (act == "update") {
                this.form.controls["dropout_reason"].setValue(null);
                this.form.controls['dropout_reason'].updateValueAndValidity();
            }
            if (event == "Outbound (The child migrated and has gone out)") {
                this.migState = 'Migrated to other state',
                    this.migDis = 'Migrated to other districts',
                    this.migBlk = 'Migrated to other Block';
            }
            else {
                this.migState = 'Migrated from  other state',
                    this.migDis = 'Migrated from  other districts',
                    this.migBlk = 'Migrated from  other Block';
            }
            // if(event == "Inbound (The Child migrated and has come in)"){
            //   this.migstatedis = true
            // }else{
            //   this.migstatedis = false
            // }
            this.migstatedis = true;
            this.showtypetwo = true;
            this.form.controls["migrate_state"].setValue('');
            this.form.controls["migrate_dist"].setValue('');
            this.form.controls["migrate_block"].setValue('');
            this.form.controls["DrpOutRsnsubTyp"].setValue('');
            this.form.controls["DrpOutRsnsubTyp"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls["migrate_state"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
            this.form.controls["migrate_dist"].setValidators(null);
            this.form.controls["migrate_block"].setValidators(null);
            this.form.controls['DrpOutRsnsubTyp'].updateValueAndValidity();
            this.form.controls['migrate_state'].updateValueAndValidity();
            this.form.controls['migrate_dist'].updateValueAndValidity();
            this.form.controls['migrate_block'].updateValueAndValidity();
            this.subtype = [
                { label: 'Seasonal Migration', value: '1' },
                { label: 'Permanently migrated', value: '2' },
            ];
        }
        else {
            let dataid = this.total_reasonfordropoutList.filter(x => (x.type == event && x.sub_reason == this.form.value.DrpOutSubRsn.value && x.reason == this.form.value.DrpOutRsn.value));
            this.form.controls["dropout_reason"].setValue(dataid[0].id);
            this.form.controls['dropout_reason'].updateValueAndValidity();
            this.showtypetwo = false;
            this.form.controls["migrate_state"].setValue('');
            this.form.controls["migrate_dist"].setValue('');
            this.form.controls["migrate_block"].setValue('');
            this.form.controls["DrpOutRsnsubTyp"].setValue('');
            this.form.controls["DrpOutRsnsubTyp"].setValidators(null);
            this.form.controls["migrate_state"].setValidators(null);
            this.form.controls["migrate_dist"].setValidators(null);
            this.form.controls["migrate_block"].setValidators(null);
            this.form.controls['DrpOutRsnsubTyp'].updateValueAndValidity();
            this.form.controls['migrate_state'].updateValueAndValidity();
            this.form.controls['migrate_dist'].updateValueAndValidity();
            this.form.controls['migrate_block'].updateValueAndValidity();
        }
        if (event == "Others, please specify") {
            this.otherdisease = true;
            this.form.controls["disease"].setValue('');
            this.form.controls["disease"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(this.noSpecial)]);
            this.form.controls['disease'].updateValueAndValidity();
        }
        else {
            this.form.controls["disease"].setValue('');
            this.form.controls["disease"].setValidators(null);
            this.form.controls['disease'].updateValueAndValidity();
        }
        if (act == 'patch') {
            this.form.controls['DrpOutRsnsubTyp'].setValue({ label: this.rsnData[0].sub_type, value: this.rsnData[0].sub_type });
            if (event == "Others, please specify") {
                this.form.controls['disease'].setValue(this.studentData.disease);
            }
        }
    }
    dropOutId(event) {
        let dataid = this.total_reasonfordropoutList.filter(x => x.sub_type == event.label && (x.type == this.form.value.DrpOutRsnTyp.value && x.sub_reason == this.form.value.DrpOutSubRsn.value && x.reason == this.form.value.DrpOutRsn.value));
        this.form.controls["dropout_reason"].setValue(dataid[0].id);
        this.form.controls['dropout_reason'].updateValueAndValidity();
        if (this.migstatedis) {
            this.form.controls['migrate_state'].setValue({ label: "Tamil Nadu", value: 124 });
            this.showDisBlk = true;
        }
    }
    Changetypstate(event, act) {
        if (event == 124) {
            this.showDisBlk = true;
            this.form.controls["migrate_dist"].setValue('');
            this.form.controls['migrate_dist'].updateValueAndValidity();
            this.form.controls["migrate_block"].setValue('');
            this.form.controls['migrate_block'].updateValueAndValidity();
            this.checkBlockDB(this.studentData.migrate_dist, 'patch');
        }
        else {
            this.showDisBlk = false;
        }
        if (act == 'patch') {
            var data = this.totalcountry.filter(x => x.value == event);
            this.form.controls['migrate_state'].setValue({ label: data[0].label, value: data[0].value });
        }
    }
    checkBlockDB(eventval, act) {
        this.form.controls["migrate_block"].setValue('');
        let blockdata = [];
        let query = 'SELECT * FROM allBlockDetails';
        return this.sqliteDB.getDataLocalDB(query).then(block => {
            if (block.rows.length > 0) {
                let blockTemp = [];
                for (var i = 0; i < block.rows.length; i++) {
                    blockTemp.push(block.rows.item(i));
                }
                ;
                blockdata = blockTemp;
                block = blockdata.filter(tt => tt.district_id == eventval);
                const key = 'blkid';
                let black_unique_list = [...new Map(block.map(item => [item[key], item])).values()];
                if (blockdata) {
                    if (blockdata.length > 0) {
                        this.ooscBlockListdata = black_unique_list.map(l => { return { label: l.block_name, value: l.blkid }; });
                        this.ooscBlockListdata.sort((a, b) => {
                            if (a.label < b.label)
                                return -1;
                            if (a.label > b.label)
                                return 1;
                            return 0;
                        });
                    }
                }
            }
            else {
                this.getBlockList(eventval);
            }
            debugger;
            if (act == 'patch') {
                var data = this.totalDistricts.filter(x => x.value == this.studentData.migrate_dist);
                this.form.controls['migrate_dist'].setValue({ label: data[0].label, value: data[0].value });
                var data1 = this.ooscBlockListdata.filter(x => x.value == this.studentData.migrate_block);
                this.form.controls['migrate_block'].setValue({ label: data1[0].label, value: data1[0].value });
            }
        });
    }
    denialBlockDB(eventval, act) {
        debugger;
        this.form.controls["denial_block"].setValue('');
        this.form.controls["denial_schoolid"].setValue('');
        let blockdata = [];
        let query = 'SELECT * FROM allBlockDetails';
        return this.sqliteDB.getDataLocalDB(query).then(block => {
            if (block.rows.length > 0) {
                let blockTemp = [];
                for (var i = 0; i < block.rows.length; i++) {
                    blockTemp.push(block.rows.item(i));
                }
                ;
                blockdata = blockTemp;
                block = blockdata.filter(tt => tt.district_id == eventval);
                const key = 'blkid';
                let black_unique_list = [...new Map(block.map(item => [item[key], item])).values()];
                if (blockdata) {
                    if (blockdata.length > 0) {
                        this.denial = black_unique_list.map(l => { return { label: l.block_name, value: l.blkid }; });
                        this.denial.sort((a, b) => {
                            if (a.label < b.label)
                                return -1;
                            if (a.label > b.label)
                                return 1;
                            return 0;
                        });
                    }
                }
            }
            else {
                this.getBlockList(eventval);
            }
            debugger;
            if (act == 'patch') {
                var data1 = this.denial.filter(x => x.value == this.studentData.denial_block);
                this.form.controls['denial_block'].setValue({ label: data1[0].label, value: data1[0].value });
                this.denialBlockChange(this.studentData.denial_block, 'patch');
            }
        });
    }
    onUploadFile(event) {
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].size <= 10485760) {
                this.doc_file = event.target.files;
                var fileName = event.target.files[0].name;
                var splittedName = fileName.split(".");
                this.fileType = splittedName[1];
                if (this.fileType == 'jpeg' || this.fileType == 'jpg' || this.fileType == 'png') {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
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
                                    this.form.controls.survey_photo.setValue(result.key);
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
    /*  Opening Camera here.....   */
    openCameraOn() {
        debugger;
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
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_10__.base64StringToBlob)(base[1], 'image/jpg');
                        if (blob.size <= 3145728) {
                            this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                                if (result) {
                                    this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                        this.form.controls.survey_photo.setValue(result.key);
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
        var filename = this.cameraKey;
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            if (result) {
                this.imageData = result.url;
                console.log(this.imageData);
                if (fun == 'modal') {
                    const modal = yield this.modalCtrl.create({
                        component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_12__.ViewImagePage,
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
    checkMobileNo() {
        if (this.form.value.MobilenoParent != '' && this.form.value.MobilenoParent != null && this.form.value.MobilenoParent != undefined && this.form.value.AlternativeMobileno != '' && this.form.value.AlternativeMobileno != null && this.form.value.AlternativeMobileno != undefined) {
            if (this.form.value.MobilenoParent == this.form.value.AlternativeMobileno) {
                this.mobile_error = true;
            }
            else {
                this.mobile_error = false;
            }
        }
        else {
            this.mobile_error = false;
        }
    }
    checkGPSPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
            if (result.hasPermission) {
                this.askToTurnOnGPS();
            }
            else {
                this.requestGPSPermission();
            }
        }, err => {
            console.log("err=", err);
            // alert(err);
        });
    }
    askToTurnOnGPS() {
        if (this.pagefun == 'edit') {
            this.setFormValues();
        }
        // this.setFormValues();// current working
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then((i) => {
            // this.setFormValues();// current working
            // this.noData = 1;
        }, error => {
            this.alertService.alertToTurnOnPermission('Location', 'Location');
            this.checkGPSPermission();
        });
    }
    requestGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then((i) => {
                    this.askToTurnOnGPS();
                }, error => {
                    this.alertService.alertWhite('To get current location please turn on device location');
                });
            }
        });
    }
    setFormValues() {
        debugger;
        this.form.controls['latitude'].setValue('');
        this.form.controls['longitude'].setValue('');
        this.form.controls['DrpOutRsn'].setValue('');
        this.form.controls['DrpOutSubRsn'].setValue('');
        this.form.controls['DrpOutRsnTyp'].setValue('');
        this.form.controls['DrpOutRsnsubTyp'].setValue('');
        this.surveyform.controls["IndxID"].setValue('');
        this.surveyform.controls["survey_today"].setValue('');
        this.surveyform.controls["survey_block"].setValue('');
        this.surveyform.controls["survey_local_body"].setValue('');
        this.surveyform.controls["survey_habitation"].setValue('');
        this.surveyform.controls["survey_NEC"].setValue('');
        this.form.controls['student_name'].setValue(this.studentData.student_name);
        this.form.controls['address'].setValue(this.studentData.address);
        this.form.controls['corporation'].setValue(this.studentData.corporation);
        // this.form.controls['aadhar_no'].setValue(this.studentData.aadhar_no);
        this.form.controls['father_name'].setValue(this.studentData.father_name);
        this.form.controls['mother_name'].setValue(this.studentData.mother_name);
        this.form.controls['guardian_name'].setValue(this.studentData.guardian_name);
        // this.form.controls['phone_no'].setValue(this.studentData.phone_no);
        this.form.controls['mobileno_parent'].setValue(this.studentData.mobileno_parent);
        // this.form.controls['alternative_mobile_no'].setValue(this.studentData.alternative_mobile_no);
        if (this.studentData.aadhar_no != '0') {
            this.form.controls['aadhar_no'].setValue(this.studentData.aadhar_no);
        }
        if (this.studentData.phone_no != '0') {
            this.form.controls['phone_no'].setValue(this.studentData.phone_no);
        }
        if (this.studentData.alternative_mobile_no != '0') {
            this.form.controls['alternative_mobile_no'].setValue(this.studentData.alternative_mobile_no);
        }
        this.form.controls['gender'].setValue(this.studentData.gender);
        this.form.controls['IndxID'].setValue(this.studentData.id);
        this.form.controls['community_id'].setValue(this.studentData.community_id);
        this.form.controls['religion_id'].setValue(this.studentData.religion_id);
        this.form.controls['da_yn'].setValue(this.studentData.da_yn);
        if (this.studentData.da_yn == '1') {
            this.form.controls['da_type'].setValue(this.studentData.da_type);
            if (this.studentData.diff_nid) {
                this.form.controls['diff_nid'].setValue(this.studentData.diff_nid);
            }
            if (this.studentData.diff_uid) {
                this.form.controls['diff_uid'].setValue(this.studentData.diff_uid);
            }
        }
        debugger;
        this.cameraKey = this.studentData.survey_photo;
        this.viewPic('show');
        var dateformat = this.studentData.dob;
        var datevalue = this.pipe.transform(dateformat, 'yyyy-MM-dd');
        this.form.controls['dob'].setValue(datevalue);
        this.AgeCalc('form');
        this.form.controls['sch_willing_yn'].setValue(this.studentData.sch_willing_yn);
        if (this.studentData.sch_willing_yn == '1') {
            this.form.controls['admiss_cls'].setValue(this.studentData.admiss_cls);
            this.form.controls['student_id'].setValue(this.studentData.student_id);
            this.form.controls['remarks'].setValue(this.studentData.remarks);
        }
        else {
            var childSupport = this.studentData.child_support;
            var data = this.child_req_support.filter(x => x.value == childSupport);
            if (data) {
                this.form.controls['child_support'].setValue(data[0]);
            }
        }
        if (this.studentData.sch_willing_yn == '1') {
            if (this.studentData.district_id) {
                var data112 = this.totalDistricts.filter(x => x.value == this.studentData.district_id);
                this.form.controls['district_id'].setValue({ label: data112[0].label, value: data112[0].value });
                this.checkBlockLocalDB(this.studentData.district_id);
            }
        }
        this.form.controls['survey_photo'].setValue(this.studentData.survey_photo);
        this.getAcYr();
        // dropout Reason Patch
        debugger;
        this.form.controls['dropout_reason'].setValue(this.studentData.dropout_reason);
        debugger;
        this.rsnData = this.total_reasonfordropoutList.filter(x => x.id == this.studentData.dropout_reason);
        this.form.controls['DrpOutRsn'].setValue({ label: this.rsnData[0].reason, value: this.rsnData[0].reason });
        this.dropOutEventChange(this.rsnData[0].reason, 'patch');
        if (this.studentData.dropout_reason != "80") {
            if (this.rsnData[0].type != "") {
                this.dropOutEventChangeSub(this.rsnData[0].sub_reason, 'patch');
            }
            if (this.rsnData[0].sub_type != "") {
                this.dropOutEventChangetyp(this.rsnData[0].type, 'patch');
                this.Changetypstate(this.studentData.migrate_state, 'patch');
            }
            if (this.rsnData[0].type == "Others, please specify") {
                this.otherdisease = true;
            }
        }
        else {
            this.denaildisblock = true;
            var datadenialDist = this.totalDistricts.filter(x => x.value == this.studentData.denial_dist);
            this.form.controls['denial_dist'].setValue({ label: datadenialDist[0].label, value: datadenialDist[0].value });
            this.denialBlockDB(this.studentData.denial_dist, 'patch');
        }
    }
};
NeverenrollmentQuestPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_3__.NetworkService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_6__.EmisService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__.Geolocation },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_11__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__.AndroidPermissions },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_14__.LocationAccuracy }
];
NeverenrollmentQuestPage.propDecorators = {
    loadingPortsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['loadingPortsComponent',] }],
    dischargingPortsComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild, args: ['dischargingPortsComponent',] }]
};
NeverenrollmentQuestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-neverenrollment-quest',
        template: _raw_loader_neverenrollment_quest_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_neverenrollment_quest_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NeverenrollmentQuestPage);



/***/ }),

/***/ 87336:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/oosc/neverenrollment-quest/neverenrollment-quest.page.scss ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-background-color {\n  --ion-item-background: #015f01d5;\n}\n\nion-card {\n  background-color: white;\n  border-radius: 6px;\n  margin-right: 18px;\n  margin-left: 18px;\n}\n\n.card-align {\n  padding: 10px !important;\n  background-color: white;\n  color: black;\n}\n\n.lbl-style {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  color: crimson;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.item .sc-ion-label-md-h {\n  white-space: none;\n}\n\n.lbl-style1 {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.btn-style {\n  --background: crimson;\n  color: white;\n  font-weight: 800;\n  float: right;\n}\n\n.lbl-style-black {\n  font-family: \"FontsFree-Net-ProximaNovaAltRegular\";\n  color: black;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.0125em;\n}\n\n.center {\n  margin: auto;\n  padding: 10px;\n  font-weight: 700;\n  font-size: 16px;\n}\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n.alert-radio-label.sc-ion-alert-md {\n  padding-left: unset;\n  padding-right: unset;\n  padding-inline-start: 34px;\n  padding-inline-end: 26px;\n}\n\nion-toggle {\n  zoom: 0.7;\n}\n\n.qus-txt {\n  font-size: 17px;\n  padding-left: 15px;\n}\n\n.index-aln {\n  padding-right: 5px;\n  color: firebrick;\n}\n\n.toggle-aln {\n  text-align: center;\n  margin-top: 4px;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2.2%;\n}\n\n.area-item-style {\n  padding-left: 2%;\n}\n\n.btn-style {\n  background-color: #ff3300;\n}\n\nion-header {\n  background-color: #397ffc !important;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\nion-label {\n  font-size: 17px;\n}\n\n.radio-yn {\n  padding-right: 60px;\n  padding-left: 5px;\n}\n\n.lbl-color {\n  color: red;\n}\n\n.calendar-icon {\n  position: absolute;\n  right: 5px;\n  bottom: 4px;\n}\n\n.error-message {\n  padding: 5px !important;\n  color: red;\n}\n\n.total {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.total-txt {\n  color: darkslategray;\n  font-weight: 600;\n}\n\n.total-subtxt {\n  color: darkslategray;\n  font-weight: 600;\n  text-align: end;\n}\n\nion-list {\n  background: white !important;\n}\n\n.fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.upload-btn {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-size: 16px;\n  padding-left: 15px;\n  background: #f2e6ff;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  border-radius: 5px;\n}\n\n.upload-icon {\n  color: #8B67B3;\n}\n\n.user-icon {\n  padding-top: 1px;\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\nion-button {\n  --color: white !important;\n}\n\na:not([href]):not([class]) {\n  color: blue !important;\n  text-decoration: underline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldmVyZW5yb2xsbWVudC1xdWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxrREFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtEQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0Usa0RBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFFQSwwQkFBQTtFQUVBLHdCQUFBO0FBQUo7O0FBR0U7RUFDRSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLHlCQUFBO0FBQUo7O0FBSUU7RUFDRSxvQ0FBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7QUFESjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSw0QkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0FBREo7O0FBSUU7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxjQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJRTtFQUNFLHlCQUFBO0FBREo7O0FBSUU7RUFDRSxzQkFBQTtFQUNBLHFDQUFBO0FBREoiLCJmaWxlIjoibmV2ZXJlbnJvbGxtZW50LXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMDE1ZjAxZDU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWFsaWduIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAubGJsLXN0eWxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnRzRnJlZS1OZXQtUHJveGltYU5vdmFBbHRSZWd1bGFyXCI7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjAxMjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAubGJsLXN0eWxlMSB7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250c0ZyZWUtTmV0LVByb3hpbWFOb3ZhQWx0UmVndWxhclwiO1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDEyNWVtO1xyXG4gIH1cclxuICBcclxuICAuYnRuLXN0eWxlIHtcclxuICAgIC0tYmFja2dyb3VuZDogY3JpbXNvbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYmwtc3R5bGUtYmxhY2sge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udHNGcmVlLU5ldC1Qcm94aW1hTm92YUFsdFJlZ3VsYXJcIjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjAxMjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNlbnRlciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtcmFkaW8tbGFiZWwuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogNTJweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAzNHB4O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMjZweDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvZ2dsZSB7XHJcbiAgICB6b29tOiAwLjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdXMtdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmluZGV4LWFsbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBjb2xvcjogZmlyZWJyaWNrO1xyXG4gIH1cclxuICBcclxuICAudG9nZ2xlLWFsbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXN0eWxlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMi4yJTtcclxuICB9XHJcbiAgXHJcbiAgLmFyZWEtaXRlbS1zdHlsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlXHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tc3R5bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzMwMDtcclxuICAgIDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3ZmZjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhZGlvLXluIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmxibC1jb2xvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAuY2FsZW5kYXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweFxyXG4gIH1cclxuICBcclxuICAudG90YWwtdHh0IHtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsLXN1YnR4dCB7XHJcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlSW5wdXQge1xyXG4gICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgaGVpZ2h0OiAwLjFweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxlSW5wdXQgbGFiZWwge1xyXG4gICAgY29sb3I6ICM3MTcxNzE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnZhbGlkLWNsciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAudXBsb2FkLWJ0biB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZTZmZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC51cGxvYWQtaWNvbiB7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItaWNvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICBcclxuICAudXNlci1pY29uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGE6bm90KFtocmVmXSk6bm90KFtjbGFzc10pIHtcclxuICAgIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 82340:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/neverenrollment-quest/neverenrollment-quest.page.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goToHome()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 18px;\">Never Enrolled Survey\r\n        Questions</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div style=\"font-size: 13px;\" class=\"user-icon-label\">\r\n          <ion-label class=\"user-icon-label\">{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\" *ngIf=\"!surveyshow && !first\">\r\n  <ion-grid>\r\n    <div style=\"margin: 20px;\" *ngIf=\"!nesFormAllow\">\r\n      <ion-card style=\"border-radius: 5px;\">\r\n        <ion-item lines=\"none\">\r\n          <img src=\"{{'assets/icons/oosc.svg'}}\">\r\n          <ion-label>\r\n            <p class=\"name\" style=\"color:#2176b9; padding-left: 30px !important\">Survey Check</p>\r\n          </ion-label>\r\n          <div class=\"button\">\r\n            <ion-button class=\"btn-present\" (click)=\"surveyCheck()\">\r\n              <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div style=\"margin: 20px;\" *ngIf=\"nesFormAllow\">\r\n      <ion-card style=\"border-radius: 5px;\">\r\n        <ion-item lines=\"none\" class=\"item-background-color\">\r\n          <img src=\"{{'assets/icons/oosc.svg'}}\">\r\n          <ion-label>\r\n            <p class=\"name\" style=\"color:white; padding-left: 30px !important\">Survey Check</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div style=\"margin: 20px;\">\r\n      <ion-card style=\"border-radius: 5px;\">\r\n        <ion-item lines=\"none\">\r\n          <img src=\"{{'assets/icons/oosc.svg'}}\">\r\n          <ion-label>\r\n            <p class=\"name\" style=\"color:#2176b9; padding-left: 30px !important\">Never Enrolled Survey Form</p>\r\n          </ion-label>\r\n          <div class=\"button\" *ngIf=\"nesFormAllow\">\r\n            <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey()\">\r\n              <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid>\r\n    <form [formGroup]=\"surveyform\" *ngIf=\"!surveyshow && first\">\r\n\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">1. Have you gone for the survey today? <span class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"survey_today\" (ionChange)=\"onSurveyChange($event.detail.value)\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div *ngIf=\"surveyOtherQuestion == 1\">\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                (I). If Yes, Please select the block <span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"survey_block\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscBlockList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"onBlockChange($event.value.value)\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                (II). If Yes, Please select the local body <span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"survey_local_body\" itemValueField=\"value\" itemTextField=\"label\"\r\n                [items]=\"localBodyList\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n              </ionic-selectable>\r\n              <!-- (onChange)=\"onLocalBodyChange($event.value.LoclBodyCode)\" -->\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"habitationHide\">\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\">\r\n                (III). If Yes, Please select the habitation <span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <!-- <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"survey_habitation\" itemValueField=\"value\" itemTextField=\"label\"\r\n                [items]=\"habitationList\" [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n              </ionic-selectable>\r\n            </ion-col> -->\r\n          </ion-row>\r\n          <ion-item lines=\"none\" class=\"item-style\">\r\n            <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"survey_habitation\"\r\n              style=\"color: var(--ion-color-primary,#388);\" pattern=\"^[a-zA-Z \\b]+$\"></ion-input>\r\n          </ion-item>\r\n          <ion-row>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n              *ngIf=\"surveyform.controls['survey_habitation'].hasError('required') && (surveyform.controls['survey_habitation'].dirty || surveyform.controls['survey_habitation'].touched)\">\r\n              Field is required</p>\r\n          </ion-row>\r\n          <ion-row>\r\n            <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n                padding-right: 10px;\" *ngIf=\"surveyform.controls.survey_habitation.errors?.pattern\">Invalid Format\r\n            </p>\r\n          </ion-row>\r\n      </ion-card>\r\n    </div>\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">2. Have you identified a Never Enrolled child? <span\r\n                class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"survey_NEC\" (ionChange)=\"onSurveyNECChange()\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <div class=\"footer-txt\" style=\"padding-bottom: 34px;padding-top:0px;\">\r\n        <div class=\"sumbit-button\">\r\n          <ion-button expand=\"block\" color=\"primary\" style=\"color:white\" (click)=\"onSurveySave()\"\r\n            [disabled]=\"isBtnDisabled\">Submit</ion-button>\r\n        </div>\r\n      </div>\r\n    \r\n\r\n    </form>\r\n\r\n    <form [formGroup]=\"form\" *ngIf=\"surveyshow\">\r\n      <!----------------------------------------- Basic Data  ----------------------------------------------->\r\n    \r\n      <ion-row class=\"total\" style=\"padding-top: 15px;\r\n        padding-bottom: 5px;\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label>Basic Information</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <!-- Question 1 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">1.</span>Student name<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"student_name\"\r\n            style=\"color: var(--ion-color-primary,#388);\" pattern=\"^[a-zA-Z \\b]+$\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['student_name'].hasError('required') && (form.controls['student_name'].dirty || form.controls['student_name'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.student_name.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 2 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">2.</span>Address of the child<span\r\n                class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"area-item-style\">\r\n          <ion-textarea placeholder=\"Please Enter Address\" formControlName=\"address\" maxlength=\"200\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['address'].hasError('required') && (form.controls['address'].dirty || form.controls['address'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 3 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">3.</span>Name of the Panchayat / Municipality /\r\n              Town Panchayat / Corporation</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"corporation\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.corporation.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 5 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">4.</span>Aadhaar Number of the child</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"aadhar_no\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"12\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.aadhar_no.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 6 -->\r\n    \r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\">5.</span>Gender<span\r\n                  class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"gender\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of genderList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['gender'].hasError('required') && (form.controls['gender'].dirty || form.controls['gender'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 7 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">6.</span>Date of Birth<span\r\n              class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n    \r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\r\n          <ion-datetime placeholder=\"Select Date\" displayFormat=\"DD/MM/YYYY\" formControlName=\"dob\" (ionChange)=\"AgeCalc('form')\"\r\n            style=\"padding-left:6px\" min=\"{{minDate}}\" max=\"{{maxDate}}\"></ion-datetime>\r\n        </ion-item>\r\n      </ion-card>\r\n    \r\n    \r\n      <!-- Question 8 -->\r\n    \r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">7.</span>Community</ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"community_id\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of communityList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n    \r\n      <!-- Question 9 -->\r\n    \r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">8.</span>Religion</ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"religion_id\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of religionList\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n    \r\n      <!-- Question 10 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">9.</span>Father Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"father_name\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.father_name.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 11 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">10.</span>Mother Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"mother_name\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.mother_name.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 12 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">11.</span>Guardian Name</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"guardian_name\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.guardian_name.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 13 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">12.</span>Residence Contact / Neighbour contact\r\n              number</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"phone_no\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.phone_no.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 14 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">13.</span>Mobile number of parent / guardian<span\r\n                class=\"lbl-color\">*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"mobileno_parent\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\" (keydown)=\"checkMobileNo()\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.mobileno_parent.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 15 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">14.</span>Alternative Mobile No <span\r\n                class=\"lbl-color\">(optional)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Alternative Mobile No\" formControlName=\"alternative_mobile_no\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\" (keydown)=\"checkMobileNo()\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.alternative_mobile_no.errors?.pattern\">Invalid Format\r\n          </p>\r\n          <!-- {{mobile_error}} : mobile_error -->\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"mobile_error == true\">Mobile No Same With Parent / Guardian Mobile No\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 15 -->\r\n    \r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">15.</span>Whether the child is differently\r\n              abled?<span class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"da_yn\" value=\"{{this.form.value.da_yn}}\"\r\n                (ionChange)=\"onDiffAbleChange($event.detail.value,'change')\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['da_yn'].hasError('required') && (form.controls['da_yn'].dirty || form.controls['da_yn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-- Question 15 if yes 15(i) -->\r\n    \r\n      <ion-card *ngIf=\"this.form.value.da_yn == '1'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\"><span class=\"index-aln\">(i).</span>If\r\n                yes, please choose\r\n                the category<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <!-- <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"da_type\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"differentlyAbledList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n              </ionic-selectable> -->\r\n              <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"da_type\"\r\n                style=\"max-width: 100% !important;padding-left:0px\">\r\n                <ion-select-option [value]=\"item.value\" *ngFor=\"let item of differentlyAbledList\"> {{item.label}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['da_type'].hasError('required') && (form.controls['da_type'].dirty || form.controls['da_type'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!------------------ CWSN NO Details------------------->\r\n    \r\n      <ion-card\r\n        *ngIf=\"(this.form.value.da_yn == '1' && this.form.value.diff_nid != '' && this.form.value.diff_nid != null) || (this.form.value.da_yn == '1')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(ii).</span>National Identity (NID) No <span\r\n                class=\"lbl-color\">(Eg:TNTLRHI40477/2019)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter National Identity (NID) No\" formControlName=\"diff_nid\"\r\n            maxlength=\"20\" style=\"color: var(--ion-color-primary,#388);\" (keyup)=\"updateNidNo($event)\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['diff_nid'].hasError('required') && (form.controls['diff_nid'].dirty || form.controls['diff_nid'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['diff_nid'].hasError('pattern') && (form.controls['diff_nid'].dirty || form.controls['diff_nid'].touched)\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <ion-card\r\n        *ngIf=\"(this.form.value.da_yn == '1' && this.form.value.UDID != '' && this.form.value.UDID != null) || (this.form.value.da_yn == '1')\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">(iii).</span>Unique Disability Identity(UDID)\r\n              No<span class=\"lbl-color\"> (Eg:TN0120420100090662)</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Unique Disability Identity(UDID) No\" formControlName=\"diff_uid\"\r\n            maxlength=\"20\" style=\"color: var(--ion-color-primary,#388);\" (keyup)=\"updateUidNo($event)\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['diff_uid'].hasError('required') && (form.controls['diff_uid'].dirty || form.controls['diff_uid'].touched)\">\r\n            Field is required</p>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\"\r\n            *ngIf=\"form.controls['diff_uid'].hasError('pattern') && (form.controls['diff_uid'].dirty || form.controls['diff_uid'].touched)\">\r\n            Invalid Format</p>\r\n        </ion-row>\r\n      </ion-card>\r\n    \r\n      <!-------------------------------------------- OOSC Data Type ----------------------------------------------->\r\n    \r\n      <ion-row class=\"total\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label class=\"ion-text-wrap\">Never Enrolled Data</ion-label>\r\n    \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- Question 1 -->\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">1.</span>Reason for never enrolled<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"DrpOutRsn\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"reasonfordropoutList\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"dropOutEventChange($event.value.value,'update')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DrpOutRsn'].hasError('required') && (form.controls['DrpOutRsn'].dirty || form.controls['DrpOutRsn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 2 -->\r\n      <ion-card *ngIf=\"this.form.controls.DrpOutRsn.value\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">2.</span>Never enrolled type<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"DrpOutSubRsn\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"reasonfordropoutListsubreason\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"dropOutEventChangeSub($event.value.value,'update')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DrpOutSubRsn'].hasError('required') && (form.controls['DrpOutSubRsn'].dirty || form.controls['DrpOutSubRsn'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 -->\r\n      <ion-card *ngIf=\"typeshow\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">3.</span>Type - 1<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"DrpOutRsnTyp\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"reasonfordropoutListType\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"dropOutEventChangetyp($event.value.value,'update')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DrpOutRsnTyp'].hasError('required') && (form.controls['DrpOutRsnTyp'].dirty || form.controls['DrpOutRsnTyp'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"otherdisease\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">4.</span>Disease Name<span\r\n              class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"disease\"\r\n            style=\"color: var(--ion-color-primary,#388);\" pattern=\"^[a-zA-Z \\b]+$\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['disease'].hasError('required') && (form.controls['disease'].dirty || form.controls['disease'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.disease.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 4 -->\r\n      <ion-card *ngIf=\"showtypetwo\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">4.</span>Type - 2<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"DrpOutRsnsubTyp\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"subtype\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"dropOutId($event.value)\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['DrpOutRsnTyp'].hasError('required') && (form.controls['DrpOutRsnTyp'].dirty || form.controls['DrpOutRsnTyp'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 5 -->\r\n      <ion-card *ngIf=\"this.form.controls.DrpOutRsnsubTyp.value && migstatedis\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">5.</span>{{migState}}<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"migrate_state\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"totalcountry\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"Changetypstate($event.value.value,'update')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n\r\n      <!-- Question 6 -->\r\n      <ion-card *ngIf=\"showDisBlk\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">6.</span>{{migDis}}<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"migrate_dist\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"totalDistricts\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\"\r\n                (onChange)=\"checkBlockDB($event.value.value,'update')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n\r\n      <!-- Question 7 -->\r\n      <ion-card *ngIf=\"showDisBlk\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span\r\n                  class=\"index-aln\">7.</span>{{migBlk}}<span class=\"lbl-color\">*</span></ion-label>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" style=\"padding-left: 0px ; padding-right: 0px;\">\r\n              <ionic-selectable text-wrap placeholder=\"Select\" formControlName=\"migrate_block\" itemValueField=\"value\"\r\n                itemTextField=\"label\" [items]=\"ooscBlockListdata\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 5 -->\r\n    \r\n      <ion-card *ngIf=\"denaildisblock\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">3.</span>District\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"denial_dist\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"totalDistricts\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"denialBlockDB($event.value.value,'update')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 6 -->\r\n\r\n      <ion-card *ngIf=\"denaildisblock\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">4.</span>\r\n                Block\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"denial_block\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"denial\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"denialBlockChange($event.value.value,'update')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 7 -->\r\n\r\n      <ion-card *ngIf=\"denaildisblock\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">5.</span>\r\n                Name of the school\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"denial_schoolid\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"denialSchoolList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n    \r\n      <!------------------------------------------ Present status of the child ------------------------------------------->\r\n    \r\n      <ion-row class=\"total\">\r\n        <ion-col size=\"12\" class=\"total-txt\">\r\n          <ion-label class=\"ion-text-wrap\">Present status of the child</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- Question 1 -->\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">1.</span>\r\n                Name of the child\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" value=\"{{this.form.value.student_name}}\" \r\n              formControlName=\"student_name\" readonly=true\r\n            style=\"color: var(--ion-color-primary,#388);\" pattern=\"^[a-zA-Z \\b]+$\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 2 -->\r\n\r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">2.</span>\r\n                Age of the child\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\"  formControlName=\"age\" readonly=true\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 -->\r\n      <ion-card>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">3.</span>Is the child willing to go to school?<span class=\"lbl-color\">*</span></ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-left:0px;padding-bottom:0px;padding-top:0px\">\r\n            <ion-list style=\"padding-bottom:0px;padding-top:0px\">\r\n              <ion-radio-group formControlName=\"sch_willing_yn\" value=\"{{this.form.value.sch_willing_yn}}\"\r\n              (ionChange)=\"onChildChange($event.detail.value)\">\r\n                <ion-item lines=\"none\" class=\"item-style\">\r\n                  <ion-radio value=\"1\"></ion-radio><span class=\"radio-yn\">Yes</span>\r\n                  <ion-radio value=\"2\"></ion-radio><span class=\"radio-yn\">No</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n       <!-- Question 3 if yes -->\r\n        <!-- Question 4 -->\r\n    \r\n      <ion-card *ngIf=\"this.form.value.sch_willing_yn == '1'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\"><span class=\"index-aln\">4.</span>which class the child need admission for?</ion-label>\r\n            </ion-col>\r\n            <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"admiss_cls\"\r\n              style=\"max-width: 100% !important;padding-left:0px\">\r\n              <ion-select-option [value]=\"item.value\" *ngFor=\"let item of class\"> {{item.label}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n        <!-- Question 5 -->\r\n    \r\n        <ion-card *ngIf=\"this.form.value.sch_willing_yn == '1'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">5.</span>District\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"district_id\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"totalDistricts\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"onOoscDistrictChange('change',$event.value.value,'present')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 6 -->\r\n\r\n      <ion-card *ngIf=\"this.form.value.sch_willing_yn == '1'\">\r\n        <ion-item>\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">6.</span>\r\n                Block\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"block_id\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscBlockList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\"\r\n                (onChange)=\"onOoscBlockChange($event.value.value,'change')\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 7 -->\r\n\r\n      <ion-card *ngIf=\"this.form.value.sch_willing_yn == '1'\">\r\n        <ion-item>\r\n          <ion-row>\r\n            <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n              <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                <span class=\"index-aln\">7.</span>\r\n                Name of the school where the child is enrolled after identification\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n              <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                formControlName=\"AdmitSchool\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"ooscSchoolList\"\r\n                [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\" (onChange)=\"onOoscSchoolChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-card>\r\n\r\n      <!-- Question 8 -->\r\n\r\n      <ion-card *ngIf=\"this.form.value.sch_willing_yn == '1'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <!-- <span class=\"index-aln\" *ngIf=\"active\">4.</span>\r\n              <span class=\"index-aln\"\r\n                *ngIf=\"!active\">2.</span> -->\r\n\r\n              <span class=\"index-aln\">8.</span>\r\n              UDISE Code of the school\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" formControlName=\"AdmitSchlID\" style=\"color: var(--ion-color-primary,#388);\"\r\n            readonly=true></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.AdmitSchlID.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 9 -->\r\n\r\n      <ion-card *ngIf=\"this.form.value.sch_willing_yn == '1'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\"><span class=\"index-aln\">9.</span>Emis Number</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\" class=\"item-style\">\r\n          <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" formControlName=\"student_id\"\r\n            style=\"color: var(--ion-color-primary,#388);\" maxlength=\"10\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.student_id.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 if Yes -->\r\n      <!-- Remarks -->\r\n      <ion-card *ngIf=\"this.form.value.sch_willing_yn == '1'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span class=\"index-aln\">10.</span>\r\n              Remarks\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-item lines=\"none\">\r\n          <ion-textarea placeholder=\"Please Enter Your Remarks\" formControlName=\"remarks\"\r\n            style=\"color: var(--ion-color-primary,#388);\"></ion-textarea>\r\n        </ion-item>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n              padding-right: 10px;\" *ngIf=\"form.controls.remarks.errors?.pattern\">Invalid Format\r\n          </p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <!-- Question 3 if NO -->\r\n      <!-- Question 4 -->\r\n\r\n        <ion-card *ngIf=\"this.form.value.sch_willing_yn == '2'\">\r\n          <ion-item>\r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;padding-left:0px\">\r\n                <ion-label style=\"color:gray;font-size: 16px;\" class=\"ion-text-wrap\">\r\n                  <span class=\"index-aln\">4.</span>\r\n                  what support does the child require to join the school?\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"12\" padding-left=\"0px\" padding-rigth=\"0px\">\r\n                <ionic-selectable style=\"max-width: 100% !important;padding-left:0px\" placeholder=\"Select\"\r\n                  formControlName=\"child_support\" itemValueField=\"value\" itemTextField=\"label\" [items]=\"child_req_support\"\r\n                  [canSearch]=\"true\" closeButton=\"true\" closeButtonSlot=\"end\">\r\n                </ionic-selectable>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n      <!-- image Upload -->\r\n      <ion-card>\r\n        <ion-row class=\"bck\">\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\">\r\n              <span *ngIf=\"this.form.value.sch_willing_yn == ''\" class=\"index-aln\">4.</span>\r\n              <span *ngIf=\"this.form.value.sch_willing_yn == '1'\" class=\"index-aln\">11.</span>\r\n              <span *ngIf=\"this.form.value.sch_willing_yn == '2'\" class=\"index-aln\">5.</span>\r\n              Take Photo\r\n              <span class=\"lbl-color\"\r\n                *ngIf=\"(this.form.value.DrpOutRsn?.value != '' && this.form.value.DrpOutRsn?.value != null && this.form.value.DrpOutRsn.value != '37') || (this.form.value.DrpOutRsn?.value == '' || this.form.value.DrpOutRsn?.value == null || this.form.value.DrpOutRsn?.value == undefined)\">\r\n                (Please Include Survey Photo)*</span>\r\n            </ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" style=\"text-align: center;\">\r\n            <div style=\"padding: 15px;\">\r\n              <ion-icon name=\"camera\" style=\"font-size: 70px;padding-top: 12px;color: #343232;\" width=\"600\" height=\"100\"\r\n                (click)=\"openCameraOn()\"></ion-icon>\r\n            </div><br>\r\n            <ion-label style=\"text-align: center;\">Camera</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"align-self: center;\">\r\n            <div style=\"text-align: center;\">\r\n              <p style=\"font-size: 12px;\">(Or)</p>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" style=\"align-self: end;text-align: center;\">\r\n            <div style=\"padding: 15px;\">\r\n              <input type=\"file\" name=\"file1\" id=\"file1\" accept=\"image/*\" class=\"fileInput\"\r\n                (change)=\"onUploadFile($event)\" />\r\n              <label for=\"file1\" class=\"upload-txt\">\r\n                <div style=\"align-self: center;\">\r\n                  <img src=\"../../assets/icons/images.png\" style=\"height: 30%;width: 65%;\">\r\n                </div>\r\n              </label>\r\n            </div><br>\r\n\r\n            <ion-label style=\"text-align: center;\">Gallery</ion-label>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" style=\"text-align: center;\">\r\n            <div>\r\n              <img *ngIf=\"imageData != '' && imageData != null && imageData != undefined\" src=\"{{imageData}}\"\r\n                class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" (click)=\"viewPic('modal')\">\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n        <ion-row>\r\n          <p class=\"error-message\" style=\"float:left;padding-left: 10px;\r\n            padding-right: 10px;\"\r\n            *ngIf=\"form.controls['survey_photo'].hasError('required') && (form.controls['survey_photo'].dirty || form.controls['survey_photo'].touched)\">\r\n            Field is required</p>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n\r\n    \r\n      <div class=\"footer-txt\" style=\"padding-bottom: 34px;padding-top:0px;\">\r\n        <div class=\"sumbit-button\">\r\n          <ion-button expand=\"block\" (click)=\"onSave()\" [disabled]=\"isBtnDisabled\">\r\n            Submit</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    \r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_oosc_neverenrollment-quest_neverenrollment-quest_module_ts-es2015.js.map