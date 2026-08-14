(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_auto-slot_auto-slot_module_ts"], {
    /***/
    7971:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/stem_new/auto-slot/auto-slot-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AutoSlotPageRoutingModule": function AutoSlotPageRoutingModule() {
          return (
            /* binding */
            _AutoSlotPageRoutingModule
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


      var _auto_slot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auto-slot.page */
      463);

      var routes = [{
        path: '',
        component: _auto_slot_page__WEBPACK_IMPORTED_MODULE_0__.AutoSlotPage
      }];

      var _AutoSlotPageRoutingModule = /*#__PURE__*/_createClass(function AutoSlotPageRoutingModule() {
        _classCallCheck(this, AutoSlotPageRoutingModule);
      });

      _AutoSlotPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AutoSlotPageRoutingModule);
      /***/
    },

    /***/
    46696:
    /*!**************************************************************!*\
      !*** ./src/app/pages/stem_new/auto-slot/auto-slot.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AutoSlotPageModule": function AutoSlotPageModule() {
          return (
            /* binding */
            _AutoSlotPageModule
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


      var _auto_slot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auto-slot-routing.module */
      7971);
      /* harmony import */


      var _auto_slot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auto-slot.page */
      463);

      var _AutoSlotPageModule = /*#__PURE__*/_createClass(function AutoSlotPageModule() {
        _classCallCheck(this, AutoSlotPageModule);
      });

      _AutoSlotPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _auto_slot_routing_module__WEBPACK_IMPORTED_MODULE_0__.AutoSlotPageRoutingModule],
        declarations: [_auto_slot_page__WEBPACK_IMPORTED_MODULE_1__.AutoSlotPage]
      })], _AutoSlotPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_auto-slot_auto-slot_module_ts-es5.js.map