(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_course-materials_course-details_course-details_module_ts"],{

/***/ 82626:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-details/course-details-routing.module.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDetailsPageRoutingModule": function() { return /* binding */ CourseDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _course_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-details.page */ 9965);




const routes = [
    {
        path: '',
        component: _course_details_page__WEBPACK_IMPORTED_MODULE_0__.CourseDetailsPage
    }
];
let CourseDetailsPageRoutingModule = class CourseDetailsPageRoutingModule {
};
CourseDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CourseDetailsPageRoutingModule);



/***/ }),

/***/ 26805:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-details/course-details.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDetailsPageModule": function() { return /* binding */ CourseDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _course_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course-details-routing.module */ 82626);
/* harmony import */ var _course_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-details.page */ 9965);







let CourseDetailsPageModule = class CourseDetailsPageModule {
};
CourseDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _course_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CourseDetailsPageRoutingModule
        ],
        declarations: [_course_details_page__WEBPACK_IMPORTED_MODULE_1__.CourseDetailsPage]
    })
], CourseDetailsPageModule);



/***/ }),

/***/ 9965:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-details/course-details.page.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseDetailsPage": function() { return /* binding */ CourseDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_course_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./course-details.page.html */ 68447);
/* harmony import */ var _course_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-details.page.scss */ 95436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);






let CourseDetailsPage = class CourseDetailsPage {
    constructor(router, domsaintizer) {
        this.router = router;
        this.domsaintizer = domsaintizer;
    }
    ngOnInit() {
        let videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/c2398f00c8fe446d8680b8bf869d3fec.pdf");
        this.vidUrl = videoUrl;
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
    backBtn() {
        this.router.navigate(["/tabs/course-materials"]);
    }
};
CourseDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer }
];
CourseDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-course-details',
        template: _raw_loader_course_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_course_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CourseDetailsPage);



/***/ }),

/***/ 95436:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/art-culture/course-materials/course-details/course-details.page.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #dc6ecf;\n}\n\n.Div_ARP {\n  color: #555555;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.Div_dropdown {\n  border: 3px solid #dc6ecf;\n  border-radius: 2px;\n}\n\n.Div_table {\n  background-color: #dc6ecf;\n  border-radius: 2px;\n  color: white;\n  font-size: 13px;\n}\n\n.Div_table1 {\n  background-color: #FFFFFF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_table2 {\n  background-color: #EBF4FF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_box {\n  border-right: 1px solid #dc6ecf;\n  text-align: center;\n}\n\n.Div_arrow {\n  border-right: 1px solid #dc6ecf;\n  text-align: center;\n}\n\n.download {\n  --background:#dc6ecf;\n  --color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtFQUVBLGtCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUFLSiIsImZpbGUiOiJjb3Vyc2UtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkYzZlY2Y7XHJcbn1cclxuXHJcblxyXG5cclxuLkRpdl9BUlB7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuRGl2X2Ryb3Bkb3due1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2RjNmVjZjtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICAuRGl2X3RhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjNmVjZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLkRpdl90YWJsZTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM3MjczNzQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5EaXZfdGFibGUye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjRGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjNzI3Mzc0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuRGl2X2JveHtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgI2RjNmVjZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLkRpdl9hcnJvd3tcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgI2RjNmVjZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmRvd25sb2Fke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNkYzZlY2Y7XHJcbiAgICAtLWNvbG9yOndoaXRlO1xyXG4gIH1cclxuICJdfQ== */");

/***/ }),

