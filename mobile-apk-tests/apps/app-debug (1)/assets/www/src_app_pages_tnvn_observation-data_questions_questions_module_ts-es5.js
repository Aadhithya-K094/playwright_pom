(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-data_questions_questions_module_ts"], {
    /***/
    13854:
    /*!*********************************************************************!*\
      !*** ./src/app/components/ui-components/ui-components.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UiComponentsComponent": function UiComponentsComponent() {
          return (
            /* binding */
            _UiComponentsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ui_components_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ui-components.component.html */
      90241);
      /* harmony import */


      var _ui_components_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ui-components.component.scss */
      96901);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);

      var _UiComponentsComponent = /*#__PURE__*/function () {
        function UiComponentsComponent(api, fb, loadingCtrl, router) {
          _classCallCheck(this, UiComponentsComponent);

          this.api = api;
          this.fb = fb;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.extra_field = [];
          this.extra_img = [];
          this.someEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.inputRadio = false;
          this.selectValue = [];
          this.extra_field = [];
        }

        return _createClass(UiComponentsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.presentLoading();
            this.questionForm = this.fb.group({
              question: this.fb.array([])
            });
            this.getQuestions();
            this.txt = this.myQuesResp;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.loadingCtrl.create({
                      message: "",
                      duration: 1000
                    });

                  case 1:
                    this.loading = _context.v;
                    _context.n = 2;
                    return this.loading.present();

                  case 2:
                    return _context.a(2, _context.v);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getQuestions",
          value: function getQuestions() {
            var _this = this;

            this.api.getQuestions().subscribe(function (response) {
              _this.ques = response;

              if (typeof response != "object") {
                _this.ques = JSON.parse(_this.ques);
              }

              _this.ques.forEach(function (res, index) {
                var answer_only = [];

                if (res.type != "5") {
                  res.answers.forEach(function (val) {
                    answer_only.push({
                      ans: val.ans
                    });
                  });

                  var control = _this.questionForm.get("question");

                  control.push(_this.createValue(res, answer_only));
                } else {
                  var _control = _this.questionForm.get("question");

                  _control.push(_this.checkBoxArray(res));
                }

                var nae = res.key;
              });
            });
          }
        }, {
          key: "checkBoxArray",
          value: function checkBoxArray(res) {
            return this.fb.group({
              ques: [res.question],
              type: [res.type],
              answer_key: [res.answers],
              ans: this.fb.array([])
            });
          }
        }, {
          key: "onChange",
          value: function onChange(value, isChecked, index) {
            var answers = this.questionForm.controls["question"]["controls"][index].controls.ans;

            if (isChecked) {
              answers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(value));
            } else {
              var idx = answers.controls.findIndex(function (x) {
                return x.value == value;
              });
              answers.removeAt(idx);
            }
          }
        }, {
          key: "createValue",
          value: function createValue(res, answer_only) {
            return this.fb.group({
              ans: [""],
              ques: [res.question],
              answer_only: [answer_only],
              type: [res.type],
              answer_key: [res.answers]
            });
          }
        }, {
          key: "valueChanges",
          value: function valueChanges(event, name, i) {
            var value;
            value = name.answer_key.filter(function (val) {
              return val.ans == event;
            });
            var control = this.questionForm.get("question");

            if (value.length > 0) {
              if (value[0].next_filed == "freetext") {
                this.extra_field[i] = value[0];
                this.extra_field[i].open = true;
                control.controls[i].addControl("subfield_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl("subfield_value", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""));
              } else if (value[0].next_filed == "img") {
                value[0].open = true;
                this.extra_field[i] = value[0];
                control.controls[i].addControl("subfield_name", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl("subfield_value", new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(""));
              } else {
                value[0].open = false;
                this.extra_field[i] = value[0];
                this.questionForm.removeControl(this.extra_field[i].field_value);
                control.controls[i].removeControl(this.extra_field[i].field_value);
              }
            }
          }
        }, {
          key: "createRadio",
          value: function createRadio(name) {
            var vale = name;
            var val = this.fb.group({
              vale: [""]
            });
            var control = this.questionForm.controls.radio;
            control.push(val);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var records = this.questionForm.value;
            records.question.forEach(function (res) {
              var temp;
              res.answer_key ? delete res.answer_key : "";
              res.answer_only ? delete res.answer_only : "";

              if (res.ans.length > 0 && res.type == 4) {
                var _temp = res.ans.map(function (val) {
                  return val.ans;
                });

                res.ans = _temp;
              }
            });
            this.router.navigate([""]);
          }
        }, {
          key: "onCheckboxChange",
          value: function onCheckboxChange(key, value, isChecked) {
            var answer = this.questionForm.controls[key]["controls"];

            if (isChecked) {
              answer.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(value));
            } else {
              var idx = answer.controls.findIndex(function (x) {
                return x.value == value;
              });
              answer.removeAt(idx);
            }
          }
        }, {
          key: "sendData",
          value: function sendData() {
            var records = this.questionForm.value;
            records.question.forEach(function (res) {
              var temp;
              res.answer_key ? delete res.answer_key : "";
              res.answer_only ? delete res.answer_only : "";

              if (res.ans.length > 0 && res.type == 4) {
                var _temp2 = res.ans.map(function (val) {
                  return val.ans;
                });

                res.ans = _temp2;
              }
            });
            this.someEvent.emit(records);
          }
        }]);
      }();

      _UiComponentsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }];
      };

      _UiComponentsComponent.propDecorators = {
        myQuesResp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ["ques_response"]
        }],
        someEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }]
      };
      _UiComponentsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-ui-components",
        template: _raw_loader_ui_components_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ui_components_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UiComponentsComponent);
      /***/
    },

    /***/
    25292:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/questions/questions.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuestionsPageModule": function QuestionsPageModule() {
          return (
            /* binding */
            _QuestionsPageModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./questions.page */
      343);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      93319);
      /* harmony import */


      var src_app_components_ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/ui-components/ui-components.component */
      13854);

      var routes = [{
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_0__.QuestionsPage
      }];

      var _QuestionsPageModule = /*#__PURE__*/_createClass(function QuestionsPageModule() {
        _classCallCheck(this, QuestionsPageModule);
      });

      _QuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule],
        declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_0__.QuestionsPage, src_app_components_ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_1__.UiComponentsComponent]
      })], _QuestionsPageModule);
      /***/
    },

    /***/
    343:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/questions/questions.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QuestionsPage": function QuestionsPage() {
          return (
            /* binding */
            _QuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./questions.page.html */
      88894);
      /* harmony import */


      var _questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./questions.page.scss */
      88049);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);
      /* harmony import */


      var src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/file-handler/file-handler.service */
      24954);

      var _QuestionsPage = /*#__PURE__*/function () {
        function QuestionsPage(router, loadingCtrl, fb, api, activateRoute, ionicStrorageService, fileService, plt, toast, navCtrl) {
          _classCallCheck(this, QuestionsPage);

          this.router = router;
          this.loadingCtrl = loadingCtrl;
          this.fb = fb;
          this.api = api;
          this.activateRoute = activateRoute;
          this.ionicStrorageService = ionicStrorageService;
          this.fileService = fileService;
          this.plt = plt;
          this.toast = toast;
          this.navCtrl = navCtrl;
          this.extra_field = [];
          this.extra_img = [];
          this.inputRadio = false;
          this.selectValue = [];
          this.curr_template = [];
          this.curr_section = [];
          this.curr_template_with_all_sec = [];
          this.last_saved_data = [];
          this.extra_field = [];
        }

        return _createClass(QuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            console.log('ewerwewerwe');
            this.questionForm = this.fb.group({});
            this.activateRoute.queryParams.subscribe(function (params) {
              if (params.template_list) {
                _this2.template_id = JSON.parse(params.template_list);
              }
            });
            this.getQues();
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.loadingCtrl.create({
                      message: '',
                      duration: 1000
                    });

                  case 1:
                    this.loading = _context2.v;
                    _context2.n = 2;
                    return this.loading.present();

                  case 2:
                    return _context2.a(2, _context2.v);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getLocalData",
          value: function getLocalData() {
            var _this3 = this;

            this.ionicStrorageService.getData('questions').then(function (Response) {
              if (Response) {
                _this3.last_saved_data.question = Response.classroom_observation;

                if (_this3.last_saved_data.hasOwnProperty('question')) {
                  _this3.questionForm.patchValue(_this3.last_saved_data);

                  _this3.questionForm.value.question.forEach(function (value, index) {
                    if (value.type == 3 || value.type == 4) {
                      _this3.valueChanges(value.ans, value, index);
                    }
                  });

                  setTimeout(function () {
                    if (_this3.last_saved_data.hasOwnProperty('question')) {
                      var pedagogy_info = _this3.questionForm.controls['question'];
                      pedagogy_info.patchValue(_this3.last_saved_data.question);
                    }
                  }, 800);
                }
              }
            });
          }
        }, {
          key: "getQuestions",
          value: function getQuestions() {
            var _this4 = this;

            this.api.getQuestions().subscribe(function (response) {
              _this4.ques = response;

              if (typeof response != 'object') {
                _this4.ques = JSON.parse(_this4.ques);
              }

              _this4.ques.forEach(function (res, index) {
                var answer_only = [];

                if (res.type != '5') {
                  res.answers.forEach(function (val) {
                    answer_only.push({
                      'ans': val.ans
                    });
                  });

                  var control = _this4.questionForm.get('question');

                  control.push(_this4.createValue(res, answer_only));
                } else {
                  var _control2 = _this4.questionForm.get('question');

                  _control2.push(_this4.checkBoxArray(res));
                }

                var nae = res.key;
              });
            });
          }
        }, {
          key: "getQues",
          value: function getQues() {
            var _this5 = this;

            if (this.plt.is('cordova')) {
              this.fileService.readFile({
                dir: 'templates',
                file_name: this.template_id
              }).then(function (file) {
                _this5.curr_template = JSON.parse(file);
                _this5.curr_template_with_all_sec = _this5.curr_template;
                _this5.original_template = _this5.curr_template;

                _this5.assignDataAndControl('');
              });
            } else {
              this.api.getAllTemplates().subscribe(function (res) {
                if (res['dataStatus']) {
                  _this5.curr_template = res['records'];
                  _this5.curr_template = _this5.curr_template.filter(function (val) {
                    return val.template_id == _this5.template_id;
                  });
                  _this5.curr_template = _this5.curr_template[0];
                  _this5.original_template = _this5.curr_template;
                  _this5.curr_template_with_all_sec = _this5.curr_template;

                  _this5.assignDataAndControl('');
                }
              });
            }
          }
        }, {
          key: "assignDataAndControl",
          value: function assignDataAndControl(section_value) {
            var _this6 = this;

            this.questionForm.addControl('question', this.fb.array([]));
            this.curr_template = this.curr_template_with_all_sec.questions.filter(function (val) {
              return val.section == '4';
            });
            this.curr_template.forEach(function (res) {
              var temp = JSON.parse(res.ques_ans_json);
              res.ques_ans_json = temp;
            });
            this.ques = this.curr_template;
            this.ques.forEach(function (res, index) {
              var answer_only = [];

              if (res.ques_ans_json.type != '5') {
                res.ques_ans_json.answers.forEach(function (val) {
                  answer_only.push({
                    'ans': val.ans
                  });
                });

                var control = _this6.questionForm.get('question');

                control.push(_this6.createValue(res.ques_ans_json, answer_only));
              } else {
                var _control3 = _this6.questionForm.get('question');

                _control3.push(_this6.checkBoxArray(res.ques_ans_json));
              }

              var nae = res.key;
            });
            this.getLocalData();
          }
        }, {
          key: "checkBoxArray",
          value: function checkBoxArray(res) {
            return this.fb.group({
              ques: [res.question],
              type: [res.type],
              answer_key: [res.answers],
              ans: this.fb.array([])
            });
          }
        }, {
          key: "onChange",
          value: function onChange(value, isChecked, index) {
            var answers = this.questionForm.controls['question']['controls'][index].controls.ans;

            if (isChecked) {
              answers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(value, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])));
            } else {
              var idx = answers.controls.findIndex(function (x) {
                return x.value == value;
              });
              answers.removeAt(idx);
            }
          }
        }, {
          key: "createValue",
          value: function createValue(res, answer_only) {
            return this.fb.group({
              ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
              ques: [res.question],
              answer_only: [answer_only],
              type: [res.type],
              answer_key: [res.answers]
            });
          }
        }, {
          key: "createRadio",
          value: function createRadio(name) {
            var vale = name;
            var val = this.fb.group({
              vale: ['']
            });
            var control = this.questionForm.controls.radio;
            control.push(val);
          }
        }, {
          key: "getValue",
          value: function getValue(value) {
            this.data = value;
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this7 = this;

            formGroup.controls.question['controls'].forEach(function (formArray, index) {
              Object.keys(formArray.controls).forEach(function (field) {
                var control = formGroup.controls.question['controls'][index].get(field);

                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                  control.markAsTouched();
                } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                  _this7.validateAllFormFields(control);
                }
              });

              if (formArray.controls.sub_field_array) {
                formArray.controls.sub_field_array['controls'].forEach(function (subFormArray, sub_index) {
                  Object.keys(subFormArray.controls).forEach(function (field) {
                    var control = formGroup.controls.question['controls'][index].controls.sub_field_array['controls'][sub_index].get(field);

                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                      control.markAsTouched();
                    } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                      _this7.validateAllFormFields(control);
                    }
                  });
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.plt.is('cordova')) {
              if (this.questionForm.invalid) {
                this.validateAllFormFields(this.questionForm);
                this.toast.presentToast("Please Fill all the Fields", 'error');
                return;
              }
            }

            var records = this.questionForm.value;
            records.question.forEach(function (res) {
              var temp;
              res.answer_key ? delete res.answer_key : '';
              res.answer_only ? delete res.answer_only : '';
            });
            this.ionicStrorageService.insertData_Replace("questions", {
              classroom_observation: records.question
            });
            var navigationExtras = {
              queryParams: {
                template_list: this.template_id
              }
            };
            this.navCtrl.navigateBack(['/tnvntabs/page-route', 'question-template-list'], navigationExtras);
          }
        }, {
          key: "valueChanges",
          value: function valueChanges(event, name, i) {
            var _this8 = this;

            var value = [];

            if (typeof event == 'object') {
              event.forEach(function (result) {
                var child = name.answer_key.filter(function (val) {
                  return val.ans == result.ans;
                });

                if (child.length > 0) {
                  value.push(child[0]);
                }
              });
            } else {
              value = name.answer_key.filter(function (val) {
                return val.ans == event;
              });
            }

            var control = this.questionForm.get('question');
            var sub_field_template;

            if (value.length > 0) {
              control.controls[i].removeControl('sub_field_array');
              sub_field_template = this.original_template.questions.filter(function (val) {
                return val.section == value.map(function (action_val) {
                  return action_val.action;
                });
              });
              control.controls[i].addControl('sub_field_array', this.fb.array([]));
              sub_field_template.forEach(function (res, index) {
                var answer_only = [];
                var cc = JSON.parse(res.ques_ans_json);
                cc.answers.forEach(function (value) {
                  answer_only.push({
                    'ans': value.ans
                  });
                });
                var sub_control = control.controls[i].get('sub_field_array');
                sub_control.push(_this8.createSubValue(cc, answer_only));
              });
            }

            if (typeof event == 'object') {
              var data = [];

              if (value.length > 0) {
                value.map(function (val) {
                  if (val.next_filed == 'freetext' || val.next_filed == 'img') {
                    data.push(val);
                  }
                });
                value = data;
              }
            }

            if (value.length > 0) {
              if (value[0].next_filed == 'freetext') {
                this.extra_field[i] = value[0];
                this.extra_field[i].open = true;
                this.extra_field[i].placeholder = value[0].Description;
                control.controls[i].addControl('subfield_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl('subfield_value', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])));
              } else if (value[0].next_filed == 'img') {
                value[0].open = true;
                this.extra_field[i] = value[0];
                control.controls[i].addControl('subfield_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.extra_field[i].field_value));
                control.controls[i].addControl('subfield_value', new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''));
              } else {
                value[0].open = false;
                this.extra_field[i] = value[0];
                control.controls[i].removeControl('subfield_value');
                this.questionForm.removeControl(this.extra_field[i].field_value);
                control.controls[i].removeControl(this.extra_field[i].field_value);
              }
            }
          }
        }, {
          key: "createSubValue",
          value: function createSubValue(res, answer_only) {
            return this.fb.group({
              ans: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])],
              ques: [res.question],
              answer_only: [answer_only],
              type: [res.type],
              answer_key: [res.answers]
            });
          }
        }]);
      }();

      _QuestionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_5__.FileHandlerService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }];
      };

      _QuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-questions',
        template: _raw_loader_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _QuestionsPage);
      /***/
    },

    /***/
    96901:
    /*!***********************************************************************!*\
      !*** ./src/app/components/ui-components/ui-components.component.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1aS1jb21wb25lbnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    88049:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/questions/questions.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #3880ff;\n  --color: #fff;\n}\n\n.error-message {\n  margin: 0;\n  text-align: end;\n  color: red;\n  font-size: 14px;\n  font-style: italic;\n}\n\nion-label {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtBQUdKIiwiZmlsZSI6InF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5lcnJvci1tZXNzYWdle1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4vLyBpb24tY2FyZHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuLy8gICAgIHBhZGRpbmc6IDdweCAxNnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTZweCAzOHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41NiksIDAgNHB4IDI1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDE2cHggMzhweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNTYpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */";
      /***/
    },

    /***/
    90241:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui-components/ui-components.component.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n<form [formGroup]=\"questionForm\">\r\n    <div formArrayName=\"question\">\r\n     \r\n      <div *ngFor=\"let radio of questionForm.controls.question['controls'];let i=index\" (click)=\"sendData()\">\r\n      \r\n              <div [formGroupName]=\"i\">\r\n        \r\n       <ion-item *ngIf=\"radio.get('type').value== '1'\">\r\n         <ion-label text-wrap  position=\"floating\">{{radio.get('ques').value}}</ion-label><br/>\r\n            <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n       </ion-item>\r\n\r\n  <ion-list *ngIf=\"radio.get('type').value== '2'\">\r\n  \r\n    <ion-radio-group formControlName=\"ans\"  (ionSelect)=\"valueChanges($event.target.value,radio.value,i)\">\r\n      <ion-list-header>\r\n        <ion-label >{{radio.get('ques').value}}</ion-label>\r\n      </ion-list-header>      \r\n      <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n        <ion-label>{{ans.ans}}</ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </ion-list>\r\n    \r\n    <ion-item *ngIf=\"radio.get('type').value== '3'\">\r\n        <ion-label text-wrap>{{radio.get('ques').value}}</ion-label>        \r\n        <ionic-selectable\r\n     formControlName=\"ans\"\r\n     itemValueField=\"ans\"\r\n     itemTextField=\"ans\"\r\n    [items]=\"radio.get('answer_only').value\"\r\n    [canSearch]=\"true\"\r\n    (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n  \r\n  </ionic-selectable>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"radio.get('type').value== '4'\">\r\n          <ion-label text-wrap >{{radio.get('ques').value}}</ion-label><br/>\r\n          <ionic-selectable \r\n          formControlName=\"ans\"\r\n          [items]=\"radio.get('answer_only').value\"\r\n          itemValueField=\"ans\"\r\n          itemTextField=\"ans\"\r\n          [isMultiple]=\"true\"\r\n          [canSearch]=\"true\"\r\n         (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n        </ionic-selectable>      \r\n        </ion-item>        \r\n        <div *ngIf=\"radio.get('type').value == '5'\">\r\n            <ion-list  formArrayName=\"ans\">\r\n              <ion-item-group>                \r\n                    <ion-label padding text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                  <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                    <ion-label style=\"white-space: normal;\">{{ ans.ans }}</ion-label>\r\n                    <ion-checkbox slot=\"start\" (ionChange)=\"onChange(ans.ans, $event.detail.checked, i)\" value=\"{{ans.ans}}\"></ion-checkbox>\r\n                  </ion-item>\r\n                </ion-item-group>                \r\n              </ion-list>\r\n            </div>  \r\n    <div *ngIf=\"extra_field[i]\">        \r\n      <ion-item *ngIf=\"extra_field[i].next_filed == 'freetext' && extra_field[i].open\">\r\n      <ion-label position=\"floating\">Enter the Description</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"subfield_value\"></ion-input>\r\n    </ion-item>\r\n</div>\r\n<div *ngIf=\"extra_field[i]\">\r\n  <ion-item lines=\"none\" *ngIf=\"extra_field[i].next_filed == 'img' && extra_field[i].open\" >\r\n      <ion-button  slot=\"end\"> <ion-label>Capture Image</ion-label><ion-icon name=\"md-camera\"></ion-icon></ion-button>\r\n    </ion-item>\r\n    </div> \r\n  </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    88894:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-data/questions/questions.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Classroom Management & Record verification</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"ion-contentbg\">\r\n\r\n  <form [formGroup]=\"questionForm\">\r\n    <div formArrayName=\"question\" *ngIf=\"questionForm.controls['question']\">\r\n\r\n      <div *ngFor=\"let radio of questionForm.controls.question['controls'];let i=index\">\r\n\r\n        <div [formGroupName]=\"i\">\r\n\r\n          <ion-item *ngIf=\"radio.get('type').value== '1'\">\r\n            <ion-label text-wrap position=\"stacked\">{{radio.get('ques').value}}</ion-label><br />\r\n            <ion-input type=\"text\" formControlName=\"ans\" stacked></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-list *ngIf=\"radio.get('type').value== '2'\">\r\n\r\n            <ion-radio-group formControlName=\"ans\" (ionSelect)=\"valueChanges($event.target.value,radio.value,i)\">\r\n              <ion-list-header>\r\n                <ion-label>{{radio.get('ques').value}}</ion-label>\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                <ion-label>{{ans.ans}}</ion-label>\r\n                <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n\r\n          <ion-item *ngIf=\"radio.get('type').value== '3'\">\r\n            <ion-label text-wrap>{{radio.get('ques').value}}</ion-label>\r\n            <ionic-selectable formControlName=\"ans\" itemValueField=\"ans\" itemTextField=\"ans\"\r\n              [items]=\"radio.get('answer_only').value\" [canSearch]=\"true\"\r\n              (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n\r\n            </ionic-selectable>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"radio.get('type').value== '4'\">\r\n            <ion-label text-wrap>{{radio.get('ques').value}}</ion-label><br />\r\n            <ionic-selectable formControlName=\"ans\" [items]=\"radio.get('answer_only').value\" itemValueField=\"ans\"\r\n              itemTextField=\"ans\" [isMultiple]=\"true\" [canSearch]=\"true\"\r\n              (onChange)=\"valueChanges(radio.value.ans,radio.value,i)\">\r\n            </ionic-selectable>\r\n\r\n          </ion-item>\r\n          <div *ngIf=\"radio.get('type').value == '5'\">\r\n            <ion-list formArrayName=\"ans\">\r\n              <ion-item-group>\r\n                <ion-label padding text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                  <ion-label style=\"white-space: normal;\">{{ ans.ans }}</ion-label>\r\n                  <ion-checkbox slot=\"start\" (ionChange)=\"onChange(ans.ans, $event.detail.checked, i)\"\r\n                    value=\"{{ans.ans}}\"></ion-checkbox>\r\n                </ion-item>\r\n              </ion-item-group>\r\n            </ion-list>\r\n          </div>\r\n          <p class=\"error-message\"\r\n            *ngIf=\"radio.controls['ans'].hasError('required') && (radio.controls['ans'].dirty || radio.controls['ans'].touched)\">\r\n            Field is Required</p>\r\n          <div *ngIf=\"extra_field[i]\">\r\n            <ion-item *ngIf=\"extra_field[i].next_filed == 'freetext' && extra_field[i].open\">\r\n              <ion-label position=\"floating\">{{extra_field[i].placeholder}}</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"subfield_value\"></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div *ngIf=\"extra_field[i]\">\r\n            <ion-item lines=\"none\" *ngIf=\"extra_field[i].next_filed == 'img' && extra_field[i].open\">\r\n              <ion-button slot=\"end\">\r\n                <ion-label>Capture Image</ion-label>\r\n                <ion-icon name=\"md-camera\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <div formArrayName=\"sub_field_array\" *ngIf=\"radio.get('sub_field_array')\">\r\n            <div *ngFor=\"let sub_field of radio.get('sub_field_array').controls;let u=index\" [formGroupName]=\"u\">\r\n\r\n              <ion-item *ngIf=\"sub_field.get('type').value== '1'\">\r\n                <ion-label text-wrap position=\"floating\">{{sub_field.get('ques').value}}</ion-label><br />\r\n                <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n              </ion-item>\r\n              <ion-list *ngIf=\"sub_field.get('type').value== '2'\">\r\n\r\n                <ion-radio-group formControlName=\"ans\">\r\n                  <ion-list-header>\r\n                    <ion-label>{{sub_field.get('ques').value}}</ion-label>\r\n                  </ion-list-header>\r\n\r\n                  <ion-item *ngFor=\"let ans of sub_field.get('answer_key').value\">\r\n                    <ion-label>{{ans.ans}}</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n              </ion-list>\r\n\r\n              <ion-item *ngIf=\"sub_field.get('type').value== '3'\">\r\n                <ion-label text-wrap>{{sub_field.get('ques').value}}</ion-label>\r\n                <ionic-selectable formControlName=\"ans\" itemValueField=\"ans\" itemTextField=\"ans\"\r\n                  [items]=\"sub_field.get('answer_only').value\" [canSearch]=\"true\">\r\n\r\n                </ionic-selectable>\r\n              </ion-item>\r\n\r\n              <ion-item *ngIf=\"sub_field.get('type').value== '5' || sub_field.get('type').value == '4'\">\r\n                <ion-label text-wrap>{{sub_field.get('ques').value}}</ion-label><br />\r\n                <ionic-selectable formControlName=\"ans\" [items]=\"sub_field.get('answer_only').value\"\r\n                  itemValueField=\"ans\" itemTextField=\"ans\" [isMultiple]=\"true\" [canSearch]=\"true\">\r\n                </ionic-selectable>\r\n              </ion-item>\r\n              <p class=\"error-message\"\r\n                *ngIf=\"sub_field.controls['ans'].hasError('required') && (sub_field.controls['ans'].dirty || sub_field.controls['ans'].touched)\">\r\n                Field is Required</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-button expand=\"full\" color=\"primary\" shape=\"round\" (click)=\"onSubmit()\">Save <ion-icon name=\"arrow-forward\">\r\n    </ion-icon>\r\n  </ion-button>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_observation-data_questions_questions_module_ts-es5.js.map