(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_itk-center-support_my-inspections2_my-inspections2_module_ts"],{

/***/ 57268:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/my-inspections2/my-inspections2-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspections2PageRoutingModule": function() { return /* binding */ MyInspections2PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_inspections2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-inspections2.page */ 29138);




const routes = [
    {
        path: '',
        component: _my_inspections2_page__WEBPACK_IMPORTED_MODULE_0__.MyInspections2Page
    }
];
let MyInspections2PageRoutingModule = class MyInspections2PageRoutingModule {
};
MyInspections2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyInspections2PageRoutingModule);



/***/ }),

/***/ 88904:
/*!************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/my-inspections2/my-inspections2.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspections2PageModule": function() { return /* binding */ MyInspections2PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_inspections2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-inspections2-routing.module */ 57268);
/* harmony import */ var _my_inspections2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-inspections2.page */ 29138);







let MyInspections2PageModule = class MyInspections2PageModule {
};
MyInspections2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_inspections2_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyInspections2PageRoutingModule
        ],
        declarations: [_my_inspections2_page__WEBPACK_IMPORTED_MODULE_1__.MyInspections2Page]
    })
], MyInspections2PageModule);



/***/ }),

/***/ 29138:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/my-inspections2/my-inspections2.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyInspections2Page": function() { return /* binding */ MyInspections2Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_my_inspections2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-inspections2.page.html */ 46600);
/* harmony import */ var _my_inspections2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-inspections2.page.scss */ 50857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/upload.service */ 83102);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/commonpages/view-image/view-image.page */ 29535);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);











let MyInspections2Page = class MyInspections2Page {
    constructor(router, navCtrl, emisService, userSessionService, uploadService, modalCtrl, alertService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.emisService = emisService;
        this.userSessionService = userSessionService;
        this.uploadService = uploadService;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.inspectionList = [];
        this.resultData = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.showList = true;
        this.QuestAnswer = false;
        // this.teacher_id  = this.userSessionService.teacher_id(); 
        this.teacher_id = this.userSessionService.emis_username();
        this.getMyInspectionsServer();
    }
    getMyInspectionsServer() {
        this.emisService.getMyInspectionListUpdated(this.teacher_id, 1).subscribe((res) => {
            if (res.result && res.result.length > 0) {
                this.inspectionList = [];
                res.result.forEach(element => {
                    this.inspectionList.push(element);
                });
                this.showList = true;
                // this.insertMyInspections(res.result);
                this.inspectionList.reverse();
            }
            else {
                this.showList = false;
            }
        });
    }
    moveInspection(resultData) {
        // console.log("navigate to vol-inpsection2 page", resultData);
        this.resultData = [];
        resultData.forEach(element => {
            this.resultData.push(element);
        });
        this.QuestAnswer = true;
    }
    viewImage(imageName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // console.log("imagename",imageName);    
            var bucketName = "renewalapplicationemis";
            // Dummy image
            // imageName ='a926d470-6fc8-11ed-a171-2700209804e4.jpg'
            var filename = imageName;
            let expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (result) {
                    this.image = result.url;
                    const modal = yield this.modalCtrl.create({
                        component: src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_5__.ViewImagePage,
                        componentProps: { image: this.image },
                        cssClass: 'view-image-modal'
                    });
                    yield modal.present();
                }
                else {
                    this.alertService.error('Error in getting image file');
                }
            }));
        });
    }
    goBack() {
        if (this.QuestAnswer) {
            this.QuestAnswer = false;
        }
        else {
            this.router.navigate(['tabs/itk-center-dashboard']);
        }
    }
};
MyInspections2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
MyInspections2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-my-inspections2',
        template: _raw_loader_my_inspections2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_inspections2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyInspections2Page);



/***/ }),

