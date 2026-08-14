(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'tnvntabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_tnvntabs_tnvntabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/tnvntabs/tnvntabs.module */
          20756)).then(function (m) {
            return m.TnvntabsPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_commonpages_home_home_module_ts"), __webpack_require__.e("src_app_pages_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/tabs/tabs.module */
          5557)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/login/login.module */
          21053)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "default-src_app_pages_commonpages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/commonpages/home/home.module */
          64822)).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'school-observ-modelpopup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_school-observ-modelpopup_school-observ-modelpopup-296f05")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/ennum-ezhuthum-truthing/pages/school-observ-modelpopup/school-observ-modelpopup.module */
          48922)).then(function (m) {
            return m.SchoolObservModelpopupPageModule;
          });
        }
      }, {
        path: 'view-pdf',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dynamic-form-generator_view-pdf_view-pdf_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/dynamic-form-generator/view-pdf/view-pdf.module */
          53840)).then(function (m) {
            return m.ViewPdfPageModule;
          });
        }
      }, {
        path: 'common-pdf',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_commonpages_common-pdf_common-pdf_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/commonpages/common-pdf/common-pdf.module */
          2122)).then(function (m) {
            return m.CommonPdfPageModule;
          });
        }
      }, // {
      //   path: 'visit-list',
      //   loadChildren: () => import('./pages/sids/visit-list/visit-list.module').then( m => m.VisitListPageModule)
      // },
      {
        path: 'mass-visit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_mass-visit_mass-visit_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/mass-visit/mass-visit.module */
          17106)).then(function (m) {
            return m.MassVisitPageModule;
          });
        }
      }, {
        path: 'vocational-industry-detail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vocational-intern_vocational-industry-detail_vocational-industry-detail_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/vocational-intern/vocational-industry-detail/vocational-industry-detail.module */
          21666)).then(function (m) {
            return m.VocationalIndustryDetailPageModule;
          });
        }
      }, {
        path: 'vocational-question-form',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vocational-intern_vocational-question-form_vocational-question-form_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/vocational-intern/vocational-question-form/vocational-question-form.module */
          39364)).then(function (m) {
            return m.VocationalQuestionFormPageModule;
          });
        }
      }, {
        path: 'mht-view-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mht_mht-view-modal_mht-view-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/mht/mht-view-modal/mht-view-modal.module */
          34162)).then(function (m) {
            return m.MhtViewModalPageModule;
          });
        }
      }, {
        path: 'awc-view-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_awc_awc-view-modal_awc-view-modal_page_ts"), __webpack_require__.e("src_app_pages_awc_awc-view-modal_awc-view-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/awc/awc-view-modal/awc-view-modal.module */
          52473)).then(function (m) {
            return m.AwcViewModalPageModule;
          });
        }
      }, {
        path: 'kgbv-hostel',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_kgbv_kgbv-hostel_kgbv-hostel_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/kgbv/kgbv-hostel/kgbv-hostel.module */
          29874)).then(function (m) {
            return m.KgbvHostelPageModule;
          });
        }
      }, {
        path: 'hostel-student-attendance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_kgbv_hostel-student-attendance_hostel-student-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/kgbv/hostel-student-attendance/hostel-student-attendance.module */
          12366)).then(function (m) {
            return m.HostelStudentAttendancePageModule;
          });
        }
      }, {
        path: 'hostel-staff-attendance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_kgbv_hostel-staff-attendance_hostel-staff-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/kgbv/hostel-staff-attendance/hostel-staff-attendance.module */
          73742)).then(function (m) {
            return m.HostelStaffAttendancePageModule;
          });
        }
      }, {
        path: 'summarypopuppage',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_commonpages_summarypopuppage_summarypopuppage_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/commonpages/summarypopuppage/summarypopuppage.module */
          67036)).then(function (m) {
            return m.SummarypopuppagePageModule;
          });
        }
      }, {
        path: 'deic-referred-page',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_my-patient-list_my-patient-view-modal_my-patient-view-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-patient-list_deic-referred-page_deic-referred-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/my-patient-list/deic-referred-page/deic-referred-page.module */
          80578)).then(function (m) {
            return m.DeicReferredPagePageModule;
          });
        }
      }, {
        path: 'my-patient-view-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_my-patient-list_my-patient-view-modal_my-patient-view-modal_page_ts"), __webpack_require__.e("src_app_pages_my-patient-list_my-patient-view-modal_my-patient-view-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/my-patient-list/my-patient-view-modal/my-patient-view-modal.module */
          14757)).then(function (m) {
            return m.MyPatientViewModalPageModule;
          });
        }
      }, {
        path: 'cwsn-attend-filter',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cwsn_cwsn-attend-filter_cwsn-attend-filter_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cwsn/cwsn-attend-filter/cwsn-attend-filter.module */
          91071)).then(function (m) {
            return m.CwsnAttendFilterPageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules,
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/authentication.service */
      7053);
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/alert.service */
      25970);
      /* harmony import */


      var _services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var _services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/tnvn/services/common_Provider/loader-service/loader-service.service */
      90110);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! xlsx */
      46351);
      /* harmony import */


      var _services_usersession_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/usersession.service */
      64461); // import {File} from '@ionic-native/file/ngx';


      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, router, modalController, alertController, navCtrl, transfer, file, androidPermissions, menu, fileOpener, authService, alertService, apiService, sqlitedatabaseService, loaderService, usersessionService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.router = router;
          this.modalController = modalController;
          this.alertController = alertController;
          this.navCtrl = navCtrl;
          this.transfer = transfer;
          this.file = file;
          this.androidPermissions = androidPermissions;
          this.menu = menu;
          this.fileOpener = fileOpener;
          this.authService = authService;
          this.alertService = alertService;
          this.apiService = apiService;
          this.sqlitedatabaseService = sqlitedatabaseService;
          this.loaderService = loaderService;
          this.usersessionService = usersessionService;
          this.userMod = [];
          this.isDisabled = false;
          this.appPages = [{
            title: "Home",
            url: "/tabs/home",
            icon: "home"
          }];
          this.initializeApp();
          var languageStatus = localStorage.getItem("language");

          if (languageStatus !== null) {
            this.languageType = languageStatus;
          } else {
            this.languageType = "en";
          }

          if (languageStatus !== null) {
            this.languageType = languageStatus;
          } else {
            this.languageType = "en";
          }
        }

        return _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.navigate(['/login']); // let userCredential: any = JSON.parse(localStorage.getItem('credential'));
            // console.log('userCredential', userCredential);
            // if (userCredential) {
            //   this.navCtrl.navigateRoot('tabmenu');
            // } else {
            //   this.router.navigate(['/login'])
            // }
          }
        }, {
          key: "initialModVal",
          value: function initialModVal() {
            var mod = this.usersessionService.mod1();
            this.userMod = mod === null || mod === void 0 ? void 0 : mod.split(',');
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.statusBar.styleLightContent();

              _this.statusBar.backgroundColorByHexString('#8B67B3');

              _this.splashScreen.hide();

              _this.handleHardwareBackButton(); //this.initializeDB();
              // if (userCredential) {
              //   this.navCtrl.navigateRoot('tabmenu');
              // this.authService.login(userCredential.username, userCredential.password).subscribe((res) => {
              //   if (res) {
              //     if ('access_token' in res)
              //       this.navCtrl.navigateRoot('tabmenu');
              //     else {
              //       if ('success' in res) {
              //         if (!res.success) {
              //           if ('htmlFormattedFailures' in res)
              //             this.alertService.error(res.htmlFormattedFailures);
              //           this.router.navigate(['/login']);
              //         }
              //       }
              //     }
              //   }
              // }, error => {
              //   this.router.navigate(['/login']);
              //   console.error('Error', error);
              // });
              // } else {
              //   this.router.navigate(['/login'])
              // }

            });
          }
        }, {
          key: "initializeDB",
          value: function initializeDB() {
            this.sqlitedatabaseService.initDatabase();
          }
        }, {
          key: "handleHardwareBackButton",
          value: function handleHardwareBackButton() {
            var _this2 = this;

            document.addEventListener('backbutton', function () {
              _this2.platform.backButton.subscribeWithPriority(1, function () {
                _this2.dismissPopover().then(function (res) {
                  if (res === 0) {} else {
                    if (_this2.router.url.startsWith('/login')) {
                      _this2.presentAlertConfirmExit('Exit');
                    } else if (_this2.router.url === '/tabs/home') {
                      _this2.presentAlertConfirmExit('Logout');
                    } else if (_this2.router.url === '/tabmenu/profile' || _this2.router.url === 'tabmenu/aboutus') {
                      _this2.router.navigate(['/tabmenu/dashboard']);
                    } else if (_this2.loaderService.isLoading == true) {
                      _this2.loaderService.dismissLoader();
                    } else {
                      _this2.navCtrl.back();
                    }
                  }
                });
              });
            }, false);
          }
        }, {
          key: "dismissPopover",
          value: function dismissPopover() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    return _context.a(2, 1);
                }
              }, _callee);
            }));
          }
        }, {
          key: "downloadsheet",
          value: function downloadsheet() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this3 = this;

              var fileTransfer, url;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    fileTransfer = this.transfer.create();
                    url = 'https://demobucketom.s3.ap-south-1.amazonaws.com/omr.pdf';
                    fileTransfer.download(url, this.file.externalRootDirectory + 'Download/' + 'OMR_Answer_sheet.pdf').then(function (entry) {
                      _this3.alertService.success("OMR Answer sheet has been successfully downloaded");
                    }, function (error) {});

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "downloadOmr",
          value: function downloadOmr() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this4 = this;

              var fileTransfer, targetPath, url;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) {
                      return console.log('Has permission?', result.hasPermission);
                    }, function (err) {
                      return _this4.androidPermissions.requestPermission(_this4.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                    });
                    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) {
                      return console.log('Has permission?', result.hasPermission);
                    }, function (err) {
                      return _this4.androidPermissions.requestPermission(_this4.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
                    });
                    fileTransfer = this.transfer.create();
                    targetPath = this.file.externalDataDirectory;
                    this.file.createDir(targetPath, 'TNVN', true).then(function (res) {
                      return console.log('createDir video res', res);
                    })["catch"](function (err) {
                      return console.log('createDir video err', err);
                    });
                    fileTransfer.onProgress(function (progressEvent) {
                      var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
                    });
                    url = 'https://demobucketom.s3.ap-south-1.amazonaws.com/omr.pdf';
                    fileTransfer.download(url, this.file.externalDataDirectory + 'TNVN/' + 'OMR_Answer_sheet.pdf', true).then(function (entry) {
                      _this4.fileOpener.showOpenWithDialog(entry.toURL(), 'application/pdf').then(function () {
                        return console.log('File is opened');
                      })["catch"](function (e) {
                        return console.log('Error opening file', e);
                      });
                    }, function (error) {});
                    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (status) {
                      if (status.hasPermission) {
                        var _url = 'https://demobucketom.s3.ap-south-1.amazonaws.com/omr.pdf';
                        fileTransfer.download(_url, _this4.file.dataDirectory + 'OMR_Answer_sheet.pdf', true).then(function (entry) {
                          _this4.alertService.success("OMR Answer sheet has been successfully downloaded");
                        }, function (error) {
                          var url = 'https://demobucketom.s3.ap-south-1.amazonaws.com/omr.pdf';
                          fileTransfer.download(url, _this4.file.dataDirectory + 'OMR_Answer_sheet.pdf', true).then(function (entry) {
                            _this4.alertService.success("OMR Answer sheet has been successfully downloaded");
                          }, function (error) {});
                        });
                      } else {
                        _this4.androidPermissions.requestPermissions([_this4.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE, _this4.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]).then(function (status) {
                          if (status.hasPermission) {
                            var _url2 = 'https://demobucketom.s3.ap-south-1.amazonaws.com/omr.pdf';
                            fileTransfer.download(_url2, _this4.file.dataDirectory + 'Download/' + 'OMR_Answer_sheet.pdf').then(function (entry) {
                              _this4.alertService.success("OMR Answer sheet has been successfully downloaded");
                            }, function (error) {
                              _this4.androidPermissions.requestPermission(_this4.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (status) {
                                if (status.hasPermission) {
                                  var _url3 = 'https://demobucketom.s3.ap-south-1.amazonaws.com/omr.pdf';
                                  fileTransfer.download(_url3, _this4.file.dataDirectory + 'Download/' + 'OMR_Answer_sheet_new.pdf').then(function (entry) {
                                    _this4.alertService.success("OMR Answer sheet has been successfully downloaded");
                                  }, function (error) {});
                                }
                              });
                            });
                          }
                        });
                      }
                    });

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertConfirmExit",
          value: function presentAlertConfirmExit(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.alertController.create({
                      header: message + ' Confirmation',
                      message: 'Do you want to ' + message + ' App?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          if (message === 'Exit') {
                            navigator['app'].exitApp();
                          } else {
                            _this5.router.navigate(['login']);
                          }
                        }
                      }]
                    });

                  case 1:
                    alert = _context4.v;
                    _context4.n = 2;
                    return alert.present();

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "openFirst",
          value: function openFirst() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }, {
          key: "openEnd",
          value: function openEnd() {
            this.menu.open('end');
          }
        }, {
          key: "goDashboard",
          value: function goDashboard(url) {
            this.router.navigate([url]);
          }
        }, {
          key: "mySelectHandler",
          value: function mySelectHandler() {
            this.apiService.languageChange(this.languageType);
            localStorage.setItem("language", this.languageType);
          }
        }, {
          key: "setAction",
          value: function setAction(data) {
            if (data.title == "Logout") {}

            if (data.title == "Exit") {
              navigator["app"].exitApp();
            }
          }
        }, {
          key: "downloadExlWithPermission",
          value: function downloadExlWithPermission(val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this6 = this;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (status) {
                      if (status.hasPermission) {
                        _this6.downloadExcel(val);
                      } else {
                        _this6.androidPermissions.requestPermissions([_this6.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, _this6.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]).then(function (status) {
                          if (status.hasPermission) {
                            _this6.downloadExcel(val);
                          }

                          ;
                        });
                      }
                    });

                  case 1:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "downloadExcel",
          value: function downloadExcel(val) {
            var _this7 = this;

            var url = '';
            var userId = this.usersessionService.emis_username();
            var fileExtension = '.xlsx';
            var fileName = '';

            if (val == 1) {
              url = 'https://d1wpyxz35bzzz4.cloudfront.net/mht/' + userId + '-MHT-Wise-User-Level-Rpt.xlsx';
              fileName = 'MHT-Report' + Date.now().toString();
            } else if (val == 2) {
              url = 'https://d1wpyxz35bzzz4.cloudfront.net/mht/' + userId + '-Pmoa-Line-List-Rpt.xlsx';
              fileName = 'PMOA-Report' + Date.now().toString();
            } else if (val == 3) {
              url = 'https://d1wpyxz35bzzz4.cloudfront.net/mht/' + userId + '-AWC-MHT-Wise-User-Level-Rpt.xlsx';
              fileName = 'AWC-Report' + Date.now().toString();
            }

            var fileTransfer = this.transfer.create();
            fileTransfer.download(url, this.file.externalRootDirectory + '/Download/' + fileName + fileExtension, true).then(function (entry) {
              // fileTransfer.download(workbook,true)
              _this7.fileOpener.showOpenWithDialog(entry.toURL(), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet').then(function () {
                return console.log('File is opened');
              })["catch"](function (e) {
                return console.log('Error opening file', e);
              });

              console.log('download complete: ' + entry.toURL());
            }, function (error) {
              _this7.alertService.warning("Error While getting report");

              console.log('err', error);
            });
          }
        }, {
          key: "createExcel",
          value: function createExcel() {
            var data = [{
              name: 'Ayyanar',
              Age: '23',
              Designation: 'Frontend Dev'
            }, {
              name: 'Suhail',
              Age: '25',
              Designation: 'Frontend Dev'
            }, {
              name: 'Selva',
              Age: '27',
              Designation: 'Backend Dev'
            }]; // let finalData:any = [];
            // for(let i=0;i<data.length;i++) {
            //   let obj = {
            //     id: "id"+i.toLocaleString(),
            //     Age: "Age"+i.toLocaleString(),
            //     Designation: "Designation"+i.toLocaleString()
            //   }
            //   finalData.push(obj);
            // }

            var ws = xlsx__WEBPACK_IMPORTED_MODULE_15__.utils.json_to_sheet(data); // let wb = {Sheets: {'data': ws},SheetNames:['Data']};

            var wb = xlsx__WEBPACK_IMPORTED_MODULE_15__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_15__.utils.book_append_sheet(wb, ws, 'PMOAREPORT');
            var buffer = xlsx__WEBPACK_IMPORTED_MODULE_15__.write(wb, {
              bookType: 'xlsx',
              type: 'array'
            });
            this.saveLocal(buffer);
          }
        }, {
          key: "checkModVal",
          value: function checkModVal(val) {
            var _a;

            if ((_a = this.userMod) === null || _a === void 0 ? void 0 : _a.includes(val)) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "saveLocal",
          value: function saveLocal(buffer) {
            var _this8 = this;

            var fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            var fileExtension = '.xlsx';
            var fileName = 'PMOA-Report' + Date.now().toString();
            var data = new Blob([buffer], {
              type: fileType
            });
            this.file.applicationDirectory;
            this.file.applicationStorageDirectory;
            this.file.dataDirectory;
            this.file.writeFile(this.file.externalRootDirectory + '/Download/', fileName + fileExtension, data, {
              replace: true
            }).then(function (entry) {
              debugger;

              _this8.fileOpener.showOpenWithDialog(entry.toURL(), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet').then(function () {
                return console.log('File is opened');
              })["catch"](function (e) {
                return console.log('Error opening file', e);
              });
            });
          }
        }]);
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.NavController
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__.FileTransfer
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__.AndroidPermissions
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.MenuController
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__.FileOpener
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService
        }, {
          type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService
        }, {
          type: _services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService
        }, {
          type: _services_tnvn_services_common_Provider_loader_service_loader_service_service__WEBPACK_IMPORTED_MODULE_12__.LoaderServiceService
        }, {
          type: _services_usersession_service__WEBPACK_IMPORTED_MODULE_13__.UserSessionService
        }];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      51524);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      7354);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/interceptor.service */
      30155);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/data.service */
      52468);
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/authentication.service */
      7053);
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/alert.service */
      25970);
      /* harmony import */


      var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/device/ngx */
      77668);
      /* harmony import */


      var _services_usersession_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/usersession.service */
      64461);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /* harmony import */


      var ng_http_loader__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ng-http-loader */
      10527);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      53760);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      16030);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      75592);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);
      /* harmony import */


      var _services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ionic-selectable */
      93319);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/market/ngx */
      67972);
      /* harmony import */


      var _services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/emis/pmoa.services */
      47567);
      /* harmony import */


      var _services_emis_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/emis/user.service */
      92275);
      /* harmony import */


      var _services_emis_upload_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./services/emis/upload.service */
      83102);
      /* harmony import */


      var _services_emis_aws_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./services/emis/aws.service */
      56263);
      /* harmony import */


      var _services_validations_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./services/validations.service */
      27681);
      /* harmony import */


      var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @apollo/client/link/context */
      82569);
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! apollo-angular */
      550);
      /* harmony import */


      var apollo_angular_http__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! apollo-angular/http */
      31586);
      /* harmony import */


      var _apollo_client_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @apollo/client/core */
      87328);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      34255);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-path/ngx */
      33002);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);
      /* harmony import */


      var _services_diagnosis_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./services/diagnosis.service */
      10293);
      /* harmony import */


      var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @awesome-cordova-plugins/screen-orientation/ngx */
      22321);
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      3621);
      /* harmony import */


      var _services_cwsn_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./services/cwsn.service */
      20210);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _services_emis_emis_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./services/emis/emis.service */
      71660);
      /* harmony import */


      var ionic2_calendar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ionic2-calendar */
      87732);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @awesome-cordova-plugins/keyboard/ngx */
      74628);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @awesome-cordova-plugins/web-intent/ngx */
      61751);
      /* harmony import */


      var _awesome_cordova_plugins_app_availability_ngx__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @awesome-cordova-plugins/app-availability/ngx */
      69414);
      /* harmony import */


      var _services_grievance_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./services/grievance.service */
      48578);
      /* harmony import */


      var _services_shared_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./services/shared.service */
      7386);
      /* harmony import */


      var _services_emis_sids_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./services/emis/sids.service */
      35252);
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      37961);
      /* harmony import */


      var _services_json_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./services/json.service */
      77232);
      /* harmony import */


      var _services_autosync_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./services/autosync.service */
      27952);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835); // import { TabsModule } from 'ngx-bootstrap/tabs';
      // import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
      // import { Screenshot } from '@ionic-native/screenshot/ngx';
      // import { SocialSharing } from '@ionic-native/social-sharing/ngx';
      // import { Globalization } from '@ionic-native/globalization/ngx';
      // import {IonicStorageModule} from '@ionic/storage-angular';


      var saveStudentListLink = (0, _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_44__.setContext)(function (operation, previousContext) {
        var headers = previousContext.headers,
            canHazPancakes = previousContext.canHazPancakes;
        return Object.assign(Object.assign({}, previousContext), {
          headers: Object.assign(Object.assign({}, headers), {
            "x-api-key": "da2-ntwvagbgpjbs3mxk2iev5k2vvy" //your custom header

          })
        });
      });
      var saveStudentStatusLink = (0, _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_44__.setContext)(function (operation, previousContext) {
        var headers = previousContext.headers,
            canHazPancakes = previousContext.canHazPancakes;
        return Object.assign(Object.assign({}, previousContext), {
          headers: Object.assign(Object.assign({}, headers), {
            "x-api-key": "da2-wdklu7wgcbejjd35cqtfkabfue" //your custom header

          })
        });
      });
      var saveITKStudentListLink = (0, _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_44__.setContext)(function (operation, previousContext) {
        var headers = previousContext.headers,
            canHazPancakes = previousContext.canHazPancakes;
        return Object.assign(Object.assign({}, previousContext), {
          headers: Object.assign(Object.assign({}, headers), {
            "x-api-key": "da2-mdrzsalx55bwdjm5ubbauxwtqy"
          })
        });
      });
      var saveITKStudentStatusLink = (0, _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_44__.setContext)(function (operation, previousContext) {
        var headers = previousContext.headers,
            canHazPancakes = previousContext.canHazPancakes;
        return Object.assign(Object.assign({}, previousContext), {
          headers: Object.assign(Object.assign({}, headers), {
            "x-api-key": "da2-3dvnjvvfsbgdfg56vlj23okl5y"
          })
        });
      });

      function _HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_45__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
      }

      var _AppModule = /*#__PURE__*/_createClass(function AppModule(apollo, httpLink) {
        _classCallCheck(this, AppModule);

        this.studentList = 'https://ndr5aolnkzgpnmxswzn54yvpta.appsync-api.ap-south-1.amazonaws.com/graphql';
        this.studentStatus = 'https://yql6g6rzr5gjhdn5xy562pytsu.appsync-api.ap-south-1.amazonaws.com/graphql';
        this.itkstudentList = 'https://2bdg3nn2yjdurk3mxoswhhpiwq.appsync-api.ap-south-1.amazonaws.com/graphql';
        this.itkstudentStatus = 'https://wb4rm55jfff55k4kwl56m7ra7u.appsync-api.ap-south-1.amazonaws.com/graphql';
        var options1 = {
          uri: this.studentList
        };
        apollo.createDefault({
          link: saveStudentListLink.concat(httpLink.create(options1)),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_46__.InMemoryCache()
        });
        var options2 = {
          uri: this.studentStatus
        };
        apollo.createNamed('endpoint2', {
          link: saveStudentStatusLink.concat(httpLink.create(options2)),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_46__.InMemoryCache()
        });
        var options3 = {
          uri: this.itkstudentList
        };
        apollo.createNamed('endpoint3', {
          link: saveITKStudentListLink.concat(httpLink.create(options3)),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_46__.InMemoryCache()
        });
        var options4 = {
          uri: this.itkstudentStatus
        };
        apollo.createNamed('endpoint4', {
          link: saveITKStudentStatusLink.concat(httpLink.create(options4)),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_46__.InMemoryCache()
        });
      });

      _AppModule.ctorParameters = function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_47__.Apollo
        }, {
          type: apollo_angular_http__WEBPACK_IMPORTED_MODULE_48__.HttpLink
        }];
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_49__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_50__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_51__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_52__.IonicModule.forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_53__.IonicStorageModule.forRoot(), // TabsModule.forRoot(),
        _angular_forms__WEBPACK_IMPORTED_MODULE_54__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_55__.PdfViewerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_56__.HttpClientModule, _ionic_storage__WEBPACK_IMPORTED_MODULE_53__.IonicStorageModule.forRoot(), ng_http_loader__WEBPACK_IMPORTED_MODULE_57__.NgHttpLoaderModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_58__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_58__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_56__.HttpClient]
          }
        }), ionic2_calendar__WEBPACK_IMPORTED_MODULE_59__.NgCalendarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_60__.BrowserAnimationsModule],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen, _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_36__.WebIntent, _awesome_cordova_plugins_app_availability_ngx__WEBPACK_IMPORTED_MODULE_37__.AppAvailability, // Screenshot,
        _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_34__.Keyboard, // Globalization,
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_35__.SocialSharing, _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_28__.FilePath, _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_29__.FileTransfer, _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_29__.FileTransferObject, _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__.Device, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__.Network, _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_19__.Market, _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_26__.File, _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_18__.FileOpener, _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_25__.Diagnostic, _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__.AppVersion, _services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__.Network, _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_27__.Camera, _services_interceptor_service__WEBPACK_IMPORTED_MODULE_5__.HttpInterceptorService, _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService, _services_usersession_service__WEBPACK_IMPORTED_MODULE_10__.UserSessionService, _services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService, _services_emis_user_service__WEBPACK_IMPORTED_MODULE_21__.UserService, _services_emis_emis_service__WEBPACK_IMPORTED_MODULE_33__.EmisService, _services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_20__.PmoaService, _services_emis_aws_service__WEBPACK_IMPORTED_MODULE_23__.AwsService, _services_grievance_service__WEBPACK_IMPORTED_MODULE_38__.GrievanceService, _services_shared_service__WEBPACK_IMPORTED_MODULE_39__.SharedService, _services_validations_service__WEBPACK_IMPORTED_MODULE_24__.ValidationsService, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_11__.InAppBrowser, _services_emis_upload_service__WEBPACK_IMPORTED_MODULE_22__.UploadService, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__.Geolocation, _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_16__.SQLite, _services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_17__.SqlitedatabaseService, _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__.AndroidPermissions, _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_14__.LocationAccuracy, _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_26__.File, _services_cwsn_service__WEBPACK_IMPORTED_MODULE_32__.CWSNService, _services_diagnosis_service__WEBPACK_IMPORTED_MODULE_30__.DiagnosisService, ionic_selectable__WEBPACK_IMPORTED_MODULE_61__.IonicSelectableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_54__.FormBuilder, _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_31__.ScreenOrientation, _angular_common__WEBPACK_IMPORTED_MODULE_62__.DatePipe, _services_emis_sids_service__WEBPACK_IMPORTED_MODULE_40__.SidsService, _services_json_service__WEBPACK_IMPORTED_MODULE_42__.JsonService, _services_autosync_service__WEBPACK_IMPORTED_MODULE_43__.AutosyncService, _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_41__.PDFGenerator, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_63__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_52__.IonicRouteStrategy
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_56__.HTTP_INTERCEPTORS,
          useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_5__.HttpInterceptorService,
          multi: true
        }, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_63__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_52__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    58034:
    /*!***************************************!*\
      !*** ./src/app/models/usersession.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserSession": function UserSession() {
          return (
            /* binding */
            _UserSession
          );
        }
        /* harmony export */

      });

      var _UserSession = /*#__PURE__*/_createClass(function _UserSession() {
        _classCallCheck(this, _UserSession);
      });
      /***/

    },

    /***/
    2770:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/commonpages/common-pdf/common-pdf.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommonPdfPage": function CommonPdfPage() {
          return (
            /* binding */
            _CommonPdfPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_common_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./common-pdf.page.html */
      16205);
      /* harmony import */


      var _common_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common-pdf.page.scss */
      87558);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _CommonPdfPage = /*#__PURE__*/function () {
        function CommonPdfPage(modalCtrl, navParams) {
          _classCallCheck(this, CommonPdfPage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.zoom = 1.0;
        }

        return _createClass(CommonPdfPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.imageURL = this.navParams.get('image');
            this.src = this.imageURL;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "incrementZoom",
          value: function incrementZoom(amount) {
            this.zoom += amount;
          }
        }]);
      }();

      _CommonPdfPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
        }];
      };

      _CommonPdfPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-common-pdf',
        template: _raw_loader_common_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_common_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CommonPdfPage);
      /***/
    },

    /***/
    29535:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/commonpages/view-image/view-image.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewImagePage": function ViewImagePage() {
          return (
            /* binding */
            _ViewImagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_view_image_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./view-image.page.html */
      92844);
      /* harmony import */


      var _view_image_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-image.page.scss */
      60369);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ViewImagePage = /*#__PURE__*/function () {
        // zoomLevel = 1;
        function ViewImagePage(modalCtrl, navParams) {
          _classCallCheck(this, ViewImagePage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.sliderOpt = {
            zoom: {
              maxRatio: 1
            }
          };
          this.imageURL = this.navParams.get('image');
          console.log(this.imageURL, "view page");
        }

        return _createClass(ViewImagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "zoomin",
          value: function zoomin() {
            var myImg = document.getElementById("map");
            var currWidth = myImg.clientWidth; //if(currWidth == 2500) return false;
            // else{
            //    myImg.style.width = (currWidth + 100) + "px";
            //} 

            myImg.style.width = currWidth + 100 + "px";
          }
        }, {
          key: "zoomout",
          value: function zoomout() {
            var myImg = document.getElementById("map");
            var currWidth = myImg.clientWidth;
            if (currWidth == 100) return false;else {
              myImg.style.width = currWidth - 100 + "px";
            }
          }
        }]);
      }();

      _ViewImagePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams
        }];
      };

      _ViewImagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view-image',
        template: _raw_loader_view_image_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_image_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ViewImagePage);
      /***/
    },

    /***/
    65175:
    /*!****************************************************!*\
      !*** ./src/app/pages/rc/view-pdf/view-pdf.page.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewPdfPage": function ViewPdfPage() {
          return (
            /* binding */
            _ViewPdfPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./view-pdf.page.html */
      99251);
      /* harmony import */


      var _view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./view-pdf.page.scss */
      38862);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/data.service */
      52468);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970); // import { EmisService } from 'src/app/services/emis/emis.service';


      var _ViewPdfPage = /*#__PURE__*/function () {
        function ViewPdfPage(router, uploadService, sanitizer, http, modalCtrl, navParams, dataService, usersessionService, alertService) {
          _classCallCheck(this, ViewPdfPage);

          this.router = router;
          this.uploadService = uploadService;
          this.sanitizer = sanitizer;
          this.http = http;
          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.dataService = dataService;
          this.usersessionService = usersessionService;
          this.alertService = alertService;
          this.noOfLikes = 0;
          this.noOfDisLikes = 0;
          this.likeClass = ['like-button'];
          this.likeState = '';
          this.iconColor = '#000';
          this.zoom = 1.0;
          this.originalSize = true;
        }

        return _createClass(ViewPdfPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            debugger; //     this.sessionTeacherId = this.usersessionService.teacher_id();
            //     this.sessionEmisUserType = this.usersessionService.emis_usertype();
            //     if (this.sessionEmisUserType == 1) {
            //       this.sessionSchoolId = this.usersessionService.school_id();
            //     } else {
            //       this.sessionSchoolId = this.usersessionService.school_key_id();
            //     }

            this.extension = this.navParams.get('extension');
            this.imageURL = this.navParams.get('image'); //     this.gradeId = this.navParams.get('grade');
            //     this.unitId = this.navParams.get('unit');
            //     this.termId = this.navParams.get('term');
            //     this.periodId = this.navParams.get('period');
            //     this.pdfName = this.navParams.get('pdfName');
            //     this.id = this.navParams.get('id');

            this.src = this.imageURL;
            this.ext = this.extension.toLowerCase();
            console.log(this.extension, 'dsfhjksdhf');
            console.log(this.imageURL, 'dsfhjksdhf'); //     this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://docs.google.com/gview?embedded=true&url='+this.imageURL);
            // this.getBookLikeList();
          } // saveCmts(){
          //   console.log(this.comment,"test")
          //   this.saveData();
          // }

        }, {
          key: "incrementZoom",
          value: function incrementZoom(amount) {
            this.zoom += amount;
          } // getBookLikeList() {
          //   this.emisService.getBookLikeList(this.sessionTeacherId , this.sessionSchoolId, this.gradeId, this.unitId, this.periodId ).subscribe((res) => {
          //     if (res.result) {
          //       console.log("res if= ",res.result);
          //       if (res.result.length > 0) {
          //         this.indexId = res.result[0].IndexId;
          //         this.BookLikeList = res.result;
          //         if(res.result[0].Reactions == 1) {
          //           this.likeState = "liked";
          //         } else if(res.result[0].Reactions == 0) {
          //           this.likeState = "disliked"
          //         } else {
          //           this.likeState = ""
          //         }
          //       } else {
          //         this.indexId = "";
          //         this.BookLikeList = "";
          //       }
          //       console.log("BookLikeList= ",this.BookLikeList);
          //       console.log("indexId=",this.indexId);
          //     }
          //     else {
          //       this.indexId = "";
          //       this.BookLikeList = "";
          //     }
          //   });
          // }

        }, {
          key: "zoom_in",
          value: function zoom_in() {
            this.zoom_to = this.zoom_to + 0.25;
          }
        }, {
          key: "zoom_out",
          value: function zoom_out() {
            if (this.zoom_to > 1) {
              this.zoom_to = this.zoom_to - 0.25;
            }
          }
        }, {
          key: "getPDFUrl",
          value: function getPDFUrl() {
            var url = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_6__.SecurityContext.URL, this.imageURL.toString());
            var embedurl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            return embedurl;
          } // incrementLike() {
          //       switch (this.likeState) {
          //         case '':
          //           this.likeState = "liked"
          //           this.noOfLikes = this.noOfLikes + 1;
          //           break;
          //         case 'liked':
          //           this.likeState = ""
          //           this.noOfLikes = this.noOfLikes - 1;
          //           break;
          //         case 'disliked':
          //           this.likeState = "liked"
          //           this.noOfLikes = this.noOfLikes + 1;
          //           this.noOfDisLikes = this.noOfDisLikes - 1;
          //           break;
          //       }
          //       console.log("like count=",this.noOfLikes);
          //       console.log("Dislike count=",this.noOfDisLikes);
          //       this.reaction = 1;
          //       this.saveData();
          //     }
          //     incrementDisLike() {
          //       switch (this.likeState) {
          //         case '':
          //           this.likeState = "disliked"
          //           this.noOfDisLikes = this.noOfDisLikes + 1;
          //           break;
          //         case 'liked':
          //           this.likeState = "disliked"
          //           this.noOfLikes = this.noOfLikes - 1;
          //           this.noOfDisLikes = this.noOfDisLikes + 1;
          //           break;
          //         case 'disliked':
          //           this.likeState = ""
          //           this.noOfDisLikes = this.noOfDisLikes - 1;
          //           break;
          //       }
          //       console.log("like count=",this.noOfLikes);
          //       console.log("Dislike count=",this.noOfDisLikes);
          //       this.reaction = 0;
          //       this.saveData();
          //     }
          //     saveData() {
          //       var data;
          //       // if(this.noOfLikes == 0 && this.noOfDisLikes == 0 && this.comment == ""){
          //       //   console.log("Inside if save data");
          //       //   this.reaction = "";
          //       //   this.comment = "";
          //       // } else {
          //         console.log("Inside else save data");
          //           if(this.indexId == "") {
          //           console.log("Inside Index Empty");
          //           data = {
          //             records:{
          //             "IndexId": "",
          //             "SchlId": this.sessionSchoolId,
          //             'TchId': this.sessionTeacherId,
          //             'Reactions' : this.reaction,
          //             'Grade' : this.gradeId,
          //             'Unit' : this.unitId,
          //             'Period' : this.periodId,
          //             'PdfNme' : this.pdfName,
          //             'Comments':this.comment,
          //           }
          //         }
          //         this.insertData(data); 
          //       } else {
          //         console.log("Inside Index not Empty");
          //           data = {
          //             records:{
          //             "IndexId": this.indexId,
          //             "SchlId": this.sessionSchoolId,
          //             'TchId': this.sessionTeacherId,
          //             'Reactions' : this.reaction,
          //             'Grade' : this.gradeId,
          //             'Unit' : this.unitId,
          //             'Period' : this.periodId,
          //             'PdfNme' : this.pdfName,
          //             'Comments':this.comment,
          //           }
          //         } 
          //         this.insertData(data); 
          //       }
          //       // }
          //   }
          //   insertData(key) {
          //     console.log("data=",key);
          //     this.emisService.saveBookLikeData(key).subscribe((res) => {
          //       console.log("res=",res);
          //       if (res.dataStatus) {
          //         this.alertService.success(res.message);
          //         this.isActive = false;
          //         this.getBookLikeList();
          //         this.modalCtrl.dismiss();
          //       }
          //       else {
          //         console.log("inside Error data");
          //         this.alertService.error(res.message);
          //         this.router.navigate(['/tabs/spoken-english']);
          //       }
          //     });
          //   }

        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }]);
      }();

      _ViewPdfPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.DomSanitizer
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavParams
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }];
      };

      _ViewPdfPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-view-pdf',
        template: _raw_loader_view_pdf_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_pdf_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ViewPdfPage);
      /***/
    },

    /***/
    25970:
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertService": function AlertService() {
          return (
            /* binding */
            _AlertService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      34255);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AlertService = /*#__PURE__*/function () {
        function AlertService(toastController, diagnostic, alertController) {
          _classCallCheck(this, AlertService);

          this.toastController = toastController;
          this.diagnostic = diagnostic;
          this.alertController = alertController;
        }

        return _createClass(AlertService, [{
          key: "toast",
          value: function toast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var toast;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      color: 'success'
                    });

                  case 1:
                    toast = _context6.v;
                    toast.present();

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "customtoast",
          value: function customtoast(message, time) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var toast;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return this.toastController.create({
                      message: message,
                      duration: time
                    });

                  case 1:
                    toast = _context7.v;
                    toast.present();

                  case 2:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "info",
          value: function info(message) {
            this.toast(message);
          }
        }, {
          key: "custommessage",
          value: function custommessage(message, time) {
            this.customtoast(message, time);
          }
        }, {
          key: "warning",
          value: function warning(message) {
            this.toast(message);
          }
        }, {
          key: "success",
          value: function success(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.toast(message);
          }
        }, {
          key: "alert",
          value: function alert(message) {
            this.toast(message);
          }
        }, {
          key: "error",
          value: function error(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var toast;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.toastController.create({
                      message: message,
                      color: 'danger',
                      duration: 2000
                    });

                  case 1:
                    toast = _context8.v;
                    toast.present();

                  case 2:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "alertWhite",
          value: function alertWhite(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var alert;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    _context9.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      message: message,
                      buttons: ['OK']
                    });

                  case 1:
                    alert = _context9.v;
                    _context9.n = 2;
                    return alert.present();

                  case 2:
                    return _context9.a(2);
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "alertToTurnOnPermission",
          value: function alertToTurnOnPermission(headerMsg, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var _this9 = this;

              var alert;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    _context0.n = 1;
                    return this.alertController.create({
                      header: "Need ".concat(headerMsg, " Permission"),
                      message: "This app need to access ".concat(message, " in order to use this feature. Go to settings and turn on ").concat(message, " permission manually."),
                      buttons: [{
                        text: 'Cancel',
                        cssClass: 'alert-btn alert-cancel-btn',
                        handler: function handler() {}
                      }, {
                        text: 'Go to settings',
                        cssClass: 'alert-btn alert-yes-btn',
                        handler: function handler() {
                          _this9.diagnostic.switchToSettings();
                        }
                      }],
                      backdropDismiss: false
                    });

                  case 1:
                    alert = _context0.v;
                    _context0.n = 2;
                    return alert.present();

                  case 2:
                    return _context0.a(2);
                }
              }, _callee0, this);
            }));
          }
        }]);
      }();

      _AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_0__.Diagnostic
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController
        }];
      };

      _AlertService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _AlertService);
      /***/
    },

    /***/
    5830:
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/add/operator/toPromise */
      12297);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895); //import { NetworkService, ConnectionStatus } from './network.service';
      // Api Url Enviroment 


      var _ApiService = /*#__PURE__*/function () {
        function ApiService(http, // public networkService: NetworkService, 
        router) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.router = router;
          this.expToken = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.Token();
        } //POST


        return _createClass(ApiService, [{
          key: "post",
          value: function post(url, data) {
            return this.http.post(url, data).map(function (res) {
              console.log("Api Call Success `" + url + "`");
              return res;
            });
          } //GET

        }, {
          key: "get",
          value: function get(url) {
            return this.http.get(url).map(function (res) {
              console.log("Api Call Success `" + url + "`");
              return res;
            });
          } //PUT
          //DELETE
          //JWT Token Decode

        }, {
          key: "jwtDecode",
          value: function jwtDecode(t) {
            // console.log(t);
            var token = {};
            token['raw'] = t;
            token['header'] = JSON.parse(window.atob(t.split('.')[0]));
            token['payload'] = JSON.parse(window.atob(t.split('.')[1]));
            return token;
          }
        }, {
          key: "extractData",
          value: function extractData(response) {
            console.log(response);
            var body = response.json();
            return body || {};
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            console.log('Error in api service call :' + JSON.stringify(error));
            console.log('Error in api service call :' + error.status); //     console.log("dataUrl in error post call::"+dataurl);
            //     console.log(dataurl.substring(dataurl.lastIndexOf("/")+1, dataurl.length));

            return rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable.of(error); // return Observable.throw(error);
          }
        }, {
          key: "setToken",
          value: function setToken(key, token) {
            // console.log(token);
            window.localStorage.setItem(key, token);
            this.Token();
          }
        }, {
          key: "Token",
          value: function Token() {
            var currToken = window.localStorage.getItem('token'); // console.log(currToken);

            if (currToken != null) {
              this.expToken.next(true);
            } else {
              this.expToken.next(false);
            } // console.log(this.expToken);


            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(currToken);
          }
        }, {
          key: "isToken",
          value: function isToken() {
            return this.expToken.value;
          }
        }, {
          key: "getPreviewUrl",
          value: function getPreviewUrl() {
            var _this0 = this;

            this.currentUrl = this.router.url;
            this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                _this0.previousUrl = _this0.currentUrl;
                _this0.currentUrl = event.url;
              }

              ;
            });
          }
        }, {
          key: "getPreviousUrl",
          value: function getPreviousUrl() {
            //  console.log(this.previousUrl);
            return this.previousUrl;
          }
        }]);
      }();

      _ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
      })], _ApiService);
      /***/
    },

    /***/
    7053:
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationService": function AuthenticationService() {
          return (
            /* binding */
            _AuthenticationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data.service */
      52468);
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      16137);
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jwt-decode */
      48248);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./usersession.service */
      64461);
      /* harmony import */


      var _models_usersession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/usersession */
      58034);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./api.service */
      5830);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./alert.service */
      25970);
      /* harmony import */


      var _sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(dataService, userSessionService, ionicstorage, restApi, router, alert, sqliteDB, storage) {
          _classCallCheck(this, AuthenticationService);

          this.dataService = dataService;
          this.userSessionService = userSessionService;
          this.ionicstorage = ionicstorage;
          this.restApi = restApi;
          this.router = router;
          this.alert = alert;
          this.sqliteDB = sqliteDB;
          this.storage = storage;
          this.sessionData = new _models_usersession__WEBPACK_IMPORTED_MODULE_5__.UserSession();
          this.loginURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.loginUrl;
        }

        return _createClass(AuthenticationService, [{
          key: "validateAttendance",
          value: function validateAttendance(user, id) {
            var _this1 = this;

            // if (user.records.emis_username.substring(0, 4) == "pmoa") {
            //   const url = `${this.loginURL}${'/elogin'}`;
            //   this.dataService.post(url, user).subscribe(res => {
            //     if (res && res.dataStatus === true) {
            //       this.clearCachedMenu();
            //       this.sessionData = this.updateSessionDatas(res);
            //       this.userSessionService.create(this.sessionData);
            //       window.localStorage.setItem('user_token', res.records.token);
            //       window.localStorage.setItem('username', user.records.emis_username);
            //       window.localStorage.setItem('password', user.records.emis_password);
            //       this.router.navigate(['/tabs/home']);
            //     }
            //     else {
            //       if(res.message) {
            //         this.alert.error(res.message);
            //       }
            //     }
            //   });
            // }
            // else {
            // const url = `${this.loginURL}${'/login'}`;
            if (id == 1) {
              var url = "".concat(this.loginURL, '/new_login');
            } else {
              var url = "".concat(this.loginURL, '/switch_login');
            }

            this.dataService.post(url, user).subscribe(function (res) {
              console.log(res);

              if (res && res.dataStatus === true) {
                _this1.clearCachedMenu();

                _this1.sessionData = _this1.updateSessionDatas(res);

                _this1.userSessionService.create(_this1.sessionData);

                window.localStorage.setItem('user_token', res.records.token);
                window.localStorage.setItem('username', user.records.emis_username);
                window.localStorage.setItem('password', user.records.emis_password);

                _this1.router.navigate(['/tabs/home']);

                var decoded = (0, jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(res['records'].token);
                var username = user.records.emis_username;
                var password = user.records.emis_password;

                _this1.ionicstorage.insertData_Replace('userInfo', {
                  username: username,
                  password: password,
                  school_id: decoded['school_key_id'],
                  token: res['records'].token,
                  school_name: decoded['school_name']
                });
              } else {
                _this1.alert.error(res.message);
              }
            }); // }
          }
        }, {
          key: "updateSessionDatas",
          value: function updateSessionDatas(user) {
            var sessionData = new _models_usersession__WEBPACK_IMPORTED_MODULE_5__.UserSession();
            var decodedToken = (0, jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(user.records.token);
            sessionData.authToken = user.access_token;
            sessionData.usertype = decodedToken['usertype'];
            sessionData.username = decodedToken['username'];
            sessionData.user_id = decodedToken['user_id'];
            sessionData.emis_username = decodedToken['emis_username'];
            sessionData.emis_user_id = decodedToken['emis_user_id'];
            sessionData.emis_usertype = decodedToken['emis_usertype'];
            sessionData.emis_usertype1 = decodedToken['emis_usertype1'];
            sessionData.teacher_name = decodedToken['teacher_name'];
            sessionData.udise_code = decodedToken['udise_code'];
            sessionData.district_id = decodedToken['district_id'];
            sessionData.dist_id = decodedToken['dist_id'];
            sessionData.tamil_name = decodedToken['tamil_name'];
            sessionData.school_name = decodedToken['school_name'];
            sessionData.block_id = decodedToken['block_id'];
            sessionData.teacher_type = decodedToken['teacher_type'];
            sessionData.school_key_id = decodedToken['school_key_id'];
            sessionData.teacher_id = decodedToken['teacher_id'];
            sessionData.type_teacher = decodedToken['type_teacher'];
            sessionData.subjects = decodedToken['subjects'];
            sessionData.mod1 = decodedToken['mod1'];
            sessionData.rsa_school_id = decodedToken['rsa_school_id'];
            sessionData.newschl = decodedToken['newschl'];
            sessionData.name = decodedToken['name'];
            sessionData.mht_block_id = decodedToken['mht_block_id'];
            sessionData.catty_id = decodedToken['catty_id'];
            sessionData.BlkdId = decodedToken['BlkdId'];
            sessionData.iat = decodedToken['iat'];
            return sessionData;
          }
        }, {
          key: "clearCachedMenu",
          value: function clearCachedMenu() {
            this.dataService.clearCache();
          }
        }, {
          key: "clearSession",
          value: function clearSession() {
            this.userSessionService.destroy();
            this.clearCachedMenu();
          }
        }, {
          key: "appLogout",
          value: function appLogout() {
            this.clearCachedMenu();
            this.sqliteDB.removeDatabase();
            var userName = window.localStorage.getItem('username');
            var password = window.localStorage.getItem('password');
            window.localStorage.clear();
            window.localStorage.setItem('username', userName);
            window.localStorage.setItem('password', password);
            this.userSessionService.destroy();
            this.storage.clear();
            this.router.navigate(['/login']);
          }
        }, {
          key: "getTokenDetails",
          value: function getTokenDetails() {
            var value = this.userSessionService.authToken();
            var decoded_token;

            if (value) {
              decoded_token = (0, jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
            }

            return decoded_token;
          }
        }]);
      }();

      _AuthenticationService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
        }, {
          type: _usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_9__.IonicStorageService
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
        }, {
          type: _sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__.SqlitedatabaseService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage
        }];
      };

      _AuthenticationService = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)()], _AuthenticationService);
      /***/
    },

    /***/
    27952:
    /*!**********************************************!*\
      !*** ./src/app/services/autosync.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AutosyncService": function AutosyncService() {
          return (
            /* binding */
            _AutosyncService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _emis_emis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./emis/emis.service */
      71660);
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert.service */
      25970);
      /* harmony import */


      var _network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./network-service */
      34442);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);

      var _AutosyncService = /*#__PURE__*/function () {
        function AutosyncService(http, sqlLite, geolocation, emisService, alertService, networkService) {
          _classCallCheck(this, AutosyncService);

          this.http = http;
          this.sqlLite = sqlLite;
          this.geolocation = geolocation;
          this.emisService = emisService;
          this.alertService = alertService;
          this.networkService = networkService;
        }

        return _createClass(AutosyncService, [{
          key: "OlirrumVagupparai",
          value: //Please dont touch under OlirrumVagupparai, contact abdul
          function OlirrumVagupparai() {
            var _this10 = this;

            var query = 'SELECT * FROM OlirumVaguparai WHERE Status = 2';
            this.sqlLite.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var schoolList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  schoolList.push(data.rows.item(i));
                }

                console.log("schoolList", schoolList);

                _this10.getGeolocation();

                var _loop = function _loop(_i) {
                  if (+schoolList[_i].PhotoStatus1 == 2) {
                    if (schoolList[_i].PhotoUpload1) {
                      var imgObj = {
                        "Photo": schoolList[_i].PhotoUpload1,
                        "PhotoName": schoolList[_i].PhotoUploadName1
                      };

                      _this10.SyncImage(1, imgObj, schoolList[_i].SclId, schoolList[_i].Udise);

                      schoolList[_i].PhotoStatus1 == "3";
                    }
                  }

                  if (+schoolList[_i].PhotoStatus2 == 2) {
                    if (schoolList[_i].PhotoUpload2) {
                      var _imgObj = {
                        "Photo": schoolList[_i].PhotoUpload2,
                        "PhotoName": schoolList[_i].PhotoUploadName2
                      };

                      _this10.SyncImage(2, _imgObj, schoolList[_i].SclId, schoolList[_i].Udise);

                      schoolList[_i].PhotoStatus2 == "3";
                    }
                  }

                  if (+schoolList[_i].PhotoStatus3 == 2) {
                    if (schoolList[_i].PhotoUpload3) {
                      var _imgObj2 = {
                        "Photo": schoolList[_i].PhotoUpload3,
                        "PhotoName": schoolList[_i].PhotoUploadName3
                      };

                      _this10.SyncImage(3, _imgObj2, schoolList[_i].SclId, schoolList[_i].Udise);

                      schoolList[_i].PhotoStatus3 == "3";
                    }
                  }

                  var finalArr = [];
                  var obj = {
                    // "IndexId": (this.getIndexId == undefined && this.getIndexId == null) ? "" : this.getIndexId,
                    "IndexId": "",
                    "SchlId": schoolList[_i].SclId,
                    "ObservedBy": schoolList[_i].EmisUsername,
                    "BeforePaint": schoolList[_i].PhotoUploadName1,
                    "PaintOnProcess": schoolList[_i].PhotoUploadName2,
                    "AfterPaint": schoolList[_i].PhotoUploadName3,
                    "Remarks": schoolList[_i].Remarks,
                    "Latitude": schoolList[_i].Latitude == undefined || schoolList[_i].Latitude == null || schoolList[_i].Latitude == "" ? _this10.offlinelat : schoolList[_i].Latitude,
                    "Longitude": schoolList[_i].Longitude == undefined || schoolList[_i].Longitude == null || schoolList[_i].Longitude == "" ? _this10.offlinelone : schoolList[_i].Longitude
                  };
                  finalArr.push(obj);
                  var aruData = {
                    "records": finalArr
                  };

                  _this10.emisService.PPOlirumVagupari(aruData).subscribe(function (res) {
                    if (res.dataStatus) {
                      schoolList[_i].Status = "3";

                      var _query = 'UPDATE OlirumVaguparai SET Status = 3 WHERE OlirumVaguparai.SclId = "' + schoolList[_i].SclId + '" And OlirumVaguparai.Udise = "' + schoolList[_i].Udise + '"';

                      _this10.sqlLite.update(_query).then(function (data) {
                        _this10.alertService.success(res.message);
                      });
                    }
                  });
                };

                for (var _i = 0; _i < schoolList.length; _i++) {
                  _loop(_i);
                }
              }
            });
          }
        }, {
          key: "SyncImage",
          value: function SyncImage(id, imgObj, SclId, Udise) {
            var _this11 = this;

            var s3ImgObj = {
              "records": imgObj
            };
            this.emisService.S3ImageSave(s3ImgObj).subscribe(function (res) {
              if (res.status == 200 && res.dataStatus == true) {
                if (id == 1) {
                  var query = 'UPDATE OlirumVaguparai SET PhotoStatus1 = 3,PhotoUpload1 ="' + imgObj.Photo + '", PhotoUploadName1 ="' + imgObj.PhotoName + '"' + 'WHERE OlirumVaguparai.SclId = "' + SclId + '" And OlirumVaguparai.Udise = "' + Udise + '"';
                  return _this11.sqlLite.update(query).then(function (data) {// this.alertService.success('File Uploaded Successfully');
                  });
                }

                if (id == 2) {
                  var _query2 = 'UPDATE OlirumVaguparai SET PhotoStatus2 = 3, PhotoUpload2 ="' + imgObj.Photo + '", PhotoUploadName2 ="' + imgObj.PhotoName + '" ' + 'WHERE OlirumVaguparai.SclId = "' + SclId + '" And OlirumVaguparai.Udise = "' + Udise + '"';

                  return _this11.sqlLite.update(_query2).then(function (data) {// this.alertService.success('File Uploaded Successfully');
                  });
                }

                if (id == 3) {
                  var _query3 = 'UPDATE OlirumVaguparai SET PhotoStatus3 = 3, PhotoUpload3 ="' + imgObj.Photo + '", PhotoUploadName3 ="' + imgObj.PhotoName + '" ' + 'WHERE OlirumVaguparai.SclId = "' + SclId + '" And OlirumVaguparai.Udise = "' + Udise + '"';

                  return _this11.sqlLite.update(_query3).then(function (data) {// this.alertService.success('File Uploaded Successfully');
                  });
                } // this.alertService.success('File Uploaded Successfully');

              }
            });
          }
        }, {
          key: "getGeolocation",
          value: function getGeolocation() {
            var _this12 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              // resp.coords.latitude and resp.coords.longitude are the latitude and longitude values
              var latitude = resp.coords.latitude;
              var longitude = resp.coords.longitude;
              _this12.offlinelat = latitude;
              _this12.offlinelone = longitude; // Now you can use latitude and longitude as needed
            })["catch"](function (error) {
              console.error('Error getting location', error);
            });
          }
        }, {
          key: "GisLocation",
          value: function GisLocation() {
            var _this13 = this;

            var query = 'SELECT * FROM gisLocation WHERE status = 2';
            this.sqlLite.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var locationList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  locationList.push(data.rows.item(i));
                } // console.log("locationList",locationList);


                _this13.getGeolocation();

                var _loop2 = function _loop2(_i2) {
                  var base = locationList[_i2].photo.split('base64,');

                  var imgObj = {
                    "Photo": base[1],
                    "PhotoName": locationList[_i2].photoName
                  };

                  _this13.SyncImageLocation(imgObj);

                  var finalArr = [];
                  var obj = {
                    "id": "",
                    "school_id": locationList[_i2].schoolid,
                    "udise_code": locationList[_i2].udiseCode,
                    "gis_photo": locationList[_i2].photoName,
                    "latitude": locationList[_i2].latitute ? locationList[_i2].latitute : _this13.offlinelat,
                    "longitude": locationList[_i2].longitute ? locationList[_i2].longitute : _this13.offlinelone,
                    "creation_user": locationList[_i2].emis_username
                  };
                  finalArr.push(obj);
                  var aruData = {
                    "records": finalArr
                  };

                  _this13.emisService.PPOlirumVagupari(aruData).subscribe(function (res) {
                    if (res.dataStatus) {
                      locationList[_i2].status = "3";

                      var _query4 = 'UPDATE gisLocation SET status = 3 WHERE gisLocation.emis_username = "' + locationList[_i2].emis_username + '"';

                      _this13.sqlLite.update(_query4).then(function (data) {
                        _this13.alertService.success(res.message);
                      });
                    }
                  });
                };

                for (var _i2 = 0; _i2 < locationList.length; _i2++) {
                  _loop2(_i2);
                }
              }
            });
          }
        }, {
          key: "SyncImageLocation",
          value: function SyncImageLocation(imgObj) {
            var s3ImgObj = {
              "records": imgObj
            };
            this.emisService.S3ImageSave(s3ImgObj).subscribe(function (res) {
              if (res.status == 200 && res.dataStatus == true) {// this.alertService.success('File Uploaded Successfully');
              }
            });
          }
        }]);
      }();

      _AutosyncService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_0__.SqlitedatabaseService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation
        }, {
          type: _emis_emis_service__WEBPACK_IMPORTED_MODULE_1__.EmisService
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _network_service__WEBPACK_IMPORTED_MODULE_3__.NetworkService
        }];
      };

      _AutosyncService = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
      })], _AutosyncService);
      /***/
    },

    /***/
    20210:
    /*!******************************************!*\
      !*** ./src/app/services/cwsn.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CWSNService": function CWSNService() {
          return (
            /* binding */
            _CWSNService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert.service */
      25970);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data.service */
      52468);
      /* harmony import */


      var _sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./usersession.service */
      64461);
      /* harmony import */


      var _network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./network-service */
      34442);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/api.service */
      5830);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      37961);

      var _CWSNService = /*#__PURE__*/function () {
        function CWSNService(dataService, sqliteDB, pdfGenerator, alertService, userSessionService, networkService, apiService, http) {
          _classCallCheck(this, CWSNService);

          this.dataService = dataService;
          this.sqliteDB = sqliteDB;
          this.pdfGenerator = pdfGenerator;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.networkService = networkService;
          this.apiService = apiService;
          this.http = http;
          this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl;
          this.emisApiUrl1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl1;
          this.emisApiUrlJango1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrlJango1;
        }

        return _createClass(CWSNService, [{
          key: "getSplEducatorProfile",
          value: function getSplEducatorProfile(UserId) {
            return this.dataService.getData(this.emisApiUrl + "/GetCWSNProfile?UserId=" + UserId, true);
          }
        }, {
          key: "getStudentDetails",
          value: function getStudentDetails(school_id, StuId) {
            return this.dataService.getData(this.emisApiUrl1 + "/schoolWiseStudentDetails?school_id=" + school_id + "&StuId=" + StuId, true);
          }
        }, {
          key: "getcwsnmenuenable",
          value: function getcwsnmenuenable(ids) {
            return this.dataService.getDJangoData("/getcwsnmenuenable?ids=" + ids, true);
          }
        }, {
          key: "get_approved_teacher_requests",
          value: function get_approved_teacher_requests(teacher_id) {
            return this.dataService.getDJangoData("/get_approved_teacher_requests?teacher_id=" + teacher_id, true);
          } // get_approved_teacher_requests(teacher_id) {
          //   return this.dataService.getDJangoData(
          //     this.emisApiUrl1 +
          //       "/get_approved_teacher_requests?teacher_id=" +
          //       teacher_id,
          //     true,
          //   );
          // }

        }, {
          key: "getSchoolList",
          value: function getSchoolList(school_id) {
            return this.dataService.getData(this.emisApiUrl + "/GetCWSNStudList?SchlID=" + school_id, true);
          }
        }, {
          key: "getClusters",
          value: function getClusters() {
            return this.dataService.getData(this.emisApiUrl + "/GetSchlCluster", true);
          }
        }, {
          key: "getClustersBasedSchoolList",
          value: function getClustersBasedSchoolList(zoneId) {
            return this.dataService.getData(this.emisApiUrl + "/GetTotSchlCountCwsn?ZoneId=" + zoneId, true);
          }
        }, {
          key: "getSchoolInfo",
          value: function getSchoolInfo(schlId) {
            return this.dataService.getData(this.emisApiUrl + "/GetClsListCwsn?SchlId=" + schlId, true);
          }
        }, {
          key: "getSectionInfo",
          value: function getSectionInfo(schl_id, class_id) {
            return this.dataService.getData(this.emisApiUrl + "/SecSchlId?SchlId=" + schl_id + "&Cls=" + class_id, true);
          }
        }, {
          key: "getStudentsList",
          value: function getStudentsList(schl_id, class_id, sec_id) {
            return this.dataService.getData(this.emisApiUrl + "/GetStuListCwsn?SchlId=" + schl_id + "&Cls=" + class_id + "&Sec=" + sec_id, true);
          }
        }, {
          key: "getEachStudentDetails",
          value: function getEachStudentDetails(student_id, SchlId) {
            return this.dataService.getData(this.emisApiUrl + "/GetStuDetGetCwsn?StuId=" + student_id + "&SchlId=" + SchlId, true);
          }
        }, {
          key: "addIdentifyCwsnStudent",
          value: function addIdentifyCwsnStudent(data) {
            return this.dataService.post(this.emisApiUrl + "/AddStuCwsnCUD", data);
          }
        }, {
          key: "addNidandUdidNumbers",
          value: function addNidandUdidNumbers(data) {
            return this.dataService.post(this.emisApiUrl + "/UpdaNidUid", data);
          }
        }, {
          key: "cwsnPostScreenQues",
          value: function cwsnPostScreenQues(data) {
            return this.dataService.post(this.emisApiUrl + "/CwsnScrCUD", data);
          }
        }, {
          key: "getCwsnQues",
          value: function getCwsnQues(data) {
            return this.dataService.getData(this.emisApiUrl + "/CwsnScrGet?StuId=" + data, true);
          }
        }, {
          key: "getCwsnClass",
          value: function getCwsnClass(schlId) {
            return this.dataService.getData(this.emisApiUrl + "/ClsSecBySchlId?SchlId=" + schlId, true);
          }
        }, {
          key: "GetRefStudDetil",
          value: function GetRefStudDetil(StudId) {
            return this.dataService.getData(this.emisApiUrl + "/GetRefStudDetil?StudId=" + StudId, true);
          }
        }, {
          key: "getCWSNStudentInfo",
          value: function getCWSNStudentInfo(schlId) {
            return this.dataService.getData(this.emisApiUrl + "/CwsnNewGet?SchlId=" + schlId, true);
          }
        }, {
          key: "FindSplEdu_Therpst",
          value: function FindSplEdu_Therpst(userId) {
            return this.dataService.getData(this.emisApiUrl + "/FindSplEdu_Therpst?UserId=" + userId, true);
          }
        }, {
          key: "changeMode",
          value: function changeMode(mode) {
            var primaryVal = document.documentElement.style.getPropertyValue("--primary-color");
            console.log("primaryVal", primaryVal);

            if (primaryVal == "#8B67B3" || mode == "LightMode") {
              // for dark mode
              document.documentElement.style.setProperty("--primary-color", "#000000");
              document.documentElement.style.setProperty("--primary-lite-color", "#000000");
              document.documentElement.style.setProperty("--seconday-color-change", "#000000");
              document.documentElement.style.setProperty("--primary-text-color", "#ffffff");
              document.documentElement.style.setProperty("--text-color-black", "#ffffff");
              document.documentElement.style.setProperty("--border-color-left", "#ffffff");
              document.documentElement.style.setProperty("--icon-color", "#ffffff");
              document.documentElement.style.setProperty("--input-border", "#ffffff");
              document.documentElement.style.setProperty("--unscreened-text-color", "#fefe62");
              document.documentElement.style.setProperty("--screened-text-color", "#00ff00");
              document.documentElement.style.setProperty("--no-students-color", "#000000"); //00ff00 blue color

              document.documentElement.style.setProperty("--vertical-line-header", "#D46588"); //#D46588 pink

              document.documentElement.style.setProperty("--local-border-color", "#ffffff"); //yellow

              document.documentElement.style.setProperty("--screen-border-color", "#ffffff"); //green

              return "DarkMode";
            } else {
              // for light mode
              document.documentElement.style.setProperty("--primary-color", "#8B67B3");
              document.documentElement.style.setProperty("--primary-lite-color", "#EAD6FF");
              document.documentElement.style.setProperty("--seconday-color-change", "#ffffff");
              document.documentElement.style.setProperty("--primary-text-color", "#4c4a4a");
              document.documentElement.style.setProperty("--text-color-black", "#000000");
              document.documentElement.style.setProperty("--border-color-left", "#b14fdc");
              document.documentElement.style.setProperty("--icon-color", "#8B67B3");
              document.documentElement.style.setProperty("--input-border", "#ca6ff3");
              document.documentElement.style.setProperty("--unscreened-text-color", "#e89f68");
              document.documentElement.style.setProperty("--screened-text-color", "#04c03d");
              document.documentElement.style.setProperty("--no-students-color", "#4c4a4a");
              document.documentElement.style.setProperty("--disabled-input-background", "#E9E9E9");
              document.documentElement.style.setProperty("--vertical-line-header", "purple"); //purple color

              document.documentElement.style.setProperty("--local-border-color", "#d6752b"); //yellow

              document.documentElement.style.setProperty("--screen-border-color", "#076B26"); //green

              if (primaryVal == "") {
                this.changeMode(mode);
              }

              return "LightMode";
            }
          }
        }, {
          key: "trackingQues",
          value: function trackingQues(data) {
            return this.dataService.post(this.emisApiUrl + "/CwsnTrackSave", data);
          }
        }, {
          key: "CWSNQues",
          value: function CWSNQues(data) {
            return this.dataService.post(this.emisApiUrl + "/CwsnTrackSave", data);
          }
        }, {
          key: "CWSNResponseStore",
          value: function CWSNResponseStore(data) {
            return this.dataService.post(this.emisApiUrl + "/CWSNResponseStore", data);
          }
        }, {
          key: "CWSNgetQues",
          value: function CWSNgetQues(data) {
            return this.dataService.post(this.emisApiUrl + "/CWSNResponseFetch", data);
          }
        }, {
          key: "getStudetails",
          value: function getStudetails(schlId) {
            return this.dataService.getData(this.emisApiUrl + "/CwsnTrackStudList?SchlId=" + schlId, true);
          }
        }, {
          key: "CwsnNewGet",
          value: function CwsnNewGet(SchlId) {
            return this.dataService.getData(this.emisApiUrl + "/CwsnNewGet?SchlId=" + SchlId, true);
          }
        }, {
          key: "CwsnMarkAttendRemove",
          value: function CwsnMarkAttendRemove(data) {
            return this.dataService.post(this.emisApiUrl + "/CwsnMarkAttendRemove", data);
          }
        }, {
          key: "CwsnAttendDate",
          value: function CwsnAttendDate(userId, fmDate, toDate) {
            return this.dataService.getData(this.emisApiUrl + "/CwsnAttendDate?userId=" + userId + "&fmDate=" + fmDate + "&toDate=" + toDate, true);
          }
        }, {
          key: "cwsnP1Post",
          value: function cwsnP1Post(type, SchlId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee13() {
              var _this14 = this;

              var query1, addStdPost, NidUidDetailsP;
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.n) {
                  case 0:
                    console.log("cwsnP1Post", type, "SchlId", SchlId);
                    query1 = "SELECT * FROM cwsn_add_std_post";
                    addStdPost = [];
                    NidUidDetailsP = [];
                    this.networkService.initializeNetworkEvents();

                    if (!(this.networkService.getCurrentNetworkStatus() == 0)) {
                      _context13.n = 1;
                      break;
                    }

                    _context13.n = 1;
                    return this.sqliteDB.executeQuery(query1).then(function (res1) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee12() {
                        var _this15 = this;

                        var query2;
                        return _regenerator().w(function (_context12) {
                          while (1) switch (_context12.n) {
                            case 0:
                              addStdPost = this.postParse(res1.rows, ["StuId", "DifferAbled"]); // ==============nidUid post===============

                              query2 = "SELECT * FROM cwsn_student_list";
                              _context12.n = 1;
                              return this.sqliteDB.executeQuery(query2).then(function (res2) {
                                return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee11() {
                                  var _this16 = this;

                                  var query3;
                                  return _regenerator().w(function (_context11) {
                                    while (1) switch (_context11.n) {
                                      case 0:
                                        NidUidDetailsP = this.postParse(res2.rows, ["nid", "udid", "IndexId", "StuId"]);
                                        query3 = "select * from cwsn_student_list a" + " join cwsn_screen_ques b on a.StuId = b.StuId" + " where a.scrSts_Local = 2";
                                        _context11.n = 1;
                                        return this.sqliteDB.executeQuery(query3).then(function (res3) {
                                          return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this16, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
                                            var _this17 = this;

                                            var obj;
                                            return _regenerator().w(function (_context10) {
                                              while (1) switch (_context10.n) {
                                                case 0:
                                                  obj = {
                                                    findCwsnStudent: addStdPost,
                                                    NidUidDetails: NidUidDetailsP,
                                                    CwsnScreening: this.parseScreenQues(res3.rows)
                                                  };

                                                  if (!(obj.findCwsnStudent.length > 0 || obj.NidUidDetails.length > 0 || obj.CwsnScreening.length > 0)) {
                                                    _context10.n = 2;
                                                    break;
                                                  }

                                                  _context10.n = 1;
                                                  return this.dataService.post(this.emisApiUrl + "/CwsnNewSave", obj).subscribe(function (res) {
                                                    return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this17, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
                                                      return _regenerator().w(function (_context1) {
                                                        while (1) switch (_context1.n) {
                                                          case 0:
                                                            if (res.dataStatus) {
                                                              if (type == "uncheck") {
                                                                this.uncheck_delete(SchlId);
                                                              } else {
                                                                console.log("load");
                                                                this.updateAddStd();

                                                                if (res.NidIds) {
                                                                  this.updateNidUidStds(res.NidIds);
                                                                } else {
                                                                  this.updateNidUidStds(NidUidDetailsP);
                                                                }

                                                                this.updateScrnStd();
                                                              }
                                                            } else {
                                                              this.alertService.warning(res.message);
                                                            }

                                                          case 1:
                                                            return _context1.a(2);
                                                        }
                                                      }, _callee1, this);
                                                    }));
                                                  });

                                                case 1:
                                                  _context10.n = 3;
                                                  break;

                                                case 2:
                                                  if (type == "uncheck") {
                                                    this.uncheck_delete(SchlId);
                                                  }

                                                case 3:
                                                  return _context10.a(2);
                                              }
                                            }, _callee10, this);
                                          }));
                                        });

                                      case 1:
                                        return _context11.a(2);
                                    }
                                  }, _callee11, this);
                                }));
                              });

                            case 1:
                              return _context12.a(2);
                          }
                        }, _callee12, this);
                      }));
                    });

                  case 1:
                    return _context13.a(2);
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "uncheck_delete",
          value: function uncheck_delete(SchlId) {
            console.log("inside uncheck");
            var cwsnstudelQry = "DELETE FROM cwsn_student_list where school_key_id=" + SchlId + "";
            this.sqliteDB.executeQuery(cwsnstudelQry).then(function (res) {});
            var cwsnclsdelQry = "DELETE FROM cwsn_class_list where school_key_id=" + SchlId + "";
            this.sqliteDB.executeQuery(cwsnclsdelQry).then(function (res) {});
            var cwsnsecdelQry = "DELETE FROM cwsn_sec_list where school_key_id=" + SchlId + "";
            this.sqliteDB.executeQuery(cwsnsecdelQry).then(function (res) {});
            var allclsdelQry = "DELETE FROM AllClasslist where SchlD=" + SchlId + "";
            this.sqliteDB.executeQuery(allclsdelQry).then(function (res) {});
            var allstudelQry = "DELETE FROM Student_List where SchlD=" + SchlId + "";
            this.sqliteDB.executeQuery(allstudelQry).then(function (res) {});
            var healthQuesStdsDel = "DELETE FROM health_screen_ques" + ' WHERE school_key_id = "' + SchlId + '"';
            this.sqliteDB.executeQuery(healthQuesStdsDel).then(function (res) {});
            var healthScrnDel = "DELETE FROM health_screen_ques" + ' WHERE school_key_id = "' + SchlId + '"';
            this.sqliteDB.update(healthScrnDel).then(function (res) {});
          }
        }, {
          key: "postParse",
          value: function postParse(list, neededCols) {
            var temp = [];

            var _loop3 = function _loop3() {
              var data = list.item(i); // console.log(data,data.isPost);

              if (data.isPost == 2) {
                var obj = {};
                neededCols.forEach(function (cols) {
                  obj[cols] = data[cols];
                });
                temp.push(obj);
              }
            };

            for (var i = 0; i < list.length; i++) {
              _loop3();
            }

            return temp;
          }
        }, {
          key: "updateNidUidStds",
          value: function updateNidUidStds(list) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee15() {
              var _this18 = this;

              return _regenerator().w(function (_context15) {
                while (1) switch (_context15.n) {
                  case 0:
                    list.forEach(function (element) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this18, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee14() {
                        var query;
                        return _regenerator().w(function (_context14) {
                          while (1) switch (_context14.n) {
                            case 0:
                              query = 'UPDATE cwsn_student_list SET IndexId="' + element.IndexId + '",isPost="' + 1 + '"' + 'WHERE StuId = "' + element.StuId + '"';
                              _context14.n = 1;
                              return this.sqliteDB.update(query).then(function (insertres) {
                                console.log("updated successfully");
                              });

                            case 1:
                              return _context14.a(2);
                          }
                        }, _callee14, this);
                      }));
                    });

                  case 1:
                    return _context15.a(2);
                }
              }, _callee15);
            }));
          }
        }, {
          key: "updateAddStd",
          value: function updateAddStd() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee16() {
              var query1;
              return _regenerator().w(function (_context16) {
                while (1) switch (_context16.n) {
                  case 0:
                    query1 = 'UPDATE cwsn_add_std_post SET isPost="' + 1 + '"';
                    _context16.n = 1;
                    return this.sqliteDB.update(query1).then(function (res) {
                      console.log("updated", res);
                    });

                  case 1:
                    return _context16.a(2);
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "updateScrnStd",
          value: function updateScrnStd() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee17() {
              var query;
              return _regenerator().w(function (_context17) {
                while (1) switch (_context17.n) {
                  case 0:
                    query = 'UPDATE cwsn_student_list SET scrSts_Local="' + 3 + '"' + "WHERE scrSts_Local = 2";
                    _context17.n = 1;
                    return this.sqliteDB.update(query).then(function (res) {
                      console.log("updated", res);
                    });

                  case 1:
                    return _context17.a(2);
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "parseScreenQues",
          value: function parseScreenQues(list) {
            var _this19 = this;

            var temp = [];

            for (var i = 0; i < list.length; i++) {
              temp.push(list.item(i));
            }

            var stdIds = _toConsumableArray(new Map(temp.map(function (item) {
              return [item["StuId"], item];
            })).values());

            var finalVal = [];
            var newDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format("YYYY-MM-DD");

            var _loop4 = function _loop4(_i3) {
              var screnAns = temp.filter(function (obj) {
                return obj.StuId == stdIds[_i3].StuId;
              });
              var ans = [];
              screnAns.filter(function (obj) {
                var obj1 = {};
                ["IndxID", "Qid", "ResChar", "isactive"].forEach(function (cols) {
                  obj1[cols] = obj[cols];
                });
                ans.push(obj1);
              });
              var stdDetsils = {
                IndxID: null,
                SchlId: screnAns[0].school_key_id,
                ScrenDate: newDate,
                Status: 1,
                StuId: screnAns[0].StuId,
                Refer: screnAns[0].refer_to == "false" || !screnAns[0].refer_to ? "" : screnAns[0].refer_to,
                userName: _this19.userSessionService.emis_username(),
                disabiTypes: screnAns[0].disabi_types,
                CwsnScreeningDetails: ans
              };
              finalVal.push(stdDetsils);
            };

            for (var _i3 = 0; _i3 < stdIds.length; _i3++) {
              _loop4(_i3);
            }

            return finalVal;
          }
        }, {
          key: "loadHealthRes",
          value: function loadHealthRes(schId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee18() {
              var _this20 = this;

              var query;
              return _regenerator().w(function (_context18) {
                while (1) switch (_context18.n) {
                  case 0:
                    query = "SELECT * FROM health_screen_ques" + ' WHERE school_key_id = "' + schId + '"';
                    debugger;
                    _context18.n = 1;
                    return this.sqliteDB.update(query).then(function (res) {
                      if (!(res.rows.length > 0)) {
                        var health_refer_res = "https://d1wpyxz35bzzz4.cloudfront.net/health_json/student_refer_health_cwsn_schl_wise_" + schId + ".json";

                        _this20.http.get(health_refer_res).subscribe(function (res2) {
                          var sqlArray = [];
                          res2.forEach(function (element) {
                            sqlArray.push(["INSERT INTO health_screen_ques VALUES (?,?,?,?,?,?)", [null, schId, element.StuId, element.Qid, element.ResChar, 1]]);
                          });

                          _this20.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {});
                        });
                      }
                    });

                  case 1:
                    return _context18.a(2);
                }
              }, _callee18, this);
            }));
          } // CWSN Phase II

        }, {
          key: "getStudAssDetails",
          value: function getStudAssDetails(userId, studId) {
            // http://13.232.216.80/emis4APICode/api/GetStudFuncAssessDet?TchrId=20778213&StudId=24509610&DomainId=2
            return this.dataService.getData(this.emisApiUrl + "/GetStudFuncAssessDet?TchrId=" + userId + "&StudId=" + studId, true);
          }
        }, {
          key: "getCwsnSchool",
          value: function getCwsnSchool(data) {
            return this.dataService.post(this.emisApiUrl + "/getSchoolMapping", data);
          } // CWSN Phase II

        }, {
          key: "getStudAssDomainDetails",
          value: function getStudAssDomainDetails(userId, studId, domainId) {
            // http://13.232.216.80/emis4APICode/api/GetStudFuncAssessDet?TchrId=20778213&StudId=24509610&DomainId=2
            return this.dataService.getData(this.emisApiUrl + "/GetStudFuncAssessDomainDet?TchrId=" + userId + "&StudId=" + studId + "&DomainId=" + domainId, true);
          }
        }, {
          key: "GetStudFuncAssess",
          value: function GetStudFuncAssess(userId, schlId) {
            console.log("GetStudFuncAssess", schlId);
            return this.dataService.getData(this.emisApiUrl + "/GetStudFuncAssess?TchrId=" + userId + "&SchlId=" + schlId, true);
          }
        }, {
          key: "GetStudFuncAssessNew",
          value: function GetStudFuncAssessNew(userId, schlId) {
            console.log("GetStudFuncAssess", schlId);
            return this.dataService.getData(this.emisApiUrl + "/GetStudFuncAssessnew?TchrId=" + userId + "&SchlId=" + schlId, true);
          } // CWSN Phase II

        }, {
          key: "getStudInterventionDetails",
          value: function getStudInterventionDetails(userId, studId) {
            return this.dataService.getData(this.emisApiUrl + "/CwsnEvolRespGetPhaseTwo?UserId=" + userId + "&StudId=" + studId, true);
          }
        }, {
          key: "saveStudFuncAssessDetails",
          value: function saveStudFuncAssessDetails(data) {
            return this.dataService.post(this.emisApiUrl + "/saveStudFuncAssessDetails", data);
          }
        }, {
          key: "saveStudInterventionDetails",
          value: function saveStudInterventionDetails(data) {
            return this.dataService.post(this.emisApiUrl + "/CwsnEvolResponsePhaseTwo", data);
          }
        }, {
          key: "getIeAndSchList",
          value: function getIeAndSchList(userId, type, block_id) {
            return this.dataService.getData(this.emisApiUrl + "/getIeAndSchList?userId=" + userId + "&type=" + type + "&block_id=" + block_id, true);
          }
        }, {
          key: "getCwsnMarkAtten",
          value: function getCwsnMarkAtten(userId) {
            return this.dataService.getData(this.emisApiUrl + "/getCwsnMarkAtten?userId=" + userId, true);
          }
        }, {
          key: "cwsnMarkAttenCud",
          value: function cwsnMarkAttenCud(data) {
            return this.dataService.post(this.emisApiUrl + "/cwsnMarkAttenCud", data);
          }
        }, {
          key: "generatePdf",
          value: function generatePdf(id) {
            console.log("id", id);
            this.content = document.getElementById(id).innerHTML;
            var options = {
              documentSize: "A4",
              type: "share",
              // landscape: 'portrait',
              fileName: "buspass_chellan.pdf"
            };
            this.pdfGenerator.fromData(this.content, options).then(function (base64) {
              console.log("OK", base64);
            })["catch"](function (error) {
              console.log("error", error);
            });
          }
        }, {
          key: "cwsn_asses_ques",
          value: function cwsn_asses_ques() {
            var _this21 = this;

            var query = "SELECT * FROM fun_assessment_qstns";
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (!(res.rows.length > 0)) {
                var assessment_json = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cwsn_asses_ques;

                _this21.http.get(assessment_json).subscribe(function (data) {
                  if (data.cwsn_asses_ques.length > 0) {
                    _this21.insertData(data.cwsn_asses_ques);
                  } else {
                    _this21.alertService.warning("No Schools Found");
                  }
                });
              }
            });
          }
        }, {
          key: "insertData",
          value: function insertData(list) {
            var _this22 = this;

            var sqlArray = [];
            list.forEach(function (element) {
              element.screen = 0;
              debugger;
              sqlArray.push(["INSERT INTO fun_assessment_qstns VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, _this22.userSessionService.emis_username(), element.user, 1, "", element.domain_idx_id, element.domain_name, element.subdomain_idx_id, element.sub_domain, element.q_id, element.q_format, element.q_text_eng, element.q_text_tam, element.choice_id, element.option_type, element.choice_text_eng, element.choice_text_tam, element.q_status, element.disability_type, element.question_intervension, element.choice_intervension]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              console.log("fun_assessment_qstns inserted");
            });
          }
        }, {
          key: "pdfDownloadLog",
          value: function pdfDownloadLog(data) {
            return this.dataService.post(this.emisApiUrl + "/pdfDownloadLog", data);
          }
        }, {
          key: "getschoolListall",
          value: function getschoolListall(userId) {
            return this.dataService.getData(this.emisApiUrl + "/getschoolListall?userId=" + userId, true);
          }
        }]);
      }();

      _CWSNService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }, {
          type: _sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_8__.PDFGenerator
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService
        }, {
          type: _usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: _network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }];
      };

      _CWSNService = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: "root"
      })], _CWSNService);
      /***/
    },

    /***/
    52468:
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/Rx */
      60056);
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.cache = {};
          this.emisApiUrlJango1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrlJango1;
        }

        return _createClass(DataService, [{
          key: "getData",
          value: function getData(route, refresh) {
            var _this23 = this;

            if (this.dataForRouteIsCached(route, refresh)) {
              return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__.Observable.of(this.cache[route]);
            } else {
              return this.http.get(route).map(function (response) {
                _this23.cache[route] = response;
                return response;
              });
            }
          }
        }, {
          key: "getDataWithParamsFiles",
          value: function getDataWithParamsFiles(route, params, refresh) {
            var _this24 = this;

            if (this.dataForRouteIsCached(route, refresh)) {
              return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__.Observable.of(this.cache[route]);
            } else {
              // no cached data or refresh requested
              return this.http.get(route, {
                params: params
              }).map(function (response) {
                _this24.cache[route] = response;
                return response;
              });
            }
          }
        }, {
          key: "post",
          value: function post(route, data) {
            var _this25 = this;

            return this.http.post(route, data).map(function (response) {
              _this25.cache[route] = response;
              return response;
            });
          }
        }, {
          key: "getRecord",
          value: function getRecord(route) {
            return this.http.get(route);
          }
        }, {
          key: "getDataWithParams",
          value: function getDataWithParams(route, params, refresh) {
            var _this26 = this;

            if (this.dataForRouteIsCached(route, refresh)) {
              return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__.Observable.of(this.cache[route]);
            } else {
              return this.http.get(route, {
                params: params
              }).map(function (response) {
                _this26.cache[route] = response;
                return response;
              });
            }
          }
        }, {
          key: "dataForRouteIsCached",
          value: function dataForRouteIsCached(route, refresh) {
            return this.cache[route] && (refresh === false || refresh === undefined);
          }
        }, {
          key: "clearCache",
          value: function clearCache() {
            this.cache = {};
          }
        }, {
          key: "clearRouteCache",
          value: function clearRouteCache(route) {
            this.cache[route] = null;
          }
        }, {
          key: "put",
          value: function put(route, data) {
            return this.http.put(route, data);
          }
        }, {
          key: "getFileWithParams",
          value: function getFileWithParams(route, params, refresh) {
            var _this27 = this;

            if (this.dataForRouteIsCached(route, refresh)) {
              return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__.Observable.of(this.cache[route]);
            } else {
              // no cached data or refresh requested
              return this.http.get(route, {
                params: params
              }).map(function (response) {
                _this27.cache[route] = response;
                return response;
              });
            }
          }
        }, {
          key: "getDJangoData",
          value: function getDJangoData(endpoint, refresh) {
            var _this28 = this;

            var url = "".concat(this.emisApiUrlJango1).concat(endpoint);

            if (this.dataForRouteIsCached(url, refresh)) {
              return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__.Observable.of(this.cache[url]);
            } else {
              return this.http.get(url).map(function (response) {
                _this28.cache[url] = response;
                return response;
              });
            }
          }
        }, {
          key: "postDJangoData",
          value: function postDJangoData(endpoint, data) {
            var _this29 = this;

            var url = "".concat(this.emisApiUrlJango1).concat(endpoint);
            return this.http.post(url, data).map(function (response) {
              _this29.cache[url] = response;
              return response;
            });
          }
        }]);
      }();

      _DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
        }];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], _DataService);
      /***/
    },

    /***/
    10293:
    /*!***********************************************!*\
      !*** ./src/app/services/diagnosis.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DiagnosisService": function DiagnosisService() {
          return (
            /* binding */
            _DiagnosisService
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


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/Observable */
      46056);
      /* harmony import */


      var rxjs_Observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      65792);

      var _DiagnosisService = /*#__PURE__*/function () {
        function DiagnosisService() {
          _classCallCheck(this, DiagnosisService);

          this.diagnoses = [{
            type: 'D1',
            value: '3',
            label: 'Neural tube defect'
          }, {
            type: 'D1',
            value: '4',
            label: 'Down syndrome'
          }, {
            type: 'D1',
            value: '5',
            label: 'Cleft Lip and Palate'
          }, {
            type: 'D1',
            value: '6',
            label: 'Club Foot'
          }, {
            type: 'D1',
            value: '7',
            label: 'Developmental dysplasia of the hip'
          }, {
            type: 'D1',
            value: '8',
            label: 'Congenital Deafness'
          }, {
            type: 'D1',
            value: '9',
            label: 'Congenital Heart Diseases'
          }, {
            type: 'D1',
            value: '10',
            label: 'Congenital Cataract'
          }, {
            type: 'D1',
            value: '11',
            label: 'Retinopathy  of Prematurity'
          }, {
            type: 'D2',
            value: '12',
            label: 'Anaemia'
          }, {
            type: 'D2',
            value: '13',
            label: 'Vitamin A deficiency (Bitot spot)'
          }, {
            type: 'D2',
            value: '14',
            label: 'Vitamin D Deficiency (Rickets)'
          }, {
            type: 'D2',
            value: '15',
            label: 'a. SAM'
          }, {
            type: 'D2',
            value: '16',
            label: 'b. Severe Thinning'
          }, {
            type: 'D2',
            value: '17',
            label: 'c. Obesity'
          }, {
            type: 'D2',
            value: '18',
            label: 'Goitre'
          }, {
            type: 'D1',
            value: '19',
            label: 'Congenital Hypothyroidism'
          }, {
            type: 'D3',
            value: '20',
            label: 'Type 1 Diabetes Mellitus'
          }, {
            type: 'D3',
            value: '21',
            label: 'Skin conditions'
          }, {
            type: 'D3',
            value: '22',
            label: 'a. Impetigo'
          }, {
            type: 'D3',
            value: '23',
            label: 'b. Pityriasis Versicolor'
          }, {
            type: 'D3',
            value: '24',
            label: 'c. Scabies'
          }, {
            type: 'D3',
            value: '25',
            label: 'd. Tinea'
          }, {
            type: 'D3',
            value: '26',
            label: 'Otitis Media'
          }, {
            type: 'D3',
            value: '27',
            label: 'Rheumatic heart disease'
          }, {
            type: 'D3',
            value: '28',
            label: 'Reactive airway disease'
          }, {
            type: 'D3',
            value: '29',
            label: 'Dental Conditions'
          }, {
            type: 'D3',
            value: '30',
            label: 'Dental Caries'
          }, {
            type: 'D3',
            value: '31',
            label: 'Gingivitis'
          }, {
            type: 'D3',
            value: '32',
            label: 'Convulsive disorders'
          }, {
            type: 'D4',
            value: '33',
            label: 'Vision impairment'
          }, {
            type: 'D4',
            value: '34',
            label: 'Hearing impairment'
          }, {
            type: 'D4',
            value: '35',
            label: 'Neuro motor impairment'
          }, {
            type: 'D4',
            value: '36',
            label: 'Motor delay'
          }, {
            type: 'D4',
            value: '37',
            label: 'Cognitive delay'
          }, {
            type: 'D4',
            value: '38',
            label: 'Language delay'
          }, {
            type: 'D4',
            value: '39',
            label: 'Behaviour disorder'
          }, {
            type: 'D4',
            value: '40',
            label: 'Attention Deficit Hyperactivity Disorder'
          }, {
            type: 'D3',
            value: '41',
            label: 'Leprosy'
          }, {
            type: 'Adolescent Health',
            value: '42',
            label: 'Growing up concerns'
          }, {
            type: 'Adolescent Health',
            value: '43',
            label: 'Substance abuse'
          }, {
            type: 'Adolescent Health',
            value: '44',
            label: 'Mental Health concerns'
          }, {
            type: 'D4',
            value: '45',
            label: 'Feels depressed'
          }, {
            type: 'Adolescent Health',
            value: '46',
            label: 'Delay in menstruation cycles'
          }, {
            type: 'Adolescent Health',
            value: '47',
            label: 'Irregular periods'
          }, {
            type: 'D3',
            value: '48',
            label: 'Pain or burning sensation while urinating'
          }, {
            type: 'D3',
            value: '49',
            label: 'Discharge/ foul smelling discharge from the genitor-urinary area'
          }, {
            type: 'Adolescent Health',
            value: '50',
            label: 'Pain during menstruation'
          }, {
            type: 'D3',
            value: '51',
            label: 'Tuberculosis'
          }, {
            type: 'Adolescent Health',
            value: '52',
            label: 'Others'
          }];
          this.tabletsPrescribed = [{
            value: '1',
            label: 'Vitamin-B Complex'
          }, {
            value: '2',
            label: 'Valproic Acid  (Sodium Valporate)'
          }, {
            value: '3',
            label: 'Diclofenac Sodium'
          }, {
            value: '4',
            label: 'Paracetamol Paediatric oral'
          }, {
            value: '5',
            label: 'Domperidone'
          }, {
            value: '6',
            label: 'Co-Trimoxazole oral'
          }, {
            value: '7',
            label: 'Thyroxine Sodium'
          }, {
            value: '8',
            label: 'Co-Trimoxazole Tab Ip'
          }, {
            value: '9',
            label: 'Amoxycillin Cap'
          }, {
            value: '10',
            label: 'Metronidazole Tab'
          }, {
            value: '11',
            label: 'Dexamethasone Tab'
          }, {
            value: '12',
            label: 'Theophylline And Etofylline'
          }, {
            value: '21',
            label: 'Acetaminophen'
          }, {
            value: '22',
            label: 'Ibuprofen'
          }, {
            value: '23',
            label: 'Ondansetron'
          }, {
            value: '24',
            label: 'Albendazole'
          }, {
            value: '25',
            label: 'Amoxicillin + Dicloxacillin'
          }, {
            value: '26',
            label: 'Ciprofloxacin Tab'
          }, {
            value: '27',
            label: 'Norfloxacin Tab'
          }, {
            value: '28',
            label: 'ORS powder'
          }, {
            value: '29',
            label: 'Normal Saline nasal drops'
          }, {
            value: '30',
            label: 'Salbutamol'
          }, {
            value: '31',
            label: 'Hydroxyzine'
          }, {
            value: '32',
            label: 'Ciprofloxacin eye drops'
          }, {
            value: '33',
            label: 'Permethrin Cream'
          }, {
            value: '34',
            label: 'Gamma Benzene hexachloride lotion'
          }, {
            value: '35',
            label: 'Fusidic acid cream/ointment'
          }, {
            value: '36',
            label: 'Miconazole cream/ointment'
          }, {
            value: '37',
            label: 'Hydrocortisone cream/gel/ointment'
          }, {
            value: '38',
            label: 'Clotrimazole oral lotion or gel'
          }, {
            value: '39',
            label: 'Cetrizine'
          }, {
            value: '40',
            label: 'Calcium with Vit D tab USP'
          }, {
            value: '41',
            label: 'Vit D: Cholecalciferol granules as satchets'
          }, {
            value: '42',
            label: 'Zinc Sulphate Tab'
          }, {
            value: '43',
            label: 'Vit A Syrup'
          }, {
            value: '44',
            label: 'Iron Folic acid'
          }, {
            value: '45',
            label: 'Others'
          }];
        }

        return _createClass(DiagnosisService, [{
          key: "getDiagnoses",
          value: function getDiagnoses(page, size) {
            var diagnoses = [];
            this.diagnoses.forEach(function (diagnosis) {
              diagnoses.push(diagnosis);
            });

            if (page && size) {
              diagnoses = diagnoses.slice((page - 1) * size, (page - 1) * size + size);
            }

            return diagnoses;
          }
        }, {
          key: "getTabletsPrescribed",
          value: function getTabletsPrescribed(page, size) {
            var tabletsPrescribed = [];
            this.tabletsPrescribed.forEach(function (diagnosis) {
              tabletsPrescribed.push(diagnosis);
            });

            if (page && size) {
              tabletsPrescribed = tabletsPrescribed.slice((page - 1) * size, (page - 1) * size + size);
            }

            return tabletsPrescribed;
          }
        }, {
          key: "getDiagnosesAsync",
          value: function getDiagnosesAsync(page, size) {
            var _this30 = this;

            var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
            return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
              observer.next(_this30.getDiagnoses(page, size));
              observer.complete();
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(timeout));
          }
        }, {
          key: "getTabletsPrescribedAsync",
          value: function getTabletsPrescribedAsync(page, size) {
            var _this31 = this;

            var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
            return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
              observer.next(_this31.getTabletsPrescribed(page, size));
              observer.complete();
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(timeout));
          }
        }]);
      }();

      _DiagnosisService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _DiagnosisService);
      /***/
    },

    /***/
    56263:
    /*!**********************************************!*\
      !*** ./src/app/services/emis/aws.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwsService": function AwsService() {
          return (
            /* binding */
            _AwsService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      52468);

      var _AwsService = /*#__PURE__*/function () {
        function AwsService(dataService) {
          _classCallCheck(this, AwsService);

          this.dataService = dataService;
          this.awsApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.awsApiUrl;
          this.civilapiBaseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.civilapiBaseUrl;
        }

        return _createClass(AwsService, [{
          key: "getDistrictByUsername",
          value: function getDistrictByUsername(Username) {
            return this.dataService.getData(this.awsApiUrl + '/mshared/userdetails?username=' + Username, true);
          }
        }, {
          key: "getBlockByDistId",
          value: function getBlockByDistId(dstId) {
            return this.dataService.getData(this.awsApiUrl + '/mshared/dstdetails?dstId=' + dstId, true);
          }
        }, {
          key: "getCivilAllocateConst",
          value: function getCivilAllocateConst(data) {
            return this.dataService.getData(this.awsApiUrl + '/civil/extprj?dstId=' + data.district + '&blkId=' + data.block + '&acyear=' + data.year, true);
          }
        }, {
          key: "getEntryStatus",
          value: function getEntryStatus(data) {
            return this.dataService.getData(this.awsApiUrl + '/civil/entryoncechk?schId=' + data.schId + '&bldtype=' + data.bldtype + '&acyear=' + data.acyear, true);
          }
        }, {
          key: "getSurveyListbyUser",
          value: function getSurveyListbyUser(username) {
            return this.dataService.getData(this.awsApiUrl + '/surveylist?username=' + username, true);
          }
        }, {
          key: "getSurveyList",
          value: function getSurveyList(schooId) {
            return this.dataService.getData(this.awsApiUrl + '/surveylist?SclId=' + schooId, true);
          }
        }, {
          key: "getSurveyQuestions",
          value: function getSurveyQuestions(surveyId) {
            return this.dataService.getData(this.awsApiUrl + '/surveyq?Surveyqestions=' + surveyId, true);
          }
        }, {
          key: "getMenus",
          value: function getMenus(username) {
            return this.dataService.getData(this.awsApiUrl + '/mshared/mauth?username=' + username, true);
          }
        }, {
          key: "getStatisticData",
          value: function getStatisticData(code) {
            return this.dataService.getData(this.awsApiUrl + '/mobilestats?code=' + code, true);
          }
        }, {
          key: "saveSurvayQuestions",
          value: function saveSurvayQuestions(data, refresh) {
            return this.dataService.post(this.civilapiBaseUrl, data);
          }
        }, {
          key: "getStudentList",
          value: function getStudentList(code, schid, classId, section) {
            return this.dataService.getData(this.awsApiUrl + '/mobileattendance/studentlist?code=' + code + '&schId=' + schid + '&classId=' + classId + '&section=' + section, true);
          }
        }]);
      }();

      _AwsService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }];
      };

      _AwsService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _AwsService);
      /***/
    },

    /***/
    71660:
    /*!***********************************************!*\
      !*** ./src/app/services/emis/emis.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmisService": function EmisService() {
          return (
            /* binding */
            _EmisService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      52468);

      var _EmisService = /*#__PURE__*/function () {
        function EmisService(dataService) {
          _classCallCheck(this, EmisService);

          this.dataService = dataService;
          this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl;
          this.emisApiUrl3 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl3;
          this.leaveSubmitted = false;
          this.tntpApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tntpApiUrl;
        }

        return _createClass(EmisService, [{
          key: "getAllClassLists",
          value: // School Confirmation API
          function getAllClassLists(data) {
            return this.dataService.post(this.emisApiUrl + '/school_info', data);
          }
        }, {
          key: "getConfirmStatus",
          value: function getConfirmStatus(schoolid, date) {
            return this.dataService.getData(this.emisApiUrl + '/SchoolAttendanceStatusDetail?schoolid=' + schoolid + '&date=' + date, true);
          }
        }, {
          key: "saveSchoolConfirmation",
          value: function saveSchoolConfirmation(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/SchoolAttendanceStatus', data);
          } // VT Attendance 

        }, {
          key: "getVocationalTeacherList",
          value: function getVocationalTeacherList(SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/NsqfStaffList?SchlId=' + SchlId, true);
          }
        }, {
          key: "SaveVocationalAttendance",
          value: function SaveVocationalAttendance(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/NsqfStaff', data);
          }
        }, {
          key: "getVtStatus",
          value: function getVtStatus(SchlId, Date) {
            return this.dataService.getData(this.emisApiUrl + '/NsqfStaffGetStatus?SchlId=' + SchlId + '&Date=' + Date, true);
          }
        }, {
          key: "getVtSavedList",
          value: function getVtSavedList(SchlId, Date) {
            return this.dataService.getData(this.emisApiUrl + '/NsqfStaffGet?SchlId=' + SchlId + '&Date=' + Date, true);
          }
        }, {
          key: "savelibraryDetails",
          value: function savelibraryDetails(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/SaveLibrBookDetails', data);
          }
        }, {
          key: "getLibaryBooksList",
          value: function getLibaryBooksList(StuId) {
            return this.dataService.getData(this.emisApiUrl + '/GetLibrBookDetails?SchlId=' + StuId, true);
          }
        }, {
          key: "getSavedBookBucket",
          value: function getSavedBookBucket(SchlId, Cls, Sec) {
            return this.dataService.getData(this.emisApiUrl + '/BktListCrtGet?SchlId=' + SchlId + '&Cls=' + Cls + '&Sec=' + Sec, true);
          }
        }, {
          key: "getSavedStudentbook",
          value: function getSavedStudentbook(SchlId, Cls, Sec) {
            return this.dataService.getData(this.emisApiUrl + '/TchAssBkGet?SchlId=' + SchlId + '&Cls=' + Cls + '&Sec=' + Sec, true);
          }
        }, {
          key: "getClassLibraryBookList",
          value: function getClassLibraryBookList(Class, limit, SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/CrteBuktListByClass?Class=' + Class + '&limit=' + limit + '&SchlId=' + SchlId, true);
          }
        }, {
          key: "saveBucketCreation",
          value: function saveBucketCreation(data) {
            return this.dataService.post(this.emisApiUrl + '/BktListCrtCUD', data);
          }
        }, {
          key: "saveStudentBook",
          value: function saveStudentBook(data) {
            return this.dataService.post(this.emisApiUrl + '/TchAssBkCUD', data);
          } // Eye Screening

        }, {
          key: "saveEyeScreening",
          value: function saveEyeScreening(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/Eyescreenstu', data);
          }
        }, {
          key: "saveHealthCheckup",
          value: function saveHealthCheckup(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/HealthChkUpStu', data);
          } //BMI screening

        }, {
          key: "saveBMIinfo",
          value: function saveBMIinfo(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/StudBMICheck', data);
          }
        }, {
          key: "getStudntSavedBmiValue",
          value: function getStudntSavedBmiValue(stuId) {
            return this.dataService.getData(this.emisApiUrl + '/GetStudBMIByStudId?StudId=' + stuId, '');
          } // Noon meals screening

        }, {
          key: "saveNoonmealsinfo",
          value: function saveNoonmealsinfo(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/StudNutrNoonMeals', data);
          }
        }, {
          key: "getSavedNoonmealsinfo",
          value: function getSavedNoonmealsinfo(stuId) {
            return this.dataService.getData(this.emisApiUrl + '/StudNutrNoonMealsByStud?StudId=' + stuId, '');
          }
        }, {
          key: "getSavedBMIScreening",
          value: function getSavedBMIScreening(StuId, TeaId, SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/BMIStudListByTchr?TchrId=1' + StuId + '&TeaId=' + TeaId + '&SchlId=' + SchlId, true);
          }
        }, {
          key: "getSavedEyeScreening",
          value: function getSavedEyeScreening(StuId, TeaId, SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/GetEyescreenstu?StuId=' + StuId + '&TeaId=' + TeaId + '&SchlId=' + SchlId, true);
          }
        }, {
          key: "getSavedEyeScreeningData",
          value: function getSavedEyeScreeningData(StuId) {
            return this.dataService.getData(this.emisApiUrl + '/GetEyeScrnDetails?StuId=' + StuId, true);
          }
        }, {
          key: "getStudentHealthStatus",
          value: function getStudentHealthStatus(TeaId, SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/GetEyescreenstustatus?TeaId=' + TeaId + '&SchlId=' + SchlId, true);
          }
        }, {
          key: "getTeacherDetails",
          value: function getTeacherDetails(SchlId, Cls, Sec) {
            return this.dataService.getData(this.emisApiUrl + '/ClsTeachers?SchlId=' + SchlId + '&Cls=' + Cls + '&Sec=' + Sec, true);
          }
        }, {
          key: "getStudentList",
          value: function getStudentList(SchlId, Cls, Sec) {
            return this.dataService.getData(this.emisApiUrl + '/StuChkUpSchlDetGet?SchlId=' + SchlId + '&Cls=' + Cls + '&Sec=' + Sec, true);
          }
        }, {
          key: "getClassTeacherGender",
          value: function getClassTeacherGender(UserId) {
            return this.dataService.getData(this.emisApiUrl + '/UserDetails?UserId=' + UserId, true);
          } // itk-center Support

        }, {
          key: "searchVolunteerById",
          value: function searchVolunteerById(id) {
            return this.dataService.getData(this.emisApiUrl + '/ItkVolSrchAllDist?VolntrId=' + id + '&GroupId=1', true);
          }
        }, {
          key: "searchVolunteerByPhone",
          value: function searchVolunteerByPhone(phone) {
            return this.dataService.getData(this.emisApiUrl + '/ItkVolSrchAllDist?MblNo=' + phone + '&GroupId=1', true);
          }
        }, {
          key: "getMyInspectionList",
          value: function getMyInspectionList(id) {
            return this.dataService.getData(this.emisApiUrl + '/ItkVolInspResByUsrId?UsrId=' + id, true);
          }
        }, {
          key: "getMyInspectionListUpdated",
          value: function getMyInspectionListUpdated(id, GroupId) {
            return this.dataService.getData(this.emisApiUrl + '/itkSurveyget?teacher_id=' + id + '&GroupId=' + GroupId, true);
          }
        }, {
          key: "getItkCentrObsrQuetions",
          value: function getItkCentrObsrQuetions() {
            return this.dataService.getData(this.emisApiUrl + '/ItkCntrObsGetQst', true);
          }
        }, {
          key: "saveITKInspectionDetails",
          value: function saveITKInspectionDetails(data) {
            return this.dataService.post(this.emisApiUrl + '/itkSurvey', data);
          }
        }, {
          key: "getInspectionDetails",
          value: function getInspectionDetails(usrId, volId) {
            return this.dataService.getData(this.emisApiUrl + '/ItkVolInspByUsrAndVol?UsrId=' + usrId + '&VolId=' + volId, true);
          }
        }, {
          key: "saveInspectionDetails",
          value: function saveInspectionDetails(data) {
            return this.dataService.post(this.emisApiUrl + '/SaveItkVolInspResult', data);
          }
        }, {
          key: "saveAllHealth",
          value: function saveAllHealth(data) {
            return this.dataService.post(this.emisApiUrl + '/StudentCheckUp', data);
          }
        }, {
          key: "getStduentList",
          value: function getStduentList(id) {
            return this.dataService.getData(this.emisApiUrl + '/StuLisMapdWithVoluntr?VoluntrId=' + id, true);
          }
        }, {
          key: "getMenu",
          value: function getMenu(refresh) {
            return this.dataService.getData(this.emisApiUrl + '/api/user/menu', refresh);
          }
        }, {
          key: "localbodyListGet",
          value: function localbodyListGet(blkid) {
            return this.dataService.getData(this.emisApiUrl + '/localbodyListGet?BlkId=' + blkid, true);
          }
        }, {
          key: "habitationListGet",
          value: function habitationListGet(localbdyid) {
            return this.dataService.getData(this.emisApiUrl + '/habitationListGet?LocalId=' + localbdyid, true);
          }
        }, {
          key: "OoscSurveyData",
          value: function OoscSurveyData(data, refresh) {
            return this.dataService.getData(this.emisApiUrl + '/OoscSurveyData?TechId=' + data, true);
          }
        }, {
          key: "getAccListSurvey",
          value: function getAccListSurvey(teacherID, Acyear) {
            return this.dataService.getData(this.emisApiUrl + '/OOSCAcYearWiseStudList?TechId=' + teacherID + '&AcYear=' + Acyear, true);
          } //  Incharge Teacher API 

        }, {
          key: "getInchargeTeacherList",
          value: function getInchargeTeacherList() {
            return this.dataService.getData(this.emisApiUrl + '/Nomteacherlist', true);
          }
        }, {
          key: "getTeacherTrainingList",
          value: function getTeacherTrainingList() {
            return this.dataService.getData(this.emisApiUrl + '/TrainingModDrpDwn', true);
          }
        }, {
          key: "getSavedTeachersList",
          value: function getSavedTeachersList(school_id) {
            return this.dataService.getData(this.emisApiUrl + '/TeachNomintnGet?SchlID=' + school_id, true);
          }
        }, {
          key: "saveNominationList",
          value: function saveNominationList(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/TeachNomintnCUD', data);
          }
        }, {
          key: "saveTrainerAttendance",
          value: function saveTrainerAttendance(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/TrainerModCUD', data);
          }
        }, {
          key: "saveTraineeAttendance",
          value: function saveTraineeAttendance(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/TrainingModCUD', data);
          }
        }, {
          key: "getAppVersion",
          value: function getAppVersion() {
            return this.dataService.getData(this.emisApiUrl + '/app_version?AppVersn=4', true);
          }
        }, {
          key: "getBMIList",
          value: function getBMIList(schlId, classId, sectnId) {
            return this.dataService.getRecord(this.emisApiUrl + '/BMIStudListByClsAndSec?SchlId=' + schlId + "&StudyId=" + classId + "&Section=" + sectnId);
          }
        }, {
          key: "getHealthCheckup",
          value: function getHealthCheckup(StudId) {
            return this.dataService.getRecord(this.emisApiUrl + '/StudentCheckUpDetails?StudId=' + StudId);
          }
        }, {
          key: "getTrainnerData",
          value: function getTrainnerData(TrId, AtDate) {
            return this.dataService.getRecord(this.emisApiUrl + '/TrainerModGet?TrId=' + TrId + "&AtDate=" + AtDate);
          }
        }, {
          key: "getTrainingData",
          value: function getTrainingData(TchId) {
            return this.dataService.getRecord(this.emisApiUrl + '/TrainingModGet?TchId=' + TchId);
          }
        }, {
          key: "getNoonMealsList",
          value: function getNoonMealsList(teachrId) {
            return this.dataService.getRecord(this.emisApiUrl + '/StudNutrNoonMealsByTchr?TchrId=' + teachrId);
          } // Leave Application

        }, {
          key: "getTeacherDetls",
          value: function getTeacherDetls(teacher_id, flag) {
            return this.dataService.getData(this.emisApiUrl + '/TchlAprvlGetlveLmt?TchId=' + teacher_id + '&Flag=' + flag, true);
          }
        }, {
          key: "getTchrLeaveBalanceList",
          value: function getTchrLeaveBalanceList(teacher_id, gen) {
            return this.dataService.getData(this.emisApiUrl + '/TchrAvailLeaveGet?TchrId=' + teacher_id + '&Gen=' + gen, true);
          }
        }, {
          key: "getTchrLeaveTypeList",
          value: function getTchrLeaveTypeList(teachId, gen) {
            return this.dataService.getData(this.emisApiUrl + '/LeaveTypeList?teachId=' + teachId + '&Gen=' + gen, true);
          }
        }, {
          key: "saveTchrAvailLeave",
          value: function saveTchrAvailLeave(data) {
            return this.dataService.post(this.emisApiUrl + '/TchrAvailLeave', data);
          }
        }, {
          key: "TchrLeaveCalender",
          value: function TchrLeaveCalender(LeavTyp) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveCalender?LeavTyp=' + LeavTyp, true);
          }
        }, {
          key: "getLeaveAprvldtls",
          value: function getLeaveAprvldtls(Desgn, Cat, Src) {
            return this.dataService.getData(this.emisApiUrl + '/TchlAprvlGetlveLmtLvl?Desgn=' + Desgn + '&Cat=' + Cat + '&Src=' + Src, true);
          }
        }, {
          key: "saveAppliedLeave",
          value: function saveAppliedLeave(data) {
            return this.dataService.post(this.emisApiUrl + '/TchrApplyLeave', data);
          }
        }, {
          key: "getLeaveHistory",
          value: function getLeaveHistory(teacher_id, Month, Year) {
            return this.dataService.getRecord(this.emisApiUrl + '/TchrLeaveHistory?TchrId=' + teacher_id + '&Year=' + Month + '&Month=' + Year);
          }
        }, {
          key: "TchrLeaveDelete",
          value: function TchrLeaveDelete(data) {
            return this.dataService.post(this.emisApiUrl + '/TchrLeaveDelete', data);
          }
        }, {
          key: "getTchrsLeaveListBEOCount",
          value: function getTchrsLeaveListBEOCount(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByBEOCntt?TchrId=' + teacher_id, true);
          }
        }, {
          key: "getTchrsLeaveListDEOCount",
          value: function getTchrsLeaveListDEOCount(teacher_id, teacher_type) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByDEOCntt?TchrId=' + teacher_id + '&Type=' + teacher_type, true);
          }
        }, {
          key: "getTchrsLeaveListCEOCount",
          value: function getTchrsLeaveListCEOCount(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByCEOCntt?TchrId=' + teacher_id, true);
          }
        }, {
          key: "getTchrsLeaveListJdCount",
          value: function getTchrsLeaveListJdCount(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByJdCntt?TchrId=' + teacher_id, true);
          }
        }, {
          key: "getTchrsLeaveListBeo",
          value: function getTchrsLeaveListBeo(beoId, teacher_id, fun, teacher_type) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByBeot?Beo=' + beoId + "&HMTchrId=" + teacher_id + "&Fun=" + fun + '&Type=' + teacher_type, true);
          }
        }, {
          key: "getTchrsLeaveListDeo",
          value: function getTchrsLeaveListDeo(deoId, teacher_id, type, fun) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByDeot?Deo=' + deoId + "&HMTchrId=" + teacher_id + "&Type=" + type + "&Fun=" + fun, true);
          }
        }, {
          key: "getTchrsLeaveListCeo",
          value: function getTchrsLeaveListCeo(ceoId, teacher_id, fun) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByCeot?Ceo=' + ceoId + "&HMTchrId=" + teacher_id + "&Fun=" + fun, true);
          }
        }, {
          key: "getTchrsLeaveListJd",
          value: function getTchrsLeaveListJd(jdId, ceoId, teacher_type, fun) {
            return this.dataService.getData(this.emisApiUrl + '/TchrLeaveApprByJdt?JD=' + jdId + "&HMTchrId=" + ceoId + '&Type=' + teacher_type + "&Fun=" + fun, true);
          }
        }, {
          key: "leaveApproveHm",
          value: function leaveApproveHm(data) {
            return this.dataService.post(this.emisApiUrl + '/TchrLeaveApprove', data);
          }
        }, {
          key: "getTeachrPerslDetails",
          value: function getTeachrPerslDetails(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/getTeachrPersDet', teacher_id);
          }
        }, {
          key: "getTechrAcadamicDetails",
          value: function getTechrAcadamicDetails(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/getTeachrAcademicDet', teacher_id);
          }
        }, {
          key: "getTechrJoiningDetails",
          value: function getTechrJoiningDetails(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/getTeachrJoinDet', teacher_id);
          }
        }, {
          key: "getTechrCommunicationDetails",
          value: function getTechrCommunicationDetails(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/getTeachrComnDet', teacher_id);
          }
        }, {
          key: "getTechrTrainingDetails",
          value: function getTechrTrainingDetails(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/getTeachrTrngDet', teacher_id);
          }
        }, {
          key: "getTechrMainSubtaught",
          value: function getTechrMainSubtaught(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/teacherDetails', teacher_id);
          }
        }, {
          key: "getTechrBankDetails",
          value: function getTechrBankDetails(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + '/getTeachrBankDet', teacher_id);
          } // ------------------- Leave Module End ---------------------------------------------------

        }, {
          key: "getSchoolInfo",
          value: function getSchoolInfo(data) {
            return this.dataService.getData(this.emisApiUrl + '/SclDetails?udise=' + data, true);
          }
        }, {
          key: "saveCrc",
          value: function saveCrc(data) {
            return this.dataService.post(this.emisApiUrl + '/TchrTrainingCrc', data);
          }
        }, {
          key: "getCrc",
          value: function getCrc(TchrId, TrngId, SsnId, TrngDate) {
            return this.dataService.getRecord(this.emisApiUrl + '/GetTchrTrngCrc?TchrId=' + TchrId + "&TrngId=" + TrngId + "&SsnId=" + SsnId + "&TrngDate=" + TrngDate);
          }
        }, {
          key: "getTeacherInfo",
          value: function getTeacherInfo(TchrId) {
            return this.dataService.getData(this.emisApiUrl + '/GetTchrByTchrId?TchrId=' + TchrId, true);
          }
        }, {
          key: "saveCrcFeedback",
          value: function saveCrcFeedback(data) {
            return this.dataService.post(this.emisApiUrl + '/TchrTrngCrcFeedBack', data);
          }
        }, {
          key: "getCrcFeedback",
          value: function getCrcFeedback(TchrId, TrainDate) {
            return this.dataService.getRecord(this.emisApiUrl + '/GetTchrTrngCrcFeedBack?TchrId=' + TchrId + "&TrainDate=" + TrainDate);
          } // stemp - pet

        }, {
          key: "saveRunnningRace",
          value: function saveRunnningRace(data) {
            return this.dataService.post(this.emisApiUrl + '/SprtsSveScrCUD', data);
          }
        }, {
          key: "SprtsSveScrGet",
          value: function SprtsSveScrGet(SchlId, ClsId, sectnId) {
            return this.dataService.getRecord(this.emisApiUrl + '/SprtsSveScrGet?SchlId=' + SchlId + '&ClsId=' + ClsId + '&Sec=' + sectnId);
          }
        }, {
          key: "getMappedSchoolClass",
          value: function getMappedSchoolClass() {
            return this.dataService.getData(this.emisApiUrl + '/TechMapSchlClsSecSteth', true);
          }
        }, {
          key: "getMappedClassSecList",
          value: function getMappedClassSecList(SchlId, ClsId) {
            return this.dataService.getRecord(this.emisApiUrl + '/SprtsSveScrGet?SchlId=' + SchlId + '&ClsId=' + ClsId);
          }
        }, {
          key: "getPETSavedStudentlist",
          value: function getPETSavedStudentlist(SchlId, Class, Sec, EvntId) {
            return this.dataService.getRecord(this.emisApiUrl + '/SprtsSveScrGetByEvtId?SchlId=' + SchlId + '&Class=' + Class + '&Sec=' + Sec + '&EvntId=' + EvntId);
          }
        }, {
          key: "getPETMappedStudentClasSec",
          value: function getPETMappedStudentClasSec(SchlId, ClsId, sectnId, EvtId) {
            return this.dataService.getRecord(this.emisApiUrl + '/SprtsSveScrGet?SchlId=' + SchlId + '&ClsId=' + ClsId + '&Sec=' + sectnId + '&EvtId=' + EvtId);
          } // getPETMappedStudentClasSec(SchlId, ClsId, sectnId) {
          //     return this.dataService.getRecord(this.emisApiUrl + '/SprtsSveScrGet?SchlId=' + SchlId + '&ClsId=' + ClsId + '&Sec=' + sectnId);
          // }

        }, {
          key: "getHMmappedClasSec",
          value: function getHMmappedClasSec() {
            return this.dataService.getData(this.emisApiUrl + '/SchlWiseMappedCls', true);
          } // getPetStatus(SchlId, TchrId, EvntId) {
          //     return this.dataService.getRecord(this.emisApiUrl + '/SprtsBtryStudCnt?SchlId=' + SchlId + '&TchrId=' + TchrId + '&EvntId=' + EvntId);
          // }

        }, {
          key: "getPetStatus",
          value: function getPetStatus(SchlId, TchrId) {
            return this.dataService.getRecord(this.emisApiUrl + '/SprtsBtryStudCnt?SchlId=' + SchlId + '&TchrId=' + TchrId);
          }
        }, {
          key: "getBookLikeList",
          value: function getBookLikeList(TchrId, SchId, GradeId, UnitId, PeriodId) {
            return this.dataService.getRecord(this.emisApiUrl + '/TchCourseLkeGet?SchlId=' + SchId + '&TchId=' + TchrId + '&Grade=' + GradeId + '&Unit=' + UnitId + '&Period=' + PeriodId);
          }
        }, {
          key: "saveBookLikeData",
          value: function saveBookLikeData(data) {
            return this.dataService.post(this.emisApiUrl + '/TchCourseLkeCUD', data);
          }
        }, {
          key: "getOtherClassList",
          value: function getOtherClassList(teacherId) {
            return this.dataService.getRecord(this.emisApiUrl + '/AssignTechScreen?TechId=' + teacherId);
          }
        }, {
          key: "getOtherClassStudentList",
          value: function getOtherClassStudentList(teacherId, classId, section) {
            return this.dataService.getRecord(this.emisApiUrl + '/AssignTechScreen?TechId=' + teacherId + '& Cls=' + classId + '&Sec=' + section);
          }
        }, {
          key: "SportsQtyGet",
          value: function SportsQtyGet() {
            return this.dataService.getData(this.emisApiUrl + '/SportsQtyGet', true);
          }
        }, {
          key: "SportsEquipSave",
          value: function SportsEquipSave(data) {
            return this.dataService.post(this.emisApiUrl + '/SportsEquipSave', data);
          }
        }, {
          key: "SportsEquipGet",
          value: function SportsEquipGet(schlId) {
            return this.dataService.getData(this.emisApiUrl + '/SportsEquipGet?SchlId=' + schlId + '', true);
          }
        }, {
          key: "getDistrictList",
          value: function getDistrictList() {
            return this.dataService.getData(this.emisApiUrl + '/DistrictList', true);
          }
        }, {
          key: "TrainingProgSave",
          value: function TrainingProgSave(data) {
            return this.dataService.post(this.emisApiUrl + '/TrainingProgSave', data);
          }
        }, {
          key: "GetTrainProgByTrnrId",
          value: function GetTrainProgByTrnrId() {
            return this.dataService.getData(this.emisApiUrl + '/GetTrainProgByTrnrId', true);
          }
        }, {
          key: "GenOtpProgram",
          value: function GenOtpProgram(data) {
            return this.dataService.post(this.emisApiUrl + '/GenOtpProgram', data);
          }
        }, {
          key: "GetProgDetByOtp",
          value: function GetProgDetByOtp(type, otp, program, venue) {
            return this.dataService.getData(this.emisApiUrl + '/GetProgDetByOtp?Type=' + type + '&Otp=' + otp + '&Pgrm=' + program + '&Venue=' + venue, true);
          }
        }, {
          key: "OtpConnectByRcvr",
          value: function OtpConnectByRcvr(data) {
            return this.dataService.post(this.emisApiUrl + '/OtpConnectByRcvr', data);
          }
        }, {
          key: "GetOtpHistoryByUsr",
          value: function GetOtpHistoryByUsr(type) {
            return this.dataService.getData(this.emisApiUrl + '/GetOtpHistoryByUsr?Type=' + type, true);
          }
        }, {
          key: "GetOtpPgrmList",
          value: function GetOtpPgrmList() {
            return this.dataService.getData(this.emisApiUrl + '/GetOtpPgrmList', true);
          }
        }, {
          key: "LibBookMaster",
          value: function LibBookMaster(schoolId) {
            return this.dataService.getData(this.emisApiUrl + '/LibBookMaster?SchoolId=' + schoolId, true);
          }
        }, {
          key: "LibBookRcvd",
          value: function LibBookRcvd(data) {
            return this.dataService.post(this.emisApiUrl + '/LibBookRcvd', data);
          }
        }, {
          key: "LibBookRcvdGetBySchl",
          value: function LibBookRcvdGetBySchl(schoolId) {
            return this.dataService.getData(this.emisApiUrl + '/LibBookRcvdGetBySchl?SchlId=' + schoolId, true);
          }
        }, {
          key: "LibBookRcvdUpdate",
          value: function LibBookRcvdUpdate(data) {
            return this.dataService.post(this.emisApiUrl + '/LibBookRcvdUpdate', data);
          } //For OOSC

        }, {
          key: "getBlockList",
          value: function getBlockList(distId) {
            return this.dataService.getData(this.emisApiUrl + '/getMasterBlock?dist_id=' + distId, true);
          }
        }, {
          key: "getBlockListForDist",
          value: function getBlockListForDist(distId) {
            return this.dataService.getData(this.emisApiUrl + '/SchlNewBlkDtlsByDistGet?distid=' + distId, true);
          } // getOoscSchoolList(blockId) {
          //     return this.dataService.getData(this.emisApiUrl + '/OOSCSchlListGet?blck_id=' + blockId, true);
          // }

        }, {
          key: "getOoscSchoolList",
          value: function getOoscSchoolList(blockId) {
            return this.dataService.getData(this.emisApiUrl + '/OoscSchoolList?Blk_id=' + blockId, true);
          } // getOoscDropoutStudentList(school_id) {
          //     return this.dataService.getData(this.emisApiUrl + '/OoscStudentsList?schl_id=' + school_id, true);
          // }

        }, {
          key: "getOoscDropoutStudentList",
          value: function getOoscDropoutStudentList(school_id, ac_year) {
            var osc_url = this.emisApiUrl + '/OoscStudentsListnew?schl_id=' + school_id + '&acyr="' + ac_year + '"';
            var ac = "\"".concat(ac_year, "\"");
            return this.dataService.getData(osc_url, true);
          }
        }, {
          key: "getOoscStudentList",
          value: function getOoscStudentList(school_id) {
            return this.dataService.getData(this.emisApiUrl + '/OOSCStudListGet?schl_id=' + school_id, true);
          }
        }, {
          key: "getDistrict",
          value: function getDistrict() {
            return this.dataService.getData(this.emisApiUrl + '/alldistrictlist', true);
          }
        }, {
          key: "getBlock",
          value: function getBlock(distid) {
            return this.dataService.getData(this.emisApiUrl + '/blocklist?distid=' + distid, true);
          }
        }, {
          key: "getStudentData",
          value: function getStudentData(stud_id, schlId) {
            return this.dataService.getData(this.emisApiUrl + '/OOSCStudInfoGet?stud_id=' + stud_id + '&SchlId=' + schlId, true);
          }
        }, {
          key: "getSchool",
          value: function getSchool(school_id) {
            return this.dataService.getData(this.emisApiUrl + '/getMasterschoollist?block_id=' + school_id, true);
          }
        }, {
          key: "saveOoscData",
          value: function saveOoscData(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/OOSCStudCUD', data);
          }
        }, {
          key: "getCountry",
          value: function getCountry() {
            return this.dataService.getData(this.emisApiUrl + '/CountryList', true);
          }
        }, {
          key: "getState",
          value: function getState() {
            return this.dataService.getData(this.emisApiUrl + '/StateList', true);
          }
        }, {
          key: "getInstitute",
          value: function getInstitute(insttype) {
            return this.dataService.getData(this.emisApiUrl + '/Poly_ITIList?InstiId=' + insttype, true);
          }
        }, {
          key: "getResdSchool",
          value: function getResdSchool(type) {
            return this.dataService.getData(this.emisApiUrl + '/ResidentialSchool?type=' + type, true); // return this.dataService.getData(this.emisApiUrl + '/ResidentialSchool', true);
          }
        }, {
          key: "TeacherNominationProgram",
          value: function TeacherNominationProgram(data) {
            return this.dataService.post(this.emisApiUrl + '/TeacNominProSave', data);
          }
        }, {
          key: "GetTeacherNominationData",
          value: function GetTeacherNominationData(schlId) {
            return this.dataService.getData(this.emisApiUrl + '/GetTeacNominPro?school_id=' + schlId, true);
          }
        }, {
          key: "getEventProgramList",
          value: function getEventProgramList(schlId, ProId) {
            return this.dataService.getData(this.emisApiUrl + '/GetTeacNominProID?SchlId=' + schlId + '&ProId=' + ProId, true);
          }
        }, {
          key: "LibBookAbstract",
          value: function LibBookAbstract(data) {
            return this.dataService.post(this.emisApiUrl + '/LibBookAbstract', data);
          }
        }, {
          key: "GetOoscOtherDistrict",
          value: function GetOoscOtherDistrict(DistId) {
            return this.dataService.getData(this.emisApiUrl + '/OSCstudentsget?DistId=' + DistId, true);
          }
        }, {
          key: "OoscDupliVerfi",
          value: function OoscDupliVerfi(emisno) {
            return this.dataService.getData(this.emisApiUrl + '/OoscDupliVerfi?EmisId=' + emisno, true);
          }
        }, {
          key: "OoscDupliVerfiSave",
          value: function OoscDupliVerfiSave(data) {
            return this.dataService.post(this.emisApiUrl + '/OoscDupliVerfiSave', data);
          }
        }, {
          key: "getOOSCBlockList",
          value: function getOOSCBlockList(distId) {
            return this.dataService.getData(this.emisApiUrl + '/OoscBlockList?Dist_id=' + distId, true);
          }
        }, {
          key: "getOOSCSchlStuList",
          value: function getOOSCSchlStuList(school_id) {
            return this.dataService.getData(this.emisApiUrl + '/OOSCStudInfoSchlGet?SchlId=' + school_id, true);
          }
        }, {
          key: "getNvrEnrolmentStudentList",
          value: function getNvrEnrolmentStudentList(teacher_id, dist_id) {
            return this.dataService.getData(this.emisApiUrl + '/OOSCNeverEnrollStudList?TechId=' + teacher_id + '&District=' + dist_id, true);
          }
        }, {
          key: "getNvrEnrolmentStudentListForBRTE",
          value: function getNvrEnrolmentStudentListForBRTE(teacherID) {
            return this.dataService.getData(this.emisApiUrl + '/OscNewlyEnrlStuListBRTE?TchrId=' + teacherID, true);
          }
        }, {
          key: "getBRTEStudntDetails",
          value: function getBRTEStudntDetails(indxId) {
            return this.dataService.getData(this.emisApiUrl + '/OscEnrlStuBRTEList?IndexId=' + indxId, true);
          } //resource person verification

        }, {
          key: "getresourceperson",
          value: function getresourceperson(BlkId) {
            return this.dataService.getData(this.emisApiUrl + '/GetResourPerson?BlkId=' + BlkId, true);
          }
        }, {
          key: "getunverifiedarp",
          value: function getunverifiedarp(BlkId) {
            return this.dataService.getData(this.emisApiUrl + '/ArpUnverifiedList?BlkId=' + BlkId, true);
          }
        }, {
          key: "getarpteachingplan",
          value: function getarpteachingplan(Id) {
            return this.dataService.getData(this.emisApiUrl + '/ArpResourcePersonEnrlmntDtls?Id=' + Id, true);
          }
        }, {
          key: "getverifeidsms",
          value: function getverifeidsms(data) {
            return this.dataService.post(this.emisApiUrl + '/SendingSmsParGet', data);
          }
        }, {
          key: "ArpSchlDetails",
          value: function ArpSchlDetails(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpSchlDetails?arp_id=' + data.arpId, true);
          }
        }, {
          key: "ArpSchlSessDetails",
          value: function ArpSchlSessDetails(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpSchlSessDetails?arp_id=' + data.arpId + '&SchlId=' + data.schoolId, true);
          }
        }, {
          key: "ArpStudRating",
          value: function ArpStudRating(data) {
            return this.dataService.post(this.emisApiUrl + '/ArpStudRating', data);
          }
        }, {
          key: "ArpVerifyOtp",
          value: function ArpVerifyOtp(data) {
            return this.dataService.post(this.emisApiUrl + '/ArpVerifyOtp', data);
          }
        }, {
          key: "ArpTodaySession",
          value: function ArpTodaySession(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpTodaySession?ArpId=' + data.ArpId + '&day=' + data.day, true);
          }
        }, {
          key: "ArpVerifyOtpGet",
          value: function ArpVerifyOtpGet(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpVerifyOtpGet?ArpId=' + data.ArpId + '&schlId=' + data.schlId + '&SesDate=' + data.SesDate, true);
          } // =========health screening============

        }, {
          key: "HealthScrnSave",
          value: function HealthScrnSave(data) {
            return this.dataService.post(this.emisApiUrl + '/HealthScrnSave', data);
          }
        }, {
          key: "GetStudHealthScrn",
          value: function GetStudHealthScrn(stdId, acYear) {
            return this.dataService.getData(this.emisApiUrl + '/GetStudHealthScrn?StudId=' + stdId + '&acYear=' + acYear, true);
          }
        }, {
          key: "OoscReasonType",
          value: function OoscReasonType() {
            return this.dataService.getData(this.emisApiUrl + '/OoscReasonType', true);
          }
        }, {
          key: "ArpCourMat",
          value: function ArpCourMat(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpCourMat?ArpId=' + data.ArpId + '&Mont=' + data.Mont + '&Week=' + data.Week + '&Type=' + data.Type, true);
          }
        }, {
          key: "ArpCourMatOverall",
          value: function ArpCourMatOverall(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpCourMat?ArpId=' + data.ArpId + '&Type=' + data.Type, true);
          }
        }, {
          key: "ArpFileUploads",
          value: function ArpFileUploads(data) {
            return this.dataService.post(this.emisApiUrl + '/ArpFileUploads', data);
          }
        }, {
          key: "ArpListBrte",
          value: function ArpListBrte(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpListBrte?BlkId=' + data.BlkId, true);
          }
        }, {
          key: "ArpSchlListBrte",
          value: function ArpSchlListBrte(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpSchlListBrte?BlkId=' + data.BlkId, true);
          }
        }, {
          key: "ArpBtchGropBrte",
          value: function ArpBtchGropBrte(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpBtchGropBrte?SchlId=' + data, true);
          }
        }, {
          key: "ArpGrupDetBrte",
          value: function ArpGrupDetBrte(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpGrupDetBrte?SchlId=' + data.SchlId + '&GroupId=' + data.GroupId + '&BatchId=' + data.BatchId + '&Day=' + data.Day, true);
          }
        }, {
          key: "ArpSessVerifBrte",
          value: function ArpSessVerifBrte(data) {
            return this.dataService.getData(this.emisApiUrl + '/ArpSessVerifBrte?BlkId=' + data.BlkId, true);
          }
        }, {
          key: "ArpRatingDetfBrte",
          value: function ArpRatingDetfBrte(data) {
            return this.dataService.post(this.emisApiUrl + '/ArpRatingDetfBrte', data);
          }
        }, {
          key: "ArpBrteVerifyStaus",
          value: function ArpBrteVerifyStaus(data) {
            return this.dataService.post(this.emisApiUrl + '/ArpBrteVerifyStaus', data);
          } // Staff Grievance by priya

        }, {
          key: "TeacherDetailsGet",
          value: function TeacherDetailsGet(teacherId) {
            return this.dataService.getData(this.tntpApiUrl + '/GetStaffDetails?teacherId=' + teacherId, true);
          }
        }, {
          key: "saveStaffGrievance",
          value: function saveStaffGrievance(data) {
            return this.dataService.post(this.tntpApiUrl + '/StfGrvceCUD', data);
          }
        }, {
          key: "getStaffGrievance",
          value: function getStaffGrievance(teacherId) {
            return this.dataService.getData(this.tntpApiUrl + '/StfGrvceGET?Flag=2&UserId=' + teacherId, true);
          }
        }, {
          key: "PPSchlMassClean",
          value: function PPSchlMassClean(data) {
            return this.dataService.post(this.emisApiUrl + '/PPSchlMassClean', data);
          }
        }, {
          key: "PPSchlMassCleanGet",
          value: function PPSchlMassCleanGet(schlId, ObsrvId) {
            return this.dataService.getData(this.emisApiUrl + '/PPSchlMassCleanGet?SchlId=' + schlId + '&ObserverId=' + ObsrvId, true);
          }
        }, {
          key: "S3ImageSave",
          value: function S3ImageSave(data) {
            return this.dataService.post(this.emisApiUrl + '/S3ImageSave', data);
          }
        }, {
          key: "PPOlirumVagupari",
          value: function PPOlirumVagupari(data) {
            return this.dataService.post(this.emisApiUrl + '/PPOlirumVagupari', data);
          }
        }, {
          key: "PPOlirumVagupariGet",
          value: function PPOlirumVagupariGet(SchlId, ObserverId) {
            return this.dataService.getData(this.emisApiUrl + '/PPOlirumVagupariGet?SchlId=' + SchlId + '&ObserverId=' + ObserverId, true);
          }
        }, {
          key: "sendOtptoParent",
          value: function sendOtptoParent(data) {
            return this.dataService.post(this.emisApiUrl + '/OtpSendingSmsParGet', data);
          }
        }, {
          key: "UserSchlMapList",
          value: function UserSchlMapList(data) {
            return this.dataService.getData(this.emisApiUrl + '/UserSchlMapList?UserId=' + data.username + '&Tag=' + data.usertype, true);
          }
        }, {
          key: "GeoFencingStsCUD",
          value: function GeoFencingStsCUD(data) {
            return this.dataService.post(this.emisApiUrl + '/GeoFencingStsCUD', data);
          }
        }, {
          key: "IECntrMapList",
          value: function IECntrMapList(data) {
            return this.dataService.getData(this.emisApiUrl + '/IECntrMapList?userId=' + data.userId + '&flag=' + data.flag + '&blkId=' + data.blkId, true);
          }
        }, {
          key: "IECntrMapStdList",
          value: function IECntrMapStdList(data) {
            return this.dataService.getData(this.emisApiUrl + '/IECntrMapStdList?user_id=' + data.user_id + '&flag=' + data.flag, true);
          }
        }, {
          key: "IECntrBlkStdList",
          value: function IECntrBlkStdList(data) {
            return this.dataService.getData(this.emisApiUrl + '/IECntrBlkStdList?userId=' + data.userId, true);
          }
        }, {
          key: "IECntrMapStdCUD",
          value: function IECntrMapStdCUD(data) {
            return this.dataService.post(this.emisApiUrl + '/IECntrMapStdCUD', data);
          }
        }, {
          key: "IECntrTherptStdMap",
          value: function IECntrTherptStdMap(data) {
            return this.dataService.post(this.emisApiUrl + '/IECntrTherptStdMap', data);
          }
        }, {
          key: "EVDetailsStore",
          value: function EVDetailsStore(data) {
            return this.dataService.post(this.emisApiUrl + '/EVDetailsStore', data);
          }
        }, {
          key: "EVDetailsStoreGet",
          value: function EVDetailsStoreGet(CreatedBy, Type) {
            return this.dataService.getData(this.emisApiUrl + '/EVDetailsStoreGet?CreatedBy=' + CreatedBy + '&Type=' + Type, true);
          }
        }, {
          key: "EVCenterDetailsSave",
          value: function EVCenterDetailsSave(data) {
            return this.dataService.post(this.emisApiUrl + '/EVCenterDetailsSave', data);
          }
        }, {
          key: "BRTEMappedSchlListEV",
          value: function BRTEMappedSchlListEV(BrteId) {
            return this.dataService.getData(this.emisApiUrl + '/BRTEMappedSchlListEV?BrteId=' + BrteId, true);
          }
        }, {
          key: "BrteMappedStudentList",
          value: function BrteMappedStudentList(StudEmisId, BrteId) {
            return this.dataService.getData(this.emisApiUrl + '/BrteMappedStudentList?StudEmisId=' + StudEmisId + '&BrteId=' + BrteId, true);
          }
        }, {
          key: "StudentMigrantSave",
          value: function StudentMigrantSave(data) {
            return this.dataService.post(this.emisApiUrl + '/StudentMigrantSave', data);
          }
        }, {
          key: "StudentMigrantUpdate",
          value: function StudentMigrantUpdate(data) {
            return this.dataService.post(this.emisApiUrl + '/StudentMigrantUpdate', data);
          }
        }, {
          key: "MigrateStudList",
          value: function MigrateStudList(BrteId) {
            return this.dataService.getData(this.emisApiUrl + '/MigrateStudList?BrteId=' + BrteId, true);
          } // Learners 

        }, {
          key: "learnersSave",
          value: function learnersSave(id, data) {
            if (id == 1) {
              return this.dataService.post(this.emisApiUrl + '/LrningDetCUD', data);
            } else {
              return this.dataService.post(this.emisApiUrl + '/VlntrDetCUD', data);
            }
          }
        }, {
          key: "learnerGet",
          value: function learnerGet(SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/LrningDetGet?SchlId=' + SchlId, true);
          }
        }, {
          key: "volunteersGet",
          value: function volunteersGet(SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/VlntrDetGet?SchlId=' + SchlId, true);
          }
        }, {
          key: "BrteMappedStudList",
          value: function BrteMappedStudList(schoolId) {
            return this.dataService.getData(this.emisApiUrl + '/BrteMappedStudList?SchoolId=' + schoolId, true);
          }
        }, {
          key: "cmanOtpSend",
          value: function cmanOtpSend(data) {
            return this.dataService.post(this.emisApiUrl3 + '/cmanOtpSend', data);
          }
        }, {
          key: "mobileVerifyOtpSubmit",
          value: function mobileVerifyOtpSubmit(data) {
            return this.dataService.post(this.emisApiUrl3 + '/cmanOtpCheck', data);
          }
        }, {
          key: "OoscNvrEnrollSave",
          value: function OoscNvrEnrollSave(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/OoscNvrEnrollSave', data);
          }
        }, {
          key: "OoscNewSurveySave",
          value: function OoscNewSurveySave(data, refresh) {
            return this.dataService.post(this.emisApiUrl + '/OoscSurveyAdmCUD', data);
          }
        }, {
          key: "OoscNvrEnrollGet",
          value: function OoscNvrEnrollGet(data, refresh) {
            return this.dataService.getData(this.emisApiUrl + '/OoscNvrEnrollGet?TchrId=' + data, true);
          }
        }, {
          key: "getNvrEnrolmentStudentListPhaseTwo",
          value: function getNvrEnrolmentStudentListPhaseTwo(teacher_id, dist_id) {
            return this.dataService.getData(this.emisApiUrl + '/OOSCNvrEnrlStudListPhaseTwo?TchrId=' + teacher_id + '&District=' + dist_id, true);
          }
        }, {
          key: "OoscSurveyAdmGet",
          value: function OoscSurveyAdmGet(school_id, student_id) {
            return this.dataService.getData(this.emisApiUrl + '/OoscSurveyAdmGet?school_id=' + school_id + '&student_id=' + student_id, true);
          }
        }, {
          key: "OoscSurveyAdmStudGet",
          value: function OoscSurveyAdmStudGet(school_id) {
            return this.dataService.getData(this.emisApiUrl + '/OoscSurveyAdmStudGet?school_id=' + school_id, true);
          }
        }, {
          key: "StcCenterDetailsSave",
          value: function StcCenterDetailsSave(data) {
            return this.dataService.post(this.emisApiUrl + '/StcCenterDetailsSave', data);
          }
        }, {
          key: "StcCenterDetailsGet",
          value: function StcCenterDetailsGet(CreatedBy, Type) {
            return this.dataService.getData(this.emisApiUrl + '/StcCenterDetailsGet?CreatedBy=' + CreatedBy + '&Type=' + Type, true);
          }
        }, {
          key: "StcStudentMigrantSave",
          value: function StcStudentMigrantSave(data) {
            return this.dataService.post(this.emisApiUrl + '/StcStudentMigrantSave', data);
          }
        }, {
          key: "StcMigrateStudList",
          value: function StcMigrateStudList(BrteId, Type) {
            return this.dataService.getData(this.emisApiUrl + '/MigrateStudList?BrteId=' + BrteId + '&Type=' + Type, true);
          }
        }, {
          key: "HmMappedStudList",
          value: function HmMappedStudList(schoolId) {
            return this.dataService.getData(this.emisApiUrl + '/HmMappedStudList?SchoolId=' + schoolId, true);
          }
        }, {
          key: "ItkCenterVolunJson",
          value: function ItkCenterVolunJson(GroupId) {
            return this.dataService.getData(this.emisApiUrl + '/ItkCenterVolunJson?GroupId=' + GroupId, true);
          }
        }, {
          key: "ItkVolunCenterResponse",
          value: function ItkVolunCenterResponse(data) {
            return this.dataService.post(this.emisApiUrl + '/ItkVolunCenterResponse', data);
          }
        }, {
          key: "SRPWiseSchoolList",
          value: function SRPWiseSchoolList(data) {
            return this.dataService.post(this.emisApiUrl + '/SRPWiseSchoolList', data);
          }
        }, {
          key: "StudWiseRegister",
          value: function StudWiseRegister(data) {
            return this.dataService.post(this.emisApiUrl + '/StudWiseRegister', data);
          }
        }, {
          key: "hostelStuListGet",
          value: function hostelStuListGet(userId, date) {
            return this.dataService.getData(this.emisApiUrl + '/hostelStuListGet?userId=' + userId + '&date=' + date, true);
          }
        }, {
          key: "hostelStuAttUpt",
          value: function hostelStuAttUpt(data) {
            return this.dataService.post(this.emisApiUrl + '/hostelStuAttUpt', data);
          }
        }, {
          key: "hostelStaffListGet",
          value: function hostelStaffListGet(userId, date) {
            return this.dataService.getData(this.emisApiUrl + '/hostelStaffListGet?userId=' + userId + '&date=' + date, true);
          }
        }, {
          key: "hostelStaffAttUpt",
          value: function hostelStaffAttUpt(data) {
            return this.dataService.post(this.emisApiUrl + '/hostelStaffAttUpt', data);
          }
        }, {
          key: "StemRpAttendenceSts",
          value: function StemRpAttendenceSts() {
            return this.dataService.getData(this.emisApiUrl + '/StemRpAttendenceSts', true);
          }
        }]);
      }();

      _EmisService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }];
      };

      _EmisService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _EmisService);
      /***/
    },

    /***/
    47567:
    /*!************************************************!*\
      !*** ./src/app/services/emis/pmoa.services.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PmoaService": function PmoaService() {
          return (
            /* binding */
            _PmoaService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      52468);

      var _PmoaService = /*#__PURE__*/function () {
        function PmoaService(dataService) {
          _classCallCheck(this, PmoaService);

          this.dataService = dataService;
          this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl;
        }

        return _createClass(PmoaService, [{
          key: "getTotalDistrictList",
          value: function getTotalDistrictList() {
            return this.dataService.getData(this.emisApiUrl + '/alldistrictlist', true);
          }
        }, {
          key: "getTotalBlockList",
          value: function getTotalBlockList(district) {
            return this.dataService.getData(this.emisApiUrl + '/BlkListByDistrId?DistrID=' + district, true);
          }
        }, {
          key: "getTotalSchoolList",
          value: function getTotalSchoolList(blockId) {
            return this.dataService.getData(this.emisApiUrl + '/SchlListByBlkId?BlockId=' + blockId, true);
          }
        }, {
          key: "getSchoolListNew",
          value: function getSchoolListNew(data) {
            return this.dataService.getData(this.emisApiUrl + '/SchlListByBlkIdTest?BlkId=' + data, true);
          }
        }, {
          key: "PMOASchlListByBlkId",
          value: function PMOASchlListByBlkId() {
            return this.dataService.getData(this.emisApiUrl + '/PMOASchlListByBlkId', true);
          }
        }, {
          key: "SpecsNeedClsList",
          value: function SpecsNeedClsList(SchoolId) {
            return this.dataService.getData(this.emisApiUrl + '/SpecsNeedClsList?SchlId=' + SchoolId, true);
          }
        }, {
          key: "SpecsNeedSecList",
          value: function SpecsNeedSecList(SchoolId, ClassId) {
            return this.dataService.getData(this.emisApiUrl + '/SpecsNeedSecList?SchlId=' + SchoolId + "&ClassId=" + ClassId, true);
          }
        }, {
          key: "getTotalStudentListData",
          value: function getTotalStudentListData(schId) {
            return this.dataService.getData(this.emisApiUrl + '/StudDetBySchlId?SchlId=' + schId, true);
          }
        }, {
          key: "getTotalClassData",
          value: function getTotalClassData(SchoolId) {
            return this.dataService.getData(this.emisApiUrl + '/ClasAndStudyBySclId?SchoolId=' + SchoolId, true);
          }
        }, {
          key: "getTotalStudentData",
          value: function getTotalStudentData(SchoolId, sec, Study) {
            return this.dataService.getData(this.emisApiUrl + '/StuPmoaRefCount?SchlId=' + SchoolId + "&Cls=" + Study + "&Sec=" + sec, true); // return this.dataService.getData(this.emisApiUrl +'/StudListByClasAndStudy?SchoolId=' + SchoolId + "&ClasSection=" + sec + "&Study=" + Study, true);
          }
        }, {
          key: "StudListByClasAndStudy",
          value: function StudListByClasAndStudy(SchoolId, sec, Study) {
            return this.dataService.getData(this.emisApiUrl + '/StudListByClasAndStudy?SchoolId=' + SchoolId + "&ClasSection=" + sec + "&Study=" + Study, true);
          }
        }, {
          key: "getabnormalStudentData",
          value: function getabnormalStudentData(SchoolId, Study, sec) {
            return this.dataService.getData(this.emisApiUrl + '/Eyescrennormalstud?SchlId=' + SchoolId + "&StuId=" + Study + "&SecId=" + sec, true);
          }
        }, {
          key: "getEyeScreeingData",
          value: function getEyeScreeingData(SchoolId, StudentId) {
            return this.dataService.getData(this.emisApiUrl + '/StuEyeScrePmoaDet?SchlId=' + SchoolId + "&StuId=" + StudentId, true);
          }
        }, {
          key: "getTotalList",
          value: function getTotalList(SchlId) {
            return this.dataService.getData(this.emisApiUrl + '/StuCountByShlId?SchlId=' + SchlId, true);
          }
        }, {
          key: "getSchoolCountData",
          value: function getSchoolCountData(SchlId, Study, Section) {
            return this.dataService.getData(this.emisApiUrl + '/StuCntEyeScrnByClsSec?SchlId=' + SchlId + "&Study=" + Study + "&Section=" + Section, true);
          }
        }, {
          key: "HealthScrnSave",
          value: function HealthScrnSave(data) {
            return this.dataService.post(this.emisApiUrl + '/HealthScrnSavePmoaMht', data);
          }
        }, {
          key: "getTotalCont",
          value: function getTotalCont(blockId) {
            return this.dataService.getData(this.emisApiUrl + '/SchlCntEyeScrnByBlk?BlkId=' + blockId, true);
          }
        }, {
          key: "getTotalSchoolCont",
          value: function getTotalSchoolCont(schoolID) {
            return this.dataService.getData(this.emisApiUrl + '/StuCntEyeScrnByTchr?SchlId=' + schoolID, true);
          }
        }, {
          key: "StudRefSpecs",
          value: function StudRefSpecs(schoolID) {
            return this.dataService.getData(this.emisApiUrl + '/StudRefSpecs?SchlId=' + schoolID, true);
          }
        }, {
          key: "StudRefSpecsCls",
          value: function StudRefSpecsCls(data) {
            return this.dataService.getData(this.emisApiUrl + '/StudRefSpecsCls?SchlId=' + data.schId + "&Cls=" + data.Cls + "&Sec=" + data.Sec, true);
          }
        }, {
          key: "saveEyeScreening",
          value: function saveEyeScreening(data) {
            return this.dataService.post(this.emisApiUrl + '/StuEyeScrePmoa', data).map(function (res) {
              return res;
            });
          }
        }, {
          key: "saveEyeScreeningSpectacel",
          value: function saveEyeScreeningSpectacel(data) {
            return this.dataService.post(this.emisApiUrl + '/EyeScrnSaveSpecsInfo', data).map(function (res) {
              return res;
            });
          }
        }, {
          key: "completeScreening",
          value: function completeScreening(data) {
            return this.dataService.post(this.emisApiUrl + '/EyeScreSchlStatus', data).map(function (res) {
              return res;
            });
          } //pmoa 

        }, {
          key: "getPmoaAddNewStudents",
          value: function getPmoaAddNewStudents(school_id, clss, sec) {
            return this.dataService.getData(this.emisApiUrl + '/AddPmoaStud?school_id=' + school_id + '&class=' + clss + '&sec=' + sec, true);
          } // ndd

        }, {
          key: "schoolcount",
          value: function schoolcount(data) {
            // return this.dataService.getData(this.emisApiUrl +'/SchlAlbendazolTab?BlkId=', + data, true);
            return this.dataService.getData(this.emisApiUrl + '/SchlNDDSchlCount?BlkId=' + data, true);
          }
        }, {
          key: "schoollist",
          value: function schoollist(data) {
            return this.dataService.getData(this.emisApiUrl + '/SchlNDDSchlandStudList?BlkId=' + data + '&type=1', true);
          }
        }, {
          key: "studentlist",
          value: function studentlist(data) {
            return this.dataService.getData(this.emisApiUrl + '/SchlNDDSchlandStudList?schlid=' + data + '&type=2', true);
          }
        }, {
          key: "tabeltpost",
          value: function tabeltpost(data) {
            return this.dataService.post(this.emisApiUrl + '/StudNDDsave', data);
          }
        }, {
          key: "getpatchtabelvalue",
          value: function getpatchtabelvalue(schol_id, section, class1) {
            return this.dataService.getData(this.emisApiUrl + '/StudNDDGet?schlId=' + schol_id + '&Sec=' + section + '&Cls=' + class1, true);
          }
        }, {
          key: "getcount",
          value: function getcount(data) {
            return this.dataService.getData(this.emisApiUrl + '/SchNDDStudListCount?SchlId=' + data, true);
          }
        }]);
      }();

      _PmoaService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }];
      };

      _PmoaService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _PmoaService);
      /***/
    },

    /***/
    35252:
    /*!***********************************************!*\
      !*** ./src/app/services/emis/sids.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidsService": function SidsService() {
          return (
            /* binding */
            _SidsService
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


      var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data.service */
      52468);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _SidsService = /*#__PURE__*/function () {
        function SidsService(dataService) {
          _classCallCheck(this, SidsService);

          this.dataService = dataService;
          this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.emisApiUrl;
          this.leaveSubmitted = false;
          this.tntpApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tntpApiUrl;
        }

        return _createClass(SidsService, [{
          key: "getConfirmStatus",
          value: function getConfirmStatus(schoolid, date) {
            return this.dataService.getData(this.emisApiUrl + '/SchoolAttendanceStatusDetail?schoolid=' + schoolid + '&date=' + date, true);
          }
        }, {
          key: "getAllClassLists",
          value: function getAllClassLists(data) {
            return this.dataService.post(this.emisApiUrl + '/school_info', data);
          }
        }, {
          key: "getStageList",
          value: function getStageList() {
            return this.dataService.getData(this.emisApiUrl + '/inspection_stagemaster', '');
          } // SidsService.ts

        }, {
          key: "HMinspection_list",
          value: function HMinspection_list(userId) {
            var body = {
              user_id: userId
            };
            return this.dataService.post(this.emisApiUrl + '/HMinspection_list', body);
          }
        }, {
          key: "SidsGeneralQues",
          value: function SidsGeneralQues(data) {
            return this.dataService.post(this.emisApiUrl + '/SecSidsGeneralQues', data);
          }
        }, {
          key: "inspectionlist",
          value: function inspectionlist(data) {
            return this.dataService.post(this.emisApiUrl + '/inspection_list', data);
          }
        }, {
          key: "PostinsWorkForm",
          value: function PostinsWorkForm(data) {
            return this.dataService.post(this.emisApiUrl + '/insert_inspection_data', data);
          }
        }, {
          key: "schoolStatusList",
          value: function schoolStatusList(data) {
            return this.dataService.post(this.emisApiUrl + '/school_status_list', data);
          }
        }, {
          key: "SecSidsBulidVisit",
          value: function SecSidsBulidVisit(data) {
            return this.dataService.post(this.emisApiUrl + '/SecSidsBulidVisit', data);
          }
        }, {
          key: "SecSidsFloorsVisit",
          value: function SecSidsFloorsVisit(data) {
            return this.dataService.post(this.emisApiUrl + '/SecSidsFloorsVisit', data);
          }
        }, {
          key: "SecSidsRoomsCUD",
          value: function SecSidsRoomsCUD(data) {
            return this.dataService.post(this.emisApiUrl + '/SecSidsRoomsCUD', data);
          }
        }, {
          key: "SecSidsToiletVisit",
          value: function SecSidsToiletVisit(data) {
            return this.dataService.post(this.emisApiUrl + '/SecSidsToiletVisit', data);
          }
        }, {
          key: "SecVistorSaveSchlDeta",
          value: function SecVistorSaveSchlDeta(data) {
            return this.dataService.post(this.emisApiUrl + '/SecVistorSaveSchlDeta', data);
          }
        }, {
          key: "SecSidsGeneralQuesGet",
          value: function SecSidsGeneralQuesGet(visit) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsGeneralQuesGet?VisitId=' + visit, true);
          }
        }, {
          key: "SecSidsSchlGenrlInfoGet",
          value: function SecSidsSchlGenrlInfoGet(visit) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsSchlGenrlInfoGet?Visit_id=' + visit, true);
          }
        }, {
          key: "SecSidsBulidVisitGet",
          value: function SecSidsBulidVisitGet(id, sclid) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsBulidVisitGet?Visit_id=' + id + '&SchlId=' + sclid, true);
          }
        }, {
          key: "SecSidsFloorVisitDet",
          value: function SecSidsFloorVisitDet(sclid, visit) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsFloorVisitDet?SchlId=' + sclid + '&VisitId=' + visit, true);
          }
        }, {
          key: "SecSidsFloorsVisitGet",
          value: function SecSidsFloorsVisitGet(id, sclid) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsFloorsVisitGet?visit_id=' + id + '&bldg_idx_id=' + sclid, true);
          }
        }, {
          key: "SecVistorSaveSchlDetaGet",
          value: function SecVistorSaveSchlDetaGet(id) {
            return this.dataService.getData(this.emisApiUrl + '/SecVistorSaveSchlDetaGet?id=' + id, true);
          }
        }, {
          key: "SecSidsRoomsVisitGet",
          value: function SecSidsRoomsVisitGet(id, blogId, floorId) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsRoomsVisitGet?Visit_id=' + id + '&Blog_id=' + blogId + '&Floor_id=' + floorId, true);
          }
        }, {
          key: "SecSidsRoomsVisitDet",
          value: function SecSidsRoomsVisitDet(sclid, visit) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsRoomsVisitDet?SchlId=' + sclid + '&VisitId=' + visit, true);
          }
        }, {
          key: "SecSidsSchlGenrlInfo",
          value: function SecSidsSchlGenrlInfo(data) {
            return this.dataService.post(this.emisApiUrl + '/SecSidsSchlGenrlInfo', data);
          }
        }, {
          key: "SecSidsVisitDetails",
          value: function SecSidsVisitDetails(UsrId) {
            return this.dataService.getData(this.emisApiUrl + '/SecSidsVisitDetails?VisitId=' + UsrId, true);
          }
        }, {
          key: "S3ImageSave",
          value: function S3ImageSave(data) {
            return this.dataService.post(this.emisApiUrl + '/S3ImageSave', data);
          }
        }, {
          key: "hm_demolitn_bldng_add",
          value: function hm_demolitn_bldng_add(data) {
            return this.dataService.post(this.emisApiUrl + '/hm_demolitn_bldng_add', data);
          }
        }, {
          key: "StgSidsDelBuilding",
          value: function StgSidsDelBuilding(data) {
            return this.dataService.post(this.emisApiUrl + '/StgSidsDelBuilding', data);
          }
        }, {
          key: "StgSidsDelFloor",
          value: function StgSidsDelFloor(data) {
            return this.dataService.post(this.emisApiUrl + '/StgSidsDelFloor', data);
          }
        }, {
          key: "StgSidsDelRoom",
          value: function StgSidsDelRoom(data) {
            return this.dataService.post(this.emisApiUrl + '/StgSidsDelRoom', data);
          }
        }, {
          key: "SchlVisitStatus",
          value: function SchlVisitStatus(data) {
            return this.dataService.post(this.emisApiUrl + '/StgSchlVisitStatus', data);
          }
        }]);
      }();

      _SidsService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
        }];
      };

      _SidsService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _SidsService);
      /***/
    },

    /***/
    83102:
    /*!*************************************************!*\
      !*** ./src/app/services/emis/upload.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UploadService": function UploadService() {
          return (
            /* binding */
            _UploadService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data.service */
      52468);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_pages_rc_view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/pages/rc/view-pdf/view-pdf.page */
      65175);

      var _UploadService = /*#__PURE__*/function () {
        function UploadService(dataService, modalCtrl) {
          _classCallCheck(this, UploadService);

          this.dataService = dataService;
          this.modalCtrl = modalCtrl;
          this.getSignedUrlApi = 'https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-preurl';
          this.readingFileApi = 'https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl';
          this.emisApplicationCloudFront = 'https://d21mc000xink7q.cloudfront.net/';
        }

        return _createClass(UploadService, [{
          key: "getSignedUrl",
          value: function getSignedUrl(bucketName, ext, fileName, expiry) {
            var params = {
              "bcktId": bucketName,
              "ext": ext,
              "filename": fileName,
              "expiry": expiry
            };
            return this.dataService.getDataWithParams(this.getSignedUrlApi, params, true);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(path, file) {
            return this.dataService.put(path, file);
          }
        }, {
          key: "getUploadedFiles",
          value: function getUploadedFiles(bucketName, fileName, expiry) {
            var params = {
              "bcktId": bucketName,
              "filename": fileName,
              "expiry": expiry
            };
            return this.dataService.getDataWithParams(this.readingFileApi, params, true);
          }
        }, {
          key: "getBucketFolderNameForRC",
          value: function getBucketFolderNameForRC(form, type) {
            var folder = 'RC/' + form + '/' + type + '/';
            return folder;
          }
          /**
           * Maps app_type (numeric) to the RC folder code used in the emisapplication bucket.
           * This mapping matches the folder codes used by the web app (angular-emis-fe)
           * when uploading via hugeFileContentUpload.
           */

        }, {
          key: "getAppTypeToFolderCode",
          value: function getAppTypeToFolderCode(appType) {
            var mapping = {
              '1': '1A',
              '2': 'IIA',
              '3': 'IIB',
              '4': '1B',
              '5': '1F',
              '6': '1D',
              '7': '1E',
              '8': '1C',
              '9': 'VII',
              '10': 'V',
              '11': 'IV'
            };
            return mapping[appType] || '';
          }
          /**
           * Builds the full CloudFront URL for viewing an RC file.
           * Pattern: emisApplicationCloudFront + RC/<folderCode>/<type>/ + filename
           */

        }, {
          key: "getRCFileViewUrl",
          value: function getRCFileViewUrl(appType, filename) {
            var folderCode = this.getAppTypeToFolderCode(appType);

            if (!folderCode || !filename) {
              return '';
            }

            var ext = filename.split('.').pop().toLowerCase();
            var type = ext == 'pdf' ? 'pdf' : 'images';
            return this.emisApplicationCloudFront + this.getBucketFolderNameForRC(folderCode, type) + filename;
          } //view pdf from bucket using modal controller

        }, {
          key: "viewPdf",
          value: function viewPdf(docName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee19() {
              var ext, modal;
              return _regenerator().w(function (_context19) {
                while (1) switch (_context19.n) {
                  case 0:
                    ext = "pdf";
                    this.image1 = docName;
                    _context19.n = 1;
                    return this.modalCtrl.create({
                      component: src_app_pages_rc_view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_1__.ViewPdfPage,
                      componentProps: {
                        image: this.image1,
                        extension: ext
                      },
                      cssClass: 'fullscreen',
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context19.v;
                    _context19.n = 2;
                    return modal.present();

                  case 2:
                    return _context19.a(2);
                }
              }, _callee19, this);
            }));
          }
        }]);
      }();

      _UploadService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }];
      };

      _UploadService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], _UploadService);
      /***/
    },

    /***/
    92275:
    /*!***********************************************!*\
      !*** ./src/app/services/emis/user.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
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


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data.service */
      52468);

      var _UserService = /*#__PURE__*/function () {
        function UserService(dataService) {
          _classCallCheck(this, UserService);

          this.dataService = dataService;
          this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl;
          this.awsApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.awsApiUrl;
          this.appVersionApiUrl = "https://emis3.tnschools.gov.in/api";
          this.readingFileApi = "https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl";
          this.udiseCode = "";
          this.readFileUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.readFileUrl;
          this.writeFileUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.writeFileUrl;
          this.emisApiUrlJango1 = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrlJango1;
        }

        return _createClass(UserService, [{
          key: "getFile",
          value: function getFile(bucketName, fileName, expiry) {
            var params = {
              bcktId: bucketName,
              filename: fileName,
              expiry: expiry
            };
            return this.dataService.getDataWithParamsFiles(this.readFileUrl, params, true);
          }
        }, {
          key: "getFileUrl1",
          value: function getFileUrl1(bucketName, ext, fileName, expiry) {
            var params = {
              bcktId: bucketName,
              ext: ext,
              filename: fileName,
              expiry: expiry
            };
            return this.dataService.getFileWithParams(this.writeFileUrl, params, true);
          }
        }, {
          key: "saveCivilSurvey",
          value: function saveCivilSurvey(data) {
            return this.dataService.post(this.emisApiUrl + "/CivilSrvyRespMob", data);
          }
        }, {
          key: "saveLibrarySurvey",
          value: function saveLibrarySurvey(data) {
            return this.dataService.post(this.emisApiUrl + "/LibSrvyRespMob", data);
          }
        }, {
          key: "saveCRC",
          value: function saveCRC(data) {
            return this.dataService.post(this.emisApiUrl + "/TchCrcMtObsrvQuestCUD", data);
          }
        }, {
          key: "saveCrcQuestions2",
          value: function saveCrcQuestions2(data) {
            return this.dataService.post(this.emisApiUrl + "/TchCrcMtObsrvQuestTrm2CUD", data);
          }
        }, {
          key: "SaveHodSurvey",
          value: function SaveHodSurvey(data) {
            return this.dataService.post(this.emisApiUrl + "/SaveHodSurvey", data);
          }
        }, {
          key: "saveCivilEvaluationSurvey",
          value: function saveCivilEvaluationSurvey(data) {
            return this.dataService.post(this.emisApiUrl + "/CivilEvlu", data);
          }
        }, {
          key: "saveCivilSids",
          value: function saveCivilSids(data) {
            return this.dataService.post(this.emisApiUrl + "/SaveCvlRspnse", data);
          } // saveCommonSids(data) {
          //     return this.dataService.post(this.emisApiUrl + '/SidsSchlGenrlInfo', data);
          // }

        }, {
          key: "saveCommonSids",
          value: function saveCommonSids(data) {
            return this.dataService.post(this.emisApiUrl + "/StgSidsSchlGenrlInfo", data);
          } // saveBuildingSids(data) {
          //     return this.dataService.post(this.emisApiUrl + '/SidsBulidVisit', data);
          // }

        }, {
          key: "saveBuildingSids",
          value: function saveBuildingSids(data) {
            return this.dataService.post(this.emisApiUrl + "/StgSidsBulidVisit", data);
          }
        }, {
          key: "saveWaterStationSids",
          value: function saveWaterStationSids(data) {
            return this.dataService.post(this.emisApiUrl + "/SidsWaterVisit", data);
          } // getBuildingSids(id,sclid) {
          //     return this.dataService.getData(this.emisApiUrl + '/SidsBulidVisitGet?Visit_id=' + id + '&SchlId=' + sclid, true);
          // }

        }, {
          key: "getBuildingSids",
          value: function getBuildingSids(id, sclid) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsBulidVisitGet?Visit_id=" + id + "&SchlId=" + sclid, true);
          } // getFloorSids(id,sclid) {
          //     return this.dataService.getData(this.emisApiUrl + '/SidsFloorsVisitGet?visit_id=' + id + '&bldg_idx_id=' + sclid, true);
          // }

        }, {
          key: "getFloorSids",
          value: function getFloorSids(id, sclid) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsFloorsVisitGet?visit_id=" + id + "&bldg_idx_id=" + sclid, true);
          } // getRoomSids(id,blogId, floorId) {
          //     return this.dataService.getData(this.emisApiUrl + '/SidsRoomsVisitGet?Visit_id=' + id + '&Blog_id=' + blogId + '&Floor_id=' + floorId, true);
          // }

        }, {
          key: "getRoomSids",
          value: function getRoomSids(id, blogId, floorId) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsRoomsVisitGet?Visit_id=" + id + "&Blog_id=" + blogId + "&Floor_id=" + floorId, true);
          } // saveFloorSids(data) {
          //     return this.dataService.post(this.emisApiUrl + '/SidsFloorsVisit', data);
          // }

        }, {
          key: "saveFloorSids",
          value: function saveFloorSids(data) {
            return this.dataService.post(this.emisApiUrl + "/StgSidsFloorsVisit", data);
          } // saveRoomSids(data) {
          //     return this.dataService.post(this.emisApiUrl + '/SidsRoomsCUD', data);
          // }

        }, {
          key: "saveRoomSids",
          value: function saveRoomSids(data) {
            return this.dataService.post(this.emisApiUrl + "/StgSidsRoomsCUD", data);
          } // saveToiletSids(data) {
          //     return this.dataService.post(this.emisApiUrl + '/SidsToiletVisit', data);
          // }

        }, {
          key: "saveToiletSids",
          value: function saveToiletSids(data) {
            return this.dataService.post(this.emisApiUrl + "/StgSidsToiletVisit", data);
          }
        }, {
          key: "savepayirchiparvai",
          value: function savepayirchiparvai(data) {
            return this.dataService.post(this.emisApiUrl + "/QuestionStoreInPP", data);
          }
        }, {
          key: "saveWaterSids",
          value: function saveWaterSids(data) {
            return this.dataService.post(this.emisApiUrl + "/SidsDrinWatTyp", data);
          } // saveVisitSids(data) {
          //     return this.dataService.post(this.emisApiUrl + '/VistorSaveSchlDeta', data);
          // }
          // getVisitSids(id) {
          //     return this.dataService.getData(this.emisApiUrl + '/VistorSaveSchlDetaGet?id=' + id, true);
          // }

        }, {
          key: "saveVisitSids",
          value: function saveVisitSids(data) {
            return this.dataService.post(this.emisApiUrl + "/StgVistorSaveSchlDeta", data);
          }
        }, {
          key: "getVisitSids",
          value: function getVisitSids(id) {
            return this.dataService.getData(this.emisApiUrl + "/StgVistorSaveSchlDetaGet?id=" + id, true);
          }
        }, {
          key: "SidsGeneralQues",
          value: function SidsGeneralQues(data) {
            return this.dataService.post(this.emisApiUrl + "/StgSidsGeneralQues", data);
          }
        }, {
          key: "saveEnnumEzhuthum",
          value: function saveEnnumEzhuthum(data) {
            return this.dataService.post(this.emisApiUrl + "/EEQusetAnsCUD", data);
          }
        }, {
          key: "getUniCodeData",
          value: function getUniCodeData(code, TrnDate) {
            return this.dataService.getData(this.emisApiUrl + "/EETrnCodeGetDet?TrnCode=" + code + "&TrnDate=" + TrnDate, true);
          }
        }, {
          key: "getOTPData",
          value: function getOTPData(code, TrnDate) {
            return this.dataService.getData(this.emisApiUrl + "/OtpWiseListGenerate?OtpNo=" + code + "&Date=" + TrnDate, true);
          }
        }, {
          key: "getUdisePdf",
          value: function getUdisePdf(sch_id) {
            return this.dataService.getData(this.emisApiUrl + "/schlproPDF?school_id=" + sch_id, true);
          }
        }, {
          key: "getMediumDetails",
          value: function getMediumDetails(data, refresh) {
            return this.dataService.getData(this.emisApiUrl + "/schlProfLangMedi?sch_id=" + data, true);
          }
        }, {
          key: "getPdfReport",
          value: function getPdfReport(data) {
            return this.dataService.getData(this.emisApiUrl + "/StuTeachNonTeachStrngth?sch_id=" + data, true);
          } // Statistic API //

        }, {
          key: "getSchoolInfo",
          value: function getSchoolInfo(data) {
            return this.dataService.getData(this.emisApiUrl + "/SclDetails?udise=" + data, true);
          }
        }, {
          key: "getSidsData",
          value: function getSidsData(SclId, UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/GetCvlRspnse?SclId=" + SclId + "&UsrId=" + UsrId, true);
          }
        }, {
          key: "getSidsResponedData",
          value: function getSidsResponedData(UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/GetCvlRspnse?UsrId=" + UsrId, true);
          } // getSidsNewResponedData(UsrId) {
          //     return this.dataService.getData(this.emisApiUrl + '/SidsVisitDetails?VisitId=' + UsrId , true);
          // }

        }, {
          key: "getSidsNewResponedData",
          value: function getSidsNewResponedData(UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsVisitDetails?VisitId=" + UsrId, true);
          }
        }, {
          key: "getCivilStatus",
          value: function getCivilStatus(SchoolId, UsrNam, SurId) {
            return this.dataService.getData(this.emisApiUrl + "/CheckCivilSurveyData?SchoolId=" + SchoolId + "&UsrNam=" + UsrNam + "&SurId=" + SurId, true);
          }
        }, {
          key: "getExpermentData",
          value: function getExpermentData(SchlId, Batch) {
            return this.dataService.getData(this.emisApiUrl + "/StemExperimntGet?SchlId=" + SchlId + "&Batch=" + Batch, true);
          }
        }, {
          key: "profileDetail",
          value: function profileDetail() {
            return this.dataService.getData(this.emisApiUrl + "/StemAmbastorDetail", true);
          }
        }, {
          key: "viProfileDetail",
          value: function viProfileDetail(emis_username) {
            return this.dataService.getData(this.emisApiUrl + "/VIProfileGet?UserId=" + emis_username, true);
          }
        }, {
          key: "approvalDetail",
          value: function approvalDetail() {
            return this.dataService.getData(this.emisApiUrl + "/StemLeaveReq", true);
          }
        }, {
          key: "leavehistoryDetail",
          value: function leavehistoryDetail(UserId) {
            return this.dataService.getData(this.emisApiUrl + "/StemLeaveApplyGet?UserId=" + UserId, true);
          }
        }, {
          key: "editAmbastor",
          value: function editAmbastor(data) {
            return this.dataService.post(this.emisApiUrl + "/StemAmbastorDetailUpdt", data);
          }
        }, {
          key: "viProfileEdit",
          value: function viProfileEdit(data) {
            return this.dataService.post(this.emisApiUrl + "/VIProfileUpdate", data);
          } // getschoolZoneDetails(data) {
          //     return this.dataService.getData(this.emisApiUrl + '/BlkWiseSchlList?BlkId=' + data , true);
          // }

        }, {
          key: "getschoolZoneDetails",
          value: function getschoolZoneDetails() {
            return this.dataService.getData(this.emisApiUrl + "/StemBlkWiseSchlList", true);
          }
        }, {
          key: "getVasipuIyakamLibrary",
          value: function getVasipuIyakamLibrary(username) {
            return this.dataService.getData(this.emisApiUrl + "/VIUserSchlList?UserId=" + username, true);
          }
        }, {
          key: "getclassDetails",
          value: function getclassDetails(SchlId) {
            return this.dataService.getData(this.emisApiUrl + "/StemStudTotClsWise?SchlId=" + SchlId, true);
          }
        }, {
          key: "getschoolSlot",
          value: function getschoolSlot(SchlId) {
            return this.dataService.getData(this.emisApiUrl + "/SchedulingCalendar?SchlId=" + SchlId, true);
          }
        }, {
          key: "getTotalSlot",
          value: function getTotalSlot(UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/StudCntbyStemUsrId?UsrId=" + UsrId, true);
          }
        }, {
          key: "getCycleStatus",
          value: function getCycleStatus(UsrId, cycleid) {
            return this.dataService.getData(this.emisApiUrl + "/StemManualAutoFillCount?UserId=" + UsrId + "&CycleId=" + cycleid, true);
          }
        }, {
          key: "getschoollistslot",
          value: function getschoollistslot(UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/ScheduleDetByUsrId?UsrId=" + UsrId, true);
          }
        }, {
          key: "getOTPResp",
          value: function getOTPResp(userid) {
            return this.dataService.getData(this.emisApiUrl + "/StemOtpGet?SchlId=" + userid, true);
          }
        }, {
          key: "oTPResponse",
          value: function oTPResponse(data) {
            return this.dataService.post(this.emisApiUrl + "/StemOtpCUD", data);
          }
        }, {
          key: "studentResponse",
          value: function studentResponse(data) {
            return this.dataService.post(this.emisApiUrl + "/StemExperimntCUD", data);
          }
        }, {
          key: "leaveResponse",
          value: function leaveResponse(data) {
            return this.dataService.post(this.emisApiUrl + "/StemLeaveApply", data);
          }
        }, {
          key: "studentListData",
          value: function studentListData(data) {
            return this.dataService.post(this.emisApiUrl + "/StemStudListCUD", data);
          }
        }, {
          key: "slotData",
          value: function slotData(data) {
            return this.dataService.post(this.emisApiUrl + "/BookActivitySchedule", data);
          }
        }, {
          key: "getCalendar",
          value: function getCalendar() {
            return this.dataService.getData(this.emisApiUrl + "/StemCalanderView", true);
          }
        }, {
          key: "getOTP",
          value: function getOTP(otp, SchlId) {
            return this.dataService.getData(this.emisApiUrl + "/VerifyOtpForStem?Otp=" + otp + "&SchlId=" + SchlId, true);
          } // getVasipuIyakamOTP(otp,SchlId) {
          //     return this.dataService.getData(this.emisApiUrl + '/VerifyOtpForStem?Otp=' + otp + "&SchlId=" + SchlId, true);
          // }

        }, {
          key: "getVasipuIyakamOTP",
          value: function getVasipuIyakamOTP(otp, SchlId) {
            return this.dataService.getData(this.emisApiUrl + "/VIUserVerifyOtp?Otp=" + otp + "&SchlId=" + SchlId, true);
          }
        }, {
          key: "getTheam",
          value: function getTheam() {
            return this.dataService.getData(this.emisApiUrl + "/StemVideoListGet", true);
          }
        }, {
          key: "AutoAssign",
          value: function AutoAssign(data) {
            return this.dataService.post(this.emisApiUrl + "/AutoScheduleAssignSave", data);
          }
        }, {
          key: "getAutoSlot",
          value: function getAutoSlot(UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/stemAssignList?UserId=" + UsrId, true);
          }
        }, {
          key: "getViewSlot",
          value: function getViewSlot(UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/UserVisitShclList?UserId=" + UsrId, true);
          }
        }, {
          key: "getViewFillSlot",
          value: function getViewFillSlot(UsrId, cycle) {
            return this.dataService.getData(this.emisApiUrl + "/StemFilledList?UserId=" + UsrId + "&CycleId=" + cycle, true);
          }
        }, {
          key: "getautoAssignSlot",
          value: function getautoAssignSlot(SchlId, UsrId) {
            return this.dataService.getData(this.emisApiUrl + "/SchedulingCalendar1?SchlId=" + SchlId + "&UsrId=" + UsrId, true);
          }
        }, {
          key: "stemleaveApproval",
          value: function stemleaveApproval(data) {
            return this.dataService.post(this.emisApiUrl + "/StemOrgApproveLeave", data);
          }
        }, {
          key: "resetslot",
          value: function resetslot(data) {
            return this.dataService.post(this.emisApiUrl + "/StemResetAll", data);
          }
        }, {
          key: "resetAutoslot",
          value: function resetAutoslot(data) {
            return this.dataService.post(this.emisApiUrl + "/StemResetAutoAssign", data);
          }
        }, {
          key: "getstemModeDetails",
          value: function getstemModeDetails(UserId) {
            return this.dataService.getData(this.emisApiUrl + "/StemEventDates?UserId=" + UserId, true);
          }
        }, {
          key: "getHodStatus",
          value: function getHodStatus(SchoolId, UsrNam, SurId) {
            return this.dataService.getData(this.emisApiUrl + "/CheckHodSurveyData?SchoolId=" + SchoolId + "&UsrNam=" + UsrNam + "&SurId=" + SurId, true);
          }
        }, {
          key: "getAppVersion",
          value: function getAppVersion() {
            return this.dataService.getData(this.emisApiUrl + "/app_version?AppVersn=3", true);
          }
        }, {
          key: "getHODInspection",
          value: function getHODInspection(UserName) {
            return this.dataService.getData(this.emisApiUrl + "/GetHodSurveySclName?UsrNam=" + UserName, true);
          }
        }, {
          key: "getOoscUserDetails",
          value: function getOoscUserDetails(teacher_id) {
            return this.dataService.getData(this.emisApiUrl + "/oscuserdetails?UserId=" + teacher_id, true);
          }
        }, {
          key: "getOOSCSchlStuList",
          value: function getOOSCSchlStuList(school_id) {
            return this.dataService.getData(this.emisApiUrl + "/OOSCStudInfoSchlGet?SchlId=" + school_id, true);
          }
        }, {
          key: "getOoscStudentList",
          value: function getOoscStudentList(school_id) {
            return this.dataService.getData(this.emisApiUrl + "/OOSCStudListGet?schl_id=" + school_id, true);
          }
        }, {
          key: "getOoscDropoutStudentList",
          value: function getOoscDropoutStudentList(school_id) {
            return this.dataService.getData(this.emisApiUrl + "/OOSCPotDrpStudListGet?schl_id=" + school_id, true);
          } // getOoscSchoolList(blockId) {
          //     return this.dataService.getData(this.emisApiUrl + '/OOSCSchlListGet?blck_id=' + blockId, true);
          // }

        }, {
          key: "getResdSchool",
          value: function getResdSchool(type) {
            return this.dataService.getData(this.emisApiUrl + "/ResidentialSchool?type=" + type, true); // return this.dataService.getData(this.emisApiUrl + '/ResidentialSchool', true);
          }
        }, {
          key: "getBlockList",
          value: function getBlockList(distId) {
            return this.dataService.getData(this.emisApiUrl + "/getMasterBlock?dist_id=" + distId, true);
          }
        }, {
          key: "getAadharSearch",
          value: function getAadharSearch(data) {
            return this.dataService.post(this.emisApiUrl + "/searchStudents", data);
          }
        }, {
          key: "getSurveyQuestions",
          value: function getSurveyQuestions(surveyId) {
            return this.dataService.getData(this.awsApiUrl + "/surveyq?Surveyqestions=" + surveyId, true);
          }
        }, {
          key: "getEnnumEzhuthum",
          value: function getEnnumEzhuthum(userid) {
            return this.dataService.getData(this.emisApiUrl + "/EEQusetAnsGetByUserId?UserId=" + userid, true);
          }
        }, {
          key: "UpdateCWSNResponse",
          value: function UpdateCWSNResponse(data) {
            return this.dataService.post(this.emisApiUrl + "/UpdateCWSNTaggedDet", data);
          }
        }, {
          key: "saveCWSNResponse",
          value: function saveCWSNResponse(data) {
            return this.dataService.post(this.emisApiUrl + "/SaveCWSNResponse", data);
          }
        }, {
          key: "SaveCWSNResponseAndStuEnrl",
          value: function SaveCWSNResponseAndStuEnrl(data) {
            return this.dataService.post(this.emisApiUrl + "/SaveCWSNRespAndStuEnrl", data);
          }
        }, {
          key: "saveCwsnDisabilities",
          value: function saveCwsnDisabilities(data) {
            return this.dataService.post(this.emisApiUrl + "/SaveCWSNResponse", data);
          }
        }, {
          key: "getDetailVerification",
          value: function getDetailVerification(stuid) {
            return this.dataService.getData(this.emisApiUrl + "/GetCWSNTaggedDet?StuId=" + stuid, true);
          }
        }, {
          key: "getCWSN",
          value: function getCWSN(stuid) {
            return this.dataService.getData(this.emisApiUrl + "/GetCWSNResponse?StuId=" + stuid, true);
          }
        }, {
          key: "getDistrict",
          value: function getDistrict() {
            return this.dataService.getData(this.emisApiUrl + "/alldistrictlist", true);
          }
        }, {
          key: "getTrainerData",
          value: function getTrainerData(id, date, trnid, time) {
            return this.dataService.getData(this.emisApiUrl + "/EEInsGetByDteTme?UserId=" + id + "&CrtDate=" + date + "&TrnId=" + trnid + "&Time=" + time, true);
          }
        }, {
          key: "getTrainer",
          value: function getTrainer(id, date) {
            return this.dataService.getData(this.emisApiUrl + "/EETrnGetByDteTme?UserId=" + id + "&CrtDate=" + date, true);
          }
        }, {
          key: "getQuestion",
          value: function getQuestion() {
            return this.dataService.getData(this.emisApiUrl + "/GetEEQues", true);
          }
        }, {
          key: "getBlockData",
          value: function getBlockData(data) {
            return this.dataService.post(this.emisApiUrl + "/commonDrpdwn", data);
          } // getSchoolData(data) {
          //     return this.dataService.post(this.emisApiUrl + '/StudDetails' ,data);
          // }

        }, {
          key: "getSchoolData",
          value: function getSchoolData(blockid) {
            return this.dataService.getData(this.emisApiUrl + "/getMasterschoollist?block_id=" + blockid, true);
          }
        }, {
          key: "getAllClassList",
          value: function getAllClassList(code, schid) {
            return this.dataService.getData(this.awsApiUrl + "/mobileattendance/classsection?code=" + code + "&schId=" + schid, true);
          }
        }, {
          key: "getStudent",
          value: function getStudent(data) {
            return this.dataService.post(this.emisApiUrl + "/StudDetails", data);
          }
        }, {
          key: "getStudentList",
          value: function getStudentList(code, schid, classId, section) {
            debugger;
            return this.dataService.getData(this.awsApiUrl + "/mobileattendance/studentlist?code=" + code + "&schId=" + schid + "&classId=" + classId + "&section=" + section, true);
          }
        }, {
          key: "getIfscResponedData",
          value: function getIfscResponedData(ifsc_code) {
            return this.dataService.getData(this.emisApiUrl + "/RetrieveIfscBankdet?ifsc_code=" + ifsc_code, true);
          }
        }, {
          key: "saveBankData",
          value: function saveBankData(data) {
            return this.dataService.post(this.emisApiUrl + "/UpdateCWSNResponse", data);
          }
        }, {
          key: "saveOoscData",
          value: function saveOoscData(data, refresh) {
            return this.dataService.post(this.emisApiUrl + "/OOSCStudCUD", data);
          }
        }, {
          key: "getSchool",
          value: function getSchool(school_id) {
            return this.dataService.getData(this.emisApiUrl + "/getMasterschoollist?block_id=" + school_id, true);
          }
        }, {
          key: "getStudentData",
          value: function getStudentData(stud_id) {
            return this.dataService.getData(this.emisApiUrl + "/OOSCStudInfoGet?stud_id=" + stud_id, true);
          }
        }, {
          key: "getBlock",
          value: function getBlock(distid) {
            return this.dataService.getData(this.emisApiUrl + "/blocklist?distid=" + distid, true);
          }
        }, {
          key: "getNearBySchool",
          value: function getNearBySchool(data) {
            return this.dataService.post(this.emisApiUrl + "/SchoolSearch", data);
          } // ITK center support  -----by Priya

        }, {
          key: "getMyInspectionList",
          value: function getMyInspectionList(id) {
            return this.dataService.getData(this.emisApiUrl + "/ItkVolInspResByUsrId?UsrId=" + id, true);
          }
        }, {
          key: "getStduentList",
          value: function getStduentList(id) {
            return this.dataService.getData(this.emisApiUrl + "/StuLisMapdWithVoluntr?VoluntrId=" + id, true);
          }
        }, {
          key: "searchVolunteerById",
          value: function searchVolunteerById(id) {
            return this.dataService.getData(this.emisApiUrl + "/ItkVolSrchAllDist?VolntrId=" + id, true);
          }
        }, {
          key: "searchVolunteerByPhone",
          value: function searchVolunteerByPhone(phone) {
            return this.dataService.getData(this.emisApiUrl + "/ItkVolSrchAllDist?MblNo=" + phone, true);
          }
        }, {
          key: "saveInspectionDetails",
          value: function saveInspectionDetails(data) {
            return this.dataService.post(this.emisApiUrl + "/SaveItkVolInspResult", data);
          }
        }, {
          key: "getFileUrl",
          value: function getFileUrl(bucketName, ext, fileName, expiry) {
            var params = {
              bcktId: bucketName,
              ext: ext,
              filename: fileName,
              expiry: expiry
            };
            return this.dataService.getDataWithParams(this.readingFileApi, params, true);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(path, file) {
            return this.dataService.put(path, file);
          }
        }, {
          key: "saveTrainerAttendance",
          value: function saveTrainerAttendance(data, refresh) {
            return this.dataService.post(this.emisApiUrl + "/TrainerModCUD", data);
          }
        }, {
          key: "getTeacherTrainingList",
          value: function getTeacherTrainingList() {
            return this.dataService.getData(this.emisApiUrl + "/TrainingModDrpDwn", true);
          }
        }, {
          key: "getTrainnerData",
          value: function getTrainnerData(TrId, AtDate) {
            return this.dataService.getRecord(this.emisApiUrl + "/TrainerModGet?TrId=" + TrId + "&AtDate=" + AtDate);
          }
        }, {
          key: "getTrainingData",
          value: function getTrainingData(TchId) {
            return this.dataService.getRecord(this.emisApiUrl + "/TrainingModGet?TchId=" + TchId);
          }
        }, {
          key: "saveTraineeAttendance",
          value: function saveTraineeAttendance(data, refresh) {
            return this.dataService.post(this.emisApiUrl + "/TrainingModCUD", data);
          } //MHT

        }, {
          key: "getMHTSchoolList",
          value: function getMHTSchoolList(code, username, acYr) {
            return this.dataService.getData(this.emisApiUrl + "/MhtGetSchedDet?DistId=" + code + "&UserNme=" + username + "&AcYr=" + acYr, true);
          }
        }, {
          key: "getMHTStudentList",
          value: function getMHTStudentList(code, cls, section, acYear) {
            return this.dataService.getData(this.emisApiUrl + "/MhtStulistGet?SchlId=" + code + "&Cls=" + cls + "&Sec=" + section + "&acYear=" + acYear, true);
          }
        }, {
          key: "saveMHTStudentForm",
          value: function saveMHTStudentForm(data) {
            return this.dataService.post(this.emisApiUrl + "/MhtStuHlthChkCUD", data);
          }
        }, {
          key: "saveMHTGeoFencingPhoto",
          value: function saveMHTGeoFencingPhoto(data) {
            debugger;
            return this.dataService.post(this.emisApiUrl + "/MhtGeoFencingPhoto", data);
          }
        }, {
          key: "getGetMhtSummaryOfVisit",
          value: function getGetMhtSummaryOfVisit(UserName, SchoolId) {
            return this.dataService.getData(this.emisApiUrl + "/GetMhtSummaryOfVisit?UserName=" + UserName + "&SchoolId=" + SchoolId, true);
          }
        }, {
          key: "getGetMhtOnDatePhotoUploaded",
          value: function getGetMhtOnDatePhotoUploaded(UserName, SchoolId) {
            return this.dataService.getData(this.emisApiUrl + "/GetMhtOnDatePhotoUploaded?UserName=" + UserName + "&SchoolId=" + SchoolId, true);
          }
        }, {
          key: "PostLogForLatLong",
          value: function PostLogForLatLong(data) {
            return this.dataService.post(this.emisApiUrl + "/LogForLatLong", data);
          }
        }, {
          key: "getMHTStudentFormDeatails",
          value: function getMHTStudentFormDeatails(StudId, acYear) {
            return this.dataService.getData(this.emisApiUrl + "/MhtStuHlthChkGet?StudId=" + StudId + "&acYear=" + acYear, true);
          }
        }, {
          key: "getMHTStudentData",
          value: function getMHTStudentData(StudId) {
            return this.dataService.getData(this.emisApiUrl + "/StudCheckupAnsGet?StudId=" + StudId, true);
          } //DEIC

        }, {
          key: "getDEICStudents",
          value: function getDEICStudents(data) {
            return this.dataService.post(this.emisApiUrl + "/DEICStudents", data);
          }
        }, {
          key: "getDEICgetVisitedDate",
          value: function getDEICgetVisitedDate(StudId, flag) {
            return this.dataService.getData(this.emisApiUrl + "/DEICgetVisitedDate?StudId=" + StudId + "&flag=" + flag, true);
          }
        }, {
          key: "postDEICUpdateTreatmentStatus",
          value: function postDEICUpdateTreatmentStatus(data) {
            return this.dataService.post(this.emisApiUrl + "/DEICUpdateTreatmentStatus", data);
          } //------//

        }, {
          key: "getCountry",
          value: function getCountry() {
            return this.dataService.getData(this.emisApiUrl + "/CountryList", true);
          }
        }, {
          key: "getState",
          value: function getState() {
            return this.dataService.getData(this.emisApiUrl + "/StateList", true);
          }
        }, {
          key: "getInstitute",
          value: function getInstitute(insttype) {
            return this.dataService.getData(this.emisApiUrl + "/Poly_ITIList?InstiId=" + insttype, true);
          } // SidsFloorVisitDet(sclid, visit) {
          //     return this.dataService.getData(this.emisApiUrl + '/SidsFloorVisitDet?SchlId=' + sclid + '&VisitId=' + visit, true);
          // }

        }, {
          key: "SidsFloorVisitDet",
          value: function SidsFloorVisitDet(sclid, visit) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsFloorVisitDet?SchlId=" + sclid + "&VisitId=" + visit, true);
          } // SidsRoomsVisitDet(sclid, visit) {
          //     return this.dataService.getData(this.emisApiUrl + '/SidsRoomsVisitDet?SchlId=' + sclid + '&VisitId=' + visit, true);
          // }

        }, {
          key: "SidsRoomsVisitDet",
          value: function SidsRoomsVisitDet(sclid, visit) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsRoomsVisitDet?SchlId=" + sclid + "&VisitId=" + visit, true);
          } // SidsSchlGenrlInfoGet(visit) {
          //     return this.dataService.getData(this.emisApiUrl + '/SidsSchlGenrlInfoGet?Visit_id=' + visit, true);
          // }

        }, {
          key: "SidsSchlGenrlInfoGet",
          value: function SidsSchlGenrlInfoGet(visit) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsSchlGenrlInfoGet?Visit_id=" + visit, true);
          }
        }, {
          key: "SidsDrinWatTypDet",
          value: function SidsDrinWatTypDet(sclid, visit) {
            return this.dataService.getData(this.emisApiUrl + "/SidsDrinWatTypDet?SchlId=" + sclid + "&VisitId=" + visit, true);
          }
        }, {
          key: "SidsGeneralQuesGet",
          value: function SidsGeneralQuesGet(visit) {
            return this.dataService.getData(this.emisApiUrl + "/StgSidsGeneralQuesGet?VisitId=" + visit, true);
          }
        }, {
          key: "getMHTAddStudent",
          value: function getMHTAddStudent(SchlId, cls, section, acYear) {
            return this.dataService.getData(this.emisApiUrl + "/MhtStulistAdd?school_id=" + SchlId + "&class=" + cls + "&sec=" + section + "&acYear=" + acYear, true);
          }
        }, {
          key: "mhtTotalSchoolCount",
          value: function mhtTotalSchoolCount(username, acYear) {
            return this.dataService.getData(this.emisApiUrl + "/MhtScreenDetail?username=" + username + "&acYear=" + acYear, true);
          }
        }, {
          key: "mhtStudentsCount",
          value: function mhtStudentsCount(username, SchlId, acYear) {
            return this.dataService.getData(this.emisApiUrl + "/MhtStudTotCount?username=" + username + "&SchlId=" + SchlId + "&acYear=" + acYear, true);
          } //MHT referred child    DINESH KUMAR

        }, {
          key: "MhtReferredSchs",
          value: function MhtReferredSchs(username) {
            return this.dataService.getData(this.emisApiUrl + "/MhteamUserSchlDtls?mh_team_user=" + username, true);
          }
        }, {
          key: "MhtReferredStudentList",
          value: function MhtReferredStudentList(username, schlId) {
            return this.dataService.getData(this.emisApiUrl + "/MhtScrndDtls?mh_team_user=" + username + "&schlId=" + schlId, true);
          }
        }, {
          key: "mhtfollowup",
          value: function mhtfollowup(schlId) {
            return this.dataService.post(this.emisApiUrl + "/MHTAppointmentSave", schlId);
          }
        }, {
          key: "getfollowupdatamht",
          value: function getfollowupdatamht(StdntId) {
            return this.dataService.getData(this.emisApiUrl + "/MHTAppointmentDtlsGet?StdntId=" + StdntId, true);
          } //PMOA referred child    DINESH KUMAR

        }, {
          key: "PmoaReferredSchs",
          value: function PmoaReferredSchs(username) {
            return this.dataService.getData(this.emisApiUrl + "/PmoaScrndSchlList?userId=" + username, true);
          }
        }, {
          key: "PmoaReferredStudentList",
          value: function PmoaReferredStudentList(schlId, username) {
            return this.dataService.getData(this.emisApiUrl + "/StdntPmoaScrndDtls?SchoolId=" + schlId + "&userId=" + username, true);
          }
        }, {
          key: "getAwcAnganvadiList",
          value: function getAwcAnganvadiList(BlkId, phase_id) {
            return this.dataService.getData(this.emisApiUrl + "/AwcAnganvadiAreaListtest?BlockId=" + BlkId + "&PhaseId=" + phase_id, true);
          }
        }, {
          key: "getAwcAnganvadiDiagnosisList",
          value: function getAwcAnganvadiDiagnosisList(data) {
            return this.dataService.post(this.emisApiUrl + "/AwcAnganvadiListDiagonisis", data);
          }
        }, {
          key: "AwcAnganvadiStuGet",
          value: function AwcAnganvadiStuGet(AwcCode, PhaseId) {
            return this.dataService.getData(this.emisApiUrl + "/AwcAnganvadiStuGettest?AwcCode=" + AwcCode + "&PhaseId=" + PhaseId, true);
          }
        }, {
          key: "AwcAnganvadiDiagnosisStuGettest",
          value: function AwcAnganvadiDiagnosisStuGettest(data) {
            return this.dataService.post(this.emisApiUrl + "/AwcAnganvadiDiagnosisStuGettest", data);
          }
        }, {
          key: "AwcAnganvadiStuCUD",
          value: function AwcAnganvadiStuCUD(data) {
            return this.dataService.post(this.emisApiUrl + "/AwcAnganvadiStuCUD", data);
          }
        }, {
          key: "AwcScrCUD",
          value: function AwcScrCUD(data) {
            return this.dataService.post(this.emisApiUrl + "/AwcScrCUD", data);
          }
        }, {
          key: "getAwcStdDetails",
          value: function getAwcStdDetails(StudId) {
            return this.dataService.getData(this.emisApiUrl + "/AwcAnganvadiStuHistGet?StudId=" + StudId, true);
          }
        }, {
          key: "GetAwcScrDet",
          value: function GetAwcScrDet(childId, phaseId) {
            return this.dataService.getData(this.emisApiUrl + "/GetAwcScrDet?childId=" + childId + "&phaseId=" + phaseId, true);
          }
        }, {
          key: "saveAWCGeoFencingPhoto",
          value: function saveAWCGeoFencingPhoto(data) {
            return this.dataService.post(this.emisApiUrl + "/AWCGeoFencingPhoto", data);
          }
        }, {
          key: "getGetAWCSummaryOfVisit",
          value: function getGetAWCSummaryOfVisit(UserName, AwcCode) {
            return this.dataService.getData(this.emisApiUrl + "/GetAWCSummaryOfVisit?UserName=" + UserName + "&AwcCode=" + AwcCode, true);
          }
        }, {
          key: "getGetAWCOnDatePhotoUploaded",
          value: function getGetAWCOnDatePhotoUploaded(UserName, awcCode) {
            return this.dataService.getData(this.emisApiUrl + "/GetAWCOnDatePhotoUploaded?UserName=" + UserName + "&AwcCode=" + awcCode, true);
          }
        }, {
          key: "pmoafollowup",
          value: function pmoafollowup(schlId) {
            return this.dataService.post(this.emisApiUrl + "/PmoaAppointmentSave", schlId);
          }
        }, {
          key: "getfollowupdata",
          value: function getfollowupdata(StdntId) {
            // return this.dataService.getData(this.emisApiUrl + '/PmoaAppointmentDtlsGet',true);
            return this.dataService.getData(this.emisApiUrl + "/PmoaAppointmentDtlsGet?StdntId=" + StdntId, true);
          } //art and culture

        }, {
          key: "brtestatus",
          value: function brtestatus(data) {
            return this.dataService.post(this.emisApiUrl + "/ArtFormApprove", data);
          }
        }, {
          key: "unverifiedbrtestatus",
          value: function unverifiedbrtestatus(data) {
            return this.dataService.post(this.emisApiUrl + "/UnverifiedArtFormApprove", data);
          }
        }, {
          key: "vasipuIyakamSclSession",
          value: function vasipuIyakamSclSession(UserId, SchlId) {
            return this.dataService.getData(this.emisApiUrl + "/VIUsersSchlTotStud?UserId=" + UserId + "&SchlId=" + SchlId, true);
          }
        }, {
          key: "vasipuIyakamBatchDetails",
          value: function vasipuIyakamBatchDetails(data) {
            return this.dataService.post(this.emisApiUrl + "/VIStudsStrengthStore", data);
          }
        }, {
          key: "submitSessionData",
          value: function submitSessionData(data) {
            return this.dataService.post(this.emisApiUrl + "/VIStudsListStore", data);
          }
        }, {
          key: "vasipuIyakamClassSecStatus",
          value: function vasipuIyakamClassSecStatus(UserId) {
            return this.dataService.getData(this.emisApiUrl + "/VIStudsListStoreGet?UserId=" + UserId, true);
          }
        }, {
          key: "vasipuIyakamSclStatus",
          value: function vasipuIyakamSclStatus(UserId, SchlId, batch) {
            return this.dataService.getData(this.emisApiUrl + "/VIStudsListStoreGet?UserId=" + UserId + "&SchlId=" + SchlId + "&Batch=" + batch, true);
          }
        }, {
          key: "batchInfo",
          value: function batchInfo(sclId, userId) {
            return this.dataService.getData(this.emisApiUrl + "/VIStudsListStoreGet?UserId=" + userId + "&SchlId=" + sclId, true);
          }
        }, {
          key: "submitUniformData",
          value: function submitUniformData(data) {
            // return this.dataService.post(this.emisApiUrl + '/uniformMeasurmentCUD', data);
            return this.dataService.post(this.emisApiUrl + "/uniformMeasurmentCUD1", data);
          }
        }, {
          key: "studentlistData",
          value: function studentlistData(data) {
            return this.dataService.post(this.emisApiUrl + "/uniformMeasurmentStudlist", data);
          }
        }, {
          key: "getacdamicdata",
          value: function getacdamicdata() {
            return this.dataService.getData(this.emisApiUrl + "/AwcAcyr", true);
          }
        }, {
          key: "SchlLatLongUpdate",
          value: function SchlLatLongUpdate(data) {
            return this.dataService.post(this.emisApiUrl + "/SchlLatLongUpdate", data);
          }
        }, {
          key: "SchlLatLongUpdateGet",
          value: function SchlLatLongUpdateGet(emis_username) {
            return this.dataService.getData(this.emisApiUrl + "/SchlLatLongUpdateGet?emis_username=" + emis_username, true);
          }
        }, {
          key: "VOCDateWiseData",
          value: function VOCDateWiseData(data) {
            return this.dataService.post(this.emisApiUrl + "/VOCDateWiseData", data);
          }
        }, {
          key: "baseQuestionGet",
          value: function baseQuestionGet() {
            return this.dataService.getData(this.emisApiUrl + "/baseQuestionGet", true);
          }
        }, {
          key: "VOCFormCud",
          value: function VOCFormCud(data) {
            return this.dataService.post(this.emisApiUrl + "/VOCFormCud", data);
          }
        }, {
          key: "VOCFormGet",
          value: function VOCFormGet(data) {
            return this.dataService.getData(this.emisApiUrl + "/VOCFormGet?selectedDate=" + data.selectedDate + "&vocIndexId=" + data.vocIndexId, true);
          }
        }, {
          key: "mhtTotalSchoolCount2",
          value: function mhtTotalSchoolCount2(username, acYear, dgnId) {
            return this.dataService.getData(this.emisApiUrl + "/MhtScreenDetail2?username=" + username + "&acYear=" + acYear + "&dgnId=" + dgnId, true);
          }
        }, {
          key: "getMHTSchoolList2",
          value: function getMHTSchoolList2(data) {
            return this.dataService.post(this.emisApiUrl + "/MhtGetSchedDet2", data);
          }
        }, {
          key: "getMHTStudentList2",
          value: function getMHTStudentList2(data) {
            return this.dataService.post(this.emisApiUrl + "/MhtStulistGet2", data);
          }
        }, {
          key: "getDiagnosis",
          value: function getDiagnosis(type) {
            return this.dataService.getData(this.emisApiUrl + "/DiagnosisGet?type=" + type, true);
          }
        }, {
          key: "RSTMModuleCheck",
          value: function RSTMModuleCheck(BrteId) {
            return this.dataService.getData(this.emisApiUrl + "/RSTMModuleCheck?BrteId=" + BrteId, true);
          }
        }, {
          key: "healthBlockList",
          value: function healthBlockList() {
            return this.dataService.getData(this.emisApiUrl + "/healthBlockList", true);
          }
        }, {
          key: "GetAcYear",
          value: function GetAcYear() {
            return this.dataService.getData(this.emisApiUrl + "/GetAcYear", true);
          }
        }, {
          key: "getcwsnmenuenable",
          value: function getcwsnmenuenable(ids) {
            return this.dataService.getDJangoData("/getcwsnmenuenable?ids=" + ids, true);
          }
        }]);
      }();

      _UserService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }];
      };

      _UserService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _UserService);
      /***/
    },

    /***/
    48578:
    /*!***********************************************!*\
      !*** ./src/app/services/grievance.service.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GrievanceService": function GrievanceService() {
          return (
            /* binding */
            _GrievanceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./data.service */
      52468);
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert.service */
      25970);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _GrievanceService = /*#__PURE__*/function () {
        function GrievanceService(dataService, http, alertService, alertController) {
          _classCallCheck(this, GrievanceService);

          this.dataService = dataService;
          this.http = http;
          this.alertService = alertService;
          this.alertController = alertController;
          this.tntpApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tntpApiUrl;
          this.emisApiUrlWeb = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrlWeb;
          this.Lists = {
            grievanceDeptList: [{
              value: '90641',
              label: 'Chief Inspector of Physical Education	'
            }, {
              value: '90635',
              label: 'Directorate of Elementary Education'
            }, {
              value: '90636',
              label: 'Directorate of Private Schools'
            }, {
              value: '90637',
              label: 'Directorate of School Education'
            }, {
              value: '90638',
              label: 'Directorate of Government Examinations'
            }, {
              value: '90632',
              label: 'Samagra Shiksha'
            }, {
              value: '90633',
              label: 'SCERT'
            }, {
              value: '90634',
              label: 'Tamilnadu Private School Fee Determination Committee'
            }, {
              value: '90639',
              label: 'Tamilnadu Recruitment Board'
            }, {
              value: '90640',
              label: 'Tamilnadu Textbooks and Education Services Corporation'
            }],
            grievanceLevelList: [{
              value: '1',
              label: 'State'
            }, {
              value: '2',
              label: 'District'
            }, {
              value: '3',
              label: 'Education District'
            }, {
              value: '4',
              label: 'Block'
            }, {
              value: '5',
              label: 'School'
            }],
            grievanceTypeList: [{
              value: '1',
              label: 'New Entry'
            }, {
              value: '2',
              label: 'Existing Grievance'
            }],
            grievanceTypeTamilList: [{
              value: '1',
              label: 'புதிய விண்ணப்பம்'
            }, {
              value: '2',
              label: 'நிலுவையிலுள்ள விண்ணப்பம்'
            }],
            grievanceCategoryList: [{
              value: '1',
              label: 'Service - Based'
            }],
            grievanceCategoryTamilList: [{
              value: '1',
              label: 'பணிப்பலன் தொடர்பானது'
            }],
            issues: [{
              value: '3',
              label: 'Selection grade',
              type: '1'
            }, {
              value: '4',
              label: 'Special grade',
              type: '1'
            }, {
              value: '1',
              label: 'Regularisation',
              type: '1'
            }, {
              value: '2',
              label: 'Probation',
              type: '1'
            }, {
              value: '5',
              label: 'Higher Education Permission',
              type: '1'
            }, {
              value: '8',
              label: 'Promotion Panel Error',
              type: '1'
            }, {
              value: '12',
              label: 'Service Record Updation / Correction',
              type: '1'
            }, {
              value: '11',
              label: 'IFHRMS Issues',
              type: '1'
            }, {
              value: '7',
              label: 'NOC for Foreign Trip',
              type: '1'
            }, {
              value: '6',
              label: 'NOC for Passport',
              type: '1'
            }, {
              value: '99',
              label: 'Other',
              type: '1'
            }],
            issuesTamilList: [{
              value: '3',
              label: 'தேர்வு நிலை',
              type: '1'
            }, {
              value: '4',
              label: 'சிறப்பு நிலை',
              type: '1'
            }, {
              value: '1',
              label: 'பணிவரன்முறை',
              type: '1'
            }, {
              value: '2',
              label: 'தகுதிகாண் பருவம்',
              type: '1'
            }, {
              value: '5',
              label: 'உயர்கல்வி அனுமதி',
              type: '1'
            }, {
              value: '8',
              label: 'பதவி உயர்வு பட்டியல் திருத்தம் ',
              type: '1'
            }, {
              value: '12',
              label: 'பணிப்பதிவேட்டில் பதிவிடுதல் / திருத்தம்',
              type: '1'
            }, {
              value: '11',
              label: 'IFHRMS இடர்பாடுகள்',
              type: '1'
            }, {
              value: '7',
              label: 'வெளிநாடு செல்வதற்கான தடையின்மைச் சான்று',
              type: '1'
            }, {
              value: '6',
              label: 'கடவுசீட்டிற்கான தடையின்மைச் சான்று',
              type: '1'
            }, {
              value: '99',
              label: 'பிற / இதர',
              type: '1'
            }],
            grievanceStatus: [{
              value: '1',
              label: 'Submitted'
            }, {
              value: '2',
              label: 'In Progress'
            }, {
              value: '3',
              label: 'Forwarded to relevant dept'
            }, {
              value: '4',
              label: 'Resolved'
            }, {
              value: '5',
              label: 'Reopened'
            }],
            grievanceStatusTamil: [{
              value: '1',
              label: 'சமர்ப்பிக்கப்பட்டது'
            }, {
              value: '2',
              label: 'பரிசீலனையில் உள்ளது'
            }, {
              value: '3',
              label: 'சார்ந்த அலுவலகத்திற்கு மனு அனுப்பப்பட்டது'
            }, {
              value: '4',
              label: 'மனுவின் குறை தீர்க்கப்பட்டது'
            }, {
              value: '5',
              label: 'சரிசெய்யப்படவில்லை'
            }, {
              value: '6',
              label: 'தீர்க்கப்பட்டது'
            }]
          };
          this.langJson = {
            "english": {
              "PERSONALINFORMATION": "PERSONAL INFORMATION",
              "StaffId": "Staff ID",
              "StaffName": "Staff Name",
              "StaffDistrict": "Staff District",
              "StaffBlock": "Staff Block",
              "StaffMobile": "Staff Mobile",
              "StaffDesignation": "Staff Designation",
              "CurrentlyWorkingIn": "Currently Working In",
              "StaffStatus": "Staff Status",
              "GRIEVANCEDETAILS": "GRIEVANCE DETAILS",
              "GrievanceCategory": "Application Category",
              "Issue": "Issue",
              "OtherIssue": "Other Issue",
              "TypeofGrievance": "Type of Application",
              "GrievanceFileNo": "Application R.C. No.",
              "GrievanceFileSubmittedDate": "Application File Submitted Date",
              "GrievanceFileSubmittedDate1": "Application File Submitted Date",
              "PendingDays": "Pending Days",
              "ISSUEDETAILS": "ISSUE DETAILS",
              "Uploadproof": "Upload proof",
              "ExplaintheIssue": "Explain the Issue",
              "EnterStaffMobile": "Enter Staff Mobile",
              "EnterGrievanceCategory": "Select Application Category",
              "EnterIssue": "Select Issue",
              "EnterOtherIssue": "Enter Other Issue",
              "EnterTypeofGrievance": "Select Type of Application",
              "EnterGrievanceFileNo": "Enter Application R.C. No.",
              "EnterGrievanceFileSubmittedDate": "Select Application File Submitted Date",
              "EnterUploadproof": "Select Upload proof",
              "EnterExplaintheIssue": "Enter Explain the Issue",
              "PleaseEnter": "Please Enter",
              "SelectText": "Select",
              "Required": "Field is Required",
              "RaiseNewGrievance": "Raise New Grievance",
              "Remark": "Please Enter The Issue in Detail",
              "Submit": "Submit",
              "Update": "Update",
              "SelectDate": "Select Date",
              "ViewGrievance": "Staff Service Grievance Application",
              "StaffGrievance": "Staff Service Grievance Application",
              "Language": "Select Language",
              "NoData": "No Data Found",
              "VaildMobileNo": "Please Enter Valid Mobile Number",
              "Lang": 'English',
              "Search": "Search",
              "GrievanceStatus": "Application Status",
              "Grno": "Application ID"
            },
            "tamil": {
              "PERSONALINFORMATION": "விண்ணப்பதாரரின் விவரம்",
              "StaffId": "EMIS அடையாள எண்",
              "StaffName": "பெயர்",
              "StaffDistrict": "மாவட்டம்",
              "StaffBlock": "வட்டாரம்",
              "StaffMobile": "கைப்பேசி எண்",
              "StaffDesignation": "பதவி",
              "CurrentlyWorkingIn": "தற்போது பணிபுரியும் பள்ளி/அலுவலகம்",
              "StaffStatus": "தற்போதைய நிலை",
              "GRIEVANCEDETAILS": "விண்ணப்ப விவரம்",
              "GrievanceCategory": "விண்ணப்ப பிரிவு",
              "Issue": "விண்ணப்ப விவரம்",
              "OtherIssue": "இதர விண்ணப்ப விவரம்",
              "TypeofGrievance": "விண்ணப்ப வகை",
              "GrievanceFileNo": "விண்ணப்ப ந.க. எண்",
              "GrievanceFileSubmittedDate": "விண்ணப்பிக்கும் நாள்",
              "GrievanceFileSubmittedDate1": "விண்ணபித்த நாள்",
              "PendingDays": "நிலுவையிலுள்ள நாட்கள்",
              "ISSUEDETAILS": "விண்ணப்பம் சார்ந்த ஆவணங்கள்",
              "Uploadproof": "ஆவண நகலை பதிவேற்றவும்",
              "ExplaintheIssue": "விண்ணப்பம் சார்ந்த விவரங்களை விரிவாக குறிப்பிடவும்",
              "EnterStaffMobile": "",
              "EnterGrievanceCategory": "விண்ணப்ப பிரிவைத் தேர்ந்தெடுக்கவும்",
              "EnterIssue": "விண்ணப்ப விவரத்தை தேர்ந்தெடுக்கவும்",
              "EnterOtherIssue": "",
              "EnterTypeofGrievance": "விண்ணப்ப வகையைத் தேர்ந்தெடுக்கவும்",
              "EnterGrievanceFileNo": "",
              "EnterGrievanceFileSubmittedDate": "தேதியைத் தேர்ந்தெடுக்கவும்",
              "EnterUploadproof": "",
              "EnterExplaintheIssue": "",
              "PleaseEnter": "",
              "SelectText": "",
              "Required": "அவசியமானது",
              "RaiseNewGrievance": "புதிய விண்ணப்பம்",
              "Remark": "",
              "Submit": "சமர்ப்பிக்க",
              "Update": "சமர்ப்பிக்க",
              "SelectDate": "",
              "ViewGrievance": "பணியாளர் பணிப்பலன் சார்ந்த விண்ணப்பம்",
              "StaffGrievance": "பணியாளர் பணிப்பலன் சார்ந்த விண்ணப்பம்",
              "Language": "மொழியை தேர்ந்தெடுங்கள்",
              "NoData": "எந்த பதிவுகளும் கண்டறியப்படவில்லை",
              "VaildMobileNo": "சரியான கைபேசி எண்ணை உள்ளிடவும்",
              "Lang": 'தமிழ்',
              "Search": "தேடு",
              "GrievanceStatus": "விண்ணப்ப நிலை",
              "Grno": "விண்ணப்ப எண்"
            }
          };
        }

        return _createClass(GrievanceService, [{
          key: "TeacherDetailsGet",
          value: function TeacherDetailsGet(teacherId) {
            return this.dataService.getData(this.tntpApiUrl + '/GetStaffDetails?teacherId=' + teacherId, true);
          }
        }, {
          key: "saveStaffGrievance",
          value: function saveStaffGrievance(data) {
            return this.dataService.post(this.tntpApiUrl + '/StfGrvceCUD', data);
          }
        }, {
          key: "getStaffGrievance",
          value: function getStaffGrievance(teacherId) {
            return this.dataService.getData(this.tntpApiUrl + '/StfGrvceGET?Flag=2&UserId=' + teacherId, true);
          }
        }, {
          key: "SendingSmstoParent",
          value: function SendingSmstoParent(data) {
            return this.dataService.post(this.emisApiUrlWeb + '/SendingSmsParGet1', data);
          }
        }, {
          key: "sendOTP",
          value: function sendOTP(grNo, mobileNo) {
            var _this32 = this;

            var data = {
              "records": {
                "TemplateId": "1707169872744968927",
                "MobileNo": +mobileNo,
                "TemplateMsg": "வணக்கம்! தங்களுடைய விண்ணப்பம் {#var#} பெறப்பட்டது. நன்றி !! - தமிழ்நாடு பள்ளிக் கல்வித்துறை - TNSED",
                "var": {
                  "var1": grNo
                }
              }
            };
            this.SendingSmstoParent(data).subscribe(function (res) {
              if (res.dataStatus) {
                _this32.alertService.success('Message send successfully');
              } else {
                _this32.alertService.error('There is some error to send OTP');
              }
            });
          }
        }, {
          key: "onAlert",
          value: function onAlert(id, language, Grno) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee20() {
              var oKClicked, dataValue, header, message, inputLabel, button1, button2, inputs, button, alert;
              return _regenerator().w(function (_context20) {
                while (1) switch (_context20.n) {
                  case 0:
                    oKClicked = false;

                    if (id == 1) {
                      header = language == 'English' ? "Declaration" : "உறுதிமொழி";
                      message = '';
                      inputLabel = language == 'English' ? " I certify that all the details given above are true. I understand that departmental action may be taken against me if it is later discovered that I have furnished false or untrue information." : "மேலே அளிக்கபட்டுள்ள விவரங்கள் அனைத்தும் உண்மை என்று சான்று அளிக்கிறேன். நான் தவறான அல்லது உண்மைக்கு மாறான தகவல்கள் அளித்திருப்பதாக பிற்காலத்தில் தெரிய வந்தால் என் மீது துறைரீதியான நடவடிக்கை எடுக்கப்படும் என்பதை அறிவேன்.";
                      button1 = language == 'English' ? "CANCEL" : "இல்லை";
                      button2 = language == 'English' ? "OK" : "ஆம்";
                      inputs = [{
                        name: 'Declaration',
                        type: 'checkbox',
                        label: inputLabel,
                        value: 1
                      }];
                      button = [{
                        text: button1,
                        handler: function handler(data) {
                          oKClicked = false;
                        }
                      }, {
                        text: button2,
                        handler: function handler(data) {
                          oKClicked = true;
                        }
                      }];
                    } else {
                      header = language == 'English' ? "Confirmation" : "உறுதிப்படுத்தல்";
                      message = language == 'English' ? "Your Grievance has been recorded. Grievance Ref no. is " + Grno + "." : "உங்களது விண்ணப்பம் சமர்ப்பிக்கப்பட்டது. விண்ணப்ப எண் " + Grno + ".";
                      button2 = language == 'English' ? "OK" : "ஆம்";
                      button = [{
                        text: button2,
                        handler: function handler() {
                          oKClicked = true;
                        }
                      }];
                    }

                    _context20.n = 1;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      cssClass: 'my-custom-popup',
                      inputs: inputs,
                      buttons: button
                    });

                  case 1:
                    alert = _context20.v;
                    _context20.n = 2;
                    return alert.present();

                  case 2:
                    _context20.n = 3;
                    return alert.onDidDismiss().then(function (data) {
                      if (oKClicked) {
                        dataValue = data;
                      } else {
                        alert.dismiss();
                      }
                    });

                  case 3:
                    return _context20.a(2, dataValue);
                }
              }, _callee20, this);
            }));
          }
        }]);
      }();

      _GrievanceService.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__.DataService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
        }];
      };

      _GrievanceService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()], _GrievanceService);
      /***/
    },

    /***/
    30155:
    /*!*************************************************!*\
      !*** ./src/app/services/interceptor.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpInterceptorService": function HttpInterceptorService() {
          return (
            /* binding */
            _HttpInterceptorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/add/operator/catch */
      86351);
      /* harmony import */


      var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/add/observable/throw */
      35732);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert.service */
      25970);
      /* harmony import */


      var _usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./usersession.service */
      64461);
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./authentication.service */
      7053);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      75592);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      40205);

      var _HttpInterceptorService = /*#__PURE__*/function () {
        function HttpInterceptorService(alertService, userSessionService, authService, navCtrl, network) {
          _classCallCheck(this, HttpInterceptorService);

          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.authService = authService;
          this.navCtrl = navCtrl;
          this.network = network;
        }

        return _createClass(HttpInterceptorService, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this33 = this;

            var authToken = window.localStorage.getItem("user_token");
            var authReq;

            if (request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.loginUrl)) {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  "Content-Type": "application/json",
                  Authorization: "EMIS@2019_api"
                }
              });
            } else if (request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.awsApiUrl) && authToken !== null) {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  Connection: "keep-alive",
                  "x-api-key": "3dPWrCiAyS96cjq8HFf21XLjEkFnOgU9mJVZUla7",
                  "Content-Type": "application/json"
                }
              });
            } else if (request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.emisApiUrl || _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api_url) && authToken !== null) {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  Token: authToken,
                  "Content-Type": "application/json",
                  Authorization: "EMIS_web@2019_api"
                }
              });
            } else if (request.url.startsWith("https://emis3.tnschools.gov.in/api")) {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  Token: authToken,
                  "Content-Type": "application/json",
                  Authorization: "EMIS_web@2019_api"
                }
              });
            } else if (request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.emisApiUrl3)) {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  Token: authToken,
                  "Content-Type": "application/json",
                  Authorization: "EMIS_web@2019_api"
                } //EMIS@2019_api

              });
            } else if (request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.tntpApiUrl) && authToken !== null) {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  Token: authToken,
                  Authorization: "2fca342e66efb1568d1d28edc7e59c64",
                  "Content-Type": "application/json"
                }
              });
            } else if (request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.emisApiUrlJango1) && authToken !== null) {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  Token: authToken,
                  "Content-Type": "application/json",
                  Authorization: "EMIS_web@2019_api"
                }
              });
            } else {
              authReq = request.clone({
                url: request.url,
                setHeaders: {
                  "Content-Type": ""
                }
              });
            }

            return next.handle(authReq)["catch"](function (error, caught) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                if (error.status === 401) {
                  _this33.authService.appLogout();
                } else {
                  _this33.broadcastFriendlyErrorMessage(error);
                }
              }

              return rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable.throwError(error);
            });
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var _this34 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "operation";
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                if (error.status == 401) {// localStorage.clear();
                  // this.authService.logOut();
                  // this.router.navigate(['/login']);
                } else if (error.status == 404) {
                  _this34.alertService.error(error.message);
                } else if (error.status == 503) {
                  _this34.alertService.error(error.message);
                } else if (error.status === 500) {
                  if (error.message) {
                    _this34.alertService.error(error.message);
                  }
                } else {
                  var errorMessage = "";
                  var type;

                  if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = "".concat(error.error.message);
                    type = 1;
                  } else {
                    // server-side error
                    errorMessage = "".concat(error.message);
                    type = 2;
                  } // this.alertService.error((type == 2) ? `${error.status} / ${error.statusText} Occurred` : `Error Message : ${errorMessage}`);


                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)("An error occurred, please try again later \n " + errorMessage);
                }
              }
            };
          }
        }, {
          key: "broadcastFriendlyErrorMessage",
          value: function broadcastFriendlyErrorMessage(rejection) {
            this.mod = this.userSessionService.mod1();
            var msg = "";

            if (rejection.status === 0 && (rejection.statusText === "" || rejection.statusText === "Unknown Error")) {
              if (this.mod != 23) {
                if (this.network.type === "none") {
                  this.alertService.error("No network connection. Please Connect to the Internet");
                } else {
                  this.alertService.error("Unable to connect to the server, please try again in a couple of seconds.");
                }
              }
            } else if (rejection.status === 400) {
              if (rejection.error && (rejection.error.error || rejection.error.error_description)) {
                msg = rejection.error.error_description;
              } else if (rejection.error) {
                msg = rejection.error;
              }

              this.alertService.error(msg);
            } else if (rejection.status === 404) {
              if (rejection.message) {
                this.alertService.error(rejection.message);
              }
            } else if (rejection.status === 500) {
              if (rejection.message) {
                var ex = rejection.message;

                while (ex.innerException) {
                  ex = ex.innerException;
                }

                this.alertService.error(ex.exceptionMessage);
              }
            } else if (rejection.responseStatus === 401) {
              this.authService.appLogout();
            } else if (rejection.responseStatus === 0) {
              this.alertService.error("Error occured, while uploading file");
            } else if (rejection.responseStatus === 400) {
              if (rejection.response) {
                msg = rejection.response;
              }

              this.alertService.error(msg);
            }
          }
        }]);
      }();

      _HttpInterceptorService.ctorParameters = function () {
        return [{
          type: _alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: _usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Network
        }];
      };

      _HttpInterceptorService = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)()], _HttpInterceptorService);
      /***/
    },

    /***/
    81085:
    /*!*****************************************************************!*\
      !*** ./src/app/services/ionic-storage/ionic-storage.service.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IonicStorageService": function IonicStorageService() {
          return (
            /* binding */
            _IonicStorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);

      var _IonicStorageService = /*#__PURE__*/function () {
        function IonicStorageService(storage) {
          _classCallCheck(this, IonicStorageService);

          this.storage = storage;
          this.inserData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
          this.exitsData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        }

        return _createClass(IonicStorageService, [{
          key: "insertData_Replace",
          value: function insertData_Replace(key, data) {
            var _this35 = this;

            this.storage.set(key, data).then(function (r) {
              _this35.inserData.next(true);
            });
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.inserData.asObservable());
          }
        }, {
          key: "insertData_noReplace",
          value: function insertData_noReplace(key, data) {
            var _this36 = this;

            this.getData(key).then(function (res) {
              var temp = [];

              if (res) {
                temp = res;
                temp.push(data);
              } else {
                temp = [data];
              }

              _this36.storage.set(key, temp).then(function (r) {
                _this36.inserData.next(true);
              });
            });
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.inserData.asObservable());
          }
        }, {
          key: "studentSave_noReplace",
          value: function studentSave_noReplace(key, data, clList) {
            var _this37 = this;

            var status = false;
            this.getData(key).then(function (res) {
              var temp = [];

              if (res != null && res.length !== 0) {
                var i = 0;

                var _iterator = _createForOfIteratorHelper(res),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var val = _step.value;

                    if (val[clList.class_id + '-' + clList.section] !== undefined) {
                      res[i] = data;
                      temp = res;
                      status = false;
                      break;
                    } else {
                      status = true;
                    }

                    i++;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (status) {
                  res.push(data);
                  temp = res;
                }
              } else {
                temp = [data];
              }

              _this37.storage.set(key, temp).then(function (r) {
                // console.log(83, r);
                _this37.inserData.next(true);
              });
            });
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.inserData.asObservable());
          }
        }, {
          key: "getData",
          value: function getData(key) {
            return this.storage.get(key);
          }
        }, {
          key: "removeKey",
          value: function removeKey(key) {
            return this.storage.remove(key);
          }
        }, {
          key: "loopData",
          value: function loopData(key) {
            return this.storage.forEach(key);
          }
        }, {
          key: "isKeyAvabile",
          value: function isKeyAvabile(key) {
            return this.storage.keys();
          }
        }]);
      }();

      _IonicStorageService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage
        }];
      };

      _IonicStorageService = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _IonicStorageService);
      /***/
    },

    /***/
    77232:
    /*!******************************************!*\
      !*** ./src/app/services/json.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "JsonService": function JsonService() {
          return (
            /* binding */
            _JsonService
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      35758);

      var _JsonService = /*#__PURE__*/function () {
        function JsonService(http) {
          _classCallCheck(this, JsonService);

          this.http = http;
        }

        return _createClass(JsonService, [{
          key: "SchoolList",
          value: function SchoolList() {
            var url = this.http.get('https://d1wpyxz35bzzz4.cloudfront.net/udise_skl_detail.json');
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([url]);
          }
        }, {
          key: "schoolList",
          value: function schoolList() {
            var response1 = this.http.get('https://d1wpyxz35bzzz4.cloudfront.net/st_dist_blk_sch_master.json'); // School List

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([response1]);
          }
        }, {
          key: "DistBlkList",
          value: function DistBlkList() {
            var response1 = this.http.get('https://d1wpyxz35bzzz4.cloudfront.net/schlnew_dist_blk.json'); // District, Block List

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([response1]);
          }
        }, {
          key: "StateList",
          value: function StateList() {
            var response1 = this.http.get('https://d1wpyxz35bzzz4.cloudfront.net/schlnew_medium.json'); // State List

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([response1]);
          }
        }, {
          key: "studentList",
          value: function studentList(school_id) {
            var response1 = this.http.get('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + school_id + '_1.json'); // Student List

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.forkJoin)([response1]);
          }
        }]);
      }();

      _JsonService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _JsonService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _JsonService);
      /***/
    },

    /***/
    34442:
    /*!*********************************************!*\
      !*** ./src/app/services/network-service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectionStatus": function ConnectionStatus() {
          return (
            /* binding */
            _ConnectionStatus
          );
        },

        /* harmony export */
        "NetworkService": function NetworkService() {
          return (
            /* binding */
            _NetworkService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      75592);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ConnectionStatus;

      (function (ConnectionStatus) {
        ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
        ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
      })(_ConnectionStatus || (_ConnectionStatus = {}));

      var _NetworkService = /*#__PURE__*/function () {
        function NetworkService(network, toast, plt) {
          var _this38 = this;

          _classCallCheck(this, NetworkService);

          this.network = network;
          this.toast = toast;
          this.plt = plt;
          this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_ConnectionStatus.Offline);
          console.log('Network Service ');
          this.plt.ready().then(function () {
            _this38.initializeNetworkEvents();

            console.log('Network', _this38.network);
            var status = _this38.network.type !== 'none' ? _ConnectionStatus.Online : _ConnectionStatus.Offline;
            console.log('Network Status', _this38.network.type);

            _this38.status.next(status);
          });
        }

        return _createClass(NetworkService, [{
          key: "initializeNetworkEvents",
          value: function initializeNetworkEvents() {
            var _this39 = this;

            console.log('InitializeNetworkEvents Function');
            this.network.onDisconnect().subscribe(function () {
              if (_this39.status.getValue() === _ConnectionStatus.Online) {
                console.log('We Are Offline');

                _this39.updateNetworkStatus(_ConnectionStatus.Offline);
              }
            });
            this.network.onConnect().subscribe(function () {
              if (_this39.status.getValue() === _ConnectionStatus.Offline) {
                console.log('We are Online');

                _this39.updateNetworkStatus(_ConnectionStatus.Online);
              }
            });
          }
        }, {
          key: "updateNetworkStatus",
          value: function updateNetworkStatus(status) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee21() {
              var connection;
              return _regenerator().w(function (_context21) {
                while (1) switch (_context21.n) {
                  case 0:
                    this.status.next(status);
                    connection = status === _ConnectionStatus.Offline ? 'Offline' : 'Online';
                    console.log('Network Change Status', connection); // this.presentToast(connection);

                  case 1:
                    return _context21.a(2);
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(value) {
            var toast = this.toast.create({
              message: 'You are now ' + value,
              duration: 3000,
              position: 'bottom'
            });
            toast.then(function (toast) {
              return toast.present();
            });
          }
        }, {
          key: "onNetworkChange",
          value: function onNetworkChange() {
            return this.status.asObservable();
          }
        }, {
          key: "getCurrentNetworkStatus",
          value: function getCurrentNetworkStatus() {
            return this.status.getValue();
          }
        }]);
      }();

      _NetworkService.ctorParameters = function () {
        return [{
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__.Network
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }];
      };

      _NetworkService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _NetworkService);
      /***/
    },

    /***/
    7386:
    /*!********************************************!*\
      !*** ./src/app/services/shared.service.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* binding */
            _SharedService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      35758);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pages/commonpages/view-image/view-image.page */
      29535);
      /* harmony import */


      var src_app_pages_commonpages_common_pdf_common_pdf_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pages/commonpages/common-pdf/common-pdf.page */
      2770);
      /* harmony import */


      var _emis_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./emis/user.service */
      92275); // import { Injectable } from '@angular/core';
      // import { FileTransfer, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
      // import { File } from '@awesome-cordova-plugins/file/ngx';
      // import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
      // import { FormArray, FormControl, FormGroup } from '@angular/forms';
      // import { ModalController } from '@ionic/angular';
      // import { ViewImagePage } from 'src/app/pages/commonpages/view-image/view-image.page';
      // import { CommonPdfPage } from 'src/app/pages/commonpages/common-pdf/common-pdf.page';
      // import { DataService } from '../data.service';


      var _SharedService = /*#__PURE__*/function () {
        function SharedService(file, modalCtrl, transfer, http, usersessionService, alertService, sqliteDB, userService, fileOpener) {
          _classCallCheck(this, SharedService);

          this.file = file;
          this.modalCtrl = modalCtrl;
          this.transfer = transfer;
          this.http = http;
          this.usersessionService = usersessionService;
          this.alertService = alertService;
          this.sqliteDB = sqliteDB;
          this.userService = userService;
          this.fileOpener = fileOpener;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
          this.emisApiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrl;
          this.leaveSubmitted = false;
          this.emisApiUrlWeb = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.emisApiUrlWeb;
          this.teacher_id = this.usersessionService.teacher_id();
        }

        return _createClass(SharedService, [{
          key: "requestDataFromMultipleSources",
          value: function requestDataFromMultipleSources(school_id) {
            this.distId = this.usersessionService.district_id();
            this.getUserDetails();
            var response1 = this.http.get('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + school_id + '_1.json'); // Student list

            var response2 = this.http.get('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + school_id + '_2.json'); // Staff list, Class & section list

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([response1, response2]);
          }
        }, {
          key: "onClassStudentStaffList",
          value: function onClassStudentStaffList(school_id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee23() {
              var _this40 = this;

              var _t;

              return _regenerator().w(function (_context23) {
                while (1) switch (_context23.p = _context23.n) {
                  case 0:
                    debugger;
                    this.school_id = school_id;
                    this.emis_usertype = this.usersessionService.emis_usertype();
                    this.date = this.pipe.transform(new Date(), 'yyyy-MM-dd');
                    this.emis_username = this.usersessionService.emis_username();
                    this.udise_code = this.usersessionService.udise_code();
                    _context23.p = 1;
                    _context23.n = 2;
                    return this.requestDataFromMultipleSources(this.school_id).toPromise().then(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this40, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee22() {
                        return _regenerator().w(function (_context22) {
                          while (1) switch (_context22.n) {
                            case 0:
                              _context22.n = 1;
                              return this.onInsert(1, data[1].classlist, 'AllClasslist');

                            case 1:
                              _context22.n = 2;
                              return this.onInsert(2, data[0].studentlist, 'Student_List');

                            case 2:
                              return _context22.a(2);
                          }
                        }, _callee22, this);
                      }));
                    });

                  case 2:
                    _context23.n = 4;
                    break;

                  case 3:
                    _context23.p = 3;
                    _t = _context23.v;
                    console.error('Error adding user', _t);

                  case 4:
                    return _context23.a(2);
                }
              }, _callee23, this, [[1, 3]]);
            }));
          }
        }, {
          key: "onInsert",
          value: function onInsert(id, data, tablename) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee25() {
              var _this41 = this;

              var query, _t2;

              return _regenerator().w(function (_context25) {
                while (1) switch (_context25.p = _context25.n) {
                  case 0:
                    // console.log('class_insertData',data)
                    query = 'DELETE FROM ' + tablename + ' where SchlD = ' + this.school_id + '';
                    debugger;
                    _context25.p = 1;
                    _context25.n = 2;
                    return this.sqliteDB.getDataLocalDB(query).then(function (res) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this41, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee24() {
                        var _this42 = this;

                        var sqlArray, class_data;
                        return _regenerator().w(function (_context24) {
                          while (1) switch (_context24.n) {
                            case 0:
                              console.log(3);
                              sqlArray = [];

                              if (id == 1) {
                                class_data = this.changeClassNameToRomanLetters(data);
                                console.log('class_data', class_data);
                                data.forEach(function (item) {
                                  var section = item.section.trim();
                                  sqlArray.push(['INSERT INTO ' + tablename + ' VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, item.school_key_id, item.class_id, section, item["class"], _this42.emis_username, 0, 0, 0, 0, 0, 0, _this42.date, 0, 0]]);
                                });
                              } else if (id == 2) {
                                debugger;
                                data.forEach(function (item) {
                                  var epk = 'SCH#' + _this42.school_id;
                                  var esk = 'STU#' + _this42.date + '#' + 1 + '#' + item.user_id;
                                  sqlArray.push(['INSERT INTO ' + tablename + ' VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, _this42.school_id, item.user_id, item.name, '', item.gender == 'Male' ? '1' : '2', item.phone_number, item.user_id, _this42.emis_username, item.class_studying_id, epk, esk, 1, 2, item.class_section.trim(), 0, 0, _this42.udise_code, item.id]]);
                                });
                              } else {
                                data.forEach(function (item) {
                                  sqlArray.push(['INSERT INTO ' + tablename + ' VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, item.teacher_id, item.teacher_name, item.gender == 'Male' ? '1' : '2', item.mbl_nmbr, item.category_id, item.category_name, item.Designation_id, item.Designation, _this42.school_id, _this42.emis_username, _this42.udise_code, 1, 0]]);
                                });
                              }

                              _context24.n = 1;
                              return this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                                return 'inserted';
                              });

                            case 1:
                              return _context24.a(2);
                          }
                        }, _callee24, this);
                      }));
                    });

                  case 2:
                    _context25.n = 4;
                    break;

                  case 3:
                    _context25.p = 3;
                    _t2 = _context25.v;
                    console.error('Error', _t2);

                  case 4:
                    return _context25.a(2);
                }
              }, _callee25, this, [[1, 3]]);
            }));
          }
        }, {
          key: "unique",
          value: function unique(arr, keyProps) {
            var kvArray = arr.map(function (entry) {
              var key = keyProps.map(function (k) {
                return entry[k];
              }).join('|');
              return [key, entry];
            });
            var map = new Map(kvArray);
            return Array.from(map.values());
          }
        }, {
          key: "onDownload",
          value: function onDownload(title, baseURL, filename) {
            var _this43 = this;

            var arr = filename.split(".");
            var fileExtension = '.' + arr[1];
            var url = baseURL + filename;
            var fileName = title + Date.now().toString();
            var fileTransfer = this.transfer.create();
            fileTransfer.download(url, this.file.externalRootDirectory + '/Download/' + fileName + fileExtension, true).then(function (entry) {
              _this43.fileOpener.showOpenWithDialog(entry.toURL(), 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet').then(function () {
                return console.log('File is opened');
              })["catch"](function (e) {
                return console.log('Error opening file', e);
              });

              console.log('download complete: ' + entry.toURL());
            }, function (error) {
              console.log('err', error);
            });
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this44 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup) {
                _this44.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormArray) {
                _this44.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "onView",
          value: function onView(pageid, id, url) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee26() {
              var modal;
              return _regenerator().w(function (_context26) {
                while (1) switch (_context26.n) {
                  case 0:
                    _context26.n = 1;
                    return this.modalCtrl.create({
                      component: pageid == 1 ? src_app_pages_commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_7__.ViewImagePage : src_app_pages_commonpages_common_pdf_common_pdf_page__WEBPACK_IMPORTED_MODULE_8__.CommonPdfPage,
                      componentProps: {
                        id: id,
                        image: url
                      },
                      cssClass: pageid == 1 ? 'view-image-modal' : 'fullscreen',
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context26.v;
                    _context26.n = 2;
                    return modal.present();

                  case 2:
                    return _context26.a(2);
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "changeClassNameToRomanLetters",
          value: function changeClassNameToRomanLetters(arr) {
            console.log('changeClassNameToRomanLetters', arr);
            arr.forEach(function (element) {
              element.class_id = element.class_id;

              if (element.class_id === 1) {
                element["class"] = 'I';
              } else if (element.class_id === 2) {
                element["class"] = 'II';
              } else if (element.class_id === 3) {
                element["class"] = 'III';
              } else if (element.class_id === 4) {
                element["class"] = 'IV';
              } else if (element.class_id === 5) {
                element["class"] = 'V';
              } else if (element.class_id === 6) {
                element["class"] = 'VI';
              } else if (element.class_id === 7) {
                element["class"] = 'VII';
              } else if (element.class_id === 8) {
                element["class"] = 'VIII';
              } else if (element.class_id === 9) {
                element["class"] = 'IX';
              } else if (element.class_id === 10) {
                element["class"] = 'X';
              } else if (element.class_id === 11) {
                element["class"] = 'XI';
              } else if (element.class_id === 12) {
                element["class"] = 'XII';
              } else if (element.class_id === 13) {
                element["class"] = 'LKG';
              } else if (element.class_id === 14) {
                element["class"] = 'UKG';
              } else if (element.class_id === 15) {
                element["class"] = 'PRE-KG';
              }
            });
            var temp = [];
            arr.forEach(function (element) {
              element.unscreenStdCnt = 0;

              if (temp.length > 0) {
                var index = temp.findIndex(function (x) {
                  return x.class_id == element.class_id;
                });
                index == -1 ? temp.push(element) : '';
              } else {
                temp.push(element);
              }
            });
            return temp;
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this45 = this;

            console.log('inside getUserDetails', this.teacher_id);
            this.userService.getOoscUserDetails(this.teacher_id).subscribe(function (res) {
              console.log('res getOoscUserDetails', res);

              if (res.dataStatus == true) {
                var getOoscUserDetails = res.result;

                if (getOoscUserDetails.length > 0) {
                  _this45.userDetails = getOoscUserDetails[0];
                  console.log('ca-school list userDetails service', _this45.userDetails);
                  _this45.distId = getOoscUserDetails[0].district_id;
                  _this45.TeacherBlockId = getOoscUserDetails[0].TeacherBlockId; // this.checkOoscBlockLocal();
                }
              } else {
                _this45.alertService.error("Something went wrong");
              }
            });
          }
        }, {
          key: "compareValues",
          value: function compareValues(key) {
            var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
            return function innerSort(a, b) {
              if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
              }

              var varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
              var varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
              var comparison = 0;

              if (varA > varB) {
                comparison = 1;
              } else if (varA < varB) {
                comparison = -1;
              }

              return order === 'desc' ? comparison * -1 : comparison;
            };
          }
        }]);
      }();

      _SharedService.ctorParameters = function () {
        return [{
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__.FileTransfer
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_2__.SqlitedatabaseService
        }, {
          type: _emis_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_6__.FileOpener
        }];
      };

      _SharedService = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Injectable)()], _SharedService);
      /***/
    },

    /***/
    48167:
    /*!***********************************************************!*\
      !*** ./src/app/services/sqlite/sqlitedatabase.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SqlitedatabaseService": function SqlitedatabaseService() {
          return (
            /* binding */
            _SqlitedatabaseService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);

      var _SqlitedatabaseService = /*#__PURE__*/function () {
        // private dbInstance: SQLiteObject;
        // readonly db_name: string = "remotestack.db";
        // readonly db_table: string = "userTable";
        //  USERS: Array <any> ;
        function SqlitedatabaseService(platform, sqlite, file, transfer) {
          _classCallCheck(this, SqlitedatabaseService);

          this.platform = platform;
          this.sqlite = sqlite;
          this.file = file;
          this.transfer = transfer;
          this.dbConfig = {
            name: 'TN_EMIS_SCHOOL.db',
            location: 'default'
          }; // this.databaseConn();
        } //    // Create SQLite database 
        //    databaseConn() {
        //     this.platform.ready().then(() => {
        //       this.sqlite.create({
        //           name: this.db_name,
        //           location: 'default'
        //         }).then((sqLite: SQLiteObject) => {
        //           this.dbInstance = sqLite;
        //           sqLite.executeSql(`
        //               CREATE TABLE IF NOT EXISTS ${this.db_table} (
        //                 user_id INTEGER PRIMARY KEY, 
        //                 name varchar(255),
        //                 email varchar(255)
        //               )`, [])
        //             .then((res) => {
        //               // alert(JSON.stringify(res));
        //             })
        //             .catch((error) => alert(JSON.stringify(error)));
        //         })
        //         .catch((error) => alert(JSON.stringify(error)));
        //     });   
        // }
        // // Crud
        // public addItem(n, e) {
        //   // validation
        //   if (!n.length || !e.length) { 
        //     alert('Provide both email & name');
        //     return;
        //   }
        //   this.dbInstance.executeSql(`
        //   INSERT INTO ${this.db_table} (name, email) VALUES ('${n}', '${e}')`, [])
        //     .then(() => {
        //       alert("Success");
        //       this.getAllUsers();
        //     }, (e) => {
        //       alert(JSON.stringify(e.err));
        //     });
        // }
        // getAllUsers() {
        //   return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table}`, []).then((res) => {
        //     this.USERS = [];
        //     if (res.rows.length > 0) {
        //       for (var i = 0; i < res.rows.length; i++) {
        //         this.USERS.push(res.rows.item(i));
        //       }
        //       return this.USERS;
        //     }
        //   },(e) => {
        //     alert(JSON.stringify(e));
        //   });
        // }
        // // Get user
        // getUser(id): Promise<any> {
        //   return this.dbInstance.executeSql(`SELECT * FROM ${this.db_table} WHERE user_id = ?`, [id])
        //   .then((res) => { 
        //     return {
        //       user_id: res.rows.item(0).user_id,
        //       name: res.rows.item(0).name,  
        //       email: res.rows.item(0).email
        //     }
        //   });
        // }
        // // Update
        // updateUser(id, name, email) {
        //   let data = [name, email];
        //   return this.dbInstance.executeSql(`UPDATE ${this.db_table} SET name = ?, email = ? WHERE user_id = ${id}`, data)
        // }  
        // // Delete
        // deleteUser(user) {
        //   this.dbInstance.executeSql(`
        //   DELETE FROM ${this.db_table} WHERE user_id = ${user}`, [])
        //     .then(() => {
        //       alert("User deleted!");
        //       this.getAllUsers();
        //     })
        //     .catch(e => {
        //       alert(JSON.stringify(e))
        //     });
        // }
        // onLocalList(tablename) {
        //   let query = 'SELECT * FROM ' + tablename;
        //   return this.get(query).then(res => {
        //     if (res.rows.length > 0) {
        //       let list: any = [];
        //       for (var i = 0; i < res.rows.length; i++) {
        //         list.push(res.rows.item(i));
        //       }
        //       console.log(tablename,list)
        //       // return [tablename, list];
        //     }
        //   });
        // }
        // Statistic 


        return _createClass(SqlitedatabaseService, [{
          key: "createAllTables",
          value: function createAllTables() {
            var _this46 = this;

            this.bulkTablesList = []; // tslint:disable-next-line: max-line-length
            // const userTable = 'create table IF NOT EXISTS User(Username VARCHAR(32) PRIMARY KEY, Password VARCHAR(32), user_token VARCHAR(900), AuthToken VARCHAR)';
            // this.bulkTablesList.push(userTable);

            var classTable = 'create table IF NOT EXISTS Schoolstat(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchoolType Varchar(20), SchoolCate Varchar(50))';
            this.bulkTablesList.push(classTable);
            var studentTable = 'create table IF NOT EXISTS Student(Id INTEGER PRIMARY KEY AUTOINCREMENT, StudNam Varchar(100), TamilNam Varchar(100),' + 'Gendr INTEGER, MblNo Varchar(50),UNIQUEID Varchar(200),UserName Varchar(50),Stud_ClsID Varchar(200),ATT_EPK Varchar(50),ATT_ESK Varchar(50),' + 'PRST_ABST Varchar(3),SECTION Varchar(3),LAT Varchar(50),LOG Varchar(50),UDISE_CODE Varchar(20), FOREIGN KEY(Id) REFERENCES Student(ClsID))';
            this.bulkTablesList.push(studentTable);
            var Student_ListTable = 'create table IF NOT EXISTS Student_List(Id INTEGER PRIMARY KEY AUTOINCREMENT,SchlD,userId Varchar(100), StudNam Varchar(100), TamilNam Varchar(100),' + 'Gendr INTEGER, MblNo Varchar(50),UNIQUEID Varchar(200),UserName Varchar(50),Stud_ClsID Varchar(200),ATT_EPK Varchar(50),ATT_ESK Varchar(50),' + 'PRST_ABST Varchar(3),SmcPRST_ABST Varchar(3),SECTION Varchar(3),LAT Varchar(50),LOG Varchar(50),UDISE_CODE Varchar(20),studentid Varchar(20), FOREIGN KEY(Id) REFERENCES Student(ClsID))';
            this.bulkTablesList.push(Student_ListTable);
            var schoolTable = 'create table IF NOT EXISTS Schooldetail(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50), Wall Varchar(100),' + 'Lengthwall Varchar(50), Gate Varchar(50),Building Varchar(50), Sync Varchar(50), FOREIGN KEY(Id) REFERENCES CivilRoom(Udise))';
            this.bulkTablesList.push(schoolTable);
            var civilBuildingTable = 'create table IF NOT EXISTS Building(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50) , BuildingCount Varchar(10), BuildingId Varchar(100), QuestionSet Varchar(100),' + 'Question Varchar(500), Status Varchar(200), FloorCount Varchar(20) , FOREIGN KEY(Id) REFERENCES Schooldetail(BuildId))';
            this.bulkTablesList.push(civilBuildingTable);
            var civilRoomTable = 'create table IF NOT EXISTS FloorRoom(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50) , Floor Varchar(100), Building Varchar(100),' + 'Question Varchar(500), Status Varchar(200), Room Varchar(20) , FOREIGN KEY(Id) REFERENCES Schooldetail(BuildId))';
            this.bulkTablesList.push(civilRoomTable);
            var schoolscreenTable = 'create table IF NOT EXISTS Schoolscreen(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50),' + 'Building Varchar(50),Playground Varchar(50),PlaygroundSqft Varchar(200),Playgroundreq Varchar(500),Drinking Varchar(50),' + 'Overhead Varchar(10),Sump Varchar(3),MotorPump Varchar(50),Pipesource Varchar(50),Pipesump Varchar(20), Wateraccess Varchar(20), FOREIGN KEY(Id) REFERENCES Student(ClsID))';
            this.bulkTablesList.push(schoolscreenTable);
            var buildingDetailTable = 'create table IF NOT EXISTS Buildingdetail(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50) , BuildingId Varchar(50) ,TotalBuilding Varchar(50) , GroupId Varchar(50), Grouptxt Varchar(50) ,  IndxID Varchar(100),' + 'Quest Varchar(50), Q_id Varchar(50) , QuestTyp Varchar(50) ,  ResChar Varchar(50) , RespInt Varchar(50) , SclId Varchar(50), BuildingSetId Varchar(50),' + ' NoFloor Varchar(100) , Status Varchar(100) , FOREIGN KEY(Id) REFERENCES Schooldetail(Udise))';
            this.bulkTablesList.push(buildingDetailTable);
            var floorDetailTable = 'create table IF NOT EXISTS Floordetail(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50) , GroupId Varchar(50), IndxID Varchar(100),' + 'Quest Varchar(50), QuestID Varchar(50) , ResChar Varchar(50) , RespInt Varchar(50) , SclId Varchar(50), BuildingSetId Varchar(50),' + 'D_id Varchar(100), NoFloor Varchar(100) , Status Varchar(100) , FOREIGN KEY(Id) REFERENCES Schooldetail(Udise))';
            this.bulkTablesList.push(floorDetailTable);
            var buildingQuestionTable = 'create table IF NOT EXISTS Buildingquestion(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50) , Totalfloor Varchar(50) , FloorId Varchar(50) ,' + 'BuildingId Varchar(50) , TotalBuilding Varchar(50) , RoomId Varchar(50) , Totalroom Varchar(50) , GroupId Varchar(50), IndxID Varchar(100),' + 'Quest Varchar(50), QuestID Varchar(50) , QuestTyp Varchar(50) , ResChar Varchar(50) , RespInt Varchar(50) , SclId Varchar(50), BuildingSetId Varchar(50),' + 'D_id Varchar(100), NoFloor Varchar(100) , Status Varchar(100) , FOREIGN KEY(Id) REFERENCES Schooldetail(Udise))';
            this.bulkTablesList.push(buildingQuestionTable);
            var schoolComTable = 'create table IF NOT EXISTS Schoolcommon(Id INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50),' + 'GroupId Varchar(50), IndxID Varchar(100),' + 'Quest Varchar(50), QuestID Varchar(50) , QuestTyp Varchar(50) , ResChar Varchar(50) , RespInt Varchar(50) , SclId Varchar(50), BuildingSetId Varchar(50),' + 'D_id Varchar(100), NoFloor Varchar(100) , Status Varchar(100) , FOREIGN KEY(Id) REFERENCES Schooldetail(Udise))';
            this.bulkTablesList.push(schoolComTable);
            var buildingTable = 'create table IF NOT EXISTS SampleBuild(quesId INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50) , buildingSetId Varchar(50), id Varchar(100),' + 'qId Varchar(50), question Varchar(50) , status Varchar(50) , noFloor Varchar(50) , quesType Varchar(50), resInt Varchar(50),' + 'ResChar Varchar(100), GroupId Varchar(100) , Grouptxt Varchar(100),Maxlen Varchar(100))';
            this.bulkTablesList.push(buildingTable);
            var samplecommonTable = 'create table IF NOT EXISTS SampleCommon(quesId INTEGER PRIMARY KEY AUTOINCREMENT, Udise Varchar(50) , buildingSetId Varchar(50), id Varchar(100),' + 'qId Varchar(50), question Varchar(50) , status Varchar(50) , noFloor Varchar(50) , quesType Varchar(50), resInt Varchar(50),' + 'ResChar Varchar(100), GroupId Varchar(100) , Grouptxt Varchar(100),Maxlen Varchar(100))';
            this.bulkTablesList.push(samplecommonTable);
            var blockTable = 'create table IF NOT EXISTS Block(Id INTEGER PRIMARY KEY AUTOINCREMENT, BlockId Varchar(100), BlockName Varchar(100),' + 'DistrictId Varchar(50), DistrictName Varchar(20), SchoolId Varchar(20), ScreeningId Varchar(20),ScreeningDate Varchar(20),FOREIGN KEY(Id) REFERENCES Block(BlockId))';
            this.bulkTablesList.push(blockTable);
            var schoollistTable = 'create table IF NOT EXISTS SchoolLists(Id INTEGER PRIMARY KEY AUTOINCREMENT, BlockId Varchar(100), CompletedByDr Varchar(100),' + ' SchoolId Varchar(20),SchoolName Varchar(20) ,FOREIGN KEY(Id) REFERENCES Block(BlockId))';
            this.bulkTablesList.push(schoollistTable);
            var classAndSecTable = 'create table IF NOT EXISTS ClassSec(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), SchoolId Varchar(100),' + 'IndexId Varchar(50), ScreeningDate Varchar(50), ClassSection Varchar(20), Classid Varchar(50),FOREIGN KEY(Id) REFERENCES ClassSec(SchlId))';
            this.bulkTablesList.push(classAndSecTable);
            var studentlistTable = 'create table IF NOT EXISTS Studentlist(Id INTEGER PRIMARY KEY AUTOINCREMENT, UserId Varchar(100), Name Varchar(100), ' + 'Status Varchar(50), Classstudyingid Varchar(50), ClassSection Varchar(20), SchoolId Varchar(50), FOREIGN KEY(Id) REFERENCES Studentlist(SchoolId))';
            this.bulkTablesList.push(studentlistTable); //  HealthStatus: "Spectacle Needed And Visit to DIEC"
            //  const studentList = 'create table IF NOT EXISTS Studentlist(Id INTEGER PRIMARY KEY AUTOINCREMENT, user_id(100), name Varchar(100),' +
            //  'Status Varchar(50),Classstudyingid Varchar(20), Classsection Varchar(50), SchoolId Varchar(20), FOREIGN KEY(Id) REFERENCES StudentList(SchoolId))';
            //  this.bulkTablesList.push(studentList);

            var pmoaList = 'create table IF NOT EXISTS PmoaList(Id INTEGER PRIMARY KEY AUTOINCREMENT, BlockId Varchar(100), BlockName Varchar(100),' + 'Districtname Varchar(50),IndexId Varchar(20), SchoolCategory Varchar(50), SchoolId Varchar(20),SchoolName Varchar(20),' + 'SchoolType Varchar(20), ScreeningDate Varchar(20),FOREIGN KEY(Id) REFERENCES PmoaList(BlockId))';
            this.bulkTablesList.push(pmoaList);
            var pmoaquestion = 'create table IF NOT EXISTS PmoaQuestions(Id INTEGER PRIMARY KEY AUTOINCREMENT,IndxId Varchar(20), AxisLeft Varchar(100), AxisRight Varchar(100),' + 'DsphValueLeft Varchar(50),DsphValueRight Varchar(20), DyclLeft Varchar(50), DyclRight Varchar(20),' + 'P1Left Varchar(50),P1Right Varchar(20),P2Left Varchar(20), P2Right Varchar(20),P3Left Varchar(20),' + 'P3Right Varchar(20),P4Left Varchar(20),P4Right Varchar(20),P5Left Varchar(20), P5Right Varchar(20),P6Left Varchar(20),P6Right Varchar(20),' + 'P7Left Varchar(20),P7Right Varchar(20),P8Left Varchar(20), P8Right Varchar(20),P9Left Varchar(20),P9Right Varchar(20),' + 'P10Left Varchar(20),P10Right Varchar(20),P11Left Varchar(20), P11Right Varchar(20),P12Left Varchar(20),P12Right Varchar(20),' + 'P13Left Varchar(20),P13Right Varchar(20),P14Left Varchar(20), P14Right Varchar(20),P15Left Varchar(20),P15Right Varchar(20),' + 'P16Left Varchar(20),P16Right Varchar(20),SchlId Varchar(20), ScrId Varchar(20), StuId Varchar(20), HealthStatus varchar(1), status varchar(1), PMOAStatus varchar(1),vAcuityL varchar(10),vAcuityR varchar(10),speSizeCtrl varchar(10),speColorCtrl varchar(10),otherCtrl varchar(10), FOREIGN KEY(Id) REFERENCES PmoaQuestion(StuId))';
            this.bulkTablesList.push(pmoaquestion);
            var studentAttendanceTable = 'create table IF NOT EXISTS StudentAttendance(Id INTEGER PRIMARY KEY AUTOINCREMENT,AttendanceStatus INTEGER,AttendanceDate Varchar(100),IsSync INTEGER,UserName Varchar(50),Stud_UNIQUEID Varchar(200), FOREIGN KEY(Id) REFERENCES Student(UNIQUEID))';
            this.bulkTablesList.push(studentAttendanceTable);
            var buildingclassificationTable = 'create table IF NOT EXISTS buildingclassification(Id INTEGER PRIMARY KEY AUTOINCREMENT, udise Varchar(50) , compound INTEGER(50), compoundlength Varchar(100),' + 'gate INTEGER(50), building Varchar(50),compoundtype Varchar(50),noofgate Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(buildingclassificationTable); // const buildingclassificationTable = 'create table IF NOT EXISTS buildingclassification(Id INTEGER PRIMARY KEY AUTOINCREMENT, udise Varchar(50) , compound Varchar(50), compoundlength Varchar(100),' +
            //   'gate Varchar(50), building Varchar(50),compoundtype Varchar(50),noofgate Varchar(50), Status Varchar(50))';
            // this.bulkTablesList.push(buildingclassificationTable);

            var buildingdetailsTable = 'create table IF NOT EXISTS builddetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID  Varchar(50), SchoolId Varchar(50) , Username Varchar(50), BuildingId Varchar(50),' + 'QuestionId Varchar(50), Question Varchar(300),QuestionType Varchar(50),Id Varchar(50),ResInt Varchar(50),ResChar Varchar(50),GroupId Varchar(50),GroupTxt Varchar(100),' + 'MaxLen Varchar(10000),TodayDate Varchar(100), Status Varchar(50))';
            this.bulkTablesList.push(buildingdetailsTable);
            var floordetailsTable = 'create table IF NOT EXISTS floordetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID  Varchar(50), SclId Varchar(50) , BuildingSetId Varchar(50),' + 'Id Varchar(50), QuestID Varchar(300), NoFloor Varchar(50), Status Varchar(50), Quest Varchar(50), QuestTyp Varchar(50), RespInt Varchar(50), ResChar Varchar(100),' + 'GroupId Varchar(100) , Grouptxt Varchar(100),MaxLen Varchar(100),FloorTotal Varchar(100),FloorId Varchar(100), BuildingId Varchar(50))';
            this.bulkTablesList.push(floordetailsTable); // const roomdetailsTable = 'create table IF NOT EXISTS roomdetail(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID  Varchar(50), SclId Varchar(50) , BuildingSetId Varchar(50), Id Varchar(50),' +
            //   'QuestID Varchar(50), NoFloor Varchar(300),Status Varchar(50),Quest Varchar(50),QuestTyp Varchar(50),RespInt Varchar(50),ResChar Varchar(50),GroupId Varchar(100),' +
            //   'Grouptxt Varchar(100),Maxlen Varchar(100),RoomCount Varchar(100),FloorCount Varchar(100),RoomTotal Varchar(100),FloorTotal Varchar(100),TodayDate Varchar(100),BuildingId Varchar(100))';
            // this.bulkTablesList.push(roomdetailsTable);

            var roomdetailsTable = 'create table IF NOT EXISTS roomdetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID  Varchar(50), SclId Varchar(50) ,' + 'RoomCount Varchar(100),FloorCount Varchar(100),RoomTotal Varchar(100),FloorTotal Varchar(100),BuildingId Varchar(100),TodayDate Varchar(100) ,' + 'ques_id Varchar(100),ques_displayid Varchar(100),ques_text Varchar(100),ques_type Varchar(100),ques_valid Varchar(100),number_valid Varchar(100),ques_max Varchar(100),ques_min Varchar(100) ,' + 'ques_pattern Varchar(100),ques_title Varchar(100),ques_subques Varchar(100),ques_subid Varchar(100),ques_option Varchar(100),ques_condition Varchar(100),ques_response Varchar(100),subquestions Varchar(100), Status Varchar(50))';
            this.bulkTablesList.push(roomdetailsTable);
            var scoolcommondetailsTable = 'create table IF NOT EXISTS schoolcommondetail(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SchoolId  Varchar(50), BuildingId  Varchar(50), QuestionId Varchar(50) , Question Varchar(50), QuestionType Varchar(50),' + 'Id Varchar(50), ResInt Varchar(300),ResChar Varchar(50),GroupId Varchar(50),GroupTxt Varchar(50),MaxLen Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(scoolcommondetailsTable);
            var schooldetailsTable = 'create table IF NOT EXISTS schooldetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SchoolId  Varchar(50), Schoolname  Varchar(50), Udisecode Varchar(50),' + 'Status Varchar(50))';
            this.bulkTablesList.push(schooldetailsTable);
            var pmoadetailsTable = 'create table IF NOT EXISTS pmoacountdetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, BlkId  Varchar(50), TotSchlCount  Varchar(50), TotSchlScrndCount Varchar(50) , TotSchlRefrdPmoa Varchar(50), TotSchlScrndByPmoa Varchar(50),' + 'Status Varchar(50))';
            this.bulkTablesList.push(pmoadetailsTable);
            var buildingsidsTable = 'create table IF NOT EXISTS buildingSids(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID  Varchar(50), SchlId Varchar(50) , VistId Varchar(50), BldgId Varchar(50),' + 'BldgName Varchar(1000), BldgAge Varchar(300),BldgFundSour Varchar(50),BldgFundSourOthe Varchar(50),BldgFundRecdYear Varchar(50),BldgType Varchar(50),BldgCondition Varchar(50),BldgMajorRepair Varchar(100),' + 'BldgMinorRepair Varchar(100),BldgRoofType Varchar(100) ,RampReqdYn Varchar(100) ,RampAvailYn Varchar(100), RampHandrailAvailYn Varchar(100), Status Varchar(50))';
            this.bulkTablesList.push(buildingsidsTable);
            var floorsidsTable = 'create table IF NOT EXISTS floorSids(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndexId  Varchar(50), SchlId Varchar(50) , VistId Varchar(50), BldgId Varchar(50),' + 'FoolrId Varchar(1000), CorriObstYn Varchar(300),CorriLighAvai Varchar(50),CorriLighFunc Varchar(50),FloorCondi Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(floorsidsTable);
            var roomsidsTable = 'create table IF NOT EXISTS roomSids(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndexId  Varchar(50), school_id Varchar(50) , visit_id Varchar(50), bldg_id Varchar(50),' + 'floor_id Varchar(1000), room_length Varchar(300),room_breadth Varchar(50),room_height Varchar(50),floor_type Varchar(50), room_use Varchar(50),' + 'room_hitech_lab_use Varchar(100), bench_avail Varchar(100), bench_func Varchar(100), bench_req Varchar(100), table_avail Varchar(100), table_func Varchar(100),' + 'table_req Varchar(100), chair_avail Varchar(100), chair_func Varchar(100), chair_req Varchar(100), tubelight_func Varchar(100), tubelight_req Varchar(100),' + 'fans_avail Varchar(100), fans_func Varchar(100), fans_req Varchar(100), teacher_table_yn Varchar(100), tubelight_func Varchar(100), blackboard Varchar(100),' + 'cupboard Varchar(100), windows Varchar(100), television_yn Varchar(100), television_func_yn Varchar(100), smartboard_yn Varchar(100), smartboard_func_yn Varchar(100),' + 'projector_yn Varchar(100), projector_func_yn Varchar(100), lab_type Varchar(100), lab_equipment Varchar(100), tubelight_func Varchar(100), lab_tables_func Varchar(100),' + 'lab_tables_req Varchar(100), lab_chairs Varchar(100), lab_chairs_func Varchar(100), lab_chairs_req Varchar(100), lab_tube Varchar(100), lab_tube_func Varchar(100),' + 'lab_tube_req Varchar(100), lab_fan Varchar(100), lab_fan_func Varchar(100), lab_fan_req Varchar(100), lab_computer Varchar(100),' + 'lab_computer_func Varchar(100), lab_computer_req Varchar(100), library_books Varchar(100), admin_type Varchar(100), lab_drainage Varchar(100), admin_computer Varchar(100),' + 'admin_computer_func Varchar(100), admin_computer_req Varchar(100), admin_printer Varchar(100), admin_printer_func Varchar(100), admin_printer_req Varchar(100), staffrm_used_by Varchar(100),' + 'staffrm_tables Varchar(100), staffrm_tables_func Varchar(100), staffrm_tables_req Varchar(100), staffrm_chairs Varchar(100), staffrm_chairs_func Varchar(100), staffrm_chairs_req Varchar(100),' + 'staffrm_tube Varchar(100), staffrm_tube_func Varchar(100), staffrm_tube_req Varchar(100), staffrm_fan Varchar(100), staffrm_fan_func Varchar(100), staffrm_fan_req Varchar(100),' + 'toilets_water_storage_capacity Varchar(100), toilets_bathroom_yn Varchar(100), toilets_bathroom_func_yn Varchar(100), toilets_handwash_yn Varchar(100), toilets_handwash_func_yn Varchar(100), toilets_handwash_avail Varchar(100),' + 'toilets_electricity_yn Varchar(100), toilets_boys_seats Varchar(100), toilets_boys_func Varchar(100), toilets_boys_req Varchar(100), toilets_girls_seats Varchar(100), toilets_girls_func Varchar(100),' + 'toilets_boys_ewc Varchar(100), toilets_boys_ewc_func Varchar(100), toilets_girls_ewc Varchar(100), staffrm_fan Varchar(100), staffrm_fan_func Varchar(100), toilets_girls_ewc_func Varchar(100),' + 'toilets_girls_req Varchar(100), toilets_boys_cwsn__seats Varchar(100), toilets_boys_cwsn__func Varchar(100), toilets_hatoilets_boys_cwsn__reqndwash_yn Varchar(100), toilets_girls_cwsn_seats Varchar(100), toilets_girls_cwsn_func Varchar(100),' + 'toilets_girls_cwsn__req Varchar(100), toilets_boys_urinals_func Varchar(100), toilets_boys_urinals_req Varchar(100), toilets_boys_req Varchar(100), toilets_girls_urinals_func Varchar(100), toilets_staff_male_ewc_func Varchar(100),' + 'toilets_girls_urinals_req Varchar(100), empty_reason Varchar(100), kitchen_lpg_yn Varchar(100), kitchen_firewood_used_yn Varchar(100), kitchen_watersupply_yn Varchar(100), kitchen_watersource Varchar(100),' + 'kitchen_grocery_stored_yn Varchar(100), kitchen_grocery_stored_clean_yn Varchar(100), dining_functional_yn Varchar(100), dining_studentsuse_yn Varchar(100), dining_seating_available_yn Varchar(100), toilets_girls_cwsn_func Varchar(100),' + 'dining_seating_capacity Varchar(100), room_condition Varchar(100), room_repair_type Varchar(100), room_repair_ceiling_area Varchar(100), room_repair_int_whitewash_area Varchar(100), room_repair_ext_whitewash_area Varchar(100),' + 'toilets_staff_male_req Varchar(100), toilets_staff_female_seats Varchar(100), toilets_staff_female_func Varchar(100), toilets_staff_female_ewc_seats Varchar(100), toilets_staff_female_ewc_func Varchar(100), toilets_girls_urinals_avail Varchar(100),' + 'toilets_staff_female_req Varchar(100), toilets_boys_urinals_avail Varchar(100), toilets_boys_cwsn__func Varchar(100), toilets_hatoilets_boys_cwsn__reqndwash_yn Varchar(100), toilets_girls_cwsn_seats Varchar(100), toilets_girls_cwsn_func Varchar(100))';
            this.bulkTablesList.push(roomsidsTable); //"room_repair_replaster_area": "","room_repair_refloor_area": "","room_repair_door_repaint": "","room_repair_window_repaint": "","room_repair_door_replace": "","room_repair_window_replace": "","room_repair_door_repair": "","room_repair_window_repair": "","room_repair_floor_patchwork_area": "","room_repair_drain_length": "","room_repair_taps": ""
            // const floorsidsTable = 'create table IF NOT EXISTS builddetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID  Varchar(50), SchlId Varchar(50) , VistId Varchar(50), BldgId Varchar(50),' +
            //   'BldgName Varchar(50), BldgAge Varchar(300),BldgFundSour Varchar(50),BldgFundSourOthe Varchar(50),BldgFundRecdYear Varchar(50),BldgType Varchar(50),BldgCondition Varchar(50),BldgMajorRepair Varchar(100),' +
            //   'BldgMinorRepair Varchar(100),BldgRoofType Varchar(100) ,RampAvailYn Varchar(100), RampHandrailAvailYn Varchar(100), Status Varchar(50))';
            // this.bulkTablesList.push(floorsidsTable);
            // const roomsidsTable = 'create table IF NOT EXISTS builddetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID  Varchar(50), SchlId Varchar(50) , VistId Varchar(50), BldgId Varchar(50),' +
            //   'BldgName Varchar(50), BldgAge Varchar(300),BldgFundSour Varchar(50),BldgFundSourOthe Varchar(50),BldgFundRecdYear Varchar(50),BldgType Varchar(50),BldgCondition Varchar(50),BldgMajorRepair Varchar(100),' +
            //   'BldgMinorRepair Varchar(100),BldgRoofType Varchar(100) ,RampAvailYn Varchar(100), RampHandrailAvailYn Varchar(100), Status Varchar(50))';
            // this.bulkTablesList.push(roomsidsTable);
            // const pmoaCountdetailsTable = 'create table IF NOT EXISTS PmoaCountdetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, BlkId  Varchar(50), TotSchlCount  Varchar(50), TotSchlRefrdPmoa Varchar(50),' +
            // 'TotSchlScrndByPmoa Varchar(50)) , TotSchlScrndCount Varchar(50))';
            // this.bulkTablesList.push(pmoaCountdetailsTable);
            //"":"1","":"1","":"1","":"1"}
            // const newRoomSidscommonTable = 'create table IF NOT EXISTS newRoomscommons(Id INTEGER PRIMARY KEY AUTOINCREMENT, IndxId Varchar(50) , SchlId Varchar(50), VistId Varchar(50) , BldgIdxId Varchar(50), BldgId Varchar(100),' +
            //   'FloorIdxId Varchar(50), FloorId Varchar(50), RoomId Varchar(50),' +
            //   'RoomName Varchar(50), RoomUse Varchar(50), RoomLength Varchar(50), RoomBreadth Varchar(50), RoomHeight Varchar(50), FloorType Varchar(50), RoomHitechLabUse Varchar(50), RoomExistHitechlab Varchar(50),' +
            //   'BenchFunc Varchar(50), DeskFunc Varchar(50), TubelightFunc Varchar(50),' +
            //   'FansFunc Varchar(50), TeacherTableYn Varchar(50), Cupboard Varchar(50),' +
            //   'Doors Varchar(50), Windows Varchar(50), TelevisionYn Varchar(50),' +
            //   'TelevisionFuncYn Varchar(50), SmartboardPrjtYn Varchar(50), SmartboardPrjtFuncYn Varchar(50),' +
            //   'LabType Varchar(50), LabTablesFunc Varchar(50), LabChairsFunc Varchar(50),' +
            //   'LabTubeFunc Varchar(50), LabFanFunc Varchar(50), LabComputerYn Varchar(50),' +
            //   'LabComputerRepair Varchar(50), LabComputerFunc Varchar(50), LabWatersupplyYn Varchar(50),' +
            //   'LabDrainage Varchar(50), LibTableFunc Varchar(50), LibTubeFunct Varchar(50),' +
            //   'LibFanFunc Varchar(50), LibChairFunc Varchar(50), LibraryBooks Varchar(50),' +
            //   'HmRoomTblYn Varchar(50), HmRoomChairsVisitors Varchar(50), StaffrmUsedBy Varchar(50),' +
            //   'StaffrmChairsFunc Varchar(50), StaffrmTubeFunc Varchar(50), StaffrmTablesFunc Varchar(50),' +
            //   'StaffrmFanFunc Varchar(50), KitchenFacilities Varchar(50), KitchenWtrSrc Varchar(50),' +
            //   'KitchenStorageYn Varchar(50), KitchenCleanYn Varchar(50), DiningFunctionalYn Varchar(50), DiningSeatingCapacity Varchar(50),' +
            //   'NoonmealStorageClean Varchar(50), StoreRoomPurpose Varchar(50), StrroomStorageClean Varchar(50), ReasonEmpty Varchar(50),' +
            //   'RoomCondition Varchar(50), RepairType Varchar(50), MajorRepair Varchar(50), MinorRepair Varchar(50),' +
            //   'AreaPlastering Varchar(50), AreaExtWw Varchar(50), AreaIntWw Varchar(50), AreaReplastering Varchar(50),' +
            //   'AreaReflooring Varchar(50), AreaPatchwork Varchar(50), DoorReplace Varchar(50), WindowReplace Varchar(50),' +
            //   'DoorRepair Varchar(50), WindowRepair Varchar(50), DoorRepaint Varchar(50), WindowRepaint Varchar(50),' +
            //   'LatrinReplace Varchar(50), UrinalReplace Varchar(50), PipeNeed Varchar(50), DrainageNeed Varchar(50),Status Varchar(50),' +
            //   'ToiletType Varchar(50), WtrSource Varchar(50), Iwccubicles Varchar(50), IwccubiclesFunc Varchar(50), Ewccubicles Varchar(50),' +
            //   'Ewccubiclesfunc Varchar(50), Urinals Varchar(50), Urinalsfunc Varchar(50), ToiletTapsFunc Varchar(50),ToiletBucket Varchar(50),' +
            //   'Toiletmugs Varchar(50), SizeSuitable Varchar(50), Roof Varchar(50), HwFacility Varchar(50),HwFacilityLocation Varchar(50),' +
            //   'HwFacilityType Varchar(50), PipingNeed Varchar(50), PipeLengthNeed Varchar(50), TapsFunc Varchar(50), TapsReq Varchar(50),StorageFacilityClosed Varchar(50))';

            var newRoomSidscommonTable = 'create table IF NOT EXISTS newRoomscommons(Id INTEGER PRIMARY KEY AUTOINCREMENT,' + ' IndxId Varchar(50) , SchlId Varchar(50), VistId Varchar(50) , BldgIdxId Varchar(50), BldgId Varchar(100),' + ' FloorIdxId Varchar(50), FloorId Varchar(50), RoomId Varchar(50), RoomUse Varchar(50), RoomName Varchar(50), ' + ' RoomCondition Varchar(50), RepairType Varchar(50), MajorRepair Varchar(50), MinorRepair Varchar(50),' + ' AreaPlastering Varchar(50), AreaIntWw Varchar(50), AreaReplastering Varchar(50),' + ' AreaReflooring Varchar(50), AreaPatchwork Varchar(50), DoorReplace Varchar(50), WindowReplace Varchar(50),' + ' DoorRepair Varchar(50), WindowRepair Varchar(50), DoorRepaint Varchar(50), WindowRepaint Varchar(50),' + ' LatrinReplace Varchar(50), UrinalReplace Varchar(50), PipeNeed Varchar(50), DrainageNeed Varchar(50),' + ' RoomLength Varchar(50), RoomBreadth Varchar(50), FloorType Varchar(50),' + ' NumBenchAvail Varchar(50), NumDesksAvail Varchar(50), TubelightFunc Varchar(50), FansFunc Varchar(50), Cupboard Varchar(50), NumCupboardReq Varchar(50),' + ' TeacherTableYn Varchar(50), TelevisionFuncYn Varchar(50), SmartboardPrjtFuncYn Varchar(50),' + ' ClassRoomProjYn Varchar(50), ' + ' LabType Varchar(50), LabComputerFunc Varchar(50),' + ' LabComputerRepair Varchar(50),  LabWatersupplyYn Varchar(50), LabDrainage Varchar(50),' + ' LibraryBooks Varchar(50), StaffrmUsedBy Varchar(50),' + ' KitchenWtrSrc Varchar(50), KitchenLPGConYn Varchar(50), KitchenWtrSupply Varchar(50), ' + ' KitchenStorageYn Varchar(50), KitchenCleanYn Varchar(50), KitchenGardenYn Varchar(50),' + ' DiningFunctionalYn Varchar(50), DiningSeatingCapacity Varchar(50), DiningSeatingWtrSupply Varchar(50),' + ' NoonmealStorageClean Varchar(50), StoreRoomPurpose Varchar(50), StrroomStorageClean Varchar(50), ReasonEmpty Varchar(50),' + ' ToiletType Varchar(50), ToiletWaterCon Varchar(50), ToiletWasteDis Varchar(50), Iwccubicles Varchar(50),' + ' IwccubiclesFunc Varchar(50), Ewccubicles Varchar(50), Ewccubiclesfunc Varchar(50), Urinals Varchar(50),' + ' Urinalsfunc Varchar(50), ToiletTapsFunc Varchar(50),ToiletNeedTabs Varchar(50), ToiletBucket Varchar(50),' + ' Toiletmugs Varchar(50), SizeSuitable Varchar(50), Roof Varchar(50), ToiletSanitaryPad Varchar(50), SanitWasteDisp Varchar(50), HwFacility Varchar(50),' + ' AuditoriumYn Varchar(50), AuditoriumStageYn Varchar(50), ' + ' AuditoriumLights Varchar(50), AuditoriumFans Varchar(50), AuditoriumPrjtFunc Varchar(50), ' + ' SmartRoomFacilityYn Varchar(50), SmartRoomDeviceFunYn Varchar(50), SmartRoomComputersYn Varchar(50), SmartRoomFunComp Varchar(50), SmartRoomFunCompRepair Varchar(50),' + ' RoomArea Varchar(50), NumChairAvail Varchar(50), NumTableAvail Varchar(50),' + ' LabInternetConn Varchar(50), LabInternetConnType Varchar(50), LabBandwidth Varchar(50), LabServiceProvider Varchar(50), LabServiceProviderOthers Varchar(50),' + ' LabProjector Varchar(50), LabPrinter Varchar(50), LabWebCamera Varchar(50), LabMic Varchar(50), LabHeadphones Varchar(50), LabLatitude Varchar(50), LabLogitude Varchar(50), LabPhotoOne Varchar(50), LabPhotoOneName Varchar(50), HmRoomToiletYn Varchar(50), HmRoomToiletStatus Varchar(50),' + ' DiningRoomHandwash Varchar(50), DiningNumTapFunc Varchar(50), ToiletCubicSideHandRail Varchar(50), AudiStageStatus Varchar(50),' + ' SmartTabletFunc Varchar(50), SmartSpeakerFunc Varchar(50), SmartPaFunc Varchar(50), SmartInternet Varchar(50), SmartInternetConnType Varchar(50), SmartInternetConnTypeOthers Varchar(50), SmartBandwidth Varchar(50), SmartServiceProvider Varchar(50), SmartServiceProviderOthers Varchar(50))';
            this.bulkTablesList.push(newRoomSidscommonTable);
            var sidsStatusTable = 'create table IF NOT EXISTS sidsstatus(Id INTEGER PRIMARY KEY AUTOINCREMENT, udise Varchar(50) , SclId Varchar(50) ,room Varchar(50), floor Varchar(100),' + 'building Varchar(50), schoolcommon Varchar(50),sidsStatus Varchar(50))';
            this.bulkTablesList.push(sidsStatusTable);
            var sidsTable = 'create table IF NOT EXISTS dashboardSidsdetails(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(50) , VistId Varchar(50), BldgIdCount Varchar(50), BldgId Varchar(50),' + 'FoolrId Varchar(100), roomId Varchar(300), Status Varchar(50))';
            this.bulkTablesList.push(sidsTable);
            var commondetailsTable = 'create table IF NOT EXISTS newcommondetail(Sid INTEGER PRIMARY KEY AUTOINCREMENT, IndxID Varchar(50), SclId Varchar(100) ,' + 'VisitId Varchar(100) ,ques_id Varchar(100),ques_displayid Varchar(100),ques_text Varchar(100),ques_type Varchar(100),ques_valid Varchar(100),number_valid Varchar(100),ques_max Varchar(100),ques_min Varchar(100) ,' + 'ques_pattern Varchar(100),ques_title Varchar(100),ques_subques Varchar(100),ques_subid Varchar(100),ques_option Varchar(100),ques_condition Varchar(100),ques_response Varchar(100),subquestions Varchar(100), Status Varchar(50))';
            this.bulkTablesList.push(commondetailsTable);
            var sidsGeneralSchool = 'create table IF NOT EXISTS generalSchoolQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' + 'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(5000), subquestions Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(sidsGeneralSchool);
            var sidsSafetySecurity = 'create table IF NOT EXISTS safetySecurityQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' + 'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(sidsSafetySecurity);
            var sidsSanitaion = 'create table IF NOT EXISTS sanitaionQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' + 'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(sidsSanitaion);
            var sidsWater = 'create table IF NOT EXISTS waterQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' + 'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(sidsWater);
            var comsidsWater = 'create table IF NOT EXISTS commonSidsQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' + 'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(comsidsWater);
            var waterSource = 'create table IF NOT EXISTS waterSourceSidsQuestions(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), WaterId Varchar(100), ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' + 'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(waterSource); // const buildingWater = 'create table IF NOT EXISTS sidsBuildingQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' +
            //   'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            // this.bulkTablesList.push(buildingWater);
            // Abdullah const buildingWater = 'create table IF NOT EXISTS sidsBuildingQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),BldgName Varchar(50) , BldgAge Varchar(50), BldgFundSourceCons Varchar(50), BldgSrcYr Varchar(50),' +
            // 'BldgType Varchar(100), BldgLength Varchar(300), BldgBre Varchar(50), BldgHeight Varchar(50), BldgCondition Varchar(50), BldgRepair Varchar(50), AreaWeatheringReq Varchar(50), AreaPressedTiles Varchar(50), PipeNeedHwDw Varchar(50), PipeNeedToilet Varchar(50), AreaExtWw Varchar(50), AreaIntWw Varchar(50),'+
            // 'AreaReplasting Varchar(50), AreaReflooring Varchar(50), AreaFlrPatchwrk Varchar(50), BldgTerraceStepsYn Varchar(50), RampAvailYn Varchar(50), RampHandrailAvailYn Varchar(50), ElectrictyStatus Varchar(50))';
            // this.bulkTablesList.push(buildingWater);

            var buildingWater = 'create table IF NOT EXISTS sidsBuildingQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT,' + ' SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),BldgName Varchar(50),' + ' BldgFundSourceCons Varchar(50), BldgFundSourceConsOthers Varchar(50), BldgType Varchar(100), BldgLength Varchar(300), BldgBre Varchar(50),' + ' BldgCondition Varchar(50), ElectricityAvai Varchar(50), BldgRepair Varchar(50), AreaWeatheringReq Varchar(50), AreaPressedTiles Varchar(50),' + ' PipeNeedHwDw Varchar(50), PipeNeedToilet Varchar(50), WireLenElectrcty Varchar(50),' + ' AreaWaterLeakage Varchar(50), AreaExtWw Varchar(50), AreaIntWw Varchar(50), AreaReplasting Varchar(50),' + ' AreaReflooring Varchar(50), AreaFlrPatchwrk Varchar(50), AuditoriumYn Varchar(50),' + ' AuditoriumLights Varchar(50), AuditoriumFans Varchar(50),' + ' AuditoriumPrjtYn Varchar(50), RampAvailYn Varchar(50), RampRepairYn Varchar(50), RampHandrailYn Varchar(50),' + ' FireExtYn Varchar(50),' + ' BuildReapairComArea Varchar(50), BldgYrConst Varchar(50), BldgConstAgency Varchar(50), BldgConstOthers Varchar(50), AudiStageStatus Varchar(50),' + ' BldgFrontPhoto Varchar(5000), BldgFrontPhotoName Varchar(50), BldgExterior Varchar(50), BldgInterior Varchar(50), RainWaterFacilityYn Varchar(50), LATITUDE Varchar(50), LOGITUDE Varchar(50))';
            this.bulkTablesList.push(buildingWater); // const floorWater = 'create table IF NOT EXISTS sidsFloorQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),FloorId Varchar(50),FloorIndx Varchar(50),ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' +
            //   'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            // this.bulkTablesList.push(floorWater);
            // Abdullah const floorWater = 'create table IF NOT EXISTS sidsFloorQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),FloorId Varchar(50),FloorIndx Varchar(50),'+ 
            // 'FloorNum Varchar(50) , FloorCondi Varchar(50), FloorSafety Varchar(50), RepairSteps Varchar(50), FoolrTy Varchar(100), FoolrAreReq Varchar(300), OutPipY Varchar(50), PipLenNeed Varchar(50), RoofCleaYn Varchar(50), CorridorYn Varchar(50),'+ 
            // 'CorriCondi Varchar(50), CorriLen Varchar(50), CorridorWidth Varchar(50), CorriObstYn Varchar(50), CorriLighFunc Varchar(50), CorridorRepair Varchar(50), AreaWw Varchar(50), AreaReplastering Varchar(50), AreaReflooring Varchar(50), AreaCeilingPlaster Varchar(50),'+
            //   'AreaFlrPatchwork Varchar(50), DoorReplace Varchar(50), JaalisReplace Varchar(50), DoorRepair Varchar(50), JaalisRepair Varchar(50), DoorRepaint Varchar(50), JaalisRepaint Varchar(50))';
            // this.bulkTablesList.push(floorWater);

            var floorWater = 'create table IF NOT EXISTS sidsFloorQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),FloorId Varchar(50),FloorIndx Varchar(50),' + 'FloorNum Varchar(50), FloorCondi Varchar(50), FloorSafety Varchar(50), ReqParapetWall Varchar(50), ParapetWallLength Varchar(50), ParapetWallHeight Varchar(50), ParapetWallWhiteWash Varchar(50), ParapetWallReplasting Varchar(50),' + 'ParapetWallBrickWork Varchar(50), BldOhtYn Varchar(50), FunBldOhtYn Varchar(50),RepairSteps Varchar(50), FoolrTy Varchar(100), FoolrAreReq Varchar(300), OutPipY Varchar(50), PipLenNeed Varchar(50), WeatheringReq Varchar(50), RoofCleaYn Varchar(50), CorridorYn Varchar(50),' + 'CorriCondi Varchar(50), CorriLen Varchar(50), CorridorWidth Varchar(50), CorriLighFunc Varchar(50), CorridorRepair Varchar(50), AreaWw Varchar(50), AreaReplastering Varchar(50), AreaReflooring Varchar(50), AreaCeilingPlaster Varchar(50),' + 'AreaFlrPatchwork Varchar(50), JaalisReplace Varchar(50), JaalisRepair Varchar(50), JaalisRepaint Varchar(50))';
            this.bulkTablesList.push(floorWater);
            var roomsids = 'create table IF NOT EXISTS sidsRoomQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),FloorId Varchar(50),FloorIndx Varchar(50),RoomId Varchar(50), ques_id Varchar(50) , ques_displayid Varchar(50), ques_text Varchar(50), ques_type Varchar(50),' + 'ques_valid Varchar(100), number_valid Varchar(300), ques_max Varchar(50), ques_min Varchar(50), ques_pattern Varchar(50), ques_title Varchar(50), ques_subques Varchar(50), ques_subid Varchar(50), ques_option Varchar(50), ques_condition Varchar(50), ques_response Varchar(50), subquestions Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(roomsids);
            var comsidsServer = 'create table IF NOT EXISTS sidsCommonServer(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100),Status Varchar(50))';
            this.bulkTablesList.push(comsidsServer);
            var gensidsServer = 'create table IF NOT EXISTS sidsGeneralServer(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100),Status Varchar(50))';
            this.bulkTablesList.push(gensidsServer);
            var bulsidsServer = 'create table IF NOT EXISTS sidsBuildServer(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100),Status Varchar(50), BuildingId Varchar(50))';
            this.bulkTablesList.push(bulsidsServer);
            var floorsidsServer = 'create table IF NOT EXISTS sidsFloorServer(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100),Status Varchar(50), BuildingId Varchar(50),FloorId Varchar(50))';
            this.bulkTablesList.push(floorsidsServer);
            var roomsidsServer = 'create table IF NOT EXISTS sidsRoomServer(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100),Status Varchar(50), BuildingId Varchar(50),FloorId Varchar(50),RoomId Varchar(50))';
            this.bulkTablesList.push(roomsidsServer);
            var bulsidsSave = 'create table IF NOT EXISTS sidsBuildSavesDatas(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), BuildingId Varchar(50),Status Varchar(50),Condition Varchar(50),BuildName Varchar(50),BuildCondi Varchar(50), ClosingQuestions Varchar(50), FloorCondition Varchar(50))';
            this.bulkTablesList.push(bulsidsSave);
            var floorsidsSave = 'create table IF NOT EXISTS sidsFloorSaveDatas(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), FloorIndx Varchar(50), FloorId Varchar(50),Status Varchar(50),FloorName Varchar(50),FloorCondi Varchar(50), FloorClose  Varchar(50), RoomCondition Varchar(50))';
            this.bulkTablesList.push(floorsidsSave);
            var roomsidsSave = 'create table IF NOT EXISTS sidsRoomSaves(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), FloorIndx Varchar(50),RoomId Varchar(50),Status Varchar(50),RoomName Varchar(50))';
            this.bulkTablesList.push(roomsidsSave); // For SIDS by Priya

            var sidsSchoolSearch = 'create table IF NOT EXISTS sids_schoolsearch(id INTEGER PRIMARY KEY AUTOINCREMENT, udise Varchar(100), schoolid Varchar(100), schoolname Varchar(50), visitid Varchar(50),emis_username Varchar(50) , emis_usertype Varchar(50), date Varchar(50),' + 'generalstatus Varchar(100), buildingstatus Varchar(300), roomstatus Varchar(50), finalstatus Varchar(50), status Varchar(50))';
            this.bulkTablesList.push(sidsSchoolSearch); // Abdullah Version 2 const sidsGeneralSchoolData = 'create table IF NOT EXISTS sids_general_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), SiteNum Varchar(50), TotalArea Varchar(50),TotAvailAreaCons Varchar(50) , TotOpenArea Varchar(50), CmpdwallSta Varchar(50), CmpdwallReq Varchar(50),' +
            //   'CmpdwallTy Varchar(100), CmpdwallReqt Varchar(300), GateYn Varchar(50), GateFunc Varchar(50), GateReq Varchar(50), HitecLabYN Varchar(50), HitecLabFun Varchar(50), CmpdwallLenCon Varchar(50), CmpdwallHTInc Varchar(50), AreaWW Varchar(50), Status Varchar(50))';
            // this.bulkTablesList.push(sidsGeneralSchoolData);
            // Version 3 const sidsGeneralSchoolData = 'create table IF NOT EXISTS sids_general_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), SiteNum Varchar(50), TotalArea Varchar(50),TotAvailAreaCons Varchar(50) , CmpdwallSta Varchar(50), CmpdwallReq Varchar(50),' +
            //   'CmpdwallTy Varchar(100), CmpdwallReqt Varchar(300), GateYn Varchar(50), GateFunc Varchar(50), GateRepaired Varchar(50), GateRepainted Varchar(50), GateReq Varchar(50), AreaReplastering Varchar(50), AreaBrickwork Varchar(50), CmpdwallHTInc Varchar(50), AreaWW Varchar(50), Status Varchar(50))';
            // this.bulkTablesList.push(sidsGeneralSchoolData);
            // Version 3.2 const sidsGeneralSchoolData = 'create table IF NOT EXISTS sids_general_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), SiteNum Varchar(50), TotalArea Varchar(50),CmpAdmin Varchar(50) , CmpAdminFunc Varchar(50), PrinterAdminYn Varchar(50),' +
            // 'PrinterAdminFunc Varchar(100), AuditoriumPrjtYn Varchar(300), AuditoriumPrjtFunc Varchar(50), OutsiClsYN Varchar(50), OutsiClsNum Varchar(50), OutsiLabYN Varchar(50), OutsiLabNum Varchar(50), LadderYn Varchar(50), LadderHeight Varchar(50), SolarYn Varchar(50), Status Varchar(50))';
            // this.bulkTablesList.push(sidsGeneralSchoolData);
            // Version 3.3 const sidsGeneralSchoolData = 'create table IF NOT EXISTS sids_general_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), SiteNum Varchar(50), TotalArea Varchar(50),' +
            //   ' PurpLaptopYN Varchar(50), PurpLaptopFun Varchar(50), PurpLaptopNonFun Varchar(50), PurpComputerYN Varchar(50), PurpComputerFun Varchar(50), PurpComputerNonFun Varchar(50), PurpTabYN Varchar(50), PurpTabFun Varchar(50), PurpTabNonFun Varchar(50), PurpPrinterYN Varchar(50), PurpPrinterFun Varchar(50), PurpPrinterNonFun Varchar(50), PurpProjectorYN Varchar(50), PurpProjectorFun Varchar(50), PurpProjectorNonFun Varchar(50), Status Varchar(50))';
            // this.bulkTablesList.push(sidsGeneralSchoolData);

            var sidsGeneralSchoolData = 'create table IF NOT EXISTS sids_general_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), SiteNum Varchar(50), TotalArea Varchar(50),' + 'TotalLandAreaExcludPg Varchar(50), LaptopNumFunc Varchar(50), ComputerNumFunc Varchar(50), TabNumFunc Varchar(50), PurpPrinterFun Varchar(50), PrjctrNumFunc Varchar(50), ScannerNumFunc Varchar(50), InternetYn Varchar(50), InternetType Varchar(50), InternetTypeOthers Varchar(50), InternetServProv Varchar(50), InternetServProvOthers Varchar(50), Bandwidth Varchar(50), GeneralPhoto Varchar(5000), GeneralPhotoName Varchar(50), SolarPanelAvai Varchar(50), GeneratorAvai Varchar(50), GeneralLatitude Varchar(50), GeneralLongitude Varchar(50),Status Varchar(50))';
            this.bulkTablesList.push(sidsGeneralSchoolData);
            var SidsBulidVisitGet = 'create table IF NOT EXISTS SidsBulidVisitGet(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), BuildId Varchar(50), JsonBuild Varchar(1000))';
            this.bulkTablesList.push(SidsBulidVisitGet);
            var SidsFloorsVisitGet = 'create table IF NOT EXISTS SidsFloorsVisitGet(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), BuildId Varchar(50), JsonBuild Varchar(1000), BuildIndexId Varchar(50))';
            this.bulkTablesList.push(SidsFloorsVisitGet); // const sidsSafetySchoolData = 'create table IF NOT EXISTS sids_safety_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), FireExtYn Varchar(100), FireExtFun Varchar(50), FireExtRepair Varchar(50),FirstaidKitYn Varchar(50) , FirstaidKitFun Varchar(50), FirstaidKitRepair Varchar(50), CCTVYn Varchar(50),' +
            //   'CCTVFun Varchar(100), CCTVRepair Varchar(300), EBliShiYn Varchar(50), RefilAreReq Varchar(50), RefilSqft Varchar(50), WatLoggYn Varchar(50), TrePrunReq Varchar(50),OpenWellYn Varchar(50),WaterBodySafetyYn Varchar(50),Status Varchar(50))';
            // this.bulkTablesList.push(sidsSafetySchoolData);

            var sidsSafetySchoolData = 'create table IF NOT EXISTS sids_safety_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), EBliShiYn Varchar(50), RefilAreReq Varchar(50), RefilSqft Varchar(50), WatLoggYn Varchar(50), TrePrunReq Varchar(50),OpenWellYn Varchar(50), Status Varchar(50))';
            this.bulkTablesList.push(sidsSafetySchoolData); // const sidsSanitationSchoolData = 'create table IF NOT EXISTS sids_sanitation_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), DustYN Varchar(100), NapkYn Varchar(50), NapkFun Varchar(50),NapkRepair Varchar(50) , SanWstDis Varchar(50), SanWstDisFun Varchar(50), SanWstDisRepair Varchar(50),' +
            //   'SoapHwLunch Varchar(100), soapHwToilet Varchar(300), ToilClen Varchar(50), ToilWstDis Varchar(50), ToiletWstDispSoak Varchar(50), ToiletWstDispSeptic Varchar(50), SeptiTankFun Varchar(50),SeptiTankShap Varchar(50),SeptiLen Varchar(50),SeptiBrea Varchar(50),SeptiRadi Varchar(50),SeptiHeit Varchar(50),SepticTankEmpty Varchar(50))';
            // this.bulkTablesList.push(sidsSanitationSchoolData);

            var sidsSanitationSchoolData = 'create table IF NOT EXISTS sids_sanitation_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), CmnDustbinYN Varchar(100), SanWstDisFun Varchar(50), SanWstDisRepair Varchar(50),' + 'soapHwToilet Varchar(300), ToilWstDis Varchar(50), ToiletWstDispSoak Varchar(50), ToiletWstDispSeptic Varchar(50), SeptiTankFun Varchar(50))';
            this.bulkTablesList.push(sidsSanitationSchoolData); // const sidsWaterSchoolData = 'create table IF NOT EXISTS sids_water_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), BorWelYn Varchar(100), BorWelFunc Varchar(50), BorWelOpe Varchar(50),RoPlanYN Varchar(50) , RoPlanRepair Varchar(50), RoPlanFun Varchar(50), DWToilDist Varchar(50),' +
            //   'WatSrcMove Varchar(100), WastDWDisp Varchar(300), PipeReqYn Varchar(50), PipeLen Varchar(50), DiffConHWDWYN Varchar(50), HWWatSor Varchar(50), HWWatrTreat Varchar(50),HWWatrAvai Varchar(50),HWWatrAvaiLis Varchar(50),HWOhtYN Varchar(50),HWOhtRepair Varchar(50),HWOhtFun Varchar(50),HWOhtReq Varchar(50),' +
            //   'HWSumpYN Varchar(100), HWSumprepair Varchar(300), HWSumpFun Varchar(50), HWSumpReq Varchar(50), HWPumpYn Varchar(50), HWPumpRepair Varchar(50), HWPumpFun Varchar(50),HWPumpReq Varchar(50),DWWatSrc Varchar(50),DWWatTreat Varchar(50),DWWatAvai Varchar(50),DWWatAvaiLit Varchar(50),DWOhtYn Varchar(50),' +
            //   'DWOhtRepair Varchar(100), DWOhtFun Varchar(300), DWOhtReq Varchar(50), DWSumpYn Varchar(50), DWSumpAvai Varchar(50), DWSumpFun Varchar(50), DWSumpReq Varchar(50),DWPumpYn Varchar(50),DWPumpRepair Varchar(50),DWPumpFun Varchar(50),DWPumpReq Varchar(50),CMWatSrc Varchar(50),CMWatTreat Varchar(50),' +
            //   'CMWatAvai Varchar(100), CMWatAvasiLis Varchar(300), CMOhtYn Varchar(50), CMOhtRepair Varchar(50), CMOhtFun Varchar(50), CMOhtReq Varchar(50), CMSumpYn Varchar(50),CMSumpRepair Varchar(50),CMSumpFun Varchar(50),CMSumpReq Varchar(50),CMPumpYn Varchar(50),CMPumpRepair Varchar(50),CMPumpFun Varchar(50),CMPumpReq Varchar(50))';
            // this.bulkTablesList.push(sidsWaterSchoolData);
            // const sidsWaterSchoolData = 'create table IF NOT EXISTS sids_water_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100),' +
            //   'WatAvaiSchool Varchar(100), ResUnAvaiWater Varchar(100), srcWaterAvai Varchar(100),' +
            //   'BorWelFunc Varchar(50), BorwelClosed Varchar(50) , BorWelReqReapir Varchar(50), DWWatAvai Varchar(50),' +
            //   'DWSumpYn Varchar(100), DWSumpFun Varchar(50), DWSumpAvai Varchar(50), DWPumpYn Varchar(50),' +
            //   'DWPumpFun Varchar(100), DWPumpRepair Varchar(300), NumDWStation Varchar(50))';
            // this.bulkTablesList.push(sidsWaterSchoolData);

            var sidsWaterSchoolData = 'create table IF NOT EXISTS sids_water_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100),' + 'WatAvaiSchool Varchar(100), ResUnAvaiWater Varchar(100), srcWaterAvai Varchar(100), srcWaterOthers Varchar(100),' + 'BorWelFunc Varchar(50), FreqWaterAvail Varchar(50),' + 'DWSumpYn Varchar(100), DWSumpFun Varchar(50), DWSumpAvai Varchar(50), DWPumpYn Varchar(50),' + 'DWPumpFun Varchar(100), DWPumpRepair Varchar(300), NumDWStation Varchar(50), WaterRoFunc Varchar(50), srcDrnkWaterAvai Varchar(50), srcDrnkWaterAvaiOthers Varchar(50), WaterComHandwash Varchar(50))';
            this.bulkTablesList.push(sidsWaterSchoolData); // const sidsCommonSchoolData = 'create table IF NOT EXISTS sids_common_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), PlaygroYn Varchar(100), PlaygroArea Varchar(50), PlaygroPart Varchar(50) , PlaygroNeed Varchar(50), KgPlaYn Varchar(50), KgPlaThinYn Varchar(50),' +
            // 'AuditoriumYn Varchar(100), AuditoriumOpnCls Varchar(300), AuditoriumSeatsFunc Varchar(50), AuditoriumStageYn Varchar(50), AuditoriumStageReqt Varchar(50),' +
            // ' AuditoriumStageArea Varchar(50), AuditoriumStageHeight Varchar(50),AuditoriumStageAreaLevel Varchar(50),CmpAdmin Varchar(50),CmpAdminFunc Varchar(50),' +
            // ' PrinterAdminYn Varchar(50), PrinterAdminFunc Varchar(50),LadderYn Varchar(50),LadderHeight Varchar(50),SolarYn Varchar(50),' +
            // ' SolarRepairYn Varchar(50), OutsiClsYN Varchar(50),OutsiClsNum Varchar(50),OutsiLabYN Varchar(50),OutsiLabNum Varchar(50),' +
            // 'AuditoriumLights Varchar(50),AuditoriumFans Varchar(50),AuditoriumPrjtYn Varchar(50),AuditoriumPrjtFunc Varchar(50))';

            var sidsCommonSchoolData = 'create table IF NOT EXISTS sids_common_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), PlaygroYn Varchar(100), PlaygroArea Varchar(50), KgPlaYn Varchar(50), PlayKerbwall Varchar(50), PlayLevelling Varchar(50), AreaLevelling Varchar(50), KgPlaThinYn Varchar(50),' + 'AuditoriumYn Varchar(100), AuditoriumOpnCls Varchar(300), AuditoriumSeatsFunc Varchar(50), AuditoriumStageYn Varchar(50), AuditoriumStageReqt Varchar(50),' + ' AuditoriumStageArea Varchar(50), AuditoriumStageHeight Varchar(50),AuditoriumStageAreaLevel Varchar(50),CmpAdmin Varchar(50),CmpAdminFunc Varchar(50),' + ' PrinterAdminYn Varchar(50), PrinterAdminFunc Varchar(50),LadderYn Varchar(50),LadderHeight Varchar(50),SolarYn Varchar(50),' + ' OutsiClsYN Varchar(50),OutsiClsNum Varchar(50),OutsiLabYN Varchar(50),OutsiLabNum Varchar(50),' + 'AuditoriumLights Varchar(50),AuditoriumFans Varchar(50),AuditoriumPrjtYn Varchar(50),AuditoriumPrjtFunc Varchar(50))';
            this.bulkTablesList.push(sidsCommonSchoolData); // const sidsCommonSchoolData = 'create table IF NOT EXISTS sids_common_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), PlaygroYn Varchar(100), PlaygroLen Varchar(50), PlaygroBre Varchar(50),PlaygroPart Varchar(50) , PlaygroNeed Varchar(50), KgPlaYn Varchar(50), KgPlaThinYn Varchar(50),' +
            //   'AuditoriumYn Varchar(100), AuditoriumOpnCls Varchar(300), AuditoriumSeatsFunc Varchar(50), AuditoriumStageYn Varchar(50), AuditoriumStageReqt Varchar(50),' +
            //   ' AuditoriumStageArea Varchar(50), AuditoriumStageHeight Varchar(50),AuditoriumStageAreaLevel Varchar(50),CmpAdmin Varchar(50),CmpAdminFunc Varchar(50),' +
            //   ' PrinterAdminYn Varchar(50), PrinterAdminFunc Varchar(50),LadderYn Varchar(50),LadderHeight Varchar(50),SolarYn Varchar(50),' +
            //   ' SolarRepairYn Varchar(50), OutsiClsYN Varchar(50),OutsiClsNum Varchar(50),OutsiLabYN Varchar(50),OutsiLabNum Varchar(50),' +
            //   'AuditoriumLights Varchar(50),AuditoriumFans Varchar(50),AuditoriumPrjtYn Varchar(50),AuditoriumPrjtFunc Varchar(50))';
            // this.bulkTablesList.push(sidsCommonSchoolData);
            // const safetyData = 'create table IF NOT EXISTS sids_safety_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId text,' +
            //   'EBliShiYn Varchar(100), RefilAreReq Varchar(50),RefilSqft Varchar(50),WatLoggYn Varchar(100),WatLogRepair Varchar(100), TrePrunReq Varchar(100),OpenWellYn Varchar(100),DustYN Varchar(100),' +
            //   'ChulhaYn Varchar(100),ChulhaFunc Varchar(100),ChulhaRepair Varchar(100), SChSepticTank Varchar(100), SepticTankFun Varchar(100), SepticTankRepaired Varchar(100), Status Varchar(100))'
            // this.bulkTablesList.push(safetyData);
            // const playgroundData = 'create table IF NOT EXISTS sids_playground_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100),' +
            //   'PlaygroYn Varchar(100), PlaygroArea Varchar(50),PlayKerbwall Varchar(50),OutsiClsYN Varchar(100), OutsiClsNum Varchar(100), Status Varchar(100))'
            // this.bulkTablesList.push(playgroundData);
            // const compoundWallData = 'create table IF NOT EXISTS sids_compoundwall_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId text,' +
            //   'CmpdwallSta Varchar(100), CmpdwallReq Varchar(50), CmpdwallReqt Varchar(100),CmpdwallHTInc Varchar(100), AreaWW Varchar(100),AreaReplastering Varchar(100),' +
            //   'AreaBrickwork Varchar(100),GateYn Varchar(100),GateFunc Varchar(100), Status Varchar(100))'
            // this.bulkTablesList.push(compoundWallData);

            var safetyData = 'create table IF NOT EXISTS sids_safety_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId text,' + 'EBliShiYn Varchar(100), RefilAreReq Varchar(50),WatLoggYn Varchar(100),WatLogRepair Varchar(100),OpenWellYn Varchar(100),DustYN Varchar(100),' + 'Status Varchar(100))';
            this.bulkTablesList.push(safetyData);
            var playgroundData = 'create table IF NOT EXISTS sids_playground_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100),' + 'PlaygroYn Varchar(100),PlaygroOutdoorGamYn Varchar(100), PlaygroArea Varchar(50),OutsiClsNum Varchar(100), Status Varchar(100))';
            this.bulkTablesList.push(playgroundData);
            var compoundWallData = 'create table IF NOT EXISTS sids_compoundwall_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId text,' + 'CmpdwallSta Varchar(100), CmpdwallReqLen Varchar(50), CmpdwallReqt Varchar(100),CmpdwallHTInc Varchar(100), AreaWW Varchar(100),AreaReplastering Varchar(100),' + 'AreaBrickwork Varchar(100),SchoolTotalGates Varchar(100),GateFunc Varchar(100), Status Varchar(100))';
            this.bulkTablesList.push(compoundWallData); // by Dinesh S

            var mhtDoctDeatails = 'create table IF NOT EXISTS mhtDoctDeatailsDB(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Name Varchar(100), MobileNo Varchar(100),SchoolId Varchar(100), VisitPhoto Varchar(100))';
            this.bulkTablesList.push(mhtDoctDeatails);
            var mhtSchoolList = 'create table IF NOT EXISTS mhtSchoolListDB(id INTEGER PRIMARY KEY AUTOINCREMENT, acYear Varchar(15), school_id Varchar(200), school_name Varchar(200), status Varchar(2), longitude float, latitude float)';
            this.bulkTablesList.push(mhtSchoolList);
            var mhtStudentList = 'create table IF NOT EXISTS mhtStudentListDB(id INTEGER PRIMARY KEY AUTOINCREMENT, Gender Varchar(200), PhnNum Varchar(200), StuId Varchar(200), StuNme Varchar(200), UniqId Varchar(200), SchlId Varchar(200), Cls Varchar(200),  Sec Varchar(200), ComptStatus Varchar(200),LocalTick Varchar(2))';
            this.bulkTablesList.push(mhtStudentList);
            var mhtStudentFormDetails = 'create table IF NOT EXISTS mhtStudentFormDetailsDB(Id INTEGER PRIMARY KEY AUTOINCREMENT, ActTkn Varchar(100), DgnsdCndn text,' + 'DgnsdCndnOth Varchar(100), DrMobile Varchar(15),DrName Varchar(50),FlwReqDate Varchar(11),FlwReqd Varchar(10),IndexId Varchar(11),LocalStatus Varchar(5), SchoolId Varchar(11),' + 'StudentId Varchar(15),TabPresc Varchar(100),TabPrescOth Varchar(100),TabValue Varchar(100),TabYn Varchar(2),Username Varchar(15), Status varchar(15))';
            this.bulkTablesList.push(mhtStudentFormDetails);
            var allclassTable = 'create table IF NOT EXISTS AllClasslist(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlD INTEGER, ClsID INTEGER,' + 'Sectn Varchar(100), Clsroman Varchar(50),UserName Varchar(50),Sync INTEGER,Session1 INTEGER,Session2 INTEGER,SyncClass INTEGER,' + 'SyncDate INTEGER,SyncClassDate INTEGER,date Varchar(100),present Varchar(100),absent Varchar(100))';
            this.bulkTablesList.push(allclassTable);
            var mhtEyeScreening = 'create table IF NOT EXISTS mhtEyeScreeningDB(id INTEGER PRIMARY KEY AUTOINCREMENT, q_id Varchar(200), q_name Varchar(500), response_int Varchar(200), student_id Varchar(200))';
            this.bulkTablesList.push(mhtEyeScreening);
            var mhtBMI = 'create table IF NOT EXISTS mhtBMIDB(id INTEGER PRIMARY KEY AUTOINCREMENT, student_bmi Varchar(200), student_height Varchar(200), student_weight Varchar(200), student_id Varchar(200))';
            this.bulkTablesList.push(mhtBMI);
            var mhtGeneralHealth = 'create table IF NOT EXISTS mhtGeneralHealthDB(id INTEGER PRIMARY KEY AUTOINCREMENT, head_size_yn Varchar(100), head_scar_yn Varchar(100), face_changes_yn Varchar(100), face_scar_yn Varchar(50), nose_flat_yn Varchar(50) , nose_crooked_yn Varchar(50), anaemia_yn Varchar(50), eyes_cataract_yn Varchar(50),' + 'ear_check_yn Varchar(100), cleft_check_yn Varchar(300), heart_cyanosis_yn Varchar(50), dental_cavity_yn Varchar(50), dental_flurosis_yn Varchar(50),' + ' dental_vitc_yn Varchar(50), dental_yeast_yn Varchar(50),neck_thyroid_yn Varchar(50),back_curve_yn Varchar(50),back_bone_yn Varchar(50),' + ' skin_blisters_yn Varchar(50), skin_rash_yn Varchar(50),pale_skin Varchar(50),urinary_tract_infection_yn Varchar(50),bowel_mvmt Varchar(50),' + ' menses_regular_yn Varchar(50), menses_abnormal_yn Varchar(50),feet_muscular_dystrophy_yn Varchar(50),feet_congenital_talepus_yn Varchar(50),feet_vitd_yn Varchar(50),' + ' agnormal_htwt_yn Varchar(50), tuberculosis_yn Varchar(50),sleep1 Varchar(50),sleep2 Varchar(50),heart_shortness_breath_yn Varchar(50),' + ' limited_life_skills_yn Varchar(50), stutter_yn Varchar(50),behaviour_yn Varchar(50),hand_functions Varchar(50),aloof_yn Varchar(50),' + ' self_harm_yn Varchar(50), alcohol_smoking_yn Varchar(50),online_games_yn Varchar(50),epilepsy_yn Varchar(50),age_approp_Act Varchar(50),' + 'withdrawn_behavior Varchar(50),nervousness_yn Varchar(50),adhd_yn Varchar(50),student_id Varchar(50))';
            this.bulkTablesList.push(mhtGeneralHealth);
            var mhtSchoolCount = 'create table IF NOT EXISTS mhtSchoolCountDB(id INTEGER PRIMARY KEY AUTOINCREMENT, pat_Screened Varchar(200), screened Varchar(200), tot_schools Varchar(200), UserName Varchar(200))';
            this.bulkTablesList.push(mhtSchoolCount);
            var awcDoctDeatails = 'create table IF NOT EXISTS awcDoctDeatailsDB(Sid INTEGER PRIMARY KEY AUTOINCREMENT, AWCCode Varchar(100), VisitPhoto Varchar(100))';
            this.bulkTablesList.push(awcDoctDeatails); //STEM by Malini

            var stemSchoolZOneTable = 'create table IF NOT EXISTS schlZonedetails(Id INTEGER PRIMARY KEY AUTOINCREMENT, BlkId  Varchar(50), BlkName  Varchar(50), SchlId  Varchar(50), SchlName  Varchar(50), UdiseCode Varchar(50),' + 'MobileNo Varchar(50))';
            this.bulkTablesList.push(stemSchoolZOneTable);
            var stemStudentsTable = 'create table IF NOT EXISTS AllStemStudentslists(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(50), class_section  Varchar(50), class_studying_id Varchar(50),' + 'dob Varchar(100), gender Varchar(50), group_code_id Varchar(100), StudId Varchar(100), name Varchar(100), phone_number Varchar(100), unique_id_no Varchar(100))';
            this.bulkTablesList.push(stemStudentsTable);
            var stemModeTable = 'create table IF NOT EXISTS stemModedetail(Id INTEGER PRIMARY KEY AUTOINCREMENT, UserId Varchar(50), Cycle Varchar(50), Status Varchar(50),EndDate Varchar(50),EventEndDate Varchar(50),EventStartDate Varchar(50),StartDate Varchar(50))';
            this.bulkTablesList.push(stemModeTable);
            var mhtStudentCount = 'create table IF NOT EXISTS mhtStudentCountDB(id INTEGER PRIMARY KEY AUTOINCREMENT, DocAddedStudents Varchar(200), ScreenedStudents Varchar(200), TotalStudents Varchar(200), UnScreenedStudents Varchar(200),SchlId Varchar(200))';
            this.bulkTablesList.push(mhtStudentCount);
            var myinspectionscreate = 'create table IF NOT EXISTS MyInspections(Id INTEGER PRIMARY KEY AUTOINCREMENT,VolId Varchar(100),VolName Varchar(200), VolPhoneNo Varchar(20), VolDistName Varchar(70), InspDate Varchar(20), VolBlockName Varchar(100),ResultData Varchar,IsSync INTEGER)';
            this.bulkTablesList.push(myinspectionscreate); // =========CWSN================
            // ========Cluster=============

            var cluster_list = 'create table IF NOT EXISTS cluster_list(Id INTEGER PRIMARY KEY AUTOINCREMENT,SpeEduId INTEGER, IndexId INTEGER,ZonalId INTEGER, ClusterNme Varchar(200), phase INTEGER)';
            this.bulkTablesList.push(cluster_list); // ========Cluster=============

            var cwsn_sch_list = 'create table IF NOT EXISTS cwsn_sch_list(Id INTEGER PRIMARY KEY AUTOINCREMENT,ZoneId INTEGER, SchlId INTEGER, SchlNme Varchar(200), totStud INTEGER, scrStud INTEGER, Screenstatus Varchar(30), cwsnstud INTEGER, checked_status INTEGER,udise_code Varchar(20))';
            this.bulkTablesList.push(cwsn_sch_list); // ========Class=============

            var cwsn_class_list = 'create table IF NOT EXISTS cwsn_class_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, school_key_id INTEGER, Class Varchar(10), Class_roman Varchar(10), Sec Varchar(10), TotalStud INTEGER, ScreenedStud INTEGER, ' + 'UnscreenedStud INTEGER, cwsnTotStud INTEGER, identifySpl INTEGER)';
            this.bulkTablesList.push(cwsn_class_list); // ========Section=============

            var cwsn_sec_list = 'create table IF NOT EXISTS cwsn_sec_list(Id INTEGER PRIMARY KEY AUTOINCREMENT,school_key_id INTEGER, Class Varchar(10),Sec Varchar(10), tot INTEGER, Scrn INTEGER, ' + 'Unscrn INTEGER)';
            this.bulkTablesList.push(cwsn_sec_list); // ========std list=============

            var cwsn_student_list = 'create table IF NOT EXISTS cwsn_student_list(Id INTEGER PRIMARY KEY AUTOINCREMENT,school_key_id INTEGER, Class INTEGER,Sec Varchar(10), StuId INTEGER, name Varchar(100), ' + 'cwsnStatus Varchar(100), ScrSts Varchar(10), refer_to Varchar(100), scrSts_Local INTEGER,nid Varchar(50), udid Varchar(50),IndexId INTEGER, referedfrom Varchar(50),' + 'ScreenedDate Varchar(100), da_name Varchar(100),goto Varchar(100),unique_id_no Varchar(50),gender varchar(10), isPost Varchar(50),disabi_types Varchar(200))';
            this.bulkTablesList.push(cwsn_student_list); // // ========std details=============
            // const cwsn_student_details = 'create table IF NOT EXISTS cwsn_student_details(Id INTEGER PRIMARY KEY AUTOINCREMENT, school_key_id INTEGER, StuId INTEGER, nid Varchar(50), udid Varchar(50),IndexId INTEGER, referedfrom Varchar(50),' +
            //   'ScreenedDate Varchar(100), Status Varchar(100), da_name Varchar(100),goto Varchar(100),unique_id_no Varchar(50), isPost Varchar(50))';
            // this.bulkTablesList.push(cwsn_student_details);
            // ========screen questions get/post=============

            var cwsn_screen_ques = 'create table IF NOT EXISTS cwsn_screen_ques(Id INTEGER PRIMARY KEY AUTOINCREMENT, school_key_id INTEGER, StuId INTEGER, Qid INTEGER, ResChar Varchar(200),isactive INTEGER)';
            this.bulkTablesList.push(cwsn_screen_ques);
            var cwsn_add_std_post = 'create table IF NOT EXISTS cwsn_add_std_post(Id INTEGER PRIMARY KEY AUTOINCREMENT,StuId INTEGER, DifferAbled INTEGER, indexId Varchar(200),isPost Varchar(30))';
            this.bulkTablesList.push(cwsn_add_std_post); // =========screen questions============

            var cwsn_screen_ques_list = 'create table IF NOT EXISTS cwsn_screen_ques_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, block_id INTEGER, questions Varchar)';
            this.bulkTablesList.push(cwsn_screen_ques_list);
            var awc_screen_ques_list = 'create table IF NOT EXISTS awc_screen_ques_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, block_id INTEGER, questions Varchar)';
            this.bulkTablesList.push(awc_screen_ques_list); // =======Reffered From Health====================

            var ReffCwsn_From_health = 'create table IF NOT EXISTS ReffCwsn_From_health(id INTEGER PRIMARY KEY AUTOINCREMENT, StuId INTEGER, head_size_yn Varchar(2),back_curve_yn Varchar(2),back_bone_yn Varchar(2),urinary_tract_infection_yn Varchar(2),bowel_mvmt Varchar(2),feet_muscular_dystrophy_yn Varchar(2),' + 'feet_congenital_talepus_yn Varchar(2),FeetVitdYn Varchar(2),agnormal_htwt_yn Varchar(2),heart_shortness_breath_yn Varchar(2),limited_life_skills_yn Varchar(2),stutter_yn Varchar(2),behaviour_yn Varchar(2),hand_functions Varchar(2),aloof_yn Varchar(2),self_harm_yn Varchar(2),epilepsy_yn Varchar(2),age_approp_Act Varchar(2),' + 'withdrawn_behavior Varchar(2),nervousness_yn Varchar(2),adhd_yn Varchar(2),Short_and_Long_Site_eye_prob Varchar(2),Shape_of_eyeBalls Varchar(2),Night_eye_disease Varchar(2))';
            this.bulkTablesList.push(ReffCwsn_From_health); // =======Reffered From Health====================

            var cwsn_ca_schl_list = 'create table IF NOT EXISTS cwsn_ca_schl_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, UserId INTEGER, ZoneId INTEGER, BlockId INTEGER, SchlId INTEGER, SchlNme Varchar(200), totStud INTEGER, scrStud INTEGER, Screenstatus Varchar(30), cwsnstud INTEGER, cwsnStatus INTEGER)';
            this.bulkTablesList.push(cwsn_ca_schl_list); // =======Reffered From Health====================

            var cwsn_ca_stud_list = 'create table IF NOT EXISTS cwsn_ca_stud_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, UserId INTEGER, ZonalId INTEGER, BlockId INTEGER, SchlId INTEGER, SchlNme Varchar(200), studId INTEGER, Name Varchar(50), EMIS_No INTEGER, Class INTEGER, Section Varchar(5), disType Varchar(1000), screen_disability Varchar(100), totStud INTEGER, scrStud INTEGER, Screenstatus Varchar(30), cwsnstud INTEGER, cwsnStatus INTEGER,udise_code Varchar(20))';
            this.bulkTablesList.push(cwsn_ca_stud_list); // =======Domain Status====================

            var domain_list = 'create table IF NOT EXISTS domain_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, user Varchar(30), usertype INTEGER, domain_id INTEGER, domain_name Varchar(30),';
            this.bulkTablesList.push(domain_list);
            var stu_domain_status = 'create table IF NOT EXISTS stu_domain_status(Id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, schl_id INTEGER,' + 'stud_id INTEGER, domain_id INTEGER, domain_name Varchar(50), d_status INTEGER, inter_status INTEGER )';
            this.bulkTablesList.push(stu_domain_status); // =======Fuc Assessment====================

            var fun_assessment_qstns = 'create table IF NOT EXISTS fun_assessment_qstns(Id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, user_name Varchar(50),' + 'StuId INTEGER, name Varchar(100), domain_id INTEGER, domain_name Varchar(50), subdomain_id INTEGER, sub_domain Varchar(50),' + 'q_id INTEGER, q_format INTEGER, q_text_eng Varchar(1000), q_text_tam Varchar(1000), choice_id INTEGER, option_type Varchar(10),' + 'choice_text_eng Varchar(100), choice_text_tam Varchar(100), q_status Varchar(50), disability_type Varchar(100), question_intervension Varchar(100), choice_intervension Varchar(100))';
            this.bulkTablesList.push(fun_assessment_qstns); // =======Fuc Assessment for Students====================

            var stud_fun_assessment = 'create table IF NOT EXISTS stud_fun_assessment(Id INTEGER PRIMARY KEY AUTOINCREMENT, index_id INTEGER, user_id INTEGER,' + 'schl_id INTEGER, stud_id INTEGER, domain_id INTEGER, domain_name Varchar(50), subdomain_id INTEGER, q_id INTEGER, q_val Varchar(50), date, q_status Varchar(50))';
            this.bulkTablesList.push(stud_fun_assessment); // =======Fuc Assessment====================

            var intervention_qstns = 'create table IF NOT EXISTS intervention_qstns(Id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, user_name Varchar(50),' + 'StuId INTEGER, name Varchar(100), domain_id INTEGER, domain_name Varchar(50), subdomain_id INTEGER, sub_domain Varchar(50),' + 'intervension_idx_id INTEGER, intervention_type_id INTEGER, intervention_type Varchar(200), intervension Varchar(1000), intervension_tamil Varchar(1000),' + 'skills Varchar(1000), sub_skills Varchar(1000), goal Varchar(1000), goal_tamil Varchar(1000), inter_status Varchar(50), age_category Varchar(500))';
            this.bulkTablesList.push(intervention_qstns); // =======Fuc Assessment for Students====================

            var stud_int_assessment = 'create table IF NOT EXISTS stud_int_assessment(Id INTEGER PRIMARY KEY AUTOINCREMENT, index_id INTEGER, user_id INTEGER,' + 'schl_id INTEGER, stud_id INTEGER, domain_id INTEGER, domain_name VARCHAR(50), subdomain_id INTEGER, intervension_idx_id INTEGER, intervention_type_id VARCHAR(10), rate_val VARCHAR(10), goal_val VARCHAR(10), support INTEGER, date, inter_status Varchar(50))';
            this.bulkTablesList.push(stud_int_assessment); // =======Fuc Assessment for Students====================

            var baseapp_diff_able = 'create table IF NOT EXISTS baseapp_diff_able(Id INTEGER PRIMARY KEY AUTOINCREMENT, index_id INTEGER, da_code Varchar(50),' + 'da_name Varchar(50), mhrd_id Varchar(50), cwsn_ph_one Varchar(50))';
            this.bulkTablesList.push(baseapp_diff_able); // // =======Reffered From Health====================
            // const cwsn_ca_stud_list = 'create table IF NOT EXISTS cwsn_ca_stud_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, UserId INTEGER, ZoneId INTEGER, BlockId INTEGER, SchlId INTEGER, SchlNme Varchar(200), Name Varchar(50), EMIS_No INTEGER, Class INTEGER, Section Varchar(5), disType Varchar(1000), totStud INTEGER, scrStud INTEGER, Screenstatus Varchar(30), cwsnstud INTEGER, cwsnStatus INTEGER)';
            // this.bulkTablesList.push(cwsn_ca_stud_list);
            // ========screen questions get/post=============

            var health_screen_ques = 'create table IF NOT EXISTS health_screen_ques(Id INTEGER PRIMARY KEY AUTOINCREMENT, school_key_id INTEGER, StuId INTEGER, Qid INTEGER, ResChar Varchar(200),isactive INTEGER)';
            this.bulkTablesList.push(health_screen_ques); // =========screen questions============

            var health_screen_ques_list = 'create table IF NOT EXISTS health_screen_ques_list(Id INTEGER PRIMARY KEY AUTOINCREMENT, block_id INTEGER, questions Varchar)';
            this.bulkTablesList.push(health_screen_ques_list); // ========std list=============

            var health_student_list = 'create table IF NOT EXISTS health_student_list(Id INTEGER PRIMARY KEY AUTOINCREMENT,school_key_id INTEGER, Class INTEGER,Sec Varchar(10), StuId INTEGER, name Varchar(100), ' + 'healthStatus Varchar(100), ScrSts Varchar(10), refer_to Varchar(100), scrSts_Local INTEGER)';
            this.bulkTablesList.push(health_student_list); //For Leave Application

            var TchrPersonalDetailsTable = 'create table IF NOT EXISTS TchrPersonalDetailsDb(Id INTEGER PRIMARY KEY AUTOINCREMENT, aadhar_no INTEGER, disability_type INTEGER,' + 'e_blood_grp INTEGER, e_prnts_nme Varchar(200), gender INTEGER, Grup Varchar(200), school_key_id INTEGER, social_cat Varchar(200), social_category Varchar(200), staff_dob Varchar(200), teacher_id INTEGER,' + 'teacher_mother_name Varchar(200), teacher_name Varchar(200), teacher_name_tamil Varchar(200), teacher_spouse_name Varchar(200))';
            this.bulkTablesList.push(TchrPersonalDetailsTable);
            var TchrAcadamicTable = 'create table IF NOT EXISTS TchrAcadamicDetailsDb(Id INTEGER PRIMARY KEY AUTOINCREMENT, academic Varchar(200), academicQualify Varchar(200), english_upto Varchar(200),' + 'lang_study_upto Varchar(200), math_upto Varchar(200), pasdDeptExam Varchar(200), pgMonthPass Varchar(200), pgYearPass Varchar(200),  presentBlock Varchar(200), prevBlock Varchar(200), prevDistrict Varchar(200),' + 'profQualify Varchar(200), professional Varchar(200), science_upto Varchar(200), soc_study_upto Varchar(200), u_id Varchar(200), ugMonthPass Varchar(200), ugYearPass Varchar(200))';
            this.bulkTablesList.push(TchrAcadamicTable);
            var TchrJoiningDetailsTable = 'create table IF NOT EXISTS TchrJoiningDetailsDb(Id INTEGER PRIMARY KEY AUTOINCREMENT, designation Varchar(100), appointedSub Varchar(100), doj Varchar(100), staff_pjoin Varchar(100),' + 'doj_presentSchool Varchar(100), doj_service Varchar(100), doj_presentPostServc Varchar(100), doj_presentStation Varchar(100), cps_gps_details Varchar(100), mode_frstApntmnt Varchar(100), appointment_nature Varchar INTEGER)';
            this.bulkTablesList.push(TchrJoiningDetailsTable);
            var TchrCommunicationDetTable = 'create table IF NOT EXISTS TchrContactDetailsDb(Id INTEGER PRIMARY KEY AUTOINCREMENT, cityName Varchar(100), district Varchar(100),' + 'doorNo Varchar(100), e_prsnt_distrct Varchar(100), email_id  Varchar(100), mbl_nmbr INTEGER, pincode INTEGER, streetName Varchar(100))';
            this.bulkTablesList.push(TchrCommunicationDetTable);
            var TchrTrainingTable = 'create table IF NOT EXISTS TchrTrainingDetailsDb(Id INTEGER PRIMARY KEY AUTOINCREMENT, trng_received INTEGER, ' + 'trng_needed INTEGER, trained_comp INTEGER, trained_cwsn INTEGER, class_taught INTEGER, nonTeachingDays INTEGER)';
            this.bulkTablesList.push(TchrTrainingTable);
            var TchrMainSubTable = 'create table IF NOT EXISTS TchrMainSubDetailDb(Id INTEGER PRIMARY KEY AUTOINCREMENT, class_taught INTEGER, subject1_name  Varchar(100), subject2_name Varchar(100),' + 'subject3_name Varchar(100))';
            this.bulkTablesList.push(TchrMainSubTable);
            var TchrBankDetTable = 'create table IF NOT EXISTS TchrBankDetDb(Id INTEGER PRIMARY KEY AUTOINCREMENT, ifscCode Varchar(100), bankBranch Varchar(100),' + 'bankName Varchar(100), bankAcc Varchar(100))';
            this.bulkTablesList.push(TchrBankDetTable); // all oosc block Details 

            var ooscBlocksTable = 'create table IF NOT EXISTS ooscBlocks(Id INTEGER PRIMARY KEY AUTOINCREMENT, district_id INTEGER, block_id INTEGER, block_name Varchar(100))';
            this.bulkTablesList.push(ooscBlocksTable); // oosc Schools Details 

            var ooscSchoolsTable = 'create table IF NOT EXISTS ooscSchools(Id INTEGER PRIMARY KEY AUTOINCREMENT, block_id INTEGER, school_id INTEGER, school_name Varchar(200), school_type_id INTEGER, school_type Varchar(100))';
            this.bulkTablesList.push(ooscSchoolsTable); //all institute Details 

            var instituteListTable = 'create table IF NOT EXISTS instituteList(Id INTEGER PRIMARY KEY AUTOINCREMENT, insti_id INTEGER, institute_id INTEGER, institute_name_address Varchar(300))';
            this.bulkTablesList.push(instituteListTable); // all OOSC Student Details Details 

            var ooscStudentsDetailTable = 'create table IF NOT EXISTS ooscStudentsDetail(Id INTEGER PRIMARY KEY AUTOINCREMENT, district_id INTEGER, district_name Varchar(100),' + 'block_id INTEGER, block_name Varchar(100), school_id INTEGER, school_name Varchar(300), udise_code INTEGER, school_type_id INTEGER, school_type Varchar(300),' + 'stud_id INTEGER, student_name Varchar(200), father_name Varchar(200), mother_name Varchar(200), new_emis_id INTEGER, old_emis_no INTEGER, phone_number INTEGER, class_studying_id INTEGER,' + 'gender INTEGER, Address Varchar(200), cwsn_student INTEGER, differently_abled INTEGER, diff_abled_reason Varchar(200), lastUpdate Varchar(10), ac_year Varchar(10), Reason INTEGER, reason_type Varchar(100), Status INTEGER,acad_yr Varchar(10), subReason INTEGER)';
            this.bulkTablesList.push(ooscStudentsDetailTable); // all country Details 

            var allCountryDetailsTable = 'create table IF NOT EXISTS allCountryDetails(Id INTEGER PRIMARY KEY AUTOINCREMENT, country_id INTEGER, country_code INTEGER, country_name Varchar(100))';
            this.bulkTablesList.push(allCountryDetailsTable); // all state Details 

            var allStateDetailsTable = 'create table IF NOT EXISTS allStateDetails(Id INTEGER PRIMARY KEY AUTOINCREMENT, state_id INTEGER, state_code INTEGER, state_name Varchar(100))';
            this.bulkTablesList.push(allStateDetailsTable); // all district Details 

            var allDistrictDetailsTable = 'create table IF NOT EXISTS allDistrictDetails(Id INTEGER PRIMARY KEY AUTOINCREMENT, disid INTEGER, district_name Varchar(100), district_name_tamil archar(100))';
            this.bulkTablesList.push(allDistrictDetailsTable); // all block Details 

            var allBlockDetailsTable = 'create table IF NOT EXISTS allBlockDetails(Id INTEGER PRIMARY KEY AUTOINCREMENT, district_id INTEGER, blkid INTEGER, block_name Varchar(100))';
            this.bulkTablesList.push(allBlockDetailsTable); //Vasipu Iyakam library

            var vasipuLibraryTable = 'create table IF NOT EXISTS vasipuIyakKamLibrary(Id INTEGER PRIMARY KEY AUTOINCREMENT, MobileNo Varchar(100), SchlId Varchar(100), SchlName Varchar(100), SchlUdise Varchar(100), UserId Varchar(100), UserName Varchar(100), district_id Varchar(100), district_name Varchar(100))';
            this.bulkTablesList.push(vasipuLibraryTable); //Vasipu Iyakam Student

            var vasipuSessionStudentTable = 'create table IF NOT EXISTS VIStudenData(Id INTEGER PRIMARY KEY AUTOINCREMENT, class_section Varchar(100), class_studying_id Varchar(100), dob Varchar(100), gender Varchar(100), name Varchar(100), phone_number Varchar(100), unique_id_no Varchar(100), user_id Varchar(100), RP_Id Varchar(100), schoolId Varchar(100), batch Varchar(100), sync Varchar(100),prst Varchar(100), abst Varchar(100),ActiveDate Varchar(100),SyncActive Varchar(100))';
            this.bulkTablesList.push(vasipuSessionStudentTable); //Vasipu Iyakam Class list

            var vasipuclassTable = 'create table IF NOT EXISTS VIClassData(Id INTEGER PRIMARY KEY AUTOINCREMENT, class_id Varchar(1000000), section Varchar(1000000), school_id Varchar(100),activity_date Varchar(100),Batch Varchar(100),UserId Varchar(100),ActiveDate Varchar(100),SyncActive Varchar(100))';
            this.bulkTablesList.push(vasipuclassTable); //Vasipu Iyakam Total Batch

            var vasipubatchTable = 'create table IF NOT EXISTS VIBatchData(Id INTEGER PRIMARY KEY AUTOINCREMENT, UserId Varchar(100),UserName Varchar(100),SchlId Varchar(100),SchlName Varchar(100),BatchCount Varchar(100),InsertBatchCount Varchar(100))';
            this.bulkTablesList.push(vasipubatchTable); //Vasipu Iyakam Status for Batch

            var vasipuTotalBatchTable = 'create table IF NOT EXISTS VIStatusbatchDatas(Id INTEGER PRIMARY KEY AUTOINCREMENT,batchid Varchar(100),batch Varchar(100),BatchCount Varchar(100),sync Varchar(100),schoolId Varchar(100),userid Varchar(100),ActiveDate Varchar(100),SyncActive Varchar(100))';
            this.bulkTablesList.push(vasipuTotalBatchTable); //Vasipu Iyakam total section count

            var vasipuTotalSecTable = 'create table IF NOT EXISTS VIStatusClsSecData(Id INTEGER PRIMARY KEY AUTOINCREMENT,TotalClsSec Varchar(100),UserId Varchar(100),InsertClsSec Varchar(100),CycleId Varchar(100))';
            this.bulkTablesList.push(vasipuTotalSecTable); //Vasipu Iyakam profile

            var vasipuIyakamTable = 'create table IF NOT EXISTS vasipuIyakam(Id INTEGER PRIMARY KEY AUTOINCREMENT, Status Varchar(100), Name Varchar(100), Dob Varchar(100), Phone INTEGER, AadharNo INTEGER,  AccNo INTEGER, IfscCode Varchar(100), Branch Varchar(100), BankName Varchar(100), UserId Varchar(100))';
            this.bulkTablesList.push(vasipuIyakamTable); //Vasipu Iyakam session

            var vasipuSessionTable = 'create table IF NOT EXISTS VISchool(Id INTEGER PRIMARY KEY AUTOINCREMENT, class_section Varchar(100), class_studying_id Varchar(100), dob Varchar(100), gender Varchar(100), name Varchar(100), phone_number Varchar(100), unique_id_no Varchar(100), user_id Varchar(100), RP_Id Varchar(100), schoolId Varchar(100))';
            this.bulkTablesList.push(vasipuSessionTable); //Vasipu Iyakam session1

            var vasipuSession1Table = 'create table IF NOT EXISTS VasippuSession1(Id INTEGER PRIMARY KEY AUTOINCREMENT, ClsSec Varchar(100), school_id Varchar(100), TotCount Varchar(100))';
            this.bulkTablesList.push(vasipuSession1Table); //Vasipu Iyakam viBankDetails

            var viBankDetailsTable = 'create table IF NOT EXISTS viBankDetails(Id INTEGER PRIMARY KEY AUTOINCREMENT, bank Varchar(100), bank_dist_id Varchar(100), bank_id Varchar(100), bank_name Varchar(100), branch Varchar(100), branch_add Varchar(100), city Varchar(100), contact_no Varchar(100), district_name Varchar(100), ifsc_code Varchar(100), micr_code Varchar(100))';
            this.bulkTablesList.push(viBankDetailsTable);
            var VasipuIyakamStudentTable = 'create table IF NOT EXISTS VasipuIyakamStudentDetails(Id INTEGER PRIMARY KEY AUTOINCREMENT, schoolId Varchar(100), unique_id_no Varchar(100), user_id Varchar(100),' + 'name Varchar(100),gender Varchar(100),class_studying_id Varchar(100),class_section Varchar(100))';
            this.bulkTablesList.push(VasipuIyakamStudentTable);
            var VasipuIyakamStudentStatusTables = 'create table IF NOT EXISTS VasipuIStatusDetail(Id INTEGER PRIMARY KEY AUTOINCREMENT, schlid Varchar(100), batchId Varchar(100), start Varchar(100),' + 'startphtStatus Varchar(100),startphoto Varchar(100),stud_1 Varchar(100),stud_2 Varchar(100),stud_3 Varchar(100),end Varchar(100),endphoto Varchar(100),' + 'endphtStatus Varchar(100),status Varchar(100),startphotoblob Varchar(100),endphotoblob Varchar(100),lat1 Varchar(100),long1 Varchar(100),lat2 Varchar(100),long2 Varchar(100),ClsSec Varchar(100),TotStudnt Varchar(100),PrsntStudnt Varchar(100),userId Varchar(100))';
            this.bulkTablesList.push(VasipuIyakamStudentStatusTables); // const VasipuIyakamStudentStatusTable = 'create table IF NOT EXISTS VasipuIStatusDetail(Id INTEGER PRIMARY KEY AUTOINCREMENT,schlid Varchar(100),batchId Varchar(100),start Varchar(100),startphtStatus Varchar(100),startphoto Varchar(100),stud_1 Varchar(100),' +
            // 'stud_2 Varchar(100),stud_3 Varchar(100),end Varchar(100),endphoto Varchar(100),endphtStatus Varchar(100),status Varchar(100), startphotoblob Varchar(1000),endphotoblob Varchar(1000),lat1 Varchar(100),lat2 Varchar(100),long1 Varchar(100),long2 Varchar(100))';
            // this.bulkTablesList.push(VasipuIyakamStudentStatusTable);

            var vasipuBatchTable = 'create table IF NOT EXISTS VIStudenbatchData(Id INTEGER PRIMARY KEY AUTOINCREMENT, batchid Varchar(100), batch Varchar(100), sync Varchar(100), schoolId Varchar(100), userid Varchar(100),ActiveDate Varchar(100),SyncActive Varchar(100))';
            this.bulkTablesList.push(vasipuBatchTable);
            var vasipuBatchInstructionTable = 'create table IF NOT EXISTS VIInstructionData(Id INTEGER PRIMARY KEY AUTOINCREMENT, sync Varchar(100), schoolId Varchar(100), userid Varchar(100))';
            this.bulkTablesList.push(vasipuBatchInstructionTable);
            var vasipuBatchStudentTableData = 'create table IF NOT EXISTS vasipuBatchStudentTable(Id INTEGER PRIMARY KEY AUTOINCREMENT, present Varchar(100), absent Varchar(100), total Varchar(100),class Varchar(100),section Varchar(100),batch Varchar(100),ClsId Varchar(100),SchlId Varchar(100),Sec Varchar(100),TotStudnt Varchar(100),AbsentStud Varchar(100),userId Varchar(100),ActiveDate Varchar(100),SyncActive Varchar(100))';
            this.bulkTablesList.push(vasipuBatchStudentTableData);
            var TobeDemolish = 'create table IF NOT EXISTS TobeDemolish(Id INTEGER PRIMARY KEY AUTOINCREMENT, schoolId Varchar(100), emisId Varchar(100), records Varchar(1000), uploadFile Varchar(5000), Status Varchar(100))';
            this.bulkTablesList.push(vasipuBatchTable);
            var OlirumVaguparai = 'create table IF NOT EXISTS OlirumVaguparai(Id INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), SclNam Varchar(100), Udise Varchar(100), EmisUsername Varchar(100), PhotoUpload1 Varchar(5000), PhotoUploadName1 Varchar(100), PhotoStatus1 Varchar(100), PhotoUpload2 Varchar(5000), PhotoUploadName2 Varchar(100), PhotoStatus2 Varchar(100), PhotoUpload3 Varchar(5000), PhotoUploadName3 Varchar(100), PhotoStatus3 Varchar(100), Remarks Varchar(100), Latitude Varchar(100), Longitude Varchar(100), Status Varchar(100))';
            this.bulkTablesList.push(OlirumVaguparai); //uniformMasterTable

            var uniformMasterTable = 'create table IF NOT EXISTS uniformMasterData(Id INTEGER PRIMARY KEY AUTOINCREMENT,shoulder_size Varchar(100),shirt_height Varchar(100),hand_length Varchar(100),chest_circum Varchar(100),hand_circum Varchar(100),tot_shirt_cloth_meter Varchar(100),pant_height Varchar(100),hip_circum Varchar(100),thigh_circum Varchar(100),leg_circum Varchar(100),tot_pant_cloth_meter Varchar(100),overcoat_height Varchar(100),overcoat_chest_circum Varchar(100),tot_overcoat_cloth_meter Varchar(100),region Varchar(100),class Varchar(100),gender Varchar(100))';
            this.bulkTablesList.push(uniformMasterTable); //uniformschoollist

            var uniformschoollistTable = 'create table IF NOT EXISTS uniformschoollists(Id INTEGER PRIMARY KEY AUTOINCREMENT,school_id Varchar(100),school_name Varchar(100),udise_code Varchar(100),region Varchar(100),total_students Varchar(100),Meals_eating Varchar(100),measurement_completed Varchar(100))';
            this.bulkTablesList.push(uniformschoollistTable); //uniformStudentlistData
            //uniformOnSaveTable
            //uniformStudentlistData

            var uniformstudentTable = 'create table IF NOT EXISTS uniformStudentlistData(Id INTEGER PRIMARY KEY AUTOINCREMENT,school_id Varchar(100),school_name Varchar(100),user_id Varchar(100),name Varchar(100),class_studying_id Varchar(100),class_section Varchar(100),gender Varchar(100),phone_number Varchar(100),status Varchar(100),IndexId Varchar(100), isCompleted Varchar(100),boys_shoulder_len Varchar(100), ' + ' boys_shirt_height Varchar(100),boys_hand_length Varchar(100),boys_chest_circum Varchar(100),boys_hand_circum Varchar(100), ' + ' boys_hip_circum Varchar(100),boys_Pant_height Varchar(100),boys_thigh_circum Varchar(100),boys_leg_circum Varchar(100), ' + ' girls_top_sholder Varchar(100),girls_top_height Varchar(100),girls_top_hand_len Varchar(100),girls_top_chest_circum Varchar(100),' + ' girls_top_hand_circum Varchar(100),girls_bottom_height Varchar(100),girls_bottom_hip_circum Varchar(100),' + ' girls_bottom_leg_circum Varchar(100),girls_overcoat_sholder Varchar(100),girls_overcoat_height Varchar(100),girls_overcoat_chest_cir Varchar(100),uniform_status Varchar(100))';
            this.bulkTablesList.push(uniformstudentTable); //uniformOnSaveTable
            //  const uniformsaveTable = 'create table IF NOT EXISTS uniformmeasuredData(Id INTEGER PRIMARY KEY AUTOINCREMENT,school_id Varchar(100),class Varchar(100),class_section Varchar(100),student_id Varchar(100),user_id Varchar(100),status Varchar(100),shoulder_size Varchar(100), blouse_height Varchar(100),shirt_height Varchar(100),hand_length Varchar(100),chest_circum Varchar(100),hand_circum Varchar(100),req_shirt_cloths Varchar(100),pant_height Varchar(100),hip_circum Varchar(100),thigh_circum Varchar(100),leg_circum Varchar(100),req_pant_cloths Varchar(100),overcoat_height Varchar(100),overcoat_chest_circum Varchar(100),req_overcoat_cloth Varchar(100),sync Varchar(100))';
            //  this.bulkTablesList.push(uniformsaveTable);

            var uniformsaveTable = 'create table IF NOT EXISTS uniformmeasuredData(Id INTEGER PRIMARY KEY AUTOINCREMENT,school_id Varchar(100),class Varchar(100),class_section Varchar(100),' + ' student_id Varchar(100),user_id Varchar(100),status Varchar(100),boys_shoulder_len Varchar(100), ' + ' boys_shirt_height Varchar(100),boys_hand_length Varchar(100),boys_chest_circum Varchar(100),boys_hand_circum Varchar(100), ' + ' boys_hip_circum Varchar(100),boys_Pant_height Varchar(100),boys_thigh_circum Varchar(100),boys_leg_circum Varchar(100), ' + ' girls_top_sholder Varchar(100),girls_top_height Varchar(100),girls_top_hand_len Varchar(100),girls_top_chest_circum Varchar(100),' + ' girls_top_hand_circum Varchar(100),girls_bottom_height Varchar(100),girls_bottom_hip_circum Varchar(100),' + ' girls_bottom_leg_circum Varchar(100),girls_overcoat_sholder Varchar(100),girls_overcoat_height Varchar(100),girls_overcoat_chest_cir Varchar(100),sync Varchar(100))';
            this.bulkTablesList.push(uniformsaveTable);
            var gisLocation = 'create table IF NOT EXISTS gisLocation(Id INTEGER PRIMARY KEY AUTOINCREMENT,emis_username Varchar(100),schoolid Varchar(100), udiseCode Varchar(100),schoolName Varchar(100),district Varchar(100),block Varchar(100),latitute Varchar(100),longitute Varchar(100),photo Varchar(5000), photoName Varchar(100), status Varchar(100), sync Varchar(100))';
            this.bulkTablesList.push(gisLocation);
            var buildingPrimaryWater = 'create table IF NOT EXISTS sidsPrimaryBuildingQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT,' + ' SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),BldgName Varchar(50),' + ' BldgAge Varchar(50), BldgFundSourceCons Varchar(50), BldgType Varchar(100), BldgLength Varchar(300), BldgBre Varchar(50),' + ' BldgCondition Varchar(50), BldgRepair Varchar(50), AreaWeatheringReq Varchar(50), AreaPressedTiles Varchar(50),' + ' PipeNeedHwDw Varchar(50), PipeNeedToilet Varchar(50), WireLenElectrcty Varchar(50),' + ' AreaWaterLeakage Varchar(50), AreaExtWw Varchar(50), AreaIntWw Varchar(50), AreaReplasting Varchar(50),' + ' AreaReflooring Varchar(50), AreaFlrPatchwrk Varchar(50), AuditoriumYn Varchar(50),' + ' AuditoriumStageReqt Varchar(50), AuditoriumStageArea Varchar(50), AuditoriumStageHeight Varchar(50),' + ' AuditoriumStageAreaLevel Varchar(50), AuditoriumLights Varchar(50), AuditoriumFans Varchar(50),' + ' AuditoriumPrjtYn Varchar(50), AuditoriumPrjtFunc Varchar(50), RampAvailYn Varchar(50), RampRepairYn Varchar(50),' + ' FireExtYn Varchar(50), FirstAidKit Varchar(50), CCTVCameraYn Varchar(50),' + ' BuildTabsYn Varchar(50), BuildTabsNumber Varchar(50), BuildReapairComArea Varchar(50), BldgFrontPhoto Varchar(5000), BldgFrontPhotoName Varchar(50), BldgLatitude Varchar(50), BldgLongitude Varchar(50))';
            this.bulkTablesList.push(buildingPrimaryWater);
            var floorPrimaryWater = 'create table IF NOT EXISTS sidsPrimaryFloorQuestion(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100), BuildingId Varchar(50), BuildingIndex Varchar(50),FloorId Varchar(50),FloorIndx Varchar(50),' + 'FloorNum Varchar(50), FloorCondi Varchar(50), FloorSafety Varchar(50), ReqParapetWall Varchar(50), ParapetWallLength Varchar(50), ParapetWallHeight Varchar(50), ParapetWallWhiteWash Varchar(50), ParapetWallReplasting Varchar(50),' + 'ParapetWallBrickWork Varchar(50), BldOhtYn Varchar(50), FunBldOhtYn Varchar(50),RepairSteps Varchar(50), FoolrTy Varchar(100), FoolrAreReq Varchar(300), OutPipY Varchar(50), PipLenNeed Varchar(50), WeatheringReq Varchar(50), RoofCleaYn Varchar(50), CorridorYn Varchar(50),' + 'CorriCondi Varchar(50), CorriLen Varchar(50), CorridorWidth Varchar(50), CorriLighFunc Varchar(50), CorridorRepair Varchar(50), AreaWw Varchar(50), AreaReplastering Varchar(50), AreaReflooring Varchar(50), AreaCeilingPlaster Varchar(50),' + 'AreaFlrPatchwork Varchar(50), DoorReplace Varchar(50), JaalisReplace Varchar(50), DoorRepair Varchar(50), JaalisRepair Varchar(50), DoorRepaint Varchar(50), JaalisRepaint Varchar(50))';
            this.bulkTablesList.push(floorPrimaryWater);
            var newRoomPrimary = 'create table IF NOT EXISTS newPrimaryRoomscommons(Id INTEGER PRIMARY KEY AUTOINCREMENT,' + ' IndxId Varchar(50) , ToiletIndxId Varchar(50) , SchlId Varchar(50), VistId Varchar(50) , BldgIdxId Varchar(50), BldgId Varchar(100),' + ' FloorIdxId Varchar(50), FloorId Varchar(50), RoomId Varchar(50), RoomUse Varchar(50), RoomName Varchar(50), ' + ' RoomCondition Varchar(50), RepairType Varchar(50), MajorRepair Varchar(50), MinorRepair Varchar(50),' + ' AreaPlastering Varchar(50), AreaExtWw Varchar(50), AreaIntWw Varchar(50), AreaReplastering Varchar(50),' + ' AreaReflooring Varchar(50), AreaPatchwork Varchar(50), DoorReplace Varchar(50), WindowReplace Varchar(50),' + ' DoorRepair Varchar(50), WindowRepair Varchar(50), DoorRepaint Varchar(50), WindowRepaint Varchar(50),' + ' LatrinReplace Varchar(50), UrinalReplace Varchar(50), PipeNeed Varchar(50), DrainageNeed Varchar(50),' + ' RoomLength Varchar(50), RoomBreadth Varchar(50), RoomHeight Varchar(50), FloorType Varchar(50),' + ' BenchFunc Varchar(50), DeskFunc Varchar(50), TubelightFunc Varchar(50), FansFunc Varchar(50),  Cupboard Varchar(50),' + ' RoomCeilingYn Varchar(50),RoomCeilingPhoto Varchar(50),RoomCeilingPhotoName Varchar(50),RoomCeilingLatitude Varchar(50),RoomCeilingLongitude Varchar(50),' + // Priya 
            ' TeacherTableYn Varchar(50), TelevisionYn Varchar(50), TelevisionFuncYn Varchar(50), SmartboardPrjtYn Varchar(50),' + ' SmartboardPrjtFuncYn Varchar(50), ClassRoomProjYn Varchar(50), ClassRoomProjFuncYn Varchar(50),' + ' LabType Varchar(50), LabComputerYn Varchar(50), LabComputerFunc Varchar(50),' + ' LabComputerRepair Varchar(50),  LabWatersupplyYn Varchar(50), LabDrainage Varchar(50), LabPhotoOne Varchar(50),  LabPhotoOneName Varchar(50), LabLatitude Varchar(50), LabLongitude Varchar(50),' + ' LibraryBooks Varchar(50), HmRoomTblYn Varchar(50), StaffrmUsedBy Varchar(50),' + ' KitchenWtrSrc Varchar(50), KitchenLPGConYn Varchar(50), KitchenWtrSupply Varchar(50), ' + ' KitchenStorageYn Varchar(50), KitchenCleanYn Varchar(50),' + ' DiningFunctionalYn Varchar(50), DiningSeatingCapacity Varchar(50), DiningSeatingWtrSupply Varchar(50),' + ' NoonmealStorageClean Varchar(50), StoreRoomPurpose Varchar(50), StrroomStorageClean Varchar(50), ReasonEmpty Varchar(50),' + ' ToiletType Varchar(50), ToiletWaterCon Varchar(50), ToiletWasteDis Varchar(50), IwcToilet Varchar(50), Iwccubicles Varchar(50),' + ' IwccubiclesFunc Varchar(50), EwcToilet Varchar(50), Ewccubicles Varchar(50), Ewccubiclesfunc Varchar(50), UrinalToilet Varchar(50), Urinals Varchar(50),' + ' Urinalsfunc Varchar(50), ToiletTapsFunc Varchar(50),ToiletNeedTabs Varchar(50), ToiletBucket Varchar(50),' + ' Toiletmugs Varchar(50), SizeSuitable Varchar(50), Roof Varchar(50), SanitWasteDisp Varchar(50), HwFacility Varchar(50),' + ' AuditoriumYn Varchar(50), AuditoriumStageYn Varchar(50), AuditoriumStageReqt Varchar(50),' + ' AuditoriumStageArea Varchar(50), AuditoriumStageHeight Varchar(50), AuditoriumStageAreaLevel Varchar(50),' + ' AuditoriumLights Varchar(50), AuditoriumFans Varchar(50), AuditoriumPrjtYn Varchar(50), AuditoriumPrjtFunc Varchar(50),' + ' SmartRoomFacilityYn Varchar(50), SmartRoomDeviceFunYn Varchar(50), SmartRoomComputersYn Varchar(50), SmartRoomFunComp Varchar(50), SmartRoomFunCompRepair Varchar(50),' + ' SmartRoomPhotoOne Varchar(50), SmartRoomPhotoOneName Varchar(50), SmartRoomLatitude Varchar(50), SmartRoomLongitude Varchar(50))';
            this.bulkTablesList.push(newRoomPrimary);
            var bulsidsPrimarySave = 'create table IF NOT EXISTS sidsPrimaryBuildSavesDatas(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), BuildingId Varchar(50),Status Varchar(50),Condition Varchar(50),BuildName Varchar(50),BuildCondi Varchar(50), ClosingQuestions Varchar(50), FloorCondition Varchar(50), BuildIndex Varchar(50))';
            this.bulkTablesList.push(bulsidsPrimarySave);
            var floorsidsPrimarySave = 'create table IF NOT EXISTS sidsPrimaryFloorSaveDatas(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), FloorIndx Varchar(50), FloorId Varchar(50),Status Varchar(50),FloorName Varchar(50),FloorCondi Varchar(50), FloorClose  Varchar(50), RoomCondition Varchar(50), BuildIndex Varchar(50), FloorIndex Varchar(50))';
            this.bulkTablesList.push(floorsidsPrimarySave);
            var roomsidsPrimarySave = 'create table IF NOT EXISTS sidsPrimaryRoomSaves(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), FloorIndx Varchar(50),RoomId Varchar(50),Status Varchar(50),RoomName Varchar(50), BuildIndex Varchar(50), FloorIndex Varchar(50), RoomIndex Varchar(50))';
            this.bulkTablesList.push(roomsidsPrimarySave);
            var primaryGeneralSchoolData = 'create table IF NOT EXISTS sids_primary_general_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), IndexId Varchar(50), SiteNum Varchar(50), TotalArea Varchar(50),' + ' PurpLaptopYN Varchar(50), PurpLaptopFun Varchar(50), PurpLaptopNonFun Varchar(50), PurpComputerYN Varchar(50), PurpComputerFun Varchar(50), PurpComputerNonFun Varchar(50), PurpTabYN Varchar(50), PurpTabFun Varchar(50), PurpTabNonFun Varchar(50), PurpPrinterYN Varchar(50), PurpPrinterFun Varchar(50), PurpPrinterNonFun Varchar(50), PurpProjectorYN Varchar(50), PurpProjectorFun Varchar(50), PurpProjectorNonFun Varchar(50), GeneralPhoto Varchar(5000), GeneralPhotoName Varchar(50), GeneralLatitude Varchar(50), GeneralLongitude Varchar(50), EntrancePhoto Varchar(5000), EntrancePhotoName Varchar(50),Status Varchar(50))';
            this.bulkTablesList.push(primaryGeneralSchoolData);
            var safetyprimary_Data = 'create table IF NOT EXISTS sids_primary_safety_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId text, IndexId Varchar(50),' + 'EBliShiYn Varchar(100), RefilAreReq Varchar(50),RefilSqft Varchar(50),WatLoggYn Varchar(100),WatLogRepair Varchar(100), TrePrunReq Varchar(100),OpenWellYn Varchar(100),DustYN Varchar(100),' + 'ChulhaYn Varchar(100),ChulhaFunc Varchar(100),ChulhaRepair Varchar(100), SChSepticTank Varchar(100), SepticTankFun Varchar(100), SepticTankRepaired Varchar(100), Status Varchar(100))';
            this.bulkTablesList.push(safetyprimary_Data);
            var playgroundprimary_Data = 'create table IF NOT EXISTS sids_primary_playground_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), IndexId Varchar(50),' + 'PlaygroYn Varchar(100), PlaygroArea Varchar(50),PlayKerbwall Varchar(50),OutsiClsYN Varchar(100), OutsiClsNum Varchar(100), Status Varchar(100))';
            this.bulkTablesList.push(playgroundprimary_Data);
            var compoundWallprimary_Data = 'create table IF NOT EXISTS sids_primary_compoundwall_data(Id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId text, IndexId Varchar(50),' + 'CmpdwallSta Varchar(100), CmpdwallReq Varchar(50), CmpdwallReqt Varchar(100),CmpdwallHTInc Varchar(100), AreaWW Varchar(100),AreaReplastering Varchar(100),' + 'AreaBrickwork Varchar(100),GateYn Varchar(100),GateFunc Varchar(100), Status Varchar(100))';
            this.bulkTablesList.push(compoundWallprimary_Data);
            var sidsWaterprimary_SchoolData = 'create table IF NOT EXISTS sids_primary_water_schooldata(id INTEGER PRIMARY KEY AUTOINCREMENT, SchlId Varchar(100), VistUId Varchar(100), IndexId Varchar(50),' + 'WatAvaiSchool Varchar(100), ResUnAvaiWater Varchar(100), srcWaterAvai Varchar(100),' + 'BorWelFunc Varchar(50), BorwelClosed Varchar(50) , BorWelReqReapir Varchar(50), DWWatAvai Varchar(50),' + 'DWSumpYn Varchar(100), DWSumpFun Varchar(50), DWSumpAvai Varchar(50), DWPumpYn Varchar(50),' + 'DWPumpFun Varchar(100), DWPumpRepair Varchar(300), NumDWStation Varchar(50))';
            this.bulkTablesList.push(sidsWaterprimary_SchoolData);
            var comsidsPrimaryServer = 'create table IF NOT EXISTS sidsPrimaryCommonServer(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100),Status Varchar(50))';
            this.bulkTablesList.push(comsidsPrimaryServer);
            var gensidsPrimaryServer = 'create table IF NOT EXISTS sidsPrimaryGeneralServer(Sid INTEGER PRIMARY KEY AUTOINCREMENT, SclId Varchar(100), VistId Varchar(100),Status Varchar(50))';
            this.bulkTablesList.push(gensidsPrimaryServer);
            var DeleteBuilding = 'create table IF NOT EXISTS DeleteBuilding(Id INTEGER PRIMARY KEY AUTOINCREMENT, schoolId Varchar(2000), visitId Varchar(2000), BuildId Varchar(2000), Records Varchar(5000), BuildIndxId Varchar(200), Status Varchar(100))';
            this.bulkTablesList.push(DeleteBuilding);
            var DeleteFloor = 'create table IF NOT EXISTS DeleteFloor(Id INTEGER PRIMARY KEY AUTOINCREMENT, schoolId Varchar(2000), visitId Varchar(2000), FloorId Varchar(2000), Records Varchar(5000), FloorIndxId Varchar(200), Status Varchar(100))';
            this.bulkTablesList.push(DeleteFloor);
            var DeleteRoom = 'create table IF NOT EXISTS DeleteRoom(Id INTEGER PRIMARY KEY AUTOINCREMENT, schoolId Varchar(2000), visitId Varchar(2000), RoomId Varchar(2000), Records Varchar(5000), Status Varchar(100))';
            this.bulkTablesList.push(DeleteRoom);
            var hostelStuAttendance = 'create table IF NOT EXISTS hostelStuAttendance (id INTEGER PRIMARY KEY AUTOINCREMENT, student_id INTEGER, name VARCHAR(500), user_id INTEGER, class_studying_id INTEGER, class_section VARCHAR(50), attendance_an INTEGER, attendance_fn INTEGER, school_id INTEGER, attendance_at VARCHAR(25))';
            this.bulkTablesList.push(hostelStuAttendance);
            var hostelStaffAttendance = 'create table IF NOT EXISTS hostelStaffAttendance (id INTEGER PRIMARY KEY AUTOINCREMENT, staff_id INTEGER, teacher_name VARCHAR(500), type_teacher VARCHAR(500), attendance_an INTEGER, attendance_fn INTEGER, school_id INTEGER, attendance_at VARCHAR(25))';
            this.bulkTablesList.push(hostelStaffAttendance);
            this.bulkTablesList.forEach(function (element) {
              {
                _this46.sqliteObject.executeSql(element, []).then(function (res) {
                  if (res) {// console.log('table ' + element + ' has created successfully');
                  }
                })["catch"](function (e) {
                  return console.log("Error" + JSON.stringify(e));
                });
              }
            });
          }
        }, {
          key: "bulkInsert",
          value: function bulkInsert(queryList) {
            return this.sqliteObject.sqlBatch(queryList).then(function (response) {
              return response;
            });
          }
        }, {
          key: "checkDataExists",
          value: function checkDataExists(tablename) {
            var _this47 = this;

            return new Promise(function (resolve, reject) {
              var checkClasses = 'SELECT * FROM ' + tablename;
              _this47.row_data = []; //debugger;

              _this47.sqliteObject.executeSql(checkClasses, []).then(function (res) {
                if (res !== undefined && res.rows.length > 0) {
                  resolve(true);
                } else {
                  resolve(false);
                }
              });
            });
          }
        }, {
          key: "checkDataExistsWithCondition",
          value: function checkDataExistsWithCondition(tablename) {
            var _this48 = this;

            return new Promise(function (resolve, reject) {
              var checkClasses = 'SELECT * FROM ' + tablename;
              _this48.row_data = []; //debugger;

              _this48.sqliteObject.executeSql(checkClasses).then(function (res) {
                if (res !== undefined && res.rows.length > 0) {
                  resolve(true);
                } else {
                  resolve(false);
                }
              });
            });
          }
        }, {
          key: "checkDataExistsWithConditions",
          value: function checkDataExistsWithConditions(tablename, colName, colValue) {
            var _this49 = this;

            console.log('checkDataExistsWithConditions', tablename, colName, colValue);
            return new Promise(function (resolve, reject) {
              var checkClasses = 'SELECT * FROM ' + tablename + ' WHERE ' + colName + '=(?)';
              _this49.row_data = [];
              debugger;

              _this49.sqliteObject.executeSql(checkClasses, [colValue]).then(function (res) {
                if (res !== undefined && res.rows.length > 0) {
                  resolve(true);
                } else {
                  resolve(false);
                }
              });
            });
          }
        }, {
          key: "initDatabase",
          value: function initDatabase() {
            var _this50 = this;

            return this.sqlite.create(this.dbConfig).then(function (db) {
              console.log('database created');
              _this50.sqliteObject = db;

              _this50.createAllTables();

              return Promise.resolve(_this50.sqliteObject);
            })["catch"](function (e) {
              console.log('error ' + JSON.stringify(e));
            });
          }
        }, {
          key: "removeDatabase",
          value: function removeDatabase() {
            return this.sqlite.deleteDatabase(this.dbConfig).then(function (res) {
              return res;
            });
          }
        }, {
          key: "executeQuery",
          value: function executeQuery(query) {
            return this.sqliteObject.executeSql(query, []);
          }
        }, {
          key: "update",
          value: function update(query) {
            return this.sqliteObject.executeSql(query, []);
          }
        }, {
          key: "createTable",
          value: function createTable(query) {
            return this.sqliteObject.executeSql(query, []);
          }
        }, {
          key: "getDataLocalDB",
          value: function getDataLocalDB(query) {
            return this.sqliteObject.executeSql(query, []);
          }
        }, {
          key: "insert",
          value: function insert(query, values) {
            return this.sqliteObject.executeSql(query, values);
          }
        }, {
          key: "getAllData",
          value: function getAllData(tablename) {
            var _this51 = this;

            return new Promise(function (resolve, reject) {
              var checkClasses = 'SELECT * FROM ' + tablename;
              _this51.row_data = []; //debugger;

              _this51.sqliteObject.executeSql(checkClasses, []).then(function (res) {
                if (res !== undefined && res.rows.length > 0) {
                  for (var i = 0; i < res.rows.length; i++) {
                    _this51.row_data.push(res.rows.item(i));
                  }

                  resolve(_this51.row_data);
                } else {
                  reject(false);
                }
              });
            });
          }
        }, {
          key: "getExistData",
          value: function getExistData(tableName, colValue, colName) {
            var _this52 = this;

            return new Promise(function (resolve, reject) {
              var lessQuery = 'SELECT * FROM ' + tableName + ' WHERE ' + colName + '=(?)';
              _this52.row_data = [];

              _this52.sqliteObject.executeSql(lessQuery, [colValue]).then(function (res) {
                if (res !== undefined && res.rows.length > 0) {
                  for (var i = 0; i < res.rows.length; i++) {
                    _this52.row_data.push(res.rows.item(i));
                  }
                }

                resolve(_this52.row_data);
              }, function (error) {
                reject(new Error(error));
              });
            });
          }
        }, {
          key: "DonwloadImage",
          value: function DonwloadImage(image) {
            var _this53 = this;

            return new Promise(function (resolve, reject) {
              var url = 'https://deka0egrc3bqo.cloudfront.net/' + image;

              var fileTransfer = _this53.transfer.create();

              fileTransfer.download(url, _this53.file.externalDataDirectory + image, true).then(function (entry) {
                _this53.file.readAsDataURL(_this53.file.externalDataDirectory, image).then(function (base64string) {
                  resolve(base64string);
                });
              });
            });
          }
        }]);
      }();

      _SqlitedatabaseService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }, {
          type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__.File
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransfer
        }];
      };

      _SqlitedatabaseService = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _SqlitedatabaseService);
      /***/
    },

    /***/
    65481:
    /*!*******************************************************!*\
      !*** ./src/app/services/tnvn/services/api.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _network_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./network.service */
      81508);
      /* harmony import */


      var _offline_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./offline-manager.service */
      79370);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      69412);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./file-handler/file-handler.service */
      24954);
      /* harmony import */


      var _ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var folder_name = 'templates';
      var API_STORAGE_KEY = 'specialkey';
      var API_URL = ' http://demo4866112.mockable.io/ap';
      var token_key = "user_token";
      var logged_username = "logged_username";
      var apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.api_url;
      var auth_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwidGltZXN0YW1wIjoxNTc3MTk1NTk5fQ.faNSlQkjmpwOge1EoRnjqj-HH1eT8yW7dwgkbR-AAgk';

      var _ApiService2 = /*#__PURE__*/function () {
        function ApiService(http, networkService, storage, offlineManager, fileService, file, ionicStrorageService) {
          var _this54 = this;

          _classCallCheck(this, ApiService);

          this.http = http;
          this.networkService = networkService;
          this.storage = storage;
          this.offlineManager = offlineManager;
          this.fileService = fileService;
          this.file = file;
          this.ionicStrorageService = ionicStrorageService;
          this.standardList = [];
          this.totalStandardList = [];
          this.termList = [];
          this.accessedStudent = [];
          this.misMatchList = [];
          this.fire = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders();
          this.name = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject("");
          this.getName = this.name.asObservable();
          this.counter = 1;

          this.setMismatchAttendance = function (misMatchList) {
            _this54.misMatchList = misMatchList;
          };

          this.getMisMatchList = function () {
            return _this54.misMatchList;
          };

          this.getTeacherDetail = function (schoolId) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "getTeacherDetails/".concat(schoolId), {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('TeacherDetails', [])));
          };

          this.getSchoolClassInfo = function (schoolId) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "getSchoolClassInfo/".concat(schoolId), {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('School_ClassDetails', [])));
          };

          this.getAllSubjects = function (classDetail) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getSubjects", classDetail, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('SubjectsList', [])));
          };

          this.getTeachingallQuestions = function (classDetail) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getTeachingallQuestions", classDetail, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('Question_final', [])));
          };

          this.getStudentAssessmentQuestion = function () {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "getStudentAssessmentQuestion", {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('School_ClassDetails', [])));
          };

          this.flhGetStudentAssessmentQuestion = function () {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "flhGetStudentAssessmentQuestionV2", {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('School_ClassDetails', [])));
          };

          this.getSchoolDetails = function (udisecode) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.emisApiUrl + "/PPSclDetails?udise=" + udisecode, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('School_ClassDetails', [])));
          };

          this.flhGetStudentAssessmentSkills = function () {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "flhGetStudentAssessmentQuestionV1", {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('School_ClassDetails', [])));
          };

          this.getAttendanceDetails = function (classDetail) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getStudentDetails", classDetail, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('AttendanceDetails', [])));
          };

          this.getAllEducationDistricts = function (districtId) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getObservationInfo", districtId, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('GetAllEducationDistrictList', [])));
          };

          this.getAllBlocks = function (districtId) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getObservationInfo", districtId, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('GetAllBlockList', [])));
          };

          this.getAllZones = function (districtId) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getObservationInfo", districtId, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('GetAllZonesList', [])));
          };

          this.getAssesmentReasonsList = function () {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "getAssesmentReasons", {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('AssessmentReasonList', [])));
          };

          this.getAllTermList = function () {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "getTermList", {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('GetAllTermList', [])));
          };

          this.getChapterList = function (termDetail) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getChapterSection", termDetail, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('GetChaptersList', [])));
          };

          this.getMisMatchReasons = function () {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "getMismatchReasons", {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('MismatchReasonList', [])));
          };

          this.getPPSections = function () {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.get(apiUrl + "sections_data", {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('SectionList', [])));
          };

          this.getAllassesmentQuestions = function (chapterDetail) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "getQuestions", chapterDetail, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('GetAllAssessmentQuestions', [])));
          };

          this.postfinalinfo = function (finalData) {
            _this54.createAuthorizationHeader(_this54.headers);

            return _this54.http.post(apiUrl + "saveObservationJson", finalData, {
              headers: _this54.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(_this54.handleError('submittingFinalData', [])));
          };

          this.languageInfo = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject("en");
          this.languageDisableInfo = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
        }

        return _createClass(ApiService, [{
          key: "languageChange",
          value: function languageChange(lan) {
            this.languageInfo.next(lan);
          }
        }, {
          key: "languageDisableUpdate",
          value: function languageDisableUpdate(status) {
            this.languageDisableInfo.next(status);
          }
        }, {
          key: "setStandard",
          value: function setStandard(standardList) {
            this.standardList = standardList;
          }
        }, {
          key: "getStandard",
          value: function getStandard() {
            return this.standardList;
          }
        }, {
          key: "setSelectedStandard",
          value: function setSelectedStandard(standard) {
            this.selectedStandard = standard;
          }
        }, {
          key: "getSelectedStandard",
          value: function getSelectedStandard() {
            return this.selectedStandard;
          }
        }, {
          key: "setTerm",
          value: function setTerm(termList) {
            this.termList = termList;
          }
        }, {
          key: "getTermList",
          value: function getTermList() {
            return this.termList;
          }
        }, {
          key: "setAccessedStudents",
          value: function setAccessedStudents(studentList) {
            this.accessedStudent = studentList;
          }
        }, {
          key: "getAccessedStudents",
          value: function getAccessedStudents() {
            return this.accessedStudent;
          }
        }, {
          key: "createAuthorizationHeader",
          value: function createAuthorizationHeader(headers) {
            headers.append('Accept', 'application/json');
            headers.append('Authorization', 'EMIS_web@2019_api');
            headers.append('authorization_key', auth_key);
            headers.append('Token', localStorage.getItem(token_key));
          }
        }, {
          key: "setName",
          value: function setName(result) {
            this.name.next(result);
          }
        }, {
          key: "doChange",
          value: function doChange() {
            this.fire.emit(true);
          }
        }, {
          key: "getEmittedValue",
          value: function getEmittedValue() {
            return this.fire;
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            var _this55 = this;

            var forceRefresh = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline || !forceRefresh) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.getLocalData('users'));
            } else {
              var page = Math.floor(Math.random() * Math.floor(6));
              return this.http.get(API_URL).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(function (res) {
                _this55.setLocalData('users', res);
              }));
            }
          }
        }, {
          key: "updateUser",
          value: function updateUser(user, data) {
            var _this56 = this;

            var url = API_URL;

            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.offlineManager.storeRequest(url, 'GET', data));
            } else {
              return this.http.put(url, data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (err) {
                _this56.offlineManager.storeRequest(url, 'GET', data);

                throw new Error(err);
              }));
            }
          }
        }, {
          key: "setLocalData",
          value: function setLocalData(key, data) {
            this.storage.set("".concat(key), data);
          }
        }, {
          key: "getLocalData",
          value: function getLocalData(key) {
            return this.storage.get("".concat(API_STORAGE_KEY, "-").concat(key));
          }
        }, {
          key: "getQuestions",
          value: function getQuestions() {
            var _this57 = this;

            var apiurl = 'http://demo4866112.mockable.io/questions';

            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.getDataFromFile());
            } else {
              return this.http.get(apiurl).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(function (res) {
                _this57.setLocalData('que1', res);

                return _this57.file.writeFile(_this57.file.externalDataDirectory, 'question_observation.json', JSON.stringify(res), {
                  replace: true
                });
              }));
            }
          }
        }, {
          key: "getDataFromFile",
          value: function getDataFromFile() {
            return this.file.readAsText(this.file.externalDataDirectory, 'question_observation.json');
          }
        }, {
          key: "saveQuestion",
          value: function saveQuestion(data) {
            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline) {
              this.setLocalData('question', data);
            } else {
              return this.http.post(API_URL, {
                'records': data
              });
            }
          }
        }, {
          key: "setActivityLog",
          value: function setActivityLog(logData) {
            return this.http.post(apiUrl + 'setActivityLog', logData).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getGraQuestions",
          value: function getGraQuestions(GraData) {
            return this.http.post(apiUrl + 'getGraQuestions', GraData).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "saveGraAssessment",
          value: function saveGraAssessment(readAlongData) {
            return this.http.post(apiUrl + 'saveGraAssessment', readAlongData).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getInspectionReport",
          value: function getInspectionReport(logData) {
            return this.http.post(apiUrl + 'getInspectionReport', logData).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getDistricts",
          value: function getDistricts() {
            return this.http.get(apiUrl + 'getDistricts').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getObsCount",
          value: function getObsCount(userId) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee27() {
              return _regenerator().w(function (_context27) {
                while (1) switch (_context27.n) {
                  case 0:
                    _context27.n = 1;
                    return this.http.post(apiUrl + 'getobs_count', userId).toPromise();

                  case 1:
                    return _context27.a(2, _context27.v);
                }
              }, _callee27, this);
            }));
          }
        }, {
          key: "getVeracityUserType",
          value: function getVeracityUserType() {
            return this.http.get(apiUrl + 'veracity_user_type').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Veracity_User_Type', [])));
          }
        }, {
          key: "getSchoolsByTntlei",
          value: function getSchoolsByTntlei() {
            return this.http.get(apiUrl + 'getSchoolsByTntlei').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Question_final', [])));
          }
        }, {
          key: "getObservedSchools",
          value: function getObservedSchools(requestdata) {
            return this.http.post(apiUrl + 'getObservedSchools', requestdata).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getSchoolListByBlockId",
          value: function getSchoolListByBlockId(districtid) {
            return this.http.post(apiUrl + 'getSchoolListByDistrictId', {
              'districtid': districtid
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getBlockListbyDistrict",
          value: function getBlockListbyDistrict(districtid) {
            return this.http.get(apiUrl + 'getBlockListByDistrictId/' + districtid.district_id).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getStudentsList",
          value: function getStudentsList() {
            var apiurl = 'http://demo4866112.mockable.io/students_list';
            return this.http.get(apiurl);
          }
        }, {
          key: "getMaster",
          value: function getMaster(data) {
            return this.http.get(apiUrl + 'getMaster?param1=' + data).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getAllTemplates",
          value: function getAllTemplates() {
            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline) {}

            return this.http.get(apiUrl + 'getAllTemplates').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('role', [])));
          }
        }, {
          key: "getStudentsListBySchoolId",
          value: function getStudentsListBySchoolId(school_id) {
            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline) {
              return;
            } else {
              return this.http.post(apiUrl + 'getStudentsListBySchoolId', {
                'schoolid': school_id
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('', [])));
            }
          }
        }, {
          key: "getTeachersListBySchoolId",
          value: function getTeachersListBySchoolId(school_id) {
            return this.http.post(apiUrl + 'getTeachersListBySchoolId', {
              'schoolid': school_id
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('', [])));
          }
        }, {
          key: "saveObservation",
          value: function saveObservation(data) {
            var _this58 = this;

            var url = apiUrl + 'saveObservation';

            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.offlineManager.storeRequest(url, 'post', {
                records: data
              }));
            } else {
              return this.http.post(apiUrl + 'saveObservation', {
                records: data
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (err) {
                _this58.handleError('saveObservation', []);

                _this58.offlineManager.storeRequest(url, 'post', {
                  records: data
                });

                throw new Error(err);
              }));
            }
          }
        }, {
          key: "getAllLeaningOutcomeQuestions",
          value: function getAllLeaningOutcomeQuestions() {
            return this.http.get(apiUrl + 'getLeaningOutcomeQuestions').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Question_final', [])));
          }
        }, {
          key: "getObservationList",
          value: function getObservationList(datas) {
            var _this59 = this;

            if (this.networkService.getCurrentNetworkStatus() == _network_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionStatus.Offline) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.ionicStrorageService.getData('observation_list'));
            }

            return this.http.post(apiUrl + 'getObservationList', datas).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)(function (res) {
              var data = [];
              data = res;
              data.lastUpdated = new Date();

              _this59.setLocalData('observation_list', data);
            }));
          }
        }, {
          key: "getAppVersionInfo",
          value: function getAppVersionInfo() {
            return this.http.get(apiUrl + 'getAppVersionInfo').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('getappVersion', [])));
          }
        }, {
          key: "handleError",
          value: function handleError() {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(result);
            };
          }
        }, {
          key: "getSchoolList",
          value: function getSchoolList(userName) {
            this.createAuthorizationHeader(this.headers);
            return this.http.post(apiUrl + "getSchoolMapping", userName, {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('School_List', [])));
          }
        }, {
          key: "getBlockList",
          value: function getBlockList(userName) {
            this.createAuthorizationHeader(this.headers);
            return this.http.post(apiUrl + "getBlockList", userName, {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Block_List', [])));
          }
        }, {
          key: "getAllData",
          value: function getAllData(school_id) {
            this.createAuthorizationHeader(this.headers);
            return this.http.get(apiUrl + "getSchoolData/".concat(school_id), {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Getting_AllData', [])));
          }
        }, {
          key: "getOmrQuestionData",
          value: function getOmrQuestionData() {
            this.createAuthorizationHeader(this.headers);
            return this.http.get(apiUrl + "getOmrQuestions", {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Getting_OmrQuestionData', [])));
          }
        }, {
          key: "getSchoolData",
          value: function getSchoolData(school_id, level, username) {
            this.createAuthorizationHeader(this.headers);
            return this.http.get(apiUrl + "getSchoolDataDetail/".concat(school_id, "/").concat(level, "?username=") + username, {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Getting_SchoolData', [])));
          }
        }, {
          key: "getOtherSchoolData",
          value: function getOtherSchoolData(school_id) {
            this.createAuthorizationHeader(this.headers);
            return this.http.get(apiUrl + "getSchoolOtherDetails/".concat(school_id), {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Getting_SchoolData', [])));
          }
        }, {
          key: "getSchoolInfo",
          value: function getSchoolInfo(school_id) {
            this.createAuthorizationHeader(this.headers);
            return this.http.get(apiUrl + "getSchoolDatainfo/".concat(school_id), {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Getting_Schoolinfo', [])));
          }
        }, {
          key: "getAllStudentsBySchoolId",
          value: function getAllStudentsBySchoolId(school_id) {
            this.createAuthorizationHeader(this.headers);
            return this.http.get(apiUrl + "getAllStudentsBySchoolId/".concat(school_id), {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Getting_Schoolinfo', [])));
          }
        }, {
          key: "getAllStudentsByClass",
          value: function getAllStudentsByClass(classDetails) {
            this.createAuthorizationHeader(this.headers);
            return this.http.post(apiUrl + "getAllStudentsByClass", classDetails, {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('Getting_Schoolinfo', [])));
          }
        }, {
          key: "getSchoolDetail",
          value: function getSchoolDetail(schoolId) {
            this.createAuthorizationHeader(this.headers);
            return this.http.get(apiUrl + "getSchoolDetails/".concat(schoolId), {
              headers: this.headers
            }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(this.handleError('SchoolDetails', [])));
          }
        }]);
      }();

      _ApiService2.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
        }, {
          type: _network_service__WEBPACK_IMPORTED_MODULE_0__.NetworkService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__.Storage
        }, {
          type: _offline_manager_service__WEBPACK_IMPORTED_MODULE_1__.OfflineManagerService
        }, {
          type: _file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_3__.FileHandlerService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File
        }, {
          type: _ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }];
      };

      _ApiService2.propDecorators = {
        fire: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
        }]
      };
      _ApiService2 = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _ApiService2);
      /***/
    },

    /***/
    90110:
    /*!*************************************************************************************************!*\
      !*** ./src/app/services/tnvn/services/common_Provider/loader-service/loader-service.service.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoaderServiceService": function LoaderServiceService() {
          return (
            /* binding */
            _LoaderServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoaderServiceService = /*#__PURE__*/function () {
        function LoaderServiceService(loadingController) {
          _classCallCheck(this, LoaderServiceService);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        return _createClass(LoaderServiceService, [{
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee28() {
              return _regenerator().w(function (_context28) {
                while (1) switch (_context28.n) {
                  case 0:
                    _context28.n = 1;
                    return this.loadingController.create({
                      message: 'Please Wait',
                      duration: 2000
                    });

                  case 1:
                    this.loading = _context28.v;
                    _context28.n = 2;
                    return this.loading.present();

                  case 2:
                    return _context28.a(2);
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "dismissLoader",
          value: function dismissLoader() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee29() {
              return _regenerator().w(function (_context29) {
                while (1) switch (_context29.n) {
                  case 0:
                    this.isLoading = false;
                    this.loading.dismiss();

                  case 1:
                    return _context29.a(2);
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "presentLoadingTillDismiss",
          value: function presentLoadingTillDismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee30() {
              return _regenerator().w(function (_context30) {
                while (1) switch (_context30.n) {
                  case 0:
                    this.isLoading = true;
                    _context30.n = 1;
                    return this.loadingController.create({
                      message: 'Please Wait',
                      cssClass: 'loader-css-class',
                      backdropDismiss: true
                    });

                  case 1:
                    this.loading = _context30.v;
                    _context30.n = 2;
                    return this.loading.present();

                  case 2:
                    return _context30.a(2);
                }
              }, _callee30, this);
            }));
          }
        }]);
      }();

      _LoaderServiceService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _LoaderServiceService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoaderServiceService);
      /***/
    },

    /***/
    24954:
    /*!*****************************************************************************!*\
      !*** ./src/app/services/tnvn/services/file-handler/file-handler.service.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileHandlerService": function FileHandlerService() {
          return (
            /* binding */
            _FileHandlerService
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


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var template = 'template';

      var _FileHandlerService = /*#__PURE__*/function () {
        function FileHandlerService(file, platform) {
          _classCallCheck(this, FileHandlerService);

          this.file = file;
          this.platform = platform;
          this.directory_root = this.file.externalDataDirectory;

          if (this.platform.is('ios')) {
            this.directory_root = this.file.dataDirectory;
          }
        }

        return _createClass(FileHandlerService, [{
          key: "readFile",
          value: function readFile(options) {
            this.directory_root = this.file.dataDirectory;
            var temp = options.file_name;
            options.file_name = String(temp);
            var value = this.checkDirectory(options.dir);

            if (value) {
              return this.file.readAsText(this.directory_root + options.dir, options.file_name);
            }
          }
        }, {
          key: "writeFile",
          value: function writeFile(data, options) {
            var _this60 = this;

            this.directory_root = this.file.dataDirectory;
            this.checkDirectory(options.dir).then(function (value) {
              if (value) {
                return _this60.file.writeFile(_this60.directory_root + options.dir, options.file_name, JSON.stringify(data), {
                  replace: true
                }).then(function (result) {});
              } else {
                _this60.createDirectory(options.dir).then(function (result) {
                  return _this60.file.writeFile(_this60.directory_root + options.dir, options.file_name, JSON.stringify(data), {
                    replace: true
                  }).then(function (result) {});
                }, function (err) {});
              }
            }, function (err) {
              _this60.createDirectory(options.dir).then(function (result) {
                return _this60.file.writeFile(_this60.directory_root + options.dir, options.file_name, JSON.stringify(data), {
                  replace: true
                }).then(function (result) {});
              }, function (error) {});
            });
          }
        }, {
          key: "listDirectory",
          value: function listDirectory(folderName) {
            this.directory_root = this.file.dataDirectory;
            return this.file.listDir(this.directory_root, folderName);
          }
        }, {
          key: "checkDirectory",
          value: function checkDirectory(folderName) {
            this.directory_root = this.file.dataDirectory;
            return this.file.checkDir(this.directory_root, folderName);
          }
        }, {
          key: "createDirectory",
          value: function createDirectory(folderName) {
            this.directory_root = this.file.dataDirectory;
            return this.file.createDir(this.directory_root, folderName, true);
          }
        }, {
          key: "classConvertion",
          value: function classConvertion(value) {
            value = String(value);
            value == '13' ? value = 'LKG' : value == '14' ? value = 'UKG' : value == '15' ? value = 'Pre-KG' : value;
            return value;
          }
        }]);
      }();

      _FileHandlerService.ctorParameters = function () {
        return [{
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_0__.File
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform
        }];
      };

      _FileHandlerService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _FileHandlerService);
      /***/
    },

    /***/
    84658:
    /*!*******************************************************************************!*\
      !*** ./src/app/services/tnvn/services/ionic-storage/ionic-storage.service.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IonicStorageService": function IonicStorageService() {
          return (
            /* binding */
            _IonicStorageService2
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic/storage */
      38605);

      var _IonicStorageService2 = /*#__PURE__*/function () {
        function IonicStorageService(storage) {
          _classCallCheck(this, IonicStorageService);

          this.storage = storage;
        }

        return _createClass(IonicStorageService, [{
          key: "insertData_Replace",
          value: function insertData_Replace(key, data) {
            return this.storage.set(this.getKey(key), data);
          }
        }, {
          key: "insertData_noReplace",
          value: function insertData_noReplace(key, data) {
            var _this61 = this;

            this.getData(key).then(function (res) {
              var temp = [];

              if (res) {
                temp = res;
                temp.push(data);
              } else {
                temp = [data];
              }

              return _this61.storage.set(_this61.getKey(key), temp);
            });
          }
        }, {
          key: "getData",
          value: function getData(key) {
            return this.storage.get(this.getKey(key));
          }
        }, {
          key: "removeKey",
          value: function removeKey(key) {
            return this.storage.remove(this.getKey(key));
          }
        }, {
          key: "loopData",
          value: function loopData(key) {
            return this.storage.forEach(this.getKey(key));
          }
        }, {
          key: "getKey",
          value: function getKey(key) {
            switch (key) {
              case "schoollistbydistrictid":
                return "schoolListBy_District_id";

              case 'teacherlist':
                return "teacherListBy_school_id";

              case "studentlist":
                return "studentListBy_school_id";

              case "learningoutcomeques":
                return "learningOutcomeQues";

              case "school_id":
                return "currentSchool_id";

              case "classroom-data":
                return "school_selection_form";

              case "teacher-info":
                return "teacher_info_form";

              case "classroom-type":
                return "classroom_selection_form";

              case "questions":
                return "classroom_observation_form";

              case "pedagogy-info":
                return "pedagogy_info_form";

              case "student-list":
                return "student_list_form";

              case "tntp-content":
                return "tntp_content_form";

              case "learning-outcome":
                return "learning_outcome_form";

              case "record-verification":
                return "record_verification_form";

              default:
                return key;
            }
          }
        }, {
          key: "setStoreData",
          value: function setStoreData(storeData) {
            this.storage.set('storeData', storeData);
          }
        }, {
          key: "getStoreData",
          value: function getStoreData() {
            return this.storage.get('storeData');
          }
        }, {
          key: "removeStoreData",
          value: function removeStoreData() {
            this.storage.remove('storeData');
          }
        }, {
          key: "setStudentsData",
          value: function setStudentsData(studentsData) {
            this.storage.set('studentsData', studentsData);
          }
        }, {
          key: "getStudentsData",
          value: function getStudentsData() {
            return this.storage.get('studentsData');
          }
        }, {
          key: "removeStudentsData",
          value: function removeStudentsData() {
            this.storage.remove('studentsData');
          }
        }, {
          key: "setFinalData",
          value: function setFinalData(storeData) {
            this.storage.set('storeFinalData', storeData);
          }
        }, {
          key: "getFinalData",
          value: function getFinalData() {
            return this.storage.get('storeFinalData');
          }
        }, {
          key: "removeFinalData",
          value: function removeFinalData() {
            this.storage.remove('storeFinalData');
            this.storage.clear();
          }
        }, {
          key: "setOffStorage",
          value: function setOffStorage(storeData) {
            this.storage.set('offStoreData', storeData);
          }
        }, {
          key: "getOffStorage",
          value: function getOffStorage() {
            return this.storage.get('offStoreData');
          }
        }, {
          key: "removeOffStorage",
          value: function removeOffStorage() {
            this.storage.remove('offStoreData');
          }
        }, {
          key: "setCorrectedClass",
          value: function setCorrectedClass(correctClassList) {
            this.storage.set('correctClassList', correctClassList);
          }
        }, {
          key: "getCorrectedClass",
          value: function getCorrectedClass() {
            return this.storage.get('correctClassList');
          }
        }, {
          key: "removeCorrectedClass",
          value: function removeCorrectedClass() {
            this.storage.remove('correctClassList');
          }
        }]);
      }();

      _IonicStorageService2.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage
        }];
      };

      _IonicStorageService2 = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _IonicStorageService2);
      /***/
    },

    /***/
    81508:
    /*!***********************************************************!*\
      !*** ./src/app/services/tnvn/services/network.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConnectionStatus": function ConnectionStatus() {
          return (
            /* binding */
            _ConnectionStatus2
          );
        },

        /* harmony export */
        "NetworkService": function NetworkService() {
          return (
            /* binding */
            _NetworkService2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      75592);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ConnectionStatus2;

      (function (ConnectionStatus) {
        ConnectionStatus[ConnectionStatus["Online"] = 0] = "Online";
        ConnectionStatus[ConnectionStatus["Offline"] = 1] = "Offline";
      })(_ConnectionStatus2 || (_ConnectionStatus2 = {}));

      var _NetworkService2 = /*#__PURE__*/function () {
        function NetworkService(network, toast, plt) {
          var _this62 = this;

          _classCallCheck(this, NetworkService);

          this.network = network;
          this.toast = toast;
          this.plt = plt;
          this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_ConnectionStatus2.Offline);
          this.plt.ready().then(function () {
            _this62.initializeNetworkEvents();

            var status = _this62.network.type != 'none' ? _ConnectionStatus2.Online : _ConnectionStatus2.Offline;

            _this62.status.next(status);
          });
        }

        return _createClass(NetworkService, [{
          key: "initializeNetworkEvents",
          value: function initializeNetworkEvents() {
            var _this63 = this;

            this.network.onDisconnect().subscribe(function () {
              if (_this63.status.getValue() == _ConnectionStatus2.Online) {
                _this63.updateNetworkStatus(_ConnectionStatus2.Offline);
              }
            });
            this.network.onConnect().subscribe(function () {
              if (_this63.status.getValue() == _ConnectionStatus2.Offline) {
                _this63.updateNetworkStatus(_ConnectionStatus2.Online);
              }
            });
          }
        }, {
          key: "updateNetworkStatus",
          value: function updateNetworkStatus(status) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee31() {
              var connection;
              return _regenerator().w(function (_context31) {
                while (1) switch (_context31.n) {
                  case 0:
                    this.status.next(status);
                    connection = status == _ConnectionStatus2.Offline ? 'Offline' : 'Online';
                    this.presentToast(connection);

                  case 1:
                    return _context31.a(2);
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(value) {
            var toast = this.toast.create({
              message: 'You are now ' + value,
              duration: 3000,
              position: 'bottom'
            });
            toast.then(function (toast) {
              return toast.present();
            });
          }
        }, {
          key: "onNetworkChange",
          value: function onNetworkChange() {
            return this.status.asObservable();
          }
        }, {
          key: "getCurrentNetworkStatus",
          value: function getCurrentNetworkStatus() {
            return this.status.getValue();
          }
        }]);
      }();

      _NetworkService2.ctorParameters = function () {
        return [{
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__.Network
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
        }];
      };

      _NetworkService2 = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
      })], _NetworkService2);
      /***/
    },

    /***/
    79370:
    /*!*******************************************************************!*\
      !*** ./src/app/services/tnvn/services/offline-manager.service.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OfflineManagerService": function OfflineManagerService() {
          return (
            /* binding */
            _OfflineManagerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      69412);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      35758);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      68307);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      38605);

      var STORAGE_REQ_KEY = 'store_observation';

      var _OfflineManagerService = /*#__PURE__*/function () {
        function OfflineManagerService(storage, http, toastCtrl) {
          _classCallCheck(this, OfflineManagerService);

          this.storage = storage;
          this.http = http;
          this.toastCtrl = toastCtrl;
        }

        return _createClass(OfflineManagerService, [{
          key: "checkForEvents",
          value: function checkForEvents() {
            var _this64 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.storage.get(STORAGE_REQ_KEY)).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (storedOperations) {
              var storedObj = JSON.parse(storedOperations);

              if (storedObj && storedObj.length > 0) {
                return _this64.sendRequests(storedObj).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(function (res) {
                  var false_response = [];
                  false_response = res.filter(function (val) {
                    return val['dataStatus'] != true;
                  });

                  if (false_response.length == 0) {
                    var toast = _this64.toastCtrl.create({
                      message: "Local data succesfully saved!",
                      duration: 3000,
                      position: 'bottom'
                    });

                    toast.then(function (toast) {
                      return toast.present();
                    });

                    _this64.storage.remove(STORAGE_REQ_KEY);
                  } else {
                    _this64.storage.remove(STORAGE_REQ_KEY);

                    res.forEach(function (val, index) {
                      if (val['dataStatus'] != true) {
                        _this64.storeRequest(storedObj[index].url, 'post', storedObj[index].data);
                      }
                    });
                  }
                }));
              } else {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
              }
            }));
          }
        }, {
          key: "storeRequest",
          value: function storeRequest(url, type, data) {
            var _this65 = this;

            var toast = this.toastCtrl.create({
              message: "Your data is stored locally because you seem to be offline.",
              duration: 3000,
              position: 'bottom'
            });
            toast.then(function (toast) {
              return toast.present();
            });
            var action = {
              url: url,
              type: type,
              data: data,
              time: new Date(),
              id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            };
            return this.storage.get(STORAGE_REQ_KEY).then(function (storedOperations) {
              var storedObj = JSON.parse(storedOperations);

              if (storedObj) {
                storedObj.push(action);
              } else {
                storedObj = [action];
              }

              return _this65.storage.set(STORAGE_REQ_KEY, JSON.stringify(storedObj));
            });
          }
        }, {
          key: "sendRequests",
          value: function sendRequests(operations) {
            var obs = [];

            var _iterator2 = _createForOfIteratorHelper(operations),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var op = _step2.value;
                var oneObs = void 0;

                if (op.type == 'post') {
                  oneObs = this.http.post(op.url, op.data);
                }

                obs.push(oneObs);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(obs);
          }
        }]);
      }();

      _OfflineManagerService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }];
      };

      _OfflineManagerService = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
      })], _OfflineManagerService);
      /***/
    },

    /***/
    64461:
    /*!*************************************************!*\
      !*** ./src/app/services/usersession.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserSessionService": function UserSessionService() {
          return (
            /* binding */
            _UserSessionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _models_usersession__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/usersession */
      58034);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _UserSessionService = /*#__PURE__*/function () {
        function UserSessionService() {
          _classCallCheck(this, UserSessionService);

          this.session = new _models_usersession__WEBPACK_IMPORTED_MODULE_0__.UserSession();
          this.localStorageSessionKey = 'Monitoring-' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.emisApiUrl + '-AuthData';
          this.attendanceSessionKey = 'Monitoring-' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.emisApiUrl + '-AuthData';
        }

        return _createClass(UserSessionService, [{
          key: "createAttendanceSessionKey",
          value: function createAttendanceSessionKey(session) {
            localStorage.setItem(this.attendanceSessionKey, JSON.stringify(session));
          }
        }, {
          key: "create",
          value: function create(session) {
            this.setLocalStorageProperties(session);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this.setLocalStorageProperties(new _models_usersession__WEBPACK_IMPORTED_MODULE_0__.UserSession());
          }
        }, {
          key: "setLocalStorageProperties",
          value: function setLocalStorageProperties(session) {
            localStorage.setItem(this.localStorageSessionKey, JSON.stringify(session));
          }
        }, {
          key: "load",
          value: function load() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData;
          }
        }, {
          key: "authToken",
          value: function authToken() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? '' : JSON.parse(jsonData).authToken;
          }
        }, {
          key: "usertype",
          value: function usertype() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? '' : JSON.parse(jsonData).usertype;
          }
        }, {
          key: "username",
          value: function username() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? '' : JSON.parse(jsonData).username;
          }
        }, {
          key: "name",
          value: function name() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            debugger;
            return jsonData == null ? '' : JSON.parse(jsonData).name;
          }
        }, {
          key: "user_id",
          value: function user_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? '' : JSON.parse(jsonData).user_id;
          }
        }, {
          key: "emis_username",
          value: function emis_username() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? '' : JSON.parse(jsonData).emis_username;
          }
        }, {
          key: "emis_user_id",
          value: function emis_user_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).emis_user_id;
          }
        }, {
          key: "emis_usertype",
          value: function emis_usertype() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).emis_usertype;
          }
        }, {
          key: "emis_usertype1",
          value: function emis_usertype1() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).emis_usertype1;
          }
        }, {
          key: "teacher_name",
          value: function teacher_name() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).teacher_name;
          }
        }, {
          key: "udise_code",
          value: function udise_code() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).udise_code;
          }
        }, {
          key: "district_id",
          value: function district_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).district_id;
          }
        }, {
          key: "dist_id",
          value: function dist_id() {
            debugger;
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).dist_id;
          }
        }, {
          key: "tamil_name",
          value: function tamil_name() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).tamil_name;
          }
        }, {
          key: "school_name",
          value: function school_name() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).school_name;
          }
        }, {
          key: "block_id",
          value: function block_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).block_id;
          }
        }, {
          key: "teacher_type",
          value: function teacher_type() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).teacher_type;
          }
        }, {
          key: "school_key_id",
          value: function school_key_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).school_key_id;
          }
        }, {
          key: "teacher_id",
          value: function teacher_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).teacher_id;
          }
        }, {
          key: "type_teacher",
          value: function type_teacher() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).type_teacher;
          }
        }, {
          key: "subjects",
          value: function subjects() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).subjects;
          }
        }, {
          key: "mod1",
          value: function mod1() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).mod1;
          }
        }, {
          key: "rsa_school_id",
          value: function rsa_school_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).rsa_school_id;
          }
        }, {
          key: "newschl",
          value: function newschl() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).newschl;
          }
        }, {
          key: "mht_block_id",
          value: function mht_block_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).mht_block_id;
          }
        }, {
          key: "catty_id",
          value: function catty_id() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).catty_id;
          }
        }, {
          key: "BlkdId",
          value: function BlkdId() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).BlkdId;
          }
        }, {
          key: "iat",
          value: function iat() {
            var jsonData = localStorage.getItem(this.localStorageSessionKey);
            return jsonData == null ? 0 : JSON.parse(jsonData).iat;
          }
        }]);
      }();

      _UserSessionService.ctorParameters = function () {
        return [];
      };

      _UserSessionService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], _UserSessionService);
      /***/
    },

    /***/
    27681:
    /*!*************************************************!*\
      !*** ./src/app/services/validations.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidationsService": function ValidationsService() {
          return (
            /* binding */
            _ValidationsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ValidationsService = /*#__PURE__*/function () {
        function ValidationsService() {
          _classCallCheck(this, ValidationsService);
        }
        /**
         * Allow number key only allow Function
         * @create_by Rajarajeswari Oct 10, 2022
         * @modified by -
         * @since v0.45
         */


        return _createClass(ValidationsService, [{
          key: "onKeyUpNumbersOnly",
          value: function onKeyUpNumbersOnly(event) {
            var newValue = event.target.value;
            var regExp = new RegExp('^[0-9]+$');

            if (!regExp.test(newValue)) {
              event.target.value = newValue.slice(0, -1);
            }
          }
          /**
           * Allow number key only allow Function
           * @create_by Rajarajeswari Oct 10, 2022
           * @modified by -
           * @since v0.45
           */

        }, {
          key: "onKeyUpNamePatternOnly",
          value: function onKeyUpNamePatternOnly(event) {
            var newValue = event.target.value;
            var regExp = new RegExp('^[0-9]+$');

            if (!regExp.test(newValue)) {
              event.target.value = newValue.slice(0, -1);
            }
          }
        }]);
      }();

      _ValidationsService.ctorParameters = function () {
        return [];
      };

      _ValidationsService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _ValidationsService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        awsApiUrl: "https://5388d2qb88.execute-api.ap-south-1.amazonaws.com/MobilePrd",
        civilapiBaseUrl: "https://sqs.ap-south-1.amazonaws.com/840620226347/MAppMonitoring",
        readFileUrl: "https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-listurl",
        writeFileUrl: "https://d8omnqcdi1.execute-api.ap-south-1.amazonaws.com/staging-resource-collection-mgmt/resource-collection-mgmt/resource-preurl",
        // Production
        // loginUrl: "https://emislogin.tnschools.gov.in/emis_login/api",
        // emisApiUrl: "https://emis4.tnschools.gov.in/api",
        // api_url: "https://emis4.tnschools.gov.in/api/", // for TNVN
        // emisApiUrl1: "https://emis1.tnschools.gov.in/api",
        // emisApiUrlJango1: "https://mobileapi.tnsed.com/api/mobile",
        emisApiUrlWeb: "https://emis1.tnschools.gov.in/api",
        // Stagging
        loginUrl: "https://tng2c2.tnschools.gov.in/emis_login/api",
        emisApiUrl: "https://tng2c2.tnschools.gov.in/emis4APICode/api",
        api_url: "https://tng2c2.tnschools.gov.in/emis4APICode/api/",
        emisApiUrl1: "https://tng2c2.tnschools.gov.in/emis4APICode/api",
        emisApiUrlJango1: "https://mobileapi-stage.tnsed.com/api/mobile",
        emisApiUrl3: "https://tng2c2.tnschools.gov.in/emis3APICode/api",
        tntpApiUrl: "https://tng2c2.tnschools.gov.in/emisschoolrepo/api",
        // ImgUrl:'https://d1mvc33dlzwoi9.cloudfront.net/',
        ImgUrl: "https://d24di8ui084m6v.cloudfront.net/",
        BaseLineJSONStaging: "question_type_staging_1.json",
        BaseLineJSONLive: "question_type_1.json",
        FormativeJSONStaging: "",
        FormativeJSONLive: "question_type_2.json",
        SummativeJSONLive: "question_type_4.json",
        tokenEndPoint: "/api/token",
        production: false,
        environment: "Local",
        showEnvironment: true,
        cwsn_asses_ques: "https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_asses_ques_stage_json.json",
        cwsn_intervensions_phase2: "https://d1wpyxz35bzzz4.cloudfront.net/cwsn/cwsn_intervensions_phase2_stage.json",
        cwsn_diff_able_json: "https://d1wpyxz35bzzz4.cloudfront.net/dif_able/cwsn_diff_able_staging_json.json"
      };
      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [86030, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    46700:
    /*!***************************************************!*\
      !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
      \***************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./af": 26431,
        "./af.js": 26431,
        "./ar": 81286,
        "./ar-dz": 1616,
        "./ar-dz.js": 1616,
        "./ar-kw": 9759,
        "./ar-kw.js": 9759,
        "./ar-ly": 43160,
        "./ar-ly.js": 43160,
        "./ar-ma": 62551,
        "./ar-ma.js": 62551,
        "./ar-ps": 51500,
        "./ar-ps.js": 51500,
        "./ar-sa": 79989,
        "./ar-sa.js": 79989,
        "./ar-tn": 6962,
        "./ar-tn.js": 6962,
        "./ar.js": 81286,
        "./az": 15887,
        "./az.js": 15887,
        "./be": 14572,
        "./be.js": 14572,
        "./bg": 3276,
        "./bg.js": 3276,
        "./bm": 93344,
        "./bm.js": 93344,
        "./bn": 58985,
        "./bn-bd": 83990,
        "./bn-bd.js": 83990,
        "./bn.js": 58985,
        "./bo": 94391,
        "./bo.js": 94391,
        "./br": 46728,
        "./br.js": 46728,
        "./bs": 5536,
        "./bs.js": 5536,
        "./ca": 41043,
        "./ca.js": 41043,
        "./cs": 70420,
        "./cs.js": 70420,
        "./cv": 33513,
        "./cv.js": 33513,
        "./cy": 6771,
        "./cy.js": 6771,
        "./da": 47978,
        "./da.js": 47978,
        "./de": 46061,
        "./de-at": 25204,
        "./de-at.js": 25204,
        "./de-ch": 2653,
        "./de-ch.js": 2653,
        "./de.js": 46061,
        "./dv": 85,
        "./dv.js": 85,
        "./el": 8579,
        "./el.js": 8579,
        "./en-au": 25724,
        "./en-au.js": 25724,
        "./en-ca": 10525,
        "./en-ca.js": 10525,
        "./en-gb": 52847,
        "./en-gb.js": 52847,
        "./en-ie": 67216,
        "./en-ie.js": 67216,
        "./en-il": 39305,
        "./en-il.js": 39305,
        "./en-in": 73364,
        "./en-in.js": 73364,
        "./en-nz": 79130,
        "./en-nz.js": 79130,
        "./en-sg": 11161,
        "./en-sg.js": 11161,
        "./eo": 50802,
        "./eo.js": 50802,
        "./es": 40328,
        "./es-do": 45551,
        "./es-do.js": 45551,
        "./es-mx": 75615,
        "./es-mx.js": 75615,
        "./es-us": 64790,
        "./es-us.js": 64790,
        "./es.js": 40328,
        "./et": 96389,
        "./et.js": 96389,
        "./eu": 52961,
        "./eu.js": 52961,
        "./fa": 26151,
        "./fa.js": 26151,
        "./fi": 7997,
        "./fi.js": 7997,
        "./fil": 58898,
        "./fil.js": 58898,
        "./fo": 37779,
        "./fo.js": 37779,
        "./fr": 28174,
        "./fr-ca": 3287,
        "./fr-ca.js": 3287,
        "./fr-ch": 38867,
        "./fr-ch.js": 38867,
        "./fr.js": 28174,
        "./fy": 50452,
        "./fy.js": 50452,
        "./ga": 45014,
        "./ga.js": 45014,
        "./gd": 74127,
        "./gd.js": 74127,
        "./gl": 72124,
        "./gl.js": 72124,
        "./gom-deva": 6444,
        "./gom-deva.js": 6444,
        "./gom-latn": 37953,
        "./gom-latn.js": 37953,
        "./gu": 76604,
        "./gu.js": 76604,
        "./he": 1222,
        "./he.js": 1222,
        "./hi": 74235,
        "./hi.js": 74235,
        "./hr": 622,
        "./hr.js": 622,
        "./hu": 37735,
        "./hu.js": 37735,
        "./hy-am": 90402,
        "./hy-am.js": 90402,
        "./id": 59187,
        "./id.js": 59187,
        "./is": 30536,
        "./is.js": 30536,
        "./it": 35007,
        "./it-ch": 94667,
        "./it-ch.js": 94667,
        "./it.js": 35007,
        "./ja": 62093,
        "./ja.js": 62093,
        "./jv": 80059,
        "./jv.js": 80059,
        "./ka": 66870,
        "./ka.js": 66870,
        "./kk": 80880,
        "./kk.js": 80880,
        "./km": 1083,
        "./km.js": 1083,
        "./kn": 68785,
        "./kn.js": 68785,
        "./ko": 21721,
        "./ko.js": 21721,
        "./ku": 37851,
        "./ku-kmr": 31385,
        "./ku-kmr.js": 31385,
        "./ku.js": 37851,
        "./ky": 1727,
        "./ky.js": 1727,
        "./lb": 40346,
        "./lb.js": 40346,
        "./lo": 93002,
        "./lo.js": 93002,
        "./lt": 64035,
        "./lt.js": 64035,
        "./lv": 56927,
        "./lv.js": 56927,
        "./me": 5634,
        "./me.js": 5634,
        "./mi": 94173,
        "./mi.js": 94173,
        "./mk": 86320,
        "./mk.js": 86320,
        "./ml": 11705,
        "./ml.js": 11705,
        "./mn": 31062,
        "./mn.js": 31062,
        "./mr": 92805,
        "./mr.js": 92805,
        "./ms": 11341,
        "./ms-my": 59900,
        "./ms-my.js": 59900,
        "./ms.js": 11341,
        "./mt": 37734,
        "./mt.js": 37734,
        "./my": 19034,
        "./my.js": 19034,
        "./nb": 9324,
        "./nb.js": 9324,
        "./ne": 46495,
        "./ne.js": 46495,
        "./nl": 70673,
        "./nl-be": 76272,
        "./nl-be.js": 76272,
        "./nl.js": 70673,
        "./nn": 72486,
        "./nn.js": 72486,
        "./oc-lnc": 46219,
        "./oc-lnc.js": 46219,
        "./pa-in": 2829,
        "./pa-in.js": 2829,
        "./pl": 78444,
        "./pl.js": 78444,
        "./pt": 53170,
        "./pt-br": 66117,
        "./pt-br.js": 66117,
        "./pt.js": 53170,
        "./ro": 96587,
        "./ro.js": 96587,
        "./ru": 39264,
        "./ru.js": 39264,
        "./sd": 42135,
        "./sd.js": 42135,
        "./se": 95366,
        "./se.js": 95366,
        "./si": 93379,
        "./si.js": 93379,
        "./sk": 46143,
        "./sk.js": 46143,
        "./sl": 196,
        "./sl.js": 196,
        "./sq": 21082,
        "./sq.js": 21082,
        "./sr": 91621,
        "./sr-cyrl": 98963,
        "./sr-cyrl.js": 98963,
        "./sr.js": 91621,
        "./ss": 41404,
        "./ss.js": 41404,
        "./sv": 55685,
        "./sv.js": 55685,
        "./sw": 3872,
        "./sw.js": 3872,
        "./ta": 54106,
        "./ta.js": 54106,
        "./te": 39204,
        "./te.js": 39204,
        "./tet": 83692,
        "./tet.js": 83692,
        "./tg": 86361,
        "./tg.js": 86361,
        "./th": 31735,
        "./th.js": 31735,
        "./tk": 1568,
        "./tk.js": 1568,
        "./tl-ph": 96129,
        "./tl-ph.js": 96129,
        "./tlh": 13759,
        "./tlh.js": 13759,
        "./tr": 81644,
        "./tr.js": 81644,
        "./tzl": 90875,
        "./tzl.js": 90875,
        "./tzm": 16878,
        "./tzm-latn": 11041,
        "./tzm-latn.js": 11041,
        "./tzm.js": 16878,
        "./ug-cn": 74357,
        "./ug-cn.js": 74357,
        "./uk": 74810,
        "./uk.js": 74810,
        "./ur": 86794,
        "./ur.js": 86794,
        "./uz": 28966,
        "./uz-latn": 77959,
        "./uz-latn.js": 77959,
        "./uz.js": 28966,
        "./vi": 35386,
        "./vi.js": 35386,
        "./x-pseudo": 23156,
        "./x-pseudo.js": 23156,
        "./yo": 68028,
        "./yo.js": 68028,
        "./zh-cn": 9330,
        "./zh-cn.js": 9330,
        "./zh-hk": 89380,
        "./zh-hk.js": 89380,
        "./zh-mo": 60874,
        "./zh-mo.js": 60874,
        "./zh-tw": 96508,
        "./zh-tw.js": 96508
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = 46700;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    87558:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/commonpages/common-pdf/common-pdf.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backButton {\n  color: white;\n}\n\n.txtalignCenSelf {\n  text-align: center;\n  align-self: center;\n}\n\n.txtLeftalign {\n  text-align: left;\n}\n\n.txtmargin {\n  margin: auto;\n}\n\nion-grid {\n  padding: 3%;\n}\n\n.back-icon {\n  margin-right: 15px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.liked, .disliked {\n  font-weight: bold;\n  color: #1565c0;\n}\n\npdf-viewer {\n  height: calc(100vh - 375px);\n  display: block;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.ion-text-wrap {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1wZGYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7QUFJSjs7QUFGRTtFQUNFLFdBQUE7QUFLSjs7QUFIRTtFQUNFLGtCQUFBO0FBTUo7O0FBSEU7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFLSjs7QUFGRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUZFO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBS047O0FBSEU7RUFBYSwyQkFBQTtFQUE2QixjQUFBO0FBUTVDOztBQVBFO0VBQ0UscUJBQUE7QUFVSjs7QUFQRTtFQUNFLGlCQUFBO0FBVUoiLCJmaWxlIjoiY29tbW9uLXBkZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja0J1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC50eHRhbGlnbkNlblNlbGYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAudHh0TGVmdGFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC50eHRtYXJnaW4ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICBpb24tZ3JpZHtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gIH1cclxuICAuYmFjay1pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHggO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5saWtlZCwgLmRpc2xpa2VkIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMTU2NWMwO1xyXG4gIH1cclxuICBwZGYtdmlld2VyIHsgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzc1cHgpOyBkaXNwbGF5OiBibG9jazsgfVxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW9uLXRleHQtd3JhcHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    60369:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/commonpages/view-image/view-image.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  padding: 16px;\n  margin-top: 30px;\n}\n\n.main img {\n  /* max-width: 100%; */\n  height: auto;\n}\n\n.button {\n  width: 300px;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFFTjs7QUFBRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoidmlldy1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLm1haW4gaW1nIHtcclxuICAgICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    38862:
    /*!******************************************************!*\
      !*** ./src/app/pages/rc/view-pdf/view-pdf.page.scss ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backButton {\n  color: white;\n}\n\n.txtalignCenSelf {\n  text-align: center;\n  align-self: center;\n}\n\n.txtLeftalign {\n  text-align: left;\n}\n\n.txtmargin {\n  margin: auto;\n}\n\nion-grid {\n  padding: 3%;\n}\n\n.back-icon {\n  margin-right: 15px;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n.liked, .disliked {\n  font-weight: bold;\n  color: #1565c0;\n}\n\npdf-viewer {\n  height: calc(100vh - 375px);\n  display: block;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.ion-text-wrap {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctcGRmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxXQUFBO0FBS0o7O0FBSEU7RUFDRSxrQkFBQTtBQU1KOztBQUhFO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBS0o7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFJRTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUROOztBQUdFO0VBQWEsMkJBQUE7RUFBNkIsY0FBQTtBQUU1Qzs7QUFERTtFQUNFLHFCQUFBO0FBSUo7O0FBREU7RUFDRSxpQkFBQTtBQUlKIiwiZmlsZSI6InZpZXctcGRmLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrQnV0dG9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLnR4dGFsaWduQ2VuU2VsZiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50eHRMZWZ0YWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLnR4dG1hcmdpbiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIGlvbi1ncmlke1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgfVxyXG4gIC5iYWNrLWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTVweCA7XHJcbiAgfVxyXG5cclxuICAjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgLmxpa2UtYnV0dG9uLCAuZGlzbGlrZS1idXR0b24ge1xyXG4gICAgLy8gICBmb250LXNpemU6IDFyZW07XHJcbiAgICAvLyAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgLy8gICBjb2xvcjogICAjNTg1ODU4O1xyXG4gIH1cclxuICBcclxuICAubGlrZWQsIC5kaXNsaWtlZCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzE1NjVjMDtcclxuICB9XHJcbiAgcGRmLXZpZXdlciB7IGhlaWdodDogY2FsYygxMDB2aCAtIDM3NXB4KTsgZGlzcGxheTogYmxvY2s7IH1cclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXdyYXB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n  <ion-menu contentId=\"main-content\" id=\"menu-material\" side=\"start\">\r\n    \r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title style=\"padding-left: 15px;\">Menu</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <div class=\"menu-header\">\r\n      </div>\r\n      <ion-list lines=\"none\">        \r\n        <ion-item>\r\n          <div class=\"select_box\">\r\n            <select [(ngModel)]=\"languageType\" (change)=\"mySelectHandler()\" [disabled]=\"this.isDisabled\">\r\n              <option value=\"en\">English</option>\r\n              <option value=\"ta\">Tamil</option>\r\n            </select>\r\n          </div>\r\n        </ion-item>\r\n        <ion-item (click)=\"downloadOmr()\">\r\n          <ion-icon slot=\"start\" name=\"download\"></ion-icon>\r\n          <ion-label>\r\n              Download OMR Answer Sheet\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"downloadExlWithPermission(1)\" *ngIf=\"checkModVal('73')\">\r\n          <ion-icon slot=\"start\" name=\"download\"></ion-icon>\r\n          <ion-label>\r\n              Download MHT Sheet\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"downloadExlWithPermission(2)\" *ngIf=\"checkModVal('12')\">\r\n          <ion-icon slot=\"start\" name=\"download\"></ion-icon>\r\n          <ion-label>\r\n              Download PMOA Sheet\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item (click)=\"downloadExlWithPermission(2)\" *ngIf=\"checkModVal('73')\">\r\n          <ion-icon slot=\"start\" name=\"download\"></ion-icon>\r\n          <ion-label>\r\n              Download AWC Sheet\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n\r\n        <!-- <ion-item (click)=\"downloadOmr()\">\r\n          <ion-icon slot=\"start\" name=\"download\"></ion-icon>\r\n          <ion-label>\r\n             Download MHT Overall Report\r\n          </ion-label>\r\n        </ion-item> -->\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n</ion-split-pane>\r\n<ng-http-loader backgroundColor=\"#8B67B3\"></ng-http-loader> \r\n</ion-app>\r\n\r\n";
      /***/
    },

    /***/
    16205:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/common-pdf/common-pdf.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">View Pdf</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.0\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"graybackgrond\">\r\n  <!-- <div id=\"outerContainer\"> -->\r\n  <div class=\"pdf-container\">\r\n    <pdf-viewer [src]=\"src\" [fit-to-page]=\"true\" [zoom]=\"zoom\" [original-size]=\"true\"  [render-text]=\"false\" style=\"display: block; width: 100%; height: 100% !important;\"></pdf-viewer>\r\n  </div>\r\n<!-- </div> -->\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <div class=\"footer-txt\" >\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-icon name=\"remove-outline\" (click)=\"incrementZoom(-0.1)\"></ion-icon>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n        <ion-icon name=\"add-outline\" (click)=\"incrementZoom(0.1)\"></ion-icon>\r\n    </ion-col> \r\n    </ion-row>\r\n  </div>\r\n</ion-footer>\r\n\r\n\r\n";
      /***/
    },

    /***/
    92844:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/view-image/view-image.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">View Image</div>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"graybackgrond\">\r\n  <!-- <div>\r\n    <ion-item>\r\n      <!-- <ion-label position=\"floating\" color=\"primary\" style=\"font-size:16px\">Uploaded Image\r\n      </ion-label> -->\r\n    <!--  <div class=\"main\">\r\n      <img id=\"map\" src=\"{{imageURL}}\" alt=\"zoom it\" class=\"img image\">\r\n    </div>\r\n    </ion-item>\r\n  </div> -->\r\n\r\n  <ion-slides [options]=\"sliderOpt\" zoom>\r\n    <ion-slide>\r\n      <div class=\"swiper-zoom-container\">\r\n         <img  id=\"map\" src=\"{{imageURL}}\" />\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <div id=\"navbar\" style=\"display: flex;justify-content: space-evenly;margin-top: 20px;\">\r\n    <button type=\"button\" (click)=\"zoomin()\"> Zoom In</button>\r\n    <button type=\"button\" (click)=\"zoomout()\"> Zoom Out</button>\r\n  </div>\r\n \r\n  <!-- <div id=\"navbar\">\r\n    <button type=\"button\" (click)=\"zoomin()\"> Zoom In</button>\r\n    <button type=\"button\" (click)=\"zoomout()\"> Zoom Out</button>\r\n    </div> -->\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    99251:
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rc/view-pdf/view-pdf.page.html ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">View Pdf</div>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.0\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  class=\"graybackgrond\">\r\n  \r\n  <div id=\"outerContainer\">\r\n  <div class=\"pdf-container\">\r\n    <pdf-viewer *ngIf=\"this.ext == 'pdf'\" src=\"{{src}}\" [fit-to-page]=\"true\" [zoom]=\"zoom\" [original-size]=\"true\"  [render-text]=\"false\" style=\"display: block; width: 100%; height: 800px;\"></pdf-viewer>\r\n    <img *ngIf=\"this.ext == 'jpg' || 'jpeg'\" src=\"{{src}}\" class=\"img image\">\r\n  </div>\r\n</div>\r\n\r\n  <!-- <iframe style=\"width: 100%; height: 100%;\"  [src]=\"src\" frameborder=\"0\" allowfullscreen></iframe> -->\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"\" >\r\n  <div class=\"footer-txt\" >\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n      <button ion-button  >\r\n        <ion-icon name=\"remove-outline\" (click)=\"incrementZoom(-0.1)\"></ion-icon>\r\n       </button> \r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <button ion-button >\r\n        <ion-icon name=\"add-outline\" (click)=\"incrementZoom(0.1)\"></ion-icon>\r\n      </button>\r\n    </ion-col> \r\n\r\n      <!-- <ion-col size=\"3\">\r\n        <ion-icon name=\"thumbs-up\" [ngClass]=\"{'like-button': true, 'liked': (likeState === 'liked')}\" (click)=\"incrementLike()\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"3\">\r\n        <ion-icon name=\"thumbs-down\" [ngClass]=\"{'dislike-button': true, 'disliked': (likeState === 'disliked')}\" (click)=\"incrementDisLike()\"></ion-icon> \r\n      </ion-col> -->\r\n    </ion-row>\r\n    <!-- <ion-row style=\"margin: 12px;\">\r\n      <ion-col size=\"12\">\r\n        <div style=\"font-size: 14px;text-align: left;\">\r\n          <ion-label>\r\n            Comments\r\n          </ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\"  style=\"border: 1px solid lightgray;\">\r\n        <ion-row>\r\n          <ion-col size=\"10\">\r\n            <div>\r\n              <ion-input style=\"text-align: left\" maxLength=\"200\" [multiple]=\"true\" [(ngModel)]=\"comment\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <div style=\"background-color: #1565c0;padding: 10px;color: white;border-radius: 5px;\" (click)=\"saveCmts()\" >\r\n              <ion-icon name=\"arrow-forward\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size-md = \"12\">\r\n        <ion-textarea class = \"italic\" rows=\"10\" cols=\"5\" maxlength = \"200\" placeholder=\"Enter your comments\"  [(ngModel)]=\"postFeedback.explanation\"></ion-textarea>\r\n     </ion-col>\r\n\r\n\r\n    </ion-row> -->\r\n  </div>\r\n</ion-footer>";
      /***/
    },

    /***/
    36599:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    35358:
    /*!**********************!*\
      !*** http (ignored) ***!
      \**********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    61822:
    /*!***********************!*\
      !*** https (ignored) ***!
      \***********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    31127:
    /*!*********************!*\
      !*** url (ignored) ***!
      \*********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    33074:
    /*!**********************!*\
      !*** zlib (ignored) ***!
      \**********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map