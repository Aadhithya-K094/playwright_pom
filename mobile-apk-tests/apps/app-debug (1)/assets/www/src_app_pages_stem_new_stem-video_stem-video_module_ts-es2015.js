(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-video_stem-video_module_ts"],{

/***/ 83232:
/*!************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-video/stem-video-routing.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StemVideoPageRoutingModule": function() { return /* binding */ StemVideoPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stem_video_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stem-video.page */ 33404);




const routes = [
    {
        path: '',
        component: _stem_video_page__WEBPACK_IMPORTED_MODULE_0__.StemVideoPage
    }
];
let StemVideoPageRoutingModule = class StemVideoPageRoutingModule {
};
StemVideoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StemVideoPageRoutingModule);



/***/ }),

/***/ 73955:
/*!****************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-video/stem-video.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StemVideoPageModule": function() { return /* binding */ StemVideoPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _stem_video_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stem-video-routing.module */ 83232);
/* harmony import */ var _stem_video_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stem-video.page */ 33404);







let StemVideoPageModule = class StemVideoPageModule {
};
StemVideoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stem_video_routing_module__WEBPACK_IMPORTED_MODULE_0__.StemVideoPageRoutingModule
        ],
        declarations: [_stem_video_page__WEBPACK_IMPORTED_MODULE_1__.StemVideoPage]
    })
], StemVideoPageModule);



/***/ }),

/***/ 33404:
/*!**************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-video/stem-video.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StemVideoPage": function() { return /* binding */ StemVideoPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_stem_video_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stem-video.page.html */ 1635);
/* harmony import */ var _stem_video_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stem-video.page.scss */ 93010);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../view-pdf/view-pdf.page */ 51747);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
















let StemVideoPage = class StemVideoPage {
    constructor(upload, http, domsaintizer, fileTransfer, file, modalCtrl, router, alertService, route, modalcontroller, userService, fileOpener, loading) {
        this.upload = upload;
        this.http = http;
        this.domsaintizer = domsaintizer;
        this.fileTransfer = fileTransfer;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.modalcontroller = modalcontroller;
        this.userService = userService;
        this.fileOpener = fileOpener;
        this.loading = loading;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.theme = this.routeData.queryParams.theme;
        this.value = this.routeData.queryParams.value;
        this.vidUrl = '';
        this.playVideo();
        this.name = this.routeData.queryParams.name;
        this.tpdf = this.routeData.queryParams.tpdf;
        this.epdf = this.routeData.queryParams.epdf;
        this.downloadedname = '';
        this.studentData();
    }
    ionViewDidLeave() {
        this.destroyVideo();
    }
    ionViewWillLeave() {
        this.destroyVideo();
    }
    ngOnDestroy() {
        this.destroyVideo();
    }
    studentData() {
    }
    destroyVideo() {
        let videoElement = document.getElementById(this.filename);
        videoElement.pause();
        this.vidUrl = "";
        videoElement.src = "";
        videoElement.removeAttribute('src');
        videoElement.load();
    }
    playVideo() {
        this.destroyVideo();
        this.filename = '';
        var A = Date.now();
        this.filename = A;
        this.downloadedname = this.value;
        let videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + this.downloadedname + ".mp4");
        this.vidUrl = videoUrl;
    }
    navigateBack() {
        this.router.navigate(['/tabs/experiments'], { queryParams: { "value": this.theme, "name": this.name } });
    }
    viewImage(urlPdf) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // this.pauseVideo() 
            const modal = yield this.modalCtrl.create({
                component: _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__.ViewPdfPage,
                componentProps: { image: urlPdf, name: this.name },
                cssClass: 'fullscreen',
                backdropDismiss: false,
            });
            yield modal.present();
        });
    }
    modal(value) {
        if (value == 1) {
            this.presentModal("rating");
            this.pauseVideo();
        }
        else if (value == 2) {
            {
                this.presentModal("Comments");
                this.pauseVideo();
            }
        }
        else {
            // this.downloadVideo(this.downloadedname)
        }
    }
    presentModal(mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // const modal = await this.modalcontroller.create({
            //   component: RatingCommentPage, 
            //   cssClass: 'my-modal',
            //   componentProps: {
            //     'mode':mode, 
            //     'videoType':"1",
            //     'VideoId':"1",
            //     'ChapterId':"1", 
            //     'RbcId':"1",
            //   }
            // });
            // return await modal.present();
        });
    }
    pauseVideo() {
        // let videoElement = <HTMLVideoElement>document.getElementById('this.filename');
        // videoElement.pause();
    }
    viewFile(selectedFilename) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            // var filename = "Thoduvaanam2_itk_e_journal_M_2022.pdf";
            var filename = selectedFilename;
            this.PDFFileName = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + selectedFilename);
            let pdfurl = this.PDFFileName.changingThisBreaksApplicationSecurity;
            let path = this.file.dataDirectory;
            const transfer = this.fileTransfer.create();
            this.loading.show();
            transfer.download(pdfurl, `${path} ${selectedFilename}`).then((entry) => {
                let url = entry.toURL();
                this.fileOpener.open(url, "application/pdf");
                this.loading.dismiss();
            }, (error) => {
                this.fileOpener.open(pdfurl, "application/pdf");
                this.alertService.error("File download failed");
                this.loading.dismiss();
            });
        });
    }
    testVideoDownload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.alertService.success("File downloaded Successfully");
            const fileTransfer = this.fileTransfer.create();
            let path = this.file.externalRootDirectory;
            this.downloadedname = this.value;
            let vDownload = this.vidUrl.changingThisBreaksApplicationSecurity;
            let videorl = "https://d1p3r7kc5uix85.cloudfront.net/bd16ae508cf1425886d81068d255973a.mp4";
            yield fileTransfer.download(vDownload, path + '/Download/' + this.name + ".mp4").then((entry) => {
            }, (error) => {
                // this.alertService.error("File download failed");
            });
        });
    }
};
StemVideoPage.ctorParameters = () => [
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_8__.FileOpener },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_9__.LoadingService }
];
StemVideoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-stem-video',
        template: _raw_loader_stem_video_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stem_video_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StemVideoPage);



