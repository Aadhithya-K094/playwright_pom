(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_my-schools_pums-session-details_pums-session-details_module_ts"],{

/***/ 12490:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/pums-session-details/pums-session-details-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PumsSessionDetailsPageRoutingModule": function() { return /* binding */ PumsSessionDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pums_session_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pums-session-details.page */ 26441);




const routes = [
    {
        path: '',
        component: _pums_session_details_page__WEBPACK_IMPORTED_MODULE_0__.PumsSessionDetailsPage
    }
];
let PumsSessionDetailsPageRoutingModule = class PumsSessionDetailsPageRoutingModule {
};
PumsSessionDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PumsSessionDetailsPageRoutingModule);



/***/ }),

/***/ 67149:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/pums-session-details/pums-session-details.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PumsSessionDetailsPageModule": function() { return /* binding */ PumsSessionDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pums_session_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pums-session-details-routing.module */ 12490);
/* harmony import */ var _pums_session_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pums-session-details.page */ 26441);







let PumsSessionDetailsPageModule = class PumsSessionDetailsPageModule {
};
PumsSessionDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pums_session_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.PumsSessionDetailsPageRoutingModule
        ],
        declarations: [_pums_session_details_page__WEBPACK_IMPORTED_MODULE_1__.PumsSessionDetailsPage]
    })
], PumsSessionDetailsPageModule);



/***/ }),

/***/ 26441:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/pums-session-details/pums-session-details.page.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PumsSessionDetailsPage": function() { return /* binding */ PumsSessionDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_pums_session_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pums-session-details.page.html */ 9623);
/* harmony import */ var _pums_session_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pums-session-details.page.scss */ 61346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);








let PumsSessionDetailsPage = class PumsSessionDetailsPage {
    // public alertButtons = ['OK'];
    // public alertInputs = [
    //   {
    //     label: 'Red',
    //     type: 'radio',
    //     value: 'red',
    //   },
    //   {
    //     label: 'Blue',
    //     type: 'radio',
    //     value: 'blue',
    //   },
    //   {
    //     label: 'Green',
    //     type: 'radio',
    //     value: 'green',
    //   },
    // ];
    constructor(router, userSessionService, route, emisService) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.route = route;
        this.emisService = emisService;
        this.isOpennow = false;
        this.emisName = this.userSessionService.emis_username();
        this.emis_usertype = this.userSessionService.emis_usertype();
        let currentDate = new Date();
        this.day = currentDate.getDay();
        var date = currentDate.getDate();
        // var weekOfMonth = Math.ceil((date - 1 - this.day) / 7);
        var weekOfMonth = (0 | currentDate.getDate() / 7) + 1;
        console.log(weekOfMonth, "week");
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe((params) => {
            this.schoolId = params['schoolId'];
        });
        if (this.schoolId) {
            let data = {
                "arpId": this.emisName,
                "schoolId": this.schoolId
            };
            this.groupList = [];
            this.emisService.ArpSchlSessDetails(data).subscribe(res => {
                if (res.dataStatus) {
                    this.groupList = res.result;
                    if (this.groupList) {
                        this.groupList.forEach(x => {
                            x.StartStatus = 0,
                                x.EndStatus = 0,
                                x.IndexId = "";
                        });
                    }
                }
            });
            if (this.groupList) {
                let currDate = new Date();
                let data = {
                    "ArpId": this.emisName,
                    "schlId": this.schoolId,
                    "SesDate": moment__WEBPACK_IMPORTED_MODULE_4___default()(currDate).format("yyyy-MM-DD")
                };
                this.otpstatusList = [];
                this.emisService.ArpVerifyOtpGet(data).subscribe(res => {
                    if (res.dataStatus) {
                        this.otpstatusList = res.result;
                    }
                    if (this.otpstatusList) {
                        this.groupList.forEach(x => {
                            for (let i = 0; i < this.otpstatusList.length; i++) {
                                if (x.id == this.otpstatusList[i].group_id) {
                                    x.StartStatus = this.otpstatusList[i].StartStatus;
                                    x.EndStatus = this.otpstatusList[i].EndStatus;
                                    x.IndexId = this.otpstatusList[i].id;
                                }
                            }
                        });
                    }
                });
            }
        }
    }
    generate_otp(data) {
        this.router.navigate(["/tabs/otp-submission"], { queryParams: { 'data': JSON.stringify(data) } });
    }
    showsession(data) {
        this.router.navigate(["/tabs/session-summary"], { queryParams: { 'data': JSON.stringify(data) } });
    }
    arpstudentdetails() {
        this.router.navigate(["/tabs/arp-session-details"]);
    }
    arpcoursematerial() {
        this.router.navigate(["/tabs/arp-course-materials"]);
    }
    backBtn() {
        this.router.navigate(["/tabs/my-schools"]);
    }
};
PumsSessionDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_2__.EmisService }
];
PumsSessionDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pums-session-details',
        template: _raw_loader_pums_session_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pums_session_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PumsSessionDetailsPage);



