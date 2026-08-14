(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_art-culture_module_ts"],{

/***/ 60467:
/*!*****************************************************************!*\
  !*** ./src/app/pages/art-culture/art-culture-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtCulturePageRoutingModule": function() { return /* binding */ ArtCulturePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _art_culture_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./art-culture.page */ 80214);




const routes = [
    {
        path: '',
        component: _art_culture_page__WEBPACK_IMPORTED_MODULE_0__.ArtCulturePage
    },
    {
        path: 'my-arps',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_art-culture_my-arps_my-arps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-arps/my-arps.module */ 45953)).then(m => m.MyArpsPageModule)
    },
];
let ArtCulturePageRoutingModule = class ArtCulturePageRoutingModule {
};
ArtCulturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ArtCulturePageRoutingModule);



/***/ }),

/***/ 15227:
/*!*********************************************************!*\
  !*** ./src/app/pages/art-culture/art-culture.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtCulturePageModule": function() { return /* binding */ ArtCulturePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _art_culture_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./art-culture-routing.module */ 60467);
/* harmony import */ var _art_culture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./art-culture.page */ 80214);







let ArtCulturePageModule = class ArtCulturePageModule {
};
ArtCulturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _art_culture_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArtCulturePageRoutingModule
        ],
        declarations: [_art_culture_page__WEBPACK_IMPORTED_MODULE_1__.ArtCulturePage]
    })
], ArtCulturePageModule);



/***/ }),

/***/ 80214:
/*!*******************************************************!*\
  !*** ./src/app/pages/art-culture/art-culture.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtCulturePage": function() { return /* binding */ ArtCulturePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_art_culture_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./art-culture.page.html */ 81601);
/* harmony import */ var _art_culture_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./art-culture.page.scss */ 60589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);






let ArtCulturePage = class ArtCulturePage {
    constructor(router, route, userSessionService) {
        // this.route.queryParams.subscribe((blockId) => {
        this.router = router;
        this.route = route;
        this.userSessionService = userSessionService;
        //   this.blockId =  blockId['blockId']
        // })
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.type_teacher = this.userSessionService.type_teacher();
        this.emis_usertype = this.userSessionService.emis_usertype();
    }
    showverificaton() {
        this.router.navigate(["/tabs/arpenrollmentverification"]);
    }
    showverificaton2() {
        this.router.navigate(["/tabs/my-schools"], { queryParams: { blockId: this.blockId } });
    }
    showverificaton3() {
        this.router.navigate(["/tabs/ka-session-verification"], { queryParams: { blockId: this.blockId } });
    }
    showverificaton5() {
        this.router.navigate(["/tabs/unverified-arps"], { queryParams: { blockId: this.blockId } });
    }
    coursematerial() {
        this.router.navigate(["/tabs/course-materials"]);
    }
    myarps() {
        this.router.navigate(["/tabs/my-arps"]);
    }
    goBack() {
        this.router.navigate(["/tabs/home"]);
    }
};
ArtCulturePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService }
];
ArtCulturePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-art-culture',
        template: _raw_loader_art_culture_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_art_culture_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ArtCulturePage);



/***/ }),

