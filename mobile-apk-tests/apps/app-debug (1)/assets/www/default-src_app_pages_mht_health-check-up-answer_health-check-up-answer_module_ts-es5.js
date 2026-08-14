(function () {
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_pages_mht_health-check-up-answer_health-check-up-answer_module_ts"], {
    /***/
    50338:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HealthCheckUpAnswerPageRoutingModule": function HealthCheckUpAnswerPageRoutingModule() {
          return (
            /* binding */
            _HealthCheckUpAnswerPageRoutingModule
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


      var _health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./health-check-up-answer.page */
      98614);

      var routes = [{
        path: '',
        component: _health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_0__.HealthCheckUpAnswerPage
      }];

      var _HealthCheckUpAnswerPageRoutingModule = /*#__PURE__*/_createClass(function HealthCheckUpAnswerPageRoutingModule() {
        _classCallCheck(this, HealthCheckUpAnswerPageRoutingModule);
      });

      _HealthCheckUpAnswerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HealthCheckUpAnswerPageRoutingModule);
      /***/
    },

    /***/
    88778:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HealthCheckUpAnswerPageModule": function HealthCheckUpAnswerPageModule() {
          return (
            /* binding */
            _HealthCheckUpAnswerPageModule
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


      var _health_check_up_answer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./health-check-up-answer-routing.module */
      50338);
      /* harmony import */


      var _health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./health-check-up-answer.page */
      98614);
      /* harmony import */


      var _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../commonpages/dynamic-form-table/dynamic-form-table.module */
      41721);

      var _HealthCheckUpAnswerPageModule = /*#__PURE__*/_createClass(function HealthCheckUpAnswerPageModule() {
        _classCallCheck(this, HealthCheckUpAnswerPageModule);
      });

      _HealthCheckUpAnswerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _health_check_up_answer_routing_module__WEBPACK_IMPORTED_MODULE_0__.HealthCheckUpAnswerPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__.DynamicFormTablePageModule],
        declarations: [_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__.HealthCheckUpAnswerPage],
        exports: [_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__.HealthCheckUpAnswerPage],
        providers: [_health_check_up_answer_page__WEBPACK_IMPORTED_MODULE_1__.HealthCheckUpAnswerPage]
      })], _HealthCheckUpAnswerPageModule);
      /***/
    },

    /***/
    98614:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HealthCheckUpAnswerPage": function HealthCheckUpAnswerPage() {
          return (
            /* binding */
            _HealthCheckUpAnswerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_health_check_up_answer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./health-check-up-answer.page.html */
      47100);
      /* harmony import */


      var _health_check_up_answer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./health-check-up-answer.page.scss */
      64877);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _HealthCheckUpAnswerPage = /*#__PURE__*/function () {
        function HealthCheckUpAnswerPage(sqliteDB, router, http, fb, route, alertService, userSessionService, emisService, networkService, uploadService, el) {
          _classCallCheck(this, HealthCheckUpAnswerPage);

          this.sqliteDB = sqliteDB;
          this.router = router;
          this.http = http;
          this.fb = fb;
          this.route = route;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.emisService = emisService;
          this.networkService = networkService;
          this.uploadService = uploadService;
          this.el = el;
          this.formArrayList = {
            controls: []
          };
          this.currPage = 0;
          this.currStdId = '';
          this.listFromApi = [];
          this.jsonList = [];
          this.jsonOptions = [];
          this.jsnQues = [];
          this.issubmitted = false;
          this.paramData = '';
          this.formPost = [];
          this.refferedTo = '';
          this.scrnerId = '';
          this.scrnedStatus = '';
          this.currNetWrkSts = '';
          this.dynamicFilters = '';
        }

        return _createClass(HealthCheckUpAnswerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroupList = this.fb.group({
              formGroupPages: this.fb.array([])
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            //     let query = 'drop table health_screen_ques';
            // this.sqliteDB.update(query).then(res => { 
            // }); 
            // ======network status-(0,1)(in,out)==========
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            debugger;
            this.paramData = this.route.snapshot.queryParams;
            var currPage = Number(this.paramData.pageId);

            if (this.paramData.clsID) {
              this.dynamicFilters = {
                "class": '' + this.paramData.ClsID + '',
                gender: '' + this.paramData.Gender + ''
              };
            } else {
              this.dynamicFilters = {
                gender: '' + this.paramData.Gender + ''
              };
            }

            this.currPage = currPage - 1;
            this.formGroupList.reset();
            var formArr = this.formGroupList.get('formGroupPages');
            formArr.controls = [];
            this.scrnerId = this.userSessionService.emis_username();
            this.scrnedStatus = this.paramData.status;
            this.acYear = this.paramData.acYear;
            this.checkLocalDB(1);
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this = this;

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              this.currPage = 0;
              this.formGroupList.reset();
              var formArr = this.formGroupList.get('formGroupPages');
              formArr.controls = [];
              var query = 'DELETE FROM health_screen_ques_list' + ' WHERE block_id = "' + 1 + '"';
              this.sqliteDB.update(query).then(function (res) {
                if (res) {
                  _this.checkLocalDB(1);
                }
              });
            } else {
              this.alertService.warning('Please Connect Network');
            }
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB(type) {
            var _this2 = this;

            this.networkService.initializeNetworkEvents();
            var query = 'SELECT * FROM health_screen_ques_list' + ' WHERE block_id = "' + 1 + '"';
            this.sqliteDB.update(query).then(function (res) {
              if (res.rows.length > 0) {
                if (type == 1) {
                  _this2.jsonList = [];
                  _this2.jsonList = JSON.parse(res.rows.item(0).questions);

                  for (var i = 0; i < _this2.jsonList.length; i++) {
                    _this2.jsonList[i]['Page' + (i + 1)] = _this2.dynamicFilter(_this2.jsonList[i]['Page' + (i + 1)]);
                  }

                  _this2.loadJson(); // console.log('jsonnnnn', this.jsonList);

                }
              } else {
                if (_this2.networkService.getCurrentNetworkStatus() == 0) {
                  _this2.jsonConverter(type);
                } else {
                  _this2.alertService.warning('Please check your internet');
                }
              }
            });
          }
        }, {
          key: "jsonParse",
          value: function jsonParse(data, column) {
            var arr = [];

            for (var i = 0; i < data.length; i++) {
              var obj = {};

              for (var j = 0; j < column.length; j++) {
                obj[column[j]] = data[i][j];
              }

              obj.subques = [];
              obj.isMapped = false;
              arr.push(obj);
            }

            ;
            return arr;
          }
        }, {
          key: "jsonConverter",
          value: function jsonConverter(type) {
            var _this3 = this;

            var healthQues = 'https://d1wpyxz35bzzz4.cloudfront.net/health24_quest_master_json.json';
            var mainQues = [];
            this.http.get(healthQues).subscribe(function (data) {
              var ques = _this3.jsonParse(data.questions.data, data.questions.columns);

              _this3.jsonOptions = _this3.jsonParse(data.options.data, data.options.columns);
              _this3.jsnQues = _this3.quesFormat(ques);

              for (var i = 0; i < _this3.jsnQues.length; i++) {
                if (_this3.jsnQues[i].map == 0) {
                  _this3.jsnQues[i].mapped = true;
                  mainQues.push(_this3.jsnQues[i]);
                } else {
                  _this3.jsnQues[i].mapped = false;
                }
              }

              for (var _i = 0; _i < mainQues.length; _i++) {
                mainQues[_i].subques = _this3.subQusParse(mainQues[_i]);
              } // =========page filter===========


              var filterByPage = [];

              var _loop = function _loop(_i2) {
                if (filterByPage.length == 0) {
                  filterByPage = [{
                    Page1: [mainQues[_i2]],
                    Page_Title: 'Status'
                  }, {
                    Page2: [],
                    Page_Title: 'கண் பரிசோதனை EYE Screening'
                  }, {
                    Page3: [],
                    Page_Title: 'அளவீடுகள் BMI'
                  }, {
                    Page4: [],
                    Page_Title: 'சுகாதார பரிசோதனை Health'
                  }];
                } else {
                  for (var j = 0; j < filterByPage.length; j++) {
                    if (j + 1 == mainQues[_i2].page) {
                      var index = filterByPage[j]['Page' + mainQues[_i2].page].findIndex(function (obj) {
                        return obj.controlName == mainQues[_i2].controlName;
                      });

                      if (index == -1) {
                        filterByPage[j]['Page' + mainQues[_i2].page].push(mainQues[_i2]);
                      }
                    }
                  }
                }
              };

              for (var _i2 = 0; _i2 < mainQues.length; _i2++) {
                _loop(_i2);
              }

              var questions = JSON.stringify(filterByPage);
              var sqlArray = [];
              sqlArray.push(['INSERT INTO health_screen_ques_list VALUES (?,?,?)', [null, 1, questions]]);

              _this3.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                if (type == 1) {
                  _this3.checkLocalDB(1);
                }
              });
            }, function (error) {
              _this3.alertService.warning("Error While getting Questions");
            });
          }
        }, {
          key: "dynamicFilter",
          value: function dynamicFilter(list) {
            var _this4 = this;

            var _loop2 = function _loop2(obj) {
              list = list.filter(function (obj1) {
                var _a;

                return (_a = obj1[obj]) === null || _a === void 0 ? void 0 : _a.includes(_this4.dynamicFilters[obj]);
              });
            };

            for (var obj in this.dynamicFilters) {
              _loop2(obj);
            }

            ;

            for (var j = 0; j < list.length; j++) {
              if (list[j].subques.length > 0) {
                list[j].subques = this.dynamicFilter(list[j].subques);
              }
            }

            return list;
          }
        }, {
          key: "loadJson",
          value: function loadJson() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var i, temp, formArr, obj;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.formGroupList.reset();

                    for (i = 0; i < this.jsonList.length; i++) {
                      temp = "Page" + (i + 1) + "";
                      formArr = this.formGroupList.get('formGroupPages');
                      obj = this.fb.group({
                        grandParentFA: this.fb.array([]),
                        value: this.fb.control("")
                      });
                      obj.patchValue({
                        value: this.jsonList[i][temp]
                      });
                      formArr.controls.push(obj);
                    }

                    this.formArrayList.controls = [];
                    this.formArrayList = this.formGroupList.get('formGroupPages');
                    localStorage.setItem("listFromApi", '');
                    this.formGroupList.updateValueAndValidity();
                    this.navigateNextPage();

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "subQusParse",
          value: function subQusParse(obj) {
            var arr = [];

            for (var i = 0; i < this.jsnQues.length; i++) {
              if (!this.jsnQues[i].isMapped && obj.controlName == this.jsnQues[i].map) {
                this.jsnQues[i].isMapped = true;
                arr.push(this.jsnQues[i]);
              }
            }

            for (var j = 0; j < arr.length; j++) {
              arr[j].subques = this.subQusParse(arr[j]);
            }

            arr.sort(function (a, b) {
              return a.seq_id - b.seq_id;
            });
            return arr;
          }
        }, {
          key: "quesFormat",
          value: function quesFormat(ques) {
            var _this5 = this;

            var arr = [];

            for (var i = 0; i < ques.length; i++) {
              ques[i]["class"] = ques[i]["class"].split(',');
              ques[i].gender = ques[i].gender.split(',');
              ques[i].ques_text = ques[i].q_type;
              ques[i].valid = true; // ===========info============

              ques[i].info = ''; // ques[i].info = this.infoParse(ques[i]);
              // ============expected===============

              if (ques[i].expected) {
                ques[i].expected = ques[i].expected.split(',');
              } else {
                ques[i].expected = [];
              }

              if (ques[i].expected.length > 0) {
                for (var j = 0; j < ques[i].expected.length; j++) {
                  if (ques[i].expected[j] == 'true' || ques[i].expected[j] == 'TRUE') {
                    ques[i].expected[j] = true;
                  } else if (ques[i].expected[j] == 'false' || ques[i].expected[j] == 'FALSE') {
                    ques[i].expected[j] = false;
                  } else if (ques[i].expected[j]) {
                    ques[i].expected[j] = ques[i].expected[j];
                  }
                }
              } // ========options=============


              if (ques[i].ques_type == 5 || ques[i].ques_type == 1 || ques[i].ques_type == 6) {
                ques[i].ques_option = [];
                ques[i].options = ques[i].options.split(',');

                var _loop3 = function _loop3(_j) {
                  var index = ques[i].options.findIndex(function (x) {
                    return x == _this5.jsonOptions[_j].id;
                  });

                  if (index > -1) {
                    ques[i].ques_option.push({
                      id: _this5.jsonOptions[_j].value,
                      value: _this5.jsonOptions[_j].label
                    });
                  }
                };

                for (var _j = 0; _j < this.jsonOptions.length; _j++) {
                  _loop3(_j);
                }
              }

              arr.push(ques[i]);
            }

            return arr;
          }
        }, {
          key: "infoParse",
          value: function infoParse(data) {
            var finalInfo = '';

            if (data.infoType == 1) {
              finalInfo = data.info.split('-');
              finalInfo = (finalInfo === null || finalInfo === void 0 ? void 0 : finalInfo.length) > 0 ? finalInfo : [finalInfo];
            } else if (data.infoType == 3) {
              finalInfo = 'https://deka0egrc3bqo.cloudfront.net/health_docs/' + data.info + '';
            }

            return finalInfo;
          }
        }, {
          key: "navigateNextPage",
          value: function navigateNextPage() {
            var _this6 = this;

            this.currPage = this.currPage + 1;
            Object.assign(this.paramData.pageId, this.currPage);
            this.router.navigate([], {
              queryParams: this.paramData
            });
            this.issubmitted = false; // this.loadNextForm();

            var query = 'SELECT * FROM health_screen_ques' + ' WHERE school_key_id = "' + this.paramData.SchlId + '"' + ' And StuId = "' + this.paramData.studentid + '"';
            debugger;
            this.sqliteDB.update(query).then(function (res) {
              var temp = [];

              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  temp.push(res.rows.item(i));
                }

                ;
                localStorage.setItem("listFromApi", JSON.stringify(temp));

                _this6.loadNextForm(_this6.currPage - 1);
              } else {
                if (_this6.networkService.getCurrentNetworkStatus() == 0) {
                  _this6.emisService.GetStudHealthScrn(_this6.paramData.studentid, _this6.acYear).subscribe(function (res1) {
                    if (res1.dataStatus) {
                      localStorage.setItem("listFromApi", JSON.stringify(res1.result.QusetDetails));

                      var _query = 'DELETE FROM health_screen_ques' + ' WHERE school_key_id = "' + _this6.paramData.SchlId + '"' + ' And StuId = "' + _this6.paramData.studentid + '"';

                      _this6.sqliteDB.update(_query).then(function (res) {
                        var sqlArray = [];
                        res1.result.QusetDetails.forEach(function (element) {
                          sqlArray.push(['INSERT INTO health_screen_ques VALUES (?,?,?,?,?,?)', [null, _this6.paramData.SchlId, _this6.paramData.studentid, element.Qid, element.ResChar, 1]]);
                        });

                        _this6.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                          _this6.loadNextForm(_this6.currPage - 1);
                        });
                      });

                      _this6.loadNextForm(_this6.currPage - 1);
                    } else {
                      localStorage.setItem("listFromApi", JSON.stringify(''));
                    }

                    _this6.loadNextForm(_this6.currPage - 1);
                  }, function (error) {
                    localStorage.setItem("listFromApi", JSON.stringify(''));

                    _this6.loadNextForm(_this6.currPage - 1);
                  });
                } else {
                  _this6.loadNextForm(_this6.currPage - 1);
                }
              }

              ;
            });
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            debugger;
            this.router.navigate([this.paramData.navigateUrl], {
              queryParams: JSON.parse(this.paramData.navigate)
            });
          }
        }, {
          key: "feedback",
          value: function feedback() {
            this.router.navigate(['/tabs/final-feedback']);
          }
        }, {
          key: "loadNextForm",
          value: function loadNextForm(slice) {
            var formArr = this.formGroupList.get('formGroupPages');
            var mV = this.paramData.module;
            var conV = mV == 'MHT' || mV == 'CWSN' ? this.jsonList.length : 1;

            for (var i = 0; i < conV; i++) {
              this.formArrayList.controls.splice(i, 1);
              var obj = this.fb.group({
                grandParentFA: this.fb.array([]),
                value: this.fb.control("")
              });
              var ques = [];

              if (i + 1 == 2 && mV == 'CWSN') {
                ques = [];
              } else {
                ques = this.jsonList[i]['Page' + (i + 1)];
              }

              obj.patchValue({
                value: ques
              });
              formArr.controls.splice(i, 0, obj);
              this.formGroupList.updateValueAndValidity(); //  console.log(this.formGroupList,"Forms")
            }
          }
        }, {
          key: "insertScenStds",
          value: function insertScenStds(arr, scrnSts, serverSts, pmoa, rbsk, mentalHealth, dentalSpeciallist, cwsn) {
            var _this7 = this;

            var query = 'DELETE FROM healthStdScrnDetails' + ' WHERE StudId = "' + this.paramData.studentid + '"';
            ;
            this.sqliteDB.update(query).then(function (res) {
              var sqlArray = [];
              arr.forEach(function (element) {
                sqlArray.push(['INSERT INTO healthStdScrnDetails VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.StdntId, element.ScrngDate, element.SchoolId, element.Sec, element.StudentClass, scrnSts, serverSts, pmoa, rbsk, mentalHealth, dentalSpeciallist, cwsn]]);
              });

              _this7.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                _this7.router.navigate(['/tabs/health-studentlist'], {
                  queryParams: {
                    data: JSON.stringify(_this7.paramData)
                  }
                });
              });
            });
          }
        }, {
          key: "generatePost",
          value: function generatePost(data) {
            if (parseInt(data.controlName) > 0 && data.ques_type != 3 && data.ques_type != 0) {
              var obj = {
                "IndxID": data.IndxID,
                "Qid": data.controlName,
                "ResChar": "",
                "isactive": "1"
              };

              if (data.ques_type == 12) {
                obj.ResChar = data[data.controlName] ? 1 : 2;
              } else if (data.ques_type == 5) {
                if (data[data.controlName] != undefined) {
                  if (data[data.controlName].id != undefined) {
                    obj.ResChar = data[data.controlName].id;
                  } else {
                    obj.ResChar = data[data.controlName];
                  }
                } else {
                  obj.ResChar = data[data.controlName];
                }
              } else if (data.ques_type == 6) {
                var temp = '';

                if (data[data.controlName].length > 1) {
                  for (var j = 0; j < data[data.controlName].length; j++) {
                    temp = data[data.controlName][j].id + "," + temp;
                  }
                } else {
                  temp = data[data.controlName][0].id;
                }

                obj.ResChar = temp;
              } else {
                obj.ResChar = data[data.controlName];
              }

              if (obj.ResChar != '') {
                this.formPost.push(obj);
              }
            }

            ;

            if (data.subques != undefined) {
              if (data.subques.length > 0) {
                for (var i = 0; i < data.subques.length; i++) {
                  this.generatePost(data.subques[i]);
                }

                ;
              }
            }

            ;
          }
        }, {
          key: "navigatePreviousPage",
          value: function navigatePreviousPage() {
            this.currPage = this.currPage - 2;
            this.navigateNextPage();
          }
        }, {
          key: "checkFormValid",
          value: function checkFormValid() {
            var formValid = true;
            var totalForms = this.formGroupList.get('formGroupPages'); // console.log(totalForms.controls[this.currPage - 1].value);

            if (totalForms.controls[this.currPage - 1].invalid) {
              formValid = false;
            }

            if (formValid) {
              this.insertScrValues(this.currPage);
            } else {
              this.alertService.warning('form is invalid');
              this.issubmitted = true;
            }
          }
        }, {
          key: "insertScrValues",
          value: function insertScrValues(pageNo) {
            var _this8 = this;

            if (this.scrnedStatus == 1) {
              this.navigateNextPage();
            } else {
              var totalForms = this.formGroupList.get('formGroupPages');
              this.formPost = [];
              var currFormTotal = totalForms.controls[pageNo - 1].value.grandParentFA; // console.log(totalForms.controls[pageNo - 1].value);

              for (var i = 0; i < currFormTotal.length; i++) {
                this.generatePost(currFormTotal[i]);
              }

              ;
              var quesIds = '';
              this.formPost.forEach(function (obj) {
                quesIds ? quesIds = quesIds + "," + obj.Qid : quesIds = obj.Qid;
              });
              var query = 'DELETE FROM health_screen_ques' + ' WHERE school_key_id = "' + this.paramData.SchlId + '"' + ' And StuId = "' + this.paramData.studentid + '"' + ' And Qid IN (' + quesIds + ')';
              this.sqliteDB.update(query).then(function (res) {
                // if (res) {
                var sqlArray = [];

                _this8.formPost.forEach(function (element) {
                  sqlArray.push(['INSERT INTO health_screen_ques VALUES (?,?,?,?,?,?)', [null, _this8.paramData.SchlId, _this8.paramData.studentid, element.Qid, element.ResChar, element.isactive]]);
                });

                _this8.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                  _this8.navigateNextPage();
                }); // }

              });
            }
          }
        }, {
          key: "callFromChildDom",
          value: function callFromChildDom(event) {
            // console.log('child form', typeof (event));
            // let Curform:any = event.arr[event.i].controls;
            if (!event.controls) {
              var Curform = event.list.controls;
              var docMent = [3, 4, 5, 6, 66, 8, 9, 10, 11, 12];
              var bmi = [14, 15];

              if (docMent.includes(Curform.controlName.value)) {
                // =============document upload===============
                this.addRemoveValidation(this.findeyeDoc(event.arr), event.arr, 10);
              } else if (bmi.includes(Curform.controlName.value)) {
                this.calcBmi(event);
              }
            } else {
              if (event.controls[0]) {
                var parentForm = event.controls[0];

                if (parentForm.controls.controlName.value == 2) {
                  var eysQues = parentForm.controls.subques.controls;
                  this.addRemoveValidation(this.findeyeDoc(eysQues), eysQues, 10);
                }
              }
            }
          }
        }, {
          key: "findeyeDoc",
          value: function findeyeDoc(arr) {
            var _a;

            var docTrue = false;

            for (var i = 0; i < arr.length; i++) {
              var ctrl = arr[i].controls;

              if (((_a = ctrl[ctrl.controlName.value]) === null || _a === void 0 ? void 0 : _a.value) == 1) {
                docTrue = true;
                break;
              }
            }

            ;
            return docTrue;
          }
        }, {
          key: "calcBmi",
          value: function calcBmi(event) {
            var weCtrl = event.arr[event.arr.length - 3].controls;
            var heCtrl = event.arr[event.arr.length - 2].controls;
            var bmiCtrl = event.arr[event.arr.length - 1];
            var bmiVal = 0,
                heVal = 0,
                weVal = 0;
            heVal = Number(weCtrl[weCtrl.controlName.value].value);
            weVal = Number(heCtrl[heCtrl.controlName.value].value);
            bmiVal = Number((weVal / Math.pow(heVal / 100, 2)).toFixed(2));
            bmiCtrl.patchValue(_defineProperty({}, bmiCtrl.controls.controlName.value, bmiVal ? bmiVal : 'Invalid'));
          }
        }, {
          key: "addRemoveValidation",
          value: function addRemoveValidation(status, arr, i) {
            var _a;

            var ctrl = (_a = arr[i]) === null || _a === void 0 ? void 0 : _a.controls;

            if (ctrl) {
              ctrl.hidden.setValue(1);

              if (status) {
                ctrl.hidden.setValue(0);
                ctrl[ctrl.controlName.value].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
              } else {
                ctrl[ctrl.controlName.value].setValidators(null);
                ctrl[ctrl.controlName.value].setValue('');
              }

              ctrl[ctrl.controlName.value].updateValueAndValidity();
            }
          }
        }, {
          key: "refCalc",
          value: function refCalc(type, arr) {
            var refStatus = 0;
            var refQues = [];

            if (type == 1) {
              refQues = [3, 4, 6, 12];
            } else if (type == 2) {
              refQues = [61, 54, 59, 60];
            } else if (type == 3) {
              refQues = [30];
            } else if (type == 4) {
              refQues = [3, 6, 19, 36, 40, 44, 47, 61, 52, 54, 62, 65];
            }

            for (var i = 0; i < arr.length; i++) {
              if (refQues.includes(arr[i].Qid) || type == 5) {
                if (arr[i].ResChar == 1) {
                  refStatus = 1;
                  break;
                }
              }
            }

            return refStatus;
          }
        }]);
      }();

      _HealthCheckUpAnswerPage.ctorParameters = function () {
        return [{
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_6__.SqlitedatabaseService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef
        }];
      };

      _HealthCheckUpAnswerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-health-check-up-answer',
        template: _raw_loader_health_check_up_answer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_health_check_up_answer_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HealthCheckUpAnswerPage);
      /***/
    },

    /***/
    64877:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/mht/health-check-up-answer/health-check-up-answer.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background:transparent !important;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\nh6 {\n  color: var(--text-color-black);\n}\n\nh5 {\n  margin: 1rem;\n}\n\n.container {\n  padding: 15px !important;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.subBtn {\n  color: white;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n}\n\n.submit {\n  background-color: #F96C94;\n  color: white;\n  text-align: center;\n  width: 30%;\n  padding: 6px;\n  border-radius: 12px;\n}\n\n.divsub {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 5px;\n}\n\n.quesRow {\n  background-color: #F7F7F7;\n  width: 100%;\n  border-radius: 12px;\n  margin-top: 8px;\n}\n\n.mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  padding: 10px;\n  margin-bottom: 15px;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 5;\n}\n\n.p-5p {\n  padding: 5px;\n}\n\n.card-align {\n  margin: 0 !important;\n  border-radius: 10px;\n}\n\n.back-iconNew {\n  color: white;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.gap-3 {\n  grid-gap: 3%;\n  gap: 3%;\n}\n\n.m0 {\n  margin: 0;\n}\n\n.m20p {\n  margin: 20px;\n}\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem !important;\n  margin-top: 0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWx0aC1jaGVjay11cC1hbnN3ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0FBQ0o7O0FBRUU7RUFDRSwrQkFBQTtBQUNKOztBQUVFO0VBQ0Usd0NBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFFRSx3QkFBQTtBQUFKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNDLGtCQUFBO0VBQ0MsbUJBQUE7QUFBTjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBSUo7O0FBREE7RUFDSSxZQUFBO0FBSUo7O0FBREE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0FBS0o7O0FBRkE7RUFDSSxhQUFBO0FBS0o7O0FBRkE7RUFDSSx1QkFBQTtBQUtKOztBQUZBO0VBQ0ksWUFBQTtFQUFBLE9BQUE7QUFLSjs7QUFGQTtFQUNJLFNBQUE7QUFLSjs7QUFGQTtFQUNFLFlBQUE7QUFLRjs7QUFGQTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7QUFLSiIsImZpbGUiOiJoZWFsdGgtY2hlY2stdXAtYW5zd2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRheS1jb2xvci1jaGFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItYmxhY2spO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAvLyBwYWRkaW5nOiAwcHggMTVweCAxNXB4IDE1cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuLmJ0bkRpdiB7XHJcbiAgICB3aWR0aDoxMDAlIDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdWJCdG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdWJtaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NkM5NDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbi5kaXZzdWJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5yYWRpb3tcclxuICAgIHBhZGRpbmctcmlnaHQ6NDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4XHJcbn1cclxuLnF1ZXNSb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5tYWluTGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBOEI4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ucC01cCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWFsaWduIHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uYmFjay1pY29uTmV3IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmQtZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmdhcC0zIHtcclxuICAgIGdhcDogMyU7XHJcbn1cclxuXHJcbi5tMCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tMjBwIHtcclxuICBtYXJnaW46MjBweFxyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCAuaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    47100:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/health-check-up-answer/health-check-up-answer.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">Health Module Questions (AY {{acYear}})</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n  <!-- <div class=\"mainLable\"> \r\n    <ion-row class=\"text-row\">\r\n      <ion-col size=\"12\">\r\n        <h6 *ngIf=\"paramData\" class=\"m0\">Name: {{paramData.studentname}}({{paramData.UniqId}})</h6>\r\n        <h6 *ngIf=\"paramData\" class=\"m0\">Gender :{{paramData.Gender==1?'Male':'Female'}}</h6>\r\n      </ion-col> -->\r\n  <!-- <ion-col size=\"6\"> \r\n        <h6 *ngIf=\"paramData\" class=\"m0\">Class: {{paramData.ClsID}},{{paramData.Sectn}}</h6>\r\n       </ion-col> -->\r\n  <!-- </ion-row>\r\n  </div> -->\r\n  <div class=\"m20p\">\r\n    <ion-card class=\"card-align ion-card-margin\">\r\n      <ion-row class=\"container\">\r\n        <ion-col size=\"12\">\r\n          <div>\r\n            <h6 *ngIf=\"paramData\" class=\"m0\"><b>Name:</b> {{paramData.studentname}} ({{paramData.UniqId}})</h6>\r\n            <h6 *ngIf=\"paramData\" class=\"m0\"><b>Gender:</b> {{paramData.Gender==1?'Male':'Female'}}</h6>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <h5 class=\"text-center\">Health and wellbeing</h5>\r\n    \r\n    <ion-card class=\"card-align ion-card-margin\">\r\n      <div class=\"staffList_Content bg_lightBlue\">\r\n        <div class=\"container\">\r\n          <form [formGroup]=\"formGroupList\">\r\n            <div formArrayName=\"formGroupPages\">\r\n              <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n                <div formGroupName=\"{{i}}\">\r\n                  <div formArrayName=\"grandParentFA\">\r\n                    <app-dynamic-health-form-mode [list]=\"list['controls'].value.value\" index=\"'0'\" [formGrp]=\"list\"\r\n                      formArrName=\"grandParentFA\" [submitted]=\"issubmitted\" (childDom)=\"callFromChildDom($event)\">\r\n                    </app-dynamic-health-form-mode>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_pages_mht_health-check-up-answer_health-check-up-answer_module_ts-es5.js.map