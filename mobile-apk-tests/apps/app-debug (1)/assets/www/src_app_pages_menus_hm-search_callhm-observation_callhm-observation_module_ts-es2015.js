(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_menus_hm-search_callhm-observation_callhm-observation_module_ts"],{

/***/ 4449:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-observation/callhm-observation-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallHmObservationPageRoutingModule": function() { return /* binding */ CallHmObservationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _callhm_observation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callhm-observation.page */ 58054);




const routes = [
    {
        path: '',
        component: _callhm_observation_page__WEBPACK_IMPORTED_MODULE_0__.CallHmObservationPage
    }
];
let CallHmObservationPageRoutingModule = class CallHmObservationPageRoutingModule {
};
CallHmObservationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CallHmObservationPageRoutingModule);



/***/ }),

/***/ 63399:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-observation/callhm-observation.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallHmObservationPageModule": function() { return /* binding */ CallHmObservationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _callhm_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callhm-observation-routing.module */ 4449);
/* harmony import */ var _callhm_observation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callhm-observation.page */ 58054);







let CallHmObservationPageModule = class CallHmObservationPageModule {
};
CallHmObservationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _callhm_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__.CallHmObservationPageRoutingModule
        ],
        declarations: [_callhm_observation_page__WEBPACK_IMPORTED_MODULE_1__.CallHmObservationPage]
    })
], CallHmObservationPageModule);



/***/ }),

/***/ 58054:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-observation/callhm-observation.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CallHmObservationPage": function() { return /* binding */ CallHmObservationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_callhm_observation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./callhm-observation.page.html */ 95731);
/* harmony import */ var _callhm_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callhm-observation.page.scss */ 24894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CallHmObservationPage = class CallHmObservationPage {
    constructor(router) {
        this.router = router;
        this.dateSelected = false;
        this.date = new Date().toLocaleDateString();
        this.strength = [];
        this.improvement = [];
    }
    ngOnInit() {
        // let data = JSON.parse(localStorage.getItem('tntlei_data'));
        // console.log(data)
        // this.school_name = data.school_name;
        // this.class_observed = data.class_observed;    
        // this.inspection_date = data.inspection_date;
        // this.subjectData = data.subject_name;
        // this.teacher_emisid = data.teacher_emisid;
        // this.observer_name = data.createdby;
        // this.teacher_name = data.teacher_name;
        // this.hm_name = data.hm_name;
        // this.mobile_number = data.mbl_nmbr;
        // this.final_remarks = data.final_remarks;
        // this.strength = data.strength.split("|").slice(0,5);
        // this.improvement = data.improvement.split("|").slice(0,5); 
    }
    ionViewDidEnter() {
        let data = JSON.parse(localStorage.getItem('tntlei_data'));
        console.log(data);
        this.school_name = data.school_name;
        this.class_observed = data.class_observed;
        this.inspection_date = data.inspection_date;
        this.mobile_number = data.mbl_nmbr;
        this.hm_name = data.hm_name;
        this.observer_name = data.createdby;
        this.subjectData = data.subject_name;
        this.teacher_emisid = data.teacher_emisid;
        this.teacher_name = data.teacher_name;
        this.final_remarks = data.final_remarks;
        this.strength = data.strength.split("|").slice(0, 5);
        this.improvement = data.improvement.split("|").slice(0, 5);
    }
    goToBack() {
        this.router.navigate(['/tabs/callhm-tntlei']);
    }
    goToMenuData() {
        this.router.navigate(['/tabs/my-inspection-dashboard']);
    }
};
CallHmObservationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CallHmObservationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-callhm-observation',
        template: _raw_loader_callhm_observation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_callhm_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CallHmObservationPage);



/***/ }),

