(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_class-student-list_class-student-list_module_ts"],{

/***/ 84842:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mht/class-student-list/class-student-list-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassStudentListPageRoutingModule": function() { return /* binding */ ClassStudentListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _class_student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-student-list.page */ 16934);




const routes = [
    {
        path: '',
        component: _class_student_list_page__WEBPACK_IMPORTED_MODULE_0__.ClassStudentListPage
    }
];
let ClassStudentListPageRoutingModule = class ClassStudentListPageRoutingModule {
};
ClassStudentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClassStudentListPageRoutingModule);



/***/ }),

/***/ 57870:
/*!***************************************************************************!*\
  !*** ./src/app/pages/mht/class-student-list/class-student-list.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassStudentListPageModule": function() { return /* binding */ ClassStudentListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _class_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-student-list-routing.module */ 84842);
/* harmony import */ var _class_student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-student-list.page */ 16934);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








let ClassStudentListPageModule = class ClassStudentListPageModule {
};
ClassStudentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _class_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassStudentListPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
        ],
        declarations: [_class_student_list_page__WEBPACK_IMPORTED_MODULE_1__.ClassStudentListPage]
    })
], ClassStudentListPageModule);



/***/ }),

/***/ 16934:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mht/class-student-list/class-student-list.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassStudentListPage": function() { return /* binding */ ClassStudentListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_class_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./class-student-list.page.html */ 14460);
/* harmony import */ var _class_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-student-list.page.scss */ 40026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ 34255);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 16030);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/emis/pmoa.services */ 47567);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);























