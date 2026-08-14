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

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn-phase2_ca-intervention_ca-intervention_module_ts"], {
    /***/
    64189:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-intervention/ca-intervention-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CaInterventionPageRoutingModule": function CaInterventionPageRoutingModule() {
          return (
            /* binding */
            _CaInterventionPageRoutingModule
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


      var _ca_intervention_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-intervention.page */
      45066);

      var routes = [{
        path: '',
        component: _ca_intervention_page__WEBPACK_IMPORTED_MODULE_0__.CaInterventionPage
      }];

      var _CaInterventionPageRoutingModule = /*#__PURE__*/_createClass(function CaInterventionPageRoutingModule() {
        _classCallCheck(this, CaInterventionPageRoutingModule);
      });

      _CaInterventionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CaInterventionPageRoutingModule);
      /***/
    },

    /***/
    20513:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-intervention/ca-intervention.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CaInterventionPageModule": function CaInterventionPageModule() {
          return (
            /* binding */
            _CaInterventionPageModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ca_intervention_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ca-intervention-routing.module */
      64189);
      /* harmony import */


      var _ca_intervention_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-intervention.page */
      45066);

      var _CaInterventionPageModule = /*#__PURE__*/_createClass(function CaInterventionPageModule() {
        _classCallCheck(this, CaInterventionPageModule);
      });

      _CaInterventionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _ca_intervention_routing_module__WEBPACK_IMPORTED_MODULE_0__.CaInterventionPageRoutingModule],
        declarations: [_ca_intervention_page__WEBPACK_IMPORTED_MODULE_1__.CaInterventionPage]
      })], _CaInterventionPageModule);
      /***/
    },

    /***/
    45066:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-intervention/ca-intervention.page.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CaInterventionPage": function CaInterventionPage() {
          return (
            /* binding */
            _CaInterventionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ca_intervention_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ca-intervention.page.html */
      59588);
      /* harmony import */


      var _ca_intervention_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ca-intervention.page.scss */
      71987);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @apollo/client/utilities */
      22560);
      /* harmony import */


      var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/pdf-generator/ngx */
      37961);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      var _CaInterventionPage = /*#__PURE__*/function () {
        function CaInterventionPage(router, http, eRef, renderer, route, cwsnService, pdfGenerator, alertService, networkService, sqliteDB, alertController, ionicstorage, userSessionService) {
          _classCallCheck(this, CaInterventionPage);

          this.router = router;
          this.http = http;
          this.eRef = eRef;
          this.renderer = renderer;
          this.route = route;
          this.cwsnService = cwsnService;
          this.pdfGenerator = pdfGenerator;
          this.alertService = alertService;
          this.networkService = networkService;
          this.sqliteDB = sqliteDB;
          this.alertController = alertController;
          this.ionicstorage = ionicstorage;
          this.userSessionService = userSessionService;
          this.InterventionList = [];
          this.qstnArray = [];
          this.assessmentList = [];
          this.questionList = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe("en-US");
          this.timeStamp = new Date();
          this.supportList = [{
            label: 'Adaptation in the School and Class Room Required',
            value: 1
          }, {
            label: 'Home-Based',
            value: 2
          }, {
            label: 'School + Center',
            value: 3
          }, {
            label: 'Home + Center',
            value: 4
          }, {
            label: 'No Therapeutic Intervention',
            value: 5
          }];
          this.stuFundData = [];
          this.optnArray = [];
          this.interventionReport = [];
          this.userType1 = '';
          this.class_id = '';
        }

        return _createClass(CaInterventionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stars = [0, 1, 2, 3, 4];
            this.messages = []; // this.initialValidators();
            // this.getInterventionList();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.ratting = [{
              label: '0',
              value: '0',
              rate: ''
            }, {
              label: '1',
              value: '1',
              rate: ''
            }, {
              label: '2',
              value: '2',
              rate: ''
            }, {
              label: '3',
              value: '3',
              rate: ''
            }, {
              label: '4',
              value: '4',
              rate: ''
            }];
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.user_id = this.userSessionService.emis_username();
            this.user_name = this.userSessionService.teacher_name();
            this.userType1 = this.userSessionService.emis_usertype1();
            this.route.queryParams.subscribe(function (data) {
              _this.allStudentData = JSON.parse(data.item);
            });
            this.routeData = this.route.snapshot;
            this.title = this.routeData.queryParams.title; // this.menuValue = this.routeData.queryParams.menuValue

            this.mode = this.routeData.queryParams.mode;
            this.ionicstorage.getData('studentData').then(function (studData) {
              _this.studentData = studData;
              _this.studName = studData.Name;
              _this.schlId = studData.SchlId;
              _this.studId = studData.studId;
              _this.class_id = studData.Class ? String(studData.Class) : '';
              _this.stuFundData = [];

              _this.ionicstorage.getData('stuFunData').then(function (stuFunData) {
                _this.stuFundData = stuFunData;

                _this.checklocalDB(); // this.checkAssementLocal();

              });
            });
          }
        }, {
          key: "getInterventionList",
          value: function getInterventionList() {
            var _this2 = this;

            var intervention_json = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.cwsn_intervensions_phase2;
            this.http.get(intervention_json).subscribe(function (data) {
              _this2.InterventionList = data.cwsn_inter_phase2;

              if (data.cwsn_inter_phase2.length > 0) {
                _this2.insertInterventionData(data.cwsn_inter_phase2);
              } else {
                _this2.alertService.warning('No Interventions Found');
              }
            });
          }
        }, {
          key: "headerAccord",
          value: function headerAccord(i) {
            if (this.indexVal == i) {
              this.indexVal = '';
            } else {
              this.indexVal = i;
            }
          }
        }, {
          key: "skillheaderAccord",
          value: function skillheaderAccord(i, j) {
            if (this.skillIndexVal == [i][j]) {
              this.skillIndexVal = '';
            } else {
              this.skillIndexVal = [i][j];
            }
          }
        }, {
          key: "checkAssementLocal",
          value: function checkAssementLocal() {
            var _this3 = this;

            var query = 'SELECT * FROM intervention_qstns';
            this.sqliteDB.executeQuery(query).then(function (res) {
              if (res.rows.length > 0) {
                var temp = [];

                for (var i = 0; i < res.rows.length; i++) {
                  temp.push(res.rows.item(i));
                }

                _this3.assessmentQstnList = temp;
                _this3.assessmentQstnList = temp.filter(function (obj) {
                  var clsSplit = obj.age_category ? obj.age_category.split(",") : [];
                  return clsSplit.includes(_this3.class_id);
                });
                _this3.interventionArray = [];

                _this3.assStudDetails.forEach(function (ele) {
                  var domainIndex = _this3.assessmentQstnList.find(function (key) {
                    return key.intervension_idx_id == ele.intervension_idx_id;
                  });

                  if (domainIndex) {
                    domainIndex.domain_id = (0, _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(ele.domain_id);
                    domainIndex.domain_name = (0, _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(ele.domain_name);

                    _this3.interventionArray.push((0, _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(domainIndex));
                  }
                });

                _this3.makingFormArray();
              } else {
                _this3.getInterventionList();
              }

              ;
            });
          }
        }, {
          key: "checklocalDB",
          value: function checklocalDB() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this4 = this;

              var query;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.interventionArray = [];
                    this.assessmentList = [];
                    // query = 'SELECT * FROM stud_int_assessment' +
                    // ' WHERE user_id = "' + this.user_id + '"' +
                    // ' AND stud_id = "' + this.studId + '"' +
                    // ' AND goal_val = 1';
                    query = 'SELECT * FROM stud_int_assessment' + ' WHERE user_id = "' + this.user_id + '"' + ' AND stud_id = "' + this.studId + '"';
                    _context.n = 1;
                    return this.sqliteDB.executeQuery(query).then(function (res) {
                      _this4.assStudDetails = [];

                      if (res.rows.length > 0) {
                        var asstemp = [];

                        for (var i = 0; i < res.rows.length; i++) {
                          asstemp.push(res.rows.item(i));
                        }

                        _this4.assStudDetails = asstemp.filter(function (obj) {
                          return obj.goal_val == 1;
                        }); // this.makingFormArray();

                        _this4.checkAssementLocal();
                      } else {
                        _this4.assStudDetails = []; // this.makingFormArray();

                        _this4.getDatafromServer();
                      }
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDatafromServer",
          value: function getDatafromServer() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (this.currNetWrkSts == 0) {
                      this.cwsnService.getStudInterventionDetails(this.user_id, this.studId).subscribe(function (res) {
                        if (res.dataStatus == true) {
                          if (res.result.length > 0) {
                            _this5.serverData = res.result;

                            _this5.insertStudInterDataLocal(res.result, 3);
                          } else {
                            _this5.serverData = [];

                            _this5.makingFormArray();
                          }
                        } else {
                          _this5.serverData = [];

                          _this5.makingFormArray();
                        }
                      });
                    } else {
                      this.makingFormArray();
                    }

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "makingFormArray",
          value: function makingFormArray() {
            if (this.interventionArray.length > 0) {
              this.domainArray = _toConsumableArray(new Map(this.interventionArray.map(function (item) {
                return [item['domain_id'], item];
              })).values()); // setTimeout(() => {

              if (this.domainArray.length > 0) {
                this.domainFormDetails(this.domainArray);
              } else {}
            } else {
              this.interventionArray = [];
            }
          }
        }, {
          key: "groupByQstn",
          value: function groupByQstn(qstnList) {
            var helper = {}; // this.qstnArray = [];

            this.qstnArray.push(qstnList.reduce(function (r, o) {
              var key = o.domain_id + '-' + o.skills + '-' + o.sub_skills;

              if (!helper[key]) {
                helper[key] = Object.assign({}, o); // create a copy of o

                r.push(helper[key]);
              } else {
                helper[key].used += o.used;
                helper[key].instances += o.instances;
              }

              return r;
            }, []));
          } //set form values for yearly leaves

        }, {
          key: "domainFormDetails",
          value: function domainFormDetails(data) {
            var _this6 = this;

            console.log('subDomain data', data, 'assessmentQstnList', this.assessmentQstnList);
            this.assessmentList = [];
            this.qstnArray = [];
            this.interventionReport = [];

            var _loop = function _loop(i) {
              // let myPromise = new Promise(function(myResolve, myReject) {
              var qstnIndex = _this6.interventionArray.filter(function (key) {
                return key.domain_id == data[i].domain_id;
              }); // myPromise.then(
              //   function(value) {
              // var qstnIndex : any = value
              // set form values for yearly leaves


              setTimeout(function () {
                _this6.assessmentList.push({
                  domain_id: data[i].domain_id,
                  domain: data[i].domain_name,
                  subdomain_id: data[i].subdomain_id,
                  sub_domain: data[i].sub_domain
                }); // debugger


                _this6.groupByQstn(qstnIndex);

                _this6.optnArray = [];
                _this6.assessmentList[i].questionList = [];

                var _loop2 = function _loop2() {
                  var question = _this6.qstnArray[i][j];
                  var optnIndex = qstnIndex.filter(function (key) {
                    return key.domain_id == question.domain_id && key.skills == question.skills && key.sub_skills == question.sub_skills;
                  }); // setTimeout(() => {

                  _this6.assessmentList[i].questionList.push({
                    intervention_type_id: question.intervention_type_id,
                    intervention_type: question.intervention_type,
                    intervension: question.intervension,
                    intervension_tamil: question.intervension_tamil,
                    skills: question.skills,
                    sub_skills: question.sub_skills
                  });

                  _this6.assessmentList[i].questionList[j].optionList = [];

                  for (var k = 0; k < optnIndex.length; k++) {
                    var option = optnIndex[k];
                    var newObj = {
                      index_id: option.index_id,
                      intervension_idx_id: option.intervension_idx_id,
                      intervention_type_id: option.intervention_type_id,
                      intervention_type: option.intervention_type,
                      intervension: question.intervension,
                      intervension_tamil: question.intervension_tamil,
                      goal: option.goal,
                      goal_tamil: option.goal_tamil,
                      rate_val: option.rate_val,
                      goal_val: option.goal_val,
                      inter_status: option.inter_status,
                      domain_id: data[i].domain_id,
                      domain: data[i].domain_name,
                      skills: question.skills,
                      sub_skills: question.sub_skills
                    };

                    _this6.assessmentList[i].questionList[j].optionList.push((0, _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(newObj));

                    _this6.interventionReport.push((0, _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_11__.cloneDeep)(newObj));
                  }
                };

                for (var j = 0; j < _this6.qstnArray[i].length; j++) {
                  _loop2();
                }
              });
            };

            for (var i = 0; i < data.length; i++) {
              _loop(i);
            }
          }
        }, {
          key: "insertStudInterDataLocal",
          value: function insertStudInterDataLocal(submitArray, status) {
            var _this7 = this;

            var delQuery = 'DELETE FROM stud_int_assessment' + ' WHERE user_id = "' + this.user_id + '"' + ' AND stud_id = "' + this.studId + '"';
            this.sqliteDB.executeQuery(delQuery).then(function (res) {
              var sqlArray = [];
              submitArray.forEach(function (element) {
                sqlArray.push(['INSERT INTO stud_int_assessment (Id,index_id,user_id,schl_id,stud_id,domain_id,domain_name,subdomain_id,intervension_idx_id,intervention_type_id,rate_val,goal_val,support,date,inter_status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, element.id, element.user_id, element.school_id, element.student_id, element.domain_id, element.domain_name, element.subdomain_id, element.intervension_idx_id, element.evaluation_type, parseInt(element.rating), element.goal, element.support_in, _this7.pipe.transform(new Date(), "yyyy-MM-dd"), 2]]);
              });

              _this7.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
                // this.insertStudDomainlocal();
                if (status == 3) {
                  _this7.checklocalDB();
                } // this.router.navigate(['/tabs/ca-student-list'], { queryParams: { item: JSON.stringify(item), 'zonleId': this.ZonalId, title: this.title, mode: this.mode } });

              }); // }

            });
          }
        }, {
          key: "insertInterventionData",
          value: function insertInterventionData(list) {
            var _this8 = this;

            var sqlArray = [];
            list.forEach(function (element) {
              // element.screen = 0;
              sqlArray.push(['INSERT INTO intervention_qstns VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [null, _this8.user_id, element.user, _this8.studId, _this8.allStudentData.Name, '', '', element.subdomain_idx_id, element.sub_domain, element.id, element.intervention_type_id, element.intervention_type, element.intervension, element.intervension_tamil, element.skills, element.sub_skills, element.goal, element.goal_tamil, element.inter_status, element.age_category]]);
            });
            this.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {
              _this8.checkAssementLocal();
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/ca-student-list'], {
              queryParams: {
                item: JSON.stringify(this.allStudentData),
                title: this.title,
                mode: this.mode
              }
            }); // this.router.navigate(["/tabs/ca-domain-list"], { queryParams: { title: this.title, mode: this.mode } });
          }
        }, {
          key: "downloadAsPDF",
          value: function downloadAsPDF(id) {
            // this.cwsnService.generatePdf(id); 
            this.content = document.getElementById(id).innerHTML;
            var options = {
              documentSize: 'A4',
              type: 'share',
              // landscape: 'portrait',
              fileName: 'cwsn_intervetsion_' + this.studName + '.pdf'
            };
            this.pdfGenerator.fromData(this.content, options).then(function (base64) {
              console.log('OK', base64);
            })["catch"](function (error) {
              console.log('error', error);
            });
            var data = {
              "records": {
                "student_id": this.studId
              }
            };
            console.log('attendance data', data);
            this.cwsnService.pdfDownloadLog(data).subscribe(function (res) {
              if (res.dataStatus) {}
            });
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this9 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      cssClass: 'cwsn-eval-custom-class',
                      message: "\n      <div><img src=\"../../../../assets/icons/cwsn/check_mark.png\" alt=\"g-maps\"> </div>\n      <div class=\"alert-message\"><p>Congratulations</p> </div>\n      <div class=\"alert-subhead\"><p>" + this.user_name + "</p> </div>\n        <div class=\"alert-content\">\n          <div class=\"title\">Evaluated Successfully.</div>\n          <div class=\"stars\">\n            <span>\u2605</span>\n            <span>\u2605</span>\n            <span>\u2605</span>\n            <span>\u2605</span>\n            <span>\u2605</span>\n          </div>\n        </div>",
                      buttons: [{
                        text: 'Close',
                        cssClass: 'alert-button-cancel',
                        handler: function handler(data) {
                          _this9.router.navigate(['/tabs/ca-student-list'], {
                            queryParams: {
                              item: JSON.stringify(_this9.allStudentData),
                              title: _this9.title,
                              mode: _this9.mode
                            }
                          });
                        }
                      }]
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
        }]);
      }();

      _CaInterventionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_4__.CWSNService
        }, {
          type: _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_2__.PDFGenerator
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_7__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService
        }];
      };

      _CaInterventionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-ca-intervention',
        template: _raw_loader_ca_intervention_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ca_intervention_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CaInterventionPage);
      /***/
    },

    /***/
    71987:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/cwsn-phase2/ca-intervention/ca-intervention.page.scss ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .back {\n  background-color: #E6DDEB;\n  padding-top: 5px;\n  padding-bottom: 50px;\n}\n\nion-segment {\n  border: 1px solid white;\n  border-radius: 40px;\n  background-color: white;\n}\n\n.bredcrumb {\n  border: 2px solid #8B67B3;\n  border-radius: 40px;\n  padding: 10px;\n  margin: 20px;\n}\n\n.size {\n  font-size: 12px;\n  text-transform: lowercase;\n}\n\nion-breadcrumbs {\n  color: #8B67B3;\n  font-weight: 900;\n}\n\n.card-align {\n  border-radius: 10px;\n}\n\nion-toolbar {\n  --background: var(--primary-color);\n}\n\nion-card {\n  background: var(--seconday-color-change);\n}\n\n.radio {\n  font-size: 12px;\n  color: var(--primary-text-color);\n  font-family: none;\n}\n\n.card-align {\n  min-height: 100%;\n}\n\n.card-align .cards .cluster-design {\n  background-color: var(--seconday-color-change);\n  border-radius: 15px;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 25px;\n  background-color: #FF79B7;\n  border-radius: 10px;\n}\n\n.card-align .cards .cluster-design .cluster-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards .cluster-design .skill-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 25px;\n  background-color: #8B66B3;\n  border-radius: 10px;\n  margin: 7px;\n}\n\n.card-align .cards .cluster-design .skill-text span {\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  text-align: end;\n  padding: 3px;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 20px;\n  color: var(--seconday-color-change);\n}\n\n.card-align .cards ion-card:nth-child(1) {\n  margin-top: 0;\n}\n\n.card-align .cards ion-card:last-child {\n  margin-bottom: 0;\n}\n\n.card-align .cards .card-design {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nion-label .schoolnames {\n  font-size: 10px;\n}\n\n.label {\n  color: white;\n}\n\n.align {\n  text-align: center;\n}\n\n.box {\n  border: 1px #b9b8b8;\n  border-radius: 2px;\n  display: flex;\n  padding: 0px 7px;\n  margin: 0px 2px;\n}\n\n.box:host {\n  --background: var(--ion-background-color, #532044);\n}\n\n.text {\n  font-size: 16px;\n  color: var(--primary-text-color);\n  font-weight: bold;\n  font-family: none;\n}\n\n.card-align .cards .card-design {\n  margin-right: 9px;\n  margin-left: 9px;\n  border-radius: 10px;\n  padding: 10px 10px;\n  background-color: var(--seconday-color-change);\n  border: 1px solid #ffffff;\n}\n\n.card-align .cards .card-design .card-text {\n  display: flex;\n  flex-direction: column;\n}\n\n.card-align .cards .card-design .card-text .totalCountLabel {\n  font-size: 1rem;\n}\n\n.card-align .cards .card-design .card-text .schoolnames {\n  font-size: 0.9rem;\n  letter-spacing: 0.3px;\n  font-weight: bold;\n  color: var(--primary-text-color);\n}\n\n.card-align .cards .card-design .image-outer {\n  width: 35px;\n  height: 100%;\n}\n\n.card-align .cards .card-design .image-outer .img {\n  width: 100%;\n  height: 100%;\n}\n\n.card-align .cards .card-design:nth-child(1) {\n  margin-top: 0;\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n}\n\n.btn {\n  text-align: center;\n  border-radius: 10px;\n}\n\n.btn-style {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n}\n\n.download {\n  color: white;\n  color: white;\n  align-self: center;\n  width: 40%;\n  margin-top: 10%;\n  height: 40px !important;\n  text-transform: capitalize;\n  border: 2px #8B66B3;\n  background-color: white !important;\n  font-size: smaller;\n}\n\n.head {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\nion-col p {\n  margin-left: 10px;\n}\n\nh5 {\n  color: green;\n  font-weight: bold;\n}\n\n.popcard {\n  padding: 20px;\n  border-radius: 50px;\n}\n\nion-backdrop {\n  background-color: transparent !important;\n}\n\n.checkbox {\n  --checkmark-color: white;\n  text-align: center;\n}\n\n.align-middle-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n  padding: 10px;\n  width: 50px;\n}\n\nion-item {\n  --background: transparent !important;\n  color: var(--text-color-black);\n}\n\n.support-item-class {\n  background: #F0F0F0 !important;\n  color: var(--text-color-black);\n  margin: 10px !important;\n  border-radius: 15px;\n  max-width: 100%;\n}\n\n.radio-icon {\n  border-color: var(--icon-color) !important;\n}\n\n.radio-inner {\n  background: var(--icon-color) !important;\n}\n\n.stars {\n  flex: 0 0 50%;\n}\n\n.star__label {\n  flex: 0 0 50%;\n  margin: 0;\n}\n\n.star__rating__info {\n  flex: 100%;\n  min-height: 30px;\n}\n\n.star {\n  cursor: pointer;\n  width: 24px;\n  height: auto;\n  fill: white;\n  stroke: #888888;\n  transform: scale(0.8);\n  transition: transform 200ms ease-in-out;\n}\n\n.star path {\n  transition: fill 200ms ease-in-out, stroke 100ms ease-in-out;\n}\n\n.active {\n  fill: #917AFE;\n  stroke: #6747fe;\n}\n\n.select-icon {\n  color: #8B66B3 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhLWludGVydmVudGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSx3Q0FBQTtBQUNKOztBQWlCQTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBZEo7O0FBaUJBO0VBRUksZ0JBQUE7QUFmSjs7QUFrQlE7RUFDSSw4Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtBQWhCWjs7QUFrQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQWhCaEI7O0FBa0JnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0FBaEJwQjs7QUFvQlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFsQmhCOztBQW9CZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQWxCcEI7O0FBc0JZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtFQUNBLGlCQUFBO0FBdEJoQjs7QUF3QmdCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUF0QnBCOztBQTJCUTtFQUNJLGFBQUE7QUF6Qlo7O0FBNEJRO0VBQ0ksZ0JBQUE7QUExQlo7O0FBK0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUE1Qko7O0FBc0NBO0VBQ0ksZUFBQTtBQW5DSjs7QUFzQ0E7RUFDSSxZQUFBO0FBbkNKOztBQXNDQTtFQUNJLGtCQUFBO0FBbkNKOztBQXNDQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbkNKOztBQXNDQTtFQUNJLGtEQUFBO0FBbkNKOztBQXNDQTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFuQ0o7O0FBMENRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0FBdkNaOztBQTBDWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQXhDaEI7O0FBMENnQjtFQUNJLGVBQUE7QUF4Q3BCOztBQTJDZ0I7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQ0FBQTtBQTFDcEI7O0FBOENZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUE1Q2hCOztBQThDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQTVDcEI7O0FBaURRO0VBQ0ksYUFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUEvQ1o7O0FBcURBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQWxESjs7QUFzREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBbkRKOztBQXNEQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFuREo7O0FBc0RBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQW5ESjs7QUFzREE7RUFDSSxpQkFBQTtBQW5ESjs7QUFzREE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFuREo7O0FBc0RBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBbkRKOztBQXNEQTtFQUNJLHdDQUFBO0FBbkRKOztBQXNEQTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7QUFuREo7O0FBc0RBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFuREo7O0FBc0RBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBbkRKOztBQXNEQTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7QUFuREo7O0FBc0RBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBbkRKOztBQXNEQTtFQUNJLDBDQUFBO0FBbkRKOztBQXNEQTtFQUNJLHdDQUFBO0FBbkRKOztBQXNEQTtFQUNJLGFBQUE7QUFuREo7O0FBc0RBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QUFuREo7O0FBc0RBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBbkRKOztBQXNEQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7RUFDQSx1Q0FBQTtBQXJESjs7QUF1REk7RUFDSSw0REFBQTtBQXJEUjs7QUF5REE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQXRESjs7QUF5REE7RUFDSSx5QkFBQTtBQXRESiIsImZpbGUiOiJjYS1pbnRlcnZlbnRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgLmJhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5icmVkY3J1bWIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzhCNjdCMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG59XHJcblxyXG5pb24tYnJlYWRjcnVtYnMge1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4lY2FyZC1sYXlvdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxufVxyXG5cclxuJXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyJSAwJSAyJSA1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZDI7XHJcbn1cclxuXHJcbiVyYWRpby1ncm91cC1idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ucmFkaW8ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtYWxpZ24ge1xyXG4gICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC5jYXJkcyB7XHJcbiAgICAgICAgLmNsdXN0ZXItZGVzaWduIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAuY2x1c3Rlci10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzlCNztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5za2lsbC10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjZCMztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDdweDtcclxuXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb24tb3V0ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaWNvbi1pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1jYXJkOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiViYXNlLWxheW91dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuJWNsYXNzLXNlY3Rpb24tY2FyZC1vdXRlci1kZXNpZ24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjOEI2NkIzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCAuc2Nob29sbmFtZXMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggcmdiKDE4NSwgMTg0LCAxODQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDBweCA3cHg7XHJcbiAgICBtYXJnaW46IDBweCAycHg7XHJcbn1cclxuXHJcbi5ib3g6aG9zdCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjNTMyMDQ0KTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1hbGlnbiB7XHJcbiAgICBAZXh0ZW5kICVjYXJkLWxheW91dDtcclxuXHJcbiAgICAuY2FyZHMge1xyXG4gICAgICAgIC5jYXJkLWRlc2lnbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWJhc2UtbGF5b3V0O1xyXG5cclxuICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAudG90YWxDb3VudExhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNjaG9vbG5hbWVzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Utb3V0ZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1kZXNpZ246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLmJ0bi1zdHlsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmRvd25sb2FkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgYm9yZGVyOiAycHggIzhCNjZCMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXJcclxufVxyXG5cclxuLmhlYWQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1jb2wgcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuaDUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wb3BjYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5pb24tYmFja2Ryb3Age1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduLW1pZGRsZS1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLWJsYWNrKTtcclxufVxyXG5cclxuLnN1cHBvcnQtaXRlbS1jbGFzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEYwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1ibGFjayk7XHJcbiAgICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yYWRpby1pY29uIHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taWNvbi1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJhZGlvLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGFycyB7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG59XHJcblxyXG4uc3Rhcl9fbGFiZWwge1xyXG4gICAgZmxleDogMCAwIDUwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN0YXJfX3JhdGluZ19faW5mbyB7XHJcbiAgICBmbGV4OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgZmlsbDogd2hpdGU7XHJcbiAgICBzdHJva2U6ICM4ODg4ODg7XHJcblxyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIHBhdGgge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHN0cm9rZSAxMDBtcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBmaWxsOiAjOTE3QUZFO1xyXG4gICAgc3Ryb2tlOiBkYXJrZW4oIzkxN0FGRSwgMTAlKTtcclxufVxyXG5cclxuLnNlbGVjdC1pY29uIHtcclxuICAgIGNvbG9yIDogIzhCNjZCMyAhaW1wb3J0YW50O1xyXG59Il19 */";
      /***/
    },

    /***/
    59588:
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn-phase2/ca-intervention/ca-intervention.page.html ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">{{studName}}</ion-title>\r\n    <ion-buttons slot=\"end\" class=\"pt-10\">\r\n      <img *ngIf=\"language == 'Tamil'\" src=\"./../../../../../../assets/icons/cwsn/English.svg\">\r\n      <img *ngIf=\"language == 'English'\" src=\"./../../../../../../assets/icons/cwsn/Tamil.svg\">\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"back\">\r\n\r\n    <div class=\"card-align ion-card-margin\">\r\n\r\n      <div class=\"cards\">\r\n        <ng-container *ngFor=\"let item of assessmentList; let i = index;\">\r\n          <!-- {{item.value | json}} -->\r\n          <ion-card class=\"cluster-design ion-card-margin-top-bottom\">\r\n\r\n            <div class=\"cluster-text\" (click)=\"headerAccord(i)\">\r\n              <span>{{item.domain}}</span>\r\n              <div class=\"icon-outer\">\r\n                <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"indexVal != i\"></ion-icon>\r\n                <!-- <ion-icon class=\"icon-inner\" *ngIf=\"indexVal == i\" name=\"remove-outline\"></ion-icon> -->\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"indexVal == i\">\r\n              <div *ngFor=\"let questionItem of item.questionList; let j=index\"\r\n                style=\"color: var(--seconday-color-change)\">\r\n                <div class=\"skill-text\" (click)=\"skillheaderAccord(i,j)\">\r\n                  <span *ngIf=\"questionItem.skills != '' && questionItem.skills != 0\">{{questionItem.skills}}</span>\r\n\r\n                  <span\r\n                    *ngIf=\"(questionItem.skills == '' || questionItem.skills == 0) && questionItem.sub_skills != '' && questionItem.sub_skills != 0\">{{questionItem.sub_skills}}</span>\r\n\r\n                  <div class=\"icon-outer\">\r\n                    <ion-icon class=\"icon-inner\" name=\"add-outline\" *ngIf=\"skillIndexVal != i.j\"></ion-icon>\r\n                    <!-- <ion-icon class=\"icon-inner\" *ngIf=\"skillIndexVal == i.j\" name=\"remove-outline\"></ion-icon> -->\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  <div *ngIf=\"skillIndexVal == i.j\">\r\n                    <ion-item lines=\"none\" class=\"item-style radio_group\" style=\"padding-left: 0px\"\r\n                      *ngFor=\"let optionItem of questionItem.optionList; let k=index\">\r\n                      <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          <div class=\"card-text\" style=\"border-bottom:1px solid #B6B6B6;\">\r\n                            <ion-label class=\"text\">Skill </ion-label>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"12\">\r\n                          <div class=\"card-text\">\r\n                            <ion-label style=\"font-family: none; font-size: 12px;\">\r\n                              {{optionItem.goal}}\r\n                            </ion-label>\r\n                          </div>\r\n                        </ion-col>\r\n\r\n                        <ion-col size=\"12\">\r\n                          <div class=\"card-text\">\r\n                            <ion-label class=\"text\" style=\"border-bottom:1px solid #B6B6B6;\">intervention </ion-label>\r\n                          </div>\r\n                          <div class=\"card-text\">\r\n                            <ion-label style=\"font-family: none; font-size: 12px;\">\r\n                              {{optionItem.intervension}} {{optionItem.intervension_tamil}}\r\n                            </ion-label>\r\n                          </div>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-item>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </ion-card>\r\n\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div hidden>\r\n        <div id=\"pdfTable\">\r\n          <div style=\"text-align: center;padding-top: 5px;\">\r\n            <h5 style=\"margin: 5px;text-align:right\">{{timeStamp | date: 'dd/MM/yyyy'}}</h5>\r\n            <h3 style=\"margin: 0;margin-bottom: 10px;\">Nalam Naadi App</h3>\r\n            <h3 style=\"margin: 0;margin-bottom: 10px;\">\r\n              {{userType1 == 2 ? 'Individualised Education Plan (IEP 2025-2026)':\r\n            (userType1 == 3 ? 'Individualised Therapeutic Plan(ITP 2025-2026)':'')}}\r\n            </h3>\r\n          </div>\r\n          <h5 style=\"margin: 0 5px;\">School Name: {{studentData?.SchlNme}}</h5>\r\n          <h5 style=\"margin: 0 5px;\">Student Name: {{studentData?.Name}}({{studentData?.EMIS_No}})</h5>\r\n          <h5 style=\"margin: 0 5px;\">Class: {{studentData?.Class}},{{studentData?.Section}}</h5>\r\n          <table\r\n            style=\"margin-top: 10px; border: 1px solid black; border-collapse: collapse;padding:3px; width: 100% !important;\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">S.No</th>\r\n                <th style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">Domain Name</th>\r\n                <th style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">Skill</th>\r\n                <th style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">Goal</th>\r\n                <th style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">Intervention</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let zItem of interventionReport; let z=index\">\r\n                <td style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">{{z + 1}}</td>\r\n                <td style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">{{zItem.domain}}</td>\r\n                <td style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">\r\n                  {{zItem.skills && zItem.skills!=0?zItem.skills:'-'}}</td>\r\n                <td style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">\r\n                  {{zItem.goal}} {{zItem.goal_tamil}}\r\n                </td>\r\n                <td style=\"border: 1px solid black; border-collapse: collapse;padding:5px\">\r\n                  {{zItem.intervension}} {{zItem.intervension_tamil}}\r\n                </td>\r\n              </tr> \r\n            </tbody>\r\n          </table>\r\n          <div style=\"padding-bottom: 30px;display: flex;justify-content: space-between;margin-top: 30px;\">\r\n            <h5 style=\"margin: 0 5px;text-align: right;margin-left: 10px;\">\r\n              Evaluated by : {{user_name}}({{user_id}})\r\n            </h5>\r\n            <h5 style=\"margin: 0 5px;text-align: right;margin-right: 10px;\">Parent Signature</h5>\r\n            <!-- <h5 style=\"margin: 0 5px;\">ஆசிரியர் கையொப்பம்</h5> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ion-row *ngIf=\"assessmentList?.length != 0\">\r\n        <ion-col size=\"12\" class=\"btn\">\r\n          <ion-button size=\"default\" class=\"btn-style\" fill=\"outline\" style=\"color: var(--primary-color);\"\r\n            (click)=\"downloadAsPDF('pdfTable')\">Download PDF</ion-button>\r\n          <ion-button size=\"default\" class=\"btn-style\" (click)=\"presentAlert()\">Next</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div *ngIf=\"assessmentList.length == 0\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"no-data\">\r\n          <ion-label>\r\n            No intervension Found\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn-phase2_ca-intervention_ca-intervention_module_ts-es5.js.map