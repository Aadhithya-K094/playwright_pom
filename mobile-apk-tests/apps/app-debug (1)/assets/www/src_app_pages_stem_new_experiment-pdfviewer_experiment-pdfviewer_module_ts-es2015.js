(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_experiment-pdfviewer_experiment-pdfviewer_module_ts"],{

/***/ 96373:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPdfviewerPageRoutingModule": function() { return /* binding */ ExperimentPdfviewerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiment-pdfviewer.page */ 89993);




const routes = [
    {
        path: '',
        component: _experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_0__.ExperimentPdfviewerPage
    }
];
let ExperimentPdfviewerPageRoutingModule = class ExperimentPdfviewerPageRoutingModule {
};
ExperimentPdfviewerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExperimentPdfviewerPageRoutingModule);



/***/ }),

/***/ 35236:
/*!************************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPdfviewerPageModule": function() { return /* binding */ ExperimentPdfviewerPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _experiment_pdfviewer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiment-pdfviewer-routing.module */ 96373);
/* harmony import */ var _experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiment-pdfviewer.page */ 89993);







let ExperimentPdfviewerPageModule = class ExperimentPdfviewerPageModule {
};
ExperimentPdfviewerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _experiment_pdfviewer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperimentPdfviewerPageRoutingModule
        ],
        declarations: [_experiment_pdfviewer_page__WEBPACK_IMPORTED_MODULE_1__.ExperimentPdfviewerPage]
    })
], ExperimentPdfviewerPageModule);



/***/ }),

/***/ 89993:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperimentPdfviewerPage": function() { return /* binding */ ExperimentPdfviewerPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_experiment_pdfviewer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./experiment-pdfviewer.page.html */ 43685);
/* harmony import */ var _experiment_pdfviewer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiment-pdfviewer.page.scss */ 91839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/tnvn/services/loading.service */ 47224);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);














