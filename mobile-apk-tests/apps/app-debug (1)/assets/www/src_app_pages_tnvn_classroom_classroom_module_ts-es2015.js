(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_classroom_classroom_module_ts"],{

/***/ 33195:
/*!*************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom/classroom.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassroomComponent": function() { return /* binding */ ClassroomComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_classroom_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./classroom.component.html */ 735);
/* harmony import */ var _classroom_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classroom.component.scss */ 62296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tnvn/services/api.service */ 65481);
/* harmony import */ var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tnvn/services/alert.service */ 69564);
/* harmony import */ var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */ 84658);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/classroommodal/classroommodal.component */ 71414);
/* harmony import */ var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/emimodal/emimodal.component */ 79615);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ 38605);















let ClassroomComponent = class ClassroomComponent {
    constructor(modalController, _apiService, userSessionService, _router, alertController, _alertService, ionicStore, loading, _translate, storage) {
        this.modalController = modalController;
        this._apiService = _apiService;
        this.userSessionService = userSessionService;
        this._router = _router;
        this.alertController = alertController;
        this._alertService = _alertService;
        this.ionicStore = ionicStore;
        this.loading = loading;
        this._translate = _translate;
        this.storage = storage;
        this.ObservationOptions = [{ "id": 1, "name": "Classroom Observation" }, { "id": 2, "name": "Assessments" }];
        this.changedValue = "";
        this.teacherReasons = [];
        this.isChanged = false;
        this.standardList = [];
        this.selectedStandardList = [];
        this.selectedMediumIds = [];
        this.toggleMultigrade = false;
        this.showMonograde = false;
        this.classInfoList = [];
        this.observationflow = 1;
        this.observationList = [{ id: 1, value: "Regular Observation" }, { id: 2, value: "Foundational learning hour" }];
        this.mediumInfoList = [];
        this.subjectList = [];
        this.sectionList = [];
        this.selectedClass = {};
        this.selectedMedium = [];
        this.teachersList = [];
        this.taxonObj = {};
        this.ppSchBaseDetails = [];
        this.schClsList = [];
        this.getSchoolInfo = (schoolId) => {
            debugger;
            let records = {
                school_class_info: this.masterApiResponse.school_class_info,
                reasons: this.masterApiResponse.teacher_reasons,
                subjects: [],
            };
            let totalRecords = records;
            this.teacherReasons = records.reasons;
            this.teacherReasons = this.filterListByLang(this.teacherReasons);
            localStorage.setItem("teacherlength", this.masterApiResponse.teacher_details.length);
            let school_type = localStorage.getItem("selectedschooltype");
            let class_available;
            let class_available_string;
            if (localStorage.getItem("veracity_type") != 'inspection') {
                class_available_string = localStorage.getItem("selectedClasses");
                class_available = class_available_string.split(',');
                console.log(class_available[0]);
                console.log(class_available[class_available.length - 1]);
            }
            this.classInfoList = records.school_class_info;
            if (this.usertype == 8) {
                this.classInfoList = this.classInfoList.filter((data) => {
                    if (Number(data.class_id) >= 1 && Number(data.class_id) <= 12) {
                        return data;
                    }
                });
            }
            else {
                this.classInfoList = this.classInfoList.filter((data) => {
                    if (localStorage.getItem("veracity_type") != 'inspection') {
                        if (Number(this.usertype) == 24 && data.class_id < 13) {
                            return data;
                        }
                        else {
                            if (Number(school_type) == 1 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                                return data;
                            }
                            else if (Number(school_type) == 2 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                                return data;
                            }
                            else if (Number(school_type) == 3 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                                return data;
                            }
                            else if (school_type == null && data.class_id < 13) {
                                return data;
                            }
                        }
                    }
                    else if (localStorage.getItem("veracity_type") == 'inspection') {
                        if (data.class_id < 13) {
                            return data;
                        }
                    }
                });
            }
            console.log(this.classInfoList);
            let logData = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Class List",
                action_name: "Class List Data",
                data: "Class info list : " + JSON.stringify(this.classInfoList),
                completion_percentage: this.progressValue
            };
            this._apiService.setActivityLog(logData).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            let idx = Math.floor(Math.random() * this.classInfoList.length);
            this.randomClass = this.classInfoList[idx];
            if (this.randomClass == undefined) {
                this.selectedSection = undefined;
                this.showQuestionsAlert();
            }
            if (this.randomClass) {
                let sections = this.randomClass.section.split(",");
                let sectionsIdx = Math.floor(Math.random() * sections.length);
                this.randomSection = sections[sectionsIdx];
                this.selectedSection = this.randomSection;
                localStorage.setItem('selectedClassSection', this.selectedSection);
                let anotherSections = sections.splice(sectionsIdx, 1);
                this.classInfoList[idx].section = sections.join(",");
                if (this.classInfoList[idx].section == '') {
                    this.classInfoList.splice(idx, 1);
                }
            }
            let logDataNew = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Randamized class",
                action_name: "On Select",
                data: "Selected Class : " + this.randomClass.class_id + ", Selected Section : " + this.randomSection,
                completion_percentage: this.progressValue
            };
            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            let apiData = {
                pageNo: "6",
                pageName: "classRoom",
                apiResponse: {
                    records: totalRecords,
                },
                pageDetails: {
                    teacherDetails: this.teacherDetails,
                    teacher_id: this.teacher_id,
                },
                correctedDetails: {
                    regularTeacher: ""
                },
                tempInfo: {
                    showDropdown: false,
                },
                observationflow: this.observationflow
            };
            debugger;
            this.storeDetail.pages.pageData[5] = apiData;
            this.storeDetail.pages.pageData[5].apiResponse.records.school_class_info = this.classInfoList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            if (this.randomClass) {
                this.getMediumList(this.randomClass.class_id);
            }
        };
        this.selectStandard = (type, standard, index) => {
            let typeData = type;
            if (typeData == "checkbox") {
                this.selectedStandardList = [];
                this.classInfoList[index].checked = !standard.checked;
                this.selectedStandardList = this.classInfoList.filter((standard, index) => standard.checked == true);
                this.getMediumList(this.randomClass.class_id);
            }
            else {
                this.selectedStandardList = [];
                this.selectedStandardList[0] = standard;
                this.sectionList = standard.section.split(",");
                this.getMediumList(this.randomClass.class_id);
            }
        };
        this.getMediumList = (selectedStandardList) => {
            debugger;
            let classIds = selectedStandardList;
            let allMediumList = this.masterApiResponse.medium_info;
            let tempMediumList = [];
            this.mediumInfoList = [];
            // this.mediumInfoList = allMediumList.sort((a,b) => (a.medium_desc > b.medium_desc) ? 1 : ((b.medium_desc > a.medium_desc) ? -1 : 0));
            this.mediumInfoList = allMediumList.filter(x => x.medium_id == 16 || x.medium_id == 19);
            console.log(this.mediumInfoList, 'this.mediumInfoList');
            this.mediumInfoList.forEach((data) => {
                data["checked"] = false;
            });
            this.storeDetail.pages.pageData[5].apiResponse.records["medium_info"] = this.mediumInfoList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        };
        this.selectobservation = (type, observation, index) => {
            this.observationflow = observation[index].id;
        };
        this.customClassInfo = (classInfoList) => {
            classInfoList.forEach((data, index) => {
                this.classInfoList[index] = data;
                this.classInfoList[index]["checked"] = false;
            });
        };
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.userName = localStorage.getItem("username");
            console.log(this.userName, 'this.userName');
            this.schoolInfo = localStorage.getItem("schoolInfo");
            this.schoolInfo = JSON.parse(this.schoolInfo);
            let teacherInfo = localStorage.getItem("teacherInfo");
            this.schoolInfo = localStorage.getItem("schoolInfo");
            this.schoolInfo = JSON.parse(this.schoolInfo);
            this.progressValue = Math.round(((3 - 2) / 12) * 100);
            this.schClsList = [];
            this.appLanguage();
            this.gradeLabel = this.getGradeLabel();
            this.loading.present();
            this.ionicStore.getData('ppSchBaseDetails').then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                this.ppSchBaseDetails = data ? data : [];
                yield this.ionicStore.getOffStorage().then((response) => {
                    this.schClsList = response === null || response === void 0 ? void 0 : response.school_class_info.filter(obj => {
                        return obj.class_id < 9;
                    });
                    // this.storage.get('offStoreData').then(response=>{
                    this.loading.dismiss();
                    this.masterApiResponse = response;
                    if (this.masterApiResponse == null) {
                        this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                    }
                    if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                        let logDataNew = {
                            username: localStorage.getItem("username"),
                            udise_code: localStorage.getItem("udise_code"),
                            observation_id: localStorage.getItem("observation_id"),
                            form_name: "Get Stored Data",
                            action_name: "Issue in Getting Stored Data in classroom page",
                            data: "Issue in Getting Stored Data in classroom page" + JSON.stringify(this.masterApiResponse),
                            completion_percentage: this.progressValue
                        };
                        this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                        }, (error) => {
                            this._alertService.showAlert("SOMETHING WENT WRONG");
                        });
                    }
                    let teacherList = this.masterApiResponse.teacher_details;
                    this.teachersList = teacherList.sort((a, b) => (a.teacher_name > b.teacher_name) ? 1 : ((b.teacher_name > a.teacher_name) ? -1 : 0));
                    this.ionicStore.getStoreData().then((response) => {
                        this.storeDetail = response;
                        console.log(this.storeDetail, 'this.storeDetail');
                        if (this.storeDetail == null) {
                            this.storeDetail = JSON.parse(localStorage.getItem('storedDetails'));
                        }
                        this.storeDetail.pages.currentPage = "classRoom";
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                        this.usertype = this.userSessionService.emis_usertype();
                        this.teachertype = this.userSessionService.teacher_type();
                        let getFinalData = localStorage.getItem("finaldata");
                        let level = localStorage.getItem("selectedlevel");
                        if (Number(level) == 1) {
                            if (this.storeDetail.pages.pageData[1].pageFlow == "emisVerification") {
                                this.teacherDetails = this.storeDetail.pages.pageData[5]["pageDetails"].teacherDetails;
                            }
                        }
                        if (this.storeDetail.pages.pageData[5] == undefined || !this.storeDetail.pages.pageData[5].pageDetails.selectedClass || getFinalData) {
                            this.checkedValue = this.NewBoolean;
                            this.regularTeacher = this.NewBoolean;
                            this.showDropdown = this.NewBoolean;
                            this.selectedMediumIds = [];
                            this.selectedSubject = "";
                            this.selectedTeacher = "";
                            this.getSchoolInfo(this.storeDetail.pages.pageData[0].pageDetails.school_id);
                        }
                        else {
                            this.selectedSubject = this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
                            this.selectedTeacher = this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_id;
                            this.checkedValue = "yes";
                            this.regularTeacher = !this.NewBoolean;
                            this.showDropdown = !this.NewBoolean;
                            if (this.storeDetail.pages.pageData[5].apiResponse.records
                                .medium_info != undefined) {
                                // this.mediumInfoList = this.storeDetail.pages.pageData[5].apiResponse.records.medium_info;            
                                this.mediumInfoList = this.storeDetail.pages.pageData[5].apiResponse.records.medium_info.filter(x => x.medium_id == 16 || x.medium_id == 19);
                                console.log(this.mediumInfoList, 'this.mediumInfoList');
                                this.selectedMediumIds = this.mediumInfoList.map((data, index) => data.checked == true ? data.medium_id : undefined).filter(x => x);
                                this.selectedMedium = this.mediumInfoList.filter((data, index) => data.checked == true);
                            }
                            this.subjectList = this.storeDetail.pages.pageData[5].apiResponse.records.subjects;
                            this.randomClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass;
                            this.randomSection = this.storeDetail.pages.pageData[5].pageDetails.section;
                            let logDataNew = {
                                username: localStorage.getItem("username"),
                                udise_code: localStorage.getItem("udise_code"),
                                observation_id: localStorage.getItem("observation_id"),
                                form_name: "Randamized class",
                                action_name: "On Select",
                                data: "Selected Class : " + this.randomClass.class_id + ", Selected Section : " + this.randomSection,
                                completion_percentage: this.progressValue
                            };
                            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                            }, (error) => {
                                this._alertService.showAlert("SOMETHING WENT WRONG");
                            });
                            let pageDetails = this.storeDetail.pages.pageData[5].pageDetails;
                            if (pageDetails.mediumInfo != undefined) {
                                this.selectedMedium = pageDetails.mediumInfo;
                                this.selectedSubject = pageDetails.subjectInfo.subject_id;
                                this.selectedSubjectData = pageDetails.subjectInfo;
                                this.selectedTeacher = this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid;
                                this.selectedTeacherData = pageDetails.teacherDetails;
                                this.selectedMediumIds = pageDetails.mediumInfo[0].medium_id;
                                this.randomClass = pageDetails.selectedClass;
                                this.selectedSection = pageDetails.section;
                                localStorage.setItem('selectedClassSection', this.selectedSection);
                                if (pageDetails.classType == "2") {
                                    this.toggleMultigrade = true;
                                    this.showMonograde = false;
                                    this.classType = "2";
                                }
                                else {
                                    this.showMonograde = true;
                                    this.toggleMultigrade = false;
                                    this.classType = "1";
                                    this.randomClass = pageDetails.selectedClass;
                                    this.selectedSection = pageDetails.section;
                                    localStorage.setItem('selectedClassSection', this.selectedSection);
                                }
                            }
                        }
                    });
                    this.loading.dismiss();
                    this.goToEmiVerify();
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
        if (this.storeDetail) {
            this.teacherReasons = this.filterListByLang(this.storeDetail.pages.pageData[5].apiResponse.records.reasons);
        }
        this._translate.get("observationToday").subscribe((res) => {
            this.observationToday = res;
        });
        this._translate.get("classroomObservations").subscribe((res) => {
            this.classroomObservations = res;
        });
        this._translate.get("assessments").subscribe((res) => {
            this.assessments = res;
        });
        this._translate.get("classroom").subscribe((res) => {
            this.classroom = res;
        });
        this._translate.get("class").subscribe((res) => {
            this.class = res;
        });
        this._translate.get("todayObserving").subscribe((res) => {
            this.todayObserving = res;
        });
        this._translate.get("classroomObserved").subscribe((res) => {
            this.classroomObserved = res;
        });
        this._translate.get("Details").subscribe((res) => {
            this.Details = res;
        });
        this._translate.get("yes").subscribe((res) => {
            this.yes = res;
        });
        this._translate.get("no").subscribe((res) => {
            this.no = res;
        });
        this._translate.get("giveReason").subscribe((res) => {
            this.giveReason = res;
        });
        this._translate.get("takeAttendance").subscribe((res) => {
            this.takeAttendance = res;
        });
        this._translate.get("selectTeacher").subscribe((res) => {
            this.selectTeacher = res;
        });
        this._translate.get("doIt").subscribe((res) => {
            this.doIt = res;
        });
        this._translate.get("giveSubject").subscribe((res) => {
            this.giveSubject = res;
        });
        this._translate.get("giveMedium").subscribe((res) => {
            this.giveMedium = res;
        });
        this._translate.get("giveClass").subscribe((res) => {
            this.giveClass = res;
        });
        this._translate.get("giveSection").subscribe((res) => {
            this.giveSection = res;
        });
        this._translate.get("Selection").subscribe((res) => {
            this.Selection = res;
        });
        this._translate.get("multigrade").subscribe((res) => {
            this.multigrade = res;
        });
        this._translate.get("monograde").subscribe((res) => {
            this.monograde = res;
        });
        this._translate.get("teacherResponsible").subscribe((res) => {
            this.teacherResponsible = res;
        });
        this._translate.get("selectSubject").subscribe((res) => {
            this.selectSubject = res;
        });
        this._translate.get("mediumInstruction").subscribe((res) => {
            this.mediumInstruction = res;
        });
        this._translate.get("selectSection").subscribe((res) => {
            this.selectSection = res;
        });
        this._translate.get("teacherClass").subscribe((res) => {
            this.teacherClass = res;
        });
        this._translate.get("noSubject").subscribe((res) => {
            this.noSubject = res;
        });
        this._translate.get("noneAbove").subscribe((res) => {
            this.noneAbove = res;
        });
        this._translate.get("noSection").subscribe((res) => {
            this.noSection = res;
        });
        this._translate.get("med").subscribe((res) => {
            this.med = res;
        });
        this._translate.get("noMedium").subscribe((res) => {
            this.noMedium = res;
        });
        this._translate.get("Note").subscribe((res) => {
            this.Note = res;
        });
        this._translate.get("ok").subscribe((res) => {
            this.ok = res;
        });
        this._translate.get("cancel").subscribe((res) => {
            this.cancel = res;
        });
        this._translate.get("back").subscribe((res) => {
            this.back = res;
        });
        this._translate.get("save").subscribe((res) => {
            this.save = res;
        });
        this._translate.get("noStudents").subscribe((res) => {
            this.noStudents = res;
        });
        this._translate.get("next").subscribe((res) => {
            this.next = res;
        });
        this._translate
            .get("multigradeSingleOptionMessage")
            .subscribe((res) => {
            this.multigradeSingleOptionMessage = res;
        });
    }
    filterListByLang(list) {
        switch (this.languageType) {
            case "en":
                list = list.filter((sr) => sr.language_id == 2);
                break;
            case "ta":
                list = list.filter((sr) => sr.language_id == 1);
            default:
                break;
        }
        return list;
    }
    getGradeLabel() {
        switch (this.classType) {
            case "1":
            case 1:
                return this.monograde;
            case "2":
            case 2:
                return this.multigrade;
            default:
                return this.multigrade + '/' + this.monograde;
        }
    }
    isClassAvailable() {
        return this.classInfoList.find(x => Number(x.class_id) == 1 || Number(x.class_id) == 2 || Number(x.class_id) == 3 || Number(x.class_id) == 4 || Number(x.class_id) == 5);
    }
    showQuestionsAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "",
                cssClass: "my-custom-class",
                backdropDismiss: false,
                message: "No More Classes",
                buttons: [{
                        text: "ok",
                        handler: () => {
                            this.ionViewWillEnter();
                        }
                    }],
            });
            yield alert.present();
        });
    }
    presentModald(listedValue, type, correction, showCategory) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                componentProps: {
                    listedValue: listedValue,
                    actualValue: "",
                    divisionType: type,
                    correction: correction,
                    showCategory: showCategory,
                },
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((response) => {
                if (response.data != "Cancel") {
                    this.class_id = response.data;
                    this.changedValue = response.data;
                    this.isChanged = true;
                }
            });
            return yield modal.present();
        });
    }
    mySelectHandler(event) {
        let classRoomType = event.target.value;
        this.checkedValue = "";
        this.selectedStandardList = [];
        this.customClassInfo(this.classInfoList);
        if (Number(classRoomType) == 1) {
            this.showMonograde = true;
            this.toggleMultigrade = false;
            this.classType = 1;
            this.mediumInfoList = [];
            this.selectedMedium = [];
            this.subjectList = [];
            this.selectedSubject = "undefined";
        }
        else {
            this.toggleMultigrade = true;
            this.showMonograde = false;
            this.classType = 2;
            this.mediumInfoList = [];
            this.selectedMedium = [];
            this.subjectList = [];
            this.selectedSubject = "undefined";
        }
        this.gradeLabel = this.getGradeLabel();
        this.storeDetail.pages.pageData[5].apiResponse.records.medium_info = this.mediumInfoList.sort((a, b) => (a.medium_desc > b.medium_desc) ? 1 : ((b.medium_desc > a.medium_desc) ? -1 : 0));
        ;
        this.storeDetail.pages.pageData[5].apiResponse.records.subjects = this.subjectList;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_6__.ClassroommodalComponent,
                cssClass: " my-custom-modal-classroom",
            });
            return yield modal.present();
        });
    }
    mediumSelectHandler(event) {
        debugger;
        let selectedMediumList = [];
        this.mediumInfoList.forEach((data) => {
            if (Number(data.medium_id) == Number(event)) {
                data.checked = true;
                selectedMediumList.push(data);
            }
        });
        this.selectedMedium = selectedMediumList;
        this.taxonObj['mediumId'] = event;
        localStorage.setItem('taxonObj', JSON.stringify(this.taxonObj));
        this.storeDetail.pages.pageData[5].apiResponse.records.medium_info = this.mediumInfoList.sort((a, b) => (a.medium_desc > b.medium_desc) ? 1 : ((b.medium_desc > a.medium_desc) ? -1 : 0));
        ;
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        let selectedClass = this.randomClass.class_id;
        let classDetail = {
            class_id: selectedClass,
            medium_id: selectedMediumList,
        };
        // let allSubjectData = this.masterApiResponse.subjects_all;        
        // let subjects = [];     
        // allSubjectData.forEach((data)=>{         
        //   const classes = data.class_id.split(",")            
        //     classDetail.medium_id.forEach(mediumelement => {          
        //       // if(mediumelement!="1"||mediumelement!="2"){
        //       //   if(classDetail.medium_id.length==1 && mediumelement.medium_id == "1"){
        //       //     mediumelement = mediumelement
        //       //   }
        //       //   else{              
        //       //     mediumelement.medium_id  = "2"
        //       //   }            
        //       // }
        //       if(mediumelement){
        //         if(classDetail.medium_id.length==1){
        //           mediumelement = mediumelement
        //         }           
        //       }
        //       if(classes.includes(this.randomClass.class_id) && data.medium==mediumelement.medium_id){          
        //         if(subjects.indexOf(data)==-1){
        //           subjects.push(data)
        //         }          
        //       }        
        //     });      
        // }
        // )    
        // this.subjectList = subjects;
        let idArr = [0, 1];
        debugger;
        let arrayData = [];
        let rawData = this.masterApiResponse.subjects_all;
        rawData.forEach(dd => {
            var _a;
            let splitData = (_a = dd.class_id) === null || _a === void 0 ? void 0 : _a.split(",");
            if (splitData != undefined && splitData != null) {
                splitData.forEach(ee => {
                    if (+ee == +this.selectClass) {
                        if (arrayData.length > 0) {
                            let errorData = arrayData.filter(ff => ff.subject_id == dd.subject_id);
                            if (errorData.length == 0) {
                                arrayData.push(dd);
                            }
                        }
                        else {
                            arrayData.push(dd);
                        }
                    }
                });
            }
        });
        let data = this.masterApiResponse.subjects_all.filter(item => {
            var _a;
            let splitdata = (_a = item.class_id) === null || _a === void 0 ? void 0 : _a.split(',');
            if (splitdata != undefined && splitdata != null) {
                splitdata.forEach(element => {
                    if (+element == +this.selectClass) {
                        return true;
                    }
                });
                // item.class_id.split(',') == this.selectClass
            }
        });
        console.log('sub', data);
        console.log('arrayData', arrayData);
        console.log(this.masterApiResponse.subjects_all, 'this.masterApiResponse.subjects_all');
        console.log(data, 'datadatadatadatadata');
        this.subjectList = arrayData;
        //  this.subjectList =  this.masterApiResponse.subjects_all;    
        this.storeDetail.pages.pageData[5].apiResponse.records.subjects = this.subjectList;
        console.log(this.storeDetail.pages.pageData[5].apiResponse.records.subjects, 'his.storeDetail.pages.pageData[5].apiResponse.records.subjects');
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
    }
    sectionHandler(event) {
        this.selectedSection = event;
        localStorage.setItem('selectedClassSection', this.selectedSection);
    }
    subjectSelectHandler(event) {
        var _a;
        debugger;
        this.masterApiResponse.OmrQuestionsData = [];
        let classId = Number((_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id);
        // let classId = 65
        let subject = Number(event);
        this.taxonObj['classId'] = classId;
        this.taxonObj['subject'] = subject;
        localStorage.setItem('taxonObj', JSON.stringify(this.taxonObj));
        fetch('https://d1wpyxz35bzzz4.cloudfront.net/pp_omr_questions_' + classId + '_' + subject + '.json').then(res => res.json()).then(res => {
            this.masterApiResponse.StuAssQuestion = res.taxonomys;
            res.questions.forEach((v) => {
                v.class = v.class.toString();
                v.medium = v.medium.toString();
                v.subject = v.subject.toString();
                this.masterApiResponse.OmrQuestionsData.push(v);
            });
            this.ionicStore.setOffStorage(this.masterApiResponse);
            console.log(this.masterApiResponse.OmrQuestionsData, 'this.masterApiResponse.OmrQuestionsData');
            // localStorage.setItem("masterdata",JSON.stringify(this.masterApiResponse))
        });
        let subject_data = this.subjectList.filter((data) => {
            if (Number(data.subject_id) == event) {
                return data;
            }
        });
        this.selectedSubject = event;
        this.selectedSubjectData = subject_data[0];
    }
    AssessmentSelectHandler(event) {
        let assessment_data = this.ObservationOptions.filter((data) => {
            if (Number(data.id) == event) {
                return data;
            }
        });
    }
    teacherSelectHandler(event) {
        debugger;
        this.masterApiResponse['basic_info']['teacher_emisid'] = event;
        console.log(event);
        let teacher_data = this.teachersList.filter((data) => {
            if (Number(data.teacher_id) == event) {
                return data;
            }
        });
        this.selectedTeacher = event;
        this.storeDetail.pages.pageData[5].pageDetails.teacherDetails = teacher_data[0];
        this.storeDetail.pages.pageData[5].pageDetails.teacher_id = teacher_data[0].teacher_id;
        this.selectedTeacherData = teacher_data[0];
        this.ionicStore.setStoreData(this.storeDetail);
        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
        localStorage.setItem("teacherInfo", JSON.stringify(teacher_data[0]));
    }
    selectMonoStandard(type, event) {
        let typeData = type;
        let standard = this.classInfoList.filter(tt => tt.class_id == event);
        this.selectedStandardList = [];
        this.selectedStandardList[0] = standard[0];
        if (this.sectionList.length == 0) {
            this.sectionList = standard[0].section.split(",");
        }
        this.getMediumList(this.randomClass.class_id);
    }
    ;
    ionViewWillLeave() {
        this.toggleMultigrade = false;
        this.showMonograde = false;
    }
    isEmptyObject(obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    }
    showStudentsAlert() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.showDropdown = '';
            let logData = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                form_name: "Students Api",
                action_name: "Students Api Data",
                data: "Students not available : " + JSON.stringify(this.masterApiResponse.StudentsData) + ",Class :" + ((_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id) + ",Section :" + this.randomSection,
                completion_percentage: "0"
            };
            this._apiService.setActivityLog(logData).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            const alert = yield this.alertController.create({
                header: "",
                cssClass: "my-custom-class",
                backdropDismiss: false,
                message: "Students is not available in this class.please click ok to proceed",
                buttons: [{
                        text: "ok",
                        handler: () => {
                            this.mySelectReason("Student not available");
                        }
                    }],
            });
            yield alert.present();
        });
    }
    getStudentsData() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let classDetails = {
                "school_id": this.storeDetail.pages.pageData[0].pageDetails.school_id,
                "class": (_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id,
                "section": this.randomSection,
            };
            this.selectClass = (_b = this.randomClass) === null || _b === void 0 ? void 0 : _b.class_id;
            let uniqueId = this.userName + this.storeDetail.pages.pageData[0].pageDetails.school_id + ((_c = this.randomClass) === null || _c === void 0 ? void 0 : _c.class_id) + this.randomSection;
            console.log(uniqueId, 'uniqueId');
            localStorage.setItem("uniqueId", uniqueId);
            yield this._apiService.getAllStudentsByClass(classDetails).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                var _d;
                this.loading.dismiss();
                if (data.status == 200 && data.dataStatus == true) {
                    if (((_d = data.records.StudentsData) === null || _d === void 0 ? void 0 : _d.all) == false) {
                        this.tempStudentsdata = false;
                        if (this.tempStudentsdata == false) {
                            this.showStudentsAlert();
                        }
                    }
                    else {
                        this.tempStudentsdata = true;
                    }
                    this.masterApiResponse.StudentsData = yield data.records.StudentsData;
                    localStorage.setItem("studentsData", JSON.stringify(data.records.StudentsData));
                    yield this.ionicStore.setStudentsData(data.records.StudentsData);
                }
                else {
                }
            }), (error) => {
                this._alertService.showAlert("Choose another school");
                this.loading.dismiss();
            });
        });
    }
    goToStudentAttendance() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
            let checkObser;
            if (((_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id) < 6 && this.ObservationOptions.length && this.showDropdown) {
                checkObser = true;
            }
            else {
                checkObser = false;
            }
            console.log(this.selectedMediumIds + this.selectedSubject + this.selectedTeacher + this.checkedAssessments);
            if (this.selectedMediumIds.length != 0 && this.selectedMediumIds != null && this.selectedMediumIds != undefined) {
                if (this.selectedSubject != '' && this.selectedSubject != null && this.selectedSubject != undefined) {
                    if (this.selectedTeacher != '' && this.selectedTeacher != null && this.selectedTeacher != undefined) {
                        debugger;
                        if ((this.checkedAssessments != '' && this.checkedAssessments != null && this.checkedAssessments != undefined && checkObser == true) || ((this.checkedAssessments == '' || this.checkedAssessments == undefined) && checkObser == false)) {
                            yield this.loading.present();
                            let classDetails = {
                                "school_id": this.storeDetail.pages.pageData[0].pageDetails.school_id,
                                "class": (_b = this.randomClass) === null || _b === void 0 ? void 0 : _b.class_id,
                                "section": this.randomSection,
                            };
                            yield this._apiService.getAllStudentsByClass(classDetails).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                                var _d;
                                if (data.status == 200 && data.dataStatus == true) {
                                    if (((_d = data.records.StudentsData) === null || _d === void 0 ? void 0 : _d.all) == false) {
                                        this.tempStudentsdata = false;
                                    }
                                    else {
                                        this.tempStudentsdata = true;
                                    }
                                    this.masterApiResponse.StudentsData = yield data.records.StudentsData;
                                    yield this.ionicStore.setStudentsData(data.records.StudentsData);
                                    this.loading.dismiss();
                                }
                                else {
                                    this.loading.dismiss();
                                }
                            }), (error) => {
                                this._alertService.showAlert("Choose another school");
                                this.loading.dismiss();
                            });
                            this.masterApiResponse.school_class_info = this.masterApiResponse.school_class_info.filter((data) => {
                                var _a;
                                if (Number(data.class_id) != Number((_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id)) {
                                    return data;
                                }
                            });
                            this.ionicStore.setOffStorage(this.masterApiResponse);
                            if (this.storeDetail.pages.pageData[5] == undefined) {
                                this.getSchoolInfo(this.storeDetail.pages.pageData[0].pageDetails.school_id);
                            }
                            let logDataNew = {
                                username: localStorage.getItem("username"),
                                udise_code: localStorage.getItem("udise_code"),
                                observation_id: localStorage.getItem("observation_id"),
                                form_name: "Medium ,Subject",
                                action_name: "On form submission",
                                data: "Selected Medium : " + this.selectedMedium[0].medium_desc + ", Selected Subject : " + this.selectedSubjectData.subject,
                                completion_percentage: this.progressValue
                            };
                            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
                            }, (error) => {
                                this._alertService.showAlert("SOMETHING WENT WRONG");
                            });
                            let classInfo = {
                                mediumInfo: this.selectedMedium,
                                subjectInfo: this.selectedSubjectData,
                                classType: this.classType,
                                selectedClass: this.randomClass,
                                section: this.randomSection,
                                teacherDetails: this.selectedTeacherData,
                                teacher_id: this.selectedTeacher.teacher_id,
                            };
                            if ((_c = this.storeDetail.pages.pageData[5].pageDetails.correctedDetails) === null || _c === void 0 ? void 0 : _c.regularTeacher) {
                                this.storeDetail.pages.pageData[5].pageDetails.correctedDetails.regularTeacher = true;
                            }
                            if (this.randomClass != undefined) {
                                if (this.selectedMedium.length) {
                                    if (this.selectedSubject != "undefined" && this.selectedSubject != "") {
                                        if (this.selectedTeacher != "undefined" && this.selectedTeacher != "") {
                                            if (this.storeDetail.pages.pageData[5].pageDetails.mediumInfo) {
                                                let previousMedium = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map((el) => {
                                                    return el.medium_id;
                                                });
                                                let currentMedium = classInfo.mediumInfo.map((el) => {
                                                    return el.medium_id;
                                                });
                                                if (previousMedium.toString() == currentMedium.toString() &&
                                                    this.storeDetail.pages.pageData[5].pageDetails.subjectInfo
                                                        .subject_id == classInfo.subjectInfo.subject_id &&
                                                    this.storeDetail.pages.pageData[5].pageDetails.classType ==
                                                        classInfo.classType) {
                                                    let previousClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id;
                                                    let currentClass = this.randomClass.class_id;
                                                    if (this.classType == "1") {
                                                        if (this.randomSection !=
                                                            this.storeDetail.pages.pageData[5].pageDetails.section) {
                                                            this.ionicStore.setStoreData(this.storeDetail);
                                                            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                                                        }
                                                    }
                                                    if (previousClass.toString() != currentClass.toString()) {
                                                        this.ionicStore.setStoreData(this.storeDetail);
                                                        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                                                    }
                                                }
                                                else {
                                                    let a = JSON.parse(JSON.stringify(this.storeDetail));
                                                    this.ionicStore.setStoreData(this.storeDetail);
                                                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                                                }
                                            }
                                            else {
                                                this.storeDetail.pages.pageData[5]["pageDetails"] = classInfo;
                                                this.storeDetail.pages.pageData[5]["correctedDetails"] =
                                                    classInfo.selectedClass;
                                            }
                                            this.storeDetail.pages.pageData[5].pageDetails = classInfo;
                                            this.storeDetail.pages.pageData[5].correctedDetails =
                                                classInfo.selectedClass;
                                            let temp_SelectedClassIds = classInfo.selectedClass.class_id;
                                            this.storeDetail.pages.currentProgress = this.progressValue;
                                            yield this.ionicStore.setStoreData(this.storeDetail);
                                            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                                            yield this.pageRedirect();
                                        }
                                        else {
                                            this._alertService.showAlert("Please select the teacher");
                                        }
                                    }
                                    else {
                                        this._alertService.showAlert(this.giveSubject);
                                    }
                                }
                                else {
                                    this._alertService.showAlert(this.giveMedium);
                                }
                            }
                            else {
                                this._alertService.showAlert("Class not available please check");
                                // let getFinalData = localStorage.getItem("finaldata")
                                // if(getFinalData){
                                // this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                                // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1")}});
                                // }else{
                                // this._router.navigate(["/tnvntabs/page-route/hodinspection"]);
                                // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1")}});
                                // }      
                            }
                            yield this.loading.dismiss();
                        }
                        else {
                            this._alertService.showAlert("Please Select Observation");
                        }
                    }
                    else {
                        this._alertService.showAlert("Please Select Teacher");
                    }
                }
                else {
                    this._alertService.showAlert("Please Select Subject");
                }
            }
            else {
                this._alertService.showAlert("Please Select Medium");
            }
            ;
            this.loading.dismiss();
        });
    }
    mySelectReason(event) {
        if (event != undefined) {
            this.selectedReason = event;
            this.classInfoList = this.classInfoList.filter((data) => Number(data.class_id) != 13 && Number(data.class_id) != 14);
            let school_type = localStorage.getItem("selectedschooltype");
            let class_available;
            let class_available_string;
            if (localStorage.getItem("veracity_type") != 'inspection') {
                class_available_string = localStorage.getItem("selectedClasses");
                class_available = class_available_string.split(',');
                console.log(class_available[0]);
                console.log(class_available[class_available.length - 1]);
            }
            if (this.usertype == 8) {
                this.classInfoList = this.classInfoList.filter((data) => {
                    if (Number(data.class_id) >= 1 && Number(data.class_id) <= 12) {
                        return data;
                    }
                });
            }
            else {
                this.classInfoList = this.classInfoList.filter((data) => {
                    if (localStorage.getItem("veracity_type") != 'inspection') {
                        if (Number(this.usertype) == 24 && data.class_id < 13) {
                            return data;
                        }
                        else {
                            if (Number(school_type) == 1 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                                return data;
                            }
                            else if (Number(school_type) == 2 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                                return data;
                            }
                            else if (Number(school_type) == 3 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                                return data;
                            }
                            else if (school_type == null && data.class_id < 13) {
                                return data;
                            }
                        }
                    }
                    else if (localStorage.getItem("veracity_type") == 'inspection') {
                        if (data.class_id < 13) {
                            return data;
                        }
                    }
                });
            }
            console.log(this.classInfoList);
            let idx = Math.floor(Math.random() * this.classInfoList.length);
            this.randomClass = this.classInfoList[idx];
            if (this.randomClass == undefined) {
                this.selectedSection = undefined;
                this.showQuestionsAlert();
            }
            if (this.randomClass != undefined) {
                let sections = this.randomClass.section.split(",");
                let sectionsIdx = Math.floor(Math.random() * sections.length);
                this.randomSection = sections[sectionsIdx];
                this.selectedSection = this.randomSection;
                localStorage.setItem('selectedClassSection', this.selectedSection);
                let anotherSections = sections.splice(sectionsIdx, 1);
                this.classInfoList[idx].section = sections.join(",");
            }
            if (this.classInfoList[idx].section == '') {
                this.classInfoList.splice(idx, 1);
            }
            this.storeDetail.pages.pageData[5].apiResponse.records.school_class_info = this.classInfoList;
            if (this.randomClass) {
                this.getMediumList(this.randomClass.class_id);
            }
            let logDataNew = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Randamized class",
                action_name: "On Select",
                data: "Selected Class : " + this.randomClass.class_id + ", Selected Section : " + this.randomSection,
                completion_percentage: this.progressValue
            };
            this._apiService.setActivityLog(logDataNew).subscribe((response) => {
            }, (error) => {
                this._alertService.showAlert("SOMETHING WENT WRONG");
            });
            this.regularTeacher = this.NewBoolean;
            this.checkedValue = this.regularTeacher;
            let teacherReason = {
                reason: this.selectedReason,
                description: "Reason for not observing class",
            };
            this.storeDetail.pages.pageData[5].pageDetails["reasonDetails"] = teacherReason;
            this.selectedReason = undefined;
        }
    }
    mediumSelectHandlerMultiple(event) { }
    pageRedirect() {
        var _a;
        localStorage.setItem("checkedAssessments", this.checkedAssessments);
        this.storeDetail.pages.pageData[0].pageDetails.school_id;
        let level = localStorage.getItem("selectedlevel");
        let isRegularTeacher = this.storeDetail.pages.pageData[5].correctedDetails
            .regularTeacher;
        if (this.storeDetail.pages.pageData[5].pageDetails) {
            let classData = this.storeDetail.pages.pageData[5].pageDetails;
            let classInfo = {
                mediumInfo: classData.mediumInfo,
                subjectInfo: classData.subjectInfo,
                classType: classData.classType,
                class_id: (_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id,
            };
            localStorage.setItem("classInfo", JSON.stringify(classInfo));
        }
        if (this.tempStudentsdata == false) {
            this.showStudentsAlert();
        }
        else {
            if (this.classType == "2") {
                if (Number(level) > 1) {
                    if (isRegularTeacher) {
                        if (Number(this.storeDetail.pages.pageData[5].observationflow) == 1) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                        }
                    }
                    else {
                        if (this.storeDetail.pages.pageData[5].pageDetails.classType == '2') {
                            this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0];
                        }
                        if (this.selectedClass.class_id == '9' || this.selectedClass.class_id == '10' || this.selectedClass.class_id == '11' || this.selectedClass.class_id == '12') {
                            let level = localStorage.getItem("selectedlevel");
                            let getfinaldata = localStorage.getItem("finaldata");
                            let getteacherlength = localStorage.getItem("teacherlength");
                            if (level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                                // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]); 
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                            }
                            else if (level == '1' && !getfinaldata) {
                                // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);  
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/observation/updateObservation"]);  
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                            }
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                        }
                    }
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                }
            }
            else if (this.selectedSection != undefined) {
                if (Number(level) > 1) {
                    if (isRegularTeacher) {
                        if (Number(this.storeDetail.pages.pageData[5].observationflow) == 1) {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                        }
                    }
                    else {
                        if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '9' || this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '10' || this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '11' || this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '12') {
                            let level = localStorage.getItem("selectedlevel");
                            let getfinaldata = localStorage.getItem("finaldata");
                            let getteacherlength = localStorage.getItem("teacherlength");
                            if (level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                                // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);   
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                            }
                            else if (level == '1' && !getfinaldata) {
                                // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);  
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                            }
                            else {
                                // this._router.navigate(["/tnvntabs/page-route/observation/updateObservation"]);\
                                this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                            }
                        }
                        else {
                            this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                        }
                    }
                }
                else {
                    this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1") } });
                }
            }
            else {
                this._alertService.showAlert(this.giveSection);
            }
        }
    }
    goToEmiVerify() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            debugger;
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
            if (this.findCurrSchDetails(basic_info["basic_info"]["school_id"])) {
                let { isLocationVerify, userLat, userLng, schoollatimg, isPhotoVerified } = this.findCurrSchDetails(basic_info["basic_info"]["school_id"]);
                debugger;
                basic_info["basic_info"]["latitude"] = userLat;
                basic_info["basic_info"]["longitude"] = userLng;
                basic_info["basic_info"]["school_photo"] = schoollatimg;
                basic_info["basic_info"]["photo_taken"] = isPhotoVerified;
                basic_info["basic_info"]["location_verified"] = isLocationVerify;
            }
            JsonData.push(basic_info);
            console.log(basic_info, 'basic_info');
            let localSvAPiCall = localStorage.getItem("saveApiCall");
            if (localSvAPiCall == '0') {
                this._apiService.postfinalinfo({ json: JSON.stringify(JsonData) }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    try {
                        if (data.status == 200 && data.dataStatus == true) {
                            let idx = this.ppSchBaseDetails.findIndex(obj => { return obj.school_id == basic_info["basic_info"]["school_id"]; });
                            if (idx != 0) {
                                this.ppSchBaseDetails[idx].schoollatimg = '';
                                this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(() => { });
                            }
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
        });
    }
    findCurrSchDetails(school_id) {
        let idx = this.ppSchBaseDetails.findIndex(obj => { return obj.school_id == school_id; });
        console.log(this.ppSchBaseDetails[idx], this.ppSchBaseDetails);
        return this.ppSchBaseDetails[idx];
    }
    Onnextnavigate(data) {
        this._router.navigate(['/tabs/dynamic-table-list'], { queryParams: { 'formId': 234, param1: this.schoolInfo.schoolId, param2: data.class_id, naviBackUrl: "/tnvntabs/page-route/classroom" }, skipLocationChange: true });
    }
};
ClassroomComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__.Storage }
];
ClassroomComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: "app-classroom",
        template: _raw_loader_classroom_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_classroom_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassroomComponent);



