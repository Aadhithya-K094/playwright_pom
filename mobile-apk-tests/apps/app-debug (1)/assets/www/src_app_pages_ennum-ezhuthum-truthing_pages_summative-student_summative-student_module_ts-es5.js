(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-student_summative-student_module_ts"], {
    /***/
    69457:
    /*!***********************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student-routing.module.ts ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeStudentPageRoutingModule": function SummativeStudentPageRoutingModule() {
          return (
            /* binding */
            _SummativeStudentPageRoutingModule
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


      var _summative_student_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-student.page */
      90001);
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
        component: _summative_student_page__WEBPACK_IMPORTED_MODULE_0__.SummativeStudentPage
      }];

      var _SummativeStudentPageRoutingModule = /*#__PURE__*/_createClass(function SummativeStudentPageRoutingModule() {
        _classCallCheck(this, SummativeStudentPageRoutingModule);
      });

      _SummativeStudentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
        providers: [_awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_1__.File, _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener]
      })], _SummativeStudentPageRoutingModule);
      /***/
    },

    /***/
    60981:
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.module.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeStudentPageModule": function SummativeStudentPageModule() {
          return (
            /* binding */
            _SummativeStudentPageModule
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


      var _summative_student_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-student-routing.module */
      69457);
      /* harmony import */


      var _summative_student_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-student.page */
      90001);

      var _SummativeStudentPageModule = /*#__PURE__*/_createClass(function SummativeStudentPageModule() {
        _classCallCheck(this, SummativeStudentPageModule);
      });

      _SummativeStudentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _summative_student_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeStudentPageRoutingModule],
        declarations: [_summative_student_page__WEBPACK_IMPORTED_MODULE_1__.SummativeStudentPage]
      })], _SummativeStudentPageModule);
      /***/
    },

    /***/
    90001:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.page.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeStudentPage": function SummativeStudentPage() {
          return (
            /* binding */
            _SummativeStudentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_summative_student_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./summative-student.page.html */
      77392);
      /* harmony import */


      var _summative_student_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-student.page.scss */
      52135);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api.service */
      43054);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jspdf */
      31769);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! dom-to-image */
      83697);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../services/loader/ion-loader.service */
      21645);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019); // import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
      // import { File, IWriteOptions } from '@ionic-native/file/ngx';


      var _SummativeStudentPage = /*#__PURE__*/function () {
        function SummativeStudentPage(apiService, router, route, ionicstorage, alertService, ionLoaderService, file, fileOpener) {
          _classCallCheck(this, SummativeStudentPage);

          this.apiService = apiService;
          this.router = router;
          this.route = route;
          this.ionicstorage = ionicstorage;
          this.alertService = alertService;
          this.ionLoaderService = ionLoaderService;
          this.file = file;
          this.fileOpener = fileOpener;
          this.studentsList = [];
          this.assessedStudents = [];
          this.viewassessmenbtn = false;
          this.searchTerm = "";
          this.showsubmitbutton = false;
          this.groupingStatus = 'pending';
          this.generatepdf = false;
          this.shownostudentboolean = false;
          this.conttent = [];
          this.arraypdf = [];
          this.secondsummative_pdf = [];
          this.live_img_url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__.environment.ImgUrl;
        }

        return _createClass(SummativeStudentPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.pdfData = '';
            this.ionicstorage.getData('summativeAsseData').then(function (dataa) {
              debugger;
              _this.studentsList = dataa.studentlist;
              _this.term = dataa.term;
              _this.viewassessmenbtn = dataa.viewassessment;
              _this.classAndsubject = dataa.subjectkey;
              _this.classs_sections = dataa.class_sections;
              _this.classdata = dataa.classdata;
              _this.subject = dataa.subject;
              _this.termValue = dataa.term.match(/\d+/)[0];
              _this.weekOfYear = dataa.week_of_year;
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('userInfo').then(function (dataa) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      _context.n = 1;
                      return dataa.username;

                    case 1:
                      this.username = _context.v;
                      _context.n = 2;
                      return dataa.school_id;

                    case 2:
                      this.schoolid = _context.v;
                      _context.n = 3;
                      return dataa.token;

                    case 3:
                      this.token = _context.v;

                    case 4:
                      return _context.a(2);
                  }
                }, _callee, this);
              }));
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('summativeAsseData').then(function (dataa) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                var _this2 = this;

                var date, obj;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      debugger;

                      if (!(dataa.studentlist.length > 0)) {
                        _context2.n = 4;
                        break;
                      }

                      this.shownostudentboolean = true;
                      _context2.n = 1;
                      return dataa.classdata;

                    case 1:
                      this["class"] = _context2.v;
                      _context2.n = 2;
                      return dataa.subject;

                    case 2:
                      this.Medium = _context2.v;
                      _context2.n = 3;
                      return dataa.subjectkey;

                    case 3:
                      this.subjectkey = _context2.v;

                      if (this.subjectkey == 'English') {
                        this.pdfData = 'EE-Term2-SA-English.pdf';
                      } else if (this.subjectkey == 'Mathematics') {
                        this.pdfData = 'EE-Term2-SA-Maths.pdf';
                      } else if (this.subjectkey == 'Tamil') {
                        this.pdfData = 'EE-Term2-SA-Tamil.pdf';
                      }

                      date = new Date();
                      obj = {
                        "academic_year": this.apiService.getacadamic_yearid(),
                        "month_year": ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear(),
                        "assessment_type": this.apiService.getdataassessed_typeformativeid(),
                        "school_id": this.schoolid
                      };
                      this.apiService.getformationterms(obj, this.token).subscribe(function (val) {
                        if (val['status'] == 200 && val['dataStatus'] == true) {
                          if (val['records'] == null || val['records'].length == 0 || typeof val['records'] == 'string') {
                            _this2.groupingStatus = 'pending';
                          } else {
                            var getfozenSatus = val['records'].find(function (v) {
                              return v.assessment_type == _this2.apiService.getdataassessed_typeformativeid() && v["class"] == _this2["class"] && v.subject == _this2.subject && v.term == _this2.termValue && v.week_of_year == _this2.weekOfYear;
                            });

                            if (getfozenSatus == undefined) {
                              _this2.groupingStatus = 'pending';
                            } else {
                              _this2.groupingStatus = getfozenSatus.status;
                            }
                          }
                        } else {
                          _this2.alertService.error(val['msg']);
                        }
                      });
                      this.studentsList = this.studentOrder(dataa.studentlist);
                      this.totalCount = dataa.studentlist.length;
                      this.dummystudentlist = dataa.studentlist;
                      this.assessedStudents = this.studentsList.filter(function (s) {
                        return s.isAssessed == true;
                      });
                      this.showsubmitbutton = this.studentsList.some(function (s) {
                        return s.isSkipped == true || s.isAssessed == false && s.isSkipped == false;
                      });
                      _context2.n = 5;
                      break;

                    case 4:
                      this.shownostudentboolean = false;
                      this.studentsList = [];
                      this.totalCount = 0;

                    case 5:
                      this.getSummativePdf();

                    case 6:
                      return _context2.a(2);
                  }
                }, _callee2, this);
              }));
            }, function (error) {
              return console.error(error);
            });
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
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.apiService.totalStudentsAssesedClass1.subscribe(function (data) {
              _this3.assessedStudents = data;
            });
          }
        }, {
          key: "getSummativePdf",
          value: function getSummativePdf() {
            var _this4 = this;

            var obj = {
              assessment_type: this.apiService.getdataassessed_typeformativeid(),
              "class": this.classdata,
              subject: this.subject,
              school_id: this.schoolid,
              term: this.termValue,
              class_sections: this.classs_sections
            };
            this.apiService.pdfSummativeAssessmentDetails(obj, this.token).subscribe(function (val) {
              if (val['status'] == 200 && val['dataStatus'] == true) {
                _this4.summative_pdf = _this4.studentOrder(val['records']);

                _this4.summative_pdf.filter(function (val) {
                  if (val.student_status == null || val.student_status == '') {
                    val.total = 'Not assessed';
                  } else if (val.student_status != null && val.student_status != 'assessed') {
                    val.total = val.student_status;
                  }
                });

                _this4.final_Data = _this4.summative_pdf;
              } else {
                _this4.summative_pdf = [];
              }
            });
          }
        }, {
          key: "generatePdf",
          value: function generatePdf() {
            var _this5 = this;

            this.test = true;
            debugger;
            this.ionLoaderService.simpleLoader();
            setTimeout(function () {
              _this5.conttent = [];
              _this5.arraypdf = [];
              var pdfEle = document.getElementById("pdf-container");
              _this5.copypdfEle = pdfEle.innerHTML;
              var splitdata = pdfEle.innerHTML.split('<tr');

              while (splitdata.length > 0) _this5.arraypdf.push(splitdata.splice(0, 32));

              _this5.arraypdf.map(function (val, arin) {
                var newval = val.map(function (s, index) {
                  if (index >= 1) {
                    s = '<tr' + s;
                    return s;
                  } else if (index == 0) {
                    if (arin == 0) {
                      s = s;
                    } else {
                      s = '<table ><tr id="123"><th style="border: 1px solid black;color: black;">SlNo</th><th style="border: 1px solid black;color: black;">Student ID</th><th style="border: 1px solid black;color: black;">Student Name</th><th style="border: 1px solid black;color: black;">GROUP</th><th style="border: 1px solid black;color: black;">Total Marks(60)</th></tr><tr ' + s;
                    }

                    return s;
                  }

                  ;
                });
                var alstd = newval[newval.length - 1];
                newval[newval.length - 1] = alstd + '</table>';
                pdfEle.innerHTML = newval.join('');
                var splittable = pdfEle.innerHTML.split('<table');
                var newarr = splittable.map(function (v) {
                  if (v != "") {
                    return '<div style="width: 100%;text-align:center;padding-bottom: 30px;"><div style="font-weight:bold;">Summative Assesement Report</div><div style="font-weight:bold;">(2022-2023)</div><div style="font-weight:bold;">' + _this5.term + '</div><div style="font-weight:bold;"><h4>Class ' + _this5["class"] + ' - ' + _this5.subjectkey + '</h4></div><img style="width: 50px;height:50px"  src="/assets/images/ennum-ezhuthum/image10.jpg"><span>-Arumbu</span><img style="width: 50px;height:50px"  src="/assets/images/ennum-ezhuthum/image2.jpg"><span>-Mottu</span><img style="width: 50px;height:50px"  src="/assets/images/ennum-ezhuthum/image19.jpg"><span>-Malar</span></div></div><table style="margin: 0 auto;" ' + v;
                  }
                });
                var removundefined = newarr.filter(function (t) {
                  return t != undefined;
                });
                removundefined.forEach(function (t) {
                  return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
                    var _this6 = this;

                    var stringToHTML, options;
                    return _regenerator().w(function (_context4) {
                      while (1) switch (_context4.n) {
                        case 0:
                          stringToHTML = function stringToHTML(str) {
                            var dom = document.createElement('div');
                            dom.innerHTML = str;
                            return dom;
                          };

                          options = {
                            background: "white",
                            height: pdfEle.clientHeight + 600,
                            width: 800
                          };
                          _context4.n = 1;
                          return dom_to_image__WEBPACK_IMPORTED_MODULE_8___default().toPng(stringToHTML(t), options).then(function (filePath) {
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                              return _regenerator().w(function (_context3) {
                                while (1) switch (_context3.n) {
                                  case 0:
                                    this.conttent.push(filePath);

                                  case 1:
                                    return _context3.a(2);
                                }
                              }, _callee3, this);
                            }));
                          });

                        case 1:
                          return _context4.a(2);
                      }
                    }, _callee4);
                  }));
                });
              });

              var options = {
                background: "white",
                height: pdfEle.clientHeight + 600,
                width: 800
              };
              setTimeout(function () {
                dom_to_image__WEBPACK_IMPORTED_MODULE_8___default().toPng(pdfEle, options).then(function (filePath) {
                  var jsPdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]("p", "mm", "a4");
                  var width = jsPdfDoc.internal.pageSize.getWidth();
                  var height = jsPdfDoc.internal.pageSize.getHeight();

                  if (_this5.conttent.length > 0) {
                    _this5.conttent.push(_this5.conttent.shift());
                  }

                  _this5.conttent.forEach(function (n) {
                    jsPdfDoc.addPage(n);
                    jsPdfDoc.addImage(n, 'PNG', 12, 12, width, height);
                  });

                  jsPdfDoc.deletePage(1);
                  var docRes = jsPdfDoc.output();
                  var arrayBuffer = new ArrayBuffer(docRes.length);
                  var uintArray = new Uint8Array(arrayBuffer);
                  _this5.test = false;

                  for (var i = 0; i < docRes.length; i++) {
                    uintArray[i] = docRes.charCodeAt(i);
                  }

                  var directory = _this5.file.dataDirectory;
                  var pdfFile = "Student.pdf";
                  debugger;

                  _this5.file.checkFile(directory, pdfFile).then(function (res) {
                    _this5.file.writeFile(directory, pdfFile, arrayBuffer, {
                      replace: true
                    }).then(function (res) {
                      _this5.ionLoaderService.dismissLoader();

                      _this5.fileOpener.open(_this5.file.dataDirectory + pdfFile, 'application/pdf').then(function () {
                        return console.log('File is exported');
                      })["catch"](function (e) {
                        return console.log(e);
                      });
                    })["catch"](function (error) {
                      console.log(JSON.stringify(error));
                    });
                  })["catch"](function (error) {
                    _this5.file.writeFile(directory, pdfFile, arrayBuffer, {
                      replace: true
                    }).then(function (res) {
                      _this5.ionLoaderService.dismissLoader();

                      _this5.fileOpener.open(_this5.file.dataDirectory + pdfFile, 'application/pdf').then(function () {
                        return console.log('File exported');
                      })["catch"](function (e) {
                        return console.log(e);
                      });
                    })["catch"](function (error) {
                      console.log(JSON.stringify(error));

                      _this5.ionLoaderService.dismissLoader();
                    });
                  });
                })["catch"](function (error) {
                  console.error(error);
                });
              }, 1000);
            }, 1000);
          }
        }, {
          key: "setFilteredItems",
          value: function setFilteredItems(data) {
            this.studentsList = this.filterItems(data.value);
          }
        }, {
          key: "filterItems",
          value: function filterItems(searchTerm) {
            return this.dummystudentlist.filter(function (item) {
              return item.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
          }
        }, {
          key: "findStudentToBeAssessed",
          value: function findStudentToBeAssessed() {
            var studentsToBeAssessed = this.studentsList.filter(function (el) {
              return el.isSkipped !== true && el.isAssessed !== true;
            });

            if (studentsToBeAssessed.length > 0) {
              this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
            } else {
              this.apiService.displayToast("All Students assessed!", false);
              this.router.navigate(['/tabs/summative-class-selection']);
            }
          }
        }]);
      }();

      _SummativeStudentPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_9__.IonLoaderService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_7__.FileOpener
        }];
      };

      _SummativeStudentPage.propDecorators = {
        searchbarElem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: ["searchbarElem", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ElementRef
          }]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
          args: ['content']
        }]
      };
      _SummativeStudentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-summative-student',
        template: _raw_loader_summative_student_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_summative_student_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SummativeStudentPage);
      /***/
    },

    /***/
    52135:
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.page.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  font-family: \"Ubuntu\" !important;\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.content {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n}\n\n.note {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  margin: auto;\n}\n\n.note-assess {\n  font-family: \"Ubuntu\" !important;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  font-weight: 500;\n  width: calc(100% - 10%);\n  padding: 3px;\n  margin: 15px auto;\n  text-align: center;\n}\n\n.heading {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n  background: #f2c94c;\n  text-align: center;\n  padding: 10px;\n  font-weight: 800;\n  font-size: 20px;\n  line-height: 24px;\n}\n\n.select-learning-outcome {\n  border: 1px solid black;\n  border-radius: 5px;\n  background: rgba(200, 190, 190, 0.42);\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 21px;\n  padding: 5px;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  font-family: \"Ubuntu\" !important;\n}\n\n.select-learning-outcome-option {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: block;\n}\n\n.student-assess-box {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.assess-img-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  height: 5px;\n  border: 1px solid #C4C4C4;\n  box-sizing: border-box;\n  border-radius: 20px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n}\n\n.assess-img {\n  width: 30px;\n  margin-right: -3px;\n}\n\n.search-box {\n  width: calc(100% - 10%);\n  margin: auto;\n  padding: 0 10px;\n  background: rgba(196, 196, 196, 0.13);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search-box-input {\n  width: 90%;\n  margin: 2px;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\n.footer {\n  text-align: center;\n  font-family: \"Ubuntu\" !important;\n  background: #45B356;\n  color: white;\n  font-weight: 800;\n  font-size: 24px;\n  line-height: 28px;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 10%);\n  margin: 20px auto;\n}\n\nth {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 800;\n  text-align: center;\n  font-size: 18px;\n  border: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 10px;\n}\n\ntd {\n  text-align: center;\n  border: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 10px;\n}\n\n.name {\n  font-family: \"Ubuntu\" !important;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n}\n\n.assess-status-red {\n  font-family: \"Ubuntu\" !important;\n  color: #F01313;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-green {\n  font-family: \"Ubuntu\" !important;\n  color: green;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-yellow {\n  font-family: \"Ubuntu\" !important;\n  color: orange;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.assess-status-lightblue {\n  font-family: \"Ubuntu\" !important;\n  color: #3b45d4;\n  font-weight: 800;\n  font-size: 13px;\n  line-height: 20px;\n}\n\nion-content {\n  --background: url(\"/assets/images/ennum-ezhuthum/screen-back.png\") 0 0/100% 100% no-repeat ;\n}\n\nion-card {\n  padding: 10px;\n}\n\n.center-align-flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\nion-title {\n  font-size: 15px;\n}\n\nion-header {\n  background: #27AE60;\n}\n\nion-toolbar {\n  --background: #2176b9;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1zdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBREU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFLSjs7QUFIRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSEU7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFNTjs7QUFIRTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFIRTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1OOztBQUpFO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBT047O0FBTEU7RUFFRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7QUFRSjs7QUFORTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0FBU0o7O0FBTkU7RUFDRSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBTkU7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBFO0VBQ0UsZ0NBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFVTjs7QUFSRTtFQUNFLGdDQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBV047O0FBVEU7RUFDRSxnQ0FBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlOOztBQVZFO0VBQ0UsMkZBQUE7QUFhSjs7QUFURTtFQUNFLGFBQUE7QUFZSjs7QUFURTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVlKOztBQVZFO0VBQ0UsZUFBQTtBQWFKOztBQVhFO0VBQ0UsbUJBQUE7QUFjSjs7QUFYRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQWNKIiwiZmlsZSI6InN1bW1hdGl2ZS1zdHVkZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubm90ZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAubm90ZS1hc3Nlc3N7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkaW5nIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmM5NGM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuICAuc2VsZWN0LWxlYXJuaW5nLW91dGNvbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjAwLCAxOTAsIDE5MCwgMC40Mik7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNlbGVjdC1sZWFybmluZy1vdXRjb21lLW9wdGlvbntcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnN0dWRlbnQtYXNzZXNzLWJveHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLmFzc2Vzcy1pbWctYm94e1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwJSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNEM0QzQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG4gIC5hc3Nlc3MtaW1ne1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtM3B4O1xyXG5cclxuICB9XHJcbiAgLnNlYXJjaC1ib3h7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4xMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtYm94LWlucHV0e1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLmZvb3RlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogIzQ1QjM1NjtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxuICB0YWJsZXtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIH1cclxuICB0aHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICB0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogJ1VidW50dScgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICB9XHJcblxyXG4gIC5hc3Nlc3Mtc3RhdHVzLXJlZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGMDEzMTM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWdyZWVue1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgLmFzc2Vzcy1zdGF0dXMteWVsbG93e1xyXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5hc3Nlc3Mtc3RhdHVzLWxpZ2h0Ymx1ZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogcmdiKDU5LCA2OSwgMjEyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2VubnVtLWV6aHV0aHVtL3NjcmVlbi1iYWNrLnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdFxyXG4gIH1cclxuXHJcblxyXG4gIGlvbi1jYXJke1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1hbGlnbi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgaW9uLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6ICMyN0FFNjA7XHJcbiAgfVxyXG5cclxuICBpb24tdG9vbGJhcntcclxuICAgIC0tYmFja2dyb3VuZDogIzIxNzZiOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */";
      /***/
    },

    /***/
    77392:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-student/summative-student.page.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/summative-class-selection\"></ion-back-button>\r\n   </ion-buttons>\r\n    <ion-title>SUMMATIVE ASSESSMENT</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"content\">\r\n  <ion-card>\r\n  <ion-note>Note : Mark the students who can be assessed now</ion-note>\r\n        <ion-text color=\"primary\" class=\"ion-text-center center-align-flex\" >\r\n          <h4>{{term}}</h4>\r\n        </ion-text>\r\n  \r\n  <ion-text color=\"primary\" class=\"ion-text-center center-align-flex\">\r\n    <h4 *ngIf=\"shownostudentboolean\">Class {{class}} {{subjectkey}}</h4>\r\n  </ion-text>\r\n\r\n  <ion-text *ngIf=\"pdfData\" color=\"primary\" class=\"ion-text-center center-align-flex\">\r\n    <ion-title><a href=\"{{live_img_url}}{{pdfData}}\">click to Download questions pdf</a></ion-title>\r\n  </ion-text>\r\n\r\n  <div class=\"student-assess-box\">\r\n    <!-- <div class=\"note-assess\">Number of students assessed</div> -->\r\n    <div class=\"note-assess\"><span style=\"font-size: 25px\">{{assessedStudents.length}}</span>\r\n      of {{totalCount}} students assessed</div>\r\n    <progress style=\"width: 100%\" max=\"{{totalCount}}\" value=\"{{assessedStudents.length}}\"></progress>\r\n   \r\n  </div>\r\n  <ion-searchbar #searchbarElem [(ngModel)]=\"searchTerm\" (ionInput)=\"setFilteredItems($event.target)\">\r\n  </ion-searchbar>\r\n\r\n  <table>\r\n    <tr>\r\n      <th>NAMES</th>\r\n      <th>STATUS</th>\r\n      <!-- <th>GROUP</th> -->\r\n    </tr>\r\n    <tr *ngFor=\"let item of studentsList\">\r\n      <td class=\"name\">\r\n        {{item.name}}   ({{item.user_id}})\r\n      </td>\r\n      \r\n      <td [ngClass]=\"item.isSkipped?item.color_class:item.isAssessed?item.color_class:'assess-status-red'\">\r\n        {{item.isSkipped?item.status_of_assessed:item.isAssessed?item.status_of_assessed:\"Not assessed\"}}\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n  <div *ngIf=\"test\" style=\"padding-top:400px ;\">\r\n    <div id=\"pdf-container\" >\r\n      \r\n      <table >\r\n        <tr id=\"123\">\r\n          <th style=\"border: 1px solid black;color: black;\">SlNo</th>\r\n          <th style=\"border: 1px solid black;color: black;\">Student ID</th>\r\n          <th style=\"border: 1px solid black;color: black;\">Student Name</th>\r\n          <th style=\"border: 1px solid black;color: black;\">GROUP</th>\r\n          <th style=\"border: 1px solid black;color: black;\">Total Marks(60)</th>\r\n     \r\n        </tr>\r\n        <tr *ngFor=\"let item of final_Data; let i = index\">\r\n          <td style=\"border: 1px solid black;color: black;\" class=\"name\">\r\n            {{i+1}}\r\n          </td>\r\n          <td style=\"border: 1px solid black;color: black;\" class=\"name\">\r\n            {{item.user_id}}\r\n          </td>\r\n          <td style=\"border: 1px solid black;color: black;width: 20px;\" class=\"name\">\r\n            {{item.name}} \r\n          </td>\r\n          <td *ngIf=\"!item.grade\" style=\"border: 1px solid black;color: black;\" class=\"name\">\r\n            -\r\n          </td>\r\n          <!-- </div> -->\r\n          <!-- <div *ngIf=\"groupingStatus != 'pending'\"> -->\r\n          <td style=\"padding:0px;border: 1px solid black;color: black;text-align: center;\" *ngIf=\"item.grade\" class=\"name\">\r\n            <img style=\"width: 25px;height: 25px;\" *ngIf=\"item.grade == 1\" src=\"/assets/images/ennum-ezhuthum/image10.jpg\">\r\n            <img style=\"width: 25px;height:25px\" *ngIf=\"item.grade == 2\" src=\"/assets/images/ennum-ezhuthum/image2.jpg\">\r\n            <img style=\"width: 25px;height:25px\" *ngIf=\"item.grade == 3\" src=\"/assets/images/ennum-ezhuthum/image19.jpg\">\r\n          </td>\r\n          <td style=\"padding:0px;border: 1px solid black;color: black;text-align: center;\" class=\"name\">\r\n            {{item.total}}\r\n          </td>\r\n         \r\n        <!-- </div> -->\r\n        </tr>\r\n      </table>\r\n  </div>\r\n  </div>\r\n  <div *ngIf=\"!shownostudentboolean\" style=\"text-align: center;\r\n  font-size: large;\">0 students to display</div>\r\n</ion-card>\r\n</ion-content>\r\n\r\n<ion-footer collapse=\"fade\">\r\n  <ion-toolbar class=\"ion-text-center\" style=\"--background: white !important;\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"groupingStatus != 'pending'\">\r\n          <!-- <button (click)=\"makePdf()\">make pdf</button> -->\r\n          <ion-button (click)=\"generatePdf()\" class=\"btn-submit\"  color=\"secondary\"\r\n            expand=\"block\">\r\n            PDF</ion-button>\r\n        </ion-col>\r\n        <ion-col >\r\n          \r\n<ion-button *ngIf=\"shownostudentboolean && showsubmitbutton && groupingStatus == 'pending'\" (click)=\"findStudentToBeAssessed()\" color=\"primary\">START ASSESSMENT</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-student_summative-student_module_ts-es5.js.map