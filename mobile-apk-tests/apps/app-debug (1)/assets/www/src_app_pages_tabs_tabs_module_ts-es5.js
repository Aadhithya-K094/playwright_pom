(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tabs_tabs_module_ts"], {
    /***/
    45148:
    /*!************************************************************!*\
      !*** ./src/app/pages/tabs/switch-user/switch-user.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SwitchUserPage": function SwitchUserPage() {
          return (
            /* binding */
            _SwitchUserPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_switch_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./switch-user.page.html */
      1545);
      /* harmony import */


      var _switch_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./switch-user.page.scss */
      43724);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/data.service */
      52468);
      /* harmony import */


      var src_app_models_usersession__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/models/usersession */
      58034);

      var _SwitchUserPage = /*#__PURE__*/function () {
        function SwitchUserPage(modalCtrl, navParams, userSessionService, auth, router, activeRoute, sqliteDB, emisService, ionicstorage, ionicStorage, dataService) {
          _classCallCheck(this, SwitchUserPage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.userSessionService = userSessionService;
          this.auth = auth;
          this.router = router;
          this.activeRoute = activeRoute;
          this.sqliteDB = sqliteDB;
          this.emisService = emisService;
          this.ionicstorage = ionicstorage;
          this.ionicStorage = ionicStorage;
          this.dataService = dataService;
          this.sessionData = new src_app_models_usersession__WEBPACK_IMPORTED_MODULE_8__.UserSession();
          this.userList = this.navParams.get('schoolClassData');
          this.teacher_id = this.userSessionService.teacher_id();
        }

        return _createClass(SwitchUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.ionicstorage.getData('userInfo').then(function (dataa) {
              _this.token = dataa.token;
              console.log(_this.token);
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "clearCachedMenu",
          value: function clearCachedMenu() {
            this.dataService.clearCache();
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "switchUser",
          value: function switchUser(userid) {
            var _this2 = this;

            console.log(userid);
            var data = {
              'records': {
                'emis_username': userid,
                'token': this.token
              }
            };
            var userName = window.localStorage.getItem('username');
            var password = window.localStorage.getItem('password');
            window.localStorage.clear();
            this.sqliteDB.removeDatabase();
            this.userSessionService.destroy();
            window.localStorage.setItem('username', userName);
            window.localStorage.setItem('password', password);
            this.router.navigate(['/login']);
            this.ionicStorage.forEach(function (value, key, index) {
              if (key != "studentListBy_school_id" && key != "teacherListBy_school_id" && key != "currentSchool_id" && key != "learning_outcome" && key != 'store_observation' && key != 'learningOutcomeQues' && key != 'schoolListBy_District_id' && key != 'observation_list') {
                _this2.ionicStorage.remove(key);

                console.log("r", key);
              }
            });
            this.auth.validateAttendance(data, 2);
            this.closeModal();
          }
        }]);
      }();

      _SwitchUserPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavParams
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__.Storage
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService
        }];
      };

      _SwitchUserPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-switch-user',
        template: _raw_loader_switch_user_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_switch_user_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SwitchUserPage);
      /***/
    },

    /***/
    15448:
    /*!***************************************************!*\
      !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageRoutingModule": function TabsPageRoutingModule() {
          return (
            /* binding */
            _TabsPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _commonpages_home_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../commonpages/home/home.page */
      55688);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page */
      64101);

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
        children: [{
          path: '',
          component: _commonpages_home_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
        }, {
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
            /*! ../commonpages/home/home.module */
            64822)).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_commonpages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../commonpages/dashboard/dashboard.module */
            64819)).then(function (m) {
              return m.DashboardPageModule;
            });
          }
        }, //EE
        {
          path: 'module-menu',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_module-menu_module-menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/module-menu/module-menu.module */
            36491)).then(function (m) {
              return m.ModuleMenuPageModule;
            });
          }
        }, {
          path: 'thankyou',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ennum-ezhuthum-truthing_pages_congratulation_congratulation_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/congratulation/congratulation.module */
            72501)).then(function (m) {
              return m.CongratulationPageModule;
            });
          }
        }, {
          path: 'menu',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_menu_menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/menu/menu.module */
            97941)).then(function (m) {
              return m.MenuPageModule;
            });
          }
        }, {
          path: 'school-observation',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_school-observation_school-observation_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/school-observation/school-observation.module */
            49096)).then(function (m) {
              return m.SchoolObservationPageModule;
            });
          }
        }, {
          path: 'summative-questions/:id/:sub',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_summative-questions_summative-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.module */
            78066)).then(function (m) {
              return m.SummativeQuestionsPageModule;
            });
          }
        }, {
          path: 'summative-class-selection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_summative-class-selection_summative-class-selecti-81fc52")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.module */
            98335)).then(function (m) {
              return m.SummativeClassSelectionPageModule;
            });
          }
        }, {
          path: 'summative-student',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("default-node_modules_dom-to-image_src_dom-to-image_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_summative-student_summative-student_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/summative-student/summative-student.module */
            60981)).then(function (m) {
              return m.SummativeStudentPageModule;
            });
          }
        }, {
          path: 'summative-questions/:id/:sub',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_summative-questions_summative-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/summative-questions/summative-questions.module */
            78066)).then(function (m) {
              return m.SummativeQuestionsPageModule;
            });
          }
        }, {
          path: 'summative-report',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("default-node_modules_dom-to-image_src_dom-to-image_js"), __webpack_require__.e("default-node_modules_chart_js_auto_auto_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_summative-report_summative-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/summative-report/summative-report.module */
            51767)).then(function (m) {
              return m.SummativeReportPageModule;
            });
          }
        }, // Civil
        {
          path: 'civilbuildinglist',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_civilbuildinglist_civilbuildinglist_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/civilbuildinglist/civilbuildinglist.module */
            54703)).then(function (m) {
              return m.CivilbuildinglistPageModule;
            });
          }
        }, {
          path: 'inspectiondetails',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_inspectiondetails_inspectiondetails_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/inspectiondetails/inspectiondetails.module */
            5144)).then(function (m) {
              return m.InspectiondetailsPageModule;
            });
          }
        }, {
          path: 'primary-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil-evaluation_primary-questions_primary-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil-evaluation/primary-questions/primary-questions.module */
            93596)).then(function (m) {
              return m.PrimaryQuestionsPageModule;
            });
          }
        }, {
          path: 'civilevaldashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil-evaluation_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil-evaluation/dashboard/dashboard.module */
            11254)).then(function (m) {
              return m.DashboardPageModule;
            });
          }
        }, {
          path: 'tnvntabs',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_tnvntabs_tnvntabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../tnvntabs/tnvntabs.module */
            20756)).then(function (m) {
              return m.TnvntabsPageModule;
            });
          }
        }, {
          path: 'secondary-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil-evaluation_secondary-questions_secondary-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil-evaluation/secondary-questions/secondary-questions.module */
            19637)).then(function (m) {
              return m.SecondaryQuestionsPageModule;
            });
          }
        }, {
          path: 'school-inspection',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_school-inspection_school-inspection_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/school-inspection/school-inspection.module */
            78683)).then(function (m) {
              return m.SchoolInspectionPageModule;
            });
          }
        }, {
          path: 'establishment',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_establishment_establishment_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/establishment/establishment.module */
            74535)).then(function (m) {
              return m.EstablishmentPageModule;
            });
          }
        }, {
          path: 'land-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_land-details_land-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/land-details/land-details.module */
            97312)).then(function (m) {
              return m.LandDetailsPageModule;
            });
          }
        }, {
          path: 'endowment-fund',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_endowment-fund_endowment-fund_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/endowment-fund/endowment-fund.module */
            52186)).then(function (m) {
              return m.EndowmentFundPageModule;
            });
          }
        }, {
          path: 'inspection',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_inspection_inspection_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/inspection/inspection.module */
            394)).then(function (m) {
              return m.InspectionPageModule;
            });
          }
        }, {
          path: 'regulator-section',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_regulator-section_regulator-section_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/regulator-section/regulator-section.module */
            486)).then(function (m) {
              return m.RegulatorSectionPageModule;
            });
          }
        }, {
          path: 'renewal-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_renewal-details_renewal-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/renewal-details/renewal-details.module */
            35988)).then(function (m) {
              return m.RenewalDetailsPageModule;
            });
          }
        }, {
          path: 'student-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_student-details_student-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/student-details/student-details.module */
            75889)).then(function (m) {
              return m.StudentDetailsPageModule;
            });
          }
        }, {
          path: 'staff-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_civil_civil_RCI_staff-details_staff-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../civil/civil/RCI/staff-details/staff-details.module */
            40542)).then(function (m) {
              return m.StaffDetailsPageModule;
            });
          }
        }, // mht by dinesh S
        {
          path: 'school-list-mht',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_mht_school-list_school-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/school-list/school-list.module */
            25752)).then(function (m) {
              return m.SchoolListPageModule;
            });
          }
        }, {
          path: 'class-student-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_mht_class-student-list_class-student-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/class-student-list/class-student-list.module */
            57870)).then(function (m) {
              return m.ClassStudentListPageModule;
            });
          }
        }, {
          path: 'student-from',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_mht_student-from_student-from_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/student-from/student-from.module */
            56418)).then(function (m) {
              return m.StudentFromPageModule;
            });
          }
        }, {
          path: 'class-section',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_mht_class-section_class-section_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/class-section/class-section.module */
            26909)).then(function (m) {
              return m.ClassSectionPageModule;
            });
          }
        }, {
          path: 'section-list-mht',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_mht_section-list_section-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/section-list/section-list.module */
            20538)).then(function (m) {
              return m.SectionListPageModule;
            });
          }
        }, {
          path: 'mht-class-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_mht_mht-class-list_mht-class-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/mht-class-list/mht-class-list.module */
            71178)).then(function (m) {
              return m.MhtClassListPageModule;
            });
          }
        }, {
          path: 'health-check-up-answer',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_pages_commonpages_dynamic-form-table_dynamic-form-table_module_ts"), __webpack_require__.e("default-src_app_pages_mht_health-check-up-answer_health-check-up-answer_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/health-check-up-answer/health-check-up-answer.module */
            88778)).then(function (m) {
              return m.HealthCheckUpAnswerPageModule;
            });
          }
        }, // RC by Dheepesh
        {
          path: 'rc-tablelist',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_rc_rc-tablelist_rc-tablelist_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../rc/rc-tablelist/rc-tablelist.module */
            31985)).then(function (m) {
              return m.RCTablelistPageModule;
            });
          }
        }, {
          path: 'index',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_rc_index_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../rc/index/index.module */
            59766)).then(function (m) {
              return m.IndexPageModule;
            });
          }
        }, {
          path: 'rc-grant-form',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_rc_rc-grant-form_rc-grant-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../rc/rc-grant-form/rc-grant-form.module */
            22683)).then(function (m) {
              return m.RCGrantFormPageModule;
            });
          }
        }, {
          path: 'view-pdf',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_rc_view-pdf_view-pdf_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../rc/view-pdf/view-pdf.module */
            33706)).then(function (m) {
              return m.ViewPdfPageModule;
            });
          }
        }, // Dynamic form by shahul
        {
          path: 'dynamic-table-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dynamic-form-generator_dynamic-tablelist_dynamic-tablelist_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../dynamic-form-generator/dynamic-tablelist/dynamic-tablelist.module */
            99464)).then(function (m) {
              return m.DynamicTablelistPageModule;
            });
          }
        }, {
          path: 'dynamic-index',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dynamic-form-generator_index_index_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../dynamic-form-generator/index/index.module */
            86374)).then(function (m) {
              return m.IndexPageModule;
            });
          }
        }, {
          path: 'dynamic-form',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dynamic-form-generator_dynamic-form_dynamic-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../dynamic-form-generator/dynamic-form/dynamic-form.module */
            89814)).then(function (m) {
              return m.DynamicFormPageModule;
            });
          }
        }, {
          path: 'form-view-pdf',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dynamic-form-generator_view-pdf_view-pdf_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../dynamic-form-generator/view-pdf/view-pdf.module */
            53840)).then(function (m) {
              return m.ViewPdfPageModule;
            });
          }
        }, // Leave by Rajarajeshwari
        {
          path: 'e-sr',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_e-sr_e-sr_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/e-sr/e-sr.module */
            89639)).then(function (m) {
              return m.ESrPageModule;
            });
          }
        }, {
          path: 'myprofile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_profile_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/profile/profile/profile.module */
            25804)).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_profile_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/profile/settings/settings.module */
            53872)).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }, {
          path: 'leave',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leave_leave_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leave/leave.module */
            91143)).then(function (m) {
              return m.LeavePageModule;
            });
          }
        }, {
          path: 'leavehistory',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leavehistory_leavehistory_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leavehistory/leavehistory.module */
            32723)).then(function (m) {
              return m.LeavehistoryPageModule;
            });
          }
        }, {
          path: 'leave-approval-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leave-approval-list_leave-approval-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leave-approval-list/leave-approval-list.module */
            78164)).then(function (m) {
              return m.LeaveApprovalListPageModule;
            });
          }
        }, {
          path: 'leave-approval-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leave-approval-details_leave-approval-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leave-approval-details/leave-approval-details.module */
            43169)).then(function (m) {
              return m.LeaveApprovalDetailsPageModule;
            });
          }
        }, {
          path: 'know-your-leaves',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_know-your-leaves_know-your-leaves_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/know-your-leaves/know-your-leaves.module */
            50816)).then(function (m) {
              return m.KnowYourLeavesPageModule;
            });
          }
        }, // OOSC by Rajarajeshwari
        {
          path: 'oosctype',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_oosc_oosctype_oosctype_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/oosctype/oosctype.module */
            26497)).then(function (m) {
              return m.OosctypePageModule;
            });
          }
        }, {
          path: 'ooscsurvey',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_oosc_ooscsurvey_ooscsurvey_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/ooscsurvey/ooscsurvey.module */
            84968)).then(function (m) {
              return m.OoscsurveyPageModule;
            });
          }
        }, {
          path: 'ooscquestions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_oosc_ooscquestions_ooscquestions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/ooscquestions/ooscquestions.module */
            26401)).then(function (m) {
              return m.OoscquestionsPageModule;
            });
          }
        }, {
          path: 'other-district-survey',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_oosc_other-district-survey_other-district-survey_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/other-district-survey/other-district-survey.module */
            27335)).then(function (m) {
              return m.OtherDistrictSurveyPageModule;
            });
          }
        }, {
          path: 'never-enrollment-stu-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_oosc_never-enrollment-stu-list_never-enrollment-stu-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/never-enrollment-stu-list/never-enrollment-stu-list.module */
            24362)).then(function (m) {
              return m.NeverEnrollmentStuListPageModule;
            });
          }
        }, // OOSC by Priya
        {
          path: 'ooscnewsurvey',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_oosc_ooscnewsurvey_ooscnewsurvey_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/ooscnewsurvey/ooscnewsurvey.module */
            56946)).then(function (m) {
              return m.OoscnewsurveyPageModule;
            });
          }
        }, // HOD by Priya
        {
          path: 'questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_hod_questions_questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../hod/questions/questions.module */
            87890)).then(function (m) {
              return m.QuestionsPageModule;
            });
          }
        }, {
          path: 'school-info',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_hod_school-info_school-info_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../hod/school-info/school-info.module */
            81252)).then(function (m) {
              return m.SchoolInfoPageModule;
            });
          }
        }, // SIDS by Abdullah
        {
          path: 'newroom-general-question',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_sids_building_new-roomquestions_new-roomquestions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/new-roomquestions/new-roomquestions.module */
            46964)).then(function (m) {
              return m.NewRoomquestionsPageModule;
            });
          }
        }, {
          path: 'sids-school',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_sids-school_sids-school_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/sids-school/sids-school.module */
            69423)).then(function (m) {
              return m.SidsSchoolPageModule;
            });
          }
        }, // {
        //   path: 'visit-list',
        //   loadChildren: () => import('../sids/visit-list/visit-list.module').then(m => m.VisitListPageModule)
        // },
        {
          path: 'new-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_building_new-dashboard_new-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/new-dashboard/new-dashboard.module */
            79693)).then(function (m) {
              return m.NewDashboardPageModule;
            });
          }
        }, {
          path: 'sids-common-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_dashboard_common-dashboard_common-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/dashboard/common-dashboard/common-dashboard.module */
            92616)).then(function (m) {
              return m.CommonDashboardPageModule;
            });
          }
        }, {
          path: 'sids-schooldata',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_sids_general_schooldata_schooldata_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/general/schooldata/schooldata.module */
            99485)).then(function (m) {
              return m.SchooldataPageModule;
            });
          }
        }, {
          path: 'sids-commonspaces',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_general_commonspaces_commonspaces_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/general/commonspaces/commonspaces.module */
            3259)).then(function (m) {
              return m.CommonspacesPageModule;
            });
          }
        }, {
          path: 'new-floorquestions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_building_new-floorquestions_new-floorquestions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/new-floorquestions/new-floorquestions.module */
            15878)).then(function (m) {
              return m.NewFloorquestionsPageModule;
            });
          }
        }, {
          path: 'new-buildingquestions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_sids_building_new-buildingquestions_new-buildingquestions_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/new-buildingquestions/new-buildingquestions.module */
            38714)).then(function (m) {
              return m.NewBuildingquestionsPageModule;
            });
          }
        }, {
          path: 'inspection-selection',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_inspection-selection_inspection-selection_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/inspection-selection/inspection-selection.module */
            83571)).then(function (m) {
              return m.InspectionSelectionPageModule;
            });
          }
        }, {
          path: 'building-closing-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_building_building-closing-questions_building-closing-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/building-closing-questions/building-closing-questions.module */
            88774)).then(function (m) {
              return m.BuildingClosingQuestionsPageModule;
            });
          }
        }, {
          path: 'floor-closing-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_building_floor-closing-questions_floor-closing-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/floor-closing-questions/floor-closing-questions.module */
            90305)).then(function (m) {
              return m.FloorClosingQuestionsPageModule;
            });
          }
        }, {
          path: 'my-inspection-sids',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_myinspection_myinspection_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/myinspection/myinspection.module */
            61992)).then(function (m) {
              return m.MyinspectionPageModule;
            });
          }
        }, // BRC / CRC training
        {
          path: 'training-attendance',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_training_training-attendance_training-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../training/training-attendance/training-attendance.module */
            81759)).then(function (m) {
              return m.TrainingAttendancePageModule;
            });
          }
        }, {
          path: 'saveddata',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_training_saveddata_saveddata_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../training/saveddata/saveddata.module */
            87038)).then(function (m) {
              return m.SaveddataPageModule;
            });
          }
        }, // Menus
        {
          path: 'nearby-school',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_menus_school-search_nearby-school_nearby-school_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../menus/school-search/nearby-school/nearby-school.module */
            41789)).then(function (m) {
              return m.NearbySchoolPageModule;
            });
          }
        }, {
          path: 'school-data',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_menus_school-search_school-data_school-data_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../menus/school-search/school-data/school-data.module */
            61349)).then(function (m) {
              return m.SchoolDataPageModule;
            });
          }
        }, // Statistics
        {
          path: 'statistic',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_statistics_statistic_statistic_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../statistics/statistic/statistic.module */
            98856)).then(function (m) {
              return m.StatisticPageModule;
            });
          }
        }, // Comming soon
        {
          path: 'cooming',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_commonpages_cooming_cooming_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../commonpages/cooming/cooming.module */
            89039)).then(function (m) {
              return m.CoomingPageModule;
            });
          }
        }, // CWSN 
        {
          path: 'cwsn/profile/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/profile/profile.module */
            64798)).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'cwsn/cluster',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_cluster_cluster_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/cluster/cluster.module */
            54094)).then(function (m) {
              return m.ClusterPageModule;
            });
          }
        }, {
          path: 'cwsn/student-detail/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_student-details_student-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/student-details/student-details.module */
            73776)).then(function (m) {
              return m.StudentDetailsPageModule;
            });
          }
        }, {
          path: 'cwsn/disability-screening/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_pages_commonpages_dynamic-form-table_dynamic-form-table_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/disability-screening/disability-screening.module */
            40042)).then(function (m) {
              return m.DisabilityScreeningPageModule;
            });
          }
        }, {
          path: 'cwsn/summary-list-cwsn/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_class-list_class-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/class-list/class-list.module */
            24860)).then(function (m) {
              return m.SummaryListCwsnPageModule;
            });
          }
        }, {
          path: 'cwsn/profile/:id',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/profile/profile.module */
            64798)).then(function (m) {
              return m.ProfileModule;
            });
          }
        }, {
          path: 'cwsn/ca-cluster',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_ca-cluster_ca-cluster_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/ca-cluster/ca-cluster.module */
            23784)).then(function (m) {
              return m.CAClusterPageModule;
            });
          }
        }, {
          path: 'cwsn/ca-school-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_cwsn-phase2_ca-school-list_ca-school-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/ca-school-list/ca-school-list.module */
            31541)).then(function (m) {
              return m.CASchoolListPageModule;
            });
          }
        }, {
          path: 'cwsn/class-student-list/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("default-src_app_pages_commonpages_dynamic-form-table_dynamic-form-table_module_ts"), __webpack_require__.e("default-src_app_pages_mht_health-check-up-answer_health-check-up-answer_module_ts"), __webpack_require__.e("src_app_pages_cwsn_class-student-list_class-student-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/class-student-list/class-student-list.module */
            41234)).then(function (m) {
              return m.ClassStudentListPageModule;
            });
          }
        }, {
          path: 'cwsn/student-list/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cwsn_student-list_student-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/student-list/student-list.module */
            6761)).then(function (m) {
              return m.StudentListPageModule;
            });
          }
        }, {
          path: 'cwsn/circular',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_circular_circular_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/circular/circular.module */
            44401)).then(function (m) {
              return m.CircularPageModule;
            });
          }
        }, {
          path: 'cwsn/my-students',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_myStudents_my-students_my-students_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/myStudents/my-students/my-students.module */
            28658)).then(function (m) {
              return m.MyStudentsPageModule;
            });
          }
        }, {
          path: 'cwsn/clsroom-observation',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_clsroom-observation_clsroom-observation_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/clsroom-observation/clsroom-observation.module */
            6388)).then(function (m) {
              return m.ClsroomObservationPageModule;
            });
          }
        }, {
          path: 'cwsn/dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_pages_commonpages_dynamic-form-table_dynamic-form-table_module_ts"), __webpack_require__.e("default-src_app_pages_mht_health-check-up-answer_health-check-up-answer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cwsn_cwsn-dashboard_cwsn-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/cwsn-dashboard/cwsn-dashboard.module */
            81330)).then(function (m) {
              return m.CwsnDashboardPageModule;
            });
          }
        }, {
          path: 'cwsn/class-list2',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_class-list2_class-list2_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/class-list2/class-list2.module */
            46256)).then(function (m) {
              return m.ClassList2PageModule;
            });
          }
        }, {
          path: 'cwsn/school-list-cwsn/:id',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_cwsn_school-list_school-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/school-list/school-list.module */
            67923)).then(function (m) {
              return m.SpecialEducatorsPageModule;
            });
          }
        }, {
          path: 'tnvnmyinspection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_dom-to-image_src_dom-to-image_js"), __webpack_require__.e("src_app_pages_menus_inspection-report_inspectionreport_inspection-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../menus/inspection-report/inspectionreport/inspection-report.module */
            38403)).then(function (m) {
              return m.inspectionReportPageModule;
            });
          }
        }, // {
        //   path: 'myinspection',
        //   loadChildren: () => import('../menus/inspection-report/inspectionreport/inspection-report.module').then(m => m.inspectionReportPageModule)
        // },
        {
          path: 'call-hm',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_menus_hm-search_call-hm_call-hm_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../menus/hm-search/call-hm/call-hm.module */
            56512)).then(function (m) {
              return m.CallHmPageModule;
            });
          }
        }, {
          path: 'callhm-tntlei',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_menus_hm-search_callhm-tntlei_callhm-tntlei_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../menus/hm-search/callhm-tntlei/callhm-tntlei.module */
            13725)).then(function (m) {
              return m.CallHmTntleiPageModule;
            });
          }
        }, {
          path: 'callhm-observation',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_menus_hm-search_callhm-observation_callhm-observation_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../menus/hm-search/callhm-observation/callhm-observation.module */
            63399)).then(function (m) {
              return m.CallHmObservationPageModule;
            });
          }
        }, {
          path: 'school-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_school-list_school-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/school-list/school-list.module */
            10158)).then(function (m) {
              return m.SchoolListPageModule;
            });
          }
        }, {
          path: 'class-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_class-list_class-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/class-list/class-list.module */
            40318)).then(function (m) {
              return m.ClassListPageModule;
            });
          }
        }, {
          path: 'section-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_section-list_section-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/section-list/section-list.module */
            92149)).then(function (m) {
              return m.SectionListPageModule;
            });
          }
        }, {
          path: 'student-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_student-list_student-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/student-list/student-list.module */
            62317)).then(function (m) {
              return m.StudentListPageModule;
            });
          }
        }, {
          path: 'pmoa-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_pmoa-questions_pmoa-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/pmoa-questions/pmoa-questions.module */
            39643)).then(function (m) {
              return m.PmoaQuestionsPageModule;
            });
          }
        }, {
          path: 'spectacel-school-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_spectacel_school-list_school-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/spectacel/school-list/school-list.module */
            85981)).then(function (m) {
              return m.SchoolListPageModule;
            });
          }
        }, {
          path: 'spectacel-class-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_spectacel_class-list_class-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/spectacel/class-list/class-list.module */
            12142)).then(function (m) {
              return m.ClassListPageModule;
            });
          }
        }, {
          path: 'spectacel-section-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_spectacel_section-list_section-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/spectacel/section-list/section-list.module */
            6155)).then(function (m) {
              return m.SectionListPageModule;
            });
          }
        }, {
          path: 'spectacel-student-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_pmoa_spectacel_student-list_student-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/spectacel/student-list/student-list.module */
            76410)).then(function (m) {
              return m.StudentListPageModule;
            });
          }
        }, // {
        //   path: 'teacher/volunteer-search',
        //   loadChildren: () => import('../inspection/volunteer-inspection/volunteer-search/volunteer-search.module').then(m => m.VounteerSearchPageModule)
        // },
        // {
        //   path: 'teacher/volunteer-inspection',
        //   loadChildren: () => import('../inspection/volunteer-inspection/volunteer-inspection.module').then(m => m.VolunteerInspectionPageModule)
        // },
        // {
        //   path: 'teacher/my-inspections',
        //   loadChildren: () => import('../inspection/volunteer-inspection/my-inspections/my-inspections.module').then(m => m.MyInspectionsPageModule)
        // },
        // {
        //   path: 'teacher/student-attendance',
        //   loadChildren: () => import('../inspection/volunteer-inspection/student-attendance/student-attendance.module').then(m => m.StudentAttendancePageModule)
        // },
        {
          path: 'rbsk-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_rbsk-questions_rbsk-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/rbsk-questions/rbsk-questions.module */
            70181)).then(function (m) {
              return m.RbskQuestionsPageModule;
            });
          }
        }, {
          path: 'deic-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_deic-questions_deic-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/deic-questions/deic-questions.module */
            57390)).then(function (m) {
              return m.DeicQuestionsPageModule;
            });
          }
        }, {
          path: 'rbsk-school-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_rbsk_rbsk-school-list_rbsk-school-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/rbsk/rbsk-school-list/rbsk-school-list.module */
            13523)).then(function (m) {
              return m.RbskSchoolListPageModule;
            });
          }
        }, {
          path: 'rbsk-class',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_rbsk_rbsk-class_rbsk-class_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/rbsk/rbsk-class/rbsk-class.module */
            82743)).then(function (m) {
              return m.RbskClassPageModule;
            });
          }
        }, {
          path: 'rbsk-section',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_rbsk_rbsk-section_rbsk-section_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/rbsk/rbsk-section/rbsk-section.module */
            22807)).then(function (m) {
              return m.RbskSectionPageModule;
            });
          }
        }, {
          path: 'rbsk-students-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_rbsk_rbsk-students-list_rbsk-students-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/rbsk/rbsk-students-list/rbsk-students-list.module */
            5322)).then(function (m) {
              return m.RbskStudentsListPageModule;
            });
          }
        }, {
          path: 'writing-inspection',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_inspection_writing_inspection_writing-inspection_writing-inspection_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../inspection/writing_inspection/writing-inspection/writing-inspection.module */
            16822)).then(function (m) {
              return m.WritingInspectionPageModule;
            });
          } // loadChildren: () => import('../inspection/civil/RCI/renewal-details/renewal-details.module').then( m => m.RenewalDetailsPageModule)

        }, {
          path: 'inspectionEnnumezhuthum',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection_my-inspection_mo-09775a").then(__webpack_require__.bind(__webpack_require__,
            /*! ../inspection/writing_inspection/writing-inspection/my-inspection/my-inspection.module */
            73186)).then(function (m) {
              return m.MyInspectionPageModule;
            });
          }
        }, {
          path: 'my-inspection-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-dashboard_my-ins-9ddb64").then(__webpack_require__.bind(__webpack_require__,
            /*! ../inspection/writing_inspection/writing-inspection/my-inspection-dashboard/my-inspection-dashboard.module */
            62428)).then(function (m) {
              return m.MyInspectionDashboardPageModule;
            });
          }
        }, {
          path: 'inspectionquestion',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_inspection_writing_inspection_writing-inspection_my-inspection-question_my-insp-60693b").then(__webpack_require__.bind(__webpack_require__,
            /*! ../inspection/writing_inspection/writing-inspection/my-inspection-question/my-inspection-question.module */
            16842)).then(function (m) {
              return m.MyInspectionQuestionPageModule;
            });
          }
        }, {
          path: 'questions2',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_inspection_writing_inspection_new-questions_questions2_questions2_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../inspection/writing_inspection/new-questions/questions2/questions2.module */
            29830)).then(function (m) {
              return m.Questions2PageModule;
            });
          }
        }, {
          path: 'questions1',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_inspection_writing_inspection_new-questions_questions1_questions1_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../inspection/writing_inspection/new-questions/questions1/questions1.module */
            90473)).then(function (m) {
              return m.Questions1PageModule;
            });
          }
        }, // {
        //   path: 'stem-dashboard',
        //   loadChildren: () => import('../stem/stem-dashboard/stem-dashboard.module').then( m => m.StemDashboardPageModule)
        // },
        {
          path: 'stem-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_stem-dashboard_stem-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-dashboard/stem-dashboard.module */
            64025)).then(function (m) {
              return m.StemDashboardPageModule;
            });
          }
        }, {
          path: 'school-zone',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stem_new_school-zone_school-zone_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/school-zone/school-zone.module */
            62957)).then(function (m) {
              return m.SchoolZonePageModule;
            });
          }
        }, {
          path: 'otp-page',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_otp-page_otp-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/otp-page/otp-page.module */
            86442)).then(function (m) {
              return m.OtpPagePageModule;
            });
          }
        }, {
          path: 'add-student',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_add-student_add-student_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/add-student/add-student.module */
            13323)).then(function (m) {
              return m.AddStudentPageModule;
            });
          }
        }, {
          path: 'student-curiosity',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_student-curiosity_student-curiosity_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/student-curiosity/student-curiosity.module */
            92256)).then(function (m) {
              return m.StudentCuriosityPageModule;
            });
          }
        }, {
          path: 'experiments',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_experiments_experiments_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/experiments/experiments.module */
            40531)).then(function (m) {
              return m.ExperimentsPageModule;
            });
          }
        }, {
          path: 'domain',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_domain_domain_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/domain/domain.module */
            72757)).then(function (m) {
              return m.DomainPageModule;
            });
          }
        }, {
          path: 'stem-video',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stem_new_stem-video_stem-video_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-video/stem-video.module */
            73955)).then(function (m) {
              return m.StemVideoPageModule;
            });
          }
        }, {
          path: 'view-pdf',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ionic-native_file-opener___ivy_ngcc___ngx_index_js-node_modules_ionic-na-c4f5ba"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_view-pdf_view-pdf_module_ts-src_app_services_tnvn_services_loading_service_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../view-pdf/view-pdf.module */
            70594)).then(function (m) {
              return m.ViewPdfPageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/profile/profile.module */
            28484)).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'feed',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_feed_feed_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/feed/feed.module */
            65021)).then(function (m) {
              return m.FeedPageModule;
            });
          }
        }, {
          path: 'stem-calendar',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ion2-calendar___ivy_ngcc___dist_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stem_new_stem-calendar_stem-calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-calendar/stem-calendar.module */
            38256)).then(function (m) {
              return m.StemCalendarPageModule;
            });
          }
        }, {
          path: 'school-schedule',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stem_new_school-schedule_school-schedule_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/school-schedule/school-schedule.module */
            10558)).then(function (m) {
              return m.SchoolSchedulePageModule;
            });
          }
        }, {
          path: 'auto-slot',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stem_new_auto-slot_auto-slot_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/auto-slot/auto-slot.module */
            46696)).then(function (m) {
              return m.AutoSlotPageModule;
            });
          }
        }, {
          path: 'view-calendar',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ion2-calendar___ivy_ngcc___dist_index_js"), __webpack_require__.e("src_app_pages_stem_new_view-calendar_view-calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/view-calendar/view-calendar.module */
            43848)).then(function (m) {
              return m.ViewCalendarPageModule;
            });
          }
        }, {
          path: 'view-schedule',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_view-schedule_view-schedule_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/view-schedule/view-schedule.module */
            32790)).then(function (m) {
              return m.ViewSchedulePageModule;
            });
          }
        }, {
          path: 'stem-leave',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_stem-leave_stem-leave_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-leave/stem-leave.module */
            87826)).then(function (m) {
              return m.StemLeavePageModule;
            });
          }
        }, {
          path: 'leave-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_leave-dashboard_leave-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/leave-dashboard/leave-dashboard.module */
            40256)).then(function (m) {
              return m.LeaveDashboardPageModule;
            });
          }
        }, {
          path: 'leave-history',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_leave-history_leave-history_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/leave-history/leave-history.module */
            70481)).then(function (m) {
              return m.LeaveHistoryPageModule;
            });
          }
        }, {
          path: 'leave-approval',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_leave-approval_leave-approval_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/leave-approval/leave-approval.module */
            62915)).then(function (m) {
              return m.LeaveApprovalPageModule;
            });
          }
        }, {
          path: 'approval-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_approval-dashboard_approval-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/approval-dashboard/approval-dashboard.module */
            26734)).then(function (m) {
              return m.ApprovalDashboardPageModule;
            });
          }
        }, {
          path: 'stem-cycle',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_stem-cycle_stem-cycle_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-cycle/stem-cycle.module */
            88519)).then(function (m) {
              return m.StemCyclePageModule;
            });
          }
        }, {
          path: 'experiment-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_experiment-dashboard_experiment-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/experiment-dashboard/experiment-dashboard.module */
            1176)).then(function (m) {
              return m.ExperimentDashboardPageModule;
            });
          }
        }, {
          path: 'experiment-phase',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_experiment-phase_experiment-phase_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/experiment-phase/experiment-phase.module */
            59230)).then(function (m) {
              return m.ExperimentPhasePageModule;
            });
          }
        }, {
          path: 'experiment-pdfviewer',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_experiment-pdfviewer_experiment-pdfviewer_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/experiment-pdfviewer/experiment-pdfviewer.module */
            35236)).then(function (m) {
              return m.ExperimentPdfviewerPageModule;
            });
          }
        }, // cwsn start
        // {
        //   path: 'cwsn/student-detail',
        //   loadChildren: () => import('../cwsn2/student-details/student-details.module').then(m=> m.StudentDetailsPageModule)
        // },
        // {
        //   path: 'cwsn/school-list-cwsn/:id',
        //   loadChildren: () => import('../cwsn2/school-list-cwsn/school-list-cwsn.module').then( m => m.SchoolListCwsnPageModule)
        // },
        // {
        //   path: 'student-list-cwsn',
        //   loadChildren: () => import('../cwsn/student-list-cwsn/student-list-cwsn.module').then( m => m.StudentListCwsnPageModule)
        // },
        {
          path: 'samplecooming',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_commonpages_samplecooming_samplecooming_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../commonpages/samplecooming/samplecooming.module */
            72618)).then(function (m) {
              return m.SamplecoomingPageModule;
            });
          }
        }, //ITK Center Support
        {
          path: 'itk-center-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_itk-center-support_itk-center-dashboard_itk-center-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/itk-center-dashboard/itk-center-dashboard.module */
            56059)).then(function (m) {
              return m.ItkCenterDashboardPageModule;
            });
          }
        }, {
          path: 'volunteer-inspection2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_itk-center-support_volunteer-inspection2_volunteer-inspection2_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/volunteer-inspection2/volunteer-inspection2.module */
            54398)).then(function (m) {
              return m.VolunteerInspection2PageModule;
            });
          }
        }, {
          path: 'teacher/volunteer-search',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_itk-center-support_volunteer-search_volunteer-search_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/volunteer-search/volunteer-search.module */
            80545)).then(function (m) {
              return m.VounteerSearchPageModule;
            });
          }
        }, {
          path: 'teacher/volunteer-inspection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_itk-center-support_volunteer-inspection_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/volunteer-inspection.module */
            18667)).then(function (m) {
              return m.VolunteerInspectionPageModule;
            });
          }
        }, {
          path: 'teacher/my-inspections',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_itk-center-support_my-inspections_my-inspections_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/my-inspections/my-inspections.module */
            32381)).then(function (m) {
              return m.MyInspectionsPageModule;
            });
          }
        }, {
          path: 'my-inspections2',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_itk-center-support_my-inspections2_my-inspections2_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/my-inspections2/my-inspections2.module */
            88904)).then(function (m) {
              return m.MyInspections2PageModule;
            });
          }
        }, {
          path: 'teacher/student-attendance',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_itk-center-support_student-attendance_student-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/student-attendance/student-attendance.module */
            88203)).then(function (m) {
              return m.StudentAttendancePageModule;
            });
          }
        }, {
          path: 'new-inspection-question',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_inspection_writing_inspection_new-inspection-question_new-inspection-question_m-bcb638").then(__webpack_require__.bind(__webpack_require__,
            /*! ../inspection/writing_inspection/new-inspection-question/new-inspection-question.module */
            23202)).then(function (m) {
              return m.NewInspectionQuestionPageModule;
            });
          }
        }, {
          path: 'class-sec-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_stem_new_class-sec-list_class-sec-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/class-sec-list/class-sec-list.module */
            72358)).then(function (m) {
              return m.ClassSecListPageModule;
            });
          }
        }, {
          path: 'other-district-survey',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_oosc_other-district-survey_other-district-survey_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/other-district-survey/other-district-survey.module */
            27335)).then(function (m) {
              return m.OtherDistrictSurveyPageModule;
            });
          }
        }, //leave application
        {
          path: 'e-sr',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_e-sr_e-sr_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/e-sr/e-sr.module */
            89639)).then(function (m) {
              return m.ESrPageModule;
            });
          }
        }, {
          path: 'myprofile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_profile_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/profile/profile/profile.module */
            25804)).then(function (m) {
              return m.ProfilePageModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_profile_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/profile/settings/settings.module */
            53872)).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }, {
          path: 'leave',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leave_leave_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leave/leave.module */
            91143)).then(function (m) {
              return m.LeavePageModule;
            });
          }
        }, {
          path: 'leavehistory',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leavehistory_leavehistory_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leavehistory/leavehistory.module */
            32723)).then(function (m) {
              return m.LeavehistoryPageModule;
            });
          }
        }, {
          path: 'leave-approval-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leave-approval-list_leave-approval-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leave-approval-list/leave-approval-list.module */
            78164)).then(function (m) {
              return m.LeaveApprovalListPageModule;
            });
          }
        }, {
          path: 'leave-approval-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_leave-approval-details_leave-approval-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/leave-approval-details/leave-approval-details.module */
            43169)).then(function (m) {
              return m.LeaveApprovalDetailsPageModule;
            });
          }
        }, {
          path: 'know-your-leaves',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_leave_know-your-leaves_know-your-leaves_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../leave/know-your-leaves/know-your-leaves.module */
            50816)).then(function (m) {
              return m.KnowYourLeavesPageModule;
            });
          }
        }, {
          path: 'building-closing-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_building_building-closing-questions_building-closing-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/building-closing-questions/building-closing-questions.module */
            88774)).then(function (m) {
              return m.BuildingClosingQuestionsPageModule;
            });
          }
        }, {
          path: 'floor-closing-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_building_floor-closing-questions_floor-closing-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/building/floor-closing-questions/floor-closing-questions.module */
            90305)).then(function (m) {
              return m.FloorClosingQuestionsPageModule;
            });
          }
        }, {
          path: 'my-inspection-sids',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_myinspection_myinspection_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/myinspection/myinspection.module */
            61992)).then(function (m) {
              return m.MyinspectionPageModule;
            });
          }
        }, {
          path: 'work-inspection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_page_ts"), __webpack_require__.e("src_app_pages_sids_work-inspection_work-inspection_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/work-inspection/work-inspection.module */
            74680)).then(function (m) {
              return m.WorkInspectionPageModule;
            });
          }
        }, {
          path: 'list-of-awc',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_awc_awc-view-modal_awc-view-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_awc_list-of-awc_list-of-awc_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../awc/list-of-awc/list-of-awc.module */
            89256)).then(function (m) {
              return m.ListOfAwcPageModule;
            });
          }
        }, {
          path: 'awc-student-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_awc_awc-student-list_awc-student-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../awc/awc-student-list/awc-student-list.module */
            2103)).then(function (m) {
              return m.AwcStudentListPageModule;
            });
          }
        }, {
          path: 'awc-form',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_pages_commonpages_dynamic-form-table_dynamic-form-table_module_ts"), __webpack_require__.e("src_app_pages_awc_awc-form_awc-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../awc/awc-form/awc-form.module */
            26358)).then(function (m) {
              return m.AwcFormPageModule;
            });
          }
        }, {
          path: 'final-feedback',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_awc_final-feedback_final-feedback_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../awc/final-feedback/final-feedback.module */
            40628)).then(function (m) {
              return m.FinalFeedbackPageModule;
            });
          }
        }, {
          path: 'referred-child-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_mht_referred-child-details_referred-child-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../mht/referred-child-details/referred-child-details.module */
            7719)).then(function (m) {
              return m.ReferredChildDetailsPageModule;
            });
          }
        }, //Referred Child Details PMOA
        {
          path: 'referred-student',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ionic-native_file-opener___ivy_ngcc___ngx_index_js-node_modules_ionic-na-c4f5ba"), __webpack_require__.e("src_app_pages_pmoa_referred-pmoa_referred-student_referred-student_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/referred-pmoa/referred-student/referred-student.module */
            54414)).then(function (m) {
              return m.ReferredStudentPageModule;
            });
          }
        }, {
          path: 'survey-by-me',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_oosc_survey-by-me_survey-by-me_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/survey-by-me/survey-by-me.module */
            99873)).then(function (m) {
              return m.SurveyByMePageModule;
            });
          }
        }, {
          path: 'awc-add-std',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_awc_awc-add-std_awc-add-std_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../awc/awc-add-std/awc-add-std.module */
            99040)).then(function (m) {
              return m.AwcAddStdPageModule;
            });
          }
        }, {
          path: 'awc-resource',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_awc_awc-resource_awc-resource_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../awc/awc-resource/awc-resource.module */
            20936)).then(function (m) {
              return m.AwcResourcePageModule;
            });
          }
        }, //switch user
        {
          path: 'switch-user',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_tabs_switch-user_switch-user_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ./switch-user/switch-user.module */
            20879)).then(function (m) {
              return m.SwitchUserPageModule;
            });
          }
        }, //ARP Erollment
        {
          path: 'art-culture',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_art-culture_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/art-culture.module */
            15227)).then(function (m) {
              return m.ArtCulturePageModule;
            });
          }
        }, {
          path: 'arpenrollmentverification',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_arpenrollmentverification_arpenrollmentverification_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/arpenrollmentverification/arpenrollmentverification.module */
            85638)).then(function (m) {
              return m.ArpenrollmentverificationPageModule;
            });
          }
        }, {
          path: 'validation-profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_validation-profile_validation-profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/validation-profile/validation-profile.module */
            94221)).then(function (m) {
              return m.ValidationProfilePageModule;
            });
          }
        }, {
          path: 'my-schools',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_my-schools_my-schools_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/my-schools/my-schools.module */
            97706)).then(function (m) {
              return m.MySchoolsPageModule;
            });
          }
        }, {
          path: 'session-verification',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_session-verification_session-verification_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/session-verification/session-verification.module */
            51858)).then(function (m) {
              return m.SessionVerificationPageModule;
            });
          }
        }, {
          path: 'session-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_session-details_session-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/session-details/session-details.module */
            81548)).then(function (m) {
              return m.SessionDetailsPageModule;
            });
          }
        }, {
          path: 'aadhitiya-session',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_aadhitiya-session_aadhitiya-session_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/aadhitiya-session/aadhitiya-session.module */
            14501)).then(function (m) {
              return m.AadhitiyaSessionPageModule;
            });
          }
        }, {
          path: 'ka-session-verification',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_ka-session-verification_ka-session-verification_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/ka-session-verification/ka-session-verification.module */
            6637)).then(function (m) {
              return m.KASessionVerificationPageModule;
            });
          }
        }, {
          path: 'session-plan',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_session-plan_session-plan_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/session-plan/session-plan.module */
            40566)).then(function (m) {
              return m.SessionPlanPageModule;
            });
          }
        }, {
          path: 'session-summary',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_art-culture_session-summary_session-summary_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/session-summary/session-summary.module */
            79457)).then(function (m) {
              return m.SessionSummaryPageModule;
            });
          }
        }, {
          path: 'unverified-arps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_unverified-arps_unverified-arps_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/unverified-arps/unverified-arps.module */
            11099)).then(function (m) {
              return m.UnverifiedARPSPageModule;
            });
          }
        }, {
          path: 'block-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_block-list_block-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/block-list/block-list.module */
            47777)).then(function (m) {
              return m.BlockListPageModule;
            });
          }
        }, {
          path: 'arp-session-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_arp-session-details_arp-session-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/arp-session-details/arp-session-details.module */
            30412)).then(function (m) {
              return m.ArpSessionDetailsPageModule;
            });
          }
        }, {
          path: 'pums-session-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_my-schools_pums-session-details_pums-session-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/my-schools/pums-session-details/pums-session-details.module */
            67149)).then(function (m) {
              return m.PumsSessionDetailsPageModule;
            });
          }
        }, {
          path: 'course-materials',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_course-materials_course-materials_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/course-materials/course-materials.module */
            55942)).then(function (m) {
              return m.CourseMaterialsPageModule;
            });
          }
        }, {
          path: 'course-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_course-materials_course-details_course-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/course-materials/course-details/course-details.module */
            26805)).then(function (m) {
              return m.CourseDetailsPageModule;
            });
          }
        }, {
          path: 'arp-course-materials',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_ka-session-verification_arp-course-materials_arp-course-materials_m-80feaf").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/ka-session-verification/arp-course-materials/arp-course-materials.module */
            27026)).then(function (m) {
              return m.ArpCourseMaterialsPageModule;
            });
          }
        }, {
          path: 'otp-submission',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_my-schools_otp-submission_otp-submission_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/my-schools/otp-submission/otp-submission.module */
            93674)).then(function (m) {
              return m.OtpSubmissionPageModule;
            });
          }
        }, {
          path: 'my-arps',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_art-culture_my-arps_my-arps_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! .././art-culture/my-arps/my-arps.module */
            45953)).then(function (m) {
              return m.MyArpsPageModule;
            });
          }
        }, {
          path: 'l3-ee-report',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_ennum-ezhuthum-truthing_services_api_service_ts"), __webpack_require__.e("src_app_pages_ennum-ezhuthum-truthing_pages_l3-ee-report_l3-ee-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../ennum-ezhuthum-truthing/pages/l3-ee-report/l3-ee-report.module */
            17458)).then(function (m) {
              return m.L3EeReportPageModule;
            });
          }
        }, //staff grievance by priya
        {
          path: 'staff-grievance',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_grievance_staff-grievance_staff-grievance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../grievance/staff-grievance/staff-grievance.module */
            79384)).then(function (m) {
              return m.StaffGrievancePageModule;
            });
          }
        }, // cwsn trackingstulist
        {
          path: 'cwsn/tracking-stulist',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-node_modules_ion2-calendar___ivy_ngcc___dist_index_js"), __webpack_require__.e("default-src_app_pages_cwsn_cwsn-calendar_cwsn-calendar_page_ts"), __webpack_require__.e("src_app_pages_cwsn_tracking-stulist_tracking-stulist_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/tracking-stulist/tracking-stulist.module */
            41800)).then(function (m) {
              return m.TrackingStulistPageModule;
            });
          }
        }, //cwsn trackingstudetails
        {
          path: 'cwsn/tracking-studetails',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_cwsn_tracking-studetails_tracking-studetails_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/tracking-studetails/tracking-studetails.module */
            96846)).then(function (m) {
              return m.TrackingStudetailsPageModule;
            });
          }
        }, {
          path: 'cwsn/tracking-question',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_cwsn_tracking-question_tracking-question_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/tracking-question/tracking-question.module */
            36653)).then(function (m) {
              return m.TrackingQuestionPageModule;
            });
          }
        }, {
          path: 'cwsn/tracking-school-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_cwsn_tracking-school-list_tracking-school-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/tracking-school-list/tracking-school-list.module */
            38105)).then(function (m) {
              return m.TrackingSchoolListPageModule;
            });
          }
        }, {
          path: 'cwsn-calendar',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_ion2-calendar___ivy_ngcc___dist_index_js"), __webpack_require__.e("default-src_app_pages_cwsn_cwsn-calendar_cwsn-calendar_page_ts"), __webpack_require__.e("src_app_pages_cwsn_cwsn-calendar_cwsn-calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/cwsn-calendar/cwsn-calendar.module */
            64463)).then(function (m) {
              return m.CwsnCalendarPageModule;
            });
          }
        }, {
          path: 'vasipu-iyakam',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_vasipu-iyakam_vasipu-iyakam_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../../pages/vasipu-iyakam/vasipu-iyakam.module */
            56575)).then(function (m) {
              return m.VasipuIyakamPageModule;
            });
          }
        }, {
          path: 'work-inspection-stage',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_work-inspection_stage_stage_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/work-inspection/stage/stage.module */
            57940)).then(function (m) {
              return m.StagePageModule;
            });
          }
        }, {
          path: 'my-inspection-from',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_sids_inspection-form_inspection-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/inspection-form/inspection-form.module */
            25221)).then(function (m) {
              return m.InspectionFormPageModule;
            });
          }
        }, //CWSN Phase2
        {
          path: 'cwsn-menu',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_cwsn-menu_cwsn-menu_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/cwsn-menu/cwsn-menu.module */
            54681)).then(function (m) {
              return m.CwsnMenuPageModule;
            });
          }
        }, {
          path: 'ca-student-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_cwsn-phase2_ca-student-list_ca-student-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/ca-student-list/ca-student-list.module */
            527)).then(function (m) {
              return m.CaStudentListPageModule;
            });
          }
        }, {
          path: 'ca-student-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_ca-student-details_ca-student-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/ca-student-details/ca-student-details.module */
            31052)).then(function (m) {
              return m.CaStudentDetailsPageModule;
            });
          }
        }, {
          path: 'ca-domain-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_domain-list_domain-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/domain-list/domain-list.module */
            12854)).then(function (m) {
              return m.DomainListPageModule;
            });
          }
        }, {
          path: 'assessment-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_assessment-questions_assessment-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/assessment-questions/assessment-questions.module */
            3464)).then(function (m) {
              return m.AssessmentQuestionsPageModule;
            });
          }
        }, {
          path: 'evaluation',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_evaluation_evaluation_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/evaluation/evaluation.module */
            76664)).then(function (m) {
              return m.EvaluationPageModule;
            });
          }
        }, // {
        //   path: 'goal-setting',
        //   loadChildren: () => import('../cwsn-phase2/goal-setting/goal-setting.module').then( m => m.GoalSettingPageModule)
        // },
        {
          path: 'mass-cleaning',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_mass-visit_mass-visit_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../mass-visit/mass-visit.module */
            17106)).then(function (m) {
              return m.MassVisitPageModule;
            });
          }
        }, {
          path: 'sids-demolish-build',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_page_ts"), __webpack_require__.e("src_app_pages_sids_work-inspection_sids-demolish-build_sids-demolish-build_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/work-inspection/sids-demolish-build/sids-demolish-build.module */
            44540)).then(function (m) {
              return m.SidsDemolishBuildPageModule;
            });
          }
        }, {
          path: 'ndd/school-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ndd_school-list_school-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ndd/school-list/school-list.module */
            68623)).then(function (m) {
              return m.SchoolListPageModule;
            });
          }
        }, {
          path: 'ndd/class-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ndd_class-list_class-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ndd/class-list/class-list.module */
            76435)).then(function (m) {
              return m.ClassListPageModule;
            });
          }
        }, {
          path: 'ndd/section-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ndd_section-list_section-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ndd/section-list/section-list.module */
            24338)).then(function (m) {
              return m.SectionListPageModule;
            });
          }
        }, {
          path: 'ndd/ndd-tablet',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ndd_ndd-tablet_ndd-tablet_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ndd/ndd-tablet/ndd-tablet.module */
            61312)).then(function (m) {
              return m.NddTabletPageModule;
            });
          }
        }, {
          path: 'olirum-vagupparai',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_olirum-vagupparai_olirum-vagupparai_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../olirum-vagupparai/olirum-vagupparai.module */
            58468)).then(function (m) {
              return m.OlirumVagupparaiPageModule;
            });
          }
        }, {
          path: 'uniform-schoollist',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_uniform_uniform-schoollist_uniform-schoollist_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../uniform/uniform-schoollist/uniform-schoollist.module */
            34370)).then(function (m) {
              return m.UniformSchoollistPageModule;
            });
          }
        }, {
          path: 'uniform-classlist',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_uniform_uniform-classlist_uniform-classlist_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../uniform/uniform-classlist/uniform-classlist.module */
            36161)).then(function (m) {
              return m.UniformClasslistPageModule;
            });
          }
        }, {
          path: 'measurement-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_uniform_measurement-questions_measurement-questions_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../uniform/measurement-questions/measurement-questions.module */
            78371)).then(function (m) {
              return m.MeasurementQuestionsPageModule;
            });
          }
        }, {
          path: 'uniform-studentlist',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_uniform_uniform-studentlist_uniform-studentlist_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../uniform/uniform-studentlist/uniform-studentlist.module */
            62301)).then(function (m) {
              return m.UniformStudentlistPageModule;
            });
          }
        }, {
          path: 'smc-geo-fence',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_geo-fence_smc-geo-fence_smc-geo-fence_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../geo-fence/smc-geo-fence/smc-geo-fence.module */
            17624)).then(function (m) {
              return m.SmcGeoFencePageModule;
            });
          }
        }, {
          path: 'geo-fence-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_geo-fence_geo-fence-dashboard_geo-fence-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../geo-fence/geo-fence-dashboard/geo-fence-dashboard.module */
            2399)).then(function (m) {
              return m.GeoFenceDashboardPageModule;
            });
          }
        }, {
          path: 'design-page',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_design-page_design-page_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/design-page/design-page.module */
            16469)).then(function (m) {
              return m.DesignPagePageModule;
            });
          }
        }, {
          path: 'aws-student-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_awc_aws-student-details_aws-student-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../awc/aws-student-details/aws-student-details.module */
            13490)).then(function (m) {
              return m.AwsStudentDetailsPageModule;
            });
          }
        }, {
          path: 'ie-center-geo-fence',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_geo-fence_ie-center-geo-fence_ie-center-geo-fence_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../geo-fence/ie-center-geo-fence/ie-center-geo-fence.module */
            80870)).then(function (m) {
              return m.IeCenterGeoFencePageModule;
            });
          }
        }, {
          path: 'ie-std-list-attendance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_geo-fence_ie-std-list-attendance_ie-std-list-attendance_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../geo-fence/ie-std-list-attendance/ie-std-list-attendance.module */
            12314)).then(function (m) {
              return m.IeStdListAttendancePageModule;
            });
          }
        }, {
          path: 'stc-activity',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stc-activity_stc-activity_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/stc-activity.module */
            953)).then(function (m) {
              return m.StcActivityPageModule;
            });
          }
        }, {
          path: 'ev-profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stc-activity_ev-profile_ev-profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/ev-profile/ev-profile.module */
            32430)).then(function (m) {
              return m.EvProfilePageModule;
            });
          }
        }, {
          path: 'center-profile',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_stc-activity_center-profile_center-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/center-profile/center-profile.module */
            77662)).then(function (m) {
              return m.CenterProfilePageModule;
            });
          }
        }, {
          path: 'student-profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stc-activity_student-profile_student-profile_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/student-profile/student-profile.module */
            63599)).then(function (m) {
              return m.StudentProfilePageModule;
            });
          }
        }, {
          path: 'ie-stdmapping-therapist',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"), __webpack_require__.e("default-src_app_components_shared_module_ts"), __webpack_require__.e("src_app_pages_cwsn_ie-stdmapping-therapist_ie-stdmapping-therapist_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/ie-stdmapping-therapist/ie-stdmapping-therapist.module */
            43066)).then(function (m) {
              return m.IeStdmappingTherapistPageModule;
            });
          }
        }, {
          path: 'gis-school-location',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_gis_location_gis-school-location_gis-school-location_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../gis_location/gis-school-location/gis-school-location.module */
            57595)).then(function (m) {
              return m.GisSchoolLocationPageModule;
            });
          }
        }, {
          path: 'cwsn-bar-chart',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_chart_js_auto_auto_mjs"), __webpack_require__.e("src_app_pages_cwsn-phase2_cwsn-bar-chart_cwsn-bar-chart_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/cwsn-bar-chart/cwsn-bar-chart.module */
            19031)).then(function (m) {
              return m.CwsnBarChartPageModule;
            });
          }
        }, {
          path: 'ca-intervention',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_ca-intervention_ca-intervention_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/ca-intervention/ca-intervention.module */
            20513)).then(function (m) {
              return m.CaInterventionPageModule;
            });
          }
        }, {
          path: 'screaning-menu',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn-phase2_screaning-menu_screaning-menu_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn-phase2/screaning-menu/screaning-menu.module */
            84639)).then(function (m) {
              return m.ScreaningMenuPageModule;
            });
          }
        }, {
          path: 'ezhutharivu-thittam/dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ezhutharivu-thittam_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ezhutharivu-thittam/dashboard/dashboard.module */
            17508)).then(function (m) {
              return m.DashboardPageModule;
            });
          }
        }, {
          path: 'ezhutharivu-thittam/learner',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ezhutharivu-thittam_learner_learner_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ezhutharivu-thittam/learner/learner.module */
            76311)).then(function (m) {
              return m.LearnerPageModule;
            });
          }
        }, {
          path: 'ezhutharivu-thittam/schoollist',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_ezhutharivu-thittam_schoollist_schoollist_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../ezhutharivu-thittam/schoollist/schoollist.module */
            92977)).then(function (m) {
              return m.SchoollistPageModule;
            });
          }
        }, {
          path: 'cwsn-school-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_cwsn_cwsn-school-list_cwsn-school-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/cwsn-school-list/cwsn-school-list.module */
            64047)).then(function (m) {
              return m.CwsnSchoolListPageModule;
            });
          }
        }, {
          path: 'cwsn-question-list',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_cwsn_cwsn-question-list_cwsn-question-list_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/cwsn-question-list/cwsn-question-list.module */
            81751)).then(function (m) {
              return m.CwsnQuestionListPageModule;
            });
          }
        }, {
          path: 'sids-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_sids-dashboard_sids-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/sids-dashboard/sids-dashboard.module */
            29362)).then(function (m) {
              return m.SidsDashboardPageModule;
            });
          }
        }, {
          path: 'primary-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_primary-school_primary-dashboard_primary-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-dashboard/primary-dashboard.module */
            62311)).then(function (m) {
              return m.PrimaryDashboardPageModule;
            });
          }
        }, {
          path: 'primary-sids-school',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_primary-school_primary-sids-school_primary-sids-school_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-sids-school/primary-sids-school.module */
            85287)).then(function (m) {
              return m.PrimarySidsSchoolPageModule;
            });
          }
        }, {
          path: 'primary-building-closing-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_primary-school_primary-building_primary-building-closing-questions_primary-350265").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-building/primary-building-closing-questions/primary-building-closing-questions.module */
            83784)).then(function (m) {
              return m.PrimaryBuildingClosingQuestionsPageModule;
            });
          }
        }, {
          path: 'primary-building-questions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_sids_primary-school_primary-building_primary-building-questions_primary-buildin-8948f0")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-building/primary-building-questions/primary-building-questions.module */
            97159)).then(function (m) {
              return m.PrimaryBuildingQuestionsPageModule;
            });
          }
        }, {
          path: 'primary-floor-closing-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_primary-school_primary-building_primary-floor-closing-questions_primary-fl-729572").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-building/primary-floor-closing-questions/primary-floor-closing-questions.module */
            48645)).then(function (m) {
              return m.PrimaryFloorClosingQuestionsPageModule;
            });
          }
        }, {
          path: 'primary-floor-questions',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_primary-school_primary-building_primary-floor-questions_primary-floor-ques-a16362").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-building/primary-floor-questions/primary-floor-questions.module */
            83987)).then(function (m) {
              return m.PrimaryFloorQuestionsPageModule;
            });
          }
        }, {
          path: 'primary-new-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_primary-school_primary-building_primary-new-dashboard_primary-new-dashboar-78e4ad").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-building/primary-new-dashboard/primary-new-dashboard.module */
            47120)).then(function (m) {
              return m.PrimaryNewDashboardPageModule;
            });
          }
        }, {
          path: 'primary-room-questions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_sids_primary-school_primary-building_primary-room-questions_primary-room-questi-eef77c")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-building/primary-room-questions/primary-room-questions.module */
            98220)).then(function (m) {
              return m.PrimaryRoomQuestionsPageModule;
            });
          }
        }, {
          path: 'primary-commonspaces',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_sids_primary-school_primary-general_primary-commonspaces_primary-commonspaces_m-24c094").then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-general/primary-commonspaces/primary-commonspaces.module */
            64701)).then(function (m) {
              return m.PrimaryCommonspacesPageModule;
            });
          }
        }, {
          path: 'primary-schooldata',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_sids_primary-school_primary-general_primary-schooldata_primary-schooldata_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../sids/primary-school/primary-general/primary-schooldata/primary-schooldata.module */
            64314)).then(function (m) {
              return m.PrimarySchooldataPageModule;
            });
          }
        }, {
          path: 'neverenrollment-quest',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_oosc_neverenrollment-quest_neverenrollment-quest_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../oosc/neverenrollment-quest/neverenrollment-quest.module */
            5872)).then(function (m) {
              return m.NeverenrollmentQuestPageModule;
            });
          }
        }, {
          path: 'stc-dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stc-activity_stc-dashboard_stc-dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/stc-dashboard/stc-dashboard.module */
            95328)).then(function (m) {
              return m.StcDashboardPageModule;
            });
          }
        }, {
          path: 'center-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stc-activity_stc-dashboard_center-details_center-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/stc-dashboard/center-details/center-details.module */
            54785)).then(function (m) {
              return m.CenterDetailsPageModule;
            });
          }
        }, {
          path: 'stc-staff-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stc-activity_stc-dashboard_staff-details_staff-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/stc-dashboard/staff-details/staff-details.module */
            44459)).then(function (m) {
              return m.StaffDetailsPageModule;
            });
          }
        }, {
          path: 'stc-student-details',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stc-activity_stc-dashboard_student-details_student-details_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stc-activity/stc-dashboard/student-details/student-details.module */
            87493)).then(function (m) {
              return m.StudentDetailsPageModule;
            });
          }
        }, {
          path: 'volunteer-inspection',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_blob-util_dist_blob-util_es_js"), __webpack_require__.e("src_app_pages_itk-center-support_volunteer-inspection_volunteer-inspection_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../itk-center-support/volunteer-inspection/volunteer-inspection.module */
            27575)).then(function (m) {
              return m.VolunteerInspectionPageModule;
            });
          }
        }, {
          path: 'te-school-list',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_stem_new_stem-dashboard_te-apply-exam_te-apply-exam_page_ts"), __webpack_require__.e("default-src_app_pages_stem_new_stem-dashboard_te-applied-exam_te-applied-exam_page_ts"), __webpack_require__.e("src_app_pages_stem_new_stem-dashboard_te-school-list_te-school-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-dashboard/te-school-list/te-school-list.module */
            13856)).then(function (m) {
              return m.TeSchoolListPageModule;
            });
          }
        }, {
          path: 'te-apply-exam',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_stem_new_stem-dashboard_te-apply-exam_te-apply-exam_page_ts"), __webpack_require__.e("src_app_pages_stem_new_stem-dashboard_te-apply-exam_te-apply-exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-dashboard/te-apply-exam/te-apply-exam.module */
            48600)).then(function (m) {
              return m.TeApplyExamPageModule;
            });
          }
        }, {
          path: 'te-applied-exam',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_stem_new_stem-dashboard_te-apply-exam_te-apply-exam_page_ts"), __webpack_require__.e("default-src_app_pages_stem_new_stem-dashboard_te-applied-exam_te-applied-exam_page_ts"), __webpack_require__.e("src_app_pages_stem_new_stem-dashboard_te-applied-exam_te-applied-exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-dashboard/te-applied-exam/te-applied-exam.module */
            38289)).then(function (m) {
              return m.TeAppliedExamPageModule;
            });
          }
        }, {
          path: 'vocational-intern',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_vocational-intern_vocational-intern-school_vocational-intern-school_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../vocational-intern/vocational-intern-school/vocational-intern-school.module */
            38450)).then(function (m) {
              return m.VocationalInternSchoolPageModule;
            });
          }
        }, {
          path: 'vocational-industry-detail',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_vocational-intern_vocational-industry-detail_vocational-industry-detail_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../vocational-intern/vocational-industry-detail/vocational-industry-detail.module */
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
            /*! ../vocational-intern/vocational-question-form/vocational-question-form.module */
            39364)).then(function (m) {
              return m.VocationalQuestionFormPageModule;
            });
          }
        }, {
          path: 'kgbv-hostel',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_kgbv_kgbv-hostel_kgbv-hostel_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../kgbv/kgbv-hostel/kgbv-hostel.module */
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
            /*! ../kgbv/hostel-student-attendance/hostel-student-attendance.module */
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
            /*! ../kgbv/hostel-staff-attendance/hostel-staff-attendance.module */
            73742)).then(function (m) {
              return m.HostelStaffAttendancePageModule;
            });
          }
        }, {
          path: 'summary-attendance',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_stem_new_stem-dashboard_summary-attendance_summary-attendance_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../stem_new/stem-dashboard/summary-attendance/summary-attendance.module */
            98528)).then(function (m) {
              return m.SummaryAttendancePageModule;
            });
          }
        }, {
          path: 'deic-referred',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-src_app_pages_my-patient-list_my-patient-view-modal_my-patient-view-modal_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_my-patient-list_deic-referred-page_deic-referred-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../my-patient-list/deic-referred-page/deic-referred-page.module */
            80578)).then(function (m) {
              return m.DeicReferredPagePageModule;
            });
          }
        }, {
          path: 'cwsn-mark-attend',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() */
            [__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cwsn_cwsn-mark-attend_cwsn-mark-attend_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
            /*! ../cwsn/cwsn-mark-attend/cwsn-mark-attend.module */
            21925)).then(function (m) {
              return m.CwsnMarkAttendPageModule;
            });
          }
        }, {
          path: 'screening-status',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            "src_app_pages_pmoa_pmoa_screening-status_screening-status_module_ts").then(__webpack_require__.bind(__webpack_require__,
            /*! ../pmoa/pmoa/screening-status/screening-status.module */
            65811)).then(function (m) {
              return m.ScreeningStatusPageModule;
            });
          }
        }]
      }];

      var _TabsPageRoutingModule = /*#__PURE__*/_createClass(function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      });

      _TabsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      })], _TabsPageRoutingModule);
      /***/
    },

    /***/
    5557:
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPageModule": function TabsPageModule() {
          return (
            /* binding */
            _TabsPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tabs.page */
      64101);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs-routing.module */
      15448);
      /* harmony import */


      var _commonpages_home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../commonpages/home/home.module */
      64822);

      var routes = [{
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage
      }];

      var _TabsPageModule = /*#__PURE__*/_createClass(function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      });

      _TabsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _commonpages_home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomePageModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage]
      })], _TabsPageModule);
      /***/
    },

    /***/
    64101:
    /*!*****************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TabsPage": function TabsPage() {
          return (
            /* binding */
            _TabsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tabs.page.html */
      48474);
      /* harmony import */


      var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tabs.page.scss */
      92625);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var _switch_user_switch_user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./switch-user/switch-user.page */
      45148);
      /* harmony import */


      var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/data.service */
      52468);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);

      var _TabsPage = /*#__PURE__*/function () {
        function TabsPage(actionSheetController, userSessionService, emisService, router, activeRoute, dataService, alertController, ionicstoragess, ionicStorage, sqliteDB, modalCtrl) {
          _classCallCheck(this, TabsPage);

          this.actionSheetController = actionSheetController;
          this.userSessionService = userSessionService;
          this.emisService = emisService;
          this.router = router;
          this.activeRoute = activeRoute;
          this.dataService = dataService;
          this.alertController = alertController;
          this.ionicstoragess = ionicstoragess;
          this.ionicStorage = ionicStorage;
          this.sqliteDB = sqliteDB;
          this.modalCtrl = modalCtrl;
          this.fabMenuIsOpened = false;
          this.loginURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.loginUrl;
          this.fabButtonOpened = false;
          this.teacher_id = this.userSessionService.teacher_id();
        }

        return _createClass(TabsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.modValue = this.userSessionService.mod1();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.modValue == 90 || this.modValue == 103) {
              var htmlEl = document.querySelector('html');
              htmlEl.style.setProperty('--ion-color-primary', '#134a54');
              htmlEl.style.setProperty('--ion-color-primary-shade', '#134a54');
              htmlEl.style.setProperty('--ion-color-primary-tint', '#134a54');
              htmlEl.style.setProperty('--ion-color-success', '#134a54');
            } else {
              var _htmlEl = document.querySelector('html');

              _htmlEl.style.setProperty('--ion-color-primary', '#8B67B3');

              _htmlEl.style.setProperty('--ion-color-primary-shade', '#8B67B3');

              _htmlEl.style.setProperty('--ion-color-primary-tint', '#8B67B3');

              _htmlEl.style.setProperty('--ion-color-success', '#8B67B3');
            }
          }
        }, {
          key: "fabParent",
          value: function fabParent() {
            this.fabMenuIsOpened = !this.fabMenuIsOpened;
            this.fabList.activated = this.fabMenuIsOpened;
          }
        }, {
          key: "appLogout",
          value: function appLogout() {
            var _this3 = this;

            debugger;
            this.asstStatus = this.activeRoute.snapshot.queryParamMap.get("assessedStatus");
            console.log(this.asstStatus, 'statusssssssss');
            this.ionicstoragess.getData('eetSurveyLevel').then(function (dataa) {
              if (dataa != undefined || dataa != null) {
                _this3.level = dataa;
                console.log(_this3.level, 'llllllllll');

                if (_this3.modValue !== null) {
                  var splitVar = _this3.modValue.split(',');

                  if (splitVar.includes('20') && (_this3.level == 'L1' || _this3.level == 'L2' || _this3.level == 'L3') && _this3.asstStatus >= 1) {
                    console.log('sdsdsdsdsdsd');

                    _this3.eetSurveyAlert();
                  } else {
                    _this3.appLogout2();
                  }

                  if (_this3.modValue == 23) {
                    console.log('sdsdsdsdsdsd');

                    _this3.sidsAlert();
                  } else {
                    _this3.appLogout2();
                  }
                } else {
                  _this3.appLogout2();
                }
              } else {
                if (_this3.modValue == 23) {
                  console.log('sdsdsdsdsdsd');

                  _this3.sidsAlert();
                } else {
                  _this3.appLogout2();
                }
              }
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "eetSurveyAlert",
          value: function eetSurveyAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this4 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'ARE YOU SURE TO LOGOUT?',
                      message: "The Student list will be Re-Ordered if you logout.",
                      buttons: [{
                        text: 'Cancel',
                        cssClass: 'alert-button-cancel'
                      }, {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this4.appLogout2();
                        }
                      }]
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sidsAlert",
          value: function sidsAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      header: 'Warning',
                      subHeader: "If logged out, locally saved data will clear. Please go back and sync your data by connecting to the internet.",
                      cssClass: 'buttonCss',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'alert-button-cancel'
                      }, {
                        text: 'Logout',
                        // cssClass: 'alert-button-confirm',
                        role: 'confirm',
                        handler: function handler(alertData) {
                          _this5.appLogout2();
                        }
                      }]
                    });

                  case 1:
                    alert = _context2.v;
                    _context2.n = 2;
                    return alert.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "appLogout2",
          value: function appLogout2() {
            var _this6 = this;

            //debugger
            var userName = window.localStorage.getItem('username');
            var password = window.localStorage.getItem('password');
            window.localStorage.clear();
            this.sqliteDB.removeDatabase();
            this.userSessionService.destroy();
            window.localStorage.setItem('username', userName);
            window.localStorage.setItem('password', password);
            this.router.navigate(['/login']);
            this.ionicStorage.forEach(function (value, key, index) {
              if (key != "studentListBy_school_id" && key != "teacherListBy_school_id" && key != "currentSchool_id" && key != "learning_outcome" && key != 'store_observation' && key != 'learningOutcomeQues' && key != 'schoolListBy_District_id' && key != 'observation_list' && key != 'getEetSchools' && key != 'remainguser' && key != 'todayDate' && key != 'eetSurveyLevel') {
                _this6.ionicStorage.remove(key);

                console.log("r", key);
              }
            });
          }
        }, {
          key: "getOverlayStyle",
          value: function getOverlayStyle() {
            var myStyles = {
              width: '100%',
              height: '100%',
              // display: 'flex',
              // 'justify-content': 'flex-end',
              // 'align-items': 'flex-end',
              // position: 'absolute',
              'background-color': 'rgba(0, 0, 0, 0.7)',
              // 'z-index': 99,
              bottom: '0px !important',
              right: '0px !important'
            };
            var styleClosed = {
              bottom: '0px !important',
              right: '0px !important'
            };
            return this.fabMenuIsOpened ? myStyles : styleClosed;
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            //this.statusBar.backgroundColorByHexString('#F05151');
            this.router.navigate(['tabs/home']);
          }
        }, {
          key: "goToNotifications",
          value: function goToNotifications() {
            //this.statusBar.backgroundColorByHexString('#F05151');
            //this.router.navigate(['tab/home']);
            this.router.navigate(['tab/coomingsoon']);
          }
        }, {
          key: "goToSearch",
          value: function goToSearch() {
            this.router.navigate(['tab/school']);
          }
        }, {
          key: "goToChangePassword",
          value: function goToChangePassword() {
            this.router.navigate(['changepassword']);
          }
        }, {
          key: "goToSettings",
          value: function goToSettings() {
            this.router.navigate(['settings']);
          }
        }, {
          key: "goToHelp",
          value: function goToHelp() {}
        }, {
          key: "switchUser",
          value: function switchUser() {
            var _this7 = this;

            var url = "".concat(this.loginURL, '/OfficialAccessList');
            var data = {
              'user_id': this.teacher_id
            };
            this.dataService.post(url, data).subscribe(function (res) {
              try {
                if (res.dataStatus == true) {
                  _this7.userList = res.result;

                  _this7.schoolAlert();
                } else {
                  _this7.schoolAlert();

                  throw res.message;
                }
              } catch (e) {
                _this7.errorMess = e;
              }
            }, function (error) {
              _this7.errorMess = error === null || error === void 0 ? void 0 : error.message;
            });
          }
        }, {
          key: "schoolAlert",
          value: function schoolAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var modal;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.modalCtrl.create({
                      component: _switch_user_switch_user_page__WEBPACK_IMPORTED_MODULE_5__.SwitchUserPage,
                      componentProps: {
                        schoolClassData: this.userList
                      },
                      cssClass: 'view-image-modal_switchSUser'
                    });

                  case 1:
                    modal = _context3.v;
                    _context3.n = 2;
                    return modal.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _TabsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }];
      };

      _TabsPage.propDecorators = {
        fab: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: ['fab']
        }],
        fabList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: ['fabList']
        }]
      };
      _TabsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TabsPage);
      /***/
    },

    /***/
    43724:
    /*!**************************************************************!*\
      !*** ./src/app/pages/tabs/switch-user/switch-user.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-item {\n  margin-top: 10%;\n  text-align: center;\n  padding: 2%;\n  color: #6B4DC9;\n  font-weight: bold;\n}\n\n.text {\n  text-align: end;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXRjaC11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6InN3aXRjaC11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBjb2xvcjogIzZCNERDOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH0gXHJcblxyXG5cclxuICAudGV4dHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    92625:
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-bar {\n  border-top: 1px solid rgba(0, 0, 0, 0.13);\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.13) !important;\n}\n\n.fab-bt {\n  bottom: 0 !important;\n  right: 0;\n}\n\n.lbl {\n  text-align: right;\n  margin: auto;\n}\n\n.icon {\n  zoom: 1;\n}\n\n.text {\n  margin-bottom: 0px;\n}\n\n.view-image-modal {\n  --height: 50% !important;\n  align-items: flex-end !important;\n}\n\nion-icon {\n  zoom: 1.5;\n}\n\nion-content {\n  --background-repeat: no-repeat;\n  --background-size: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top;\n}\n\n.fab-row {\n  width: 100%;\n  margin-left: auto;\n  padding-right: 2%;\n}\n\n.fab-label {\n  text-align: right;\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: auto;\n  color: white;\n}\n\nbutton[ion-fab] {\n  overflow: visible;\n  position: relative;\n}\n\nbutton[ion-fab] ion-label {\n  position: absolute;\n  top: -8px;\n  left: 45px;\n  color: white;\n  background-color: rgba(70, 70, 70, 0.7);\n  line-height: 24px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.fab {\n  contain: layout;\n}\n\nion-fab-button {\n  --background: darkslategray;\n  margin-left: auto;\n}\n\nion-fab-button ion-icon {\n  color: white;\n}\n\n.fab {\n  contain: layout;\n}\n\nbutton[ion-fab] {\n  overflow: visible;\n  position: relative;\n  text-align: center !important;\n  float: center !important;\n}\n\nbutton[ion-fab] ion-label {\n  position: absolute;\n  top: -8px !important;\n  right: 40px;\n  color: #ffffff;\n  background-color: transparent;\n  line-height: 24px;\n  border-radius: 4px;\n}\n\nion-fab[bottom] {\n  bottom: 0px !important;\n  padding-bottom: 1% !important;\n}\n\nion-fab[right] {\n  right: 0px !important;\n  padding-right: 15px !important;\n}\n\n.fab-open {\n  background: blue !important;\n  opacity: 0.8;\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  bottom: 0px;\n  right: 0px;\n}\n\n.fab-close {\n  background: transparent;\n  opacity: 1;\n  width: 100%;\n  position: absolute;\n  height: unset;\n  bottom: 0px;\n  right: 0px;\n}\n\n#ListBackdrop {\n  background-color: white !important;\n  position: fixed !important;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  opacity: 0.8;\n}\n\n.logout_btn {\n  width: 56px;\n  height: 56px;\n  line-height: 65px;\n  text-align: center;\n  /* background: red; */\n  background: var(--icon-color);\n  margin-left: auto;\n  border-radius: 50%;\n  color: var(--seconday-color-change);\n  box-shadow: 0px 3px 9px #333333;\n}\n\n.iontab1 {\n  --background: #fff !important;\n  color: var(--primary-color) !important;\n}\n\n.iontab1 {\n  color: white !important;\n}\n\n.buttonCss {\n  color: #e74c3c !important;\n}\n\nh2.alertHbuttonCsseader {\n  color: #e74c3c !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFHQSxvREFBQTtBQUNKOztBQUVFO0VBQ0Usb0JBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLE9BQUE7QUFFSjs7QUFHRTtFQUVBLGtCQUFBO0FBREY7O0FBSUU7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUU7RUFDRSxTQUFBO0FBREo7O0FBR0U7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLHVCQUFBO0tBQUEsb0JBQUE7QUFBTjs7QUFHSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFFTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVI7O0FBTUk7RUFDRSxlQUFBO0FBSE47O0FBS0k7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0FBRk47O0FBR007RUFDRSxZQUFBO0FBRFI7O0FBS0k7RUFDRSxlQUFBO0FBRk47O0FBTUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQUhOOztBQUtNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUdBLGtCQUFBO0FBTFI7O0FBU0k7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0FBTk47O0FBU0k7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0FBTk47O0FBU0k7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFOTjs7QUFTSTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQU5OOztBQVVJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFQTjs7QUFXSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBRUEsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFHQSwrQkFBQTtBQVhOOztBQW1CSTtFQUdJLDZCQUFBO0VBQ0Esc0NBQUE7QUFsQlI7O0FBc0JJO0VBQ0UsdUJBQUE7QUFuQk47O0FBc0JJO0VBQ0UseUJBQUE7QUFuQk47O0FBcUJJO0VBQ0UseUJBQUE7QUFsQk4iLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAwcHggMXB4IDFweCByZ2JhKDUwLCA1MCwgNTAsIDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMykgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmZhYi1idCB7XHJcbiAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAubGJsIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuaWNvbiB7XHJcbiAgICB6b29tOiAxLjA7XHJcbiAgICAgIC8vIC5pY29uLWlubmVye1xyXG4gICAgICAvLyAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyB9XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuIC8vIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAwcHhcclxuICB9XHJcblxyXG4gIC52aWV3LWltYWdlLW1vZGFsIHtcclxuICAgIC0taGVpZ2h0OiA1MCUgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICB6b29tOjEuNTtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mYWItcm93IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZhYi1sYWJlbCB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBidXR0b25baW9uLWZhYl0ge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLThweDtcclxuICAgICAgICBsZWZ0OiA0NXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcwLCA3MCwgNzAsIDAuNyk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbiAgICBcclxuICAgIC5mYWIge1xyXG4gICAgICBjb250YWluOiBsYXlvdXQ7XHJcbiAgICB9XHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogZGFya3NsYXRlZ3JheTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZhYiB7XHJcbiAgICAgIGNvbnRhaW46IGxheW91dDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJ1dHRvbltpb24tZmFiXSB7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBmbG9hdDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgLy8gcGFkZGluZzogNHB4IDhweDtcclxuICAgIFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tZmFiW2JvdHRvbV0ge1xyXG4gICAgICBib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMSUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcbiAgICBpb24tZmFiW3JpZ2h0XSB7XHJcbiAgICAgIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmFiLW9wZW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZhYi1jbG9zZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IHVuc2V0O1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgI0xpc3RCYWNrZHJvcCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbiAgICAubG9nb3V0X2J0bntcclxuICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDY1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLyogYmFja2dyb3VuZDogcmVkOyAqLyBcclxuICAgICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgIC8vIGNvbG9yOiAjZmZmO1xyXG4gICAgICAvLyBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggOXB4ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBpb24tdGFiLWJhciB7XHJcbiAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcclxuICAgIC8vICAgbWFyZ2luOiA5cHggIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuaW9udGFiMSB7XHJcbiAgICAgIC8vIGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgICAvLy0tYmFja2dyb3VuZDogIzIzOTU2OSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOnZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlvbnRhYjEge1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uQ3Nze1xyXG4gICAgICBjb2xvcjojZTc0YzNjICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBoMi5hbGVydEhidXR0b25Dc3NlYWRlciB7XHJcbiAgICAgIGNvbG9yOiAjZTc0YzNjICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gLS1jb2xvcjogI2I1MjAyNCAhaW1wb3J0YW50O1xyXG4gICAgfSJdfQ== */";
      /***/
    },

    /***/
    1545:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/switch-user/switch-user.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"padding-left: 15px;\">\r\n      <div class=\"ion-text-wrap\">Switch User</div>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-list *ngFor=\"let data of userList\">\r\n      <ion-item (click)=\"switchUser(data.teacher_id)\" [disabled]=\"data.teacher_id == this.teacher_id ? 'true': 'false'\">\r\n        <ion-label>{{data.teacher_id}}</ion-label>\r\n        <p class=\"text\">{{data.designation}}</p>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    48474:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <ion-tabs>\r\n    <ion-tab-bar justify-content-center slot=\"bottom\" *ngIf=\"modValue != '90' && modValue != '103'\">\r\n      <ion-tab-button justify-content-center (click)=\"goToHome()\" class=\"iontab\">\r\n        <ion-icon name=\"home\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\" (click)=\"goToHome()\">Home</ion-label>\r\n        <ion-router-outlet name=\"home\" (click)=\"goToHome()\"></ion-router-outlet>\r\n      </ion-tab-button>\r\n      <!-- <ion-tab-button justify-content-center>\r\n        <ion-icon name=\"notifications\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\" (click)=\"goToNotifications()\">Inbox</ion-label>\r\n        <ion-router-outlet name=\"notification\" (click)=\"goToNotifications()\"></ion-router-outlet>\r\n      </ion-tab-button> -->\r\n      <ion-tab-button justify-content-center (click)=\"fabParent()\" class=\"iontab\">\r\n        <ion-icon name=\"ellipsis-vertical-outline\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\">More</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n    <ion-tab-bar justify-content-center slot=\"bottom\" class=\"newsecondary\" *ngIf=\"modValue == '90' || modValue == '103'\">\r\n      <ion-tab-button justify-content-center (click)=\"goToHome()\" class=\"newsecondary iontab1\">\r\n        <ion-icon name=\"home\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\" (click)=\"goToHome()\">Home </ion-label>\r\n        <ion-router-outlet name=\"home\" (click)=\"goToHome()\"></ion-router-outlet>\r\n      </ion-tab-button>\r\n      <!-- <ion-tab-button justify-content-center>\r\n        <ion-icon name=\"notifications\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\" (click)=\"goToNotifications()\">Inbox</ion-label>\r\n        <ion-router-outlet name=\"notification\" (click)=\"goToNotifications()\"></ion-router-outlet>\r\n      </ion-tab-button> -->\r\n      <ion-tab-button justify-content-center (click)=\"fabParent()\" class=\"newsecondary iontab1\">\r\n        <ion-icon name=\"ellipsis-vertical-outline\" class=\"icon\"></ion-icon>\r\n        <ion-label class=\"text\">More</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n\r\n  <ion-fab class=\"fab-bg-color fab-bt\" #fab [ngStyle]=\"getOverlayStyle()\" (click)=\"fabParent()\" vertical=\"bottom\"\r\n    horizontal=\"end\">\r\n    <ion-fab-list #fabList style=\"width: 100%;\" side=\"top\">\r\n\r\n      <ion-row class=\"fab-row\">\r\n        <ion-col class=\"flex-container lbl\">\r\n          <ion-label class=\"fab-label\">Logout</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <div class=\"logout_btn\">\r\n            <ion-icon name=\"log-out\" (click)=\"appLogout()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"fab-row\">\r\n        <ion-col class=\"flex-container lbl\">\r\n          <ion-label class=\"fab-label\">Switch User</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <div class=\"logout_btn\">\r\n            <!-- <ion-icon name=\"log-out\" (click)=\"appLogout()\"></ion-icon> -->\r\n            <ion-icon name=\"swap-horizontal-outline\" (click)=\"switchUser()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <!-- <ion-row class=\"fab-row\">\r\n        <ion-col class=\"flex-container lbl\">\r\n          <ion-label class=\"fab-label\">Change Password</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <div class=\"logout_btn\">\r\n            <ion-icon name=\"key\" (click)=\"goToChangePassword()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"fab-row\">\r\n        <ion-col class=\"flex-container lbl\">\r\n          <ion-label class=\"fab-label\">Settings</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2.5\">\r\n          <div class=\"logout_btn\">\r\n            <ion-icon name=\"key\" (click)=\"goToSettings()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row> -->\r\n\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts-es5.js.map