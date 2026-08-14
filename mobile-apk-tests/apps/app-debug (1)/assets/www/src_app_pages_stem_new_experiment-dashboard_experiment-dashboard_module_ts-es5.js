(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_experiment-dashboard_experiment-dashboard_module_ts"], {
    /***/
    91567:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-dashboard/experiment-dashboard-routing.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentDashboardPageRoutingModule": function ExperimentDashboardPageRoutingModule() {
          return (
            /* binding */
            _ExperimentDashboardPageRoutingModule
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


      var _experiment_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./experiment-dashboard.page */
      23137);

      var routes = [{
        path: '',
        component: _experiment_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.ExperimentDashboardPage
      }];

      var _ExperimentDashboardPageRoutingModule = /*#__PURE__*/_createClass(function ExperimentDashboardPageRoutingModule() {
        _classCallCheck(this, ExperimentDashboardPageRoutingModule);
      });

      _ExperimentDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ExperimentDashboardPageRoutingModule);
      /***/
    },

    /***/
    1176:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-dashboard/experiment-dashboard.module.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentDashboardPageModule": function ExperimentDashboardPageModule() {
          return (
            /* binding */
            _ExperimentDashboardPageModule
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


      var _experiment_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./experiment-dashboard-routing.module */
      91567);
      /* harmony import */


      var _experiment_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./experiment-dashboard.page */
      23137);

      var _ExperimentDashboardPageModule = /*#__PURE__*/_createClass(function ExperimentDashboardPageModule() {
        _classCallCheck(this, ExperimentDashboardPageModule);
      });

      _ExperimentDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _experiment_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExperimentDashboardPageRoutingModule],
        declarations: [_experiment_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.ExperimentDashboardPage]
      })], _ExperimentDashboardPageModule);
      /***/
    },

    /***/
    23137:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-dashboard/experiment-dashboard.page.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExperimentDashboardPage": function ExperimentDashboardPage() {
          return (
            /* binding */
            _ExperimentDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_experiment_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./experiment-dashboard.page.html */
      80854);
      /* harmony import */


      var _experiment_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./experiment-dashboard.page.scss */
      50623);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _ExperimentDashboardPage = /*#__PURE__*/function () {
        function ExperimentDashboardPage(navCtrl, alertCtrl, alertController, router, usersessionService) {
          _classCallCheck(this, ExperimentDashboardPage);

          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.alertController = alertController;
          this.router = router;
          this.usersessionService = usersessionService;
          this.sessionEmisUsertype = this.usersessionService.emis_usertype();
        }

        return _createClass(ExperimentDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "experimentsphase1",
          value: function experimentsphase1() {
            this.router.navigate(['/tabs/domain'], {
              queryParams: {
                "name": "experiments"
              }
            });
          }
        }, {
          key: "experimentsphase2",
          value: function experimentsphase2() {
            this.router.navigate(['/tabs/experiment-phase'], {
              queryParams: {
                "name": "experiments"
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/stem-dashboard']);
          }
        }]);
      }();

      _ExperimentDashboardPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }];
      };

      _ExperimentDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-experiment-dashboard',
        template: _raw_loader_experiment_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_experiment_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExperimentDashboardPage);
      /***/
    },

    /***/
    50623:
    /*!************************************************************************************!*\
      !*** ./src/app/pages/stem_new/experiment-dashboard/experiment-dashboard.page.scss ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-bg {\n  background: url(\"/assets/images/SplashScreen.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 100%;\n}\n\n.cardicon1 {\n  background: url(\"/assets/images/phase1.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.cardicon2 {\n  background: url(\"/assets/images/phase2.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 150px;\n  color: aliceblue;\n  padding-left: 10px;\n  padding-top: 15px;\n  font-size: 20px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaW1lbnQtZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdGQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSwwRUFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLDBFQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7QUFDSiIsImZpbGUiOiJleHBlcmltZW50LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1NwbGFzaFNjcmVlbi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9IFxyXG5cclxuICAuY2FyZGljb24xIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcGhhc2UxLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkaWNvbjIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9waGFzZTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    80854:
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/experiment-dashboard/experiment-dashboard.page.html ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Experiments</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <div class=\"content login-bg\" [hidden]=\"isImageHidden\"></div> -->\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" (click)=\"experimentsphase1()\">\r\n        <div class=\"cardicon1\">\r\n          <div> Phase 1 </div>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\" (click)=\"experimentsphase2()\">\r\n        <div class=\"cardicon2\">\r\n          <div> Phase 2 </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_experiment-dashboard_experiment-dashboard_module_ts-es5.js.map