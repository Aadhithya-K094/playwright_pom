(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_ev-profile_ev-profile_module_ts"],{

/***/ 17747:
/*!****************************************************************************!*\
  !*** ./src/app/pages/stc-activity/ev-profile/ev-profile-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvProfilePageRoutingModule": function() { return /* binding */ EvProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ev_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ev-profile.page */ 90925);




const routes = [
    {
        path: '',
        component: _ev_profile_page__WEBPACK_IMPORTED_MODULE_0__.EvProfilePage
    }
];
let EvProfilePageRoutingModule = class EvProfilePageRoutingModule {
};
EvProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EvProfilePageRoutingModule);



/***/ }),

/***/ 32430:
/*!********************************************************************!*\
  !*** ./src/app/pages/stc-activity/ev-profile/ev-profile.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvProfilePageModule": function() { return /* binding */ EvProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ev_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ev-profile-routing.module */ 17747);
/* harmony import */ var _ev_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ev-profile.page */ 90925);







let EvProfilePageModule = class EvProfilePageModule {
};
EvProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ev_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EvProfilePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_ev_profile_page__WEBPACK_IMPORTED_MODULE_1__.EvProfilePage]
    })
], EvProfilePageModule);



/***/ }),

/***/ 90925:
/*!******************************************************************!*\
  !*** ./src/app/pages/stc-activity/ev-profile/ev-profile.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvProfilePage": function() { return /* binding */ EvProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ev_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ev-profile.page.html */ 41491);
/* harmony import */ var _ev_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ev-profile.page.scss */ 3630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);