/***/ }),

/***/ 23631:
/*!**********************************************************!*\
  !*** ./src/app/pages/tnvn/classroom/classroom.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassroomModule": function() { return /* binding */ ClassroomModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _classroom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classroom.component */ 33195);
/* harmony import */ var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/shared.module */ 30881);








const routes = [
    {
        path: '',
        component: _classroom_component__WEBPACK_IMPORTED_MODULE_0__.ClassroomComponent
    }
];
let ClassroomModule = class ClassroomModule {
};
ClassroomModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_classroom_component__WEBPACK_IMPORTED_MODULE_0__.ClassroomComponent,
        ],
        entryComponents: []
    })
], ClassroomModule);



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

/***/ 62296:
/*!***************************************************************!*\
  !*** ./src/app/pages/tnvn/classroom/classroom.component.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Class1 {\n  --background: #fff;\n  --color: #353fa1;\n}\n\n.Class2 {\n  --background: #b8bef0;\n  --color: #353fa1;\n}\n\n.Class3 {\n  --background: #5c69f3;\n  --color: #fff;\n}\n\n.Class4 {\n  --background: #ded162;\n}\n\n.Class5 {\n  --background: #e8be68;\n}\n\n.Class6 {\n  --background: #80afe8;\n}\n\n.Class7 {\n  --background: #b180e8;\n}\n\n.Class8 {\n  --background: #73b6d1;\n}\n\n.Class9 {\n  --background: #73d1b2;\n}\n\n.Class10 {\n  --background: #b3c969;\n}\n\n.Class11 {\n  --background: #6972c9;\n}\n\n.Class12 {\n  --background: #c96969;\n}\n\n.classList {\n  margin: 15px auto;\n  border-radius: 15px;\n  border: 1px solid #353fa1;\n  overflow: hidden;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzcm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiY2xhc3Nyb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNsYXNzMSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWNvbG9yOiAjMzUzZmExO1xyXG59XHJcblxyXG4uQ2xhc3MyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2I4YmVmMDtcclxuICAgIC0tY29sb3I6ICMzNTNmYTE7XHJcbn1cclxuXHJcbi5DbGFzczMge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNWM2OWYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLkNsYXNzNCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkZWQxNjI7XHJcbn1cclxuXHJcbi5DbGFzczUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZThiZTY4O1xyXG59XHJcblxyXG4uQ2xhc3M2IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwYWZlODtcclxufVxyXG5cclxuLkNsYXNzNyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNiMTgwZTg7XHJcbn1cclxuXHJcbi5DbGFzczgge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzNiNmQxO1xyXG59XHJcblxyXG4uQ2xhc3M5IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzczZDFiMjtcclxufVxyXG5cclxuLkNsYXNzMTAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYjNjOTY5O1xyXG59XHJcblxyXG4uQ2xhc3MxMSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2OTcyYzk7XHJcbn1cclxuXHJcbi5DbGFzczEyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2M5Njk2OTtcclxufVxyXG5cclxuLmNsYXNzTGlzdCB7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzUzZmExO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */");

