(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_aadhitiya-session_aadhitiya-session_module_ts"],{

/***/ 12147:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AadhitiyaSessionPageRoutingModule": function() { return /* binding */ AadhitiyaSessionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aadhitiya-session.page */ 63973);




const routes = [
    {
        path: '',
        component: _aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_0__.AadhitiyaSessionPage
    }
];
let AadhitiyaSessionPageRoutingModule = class AadhitiyaSessionPageRoutingModule {
};
AadhitiyaSessionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AadhitiyaSessionPageRoutingModule);



/***/ }),

/***/ 14501:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AadhitiyaSessionPageModule": function() { return /* binding */ AadhitiyaSessionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aadhitiya_session_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aadhitiya-session-routing.module */ 12147);
/* harmony import */ var _aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aadhitiya-session.page */ 63973);







let AadhitiyaSessionPageModule = class AadhitiyaSessionPageModule {
};
AadhitiyaSessionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aadhitiya_session_routing_module__WEBPACK_IMPORTED_MODULE_0__.AadhitiyaSessionPageRoutingModule
        ],
        declarations: [_aadhitiya_session_page__WEBPACK_IMPORTED_MODULE_1__.AadhitiyaSessionPage]
    })
], AadhitiyaSessionPageModule);



/***/ }),

/***/ 63973:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AadhitiyaSessionPage": function() { return /* binding */ AadhitiyaSessionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_aadhitiya_session_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aadhitiya-session.page.html */ 60886);
/* harmony import */ var _aadhitiya_session_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aadhitiya-session.page.scss */ 32753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);












