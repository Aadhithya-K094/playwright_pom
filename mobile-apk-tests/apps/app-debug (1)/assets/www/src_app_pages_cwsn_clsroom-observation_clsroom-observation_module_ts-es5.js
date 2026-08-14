(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_clsroom-observation_clsroom-observation_module_ts"], {
    /***/
    33462:
    /*!**************************************************************************************!*\
      !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation-routing.module.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClsroomObservationPageRoutingModule": function ClsroomObservationPageRoutingModule() {
          return (
            /* binding */
            _ClsroomObservationPageRoutingModule
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


      var _clsroom_observation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./clsroom-observation.page */
      50149);

      var routes = [{
        path: '',
        component: _clsroom_observation_page__WEBPACK_IMPORTED_MODULE_0__.ClsroomObservationPage
      }];

      var _ClsroomObservationPageRoutingModule = /*#__PURE__*/_createClass(function ClsroomObservationPageRoutingModule() {
        _classCallCheck(this, ClsroomObservationPageRoutingModule);
      });

      _ClsroomObservationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ClsroomObservationPageRoutingModule);
      /***/
    },

    /***/
    6388:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClsroomObservationPageModule": function ClsroomObservationPageModule() {
          return (
            /* binding */
            _ClsroomObservationPageModule
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


      var _clsroom_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./clsroom-observation-routing.module */
      33462);
      /* harmony import */


      var _clsroom_observation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clsroom-observation.page */
      50149);

      var _ClsroomObservationPageModule = /*#__PURE__*/_createClass(function ClsroomObservationPageModule() {
        _classCallCheck(this, ClsroomObservationPageModule);
      });

      _ClsroomObservationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _clsroom_observation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClsroomObservationPageRoutingModule],
        declarations: [_clsroom_observation_page__WEBPACK_IMPORTED_MODULE_1__.ClsroomObservationPage]
      })], _ClsroomObservationPageModule);
      /***/
    },

    /***/
    50149:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation.page.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClsroomObservationPage": function ClsroomObservationPage() {
          return (
            /* binding */
            _ClsroomObservationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_clsroom_observation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./clsroom-observation.page.html */
      94197);
      /* harmony import */


      var _clsroom_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clsroom-observation.page.scss */
      15581);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ClsroomObservationPage = /*#__PURE__*/function () {
        function ClsroomObservationPage(router, route) {
          _classCallCheck(this, ClsroomObservationPage);

          this.router = router;
          this.route = route;
        }

        return _createClass(ClsroomObservationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              console.log(data);
              _this.title = data.title;
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/cwsn/dashboard']);
          }
        }]);
      }();

      _ClsroomObservationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }];
      };

      _ClsroomObservationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-clsroom-observation',
        template: _raw_loader_clsroom_observation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_clsroom_observation_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClsroomObservationPage);
      /***/
    },

    /***/
    15581:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/cwsn/clsroom-observation/clsroom-observation.page.scss ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsc3Jvb20tb2JzZXJ2YXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUFDSiIsImZpbGUiOiJjbHNyb29tLW9ic2VydmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59Il19 */";
      /***/
    },

    /***/
    94197:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/clsroom-observation/clsroom-observation.page.html ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{ title }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_clsroom-observation_clsroom-observation_module_ts-es5.js.map