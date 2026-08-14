(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_awc-view-modal_awc-view-modal_module_ts"], {
    /***/
    60268:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/awc/awc-view-modal/awc-view-modal-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcViewModalPageRoutingModule": function AwcViewModalPageRoutingModule() {
          return (
            /* binding */
            _AwcViewModalPageRoutingModule
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


      var _awc_view_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-view-modal.page */
      75390);

      var routes = [{
        path: '',
        component: _awc_view_modal_page__WEBPACK_IMPORTED_MODULE_0__.AwcViewModalPage
      }];

      var _AwcViewModalPageRoutingModule = /*#__PURE__*/_createClass(function AwcViewModalPageRoutingModule() {
        _classCallCheck(this, AwcViewModalPageRoutingModule);
      });

      _AwcViewModalPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AwcViewModalPageRoutingModule);
      /***/
    },

    /***/
    52473:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/awc/awc-view-modal/awc-view-modal.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcViewModalPageModule": function AwcViewModalPageModule() {
          return (
            /* binding */
            _AwcViewModalPageModule
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


      var _awc_view_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-view-modal-routing.module */
      60268);
      /* harmony import */


      var _awc_view_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awc-view-modal.page */
      75390);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _AwcViewModalPageModule = /*#__PURE__*/_createClass(function AwcViewModalPageModule() {
        _classCallCheck(this, AwcViewModalPageModule);
      });

      _AwcViewModalPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _awc_view_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwcViewModalPageRoutingModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_awc_view_modal_page__WEBPACK_IMPORTED_MODULE_1__.AwcViewModalPage]
      })], _AwcViewModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_awc_awc-view-modal_awc-view-modal_module_ts-es5.js.map