(function () {
  function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(typeof e + " is not iterable"); }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_school-list_school-list_module_ts"], {
    /***/
    54116:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/cwsn/school-list/school-list-routing.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpecialEducatorsPageRoutingModule": function SpecialEducatorsPageRoutingModule() {
          return (
            /* binding */
            _SpecialEducatorsPageRoutingModule
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


      var _school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list.page */
      53427);

      var routes = [{
        path: '',
        component: _school_list_page__WEBPACK_IMPORTED_MODULE_0__.SpecialEducatorsPage
      }];

      var _SpecialEducatorsPageRoutingModule = /*#__PURE__*/_createClass(function SpecialEducatorsPageRoutingModule() {
        _classCallCheck(this, SpecialEducatorsPageRoutingModule);
      });

      _SpecialEducatorsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SpecialEducatorsPageRoutingModule);
      /***/
    },

    /***/
    67923:
    /*!**************************************************************!*\
      !*** ./src/app/pages/cwsn/school-list/school-list.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpecialEducatorsPageModule": function SpecialEducatorsPageModule() {
          return (
            /* binding */
            _SpecialEducatorsPageModule
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


      var _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list-routing.module */
      54116);
      /* harmony import */


      var _school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page */
      53427);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var _SpecialEducatorsPageModule = /*#__PURE__*/_createClass(function SpecialEducatorsPageModule() {
        _classCallCheck(this, SpecialEducatorsPageModule);
      });

      _SpecialEducatorsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpecialEducatorsPageRoutingModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_school_list_page__WEBPACK_IMPORTED_MODULE_1__.SpecialEducatorsPage]
      })], _SpecialEducatorsPageModule);
      /***/
    },

    /***/
    53427:
    /*!************************************************************!*\
      !*** ./src/app/pages/cwsn/school-list/school-list.page.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SpecialEducatorsPage": function SpecialEducatorsPage() {
          return (
            /* binding */
            _SpecialEducatorsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-list.page.html */
      22232);
      /* harmony import */


      var _school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page.scss */
      14081);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/shared.service */
      7386);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);

      var _SpecialEducatorsPage = /*#__PURE__*/function () {
        function SpecialEducatorsPage(router, route, cwsnService, sqliteDB, alertService, http, networkService, sharedService) {
          _classCallCheck(this, SpecialEducatorsPage);

          this.router = router;
          this.route = route;
          this.cwsnService = cwsnService;
          this.sqliteDB = sqliteDB;
          this.alertService = alertService;
          this.http = http;
          this.networkService = networkService;
          this.sharedService = sharedService;
          this.hideSchoolList = false;
          this.totalSchool = 0;
          this.totalUnScreenSchool = 0;
          this.totalScreenSchool = 0;
          this.totalNoCWSNStudents = 0;
          this.schoolList = [];
          this.schl_chk_count = 0;
          this.searchText = '';
        }

        return _createClass(SpecialEducatorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('github test master');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.schl_chk_count = 0;
            this.route.params.subscribe(function (data) {
              var id = parseInt(data.id);
              _this.userId = id;
            });
            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title;
            this.mode = this.routeData.queryParams.mode; // ====schoollist data check in local db======

            this.cwsnService.cwsnP1Post('load', 0);
            this.checkLocalDB();
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var query;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.schoolList = [];
                    query = 'SELECT * FROM cwsn_sch_list' + ' WHERE ZoneId = "' + this.userId + '"';
                    _context3.n = 1;
                    return this.sqliteDB.executeQuery(query).then(function (res) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var _this3 = this;

                        var temp, i, schoolList, _loop, _i;

                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              if (!(res.rows.length > 0)) {
                                _context2.n = 4;
                                break;
                              }

                              temp = [];

                              for (i = 0; i < res.rows.length; i++) {
                                // Object.assign(temp[i], { isChecked: false });
                                temp.push(res.rows.item(i));
                              }

                              schoolList = temp;
                              schoolList = schoolList.filter(function (value, index, self) {
                                return index === self.findIndex(function (t) {
                                  return t.SchlId === value.SchlId && t.SchlId === value.SchlId;
                                });
                              }); // this.schl_chk_count = 0;

                              _loop = /*#__PURE__*/_regenerator().m(function _loop(_i) {
                                var sec_query;
                                return _regenerator().w(function (_context) {
                                  while (1) switch (_context.n) {
                                    case 0:
                                      sec_query = 'SELECT * FROM cwsn_student_list' + ' WHERE school_key_id = "' + schoolList[_i].SchlId + '"';
                                      debugger;
                                      _context.n = 1;
                                      return _this3.sqliteDB.executeQuery(sec_query).then(function (res) {
                                        if (res.rows.length > 0) {
                                          var schl_temp = [];

                                          for (var j = 0; j < res.rows.length; j++) {
                                            schl_temp.push(res.rows.item(j));
                                          }

                                          ;
                                          _this3.studentData = schl_temp;
                                          var tot = 0;
                                          var cwsn_tot = 0;
                                          var Scrn = 0;
                                          var Unscrn = 0;
                                          var nocwsncnt = 0;

                                          var schl_total_filter = _this3.studentData.filter(function (obj) {
                                            return obj.school_key_id == schoolList[_i].SchlId;
                                          });

                                          var schl_cwsn_total_filter = _this3.studentData.filter(function (obj) {
                                            return obj.school_key_id == schoolList[_i].SchlId && obj.cwsnStatus != null;
                                          });

                                          var schl_scrn_filter = _this3.studentData.filter(function (obj) {
                                            return obj.school_key_id == schoolList[_i].SchlId && obj.cwsnStatus != null && obj.ScrSts != null && obj.ScrSts != '';
                                          });

                                          var schl_unscrn_filter = _this3.studentData.filter(function (obj) {
                                            return obj.school_key_id == schoolList[_i].SchlId && obj.cwsnStatus != null && (obj.ScrSts == null || obj.ScrSts == '');
                                          });

                                          var schl_no_filter = _this3.studentData.filter(function (obj) {
                                            return obj.school_key_id == schoolList[_i].SchlId && obj.cwsnStatus == null || obj.cwsnStatus == '';
                                          });

                                          if (schl_total_filter.length > 0) {
                                            //cwsnStatus
                                            tot = schl_total_filter.length;
                                          }

                                          if (schl_cwsn_total_filter.length > 0) {
                                            //cwsnStatus
                                            cwsn_tot = schl_cwsn_total_filter.length;
                                          }

                                          if (schl_scrn_filter.length > 0) {
                                            //cwsnStatus
                                            Scrn = schl_scrn_filter.length;
                                          }

                                          if (schl_unscrn_filter.length > 0) {
                                            //cwsnStatus
                                            Unscrn = schl_unscrn_filter.length;
                                          }

                                          if (schl_no_filter.length > 0) {
                                            //cwsnStatus
                                            nocwsncnt = schl_no_filter.length;
                                          }

                                          var value = _this3.filterScreenUnScreenStudent(schoolList);

                                          var screenStatus = value.screenStatus,
                                              unScreenStatus = value.unScreenStatus,
                                              noScreeningStatus = value.noScreeningStatus;
                                          _this3.screenStatus = screenStatus;
                                          _this3.unScreenStatus = unScreenStatus;
                                          _this3.noScreeningStatus = noScreeningStatus;
                                          var scrn_sts;

                                          if (cwsn_tot > 0 && cwsn_tot == Scrn) {
                                            scrn_sts = 'Screened';
                                          }

                                          if (cwsn_tot > 0 && cwsn_tot > Scrn) {
                                            scrn_sts = 'PartialyScreened';
                                          }

                                          schoolList[_i].totStud = tot;
                                          schoolList[_i].cwsnstud = cwsn_tot;
                                          schoolList[_i].scrStud = Scrn; // this.totalScreenSchool = Scrn;
                                          // this.totalUnScreenSchool = (this.unScreenStatus - Scrn);
                                          // this.totalNoCWSNStudents = nocwsncnt;

                                          var uptquery = 'UPDATE cwsn_sch_list SET totStud="' + tot + '", cwsnstud="' + cwsn_tot + '", Screenstatus="' + scrn_sts + '", scrStud="' + Scrn + '"' + 'WHERE SchlId = "' + schoolList[_i].SchlId + '"';
                                          return _this3.sqliteDB.update(uptquery).then(function (res) {// console.log(schoolList[i].SchlId, "Updated cwsn_sch_list count");  
                                          });
                                        } else {
                                          var _value = _this3.filterScreenUnScreenStudent(schoolList);

                                          var _screenStatus = _value.screenStatus,
                                              _unScreenStatus = _value.unScreenStatus,
                                              _noScreeningStatus = _value.noScreeningStatus;
                                          _this3.screenStatus = _screenStatus;
                                          _this3.unScreenStatus = _unScreenStatus;
                                        }
                                      });

                                    case 1:
                                      if (schoolList[_i].checked_status == 1) {
                                        schoolList[_i].isChecked = true;
                                      } else {
                                        schoolList[_i].isChecked = false;
                                      }

                                      _this3.schoolList.push(schoolList[_i]);

                                    case 2:
                                      return _context.a(2);
                                  }
                                }, _loop);
                              });
                              _i = 0;

                            case 1:
                              if (!(_i < schoolList.length)) {
                                _context2.n = 3;
                                break;
                              }

                              return _context2.d(_regeneratorValues(_loop(_i)), 2);

                            case 2:
                              _i++;
                              _context2.n = 1;
                              break;

                            case 3:
                              this.schoolListCopy = this.schoolList;
                              this.totalSchool = this.schoolList.length;
                              _context2.n = 5;
                              break;

                            case 4:
                              this.getSchoolList(this.userId);

                            case 5:
                              ;

                            case 6:
                              return _context2.a(2);
                          }
                        }, _callee, this);
                      }));
                    });

                  case 1:
                    return _context3.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "checkBox",
          value: function checkBox(i, eve, SchlId) {
            var _this4 = this;

            var checked_status = 0;

            if (eve.detail.checked == true) {
              checked_status = 1;
            } else {
              if (this.networkService.getCurrentNetworkStatus() == 0) {
                //online
                this.cwsnService.cwsnP1Post('uncheck', SchlId);
                checked_status = 0;
                this.schoolList[i].isChecked = false;
              } else {
                //offline
                checked_status = 1;
                this.schoolList[i].isChecked = true;
                this.alertService.warning('Please check your internet connection');
              }
            }

            ;
            var query = 'UPDATE cwsn_sch_list SET checked_status="' + checked_status + '"' + 'WHERE SchlId = "' + SchlId + '"';
            return this.sqliteDB.update(query).then(function (res) {
              var chkCnt = _this4.schoolList.filter(function (obj) {
                return obj.isChecked;
              });

              if (chkCnt.length > 1) {
                for (var _i2 = 0; _i2 < _this4.schoolList.length; _i2++) {
                  if (!_this4.schoolList[_i2].isChecked) {
                    _this4.schoolList[_i2].isDisable = true;
                  }
                }
              } else {
                for (var _i3 = 0; _i3 < _this4.schoolList.length; _i3++) {
                  if (!_this4.schoolList[_i3].isChecked) {
                    _this4.schoolList[_i3].isDisable = false;
                  }
                }
              }
            }); // }
          }
        }, {
          key: "getSchoolList",
          value: function getSchoolList(id) {
            var _this5 = this;

            // let school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_phase1_skl_list_' + id + '_json.json';
            // let school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_skl_count_' + id + '_json.json';
            // let school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn_spl_edu_sch_list_'+id+'_json.json';
            // this.http.get<any>(school_list_json).subscribe((data) => {
            //   if (data) {
            //     this.insertData(data[0]);
            //   } else {
            //     this.alertService.warning('No Schools Found');
            //   }
            // })
            this.cwsnService.getschoolListall(id).subscribe(function (data) {
              if (data.dataStatus) {
                _this5.insertData(data.result);
              } else {
                _this5.alertService.warning(data.message);
              }
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            if (this.title == 'Comprehensive Assessment') {
              this.router.navigate(['/tabs/cwsn-menu'], {
                queryParams: {
                  title: this.title,
                  mode: this.mode
                }
              });
            } else {
              this.router.navigate(['/tabs/cwsn/dashboard']);
            } // this.router.navigate(["/tabs/cwsn/cluster"], { queryParams: { title: 'My Schools', mode: this.mode } });

          }
        }, {
          key: "enSureValueHereOrNot",
          value: function enSureValueHereOrNot(arr) {
            var value = [];
            arr.map(function (id) {
              if (id.SchlId !== null && id.SchlId !== undefined && id.SchlId !== '') {
                value = id;
              } else {
                value.length = 0;
              }
            });
            return value;
          }
        }, {
          key: "filterScreenUnScreenStudent",
          value: function filterScreenUnScreenStudent(arr) {
            var screenCount = 0;
            var unScreenCount = 0;
            var noScreeningCount = 0;
            var screenStatus;
            var unScreenStatus;
            var noScreeningStatus;
            arr.forEach(function (element) {
              // if (element.cwsnstatus > 0 && element.Screenstatus === 'Screened') {
              //   screenStatus = element.Screenstatus
              //   screenCount++;
              // }  
              // if (element.cwsnstatus > 0 && (element.Screenstatus === 'PartialyScreened' || element.Screenstatus === 'YetToStart')) {
              //   unScreenStatus = element.Screenstatus
              //   unScreenCount++;
              // }
              // if (element.cwsnstatus === 0) {
              //   noScreeningStatus = element.Screenstatus
              //   noScreeningCount++;
              // }
              if (element.cwsnstud > 0 && element.cwsnstud == element.scrStud) {
                screenStatus = element.Screenstatus;
                screenCount++;
              }

              if (element.cwsnstud > 0 && element.cwsnstud > element.scrStud) {
                unScreenStatus = element.Screenstatus;
                unScreenCount++;
              }

              if (element.cwsnstud === 0) {
                noScreeningStatus = '';
                noScreeningCount++;
              }
            });
            this.totalScreenSchool = screenCount;
            this.totalUnScreenSchool = unScreenCount;
            this.totalNoCWSNStudents = noScreeningCount;
            return {
              screenStatus: screenStatus,
              unScreenStatus: unScreenStatus,
              noScreeningStatus: noScreeningStatus
            };
          }
        }, {
          key: "getSchoolListInSearch",
          value: function getSchoolListInSearch(event) {
            var _this6 = this;

            this.searchTerm = event.detail.value.trim();

            if (this.schoolListCopy.length > 0) {
              this.schoolList = this.schoolListCopy.filter(function (item) {
                return item.SchlNme.toLowerCase().indexOf(_this6.searchTerm.toLowerCase()) > -1;
              });
            }
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.textData = "";
          }
        }, {
          key: "schoolSelected",
          value: function schoolSelected(item) {
            var _this7 = this;

            item.mode = this.mode;

            if (item.isChecked == false) {
              this.alertService.warning('Only marked schools are able to screen');
            } else {
              var query = 'SELECT * FROM cwsn_student_list' + ' WHERE school_key_id = "' + item.SchlId + '"';
              this.sqliteDB.executeQuery(query).then(function (res) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                  var _this8 = this;

                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.n) {
                      case 0:
                        if (!(res.rows.length > 0)) {
                          _context4.n = 1;
                          break;
                        }

                        if (this.title == 'Comprehensive Assessment') {
                          this.router.navigate(['/tabs/ca-student-list'], {
                            queryParams: {
                              item: JSON.stringify(item),
                              'zonleId': this.userId,
                              title: this.title,
                              mode: this.mode
                            }
                          });
                        } else {
                          this.router.navigate(["/tabs/cwsn/summary-list-cwsn/".concat(this.userId)], {
                            queryParams: item,
                            skipLocationChange: true
                          });
                        }

                        _context4.n = 4;
                        break;

                      case 1:
                        this.networkService.initializeNetworkEvents();

                        if (!(this.networkService.getCurrentNetworkStatus() == 0)) {
                          _context4.n = 3;
                          break;
                        }

                        _context4.n = 2;
                        return this.sharedService.onClassStudentStaffList(item.SchlId).then(function (r) {
                          _this8.cwsnService.CwsnNewGet(item.SchlId).subscribe(function (data) {
                            if (data.dataStatus) {
                              var delQry = 'delete FROM cwsn_student_list where school_key_id=' + item.SchlId + '';

                              _this8.sqliteDB.executeQuery(delQry).then(function (res) {
                                var query = 'SELECT * FROM Student_List where SchlD=' + item.SchlId + '';

                                _this8.sqliteDB.executeQuery(query).then(function (res) {
                                  for (var j = 0; j < data.result.length; j++) {
                                    for (var i = 0; i < res.rows.length; i++) {
                                      if (data.result[j].stdCls == 1) {}

                                      var stddata = res.rows.item(i);

                                      if (data.result[j].stdId == stddata.studentid) {
                                        data.result[j].gendr = stddata.Gendr;
                                        data.result[j].sec = stddata.SECTION;
                                        data.result[j].stdCls = stddata.Stud_ClsID;
                                      }
                                    }

                                    ;
                                  }

                                  _this8.inserStdtData(data.result, item);
                                });
                              });
                            } else {
                              _this8.alertService.warning(data.message);
                            }
                          }, function (error) {
                            _this8.alertService.warning('Unable to get data');
                          });
                        });

                      case 2:
                        _context4.n = 4;
                        break;

                      case 3:
                        this.alertService.warning('Please check your internet');

                      case 4:
                        return _context4.a(2);
                    }
                  }, _callee3, this);
                }));
              });
            }
          }
        }, {
          key: "inserStdtData",
          value: function inserStdtData(list, item) {
            var _this9 = this;

            var sqlArray = [];
            list.forEach(function (element) {
              sqlArray.push(['INSERT INTO cwsn_student_list (id,school_key_id,StuId,name,cwsnStatus,ScrSts,refer_to,scrSts_Local,nid,udid,ScreenedDate,da_name,unique_id_no,isPost,Class,Sec,gender,IndexId) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.school_id, element.stdId, element.name, element.referedfrom, element.scrindexid, element["goto"], 3, element.nid, element.udid, element.screening_date, element.da_name, element.userId, 3, element.stdCls, element.sec, element.gendr, element.nidIndex]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              _this9.router.navigate(["/tabs/cwsn/summary-list-cwsn/".concat(_this9.userId)], {
                queryParams: item,
                skipLocationChange: true
              });
            });
          }
        }, {
          key: "insertData",
          value: function insertData(list) {
            var _this0 = this;

            var sqlArray = [];
            list.forEach(function (element) {
              sqlArray.push(['INSERT INTO cwsn_sch_list VALUES (?,?,?,?,?,?,?,?,?,?)', [null, _this0.userId, parseInt(element.SchlId), element.SchlNme, element.tot, element.screen, element.Screenstatus, element.cwsnstatus, 0, element.udise_code]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              _this0.checkLocalDB();
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this1 = this;

            var query = 'DELETE FROM cwsn_sch_list';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res) {
                _this1.checkLocalDB();
              }
            });
          }
        }]);
      }();

      _SpecialEducatorsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService
        }];
      };

      _SpecialEducatorsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-school-list",
        template: _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SpecialEducatorsPage);
      /***/
    },

    /***/
    14081:
    /*!**************************************************************!*\
      !*** ./src/app/pages/cwsn/school-list/school-list.page.scss ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n  margin: 20px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design, .header-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.header-data .sync-icon .icon {\n  font-size: 30px;\n}\n\n.card-align .cards .card-design {\n  border-radius: 10px;\n  padding: 10px 20px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-left: 6px solid #6261cb;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(2) {\n  border-left: 6px solid #04c03d;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(3) {\n  border-left: 6px solid var(--unscreened-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(4) {\n  border-left: 6px solid var(--primary-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .totalSch {\n  color: #6261cb;\n}\n\n.card-align .cards .totalStu {\n  color: #04c03d;\n}\n\n.card-align .cards .totalUnscreenStu {\n  color: var(--unscreened-text-color);\n}\n\n.card-align .cards .newlyStu {\n  color: var(--primary-text-color);\n}\n\n.card-align .search-result .search-box {\n  padding: 0;\n  --background: #fff;\n}\n\n.card-align .search-result .search-data {\n  border-radius: 15px;\n  border: 1px solid #ffffff;\n}\n\n.card-align .search-result .search-data .school-list {\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n\n.card-align .search-result .search-data .school-list .school-list__icon {\n  color: #C8E6C9;\n  font-size: 24px;\n}\n\n.card-align .search-result .search-data:last-child {\n  margin-bottom: 0;\n}\n\n.dataNotFound {\n  text-align: center;\n  padding: 10px 0;\n  font-size: 16px;\n}\n\n.screened {\n  color: var(--screened-text-color) !important;\n}\n\n.unScreened {\n  color: var(--unscreened-text-color) !important;\n}\n\n.checkImg {\n  width: 25px;\n}\n\n.checkAndR {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  grid-gap: 10px;\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBZ0JBO0VBQ0Usa0NBQUE7QUFiRjs7QUFnQkE7RUFDRSwrQkFBQTtBQWJGOztBQWdCQTtFQUNFLHdDQUFBO0FBYkY7O0FBbUJRO0VBQ0ksZUFBQTtBQWhCWjs7QUF5Qk07RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtBQXRCUjs7QUF3QlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBdEJaOztBQXVCVTtFQUNFLGVBQUE7QUFyQlo7O0FBdUJVO0VBQ0UsaUJBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFyQmQ7O0FBd0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUF0Qlo7O0FBdUJVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFyQlo7O0FBeUJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQXZCTjs7QUF5Qkk7RUFDRSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUF2Qk47O0FBeUJJO0VBQ0UsbURBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBdkJOOztBQXlCSTtFQUVFLGdEQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQXhCTjs7QUErQkk7RUFBWSxjQUFBO0FBNUJoQjs7QUE2Qkk7RUFBWSxjQUFBO0FBMUJoQjs7QUEyQkk7RUFBb0IsbUNBQUE7QUF4QnhCOztBQXlCSTtFQUFZLGdDQUFBO0FBdEJoQjs7QUE2Qk07RUFHRSxVQUFBO0VBQ0Esa0JBQUE7QUE3QlI7O0FBK0JNO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQTdCUjs7QUErQlE7RUFDRSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBN0JWOztBQThCVTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBNUJaOztBQWdDTTtFQUNFLGdCQUFBO0FBOUJSOztBQW1DRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFoQ0o7O0FBb0NBO0VBQ0UsNENBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsOENBQUE7QUFqQ0Y7O0FBb0NBO0VBQ0UsV0FBQTtBQWpDRjs7QUFvQ0E7RUFDRSxhQUFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBakNKIiwiZmlsZSI6InNjaG9vbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4lY2FyZC1sYXlvdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuJWJhc2UtbGF5b3V0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWNhcmQtb3V0ZXItZGVzaWdue1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4lY2xhc3Mtc2VjdGlvbi1jYXJkLWlubmVyLWRlc2lnbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kIDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNFNkRERUI7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbi5oZWFkZXItZGF0YXtcclxuICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gICAgLnN5bmMtaWNvbntcclxuICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuICAuY2FyZC1hbGlnbntcclxuICAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAgLmNhcmRze1xyXG4gICAgICAvLyBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAuY2FyZC1kZXNpZ257XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG4gICAgICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgLnRvdGFsQ291bnRMYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNjaG9vbG5hbWVze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLW91dGVye1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoMSl7IFxyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM2MjYxY2I7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgyKXsgXHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzA0YzAzZDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLmNhcmQtZGVzaWduOm50aC1jaGlsZCgzKXsgXHJcbiAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDQpeyBcclxuICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDBBMEEwO1xyXG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLy8gLmNhcmQtYWxpZ246bGFzdC1jaGlsZHtcclxuICAgIC8vICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5jYXJkLWRlc2lnbjpudGgtY2hpbGQoNCl7IGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzhCNjZCMzsgfVxyXG4gICAgXHJcbiAgICAudG90YWxTY2h7ICBjb2xvcjogIzYyNjFjYjsgIH1cclxuICAgIC50b3RhbFN0dXsgIGNvbG9yOiAjMDRjMDNkOyAgfVxyXG4gICAgLnRvdGFsVW5zY3JlZW5TdHV7ICBjb2xvcjogdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKTsgIH1cclxuICAgIC5uZXdseVN0dXsgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpOyAgfVxyXG4gICAgLy8gLm5ld2x5U3R1eyAgY29sb3I6ICMwMEEwQTA7ICB9XHJcbiAgICAvLyAubmV3bHlTdHV7ICBjb2xvcjogIzhCNjZCMzsgIH1cclxuICAgIH1cclxuICAgIC8vIHNlYXJjaCByZXN1bHRcclxuICAgIC5zZWFyY2gtcmVzdWx0e1xyXG4gICAgICAvLyBwYWRkaW5nOiAwIDEwcHggMTBweDtcclxuICAgICAgLnNlYXJjaC1ib3h7XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMCAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2gtZGF0YXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgICAgIC5zY2hvb2wtbGlzdHsgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgLnNjaG9vbC1saXN0X19pY29ue1xyXG4gICAgICAgICAgICBjb2xvcjogI0M4RTZDOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLWRhdGE6bGFzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGF0YU5vdEZvdW5ke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcblxyXG4uc2NyZWVuZWQge1xyXG4gIGNvbG9yOiB2YXIoLS1zY3JlZW5lZC10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udW5TY3JlZW5lZCB7ICAgIFxyXG4gIGNvbG9yOiB2YXIoLS11bnNjcmVlbmVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGVja0ltZyB7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5jaGVja0FuZFIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    22232:
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/school-list/school-list.page.html ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of Schools</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards\" *ngIf=\"title != 'Comprehensive Assessment'\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalSch\">{{totalSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Total Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Total_School.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalStu\">{{totalScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Screened Schools</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/cwsn/Screenedschools.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalUnscreenStu\">{{totalUnScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Unscreened Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img *ngIf=\"this.mode == 'LightMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Unscreenedschools.svg\" />\r\n          <img *ngIf=\"this.mode == 'DarkMode'\" class=\"img\"\r\n            src=\"../../../../assets/icons/cwsn/Unscreenedschools_dark.svg\" />\r\n\r\n        </div>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel newlyStu\">{{totalNoCWSNStudents}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Schools without CWSN</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <!-- <img class=\"img\" src=\"../../../../assets/icons/cwsn/Notscreened.svg\" />  -->\r\n          <img *ngIf=\"this.mode == 'LightMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Notscreened_Black.svg\" />\r\n          <img *ngIf=\"this.mode == 'DarkMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Notscreened_white.svg\" />\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <div class=\"cards\" *ngIf=\"title == 'Comprehensive Assessment'\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalSch\">{{totalSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Total Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Total_School.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalStu\">{{totalScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Evaluated Schools</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/cwsn/Screenedschools.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalUnscreenStu\">{{totalUnScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Unevaluated Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img *ngIf=\"this.mode == 'LightMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Unscreenedschools.svg\" />\r\n          <img *ngIf=\"this.mode == 'DarkMode'\" class=\"img\"\r\n            src=\"../../../../assets/icons/cwsn/Unscreenedschools_dark.svg\" />\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n\r\n    <div class=\"search-result\">\r\n      <ion-item class=\"customInput\">\r\n        <ion-input class=\"col-12\" placeholder=\"Search\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n        </ion-input>\r\n        <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n      </ion-item> \r\n      <ion-card class=\"search-data ion-card-margin-top-bottom\"\r\n        *ngFor=\"let item of schoolList| searchall:searchText;let i = index\">\r\n        <!-- {{schoolList.isChecked}} : isChecked , {{schl_chk_count}} : schl_chk_count -->\r\n        <ion-row>\r\n\r\n          <ion-col size=\"9\">\r\n            <div class=\"school-list\">\r\n\r\n              <ion-label class=\"school-list__name\" (click)=\"schoolSelected(item)\"\r\n                [class.screened]=\"item.cwsnstud > 0 && item.cwsnstud == item.scrStud\"\r\n                [class.unScreened]=\"item.cwsnstud > 0 && item.cwsnstud > item.scrStud\">\r\n                {{item.SchlNme}} <span *ngIf=\"item.udise_code\">({{item.udise_code}})</span></ion-label>\r\n\r\n              <!-- <div style=\"justify-content: end;\"> -->\r\n              <!-- <img *ngIf=\"item.cwsnstud > 0 && item.cwsnstud == item.scrStud\" class=\"img\" style=\"width: 6%;\"\r\n                  src=\"../../../../assets/icons/Tick.svg\" />\r\n\r\n                  <ion-checkbox [disabled]=\"item.isDisable\" [(ngModel)]=\"item.isChecked\" (ionChange)=\"checkBox(i,$event,item.SchlId)\"></ion-checkbox> -->\r\n              <!-- </div> -->\r\n\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"3\" class=\"checkAndR\">\r\n            <img *ngIf=\"item.cwsnstud > 0 && item.cwsnstud == item.scrStud\" class=\"checkImg\"\r\n              src=\"../../../../assets/icons/Tick.svg\" />\r\n\r\n            <ion-checkbox [disabled]=\"item.isDisable\" [(ngModel)]=\"item.isChecked\"\r\n              (ionChange)=\"checkBox(i,$event,item.SchlId)\"></ion-checkbox>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n\r\n        <ng-template #schlIdNotFound>\r\n          <h4 class=\"dataNotFound\">Data Not Found</h4>\r\n        </ng-template>\r\n      </ion-card>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_school-list_school-list_module_ts-es5.js.map