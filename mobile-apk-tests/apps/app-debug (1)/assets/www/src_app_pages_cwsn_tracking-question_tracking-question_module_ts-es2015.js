(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_tracking-question_tracking-question_module_ts"],{

/***/ 89029:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-question/tracking-question-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingQuestionPageRoutingModule": function() { return /* binding */ TrackingQuestionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tracking_question_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracking-question.page */ 52549);




const routes = [
    {
        path: '',
        component: _tracking_question_page__WEBPACK_IMPORTED_MODULE_0__.TrackingQuestionPage
    }
];
let TrackingQuestionPageRoutingModule = class TrackingQuestionPageRoutingModule {
};
TrackingQuestionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrackingQuestionPageRoutingModule);



/***/ }),

/***/ 36653:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-question/tracking-question.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingQuestionPageModule": function() { return /* binding */ TrackingQuestionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tracking_question_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracking-question-routing.module */ 89029);
/* harmony import */ var _tracking_question_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracking-question.page */ 52549);







let TrackingQuestionPageModule = class TrackingQuestionPageModule {
};
TrackingQuestionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tracking_question_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrackingQuestionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_tracking_question_page__WEBPACK_IMPORTED_MODULE_1__.TrackingQuestionPage]
    })
], TrackingQuestionPageModule);



/***/ }),

/***/ 52549:
/*!************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-question/tracking-question.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackingQuestionPage": function() { return /* binding */ TrackingQuestionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_tracking_question_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tracking-question.page.html */ 15504);
/* harmony import */ var _tracking_question_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracking-question.page.scss */ 11557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! blob-util */ 1230);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/network-service */ 34442);



















