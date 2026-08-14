(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837"], {
    /***/
    98747:
    /*!*****************************************************************!*\
      !*** ./src/app/components/apiErrorLog/apiErrorLog.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiErrorLogComponent": function ApiErrorLogComponent() {
          return (
            /* binding */
            _ApiErrorLogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_apiErrorLog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./apiErrorLog.component.html */
      70074);
      /* harmony import */


      var _apiErrorLog_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./apiErrorLog.component.scss */
      49921);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _ApiErrorLogComponent = /*#__PURE__*/function () {
        function ApiErrorLogComponent(navParams, modalController, userSessionService, _alerService, _apiService, _translate) {
          _classCallCheck(this, ApiErrorLogComponent);

          this.navParams = navParams;
          this.modalController = modalController;
          this.userSessionService = userSessionService;
          this._alerService = _alerService;
          this._apiService = _apiService;
          this._translate = _translate;
          this.viewName = [];
          this.schoolList = [];
          this.reasonList = [];
          this.mediumList = [];
          this.randomQuestionList = [];
          this.attemptedPercentageValue = Math.round(9 / 10 * 100);
          this.attemptedProgress = Math.round(9 / 10 * 100);
          this.correctedProgress = Math.round(7 / 10 * 100);
          this.percentage = Math.round(7 / 10 * 100);
          this.percentageValue = Math.round(7 / 10 * 100);
        }

        return _createClass(ApiErrorLogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.viewName = JSON.parse(localStorage.getItem('Error'));
                    console.log(this.viewName); // this.attemptedProgress = Number(this.viewName.attempted_words) / Number(this.viewName.book_total_words);
                    // this.correctedProgress = Number(this.viewName.correct_words) / Number(this.viewName.book_total_words);
                    // this.percentage = Number(this.viewName.correct_words) / Number(this.viewName.book_total_words);
                    // this.attemptedPercentageValue = Number(this.viewName.correct_words) / Number(this.viewName.attempted_words);
                    // this.percentageValue = Math.round(this.percentage*100);
                    // this.attemptedPercentage = Math.round(this.attemptedPercentageValue*100);

                    this._apiService.languageInfo.subscribe(function (data) {
                      _this.languageType = data;

                      _this._translate.use(_this.languageType);

                      _this._initialiseTranslation();

                      switch (_this.languageType) {
                        case "en":
                          _this.reasonList = _this.reasonList.filter(function (sr) {
                            return sr.language_id == 2;
                          });
                          break;

                        case "ta":
                          _this.reasonList = _this.reasonList.filter(function (sr) {
                            return sr.language_id == 1;
                          });

                        default:
                          break;
                      }
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this2 = this;

            this._translate.get("selectInstruction").subscribe(function (res) {
              _this2.selectInstruction = res;
            });

            this._translate.get("ReasonAssessing").subscribe(function (res) {
              _this2.ReasonAssessing = res;
            });

            this._translate.get("studentIdentify").subscribe(function (res) {
              _this2.studentIdentify = res;
            });

            this._translate.get("chooseMedium").subscribe(function (res) {
              _this2.chooseMedium = res;
            });

            this._translate.get("ok").subscribe(function (res) {
              _this2.ok = res;
            });

            this._translate.get("cancel").subscribe(function (res) {
              _this2.cancel = res;
            });

            this._translate.get("submit").subscribe(function (res) {
              _this2.submit = res;
            });
          }
        }, {
          key: "mySelectHandler",
          value: function mySelectHandler(event) {}
        }, {
          key: "selectReason",
          value: function selectReason(reason, index) {
            this.selectedReason = reason;
          }
        }, {
          key: "dismiss",
          value: function dismiss(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var submittedData, studentReason;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    submittedData = data;

                    if (!(submittedData != "Cancel" && this.viewName == "view1")) {
                      _context2.n = 4;
                      break;
                    }

                    if (!(this.selectedReason != undefined)) {
                      _context2.n = 2;
                      break;
                    }

                    studentReason = {
                      student_emisid: this.studentDetail.id,
                      student_name: this.studentDetail.name,
                      reason: this.selectedReason.reason,
                      description: "Reason for not assessing student"
                    };
                    _context2.n = 1;
                    return this.modalController.dismiss(studentReason);

                  case 1:
                    _context2.n = 3;
                    break;

                  case 2:
                    this._alerService.showAlert("Please check any one");

                  case 3:
                    _context2.n = 5;
                    break;

                  case 4:
                    _context2.n = 5;
                    return this.modalController.dismiss(submittedData);

                  case 5:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }]);
      }();

      _ApiErrorLogComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
        }];
      };

      _ApiErrorLogComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-apiErrorLog",
        template: _raw_loader_apiErrorLog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_apiErrorLog_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ApiErrorLogComponent);
      /***/
    },

    /***/
    79615:
    /*!***********************************************************!*\
      !*** ./src/app/components/emimodal/emimodal.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmimodalComponent": function EmimodalComponent() {
          return (
            /* binding */
            _EmimodalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_emimodal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./emimodal.component.html */
      62040);
      /* harmony import */


      var _emimodal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./emimodal.component.scss */
      67841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);

      var _EmimodalComponent = /*#__PURE__*/function () {
        function EmimodalComponent(modalController, navParams, _alerService, _apiService, _translate) {
          _classCallCheck(this, EmimodalComponent);

          this.modalController = modalController;
          this._alerService = _alerService;
          this._apiService = _apiService;
          this._translate = _translate;
          this.listedValue = navParams.get("listedValue");
          this.actualValue = navParams.get("actualValue");
          this.divisionType = navParams.get("divisionType");
          this.correction = navParams.get("correction");
          this.showCategory = navParams.get("showCategory");
        }

        return _createClass(EmimodalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.appLanguage();
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this3 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this3.languageType = data;

              _this3._translate.use(_this3.languageType);

              _this3._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this4 = this;

            this._translate.get("correctionIn").subscribe(function (res) {
              _this4.correctionIn = res;
            });

            this._translate.get("listed_Value").subscribe(function (res) {
              _this4.listed_Value = res;
            });

            this._translate.get("actual_Value").subscribe(function (res) {
              _this4.actual_Value = res;
            });

            this._translate.get("cancel").subscribe(function (res) {
              _this4.cancel = res;
            });

            this._translate.get("submit").subscribe(function (res) {
              _this4.submit = res;
            });

            this._translate.get("chooseItem").subscribe(function (res) {
              _this4.chooseItem = res;
            });
          }
        }, {
          key: "mySelectHandler",
          value: function mySelectHandler(selectedValue) {
            this.selectedValue = selectedValue;
          }
        }, {
          key: "dismiss",
          value: function dismiss(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var correctedValue;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (!(data != "Cancel")) {
                      _context3.n = 4;
                      break;
                    }

                    correctedValue = data;

                    if (!(correctedValue != undefined)) {
                      _context3.n = 2;
                      break;
                    }

                    _context3.n = 1;
                    return this.modalController.dismiss(correctedValue);

                  case 1:
                    _context3.n = 3;
                    break;

                  case 2:
                    this._alerService.showAlert(null, "Please fill the actual value");

                  case 3:
                    _context3.n = 5;
                    break;

                  case 4:
                    _context3.n = 5;
                    return this.modalController.dismiss(data);

                  case 5:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _EmimodalComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
        }];
      };

      _EmimodalComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-emimodal",
        template: _raw_loader_emimodal_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_emimodal_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EmimodalComponent);
      /***/
    },

    /***/
    26463:
    /*!***************************************************************************************!*\
      !*** ./src/app/components/observationfinalremark/observationfinalremark.component.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationfinalremarkComponent": function ObservationfinalremarkComponent() {
          return (
            /* binding */
            _ObservationfinalremarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_observationfinalremark_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./observationfinalremark.component.html */
      64070);
      /* harmony import */


      var _observationfinalremark_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observationfinalremark.component.scss */
      11556);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);

      var _ObservationfinalremarkComponent = /*#__PURE__*/function () {
        function ObservationfinalremarkComponent(modalController, _apiService, navParams, _translate, _router) {
          _classCallCheck(this, ObservationfinalremarkComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this._translate = _translate;
          this._router = _router;
          this.showTextarea = false;
          this.submitted = false;
          this.remarks = ''; // this.teacherDetails = navParams.get("teacherDetails");
        }

        return _createClass(ObservationfinalremarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this5.languageType = data;

              _this5._translate.use(_this5.languageType);

              _this5._initialiseTranslation();
            });

            this.showTextarea = false;
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this6 = this;

            this._translate.get("didDiscuss").subscribe(function (res) {
              _this6.didDiscuss = res;
            });

            this._translate.get("submit").subscribe(function (res) {
              _this6.submit = res;
            });

            this._translate.get("yes").subscribe(function (res) {
              _this6.yes = res;
            });

            this._translate.get("no").subscribe(function (res) {
              _this6.no = res;
            });

            this._translate.get("giveReason").subscribe(function (res) {
              _this6.giveReason = res;
            });
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var onClosedData, body1;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    localStorage.setItem("finalobserverfeedbacks", this.remarks);
                    onClosedData = "Wrapped Up!";
                    body1 = document.getElementsByTagName("ion-modal")[0];
                    body1.classList.remove("new-info");
                    _context4.n = 1;
                    return this.modalController.dismiss(this.remarks);

                  case 1:
                    this.showTextarea = false; // this._router.navigate(["/tnvntabs/page-route/index", { queryParams: { "pre_obs_qns_section_status": localStorage.setItem("pre_obs_qns_section_status", "1")}}])

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getRemarks",
          value: function getRemarks(remarks) {
            this.remarks = remarks;
          }
        }, {
          key: "addClass",
          value: function addClass() {
            this._apiService.setName("showText");
          }
        }]);
      }();

      _ObservationfinalremarkComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }];
      };

      _ObservationfinalremarkComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-observationfinalremark',
        template: _raw_loader_observationfinalremark_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observationfinalremark_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ObservationfinalremarkComponent);
      /***/
    },

    /***/
    69564:
    /*!*********************************************************!*\
      !*** ./src/app/services/tnvn/services/alert.service.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AlertService": function AlertService() {
          return (
            /* binding */
            _AlertService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      65481);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      34255);

      var _AlertService = /*#__PURE__*/function () {
        function AlertService(alertController, apiService, _translate, toastController, diagnostic) {
          _classCallCheck(this, AlertService);

          this.alertController = alertController;
          this.apiService = apiService;
          this._translate = _translate;
          this.toastController = toastController;
          this.diagnostic = diagnostic;
          this.appLanguage();
        }

        return _createClass(AlertService, [{
          key: "appLanguage",
          value: function appLanguage() {
            var _this7 = this;

            this.apiService.languageInfo.subscribe(function (data) {
              _this7.languageType = data;

              _this7._translate.use(_this7.languageType);

              _this7._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this8 = this;

            this._translate.get("ok").subscribe(function (res) {
              _this8.ok = res;
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            var alertInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.alertController.create({
                      header: alertInfo,
                      message: message,
                      buttons: [{
                        text: this.ok
                      }]
                    });

                  case 1:
                    alert = _context5.v;
                    _context5.n = 2;
                    return alert.present();

                  case 2:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "toast",
          value: function toast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var toast;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      color: 'success'
                    });

                  case 1:
                    toast = _context6.v;
                    toast.present();

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "customtoast",
          value: function customtoast(message, time) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var toast;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return this.toastController.create({
                      message: message,
                      duration: time
                    });

                  case 1:
                    toast = _context7.v;
                    toast.present();

                  case 2:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "info",
          value: function info(message) {
            this.toast(message);
          }
        }, {
          key: "custommessage",
          value: function custommessage(message, time) {
            this.customtoast(message, time);
          }
        }, {
          key: "warning",
          value: function warning(message) {
            this.toast(message);
          }
        }, {
          key: "success",
          value: function success(message) {
            var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.toast(message);
          }
        }, {
          key: "alert",
          value: function alert(message) {
            this.toast(message);
          }
        }, {
          key: "error",
          value: function error(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var toast;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.toastController.create({
                      message: message,
                      color: 'danger',
                      duration: 2000
                    });

                  case 1:
                    toast = _context8.v;
                    toast.present();

                  case 2:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "alertWhite",
          value: function alertWhite(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var alert;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    _context9.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      message: message,
                      buttons: ['OK']
                    });

                  case 1:
                    alert = _context9.v;
                    _context9.n = 2;
                    return alert.present();

                  case 2:
                    return _context9.a(2);
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "alertToTurnOnPermission",
          value: function alertToTurnOnPermission(headerMsg, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var _this9 = this;

              var alert;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    _context0.n = 1;
                    return this.alertController.create({
                      header: "Need ".concat(headerMsg, " Permission"),
                      message: "This app need to access ".concat(message, " in order to use this feature. Go to settings and turn on ").concat(message, " permission manually."),
                      buttons: [{
                        text: 'Cancel',
                        cssClass: 'alert-btn alert-cancel-btn',
                        handler: function handler() {}
                      }, {
                        text: 'Go to settings',
                        cssClass: 'alert-btn alert-yes-btn',
                        handler: function handler() {
                          _this9.diagnostic.switchToSettings();
                        }
                      }],
                      backdropDismiss: false
                    });

                  case 1:
                    alert = _context0.v;
                    _context0.n = 2;
                    return alert.present();

                  case 2:
                    return _context0.a(2);
                }
              }, _callee0, this);
            }));
          }
        }]);
      }();

      _AlertService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_1__.Diagnostic
        }];
      };

      _AlertService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: "root"
      })], _AlertService);
      /***/
    },

    /***/
    49921:
    /*!*******************************************************************!*\
      !*** ./src/app/components/apiErrorLog/apiErrorLog.component.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".progress {\n  background-color: none;\n}\n\n.last-row {\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  line-height: 1.5;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaUVycm9yTG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUFDSjs7QUFDQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoiYXBpRXJyb3JMb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG59XHJcbi5sYXN0LXJvd3sgIFxyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7ICAgIFxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    67841:
    /*!*************************************************************!*\
      !*** ./src/app/components/emimodal/emimodal.component.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".myModal {\n  width: auto !important;\n  margin: 0 auto;\n  bottom: auto !important;\n  bottom: initial !important;\n  max-height: none !important;\n  max-height: initial !important;\n  height: auto !important;\n  min-height: 0 !important;\n  min-height: initial !important;\n}\n.myModal ion-content {\n  position: relative;\n  bottom: auto;\n  bottom: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFBQSwwQkFBQTtFQUVBLDJCQUFBO0VBQUEsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQUEsOEJBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQUEsZUFBQTtBQUFSIiwiZmlsZSI6ImVtaW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15TW9kYWx7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3R0b206IGluaXRpYWwgIWltcG9ydGFudDtcclxuXHJcbiAgICBtYXgtaGVpZ2h0OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuXHJcbiAgICBpb24tY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiBpbml0aWFsO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    11556:
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/observationfinalremark/observationfinalremark.component.scss ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-area {\n  border: 2px solid;\n  min-height: 250px;\n  font-size: 18px;\n  min-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uZmluYWxyZW1hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJvYnNlcnZhdGlvbmZpbmFscmVtYXJrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYXJlYSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    70074:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/apiErrorLog/apiErrorLog.component.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>  \r\n  <div >\r\n    <ion-icon name=\"close-circle\" style=\"float: right;font-size:30px\" (click)=\"dismiss(ok)\"></ion-icon>\r\n  </div>\r\n  <div style=\"text-align: center;margin: 10px;\">     \r\n    <ion-text >\r\n      <div [innerHTML]=\"viewName.error\"></div>\r\n    </ion-text>\r\n  </div>\r\n  <div  class=\"d-flex justify-content-center\">      \r\n    <ion-button class=\"btn_modal-success\" (click)=\"dismiss('ok')\"\r\n      [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-11': this.languageType == 'ta','modal-btn-w-50': this.languageType == 'ta'}\">\r\n      ok</ion-button>\r\n  </div>   \r\n</ion-content>";
      /***/
    },

    /***/
    62040:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/emimodal/emimodal.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">              \r\n      <p>{{this.correctionIn}} {{correction!= 'undefined'? this.showCategory:'None'}}</p>\r\n    </ion-text>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label><span [ngClass]=\"{'ta-font': this.languageType === 'ta'}\"> {{this.listed_Value}}</span> :<br>{{listedValue}} </ion-label>              \r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label><span [ngClass]=\"{'ta-font': this.languageType === 'ta'}\">{{this.actual_Value}}</span> : <br>                  \r\n        <div *ngIf=\"!(divisionType === 'teacher_count' || divisionType === 'student_count' || divisionType === 'count')\" class=\"select_box\">\r\n          <select ngModel (ngModelChange)=\"mySelectHandler($event)\">\r\n            <option value=\"\" disabled selected hidden>{{this.chooseItem}}</option>                    \r\n            <option *ngFor=\"let data of actualValue\" [ngValue]=\"data\">{{data.item}}</option>      \r\n          </select>\r\n        </div>\r\n        <div  *ngIf=\"(divisionType === 'teacher_count' || divisionType === 'student_count' || divisionType === 'count')\" class=\"input-icons\">\r\n          <input type=\"number\" name=\"lname\" class=\"w-100\" [(ngModel)]=\"this.selectedValue\" [placeholder]=\"this.actual_Value\"/>                  \r\n        </div>\r\n        </ion-label>\r\n      </ion-item>\r\n      \r\n    </ion-list>\r\n    <div class=\"d-flex justify-content-center\">\r\n      <ion-button class=\"btn_modal-cancel\" (click)=\"dismiss('Cancel')\"  [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">{{this.cancel}}</ion-button>\r\n      <ion-button  class=\"btn_modal-success\" (click)=\"dismiss(this.selectedValue)\"  [ngClass]=\"{'ta-font': this.languageType === 'ta','fs-11': this.languageType === 'ta','modal-btn-w-50': this.languageType === 'ta'}\">{{this.submit}}</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    64070:
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/observationfinalremark/observationfinalremark.component.html ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"modalcontent-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p> \r\n        <span\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType === 'ta',\r\n            'fs-9': this.languageType === 'ta'\r\n          }\"\r\n          ><b>Observer Final Feedbacks (if any)</b></span\r\n        >\r\n      </p>\r\n    </ion-text>\r\n   \r\n    <div class=\"text-center\">\r\n      \r\n        <textarea auto-grow=\"true\" placeholder=\"Enter your feedbacks (max 200 characters)\" class=\"text-area\"\r\n          (change)=\"getRemarks($event.target.value)\" rows=\"6\"></textarea>\r\n      \r\n     \r\n\r\n      <ion-button\r\n        style=\"color:#fff\"        \r\n        (click)=\"dismiss()\"\r\n        class=\"br-30\"\r\n        [ngClass]=\"{\r\n          'ta-font': this.languageType === 'ta',\r\n          'fs-12': this.languageType === 'ta'\r\n        }\"\r\n        ><b>{{ this.submit }}</b></ion-button>\r\n        <ion-text color=\"dark\" class=\"text-italic\">\r\n          <p class=\"fs-12 p-2\"><span>Note</span>:If no feedbacks, click on submit to proceed</p>\r\n        </ion-text>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_components_apiErrorLog_apiErrorLog_component_ts-src_app_components_emimodal_e-514837-es5.js.map