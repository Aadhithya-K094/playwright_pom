(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_student-profile_student-profile_module_ts"],{

/***/ 21300:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/stc-activity/student-profile/student-profile-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentProfilePageRoutingModule": function() { return /* binding */ StudentProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _student_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-profile.page */ 88212);




const routes = [
    {
        path: '',
        component: _student_profile_page__WEBPACK_IMPORTED_MODULE_0__.StudentProfilePage
    }
];
let StudentProfilePageRoutingModule = class StudentProfilePageRoutingModule {
};
StudentProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentProfilePageRoutingModule);



/***/ }),

/***/ 63599:
/*!******************************************************************************!*\
  !*** ./src/app/pages/stc-activity/student-profile/student-profile.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentProfilePageModule": function() { return /* binding */ StudentProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _student_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-profile-routing.module */ 21300);
/* harmony import */ var _student_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-profile.page */ 88212);







let StudentProfilePageModule = class StudentProfilePageModule {
};
StudentProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_student_profile_page__WEBPACK_IMPORTED_MODULE_1__.StudentProfilePage]
    })
], StudentProfilePageModule);



/***/ }),

/***/ 88212:
/*!****************************************************************************!*\
  !*** ./src/app/pages/stc-activity/student-profile/student-profile.page.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentProfilePage": function() { return /* binding */ StudentProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-profile.page.html */ 34130);
/* harmony import */ var _student_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-profile.page.scss */ 83713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/json.service */ 77232);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);













