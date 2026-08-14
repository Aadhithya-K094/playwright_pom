(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_tracking-studetails_tracking-studetails_module_ts"],{

/***/ 48674:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails-routing.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingStudetailsPageRoutingModule": function() { return /* binding */ TrackingStudetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tracking_studetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracking-studetails.page */ 201);




const routes = [
    {
        path: '',
        component: _tracking_studetails_page__WEBPACK_IMPORTED_MODULE_0__.TrackingStudetailsPage
    }
];
let TrackingStudetailsPageRoutingModule = class TrackingStudetailsPageRoutingModule {
};
TrackingStudetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrackingStudetailsPageRoutingModule);



/***/ }),

/***/ 96846:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingStudetailsPageModule": function() { return /* binding */ TrackingStudetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tracking_studetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracking-studetails-routing.module */ 48674);
/* harmony import */ var _tracking_studetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracking-studetails.page */ 201);







let TrackingStudetailsPageModule = class TrackingStudetailsPageModule {
};
TrackingStudetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tracking_studetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackingStudetailsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tracking_studetails_page__WEBPACK_IMPORTED_MODULE_1__.TrackingStudetailsPage]
    })
], TrackingStudetailsPageModule);



/***/ }),

/***/ 201:
/*!****************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails.page.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingStudetailsPage": function() { return /* binding */ TrackingStudetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_tracking_studetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tracking-studetails.page.html */ 6436);
/* harmony import */ var _tracking_studetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracking-studetails.page.scss */ 94777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);


