let EvProfilePage = class EvProfilePage {
    constructor(router, fb, emisService, alertService, ionStorage, el, userSesstion, alertController, route) {
        this.router = router;
        this.fb = fb;
        this.emisService = emisService;
        this.alertService = alertService;
        this.ionStorage = ionStorage;
        this.el = el;
        this.userSesstion = userSesstion;
        this.alertController = alertController;
        this.route = route;
        this.arrayList = [
            {
                name: "Manikandan",
                mobile: "8946066138"
            },
            {
                name: "Sasikumar",
                mobile: "8946066138"
            },
            {
                name: "Sandha",
                mobile: "8946066138"
            }
        ];
        this.districtList = [];
        this.blockList = [];
        this.schoolList = [];
        this.EVDetailsList = [];
        this.CenterDetailsList = [];
    }
    ngOnInit() {
        this.initialValidator();
    }
    initialValidator() {
        this.form = this.fb.group({
            IndxId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            EvName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, this.capitalLettersOnlyValidator()]],
            EvPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvDOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvPhoto: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvPhotoName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvDistrict: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvBlock: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvNGO: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvNgoName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', this.capitalLettersOnlyValidator()),
            EvStcId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            EvStcName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            EvStcDistrict: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            EvStcBlock: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
            EvStcSchool: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null)
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
        this.getDistrict();
        this.getEvDetailsStore();
        this.getCenterDetails();
        this.route.queryParams.subscribe((params) => {
            this.Type = params['Type'];
        });
    }
    getEvDetailsStore() {
        this.ionStorage.getData('EVDetailsList').then(res => {
            if (res) {
                this.EVDetailsList = res;
            }
            else {
                this.emisService.EVDetailsStoreGet(this.userSesstion.emis_username(), 1).subscribe(res => {
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
                this.CenterDetailsList = res;
            }
            else {
                this.emisService.EVDetailsStoreGet(this.userSesstion.emis_username(), 2).subscribe(res => {
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
    getDistrict() {
        this.ionStorage.getData('districtList').then(res => {
            this.districtList = res;
        });
    }
    getBlock(data) {
        this.form.controls['EvBlock'].setValue(null);
        this.form.controls['EvBlock'].updateValueAndValidity();
        this.ionStorage.getData('blockList').then(res => {
            this.blockList = res.filter(dd => dd.District_id == this.form.value.EvDistrict);
        });
    }
    onSelectFile1(event) {
        debugger;
        if (event.target.files && event.target.files[0]) {
            if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg") {
                if (event.target.files[0].size <= 5242880) {
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = (event) => {
                        // //debugger;
                        this.imageActive = true;
                        this.form.controls['EvPhotoName'].setValue(fileName);
                        this.form.controls['EvPhoto'].setValue(fileReader.result);
                        this.alertService.success('File Uploaded Successfully');
                        // this.alertPopup("File Uploaded Successfully")
                    };
                }
                else {
                    this.alertService.error('File Can`t uploaded because Image size should not exceed 5MB');
                    this.jpgimage.nativeElement.value = "";
                }
            }
            else {
                this.alertService.error('Please upload only JPG / JPEG image format');
                this.jpgimage.nativeElement.value = "";
            }
        }
    }
    onSave() {
        if (this.form.valid) {
            this.submitted = false;
            let data = {
                "records": {
                    "IndxId": this.form.value.IndxId,
                    "Name": this.form.value.EvName,
                    "Phone": this.form.value.EvPhoneNumber,
                    "StaffDob": this.form.value.EvDOB,
                    "EvImgUpload": this.form.value.EvPhotoName,
                    "DistId": this.form.value.EvDistrict,
                    "BlkId": this.form.value.EvBlock,
                    "EvAddress": this.form.value.EvAddress,
                    "UnderNgo": this.form.value.EvNGO,
                    "NgoName": this.form.value.EvNgoName,
                    "TmkCenterId": this.form.value.EvStcId,
                    "CreatedBy": this.userSesstion.emis_username()
                }
            };
            this.emisService.EVDetailsStore(data).subscribe(res => {
                if (res.dataStatus) {
                    if (this.imageActive) {
                        this.S3ImgaeSave();
                    }
                    else {
                        this.addProfile = false;
                        this.initialValidator();
                        this.updateEVList();
                    }
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
    S3ImgaeSave() {
        const base = this.form.value.EvPhoto.split('base64,');
        let imgObj = {
            "Photo": base[1],
            "PhotoName": this.form.value.EvPhotoName
        };
        let s3ImgObj = {
            "records": imgObj
        };
        this.emisService.S3ImageSave(s3ImgObj).subscribe(res => {
            this.updateEVList();
            if (res.dataStatus) {
                this.imageActive = false;
                this.addProfile = false;
                this.initialValidator();
            }
        });
    }
    updateEVList() {
        this.emisService.EVDetailsStoreGet(this.userSesstion.emis_username(), 1).subscribe(res => {
            if (res.dataStatus) {
                this.EVDetailsList = res.result;
                this.ionStorage.removeKey('EVDetailsList').then(res => {
                    this.ionStorage.insertData_Replace('EVDetailsList', this.EVDetailsList);
                });
            }
        });
    }
    getCenterId() {
        var _a, _b, _c, _d;
        let centerDetails = this.CenterDetailsList.filter(dd => dd.CenterId == this.form.value.EvStcId);
        this.form.patchValue({
            EvStcName: (_a = centerDetails[0]) === null || _a === void 0 ? void 0 : _a.CenterCode,
            EvStcSchool: (_b = centerDetails[0]) === null || _b === void 0 ? void 0 : _b.SchlName,
            EvStcDistrict: (_c = centerDetails[0]) === null || _c === void 0 ? void 0 : _c.DistName,
            EvStcBlock: (_d = centerDetails[0]) === null || _d === void 0 ? void 0 : _d.BlkName,
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
            this.presentAlertConfirmExit("Please add minimum one center profile before you want to map the EV profile to the designated center");
        }
    }
    deleteImg() {
        this.form.controls['EvPhotoName'].setValue(null);
        this.form.controls['EvPhoto'].setValue(null);
        this.form.controls['EvPhotoName'].updateValueAndValidity();
        this.form.controls['EvPhoto'].updateValueAndValidity();
        this.imageActive = false;
    }
    onEdit(data) {
        console.log("data", data);
        this.addProfile = true;
        this.form.patchValue({
            IndxId: data.IndxId,
            EvName: data.Name,
            EvPhoneNumber: data.Phone,
            EvDOB: data.EvDob,
            EvPhoto: 'https://deka0egrc3bqo.cloudfront.net/' + data.EvImg,
            EvPhotoName: data.EvImg,
            EvDistrict: +data.DistId,
            EvBlock: +data.BlkId,
            EvAddress: data.EvAddress,
            EvNGO: data.UnderNgo,
            EvNgoName: data.NgoName,
            EvStcId: data.TmkCenterId,
            // EvStcName: data.IndxId,
            // EvStcDistrict: data.IndxId,
            // EvStcBlock: data.IndxId,
            // EvStcSchool: data.IndxId,
        });
        setTimeout(() => {
            this.getCenterId();
        }, 500);
    }
    handleRefresh(event) {
        setTimeout(() => {
            // Any calls to load data go here
            event.target.complete();
        }, 2000);
    }
    ionViewDidLeave() {
        this.submitted = false;
        this.imageActive = false;
        this.initialValidator();
    }
    presentAlertConfirmExit(subheader) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        this.EVDetailsList = [];
    }
};
EvProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
EvProfilePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent,] }],
    jpgimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['jpgimage',] }]
};
EvProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-ev-profile',
        template: _raw_loader_ev_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ev_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EvProfilePage);



/***/ }),

/***/ 3630:
/*!********************************************************************!*\
  !*** ./src/app/pages/stc-activity/ev-profile/ev-profile.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerCss {\n  margin: auto 10px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.nameCss {\n  font-size: 18px;\n  font-weight: bolder;\n  color: #8B67B3;\n}\n\n.numberCss {\n  font-size: 16px;\n  color: #8B67B3;\n}\n\n.iconCss {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-left: 1px solid;\n  padding: 0px;\n  background: #8B67B3;\n  border-radius: 0px 10px 10px 0px;\n}\n\n.iconCss ion-icon {\n  font-size: 26px;\n  color: white;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 10px;\n  border-radius: 10px;\n  background: #8B67B3;\n  color: white;\n  text-align: center;\n}\n\n.question {\n  margin: 5px 10px;\n}\n\n.ques-head {\n  margin: 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #8B67B3;\n}\n\n.quesInput {\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 5px 10px !important;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.uploadImage {\n  height: 150px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0px 0px 1px 4px #98a6d91c;\n  border-radius: 6px;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBRUo7O0FBREk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUdSOztBQUNBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6ImV2LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckNzc3tcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5uYW1lQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG59XHJcblxyXG4ubnVtYmVyQ3Nze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5pY29uQ3Nze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3luY1NlcnZlcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzhCNjdCMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnF1ZXN0aW9ue1xyXG4gICAgbWFyZ2luOiA1cHggMTBweDtcclxufVxyXG5cclxuLnF1ZXMtaGVhZHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbn1cclxuXHJcbi5xdWVzSW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnVwbG9hZEltYWdle1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCA0cHggIzk4YTZkOTFjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 41491:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/ev-profile/ev-profile.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{Type == 1 ? 'EV Profile' : 'Special Training Centre Details'}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!addProfile\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content\r\n        pullingIcon=\"chevron-down-circle-outline\"\r\n        pullingText=\"Pull to refresh\"\r\n        refreshingSpinner=\"circles\"\r\n        refreshingText=\"Refreshing...\"\r\n      >\r\n    </ion-refresher-content>\r\n\r\n  </ion-refresher>\r\n    <ion-row style=\"margin: 10px auto;\">\r\n      <ion-col size=\"12\" *ngFor=\"let item of EVDetailsList\">\r\n        <ion-row class=\"headerCss\">\r\n          <ion-col size=\"10\" style=\"padding: 10px;\">\r\n            <div class=\"nameCss\">{{item.Name}}</div>\r\n            <div class=\"numberCss\">{{item.Phone}}</div>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"iconCss\" (click)=\"onEdit(item)\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col *ngIf=\"EVDetailsList.length == 0\" style=\"text-align: center;\">\r\n        <p >No data found</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row (click)=\"addEvProfile()\" class=\"syncServer\">\r\n      <ion-col size=\"2\" class=\"add iconCss\">\r\n          <ion-icon name=\"add-circle-outline\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"10\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Add EV Profile </ion-label>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n      <ion-fab-button (click)=\"addEvProfile()\" style=\"margin: 10px auto; --background: #8B67B3\">\r\n        <ion-icon name=\"add\" size=\"large\" style=\"color: #fff;\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-col >\r\n        <ion-label class=\"bold\"> EV Profile </ion-label>\r\n      </ion-col>\r\n    </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"addProfile\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> EV Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"text\" formControlName=\"EvName\" placeholder=\"Please enter\" class=\"quesInput\" (input)=\"forceUppercaseConditionally('EvName', $event);\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvName.errors && (submitted || form.controls.EvName.dirty || form.controls.EvName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvName.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EvName').hasError('lowercase') && form.get('EvName').touched\">\r\n            Only capital letters are allowed.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> EV Phone Number </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"tel\" pattern=\"^[6-9]{1}[0-9]{9}\" minlength=\"10\" maxlength=\"10\" formControlName=\"EvPhoneNumber\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvPhoneNumber.errors && (submitted || form.controls.EvPhoneNumber.dirty || form.controls.EvPhoneNumber.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvPhoneNumber.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"(form.controls['EvPhoneNumber'].hasError('minlength') || form.controls['EvPhoneNumber'].hasError('maxlength')) && form.controls.EvPhoneNumber.touched\">\r\n            Phone number must be at least 10 digits.\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.controls['EvPhoneNumber'].errors?.pattern && form.controls.EvPhoneNumber.touched\">\r\n            Mobile number must start with 6.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> EV DOB </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"date\" formControlName=\"EvDOB\" placeholder=\"Please select\" class=\"quesInput\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvDOB.errors && (submitted || form.controls.EvDOB.dirty || form.controls.EvDOB.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvDOB.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> EV Photo </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input *ngIf=\"!form.value.EvPhoto\" type=\"file\" (change)=\"onSelectFile1($event)\" formControlName=\"EvPhoto\" placeholder=\"Please enter\" class=\"quesInput\"></ion-input>\r\n            <ion-item *ngIf=\"form.value.EvPhoto\" mode=\"md\" fill=\"outline\" style=\"height: 150px;\">\r\n              <ion-button (click)=\"deleteImg()\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n              </ion-button>\r\n              <img src=\"{{form.value.EvPhoto}}\" class=\"uploadImage\">\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvPhoto.errors && (submitted || form.controls.EvPhoto.dirty || form.controls.EvPhoto.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvPhoto.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> EV District </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select (ionChange)=\"getBlock($event)\" class=\"quesInput font-12\" placeholder=\"Select district\" formControlName=\"EvDistrict\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of districtList\" [value]=\"option.district_id\">{{option.district_name}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvDistrict.errors && (submitted || form.controls.EvDistrict.dirty || form.controls.EvDistrict.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvDistrict.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> EV Block </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select class=\"quesInput font-12\" placeholder=\"Select block\" formControlName=\"EvBlock\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of blockList\" [value]=\"option.Block_id\">{{option.block_name}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvBlock.errors && (submitted || form.controls.EvBlock.dirty || form.controls.EvBlock.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvBlock.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> EV Address </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-textarea type=\"text\" formControlName=\"EvAddress\" placeholder=\"Please enter\" class=\"quesInput\"></ion-textarea>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvAddress.errors && (submitted || form.controls.EvAddress.dirty || form.controls.EvAddress.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvAddress.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> Is EV come under NGO? </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <ion-radio-group formControlName=\"EvNGO\" >\r\n            <ion-item class=\"quesInput\" lines=\"none\" style=\"--background:none\">\r\n              <ion-radio class=\"radio-butn\" value=\"1\"></ion-radio>\r\n                <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\">  Yes </span>\r\n              <ion-radio class=\"radio-butn\" value=\"2\"></ion-radio>\r\n                <span style=\"padding-left: 10px;padding-right: 10px;\" class=\"radio\"> No </span>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvNGO.errors && (submitted || form.controls.EvNGO.dirty || form.controls.EvNGO.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvNGO.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" *ngIf=\"form.value.EvNGO == 1\" >\r\n      <ion-row class=\"ques-head\"> if yes, type NGO Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input type=\"text\" formControlName=\"EvNgoName\" placeholder=\"Please enter\" class=\"quesInput\" (input)=\"forceUppercaseConditionally('EvNgoName', $event);\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvNgoName.errors && (submitted || form.controls.EvNgoName.dirty || form.controls.EvNgoName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvNgoName.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"form.get('EvNgoName').hasError('lowercase') && form.get('EvNgoName').touched\">\r\n            Only capital letters are allowed.\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\" >\r\n      <ion-row class=\"ques-head\"> STC Center ID </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-select (ionChange)=\"getCenterId()\" class=\"quesInput font-12\" placeholder=\"Select Center ID\" formControlName=\"EvStcId\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of CenterDetailsList\" [value]=\"option.value\">{{option.CenterId}}</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvStcId.errors && (submitted || form.controls.EvStcId.dirty || form.controls.EvStcId.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvStcId.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> STC Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"EvStcName\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvStcName.errors && (submitted || form.controls.EvStcName.dirty || form.controls.EvStcName.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvStcName.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> STC District </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"EvStcDistrict\" placeholder=\"Please select district\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n            <!-- <ion-select disabled=\"true\" class=\"quesInput font-12\" placeholder=\"Select district\" formControlName=\"EvStcDistrict\" style=\"padding: 15px; height: 59px;\">\r\n              <ion-select-option *ngFor=\"let option of arrayList\" [value]=\"option.value\">{{option.name}}</ion-select-option>\r\n            </ion-select> -->\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvStcDistrict.errors && (submitted || form.controls.EvStcDistrict.dirty || form.controls.EvStcDistrict.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvStcDistrict.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> STC Block </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"EvStcBlock\" placeholder=\"Please select block\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvStcBlock.errors && (submitted || form.controls.EvStcBlock.dirty || form.controls.EvStcBlock.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvStcBlock.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div class=\"question\"  >\r\n      <ion-row class=\"ques-head\"> STC School Name </ion-row>\r\n      <ion-row class=\"middle-text\">\r\n        <ion-col size=\"12\">\r\n          <div mode=\"md\" fill=\"outline\">\r\n            <ion-input disabled=\"true\" type=\"text\" formControlName=\"EvStcSchool\" placeholder=\"Please enter\" class=\"quesInput\" style=\"opacity: 0.5;\"></ion-input>\r\n          </div>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.EvStcSchool.errors && (submitted || form.controls.EvStcSchool.dirty || form.controls.EvStcSchool.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.EvStcSchool.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <ion-row class=\"syncServer\" (click)=\"onSave()\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n        <ion-label style=\"font-size: 18px;\"> Submit </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stc-activity_ev-profile_ev-profile_module_ts-es2015.js.map