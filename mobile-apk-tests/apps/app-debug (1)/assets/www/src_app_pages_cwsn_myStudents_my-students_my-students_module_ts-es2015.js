(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_myStudents_my-students_my-students_module_ts"],{

/***/ 90705:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/cwsn/myStudents/my-students/my-students-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyStudentsPageRoutingModule": function() { return /* binding */ MyStudentsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _my_students_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-students.page */ 86292);




const routes = [
    {
        path: '',
        component: _my_students_page__WEBPACK_IMPORTED_MODULE_0__.MyStudentsPage
    }
];
let MyStudentsPageRoutingModule = class MyStudentsPageRoutingModule {
};
MyStudentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyStudentsPageRoutingModule);



/***/ }),

/***/ 28658:
/*!*************************************************************************!*\
  !*** ./src/app/pages/cwsn/myStudents/my-students/my-students.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyStudentsPageModule": function() { return /* binding */ MyStudentsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _my_students_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-students-routing.module */ 90705);
/* harmony import */ var _my_students_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-students.page */ 86292);







let MyStudentsPageModule = class MyStudentsPageModule {
};
MyStudentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_students_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyStudentsPageRoutingModule
        ],
        declarations: [_my_students_page__WEBPACK_IMPORTED_MODULE_1__.MyStudentsPage]
    })
], MyStudentsPageModule);



/***/ }),

/***/ 86292:
/*!***********************************************************************!*\
  !*** ./src/app/pages/cwsn/myStudents/my-students/my-students.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyStudentsPage": function() { return /* binding */ MyStudentsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_my_students_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./my-students.page.html */ 23894);
/* harmony import */ var _my_students_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-students.page.scss */ 77311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let MyStudentsPage = class MyStudentsPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.clustoers = [
            { ClusterNme: 'Jaigopal garodia government girls higher secondary school, saidapet' },
            { ClusterNme: 'GHSS Mgr Nagar' },
            { ClusterNme: 'GHSS Velachery' },
            { ClusterNme: 'Chennai girls Hr.Sec.School - Nungambakkam' },
        ];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            this.title = data.title;
        });
    }
    onSchool(item) {
        console.log();
        this.router.navigate(['/tabs/cwsn/my-students/school-list']);
    }
    goBack() {
        this.router.navigate(['/tabs/cwsn/dashboard']);
    }
};
MyStudentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
MyStudentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-students',
        template: _raw_loader_my_students_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_my_students_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyStudentsPage);



/***/ }),

/***/ 77311:
/*!*************************************************************************!*\
  !*** ./src/app/pages/cwsn/myStudents/my-students/my-students.page.scss ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-align {\n  border-radius: 10px;\n  margin: 20px;\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: #fff;\n}\n\n.card-align .cards {\n  padding: 10px;\n}\n\n.card-align .cards .cluster-design {\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n  border-left: 8px solid #b14fdc;\n  border-radius: 15px;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 25px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background: #b14fdc;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXN0dWRlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBRUEsWUFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBS0U7RUFDRSxhQUFBO0FBRko7O0FBR0k7RUFDRSx1Q0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUROOztBQUdNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQURSOztBQUVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQVY7O0FBR007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFI7O0FBRVE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQVYiLCJmaWxlIjoibXktc3R1ZGVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWNhcmQtbGF5b3V0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWdue1xyXG4gIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gIC5jYXJkc3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAuY2x1c3Rlci1kZXNpZ257XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNiMTRmZGM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgLy8gbWFyZ2luOiAxNnB4O1xyXG4gICAgICAuY2x1c3Rlci10ZXh0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuaWNvbi1vdXRlcntcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2IxNGZkYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgLmljb24taW5uZXJ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ 23894:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/myStudents/my-students/my-students.page.html ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align\">\r\n    <div class=\"cards\">\r\n      <ng-container *ngFor=\"let item of clustoers\">\r\n          <ion-card class=\"cluster-design\" (click)=\"onSchool(item)\">\r\n          <div class=\"cluster-text\">\r\n           <span>{{ item.ClusterNme }}</span>\r\n           <div class=\"icon-outer\">\r\n            <ion-icon class=\"icon-inner\" name=\"arrow-forward-outline\"></ion-icon>\r\n           </div>\r\n          </div>\r\n        </ion-card>\r\n      </ng-container>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_myStudents_my-students_my-students_module_ts-es2015.js.map