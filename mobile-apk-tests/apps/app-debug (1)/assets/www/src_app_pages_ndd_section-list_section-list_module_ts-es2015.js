(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ndd_section-list_section-list_module_ts"],{

/***/ 41471:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ndd/section-list/section-list-routing.module.ts ***!
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
/* harmony import */ var _section_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-list.page */ 14042);




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

/***/ 24338:
/*!***************************************************************!*\
  !*** ./src/app/pages/ndd/section-list/section-list.module.ts ***!
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
/* harmony import */ var _section_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section-list-routing.module */ 41471);
/* harmony import */ var _section_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-list.page */ 14042);







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

/***/ 14042:
/*!*************************************************************!*\
  !*** ./src/app/pages/ndd/section-list/section-list.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionListPage": function() { return /* binding */ SectionListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./section-list.page.html */ 90525);
/* harmony import */ var _section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-list.page.scss */ 92657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/pmoa.services */ 47567);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);







let SectionListPage = class SectionListPage {
    constructor(router, usersessionService, route, pmoaService) {
        this.router = router;
        this.usersessionService = usersessionService;
        this.route = route;
        this.pmoaService = pmoaService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.routeData = this.route.snapshot;
        this.bloack_id = this.routeData.queryParams.id;
        this.schol_id = this.routeData.queryParams.school_id;
        this.schol_name = this.routeData.queryParams.school_name;
        this.class = this.routeData.queryParams.class;
        this.section = this.routeData.queryParams.section;
        this.UserName = this.usersessionService.emis_username();
        this.getstudentlist();
    }
    onGoButton() {
        this.router.navigate(['/tabs/ndd/class-list'], {
            queryParams: { id: this.bloack_id, school_id: this.schol_id, school_name: this.schol_name, class: this.class, section: this.section }
        });
    }
    mainpage(sec) {
        this.router.navigate(['/tabs/ndd/ndd-tablet'], {
            queryParams: { id: this.bloack_id, school_id: this.schol_id, school_name: this.schol_name, class: this.class, section: sec }
        });
    }
    getstudentlist() {
        this.section = [];
        this.pmoaService.studentlist(this.schol_id).subscribe((res) => {
            this.stutlist = res.result;
            var filterList = this.stutlist.filter(y => y.class == this.class);
            this.section = [...new Set(filterList.map(item => item.sections))];
            this.section.sort((a, b) => {
                if (a < b)
                    return -1;
                if (a > b)
                    return 1;
                return 0;
            });
            // this.class= this.stutlist[i].class    
            // this.section= this.stutlist[i].sections    
        });
    }
};
SectionListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_2__.PmoaService }
];
SectionListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-section-list',
        template: _raw_loader_section_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_section_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SectionListPage);



/***/ }),

/***/ 92657:
/*!***************************************************************!*\
  !*** ./src/app/pages/ndd/section-list/section-list.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".classcard {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.classNo {\n  font-size: 14px;\n  color: #767676;\n  font-weight: 500;\n}\n\n.classText {\n  font-size: 15px;\n  font-weight: 600;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3Rpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUdKIiwiZmlsZSI6InNlY3Rpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xhc3NjYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDsgXHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJnYigxMDQsIDgyLCAxNTYpOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNsYXNzTm97XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNsYXNzVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjpibGFja1xyXG59Il19 */");

/***/ }),

/***/ 90525:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ndd/section-list/section-list.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Section</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"maindiv\">\r\n    <div>\r\n      <ion-row>\r\n        <ion-col size=\"4\" *ngFor=\"let sec of section\">\r\n          <ion-card class=\"classcard\" (click)=\"mainpage(sec)\">\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">{{sec}}</ion-label><br>\r\n              <ion-label  class=\"classNo\">Section</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n  \r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ndd_section-list_section-list_module_ts-es2015.js.map