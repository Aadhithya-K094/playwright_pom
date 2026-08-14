(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vocational-intern_vocational-question-form_vocational-question-form_module_ts"], {
    /***/
    74319:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form-routing.module.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VocationalQuestionFormPageRoutingModule": function VocationalQuestionFormPageRoutingModule() {
          return (
            /* binding */
            _VocationalQuestionFormPageRoutingModule
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


      var _vocational_question_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vocational-question-form.page */
      5579);

      var routes = [{
        path: '',
        component: _vocational_question_form_page__WEBPACK_IMPORTED_MODULE_0__.VocationalQuestionFormPage
      }];

      var _VocationalQuestionFormPageRoutingModule = /*#__PURE__*/_createClass(function VocationalQuestionFormPageRoutingModule() {
        _classCallCheck(this, VocationalQuestionFormPageRoutingModule);
      });

      _VocationalQuestionFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VocationalQuestionFormPageRoutingModule);
      /***/
    },

    /***/
    39364:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.module.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VocationalQuestionFormPageModule": function VocationalQuestionFormPageModule() {
          return (
            /* binding */
            _VocationalQuestionFormPageModule
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


      var _vocational_question_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vocational-question-form-routing.module */
      74319);
      /* harmony import */


      var _vocational_question_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vocational-question-form.page */
      5579);

      var _VocationalQuestionFormPageModule = /*#__PURE__*/_createClass(function VocationalQuestionFormPageModule() {
        _classCallCheck(this, VocationalQuestionFormPageModule);
      });

      _VocationalQuestionFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _vocational_question_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.VocationalQuestionFormPageRoutingModule],
        declarations: [_vocational_question_form_page__WEBPACK_IMPORTED_MODULE_1__.VocationalQuestionFormPage]
      })], _VocationalQuestionFormPageModule);
      /***/
    },

    /***/
    5579:
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.page.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VocationalQuestionFormPage": function VocationalQuestionFormPage() {
          return (
            /* binding */
            _VocationalQuestionFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_vocational_question_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vocational-question-form.page.html */
      9335);
      /* harmony import */


      var _vocational_question_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vocational-question-form.page.scss */
      17428);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _VocationalQuestionFormPage = /*#__PURE__*/function () {
        function VocationalQuestionFormPage(router, route, userService, userSessionService, datePipe, alertservice) {
          _classCallCheck(this, VocationalQuestionFormPage);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.userSessionService = userSessionService;
          this.datePipe = datePipe;
          this.alertservice = alertservice;
          this.userName = this.userSessionService.emis_username();
          var current_date = new Date();
          this.currentDate = this.datePipe.transform(current_date, 'yyyy-MM-dd');
        }

        return _createClass(VocationalQuestionFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              _this.industryDet = JSON.parse(params['data']);
              _this.alldata = JSON.parse(params['alldata']);
              _this.selectedDate = JSON.parse(params['selectedDate']);
              _this.vocationalId = _this.industryDet.id;
              console.log(_this.industryDet, _this.alldata);
            });
            this.questionGet();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.questionGet();
          }
        }, {
          key: "questionGet",
          value: function questionGet() {
            var _this2 = this;

            this.reason = null;
            this.questionList = [];
            this.userService.baseQuestionGet().subscribe(function (res) {
              if (res.dataStatus) {
                _this2.questionList = res.result;

                if (_this2.questionList) {
                  _this2.questionList = _this2.questionList.filter(function (x) {
                    return x.language == 1;
                  });

                  _this2.questionList.forEach(function (element) {
                    element.selectedQuesId = null;
                  });

                  _this2.calldataAPI();
                }
              }
            });
          }
        }, {
          key: "calldataAPI",
          value: function calldataAPI() {
            var _this3 = this;

            var data = {
              'selectedDate': this.selectedDate,
              'vocIndexId': this.vocationalId
            };
            this.insertValue = [];
            this.showSubmit = true;
            this.userService.VOCFormGet(data).subscribe(function (res) {
              if (res.dataStatus) {
                _this3.insertValue = res.result;
                _this3.showSubmit = false;

                if (_this3.questionList) {
                  for (var i = 0; i < _this3.questionList.length; i++) {
                    for (var j = 0; j < _this3.insertValue.length; j++) {
                      if (_this3.questionList[i].id == _this3.insertValue[j].answer_id) {
                        _this3.questionList[i].selectedQuesId = 1;
                        _this3.reason = _this3.insertValue[j].recommendation;
                      }
                    }
                  }
                }
              } else {
                _this3.showSubmit = true;
              }

              if (_this3.currentDate < _this3.selectedDate || _this3.currentDate > _this3.selectedDate) {
                _this3.showSubmit = false;
              }
            });
          }
        }, {
          key: "selectedQuesId",
          value: function selectedQuesId(data, index) {
            for (var i = 0; i < this.questionList.length; i++) {
              if (this.questionList[i].ques_id == data.ques_id) {
                this.questionList[i].selectedQuesId = null;
              }
            }

            this.questionList[index].selectedQuesId = 1;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/tabs/vocational-industry-detail"], {
              queryParams: {
                'data': JSON.stringify(this.alldata)
              }
            });
          }
        }, {
          key: "onKeyup",
          value: function onKeyup(event, i) {
            console.log(event.target.value, "event");
            this.reason = event.target.value;
            this.questionList[i].selectedQuesId = 1;
          }
        }, {
          key: "save",
          value: function save() {
            var _this4 = this;

            this.finalrecords = [];
            this.finalData = this.questionList.filter(function (x) {
              return x.selectedQuesId == 1;
            });
            console.log(this.finalData, "final");

            if (this.finalData.length == 11) {
              if (this.reason != '' && this.reason != null && this.reason != undefined) {} else {
                this.alertservice.error('Please enter the recommndation');
              }
            } else if (this.finalData.length == 12) {
              if (this.reason != '' && this.reason != null && this.reason != undefined) {
                //save api
                this.alertservice.success('Success');
                this.finalrecords = this.finalData.map(function (item) {
                  return {
                    'id': "",
                    'voc_index_id': _this4.vocationalId,
                    'quesId': item.ques_id == '0' ? item.id : item.ques_id,
                    'answerId': item.id,
                    'recommendation': item.id == '43' ? _this4.reason : item.id == '86' ? _this4.reason : '',
                    'statusBy': _this4.userName,
                    'entry_date': _this4.selectedDate,
                    'isactive': 1
                  };
                });
                console.log(this.finalrecords, "this.finalrecords");
                this.userService.VOCFormCud({
                  "records": this.finalrecords
                }).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this4.alertservice.success('Form Submitted Successfully');

                    _this4.goBack();
                  } else {
                    _this4.alertservice.error('Please check the filled data');
                  }
                });
              } else {
                this.alertservice.error('Please enter the recommndation');
              }
            } else {
              this.alertservice.error('Please Select the missing fields');
            }
          }
        }]);
      }();

      _VocationalQuestionFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }];
      };

      _VocationalQuestionFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-vocational-question-form',
        template: _raw_loader_vocational_question_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vocational_question_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VocationalQuestionFormPage);
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
            var _this5 = this;

            this.apiService.languageInfo.subscribe(function (data) {
              _this5.languageType = data;

              _this5._translate.use(_this5.languageType);

              _this5._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this6 = this;

            this._translate.get("ok").subscribe(function (res) {
              _this6.ok = res;
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            var alertInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: alertInfo,
                      message: message,
                      buttons: [{
                        text: this.ok
                      }]
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "toast",
          value: function toast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var toast;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.toastController.create({
                      message: message,
                      duration: 2000,
                      color: 'success'
                    });

                  case 1:
                    toast = _context2.v;
                    toast.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "customtoast",
          value: function customtoast(message, time) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var toast;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.toastController.create({
                      message: message,
                      duration: time
                    });

                  case 1:
                    toast = _context3.v;
                    toast.present();

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var toast;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.toastController.create({
                      message: message,
                      color: 'danger',
                      duration: 2000
                    });

                  case 1:
                    toast = _context4.v;
                    toast.present();

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "alertWhite",
          value: function alertWhite(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      message: message,
                      buttons: ['OK']
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
          key: "alertToTurnOnPermission",
          value: function alertToTurnOnPermission(headerMsg, message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this7 = this;

              var alert;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
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
                          _this7.diagnostic.switchToSettings();
                        }
                      }],
                      backdropDismiss: false
                    });

                  case 1:
                    alert = _context6.v;
                    _context6.n = 2;
                    return alert.present();

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
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
    17428:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.page.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bg-clr {\n  background-color: #f4eaff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvY2F0aW9uYWwtcXVlc3Rpb24tZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InZvY2F0aW9uYWwtcXVlc3Rpb24tZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctY2xye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZWFmZjtcclxuICAgIC8vIGNvbG9yOiBibGFjaztcclxufSJdfQ== */";
      /***/
    },

    /***/
    9335:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vocational-intern/vocational-question-form/vocational-question-form.page.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Form Details</ion-title>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-align ion-card-margin\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"Div_style\">\r\n        <div class=\"card-text text-center\">\r\n          <ion-label class=\"schoolnames ion-card-margin-top-bottom\"><b>Monitoring Visit - Question</b></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"cards ion-card-clr bg-clr\" *ngIf=\"questionList.length > 0\">\r\n      <ng-container *ngFor=\"let item1 of questionList;let i=index;\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"Div_style\">\r\n            <ion-label class=\"schoolnames head\" *ngIf=\"item1.ques_id == 0\"><b>{{item1.ques_no}} . {{item1.name}} <span style=\"color: red;\">*</span></b></ion-label>\r\n            <div class=\"Div_style\" style=\"padding-left: 40px;\" *ngIf=\"item1.ques_id != 0\">\r\n              <!-- Bind a separate selected value for each question -->\r\n              <ion-radio-group [(ngModel)]=\"item1.selectedQuesId\" [disabled]=\"insertValue.length > 0\">\r\n                <ion-item lines=\"none\" class=\"item-style ml-2\" style=\"font-size: 12px;\">\r\n                  <ion-radio [value]=\"item1.selectedQuesId\" class=\"item1.id\" (click)=\"selectedQuesId(item1,i)\" [disabled]=\"insertValue.length > 0\"></ion-radio>\r\n                  <span class=\"radio\">{{item1.name}}</span>\r\n                </ion-item>\r\n              </ion-radio-group>\r\n            </div>\r\n            <div class=\"Div_style mt-2\" style=\"padding-left: 40px;margin-bottom: 10px;\" *ngIf=\"(item1.id == '43' || item1.id == '86')\">\r\n              <ion-label class=\"schoolnames head\" >\r\n                <ion-item>\r\n                  <ion-input\r\n                    #other\r\n                    autofocus=\"true\"\r\n                    placeholder=\"Enter the Recommendation\"\r\n                    required=\"true\"\r\n                    (keyup)=\"onKeyup($event,i)\"\r\n                    value=\"{{this.reason}}\"\r\n                    [disabled]=\"insertValue.length > 0\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n                <!-- <div class=\"error errorMessage\" *ngIf=\"showInput && showErrorMessage\">\r\n                  Please type the reason for mismatch\r\n                </div> -->\r\n              </ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ng-container>\r\n\r\n      <ion-row *ngIf=\"showSubmit\">\r\n        <ion-col size=\"12\" style=\"text-align: center; margin-top: 10px;\">\r\n          <div style=\"text-align: center;\" (click)=\"save()\" >\r\n            <button class=\"btn\" style=\"background-color: #8B67B3; border-radius: 10px;color: white;\">Submit</button>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card>\r\n  \r\n  \r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vocational-intern_vocational-question-form_vocational-question-form_module_ts-es5.js.map