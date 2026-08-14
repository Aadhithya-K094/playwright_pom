(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_know-your-leaves_know-your-leaves_module_ts"],{

/***/ 83564:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/leave/know-your-leaves/know-your-leaves-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowYourLeavesPageRoutingModule": function() { return /* binding */ KnowYourLeavesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _know_your_leaves_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./know-your-leaves.page */ 61774);




const routes = [
    {
        path: '',
        component: _know_your_leaves_page__WEBPACK_IMPORTED_MODULE_0__.KnowYourLeavesPage
    }
];
let KnowYourLeavesPageRoutingModule = class KnowYourLeavesPageRoutingModule {
};
KnowYourLeavesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KnowYourLeavesPageRoutingModule);



/***/ }),

/***/ 50816:
/*!*************************************************************************!*\
  !*** ./src/app/pages/leave/know-your-leaves/know-your-leaves.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowYourLeavesPageModule": function() { return /* binding */ KnowYourLeavesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _know_your_leaves_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./know-your-leaves-routing.module */ 83564);
/* harmony import */ var _know_your_leaves_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./know-your-leaves.page */ 61774);







let KnowYourLeavesPageModule = class KnowYourLeavesPageModule {
};
KnowYourLeavesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _know_your_leaves_routing_module__WEBPACK_IMPORTED_MODULE_0__.KnowYourLeavesPageRoutingModule
        ],
        declarations: [_know_your_leaves_page__WEBPACK_IMPORTED_MODULE_1__.KnowYourLeavesPage]
    })
], KnowYourLeavesPageModule);



/***/ }),

/***/ 61774:
/*!***********************************************************************!*\
  !*** ./src/app/pages/leave/know-your-leaves/know-your-leaves.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KnowYourLeavesPage": function() { return /* binding */ KnowYourLeavesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_know_your_leaves_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./know-your-leaves.page.html */ 77191);
/* harmony import */ var _know_your_leaves_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./know-your-leaves.page.scss */ 46184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_pages_rc_view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/rc/view-pdf/view-pdf.page */ 65175);










// import { ViewPdfPagePage } from 'src/app/pages/commonpages/view-pdf-page/view-pdf-page.page';

let KnowYourLeavesPage = class KnowYourLeavesPage {
    constructor(router, emisService, alert, usersessionService, route, uploadService, modalCtrl) {
        this.router = router;
        this.emisService = emisService;
        this.alert = alert;
        this.usersessionService = usersessionService;
        this.route = route;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.serviceLeaves = [];
        this.sessionTeacherId = this.usersessionService.teacher_id();
        this.sessionTeacherName = this.usersessionService.teacher_name();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.routeData = this.route.snapshot;
        this.gender = this.routeData.queryParams.Gender;
        this.teacher_id = this.sessionTeacherId;
        this.getFirstAppliedLeaveBalanceList();
    }
    //get available leave Balance list with teacher ID //
    getFirstAppliedLeaveBalanceList() {
        this.emisService.getTchrLeaveBalanceList(this.sessionTeacherId, this.gender).subscribe((data) => {
            if (data.dataStatus == true) {
                this.LeaveBalanceList = [];
                this.LeaveBalanceList = data.result.service;
                if (data.result.Service.length > 0) {
                    this.yearlyLeaves = data.result.yearly;
                    this.serviceLeaves = data.result.Service;
                }
            }
            else {
                this.alert.error(data.message);
            }
        }, error => {
            this.alert.error("Unable to connect to the server.  Please try after some time.");
        });
    }
    //get pdf from bucket and view pdf using modal controller
    viewPdf(docName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var bucketName = "renewalapplicationemis";
            var filename = docName;
            let ext = "pdf";
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.image1 = result.url;
                    const modal = yield this.modalCtrl.create({
                        component: src_app_pages_rc_view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_6__.ViewPdfPage,
                        componentProps: { image: this.image1, extension: ext },
                        cssClass: 'fullscreen',
                        backdropDismiss: false,
                    });
                    yield modal.present();
                }
                else {
                    this.alert.error('Error in getting image file');
                }
            }), error => {
                this.alert.error("Unable to connect to the server.  Please try after some time.");
            });
        });
    }
    //navigate to leave dashboard page
    goBack() {
        this.router.navigate(["/tabs/e-sr"], { queryParams: { 'page': 2 }, skipLocationChange: false });
    }
};
KnowYourLeavesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
KnowYourLeavesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-know-your-leaves',
        template: _raw_loader_know_your_leaves_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_know_your_leaves_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KnowYourLeavesPage);



