(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_dashboardc_dashboardc_module_ts"],{

/***/ 52762:
/*!***************************************************************!*\
  !*** ./src/app/pages/tnvn/dashboardc/dashboardc.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardcComponent": function() { return /* binding */ DashboardcComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dashboardc_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboardc.component.html */ 77069);
/* harmony import */ var _dashboardc_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboardc.component.scss */ 74052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/post.service */ 62538);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/navigation/navigation.component */ 60006);
/* harmony import */ var src_app_components_dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/dashboardmodal/dashboardmodal.component */ 94926);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/keyboard/ngx */ 74628);
/* harmony import */ var src_app_components_schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/schoolListModal/schoollistmodal.component */ 97759);
/* harmony import */ var src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/apiErrorLog/apiErrorLog.component */ 98747);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 34255);
/* harmony import */ var _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pp-mark-attendance/pp-mark-attendance.page */ 39448);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);





























let DashboardcComponent = class DashboardcComponent {
    constructor(loading, modalController, geolocation, _apiService, _postService, _router, route, keyboard, userSessionService, camera, alertController, ionicStore, _alertService, _translate, http, storage, platform, file, alertService, uploadService, diagnostic, networkService, androidPermissions) {
        this.loading = loading;
        this.modalController = modalController;
        this.geolocation = geolocation;
        this._apiService = _apiService;
        this._postService = _postService;
        this._router = _router;
        this.route = route;
        this.keyboard = keyboard;
        this.userSessionService = userSessionService;
        this.camera = camera;
        this.alertController = alertController;
        this.ionicStore = ionicStore;
        this._alertService = _alertService;
        this._translate = _translate;
        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.file = file;
        this.alertService = alertService;
        this.uploadService = uploadService;
        this.diagnostic = diagnostic;
        this.networkService = networkService;
        this.androidPermissions = androidPermissions;
        this.lname = "";
        this.inspectionType = 1;
        this.blockListData = [];
        this.observedSchoolList = []; //=[{"cluster_name":"CHS IRUSAPPA STREET","observed_count":"43"},{"cluster_name":"GOVT. MODEL GHSS TRIPLICANE","observed_count":"14"},{"cluster_name":"CHSS LLOYDS ROAD","observed_count":"7"},{"cluster_name":"CHENNAI GIRLS HR.SEC.SCHOOL -  NUNGAMBAKKAM","observed_count":"11"},{"cluster_name":"GOVT HOBART MUSLIM GIRLS HIGHER SECONDARY SCHOOL","observed_count":"6"},{"cluster_name":"LADY WILLINGTON HIGHER SECONDARY SCHOOL","observed_count":"8"},{"cluster_name":"GOVT HSS NANDANAM","observed_count":"4"},{"cluster_name":"CHSS ALWARPET","observed_count":"5"}];
        this.districtfinalDataList = [];
        this.blockfinalListData = [];
        this.schoolmanageData = [];
        this.daily_school_count = 0;
        this.daily_class_count = 0;
        this.daily_school_target = 0;
        this.daily_class_target = 0;
        this.inspectionList = [{ "inspection_id": 1, "inspection_name": "School inspection" }, { "inspection_id": 2, "inspection_name": "Classroom observation" }];
        this.allSchoolList = [];
        this.BlockList = [];
        this.visitedSchoolList = [];
        this.unVisitedSchoolList = [];
        this.selectedSchool = {};
        this.visitedcount = 0;
        this.classTarget = 0;
        this.currentDate = "";
        this.schoolReasons = [];
        this.schoolReasonList = [];
        this.veracityList = [];
        this.sample = false;
        this.masterApiResponse = {};
        this.isKeyboardHide = true;
        this.settingRole = [];
        this.isLocVerified = false;
        this.isLtLngVerified = false;
        this.ppSchBaseDetails = [];
        this.appLanguage = () => {
            this._apiService.languageInfo.subscribe((data) => {
                this.languageType = data;
                this._translate.use(this.languageType);
                this._initialiseTranslation();
                this.inspectionList = [{ "inspection_id": 1, "inspection_name": this.schoolObservation }, { "inspection_id": 2, "inspection_name": this.classroomVerfication }];
            });
        };
        this.getBlockList = () => {
            this.loading.present();
            const userName = localStorage.getItem("username");
            let userDetail = {
                username: userName,
                district_id: this.district_id
            };
            this._apiService.getBlockList(userDetail).subscribe((response) => {
                this.BlockList = response.records.blocklist;
                this.loading.dismiss();
            }, (error) => {
                this.loading.dismiss();
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
        };
        this.gotoinspection = () => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            this.isKeyboardHide = true;
            if (this.inspectionType) {
                if (this.inspectionType == 1) {
                    localStorage.setItem("veracity_type", "inspection");
                }
                else if (this.inspectionType == 2) {
                    localStorage.setItem("veracity_type", "veracity");
                }
            }
            let logData = {
                username: localStorage.getItem("username"),
                udise_code: this.udise_code,
                form_name: "UDISE Code entry",
                action_name: "On Submit",
                data: "Entered udise code : " + this.udise_code,
                completion_percentage: "0"
            };
            this._apiService.setActivityLog(logData).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            this.loading.present("Getting School Info");
            yield this._apiService.getSchoolDetails(this.udise_code).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
                this.loading.dismiss();
                if (!data.dataStatus) {
                    this.loading.dismiss();
                    this._alertService.showAlert("Please enter correct UDISE code of the school");
                }
                else {
                    let logDataNew = {
                        username: localStorage.getItem("username"),
                        udise_code: this.udise_code,
                        form_name: "UDISE Code entry",
                        action_name: "On Success",
                        data: "Udise code : " + this.udise_code + ", School name : " + data.result[0].SclNam + ", School id : " + data.result[0].SclId,
                        completion_percentage: "0"
                    };
                    this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                    }, (error) => {
                        this._alertService.showAlert("SOMETHING WENT WRONG");
                    });
                    let schoolId = data.result[0].SclId;
                    this.inspectionDistrict = data.result[0].DistNam;
                    this.inspectionBlock = data.result[0].block_name;
                    this.inspectionSchool = data.result[0].SclNam;
                    this.selectedSchool = {
                        "school_id": data.result[0].SclId,
                        "school_name": data.result[0].SclNam,
                        "latitude": data.result[0].latitude,
                        "longitude": data.result[0].longitude,
                    };
                    this.selectedlevel = 1;
                    localStorage.setItem("selectedlevel", this.selectedlevel);
                    localStorage.setItem("schlMngId", data.result[0].ManagID);
                    this.getSchoolData();
                }
            }), (error) => {
                this.loading.dismiss();
            });
        });
        this.goToSchoolSearch = () => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.isKeyboardHide = true;
            this.udise_code = this.route.snapshot.queryParamMap.get("id");
            if (this.inspectionType) {
                if (this.inspectionType == 1) {
                    localStorage.setItem("veracity_type", "inspection");
                }
                else if (this.inspectionType == 2) {
                    localStorage.setItem("veracity_type", "veracity");
                }
            }
            let logData = {
                username: localStorage.getItem("username"),
                udise_code: this.udise_code,
                form_name: "UDISE Code entry",
                action_name: "On Submit",
                data: "Entered udise code : " + this.udise_code,
                completion_percentage: "0"
            };
            this._apiService.setActivityLog(logData).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            this.loading.present("Getting School Info");
            yield this._apiService.getSchoolDetails(this.udise_code).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
                this.loading.dismiss();
                if (data.result[0].SclNam == null) {
                    this.loading.dismiss();
                    this._alertService.showAlert("Please enter correct UDISE code of the school");
                }
                else {
                    let logDataNew = {
                        username: localStorage.getItem("username"),
                        udise_code: this.udise_code,
                        form_name: "UDISE Code entry",
                        action_name: "On Success",
                        data: "Udise code : " + this.udise_code + ", School name : " + data.result[0].SclNam + ", School id : " + data.result[0].SclId,
                        completion_percentage: "0"
                    };
                    this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                    }, (error) => {
                        this._alertService.showAlert("SOMETHING WENT WRONG");
                    });
                    let schoolId = data.result[0].SclId;
                    this.inspectionDistrict = data.result[0].DistNam;
                    this.inspectionBlock = data.result[0].block_name;
                    this.inspectionSchool = data.result[0].SclNam;
                    this.selectedSchool = {
                        "school_id": data.result[0].SclId,
                        "school_name": data.result[0].SclNam,
                        "latitude": data.result[0].latitude,
                        "longitude": data.result[0].longitude,
                    };
                    this.selectedlevel = 1;
                    localStorage.setItem("selectedlevel", this.selectedlevel);
                    this.schoolDetails = data.result[0];
                    localStorage.setItem("schlMngId", data.result[0].ManagID);
                    this.getSchoolData();
                }
            }), (error) => {
                this.loading.dismiss();
            });
        });
        this.getSchoolList = () => {
            debugger;
            this.loading.present();
            const userName = localStorage.getItem("username");
            let userDetail;
            if (this.selectedBlockData) {
                userDetail = {
                    username: userName,
                    block_id: this.selectedBlockData
                };
            }
            else if (this.userSessionService.emis_usertype() == 6) {
                userDetail = {
                    username: userName,
                    block_id: this.userSessionService.block_id()
                };
            }
            else {
                userDetail = {
                    username: userName,
                };
            }
            this._apiService.getSchoolList(userDetail).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                this.loading.dismiss();
                this.veracityList = (_a = response.records) === null || _a === void 0 ? void 0 : _a.schoolList;
                this.udiseCodeEntry = (_b = response.records) === null || _b === void 0 ? void 0 : _b.user_info.udise_code_entry;
                this.districtDropDown = (_c = response.records) === null || _c === void 0 ? void 0 : _c.user_info.district_dropdown;
                this.blockDropDown = (_d = response.records) === null || _d === void 0 ? void 0 : _d.user_info.block_dropdown;
                this.daily_school_count = (_e = response.records) === null || _e === void 0 ? void 0 : _e.user_info.daily_school_count;
                this.daily_class_count = (_f = response.records) === null || _f === void 0 ? void 0 : _f.user_info.daily_class_count;
                this.daily_school_target = (_g = response.records) === null || _g === void 0 ? void 0 : _g.user_info.daily_school_target;
                this.daily_class_target = (_h = response.records) === null || _h === void 0 ? void 0 : _h.user_info.daily_class_target;
                debugger;
                if (this.districtDropDown == '1') {
                    // this.getDistricts();
                    debugger;
                    this.districtData = this.masterApiResponse.districts;
                }
                else if (this.districtDropDown == '0' && this.blockDropDown == '1') {
                    this.blockListData = this.masterApiResponse.blocks.filter(x => x.district_id == this.userSessionService.district_id());
                    // this.getBlockListByDistrictId(this.userSessionService.district_id());          
                }
                this.blockDropDown = (_j = response.records) === null || _j === void 0 ? void 0 : _j.user_info.block_dropdown;
                localStorage.setItem("user_type", (_k = response.records) === null || _k === void 0 ? void 0 : _k.user_info.user_type);
                localStorage.setItem("createdby_role", (_l = response.records) === null || _l === void 0 ? void 0 : _l.createdby_role_id);
                if (this.usertype == 8) {
                    let schooldata = JSON.parse((_m = response.records) === null || _m === void 0 ? void 0 : _m.schoolList[0]);
                    this.selectedSchool = schooldata.data.completeOutput[0];
                    this.selectedlevel = 1;
                    if (this.pageMoved != 'yes' && this.storeDetail == null && this.storeDetail == undefined) {
                        yield this.fetchOfflineData();
                    }
                    else if (this.pageMoved != 'yes' && this.storeDetail.pages.pageData.length == 0) {
                        yield this.fetchOfflineData();
                    }
                    else if (this.pageMoved != 'yes') {
                        yield this.fetchOfflineData();
                    }
                }
                let indexvalue;
                this.veracityList = this.veracityList.map((school, index) => {
                    indexvalue = index;
                    school = JSON.parse(school);
                    this.schlManageId = school.data.sch_management_id;
                    if (Number(school.data.sch_management_id) == 1) {
                        school.schooltypename = this.primarytype;
                    }
                    if (Number(school.data.sch_management_id) == 3) {
                        school.schooltypename = this.hightype;
                    }
                    if (Number(school.data.sch_management_id) == 4) {
                        school.schooltypename = this.highertype;
                    }
                    return school;
                });
                this.veracityList = this.veracityList.filter((data) => {
                    if (data.data.completeOutput.length > 0 || data.data.filteredOutput.length > 0) {
                        return data;
                    }
                });
                if (this.veracityList.length < 2 && this.veracityList.length > 0) {
                    this.allSchoolList = this.veracityList[0].data.completeOutput;
                    if (Number(this.userSessionService.emis_usertype()) == 6) {
                        this.observedSchoolList = this.veracityList[0].data.zoneObservation;
                        this.observedSchoolList = this.observedSchoolList.sort((a, b) => (a.cluster_name > b.cluster_name) ? 1 : ((b.cluster_name > a.cluster_name) ? -1 : 0));
                    }
                    else {
                        this.observedSchoolList = this.veracityList[0].data.blockObservation;
                        this.observedSchoolList = this.observedSchoolList.sort((a, b) => (a.block_name > b.block_name) ? 1 : ((b.block_name > a.block_name) ? -1 : 0));
                    }
                    this.unVisitedSchoolList = this.veracityList[0].data.completeOutput;
                    this.selectedlevel = this.veracityList[0].level;
                    localStorage.setItem("selectedWorkflow", this.veracityList[0].data.workflow_id);
                    localStorage.setItem("selectedlevel", this.selectedlevel);
                    localStorage.setItem("selectedschooltype", this.veracityList[0].schoolType);
                    localStorage.setItem("selectedClasses", this.veracityList[0].data.class_applicaple);
                    localStorage.setItem("schlMngId", this.veracityList[0].data.completeOutput[0].manage_id);
                }
                this.loading.dismiss();
                this.currentDate = response.records.current_date;
                this.schoolReasons =
                    response.records.school_reasons != false
                        ? response.records.school_reasons
                        : [];
                this.todayQuotes = response.records.today_quotes;
                this.targetDetails = response.records.targets;
                if (this.targetDetails.classTarget) {
                    this.visitedcount = this.targetDetails.classTarget.visitedcount;
                    this.classTarget = this.targetDetails.classTarget.classtarget;
                }
                this.observedSchool = Number(Number(this.visitedcount) /
                    Number(this.classTarget));
            }), (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
                let logData = {
                    username: localStorage.getItem("username"),
                    udise_code: localStorage.getItem("udise_code"),
                    form_name: "Dashboard Api",
                    action_name: "Error in Getting school list",
                    data: "Entered udise code : " + localStorage.getItem("udise_code"),
                    completion_percentage: "0"
                };
                this._apiService.setActivityLog(logData).subscribe((response) => {
                }, (error) => {
                    this._alertService.showAlert("SOMETHING WENT WRONG");
                });
                this.loading.dismiss();
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
        };
    }
    ionViewWillEnter() {
        this.initial();
        if (localStorage.getItem("saveApiCall") != '1' || (localStorage.getItem("saveApiCall") == undefined && localStorage.getItem("saveApiCall") == null)) {
            localStorage.setItem("saveApiCall", '0');
        }
        this.ionicStore.getOffStorage().then((response) => {
            if (response != null) {
                this.masterApiResponse = response;
                this.initFunction();
            }
            else {
                this.masterApiResponse = {};
                this.jsonFetch();
            }
        });
    }
    ;
    initial() {
        this.ionicStore.getData('ppSchBaseDetails').then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.ppSchBaseDetails = data ? data : [];
        }));
    }
    jsonFetch() {
        debugger;
        fetch('https://d1wpyxz35bzzz4.cloudfront.net/pp_settings_clstyp_acadyr_rol_wrkflw.json').then(res => res.json()).then(res => {
            this.masterApiResponse.roles = res.roles;
            this.masterApiResponse.teacher_reasons = res.teacher_reasons;
            this.masterApiResponse.mismatch_reasons = res.mismatch_reasons;
            this.masterApiResponse.student_reasons = res.student_reasons;
            fetch('https://d1wpyxz35bzzz4.cloudfront.net/common_master_data_med_inst_dist_blk.json').then(res => res.json()).then(res => {
                debugger;
                this.masterApiResponse.medium_info = res.medium_instruction;
                this.masterApiResponse.subjects_all = res.subject;
                this.masterApiResponse.districts = res.districts;
                this.masterApiResponse.blocks = res.blocks;
                // this.districtDataList = res.districts;
                this.blockListData = res.blocks;
                fetch('https://d1wpyxz35bzzz4.cloudfront.net/pp_ob_questions_v1.json').then(res => res.json()).then(res => {
                    this.masterApiResponse.methodologys = res.getTeachingMethodologyNew;
                    let questionSubArr = res.getTeachingQuestionsNew_tnvnnew.concat(res.getChildQuestions_new);
                    questionSubArr.forEach(v => {
                        v.action_id = v.action_id.toString();
                        v.ob_qus_id = v.ob_qus_id.toString();
                        v.param_id = v.param_id.toString();
                        v.param_priority = v.param_priority.toString();
                        v.sec_id = v.sec_id.toString();
                    });
                    // this.masterApiResponse.methodology_questions_lang = res.getTeachingQuestionsNew_tnvnnew 
                    this.masterApiResponse.methodology_questions_lang = questionSubArr;
                    this.ionicStore.setOffStorage(this.masterApiResponse);
                    //   debugger
                    //   this.storage.set('offStoreData', { masterRes: this.masterApiResponse }).then(r => {
                    //     debugger
                    //     setTimeout(() => {
                    //       this.storage.get('offStoreData').then(res=>{
                    //       });
                    //      debugger
                    //     }, 1000);
                    //  });
                    localStorage.setItem("masterdata", JSON.stringify(this.masterApiResponse));
                    this.initFunction();
                });
            });
        });
    }
    initFunction() {
        this.keyboard.onKeyboardWillShow().subscribe(() => {
            this.isKeyboardHide = false;
        });
        this.keyboard.onKeyboardWillHide().subscribe(() => {
            this.isKeyboardHide = true;
        });
        this.unVisitedSchoolList = [];
        if (this.storeDetail != undefined) {
            if (this.storeDetail.pages.pageData.length > 20) {
                this.ionicStore.getFinalData().then((response) => {
                    if (response != null) {
                        this._apiService.postfinalinfo(response).subscribe((data) => {
                            try {
                                if (data['status'] == 200 && data['dataStatus'] == true) {
                                    this.ionicStore.removeStoreData();
                                    this.ionicStore.removeOffStorage();
                                    this.ionicStore.removeFinalData();
                                    localStorage.removeItem("classInfo");
                                    localStorage.removeItem("chapterId");
                                    localStorage.removeItem("schoolInfo");
                                    localStorage.removeItem("teacherInfo");
                                    localStorage.removeItem("finaldata");
                                    localStorage.removeItem("scannedData");
                                    this.sSchool = undefined;
                                    this.selectedSchool = {};
                                    this.pageMoved = undefined;
                                    this.dashboardPageInitiates();
                                    this._apiService.languageDisableUpdate(false);
                                }
                                else {
                                    throw data['msg'];
                                }
                            }
                            catch (err) {
                                this._alertService.showAlert(err);
                            }
                        }, (error) => {
                            this.ionicStore.removeStoreData();
                            this.ionicStore.removeOffStorage();
                            this.ionicStore.removeFinalData();
                            localStorage.removeItem("classInfo");
                            localStorage.removeItem("chapterId");
                            localStorage.removeItem("schoolInfo");
                            localStorage.removeItem("finaldata");
                            localStorage.removeItem("teacherInfo");
                            localStorage.removeItem("scannedData");
                            this.selectedSchool = {};
                            this.sSchool = undefined;
                            this.pageMoved = undefined;
                            this.dashboardPageInitiates();
                            this._apiService.languageDisableUpdate(false);
                            this._alertService.showAlert(error);
                        });
                    }
                    else {
                        this.sSchool = undefined;
                        this.dashboardPageInitiates();
                    }
                });
            }
            else {
                this.sSchool = undefined;
                this.dashboardPageInitiates();
            }
        }
        else {
            this.sSchool = undefined;
            this.dashboardPageInitiates();
        }
        if (this.route.snapshot.queryParamMap.get("id")) {
            this.usertype = this.userSessionService.emis_usertype();
            this.goToSchoolSearch();
            this.isKeyboardHide = true;
        }
        let languageStatus = localStorage.getItem("language");
        if (languageStatus != null) {
            this.languageType = languageStatus;
            this._apiService.languageChange(this.languageType);
            this.appLanguage();
        }
        else {
            this.appLanguage();
        }
    }
    _initialiseTranslation() {
        this._translate.get("welcome").subscribe((res) => {
            this.welcome = res;
        });
        this._translate.get("chooseNatureOfVisit").subscribe((res) => {
            this.chooseNatureOfVisit = res;
        });
        this._translate.get("schoolObservation").subscribe((res) => {
            this.schoolObservation = res;
        });
        this._translate.get("classroomVerfication").subscribe((res) => {
            this.classroomVerfication = res;
        });
        this._translate.get("enterUdiseCode").subscribe((res) => {
            this.enterUdiseCode = res;
        });
        this._translate.get("anyschoolUdiseCode").subscribe((res) => {
            this.anyschoolUdiseCode = res;
        });
        this._translate.get("district").subscribe((res) => {
            this.district = res;
        });
        this._translate.get("block").subscribe((res) => {
            this.block = res;
        });
        this._translate.get("school").subscribe((res) => {
            this.school = res;
        });
        this._translate.get("startSchoolObservation").subscribe((res) => {
            this.startSchoolObservation = res;
        });
        this._translate.get("observationTarget").subscribe((res) => {
            this.observationTarget = res;
        });
        this._translate.get("teachersTarget").subscribe((res) => {
            this.teachersTarget = res;
        });
        this._translate.get("schoolsVisited").subscribe((res) => {
            this.schoolsVisited = res;
        });
        this._translate.get("teachersObserved").subscribe((res) => {
            this.teachersObserved = res;
        });
        this._translate.get("observedOn").subscribe((res) => {
            this.observedOn = res;
        });
        this._translate.get("classroomObservation").subscribe((res) => {
            this.classroomObservation = res;
        });
        this._translate.get("selectSchool").subscribe((res) => {
            this.selectSchool = res;
        });
        this._translate.get("observeSchool").subscribe((res) => {
            this.observeSchool = res;
        });
        this._translate.get("eitherOR").subscribe((res) => {
            this.eitherOR = res;
        });
        this._translate.get("chooseSchool").subscribe((res) => {
            this.chooseSchool = res;
        });
        this._translate.get("noSchool").subscribe((res) => {
            this.noSchool = res;
        });
        this._translate.get("greetings").subscribe((res) => {
            this.greetings = res;
        });
        this._translate.get("schooltype").subscribe((res) => {
            this.schooltype = res;
        });
        this._translate.get("primarytype").subscribe((res) => {
            this.primarytype = res;
        });
        this._translate.get("hightype").subscribe((res) => {
            this.hightype = res;
        });
        this._translate.get("highertype").subscribe((res) => {
            this.highertype = res;
        });
        this._translate.get("continue").subscribe((res) => {
            this.continue = res;
        });
        this._translate.get("start").subscribe((res) => {
            this.start = res;
        });
        this._translate.get("noneAbove").subscribe((res) => {
            this.noneAbove = res;
        });
        this._translate.get("completed").subscribe((res) => {
            this.completed = res;
        });
        this._translate.get("noTeacherFound").subscribe((res) => {
            this.noTeacherFound = res;
        });
        this._translate.get("noStudentsFound").subscribe((res) => {
            this.noStudentsFound = res;
        });
        this._translate.get("fetchingText").subscribe((res) => {
            this.fetchingText = res;
        });
    }
    dashboardPageInitiates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            this.usertype = this.userSessionService.emis_usertype();
            this.usertype1 = this.userSessionService.emis_usertype1();
            this.teachertype = this.userSessionService.teacher_type();
            this.district_id = this.userSessionService.district_id();
            // this.http.get<any>("assets/tnvn/user_info.json").subscribe((data: any) => {
            // this._apiService.getVeracityUserType().subscribe((data: any) => {
            debugger;
            const filterObsArray = this.masterApiResponse.roles.filter(item => (Number(item.user_type) == Number(this.usertype) && Number(item.user_type1) == Number(3) && item.LEVEL == 'State')); //this.usertype1
            // const filterObsArray = this.masterApiResponse.roles.filter(item => (Number(item.user_type) == Number(this.usertype) && item.LEVEL == 'State'))//this.usertype1
            if (filterObsArray.length > 0) {
                filterObsArray.forEach((items) => {
                    if (items.school_type_1 != null && items.school_type_1 != "") {
                        // items.school_type_1 = JSON.parse(items.school_type_1);
                        items.school_type_1 = (typeof items.school_type_1 == 'string') ? JSON.parse(items.school_type_1) : items.school_type_1;
                        this.which_user_level = Number(items.school_type_1.level);
                    }
                    else if (items.school_type_2 != null && items.school_type_2 != "") {
                        // items.school_type_2 = JSON.parse(items.school_type_2);
                        items.school_type_2 = (typeof items.school_type_2 == 'string') ? JSON.parse(items.school_type_2) : items.school_type_2;
                        this.which_user_level = Number(items.school_type_2.level);
                    }
                    else if (items.school_type_3 != null && items.school_type_3 != "") {
                        // items.school_type_3 = JSON.parse(items.school_type_3);
                        items.school_type_3 = (typeof items.school_type_3 == 'string') ? JSON.parse(items.school_type_3) : items.school_type_3;
                        this.which_user_level = Number(items.school_type_3.level);
                    }
                });
            }
            const filterObsDistrictArray = this.masterApiResponse.roles.filter(item => (Number(item.user_type) == Number(this.usertype) && Number(item.user_type1) == Number(this.usertype1) && item.LEVEL == 'District'));
            // const filterObsDistrictArray = this.masterApiResponse.roles.filter(item => (Number(item.user_type) == Number(this.usertype) && item.LEVEL == 'District'))
            if (filterObsDistrictArray.length > 0) {
                filterObsDistrictArray.forEach((items) => {
                    if (items.school_type_1 != null && items.school_type_1 != "") {
                        // items.school_type_1 = JSON.parse(items.school_type_1);
                        items.school_type_1 = (typeof items.school_type_1 == 'string') ? JSON.parse(items.school_type_1) : items.school_type_1;
                        this.which_user_level = Number(items.school_type_1.level);
                    }
                    else if (items.school_type_2 != null && items.school_type_2 != "") {
                        // items.school_type_2 = JSON.parse(items.school_type_2);
                        items.school_type_2 = (typeof items.school_type_2 == 'string') ? JSON.parse(items.school_type_2) : items.school_type_2;
                        this.which_user_level = Number(items.school_type_2.level);
                    }
                    else if (items.school_type_3 != null && items.school_type_3 != "") {
                        // items.school_type_3 = JSON.parse(items.school_type_3);
                        items.school_type_3 = (typeof items.school_type_3 == 'string') ? JSON.parse(items.school_type_3) : items.school_type_3;
                        this.which_user_level = Number(items.school_type_3.level);
                    }
                });
            }
            debugger;
            if (filterObsArray.length > 0 && filterObsArray[0].LEVEL == "State" && this.which_user_level == 4) {
                this.which_user = 'state';
                localStorage.setItem("createdby_role", filterObsArray[0].id);
                this.observationdata = [];
                if ((this.observationdata == undefined || this.observationdata.length == 0) && this.which_user == 'state') {
                    this.districtDropDown = filterObsArray[0].district_dropdown;
                    this.blockDropDown = filterObsArray[0].block_dropdown;
                    this.udiseCodeEntry = filterObsArray[0].udise_code_entry;
                    this.which_user = 'state';
                    localStorage.setItem("user_type", this.which_user);
                    this.curDate = new Date();
                    let userIdData = {
                        "user_id": localStorage.getItem("username"),
                        "level": 4
                    };
                    yield this._apiService.getObsCount(userIdData).then((response) => {
                        debugger;
                        this.schoolmanageData = response.records.observationdata;
                        this.observationdata = response.records.observationdata;
                        this.school_type_list = response.records.school_type;
                        if (response.records.classTarget != undefined) {
                            this.targetDetails = response.records.classTarget;
                            if (this.targetDetails) {
                                this.visitedcount = this.targetDetails[0].visitedcount;
                                this.classTarget = this.targetDetails[0].classtarget;
                            }
                            this.observedSchool = Number(Number(this.visitedcount) /
                                Number(this.classTarget));
                        }
                        if (response.records.today_quotes != undefined) {
                            this.todayQuotes = response.records.today_quotes.quotes;
                        }
                        this.districtfinalDataList = [];
                        this.districtDataList = this.masterApiResponse.districts.filter((test, index, array) => index == array.findIndex((findTest) => findTest.id == test.id));
                        this.districtDataList.forEach((item2) => {
                            let check_district_id = String(item2.id);
                            const filterObsArray = this.observationdata.filter(item => (item.district_id == check_district_id));
                            if (filterObsArray.length > 0 && filterObsArray[0].level == "3") {
                                if (check_district_id == filterObsArray[0].district_id) {
                                    let dis_wise_sch_count = [];
                                    filterObsArray.forEach((element) => {
                                        if (element.school_id) {
                                            dis_wise_sch_count.push(element.school_id);
                                        }
                                    });
                                    let sum = dis_wise_sch_count.length;
                                    this.districtfinalDataList.push({
                                        "district_id": check_district_id,
                                        "district_name": item2.district_name,
                                        "levelsbyDistrictwise": sum
                                    });
                                }
                            }
                            else {
                                this.districtfinalDataList.push({
                                    "district_id": check_district_id,
                                    "district_name": item2.district_name,
                                    "levelsbyDistrictwise": 0
                                });
                            }
                        });
                        this.districtfinalDataList = this.districtfinalDataList.filter((test, index, array) => index == array.findIndex((findTest) => findTest.district_id == test.district_id));
                        this.districtfinalDataList.sort((a, b) => {
                            if (a.district_name < b.district_name)
                                return -1;
                            if (a.district_name > b.district_name)
                                return 1;
                            return 0;
                        });
                    }, (error) => {
                        this.loading.dismiss();
                        this._alertService.showAlert("SOMETHING WENT WRONG");
                    });
                }
            }
            if (filterObsDistrictArray.length > 0 && filterObsDistrictArray[0].LEVEL == "District" && this.which_user_level == 3) {
                this.which_user = 'district';
                localStorage.setItem("createdby_role", filterObsDistrictArray[0].id);
                this.observationdata = [];
                if ((this.observationdata == undefined || this.observationdata.length == 0) && this.which_user == 'district') {
                    this.districtDropDown = filterObsDistrictArray[0].district_dropdown;
                    this.blockDropDown = filterObsDistrictArray[0].block_dropdown;
                    this.udiseCodeEntry = filterObsDistrictArray[0].udise_code_entry;
                    this.which_user = 'district';
                    localStorage.setItem("user_type", this.which_user);
                    this.curDate = new Date();
                    let userIdData = {
                        "user_id": localStorage.getItem("username"),
                        "level": 3
                    };
                    console.log(1);
                    yield this._apiService.getObsCount(userIdData).then((response) => {
                        console.log(2);
                        if (response.status == 200 && response.dataStatus == true) {
                            this.schoolmanageData = response.records.observationdata;
                            this.observationdata = response.records.observationdata;
                            this.school_type_list = response.records.school_type;
                            if (response.records.classTarget != undefined) {
                                this.targetDetails = response.records.classTarget;
                                if (this.targetDetails) {
                                    this.visitedcount = this.targetDetails[0].visitedcount;
                                    this.classTarget = this.targetDetails[0].classtarget;
                                }
                                this.observedSchool = Number(Number(this.visitedcount) /
                                    Number(this.classTarget));
                            }
                            if (response.records.today_quotes != undefined) {
                                this.todayQuotes = response.records.today_quotes.quotes;
                            }
                            this.blockListData = [];
                            this.masterApiResponse.blocks.forEach((element) => {
                                if (String(element.district_id) == this.userSessionService.district_id()) {
                                    this.blockListData.push({
                                        "block_id": element.block_id,
                                        "block_name": element.block_name
                                    });
                                }
                            });
                            this.selectedBlockData = {};
                            this.sVeracity = {};
                            this.selectedSchool = {};
                            this.allSchoolList = [];
                            this.blockListData = this.blockListData.filter((test, index, array) => index == array.findIndex((findTest) => findTest.block_id == test.block_id));
                            this.blockfinalListData = [];
                            this.blockListData.forEach((item3) => {
                                let check_block_id = String(item3.block_id);
                                const filterObsArray = this.observationdata.filter(item => (item.block_id == check_block_id));
                                if (filterObsArray.length > 0 && filterObsArray[0].level == "2") {
                                    let block_wise_sch_count = [];
                                    filterObsArray.forEach((element) => {
                                        if (element.school_id) {
                                            block_wise_sch_count.push(element.school_id);
                                        }
                                    });
                                    let sum = block_wise_sch_count.length;
                                    this.blockfinalListData.push({
                                        "block_id": check_block_id,
                                        "block_name": item3.block_name,
                                        "levelsbyBlockwise": sum
                                    });
                                }
                                else {
                                    this.blockfinalListData.push({
                                        "block_id": check_block_id,
                                        "block_name": item3.block_name,
                                        "levelsbyBlockwise": 0
                                    });
                                }
                            });
                            this.blockfinalListData = this.blockfinalListData.filter((test, index, array) => index == array.findIndex((findTest) => findTest.block_id == test.block_id));
                            this.blockfinalListData.sort((a, b) => {
                                if (a.block_name < b.block_name)
                                    return -1;
                                if (a.block_name > b.block_name)
                                    return 1;
                                return 0;
                            });
                        }
                    }, (error) => {
                        this.loading.dismiss();
                        this._alertService.showAlert("SOMETHING WENT WRONG");
                    });
                }
            }
            console.log(3);
            this.getStorageData(filterObsArray, filterObsDistrictArray);
        });
    }
    getStorageData(filterObsArray, filterObsDistrictArray) {
        if (!localStorage.getItem("veracity_type")) {
            localStorage.setItem("veracity_type", "veracity");
        }
        this.ionicStore.getStoreData().then((response) => {
            this.storeDetail = response;
            if (filterObsArray.length == 0 && filterObsDistrictArray.length == 0) {
                this.which_user_level = 1;
            }
            if (this.which_user_level == 1 || this.which_user_level == 2) {
                this.which_user = 'dummy_user';
                if (this.which_user == 'dummy_user') {
                    this.getSchoolList();
                }
            }
            else {
                this.getSchoolList();
            }
            ;
            if (this.storeDetail == null) {
                if (!this.route.snapshot.queryParamMap.get("id")) {
                    this.inspectionDistrict = undefined;
                    this.udise_code = undefined;
                    this.inspectionBlock = undefined;
                    this.inspectionSchool = undefined;
                    this.selectedSchool = {};
                }
                this._apiService.languageDisableUpdate(false);
                this.pageMoved = undefined;
                let tempData = {
                    pages: {
                        pageData: [],
                        currentProgress: 0,
                        currentPage: "",
                    },
                    dependency: {
                        dashboard: ["emiSelection"],
                        emiVerfiy: [],
                        teacherSeleciton: [],
                        classRoom: [
                            "stu_Attendance",
                            "teachingObservation",
                            "teachingMethodology",
                            "stu_Assessment_term",
                            "stu_Assessment_accessed",
                            "stu_Assessment_questions",
                            "observationReport",
                            "mismatchAttendance",
                            "observationDiscussion_DIKSHA",
                            "ObservationReport_update",
                            "Observation_complete_percentage",
                        ],
                        stu_Attendance: ["mismatchAttendance"],
                        teachingObservation: [
                            "teachingMethodology",
                            "stu_Assessment_term",
                            "stu_Assessment_accessed",
                            "stu_Assessment_questions",
                            "observationReport",
                            "mismatchAttendance",
                            "observationDiscussion_DIKSHA",
                            "ObservationReport_update",
                            "Observation_complete_percentage",
                        ],
                        teachingMethodology: [],
                        stu_Assessment_term: ["stu_Assessment_questions"],
                        stu_Assessment_accessed: ["stu_Assessment_questions"],
                        stu_Assessment_questions: [],
                        observationReport: [],
                        mismatchAttendance: [],
                        ObservationReport_update: [],
                        Observation_complete_percentage: [],
                    },
                };
                this.ionicStore.setStoreData(tempData);
                this.ionicStore.getStoreData().then((response) => {
                    this.storeDetail = response;
                });
            }
            else {
                debugger;
                if (this.storeDetail.pages.pageData.length) {
                    this.selectedSchool = this.storeDetail.pages.pageData[0].pageDetails;
                    this.sSchool = this.selectedSchool.school_id;
                    this.pageMoved = this.storeDetail.pages.pageData[0].pageMoved;
                    this.networkService.initializeNetworkEvents();
                    let netSts = this.networkService.getCurrentNetworkStatus();
                    console.log(this.storeDetail.pages.pageData[0].pageDetails, "this.storeDetail.pages.pageData[0].pageDetails", this.selectedSchool);
                    if (netSts == 0) {
                        this.fetchOfflineData();
                    }
                    if (this.pageMoved == "yes") {
                        this._apiService.languageDisableUpdate(true);
                    }
                    console.log(this.storeDetail.pages.pageData[0].pageDetails, "this.storeDetail.pages.pageData[0].pageDetails", this.selectedSchool);
                }
                if (Object.keys(this.storeDetail.pages).length) {
                    this.currentPercentage = this.storeDetail.pages.currentProgress;
                }
            }
        });
    }
    getSchoolData() {
        let schoolId = this.selectedSchool.school_id;
        fetch('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + schoolId + '_2.json').then(res => res.json()).then((data) => {
            if (data) {
                debugger;
                this.masterApiResponse.basic_info = data.basic_info;
                // this.masterApiResponse.teacher_details = data.teacherlist;
                let allTechList = [...data.teacherlist, ...data.Deputation_teacherlist];
                let filteredTechList = [];
                allTechList.forEach(obj => {
                    let idx = filteredTechList.findIndex(obj1 => { return obj.teacher_id == obj1.teacher_id; });
                    if (idx == -1) {
                        filteredTechList.push(obj);
                    }
                });
                console.log(filteredTechList);
                this.masterApiResponse.teacher_details = filteredTechList;
                this.masterApiResponse.school_class_info = data.students_count_list;
                // this.masterApiResponse.classlist = data.classlist;
                this.masterApiResponse.class_info = data.class_info;
                this.ionicStore.setOffStorage(this.masterApiResponse);
                // this.storage.set('offStoreData', { masterRes: this.masterApiResponse }).then(r => {
                //   setTimeout(() => {
                //     this.storage.get('offStoreData').then(res=>{
                //     });
                //    debugger
                //   }, 1000);
                // });
                localStorage.setItem("masterdata", JSON.stringify(this.masterApiResponse));
                let emisStatus = '167';
                localStorage.setItem("udise_code", this.masterApiResponse.basic_info.udise_code);
                localStorage.setItem("emis_status", emisStatus);
                let schoolData = {
                    schoolId: this.masterApiResponse.basic_info.school_id,
                    schoolName: this.masterApiResponse.basic_info.school_name,
                    distName: this.masterApiResponse.basic_info.district_name,
                    eduDistName: this.masterApiResponse.basic_info.edu_dist_name,
                    blockName: this.masterApiResponse.basic_info.block_name,
                    cateType: this.masterApiResponse.basic_info.cate_type,
                };
                localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
                if (this.unVisitedSchoolList.some((item) => item.school_id == schoolId)) {
                    this.unVisitedSchoolList = this.unVisitedSchoolList.filter((item) => item.school_id != schoolId);
                }
                else {
                    this.unVisitedSchoolList.splice(0, 1);
                }
                this.unVisitedSchoolList.push(this.selectedSchool);
                this.sSchool = schoolId;
                const found = this.unVisitedSchoolList.includes(this.selectedSchool);
                if (found) {
                    this.loading.dismiss();
                }
            }
        }, (error) => {
            this._alertService.showAlert("Choose another school");
            this.loading.dismiss();
        });
    }
    quickNavigation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__.NavigationComponent,
                cssClass: "my-custom-modal",
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    mySelectInspection(event, inspection) {
        if (inspection == 1) {
            localStorage.setItem("veracity_type", "inspection");
        }
        else if (inspection == 2) {
            localStorage.setItem("veracity_type", "veracity");
        }
    }
    mySelectHandler(event, _sSchool) {
        debugger;
        if (event == "none") {
            this.selectedSchool = {};
            this.presentModal();
        }
        else if (event == undefined) {
            this._alertService.showAlert(this.chooseSchool);
        }
        else {
            // if (Number(this.daily_school_count) > 0 && Number(this.daily_school_count) == Number(this.daily_school_target)) {
            if (Number(this.daily_school_count) > 0 && Number(this.daily_school_count) == Number(this.daily_school_target)) {
                this._alertService.showAlert("Daily school target completed..Please do observation later");
            }
            else {
                let a = this.allSchoolList.find((data) => data.school_id == _sSchool.school_id);
                if (this.which_user == 'dummy_user') {
                    this.selectedSchool = a;
                    localStorage.setItem("school_management", this.selectedSchool.manage_id);
                }
                else {
                    let state_user_school_id = parseInt(a.school_id);
                    let b = this.schoolmanageData.find((data) => data.school_id == state_user_school_id);
                    localStorage.setItem("school_management", b.manage_id);
                }
                this.fetchOfflineData();
            }
        }
    }
    SelectVeracity(event, sveracity) {
        debugger;
        if (event == "none") {
            this.allSchoolList = [];
            this.presentModal();
        }
        else {
            if (event.data.filteredOutput.length > 0) {
                this.allSchoolList = event.data.completeOutput;
            }
            else {
                this.allSchoolList = event.data.completeOutput;
            }
            if (Number(this.userSessionService.emis_usertype()) == 6) {
                this.observedSchoolList = event.data.zoneObservation;
            }
            else {
                this.observedSchoolList = event.data.blockObservation;
            }
            this.unVisitedSchoolList = event.data.completeOutput;
            this.allSchoolList.forEach((element) => {
                this.unVisitedSchoolList = this.unVisitedSchoolList.filter((data) => {
                    if (Number(element.school_id) != Number(data.school_id)) {
                        return data;
                    }
                });
            });
            this.selectedlevel = event.level;
            localStorage.setItem("selectedWorkflow", event.data.workflow_id);
            localStorage.setItem("selectedlevel", this.selectedlevel);
            localStorage.setItem("selectedschooltype", event.schoolType);
            localStorage.setItem("selectedClasses", event.data.class_applicaple);
        }
    }
    SelectStateUserVeracity(event, sveracity) {
        debugger;
        if (event == "none") {
            this.allSchoolList = [];
            this.presentModal();
        }
        else {
            this.selectedSchool = {};
            this.allSchoolList = [];
            this.unVisitedSchoolList = [];
            let schoolType = String(event.schoolType);
            const filterObsArray = this.observationdata.filter(item => (item.sch_type_id == schoolType && item.district_id == this.selectedDistrictData && item.block_id == this.selectedBlockData));
            if (filterObsArray.length > 0 && filterObsArray[0].level == "3") {
                this.selectedlevel = "4";
                localStorage.setItem("selectedWorkflow", filterObsArray[0].workflow);
                localStorage.setItem("selectedlevel", this.selectedlevel);
                localStorage.setItem("selectedschooltype", event.schoolType);
                // localStorage.setItem("createdby_role",filterObsArray[0].createdby_role_id);  
                if (event.schoolType == 1) {
                    let class_applicaple_for_state_user = "1,2,3,4,5,6,7,8";
                    localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                }
                else if (event.schoolType == 2) {
                    let class_applicaple_for_state_user = "1,2,3,4,5,6,7,8,9,10";
                    localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                }
                else {
                    let class_applicaple_for_state_user = "1,2,3,4,5,6,7,8,9,10,11,12";
                    localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                }
                filterObsArray.forEach((item) => {
                    let filteredSchool = this.schoolmanageData.find((data) => data.school_id == Number(item.school_id));
                    this.allSchoolList.push({
                        "school_id": String(filteredSchool.school_id),
                        // "school_name": filteredSchool.school_name + " " + "(" + String(filteredSchool.udise_code) + ")"
                        "school_name": filteredSchool.school_name,
                        "latitude": filteredSchool.latitude,
                        "longitude": filteredSchool.longitude,
                    });
                });
                // this.allSchoolList = filterObsArray;
            }
            else {
                this.allSchoolList = [];
            }
            this.unVisitedSchoolList = this.allSchoolList;
            this.allSchoolList.forEach((element) => {
                this.unVisitedSchoolList = this.unVisitedSchoolList.filter((data) => {
                    if (Number(element.school_id) != Number(data.school_id)) {
                        return data;
                    }
                });
            });
        }
    }
    SelectDistrictUserVeracity(event, sveracity) {
        debugger;
        if (event == "none") {
            this.allSchoolList = [];
            this.presentModal();
        }
        else {
            this.selectedSchool = {};
            this.allSchoolList = [];
            this.unVisitedSchoolList = [];
            let schoolType = String(event.schoolType);
            const filterObsArray = this.observationdata.filter(item => (item.sch_type_id == schoolType && item.district_id == this.userSessionService.district_id() && item.block_id == this.selectedBlockData));
            if (filterObsArray.length > 0 && filterObsArray[0].level == "2") {
                this.selectedlevel = "3";
                localStorage.setItem("selectedWorkflow", filterObsArray[0].workflow);
                localStorage.setItem("selectedlevel", this.selectedlevel);
                localStorage.setItem("selectedschooltype", event.schoolType);
                // localStorage.setItem("createdby_role",filterObsArray[0].createdby_role_id);  
                if (event.schoolType == 1) {
                    let class_applicaple_for_state_user = "1,2,3,4,5,6,7,8";
                    localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                }
                else if (event.schoolType == 2) {
                    let class_applicaple_for_state_user = "1,2,3,4,5,6,7,8,9,10";
                    localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                }
                else {
                    let class_applicaple_for_state_user = "1,2,3,4,5,6,7,8,9,10,11,12";
                    localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                }
                filterObsArray.forEach((item) => {
                    let filteredSchool = this.schoolmanageData.find((data) => data.school_id == Number(item.school_id));
                    this.allSchoolList.push({
                        "school_id": String(filteredSchool.school_id),
                        // "school_name": filteredSchool.school_name + " " + "(" + String(filteredSchool.udise_code) + ")"
                        "school_name": filteredSchool.school_name,
                        "latitude": filteredSchool.latitude,
                        "longitude": filteredSchool.longitude,
                    });
                });
                // this.allSchoolList = filterObsArray;
            }
            else {
                this.allSchoolList = [];
            }
            this.unVisitedSchoolList = this.allSchoolList;
            this.allSchoolList.forEach((element) => {
                this.unVisitedSchoolList = this.unVisitedSchoolList.filter((data) => {
                    if (Number(element.school_id) != Number(data.school_id)) {
                        return data;
                    }
                });
            });
        }
    }
    SelectBlock(event, _sSchool) {
        // This needs to be handled, for temporary, it's fixed this way
        if (event == "none") {
            this.selectedBlockData = {};
            this.presentModal();
        }
        else {
            debugger;
            this.sVeracity = {};
            this.selectedSchool = {};
            this.selectedBlockData = _sSchool;
            this.dashboardPageInitiates();
        }
    }
    SelectStateUserBlock(event, _sSchool) {
        // This needs to be handled, for temporary, it's fixed this way
        if (event == "none") {
            this.selectedBlockData = {};
            this.presentModal();
        }
        else {
            this.sVeracity = {};
            this.selectedSchool = {};
            this.allSchoolList = [];
            this.selectedBlockData = _sSchool;
            this.veracityList = [
                {
                    "schoolType": 1,
                    "schooltypename": "Primary/Middle School",
                }, {
                    "schoolType": 2,
                    "schooltypename": "High School",
                }, {
                    "schoolType": 3,
                    "schooltypename": "Higher Secondary School",
                }
            ];
            if (this.veracityList.length > 0 && (this.observationdata != undefined || this.observationdata.length > 0)) {
                this.veracityList.forEach((item3) => {
                    let schoolType = String(item3.schoolType);
                    const filterObsArray = this.observationdata.filter(item => (item.sch_type_id == schoolType && item.district_id == this.selectedDistrictData && item.block_id == this.selectedBlockData));
                    if (filterObsArray.length > 0 && filterObsArray[0].level == "3") {
                        let sch_type_wise_sch_count = [];
                        filterObsArray.forEach((element) => {
                            if (element.school_id) {
                                sch_type_wise_sch_count.push(element.school_id);
                            }
                        });
                        let sum = sch_type_wise_sch_count.length;
                        item3.levelsbySchoolTypewise = sum;
                    }
                    else {
                        item3.levelsbySchoolTypewise = 0;
                    }
                });
                this.veracityList.map(obj => [obj['id'], obj]);
            }
            // this.veracityList.sort((a, b) => {
            //   if (a.schooltypename < b.schooltypename)
            //     return -1;
            //   if (a.schooltypename > b.schooltypename)
            //     return 1;
            //   return 0;
            // });
        }
    }
    SelectDistrictUserBlock(event, _sSchool) {
        // This needs to be handled, for temporary, it's fixed this way
        if (event == "none") {
            this.selectedBlockData = {};
            this.presentModal();
        }
        else {
            this.sVeracity = {};
            this.selectedSchool = {};
            this.allSchoolList = [];
            this.selectedBlockData = _sSchool;
            this.veracityList = [
                {
                    "schoolType": 1,
                    "schooltypename": "Primary/Middle School",
                }, {
                    "schoolType": 2,
                    "schooltypename": "High School",
                }, {
                    "schoolType": 3,
                    "schooltypename": "Higher Secondary School",
                }
            ];
            if (this.veracityList.length > 0 && (this.observationdata != undefined || this.observationdata.length > 0)) {
                this.veracityList.forEach((item3) => {
                    let schoolType = String(item3.schoolType);
                    const filterObsArray = this.observationdata.filter(item => (item.sch_type_id == schoolType && item.district_id == this.userSessionService.district_id() && item.block_id == this.selectedBlockData));
                    if (filterObsArray.length > 0 && filterObsArray[0].level == "2") {
                        let sch_type_wise_sch_count = [];
                        filterObsArray.forEach((element) => {
                            if (element.school_id) {
                                sch_type_wise_sch_count.push(element.school_id);
                            }
                        });
                        let sum = sch_type_wise_sch_count.length;
                        item3.levelsbySchoolTypewise = sum;
                    }
                    else {
                        item3.levelsbySchoolTypewise = 0;
                    }
                });
                this.veracityList.map(obj => [obj['id'], obj]);
            }
            // this.veracityList.sort((a, b) => {
            //   if (a.schooltypename < b.schooltypename)
            //     return -1;
            //   if (a.schooltypename > b.schooltypename)
            //     return 1;
            //   return 0;
            // });
        }
    }
    SelectDistrict(event, _sSchool) {
        debugger;
        // This needs to be handled, for temporary, it's fixed this way
        if (event == "none") {
            this.selectedDistrictData = {};
            this.presentModal();
        }
        else {
            debugger;
            this.selectedBlockData = {};
            this.sVeracity = {};
            this.selectedSchool = {};
            this.selectedDistrictData = _sSchool;
            // this.getBlockListByDistrictId(this.selectedDistrictData);
            this.blockListData = this.masterApiResponse.blocks.filter(x => x.district_id == this.selectedDistrictData);
        }
    }
    SelectStateUserDistrict(event, _sSchool) {
        debugger;
        // This needs to be handled, for temporary, it's fixed this way
        if (event == "none") {
            this.selectedDistrictData = {};
            this.presentModal();
        }
        else {
            this.selectedBlockData = {};
            this.sVeracity = {};
            this.selectedSchool = {};
            this.allSchoolList = [];
            this.selectedDistrictData = _sSchool;
            let selectedDistrictData = parseInt(this.selectedDistrictData);
            this.blockListData = this.masterApiResponse.blocks.filter((test, index, array) => index == array.findIndex((findTest) => findTest.block_id == test.block_id));
            this.blockfinalListData = [];
            const filterObsDistArray = this.blockListData.filter(item => (item.district_id == selectedDistrictData));
            filterObsDistArray.forEach((item3) => {
                let check_block_id = String(item3.block_id);
                const filterObsArray = this.observationdata.filter(item => (item.block_id == check_block_id));
                if (filterObsArray.length > 0 && filterObsArray[0].level == "3" && check_block_id == filterObsArray[0].block_id) {
                    let block_wise_sch_count = [];
                    filterObsArray.forEach((element) => {
                        if (element.school_id) {
                            block_wise_sch_count.push(element.school_id);
                        }
                    });
                    let sum = block_wise_sch_count.length;
                    this.blockfinalListData.push({
                        "block_id": check_block_id,
                        "block_name": item3.block_name,
                        "levelsbyBlockwise": sum
                    });
                }
                else {
                    this.blockfinalListData.push({
                        "block_id": check_block_id,
                        "block_name": item3.block_name,
                        "levelsbyBlockwise": 0
                    });
                }
            });
            this.blockfinalListData = this.blockfinalListData.filter((test, index, array) => index == array.findIndex((findTest) => findTest.block_id == test.block_id));
            this.blockfinalListData.sort((a, b) => {
                if (a.block_name < b.block_name)
                    return -1;
                if (a.block_name > b.block_name)
                    return 1;
                return 0;
            });
        }
    }
    mySelectBlock(event, _sSchool) {
        debugger;
        if (event == "none") {
            this.selectedBlock = {};
            this.presentModal();
        }
        else {
            let a = this.BlockList.find((data) => data.block_id == event.value.block_id);
            this.selectedBlock = a;
            this.getSchoolList();
        }
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            this.allSchoolList.forEach((element) => {
                this.unVisitedSchoolList = this.unVisitedSchoolList.filter((data) => {
                    if (Number(element.school_id) != Number(data.school_id)) {
                        return data;
                    }
                });
            });
            const modal = yield this.modalController.create({
                component: src_app_components_dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_10__.DashboardmodalComponent,
                cssClass: "my-custom-modal-dashboarc",
                backdropDismiss: false,
                componentProps: {
                    schoolReason: this.schoolReasons,
                    allSchoolList: this.allSchoolList,
                    unVisitedSchoolList: this.unVisitedSchoolList,
                },
            });
            modal.onDidDismiss().then((response) => {
                if (response.data != "Cancel") {
                    this.schoolReasonList = response.data.reasonList;
                    this.selectedSchool = response.data.schoolDetail;
                    this.sSchool = response.data.schoolDetail;
                    this.allSchoolList.push(this.sSchool);
                    this.loading.dismiss();
                    this.fetchOfflineData();
                }
            });
            return yield modal.present();
        });
    }
    showResult(item, i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_13__.SchoolListModalComponent,
                componentProps: {
                    viewName: item,
                    selectedlevel: this.selectedlevel,
                    questionList: [],
                },
                cssClass: "my-custom-modal-schoolList",
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    showErrorLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_14__.ApiErrorLogComponent,
                componentProps: {
                    selectedlevel: this.selectedlevel,
                    questionList: [],
                },
                cssClass: "my-custom-modal-apierror",
                backdropDismiss: false,
            });
            return yield modal.present();
        });
    }
    fetchOfflineData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.present("Getting School Info");
            let school_data = this.selectedSchool;
            this.selectedSchool = school_data;
            this.getSchoolData();
        });
    }
    goToEmiVerify() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.present();
            var checkSchSelected = Object.keys(this.selectedSchool ? this.selectedSchool : {}).length;
            if (checkSchSelected > 0) {
                this.loading.dismiss();
                let idx = this.findCurrSchDetails(this.selectedSchool.school_id);
                if (idx != -1) {
                    let { isLocationVerify, isPhotoVerified } = this.ppSchBaseDetails[idx];
                    if ((isLocationVerify == 1 && isPhotoVerified == 1) || this.pageMoved == 'yes') {
                        this.goToEmiVerify1();
                    }
                    else {
                        this.checkLocationServices();
                    }
                }
                else {
                    this.getSchoolLocation();
                }
            }
            else {
                this.loading.dismiss();
                this.alertService.warning("Please select school");
            }
            this.loading.dismiss();
        });
    }
    checkLocationServices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('cordova')) {
                try {
                    const isLocationEnabled = yield this.diagnostic.isLocationEnabled();
                    if (!isLocationEnabled) {
                        this.locationAlert();
                        // await this.diagnostic.switchToLocationSettings();
                    }
                    else {
                        this.onLocationCheck();
                    }
                }
                catch (error) {
                    console.error('Error checking location services:', error);
                }
            }
        });
    }
    onLocationCheck() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            let latitude = resp.coords.latitude;
            let longitude = resp.coords.longitude;
            let idx = this.ppSchBaseDetails.findIndex(obj => { return obj.school_id == this.selectedSchool.school_id; });
            if (idx != -1) {
                this.ppSchBaseDetails[idx].userLat = latitude;
                this.ppSchBaseDetails[idx].userLng = longitude;
            }
            else {
                this.ppSchBaseDetails.push({
                    school_id: this.selectedSchool.school_id,
                    userLat: latitude,
                    userLng: longitude,
                });
            }
            ;
            this.getSchoolLocation();
        }).catch((error) => {
            if (error.message === 'Illegal Access') {
                this.alertService.alertToTurnOnPermission('Location', 'Location');
            }
        });
    }
    locationAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.languageType == 'ta') {
            //   var msg = '';
            // } else {
            var msg = 'Please Enable Mobile Location!!!';
            // }
            this.alert1 = yield this.alertController.create({
                header: 'Confirmation',
                message: msg,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: () => {
                            this.dismissAlert();
                        }
                    }, {
                        text: 'Ok',
                        cssClass: 'custom-button',
                        handler: () => {
                            this.diagnostic.switchToLocationSettings();
                            this.dismissAlert1();
                        }
                    }
                ]
            });
            yield this.alert1.present();
        });
    }
    dismissAlert1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alert) {
                yield this.alert1.dismiss();
            }
        });
    }
    presentAlertConfirmExit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.languageType == 'ta') {
                var msg = 'பள்ளி நுழைவாயிலின் முன் நீங்கள் எடுத்த ' + '<b>செல்ஃபி</b>' + ' படத்தை புவி இடம் இயக்கி பதிவு செய்யுங்கள்';
            }
            else {
                var msg = 'Take a ' + '<b>selfie</b>' + ' of yourself in front of the school entrance with geo-location enabled';
            }
            this.alert = yield this.alertController.create({
                header: 'Confirmation',
                message: msg,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: () => {
                            this.dismissAlert();
                            this.attendanceMark();
                        }
                    }, {
                        text: 'TAKE PHOTO',
                        cssClass: 'custom-button',
                        handler: () => {
                            this.handleTakePhoto();
                        }
                    }
                ]
            });
            yield this.alert.present();
        });
    }
    handleTakePhoto() {
        let idx = this.findCurrSchDetails(this.selectedSchool.school_id);
        if (idx != -1) {
            let { userLat, userLng } = this.ppSchBaseDetails[idx];
            this.takeLatLngCapImg(userLat, userLng);
        }
        else {
            this.takeLatLngCapImg('', '');
        }
    }
    dismissAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alert) {
                yield this.alert.dismiss();
            }
        });
    }
    cameraPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            if (this.platform.is('cordova')) {
                yield this.checkCameraPermission();
            }
        });
    }
    checkCameraPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const status = yield this.diagnostic.getCameraAuthorizationStatus();
                switch (status) {
                    case this.diagnostic.permissionStatus.GRANTED:
                        this.getSchoolLocation();
                        break;
                    case this.diagnostic.permissionStatus.NOT_REQUESTED:
                        yield this.requestCameraPermission();
                        break;
                    case this.diagnostic.permissionStatus.DENIED:
                        this.alertService.error('Camera permission is denied.');
                        break;
                    case this.diagnostic.permissionStatus.DENIED_ALWAYS:
                        this.alertService.error('Camera permission is permanently denied.');
                        break;
                    default:
                        this.alertService.error('Unknown permission status.');
                }
            }
            catch (error) {
                this.alertService.error(error);
                console.error('Error checking camera permission:', error);
            }
        });
    }
    requestCameraPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.diagnostic.requestCameraAuthorization();
                yield this.checkCameraPermission();
            }
            catch (error) {
                console.error('Error requesting camera permission:', error);
            }
        });
    }
    getSchoolLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            let idx = this.findCurrSchDetails(this.selectedSchool.school_id);
            debugger;
            if (idx != -1) {
                let kmVal = yield this.compareLatLng(this.ppSchBaseDetails[idx], this.selectedSchool);
                let locSts = kmVal <= 0.5 ? 1 : 2;
                this.ppSchBaseDetails[idx].isLocationVerify = locSts;
                this.ppSchBaseDetails[idx].locErrmsg = locSts == 2 ? "Please goto near the school / தயவுசெய்து பள்ளிக்கு அருகில் செல்லுங்கள்" : "";
                this.attendanceMark();
            }
            else {
                this.checkLocationServices();
            }
        });
    }
    requestPermissions(lat, long) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.platform.is('android')) {
                const permissions = yield this.diagnostic.requestCameraAuthorization();
                if (permissions === this.diagnostic.permissionStatus.GRANTED) {
                    this.takeLatLngCapImg(lat, long);
                }
                else {
                    console.error('Camera permission not granted');
                }
            }
        });
    }
    takeLatLngCapImg(lat, long) {
        debugger;
        localStorage.setItem("schoollat", lat);
        localStorage.setItem("schoollong", long);
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.FRONT,
            correctOrientation: false,
            // allowEdit: false,
        };
        let photoErrhandle = setTimeout((msg) => {
            document.dispatchEvent(new Event('backbutton'));
            this.onSelect();
        }, 30000);
        this.platform.ready().then(() => {
            this.camera.getPicture(options).then((imageData) => {
                clearTimeout(photoErrhandle);
                // this.capturedImage = 'data:image/jpeg;base64,' + imageData;
                this.capturedImage = imageData;
                this.addWatermark(lat, long);
            }).catch((error) => {
                clearTimeout(photoErrhandle);
                this.onSelect();
            });
        }, error => {
            clearTimeout(photoErrhandle);
            this.onSelect();
        });
    }
    cameraErrorHandle() {
        let idx = this.findCurrSchDetails(this.selectedSchool.school_id);
        this.ppSchBaseDetails[idx].schoollatimg = "";
        this.ppSchBaseDetails[idx].isPhotoVerified = 2;
        this.ppSchBaseDetails[idx].schImgErrmsg = "Please take photo / தயவுசெய்து புகைப்படம் எடுங்கள்";
    }
    addWatermark(lat, long) {
        try {
            let lat_txt = 'Lat - ' + lat;
            let long_txt = 'Long - ' + long;
            this.watermarkOptions = [
                { text: lat_txt, x: 20, y: 40 },
                { text: long_txt, x: 20, y: 80 }
            ];
            const image = new Image();
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                context.font = '20px Arial';
                context.fillStyle = 'rgba(255, 0, 0)';
                this.watermarkOptions.forEach(option => {
                    context.fillText(option.text, option.x, option.y);
                });
                let capturedImage = canvas.toDataURL('image/jpeg');
                localStorage.setItem("viewschoollatimg", capturedImage);
                this.capturedImage = capturedImage.replace(/^data:image\/(png|jpeg|jpg|gif);base64,/, '');
                localStorage.setItem("schoollatimg", this.capturedImage);
                // this.schoollatimg = localStorage.getItem("schoollatimg");
                let idx = this.findCurrSchDetails(this.selectedSchool.school_id);
                this.ppSchBaseDetails[idx].schoollatimg = this.capturedImage;
                this.ppSchBaseDetails[idx].isPhotoVerified = this.capturedImage ? 1 : 2;
                this.onSelect();
            }, err => {
                console.log(err);
                this.onSelect();
            };
            image.src = this.capturedImage;
        }
        catch (_a) {
            this.onSelect();
        }
    }
    fileUpload(imageData) {
        this.capturedImage = 'data:image/jpeg;base64,' + imageData;
        var bucketName = "renewalapplicationemis";
        let expiry = 300;
        let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
        let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
        var splitedImage = filename.split(".");
        this.file.readAsDataURL(imagename, filename).then((base64string) => {
            if (base64string) {
                const base = base64string.split('base64,');
                const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_16__.base64StringToBlob)(base[1], 'image/jpg');
                if (blob.size <= 5242880) {
                    let obj = { bucketName, ext: splitedImage[1], filename: splitedImage[0], expiry };
                    // this.commonFileUpload(obj, forData, blob, base64string);
                    this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                        if (result) {
                            var key = result.key;
                        }
                    });
                }
                else {
                    this.alertService.error('File Can`t uploaded because Image size should not exceed 5 MB');
                }
            }
        });
    }
    goToEmiVerify1() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
            let JsonData = [];
            let basic_info = { "basic_info": {} };
            let level = localStorage.getItem("selectedlevel");
            let createdby_role_id = localStorage.getItem("createdby_role");
            const usertype = localStorage.getItem("usertype");
            const veracity_type = localStorage.getItem("veracity_type");
            basic_info["basic_info"]["level"] = level;
            basic_info["basic_info"]["createdby_role"] = createdby_role_id;
            basic_info["basic_info"]["veracity_type"] = veracity_type;
            basic_info["basic_info"]["created_by"] = localStorage.getItem("username");
            if (!this.masterApiResponse.basic_info) {
                let getMasterData = JSON.parse(localStorage.getItem("masterdata"));
                this.masterApiResponse.basic_info = getMasterData.basic_info;
            }
            basic_info["basic_info"]["school_id"] = this.masterApiResponse.basic_info.school_id;
            basic_info["basic_info"]["school_name"] = this.masterApiResponse.basic_info.school_name;
            basic_info["basic_info"]["district_id"] = this.masterApiResponse.basic_info.dist_id;
            basic_info["basic_info"]["district_name"] = this.masterApiResponse.basic_info.district_name;
            basic_info["basic_info"]["edu_dist_id"] = this.masterApiResponse.basic_info.edu_dist_id;
            basic_info["basic_info"]["edu_dist_name"] = this.masterApiResponse.basic_info.edu_dist_name;
            basic_info["basic_info"]["block_id"] = this.masterApiResponse.basic_info.block_id;
            basic_info["basic_info"]["block_name"] = this.masterApiResponse.basic_info.block_name;
            // basic_info["basic_info"]["zone_id"] = this.masterApiResponse.basic_info.nodal_id;
            basic_info["basic_info"]["workflow"] = localStorage.getItem("selectedWorkflow");
            // basic_info["basic_info"]["schlManageId"] = this.schlManageId;    
            JsonData.push(basic_info);
            // if(this.storeDetail==null){
            if (localStorage.getItem("saveApiCall") == '0') {
                debugger;
                this._apiService.postfinalinfo({ json: JSON.stringify(JsonData) }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        if (data.status == 200 && data.dataStatus == true) {
                            localStorage.setItem("observation_id", data === null || data === void 0 ? void 0 : data.records);
                            localStorage.setItem("saveApiCall", '1');
                        }
                        else {
                            throw data.msg;
                        }
                    }
                    catch (err) {
                        this._alertService.showAlert(err);
                    }
                }), (error) => {
                    this._alertService.showAlert(error);
                });
            }
            if (this.pageMoved == undefined) {
                debugger;
                if (this.selectedSchool == undefined ||
                    (Object.keys(this.selectedSchool).length == 0 &&
                        this.selectedSchool.constructor == Object)) {
                    this._alertService.showAlert(this.chooseSchool);
                }
                else {
                    if (((_a = this.masterApiResponse) === null || _a === void 0 ? void 0 : _a.teacher_details) == null) {
                        let logData = {
                            username: localStorage.getItem("username"),
                            udise_code: localStorage.getItem("udise_code"),
                            form_name: "Dashboard Api",
                            action_name: "No teacher found",
                            data: "Teacher Not found : " + JSON.stringify((_b = this.masterApiResponse) === null || _b === void 0 ? void 0 : _b.teacher_details),
                            completion_percentage: "0"
                        };
                        this._apiService.setActivityLog(logData).subscribe((response) => {
                        }, (error) => {
                            this._alertService.showAlert("SOMETHING WENT WRONG");
                        });
                        this._alertService.showAlert(this.noTeacherFound);
                    }
                    else {
                        var today = new Date();
                        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                        var dateTime = date + ' ' + time;
                        let pageValues = {
                            pageNo: "1",
                            pageName: "dashboard",
                            pageDetails: {
                                school_id: this.selectedSchool.school_id,
                                school_name: this.selectedSchool.school_name,
                                schoolsReasons: this.schoolReasonList,
                                start_time: dateTime,
                                udise_code: localStorage.getItem("udise_code")
                            },
                            pageMoved: "yes",
                        };
                        if (this.udise_code) {
                            pageValues.pageDetails.udise_code = this.udise_code;
                        }
                        this.ionicStore.getStoreData().then((response) => {
                            this.storeDetail = response;
                            this.storeDetail.pages.pageData[0] = pageValues;
                            this.ionicStore.setStoreData(this.storeDetail);
                            this._apiService.languageDisableUpdate(true);
                            if (this.selectedlevel) {
                                if (Number(this.selectedlevel) == 1 && this.usertype != 5) {
                                    let apiData = {
                                        pageNo: "2",
                                        pageName: "emiselection",
                                        apiResponse: {
                                            records: {},
                                        },
                                        pageDetails: {},
                                        pageFlow: "observation",
                                        correctedDetails: {},
                                        correctedClass: {},
                                    };
                                    this.storeDetail.pages.pageData[1] = apiData;
                                    this.ionicStore.setStoreData(this.storeDetail);
                                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                                    this.navigateToClassRoom();
                                    // this._router.navigate(["/tnvntabs/page-route/index"]);              
                                }
                                else if (this.usertype == 5) {
                                    let apiData = {
                                        pageNo: "2",
                                        pageName: "emiselection",
                                        apiResponse: {
                                            records: {},
                                        },
                                        pageDetails: {},
                                        pageFlow: "observation",
                                        correctedDetails: {},
                                        correctedClass: {},
                                    };
                                    this.storeDetail.pages.pageData[1] = apiData;
                                    this.ionicStore.setStoreData(this.storeDetail);
                                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                                    this.navigateToClassRoom();
                                    // this._router.navigate(["/tnvntabs/page-route/index"]);                 
                                }
                                else {
                                    this.navigateToClassRoom();
                                    // this._router.navigate(["/tnvntabs/page-route/index"]);                 
                                }
                            }
                            else {
                                this.navigateToClassRoom();
                                // this._router.navigate(["/tnvntabs/page-route/index"]);
                            }
                        });
                    }
                }
            }
            else {
                let currentPage = this.storeDetail.pages.currentPage;
                if (currentPage == "classRoom") {
                    this.navigateToClassRoom();
                    // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'currentPage': currentPage , 'school_id': this.selectedSchool.school_id}});
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'currentPage': currentPage, 'school_id': this.selectedSchool.school_id } });
                }
            }
        });
    }
    onSelect() {
        var _a, _b;
        debugger;
        this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
        if (((_a = this.masterApiResponse) === null || _a === void 0 ? void 0 : _a.teacher_details) == null) {
            let logData = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                form_name: "Dashboard Api",
                action_name: "No teacher found",
                data: "Teacher Not found : " + JSON.stringify((_b = this.masterApiResponse) === null || _b === void 0 ? void 0 : _b.teacher_details),
                completion_percentage: "0"
            };
            this._apiService.setActivityLog(logData).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            this._alertService.showAlert(this.noTeacherFound);
        }
        else {
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            let pageValues = {
                pageNo: "1",
                pageName: "dashboard",
                pageDetails: {
                    school_id: this.selectedSchool.school_id,
                    school_name: this.selectedSchool.school_name,
                    schoolsReasons: this.schoolReasonList,
                    start_time: dateTime,
                    udise_code: localStorage.getItem("udise_code")
                },
                pageMoved: "yes",
            };
            if (this.udise_code) {
                pageValues.pageDetails.udise_code = this.udise_code;
            }
            this.ionicStore.getStoreData().then((response) => {
                this.storeDetail = response;
                this.storeDetail.pages.pageData[0] = pageValues;
                this.ionicStore.setStoreData(this.storeDetail);
                this._apiService.languageDisableUpdate(true);
                if (this.selectedlevel) {
                    if (Number(this.selectedlevel) == 1 && this.usertype != 5) {
                        let apiData = {
                            pageNo: "2",
                            pageName: "emiselection",
                            apiResponse: {
                                records: {},
                            },
                            pageDetails: {},
                            pageFlow: "observation",
                            correctedDetails: {},
                            correctedClass: {},
                        };
                        this.storeDetail.pages.pageData[1] = apiData;
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                        this.navigateToClassRoom();
                        // this._router.navigate(["/tnvntabs/page-route/index"]);              
                    }
                    else if (this.usertype == 5) {
                        let apiData = {
                            pageNo: "2",
                            pageName: "emiselection",
                            apiResponse: {
                                records: {},
                            },
                            pageDetails: {},
                            pageFlow: "observation",
                            correctedDetails: {},
                            correctedClass: {},
                        };
                        this.storeDetail.pages.pageData[1] = apiData;
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                        this.navigateToClassRoom();
                        // this._router.navigate(["/tnvntabs/page-route/index"]);                 
                    }
                    else {
                        this.navigateToClassRoom();
                        // this._router.navigate(["/tnvntabs/page-route/index"]);                 
                    }
                }
                else {
                    this.navigateToClassRoom();
                    // this._router.navigate(["/tnvntabs/page-route/index"]);
                }
            });
        }
    }
    attendanceMark() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            let idx = this.findCurrSchDetails(this.selectedSchool.school_id);
            const modal = yield this.modalController.create({
                component: _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_19__.PpMarkAttendancePage,
                cssClass: "view-image-modal",
                backdropDismiss: false,
                componentProps: {
                    data: Object.assign(Object.assign({}, this.selectedSchool), this.ppSchBaseDetails[idx]),
                },
            });
            modal.onDidDismiss().then((response) => {
                if (response.data.callBackVal == 1) {
                    this.checkLocationServices();
                }
                else if (response.data.callBackVal == 2) {
                    this.presentAlertConfirmExit();
                }
                else if (response.data.callBackVal == 3) {
                    this.onSelect();
                }
            });
            return yield modal.present();
        });
    }
    navigateToClassRoom() {
        this._router.navigate([
            "/tnvntabs/page-route/classroom",
        ]);
    }
    findCurrSchDetails(school_id) {
        let idx = this.ppSchBaseDetails.findIndex(obj => { return obj.school_id == school_id; });
        return idx;
    }
    compareLatLng(user, school) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            let kmDiff = ((this.getDistanceFromLatLonInKm(user.userLat, user.userLng, school.latitude, school.longitude) * 100) / 100).toFixed(3);
            return kmDiff;
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in kilometers
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in KM
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
};
DashboardcComponent.ctorParameters = () => [
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService },
    { type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__.PostService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute },
    { type: _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__.Keyboard },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_11__.UserSessionService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__.IonicStorageService },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_27__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_15__.File },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_17__.UploadService },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__.Diagnostic },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_20__.NetworkService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__.AndroidPermissions }
];
DashboardcComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.Component)({
        selector: "app-dashboardc",
        template: _raw_loader_dashboardc_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboardc_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardcComponent);



/***/ }),