let ClassStudentListPage = class ClassStudentListPage {
    constructor(router, uploadService, userService, geolocation, modalCtrl, emisService, locationAccuracy, diagnostic, route, alertController, sqliteDB, alert, androidPermissions, camera, platform, file, usersessionService, pmoaService, alertService) {
        this.router = router;
        this.uploadService = uploadService;
        this.userService = userService;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.emisService = emisService;
        this.locationAccuracy = locationAccuracy;
        this.diagnostic = diagnostic;
        this.route = route;
        this.alertController = alertController;
        this.sqliteDB = sqliteDB;
        this.alert = alert;
        this.androidPermissions = androidPermissions;
        this.camera = camera;
        this.platform = platform;
        this.file = file;
        this.usersessionService = usersessionService;
        this.pmoaService = pmoaService;
        this.alertService = alertService;
        this.mobileNo = "^[6-9]{1}[0-9]{9}";
        this.noSpecial = "^[a-zA-Z \b]+$";
        this.DrDetails = [];
        this.studentList = [];
        this.addStudentList = [];
        this.noData = false;
        this.sdntList = '';
        this.ieCentrList = [];
        this.selcedSchIdx = 0;
        this.schDetails = {};
        this.staffDetails = {};
        this.showSchDetails = false;
        this.currOtp = '';
        this.searchText = '';
        this.currKm = '';
        this.userLantLng = '';
        this.schStdList = [];
        this.flag = '';
        this.doc_file = '';
        this.editSts = false;
        this.showLoader = false;
    }
    ngOnInit() {
        this.initializeValidators(false);
    }
    ionViewDidEnter() {
        var _a, _b, _c, _d, _e, _f;
        this.routeData = this.route.snapshot;
        this.SchlId = this.routeData.queryParams.SchlId;
        this.SchName = this.routeData.queryParams.SchName;
        this.ClsID = this.routeData.queryParams.ClsID;
        this.Sectn = this.routeData.queryParams.Sectn;
        this.localstatus = this.routeData.queryParams.local;
        this.acYear = this.routeData.queryParams.acYear;
        this.Latt = localStorage.getItem('Latt');
        this.Longg = localStorage.getItem('Longg');
        this.UserName = this.usersessionService.emis_username();
        this.editSts = false;
        // this.studentListcheckLocalDb();
        this.addStudentList = [];
        this.studentList = [];
        // setTimeout(() => {
        // }, 500);
        this.sdntList = '';
        this.checkLocalDb();
        // this.askToTurnOnGPS();
        // this.selectedSch(this.routeData.queryParams);
        var checkViewType = localStorage.getItem('viewType');
        this.viewType = JSON.parse(checkViewType);
        this.diagnosisLabel = '';
        if (((_a = this.viewType) === null || _a === void 0 ? void 0 : _a.type) != 2) {
            if (((_b = this.viewType) === null || _b === void 0 ? void 0 : _b.diagnosis.length) == 0) {
                this.diagnosisLabel = ((_c = this.viewType) === null || _c === void 0 ? void 0 : _c.type) == '1' ? 'All Diagnosis' : ('All ' + ((_d = this.viewType) === null || _d === void 0 ? void 0 : _d.type) + ' Diagnosis');
            }
            else {
                this.diagnosisLabel = (_e = this.viewType) === null || _e === void 0 ? void 0 : _e.diagnosis.map(item => item.label).join(', ');
            }
        }
        if (((_f = this.viewType) === null || _f === void 0 ? void 0 : _f.type) != 2) {
            this.MhtStulistGet2();
        }
        else {
            this.MhtStulistGet();
        }
    }
    initializeValidators(data) {
        this.drtDeatails = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
            Dct_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(data ? this.DrDetails[0].Name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.noSpecial)]),
            Mobile_No: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(data ? this.DrDetails[0].MobileNo : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.pattern(this.mobileNo)]),
            // visit_photo: new FormControl(data ? this.DrDetails[0].VisitPhoto : '', [Validators.required]),
            // photo_updated_at: new FormControl(data ? this.DrDetails[0].PhotoUpdatedAt : ''),
        });
    }
    getUploadedFiles(photo) {
        var bucketName = "renewalapplicationemis";
        var filename = photo;
        let expiry = 1800;
        this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => {
            if (result) {
                window.open(result.url);
            }
        });
    }
    checkExternalDb() {
        console.log(this.SchlId);
        this.userService.getGetMhtOnDatePhotoUploaded(this.UserName, this.SchlId).subscribe((data) => {
            console.log(data);
            if (data.result && data.result.length > 0) {
                this.DrDetails = [];
                for (var i = 0; i < data.result.length; i++) {
                    this.DrDetails.push(data.result[0]);
                }
                this.initializeValidators(true);
            }
            else {
                this.initializeValidators(false);
            }
        });
    }
    deleteViewPhoto() {
        this.drtDeatails.controls.visit_photo.setValue('');
    }
    openCameraOn() {
        const options = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: false,
            allowEdit: false,
        };
        this.platform.ready().then(() => {
            this.camera.getPicture(options).then((imageData) => {
                // this.capturedImage = 'data:image/jpeg;base64,' + imageData;
                // this.addWatermark(this.userLantLng.latitude, this.userLantLng.longitude);
                var bucketName = "renewalapplicationemis";
                let expiry = 300;
                let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");
                this.file.readAsDataURL(imagename, filename).then((base64) => {
                    if (base64) {
                        const base = base64.split('base64,');
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_14__.base64StringToBlob)(base[1], 'image/jpg');
                        if (blob.size <= 4000000) {
                            this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                                if (result) {
                                    this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                        this.drtDeatails.controls.visit_photo.setValue(result.key);
                                        localStorage.setItem('VisitPhoto', this.drtDeatails.controls.visit_photo.value);
                                        this.drtDeatails.controls.photo_updated_at.setValue(new Date());
                                        this.alertService.success('File Uploaded Successfully');
                                        this.getMobileNo();
                                    });
                                }
                                else {
                                    this.alertService.error('Unable to upload the photo. Please try again.');
                                }
                            });
                        }
                        else {
                            this.alertService.error('File Can`t uploaded because Image size should not exceed 5 MB');
                        }
                    }
                });
            }, (err) => {
                // Handle error
                this.alertService.error(err);
            });
        });
    }
    getUploadedFiles1(filename) {
        var filename;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            if (filename) {
                var bucketName = "renewalapplicationemis";
                filename = filename;
                let expiry = 1800;
                this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
                    if (result) {
                        const modal = yield this.modalCtrl.create({
                            component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__.ViewImagePage,
                            componentProps: { image: result.url },
                            cssClass: 'view-image-modal_capturedimage'
                        });
                        yield modal.present();
                    }
                    else {
                        this.alertService.error('Error while getting image');
                    }
                }));
            }
            else {
                this.alertService.warning('No data found');
            }
        });
    }
    askToTurnOnGPS() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then((i) => {
            this.checkAndRequestPermission();
        }, error => {
            // this.alertService.alertToTurnOnPermission('Location', 'Location');
            this.checkGPSPermission();
        });
    }
    checkGPSPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
            if (result.hasPermission) {
                this.askToTurnOnGPS();
            }
            else {
                this.requestGPSPermission();
            }
        }, err => {
            // console.log("err=", err);
            // alert(err);
        });
    }
    requestGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then((i) => {
                    this.askToTurnOnGPS();
                }, error => {
                    this.alertService.alertWhite('To get current location please turn on device location');
                });
            }
        });
    }
    checkAndRequestPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            // Check location permission status
            const status = yield this.diagnostic.getLocationAuthorizationStatus();
            console.log(status);
            if (status === this.diagnostic.permissionStatus.GRANTED) {
                // Permission is granted, proceed to get location
                this.selectedSch(this.routeData.queryParams);
            }
            else {
                this.requestPermission();
            }
            // else if (status === this.diagnostic.permissionStatus.NOT_REQUESTED) {
            //   // Permission denied, request again
            //   this.requestPermission();
            // } else if (status === this.diagnostic.permissionStatus.DENIED_ALWAYS) {
            //   // Permission permanently denied, redirect to settings
            //   this.showSettingsAlert();
            // }
        });
    }
    requestPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.diagnostic.requestLocationAuthorization();
                if (result === this.diagnostic.permissionStatus.GRANTED) {
                    this.selectedSch(this.routeData.queryParams);
                }
                else {
                    this.showSettingsAlert();
                }
            }
            catch (error) {
                console.error('Error requesting location permission:', error);
            }
        });
    }
    getLatLong() {
        this.geolocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }).then((resp) => {
            this.locationCordinates = resp.coords;
            this.latitude = this.locationCordinates.latitude;
            this.longitude = this.locationCordinates.longitude;
        }).catch((error) => {
        });
    }
    showSettingsAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Permission Required',
                message: 'Location access is required. Please enable it in your device settings.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.goHome();
                        },
                    },
                    {
                        text: 'Open Settings',
                        handler: () => {
                            this.goHome();
                            this.diagnostic.switchToSettings();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    goHome() {
        this.router.navigate(['/tabs/home']);
    }
    getAddStudentsList() {
        this.userService.getMHTAddStudent(this.SchlId, this.ClsID, this.Sectn, this.acYear).subscribe((res) => {
            if (res.dataStatus) {
                for (var i = 0; i < this.studentList.length; i++) {
                    let sdntId = this.studentList[i].StuId;
                    var index = res.result.findIndex(function (o) {
                        return o.StuId == sdntId;
                    });
                    if (index !== -1)
                        res.result.splice(index, 1);
                }
                this.addStudentList = res.result;
                this.sdntList = '';
            }
        }, error => {
            this.addStudentList = [];
            this.alertService.warning('There is an error while retrieving the student list. Please click the refresh icon to try again.');
        });
    }
    studentListcheckLocalDb() {
        let query = 'SELECT * FROM mhtStudentListDB' +
            ' WHERE SchlId = "' + this.SchlId + '"' +
            ' And Cls = "' + this.ClsID + '"' +
            ' And Sec = "' + this.Sectn + '"';
        this.studentList = [];
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    this.studentList.push(data.rows.item(i));
                }
                this.noData = false;
            }
            else {
                this.MhtStulistGet();
            }
        });
    }
    MhtStulistGet() {
        this.data = [];
        this.studentList = [];
        this.userService.getMHTStudentList(this.SchlId, this.ClsID, this.Sectn, this.acYear).subscribe(res => {
            if (res.dataStatus) {
                this.data = res.result;
                this.studentList = this.data;
                if (this.studentList.length > 0) {
                    this.noData = false;
                }
                else {
                    this.noData = true;
                }
                // this.insertLocalDBstudentList(this.data);
            }
            else {
                this.noData = true;
            }
            // this.getAddStudentsList();
        });
    }
    MhtStulistGet2() {
        var _a, _b, _c, _d, _e, _f;
        this.data = [];
        this.studentList = [];
        if (this.viewType.type != 2 && ((_b = (_a = this.viewType) === null || _a === void 0 ? void 0 : _a.diagnosis) === null || _b === void 0 ? void 0 : _b.length) === 0) {
            this.userService.getDiagnosis(this.viewType.type).subscribe((res) => {
                var _a, _b;
                if (res.dataStatus) {
                    this.viewType.diagnosis = res.result;
                }
                var data = {
                    records: {
                        "type": (_a = this.viewType) === null || _a === void 0 ? void 0 : _a.type,
                        "diagnosis": (_b = this.viewType) === null || _b === void 0 ? void 0 : _b.diagnosis,
                        "SchlId": this.SchlId,
                        "acYear": this.acYear
                    }
                };
                this.userService.getMHTStudentList2(data).subscribe(res => {
                    if (res.dataStatus) {
                        this.data = res.result;
                        this.studentList = this.data;
                        if (this.studentList.length > 0) {
                            this.noData = false;
                        }
                        else {
                            this.noData = true;
                        }
                        // this.insertLocalDBstudentList(this.data);
                    }
                    else {
                        this.noData = true;
                    }
                    // this.getAddStudentsList();
                });
            });
        }
        else {
            if (((_c = this.viewType) === null || _c === void 0 ? void 0 : _c.type) != 2) {
                var data = {
                    records: {
                        "type": (_d = this.viewType) === null || _d === void 0 ? void 0 : _d.type,
                        "diagnosis": (_f = (_e = this.viewType) === null || _e === void 0 ? void 0 : _e.diagnosis) === null || _f === void 0 ? void 0 : _f.map(item => item.value),
                        "SchlId": this.SchlId,
                        "acYear": this.acYear
                    }
                };
                this.userService.getMHTStudentList2(data).subscribe(res => {
                    if (res.dataStatus) {
                        this.data = res.result;
                        this.studentList = this.data;
                        if (this.studentList.length > 0) {
                            this.noData = false;
                        }
                        else {
                            this.noData = true;
                        }
                        // this.insertLocalDBstudentList(this.data);
                    }
                    else {
                        this.noData = true;
                    }
                    // this.getAddStudentsList();
                });
            }
        }
    }
    insertLocalDBstudentList(key) {
        key.forEach((element) => {
            let query = 'SELECT * FROM mhtStudentListDB WHERE StuId=' + element.StuId;
            return this.sqliteDB.getDataLocalDB(query).then(data => {
                const datainsert = 'INSERT INTO mhtStudentListDB VALUES (?,?,?,?,?,?,?,?,?,?,?)';
                this.sqliteDB.insert(datainsert, [null, element.Gender, element.PhnNum, element.StuId, element.StuNme, element.UniqId, this.SchlId, this.ClsID, this.Sectn, element.ComptStatus, this.localstatus]).then(insertres => {
                    if (insertres.insertId) {
                    }
                });
            });
        });
    }
    checkLocalDb() {
        let query = 'SELECT * FROM mhtDoctDeatailsDB WHERE SchoolId=' + this.SchlId;
        return this.sqliteDB.getDataLocalDB(query).then(data => {
            if (data.rows.length > 0) {
                this.DrDetails = [];
                for (var i = 0; i < data.rows.length; i++) {
                    this.DrDetails.push(data.rows.item(i));
                }
                this.initializeValidators(true);
            }
            else {
                // this.checkExternalDb();
            }
        });
    }
    getMobileNo() {
        if (this.drtDeatails.valid) {
            if (this.drtDeatails.value.Mobile_No.length == 10) {
                this.insertLocalDB(this.drtDeatails);
                this.alert.success("Please proceed with screening the student.");
            }
        }
        else {
            this.submitted = true;
        }
    }
    refreshTable() {
        let query = 'DELETE FROM mhtDoctDeatailsDB';
        return this.sqliteDB.getDataLocalDB(query).then(data => {
        });
    }
    insertLocalDB(data) {
        this.refreshTable();
        const datainsert = 'INSERT INTO mhtDoctDeatailsDB VALUES (?,?,?,?,?)';
        this.sqliteDB.insert(datainsert, [null, data.value.Dct_Name, data.value.Mobile_No, this.SchlId, localStorage.getItem('VisitPhoto')]).then(insertres => {
            if (insertres.insertId) {
            }
        });
    }
    updateLocalDB(data) {
        const datainsert = 'UPDATE mhtDoctDeatailsDB SET Name=' + data.value.Dct_Name + 'MobileNo=' + data.value.Mobile_No + 'VisitPhoto=' + localStorage.getItem('VisitPhoto') + 'WHERE SchoolId=' + this.SchlId;
        return this.sqliteDB.update(datainsert).then(data => {
            this.alert.success("Room Updated");
        });
    }
    onGoButton() {
        var _a;
        if (((_a = this.viewType) === null || _a === void 0 ? void 0 : _a.type) != 2) {
            this.router.navigate(['/tabs/school-list-mht']);
        }
        else {
            this.router.navigate(['/tabs/mht-class-list'], { queryParams: { 'SchlId': this.SchlId, 'ClsID': this.ClsID, 'Sectn': this.Sectn, 'SchName': this.SchName, 'session': 1, acYear: this.acYear }, skipLocationChange: false });
        }
    }
    answerPageNavigate(data) {
        let obj = { "SchlId": this.SchlId, "SchName": this.SchName, "ClsID": this.ClsID, "Sectn": this.Sectn, acYear: this.acYear };
        if (data.rbsk == 1) {
            this.router.navigate(['/tabs/health-check-up-answer'], { queryParams: { 'SchlId': this.SchlId, 'Doct_name': this.drtDeatails.value.Dct_Name, 'Doct_No': this.drtDeatails.value.Mobile_No, 'studentid': data.StuId, 'Sectn': this.Sectn, 'ClsID': this.ClsID,
                    'SchName': this.SchName, 'pageId': 1, "Gender": data.Gender, "studentname": data.StuNme, "UniqId": data.UniqId, "module": 'MHT', acYear: this.acYear, navigate: JSON.stringify(obj), navigateUrl: '/tabs/class-student-list' }, skipLocationChange: false });
        }
        else {
            this.alertService.warning('Not a referred student');
        }
    }
    navigateToForm(StuId, item) {
        if (this.drtDeatails.valid || this.acYear == '2023-24') {
            this.router.navigate(['/tabs/student-from'], { queryParams: { 'SchlId': this.SchlId, 'Doct_name': this.drtDeatails.value.Dct_Name, 'Doct_No': this.drtDeatails.value.Mobile_No, 'student_ID': StuId, 'Sectn': this.Sectn, 'ClsID': this.ClsID, 'SchName': this.SchName, "ComptStatus": item.ComptStatus, "stdName": item.StuNme, "emisId": item.UniqId, acYear: this.acYear }, skipLocationChange: false });
            this.submittedDctName = true;
            this.submittedDctNo = true;
        }
        else {
            this.alert.error("Please Enter Your Name, Valid Mobile No and Visit Photo");
        }
    }
    countChange(event) {
        event.target.value = event.target.value.replace(/[^0-9]*/g, '');
    }
    addSdntChange(event) {
        let sdntarraylist = [];
        // for (var i = 0; i < event.value.length; i++) {
        //   let sdntarray = {
        //     'SchlD': this.SchlId,
        //     'Cls': this.ClsID,
        //     'Sec': this.Sectn,
        //     'StuId': event.value[i].StuId,
        //     'StuNme': event.value[i].StuNme,
        //     'Gender': '',
        //     'PhnNum': '',
        //     'UniqId': '',
        //     'id': '',
        //     'ComptStatus': '',
        //   }
        //   this.studentList.push(sdntarray);
        //   sdntarraylist.push(sdntarray);
        // }
        let newDate = moment__WEBPACK_IMPORTED_MODULE_17___default()(new Date()).format('YYYY-MM-DD');
        for (var i = 0; i < event.value.length; i++) {
            let sdntarray = {
                "IndxID": event.value[i].HlthIndexId,
                "ScreeningDate": newDate,
                "ScrenerId": this.usersessionService.emis_username(),
                "StuId": event.value[i].StuId,
                "pmoa": 0,
                "rbsk": 2,
                "mentalHealth": 0,
                "dentalSpeciallist": 0,
                "cwsn": 0,
                "AcYear": "2024-25",
                "AddedStud": event.value[i].HlthIndexId ? 2 : 1
            };
            sdntarraylist.push(sdntarray);
        }
        let obj = {
            "StudDetails": sdntarraylist,
            "HealthDetails": []
        };
        this.pmoaService.HealthScrnSave(obj).subscribe((res) => {
            this.MhtStulistGet();
        }, error => {
            this.alertService.warning("Unable to add students");
        });
        // this.insertLocalDBstudentList(sdntarraylist);
        // if (this.studentList.length > 0) {
        //   this.noData = false;
        // } else {
        //   this.noData = true;
        // }
        // setTimeout(() => {
        //   this.getAddStudentsList();
        // }, 500)
    }
    dropAlert() {
        if (this.addStudentList.length > 0) {
            this.alert.error("No Screened Students");
        }
    }
    getStuListInSearch(event) {
        // this.searchTerm = event.detail.value.trim();
        var searchTerm = this.textData;
        this.studentList = this.data.filter((item) => {
            // Convert both to lowercase and perform the search
            const stuNameLower = item.StuNme.toLowerCase();
            const stuId = item.UniqId.toLowerCase();
            const searchTermLower = searchTerm.toLowerCase();
            return ((stuNameLower.indexOf(searchTermLower) > -1) || (stuId.indexOf(searchTermLower) > -1));
            // return item.school_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
        if (this.studentList.length > 0) {
            this.noData = false;
        }
        else {
            this.noData = true;
        }
    }
    ionViewWillLeave() {
        this.textData = "";
    }
    compareLatLng(data, type) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            this.currOtp = '';
            this.showLoader = true;
            this.userLantLng = yield this.getUserGetLatLng();
            const storedLat = parseFloat(localStorage.getItem('Latt'));
            const storedLng = parseFloat(localStorage.getItem('Longg'));
            this.currKm = ((this.getDistanceFromLatLonInKm(this.userLantLng.latitude, this.userLantLng.longitude, storedLat, storedLng) * 100) / 100).toFixed(3);
            console.log(this.currKm);
            if (Number.isNaN(this.currKm) || this.currKm == 'NaN') {
                this.askToTurnOnGPS();
            }
            else if (this.currKm > 0.5) {
                this.latLongData = {
                    "records": {
                        "school_id": this.SchlId,
                        "user_name": this.UserName,
                        "latitude": this.userLantLng.latitude,
                        "longitude": this.userLantLng.longitude,
                        "km_diff": this.currKm,
                        "in_range_flag": 0
                    }
                };
                console.log(this.latLongData);
                this.userService.PostLogForLatLong(this.latLongData).subscribe(res => {
                });
                this.alertService.error("The selected School is more than 0.5 km, the km is : " + this.currKm + "");
            }
            else {
                this.latLongData = {
                    "records": {
                        "school_id": this.SchlId,
                        "user_name": this.UserName,
                        "latitude": this.userLantLng.latitude,
                        "longitude": this.userLantLng.longitude,
                        "km_diff": this.currKm,
                        "in_range_flag": 1
                    }
                };
                this.userService.PostLogForLatLong(this.latLongData).subscribe(res => {
                });
            }
            if (((_a = this.viewType) === null || _a === void 0 ? void 0 : _a.type) != 2) {
                this.MhtStulistGet2();
            }
            else {
                this.MhtStulistGet();
            }
            this.showLoader = false;
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
    getUserGetLatLng() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 10000,
                };
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position.coords);
                }, (error) => {
                    console.error("Error getting location:", error);
                }, options);
            });
        });
    }
    selectedSch(val) {
        debugger;
        this.schDetails = val;
        this.compareLatLng(val, 1);
        if (this.currKm <= 0.5) {
            if (!val.IndexId) {
            }
            else {
                this.gotoStdListPage(this.schDetails);
            }
        }
    }
    gotoStdListPage(center) {
        center.flag = this.flag;
        this.router.navigate(['/tabs/home'], { queryParams: { 'data': JSON.stringify(center) } });
    }
};
ClassStudentListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_12__.UploadService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__.Geolocation },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_5__.EmisService },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_7__.LocationAccuracy },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__.Diagnostic },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__.AndroidPermissions },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_13__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_16__.File },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__.UserSessionService },
    { type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_10__.PmoaService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService }
];
ClassStudentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-class-student-list',
        template: _raw_loader_class_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_class_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassStudentListPage);



