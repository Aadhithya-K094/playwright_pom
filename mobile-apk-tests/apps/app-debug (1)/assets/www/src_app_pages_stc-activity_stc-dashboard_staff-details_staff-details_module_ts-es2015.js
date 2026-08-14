(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_stc-dashboard_staff-details_staff-details_module_ts"],{

/***/ 198:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/staff-details/staff-details-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDetailsPageRoutingModule": function() { return /* binding */ StaffDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _staff_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-details.page */ 95212);




const routes = [
    {
        path: '',
        component: _staff_details_page__WEBPACK_IMPORTED_MODULE_0__.StaffDetailsPage
    }
];
let StaffDetailsPageRoutingModule = class StaffDetailsPageRoutingModule {
};
StaffDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StaffDetailsPageRoutingModule);



/***/ }),

/***/ 44459:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/staff-details/staff-details.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDetailsPageModule": function() { return /* binding */ StaffDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _staff_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-details-routing.module */ 198);
/* harmony import */ var _staff_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-details.page */ 95212);







let StaffDetailsPageModule = class StaffDetailsPageModule {
};
StaffDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _staff_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffDetailsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_staff_details_page__WEBPACK_IMPORTED_MODULE_1__.StaffDetailsPage]
    })
], StaffDetailsPageModule);



/***/ }),

/***/ 95212:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/staff-details/staff-details.page.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDetailsPage": function() { return /* binding */ StaffDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_staff_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./staff-details.page.html */ 93467);
/* harmony import */ var _staff_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-details.page.scss */ 83289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);












