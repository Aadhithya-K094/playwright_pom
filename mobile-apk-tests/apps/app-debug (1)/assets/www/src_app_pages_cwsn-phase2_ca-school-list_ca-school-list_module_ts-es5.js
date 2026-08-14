(function () {
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

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_ca-school-list_ca-school-list_module_ts"], {
    /***/
    63071:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-school-list/ca-school-list-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CASchoolListPageRoutingModule": function CASchoolListPageRoutingModule() {
          return (
            /* binding */
            _CASchoolListPageRoutingModule
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


      var _ca_school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-school-list.page */
      25148);

      var routes = [{
        path: '',
        component: _ca_school_list_page__WEBPACK_IMPORTED_MODULE_0__.CASchoolListPage
      }];

      var _CASchoolListPageRoutingModule = /*#__PURE__*/_createClass(function CASchoolListPageRoutingModule() {
        _classCallCheck(this, CASchoolListPageRoutingModule);
      });

      _CASchoolListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CASchoolListPageRoutingModule);
      /***/
    },

    /***/
    31541:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-school-list/ca-school-list.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CASchoolListPageModule": function CASchoolListPageModule() {
          return (
            /* binding */
            _CASchoolListPageModule
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


      var _ca_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-school-list-routing.module */
      63071);
      /* harmony import */


      var _ca_school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-school-list.page */
      25148);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var _CASchoolListPageModule = /*#__PURE__*/_createClass(function CASchoolListPageModule() {
        _classCallCheck(this, CASchoolListPageModule);
      });

      _CASchoolListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ca_school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CASchoolListPageRoutingModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_ca_school_list_page__WEBPACK_IMPORTED_MODULE_1__.CASchoolListPage]
      })], _CASchoolListPageModule);
      /***/
    },

    /***/
    25148:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-school-list/ca-school-list.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CASchoolListPage": function CASchoolListPage() {
          return (
            /* binding */
            _CASchoolListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ca_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ca-school-list.page.html */
      41812);
      /* harmony import */


      var _ca_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-school-list.page.scss */
      65437);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _CASchoolListPage = /*#__PURE__*/function () {
        function CASchoolListPage(router, route, cwsnService, sqliteDB, alertService, http, ionicstorage, userSessionService, networkService, sharedService) {
          _classCallCheck(this, CASchoolListPage);

          this.router = router;
          this.route = route;
          this.cwsnService = cwsnService;
          this.sqliteDB = sqliteDB;
          this.alertService = alertService;
          this.http = http;
          this.ionicstorage = ionicstorage;
          this.userSessionService = userSessionService;
          this.networkService = networkService;
          this.sharedService = sharedService;
          this.partialScreenCount = 0;
          this.totalScreenSchool = 0;
          this.totalNoCWSNStudents = 0;
          this.schoolList = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe("en-US");
          this.interVenRes = [];
        }

        return _createClass(CASchoolListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.user_id = this.userSessionService.emis_username();
            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title;
            this.mode = this.routeData.queryParams.mode;
            this.ionicstorage.getData('getUserDetailsCwsn').then(function (userData) {
              _this.usertype = userData;

              if (_this.usertype == 1) {
                var userDetails = _this.sharedService.getUserDetails();

                _this.block_id = _this.sharedService.TeacherBlockId;
              } else {
                _this.block_id = null;
              }

              _this.checkLocalDB();
            });
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var query;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    debugger;
                    this.schoolList = [];
                    query = 'SELECT * FROM cwsn_ca_stud_list' + ' WHERE UserId = "' + this.user_id + '"';
                    _context2.n = 1;
                    return this.sqliteDB.executeQuery(query).then(function (res) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var _this3 = this;

                        var temp, i, UsertypeTxt, query2;
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              if (res.rows.length > 0) {
                                temp = [];

                                for (i = 0; i < res.rows.length; i++) {
                                  // Object.assign(temp[i], { isChecked: false });
                                  temp.push(res.rows.item(i));
                                }

                                ;
                                UsertypeTxt = '';

                                if (this.usertype == 1) {
                                  UsertypeTxt = 'SpecialEdu';
                                } else {
                                  UsertypeTxt = 'Therapist';
                                }

                                query2 = 'SELECT * FROM fun_assessment_qstns' + ' WHERE user_name = "' + UsertypeTxt + '"';
                                this.sqliteDB.executeQuery(query2).then(function (domRes) {
                                  var temp1 = [];

                                  for (var i = 0; i < domRes.rows.length; i++) {
                                    temp1.push(domRes.rows.item(i));
                                  }

                                  var domainList = _this3.domainParse(temp1);

                                  var query3 = 'SELECT * FROM stud_fun_assessment' + ' WHERE user_id = "' + _this3.user_id + '"';

                                  _this3.sqliteDB.executeQuery(query3).then(function (stdRes) {
                                    var assRes = [];

                                    for (var i = 0; i < stdRes.rows.length; i++) {
                                      assRes.push(stdRes.rows.item(i));
                                    }

                                    ;
                                    var query4 = 'SELECT * FROM stud_int_assessment' + ' WHERE user_id = "' + _this3.user_id + '"';

                                    _this3.sqliteDB.executeQuery(query4).then(function (interRes) {
                                      _this3.interVenRes = [];

                                      for (var i = 0; i < interRes.rows.length; i++) {
                                        _this3.interVenRes.push(interRes.rows.item(i));
                                      }

                                      ;

                                      var filteredSchlist = _this3.calcAssessedStd(temp, assRes, domainList);

                                      for (var key in filteredSchlist) {
                                        var obj = {
                                          schName: filteredSchlist[key].SchlNme,
                                          SchlId: key,
                                          status: _this3.checkSchStatus(filteredSchlist[key].stdList),
                                          udise_code: filteredSchlist[key].udise_code
                                        };

                                        _this3.schoolList.push(obj);
                                      }

                                      ;
                                      _this3.schoolListCopy = _this3.schoolList;

                                      _this3.filterScreenUnScreenStudent(_this3.schoolList);
                                    });
                                  });
                                });
                              } else {
                                this.getSchoolList();
                              }

                              ;

                            case 1:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    });

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "checkSchStatus",
          value: function checkSchStatus() {
            var stdList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var fullyAss = stdList.filter(function (obj) {
              return obj.assStatus == 1;
            });
            var partialAss = stdList.filter(function (obj) {
              return obj.assStatus == 2;
            });
            var GridStatus = stdList.filter(function (obj) {
              return obj.assStatus == 5;
            });
            var totSth = stdList.length;
            var status = '';

            if (fullyAss.length == totSth || GridStatus.length + fullyAss.length == totSth) {
              status = '1';
            } else if (partialAss.length <= totSth && partialAss.length > 0 || fullyAss.length > 0) {
              status = '2';
            }

            return status;
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
            var query = 'UPDATE cwsn_ca_schl_list SET checked_status="' + checked_status + '"' + 'WHERE SchlId = "' + SchlId + '"';
            return this.sqliteDB.update(query).then(function (res) {
              var chkCnt = _this4.schoolList.filter(function (obj) {
                return obj.isChecked;
              });

              if (chkCnt.length > 1) {
                for (var _i = 0; _i < _this4.schoolList.length; _i++) {
                  if (!_this4.schoolList[_i].isChecked) {
                    _this4.schoolList[_i].isDisable = true;
                  }
                }
              } else {
                for (var _i2 = 0; _i2 < _this4.schoolList.length; _i2++) {
                  if (!_this4.schoolList[_i2].isChecked) {
                    _this4.schoolList[_i2].isDisable = false;
                  }
                }
              }
            }); // }
          }
        }, {
          key: "getSchoolList",
          value: function getSchoolList() {
            var _this5 = this;

            var school_list_json = '';

            if (this.usertype == 1) {
              school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn/CWSN_phase2_student_list_details_' + this.user_id + '_json.json'; // school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/cwsn/CWSN_phase2_student_list_details_' + this.user_id + '_staging_json.json';
            } else {
              school_list_json = 'https://d1wpyxz35bzzz4.cloudfront.net/therapist_' + this.user_id + '_ca_school_list_json.json';
            }

            this.http.get(school_list_json).subscribe(function (data) {
              if (data) {
                if (data.length > 0) {
                  _this5.getStudentAssList(data);
                } else {
                  _this5.alertService.warning('No Schools Found');
                }
              } else {
                _this5.alertService.warning('No Schools Found');
              }
            }, function (error) {
              _this5.alertService.warning('No Schools Found');
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/cwsn-menu'], {
              queryParams: {
                'mode': this.mode,
                'title': this.title
              }
            }); // this.router.navigate(['/tabs/cwsn/ca-school-list'], { queryParams: { 'mode': this.mode, 'title': this.title } })
            // this.router.navigate(['/tabs/cwsn/ca-cluster'], { queryParams: { title: this.title, mode: this.mode, usertype: this.usertype } })
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
            var partialScreenCount = 0;
            var noScreeningCount = 0;
            arr.forEach(function (element) {
              if (element.status == 1) {
                screenCount++;
              } else if (element.status == 2) {
                partialScreenCount++;
              } else if (element.status == '') {
                noScreeningCount++;
              }
            });
            this.totalScreenSchool = screenCount;
            this.partialScreenCount = partialScreenCount;
            this.totalNoCWSNStudents = noScreeningCount;
          }
        }, {
          key: "getSchoolListInSearch",
          value: function getSchoolListInSearch(event) {
            var _this6 = this;

            this.searchTerm = event.detail.value.trim();

            if (this.schoolListCopy.length > 0) {
              this.schoolList = this.schoolListCopy.filter(function (item) {
                return item.schName.toLowerCase().indexOf(_this6.searchTerm.toLowerCase()) > -1;
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

            debugger;
            this.ionicstorage.insertData_Replace('schlName', item.schName);
            item.mode = this.mode;
            var query = 'SELECT * FROM cwsn_ca_stud_list' + ' WHERE SchlId = "' + item.SchlId + '"';
            this.sqliteDB.executeQuery(query).then(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      if (res.rows.length > 0) {
                        this.router.navigate(["/tabs/screaning-menu"], {
                          queryParams: {
                            item: JSON.stringify(item),
                            title: this.title,
                            mode: this.mode
                          }
                        });
                      } else {
                        this.alertService.warning("No data found");
                      }

                    case 1:
                      return _context3.a(2);
                  }
                }, _callee3, this);
              }));
            }); // }
          }
        }, {
          key: "inserStdtData",
          value: function inserStdtData(list, item) {
            var _this8 = this;

            var sqlArray = [];
            list.forEach(function (element) {
              sqlArray.push(['INSERT INTO cwsn_ca_stud_list (id,SchlId,StuId,name,cwsnStatus,ScrSts,refer_to,scrSts_Local,nid,udid,ScreenedDate,da_name,unique_id_no,isPost,Class,Sec,gender,IndexId,udise_code) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.school_id, element.stdId, element.name, element.referedfrom, element.scrindexid, element["goto"], 3, element.nid, element.udid, element.screening_date, element.da_name, element.userId, 3, element.stdCls, element.sec, element.gendr, element.nidIndex, element.udise_code]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              _this8.router.navigate(["/tabs/screaning-menu"], {
                queryParams: {
                  item: JSON.stringify(item),
                  title: _this8.title,
                  mode: _this8.mode
                }
              }); // this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(item), 'zonleId': this.ZonalId, title: this.title, mode: this.mode } });

            });
          }
        }, {
          key: "insertData",
          value: function insertData(list, resData) {
            var _this9 = this;

            var sqlArray = [];
            var temp = [];
            var interRes = resData.EvloRes ? resData.EvloRes : [];
            var funAss = resData.FuncAsscRes ? resData.FuncAsscRes : [];
            funAss.forEach(function (obj) {
              var idx = temp.findIndex(function (obj1) {
                return obj1.IndxId == obj.IndxId;
              });

              if (idx != -1) {
                temp[idx].qstnVal = temp[idx].qstnVal + "," + obj.qstnVal;
              } else {
                temp.push(obj);
              }

              ;
            });
            debugger;
            interRes.forEach(function (element) {
              sqlArray.push(['INSERT INTO stud_int_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,domain_name,subdomain_id,intervension_idx_id,intervention_type_id,rate_val,goal_val,support,date,inter_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.id, element.user_id, element.school_id, element.student_id, element.domain_id, element.domain_name, element.subdomain_id, element.intervension_idx_id, element.evaluation_type, parseInt(element.rating), element.goal, element.support_in, _this9.pipe.transform(new Date(), "yyyy-MM-dd"), 2]]);
            });
            temp.forEach(function (element) {
              sqlArray.push(['INSERT INTO stud_fun_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,domain_name,subdomain_id,q_id,q_val,date,q_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.IndxId, element.userId, element.schlId, element.studId, element.domainId, element.domainName, element.subDomainId, element.qstnId, element.qstnVal, _this9.pipe.transform(new Date(), "yyyy-MM-dd"), 3]]);
            });
            list.forEach(function (element) {
              if (_this9.usertype == 2) {
                element.screen = 0;
                sqlArray.push(['INSERT INTO cwsn_ca_stud_list VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.therapist, _this9.ZonalId, element.block_id, element.school_id, element.school_name, element.student_id, element.name, element.EMIS_No, element.class_studying_id, element.class_section, element.disability_type, element.screen_disability, 0, 0, '1', 0, 0, element.udise_code]]);
              } else {
                sqlArray.push(['INSERT INTO cwsn_ca_stud_list VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.Special_educator, element.zonal_id, element.block_id, element.school_id, element.school_name, element.student_id, element.name, element.EMIS_No, element.class_studying_id, element.class_section, element.disability_type, element.screen_disability, 0, 0, '1', 0, 0, element.udise_code]]);
              }
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              _this9.checkLocalDB();
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this0 = this;

            var query = 'DELETE FROM cwsn_ca_stud_list';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res) {
                _this0.checkLocalDB();
              }
            });
          }
        }, {
          key: "getStudentAssList",
          value: function getStudentAssList(jsonData) {
            var _this1 = this;

            var schIds = '';

            var schList = _toConsumableArray(new Map(jsonData.map(function (item) {
              return [item['school_id'], item];
            })).values());

            schList.forEach(function (obj) {
              schIds = schIds ? schIds + "," + obj.school_id : obj.school_id;
            });
            this.cwsnService.GetStudFuncAssessNew(this.user_id, schIds).subscribe(function (res) {
              if (res.dataStatus) {
                _this1.insertData(jsonData, res.result);
              } else {
                _this1.insertData(jsonData, []);
              }
            }, function (error) {
              _this1.insertData(jsonData, []);
            });
          }
        }, {
          key: "domainParse",
          value: function domainParse(questionList) {
            var helper = {};
            var domainListArray = questionList.reduce(function (r, o) {
              var key = o.domain_name + '-' + o.domain_id;

              if (!helper[key]) {
                helper[key] = Object.assign({}, o); // create a copy of o

                r.push(helper[key]);
              } else {
                helper[key].disability_type = helper[key].disability_type + "," + o.disability_type;
              }

              return r;
            }, []);
            return domainListArray;
          }
        }, {
          key: "calcAssessedStd",
          value: function calcAssessedStd() {
            var _this10 = this;

            var stdList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var assRes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var domainList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var schList = {};

            var _loop = function _loop(i) {
              var assDomains = [];
              var finalDomList = [];
              var srDis = stdList[i].screen_disability.split(',').map(function (e) {
                return +e;
              });
              var filteredStdRes = assRes.filter(function (obj) {
                return obj.stud_id == stdList[i].studId;
              });

              var _loop2 = function _loop2(j) {
                var domDis = domainList[j].disability_type.split(',').map(function (e) {
                  return +e;
                });
                var isDisabilityFound = srDis.some(function (v) {
                  return domDis.indexOf(v) !== -1;
                });

                if (isDisabilityFound) {
                  finalDomList.push(domainList[j]);
                }

                ;
                var isDomIn = filteredStdRes.find(function (o) {
                  return o.domain_id == domainList[j].domain_id;
                });

                if (isDomIn) {
                  assDomains.push(domainList[j]);
                }
              };

              for (var j = 0; j < domainList.length; j++) {
                _loop2(j);
              }

              ; // inga tha green pannanum

              stdList[i].assStatus = _this10.assessLvl(finalDomList, assDomains, stdList[i].studId, _this10.interVenRes);
              var srDis2 = stdList[i].screen_disability.split(',').map(function (e) {
                return e.trim();
              });
              var arr = ["6", "18", "19", "20", "21", "22"];
              var allValid = srDis2.every(function (val) {
                return arr.includes(val);
              });

              if (srDis2.length > 0 && allValid) {
                stdList[i].assStatus = 5;
              }

              schList[stdList[i].SchlId] = schList[stdList[i].SchlId] ? schList[stdList[i].SchlId] : {};
              schList[stdList[i].SchlId].SchlNme = stdList[i].SchlNme;
              schList[stdList[i].SchlId].udise_code = stdList[i].udise_code;
              schList[stdList[i].SchlId].stdList = schList[stdList[i].SchlId].stdList ? schList[stdList[i].SchlId].stdList : [];
              schList[stdList[i].SchlId].stdList.push(stdList[i]);
            };

            for (var i = 0; i < stdList.length; i++) {
              _loop(i);
            }

            ;
            return schList;
          }
        }, {
          key: "assessLvl",
          value: function assessLvl() {
            var domList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var assList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var stdId = arguments.length > 2 ? arguments[2] : undefined;
            var interRes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var idx = interRes.findIndex(function (obj) {
              return obj.stud_id == stdId;
            });
            var a = domList.length,
                b = assList.length;
            var status = '';

            if (a == b && a && b) {
              if (idx != -1) {
                status = "1";
              } else {
                status = "2";
              }
            } else if (a > b && b > 0) {
              status = "2";
            }

            return status;
          }
        }]);
      }();

      _CASchoolListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_2__.CWSNService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService
        }];
      };

      _CASchoolListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-ca-school-list',
        template: _raw_loader_ca_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ca_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CASchoolListPage);
      /***/
    },

    /***/
    65437:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-school-list/ca-school-list.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n  margin: 20px 0px;\n  padding: 15px;\n}\n\n.card-align .cards .card-design, .header-data {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.header-data .sync-icon .icon {\n  font-size: 30px;\n}\n\n.card-align .cards .card-design {\n  border-radius: 10px;\n  padding: 10px 20px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: 700;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-left: 6px solid #6261cb;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(2) {\n  border-left: 6px solid #04c03d;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(3) {\n  border-left: 6px solid var(--unscreened-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .card-design:nth-child(4) {\n  border-left: 6px solid var(--primary-text-color);\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .totalSch {\n  color: #6261cb;\n}\n\n.card-align .cards .totalStu {\n  color: #04c03d;\n}\n\n.card-align .cards .totalUnscreenStu {\n  color: var(--unscreened-text-color);\n}\n\n.card-align .cards .newlyStu {\n  color: var(--primary-text-color);\n}\n\n.card-align .search-result .search-box {\n  padding: 0;\n  --background: #fff;\n}\n\n.card-align .search-result .search-data {\n  border-radius: 15px;\n  border: 1px solid #ffffff;\n}\n\n.card-align .search-result .search-data .school-list {\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 20px;\n  font-weight: 700;\n}\n\n.card-align .search-result .search-data .school-list .school-list__icon {\n  color: #C8E6C9;\n  font-size: 24px;\n}\n\n.card-align .search-result .search-data:last-child {\n  margin-bottom: 0;\n}\n\n.dataNotFound {\n  text-align: center;\n  padding: 10px 0;\n  font-size: 16px;\n}\n\n.screened {\n  color: var(--screened-text-color) !important;\n}\n\n.unScreened {\n  color: var(--unscreened-text-color) !important;\n}\n\n.checkImg {\n  width: 25px;\n}\n\n.checkAndR {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  grid-gap: 10px;\n  gap: 10px;\n}\n\n.cusSearch {\n  margin: 0 !important;\n  padding: 10px 0;\n  --background: white;\n}\n\n.sc-ion-searchbar-md-h {\n  --border-radius: 15px !important;\n}\n\n.search-card {\n  border: 1px solid #ffffff;\n  border-left: 6px solid #3E8EED;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n  padding: 0px 15px;\n}\n\n.searchbar-input-container .sc-ion-searchbar-md {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhLXNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQWVBO0VBQ0Usa0NBQUE7QUFaRjs7QUFlQTtFQUNFLCtCQUFBO0FBWkY7O0FBZUE7RUFDRSx3Q0FBQTtBQVpGOztBQW1CSTtFQUNFLGVBQUE7QUFoQk47O0FBMkJJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUF4Qk47O0FBMkJNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQXpCUjs7QUEyQlE7RUFDRSxlQUFBO0FBekJWOztBQTRCUTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBMUJWOztBQThCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBNUJSOztBQThCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBNUJWOztBQWlDSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUEvQk47O0FBa0NJO0VBQ0UsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLDBDQUFBO0FBaENOOztBQW1DSTtFQUNFLG1EQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQWpDTjs7QUFvQ0k7RUFFRSxnREFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUFuQ047O0FBMkNJO0VBQ0UsY0FBQTtBQXpDTjs7QUE0Q0k7RUFDRSxjQUFBO0FBMUNOOztBQTZDSTtFQUNFLG1DQUFBO0FBM0NOOztBQThDSTtFQUNFLGdDQUFBO0FBNUNOOztBQXVESTtFQUdFLFVBQUE7RUFDQSxrQkFBQTtBQXZETjs7QUEwREk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBeEROOztBQTJETTtFQUNFLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF6RFI7O0FBMkRRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUF6RFY7O0FBOERJO0VBQ0UsZ0JBQUE7QUE1RE47O0FBaUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQTlERjs7QUFrRUE7RUFDRSw0Q0FBQTtBQS9ERjs7QUFrRUE7RUFDRSw4Q0FBQTtBQS9ERjs7QUFrRUE7RUFDRSxXQUFBO0FBL0RGOztBQWtFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUEvREY7O0FBa0VBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUEvREY7O0FBa0VBO0VBQ0UsZ0NBQUE7QUEvREY7O0FBa0VBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUVBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtBQWhFRjs7QUFtRUE7RUFDRSwyQkFBQTtBQWhFRiIsImZpbGUiOiJjYS1zY2hvb2wtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIlY2FyZC1sYXlvdXQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4lYmFzZS1sYXlvdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiVjbGFzcy1zZWN0aW9uLWNhcmQtb3V0ZXItZGVzaWduIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM4QjY2QjMgIWltcG9ydGFudDtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tY2FyZC1pbm5lci1kZXNpZ24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbn1cclxuXHJcbi5oZWFkZXItZGF0YSB7XHJcbiAgQGV4dGVuZCAlYmFzZS1sYXlvdXQ7XHJcblxyXG4gIC5zeW5jLWljb24ge1xyXG4gICAgLmljb24ge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcblxyXG4gIC5jYXJkcyB7XHJcblxyXG4gICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgIC5jYXJkLWRlc2lnbiB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgQGV4dGVuZCAlYmFzZS1sYXlvdXQ7XHJcblxyXG4gICAgICAuY2FyZC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuXHJcbiAgICAgICAgLnRvdGFsQ291bnRMYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2Nob29sbmFtZXMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW1hZ2Utb3V0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjNjI2MWNiO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDIpIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDRjMDNkO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDMpIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS11bnNjcmVlbmVkLXRleHQtY29sb3IpO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDQpIHtcclxuICAgICAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDBBMEEwO1xyXG4gICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC5jYXJkLWFsaWduOmxhc3QtY2hpbGR7XHJcbiAgICAvLyAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvLyB9XHJcbiAgICAvLyAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDQpeyBib3JkZXItbGVmdDogNHB4IHNvbGlkICM4QjY2QjM7IH1cclxuXHJcbiAgICAudG90YWxTY2gge1xyXG4gICAgICBjb2xvcjogIzYyNjFjYjtcclxuICAgIH1cclxuXHJcbiAgICAudG90YWxTdHUge1xyXG4gICAgICBjb2xvcjogIzA0YzAzZDtcclxuICAgIH1cclxuXHJcbiAgICAudG90YWxVbnNjcmVlblN0dSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS11bnNjcmVlbmVkLXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXdseVN0dSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC5uZXdseVN0dXsgIGNvbG9yOiAjMDBBMEEwOyAgfVxyXG4gICAgLy8gLm5ld2x5U3R1eyAgY29sb3I6ICM4QjY2QjM7ICB9XHJcbiAgfVxyXG5cclxuICAvLyBzZWFyY2ggcmVzdWx0XHJcbiAgLnNlYXJjaC1yZXN1bHQge1xyXG5cclxuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAxMHB4O1xyXG4gICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgLy8gcGFkZGluZzogMCAxMXB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1kYXRhIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuXHJcbiAgICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgICAgLnNjaG9vbC1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgIC5zY2hvb2wtbGlzdF9faWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogI0M4RTZDOTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWRhdGE6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0YU5vdEZvdW5kIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuXHJcbi5zY3JlZW5lZCB7XHJcbiAgY29sb3I6IHZhcigtLXNjcmVlbmVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51blNjcmVlbmVkIHtcclxuICBjb2xvcjogdmFyKC0tdW5zY3JlZW5lZC10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2hlY2tJbWcge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uY2hlY2tBbmRSIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uY3VzU2VhcmNoIHtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnNjLWlvbi1zZWFyY2hiYXItbWQtaCB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICMzRThFRUQ7XHJcbiAgLy8gYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyIC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcclxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    41812:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/ca-school-list/ca-school-list.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">List of Schools</ion-title>\r\n    <!-- <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n      </ion-icon>\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <div class=\"cards\">\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalSch\">{{schoolList.length}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Total Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/Total_School.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalStu\">{{totalScreenSchool}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Evaluated Schools</ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img class=\"img\" src=\"../../../../assets/icons/cwsn/Screenedschools.svg\" />\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-design ion-card-margin-top-bottom\">\r\n        <div class=\"card-text\">\r\n          <ion-label class=\"totalCountLabel totalUnscreenStu\">{{partialScreenCount}}</ion-label>\r\n          <ion-label class=\"schoolnames\">Partially Evaluated Schools </ion-label>\r\n        </div>\r\n        <div class=\"image-outer\">\r\n          <img *ngIf=\"this.mode == 'LightMode'\" class=\"img\" src=\"../../../../assets/icons/cwsn/Unscreenedschools.svg\" />\r\n          <img *ngIf=\"this.mode == 'DarkMode'\" class=\"img\"\r\n            src=\"../../../../assets/icons/cwsn/Unscreenedschools_dark.svg\" />\r\n\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <ion-card class=\"card-align ion-card-margin search-card\">\r\n      <ion-searchbar [(ngModel)]=\"textData\" class=\"cusSearch\" debounce=\"500\" placeholder=\"Search\"></ion-searchbar>\r\n    </ion-card>\r\n\r\n    <div class=\"search-result\">\r\n      <ion-card class=\"search-data ion-card-margin-top-bottom\" *ngFor=\"let item of schoolList|searchall:textData;let i = index\" (click)=\"schoolSelected(item)\">\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <div class=\"school-list\">\r\n                <ion-label [class.screened]=\"item.status==1\" [class.unScreened]=\"item.status==2\">\r\n                {{item.schName}} <span *ngIf=\"item.udise_code\">({{item.udise_code}})</span></ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ng-template #schlIdNotFound>\r\n        <h4 class=\"dataNotFound\">Data Not Found</h4>\r\n      </ng-template>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn-phase2_ca-school-list_ca-school-list_module_ts-es5.js.map