/***/ 19649:
/*!************************************************************!*\
  !*** ./src/app/pages/tnvn/dashboardc/dashboardc.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardcPageModule": function() { return /* binding */ DashboardcPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboardc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboardc.component */ 52762);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 93319);
/* harmony import */ var _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pp-mark-attendance/pp-mark-attendance.page */ 39448);










const routes = [
    {
        path: '',
        component: _dashboardc_component__WEBPACK_IMPORTED_MODULE_0__.DashboardcComponent
    }
];
let DashboardcPageModule = class DashboardcPageModule {
};
DashboardcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        declarations: [_dashboardc_component__WEBPACK_IMPORTED_MODULE_0__.DashboardcComponent, _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_2__.PpMarkAttendancePage],
        entryComponents: [],
        exports: []
    })
], DashboardcPageModule);



/***/ }),

/***/ 39448:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tnvn/dashboardc/pp-mark-attendance/pp-mark-attendance.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PpMarkAttendancePage": function() { return /* binding */ PpMarkAttendancePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_pp_mark_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pp-mark-attendance.page.html */ 76464);
/* harmony import */ var _pp_mark_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pp-mark-attendance.page.scss */ 77822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);





let PpMarkAttendancePage = class PpMarkAttendancePage {
    constructor(modalCtrl, navParams, alertController) {
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.paramData = {};
        this.paramData = this.navParams.get('data');
        debugger;
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalCtrl.dismiss({
            callBackVal: 4
        });
    }
    callParentFun(val) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            if (val == 3) {
                let msg = '';
                let isNotverify = false;
                if (this.paramData.isPhotoVerified != 1) {
                    isNotverify = true;
                    msg = "Selfie photo not verified , Please take Selfie photo!/செல்ஃபி புகைப்படம் சரிபார்க்கப்படவில்லை, செல்ஃபி புகைப்படம் எடுங்கள்!";
                }
                else {
                    this.modalCtrl.dismiss({
                        callBackVal: val
                    });
                }
                if (isNotverify) {
                    this.alert = yield this.alertController.create({
                        header: 'Confirmation',
                        message: msg,
                        buttons: [
                            {
                                text: 'Okay',
                                cssClass: 'custom-button',
                                handler: () => {
                                    this.modalCtrl.dismiss({
                                        callBackVal: 2
                                    });
                                }
                            }
                        ]
                    });
                    yield this.alert.present();
                }
            }
            else {
                this.modalCtrl.dismiss({
                    callBackVal: val
                });
            }
        });
    }
    dismissAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.alert) {
                yield this.alert.dismiss({
                    callBackVal: 4
                });
            }
        });
    }
};
PpMarkAttendancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
PpMarkAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pp-mark-attendance',
        template: _raw_loader_pp_mark_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pp_mark_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PpMarkAttendancePage);



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

