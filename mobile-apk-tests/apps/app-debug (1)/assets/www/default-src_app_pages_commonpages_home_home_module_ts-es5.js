(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_commonpages_home_home_module_ts"], {
    /***/
    48240:
    /*!***************************************************************!*\
      !*** ./src/app/pages/commonpages/home/home-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
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


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      55688);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = /*#__PURE__*/_createClass(function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      });

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    64822:
    /*!*******************************************************!*\
      !*** ./src/app/pages/commonpages/home/home.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      48240);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      55688);

      var _HomePageModule = /*#__PURE__*/_createClass(function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      });

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    55688:
    /*!*****************************************************!*\
      !*** ./src/app/pages/commonpages/home/home.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      41693);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      16087);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      7354);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/market/ngx */
      67972);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/app.component */
      55041);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/shared.service */
      7386);
      /* harmony import */


      var src_app_services_autosync_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/autosync.service */
      27952);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73494);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(router, usersessionService, statusBar, appVersion, userService, platform, authenticationService, sqliteDB, alertController, market, appComponent, networkService, autoSync, sharedService, storage, httpClient) {
          _classCallCheck(this, HomePage);

          this.router = router;
          this.usersessionService = usersessionService;
          this.statusBar = statusBar;
          this.appVersion = appVersion;
          this.userService = userService;
          this.platform = platform;
          this.authenticationService = authenticationService;
          this.sqliteDB = sqliteDB;
          this.alertController = alertController;
          this.market = market;
          this.appComponent = appComponent;
          this.networkService = networkService;
          this.autoSync = autoSync;
          this.sharedService = sharedService;
          this.storage = storage;
          this.httpClient = httpClient;
          this.cwsnMenuEnabled = false;
          this.allRecord = [];
          this.newDesignActive = false;
        }

        return _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.initializeDB();

              setTimeout(function () {
                _this.networkStatus();
              }, 1000);
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var acYr;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.sessionDetails();

                  case 1:
                    // Wait for sessionDetails to complete
                    this.newDesignActive = false;
                    this.getCurrentAppVersion();
                    acYr = localStorage.getItem("acYear");

                    if (!acYr) {
                      this.userService.GetAcYear().subscribe(function (res) {
                        localStorage.setItem("acYear", "");

                        if (res.dataStatus) {
                          var acYrDetails = Object.assign({}, res.result[0]);
                          localStorage.setItem("acYear", acYrDetails.name);
                        }
                      });
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sessionDetails",
          value: function sessionDetails() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.sessionEmisUsertype = this.usersessionService.emis_usertype();
                    this.sessionEmisUsertype1 = this.usersessionService.emis_usertype1();
                    this.sessionTeacherType = this.usersessionService.teacher_type();
                    this.sessionUserType = this.usersessionService.usertype();

                    if (this.sessionEmisUsertype == 27) {
                      this.sessionUserName = this.usersessionService.emis_username();
                    } else if (this.sessionEmisUsertype == 14) {
                      this.sessionUserName = this.usersessionService.teacher_name();
                    } else {
                      this.sessionUserName = this.usersessionService.emis_username();
                    }

                    _context2.n = 1;
                    return this.checkCwsnMenuEnabled();

                  case 1:
                    this.getMenus();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "initializeDB",
          value: function initializeDB() {
            this.sqliteDB.initDatabase();
          }
        }, {
          key: "getMenus",
          value: function getMenus() {
            var dataMod;
            this.mod = this.usersessionService.mod1();
            console.log("this.mod=", this.mod);
            this.appComponent.initialModVal();

            if (this.mod != null && this.mod != "" && this.mod != undefined) {
              var mod1 = this.mod.split(",");
              var dashDetails = new Array();
              mod1.forEach(function (mval, mi) {
                console.log("mval", mval); // dataMod = +mval;

                if (18 == +mval) {
                  dataMod = +mval;
                } else if (4 == +mval) {
                  dataMod = +mval;
                } else if (12 == +mval) {
                  dataMod = +mval;
                } // else if (158 == +mval) {
                //   dataMod = +mval
                // }

              });
              console.log("dataMod", dataMod);
            }

            if (this.mod == 73) {
              this.pmoaActive = true;
              this.activeCwsn = false;
              this.menuList = [{
                id: 73,
                menu: "MHT",
                image: "assets/icons/Inspection2.svg",
                url: "/tabs/school-list-mht"
              }, {
                id: 73,
                menu: "Referred Child MHT",
                image: "assets/icons/pmoa/MHT.svg",
                url: "/tabs/referred-child-details"
              }, // {
              //   id: 73,
              //   menu: 'AWC',
              //   image: 'assets/icons/awc/awc-home.svg',
              //   url: '/tabs/list-of-awc'
              // },
              {
                id: 73,
                menu: "AWC",
                image: "assets/icons/awc/awc-home.svg",
                url: "/tabs/design-page"
              }, {
                id: 73,
                menu: "Resource",
                image: "assets/icons/go.svg",
                url: "/tabs/awc-resource"
              }, {
                id: 73,
                menu: "NDD",
                image: "assets/icons/NDD.svg",
                url: "/tabs/ndd/school-list"
              }, {
                id: 73,
                menu: "My Patient List",
                image: "assets/icons/inspection.svg",
                url: "/tabs/deic-referred"
              }];
            } // For uniform measurement
            else if (this.mod == 103 && this.sessionEmisUsertype == 70) {
              this.pmoaActive = true;
              this.activeCwsn = false;
              this.newDesignActive = true;
              this.homeDesgnActive = true;
              this.menuList = [{
                id: 103,
                menu: "Uniform Measurement",
                image: "assets/images/uniform_measurement.svg",
                url: "/tabs/uniform-schoollist"
              }];
              this.statusBar.backgroundColorByHexString("#BE3455");
              this.uniformMeasurement();
            } // For vasipu iyakam
            else if (this.mod == 90 && this.sessionEmisUsertype == 61) {
              this.pmoaActive = true;
              this.activeCwsn = false;
              this.newDesignActive = true;
              var index = this.mod.indexOf("90");

              if (0 <= index) {
                this.homeDesgnActive = true;
              } else {
                this.homeDesgnActive = false;
              }

              this.menuList = [{
                id: 111,
                menu: "வாசிப்பு இயக்கம்",
                image: "assets/images/vasipuIyakam.svg",
                url: "/tabs/vasipu-iyakam"
              }];
              this.vasiIpyakam();
            } // else if(dataMod == 158){
            //   this.pmoaActive = true;
            //   this.activeCwsn = false;
            //   this.newDesignActive = true;
            //   this.homeDesgnActive = true
            //   this.menuList = [
            //     {
            //       id: 158,
            //       menu: 'தமிழ் மொழி கற்போம்',
            //       image: 'assets/images/vasipuIyakam.svg',
            //       url: '/tabs/stc-activity'
            //     },
            //   ]
            // }
            //  else{
            //   if ((dataMod == 18)) {
            //     this.pmoaActive = true;
            //     this.activeCwsn = false
            //     this.menuList = [
            //       {
            //         id: 4,
            //         menu: 'Leave Approval',
            //          image: 'assets/icons/leaveManagement.svg',
            //         url: '/tabs/approval-dashboard'
            //       },
            //     ];
            //   }
            else {
              if (dataMod == 4 && this.sessionEmisUsertype == 33 || dataMod == 18) {
                this.pmoaActive = true;
                this.activeCwsn = false;
                this.menuList = [{
                  id: 4,
                  menu: "STEM",
                  image: "/assets/images/STEM.svg",
                  url: "/tabs/stem-dashboard"
                }, {
                  id: 4,
                  menu: "School Search",
                  image: "assets/icons/schoolsearch.svg",
                  url: "/tabs/nearby-school"
                }];
              } else if (this.cwsnMenuEnabled && this.sessionEmisUsertype == 14) {
                this.pmoaActive = true;
                this.activeCwsn = false;
                this.menuList = [{
                  id: 11,
                  menu: "நலம் நாடி",
                  image: "assets/icons/cwsn/nalam-nadi.png",
                  url: "/tabs/cwsn/dashboard"
                }];
              } else if (this.sessionEmisUsertype == 55) {
                this.pmoaActive = true;
                this.activeCwsn = false;
                this.menuList = [{
                  id: 86,
                  menu: "Art-Culture",
                  image: "assets/icons/Art & Culture (1).svg",
                  url: "/tabs/art-culture"
                }];
              } else if (this.sessionEmisUsertype == 59 && this.sessionEmisUsertype1 == 3) {
                this.pmoaActive = true;
                this.activeCwsn = false;
                this.menuList = [{
                  id: 11,
                  menu: "Geo Fence",
                  image: "assets/icons/geofence/GeoSmcFence.svg",
                  url: "/tabs/geo-fence-dashboard"
                }];
              } else if (this.sessionEmisUsertype == 78 && this.sessionEmisUsertype1 == 1 || this.sessionTeacherType == 275 || this.sessionTeacherType == 284) {
                this.pmoaActive = true;
                this.activeCwsn = false;
                this.menuList = [{
                  id: 11,
                  menu: "Hostel",
                  image: "assets/icons/school.svg",
                  url: "/tabs/kgbv-hostel"
                }];
              } else {
                if (dataMod == 12 && this.sessionEmisUsertype == 27) {
                  this.pmoaActive = true;
                  this.activeCwsn = false;
                  this.menuList = [{
                    id: 4,
                    menu: "PMOA",
                    image: "assets/icons/doctor.svg",
                    // url: '/tabs/screening-status'
                    url: "/tabs/school-list"
                  }, {
                    id: 5,
                    menu: "Spectacle Management",
                    image: "assets/icons/spectaclet.svg",
                    url: "/tabs/spectacel-school-list"
                  }, {
                    id: 6,
                    menu: "PMOA Referred",
                    image: "assets/icons/pmoa/POMAmain.svg",
                    url: "/tabs/referred-student"
                  }];
                } else {
                  this.pmoaActive = false;
                  dataMod = [];
                  this.mod = this.usersessionService.mod1();

                  var _mod = this.mod.split(",");

                  var _dashDetails = new Array();

                  _mod.forEach(function (mval, mi) {
                    if (28 == +mval) {
                      dataMod = +mval;
                    }
                  });

                  if (dataMod == 28) {
                    this.activeCwsn = true;
                    this.menuList = [{
                      id: 1,
                      menu: "Schools Mapped",
                      image: "assets/icons/school_based.svg",
                      url: "/tabs/cooming"
                    }, {
                      id: 2,
                      menu: "CWSN Identification Camp",
                      image: "assets/icons/inspection.svg",
                      url: "tabs/student-search"
                    }, {
                      id: 3,
                      menu: "Basic Screening Tools",
                      image: "assets/icons/schoolsearch.svg",
                      url: "/tabs/cooming"
                    }];
                    this.statList = [{
                      id: 2,
                      menu: "Home Based",
                      image: "assets/icons/home_based.svg",
                      url: "/tabs/cooming"
                    }, {
                      id: 3,
                      menu: "Center Based",
                      image: "assets/icons/center_based.svg",
                      url: "/tabs/cooming"
                    }, {
                      id: 4,
                      menu: "School Based",
                      image: "assets/icons/school_based.svg",
                      url: "/tabs/cooming"
                    }];
                    this.goList = [{
                      id: 2,
                      menu: "Schemes&Benefits",
                      image: "assets/icons/schemes&Benefits.svg",
                      url: "/tabs/cooming"
                    }, {
                      id: 3,
                      menu: "Classroom Strategies",
                      image: "assets/icons/classroomStrategies.svg",
                      url: "/tabs/cooming"
                    }, {
                      id: 4,
                      menu: "Learning",
                      image: "assets/icons/learning.svg",
                      url: "/tabs/cooming"
                    }];
                  } else {
                    this.activeCwsn = false;

                    if (this.sessionEmisUsertype == 5 || this.sessionEmisUsertype == 13 || this.sessionEmisUsertype == 15) {
                      this.menuList = [{
                        id: 1,
                        menu: "School Search",
                        image: "assets/icons/schoolsearch.svg",
                        url: "/tabs/nearby-school" // url:'/tabs/newroom-general-question'

                      }, {
                        id: 2,
                        menu: "HM Search",
                        image: "assets/icons/hmsearch.svg",
                        url: "/tabs/call-hm"
                      }, {
                        id: 3,
                        menu: "My Inspection",
                        image: "assets/icons/inspection.svg",
                        url: "/tabs/tnvnmyinspection"
                      }];
                    } else {
                      this.menuList = [{
                        id: 1,
                        menu: "School Search",
                        image: "assets/icons/schoolsearch.svg",
                        url: "/tabs/nearby-school" // url:'/tabs/newroom-general-question'

                      }, {
                        id: 2,
                        menu: "HM Search",
                        image: "assets/icons/hmsearch.svg",
                        url: "/tabs/cooming"
                      }, {
                        id: 3,
                        menu: "My Inspection",
                        image: "assets/icons/inspection.svg",
                        url: "/tabs/tnvnmyinspection"
                      }];
                    }

                    this.statList = [{
                      id: 1,
                      menu: "School",
                      image: "assets/icons/school.svg",
                      url: "/tabs/statistic"
                    }, {
                      id: 2,
                      menu: "Teacher",
                      image: "assets/icons/teacher.svg",
                      url: "/tabs/statistic"
                    }, {
                      id: 3,
                      menu: "Student",
                      image: "assets/icons/student.svg",
                      url: "/tabs/statistic"
                    }];
                    this.goList = [{
                      id: 1,
                      menu: "GO",
                      image: "assets/icons/go.svg",
                      url: "/tabs/cooming"
                    }, {
                      id: 2,
                      menu: "Circular",
                      image: "assets/icons/circular.svg",
                      url: "/tabs/cooming"
                    }]; // this.moduleList = [
                    //   {
                    //     id: 1,
                    //     menu: 'Inspection',
                    //     image: 'assets/icons/Inspection2.svg',
                    //     url: '/tabs/dashboard'
                    //   }
                    // ];

                    this.modulesList = [{
                      id: 73,
                      menu: "MHT",
                      image: "assets/icons/Inspection2.svg",
                      url: "/tabs/school-list-mht"
                    }, {
                      id: 73,
                      menu: "AWC",
                      image: "assets/icons/awc/awc-home.svg",
                      url: "/tabs/list-of-awc"
                    }, {
                      id: 73,
                      menu: "Resource",
                      image: "assets/icons/go.svg",
                      url: "/tabs/awc-resource"
                    }, {
                      id: 73,
                      menu: "Referred Child MHT",
                      image: "assets/icons/pmoa/MHT.svg",
                      url: "/tabs/referred-child-details"
                    }, {
                      id: 29,
                      menu: "ITK",
                      image: "assets/icons/cwsn/CWSN.svg",
                      url: "/tabs/itk-center-dashboard"
                    }, {
                      id: 10,
                      menu: "RC Visit",
                      image: "assets/icons/Inspection2.svg",
                      url: "/tabs/rc-tablelist"
                    }, {
                      id: 75,
                      menu: "DIPE Inspection",
                      image: "assets/icons/Inspection2.svg",
                      url: "/tabs/dynamic-table-list"
                    }, {
                      id: 23,
                      menu: "Inspection",
                      image: "assets/icons/Inspection2.svg",
                      url: "/tabs/dashboard"
                    }, // {
                    //   id: 20,
                    //   menu: 'Palli Parvai',
                    //   image: 'assets/icons/observation.svg',
                    //   url: '/tabs/module-menu'
                    // },
                    {
                      id: 101,
                      menu: "Mass Cleaning Visit",
                      image: "assets/icons/school_cleaning.svg",
                      url: "/tabs/mass-cleaning"
                    }, {
                      id: 102,
                      menu: "Civil Inspection",
                      image: "assets/icons/sids.svg",
                      url: "/tabs/work-inspection"
                    }, {
                      id: 106,
                      menu: "BaLA painting work Inspection",
                      image: "assets/icons/Inspection2.svg",
                      url: "/tabs/dynamic-table-list"
                    }, // {
                    //   id: 101,
                    //   menu: 'Olirum Vagupparai',
                    //   image: 'assets/icons/classroom_painting.svg',
                    //   url: '/tabs/olirum-vagupparai'
                    // },
                    // {
                    //   id: 80,
                    //   menu: 'பயிற்சி பார்வை',
                    //   image: 'assets/icons/EnnumEzhuthumIcon.svg',
                    //   // url:'/tabs/writing-inspection'
                    //   url:'/tabs/questions1'
                    // },
                    {
                      id: 60,
                      menu: "பயிற்சி பார்வை",
                      image: "assets/icons/EnnumEzhuthumIcon.svg",
                      // url:'/tabs/writing-inspection'
                      url: "/tabs/new-inspection-question"
                    }, {
                      id: 60,
                      menu: "My Inspection",
                      image: "assets/icons/Inspection2.svg",
                      url: "/tabs/inspectionEnnumezhuthum"
                    }, {
                      id: 104,
                      menu: "Puthiya Bharatha Ezhutharivu Thittam",
                      image: "assets/images/nilp/NILP.svg",
                      url: "/tabs/ezhutharivu-thittam/schoollist"
                    }, // {  // commanded by Priya
                    //   id: 60,
                    //   menu: 'Staff Grievance',
                    //   image: 'assets/icons/oosc.svg',
                    //   url: '/tabs/staff-grievance'
                    // },
                    // {
                    //   id: 60,
                    //   menu: 'பயிற்சி பார்வை',
                    //   image: 'assets/icons/EnnumEzhuthumIcon.svg',
                    //   // url:'/tabs/writing-inspection'
                    //   url:'/tabs/questions2'
                    // },
                    {
                      id: 15,
                      menu: "OOSC",
                      image: "assets/icons/oosc.svg",
                      url: "/tabs/oosctype" //  url: '/tabs/ooscnewsurvey'

                    }, {
                      id: 86,
                      menu: "Art-Culture",
                      image: "assets/icons/Art & Culture (1).svg",
                      url: "/tabs/art-culture"
                    }, {
                      id: 47,
                      menu: "Training Attendance",
                      image: "assets/icons/training.svg",
                      url: "/tabs/training-attendance"
                    }, // {
                    //   id: 20,
                    //   menu: 'பள்ளி பார்வை',
                    //   image: 'assets/icons/observation.svg',
                    //   url: '/tnvntabs/page-route/dashboardc'
                    // },
                    // {
                    //   id: 29,
                    //   menu: 'ITK Center Support',
                    //   image: 'assets/icons/observation.svg',
                    //   url: '/tabs/teacher/volunteer-search'
                    // },
                    {
                      id: 28,
                      menu: "CWSN Identification Camp",
                      image: "assets/icons/inspection.svg",
                      url: "tabs/student-search"
                    }, {
                      id: 41,
                      menu: "e-Profile",
                      image: "assets/icons/leave/eSRfill.svg",
                      url: "/tabs/e-sr"
                    }, {
                      id: 158,
                      menu: this.usersessionService.emis_usertype() == 8 ? "Special Training Centers" : "Residential Special Training Centers",
                      image: "assets/icon/STC_Activity.svg",
                      url: "/tabs/stc-dashboard"
                    }, {
                      id: 105,
                      menu: "GIS",
                      image: "assets/icon/gis_location.svg",
                      url: "/tabs/gis-school-location"
                    }, {
                      id: 115,
                      menu: "VE Internship Monitoring",
                      image: "assets/icons/oosc.svg",
                      url: "/tabs/vocational-intern"
                    }];

                    if (this.cwsnMenuEnabled && this.sessionEmisUsertype == 14) {
                      this.modulesList.push({
                        id: 11,
                        menu: "நலம் நாடி",
                        image: "assets/icons/cwsn/nalam-nadi.png",
                        url: "/tabs/cwsn/dashboard"
                      });
                    }

                    this.mod = this.usersessionService.mod1();

                    var _mod2 = this.mod.split(",");

                    var _dashDetails2 = new Array();

                    this.modulesList.forEach(function (lval, li) {
                      _mod2.forEach(function (mval, mi) {
                        if (lval.id == +mval) {
                          _dashDetails2.push(lval);
                        }
                      });
                    });
                    this.modulesList = [];
                    this.modulesList = _dashDetails2;
                  }
                }
              }
            } // }

          }
        }, {
          key: "localData",
          value: function localData() {
            var _this2 = this;

            var query = "SELECT * FROM vasipuIyakam" + ' WHERE Status = "' + 0 + '" ';
            return this.sqliteDB.getDataLocalDB(query).then(function (datas) {
              if (datas.rows.length > 0) {
                _this2.dataList = [];

                for (var i = 0; i < datas.rows.length; i++) {
                  _this2.dataList.push(datas.rows.item(i));
                }

                var data = {
                  records: {
                    Name: _this2.dataList[0].Name,
                    Phone: _this2.dataList[0].Phone,
                    Dob: _this2.dataList[0].Dob,
                    AadharNo: _this2.dataList[0].AadharNo,
                    AccNo: _this2.dataList[0].AccNo,
                    IfscCode: _this2.dataList[0].IfscCode,
                    Branch: _this2.dataList[0].Branch,
                    BankName: _this2.dataList[0].BankName,
                    UserId: _this2.dataList[0].UserId,
                    Status: 1
                  }
                };

                _this2.userService.viProfileEdit(data).subscribe(function (response) {
                  var query = 'UPDATE vasipuIyakam SET Status="' + 1 + '", AadharNo="' + _this2.dataList[0].AadharNo + '", Name="' + _this2.dataList[0].Name + '",Dob="' + _this2.dataList[0].Dob + '", Phone="' + _this2.dataList[0].Phone + '", AccNo="' + _this2.dataList[0].AccNo + '", IfscCode="' + _this2.dataList[0].IfscCode + '", Branch="' + _this2.dataList[0].Branch + '", BankName="' + _this2.dataList[0].BankName + '" WHERE UserId = ' + _this2.dataList[0].UserId;
                  return _this2.sqliteDB.update(query).then(function (res) {});
                });
              } else {
                console.log("no data in profile");
              }
            });
          }
        }, {
          key: "uniformMeasurement",
          value: function uniformMeasurement() {
            var _this3 = this;

            var query = "SELECT * FROM uniformStudentlistData" + ' WHERE isCompleted = "' + "3" + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this3.noteSync = true;
                _this3.uniformData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this3.uniformData.push(data.rows.item(i));
                }

                console.log(_this3.uniformData, "uniformData");

                _this3.onSave();
              } else {
                console.log("no uniform data");
              }
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this4 = this;

            var _loop = function _loop(i) {
              var data = {
                records: {
                  id: _this4.uniformData[i].IndexId,
                  school_id: _this4.uniformData[i].school_id,
                  "class": _this4.uniformData[i]["class"],
                  class_section: _this4.uniformData[i].class_section,
                  student_id: _this4.uniformData[i].user_id,
                  user_id: _this4.usersessionService.emis_username(),
                  status: "2",
                  "boys_shoulder_len ": _this4.uniformData[i].boys_shoulder_len,
                  "boys_shirt_height ": _this4.uniformData[i].boys_shirt_height,
                  "boys_hand_length ": _this4.uniformData[i].boys_hand_length,
                  "boys_chest_circum ": _this4.uniformData[i].boys_chest_circum,
                  "boys_hand_circum ": _this4.uniformData[i].boys_hand_circum,
                  "boys_hip_circum ": _this4.uniformData[i].boys_hip_circum,
                  "boys_Pant_height ": _this4.uniformData[i].boys_Pant_height,
                  "boys_thigh_circum ": _this4.uniformData[i].boys_thigh_circum,
                  "boys_leg_circum ": _this4.uniformData[i].boys_leg_circum,
                  girls_top_sholder: _this4.uniformData[i].girls_top_sholder,
                  girls_top_height: _this4.uniformData[i].girls_top_height,
                  girls_top_hand_len: _this4.uniformData[i].girls_top_hand_len,
                  girls_top_chest_circum: _this4.uniformData[i].girls_top_chest_circum,
                  girls_top_hand_circum: _this4.uniformData[i].girls_top_hand_circum,
                  // "girls_top_hip_circum": "",
                  // "girls_top_leg_circum": "",
                  girls_bottom_height: _this4.uniformData[i].girls_bottom_height,
                  girls_bottom_hip_circum: _this4.uniformData[i].girls_bottom_hip_circum,
                  girls_bottom_leg_circum: _this4.uniformData[i].girls_bottom_leg_circum,
                  girls_overcoat_sholder: _this4.uniformData[i].girls_overcoat_sholder,
                  girls_overcoat_height: _this4.uniformData[i].girls_overcoat_height,
                  girls_overcoat_chest_cir: _this4.uniformData[i].girls_overcoat_chest_cir
                }
              };

              _this4.userService.submitUniformData(data).subscribe(function (res) {
                if (res.dataStatus) {
                  var query1 = "DELETE FROM uniformschoollists";
                  var query3 = 'UPDATE uniformStudentlistData SET isCompleted = "' + 2 + '", status = "' + "2" + '" WHERE uniformStudentlistData.user_id = "' + _this4.uniformData[i].user_id + '" And uniformStudentlistData.school_id = "' + _this4.uniformData[i].school_id + '"'; // let query1 = 'UPDATE uniformmeasuredData SET sync = "' + '3' + '" WHERE uniformmeasuredData.student_id = "' + this.uniformData[i].student_id + '" And uniformmeasuredData.school_id = "' + this.uniformData[i].school_id + '"';
                  // this.sqliteDB.update(query1).then(res => {

                  _this4.sqliteDB.update(query3).then(function (res) {
                    _this4.sqliteDB.update(query1).then(function (res) {
                      _this4.noteSync = false;
                    });
                  });
                }
              });
            };

            for (var i = 0; i < this.uniformData.length; i++) {
              _loop(i);
            }
          }
        }, {
          key: "vasiIpyakam",
          value: function vasiIpyakam() {
            var _this5 = this;

            this.noteSync = false;
            this.localData();
            var query = "SELECT * FROM VasipuIStatusDetail";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this5.studentStatusData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this5.studentStatusData.push(data.rows.item(i));
                }

                console.log(_this5.studentStatusData);

                var _loop2 = function _loop2() {
                  if (_this5.studentStatusData[m].status == 2) {
                    _this5.noteSync = true;
                  }

                  if (_this5.studentStatusData[m].status == 2) {
                    var datajson = JSON.parse(_this5.studentStatusData[m].ClsSec);
                    var userID = _this5.studentStatusData[m].userId;
                    var schoolID = _this5.studentStatusData[m].schlid;
                    var batchID = _this5.studentStatusData[m].batchId;
                    var _data = {
                      records: [{
                        IndexId: "",
                        UserId: _this5.studentStatusData[m].userId,
                        SchlId: _this5.studentStatusData[m].schlid,
                        Batch: _this5.studentStatusData[m].batchId,
                        StudId1: _this5.studentStatusData[m].stud_1,
                        StudId2: _this5.studentStatusData[m].stud_2,
                        StudId3: _this5.studentStatusData[m].stud_3,
                        StartTime: _this5.studentStatusData[m].start,
                        EndTime: _this5.studentStatusData[m].end,
                        StartPhoto: _this5.studentStatusData[m].startphoto,
                        StartPhotoName: _this5.studentStatusData[m].startphotoblob,
                        EndPhoto: _this5.studentStatusData[m].endphoto,
                        EndPhotoName: _this5.studentStatusData[m].endphotoblob,
                        StartLat: _this5.studentStatusData[m].lat1,
                        StartLongi: _this5.studentStatusData[m].long1,
                        EndLat: _this5.studentStatusData[m].lat2,
                        EndLongi: _this5.studentStatusData[m].long2,
                        Data: datajson
                      }]
                    };

                    _this5.userService.submitSessionData(_data).subscribe(function (res) {
                      console.log(res);

                      if (res.dataStatus) {
                        var query5 = 'UPDATE VIStatusbatchDatas SET sync = 3 WHERE VIStatusbatchDatas.userid = "' + userID + '" And VIStatusbatchDatas.batch = "' + batchID + '"';
                        var query2 = 'UPDATE VasipuIStatusDetail SET status = 3 WHERE VasipuIStatusDetail.schlid = "' + schoolID + '" And VasipuIStatusDetail.batchId = "' + batchID + '"';
                        return _this5.sqliteDB.update(query5).then(function (res) {
                          return _this5.sqliteDB.update(query2).then(function (res) {
                            console.log("upload start session");

                            if (_this5.studentStatusData.length == m) {
                              _this5.noteSync = false;
                            }
                          });
                        });
                      } else {}
                    });
                  }
                };

                for (var m = 0; m < _this5.studentStatusData.length; m++) {
                  _loop2();
                }
              } else {}
            });
          }
        }, {
          key: "goToMenu",
          value: function goToMenu(item) {
            this.router.navigate([item.url], {
              queryParams: {
                title: item.menu
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "goToModule",
          value: function goToModule(item) {
            debugger; // this.router.navigate([item.url]);

            if (item.menu == "Staff Grievance") {
              this.router.navigate(["tabs/staff-grievance"], {
                queryParams: {
                  pageid: 1
                },
                skipLocationChange: false
              });
            } else if (item.menu == "DIPE Inspection") {
              this.router.navigate([item.url], {
                queryParams: {
                  formId: 169
                },
                skipLocationChange: false
              });
            } else if (item.menu == "BaLA painting work Inspection") {
              this.router.navigate([item.url], {
                queryParams: {
                  formId: 187
                },
                skipLocationChange: false
              });
            } else {
              this.router.navigate([item.url], {
                queryParams: {
                  Id: item.id
                },
                skipLocationChange: false
              });
            }
          }
        }, {
          key: "onStatistic",
          value: function onStatistic(item) {
            this.router.navigate([item.url], {
              queryParams: {
                Id: item.id,
                Menu: item.menu
              },
              skipLocationChange: false
            });
          } // App Info Force Update ***

        }, {
          key: "getCurrentAppVersion",
          value: function getCurrentAppVersion() {
            var _this6 = this;

            this.userService.getAppVersion().subscribe(function (res) {
              if (res.dataStatus) {
                var newVersionInfo = res.records;
                _this6.latestVersion = res.records.version;

                _this6.appVersion.getVersionNumber().then(function (currentVerRes) {
                  if (_this6.latestVersion > currentVerRes) {
                    _this6.presentAlertConfirmExit("Latest Version Is Available. Please Update! (V " + _this6.latestVersion + ")", newVersionInfo.release_notes);
                  }
                });
              }
            });
          }
        }, {
          key: "checkCwsnMenuEnabled",
          value: function checkCwsnMenuEnabled() {
            var _this7 = this;

            return new Promise(function (resolve) {
              var teacherTypeId = _this7.sessionTeacherType;

              if (teacherTypeId && _this7.sessionEmisUsertype == 14) {
                _this7.userService.getcwsnmenuenable(teacherTypeId).subscribe({
                  next: function next(res) {
                    if (res && res.dataStatus && res.data && res.data.length > 0) {
                      var teacherData = res.data[0];

                      if (teacherData.role_type === 1 && teacherData.id == teacherTypeId && teacherData.user_type == 14) {
                        _this7.cwsnMenuEnabled = true;
                        console.log("நலம் நாடி menu enabled");
                      } else {
                        _this7.cwsnMenuEnabled = false;
                        console.log("நலம் நாடி menu NOT enabled - role_type is not 1");
                      }
                    } else {
                      _this7.cwsnMenuEnabled = false;
                    }

                    resolve(); // Resolve after API call completes
                  },
                  error: function error(err) {
                    console.error("Error checking CWSN menu status:", err);
                    _this7.cwsnMenuEnabled = false;
                    resolve(); // Resolve even on error
                  }
                });
              } else {
                _this7.cwsnMenuEnabled = false;
                resolve(); // Resolve immediately if conditions not met
              }
            });
          }
        }, {
          key: "presentAlertConfirmExit",
          value: function presentAlertConfirmExit(header, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this8 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: header,
                      message: message,
                      cssClass: "versionAlert",
                      buttons: [{
                        text: "Okay",
                        handler: function handler() {
                          window.open("market://details?id=in.gov.tnschools.monitoring", "_system", "location=no");

                          _this8.authenticationService.appLogout();
                        }
                      }],
                      backdropDismiss: false
                    });

                  case 1:
                    alert = _context3.v;
                    _context3.n = 2;
                    return alert.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "networkStatus",
          value: function networkStatus() {
            var _this9 = this;

            this.networkService.onNetworkChange().subscribe(function (status) {
              if (status == src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__.ConnectionStatus.Online) {
                console.log("AutoSync Started");

                if (!_this9.sharedService.internetData) {
                  console.log("Auto Sync Triggerd");

                  _this9.autoSync.OlirrumVagupparai();

                  _this9.autoSync.GisLocation();

                  _this9.sharedService.internetData = true;
                }
              } else {
                _this9.sharedService.internetData = false;
                console.log("AutoSync Stopped");
              }
            });
          }
        }]);
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__.StatusBar
        }, {
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__.AppVersion
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_7__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }, {
          type: _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_4__.Market
        }, {
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService
        }, {
          type: src_app_services_autosync_service__WEBPACK_IMPORTED_MODULE_11__.AutosyncService
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_10__.SharedService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_16__.Storage
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    16087:
    /*!*******************************************************!*\
      !*** ./src/app/pages/commonpages/home/home.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".vasiiyagamNote {\n  font-size: 12px;\n  color: red;\n  background-color: #fff;\n  padding: 3%;\n  margin: 3%;\n}\n\n.new-menu {\n  border: 1px solid;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: auto 10px;\n}\n\n.timer {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFBWSxVQUFBO0FBRWhCOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmFzaWl5YWdhbU5vdGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAzJTttYXJnaW46IDMlOyBcclxufVxyXG5cclxuLm5ldy1tZW51IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG59XHJcblxyXG4udGltZXIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuIl19 */";
      /***/
    },

    /***/
    41693:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/commonpages/home/home.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"homeDesgnActive\">\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-title class=\"newprimary\">\r\n      <ion-row>\r\n        <ion-col size=\"10.5\" class=\"username\" style=\"padding-left:10px\">\r\n          <ion-col size=\"9\" style=\"display:inline-block;\">\r\n            <ion-icon src=\"../assets/icons/user.svg\" style=\"width:25px;vertical-align: text-top;font-size: 25px;\">\r\n            </ion-icon>\r\n            <span class=\"usertxt-big\" style=\"padding-left: 3%;font-weight: 600;font-size: 18px;\">{{sessionUserName}}</span><br>\r\n          </ion-col>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"username flex-center\"  style=\"padding-right:10px\">\r\n          <!-- <ion-icon src=\"../assets/icons/notification.svg\" style=\"font-size: 30px;zoom:0.8\"></ion-icon> -->\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"!homeDesgnActive\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      <ion-row>\r\n        <ion-col size=\"10.5\" class=\"username\" style=\"padding-left:10px\">\r\n          <ion-col size=\"9\" style=\"display:inline-block;\">\r\n            <ion-icon src=\"../assets/icons/user.svg\" style=\"width:25px;vertical-align: text-top;font-size: 25px;\">\r\n            </ion-icon>\r\n            <span class=\"usertxt-big\" style=\"padding-left: 3%;font-weight: 600;font-size: 18px;\">{{sessionUserName}}</span><br>\r\n          </ion-col>\r\n        </ion-col>\r\n        <ion-col size=\"1.5\" class=\"username flex-center\"  style=\"padding-right:10px\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"!activeCwsn && !homeDesgnActive\">\r\n\r\n    <ion-row class=\"menu-txt\">\r\n      <ion-col size=\"12\" class=\"head-txt\">\r\n        <ion-label>Menu</ion-label> \r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of menuList\">\r\n        <ion-row (click)=\"goToMenu(item)\" >\r\n          <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n          <ion-col size=\"12\" class=\"menu-text\">\r\n            <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"this.sessionEmisUsertype == 61 && noteSync\" class=\"vasiiyagamNote\">\r\n      <ion-col size=\"12\">\r\n        <div>\r\n          <p>”Your data is not synced to server. Please turn on your internet connection.”</p> \r\n          </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"menu-txt\" *ngIf=\"!pmoaActive\">\r\n      <ion-col size=\"12\" class=\"head-txt\">\r\n        <ion-label>Statistics</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of statList\">\r\n        <ion-row (click)=\"onStatistic(item)\">\r\n          <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n          <ion-col size=\"12\" class=\"menu-text\">\r\n            <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"primary\" *ngIf=\"!pmoaActive\">\r\n      <ion-col size=\"12\" style=\"text-align:left;padding-left: 15px;\r\n      font-weight: 600;\">\r\n        <ion-label style=\"font-size:13px;\">Actions Speak Louder Than Words. ...</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"menu-txt\" *ngIf=\"!pmoaActive\">\r\n      <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of moduleList\">\r\n        <ion-row (click)=\"goToModule(item)\" >\r\n          <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n          <ion-col size=\"12\" class=\"menu-text\">\r\n            <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of modulesList\">\r\n        <ion-row (click)=\"goToModule(item)\" >\r\n          <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n          <ion-col size=\"12\" class=\"menu-text\">\r\n            <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-row class=\"menu-txt\" *ngIf=\"!pmoaActive\">\r\n      <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of goList\">\r\n        <ion-row (click)=\"goToMenu(item)\" >\r\n          <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n          <ion-col size=\"12\" class=\"menu-text\">\r\n            <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"!activeCwsn && homeDesgnActive\">\r\n\r\n  <ion-row class=\"menu-txt\">\r\n    <ion-col size=\"12\" class=\"newprimaryTex\" style=\"text-align: left;\">\r\n      <ion-label>Menus</ion-label> \r\n    </ion-col>\r\n    <ion-col size=\"4\" *ngFor=\"let item of menuList\" class=\"new-menu\">\r\n      <ion-row (click)=\"goToMenu(item)\">\r\n          <img src=\"{{item.image}}\" class=\"menu-icon\" >\r\n          <ion-col size=\"12\" class=\"menu-text\">\r\n            <ion-label class=\"newsecondaryTex\">{{item.menu}}</ion-label>\r\n          </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"this.sessionEmisUsertype == 61 && noteSync\" class=\"vasiiyagamNote\">\r\n    <ion-col size=\"12\">\r\n      <div>\r\n        <p>”Your data is not synced to server. Please turn on your internet connection.”</p> \r\n        </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row *ngIf=\"this.sessionEmisUsertype == 70 && noteSync\" class=\"vasiiyagamNote\">\r\n    <ion-col size=\"12\">\r\n      <div>\r\n        <p>”Your data is not synced to server. Please turn on your internet connection.”</p> \r\n        </div>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"menu-txt\" *ngIf=\"!pmoaActive\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <ion-label>Statistics</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of statList\">\r\n      <ion-row (click)=\"onStatistic(item)\">\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"primary\" *ngIf=\"!pmoaActive\">\r\n    <ion-col size=\"12\" style=\"text-align:left;padding-left: 15px;\r\n    font-weight: 600;\">\r\n      <ion-label style=\"font-size:13px;\">Actions Speak Louder Than Words. ...</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"menu-txt\" *ngIf=\"!pmoaActive\">\r\n    <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of moduleList\">\r\n      <ion-row (click)=\"goToModule(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of modulesList\">\r\n      <ion-row (click)=\"goToModule(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row class=\"menu-txt\" *ngIf=\"!pmoaActive\">\r\n    <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of goList\">\r\n      <ion-row (click)=\"goToMenu(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-content class=\"secondary\" *ngIf=\"activeCwsn\">\r\n\r\n  <ion-row class=\"menu-txt\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <ion-label>Special Educators</ion-label> \r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of menuList\">\r\n      <ion-row (click)=\"goToMenu(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"menu-txt\" *ngIf=\"this.mod != 73\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <ion-label>Support Type</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of statList\">\r\n      <ion-row (click)=\"onStatistic(item)\">\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"menu-txt\" *ngIf=\"this.mod != 73\">\r\n    <ion-col size=\"12\" class=\"head-txt\">\r\n      <ion-label>Resource Bank</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" class=\"menu\" *ngFor=\"let item of goList\">\r\n      <ion-row (click)=\"goToMenu(item)\" >\r\n        <img src=\"{{item.image}}\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"lbl-text\">{{item.menu}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n<ion-footer class=\"footer-bckclr\" *ngIf=\"!homeDesgnActive\">\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\" style=\"font-size:18px\">\r\n     App Version : <span> {{latestVersion}}</span>\r\n    </ion-label>\r\n  </div>\r\n</ion-footer>\r\n\r\n<ion-footer class=\"newprimary\" *ngIf=\"homeDesgnActive\">\r\n  <div class=\"footer-txt\">\r\n    <ion-label class=\"footer-txt-clr\" style=\"font-size:18px\">\r\n     App Version : <span> {{latestVersion}}</span>\r\n    </ion-label>\r\n  </div>\r\n</ion-footer>\r\n\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_commonpages_home_home_module_ts-es5.js.map