(self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_cwsn-calendar_cwsn-calendar_module_ts"],{

/***/ 18799:
/*!**************************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-calendar/cwsn-calendar-routing.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnCalendarPageRoutingModule": function() { return /* binding */ CwsnCalendarPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cwsn-calendar.page */ 7414);




const routes = [
    {
        path: '',
        component: _cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_0__.CwsnCalendarPage
    }
];
let CwsnCalendarPageRoutingModule = class CwsnCalendarPageRoutingModule {
};
CwsnCalendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CwsnCalendarPageRoutingModule);



/***/ }),

/***/ 64463:
/*!******************************************************************!*\
  !*** ./src/app/pages/cwsn/cwsn-calendar/cwsn-calendar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CwsnCalendarPageModule": function() { return /* binding */ CwsnCalendarPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 65353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cwsn_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cwsn-calendar-routing.module */ 18799);
/* harmony import */ var _cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cwsn-calendar.page */ 7414);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ion2-calendar */ 18834);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);








let CwsnCalendarPageModule = class CwsnCalendarPageModule {
};
CwsnCalendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cwsn_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnCalendarPageRoutingModule,
            ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule
        ],
        declarations: [_cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CwsnCalendarPage]
    })
], CwsnCalendarPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_cwsn_cwsn-calendar_cwsn-calendar_module_ts-es2015.js.map