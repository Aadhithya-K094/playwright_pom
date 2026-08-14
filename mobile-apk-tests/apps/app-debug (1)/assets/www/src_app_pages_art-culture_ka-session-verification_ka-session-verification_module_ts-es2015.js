(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_ka-session-verification_ka-session-verification_module_ts"],{

/***/ 43000:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/ka-session-verification-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KASessionVerificationPageRoutingModule": function() { return /* binding */ KASessionVerificationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ka_session_verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ka-session-verification.page */ 35592);




const routes = [
    {
        path: '',
        component: _ka_session_verification_page__WEBPACK_IMPORTED_MODULE_0__.KASessionVerificationPage
    },
    {
        path: 'arp-course-materials',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_art-culture_ka-session-verification_arp-course-materials_arp-course-materials_m-80feaf").then(__webpack_require__.bind(__webpack_require__, /*! ./arp-course-materials/arp-course-materials.module */ 27026)).then(m => m.ArpCourseMaterialsPageModule)
    }
];
let KASessionVerificationPageRoutingModule = class KASessionVerificationPageRoutingModule {
};
KASessionVerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KASessionVerificationPageRoutingModule);



/***/ }),

/***/ 6637:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/ka-session-verification.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KASessionVerificationPageModule": function() { return /* binding */ KASessionVerificationPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ka_session_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ka-session-verification-routing.module */ 43000);
/* harmony import */ var _ka_session_verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ka-session-verification.page */ 35592);







let KASessionVerificationPageModule = class KASessionVerificationPageModule {
};
KASessionVerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ka_session_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.KASessionVerificationPageRoutingModule
        ],
        declarations: [_ka_session_verification_page__WEBPACK_IMPORTED_MODULE_1__.KASessionVerificationPage]
    })
], KASessionVerificationPageModule);



/***/ }),

/***/ 35592:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/ka-session-verification.page.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KASessionVerificationPage": function() { return /* binding */ KASessionVerificationPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_ka_session_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ka-session-verification.page.html */ 69303);
/* harmony import */ var _ka_session_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ka-session-verification.page.scss */ 59977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let KASessionVerificationPage = class KASessionVerificationPage {
    constructor(router, userSessionService, emisService, userService) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.emisService = emisService;
        this.userService = userService;
        this.Action = [];
        let currentDate = new Date();
        this.day = currentDate.getDay();
        var date = currentDate.getDate();
        // var weekOfMonth = Math.ceil((date - 1 - this.day) / 7);
        var weekOfMonth = (0 | currentDate.getDate() / 7) + 1;
        this.dayofWeek = weekOfMonth;
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.emisName = this.userSessionService.emis_username();
        this.teacher_id = this.userSessionService.teacher_id();
        var date = currentDate.getDate();
        this.curr_month = currentDate.getMonth() + 1;
        // var weekOfMonth = Math.ceil((date - 1 - this.day) / 7);
        this.week = (0 | currentDate.getDate() / 7) + 1;
    }
    ngOnInit() {
        this.Action = [
            { value: "1", label: "Treatment given during camp" },
            { value: "2", label: "Referred to PHC / CHC / Sub-district hospital" },
            { value: "3", label: "Referred to DEIC" },
            { value: "4", label: "No action required" },
            { value: "5", label: "Child already under treatment" },
        ];
        if (this.emis_usertype != 55) {
            this.userService.getOoscUserDetails(this.teacher_id).subscribe(res => {
                if (res.dataStatus) {
                    this.block = res.result[0].block_id;
                    if (this.block) {
                        this.initial();
                    }
                }
            });
        }
    }
    ionViewDidEnter() {
        if (this.emis_usertype == 39 && this.block) {
            this.initial();
        }
        let data = {
            "ArpId": this.emisName,
            "day": this.day
        };
        this.schoolList = [];
        this.emisService.ArpTodaySession(data).subscribe(res => {
            this.schoolList = res.result;
        });
    }
    initial() {
        let data = {
            "BlkId": this.block
        };
        this.arpList = [];
        this.emisService.ArpSessVerifBrte(data).subscribe(res => {
            if (res.dataStatus) {
                this.arpList = res.result;
                if (this.arpList) {
                    this.dataList = [];
                    for (let i = 0; i < this.arpList.length; i++) {
                        if (this.dataList.indexOf(this.arpList[i].school_id) === -1) {
                            this.dataList.push(this.arpList[i].school_id);
                        }
                    }
                    if (this.dataList) {
                        this.finaldata = [];
                        const key = this.dataList;
                        for (let i = 0; i < this.dataList.length; i++) {
                            const total = [...new Map(this.arpList.map(item => [item[i], item])).values()];
                            this.finaldata.push(total[i]);
                        }
                    }
                }
            }
        });
    }
    showsession(data) {
        this.router.navigate(["/tabs/aadhitiya-session"], { queryParams: { 'data': JSON.stringify(data) } });
    }
    SchInfohide(i, data) {
        this.showtable = true;
        this.allowGroup = false;
        this.indexVal = i;
        if (this.arpList) {
            this.batchList = [];
            for (let i = 0; i < this.arpList.length; i++) {
                if (this.arpList[i].school_id == data.school_id) {
                    this.batchList.push(this.arpList[i]);
                }
            }
            if (this.batchList) {
                this.finalbatchList = [];
                for (let i = 0; i < this.batchList.length; i++) {
                    if (this.finalbatchList.indexOf(this.batchList[i].batch_id) === -1) {
                        this.finalbatchList.push(this.batchList[i].batch_id);
                    }
                }
            }
        }
    }
    groupDiv(val, data) {
        this.allowGroup = true;
        this.finalgrpList = [];
        for (let i = 0; i < this.arpList.length; i++) {
            if (this.arpList[i].batch_id == val && this.arpList[i].school_id == data.school_id) {
                this.finalgrpList.push(this.arpList[i]);
            }
        }
        if (this.finalgrpList) {
            this.finalgrpListdata = [];
            for (let i = 0; i < this.finalgrpList.length; i++) {
                if (this.finalgrpListdata.indexOf(this.finalgrpList[i].id) === -1) {
                    this.finalgrpListdata.push(this.finalgrpList[i].id);
                }
            }
            if (this.finalgrpListdata) {
                this.GrpList = [];
                for (let i = 0; i < this.arpList.length; i++) {
                    for (let j = 0; j < this.finalgrpListdata.length; j++) {
                        if (this.arpList[i].id == this.finalgrpListdata[j]) {
                            this.GrpList.push(this.arpList[i]);
                        }
                    }
                }
            }
        }
    }
    showlow() {
        this.showtable = false;
    }
    arpstudentdetails(data) {
        this.router.navigate(["/tabs/arp-session-details"], { queryParams: { 'data': JSON.stringify(data) } });
    }
    arpcoursematerial() {
        this.router.navigate(["/tabs/arp-course-materials"]);
    }
    backBtn() {
        this.router.navigate(["/tabs/art-culture"]);
    }
};
KASessionVerificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
KASessionVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-ka-session-verification',
        template: _raw_loader_ka_session_verification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ka_session_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KASessionVerificationPage);



