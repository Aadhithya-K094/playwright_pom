(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_school-observation_school-observation_module_ts"],{

/***/ 57848:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolObservationPageRoutingModule": function() { return /* binding */ SchoolObservationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _school_observation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-observation.page */ 35365);




const routes = [
    {
        path: '',
        component: _school_observation_page__WEBPACK_IMPORTED_MODULE_0__.SchoolObservationPage
    }
];
let SchoolObservationPageRoutingModule = class SchoolObservationPageRoutingModule {
};
SchoolObservationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SchoolObservationPageRoutingModule);



/***/ }),

/***/ 49096:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolObservationPageModule": function() { return /* binding */ SchoolObservationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _school_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./school-observation-routing.module */ 57848);
/* harmony import */ var _school_observation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-observation.page */ 35365);







let SchoolObservationPageModule = class SchoolObservationPageModule {
};
SchoolObservationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _school_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolObservationPageRoutingModule
        ],
        declarations: [_school_observation_page__WEBPACK_IMPORTED_MODULE_1__.SchoolObservationPage]
    })
], SchoolObservationPageModule);



/***/ }),

/***/ 35365:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.page.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchoolObservationPage": function() { return /* binding */ SchoolObservationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_school_observation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./school-observation.page.html */ 31107);
/* harmony import */ var _school_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./school-observation.page.scss */ 46606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loader/ion-loader.service */ 21645);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _school_observ_modelpopup_school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../school-observ-modelpopup/school-observ-modelpopup.page */ 19584);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);




// import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';












