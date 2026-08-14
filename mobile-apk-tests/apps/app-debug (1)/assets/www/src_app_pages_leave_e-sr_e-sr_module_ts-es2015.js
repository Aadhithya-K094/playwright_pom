(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_e-sr_e-sr_module_ts"],{

/***/ 21463:
/*!*********************************************************!*\
  !*** ./src/app/pages/leave/e-sr/e-sr-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ESrPageRoutingModule": function() { return /* binding */ ESrPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _e_sr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-sr.page */ 60456);




const routes = [
    {
        path: '',
        component: _e_sr_page__WEBPACK_IMPORTED_MODULE_0__.ESrPage
    }
];
let ESrPageRoutingModule = class ESrPageRoutingModule {
};
ESrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ESrPageRoutingModule);



/***/ }),

/***/ 89639:
/*!*************************************************!*\
  !*** ./src/app/pages/leave/e-sr/e-sr.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ESrPageModule": function() { return /* binding */ ESrPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _e_sr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./e-sr-routing.module */ 21463);
/* harmony import */ var _e_sr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-sr.page */ 60456);







let ESrPageModule = class ESrPageModule {
};
ESrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _e_sr_routing_module__WEBPACK_IMPORTED_MODULE_0__.ESrPageRoutingModule
        ],
        declarations: [_e_sr_page__WEBPACK_IMPORTED_MODULE_1__.ESrPage]
    })
], ESrPageModule);



/***/ }),

/***/ 60456:
/*!***********************************************!*\
  !*** ./src/app/pages/leave/e-sr/e-sr.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ESrPage": function() { return /* binding */ ESrPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_e_sr_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./e-sr.page.html */ 98984);
/* harmony import */ var _e_sr_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-sr.page.scss */ 43036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);








let ESrPage = class ESrPage {
    constructor(router, usersessionService, Actroute, emisService, alert) {
        this.router = router;
        this.usersessionService = usersessionService;
        this.Actroute = Actroute;
        this.emisService = emisService;
        this.alert = alert;
        this.menuLists = [];
        this.leaveMenuList = [];
        this.leave_dash = 0;
        this.sessionModId = this.usersessionService.mod1();
        this.sessionTeacherType = this.usersessionService.teacher_type();
        this.sessionTeacherId = this.usersessionService.teacher_id();
        this.sessionEmisUserType = this.usersessionService.emis_usertype();
        // this.sessionSchoolId = this.usersessionService.school_key_id();
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.routeData = this.Actroute.snapshot;
        this.pageId = this.routeData.queryParams.page;
        if (this.pageId == 2) {
            this.leave_dash = 1;
        }
        else {
            this.leave_dash = 0;
        }
        this.getMenuList();
        // if (this.sessionTeacherType == 11 || this.sessionTeacherType == 36 || this.sessionTeacherType == 26 || this.sessionTeacherType == 27 || this.sessionTeacherType == 28 || this.sessionTeacherType == 29 || this.sessionTeacherType == 41) 
        if (this.sessionEmisUserType == 14 || this.sessionEmisUserType == 8) {
            this.getTeacherDetls(1);
        }
        else {
            this.getTeacherDetls(2);
        }
    }
    //get staff details using get api
    getTeacherDetls(flag) {
        this.emisService.getTeacherDetls(this.sessionTeacherId, flag).subscribe((data) => {
            if (data.dataStatus == true) {
                let teacherDetails = data.result;
                if (teacherDetails.length > 0) {
                    this.designation = teacherDetails[0].Desgn;
                    this.category = teacherDetails[0].SchCat;
                    this.schlId = teacherDetails[0].SchlId;
                    this.gender = teacherDetails[0].gender;
                }
            }
        }, error => {
            this.alert.error("Something went wrong");
        });
    }
    /**
    * @access public
    * @method getMenuList
    * @param -
    * @description this function used to show modules for the logged in users
    * @create_by -
    * @modified by Rajee Jan 16, 2023
    * @return array of object
    */
    getMenuList() {
        //leave dashboard menu list
        this.menuLists = [
            {
                menu: "My Profile",
                image: "/assets/icons/leave/Profile.svg",
                mod1: 42,
                url: "/tabs/settings",
            },
            {
                menu: "Leave Management",
                image: "/assets/icons/leave/leave management.svg",
                mod1: 42,
                url: "tabs/leavemanagement",
            },
        ];
        //leave management menu list
        this.leaveMenuList = [
            {
                menu: "My Leaves",
                image: "/assets/icons/leave/My leaves.svg",
                mod1: 43,
                url: "/tabs/leave",
            },
            {
                menu: "Apply Leaves",
                image: "assets/icons/leave/My leaves.svg",
                mod1: 43,
                url: "/tabs/leave",
            },
            {
                menu: "Leave History",
                image: "/assets/icons/leave/view leaves history.svg",
                mod1: 43,
                url: "tabs/leavehistory",
            },
            {
                menu: "Leave Sanction",
                image: "/assets/icons/leave/leave approval.svg",
                mod1: 44,
                url: "/tabs/leave-approval-list",
            },
            // {
            //   menu: "Holiday Calendar",
            //   image: "assets/icons/leave/holiday calender.svg",
            //   mod1: 43,    
            //   url: "/tabs/leave",
            // },
            {
                menu: "Know Your Leaves",
                image: "/assets/icons/leave/know your leaves.svg",
                mod1: 43,
                url: "tabs/know-your-leaves",
            },
        ];
        if (this.sessionModId) {
            let splitedModValue = this.sessionModId.split(",");
            let showModuleLists = new Array();
            let showLeaveModuleLists = new Array();
            //leave dashboard menu
            this.menuLists.forEach(function (menuvalue) {
                splitedModValue.forEach(function (modvalue) {
                    if (menuvalue.mod1 == +modvalue) {
                        showModuleLists.push(menuvalue);
                    }
                });
            });
            this.menuLists = showModuleLists;
            //leave management menu
            this.leaveMenuList.forEach(function (menuvalue) {
                splitedModValue.forEach(function (modvalue) {
                    if (menuvalue.mod1 == +modvalue) {
                        showLeaveModuleLists.push(menuvalue);
                    }
                });
            });
            this.leaveMenuList = showLeaveModuleLists;
        }
    }
    //Go back to dashboard
    goBack() {
        this.router.navigate(["/tabs/home"]);
    }
    //Go back to leave dashboard
    goLeaveBack() {
        this.leave_dash = 0;
    }
    //Navigate to selected page
    navigatePage(item, url, mod) {
        if (item.menu == 'Leave Management') {
            this.leave_dash = 1;
            // this.router.navigate([url]); 
        }
        else {
            this.leave_dash = 0;
            this.router.navigate([url], { queryParams: { 'menu': item.menu, 'from_page': 'e-sr', 'Designation': this.designation, 'Category': this.category, 'SchlId': this.schlId, 'Gender': this.gender }, skipLocationChange: false });
        }
    }
};
ESrPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
ESrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-e-sr',
        template: _raw_loader_e_sr_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_e_sr_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ESrPage);



