(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_tracking-school-list_tracking-school-list_module_ts"],{

/***/ 88805:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-school-list/tracking-school-list-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingSchoolListPageRoutingModule": function() { return /* binding */ TrackingSchoolListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tracking_school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracking-school-list.page */ 3108);




const routes = [
    {
        path: '',
        component: _tracking_school_list_page__WEBPACK_IMPORTED_MODULE_0__.TrackingSchoolListPage
    }
];
let TrackingSchoolListPageRoutingModule = class TrackingSchoolListPageRoutingModule {
};
TrackingSchoolListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrackingSchoolListPageRoutingModule);



/***/ }),

/***/ 38105:
/*!********************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-school-list/tracking-school-list.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingSchoolListPageModule": function() { return /* binding */ TrackingSchoolListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tracking_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracking-school-list-routing.module */ 88805);
/* harmony import */ var _tracking_school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracking-school-list.page */ 3108);







let TrackingSchoolListPageModule = class TrackingSchoolListPageModule {
};
TrackingSchoolListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tracking_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackingSchoolListPageRoutingModule
        ],
        declarations: [_tracking_school_list_page__WEBPACK_IMPORTED_MODULE_1__.TrackingSchoolListPage]
    })
], TrackingSchoolListPageModule);



/***/ }),

/***/ 3108:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-school-list/tracking-school-list.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingSchoolListPage": function() { return /* binding */ TrackingSchoolListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_tracking_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tracking-school-list.page.html */ 27322);
/* harmony import */ var _tracking_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracking-school-list.page.scss */ 89862);
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















let TrackingSchoolListPage = class TrackingSchoolListPage {
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
    //  ionViewDidEnter() {
    //   this.userName = this.userSessionService.emis_username();
    //   this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
    //   if(this.currNetWrkSts == 0){
    //     this.ionicstorage.getData('studentlistGet').then(
    //     async(data) => {
    //       if(data){
    //         this.studentchkdata = data;
    //         this.studentpending =[]
    //         for(let i=0;i<data.length;i++){
    //           if(data[i].Status == 2){
    //             this.studentpending.push(data[i]);
    //           }
    //         }
    //         if(this.studentpending){
    //           this.finaldata = []
    //           for(let i=0;i<this.studentpending.length;i++){
    //             if(this.studentpending[i].before_screening_photo){
    //               this.studentpending[i].before_screening_photo = await this.uploadPhoto(this.studentpending[i].before_screening_photo);
    //               this.studentpending[i].after_screening_photo = await this.uploadPhoto(this.studentpending[i].after_screening_photo);
    //               this.finaldata.push(this.studentpending[i])
    //             }
    //           }
    //           if(this.finaldata){
    //             this.movelive()
    //           }
    //           if(this.userName){
    //             this.userCheck();
    //           }
    //         }
    //       }
    //       // else{
    //       //   if(this.userName){
    //       //     this.userCheck();
    //       //   }
    //       // }
    //     })
    //   }
    //   else{
    //     if(this.userName){
    //       this.userCheck();
    //     }
    //   }
    //  }
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
    goBack() {
        this.router.navigate(["/tabs/cwsn/dashboard"]);
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
};
TrackingSchoolListPage.ctorParameters = () => [
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
TrackingSchoolListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-tracking-school-list',
        template: _raw_loader_tracking_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tracking_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrackingSchoolListPage);



/***/ }),

/***/ 89862:
/*!********************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-school-list/tracking-school-list.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.card-align {\n  min-height: 94%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  border-left: 8px solid var(--border-color-left);\n  border-right: 1px solid #fff;\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 25px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background-color: var(--icon-color);\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align .cards .card-design {\n  margin-right: 9px;\n  margin-left: 9px;\n  border-radius: 10px;\n  padding: 10px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  word-wrap: break-word;\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLXNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBSUU7RUFDRSxrQ0FBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7QUFESjs7QUFJRTtFQUNFLHdDQUFBO0FBREo7O0FBS0U7RUFFRSxlQUFBO0FBSEo7O0FBTU07RUFDRSw4Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBSlI7O0FBT1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBTFY7O0FBTVU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUpaOztBQVFRO0VBQ0UsWUFBQTtFQUNBLG1DQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtBQVBWOztBQVFVO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFOWjs7QUFXTTtFQUNFLGFBQUE7QUFUUjs7QUFZTTtFQUNFLGdCQUFBO0FBVlI7O0FBaUJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQWRKOztBQWlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBZEo7O0FBa0NRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNGLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FBL0JWOztBQWlDVTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQS9CZDs7QUFnQ1k7RUFDRSxlQUFBO0FBOUJkOztBQWdDWTtFQUVFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUEvQmhCOztBQWtDVTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBaENkOztBQWlDWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBL0JkOztBQW1DTTtFQUNFLGFBQUE7RUFFQSx1Q0FBQTtFQUNBLDBDQUFBO0FBbENSIiwiZmlsZSI6InRyYWNraW5nLXNjaG9vbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVjYXJkLWxheW91dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgLy8gbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAvLyBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcilcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYWxpZ257XHJcbiAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAgIG1pbi1oZWlnaHQ6IDk0JTtcclxuICAgIC5jYXJkcyB7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDEwcHg7IHNlY29uZGF5LWNvbG9yXHJcbiAgICAgIC5jbHVzdGVyLWRlc2lnbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1sZWZ0KTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDsgXHJcbiAgICAgICAgLy8gbWFyZ2luOiAxMnB4IDA7XHJcbiAgICAgICAvLyBtYXJnaW46IDE2cHg7XHJcbiAgICAgICAgLmNsdXN0ZXItdGV4dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5pY29uLW91dGVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgLmljb24taW5uZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1jYXJkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpb24tY2FyZDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuIFxyXG4lY2FyZC1sYXlvdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgJWJhc2UtbGF5b3V0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gICVjbGFzcy1zZWN0aW9uLWNhcmQtb3V0ZXItZGVzaWdue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjOEI2NkIzICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiBcclxuICBcclxuICBcclxuICAgIC5jYXJkLWFsaWdue1xyXG4gICAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAgICAgLmNhcmRze1xyXG4gICAgICAgIC5jYXJkLWRlc2lnbntcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICBAZXh0ZW5kICViYXNlLWxheW91dDtcclxuICAgICAgICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAudG90YWxDb3VudExhYmVse1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2Nob29sbmFtZXN7XHJcbiAgICAgICAgICAgICAgLy8gd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmltYWdlLW91dGVye1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoMSl7IFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBkYXJrYmx1ZTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiJdfQ== */");

