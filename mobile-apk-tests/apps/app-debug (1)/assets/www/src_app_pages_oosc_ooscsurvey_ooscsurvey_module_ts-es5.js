(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_ooscsurvey_ooscsurvey_module_ts"], {
    /***/
    84968:
    /*!************************************************************!*\
      !*** ./src/app/pages/oosc/ooscsurvey/ooscsurvey.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OoscsurveyPageModule": function OoscsurveyPageModule() {
          return (
            /* binding */
            _OoscsurveyPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ooscsurvey_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ooscsurvey.page */
      72131);

      var routes = [{
        path: '',
        component: _ooscsurvey_page__WEBPACK_IMPORTED_MODULE_0__.OoscsurveyPage
      }];

      var _OoscsurveyPageModule = /*#__PURE__*/_createClass(function OoscsurveyPageModule() {
        _classCallCheck(this, OoscsurveyPageModule);
      });

      _OoscsurveyPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_ooscsurvey_page__WEBPACK_IMPORTED_MODULE_0__.OoscsurveyPage]
      })], _OoscsurveyPageModule);
      /***/
    },

    /***/
    72131:
    /*!**********************************************************!*\
      !*** ./src/app/pages/oosc/ooscsurvey/ooscsurvey.page.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OoscsurveyPage": function OoscsurveyPage() {
          return (
            /* binding */
            _OoscsurveyPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ooscsurvey_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ooscsurvey.page.html */
      82783);
      /* harmony import */


      var _ooscsurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ooscsurvey.page.scss */
      69386);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);

      var _OoscsurveyPage = /*#__PURE__*/function () {
        function OoscsurveyPage(router, route, alertService, http, userService, loadingCtrl, emisService, alertCtrl, userSessionService, sqliteDB, networkService, alertController) {
          _classCallCheck(this, OoscsurveyPage);

          this.router = router;
          this.route = route;
          this.alertService = alertService;
          this.http = http;
          this.userService = userService;
          this.loadingCtrl = loadingCtrl;
          this.emisService = emisService;
          this.alertCtrl = alertCtrl;
          this.userSessionService = userSessionService;
          this.sqliteDB = sqliteDB;
          this.networkService = networkService;
          this.alertController = alertController;
          this.schoolList = [];
          this.cenGovSchlList = [];
          this.govSchlList = [];
          this.fullAidSchoolList = [];
          this.unAidSchlList = [];
          this.parAidSchlList = [];
          this.schoolLength = 0;
          this.toBeAdmitted = [];
          this.toBeValidated = []; // toBeVerified: any = [];

          this.toBeSurvey = []; // nonTarget: any = [];

          this.noData = false;
          this.getOOSCSchlStuList = [];
          this.acYrList = [// { label: '2022-2023', value: '2022-2023' },
          // { label: '2023-2024', value: '2023-2024' },
          // { label: '2024-2025', value: '2024-2025' },
          {
            label: '2024-2025',
            value: '2024-25'
          }, {
            label: '2025-2026',
            value: '2025-26'
          }];
          this.currentYear = '';
        }

        return _createClass(OoscsurveyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.current_year = new Date().getFullYear() + 14;
            this.teacher_id = this.userSessionService.teacher_id();
            this.routeData = this.route.snapshot;
            this.paramsId = this.routeData.queryParams.Id;
            this.pageId = this.routeData.queryParams.page;
            this.active = this.routeData.queryParams.active;

            if (this.paramsId == 1 && this.pageId == 1) {
              this.ooscAlert();
            } else {
              this.onPageView();
            }

            this.currentYear = localStorage.getItem('acYear');
          }
        }, {
          key: "onPageView",
          value: function onPageView() {
            if (this.pageId == 1) {
              this.blocklistActive = true;
              this.studentlistActive = false;
              this.schoolActive = false;
              this.getUserDetails();
            } else {
              this.blocklistActive = false;
              this.studentlistActive = true;
              this.schoolActive = false;
              this.checkOoscStudLocal(this.routeData.queryParams.school, this.routeData.queryParams.schoolname, this.routeData.queryParams.year);
            }
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this = this;

            this.userService.getOoscUserDetails(this.teacher_id).subscribe(function (res) {
              if (res.dataStatus == true) {
                var getOoscUserDetails = res.result;

                if (getOoscUserDetails.length > 0) {
                  _this.distId = getOoscUserDetails[0].district_id;

                  _this.checkOoscBlockLocal();
                }
              } else {
                _this.alertService.error("Something went wrong");
              }
            });
          }
        }, {
          key: "checkOoscBlockLocal",
          value: function checkOoscBlockLocal() {
            var _this2 = this;

            this.blocklist = [];
            var query = 'SELECT * FROM ooscBlocks';
            return this.sqliteDB.getDataLocalDB(query).then(function (oscblock) {
              if (oscblock.rows.length > 0) {
                var temp = [];

                for (var i = 0; i < oscblock.rows.length; i++) {
                  temp.push(oscblock.rows.item(i));
                }

                ;

                if (temp.length > 0) {
                  _this2.blockLength = temp.length;
                  _this2.blocklistActive = true;
                  _this2.blocklist = temp.map(function (l) {
                    return {
                      label: l.block_name,
                      value: l.block_id
                    };
                  });

                  _this2.blocklist.sort(function (a, b) {
                    if (a.label < b.label) return -1;
                    if (a.label > b.label) return 1;
                    return 0;
                  });

                  _this2.blockListCopy = _this2.blocklist;
                } else {
                  _this2.blocklistActive = false;
                }
              } else {
                _this2.getBlockList();
              }
            });
          }
        }, {
          key: "getBlockList",
          value: function getBlockList() {
            var _this3 = this;

            this.blockLength = 0;
            this.emisService.getOOSCBlockList(this.distId).subscribe(function (res) {
              if (res.dataStatus == true) {
                var block = res.result;

                if (block.length > 0) {
                  _this3.blockLength = block.length;
                  var distDeleteQuery = 'DELETE FROM ooscBlocks WHERE district_id = "' + _this3.distId + '"';
                  return _this3.sqliteDB.getDataLocalDB(distDeleteQuery).then(function (obdata) {
                    var sqlArray = [];
                    block.forEach(function (element) {
                      sqlArray.push(['INSERT INTO ooscBlocks VALUES (?,?,?,?)', [null, _this3.distId, element.block_id, element.block_name]]);
                    });

                    _this3.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                      _this3.checkOoscBlockLocal();
                    });
                  });
                } else {
                  _this3.alertService.error('No OOSC students Available');
                }
              }
            });
          }
        }, {
          key: "getFilterBlocklist",
          value: function getFilterBlocklist(event) {
            var _this4 = this;

            this.searchTerm = event.detail.value.trim();
            this.searchTerm = this.searchTerm;

            if (this.blockListCopy.length > 0) {
              this.blocklist = this.blockListCopy.filter(function (item) {
                return item.label.toLowerCase().indexOf(_this4.searchTerm.toLowerCase()) > -1;
              });
            }
          }
        }, {
          key: "checkOoscSchoolLocal",
          value: function checkOoscSchoolLocal(event) {
            var _this5 = this;

            this.blocklistActive = false;
            this.schoolActive = true;
            this.blockId = event;
            this.cenGovSchlList = [];
            this.govSchlList = [];
            this.fullAidSchoolList = [];
            this.unAidSchlList = [];
            this.parAidSchlList = [];
            this.schoolList = [];
            this.schoolLength = 0;
            var query = 'SELECT * FROM ooscSchools' + ' WHERE block_id = "' + event + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (oscSchl) {
              if (oscSchl.rows.length > 0) {
                var schlTemp = [];

                for (var i = 0; i < oscSchl.rows.length; i++) {
                  schlTemp.push(oscSchl.rows.item(i));
                }

                ;

                if (schlTemp.length > 0) {
                  _this5.filterSchoolList = schlTemp;
                  _this5.schoolLength = _this5.filterSchoolList.length;

                  if (_this5.filterSchoolList.length > 0) {
                    for (var _i = 0; _i < _this5.filterSchoolList.length; _i++) {
                      _this5.filterSchoolList[_i].filter = 1;

                      if (_this5.filterSchoolList[_i].school_type_id == 5) {
                        // central government
                        _this5.cenGovSchlList.push(_this5.filterSchoolList[_i]);
                      }

                      if (_this5.filterSchoolList[_i].school_type_id == 1) {
                        // government
                        _this5.govSchlList.push(_this5.filterSchoolList[_i]);
                      }

                      if (_this5.filterSchoolList[_i].school_type_id == 2) {
                        //fully-aided
                        _this5.fullAidSchoolList.push(_this5.filterSchoolList[_i]);
                      }

                      if (_this5.filterSchoolList[_i].school_type_id == 3) {
                        // un-aided
                        _this5.unAidSchlList.push(_this5.filterSchoolList[_i]);
                      }

                      if (_this5.filterSchoolList[_i].school_type_id == 4) {
                        // partially-aided
                        _this5.parAidSchlList.push(_this5.filterSchoolList[_i]);
                      }
                    }

                    _this5.schoolList = _this5.filterSchoolList.map(function (l) {
                      return {
                        label: l.school_name,
                        value: l.school_id
                      };
                    });

                    _this5.schoolList.sort(function (a, b) {
                      if (a.label < b.label) return -1;
                      if (a.label > b.label) return 1;
                      return 0;
                    });

                    _this5.schoolListCopy = _this5.schoolList;
                  } else {
                    _this5.schoolList = [];
                    _this5.schoolLength = 0;

                    _this5.noDataAlert();
                  }
                }
              } else {
                _this5.getSchoolList(event);
              }
            });
          }
        }, {
          key: "getSchoolList",
          value: function getSchoolList(event) {
            var _this6 = this;

            this.emisService.getOoscSchoolList(event).subscribe(function (res) {
              if (res.dataStatus == true) {
                var SchoolList = res.result;

                if (SchoolList.length > 0) {
                  var schlDeleteQuery = 'DELETE FROM ooscSchools WHERE block_id = "' + event + '"';
                  return _this6.sqliteDB.getDataLocalDB(schlDeleteQuery).then(function (osdata) {
                    var sqlArray = [];
                    SchoolList.forEach(function (element) {
                      sqlArray.push(['INSERT INTO ooscSchools VALUES (?,?,?,?,?,?)', [null, event, element.school_id, element.school_name, element.school_type_id, element.school_type]]);
                    });

                    _this6.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                      _this6.checkOoscSchoolLocal(event);
                    });
                  });
                }
              } else {
                _this6.alertService.error('No OOSC students available in this block');
              }
            });
          }
        }, {
          key: "getFilterSchoolist",
          value: function getFilterSchoolist(event) {
            var _this7 = this;

            this.searchTerm = event.detail.value.trim();
            this.searchTerm = this.searchTerm;
            this.cenGovSchlList.forEach(function (item) {
              if (item.school_name.toLowerCase().indexOf(_this7.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
              }
            });
            this.govSchlList.filter(function (item) {
              if (item.school_name.toLowerCase().indexOf(_this7.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
              }
            });
            this.fullAidSchoolList.filter(function (item) {
              if (item.school_name.toLowerCase().indexOf(_this7.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
              }
            });
            this.unAidSchlList.filter(function (item) {
              if (item.school_name.toLowerCase().indexOf(_this7.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
              }
            });
            this.parAidSchlList.filter(function (item) {
              if (item.school_name.toLowerCase().indexOf(_this7.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
              }
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.textData = "";
          }
        }, {
          key: "checkOoscStudLocal",
          value: function checkOoscStudLocal(school_id, school_name, ac_year) {
            var _this8 = this;

            this.blocklistActive = false;
            this.schoolActive = false;
            this.activeSchoolName = school_name;
            this.activeSchoolId = school_id;
            this.studentLength = 0;
            this.femaleStuLength = 0;
            this.maleStuLength = 0;
            this.toBeAdmitted = [];
            this.toBeValidated = []; // this.toBeVerified = [];

            this.toBeSurvey = []; // this.nonTarget = [];

            if (ac_year == '' || ac_year == null || ac_year == undefined) {
              // this.current_month = (new Date()).getMonth()+1;
              // // console.log(new Date(),'this.current_year',this.current_year,'month',this.current_month)
              // if (this.current_month >= 6 && this.current_month <= 12) {
              //   this.acyear = (this.current_year + '-' + (this.current_year + 1));
              // } else {
              //   this.acyear = ((this.current_year - 1) + '-' + (this.current_year))
              // }
              // console.log('get year this.acyear',this.acyear)
              // this.acyear = '2023-2024'; // cmd by Priya
              // this.acyear = '2024-2025';
              this.acyear = "2025-26";
              ac_year = this.acyear;
            } else {
              this.acyear = ac_year;
            } // let query = 'SELECT * FROM ooscStudentsDetail WHERE school_id = "' + this.activeSchoolId + '"';


            var query = 'SELECT * FROM ooscStudentsDetail WHERE school_id = "' + this.activeSchoolId + '" AND acad_yr = "' + ac_year + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (oscStud) {
              var studTemp = [];

              if (oscStud.rows.length > 0) {
                for (var i = 0; i < oscStud.rows.length; i++) {
                  studTemp.push(oscStud.rows.item(i));
                }

                ;
                _this8.studentlistActive = true;

                if (ac_year != '' && ac_year != null && ac_year != undefined) {
                  if (studTemp.length > 0) {
                    _this8.filterStudList = studTemp.filter(function (tt) {
                      return tt.ac_year == ac_year;
                    });
                    _this8.filterStudList = studTemp;

                    if (_this8.filterStudList.length > 0) {
                      var student = _this8.filterStudList;

                      if (student.length > 0) {
                        _this8.studentLength = student.length;

                        for (var _i2 = 0; _i2 < student.length; _i2++) {
                          if (student[_i2].reason_type == 'To be admitted') {
                            _this8.toBeAdmitted.push(student[_i2]);
                          } // if (student[i].reason_type == 'To be verified') {
                          //   this.toBeVerified.push(student[i]);
                          // }


                          if (student[_i2].reason_type == 'To be surveyed') {
                            _this8.toBeSurvey.push(student[_i2]);
                          }

                          if (student[_i2].reason_type == 'To be Validated') {
                            _this8.toBeValidated.push(student[_i2]);
                          } // if (student[i].reason_type == 'Non-Target') {
                          //   this.nonTarget.push(student[i]);
                          // }

                        }

                        _this8.maleStudentList = student.filter(function (tt) {
                          return tt.gender == '1';
                        });

                        _this8.maleStudentList.sort(function (a, b) {
                          if (a.student_name < b.student_name) return -1;
                          if (a.student_name > b.student_name) return 1;
                          return 0;
                        });

                        _this8.maleStuLength = _this8.maleStudentList.length;
                        _this8.femaleStudentList = student.filter(function (tt) {
                          return tt.gender == '2';
                        });

                        _this8.femaleStudentList.sort(function (a, b) {
                          if (a.student_name < b.student_name) return -1;
                          if (a.student_name > b.student_name) return 1;
                          return 0;
                        });

                        _this8.femaleStuLength = _this8.femaleStudentList.length;
                        _this8.studentList = [].concat(_toConsumableArray(_this8.maleStudentList), _toConsumableArray(_this8.femaleStudentList));
                        _this8.studentListCopy = _this8.studentList;
                      } else {
                        _this8.studentlistActive = false;
                      }
                    } else {
                      _this8.studentlistActive = true;
                      _this8.schoolActive = false;

                      _this8.alertService.error('No OOSC students available');
                    }
                  }
                } else {
                  _this8.alertService.error('Please select academic Year');
                }
              } else {
                _this8.getDropOutList();
              }
            });
          }
        }, {
          key: "getDropOutList",
          value: function getDropOutList() {
            var _this9 = this;

            this.emisService.getOoscDropoutStudentList(this.activeSchoolId, this.acyear).subscribe(function (res) {
              _this9.masterstudentList = res.result;

              if (res.dataStatus == true) {
                _this9.getOOSCStuList();
              } else {
                _this9.masterstudentList = [];
                _this9.studentlistActive = true;

                _this9.alertService.error('No OOSC Students Available in this school');
              }
            });
          }
        }, {
          key: "getOOSCStuList",
          value: function getOOSCStuList() {
            var _this0 = this;

            this.emisService.OoscSurveyAdmStudGet(this.activeSchoolId).subscribe(function (res) {
              // this.emisService.getOOSCSchlStuList(this.activeSchoolId).subscribe(res => {
              if (res.dataStatus == true) {
                var uerDetails = res.result;

                if (uerDetails.length > 0) {
                  _this0.getOOSCSchlStuList = res.result;

                  _this0.getStudentDetails();
                } else {
                  _this0.getStudentDetails();
                }
              } else {
                _this0.getStudentDetails();
              }
            });
          }
        }, {
          key: "getStudentDetails",
          value: function getStudentDetails() {
            var _this1 = this;

            var filterStudDetails;
            filterStudDetails = this.masterstudentList;

            if (this.masterstudentList.length > 0) {
              var _loop = function _loop(i) {
                var stuDetails;

                if (_this1.getOOSCSchlStuList.length > 0) {
                  stuDetails = _this1.getOOSCSchlStuList.find(function (tt) {
                    return tt.StudentId == _this1.masterstudentList[i].stud_id;
                  });

                  if (stuDetails) {
                    Object.assign(_this1.masterstudentList[i], {
                      Reason: stuDetails.ReasonId
                    }, {
                      subReason: stuDetails.SubReasonId
                    }, {
                      reason_type: 'To be surveyed'
                    }, {
                      Status: _this1.masterstudentList[i].Status
                    }); // Object.assign(this.masterstudentList[i], { Reason: stuDetails.dropout_reason }, { reason_type: stuDetails.reason_type }, { Status: stuDetails.Status });
                  } else {
                    Object.assign(_this1.masterstudentList[i], {
                      Reason: ''
                    }, {
                      subReason: ''
                    }, {
                      reason_type: 'To be surveyed'
                    }, {
                      Status: ''
                    });
                  }
                } else {
                  Object.assign(_this1.masterstudentList[i], {
                    Reason: ''
                  }, {
                    subReason: ''
                  }, {
                    reason_type: 'To be surveyed'
                  }, {
                    Status: ''
                  });
                }
              };

              for (var i = 0; i < this.masterstudentList.length; i++) {
                _loop(i);
              }

              if (this.masterstudentList[0].reason_type) {
                this.insertStudLocalDB();
              }
            }
          }
        }, {
          key: "insertStudLocalDB",
          value: function insertStudLocalDB() {
            var _this10 = this;

            // Insert
            if (this.masterstudentList.length > 0) {
              var schlDeleteQuery = 'DELETE FROM ooscStudentsDetail WHERE school_id = "' + this.activeSchoolId + '" AND acad_yr = "' + this.acyear + '"';
              return this.sqliteDB.getDataLocalDB(schlDeleteQuery).then(function (oscStuddata) {
                var sqlArray = [];

                _this10.masterstudentList.forEach(function (element) {
                  sqlArray.push(['INSERT INTO ooscStudentsDetail VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.district_id, element.district_name, element.block_id, element.block_name, element.school_id, element.school_name, element.udise_code, element.school_type_id, element.school_type, element.stud_id, element.student_name, element.father_name, element.mother_name, element.new_emis_id, element.old_emis_no, element.phone_number, element.class_studying_id, element.gender, element.Address, element.cwsn_student, element.differently_abled, element.diff_abled_reason, element.lastUpdate, element.ac_year, element.Reason, element.reason_type, element.Status, element.acad_yr, element.subReason]]);
                });

                _this10.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                  _this10.checkOoscStudLocal(_this10.activeSchoolId, _this10.activeSchoolName, _this10.acyear);
                });
              });
            }
          }
        }, {
          key: "getFilterStudentlist",
          value: function getFilterStudentlist(event) {
            var _this11 = this;

            this.searchTerm = event.detail.value.trim();
            this.searchTerm = this.searchTerm;
            this.toBeAdmitted.forEach(function (item) {
              if (item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
                _this11.noData = true;
              }

              if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1;
              } else {
                return item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1;
              }
            }); // this.toBeVerified.filter((item) => {

            this.toBeValidated.filter(function (item) {
              if (item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
                _this11.noData = true;
              }

              if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1;
              } else {
                return item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1;
              }
            }); // this.nonTarget.filter((item) => {
            //   if (item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
            //     item.filter = 1;
            //   } else {
            //     item.filter = 2;
            //     this.noData = true;
            //   }
            //   if (item.Address != null) {
            //     return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1;
            //   } else {
            //     return item.student_name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || item.phone_number > -1;
            //   }
            // });

            this.toBeSurvey.filter(function (item) {
              if (item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1) {
                item.filter = 1;
              } else {
                item.filter = 2;
                _this11.noData = true;
              }

              if (item.Address != null) {
                return item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.Address.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1;
              } else {
                return item.student_name.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.phone_number > -1 || item.class_studying.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1 || item.gender.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1;
              }
            });
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/tabs/oosctype']);
          }
        }, {
          key: "backToBlock",
          value: function backToBlock() {
            console.log('backToBlock', this.blocklistActive);
            this.blocklistActive = true;
            this.schoolActive = false;
            this.studentlistActive = false;
          }
        }, {
          key: "backToSchool",
          value: function backToSchool() {
            this.blocklistActive = false;
            this.schoolActive = true;
            this.studentlistActive = false;
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this12 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup) {
                _this12.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray) {
                _this12.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "goToOoscSurvey",
          value: function goToOoscSurvey(studentData) {
            if (this.paramsId == 1) {
              this.router.navigate(['/tabs/ooscnewsurvey'], {
                queryParams: {
                  'studentDetails': JSON.stringify(studentData),
                  'teacher': this.teacher_id,
                  'school': this.activeSchoolId,
                  'block': this.blockId,
                  'Id': this.paramsId,
                  'schoolname': this.activeSchoolName,
                  'active': this.active,
                  'page': this.pageId,
                  'distId': this.distId
                },
                skipLocationChange: false
              });
            } else {
              this.router.navigate(['/tabs/ooscquestions'], {
                queryParams: {
                  'studentDetails': JSON.stringify(studentData),
                  'teacher': this.teacher_id,
                  'school': this.activeSchoolId,
                  'block': this.blockId,
                  'Id': this.paramsId,
                  'schoolname': this.activeSchoolName,
                  'active': this.active,
                  'page': this.pageId,
                  'distId': this.distId
                },
                skipLocationChange: false
              });
            }
          }
        }, {
          key: "noDataAlert",
          value: function noDataAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var alert, result;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertCtrl.create({
                      header: 'Alert',
                      subHeader: '',
                      message: 'No OOSC Students Available in this Block.',
                      cssClass: 'my-custom-class',
                      buttons: ['OK']
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    _context.n = 3;
                    return alert.onDidDismiss();

                  case 3:
                    result = _context.v;

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getAcYr",
          value: function getAcYr() {
            this.current_month = new Date().getMonth() + 1; // console.log(new Date(),'this.current_year',this.current_year,'month',this.current_month)

            if (this.current_month >= 6 && this.current_month <= 12) {
              this.acyear = this.current_year + '-' + (this.current_year + 1);
            } else {
              this.acyear = this.current_year - 1 + '-' + this.current_year;
            }
          }
        }, {
          key: "ooscAlert",
          value: function ooscAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this13 = this;

              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      header: '***முக்கிய குறிப்பு***',
                      message: "\u0BAA\u0BB3\u0BCD\u0BB3\u0BBF \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BBE/\u0B87\u0B9F\u0BC8\u0BA8\u0BBF\u0BA9\u0BCD\u0BB1\u0B95\u0BCD \u0B95\u0BC1\u0BB4\u0BA8\u0BCD\u0BA4\u0BC8\u0B95\u0BB3\u0BCD \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC6\u0B9F\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD, \u0BAE\u0BC1\u0BA4\u0BB2\u0BBF\u0BB2\u0BCD  \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BAA\u0BB3\u0BCD\u0BB3\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD/ \u0BB5\u0B95\u0BC1\u0BAA\u0BCD\u0BAA\u0BBF\u0BB2\u0BCD \u0BAA\u0BB3\u0BCD\u0BB3\u0BBF \u0B9A\u0BC6\u0BB2\u0BCD\u0BB2\u0BBE\u0B95\u0BCD \u0B95\u0BC1\u0BB4\u0BA8\u0BCD\u0BA4\u0BC8\u0B95\u0BB3\u0BBF\u0BA9\u0BCD \u0BB5\u0BBF\u0BB5\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0B9A\u0BB0\u0BBF\u0BAA\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4\u0BC1 \u0B95\u0BA3\u0B95\u0BCD\u0B95\u0BC6\u0B9F\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1 \u0BAE\u0BC1\u0B9F\u0BBF\u0BAA\u0BCD\u0BAA\u0BA4\u0BC8 \u0B89\u0BB1\u0BC1\u0BA4\u0BBF \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD.",
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this13.onPageView();
                        }
                      }],
                      backdropDismiss: false
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
        }]);
      }();

      _OoscsurveyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }];
      };

      _OoscsurveyPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-ooscsurvey',
        template: _raw_loader_ooscsurvey_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ooscsurvey_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OoscsurveyPage);
      /***/
    },

    /***/
    69386:
    /*!************************************************************!*\
      !*** ./src/app/pages/oosc/ooscsurvey/ooscsurvey.page.scss ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --ion-background-color: transparent;\n  --padding-start: 5px !important;\n  --padding-end: 5px !important;\n  --inner-padding-end: 5px;\n  --inner-padding-start: 5px;\n}\n\nion-searchbar {\n  background: #e4d1eb;\n}\n\n.color1 {\n  background-color: #f8f2fa;\n  --background: #f8f2fa;\n  padding: 0px;\n}\n\n.color2 {\n  background-color: #e4d1eb;\n  --background: #e4d1eb;\n  padding: 0px;\n}\n\n.searchbar {\n  display: contents;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-inline-end: 10px;\n  white-space: pre-line;\n}\n\n.name {\n  color: darkslategray !important;\n}\n\n.label {\n  padding-left: 15px;\n}\n\n.avatar {\n  width: auto;\n  padding-right: 10px;\n}\n\n.name {\n  font-size: 16px;\n}\n\n.designation {\n  font-size: 14px !important;\n  color: darkslategray;\n  white-space: pre-line;\n}\n\n.call {\n  margin: auto;\n  zoom: 1.3;\n  color: midnightblue;\n}\n\n.button {\n  margin-left: 10px;\n}\n\n.card-class {\n  text-align: center;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\n.head {\n  padding-left: 15px;\n  padding-top: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sub-head {\n  padding-left: 15px;\n  color: #2176b9;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.line {\n  border-bottom: 2px solid #aaaabb;\n  margin-left: 9px;\n  margin-right: 9px;\n  border-radius: 5px;\n}\n\nion-card {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.total {\n  background: white;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.total-txt {\n  color: darkslategray;\n  font-weight: 600;\n}\n\n.total-subtxt {\n  color: darkslategray;\n  font-weight: 600;\n  text-align: end;\n}\n\nion-avatar {\n  width: 36px;\n  height: 26px;\n}\n\nimg {\n  border-radius: 0px;\n}\n\n.d-none {\n  display: none !important;\n}\n\n.user-icon {\n  padding-top: 1px;\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9vc2NzdXJ2ZXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsd0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6Im9vc2NzdXJ2ZXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogNXB4O1xyXG59XHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTRkMWViO1xyXG59XHJcblxyXG4uY29sb3IxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMmZhO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y4ZjJmYTtcclxuICBwYWRkaW5nOiAwcHhcclxufVxyXG5cclxuLmNvbG9yMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZDFlYjtcclxuICAtLWJhY2tncm91bmQ6ICNlNGQxZWI7XHJcbiAgcGFkZGluZzogMHB4XHJcbn1cclxuXHJcbi5zZWFyY2hiYXIge1xyXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDBweDtcclxuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudFxyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmRlc2lnbmF0aW9uIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuXHJcbi5jYWxsIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgem9vbTogMS4zO1xyXG4gIGNvbG9yOiBtaWRuaWdodGJsdWU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jbGFzcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZVxyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3ViLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjb2xvcjogIzIxNzZiOTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhYWJiO1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50b3RhbCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4XHJcbn1cclxuXHJcbi50b3RhbC10eHQge1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50b3RhbC1zdWJ0eHQge1xyXG4gIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uZC1ub25lIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyLWljb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udXNlci1pY29uLWxhYmVsIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    82783:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/ooscsurvey/ooscsurvey.page.html ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"blocklistActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goToHome()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Block List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"back-iconNew\" (click)=\"getBlockList()\">\r\n      <ion-icon name=\"sync\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"schoolActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"backToBlock()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">School List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"back-iconNew\" (click)=\"getSchoolList(blockId)\">\r\n      <ion-icon name=\"sync\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-header *ngIf=\"studentlistActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"backToSchool()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Student List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"back-iconNew\" (click)=\"getDropOutList()\">\r\n      <ion-icon name=\"sync\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"blocklistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Blocks</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{blockLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-searchbar style=\"padding-left : 0px; padding-right: 0px; background: none;\"\r\n      (ionChange)=\"getFilterBlocklist($event)\" placeholder=\"Search\" class=\"search\" *ngIf=\"blocklistActive\">\r\n    </ion-searchbar>\r\n\r\n    <div *ngIf=\"blocklistActive\">\r\n      <ion-card *ngFor=\"let item of blocklist; let i = index;\" (click)=\"checkOoscSchoolLocal(item.value)\">\r\n        <ion-row style=\"width:100%\">\r\n          <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n            <img src=\"./../../../../../../assets/icons/Block.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n            <ion-label class=\"ion-text-wrap\">{{item.label}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </div>\r\n\r\n    <ion-row *ngIf=\"schoolActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Schools</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{schoolLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-searchbar style=\"padding-left : 0px; padding-right: 0px; background: none;\" [(ngModel)]=\"textData\"\r\n      (ionChange)=\"getFilterSchoolist($event)\" placeholder=\"Search\" class=\"search\"\r\n      *ngIf=\"schoolActive && schoolListCopy?.length != 0\"></ion-searchbar>\r\n\r\n    <div *ngIf=\"schoolActive\">\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.govSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Government Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of govSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.fullAidSchoolList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Fully Aided Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of fullAidSchoolList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.unAidSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Un-aided Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of unAidSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.parAidSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Partially Aided Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of parAidSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div style=\"margin-top:15px;\" *ngIf=\"this.cenGovSchlList != ''\">\r\n        <ion-label style=\"margin-left: 20px;font-weight:500;\">Central Govt Schools</ion-label>\r\n        <ion-card *ngFor=\"let item of cenGovSchlList; let i = index;\"\r\n          (click)=\"checkOoscStudLocal(item.school_id,item.school_name,'')\" [class.d-none]=\"item.filter==2\">\r\n          <ion-row style=\"width:100%\">\r\n            <ion-col size=\"1\" style=\"align-content: center; align-self: center;\">\r\n              <img src=\"assets/icons/dashbordSchool.svg\">\r\n            </ion-col>\r\n            <ion-col size=\"11\" style=\"align-content: center; align-self: center;\">\r\n              <ion-label class=\"ion-text-wrap\">{{item.school_name}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n    </div>\r\n\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\" style=\"margin-bottom:5px\">\r\n      <ion-col size=\"12\" class=\"total-txt\" style=\"text-align: left;\">\r\n        <ion-label>{{activeSchoolName}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Academic Year</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <!-- <ion-label>{{currentYear}}</ion-label> -->\r\n        <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            style=\"max-width: 100% !important;padding-left:0px\" [(ngModel)]=\"acyear\"\r\n            (ionChange)=\"checkOoscStudLocal(activeSchoolId,activeSchoolName,$event.detail.value)\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of acYrList\"> {{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <ion-card *ngIf=\"studentlistActive\" style=\"margin:5px 0px;\">\r\n      <ion-item>\r\n        <ion-row style=\"width:100%\">\r\n          <ion-col size=\"12\" class=\"qus-txt\" style=\"padding-bottom:0px;\">\r\n            <ion-label class=\"ion-text-wrap\" style=\"color:gray;font-size: 16px;\"><span class=\"index-aln\"></span>Academic\r\n              Year</ion-label>\r\n          </ion-col>\r\n          <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\"\r\n            style=\"max-width: 100% !important;padding-left:0px\" [(ngModel)]=\"acyear\"\r\n            (ionChange)=\"checkOoscStudLocal(activeSchoolId,activeSchoolName,$event.detail.value)\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of acYrList\"> {{item.label}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-row>\r\n      </ion-item>\r\n    </ion-card> -->\r\n\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Students</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{studentLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Boys</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{maleStuLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"studentlistActive\" class=\"total\">\r\n      <ion-col size=\"6\" class=\"total-txt\">\r\n        <ion-label>Total Girls</ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"total-subtxt\">\r\n        <ion-label>{{femaleStuLength}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-searchbar style=\"padding-left : 0px; padding-right: 0px; background: none;\"\r\n      (ionChange)=\"getFilterStudentlist($event)\" placeholder=\"Search\" class=\"search\" *ngIf=\"studentlistActive\">\r\n    </ion-searchbar>\r\n\r\n    <ion-row *ngIf=\"studentlistActive\">\r\n      <ion-col size=\"12\" style=\"padding:0px\">\r\n\r\n        <div style=\"margin-top:15px;\" *ngIf=\"this.toBeSurvey != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be surveyed</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of toBeSurvey\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <!-- <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p> -->\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{ (item.Status == 1 && (item.Reason == 10 || item.subReason == 90 || item.subReason == 91)) ? 'To be validated': (item.Status == 1 && item.Reason != 10) ? 'To be admitted' : 'To be surveyed'}}</p>\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{ (item.Status == 1 && (item.Reason == 10 || item.subReason == 90 || item.subReason == 91)) ? 'To be validated': (item.Status == 1 && item.Reason != 10) ? 'To be admitted' : 'To be surveyed'}}</p>\r\n\r\n                <!-- <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p> -->\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{ (item.Status == 1 && (item.Reason == 10 || item.subReason == 90 || item.subReason == 91)) ? 'To be validated': (item.Status == 1 && item.Reason != 10) ? 'To be admitted' : 'To be surveyed'}}</p>\r\n\r\n                <!-- <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p> -->\r\n              </ion-label>\r\n\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status != 1\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div>\r\n\r\n        <div style=\"margin-top:15px;\" *ngIf=\"this.toBeAdmitted != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be admitted</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of toBeAdmitted\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy' }}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == null || item.Status == ''\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 2 || item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div>\r\n\r\n\r\n        <div style=\"margin-top:15px;\" *ngIf=\"this.toBeValidated != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be Validated</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of toBeValidated\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n                <p style=\"color: green\">Status : Closed</p>\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n                <p style=\"color: green\">Status : Closed</p>\r\n              </ion-label>\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n                <p style=\"color: green\">Status : Closed</p>\r\n              </ion-label>\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == null || item.Status == ''\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 2 || item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div>\r\n\r\n        <!-- <div style=\"margin-top:15px;\" *ngIf=\"this.nonTarget != ''\">\r\n          <ion-label style=\"margin-left: 20px;font-weight:500;\">To be Validated</ion-label>\r\n\r\n          <ion-card *ngFor=\"let item of nonTarget\" style=\"border-radius: 5px;\" [class.d-none]=\"item.filter==2\">\r\n            <ion-item lines=\"none\">\r\n              <img src=\"{{item.gender== '1'?'assets/icons/attendance/boy.svg':'assets/icons/attendance/girl.svg'}}\">\r\n              <ion-label *ngIf=\"item.gender == '1'\">\r\n                <p class=\"name\" style=\"color:#2176b9 !important\">{{item.student_name}} - {{item.new_emis_id}}</p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '2'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <ion-label *ngIf=\"item.gender == '3'\">\r\n                <p class=\"name\" style=\"color:maroon !important\">{{item.student_name}} - {{item.new_emis_id}} </p>\r\n                <p style=\"color: crimson;\"> Class - {{item.class_studying_id}}</p>\r\n                <p class=\"designation\">{{item.Address}}</p>\r\n                <p style=\"font-size: 10;color:grey\">Common pool Sent Date: {{item.lastUpdate | date:'dd/MM/yyyy'}}</p>\r\n                <p style=\"color: rgb(20, 37, 220);\">Type : {{item.reason_type}}</p>\r\n              </ion-label>\r\n\r\n              <a href=\"tel:{{item.phone_number}}\" *ngIf=\"item.phone_number != null\"\r\n                style=\"margin: auto;outline: none;padding-left:15px\">\r\n                <ion-icon name=\"call\" style=\"color:midnightblue\"></ion-icon>\r\n              </a>\r\n              <div class=\"button\">\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == null || item.Status == ''\">\r\n                  <ion-icon name=\"add-circle-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n                <ion-button class=\"btn-present\" (click)=\"goToOoscSurvey(item)\"\r\n                  *ngIf=\"item.Status == 2 || item.Status == 1\" style=\"--background:green\">\r\n                  <ion-icon name=\"create-outline\" style=\"color:white\"></ion-icon>\r\n                </ion-button>\r\n              </div>\r\n            </ion-item>\r\n          </ion-card>\r\n        </div> -->\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_oosc_ooscsurvey_ooscsurvey_module_ts-es5.js.map