/***/ }),

/***/ 47224:
/*!***********************************************************!*\
  !*** ./src/app/services/tnvn/services/loading.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    present(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 100000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    show(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 1000,
                message: message || ''
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then(() => {
                        });
                    }
                });
            });
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then(() => {
            });
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 93010:
/*!****************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-video/stem-video.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVtLXZpZGVvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1635:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-video/stem-video.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row>\r\n\r\n    <ion-col size=\"12\">\r\n      <ion-icon name=\"arrow-back\" style=\"margin-top: 3%;margin-left: 3%;margin-right: 2%;zoom: 1.3;\" (click)=\"navigateBack()\">  </ion-icon> <span style=\"margin-top: 3%;margin-left: 3%;margin-right: 2%;zoom: 1.3;\"> Experiments </span>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" style=\"padding: 5%;\">\r\n      <video controls width=\"100%\" height=\"210\" [id]=this.filename type=\"video/mp4\" controlsList=\"nodownload\">\r\n        <source [src]=this.vidUrl type=\"video/mp4\">\r\n      </video>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"8\" style=\"padding: 5%;font-weight: bold;\">\r\n      {{name}}\r\n    </ion-col>\r\n\r\n    <ion-col size=\"4\" style=\"padding: 5%;zoom: 1.5;text-align: center;color: #6b4dc9;\">\r\n      <ion-icon name=\"download\" (click)=\"testVideoDownload()\"></ion-icon>\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"12\" style=\"padding: 5%;\">\r\n      <ion-row> \r\n\r\n        <ion-col size=\"4\" (click)=\"modal(1)\">\r\n          <ion-icon class=\"ion-ma\" src=\"/assets/images/awesome-star.svg\"></ion-icon><br>\r\n          <ion-label class=\"tab-label-text\">Rating</ion-label>\r\n         </ion-col>\r\n\r\n         <ion-col size=\"4\"  (click)=\"modal(2)\">\r\n          <ion-icon src=\"/assets/images/awesome-comments.svg\"></ion-icon><br>\r\n          <ion-label class=\"tab-label-text\">Comment</ion-label>\r\n         </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-col> -->\r\n\r\n    <ion-col size=\"12\" style=\"padding: 5%;\">\r\n      <ion-row> \r\n        <ion-col size=\"6\" (click)=\"viewFile(this.tpdf)\">\r\n          <img src=\"/assets/images/video_tamil.png\" class=\"menuicon\">  \r\n        </ion-col>\r\n    \r\n        <ion-col size=\"6\" (click)=\"viewFile(this.epdf)\">\r\n          <img src=\"/assets/images/video_english.png\" class=\"menuicon\">   \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n \r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_stem-video_stem-video_module_ts-es2015.js.map