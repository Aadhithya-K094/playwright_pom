(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_emidata_emidata_module_ts"],{

/***/ 9229:
/*!*********************************************************!*\
  !*** ./src/app/pages/tnvn/emidata/emidata.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmidataComponent": function() { return /* binding */ EmidataComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_emidata_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emidata.component.html */ 4774);
/* harmony import */ var _emidata_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emidata.component.scss */ 62675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/post.service */ 62538);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/emimodal/emimodal.component */ 79615);













let EmidataComponent = class EmidataComponent {
    constructor(loading, modalController, _router, _apiService, activatedRoute, _alertService, _postService, ionicStore, _translate) {
        this.loading = loading;
        this.modalController = modalController;
        this._router = _router;
        this._apiService = _apiService;
        this.activatedRoute = activatedRoute;
        this._alertService = _alertService;
        this._postService = _postService;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.classList = [];
        this.check = true;
        this.totalNumberOfBoys = 0;
        this.totalNumberOfGirls = 0;
        this.totalNoOfStudents = 0;
        this.actualValueList = [];
        this.emisdata = {};
        this.listedDistrict = false;
        this.listedEduDistrict = false;
        this.listedBlock = false;
        this.listedZone = false;
        this.listedTotalTeachers = false;
        this.listedTotalStudents = false;
        this.correctedDistrict = "";
        this.correctedEduDistrict = "";
        this.correctedBlock = "";
        this.correctedZone = "";
        this.correctedTotalTeachers = "";
        this.correctedTotalStudents = "";
        this.correctedClass = [];
        this.isOpen = false;
        this.districtList = [];
        this.eduDistList = [];
        this.blockList = [];
        this.zoneList = [];
        this.submitted = false;
        this.getSchoolDetails = (schoolId) => {
            debugger;
            let records = {
                nodal_name: this.masterApiResponse.basic_info.nodal_name,
                nodal_id: this.masterApiResponse.basic_info.nodal_id,
                dist_id: this.masterApiResponse.basic_info.dist_id,
                edu_dist_id: this.masterApiResponse.basic_info.edu_dist_id,
                block_id: this.masterApiResponse.basic_info.block_id,
                block_name: this.masterApiResponse.basic_info.block_name,
                edu_dist_name: this.masterApiResponse.basic_info.edu_dist_name,
                district_name: this.masterApiResponse.basic_info.district_name,
                total: this.masterApiResponse.basic_info.total,
                catty_id: this.masterApiResponse.basic_info.catty_id,
                cate_type: this.masterApiResponse.basic_info.cate_type,
                teach_tot: this.masterApiResponse.basic_info.teach_tot,
                nonteach_tot: this.masterApiResponse.basic_info.nonteach_tot,
                totstaff: this.masterApiResponse.basic_info.totstaff,
                total_students: this.masterApiResponse.basic_info.total_students,
                school_name: this.masterApiResponse.basic_info.school_name,
                school_id: this.masterApiResponse.basic_info.school_id,
                udise_code: this.masterApiResponse.basic_info.udise_code,
                class_info: this.masterApiResponse.class_info,
                districts: this.masterApiResponse.districts,
            };
            this.schoolDetails = records;
            this.actualDetails = records;
            let schoolData = {
                schoolId: this.schoolDetails.school_id,
                schoolName: this.schoolDetails.school_name,
                distName: this.schoolDetails.district_name,
                eduDistName: this.schoolDetails.edu_dist_name,
                blockName: this.schoolDetails.block_name,
                cateType: this.schoolDetails.cate_type,
            };
            this.classList = this.schoolDetails.class_info.filter((data, index) => Number(data.total) != 0);
            this.classList = this.schoolDetails.class_info.filter((data, index) => Number(data.total) != 0);
            this.classList = this.classList.filter((data) => {
                if (Number(this.masterApiResponse.type) == 1) {
                    data.correctedgirls = 0;
                }
                else if (Number(this.masterApiResponse.type) == 2) {
                    data.correctedboys = 0;
                }
                data.TotalStudents = 0;
                return data;
            });
            this.addCorrectedVariable();
            localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
            let apiData = {
                pageNo: "3",
                pageName: "emidata",
                apiResponse: {
                    records: this.schoolDetails,
                },
                pageDetails: {},
                correctedDetails: {},
                correctedClass: this.correctedClass,
            };
            this.storeDetail.pages.pageData[2] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
        };
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            this.loading.present();
            this.progressValue = 72;
            this.appLanguage();
            yield this.ionicStore.getOffStorage().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                if (response) {
                    this.masterApiResponse = response;
                    if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                        this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                    }
                }
                this.inspectionType = localStorage.getItem("veracity_type");
                yield this.ionicStore.getStoreData().then((response) => {
                    this.storeDetail = response;
                    if (this.storeDetail == null || this.storeDetail == undefined) {
                        this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                    }
                    this.storeDetail.pages.currentPage = "emidata";
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                    if (this.storeDetail.pages.pageData[2] == undefined || this.storeDetail.pages.pageData[2] == null) {
                        this.getSchoolDetails(this.storeDetail.pages.pageData[0].pageDetails.school_id);
                    }
                    else {
                        this.schoolDetails = this.storeDetail.pages.pageData[2].apiResponse.records;
                        this.actualDetails = this.storeDetail.pages.pageData[2].apiResponse.records;
                        this.classList = this.schoolDetails.class_info.filter((data, index) => data.total != 0);
                        this.classList = this.classList.filter((data) => {
                            if (!data.TotalStudents) {
                                data.TotalStudents = 0;
                            }
                            return data;
                        });
                        this.correctedClass = this.storeDetail.pages.pageData[2].correctedClass;
                        let correctedValue = this.storeDetail.pages.pageData[2]
                            .correctedDetails;
                        if (Object.keys(correctedValue).length) {
                            this.correctedDistrict = correctedValue.district_name;
                            this.correctedEduDistrict = correctedValue.edu_district_name;
                            this.correctedBlock = correctedValue.block_name;
                            this.correctedZone = correctedValue.nodal_name;
                            this.correctedTotalTeachers = correctedValue.teachers_alloted;
                            this.vacancies = correctedValue.vacancies;
                            this.correctedTotalStudents = correctedValue.total_students;
                            this.totalNoOfStudents = correctedValue.totalNoOfStudents;
                            this.totalNumberOfBoys = correctedValue.totalNumberOfBoys;
                            this.totalNumberOfGirls = correctedValue.totalNumberOfGirls;
                            this.teacherSanctionedValue = correctedValue.teacherSanctioned;
                            this.teacherSanctionedPostValue = correctedValue.teacherSanctionedPost;
                            this.teachersAvailableValue = correctedValue.teachersAvailable;
                            this.teachersDeputationSameSchoolValue =
                                correctedValue.teachersDeputationSameSchool;
                            this.teachersDeputationOtherSchoolValue =
                                correctedValue.teachersDeputationOtherSchool;
                            this.teachersOnLongLeaveValue = correctedValue.teachersOnLongLeave;
                            (this.listedZone = this.correctedZone != "" ? false : true),
                                (this.listedBlock = this.correctedBlock != "" ? false : true),
                                (this.listedEduDistrict =
                                    this.correctedEduDistrict != "" ? false : true),
                                (this.listedDistrict =
                                    this.correctedDistrict != "" ? false : true),
                                (this.listedTotalStudents =
                                    this.correctedTotalStudents != "" ? false : true),
                                (this.listedTotalTeachers =
                                    this.correctedTotalTeachers != "" ? false : true);
                        }
                    }
                });
            }));
            this.loading.dismiss();
        });
    }
    appLanguage() {
        this._apiService.languageInfo.subscribe((data) => {
            this.languageType = data;
            this._translate.use(this.languageType);
            this._initialiseTranslation();
        });
    }
    _initialiseTranslation() {
        this._translate.get("Verification").subscribe((res) => {
            this.Verification = res;
        });
        this._translate.get("school").subscribe((res) => {
            this.school = res;
        });
        this._translate.get("register").subscribe((res) => {
            this.register = res;
        });
        this._translate.get("schoolDetails").subscribe((res) => {
            this.schoolDetail = res;
        });
        this._translate.get("studentEnroll").subscribe((res) => {
            this.studentEnroll = res;
        });
        this._translate.get("teacherPosition").subscribe((res) => {
            this.teacherPosition = res;
        });
        this._translate.get("validate").subscribe((res) => {
            this.validate = res;
        });
        this._translate.get("emisNote").subscribe((res) => {
            this.emisNote = res;
        });
        this._translate.get("shareonwhatsapp").subscribe((res) => {
            this.shareonwhatsapp = res;
        });
        this._translate.get("primary").subscribe((res) => {
            this.primary = res;
        });
        this._translate.get("secondary").subscribe((res) => {
            this.secondary = res;
        });
        this._translate.get("middle").subscribe((res) => {
            this.middle = res;
        });
        this._translate.get("district").subscribe((res) => {
            this.district = res;
        });
        this._translate.get("numbersRequired").subscribe((res) => {
            this.numbersRequired = res;
        });
        this._translate.get("educationalDistrict").subscribe((res) => {
            this.educationalDistrict = res;
        });
        this._translate.get("block").subscribe((res) => {
            this.block = res;
        });
        this._translate.get("zone").subscribe((res) => {
            this.zone = res;
        });
        this._translate.get("giveCheck").subscribe((res) => {
            this.giveCheck = res;
        });
        this._translate.get("teachersTotal").subscribe((res) => {
            this.teachersTotal = res;
        });
        this._translate.get("studentsTotal").subscribe((res) => {
            this.studentsTotal = res;
        });
        this._translate.get("boysTotal").subscribe((res) => {
            this.boysTotal = res;
        });
        this._translate.get("girlsTotal").subscribe((res) => {
            this.girlsTotal = res;
        });
        this._translate.get("class").subscribe((res) => {
            this.class = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("teacherSanctioned").subscribe((res) => {
            this.teacherSanctioned = res;
        });
        this._translate.get("teacherSanctionedPost").subscribe((res) => {
            this.teacherSanctionedPost = res;
        });
        this._translate.get("teachersAvailable").subscribe((res) => {
            this.teachersAvailable = res;
        });
        this._translate
            .get("teachersDeputationSameSchool")
            .subscribe((res) => {
            this.teachersDeputationSameSchool = res;
        });
        this._translate
            .get("teachersDeputationOtherSchool")
            .subscribe((res) => {
            this.teachersDeputationOtherSchool = res;
        });
        this._translate.get("teachersOnLongLeave").subscribe((res) => {
            this.teachersOnLongLeave = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate.get("vacanciesTotal").subscribe((res) => {
            this.vacanciesTotal = res;
        });
        this._translate
            .get("teacherSanctionedRequired")
            .subscribe((res) => {
            this.teacherSanctionedRequired = res;
        });
        this._translate
            .get("districtNameRequired")
            .subscribe((res) => {
            this.districtNameRequired = res;
        });
        this._translate
            .get("eduDistrictNameRequired")
            .subscribe((res) => {
            this.eduDistrictNameRequired = res;
        });
        this._translate
            .get("blockNameRequired")
            .subscribe((res) => {
            this.blockNameRequired = res;
        });
        this._translate
            .get("nodalNameRequired")
            .subscribe((res) => {
            this.nodalNameRequired = res;
        });
        this._translate
            .get("totalStudentsRequired")
            .subscribe((res) => {
            this.totalStudentsRequired = res;
        });
        this._translate
            .get("teachersAvailableRequired")
            .subscribe((res) => {
            this.teachersAvailableRequired = res;
        });
        this._translate
            .get("teachersDeputationSameSchoolRequired")
            .subscribe((res) => {
            this.teachersDeputationSameSchoolRequired = res;
        });
        this._translate
            .get("teachersDeputationOtherSchoolRequired")
            .subscribe((res) => {
            this.teachersDeputationOtherSchoolRequired = res;
        });
        this._translate
            .get("teachersOnLongLeaveRequired")
            .subscribe((res) => {
            this.teachersOnLongLeaveRequired = res;
        });
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.data);
        if (result == true) {
            return event;
        }
        else {
            event.target.value = event.target.value.slice(0, -1);
        }
    }
    presentModal(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            this.presentValue = listedValue;
            this.divisionType = type;
            switch (this.divisionType) {
                case "district": {
                    this.getDistrictList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                case "edu_district": {
                    this.getEducationalDistrictList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                case "block": {
                    this.getBlocksList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                case "zone": {
                    this.getZoneList(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
                default: {
                    this.getCountData(listedValue, type, correction, showCategory, gender, index);
                    break;
                }
            }
        });
    }
    getDistrictList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            this.schoolDetails.districts.forEach((data) => {
                if (data.district_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.id,
                        item: data.district_name,
                    });
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.dist_id = response.data.id;
                    this.correctedDistrict = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getEducationalDistrictList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const districtDetail = {
                district_id: this.schoolDetails.dist_id,
            };
            let temp_eduDistrictList = this.masterApiResponse.obs_info.edu_dist.filter((data) => data.district_id == this.schoolDetails.dist_id);
            temp_eduDistrictList.forEach((data) => {
                if (data.edn_dist_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.id,
                        item: data.edn_dist_name,
                    });
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.edu_dist_id = response.data.id;
                    this.correctedEduDistrict = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getBlocksList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const blockDetail = {
                edu_dist_id: this.schoolDetails.edu_dist_id,
            };
            let temp_blockList = this.masterApiResponse.obs_info.blocks.filter((data) => data.edu_dist_id == this.schoolDetails.edu_dist_id);
            temp_blockList.forEach((data) => {
                if (data.block_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.id,
                        item: data.block_name,
                    });
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.block_id = response.data.id;
                    this.correctedBlock = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getZoneList(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const zoneDetail = {
                block_id: this.schoolDetails.block_id,
            };
            let temp_ZoneList = [];
            this.masterApiResponse.obs_info.nodals.forEach((data) => {
                if (data.edu_dist_id == this.schoolDetails.edu_dist_id &&
                    data.district_id == this.schoolDetails.dist_id &&
                    data.block_id == this.schoolDetails.block_id) {
                    temp_ZoneList.push(data);
                }
            });
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    this.schoolDetails.school_id = response.data.id;
                    this.correctedZone = response.data.item;
                }
            });
            return yield modal.present();
        });
    }
    getCountData(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: this.actualValueList,
                    divisionType: this.divisionType,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                this.actualValueList = [];
                if (response.data != "Cancel") {
                    switch (this.divisionType) {
                        case "teacher_count": {
                            this.correctedTotalTeachers = response.data;
                            break;
                        }
                        case "student_count": {
                            this.correctedTotalStudents = response.data;
                            break;
                        }
                        case "count": {
                            if (selectedGender == "girls") {
                                this.correctedClass[selectedIndex].girls = response.data.toString();
                                this.correctedClass[selectedIndex].showCorrected_Girls = true;
                                this.correctedClass[selectedIndex].listetClassGirls = true;
                            }
                            else {
                                this.correctedClass[selectedIndex].boys = response.data.toString();
                                this.correctedClass[selectedIndex].showCorrected_Boys = true;
                                this.correctedClass[selectedIndex].listetClassBoys = true;
                            }
                            break;
                        }
                        default: {
                            break;
                        }
                    }
                }
            });
            return yield modal.present();
        });
    }
    addCorrectedVariable() {
        this.correctedClass.forEach((data, index) => {
            data["listetClassBoys"] = false;
            data["listetClassGirls"] = false;
            data["showCorrected_Boys"] = false;
            data["showCorrected_Girls"] = false;
            data["checked"] = false;
        });
    }
    isAllClassChecked(currentValue, index, array) {
        return ((currentValue.correctedboys && currentValue.correctedgirls));
    }
    goToSelection() {
        if (this.storeDetail.pages.pageData.length < 5) {
            this._router.navigate(["/tnvntabs/page-route/emiselection", this.schoolDetails.school_id]);
        }
        else {
            this._router.navigate(["/tnvntabs/page-route/dashboardc"]);
        }
    }
    selectedDistrict(event) {
        if (event) {
            this.eduDistList = this.masterApiResponse.school_area_info.eduction_district.filter((data) => {
                if (Number(data.district_id) == Number(event.district_id)) {
                    return data;
                }
            });
        }
    }
    selectedEduDistrict(event) {
        if (event) {
            this.blockList = this.masterApiResponse.school_area_info.blocks.filter((data) => {
                if (Number(data.edu_dist_id) == Number(event.edu_dist_id)) {
                    return data;
                }
            });
        }
    }
    selectedBlock(event) {
        if (event) {
            this.zoneList = this.masterApiResponse.school_area_info.zones.filter((data) => {
                if (Number(data.block_id) == Number(event.block_id)) {
                    return data;
                }
            });
        }
    }
    selectedZone(event) {
    }
    addBoys(data) {
        data.correctedboys.replace(/^.$/, '');
        if (!data.TotalStudents) {
            data.TotalStudents = 0;
        }
        if (data.correctedboys && data.correctedgirls) {
            data.TotalStudents = Number(data.correctedboys) + Number(data.correctedgirls);
        }
        else if (data.correctedboys && !data.correctedgirls) {
            data.TotalStudents = Number(data.correctedboys);
        }
        else if (data.correctedboys && data.correctedgirls == 0) {
            data.TotalStudents = Number(data.correctedboys);
        }
        else if (!data.correctedboys && data.correctedgirls) {
            data.TotalStudents = Number(data.correctedgirls);
        }
        else if (data.correctedboys == 0 && data.correctedgirls) {
            data.TotalStudents = Number(data.correctedgirls);
        }
        this.totalNumberOfBoys = 0;
        this.totalNumberOfGirls = 0;
        for (var i = 0; i < this.classList.length; i++) {
            if (this.classList[i].correctedboys && Number(this.classList[i].correctedboys) != undefined && Number(this.classList[i].correctedboys) != 0) {
                this.totalNumberOfBoys += Number(this.classList[i].correctedboys);
            }
            if (this.classList[i].correctedgirls && Number(this.classList[i].correctedgirls) != undefined && Number(this.classList[i].correctedgirls) != 0) {
                this.totalNumberOfGirls += Number(this.classList[i].correctedgirls);
            }
        }
        this.totalNoOfStudents = this.totalNumberOfBoys + this.totalNumberOfGirls;
        return data;
    }
    addGirls(data) {
        data.correctedgirls.replace(/^.$/, '');
        if (!data.TotalStudents) {
            data.TotalStudents = 0;
        }
        if (data.correctedboys && data.correctedgirls) {
            data.TotalStudents = Number(data.correctedboys) + Number(data.correctedgirls);
        }
        else if (data.correctedboys && !data.correctedgirls) {
            data.TotalStudents = Number(data.correctedboys);
        }
        else if (data.correctedboys && data.correctedgirls == 0) {
            data.TotalStudents = Number(data.correctedboys);
        }
        else if (!data.correctedboys && data.correctedgirls) {
            data.TotalStudents = Number(data.correctedgirls);
        }
        else if (data.correctedboys == 0 && data.correctedgirls) {
            data.TotalStudents = Number(data.correctedgirls);
        }
        this.totalNumberOfBoys = 0;
        this.totalNumberOfGirls = 0;
        for (var i = 0; i < this.classList.length; i++) {
            if (this.classList[i].correctedboys && Number(this.classList[i].correctedboys) != undefined) {
                this.totalNumberOfBoys += Number(this.classList[i].correctedboys);
            }
            if (this.classList[i].correctedgirls && Number(this.classList[i].correctedgirls) != undefined) {
                this.totalNumberOfGirls += Number(this.classList[i].correctedgirls);
            }
        }
        this.totalNoOfStudents = this.totalNumberOfBoys + this.totalNumberOfGirls;
        return data;
    }
    goToTeacherSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.correctedTotalStudents = this.totalNoOfStudents;
            if (this.inspectionType == 'inspection' || this.inspectionType == 'veracity') {
                if ((this.correctedTotalStudents == "")) {
                    this._alertService.showAlert("Please fill all inputs");
                }
                else {
                    if (this.teacherSanctionedValue == null ||
                        this.teacherSanctionedValue == undefined ||
                        this.teacherSanctionedPostValue == null ||
                        this.teacherSanctionedPostValue == undefined ||
                        this.teachersAvailableValue == null ||
                        this.teachersAvailableValue == undefined ||
                        this.teachersDeputationSameSchoolValue == null ||
                        this.teachersDeputationSameSchoolValue == undefined ||
                        this.teachersDeputationOtherSchoolValue == null ||
                        this.teachersDeputationOtherSchoolValue == undefined ||
                        this.teachersOnLongLeaveValue == null ||
                        this.teachersOnLongLeaveValue == undefined ||
                        this.correctedTotalStudents == null ||
                        this.correctedTotalStudents == undefined) {
                        this._alertService.showAlert("Please fill all inputs");
                        this.submitted = true;
                        return;
                    }
                    let nulldata = false;
                    if (this.classList.length > 0) {
                        for (var i = 0; i < this.classList.length; i++) {
                            if (this.classList[i].correctedboys == null || this.classList[i].correctedboys == undefined || this.classList[i].correctedgirls == null || this.classList[i].correctedgirls == undefined) {
                                this.submitted = true;
                                this._alertService.showAlert("Please fill all inputs");
                                nulldata = false;
                                return;
                                break;
                            }
                        }
                    }
                    const found = this.correctedClass.every(this.isAllClassChecked);
                    if (found) {
                        let classList = [];
                        let created_on = new Date();
                        created_on.toISOString();
                        let pageDetails = {
                            nodal_id: this.schoolDetails.school_id,
                            nodal_name: this.correctedZone,
                            block_id: this.schoolDetails.block_id,
                            block_name: this.correctedBlock,
                            edu_district_id: this.schoolDetails.edu_dist_id,
                            edu_district_name: this.correctedEduDistrict,
                            district_id: this.schoolDetails.dist_id,
                            district_name: this.correctedDistrict,
                            created_on: created_on,
                            created_by: localStorage.getItem("username"),
                            teachers_alloted: this.correctedTotalTeachers,
                            total_students: this.correctedTotalStudents,
                            vacancies: this.vacancies,
                            classdata: this.classList,
                            teacherSanctioned: this.teacherSanctionedValue,
                            totalNumberOfBoys: this.totalNumberOfBoys,
                            totalNumberOfGirls: this.totalNumberOfGirls,
                            totalNoOfStudents: this.totalNoOfStudents,
                            teacherSanctionedPost: this.teacherSanctionedPostValue,
                            teachersAvailable: this.teachersAvailableValue,
                            teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                            teachersDeputationOtherSchool: this
                                .teachersDeputationOtherSchoolValue,
                            teachersOnLongLeave: this.teachersOnLongLeaveValue,
                        };
                        let correctedDetails = {
                            nodal_id: this.schoolDetails.nodal_id,
                            nodal_name: this.correctedZone,
                            block_id: this.schoolDetails.block_id,
                            block_name: this.correctedBlock,
                            edu_district_id: this.schoolDetails.edu_dist_id,
                            edu_district_name: this.correctedEduDistrict,
                            district_id: this.schoolDetails.dist_id,
                            district_name: this.correctedDistrict,
                            created_on: created_on,
                            created_by: localStorage.getItem("username"),
                            teachers_alloted: this.correctedTotalTeachers,
                            total_students: this.correctedTotalStudents,
                            vacancies: this.vacancies,
                            classdata: this.classList,
                            totalNumberOfBoys: this.totalNumberOfBoys,
                            totalNumberOfGirls: this.totalNumberOfGirls,
                            totalNoOfStudents: this.totalNoOfStudents,
                            teacherSanctioned: this.teacherSanctionedValue,
                            teacherSanctionedPost: this.teacherSanctionedPostValue,
                            teachersAvailable: this.teachersAvailableValue,
                            teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                            teachersDeputationOtherSchool: this
                                .teachersDeputationOtherSchoolValue,
                            teachersOnLongLeave: this.teachersOnLongLeaveValue,
                        };
                        this.storeDetail.pages.pageData[2].pageDetails = pageDetails;
                        this.storeDetail.pages.pageData[2].correctedDetails = correctedDetails;
                        this.storeDetail.pages.pageData[2].correctedClass = this.classList;
                        this.storeDetail.pages.currentProgress = this.progressValue;
                        yield this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        this._router.navigate(["/tnvntabs/page-route/emiverify", this.schoolDetails.school_id]);
                    }
                    else {
                        this._alertService.showAlert("Please fill all inputs");
                    }
                }
            }
            else {
                if ((this.correctedDistrict == "") ||
                    (this.correctedEduDistrict == "") ||
                    (this.correctedBlock == "") ||
                    (this.correctedZone == "") ||
                    (this.correctedTotalStudents == "")) {
                    this._alertService.showAlert("Please fill all inputs");
                }
                else {
                    if (this.teacherSanctionedValue == null ||
                        this.teacherSanctionedValue == undefined ||
                        this.teacherSanctionedPostValue == null ||
                        this.teacherSanctionedPostValue == undefined ||
                        this.teachersAvailableValue == null ||
                        this.teachersAvailableValue == undefined ||
                        this.teachersDeputationSameSchoolValue == null ||
                        this.teachersDeputationSameSchoolValue == undefined ||
                        this.teachersDeputationOtherSchoolValue == null ||
                        this.teachersDeputationOtherSchoolValue == undefined ||
                        this.teachersOnLongLeaveValue == null ||
                        this.teachersOnLongLeaveValue == undefined ||
                        this.correctedTotalStudents == null ||
                        this.correctedTotalStudents == undefined) {
                        this.submitted = true;
                        this._alertService.showAlert("Please fill all inputs");
                        return;
                    }
                    let nulldata = false;
                    if (this.classList.length > 0) {
                        for (var i = 0; i < this.classList.length; i++) {
                            if (this.classList[i].correctedboys == null || this.classList[i].correctedboys == undefined || this.classList[i].correctedgirls == null || this.classList[i].correctedgirls == undefined) {
                                this.submitted = true;
                                nulldata = false;
                                return;
                                break;
                            }
                        }
                    }
                    const found = this.correctedClass.every(this.isAllClassChecked);
                    if (found) {
                        let classList = [];
                        let created_on = new Date();
                        created_on.toISOString();
                        let pageDetails = {
                            nodal_id: this.schoolDetails.school_id,
                            nodal_name: this.correctedZone,
                            block_id: this.schoolDetails.block_id,
                            block_name: this.correctedBlock,
                            edu_district_id: this.schoolDetails.edu_dist_id,
                            edu_district_name: this.correctedEduDistrict,
                            district_id: this.schoolDetails.dist_id,
                            district_name: this.correctedDistrict,
                            created_on: created_on,
                            created_by: localStorage.getItem("username"),
                            teachers_alloted: this.correctedTotalTeachers,
                            total_students: this.correctedTotalStudents,
                            vacancies: this.vacancies,
                            classdata: this.classList,
                            teacherSanctioned: this.teacherSanctionedValue,
                            teacherSanctionedPost: this.teacherSanctionedPostValue,
                            teachersAvailable: this.teachersAvailableValue,
                            totalNumberOfBoys: this.totalNumberOfBoys,
                            totalNumberOfGirls: this.totalNumberOfGirls,
                            totalNoOfStudents: this.totalNoOfStudents,
                            teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                            teachersDeputationOtherSchool: this
                                .teachersDeputationOtherSchoolValue,
                            teachersOnLongLeave: this.teachersOnLongLeaveValue,
                        };
                        let correctedDetails = {
                            nodal_id: this.schoolDetails.nodal_id,
                            nodal_name: this.correctedZone,
                            block_id: this.schoolDetails.block_id,
                            block_name: this.correctedBlock,
                            edu_district_id: this.schoolDetails.edu_dist_id,
                            edu_district_name: this.correctedEduDistrict,
                            district_id: this.schoolDetails.dist_id,
                            district_name: this.correctedDistrict,
                            created_on: created_on,
                            created_by: localStorage.getItem("username"),
                            teachers_alloted: this.correctedTotalTeachers,
                            total_students: this.correctedTotalStudents,
                            vacancies: this.vacancies,
                            classdata: this.classList,
                            teacherSanctioned: this.teacherSanctionedValue,
                            teacherSanctionedPost: this.teacherSanctionedPostValue,
                            teachersAvailable: this.teachersAvailableValue,
                            totalNumberOfBoys: this.totalNumberOfBoys,
                            totalNumberOfGirls: this.totalNumberOfGirls,
                            totalNoOfStudents: this.totalNoOfStudents,
                            teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                            teachersDeputationOtherSchool: this
                                .teachersDeputationOtherSchoolValue,
                            teachersOnLongLeave: this.teachersOnLongLeaveValue,
                        };
                        this.storeDetail.pages.pageData[2].pageDetails = pageDetails;
                        this.storeDetail.pages.pageData[2].correctedDetails = correctedDetails;
                        this.storeDetail.pages.pageData[2].correctedClass = this.classList;
                        this.storeDetail.pages.currentProgress = this.progressValue;
                        yield this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                        this._router.navigate(["/tnvntabs/page-route/emiverify", this.schoolDetails.school_id]);
                    }
                    else {
                        this._alertService.showAlert("Please fill all inputs");
                    }
                }
            }
        });
    }
    checkActualData(division, data) {
        this.divisionType = division;
        switch (this.divisionType) {
            case "district": {
                this.schoolDetails.dist_id = data;
                break;
            }
            case "edu_district": {
                this.schoolDetails.edu_dist_id = data;
                break;
            }
            case "block": {
                this.schoolDetails.block_id = data;
                break;
            }
            case "zone": {
                this.schoolDetails.school_id = data;
                break;
            }
            case "teacher_count": {
                this.correctedTotalTeachers = data;
                break;
            }
            case "student_count": {
                this.correctedTotalStudents = data;
                break;
            }
            default: {
                break;
            }
        }
    }
};
EmidataComponent.ctorParameters = () => [
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_5__.PostService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService }
];
EmidataComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-emidata",
        template: _raw_loader_emidata_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emidata_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmidataComponent);



