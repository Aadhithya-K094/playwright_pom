(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_session-summary_session-summary_module_ts"],{

/***/ 96475:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-summary/session-summary-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionSummaryPageRoutingModule": function() { return /* binding */ SessionSummaryPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _session_summary_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-summary.page */ 48003);




const routes = [
    {
        path: '',
        component: _session_summary_page__WEBPACK_IMPORTED_MODULE_0__.SessionSummaryPage
    }
];
let SessionSummaryPageRoutingModule = class SessionSummaryPageRoutingModule {
};
SessionSummaryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SessionSummaryPageRoutingModule);



/***/ }),

/***/ 79457:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-summary/session-summary.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionSummaryPageModule": function() { return /* binding */ SessionSummaryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _session_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-summary-routing.module */ 96475);
/* harmony import */ var _session_summary_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-summary.page */ 48003);







let SessionSummaryPageModule = class SessionSummaryPageModule {
};
SessionSummaryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _session_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.SessionSummaryPageRoutingModule
        ],
        declarations: [_session_summary_page__WEBPACK_IMPORTED_MODULE_1__.SessionSummaryPage]
    })
], SessionSummaryPageModule);



/***/ }),

/***/ 48003:
/*!***************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-summary/session-summary.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionSummaryPage": function() { return /* binding */ SessionSummaryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_session_summary_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./session-summary.page.html */ 85967);
/* harmony import */ var _session_summary_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-summary.page.scss */ 44774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 58086);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! blob-util */ 1230);