let SchoolObservationPage = class SchoolObservationPage {
    constructor(cdRef, ionicstorage, apiService, ionLoaderService, zone, alertController, router, route, alertService, networkService, toast, userSessionService, modalCtrl, fb, datePipe) {
        this.cdRef = cdRef;
        this.ionicstorage = ionicstorage;
        this.apiService = apiService;
        this.ionLoaderService = ionLoaderService;
        this.zone = zone;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.alertService = alertService;
        this.networkService = networkService;
        this.toast = toast;
        this.userSessionService = userSessionService;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.datePipe = datePipe;
        this.classTypeArray = [];
        this.classes = [];
        this.subjects = [];
        this.mediumOfInstructionsArray = [];
        this.classType = '';
        this.classRadio = "";
        // username: any;
        this.lastupdatedrecord = [];
        this.newmedumofinstruction = [];
        this.saving = false;
        this.nodata = false;
        this.obj = {};
        this.newmenus = [];
        this.beoSchl = false;
        this.user_name = '10300766';
        this.pass_word = '9442@1969';
        this.token_sample = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWlzX3VzZXJuYW1lIjoiMTAzMDA3NjYiLCJlbWlzX3VzZXJfaWQiOiIzMDA3NjYiLCJlbWlzX3VzZXJ0eXBlIjoiMzgiLCJlbWlzX3VzZXJ0eXBlMSI6IjEiLCJzdGF0dXMiOiJBY3RpdmUiLCJ0ZWFjaGVyX25hbWUiOiJNT0hBTiBSIiwidWRpc2VfY29kZSI6IjMzMDQxMDAwMjMzIiwidGVhY2hlcl90eXBlIjoiMTAxIiwic2Nob29sX2tleV9pZCI6IjkwMDU2IiwidGVhY2hlcl9pZCI6IjEwMzAwNzY2IiwidHlwZV90ZWFjaGVyIjoiRElTVFJJQ1QgRURVQ0FUSU9OQUwgT0ZGSUNFUiAoRWxlbWVudGFyeSkiLCJzdWJqZWN0cyI6IkNoZW1pc3RyeSIsInRlbXBfbG9naW4iOiIwIiwiZGlzdHJpY3RfaWQiOiIzNSIsImJsb2NrX2lkIjpudWxsLCJtb2QxIjoiNjAsMTAsNDEsNDIsNDMsNDQiLCJtb2QyIjoiMTEsMjcsNDksNjksMjgsNzgsNTQsMzUsMzYsMzcsMzgsODEsOCw0MiwzMiIsIm5ld3NjaGwiOm51bGwsImlhdCI6MTY3ODA4NzU2OCwiZXhwIjoxNjc4MDg3ODY4fQ.XLT-jkTVL79Q3uf-9tz3LJCoAGyUJ5PKIVPvwAcIrWE';
        this.iterate = 0;
        this.udiseSrchSch = false;
        this.annimeBtn = true;
        this.schoolList = false;
        this.countinueCard = false;
        this.quatocard = false;
        this.notReadyStatusMsg = false;
        this.clusterTabel = true;
        this.inproperData = false;
        this.udisecountinueCard = false;
        this.beoSchlbtn = false;
        this.udiseInput = true;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
        this.studListl3 = [];
        this.ceoSchlbtn = false;
        this.getEetSchools = [];
        this.completedSchool = [];
        this.noVisitTodayMsg = false;
        this.pendDataDisabledBtn = false;
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emis_usertype1 = this.userSessionService.emis_usertype1();
        this.user_id = this.userSessionService.emis_username();
        this.teacher_id = this.userSessionService.teacher_id();
        console.log(this.teacher_id, this.user_id, 'teacher id');
        //  this.emis_username = this.userSessionService.emis_username();
        console.log(this.emis_usertype, 'this.emis_usertype');
        console.log(this.emis_usertype1, 'this.emis_usertype1');
    }
    isJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    // ionViewWillEnter() {
    //   this.classlenth = this.apiService.classes.length;
    //   let tamilobje = this.apiService.mediumOfInstructionsArray.find(tam => tam.medium == 'Tamil');
    //   let englishobje = this.apiService.mediumOfInstructionsArray.find(tam => tam.medium == 'English');
    //   const foundIdxtamil = this.apiService.mediumOfInstructionsArray.findIndex(el => el.medium == 'Tamil');
    //   this.apiService.mediumOfInstructionsArray.splice(foundIdxtamil, 1);
    //   this.apiService.mediumOfInstructionsArray.unshift(tamilobje)
    //   const foundIdxenglish = this.apiService.mediumOfInstructionsArray.findIndex(el => el.medium == 'English');
    //   this.apiService.mediumOfInstructionsArray.splice(foundIdxenglish, 1);
    //   this.apiService.mediumOfInstructionsArray.unshift(englishobje);
    //   const foundIdxnone = this.apiService.mediumOfInstructionsArray.findIndex(el => el.medium == 'None');
    //   this.apiService.mediumOfInstructionsArray.splice(foundIdxnone, 1);
    //   this.mediumOfInstructionsArray = this.apiService.mediumOfInstructionsArray;
    //   this.classes = this.apiService.classes;
    //   this.subjects = this.apiService.subjects
    //   this.classTypeArray = this.apiService.classTypeArray
    //   this.classRadio = this.apiService.classRadio
    //   this.selectedClassChoiceArray = this.apiService.selectclassmultiplechoicearray;
    //   if (this.apiService.classroomDetails.length > 0) {
    //     this.classType = this.apiService.classroomDetails[0].class_type;
    //     if (this.isJson(this.apiService.classroomDetails[0].medium_instruction) == true) {
    //       JSON.parse(this.apiService.classroomDetails[0].medium_instruction).filter(s => {
    //         this.mediumOfInstructionsArray.filter(n => { if (n.medium_id == s) { n.isSelected = true; return n } })
    //       })
    //     }
    //     if (this.isJson(this.apiService.classroomDetails[0].class) == true) {
    //       JSON.parse(this.apiService.classroomDetails[0].class).filter(s => {
    //         this.classes.filter(n => {
    //           if (n.class == s.class) {
    //             n.isSelected = true;
    //             s.section.filter(v => { n.section.filter(t => { if (t.name == v.name) { t.isSelected = true; return t } }) });
    //             return n
    //           }
    //         })
    //       })
    //     }
    //     if (this.isJson(this.apiService.classroomDetails[0].subject) == true) {
    //       JSON.parse(this.apiService.classroomDetails[0].subject).filter(s => {
    //         this.subjects.filter(n => { if (n.id == s) { n.isSelected = true; return n } })
    //       })
    //     }
    //   }
    //   this.cdRef.detectChanges();
    // }
    ngOnInit() {
        // this.schoolListShuffel();
        this.beoSchl = false;
        // this.getSchoolList();
        this.udiseSearchForm = this.fb.group({
            udiseCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
        });
    }
    ionViewDidEnter() {
        this.pendDataDisabledBtn = false;
        this.getIonicData();
        //offline sync
        this.apiService.setdata(this.router.url);
        this.route.params.subscribe(val => {
        });
        if (this.level == 'L1') {
            this.scrnNmbr = 'L1 - 3';
        }
        else if (this.level == 'L2') {
            this.scrnNmbr = 'L2 - 3';
        }
        else if (this.level == 'L3') {
            this.scrnNmbr = 'L3 - 3';
        }
        // this.getSchoolList();
        this.getIonicSchlList();
    }
    offlineAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'You Are Offline Now!!',
                message: `<ul class='offline-popup'>
                  <li>1. Do Not Log Out</li>
                  <li>2. Do Not Clear The RAM</li>
                  <li>3. After Connecting to Internet Please Hit the Save Pending Data Button Below</li>
                </ul>`,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: () => { }
                    },
                ],
            });
            yield alert.present();
        });
    }
    getIonicData() {
        debugger;
        this.ionicstorage.getData('userInfo').then((dataa) => {
            this.username = dataa.username;
            this.schoolid = dataa.school_id;
            this.token = dataa.token;
        }, (error) => console.error(error));
        this.ionicstorage.getData('remaingusersummative').then((dataa) => {
            if (dataa != null) {
                this.remainguserdata = dataa.remainingdata.length;
                this.saveRemainingDataSummative();
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('completedSchool').then((dataa) => {
            this.completedSchool = [];
            if (dataa != undefined || dataa != null) {
                this.completedSchool = dataa;
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('todayDate').then((dataa) => {
            this.todayDate = dataa;
        }, (error) => console.error(error));
    }
    getIonicSchlList() {
        // console.log(this.level, 'this.level')
        // let tdate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
        // this.ionicstorage.getData('getEetSchools').then(
        //   (dataa) => {
        //     this.getEetSchools = dataa
        //     console.log(this.getEetSchools, 'this.getEetSchools')
        //     if((dataa != null || dataa != undefined) && (this.todayDate != null || this.todayDate != undefined) && this.todayDate == tdate){//&& dataa.level != 'L3'
        //       this.getOfflineSchlList(dataa);
        //       console.log(dataa, 'getOfflineSchlList')
        //     }
        //     else{
        //       this.getSchoolList();
        //     }
        //   },
        //   (error) => console.error(error)
        // );
        this.apiService.initializeNetworkEvents();
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            this.getSchoolList();
        }
        else {
            this.ionicstorage.getData('getEetSchools').then((dataa) => {
                if (dataa != null || dataa != undefined) {
                    this.getOfflineSchlList(dataa);
                }
                else {
                    this.getSchoolList();
                }
            }, (error) => console.error(error));
        }
    }
    //get School data for BRTE and BEO from API
    getSchoolList() {
        debugger;
        this.apiService.eet_school_observation().subscribe(dataval => {
            //if observation id not created
            try {
                this.level = dataval.record.level;
                this.udiseflag = dataval.record.udise_flag;
                this.termId = dataval.record.term_id;
                this.end_date = this.datePipe.transform(dataval.record.end_date, 'dd-MM-yyyy');
                let comUdise = this.completedSchool.map(v => v.udise_code);
                console.log(comUdise, 'comUdise');
                if (this.level == 'L1') {
                    dataval.record.schools.forEach(x => {
                        if (comUdise.includes(x.udise_code)) {
                            dataval.record.schools.splice(dataval.record.schools.findIndex(i => i.udise_code === x.udise_code), 1);
                        }
                    });
                }
                if (Object.keys(dataval.record).length > 0 && dataval.status == 200) {
                    if (dataval.record.observation_status != true) {
                        if (dataval.record.observation_status != true && dataval.record.completed != true) {
                            this.annimeBtn = true;
                            this.udiseInput = true;
                            this.schoolList = false;
                            this.quatocard = false;
                            this.beoSchl = false;
                            this.inproperData = false;
                            this.beoSchlbtn = false;
                            this.ceoSchlbtn = false;
                            this.countinueCard = false;
                            this.udisecountinueCard = false;
                            this.schoolOverallData = dataval.record;
                            this.udiseflag = dataval.record.udise_flag;
                            this.schoolData = dataval.record.schools ? dataval.record.schools : "No Schools Found";
                            this.schoolDatalength = dataval.record.schools.length || [];
                            this.obserId = dataval.record.observation_id;
                            this.screen_level = dataval.record.level;
                            this.schoolId = dataval.record.school_id;
                            this.school_name = dataval.record.school_name;
                            this.accYear = dataval.record.academic_year;
                            console.log(this.accYear, 'lalalalalalalalala');
                            this.assesType = dataval.record.assessment_type;
                            this.udise_code = dataval.record.udise_code;
                            var notReadyChk = this.schoolData.filter(s => s.status == 'not_ready');
                            console.log(this.schoolData, notReadyChk, 'mygodddd', notReadyChk.length, this.schoolData.length);
                            if (this.schoolData.length == notReadyChk.length) {
                                this.notReadyStatusMsg = true;
                                this.clusterTabel = false;
                            }
                        }
                        else {
                            this.annimeBtn = false;
                            this.schoolList = false;
                            this.udiseInput = false;
                            this.beoSchl = false;
                            this.countinueCard = false;
                            this.udisecountinueCard = false;
                            this.inproperData = false;
                            this.quatocard = true;
                            this.beoSchlbtn = true;
                            this.ceoSchlbtn = false;
                            this.schoolOverallData = dataval.record;
                            this.udiseflag = dataval.record.udise_flag;
                            this.schoolData = dataval.record.schools ? dataval.record.schools : "No Schools Found";
                            this.obserId = dataval.record.observation_id;
                            this.screen_level = dataval.record.level;
                            this.schoolId = dataval.record.school_id;
                            this.school_name = dataval.record.school_name;
                            this.accYear = dataval.record.academic_year;
                            this.assesType = dataval.record.assessment_type;
                            this.udise_code = dataval.record.udise_code;
                        }
                    }
                    //if observation id created
                    else {
                        this.obserId = dataval.record.observation_id;
                        this.screen_level = dataval.record.level;
                        this.schoolId = dataval.record.school_id;
                        this.school_name = dataval.record.school_name;
                        this.accYear = dataval.record.academic_year;
                        this.assesType = dataval.record.assessment_type;
                        this.udise_code = dataval.record.udise_code;
                        var observationdate = dataval.record.observation_date.split(" ");
                        //json get date
                        var obserDate = observationdate[0];
                        //current get date
                        var todayDate = new Date().toISOString().slice(0, 10);
                        this.schoolOverallData = dataval.record;
                        this.schoolData = dataval.record.schools ? dataval.record.schools : "No Schools Found";
                        console.log("todayDate", todayDate);
                        console.log("obserDate", obserDate);
                        if (dataval.record.observation_id != '' && dataval.record.completed == false && obserDate == todayDate) {
                            this.annimeBtn = false;
                            this.schoolList = false;
                            this.beoSchl = false;
                            this.udiseInput = false;
                            this.beoSchlbtn = true;
                            this.udiseSrchSch = false;
                            this.countinueCard = true;
                            this.udisecountinueCard = true;
                            this.ceoSchlbtn = true;
                        }
                        else {
                            console.log("Your data is inproper , can't be saved");
                            this.inproperData = true;
                            this.checkObservation();
                        }
                    }
                    this.historyTable = dataval.record.history ? dataval.record.history : [{}];
                    let novstTodatDate = this.pipe.transform(new Date(), 'dd MMM, yy');
                    let novisitToday = this.historyTable.find(x => x.date == novstTodatDate);
                    console.log(novstTodatDate, 'novstTodatDate');
                    console.log(novisitToday, 'novisitToday');
                    if (typeof novisitToday != 'undefined' && novisitToday.status == "No Visit") {
                        this.noVisitTodayMsg = true;
                        this.beoSchl = false;
                        this.annimeBtn = false;
                        this.schoolList = false;
                    }
                    this.getEetSchools = dataval.record;
                    let tdate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
                    this.ionicstorage.insertData_Replace('todayDate', tdate);
                    this.ionicstorage.insertData_Replace('getEetSchools', dataval.record);
                    console.log(dataval.record, 'dataval.record');
                }
                else {
                    if (Object.keys(dataval.record).length === 0) {
                        throw "No data found in this school";
                    }
                    else if (dataval.status !== 200) {
                        throw "Server not found...Try again later";
                    }
                    else if (typeof dataval.record == 'undefined' || typeof dataval.record == null) {
                        throw "Server not found...Try again later";
                    }
                    else {
                        throw "Server not found...Try again later";
                    }
                }
            }
            catch (err) {
                // if(typeof err == 'undefined'){
                this.apiService.displayToast(err, true);
                this.errorLog(err, {});
                // }
                console.log(err, 'error');
            }
        }, error => {
            this.errorLog(error === null || error === void 0 ? void 0 : error.message, {});
            this.apiService.displayToast(error === null || error === void 0 ? void 0 : error.message, true);
        });
    }
    //offline get school
    getOfflineSchlList(apiData) {
        this.level = apiData.level;
        this.udiseflag = apiData.udise_flag;
        this.termId = apiData.term_id;
        if (Object.keys(apiData).length > 0) {
            if (apiData.observation_status != true) {
                if (apiData.observation_status != true && apiData.completed != true) {
                    this.annimeBtn = true;
                    this.udiseInput = true;
                    this.schoolList = false;
                    this.quatocard = false;
                    this.beoSchl = false;
                    this.inproperData = false;
                    this.beoSchlbtn = false;
                    this.ceoSchlbtn = false;
                    this.countinueCard = false;
                    this.udisecountinueCard = false;
                    this.schoolOverallData = apiData;
                    this.udiseflag = apiData.udise_flag;
                    this.schoolData = apiData.schools ? apiData.schools : "No Schools Found";
                    this.schoolDatalength = apiData.schools.length || [];
                    this.obserId = apiData.observation_id;
                    this.screen_level = apiData.level;
                    this.schoolId = apiData.school_id;
                    this.school_name = apiData.school_name;
                    this.accYear = apiData.academic_year;
                    console.log(this.accYear, 'lalalalalalalalala');
                    this.assesType = apiData.assessment_type;
                    this.udise_code = apiData.udise_code;
                    var notReadyChk = this.schoolData.filter(s => s.status == 'not_ready');
                    console.log(this.schoolData, notReadyChk, 'mygodddd', notReadyChk.length, this.schoolData.length);
                    if (this.schoolData.length == notReadyChk.length) {
                        this.notReadyStatusMsg = true;
                        this.clusterTabel = false;
                    }
                }
                else {
                    this.annimeBtn = false;
                    this.schoolList = false;
                    this.udiseInput = false;
                    this.beoSchl = false;
                    this.countinueCard = false;
                    this.udisecountinueCard = false;
                    this.inproperData = false;
                    this.quatocard = true;
                    this.beoSchlbtn = true;
                    this.ceoSchlbtn = false;
                    this.schoolOverallData = apiData;
                    this.udiseflag = apiData.udise_flag;
                    this.schoolData = apiData.schools ? apiData.schools : "No Schools Found";
                    this.obserId = apiData.observation_id;
                    this.screen_level = apiData.level;
                    this.schoolId = apiData.school_id;
                    this.school_name = apiData.school_name;
                    this.accYear = apiData.academic_year;
                    console.log(this.accYear, 'lalalalalalalalala');
                    this.assesType = apiData.assessment_type;
                    this.udise_code = apiData.udise_code;
                }
            }
            //if observation id created
            else {
                this.obserId = apiData.observation_id;
                this.screen_level = apiData.level;
                this.schoolId = apiData.school_id;
                this.school_name = apiData.school_name;
                this.accYear = apiData.academic_year;
                console.log(this.accYear, 'lalalalalalalalala');
                this.assesType = apiData.assessment_type;
                this.udise_code = apiData.udise_code;
                var observationdate = apiData.observation_date.split(" ");
                //json get date
                var obserDate = observationdate[0];
                //current get date
                var todayDate = new Date().toISOString().slice(0, 10);
                this.schoolOverallData = apiData;
                this.schoolData = apiData.schools ? apiData.schools : "No Schools Found";
                if (apiData.observation_id != '' && apiData.completed == false && obserDate == todayDate) {
                    this.annimeBtn = false;
                    this.schoolList = false;
                    this.beoSchl = false;
                    this.udiseInput = false;
                    this.beoSchlbtn = true;
                    this.udiseSrchSch = false;
                    this.countinueCard = true;
                    this.udisecountinueCard = true;
                    this.ceoSchlbtn = true;
                    console.log('countinue school');
                }
                else {
                    console.log("Your data is inproper , can't be saved");
                    this.inproperData = true;
                    this.checkObservation();
                }
            }
            this.historyTable = apiData.history ? apiData.history : [{}];
        }
    }
    //brte click function school list card
    getschoolCard() {
        this.annimeBtn = false;
        this.schoolList = true;
        this.iterate = 0;
        this.brteSchoolList();
    }
    //brte school list display function
    brteSchoolList() {
        if (this.iterate != this.schoolData.length) {
            for (let i = this.iterate; i < this.iterate + 1; i++) {
                this.currentSchList = this.schoolData[i];
            }
        }
        else {
            this.iterate = -1;
            setTimeout(() => {
                this.schoollistoverAlert(0);
            }, 50);
        }
        this.iterate++;
    }
    reasonForRejectSchool(reason, schID, Udise) {
        console.log(reason, 'aiyoooo');
        this.reasonData = [{
                teacher_id: this.user_id,
                school_id: schID,
                udise_code: Udise,
                schlskippedReason: reason,
                skippedReason: '',
            }];
        this.apiService.saveSummativeAssessmentDetails(this.reasonData, this.token).subscribe(data => {
            try {
                if (data.status == 200 && data.dataStatus == true) {
                    this.commonAlert('Success', 'Assessment successfully Saved.');
                }
                else {
                    // this.alertService.error(data.msg)
                    throw 'No data found in this student list';
                }
            }
            catch (err) {
                this.toast.presentToast(err, 'error');
            }
        });
    }
    //beo school list display function
    beoSchoolList(id) {
        // if(this.countinueCard != true && this.inproperData !=true) {
        this.beoSchl = true;
        this.clusterIndexID = id;
        this.beoSchlbtn = true;
        let comUdise = this.completedSchool.map(v => v.udise_code);
        this.schoolData[id].pending.forEach(x => {
            if (comUdise.includes(x.udise_code)) {
                this.schoolData[id].pending.splice(this.schoolData[id].pending.findIndex(i => i.udise_code === x.udise_code), 1);
            }
        });
        if (this.iterate != this.schoolData[id].pending.length) {
            for (let i = this.iterate; i < this.iterate + 1; i++) {
                this.currentSchList = this.schoolData[id].pending[i];
            }
            console.log(this.currentSchList, 'cluster school data');
        }
        else {
            this.iterate = -1;
            setTimeout(() => {
                this.schoollistoverAlert(id);
            }, 50);
        }
        this.iterate++;
        // }
    }
    //deo school list display function
    deoSchoolList(id) {
        this.ceoSchlbtn = true;
        this.beoSchl = true;
        this.clusterIndexID = id;
        console.log(this.schoolData[id].pending, 'this.schoolData[id].pending');
        let comUdise = this.completedSchool.map(v => v.udise_code);
        this.schoolData[id].pending.forEach(x => {
            if (comUdise.includes(x.udise_code)) {
                this.schoolData[id].pending.splice(this.schoolData[id].pending.findIndex(i => i.udise_code === x.udise_code), 1);
            }
        });
        if (this.schoolData[id].pending.length) {
            this.ionicstorage.insertData_Replace('clusterId', this.schoolData[id].id);
            this.studListl3 = this.schoolData[id].pending;
            console.log('ccccccccccccccc', this.studListl3);
            for (let i = 0; i < this.studListl3.length; i++) {
                this.currentSchList = this.schoolData[id].pending[i];
            }
            console.log(this.currentSchList, 'L333333333333333 cluster school data');
        }
        else {
            setTimeout(() => {
                this.schoollistoverAlert(id);
            }, 50);
        }
    }
    openModel(id) {
        this.currentSchListModel = this.schoolData[id];
        console.log(this.currentSchListModel, 'model cluster school data');
        this.schoolAlert();
    }
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _school_observ_modelpopup_school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_8__.SchoolObservModelpopupPage,
                componentProps: { schoolClassData: this.currentSchListModel },
                cssClass: 'view-image-modal'
            });
            yield modal.present();
        });
    }
    onSelectedClassRadio(item) {
        this.classRadio = item;
        this.apiService.onSelectedClassRadio(item);
    }
    onClassTypeSelectionHandler(item) {
        this.apiService.onClassTypeSelection(item.value);
        this.classType = item.value;
        if (this.classType == 'multigrade') {
            if (this.classes.length > 0) {
                this.classes.filter((el) => {
                    el.section.map(s => s.isSelected = false);
                    return el;
                });
            }
        }
    }
    onMediumOfInstructionSelection(item) {
        this.apiService.onMediumOfInstructionSelection(item);
    }
    onClassSelection(item) {
        this.apiService.onClassSelection(item);
    }
    checkSection(value) {
        let getvalues = value.map(t => { if (t.isSelected == true) {
            return t.name;
        } });
        return getvalues;
    }
    onClassSelectionformongradeComp(item) {
        this.selectedClass = item;
        this.apiService.onClassSelectionformongrade(item);
    }
    onClassSelectionChoices(item, choice) {
        this.apiService.selectedClassChoice(item, choice.value);
    }
    onSubjectSelectionHandler(item) {
        this.apiService.onSubjectSelection(item);
    }
    onSaveBtnPress() {
        let classBoolError = this.classes.find((el) => el.isSelected == true);
        let subjects = this.subjects.find((el) => el.isSelected == true);
        let mediumOfInstructionsArrayError = this.mediumOfInstructionsArray.find((el) => el.isSelected == true);
        if (!classBoolError && this.classType !== 'monograde') {
            this.apiService.displayToast('Please select class !', true);
        }
        else if (!subjects) {
            this.apiService.displayToast('Please select subjects!', true);
        }
        else if (!mediumOfInstructionsArrayError) {
            this.apiService.displayToast('Please select medium of instructions!', true);
        }
        else if (this.classType === 'Monograde' && this.classRadio === "") {
            this.apiService.displayToast('Please select c lass!', true);
        }
        else {
            let username = null;
            this.ionicstorage.getData('userInfo').then((dataa) => {
                username = dataa.username;
                let classtype_id = this.classType;
                let subject_id = [];
                let medium_instruction_id = [];
                let class_id = [];
                this.subjects.forEach((el) => {
                    if (el.isSelected == true) {
                        subject_id.push(el.id);
                    }
                });
                this.mediumOfInstructionsArray.forEach((el) => {
                    if (el.isSelected == true) {
                        medium_instruction_id.push(el.medium_id);
                    }
                });
                this.classes.forEach((el) => {
                    if (el.isSelected == true) {
                        let obj = { id: el.id, class: el.class, section: el.section.filter(n => n.isSelected == true) };
                        class_id.push(obj);
                    }
                });
                let data = {
                    username: username, classtype_id: classtype_id, medium_instruction_id: JSON.stringify(medium_instruction_id), subject_id: JSON.stringify(subject_id), class_id: JSON.stringify(class_id)
                };
                this.ionLoaderService.simpleLoader();
                this.apiService.saveClassRoomDetails(data, dataa.token)
                    .subscribe((response) => {
                    if (response.status == 200 && response.dataStatus == true) {
                        this.zone.run(() => {
                            this.ionLoaderService.dismissLoader();
                            this.commonAlert('Success', 'Classroom Details saved successfully!!');
                        });
                    }
                    else {
                        this.alertService.error(response.msg);
                    }
                });
            }, (error) => console.error(error));
        }
    }
    navigateModule(schId, assYear, assType, udiseCode, schlName) {
        debugger;
        console.log(schId + '--' + assYear + '--' + assType + '--' + udiseCode);
        var data = {
            user_id: this.user_id,
            school_id: schId,
            udise_code: udiseCode,
            screen_level: this.screen_level,
            term_id: this.termId
        };
        if (this.schoolOverallData.observation_id == '') {
            this.apiService.initializeNetworkEvents();
            if (this.networkService.getCurrentNetworkStatus() == 0) {
                this.apiService.createObservation(data).subscribe(dataval => {
                    try {
                        if (dataval && dataval.status == 200) {
                            console.log(dataval, 'createObservation id');
                            this.observation_id = dataval.record;
                            // if(this.level == 'L3'){
                            let dateTime = this.pipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
                            // this.getEetSchools['observation_status'] = true
                            // this.getEetSchools['observation_id'] = dataval.record
                            // this.getEetSchools['observation_date'] = dateTime,
                            // this.getEetSchools['completed'] = false
                            // this.getEetSchools['school_id'] = schId
                            // this.getEetSchools['udise_code'] = udiseCode
                            // this.getEetSchools['school_name'] = schlName
                            // this.ionicstorage.insertData_Replace('getEetSchools', this.getEetSchools)
                            // }
                            if (this.level == 'L2' && this.udiseSrchSch == true) {
                                this.getSchoolList();
                            }
                        }
                        else {
                            if (!dataval) {
                                throw "No data found";
                            }
                            else if (dataval.status !== 200) {
                                throw "Server not found...Try again later";
                            }
                        }
                    }
                    catch (err) {
                        this.apiService.displayToast(err, true);
                        this.errorLog(err, data);
                    }
                    this.obser_id = this.observation_id ? this.observation_id : this.schoolOverallData.observation_id;
                    this.router.navigate(['tabs/summative-class-selection'], { queryParams: { schId: schId, assYear: assYear, assType: assType, udiseCode: udiseCode, observation_id: this.obser_id, level: this.level, udiseflag: this.udiseflag } });
                });
            }
            else {
                this.alertService.warning('Please Turn On Your Mobile Data');
            }
        }
        else {
            this.obser_id = this.observation_id ? this.observation_id : this.schoolOverallData.observation_id;
            this.router.navigate(['tabs/summative-class-selection'], { queryParams: { schId: schId, assYear: assYear, assType: assType, udiseCode: udiseCode, observation_id: this.obser_id, level: this.level, udiseflag: this.udiseflag } });
        }
    }
    errorLog(err, payload) {
        debugger;
        let record = {
            "observation_id": "",
            "school_id": "",
            "student_id": "",
            "oberved_date": "",
            "oberved_by": this.username,
            "page": this.scrnNmbr,
            "error": err,
            "payload": JSON.stringify(payload),
            "result": ""
        };
        console.log(record, 'recordrecord');
        this.apiService.eet_error_log(record).subscribe(data => {
            try {
                if (data.status == 200) {
                    throw "Data Saved Successfully";
                }
                else {
                    throw "Server not found";
                }
            }
            catch (err) {
                // this.apiService.displayToast(err, false);
                console.log('Error log api ' + err);
            }
        });
    }
    onSubmit() {
        this.udiseSrchSch = true;
        if (this.udiseSearchForm.valid) {
            console.log(this.udiseSearchForm.value.udiseCode);
            this.apiService.getUdiseSchool(this.udiseSearchForm.value.udiseCode).subscribe((response) => {
                try {
                    if (response.status == 200 && response.dataStatus == true) {
                        // console.log(response.result[0])
                        // this.udiseSrchSch = response.result[0]
                        this.extUdiseCode = response.result[0].udise_code;
                        this.extAccYear = response.result[0].academic_year;
                        this.extAssType = response.result[0].assessment_type;
                        this.extSchoolId = response.result[0].school_id;
                        this.extSchoolName = response.result[0].school_name;
                        // console.log(this.udiseSrchSch,'1234567899')
                        // this.udiseSrchSch['academic_year'] = 1
                        // this.udiseSrchSch['assessment_type'] = 1
                    }
                    else {
                        throw 'Enter Valid UDISE Code';
                    }
                }
                catch (error) {
                    this.alertService.error(error);
                }
            });
        }
    }
    SubmitAlert(schId, assYear, assType, udiseCode, schlName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log(schId, assYear, assType, udiseCode, 'hcdhsjhdjshnjhdjshn');
            const alert = yield this.alertController.create({
                header: 'Will you be able to visit this school today?',
                cssClass: 'custom-alert',
                buttons: [
                    {
                        text: 'No',
                        cssClass: 'alert-button-cancel',
                        handler: () => {
                            this.rejectAlert(this.clusterIndexID, schId, assYear, assType, udiseCode);
                        }
                    },
                    {
                        text: 'Yes',
                        cssClass: 'alert-button-confirm',
                        handler: () => {
                            this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: [] });
                            this.navigateModule(schId, assYear, assType, udiseCode, schlName);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    l3StudentList(schId, assYear, assType, udiseCode, schlName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            console.log(schId, assYear, assType, udiseCode, 'hcdhsjhdjshnjhdjshn');
            const alert = yield this.alertController.create({
                header: 'Will you be able to visit this school today?',
                cssClass: 'custom-alert',
                buttons: [
                    {
                        text: 'No',
                        cssClass: 'alert-button-cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Yes',
                        cssClass: 'alert-button-confirm',
                        handler: () => {
                            this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: [] });
                            this.navigateModule(schId, assYear, assType, udiseCode, schlName);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    rejectAlert(clusterIndexID, schId, assYear, assType, udiseCode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reason For Reject',
                cssClass: 'custom-alert',
                inputs: [
                    {
                        label: 'On Deputation duty',
                        type: 'radio',
                        value: 'deputation_duty',
                        name: "reasonData",
                    },
                    {
                        label: 'School holiday',
                        type: 'radio',
                        value: 'holiday',
                        name: "reasonData",
                    },
                    {
                        label: 'School is not part of my cluster',
                        type: 'radio',
                        value: 'other_cluster',
                        name: "reasonData",
                    },
                    {
                        label: 'All students left the school that day',
                        type: 'radio',
                        value: 'student_left',
                        name: "reasonData",
                    },
                    {
                        label: 'Today Leave',
                        type: 'radio',
                        value: 'today_leave',
                        name: "reasonData",
                    }
                    // {
                    //   label: 'Reason is not listed',
                    //   type: 'radio',
                    //   value: 'Other',
                    //   name: 'reasonData',
                    //   handler: (alertData) => {
                    //     // this.otherReasonAlert();
                    //     alert.dismiss();
                    //   }
                    // }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        cssClass: 'alert-button-cancel',
                    },
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            if (alertData != undefined) {
                                if (this.level == 'L1') {
                                    this.brteSchoolList();
                                    this.reasonForRejectSchool(alertData, schId, udiseCode);
                                }
                                else if (this.level == 'L2') {
                                    this.beoSchoolList(clusterIndexID);
                                    this.reasonForRejectSchool(alertData, schId, udiseCode);
                                }
                            }
                            else {
                                this.alertService.error('Please select any reason');
                            }
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    // async otherReasonAlert() {
    //   const alert = await this.alertController.create({
    //     header: 'Reason For Reject',
    //     cssClass: 'custom-alert',
    //     inputs: [
    //       {
    //         placeholder: 'Enter Other Reasons',
    //         type: 'text',
    //         name: 'reasonData',
    //       }
    //     ],
    //     buttons: [
    //       {
    //         text: 'Cancel',
    //         cssClass: 'alert-button-cancel',
    //       },
    //       {
    //         text: 'Ok',
    //         cssClass: 'alert-button-confirm',
    //         handler: (alertData) => {
    //           console.log(alertData.reasonData)
    //           if(this.emis_usertype == 39 && this.emis_usertype1 == 1){
    //             this.brteSchoolList();
    //           }
    //           else if(this.emis_usertype == 6 && this.emis_usertype1 == 1){
    //             this.beoSchoolList(id);
    //           }
    //         }
    //       },
    //     ],
    //   });
    //   await alert.present();
    // }
    schoollistoverAlert(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'No other school is available. You have to choose one of the schools from all the schools displayed.',
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            if (this.level == 'L1') {
                                this.brteSchoolList();
                            }
                            else if (this.level == 'L2') {
                                this.beoSchoolList(id);
                            }
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    checkObservation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'Your previous data is not saved properly, please proceed again.',
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            this.updateObservation();
                            this.ionViewDidEnter();
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    updateObservation() {
        debugger;
        var data = {
            observation_id: this.obserId,
            status: "cancelled"
        };
        this.apiService.eet_updateObservation(data).subscribe(dataval => {
            console.log(dataval, 'updateObservation id');
        });
    }
    //offline sync function
    saveRemainingDataSummative() {
        this.pendDataDisabledBtn = true;
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            this.ionicstorage.getData('remaingusersummative').then((dataa) => {
                console.log(dataa, "123");
                let v = dataa.remainingdata.length;
                if (v > 0) {
                    this.saving = true;
                    this.nodata = false;
                    let remaingusersummativecount = 0;
                    // dataa.remainingdata.filter(val => {
                    console.log(dataa.remainingdata[0], "dataa.remainingdata[0]");
                    dataa.remainingdata.forEach(val => {
                        val.observation_id = this.observation_id ? this.observation_id : this.schoolOverallData.observation_id;
                    });
                    this.apiService.saveSummativeAssessmentDetails(dataa.remainingdata, this.token).subscribe(data => {
                        console.log(data, 'api');
                        if (data.status == 200 && data.dataStatus == true) {
                            this.commonAlert('Success', 'Assessment successfully Saved!!');
                            remaingusersummativecount = remaingusersummativecount + 1;
                            // if (remaingusersummativecount == v) {
                            this.saving = false;
                            this.ionicstorage.insertData_Replace('remaingusersummative', { remainingdata: [] });
                            // this.ionicstorage.insertData_Replace('getEetSchools', '')
                            this.remainguserdata = 0;
                            // }
                            this.getSchoolList();
                            this.pendDataDisabledBtn = false;
                        }
                        else {
                            this.pendDataDisabledBtn = false;
                            this.alertService.error(data.msg);
                        }
                    });
                    // })
                }
                else {
                    this.nodata = true;
                    this.pendDataDisabledBtn = false;
                }
            });
        }
        else {
            this.pendDataDisabledBtn = false;
            this.alertService.error("Offline!!");
        }
    }
    saveRemainingData() {
        this.pendDataDisabledBtn = true;
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            this.ionicstorage.getData('remainguser').then((dataa) => {
                console.log(dataa.remainingdata, "dataa.remainingdata", dataa);
                let v = dataa.remainingdata.length;
                if (v > 0) {
                    this.saving = true;
                    this.nodata = false;
                    let remaingusercount = 0;
                    dataa.remainingdata.filter(val => {
                        this.apiService.saveBaselineAssessmentDetails(val, this.token).subscribe(data => {
                            if (data.status == 200 && data.dataStatus == true) {
                                this.commonAlert('Success', 'Test successfully Saved!!');
                                remaingusercount = remaingusercount + 1;
                                if (remaingusercount == v) {
                                    this.saving = false;
                                    this.ionicstorage.insertData_Replace('remainguser', { remainingdata: [] });
                                    this.remainguserdata = 0;
                                }
                                this.getSchoolList();
                                this.pendDataDisabledBtn = false;
                            }
                            else {
                                this.pendDataDisabledBtn = false;
                                this.alertService.error(data.msg);
                            }
                        });
                    });
                }
                else {
                    this.nodata = true;
                }
            });
        }
        else {
            this.pendDataDisabledBtn = false;
            this.alertService.error("Offline!!");
        }
    }
    commonAlert(SubHeader, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: SubHeader,
                message: msg,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: () => { }
                    },
                ],
            });
            yield alert.present();
        });
    }
    reportForl3() {
        this.router.navigate(['tabs/l3-ee-report']);
    }
};
SchoolObservationPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_3__.IonLoaderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_9__.ToastService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe }
];
SchoolObservationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-school-observation',
        template: _raw_loader_school_observation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_school_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SchoolObservationPage);



