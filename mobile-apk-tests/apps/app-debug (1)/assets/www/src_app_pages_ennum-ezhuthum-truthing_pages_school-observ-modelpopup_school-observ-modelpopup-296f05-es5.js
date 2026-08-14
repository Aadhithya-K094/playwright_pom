(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_school-observ-modelpopup_school-observ-modelpopup-296f05"], {
    /***/
    31768:
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observ-modelpopup/school-observ-modelpopup-routing.module.ts ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolObservModelpopupPageRoutingModule": function SchoolObservModelpopupPageRoutingModule() {
          return (
            /* binding */
            _SchoolObservModelpopupPageRoutingModule
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


      var _school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-observ-modelpopup.page */
      19584);

      var routes = [{
        path: '',
        component: _school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_0__.SchoolObservModelpopupPage
      }];

      var _SchoolObservModelpopupPageRoutingModule = /*#__PURE__*/_createClass(function SchoolObservModelpopupPageRoutingModule() {
        _classCallCheck(this, SchoolObservModelpopupPageRoutingModule);
      });

      _SchoolObservModelpopupPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolObservModelpopupPageRoutingModule);
      /***/
    },

    /***/
    48922:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/school-observ-modelpopup/school-observ-modelpopup.module.ts ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolObservModelpopupPageModule": function SchoolObservModelpopupPageModule() {
          return (
            /* binding */
            _SchoolObservModelpopupPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _school_observ_modelpopup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-observ-modelpopup-routing.module */
      31768);
      /* harmony import */


      var _school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-observ-modelpopup.page */
      19584);

      var _SchoolObservModelpopupPageModule = /*#__PURE__*/_createClass(function SchoolObservModelpopupPageModule() {
        _classCallCheck(this, SchoolObservModelpopupPageModule);
      });

      _SchoolObservModelpopupPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _school_observ_modelpopup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolObservModelpopupPageRoutingModule],
        declarations: [_school_observ_modelpopup_page__WEBPACK_IMPORTED_MODULE_1__.SchoolObservModelpopupPage]
      })], _SchoolObservModelpopupPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_school-observ-modelpopup_school-observ-modelpopup-296f05-es5.js.map