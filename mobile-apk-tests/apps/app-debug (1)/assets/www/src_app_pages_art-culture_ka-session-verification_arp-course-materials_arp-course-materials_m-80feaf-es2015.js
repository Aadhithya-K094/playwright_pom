(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_ka-session-verification_arp-course-materials_arp-course-materials_m-80feaf"],{

/***/ 1876:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/arp-course-materials/arp-course-materials-routing.module.ts ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArpCourseMaterialsPageRoutingModule": function() { return /* binding */ ArpCourseMaterialsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _arp_course_materials_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arp-course-materials.page */ 39998);




const routes = [
    {
        path: '',
        component: _arp_course_materials_page__WEBPACK_IMPORTED_MODULE_0__.ArpCourseMaterialsPage
    }
];
let ArpCourseMaterialsPageRoutingModule = class ArpCourseMaterialsPageRoutingModule {
};
ArpCourseMaterialsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArpCourseMaterialsPageRoutingModule);



/***/ }),

/***/ 27026:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/arp-course-materials/arp-course-materials.module.ts ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArpCourseMaterialsPageModule": function() { return /* binding */ ArpCourseMaterialsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _arp_course_materials_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arp-course-materials-routing.module */ 1876);
/* harmony import */ var _arp_course_materials_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arp-course-materials.page */ 39998);







let ArpCourseMaterialsPageModule = class ArpCourseMaterialsPageModule {
};
ArpCourseMaterialsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _arp_course_materials_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArpCourseMaterialsPageRoutingModule
        ],
        declarations: [_arp_course_materials_page__WEBPACK_IMPORTED_MODULE_1__.ArpCourseMaterialsPage]
    })
], ArpCourseMaterialsPageModule);



/***/ }),

/***/ 39998:
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/arp-course-materials/arp-course-materials.page.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArpCourseMaterialsPage": function() { return /* binding */ ArpCourseMaterialsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_arp_course_materials_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./arp-course-materials.page.html */ 41541);
/* harmony import */ var _arp_course_materials_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arp-course-materials.page.scss */ 63513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);








let ArpCourseMaterialsPage = class ArpCourseMaterialsPage {
    constructor(router, userSessionService, emisService, domsaintizer) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.emisService = emisService;
        this.domsaintizer = domsaintizer;
        this.emisName = this.userSessionService.emis_username();
        let currentDate = new Date();
        this.day = currentDate.getDay();
        var date = currentDate.getDate();
        this.curr_month = currentDate.getMonth() + 1;
        // var weekOfMonth = Math.ceil((date - 1 - this.day) / 7);
        var weekOfMonth = (0 | currentDate.getDate() / 7) + 1;
        this.week = weekOfMonth;
    }
    ngOnInit() {
        let data = {
            "ArpId": this.emisName,
            "Mont": this.curr_month,
            "Week": this.week,
            "Type": 2
        };
        this.data = [];
        this.emisService.ArpCourMat(data).subscribe(res => {
            if (res.dataStatus) {
                this.data = res.result;
                this.downloadedname = this.data[0].video_1;
                this.playVideo();
            }
        });
    }
    ionViewDidEnter() {
        this.inital();
    }
    inital() {
        let data = {
            "ArpId": this.emisName,
            "Mont": this.curr_month,
            "Week": this.week,
            "Type": 2
        };
        this.data = [];
        this.emisService.ArpCourMat(data).subscribe(res => {
            if (res.dataStatus) {
                this.data = res.result;
                this.downloadedname = this.data[0].video_1;
                this.playVideo();
            }
        });
    }
    playVideo() {
        this.destroyVideo();
        this.filename = '';
        var A = Date.now();
        this.filename = A;
        // this.downloadedname = 'f0cefeb1b4bc4d92ab313b7acdd35d68'
        let videoUrl = this.domsaintizer.bypassSecurityTrustResourceUrl("https://d1p3r7kc5uix85.cloudfront.net/" + this.downloadedname);
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
    backBtn() {
        this.router.navigate(["/tabs/art-culture"]);
    }
};
ArpCourseMaterialsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer }
];
ArpCourseMaterialsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-arp-course-materials',
        template: _raw_loader_arp_course_materials_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_arp_course_materials_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArpCourseMaterialsPage);



/***/ }),

