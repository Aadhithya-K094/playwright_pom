(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_cwsn-dashboard_cwsn-dashboard_module_ts"],{

/***/ 57809:
/*!****************************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-dashboard/cwsn-dashboard-routing.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnDashboardPageRoutingModule": function() { return /* binding */ CwsnDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cwsn_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cwsn-dashboard.page */ 4015);




const routes = [
    {
        path: '',
        component: _cwsn_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.CwsnDashboardPage
    }
];
let CwsnDashboardPageRoutingModule = class CwsnDashboardPageRoutingModule {
};
CwsnDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CwsnDashboardPageRoutingModule);



/***/ }),

/***/ 81330:
/*!********************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-dashboard/cwsn-dashboard.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnDashboardPageModule": function() { return /* binding */ CwsnDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cwsn_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cwsn-dashboard-routing.module */ 57809);
/* harmony import */ var _cwsn_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cwsn-dashboard.page */ 4015);
/* harmony import */ var _disability_screening_disability_screening_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../disability-screening/disability-screening.module */ 40042);
/* harmony import */ var _mht_health_check_up_answer_health_check_up_answer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mht/health-check-up-answer/health-check-up-answer.module */ 88778);









let CwsnDashboardPageModule = class CwsnDashboardPageModule {
};
CwsnDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cwsn_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnDashboardPageRoutingModule,
            _disability_screening_disability_screening_module__WEBPACK_IMPORTED_MODULE_2__.DisabilityScreeningPageModule,
            _mht_health_check_up_answer_health_check_up_answer_module__WEBPACK_IMPORTED_MODULE_3__.HealthCheckUpAnswerPageModule
        ],
        declarations: [_cwsn_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.CwsnDashboardPage]
    })
], CwsnDashboardPageModule);



/***/ }),

/***/ 4015:
/*!******************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-dashboard/cwsn-dashboard.page.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnDashboardPage": function() { return /* binding */ CwsnDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_cwsn_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cwsn-dashboard.page.html */ 56329);
/* harmony import */ var _cwsn_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cwsn-dashboard.page.scss */ 88523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cwsn.service */ 20210);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/sqlite/sqlitedatabase.service */ 48167);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _disability_screening_disability_screening_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../disability-screening/disability-screening.page */ 21439);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);












