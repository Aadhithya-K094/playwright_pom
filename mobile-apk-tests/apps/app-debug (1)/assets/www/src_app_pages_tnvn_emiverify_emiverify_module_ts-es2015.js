(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_emiverify_emiverify_module_ts"],{

/***/ 32335:
/*!*************************************************************!*\
  !*** ./src/app/pages/tnvn/emiverify/emiverify.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmiverifyComponent": function() { return /* binding */ EmiverifyComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_emiverify_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./emiverify.component.html */ 73137);
/* harmony import */ var _emiverify_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emiverify.component.scss */ 27436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/post.service */ 62538);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/emimodal/emimodal.component */ 79615);
/* harmony import */ var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tnvn/services/network.service */ 81508);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jspdf */ 31769);
/* harmony import */ var _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/file-path/ngx */ 33002);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! dom-to-image */ 83697);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_14__);





















let EmiverifyComponent = class EmiverifyComponent {
    constructor(loading, modalController, alertController, _router, _apiService, activatedRoute, _alertService, _postService, androidPermissions, ionicStore, _translate, networkService, filePath, platform, socialSharing, file) {
        this.loading = loading;
        this.modalController = modalController;
        this.alertController = alertController;
        this._router = _router;
        this._apiService = _apiService;
        this.activatedRoute = activatedRoute;
        this._alertService = _alertService;
        this._postService = _postService;
        this.androidPermissions = androidPermissions;
        this.ionicStore = ionicStore;
        this._translate = _translate;
        this.networkService = networkService;
        this.filePath = filePath;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.file = file;
        this.classList = [];
        this.check = true;
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
        this.totalNumberOfBoys = 0;
        this.totalNumberOfGirls = 0;
        this.totalNoOfStudents = 0;
        this.submitted = false;
        this.shareImage = () => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const div = yield document.getElementById("PrintEmis");
            const table = document.getElementById("container");
            const options = { background: "white", height: div.clientHeight + 50, width: div.clientWidth + 50 };
            dom_to_image__WEBPACK_IMPORTED_MODULE_14___default().toPng(div, options).then((dataUrl) => {
                var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__.jsPDF("p", "mm", "a4");
                var width = doc.internal.pageSize.getWidth();
                var height = doc.internal.pageSize.getHeight();
                doc.addImage(dataUrl, 'PNG', 10, 10, width, height);
                let pdfOutput = doc.output();
                let buffer = new ArrayBuffer(pdfOutput.length);
                let array = new Uint8Array(buffer);
                for (var i = 0; i < pdfOutput.length; i++) {
                    array[i] = pdfOutput.charCodeAt(i);
                }
                this.filePath.resolveNativePath('file://')
                    .then(filePath => console.log(filePath))
                    .catch(err => console.log(err));
                this.file.listDir(this.file.externalDataDirectory, '').then((folderList) => {
                });
                const directory = this.file.externalDataDirectory;
                const fileName = "Emisreport.pdf";
                let options = { replace: true };
                this.file.checkFile(directory, fileName).then((success) => {
                    this.file.writeFile(directory, fileName, buffer, options)
                        .then((success) => {
                    })
                        .catch((error) => {
                    });
                })
                    .catch((error) => {
                    this.file.writeFile(directory, fileName, buffer)
                        .then((success) => {
                    })
                        .catch((error) => {
                    });
                });
            })
                .catch(function (error) {
            });
            if (this.platform.is('cordova')) {
                const fileName = "Emisreport.pdf";
                let ROOT_DIRECTORY = this.file.externalDataDirectory + fileName;
                this.socialSharing.share("Message", "Subject", ROOT_DIRECTORY, "")
                    .then((entries) => {
                })
                    .catch((error) => {
                    alert('error ' + JSON.stringify(error));
                });
            }
        });
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
            this.actualDetails = records;
            let schoolData = {
                schoolId: this.schoolDetails.school_id,
                schoolName: this.schoolDetails.school_name,
                distName: this.schoolDetails.district_name,
                eduDistName: this.schoolDetails.edu_dist_name,
                blockName: this.schoolDetails.block_name,
                cateType: this.schoolDetails.cate_type,
            };
            let correctedClass = this.storeDetail.pages.pageData[2].correctedClass;
            this.correctedClass = correctedClass;
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
                this.correctedClass = correctedValue.classdata;
                this.totalNumberOfBoys = Number(correctedValue.totalNumberOfBoys);
                this.totalNumberOfGirls = Number(correctedValue.totalNumberOfGirls);
                this.totalNoOfStudents = Number(correctedValue.totalNoOfStudents);
                this.teacherSanctionedValue = Number(correctedValue.teacherSanctioned);
                this.teacherSanctionedPostValue = Number(correctedValue.teacherSanctionedPost);
                this.teachersAvailableValue = Number(correctedValue.teachersAvailable);
                this.teachersDeputationSameSchoolValue =
                    Number(correctedValue.teachersDeputationSameSchool);
                this.teachersDeputationOtherSchoolValue =
                    Number(correctedValue.teachersDeputationOtherSchool);
                this.teachersOnLongLeaveValue = Number(correctedValue.teachersOnLongLeave);
            }
            if (this.correctedClass.length > 0) {
                this.correctedClass.forEach((data) => {
                    data.correctedboys = Number(data.correctedboys);
                    data.correctedgirls = Number(data.correctedgirls);
                    data.TotalStudents = Number(data.TotalStudents);
                    data.boys = Number(data.boys);
                    data.girls = Number(data.girls);
                });
            }
            this.classList = this.schoolDetails.class_info.filter((data, index) => data.total != 0);
            this.addCorrectedVariable();
            this.loading.dismiss();
            localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
            let apiData = {
                pageNo: "4",
                pageName: "emiVerify",
                apiResponse: {
                    records: this.schoolDetails,
                },
                pageDetails: {},
                correctedDetails: {},
                correctedClass: this.correctedClass,
            };
            this.storeDetail.pages.pageData[3] = apiData;
            this.ionicStore.setStoreData(this.storeDetail);
            this.loading.dismiss();
        };
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then((result) => {
                if (result.hasPermission == false) {
                    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                }
            });
            this.loading.present();
            this.appLanguage();
            this.progressValue = 78;
            yield this.ionicStore.getOffStorage().then((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
                if (response) {
                    this.masterApiResponse = response;
                }
                this.inspectionType = localStorage.getItem("veracity_type");
                yield this.ionicStore.getStoreData().then((response) => {
                    this.storeDetail = response;
                    this.storeDetail.pages.currentPage = "emiVerfiy";
                    this.ionicStore.setStoreData(this.storeDetail);
                    if (this.storeDetail.pages.pageData[3] == undefined || this.storeDetail.pages.pageData[3] == null) {
                        this.getSchoolDetails(this.storeDetail.pages.pageData[0].pageDetails.school_id);
                    }
                    else {
                        this.schoolDetails = this.storeDetail.pages.pageData[2].apiResponse.records;
                        this.actualDetails = this.storeDetail.pages.pageData[2].apiResponse.records;
                        this.classList = this.schoolDetails.class_info.filter((data, index) => data.total != 0);
                        this.correctedClass = this.storeDetail.pages.pageData[2].correctedClass;
                        this.loading.dismiss();
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
                            this.totalNumberOfBoys = Number(correctedValue.totalNumberOfBoys);
                            this.totalNumberOfGirls = Number(correctedValue.totalNumberOfGirls);
                            this.totalNoOfStudents = Number(correctedValue.totalNoOfStudents);
                            this.teacherSanctionedValue = Number(correctedValue.teacherSanctioned);
                            this.teacherSanctionedPostValue = Number(correctedValue.teacherSanctionedPost);
                            this.teachersAvailableValue = Number(correctedValue.teachersAvailable);
                            this.teachersDeputationSameSchoolValue =
                                Number(correctedValue.teachersDeputationSameSchool);
                            this.teachersDeputationOtherSchoolValue =
                                Number(correctedValue.teachersDeputationOtherSchool);
                            this.teachersOnLongLeaveValue = Number(correctedValue.teachersOnLongLeave);
                            if (this.correctedClass.length > 0) {
                                this.correctedClass.forEach((data) => {
                                    data.correctedboys = Number(data.correctedboys);
                                    data.correctedgirls = Number(data.correctedgirls);
                                    data.TotalStudents = Number(data.TotalStudents);
                                    data.boys = Number(data.boys);
                                    data.girls = Number(data.girls);
                                });
                            }
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
        this._translate.get("EmisReport").subscribe((res) => {
            this.Report = res;
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
        this._translate.get("primary").subscribe((res) => {
            this.primary = res;
        });
        this._translate.get("emisReportNote").subscribe((res) => {
            this.emisReportNote = res;
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
        this._translate.get("shareonwhatsapp").subscribe((res) => {
            this.shareonwhatsapp = res;
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
        this._translate.get("save").subscribe((res) => {
            this.save = res;
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
    presentModal(listedValue, type, correction, showCategory, gender = "", index = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
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
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            let selectedGender = gender;
            let selectedIndex = index;
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
    showAlert(alertInfo = "", message = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "",
                message: "There is a mismatch in the student enrollment data entered with the EMIS data.<br>Kindly ask the HM to make the necessary changes",
                cssClass: "my-custom-class",
                backdropDismiss: false,
                buttons: [{
                        text: "ok",
                        handler: () => {
                            this.goToTeacherSelection();
                        }
                    }],
            });
            yield alert.present();
        });
    }
    goToValidate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            let status = false;
            for (var i = 0; i < this.correctedClass.length; i++) {
                if ((this.correctedClass[i].correctedboys + this.correctedClass[i].correctedgirls) != (this.correctedClass[i].boys + this.correctedClass[i].girls)) {
                    status = true;
                }
            }
            if (status == true) {
                this.showAlert(this.emisReportNote);
            }
            else {
                this.goToTeacherSelection();
            }
        });
    }
    goToBack() {
        this.ionicStore.setStoreData(this.storeDetail);
        // this._router.navigate(["/tnvntabs/page-route/hodinspection"]); 
        this._router.navigate(["/tnvntabs/page-route/emidata", this.storeDetail.pages.pageData[0].pageDetails.school_id]);
    }
    goToTeacherSelection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            // let classList = [];
            // this.correctedClass.forEach((data, index) => {
            //   classList.push({
            //     class: data.class,
            //     no_of_boys: data.boys,
            //     no_of_girls: data.girls,
            //   });
            // });
            // let created_on = new Date();
            // created_on.toISOString();
            // let pageDetails = {
            //   nodal_id: this.schoolDetails.school_id,
            //   nodal_name:
            //     this.correctedZone != ""
            //       ? this.correctedZone
            //       : this.schoolDetails.nodal_name,
            //   block_id: this.schoolDetails.block_id,
            //   block_name:
            //     this.correctedBlock != ""
            //       ? this.correctedBlock
            //       : this.schoolDetails.block_name,
            //   edu_district_id: this.schoolDetails.edu_dist_id,
            //   edu_district_name:
            //     this.correctedEduDistrict != ""
            //       ? this.correctedEduDistrict
            //       : this.schoolDetails.edu_dist_name,
            //   district_id: this.schoolDetails.dist_id,
            //   district_name:
            //     this.correctedDistrict != ""
            //       ? this.correctedDistrict
            //       : this.schoolDetails.district_name,
            //   created_on: created_on,
            //   created_by: localStorage.getItem("username"),
            //   teachers_alloted:
            //     this.correctedTotalTeachers != ""
            //       ? this.correctedTotalTeachers
            //       : this.listedTotalTeachers,
            //   total_students:
            //     this.correctedTotalStudents != ""
            //       ? this.correctedTotalStudents
            //       : this.listedTotalStudents,
            //   vacancies: this.vacancies,
            //   classdata: classList,
            //   teacherSanctioned: this.teacherSanctionedValue,
            //   teachersAvailable: this.teachersAvailableValue,
            //   teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
            //   teachersDeputationOtherSchool: this
            //     .teachersDeputationOtherSchoolValue,
            //   teachersOnLongLeave: this.teachersOnLongLeaveValue,
            // };
            // let correctedDetails = {
            //   nodal_id: this.schoolDetails.school_id,
            //   nodal_name: this.correctedZone,
            //   block_id: this.schoolDetails.block_id,
            //   block_name: this.correctedBlock,
            //   edu_district_id: this.schoolDetails.edu_dist_id,
            //   edu_district_name: this.correctedEduDistrict,
            //   district_id: this.schoolDetails.dist_id,
            //   district_name: this.correctedDistrict,
            //   created_on: created_on,
            //   created_by: localStorage.getItem("username"),
            //   teachers_alloted: this.correctedTotalTeachers,
            //   total_students: this.correctedTotalStudents,
            //   vacancies: this.vacancies,
            //   classdata: classList,
            //   teacherSanctioned: this.teacherSanctionedValue,
            //   teachersAvailable: this.teachersAvailableValue,
            //   teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
            //   teachersDeputationOtherSchool: this
            //     .teachersDeputationOtherSchoolValue,
            //   teachersOnLongLeave: this.teachersOnLongLeaveValue,
            // };        
            // this.storeDetail.pages.pageData[3].pageDetails = pageDetails;
            // this.storeDetail.pages.pageData[3].correctedDetails = correctedDetails;
            // this.storeDetail.pages.pageData[3].correctedClass = this.correctedClass;
            // this.storeDetail.pages.currentProgress = this.progressValue;
            // this.ionicStore.setStoreData(this.storeDetail);
            //   const level = localStorage.getItem("selectedlevel");
            //   const usertype = localStorage.getItem("usertype");
            //   const veracity_type = localStorage.getItem("veracity_type");
            //   const {
            //     school_id,
            //     school_name,
            //     udise_code
            //   } = this.storeDetail.pages.pageData[0].pageDetails;    
            //   let emiverfiyInfo;    
            //   if(level=='1' || veracity_type == 'inspection'){
            //     if(this.storeDetail.pages.pageData[1].pageFlow!='observation'){
            //       emiverfiyInfo = this.storeDetail.pages.pageData[3].pageDetails;
            //     }else{
            //       let school_info:any = {}
            //       school_info.created_by = localStorage.getItem("username");    
            //       school_info.veracity_type = localStorage.getItem("veracity_type");    
            //       school_info.district_id =  this.masterApiResponse.dist_id;
            //       school_info.district_name =  this.masterApiResponse.district_name;
            //       school_info.block_id =  this.masterApiResponse.block_id;
            //       school_info.block_name =  this.masterApiResponse.block_name;
            //       school_info.edu_dist_id =  this.masterApiResponse.edu_dist_id;
            //       school_info.edu_dist_name =  this.masterApiResponse.edu_dist_name;
            //       school_info.nodal_id =  this.masterApiResponse.nodal_id;
            //       school_info.nodal_name =  this.masterApiResponse.nodal_name;      
            //       school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
            //       school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
            //       school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
            //       school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
            //       school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
            //       school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
            //       school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;
            //       emiverfiyInfo = school_info;
            //     }
            //   }
            //   else{
            //     let school_info:any = {}
            //     school_info.created_by = localStorage.getItem("username");    
            //     school_info.veracity_type = localStorage.getItem("veracity_type");    
            //     school_info.district_id =  this.masterApiResponse.dist_id;
            //     school_info.district_name =  this.masterApiResponse.district_name;
            //     school_info.block_id =  this.masterApiResponse.block_id;
            //     school_info.block_name =  this.masterApiResponse.block_name;
            //     school_info.edu_dist_id =  this.masterApiResponse.edu_dist_id;
            //     school_info.edu_dist_name =  this.masterApiResponse.edu_dist_name;
            //     school_info.nodal_id =  this.masterApiResponse.nodal_id;
            //     school_info.nodal_name =  this.masterApiResponse.nodal_name;      
            //     school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
            //     school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
            //     school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
            //     school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
            //     school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
            //     school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
            //     school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;      
            //     emiverfiyInfo = school_info;                  
            //   }
            //   const schoolInfo = {
            //     school_id: school_id,
            //     school_name: school_name,
            //     level: level,
            //     udise_code: udise_code
            //   };
            //   let mediumIds: any ;
            //   let classInfo: any ;
            //   if(this.storeDetail.pages.pageData[5].pageDetails.selectedClass){
            //     mediumIds = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map(
            //       (el) => {
            //         return el.medium_id;
            //       }
            //     );    
            //     classInfo = {
            //       class: this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id,
            //       medium: mediumIds.toString(),
            //       class_type: this.storeDetail.pages.pageData[5].pageDetails.classType,
            //       section: this.storeDetail.pages.pageData[5].pageDetails.section,
            //       teacher_name: this.storeDetail.pages.pageData[5].pageDetails
            //         .teacherDetails.teacher_name,
            //       teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails
            //         .teacherDetails.teacher_emisid,
            //     };   
            //   }
            //   const basicInfoObj = { ...schoolInfo, ...emiverfiyInfo, ...classInfo };
            //   const schoolReasons = this.storeDetail.pages.pageData[0].pageDetails
            //     .schoolsReasons;
            //     let studentReasons;
            //    if(this.storeDetail.pages.pageData[9]){
            //     studentReasons = this.storeDetail.pages.pageData[9].pageDetails
            //       .studentReasonList;
            //    } 
            //    else{
            //       studentReasons = {}
            //    }
            //   let teacher;    
            //   if (
            //     this.storeDetail.pages.pageData[5].pageDetails.reasonDetails != undefined
            //   ) {
            //     if(this.storeDetail.pages.pageData[5].pageDetails.teacherDetails){
            //       teacher = {
            //         teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails
            //           .teacherDetails.teacher_emisid,
            //         teacher_name: this.storeDetail.pages.pageData[5].pageDetails
            //           .teacherDetails.teacher_name,
            //         reason: this.storeDetail.pages.pageData[5].pageDetails.reasonDetails,
            //         description: "Reason for not observing teacher",
            //       };
            //     }
            //   }
            //   const not_verfied = {
            //     schools: schoolReasons,
            //     teacher: teacher == undefined ? {} : teacher,
            //     student: studentReasons,
            //   };
            //   let learning_outcome_data;          
            //   let questiondata = {}
            //   if(this.storeDetail.pages.pageData[10]){
            //     questiondata = this.storeDetail.pages.pageData[10].pageDetails
            //   }
            //   if(this.storeDetail.pages.pageData[8]?.correctedDetails){
            //     learning_outcome_data = {
            //       unit: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo
            //         .chapter_no,
            //       learning_outcome: this.storeDetail.pages.pageData[8].correctedDetails
            //         .unitInfo.learning_outcome,
            //       question_data: questiondata,
            //     };
            //   }
            //   else{
            //     learning_outcome_data = {}
            //   }
            //   let observation_reportconst = {};
            //   if (this.storeDetail.pages.pageData[9]) {
            //     observation_reportconst = {
            //       strength: this.storeDetail.pages.pageData[9].pageDetails.strength,
            //       improvement: this.storeDetail.pages.pageData[9].pageDetails.improvement,
            //     };
            //   }
            //   let observation_data;
            //   if (this.storeDetail.pages.pageData[7]) {
            //     observation_data = {
            //       observation_dataInfo: this.storeDetail.pages.pageData[7].apiResponse
            //         .records.customizeSectionList,
            //     };
            //   }
            //   let finalData = {
            //     basic_info: basicInfoObj,
            //     not_verfied: not_verfied,
            //     attendance_data: this.storeDetail.pages.pageData[6]?.pageDetails.misMatchStudentList,            
            //     learning_outcome_data: learning_outcome_data,
            //     observation_data: this.storeDetail.pages.pageData[7]
            //       ? observation_data.observation_dataInfo
            //       : {},
            //     observation_report: this.storeDetail.pages.pageData[7]
            //       ? observation_reportconst
            //       : {},
            //     final_remarks: "Good",
            //   };
            //   let final = {
            //     json: JSON.stringify(finalData),
            //   };          
            //   await this.ionicStore.setStoreData(this.storeDetail);
            //   let connectionStatus = this.networkService.getCurrentNetworkStatus();
            if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass) {
                // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]); 
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "emidata_section_status": localStorage.setItem("emidata_section_status", "1") } });
            }
            else {
                // this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { "emidata_section_status": localStorage.setItem("emidata_section_status", "1") } });
            }
        });
    }
};
EmiverifyComponent.ctorParameters = () => [
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__.PostService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__.AndroidPermissions },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__.IonicStorageService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService },
    { type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService },
    { type: _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__.FilePath },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__.File }
];
EmiverifyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: "app-emiverify",
        template: _raw_loader_emiverify_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_emiverify_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EmiverifyComponent);



