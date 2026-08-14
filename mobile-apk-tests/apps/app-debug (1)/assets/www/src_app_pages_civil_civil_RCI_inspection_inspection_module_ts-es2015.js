(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_inspection_inspection_module_ts"],{

/***/ 83840:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/inspection/inspection-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionPageRoutingModule": function() { return /* binding */ InspectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspection.page */ 38469);




const routes = [
    {
        path: '',
        component: _inspection_page__WEBPACK_IMPORTED_MODULE_0__.InspectionPage
    }
];
let InspectionPageRoutingModule = class InspectionPageRoutingModule {
};
InspectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InspectionPageRoutingModule);



/***/ }),

/***/ 394:
/*!***********************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/inspection/inspection.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionPageModule": function() { return /* binding */ InspectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspection-routing.module */ 83840);
/* harmony import */ var _inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspection.page */ 38469);







let InspectionPageModule = class InspectionPageModule {
};
InspectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.InspectionPageRoutingModule
        ],
        declarations: [_inspection_page__WEBPACK_IMPORTED_MODULE_1__.InspectionPage]
    })
], InspectionPageModule);



/***/ }),

/***/ 38469:
/*!*********************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/inspection/inspection.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionPage": function() { return /* binding */ InspectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inspection.page.html */ 31514);
/* harmony import */ var _inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspection.page.scss */ 92832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let InspectionPage = class InspectionPage {
    constructor(fb, userService, router, usersessionService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.usersessionService = usersessionService;
        this.isOnline = false;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.sessionUserName = this.usersessionService.emis_username();
        // this.getSIDSInfo()
    }
    getSIDSInfo() {
        this.allSidsData = [];
        this.userService.getSidsResponedData('9751061513').subscribe((res) => {
            this.allSidsData = res.result;
        });
    }
    onGoButton() {
        this.router.navigate(['/tabs/school-inspection']);
    }
    nextPage() {
        this.router.navigate(['/tabs/regulator-section'], {
            queryParams: { status: 0, "uidse": '33020700907', "schoolId": '3097' }, skipLocationChange: false
        });
    }
};
InspectionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService }
];
InspectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-inspection',
        template: _raw_loader_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InspectionPage);



/***/ }),

/***/ 92832:
/*!***********************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/inspection/inspection.page.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\nion-label {\n  max-width: 100% !important;\n  font-weight: 500;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\nion-select {\n  padding-left: 0px !important;\n  max-width: 100% !important;\n  border-bottom: #388;\n  border-bottom: var(--ion-color-primary, #388);\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLHFDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFBQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUFBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLHVEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNHLG9CQUFBO0FBQ0g7O0FBRUE7RUFDRSwrQkFBQTtFQUFnQyxnQ0FDaEM7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUFBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdGIiwiZmlsZSI6Imluc3BlY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZGFyeSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udmFsaWQtY2xyIHtcclxuICBjb2xvcjpyZWQ7XHJcbn1cclxuXHJcbi5xdWVzLXR4dCB7XHJcbiAgcGFkZGluZy10b3A6NXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG59XHJcblxyXG5pb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG4gIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG59IFxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206Mi4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLXBhZGRpbmcge1xyXG4gIG1hcmdpbjogMiU7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbn1cclxuXHJcbi5pbnB1dC1jbHIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpIDFweCBzb2xpZDs7XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAvKiBtYXJnaW46IDAlOyAqL1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmlvbi1uby1wYWRkaW5ne1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbiAgcHJlLWxpbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uZm9vdGVyLXNhdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxufVxyXG4uZm9vdGVyLW5vdCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgcGFkZGluZzogMTBweDsgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDhmMjY7XHJcbiAgcGFkZGluZzogMTBweDsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSJdfQ== */");

/***/ }),

/***/ 31514:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/inspection/inspection.page.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">General Information</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"container\">\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Name of the School<span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <!-- <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          District <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select><br>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Block <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col> -->\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          District <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col> \r\n      \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Block <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col> \r\n      \r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Localbody <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-select ok-text=\"Ok\" class=\"input-clr select\" cancel-text=\"Dismiss\" placeholder=\"Plese Select\">\r\n          <ion-select-option [value]=\"item.value\" *ngFor=\"let item of owner\"> {{item.label}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          Address <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <ion-label class=\"ques-txt\">\r\n          PIN Code <span class=\"valid-clr\">*</span>\r\n        </ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-clr\">\r\n        </ion-input>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"footer-verified\" (click)=\"nextPage()\">\r\n      <ion-label>Verified</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-not\" (click)=\"nextPage()\">\r\n      <ion-label>Incorrect</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-save\" (click)=\"nextPage()\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_civil_civil_RCI_inspection_inspection_module_ts-es2015.js.map