(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ezhutharivu-thittam_dashboard_dashboard_module_ts"], {
    /***/
    55263:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/dashboard/dashboard-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageRoutingModule": function DashboardPageRoutingModule() {
          return (
            /* binding */
            _DashboardPageRoutingModule
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


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.page */
      14978);

      var routes = [{
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
      }];

      var _DashboardPageRoutingModule = /*#__PURE__*/_createClass(function DashboardPageRoutingModule() {
        _classCallCheck(this, DashboardPageRoutingModule);
      });

      _DashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DashboardPageRoutingModule);
      /***/
    },

    /***/
    17508:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/dashboard/dashboard.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPageModule": function DashboardPageModule() {
          return (
            /* binding */
            _DashboardPageModule
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      55263);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page */
      14978);

      var _DashboardPageModule = /*#__PURE__*/_createClass(function DashboardPageModule() {
        _classCallCheck(this, DashboardPageModule);
      });

      _DashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
      })], _DashboardPageModule);
      /***/
    },

    /***/
    14978:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/dashboard/dashboard.page.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardPage": function DashboardPage() {
          return (
            /* binding */
            _DashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dashboard.page.html */
      82086);
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      28206);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895); // Developed by Priyadharshini Samuvel [Start Date - 14-05-2024]
      // PM - Saraswathi


      var _DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(router, activeRoute) {
          _classCallCheck(this, DashboardPage);

          this.router = router;
          this.activeRoute = activeRoute;
          var schoolData = this.activeRoute.snapshot.queryParams.data;
          this.schoolData = JSON.parse(schoolData);
        }

        return _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuLists = [{
              menu: 'Add Learners Details',
              image: 'assets/images/nilp/learns.svg',
              id: 1,
              url: '/tabs/ezhutharivu-thittam/learner'
            }, {
              menu: 'Add Volunteers Details',
              image: 'assets/images/nilp/Volunteers.svg',
              id: 2,
              url: '/tabs/ezhutharivu-thittam/learner' // url: '/tabs/ezhutharivu-thittam/volunteer'

            }, {
              menu: 'Saved Details',
              image: 'assets/images/nilp/BothDetails.svg',
              id: 3,
              url: '/tabs/ezhutharivu-thittam/learner' // url: '/tabs/ezhutharivu-thittam/saveddetails'

            }];
          }
        }, {
          key: "navigationBack",
          value: function navigationBack() {
            this.router.navigate(['tabs/ezhutharivu-thittam/schoollist']);
          }
        }, {
          key: "onMenuNavigate",
          value: function onMenuNavigate(item) {
            this.router.navigate([item.url], {
              queryParams: {
                'menudata': JSON.stringify(item),
                'schooldata': JSON.stringify(this.schoolData)
              },
              skipLocationChange: false
            });
          }
        }]);
      }();

      _DashboardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }];
      };

      _DashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DashboardPage);
      /***/
    },

    /***/
    28206:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/ezhutharivu-thittam/dashboard/dashboard.page.scss ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: auto;\n  color: #8B67B3;\n  margin: 17px;\n  border-radius: 15px;\n  --background: white;\n  box-shadow: 0 4px 8px 0 #b0d4ef, 0 6px 20px 0 #e5eef5;\n}\n\n.menu-icon {\n  text-align: center;\n}\n\n.menu-txt {\n  font-size: 17px;\n  margin-bottom: auto;\n  margin-top: auto;\n  padding-left: 16px;\n}\n\n.lbl {\n  margin-top: auto;\n  margin-bottom: auto;\n  padding-left: 15px;\n  font-size: 16px;\n}\n\n.icon-lbl {\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  zoom: 1.7;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7QUFESjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQURKIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gICAgbWFyZ2luOiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCAjYjBkNGVmLCAwIDZweCAyMHB4IDAgI2U1ZWVmNTtcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWVudS10eHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5sYmwge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5pY29uLWxibHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICB6b29tOiAxLjc7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn0iXX0= */";
      /***/
    },

    /***/
    82086:
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ezhutharivu-thittam/dashboard/dashboard.page.html ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigationBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <ion-row>\r\n        <ion-col size=\"12\" style=\"padding-bottom: 0px;\">\r\n          Menu\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"padding-top: 0px;\">\r\n          <span style=\"font-size: 14px;\">{{this.schoolData.school_name}}</span>\r\n        </ion-col>\r\n      </ion-row></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let item of menuLists\" (click)=\"onMenuNavigate(item);\">\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <img [src]=\"item.image\" /><br />\r\n        <ion-label class=\"lbl\">{{item.menu}}</ion-label>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ezhutharivu-thittam_dashboard_dashboard_module_ts-es5.js.map