(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-dashboard_stem-dashboard_module_ts"],{

/***/ 68921:
/*!********************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/stem-dashboard-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StemDashboardPageRoutingModule": function() { return /* binding */ StemDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stem_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stem-dashboard.page */ 3267);




const routes = [
    {
        path: '',
        component: _stem_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.StemDashboardPage
    },
    {
        path: 'summary-attendance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_stem_new_stem-dashboard_summary-attendance_summary-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./summary-attendance/summary-attendance.module */ 98528)).then(m => m.SummaryAttendancePageModule)
    }
];
let StemDashboardPageRoutingModule = class StemDashboardPageRoutingModule {
};
StemDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StemDashboardPageRoutingModule);



/***/ }),

/***/ 64025:
/*!************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/stem-dashboard.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StemDashboardPageModule": function() { return /* binding */ StemDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _stem_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stem-dashboard-routing.module */ 68921);
/* harmony import */ var _stem_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stem-dashboard.page */ 3267);







let StemDashboardPageModule = class StemDashboardPageModule {
};
StemDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stem_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.StemDashboardPageRoutingModule
        ],
        declarations: [_stem_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.StemDashboardPage]
    })
], StemDashboardPageModule);



/***/ }),

/***/ 3267:
/*!**********************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/stem-dashboard.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StemDashboardPage": function() { return /* binding */ StemDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_stem_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stem-dashboard.page.html */ 44712);
/* harmony import */ var _stem_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stem-dashboard.page.scss */ 81238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.component */ 55041);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);







// import { UserService } from 'src/app/services/emis/user.service';

let StemDashboardPage = class StemDashboardPage {
    constructor(navCtrl, alertCtrl, alertController, 
    // private userService: UserService,
    router, usersessionService, appComponent) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.alertController = alertController;
        this.router = router;
        this.usersessionService = usersessionService;
        this.appComponent = appComponent;
        this.isImageHidden = false;
        this.isHeaderHidden = true;
        this.sessionEmisUsertype = this.usersessionService.emis_usertype();
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        // this.getcycleStatus()
        this.isImageHidden = false;
        this.isHeaderHidden = true;
        let dataMod;
        this.mod = this.usersessionService.mod1();
        this.appComponent.initialModVal();
        if (this.mod != null && this.mod != '' && this.mod != undefined) {
            let mod1 = this.mod.split(',');
            let dashDetails = new Array();
            mod1.forEach(function (mval, mi) {
                console.log("mval", mval);
                // dataMod = +mval;
                if (18 == +mval) {
                    dataMod = +mval;
                }
                else if (4 == +mval) {
                    dataMod = +mval;
                }
                else if (12 == +mval) {
                    dataMod = +mval;
                }
            });
            console.log("dataMod", dataMod);
            this.dataMod = dataMod;
        }
        setTimeout(() => {
            this.isImageHidden = true;
            this.isHeaderHidden = false;
        }, 1500);
    }
    // getcycleStatus(){
    //   this.userService.getCycleStatus('1005067',2).subscribe((data) => {
    //     console.log(data,"data",data.result.ManualFilledCount,data.result.ManualFilledCount[0].Cycle);
    //     let test = data.result.ManualFilledCount[0].Cycle
    //     let tutu = "Cycle_"+test
    //     console.log(test,tutu,data.result[tutu]);
    //   })
    // }
    navigateBack() {
        this.router.navigate(['/tabs/home']);
    }
    schoolZone() {
        this.router.navigate(['/tabs/school-zone']);
    }
    experiments() {
        this.router.navigate(['/tabs/experiment-dashboard'], { queryParams: { "name": "experiments" } });
        // this.router.navigate(['/tabs/domain'], { queryParams: { "name": "experiments"} }); 
    }
    feed() {
        this.router.navigate(['/tabs/domain'], { queryParams: { "name": "feed" } });
    }
    leaveApproval() {
        this.router.navigate(['/tabs/approval-dashboard']);
    }
    profile() {
        this.router.navigate(['/tabs/profile']);
    }
    schedule() {
        this.router.navigate(['/tabs/stem-cycle']);
        // this.router.navigate(['/tabs/school-schedule'], { queryParams: { "item": item} });
    }
    stemleave() {
        this.router.navigate(['/tabs/leave-dashboard']);
    }
    talentExam() {
        this.router.navigate(['/tabs/te-school-list']);
    }
    summary() {
        this.router.navigate(['/tabs/summary-attendance']);
    }
    //pop
    schoolAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'calssInfo',
                header: 'Scheduling Mode',
                // subHeader: 'Please select school scheduling mode',
                // message: 'If you have completed, please click ok',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click',
                        handler: data => {
                            // this.schedule('auto');
                        }
                    },
                    {
                        cssClass: 'cancel_click',
                        text: 'Manual',
                        handler: data => {
                            // this.schedule('manual');
                        }
                    }
                ],
                backdropDismiss: false
            });
            yield alert.present();
        });
    }
};
StemDashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent }
];
StemDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stem-dashboard',
        template: _raw_loader_stem_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stem_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StemDashboardPage);