/***/ 74052:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tnvn/dashboardc/dashboardc.component.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-bottom {\n  position: absolute;\n  bottom: 0;\n}\n\n.margin-top-10 {\n  margin-top: 10px;\n}\n\nion-content {\n  --ion-background-color:#e6deed;\n}\n\n.progressData-outer {\n  width: 100%;\n  text-align: center;\n  background-color: #c4c4c4;\n  color: #fff;\n}\n\n.progressData-inner {\n  overflow: hidden;\n  background-color: #2d9cdb;\n  height: 20px;\n}\n\n.percentageData-value {\n  position: absolute;\n  top: 0;\n  margin-bottom: 0;\n  width: 100%;\n}\n\n.last-row {\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  line-height: 1.5;\n}\n\n.width-70 {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.width-school {\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.list-md {\n  padding: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n/* Zebra striping */\n\nth {\n  color: #000;\n  font-weight: bold;\n}\n\ntd, th {\n  padding: 6px;\n  word-break: break-all;\n  text-align: left;\n}\n\nion-alert .photo {\n  font-weight: bold;\n}\n\n.custom-button {\n  font-weight: bold;\n  /* Example of making text bold */\n}\n\n.location {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZGMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFGQSxtQkFBQTs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxpQkFBQTtFQUFtQixnQ0FBQTtBQU1yQjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTZkZWVkO1xyXG59XHJcbi5wcm9ncmVzc0RhdGEtb3V0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NEYXRhLWlubmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDljZGI7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucGVyY2VudGFnZURhdGEtdmFsdWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGFzdC1yb3d7ICBcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVcclxufVxyXG4ud2lkdGgtNzAge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi53aWR0aC1zY2hvb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxpc3QtbWR7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxudGFibGUgeyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG4vKiBaZWJyYSBzdHJpcGluZyAqL1xyXG5cclxudGggeyAgIFxyXG4gIGNvbG9yOiAjMDAwOyBcclxuICBmb250LXdlaWdodDogYm9sZDsgICBcclxufVxyXG50ZCwgdGggeyBcclxuICBwYWRkaW5nOiA2cHg7ICAgXHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IFxyXG59XHJcblxyXG5pb24tYWxlcnQgLnBob3RvIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBFeGFtcGxlIG9mIG1ha2luZyB0ZXh0IGJvbGQgKi9cclxuICAvLyBjb2xvcjogI2ZmNTcyMjsgLyogRXhhbXBsZSBidXR0b24gdGV4dCBjb2xvciAqL1xyXG59XHJcblxyXG4vLyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDsgXHJcbi8vIH1cclxuXHJcbi5sb2NhdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 77822:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tnvn/dashboardc/pp-mark-attendance/pp-mark-attendance.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  padding: 16px;\n  margin-top: 30px;\n}\n\n.main img {\n  /* max-width: 100%; */\n  height: auto;\n}\n\n.cusion-col {\n  background-color: #e8e8e8;\n  border: solid 1px var(--seconday-color);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.zoom2 {\n  zoom: 2;\n}\n\n.Cuscontent-wrapper {\n  background: #e6deed;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBwLW1hcmstYXR0ZW5kYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUVOOztBQUNFO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLE9BQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InBwLW1hcmstYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLm1haW4gaW1nIHtcclxuICAgICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY3VzaW9uLWNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXktY29sb3IpO1xyXG4gICAgLy8gY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuem9vbTIge1xyXG4gICAgem9vbTogMjtcclxuICB9XHJcblxyXG4gIC5DdXNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZGVlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */");

/***/ }),

