(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_dashboard_dashboard_module_ts"],{

/***/ 88701:
/*!**********************************************************!*\
  !*** ./src/app/pages/tnvn/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 31192);







const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 31192:
/*!********************************************************!*\
  !*** ./src/app/pages/tnvn/dashboard/dashboard.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 24914);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 42674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let DashboardPage = class DashboardPage {
    constructor(plt) {
        this.plt = plt;
        this.slidImages = [{
                id: 1,
                image: '../../assets/pencil.jpg'
            },
            {
                id: 2,
                image: '../../assets/pencil.jpg'
            },
            {
                id: 3,
                image: '../../assets/pencil.jpg'
            }];
        this.slideOptions = {
            initialSlide: 0,
            speed: 400,
        };
    }
    ngOnInit() {
    }
    ionViewWillLeave() {
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 42674:
/*!**********************************************************!*\
  !*** ./src/app/pages/tnvn/dashboard/dashboard.page.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #3880ff;\n  --color: #fff;\n}\n\nion-card-content {\n  font-size: 12px;\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-top: 13px;\n}\n\nion-card {\n  background-color: #fff;\n  height: 120px;\n  width: 106px;\n  border-radius: 10px;\n}\n\n.ion-contentbg {\n  --background: #eeeeee91;\n}\n\nion-grid {\n  padding: 0px !important;\n}\n\nion-col {\n  padding: 0px !important;\n}\n\nion-icon {\n  font-size: 30px;\n  color: #397efc;\n}\n\nion-card-content {\n  color: #397efc;\n}\n\nimg {\n  --background-repeat: no-repeat;\n  --background-size: contain;\n  --background-position: center;\n  height: 149px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFRQSxtQkFBQTtBQUpKOztBQU1BO0VBQ0ksdUJBQUE7QUFISjs7QUFLQTtFQUNJLHVCQUFBO0FBRko7O0FBSUE7RUFDSSx1QkFBQTtBQURKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUVRLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNFLGFBQUE7QUFDViIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoxM3B4O1xyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHdpZHRoOiAxMDZweDtcclxuICAgIC8vIHBhZGRpbmc6IDdweCAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgLy8gd2lkdGg6IDk1cHg7ICBcclxuICAgIC8vIHdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweDsgXHJcbiAgICAvLyBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7IFxyXG4gICAgLy8gbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIC8vIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaW9uLWNvbnRlbnRiZ3tcclxuICAgIC0tYmFja2dyb3VuZDogI2VlZWVlZTkxO1xyXG59XHJcbmlvbi1ncmlke1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWNvbHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzOTdlZmM7XHJcbn1cclxuaW9uLWNhcmQtY29udGVudHtcclxuICAgIGNvbG9yOiAjMzk3ZWZjO1xyXG59XHJcbmltZ3tcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKFwiLi4vLi4vYXNzZXRzL2xvZ2luLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAtLWJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogMTQ5cHg7XHJcbiAgICAgfVxyXG4iXX0= */");

/***/ }),

/***/ 24914:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/dashboard/dashboard.page.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-contentbg\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n          <ion-slides #IonSlides pager=\"true\" [options]=\"options\" (ionSlidesDidLoad)=\"slidesDidLoad(IonSlides)\">\r\n              <ion-slide>\r\n                 <ion-img src=\"../../assets/img/studying.png\"></ion-img>\r\n                </ion-slide>          \r\n              <ion-slide>\r\n                  <ion-img src=\"../../assets/img/stuparent.png\"></ion-img>\r\n              </ion-slide>\r\n              <ion-slide>\r\n                  <ion-img src=\"../../assets/img/Teacher.png\"></ion-img>\r\n              </ion-slide>\r\n          </ion-slides>          \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n          <ion-card routerLink=\"/tnvntabs/page-route/observation-list\" routerDirection=\"forward\">\r\n              <ion-card-header style=\"text-align:center;\">                \r\n                <ion-card-title> <ion-icon name=\"eye\"></ion-icon></ion-card-title>\r\n              </ion-card-header>  \r\n              <ion-card-content style=\"text-align:center;\">\r\n                  OBSERVATIONS\r\n              </ion-card-content>\r\n            </ion-card>\r\n      </ion-col>       \r\n    </ion-row> \r\n</ion-grid>  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tnvn_dashboard_dashboard_module_ts-es2015.js.map