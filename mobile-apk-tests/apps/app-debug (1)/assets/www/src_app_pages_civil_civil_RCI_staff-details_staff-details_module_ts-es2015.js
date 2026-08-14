(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_civil_civil_RCI_staff-details_staff-details_module_ts"],{

/***/ 29128:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/staff-details/staff-details-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDetailsPageRoutingModule": function() { return /* binding */ StaffDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _staff_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-details.page */ 94918);




const routes = [
    {
        path: '',
        component: _staff_details_page__WEBPACK_IMPORTED_MODULE_0__.StaffDetailsPage
    }
];
let StaffDetailsPageRoutingModule = class StaffDetailsPageRoutingModule {
};
StaffDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StaffDetailsPageRoutingModule);



/***/ }),

/***/ 40542:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/staff-details/staff-details.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDetailsPageModule": function() { return /* binding */ StaffDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _staff_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff-details-routing.module */ 29128);
/* harmony import */ var _staff_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-details.page */ 94918);







let StaffDetailsPageModule = class StaffDetailsPageModule {
};
StaffDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _staff_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.StaffDetailsPageRoutingModule
        ],
        declarations: [_staff_details_page__WEBPACK_IMPORTED_MODULE_1__.StaffDetailsPage]
    })
], StaffDetailsPageModule);



/***/ }),

/***/ 94918:
/*!***************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/staff-details/staff-details.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffDetailsPage": function() { return /* binding */ StaffDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_staff_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./staff-details.page.html */ 3450);
/* harmony import */ var _staff_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staff-details.page.scss */ 48956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let StaffDetailsPage = class StaffDetailsPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.dataArray = [
            { class: "7", id: "589", name: "rishi", gender: "Male", edQualify: "Msc, M.Ed", designation: "Teacher", tetQualified: "Qualified" },
            { class: "8", id: "490", name: "mahi", gender: "Male", edQualify: "Msc, M.Ed", designation: "Teacher", tetQualified: "Qualified" },
            { class: "1", id: "334", name: "mahi", gender: "Male", edQualify: "Msc, M.Ed", designation: "Teacher", tetQualified: "Qualified" },
            { class: "2", id: "245", name: "rishap", gender: "Male", edQualify: "BE", designation: "Teacher", tetQualified: "Qualified" },
            { class: "3", id: "156", name: "mahi", gender: "Male", edQualify: "BA", designation: "Teacher", tetQualified: "Qualified" },
            { class: "4", id: "366", name: "dhoni", gender: "Male", edQualify: "Msc, M.Ed", designation: "Teacher", tetQualified: "Qualified" },
            { class: "5", id: "278", name: "rohit", gender: "Male", edQualify: "Msc, M.Ed", designation: "Teacher", tetQualified: "Qualified" },
            { class: "6", id: "287", name: "rishap", gender: "Male", edQualify: "Msc, M.Ed", designation: "Teacher", tetQualified: "Qualified" },
            { class: "7", id: "298", name: "rishap", gender: "Male3", edQualify: "Msc, M.Ed", designation: "Teacher", tetQualified: "Qualified" },
            { class: "8", id: "209", name: "mahi", gender: "Male", edQualify: "BE", designation: "Teacher", tetQualified: "Qualified" }
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
            queryParams: { status: 4, "uidse": 'this.uidse' }, skipLocationChange: false
        });
    }
};
StaffDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
StaffDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-staff-details',
        template: _raw_loader_staff_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_staff_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StaffDetailsPage);



/***/ }),

/***/ 48956:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/civil/civil/RCI/staff-details/staff-details.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".class1 {\n  color: white;\n  background-color: #ffc107;\n}\n\n.class2 {\n  color: white;\n  color: white;\n  background-color: #d85652;\n}\n\n.class3 {\n  color: white;\n  background-color: #e7f51f;\n}\n\n.class4 {\n  color: white;\n  background-color: #0695b9;\n}\n\n.class5 {\n  color: white;\n  background-color: #063883;\n}\n\n.class6 {\n  color: white;\n  background-color: #493483;\n}\n\n.class7 {\n  color: white;\n  background-color: #e70ddc;\n}\n\n.class8 {\n  color: white;\n  background-color: #3880ff;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 3px;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQWEsWUFBQTtFQUNiLHlCQUFBO0FBR0o7O0FBREE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFBQSxnREFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBWUo7O0FBVkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFhSiIsImZpbGUiOiJzdGFmZi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzczEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcclxufVxyXG4uY2xhc3MyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDg1NjUyO1xyXG59XHJcbi5jbGFzczMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjQ1LCAzMSk7XHJcbn1cclxuLmNsYXNzNCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNiwgMTQ5LCAxODUpO1xyXG59XHJcbi5jbGFzczUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDYsIDU2LCAxMzEpO1xyXG59XHJcbi5jbGFzczYge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDczLCA1MiwgMTMxKTtcclxufVxyXG4uY2xhc3M3IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDEzLCAyMjApO1xyXG59XHJcbi5jbGFzczgge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4ODBmZlxyXG59XHJcbi5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5mb290ZXItc2F2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXHJcbn1cclxuLmZvb3Rlci1ub3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMjMxNTtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmZvb3Rlci12ZXJpZmllZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ4ZjI2O1xyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59Il19 */");

/***/ }),

/***/ 3450:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civil/civil/RCI/staff-details/staff-details.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"goToBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Staff Details</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" *ngFor=\"let data of dataArray\">\r\n        <ion-card style=\"border-bottom: chocolate 1px solid;\">\r\n          <ion-row [ngClass]=\"(data.class == 1) ? 'class1' : (data.class == 2) ? 'class2' : (data.class == 3) ? 'class3' : (data.class == 4) ? 'class4': \r\n          (data.class == 5) ? 'class5': (data.class == 6) ? 'class6': (data.class == 7) ? 'class7' : 'class8'\">\r\n            <ion-col size=\"12\" style=\"text-align: center;\">Staff ID : {{data.id}}</ion-col>\r\n          </ion-row>  \r\n           <ion-row>\r\n            <ion-col size=\"6\">Staff Name : </ion-col>\r\n            <ion-col size=\"6\"> {{data.name}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">Gender : </ion-col>\r\n            <ion-col size=\"6\"> {{data.gender}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">Ed Qualify : </ion-col>\r\n            <ion-col size=\"6\"> {{data.edQualify}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">TET qualified : </ion-col>\r\n            <ion-col size=\"6\"> {{data.tetQualified}}</ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">Designation : </ion-col>\r\n            <ion-col size=\"6\"> {{data.designation}}</ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"footer-verified\" (click)=\"onSave()\">\r\n      <ion-label>Verified</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-not\" (click)=\"onSave()\">\r\n      <ion-label>Incorrect</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"footer-save\" (click)=\"onSave()\">\r\n      <ion-label>Save</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_civil_civil_RCI_staff-details_staff-details_module_ts-es2015.js.map