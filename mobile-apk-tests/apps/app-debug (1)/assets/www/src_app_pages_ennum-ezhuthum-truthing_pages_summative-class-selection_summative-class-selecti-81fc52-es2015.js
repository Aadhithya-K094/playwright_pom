(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-class-selection_summative-class-selecti-81fc52"],{

/***/ 84562:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection-routing.module.ts ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeClassSelectionPageRoutingModule": function() { return /* binding */ SummativeClassSelectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _summative_class_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-class-selection.page */ 74747);




const routes = [
    {
        path: '',
        component: _summative_class_selection_page__WEBPACK_IMPORTED_MODULE_0__.SummativeClassSelectionPage
    }
];
let SummativeClassSelectionPageRoutingModule = class SummativeClassSelectionPageRoutingModule {
};
SummativeClassSelectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SummativeClassSelectionPageRoutingModule);



/***/ }),

/***/ 98335:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.module.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeClassSelectionPageModule": function() { return /* binding */ SummativeClassSelectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _summative_class_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./summative-class-selection-routing.module */ 84562);
/* harmony import */ var _summative_class_selection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-class-selection.page */ 74747);








let SummativeClassSelectionPageModule = class SummativeClassSelectionPageModule {
};
SummativeClassSelectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _summative_class_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeClassSelectionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_summative_class_selection_page__WEBPACK_IMPORTED_MODULE_1__.SummativeClassSelectionPage]
    })
], SummativeClassSelectionPageModule);



/***/ }),

/***/ 74747:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.page.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummativeClassSelectionPage": function() { return /* binding */ SummativeClassSelectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_summative_class_selection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./summative-class-selection.page.html */ 63158);
/* harmony import */ var _summative_class_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summative-class-selection.page.scss */ 48332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 43054);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/loader/ion-loader.service */ 21645);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */ 95357);





// import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';