/***/ }),

/***/ 46606:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.page.scss ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  padding-bottom: 5px;\n}\n\n.top-margin {\n  margin-top: 20px;\n}\n\n.fs-12 {\n  margin-top: 2px;\n}\n\nion-back-button {\n  color: #fff;\n}\n\nion-card {\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n\n.tlt {\n  color: #000;\n  padding: 0px 13px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\nion-content {\n  --background: var(--ion-color-secondary) ;\n}\n\n.srcl-tble {\n  height: 450px;\n  overflow-y: auto;\n}\n\n.srcl-tble table tr:first-child {\n  position: sticky;\n  top: 0px;\n  z-index: 1;\n}\n\n.anim-btn {\n  background: #9162b0;\n  color: #fff;\n  padding: 12px 50px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.anim-btn .rit-icon {\n  position: absolute;\n  top: 24%;\n  right: 20px;\n  font-size: 25px;\n  animation: sclbtn-anim 2s infinite;\n}\n\n.anim-btn .lft-icon {\n  position: absolute;\n  top: 24%;\n  left: 20px;\n  font-size: 25px;\n  animation: sclbtn-anim1 2s infinite;\n}\n\n@keyframes sclbtn-anim {\n  0% {\n    right: 20px;\n  }\n  25% {\n    right: 3px;\n  }\n  50% {\n    right: 20px;\n  }\n  75% {\n    right: 3px;\n  }\n  100% {\n    right: 20px;\n  }\n}\n\n@keyframes sclbtn-anim1 {\n  0% {\n    left: 20px;\n  }\n  25% {\n    left: 3px;\n  }\n  50% {\n    left: 20px;\n  }\n  75% {\n    left: 3px;\n  }\n  100% {\n    left: 20px;\n  }\n}\n\n.img-schools {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0px auto;\n}\n\n.img-schools progress {\n  height: 10px;\n}\n\n.img-schools img {\n  border-radius: 50%;\n  width: 35px;\n  -o-object-fit: none;\n     object-fit: none;\n  background: #fff;\n  margin-left: 5px;\n  padding-bottom: 2px;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 0%);\n}\n\ntable .grey {\n  color: #888;\n}\n\ntable .success {\n  color: #28ba62;\n}\n\ntable .blue {\n  color: #8b67b3;\n}\n\nth {\n  background: #f7ecff;\n  font-size: 15px;\n  padding: 10px;\n  color: #333;\n}\n\ntd {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 10px;\n}\n\nion-badge {\n  border-radius: 15px;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 5px 10px 4px;\n}\n\n.search-bx {\n  text-align: center;\n  padding: 5px 10px;\n}\n\n.search-bx ion-button {\n  margin-bottom: 10px;\n}\n\n.anim-bx {\n  animation: schoolbx-anim 0.8s;\n}\n\n@keyframes schoolbx-anim {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1.1);\n  }\n  50% {\n    transform: scale(1);\n  }\n  75% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.css-selector {\n  background: linear-gradient(89deg, #2e6624, #9df98d);\n  background-size: 400% 400%;\n  animation: AnimationName 30s ease infinite;\n}\n\n@keyframes AnimationName {\n  0% {\n    background-position: 0% 51%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 51%;\n  }\n}\n\nion-modal {\n  --height: 50%;\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-modal::part(backdrop) {\n  background: #d1d5db;\n  opacity: 1;\n}\n\nion-modal ion-toolbar {\n  --background: rgb(14 116 144);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1vYnNlcnZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLDRDQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0kseUNBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUhZO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUtoQjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQUlSOztBQUZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQUlSOztBQURBO0VBQ0k7SUFDSSxXQUFBO0VBSU47RUFGRTtJQUNJLFVBQUE7RUFJTjtFQUZFO0lBQ0ksV0FBQTtFQUlOO0VBRkU7SUFDSSxVQUFBO0VBSU47RUFGRTtJQUNJLFdBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0k7SUFDSSxVQUFBO0VBSU47RUFGRTtJQUNJLFNBQUE7RUFJTjtFQUZFO0lBQ0ksVUFBQTtFQUlOO0VBRkU7SUFDSSxTQUFBO0VBSU47RUFGRTtJQUNJLFVBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUhJO0VBQ0ksWUFBQTtBQUtSOztBQUhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUtSOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUpJO0VBQ0ksV0FBQTtBQU1SOztBQUpJO0VBQ0ksY0FBQTtBQU1SOztBQUpJO0VBQ0ksY0FBQTtBQU1SOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFTSjs7QUFSSTtFQUNJLG1CQUFBO0FBVVI7O0FBUEE7RUFDSSw2QkFBQTtBQVVKOztBQVJBO0VBQ0k7SUFBSSxtQkFBQTtFQVlOO0VBWEU7SUFBSyxxQkFBQTtFQWNQO0VBYkU7SUFBSyxtQkFBQTtFQWdCUDtFQWZFO0lBQUssc0JBQUE7RUFrQlA7RUFqQkU7SUFBTSxtQkFBQTtFQW9CUjtBQUNGOztBQWpCRTtFQUNFLG9EQUFBO0VBQ0EsMEJBQUE7RUFFQSwwQ0FBQTtBQWtCSjs7QUFmQTtFQUNJO0lBQUcsMkJBQUE7RUFtQkw7RUFsQkU7SUFBSSw2QkFBQTtFQXFCTjtFQXBCRTtJQUFLLDJCQUFBO0VBdUJQO0FBQ0Y7O0FBckJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0ZBQUE7QUF1Qko7O0FBcEJFO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FBdUJKOztBQXBCRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtBQXVCSiIsImZpbGUiOiJzY2hvb2wtb2JzZXJ2YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRvcC1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZnMtMTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0gIFxyXG5pb24tY2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLnRsdHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMHB4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxyXG59XHJcbi5zcmNsLXRibGV7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxle1xyXG4gICAgICAgIHRye1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYW5pbS1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTE2MmIwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLnJpdC1pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI0JTtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzY2xidG4tYW5pbSAycyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIC5sZnQtaWNvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyNCU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzY2xidG4tYW5pbTEgMnMgaW5maW5pdGU7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBzY2xidG4tYW5pbSB7XHJcbiAgICAwJXtcclxuICAgICAgICByaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIDI1JXtcclxuICAgICAgICByaWdodDogM3B4O1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgNzUle1xyXG4gICAgICAgIHJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NsYnRuLWFuaW0xIHtcclxuICAgIDAle1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAyNSV7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICA3NSV7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5pbWctc2Nob29sc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHByb2dyZXNze1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIH1cclxufVxyXG50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAwJSk7XHJcbiAgICAuZ3JleXtcclxuICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgIH1cclxuICAgIC5zdWNjZXNze1xyXG4gICAgICAgIGNvbG9yOiAjMjhiYTYyO1xyXG4gICAgfVxyXG4gICAgLmJsdWV7XHJcbiAgICAgICAgY29sb3I6ICM4YjY3YjM7XHJcbiAgICB9XHJcbn1cclxudGh7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdlY2ZmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbnRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbmlvbi1iYWRnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDRweDtcclxufVxyXG4uc2VhcmNoLWJ4e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLmFuaW0tYnh7XHJcbiAgICBhbmltYXRpb246IHNjaG9vbGJ4LWFuaW0gMC44cztcclxufVxyXG5Aa2V5ZnJhbWVzIHNjaG9vbGJ4LWFuaW0ge1xyXG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7fVxyXG4gICAgMjUlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMSk7fVxyXG4gICAgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICAgIDc1JSB7dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTt9XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO31cclxuICB9XHJcblxyXG5cclxuICAuY3NzLXNlbGVjdG9yIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4OWRlZywgIzJlNjYyNCwgIzlkZjk4ZCk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcclxuXHJcbiAgICBhbmltYXRpb246IEFuaW1hdGlvbk5hbWUgMzBzIGVhc2UgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgQW5pbWF0aW9uTmFtZSB7XHJcbiAgICAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUxJX1cclxuICAgIDUwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjEwMCUgNTAlfVxyXG4gICAgMTAwJXtiYWNrZ3JvdW5kLXBvc2l0aW9uOjAlIDUxJX1cclxufVxyXG5cclxuaW9uLW1vZGFsIHtcclxuICAgIC0taGVpZ2h0OiA1MCU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1vZGFsOjpwYXJ0KGJhY2tkcm9wKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOSwgMjEzLCAyMTkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1vZGFsIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDE0IDExNiAxNDQpO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 31107:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/school-observation/school-observation.page.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"header-style\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/menu\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Palli Parvai</ion-title>\r\n    <!-- <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 3</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && emis_usertype1 == '1'\">L2 - 3</span> -->\r\n    <span class=\"header-span\">{{scrnNmbr}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-col size=\"12\" class=\"ion-text-center\" *ngIf=\"remainguserdata > 0\">\r\n    <div *ngIf=\"saving\" style=\"padding:5px;padding: 10px;\r\n    background: #c5c1c1;\">Saving...</div>\r\n    <div>\r\n      <ion-button *ngIf=\"remainguserdata > 0\" style=\"--background: #c34242;width: 90%;\r\n        margin: 20px\" (click)=\"saveRemainingData();saveRemainingDataSummative();\" [disabled]=\"pendDataDisabledBtn\">Save Pending Data</ion-button>\r\n    </div>\r\n  </ion-col>\r\n  <ion-row class=\"top-margin\">\r\n    <ion-col>\r\n      <div style=\"text-align: end; padding-right: 20px; display: flex;justify-content: end;\" *ngIf=\"this.level == 'L3'\">\r\n        <ion-button size=\"small\"\r\n        style=\"color:#fff;text-transform:capitalize;\"\r\n        (click)=\"reportForl3()\"><b>Report</b></ion-button>\r\n      </div>\r\n      <ion-text color=\"dark\" class=\"ion-text-center position-relative\">\r\n        <h2 class=\"color-dgrey mt-0\">\r\n          <b><span>Greetings!</span>!</b>\r\n        </h2>\r\n        <p class=\"color-dgrey fs-12\">\r\n          <b>Observation completed against target</b>\r\n        </p>\r\n        <div class=\"img-schools\">\r\n          <progress style=\"width: 100%;color:#333;\" max=\"{{schoolOverallData?.school_target}}\"\r\n            value=\"{{+schoolOverallData?.mono_completed + +schoolOverallData?.multi_completed}}\"></progress>\r\n          <img src=\"assets/icons/icons-schools.png\" alt=\"\">\r\n        </div>\r\n        <p class=\"fs-12 width-70\">\r\n          <span>Number of Schools Visited</span>:\r\n          <b>{{+schoolOverallData?.mono_completed + +schoolOverallData?.multi_completed}} /\r\n            {{schoolOverallData?.school_target ? schoolOverallData?.school_target : '1'}}</b>\r\n\r\n\r\n            <!-- <b *ngIf=\"this.level == 'L3'\">{{+schoolOverallData?.mono_completed + +schoolOverallData?.multi_completed}} / 24</b> -->\r\n        </p>\r\n      </ion-text>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-card class=\"card-content\" *ngIf=\"noVisitTodayMsg\">\r\n    <span class=\"css-selector\">\r\n      <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n        <ion-label>\r\n          You do not have any schools to visit today. Please login tomorrow to check</ion-label>\r\n      </div>\r\n    </span>\r\n  </ion-card>\r\n\r\n  <ng-container *ngIf=\"(this.level == 'L2' || this.level == 'L1') && this.udiseflag == '1'\"> <!--*ngIf=\"emis_usertype == '50' && (emis_usertype1 == '1' || emis_usertype1 == '2')\"-->\r\n    <ion-card *ngIf=\"udiseInput\" class=\"search-bx\">\r\n      <form [formGroup]=\"udiseSearchForm\">\r\n        <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n          onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n        <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n      </form>\r\n    </ion-card>\r\n    <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n    <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n      <span>\r\n        <ion-list>\r\n          <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode, extSchoolName)\">\r\n            <div>\r\n              <ion-label>{{extSchoolName}}</ion-label>\r\n              <ion-note>{{extUdiseCode}}</ion-note>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--countinue school card-->\r\n    <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n      <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n        <ion-list>\r\n          <ion-item button detail=\"true\"\r\n            (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n            <div>\r\n              <ion-label>Countinue Your Observation</ion-label>\r\n              <ion-note>{{this.school_name}}</ion-note>\r\n            </div>\r\n          </ion-item>\r\n        </ion-list>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Today's quato-->\r\n    <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n  </ng-container>\r\n  <!--======================================================================================================================================-->\r\n  <!--======================================================================================================================================-->\r\n\r\n\r\n  <!--======================================================================================================================================-->\r\n  <!--------------------------------------------------------BRTE usertype interface----------------------------------------------------------->\r\n  <!--======================================================================================================================================-->\r\n\r\n  <ng-container *ngIf=\"(this.level == 'L1' && this.udiseflag == '0')\">\r\n    <!--Note info-->\r\n    <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\">\r\n      <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n      <ion-text color=\"dark\">Each school visit will take nearly one full day to complete. Please plan to visit one\r\n        school a day as per the Status Table below on Or before <b>{{this.schoolOverallData?.end_date}}</b></ion-text>\r\n    </ion-card>\r\n\r\n    <!--=================================================if udise flag not equal to 1==================================================-->\r\n    <div> <!--*ngIf=\"udiseflag != '1'\"-->\r\n      <div style=\"text-align:center;\">\r\n        <button class=\"anim-btn\" *ngIf=\"annimeBtn\" (click)=\"getschoolCard()\"><ion-icon name=\"arrow-forward-outline\"\r\n            class=\"lft-icon\"></ion-icon> Click To View Schools <ion-icon name=\"arrow-back-outline\"\r\n            class=\"rit-icon\"></ion-icon></button>\r\n      </div>\r\n\r\n      <!--school info card-->\r\n      <div *ngIf=\"schoolList\">\r\n        <ion-title class=\"tlt\">School to visit today</ion-title>\r\n        <ion-card class=\"card-content anim-bx\">\r\n          <span><!--*ngFor=\"let data of schoollist\"-->\r\n            <ion-list>\r\n              <ion-item button detail=\"true\"\r\n                (click)=\"SubmitAlert(currentSchList.school_id, accYear, 4, currentSchList.udise_code, currentSchList?.school_name)\">\r\n                <!--data.routerlink,data.assessment_type-->\r\n                <div>\r\n                  <ion-label>{{currentSchList?.school_name}}</ion-label>\r\n                  <ion-note>{{currentSchList?.udise_code}}</ion-note>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n          </span>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <ion-card class=\"card-content\" *ngIf=\"countinueCard\">\r\n        <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <!--=============================================================================================================================-->\r\n    <!--===============================================if udise flag equal to 1======================================================-->\r\n    <!-- <div *ngIf=\"udiseflag == '1'\">\r\n      <ion-card class=\"search-bx\">\r\n        <form [formGroup]=\"udiseSearchForm\">\r\n          <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n            onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n          <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n        </form>\r\n      </ion-card>\r\n      <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n      <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n        <span>\r\n          <ion-list>\r\n            <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode)\">\r\n              <div>\r\n                <ion-label>{{extSchoolName}}</ion-label>\r\n                <ion-note>{{extUdiseCode}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>-->\r\n\r\n      <!--countinue school card-->\r\n      <!-- <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n        <span class=\"css-selector\">\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code)\">\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div> -->\r\n    <!--==============================================================================================================================-->\r\n\r\n\r\n\r\n    <!--Today's quato-->\r\n    <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--log grid for school observation-->\r\n    <ion-title class=\"tlt\" style=\"padding-top:10px;text-align: center;\">Status table</ion-title>\r\n    <ion-card class=\"card-content srcl-tble\">\r\n      <table>\r\n        <tr>\r\n          <th style=\"width:95px;\">Date</th>\r\n          <th>Status</th>\r\n          <th>UDISE of school visited</th>\r\n        </tr>\r\n        <tr *ngFor=\"let data of historyTable\">\r\n          <td>{{data.date}}</td>\r\n          <td *ngIf=\"data.status == 'Submited'\"><ion-badge color=\"success\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'Not Submited'\"><ion-badge color=\"warning\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'No Visit'\"><ion-badge color=\"danger\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'Upcoming Visit'\"><ion-badge color=\"tertiary\">{{data.status}}</ion-badge></td>\r\n          <td *ngIf=\"data.status == 'Yet to Visit'\"><ion-badge color=\"primary\"\r\n              style=\"color:#fff;\">{{data.status}}</ion-badge></td>\r\n          <td>{{data.udise ? data.udise : '-'}}</td>\r\n        </tr>\r\n      </table>\r\n    </ion-card>\r\n  </ng-container>\r\n\r\n  <!--======================================================================================================================================-->\r\n\r\n\r\n\r\n  <!--======================================================================================================================================-->\r\n  <!---------------------------------------------------------BEO userType interface----------------------------------------------------------->\r\n  <!--======================================================================================================================================-->\r\n\r\n  <ng-container *ngIf=\"this.level == 'L2' && this.udiseflag == '0'\">\r\n    <!--Note info-->\r\n    <!-- <ion-card class=\"msg-bx\">\r\n      <h5 color=\"dark\">Note:</h5>\r\n      <ion-text color=\"dark\">Will you be able to visit the school today</ion-text>\r\n    </ion-card> -->\r\n\r\n    <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\">\r\n      <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n      <ion-text color=\"dark\">Each school visit will take nearly one full day to complete. Please plan to visit one\r\n        school a day as per the Status Table below on Or before <b>{{this.schoolOverallData?.end_date}}</b></ion-text>\r\n    </ion-card>\r\n\r\n    <!--=================================================if udise flag not equal to 1==================================================-->\r\n    <div>  <!--*ngIf=\"udiseflag != '1'\"-->\r\n      <!--School Info Card-->\r\n      <ion-title class=\"tlt\" *ngIf=\"beoSchl\">School to visit today</ion-title>\r\n      <ion-card *ngIf=\"beoSchl\" class=\"anim-bx\">\r\n        <span><!--*ngFor=\"let data of newmenus\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"SubmitAlert(currentSchList.school_id, this.accYear,4, currentSchList.udise_code, currentSchList.school_name)\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>{{currentSchList.school_name}}</ion-label>\r\n                <ion-note>{{currentSchList.udise_code}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n  \r\n      <!--countinue school card-->\r\n      <ion-card class=\"card-content\" *ngIf=\"countinueCard\">\r\n        <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\" *ngIf=\"clusterTabel\">\r\n        <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n        <ion-text color=\"dark\">1. Select the Cluster which shows Ready.</ion-text><br>\r\n        <ion-text color=\"dark\">2. Click the Cluster ID to get Cluster Details.</ion-text>\r\n      </ion-card>\r\n\r\n      <!--cluster type grid-->\r\n      <ion-title class=\"tlt\" style=\"padding-top:10px;text-align: center;\" *ngIf=\"clusterTabel\">Status table</ion-title>\r\n      <ion-card class=\"card-content\" style=\"overflow-x: auto;\" *ngIf=\"clusterTabel\">\r\n        <table>\r\n          <tr>\r\n            <th>Cluster</th>\r\n            <th>Done</th>\r\n            <th>Status</th>\r\n          </tr>\r\n          <tr *ngFor=\"let data of schoolData let i =index\"\r\n            [class]=\"data.status == 'ready' ? 'blue' : data.status == 'done' ? 'success' : 'grey'\">\r\n            <td (click)=\"openModel(i)\">{{data.id}}</td>\r\n            <td>{{data.completed?.length ? data.completed?.length : '0'}}/{{data.target}}</td>\r\n            <td>\r\n              <b *ngIf=\"data.status !== 'ready'\">{{data.status == 'not_ready' ? 'Not Ready' : 'Done'}}</b>\r\n              <ion-button *ngIf=\"data.status == 'ready'\" [disabled]=\"beoSchlbtn\" size=\"small\"\r\n                style=\"color:#fff;text-transform:capitalize;\"\r\n                (click)=\"beoSchoolList(i)\"><b>{{data.status}}</b></ion-button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </ion-card>\r\n    </div>\r\n    <!--=================================================================================================================================-->\r\n    <!--=================================================================================================================================-->\r\n\r\n\r\n    <!--===============================================if udise flag equal to 1======================================================-->\r\n    <!-- <div *ngIf=\"udiseflag == '1'\">\r\n      <ion-card class=\"search-bx\">\r\n        <form [formGroup]=\"udiseSearchForm\">\r\n          <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n            onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n          <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n        </form>\r\n      </ion-card>\r\n      <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n      <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n        <span>\r\n          <ion-list>\r\n            <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode)\">\r\n              <div>\r\n                <ion-label>{{extSchoolName}}</ion-label>\r\n                <ion-note>{{extUdiseCode}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>-->\r\n\r\n      <!--countinue school card-->\r\n      <!-- <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n        <span class=\"css-selector\"> *ngFor=\"let data of schoollist\"\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code)\">\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div> -->\r\n    <!--==============================================================================================================================-->\r\n\r\n\r\n    <!--Today's quato-->\r\n    <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card class=\"card-content\" *ngIf=\"notReadyStatusMsg\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>\r\n            You do not have any schools to visit today as teachers in your cluster have not yet done enough visits.\r\n            Please encourage the teachers to complete assessments in their schools. Please login tomorrow to\r\n            check</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n  </ng-container>\r\n\r\n  <!--======================================================================================================================================-->\r\n  <!---------------------------------------------------------CEO, DEO, State Officials userType interface - L3----------------------------------------------------------->\r\n  <!--======================================================================================================================================-->\r\n\r\n  <ng-container *ngIf=\"level == 'L3' && udiseflag == '0'\">\r\n    <!--=================================================if udise flag not equal to 1==================================================-->\r\n    <div>  <!--*ngIf=\"udiseflag != '1'\"-->\r\n      <!--School Info Card-->\r\n      <ion-title class=\"tlt\" *ngIf=\"beoSchl\">School to visit today (Select one school)</ion-title>\r\n      <div >\r\n        <ion-card *ngIf=\"beoSchl\" class=\"anim-bx\" >\r\n          <span *ngFor=\"let item of studListl3\"><!--*ngFor=\"let data of newmenus\"-->\r\n            <ion-list>\r\n              <ion-item button detail=\"true\"\r\n                (click)=\"l3StudentList(item.school_id, this.accYear,4, item.udise_code, item.school_name)\"><!--data.routerlink,data.assessment_type-->\r\n                <div>\r\n                  <ion-label>{{item.school_name}}</ion-label>\r\n                  <ion-note>{{item.udise_code}}</ion-note>\r\n                </div>\r\n              </ion-item>\r\n            </ion-list>\r\n          </span>\r\n        </ion-card>\r\n      </div>\r\n      \r\n\r\n      <!--countinue school card-->\r\n      <ion-card class=\"card-content\" *ngIf=\"countinueCard\">\r\n        <span class=\"css-selector\"><!--*ngFor=\"let data of schoollist\"-->\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code,'')\"><!--data.routerlink,data.assessment_type-->\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"msg-bx\" style=\"margin-bottom:15px;\" *ngIf=\"clusterTabel\">\r\n        <h5 color=\"dark\" style=\"margin-right:5px;\">Note:</h5>\r\n        <ion-text color=\"dark\">1. Select the Cluster which shows Ready.</ion-text><br>\r\n        <ion-text color=\"dark\">2. Click the Cluster ID to get Cluster Details.</ion-text><br>\r\n        <ion-text color=\"dark\">3. You will be able to visit more than 1 school per day till {{end_date}}.</ion-text><br>\r\n        <ion-text color=\"dark\">4. Click the REPORT button on top to see the school visit report.</ion-text>\r\n\r\n      </ion-card>\r\n\r\n      <!--cluster type grid-->\r\n      <ion-title class=\"tlt\" style=\"padding-top:10px;text-align: center;\" *ngIf=\"clusterTabel\">Status table</ion-title>\r\n      <ion-card class=\"card-content\" style=\"overflow-x: auto;\" *ngIf=\"clusterTabel\">\r\n        <table>\r\n          <tr>\r\n            <th>Cluster</th>\r\n            <th>Done</th>\r\n            <th>Status</th>\r\n          </tr>\r\n          <tr *ngFor=\"let data of schoolData let i =index\"\r\n            [class]=\"data.status == 'ready' ? 'blue' : data.status == 'done' ? 'success' : 'grey'\">\r\n            <td (click)=\"openModel(i)\">{{data.id}}</td>\r\n            <!-- <td>{{data.completed?.length ? data.completed?.length : '0'}}/{{data.target}}</td> -->\r\n            <td>{{data.completed?.length ? data.completed?.length : '0'}}</td>\r\n            <td>\r\n              <b *ngIf=\"data.status !== 'ready'\">{{data.status == 'not_ready' ? 'Not Ready' : 'Done'}}</b>\r\n              <ion-button *ngIf=\"data.status == 'ready'\" [disabled]=\"ceoSchlbtn\" size=\"small\"\r\n                style=\"color:#fff;text-transform:capitalize;\"\r\n                (click)=\"deoSchoolList(i)\"><b>{{data.status}}</b></ion-button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </ion-card>\r\n    </div>\r\n    <!--=================================================================================================================================-->\r\n    <!--=================================================================================================================================-->\r\n\r\n\r\n    <!--===============================================if udise flag equal to 1======================================================-->\r\n    <!-- <div *ngIf=\"udiseflag == '1'\">\r\n      <ion-card class=\"search-bx\">\r\n        <form [formGroup]=\"udiseSearchForm\">\r\n          <ion-searchbar placeholder=\"Enter UDISE Code\" formControlName=\"udiseCode\"\r\n            onkeypress=\"return (event.charCode>47 && event.charCode<58)\"></ion-searchbar>\r\n          <ion-button (click)=\"onSubmit()\"><span style=\"color:#fff;\">Search</span></ion-button>\r\n        </form>\r\n      </ion-card>\r\n      <ion-title class=\"tlt\" *ngIf=\"udiseSrchSch\">School to visit today</ion-title>\r\n      <ion-card class=\"card-content\" *ngIf=\"udiseSrchSch\">\r\n        <span>\r\n          <ion-list>\r\n            <ion-item button detail=\"true\" (click)=\"SubmitAlert(extSchoolId, extAccYear, 4, extUdiseCode)\">\r\n              <div>\r\n                <ion-label>{{extSchoolName}}</ion-label>\r\n                <ion-note>{{extUdiseCode}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>-->\r\n\r\n      <!--countinue school card-->\r\n      <!-- <ion-card class=\"card-content\" *ngIf=\"udisecountinueCard\">\r\n        <span class=\"css-selector\"> *ngFor=\"let data of schoollist\"\r\n          <ion-list>\r\n            <ion-item button detail=\"true\"\r\n              (click)=\"navigateModule(this.schoolId,this.accYear, 4,this.udise_code)\">\r\n              <div>\r\n                <ion-label>Countinue Your Observation</ion-label>\r\n                <ion-note>{{this.school_name}}</ion-note>\r\n              </div>\r\n            </ion-item>\r\n          </ion-list>\r\n        </span>\r\n      </ion-card>\r\n    </div> -->\r\n    <!--==============================================================================================================================-->\r\n\r\n\r\n    <!--Today's quato-->\r\n    <!-- <ion-card class=\"card-content\" *ngIf=\"quatocard\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Today's Target has been met please login tomorrow</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card> -->\r\n\r\n    <!--Inproper Saved-->\r\n    <ion-card class=\"card-content\" *ngIf=\"inproperData\" (click)=\"checkObservation()\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>Your data is inproper , can't be saved</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n\r\n\r\n\r\n    <ion-card class=\"card-content\" *ngIf=\"notReadyStatusMsg\">\r\n      <span class=\"css-selector\">\r\n        <div style=\"text-align:center;padding:10px;font-size:16px;color:#333;\">\r\n          <ion-label>\r\n            You do not have any schools to visit today as teachers in your cluster have not yet done enough visits.\r\n            Please encourage the teachers to complete assessments in their schools. Please login tomorrow to\r\n            check</ion-label>\r\n        </div>\r\n      </span>\r\n    </ion-card>\r\n  </ng-container>\r\n</ion-content>\r\n<!--======================================================================================================================================-->\r\n<!--======================================================================================================================================-->\r\n\r\n\r\n\r\n<!-- <ion-footer>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\"onSaveBtnPress()\" class=\"btn-submit\" type=\"submit\" color=\"primary\" expand=\"block\">\r\n          Save</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_school-observation_school-observation_module_ts-es2015.js.map