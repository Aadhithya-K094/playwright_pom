(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-report_summative-report_module_ts"], {
    /***/
    26910:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report-routing.module.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeReportPageRoutingModule": function SummativeReportPageRoutingModule() {
          return (
            /* binding */
            _SummativeReportPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _summative_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-report.page */
      38422);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);

      var routes = [{
        path: '',
        component: _summative_report_page__WEBPACK_IMPORTED_MODULE_0__.SummativeReportPage
      }];

      var _SummativeReportPageRoutingModule = /*#__PURE__*/_createClass(function SummativeReportPageRoutingModule() {
        _classCallCheck(this, SummativeReportPageRoutingModule);
      });

      _SummativeReportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
        providers: [_awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__.File, _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener]
      })], _SummativeReportPageRoutingModule);
      /***/
    },

    /***/
    51767:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.module.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeReportPageModule": function SummativeReportPageModule() {
          return (
            /* binding */
            _SummativeReportPageModule
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


      var _summative_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-report-routing.module */
      26910);
      /* harmony import */


      var _summative_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-report.page */
      38422);

      var _SummativeReportPageModule = /*#__PURE__*/_createClass(function SummativeReportPageModule() {
        _classCallCheck(this, SummativeReportPageModule);
      });

      _SummativeReportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _summative_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeReportPageRoutingModule],
        declarations: [_summative_report_page__WEBPACK_IMPORTED_MODULE_1__.SummativeReportPage]
      })], _SummativeReportPageModule);
      /***/
    },

    /***/
    38422:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.page.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeReportPage": function SummativeReportPage() {
          return (
            /* binding */
            _SummativeReportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_summative_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./summative-report.page.html */
      45527);
      /* harmony import */


      var _summative_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-report.page.scss */
      10169);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api.service */
      43054);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/loader/ion-loader.service */
      21645);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! dom-to-image */
      83697);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jspdf */
      31769);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var chart_js_auto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! chart.js/auto */
      6625);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484); // import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
      // import { File, IWriteOptions } from '@ionic-native/file/ngx';


      var _SummativeReportPage = /*#__PURE__*/function () {
        function SummativeReportPage(apiService, ionicstorage, router, alertService, route, ionLoaderService, uploadService, http, file, fileOpener, renderer) {
          _classCallCheck(this, SummativeReportPage);

          this.apiService = apiService;
          this.ionicstorage = ionicstorage;
          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.ionLoaderService = ionLoaderService;
          this.uploadService = uploadService;
          this.http = http;
          this.file = file;
          this.fileOpener = fileOpener;
          this.renderer = renderer;
          this.labels = ['A', 'B', 'C', 'D', 'E', 'G'];
          this.dataSet1 = [86, 114, 10, 106, 107, 111];
          this.dataSet2 = [40, 220, 15, 16, 24, 212];
          this.montharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          this.termData = [];
          this.studentList = [];
          this.classchart = false;
          this.levelwise = false;
          this.conttent = [];
          this.arraypdf = [];
          this.showReportCard = false;
          this.slectedObject = {
            headername: '',
            reportcard: '',
            term: '',
            studentname: '',
            "class": '',
            emis: '',
            attend: '',
            part1: '',
            subject: '',
            level: '',
            total: '',
            grade: '',
            tamil: '',
            eng: '',
            maths: '',
            grad: '',
            per: '',
            part2: '',
            area: '',
            point: '',
            gra: '',
            skills: '',
            attitude: '',
            wellness: '',
            curricuilar: '',
            remark: '',
            sign: '',
            hsign: ''
          };
          this.Englishobject = {
            headername: 'PUPS ULUNDAI',
            reportcard: 'Report Card',
            term: 'Term',
            studentname: 'Name of student',
            "class": 'Class & Section',
            emis: 'EMIS ID',
            attend: 'Attendance',
            part1: 'Part - I  Scholastic Area',
            subject: 'Subjects',
            level: 'Level',
            total: 'Total (100)',
            grade: 'Grade',
            tamil: 'Tamil',
            eng: 'English',
            maths: 'Maths',
            grad: 'Overall Grade',
            per: 'Percentage(%)',
            part2: 'Part - II  Co-Scholastic Area',
            area: 'Area',
            point: 'Grade Point',
            gra: 'Grade',
            skills: 'Life Skills',
            attitude: 'Attitude and Values',
            wellness: 'Wellness & Holistic Experience',
            curricuilar: 'Co-Curricuilar activities',
            remark: 'General Remarks',
            sign: 'Teacher Sign',
            hsign: 'Headmaster Sign'
          };
          this.Tamilobject = {
            headername: 'PUMS  செம்பாக்கம்',
            reportcard: 'மாணவர் தரநிலை அறிக்கை',
            term: 'பருவம்',
            studentname: 'மாணவர் பெயர்',
            "class": 'வகுப்பு & பிரிவு',
            emis: 'EMIS எண்',
            attend: 'வருகை',
            part1: 'பகுதி - I   - கல்விச் செயல்பாடு',
            subject: 'பாடங்கள்',
            level: 'நிலை',
            total: 'மொத்தம் (100)',
            grade: 'தரநிலை',
            tamil: 'தமிழ்',
            eng: 'ஆங்கிலம்',
            maths: 'கணக்கு',
            grad: 'ஒட்டுமொத்த தரநிலை',
            per: 'விழுக்காடு (%)',
            part2: 'பகுதி - 2 கல்வி இணைச் செயல்பாடு',
            area: 'பகுதிகள்',
            point: 'தரநிலை ப்புள்ளி',
            gra: 'தரநிலை',
            skills: 'வாழ்வியல் திறன்கள்',
            attitude: 'மனப்பான்மைகளும் மதிப்புகளும்',
            wellness: 'நன்னலம் & உடற்பயிற்சி',
            curricuilar: 'பாட இணைச் செயல்பாடுகள் (கலை, கைவினை)',
            remark: 'பொதுவான குறிப்புகள்',
            sign: 'வகுப்பாசிரியர் கையொப்பம்',
            hsign: 'தலைமையாசிரியர் கையொப்பம்'
          };
        }

        return _createClass(SummativeReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.ionicstorage.getData('userInfo').then(function (dataa) {
              _this.username = dataa.username; // this.schoolid = dataa.school_id;

              _this.schoolid = '32421';
              _this.token = dataa.token;
              _this.schoolName = dataa.school_name;
              var date = new Date();
              var obj = {
                "academic_year": _this.apiService.getacadamic_yearid(),
                "month_year": ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear(),
                "assessment_type": 4,
                "school_id": _this.schoolid
              };

              _this.apiService.getformationterms(obj, _this.token).subscribe(function (val) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                  var _this2 = this;

                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        this.obj = {};
                        _context.n = 1;
                        return val['records'].filter(function (val) {
                          if (val.assessment_type == 4) {
                            val.term = "term " + val.term;
                            _this2.obj[val.term] = _this2.obj[val.term] || {};
                            var changedatedynamic = new Date(val.start_date);
                            var getcurrentmonth = changedatedynamic.getMonth();

                            var getWeekNumOfMonthOfDate = function getWeekNumOfMonthOfDate(d) {
                              var firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
                              return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
                            };

                            var weekNumOfDate = getWeekNumOfMonthOfDate(new Date());
                            _this2.obj[val.term][getcurrentmonth] = _this2.obj[val.term][getcurrentmonth] || {};
                            _this2.obj[val.term][getcurrentmonth][val.week_of_month] = _this2.obj[val.term][getcurrentmonth][val.week_of_month] || [];

                            if (val.week_of_month > weekNumOfDate) {
                              val.view_status_week = true;
                            } else {
                              val.view_status_week = false;
                            }

                            _this2.obj[val.term][getcurrentmonth][val.week_of_month].push(val);
                          }
                        });

                      case 1:
                        return _context.a(2);
                    }
                  }, _callee, this);
                }));
              });
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('userInfo').then(function (dataa) {
              _this.assessment_type = _this.apiService.getdataassessed_typeid();

              _this.ionLoaderService.simpleLoader();

              _this.username = dataa.username; // this.schoolid = dataa.school_id;

              _this.schoolid = '32421';
              _this.token = dataa.token;
              var date = new Date();
              var acadamicyear = date.getFullYear() + " - " + (date.getFullYear() + 1);
              setTimeout(function () {
                _this.ionLoaderService.dismissLoader();
              }, 1000);

              _this.apiService.getClassRoomDetailsAll({
                username: _this.username,
                school_id: _this.schoolid,
                acadamicname: acadamicyear
              }, dataa.token).subscribe(function (data) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                  var _this3 = this;

                  var getsavedclass, getformate;
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        if (data['records'].academic_year_details.length > 0) {
                          this.apiService.setacadamic_yearid(data['records'].academic_year_details[0].id);
                        }

                        getsavedclass = JSON.parse(data['records'].saved_details[0]["class"]);
                        getformate = getsavedclass.map(function (a) {
                          var getfrommasterclass = _this3.apiService.classes.find(function (n) {
                            return n["class"] == a["class"];
                          });

                          return {
                            "class": getfrommasterclass["class"],
                            section: a.section.map(function (t) {
                              return t.name;
                            }).join()
                          };
                        });
                        this.sectionbasedcountlist = data['records'].sections_based_student_count;

                        if (!(data['status'] == 200 && data['dataStatus'] == true)) {
                          _context2.n = 2;
                          break;
                        }

                        _context2.n = 1;
                        return this.getFormativeAssessment(data['records'].saved_details, this.apiService.classes, this.apiService.subjects, 0);

                      case 1:
                        this.formativeassessmentdata = _context2.v;
                        _context2.n = 3;
                        break;

                      case 2:
                        this.alertService.error(data['msg']);

                      case 3:
                        return _context2.a(2);
                    }
                  }, _callee2, this);
                }));
              });
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "getFormativeAssessment",
          value: function getFormativeAssessment(apivalue, classes, subjects, countlist) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this4 = this;

              var filteredarray, apiclass, apisubject, apicalsstype;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    filteredarray = [];

                    if (!(apivalue == null || apivalue == 0 || typeof apivalue == 'string')) {
                      _context4.n = 1;
                      break;
                    }

                    return _context4.a(2, filteredarray);

                  case 1:
                    if (!(apivalue.length > 0)) {
                      _context4.n = 5;
                      break;
                    }

                    if (!(this.isJson(apivalue[0]["class"]) == true && this.isJson(apivalue[0].subject) == true)) {
                      _context4.n = 4;
                      break;
                    }

                    apiclass = JSON.parse(apivalue[0]["class"]);
                    apisubject = JSON.parse(apivalue[0].subject);
                    apicalsstype = apivalue[0].class_type;
                    _context4.n = 2;
                    return apiclass.filter(function (s) {
                      var findcalss = classes.find(function (n) {
                        return n["class"] == s["class"];
                      });
                      findcalss.section.find(function (n) {
                        s.section.filter(function (val) {
                          if (val.name == n.name) {
                            return n.isSelected = true;
                          }
                        });
                      });
                      var newva = findcalss.section.filter(function (s) {
                        return s.isSelected == true;
                      });
                      apisubject.filter(function (v) {
                        var findsubject = subjects.find(function (l) {
                          return l.id == v;
                        });
                        var obj = {
                          id: findcalss.id,
                          classid: findcalss["class"],
                          name: findcalss.class_id,
                          subject: findsubject.subject,
                          subject_id: findsubject.id,
                          class_type: apicalsstype,
                          color: findcalss.class_id.replace(" ", ""),
                          studentcount: findcalss.students,
                          assessedcount: 0,
                          section: newva.map(function (s) {
                            return s.name;
                          }).join()
                        };

                        if (obj.section != '') {
                          obj.studentcount = 0;
                        } else {
                          obj.studentcount = obj.studentcount;
                        }

                        filteredarray.push(obj);
                      });
                    });

                  case 2:
                    if (!(countlist.length > 0)) {
                      _context4.n = 3;
                      break;
                    }

                    _context4.n = 3;
                    return filteredarray.filter(function (t) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                        return _regenerator().w(function (_context3) {
                          while (1) switch (_context3.n) {
                            case 0:
                              if (t.section != '') {
                                t.assessedcount = 0;
                              } else {
                                t.assessedcount = 0;
                              }

                            case 1:
                              return _context3.a(2);
                          }
                        }, _callee3);
                      }));
                    });

                  case 3:
                    return _context4.a(2, filteredarray);

                  case 4:
                    return _context4.a(2, filteredarray);

                  case 5:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "isJson",
          value: function isJson(str) {
            try {
              JSON.parse(str);
            } catch (e) {
              return false;
            }

            return true;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "createBarChart",
          value: function createBarChart() {
            this.chartInstance = new chart_js_auto__WEBPACK_IMPORTED_MODULE_10__["default"]('chartJSContainer', {
              type: 'bar',
              data: {
                labels: ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5', 'Module 6', 'Module 7', 'Module 8'],
                datasets: [{
                  label: 'LO1',
                  data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                  backgroundColor: '#ddee44',
                  borderColor: '#ddee44',
                  borderWidth: 1
                }, {
                  label: 'LO2',
                  data: [1.5, 2.8, 4, 4.9, 3.9, 4.5, 7, 12],
                  backgroundColor: '#dd1144',
                  borderColor: '#dd1144',
                  borderWidth: 1
                }]
              },
              options: {
                indexAxis: 'y',
                scales: {
                  x: {
                    stacked: false // Make it true to make the overlapping bars visible

                  },
                  y: {
                    stacked: false
                  }
                }
              }
            });
          }
        }, {
          key: "selectChart",
          value: function selectChart(data) {
            if (data.target.value == 'Class') {
              this.chartType = data.target.value;
              this.chartData = this.formativeassessmentdata;
              this.showReportCard = false;
            } else if (data.target.value == 'Level') {
              this.chartType = data.target.value;
              var keys = ['name'];
              var filtered = this.formativeassessmentdata.filter(function (s) {
                return function (o) {
                  return function (k) {
                    return !s.has(k) && s.add(k);
                  }(keys.map(function (k) {
                    return o[k];
                  }).join('|'));
                };
              }(new Set()));
              this.chartData = filtered;
            }
          }
        }, {
          key: "termSelection",
          value: function termSelection(data) {
            if (data.target.value) {
              this.term = data.target.value;
            }
          }
        }, {
          key: "Onnextnavigate",
          value: function Onnextnavigate(value) {
            var _this5 = this;

            if (this.chartType == 'Class') {
              this.showReportCard = false;
              this.slectedClass = value;
              this.ionicstorage.getData('userInfo').then(function (dataa) {
                _this5.token = dataa.token;
                var obj = {
                  "class": value['classid'],
                  "school_id": _this5.schoolid,
                  "term": _this5.term.match(/(\d+)/)[0]
                };

                _this5.apiService.getStudentreport(obj, _this5.token).subscribe(function (val) {
                  _this5.studentList = [];

                  if (val['dataStatus'] == true && val['status'] == 200) {
                    _this5.newa = val;
                    _this5.term_selected = _this5.term.match(/(\d+)/)[0];
                    Object.keys(_this5.newa['result']).forEach(function (key) {
                      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

                      if (((_e = (_d = (_c = (_b = (_a = _this5.newa) === null || _a === void 0 ? void 0 : _a['result']) === null || _b === void 0 ? void 0 : _b[key]) === null || _c === void 0 ? void 0 : _c['scores']) === null || _d === void 0 ? void 0 : _d[_this5.term_selected]) === null || _e === void 0 ? void 0 : _e['FA(A)']) == undefined || _this5.newa['result'][key]['scores'][_this5.term_selected]['FA(A)'] == undefined) {
                        _this5.newa['result'][key]['fora'] = '';
                        _this5.newa['result'][key]['forab'] = '';
                        _this5.newa['result'][key]['foraa'] = '';
                      } else {
                        if (_this5.newa['result'][key]['scores'][_this5.term_selected]['FA(A)'][value.subject_id] == '' || _this5.newa['result'][key]['scores'][_this5.term_selected]['FA(A)'][value.subject_id] == undefined) {
                          _this5.newa['result'][key]['fora'] = '';
                          _this5.newa['result'][key]['forab'] = '';
                          _this5.newa['result'][key]['foraa'] = '';
                        } else {
                          _this5.newa['result'][key]['fora'] = Number(_this5.newa['result'][key]['scores'][_this5.term_selected]['FA(A)'][value.subject_id]['per']);

                          if (_this5.newa['result'][key]['scores'][_this5.term_selected]['FA(A)'][value.subject_id]['pers'] == undefined) {
                            _this5.newa['result'][key]['forab'] = '';
                            _this5.newa['result'][key]['foraa'] = '';
                          } else {
                            var spli = _this5.newa['result'][key]['scores'][_this5.term_selected]['FA(A)'][value.subject_id]['pers'].split(',');

                            _this5.newa['result'][key]['forab'] = Number(spli[0]);
                            _this5.newa['result'][key]['foraa'] = Number(spli[1]);
                          }
                        }
                      }

                      if (((_k = (_j = (_h = (_g = (_f = _this5.newa) === null || _f === void 0 ? void 0 : _f['result']) === null || _g === void 0 ? void 0 : _g[key]) === null || _h === void 0 ? void 0 : _h['scores']) === null || _j === void 0 ? void 0 : _j[_this5.term_selected]) === null || _k === void 0 ? void 0 : _k['FA(B)']) == undefined || _this5.newa['result'][key]['scores'][_this5.term_selected]['FA(B)'] == undefined) {
                        _this5.newa['result'][key]['forb'] = '';
                        _this5.newa['result'][key]['forba'] = '';
                        _this5.newa['result'][key]['forbb'] = '';
                      } else {
                        if (_this5.newa['result'][key]['scores'][_this5.term_selected]['FA(B)'][value.subject_id] == '' || _this5.newa['result'][key]['scores'][_this5.term_selected]['FA(B)'][value.subject_id] == undefined) {
                          _this5.newa['result'][key]['forb'] = '';
                          _this5.newa['result'][key]['forba'] = '';
                          _this5.newa['result'][key]['forbb'] = '';
                        } else {
                          _this5.newa['result'][key]['forb'] = Number(_this5.newa['result'][key]['scores'][_this5.term_selected]['FA(B)'][value.subject_id]['per']);

                          if (_this5.newa['result'][key]['scores'][_this5.term_selected]['FA(B)'][value.subject_id]['pers'] == undefined) {
                            _this5.newa['result'][key]['forba'] = '';
                            _this5.newa['result'][key]['forbb'] = '';
                          } else {
                            var _spli = _this5.newa['result'][key]['scores'][_this5.term_selected]['FA(B)'][value.subject_id]['pers'].split(',');

                            _this5.newa['result'][key]['forba'] = Number(_spli[0]);
                            _this5.newa['result'][key]['forbb'] = Number(_spli[1]);
                          }
                        }
                      }

                      if (((_q = (_p = (_o = (_m = (_l = _this5.newa) === null || _l === void 0 ? void 0 : _l['result']) === null || _m === void 0 ? void 0 : _m[key]) === null || _o === void 0 ? void 0 : _o['scores']) === null || _p === void 0 ? void 0 : _p[_this5.term_selected]) === null || _q === void 0 ? void 0 : _q['SA']) == undefined || _this5.newa['result'][key]['scores'][_this5.term_selected]['SA'] == undefined) {
                        _this5.newa['result'][key]['suma'] = '';
                      } else {
                        if (_this5.newa['result'][key]['scores'][_this5.term_selected]['SA'][value.subject_id] == '' || _this5.newa['result'][key]['scores'][_this5.term_selected]['SA'][value.subject_id] == undefined) {
                          _this5.newa['result'][key]['suma'] = '';
                        } else {
                          _this5.newa['result'][key]['suma'] = Number(_this5.newa['result'][key]['scores'][_this5.term_selected]['SA'][value.subject_id]['per']);
                        }
                      }

                      _this5.studentList.push(_this5.newa['result'][key]);
                    });
                    _this5.studentList = _this5.studentOrder(_this5.studentList);

                    _this5.generatePdf(value);
                  } else {
                    _this5.studentList = [];
                  }
                });
              });
            } else if (this.chartType == 'Level') {
              this.showReportCard = true;
              var obj = {
                "class": value['classid'],
                "school_id": this.schoolid,
                "term": this.term.match(/(\d+)/)[0]
              };
              this.apiService.getStudentreport(obj, this.token).subscribe(function (val) {
                _this5.studentList = [];

                if (val['dataStatus'] == true && val['status'] == 200) {
                  Object.keys(val['result']).forEach(function (key) {
                    _this5.studentList.push(val['result'][key]);
                  });
                  _this5.studentList = _this5.studentOrder(_this5.studentList);
                } else {
                  _this5.studentList = [];
                }
              });
            }
          }
        }, {
          key: "studentOrder",
          value: function studentOrder(data) {
            var female = data.filter(function (v) {
              return v.gender == '2';
            });
            var ts = female.sort(function (a, b) {
              var fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

              if (fa < fb) {
                return -1;
              }

              if (fa > fb) {
                return 1;
              }

              return 0;
            });
            var male = data.filter(function (v) {
              return v.gender == '1';
            });
            male.sort(function (a, b) {
              var fa = a.name.toLowerCase(),
                  fb = b.name.toLowerCase();

              if (fa < fb) {
                return -1;
              }

              if (fa > fb) {
                return 1;
              }

              return 0;
            });
            var newll = female.concat(male);
            return newll;
          }
        }, {
          key: "generatePdf",
          value: function generatePdf(classdata) {
            var _this6 = this;

            this.conttent = [];

            if (this.chartType == 'Class') {
              this.classchart = true;
            } else if (this.chartType == 'Level') {
              this.levelwise = true;
              setTimeout(function () {
                _this6.createBarChart();
              }, 500);
            }

            this.ionLoaderService.simpleLoader();
            setTimeout(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
                var _this7 = this;

                var pdfEle, chardatas, splitdata, options;
                return _regenerator().w(function (_context9) {
                  while (1) switch (_context9.n) {
                    case 0:
                      this.arraypdf = [];

                      if (this.chartType == 'Class') {
                        pdfEle = document.getElementById("classchart");
                        chardatas = document.getElementById("chard");
                        splitdata = pdfEle.innerHTML.split('<tr');

                        while (splitdata.length > 0) this.arraypdf.push(splitdata.splice(0, 33));

                        this.arraypdf.map(function (val, arin) {
                          var newval = val.map(function (s, index) {
                            if (index >= 1) {
                              s = '<tr' + s;
                              return s;
                            } else if (index == 0) {
                              if (arin == 0) {
                                s = s;
                              } else {
                                s = '<table border="1"><tr><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">S.No</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;width: 20px;">Name of theStudent</th><th colspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(A)Activity<br>(Marks Out of 10)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(A)<br>(Total 20)</th><th colspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(B)Activity<br>(Marks Out of 10)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA(B)<br>(Total 20)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">FA TOTAL<br>(OUT OF40)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">SA TOTAL<br>(OUT OF60)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">TOTAL MARKS<br>(OUTOF 100)</th><th rowspan="2" style="padding: 5px;background: #9c9c9c;color: black;border: 0px !important;">TOTAL GRADES</th></tr><tr><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">I</td><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">II</td><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">I</td><td style="border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;">II</td></tr><tr ' + s;
                              }

                              return s;
                            }

                            ;
                          });
                          var alstd = newval[newval.length - 1];

                          if (alstd.includes("</table>") == false) {
                            newval[newval.length - 1] = alstd + '</table>';
                          }

                          var allheight = 200;

                          if (newval.length <= 15) {
                            allheight = 800;
                          }

                          pdfEle.innerHTML = newval.join('');
                          var splittable = pdfEle.innerHTML.split('<table');
                          var newarr = splittable.map(function (v) {
                            if (v != "") {
                              return '<div style="width: 100%;text-align:center;padding-bottom: 30px;"><div style="border-top: 1px solid black;height: 20px;background: #9c9c9c;width:1100px;padding:5px"><div class="c" style="float:left;background: #9c9c9c;color:black;font-weight:600;">STUDENT SCHOLASTIC REPORTS</div><div class="c" style="float:right;background: #9c9c9c;color:black">Academic Year: 2022-2023</div></div><div style="border-bottom: 1px solid black;height: 20px;width:1110px;background: #9c9c9c;"><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">TERM :</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">' + _this7.term.match(/(\d+)/)[0] + '</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">CLASS :</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">' + classdata.classid + '</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">SECTION :</div><div class="c" style="float:left;width: 12%;border: 1px solid black;color: black;text-align: center;">' + classdata.section + '</div><div class="c" style="float:left;width: 13%;border: 1px solid black;color: black;text-align: center;">SUBJECT :</div>  <div class="c" style="float:left;width: 13%;border: 1px solid black;color: black;text-align: center;">' + classdata.subject + '</div> </div> </div><table' + v;
                            }
                          });
                          var removundefined = newarr.filter(function (t) {
                            return t != undefined;
                          });
                          _this7.conttent.length = 0;
                          removundefined.forEach(function (t) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
                              var _this8 = this;

                              var stringToHTML, options;
                              return _regenerator().w(function (_context6) {
                                while (1) switch (_context6.n) {
                                  case 0:
                                    stringToHTML = function stringToHTML(str) {
                                      var dom = document.createElement('div');
                                      dom.innerHTML = str;
                                      return dom;
                                    };

                                    options = {
                                      background: "white",
                                      height: pdfEle.clientHeight + allheight,
                                      width: 1300,
                                      quality: 0.10
                                    };
                                    _context6.n = 1;
                                    return dom_to_image__WEBPACK_IMPORTED_MODULE_7___default().toPng(stringToHTML(t), options).then(function (filePath) {
                                      return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
                                        return _regenerator().w(function (_context5) {
                                          while (1) switch (_context5.n) {
                                            case 0:
                                              this.conttent.push(filePath);

                                            case 1:
                                              return _context5.a(2);
                                          }
                                        }, _callee5, this);
                                      }));
                                    });

                                  case 1:
                                    return _context6.a(2);
                                }
                              }, _callee6);
                            }));
                          });
                        });
                        options = {
                          background: "white",
                          height: pdfEle.clientHeight + 200,
                          width: 1300
                        };
                      } else if (this.chartType == 'Level') {
                        pdfEle = document.getElementById("levelwiseboolean");
                        options = {
                          background: "white",
                          height: pdfEle.clientHeight + 1500,
                          width: 1000
                        };
                      }

                      setTimeout(function () {
                        dom_to_image__WEBPACK_IMPORTED_MODULE_7___default().toPng(pdfEle, options).then(function (filePath) {
                          var jsPdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_8__["default"]("p", "mm", "a4");
                          var width = jsPdfDoc.internal.pageSize.getWidth();
                          var height = jsPdfDoc.internal.pageSize.getHeight();

                          if (_this7.conttent.length > 0) {
                            _this7.conttent.push(_this7.conttent.shift());
                          }

                          _this7.conttent.forEach(function (n) {
                            jsPdfDoc.addPage(n);
                            jsPdfDoc.addImage(n, 'PNG', 12, 12, width, height);
                          });

                          _this7.conttent = [];
                          jsPdfDoc.deletePage(1);
                          var docRes = jsPdfDoc.output();
                          var arrayBuffer = new ArrayBuffer(docRes.length);
                          var uintArray = new Uint8Array(arrayBuffer); // pdfEle.innerHTML=this.copypdfEle;

                          if (_this7.chartType == 'Class') {
                            _this7.classchart = false;
                          } else if (_this7.chartType == 'Level') {
                            _this7.levelwise = false;

                            _this7.chartInstance.destroy();
                          }

                          for (var i = 0; i < docRes.length; i++) {
                            uintArray[i] = docRes.charCodeAt(i);
                          }

                          var directory = _this7.file.dataDirectory;
                          var pdfFile = "Student.pdf"; // let iWriteOptions: IWriteOptions = {
                          //   replace: true
                          // };

                          _this7.file.checkFile(directory, pdfFile).then(function (res) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
                              var _this9 = this;

                              return _regenerator().w(function (_context8) {
                                while (1) switch (_context8.n) {
                                  case 0:
                                    // this.ionLoaderService.dismissLoader();
                                    this.file.writeFile(directory, pdfFile, arrayBuffer, {
                                      replace: true
                                    }).then(function (res) {
                                      return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
                                        return _regenerator().w(function (_context7) {
                                          while (1) switch (_context7.n) {
                                            case 0:
                                              this.conttent = [];
                                              this.ionLoaderService.dismissLoader();
                                              this.fileOpener.open(this.file.dataDirectory + pdfFile, 'application/pdf').then(function () {
                                                return console.log('File is exported');
                                              })["catch"](function (e) {
                                                return console.log(e);
                                              });

                                            case 1:
                                              return _context7.a(2);
                                          }
                                        }, _callee7, this);
                                      }));
                                    })["catch"](function (error) {
                                      console.log(JSON.stringify(error));
                                    });

                                  case 1:
                                    return _context8.a(2);
                                }
                              }, _callee8, this);
                            }));
                          })["catch"](function (error) {
                            _this7.file.writeFile(directory, pdfFile, arrayBuffer, {
                              replace: true
                            }).then(function (res) {
                              _this7.ionLoaderService.dismissLoader();

                              _this7.fileOpener.open(_this7.file.dataDirectory + pdfFile, 'application/pdf').then(function () {
                                return console.log('File exported');
                              })["catch"](function (e) {
                                return console.log(e);
                              });
                            })["catch"](function (error) {
                              console.log(JSON.stringify(error));
                            });
                          });
                        })["catch"](function (error) {
                          console.error(error);
                        });
                      }, 500);

                    case 1:
                      return _context9.a(2);
                  }
                }, _callee9, this);
              }));
            }, 1000);
          }
        }, {
          key: "generatePdfLevelWise",
          value: function generatePdfLevelWise(value, lang) {
            var _this0 = this;

            if (lang == 'English') {
              this.slectedObject = this.Englishobject;
              this.classtype = 'classtype2';
            } else {
              this.slectedObject = this.Tamilobject;
              this.classtype = 'classtype';
            }

            this.apiService.getStudentsinglereport({
              "student_id": value.student_id,
              "term": this.term.match(/(\d+)/)[0]
            }, this.token).subscribe(function (val) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j;

              if (val['dataStatus'] == true && val['status'] == 200) {
                _this0.singlStudent = val['result'];
                _this0.term_selected = _this0.term.match(/(\d+)/)[0];
                console.log(_this0.singlStudent); // this.singlStudent.baseline_group={3: 'Arumbu', 46: 'Arumbu', 48: 'Arumbu'}

                if (_this0.singlStudent['baseline_group'] == undefined || _this0.singlStudent['baseline_group'][3] == undefined) {
                  _this0.singlStudent['mathsgroup'] = '';
                } else {
                  _this0.singlStudent['mathsgroup'] = _this0.singlStudent['baseline_group'][3];
                }

                if (_this0.singlStudent['baseline_group'] == undefined || _this0.singlStudent['baseline_group'][46] == undefined) {
                  _this0.singlStudent['englishgroup'] = '';
                } else {
                  _this0.singlStudent['englishgroup'] = _this0.singlStudent['baseline_group'][46];
                }

                if (_this0.singlStudent['baseline_group'] == undefined || _this0.singlStudent['baseline_group'][48] == undefined) {
                  _this0.singlStudent['tamilgroup'] = '';
                } else {
                  _this0.singlStudent['tamilgroup'] = _this0.singlStudent['baseline_group'][48];
                } //   console.log(this.singlStudent?.['scores']?.[this.term_selected]?.['FA(A)'])


                if (((_c = (_b = (_a = _this0.singlStudent) === null || _a === void 0 ? void 0 : _a['scores']) === null || _b === void 0 ? void 0 : _b[_this0.term_selected]) === null || _c === void 0 ? void 0 : _c['FA(A)']) == undefined || _this0.singlStudent['scores'][_this0.term_selected]['FA(A)'] == undefined) {
                  _this0.singlStudent['foramaths'] = '';
                  _this0.singlStudent['foraenglish'] = '';
                  _this0.singlStudent['foratamil'] = '';
                } else {
                  //maths
                  if (_this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][3] == '' || _this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][3] == undefined) {
                    _this0.singlStudent['foramaths'] = '';
                  } else {
                    _this0.singlStudent['foramaths'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][3]['per']);
                  } //english


                  if (_this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][46] == '' || _this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][46] == undefined) {
                    _this0.singlStudent['foraenglish'] = '';
                  } else {
                    _this0.singlStudent['foraenglish'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][46]['per']);
                  } //tamil


                  if (_this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][48] == '' || _this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][48] == undefined) {
                    _this0.singlStudent['foratamil'] = '';
                  } else {
                    _this0.singlStudent['foratamil'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['FA(A)'][48]['per']);
                  }
                }

                if (((_f = (_e = (_d = _this0.singlStudent) === null || _d === void 0 ? void 0 : _d['scores']) === null || _e === void 0 ? void 0 : _e[_this0.term_selected]) === null || _f === void 0 ? void 0 : _f['FA(B)']) == undefined || _this0.singlStudent['scores'][_this0.term_selected]['FA(B)'] == undefined) {
                  _this0.singlStudent['forbmaths'] = '';
                  _this0.singlStudent['forbenglish'] = '';
                  _this0.singlStudent['forbtamil'] = '';
                } else {
                  if (_this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][3] == '' || _this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][3] == undefined) {
                    _this0.singlStudent['forbmaths'] = '';
                  } else {
                    _this0.singlStudent['forbmaths'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][3]['per']);
                  } //english


                  if (_this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][46] == '' || _this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][46] == undefined) {
                    _this0.singlStudent['forbenglish'] = '';
                  } else {
                    _this0.singlStudent['forbenglish'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][46]['per']);
                  } //tamil


                  if (_this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][48] == '' || _this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][48] == undefined) {
                    _this0.singlStudent['forbtamil'] = '';
                  } else {
                    _this0.singlStudent['forbtamil'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['FA(B)'][48]['per']);
                  }
                }

                if (((_j = (_h = (_g = _this0.singlStudent) === null || _g === void 0 ? void 0 : _g['scores']) === null || _h === void 0 ? void 0 : _h[_this0.term_selected]) === null || _j === void 0 ? void 0 : _j['SA']) == undefined || _this0.singlStudent['scores'][_this0.term_selected]['SA'] == undefined) {
                  _this0.singlStudent['sumamaths'] = '';
                  _this0.singlStudent['sumaenglish'] = '';
                  _this0.singlStudent['sumatamil'] = '';
                } else {
                  if (_this0.singlStudent['scores'][_this0.term_selected]['SA'][3] == '' || _this0.singlStudent['scores'][_this0.term_selected]['SA'][3] == undefined) {
                    _this0.singlStudent['sumamaths'] = '';
                  } else {
                    _this0.singlStudent['sumamaths'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['SA'][3]['per']);
                  } //english


                  if (_this0.singlStudent['scores'][_this0.term_selected]['SA'][46] == '' || _this0.singlStudent['scores'][_this0.term_selected]['SA'][46] == undefined) {
                    _this0.singlStudent['sumaenglish'] = '';
                  } else {
                    _this0.singlStudent['sumaenglish'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['SA'][46]['per']);
                  } //tamil


                  if (_this0.singlStudent['scores'][_this0.term_selected]['SA'][48] == '' || _this0.singlStudent['scores'][_this0.term_selected]['SA'][48] == undefined) {
                    _this0.singlStudent['sumatamil'] = '';
                  } else {
                    _this0.singlStudent['sumatamil'] = Number(_this0.singlStudent['scores'][_this0.term_selected]['SA'][48]['per']);
                  }
                }

                _this0.levelwise = true;
                setTimeout(function () {
                  _this0.createBarChart();
                }, 500);

                _this0.ionLoaderService.simpleLoader();

                setTimeout(function () {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this0, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
                    var _this1 = this;

                    var elem, elem1, pdfEle, options;
                    return _regenerator().w(function (_context0) {
                      while (1) switch (_context0.n) {
                        case 0:
                          elem = document.getElementById('myDiv');
                          elem1 = document.getElementById('myDivs');

                          if (elem1.clientHeight > elem.clientHeight) {
                            document.getElementById('myDivs').style.fontSize = '10px';
                          }

                          pdfEle = document.getElementById("levelwiseboolean");
                          options = {
                            background: "white",
                            height: pdfEle.clientHeight + 50,
                            width: 750
                          };
                          dom_to_image__WEBPACK_IMPORTED_MODULE_7___default().toPng(pdfEle, options).then(function (filePath) {
                            var jsPdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_8__["default"]("p", "mm", "a4");
                            var width = jsPdfDoc.internal.pageSize.getWidth();
                            var height = jsPdfDoc.internal.pageSize.getHeight();
                            jsPdfDoc.addImage(filePath, 'PNG', 12, 12, width, height);
                            var docRes = jsPdfDoc.output();
                            var arrayBuffer = new ArrayBuffer(docRes.length);
                            var uintArray = new Uint8Array(arrayBuffer); // pdfEle.innerHTML=this.copypdfEle;

                            _this1.levelwise = false;

                            _this1.chartInstance.destroy();

                            for (var i = 0; i < docRes.length; i++) {
                              uintArray[i] = docRes.charCodeAt(i);
                            }

                            var directory = _this1.file.dataDirectory;
                            var pdfFile = "Student.pdf";

                            _this1.file.checkFile(directory, pdfFile).then(function (res) {
                              _this1.file.writeFile(directory, pdfFile, arrayBuffer, {
                                replace: true
                              }).then(function (res) {
                                _this1.ionLoaderService.dismissLoader();

                                _this1.fileOpener.open(_this1.file.dataDirectory + pdfFile, 'application/pdf').then(function () {
                                  return console.log('File is exported');
                                })["catch"](function (e) {
                                  return console.log(e);
                                });
                              })["catch"](function (error) {
                                console.log(JSON.stringify(error));
                              });
                            })["catch"](function (error) {
                              _this1.file.writeFile(directory, pdfFile, arrayBuffer, {
                                replace: true
                              }).then(function (res) {
                                _this1.ionLoaderService.dismissLoader();

                                _this1.fileOpener.open(_this1.file.dataDirectory + pdfFile, 'application/pdf').then(function () {
                                  return console.log('File exported');
                                })["catch"](function (e) {
                                  return console.log(e);
                                });
                              })["catch"](function (error) {
                                console.log(JSON.stringify(error));
                              });
                            });
                          })["catch"](function (error) {
                            console.error(error);
                          });

                        case 1:
                          return _context0.a(2);
                      }
                    }, _callee0);
                  }));
                }, 1000);
              } else {}
            });
          }
        }, {
          key: "addingAandB",
          value: function addingAandB(a, b) {
            if (!a && !b) {
              return '';
            } else if (a && !b) {
              return a;
            } else if (!a && b) {
              return b;
            } else if (a && b) {
              return a + b;
            }
          }
        }]);
      }();

      _SummativeReportPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
        }, {
          type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__.IonLoaderService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__.FileOpener
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Renderer2
        }];
      };

      _SummativeReportPage.propDecorators = {
        myDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
          args: ['myDiv']
        }]
      };
      _SummativeReportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-summative-report',
        template: _raw_loader_summative_report_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_summative_report_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SummativeReportPage);
      /***/
    },

    /***/
    10169:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.page.scss ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-family: \"Ubuntu\" !important;\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.content {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n}\n\n.note {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  margin: auto;\n}\n\n.note-assess {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  padding: 3px;\n  margin: 15px auto;\n  text-align: center;\n}\n\n.heading {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n  background: #f2c94c;\n  text-align: center;\n  padding: 10px;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 24px;\n}\n\n.select-learning-outcome {\n  border: 1px solid black;\n  border-radius: 5px;\n  background: rgba(200, 190, 190, 0.42);\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 21px;\n  padding: 5px;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n}\n\n.select-learning-outcome-option {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: block;\n}\n\n.student-assess-box {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.assess-img-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  height: 5px;\n  border: 1px solid #C4C4C4;\n  box-sizing: border-box;\n  border-radius: 20px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n\n.assess-img {\n  width: 30px;\n  margin-right: -3px;\n}\n\n.search-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  padding: 0 10px;\n  background: rgba(196, 196, 196, 0.13);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-box-input {\n  width: 90%;\n  margin: 2px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\nul {\n  list-style: none;\n  display: table;\n}\n\nli {\n  display: table-row;\n}\n\nb {\n  display: table-cell;\n}\n\n.footer {\n  text-align: center;\n  font-family: \"Ubuntu\" !important;\n  color: black;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n}\n\nth {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 800;\n  text-align: center;\n  font-size: 18px;\n  border: 1px solid black;\n  padding: 10px;\n}\n\ntd {\n  text-align: center;\n  border: 1px solid black;\n  padding: 10px;\n}\n\n.nopadding {\n  padding: 0px !important;\n}\n\n.name {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n}\n\n.assess-status-red {\n  font-family: \"Ubuntu\" !important;\n  color: #F01313;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-green {\n  font-family: \"Ubuntu\" !important;\n  color: green;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-yellow {\n  font-family: \"Ubuntu\" !important;\n  color: orange;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-lightblue {\n  font-family: \"Ubuntu\" !important;\n  color: #3b45d4;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\nion-card {\n  padding: 10px;\n}\n\n.center-align-flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\nion-title {\n  font-size: 15px;\n}\n\nion-header {\n  background: #27AE60;\n}\n\nion-toolbar {\n  --background: #2176b9;\n  color: white;\n}\n\n.primarytext {\n  color: #2F5387 !important;\n}\n\n.primarylight {\n  background-color: #0FBCDD !important;\n  color: white !important;\n  vertical-align: middle;\n}\n\nth {\n  background-color: #0FBCDD !important;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n}\n\ntd {\n  text-align: center;\n  padding: 5px 10px !important;\n}\n\n.eg {\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\n.contentbody {\n  padding-left: 50px;\n  padding-right: 50px;\n  width: 150mm;\n  text-align: center;\n  margin: 0 auto;\n  padding-top: 7%;\n}\n\n.wapper {\n  text-align: center;\n  margin: 0 auto;\n  width: 175mm;\n  height: 955px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url('bg-02-01.jpg');\n}\n\n.innerwapper {\n  padding-top: 50px;\n}\n\n.tamilnadulogo {\n  float: left;\n}\n\n.ennum {\n  float: right;\n}\n\n.sublinetext {\n  font-size: 0.5rem;\n}\n\n.borderb {\n  border-bottom: 1px solid #CECECE;\n}\n\n.classtype {\n  font-size: 11px;\n  padding: 4px;\n}\n\n.classtype2 {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFHSjs7QUFERTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUhFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFIRTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQU1OOztBQUhFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUhFO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTU47O0FBSEU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFNSjs7QUFIRTtFQUNFLGtCQUFBO0FBTUo7O0FBSEU7RUFDRSxtQkFBQTtBQU1KOztBQUhFO0VBRUksa0JBQUE7RUFDQSxnQ0FBQTtFQUVBLFlBQUE7QUFJTjs7QUFDRTtFQUVFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUVDLGFBQUE7QUFETDs7QUFJRTtFQUNFLHVCQUFBO0FBREo7O0FBY0U7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWEo7O0FBY0U7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWFFO0VBQ0UsZ0NBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWTjs7QUFZRTtFQUNFLGdDQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBVE47O0FBV0U7RUFDRSxnQ0FBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVJOOztBQWVFO0VBQ0UsYUFBQTtBQVpKOztBQWVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBWko7O0FBY0U7RUFDRSxlQUFBO0FBWEo7O0FBYUU7RUFDRSxtQkFBQTtBQVZKOztBQWFFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FBVko7O0FBY0U7RUFDRSx5QkFBQTtBQVhKOztBQWFBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBVko7O0FBWUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBVEo7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLDRCQUFBO0FBUko7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFOSjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0MsY0FBQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBR0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7QUFQSjs7QUFTQTtFQUNJLGlCQUFBO0FBTko7O0FBUUE7RUFBZSxXQUFBO0FBSmY7O0FBS0E7RUFBTyxZQUFBO0FBRFA7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0NBQUE7QUFFSjs7QUFDQTtFQUNFLGVBQUE7RUFDQyxZQUFBO0FBRUg7O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoic3VtbWF0aXZlLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLm5vdGUtYXNzZXNze1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGluZyB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJjOTRjO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbiAgLnNlbGVjdC1sZWFybmluZy1vdXRjb21le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwMCwgMTkwLCAxOTAsIDAuNDIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zZWxlY3QtbGVhcm5pbmctb3V0Y29tZS1vcHRpb257XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zdHVkZW50LWFzc2Vzcy1ib3h7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5hc3Nlc3MtaW1nLWJveHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzRDNEM0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIH1cclxuICAuYXNzZXNzLWltZ3tcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTNweDtcclxuXHJcbiAgfVxyXG4gIC5zZWFyY2gtYm94e1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMTMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWJveC1pbnB1dHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIFxyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICB9XHJcbiAgXHJcbiAgYiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIH1cclxuICAuZm9vdGVye1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICM0NUIzNTY7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgLy8gZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgLy8gZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAvLyBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcbiAgdGFibGV7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgXHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICAvLyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgfVxyXG4gIHRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAvLyBib3JkZXItd2lkdGg6IDVweDtcclxuICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLy8gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB9XHJcbiAgLm5vcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuLy8gICB0YWJsZSB7XHJcbi8vICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7ICAgXHJcbi8vIH1cclxuLy8gICB0aCx0ZCB7XHJcbi8vICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4vLyAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbi8vICAgICBib3JkZXItY29sb3I6ICNCQ0JDQkM7XHJcbi8vICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbi8vIH1cclxuXHJcbiAgLm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcblxyXG4gIC5hc3Nlc3Mtc3RhdHVzLXJlZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGMDEzMTM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWdyZWVue1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLmFzc2Vzcy1zdGF0dXMteWVsbG93e1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWxpZ2h0Ymx1ZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogcmdiKDU5LCA2OSwgMjEyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbi8vICAgaW9uLWNvbnRlbnR7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2VubnVtLWV6aHV0aHVtL3NjcmVlbi1iYWNrLnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdFxyXG4vLyAgIH1cclxuXHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6ICMyN0FFNjA7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzIxNzZiOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG5cclxuICAucHJpbWFyeXRleHR7XHJcbiAgICBjb2xvcjojMkY1Mzg3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByaW1hcnlsaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkJDREQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIH1cclxudGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZCQ0REICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IWltcG9ydGFudDtcclxufVxyXG4uZWd7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuLmNvbnRlbnRib2R5IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxNTBtbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDclO1xyXG59XHJcbi53YXBwZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxNzVtbTtcclxuICAgIGhlaWdodDogOTU1cHg7XHJcbiAgICAvLyB3aWR0aDogMTAlO1xyXG4gICAgLy8gaGVpZ2h0OiAxNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZW5udW0tZXpodXRodW0vYmctMDItMDEuanBnJyk7XHJcbn1cclxuLmlubmVyd2FwcGVye1xyXG4gICAgcGFkZGluZy10b3A6NTBweDtcclxufVxyXG4udGFtaWxuYWR1bG9nb3tmbG9hdDogbGVmdDt9XHJcbi5lbm51bXtmbG9hdDpyaWdodDt9XHJcbi5zdWJsaW5ldGV4dHtcclxuICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbn1cclxuLmJvcmRlcmJ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NFQ0VDRTtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5jbGFzc3R5cGV7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gICBwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5jbGFzc3R5cGUye1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICAvLyBwYWRkaW5nOiAzcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    45527:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-report/summative-report.page.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/menu\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Summative Report</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-select placeholder=\"Select Term\" (ionChange)=\"termSelection($event)\">\r\n        <ion-select-option *ngFor=\"let term of obj | keyvalue\" [value]=\"term.key\">{{term.key | titlecase}}</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-select [disabled]=\"!term\" placeholder=\"Select Chart\" (ionChange)=\"selectChart($event)\">\r\n        <ion-select-option value=\"Class\">CCE REPORTS</ion-select-option>\r\n        <ion-select-option value=\"Level\">STUDENT REPORT CARD</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-list>\r\n\r\n\r\n\r\n  <ion-card style=\"    box-shadow: none;\">\r\n    <ion-list *ngIf=\"chartType == 'Class'\">\r\n      <div *ngFor=\"let val of chartData\">\r\n        <ion-button class=\"Class{{val.classid}}\"\r\n          style=\"margin: 15px auto;border-radius: 15px;border:1px solid #353fa1;overflow:hidden; display: flex;\"\r\n          expand=\"full\" (click)=\"Onnextnavigate(val)\">\r\n          <div style=\"width:100%;display: flex;justify-content: space-around;align-items: center;\">\r\n\r\n            <div>{{val.name}} - {{val.subject}}</div>\r\n            <div slot=\"end\"></div>\r\n\r\n          </div>\r\n        </ion-button>\r\n      </div>\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"chartType == 'Level' && !showReportCard\">\r\n      <div *ngFor=\"let val of chartData\">\r\n          <ion-button class=\"Class{{val.classid}}\" style=\"margin: 15px auto;border-radius: 15px;border:1px solid #353fa1;overflow:hidden; display: flex;\" expand=\"full\" (click)=\"Onnextnavigate(val)\">\r\n            <div style=\"width:100%;display: flex;justify-content: space-around;align-items: center;\">\r\n              \r\n              <div >{{val.name}}</div>\r\n              <div slot=\"end\"></div>\r\n              \r\n            </div>\r\n          </ion-button>\r\n        </div>\r\n    </ion-list>\r\n  </ion-card>\r\n<div *ngIf=\"showReportCard\">\r\n  <ion-button style=\"margin: 15px auto;border-radius: 15px;width: 15%;\r\n  margin-left: 17px;\" expand=\"full\" (click)=\"showReportCard=false\">Back</ion-button>\r\n  <table >\r\n    <tr>\r\n      <th>NAMES</th>\r\n      <th>STATUS</th>\r\n      <!-- <th>GROUP</th> -->\r\n    </tr>\r\n    <tr *ngFor=\"let item of studentList\">\r\n      <td class=\"name\">\r\n        {{item.name}}   ({{item.student_id}})\r\n      </td>\r\n      <td >\r\n        <ion-button style=\"margin: 15px auto;border-radius: 15px;\r\n        margin-left: 17px;\" expand=\"full\" (click)=\"generatePdfLevelWise(item,'English')\">Pdf English</ion-button>\r\n        <ion-button style=\"margin: 15px auto;border-radius: 15px;\r\n        margin-left: 17px;\" expand=\"full\" (click)=\"generatePdfLevelWise(item,'Tamil')\">Pdf Tamil</ion-button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n  <div *ngIf=\"classchart\" style=\"padding-top:100%\">\r\n    <div id=\"classchart\">\r\n  \r\n\r\n\r\n      <table border=\"1\">\r\n\r\n        <tr>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">S.No</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;width: 20px;\">Name of the\r\n            Student</th>\r\n          <th colspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(A)\r\n            Activity<br>(Marks Out of 10)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(A)<br>(Total 20)\r\n          </th>\r\n          <th colspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(B)\r\n            Activity<br>(Marks Out of 10)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA(B)<br>(Total 20)\r\n          </th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">FA TOTAL<br>(OUT OF\r\n            40)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">SA TOTAL<br>(OUT OF\r\n            60)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">TOTAL MARKS<br>(OUT\r\n            OF 100)</th>\r\n          <th rowspan=\"2\" style=\"padding: 5px;background: #9c9c9c;color: black;border: 0px !important;\">TOTAL GRADES\r\n          </th>\r\n\r\n        </tr>\r\n        <tr>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">I</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">II</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">I</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">II</td>\r\n        </tr>\r\n        <tr *ngFor=\"let data of studentList;let i = index\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{data.name}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forab}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.foraa}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.fora}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forba}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forbb}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.forb}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{addingAandB(data.fora,data.forb)}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\">{{data.suma}}</td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\"></td>\r\n          <td style=\"border-left: 3px solid grey;border-right: 3px solid grey;text-align: center;\"></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div id=\"chard\">\r\n\r\n  </div>\r\n\r\n  <ion-card-content *ngIf=\"levelwise\"  style=\"padding-top:70%\">\r\n    <div id=\"levelwiseboolean\" style=\"text-align:center;padding-bottom: 10px; width: 175mm;\r\n    height: 955px;\">\r\n      <div class=\"wapper\" id=\"myDiv\" #myDiv style=\"padding-left: 25mm;padding-right: 25mm;\">\r\n        <ion-grid id=\"myDivs\" style=\"border: 0px solid black;width: 100%;padding-top: 40px;\">\r\n          <ion-row style=\"border: 0px solid black;\">\r\n            <ion-col size=\"3\">\r\n              <div><img width=\"60% !important\" src=\"../../../../../assets/images/ennum-ezhuthum/Tamilnadulogo.png\"></div>\r\n            </ion-col>\r\n            <ion-col style=\"text-align: center;\">\r\n              <h3 style=\"color: white;\">{{schoolName}}</h3>\r\n              <!-- <small>Sembakkam, Tambaram, Chengalpattu District</small> -->\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <div><img width=\"60% !important\" src=\"../../../../../assets/images/ennum-ezhuthum/ennumezhuthumlogo.png\"></div>\r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row>\r\n            <!-- <ion-col size=\"5\" style=\"top: 20px;\r\n            text-align: center;\">\r\n              <div><img width=\"50%\" src=\"../../../../../assets/images/ennum-ezhuthum/1.jpeg\"></div>\r\n            </ion-col> -->\r\n            <ion-col  style=\"text-align: center;\">\r\n              <h2 class=\"text-center text-dark pt-3 display-6 primarytext\">{{slectedObject.reportcard}}</h2>\r\n              <!-- <h4 class=\"text-center text-dark fs-6 primarytext\">&nbsp;</h4> -->\r\n              <h4 class=\"text-center text-dark fs-6 primarytext\">{{term}} (2022-2023)</h4>\r\n              <!-- <div style=\"display: table-row\"><b style=\"font-size: 13px;\">Name of student</b>: <span style=\"font-size: 13px;\">{{singlStudent.name}}</span></div>\r\n              <div style=\"display: table-row\"><b style=\"font-size: 13px;\">Class & Section</b>: <span style=\"font-size: 13px;\">{{singlStudent.class}} - {{singlStudent.section}}</span> </div>\r\n              <div style=\"display: table-row\"><b style=\"font-size: 13px;\">EMIS ID</b>: <span style=\"font-size: 13px;\">{{singlStudent.student_id}}</span> </div>\r\n              <div style=\"display: table-row\"><b style=\"font-size: 13px;\">Attendance</b>: <span style=\"font-size: 13px;\"></span></div> -->\r\n              <div  class=\"row\">\r\n                <div style=\"text-align: center;\" class=\"borderb\">\r\n                    <p style=\"  float: left;\r\n                    text-align: left;\r\n                    width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.studentname}}</p>\r\n                    <p style=\" text-align: right;\" [ngClass]=\"classtype\">{{singlStudent.name}}</p>\r\n                </div>\r\n                <div style=\"text-align: center;\" class=\"borderb\">\r\n                  <div style=\"float: left;\r\n                  text-align: left;\r\n                  width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.class}}</div>\r\n                  <div style=\" text-align: right;\" [ngClass]=\"classtype\">{{singlStudent.class}} - {{singlStudent.section}}</div>\r\n              </div>\r\n              <div style=\"text-align: center;\" class=\"borderb\">\r\n                <div style=\" float: left;\r\n                text-align: left;\r\n                width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.emis}}</div>\r\n                <div style=\" text-align: right;\" [ngClass]=\"classtype\">{{singlStudent.student_id}}</div>\r\n            </div>\r\n            <div style=\"text-align: center;\" class=\"borderb\">\r\n              <div style=\"float: left;\r\n              text-align: left;\r\n              width: 50%;\" [ngClass]=\"classtype\">{{slectedObject.attend}}</div>\r\n              <div style=\" text-align: right;\" [ngClass]=\"classtype\">&nbsp;</div>\r\n          </div>\r\n               </div> \r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row style=\"padding-top: 20px;\">\r\n            <ion-col>\r\n              <h5 class=\"primarytext\" style=\"text-align: left;\">{{slectedObject.part1}}</h5>\r\n              <table style=\" table-layout: fixed;\r\n              width: 100%;\" border=\"1\" >\r\n                <thead style=\"font-weight:bold;\r\n                text-align:center;\r\n                background: #0FBCDD;\r\n                color:white;\">\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.subject}} </td>\r\n                    <td class=\"nopadding\">{{slectedObject.level}} </td>\r\n                    <td class=\"nopadding\">FA (A)\r\n                      - Total\r\n                      (20) </td>\r\n                    <td class=\"nopadding\">FA (B)\r\n                      - Total\r\n                      (20)</td>\r\n                    <td class=\"nopadding\"> SA\r\n                      (60) </td>\r\n                    <td class=\"nopadding\">{{slectedObject.total}}</td>\r\n                    <td class=\"nopadding\">{{slectedObject.grade}}</td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n  \r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.tamil}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.tamilgroup}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.foratamil}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.forbtamil}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.sumatamil}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.eng}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.englishgroup}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.foraenglish}} </td>\r\n                    <td class=\"nopadding\"> {{singlStudent.forbenglish}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.sumaenglish}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.maths}}</td>\r\n                    <td class=\"nopadding\">{{singlStudent.mathsgroup}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.foramaths}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.forbmaths}}</td>\r\n                    <td class=\"nopadding\"> {{singlStudent.sumamaths}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <table style=\" table-layout: fixed;\r\n              width: 100%;\" border=\"1\" >\r\n                <tbody style=\"\r\n                text-align:center;\r\n               \r\n                color:white;\">\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\" style=\" background: #0FBCDD;\" >{{slectedObject.grad}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\" style=\" background: #0FBCDD;\" >{{slectedObject.per}}</td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n             \r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n           \r\n          <ion-col >\r\n            <h5 class=\"primarytext\" style=\"text-align: left;\">{{slectedObject.part2}}</h5>\r\n              <table style=\" table-layout: fixed;\r\n              width: 100%;\" border=\"1\">\r\n                <thead style=\"font-weight:bold;\r\n                text-align:center;\r\n                background: #0FBCDD;\r\n                color:white;\">\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.area}}\t\t\t </td>\r\n                    <td class=\"nopadding\">{{slectedObject.point}}\t</td>\r\n                    <td class=\"nopadding\">{{slectedObject.gra}}</td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n  \r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.skills}}\t\t\t </td>\r\n                    <td class=\"nopadding\">\t\t\t</td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.attitude}}\t\t\t </td>\r\n                    <td class=\"nopadding\">\t\t\t</td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.wellness}}\t\t </td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"> </td>\r\n                  </tr>\r\n                  <tr class=\"nopadding\">\r\n                    <td class=\"nopadding\">{{slectedObject.curricuilar}}\t\t\t\t </td>\r\n                    <td class=\"nopadding\"></td>\r\n                    <td class=\"nopadding\"></td>\r\n                  </tr>\r\n                </tbody>\r\n                </table>\r\n              </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <h5 class=\"primarytext\" style=\"text-align: left;\">{{slectedObject.remark}}</h5>\r\n              <div style=\"height:50px;border:1px solid #DEE2E6\"></div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"margin-top: 50px;\">\r\n            <ion-col>\r\n              <h3>{{slectedObject.sign}}</h3>\r\n            </ion-col>\r\n            <ion-col>\r\n              \r\n            </ion-col>\r\n            <ion-col>\r\n              <h3>{{slectedObject.hsign}}</h3>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </ion-card-content>\r\n\r\n\r\n</ion-content>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-report_summative-report_module_ts-es5.js.map