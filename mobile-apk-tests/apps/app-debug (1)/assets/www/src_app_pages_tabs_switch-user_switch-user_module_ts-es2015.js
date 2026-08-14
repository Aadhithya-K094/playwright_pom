(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tabs_switch-user_switch-user_module_ts"],{

/***/ 35480:
/*!**********************************************************************!*\
  !*** ./src/app/pages/tabs/switch-user/switch-user-routing.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchUserPageRoutingModule": function() { return /* binding */ SwitchUserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _switch_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-user.page */ 45148);




const routes = [
    {
        path: '',
        component: _switch_user_page__WEBPACK_IMPORTED_MODULE_0__.SwitchUserPage
    }
];
let SwitchUserPageRoutingModule = class SwitchUserPageRoutingModule {
};
SwitchUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SwitchUserPageRoutingModule);



/***/ }),

/***/ 20879:
/*!**************************************************************!*\
  !*** ./src/app/pages/tabs/switch-user/switch-user.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchUserPageModule": function() { return /* binding */ SwitchUserPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _switch_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-user-routing.module */ 35480);
/* harmony import */ var _switch_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-user.page */ 45148);







let SwitchUserPageModule = class SwitchUserPageModule {
};
SwitchUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _switch_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.SwitchUserPageRoutingModule
        ],
        declarations: [_switch_user_page__WEBPACK_IMPORTED_MODULE_1__.SwitchUserPage]
    })
], SwitchUserPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_switch-user_switch-user_module_ts-es2015.js.map