let TrackingStudetailsPage = class TrackingStudetailsPage {
    constructor(router, formBuilder, platform, modalCtrl, activatedRoute, uploadService, camera, alertService, file, networkService, ionicstorage, sqliteDB, geolocation) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.activatedRoute = activatedRoute;
        this.uploadService = uploadService;
        this.camera = camera;
        this.alertService = alertService;
        this.file = file;
        this.networkService = networkService;
        this.ionicstorage = ionicstorage;
        this.sqliteDB = sqliteDB;
        this.geolocation = geolocation;
        this.studentdetail = [];
        this.imageData = "";
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe('en-US');
        this.getDetails = [];
        this.getFormattedTime();
    }
    ngOnInit() {
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        this.activatedRoute.queryParams.subscribe(params => {
            this.studentdetail = JSON.parse(params['studentdata']);
            this.getDetails = JSON.parse(params['getListDetails']);
            console.log(this.getDetails, "this.getDetails", this.studentdetail);
        });
    }
    ionViewDidEnter() {
        this.getFormattedTime();
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        this.activatedRoute.queryParams.subscribe(params => {
            this.studentdetail = JSON.parse(params['studentdata']);
            this.getDetails = JSON.parse(params['getListDetails']);
            console.log(this.getDetails, "this.getDetails", this.studentdetail);
        });
    }
    getLatLong() {
        return new Promise((resolve, reject) => {
            this.options = {
                maximumAge: 3000,
                enableHighAccuracy: true
            };
            this.geolocation.getCurrentPosition(this.options).then((pos) => {
                this.currentPos = pos;
                const location = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                    time: new Date(),
                };
                this.lat = location.lat;
                this.long = location.lng;
                resolve(pos);
            }, (err) => {
                reject(err.message);
            });
        });
    }
    openCameraOn() {
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: false,
        };
        this.platform.ready().then(() => {
            this.camera.getPicture(options).then((imageData) => {
                var bucketName = "renewalapplicationemis";
                let expiry = 300;
                let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");
                this.file.readAsDataURL(imagename, filename).then((base64string) => {
                    if (base64string) {
                        const base = base64string.split('base64,');
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_6__.base64StringToBlob)(base[1], 'image/jpg');
                        if (blob.size <= 3145728) {
                            if (this.currNetWrkSts == 0) {
                                this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                                    if (result) {
                                        this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                            this.cameraKey = result.key;
                                            this.viewPic('show', base64string);
                                            this.alertService.success('File Uploaded Successfully');
                                        });
                                    }
                                });
                            }
                            else {
                                let obj = { bucketName, ext: splitedImage[1], filename: splitedImage[0], expiry };
                                this.imageData = base;
                                this.test = obj;
                                this.beforephoto = base64string;
                                this.ionicstorage.insertData_Replace('beforephotolol', base64string);
                                this.viewPic('show', base64string);
                            }
                        }
                        else {
                            this.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                        }
                    }
                });
            }, (err) => {
                // Handle error
                console.log("LOG", err);
                alert("error " + JSON.stringify(err));
            });
        });
    }
    viewPic(fun, val) {
        if (this.currNetWrkSts == 0) {
            var bucketName = "renewalapplicationemis";
            var filename = this.cameraKey;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.imageData = result.url;
                    if (this.currNetWrkSts == 0) {
                        this.getFormattedTime();
                    }
                    if (fun == 'modal') {
                        const modal = yield this.modalCtrl.create({
                            component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__.ViewImagePage,
                            componentProps: { image: this.imageData },
                            cssClass: 'view-image-modal'
                        });
                        yield modal.present();
                    }
                }
                else {
                    this.alertService.error('Error in getting image file');
                }
            }));
        }
        else {
            this.imageData = val;
            this.getFormattedTime();
        }
    }
    getFormattedTime() {
        const day = new Date();
        this.todayDate = this.pipe.transform(day, 'dd/MM/yyyy');
        ;
        this.currentTime = {
            hours: day.getHours(),
            minutes: day.getMinutes(),
            seconds: day.getSeconds()
        };
        this.formattedTime =
            `${this.currentTime.hours.toString().padStart(2, '0')}:` +
                `${this.currentTime.minutes.toString().padStart(2, '0')}:` +
                `${this.currentTime.seconds.toString().padStart(2, '0')}`;
        this.getLatLong();
    }
    validateFields() {
        return this.imageData !== '' && this.imageData !== null && this.imageData !== undefined &&
            this.todayDate !== '' && this.todayDate !== null && this.todayDate !== undefined &&
            this.formattedTime !== '' && this.formattedTime !== null && this.formattedTime !== undefined;
    }
    question() {
        if (this.currNetWrkSts == 0) {
            // if(this.imageData !== '' && this.imageData !== null && this.imageData !== undefined){
            this.router.navigate(["/tabs/cwsn/tracking-question"], { queryParams: { 'studentdata': JSON.stringify(this.studentdetail),
                    'startTime': JSON.stringify(this.formattedTime),
                    'getdetails': JSON.stringify(this.getDetails),
                    // 'beforeImage':JSON.stringify(this.cameraKey),
                    'prev_lat': this.lat,
                    'prev_long': this.long } });
            // }
            // else{
            //   this.alertService.error('Please Take Photo Its Required');
            // }
        }
        else {
            this.notAllow = false;
            this.ionicstorage.getData('studentlistGet').then((dataa1) => {
                if (dataa1) {
                    this.studentchk = dataa1;
                    const day = new Date();
                    this.todayDate = this.pipe.transform(day, 'yyyy-MM-dd');
                    if (this.studentchk.length > 0) {
                        for (let i = 0; i < this.studentchk.length; i++) {
                            if (this.studentchk[i].id == this.studentdetail.id && this.studentchk[i].screening_date == this.todayDate) {
                                this.notAllow = true;
                            }
                        }
                        if (this.notAllow == true) {
                            this.alertService.error('Already Exists For This Date');
                        }
                        else {
                            // if(this.imageData !== '' && this.imageData !== null && this.imageData !== undefined){
                            this.router.navigate(["/tabs/cwsn/tracking-question"], { queryParams: { 'studentdata': JSON.stringify(this.studentdetail),
                                    'startTime': JSON.stringify(this.formattedTime),
                                    'getdetails': JSON.stringify(this.getDetails),
                                    // 'beforeImage':JSON.stringify(this.cameraKey),
                                    'prev_lat': this.lat,
                                    'prev_long': this.long } });
                            // }
                            // else{
                            //   this.alertService.error('Please Take Photo Its Required');
                            // }
                        }
                    }
                    console.log(this.studentdetail.id, "oppo");
                    console.log(this.studentchk, "chk daa", this.todayDate);
                }
                else {
                    // if(this.imageData !== '' && this.imageData !== null && this.imageData !== undefined){
                    this.router.navigate(["/tabs/cwsn/tracking-question"], { queryParams: { 'studentdata': JSON.stringify(this.studentdetail),
                            'startTime': JSON.stringify(this.formattedTime),
                            'getdetails': JSON.stringify(this.getDetails),
                            // 'beforeImage':JSON.stringify(this.cameraKey),
                            'prev_lat': this.lat,
                            'prev_long': this.long } });
                    // }
                    // else{
                    //   this.alertService.error('Please Take Photo Its Required');
                    // }
                }
            });
        }
    }
    goBack() {
        this.router.navigate(["/tabs/cwsn/tracking-stulist"]);
    }
};
TrackingStudetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_11__.SqlitedatabaseService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__.Geolocation }
];
TrackingStudetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-tracking-studetails',
        template: _raw_loader_tracking_studetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tracking_studetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrackingStudetailsPage);