/***/ }),

/***/ 92397:
/*!**********************************************************!*\
  !*** ./src/app/pages/tnvn/emiverify/emiverify.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmiverifyModule": function() { return /* binding */ EmiverifyModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _emiverify_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emiverify.component */ 32335);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);










const routes = [
    {
        path: '',
        component: _emiverify_component__WEBPACK_IMPORTED_MODULE_0__.EmiverifyComponent
    }
];
let EmiverifyModule = class EmiverifyModule {
};
EmiverifyModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        providers: [
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing,
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File,
        ],
        declarations: [_emiverify_component__WEBPACK_IMPORTED_MODULE_0__.EmiverifyComponent,
        ],
        exports: [],
        entryComponents: []
    })
], EmiverifyModule);



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

/***/ 27436:
/*!***************************************************************!*\
  !*** ./src/app/pages/tnvn/emiverify/emiverify.component.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaXZlcmlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQ0FBQTtBQUVKIiwiZmlsZSI6ImVtaXZlcmlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTZkZWVkICFpbXBvcnRhbnQ7ICBcclxuICB9XHJcbi5iZy10cmFuc3BhcmVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59Il19 */");

/***/ }),

/***/ 73137:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/emiverify/emiverify.component.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n          <b>EMIS\r\n          <br/>\r\n          <span *ngIf = \"this.languageType == 'ta'\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\" style=\"font-size: 21px\">\r\n            {{this.Report}}</span>\r\n          <span *ngIf = \"this.languageType == 'en'\">{{this.Report}}</span>  \r\n        </b>\r\n          </ion-title>\r\n        </ion-col>   \r\n        \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n \r\n    <ion-button  (click)=\"shareImage()\">\r\n        <ion-label style=\"color:#fff\"\r\n          >{{this.shareonwhatsapp}}\r\n        </ion-label>\r\n        <i class=\"ionicons ion-share\"></i>\r\n        <ion-icon color =\"light\" name=\"share\"></ion-icon>\r\n      </ion-button>  \r\n\r\n      \r\n      <div  id=\"PrintEmis\" style=\"max-width: 600px;margin: auto;padding: 10px;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;line-height: 24px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;\">\r\n        <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n          <p class=\"pt-2 color-dgrey\" *ngIf=\"schoolDetails\">\r\n            {{ schoolDetails?.school_name }} <b>[{{ schoolDetails?.cate_type }}]</b>\r\n          </p>\r\n        </ion-text>\r\n        <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n          <ion-label class=\" fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n            <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.schoolDetail}}</span></b>\r\n          </ion-label>    \r\n      </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.district\r\n        }}:</span></b>\r\n      </ion-label>  \r\n    </ion-item>\r\n\r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item lines= \"none\" >\r\n      <ion-text [ngClass]=\"correctedDistrict.district_name == schoolDetails?.district_name? 'text-success': 'text-danger'\"  >{{ correctedDistrict != \"\" ? correctedDistrict.district_name : \"\" }}</ion-text>\r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n      <ion-text class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.educationalDistrict\r\n        }}:</span></b>\r\n      </ion-text>     \r\n    </ion-item>   \r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item lines= \"none\" >\r\n      <ion-text [ngClass]=\"correctedEduDistrict.edn_dist_name == schoolDetails?.edu_dist_name? 'text-success': 'text-danger'\" >{{ correctedEduDistrict != \"\" ? correctedEduDistrict.edn_dist_name : \"\" }}</ion-text>      \r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n      <ion-item lines=\"none\">        \r\n      <ion-text class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.block\r\n        }}:</span></b>\r\n      </ion-text>  \r\n    </ion-item>       \r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item  lines= \"none\">\r\n      <ion-text [ngClass]=\"correctedBlock.block_name == schoolDetails?.block_name? 'text-success': 'text-danger'\" >{{ correctedBlock != \"\" ? correctedBlock.block_name : \"\" }}</ion-text>      \r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n      <ion-text class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.zone\r\n        }}:</span></b>\r\n      </ion-text>  \r\n    </ion-item>      \r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item  lines= \"none\">\r\n      <ion-text [ngClass]=\"correctedZone.school_name == schoolDetails?.nodal_name? 'text-success': 'text-danger'\" >{{ correctedZone != \"\" ? correctedZone.school_name : \"\" }}</ion-text>    \r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n      <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.studentEnroll}}</span></b>\r\n      </ion-label>    \r\n    </ion-row>\r\n    \r\n      <ion-grid>        \r\n        <ion-row style=\"background-color:#8B67B3\">\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.class}}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.boysTotal}}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.girlsTotal}}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.studentsTotal}}\r\n            </ion-text>\r\n          </ion-col>                  \r\n        </ion-row>    \r\n        <ion-row *ngFor=\"let classItem of classList; let i = index\">\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text>\r\n              {{this.class}} {{ classItem.class }}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text [ngClass]=\"correctedClass[i].correctedboys == correctedClass[i].boys? 'text-success': 'text-danger'\">{{ correctedClass[i].correctedboys }}</ion-text>    \r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text [ngClass]=\"correctedClass[i].correctedgirls == correctedClass[i].girls? 'text-success': 'text-danger'\">{{ correctedClass[i].correctedgirls }}</ion-text>    \r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text [ngClass]=\"(correctedClass[i].correctedboys+correctedClass[i].correctedgirls) == (correctedClass[i].boys+correctedClass[i].girls)? 'text-success': 'text-danger'\">\r\n              {{correctedClass[i].TotalStudents}}\r\n            </ion-text>  \r\n          </ion-col>                  \r\n        </ion-row>  \r\n    \r\n        <ion-row >\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text>\r\n              <b>Total</b>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text>\r\n              <b>{{this.totalNumberOfBoys}}</b>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <b>{{this.totalNumberOfGirls}}</b>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <b>{{this.totalNoOfStudents}}</b>\r\n          </ion-col>                  \r\n        </ion-row>      \r\n      </ion-grid>      \r\n      <ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n        <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n          <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.teacherPosition}}</span></b>\r\n        </ion-label>    \r\n    </ion-row>  \r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teacherSanctioned\r\n        }}:</span></b>\r\n      </ion-label>        \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text  style=\"width:100%;text-align:center\">{{ this.teacherSanctionedValue }}</ion-text>            \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teacherSanctionedPost\r\n        }}:</span></b>\r\n      </ion-label>        \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text  style=\"width:100%;text-align:center\">{{ this.teacherSanctionedPostValue }}</ion-text>                \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersAvailable\r\n        }}:</span></b>\r\n      </ion-label>  \r\n \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text  style=\"width:100%;text-align:center\">{{ this.teachersAvailableValue }}</ion-text>                  \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersDeputationSameSchool\r\n        }}:</span></b>\r\n      </ion-label>        \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text style=\"width:100%;text-align:center\">{{ this.teachersDeputationSameSchoolValue }}</ion-text>                        \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersDeputationOtherSchool\r\n        }}:</span></b>\r\n      </ion-label>  \r\n    </ion-col>      \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text style=\"width:100%;text-align:center\">{{ this.teachersDeputationOtherSchoolValue }}</ion-text>                              \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersOnLongLeave\r\n        }}:</span></b>\r\n      </ion-label>      \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text style=\"width:100%;text-align:center\">{{ this.teachersOnLongLeaveValue }}</ion-text>                              \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>           \r\n    </div>          \r\n</ion-content> \r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button\r\n        class=\"btn-back\"\r\n        (click)=\"goToBack()\"      \r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToValidate()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_emiverify_emiverify_module_ts-es2015.js.map