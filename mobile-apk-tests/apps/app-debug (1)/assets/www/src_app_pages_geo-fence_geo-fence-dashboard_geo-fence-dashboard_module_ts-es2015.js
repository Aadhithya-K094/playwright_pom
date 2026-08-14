(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_geo-fence_geo-fence-dashboard_geo-fence-dashboard_module_ts"],{

/***/ 25749:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/geo-fence/geo-fence-dashboard/geo-fence-dashboard-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoFenceDashboardPageRoutingModule": function() { return /* binding */ GeoFenceDashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _geo_fence_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geo-fence-dashboard.page */ 60127);




const routes = [
    {
        path: '',
        component: _geo_fence_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.GeoFenceDashboardPage
    }
];
let GeoFenceDashboardPageRoutingModule = class GeoFenceDashboardPageRoutingModule {
};
GeoFenceDashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeoFenceDashboardPageRoutingModule);



/***/ }),

/***/ 2399:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/geo-fence/geo-fence-dashboard/geo-fence-dashboard.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoFenceDashboardPageModule": function() { return /* binding */ GeoFenceDashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _geo_fence_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geo-fence-dashboard-routing.module */ 25749);
/* harmony import */ var _geo_fence_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geo-fence-dashboard.page */ 60127);







let GeoFenceDashboardPageModule = class GeoFenceDashboardPageModule {
};
GeoFenceDashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _geo_fence_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeoFenceDashboardPageRoutingModule
        ],
        declarations: [_geo_fence_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.GeoFenceDashboardPage]
    })
], GeoFenceDashboardPageModule);



/***/ }),

/***/ 60127:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/geo-fence/geo-fence-dashboard/geo-fence-dashboard.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeoFenceDashboardPage": function() { return /* binding */ GeoFenceDashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_geo_fence_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./geo-fence-dashboard.page.html */ 25473);
/* harmony import */ var _geo_fence_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geo-fence-dashboard.page.scss */ 96981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);






let GeoFenceDashboardPage = class GeoFenceDashboardPage {
    constructor(router, usersessionService) {
        this.router = router;
        this.usersessionService = usersessionService;
        this.menuList = [];
    }
    ngOnInit() {
        let modVal = this.usersessionService.mod1();
        let allMenu = [
            {
                menu: 'IE Center',
                image: 'assets/icons/geofence/SchLiGeoSmc.svg',
                id: 11,
                url: '/tabs/ie-center-geo-fence'
            },
            {
                menu: 'School List',
                image: 'assets/icons/geofence/SchLiGeoSmc.svg',
                id: 79,
                url: '/tabs/smc-geo-fence'
            },
            {
                menu: 'History',
                image: 'assets/icons/geofence/HistoryGeoSmc.svg',
                id: 79,
                url: '/tabs/smc-geo-fence'
            }
        ];
        debugger;
        this.menuList = allMenu.filter(obj => { return modVal.search(obj.id) != -1; });
    }
    goToPages(item) {
        this.router.navigate([item.url], { queryParams: { title: item.menu }, skipLocationChange: false });
    }
    goToBack() {
        this.router.navigate(['/tabs/home']);
    }
};
GeoFenceDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService }
];
GeoFenceDashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-geo-fence-dashboard',
        template: _raw_loader_geo_fence_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_geo_fence_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GeoFenceDashboardPage);



/***/ }),

/***/ 96981:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/geo-fence/geo-fence-dashboard/geo-fence-dashboard.page.scss ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-grid {\n  height: 100%;\n  padding: 10px !important;\n  padding: 0 !important;\n  background-color: var(--primary-lite-color);\n}\n\nion-row {\n  padding: 0 !important;\n}\n\n.root-card {\n  --background:var(--seconday-color);\n  border-radius: 15px;\n}\n\n.square-containers {\n  padding: 10px !important;\n}\n\n.square-containers .card-menu {\n  min-height: 90px;\n  text-align: center;\n  margin: auto;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  --background: var(--seconday-color);\n}\n\n.square-containers .card-menu .card-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.square-containers .card-menu .card-items .card-value {\n  font-weight: 500;\n  font-size: 12px;\n  letter-spacing: 0.2px;\n  color: #4c4a4a;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlby1mZW5jZS1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usa0NBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDSSx3QkFBQTtBQUxKOztBQU1JO0VBQ0csZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7QUFKUDs7QUFLTztFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSFI7O0FBU1M7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUdBLGNBQUE7RUFDQSxlQUFBO0FBVFYiLCJmaWxlIjoiZ2VvLWZlbmNlLWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRjYXJkLWJhY2tncm91bmQ6I0U2RERFQjtcclxuJGNhcmQtdGV4dDojNjk2OTY5O1xyXG4kYmFja2dyb3VuZDojZmZmO1xyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpdGUtY29sb3IpO1xyXG59XHJcblxyXG5pb24tcm93e1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvb3QtY2FyZHtcclxuICAtLWJhY2tncm91bmQ6dmFyKC0tc2Vjb25kYXktY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5zcXVhcmUtY29udGFpbmVycyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuY2FyZC1tZW51e1xyXG4gICAgICAgbWluLWhlaWdodDogOTBweDtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvcik7XHJcbiAgICAgICAuY2FyZC1pdGVtcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgICAgICAuaW1hZ2V7XHJcbiAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAuY2FyZC12YWx1ZXtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4ycHg7IFxyXG4gICAgICAgICAgLy8gY29sb3I6ICM2OTY5Njk7XHJcbiAgICAgICAgICAvLyBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiAjNGM0YTRhO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 25473:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geo-fence/geo-fence-dashboard/geo-fence-dashboard.page.html ***!
  \*************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Geo Fence</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>  \r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-card class=\"root-card\">\r\n      <ion-grid>\r\n        <ion-row class=\"square-containers\">\r\n          <ion-col size=\"4\" *ngFor=\"let item of menuList\" (click)=\"goToPages(item)\">\r\n            <ion-card class=\"card-menu\">\r\n              <div class=\"card-items \"> \r\n                <img [src]=\"item.image\" class=\"image\"/>\r\n                <span class=\"card-value\">{{item.menu}}</span>\r\n              </div>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-card>\r\n  </ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_geo-fence_geo-fence-dashboard_geo-fence-dashboard_module_ts-es2015.js.map