/***/ }),

/***/ 94777:
/*!******************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-studetails/tracking-studetails.page.scss ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  padding: 10px;\n  background: var(--seconday-color-change);\n  margin-inline: 0px;\n  border-radius: 10px;\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .section, .card-align .class {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .section .section__value, .card-align .class .class__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.screen-date {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 15px;\n}\n\n.screen-date .text-color {\n  font-size: 15px;\n  color: var(--icon-color);\n  letter-spacing: 0.1px;\n}\n\n.screen-date .datepicker {\n  margin: 8px 0;\n  padding: 9px;\n  color: var(--primary-text-color);\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.form .form-group {\n  padding: 3px 20px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n\n.backGround {\n  background-color: #f9f9f9;\n}\n\n.image {\n  height: 100%;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLXN0dWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0Usa0NBQUE7QUFORjs7QUFTQTtFQUNFLCtCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBVUE7RUFDRSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBUEY7O0FBVUE7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQWhEUztFQWlEVCxpQkFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBWUE7RUFDRSxhQUFBO0VBQ0Usc0JBQUE7QUFUSjs7QUFXRTtFQUNFLGlCQUFBO0FBVEo7O0FBY0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFYSjs7QUFhRTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBWEo7O0FBY0U7RUFHRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBZEo7O0FBbUJBO0VBQ0UsNEJBQUE7QUFoQkY7O0FBeUJJO0VBQ0UsY0FBQTtFQUNBLGdCQWhHTztFQWlHUCxnQ0FwR087QUE4RWI7O0FBOEJLO0VBQ0UsY0FBQTtFQUNBLGdCQTNHTTtFQTRHTixnQ0FBQTtBQTVCUDs7QUFvQ0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBbENKOztBQW1DSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQWpDTjs7QUFrQ007RUFDRSxnQkE3SEs7RUE4SEwsZ0NBaklLO0FBaUdiOztBQWtDTTtFQUVFLGdDQXJJSztBQW9HYjs7QUFxQ0k7RUFDRSxxQkFBQTtBQW5DTjs7QUFvQ007RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFsQ1I7O0FBbUNRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBakNWOztBQXVDRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBcENKOztBQXVDRTtFQUNFLDBDQUFBO0VBQ0EsOENBQUE7QUFwQ0o7O0FBc0NFO0VBQ0UseUJBQUE7QUFuQ0o7O0FBcUNFO0VBRUUsWUFBQTtFQUNBLFVBQUE7QUFuQ0oiLCJmaWxlIjoidHJhY2tpbmctc3R1ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXJpYWJsZXNcclxuXHJcbiR0ZXh0LWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4kYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4kYXJyb3ctaWNvbi1jb2xvcjp2YXIoLS1pY29uLWNvbG9yKTtcclxuJGZvbnQtd2VpZ2h0OjUwMDtcclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQgOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgbWFyZ2luLWlubGluZTogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiBcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuJWNhcmQtbGF5b3V0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAxOHB4O1xyXG59XHJcblxyXG4lbGFiZWwtZGVzaWdue1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBwYWRkaW5nOiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tZGVzaWdue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuXHJcbi8vIGhlYWRlclxyXG4udGl0bGV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiBcclxuICAuc3R1TmFtZXtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnNjcmVlbi1kYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDAgMTVweDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQ7XHJcbiAgLnRleHQtY29sb3J7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLXByaW1hcnkpO1xyXG4gIH1cclxuICAuZGF0ZXBpY2tlcntcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMyMjIyMjI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgfVxyXG4gfVxyXG5cclxuLy8gIGlvbi1pbnB1dCBwYWRkaW5nXHJcbi5wYWRkaW5nLWxlZnR7XHJcbiAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbiAgLy8gY2xhc3MgYW5kIHNlY3Rpb25cclxuICAuY2FyZC1hbGlnbiB7XHJcbiAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAuY2xhc3N7XHJcbiAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLWRlc2lnbjtcclxuICAgIC5jbGFzcy10aXRsZXtcclxuICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIH1cclxuICAgIC5jbGFzc19fdmFsdWV7XHJcbiAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ247XHJcbiAgICB9XHJcbiAgIH1cclxuICAgLnNlY3Rpb257XHJcbiAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi1kZXNpZ247XHJcbiAgICAgLnNlY3Rpb24tdGl0bGV7XHJcbiAgICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICB9XHJcbiAgICAgLnNlY3Rpb25fX3ZhbHVle1xyXG4gICAgICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi12YWx1ZS1kZXNpZ247XHJcbiAgICAgfVxyXG4gICB9XHJcbiAgfVxyXG4gIC8vIGZvcm1cclxuICAuZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAuZm9ybS1ncm91cHtcclxuICAgICAgcGFkZGluZzogM3B4IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgLmZvcm0tZ3JvdXBfX3RpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWdyb3VwX192YWx1ZXtcclxuICAgICAgICBAZXh0ZW5kICVsYWJlbC1kZXNpZ247XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAuaWNvbi1iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDBweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG4gICAgICAgIC5hcnJvdy1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5jdXN0b21JY29uQmcge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiA4cHggNXB4IDBweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYmFja0dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksMjQ5LDI0OSk7XHJcbiAgfVxyXG4gIC5pbWFnZVxyXG4gIHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiJdfQ== */");

