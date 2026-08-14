(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_aws-student-details_aws-student-details_module_ts"],{

/***/ 5827:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/awc/aws-student-details/aws-student-details-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsStudentDetailsPageRoutingModule": function() { return /* binding */ AwsStudentDetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aws_student_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aws-student-details.page */ 92547);




const routes = [
    {
        path: '',
        component: _aws_student_details_page__WEBPACK_IMPORTED_MODULE_0__.AwsStudentDetailsPage
    }
];
let AwsStudentDetailsPageRoutingModule = class AwsStudentDetailsPageRoutingModule {
};
AwsStudentDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AwsStudentDetailsPageRoutingModule);



/***/ }),

/***/ 13490:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/awc/aws-student-details/aws-student-details.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsStudentDetailsPageModule": function() { return /* binding */ AwsStudentDetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aws_student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aws-student-details-routing.module */ 5827);
/* harmony import */ var _aws_student_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aws-student-details.page */ 92547);







let AwsStudentDetailsPageModule = class AwsStudentDetailsPageModule {
};
AwsStudentDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _aws_student_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwsStudentDetailsPageRoutingModule
        ],
        declarations: [_aws_student_details_page__WEBPACK_IMPORTED_MODULE_1__.AwsStudentDetailsPage]
    })
], AwsStudentDetailsPageModule);



/***/ }),

/***/ 92547:
/*!***************************************************************************!*\
  !*** ./src/app/pages/awc/aws-student-details/aws-student-details.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsStudentDetailsPage": function() { return /* binding */ AwsStudentDetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_aws_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aws-student-details.page.html */ 15072);
/* harmony import */ var _aws_student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aws-student-details.page.scss */ 6421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);






let AwsStudentDetailsPage = class AwsStudentDetailsPage {
    constructor(router, userService, route) {
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.Childname = '';
    }
    ngOnInit() {
        this.routeData = this.route.snapshot;
        this.IndexId = this.routeData.queryParams.id;
    }
    ionViewWillEnter() {
        this.getStudent();
    }
    getStudent() {
        this.userService.getAwcStdDetails(this.IndexId).subscribe(res => {
        });
    }
    onGoButton() {
        this.router.navigate(['/tabs/awc-student-list']);
    }
};
AwsStudentDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
AwsStudentDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-aws-student-details',
        template: _raw_loader_aws_student_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aws_student_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AwsStudentDetailsPage);



/***/ }),

/***/ 6421:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/awc/aws-student-details/aws-student-details.page.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhd3Mtc3R1ZGVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 15072:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/aws-student-details/aws-student-details.page.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Anganwadi Child List</div>\r\n      <div class=\"ion-text-wrap floatLabel\">\r\n        <!-- <ion-icon class=\"userlabel\" name=\"location-outline\"></ion-icon> -->\r\n        {{Childname}} \r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>  \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_awc_aws-student-details_aws-student-details_module_ts-es2015.js.map