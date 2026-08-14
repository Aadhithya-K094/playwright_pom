(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_screening-status_screening-status_module_ts"], {
    /***/
    96754:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScreeningStatusPageRoutingModule": function ScreeningStatusPageRoutingModule() {
          return (
            /* binding */
            _ScreeningStatusPageRoutingModule
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


      var _screening_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./screening-status.page */
      8888);

      var routes = [{
        path: '',
        component: _screening_status_page__WEBPACK_IMPORTED_MODULE_0__.ScreeningStatusPage
      }];

      var _ScreeningStatusPageRoutingModule = /*#__PURE__*/_createClass(function ScreeningStatusPageRoutingModule() {
        _classCallCheck(this, ScreeningStatusPageRoutingModule);
      });

      _ScreeningStatusPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ScreeningStatusPageRoutingModule);
      /***/
    },

    /***/
    65811:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScreeningStatusPageModule": function ScreeningStatusPageModule() {
          return (
            /* binding */
            _ScreeningStatusPageModule
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


      var _screening_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./screening-status-routing.module */
      96754);
      /* harmony import */


      var _screening_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./screening-status.page */
      8888);

      var _ScreeningStatusPageModule = /*#__PURE__*/_createClass(function ScreeningStatusPageModule() {
        _classCallCheck(this, ScreeningStatusPageModule);
      });

      _ScreeningStatusPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _screening_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScreeningStatusPageRoutingModule],
        declarations: [_screening_status_page__WEBPACK_IMPORTED_MODULE_1__.ScreeningStatusPage]
      })], _ScreeningStatusPageModule);
      /***/
    },

    /***/
    8888:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScreeningStatusPage": function ScreeningStatusPage() {
          return (
            /* binding */
            _ScreeningStatusPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_screening_status_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./screening-status.page.html */
      85200);
      /* harmony import */


      var _screening_status_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./screening-status.page.scss */
      72666);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ScreeningStatusPage = /*#__PURE__*/function () {
        function ScreeningStatusPage(router) {
          _classCallCheck(this, ScreeningStatusPage);

          this.router = router;
        }

        return _createClass(ScreeningStatusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/home']);
          }
        }]);
      }();

      _ScreeningStatusPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ScreeningStatusPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-screening-status',
        template: _raw_loader_screening_status_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_screening_status_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ScreeningStatusPage);
      /***/
    },

    /***/
    72666:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/screening-status/screening-status.page.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".center-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  font-size: 1.5rem;\n  text-align: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmVlbmluZy1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJzY3JlZW5pbmctc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    85200:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/screening-status/screening-status.page.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"center-text\">\r\n    2025-26 screening will begin soon\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_pmoa_screening-status_screening-status_module_ts-es5.js.map