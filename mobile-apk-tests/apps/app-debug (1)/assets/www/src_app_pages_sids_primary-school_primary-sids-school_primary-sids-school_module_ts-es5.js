(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-sids-school_primary-sids-school_module_ts"], {
    /***/
    99623:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-sids-school/primary-sids-school-routing.module.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimarySidsSchoolPageRoutingModule": function PrimarySidsSchoolPageRoutingModule() {
          return (
            /* binding */
            _PrimarySidsSchoolPageRoutingModule
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


      var _primary_sids_school_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-sids-school.page */
      6534);

      var routes = [{
        path: '',
        component: _primary_sids_school_page__WEBPACK_IMPORTED_MODULE_0__.PrimarySidsSchoolPage
      }];

      var _PrimarySidsSchoolPageRoutingModule = /*#__PURE__*/_createClass(function PrimarySidsSchoolPageRoutingModule() {
        _classCallCheck(this, PrimarySidsSchoolPageRoutingModule);
      });

      _PrimarySidsSchoolPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimarySidsSchoolPageRoutingModule);
      /***/
    },

    /***/
    85287:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-sids-school/primary-sids-school.module.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimarySidsSchoolPageModule": function PrimarySidsSchoolPageModule() {
          return (
            /* binding */
            _PrimarySidsSchoolPageModule
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


      var _primary_sids_school_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-sids-school-routing.module */
      99623);
      /* harmony import */


      var _primary_sids_school_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-sids-school.page */
      6534);

      var _PrimarySidsSchoolPageModule = /*#__PURE__*/_createClass(function PrimarySidsSchoolPageModule() {
        _classCallCheck(this, PrimarySidsSchoolPageModule);
      });

      _PrimarySidsSchoolPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_sids_school_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimarySidsSchoolPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_primary_sids_school_page__WEBPACK_IMPORTED_MODULE_1__.PrimarySidsSchoolPage]
      })], _PrimarySidsSchoolPageModule);
      /***/
    },

    /***/
    6534:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-sids-school/primary-sids-school.page.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimarySidsSchoolPage": function PrimarySidsSchoolPage() {
          return (
            /* binding */
            _PrimarySidsSchoolPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_sids_school_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-sids-school.page.html */
      79733);
      /* harmony import */


      var _primary_sids_school_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-sids-school.page.scss */
      21389);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _PrimarySidsSchoolPage = /*#__PURE__*/function () {
        function PrimarySidsSchoolPage(fb, userService, route, router, alertService, userSessionService, sqliteDB, loadService, sidsService, alertController, platform) {
          _classCallCheck(this, PrimarySidsSchoolPage);

          this.fb = fb;
          this.userService = userService;
          this.route = route;
          this.router = router;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.sqliteDB = sqliteDB;
          this.loadService = loadService;
          this.sidsService = sidsService;
          this.alertController = alertController;
          this.platform = platform;
          this.noData = true;
          this.submitted = false;
          this.filter = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe('en-US');
          this.date = new Date().getDate();
          this.year = new Date().getFullYear();
          this.month = new Date().getMonth();
          this.myDate = "";
          this.username = this.userSessionService.emis_username();
          console.log(this.username, "this.username");
          this.subscription = this.platform.backButton.subscribeWithPriority(9999, function () {});
        }

        return _createClass(PrimarySidsSchoolPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.form.reset();
            this.sessionUserName = this.userSessionService.emis_username();
            this.sessionTypeName = this.userSessionService.emis_usertype();
            this.myDate = this.year + '-' + this.month + '-' + this.date;
            this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
            this.visitorData = [];
            this.schoolInfo = [];
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              'udise': new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
            });
          }
        }, {
          key: "getVistorData",
          value: function getVistorData(id) {
            var _this = this;

            this.userService.getVisitSids(id).subscribe(function (res) {
              _this.visitorData = [];

              if (res.dataStatus) {
                _this.visitorData = res.result;

                for (var i = 0; i < res.result.length; i++) {
                  console.log("visitId", _this.visitorData[i].Id);
                  _this.visitId = _this.visitorData[i].Id;
                  _this.VisitStatus = _this.visitorData[i].VisitStatus;
                  _this.VisitStatusLog = _this.visitorData[i].VisitStatusLog;
                }

                if (+_this.VisitStatus == 2) {
                  _this.visitId = "";
                }
              } else {
                _this.visitId = "";
                _this.VisitStatus = "";
              }

              console.log("VisitStatus", _this.VisitStatus + "    " + "VisitId", _this.visitId);
            });
          }
        }, {
          key: "getSchoolInfo",
          value: function getSchoolInfo() {
            var _this2 = this;

            debugger;

            if (this.form.valid) {
              this.userService.getSchoolInfo(this.form.value.udise).subscribe(function (res) {
                if (res.dataStatus) {
                  _this2.noData = false;
                  _this2.noDataFound = false;
                  _this2.dataFound = true;
                  _this2.schoolInfo = res.result[0];
                  _this2.userService.udiseCode = _this2.form.value.udise;

                  _this2.getVistorData(res.result[0].SclId);
                } else {
                  _this2.noData = true;
                  _this2.noDataFound = true;
                }
              });
            } else {
              this.submitted = true;
              this.alertService.error('Invalid UDISE Format');
            }
          }
        }, {
          key: "getSchoolInfoPost",
          value: function getSchoolInfoPost() {
            var _this3 = this;

            if (this.form.valid) {
              this.userService.getSchoolInfo(this.form.value.udise).subscribe(function (res) {
                if (res.dataStatus) {
                  _this3.noData = false;
                  _this3.noDataFound = false;
                  _this3.dataFound = true;
                  _this3.schoolInfo = res.result[0];
                  _this3.visitorData = [];

                  _this3.userService.getVisitSids(res.result[0].SclId).subscribe(function (res) {
                    _this3.visitorData = res.result;

                    for (var i = 0; i < res.result.length; i++) {
                      console.log(_this3.visitorData[i].Id);
                      _this3.visitId = _this3.visitorData[i].Id;
                      _this3.VisitStatus = _this3.visitorData[i].VisitStatus;
                      _this3.VisitStatusLog = _this3.visitorData[i].VisitStatusLog;
                    }

                    console.log('this.VisitStatus', _this3.VisitStatus);

                    _this3.router.navigate(['/tabs/primary-dashboard'], {
                      queryParams: {
                        'schoolId': _this3.schoolInfo.SclId,
                        'vistId': _this3.visitId,
                        'visitstatus': _this3.VisitStatus,
                        verify: "1"
                      },
                      skipLocationChange: false
                    }); // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId }, skipLocationChange: false });

                  });
                } else {
                  _this3.noData = true;
                  _this3.noDataFound = true;
                }
              });
            } else {
              this.submitted = true;
              this.alertService.error('Invalid UDISE Format');
            }
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/sids-dashboard']);
          }
        }, {
          key: "nextPage",
          value: function nextPage() {
            var _this4 = this;

            debugger;
            console.log(this.schoolInfo.SclId, "school", this.visitId);

            if (+this.schoolInfo.CattyId == 2 || +this.schoolInfo.CattyId == 3 || +this.schoolInfo.CattyId == 10) {
              if (this.visitId) {
                if (!this.VisitStatusLog) {
                  var params = {
                    Id: this.visitId,
                    SchlId: this.schoolInfo.SclId
                  };
                  var data = {
                    records: params
                  };
                  this.sidsService.SchlVisitStatus(data).subscribe(function (res) {
                    if (res.dataStatus) {
                      console.log("Responce", res);
                    }
                  });
                }

                this.router.navigate(['/tabs/primary-dashboard'], {
                  queryParams: {
                    'schoolId': this.schoolInfo.SclId,
                    'vistId': this.visitId,
                    'visitstatus': this.VisitStatus,
                    'verify': "1"
                  },
                  skipLocationChange: false
                }); // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId }, skipLocationChange: false });
              } else {
                {
                  var _data = {
                    "records": {
                      "IndexId": "",
                      "SchlId": this.schoolInfo.SclId,
                      "VistUId": this.sessionUserName,
                      "VistUTy": this.sessionTypeName,
                      "VistDate": this.todayDateFormat,
                      "VistStas": "1",
                      "VistLog": "1"
                    }
                  };
                  this.userService.saveVisitSids(_data).subscribe(function (res) {
                    // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolInfo.SclId, 'vistId': this.visitId }, skipLocationChange: false });
                    console.log(res, "data");

                    if (res.dataStatus) {
                      _this4.getSchoolInfoPost();
                    } else {
                      _this4.alertService.error(res.message);
                    }
                  });
                }
              }
            } else {
              this.alertService.error('Primary and Middle School only allowed');
            }
          }
        }, {
          key: "onKeypressEvent",
          value: function onKeypressEvent(event) {
            //debugger
            this.udiseLen = this.form.value.udise;
            var len = this.udiseLen.length;

            if (len == 11) {} else {
              this.schoolInfo = [];
              this.noData = true;
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.dataFound = false;
            this.subscription.unsubscribe();
          }
        }]);
      }();

      _PrimarySidsSchoolPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
        }];
      };

      _PrimarySidsSchoolPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-primary-sids-school',
        template: _raw_loader_primary_sids_school_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_sids_school_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimarySidsSchoolPage);
      /***/
    },

    /***/
    47224:
    /*!***********************************************************!*\
      !*** ./src/app/services/tnvn/services/loading.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
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

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        return _createClass(LoadingService, [{
          key: "present",
          value: function present(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.isLoading = true;
                    _context.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this5.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context.a(2, _context.v);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this6 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.isLoading = true;
                    _context2.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this6.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context2.a(2, _context2.v);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.isLoading = false;
                    _context3.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context3.a(2, _context3.v);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoadingService);
      /***/
    },

    /***/
    21389:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-sids-school/primary-sids-school.page.scss ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".searchCard {\n  margin: 15px;\n}\n\n.searchDiv {\n  background-color: #EBEBEB;\n  padding: 14px;\n}\n\n.udiseLabel {\n  font-size: 18px;\n  color: #8B67B3;\n}\n\n.inputFiled {\n  width: 100%;\n  zoom: 1.5;\n  margin-bottom: 15px;\n}\n\n.submitLabel {\n  color: white;\n}\n\n.butnDiv {\n  background-color: #8B67B3;\n  margin-left: 80px;\n  margin-right: 80px;\n  padding: 8px;\n}\n\n.mainDiv {\n  background-color: #DFDFDF;\n  padding: 15px;\n}\n\n.nameDiv {\n  padding: 10px;\n  background-color: white;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.secondDiv {\n  padding: 8px;\n  background-color: #F0E3FF;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  margin-bottom: 15px;\n}\n\n.lastBtnDiv {\n  background-color: #8B67B3;\n  margin-left: 80px;\n  margin-right: 80px;\n  padding: 8px;\n  text-align: center;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.label {\n  color: black;\n}\n\n.labelPrimary {\n  color: #8B67B3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktc2lkcy1zY2hvb2wucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUZBO0VBQ0ksWUFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQU1OOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQyw0QkFBQTtFQUNBLDZCQUFBO0FBUUw7O0FBTkE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQywrQkFBQTtFQUNBLGdDQUFBO0VBQ0MsbUJBQUE7QUFTTjs7QUFOQTtFQUNJLHlCQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7QUFTTjs7QUFQQTtFQUNJLFlBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7QUFXSiIsImZpbGUiOiJwcmltYXJ5LXNpZHMtc2Nob29sLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hDYXJke1xyXG4gICAgbWFyZ2luOiAxNXB4OyBcclxufVxyXG4uc2VhcmNoRGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUJFQjtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbn1cclxuLnVkaXNlTGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxufVxyXG4uaW5wdXRGaWxlZHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgem9vbToxLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5zdWJtaXRMYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnV0bkRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjY3QjM7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4ubWFpbkRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkRGREY7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbn1cclxuLm5hbWVEaXZ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4uc2Vjb25kRGl2e1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRTNGRjtcclxuICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubGFzdEJ0bkRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjY3QjM7IFxyXG4gICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogODBweDtcclxuICAgICBwYWRkaW5nOiA4cHg7IFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubGFiZWx7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcbi5sYWJlbFByaW1hcnl7XHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxufSJdfQ== */";
      /***/
    },

    /***/
    79733:
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-sids-school/primary-sids-school.page.html ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Primary School Search</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"form\">\r\n\r\n    <ion-card class=\"searchCard\">\r\n      <div class=\"searchDiv\">\r\n        <div style=\"margin-bottom: 15px; \">\r\n          <ion-label class=\"udiseLabel\">\r\n            UDISE\r\n          </ion-label>\r\n          <ion-input class=\"input-txt\" type=\"tel\" pattern=\"[0-9]*\" placeholder=\"Please Enter UDISE\"\r\n            formControlName=\"udise\" maxlength=\"11\" style=\"border: 1px solid; padding-left: 10px !important;\">\r\n          </ion-input>\r\n          <div class=\"formLine\">\r\n            {{(form.controls.udise.errors && (form.controls.udise.dirty || form.controls.udise.touched))&&\r\n            form.controls.udise.errors?.required ? 'UDISE is required' : ''}}\r\n          </div>\r\n          <div class=\"formLine\">\r\n            <p class=\"error-message\" *ngIf=\"form.controls['udise'].hasError('pattern')\">Invalid Format\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div style=\" text-align: center;\" (click)=\"getSchoolInfo()\">\r\n          <div class=\"butnDiv\">\r\n            <ion-label class=\"submitLabel\">Submit</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ion-row class=\"title-nodata\" *ngIf=\"noDataFound \">\r\n        <ion-col size=\"12\" class=\"value-data\">\r\n          <ion-label>No Data Found</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"mainDiv\" *ngIf=\"dataFound\">\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">School Name</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.SclNam}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">District</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.DistNam}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">Block</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.block_name}}</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" class=\"nameDiv\">\r\n          <ion-label class=\"label\">Management</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"secondDiv\">\r\n          <ion-label class=\"labelPrimary\">{{schoolInfo.ManagNam}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-card>\r\n\r\n  </form>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" style=\"text-align: center;\" (click)=\"nextPage()\" *ngIf=\"dataFound\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"add\" style=\"margin: 3%;\">\r\n      <ion-label style=\"color: white;\">Start Building Classification</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-sids-school_primary-sids-school_module_ts-es5.js.map