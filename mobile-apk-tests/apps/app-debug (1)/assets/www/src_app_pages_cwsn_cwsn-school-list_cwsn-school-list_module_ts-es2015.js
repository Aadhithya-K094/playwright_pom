(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_cwsn-school-list_cwsn-school-list_module_ts"],{

/***/ 36825:
/*!********************************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-school-list/cwsn-school-list-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnSchoolListPageRoutingModule": function() { return /* binding */ CwsnSchoolListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cwsn_school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cwsn-school-list.page */ 43839);




const routes = [
    {
        path: '',
        component: _cwsn_school_list_page__WEBPACK_IMPORTED_MODULE_0__.CwsnSchoolListPage
    }
];
let CwsnSchoolListPageRoutingModule = class CwsnSchoolListPageRoutingModule {
};
CwsnSchoolListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CwsnSchoolListPageRoutingModule);



/***/ }),

/***/ 64047:
/*!************************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-school-list/cwsn-school-list.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnSchoolListPageModule": function() { return /* binding */ CwsnSchoolListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cwsn_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cwsn-school-list-routing.module */ 36825);
/* harmony import */ var _cwsn_school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cwsn-school-list.page */ 43839);







let CwsnSchoolListPageModule = class CwsnSchoolListPageModule {
};
CwsnSchoolListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cwsn_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnSchoolListPageRoutingModule
        ],
        declarations: [_cwsn_school_list_page__WEBPACK_IMPORTED_MODULE_1__.CwsnSchoolListPage]
    })
], CwsnSchoolListPageModule);



/***/ }),

/***/ 43839:
/*!**********************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-school-list/cwsn-school-list.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnSchoolListPage": function() { return /* binding */ CwsnSchoolListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_cwsn_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cwsn-school-list.page.html */ 61811);
/* harmony import */ var _cwsn_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cwsn-school-list.page.scss */ 68613);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);















