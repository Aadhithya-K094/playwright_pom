(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_inspection-selection_inspection-selection_module_ts"],{

/***/ 70848:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/sids/inspection-selection/inspection-selection-routing.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionSelectionPageRoutingModule": function() { return /* binding */ InspectionSelectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _inspection_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspection-selection.page */ 37338);




const routes = [
    {
        path: '',
        component: _inspection_selection_page__WEBPACK_IMPORTED_MODULE_0__.InspectionSelectionPage
    }
];
let InspectionSelectionPageRoutingModule = class InspectionSelectionPageRoutingModule {
};
InspectionSelectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InspectionSelectionPageRoutingModule);



/***/ }),

/***/ 83571:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sids/inspection-selection/inspection-selection.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionSelectionPageModule": function() { return /* binding */ InspectionSelectionPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _inspection_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspection-selection-routing.module */ 70848);
/* harmony import */ var _inspection_selection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspection-selection.page */ 37338);







let InspectionSelectionPageModule = class InspectionSelectionPageModule {
};
InspectionSelectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inspection_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__.InspectionSelectionPageRoutingModule
        ],
        declarations: [_inspection_selection_page__WEBPACK_IMPORTED_MODULE_1__.InspectionSelectionPage]
    })
], InspectionSelectionPageModule);



/***/ }),

/***/ 37338:
/*!******************************************************************************!*\
  !*** ./src/app/pages/sids/inspection-selection/inspection-selection.page.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectionSelectionPage": function() { return /* binding */ InspectionSelectionPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_inspection_selection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inspection-selection.page.html */ 96463);
/* harmony import */ var _inspection_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspection-selection.page.scss */ 85987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/emis/sids.service */ 35252);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);









let InspectionSelectionPage = class InspectionSelectionPage {
    constructor(fb, userService, router, sidsService, usersessionService) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.sidsService = sidsService;
        this.usersessionService = usersessionService;
        this.isOnline = false;
        this.searchData = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.sessionUserName = this.usersessionService.emis_username();
        this.getSIDSInfo();
    }
    getSIDSInfo() {
        this.allSidsData = [];
        this.sidsService.SecSidsVisitDetails(this.sessionUserName).subscribe((res) => {
            this.allSidsData = res.result;
            this.searchData = this.allSidsData;
            console.log(res.result, "123", this.allSidsData);
        });
    }
    getSearch(event) {
        this.allSidsData = [];
        this.searchTerm = event.detail.value.trim();
        this.allSidsData = this.searchData.filter((item) => {
            return item.SchlName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
    }
    nextPage(id) {
        // this.router.navigate(['/tabs/my-inspection-sids'], { queryParams: { 'Id': id }, skipLocationChange: false });
    }
    onBack() {
        this.router.navigate(['/tabs/dashboard']);
    }
};
InspectionSelectionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_2__.SidsService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService }
];
InspectionSelectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-inspection-selection',
        template: _raw_loader_inspection_selection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inspection_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InspectionSelectionPage);



/***/ }),

