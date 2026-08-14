(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_emiselection_emiselection_module_ts"],{

/***/ 82224:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tnvn/emiselection/emiselection.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmiSelectionComponent": function() { return /* binding */ EmiSelectionComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_emiselection_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emiselection.component.html */ 69042);
/* harmony import */ var _emiselection_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emiselection.component.scss */ 28064);
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













let EmiSelectionComponent = class EmiSelectionComponent {
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
        this.actualValueList = [];
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
        this.submitted = false;
        this.getSchoolDetails = (schoolId) => {
            let records = {
                nodal_name: this.masterApiResponse.nodal_name,
                nodal_id: this.masterApiResponse.nodal_id,
                dist_id: this.masterApiResponse.dist_id,
                edu_dist_id: this.masterApiResponse.edu_dist_id,
                block_id: this.masterApiResponse.block_id,
                block_name: this.masterApiResponse.block_name,
                edu_dist_name: this.masterApiResponse.edu_dist_name,
                district_name: this.masterApiResponse.district_name,
                total: this.masterApiResponse.total,
                catty_id: this.masterApiResponse.catty_id,
                cate_type: this.masterApiResponse.cate_type,
                teach_tot: this.masterApiResponse.teach_tot,
                nonteach_tot: this.masterApiResponse.nonteach_tot,
                totstaff: this.masterApiResponse.totstaff,
                total_students: this.masterApiResponse.total_students,
                school_name: this.masterApiResponse.school_name,
                school_id: this.masterApiResponse.school_id,
                udise_code: this.masterApiResponse.udise_code,
                class_info: this.masterApiResponse.class_info,
                districts: this.masterApiResponse.districts,
            };
            this.schoolDetails = records;
            let schoolData = {
                schoolId: this.schoolDetails.school_id,
                schoolName: this.schoolDetails.school_name,
                distName: this.schoolDetails.district_name,
                eduDistName: this.schoolDetails.edu_dist_name,
                blockName: this.schoolDetails.block_name,
                cateType: this.schoolDetails.cate_type,
            };
            this.loading.dismiss();
            localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
            let apiData = {
                pageNo: "2",
                pageName: "emiselection",
                apiResponse: {
                    records: this.schoolDetails,
                },
                pageDetails: {},
                pageFlow: this.pageFlow,
                correctedDetails: {},
                correctedClass: this.correctedClass,
            };
            this.storeDetail.pages.pageData[1] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            this.loading.dismiss();
        };
    }
    ionViewWillEnter() {
        this.loading.present();
        this.appLanguage();
        this.ionicStore.getOffStorage().then((response) => {
            if (response) {
                this.masterApiResponse = response;
            }
            this.ionicStore.getStoreData().then((response) => {
                this.storeDetail = response;
                this.storeDetail.pages.pageData.splice(1);
                this.ionicStore.setStoreData(this.storeDetail);
                this.loading.dismiss();
                this.storeDetail.pages.currentPage = "emiSelection";
                this.ionicStore.setStoreData(this.storeDetail);
                if (this.storeDetail.pages.pageData[1] == undefined) {
                    this.getSchoolDetails(this.storeDetail.pages.pageData[0].pageDetails.school_id);
                }
            });
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
        this._translate.get("selectthesection").subscribe((res) => {
            this.selectthesection = res;
        });
        this._translate.get("proceedEmisVerify").subscribe((res) => {
            this.proceedEmisVerify = res;
        });
        this._translate.get("proceedObserveClass").subscribe((res) => {
            this.proceedObserveClass = res;
        });
        this._translate.get("school").subscribe((res) => {
            this.school = res;
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
    emisValidation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this._router.navigate([
                "/tnvntabs/page-route/emidata",
                this.storeDetail.pages.pageData[0].pageDetails.school_id,
            ]);
            this.pageFlow = "emisVerification";
            let apiData = {
                pageNo: "2",
                pageName: "emiselection",
                apiResponse: {
                    records: this.schoolDetails,
                },
                pageDetails: {},
                pageFlow: this.pageFlow,
                correctedDetails: {},
                correctedClass: this.correctedClass,
            };
            this.storeDetail.pages.pageData[1] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
        });
    }
    observeClass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this._router.navigate([
                "/tnvntabs/page-route/teacher-selection",
            ]);
            this.pageFlow = "observation";
            let apiData = {
                pageNo: "2",
                pageName: "emiselection",
                apiResponse: {
                    records: this.schoolDetails,
                },
                pageDetails: {},
                pageFlow: this.pageFlow,
                correctedDetails: {},
                correctedClass: this.correctedClass,
            };
            this.storeDetail.pages.pageData[1] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
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
            temp_ZoneList.forEach((data, index) => {
                if (data.nodal_name != this.presentValue) {
                    this.actualValueList.push({
                        id: data.hss_school_id,
                        item: data.hss_school_name,
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
                                this.correctedClass[selectedIndex].listetClassGirls = false;
                            }
                            else {
                                this.correctedClass[selectedIndex].boys = response.data.toString();
                                this.correctedClass[selectedIndex].showCorrected_Boys = true;
                                this.correctedClass[selectedIndex].listetClassBoys = false;
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
        return ((currentValue.listetClassGirls == true ||
            currentValue.showCorrected_Girls == true) &&
            (currentValue.listetClassBoys == true ||
                currentValue.showCorrected_Boys == true));
    }
    goToTeacherSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if ((!this.listedDistrict && this.correctedDistrict == "") ||
                (!this.listedEduDistrict && this.correctedEduDistrict == "") ||
                (!this.listedBlock && this.correctedBlock == "") ||
                (!this.listedZone && this.correctedZone == "") ||
                (!this.listedTotalStudents && this.correctedTotalStudents == "")) {
                this._alertService.showAlert(this.giveCheck);
            }
            else {
                if (this.teacherSanctionedValue == null ||
                    this.teacherSanctionedValue == undefined ||
                    this.teachersAvailableValue == null ||
                    this.teachersAvailableValue == undefined ||
                    this.teachersDeputationSameSchoolValue == null ||
                    this.teachersDeputationSameSchoolValue == undefined ||
                    this.teachersDeputationOtherSchoolValue == null ||
                    this.teachersDeputationOtherSchoolValue == undefined ||
                    this.teachersOnLongLeaveValue == null ||
                    this.teachersOnLongLeaveValue == undefined) {
                    this.submitted = true;
                    return;
                }
                const found = this.correctedClass.every(this.isAllClassChecked);
                if (found) {
                    let classList = [];
                    this.correctedClass.forEach((data, index) => {
                        classList.push({
                            class: data.class,
                            no_of_boys: data.boys,
                            no_of_girls: data.girls,
                        });
                    });
                    let created_on = new Date();
                    created_on.toISOString();
                    let pageDetails = {
                        nodal_id: this.schoolDetails.school_id,
                        nodal_name: this.correctedZone != ""
                            ? this.correctedZone
                            : this.schoolDetails.nodal_name,
                        block_id: this.schoolDetails.block_id,
                        block_name: this.correctedBlock != ""
                            ? this.correctedBlock
                            : this.schoolDetails.block_name,
                        edu_district_id: this.schoolDetails.edu_dist_id,
                        edu_district_name: this.correctedEduDistrict != ""
                            ? this.correctedEduDistrict
                            : this.schoolDetails.edu_dist_name,
                        district_id: this.schoolDetails.dist_id,
                        district_name: this.correctedDistrict != ""
                            ? this.correctedDistrict
                            : this.schoolDetails.district_name,
                        created_on: created_on,
                        created_by: localStorage.getItem("username"),
                        teachers_alloted: this.correctedTotalTeachers != ""
                            ? this.correctedTotalTeachers
                            : this.listedTotalTeachers,
                        total_students: this.correctedTotalStudents != ""
                            ? this.correctedTotalStudents
                            : this.listedTotalStudents,
                        vacancies: this.vacancies,
                        classdata: classList,
                        teacherSanctioned: this.teacherSanctionedValue,
                        teachersAvailable: this.teachersAvailableValue,
                        teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                        teachersDeputationOtherSchool: this
                            .teachersDeputationOtherSchoolValue,
                        teachersOnLongLeave: this.teachersOnLongLeaveValue,
                    };
                    let correctedDetails = {
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
                        classdata: classList,
                        teacherSanctioned: this.teacherSanctionedValue,
                        teachersAvailable: this.teachersAvailableValue,
                        teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                        teachersDeputationOtherSchool: this
                            .teachersDeputationOtherSchoolValue,
                        teachersOnLongLeave: this.teachersOnLongLeaveValue,
                    };
                    this.storeDetail.pages.pageData[1].pageDetails = pageDetails;
                    this.storeDetail.pages.pageData[1].correctedDetails = correctedDetails;
                    this.storeDetail.pages.pageData[1].correctedClass = this.correctedClass;
                    this.storeDetail.pages.currentProgress = 0;
                    this.ionicStore.setStoreData(this.storeDetail);
                    this._router.navigate(["/tnvntabs/page-route/teacher-selection"]);
                }
                else {
                    this._alertService.showAlert(this.giveCheck);
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
EmiSelectionComponent.ctorParameters = () => [
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
EmiSelectionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-emiselection",
        template: _raw_loader_emiselection_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emiselection_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmiSelectionComponent);



/***/ }),

/***/ 24680:
/*!****************************************************************!*\
  !*** ./src/app/pages/tnvn/emiselection/emiselection.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmiSelectionModule": function() { return /* binding */ EmiSelectionModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _emiselection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emiselection.component */ 82224);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _emiselection_component__WEBPACK_IMPORTED_MODULE_0__.EmiSelectionComponent
    }
];
let EmiSelectionModule = class EmiSelectionModule {
};
EmiSelectionModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_emiselection_component__WEBPACK_IMPORTED_MODULE_0__.EmiSelectionComponent,
        ],
        exports: [],
        entryComponents: []
    })
], EmiSelectionModule);



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