let TrackingQuestionPage = class TrackingQuestionPage {
    constructor(router, activatedRoute, cwsnService, uploadService, modalCtrl, alertService, platform, formBuilder, camera, file, geolocation, ionicstorage, networkService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cwsnService = cwsnService;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.platform = platform;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.file = file;
        this.geolocation = geolocation;
        this.ionicstorage = ionicstorage;
        this.networkService = networkService;
        this.imageData = "";
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe('en-US');
    }
    ngOnInit() {
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        this.activatedRoute.queryParams.subscribe(params => {
            this.studentdetail = JSON.parse(params['studentdata']);
            this.startTime = JSON.parse(params['startTime']);
            this.getDetails = JSON.parse(params['getdetails']);
            this.prev_lat = JSON.parse(params['prev_lat']);
            this.prev_long = JSON.parse(params['prev_long']);
            if (this.currNetWrkSts == 0) {
                this.beforeImg = JSON.parse(params['beforeImage']);
            }
            else {
                this.ionicstorage.getData('beforephotolol').then((dataa1) => {
                    if (dataa1) {
                        this.beforeImglocal = dataa1;
                    }
                });
            }
        });
        this.form = this.formBuilder.group({
            trackQue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
            trackQue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
            trackQue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')])
        });
        if (this.startTime) {
            this.getFormattedTime();
        }
        this.ionicstorage.getData('studentlistGet').then((dataa1) => {
            if (dataa1) {
                console.log(dataa1, "final");
            }
        });
    }
    ionViewDidEnter() {
        this.getFormattedTime();
        this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
        this.activatedRoute.queryParams.subscribe(params => {
            this.studentdetail = JSON.parse(params['studentdata']);
            this.startTime = JSON.parse(params['startTime']);
            this.getDetails = JSON.parse(params['getdetails']);
            this.prev_lat = JSON.parse(params['prev_lat']);
            this.prev_long = JSON.parse(params['prev_long']);
            if (this.currNetWrkSts == 0) {
                this.beforeImg = JSON.parse(params['beforeImage']);
            }
            else {
                this.ionicstorage.getData('beforephotolol').then((dataa1) => {
                    if (dataa1) {
                        this.beforeImglocal = dataa1;
                    }
                });
            }
        });
        this.form = this.formBuilder.group({
            trackQue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
            trackQue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')]),
            trackQue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern('[a-zA-Z ]*')])
        });
        if (this.startTime) {
            this.getFormattedTime();
        }
        this.ionicstorage.getData('studentlistGet').then((dataa1) => {
            if (dataa1) {
                console.log(dataa1, "final");
            }
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
                                this.afterphoto = base64string;
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
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.imageData = result.url;
                    this.getFormattedTime();
                    console.log(this.imageData, "test2", result);
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
        this.todayDate = this.pipe.transform(day, 'yyyy-MM-dd');
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
        if (this.formattedTime) {
            let data = this.formattedTime - this.startTime;
            let diff = moment__WEBPACK_IMPORTED_MODULE_9___default()(this.formattedTime, 'HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_9___default()(this.startTime, 'HH:mm:ss'));
            let d = moment__WEBPACK_IMPORTED_MODULE_9___default().duration(diff);
            let hours = Math.floor(d.asHours());
            let minutes = moment__WEBPACK_IMPORTED_MODULE_9___default().utc(diff).format("mm");
            let sec = moment__WEBPACK_IMPORTED_MODULE_9___default().utc(diff).format("ss");
            this.durationCal = hours + ":" + minutes + ":" + sec;
            console.log(this.durationCal, "iiii");
        }
        this.getLatLong();
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
    goBack() {
        this.router.navigate(["/tabs/cwsn/tracking-studetails"]);
    }
    submit() {
        if (this.form.value.trackQue1 == '' && this.form.value.trackQue2 == '' && this.form.value.trackQue3 == '') {
            this.alertService.error('Please enter anyone of the fields');
        }
        else {
            if (this.currNetWrkSts == 0) {
                this.dataobj = [];
                let obj = {
                    IndxId: "",
                    SchlId: this.studentdetail.school_id,
                    StdntId: this.studentdetail.id,
                    DisableType: this.studentdetail.differently_abled,
                    ScrnDate: this.todayDate,
                    BeforePhoto: this.beforeImg,
                    BeforeLong: this.prev_long,
                    BeforeLati: this.prev_lat,
                    AfterPhoto: this.cameraKey,
                    AfterLong: this.lat,
                    AftereLati: this.long,
                    StartTime: this.startTime,
                    EndTime: this.formattedTime,
                    Duration: this.durationCal,
                    Ques1: this.form.value.trackQue1,
                    Ques2: this.form.value.trackQue2,
                    Ques3: this.form.value.trackQue3
                };
                // if(this.imageData != '' && this.imageData != null && this.imageData != undefined){
                this.dataobj.push(obj);
                let data = {
                    "records": this.dataobj
                };
                this.cwsnService.trackingQues(data).subscribe(data => {
                    if (data.dataStatus == true) {
                        this.alertService.success(data.message);
                        this.router.navigate(["/tabs/cwsn/tracking-school-list"]);
                    }
                    else {
                        this.alertService.error(data.message);
                    }
                });
                // }
                // else{
                //   this.alertService.error('Please Take Photo Its Required')
                // }
            }
            else {
                this.studentList = [];
                this.ionicstorage.getData('studentlistGet').then((dataa1) => {
                    if (dataa1) {
                        this.studentList = dataa1;
                        if (this.studentList.length > 0) {
                            let indx = this.studentList.length + 1;
                            let obj = {
                                id: this.studentdetail.id,
                                school_id: this.studentdetail.school_id,
                                user_id: this.studentdetail.user_id,
                                differently_abled: this.studentdetail.differently_abled,
                                screening_date: this.todayDate,
                                before_screening_photo: this.beforeImglocal,
                                longitude_before_screening: "",
                                latitude_before_screening: "",
                                after_screening_photo: this.afterphoto,
                                longitude_after_screening: "",
                                latitude_after_screening: "",
                                start_time: this.startTime,
                                end_time: this.formattedTime,
                                duration_intervention: this.durationCal,
                                question1: this.form.value.trackQue1,
                                question2: this.form.value.trackQue2,
                                question3: this.form.value.trackQue3,
                                school_name: this.studentdetail.school_name,
                                school_type_id: this.studentdetail.school_type_id,
                                udise_code: this.studentdetail.udise_code,
                                Status: 2
                            };
                            // if(this.afterphoto != '' && this.afterphoto != null && this.afterphoto != undefined && obj){
                            this.studentList.push(obj);
                            this.ionicstorage.insertData_Replace('studentlistGet', this.studentList);
                            console.log(this.studentList, "finn");
                            this.alertService.success('Data Stored Locally');
                            this.router.navigate(["/tabs/cwsn/tracking-school-list"]);
                            // }
                            // else{
                            //   this.alertService.error('Please Take Photo Its Required')
                            // }
                        }
                        else {
                            let obj = {
                                id: this.studentdetail.id,
                                school_id: this.studentdetail.school_id,
                                user_id: this.studentdetail.user_id,
                                differently_abled: this.studentdetail.differently_abled,
                                screening_date: this.todayDate,
                                before_screening_photo: this.beforeImglocal,
                                longitude_before_screening: "",
                                latitude_before_screening: "",
                                after_screening_photo: this.afterphoto,
                                longitude_after_screening: "",
                                latitude_after_screening: "",
                                start_time: this.startTime,
                                end_time: this.formattedTime,
                                duration_intervention: this.durationCal,
                                question1: this.form.value.trackQue1,
                                question2: this.form.value.trackQue2,
                                question3: this.form.value.trackQue3,
                                school_name: this.studentdetail.school_name,
                                school_type_id: this.studentdetail.school_type_id,
                                udise_code: this.studentdetail.udise_code,
                                Status: 2
                            };
                            // if(this.afterphoto != '' && this.afterphoto != null && this.afterphoto != undefined && obj){
                            this.studentList.push(obj);
                            this.ionicstorage.insertData_Replace('studentlistGet', this.studentList);
                            console.log(this.studentList, "finn2");
                            this.alertService.success('Data Stored Locally');
                            this.router.navigate(["/tabs/cwsn/tracking-school-list"]);
                            // }
                            // else{
                            //   this.alertService.error('Please Take Photo Its Required')
                            // }
                        }
                    }
                    else {
                        let obj = {
                            id: this.studentdetail.id,
                            school_id: this.studentdetail.school_id,
                            user_id: this.studentdetail.user_id,
                            differently_abled: this.studentdetail.differently_abled,
                            screening_date: this.todayDate,
                            before_screening_photo: this.beforeImglocal,
                            longitude_before_screening: "",
                            latitude_before_screening: "",
                            after_screening_photo: this.afterphoto,
                            longitude_after_screening: "",
                            latitude_after_screening: "",
                            start_time: this.startTime,
                            end_time: this.formattedTime,
                            duration_intervention: this.durationCal,
                            question1: this.form.value.trackQue1,
                            question2: this.form.value.trackQue2,
                            question3: this.form.value.trackQue3,
                            school_name: this.studentdetail.school_name,
                            school_type_id: this.studentdetail.school_type_id,
                            udise_code: this.studentdetail.udise_code,
                            Status: 2
                        };
                        // if(this.afterphoto != '' && this.afterphoto != null && this.afterphoto != undefined && obj){
                        this.studentList.push(obj);
                        this.ionicstorage.insertData_Replace('studentlistGet', this.studentList);
                        console.log(this.studentList, "finn2");
                        this.alertService.success('Data Stored Locally');
                        this.router.navigate(["/tabs/cwsn/tracking-school-list"]);
                        // }
                        // else{
                        //   this.alertService.error('Please Take Photo Its Required')
                        // }
                    }
                });
            }
        }
    }
};
TrackingQuestionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_8__.CWSNService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__.Geolocation },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_11__.IonicStorageService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__.NetworkService }
];
TrackingQuestionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-tracking-question',
        template: _raw_loader_tracking_question_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tracking_question_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrackingQuestionPage);



