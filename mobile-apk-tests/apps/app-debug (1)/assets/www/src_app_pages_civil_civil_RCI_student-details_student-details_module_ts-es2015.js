(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_student-details_student-details_module_ts"],{

/***/ 611:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/student-details/student-details-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDetailsPageRoutingModule": function() { return /* binding */ StudentDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _student_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-details.page */ 32619);




const routes = [
    {
        path: '',
        component: _student_details_page__WEBPACK_IMPORTED_MODULE_0__.StudentDetailsPage
    }
];
let StudentDetailsPageRoutingModule = class StudentDetailsPageRoutingModule {
};
StudentDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentDetailsPageRoutingModule);



/***/ }),

/***/ 75889:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/student-details/student-details.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDetailsPageModule": function() { return /* binding */ StudentDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-details-routing.module */ 611);
/* harmony import */ var _student_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-details.page */ 32619);







let StudentDetailsPageModule = class StudentDetailsPageModule {
};
StudentDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentDetailsPageRoutingModule
        ],
        declarations: [_student_details_page__WEBPACK_IMPORTED_MODULE_1__.StudentDetailsPage]
    })
], StudentDetailsPageModule);



/***/ }),

/***/ 32619:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/student-details/student-details.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentDetailsPage": function() { return /* binding */ StudentDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./student-details.page.html */ 97779);
/* harmony import */ var _student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-details.page.scss */ 4095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let StudentDetailsPage = class StudentDetailsPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.dataArray = [
            { class: "LKG", totalSec: "5", medium: "english", boys: "4", girls: "4", total: "8" },
            { class: "UKG", totalSec: "4", medium: "english", boys: "6", girls: "4", total: "10" },
            { class: "1", totalSec: "3", medium: "english", boys: "5", girls: "4", total: "9" },
            { class: "2", totalSec: "2", medium: "tamil", boys: "5", girls: "5", total: "10" },
            { class: "3", totalSec: "1", medium: "english", boys: "10", girls: "15", total: "25" },
            { class: "4", totalSec: "3", medium: "english", boys: "3", girls: "7", total: "10" },
            { class: "5", totalSec: "2", medium: "tamil", boys: "3", girls: "4", total: "7" },
            { class: "6", totalSec: "2", medium: "tamil", boys: "3", girls: "4", total: "7" },
            { class: "7", totalSec: "2", medium: "tamil", boys: "3", girls: "4", total: "7" },
            { class: "8", totalSec: "2", medium: "english", boys: "13", girls: "14", total: "37" }
        ];
    }
    ngOnInit() {
    }
    goToBack() {
        this.router.navigate(['/tabs/regulator-section'], {
            queryParams: { status: 1, "uidse": "this.uidse" }, skipLocationChange: false
        });
    }
    onSave() {
        this.router.navigate(['/tabs/regulator-section'], {
            queryParams: { status: 3, "uidse": 'this.uidse' }, skipLocationChange: false
        });
    }
};
StudentDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
StudentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-student-details',
        template: _raw_loader_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentDetailsPage);



/***/ }),

/***/ 4095:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/student-details/student-details.page.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".class1 {\n  color: white;\n  background-color: #ffc107;\n}\n\n.class2 {\n  color: white;\n  color: white;\n  background-color: #d85652;\n}\n\n.class3 {\n  color: white;\n  background-color: #e7f51f;\n}\n\n.class4 {\n  color: white;\n  background-color: #0695b9;\n}\n\n.class5 {\n  color: white;\n  background-color: #063883;\n}\n\n.class6 {\n  color: white;\n  background-color: #493483;\n}\n\n.class7 {\n  color: white;\n  background-color: #e70ddc;\n}\n\n.class8 {\n  color: white;\n  background-color: #3880ff;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 3px;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFBYSxZQUFBO0VBQ2IseUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQU9KOztBQUxBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFTSjs7QUFQQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUFBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWFKIiwiZmlsZSI6InN0dWRlbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3MxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XHJcbn1cclxuLmNsYXNzMiB7XHJcbiAgICBjb2xvcjogd2hpdGU7Y29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NTY1MjtcclxufVxyXG4uY2xhc3MzIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDI0NSwgMzEpO1xyXG59XHJcbi5jbGFzczQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDE0OSwgMTg1KTtcclxufVxyXG4uY2xhc3M1IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA1NiwgMTMxKTtcclxufVxyXG4uY2xhc3M2IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3MywgNTIsIDEzMSk7XHJcbn1cclxuLmNsYXNzNyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxMywgMjIwKTtcclxufVxyXG4uY2xhc3M4IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODgwZmZcclxufVxyXG4uYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4uZm9vdGVyLXNhdmUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICAgIFxyXG59XHJcbi5mb290ZXItbm90IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcbi5mb290ZXItdmVyaWZpZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSJdfQ== */");

/***/ }),

/***/ 97779:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/student-details/student-details.page.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"goToBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Student Strength Details </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngFor=\"let data of dataArray\">\r\n        <ion-card style=\"border-bottom: chocolate 1px solid;\">\r\n          <ion-row [ngClass]=\"(data.class == 1) ? 'class1' : (data.class == 2) ? 'class2' : (data.class == 3) ? 'class3' : (data.class == 4) ? 'class4': \r\n          (data.class == 5) ? 'class5': (data.class == 6) ? 'class6': (data.class == 7) ? 'class7' : 'class8'\">\r\n            <ion-col size=\"12\" style=\"text-align: center;\">Class : {{data.class}}</ion-col>\r\n          </ion-row>  \r\n           <ion-row>\r\n            <ion-col size=\"6\">Medium : </ion-col>\r\n            <ion-col size=\"6\"> {{data.medium}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">No. of Sections : </ion-col>\r\n            <ion-col size=\"6\"> {{data.totalSec}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">Boys : </ion-col>\r\n            <ion-col size=\"6\"> {{data.boys}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">Girls : </ion-col>\r\n            <ion-col size=\"6\"> {{data.girls}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">Total : </ion-col>\r\n            <ion-col size=\"6\"> {{data.total}}</ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"footer-verified\" (click)=\"onSave()\">\r\n      <ion-label>Verified</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-not\" (click)=\"onSave()\">\r\n      <ion-label>Incorrect</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-save\" (click)=\"onSave()\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_civil_civil_RCI_student-details_student-details_module_ts-es2015.js.map