(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_menus_inspection-report_inspectionreport_inspection-report_module_ts"], {
    /***/
    64843:
    /*!****************************************************************************************************!*\
      !*** ./src/app/pages/menus/inspection-report/inspectionreport/inspection-report-routing.module.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "inspectionReportPageRoutingModule": function inspectionReportPageRoutingModule() {
          return (
            /* binding */
            _inspectionReportPageRoutingModule
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


      var _inspection_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inspection-report.page */
      26478);

      var routes = [{
        path: '',
        component: _inspection_report_page__WEBPACK_IMPORTED_MODULE_0__.inspectionReportPage
      }];

      var _inspectionReportPageRoutingModule = /*#__PURE__*/_createClass(function inspectionReportPageRoutingModule() {
        _classCallCheck(this, inspectionReportPageRoutingModule);
      });

      _inspectionReportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _inspectionReportPageRoutingModule);
      /***/
    },

    /***/
    38403:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/menus/inspection-report/inspectionreport/inspection-report.module.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "inspectionReportPageModule": function inspectionReportPageModule() {
          return (
            /* binding */
            _inspectionReportPageModule
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


      var _inspection_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inspection-report-routing.module */
      64843);
      /* harmony import */


      var _inspection_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inspection-report.page */
      26478);

      var _inspectionReportPageModule = /*#__PURE__*/_createClass(function inspectionReportPageModule() {
        _classCallCheck(this, inspectionReportPageModule);
      });

      _inspectionReportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inspection_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.inspectionReportPageRoutingModule],
        declarations: [_inspection_report_page__WEBPACK_IMPORTED_MODULE_1__.inspectionReportPage]
      })], _inspectionReportPageModule);
      /***/
    },

    /***/
    26478:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/menus/inspection-report/inspectionreport/inspection-report.page.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "inspectionReportPage": function inspectionReportPage() {
          return (
            /* binding */
            _inspectionReportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_inspection_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./inspection-report.page.html */
      64135);
      /* harmony import */


      var _inspection_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inspection-report.page.scss */
      47174);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! jspdf */
      31769);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-path/ngx */
      33002);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! dom-to-image */
      83697);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-opener/ngx */
      91939);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);

      var _inspectionReportPage = /*#__PURE__*/function () {
        function inspectionReportPage(alertService, apiService, userSessionService, router, filePath, platform, _apiService, _translate, socialSharing, file, fileOpener, userService) {
          var _this = this;

          _classCallCheck(this, inspectionReportPage);

          this.alertService = alertService;
          this.apiService = apiService;
          this.userSessionService = userSessionService;
          this.router = router;
          this.filePath = filePath;
          this.platform = platform;
          this._apiService = _apiService;
          this._translate = _translate;
          this.socialSharing = socialSharing;
          this.file = file;
          this.fileOpener = fileOpener;
          this.userService = userService;
          this.dateSelected = false;
          this.date = new Date().toLocaleDateString();
          this.strength = [];
          this.improvement = [];

          this.shareImage = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var Months, div, table, options, fileName, ROOT_DIRECTORY;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.dateSelected = true;
                    Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    _context.n = 1;
                    return document.getElementById("PrintObservation");

                  case 1:
                    div = _context.v;
                    this.divdata = div.getElementsByTagName('ion-item')[0].innerHTML;
                    this.innerText = div.getElementsByTagName('ion-item');
                    div.getElementsByTagName('ion-item')[0].innerText = "Selected Month : " + Months[this.selectedMonthData - 1] + '-' + this.selectedYearData;

                    if (div) {
                      table = document.getElementById("container");
                      options = {};

                      if (div.clientHeight > 0) {
                        options = {
                          background: "white",
                          height: div.clientHeight + 100,
                          width: div.clientWidth + 100
                        };
                      } else {
                        options = {
                          background: "white",
                          height: 792,
                          width: 393
                        };
                      }

                      dom_to_image__WEBPACK_IMPORTED_MODULE_9___default().toPng(div, options).then(function (dataUrl) {
                        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__.jsPDF("p", "mm", "a4");
                        var width = doc.internal.pageSize.getWidth();
                        var height = doc.internal.pageSize.getHeight();
                        doc.addImage(dataUrl, 'PNG', 10, 10, width, height);
                        div.getElementsByTagName('ion-item')[0].innerHTML = _this2.divdata;
                        var pdfOutput = doc.output();
                        var buffer = new ArrayBuffer(pdfOutput.length);
                        var array = new Uint8Array(buffer);

                        for (var i = 0; i < pdfOutput.length; i++) {
                          array[i] = pdfOutput.charCodeAt(i);
                        }

                        _this2.filePath.resolveNativePath('file://').then(function (filePath) {
                          return console.log(filePath);
                        })["catch"](function (err) {
                          return alert('error ' + JSON.stringify(err));
                        });

                        var directory = _this2.file.externalDataDirectory;
                        var fileName = "InspectionReport.pdf";
                        var options = {
                          replace: true
                        };

                        _this2.file.checkFile(directory, fileName).then(function (success) {
                          _this2.file.writeFile(directory, fileName, buffer, options).then(function (success) {})["catch"](function (error) {
                            alert('error ' + JSON.stringify(error));
                          });
                        })["catch"](function (error) {
                          _this2.file.writeFile(directory, fileName, buffer).then(function (success) {})["catch"](function (error) {
                            alert('error ' + JSON.stringify(error));
                          });
                        });
                      })["catch"](function (error) {});

                      if (this.platform.is('cordova')) {
                        fileName = "InspectionReport.pdf";
                        ROOT_DIRECTORY = this.file.externalDataDirectory + fileName;
                        this.socialSharing.share("Message", "Subject", ROOT_DIRECTORY, "").then(function (entries) {
                          _this2.dateSelected = false;
                        })["catch"](function (error) {
                          _this2.dateSelected = false;
                          alert('error ' + JSON.stringify(error));
                        });
                      }
                    }

                    this.ngOnInit();
                    this.dateSelected = false;

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          };
        }

        return _createClass(inspectionReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setMaxDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(new Date()).format("yyyy-MM-DD");
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.setMaxDate = moment__WEBPACK_IMPORTED_MODULE_12___default()(new Date()).format("yyyy-MM-DD");
            this.appLanguage();
            this.selectedMonth = new Date();
            this.emis_username = this.userSessionService.emis_username();
            this.getHODInspection();
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this3 = this;

            this.languageType = 'en';

            this._apiService.languageInfo.subscribe(function (data) {
              _this3.languageType = 'en';

              _this3._translate.use(_this3.languageType);

              _this3._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this4 = this;

            this._translate.get("observedDate").subscribe(function (res) {
              _this4.observedDate = res;
            });

            this._translate.get("Report").subscribe(function (res) {
              _this4.Report = res;
            });

            this._translate.get("discussReport").subscribe(function (res) {
              _this4.discussReport = res;
            });

            this._translate.get("schoolObserved").subscribe(function (res) {
              _this4.schoolObserved = res;
            });

            this._translate.get("standardObserved").subscribe(function (res) {
              _this4.standardObserved = res;
            });

            this._translate.get("subject").subscribe(function (res) {
              _this4.subject = res;
            });

            this._translate.get("studentTested").subscribe(function (res) {
              _this4.studentTested = res;
            });

            this._translate.get("TodayReport").subscribe(function (res) {
              _this4.TodayReport = res;
            });

            this._translate.get("areastrength").subscribe(function (res) {
              _this4.areastrength = res;
            });

            this._translate.get("areaImprovement").subscribe(function (res) {
              _this4.areaImprovement = res;
            });

            this._translate.get("assessmentResults").subscribe(function (res) {
              _this4.assessmentResults = res;
            });
          }
        }, {
          key: "downloadInspection",
          value: function downloadInspection(index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var data, Strengthdata, div, i, j, table, options, fileName, ROOT_DIRECTORY;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    data = this.hoddata[index];
                    this.school_name = data.school_name;
                    this.class_observed = data.class_observed;
                    this.inspection_date = data.inspection_date;
                    this.subjectData = data.subject_name;
                    this.teacher_emisid = data.teacher_emisid;
                    this.teacher_name = data.teacher_name;
                    this.final_remarks = data.final_remarks;
                    this.strength = data.strength.split("|").slice(0, 5);
                    this.improvement = data.improvement.split("|").slice(0, 5);
                    Strengthdata = '';
                    div = document.getElementById("PrintReport");
                    Strengthdata += "<section><h5><span>" + this.areastrength + "</span>:</h5><ul style='list-style-type:decimal'>";

                    for (i = 0; i < this.strength.length; i++) {
                      Strengthdata += "<li style='color: #27ae60;font-weight: bold'>" + this.strength[i] + "</li>";
                    }

                    Strengthdata += "</ul>";
                    Strengthdata += "<h5><span>" + this.areaImprovement + "</span>:</h5><ul style='list-style-type:decimal'>";

                    for (j = 0; j < this.improvement.length; j++) {
                      Strengthdata += "<li style='color: #f2994a;font-weight: bold'>" + this.improvement[j] + "</li>";
                    }

                    Strengthdata += "</ul></section>";
                    div.innerHTML = "<div style='text-align:center'><p style='font-size:12'><span >" + this.discussReport + "</span><br /><b>" + this.teacher_name + "[" + this.teacher_emisid + "]</b></p></div><div style='font-size:color:#000'><p ><span >" + this.observedDate + "</span>:<b>" + this.inspection_date + "</b></p><p style='margin-bottom:2px'><span>" + this.schoolObserved + "</span>: <b>" + this.school_name + "</b></p><p style='margin-bottom:2px'><span>" + this.standardObserved + "</span>:<b>" + this.class_observed + "</b></p></div><div ><h5 style='font-size:12px;text-align:center'><b>" + this.TodayReport + "</b></h5></div>" + Strengthdata;
                    table = document.getElementById("container");
                    options = {
                      background: "white",
                      height: div.clientHeight + 50,
                      width: div.clientWidth + 50
                    };
                    dom_to_image__WEBPACK_IMPORTED_MODULE_9___default().toPng(div, options).then(function (dataUrl) {
                      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__.jsPDF("p", "mm", "a4");
                      var width = doc.internal.pageSize.getWidth();
                      var height = doc.internal.pageSize.getHeight();
                      doc.addImage(dataUrl, 'PNG', 10, 10, width, height);
                      var pdfOutput = doc.output();
                      var buffer = new ArrayBuffer(pdfOutput.length);
                      var array = new Uint8Array(buffer);

                      for (var i = 0; i < pdfOutput.length; i++) {
                        array[i] = pdfOutput.charCodeAt(i);
                      }

                      _this5.filePath.resolveNativePath('file://').then(function (filePath) {
                        return alert('success ' + JSON.stringify(filePath));
                      })["catch"](function (err) {
                        return alert('error ' + JSON.stringify(err));
                      });

                      _this5.file.listDir(_this5.file.externalDataDirectory, '').then(function (folderList) {});

                      var directory = _this5.file.externalDataDirectory;
                      var fileName = "ObservationReport.pdf";
                      var options = {
                        replace: true
                      };

                      _this5.file.checkFile(directory, fileName).then(function (success) {
                        _this5.file.writeFile(directory, fileName, buffer, options).then(function (success) {
                          _this5.fileOpener.open(directory + fileName, 'application/pdf').then(function () {
                            return document.getElementById('PrintReport').innerHTML = '';
                          })["catch"](function (e) {
                            return alert('error ' + JSON.stringify(e));
                          });
                        })["catch"](function (error) {
                          alert('error ' + JSON.stringify(error));
                        });
                      })["catch"](function (error) {
                        _this5.file.writeFile(directory, fileName, buffer).then(function (success) {
                          _this5.fileOpener.open(directory + fileName, 'application/pdf').then(function () {
                            return document.getElementById('PrintReport').innerHTML = '';
                          })["catch"](function (e) {
                            return alert('error ' + JSON.stringify(e));
                          });
                        })["catch"](function (error) {
                          alert('error ' + JSON.stringify(error));
                        });
                      });
                    })["catch"](function (error) {
                      console.error('oops, something went wrong!', error);
                    });

                    if (this.platform.is('cordova')) {
                      fileName = "InspectionReport.pdf";
                      ROOT_DIRECTORY = this.file.externalDataDirectory + fileName;
                    }

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getHODInspection",
          value: function getHODInspection() {
            var _this6 = this;

            var date = new Date(this.selectedMonth);
            var month = date.getMonth();
            month = Number(month) + 1;
            var year = date.getFullYear();
            this.selectedMonthData = month;
            this.selectedYearData = year;
            this.selectedMonthAndYear = month + '/' + year;
            this.hoddata = [];
            var userdata = {};
            userdata["username"] = this.emis_username;
            userdata["selectedMonth"] = month;
            userdata["selectedYear"] = year;
            this.apiService.getInspectionReport(userdata).subscribe(function (res) {
              if (res) {
                _this6.noData = false;

                if ((res === null || res === void 0 ? void 0 : res.records.reportData) != false) {
                  _this6.hoddata = res === null || res === void 0 ? void 0 : res.records.reportData;
                } else {
                  _this6.hoddata = [];
                }

                _this6.classTarget = res === null || res === void 0 ? void 0 : res.records.targetData;
              } else {
                _this6.noData = true;
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.router.navigate(['/tabs/home']);
          }
        }]);
      }();

      _inspectionReportPage.ctorParameters = function () {
        return [{
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__.FilePath
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_7__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__.SocialSharing
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File
        }, {
          type: _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__.FileOpener
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }];
      };

      _inspectionReportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-inspection-report',
        template: _raw_loader_inspection_report_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inspection_report_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _inspectionReportPage);
      /***/
    },

    /***/
    47174:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/menus/inspection-report/inspectionreport/inspection-report.page.scss ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-label {\n  max-width: 100% !important;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.header {\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.header-txt {\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 10px;\n  border-radius: 10px;\n}\n\n.heading-txt {\n  background: white;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 5px;\n}\n\n.item-style {\n  margin-bottom: 15px;\n  border-radius: 6px;\n}\n\n.background {\n  border-radius: 10px;\n  background: white;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  padding: 0px;\n}\n\n.ques-txt {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.bt-10 {\n  padding-bottom: 10p;\n}\n\n.list {\n  padding-bottom: 0px;\n  padding-top: 0px;\n}\n\n.radio {\n  padding-right: 40px;\n  padding-left: 15px;\n  padding-top: 3px;\n}\n\n.lbl {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: pre-line;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 0px !important;\n}\n\nion-icon {\n  margin-inline: 0px;\n}\n\n.odd {\n  background-color: #eef8ff;\n  --background: #eef8ff;\n}\n\n.even {\n  background-color: #f9fcff;\n  --background: #f9fcff;\n}\n\n.library {\n  padding-top: 15px;\n  padding-left: 15px;\n  color: darkslategray;\n}\n\n.card-aln {\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 5px;\n  margin-top: 20px;\n}\n\n.input {\n  padding-left: 10px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 15px;\n}\n\n.input-box {\n  margin-left: 3px;\n  border: 1px solid lightgray;\n  margin-right: 3px;\n}\n\n.btn-aln {\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.valid-clr {\n  color: red;\n}\n\n.error-message {\n  color: red;\n}\n\n.formLine {\n  padding-left: 20px;\n  padding-right: 20px;\n  color: red;\n}\n\nion-input {\n  --padding-start: 10px;\n}\n\n.library {\n  padding-top: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 10px;\n  color: darkslategray;\n}\n\nion-item {\n  --ion-background-color:transparent;\n  --padding-start: 5px !important;\n  --padding-end: 5px !important;\n  --inner-padding-end: 5px;\n  --inner-padding-start: 5px;\n}\n\n.color1 {\n  background-color: #fff;\n  --background: #fff;\n  padding: 0px;\n  border-bottom: 1px solid gray;\n}\n\n.color2 {\n  background-color: #fff;\n  --background: #fff;\n  padding: 0px;\n  border-bottom: 1px solid gray;\n}\n\n.name {\n  color: darkcyan !important;\n}\n\n.label {\n  padding-left: 15px;\n}\n\n.avatar {\n  width: auto;\n  padding-right: 10px;\n}\n\n.name {\n  font-size: 16px;\n}\n\n.designation {\n  font-size: 14px !important;\n  color: darkslategray;\n  white-space: pre-line;\n}\n\n.call {\n  margin: auto;\n  zoom: 1.3;\n  color: midnightblue;\n}\n\n.button {\n  margin-left: 10px;\n}\n\n.card-class {\n  text-align: center;\n}\n\nion-label {\n  white-space: pre-line;\n}\n\n.head {\n  padding-left: 15px;\n  padding-top: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sub-head {\n  padding-left: 15px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.line {\n  border-bottom: 2px solid #aaaabb;\n  margin-left: 9px;\n  margin-right: 9px;\n  border-radius: 5px;\n}\n\nion-card {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n.total {\n  background: white;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.total-txt {\n  color: darkslategray;\n  font-weight: 600;\n}\n\n.total-subtxt {\n  color: darkslategray;\n  font-weight: 600;\n  text-align: end;\n}\n\nion-avatar {\n  width: 36px;\n  height: 26px;\n}\n\nimg {\n  border-radius: 0px;\n}\n\n.head {\n  padding-left: 15px;\n  padding-top: 15px;\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.sub-head {\n  text-align: right;\n  padding-right: 15px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n  font-weight: 700;\n}\n\n.line {\n  border-bottom: 2px solid #aaaabb;\n  margin-left: 9px;\n  margin-right: 9px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3BlY3Rpb24tcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0FBRUo7O0FBQUU7RUFFRyxpQkFBQTtFQUdELGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUdKOztBQURFO0VBQ0UsbUJBQUE7QUFJSjs7QUFGRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBT0o7O0FBTEU7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5FO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEU7RUFDRSwrQkFBQTtBQVVKOztBQVJFO0VBQ0Usa0JBQUE7QUFXSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFERTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFOQTtFQUNJLFVBQUE7QUFTSjs7QUFQQTtFQUNJLFVBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSxVQUFBO0FBU0o7O0FBUEE7RUFDSSxxQkFBQTtBQVVKOztBQVBBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQVVKOztBQVBBO0VBQ0ksa0NBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtBQVVKOztBQUxJO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVFKOztBQU5JO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVNKOztBQUNJO0VBQ0EsMEJBQUE7QUFFSjs7QUFBSTtFQUNFLGtCQUFBO0FBR047O0FBQUk7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFHTjs7QUFESTtFQUNFLGVBQUE7QUFJTjs7QUFGSTtFQUNFLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUtOOztBQUhJO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQU1OOztBQUpJO0VBQ0UsaUJBQUE7QUFPTjs7QUFKSTtFQUVHLGtCQUFBO0FBTVA7O0FBSkk7RUFDRSxxQkFBQTtBQU9OOztBQUpJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU9OOztBQUxJO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVFOOztBQU5JO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFTTjs7QUFOSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFTTjs7QUFOSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTTjs7QUFOSTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFTTjs7QUFOSTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBU047O0FBTkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVNOOztBQVBJO0VBQ0Usa0JBQUE7QUFVTjs7QUFQSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVTjs7QUFSSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdOOztBQVRJO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFZTiIsImZpbGUiOiJpbnNwZWN0aW9uLXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItdHh0IHtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuaGVhZGluZy10eHQge1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2U2Y2NmZjtcclxuICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG5cclxuICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLml0ZW0tc3R5bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxuICAuYmFja2dyb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICB9XHJcbiAgLnF1ZXMtdHh0IHtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIH1cclxuICAuYnQtMTAge1xyXG4gICAgcGFkZGluZy1ib3R0b206MTBwXHJcbiAgfVxyXG4gIC5saXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIHBhZGRpbmctdG9wOjBweFxyXG4gIH1cclxuICAucmFkaW8ge1xyXG4gICAgcGFkZGluZy1yaWdodDo0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDNweFxyXG4gIH1cclxuICAubGJsIHtcclxuICAgIHBhZGRpbmctdG9wOjEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gIH1cclxuICAuaW5wdXQtY2xyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIG1hcmdpbi1pbmxpbmU6IDBweDtcclxuICB9XHJcbiAgLy8gaW9uLWxhYmVsIHtcclxuICAvLyAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICBcclxuICAuaXRlbS1ib3JkZXIge1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAvL2JvcmRlci1ib3R0b206IDVweCBzb2xpZCAjOGI2N2IzO1xyXG4gIH1cclxuXHJcbiAgLm9kZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWY4ZmY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlZWY4ZmY7XHJcbiAgfVxyXG4gIC5ldmVue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmNmZjtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y5ZmNmZjtcclxuICB9XHJcblxyXG4gIC5saWJyYXJ5IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbn1cclxuLmNhcmQtYWxuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uaW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmlucHV0LWJveCB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuLmJ0bi1hbG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5lcnJvci1tZXNzYWdle1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbi5mb3JtTGluZXtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG59XHJcblxyXG4ubGlicmFyeSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDVweDtcclxuICAgIH1cclxuICAgIC8vIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2U0ZDFlYjtcclxuICAgIC8vIH1cclxuICAgIC5jb2xvcjF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBncmF5O1xyXG4gICAgfVxyXG4gICAgLmNvbG9yMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7XHJcbiAgICB9XHJcbiAgICAvLyAuc2VhcmNoYmFyIHtcclxuICAgIC8vICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgLy8gLXdlYmtpdC1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLy8gcGFkZGluZy1pbmxpbmUtZW5kOjEwcHg7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAvLyB9XHJcbiAgICAubmFtZSB7XHJcbiAgICBjb2xvcjpkYXJrY3lhbiAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgICAubGFiZWwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hdmF0YXIge1xyXG4gICAgICB3aWR0aDogYXV0bzsgXHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgfVxyXG4gICAgLmRlc2lnbmF0aW9ue1xyXG4gICAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjpkYXJrc2xhdGVncmF5O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICB9XHJcbiAgICAuY2FsbCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgem9vbToxLjM7XHJcbiAgICAgIGNvbG9yOm1pZG5pZ2h0Ymx1ZTtcclxuICAgIH1cclxuICAgIC5idXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtY2xhc3NcclxuICAgIHtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOnByZS1saW5lXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgLnN1Yi1oZWFkIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FhYWFiYjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRvdGFsIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206NXB4XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3RhbC10eHQge1xyXG4gICAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudG90YWwtc3VidHh0IHtcclxuICAgICAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgIGhlaWdodDogMjZweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICAgIC5zdWItaGVhZCB7ICAgICAgXHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2FhYWFiYjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4XHJcbiAgICB9Il19 */";
      /***/
    },

    /***/
    64135:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menus/inspection-report/inspectionreport/inspection-report.page.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"goToBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap text-center\">PALLI PARVAI OBSERVATION REPORT</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <ion-button  (click)=\"dateSelected=true;shareImage()\">\r\n    <ion-label style=\"color:#fff\"\r\n      >Share\r\n    </ion-label>\r\n    <ion-icon color =\"light\" name=\"share\"></ion-icon>\r\n  </ion-button>    \r\n  <div  id=\"PrintReport\"  style=\"max-width: 600px;margin: auto;font-size: 16px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;background-color: #f2f2f2;\">\r\n  </div>\r\n  <div  id=\"PrintObservation\"  style=\"width: 100%;margin: auto;padding: 10px;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 12px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;background-color: #f2f2f2;\">\r\n\r\n    <div  style=\"border-radius:10px;margin:10px;background-color: #fff;\">\r\n      <ion-row class=\"ion-text-wrap text-center\">       \r\n        <ion-col size=\"12\" style=\"font-size:10px;color:#8B67B3\" class=\"head\"> PALLI PARVAI OBSERVATION REPORT</ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <div  style=\"border-radius:10px;margin:10px;background-color: #fff;\">\r\n    <ion-row *ngIf=\"!noData\">\r\n      <ion-col size=\"9\" style=\"font-size:12px\" class=\"head\"> Targeted No.of Classroom Visits:</ion-col>\r\n      <ion-col size=\"3\" style=\"font-size:20px;color:#8B67B3\" class=\"sub-head\"> {{this.classTarget?.class_target}}</ion-col>\r\n    </ion-row>\r\n  </div>\r\n  \r\n  <div  style=\"border-radius:10px;margin:10px;background-color: #fff;\">\r\n    <ion-row *ngIf=\"!noData\">\r\n      <ion-col size=\"9\" style=\"font-size:12px\" class=\"head\"> No. of Classroom Visits completed:</ion-col>\r\n      <ion-col size=\"3\" style=\"font-size:20px;color:#8B67B3\" class=\"sub-head\">{{this.classTarget?.observed_class}}</ion-col>      \r\n    </ion-row>\r\n  </div>\r\n  \r\n  <div  style=\"border-radius:10px;margin:10px;background-color: #fff;\">\r\n    <ion-item lines=\"none\">      \r\n      <ion-label  >Select Month</ion-label>          \r\n    </ion-item>      \r\n      <ion-item lines=\"none\" class=\"item-style item-border\">        \r\n          <ion-list  style=\"display:flex;width:100%;border-bottom: 5px solid #8b67b3;\" >\r\n          <ion-icon style=\"padding-top:5px\" class=\"fs-30\" name=\"calendar\" color=\"primary\" ></ion-icon>                                                    \r\n          <ion-datetime  displayFormat=\"MMM - YYYY\"  min=\"2022-06-01\" [max]=\"setMaxDate\" [(ngModel)]=\"this.selectedMonth\" (ionChange)=\"getHODInspection()\"\tplaceholder=\"Start\"></ion-datetime>                    \r\n          <ion-icon src=\"../assets/icons/sort-solid.svg\" style=\"padding-top:6px;width:25px;vertical-align: text-top;font-size: 28px;margin-left: 50%;\"></ion-icon>\r\n        </ion-list>    \r\n    </ion-item>\r\n   </div> \r\n\r\n    \r\n\r\n    <ion-row *ngIf=\"dateSelected==true\">\r\n      <ion-col id=\"month\" size=\"12\" class=\"head\">\r\n        <ion-label id=\"month\" position=\"floating\">Selected Month</ion-label>\r\n        <ion-label position=\"floating\">{{this.selectedMonthAndYear}}</ion-label>\r\n        \r\n      </ion-col>\r\n    </ion-row>      \r\n    \r\n  \r\n    \r\n    <div style=\"padding-left: 13px;\r\n    padding-right: 13px;padding-top: 10px;\" *ngIf=\"!noData\">\r\n      <ion-row style=\"padding-top: 5px;background: #8B67B3;color:white;\r\n  padding-bottom: 5px;border-radius: 5px;\">\r\n        <ion-col size=\"1\" class=\"m-auto\" style=\"text-align:center;font-weight: bold;\">\r\n          #\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"m-auto\" style=\"text-align:center;font-weight: bold;\">\r\n          Inspection Date\r\n        </ion-col>        \r\n        <ion-col size=\"3\" class=\"m-auto\" style=\"text-align:center;font-weight: bold;\">\r\n          School Name\r\n        </ion-col>      \r\n        <ion-col size=\"2\" class=\"m-auto\" style=\"text-align:center;font-weight: bold;\">\r\n          Class \r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"m-auto\" style=\"text-align:center;font-weight: bold;\">          \r\n            Download\r\n        </ion-col>        \r\n      </ion-row>\r\n    </div>\r\n  \r\n    <div *ngFor=\"let data of hoddata; let i = index;\" style=\"padding-left: 13px;\r\n  padding-right: 13px;\">\r\n      <ion-row [ngClass]=\"(i % 2 == 0) ? 'color1' : 'color2'\" style=\"padding-top: 5px;\r\n  padding-bottom: 5px;border-radius: 5px;font-size: 12px\" >\r\n       <ion-col size=\"1\" class=\"m-auto\" style=\"text-align:center\">\r\n        {{i+1}}\r\n      </ion-col>\r\n        <ion-col size=\"3\" class=\"m-auto\" style=\"text-align:center\">\r\n          {{data.inspection_date}}\r\n        </ion-col>        \r\n        <ion-col size=\"3\" class=\"m-auto text-center\" style=\"text-align:center\">\r\n          {{data.school_name}}\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"m-auto text-center\" style=\"text-align:center\">\r\n          {{data.class_observed}}\r\n        </ion-col>\r\n        <ion-col size=\"3\"  >\r\n          <ion-item lines=\"none\" (click) = \"downloadInspection(i)\">\r\n            <ion-icon  color=\"primary\" style=\"text-align:center;padding-left:10px\" name=\"download\"></ion-icon>\r\n          </ion-item>\r\n        </ion-col>        \r\n        \r\n      </ion-row>   \r\n  </div>\r\n</div> \r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_menus_inspection-report_inspectionreport_inspection-report_module_ts-es5.js.map