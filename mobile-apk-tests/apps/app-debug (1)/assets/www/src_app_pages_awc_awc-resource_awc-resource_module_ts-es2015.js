(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_awc-resource_awc-resource_module_ts"],{

/***/ 36396:
/*!***********************************************************************!*\
  !*** ./src/app/pages/awc/awc-resource/awc-resource-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcResourcePageRoutingModule": function() { return /* binding */ AwcResourcePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _awc_resource_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-resource.page */ 52158);




const routes = [
    {
        path: '',
        component: _awc_resource_page__WEBPACK_IMPORTED_MODULE_0__.AwcResourcePage
    }
];
let AwcResourcePageRoutingModule = class AwcResourcePageRoutingModule {
};
AwcResourcePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AwcResourcePageRoutingModule);



/***/ }),

/***/ 20936:
/*!***************************************************************!*\
  !*** ./src/app/pages/awc/awc-resource/awc-resource.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcResourcePageModule": function() { return /* binding */ AwcResourcePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _awc_resource_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./awc-resource-routing.module */ 36396);
/* harmony import */ var _awc_resource_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-resource.page */ 52158);







let AwcResourcePageModule = class AwcResourcePageModule {
};
AwcResourcePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _awc_resource_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwcResourcePageRoutingModule
        ],
        declarations: [_awc_resource_page__WEBPACK_IMPORTED_MODULE_1__.AwcResourcePage]
    })
], AwcResourcePageModule);



/***/ }),

/***/ 52158:
/*!*************************************************************!*\
  !*** ./src/app/pages/awc/awc-resource/awc-resource.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwcResourcePage": function() { return /* binding */ AwcResourcePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_awc_resource_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./awc-resource.page.html */ 97284);
/* harmony import */ var _awc_resource_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awc-resource.page.scss */ 96050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 50806);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 71484);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 91939);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var _ennum_ezhuthum_truthing_services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ennum-ezhuthum-truthing/services/loader/ion-loader.service */ 21645);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);












let AwcResourcePage = class AwcResourcePage {
    constructor(file, androidPermissions, usersessionService, transfer, fileOpener, alertService, ionLoaderService, router) {
        this.file = file;
        this.androidPermissions = androidPermissions;
        this.usersessionService = usersessionService;
        this.transfer = transfer;
        this.fileOpener = fileOpener;
        this.alertService = alertService;
        this.ionLoaderService = ionLoaderService;
        this.router = router;
    }
    ngOnInit() {
    }
    onGoButton() {
        this.router.navigate(['/tabs/home']);
    }
    downloadExlWithPermission() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
                .then(status => {
                if (status.hasPermission) {
                    this.downloadExcel();
                }
                else {
                    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE])
                        .then(status => {
                        if (status.hasPermission) {
                            this.downloadExcel();
                        }
                        ;
                    });
                }
            });
        });
    }
    downloadExcel() {
        let url = 'https://deka0egrc3bqo.cloudfront.net/GMC_ICDS.pdf';
        let userId = this.usersessionService.emis_username();
        let fileExtension = '.pdf';
        let fileName = 'AWC-Resource' + Date.now().toString();
        // if (val == 1) {
        //   url = 'https://d1wpyxz35bzzz4.cloudfront.net/mht/'+userId+'-MHT-Wise-User-Level-Rpt.xlsx';
        //   fileName = 'MHT-Report' + Date.now().toString();
        // } else if(val==2){
        //   url = 'https://d1wpyxz35bzzz4.cloudfront.net/mht/'+userId+'-Pmoa-Line-List-Rpt.xlsx';
        //   fileName = 'PMOA-Report' + Date.now().toString();
        // }
        this.ionLoaderService.simpleLoader();
        const fileTransfer = this.transfer.create();
        fileTransfer.download(url, this.file.externalRootDirectory + '/Download/' + fileName + fileExtension, true).then((entry) => {
            // fileTransfer.download(workbook,true)
            this.ionLoaderService.dismissLoader();
            this.fileOpener.showOpenWithDialog(entry.toURL(), 'application/pdf')
                .then(() => console.log('File is opened'))
                .catch(e => console.log('Error opening file', e));
            console.log('download complete: ' + entry.toURL());
        }, (error) => {
            this.alertService.warning("Error While getting report");
            console.log('err', error);
        });
    }
};
AwcResourcePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__.FileTransfer },
    { type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__.FileOpener },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService },
    { type: _ennum_ezhuthum_truthing_services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_8__.IonLoaderService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AwcResourcePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-awc-resource',
        template: _raw_loader_awc_resource_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_awc_resource_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AwcResourcePage);



/***/ }),

/***/ 96050:
/*!***************************************************************!*\
  !*** ./src/app/pages/awc/awc-resource/awc-resource.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.p-10p {\n  padding: 10px;\n}\n\n.cusIcon {\n  font-size: 25px;\n}\n\n.titleCus {\n  margin: 0;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3Yy1yZXNvdXJjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoiYXdjLXJlc291cmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluTGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBOEI4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnAtMTBwIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jdXNJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4udGl0bGVDdXMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59Il19 */");

/***/ }),

/***/ 97284:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/awc-resource/awc-resource.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Resource</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"p-10p\">\r\n    <div class=\"mainLable\" (click)=\"downloadExlWithPermission()\"> \r\n      <h6 class=\"titleCus\">Growth Monitoring Chart</h6>\r\n      <ion-icon name=\"cloud-download-outline\" class=\"cusIcon\"></ion-icon>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_awc_awc-resource_awc-resource_module_ts-es2015.js.map