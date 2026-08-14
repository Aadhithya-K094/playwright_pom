(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_commonpages_dashboard_dashboard_module_ts"], {
    /***/
    57058:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/commonpages/dashboard/dashboard-routing.module.ts ***!
      \*************************************************************************/

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
      41813);

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
    64819:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/commonpages/dashboard/dashboard.module.ts ***!
      \*****************************************************************/

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
      57058);
      /* harmony import */


      var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page */
      41813);

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
    41813:
    /*!***************************************************************!*\
      !*** ./src/app/pages/commonpages/dashboard/dashboard.page.ts ***!
      \***************************************************************/

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


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dashboard.page.html */
      61897);
      /* harmony import */


      var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard.page.scss */
      79179);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _services_emis_sids_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/emis/sids.service */
      35252);

      var _DashboardPage = /*#__PURE__*/function () {
        function DashboardPage(router, userSessionService, platform, ionicstorage, networkService, SidsService) {
          _classCallCheck(this, DashboardPage);

          this.router = router;
          this.userSessionService = userSessionService;
          this.platform = platform;
          this.ionicstorage = ionicstorage;
          this.networkService = networkService;
          this.SidsService = SidsService;
          this.subscription = this.platform.backButton.subscribeWithPriority(9999, function () {});
        }

        return _createClass(DashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.ionicstorage.getData('Records').then(function (data) {
              if (data && data.length > 0) {
                var records = {
                  "json": data
                };

                if (_this.networkService.getCurrentNetworkStatus() == 0) {
                  _this.SidsService.PostinsWorkForm(records).subscribe(function (res) {
                    if (res.dataStatus == true && res.status == 200) {
                      // this.alertService.success("Data Insert Successfully")
                      _this.ionicstorage.removeKey('Records');
                    }
                  });
                }
              }
            }, function (error) {
              return console.error(error);
            });
            this.emis_usertype = this.userSessionService.emis_usertype();
            this.getDashboard();
          }
        }, {
          key: "getDashboard",
          value: function getDashboard() {
            this.inspectionList = [{
              id: 19,
              menu: 'Civil',
              image: 'assets/icons/Civil.svg',
              url: '/tabs/civilbuildinglist'
            }, {
              id: 22,
              menu: 'Civil Evaluation',
              image: 'assets/icons/civilevaluation.svg',
              url: '/tabs/school-info/Id=2'
            }, {
              id: 23,
              menu: 'SIDS Survey',
              image: 'assets/icons/sids.svg',
              url: '/tabs/sids-dashboard'
            }, // {
            //   id: 23,
            //   menu: 'Work Inspection',
            //   image: 'assets/icons/sids.svg',
            //   url:'/tabs/work-inspection'
            // },
            // {
            //   id: 23,
            //   menu: 'Form',
            //   image: 'assets/icons/sids.svg',
            //   url:'/tabs/my-inspection-from'
            // },
            {
              id: 23,
              menu: 'Civil Inspection',
              image: 'assets/icons/sids.svg',
              url: '/tabs/work-inspection'
            }, {
              id: 23,
              menu: 'Inspection History',
              image: 'assets/icons/sids.svg',
              url: '/tabs/inspection-selection'
            } // {
            //   id: 23,
            //   menu: 'sample',
            //   image: 'assets/icons/sids.svg',
            //   url:'/tabs/sids-general-dashboard'
            // },
            //   {
            //    id: 23,
            //    menu: 'RCI',
            //    image: 'assets/icons/sids.svg',
            //    url:'/tabs/school-inspection'
            //  },
            // {
            //   id: 28,
            //   menu: 'Identification Camp',
            //   image: 'assets/icons/sids.svg',
            //   url:'tabs/student-search'
            // },
            ];
            this.mod = this.userSessionService.mod1();
            var mod1 = this.mod.split(',');
            var dashDetails = new Array();
            this.inspectionList.forEach(function (lval, li) {
              mod1.forEach(function (mval, mi) {
                if (lval.id == +mval) {
                  dashDetails.push(lval);
                }
              });
            });
            this.inspectionList = [];
            this.inspectionList = dashDetails;
          }
        }, {
          key: "goToSurvey",
          value: function goToSurvey(item) {
            this.router.navigate([item.url]);
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.subscription.unsubscribe();
          }
        }]);
      }();

      _DashboardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_3__.NetworkService
        }, {
          type: _services_emis_sids_service__WEBPACK_IMPORTED_MODULE_5__.SidsService
        }];
      };

      _DashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DashboardPage);
      /***/
    },

    /***/
    79179:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/commonpages/dashboard/dashboard.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    61897:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/dashboard/dashboard.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\"> Inspection </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <ion-row>\r\n    <ion-col size=\"3\" class=\"menu menu-txt\"  *ngFor=\"let item of inspectionList\">\r\n      <ion-row (click)=\"goToSurvey(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n  </ion-content>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_commonpages_dashboard_dashboard_module_ts-es5.js.map