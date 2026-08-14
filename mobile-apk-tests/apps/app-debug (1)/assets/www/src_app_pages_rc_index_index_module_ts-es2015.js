(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_rc_index_index_module_ts"],{

/***/ 4968:
/*!********************************************************!*\
  !*** ./src/app/pages/rc/index/index-routing.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageRoutingModule": function() { return /* binding */ IndexPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page */ 54946);




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ 59766:
/*!************************************************!*\
  !*** ./src/app/pages/rc/index/index.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageModule": function() { return /* binding */ IndexPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-routing.module */ 4968);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page */ 54946);







let IndexPageModule = class IndexPageModule {
};
IndexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_1__.IndexPage]
    })
], IndexPageModule);



/***/ }),

/***/ 54946:
/*!**********************************************!*\
  !*** ./src/app/pages/rc/index/index.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPage": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./index.page.html */ 82263);
/* harmony import */ var _index_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page.scss */ 9885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/regulatory.service */ 63987);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);











let IndexPage = class IndexPage {
    constructor(router, rcservice, route, alertService, alertController, usersessionservice, uploadService, iab) {
        this.router = router;
        this.rcservice = rcservice;
        this.route = route;
        this.alertService = alertService;
        this.alertController = alertController;
        this.usersessionservice = usersessionservice;
        this.uploadService = uploadService;
        this.iab = iab;
        this.section = [];
        this.keys = [];
        this.status = false;
        this.isdisabled = true;
        this.x = [];
        this.questEnglish = true;
        this.questTamil = false;
        this.switchUserPopup = false;
        this.inspectionFilePopup = false;
        this.inspectionFileName = '';
        this.inspectionFileUploading = false;
        this.deoInspectionDoc = '';
        this.approveRemarks = '';
        this.userid = this.usersessionservice.emis_username();
    }
    ionViewDidEnter() {
        this.applicationType = this.route.snapshot.queryParamMap.get("Apptype");
        this.applicationID = this.route.snapshot.queryParamMap.get("AppID");
        this.schoolname = this.route.snapshot.queryParamMap.get("schoolName");
        this.district = this.route.snapshot.queryParamMap.get("district");
        this.deoInspectionDoc = this.route.snapshot.queryParamMap.get("deoInspectionDoc") || '';
        this.getRCsections();
        this.x = localStorage.getItem('rc-details');
        console.log(this.x);
    }
    ngOnInit() {
        let x = [];
        localStorage.setItem('rc-details', JSON.stringify([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]));
    }
    navigateBack() {
        this.router.navigate(['/tabs/rc-tablelist']);
    }
    getRCsections() {
        let data = {
            "application_id": this.applicationID,
            "app_type": this.applicationType,
            "school_name": this.schoolname,
            "district": this.district,
        };
        console.log(data);
        this.rcservice.toGetRCFormquestion(data).subscribe(res => {
            this.section = res.result.sections;
            this.keys = Object.keys(this.section);
            console.log(this.keys);
            console.log(this.section);
            // setTimeout(() => {
            debugger;
            let comp_sec = 0;
            for (let i in this.section) {
                if (this.section[i].section_status == 1) {
                    comp_sec++;
                    if (this.section.length == comp_sec) {
                        this.isdisabled = false;
                    }
                    else {
                        this.isdisabled = true;
                    }
                }
                else {
                    this.isdisabled = true;
                }
            }
            console.log('comp', comp_sec);
            // }, 1500);
        });
    }
    routeToForm(id, appid, secName, i, secStatus, lang) {
        this.keyid = id;
        this.Applicationid = appid;
        this.secname = secName;
        this.secstatus = secStatus;
        this.langstatus = lang;
        this.router.navigate(['/tabs/rc-grant-form'], { queryParams: { 'AppID': this.Applicationid, 'secID': this.keyid, 'secName': this.secname, 'schoolName': this.schoolname, 'district': this.district, 'appType': this.applicationType, 'secindex': i, 'secStatus': this.secstatus, 'langStat': this.langstatus }, skipLocationChange: false });
    }
    overAllsubmit(data) {
        let d = {
            app_type: this.applicationType,
            application_id: this.applicationID,
            reason: data,
            inspection_file: this.inspectionFileName
        };
        this.rcservice.overallsaveRC(d).subscribe((res) => {
            this.alertService.success('Approved Successfully');
            setTimeout(() => {
                this.router.navigate(['/tabs/rc-tablelist']);
            }, 500);
        });
    }
    changeEnglish() {
        this.questEnglish = true;
        this.questTamil = false;
    }
    changeTamil() {
        this.questEnglish = false;
        this.questTamil = true;
    }
    cancelAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reason For Cancel',
                cssClass: 'custom-alert',
                inputs: [
                    {
                        name: 'reasonData',
                        type: 'textarea',
                        placeholder: 'Please Enter Your Remarks',
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        cssClass: 'alert-button-cancel',
                    },
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            this.cancelForm(alertData.reasonData);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    cancelForm(data) {
        let cancelData = {
            app_id: this.applicationID,
            status: "cancel",
            reason: data
        };
        console.log(data);
        this.rcservice.cancelForm(cancelData).subscribe((res) => {
            this.alertService.success(res.message);
            setTimeout(() => {
                this.router.navigate(['/tabs/rc-tablelist']);
            }, 500);
        });
    }
    rejectAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reason For Reject',
                cssClass: 'custom-alert',
                inputs: [
                    {
                        name: 'reasonData',
                        type: 'textarea',
                        placeholder: 'Please Enter Your Remarks',
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        cssClass: 'alert-button-cancel',
                    },
                    {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: (alertData) => {
                            this.rejectForm(alertData.reasonData);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    rejectForm(data) {
        let rejData = {
            app_id: this.applicationID,
            status: "reject",
            reason: data
        };
        console.log(data);
        this.rcservice.rejectForm(rejData).subscribe((res) => {
            this.alertService.success(res.message);
            setTimeout(() => {
                this.router.navigate(['/tabs/rc-tablelist']);
            }, 500);
        });
    }
    cancelPopup() {
        this.switchUserPopup = false;
        clearInterval(this.timersec);
        this.deocverifyOTP = '';
    }
    optVerification(id) {
        debugger;
        clearInterval(this.timersec);
        this.otpwhichbtnid = '';
        this.otpwhichbtnid = id;
        console.log('otpwhichbtnid', this.otpwhichbtnid);
        if (this.otpwhichbtnid == 1) {
            console.log('if');
            var data = {
                "records": {
                    "AppID": this.applicationID,
                    "Apptyp": this.applicationType,
                    "Sts": 'approve'
                }
            };
        }
        else if (this.otpwhichbtnid == 2) {
            console.log('else');
            var data = {
                "records": {
                    "AppID": this.applicationID,
                    "Apptyp": this.applicationType,
                    "Sts": 'reject'
                }
            };
        }
        else if (this.otpwhichbtnid == 3) {
            console.log('else');
            var data = {
                "records": {
                    "AppID": this.applicationID,
                    "Apptyp": this.applicationType,
                    "Sts": 'cancel'
                }
            };
        }
        else {
            this.hideSubmit = false;
            var data = {
                "records": {
                    "AppID": this.applicationID,
                    "Apptyp": this.applicationType,
                    "Sts": 'resend'
                }
            };
        }
        this.rcservice.otpSubmit(data).subscribe((res) => {
            if (res.dataStatus == true) {
                this.switchUserPopup = true;
                this.alertService.success(res.message);
                this.timer(15);
                // this.commentBox();
            }
            else {
                this.alertService.alert(res.message);
            }
        });
    }
    optVerificationsubmit(otp) {
        console.log(otp);
        this.switchUserPopup = false;
        let data = { "OTP": otp, "UsrID": this.userid };
        this.rcservice.otpverifySubmit(data).subscribe((res) => {
            debugger;
            setTimeout(() => {
                if (res.dataStatus == true && res.status == 200) {
                    this.alertService.success('OTP Verified Successfully');
                    clearInterval(this.timersec);
                    this.deocverifyOTP = '';
                    if (this.otpwhichbtnid == 1) {
                        this.inspectionFilePopup = true;
                    }
                    else if (this.otpwhichbtnid == 3) {
                        this.cancelAlert();
                    }
                    else {
                        this.rejectAlert();
                    }
                }
                else {
                    this.alertService.alert(res.result);
                    this.switchUserPopup = true;
                }
            }, 100);
        });
    }
    timer(minute) {
        // let minute = 1;
        this.display = "";
        let seconds = minute * 60;
        let textSec = '0';
        let statSec = 60;
        const prefix = minute < 10 ? '0' : '';
        this.timersec = setInterval(() => {
            seconds--;
            if (statSec != 0)
                statSec--;
            else
                statSec = 59;
            if (statSec < 10) {
                textSec = '0' + statSec;
            }
            else
                textSec = statSec;
            this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
            console.log('sec', this.display);
            if (seconds == 0) {
                console.log('finished');
                clearInterval(this.timersec);
                this.hideSubmit = true;
            }
        }, 1000);
    }
    // Inspection File Upload Methods
    onInspectionFileSelected(event) {
        if (event.target.files && event.target.files.length > 0) {
            this.inspectionDoc = event.target.files[0];
            let fileName = this.inspectionDoc.name;
            let fileSize = this.inspectionDoc.size;
            if (fileSize <= 5242880) { // 5MB max
                let splittedName = fileName.split(".");
                let ext = splittedName[splittedName.length - 1].toLowerCase();
                if (ext == 'pdf' || ext == 'jpg' || ext == 'jpeg' || ext == 'png') {
                    this.inspectionFileUploading = true;
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);
                    fileReader.onload = () => {
                        var bucketName = "emisapplication";
                        var folderCode = this.uploadService.getAppTypeToFolderCode(this.applicationType);
                        var folderPath = this.uploadService.getBucketFolderNameForRC(folderCode, ext == 'pdf' ? 'pdf' : 'images');
                        var filename = folderPath + splittedName[0];
                        let expiry = 300;
                        this.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe((result) => {
                            if (result) {
                                this.uploadService.uploadFile(result.url, this.inspectionDoc).subscribe((res) => {
                                    this.inspectionFileName = result.key;
                                    this.inspectionFileUploading = false;
                                    this.alertService.success('Inspection File Uploaded Successfully');
                                });
                            }
                            else {
                                this.inspectionFileUploading = false;
                                this.alertService.error('Error in uploading file, please try again');
                            }
                        });
                    };
                }
                else {
                    this.alertService.error('Only PDF, JPG, JPEG, PNG files are allowed');
                }
            }
            else {
                this.alertService.error('File size should not exceed 5MB');
            }
        }
    }
    cancelInspectionUpload() {
        this.inspectionFilePopup = false;
        this.inspectionFileName = '';
        this.inspectionDoc = null;
        this.approveRemarks = '';
    }
    submitApproval() {
        if (this.inspectionFileName == '' || this.inspectionFileName == null) {
            this.alertService.error('Please upload the Inspection File');
            return;
        }
        this.inspectionFilePopup = false;
        this.overAllsubmit(this.approveRemarks);
    }
};
IndexPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__.RegulatoryService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_5__.UploadService },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__.InAppBrowser }
];
IndexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IndexPage);