/***/ }),

/***/ 46184:
/*!*************************************************************************!*\
  !*** ./src/app/pages/leave/know-your-leaves/know-your-leaves.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\n.user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\n.input-row {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  background-color: white;\n  padding: 0px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  border-radius: 10px;\n}\n\n.user-grid {\n  background-color: white;\n  border-radius: 10px;\n}\n\n.user-col-label {\n  margin-top: 10px;\n  border-bottom: 1px dashed lightgray;\n  border-right: 1px dashed lightgray;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.user-col {\n  margin-top: 10px;\n  border-right: 1px dashed lightgray;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.lv-title-cls {\n  text-align: center;\n  font-size: 20px;\n  color: white;\n  font-weight: 500;\n  margin-top: 10px;\n}\n\n.item-center {\n  align-self: center;\n  font-size: 14px;\n}\n\n.bls-label {\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  text-align: right;\n}\n\n.bls-num-cls {\n  align-self: center;\n  border-right: 1px dashed lightgray;\n  text-align: center;\n}\n\n.icon-col {\n  justify-content: center;\n  display: flex;\n}\n\n.icon-img {\n  text-align: center;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtub3cteW91ci1sZWF2ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6Imtub3cteW91ci1sZWF2ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTEwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5wdXQtcm93IHtcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnVzZXItZ3JpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnVzZXItY29sLWxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCBsaWdodGdyYXk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51c2VyLWNvbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgbGlnaHRncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ubHYtdGl0bGUtY2xzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5pdGVtLWNlbnRlciB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJscy1sYWJlbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYmxzLW51bS1jbHMge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgbGlnaHRncmF5O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24tY29sIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaWNvbi1pbWcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSJdfQ== */");

/***/ }),

/***/ 77191:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/know-your-leaves/know-your-leaves.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Know Your Leaves</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"leave-container\">\r\n    <!-- User container -->\r\n    <ion-grid class=\"user-grid\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"user-col-label\">\r\n          <ion-label>Name</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\" class=\"user-col-label\">\r\n          <ion-label>User Id</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"user-col\">\r\n          <ion-label>{{sessionTeacherName}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"user-col\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <!-- Yearly leave container -->\r\n    <div class=\"lv-title-cls\" *ngIf=\"yearlyLeaves?.length != 0\">\r\n      <ion-label>Yearly leaves </ion-label>\r\n    </div>\r\n\r\n    <ion-row style=\"margin-top: 0px;\" *ngIf=\"this.yearlyLeaves?.length != 0\">\r\n      <ion-col size=\"6\">\r\n        <ion-label class=\"bls-label\"></ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"text-right\">\r\n        <ion-label class=\"bls-label\">Balance</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"input-row\" *ngFor=\"let YLitem of yearlyLeaves; let i = index;\">\r\n      <ion-col size=\"1.5\" class=\"bls-num-cls\">\r\n        <ion-label>{{(i+1)}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"9\" class=\"item-center\">\r\n        <ion-label>{{YLitem.LeaveType}}</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"1.5\" class=\"icon-img\" (click)=\"viewPdf(YLitem.document_name)\">\r\n        <img class=\"icon-img\" src=\"/assets/icons/leave/Pdf.svg\">\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- service leave container -->\r\n    <div class=\"lv-title-cls\" *ngIf=\"this.serviceLeaves?.length != 0\">\r\n      <ion-label>Service Leaves</ion-label>\r\n    </div>\r\n\r\n    <ion-row style=\"margin-top: 0px;\" *ngIf=\"this.serviceLeaves?.length != 0\">\r\n      <ion-col size=\"6\">\r\n        <ion-label></ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"text-right\">\r\n        <ion-label class=\"bls-label\"> Balance</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"input-row\" *ngFor=\"let item of serviceLeaves; let i = index;\">\r\n      <ion-col size=\"1.5\" class=\"bls-num-cls\">\r\n        <ion-label>{{(i+1)}}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"9\" class=\"item-center\">\r\n        <ion-label>{{item.LeaveType}}</ion-label>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"1.5\" class=\"icon-img\" (click)=\"viewPdf(item.document_name)\">\r\n        <img class=\"icon-img\" src=\"/assets/icons/leave/Pdf.svg\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_leave_know-your-leaves_know-your-leaves_module_ts-es2015.js.map