/***/ }),

/***/ 27322:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/tracking-school-list/tracking-school-list.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of Schools</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards ion-card-inside-padding\">\r\n        \r\n          <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(1)\">\r\n          <div class=\"cluster-text\">\r\n           <span  style=\"font-size: medium;\"><b>Government</b></span>\r\n           <div class=\"icon-outer\">\r\n            <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != 1\"></ion-icon>\r\n            <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == 1\" name=\"remove-outline\"></ion-icon>\r\n           </div>\r\n          </div>\r\n        </ion-card>\r\n             <div *ngIf=\"indexVal == 1\"> \r\n              <ng-container *ngFor=\"let item1 of studentList_Duplicate\">\r\n              <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"stuList(item1)\">\r\n                <div class=\"card-text\">\r\n                 <ion-label class=\"schoolnames\">{{item1.school_name}}</ion-label>\r\n                </div>\r\n              </ion-card>\r\n            </ng-container>\r\n          </div>\r\n          <div *ngIf=\"GovSchlSort.length == 0 && indexVal == 1\">\r\n            <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n              <div class=\"card-text\">\r\n               <ion-label class=\"schoolnames\">No Data Found</ion-label>\r\n              </div>\r\n            </ion-card>\r\n          </div>\r\n\r\n          \r\n          <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(2)\">\r\n            <div class=\"cluster-text\">\r\n             <span style=\"font-size: medium;\"><b>Fully Aided</b></span>\r\n             <div class=\"icon-outer\">\r\n              <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != 2\"></ion-icon>\r\n              <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == 2\" name=\"remove-outline\"></ion-icon>\r\n             </div>\r\n            </div>\r\n          </ion-card>\r\n              <div *ngIf=\"indexVal == 2\">\r\n                 <ng-container *ngFor=\"let item2 of fullyAided_Duplicate\">\r\n                  <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"stuList( item2)\">\r\n                    <div class=\"card-text\">\r\n                     <ion-label class=\"schoolnames\">{{item2.school_name}}</ion-label>\r\n                    </div>\r\n                  </ion-card>\r\n                </ng-container>\r\n              </div>\r\n              <div *ngIf=\"fullyAidedSort.length == 0 && indexVal == 2\">\r\n                <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n                  <div class=\"card-text\">\r\n                   <ion-label class=\"schoolnames\">No Data Found</ion-label>\r\n                  </div>\r\n                </ion-card>\r\n              </div>\r\n\r\n\r\n\r\n\r\n           <ion-card class=\"cluster-design ion-card-margin-top-bottom\" (click)=\"navigateSchoolList(3)\">\r\n              <div class=\"cluster-text\">\r\n               <span style=\"font-size: medium;\"><b>Partially Aided</b></span>\r\n               <div class=\"icon-outer\">\r\n                <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != 3\"></ion-icon>\r\n                <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == 3\" name=\"remove-outline\"></ion-icon>\r\n               </div>\r\n              </div>\r\n            </ion-card>\r\n                <div *ngIf=\"indexVal == 3\">\r\n                   <ng-container  *ngFor=\"let item3 of partially_Duplicate; let i = index\">\r\n                    <ion-card class=\"card-design ion-card-margin-top-bottom\" (click)=\"stuList(item3)\">\r\n                      <div class=\"card-text\">\r\n                       <ion-label class=\"schoolnames\">{{item3.school_name}}</ion-label>\r\n                      </div>\r\n                    </ion-card>\r\n                  </ng-container>\r\n                </div>\r\n                <div *ngIf=\"parAidSchlsort.length == 0 && indexVal == 3\">\r\n                  <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n                    <div class=\"card-text\">\r\n                     <ion-label class=\"schoolnames\">No Data Found</ion-label>\r\n                    </div>\r\n                  </ion-card>\r\n                </div>\r\n              </div>     \r\n         </ion-card>   \r\n         </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_tracking-school-list_tracking-school-list_module_ts-es2015.js.map