let StudentProfilePage = class StudentProfilePage {
    constructor(router, fb, ionStorage, alertService, emisService, userSesstion, geolocation, alertController, jsonService, route) {
        this.router = router;
        this.fb = fb;
        this.ionStorage = ionStorage;
        this.alertService = alertService;
        this.emisService = emisService;
        this.userSesstion = userSesstion;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.jsonService = jsonService;
        this.route = route;
        this.arrayList = [
            {
                name: "Vignesh ",
                mobile: "8946066138",
                date: "8946066138"
            },
            {
                name: "Wesly",
                mobile: "8946066138",
                date: "8946066138"
            },
            {
                name: "Vijayakumar",
                mobile: "8946066138",
                date: "8946066138"
            }
        ];
        this.studMigrant = [
            {
                label: "Seasonal",
                value: "1",
            },
            {
                label: "Permanent",
                value: "2",
            }
        ];
        this.centerType = [
            {
                "value": "1",
                "label": "NRSTC"
            },
            {
                "value": "2",
                "label": "RSTC"
            },
            {
                "value": "3",
                "label": "TMK"
            }
        ];
        this.MotherTongue = [];
        this.studState = [];
        this.studentList = [];
        this.MigrateStudList = [];
        this.CenterDetailsList = [];
        this.schoolList = [];
    }
    ngOnInit() {
        this.initialValidator();
        this.getLatLong();
        this.getState();
    }
    initialValidator() {
        this.form = this.fb.group({
            IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            School: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            EmisNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required),
            StudMigrateState: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("1", null),
            StudStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            MotherTongue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            StudState: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            StudentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            ParentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            AadharNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            LastStudyClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            AdmittedClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            StudMedium: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            StudMotherTongue: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            MigrateState: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false, null),
            PermanentState: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            PermanentDistrict: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            PermanentBlock: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            PermanentVillage: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            PermanentStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            PermanentDoor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            PermanentPINCODE: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CurrentState: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CurrentDistrict: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CurrentBlock: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CurrentVillage: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CurrentStreet: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CurrentDoor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CurrentPINCODE: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            CenterType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null),
            StcName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', null)
        });
    }
    ionViewDidEnter() {
        this.getSchoolProfileList();
        this.getCenterDetails();
        this.ionStorage.getData('stateList').then(res => {
            if (res) {
                this.studState = res;
            }
        });
        this.ionStorage.getData('languageList').then(res => {
            if (res) {
                this.MotherTongue = res;
            }
        });
        this.route.queryParams.subscribe((params) => {
            this.Type = params['Type'];
        });
    }
    getSchoolProfileList() {
        this.ionStorage.getData('MigrateStudList').then(res => {
            if (res) {
                this.MigrateStudList = res;
            }
            else {
                this.emisService.MigrateStudList(this.userSesstion.emis_username()).subscribe(res => {
                    if (res.dataStatus) {
                        this.MigrateStudList = res.result;
                        this.ionStorage.removeKey('MigrateStudList').then(res => {
                            this.ionStorage.insertData_Replace('MigrateStudList', this.MigrateStudList);
                        });
                    }
                });
            }
        });
    }
    getCenterDetails() {
        this.ionStorage.getData('CenterDetailsList').then(res => {
            if (res) {
                this.CenterDetailsList = res;
                this.schoolList = [];
                for (let i = 0; i < this.CenterDetailsList.length; i++) {
                    let data = {
                        schoolId: this.CenterDetailsList[i].SchlId,
                        schoolName: this.CenterDetailsList[i].SchlName
                    };
                    this.schoolList.push(data);
                }
                this.studentList = [];
            }
            else {
                this.emisService.EVDetailsStoreGet(this.userSesstion.emis_username(), 2).subscribe(res => {
                    if (res.dataStatus) {
                        this.CenterDetailsList = res.result;
                        this.ionStorage.removeKey('CenterDetailsList').then(res => {
                            this.ionStorage.insertData_Replace('CenterDetailsList', this.CenterDetailsList);
                        });
                        this.schoolList = [];
                        for (let i = 0; i < this.CenterDetailsList.lenght; i++) {
                            let data = {
                                schoolId: this.CenterDetailsList[i].SchlId,
                                schoolName: this.CenterDetailsList[i].SchlName
                            };
                            this.schoolList.push(data);
                        }
                        this.studentList = [];
                    }
                });
            }
        });
    }
    selectSchl(event) {
        this.ionStorage.getData('BrteMappedStudList').then(res => {
            if (res) {
                let responce = res;
                let schoolData = res.filter(dd => dd.schoolId == event);
                if (schoolData.length > 0) {
                    this.studentList = schoolData[0].studentList;
                }
                else {
                    this.emisService.BrteMappedStudList(event).subscribe(res => {
                        if (res.dataStatus) {
                            this.studentList = res.result;
                            let school = {
                                schoolId: event,
                                studentList: res.result
                            };
                            responce.push(school);
                            this.ionStorage.removeKey('BrteMappedStudList').then(res => {
                                this.ionStorage.insertData_Replace('BrteMappedStudList', responce);
                            });
                        }
                        else {
                            this.alertService.error(res.message);
                        }
                    });
                }
                this.form.controls['EmisNumber'].setValue(null);
                this.form.controls['EmisNumber'].updateValueAndValidity();
            }
            else {
                this.emisService.BrteMappedStudList(event).subscribe(res => {
                    if (res.dataStatus) {
                        this.studentList = res.result;
                        this.form.controls['EmisNumber'].setValue(null);
                        this.form.controls['EmisNumber'].updateValueAndValidity();
                        let school = [{
                                schoolId: event,
                                studentList: res.result
                            }];
                        let array = [];
                        array.push(school);
                        this.ionStorage.removeKey('BrteMappedStudList').then(res => {
                            this.ionStorage.insertData_Replace('BrteMappedStudList', school);
                        });
                    }
                    else {
                        this.alertService.error(res.message);
                    }
                });
            }
        });
        // this.jsonService.studentList(event.detail.value).subscribe(res =>{
        //   console.log(res[0].studentlist);
        // })
    }
    selectStud(ev) {
        this.emisNumberValid = false;
        this.ValidStud = false;
    }
    onSave(id) {
        var _a, _b, _c;
        if (this.form.valid) {
            this.submitted = false;
            if (id == 1) {
                let studData = this.studentList.filter(dd => dd.user_id == this.form.value.EmisNumber);
                if (studData.length > 0) {
                    this.emisNumberValid = true;
                    this.SchlId = (_a = studData[0]) === null || _a === void 0 ? void 0 : _a.school_id;
                    this.form.patchValue({
                        StudentName: studData[0].StudName,
                        ParentName: studData[0].mother_name + "," + studData[0].father_name,
                        AadharNumber: studData[0].aadhaar_uid_number,
                        LastStudyClass: studData[0].LastStudiedClass,
                        AdmittedClass: studData[0].AdmittedClass,
                        StudMedium: studData[0].EducationMediumId,
                        StudMotherTongue: studData[0].MotherToungeName,
                        CurrentState: studData[0].CurrentState,
                        CurrentDistrict: studData[0].district_name,
                        CurrentBlock: studData[0].block_name,
                        CurrentVillage: studData[0].area_village,
                        CurrentStreet: studData[0].street_name,
                        CurrentDoor: studData[0].house_address,
                        CurrentPINCODE: studData[0].pin_code,
                        StcName: studData[0].CenterName
                    });
                }
                else {
                    this.alertService.error('Student not matched');
                    this.form.controls['EmisNumber'].setValue(null);
                    this.form.controls['EmisNumber'].updateValueAndValidity();
                }
                // this.emisService.BrteMappedStudentList(this.form.value.EmisNumber, this.userSesstion.emis_username()).subscribe(res =>{
                //   if(res.dataStatus){
                //     this.emisNumberValid = true;
                //     this.studentList = res.result;
                //     this.SchlId = this.studentList[0]?.school_id;
                //     this.form.patchValue({
                //       StudentName: res.result[0].StudName,
                //       ParentName: res.result[0].mother_name +","+ res.result[0].father_name,
                //       AadharNumber: res.result[0].aadhaar_uid_number,
                //       LastStudyClass: res.result[0].LastStudiedClass,
                //       AdmittedClass: res.result[0].AdmittedClass,
                //       StudMedium: res.result[0].EducationMediumId,
                //       StudMotherTongue: res.result[0].MotherToungeName,
                //       CurrentState: res.result[0].CurrentState,
                //       CurrentDistrict: res.result[0].district_name,
                //       CurrentBlock: res.result[0].block_name,
                //       CurrentVillage: res.result[0].area_village,
                //       CurrentStreet: res.result[0].street_name,
                //       CurrentDoor: res.result[0].house_address,
                //       CurrentPINCODE: res.result[0].pin_code,
                //       StcName: res.result[0].CenterName
                //     })
                //   }else{
                //     this.alertService.error(res.message);
                //     this.form.controls['EmisNumber'].setValue(null);
                //     this.form.controls['EmisNumber'].updateValueAndValidity();
                //   }
                // })
            }
            if (id == 2) {
                this.emisNumberValid = true;
                if (this.form.value.StudMigrateState == 1) {
                    this.ValidStud = true;
                    this.form.controls['PermanentState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['PermanentDistrict'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['PermanentBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['PermanentVillage'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['PermanentStreet'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['PermanentDoor'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['PermanentPINCODE'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['CenterType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                    this.form.controls['PermanentState'].updateValueAndValidity();
                    this.form.controls['PermanentDistrict'].updateValueAndValidity();
                    this.form.controls['PermanentBlock'].updateValueAndValidity();
                    this.form.controls['PermanentVillage'].updateValueAndValidity();
                    this.form.controls['PermanentStreet'].updateValueAndValidity();
                    this.form.controls['PermanentDoor'].updateValueAndValidity();
                    this.form.controls['PermanentPINCODE'].updateValueAndValidity();
                    this.form.controls['CenterType'].updateValueAndValidity();
                }
                else {
                    let data = {
                        "records": {
                            "user_id": this.form.value.EmisNumber,
                            "migrant_yn": this.form.value.StudMigrateState,
                            "migrant": "",
                            "state": "",
                        }
                    };
                    this.emisService.StudentMigrantUpdate(data).subscribe(res => {
                        if (res.dataStatus) {
                            this.initialValidator();
                            this.submitted = false;
                            this.emisNumberValid = false;
                            this.ValidStud = false;
                            this.addProfile = false;
                            this.emisService.MigrateStudList(this.userSesstion.emis_username()).subscribe(res => {
                                if (res.dataStatus) {
                                    this.MigrateStudList = res.result;
                                    this.ionStorage.removeKey('MigrateStudList').then(res => {
                                        this.ionStorage.insertData_Replace('MigrateStudList', this.MigrateStudList);
                                    });
                                }
                                else {
                                    this.MigrateStudList = [];
                                    this.ionStorage.removeKey('MigrateStudList').then(res => {
                                        this.ionStorage.insertData_Replace('MigrateStudList', this.MigrateStudList);
                                    });
                                }
                            });
                            this.alertService.success(res.message);
                        }
                    });
                }
            }
            if (id == 3) {
                if (this.form.valid) {
                    this.submitted = false;
                    let data = {
                        "records": {
                            "IndxId": this.form.value.IndxId,
                            "StudId": this.form.value.EmisNumber,
                            "SchlId": this.SchlId,
                            "DoorNo": this.form.value.PermanentDoor,
                            "StreetName": this.form.value.PermanentStreet,
                            "Village": this.form.value.PermanentVillage,
                            "BlockId": this.form.value.PermanentBlock,
                            "DistId": this.form.value.PermanentDistrict,
                            "State": this.form.value.PermanentState,
                            "PinCode": this.form.value.PermanentPINCODE,
                            "CenterType": this.form.value.CenterType,
                            "MotherTongue": this.form.value.MotherTongue,
                            "Latitude": (_b = this.locationCordinates) === null || _b === void 0 ? void 0 : _b.latitude,
                            "Longitude": (_c = this.locationCordinates) === null || _c === void 0 ? void 0 : _c.longitude,
                        }
                    };
                    this.emisService.StudentMigrantSave(data).subscribe(res => {
                        if (res.dataStatus) {
                            this.StudMigrateState(res.message);
                        }
                        else {
                            this.alertService.error(res.message);
                        }
                    });
                }
                else {
                    this.submitted = true;
                    this.alertService.error("Please enter valid data");
                }
            }
        }
        else {
            this.submitted = true;
            if (id == 1) {
                this.emisNumberValid = false;
                this.ValidStud = false;
            }
            if (id == 2) {
                this.ValidStud = false;
            }
        }
    }
    StudMigrateState(message) {
        if (this.form.value.StudMigrateState == 1) {
            let data = {
                "records": {
                    "user_id": this.form.value.EmisNumber,
                    "migrant_yn": this.form.value.StudMigrateState,
                    "migrant": this.form.value.StudStatus,
                    "state": this.form.value.StudState,
                }
            };
            this.emisService.StudentMigrantUpdate(data).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success(message);
                    this.initialValidator();
                    this.submitted = false;
                    this.emisNumberValid = false;
                    this.ValidStud = false;
                    this.addProfile = false;
                    this.emisService.MigrateStudList(this.userSesstion.emis_username()).subscribe(res => {
                        if (res.dataStatus) {
                            this.MigrateStudList = res.result;
                            this.ionStorage.removeKey('MigrateStudList').then(res => {
                                this.ionStorage.insertData_Replace('MigrateStudList', this.MigrateStudList);
                            });
                        }
                    });
                }
                else {
                    this.alertService.error(res.message);
                }
            });
        }
    }
    onEdit(data) {
        // console.log(data);
        this.addProfile = true;
        this.emisNumberValid = true;
        // this.ValidStud = true;
        this.SchlId = data.SchlId;
        this.form.patchValue({
            IndxId: data.IndxId,
            EmisNumber: data.StudId,
            School: data.SchlId,
            StudMigrateState: data.MigrantYn,
            StudStatus: data.Migrant,
            StudState: +data.MigrantState,
            CenterType: data.CenterType,
            StcName: data.StcName,
            MotherTongue: +data.MotherTounge,
            StudentName: data.StudName,
            ParentName: data.MotherName + "," + data.FatherName,
            AadharNumber: data.StudAadharNo,
            LastStudyClass: data.LastStudyClass,
            AdmittedClass: data.AdmittedClass,
            StudMedium: data.MediumName,
            StudMotherTongue: data.MotherToungeName,
            CurrentState: data.CurrentState,
            CurrentDistrict: data.CurrentDistId,
            CurrentBlock: data.CurrentBlockId,
            CurrentVillage: data.CurrentAreaVillage,
            CurrentStreet: data.CurrentStreetName,
            CurrentDoor: data.CurrentHousrAddress,
            CurrentPINCODE: data.CurrentPincode,
            PermanentState: +data.InsertState,
            PermanentDistrict: data.Dist,
            PermanentBlock: data.Block,
            PermanentVillage: data.Village,
            PermanentStreet: data.StreetName,
            PermanentDoor: data.DoorNo,
            PermanentPINCODE: data.PinCode,
        });
        this.form.controls['School'].setValidators(null);
        this.form.controls['School'].updateValueAndValidity();
        if (data.MigrantYn == 1) {
            this.ValidStud = true;
            this.form.controls['PermanentState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['PermanentDistrict'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['PermanentBlock'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['PermanentVillage'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['PermanentStreet'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['PermanentDoor'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['PermanentPINCODE'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['CenterType'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
            this.form.controls['PermanentState'].updateValueAndValidity();
            this.form.controls['PermanentDistrict'].updateValueAndValidity();
            this.form.controls['PermanentBlock'].updateValueAndValidity();
            this.form.controls['PermanentVillage'].updateValueAndValidity();
            this.form.controls['PermanentStreet'].updateValueAndValidity();
            this.form.controls['PermanentDoor'].updateValueAndValidity();
            this.form.controls['PermanentPINCODE'].updateValueAndValidity();
            this.form.controls['CenterType'].updateValueAndValidity();
        }
    }
    getState() {
        this.ionStorage.getData('stateList').then(res => {
            this.stateList = res;
        });
    }
    getDistrict() {
        this.ionStorage.getData('districtList').then(res => {
            this.districtList = res;
        });
    }
    getBlock(data) {
        this.form.controls['PermanentBlock'].setValue(null);
        this.form.controls['PermanentBlock'].updateValueAndValidity();
        this.ionStorage.getData('blockList').then(res => {
            this.blockList = res.filter(dd => dd.District_id == this.form.value.PermanentDistrict);
        });
    }
    onRadioEvent(id) {
        if (id == 1) {
            if (this.form.value.StudMigrateState == 1) {
                this.form.controls['StudMigrateState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.form.controls['StudStatus'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.form.controls['MotherTongue'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                this.form.controls['StudState'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
                // this.ValidStud = true;
            }
            else {
                this.form.controls['StudMigrateState'].setValidators(null);
                this.form.controls['StudStatus'].setValidators(null);
                this.form.controls['MotherTongue'].setValidators(null);
                this.form.controls['StudState'].setValidators(null);
                this.ValidStud = false;
            }
            this.form.controls['StudMigrateState'].updateValueAndValidity();
            this.form.controls['StudStatus'].updateValueAndValidity();
            this.form.controls['MotherTongue'].updateValueAndValidity();
            this.form.controls['StudState'].updateValueAndValidity();
        }
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.locationCordinates = resp.coords;
            this.locationCordinates.latitude;
            this.locationCordinates.longitude;
        }).catch((error) => {
            if (error.message === 'Illegal Access') {
                this.alertService.alertToTurnOnPermission('Location', 'Location');
            }
            // console.log('Error getting location', error);
        });
    }
    navigateBack() {
        if (this.addProfile) {
            this.addProfile = false;
            this.initialValidator();
            this.emisNumberValid = false;
            this.ValidStud = false;
            this.submitted = false;
        }
        else {
            this.router.navigate(['/tabs/stc-activity'], { queryParams: { Type: this.Type } });
        }
    }
    ionViewDidLeave() {
        this.submitted = false;
        this.initialValidator();
        this.emisNumberValid = false;
        this.ValidStud = false;
        this.addProfile = false;
    }
    addStudentProfile() {
        if (this.CenterDetailsList.length > 0) {
            this.addProfile = true;
            this.initialValidator();
            this.getCenterDetails();
        }
        else {
            this.presentAlertConfirmExit("Please add minimum one center profile before you want to map the EV profile to the designated center");
        }
    }
    presentAlertConfirmExit(subheader) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: subheader,
                cssClass: 'versionAlert',
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                        }
                    }
                ],
                backdropDismiss: false,
            });
            yield alert.present();
        });
    }
    ionViewWillLeave() {
        this.MigrateStudList = [];
        this.schoolList = [];
        this.studentList = [];
    }
};
StudentProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_6__.JsonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute }
];
StudentProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-student-profile',
        template: _raw_loader_student_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentProfilePage);