let ExperimentPdfviewerPage = class ExperimentPdfviewerPage {
    constructor(router, alertService, route, userService, http, domsaintizer, fileTransfer, file, modalCtrl, fileOpener, loading) {
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.userService = userService;
        this.http = http;
        this.domsaintizer = domsaintizer;
        this.fileTransfer = fileTransfer;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.fileOpener = fileOpener;
        this.loading = loading;
        this.array1Submenu = [
            {
                icon: "../../../../assets/images/A4A3A5_paper.png",
                name: "A4 paper, A3 paper, A5 Paper Volume of sand with a Cylinder, Cone",
                value: "1",
                subvalue: "1",
                pdf: "fe6053e0-5c57-11ee-883b-abbb8bad8816.pdf"
            },
            {
                icon: "../../../../assets/images/BMI.png",
                name: "Body Mass Index",
                value: "2",
                subvalue: "1",
                pdf: "5093e7b0-5c55-11ee-b8da-7b2267927916.pdf"
            },
            {
                icon: "../../../../assets/images/tug_of_war.png",
                name: "Tug or War - Pulling the Rope ",
                value: "3",
                subvalue: "2",
                pdf: "74435790-5c55-11ee-b8da-7b2267927916.pdf"
            },
            {
                icon: "../../../../assets/images/balloon_car.png",
                name: "Balloon Car",
                value: "4",
                subvalue: "2",
                pdf: "99db84a0-5c55-11ee-b8da-7b2267927916.pdf"
            },
            {
                icon: "../../../../assets/images/basket_ball.png",
                name: "Basket Ball Game",
                value: "5",
                subvalue: "2",
                pdf: "98a3d280-5c56-11ee-b444-3b0bc1074ee2.pdf"
            },
            {
                icon: "../../../../assets/images/balloon_pressure.png",
                name: "Balloon Pressure",
                value: "6",
                subvalue: "3",
                pdf: "b8b7f330-5c56-11ee-b8da-7b2267927916.pdf"
            },
            {
                icon: "../../../../assets/images/salt_paper.png",
                name: "Salt Paper experiment ",
                value: "7",
                subvalue: "4",
                pdf: "d4f171c0-5c56-11ee-b444-3b0bc1074ee2.pdf"
            }
        ];
        this.array2Submenu = [
            {
                icon: "../../../../assets/images/pi.png",
                name: "Find out the value of pi",
                value: "1",
                subvalue: "1",
                pdf: "fd141a40-5c56-11ee-b444-3b0bc1074ee2.pdf"
            },
            {
                icon: "../../../../assets/images/number_system.png",
                name: "Number System",
                value: "2",
                subvalue: "2",
                pdf: "21a95640-5c57-11ee-b8da-7b2267927916.pdf"
            },
            {
                icon: "../../../../assets/images/prime_numbers.png",
                name: "Prime Numbers",
                value: "3",
                subvalue: "2",
                pdf: "3ceb0750-5c57-11ee-b8da-7b2267927916.pdf"
            },
            {
                icon: "../../../../assets/images/place_Value.png",
                name: "Place value",
                value: "4",
                subvalue: "2",
                pdf: "559125f0-5c57-11ee-b444-3b0bc1074ee2.pdf"
            },
            {
                icon: "../../../../assets/images/place_Value.png",
                name: "Place Value",
                value: "5",
                subvalue: "2",
                pdf: "6de04af0-5c57-11ee-b444-3b0bc1074ee2.pdf"
            },
            {
                icon: "../../../../assets/images/decimal.png",
                name: "Decimals",
                value: "6",
                subvalue: "2",
                pdf: "86cd5da0-5c57-11ee-b8da-7b2267927916.pdf"
            },
            {
                icon: "../../../../assets/images/cilinometer.png",
                name: "Clinometer",
                value: "7",
                subvalue: "3",
                pdf: "a25391c0-5c57-11ee-883b-abbb8bad8816.pdf"
            },
            {
                icon: "../../../../assets/images/profitsandLoss.png",
                name: "Profits, and Loss",
                value: "8",
                subvalue: "3",
                pdf: "b795c4e0-5c57-11ee-883b-abbb8bad8816.pdf"
            },
            {
                icon: "../../../../assets/images/perimeter_using_Snap_Cubes.png",
                name: "Perimeter using Snap Cubes",
                value: "9",
                subvalue: "4",
                pdf: "cecb8aa0-5c57-11ee-883b-abbb8bad8816.pdf"
            }
        ];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.name = this.routeData.queryParams.name;
        this.value = this.routeData.queryParams.value;
        this.expermentId = this.routeData.queryParams.expermentId;
        this.activeMenu = true;
        this.menuarray = [];
        if (this.expermentId == 1) {
            this.menuarray = this.array1Submenu.filter(item => item.subvalue == this.value);
        }
        if (this.expermentId == 2) {
            this.menuarray = this.array2Submenu.filter(item => item.subvalue == this.value);
        }
    }
    viewFile(selectedFilename) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // var filename = "Thoduvaanam2_itk_e_journal_M_2022.pdf";
            var filename = selectedFilename;
            this.PDFFileName = this.domsaintizer.bypassSecurityTrustResourceUrl("https://deka0egrc3bqo.cloudfront.net/" + selectedFilename);
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
    navigateBack() {
        this.router.navigate(['/tabs/experiment-phase'], { queryParams: { "value": this.value, "name": this.name, expermentId: this.expermentId } });
    }
};
ExperimentPdfviewerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener },
    { type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService }
];
ExperimentPdfviewerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-experiment-pdfviewer',
        template: _raw_loader_experiment_pdfviewer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_experiment_pdfviewer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExperimentPdfviewerPage);



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

/***/ 91839:
/*!************************************************************************************!*\
  !*** ./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.page.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-image {\n  background: url(\"/assets/images/Rectangle.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 2100%;\n}\n\n.circle {\n  height: 75px;\n  padding: 10%;\n  padding-left: 15% !important;\n  padding-top: 15% !important;\n}\n\n.circle1 {\n  padding: 10%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaW1lbnQtcGRmdmlld2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBR0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoiZXhwZXJpbWVudC1wZGZ2aWV3ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1JlY3RhbmdsZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMjEwMCU7XHJcbiAgfSBcclxuXHJcbiAgLmNpcmNsZSB7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjNkU1M0ZGO1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNSUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUxIHtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAiXX0= */");

/***/ }),

/***/ 43685:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/experiment-pdfviewer/experiment-pdfviewer.page.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <ion-row class=\"header-image\">\r\n    <ion-col size=\"12\">\r\n      <ion-row>\r\n        <ion-col size=\"3\" style=\"font-size: x-large;\">\r\n          <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n          </ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"9\" style=\"padding-left:5%;font-size: large;color: white;\">\r\n          {{name}}\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div>\r\n        <ion-row *ngFor=\"let item of menuarray\">\r\n          <ion-col size=\"4\" style=\"text-align: end;margin-bottom: 3%;\">\r\n            <img src={{item.icon}} />\r\n          </ion-col>\r\n          <ion-col size=\"8\" style=\"text-align:start;color: white;align-self: center;\r\n        margin-bottom: 3%;\" (click)=\"viewFile(item.pdf)\">\r\n            {{item.name}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_experiment-pdfviewer_experiment-pdfviewer_module_ts-es2015.js.map