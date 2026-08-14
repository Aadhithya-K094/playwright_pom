(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

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

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_awc-form_awc-form_module_ts"], {
    /***/
    2429:
    /*!***************************************************************!*\
      !*** ./src/app/pages/awc/awc-form/awc-form-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcFormPageRoutingModule": function AwcFormPageRoutingModule() {
          return (
            /* binding */
            _AwcFormPageRoutingModule
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


      var _awc_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-form.page */
      10128);

      var routes = [{
        path: '',
        component: _awc_form_page__WEBPACK_IMPORTED_MODULE_0__.AwcFormPage
      }];

      var _AwcFormPageRoutingModule = /*#__PURE__*/_createClass(function AwcFormPageRoutingModule() {
        _classCallCheck(this, AwcFormPageRoutingModule);
      });

      _AwcFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AwcFormPageRoutingModule);
      /***/
    },

    /***/
    26358:
    /*!*******************************************************!*\
      !*** ./src/app/pages/awc/awc-form/awc-form.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcFormPageModule": function AwcFormPageModule() {
          return (
            /* binding */
            _AwcFormPageModule
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


      var _awc_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-form-routing.module */
      2429);
      /* harmony import */


      var _awc_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awc-form.page */
      10128);
      /* harmony import */


      var _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../commonpages/dynamic-form-table/dynamic-form-table.module */
      41721);

      var _AwcFormPageModule = /*#__PURE__*/_createClass(function AwcFormPageModule() {
        _classCallCheck(this, AwcFormPageModule);
      });

      _AwcFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _awc_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwcFormPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _commonpages_dynamic_form_table_dynamic_form_table_module__WEBPACK_IMPORTED_MODULE_2__.DynamicFormTablePageModule],
        declarations: [_awc_form_page__WEBPACK_IMPORTED_MODULE_1__.AwcFormPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
      })], _AwcFormPageModule);
      /***/
    },

    /***/
    10128:
    /*!*****************************************************!*\
      !*** ./src/app/pages/awc/awc-form/awc-form.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcFormPage": function AwcFormPage() {
          return (
            /* binding */
            _AwcFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_awc_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./awc-form.page.html */
      84807);
      /* harmony import */


      var _awc_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awc-form.page.scss */
      82939);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _AwcFormPage = /*#__PURE__*/function () {
        function AwcFormPage(sqliteDB, router, http, fb, route, alertService, userService, userSessionService) {
          _classCallCheck(this, AwcFormPage);

          this.sqliteDB = sqliteDB;
          this.router = router;
          this.http = http;
          this.fb = fb;
          this.route = route;
          this.alertService = alertService;
          this.userService = userService;
          this.userSessionService = userSessionService;
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
          this.stdId = {};
          this.showForm = false;
          this.paramData = '';
          this.formPost = [];
          this.refferedTo = '';
          this.getDetailsStdList = [];
          this.nextPageButton = false;
          this.healthBlockList = [];
        }

        return _createClass(AwcFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.formGroupList = this.fb.group({
              formGroupPages: this.fb.array([])
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.showForm = false;
            this.paramData = JSON.parse(this.route.snapshot.queryParams.data);
            this.stdId = this.paramData.ChildId;
            this.editable = this.route.snapshot.queryParams.fun;
            var currPage = this.paramData.pageId;
            this.routeData = this.route.snapshot;
            this.phase_id = this.routeData.queryParams.id;
            this.viewstatus = this.routeData.queryParams.viewstatus;
            this.phaseName = this.routeData.queryParams.phaseName;
            this.AcYears = this.routeData.queryParams.AcYears;
            this.awcCode = this.routeData.queryParams.awcCode;
            this.userLatt = this.routeData.queryParams.userLatt;
            this.userLongg = this.routeData.queryParams.userLongg;
            this.schoolLatt = this.routeData.queryParams.schoolLatt;
            this.schoolLongg = this.routeData.queryParams.schoolLongg;
            this.IndexId = this.paramData.IndexId;
            this.currUser = this.userSessionService.emis_username();
            this.currPage = currPage - 1;
            this.formGroupList.reset();
            var formArr = this.formGroupList.get('formGroupPages');
            formArr.controls = []; // this.getStudent();

            this.checkLocalDB(); // this.jsonConverter();

            this.getHealthBlockList();
          }
        }, {
          key: "getStudent",
          value: function getStudent() {
            var _this = this;

            this.userService.getAwcStdDetails(this.IndexId).subscribe(function (res) {
              var response = res.result[_this.phase_id == 1 ? 0 : _this.phase_id == 3 ? 0 : _this.phase_id == 5 ? 0 : 1].details;

              for (var i = 0; i < response.length; i++) {
                _this.getDetailsStdList.push(response[i].q_id);
              }

              ;

              _this.checkLocalDB();
            });
          }
        }, {
          key: "getHealthBlockList",
          value: function getHealthBlockList() {
            var _this2 = this;

            this.healthBlockList = [];
            this.userService.healthBlockList().subscribe(function (res) {
              if (res.dataStatus) {
                _this2.healthBlockList = res.result;
              }
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this3 = this;

            this.currPage = 0;
            this.formGroupList.reset();
            var formArr = this.formGroupList.get('formGroupPages');
            formArr.controls = [];
            var query = 'DELETE FROM awc_screen_ques_list' + ' WHERE block_id = "' + 1 + '"';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res) {
                _this3.checkLocalDB();
              }
            });
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB() {
            var _this4 = this;

            var query = 'SELECT * FROM awc_screen_ques_list' + ' WHERE block_id = "' + 1 + '"';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res.rows.length > 0) {
                var data = res.rows.item(0);
                data = data ? JSON.parse(data.questions) : [];
                var mainQues = [];
                var ques;
                ques = _this4.jsonParse(data.questions.data, data.questions.columns);

                if (_this4.editable != 'Edit') {
                  _this4.viewData = true;
                  ques = ques.filter(function (obj) {
                    return obj.ques_type == 0 || obj.ques_type == 3 || _this4.getDetailsStdList.includes(obj.controlName.toString());
                  });
                }

                _this4.jsonOptions = _this4.jsonParse(data.options.data, data.options.columns);
                _this4.jsnQues = _this4.quesFormat(ques);

                for (var i = 0; i < _this4.jsnQues.length; i++) {
                  if (_this4.jsnQues[i].map == 0) {
                    _this4.jsnQues[i].mapped = true;
                    mainQues.push(_this4.jsnQues[i]);
                  } else {
                    _this4.jsnQues[i].mapped = false;
                  }
                }

                mainQues.sort(function (a, b) {
                  return a.seq_id < b.seq_id ? -1 : 1;
                });

                for (var _i = 0; _i < mainQues.length; _i++) {
                  mainQues[_i].subques = _this4.subQusParse(mainQues[_i]);

                  mainQues[_i].subques.sort(function (a, b) {
                    return a.seq_id < b.seq_id ? -1 : 1;
                  });
                } // =========page filter===========


                var filterByPage = [];

                var allPages = _toConsumableArray(new Set(mainQues.map(function (item) {
                  return item.page;
                })));

                var ascPages = _toConsumableArray(allPages).sort(function (a, b) {
                  return a - b;
                });

                for (var _i2 = 0; _i2 < ascPages.length; _i2++) {
                  var pageName = 'Page' + ascPages[_i2];
                  filterByPage.push(_defineProperty(_defineProperty({}, pageName, []), "Page_Title", pageName));
                }

                var _loop = function _loop(_i3) {
                  // if (filterByPage.length == 0) {
                  //   // let obj = {
                  //   //   Page1 : [mainQues[i]]
                  //   // };
                  //   filterByPage = [{ Page1: [mainQues[i]], Page_Title: 'Questions' }, { Page2: [], Page_Title: 'page2' }, { Page3: [], Page_Title: 'page3' }];
                  // } else {
                  for (var j = 0; j < filterByPage.length; j++) {
                    if (j + 1 == mainQues[_i3].page) {
                      var index = filterByPage[j]['Page' + mainQues[_i3].page].findIndex(function (obj) {
                        return obj.controlName == mainQues[_i3].controlName;
                      });

                      if (index == -1) {
                        filterByPage[j]['Page' + mainQues[_i3].page].push(mainQues[_i3]);
                      }
                    }
                  } // }

                };

                for (var _i3 = 0; _i3 < mainQues.length; _i3++) {
                  _loop(_i3);
                }

                _this4.jsonList = [];
                _this4.jsonList = filterByPage;

                _this4.loadJson();
              } else {
                _this4.jsonConverter();
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
          value: function jsonConverter() {
            var _this5 = this;

            // let awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_staging.json';
            var awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_production.json';
            var mainQues = [];
            this.http.get(awcQues).subscribe(function (data) {
              var questions = JSON.stringify(data);
              var sqlArray = [];
              sqlArray.push(['INSERT INTO awc_screen_ques_list VALUES (?,?,?)', [null, 1, questions]]);

              _this5.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                _this5.checkLocalDB();
              });
            }, function (error) {
              _this5.alertService.warning("Error While getting Questions");
            });
          }
        }, {
          key: "loadJson",
          value: function loadJson() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
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

                    this.formArrayList.control = [];
                    this.formArrayList = this.formGroupList.get('formGroupPages');
                    localStorage.setItem("listFromApi", '');
                    this.formGroupList.updateValueAndValidity();
                    this.navigateNextPage(1);

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "subQusParse",
          value: function subQusParse(obj) {
            var isseq = true;
            var arr = [];

            for (var i = 0; i < this.jsnQues.length; i++) {
              if (!this.jsnQues[i].isMapped && obj.controlName == this.jsnQues[i].map) {
                this.jsnQues[i].isMapped = true;
                arr.push(this.jsnQues[i]);
              }
            }

            ;

            for (var j = 0; j < arr.length; j++) {
              arr[j].subques = this.subQusParse(arr[j]);
            }

            ;

            for (var _j = 0; _j < arr.length; _j++) {
              if (arr[_j].seq_id) {
                isseq = false;
                break;
              }
            }

            ; // if(isseq) {
            // }

            return arr;
          }
        }, {
          key: "quesFormat",
          value: function quesFormat(ques) {
            var _this6 = this;

            var arr = [];

            for (var i = 0; i < ques.length; i++) {
              ques[i].age_years = ques[i].age_years.split(',');
              ques[i].ques_text = ques[i].q_type;
              ques[i].valid = true;
              ques[i].seq_id = ques[i].seq_id;
              ques[i].option_mapping = ques[i].option_mapping; // ============expected===============

              if (ques[i].expected) {
                ques[i].expected = ques[i].expected.split(',');
              } else {
                ques[i].expected = [];
              }

              if (ques[i].expected.length > 0) {
                for (var j = 0; j < ques[i].expected.length; j++) {
                  if (ques[i].expected[j] == 'true') {
                    ques[i].expected[j] = true;
                  } else if (ques[i].expected[j] == 'false') {
                    ques[i].expected[j] = false;
                  } else if (ques[i].expected[j]) {
                    ques[i].expected[j] = ques[i].expected[j];
                  }
                }
              } // ========options=============


              if (ques[i].ques_type == 5 || ques[i].ques_type == 1 || ques[i].ques_type == 6) {
                ques[i].ques_option = [];
                ques[i].options = ques[i].options.split(',');

                var _loop2 = function _loop2(_j2) {
                  var index = ques[i].options.findIndex(function (x) {
                    return x == _this6.jsonOptions[_j2].id;
                  });

                  if (index > -1) {
                    ques[i].ques_option.push({
                      id: _this6.jsonOptions[_j2].value,
                      value: _this6.jsonOptions[_j2].label
                    });
                  }
                };

                for (var _j2 = 0; _j2 < this.jsonOptions.length; _j2++) {
                  _loop2(_j2);
                }
              }

              arr.push(ques[i]);
            }

            return arr;
          }
        }, {
          key: "navigateNextPage",
          value: function navigateNextPage(type) {
            var _this7 = this;

            this.userService.GetAwcScrDet(this.paramData.IndexId, this.phase_id).subscribe(function (res) {
              if (type == 2) {
                _this7.currPage = _this7.currPage - 2;
              }

              localStorage.setItem("listFromApi", '');

              _this7.formArrayList.controls.splice(_this7.currPage, 1);

              _this7.currPage = _this7.currPage + 1;
              _this7.paramData.pageId = _this7.currPage;

              _this7.router.navigate([], {
                queryParams: {
                  data: JSON.stringify(_this7.paramData)
                }
              });

              _this7.issubmitted = false;

              if (res.dataStatus) {
                localStorage.setItem("listFromApi", JSON.stringify(res.result[0].Details));
              } else {
                localStorage.setItem("listFromApi", JSON.stringify(''));
              }

              _this7.loadNextForm();
            }, function (error) {
              if (type == 2) {
                _this7.currPage = _this7.currPage - 2;
              }

              localStorage.setItem("listFromApi", '');

              _this7.formArrayList.controls.splice(_this7.currPage, 1);

              _this7.currPage = _this7.currPage + 1;
              _this7.paramData.pageId = _this7.currPage;

              _this7.router.navigate([], {
                queryParams: {
                  data: JSON.stringify(_this7.paramData)
                }
              });

              _this7.issubmitted = false;
              localStorage.setItem("listFromApi", JSON.stringify(''));

              _this7.loadNextForm();
            });
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/awc-student-list'], {
              queryParams: {
                data: JSON.stringify(this.paramData),
                id: this.phase_id,
                viewstatus: this.viewstatus,
                phaseName: this.phaseName,
                AcYears: this.AcYears
              }
            });
          }
        }, {
          key: "feedback",
          value: function feedback() {
            this.router.navigate(['/tabs/final-feedback']);
          }
        }, {
          key: "loadNextForm",
          value: function loadNextForm() {
            var _this8 = this;

            var tempFormList = this.jsonList;
            var temp = "Page" + (this.currPage - 1 + 1) + "";
            var formArr = this.formGroupList.get('formGroupPages');
            var obj = this.fb.group({
              grandParentFA: this.fb.array([]),
              value: this.fb.control("")
            });
            obj.patchValue({
              value: tempFormList[this.currPage - 1][temp]
            });
            formArr.controls.splice(this.currPage - 1, 0, obj);
            this.formArrayList = this.formGroupList.get('formGroupPages');
            setTimeout(function () {
              var _a;

              if (((_a = _this8.formArrayList.controls[0].value.value[0]) === null || _a === void 0 ? void 0 : _a.value) == '1') {
                _this8.nextPageButton = true;
              } else {
                _this8.nextPageButton = false;
              }
            }, 0);
            this.formGroupList.updateValueAndValidity();
            this.showForm = true;
          }
        }, {
          key: "callFromChildDom",
          value: function callFromChildDom(event) {
            if ((event === null || event === void 0 ? void 0 : event.qId) == 68 && (event === null || event === void 0 ? void 0 : event.value) == 1) {
              this.nextPageButton = true;
            } else {
              this.nextPageButton = false;
            } // let totalForms: any = this.formGroupList.get('formGroupPages') as FormArray;
            // let currFormTotal: any = totalForms.controls[0].controls.grandParentFA.controls;
            // for (let i = 0; i < currFormTotal.length && currFormTotal.length > 12; i++) {
            //   this.currControl = currFormTotal[i];
            // }

          }
        }, {
          key: "formatAcademicYear",
          value: function formatAcademicYear(yearString) {
            var years = yearString.split('-');

            if (years.length === 2) {
              var startYear = years[0];
              var endYear = years[1].slice(-2);
              return "".concat(startYear, "-").concat(endYear);
            }

            return yearString;
          }
        }, {
          key: "saveAll",
          value: function saveAll(currpage) {
            var _this9 = this;

            this.issubmitted = true;
            var formValid = true;
            this.formPost = [];
            var totalForms = this.formGroupList.get('formGroupPages');

            for (var i = 0; i < totalForms.controls.length; i++) {
              var currFormTotal = totalForms.controls[i].value.grandParentFA;

              for (var _i4 = 0; _i4 < currFormTotal.length; _i4++) {
                this.generatePost(currFormTotal[_i4]);
              }

              ;

              if (totalForms.controls[i].invalid && currpage == 1 && i == 0) {
                formValid = false;
              } else if (currpage != 1 && totalForms.controls[i].invalid) {
                formValid = false;
              }
            }

            ;

            if (formValid) {
              var newDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD');
              var obj = {
                "awc": [{
                  "IndxID": null,
                  "AwcCode": this.paramData.AwcCode,
                  "ScrenDate": newDate,
                  "childId": this.paramData.IndexId,
                  "referredStatus": this.refferedTo,
                  "AcYear": this.formatAcademicYear(this.AcYears) // "userLatt": this.userLatt,
                  // "userLongg": this.userLongg,
                  // "schoolLatt": this.schoolLatt,
                  // "schoolLongg": this.schoolLongg

                }],
                "awcDet": this.formPost,
                "PhaseId": this.phase_id
              };
              this.paramData;
              var secondParam;
              secondParam = {
                records: {
                  AwcCode: this.awcCode,
                  Username: this.currUser // UserLatt: this.userLatt,
                  // UserLongg: this.userLongg,
                  // VisitPhoto: localStorage.getItem('VisitPhoto')

                }
              }; // this.savePhoto(secondParam);

              this.userService.AwcScrCUD(obj).subscribe(function (res) {
                if (res.dataStatus) {
                  _this9.issubmitted = false;

                  _this9.alertService.warning(res.message);

                  _this9.router.navigate(['/tabs/awc-student-list'], {
                    queryParams: {
                      data: JSON.stringify(_this9.paramData),
                      id: _this9.phase_id,
                      viewstatus: _this9.viewstatus,
                      phaseName: _this9.phaseName,
                      AcYears: _this9.AcYears
                    }
                  });
                } else {
                  _this9.alertService.warning(res.message);
                }
              });
            } else {
              this.issubmitted = true;
              this.alertService.warning('Form is invalid');
            }
          }
        }, {
          key: "savePhoto",
          value: function savePhoto(params) {
            this.userService.saveAWCGeoFencingPhoto(params).subscribe(function (data) {});
          }
        }, {
          key: "generatePost",
          value: function generatePost(data) {
            //  
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

              if (data.controlName == 53) {
                this.refferedTo = data[data.controlName];
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
            this.navigateNextPage(2);
          }
        }, {
          key: "ageCalculator",
          value: function ageCalculator(date) {
            // var userinput = document.getElementById("DOB").value;  
            var dob = new Date(date); //extract the year, month, and date from user date input  

            var dobdobYear = dob.getFullYear();
            var dobdobMonth = dob.getMonth(); // var dobdobDate = dob.getDate();  
            //get the current date from the system  

            var now = new Date(); //extract the year, month, and date from current date  

            var currentYear = now.getFullYear();
            var currentMonth = now.getMonth();
            var currentDate = now.getDate(); //declare a variable to collect the age in year, month, and days  

            var age = {};
            var ageString = ""; //get years  

            var yearAge = currentYear - dobdobYear; //get months  

            if (currentMonth >= dobdobMonth) //get months when current month is greater  
              var monthAge = currentMonth - dobdobMonth;else {
              yearAge--;
              var monthAge = 12 + currentMonth - dobdobMonth;
            } //get days  

            if (currentDate >= dobdobMonth) //get days when the current date is greater  
              var dateAge = currentDate - dobdobMonth;else {
              monthAge--;
              var dateAge = 31 + currentDate - dobdobMonth;

              if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
              }
            } //group the age in a single variable  

            age = {
              years: yearAge,
              months: monthAge,
              days: dateAge
            };
            var ageageString = '';
            if (age.years > 0 && age.months > 0 && age.days > 0) ageageString = age.years + " yr, " + age.months + "m";else if (age.years == 0 && age.months == 0 && age.days > 0) ageString = age.days + "days"; //when current month and date is same as birth date and month  
            else if (age.years > 0 && age.months == 0 && age.days == 0) ageageString = age.years + "yr" + "0m";else if (age.years > 0 && age.months > 0 && age.days == 0) ageageString = age.years + "y," + age.months + " m";else if (age.years == 0 && age.months > 0 && age.days > 0) ageageString = age.months + "m";else if (age.years > 0 && age.months == 0 && age.days > 0) ageageString = age.years + "y,0m";else if (age.years == 0 && age.months > 0 && age.days == 0) ageageString = age.months + "m"; //  
            //display the calculated age  

            return ageageString;
          }
        }, {
          key: "checkFormValid",
          value: function checkFormValid() {
            //  
            var formValid = true;
            var totalForms = this.formGroupList.get('formGroupPages');

            if (totalForms.controls[this.currPage - 1].invalid) {
              formValid = false;
            }

            if (formValid || this.viewstatus == 2) {
              this.navigateNextPage(1);
            } else {
              this.alertService.warning('form is invalid');
              this.issubmitted = true;
            }
          }
        }]);
      }();

      _AwcFormPage.ctorParameters = function () {
        return [{
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }];
      };

      _AwcFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-awc-form',
        template: _raw_loader_awc_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_awc_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AwcFormPage);
      /***/
    },

    /***/
    82939:
    /*!*******************************************************!*\
      !*** ./src/app/pages/awc/awc-form/awc-form.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background:transparent !important;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.subBtn {\n  color: white;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n}\n\n.submit {\n  background-color: #F96C94;\n  color: white;\n  text-align: center;\n  width: 30%;\n  padding: 6px;\n  border-radius: 12px;\n}\n\n.divsub {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 5px;\n}\n\n.quesRow {\n  background-color: #F7F7F7;\n  width: 100%;\n  border-radius: 12px;\n  margin-top: 8px;\n}\n\n.mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 15px;\n}\n\n.p-5p {\n  padding: 5px;\n}\n\n.card-align {\n  margin: 0 !important;\n}\n\n.userlabel {\n  zoom: 1.5;\n}\n\n.text-white {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3Yy1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Msa0JBQUE7RUFDQyxtQkFBQTtBQUdOOztBQURBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFMQTtFQUNJLFlBQUE7QUFRSjs7QUFMQTtFQUNJLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxTQUFBO0FBU0o7O0FBTkE7RUFDSSxZQUFBO0FBU0oiLCJmaWxlIjoiYXdjLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4uYnRuRGl2e1xyXG4gICAgd2lkdGg6MTAwJSA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uc3ViQnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk2Qzk0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLmRpdnN1YntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnJhZGlve1xyXG4gICAgcGFkZGluZy1yaWdodDo0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHhcclxufVxyXG4ucXVlc1Jvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuLm1haW5MYWJsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkE4Qjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5wLTVwIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNhcmQtYWxpZ24ge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXJsYWJlbCB7XHJcbiAgICB6b29tOiAxLjU7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */";
      /***/
    },

    /***/
    84807:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/awc-form/awc-form.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Anganwadi Screening</div>\r\n      <!-- <div class=\"ion-text-wrap floatLabel\">\r\n      ( {{AcYears}} - {{phaseName}} )\r\n      </div> -->\r\n      <div class=\"ion-text-wrap floatLabel\" style=\"font-size: 13px;\">\r\n        <!-- <ion-icon class=\"userlabel\" ></ion-icon> -->\r\n        {{awcCode}} &nbsp; &nbsp;( {{AcYears}} - {{phaseName}} )\r\n      </div>\r\n      <!-- <div class=\"ion-text-wrap\" (click)=\"onSync()\">get latest Ques</div> -->\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"sync\" (click)=\"onSync()\">\r\n       </ion-icon>\r\n   </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"margin:20px\">\r\n    <div class=\"mainLable\"> \r\n      <h6 *ngIf=\"paramData\">Name: {{paramData.Childname}}</h6>\r\n      <h6 *ngIf=\"paramData\">Age : {{ageCalculator(paramData.ChildDob)}}</h6>\r\n      <h6 *ngIf=\"paramData\">Gender :{{paramData.Gender==1?'Male':'Female'}}</h6>\r\n    </div>\r\n    <!-- <div class=\"mainLable\"> \r\n      <ion-label>Question & Answer</ion-label>\r\n    </div> -->\r\n  <ion-card class=\"card-align ion-card-margin\" >\r\n    <div class=\"staffList_Content bg_lightBlue mt-3\">\r\n        <div class=\"container\">\r\n            <form [formGroup]=\"formGroupList\"> \r\n                    <div formArrayName=\"formGroupPages\">\r\n                        <div *ngFor=\"let list of formArrayList.controls;let i = index\">\r\n                            <div formGroupName=\"{{i}}\">\r\n                                <div formArrayName=\"grandParentFA\" *ngIf=\"(i+1)==currPage\">\r\n                                    <app-aws-dynamic-form1 [list]=\"list['controls'].value.value\" index=\"'0'\" [formGrp]=\"list\"\r\n                                        formArrName=\"grandParentFA\" [submitted]=\"issubmitted\" [viewstatus]=\"viewstatus\" (childDom)=\"callFromChildDom($event)\" [healthBlock]=\"healthBlockList\">\r\n                                    </app-aws-dynamic-form1>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-center gap-3\">\r\n                        <ion-button class=\"btn_lightRed border-0 rounded-0 text-white\" (click)=\"navigatePreviousPage()\" *ngIf=\"currPage>1\">Previous</ion-button>\r\n                        <!-- <ion-button class=\"btn_lightRed border-0 rounded-0\" (click)=\"saveAll(currPage)\">Submit</ion-button> -->\r\n                        <ion-button class=\"btn_lightRed border-0 rounded-0 text-white\" (click)=\"saveAll(currPage)\" *ngIf=\"(currPage == jsonList.length && (this.editable != 'View') && viewstatus == 1) || (!nextPageButton && currPage == 1 && viewstatus == 1)\">Submit</ion-button>\r\n                        <ion-button class=\"btn_lightRed border-0 rounded-0 text-white\" (click)=\"checkFormValid()\" *ngIf=\"jsonList.length>1 && !(jsonList.length==currPage) && (nextPageButton || currPage != 1)\">Next </ion-button>\r\n                    </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</ion-card>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_awc_awc-form_awc-form_module_ts-es5.js.map