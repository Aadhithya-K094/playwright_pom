(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_final-feedback_final-feedback_module_ts"],{

/***/ 52362:
/*!***************************************************************************!*\
  !*** ./src/app/pages/awc/final-feedback/final-feedback-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalFeedbackPageRoutingModule": function() { return /* binding */ FinalFeedbackPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _final_feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-feedback.page */ 59219);




const routes = [
    {
        path: '',
        component: _final_feedback_page__WEBPACK_IMPORTED_MODULE_0__.FinalFeedbackPage
    }
];
let FinalFeedbackPageRoutingModule = class FinalFeedbackPageRoutingModule {
};
FinalFeedbackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FinalFeedbackPageRoutingModule);



/***/ }),

/***/ 40628:
/*!*******************************************************************!*\
  !*** ./src/app/pages/awc/final-feedback/final-feedback.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalFeedbackPageModule": function() { return /* binding */ FinalFeedbackPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _final_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./final-feedback-routing.module */ 52362);
/* harmony import */ var _final_feedback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-feedback.page */ 59219);







let FinalFeedbackPageModule = class FinalFeedbackPageModule {
};
FinalFeedbackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _final_feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FinalFeedbackPageRoutingModule
        ],
        declarations: [_final_feedback_page__WEBPACK_IMPORTED_MODULE_1__.FinalFeedbackPage]
    })
], FinalFeedbackPageModule);



/***/ }),

/***/ 59219:
/*!*****************************************************************!*\
  !*** ./src/app/pages/awc/final-feedback/final-feedback.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinalFeedbackPage": function() { return /* binding */ FinalFeedbackPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_final_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./final-feedback.page.html */ 89937);
/* harmony import */ var _final_feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./final-feedback.page.scss */ 34144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let FinalFeedbackPage = class FinalFeedbackPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onGoButton() {
        this.router.navigate(['/tabs/awc-form']);
    }
    submit() {
        this.router.navigate(['/tabs/awc-student-list']);
    }
};
FinalFeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FinalFeedbackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-final-feedback',
        template: _raw_loader_final_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_final_feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FinalFeedbackPage);



/***/ }),

/***/ 34144:
/*!*******************************************************************!*\
  !*** ./src/app/pages/awc/final-feedback/final-feedback.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background:transparent !important;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.subBtn {\n  color: white;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n}\n\n.submit {\n  background-color: #F96C94;\n  color: white;\n  text-align: center;\n  width: 30%;\n  padding: 6px;\n  border-radius: 12px;\n}\n\n.div {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.remark {\n  background-color: #f7f7f7;\n  border-radius: 12px;\n  font-size: 12px;\n  padding-left: 10px;\n}\n\n.drpdowm {\n  background-color: #f7f7f7;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFsLWZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Msa0JBQUE7RUFDQyxtQkFBQTtBQUdOOztBQURBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7RUFBMEIsbUJBQUE7QUFROUIiLCJmaWxlIjoiZmluYWwtZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uYnRuRGl2e1xyXG4gICAgd2lkdGg6MTAwJSA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uc3ViQnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk2Qzk0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnJlbWFya3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweFxyXG59XHJcbi5kcnBkb3dte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59Il19 */");

/***/ }),

/***/ 89937:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/final-feedback/final-feedback.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Final Feedback</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div style=\"margin: 20px;\">\r\n    <div style=\"margin-bottom:25px\">\r\n      <ion-label style=\"font-size:16px\">\r\n        Action\r\n      </ion-label>\r\n        <ion-item class=\"drpdowm\">\r\n          <ion-select interface=\"popover\" placeholder=\"Select Action\" style=\"width:100%;font-size: 12px;\">\r\n            <ion-select-option value=\"apples\">Apples</ion-select-option>\r\n            <ion-select-option value=\"oranges\">Oranges</ion-select-option>\r\n            <ion-select-option value=\"bananas\">Bananas</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n    </div>\r\n    <div style=\"margin-bottom:25px\">\r\n      <ion-label style=\"font-size:16px\">\r\n        Follow Up\r\n      </ion-label>\r\n        <ion-item class=\"drpdowm\">\r\n          <ion-select interface=\"popover\" placeholder=\" Select Follow Up\" style=\"width:100%;font-size: 12px;\">\r\n            <ion-select-option value=\"apples\">Apples</ion-select-option>\r\n            <ion-select-option value=\"oranges\">Oranges</ion-select-option>\r\n            <ion-select-option value=\"bananas\">Bananas</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n    </div>\r\n    <div style=\"margin-bottom:25px\">\r\n      <ion-label style=\"font-size:16px\">\r\n        Remarks\r\n      </ion-label>\r\n      <div class=\"remark\">\r\n        <ion-input  placeholder=\" Remarks\">\r\n\r\n        </ion-input>\r\n      </div>\r\n    </div>\r\n    <div  class=\"btnDiv\">\r\n      <div class=\"div\">\r\n       <div class=\"submit\" (click)=\"submit()\">\r\n    <ion-label>\r\n      Submit\r\n    </ion-label>\r\n       </div>\r\n      </div>\r\n    </div>\r\n   \r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_awc_final-feedback_final-feedback_module_ts-es2015.js.map