/***/ }),

/***/ 31326:
/*!******************************************************!*\
  !*** ./src/app/pages/tnvn/emidata/emidata.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmidataModule": function() { return /* binding */ EmidataModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _emidata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emidata.component */ 9229);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-selectable */ 93319);









const routes = [
    {
        path: '',
        component: _emidata_component__WEBPACK_IMPORTED_MODULE_0__.EmidataComponent
    }
];
let EmidataModule = class EmidataModule {
};
EmidataModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule
        ],
        declarations: [_emidata_component__WEBPACK_IMPORTED_MODULE_0__.EmidataComponent,
        ],
        exports: [],
        entryComponents: []
    })
], EmidataModule);



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

/***/ 62675:
/*!***********************************************************!*\
  !*** ./src/app/pages/tnvn/emidata/emidata.component.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQUNKOztBQUNBO0VBQ0kscUNBQUE7QUFFSiIsImZpbGUiOiJlbWlkYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlNmRlZWQgIWltcG9ydGFudDsgIFxyXG4gIH1cclxuLmJnLXRyYW5zcGFyZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn0iXX0= */");

/***/ }),

/***/ 4774:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/emidata/emidata.component.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n          <b>EMIS<br />\r\n          <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n            this.Verification\r\n          }}</span></b>\r\n          </ion-title>\r\n        </ion-col>                   \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n  <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n    <p class=\"pt-2 color-dgrey\">\r\n      {{ schoolDetails?.school_name }} <b>[{{ schoolDetails?.cate_type }}]</b>\r\n    </p>\r\n  </ion-text>   \r\n  <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n      <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.schoolDetail}}</span></b>\r\n      </ion-label>    \r\n  </ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >      \r\n<ion-col >    \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{this.district}}</ion-label>\r\n  <ion-select\r\n  style=\"display:contents\"\r\n  [(ngModel)]=\"correctedDistrict\"\r\n  (ngModelChange)=\"selectedDistrict($event)\"  \r\n>          \r\n\r\n  <ion-select-option            \r\n    *ngFor=\"let district of districtList\"\r\n    [value]=\"district\"\r\n    >{{ district?.district_name }}</ion-select-option>\r\n\r\n</ion-select>  \r\n</ion-item>  \r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n\r\n<ion-col >  \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{\r\n    this.educationalDistrict\r\n  }}</ion-label>\r\n  <ion-select\r\n  style=\"display:contents\"\r\n  [(ngModel)]=\"correctedEduDistrict\"\r\n  (ngModelChange)=\"selectedEduDistrict($event)\"  \r\n>          \r\n\r\n  <ion-select-option            \r\n    *ngFor=\"let eduDistrict of eduDistList\"\r\n    [value]=\"eduDistrict\"\r\n    >{{ eduDistrict.edn_dist_name }}</ion-select-option>\r\n\r\n</ion-select>  \r\n</ion-item>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >      \r\n<ion-col>  \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{\r\n    this.block\r\n  }}</ion-label>\r\n    <ion-select\r\n    style=\"display:contents\"\r\n  [(ngModel)]=\"correctedBlock\"\r\n  (ngModelChange)=\"selectedBlock($event)\"  \r\n>          \r\n\r\n  <ion-select-option            \r\n    *ngFor=\"let block of blockList\"\r\n    [value]=\"block\"\r\n    >{{ block.block_name }}</ion-select-option>\r\n\r\n</ion-select> \r\n</ion-item>  \r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >      \r\n<ion-col >  \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{\r\n    this.zone\r\n  }}</ion-label>\r\n    <ion-select\r\n    style=\"display:contents\"\r\n    [(ngModel)]=\"correctedZone\"\r\n    (ngModelChange)=\"selectedZone($event)\"    \r\n  >          \r\n  \r\n    <ion-select-option            \r\n      *ngFor=\"let zone of zoneList\"\r\n      [value]=\"zone\"\r\n      >{{ zone?.school_name }}</ion-select-option>\r\n  \r\n  </ion-select>    \r\n</ion-item> \r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n  <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.studentEnroll}}</span></b>\r\n  </ion-label>    \r\n</ion-row>\r\n\r\n  <ion-grid>\r\n   \r\n    <ion-row style=\"background-color:#8B67B3\">\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.class}}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.boysTotal}}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.girlsTotal}}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.studentsTotal}}\r\n        </ion-text>\r\n      </ion-col>                  \r\n    </ion-row>    \r\n    <ion-row *ngFor=\"let classItem of classList; let i = index\">\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <ion-text>\r\n          {{this.class}} {{ classItem?.class }}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <input\r\n        style=\"width:100%;border:1px solid #000\"\r\n        type=\"tel\"        \r\n        required\r\n        numericOnly\r\n        inputmode=\"numeric\"        \r\n        pattern=\"[0-9]*\"\r\n        maxlength=\"4\"\r\n        (input)=\"numericOnly($event)\"\r\n        (change)=\"addBoys(classItem)\"                \r\n        [(ngModel)]=\"classItem.correctedboys\"\r\n      />\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <input\r\n        style=\"width:100%;border:1px solid #000\"        \r\n        type=\"tel\"        \r\n        required\r\n        numericOnly\r\n        inputmode=\"numeric\"        \r\n        pattern=\"[0-9]*\"\r\n        maxlength=\"4\"\r\n        (input)=\"numericOnly($event)\"\r\n        (change)=\"addGirls(classItem)\"                      \r\n        [(ngModel)]=\"classItem.correctedgirls\"        \r\n        /> \r\n      \r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        {{classItem?.TotalStudents}}\r\n      </ion-col>                        \r\n    </ion-row>  \r\n\r\n    <ion-row >\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <ion-text>\r\n          <b>Total</b>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <ion-text>\r\n          <b>{{this.totalNumberOfBoys}}</b>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <b>{{this.totalNumberOfGirls}}</b>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n      <b>{{this.totalNoOfStudents}}</b>\r\n      </ion-col>                  \r\n    </ion-row>      \r\n  </ion-grid>\r\n  <ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n    <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n      <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.teacherPosition}}</span></b>\r\n    </ion-label>    \r\n</ion-row>  \r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teacherSanctioned\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teacherSanctionedValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teacherSanctionedPost\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teacherSanctionedPostValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersAvailable\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n            [(ngModel)]=\"teachersAvailableValue\"            \r\n          />\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersDeputationSameSchool\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n            [(ngModel)]=\"teachersDeputationSameSchoolValue\"            \r\n          />\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersDeputationOtherSchool\r\n    }}:</span></b>\r\n  </ion-label>  \r\n  \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teachersDeputationOtherSchoolValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersOnLongLeave\r\n    }}:</span></b>\r\n  </ion-label>  \r\n  \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teachersOnLongLeaveValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n<ion-row style=\"align-item:center\">\r\n  <ion-button (click)=\"goToTeacherSelection()\" style=\"width:100%;text-align:center;color:#fff\">\r\n      {{validate}}\r\n  </ion-button>\r\n</ion-row>  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_emidata_emidata_module_ts-es2015.js.map