let CwsnSchoolListPage = class CwsnSchoolListPage {
    constructor(navCtrl, router, http, route, alertService, userService, userSessionService, cwsnService, networkService, ionicstorage, uploadService) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.http = http;
        this.route = route;
        this.alertService = alertService;
        this.userService = userService;
        this.userSessionService = userSessionService;
        this.cwsnService = cwsnService;
        this.networkService = networkService;
        this.ionicstorage = ionicstorage;
        this.uploadService = uploadService;
        this.show = false;
        this.schoolList = [];
        this.items = [];
        this.itemHeight = 0;
        this.GovSchlList = [];
        this.fullAidSchoolList = [];
        this.parAidSchlList = [];
        this.GovSchlSort = [];
        this.fullyAidedSort = [];
        this.parAidSchlsort = [];
        this.studentList_Duplicate = [];
        this.fullyAided_Duplicate = [];
        this.partially_Duplicate = [];
        this.filterSchoolList = [];
        this.schoolListShow = true;
        this.sectionList = [];
        this.items = [
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false },
            { expanded: false }
        ];
        this.indexVal = 1;
    }
    ngOnInit() {
        this.userName = this.userSessionService.emis_username();
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        this.BlkdId = this.userSessionService.BlkdId();
        if (this.currNetWrkSts == 0) {
            this.ionicstorage.getData('studentlistGet').then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                if (data) {
                    this.studentchkdata = data;
                    this.studentpending = [];
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].Status == 2) {
                            this.studentpending.push(data[i]);
                        }
                    }
                    if (this.studentpending) {
                        this.finaldata = [];
                        for (let i = 0; i < this.studentpending.length; i++) {
                            if (this.studentpending[i].before_screening_photo) {
                                this.studentpending[i].before_screening_photo = yield this.uploadPhoto(this.studentpending[i].before_screening_photo);
                                this.studentpending[i].after_screening_photo = yield this.uploadPhoto(this.studentpending[i].after_screening_photo);
                                // this.studentpending[i].Status = 1
                                this.finaldata.push(this.studentpending[i]);
                            }
                        }
                        if (this.finaldata) {
                            this.movelive();
                        }
                        if (this.userName) {
                            this.userCheck();
                        }
                    }
                }
                else {
                    if (this.userName) {
                        this.userCheck();
                    }
                }
            }));
        }
        else {
            if (this.userName) {
                this.userCheck();
            }
        }
    }
    ionViewDidEnter() {
        this.schoolListShow = true;
        this.clsSecCounts = 0;
        this.userName = this.userSessionService.emis_username();
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        if (this.currNetWrkSts == 0) {
            this.ionicstorage.getData('studentlistGet').then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                if (data) {
                    this.studentchkdata = data;
                    this.studentpending = [];
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].Status == 2) {
                            this.studentpending.push(data[i]);
                        }
                    }
                    if (this.studentpending) {
                        this.finaldata = [];
                        for (let i = 0; i < this.studentpending.length; i++) {
                            if (this.studentpending[i].before_screening_photo) {
                                this.studentpending[i].before_screening_photo = yield this.uploadPhoto(this.studentpending[i].before_screening_photo);
                                this.studentpending[i].after_screening_photo = yield this.uploadPhoto(this.studentpending[i].after_screening_photo);
                                this.finaldata.push(this.studentpending[i]);
                            }
                        }
                        if (this.finaldata) {
                            this.movelive();
                        }
                        if (this.userName) {
                            this.userCheck();
                        }
                    }
                }
                // else{
                //   if(this.userName){
                //     this.userCheck();
                //   }
                // }
            }));
        }
        else {
            if (this.userName) {
                this.userCheck();
            }
        }
    }
    uploadPhoto(base64string) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            let expiry = 300;
            const base = base64string.split('base64,');
            const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_8__.base64StringToBlob)(base[1], 'image/jpg');
            if (blob.size <= 3145728) {
                if (this.currNetWrkSts == 0) {
                    console.log('1');
                    return this.uploadService.getSignedUrl(bucketName, 'jpg', 'jpg', expiry).toPromise().then((result) => {
                        if (result) {
                            this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                console.log('3');
                            });
                            return result.key;
                        }
                    });
                    console.log('4');
                }
            }
        });
    }
    movelive() {
        this.dataobj = [];
        this.finaldata;
        for (let i = 0; i < this.finaldata.length; i++) {
            if (this.finaldata[i]) {
                let obj = {
                    IndxId: "",
                    SchlId: this.finaldata[i].school_id,
                    StdntId: this.finaldata[i].id,
                    DisableType: this.finaldata[i].differently_abled,
                    ScrnDate: this.finaldata[i].screening_date,
                    BeforePhoto: this.finaldata[i].before_screening_photo,
                    BeforeLong: this.finaldata[i].longitude_before_screening,
                    BeforeLati: this.finaldata[i].latitude_before_screening,
                    AfterPhoto: this.finaldata[i].after_screening_photo,
                    AfterLong: this.finaldata[i].longitude_after_screening,
                    AftereLati: this.finaldata[i].latitude_after_screening,
                    StartTime: this.finaldata[i].start_time,
                    EndTime: this.finaldata[i].end_time,
                    Duration: this.finaldata[i].duration_intervention,
                    Ques1: this.finaldata[i].question1,
                    Ques2: this.finaldata[i].question2,
                    Ques3: this.finaldata[i].question3,
                };
                this.dataobj.push(obj);
            }
        }
        if (this.dataobj) {
            var data = {
                "records": this.dataobj
            };
            this.cwsnService.trackingQues(data).subscribe(data => {
                if (data.dataStatus == true) {
                    this.alertService.success(data.message);
                    this.ionicstorage.getData('studentlistGet').then((data) => {
                        if (data) {
                            this.studupdate = [];
                            for (let i = 0; i < data.length; i++) {
                                data[i].Status = 1;
                                this.studupdate.push(data[i]);
                            }
                            if (this.studupdate) {
                                this.ionicstorage.insertData_Replace('studentlistGet', this.studupdate);
                            }
                        }
                    });
                    this.router.navigate(["/tabs/cwsn/tracking-school-list"]);
                }
                else {
                    // this.alertService.error(data.message);
                }
            });
        }
    }
    userCheck() {
        this.spledutherachk = '';
        if (this.currNetWrkSts == 0) {
            this.cwsnService.FindSplEdu_Therpst(this.userName).subscribe(data => {
                this.spledutherachk = data.result;
                this.ionicstorage.insertData_Replace('spleduTherapist', data.result);
                if (this.spledutherachk == 2) {
                    this.homeBasedjson();
                }
                if (this.spledutherachk == 1) {
                    this.getBlockDetails();
                }
            });
        }
        else {
            this.ionicstorage.getData('spleduTherapist').then((data) => {
                if (data) {
                    this.spledutherachk = data;
                    if (this.spledutherachk == 2) {
                        this.homeBasedjson();
                    }
                    if (this.spledutherachk == 1) {
                        this.getBlockDetails();
                    }
                }
            }, (error) => console.error(error));
        }
    }
    navigateSchoolList(i) {
        if (this.indexVal == i) {
            this.indexVal = '';
        }
        else {
            this.indexVal = i;
        }
    }
    stuList(i) {
        let selectedList = i;
        let blockId = this.block_id;
        this.router.navigate(["/tabs/cwsn/tracking-stulist"], { queryParams: { 'studentdata': JSON.stringify(selectedList),
                'block_id': blockId } });
        console.log(this.schoolType, 'this.schoolType');
    }
    homeBasedjson() {
        if (this.currNetWrkSts == 0) {
            this.schoolTypeall = [];
            let schemeJson = 'https://d1wpyxz35bzzz4.cloudfront.net/Homebased_ie_studends_list.json';
            this.http.get(schemeJson).subscribe((data) => {
                this.schoolTypeall = data.Homebased_ie_studends_list;
                // this.schtype();
                if (this.schoolTypeall) {
                    this.schoolType = [];
                    for (let i = 0; i < this.schoolTypeall.length; i++) {
                        if (this.schoolTypeall[i].teacher_id == this.userName) {
                            this.schoolType.push(this.schoolTypeall[i]);
                        }
                    }
                    if (this.schoolType.length > 0) {
                        console.log(this.schoolType, "susus");
                        this.ionicstorage.insertData_Replace('sclType', this.schoolType);
                        this.schtype();
                    }
                }
            });
        }
        else {
            this.ionicstorage.getData('sclType').then((dataa1) => {
                if (dataa1) {
                    this.schoolType = dataa1;
                    console.log(this.schoolType, "susus1");
                    this.schtype();
                }
            }, (error) => console.error(error));
        }
    }
    therapistjson() {
        if (this.currNetWrkSts == 0) {
            this.schoolTypeall = [];
            let schemeJson = 'https://d1wpyxz35bzzz4.cloudfront.net/therapist_home_based_stud_list_json.json  ';
            this.http.get(schemeJson).subscribe((data) => {
                this.schoolTypeall = data.therapist_home_based_stud_list;
                // this.schtype();
                if (this.schoolTypeall) {
                    this.schoolType = [];
                    for (let i = 0; i < this.schoolTypeall.length; i++) {
                        if (this.schoolTypeall[i].block_id == this.block_id) {
                            this.schoolType.push(this.schoolTypeall[i]);
                        }
                    }
                    if (this.schoolType.length > 0) {
                        this.ionicstorage.insertData_Replace('sclType', this.schoolType);
                        this.schtype();
                    }
                }
            });
        }
        else {
            this.ionicstorage.getData('sclType').then((dataa1) => {
                if (dataa1) {
                    this.schoolType = dataa1;
                    this.schtype();
                }
            }, (error) => console.error(error));
        }
    }
    schtype() {
        if (this.schoolType.length > 0) {
            this.GovSchlList = [];
            this.fullAidSchoolList = [];
            this.parAidSchlsort = [];
            this.fullyAidedSort = [];
            for (let i = 0; i < this.schoolType.length; i++) {
                if (this.schoolType[i].school_type_id == 1) { //  government
                    this.GovSchlList.push(this.schoolType[i]);
                    // console.log(this.GovSchlList,"this.GovSchlList");
                    this.GovSchlSort = this.GovSchlList.map(l => {
                        return { block_id: l.block_id, class_section: l.class_section, class_studying_id: l.class_studying_id, da_name: l.da_name, differently_abled: l.differently_abled, id: l.id, name: l.name, school_id: l.school_id,
                            school_name: l.school_name, school_type_id: l.school_type_id, udise_code: l.udise_code, user_id: l.user_id
                        };
                    });
                    this.GovSchlSort.sort((a, b) => {
                        if (a.school_name < b.school_name)
                            return -1;
                        if (a.school_name > b.school_name)
                            return 1;
                        return 0;
                    });
                    this.studentList_Duplicate = this.GovSchlSort.filter((value, index, self) => index === self.findIndex((t) => (t.school_name === value.school_name && t.school_name == value.school_name)));
                }
                if (this.schoolType[i].school_type_id == 2) { //fully-aided
                    this.fullAidSchoolList.push(this.schoolType[i]);
                    this.fullyAidedSort = this.fullAidSchoolList.map(l => {
                        return { block_id: l.block_id, class_section: l.class_section, class_studying_id: l.class_studying_id, da_name: l.da_name, differently_abled: l.differently_abled, id: l.id, name: l.name, school_id: l.school_id,
                            school_name: l.school_name, school_type_id: l.school_type_id, udise_code: l.udise_code, user_id: l.user_id
                        };
                    });
                    this.fullyAidedSort.sort((a, b) => {
                        if (a.school_name < b.school_name)
                            return -1;
                        if (a.school_name > b.school_name)
                            return 1;
                        return 0;
                    });
                    this.fullyAided_Duplicate = this.fullyAidedSort.filter((value, index, self) => index === self.findIndex((t) => (t.school_name === value.school_name && t.school_name == value.school_name)));
                }
                if (this.schoolType[i].school_type_id == 4) { // partially-aided
                    this.parAidSchlList.push(this.schoolType[i]);
                    this.parAidSchlsort = this.parAidSchlList.map(l => {
                        return { block_id: l.block_id, class_section: l.class_section, class_studying_id: l.class_studying_id, da_name: l.da_name, differently_abled: l.differently_abled, id: l.id, name: l.name, school_id: l.school_id,
                            school_name: l.school_name, school_type_id: l.school_type_id, udise_code: l.udise_code, user_id: l.user_id
                        };
                    });
                    this.parAidSchlsort.sort((a, b) => {
                        if (a.school_name < b.school_name)
                            return -1;
                        if (a.school_name > b.school_name)
                            return 1;
                        return 0;
                    });
                    this.partially_Duplicate = this.parAidSchlsort.filter((value, index, self) => index === self.findIndex((t) => (t.school_name === value.school_name && t.school_name == value.school_name)));
                }
            }
            console.log(this.GovSchlSort, "GovSchlSort");
            console.log(this.fullyAidedSort, " this.parAidSchlsort");
            console.log(this.parAidSchlsort, " this.parAidSchlsort");
        }
    }
    getBlockDetails() {
        if (this.currNetWrkSts == 0) {
            var getOoscUserDetails = [];
            this.userService.getOoscUserDetails(this.userName).subscribe(res => {
                if (res.dataStatus == true) {
                    getOoscUserDetails = res.result;
                    if (getOoscUserDetails.length > 0) {
                        this.block_id = getOoscUserDetails[0].TeacherBlockId;
                        this.ionicstorage.insertData_Replace('blkId', this.block_id);
                        this.therapistjson();
                    }
                }
                else {
                    this.alertService.error("Something went wrong");
                }
            });
        }
        else {
            this.ionicstorage.getData('blkId').then((dataa1) => {
                if (dataa1) {
                    this.block_id = dataa1;
                    this.therapistjson();
                }
            }, (error) => console.error(error));
        }
    }
    goBack() {
        console.log(this.schoolListShow, "ooo");
        if (this.schoolListShow) {
            this.router.navigate(['/tabs/cwsn/dashboard']);
        }
        else {
            if (this.clsSecCounts == 1) {
                this.clsSecCounts = 0;
            }
            else {
                this.schoolListShow = true;
            }
        }
    }
    schoolSelected(item, val) {
        this.filterSchoolList = [];
        if (val == 1) {
            this.filterSchoolList = this.GovSchlList.filter((value) => (value.school_id == item.school_id));
        }
        if (val == 2) {
            this.filterSchoolList = this.fullAidSchoolList.filter((value) => (value.school_id == item.school_id));
        }
        if (val == 3) {
            this.filterSchoolList = this.parAidSchlList.filter((value) => (value.school_id == item.school_id));
        }
        if (this.filterSchoolList) {
            this.filterSchoolList = this.filterSchoolList.filter((value, index, self) => index === self.findIndex((t) => (t.class_studying_id === value.class_studying_id && t.class_section == value.class_section)));
            this.schoolListShow = false;
        }
        // this.router.navigate(['/tabs/cwsn-question-list'],{queryParams:{school_name:item.school_name,school_id:item.school_id}});
    }
    classSelected(val) {
        this.classId = val.class_studying_id;
        this.clsSecCounts = 1;
        this.schooltypeId = val.school_type_id;
        if (this.schooltypeId == 1 || this.schooltypeId == 2 || this.schooltypeId == 4) {
            this.sectionList = [];
            for (let i = 0; i < this.filterSchoolList.length; i++) {
                if (this.filterSchoolList[i].class_studying_id == this.classId) {
                    this.sectionList.push(this.filterSchoolList[i]);
                }
            }
        }
    }
    secSelected(data) {
        console.log(data, 'data', this.filterSchoolList);
        this.router.navigate(['/tabs/cwsn-question-list'], { queryParams: { school_name: data.school_name, school_id: data.school_id, class_id: this.classId, section_id: data.class_section, 'school_list': JSON.stringify(this.filterSchoolList) } });
    }
};
CwsnSchoolListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_9__.UploadService }
];
CwsnSchoolListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-cwsn-school-list',
        template: _raw_loader_cwsn_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cwsn_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CwsnSchoolListPage);



