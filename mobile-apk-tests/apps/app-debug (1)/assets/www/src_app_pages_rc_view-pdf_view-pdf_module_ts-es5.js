(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_rc_view-pdf_view-pdf_module_ts"], {
    /***/
    47586:
    /*!**************************************************************!*\
      !*** ./src/app/pages/rc/view-pdf/view-pdf-routing.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPdfPageRoutingModule": function ViewPdfPageRoutingModule() {
          return (
            /* binding */
            _ViewPdfPageRoutingModule
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


      var _view_pdf_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view-pdf.page */
      65175);

      var routes = [{
        path: '',
        component: _view_pdf_page__WEBPACK_IMPORTED_MODULE_0__.ViewPdfPage
      }];

      var _ViewPdfPageRoutingModule = /*#__PURE__*/_createClass(function ViewPdfPageRoutingModule() {
        _classCallCheck(this, ViewPdfPageRoutingModule);
      });

      _ViewPdfPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ViewPdfPageRoutingModule);
      /***/
    },

    /***/
    33706:
    /*!******************************************************!*\
      !*** ./src/app/pages/rc/view-pdf/view-pdf.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPdfPageModule": function ViewPdfPageModule() {
          return (
            /* binding */
            _ViewPdfPageModule
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


      var _view_pdf_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./view-pdf-routing.module */
      47586);
      /* harmony import */


      var _view_pdf_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-pdf.page */
      65175);
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      3621);

      var _ViewPdfPageModule = /*#__PURE__*/_createClass(function ViewPdfPageModule() {
        _classCallCheck(this, ViewPdfPageModule);
      });

      _ViewPdfPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__.PdfViewerModule, _view_pdf_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPdfPageRoutingModule],
        declarations: [_view_pdf_page__WEBPACK_IMPORTED_MODULE_1__.ViewPdfPage]
      })], _ViewPdfPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_rc_view-pdf_view-pdf_module_ts-es5.js.map