/***/ 60589:
/*!*********************************************************!*\
  !*** ./src/app/pages/art-culture/art-culture.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".color {\n  background-color: #81C46A;\n}\n\n.style {\n  color: #182D80;\n  margin-left: 32px;\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.color1 {\n  background-color: #917AFE;\n}\n\n.class2 {\n  background-color: #BDAD1C;\n}\n\n.class3 {\n  background-color: #F1624A;\n}\n\n.Div_base {\n  padding-top: 20px;\n  margin: 20px;\n  justify-content: space-between;\n  margin-top: 1px;\n}\n\n.Div_firstbox {\n  padding: 14px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n  border: 3px solid #81C46A;\n  height: 70%;\n}\n\n.Div_font {\n  font-weight: bold;\n  font-size: 13px;\n  color: #182D80;\n}\n\n.Div_size {\n  align-self: end;\n  color: azure;\n  font-size: 15px;\n  padding: 5px;\n}\n\n.Div_sizechart {\n  text-align: center;\n  color: white;\n  align-self: center;\n  font-size: 20px;\n}\n\n.Div_scend {\n  padding: 14px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n  border: 3px solid #917AFE;\n  height: 70%;\n}\n\n.Div_base2 {\n  margin: 20px;\n  justify-content: space-between;\n}\n\n.Div_third {\n  padding: 14px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n  border: 3px solid #BDAD1C;\n  height: 70%;\n}\n\n.Div_thirdbox {\n  font-weight: bold;\n  font-size: 13px;\n  color: #182D80;\n}\n\n.Div_extrabox {\n  font-size: 13px;\n  color: #182D80;\n  font-weight: 6 0;\n}\n\n.Div_fourth {\n  padding: 14px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n  border: 3px solid #F1624A;\n  height: 70%;\n}\n\n.Div_fifth {\n  padding: 14px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  text-align: center;\n  border: 3px solid #dc6ecf;\n  height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1jdWx0dXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLHlCQUFBO0FBRko7O0FBS0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGTjs7QUFJSTtFQUNBLHlCQUFBO0FBREo7O0FBSUk7RUFDQSx5QkFBQTtBQURKOztBQUdJO0VBQ0EseUJBQUE7QUFBSjs7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUNJO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUVOOztBQUFJO0VBQ0UsaUJBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUdWOztBQURJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFBYSxlQUFBO0VBQ2IsWUFBQTtBQUtOOztBQUhJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTU47O0FBSkk7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBT047O0FBTEU7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7QUFRSjs7QUFORTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFQRTtFQUNFLGlCQUFBO0VBQ00sZUFBQTtFQUNBLGNBQUE7QUFVVjs7QUFSRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFQRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFVSjs7QUFSRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFXSiIsImZpbGUiOiJhcnQtY3VsdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgXHJcbiAgLmNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxQzQ2QTtcclxuICBcclxuICB9XHJcbiAgICAuc3R5bGV7XHJcbiAgICAgIGNvbG9yOiAjMTgyRDgwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5jb2xvcjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE3QUZFO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLmNsYXNzMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCREFEMUM7XHJcbiAgICB9XHJcbiAgICAuY2xhc3Mze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxNjI0QTtcclxuICAgIH1cclxuICAgIC5EaXZfYmFzZXtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICB9XHJcbiAgICAuRGl2X2ZpcnN0Ym94e1xyXG4gICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyOjNweCBzb2xpZCAjODFDNDZBO1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuICAgIC5EaXZfZm9udHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzE4MkQ4MDtcclxuICAgIH1cclxuICAgIC5EaXZfc2l6ZXtcclxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICBjb2xvcjogYXp1cmU7Zm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nOjVweDtcclxuICAgIH1cclxuICAgIC5EaXZfc2l6ZWNoYXJ0e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuRGl2X3NjZW5ke1xyXG4gICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyOjNweCBzb2xpZCAjOTE3QUZFO1xyXG4gICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuICAuRGl2X2Jhc2Uye1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuRGl2X3RoaXJke1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6M3B4IHNvbGlkICNCREFEMUM7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICB9XHJcbiAgLkRpdl90aGlyZGJveHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgY29sb3I6ICMxODJEODA7XHJcbiAgfVxyXG4gIC5EaXZfZXh0cmFib3h7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MkQ4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2XHJcbiAgICBcclxuICAgIDAwO1xyXG4gIH1cclxuICAuRGl2X2ZvdXJ0aHtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOjNweCBzb2xpZCAjRjE2MjRBO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG4gIC5EaXZfZmlmdGh7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNkYzZlY2Y7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyNCU7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDI5JTtcclxuICB9XHJcbiAgLy8gLkRpdl9jb2xvcntcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNkYzZlY2Y7XHJcbiAgLy8gICAgICAgbWFyZ2luLWxlZnQ6IDI0JTtcclxuICAvLyAgICAgICBtYXJnaW4tcmlnaHQ6IDI5JTtcclxuICAvLyB9XHJcbiAgLy8gLmltZ2RhdGF7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FydCZjdWx0dXJlL0dyb3VwIDM3ODcxLnN2Z1wiKTtcclxuICAvLyB9XHJcbiAgIl19 */");

