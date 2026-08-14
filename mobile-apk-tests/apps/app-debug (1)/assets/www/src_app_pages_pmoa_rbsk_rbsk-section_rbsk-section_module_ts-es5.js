(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_rbsk_rbsk-section_rbsk-section_module_ts"], {
    /***/
    12687:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/pmoa/rbsk/rbsk-section/rbsk-section-routing.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RbskSectionPageRoutingModule": function RbskSectionPageRoutingModule() {
          return (
            /* binding */
            _RbskSectionPageRoutingModule
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


      var _rbsk_section_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rbsk-section.page */
      5800);

      var routes = [{
        path: '',
        component: _rbsk_section_page__WEBPACK_IMPORTED_MODULE_0__.RbskSectionPage
      }];

      var _RbskSectionPageRoutingModule = /*#__PURE__*/_createClass(function RbskSectionPageRoutingModule() {
        _classCallCheck(this, RbskSectionPageRoutingModule);
      });

      _RbskSectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RbskSectionPageRoutingModule);
      /***/
    },

    /***/
    22807:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/pmoa/rbsk/rbsk-section/rbsk-section.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RbskSectionPageModule": function RbskSectionPageModule() {
          return (
            /* binding */
            _RbskSectionPageModule
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


      var _rbsk_section_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rbsk-section-routing.module */
      12687);
      /* harmony import */


      var _rbsk_section_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rbsk-section.page */
      5800);

      var _RbskSectionPageModule = /*#__PURE__*/_createClass(function RbskSectionPageModule() {
        _classCallCheck(this, RbskSectionPageModule);
      });

      _RbskSectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _rbsk_section_routing_module__WEBPACK_IMPORTED_MODULE_0__.RbskSectionPageRoutingModule],
        declarations: [_rbsk_section_page__WEBPACK_IMPORTED_MODULE_1__.RbskSectionPage]
      })], _RbskSectionPageModule);
      /***/
    },

    /***/
    5800:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/pmoa/rbsk/rbsk-section/rbsk-section.page.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RbskSectionPage": function RbskSectionPage() {
          return (
            /* binding */
            _RbskSectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_rbsk_section_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./rbsk-section.page.html */
      70120);
      /* harmony import */


      var _rbsk_section_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rbsk-section.page.scss */
      21412);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RbskSectionPage = /*#__PURE__*/function () {
        function RbskSectionPage() {
          _classCallCheck(this, RbskSectionPage);
        }

        return _createClass(RbskSectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      _RbskSectionPage.ctorParameters = function () {
        return [];
      };

      _RbskSectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rbsk-section',
        template: _raw_loader_rbsk_section_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rbsk_section_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RbskSectionPage);
      /***/
    },

    /***/
    21412:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/pmoa/rbsk/rbsk-section/rbsk-section.page.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYnNrLXNlY3Rpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    70120:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/rbsk/rbsk-section/rbsk-section.page.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>rbsk-section</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_rbsk_rbsk-section_rbsk-section_module_ts-es5.js.map