/***/ }),

/***/ 6436:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/tracking-studetails/tracking-studetails.page.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{studentdetail.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n \r\n  <ion-content>\r\n    <!-- <ion-grid> -->\r\n      <ion-card class=\"card-align form\">\r\n        <div class=\"form-group form-groupBtn\"> </div>\r\n        <div class=\"form-group\">\r\n          <ion-label class=\"form-group__title\">EMIS ID</ion-label>\r\n \r\n          <ion-card class=\"backGround\">\r\n            <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.id}}</ion-label>\r\n          </ion-card>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"form-group__title\">Class</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.class_studying_id}}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-label class=\"form-group__title\">Section</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.class_section}}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <ion-label class=\"form-group__title\">Disability Type</ion-label>\r\n \r\n          <ion-card class=\"backGround\">\r\n            <ion-label style=\"color: rgb(41, 39, 39);\">{{studentdetail.da_name}}</ion-label>\r\n          </ion-card>\r\n        </div>\r\n        <!-- <div class=\"mt-3 text-center pb-3\">\r\n          <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"openCameraOn()\">Take photo</ion-button>\r\n        </div> -->\r\n\r\n        <div class=\"form-group\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-label class=\"form-group__title\">Visited date</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{todayDate }}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"12\">\r\n              <ion-label class=\"form-group__title\">Start time</ion-label>\r\n \r\n              <ion-card class=\"backGround\">\r\n                <ion-label style=\"color: rgb(41, 39, 39);\">{{formattedTime}}</ion-label>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n       \r\n         <div class=\"form-group\">\r\n          <ion-row>\r\n            <ion-col size=\"5\" class=\"image\">\r\n              <img *ngIf=\"imageData != '' && imageData != null && imageData != undefined\" src=\"{{imageData}}\"\r\n              class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" >\r\n            </ion-col>\r\n            <!-- <ion-col size=\"7\">\r\n              <div>\r\n               <ion-label>Visited date:{{todayDate }}</ion-label>\r\n            </div>\r\n              <div>\r\n                <ion-label >Start time  :{{formattedTime}}</ion-label>\r\n              </div>\r\n            </ion-col> -->\r\n          </ion-row>\r\n         </div>\r\n      </ion-card>\r\n      <div class=\"mt-5 text-center pb-3\">\r\n        <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"question()\">Next</ion-button>\r\n\r\n        <!-- [disabled]=\"!validateFields()\" -->\r\n      </div>\r\n \r\n    <!-- </ion-grid> -->\r\n  </ion-content>\r\n \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_tracking-studetails_tracking-studetails_module_ts-es2015.js.map