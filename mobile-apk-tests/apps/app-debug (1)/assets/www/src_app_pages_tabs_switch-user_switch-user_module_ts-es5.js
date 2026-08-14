(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tabs_switch-user_switch-user_module_ts"], {
    /***/
    35480:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/tabs/switch-user/switch-user-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwitchUserPageRoutingModule": function SwitchUserPageRoutingModule() {
          return (
            /* binding */
            _SwitchUserPageRoutingModule
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


      var _switch_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./switch-user.page */
      45148);

      var routes = [{
        path: '',
        component: _switch_user_page__WEBPACK_IMPORTED_MODULE_0__.SwitchUserPage
      }];

      var _SwitchUserPageRoutingModule = /*#__PURE__*/_createClass(function SwitchUserPageRoutingModule() {
        _classCallCheck(this, SwitchUserPageRoutingModule);
      });

      _SwitchUserPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SwitchUserPageRoutingModule);
      /***/
    },

    /***/
    20879:
    /*!**************************************************************!*\
      !*** ./src/app/pages/tabs/switch-user/switch-user.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwitchUserPageModule": function SwitchUserPageModule() {
          return (
            /* binding */
            _SwitchUserPageModule
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


      var _switch_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./switch-user-routing.module */
      35480);
      /* harmony import */


      var _switch_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./switch-user.page */
      45148);

      var _SwitchUserPageModule = /*#__PURE__*/_createClass(function SwitchUserPageModule() {
        _classCallCheck(this, SwitchUserPageModule);
      });

      _SwitchUserPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _switch_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.SwitchUserPageRoutingModule],
        declarations: [_switch_user_page__WEBPACK_IMPORTED_MODULE_1__.SwitchUserPage]
      })], _SwitchUserPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tabs_switch-user_switch-user_module_ts-es5.js.map