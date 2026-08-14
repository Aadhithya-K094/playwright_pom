(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ndd_class-list_class-list_module_ts"],{

/***/ 37298:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ndd/class-list/class-list-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPageRoutingModule": function() { return /* binding */ ClassListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _class_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list.page */ 72901);




const routes = [
    {
        path: '',
        component: _class_list_page__WEBPACK_IMPORTED_MODULE_0__.ClassListPage
    }
];
let ClassListPageRoutingModule = class ClassListPageRoutingModule {
};
ClassListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClassListPageRoutingModule);



/***/ }),

/***/ 76435:
/*!***********************************************************!*\
  !*** ./src/app/pages/ndd/class-list/class-list.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPageModule": function() { return /* binding */ ClassListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-list-routing.module */ 37298);
/* harmony import */ var _class_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list.page */ 72901);







let ClassListPageModule = class ClassListPageModule {
};
ClassListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClassListPageRoutingModule
        ],
        declarations: [_class_list_page__WEBPACK_IMPORTED_MODULE_1__.ClassListPage]
    })
], ClassListPageModule);



/***/ }),

/***/ 72901:
/*!*********************************************************!*\
  !*** ./src/app/pages/ndd/class-list/class-list.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassListPage": function() { return /* binding */ ClassListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./class-list.page.html */ 38024);
/* harmony import */ var _class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-list.page.scss */ 84498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/pmoa.services */ 47567);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);







let ClassListPage = class ClassListPage {
    constructor(router, usersessionService, pmoaService, route) {
        this.router = router;
        this.usersessionService = usersessionService;
        this.pmoaService = pmoaService;
        this.route = route;
        this.class = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.routeData = this.route.snapshot;
        this.bloack_id = this.routeData.queryParams.id;
        this.schol_id = this.routeData.queryParams.school_id;
        this.schol_name = this.routeData.queryParams.school_name;
        this.UserName = this.usersessionService.emis_username();
        this.getapi();
        this.getstudentlist();
    }
    onGoButton() {
        this.router.navigate(['/tabs/ndd/school-list'], {
            queryParams: { id: this.bloack_id, school_id: this.schol_id, school_name: this.schol_name }
        });
    }
    sectionSelected(cls) {
        this.router.navigate(['/tabs/ndd/section-list'], {
            queryParams: { id: this.bloack_id, school_id: this.schol_id, school_name: this.schol_name, class: cls, section: this.section }
        });
    }
    getapi() {
        this.pmoaService.getcount(this.schol_id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.schoolcount = res.result;
            this.count = this.schoolcount.TotStuCount[0].Count;
            this.RcvdSchoolCount = this.schoolcount.TotTbltRcvdCount[0].Count;
            this.NotRcvdSchlCount = this.schoolcount.TotTbltNotRcvdCount[0].Count;
        }));
    }
    getstudentlist() {
        this.class = [];
        this.section = [];
        this.pmoaService.studentlist(this.schol_id).subscribe((res) => {
            this.stutlist = res.result;
            this.class = [...new Set(this.stutlist.map(item => item.class))];
            this.class.sort((a, b) => a - b);
            this.section = [...new Set(this.stutlist.map(item => item.sections))];
            // this.class= this.stutlist[i].class    
            // this.section= this.stutlist[i].sections    
        });
    }
};
ClassListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__.PmoaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ClassListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-class-list',
        template: _raw_loader_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClassListPage);



/***/ }),

/***/ 84498:
/*!***********************************************************!*\
  !*** ./src/app/pages/ndd/class-list/class-list.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".classcard {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.classText {\n  font-size: 15px;\n  font-weight: 600;\n  color: black;\n}\n\n.classNo {\n  font-size: 14px;\n  color: #767676;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHSiIsImZpbGUiOiJjbGFzcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGFzc2NhcmR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiKDEwNCwgODIsIDE1Nik7IFxyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2xhc3NUZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuLmNsYXNzTm97XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iXX0= */");

/***/ }),

/***/ 38024:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ndd/class-list/class-list.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Class List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-content class=\"graybackgrond\">\r\n    <div>\r\n      <!-- *ngFor=\"let item of StudentsCounts\" -->\r\n      <ion-row\r\n        style=\"background-color: white;border-left: 8px solid #D9688B;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{count}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Total Students </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <img src=\"../../../../../assets/icons/Total_Students.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row\r\n        style=\"background-color: white;border-left: 8px solid #E9A069;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{RcvdSchoolCount}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Received </ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n            <!-- <img src=\"../../../../../assets/icons/Screened_Students.svg\"> -->\r\n            <img src=\"../../../../../assets/icons/Received1.svg\">\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row\r\n        style=\"background-color: white;border-left: 8px solid #439DE3;margin: 20px;border-radius: 18px;\">\r\n        <ion-col size=\"10\">\r\n          <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{NotRcvdSchlCount}}</ion-label><br>\r\n          <ion-label style=\"padding-left: 20px;\">Not Received</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\">\r\n          <div>\r\n          <img src=\"../../../../../assets/icons/Not_Received1.svg\">\r\n            <!-- <img src=\"../../../../../assets/icons/Unscreened_Students.svg\"> -->\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n    </div>\r\n\r\n    <div class=\"maindiv\">\r\n    <div>\r\n      <ion-row>\r\n        <ion-col size=\"4\"  *ngFor=\"let cla of class\">\r\n          <ion-card class=\"classcard\" (click)=\"sectionSelected(cla)\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">{{  cla == '1' ? 'I' : cla == '2' ? 'II' : cla == '3' ? 'III' :cla == '4' ? 'VI' : cla == '5' ? 'V' : cla == '6' ? 'VI' : cla == '7' ? 'VII' : cla == '8' ? 'VIII' : cla == '9' ? 'IX' : cla == '10' ? 'X' : cla == '11' ? 'XI' : cla == '12' ? 'XII' : ''}}</ion-label><br>\r\n              <ion-label  class=\"classNo\">Std</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ndd_class-list_class-list_module_ts-es2015.js.map