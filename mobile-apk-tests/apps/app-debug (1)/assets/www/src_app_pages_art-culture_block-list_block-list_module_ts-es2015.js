(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_art-culture_block-list_block-list_module_ts"],{

/***/ 83233:
/*!***************************************************************************!*\
  !*** ./src/app/pages/art-culture/block-list/block-list-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockListPageRoutingModule": function() { return /* binding */ BlockListPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _block_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-list.page */ 25612);




const routes = [
    {
        path: '',
        component: _block_list_page__WEBPACK_IMPORTED_MODULE_0__.BlockListPage
    }
];
let BlockListPageRoutingModule = class BlockListPageRoutingModule {
};
BlockListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BlockListPageRoutingModule);



/***/ }),

/***/ 47777:
/*!*******************************************************************!*\
  !*** ./src/app/pages/art-culture/block-list/block-list.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockListPageModule": function() { return /* binding */ BlockListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _block_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-list-routing.module */ 83233);
/* harmony import */ var _block_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-list.page */ 25612);







let BlockListPageModule = class BlockListPageModule {
};
BlockListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _block_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlockListPageRoutingModule
        ],
        declarations: [_block_list_page__WEBPACK_IMPORTED_MODULE_1__.BlockListPage]
    })
], BlockListPageModule);



/***/ }),

/***/ 25612:
/*!*****************************************************************!*\
  !*** ./src/app/pages/art-culture/block-list/block-list.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockListPage": function() { return /* binding */ BlockListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _raw_loader_block_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./block-list.page.html */ 32440);
/* harmony import */ var _block_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-list.page.scss */ 820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 25970);
/* harmony import */ var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emis/emis.service */ 71660);
/* harmony import */ var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/emis/user.service */ 92275);
/* harmony import */ var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usersession.service */ 64461);









let BlockListPage = class BlockListPage {
    constructor(router, emisService, userService, alertService, userSessionService) {
        this.router = router;
        this.emisService = emisService;
        this.userService = userService;
        this.alertService = alertService;
        this.userSessionService = userSessionService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.teacher_id = this.userSessionService.teacher_id();
        this.distId = this.userSessionService.district_id();
        this.getUserDetails();
    }
    backBtn() {
        this.router.navigate(["/tabs/home"]);
    }
    getUserDetails() {
        this.userService.getOoscUserDetails(this.teacher_id).subscribe(res => {
            console.log("result", res);
            if (res.dataStatus == true) {
                var uerDetails = res.result;
                if (uerDetails.length > 0) {
                    this.getBlockList(this.distId);
                }
                else {
                    this.blocklistActive = false;
                }
            }
            else {
                this.alertService.error("Something went wrong");
            }
        });
    }
    getBlockList(distId) {
        this.emisService.getBlockList(distId).subscribe(res => {
            console.log(res, 'test');
            if (res.dataStatus == true) {
                var block = res.result;
                if (block.length > 0) {
                    this.blockLength = block.length;
                    this.blocklistActive = true;
                    this.blocklist = block.map(l => { return { label: l.block_name, value: l.id }; });
                    this.blocklist.sort((a, b) => {
                        if (a.label < b.label)
                            return -1;
                        if (a.label > b.label)
                            return 1;
                        return 0;
                    });
                    this.blockListCopy = this.blocklist;
                }
                else {
                    this.blocklistActive = false;
                }
            }
            else {
                this.blocklistActive = false;
            }
        });
    }
    getarpenrollment(item) {
        this.router.navigate(["/tabs/art-culture"], { queryParams: { blockId: item.value } });
    }
};
BlockListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService },
    { type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService }
];
BlockListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-block-list',
        template: _raw_loader_block_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_block_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BlockListPage);



/***/ }),

/***/ 820:
/*!*******************************************************************!*\
  !*** ./src/app/pages/art-culture/block-list/block-list.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 32440:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/art-culture/block-list/block-list.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"backBtn()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Block-list</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"blocklistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Blocks</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{blockLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    \r\n\r\n    <div *ngIf=\"blocklistActive\">\r\n      <ion-card *ngFor=\"let item of blocklist; let i = index;\" (click)=\"getarpenrollment(item)\">\r\n        <ion-row style=\"width:100%\">\r\n          <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n            <img src=\"./../../../../../../assets/icons/Block.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n            <ion-label class=\"ion-text-wrap\">{{item.label}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_art-culture_block-list_block-list_module_ts-es2015.js.map