(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-general_primary-schooldata_primary-schooldata_module_ts"],{

/***/ 76092:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-schooldata/primary-schooldata-routing.module.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimarySchooldataPageRoutingModule": function() { return /* binding */ PrimarySchooldataPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _primary_schooldata_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-schooldata.page */ 19782);




const routes = [
    {
        path: '',
        component: _primary_schooldata_page__WEBPACK_IMPORTED_MODULE_0__.PrimarySchooldataPage
    }
];
let PrimarySchooldataPageRoutingModule = class PrimarySchooldataPageRoutingModule {
};
PrimarySchooldataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrimarySchooldataPageRoutingModule);



/***/ }),

/***/ 64314:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-schooldata/primary-schooldata.module.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimarySchooldataPageModule": function() { return /* binding */ PrimarySchooldataPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _primary_schooldata_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-schooldata-routing.module */ 76092);
/* harmony import */ var _primary_schooldata_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-schooldata.page */ 19782);







let PrimarySchooldataPageModule = class PrimarySchooldataPageModule {
};
PrimarySchooldataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _primary_schooldata_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimarySchooldataPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_primary_schooldata_page__WEBPACK_IMPORTED_MODULE_1__.PrimarySchooldataPage]
    })
], PrimarySchooldataPageModule);



/***/ }),

/***/ 19782:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-schooldata/primary-schooldata.page.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimarySchooldataPage": function() { return /* binding */ PrimarySchooldataPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_primary_schooldata_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./primary-schooldata.page.html */ 4692);
/* harmony import */ var _primary_schooldata_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./primary-schooldata.page.scss */ 52393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);



