/***/ }),

/***/ 61346:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/art-culture/my-schools/pums-session-details/pums-session-details.page.scss ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  --background: #917AFE;\n}\n\n.Div_ARP {\n  color: #555555;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n.Div_dropdown {\n  border: 3px solid #917AFE;\n  border-radius: 2px;\n}\n\n.Div_table {\n  background-color: #917AFE;\n  border-radius: 2px;\n  color: white;\n  font-size: 13px;\n}\n\n.Div_table1 {\n  background-color: #FFFFFF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_table2 {\n  background-color: #EBF4FF;\n  border-radius: 2px;\n  color: #727374;\n  font-size: 13px;\n}\n\n.Div_box {\n  border-right: 1px solid #FFFFFF;\n  text-align: center;\n}\n\n.Div_arrow {\n  border-right: 1px solid #FFFFFF;\n  text-align: center;\n}\n\n.start {\n  --background: #917AFE;\n  --color:white;\n}\n\n.end {\n  border: 2px solid #917AFE;\n  --background:white;\n  --color:#917AFE;\n  border-radius: 5px;\n}\n\n.icon {\n  color: #917AFE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1bXMtc2Vzc2lvbi1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtFQUVBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFPSjs7QUFMRTtFQUNGLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFRQTs7QUFORTtFQUNFLGNBQUE7QUFTSiIsImZpbGUiOiJwdW1zLXNlc3Npb24tZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcclxuICAtLWJhY2tncm91bmQ6ICM5MTdBRkU7XHJcbn1cclxuXHJcbi5EaXZfQVJQe1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLkRpdl9kcm9wZG93bntcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICM5MTdBRkU7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgLkRpdl90YWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MTdBRkU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5EaXZfdGFibGUxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjNzI3Mzc0O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuRGl2X3RhYmxlMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkY0RkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjb2xvcjogIzcyNzM3NDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLkRpdl9ib3h7XHJcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5EaXZfYXJyb3d7XHJcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zdGFydHtcclxuICAgIC0tYmFja2dyb3VuZDogIzkxN0FGRTtcclxuICAgIC0tY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5lbmR7XHJcbmJvcmRlcjoycHggc29saWQgIzkxN0FGRTtcclxuLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4tLWNvbG9yOiM5MTdBRkU7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmljb257XHJcbiAgICBjb2xvcjojOTE3QUZFO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 9623:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/my-schools/pums-session-details/pums-session-details.page.html ***!
  \****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>pums-session-details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content> -->\r\n\r\n<ion-header>\r\n\r\n  <ion-toolbar class=\"toolbar\">\r\n\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n\r\n      </ion-icon>\r\n\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">Session Details</ion-title>\r\n\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <div style=\"margin: 20px;\">\r\n    <ion-row style=\"background-color: #b3a7ec;border: 1px solid #917AFE;color:white\">\r\n      <ion-col size=\"3\" style=\"text-align: center;align-self: center;font-size: 12px;\">\r\n        <label>Group Name</label>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;align-self: center;font-size: 12px;\">\r\n        <label>Art Form </label>\r\n      </ion-col>\r\n      <ion-col size=\"5\" style=\"text-align: center;align-self: center;font-size: 12px;\">\r\n        <label>Day & Session </label>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"2\" style=\"text-align: center;align-self: center;font-size: 12px;\">\r\n        <label>Student's Details </label>\r\n      </ion-col> -->\r\n    </ion-row>\r\n    <ion-row *ngFor=\"let data of groupList\">\r\n      <div style=\"border: 1px solid #917AFE;width: 100%;\" >\r\n        <ion-row style=\"padding: 6px;border-bottom: 3px dashed lightgray;\">\r\n          <ion-col size=\"3\" style=\"text-align: center;align-self: center;font-size: 12px;\">\r\n            <label>{{data.group_name}}</label>\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: center;align-self: center;font-size: 12px;\">\r\n            <label>{{data.key_art_form}}</label>\r\n          </ion-col>\r\n          <ion-col size=\"5\" style=\"text-align: center;align-self: center;font-size: 12px;\">\r\n            <ion-label>Day : {{data.day == 1 ? 'Monday' : data.day == 2 ? 'Tuesday' : data.day == 3 ? 'Wednesday' : data.day ==4 ? 'Thursday' : 'Friday'}}</ion-label><br>\r\n            <ion-label>Session : {{data.session == 1 ? '1 - 2' : data.session == 2 ? '3 - 4' : data.session == 3 ? '5 - 6' : '7 - 8'}}</ion-label>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"2\" style=\"text-align: center;align-self: center;font-size: 25px;\">\r\n            <ion-icon name=\"arrow-forward-circle-outline\" class=\"icon\" (click)=\"arpstudentdetails()\"></ion-icon>\r\n          </ion-col> -->\r\n        </ion-row>\r\n        \r\n        <ion-row style=\"padding: 6px;\" *ngIf=\"data.day == day\">\r\n          <ion-col size=\"4\" style=\"text-align: center;align-self: center;font-size: 12px;color: #917AFE;font-weight: 500;border-right: 3px dashed lightgray;\">\r\n            \r\n            <ion-label>Course Material</ion-label><br>\r\n            <!-- <ion-label style=\"margin-right: 7px;\">view more</ion-label><br> -->\r\n            <ion-icon name=\"eye\" style=\"margin-top: 4px;font-size: 20px;\" class=\"icon\"\r\n              (click)=\"arpcoursematerial()\"></ion-icon>\r\n            \r\n          </ion-col>\r\n  \r\n          <ion-col size=\"4\" style=\"text-align: center;align-self: center;font-size: 12px;color: #917AFE;font-weight: 500;\">\r\n            <ion-row>\r\n              <ion-col size=\"3\" style=\"text-align: center\">\r\n                <ion-button fill=\"solid\" size=\"small\" class=\"start\" [disabled]=\"data.StartStatus == 1\" (click)=\"generate_otp(data)\">\r\n                  start\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n          <ion-col size=\"4\" style=\"text-align: center;align-self: right;font-size: 12px;color: #917AFE;font-weight: 500;\">\r\n            <ion-row>\r\n              <ion-col size=\"3\" style=\"text-align: center\">\r\n                <ion-button fill=\"solid\" size=\"small\" class=\"start\" [disabled]=\"data.EndStatus == 1 || data.StartStatus != 1\" (click)=\"showsession(data)\">\r\n                  end\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n        <!-- <ion-row style=\"padding: 6px;\" *ngIf=\"data.day != day\">\r\n          <ion-col size=\"12\" style=\"text-align: center;align-self: center;font-size: 12px;color: #917AFE;font-weight: 500;\">\r\n            <ion-label>Course Material</ion-label><br>\r\n            <ion-label style=\"margin-right: 7px;\">view more</ion-label>\r\n            <ion-icon name=\"eye\" style=\"margin-top: 4px;font-size: 20px;\" class=\"icon\"\r\n              (click)=\"arpcoursematerial()\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </div>\r\n    </ion-row>\r\n    \r\n\r\n\r\n  </div>\r\n  <!-- <div style=\"margin: 20px;\">\r\n\r\n    <ion-row class=\"Div_table\" style=\"border :1px solid #DFDFDF\">\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div style=\"align-self: center;\">\r\n          GROUP NAME\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div style=\"align-self: center;\">\r\n          ART FORM\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.5\" class=\"Div_box\">\r\n        <div style=\"align-self: center;\">\r\n          DATE & TIME\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" class=\"Div_arrow\">\r\n        <div style=\"align-self: center;font-size: 12px;\">\r\n          STUDENT DETAILS\r\n        </div>\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n\r\n    <ion-row class=\"Div_table1\" style=\"border :1px solid #DFDFDF;align-self: center;\">\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          wonder\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          music\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.5\" class=\"Div_box\">\r\n        <div>\r\n          14 june 23\r\n          02:30 to 03:30pm\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" class=\"Div_arrow\">\r\n        <div>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-row>\r\n            <ion-col size=\"6\">gh</ion-col>\r\n\r\n            <ion-col size=\"6\">gh</ion-col>\r\n            <ion-row>\r\n            <ion-col size=\"6\">\r\n          <p>Course Materials</p>\r\n          <a>view more<ion-icon name=\"eye-outline\"></ion-icon></a>\r\n        </ion-col>\r\n        \r\n          <ion-col size=\"3\">\r\n            <ion-button size=\"small\" class=\"startbtn\">start</ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"3\">\r\n            <ion-button size=\"small\" class=\"endbtn\">End</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <div style=\"border-top: dashed 2px;\">\r\n          ghgdhjh\r\n        </div>\r\n      </ion-row>\r\n    </ion-row>\r\n    \r\n\r\n\r\n\r\n    <ion-row class=\"Div_table2\" style=\"border :1px solid #DFDFDF\">\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          Aadhithya A\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          Folk arts\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.5\" class=\"Div_box\">\r\n        <div>\r\n          12:30\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" class=\"Div_arrow\">\r\n        <div>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"Div_table1\" style=\"border :1px solid #DFDFDF\">\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          Aadhithya A\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          Folk arts\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3.5\" class=\"Div_box\">\r\n        <div>\r\n          12:30\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" class=\"Div_arrow\">\r\n        <div>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"Div_table2\" style=\"border :1px solid #DFDFDF\">\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          Aadhithya A\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" class=\"Div_box\">\r\n        <div>\r\n          Folk arts\r\n        </div>\r\n      </ion-col>\r\n\r\n\r\n      <ion-col size=\"3.5\" class=\"Div_box\">\r\n        <div>\r\n          12:30\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2.5\" class=\"Div_arrow\">\r\n        <div>\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div> -->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_my-schools_pums-session-details_pums-session-details_module_ts-es2015.js.map