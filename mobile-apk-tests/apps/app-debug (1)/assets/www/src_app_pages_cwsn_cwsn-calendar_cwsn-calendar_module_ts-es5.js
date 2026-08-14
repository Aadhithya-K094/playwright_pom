(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_cwsn-calendar_cwsn-calendar_module_ts"], {
    /***/
    18799:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-calendar/cwsn-calendar-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnCalendarPageRoutingModule": function CwsnCalendarPageRoutingModule() {
          return (
            /* binding */
            _CwsnCalendarPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-calendar.page */
      7414);

      var routes = [{
        path: '',
        component: _cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_0__.CwsnCalendarPage
      }];

      var _CwsnCalendarPageRoutingModule = /*#__PURE__*/_createClass(function CwsnCalendarPageRoutingModule() {
        _classCallCheck(this, CwsnCalendarPageRoutingModule);
      });

      _CwsnCalendarPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CwsnCalendarPageRoutingModule);
      /***/
    },

    /***/
    64463:
    /*!******************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-calendar/cwsn-calendar.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnCalendarPageModule": function CwsnCalendarPageModule() {
          return (
            /* binding */
            _CwsnCalendarPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _cwsn_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-calendar-routing.module */
      18799);
      /* harmony import */


      var _cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-calendar.page */
      7414);
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ion2-calendar */
      18834);
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);

      var _CwsnCalendarPageModule = /*#__PURE__*/_createClass(function CwsnCalendarPageModule() {
        _classCallCheck(this, CwsnCalendarPageModule);
      });

      _CwsnCalendarPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cwsn_calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnCalendarPageRoutingModule, ion2_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule],
        declarations: [_cwsn_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CwsnCalendarPage]
      })], _CwsnCalendarPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_cwsn-calendar_cwsn-calendar_module_ts-es5.js.map