/***/ }),

/***/ 81238:
/*!************************************************************************!*\
  !*** ./src/app/pages/stem_new/stem-dashboard/stem-dashboard.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-bg {\n  background: url(\"/assets/images/SplashScreen.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n\n.cardicon1 {\n  background: url(\"/assets/images/Yourschoolzone.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon2 {\n  background: url(\"/assets/images/experiments.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon3 {\n  background: url(\"/assets/images/profile.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon4 {\n  background: url(\"/assets/images/feed.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon7 {\n  background: url(\"/assets/images/leave.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon5 {\n  background: url(\"/assets/images/schedule.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon6 {\n  background: url(\"/assets/images/leave.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZW0tZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdGQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxrRkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLCtFQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsMkVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSx3RUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLHlFQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdFO0VBQ0UsNEVBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSx5RUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLG9CQUFBO0FBQUoiLCJmaWxlIjoic3RlbS1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9TcGxhc2hTY3JlZW4ucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSBcclxuXHJcbiAgLmNhcmRpY29uMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1lvdXJzY2hvb2x6b25lLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkaWNvbjIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9leHBlcmltZW50cy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZGljb24zIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZGljb240IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZmVlZC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZGljb243IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbGVhdmUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5jYXJkaWNvbjUge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zY2hlZHVsZS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZGljb242IHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbGVhdmUucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 44712:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-dashboard/stem-dashboard.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [hidden]=\"isHeaderHidden\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Select Catagory</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"content login-bg\" [hidden]=\"isImageHidden\"></div>\r\n  <ion-grid [hidden]=\"isHeaderHidden\">\r\n    <ion-row>\r\n      <!-- <ion-col size=\"6\" (click)=\"schedule()\" *ngIf=\"dataMod == 4 && sessionEmisUsertype == 33\">\r\n        <div class=\"cardicon5\">\r\n          <div> Monthly tour planner </div>\r\n        </div>\r\n      </ion-col> -->\r\n      <ion-col size=\"6\" (click)=\"schoolZone()\" *ngIf=\"dataMod == 4 && sessionEmisUsertype == 33\">\r\n        <div class=\"cardicon1\">\r\n          <div> Today's Lab </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"experiments()\">\r\n        <div class=\"cardicon2\">\r\n          <div> Experiments </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"profile()\">\r\n        <div class=\"cardicon3\">\r\n          <div> Profile </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"stemleave()\" *ngIf=\"dataMod == 4 && sessionEmisUsertype == 33\">\r\n        <div class=\"cardicon6\">\r\n          <div> Leave </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"feed()\">\r\n        <div class=\"cardicon4\">\r\n          <div> Feed </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"leaveApproval()\" *ngIf=\"dataMod != 4\">\r\n        <div class=\"cardicon7\">\r\n          <div> Leave Approval  </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"talentExam()\">\r\n        <div class=\"cardicon3\">\r\n          <div> Talent Exam </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"summary()\" *ngIf=\"dataMod != 4\">\r\n        <div class=\"cardicon3\">\r\n          <div> Summary </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stem_new_stem-dashboard_stem-dashboard_module_ts-es2015.js.map