/***/ }),

/***/ 43036:
/*!*************************************************!*\
  !*** ./src/app/pages/leave/e-sr/e-sr.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\n.card-menu {\n  min-height: 110px;\n  text-align: center;\n  margin: auto;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --background: #fff;\n}\n\n.card-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card-value {\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.2px;\n  color: #4c4a4a;\n  margin-top: 5px;\n}\n\nion-grid {\n  padding: 10px;\n}\n\n.pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtc3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoiZS1zci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC51c2VyLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLnVzZXItaWNvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5jYXJkLW1lbnUge1xyXG4gICAgbWluLWhlaWdodDogMTEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5jYXJkLWl0ZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkLXZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjJweDtcclxuICAgIGNvbG9yOiAjNGM0YTRhO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5wdC0xMCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 98984:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/e-sr/e-sr.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\" *ngIf=\"this.leave_dash != 1\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goLeaveBack()\" *ngIf=\"this.leave_dash != 0\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">e-Profile</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <!-- e-profile containers -->\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"this.leave_dash != 1\">\r\n      <ion-col size=\"4\" *ngFor=\"let item of menuLists\" (click)=\"navigatePage(item,item.url,item.mod1)\">\r\n        <ion-card class=\"card-menu\">\r\n          <div class=\"card-items \">\r\n            <img [src]=\"item.image\" />\r\n            <span class=\"card-value\">{{item.menu}}</span>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- leave management containers -->\r\n    <ion-row class=\"\" *ngIf=\"this.leave_dash != 0\">\r\n      <ion-col size=\"4\" *ngFor=\"let leaveItem of leaveMenuList\"\r\n        (click)=\"navigatePage(leaveItem,leaveItem.url,leaveItem.mod1)\">\r\n        <ion-card class=\"card-menu\">\r\n          <div class=\"card-items \">\r\n            <img [src]=\"leaveItem.image\" />\r\n            <span class=\"card-value\">{{leaveItem.menu}}</span>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <!-- background image -->\r\n  <div style=\"text-align:center\">\r\n    <img src=\"/assets/icons/leave/bg.svg\">\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_leave_e-sr_e-sr_module_ts-es2015.js.map