let CwsnDashboardPage = class CwsnDashboardPage {
    constructor(router, userSessionService, cwsnService, sqliteDB, ionicstorage, alertService, disabilityScreeningPage, alertController) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.cwsnService = cwsnService;
        this.sqliteDB = sqliteDB;
        this.ionicstorage = ionicstorage;
        this.alertService = alertService;
        this.disabilityScreeningPage = disabilityScreeningPage;
        this.alertController = alertController;
        this.mode = "LightMode";
        this.currAttenStatus = "";
        this.isProfileApproved = false;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.mode = this.cwsnService.changeMode(this.mode);
        this.mode = this.cwsnService.changeMode(this.mode);
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.sessionUserName = this.userSessionService.emis_username();
        this.teacher_id = this.userSessionService.teacher_id();
        this.currAttenStatus = localStorage.getItem("isCwsnAttenMarked");
        // Only call approval check once
        this.getApprovedTeacherRequests();
        // Don't call checkUserDetails here - it will be called after approval
        // this.checkAndShowPopup();
        this.cwsnService.cwsn_asses_ques();
    }
    checkUserDetails() {
        console.log("checkUserDetails - START");
        this.ionicstorage
            .getData("getUserDetailsCwsn")
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Storage data value:", data); // ← ADD THIS
            if (data) {
                console.log("data exists, setting usertype to:", data);
                this.usertype = data;
                console.log("About to call getDashboard. usertype =", this.usertype); // ← ADD THIS
                this.getDashboard();
                // ... rest
            }
            else {
                console.log("NO data in storage, calling getUserDetails"); // ← ADD THIS
                this.getUserDetails();
            }
        }))
            .catch((err) => {
            console.error("Storage error:", err); // ← ADD THIS
        });
    }
    getApprovedTeacherRequests() {
        if (!this.teacher_id ||
            this.teacher_id === undefined ||
            this.teacher_id === "") {
            console.log("Teacher ID is not available:", this.teacher_id);
            this.isProfileApproved = false;
            return;
        }
        this.cwsnService.get_approved_teacher_requests(this.teacher_id).subscribe((res) => {
            if (res && res.dataStatus && res.data && res.data.length > 0) {
                const approvedRequest = res.data.find((req) => req.approve_sts == "approved");
                this.isProfileApproved = !!approvedRequest;
                if (!this.isProfileApproved) {
                    this.inspectionList = [];
                }
                else {
                    // ✅ Only call checkUserDetails if approved
                    this.checkUserDetails();
                    // ✅ Show popup ONLY for approved users
                    this.checkAndShowPopup();
                }
            }
            else {
                this.isProfileApproved = false;
                this.inspectionList = [];
            }
        }, (error) => {
            console.error("Error fetching approved requests:", error);
            this.isProfileApproved = false;
            this.inspectionList = [];
        });
    }
    // async showNotApprovedMessage() {
    //   const alert = await this.alertController.create({
    //     header: "Not Approved",
    //     message: "Your profile is not approved yet",
    //     buttons: ["OK"],
    //     backdropDismiss: false,
    //   });
    //   await alert.present();
    // }
    getUserDetails() {
        let userTy = this.userSessionService.emis_usertype1();
        this.usertype = userTy == 2 ? 1 : 2;
        this.ionicstorage.insertData_Replace("getUserDetailsCwsn", this.usertype);
        // ✅ Only call getDashboard if already approved
        if (this.isProfileApproved) {
            this.getDashboard();
        }
        if (this.usertype == 1) {
            this.cwsnService.cwsnP1Post("load", 0);
            this.disabilityScreeningPage.checkLocalDB(2);
        }
    }
    getDashboard() {
        if (!this.isProfileApproved) {
            this.inspectionList = [];
            return;
        }
        this.currAttenStatus = localStorage.getItem("isCwsnAttenMarked");
        console.log("getDashboard");
        if (this.usertype == 2) {
            if (this.mode == "LightMode") {
                this.inspectionList = [
                    {
                        menu: "Profile",
                        image: "assets/icons/cwsn/Profile.svg",
                        id: 11,
                        url: `/tabs/cwsn/profile/${this.userSessionService.emis_username()}`,
                    },
                    {
                        menu: "Home Visit",
                        image: "assets/icons/cwsn/house-visiting.svg",
                        id: 11,
                        url: "/tabs/cwsn/tracking-school-list",
                    },
                    {
                        menu: "Comprehensive Assessment",
                        image: "assets/icons/cwsn/ca-dashboard.svg",
                        id: 11,
                        url: "/tabs/cwsn-menu",
                    },
                    {
                        menu: "IE Centers",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/ie-center-geo-fence",
                    },
                    {
                        menu: "Student Support Spectrum",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/ie-stdmapping-therapist",
                    },
                    {
                        menu: "School Visit",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/cwsn-school-list",
                    },
                    {
                        menu: "Daily Action Plan",
                        image: "assets/icons/cwsn/daily_action.svg",
                        id: 11,
                        url: "/tabs/cwsn-mark-attend",
                        status: this.currAttenStatus,
                    },
                ];
            }
            else {
                this.inspectionList = [
                    {
                        menu: "Profile",
                        image: "assets/icons/cwsn/Profile_dark.svg",
                        id: 11,
                        url: `/tabs/cwsn/profile/${this.userSessionService.emis_username()}`,
                    },
                    {
                        menu: "Home Visit",
                        image: "assets/icons/cwsn/house-visiting-dark.svg",
                        id: 11,
                        url: "/tabs/cwsn/tracking-school-list",
                    },
                    {
                        menu: "Comprehensive Assessment",
                        image: "assets/icons/cwsn/ca-dashboard.svg",
                        id: 11,
                        url: "/tabs/cwsn-menu",
                    },
                    {
                        menu: "IE Centers",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/ie-center-geo-fence",
                    },
                    {
                        menu: "Student Support Spectrum",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/ie-stdmapping-therapist",
                    },
                    {
                        menu: "School Visit",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/cwsn-school-list",
                    },
                    {
                        menu: "Daily Action Plan",
                        image: "assets/icons/cwsn/daily_action.svg",
                        id: 11,
                        url: "/tabs/cwsn-mark-attend",
                        status: this.currAttenStatus,
                    },
                ];
            }
        }
        else {
            if (this.mode == "LightMode") {
                this.inspectionList = [
                    {
                        menu: "Profile",
                        image: "assets/icons/cwsn/Profile.svg",
                        id: 11,
                        url: `/tabs/cwsn/profile/${this.userSessionService.emis_username()}`,
                    },
                    {
                        menu: "My Schools",
                        image: "assets/icons/cwsn/mappedschool.svg",
                        id: 11,
                        url: "/tabs/cwsn/school-list-cwsn/" +
                            this.userSessionService.emis_username() +
                            "",
                    },
                    {
                        menu: "Comprehensive Assessment",
                        image: "assets/icons/cwsn/ca-dashboard.svg",
                        id: 11,
                        url: "/tabs/cwsn-menu",
                    },
                    {
                        menu: "Home Visit",
                        image: "assets/icons/cwsn/house-visiting.svg",
                        id: 11,
                        url: "/tabs/cwsn/tracking-school-list",
                    },
                    {
                        menu: "IE Centers",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/ie-center-geo-fence",
                    },
                    {
                        menu: "School Visit",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/cwsn-school-list",
                    },
                    {
                        menu: "Daily Action Plan",
                        image: "assets/icons/cwsn/daily_action.svg",
                        id: 11,
                        url: "/tabs/cwsn-mark-attend",
                        status: this.currAttenStatus,
                    },
                ];
            }
            else {
                this.inspectionList = [
                    {
                        menu: "Profile",
                        image: "assets/icons/cwsn/Profile_dark.svg",
                        id: 11,
                        url: `/tabs/cwsn/profile/${this.userSessionService.emis_username()}`,
                    },
                    {
                        menu: "My Schools",
                        image: "assets/icons/cwsn/mappedschool_dark.svg",
                        id: 11,
                        url: "/tabs/cwsn/school-list-cwsn/" +
                            this.userSessionService.emis_username() +
                            "",
                    },
                    {
                        menu: "Comprehensive Assessment",
                        image: "assets/icons/cwsn/ca-dashboard.svg",
                        id: 11,
                        url: "/tabs/cwsn-menu",
                    },
                    {
                        menu: "Home Visit",
                        image: "assets/icons/cwsn/house-visiting-dark.svg",
                        id: 11,
                        url: "/tabs/cwsn/tracking-school-list",
                    },
                    {
                        menu: "IE Centers",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/ie-center-geo-fence",
                    },
                    {
                        menu: "School Visit",
                        image: "assets/icons/cwsn/IEcenterattendance.svg",
                        id: 11,
                        url: "/tabs/cwsn-school-list",
                    },
                    {
                        menu: "Daily Action Plan",
                        image: "assets/icons/cwsn/daily_action.svg",
                        id: 11,
                        url: "/tabs/cwsn-mark-attend",
                        status: this.currAttenStatus,
                    },
                ];
            }
        }
        this.mod = this.userSessionService.mod1();
        let mod1 = this.mod.split(",");
        let dashDetails = new Array();
        this.inspectionList.forEach(function (lval, li) {
            mod1.forEach(function (mval, mi) {
                if (lval.id == +mval) {
                    dashDetails.push(lval);
                }
            });
        });
        this.inspectionList = [];
        this.inspectionList = dashDetails;
        // debugger
        // if (this.currAttenStatus != '1') {
        //   this.getAttenStatus();
        // }
    }
    goToPages(item, mode) {
        if (item.menu == "My Students") {
            this.router.navigate(["/tabs/cwsn/my-students"], {
                queryParams: { title: item.menu, mode: mode },
                skipLocationChange: false,
            });
        }
        else if (item.menu == "Classroom Observation") {
            this.router.navigate(["/tabs/cwsn/my-students"], {
                queryParams: { title: item.menu, mode: mode },
                skipLocationChange: false,
            });
        }
        else if (item.menu == "Circular") {
            this.router.navigate(["/tabs/cwsn/my-students"], {
                queryParams: { title: item.menu, mode: mode },
                skipLocationChange: false,
            });
        }
        else if (item.menu == "Comprehensive Assessment") {
            this.router.navigate(["/tabs/cwsn-menu"], {
                queryParams: { title: item.menu, mode: mode, usertype: this.usertype },
                skipLocationChange: false,
            });
        }
        else {
            this.router.navigate([item.url], {
                queryParams: { title: item.menu, mode: mode, usertype: this.usertype },
                skipLocationChange: false,
            });
        }
    }
    goToBack() {
        this.router.navigate(["/tabs/home"]);
    }
    changeMode() {
        this.mode = this.cwsnService.changeMode(this.mode);
        setTimeout(() => {
            console.log(this.mode);
            this.getDashboard();
        }, 500);
    }
    getAttenStatus() {
        this.cwsnService.getCwsnMarkAtten(this.sessionUserName).subscribe((res) => {
            if (res.dataStatus) {
                localStorage.setItem("isCwsnAttenMarked", "1");
                let idx = this.inspectionList.findIndex((ml) => {
                    return ml.menu == "Mark attendance";
                });
                if (idx != -1) {
                    this.inspectionList[idx].status = 1;
                }
            }
            else {
                this.showSettingsAlert();
            }
        }, (error) => {
            this.showSettingsAlert();
        });
    }
    showSettingsAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Alert",
                message: "Please mark your attendance today, thank you",
                buttons: [
                    {
                        text: "OKAY",
                        role: "cancel",
                        handler: () => {
                            this.router.navigate(["/tabs/cwsn-mark-attend"]);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    checkAndShowPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const today = new Date().toISOString().split("T")[0]; // 'YYYY-MM-DD'
            const lastShown = localStorage.getItem("popupShownDate");
            if (lastShown !== today) {
                yield this.showCustomPopup();
                localStorage.setItem("popupShownDate", today);
            }
        });
    }
    showCustomPopup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: "Reminder",
                message: "Please mark your todays action plan, thank you",
                buttons: [
                    {
                        text: "OKAY",
                        role: "cancel",
                        handler: () => {
                            this.router.navigate(["/tabs/cwsn-mark-attend"]);
                        },
                    },
                ],
                cssClass: "my-custom-alert", // Optional: for custom styling
            });
            yield alert.present();
        });
    }
};
CwsnDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService },
    { type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService },
    { type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _disability_screening_disability_screening_page__WEBPACK_IMPORTED_MODULE_7__.DisabilityScreeningPage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController }
];
CwsnDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-cwsn-dashboard",
        template: _raw_loader_cwsn_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cwsn_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CwsnDashboardPage);