/***/ 85987:
/*!********************************************************************************!*\
  !*** ./src/app/pages/sids/inspection-selection/inspection-selection.page.scss ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pt-10 {\n  padding-left: 5px;\n  zoom: 1.3;\n}\n\n.pt-15 {\n  font-size: 18px;\n  padding-left: 2%;\n}\n\n.class-card {\n  padding-top: 25px;\n  padding-bottom: 25px;\n  font-size: 19px;\n  background-color: cadetblue;\n  color: aliceblue;\n  font-weight: bold;\n  height: 280px !important;\n}\n\n.square-container {\n  padding: 10px 5px;\n}\n\n.card-class {\n  text-align: center;\n  margin: auto;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 10px;\n  height: 280px;\n}\n\n.label-class {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n\n.label-classs {\n  font-size: 13px;\n  font-weight: 500;\n  color: black;\n}\n\n.baget {\n  background: #333;\n  font-size: 11px;\n  font-weight: 700;\n  color: #fff;\n  padding: 3px 5px;\n  border-radius: 5px;\n}\n\n.label-section {\n  font-size: 15px;\n  text-align: center;\n  color: #000;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BlY3Rpb24tc2VsZWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUNBO0VBRUMsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUQ7O0FBR0E7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQURBOztBQUlBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZBOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURBOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGIiwiZmlsZSI6Imluc3BlY3Rpb24tc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdC0xMCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgem9vbTogMS4zO1xyXG59XHJcbi5wdC0xNSB7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTsgXHJcbn1cclxuXHJcbi5jbGFzcy1jYXJkIHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgaGVpZ2h0OiAyODBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3F1YXJlLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzoxMHB4IDVweDtcclxufVxyXG5cclxuLmNhcmQtY2xhc3Ncclxue1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gbWFyZ2luOiBhdXRvO1xyXG4gcGFkZGluZy10b3A6IDEwcHg7XHJcbi8vICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gYm9yZGVyLXJhZGl1czogMTBweDtcclxuIGhlaWdodDogMjgwcHg7XHJcbiAvL2JvcmRlcjogMXB4IHJnYigxMzIgMjAgMTM5IC8gNjAlKSBzb2xpZDtcclxufVxyXG4ubGFiZWwtY2xhc3Ncclxue1xyXG5mb250LXNpemU6IDEzcHg7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbmNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICBcclxufVxyXG5cclxuLmxhYmVsLWNsYXNzc1xyXG57XHJcbmZvbnQtc2l6ZTogMTNweDtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuY29sb3I6IGJsYWNrOyAgXHJcbn1cclxuLmJhZ2V0e1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogM3B4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmxhYmVsLXNlY3Rpb25cclxue1xyXG5mb250LXNpemU6IDE1cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6ICMwMDA7XHJcbn1cclxuLnB0LTE1IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJhY2staWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHpvb206Mi4wO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgcGFkZGluZy1pbmxpbmU6IDEwcHg7O1xyXG59XHJcblxyXG4uZ3JpZC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 96463:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/inspection-selection/inspection-selection.page.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"onBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Inspection History</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"square-container\">\r\n      <ion-searchbar (ionChange)=\"getSearch($event)\" cancel-button-icon placeholder=\"Search School\" style=\"padding: 0px;\"></ion-searchbar>\r\n      <ion-col size=\"12\" *ngFor=\"let item of allSidsData\" style=\"background: aliceblue;margin-top: 3%;\">\r\n          <ion-row style = \"background: aliceblue;padding-left: 10px;\" class=\"ion-margin-top ion-margin-bottom\" (click)=\"nextPage(item.udise_code)\">\r\n            \r\n            <!-- <ion-col size=\"10.5\"></ion-col>\r\n            <ion-col size=\"5\">\r\n              <ion-label>\r\n                <p class=\"label-classs\"> Name </p>\r\n              </ion-label> \r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <p class=\"label-class\">{{item.SchlName}}</p> \r\n              </ion-col>\r\n\r\n              <ion-col size=\"5\">\r\n               <ion-label>\r\n                <p class=\"label-classs\"> UDISE</p>\r\n              </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"6\">\r\n                <p class=\"label-class\">{{item.udise_code}}</p>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"5\">\r\n              <ion-label>\r\n                <p class=\"label-classs\"> Date </p>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <p class=\"label-class\">{{item.VisitDate}}</p>\r\n            </ion-col> -->\r\n\r\n            <ion-col size=\"12\">\r\n              <ion-label>\r\n                <p class=\"label-classs\"> Name  : <span class=\"label-class\">{{item.SchlName}} </span></p>\r\n              </ion-label> \r\n               <ion-label>\r\n                <p class=\"label-classs\"> UDISE : <span class=\"label-class\">{{item.udise_code}}</span> </p>\r\n              </ion-label>\r\n              <ion-label>\r\n                <p class=\"label-classs\"> Date  : <span class=\"label-class\">{{item.VisitDate | date: 'dd/MM/yyyy'}}</span> </p>\r\n              </ion-label>\r\n              <ion-label>\r\n                <p class=\"label-classs\"> Status  : <span class=\"label-class baget\" [ngStyle]=\"{'background': item.visit_status == 1 ? '#03a9f4' : item.visit_status == 2 ? '#864c00' : item.visit_status == 4 ? '#23a300' : '#d70000'}\">{{item.visit_status == 1 ? 'In Process' : item.visit_status == 2 ? 'Visit Completed' : item.visit_status == 4 ? 'Accepted' : 'Rejected'}}</span> </p>\r\n              </ion-label>\r\n            </ion-col>\r\n\r\n            <!-- <ion-col size=\"1.5\">\r\n              <img src=\"assets/icons/check.svg\" class=\"floImg\">\r\n            </ion-col> -->\r\n          \r\n          </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n<!-- <ion-footer class=\"footer-clr\" >\r\n  <ion-row (click)=\"nextPage()\">\r\n    <ion-col size=\"12\" class=\"footer-txt\">\r\n      <ion-label>  My Inspection </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sids_inspection-selection_inspection-selection_module_ts-es2015.js.map