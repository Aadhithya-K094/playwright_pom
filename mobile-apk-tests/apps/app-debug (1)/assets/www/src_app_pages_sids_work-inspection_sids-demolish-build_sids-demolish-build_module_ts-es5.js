(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_module_ts"], {
    /***/
    68530:
    /*!******************************************************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build-routing.module.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidsDemolishBuildPageRoutingModule": function SidsDemolishBuildPageRoutingModule() {
          return (
            /* binding */
            _SidsDemolishBuildPageRoutingModule
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


      var _sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sids-demolish-build.page */
      12748);

      var routes = [{
        path: '',
        component: _sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_0__.SidsDemolishBuildPage
      }];

      var _SidsDemolishBuildPageRoutingModule = /*#__PURE__*/_createClass(function SidsDemolishBuildPageRoutingModule() {
        _classCallCheck(this, SidsDemolishBuildPageRoutingModule);
      });

      _SidsDemolishBuildPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SidsDemolishBuildPageRoutingModule);
      /***/
    },

    /***/
    44540:
    /*!**********************************************************************************************!*\
      !*** ./src/app/pages/sids/work-inspection/sids-demolish-build/sids-demolish-build.module.ts ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidsDemolishBuildPageModule": function SidsDemolishBuildPageModule() {
          return (
            /* binding */
            _SidsDemolishBuildPageModule
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


      var _sids_demolish_build_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sids-demolish-build-routing.module */
      68530);
      /* harmony import */


      var _sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sids-demolish-build.page */
      12748);

      var _SidsDemolishBuildPageModule = /*#__PURE__*/_createClass(function SidsDemolishBuildPageModule() {
        _classCallCheck(this, SidsDemolishBuildPageModule);
      });

      _SidsDemolishBuildPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _sids_demolish_build_routing_module__WEBPACK_IMPORTED_MODULE_0__.SidsDemolishBuildPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_sids_demolish_build_page__WEBPACK_IMPORTED_MODULE_1__.SidsDemolishBuildPage]
      })], _SidsDemolishBuildPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_module_ts-es5.js.map