let SessionSummaryPage = class SessionSummaryPage {
    constructor(router, userSessionService, eRef, uploadService, renderer, route, file, platform, camera, emisService, alertService, modalCtrl) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.eRef = eRef;
        this.uploadService = uploadService;
        this.renderer = renderer;
        this.route = route;
        this.file = file;
        this.platform = platform;
        this.camera = camera;
        this.emisService = emisService;
        this.alertService = alertService;
        this.modalCtrl = modalCtrl;
        this.summaryHide = true;
        this.value = null;
        this.submitAllowFile = false;
        this.emisName = this.userSessionService.emis_username();
        let currentDate = new Date();
        var date = currentDate.getDate();
        this.curr_month = currentDate.getMonth() + 1;
        // var weekOfMonth = Math.ceil((date - 1 - this.day) / 7);
        var weekOfMonth = (0 | currentDate.getDate() / 7) + 1;
        this.week = weekOfMonth;
    }
    ngOnInit() {
        this.stars = [0, 1, 2, 3, 4];
        this.messages = [];
    }
    setRating(rating, val) {
        this.studIndex = val;
        val = val + 1;
        let oldVal = rating;
        this.value = oldVal + 1;
        this.ratingText = this.messages[rating] ? this.messages[rating] : undefined;
        // SVG STAR & DOM STUFF
        const svgs = this.eRef.nativeElement.querySelectorAll('svg.star');
        let i = 0;
        if (val > 1) {
            var test = val - 1;
            i = test * 5;
            rating = i + rating;
        }
        if (val) {
            val = val * 5;
        }
        for (let j = svgs.length; i < j; i++) {
            if (i <= rating) {
                this.renderer.addClass(svgs[i], 'active');
            }
            else if (i > rating && i <= val) {
                console.log(i, rating, val);
                if (i < val) {
                    this.renderer.removeClass(svgs[i], 'active');
                }
            }
            else {
            }
        }
        if (svgs) {
            let stargreatercheck = val - 1;
            let starsmallercheck = stargreatercheck - 5;
            if (starsmallercheck == -1) {
                starsmallercheck = 0;
            }
            else {
                starsmallercheck = starsmallercheck + 1;
            }
            if (starsmallercheck >= 0) {
                this.addCount = 0;
                for (starsmallercheck; starsmallercheck <= stargreatercheck; starsmallercheck++) {
                    if (svgs[starsmallercheck].classList.value == 'star active') {
                        var count = 1;
                    }
                    else {
                        var count = 0;
                    }
                    this.addCount = this.addCount + count;
                }
                this.studentDetails[this.studIndex].ratings = this.addCount;
                console.log(this.studentDetails, "final");
            }
        }
    }
    ionViewDidEnter() {
        if (this.image1 && this.image2 && this.image3) {
            this.submitAllowFile = true;
        }
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.route.queryParams.subscribe((params) => {
            this.dataParam = JSON.parse(params['data']);
            this.studentDetails = this.dataParam.students_details;
            console.log(this.data, "ppp");
            if (this.studentDetails) {
                this.studentDetails.forEach(x => {
                    x.ratings = 0,
                        x.batch_id = this.dataParam.batch_id,
                        x.group_id = this.dataParam.id,
                        x.school_id = this.dataParam.school_id;
                });
            }
        });
        let data = {
            "ArpId": this.emisName,
            "Mont": this.curr_month,
            "Week": this.week,
            "Type": 2
        };
        this.data = [];
        this.emisService.ArpCourMat(data).subscribe(res => {
            if (res.dataStatus) {
                this.data = res.result;
            }
        });
    }
    sissionSummary() {
    }
    backBtn() {
        if (this.emis_usertype == '39') {
            this.router.navigate(["/tabs/aadhitiya-session"]);
        }
        else {
            this.router.navigate(["/tabs/pums-session-details"]);
        }
    }
    attendence() {
        this.attenden = true;
        this.summaryHide = false;
        this.galleryHide = false;
        this.ratingHide = false;
    }
    summary() {
        this.summaryHide = true;
        this.galleryHide = false;
        this.attenden = false;
        this.ratingHide = false;
    }
    gallery() {
        this.submitAllowFile = false;
        this.galleryHide = true;
        this.summaryHide = false;
        this.attenden = false;
        this.ratingHide = false;
        // this.router.navigate(["/tabs/gallery-session"])
    }
    viewDoc(docName) {
        console.log('onDownloadFile');
        var bucketName = "renewalapplicationemis";
        var filename = docName;
        let expiry = 1800;
        let ext = '';
        var splittedName = docName.split(".");
        ext = splittedName[1];
        console.log('ext', ext[1]);
        if (filename != null && filename != "") {
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    let doc;
                    doc = result.url;
                    if (ext[1] == 'pdf' || ext == 'pdf') {
                        this.uploadService.viewPdf(doc);
                    }
                    else {
                        const modal = yield this.modalCtrl.create({
                            component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__.ViewImagePage,
                            componentProps: { image: doc },
                            cssClass: 'view-image-modal'
                        });
                        yield modal.present();
                    }
                }
                else {
                    this.alertService.error('Error in getting document');
                }
            }));
        }
    }
    ratting() {
        this.ratingHide = true;
        this.summaryHide = false;
        this.attenden = false;
        this.galleryHide = false;
    }
    onSave() {
        this.submitAllow = false;
        if (this.studentDetails) {
            this.presentStudent = 0;
            for (let i = 0; i < this.studentDetails.length; i++) {
                if (this.studentDetails[i].ratings != 0) {
                    this.submitAllow = true;
                    this.presentStudent = this.presentStudent + 1;
                }
            }
        }
        if (this.submitAllow) {
            let temp = [], currDate = new Date();
            this.studentDetails.map(item => {
                let obj = {
                    "IndexId": "",
                    'SchlId': item.school_id,
                    'BatchId': item.batch_id,
                    'GroupId': item.group_id,
                    'StudId': item.id,
                    'SessionDate': moment__WEBPACK_IMPORTED_MODULE_3___default()(currDate).format("yyyy/MM/DD"),
                    'Rating': item.ratings,
                    'RatingBY': this.emisName
                };
                temp.push(obj);
            });
            if (temp) {
                this.emisService.ArpStudRating({ "records": temp }).subscribe(res => {
                    if (res.dataStatus) {
                        this.alertService.success('Inserted Successfully');
                        this.attendancePercent = this.presentStudent / this.studentDetails.length * 100;
                        this.attendancePercent = Math.round(this.attendancePercent);
                        this.attendence();
                    }
                    else {
                        this.submitAllow = false;
                    }
                });
            }
        }
        else {
            this.alertService.error('Please Select Ratings');
            // this.attendence();
        }
    }
    onSelectFile1(event, val) {
        this.allowUpload = true;
        this.list = event.target.files[0].name;
        if (event.target.files) {
            // this.submitAllowFile = true
            if (event.target.files && event.target.files[0]) {
                if (event.target.files[0].size <= 1000000000) {
                    this.doc_file = event.target.files;
                    var fileName = event.target.files[0].name;
                    var splittedName = fileName.split(".");
                    this.fileType = splittedName[1];
                    if (val != 3) {
                        if (this.fileType == 'jpeg' || this.fileType == 'jpg' || this.fileType == 'png') {
                            this.allowUpload = true;
                        }
                        else {
                            this.allowUpload = false;
                            this.alertService.error('File Type Not Valid.');
                        }
                    }
                    else if (val == 3) {
                        if (this.fileType == 'mp4') {
                            this.allowUpload = true;
                        }
                        else {
                            this.allowUpload = false;
                            this.alertService.error('File Type Not Valid.');
                        }
                    }
                    else {
                    }
                    if (this.allowUpload) {
                        const fileReader = new FileReader();
                        fileReader.readAsDataURL(event.target.files[0]);
                        fileReader.onload = (event) => {
                            // //debugger;
                            this.uploadUrl = fileReader.result;
                            var bucketName = "renewalapplicationemis";
                            var filename = splittedName[0];
                            var ext = splittedName[1];
                            let expiry = 300;
                            this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                                if (result) {
                                    // const formData = new FormData();
                                    // formData.append('file', this.doc_file);
                                    let files = this.doc_file;
                                    // let file: File = files[0];
                                    this.uploadService.uploadFile(result.url, files[0]).subscribe((res) => {
                                        if (val == 1) {
                                            this.image1 = result.key;
                                        }
                                        if (val == 2) {
                                            this.image2 = result.key;
                                        }
                                        if (val == 3) {
                                            this.image3 = result.key;
                                            this.test = "https://deka0egrc3bqo.cloudfront.net/" + this.image3;
                                            // this.getUploadedFiles1(result.key);
                                        }
                                        if (this.image1 && this.image2 && this.image3) {
                                            this.submitAllowFile = true;
                                        }
                                        //   this.kayvalue.push(this.form.value.Pht1);
                                        console.log(result.key, "klkl");
                                    });
                                    this.alertService.success('File Uploaded Successfully');
                                }
                                else {
                                    this.alertService.error('Error in Uploading File please try again');
                                }
                            });
                        };
                    }
                }
                else {
                    this.alertService.error('File Can`t uploaded because Image size should not exceed 1GB');
                }
            }
        }
    }
    onupload(val) {
        if (this.submitAllowFile) {
            let data = {
                "IndxId": "",
                'SchlId': this.dataParam.school_id,
                'BatchId': this.dataParam.batch_id,
                'GroupId': this.dataParam.id,
                'ArpId': this.emisName,
                'Photo': this.image1,
                'Photo1': this.image2,
                'Video': this.image3
            };
            this.emisService.ArpFileUploads({ "records": data }).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success('Uploaded Successfully');
                    this.router.navigate(["/tabs/otp-submission"], { queryParams: { 'data': JSON.stringify(val) } });
                }
            });
        }
        else {
            this.alertService.error('Please Upload the File');
        }
    }
    /*  Opening Camera here.....   */
    openCameraOn(val) {
        const options = {
            quality: 100,
            targetWidth: 900,
            targetHeight: 600,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.ALLMEDIA,
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
                        const blob = (0,blob_util__WEBPACK_IMPORTED_MODULE_10__.base64StringToBlob)(base[1], 'image/jpg');
                        if (blob.size <= 3145728) {
                            this.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe((result) => {
                                if (result) {
                                    this.uploadService.uploadFile(result.url, blob).subscribe((res) => {
                                        if (val == 1) {
                                            this.image1 = result.key;
                                            this.viewDoc(this.image1);
                                        }
                                        if (val == 2) {
                                            this.image2 = result.key;
                                            this.viewDoc(this.image2);
                                        }
                                        this.alertService.success('File Uploaded Successfully');
                                    });
                                }
                            });
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
        });
    }
};
SessionSummaryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController }
];
SessionSummaryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-session-summary',
        template: _raw_loader_session_summary_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_session_summary_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SessionSummaryPage);