/***/ }),

/***/ 11557:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cwsn/tracking-question/tracking-question.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  width: 90%;\n  margin-left: 20px;\n  border-radius: 20px;\n}\n\n.content {\n  font-size: smaller;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .section, .card-align .class {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .section .section__value, .card-align .class .class__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group {\n  padding: -1px 10px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n\n.number {\n  margin-top: 20px;\n}\n\n.image {\n  height: 100%;\n  width: 90%;\n}\n\n.text {\n  font-size: small;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  padding: 10px;\n  background: var(--seconday-color-change);\n  margin-inline: 0px;\n  border-radius: 10px;\n}\n\nion-grid {\n  padding: 0;\n}\n\n.card-align {\n  border-radius: 10px;\n  margin: 18px;\n}\n\n.form .form-group .form-group__value {\n  border: 1px solid var(--primary-text-color);\n  margin: 8px 0;\n  padding: 9px;\n  border-radius: 10px;\n}\n\n.card-align .class, .card-align .section {\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 10px;\n}\n\n.card-align .class .class__value, .card-align .section .section__value {\n  border: 1px solid var(--primary-text-color);\n  width: 100%;\n  border-radius: 10px;\n  color: var(--primary-text-color);\n  padding: 5px 10px;\n  font-size: 0.8rem;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n}\n\n.title .stuName {\n  font-size: 0.9rem;\n}\n\n.screen-date {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 15px;\n}\n\n.screen-date .text-color {\n  font-size: 15px;\n  color: var(--icon-color);\n  letter-spacing: 0.1px;\n}\n\n.screen-date .datepicker {\n  margin: 8px 0;\n  padding: 9px;\n  color: var(--primary-text-color);\n}\n\n.padding-left {\n  padding-left: 9px !important;\n}\n\n.card-align .class .class-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .section .section-title {\n  padding: 6px 0;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group {\n  padding: 3px 20px;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.form .form-group .form-group__title {\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.form .form-group .form-group__value {\n  color: var(--primary-text-color);\n}\n\n.form .form-group:nth-child(1) {\n  align-items: flex-end;\n}\n\n.form .form-group:nth-child(1) .icon-background {\n  background: var(--icon-color);\n  padding: 5px 5px 0px 5px;\n  border-radius: 25%;\n}\n\n.form .form-group:nth-child(1) .icon-background .arrow-icon {\n  color: var(--seconday-color-change);\n  font-size: 20px;\n}\n\n.customIconBg {\n  background: var(--icon-color);\n  padding: 8px 5px 0px 8px;\n  border-radius: 25%;\n  color: var(--seconday-color-change);\n}\n\nion-button {\n  --background: var(--icon-color) !important;\n  color: var(--seconday-color-change) !important;\n}\n\n.backGround {\n  background-color: #f9f9f9;\n}\n\n.image {\n  height: 100%;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNraW5nLXF1ZXN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLFVBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQWNBO0VBQ0Usa0NBQUE7QUFYRjs7QUFjQTtFQUNFLCtCQUFBO0FBWEY7O0FBY0E7RUFDRSx3Q0FBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtBQVhGOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVhGOztBQWNBO0VBQ0ksMkNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0E1Q1M7RUE2Q1QsaUJBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWdCQTtFQUNFLGFBQUE7RUFDRSxzQkFBQTtBQWJKOztBQWdCRTtFQUNFLGlCQUFBO0FBZEo7O0FBc0JBO0VBQ0UsNEJBQUE7QUFuQkY7O0FBMkJJO0VBQ0UsY0FBQTtFQUNBLGdCQXpFTztFQTBFUCxnQ0E3RU87QUFxRGI7O0FBZ0NLO0VBQ0UsY0FBQTtFQUNBLGdCQXBGTTtFQXFGTixnQ0FBQTtBQTlCUDs7QUF5Q0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUF2Q047O0FBd0NNO0VBQ0UsZ0JBdEdLO0VBdUdMLGdDQTFHSztBQW9FYjs7QUF3Q007RUFFRSxnQ0E5R0s7QUF1RWI7O0FBMkNJO0VBQ0UscUJBQUE7QUF6Q047O0FBMENNO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBeENSOztBQXlDUTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQXZDVjs7QUE2Q0U7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQTFDSjs7QUE2Q0U7RUFDRSwwQ0FBQTtFQUNBLDhDQUFBO0FBMUNKOztBQTRDQTtFQUNJLGdCQUFBO0FBekNKOztBQTJDQTtFQUVFLFlBQUE7RUFDQSxVQUFBO0FBekNGOztBQTJDQTtFQUNFLGdCQUFBO0FBeENGOztBQW1EQTtFQUNFLGtDQUFBO0FBaERGOztBQW1EQTtFQUNFLCtCQUFBO0FBaERGOztBQW1EQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFoREY7O0FBb0RBO0VBQ0UsVUFBQTtBQWpERjs7QUFvREE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFqREY7O0FBb0RBO0VBQ0UsMkNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBakRGOztBQW9EQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQWpERjs7QUFvREE7RUFDSSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQWhEUztFQWlEVCxpQkFBQTtFQUNBLGlCQUFBO0FBakRKOztBQXNEQTtFQUNFLGFBQUE7RUFDRSxzQkFBQTtBQW5ESjs7QUFxREU7RUFDRSxpQkFBQTtBQW5ESjs7QUF3REE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFyREo7O0FBdURFO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFyREo7O0FBd0RFO0VBR0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQXhESjs7QUE2REE7RUFDRSw0QkFBQTtBQTFERjs7QUFtRUk7RUFDRSxjQUFBO0VBQ0EsZ0JBaEdPO0VBaUdQLGdDQXBHTztBQW9DYjs7QUF3RUs7RUFDRSxjQUFBO0VBQ0EsZ0JBM0dNO0VBNEdOLGdDQUFBO0FBdEVQOztBQWlGSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQS9FTjs7QUFnRk07RUFDRSxnQkE3SEs7RUE4SEwsZ0NBaklLO0FBbURiOztBQWdGTTtFQUVFLGdDQXJJSztBQXNEYjs7QUFtRkk7RUFDRSxxQkFBQTtBQWpGTjs7QUFrRk07RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFoRlI7O0FBaUZRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FBL0VWOztBQXFGRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0FBbEZKOztBQXFGRTtFQUNFLDBDQUFBO0VBQ0EsOENBQUE7QUFsRko7O0FBb0ZFO0VBQ0UseUJBQUE7QUFqRko7O0FBbUZFO0VBRUUsWUFBQTtFQUNBLFVBQUE7QUFqRkoiLCJmaWxlIjoidHJhY2tpbmctcXVlc3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRcclxue1xyXG4gICAgLy8gaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHggO1xyXG5cclxufVxyXG4uY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLy8gdmFyaWFibGVzXHJcblxyXG4kdGV4dC1jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuJGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuJGFycm93LWljb24tY29sb3I6dmFyKC0taWNvbi1jb2xvcik7XHJcbiRmb250LXdlaWdodDo1MDA7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbmlvbi1ncmlke1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiVjYXJkLWxheW91dHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMThweDtcclxufVxyXG5cclxuJWxhYmVsLWRlc2lnbntcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWRlc2lnbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tdmFsdWUtZGVzaWdue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcblxyXG4vLyBoZWFkZXJcclxuLnRpdGxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC5wYWdlLXRpdGxle1xyXG4gIH1cclxuICAuc3R1TmFtZXtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyAgaW9uLWlucHV0IHBhZGRpbmdcclxuLnBhZGRpbmctbGVmdHtcclxuICBwYWRkaW5nLWxlZnQ6IDlweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gIC8vIGNsYXNzIGFuZCBzZWN0aW9uXHJcbiAgLmNhcmQtYWxpZ24ge1xyXG4gICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuICAgLmNsYXNze1xyXG4gICAgQGV4dGVuZCAlY2xhc3Mtc2VjdGlvbi1kZXNpZ247XHJcbiAgICAuY2xhc3MtdGl0bGV7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xyXG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICB9XHJcbiAgICAuY2xhc3NfX3ZhbHVle1xyXG4gICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tdmFsdWUtZGVzaWduO1xyXG4gICAgfVxyXG4gICB9XHJcbiAgIC5zZWN0aW9ue1xyXG4gICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tZGVzaWduO1xyXG4gICAgIC5zZWN0aW9uLXRpdGxle1xyXG4gICAgICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xyXG4gICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgfVxyXG4gICAgIC5zZWN0aW9uX192YWx1ZXtcclxuICAgICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tdmFsdWUtZGVzaWduO1xyXG4gICAgIH1cclxuICAgfVxyXG4gIH1cclxuICAvLyBmb3JtXHJcbiAgLmZvcm17XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgIHBhZGRpbmc6IC0xcHggMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAuZm9ybS1ncm91cF9fdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tZ3JvdXBfX3ZhbHVle1xyXG4gICAgICAgIEBleHRlbmQgJWxhYmVsLWRlc2lnbjtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncm91cDpudGgtY2hpbGQoMSkge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC5pY29uLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLmN1c3RvbUljb25CZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDhweCA1cHggMHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4ubnVtYmVye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW1hZ2Vcclxue1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDo5MCU7XHJcbn1cclxuLnRleHR7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuXHJcbi8vIHZhcmlhYmxlc1xyXG5cclxuJHRleHQtY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiRhcnJvdy1pY29uLWNvbG9yOnZhcigtLWljb24tY29sb3IpO1xyXG4kZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICBtYXJnaW4taW5saW5lOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIFxyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4lY2FyZC1sYXlvdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDE4cHg7XHJcbn1cclxuXHJcbiVsYWJlbC1kZXNpZ257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIHBhZGRpbmc6IDlweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi1kZXNpZ257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG5cclxuLy8gaGVhZGVyXHJcbi50aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIFxyXG4gIC5zdHVOYW1le1xyXG4gICAgZm9udC1zaXplOiAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uc2NyZWVuLWRhdGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZDtcclxuICAudGV4dC1jb2xvcntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcclxuICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tcHJpbWFyeSk7XHJcbiAgfVxyXG4gIC5kYXRlcGlja2Vye1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzIyMjIyMjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiB9XHJcblxyXG4vLyAgaW9uLWlucHV0IHBhZGRpbmdcclxuLnBhZGRpbmctbGVmdHtcclxuICBwYWRkaW5nLWxlZnQ6IDlweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuICAvLyBjbGFzcyBhbmQgc2VjdGlvblxyXG4gIC5jYXJkLWFsaWduIHtcclxuICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgIC5jbGFzc3tcclxuICAgIEBleHRlbmQgJWNsYXNzLXNlY3Rpb24tZGVzaWduO1xyXG4gICAgLmNsYXNzLXRpdGxle1xyXG4gICAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLmNsYXNzX192YWx1ZXtcclxuICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbjtcclxuICAgIH1cclxuICAgfVxyXG4gICAuc2VjdGlvbntcclxuICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLWRlc2lnbjtcclxuICAgICAuc2VjdGlvbi10aXRsZXtcclxuICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgIH1cclxuICAgICAuc2VjdGlvbl9fdmFsdWV7XHJcbiAgICAgICBAZXh0ZW5kICVjbGFzcy1zZWN0aW9uLXZhbHVlLWRlc2lnbjtcclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgLy8gZm9ybVxyXG4gIC5mb3Jte1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAuZm9ybS1ncm91cF9fdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tZ3JvdXBfX3ZhbHVle1xyXG4gICAgICAgIEBleHRlbmQgJWxhYmVsLWRlc2lnbjtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ncm91cDpudGgtY2hpbGQoMSkge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIC5pY29uLWJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgICAgLmFycm93LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgLmN1c3RvbUljb25CZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDhweCA1cHggMHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5iYWNrR3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwyNDksMjQ5KTtcclxuICB9XHJcbiAgLmltYWdlXHJcbiAge1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgfVxyXG4gIFxyXG4iXX0= */");

/***/ }),

/***/ 15504:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/tracking-question/tracking-question.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n   \r\n      <ion-title class=\"pt-15\">{{studentdetail.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n  <ion-card class=\"card\">\r\n  <ion-card-content class=\"content\">\r\n    <!-- <div  class=\"label\">\r\n    <ion-label><b>Intervention given during visit:</b></ion-label>\r\n  </div> -->\r\n    <form class=\"form\" [formGroup]=\"form\">\r\n      <div class=\"form-group form-groupBtn\"> \r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\" style=\"margin-left: -50%;\">Intervention given during visit</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n       </div>\r\n     <div class=\"form-group\">\r\n        <ion-row>\r\n        <ion-col size=\"0.5\" class=\"number\">\r\n        <ion-label class=\"form-group__title\">1</ion-label>\r\n        </ion-col>\r\n      <ion-col size=\"10\">\r\n        <ion-input class=\"form-group__value padding-left\" formControlName=\"trackQue1\" maxlemgth=\"50\"></ion-input>\r\n        <!-- <p class=\"error-message\" style=\"color: red;\"\r\n        *ngIf=\"(form.controls['trackQue1'].hasError('pattern')) && (submitted || form.controls['trackQue1'].dirty || form.controls['trackQue1'].touched)\">\r\n         pattern required </p> -->\r\n      </ion-col>\r\n      </ion-row>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <ion-row>\r\n          <ion-col size=\"0.5\" class=\"number\">\r\n          <ion-label class=\"form-group__title\">2</ion-label>\r\n          </ion-col>\r\n        <ion-col size=\"10\">\r\n          <ion-input class=\"form-group__value padding-left\" formControlName=\"trackQue2\"  maxlemgth=\"50\"></ion-input>\r\n          <!-- <p class=\"error-message\" style=\"color: red;\"\r\n          *ngIf=\"(form.controls['trackQue2'].hasError('pattern')) && (submitted || form.controls['trackQue2'].dirty || form.controls['trackQue2'].touched)\">\r\n           pattern required </p> -->\r\n        </ion-col>\r\n        </ion-row>\r\n    </div>\r\n      <div class=\"form-group\">\r\n        <ion-row>\r\n          <ion-col size=\"0.5\" class=\"number\" >\r\n          <ion-label class=\"form-group__title\">3</ion-label>\r\n          </ion-col>\r\n        <ion-col size=\"10\">\r\n          <ion-input class=\"form-group__value padding-left\" formControlName=\"trackQue3\"  maxlemgth=\"50\" ></ion-input>\r\n           <!-- <p class=\"error-message\" style=\"color: red;\"\r\n          *ngIf=\"(form.controls['trackQue3'].hasError('pattern')) && (submitted || form.controls['trackQue3'].dirty || form.controls['trackQue3'].touched)\">\r\n           pattern required </p> -->\r\n        </ion-col>\r\n        </ion-row>\r\n      </div>\r\n   \r\n        <!-- <div class=\"mt-3 text-center pb-3\">\r\n            <ion-button  class=\"btn_lightRed border-0 rounded-0\" (click)=\"openCameraOn()\">Take photo</ion-button>\r\n       </div> -->\r\n\r\n       <div class=\"form-group\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">Visited date</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{todayDate | date: 'dd/MM/yyyy'}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">Start time</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{startTime}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">End time</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{formattedTime}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-label class=\"form-group__title\">Duration</ion-label>\r\n\r\n            <ion-card class=\"backGround\">\r\n              <ion-label style=\"color: rgb(41, 39, 39);\">{{durationCal}}</ion-label>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n       <div class=\"form-group\">\r\n        <ion-row>\r\n          <!-- <ion-col size=\"5\" class=\"image\">\r\n            <img *ngIf=\"imageData != '' && imageData != null && imageData != undefined\" src=\"{{imageData}}\"\r\n              class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" >\r\n      </ion-col> -->\r\n      <!-- <ion-col size=\"7\" class=\"text\">\r\n        <div >\r\n       <ion-label>Visited date:{{todayDate }}</ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-label>Start time  :{{startTime}}</ion-label>\r\n       </div>\r\n      <div>\r\n       <ion-label>End time     :{{formattedTime}}</ion-label>\r\n      </div>\r\n      <div>\r\n        <ion-label>Duration    :{{durationCal}}</ion-label>\r\n       </div>\r\n      </ion-col> -->\r\n      </ion-row>\r\n        </div>\r\n   \r\n   </form>\r\n  </ion-card-content>\r\n</ion-card>\r\n<div class=\"mt-5 text-center pb-3\">\r\n  <ion-button  class=\"btn_lightRed border-0 rounded-0\" (click)=\"submit()\">submit</ion-button>\r\n </div>\r\n</ion-content>\r\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_tracking-question_tracking-question_module_ts-es2015.js.map