let SummativeClassSelectionPage = class SummativeClassSelectionPage {
    constructor(apiService, ionicstorage, router, alertService, route, ionLoaderService, uploadService, alertController, http, networkService, toast, fb, userSessionService) {
        this.apiService = apiService;
        this.ionicstorage = ionicstorage;
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.ionLoaderService = ionLoaderService;
        this.uploadService = uploadService;
        this.alertController = alertController;
        this.http = http;
        this.networkService = networkService;
        this.toast = toast;
        this.fb = fb;
        this.userSessionService = userSessionService;
        this.studetnList = [];
        this.assessedStudents = [];
        this.selectedTest = 0;
        this.classTypeArray = [];
        this.classes = [];
        this.subjects = [];
        this.mediumOfInstructionsArray = [];
        this.classType = 'Monograde';
        this.classRadio = "";
        this.monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.TermsList = ['Term 1', 'Term 2', 'Term 3', 'Term 4'];
        this.newarr = {};
        this.selectivecolor = 'primary';
        this.obj = {};
        this.viewStatus = true;
        this.selectAll = false;
        this.viewStatusforDatestarted = false;
        this.classListData = [];
        this.user_name = '10300766';
        this.pass_word = '9442@1969';
        this.token_sample = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWlzX3VzZXJuYW1lIjoiMTAzMDA3NjYiLCJlbWlzX3VzZXJfaWQiOiIzMDA3NjYiLCJlbWlzX3VzZXJ0eXBlIjoiMzgiLCJlbWlzX3VzZXJ0eXBlMSI6IjEiLCJzdGF0dXMiOiJBY3RpdmUiLCJ0ZWFjaGVyX25hbWUiOiJNT0hBTiBSIiwidWRpc2VfY29kZSI6IjMzMDQxMDAwMjMzIiwidGVhY2hlcl90eXBlIjoiMTAxIiwic2Nob29sX2tleV9pZCI6IjkwMDU2IiwidGVhY2hlcl9pZCI6IjEwMzAwNzY2IiwidHlwZV90ZWFjaGVyIjoiRElTVFJJQ1QgRURVQ0FUSU9OQUwgT0ZGSUNFUiAoRWxlbWVudGFyeSkiLCJzdWJqZWN0cyI6IkNoZW1pc3RyeSIsInRlbXBfbG9naW4iOiIwIiwiZGlzdHJpY3RfaWQiOiIzNSIsImJsb2NrX2lkIjpudWxsLCJtb2QxIjoiNjAsMTAsNDEsNDIsNDMsNDQiLCJtb2QyIjoiMTEsMjcsNDksNjksMjgsNzgsNTQsMzUsMzYsMzcsMzgsODEsOCw0MiwzMiIsIm5ld3NjaGwiOm51bGwsImlhdCI6MTY3ODA4NzU2OCwiZXhwIjoxNjc4MDg3ODY4fQ.XLT-jkTVL79Q3uf-9tz3LJCoAGyUJ5PKIVPvwAcIrWE';
        this.completedCount = 0;
        this.overallsubmit = true;
        this.finalDupList = [];
        this.completedSchool = [];
        this.getWeek = (d) => {
            const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
            return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
        };
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emis_usertype1 = this.userSessionService.emis_usertype1();
        this.teacher_id = this.userSessionService.emis_username();
    }
    ionViewDidEnter() {
        this.overallsubmit = true;
        this.errorMsg = '';
        this.schId = this.route.snapshot.queryParamMap.get("schId");
        this.assYear = this.route.snapshot.queryParamMap.get("assYear");
        this.assType = this.route.snapshot.queryParamMap.get("assType");
        this.udiseCode = this.route.snapshot.queryParamMap.get("udiseCode");
        this.observation_id = this.route.snapshot.queryParamMap.get("observation_id");
        this.udiseflag = this.route.snapshot.queryParamMap.get("udiseflag");
        this.level = this.route.snapshot.queryParamMap.get("level");
        this.skipStudID = this.route.snapshot.queryParamMap.get("skipStuID");
        this.asstStatus = this.route.snapshot.queryParamMap.get("asstStatus");
        this.getSchoolList();
        this.studetnList = [];
        if (this.level == 'L1') {
            this.scrnNmbr = 'L1 - 4';
            this.tltStudentCount = 15;
            console.log(this.tltStudentCount);
        }
        else if (this.level == 'L2') {
            this.scrnNmbr = 'L2 - 4';
            this.tltStudentCount = 12;
            console.log(this.tltStudentCount);
        }
        else if (this.level == 'L3') {
            this.scrnNmbr = 'L3 - 4';
            this.tltStudentCount = 12;
            console.log(this.tltStudentCount);
        }
        setTimeout(() => {
            var _a;
            debugger;
            if (this.level == 'L3') {
                if (this.completedCount >= 1) {
                    this.overallsubmit = false;
                }
            }
            else {
                let btnEnabled = this.finalStuList.filter(x => x.assmnt_status == "assessed");
                if ((((_a = this.finalDupList) === null || _a === void 0 ? void 0 : _a.length) == 0 && this.completedCount != this.tltStudentCount) || (this.completedCount == this.tltStudentCount)) {
                    this.overallsubmit = false;
                }
                else if (this.finalStuList.length < this.tltStudentCount && this.finalStuList.length == btnEnabled.length) {
                    this.overallsubmit = false;
                }
            }
        }, 1000);
        this.ionicstorage.getData('userInfo').then((dataa) => {
            this.username = dataa.username;
            this.schoolid = dataa.school_id;
            this.token = dataa.token;
        });
        debugger;
        this.ionicstorage.getData('clusterId').then((dataa) => {
            this.clusterId = dataa;
            console.log(this.clusterId, 'this.clusterId');
        }, (error) => console.error(error));
        console.log(this.schId, this.assYear, this.assType, this.observation_id);
        this.ionicstorage.getData('completedSchool').then((dataa) => {
            this.completedSchool = [];
            if (dataa != undefined || dataa != null) {
                this.completedSchool = dataa;
            }
        }, (error) => console.error(error));
        this.ionicstorage.getData('summativeAsseData').then((data) => {
            if (data !== null) {
                debugger;
                console.log(data, 'studentlist');
                this.finalStuListss = [];
                this.finalStuList = [];
                this.overallDupliStuList = [];
                this.finalDupList = [];
                this.finalStuListss = data;
                console.log(this.finalStuListss, 'finalStuListss');
                //Duplicate overall student list
                for (let i = 0; i < data.studentlist.length; i++) {
                    if (data.studentlist[i].assmnt_status !== 'Absent_today' && data.studentlist[i].assmnt_status !== 'Left_school_after_marking_attendance' && data.studentlist[i].assmnt_status !== 'Present_in_school_but_unwell') {
                        this.overallDupliStuList.push(data.studentlist[i]);
                    }
                    if (data.studentlist[i].assmnt_status !== 'Absent_today' && data.studentlist[i].assmnt_status !== 'assessed'
                        && data.studentlist[i].assmnt_status !== 'Left_school_after_marking_attendance' && data.studentlist[i].assmnt_status !== 'Present_in_school_but_unwell') {
                        this.finalDupList.push(data.studentlist[i]);
                    }
                }
                //final student list
                var count = this.tltStudentCount;
                var increcount = 0;
                for (let i = 0; i < this.overallDupliStuList.length; i++) {
                    if (this.overallDupliStuList[i].assmnt_status == null || this.overallDupliStuList[i].assmnt_status == 'assessed') {
                        if (increcount != count) {
                            for (let j = i; j < i + 1; j++) {
                                increcount++;
                                this.finalStuList.push(this.overallDupliStuList[j]);
                                // delete this.overallDupliStuList[j]
                            }
                        }
                    }
                }
                this.finalStuList.forEach(data => {
                    if (data.assmnt_status == null) {
                        data.isAssessed = false;
                        data.isSkipped = false;
                        data.observation_id = this.observation_id;
                        return data;
                    }
                    else if (data.assmnt_status == 'assessed') {
                        data.isAssessed = true;
                        data.isSkipped = true;
                        data.observation_id = this.observation_id;
                        return data;
                    }
                    else if (data.assmnt_status == 'absent') {
                        data.isAssessed = false;
                        data.isSkipped = true;
                        data.observation_id = this.observation_id;
                        return data;
                    }
                    else if (data.assmnt_status == 'Left_school_after_marking_attendance' || data.assmnt_status == 'Present_in_school_but_unwell') {
                        data.isAssessed = false;
                        data.isSkipped = true;
                        data.observation_id = this.observation_id;
                        return data;
                    }
                });
                this.totalStudent = this.finalStuList.length;
                this.completedCount = 0;
                this.finalStuList.forEach(val => {
                    if (val.assmnt_status == 'assessed') {
                        this.completedCount++;
                    }
                });
                debugger;
                console.log(this.finalStuList, 'this.finalStuList');
                console.log(typeof this.finalStuList, 'this.finalStuList');
                if (this.finalStuList == null || typeof this.finalStuList == 'undefined' || this.finalStuList.length == 0) {
                    this.finalDupList = [];
                    this.overallDupliStuList = [];
                    this.finalStuList = [];
                    this.stuListGet();
                    console.log('stuListGet2');
                }
                else {
                    let assessedFlag = this.finalStuList.filter(e => e.assmnt_status == 'assessed');
                    this.router.navigate(['/tabs'], { queryParams: { 'assessedStatus': assessedFlag.length } });
                }
            }
            else {
                this.stuListGet();
                console.log('stuListGet1');
            }
        });
        // setTimeout(() => {
        // }, 300);
        this.downloadStateMarkedAttendance();
    }
    ngOnInit() {
    }
    // ionViewWillEnter() {
    //   this.obj = {}
    //   if (this.route.snapshot.queryParamMap.get('id') != null) {
    //     this.apiService.setdataassessed_typeformativeid(this.route.snapshot.queryParamMap.get('id'));
    //   }
    //   this.assessment_type = this.route.snapshot.queryParamMap.get('id');
    //   let currentdate = new Date();
    //   this.Monthdata = this.monthList[currentdate.getMonth() + 1]
    //   this.ionicstorage.getData('userInfo').then(
    //     (dataa) => {
    //       this.username = dataa.username;
    //       // this.schoolid = dataa.school_id;
    //       this.token = dataa.token;
    //       // this.username = this.user_name;
    //       this.schoolid = '32421';
    //       // this.token = this.token_sample;
    //       console.log(this.username+'--'+this.schoolid+'--'+this.token);
    //       let date = new Date();
    //       let acadamicyear = date.getFullYear() + " - " + (date.getFullYear() + 1);
    //       let obj = {
    //         "academic_year": this.apiService.getacadamic_yearid(),
    //         "month_year": ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear(),
    //         "assessment_type": this.apiService.getdataassessed_typeformativeid(),
    //         "school_id": this.schoolid
    //       }
    //       this.apiService.getformationterms(obj, this.token).subscribe(async val => {
    //         this.obj = {}
    //         await val['records'].filter(val => {
    //           if (val.assessment_type == this.apiService.getdataassessed_typeformativeid()) {
    //             val.term = "term " + val.term
    //             this.obj[val.term] = this.obj[val.term] || [];
    //             let changedatedynamic = new Date(val.start_date);
    //             let getcurrentmonth = (changedatedynamic.getMonth())
    //             const getWeekNumOfMonthOfDate = (d) => {
    //               const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
    //               return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
    //             }
    //             const weekNumOfDate = getWeekNumOfMonthOfDate(new Date())
    //             this.obj[val.term] = this.obj[val.term] || [];
    //             if (val.week_of_month > weekNumOfDate) {
    //               val.view_status_week = true;
    //             } else {
    //               val.view_status_week = false;
    //             }
    //             this.obj[val.term].push(val);
    //           }
    //         })
    //         this.apiService.getClassRoomDetailsAll({ username: this.username, school_id: this.schoolid, acadamicname: acadamicyear }, this.token_sample).subscribe(async data => {
    //           debugger
    //           if (data['status'] == 200 && data['dataStatus'] == true) {
    //             if (data['records'].academic_year_details.length > 0) {
    //               this.apiService.setacadamic_yearid(data['records'].academic_year_details[0].id)
    //             }
    //             // let getsavedclass = [{"id":1,"class":"1","section":[]},{"id":2,"class":"2","section":[]},{"id":3,"class":"3","section":[{"name":"A","isSelected":true,"id":1},{"name":"B","isSelected":true,"id":2}]}];
    //             // this.savedSubjects = undefined;
    //             let getsavedclass = JSON.parse(data['records'].saved_details[0].class);
    //              this.savedSubjects = JSON.parse(data['records'].saved_details[0].subject);
    //             if (getsavedclass.length > 0 && this.apiService.classes.length > 0) {
    //               let getformate = getsavedclass.map(a => {
    //                 let getfrommasterclass = this.apiService.classes.find(n => n.class == a.class);
    //                 return { class: getfrommasterclass.class, section: a.section.map(t => t.name).join() }
    //               });
    //               for (let data in this.obj) {
    //                 let finalobj = this.obj[data].filter(v => {
    //                   let selectedclass = getformate.find(s => s.class == v.class);
    //                   if (selectedclass != undefined) {
    //                     if (selectedclass.class == v.class) {
    //                       v.section = selectedclass.section;
    //                       return v
    //                     }
    //                   }
    //                 });
    //                 this.obj[data] = finalobj;
    //                 if (this.TermStore != undefined) {
    //                   this.onSelectTerm(this.TermStore);
    //                 }
    //               }
    //             } else {
    //               for (let data in this.obj) {
    //                 this.obj[data] = [];
    //               }
    //             }
    //           } else {
    //             this.alertService.error(data['msg'])
    //           }
    //         });
    //       })
    //     },
    //     (error) => console.error(error)
    //   );
    //   this.viewStatus = true;
    //   this.downloadStateMarkedAttendance();
    // }
    //get School data for BRTE and BEO from API
    getSchoolList() {
        this.ionicstorage.getData('getEetSchools').then((dataa) => {
            if (dataa.school_id == '') {
                this.apiService.eet_school_observation().subscribe(dataval => {
                    try {
                        if (Object.keys(dataval.record).length > 0 && dataval.status == 200) {
                            this.ionicstorage.insertData_Replace('getEetSchools', dataval.record);
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
        }, (error) => console.error(error));
    }
    stuListGet() {
        debugger;
        this.finalStuList = [];
        this.overallDupliStuList = [];
        this.finalDupList = [];
        let record = {
            'observation_id': this.observation_id,
            'academic_year': this.assYear,
            'assessment_type': this.assType,
            'school_id': this.schId
        };
        debugger;
        this.apiService.toGetStudentList(record).subscribe(dataval => {
            try {
                if (Object.keys(dataval.records).length > 0 && dataval.status == 200) {
                    let studetentTamil = dataval.records.tamil;
                    let studetentMaths = dataval.records.maths;
                    let studetentEnglish = dataval.records.english;
                    // let totalLength = studetentTamil.length + studetentMaths.length + studetentEnglish.length
                    // console.log(totalLength,'aiyooooo raammaaaaa');
                    var bigArrayLength = Math.max(studetentTamil.length, studetentMaths.length, studetentEnglish.length);
                    console.log(bigArrayLength, 'big number');
                    // API overall student list
                    for (let i = 0; i < bigArrayLength; i++) {
                        this.studetnList.push(studetentTamil[i]);
                        this.studetnList.push(studetentMaths[i]);
                        this.studetnList.push(studetentEnglish[i]);
                    }
                    let studetnList = this.studetnList.filter(e => typeof e !== 'undefined');
                    console.log(studetnList, 'studetnList');
                    debugger;
                    this.finalStuListss = [];
                    if (typeof this.finalStuListss['studentlist'] == 'undefined') {
                        this.finalStuListss['studentlist'] = {};
                    }
                    this.finalStuListss['studentlist'] = studetnList;
                    console.log(this.finalStuListss, 'this.finalStuListssthis.finalStuListss');
                    this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: studetnList });
                    //Duplicate overall student list
                    for (let i = 0; i < studetnList.length; i++) {
                        if (studetnList[i].assmnt_status !== 'absent' && studetnList[i].assmnt_status !== 'Left_school_after_marking_attendance' && studetnList[i].assmnt_status !== 'Present_in_school_but_unwell') {
                            this.overallDupliStuList.push(studetnList[i]);
                        }
                        if (studetnList[i].assmnt_status !== 'absent' && studetnList[i].assmnt_status !== 'assessed'
                            && studetnList[i].assmnt_status !== 'Left_school_after_marking_attendance' && studetnList[i].assmnt_status !== 'Present_in_school_but_unwell') {
                            this.finalDupList.push(studetnList[i]);
                        }
                    }
                    console.log(this.overallDupliStuList, 'overall Duplicate student list');
                    console.log(this.finalDupList, 'this.finalDupListthis.finalDupList');
                    //final student list
                    var count = this.tltStudentCount;
                    var increcount = 0;
                    for (let i = 0; i < this.overallDupliStuList.length; i++) {
                        if (this.overallDupliStuList[i].assmnt_status == null || this.overallDupliStuList[i].assmnt_status == 'assessed') {
                            if (increcount != count) {
                                for (let j = i; j < i + 1; j++) {
                                    increcount++;
                                    this.finalStuList.push(this.overallDupliStuList[j]);
                                    // delete this.overallDupliStuList[j]
                                }
                            }
                        }
                    }
                    console.log(this.finalStuList, 'final list student');
                    console.log(this.overallDupliStuList, 'overall Duplicate student list deleted');
                    let assessedFlag = this.finalStuList.filter(e => e.assmnt_status == 'assessed');
                    console.log(assessedFlag.length, 'flagggggData');
                    this.router.navigate(['/tabs'], { queryParams: { 'assessedStatus': assessedFlag.length } });
                    let skipStu = this.overallDupliStuList.filter(e => e.id == this.skipStudID);
                    console.log('skipstu', skipStu);
                    this.finalStuList.forEach(data => {
                        if (data.assmnt_status == null) {
                            data.isAssessed = false;
                            data.isSkipped = false;
                            data.observation_id = this.observation_id;
                            return data;
                        }
                        else if (data.assmnt_status == 'assessed') {
                            data.isAssessed = true;
                            data.isSkipped = true;
                            data.observation_id = this.observation_id;
                            return data;
                        }
                        else if (data.assmnt_status == 'Absent_today') {
                            data.isAssessed = false;
                            data.isSkipped = true;
                            data.observation_id = this.observation_id;
                            return data;
                        }
                        else if (data.assmnt_status == 'Left_school_after_marking_attendance' || data.assmnt_status == 'Present_in_school_but_unwell') {
                            data.isAssessed = false;
                            data.isSkipped = true;
                            data.observation_id = this.observation_id;
                            return data;
                        }
                    });
                    console.log(this.finalStuList, 'lk9547');
                    this.totalStudent = this.finalStuList.length;
                    this.completedCount = 0;
                    this.finalStuList.forEach(val => {
                        if (val.assmnt_status == 'assessed') {
                            this.completedCount++;
                        }
                    });
                }
                else {
                    if (Object.keys(dataval.records).length === 0) {
                        throw "No data found in this school";
                    }
                    else if (dataval.status !== 200) {
                        throw "Server not found...Try again later";
                    }
                }
            }
            catch (err) {
                this.errorMsg = err;
                this.apiService.displayToast(err, true);
                this.errorLog(err, record);
            }
        }, error => {
            this.errorLog(error === null || error === void 0 ? void 0 : error.message, {});
        });
    }
    errorLog(err, payload) {
        let record = {
            "observation_id": this.observation_id,
            "school_id": this.schId,
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
    checkStuStatus() {
    }
    downloadStateMarkedAttendance() {
        var bucketName = "lmes-content";
        var filename = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.SummativeJSONLive;
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                this.getJsonData(result.url);
            }
        });
    }
    getJsonData(url) {
        this.http.get(url).subscribe((data) => {
            this.jsonData = data;
            console.log(this.jsonData, 'json data details');
        });
    }
    onSelect(week, id) {
        this.WeeksStore = { value: week };
        this.selectedWeekstyle = 'Module ' + id;
        let newweek = week.value.filter(val => {
            let currentdateDate = new Date();
            let D_1 = val.start_date.split("-");
            let D_2 = val.end_date.split("-");
            // let  D_3 = Date_to_check.split("/");
            var d1 = new Date(D_1[0], parseInt(D_1[1]) - 1, D_1[2]);
            var d2 = new Date(D_2[0], parseInt(D_2[1]) - 1, D_2[2]);
            var d3 = new Date(currentdateDate.getFullYear(), currentdateDate.getMonth(), currentdateDate.getDate());
            if (d3 >= d1 && d3 <= d2) {
                val.view_status = true;
                this.viewStatus = true;
                return val;
            }
            else {
                val.view_status = false;
                if (week.key == this.getWeek(new Date())) {
                    this.viewStatusforDatestarted = true;
                    this.viewStatus = true;
                }
                else {
                    this.viewStatus = false;
                    this.viewStatusforDatestarted = false;
                }
                return val;
            }
        });
        this.selectiveWeek = newweek[0];
        this.formativeassessmentdata = this.formativeassessmentdata.filter(n => {
            n.start_date = this.selectiveWeek.start_date;
            n.end_date = this.selectiveWeek.end_date;
            n.view_status = this.selectiveWeek.view_status;
            n.view_status_week = this.selectiveWeek.view_status_week;
            n.week_of_month = this.selectiveWeek.week_of_month;
            n.week_of_year = this.selectiveWeek.week_of_year;
            n.term = this.selectiveWeek.term;
            n.assessment_type = this.selectiveWeek.assessment_type;
            n.class = this.selectiveWeek.class;
            return n;
        });
        this.weekbasedData = this.formativeassessmentdata;
    }
    onSelectTerm(selectedvalue) {
        console.log(selectedvalue, "selectedvalue", selectedvalue.value);
    }
    getFormativeAssessment(apivalue, classes, subjects, countlist) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let filteredarray = [];
            if (apivalue == null || apivalue == 0 || typeof apivalue == 'string') {
                return filteredarray;
            }
            else if (apivalue.length > 0) {
                if (this.isJson(apivalue[0].class) == true && this.isJson(apivalue[0].subject) == true) {
                    this.shownoclassmsg = true;
                    let apiclass = JSON.parse(apivalue[0].class);
                    let apisubject = JSON.parse(apivalue[0].subject);
                    let apicalsstype = apivalue[0].class_type;
                    yield apiclass.filter(s => {
                        let findcalss = classes.find(n => n.class == s.class);
                        findcalss.section.find(n => {
                            s.section.filter(val => { if (val.name == n.name) {
                                return n.isSelected = true;
                            } });
                        });
                        let newva = findcalss.section.filter(s => s.isSelected == true);
                        apisubject.filter(v => {
                            let findsubject = subjects.find(l => l.id == v);
                            let obj = {
                                id: findcalss.id,
                                classid: findcalss.class,
                                name: findcalss.class_id,
                                subject: findsubject.subject,
                                subject_id: findsubject.id,
                                class_type: apicalsstype,
                                color: findcalss.class_id.replace(" ", ""),
                                studentcount: findcalss.students,
                                assessedcount: 0,
                                section: newva.map(s => s.name).join()
                            };
                            if (obj.section != '') {
                                obj.studentcount = this.getSectionBasedStudentCount(obj.section, this.sectionbasedcountlist, obj.classid);
                            }
                            else {
                                obj.studentcount = obj.studentcount;
                            }
                            filteredarray.push(obj);
                        });
                    });
                    if (countlist.length > 0) {
                        yield filteredarray.filter((t) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                            if (t.section != '') {
                                t.assessedcount = yield this.getSectionBasedStudentAssessedCount(t.section, t.name, t.subject, countlist, t.classid);
                            }
                            else {
                                t.assessedcount = yield this.setCount(t.name, t.subject, countlist);
                            }
                        }));
                    }
                    return filteredarray;
                }
                else {
                    return filteredarray;
                }
            }
        });
    }
    getSectionBasedStudentCount(data, sectiondata, classid) {
        let seperate = data.split(',');
        let scount = 0;
        let final = seperate.map(s => {
            let ss = sectiondata.find(n => n.class_section == s && n.class_studying_id == classid);
            scount = scount + Number(ss.students_count);
        });
        return scount;
    }
    getSectionBasedStudentAssessedCount(sections, name, subject, alldata, classid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let seperate = yield sections.split(',');
            alldata = yield alldata.filter(d => d != undefined);
            alldata = yield alldata.filter(d => d.section != '');
            let scount = 0;
            let final = yield seperate.map((s) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                let ss = yield alldata.find(n => n.section == s && n.class_studying_id == classid && n.subject == subject);
                if (ss == undefined) {
                    ss = {};
                    ss.count = '0';
                }
                scount = scount + Number(ss.count);
            }));
            return scount;
        });
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
    setCount(name, subject, data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let findcount = yield data.find(n => {
                if (n == undefined) {
                    return { count: 0 };
                }
                else if (n.class == name && n.subject == subject) {
                    return n;
                }
            });
            if (findcount != undefined) {
                return findcount.count;
            }
            else {
                return 0;
            }
        });
    }
    onTestBtnClick(value) {
        this.selectedTest = value;
    }
    Onnextnavigate(subject, class_studying, iterate) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let obj = {
                "academic_year": this.apiService.getacadamic_yearid(),
                "assessment_type": this.apiService.getdataassessed_typeformativeid(),
                "class": class_studying,
                // "term": data['term'].match(/(\d+)/)[0],
                // "medium": data['medium'],
                "subject": subject,
                "school_id": this.schoolid,
                // "class_sections": data['section']
            };
            var getall = yield this.getQuestionsFromJson(obj.subject, obj.class); //obj.subject, obj.class
            console.log(obj.subject, obj.class);
            console.log(getall, 'get all questions');
            for (let i = iterate; i < iterate + 1; i++) {
                if (this.overallDupliStuList[i].assmnt_status == null) {
                    this.overallDupliStuList[i].isAssessed = false;
                    this.overallDupliStuList[i].isSkipped = false,
                        this.overallDupliStuList[i].observation_id = this.observation_id,
                        this.overallDupliStuList[i].skippedReason = '',
                        this.overallDupliStuList[i].questionset = this.questionSet(getall, this.overallDupliStuList[i].medium, this.overallDupliStuList[i].class_studying_id, obj.subject, obj.class, this.overallDupliStuList[i].baseline_grade, 0); //getall, n.medium, data['class'], obj.subject, obj.class, n.baseline_grade, data['week_of_year']
                }
                else if (this.overallDupliStuList[i].assmnt_status == 'assessed') {
                    this.overallDupliStuList[i].isAssessed = true;
                    this.overallDupliStuList[i].isSkipped = false,
                        this.overallDupliStuList[i].observation_id = this.observation_id,
                        this.overallDupliStuList[i].skippedReason = '',
                        this.overallDupliStuList[i].questionset = this.questionSet(getall, this.overallDupliStuList[i].medium, this.overallDupliStuList[i].class_studying_id, obj.subject, obj.class, this.overallDupliStuList[i].baseline_grade, 0); //getall, n.medium, data['class'], obj.subject, obj.class, n.baseline_grade, data['week_of_year']
                }
                else if (this.overallDupliStuList[i].assmnt_status == 'absent' || this.overallDupliStuList[i].assmnt_status == 'long_absent' || this.overallDupliStuList[i].assmnt_status == 'cwsn') {
                    this.overallDupliStuList[i].isAssessed = true;
                    this.overallDupliStuList[i].isSkipped = false,
                        this.overallDupliStuList[i].observation_id = this.observation_id,
                        this.overallDupliStuList[i].skippedReason = '',
                        this.overallDupliStuList[i].questionset = this.questionSet(getall, this.overallDupliStuList[i].medium, this.overallDupliStuList[i].class_studying_id, obj.subject, obj.class, this.overallDupliStuList[i].baseline_grade, 0); //getall, n.medium, data['class'], obj.subject, obj.class, n.baseline_grade, data['week_of_year']
                }
            }
            debugger;
            this.ionicstorage.insertData_Replace('summativeAsseData', { studentlist: this.overallDupliStuList });
            console.log(this.overallDupliStuList, 'final list');
        });
    }
    questionSet(data, medium, classdata, subject, classda, grade, weekofmonth) {
        console.log(data, medium, classdata, subject, classda, grade, weekofmonth, 'data, medium, classdata, subject, classda, grade, weekofmonth');
        let another = {};
        if (grade == '1') {
            another = data;
        }
        else if (grade == '2') {
            if (Object.keys(data).length > 2) {
                another['Mottu'] = data['Mottu'];
                another['Malar'] = data['Malar'];
            }
            else {
                another['Mottu'] = data['Mottu'];
            }
        }
        else if (grade == '3') {
            another['Malar'] = data['Malar'];
        }
        let newobj = {};
        const keys = Object.keys(another);
        let nearr = keys.map(val => {
            newobj[val] = another[val].filter(n => n.medium_id == medium && n.class == classdata);
        });
        return newobj;
    }
    getQuestionsFromJson(subject, studentcalss) {
        if (this.jsonData[subject] != undefined) {
            let subjectbasedQuestions = this.jsonData[subject];
            console.log(subjectbasedQuestions, 'grade ques');
            var size = 1;
            var basedondata = {};
            for (let nameofobj in subjectbasedQuestions) {
                if (size <= studentcalss) {
                    if (nameofobj == '1') {
                        basedondata['Arumbu'] = this.getOnlyQustions(subjectbasedQuestions[nameofobj]);
                    }
                    else if (nameofobj == '2') {
                        basedondata['Mottu'] = this.getOnlyQustions(subjectbasedQuestions[nameofobj]);
                    }
                    else if (nameofobj == '3') {
                        basedondata['Malar'] = this.getOnlyQustions(subjectbasedQuestions[nameofobj]);
                    }
                    size++;
                }
            }
            return basedondata;
        }
        else {
            return {};
        }
    }
    getOnlyQustions(objectdata) {
        var newquestionarray = [];
        for (const val in objectdata) {
            newquestionarray.push(objectdata[val]);
        }
        return newquestionarray;
    }
    findStudentToBeAssessed(id, isSkipped, isAssessed, subject, classid, i) {
        console.log(id, isSkipped, isAssessed, i, 'iddddddddddddddddd');
        if (isSkipped !== true && isAssessed !== true) {
            this.Onnextnavigate(subject, classid, i);
            this.router.navigate(['/tabs/summative-questions', id, subject], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType, i: i, observation_id: this.observation_id, udiseCode: this.udiseCode, level: this.level } });
        }
        else {
            if (isSkipped == true && isAssessed == true) {
                this.apiService.displayToast("This Students is assessed!", false);
                this.router.navigate(['/tabs/summative-class-selection']);
            }
            else {
                this.apiService.displayToast("This Students is absent!", false);
                this.router.navigate(['/tabs/summative-class-selection']);
            }
        }
    }
    studentlistoverAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (this.level == 'L3') {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    subHeader: 'You have done ' + this.completedCount + ' assessments in this school!!!',
                    message: ' Are you sure you dont want to do any more assessments in this school?',
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
                            handler: (alertData) => {
                                this.finalSubmit();
                            }
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    // subHeader: 'Important message',
                    message: 'Assessment for this school has been submitted successfully.',
                    buttons: [
                        {
                            text: 'Ok',
                            cssClass: 'alert-button-confirm',
                            handler: (alertData) => {
                                this.finalSubmit();
                            }
                        },
                    ],
                });
                yield alert.present();
            }
        });
    }
    finalSubmit() {
        debugger;
        this.apiService.initializeNetworkEvents();
        // this.studentsList.filter(s => {
        //   console.log(s.id, this.id, 's.id,this.id');
        //   if (s.id == this.id) {
        //     s.isAssessed = true;
        //   }
        // });
        // let seperatestudent = this.studentsList.find(v => v.id == this.id && v.subject_id == this.subId);
        // seperatestudent.academic_id = "1";
        // seperatestudent.teacher_id = this.username;
        // seperatestudent.assessment_type = this.apiService.getdataassessed_typeformativeid();
        // seperatestudent.student_status = seperatestudent.questionset['status'];
        // seperatestudent.status_of_assessed = 'Assessed';
        // if (seperatestudent['questionset']['Arumbu'] != undefined && seperatestudent['questionset']['Arumbu'].length > 0) {
        //   seperatestudent['g1_score'] = seperatestudent['questionset']['Arumbu'].filter(val => val.pass == true).length;
        //   seperatestudent['g1_qa_count'] = seperatestudent['questionset']['Arumbu'].length;
        // }
        // if (seperatestudent['questionset']['Mottu'] != undefined && seperatestudent['questionset']['Mottu'].length > 0) {
        //   seperatestudent['g2_score'] = seperatestudent['questionset']['Mottu'].filter(val => val.pass == true).length;
        //   seperatestudent['g2_qa_count'] = seperatestudent['questionset']['Mottu'].length;
        // }
        // if (seperatestudent['questionset']['Malar'] != undefined && seperatestudent['questionset']['Malar'].length > 0) {
        //   seperatestudent['g3_score'] = seperatestudent['questionset']['Malar'].filter(val => val.pass == true).length;
        //   seperatestudent['g3_qa_count'] = seperatestudent['questionset']['Malar'].length;
        // }
        let seperatestudent = {
            school_status: 'completed',
            school_id: this.schId,
            teacher_id: this.teacher_id,
            udise_code: this.udiseCode,
            observation_id: this.observation_id
        };
        if (this.networkService.getCurrentNetworkStatus() == 0) {
            this.apiService.saveSummativeAssessmentDetails(seperatestudent, this.token).subscribe(dataa => {
                try {
                    if (dataa.status == 200 && dataa.dataStatus == true) {
                        debugger;
                        this.ionicstorage.getData('getEetSchools').then((dataa) => {
                            if (dataa != undefined || dataa != null) {
                                let obj = {
                                    "school_id": dataa.school_id,
                                    "school_name": dataa.school_name,
                                    "udise_code": dataa.udise_code
                                };
                                this.completedSchool.push(obj);
                                setTimeout(() => {
                                    this.ionicstorage.insertData_Replace('completedSchool', this.completedSchool);
                                    console.log(this.completedSchool, 'this.completedSchool');
                                }, 200);
                            }
                        }, (error) => console.error(error));
                        // this.ionicstorage.getData('getEetSchools').then(
                        //   (dataa) => {
                        //     if (dataa != undefined || dataa != null) {
                        //       if(dataa.level == 'L3'){
                        //         let dSchlId = dataa.school_id;
                        //         let dSchlNm = dataa.school_name;
                        //         let dSchlUcod = dataa.udise_code;
                        //         let obj = {
                        //           "school_id":dSchlId,
                        //           "school_name":dSchlNm,
                        //           "udise_code":dSchlUcod
                        //         }
                        //         console.log(dataa.schools)
                        //         let pendingMap = dataa.schools.map(x => x.pending)
                        //         console.log(pendingMap,'pendingMap')
                        //         let clstrSchl = dataa.schools.find(x => x.id == this.clusterId)
                        //         clstrSchl['completed'] = (clstrSchl['completed'] == undefined || clstrSchl['completed'] == null)  ? [] : clstrSchl['completed']
                        //         clstrSchl['completed'].push(obj)
                        //         let removePendList = clstrSchl['pending']
                        //         removePendList.splice(removePendList.findIndex(i => i.school_id === dSchlId), 1)
                        //         clstrSchl['pending'] = removePendList
                        //         dataa.schools_visited = dataa.schools_visited+','+dSchlId
                        //         if(clstrSchl.pending.length == 0){
                        //           clstrSchl.status = 'completed'
                        //         }  
                        //         dataa.observation_status = false
                        //         dataa.completed = false
                        //         dataa.observation_id = ''
                        //         dataa.observation_date = ''
                        //         dataa.school_id = ''
                        //         dataa.school_name = ''
                        //         dataa.udise_code = ''    
                        //         console.log(dataa) 
                        //       }
                        //       else{
                        //         dataa.observation_status = false
                        //         dataa.completed = true
                        //         dataa.observation_id = ''
                        //         dataa.observation_date = ''
                        //         dataa.school_id = ''
                        //         dataa.school_name = ''
                        //         dataa.udise_code = ''
                        //       }
                        //       setTimeout(() => {
                        //         this.ionicstorage.insertData_Replace('getEetSchools', dataa);
                        //         console.log(dataa, 'getEetSchools')
                        //       }, 200);
                        //     }
                        //   },
                        //   (error) => console.error(error)
                        // );
                        this.commonAlert('Success', 'Assessment successfully Saved.');
                        // this.ionicstorage
                        //   .insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectkey: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn, week_of_year: this.weekofyear })
                        // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed !== true && el.isSkipped == false));
                        // if (studentsToBeAssessed.length > 0) {
                        //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                        // } else {
                        //   this.alertService.success("All Students assessed!", false);
                        //   this.router.navigate(['/tabs/summative-student']);
                        // }
                        // this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType } });
                    }
                    else {
                        throw 'No data found in this student list';
                    }
                }
                catch (err) {
                    this.toast.presentToast(err, 'error');
                }
            });
        }
        else {
            // call functions on network offline, such as firebase.goOffline()
            // this.apiService.displayToast("Offline, Data stored in local!!", false);
            // this.ionicstorage
            //   .insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectkey: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn, week_of_year: this.weekofyear })
            this.ionicstorage.getData('remaingusersummative').then((dataa) => {
                var store;
                if (dataa == undefined || dataa == null) {
                    store = [];
                }
                else {
                    store = dataa.remainingdata;
                }
                store.push(seperatestudent);
                console.log(store, '309823wru832ru');
                this.ionicstorage.insertData_Replace('remaingusersummative', { remainingdata: store });
                // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed !== true && el.isSkipped == false));
                // if (studentsToBeAssessed.length > 0) {
                //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                // } else {
                //   this.alertService.success("All Students assessed!", false);
                //   // this.apiService.displayToast("All Students assessed!", false)
                //   this.router.navigate(['/tabs/summative-student']);
                // }
            }, (error) => console.error(error));
            debugger;
            this.ionicstorage.getData('getEetSchools').then((dataa) => {
                if (dataa != undefined || dataa != null) {
                    if (dataa.level == 'L3') {
                        let dSchlId = dataa.school_id;
                        let dSchlNm = dataa.school_name;
                        let dSchlUcod = dataa.udise_code;
                        let obj = {
                            "school_id": dSchlId,
                            "school_name": dSchlNm,
                            "udise_code": dSchlUcod
                        };
                        console.log(dataa.schools);
                        let pendingMap = dataa.schools.map(x => x.pending);
                        console.log(pendingMap, 'pendingMap');
                        let clstrSchl = dataa.schools.find(x => x.id == this.clusterId);
                        if (typeof clstrSchl != 'undefined') {
                            clstrSchl['completed'] = (clstrSchl['completed'] == undefined || clstrSchl['completed'] == null) ? [] : clstrSchl['completed'];
                            clstrSchl['completed'].push(obj);
                        }
                        let removePendList = clstrSchl['pending'];
                        if (typeof removePendList != 'undefined') {
                            removePendList.splice(removePendList.findIndex(i => i.school_id === dSchlId), 1);
                            clstrSchl['pending'] = removePendList;
                        }
                        dataa.schools_visited = dataa.schools_visited + ',' + dSchlId;
                        if (clstrSchl.pending.length == 0) {
                            clstrSchl.status = 'completed';
                        }
                        dataa.observation_status = false;
                        dataa.completed = false;
                        dataa.observation_id = '';
                        dataa.observation_date = '';
                        dataa.school_id = '';
                        dataa.school_name = '';
                        dataa.udise_code = '';
                        console.log(dataa);
                    }
                    else {
                        dataa.observation_status = false;
                        dataa.completed = true;
                        dataa.observation_id = '';
                        dataa.observation_date = '';
                        dataa.school_id = '';
                        dataa.school_name = '';
                        dataa.udise_code = '';
                    }
                    setTimeout(() => {
                        this.ionicstorage.insertData_Replace('getEetSchools', dataa);
                        console.log(dataa, 'getEetSchools');
                    }, 200);
                }
            }, (error) => console.error(error));
            this.commonAlert('Assessment Completed Successfully', 'Offline: Data stored in local!!');
        }
        // this.router.navigate(['/tabs/thankyou'])
    }
    commonAlert(SubHeader, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: SubHeader,
                message: msg,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: () => {
                            this.router.navigate(['/tabs/thankyou']);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
};
SummativeClassSelectionPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__.IonLoaderService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService },
    { type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_10__.ToastService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService }
];
SummativeClassSelectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-summative-class-selection',
        template: _raw_loader_summative_class_selection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_summative_class_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SummativeClassSelectionPage);