/***/ }),

/***/ 81601:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/art-culture.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\" class=\"pt-10\">\r\n        <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n        </ion-icon>\r\n      </ion-buttons>\r\n      <ion-title class=\"pt-15\">Art and Culture</ion-title>\r\n    </ion-toolbar>\r\n    \r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <div style=\"background-image: url('../../../../../assets/images/art&culture/Group 37871.svg'); height: 88vh; background-repeat: no-repeat; background-attachment: fixed;\r\n\r\n  border: 1px solid #F0F0F0; background-position: bottom; \">\r\n    <!-- <ion-col size=\"12\">\r\n      <div style=\"align-self: center;margin: 20px;\">\r\n        <img src=\"../../../../../assets/images/art&culture/Group 37871.svg\" width=\"870\" height=\"100\"><br>\r\n      </div>\r\n    </ion-col> -->\r\n     <ion-row class=\"Div_base\">\r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '39'\">\r\n        <div  class=\"Div_firstbox\">\r\n          <ion-label class=\"Div_font\">My ARPS</ion-label>\r\n        </div>\r\n        <ion-row style=\"background-color: #81C46A;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"myarps()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n  \r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '39'\">\r\n        <div class=\"Div_scend\">\r\n          <ion-label class=\"Div_font\">My Schools</ion-label>\r\n        </div>\r\n        <ion-row style=\"background-color: #917AFE;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"showverificaton2()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n   \r\n    <ion-row class=\"Div_base2\" >\r\n    \r\n      \r\n\r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '55'\">\r\n        <div class=\"Div_third\">\r\n          <ion-label class=\"Div_thirdbox\">Today's </ion-label><br><span class=\"Div_extrabox\"><b>Session</b></span>\r\n        </div>\r\n        <ion-row style=\"background-color: #BDAD1C;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"showverificaton3()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '55'\">\r\n        <div class=\"Div_scend\">\r\n          <ion-label class=\"Div_thirdbox\">My Schools </ion-label></div>\r\n        <ion-row style=\"background-color: #917AFE;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"showverificaton2()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '55'\">\r\n        <div class=\"Div_fifth\">\r\n          <ion-label class=\"Div_font\"> Course Materials</ion-label>\r\n        </div>\r\n        <ion-row style=\"background-color: #dc6ecf;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"coursematerial()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n      \r\n  \r\n    \r\n    \r\n  \r\n    <ion-row class=\"Div_base2\">\r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '39'\">\r\n        <div class=\"Div_third\">\r\n          <ion-label class=\"Div_thirdbox\">Session </ion-label><br><span class=\"Div_extrabox\"><b>verification</b></span>\r\n        </div>\r\n        <ion-row style=\"background-color: #BDAD1C;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"showverificaton3()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '39'\">\r\n        <div class=\"Div_fourth\">\r\n          <ion-label class=\"Div_font\">ARP Enrollment verification</ion-label>\r\n        </div>\r\n        <ion-row style=\"background-color: #F1624A;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"showverificaton()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"Div_base\" >\r\n      <ion-col size=\"6\" *ngIf=\"emis_usertype == '39'\">\r\n        <div class=\"Div_fifth\">\r\n          <ion-label class=\"Div_font\">Unverified ARPS</ion-label>\r\n        </div>\r\n        <ion-row style=\" background-color: #dc6ecf;\">\r\n          <ion-col size=\"8\">\r\n            <div class=\"Div_size\">See more\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"Div_sizechart\">\r\n            <div>\r\n              <ion-icon name='arrow-forward-circle' (click)=\"showverificaton5()\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n    <ion-row class=\"Div_base2\" >\r\n      <!-- <ion-col size=\"12\">\r\n      <div style=\"align-self: center;margin: 20px;background-color: #1B85FF;\">\r\n        <img src=\"../../../../../assets/images/art&culture/latest.svg\"><br>\r\n      </div>\r\n    </ion-col> -->\r\n    </ion-row>\r\n    </div>\r\n   \r\n  </ion-content>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_art-culture_module_ts-es2015.js.map