/***/ 28064:
/*!*********************************************************************!*\
  !*** ./src/app/pages/tnvn/emiselection/emiselection.component.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".assessment {\n  font-family: \"Segoe UI\", \"Roboto\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 20px;\n}\n\n.assessmentcol {\n  font-family: \"Segoe UI\", \"Roboto\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  color: black;\n  margin: 10px;\n}\n\n.button {\n  text-align: center;\n  border: 20px;\n}\n\nion-card {\n  margin-inline: 0px;\n  border-radius: 15px;\n  background: #ffffff;\n}\n\n.header-text {\n  margin-right: 15%;\n}\n\n.list-md {\n  background: transparent;\n}\n\nion-item {\n  --background:transparent;\n}\n\n.radio {\n  display: flex;\n  align-items: center;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRFQUFBO0VBRUEsWUFBQTtBQUFKOztBQUVBO0VBQ0ksNEVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFDQTtFQUNJLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoiZW1pc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzc2Vzc21lbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgJ1JvYm90bycsICAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIC8vZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOjIwcHg7ICAgIFxyXG59XHJcbi5hc3Nlc3NtZW50Y29se1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsICdSb2JvdG8nLCAgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBib3JkZXI6MjBweFxyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLWlubGluZTowcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDojZmZmZmZmO1xyXG59XHJcbi5oZWFkZXItdGV4dHtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG4ubGlzdC1tZHtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcbi5yYWRpb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOjEwcHg7ICAgIFxyXG59Il19 */");

/***/ }),

/***/ 69042:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/emiselection/emiselection.component.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"t-8\">\r\n          <ion-title class=\"ion-text-center fs-18\"\r\n            ><b\r\n              >\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                selectthesection\r\n              }}</span></b\r\n            >\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"0\"></app-progress>\r\n\r\n  <div class=\"assessment\">    \r\n      <ion-card>\r\n        <ion-card-header>\t\t\t\t                    \r\n            <ion-item (click)=\"emisValidation()\" lines=\"none\" class=\"contentHeading ion-text-center fs-18\">              \r\n              <ion-label>{{proceedEmisVerify}}</ion-label>            \r\n            </ion-item>            \r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n            <ion-item (click)=\"observeClass()\" lines=\"none\" class=\"contentHeading ion-text-center fs-18\">              \r\n              <ion-label>{{proceedObserveClass}}</ion-label>            \r\n            </ion-item>                                \r\n        </ion-card-header>\r\n      </ion-card>      \r\n  </div>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button\r\n        class=\"btn-back\"\r\n        [routerLink]=\"['/tnvntabs/page-route/dashboardc']\"\r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToTeacherSelection()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_emiselection_emiselection_module_ts-es2015.js.map