/***/ }),

/***/ 9885:
/*!************************************************!*\
  !*** ./src/app/pages/rc/index/index.page.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.ion-text-wrap {\n  margin-left: 15px;\n}\n\n.bgcolor {\n  background-color: #91a0f3;\n}\n\n.ticktrue {\n  color: green;\n}\n\n.tickfalse {\n  color: red;\n}\n\n.secname {\n  font-size: 18px;\n}\n\n.btnbg {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n\n.btnbgreject {\n  background-color: red;\n  color: white;\n}\n\n.language {\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  color: var(--ion-color-primary);\n  margin: 8px;\n  padding: 10px;\n  box-shadow: 5px 7px 5px #c6c5c5;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  margin: 5px;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.custom-popup {\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.custom-popup .bg-white {\n  width: 320px;\n  border-radius: 10px;\n}\n\n.custom-popup .bg-white .cls-btn {\n  top: -10px;\n  right: -10px;\n}\n\n.optbtn {\n  text-align: end;\n}\n\n.note {\n  color: red;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.d-flex {\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n\n.pdf {\n  font-family: \"Times New Roman\", Times, serif;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUdFO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FBQUo7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtBQUZKOztBQUtFO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNRTtFQUNFLGFBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFISjs7QUFJSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUZOOztBQUdNO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFEUjs7QUFPRTtFQUNFLGVBQUE7QUFKSjs7QUFPRTtFQUNFLFVBQUE7RUFDQSw0Q0FBQTtBQUpKOztBQU9FO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1FO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0FBSEoiLCJmaWxlIjoiaW5kZXgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb24tdGV4dC13cmFwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuYmdjb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MWEwZjM7XHJcbiAgfVxyXG5cclxuICAudGlja3RydWV7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG5cclxuICAudGlja2ZhbHNle1xyXG4gICAgY29sb3I6IHJlZFxyXG4gIH1cclxuXHJcbiAgLnNlY25hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5idG5iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmJ0bmJncmVqZWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxhbmd1YWdle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA1cHggN3B4IDVweCAjYzZjNWM1XHJcbiAgfVxyXG5cclxuICAudGV4dGFsaW5ne1xyXG4gICAgdGV4dC1hbGlnbjplbmQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyc3R5bGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG5cclxuICAucGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXBvcHVwe1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogOTk5OTk5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIC5iZy13aGl0ZXtcclxuICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAuY2xzLWJ0bntcclxuICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgLm9wdGJ0bntcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICB9XHJcblxyXG4gIC5ub3Rle1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuZC1mbGV4e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLnBkZntcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9Il19 */");