/***/ }),

/***/ 735:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/classroom/classroom.component.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n            <b>{{ this.classroom }}<br />{{this.Selection}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <div class=\"content-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <b>\r\n        <p class=\"color-dgrey\"> {{schoolInfo?.schoolName}} </p>\r\n      </b>\r\n    </ion-text>\r\n\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"color-dgrey\" style=\"font-size:20px\"> {{todayObserving}} <br /><b>{{class}} {{randomClass?.class_id}}\r\n          {{selectedSection}} </b></p>\r\n    </ion-text>\r\n\r\n    <ion-list lines=\"none\">\r\n      <p class=\"text-center mb-0\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{classroomObserved}}</p>\r\n      <ion-radio-group [(ngModel)]=\"checkedValue\">\r\n        <div class=\"radio-toggle\">\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"yes\" (click)=\"regularTeacher=true;showDropdown=true;getStudentsData()\">\r\n            </ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{yes}}\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"no\" (click)=\"regularTeacher=false;showDropdown=false\"></ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{no}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"none\">\r\n      <div *ngIf=\"regularTeacher==false\">\r\n        <ion-item style=\"border:1 px solid #000\">\r\n          <ion-label>Select Reason</ion-label>\r\n          <ion-select [(ngModel)]=\"selectedReason\" (ngModelChange)=\"mySelectReason($event)\"\r\n            *ngIf=\"teacherReasons.length\">\r\n            <ion-select-option *ngFor=\"let reason_info of teacherReasons\" [value]=\"reason_info.reason\">{{\r\n              reason_info.reason }}</ion-select-option>\r\n            <ion-select-option [value]=\"'none'\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{ this.noneAbove\r\n              }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <ion-item *ngIf=\"mediumInfoList.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{ this.mediumInstruction }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedMediumIds\" (ngModelChange)=\"mediumSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let mediumData of mediumInfoList\" [value]=\"mediumData.medium_id\">{{\r\n            mediumData.medium_desc }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"subjectList.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{ this.selectSubject }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedSubject\" (ngModelChange)=\"subjectSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let subjectData of subjectList\" [value]=\"subjectData.subject_id\">{{\r\n            subjectData.subject }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"teachersList.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{ this.selectTeacher }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedTeacher\" (ngModelChange)=\"teacherSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let teacherData of teachersList\" [value]=\"teacherData.teacher_id\">{{\r\n            teacherData.teacher_name }} ({{teacherData.teacher_id}})\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"randomClass?.class_id<6&&ObservationOptions.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{observationToday}} </ion-label>\r\n        <ion-select [(ngModel)]=\"checkedAssessments\" (ngModelChange)=\"AssessmentSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let observationData of ObservationOptions\" [value]=\"observationData.name\">{{\r\n            observationData.name }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n      <!-- <div class=\"p-2\" *ngIf=\"this.usertype==39\">\r\n        <h6>Student spot assessment</h6>\r\n       <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let clsItem of schClsList\">\r\n          <ion-button class=\"Class{{clsItem.class_id}} classList\" expand=\"full\" (click)=\"Onnextnavigate(clsItem)\">\r\n            <div>Class {{clsItem.class_id}}</div>\r\n          </ion-button>\r\n        </div>\r\n       </div>\r\n      </div> -->\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" [routerLink]=\"['/tnvntabs/page-route/dashboardc']\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\">{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToStudentAttendance()\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\">{{ this.save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_classroom_classroom_module_ts-es2015.js.map