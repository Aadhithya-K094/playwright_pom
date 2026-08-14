(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_menus_hm-search_call-hm_call-hm_module_ts"], {
    /***/
    97176:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/menus/hm-search/call-hm/call-hm-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CallHmPageRoutingModule": function CallHmPageRoutingModule() {
          return (
            /* binding */
            _CallHmPageRoutingModule
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


      var _call_hm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./call-hm.page */
      82630);

      var routes = [{
        path: '',
        component: _call_hm_page__WEBPACK_IMPORTED_MODULE_0__.CallHmPage
      }];

      var _CallHmPageRoutingModule = /*#__PURE__*/_createClass(function CallHmPageRoutingModule() {
        _classCallCheck(this, CallHmPageRoutingModule);
      });

      _CallHmPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CallHmPageRoutingModule);
      /***/
    },

    /***/
    56512:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/menus/hm-search/call-hm/call-hm.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CallHmPageModule": function CallHmPageModule() {
          return (
            /* binding */
            _CallHmPageModule
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


      var _call_hm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./call-hm-routing.module */
      97176);
      /* harmony import */


      var _call_hm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./call-hm.page */
      82630);

      var _CallHmPageModule = /*#__PURE__*/_createClass(function CallHmPageModule() {
        _classCallCheck(this, CallHmPageModule);
      });

      _CallHmPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _call_hm_routing_module__WEBPACK_IMPORTED_MODULE_0__.CallHmPageRoutingModule],
        declarations: [_call_hm_page__WEBPACK_IMPORTED_MODULE_1__.CallHmPage]
      })], _CallHmPageModule);
      /***/
    },

    /***/
    82630:
    /*!***************************************************************!*\
      !*** ./src/app/pages/menus/hm-search/call-hm/call-hm.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CallHmPage": function CallHmPage() {
          return (
            /* binding */
            _CallHmPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_call_hm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./call-hm.page.html */
      60007);
      /* harmony import */


      var _call_hm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./call-hm.page.scss */
      43610);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _CallHmPage = /*#__PURE__*/function () {
        function CallHmPage(router) {
          _classCallCheck(this, CallHmPage);

          this.router = router;
        }

        return _createClass(CallHmPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "goToMenuData",
          value: function goToMenuData() {
            this.router.navigate(['/tabs/callhm-tntlei']);
          }
        }]);
      }();

      _CallHmPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _CallHmPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-call-hm',
        template: _raw_loader_call_hm_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_call_hm_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CallHmPage);
      /***/
    },

    /***/
    43610:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/menus/hm-search/call-hm/call-hm.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxsLWhtLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    60007:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menus/hm-search/call-hm/call-hm.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> HM Search </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-row class=\"menu-txt\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <!-- <ion-label>Menus</ion-label>  -->\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\">\r\n      <ion-row (click)=\"goToMenuData()\" >\r\n        <img src=\"/assets/icons/call_hm.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\"> Call Hm </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_menus_hm-search_call-hm_call-hm_module_ts-es5.js.map