/***/ }),

/***/ 82263:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rc/index/index.page.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Application No - {{applicationID}}</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"borderstyle\">\r\n    <ion-col size=\"12\" class=\"padding\">\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-label class=\"headlabel\">Sections</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <div class=\"textaling\">\r\n            <ion-label class=\"headlabel language\" (click)=\"changeEnglish()\">E</ion-label>\r\n            <ion-label class=\"headlabel language\" (click)=\"changeTamil()\">த</ion-label>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div *ngFor=\"let key of section;let i =index\">\r\n    <div *ngIf=\"questEnglish\">\r\n      <ion-card class=\"bgcolor\"\r\n        (click)=\"routeToForm(key.id,this.applicationID,key.section_name,i,key.section_status,1)\">\r\n        <ion-item>\r\n          <ion-label class=\"secname\">{{key.section_name}}</ion-label>\r\n          <ion-icon class=\"tickfalse\" name=\"close-outline\" *ngIf=\"key.section_status == 0\"></ion-icon>\r\n          <ion-icon class=\"ticktrue\" name=\"checkmark-outline\" *ngIf=\"key.section_status == 1\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div *ngIf=\"questTamil\">\r\n      <ion-card class=\"bgcolor\"\r\n        (click)=\"routeToForm(key.id,this.applicationID,key.section_name_t,i,key.section_status,2)\">\r\n        <ion-item>\r\n          <ion-label class=\"secname\">{{key.section_name_t}}</ion-label>\r\n          <ion-icon class=\"tickfalse\" name=\"close-outline\" *ngIf=\"key.section_status == 0\"></ion-icon>\r\n          <ion-icon class=\"ticktrue\" name=\"checkmark-outline\" *ngIf=\"key.section_status == 1\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col size=\"4\">\r\n      <ion-button color=\"danger\" (click)=\"optVerification(2)\" expand=\"full\">Returned</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-button class=\"btnbg\" (click)=\"optVerification(1)\" expand=\"full\" [disabled]=\"isdisabled\">Approve</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <ion-button class=\"btnbg\" (click)=\"optVerification(3)\" expand=\"full\" >Cancel</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n\r\n<div class=\"custom-popup position-fixed top-0 end-0 bottom-0 start-0 d-flex align-items-center justify-content-center\"\r\n  *ngIf=\"switchUserPopup\"> <!---->\r\n  <div class=\"bg-white p-4 position-relative\">\r\n    <ion-row>\r\n<ion-col size=\"10\">\r\n  <h4 class=\"p-1 color\">Enter OTP</h4>\r\n</ion-col>\r\n<ion-col size=\"2\" style=\"text-align: end;zoom: 1.5;color: grey;\">\r\n  <ion-icon name=\"close\" (click)=\"cancelPopup()\"></ion-icon>\r\n</ion-col>\r\n    </ion-row>\r\n    <div class=\"border-bottom cursor-pointer\">\r\n      <div class=\"d-flex align-items-center p-1\">\r\n        <ion-input label=\"Outline input\" label-placement=\"floating\" fill=\"solid\" [(ngModel)]=\"deocverifyOTP\"\r\n          placeholder=\"Enter OTP\"></ion-input>\r\n    </div>\r\n    <div class=\"mt-2\">\r\n      <div class=\"note\">Note:</div>\r\n        <span class=\"pdf\">OTP will get expired in 15mins  </span>\r\n        <!-- <strong class=\"timer\">({{display}})</strong> -->\r\n      </div>\r\n    </div>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <div class=\"optbtn mt-1\">\r\n          <ion-button fill=\"outline\"  (click)=\"optVerificationsubmit(deocverifyOTP)\">Submit OTP</ion-button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <div class=\"optbtn mt-1\" >\r\n          <ion-button fill=\"outline\" (click)=\"optVerification(4)\">Resend OTP</ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> \r\n  </div>\r\n</div>\r\n\r\n<!-- Approve Popup: Inspection File Upload + Remarks -->\r\n<div class=\"custom-popup position-fixed top-0 end-0 bottom-0 start-0 d-flex align-items-center justify-content-center\"\r\n  *ngIf=\"inspectionFilePopup\">\r\n  <div class=\"bg-white p-4 position-relative\">\r\n    <ion-row>\r\n      <ion-col size=\"10\">\r\n        <h4 class=\"p-1 color\">Approve Application</h4>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: end;zoom: 1.5;color: grey;\">\r\n        <ion-icon name=\"close\" (click)=\"cancelInspectionUpload()\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"border-bottom cursor-pointer\">\r\n      <!-- File Upload -->\r\n      <div class=\"d-flex align-items-center p-1\">\r\n        <div style=\"width: 100%;\">\r\n          <ion-label class=\"note\" style=\"font-weight: bold;\">Upload Inspection File *</ion-label>\r\n          <input type=\"file\" accept=\".pdf,.jpg,.jpeg,.png\" (change)=\"onInspectionFileSelected($event)\" style=\"margin-top: 5px;\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"mt-1\" *ngIf=\"inspectionFileUploading\">\r\n        <span class=\"pdf\">Uploading file, please wait...</span>\r\n      </div>\r\n      <div class=\"mt-1\" *ngIf=\"inspectionFileName != ''\">\r\n        <span class=\"pdf\" style=\"color: green;\">File uploaded successfully</span>\r\n      </div>\r\n      <!-- Remarks -->\r\n      <div class=\"d-flex align-items-center p-1\" style=\"margin-top: 10px;\">\r\n        <div style=\"width: 100%;\">\r\n          <ion-label class=\"note\" style=\"font-weight: bold;\">Remarks</ion-label>\r\n          <ion-textarea [(ngModel)]=\"approveRemarks\" placeholder=\"Please Enter Your Remarks\" rows=\"3\"\r\n            style=\"border: 1px solid #ccc; border-radius: 5px; margin-top: 5px;\"></ion-textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"mt-2\">\r\n        <div class=\"note\">Note:</div>\r\n        <span class=\"pdf\">Upload inspection file (PDF, JPG, JPEG, PNG - Max 5MB) to approve</span>\r\n      </div>\r\n    </div>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <div class=\"optbtn mt-1\">\r\n          <ion-button fill=\"outline\" (click)=\"cancelInspectionUpload()\">Cancel</ion-button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <div class=\"optbtn mt-1\">\r\n          <ion-button fill=\"outline\" (click)=\"submitApproval()\" [disabled]=\"inspectionFileName == '' || inspectionFileUploading\">Submit</ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_rc_index_index_module_ts-es2015.js.map