/***/ }),

/***/ 88523:
/*!********************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-dashboard/cwsn-dashboard.page.scss ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-grid {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 10px !important;\n  padding: 0 !important;\n  background-color: var(--primary-lite-color);\n}\n\nion-row {\n  padding: 0 !important;\n}\n\n.root-card {\n  --background: var(--seconday-color);\n  height: 100%;\n  border-radius: 15px;\n  margin: 18px;\n}\n\n.square-containers {\n  padding: 10px !important;\n}\n\n.square-containers .card-menu {\n  min-height: 110px;\n  text-align: center;\n  margin: auto;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --background: var(--seconday-color);\n}\n\n.square-containers .card-menu .card-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.square-containers .card-menu .card-items .card-value {\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.2px;\n  color: #4c4a4a;\n  margin-top: 5px;\n}\n\n.secondary {\n  background: var(--seconday-color);\n}\n\n.cwsn_home_img {\n  width: 100%;\n}\n\n.isMarked {\n  background: #00ff0061 !important;\n}\n\n.not-approved-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n  padding: 20px;\n}\n\n.not-approved-card {\n  text-align: center;\n  border-radius: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 350px;\n  margin: 0 auto;\n}\n\n.not-approved-content {\n  padding: 25px;\n}\n\n.not-approved-icon {\n  font-size: 64px;\n  color: #ff6b6b;\n  margin-bottom: 20px;\n}\n\n.not-approved-icon ion-icon {\n  width: 64px;\n  height: 64px;\n}\n\n.not-approved-title {\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #333;\n}\n\n.not-approved-message {\n  font-size: 16px;\n  color: #666;\n  margin-bottom: 25px;\n}\n\n.back-button {\n  margin-top: 10px;\n  --border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN3c24tZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkE7RUFDRSxrQ0FBQTtBQXZCRjs7QUEwQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7QUF2QkY7O0FBMEJBO0VBQ0UscUJBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBdkJGOztBQThCQTtFQUNFLHdCQUFBO0FBM0JGOztBQTRCRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0FBMUJKOztBQTJCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBekJOOztBQThCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBR0EsY0FBQTtFQUNBLGVBQUE7QUE5QlI7O0FBb0NBO0VBQ0UsaUNBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsV0FBQTtBQWpDRjs7QUFvQ0E7RUFDRSxnQ0FBQTtBQWpDRjs7QUFtQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBaENGOztBQW1DQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFoQ0Y7O0FBbUNBO0VBQ0UsYUFBQTtBQWhDRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBaENGOztBQW1DQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBaENGOztBQW1DQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWhDRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBaENGOztBQW1DQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7QUFoQ0YiLCJmaWxlIjoiY3dzbi1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmQtYmFja2dyb3VuZDogI2U2ZGRlYjtcclxuJGNhcmQtdGV4dDogIzY5Njk2OTtcclxuJGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4vLyAuaW1hZ2UtY29udGFpbmVye1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgIC5tZW51LWljb25ze1xyXG4vLyAgICAgd2lkdGg6IDY1JTtcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNzLWJhY2tncm91bmQtc2Vjb25kYXJ5LCB2YXIoLS1zZWNvbmRheS1jb2xvcikpO1xyXG4vLyAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgfVxyXG5cclxuLy8gICAudGV4dHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWdyaWQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1saXRlLWNvbG9yKTtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm9vdC1jYXJkIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDE4cHg7XHJcbiAgLy8gYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvY3dzbi9jd3NuX2hvbWVfYmcuc3ZnJyk7XHJcbiAgLy8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG4uc3F1YXJlLWNvbnRhaW5lcnMge1xyXG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAuY2FyZC1tZW51IHtcclxuICAgIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yKTtcclxuICAgIC5jYXJkLWl0ZW1zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtdmFsdWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxuICAgICAgICAvLyBjb2xvcjogIzY5Njk2OTtcclxuICAgICAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICBjb2xvcjogIzRjNGE0YTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yKTtcclxufVxyXG5cclxuLmN3c25faG9tZV9pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaXNNYXJrZWQge1xyXG4gIGJhY2tncm91bmQ6ICMwMGZmMDA2MSAhaW1wb3J0YW50O1xyXG59XHJcbi5ub3QtYXBwcm92ZWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5ub3QtYXBwcm92ZWQtY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubm90LWFwcHJvdmVkLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5ub3QtYXBwcm92ZWQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA2NHB4O1xyXG4gIGNvbG9yOiAjZmY2YjZiO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5ub3QtYXBwcm92ZWQtaWNvbiBpb24taWNvbiB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4ubm90LWFwcHJvdmVkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLm5vdC1hcHByb3ZlZC1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 56329:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/cwsn-dashboard/cwsn-dashboard.page.html ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon\r\n        class=\"back-icon\"\r\n        size=\"large\"\r\n        name=\"arrow-back\"\r\n        (click)=\"goToBack()\"\r\n      >\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">CWSN Dashboard</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon\r\n        *ngIf=\"this.mode == 'LightMode'\"\r\n        class=\"back-icon\"\r\n        size=\"large\"\r\n        name=\"moon-outline\"\r\n        (click)=\"changeMode()\"\r\n      ></ion-icon>\r\n      <ion-icon\r\n        *ngIf=\"this.mode == 'DarkMode'\"\r\n        class=\"back-icon\"\r\n        size=\"large\"\r\n        name=\"sunny-outline\"\r\n        (click)=\"changeMode()\"\r\n      ></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <!-- Show Not Approved Message -->\r\n  <div *ngIf=\"!isProfileApproved\" class=\"not-approved-container\">\r\n    <ion-card class=\"not-approved-card\">\r\n      <ion-card-content class=\"not-approved-content\">\r\n        <div class=\"not-approved-icon\">\r\n          <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"not-approved-title\">Profile Not Approved</div>\r\n        <div class=\"not-approved-message\">Your profile is not approved yet</div>\r\n        <ion-button\r\n          expand=\"block\"\r\n          color=\"primary\"\r\n          (click)=\"goToBack()\"\r\n          class=\"back-button\"\r\n        >\r\n          Go Back\r\n        </ion-button>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <!-- Show Normal Content Only When Approved -->\r\n  <div *ngIf=\"isProfileApproved\">\r\n    <ion-card class=\"root-card\">\r\n      <ion-grid>\r\n        <ion-row class=\"square-containers\">\r\n          <ion-col\r\n            size=\"4\"\r\n            *ngFor=\"let item of inspectionList\"\r\n            (click)=\"goToPages(item,this.mode)\"\r\n          >\r\n            <ion-card class=\"card-menu\" [class.isMarked]=\"item.status==1\">\r\n              <div class=\"card-items\">\r\n                <img [src]=\"item.image\" class=\"image\" />\r\n                <span class=\"card-value\">{{item.menu}}</span>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"text-center\">\r\n          <img\r\n            *ngIf=\"this.mode == 'LightMode'\"\r\n            class=\"cwsn_home_img\"\r\n            src=\"../../../../assets/icons/cwsn/cwsn_home_bg.svg\"\r\n            alt=\"img\"\r\n          />\r\n          <img\r\n            *ngIf=\"this.mode == 'DarkMode'\"\r\n            class=\"cwsn_home_img\"\r\n            src=\"../../../../assets/icons/cwsn/cwsn_home_img_black.svg\"\r\n            alt=\"img\"\r\n          />\r\n        </div>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_cwsn-dashboard_cwsn-dashboard_module_ts-es2015.js.map