let StaffDetailsPage = class StaffDetailsPage {
    constructor(router, fb, emisService, alertService, ionStorage, el, userSesstion, alertController, route, geolocation) {
        this.router = router;
        this.fb = fb;
        this.emisService = emisService;
        this.alertService = alertService;
        this.ionStorage = ionStorage;
        this.el = el;
        this.userSesstion = userSesstion;
        this.alertController = alertController;
        this.route = route;
        this.geolocation = geolocation;
        this.qualifiList = [
            {
                id: "1",
                name: "XII"
            },
            {
                id: "2",
                name: "BSC"
            },
            {
                id: "3",
                name: "MSC"
            }
        ];
        this.districtList = [];
        this.blockList = [];
        this.schoolList = [];
        this.EVDetailsList = [];
        this.CenterDetailsList = [];
        this.staffList = [];
    }
    ngOnInit() {
        this.getLatLong();
        this.initialValidator();
    }
    initialValidator() {
        this.form = this.fb.group({
            IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            EvStaff: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            EvName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, this.capitalLettersOnlyValidator()]],
            EvPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            EvQualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
            EvLanguage: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', null),
        });
    }
    capitalLettersOnlyValidator() {
        return (control) => {
            const inputValue = control.value;
            if (inputValue && inputValue !== inputValue.toUpperCase()) {
                return { lowercase: true };
            }
            return null;
        };
    }
    forceUppercaseConditionally(formControlName, event) {
        debugger;
        this.form.get(formControlName).setValue(event.target.value.toUpperCase());
    }
    ionViewDidEnter() {
        // this.getDistrict();
        this.getEvDetailsStore();
        this.ionStorage.getData('languageList').then(res => {
            if (res) {
                this.MotherTongue = res;
            }
        });
        this.getCenterDetails();
        this.route.queryParams.subscribe((params) => {
            this.Type = params['Type'];
            if (this.Type == 1) {
                this.staffList = [
                    {
                        id: 1,
                        name: "EV"
                    }
                ];
            }
            else {
                this.staffList = [
                    {
                        id: 1,
                        name: "EV"
                    },
                    {
                        id: 2,
                        name: "Head Cook"
                    },
                    {
                        id: 3,
                        name: "Assistant Cook"
                    },
                    {
                        id: 4,
                        name: "Watch Man"
                    }
                ];
            }
        });
    }
    getEvDetailsStore() {
        this.ionStorage.getData('EVDetailsList').then(res => {
            if (res) {
                let type = this.Type == 1 ? 'NRSTC' : 'RSTC';
                this.EVDetailsList = res.filter(dd => dd.Type == type);
                if (this.EVDetailsList.length == 0) {
                    this.emisService.EVDetailsStoreGet(this.userSesstion.emis_username(), this.Type).subscribe(res => {
                        if (res.dataStatus) {
                            this.EVDetailsList = res.result;
                            this.ionStorage.removeKey('EVDetailsList').then(res => {
                                this.ionStorage.insertData_Replace('EVDetailsList', this.EVDetailsList);
                            });
                        }
                    });
                }
            }
            else {
                this.emisService.EVDetailsStoreGet(this.userSesstion.emis_username(), this.Type).subscribe(res => {
                    if (res.dataStatus) {
                        this.EVDetailsList = res.result;
                        this.ionStorage.removeKey('EVDetailsList').then(res => {
                            this.ionStorage.insertData_Replace('EVDetailsList', this.EVDetailsList);
                        });
                    }
                });
            }
        });
    }
    getCenterDetails() {
        this.ionStorage.getData('CenterDetailsList').then(res => {
            if (res) {
                this.CenterDetailsList = res.filter(dd => dd.Type == this.Type);
                if (this.CenterDetailsList.length == 0) {
                    this.emisService.StcCenterDetailsGet(this.userSesstion.emis_username(), this.Type).subscribe(res => {
                        if (res.dataStatus) {
                            this.CenterDetailsList = res.result;
                            this.ionStorage.removeKey('CenterDetailsList').then(res => {
                                this.ionStorage.insertData_Replace('CenterDetailsList', this.CenterDetailsList);
                            });
                        }
                    });
                }
            }
            else {
                this.emisService.StcCenterDetailsGet(this.userSesstion.emis_username(), this.Type).subscribe(res => {
                    if (res.dataStatus) {
                        this.CenterDetailsList = res.result;
                        this.ionStorage.removeKey('CenterDetailsList').then(res => {
                            this.ionStorage.insertData_Replace('CenterDetailsList', this.CenterDetailsList);
                        });
                    }
                });
            }
        });
    }
    onSave() {
        if (this.form.valid) {
            this.submitted = false;
            let data = {
                "records": {
                    "IndxId": this.form.value.IndxId,
                    "UserId": this.userSesstion.emis_username(),
                    "EvName": this.form.value.EvName,
                    "EvPhoneNumber": this.form.value.EvPhoneNumber,
                    "EvQualification": this.form.value.EvQualification,
                    "EvStaff": this.form.value.EvStaff,
                    "EvLanguage": this.form.value.EvLanguage ? this.form.value.EvLanguage.toString() : '',
                    "Type": this.Type
                }
            };
            this.emisService.EVDetailsStore(data).subscribe(res => {
                if (res.dataStatus) {
                    this.addProfile = false;
                    this.initialValidator();
                    this.updateEVList();
                    this.alertService.success(res.message);
                }
                else {
                    this.alertService.error(res.message);
                }
            });
        }
        else {
            this.submitted = true;
            this.focusValidator();
        }
    }
    updateEVList() {
        this.emisService.EVDetailsStoreGet(this.userSesstion.emis_username(), this.Type).subscribe(res => {
            if (res.dataStatus) {
                this.EVDetailsList = res.result;
                this.ionStorage.removeKey('EVDetailsList').then(res => {
                    this.ionStorage.insertData_Replace('EVDetailsList', this.EVDetailsList);
                });
            }
        });
    }
    focusValidator() {
        const invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
        invalidControl.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        // invalidControl.scrollTo(50, 0);
        invalidControl.focus();
    }
    scrollToTop() {
        this.content.scrollToTop();
    }
    navigateBack() {
        if (this.addProfile) {
            this.addProfile = false;
        }
        else {
            this.router.navigate(['/tabs/stc-activity'], { queryParams: { Type: this.Type } });
        }
    }
    addEvProfile() {
        if (this.CenterDetailsList.length > 0) {
            this.addProfile = true;
            this.initialValidator();
        }
        else {
            this.presentAlertConfirmExit("Please add minimum one center profile before you want to map the staff profile to the designated center");
        }
    }
    onEdit(data) {
        // debugger
        // console.log("data",data);
        this.addProfile = true;
        this.form.patchValue({
            IndxId: data.IndxId,
            EvName: data.EvName,
            EvPhoneNumber: data.EvPhoneNumber,
            EvQualification: data.EvQualification,
            EvStaff: parseInt(data.EvStaff),
        });
        // if(this.Type == 1){
        //   this.form.controls['EvLanguage'].setValue(+data.EvLanguage);
        //   this.form.controls['EvLanguage'].updateValueAndValidity();
        // }else{
        //   const strArray = data.EvLanguage.split(",");
        //   const intArray = strArray.map(Number);
        //   this.form.controls['EvLanguage'].setValue(intArray);
        //   this.form.controls['EvLanguage'].updateValueAndValidity();
        // }
        const strArray = data.EvLanguage.split(",");
        const intArray = strArray.map(Number);
        this.form.controls['EvLanguage'].setValue(intArray);
        this.form.controls['EvLanguage'].updateValueAndValidity();
    }
    handleRefresh(event) {
        setTimeout(() => {
            // Any calls to load data go here
            event.target.complete();
        }, 2000);
    }
    ionViewDidLeave() {
        this.submitted = false;
        this.initialValidator();
    }
    presentAlertConfirmExit(subheader) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    getStaffData(ev) {
        console.log(ev);
        if (ev == 1) {
            this.form.controls['EvQualification'].setValue("");
            this.form.controls['EvQualification'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.form.controls['EvQualification'].updateValueAndValidity();
            this.form.controls['EvLanguage'].setValue("");
            this.form.controls['EvLanguage'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required);
            this.form.controls['EvLanguage'].updateValueAndValidity();
        }
        else {
            this.form.controls['EvQualification'].setValue("");
            this.form.controls['EvQualification'].setValidators(null);
            this.form.controls['EvQualification'].updateValueAndValidity();
            this.form.controls['EvLanguage'].setValue("");
            this.form.controls['EvLanguage'].setValidators(null);
            this.form.controls['EvLanguage'].updateValueAndValidity();
        }
    }
    ionViewWillLeave() {
        this.EVDetailsList = [];
    }
};
StaffDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation }
];
StaffDetailsPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent,] }],
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['jpgimage',] }]
};
StaffDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-staff-details',
        template: _raw_loader_staff_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_staff_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StaffDetailsPage);



