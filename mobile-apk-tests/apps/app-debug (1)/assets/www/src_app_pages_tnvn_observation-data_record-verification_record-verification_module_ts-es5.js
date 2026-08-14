(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation-data_record-verification_record-verification_module_ts"], {
    /***/
    20496:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/record-verification/record-verification.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecordVerificationPageModule": function RecordVerificationPageModule() {
          return (
            /* binding */
            _RecordVerificationPageModule
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


      var _record_verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./record-verification.page */
      81441);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var routes = [{
        path: '',
        component: _record_verification_page__WEBPACK_IMPORTED_MODULE_0__.RecordVerificationPage
      }];

      var _RecordVerificationPageModule = /*#__PURE__*/_createClass(function RecordVerificationPageModule() {
        _classCallCheck(this, RecordVerificationPageModule);
      });

      _RecordVerificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_record_verification_page__WEBPACK_IMPORTED_MODULE_0__.RecordVerificationPage]
      })], _RecordVerificationPageModule);
      /***/
    },

    /***/
    81441:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/record-verification/record-verification.page.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RecordVerificationPage": function RecordVerificationPage() {
          return (
            /* binding */
            _RecordVerificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_record_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./record-verification.page.html */
      77371);
      /* harmony import */


      var _record_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./record-verification.page.scss */
      28);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/file-handler/file-handler.service */
      24954);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);

      var _RecordVerificationPage = /*#__PURE__*/function () {
        function RecordVerificationPage(api, fb, loadingCtrl, router, navCtrl, activateRoute, ionicStorageService, plt, fileService, toast) {
          _classCallCheck(this, RecordVerificationPage);

          this.api = api;
          this.fb = fb;
          this.loadingCtrl = loadingCtrl;
          this.router = router;
          this.navCtrl = navCtrl;
          this.activateRoute = activateRoute;
          this.ionicStorageService = ionicStorageService;
          this.plt = plt;
          this.fileService = fileService;
          this.toast = toast;
          this.extra_field = [];
          this.extra_img = [];
          this.inputRadio = false;
          this.selectValue = [];
          this.original_template = [];
          this.last_saved_data = [];
        }

        return _createClass(RecordVerificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getLocalData();
            this.questionForm = this.fb.group({
              pedagogy_info: this.fb.array([])
            });
            this.activateRoute.queryParams.subscribe(function (params) {
              if (params.template_list) {
                _this.template_id = JSON.parse(params.template_list);
              }
            });
            this.getQues();
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.loadingCtrl.create({
                      message: '',
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
          key: "getLocalData",
          value: function getLocalData() {
            var _this2 = this;

            this.ionicStorageService.getData('record-verification').then(function (Response) {
              if (Response) {
                _this2.last_saved_data.pedagogy_info = Response.record_verification;

                if (_this2.last_saved_data.hasOwnProperty('pedagogy_info')) {
                  _this2.questionForm.patchValue(_this2.last_saved_data);

                  _this2.questionForm.value.pedagogy_info.forEach(function (value, index) {
                    if (value.type == 3 || value.type == 4) {
                      _this2.valueChanges(value.ans, value, index);
                    }
                  });

                  setTimeout(function () {
                    if (_this2.last_saved_data.hasOwnProperty('pedagogy_info')) {
                      var pedagogy_info = _this2.questionForm.controls['pedagogy_info'];
                      pedagogy_info.patchValue(_this2.last_saved_data.pedagogy_info);
                    }
                  }, 800);
                }
              }
            });
          }
        }, {
          key: "assignDataAndControl",
          value: function assignDataAndControl() {
            var _this3 = this;

            var temp = this.curr_template;
            this.curr_template = temp.questions.filter(function (val) {
              return val.section == "5";
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

                var control = _this3.questionForm.get('pedagogy_info');

                control.push(_this3.createValue(res.ques_ans_json, answer_only));
              } else {
                var _control = _this3.questionForm.get('pedagogy_info');

                _control.push(_this3.checkBoxArray(res.ques_ans_json));
              }

              var nae = res.key;
            });
            this.getLocalData();
          }
        }, {
          key: "getQues",
          value: function getQues() {
            var _this4 = this;

            if (this.plt.is('cordova')) {
              this.fileService.readFile({
                dir: 'templates',
                file_name: this.template_id
              }).then(function (file) {
                _this4.curr_template = JSON.parse(file);

                _this4.assignDataAndControl();
              });
            } else {
              this.api.getAllTemplates().subscribe(function (res) {
                if (res['dataStatus']) {
                  _this4.curr_template = res['records'];
                  _this4.curr_template = _this4.curr_template.filter(function (val) {
                    return val.template_id == _this4.template_id;
                  });
                  _this4.curr_template = _this4.curr_template[0];
                  _this4.original_template = _this4.curr_template;

                  _this4.assignDataAndControl();
                }
              });
            }
          }
        }, {
          key: "checkBoxArray",
          value: function checkBoxArray(res) {
            return this.fb.group({
              ques: [res.question],
              type: [res.type],
              answer_key: [res.answers],
              additional_key: [res.key],
              ans: this.fb.array([])
            });
          }
        }, {
          key: "onChange",
          value: function onChange(value, isChecked, index) {
            var answers = this.questionForm.controls['pedagogy_info']['controls'][index].controls.ans;

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
          key: "onChangeSubField",
          value: function onChangeSubField(value, isChecked, index, par_index) {
            var answers = this.questionForm.controls['pedagogy_info']['controls'][index].controls.ans;
            var dd = this.questionForm.controls['pedagogy_info']['controls'][par_index];
            var sub_control = this.questionForm.controls['pedagogy_info']['controls'][par_index].controls.sub_field_array.controls[index].controls.ans;

            if (isChecked) {
              sub_control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(value, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])));
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
              answer_key: [res.answers],
              additional_key: [res.key]
            });
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
        }, {
          key: "valueChanges",
          value: function valueChanges(event, name, i) {
            var _this5 = this;

            if (name.hasOwnProperty('additional_key') && name.additional_key != null) {
              this.ionicStorageService.insertData_Replace(name.additional_key, event);
            }

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

            var control = this.questionForm.get('pedagogy_info');
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
                sub_control.push(_this5.createSubValue(cc, answer_only));
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
          key: "onCheckboxChange",
          value: function onCheckboxChange(key, value, isChecked) {
            var answer = this.questionForm.controls[key]['controls'];

            if (isChecked) {
              answer.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(value));
            } else {
              var idx = answer.controls.findIndex(function (x) {
                return x.value == value;
              });
              answer.removeAt(idx);
            }
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this6 = this;

            formGroup.controls.pedagogy_info['controls'].forEach(function (formArray, index) {
              Object.keys(formArray.controls).forEach(function (field) {
                var control = formGroup.controls.pedagogy_info['controls'][index].get(field);

                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                  control.markAsTouched();
                } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                  _this6.validateAllFormFields(control);
                }
              });

              if (formArray.controls.sub_field_array) {
                formArray.controls.sub_field_array['controls'].forEach(function (subFormArray, sub_index) {
                  Object.keys(subFormArray.controls).forEach(function (field) {
                    var control = formGroup.controls.pedagogy_info['controls'][index].controls.sub_field_array['controls'][sub_index].get(field);

                    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl) {
                      control.markAsTouched();
                    } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup) {
                      _this6.validateAllFormFields(control);
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
            records.pedagogy_info.forEach(function (res) {
              res.answer_key ? delete res.answer_key : '';
              res.answer_only ? delete res.answer_only : '';
            });
            var navigationExtras = {
              queryParams: {
                template_list: this.template_id
              }
            };
            this.ionicStorageService.insertData_Replace("record-verification", {
              record_verification: records.pedagogy_info
            });
            this.navCtrl.navigateBack(['/tnvntabs/page-route', 'question-template-list'], navigationExtras);
          }
        }]);
      }();

      _RecordVerificationPage.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
        }, {
          type: src_app_services_tnvn_services_file_handler_file_handler_service__WEBPACK_IMPORTED_MODULE_3__.FileHandlerService
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
        }];
      };

      _RecordVerificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-record-verification',
        template: _raw_loader_record_verification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_record_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RecordVerificationPage);
      /***/
    },

    /***/
    28:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation-data/record-verification/record-verification.page.scss ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".error-message {\n  margin: 0;\n  text-align: end;\n  color: red;\n  font-size: 14px;\n  font-style: italic;\n}\n\nion-label {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZC12ZXJpZmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUoiLCJmaWxlIjoicmVjb3JkLXZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItbWVzc2FnZXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    77371:
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation-data/record-verification/record-verification.page.html ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar class=\"new-background-color\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Record Verification</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content padding>\r\n      <form [formGroup]=\"questionForm\">          \r\n          <div formArrayName=\"pedagogy_info\">\r\n           \r\n            <div *ngFor=\"let radio of questionForm.controls.pedagogy_info['controls'];let i=index\" >\r\n            \r\n                    <div [formGroupName]=\"i\">\r\n              \r\n             <ion-item *ngIf=\"radio.get('type').value== '1'\">\r\n               <ion-label text-wrap  position=\"floating\">{{radio.get('ques').value}}</ion-label><br/>\r\n                  <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n             </ion-item>\r\n      \r\n        <ion-list  *ngIf=\"radio.get('type').value== '2'\">\r\n        \r\n          <ion-radio-group formControlName=\"ans\"  (ionSelect)=\"valueChanges($event.target.value,radio.value,i)\">\r\n            <ion-list-header>\r\n              <ion-label >{{radio.get('ques').value}}</ion-label>\r\n            </ion-list-header>            \r\n            <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n              <ion-label>{{ans.ans}}</ion-label>\r\n              <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n            </ion-item>\r\n          </ion-radio-group>\r\n          </ion-list>\r\n          \r\n          <ion-item *ngIf=\"radio.get('type').value== '3'\">\r\n              <ion-label text-wrap>{{radio.get('ques').value}}</ion-label>              \r\n              <ionic-selectable\r\n           formControlName=\"ans\"\r\n           itemValueField=\"ans\"\r\n           itemTextField=\"ans\"\r\n          [items]=\"radio.get('answer_only').value\"\r\n          [canSearch]=\"true\"\r\n          (onChange)=\"valueChanges($event.value.ans,radio.value,i)\">\r\n        \r\n        </ionic-selectable>      \r\n            </ion-item>\r\n      \r\n            <ion-item *ngIf=\"radio.get('type').value== '4'\">\r\n                <ion-label text-wrap >{{radio.get('ques').value}}</ion-label><br/>\r\n                <ionic-selectable \r\n                formControlName=\"ans\"\r\n                [items]=\"radio.get('answer_only').value\"\r\n                itemValueField=\"ans\"\r\n                itemTextField=\"ans\"\r\n                [isMultiple]=\"true\"\r\n                [canSearch]=\"true\"\r\n               (onChange)=\"valueChanges(radio.value.ans,radio.value,i)\">\r\n              </ionic-selectable>\r\n\r\n              </ion-item>              \r\n              <div *ngIf=\"radio.get('type').value == '5'\">\r\n                  <ion-list  formArrayName=\"ans\">\r\n                    <ion-item-group>                      \r\n                          <ion-label padding text-wrap>{{radio.get('ques').value}}</ion-label>\r\n                        <ion-item *ngFor=\"let ans of radio.get('answer_key').value\">\r\n                          <ion-label style=\"white-space: normal;\">{{ ans.ans }}</ion-label>\r\n                          <ion-checkbox slot=\"start\" (ionChange)=\"onChange(ans.ans, $event.detail.checked, i)\" value=\"{{ans.ans}}\"></ion-checkbox>\r\n                        </ion-item>\r\n                      </ion-item-group>                      \r\n                    </ion-list>\r\n                  </div>\r\n                  <p class=\"error-message\" *ngIf=\"radio.controls['ans'].hasError('required') && (radio.controls['ans'].dirty || radio.controls['ans'].touched)\">Field is Required</p>\r\n  \r\n                  <div *ngIf=\"extra_field[i]\">\r\n                      <ion-item *ngIf=\"extra_field[i].next_filed == 'freetext' && extra_field[i].open\">\r\n                          <ion-label position=\"floating\">{{extra_field[i].placeholder}}</ion-label>\r\n                      <ion-input type=\"text\" formControlName=\"subfield_value\"></ion-input>\r\n                    </ion-item>\r\n                </div>\r\n                <div *ngIf=\"extra_field[i]\">\r\n                  <ion-item lines=\"none\" *ngIf=\"extra_field[i].next_filed == 'img' && extra_field[i].open\" >\r\n                      <ion-button  slot=\"end\"> <ion-label>Capture Image</ion-label><ion-icon name=\"md-camera\"></ion-icon></ion-button>\r\n                    </ion-item>\r\n                    </div> \r\n                    \r\n        <div formArrayName=\"sub_field_array\" *ngIf=\"radio.get('sub_field_array')\">\r\n          <div *ngFor=\"let sub_field of radio.get('sub_field_array').controls;let u=index\" [formGroupName]=\"u\">\r\n            <ion-item *ngIf=\"sub_field.get('type').value== '1'\">\r\n                <ion-label text-wrap  position=\"floating\">{{sub_field.get('ques').value}}</ion-label><br/>\r\n                   <ion-input type=\"text\" formControlName=\"ans\" floating></ion-input>\r\n              </ion-item>\r\n            <ion-list  *ngIf=\"sub_field.get('type').value== '2'\">\r\n        \r\n                <ion-radio-group formControlName=\"ans\" >\r\n                  <ion-list-header>\r\n                    <ion-label >{{sub_field.get('ques').value}}</ion-label>\r\n                  </ion-list-header>\r\n                  <ion-item *ngFor=\"let ans of sub_field.get('answer_key').value\">\r\n                    <ion-label>{{ans.ans}}</ion-label>\r\n                    <ion-radio slot=\"start\" value=\"{{ans.ans}}\"></ion-radio>\r\n                  </ion-item>\r\n                </ion-radio-group>\r\n                </ion-list>\r\n  \r\n            <ion-item *ngIf=\"sub_field.get('type').value== '3'\">\r\n                <ion-label text-wrap>{{sub_field.get('ques').value}}</ion-label>                \r\n                <ionic-selectable\r\n             formControlName=\"ans\"\r\n             itemValueField=\"ans\"\r\n             itemTextField=\"ans\"\r\n            [items]=\"sub_field.get('answer_only').value\"\r\n            [canSearch]=\"true\"\r\n           >\r\n          \r\n          </ionic-selectable>        \r\n              </ion-item>\r\n  \r\n            <ion-item *ngIf=\"sub_field.get('type').value== '5' || sub_field.get('type').value == '4'\">\r\n                <ion-label text-wrap >{{sub_field.get('ques').value}}</ion-label><br/>\r\n                <ionic-selectable \r\n                formControlName=\"ans\"\r\n                [items]=\"sub_field.get('answer_only').value\"\r\n                itemValueField=\"ans\"\r\n                itemTextField=\"ans\"\r\n                [isMultiple]=\"true\"\r\n                [canSearch]=\"true\"\r\n               >\r\n              </ionic-selectable>\r\n              </ion-item>\r\n              <p class=\"error-message\" *ngIf=\"sub_field.controls['ans'].hasError('required') && (sub_field.controls['ans'].dirty || sub_field.controls['ans'].touched)\">Field is Required</p>  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n          </div>\r\n        </div>\r\n   \r\n      </form>\r\n  </ion-content>\r\n  <ion-footer>\r\n      <ion-button expand=\"full\" color=\"primary\" shape=\"round\" (click)=\"onSubmit()\">Save <ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n  </ion-footer>\r\n  ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_observation-data_record-verification_record-verification_module_ts-es5.js.map