(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_stc-dashboard_stc-dashboard_module_ts"],{

/***/ 19414:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/stc-dashboard-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StcDashboardPageRoutingModule": function() { return /* binding */ StcDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stc_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stc-dashboard.page */ 80249);




const routes = [
    {
        path: '',
        component: _stc_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.StcDashboardPage
    }
];
let StcDashboardPageRoutingModule = class StcDashboardPageRoutingModule {
};
StcDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StcDashboardPageRoutingModule);



/***/ }),

/***/ 95328:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/stc-dashboard.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StcDashboardPageModule": function() { return /* binding */ StcDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _stc_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stc-dashboard-routing.module */ 19414);
/* harmony import */ var _stc_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stc-dashboard.page */ 80249);







let StcDashboardPageModule = class StcDashboardPageModule {
};
StcDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stc_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.StcDashboardPageRoutingModule
        ],
        declarations: [_stc_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.StcDashboardPage]
    })
], StcDashboardPageModule);



/***/ }),

/***/ 80249:
/*!************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/stc-dashboard.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StcDashboardPage": function() { return /* binding */ StcDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_stc_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stc-dashboard.page.html */ 16040);
/* harmony import */ var _stc_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stc-dashboard.page.scss */ 44462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);







let StcDashboardPage = class StcDashboardPage {
    constructor(router, route, userSession, userService) {
        this.router = router;
        this.route = route;
        this.userSession = userSession;
        this.userService = userService;
        this.airArray = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.route.queryParams.subscribe((params) => {
            this.Type = params['Type'];
            console.log("Type", this.Type);
        });
        if (this.userSession.emis_usertype() == 8) {
            this.airArray = [{
                    id: 1,
                    menu: 'Tamil Mozhi Karpom',
                    image: 'assets/images/nilp/NILP.svg',
                    url: '/tabs/stc-activity'
                }];
        }
        else {
            this.userService.RSTMModuleCheck(this.userSession.emis_username()).subscribe(res => {
                if (res.dataStatus) {
                    if (this.userSession.emis_usertype() == 39) {
                        this.airArray = [{
                                id: 2,
                                menu: 'RSTC',
                                image: 'assets/icons/school_cleaning.svg',
                                url: '/tabs/stc-activity'
                            }];
                    }
                }
                else {
                    this.airArray = [];
                }
            });
        }
    }
    goToMenu(item) {
        this.router.navigate([item.url], { queryParams: { Type: item.id } });
    }
    navigateBack() {
        this.router.navigate(['/tabs/home']);
    }
};
StcDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
StcDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-stc-dashboard',
        template: _raw_loader_stc_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stc_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StcDashboardPage);



/***/ }),

/***/ 44462:
/*!**************************************************************************!*\
  !*** ./src/app/pages/stc-activity/stc-dashboard/stc-dashboard.page.scss ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menuList {\n  margin: 5px;\n  border: 1px solid gainsboro;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.divList {\n  border: 1px solid #630094;\n  padding: 5px 10px;\n  border-radius: 50px;\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0Yy1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzdGMtZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51TGlzdHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMCwgMjIwLCAyMjApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdkxpc3R7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjMwMDk0O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ 16040:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/stc-dashboard/stc-dashboard.page.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Residential Special Training Centers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"row-head\">\r\n    <ion-col *ngFor=\"let item of airArray; let i=index\" size=\"6\" class=\"menuList\">\r\n      <ion-row (click)=\"goToMenu(item)\">\r\n        <div class=\"divList\">\r\n          <img src=\"{{item.image}}\" style=\"margin: 10px auto;width: 50px; height: 40px;\">\r\n        </div>\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"newsecondaryTex\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col *ngIf=\"airArray.length == 0\" size=\"12\" style=\"display:flex; justify-content: center;\r\n    align-items: center;width: 100%; height: 80vh;\">\r\n      <div >No Data Found</div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_stc-activity_stc-dashboard_stc-dashboard_module_ts-es2015.js.map