/***/ 50857:
/*!************************************************************************************!*\
  !*** ./src/app/pages/itk-center-support/my-inspections2/my-inspections2.page.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 10px;\n}\n\nion-card {\n  box-shadow: none !important;\n}\n\n.card-widget {\n  width: 100%;\n  margin: auto;\n  margin-top: 5%;\n  padding: 1%;\n  background-color: #e8f1f8;\n}\n\n.card-title {\n  width: 90%;\n  display: inline-block;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n}\n\n.card-subtitle {\n  color: #000000;\n  font-size: 13px;\n}\n\n.icon1 {\n  Zoom: 2;\n  text-align: end;\n  color: #2176b9;\n}\n\n.border {\n  border: #9a9fcd 1px solid;\n  margin-top: 3%;\n  width: 100%;\n}\n\nion-grid {\n  margin: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWluc3BlY3Rpb25zMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSwyQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUU7RUFDRSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFHSjs7QUFERTtFQUNFLFVBQUE7QUFJSiIsImZpbGUiOiJteS1pbnNwZWN0aW9uczIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXdpZGdldCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMWY4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLmNhcmQtc3VidGl0bGV7XHJcbiAgICAgIGNvbG9yOiAgIzAwMDAwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuaWNvbjF7XHJcbiAgICBab29tOjI7XHJcbiAgICB0ZXh0LWFsaWduOiAgZW5kOyBcclxuICAgIGNvbG9yOiAjMjE3NmI5O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyIHtcclxuICAgIGJvcmRlcjogIzlhOWZjZCAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24tZ3JpZHtcclxuICAgIG1hcmdpbjozJTtcclxuICB9Il19 */");

/***/ }),

/***/ 46600:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/itk-center-support/my-inspections2/my-inspections2.page.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <!-- <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\" class=\"back-button\" (click)=\"goBack()\">\r\n        <ion-button><ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon></ion-button>\r\n      </ion-buttons>\r\n      <ion-title>My Inspection</ion-title>   \r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  \r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n        <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n        </ion-icon>\r\n      </ion-buttons>\r\n      <ion-title class=\"pt-15\"> My Inspection</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  \r\n  <ion-content class=\"graybackgrond\">\r\n    <ion-row class=\"emptysec\" *ngIf=\"!showList\" style=\"display: flex; align-items: center; justify-content: center;\">\r\n      <img src=\"assets/images/notfound.png\" style=\"width: 100%;\">\r\n      <h5>No inspections added yet</h5>\r\n    </ion-row>\r\n  \r\n    <ion-grid *ngIf=\"showList && !QuestAnswer\" >    \r\n    <ion-card *ngFor=\"let res of inspectionList\" class=\"card-widget\"\r\n    style=\"background: white;\" (click)=\"moveInspection(res.Answers)\">\r\n    <ion-card-header>\r\n     <ion-card-subtitle class=\"card-subtitle\">{{res.srvyDt | date :  \"dd/MM/y\" }}</ion-card-subtitle>\r\n     <ion-card-title class=\"card-title\">{{res.vol_Name}}</ion-card-title><ion-icon class=\"icon1\" name=\"chevron-forward-outline\"></ion-icon>\r\n     <ion-card-subtitle class=\"card-subtitle\">{{res.vol_PhnNo}} &nbsp;&nbsp; | &nbsp; &nbsp;{{res.district_name}} </ion-card-subtitle>\r\n   </ion-card-header>\r\n  </ion-card>\r\n  </ion-grid>\r\n  \r\n  \r\n  <ion-grid *ngIf=\"QuestAnswer\" >\r\n    <ion-list class=\"graybackgrond\">\r\n      <ion-row *ngFor=\"let item of resultData let i = index \">\r\n        <div *ngIf=\"item.volun_response_text\" style=\"width: 100%;\">\r\n          <ion-col size=\"12\">\r\n            <ion-label>{{i+1}}. {{item.Que_Text}}</ion-label>\r\n          </ion-col>\r\n          <ion-item lines=\"none\" class=\"border\">\r\n            <ion-textarea [disabled]=\"true\">{{item.volun_response_text}}</ion-textarea>\r\n          </ion-item>\r\n          <ion-button *ngIf=\"item.RespInt == 10\" (click)='viewImage(item.volun_response_text)' style=\"text-transform:none\"><ion-icon name=\"image-outline\"></ion-icon>&nbsp;View image</ion-button>\r\n        </div>\r\n      </ion-row>\r\n    </ion-list>\r\n  </ion-grid>\r\n  </ion-content>\r\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_itk-center-support_my-inspections2_my-inspections2_module_ts-es2015.js.map