/***/ }),

/***/ 83289:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/staff-details/staff-details.page.scss ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerCss {\n  margin: auto 10px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.nameCss {\n  font-size: 18px;\n  font-weight: bolder;\n  color: #8B67B3;\n}\n\n.numberCss {\n  font-size: 16px;\n  color: #8B67B3;\n}\n\n.iconCss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid;\n  padding: 0px;\n  background: #8B67B3;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.iconCss ion-icon {\n  font-size: 26px;\n  color: white;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n\n.question {\n  margin: 5px 10px;\n}\n\n.ques-head {\n  margin: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #8B67B3;\n}\n\n.quesInput {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px !important;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InN0YWZmLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckNzc3tcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5uYW1lQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ubnVtYmVyQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5pY29uQ3Nze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3luY1NlcnZlcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzhCNjdCMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnF1ZXN0aW9ue1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG5cclxuLnF1ZXMtaGVhZHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5xdWVzSW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnVwbG9hZEltYWdle1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCA0cHggIzk4YTZkOTFjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 93467:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/stc-dashboard/staff-details/staff-details.page.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Staff Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content *ngIf=\"!addProfile\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content\r\n        pullingIcon=\"chevron-down-circle-outline\"\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\"\r\n        refreshingText=\"Refreshing...\"\r\n      >\r\n    </ion-refresher-content>\r\n\r\n  </ion-refresher>\r\n    <ion-row style=\"margin: 10px auto;\">\r\n      <ion-col size=\"12\" *ngFor=\"let item of EVDetailsList\">\r\n        <ion-row class=\"headerCss\">\r\n          <ion-col size=\"10\" style=\"padding: 10px;\">\r\n            <div class=\"nameCss\">{{item.EvName}}</div>\r\n            <div class=\"numberCss\">{{item.EvPhoneNumber}}</div>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"iconCss\" (click)=\"onEdit(item)\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"EVDetailsList.length == 0\" style=\"text-align: center;\">\r\n        <p >No data found</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row (click)=\"addEvProfile()\" class=\"syncServer\">\r\n      <ion-col size=\"2\" class=\"add iconCss\">\r\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Add EV Profile </ion-label>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button (click)=\"addEvProfile()\" style=\"margin: 10px auto; --background: #8B67B3\">\r\n        <ion-icon name=\"add\" size=\"large\" style=\"color: #fff;\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-col >\r\n        <ion-label class=\"bold\"> Add Staff </ion-label>\r\n      </ion-col>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addProfile\">\r\n  <form [formGroup]=\"form\">\r\n    \r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Select Staff </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select (ionChange)=\"getStaffData($event.detail.value)\" class=\"quesInput font-12\" placeholder=\"Select Staff\" formControlName=\"EvStaff\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of staffList\" [value]=\"option.id\">{{option.name}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvStaff.errors && (submitted || form.controls.EvStaff.dirty || form.controls.EvStaff.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvStaff.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EvStaff\">\r\n      <ion-row class=\"ques-head\"> {{form.value.EvStaff == 2 ? 'Head Cook' : form.value.EvStaff == 3 ? 'Assistant Cook' : form.value.EvStaff == 4 ? 'Watch Man' : 'EV' }} Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"text\" formControlName=\"EvName\" placeholder=\"Please enter\" class=\"quesInput\" (input)=\"forceUppercaseConditionally('EvName', $event);\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvName.errors && (submitted || form.controls.EvName.dirty || form.controls.EvName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvName.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EvName').hasError('lowercase') && form.get('EvName').touched\">\r\n            Only capital letters are allowed.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  *ngIf=\"form.value.EvStaff\">\r\n      <ion-row class=\"ques-head\"> {{form.value.EvStaff == 2 ? 'Head Cook' : form.value.EvStaff == 3 ? 'Assistant Cook' : form.value.EvStaff == 4 ? 'Watch Man' : 'EV' }} Phone Number </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"tel\" pattern=\"^[6-9][0-9]{9}$\" minlength=\"10\" maxlength=\"10\" formControlName=\"EvPhoneNumber\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvPhoneNumber.errors && (submitted || form.controls.EvPhoneNumber.dirty || form.controls.EvPhoneNumber.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvPhoneNumber.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"(form.controls['EvPhoneNumber'].hasError('minlength') || form.controls['EvPhoneNumber'].hasError('maxlength')) && form.controls.EvPhoneNumber.touched\">\r\n            Phone number must be at least 10 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.controls['EvPhoneNumber'].errors?.pattern && form.controls.EvPhoneNumber.touched\">\r\n            Mobile number must start with 6.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EvStaff == 1\">\r\n      <ion-row class=\"ques-head\"> Qualification </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select qualification\" formControlName=\"EvQualification\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of qualifiList\" [value]=\"option.id\">{{option.name}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvQualification.errors && (submitted || form.controls.EvQualification.dirty || form.controls.EvQualification.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvQualification.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EvStaff == 1\" >\r\n      <ion-row class=\"ques-head\"> Language Known </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" multiple=\"true\" placeholder=\"Select language\" formControlName=\"EvLanguage\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of MotherTongue\" [value]=\"option.ID\">{{option.MEDINSTR_DESC}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvLanguage.errors && (submitted || form.controls.EvLanguage.dirty || form.controls.EvLanguage.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvLanguage.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <ion-row class=\"syncServer\" (click)=\"onSave()\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Submit </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stc-activity_stc-dashboard_staff-details_staff-details_module_ts-es2015.js.map