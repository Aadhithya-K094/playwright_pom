(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection_my-inspection_mo-09775a"], {
    /***/
    58689:
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection-routing.module.ts ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionPageRoutingModule": function MyInspectionPageRoutingModule() {
          return (
            /* binding */
            _MyInspectionPageRoutingModule
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


      var _my_inspection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-inspection.page */
      8800);

      var routes = [{
        path: '',
        component: _my_inspection_page__WEBPACK_IMPORTED_MODULE_0__.MyInspectionPage
      }];

      var _MyInspectionPageRoutingModule = /*#__PURE__*/_createClass(function MyInspectionPageRoutingModule() {
        _classCallCheck(this, MyInspectionPageRoutingModule);
      });

      _MyInspectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyInspectionPageRoutingModule);
      /***/
    },

    /***/
    73186:
    /*!**************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.module.ts ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionPageModule": function MyInspectionPageModule() {
          return (
            /* binding */
            _MyInspectionPageModule
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


      var _my_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-inspection-routing.module */
      58689);
      /* harmony import */


      var _my_inspection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-inspection.page */
      8800);

      var _MyInspectionPageModule = /*#__PURE__*/_createClass(function MyInspectionPageModule() {
        _classCallCheck(this, MyInspectionPageModule);
      });

      _MyInspectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _my_inspection_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyInspectionPageRoutingModule],
        declarations: [_my_inspection_page__WEBPACK_IMPORTED_MODULE_1__.MyInspectionPage]
      })], _MyInspectionPageModule);
      /***/
    },

    /***/
    8800:
    /*!************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.page.ts ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyInspectionPage": function MyInspectionPage() {
          return (
            /* binding */
            _MyInspectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_my_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./my-inspection.page.html */
      38045);
      /* harmony import */


      var _my_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-inspection.page.scss */
      23880);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _MyInspectionPage = /*#__PURE__*/function () {
        function MyInspectionPage(router) {
          _classCallCheck(this, MyInspectionPage);

          this.router = router;
        }

        return _createClass(MyInspectionPage, [{
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
            this.router.navigate(['/tabs/my-inspection-dashboard']);
          }
        }]);
      }();

      _MyInspectionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _MyInspectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-my-inspection',
        template: _raw_loader_my_inspection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_inspection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyInspectionPage);
      /***/
    },

    /***/
    23880:
    /*!**************************************************************************************************************!*\
      !*** ./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.page.scss ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1pbnNwZWN0aW9uLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    38045:
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.page.html ***!
      \****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> My Inspection </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-row class=\"menu-txt\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <!-- <ion-label>Menus</ion-label>  -->\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\">\r\n      <ion-row (click)=\"goToMenuData()\" >\r\n        <img src=\"/assets/icons/EnnumEzhuthumIcon.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\"> Ennum Ezhuthum </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection_my-inspection_mo-09775a-es5.js.map