/***/ }),

/***/ 68613:
/*!************************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-school-list/cwsn-school-list.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design, .header-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.class-section {\n  border-radius: 10px;\n  padding: 10px 20px;\n  justify-content: center;\n  border-left: 4px solid #8B66B3 !important;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.header-data .sync-icon .icon {\n  font-size: 30px;\n}\n\n.card-align .cards .card-design {\n  border-radius: 10px;\n  padding: 10px 20px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(2) {\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(3) {\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(4) {\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .totalSch {\n  color: #6261cb;\n}\n\n.card-align .cards .totalStu {\n  color: #04c03d;\n}\n\n.card-align .cards .totalUnscreenStu {\n  color: var(--unscreened-text-color);\n}\n\n.card-align .cards .newlyStu {\n  color: var(--primary-text-color);\n}\n\n.card-align .search-result .search-box {\n  padding: 0;\n  --background: #fff;\n}\n\n.card-align .search-result .search-data {\n  border-radius: 15px;\n  border: 1px solid #ffffff;\n}\n\n.card-align .search-result .search-data .school-list {\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n\n.card-align .search-result .search-data .school-list .school-list__icon {\n  color: #C8E6C9;\n  font-size: 24px;\n}\n\n.card-align .search-result .search-data:last-child {\n  margin-bottom: 0;\n}\n\n.dataNotFound {\n  text-align: center;\n  padding: 10px 0;\n  font-size: 16px;\n}\n\n.screened {\n  color: var(--screened-text-color) !important;\n}\n\n.unScreened {\n  color: var(--unscreened-text-color) !important;\n}\n\n.checkImg {\n  width: 25px;\n}\n\n.checkAndR {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.cardrow {\n  text-align: center;\n  padding: 3%;\n  font-weight: bold;\n}\n\n.card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.card-align {\n  min-height: 94%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  border-left: 8px solid var(--border-color-left);\n  border-right: 1px solid #fff;\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 25px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background-color: var(--icon-color);\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.header-data, .card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align .cards .card-design {\n  margin-right: 9px;\n  margin-left: 9px;\n  border-radius: 10px;\n  padding: 10px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  word-wrap: break-word;\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN3c24tc2Nob29sLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFnQkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5Q0FBQTtBQWJKOztBQWdCRTtFQUNFLGtDQUFBO0FBYko7O0FBZ0JFO0VBQ0UsK0JBQUE7QUFiSjs7QUFnQkU7RUFDRSx3Q0FBQTtBQWJKOztBQW1CVTtFQUNJLGVBQUE7QUFoQmQ7O0FBeUJRO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUF0QlY7O0FBd0JVO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQXRCZDs7QUF1Qlk7RUFDRSxlQUFBO0FBckJkOztBQXVCWTtFQUNFLGlCQUFBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBckJoQjs7QUF3QlU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXRCZDs7QUF1Qlk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXJCZDs7QUF5Qk07RUFDRSxhQUFBO0VBRUEsdUNBQUE7RUFDQSwwQ0FBQTtBQXhCUjs7QUEwQk07RUFFRSx1Q0FBQTtFQUNBLDBDQUFBO0FBekJSOztBQTJCTTtFQUVFLHVDQUFBO0VBQ0EsMENBQUE7QUExQlI7O0FBNEJNO0VBR0UsdUNBQUE7RUFDQSwwQ0FBQTtBQTVCUjs7QUFtQ007RUFBWSxjQUFBO0FBaENsQjs7QUFpQ007RUFBWSxjQUFBO0FBOUJsQjs7QUErQk07RUFBb0IsbUNBQUE7QUE1QjFCOztBQTZCTTtFQUFZLGdDQUFBO0FBMUJsQjs7QUFpQ1E7RUFHRSxVQUFBO0VBQ0Esa0JBQUE7QUFqQ1Y7O0FBbUNRO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQWpDVjs7QUFtQ1U7RUFDRSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBakNaOztBQWtDWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBaENkOztBQW9DUTtFQUNFLGdCQUFBO0FBbENWOztBQXVDSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFwQ047O0FBd0NFO0VBQ0UsNENBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UsOENBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UsV0FBQTtBQXJDSjs7QUF3Q0U7RUFDRSxhQUFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBckNOOztBQXdDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBckNKOztBQXdDRTtFQUNFLG1CQUFBO0FBckNKOztBQTBDRTtFQUNFLGtDQUFBO0FBdkNKOztBQTBDRTtFQUNFLCtCQUFBO0FBdkNKOztBQTBDRTtFQUNFLHdDQUFBO0FBdkNKOztBQTJDRTtFQUVFLGVBQUE7QUF6Q0o7O0FBNENNO0VBQ0UsOENBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQTFDUjs7QUE2Q1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBM0NWOztBQTRDVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBMUNaOztBQThDUTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7QUE3Q1Y7O0FBOENVO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUE1Q1o7O0FBaURNO0VBQ0UsYUFBQTtBQS9DUjs7QUFrRE07RUFDRSxnQkFBQTtBQWhEUjs7QUF1REE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBcERKOztBQXVERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBcERKOztBQXdFUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDRixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQXJFVjs7QUF1RVU7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFyRWQ7O0FBc0VZO0VBQ0UsZUFBQTtBQXBFZDs7QUFzRVk7RUFFRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBckVoQjs7QUF3RVU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXRFZDs7QUF1RVk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXJFZDs7QUF5RU07RUFDRSxhQUFBO0VBRUEsdUNBQUE7RUFDQSwwQ0FBQTtBQXhFUiIsImZpbGUiOiJjd3NuLXNjaG9vbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4lY2FyZC1sYXlvdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgJWJhc2UtbGF5b3V0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gICVjbGFzcy1zZWN0aW9uLWNhcmQtb3V0ZXItZGVzaWdue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjOEI2NkIzICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICVjbGFzcy1zZWN0aW9uLWNhcmQtaW5uZXItZGVzaWdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2xhc3Mtc2VjdGlvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItZGF0YXtcclxuICAgICAgQGV4dGVuZCAlYmFzZS1sYXlvdXQ7XHJcbiAgICAgIC5zeW5jLWljb257XHJcbiAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgICAuY2FyZC1hbGlnbntcclxuICAgICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgICAgIC5jYXJkc3tcclxuICAgICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC5jYXJkLWRlc2lnbntcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gICAgICAgICAgLmNhcmQtdGV4dHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgLnRvdGFsQ291bnRMYWJlbHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNjaG9vbG5hbWVze1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW1hZ2Utb3V0ZXJ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgxKXsgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAvLyBib3JkZXItbGVmdDogNnB4IHNvbGlkICM2MjYxY2I7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDIpeyBcclxuICAgICAgICAvLyBib3JkZXItbGVmdDogNnB4IHNvbGlkICMwNGMwM2Q7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDsgXHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgzKXsgXHJcbiAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS11bnNjcmVlbmVkLXRleHQtY29sb3IpO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCg0KXsgXHJcbiAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDBBMEEwO1xyXG4gICAgICAgIC8vIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC8vIC5jYXJkLWFsaWduOmxhc3QtY2hpbGR7XHJcbiAgICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDQpeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICM4QjY2QjM7IH1cclxuICAgICAgXHJcbiAgICAgIC50b3RhbFNjaHsgIGNvbG9yOiAjNjI2MWNiOyAgfVxyXG4gICAgICAudG90YWxTdHV7ICBjb2xvcjogIzA0YzAzZDsgIH1cclxuICAgICAgLnRvdGFsVW5zY3JlZW5TdHV7ICBjb2xvcjogdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKTsgIH1cclxuICAgICAgLm5ld2x5U3R1eyAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7ICB9XHJcbiAgICAgIC8vIC5uZXdseVN0dXsgIGNvbG9yOiAjMDBBMEEwOyAgfVxyXG4gICAgICAvLyAubmV3bHlTdHV7ICBjb2xvcjogIzhCNjZCMzsgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBzZWFyY2ggcmVzdWx0XHJcbiAgICAgIC5zZWFyY2gtcmVzdWx0e1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xyXG4gICAgICAgIC5zZWFyY2gtYm94e1xyXG4gICAgICAgICAgLy8gcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAvLyBwYWRkaW5nOiAwIDExcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWRhdGF7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIC5zY2hvb2wtbGlzdHsgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIC5zY2hvb2wtbGlzdF9faWNvbntcclxuICAgICAgICAgICAgICBjb2xvcjogI0M4RTZDOTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1kYXRhOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRhdGFOb3RGb3VuZHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICBcclxuICBcclxuICAuc2NyZWVuZWQge1xyXG4gICAgY29sb3I6IHZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC51blNjcmVlbmVkIHsgICAgXHJcbiAgICBjb2xvcjogdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY2hlY2tJbWcge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja0FuZFIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkcm93IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAlY2FyZC1sYXlvdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8vIG1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgLy8gYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWFsaWdue1xyXG4gICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgICBtaW4taGVpZ2h0OiA5NCU7XHJcbiAgICAuY2FyZHMge1xyXG4gICAgICAvLyBwYWRkaW5nOiAxMHB4OyBzZWNvbmRheS1jb2xvclxyXG4gICAgICAuY2x1c3Rlci1kZXNpZ24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3ItbGVmdCk7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIC8vIG1hcmdpbjogMTJweCAwO1xyXG4gICAgICAgLy8gbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgIC5jbHVzdGVyLXRleHQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuaWNvbi1vdXRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgIC5pY29uLWlubmVye1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpb24tY2FyZDpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgaW9uLWNhcmQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICBcclxuICB9XHJcbiBcclxuJWNhcmQtbGF5b3V0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICViYXNlLWxheW91dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAlY2xhc3Mtc2VjdGlvbi1jYXJkLW91dGVyLWRlc2lnbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgXHJcbiAgICAuY2FyZC1hbGlnbntcclxuICAgICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgICAgIC5jYXJkc3tcclxuICAgICAgICAuY2FyZC1kZXNpZ257XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgQGV4dGVuZCAlYmFzZS1sYXlvdXQ7XHJcbiAgICAgICAgICAuY2FyZC10ZXh0e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLnRvdGFsQ291bnRMYWJlbHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNjaG9vbG5hbWVze1xyXG4gICAgICAgICAgICAgIC8vIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbWFnZS1vdXRlcntcclxuICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDEpeyBcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIC8vIGJvcmRlci1sZWZ0OiA2cHggc29saWQgZGFya2JsdWU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4iXX0= */");