let AadhitiyaSessionPage = class AadhitiyaSessionPage {
    constructor(router, route, emisService, uploadService, modalCtrl, alertService, domsaintizer, userSessionService) {
        this.router = router;
        this.route = route;
        this.emisService = emisService;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.domsaintizer = domsaintizer;
        this.userSessionService = userSessionService;
        this.studentList = true;
        this.isplay = false;
        this.emisName = this.userSessionService.emis_username();
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.dataList = JSON.parse(params['data']);
        });
        if (this.dataList) {
            this.initialGet(this.dataList);
        }
    }
    ionViewDidEnter() {
        // this.route.queryParams.subscribe((params) => {
        //   this.dataList = JSON.parse(params['data']);
        // })
        if (this.dataList) {
            this.initialGet(this.dataList);
        }
    }
    initialGet(data) {
        this.school_id = data.school_id;
        let chk = {
            "SchlID": data.school_id,
            "BatcId": data.batch_id,
            "GrouId": data.id,
            "SesDate": data.session_date,
            "ArpId": data.user_id
        };
        this.studList = [];
        this.uploadDet = [];
        this.emisService.ArpRatingDetfBrte({ "records": chk }).subscribe(res => {
            if (res.dataStatus) {
                this.studList = res.result.RatingDetails;
                this.uploadDet = res.result.UploadDetails;
                this.statusChk = this.uploadDet[0].Stauts;
                this.reasonChk = this.uploadDet[0].Reasons;
                console.log(this.uploadDet, "ooo");
            }
        });
    }
    summary() {
        this.studentList = true;
        this.attendance = false;
        this.galleryPhoto = false;
    }
    attendence() {
        this.studentList = false;
        this.attendance = true;
        this.galleryPhoto = false;
    }
    gallery() {
        this.studentList = false;
        this.attendance = false;
        this.galleryPhoto = true;
        var bucketName = "renewalapplicationemis";
        var filename = this.uploadDet[0].Photo;
        let expiry = 1800;
        // this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(async (result) => {
        //   if (result) {
        //     this.imageData = result.url;
        //     if(this.imageData){
        //       var bucketName = "renewalapplicationemis";
        //       var filename = this.uploadDet[0].Photo1;
        //       let expiry: number = 1800;
        //       this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(async (result) => {
        //         if (result) {
        //           this.imageData1 = result.url;
        //         }
        //       })
        //     }
        //   }
        // })
        // var downloadedname = this.uploadDet[0].Video
        // let videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + downloadedname);
        // this.vidUrl = videoUrl
        this.playVideo(this.uploadDet[0].Video);
    }
    playVideo(val) {
        // this.destroyVideo() 
        this.filename = '';
        var A = Date.now();
        this.filename = A;
        this.downloadedname = val;
        this.videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://deka0egrc3bqo.cloudfront.net/" + this.downloadedname);
        this.vidUrl = this.videoUrl.changingThisBreaksApplicationSecurity;
        // if(!this.isplay){
        //   this.myVideo.nativeElement.pause();
        // }
        // else{
        //     this.myVideo.nativeElement.play();
        // }
    }
    mySelectHandler(val) {
        this.allowReasons = val;
        if (this.allowReasons == 1) {
            this.reasonData = null;
        }
    }
    valReasons(reason) {
        console.log(reason.target.value, "tete");
        this.reasonData = reason.target.value;
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
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    let doc;
                    doc = result.url;
                    if (ext[1] == 'pdf' || ext == 'pdf') {
                        this.uploadService.viewPdf(doc);
                    }
                    else {
                        const modal = yield this.modalCtrl.create({
                            component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_4__.ViewImagePage,
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
    showplan() {
        this.router.navigate(["/tabs/aadhitiya-session"]);
    }
    sessionPlan() {
        this.router.navigate(["/tabs/session-plan"]);
    }
    sessionSummary() {
        this.router.navigate(["/tabs/session-summary"]);
    }
    backBtn() {
        this.router.navigate(["/tabs/ka-session-verification"]);
    }
    save() {
        if (this.allowReasons == 2) {
            if (this.reasonData != null) {
                this.submitAllow = true;
            }
            else {
                this.alertService.error('Please Enter The Reasons');
            }
        }
        else {
            this.submitAllow = true;
        }
        if (this.submitAllow) {
            let val = {
                "IndxId": this.uploadDet[0].IndxId,
                "SchlId": this.school_id,
                "Stauts": this.allowReasons,
                "BrteId": this.emisName,
                "Reasons": this.reasonData
            };
            this.emisService.ArpBrteVerifyStaus({ "records": val }).subscribe(res => {
                if (res.dataStatus) {
                    this.alertService.success('Verified Successfully');
                    this.router.navigate(["/tabs/ka-session-verification"]);
                }
                else {
                    this.alertService.error('Unable to Verified');
                }
            });
        }
    }
};
AadhitiyaSessionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService }
];
AadhitiyaSessionPage.propDecorators = {
    myVideo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['video',] }],
    myAudio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['audio',] }]
};
AadhitiyaSessionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-aadhitiya-session',
        template: _raw_loader_aadhitiya_session_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aadhitiya_session_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AadhitiyaSessionPage);



/***/ }),