/***/ 24894:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/menus/hm-search/callhm-observation/callhm-observation.page.scss ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p,\nh5,\nul > li {\n  font-size: 12px;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n/* Zebra striping */\n\ntr:nth-of-type(odd) {\n  background: #eee;\n}\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold;\n}\n\ntd, th {\n  border: 1px solid #ccc;\n  word-break: break-all;\n  text-align: left;\n}\n\n.menu-icon-new {\n  width: 55%;\n  margin: auto;\n  overflow: visible;\n  float: right;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxobS1vYnNlcnZhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLHlDQUFBO0FBRUo7O0FBQUE7RUFDSSxxQ0FBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBR0o7O0FBREUsbUJBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIRTtFQUVFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU1KIiwiZmlsZSI6ImNhbGxobS1vYnNlcnZhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLFxyXG5oNSxcclxudWw+bGl7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlNmRlZWQgIWltcG9ydGFudDsgIFxyXG4gIH1cclxuLmJnLXRyYW5zcGFyZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbnRhYmxlIHsgXHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcclxuICB9XHJcbiAgLyogWmVicmEgc3RyaXBpbmcgKi9cclxuICB0cjpudGgtb2YtdHlwZShvZGQpIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcclxuICB9XHJcbiAgdGggeyBcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7IFxyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICB9XHJcbiAgdGQsIHRoIHsgXHJcbiAgICAvL3BhZGRpbmc6IDZweDsgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gIH1cclxuICAubWVudS1pY29uLW5ldyB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 95731:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menus/hm-search/callhm-observation/callhm-observation.page.html ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Call HMs </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div  id=\"PrintObservation\"  style=\"max-width: 600px;margin: auto;padding: 10px;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;\">\r\n    <div style=\"border:none;background-color:none\">\r\n      <ion-tabs style=\"margin-top: 10px;margin-bottom: 10px;\">          \r\n        <ion-tab-bar  slot=\"top\" >             \r\n          <ion-tab-button  style=\"background: #908c8b;margin: 10px;border-radius: 10px;\">  \r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"menu-text\">\r\n                <ion-icon name=\"person\" style=\"color:#fff\"></ion-icon>\r\n                <ion-label class=\"ion-text-uppercase\" style=\"color:#fff\">{{this.hm_name}}</ion-label>  \r\n              </ion-col>  \r\n            </ion-row>          \r\n          </ion-tab-button>    \r\n          <ion-tab-button  style=\"background: #8B67B3;margin: 10px;border-radius: 10px;\">  \r\n            <ion-row>\r\n              \r\n              <ion-col size=\"12\" class=\"menu-text\">\r\n                <a href=\"tel:{{this.mobile_number}}\" style=\"margin: auto;outline: none;text-decoration:none\">\r\n                  <ion-icon name=\"call\" style=\"color:#fff\"></ion-icon>\r\n                  <ion-label class=\"lbl-text\" style=\"color: #fff;\"> Call Hm </ion-label>\r\n                </a>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-tab-button>              \r\n                                                                              \r\n        </ion-tab-bar>  \r\n      </ion-tabs>   \r\n    </div>      \r\n    <div color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"fs-12\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Please discuss Today's Observation Report with:</span\r\n        ><br /><b>\r\n          {{ this.teacher_name }} [{{\r\n            this.teacher_emisid\r\n          }}]\r\n        </b>\r\n      </p>\r\n    </div>\r\n\r\n    <div color=\"dark\" class=\"\">\r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Observed On</span>\r\n        :<b> {{ this.date }}</b>\r\n      </p>\r\n      \r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">School Observed</span>\r\n        : <b>{{ this.school_name }}</b>\r\n      </p>\r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Class Observed</span>\r\n        :<b> {{ this.class_observed }} </b>\r\n      </p>\r\n\r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Observed By</span>\r\n        :<b> {{ this.observer_name }} </b>\r\n      </p>      \r\n\r\n      \r\n    </div>\r\n\r\n    <div color=\"dark\">\r\n      <h5\r\n        class=\"text-center fs-12\"\r\n        [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\"\r\n      >\r\n        <b>Today's Observation Report</b>\r\n      </h5>\r\n    </div>\r\n\r\n    <section>\r\n      <h5>\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Area of strength</span>\r\n        :\r\n      </h5>\r\n      <ul class=\"my-nav-1\">\r\n        <li *ngFor=\"let strength of strength\">\r\n          {{ strength }}\r\n        </li>\r\n      </ul>\r\n      <h5>\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Area for improvement</span>\r\n        :\r\n      </h5>\r\n      <ul class=\"my-nav-2\">\r\n        <li *ngFor=\"let week of improvement\">\r\n          {{ week }}\r\n        </li>\r\n      </ul>\r\n      <h5 >\r\n        <span  [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Student Assessment Results</span\r\n        >:\r\n      </h5>\r\n\r\n      <p class=\"mb-0\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\">Subject</span\r\n        >: {{ subjectData }}\r\n      </p>\r\n\r\n      <!-- <ul *ngIf=\"accessedStudentList.length>0 && this.showdata==true\" class=\"my-nav-3\">\r\n        <li *ngFor=\"let student of accessedStudentList\">\r\n          {{ student.student_name }} : {{ student.grade }}\r\n        </li>\r\n      </ul>\r\n      <ul *ngIf=\"scannedStudentList.length>0\" class=\"my-nav-3\">\r\n        <li *ngFor=\"let student of scannedStudentList\">\r\n          {{ student.name }} : {{ student.CorrectAns.length }}/{{ student.questionsAns.length }}\r\n        </li>\r\n      </ul>     -->\r\n      <p class=\"mb-0\" *ngIf=\"this.final_remarks\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType === 'ta' }\"><b>Observer Remarks</b></span\r\n        >: {{ this.final_remarks }}\r\n      </p>        \r\n      \r\n    </section>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_menus_hm-search_callhm-observation_callhm-observation_module_ts-es2015.js.map