/***/ 77069:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/dashboardc/dashboardc.component.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"t-8\" (click)=\"quickNavigation()\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"><b>{{ this.welcome\r\n              }}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <button (click)=\"showErrorLog()\" style=\"background: #e6deed;float:right;padding-top: 0px;\">\r\n    <ion-icon name=\"alert-circle-outline\" style=\"float:right;font-size: 30px;\"></ion-icon>\r\n  </button>\r\n  <div class=\"content-wrapper\" style=\"border:none;background-color:none\">\r\n    <ion-text color=\"dark\" class=\"ion-text-center position-relative\">\r\n      <h2 class=\"color-dgrey mt-0\">\r\n        <b><span [ngClass]=\"{\r\n              'ta-font': this.languageType == 'ta',\r\n              'fs-25': this.languageType == 'ta',\r\n              'fs-30': this.languageType == 'en'\r\n            }\">{{ this.greetings }}</span>!</b>\r\n      </h2>\r\n      <p class=\"color-dgrey fs-12\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n        <b>{{ this.observationTarget }}:</b>\r\n      </p>\r\n      <div class=\"img-schools\">\r\n        <ion-progress-bar color=\"warning rounded-pill\" value=\"{{ observedSchool }}\" class=\"border-radius h-8\">\r\n        </ion-progress-bar>\r\n      </div>\r\n      <p class=\"fs-12 width-70\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.schoolsVisited\r\n          }}</span>\r\n        :\r\n        <b>{{ visitedcount }} /\r\n          {{ classTarget }}</b>\r\n      </p>\r\n    </ion-text>\r\n    <ion-text *ngIf=\"daily_school_target>0\">\r\n      <p class=\"fs-12 width-school\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">Daily : Number of schools Observed/School\r\n          Target</span>\r\n        :\r\n        <b>{{ daily_school_count }} /\r\n          {{ daily_school_target }}</b>\r\n      </p>\r\n    </ion-text>\r\n\r\n    <ion-text *ngIf=\"daily_class_target>0\">\r\n      <p class=\"fs-12 width-school\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">Daily : Number of Class Observed/Class Target</span>\r\n        :\r\n        <b>{{ daily_class_count }} /\r\n          {{ daily_class_target }}</b>\r\n      </p>\r\n    </ion-text>\r\n    <ion-text color=\"dark\" class=\"ion-text-center\">\r\n      <p class=\"color-dgrey mt-3\">\r\n        <span [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta',\r\n            'fs-18': this.languageType == 'ta'\r\n          }\">\r\n          {{ this.observedOn }} </span>:<br />\r\n        <b *ngIf=\"which_user == 'dummy_user'\"> {{ currentDate != \"\" ? currentDate : \"NONE\" }}</b>\r\n        <b *ngIf=\"which_user == 'state' || which_user == 'district'\"> {{ curDate | date:'dd-MM-yyyy'}}</b>\r\n      </p>\r\n    </ion-text>\r\n\r\n    <ion-list lines=\"none\" style=\"background: #e6deed\" class=\"p-0\">\r\n      <p class=\"ion-text-center mb-0\" [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-14': this.languageType == 'ta'\r\n        }\">\r\n        <b *ngIf=\"which_user == 'dummy_user'\">{{ this.classroomObservation }}:</b>\r\n        <!-- <b *ngIf=\"which_user == 'state'\">{{ this.selectSchool }}</b><br> -->\r\n        <b *ngIf=\"which_user == 'state' || which_user == 'district'\">{{ this.observeSchool }}</b>\r\n      </p>\r\n\r\n      <!-- <p>districtDropDown - {{districtDropDown}}</p>\r\n      <p>pageMoved - {{pageMoved}}</p>\r\n      <p>which_user - {{which_user}}</p>\r\n      <p>blockDropDown - {{blockDropDown}}</p>\r\n      <p>usertype - {{usertype}}</p>\r\n      <pre> sdfs - {{blockfinalListData | json}}</pre> -->\r\n\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"districtDropDown == 1&&pageMoved != 'yes'&&which_user == 'state'\"\r\n        class=\"border\">\r\n        <ion-label>Select District</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedDistrictData\"\r\n          (ngModelChange)=\"SelectStateUserDistrict($event, selectedDistrictData)\"\r\n          *ngIf=\"this.districtfinalDataList?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let districtDatas of this.districtfinalDataList\"\r\n            [value]=\"districtDatas.district_id\">{{ districtDatas.district_name }}\r\n            ({{districtDatas.levelsbyDistrictwise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'state'\"\r\n        class=\"border\">\r\n        <ion-label>Select Block</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedBlockData\" (ngModelChange)=\"SelectStateUserBlock($event, selectedBlockData)\"\r\n          *ngIf=\"this.blockfinalListData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let BlockData of this.blockfinalListData\" [value]=\"BlockData.block_id\">{{\r\n            BlockData.block_name }} ({{BlockData.levelsbyBlockwise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'state'\"\r\n        class=\"border\">\r\n        <ion-label>{{this.schooltype}}</ion-label>\r\n        <ion-select [(ngModel)]=\"sVeracity\" (ngModelChange)=\"SelectStateUserVeracity($event, sVeracity)\"\r\n          *ngIf=\"veracityList.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let veracity of veracityList\" [value]=\"veracity\">{{ veracity.schooltypename }}\r\n            ({{veracity.levelsbySchoolTypewise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'district'\"\r\n        class=\"border\">\r\n        <ion-label>Select Block</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedBlockData\" (ngModelChange)=\"SelectDistrictUserBlock($event, selectedBlockData)\"\r\n          *ngIf=\"this.blockfinalListData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let BlockData of this.blockfinalListData\" [value]=\"BlockData.block_id\">{{\r\n            BlockData.block_name }} ({{BlockData.levelsbyBlockwise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'district'\"\r\n        class=\"border\">\r\n        <ion-label>{{this.schooltype}}</ion-label>\r\n        <ion-select [(ngModel)]=\"sVeracity\" (ngModelChange)=\"SelectDistrictUserVeracity($event, sVeracity)\"\r\n          *ngIf=\"veracityList.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let veracity of veracityList\" [value]=\"veracity\">{{ veracity.schooltypename }}\r\n            ({{veracity.levelsbySchoolTypewise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"districtDropDown == 1&&pageMoved != 'yes'&&which_user == 'dummy_user'\"\r\n        class=\"border\">\r\n        <ion-label>Select District</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedDistrictData\" (ngModelChange)=\"SelectDistrict($event, selectedDistrictData)\"\r\n          *ngIf=\"this.districtData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let districtDatas of this.districtData\" [value]=\"districtDatas.id\">{{\r\n            districtDatas.district_name }}</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'dummy_user'\"\r\n        class=\"border\">\r\n        <ion-label>Select Block</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedBlockData\" (ngModelChange)=\"SelectBlock($event, selectedBlockData)\"\r\n          *ngIf=\"this.blockListData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let BlockData of this.blockListData\" [value]=\"BlockData.block_id\">{{\r\n            BlockData.block_name }}</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'dummy_user'\"\r\n        class=\"border\">\r\n        <ion-label>{{this.schooltype}}</ion-label>\r\n        <ion-select [(ngModel)]=\"sVeracity\" (ngModelChange)=\"SelectVeracity($event, sVeracity)\"\r\n          *ngIf=\"veracityList.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let veracity of veracityList\" [value]=\"veracity\">{{ veracity.schooltypename\r\n            }}</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"usertype==5&&pageMoved != 'yes'\" class=\"border\">\r\n        <ion-label>{{ this.chooseSchool }}</ion-label>\r\n        <ionic-selectable style=\"max-width:45% !important\" [(ngModel)]=\"selectedSchool\" [items]=\"allSchoolList\"\r\n          itemValueField=\"school_id\" itemTextField=\"school_name\" [canSearch]=\"true\"\r\n          (onChange)=\"mySelectHandler($event, selectedSchool)\">\r\n        </ionic-selectable>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"usertype!=5 && usertype!= 8 &&pageMoved != 'yes'\" class=\"border\">\r\n        <ion-label>{{ this.chooseSchool }}</ion-label>\r\n        <ionic-selectable style=\"max-width:45% !important\" [(ngModel)]=\"selectedSchool\" [items]=\"allSchoolList\"\r\n          itemValueField=\"school_id\" itemTextField=\"school_name\" [canSearch]=\"true\"\r\n          (onChange)=\"mySelectHandler($event, selectedSchool)\">\r\n        </ionic-selectable>\r\n        <!-- <ion-select\r\n          [(ngModel)]=\"sSchool\"\r\n          (ngModelChange)=\"mySelectHandler($event, sSchool)\"\r\n          *ngIf=\"allSchoolList.length; else noFound\"\r\n        >          \r\n          <ion-select-option\r\n            *ngFor=\"let school of allSchoolList\"\r\n            [value]=\"school.school_id\"\r\n            >{{ school.school_name }}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"selectedlevel!='1'\"\r\n            [value]=\"'none'\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n            >{{ this.noneAbove }}</ion-select-option\r\n          >\r\n        </ion-select> -->\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"usertype == 8\">\r\n        <div class=\"ion-text-center m-auto\">\r\n          <p class=\"mb-3\">{{ selectedSchool?.school_name }}</p>\r\n          <div *ngIf=\"currentPercentage>0\" class=\"progressData-outer position-relative\">\r\n            <div class=\"progressData-inner\" [style.width.%]=\"currentPercentage\"></div>\r\n            <p class=\"percentageData-value\">\r\n              {{ currentPercentage }}%\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                this.completed\r\n                }}</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"usertype!=8&& pageMoved == 'yes'\">\r\n        <div class=\"ion-text-center m-auto\" style=\"width:100%;\">\r\n          <p class=\"mb-3\">{{ selectedSchool?.school_name }}</p>\r\n          <div *ngIf=\"currentPercentage>0\" class=\"progressData-outer position-relative\">\r\n            <div class=\"progressData-inner\" [style.width.%]=\"currentPercentage\"></div>\r\n            <p class=\"percentageData-value\">\r\n              {{ currentPercentage }}%\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{completed}}</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n      <ion-row *ngIf=\"udiseCodeEntry == 1&&pageMoved != 'yes'\" class=\"ion-row-list-none\">\r\n        <ion-item style=\"text-align:center;width:100%\">\r\n          <ion-label class=\"fs-14 c_pl-2\"><b><span style=\"font-size: 18px;\"\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n                ({{this.eitherOR}})\r\n              </span></b><br />\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"udiseCodeEntry == 1&&pageMoved != 'yes'\" class=\"ion-row-list-none\" style=\"padding-bottom: 10px;\">\r\n        <ion-item style=\"text-align:center;width:100%\">\r\n          <ion-label class=\"c_pl-2\"><b *ngIf=\"which_user == 'dummy_user'\"><span\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n                {{enterUdiseCode}}\r\n              </span>:</b>\r\n            <b *ngIf=\"which_user == 'state'||which_user == 'district'\"><span\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n                {{anyschoolUdiseCode}}\r\n              </span>:</b><br />\r\n            <input type=\"number\" required pattern=\"[0-9]\" onkeypress=\"return !(event.charCode == 46)\"\r\n              (click)=\"isKeyboardHide=false\" [(ngModel)]=\"udise_code\" style=\"width:80%;padding:10px\" />\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item style=\"width:100%\">\r\n          <ion-button (click)=gotoinspection()\r\n            style=\"justify-content:center;width:80%;margin-left:2rem;height:100%! important;margin-top:1rem;text-align:center;color:#fff\">\r\n            {{startSchoolObservation}}\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-row>\r\n\r\n\r\n      <table style=\"width:100%;margin-left:25px\"\r\n        *ngIf=\"udiseCodeEntry == 1&&inspectionType==1&&inspectionDistrict&&pageMoved != 'yes'\">\r\n        <tr>\r\n          <td></td>\r\n          <th scope=\"row\">{{district}}</th>\r\n          <td>:</td>\r\n          <td>{{inspectionDistrict}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td></td>\r\n          <th scope=\"row\">{{block}}</th>\r\n          <td>:</td>\r\n          <td>{{inspectionBlock}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td></td>\r\n          <th scope=\"row\">{{school}}</th>\r\n          <td>:</td>\r\n          <td>{{inspectionSchool}}</td>\r\n        </tr>\r\n      </table>\r\n    </ion-list>\r\n\r\n    <ion-grid *ngIf=\"observedSchoolList.length>0 && usertype !=6\"\r\n      style=\"background-color: #fff;border-radius: 15px;padding:0\">\r\n      <!-- <ion-card style=\"border-radius: 8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n          <ion-card-title > -->\r\n      <ion-row justify-content-end\r\n        style=\"background-color: #d5cae0;border-top-left-radius: 15px;border-top-right-radius: 15px;line-height: 1.5\">\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Block Name\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Observed count\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          View Schools\r\n        </ion-col>\r\n        <!-- <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                View School list\r\n              </ion-col>                 -->\r\n      </ion-row>\r\n      <!-- </ion-card-title>                                    \r\n      </ion-card>    -->\r\n\r\n      <ion-row *ngFor=\"let school of observedSchoolList;let i = index\" justify-content-end\r\n        style=\"background-color: #fff;color:#000;line-height:1.5;border-bottom: 1px solid #000;\"\r\n        [ngClass]=\"{'last-row': i == observedSchoolList.length-1}\">\r\n        <ion-col padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\" align-self-stretch>\r\n          {{ school?.block_name }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          {{ school?.observed_count }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          <ion-button style=\"width:100%\" (click)=\"showResult(school,i)\">\r\n            View\r\n          </ion-button>\r\n        </ion-col>\r\n        <!-- <ion-col  padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                    View\r\n              </ion-col>                      -->\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n    <ion-grid *ngIf=\"observedSchoolList.length>0 &&usertype==6\"\r\n      style=\"background-color: #fff;border-radius: 15px;padding:0\">\r\n      <!-- <ion-card style=\"border-radius: 8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n          <ion-card-title > -->\r\n      <ion-row justify-content-end\r\n        style=\"background-color: #d5cae0;border-top-left-radius: 15px;border-top-right-radius: 15px;line-height: 1.5\">\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Cluster Name\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Observed count\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          View Schools\r\n        </ion-col>\r\n        <!-- <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                View School list\r\n              </ion-col>                 -->\r\n      </ion-row>\r\n      <!-- </ion-card-title>                                    \r\n      </ion-card>    -->\r\n\r\n      <ion-row *ngFor=\"let school of observedSchoolList;let i = index\" justify-content-end\r\n        style=\"background-color: #fff;color:#000;line-height:1.5;border-bottom: 1px solid #000;\"\r\n        [ngClass]=\"{'last-row': i == observedSchoolList.length-1}\">\r\n        <ion-col padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\" align-self-stretch>\r\n          {{ school?.cluster_name }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          {{ school?.observed_count }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          <ion-button style=\"width:100%\" (click)=\"showResult(school,i)\">\r\n            View\r\n          </ion-button>\r\n        </ion-col>\r\n        <!-- <ion-col  padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                    View\r\n              </ion-col>                      -->\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n    <ion-text *ngIf=\"which_user == 'dummy_user'\" color=\"dark\" class=\"text-italic text-center text-violet df\">\r\n      <p class=\"pt-3 mb-0\">“{{ todayQuotes?.quotes }}”</p>\r\n    </ion-text>\r\n    <ion-text *ngIf=\"which_user == 'state'||which_user == 'district'\" color=\"dark\"\r\n      class=\"text-italic text-center text-violet\">\r\n      <p class=\"pt-3 mb-0\">“{{ todayQuotes?.quotes}}”</p>\r\n    </ion-text>\r\n    <!-- <ion-button *ngIf=\"schoollatimg\" style=\"width:100%;margin-bottom:10px;color:white;margin-top:10px;\" (click)=\"onViewSchoolImage()\">\r\n      View School Image \r\n    </ion-button> -->\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #8B67B3\" *ngIf=\"isKeyboardHide\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n\r\n      <!-- <ion-tab-button *ngIf=\"schoollatimg\" style=\" background: #8B67B3;color: #fff;min-width: 100%;\"\r\n        (click)=\"onViewSchoolImage()\">\r\n        <ion-label>View School Image </ion-label>\r\n      </ion-tab-button><br> -->\r\n\r\n\r\n      <ion-tab-button *ngIf=\"usertype!=8\" style=\" background: #8B67B3;color: #fff;min-width: 100%;\"\r\n        [disabled]=\"!this.masterApiResponse&&pageMoved != 'yes'\" (click)=\"goToEmiVerify()\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta',\r\n            'fs-25': this.languageType == 'en'\r\n          }\" style=\"color: #fff\">{{ pageMoved == \"yes\" ? this.continue : this.start }}<br>\r\n        </ion-label>\r\n        <!-- <ion-label *ngIf=\"pageMoved != 'yes'\" class=\"location\"><span>Note : </span>Please Enable Mobile Location Before Start</ion-label> -->\r\n      </ion-tab-button>\r\n\r\n    \r\n\r\n      <ion-tab-button *ngIf=\"usertype==8\" style=\" background: #8B67B3;color: #fff;min-width: 100%;\"\r\n        (click)=\"goToEmiVerify()\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta',\r\n            'fs-25': this.languageType == 'en'\r\n          }\" style=\"color: #fff\">{{ pageMoved == \"yes\" ? this.continue : this.start }} <br>\r\n        </ion-label>\r\n        <!-- <ion-label *ngIf=\"pageMoved != 'yes'\" class=\"location\"><span>Note : </span>Please Enable Mobile Location Before Start</ion-label> -->\r\n      </ion-tab-button>\r\n    \r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>");

