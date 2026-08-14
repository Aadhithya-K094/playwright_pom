(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_commonpages_dashboard_dashboard_module_ts"],{

/***/ 57058:
/*!*************************************************************************!*\
  !*** ./src/app/pages/commonpages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 41813);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 64819:
/*!*****************************************************************!*\
  !*** ./src/app/pages/commonpages/dashboard/dashboard.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 57058);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 41813);







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 41813:
/*!***************************************************************!*\
  !*** ./src/app/pages/commonpages/dashboard/dashboard.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 61897);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 79179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ionic-storage/ionic-storage.service */ 81085);
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/network-service */ 34442);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);
/* harmony import */ var _services_emis_sids_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/emis/sids.service */ 35252);










let DashboardPage = class DashboardPage {
    constructor(router, userSessionService, platform, ionicstorage, networkService, SidsService) {
        this.router = router;
        this.userSessionService = userSessionService;
        this.platform = platform;
        this.ionicstorage = ionicstorage;
        this.networkService = networkService;
        this.SidsService = SidsService;
        this.subscription = this.platform.backButton.subscribeWithPriority(9999, () => { });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.ionicstorage.getData('Records').then((data) => {
            if (data && data.length > 0) {
                let records = { "json": data };
                if (this.networkService.getCurrentNetworkStatus() == 0) {
                    this.SidsService.PostinsWorkForm(records).subscribe((res) => {
                        if (res.dataStatus == true && res.status == 200) {
                            // this.alertService.success("Data Insert Successfully")
                            this.ionicstorage.removeKey('Records');
                        }
                    });
                }
            }
        }, (error) => console.error(error));
        this.emis_usertype = this.userSessionService.emis_usertype();
        this.getDashboard();
    }
    getDashboard() {
        this.inspectionList = [
            {
                id: 19,
                menu: 'Civil',
                image: 'assets/icons/Civil.svg',
                url: '/tabs/civilbuildinglist'
            },
            {
                id: 22,
                menu: 'Civil Evaluation',
                image: 'assets/icons/civilevaluation.svg',
                url: '/tabs/school-info/Id=2'
            },
            {
                id: 23,
                menu: 'SIDS Survey',
                image: 'assets/icons/sids.svg',
                url: '/tabs/sids-dashboard'
            },
            // {
            //   id: 23,
            //   menu: 'Work Inspection',
            //   image: 'assets/icons/sids.svg',
            //   url:'/tabs/work-inspection'
            // },
            // {
            //   id: 23,
            //   menu: 'Form',
            //   image: 'assets/icons/sids.svg',
            //   url:'/tabs/my-inspection-from'
            // },
            {
                id: 23,
                menu: 'Civil Inspection',
                image: 'assets/icons/sids.svg',
                url: '/tabs/work-inspection'
            },
            {
                id: 23,
                menu: 'Inspection History',
                image: 'assets/icons/sids.svg',
                url: '/tabs/inspection-selection'
            },
            // {
            //   id: 23,
            //   menu: 'sample',
            //   image: 'assets/icons/sids.svg',
            //   url:'/tabs/sids-general-dashboard'
            // },
            //   {
            //    id: 23,
            //    menu: 'RCI',
            //    image: 'assets/icons/sids.svg',
            //    url:'/tabs/school-inspection'
            //  },
            // {
            //   id: 28,
            //   menu: 'Identification Camp',
            //   image: 'assets/icons/sids.svg',
            //   url:'tabs/student-search'
            // },
        ];
        this.mod = this.userSessionService.mod1();
        let mod1 = this.mod.split(',');
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
    }
    goToSurvey(item) {
        this.router.navigate([item.url]);
    }
    goToBack() {
        this.router.navigate(['/tabs/home']);
    }
    ionViewDidLeave() {
        this.subscription.unsubscribe();
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_3__.NetworkService },
    { type: _services_emis_sids_service__WEBPACK_IMPORTED_MODULE_5__.SidsService }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 79179:
/*!*****************************************************************!*\
  !*** ./src/app/pages/commonpages/dashboard/dashboard.page.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 61897:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Inspection </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-row>\r\n    <ion-col size=\"3\" class=\"menu menu-txt\"  *ngFor=\"let item of inspectionList\">\r\n      <ion-row (click)=\"goToSurvey(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_commonpages_dashboard_dashboard_module_ts-es2015.js.map