/***/ 68447:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/course-materials/course-details/course-details.page.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>course-details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header >\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Course Materials</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-row style=\"background-color: #dc6ecf;padding-top: 50px;\">\r\n  <ion-card style=\"border-top-left-radius: 55px;border-top-right-radius: 55px;margin:0px\">\r\n  <ion-row style=\"text-align: center;\">\r\n    <ion-col size=\"12\" class=\"optMainDiv\" style=\"margin-top:20px;padding: 20px;\">\r\n      <video controls width=\"100%\" height=\"100%\" [id]=this.filename type=\"video/mp4\" controlsList=\"nodownload\">\r\n        <source [src]=this.vidUrl type=\"video/mp4\">\r\n      </video>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n  <ion-row style=\"margin-left:10px\">\r\n    <ion-col size=\"8\">\r\n      <div> <h6 style=\"color:black\"><b>Visual Arts - Mask Making</b></h6></div>\r\n   <div></div>\r\n   \r\n    </ion-col>\r\n    <!-- <ion-col size=\"4\">\r\n      <star-rating-comp label-text=\"'My text!'\"></star-rating-comp>\r\n    </ion-col> -->\r\n  </ion-row>\r\n  <ion-row style=\"margin-left:10px\">\r\n    <ion-col size=\"12\">\r\n      <ion-label style=\"color:black\">Objectives</ion-label><br>\r\n      <ion-label style=\"font-size: 12px;\">Different aspect of colors-Usage, understanding of pigment, effective use of brush & space utilization</ion-label><br>\r\n      <ion-label style=\"color:black\">Learning Outcomes</ion-label><br>\r\n      <ion-label style=\"font-size: 12px;\">Improves concentration, better understanding of the human face, knowledge to use materials</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div style=\"margin: 20px;\">\r\n\r\n    <!-- <ion-col size=\"6\">\r\n    <div class=\"Div_dropdown\">\r\n      <ion-select class=\"select-tab\" placeholder=\"Compeleted\" autocomplete=\"off\" class=\"dropDown\"\r\n      [disabled]=\"isDisable\" style=\"color:#1B85FF;padding-right: 12px;\">\r\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Action\">{{item.label}}</ion-select-option>\r\n    </ion-select>\r\n    </div>\r\n     </ion-col> -->\r\n      <ion-row class=\"Div_table\"style=\"border :1px solid #dc6ecf\" >\r\n        <ion-col size=\"2\" class=\"Div_box\">\r\n          <div style=\"align-self: center;\">\r\n           S.NO\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"5\"class=\"Div_box\" >\r\n          <div style=\"align-self: center;\">\r\n            lesson Plan\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\"class=\"Div_box\" >\r\n          <div style=\"align-self: center;\">\r\n           Time\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3\" class=\"Div_arrow\" >\r\n          <div style=\"align-self: center;font-size: 12px;\">\r\n          Materials Required\r\n          </div>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n  \r\n      <ion-row class=\"Div_table1\"style=\"border :1px solid #dc6ecf;align-self: center;\" >\r\n        <ion-col size=\"2\" class=\"Div_box\">\r\n          <div>\r\n           1\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"5\"class=\"Div_box\" >\r\n          <div>\r\n           <ion-label>Ice breaking & introduction of students, class teacher</ion-label> \r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\"class=\"Div_box\" >\r\n          <div>\r\n            <ion-label>10.00 mins</ion-label>\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3\" class=\"Div_arrow\">\r\n          <div>\r\n           <ion-label>Ice breaker game</ion-label> \r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"Div_table1\"style=\"border :1px solid #dc6ecf;align-self: center;\" >\r\n        <ion-col size=\"2\" class=\"Div_box\">\r\n          <div>\r\n           1\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"5\"class=\"Div_box\" >\r\n          <div>\r\n           <ion-label>Ice breaking & introduction of students, class teacher</ion-label> \r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\"class=\"Div_box\" >\r\n          <div>\r\n            <ion-label>10.00 mins</ion-label>\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3\" class=\"Div_arrow\">\r\n          <div>\r\n           <ion-label>Ice breaker game</ion-label> \r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n     \r\n     \r\n  </div>\r\n  <!-- <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      <ion-button class=\"download\">\r\n        Download\r\n        <ion-icon name=\"download-outline\"></ion-icon>\r\n      \r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  </ion-card>\r\n</ion-row>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_course-materials_course-details_course-details_module_ts-es2015.js.map