/***/ }),

/***/ 76464:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/dashboardc/pp-mark-attendance/pp-mark-attendance.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"pr-3\">\r\n      <div class=\"ion-text-wrap px-2\">Mark Attendance</div>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div class=\"p-3 Cuscontent-wrapper\">\r\n    <h5>{{paramData.school_name}}</h5>\r\n    <div class=\"mt-3 align-items-center\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"cusion-col\"><b>Fields</b></ion-col>\r\n          <ion-col class=\"cusion-col\"><b>Status</b></ion-col>\r\n          <ion-col class=\"cusion-col\"><b>Action</b></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"cusion-col\">Attendance</ion-col>\r\n          <ion-col class=\"cusion-col\">\r\n              <ion-icon class=\"text-success zoom2\" name=\"checkmark-circle-outline\" *ngIf=\"paramData?.isLocationVerify==1\"></ion-icon>\r\n              <ion-icon class=\"text-danger zoom2\" name=\"close-circle-outline\" *ngIf=\"paramData?.isLocationVerify==2\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-center\">\r\n            <ion-icon class=\"zoom2\" name=\"sync-outline\" *ngIf=\"paramData?.isLocationVerify!=1\" (click)=\"callParentFun(1)\"></ion-icon>\r\n            <span *ngIf=\"paramData?.isLocationVerify==1\">-</span>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-danger mt-2\" size=\"12\" *ngIf=\"paramData?.locErrmsg\"> \r\n            <div>\r\n              {{paramData?.locErrmsg}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"cusion-col\">Photo</ion-col>\r\n          <ion-col class=\"cusion-col\">\r\n            <ion-icon class=\"text-success zoom2\" name=\"checkmark-circle-outline\" *ngIf=\"paramData?.schoollatimg || paramData?.isPhotoVerified==1\"></ion-icon>\r\n            <ion-icon class=\"text-warning zoom2\" name=\"help-circle-outline\" *ngIf=\"!paramData?.isPhotoVerified\"></ion-icon>\r\n            <ion-icon class=\"text-danger zoom2\" name=\"close-circle-outline\" *ngIf=\"!paramData?.schoollatimg && paramData?.isPhotoVerified\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-center\">\r\n            <ion-icon *ngIf=\"paramData?.isPhotoVerified!=1\" class=\"zoom2\" name=\"camera-outline\" (click)=\"callParentFun(2)\"></ion-icon>\r\n            <span *ngIf=\"paramData?.isPhotoVerified==1\">-</span>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-danger mt-2\" size=\"12\" *ngIf=\"paramData?.schImgErrmsg\"> \r\n            <div>\r\n              {{paramData?.schImgErrmsg}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"mt-4 text-center\">\r\n        <ion-button class=\"text-light\" type=\"button\" (click)=\"callParentFun(3)\">Continue</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_dashboardc_dashboardc_module_ts-es2015.js.map