/***/ }),

/***/ 61811:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/cwsn-school-list/cwsn-school-list.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\" *ngIf=\"schoolListShow\">List of Schools</ion-title>\r\n    <ion-title class=\"pt-15\" *ngIf=\"!schoolListShow\">Class & Section</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"schoolListShow\">\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards ion-card-inside-padding\">\r\n      <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(1)\">\r\n        <div class=\"cluster-text\">\r\n          <span  style=\"font-size: medium;\"><b>Government</b></span>\r\n          <div class=\"icon-outer\">\r\n          <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != 1\"></ion-icon>\r\n          <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == 1\" name=\"remove-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n      <div *ngIf=\"indexVal == 1\"> \r\n        <ng-container *ngFor=\"let item1 of studentList_Duplicate\">\r\n          <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"schoolSelected(item1,1)\">\r\n            <div class=\"card-text\">\r\n              <ion-label class=\"schoolnames\">{{item1.school_name}}</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ng-container>\r\n      </div>\r\n      <div *ngIf=\"GovSchlSort.length == 0 && indexVal == 1\">\r\n        <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n          <div class=\"card-text\">\r\n            <ion-label class=\"schoolnames\">No Data Found</ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n      <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(2)\">\r\n        <div class=\"cluster-text\">\r\n          <span style=\"font-size: medium;\"><b>Fully Aided</b></span>\r\n          <div class=\"icon-outer\">\r\n          <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != 2\"></ion-icon>\r\n          <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == 2\" name=\"remove-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n      <div *ngIf=\"indexVal == 2\">\r\n          <ng-container *ngFor=\"let item2 of fullyAided_Duplicate\">\r\n          <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"schoolSelected( item2,2)\">\r\n            <div class=\"card-text\">\r\n              <ion-label class=\"schoolnames\">{{item2.school_name}}</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ng-container>\r\n      </div>\r\n      <div *ngIf=\"fullyAidedSort.length == 0 && indexVal == 2\">\r\n        <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n          <div class=\"card-text\">\r\n            <ion-label class=\"schoolnames\">No Data Found</ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n      <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(3)\">\r\n        <div class=\"cluster-text\">\r\n          <span style=\"font-size: medium;\"><b>Partially Aided</b></span>\r\n          <div class=\"icon-outer\">\r\n          <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != 3\"></ion-icon>\r\n          <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == 3\" name=\"remove-outline\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n      <div *ngIf=\"indexVal == 3\">\r\n          <ng-container  *ngFor=\"let item3 of partially_Duplicate; let i = index\">\r\n          <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"schoolSelected(item3,3)\">\r\n            <div class=\"card-text\">\r\n              <ion-label class=\"schoolnames\">{{item3.school_name}}</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ng-container>\r\n      </div>\r\n      <div *ngIf=\"parAidSchlsort.length == 0 && indexVal == 3\">\r\n        <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n          <div class=\"card-text\">\r\n            <ion-label class=\"schoolnames\">No Data Found</ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </div>\r\n    </div>     \r\n  </ion-card>   \r\n</ion-content>\r\n<ion-content *ngIf=\"!schoolListShow\">\r\n  <div class=\"classSmallCards\" *ngIf=\"clsSecCounts!=1\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" *ngFor=\"let class of filterSchoolList\">\r\n        <ion-card class=\"classcard class-section\" (click)=\"classSelected(class)\">\r\n          <div class=\"text-center\">\r\n            <ion-label class=\"classText\">{{ class.class_studying_id == 1 ? 'I' : class.class_studying_id == 2 ? 'II' :\r\n              class.class_studying_id == 3 ? 'III' : class.class_studying_id == 4 ? 'IV' : class.class_studying_id == 5 ? 'V' :\r\n              class.class_studying_id == 6 ? 'VI' : class.class_studying_id == 7 ? 'VII' : class.class_studying_id == 8 ? 'VIII' :\r\n              class.class_studying_id == 9 ? 'IX' : class.class_studying_id == 10 ? 'X' : class.class_studying_id == 11 ? 'XI' :\r\n              class.class_studying_id == 12 ? 'XII' : ''}}</ion-label><br>\r\n            <ion-label class=\"classNo\">Std</ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div class=\"classSmallCards\" *ngIf=\"clsSecCounts==1\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" *ngFor=\"let class of sectionList\">\r\n        <ion-card class=\"classcard class-section\" (click)=\"secSelected(class)\">\r\n          <div class=\"text-center\">\r\n            <ion-label class=\"classText\">{{ class.class_section }}</ion-label><br>\r\n            <ion-label class=\"classNo\">Sec</ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_cwsn-school-list_cwsn-school-list_module_ts-es2015.js.map