/***/ }),

/***/ 40026:
/*!***************************************************************************!*\
  !*** ./src/app/pages/mht/class-student-list/class-student-list.page.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".totalNo {\n  font-size: 20px;\n  color: #68529c;\n  font-weight: 500;\n}\n\n.maindiv {\n  margin: 20px;\n  background-color: white;\n  padding: 15px;\n  border-radius: 15px;\n}\n\n.label {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.labelborder {\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  padding-left: 15px;\n}\n\n.labelborders {\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  padding-left: 15px;\n  margin-bottom: 15px;\n}\n\n.labeltwodiv {\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  padding-left: 15px;\n  margin-left: 24px;\n}\n\n.secondDiv {\n  text-align: center;\n  padding: 12px;\n  background-color: white;\n  border-radius: 12px;\n}\n\n.listDiv {\n  background-color: white;\n  border-radius: 12px;\n  padding: 10px;\n}\n\n.nodataDiv {\n  padding: 10px;\n}\n\n.stuntCard {\n  box-shadow: 0px 1px 3px grey !important;\n  border-left: 4px solid #68529c;\n  border-radius: 10px;\n}\n\n.yesNoLabel {\n  width: 100%;\n  padding: 6px;\n  padding-left: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.dropDown {\n  padding-right: 15px;\n  font-size: 15px;\n  margin: 15px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.footer-aln {\n  color: white;\n  background: #58B3BE;\n  font-size: 18px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 22px;\n}\n\n.footer-txt {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 19px;\n}\n\n.refStd {\n  background-color: rgba(255, 166, 0, 0.534);\n}\n\n.p5p {\n  padding: 5px;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.cancelIcon {\n  font-size: 1.5rem;\n  color: red;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.fileIcons {\n  font-size: 40px;\n  color: #343232;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLXN0dWRlbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0sseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSUw7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFBbUIsbUJBQUE7QUFNdkI7O0FBSkE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVFKOztBQUxBO0VBRUksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFPSjs7QUFMQTtFQUlJLGFBQUE7QUFLSjs7QUFIQTtFQUNJLHVDQUFBO0VBR0EsOEJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBRUssbUJBQUE7RUFDQSxlQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFHTDs7QUFEQztFQUNHLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREE7RUFDSSwwQ0FBQTtBQUlKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQURBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBREE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBSUEiLCJmaWxlIjoiY2xhc3Mtc3R1ZGVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbE5ve1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6cmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5tYWluZGl2e1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4ubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDo1MDBcclxufVxyXG4ubGFiZWxib3JkZXJ7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbi5sYWJlbGJvcmRlcnN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O21hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmxhYmVsdHdvZGl2e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMTgwLCAxODApOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxufVxyXG4uc2Vjb25kRGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzoxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxufVxyXG4ubGlzdERpdntcclxuICAgLy8gbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ubm9kYXRhRGl2e1xyXG4gICAgLy8gbWFyZ2luOiAyMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uc3R1bnRDYXJke1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggZ3JleSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgLy8gcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbn1cclxuXHJcbi55ZXNOb0xhYmVse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5kcm9wRG93bntcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2U2ZjNmZjtcclxuICAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAvLyAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgIG1hcmdpbjogMTVweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIH1cclxuIC5mb290ZXItYWxuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICM1OEIzQkU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvLyAvIHBhZGRpbmc6IDEwcHg7IC9cclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICB9XHJcbiAgLmZvb3Rlci10eHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG5cclxuLnJlZlN0ZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjUzNCk7XHJcbn1cclxuXHJcbi5wNXAge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYW5jZWxJY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgb3BhY2l0eTogMC41OyAgICAgICAgXHJcbiAgfVxyXG5cclxuLmN1cnNvci1wb2ludGVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsZUljb25zIHtcclxuZm9udC1zaXplOiA0MHB4O1xyXG5jb2xvcjogIzM0MzIzMjtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ 14460:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/class-student-list/class-student-list.page.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">Student List (AY {{acYear}})</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\">\r\n        </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n          <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <div class=\"maindiv\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-label class=\"label\">School</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"labelborders\">\r\n        <ion-label>{{SchName}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"this.viewType?.type != '2'\">\r\n      <ion-col size=\"12\">\r\n        <ion-label class=\"label\">Diagnosis</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"12\" class=\"labelborders\">\r\n        <ion-label>{{diagnosisLabel}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"this.viewType?.type == '2'\">\r\n      <ion-col size=\"6\">\r\n        <ion-label class=\"label\">Class</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label class=\"label\" *ngIf=\"acYear != '2023-24'\">Section</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"5.5\" class=\"labelborder\">\r\n        <ion-label>{{ClsID}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"5.5\" [class.labeltwodiv]=\"acYear != '2023-24'\">\r\n        <ion-label *ngIf=\"acYear != '2023-24'\">{{Sectn}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div class=\"maindiv\" *ngIf=\"this.acYear != '2023-24'\">\r\n    <form name=\"drtDeatails\" [formGroup]=\"drtDeatails\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-label class=\"label\">Name<span style=\"color: red;\"> *</span></ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"labelborders\" style=\"margin-bottom: 6px;\">\r\n          <ion-input formControlName=\"Dct_Name\" placeholder=\"Enter Your Name\" (ionBlur)=\"getMobileNo()\"></ion-input>\r\n        </ion-col>\r\n        <div class=\"formLine\" style=\"color:red; font-size: 16px !important;\r\n        padding-top: 5px;\">\r\n          {{(submittedDctName && drtDeatails.controls.Dct_Name.errors && (drtDeatails.controls.Dct_Name.dirty ||\r\n          drtDeatails.controls.Dct_Name.touched))&& drtDeatails.controls.Dct_Name.errors?.required ? 'Field is required'\r\n          : ''}}\r\n        </div>\r\n        <p class=\"error-message\" *ngIf=\"drtDeatails.controls.Dct_Name.errors?.pattern\">Please enter text only</p>\r\n        <ion-col size=\"12\">\r\n          <ion-label class=\"label\">Mobile No<span style=\"color: red;\"> *</span></ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"labelborder\" style=\"margin-bottom: 6px;\">\r\n          <ion-input type=\"tel\" maxLength=\"10\" formControlName=\"Mobile_No\" (ionInput)=\"countChange($event)\"\r\n            (ionBlur)=\"getMobileNo()\" placeholder=\"Enter Your Mobile No\"></ion-input>\r\n        </ion-col>\r\n        <div class=\"formLine\" style=\"color:red; font-size: 16px !important;\r\n        padding-top: 5px;\">\r\n          {{(submittedDctNo && drtDeatails.controls.Mobile_No.errors && (drtDeatails.controls.Mobile_No.dirty ||\r\n          drtDeatails.controls.Mobile_No.touched))&& drtDeatails.controls.Mobile_No.errors?.required ? 'Field is required' : ''}}\r\n        </div>\r\n        <p class=\"error-message\" *ngIf=\"drtDeatails.controls.Mobile_No.errors?.pattern\">Please enter valid number </p>\r\n      </ion-row>\r\n    </form>\r\n    <!-- <div class=\"mt-1\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"text-left\">\r\n          <ion-label class=\"label\">Kindly Upload Photo<span style=\"color: red;\"> *</span></ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"text-center\" *ngIf=\"!drtDeatails.value.visit_photo\">\r\n          <div>\r\n            <ion-icon name=\"camera\" class=\"fileIcons\" (click)=\"openCameraOn()\" [class.disabled]=\"currKm > 0.5 && currKm \"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"text-center\" [class.disabled]=\"currKm > 0.5 && currKm \">Camera</ion-label>\r\n        </ion-col>\r\n        <div *ngIf=\"drtDeatails.controls.visit_photo.errors && (submitted || drtDeatails.controls.visit_photo.touched)\">\r\n          <ion-text color=\"danger\" style=\"font-size: 10px;\">Field is required</ion-text>\r\n        </div>\r\n        <ion-col class=\"text-center\">\r\n          <div *ngIf=\"drtDeatails.value.visit_photo\"   style=\"margin-top: 5px;\">\r\n            <ion-button size=\"small\" style=\"margin-right: 5px;\" (click)=\"getUploadedFiles1(drtDeatails.value.visit_photo)\"\r\n            color=\"warning\">View Photo</ion-button>\r\n            <ion-icon name=\"close-circle-outline\" class=\"cancelIcon cursor-pointer\" *ngIf=\"drtDeatails.value.visit_photo\" (click)=\"deleteViewPhoto()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n  </div>\r\n\r\n\r\n\r\n  <div style=\"margin: 20px;background-color: white;border-radius: 10px;padding-bottom: 5px;\">\r\n    <div\r\n      style=\"padding: 5px;text-align: center;background-color: rgb(104, 82, 156);color: white;font-weight: bold;border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n      <ion-label>\r\n        Students List\r\n      </ion-label>\r\n    </div>\r\n    <ion-searchbar [(ngModel)]=\"textData\" (ionChange)=\"getStuListInSearch($event)\"></ion-searchbar>\r\n    <div *ngIf=\"studentList.length>0\" class=\"listDiv\" [class.disabled]=\"currKm > 0.5 && currKm \">\r\n      <ion-row *ngFor=\"let item of studentList; let i = index\">\r\n        <ion-col [size]=\"item.rbsk == 1 ? '10.6' : '12'\">\r\n          <ion-card class=\"stuntCard\" [class.refStd]=\"item.rbsk==1\">\r\n            <ion-row (click)=\"navigateToForm(item.StuId,item)\" class=\"p5p align-items-center\">\r\n              <ion-col size=\"10\" style=\"font-size: 14px;\">\r\n                <div style=\"margin-left: 10px;\">\r\n                  <ion-label style=\"color: black;\"><b>{{i+1}}.</b> {{item.StuNme}}\r\n                    <span *ngIf=\"(item.ComptStatus == '1' && acYear != '2023-24') || (item.outComeSts && acYear == '2023-24')\">\r\n                      <img style=\" margin-left: 5px;width: 8%\" src=\"../../../../../assets/icons/Tick.svg\">\r\n                    </span>\r\n                    <span *ngIf=\"item.LocalTick == '2'\">\r\n                      <img style=\" margin-left: 5px;width: 8%\" src=\"../../../../../assets/icons/orangeTick.svg\">\r\n                    </span>\r\n                  </ion-label>\r\n                </div>\r\n                <div style=\"margin-left: 10px;\">\r\n                  <ion-label>\r\n                    {{item.UniqId}}\r\n                  </ion-label>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"2\" style=\"text-align: center;\">\r\n                <div>\r\n                  <ion-icon name=\"arrow-forward\" style=\"color:rgb(104, 82, 156);zoom: 1.2;\"></ion-icon>\r\n\r\n                </div>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"1.4\" style=\"align-self: center;\" *ngIf=\"item.rbsk == 1\">\r\n          <div style=\"text-align: center;border-radius: 10px; \r\n    box-shadow: 0px 1px 3px grey; border-left: 4px solid rgb(104, 82, 156)\" \r\n    (click)=\"answerPageNavigate(item)\">\r\n            <img src=\"../../../../../assets/icons/Student_exam.svg\"\r\n              style=\"margin-top: 4px; margin-right: 4px; margin-bottom: 4px;\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div *ngIf=\"noData\" class=\"nodataDiv\">\r\n      <div style=\"text-align: center;font-size: 13px;\">\r\n        <ion-label>No Data Found</ion-label>\r\n      </div>\r\n    </div>\r\n   \r\n  </div>\r\n\r\n  <!-- <div style=\"margin: 20px;background-color: white;border-radius: 10px;padding-bottom: 5px;\">\r\n    <div\r\n      style=\"padding: 5px;text-align: center;background-color: rgb(104, 82, 156);color: white;font-weight: bold;border-top-left-radius: 10px; border-top-right-radius: 10px;\">\r\n      <ion-label>\r\n        Add Students\r\n      </ion-label>\r\n    </div>\r\n    <ion-item lines=\"none\" class=\"item-style\" class=\"dropDown\">\r\n      <ionic-selectable [(ngModel)]=\"sdntList\" placeholder=\"Select Students\" (onChange)=\"addSdntChange($event)\"\r\n        item-content itemValueField=\"StuId\" itemTextField=\"StuNme\" [items]=\"addStudentList\" [isMultiple]=\"true\"\r\n        [canSearch]=\"true\">\r\n      </ionic-selectable>\r\n    </ion-item>\r\n\r\n  </div> -->\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mht_class-student-list_class-student-list_module_ts-es2015.js.map