/***/ }),

/***/ 48332:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.page.scss ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-secondary) ;\n}\n\nion-title {\n  font-size: 15px;\n}\n\nion-header {\n  background: #27AE60;\n}\n\n.selected {\n  --background: #ffc409;\n  color: white;\n}\n\n.Class1 {\n  --background: #fff;\n  --color:#353fa1;\n}\n\n.Class2 {\n  --background: #b8bef0;\n  --color:#353fa1;\n}\n\n.Class3 {\n  --background: #5c69f3;\n  --color:#fff;\n}\n\n.Class4 {\n  --background: #ded162;\n}\n\n.Class5 {\n  --background: #e8be68;\n}\n\n.Class6 {\n  --background: #80afe8;\n}\n\n.Class7 {\n  --background: #b180e8;\n}\n\n.Class8 {\n  --background: #73b6d1;\n}\n\n.Class9 {\n  --background: #73d1b2;\n}\n\n.Class10 {\n  --background: #b3c969;\n}\n\nion-back-button {\n  color: #fff;\n}\n\n.my_class {\n  --background: #efef5c !important;\n  color: #ffffff;\n}\n\n.datepassed {\n  text-align: center;\n  font-size: 25px;\n  color: red;\n  font-weight: bold;\n}\n\n.datestart {\n  text-align: center;\n  font-size: 25px;\n  color: green;\n  font-weight: bold;\n}\n\n.btn-primary {\n  width: 48%;\n}\n\nion-card {\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n\n.scrl-tbl {\n  max-height: calc(75%);\n  overflow-y: auto;\n  overflow-x: auto;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 0%);\n}\n\ntable tr:first-child {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\nth {\n  background: #f7ecff;\n  font-size: 15px;\n  padding: 10px;\n  color: #333;\n}\n\nth:first-child {\n  text-align: left;\n}\n\n.student-assess-box {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\ntd {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 5px;\n  vertical-align: top;\n}\n\ntd:first-child {\n  text-align: left;\n}\n\ntd:first-child h6 {\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 1.5px;\n  font-weight: 800;\n  color: #8b67b3;\n  margin: 5px 0px 0px;\n}\n\nion-badge {\n  border-radius: 15px;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 5px 10px 4px;\n}\n\n.button-inner {\n  display: flex;\n  position: relative;\n  flex-flow: row nowrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1jbGFzcy1zZWxlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUNBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFMQTtFQUNFLHFCQUFBO0FBUUY7O0FBTkE7RUFDRSxxQkFBQTtBQVNGOztBQVBBO0VBQ0UscUJBQUE7QUFVRjs7QUFSQTtFQUNFLHFCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0FBWUY7O0FBUkE7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVkE7RUFDRSxVQUFBO0FBYUY7O0FBWEE7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBWEE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFlRjs7QUFiSTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFlTjs7QUFYQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBY0Y7O0FBYkU7RUFDRSxnQkFBQTtBQWVKOztBQVpBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBZkU7RUFDRSxnQkFBQTtBQWlCSjs7QUFoQkk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBa0JOOztBQWRBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFpQkEiLCJmaWxlIjoic3VtbWF0aXZlLWNsYXNzLXNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxyXG59XHJcbmlvbi10aXRsZXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaW9uLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiAjMjdBRTYwO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmYzQwOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5DbGFzczF7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC0tY29sb3I6IzM1M2ZhMTtcclxufVxyXG4uQ2xhc3Mye1xyXG4gIC0tYmFja2dyb3VuZDogI2I4YmVmMDtcclxuICAtLWNvbG9yOiMzNTNmYTE7XHJcbn1cclxuLkNsYXNzM3tcclxuICAtLWJhY2tncm91bmQ6ICM1YzY5ZjM7XHJcbiAgLS1jb2xvcjojZmZmO1xyXG59XHJcbi5DbGFzczR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZGVkMTYyO1xyXG59XHJcbi5DbGFzczV7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZThiZTY4O1xyXG59XHJcbi5DbGFzczZ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjODBhZmU4O1xyXG59XHJcbi5DbGFzczd7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYjE4MGU4O1xyXG59XHJcbi5DbGFzczh7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNzNiNmQxO1xyXG59XHJcbi5DbGFzczl7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNzNkMWIyO1xyXG59XHJcbi5DbGFzczEwe1xyXG4gIC0tYmFja2dyb3VuZDogI2IzYzk2OTtcclxufVxyXG5pb24tYmFjay1idXR0b257XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0gXHJcblxyXG5cclxuLm15X2NsYXNze1xyXG4gIC0tYmFja2dyb3VuZDogI2VmZWY1YyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kYXRlcGFzc2Vke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kYXRlc3RhcnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idG4tcHJpbWFyeXtcclxuICB3aWR0aDogNDglO1xyXG59XHJcbmlvbi1jYXJke1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2NybC10Ymx7XHJcbiAgbWF4LWhlaWdodDogY2FsYyg3NSUpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG50YWJsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDAlKTtcclxuICB0cntcclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxudGh7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZWNmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICAmOmZpcnN0LWNoaWxke1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuLnN0dWRlbnQtYXNzZXNzLWJveHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG50ZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgJjpmaXJzdC1jaGlsZHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoNntcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGNvbG9yOiAjOGI2N2IzO1xyXG4gICAgICBtYXJnaW46IDVweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tYmFkZ2V7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDRweDtcclxufVxyXG5cclxuLmJ1dHRvbi1pbm5lciB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5mbGV4LXNocmluazogMDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnotaW5kZXg6IDE7XHJcbmNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ 63158:
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.page.html ***!
  \*********************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/school-observation\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Palli Parvai</ion-title>\r\n    <!-- <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 4</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && emis_usertype1 == '1'\">L2 - 4</span> -->\r\n    <span class=\"header-span\">{{scrnNmbr}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card class=\"card-content\">\r\n    <ion-card-content>\r\n      <div class=\"student-assess-box\">\r\n        <div class=\"note-assess\">Number of students assessed</div>\r\n        <div class=\"note-assess\"><span style=\"font-size: 25px\">{{completedCount}}</span>\r\n          of {{tltStudentCount}} assessed</div>\r\n        <progress style=\"width: 100%\" max=\"{{tltStudentCount}}\" value=\"{{completedCount}}\"></progress>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"card-content scrl-tbl\">\r\n    <table>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Class</th>\r\n        <th>Subject</th>\r\n        <th>Status</th>\r\n      </tr>\r\n      <ng-container *ngIf=\"finalStuList\">\r\n        <tr *ngFor=\"let item of finalStuList let i =index\" (click)=\"findStudentToBeAssessed(item.id, item.isSkipped, item.isAssessed,item.subject_id, item.class_studying_id,i)\">\r\n          <td>\r\n            {{item.name}}\r\n            <!-- <h6>{{item.baseline_grade == '1' ? 'ARUMBU' : item.baseline_grade == '2' ? 'MOTTU' : 'MALAR'}}</h6> -->\r\n          </td>\r\n          <td>{{item.class_studying_id}} - {{item.student_class_section}}</td>\r\n          <td>{{item.subject}}</td>\r\n          <td><ion-badge [color]=\"item.assmnt_status == 'assessed' ? 'success' : item.assmnt_status == 'absent' ? 'warning' : 'danger'\">{{item.assmnt_status?item.assmnt_status:'Not assessed'}}</ion-badge></td>\r\n        </tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!finalStuList\">\r\n        <tr>\r\n          <td colspan=\"4\" style=\"text-align:center;\">Please close the app and login again or Please refresh the app</td>\r\n        </tr>\r\n      </ng-container>\r\n    </table>\r\n    <h5 style=\"padding:10px;text-align:center;\">{{this.errorMsg}}</h5>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer collapse=\"fade\" *ngIf=\"finalStuListss != null\">\r\n  <ion-toolbar class=\"ion-text-center\" style=\"--background: white !important;\">\r\n    <ion-grid>\r\n      <ion-row style=\"justify-content: space-around;\">\r\n        <!-- <ion-col *ngIf=\"groupingStatus != 'pending'\">\r\n          <ion-button (click)=\"generatePdf()\" class=\"btn-submit\" color=\"secondary\" expand=\"block\">\r\n            PDF</ion-button>\r\n        </ion-col> -->\r\n          <!-- <ion-button (click)=\"findStudentToBeAssessed()\" class=\"btn-primary\" color=\"success\"><span style=\"color:#fff;\">START ASSESSMENT</span></ion-button> -->\r\n          <ion-button (click)=\"studentlistoverAlert()\" [disabled]=\"overallsubmit\" class=\"btn-primary\"><span style=\"color:#fff;\">Complete Visit</span></ion-button>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-class-selection_summative-class-selecti-81fc52-es2015.js.map