/***/ }),

/***/ 59977:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/art-culture/ka-session-verification/ka-session-verification.page.scss ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #BDAD1C ;\n}\n\n.Div_ARP {\n  color: #555555;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.Div_dropdown {\n  border: 3px solid #BDAD1C;\n  border-radius: 2px;\n}\n\n.Div_table {\n  background-color: #BDAD1C;\n  border-radius: 2px;\n  color: white;\n  font-size: 13px;\n  border: 3px solid #BDAD1C;\n}\n\n.Div_table1 {\n  background-color: #FFFFFF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_table2 {\n  background-color: #EBF4FF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_box {\n  border-right: 1px solid #BDAD1C;\n  text-align: center;\n}\n\n.Div_arrow {\n  border-right: 1px solid #BDAD1C;\n  text-align: center;\n}\n\nion-icon {\n  margin-top: 10px;\n  --background:#BDAD1C;\n}\n\n.icon {\n  color: #BDAD1C;\n  font-size: 20px;\n}\n\n.hideHeader {\n  font-weight: 500;\n  text-align: center;\n  color: #050505;\n}\n\n.headCol {\n  font-size: 12px;\n  text-align: center;\n  color: #707070;\n}\n\n.mainDiv {\n  margin: 20px;\n}\n\n.headerRow {\n  background-color: #e4dd9e;\n  padding: 6px;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImthLXNlc3Npb24tdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUVBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFIRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFORTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBU0o7O0FBUEU7RUFFRSxnQkFBQTtFQUFpQixrQkFBQTtFQUFtQixjQUFBO0FBV3hDOztBQVBBO0VBRUksZUFBQTtFQUFnQixrQkFBQTtFQUFtQixjQUFBO0FBV3ZDOztBQVBBO0VBRUUsWUFBQTtBQVNGOztBQUxBO0VBRUUseUJBQUE7RUFFQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSxlQUFBO0FBSUYiLCJmaWxlIjoia2Etc2Vzc2lvbi12ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNCREFEMUMgO1xyXG4gIH1cclxuICAuRGl2X0FSUHtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5EaXZfZHJvcGRvd257XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjQkRBRDFDO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIC5EaXZfdGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRBRDFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI0JEQUQxQztcclxuICB9XHJcbiAgLkRpdl90YWJsZTF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM3MjczNzQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5EaXZfdGFibGUye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRjRGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjNzI3Mzc0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuRGl2X2JveHtcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgI0JEQUQxQztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLkRpdl9hcnJvd3tcclxuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgI0JEQUQxQztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW9uLWljb257XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNCREFEMUM7XHJcbiAgfVxyXG4gIC5pY29ue1xyXG4gICAgY29sb3I6ICNCREFEMUM7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC5oaWRlSGVhZGVye1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiMwNTA1MDU7XHJcblxyXG59XHJcblxyXG4uaGVhZENvbHtcclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7dGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiM3MDcwNzA7XHJcblxyXG59XHJcblxyXG4ubWFpbkRpdntcclxuXHJcbiAgbWFyZ2luOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmhlYWRlclJvd3tcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZGQ5ZTtcclxuXHJcbiAgcGFkZGluZzogNnB4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ 69303:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/ka-session-verification/ka-session-verification.page.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>KA-session-verification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header *ngIf=\"emis_usertype == '39'\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Session verification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-header *ngIf=\"emis_usertype == '55'\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Today's Session</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"week == 1 || week == 3 || week == 4\">\r\n  <div style=\"margin: 20px;\" *ngIf=\"emis_usertype == '39'\">\r\n\r\n    <!-- <ion-col size=\"6\">\r\n    <div class=\"Div_dropdown\">\r\n      <ion-select class=\"select-tab\" placeholder=\"Compeleted\" autocomplete=\"off\" class=\"dropDown\"\r\n      style=\"color:#1B85FF;padding-right: 12px;\">\r\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Action\">{{item.label}}</ion-select-option>\r\n    </ion-select>\r\n    </div>\r\n  \r\n  \r\n  </ion-col> -->\r\n      <ion-row class=\"Div_table\"style=\"border :1px solid #DFDFDF\" >\r\n        <ion-col size=\"3.5\" class=\"Div_box\">\r\n          <div style=\"align-self: center;\">\r\n            ARP Name\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3.5\"class=\"Div_box\" >\r\n          <div style=\"align-self: center;\">\r\n            Art Form\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\"class=\"Div_box\" >\r\n          <div style=\"align-self: center;\">\r\n           School Name\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\" class=\"Div_arrow\" >\r\n          <div style=\"align-self: center;font-size: 12px;\">\r\n           Status\r\n          </div>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n  \r\n      <!-- <ion-row class=\"Div_table1\"style=\"border :1px solid #DFDFDF;align-self: center;\" *ngFor=\"let data of finaldata\">\r\n        <ion-col size=\"3.5\" class=\"Div_box\">\r\n          <div>\r\n            {{data.name}}\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3.5\"class=\"Div_box\" >\r\n          <div>\r\n            {{data.key_art_form}}\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"3\"class=\"Div_box\" >\r\n          <div>\r\n            {{data.school_name}}\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\" class=\"Div_arrow\">\r\n          <div>\r\n            <ion-icon name=\"arrow-forward-outline\" (click)=\"showsession(data)\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <ion-row class=\"Div_table1\" style=\"border :1px solid #DFDFDF;align-self: center;\" *ngFor=\"let data of finaldata; let index as i\">\r\n        <!-- <ion-col size=\"1\" class=\"iconCol\">\r\n          <div style=\"zoom:0.9\">\r\n            <ion-icon name=\"add\" (click)=\"SchInfohide(index,data)\"></ion-icon>\r\n          </div>\r\n        </ion-col> -->\r\n        <ion-col size=\"3.5\" class=\"labelCol\">\r\n          <ion-label>{{data.name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3.5\" class=\"labelCol\">\r\n          <ion-label>{{data.key_art_form}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"labelCol\">\r\n          <ion-label>{{data.school_name}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCol\" style=\"color: blue;\">\r\n          <div style=\"zoom:1.9\">\r\n            <ion-icon name=\"add\" (click)=\"SchInfohide(index,data)\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n        <ion-row style=\"background-color: #ECE8FF;width: 100%\" *ngIf=\"showtable && indexVal == index\">\r\n          <ion-col size=\"1\" style=\"align-self: center;\" *ngIf=\"!allowGroup\">\r\n            <div style=\"zoom:1.5;color: #707070;\">\r\n              <ion-icon name=\"remove\" (click)=\"showlow()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"1\" style=\"align-self: center;\" *ngIf=\"allowGroup\">\r\n            <div style=\"zoom:1.5;color: #707070;\">\r\n              <ion-icon name=\"remove\" (click)=\"showlow()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <ion-row *ngIf=\"!allowGroup\">\r\n              <ion-col size=\"12\" class=\"hideHeader\">\r\n                <ion-label>Batch List</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <div *ngIf=\"!allowGroup\">\r\n              <ion-row *ngFor=\"let chk of finalbatchList; let j as index\">\r\n                <ion-col size=\"12\" class=\"headCol\" style=\"color: blue;\">\r\n                  <ion-label (click)=\"groupDiv(j,data)\">Batch {{j}}</ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n            <ion-row *ngIf=\"allowGroup\">\r\n              <ion-col size=\"4\" class=\"hideHeader\">\r\n                <ion-label>Group Name</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"hideHeader\">\r\n                <ion-label>Session Date</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"hideHeader\">\r\n                <ion-label>Status</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n            <div *ngIf=\"allowGroup\">\r\n              <ion-row *ngFor=\"let val of GrpList\">\r\n                <ion-col size=\"4\" class=\"headCol\">\r\n                  <!-- <ion-label (click)=\"nextpage(val,data)\">{{val.group_name}}</ion-label> -->\r\n                  <ion-label>{{val.group_name}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"headCol\">\r\n                  <ion-label>{{val.session_date | date :  \"dd-MM-y\"}}</ion-label>\r\n                </ion-col>\r\n                <ion-col size=\"4\" class=\"headCol\" style=\"color: blue;\">\r\n                  <ion-icon name=\"arrow-forward-outline\" (click)=\"showsession(val)\"></ion-icon>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n            \r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n      </ion-row>\r\n  </div>\r\n\r\n\r\n\r\n<!-- <ion-header *ngIf=\"emis_usertype == '33'\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">KA Session verification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n  <div style=\"margin: 20px;\" *ngIf=\"emis_usertype == '55'\">\r\n    \r\n\r\n    <!-- <ion-col size=\"6\">\r\n    <div class=\"Div_dropdown\">\r\n      <ion-select class=\"select-tab\" placeholder=\"Compeleted\" autocomplete=\"off\" class=\"dropDown\"\r\n      [disabled]=\"isDisable\" style=\"color:#1B85FF;padding-right: 12px;\">\r\n      <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Action\">{{item.label}}</ion-select-option>\r\n    </ion-select>\r\n    </div>\r\n     </ion-col> -->\r\n      <ion-row class=\"Div_table\" style=\"border :px solid gray\" >\r\n        <ion-col size=\"5\" class=\"Div_box\">\r\n          <div style=\"align-self: center;\">\r\n            School Name\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\"class=\"Div_box\" >\r\n          <div style=\"align-self: center;\">\r\n           Group\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3\"class=\"Div_box\" >\r\n          <div style=\"align-self: center;\">\r\n            Day & Session\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\"class=\"Div_box\" >\r\n          <div style=\"align-self: center;\">\r\n            View\r\n          </div>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n  \r\n      <ion-row class=\"Div_table1\"style=\"border :1px solid #BDAD1C;align-self: center;\" *ngFor=\"let data of schoolList\">\r\n        <ion-col size=\"5\" class=\"Div_box\">\r\n          <div>\r\n           {{data.school_name}}\r\n          </div>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" class=\"Div_box\">\r\n          <div>\r\n           {{data.group_name}}\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"3\"class=\"Div_box\" >\r\n          <div>\r\n            <ion-label>{{data.day == 1 ? 'Monday' : data.day == 2 ? 'Tuesday' : data.day == 3 ? 'Wednesday' : data.day ==4 ? 'Thursday' : 'Friday'}}</ion-label><br>\r\n            <ion-label>{{data.session == 1 ? '1 - 2' : data.session == 2 ? '3 - 4' : data.session == 3 ? '5 - 6' : '7 - 8'}}</ion-label>\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"2\"class=\"Div_box\" >\r\n          <div>\r\n            <ion-icon name=\"eye-outline\" class=\"icon\" (click)=\"arpstudentdetails(data)\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n  \r\n        <!-- <ion-col size=\"2\" class=\"Div_arrow\">\r\n          <div>\r\n            <ion-icon name=\"eye-outline\" class=\"icon\" (click)=\"arpcoursematerial()\"></ion-icon>\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n\r\n      <!-- <ion-row *ngIf=\"schoolList\">\r\n        <ion-col size=\"4.5\" class=\"Div_box\">\r\n          <div>\r\n           No Data Found\r\n          </div>\r\n        </ion-col>\r\n      </ion-row> -->\r\n     \r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"week == 2 || week == 5\">\r\n  <div class=\"mainDiv\">\r\n    <ion-row class=\"headerRow\">\r\n      <ion-col size=\"12\">\r\n        <ion-label>This Week Don't Have Sessions</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_ka-session-verification_ka-session-verification_module_ts-es2015.js.map