/***/ 63513:
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/arp-course-materials/arp-course-materials.page.scss ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #BDAD1C;\n}\n\n.Div_ARP {\n  color: #555555;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.Div_dropdown {\n  border: 3px solid #BDAD1C;\n  border-radius: 2px;\n}\n\n.Div_table {\n  background-color: #BDAD1C;\n  border-radius: 2px;\n  color: white;\n  font-size: 13px;\n}\n\n.Div_table1 {\n  background-color: #FFFFFF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_table2 {\n  background-color: #EBF4FF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_box {\n  border-right: 1px solid #BDAD1C;\n  text-align: center;\n}\n\n.Div_arrow {\n  border-right: 1px solid #BDAD1C;\n  text-align: center;\n}\n\n.download {\n  --background:#BDAD1C;\n  --color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFycC1jb3Vyc2UtbWF0ZXJpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtFQUVBLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUFNSiIsImZpbGUiOiJhcnAtY291cnNlLW1hdGVyaWFscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNCREFEMUM7XHJcbn1cclxuXHJcblxyXG4uRGl2X0FSUHtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5EaXZfZHJvcGRvd257XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQkRBRDFDO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIC5EaXZfdGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRBRDFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuRGl2X3RhYmxlMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzcyNzM3NDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLkRpdl90YWJsZTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJGNEZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM3MjczNzQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5EaXZfYm94e1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjQkRBRDFDO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuRGl2X2Fycm93e1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjQkRBRDFDO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZG93bmxvYWR7XHJcbiAgICAtLWJhY2tncm91bmQ6I0JEQUQxQztcclxuICAgIC0tY29sb3I6d2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 41541:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/ka-session-verification/arp-course-materials/arp-course-materials.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>arp-course-materials</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Course Materials</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-row style=\"background-color: #BDAD1C;padding-top: 50px;--background: fixed\">\r\n    <ion-card style=\"border-top-left-radius: 55px;border-top-right-radius: 55px;margin:0px\">\r\n      <ion-row style=\"text-align: center;\">\r\n        <ion-col size=\"12\" class=\"optMainDiv\" style=\"margin-top:20px;padding: 20px;\">\r\n          <video controls width=\"100%\" style=\"border-radius: 30px;\" height=\"100%\" [id]=this.filename type=\"video/mp4\" controlsList=\"nodownload\">\r\n            <source [src]=this.vidUrl type=\"video/mp4\">\r\n          </video>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <ion-row style=\"margin-left:10px\">\r\n        <ion-col size=\"8\">\r\n          <div> <ion-label style=\"color:black\"><b>{{data[0].learning_plan}}</b></ion-label></div>\r\n          <!-- <div> <ion-label>20k views</ion-label></div> -->\r\n\r\n        </ion-col>\r\n        <!-- <ion-col size=\"4\">\r\n          <star-rating-comp label-text=\"'My text!'\"></star-rating-comp>\r\n        </ion-col> -->\r\n      </ion-row>\r\n      <ion-row style=\"margin-left:10px\">\r\n        <ion-col size=\"12\">\r\n          <ion-label style=\"color:black\">Objectives</ion-label><br>\r\n          <ion-label style=\"font-size: 12px;\">{{data[0].learning_obj}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-left:10px\">\r\n        <ion-col size=\"12\">\r\n          <ion-label style=\"color:black\">Learning Outcomes</ion-label><br>\r\n          <ion-label style=\"font-size: 12px;\">{{data[0].learning_outcomes}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div style=\"margin: 20px;\">\r\n\r\n        <!-- <ion-col size=\"6\">\r\n    <div class=\"Div_dropdown\">\r\n      <ion-select class=\"select-tab\" placeholder=\"Compeleted\" autocomplete=\"off\" class=\"dropDown\"\r\n      [disabled]=\"isDisable\" style=\"color:#1B85FF;padding-right: 12px;\">\r\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Action\">{{item.label}}</ion-select-option>\r\n    </ion-select>\r\n    </div>\r\n     </ion-col> -->\r\n        <!-- <ion-row class=\"Div_table\" style=\"border :1px solid #BDAD1C\">\r\n          <ion-col size=\"2\" class=\"Div_box\">\r\n            <div style=\"align-self: center;\">\r\n              S.NO\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" class=\"Div_box\">\r\n            <div style=\"align-self: center;\">\r\n              lesson Plan\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"Div_box\">\r\n            <div style=\"align-self: center;\">\r\n              Time\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"3\" class=\"Div_arrow\">\r\n            <div style=\"align-self: center;font-size: 12px;\">\r\n              Materials Required\r\n            </div>\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n\r\n        <ion-row class=\"Div_table1\" style=\"border :1px solid #BDAD1C;align-self: center;\">\r\n          <ion-col size=\"2\" class=\"Div_box\">\r\n            <div>\r\n              1\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"5\" class=\"Div_box\">\r\n            <div>\r\n              <ion-label>Ice breaking & introduction of students, class teacher</ion-label>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"Div_box\">\r\n            <div>\r\n              <ion-label>10.00 mins</ion-label>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"3\" class=\"Div_arrow\">\r\n            <div>\r\n              <ion-label>Ice breaker game</ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row> -->\r\n\r\n      </div>\r\n      <!-- <ion-row>\r\n    <ion-col size=\"12\" style=\"text-align: center;\">\r\n      <ion-button class=\"download\">\r\n        Download\r\n        <ion-icon name=\"download-outline\"></ion-icon>\r\n      \r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  </ion-card>\r\n  </ion-row>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_ka-session-verification_arp-course-materials_arp-course-materials_m-80feaf-es2015.js.map