/***/ }),

/***/ 83713:
/*!******************************************************************************!*\
  !*** ./src/app/pages/stc-activity/student-profile/student-profile.page.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerCss {\n  margin: auto 10px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.nameCss {\n  font-size: 18px;\n  font-weight: bolder;\n  color: #8B67B3;\n}\n\n.numberCss {\n  font-size: 16px;\n  color: #8B67B3;\n}\n\n.iconCss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid;\n  padding: 0px;\n  background: #8B67B3;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.iconCss ion-icon {\n  font-size: 26px;\n  color: white;\n}\n\n.syncServer {\n  width: 70%;\n  margin: 10px auto;\n  padding: 15px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n\n.question {\n  margin: 5px 10px;\n}\n\n.ques-head {\n  margin: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #8B67B3;\n}\n\n.quesInput {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px !important;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n\n.syncServer2 {\n  width: 50%;\n  margin: 10px auto;\n  padding: 10px 15px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBR1I7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzdHVkZW50LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckNzc3tcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5uYW1lQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ubnVtYmVyQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5pY29uQ3Nze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3luY1NlcnZlcntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzhCNjdCMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5xdWVzdGlvbntcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5xdWVzLWhlYWR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ucXVlc0lucHV0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51cGxvYWRJbWFnZXtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggNHB4ICM5OGE2ZDkxYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcblxyXG4gIC5jbG9zZWJ0bntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN5bmNTZXJ2ZXIye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM4QjY3QjM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ 34130:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/student-profile/student-profile.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{Type == 1 ? 'Student Profile' : 'Student Details'}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addProfile\">\r\n  <ion-row style=\"margin: 10px auto;\">\r\n    <ion-col size=\"12\" *ngFor=\"let item of MigrateStudList\">\r\n      <ion-row class=\"headerCss\">\r\n        <ion-col size=\"10\" style=\"padding: 10px;\">\r\n          <div class=\"nameCss\">{{item.StudName}}</div>\r\n          <ion-text class=\"numberCss\">{{item.StcName}}</ion-text>\r\n          <!-- <ion-text class=\"numberCss\" style=\"padding: 0px 5px; border-left: 1px solid; margin: auto 5px;\">{{item.StudPhoneNo}}</ion-text> -->\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCss\" (click)=\"onEdit(item)\">\r\n          <ion-icon name=\"create-outline\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col *ngIf=\"MigrateStudList.length == 0\" style=\"text-align: center;\">\r\n      <p >No data found</p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- <ion-row (click)=\"addStudentProfile()\" class=\"syncServer\">\r\n    <ion-col size=\"2\" class=\"add iconCss\">\r\n        <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"10\" class=\"add\">\r\n      <ion-label style=\"font-size: 18px;\"> Add Student Profile </ion-label>\r\n    </ion-col>\r\n  </ion-row> -->\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"addStudentProfile()\" style=\"margin: 10px auto; --background: #8B67B3\">\r\n      <ion-icon name=\"add\" size=\"large\" style=\"color: #fff;\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-col >\r\n      <ion-label class=\"bold\"> Student Profile </ion-label>\r\n    </ion-col>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addProfile\">\r\n  <form [formGroup]=\"form\">\r\n\r\n    <div class=\"question\" *ngIf=\"!form.value.IndxId\">\r\n      <ion-row class=\"ques-head\"> Select school </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select (ionChange)=\"selectSchl($event.detail.value)\" formControlName=\"School\" class=\"quesInput font-12\" placeholder=\"Select center\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of schoolList\" [value]=\"option.schoolId\">{{option.schoolName}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.School.errors && (submitted || form.controls.School.dirty || form.controls.School.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.School.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"!form.value.IndxId && form.value.School\" >\r\n      <ion-row class=\"ques-head\"> Emis Number </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select disabled=\"{{form.value.IndxId ?  true : false}}\" class=\"quesInput font-12\" (ionChange)=\"selectStud($event)\" formControlName=\"EmisNumber\" placeholder=\"Select center\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of studentList\" [value]=\"option.user_id\">{{option.StudName}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisNumber.errors && (submitted || form.controls.EmisNumber.dirty || form.controls.EmisNumber.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisNumber.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <!-- <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('minlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 8 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('maxlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 10 digits.\r\n          </div> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.IndxId\" >\r\n      <ion-row class=\"ques-head\"> Emis Number </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"tel\" minlength=\"8\" maxlength=\"10\" formControlName=\"EmisNumber\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.6;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EmisNumber.errors && (submitted || form.controls.EmisNumber.dirty || form.controls.EmisNumber.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EmisNumber.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('minlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 8 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EmisNumber').hasError('maxlength') && form.controls.EmisNumber.touched\">\r\n            Emis Number must be at least 10 digits.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div *ngIf=\"emisNumberValid\">\r\n      <div class=\"question\"  >\r\n        <ion-row class=\"ques-head\"> Is the student migrated from the other state? </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <ion-radio-group formControlName=\"StudMigrateState\" (ionChange)=\"onRadioEvent(1)\">\r\n              <ion-item class=\"quesInput\" lines=\"none\" style=\"--background:none\">\r\n                <ion-radio class=\"radio-butn\" value=\"1\"></ion-radio>\r\n                  <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\">  Yes </span>\r\n                <ion-radio class=\"radio-butn\" value=\"2\"></ion-radio>\r\n                  <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\"> No </span>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.StudMigrateState.errors && (submitted || form.controls.StudMigrateState.dirty || form.controls.StudMigrateState.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.StudMigrateState.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" *ngIf=\"form.value.StudMigrateState == 1\">\r\n        <ion-row class=\"ques-head\"> Is the student seasonal / permanent migrant ? </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-select class=\"quesInput font-12\" placeholder=\"Select migrant\" formControlName=\"StudStatus\" style=\"padding: 15px; height: 59px;\">\r\n                <ion-select-option *ngFor=\"let option of studMigrant\" [value]=\"option.value\">{{option.label}}</ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.StudStatus.errors && (submitted || form.controls.StudStatus.dirty || form.controls.StudStatus.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.StudStatus.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" *ngIf=\"form.value.StudMigrateState == 1\" >\r\n        <ion-row class=\"ques-head\"> Mother Tongue </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-select class=\"quesInput font-12\" placeholder=\"Select Tongue\" formControlName=\"MotherTongue\" style=\"padding: 15px; height: 59px;\">\r\n                <ion-select-option *ngFor=\"let option of MotherTongue\" [value]=\"option.ID\">{{option.MEDINSTR_DESC}}</ion-select-option>\r\n              </ion-select>\r\n              <!-- <ion-input type=\"text\" formControlName=\"MotherTongue\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input> -->\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.MotherTongue.errors && (submitted || form.controls.MotherTongue.dirty || form.controls.MotherTongue.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.MotherTongue.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div class=\"question\" *ngIf=\"form.value.StudMigrateState == 1\" >\r\n        <ion-row class=\"ques-head\"> Student State </ion-row>\r\n        <ion-row class=\"middle-text\">\r\n          <ion-col size=\"12\">\r\n            <div mode=\"md\" fill=\"outline\">\r\n              <ion-select class=\"quesInput font-12\" placeholder=\"Select state\" formControlName=\"StudState\" style=\"padding: 15px; height: 59px;\">\r\n                <ion-select-option *ngFor=\"let option of studState\" [value]=\"option.id\">{{option.state_name}}</ion-select-option>\r\n              </ion-select>\r\n              <!-- <ion-input type=\"text\" formControlName=\"StudState\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input> -->\r\n            </div>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.StudState.errors && (submitted || form.controls.StudState.dirty || form.controls.StudState.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.StudState.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <div *ngIf=\"ValidStud\">\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Student Name </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-textarea disabled=\"true\" type=\"text\" formControlName=\"StudentName\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-textarea>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.StudentName.errors && (submitted || form.controls.StudentName.dirty || form.controls.StudentName.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.StudentName.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Father / Mother Name </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"ParentName\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.ParentName.errors && (submitted || form.controls.ParentName.dirty || form.controls.ParentName.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.ParentName.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Aadhar Number </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"AadharNumber\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.AadharNumber.errors && (submitted || form.controls.AadharNumber.dirty || form.controls.AadharNumber.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.AadharNumber.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Last Studied Class </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"LastStudyClass\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.LastStudyClass.errors && (submitted || form.controls.LastStudyClass.dirty || form.controls.LastStudyClass.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.LastStudyClass.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Admitted Class (Age appropriate) </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"AdmittedClass\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.AdmittedClass.errors && (submitted || form.controls.AdmittedClass.dirty || form.controls.AdmittedClass.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.AdmittedClass.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Student Studying Medium </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <!-- <ion-select disabled=\"true\" class=\"quesInput font-12\" placeholder=\"Select district\" formControlName=\"StudMedium\" style=\"padding: 15px; height: 59px;\">\r\n                  <ion-select-option *ngFor=\"let option of arrayList\" [value]=\"option.value\">{{option.name}}</ion-select-option>\r\n                </ion-select> -->\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"StudMedium\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.StudMedium.errors && (submitted || form.controls.StudMedium.dirty || form.controls.StudMedium.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.StudMedium.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Student Mother Tongue </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <!-- <ion-select disabled=\"true\" class=\"quesInput font-12\" placeholder=\"Select district\" formControlName=\"StudMotherTongue\" style=\"padding: 15px; height: 59px;\">\r\n                  <ion-select-option *ngFor=\"let option of arrayList\" [value]=\"option.value\">{{option.name}}</ion-select-option>\r\n                </ion-select> -->\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"StudMotherTongue\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.StudMotherTongue.errors && (submitted || form.controls.StudMotherTongue.dirty || form.controls.StudMotherTongue.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.StudMotherTongue.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <!-- <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Migrate from other state </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"MigrateState\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.MigrateState.errors && (submitted || form.controls.MigrateState.dirty || form.controls.MigrateState.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.MigrateState.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div> -->\r\n\r\n        <div style=\"margin: 10px 20px; font-size: 20px; font-weight: bolder;\">Current Address</div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> State </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"CurrentState\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CurrentState.errors && (submitted || form.controls.CurrentState.dirty || form.controls.CurrentState.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CurrentState.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> District </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"CurrentDistrict\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CurrentDistrict.errors && (submitted || form.controls.CurrentDistrict.dirty || form.controls.CurrentDistrict.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CurrentDistrict.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Block </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"CurrentBlock\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CurrentBlock.errors && (submitted || form.controls.CurrentBlock.dirty || form.controls.CurrentBlock.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CurrentBlock.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Village </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"CurrentVillage\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CurrentVillage.errors && (submitted || form.controls.CurrentVillage.dirty || form.controls.CurrentVillage.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CurrentVillage.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Street Name </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"CurrentStreet\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CurrentStreet.errors && (submitted || form.controls.CurrentStreet.dirty || form.controls.CurrentStreet.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CurrentStreet.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Door No. </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"CurrentDoor\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CurrentDoor.errors && (submitted || form.controls.CurrentDoor.dirty || form.controls.CurrentDoor.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CurrentDoor.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> PINCODE </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"CurrentPINCODE\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CurrentPINCODE.errors && (submitted || form.controls.CurrentPINCODE.dirty || form.controls.CurrentPINCODE.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CurrentPINCODE.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div style=\"margin: 10px 20px; font-size: 20px; font-weight: bolder;\">Permanent Address as per Aadhar</div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> State </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-select class=\"quesInput font-12\" placeholder=\"Select state\" formControlName=\"PermanentState\" style=\"padding: 15px; height: 59px;\">\r\n                  <ion-select-option *ngFor=\"let option of stateList\" [value]=\"option.id\">{{option.state_name}}</ion-select-option>\r\n                </ion-select>\r\n                <!-- <ion-input type=\"text\" formControlName=\"PermanentState\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input> -->\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.PermanentState.errors && (submitted || form.controls.PermanentState.dirty || form.controls.PermanentState.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.PermanentState.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> District </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <!-- <ion-select (ionChange)=\"getBlock($event)\" class=\"quesInput font-12\" placeholder=\"Select district\" formControlName=\"PermanentDistrict\" style=\"padding: 15px; height: 59px;\">\r\n                  <ion-select-option *ngFor=\"let option of districtList\" [value]=\"option.district_id\">{{option.district_name}}</ion-select-option>\r\n                </ion-select> -->\r\n                <ion-input type=\"text\" formControlName=\"PermanentDistrict\" placeholder=\"Please enter district\" class=\"quesInput\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.PermanentDistrict.errors && (submitted || form.controls.PermanentDistrict.dirty || form.controls.PermanentDistrict.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.PermanentDistrict.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Block </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <!-- <ion-select class=\"quesInput font-12\" placeholder=\"Select block\" formControlName=\"PermanentBlock\" style=\"padding: 15px; height: 59px;\">\r\n                  <ion-select-option *ngFor=\"let option of blockList\" [value]=\"option.Block_id\">{{option.block_name}}</ion-select-option>\r\n                </ion-select> -->\r\n                <ion-input type=\"text\" formControlName=\"PermanentBlock\" placeholder=\"Please enter block\" class=\"quesInput\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.PermanentBlock.errors && (submitted || form.controls.PermanentBlock.dirty || form.controls.PermanentBlock.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.PermanentBlock.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Village </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input type=\"text\" formControlName=\"PermanentVillage\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.PermanentVillage.errors && (submitted || form.controls.PermanentVillage.dirty || form.controls.PermanentVillage.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.PermanentVillage.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Street Name </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input type=\"text\" formControlName=\"PermanentStreet\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.PermanentStreet.errors && (submitted || form.controls.PermanentStreet.dirty || form.controls.PermanentStreet.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.PermanentStreet.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Door No. </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input type=\"text\" formControlName=\"PermanentDoor\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.PermanentDoor.errors && (submitted || form.controls.PermanentDoor.dirty || form.controls.PermanentDoor.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.PermanentDoor.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> PINCODE </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input type=\"tel\" minlength=\"6\" maxlength=\"6\" formControlName=\"PermanentPINCODE\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.PermanentPINCODE.errors && (submitted || form.controls.PermanentPINCODE.dirty || form.controls.PermanentPINCODE.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.PermanentPINCODE.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> Select the Center </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-select class=\"quesInput font-12\" placeholder=\"Select center\" formControlName=\"CenterType\" style=\"padding: 15px; height: 59px;\">\r\n                  <ion-select-option *ngFor=\"let option of centerType\" [value]=\"option.value\">{{option.label}}</ion-select-option>\r\n                </ion-select>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.CenterType.errors && (submitted || form.controls.CenterType.dirty || form.controls.CenterType.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.CenterType.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <div class=\"question\"  >\r\n          <ion-row class=\"ques-head\"> STC Name </ion-row>\r\n          <ion-row class=\"middle-text\">\r\n            <ion-col size=\"12\">\r\n              <div mode=\"md\" fill=\"outline\">\r\n                <ion-input disabled=\"true\" type=\"text\" formControlName=\"StcName\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n              </div>\r\n              <div class=\"valid-error\" *ngIf=\"submitted && form.controls.StcName.errors && (submitted || form.controls.StcName.dirty || form.controls.StcName.touched)\" text-wrap>\r\n                <span *ngIf=\"form.controls.StcName.errors?.required\">Field is Required</span>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <ion-row class=\"syncServer2\" (click)=\" !emisNumberValid && !ValidStud ? onSave(1) : emisNumberValid && !ValidStud ? onSave(2) : onSave(3)\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Submit </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stc-activity_student-profile_student-profile_module_ts-es2015.js.map