/***/ }),

/***/ 44774:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/art-culture/session-summary/session-summary.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #22720E;\n}\n\n.Div_attnce {\n  border: 1px solid #917AFE;\n  border-radius: 22px;\n  text-align: center;\n  padding: 10px;\n  align-self: center;\n}\n\n.Div_attnceactive {\n  border: 1px solid #917AFE;\n  background-color: #917AFE;\n  color: white;\n  border-radius: 22px;\n  text-align: center;\n  padding: 10px;\n  align-self: center;\n}\n\n.Div_summary {\n  border: 1px solid #917AFE;\n  border-radius: 22px;\n  text-align: center;\n  padding: 10px;\n  align-self: center;\n}\n\n.Div_gallery {\n  border: 1px solid #917AFE;\n  border-radius: 22px;\n  text-align: center;\n  padding: 10px;\n  align-self: center;\n}\n\n.Div_card {\n  margin: 20px;\n  background-color: #FCFECC;\n  padding: 6px;\n  border-left: 8px solid #FDC605;\n  border-radius: 16px;\n  margin-top: 11%;\n}\n\n.Div_redcard {\n  background-color: #FFECF0;\n  margin: 20px;\n  padding: 10%;\n  border-left: 7px solid red;\n  border-radius: 16px;\n}\n\n.imgRow {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.headDiv {\n  background-color: red;\n  padding: 50px;\n  border-radius: 10px;\n}\n\n.dotRow {\n  border-left: 2px dashed #1B85FF;\n  padding: 12px;\n  margin-left: 8px;\n}\n\n.dotCol {\n  border: 1px solid #1B85FF;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.circleDiv {\n  background-color: #1B85FF;\n  border-radius: 10px;\n  padding-left: 20px;\n}\n\n.btn {\n  background-color: #917AFE;\n  color: white;\n  padding: 8px;\n  padding-left: 20px;\n  border-radius: 10px;\n  padding-right: 20px;\n}\n\n.headingLabel {\n  padding: 14px;\n  border-left: 6px solid #917AFE;\n  background-color: #dfdaf7;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n\n.grid {\n  margin: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-row-gap: 0.5em;\n  row-gap: 0.5em;\n  grid-column-gap: 1em;\n  -moz-column-gap: 1em;\n       column-gap: 1em;\n}\n\n.stuName {\n  padding: 6px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  border: 1px solid lightgray;\n  background-color: white;\n}\n\nion-card {\n  border: 1px solid #917AFE;\n}\n\n.button {\n  --background: #917AFE;\n  --color:white;\n}\n\n.circle {\n  background-color: #917AFE;\n  border-radius: 10px;\n  padding-left: 20px;\n}\n\n.dotR {\n  border-left: 2px dashed #917AFE;\n  padding: 12px;\n  margin-left: 8px;\n}\n\n.dotC {\n  border: 1px solid #917AFE;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.arpcard {\n  margin: 20px;\n  background-color: #dfdaf7;\n  padding: 6px;\n  border-left: 8px solid #917AFE;\n  border-radius: 16px;\n  margin-top: 11%;\n}\n\n.small {\n  font-size: 15px;\n}\n\n.stars {\n  flex: 0 0 50%;\n}\n\n.star__label {\n  flex: 0 0 50%;\n  margin: 0;\n}\n\n.star__rating__info {\n  flex: 100%;\n  min-height: 30px;\n}\n\n.star {\n  cursor: pointer;\n  width: 24px;\n  height: auto;\n  fill: white;\n  stroke: #888888;\n  transform: scale(0.8);\n  transition: transform 200ms ease-in-out;\n}\n\n.star path {\n  transition: fill 200ms ease-in-out, stroke 100ms ease-in-out;\n}\n\n.active {\n  fill: #917AFE;\n  stroke: #6747fe;\n}\n\n.valid-clr {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlc3Npb24tc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBSEE7RUFDRSxhQUFBO0VBQWMsNkJBQUE7QUFPaEI7O0FBSkE7RUFDRSxxQkFBQTtFQUFzQixhQUFBO0VBQWMsbUJBQUE7QUFTdEM7O0FBUEE7RUFDRSwrQkFBQTtFQUFpQyxhQUFBO0VBQWUsZ0JBQUE7QUFZbEQ7O0FBVkE7RUFDRSx5QkFBQTtFQUEwQixtQkFBQTtFQUFtQixhQUFBO0FBZS9DOztBQVpBO0VBQ0UseUJBQUE7RUFBMkIsbUJBQUE7RUFBb0Isa0JBQUE7QUFpQmpEOztBQWRBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWlCRjs7QUFmQTtFQUNFLGFBQUE7RUFBYyw4QkFBQTtFQUE4Qix5QkFBQTtFQUF5QixtQkFBQTtFQUFtQixtQkFBQTtBQXNCMUY7O0FBbkJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQUEsY0FBQTtFQUNBLG9CQUFBO0VBQUEsb0JBQUE7T0FBQSxlQUFBO0FBc0JGOztBQXBCQTtFQUNFLFlBQUE7RUFBYSxtQkFBQTtFQUFtQixrQkFBQTtFQUFtQiwyQkFBQTtFQUEyQix1QkFBQTtBQTJCaEY7O0FBekJBO0VBQ0UseUJBQUE7QUE0QkY7O0FBekJBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBNEJGOztBQTFCQTtFQUNFLHlCQUFBO0VBQTJCLG1CQUFBO0VBQW9CLGtCQUFBO0FBK0JqRDs7QUE3QkE7RUFDRSwrQkFBQTtFQUFpQyxhQUFBO0VBQWUsZ0JBQUE7QUFrQ2xEOztBQWhDQTtFQUNFLHlCQUFBO0VBQTBCLG1CQUFBO0VBQW1CLGFBQUE7QUFxQy9DOztBQW5DQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQXNDRjs7QUFwQ0E7RUFDRSxlQUFBO0FBdUNGOztBQXBDQTtFQUNFLGFBQUE7QUF1Q0Y7O0FBckNBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUF3Q0Y7O0FBdENBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBeUNGOztBQXRDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7RUFDQSx1Q0FBQTtBQXVDRjs7QUF0Q0U7RUFDRSw0REFBQTtBQXdDSjs7QUFwQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQXVDRjs7QUFwQ0E7RUFDRSxVQUFBO0FBdUNGIiwiZmlsZSI6InNlc3Npb24tc3VtbWFyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzIyNzIwRTtcclxuICB9XHJcbiAgLkRpdl9hdHRuY2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTE3QUZFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5EaXZfYXR0bmNlYWN0aXZle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkxN0FGRTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MTdBRkU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgLkRpdl9zdW1tYXJ5e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzkxN0FGRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAuRGl2X2dhbGxlcnl7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTE3QUZFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5EaXZfY2FyZHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQ0ZFQ0M7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNGREM2MDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTElO1xyXG4gIH1cclxuICAuRGl2X3JlZGNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFQ0YwO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcbiAgXHJcblxyXG4uaW1nUm93e1xyXG4gIGRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5oZWFkRGl2e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtwYWRkaW5nOiA1MHB4O2JvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRvdFJvd3tcclxuICBib3JkZXItbGVmdDogMnB4IGRhc2hlZCAjMUI4NUZGOyBwYWRkaW5nOiAxMnB4OyBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbi5kb3RDb2x7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzFCODVGRjtib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNpcmNsZURpdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI4NUZGOyBib3JkZXItcmFkaXVzOiAxMHB4O3BhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmJ0bntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE3QUZFO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uaGVhZGluZ0xhYmVse1xyXG4gIHBhZGRpbmc6IDE0cHg7Ym9yZGVyLWxlZnQ6NnB4IHNvbGlkICM5MTdBRkU7YmFja2dyb3VuZC1jb2xvcjojZGZkYWY3O2JvcmRlci1yYWRpdXM6MTBweDttYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZ3JpZHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgcm93LWdhcDogMC41ZW07XHJcbiAgY29sdW1uLWdhcDogMWVtO1xyXG59XHJcbi5zdHVOYW1le1xyXG4gIHBhZGRpbmc6IDZweDtib3JkZXItcmFkaXVzOjEwcHg7bWFyZ2luLWJvdHRvbTogNXB4O2JvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O2JhY2tncm91bmQtY29sb3I6d2hpdGVcclxufVxyXG5pb24tY2FyZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTE3QUZFO1xyXG4gIC8vIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmJ1dHRvbntcclxuICAtLWJhY2tncm91bmQ6ICM5MTdBRkU7XHJcbiAgLS1jb2xvcjp3aGl0ZTtcclxufVxyXG4uY2lyY2xle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTdBRkU7IGJvcmRlci1yYWRpdXM6IDEwcHg7cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5kb3RSe1xyXG4gIGJvcmRlci1sZWZ0OiAycHggZGFzaGVkICM5MTdBRkU7IHBhZGRpbmc6IDEycHg7IG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLmRvdEN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzkxN0FGRTtib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzogMTBweDtcclxufVxyXG4uYXJwY2FyZHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGFmNztcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCAjOTE3QUZFO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMTElO1xyXG59XHJcbi5zbWFsbHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5zdGFycyB7XHJcbiAgZmxleDogMCAwIDUwJTtcclxufVxyXG4uc3Rhcl9fbGFiZWwge1xyXG4gIGZsZXg6IDAgMCA1MCU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5zdGFyX19yYXRpbmdfX2luZm8ge1xyXG4gIGZsZXg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIGZpbGw6IHdoaXRlO1xyXG4gIHN0cm9rZTogIzg4ODg4ODtcclxuXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcclxuICBwYXRoIHtcclxuICAgIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHN0cm9rZSAxMDBtcyBlYXNlLWluLW91dDtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGZpbGw6ICM5MTdBRkU7XHJcbiAgc3Ryb2tlOiBkYXJrZW4oIzkxN0FGRSwgMTAlKTtcclxufVxyXG5cclxuLnZhbGlkLWNscntcclxuICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ 85967:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/session-summary/session-summary.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  *ngIf=\"emis_usertype == '39'\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Session Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-header  *ngIf=\"emis_usertype == '55'\">\r\n  <ion-toolbar style=\"--background:#917AFE;\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Session Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n  <ion-row style=\"margin: 20px;\">\r\n    <ion-col size=\"4\" class=\"Div_attnce\" (click)=\"summary()\" *ngIf=\"!summaryHide\">\r\n      <ion-row class=\"imgRow\">\r\n        <div >\r\n          <!-- <ion-icon name=\"barcode\" style=\"color:#917AFE\"></ion-icon> -->\r\n          <!-- <img src=\"../../../../../assets/images/art&culture/Icon open-graph.svg\"> -->\r\n        </div>\r\n          <div style=\"font-size: 15px;\">Summary</div>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"Div_attnceactive\" (click)=\"summary()\" *ngIf=\"summaryHide\">\r\n      <ion-row class=\"imgRow\" >\r\n        <div >\r\n          <!-- <ion-icon name=\"barcode\" style=\"color:#917AFE\"></ion-icon> -->\r\n          <!-- <img src=\"../../../../../assets/images/art&culture/Icon open-graph.svg\"> -->\r\n        </div>\r\n          <div style=\"font-size: 15px;\">Summary</div>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"Div_attnce\" (click)=\"attendence()\" *ngIf=\"!attenden\">\r\n      <ion-row class=\"imgRow\">\r\n        <div >\r\n          <!-- <img src=\"../../../../../assets/images/art&culture/Icon open-graph.svg\"> -->\r\n        </div>\r\n          <div style=\"font-size: 15px;\">Attendance</div>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"Div_attnceactive\" (click)=\"attendence()\" *ngIf=\"attenden\">\r\n      <ion-row class=\"imgRow\">\r\n        <div >\r\n          <!-- <img src=\"../../../../../assets/images/art&culture/Icon open-graph.svg\"> -->\r\n        </div>\r\n          <div style=\"font-size: 15px;\">Attendance</div>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"Div_gallery\" (click)=\"gallery()\" *ngIf=\"emis_usertype == '39'\">\r\n      <ion-row class=\"imgRow\">\r\n        <div >\r\n          <img src=\"../../../../../assets/images/art&culture/image-gallery.svg\">\r\n        </div>\r\n          <div style=\"font-size: 15px;\">Gallery</div>\r\n      </ion-row>\r\n    </ion-col>\r\n   \r\n \r\n    <ion-col size=\"4\" class=\"Div_gallery\" (click)=\"gallery()\" *ngIf=\"emis_usertype == '55' && !galleryHide\">\r\n      <ion-row class=\"imgRow\">\r\n        <div >\r\n          <!-- <ion-icon name=\"cloud-upload\" style=\"color:#917AFE\"></ion-icon> -->\r\n        </div>\r\n          <div style=\"font-size: 13px;\">Upload Files</div>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"Div_attnceactive\" (click)=\"gallery()\" *ngIf=\"emis_usertype == '55' && galleryHide\">\r\n      <ion-row class=\"imgRow\">\r\n        <div >\r\n          <!-- <ion-icon name=\"cloud-upload\" style=\"color:#917AFE\"></ion-icon> -->\r\n        </div>\r\n          <div style=\"font-size: 13px;\">Upload Files</div>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  <div *ngIf=\"emis_usertype == '39'\">\r\n    <ion-row class=\"Div_card\" *ngIf=\"attenden\">\r\n      <ion-col size=\"10\" style=\"align-self: center;\">\r\n        <div style=\"font-size: 18px;\">Student Attendance Percentage</div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;font-weight: bold;\" >\r\n        <div style=\"font-size: 22px;\">60%</div>\r\n      </ion-col>\r\n \r\n      <!-- <ion-col size=\"2\" style=\"align-self: center;font-weight: bold;\" *ngIf=\"emis_usertype == '33'\">\r\n      <ion-input>\r\n \r\n      </ion-input>\r\n      </ion-col> -->\r\n    </ion-row>\r\n  </div>\r\n  <div *ngIf=\"emis_usertype == '55'\">\r\n    <ion-row class=\"arpcard\" *ngIf=\"attenden\">\r\n      <ion-col size=\"8\" style=\"align-self: center;\" *ngIf=\"emis_usertype == '55'\">\r\n        <div style=\"font-size: 18px;\">Student Attendance Percentage</div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" style=\"align-self: center;font-weight: bold;\" >\r\n        <div style=\"font-size: 22px;\">{{attendancePercent}}%</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n \r\n  <div style=\"margin: 20px;\" *ngIf=\"summaryHide\">\r\n    <div class=\"headingLabel\">\r\n      <ion-label>\r\n        Session Summary\r\n      </ion-label>\r\n    </div>\r\n \r\n    <div *ngIf=\"emis_usertype == '39'\">\r\n      <div>\r\n        <ion-label class=\"circleDiv\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotRow\">\r\n        <ion-label>1. Title of the topic covered</ion-label><br>\r\n        <ion-col size=\"12\" class=\"dotCol\">\r\n         \r\n          <ion-label>Answer</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <div>\r\n        <ion-label class=\"circleDiv\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotRow\">\r\n        <ion-col size=\"12\" class=\"dotCol\">\r\n          <ion-label>1. Title of the topic covered</ion-label><br>\r\n          <ion-label>Answer</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <div>\r\n        <ion-label class=\"circleDiv\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotRow\">\r\n        <ion-col size=\"12\" class=\"dotCol\">\r\n          <ion-label>1. Title of the topic covered</ion-label><br>\r\n          <ion-label>Answer</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n \r\n    <div *ngIf=\"emis_usertype == '55'\">\r\n      <div>\r\n        <ion-label class=\"circle\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotR\">\r\n        <ion-label>1. Title of the topic covered</ion-label><br>\r\n        <ion-col size=\"12\" class=\"dotC\">\r\n          <ion-label>{{data[0].learning_plan}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <div>\r\n        <ion-label class=\"circle\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotR\">\r\n        <ion-label>2. Learning Objectives</ion-label><br>\r\n        <ion-col size=\"12\" class=\"dotC\">\r\n          <ion-label>{{data[0].learning_obj}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <div>\r\n        <ion-label class=\"circle\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotR\">\r\n        <ion-label>3. Learning Outcome</ion-label><br>\r\n        <ion-col size=\"12\" class=\"dotC\">\r\n          <ion-label>{{data[0].learning_outcomes}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <!-- <div>\r\n        <ion-label class=\"circle\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotR\">\r\n        <ion-label>4. Ice Breaker / Warm up activity</ion-label><br>\r\n        <ion-col size=\"12\" class=\"dotC\">\r\n          <ion-label></ion-label>\r\n        </ion-col>\r\n      </ion-row> -->\r\n \r\n      <!-- <div>\r\n        <ion-label class=\"circle\"></ion-label>\r\n      </div>\r\n \r\n      <ion-row class=\"dotR\">\r\n        <ion-label>5. Duration of the session</ion-label><br>\r\n        <ion-col size=\"12\" class=\"dotC\">\r\n          <ion-label>Answer</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <div>\r\n        <ion-label class=\"circle\"></ion-label>\r\n      </div> -->\r\n \r\n      <!-- <ion-row class=\"dotR\">\r\n        <ion-label>6. Course material progress</ion-label><br>\r\n        <ion-col size=\"12\" class=\"dotC\">\r\n          <ion-label>Answer</ion-label>\r\n        </ion-col>\r\n      </ion-row> -->\r\n    </div>\r\n \r\n    <div style=\"text-align: center;\" (click)=\"ratting()\" *ngIf=\"!attendancePercent\">\r\n      <button class=\"btn\">Next</button>\r\n    </div>\r\n  </div>\r\n \r\n  <div style=\"margin: 20px;\" *ngIf=\"ratingHide\" >\r\n    <div class=\"headingLabel\">\r\n      <ion-label>\r\n        Session Summary\r\n      </ion-label>\r\n    </div>\r\n \r\n    <div style=\"padding: 10px;border-radius:6px;background-color: #F8EEFE;\" *ngIf=\"emis_usertype == '39'\">\r\n      <ion-row style=\"background-color:#1B85FF;padding: 6px;border-radius:10px;margin-bottom: 5px;\">\r\n        <ion-col size=\"7\" style=\"border-right: 1px solid white;\">\r\n          <div style=\"color:white\">\r\n            <ion-label>Student Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <div style=\"color:white;padding-left: 5px;\">\r\n            <ion-label>Rating</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <ion-row class=\"stuName\">\r\n        <ion-col size=\"7\" style=\"border-right: 1px solid lightgray;\">\r\n          <div >\r\n            <ion-label>Student Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <div style=\"padding-left: 5px;\" >\r\n            <ion-label>Rating</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <ion-row class=\"stuName\">\r\n        <ion-col size=\"7\" style=\"border-right: 1px solid lightgray;\">\r\n          <div >\r\n            <ion-label>Student Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <div style=\"padding-left: 5px;\" >\r\n            <ion-label>Rating</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <ion-row class=\"stuName\">\r\n        <ion-col size=\"7\" style=\"border-right: 1px solid lightgray;\">\r\n          <div >\r\n            <ion-label>Student Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5\">\r\n          <div style=\"padding-left: 5px;\" >\r\n            <ion-label>Rating</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n \r\n    <div style=\"padding: 10px;border-radius:6px;background-color: #F8EEFE;\" *ngIf=\"emis_usertype == '55'\">\r\n      <ion-row style=\"background-color:#917AFE;padding: 6px;border-radius:10px;margin-bottom: 5px;\">\r\n        <ion-col size=\"6.5\" style=\"border-right: 1px solid white;\">\r\n          <div style=\"color:white\">\r\n            <ion-label>Student Name</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5.5\">\r\n          <div style=\"color:white;padding-left: 5px;\">\r\n            <ion-label>Rating</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <ion-row class=\"stuName\" *ngFor=\"let data of studentDetails;index as j\">\r\n        <ion-col size=\"6.5\" style=\"border-right: 1px solid lightgray;\">\r\n          <div >\r\n            <ion-label>{{data.name}}</ion-label><br>\r\n            <!-- <ion-label>{{data.class_studying_id == 6 ? 'VI' : data.class_studying_id == 7 ? 'VII' : data.class_studying_id == 8 ? 'VIII' : 'IX'}} - {{data.class_section}}  {{data.user_id}}</ion-label> -->\r\n            <ion-label>{{data.user_id}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"5.5\">\r\n          <div class=\"stars\">\r\n            <ng-container *ngFor=\"let star of stars; index as i\">\r\n              <svg class=\"star\"\r\n                  (click)='setRating(star,j)'\r\n                  width=\"20\" height=\"35\" viewBox=\"0 0 51 48\">\r\n                  <path d=\"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z\" />\r\n              </svg>\r\n         \r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n \r\n      <div style=\"text-align: center;\" (click)=\"onSave()\">\r\n        <button class=\"btn\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n  <div *ngIf=\"emis_usertype == '39'\">\r\n    <div class=\"grid\" *ngIf=\"galleryHide\">\r\n      <div class=\"item1\">\r\n        <img src=\"../../../../../assets/icons/artCulture/bikaner-india-january-kachchhi-ghodi-dancers-horse-costume-poses-photo-camel-festival-kachhi-gori-indian-203724603.webp\">\r\n      </div>\r\n      <div class=\"item2\">\r\n        <img src=\"../../../../../assets/icons/artCulture/cq5dam.web.512.512 (1).jpeg\">\r\n      </div>\r\n      <div class=\"item3\">\r\n        <img src=\"../../../../../assets/icons/artCulture//pti01202023000446a-1-1203060-1679651746.jpg\">\r\n      </div>\r\n      <div class=\"item4\">\r\n        <img src=\"../../../../../assets/icons/artCulture/cq5dam.web.512.512 (1).jpeg\">\r\n      </div>\r\n      <div class=\"item6\">\r\n        <img src=\"../../../../../assets/images/omr_scanner.jpeg\">\r\n      </div>\r\n      <div class=\"item7\">\r\n        <img src=\"../../../../../assets/images/omr_scanner1.jpeg\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n \r\n  <div *ngIf=\"galleryHide\">\r\n    <div *ngIf=\"emis_usertype == '55'\">\r\n      <ion-row>\r\n        <!-- <ion-col size=\"12\">\r\n          <ion-label>Please Upload File 1 <span class=\"valid-clr\">*</span></ion-label>\r\n          <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" #others (change)=\"onSelectFile1($event,1)\" class=\"form-control\"accept=\"image/*,.jpeg,.jpg,.png\" />\r\n          <div>\r\n            <div class=\"upload-key\">\r\n              <div style=\"margin: 15px;\">\r\n                <a style=\"color: #1B85FF;\" (click)=\"viewDoc(image1)\" *ngIf=\"image1\">\r\n                  View Image : {{image1 | json}}\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"12\" >\r\n          <ion-label>Please Upload File 1 <span class=\"valid-clr\">*</span></ion-label>\r\n          <div style=\"padding: 15px;\">\r\n            <ion-icon name=\"camera\" style=\"font-size: 70px;padding-top: 2px;color: #343232;\" width=\"600\" height=\"100\"\r\n              (click)=\"openCameraOn(1)\"></ion-icon>\r\n          </div>\r\n          <!-- <ion-label style=\"text-align: center;\">Camera</ion-label> -->\r\n        </ion-col>\r\n \r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n          <div *ngIf=\"this.image1\">\r\n            <!-- <img *ngIf=\"this.image1 != '' && this.image1 != null && this.image1 != undefined\" src=\"{{this.image1}}\"\r\n              class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" (click)=\"viewDoc(this.image1)\"> -->\r\n              View Image :<a style=\"color: #1B85FF;\" (click)=\"viewDoc(this.image1)\" >\r\n                 {{this.image1 | json}}\r\n              </a>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <!-- <ion-col size=\"12\">\r\n          <ion-label>Please Upload File 2 <span class=\"valid-clr\">*</span></ion-label>\r\n          <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" #others (change)=\"onSelectFile1($event,2)\" class=\"form-control\"accept=\"image/*,.jpeg,.jpg,.png\" />\r\n          <div>\r\n            <div class=\"upload-key\">\r\n              <div style=\"margin: 15px;\">\r\n                <a style=\"color: #1B85FF;\" (click)=\"viewDoc(image2)\" *ngIf=\"image2\">\r\n                  view Image : {{image2 | json}}\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"12\" >\r\n          <ion-label>Please Upload File 2 <span class=\"valid-clr\">*</span></ion-label>\r\n          <div style=\"padding: 15px;\">\r\n            <ion-icon name=\"camera\" style=\"font-size: 70px;padding-top: 2px;color: #343232;\" width=\"600\" height=\"100\"\r\n              (click)=\"openCameraOn(2)\"></ion-icon>\r\n          </div>\r\n          <!-- <ion-button (click)=\"captureVideo()\">Capture Video</ion-button> -->\r\n          <!-- <ion-label style=\"text-align: center;\">Camera</ion-label> -->\r\n        </ion-col>\r\n \r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n          <div *ngIf=\"this.image2\">\r\n            <!-- <img *ngIf=\"this.image1 != '' && this.image1 != null && this.image1 != undefined\" src=\"{{this.image1}}\"\r\n              class=\"img image\" width=\"50%\" height=\"50%\" style=\"padding:0;margin:0\" (click)=\"viewDoc(this.image1)\"> -->\r\n              View Image :<a style=\"color: #1B85FF;\" (click)=\"viewDoc(this.image2)\" >\r\n                 {{this.image2 | json}}\r\n              </a>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"padding-top: 10px;\">\r\n        <ion-col size=\"12\">\r\n          <ion-label>Please Upload Video <span class=\"valid-clr\">*</span></ion-label>\r\n          <input type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" #others (change)=\"onSelectFile1($event,3)\" class=\"form-control\"accept=\"video/mp4,video/x-m4v,video/*\" />\r\n          <div>\r\n            <div class=\"upload-key\">\r\n              <div style=\"margin: 15px;\">\r\n                <video *ngIf=\"test\" controls width=\"100%\" height=\"210\" type=\"video/mp4\" controlsList=\"nodownload\">\r\n                  <source [src]=test type=\"video/mp4\">\r\n                </video>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n \r\n      </ion-row>\r\n      <ion-row *ngIf=\"attendancePercent\">\r\n        <ion-col size=\"12\" style=\"text-align: center;\" (click)=\"onupload(dataParam)\">\r\n          <div class=\"button\"><ion-button>Submit</ion-button> </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_session-summary_session-summary_module_ts-es2015.js.map