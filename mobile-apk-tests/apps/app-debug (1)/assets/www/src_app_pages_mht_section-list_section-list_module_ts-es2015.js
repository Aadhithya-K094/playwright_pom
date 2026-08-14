(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_section-list_section-list_module_ts"],{

/***/ 73418:
/*!***********************************************************************!*\
  !*** ./src/app/pages/mht/section-list/section-list-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionListPageRoutingModule": function() { return /* binding */ SectionListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _section_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-list.page */ 85866);




const routes = [
    {
        path: '',
        component: _section_list_page__WEBPACK_IMPORTED_MODULE_0__.SectionListPage
    }
];
let SectionListPageRoutingModule = class SectionListPageRoutingModule {
};
SectionListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SectionListPageRoutingModule);



/***/ }),

/***/ 20538:
/*!***************************************************************!*\
  !*** ./src/app/pages/mht/section-list/section-list.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionListPageModule": function() { return /* binding */ SectionListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _section_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-list-routing.module */ 73418);
/* harmony import */ var _section_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-list.page */ 85866);







let SectionListPageModule = class SectionListPageModule {
};
SectionListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _section_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SectionListPageRoutingModule
        ],
        declarations: [_section_list_page__WEBPACK_IMPORTED_MODULE_1__.SectionListPage]
    })
], SectionListPageModule);



/***/ }),

/***/ 85866:
/*!*************************************************************!*\
  !*** ./src/app/pages/mht/section-list/section-list.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionListPage": function() { return /* binding */ SectionListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./section-list.page.html */ 22860);
/* harmony import */ var _section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-list.page.scss */ 1929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let SectionListPage = class SectionListPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onGoButton() {
        this.router.navigate(['/tabs/class-section']);
    }
    navigateToClass() {
        this.router.navigate(['/tabs/class-student-list']);
    }
};
SectionListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SectionListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-section-list',
        template: _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SectionListPage);



/***/ }),

/***/ 1929:
/*!***************************************************************!*\
  !*** ./src/app/pages/mht/section-list/section-list.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".maindiv {\n  margin: 20px;\n  padding: 15px;\n  background-color: white;\n  border-radius: 15px;\n}\n\n.blockLabel {\n  font-weight: 600;\n  font-size: 18px;\n  margin-left: 8px;\n}\n\n.dropDown {\n  border: 1px solid grey;\n  padding-right: 10px;\n  font-size: 15px;\n  margin-top: 10px;\n  margin-left: 8px;\n  margin-right: 8px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.cardTotal {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #68529c;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.cardtotal2 {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #3975c4;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.cardTotal3 {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #be4eb9;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.totalNo {\n  font-size: 20px;\n  color: #68529c;\n  font-weight: 500;\n}\n\n.totalText {\n  font-size: 16px;\n  color: black;\n}\n\n.col {\n  align-self: center;\n}\n\n.classNo {\n  font-size: 18px;\n  color: #68529c;\n  font-weight: 600;\n}\n\n.classcard {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.classText {\n  font-size: 14px;\n  color: black;\n}\n\n.schName {\n  font-size: 16px;\n  color: #68529c;\n  font-weight: 500;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  border-radius: 25px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.1rem;\n  font-weight: 400;\n  color: #7f8490;\n  background-color: white;\n  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1) !important;\n}\n\n.labelClass {\n  width: 95%;\n  padding: 6px;\n  padding-left: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFRSjs7QUFOQTtFQUNJLGtCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVdKOztBQVRBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFZSjs7QUFWQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUVBLG9EQUFBO0FBY0o7O0FBWkU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFlSiIsImZpbGUiOiJzZWN0aW9uLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5kaXZ7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5ibG9ja0xhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbi5kcm9wRG93bntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkVG90YWx7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmNhcmR0b3RhbDJ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYig1NywgMTE3LCAxOTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmNhcmRUb3RhbDN7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHJnYigxOTAsIDc4LCAxODUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRvdGFsTm97XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjpyZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRvdGFsVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuLmNvbHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uY2xhc3NOb3tcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNjg1MjljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uY2xhc3NjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgXHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYigxMDQsIDgyLCAxNTYpOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNsYXNzVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuLnNjaE5hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjpyZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDhweCBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzdmODQ5MDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxhYmVsQ2xhc3N7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 22860:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/section-list/section-list.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Section List</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <div class=\"maindiv\">\r\n\r\n  \r\n    <div>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-card class=\"classcard\" (click)=\"navigateToClass()\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">Section</ion-label><br>\r\n              <ion-label class=\"classNo\">A</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-card class=\"classcard\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">Section</ion-label><br>\r\n              <ion-label class=\"classNo\">B</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-card class=\"classcard\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">Section</ion-label><br>\r\n              <ion-label class=\"classNo\">C</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <!-- <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-card class=\"classcard\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">Class</ion-label><br>\r\n              <ion-label class=\"classNo\">5 Std</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-card class=\"classcard\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">Class</ion-label><br>\r\n              <ion-label class=\"classNo\">6 Std</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-card class=\"classcard\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">Class</ion-label><br>\r\n              <ion-label class=\"classNo\">7 Std</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row> -->\r\n    </div>\r\n  </div>\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mht_section-list_section-list_module_ts-es2015.js.map