/***/ 32753:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.page.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color {\n  background-color: #03BECB;\n}\n\n.Div_plan {\n  padding: 25px;\n  border: 3px solid #8934E7;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n}\n\n.Div_font {\n  font-size: 14px;\n  font-weight: bold;\n  color: #182D80;\n}\n\n.Div_color {\n  align-self: self-end;\n  color: azure;\n  padding-left: 5px;\n}\n\n.Div_size {\n  text-align: center;\n  color: white;\n  align-self: center;\n  font-size: 20px;\n}\n\n.Div_summary {\n  padding: 24px;\n  border: 3px solid #22720E;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n}\n\n.Div_attnce {\n  border: 1px solid #8934E7;\n  border-radius: 22px;\n  text-align: center;\n  padding: 10px;\n  align-self: center;\n}\n\n.imgRow {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFhZGhpdGl5YS1zZXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDTjs7QUFDRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFERTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxhQUFBO0VBQWMsNkJBQUE7QUFPbEIiLCJmaWxlIjoiYWFkaGl0aXlhLXNlc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzQkVDQjtcclxuICBcclxuICB9XHJcbiAgLkRpdl9wbGFue1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM4OTM0RTc7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuRGl2X2ZvbnR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzE4MkQ4MDtcclxuICB9XHJcbiAgLkRpdl9jb2xvcntcclxuICAgIGFsaWduLXNlbGY6IHNlbGYtZW5kO1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG4gIC5EaXZfc2l6ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLkRpdl9zdW1tYXJ5e1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMyMjcyMEU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuRGl2X2F0dG5jZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4OTM0RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgLmltZ1Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 60886:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/aadhitiya-session/aadhitiya-session.page.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>aadhitiya-session</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" >\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"backBtn()\"></ion-icon>\r\n      <!-- <ion-icon class=\"back-icon\" name=\"arrow-back\" name=\"person-circle-outline\" size=\"large\"></ion-icon> -->\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Art and Culture</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <ion-row style=\"margin: 15px;margin-top: 9%;\">\r\n  <!--<ion-col size=\"6\">\r\n    <div class=\"Div_plan\">\r\n      <ion-label class=\"Div_font\">Session Plan</ion-label>\r\n    </div>\r\n    <ion-row style=\"background-color: #8934E7;\" (click)=\"sessionPlan()\">\r\n      <ion-col size=\"8\">\r\n        <div class=\"Div_color\"(click)=\"showplan()\">See mores\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"Div_size\">\r\n        <div>\r\n          <ion-icon name='arrow-forward-circle'></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col> -->\r\n  \r\n  <!-- <ion-col size=\"6\">\r\n    <div class=\"Div_summary\">\r\n      <ion-label class=\"Div_font\">Session Summary</ion-label>\r\n    </div>\r\n    <ion-row style=\"background-color: #22720E;\" (click)=\"sessionSummary()\">\r\n      <ion-col size=\"8\">\r\n        <div class=\"Div_color\">See mores\r\n        </div>\r\n      </ion-col>\r\n      <ion-col class=\"Div_size\">\r\n        <div>\r\n          <ion-icon name='arrow-forward-circle'></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-col> -->\r\n\r\n\r\n  <ion-col size=\"6\" class=\"Div_attnce\" (click)=\"summary()\">\r\n    <ion-row class=\"imgRow\">\r\n        <div style=\"font-size: 15px;\">Summary</div>\r\n    </ion-row>\r\n  </ion-col>\r\n  <!-- <ion-col size=\"4\" class=\"Div_attnce\" (click)=\"attendence()\">\r\n    <ion-row class=\"imgRow\">\r\n      <div >\r\n        <img src=\"../../../../../assets/images/art&culture/Icon open-graph.svg\"> \r\n      </div>\r\n        <div style=\"font-size: 15px;\">Attendance</div>\r\n    </ion-row>\r\n  </ion-col> -->\r\n  <ion-col size=\"6\" class=\"Div_attnce\" (click)=\"gallery()\">\r\n    <ion-row class=\"imgRow\">\r\n        <div style=\"font-size: 15px;\">Gallery</div>\r\n    </ion-row>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n\r\n  \r\n<ion-row style=\"background-color:#917AFE;padding: 6px;border-radius:10px;margin-bottom: 5px;margin-top: 20px;\" *ngIf=\"studentList\">\r\n  <ion-col size=\"6.5\" style=\"border-right: 1px solid white;\">\r\n    <div style=\"color:white\">\r\n      <ion-label>Student Name</ion-label>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col size=\"5.5\">\r\n    <div style=\"color:white;padding-left: 5px;\">\r\n      <ion-label>Rating</ion-label>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n<div *ngIf=\"studentList\">\r\n  <ion-row class=\"stuName\" *ngFor=\"let data of studList;index as j\">\r\n    <ion-col size=\"6.5\" style=\"border-right: 1px solid lightgray;\">\r\n      <div style=\"padding-left: 5px;\">\r\n        <ion-label>{{data.StudName}}</ion-label><br>\r\n        <!-- <ion-label>{{data.class_studying_id == 6 ? 'VI' : data.class_studying_id == 7 ? 'VII' : data.class_studying_id == 8 ? 'VIII' : 'IX'}} - {{data.class_section}}  {{data.user_id}}</ion-label> -->\r\n        <ion-label>{{data.StudId}}</ion-label>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"5.5\">\r\n      <div *ngIf=\"data.Rating == 5\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 4\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 3\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 2\"><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>\r\n      <div *ngIf=\"data.Rating == 1\"><ion-icon name=\"star\"></ion-icon></div>\r\n    </ion-col>\r\n  </ion-row>\r\n</div>\r\n\r\n<ion-row style=\"background-color:#917AFE;padding: 6px;border-radius:10px;margin-bottom: 5px;margin-top: 20px;\" *ngIf=\"attendance\">\r\n  <ion-col size=\"12\">\r\n    <div style=\"color:white\">\r\n      <ion-label>Student Attendance Percentage is 75%</ion-label>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row style=\"padding: 6px;border-radius:10px;margin-bottom: 5px;margin-top: 20px;\" *ngIf=\"galleryPhoto\">\r\n  <ion-col size=\"12\" *ngIf=\"this.uploadDet[0].Photo\">\r\n    <div class=\"upload-key\">\r\n      <div style=\"margin: 15px;\">\r\n        <p>Please Click To View</p>\r\n        <a style=\"color: #1B85FF;\" (click)=\"viewDoc(this.uploadDet[0].Photo)\">\r\n          View Image : {{this.uploadDet[0].Photo | json}}\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col size=\"12\" *ngIf=\"this.uploadDet[0].Photo1\">\r\n    <div class=\"upload-key\">\r\n      <div style=\"margin: 15px;\">\r\n        <p>Please Click To View</p>\r\n        <a style=\"color: #1B85FF;\" (click)=\"viewDoc(this.uploadDet[0].Photo1)\">\r\n          View Image : {{this.uploadDet[0].Photo1 | json}}\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </ion-col>\r\n  <ion-col size=\"12\" *ngIf=\"vidUrl\">\r\n    <div class=\"upload-key\">\r\n      <div style=\"margin: 15px;\">\r\n        <video controls width=\"100%\" height=\"210\" #video type=\"video/mp4\" controlsList=\"nodownload\">\r\n          <source src={{vidUrl}} type=\"video/mp4\">\r\n        </video>\r\n      </div>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"vidUrl\" style=\"margin: 15px;margin-top: 5%;\">\r\n  <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"statusChk == 0\">\r\n      <ion-label>Please Select Verified / Not Verified</ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center;background-color: #d8b7ef; border-radius: 31px;\" *ngIf=\"statusChk != 0\">\r\n    <ion-label>{{statusChk == 1 ? 'Verified' : 'Not Verified' }}</ion-label>\r\n</ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"statusChk == 0\">\r\n    <ion-select [(ngModel)]=\"statusChk\" (ngModelChange)=\"mySelectHandler($event)\" placeholder=\"Please Select\" style=\"background-color: #d8b7ef; border-radius: 10px;\">\r\n      <ion-select-option [value]=\"1\">Verified</ion-select-option>\r\n      <ion-select-option [value]=\"2\">Not Verified</ion-select-option>\r\n    </ion-select>\r\n  </ion-col>\r\n  <ion-col size=\"6\" *ngIf=\"allowReasons == 2\">\r\n    <ion-label>Enter Reasons <span style=\"color:red\">*</span></ion-label>\r\n  </ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"allowReasons == 2 || statusChk == 2\">\r\n      <input required=\"true\" type=\"text\" (keyup)=\"valReasons($event)\" placeholder=\"Please Enter Reason\" disabled=\"statusChk == 2\" [(ngModel)]=\"reasonChk\" class=\"w-100\" />\r\n  </ion-col>\r\n  <ion-col size=\"12\" style=\"text-align: center; margin-top: 10px;\" *ngIf=\"allowReasons == 1 || allowReasons == 2\">\r\n    <div style=\"text-align: center;\" (click)=\"save()\" >\r\n      <button class=\"btn\" style=\"background-color: #d8b7ef; border-radius: 10px;\">Submit</button>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_aadhitiya-session_aadhitiya-session_module_ts-es2015.js.map