let PrimarySchooldataPage = class PrimarySchooldataPage {
    constructor(router, formBuilder, route, networkService, alertController, sqliteDB, emisService, utilityService, file, userSessionService, alertService, el, androidPermissions, geolocation, camera) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.networkService = networkService;
        this.alertController = alertController;
        this.sqliteDB = sqliteDB;
        this.emisService = emisService;
        this.utilityService = utilityService;
        this.file = file;
        this.userSessionService = userSessionService;
        this.alertService = alertService;
        this.el = el;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.camera = camera;
        this.data = [];
    }
    ngOnInit() {
        this.initialValidator();
    }
    ionViewWillEnter() {
        // this.form.reset();
        this.routeData = this.route.snapshot;
        this.SchlId = this.routeData.queryParams.schoolId;
        this.VistUId = this.routeData.queryParams.vistId;
        console.log(this.SchlId, this.VistUId, "data");
        this.udiseCode = this.utilityService.udiseCode;
        this.visitstatus = this.routeData.queryParams.visitstatus;
        this.checkLocalDB();
    }
    ionViewDidEnter() {
        this.serverData();
    }
    initialValidator() {
        this.form = this.formBuilder.group({
            "IndexId": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "SchlId": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.SchlId, null),
            "VistUId": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.VistUId, null),
            "SiteNum": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            "TotalArea": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            "PurpLaptopYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
            "PurpLaptopFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpLaptopNonFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpComputerYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
            "PurpComputerFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpComputerNonFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpTabYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
            "PurpTabFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpTabNonFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpPrinterYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
            "PurpPrinterFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpPrinterNonFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpProjectorYN": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false, null),
            "PurpProjectorFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "PurpProjectorNonFun": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "GeneralPhoto": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            "GeneralPhotoName": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "EntrancePhoto": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
            "EntrancePhotoName": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "GeneralLatitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
            "GeneralLongitude": new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', null),
        });
        console.log(this.form);
    }
    serverData() {
        let query = 'SELECT * FROM sidsPrimaryGeneralServer' +
            ' WHERE SclId = "' + this.SchlId + '"' +
            ' And VistId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.serverDatas = true;
                console.log('Server general');
            }
            else {
                this.serverDatas = false;
                console.log('Local general');
            }
        }).catch(err => console.log(err));
    }
    onToggleChange(event, id) {
        if (id == 1) {
            if (this.form.value.CmpAdmin) {
                this.form.controls['CmpAdminFunc'].setValue('');
                this.form.controls['CmpAdminFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
            }
            else {
                this.form.controls['CmpAdminFunc'].setValue('');
                this.form.controls['CmpAdminFunc'].setValidators(null);
            }
            this.form.controls['CmpAdminFunc'].updateValueAndValidity();
        }
        if (id == 2) {
            if (this.form.value.PrinterAdminYn) {
                this.form.controls['PrinterAdminFunc'].setValue('');
                this.form.controls['PrinterAdminFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
            }
            else {
                this.form.controls['PrinterAdminFunc'].setValue('');
                this.form.controls['PrinterAdminFunc'].setValidators(null);
            }
            this.form.controls['PrinterAdminFunc'].updateValueAndValidity();
        }
        if (id == 3) {
            if (this.form.value.AuditoriumPrjtYn) {
                this.form.controls['AuditoriumPrjtFunc'].setValue('');
                this.form.controls['AuditoriumPrjtFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
            }
            else {
                this.form.controls['AuditoriumPrjtFunc'].setValue('');
                this.form.controls['AuditoriumPrjtFunc'].setValidators(null);
            }
            this.form.controls['AuditoriumPrjtFunc'].updateValueAndValidity();
        }
        // if(id == 4){
        //   if(this.form.value.OutsiClsYN){
        //     this.form.controls['OutsiClsNum'].setValue('');
        //     this.form.controls['OutsiClsNum'].setValidators(Validators.required);
        //   }else{
        //     this.form.controls['OutsiClsNum'].setValue('');
        //     this.form.controls['OutsiClsNum'].setValidators(null);
        //   }
        //   this.form.controls['OutsiClsNum'].updateValueAndValidity();
        // }
        // if(id == 5){
        //   if(this.form.value.OutsiLabYN){
        //     this.form.controls['OutsiLabNum'].setValue('');
        //     this.form.controls['OutsiLabNum'].setValidators(Validators.required);
        //   }else{
        //     this.form.controls['OutsiLabNum'].setValue('');
        //     this.form.controls['OutsiLabNum'].setValidators(null);
        //   }
        //   this.form.controls['OutsiLabNum'].updateValueAndValidity();
        // }
        // if(id == 6){
        //   if(this.form.value.LadderYn){
        //     this.form.controls['LadderHeight'].setValue('');
        //     this.form.controls['LadderHeight'].setValidators(Validators.required);
        //   }else{
        //     this.form.controls['LadderHeight'].setValue('');
        //     this.form.controls['LadderHeight'].setValidators(null);
        //   }
        //   this.form.controls['LadderHeight'].updateValueAndValidity();
        // }
    }
    onInputChange(event, id) {
        if (id == 1 && this.form.value.SiteNum == 0) {
            this.form.controls['SiteNum'].setValue('');
            this.form.controls['SiteNum'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        if (id == 2 && this.form.value.TotalArea == 0) {
            this.form.controls['TotalArea'].setValue('');
            this.form.controls['TotalArea'].updateValueAndValidity();
            // this.alertService.error('Please Enter Valid Data');
        }
        // if (id == 3 && this.form.value.CmpAdminFunc == 0) {
        //   this.form.controls['CmpAdminFunc'].setValue('');
        //   this.form.controls['CmpAdminFunc'].updateValueAndValidity();
        //   // this.alertService.error('Please Enter Valid Data');
        // }
        if (id == 4 && this.form.value.PurpLaptopFun == 0) {
            if (this.form.value.PurpLaptopNonFun != '') {
                if (+this.form.value.PurpLaptopNonFun == 0) {
                    this.form.controls['PurpLaptopFun'].setValue('');
                    this.form.controls['PurpLaptopFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 5 && this.form.value.PurpComputerFun == 0) {
            if (this.form.value.PurpComputerNonFun != '') {
                if (+this.form.value.PurpComputerNonFun == 0) {
                    this.form.controls['PurpComputerFun'].setValue('');
                    this.form.controls['PurpComputerFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 6 && this.form.value.PurpTabFun == 0) {
            if (this.form.value.PurpTabNonFun != '') {
                if (+this.form.value.PurpTabNonFun == 0) {
                    this.form.controls['PurpTabFun'].setValue('');
                    this.form.controls['PurpTabFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 7 && this.form.value.PurpPrinterFun == 0) {
            if (this.form.value.PurpPrinterNonFun != '') {
                if (+this.form.value.PurpPrinterNonFun == 0) {
                    this.form.controls['PurpPrinterFun'].setValue('');
                    this.form.controls['PurpPrinterFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 8 && this.form.value.PurpProjectorFun == 0) {
            if (this.form.value.PurpProjectorNonFun != '') {
                if (+this.form.value.PurpProjectorNonFun == 0) {
                    this.form.controls['PurpProjectorFun'].setValue('');
                    this.form.controls['PurpProjectorFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 9 && this.form.value.PurpLaptopNonFun == 0) {
            if (this.form.value.PurpLaptopFun != '') {
                if (+this.form.value.PurpLaptopFun == 0) {
                    this.form.controls['PurpLaptopNonFun'].setValue('');
                    this.form.controls['PurpLaptopNonFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 10 && this.form.value.PurpComputerNonFun == 0) {
            if (this.form.value.PurpComputerFun != '') {
                if (+this.form.value.PurpComputerFun == 0) {
                    this.form.controls['PurpComputerNonFun'].setValue('');
                    this.form.controls['PurpComputerNonFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 11 && this.form.value.PurpTabNonFun == 0) {
            if (this.form.value.PurpTabFun != '') {
                if (+this.form.value.PurpTabFun == 0) {
                    this.form.controls['PurpTabNonFun'].setValue('');
                    this.form.controls['PurpTabNonFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 12 && this.form.value.PurpPrinterNonFun == 0) {
            if (this.form.value.PurpPrinterFun != '') {
                if (+this.form.value.PurpPrinterFun == 0) {
                    this.form.controls['PurpPrinterNonFun'].setValue('');
                    this.form.controls['PurpPrinterNonFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
        if (id == 13 && this.form.value.PurpProjectorNonFun == 0) {
            if (this.form.value.PurpProjectorFun != '') {
                if (+this.form.value.PurpProjectorFun == 0) {
                    this.form.controls['PurpProjectorNonFun'].setValue('');
                    this.form.controls['PurpProjectorNonFun'].updateValueAndValidity();
                    // this.alertService.error('Please Enter Valid Data');
                }
            }
        }
    }
    getTableData(status, id) {
        if (id == 1) {
            this.form.controls['PurpLaptopYN'].setValue(status);
            this.form.controls['PurpLaptopYN'].updateValueAndValidity();
            if (+status) {
                this.form.controls['PurpLaptopFun'].setValue("");
                this.form.controls['PurpLaptopFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpLaptopFun'].updateValueAndValidity();
                this.form.controls['PurpLaptopNonFun'].setValue("");
                this.form.controls['PurpLaptopNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpLaptopNonFun'].updateValueAndValidity();
            }
            else {
                this.form.controls['PurpLaptopFun'].setValue("");
                this.form.controls['PurpLaptopFun'].setValidators(null);
                this.form.controls['PurpLaptopFun'].updateValueAndValidity();
                this.form.controls['PurpLaptopNonFun'].setValue("");
                this.form.controls['PurpLaptopNonFun'].setValidators(null);
                this.form.controls['PurpLaptopNonFun'].updateValueAndValidity();
            }
        }
        if (id == 2) {
            this.form.controls['PurpComputerYN'].setValue(status);
            this.form.controls['PurpComputerYN'].updateValueAndValidity();
            if (+status) {
                this.form.controls['PurpComputerFun'].setValue("");
                this.form.controls['PurpComputerFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpComputerFun'].updateValueAndValidity();
                this.form.controls['PurpComputerNonFun'].setValue("");
                this.form.controls['PurpComputerNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpComputerNonFun'].updateValueAndValidity();
            }
            else {
                this.form.controls['PurpComputerFun'].setValue("");
                this.form.controls['PurpComputerFun'].setValidators(null);
                this.form.controls['PurpComputerFun'].updateValueAndValidity();
                this.form.controls['PurpComputerNonFun'].setValue("");
                this.form.controls['PurpComputerNonFun'].setValidators(null);
                this.form.controls['PurpComputerNonFun'].updateValueAndValidity();
            }
        }
        if (id == 3) {
            this.form.controls['PurpTabYN'].setValue(status);
            this.form.controls['PurpTabYN'].updateValueAndValidity();
            if (+status) {
                this.form.controls['PurpTabFun'].setValue("");
                this.form.controls['PurpTabFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpTabFun'].updateValueAndValidity();
                this.form.controls['PurpTabNonFun'].setValue("");
                this.form.controls['PurpTabNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpTabNonFun'].updateValueAndValidity();
            }
            else {
                this.form.controls['PurpTabFun'].setValue("");
                this.form.controls['PurpTabFun'].setValidators(null);
                this.form.controls['PurpTabFun'].updateValueAndValidity();
                this.form.controls['PurpTabNonFun'].setValue("");
                this.form.controls['PurpTabNonFun'].setValidators(null);
                this.form.controls['PurpTabNonFun'].updateValueAndValidity();
            }
        }
        if (id == 4) {
            this.form.controls['PurpPrinterYN'].setValue(status);
            this.form.controls['PurpPrinterYN'].updateValueAndValidity();
            if (+status) {
                this.form.controls['PurpPrinterFun'].setValue("");
                this.form.controls['PurpPrinterFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpPrinterFun'].updateValueAndValidity();
                this.form.controls['PurpPrinterNonFun'].setValue("");
                this.form.controls['PurpPrinterNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpPrinterNonFun'].updateValueAndValidity();
            }
            else {
                this.form.controls['PurpPrinterFun'].setValue("");
                this.form.controls['PurpPrinterFun'].setValidators(null);
                this.form.controls['PurpPrinterFun'].updateValueAndValidity();
                this.form.controls['PurpPrinterNonFun'].setValue("");
                this.form.controls['PurpPrinterNonFun'].setValidators(null);
                this.form.controls['PurpPrinterNonFun'].updateValueAndValidity();
            }
        }
        if (id == 5) {
            this.form.controls['PurpProjectorYN'].setValue(status);
            this.form.controls['PurpProjectorYN'].updateValueAndValidity();
            if (+status) {
                this.form.controls['PurpProjectorFun'].setValue("");
                this.form.controls['PurpProjectorFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpProjectorFun'].updateValueAndValidity();
                this.form.controls['PurpProjectorNonFun'].setValue("");
                this.form.controls['PurpProjectorNonFun'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
                this.form.controls['PurpProjectorNonFun'].updateValueAndValidity();
            }
            else {
                this.form.controls['PurpProjectorFun'].setValue("");
                this.form.controls['PurpProjectorFun'].setValidators(null);
                this.form.controls['PurpProjectorFun'].updateValueAndValidity();
                this.form.controls['PurpProjectorNonFun'].setValue("");
                this.form.controls['PurpProjectorNonFun'].setValidators(null);
                this.form.controls['PurpProjectorNonFun'].updateValueAndValidity();
            }
        }
    }
    onSave() {
        debugger;
        console.log(this.form);
        if (this.form.valid) {
            this.submitted = false;
            let deleteQuery = 'DELETE FROM sids_primary_general_schooldata' +
                ' WHERE SchlId = "' + this.SchlId + '"' +
                ' And VistUId = "' + this.VistUId + '"';
            console.log("DeleteQuery", deleteQuery, this.form.value);
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
                const datainsert = 'INSERT INTO sids_primary_general_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(datainsert, [
                    null, this.SchlId, this.VistUId, this.form.value.IndexId, this.form.value.SiteNum, this.form.value.TotalArea, this.form.value.PurpLaptopYN,
                    this.form.value.PurpLaptopFun, this.form.value.PurpLaptopNonFun, this.form.value.PurpComputerYN, this.form.value.PurpComputerFun,
                    this.form.value.PurpComputerNonFun, this.form.value.PurpTabYN, this.form.value.PurpTabFun, this.form.value.PurpTabNonFun, this.form.value.PurpPrinterYN,
                    this.form.value.PurpPrinterFun, this.form.value.PurpPrinterNonFun, this.form.value.PurpProjectorYN, this.form.value.PurpProjectorFun, this.form.value.PurpProjectorNonFun,
                    this.form.value.GeneralPhoto, this.form.value.GeneralPhotoName, this.form.value.GeneralLatitude, this.form.value.GeneralLongitude, this.form.value.EntrancePhoto, this.form.value.EntrancePhotoName, 1
                ]).then(insertres => {
                    if (insertres.insertId) {
                        this.alertService.success('Saved Successfully');
                        console.log('Inserted SIDS General School Data');
                        this.deleteSchoolData();
                        this.router.navigate(['/tabs/primary-dashboard'], { queryParams: { 'schoolId': this.SchlId, 'vistId': this.VistUId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
                    }
                });
            });
        }
        else {
            this.submitted = true;
            this.form.markAllAsTouched();
            this.focusValidator();
            this.alertService.error("Please Enter Valid Data");
        }
    }
    goToBack() {
        this.router.navigate(['/tabs/primary-dashboard'], { queryParams: { 'schoolId': this.SchlId, 'vistId': this.VistUId }, skipLocationChange: false });
    }
    checkLocalDB() {
        let deleteQuery = 'SELECT * FROM sids_primary_general_schooldata' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        return this.sqliteDB.getDataLocalDB(deleteQuery).then(data => {
            console.log(data);
            if (data.rows.length > 0) {
                this.dataList = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.dataList.push(data.rows.item(i));
                }
                this.syncLocal = true;
                console.log(this.dataList, "dataList");
                this.form.patchValue({
                    "IndexId": this.dataList[0].IndexId,
                    "SchlId": this.SchlId,
                    "VistUId": this.VistUId,
                    "SiteNum": this.dataList[0].SiteNum,
                    "TotalArea": this.dataList[0].TotalArea,
                    "PurpLaptopYN": this.dataList[0].PurpLaptopYN == "false" ? false : this.dataList[0].PurpLaptopYN == "true" ? true : this.dataList[0].PurpLaptopYN == true ? 1 : 2,
                    "PurpLaptopFun": this.dataList[0].PurpLaptopFun,
                    "PurpLaptopNonFun": this.dataList[0].PurpLaptopNonFun,
                    "PurpComputerYN": this.dataList[0].PurpComputerYN == "false" ? false : this.dataList[0].PurpComputerYN == "true" ? true : this.dataList[0].PurpComputerYN == true ? 1 : 2,
                    "PurpComputerFun": this.dataList[0].PurpComputerFun,
                    "PurpComputerNonFun": this.dataList[0].PurpComputerNonFun,
                    "PurpTabYN": this.dataList[0].PurpTabYN == "false" ? false : this.dataList[0].PurpTabYN == "true" ? true : this.dataList[0].PurpTabYN == true ? 1 : 2,
                    "PurpTabFun": this.dataList[0].PurpTabFun,
                    "PurpTabNonFun": this.dataList[0].PurpTabNonFun,
                    "PurpPrinterYN": this.dataList[0].PurpPrinterYN == "false" ? false : this.dataList[0].PurpPrinterYN == "true" ? true : this.dataList[0].PurpPrinterYN == true ? 1 : 2,
                    "PurpPrinterFun": this.dataList[0].PurpPrinterFun,
                    "PurpPrinterNonFun": this.dataList[0].PurpPrinterNonFun,
                    "PurpProjectorYN": this.dataList[0].PurpProjectorYN == "false" ? false : this.dataList[0].PurpProjectorYN == "true" ? true : this.dataList[0].PurpProjectorYN == true ? 1 : 2,
                    "PurpProjectorFun": this.dataList[0].PurpProjectorFun,
                    "PurpProjectorNonFun": this.dataList[0].PurpProjectorNonFun,
                    "GeneralPhoto": this.dataList[0].GeneralPhoto,
                    "GeneralPhotoName": this.dataList[0].GeneralPhotoName,
                    "GeneralLatitude": this.dataList[0].GeneralLatitude,
                    "GeneralLongitude": this.dataList[0].GeneralLongitude,
                    "EntrancePhoto": this.dataList[0].EntrancePhoto,
                    "EntrancePhotoName": this.dataList[0].EntrancePhotoName,
                });
            }
            else {
                console.log("local data");
                this.isData = false;
            }
        });
    }
    ionViewWillLeave() {
        // this.form.reset();
        this.initialValidator();
        this.submitted = false;
        this.scrollToTop();
    }
    onSyncSave() {
        var _a, _b;
        if (this.form.valid) {
            if (this.networkService.getCurrentNetworkStatus() == 0) {
                let dataImage = (_a = this.form.value.GeneralPhoto) === null || _a === void 0 ? void 0 : _a.split(',');
                let dataImage2 = (_b = this.form.value.EntrancePhoto) === null || _b === void 0 ? void 0 : _b.split(',');
                const records = {
                    "records": {
                        "IndexId": this.dataList[0].IndexId,
                        "SchlId": this.SchlId,
                        "VistUId": this.VistUId,
                        "SiteNum": this.form.value.SiteNum,
                        "TotalArea": this.form.value.TotalArea,
                        "PurpLaptopYN": +this.form.value.PurpLaptopYN ? 1 : 2,
                        "PurpLaptopFun": this.form.value.PurpLaptopFun,
                        "PurpLaptopNonFun": this.form.value.PurpLaptopNonFun,
                        "PurpComputerYN": +this.form.value.PurpComputerYN ? 1 : 2,
                        "PurpComputerFun": this.form.value.PurpComputerFun,
                        "PurpComputerNonFun": this.form.value.PurpComputerNonFun,
                        "PurpTabYN": +this.form.value.PurpTabYN ? 1 : 2,
                        "PurpTabFun": this.form.value.PurpTabFun,
                        "PurpTabNonFun": this.form.value.PurpTabNonFun,
                        "PurpPrinterYN": +this.form.value.PurpPrinterYN ? 1 : 2,
                        "PurpPrinterFun": this.form.value.PurpPrinterFun,
                        "PurpPrinterNonFun": this.form.value.PurpPrinterNonFun,
                        "PurpProjectorYN": +this.form.value.PurpProjectorYN ? 1 : 2,
                        "PurpProjectorFun": this.form.value.PurpProjectorFun,
                        "PurpProjectorNonFun": this.form.value.PurpProjectorNonFun,
                        "GeneralPhotoName": this.form.value.GeneralPhotoName,
                        "EntrancePhotoName": this.form.value.EntrancePhotoName,
                        "GeneralLatitude": this.form.value.GeneralLatitude,
                        "GeneralLongitude": this.form.value.GeneralLongitude,
                    }
                };
                console.log("records", records);
                this.utilityService.SidsGeneralQues(records).subscribe(res => {
                    if (res.dataStatus) {
                        if (dataImage.length > 1) {
                            let imgObj = {
                                "records": {
                                    "Photo": dataImage[1],
                                    "PhotoName": this.form.value.GeneralPhotoName
                                }
                            };
                            this.emisService.S3ImageSave(imgObj).subscribe(res => { });
                        }
                        if (dataImage2.length > 1) {
                            let imgObj = {
                                "records": {
                                    "Photo": dataImage2[1],
                                    "PhotoName": this.form.value.EntrancePhotoName
                                }
                            };
                            this.emisService.S3ImageSave(imgObj).subscribe(res => { });
                        }
                        this.form.controls['IndexId'].setValue(res.IndexId);
                        this.form.controls['IndexId'].updateValueAndValidity();
                        this.updateAllQuery();
                        this.insertLocalDB();
                        this.alertService.success('Saved Successfully');
                    }
                });
            }
            else {
                this.onSave();
            }
        }
        else {
            this.submitted = true;
            this.form.markAllAsTouched();
            this.focusValidator();
            this.alertService.error("Please Enter Valid Data");
        }
    }
    insertLocalDB() {
        let deleteQuery = 'DELETE FROM sidsPrimaryGeneralServer' +
            ' WHERE SclId = "' + this.SchlId + '"' +
            ' And VistId = "' + this.VistUId + '"';
        this.sqliteDB.getDataLocalDB(deleteQuery).then(res => {
            const datainsert = "INSERT INTO sidsPrimaryGeneralServer VALUES (?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.SchlId, this.VistUId, "3"]).then(insertres => {
                console.log('server inserted successfully', insertres);
                this.goToBack();
            });
        });
    }
    getInfo(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'SQFT',
                message: `
      <div>
        <li>1 hectare = 107639 sqft</li>
        <li>1 acre = 43560 sqft</li>
        <li>1 sqm = 10.76 sqft</li>
        <li>1 sq yard = 9 sqft</li>
      </div>
    `,
                buttons: ['Close'],
            });
            yield popover.present();
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
    updateAllQuery() {
        let query1 = 'DELETE FROM sids_primary_general_schooldata' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And VistUId = "' + this.VistUId + '"';
        console.log("query ", query1, this.form.value);
        return this.sqliteDB.getDataLocalDB(query1).then(data => {
            const datainsert = 'INSERT INTO sids_primary_general_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [
                null, this.SchlId, this.VistUId, this.form.value.IndexId, this.form.value.SiteNum, this.form.value.TotalArea, this.form.value.PurpLaptopYN,
                this.form.value.PurpLaptopFun, this.form.value.PurpLaptopNonFun, this.form.value.PurpComputerYN, this.form.value.PurpComputerFun,
                this.form.value.PurpComputerNonFun, this.form.value.PurpTabYN, this.form.value.PurpTabFun, this.form.value.PurpTabNonFun, this.form.value.PurpPrinterYN,
                this.form.value.PurpPrinterFun, this.form.value.PurpPrinterNonFun, this.form.value.PurpProjectorYN, this.form.value.PurpProjectorFun, this.form.value.PurpProjectorNonFun,
                this.form.value.GeneralPhoto, this.form.value.GeneralPhotoName, this.form.value.GeneralLatitude, this.form.value.GeneralLongitude, this.form.value.EntrancePhoto, this.form.value.EntrancePhotoName, 1
            ]).then(insertres => {
                if (insertres.insertId) {
                    this.alertService.success('Saved Successfully');
                    console.log('Inserted SIDS General School Data');
                    this.router.navigate(['/tabs/primary-dashboard'], { queryParams: { 'schoolId': this.SchlId, 'vistId': this.VistUId, 'visitstatus': this.visitstatus }, skipLocationChange: false });
                }
            });
        });
    }
    deleteSchoolData() {
        let deleteQuery = 'UPDATE sidsPrimaryGeneralServer SET Status = 2' +
            ' WHERE SclId = "' + this.SchlId + '"' +
            ' And VistId = "' + this.VistUId + '"';
        this.sqliteDB.getDataLocalDB(deleteQuery).then(res => {
            console.log("update sidsPrimaryGeneralServer");
        });
    }
    openCamera(i) {
        this.androidPermission();
        debugger;
        const options = {
            quality: 60,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            cameraDirection: this.camera.Direction.BACK
        };
        this.camera.getPicture(options).then((imageData) => {
            // console.log("CameraPicture",imageData)
            var bucketName = "renewalapplicationemis";
            let expiry = 1800;
            let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then((base64string) => {
                if (base64string) {
                    const base = base64string.split('base64,');
                    const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_11__.base64StringToBlob)(base[1], 'image/jpg');
                    if (blob.size <= 3145728) {
                        if (i == 1) {
                            this.form.controls['GeneralPhoto'].setValue(base64string);
                            this.form.controls['GeneralPhotoName'].setValue(splitedImage[0] + '.png');
                        }
                        if (i == 2) {
                            this.form.controls['EntrancePhoto'].setValue(base64string);
                            this.form.controls['EntrancePhotoName'].setValue(splitedImage[0] + '.png');
                        }
                        this.getLatLong();
                    }
                    else {
                        this.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                    }
                }
            });
        }, (err) => {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    }
    androidPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
            if (!result.hasPermission) {
                console.log("no camera permission");
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA);
            }
        }, err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA));
    }
    uploadImgDelete(id) {
        if (id == 1) {
            this.form.controls['GeneralPhoto'].setValue(null);
            this.form.controls['GeneralPhotoName'].setValue(null);
            this.form.get('GeneralPhoto').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
        }
        if (id == 2) {
            this.form.controls['EntrancePhoto'].setValue(null);
            this.form.controls['EntrancePhotoName'].setValue(null);
            this.form.get('EntrancePhoto').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
        }
        this.form.get('GeneralPhoto').updateValueAndValidity();
        this.form.get('EntrancePhoto').updateValueAndValidity();
        this.form.controls['GeneralLatitude'].setValue('');
        this.form.controls['GeneralLongitude'].setValue('');
        this.form.get('GeneralLatitude').updateValueAndValidity();
        this.form.get('GeneralLongitude').updateValueAndValidity();
        setTimeout(() => {
            this.getLatLong();
        }, 1000);
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.form.controls['GeneralLatitude'].setValue(resp.coords.latitude);
            this.form.controls['GeneralLongitude'].setValue(resp.coords.longitude);
            this.form.get('GeneralLatitude').updateValueAndValidity();
            this.form.get('GeneralLongitude').updateValueAndValidity();
        }).catch((error) => {
            if (error.message === 'Illegal Access') {
                this.alertService.alertToTurnOnPermission('Location', 'Location');
            }
            // console.log('Error getting location', error);
        });
    }
};
PrimarySchooldataPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_12__.EmisService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ElementRef },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__.Geolocation },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_9__.Camera }
];
PrimarySchooldataPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent,] }]
};
PrimarySchooldataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-primary-schooldata',
        template: _raw_loader_primary_schooldata_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_primary_schooldata_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrimarySchooldataPage);



/***/ }),

/***/ 52393:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/sids/primary-school/primary-general/primary-schooldata/primary-schooldata.page.scss ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 16px !important;\n}\n\ndiv {\n  font-size: 16px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\n.rowColr {\n  background-color: #E8F2FF;\n}\n\n.btn-present {\n  width: 100%;\n  height: 40px;\n  font-weight: bold;\n  font-size: 10px;\n  --background: #4CAF50!important;\n  color: #fff;\n  border-radius: 3px !important;\n}\n\n.btn-absent {\n  width: 100%;\n  height: 40px;\n  font-weight: bold;\n  font-size: 10px;\n  --background:#f82339 !important;\n  color: #fff;\n}\n\n.left-text {\n  text-align: left;\n}\n\n.addButton {\n  margin: 10px auto;\n  background: var(--ion-color-primary);\n  border-radius: 10px;\n  color: white;\n}\n\n.syncServer {\n  width: 50%;\n  margin: 10px auto;\n  padding: 5px;\n  border-radius: 10px;\n  background: var(--ion-color-primary);\n}\n\n.normal {\n  border-bottom: 1px solid;\n}\n\n.error {\n  border-bottom: 1px solid;\n  opacity: 1;\n  border: 1px solid red;\n  box-shadow: 0px 1px 5px 2px red;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 10px;\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktc2Nob29sZGF0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsMEJBQUE7QUFDSjs7QUFFRTtFQUVFLGlCQUFBO0FBQUo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtFQUdBLDJCQUFBO0FBSEo7O0FBTUU7RUFDRSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7QUFISjs7QUFNRTtFQUNFLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFBQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtBQUhKOztBQU1FOzs7RUFHRSxlQUFBO0VBQ0Esb0JBQUE7QUFISjs7QUFNRTs7RUFFRSxxQkFBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7QUFISjs7QUFPRSxTQUFBOztBQUdBLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVBKOztBQVVFO0VBQ0UsY0FBQTtBQVBKOztBQVdFLE9BQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVRKOztBQVlFO0VBQ0UsY0FBQTtBQVRKOztBQWFFLFdBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQVhKOztBQWNFO0VBQ0UsY0FBQTtBQVhKOztBQWVFLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWJKOztBQWdCRTtFQUNFLGNBQUE7QUFiSjs7QUFpQkUsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBZko7O0FBa0JFO0VBQ0UsY0FBQTtBQWZKOztBQW1CRSxRQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFqQko7O0FBb0JFO0VBQ0UsY0FBQTtBQWpCSjs7QUFxQkUsT0FBQTs7QUFNQTtFQUNFLFdBQUE7QUF2Qko7O0FBMEJFO0VBQ0U7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUF2Qko7O0VBeUJFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUF0Qko7O0VBd0JFOztJQUVFLGVBQUE7SUFDQSxtQkFBQTtFQXJCSjtBQUNGOztBQXdCRTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7QUF0Qko7O0FBOEJFO0VBQ0UsVUFBQTtBQTNCSjs7QUE4QkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQUEscUNBQUE7QUEzQko7O0FBOEJFO0VBQ0UsZ0JBQUE7RUFDQSwwQkFBQTtBQTNCSjs7QUE4QkU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FBM0JKOztBQThCRTtFQUNFLFVBQUE7QUEzQko7O0FBb0NFO0VBQ0UsV0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLHVEQUFBO0FBakNKOztBQW9DRTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQWpDSjs7QUF3Q0U7RUFDRSwwQkFBQTtBQXJDSjs7QUF3Q0U7RUFDRSwwQkFBQTtBQXJDSjs7QUF3Q0U7RUFDRSx5QkFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQXJDTjs7QUF3Q0U7RUFDRyxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQXJDTDs7QUF3Q0k7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBckNSOztBQXdDRTtFQUNFLCtCQUFBO0VBQWdDLGdDQUNoQztBQXJDSjs7QUF3Q0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXJDTjs7QUF1Q0U7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFBQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXBDSjs7QUFzQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFuQ0o7O0FBcUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbENKOztBQXFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWxDSjs7QUFvQ0U7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDSjs7QUFvQ0U7RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQWpDSjs7QUFtQ0U7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBaENKOztBQWtDRTtFQUNFLHlCQUFBO0FBL0JKOztBQWlDRTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUEvQk47O0FBaUNFO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUEvQk47O0FBa0NFO0VBQ0UsZ0JBQUE7QUEvQko7O0FBaUNFO0VBQ0UsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQTlCSjs7QUFnQ0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQTdCSjs7QUFnQ0U7RUFDRSx3QkFBQTtBQTdCSjs7QUFnQ0U7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBN0JKOztBQWdDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUE3Qko7O0FBK0JFO0VBQ0UsYUFBQTtBQTVCSiIsImZpbGUiOiJwcmltYXJ5LXNjaG9vbGRhdGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbkJvdHRvbTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpblRvcDAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpblRvcDUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1jb250YWluZXIge1xyXG4gICAgLy8gd2lkdGg6IDkzJTtcclxuICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lVGV4dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZUljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2QtYXV0aG9yIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuICBcclxuICAjY2QtdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAjY2QtdGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICAvKiB0aGlzIGlzIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWljb24gaSB7XHJcbiAgICBjb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLXBpY3R1cmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLXBpY3R1cmUgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgIGNvbG9yOiAjMzAzZTQ5O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQ09MT1JTKi9cclxuICBcclxuICBcclxuICAvKlBPU0lUSVZFKi9cclxuICBcclxuICAucG9zaXRpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gIH1cclxuICBcclxuICAucG9zaXRpdmUgaSB7XHJcbiAgICBjb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypDQUxNKi9cclxuICBcclxuICAuY2FsbSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0M2NlZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxtIGkge1xyXG4gICAgY29sb3I6ICM0M2NlZTY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQkFMQU5DRUQqL1xyXG4gIFxyXG4gIC5iYWxhbmNlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NmNjMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWxhbmNlZCBpIHtcclxuICAgIGNvbG9yOiAjNjZjYzMzO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkVORVJHSVpFRCovXHJcbiAgXHJcbiAgLmVuZXJnaXplZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMGI4NDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbmVyZ2l6ZWQgaSB7XHJcbiAgICBjb2xvcjogI2YwYjg0MDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypBU1NFUlRJVkUqL1xyXG4gIFxyXG4gIC5hc3NlcnRpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWY0ZTNhO1xyXG4gIH1cclxuICBcclxuICAuYXNzZXJ0aXZlIGkge1xyXG4gICAgY29sb3I6ICNlZjRlM2E7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qUk9ZQUwqL1xyXG4gIFxyXG4gIC5yb3lhbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4YTZkZTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3lhbCBpIHtcclxuICAgIGNvbG9yOiAjOGE2ZGU5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkRBUksqL1xyXG4gIFxyXG4gIC8vIC5kYXJrIHtcclxuICAvLyAgIGJvcmRlci1jb2xvcjogIzQ0NDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmRhcmsgaSB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIH1cclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlY29uZGFyeSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAucXVlcy10eHQge1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcclxuICB9IFxyXG4gIFxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToxLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtcGFkZGluZyB7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24tc2VsZWN0IHtcclxuICAvLyAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyAgIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIC8vIH1cclxuICBcclxuICAuaW5wdXQtY2xyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KSAxcHggc29saWQ7O1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24taW5wdXQge1xyXG4gIC8vICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBkaXZ7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgIC8qIG1hcmdpbjogMCU7ICovXHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tbm8tcGFkZGluZ3tcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pb24tbm8tcGFkZGluZy1xdWVzdGlvbntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VEREVGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIH1cclxuICBcclxuICAuc2VsZWN0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7d2hpdGUtc3BhY2U6IFxyXG4gICAgcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5hZGQge1xyXG4gICAgICBjb2xvcjogYWxpY2VibHVlOyBcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mb290ZXItc2F2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG4gIH1cclxuICAuZm9vdGVyLW5vdCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWMyMzE1O1xyXG4gICAgcGFkZGluZzogMTBweDsgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICB9XHJcbiAgLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ4ZjI2O1xyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIH1cclxuICBcclxuICAuc2lkc1ZpZXd7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZGFyayB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4QjY3QjM7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxuICB9XHJcbiAgXHJcbiAgLnF1ZXNDb2xvcntcclxuICAgIGJhY2tncm91bmQ6ICNGM0Y0RkE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZ0NoZWNre1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4QjY3QjM7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhCNjdCMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIGlvbi10b2dnbGV7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxuICB9XHJcbiAgLnJvd0NvbHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RjJGRjtcclxuICB9XHJcbiAgLmJ0bi1wcmVzZW50XHJcbiAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogIzRDQUY1MCFpbXBvcnRhbnQ7IFxyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1hYnNlbnRcclxuICB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiNmODIzMzkgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICBcclxuICB9XHJcbiAgLmxlZnQtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5hZGRCdXR0b257XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zeW5jU2VydmVye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgLm5vcm1hbHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9ye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDJweCByZWQ7XHJcbiAgfVxyXG5cclxuICAuY2xvc2VidG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 4692:
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-general/primary-schooldata/primary-schooldata.page.html ***!
  \*************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goToBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">General Question ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3; align-items: center;\">\r\n      <img src=\"assets/icons/sids/server_general.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">General School Data</ion-label>\r\n    </ion-card>\r\n    \r\n    <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n      <div>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\">\r\n                      <ion-label> Number of Sites in which the school is located<span style=\"color:red\">*</span></ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[1-9][0-9]*\" placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"SiteNum\"\r\n                    style=\"border-bottom: 1px solid;\" maxlength=\"1\" (ionChange)=\"onInputChange($event.detail.value,1)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['SiteNum'].hasError('required') && (form.controls['SiteNum'].dirty || form.controls['SiteNum'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.SiteNum.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"10\" class=\"quesColor\">\r\n                  <ion-label> Total Area (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"2\" (click)=\"getInfo($event)\">\r\n                  <ion-icon name=\"information-circle-outline\" style=\"font-size: 25px;\"></ion-icon>\r\n                </ion-col>\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input pattern=\"[1-9][0-9]*\\.?[0-9]{1}\" placeholder=\"Please Enter your answer\" type=\"tel\"\r\n                    formControlName=\"TotalArea\" style=\"border-bottom: 1px solid;\" maxlength=\"8\"\r\n                    (ionChange)=\"onInputChange($event.detail.value,2)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['TotalArea'].hasError('required') && (form.controls['TotalArea'].dirty || form.controls['TotalArea'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.TotalArea.errors?.pattern\">Please enter a number with one value after decimal point</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                3\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the school have any of the following devices for administrative purposes (apart from those in classrooms)?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n                <ion-row size=\"12\" style=\"padding:10px; margin: 10px auto; background: #f3f4f9; width: 100%;\">\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-wB font-14\">Device</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-wB font-14\">Functional</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\">\r\n                    <div class=\"font-wB font-14\">Non - Fun</div>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Laptop</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-button *ngIf=\"form.value.PurpLaptopYN\" class=\"btn-present\"(click)=\"getTableData(false, 1)\">Laptop</ion-button>\r\n                    <ion-button *ngIf=\"!form.value.PurpLaptopYN\"class=\"btn-absent\"(click)=\"getTableData(true, 1)\">Laptop</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpLaptopFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 4)\" maxlength=\"2\" formControlName=\"PurpLaptopFun\" disabled=\"{{form.value.PurpLaptopYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpLaptopYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpLaptopNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 9)\" maxlength=\"2\" formControlName=\"PurpLaptopNonFun\" disabled=\"{{form.value.PurpLaptopYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpLaptopYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Computer</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-button *ngIf=\"form.value.PurpComputerYN\" class=\"btn-present\"(click)=\"getTableData(false, 2)\">Computer</ion-button>\r\n                    <ion-button *ngIf=\"!form.value.PurpComputerYN\"class=\"btn-absent\"(click)=\"getTableData(true, 2)\">Computer</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpComputerFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 5)\" maxlength=\"2\" formControlName=\"PurpComputerFun\" disabled=\"{{form.value.PurpComputerYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpComputerYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpComputerNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 10)\" maxlength=\"2\" formControlName=\"PurpComputerNonFun\" disabled=\"{{form.value.PurpComputerYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpComputerYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Tab</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-button *ngIf=\"form.value.PurpTabYN\" class=\"btn-present\"(click)=\"getTableData(false, 3)\">Tab</ion-button>\r\n                    <ion-button *ngIf=\"!form.value.PurpTabYN\"class=\"btn-absent\"(click)=\"getTableData(true, 3)\">Tab</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpTabFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 6)\" maxlength=\"2\" formControlName=\"PurpTabFun\" disabled=\"{{form.value.PurpTabYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpTabYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpTabNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 11)\" maxlength=\"2\" formControlName=\"PurpTabNonFun\" disabled=\"{{form.value.PurpTabYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpTabYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                  <!-- <ion-col size=\"4\">\r\n                    <div class=\"font-14\">Printer / Xerox</div> \r\n                  </ion-col> -->\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-button *ngIf=\"form.value.PurpPrinterYN\" class=\"btn-present\"(click)=\"getTableData(false, 4)\">Printer</ion-button>\r\n                    <ion-button *ngIf=\"!form.value.PurpPrinterYN\"class=\"btn-absent\"(click)=\"getTableData(true, 4)\">Printer</ion-button>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpPrinterFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 7)\" maxlength=\"1\" formControlName=\"PurpPrinterFun\" disabled=\"{{form.value.PurpPrinterYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpPrinterYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                  <ion-col size=\"4\" class=\"text-center\">\r\n                    <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpPrinterNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 12)\" maxlength=\"1\" formControlName=\"PurpPrinterNonFun\" disabled=\"{{form.value.PurpPrinterYN ? 'false' : 'true'}}\" style=\"border-bottom: 1px solid;\" class=\"left-text\" [style.opacity]=\"form.value.PurpPrinterYN ? '1' : '0.5'\"></ion-input>\r\n                  </ion-col>\r\n                </ion-col>\r\n\r\n              <ion-col size=\"12\"class=\"rowpMedium cd-timeline-content\" class=\"rowColr\" style=\"display: flex; align-items: center; justify-content:center;\">\r\n                <!-- <ion-col size=\"4\">\r\n                  <div class=\"font-14\">Projector</div> \r\n                </ion-col> -->\r\n                <ion-col size=\"4\" class=\"text-center\">\r\n                  <ion-button *ngIf=\"form.value.PurpProjectorYN\" class=\"btn-present\"(click)=\"getTableData(false, 5)\">Projector</ion-button>\r\n                  <ion-button *ngIf=\"!form.value.PurpProjectorYN\"class=\"btn-absent\"(click)=\"getTableData(true, 5)\">Projector</ion-button>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpProjectorFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 8)\" maxlength=\"1\" formControlName=\"PurpProjectorFun\" disabled=\"{{form.value.PurpProjectorYN ? 'false' : 'true'}}\"  class=\"left-text\" [style.opacity]=\"form.value.PurpProjectorYN ? '1' : '0.5'\"></ion-input>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"text-center\">\r\n                  <ion-input type=\"tel\" [ngClass]=\"submitted && form.controls['PurpProjectorNonFun'].hasError('required') ? 'error' : 'normal'\" (ionChange)=\"onInputChange($event, 13)\" maxlength=\"1\" formControlName=\"PurpProjectorNonFun\" disabled=\"{{form.value.PurpProjectorYN ? 'false' : 'true'}}\"  class=\"left-text\" [style.opacity]=\"form.value.PurpProjectorYN ? '1' : '0.5'\"></ion-input>\r\n                </ion-col>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" >\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              4\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Please upload the image ( image must contain functional devices/instruments)\r\n                  <br>Photo Upload 1<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <div *ngIf=\"!form.value.GeneralPhoto \" style=\"margin-top: 10px;\" (click)=\"openCamera(1)\">\r\n                  <ion-col size=\"1\" style=\"text-align: center;\">\r\n                    <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\">\r\n                    <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                      Click to Upload Image\r\n                    </label>\r\n                  </ion-col>\r\n                </div>\r\n\r\n                <div *ngIf=\"form.value.GeneralPhoto\">\r\n                  <ion-col size=\"12\" style=\"float: left;\">\r\n                    <ion-button *ngIf=\"visitstatus != 2 && visitstatus != 4\" (click)=\"uploadImgDelete(1)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                    </ion-button>\r\n                    <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.GeneralPhoto}}\"></div>\r\n                  </ion-col>\r\n                </div>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['GeneralPhoto'].hasError('required') && (form.controls['GeneralPhoto'].dirty || form.controls['GeneralPhoto'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" >\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              5\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label>Add photo of school entrance (preferrably with name board)\r\n                  <br>Photo Upload 2<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <div *ngIf=\"!form.value.EntrancePhoto \" style=\"margin-top: 10px;\" (click)=\"openCamera(2)\">\r\n                  <ion-col size=\"1\" style=\"text-align: center;\">\r\n                    <ion-icon name=\"cloud-upload-outline\" class=\"upload-icon\"></ion-icon>\r\n                  </ion-col>\r\n                  <ion-col size=\"8\">\r\n                    <label for=\"file\" class=\"upload-txt\" color=\"primary\">\r\n                      Click to Upload Image\r\n                    </label>\r\n                  </ion-col>\r\n                </div>\r\n\r\n                <div *ngIf=\"form.value.EntrancePhoto\">\r\n                  <ion-col size=\"12\" style=\"float: left;\">\r\n                    <ion-button *ngIf=\"visitstatus != 2 && visitstatus != 4\" (click)=\"uploadImgDelete(2)\" class=\"ion-no-margin closebtn\" fill=\"clear\">\r\n                      <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                    </ion-button>\r\n                    <div style=\"padding: 5px;\"><img class=\"uploadImage\" src=\"{{form.value.EntrancePhoto}}\"></div>\r\n                  </ion-col>\r\n                </div>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['EntrancePhoto'].hasError('required') && (form.controls['EntrancePhoto'].dirty || form.controls['EntrancePhoto'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      </div>\r\n    </form>\r\n\r\n    <ion-row (click)=\"onSave()\" *ngIf=\"visitstatus != 2 && visitstatus != 4  && !syncLocal\">\r\n      <ion-col size=\"4\" class=\"addButton\">\r\n        <p style=\"text-align: center; margin:5px\">Save</p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"syncServer\" *ngIf=\"visitstatus != 2 && visitstatus != 4 && syncLocal\">\r\n      <ion-col (click)=\"onSyncSave()\" size=\"12\" class=\"add\">\r\n        <ion-label> Sync Server </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-general_primary-schooldata_primary-schooldata_module_ts-es2015.js.map