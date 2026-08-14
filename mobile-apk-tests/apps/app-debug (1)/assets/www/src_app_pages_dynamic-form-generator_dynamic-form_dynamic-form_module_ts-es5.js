(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_dynamic-form-generator_dynamic-form_dynamic-form_module_ts"], {
    /***/
    56135:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form-routing.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DynamicFormPageRoutingModule": function DynamicFormPageRoutingModule() {
          return (
            /* binding */
            _DynamicFormPageRoutingModule
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


      var _dynamic_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dynamic-form.page */
      49334);

      var routes = [{
        path: '',
        component: _dynamic_form_page__WEBPACK_IMPORTED_MODULE_0__.DynamicFormPage
      }];

      var _DynamicFormPageRoutingModule = /*#__PURE__*/_createClass(function DynamicFormPageRoutingModule() {
        _classCallCheck(this, DynamicFormPageRoutingModule);
      });

      _DynamicFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DynamicFormPageRoutingModule);
      /***/
    },

    /***/
    89814:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DynamicFormPageModule": function DynamicFormPageModule() {
          return (
            /* binding */
            _DynamicFormPageModule
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


      var _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dynamic-form-routing.module */
      56135);
      /* harmony import */


      var _dynamic_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dynamic-form.page */
      49334);

      var _DynamicFormPageModule = /*#__PURE__*/_createClass(function DynamicFormPageModule() {
        _classCallCheck(this, DynamicFormPageModule);
      });

      _DynamicFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _dynamic_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.DynamicFormPageRoutingModule],
        declarations: [_dynamic_form_page__WEBPACK_IMPORTED_MODULE_1__.DynamicFormPage]
      })], _DynamicFormPageModule);
      /***/
    },

    /***/
    49334:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.page.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DynamicFormPage": function DynamicFormPage() {
          return (
            /* binding */
            _DynamicFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_dynamic_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dynamic-form.page.html */
      27751);
      /* harmony import */


      var _dynamic_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dynamic-form.page.scss */
      19776);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
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


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../view-pdf/view-pdf.page */
      10467);
      /* harmony import */


      var _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/dynamicform.service */
      42966);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! blob-util */
      1230);

      var _DynamicFormPage = /*#__PURE__*/function () {
        function DynamicFormPage(router, route, fb, ionicstorage, alertService, modalCtrl, dynamicFromService, toast, uploadService, location, camera, file) {
          _classCallCheck(this, DynamicFormPage);

          this.router = router;
          this.route = route;
          this.fb = fb;
          this.ionicstorage = ionicstorage;
          this.alertService = alertService;
          this.modalCtrl = modalCtrl;
          this.dynamicFromService = dynamicFromService;
          this.toast = toast;
          this.uploadService = uploadService;
          this.location = location;
          this.camera = camera;
          this.file = file;
          this.queslist = [];
          this.quesString = 'Question';
          this.inlinelist = new Array();
          this.rcappCols = new Array();
          this.show_child = new Array();
          this.parent_values = new Array();
          this.patch_data = new Array();
          this.default_values = {};
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
          this.newDate = new Date();
          this.minDateValue = new Date().toJSON().split('T')[0];
          this.maxDateValue = new Date().toJSON().split('T')[0];
          this.finalUploads = {};
          this.objectValId = {};
          this.getIonSecId = {};
          this.formId = '';
          this.param1 = '';
          this.param2 = '';
          this.naviBackUrl = '';
        }

        return _createClass(DynamicFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.secId = this.route.snapshot.queryParamMap.get("secId");
            this.formId = this.route.snapshot.queryParamMap.get("formId");
            this.param1 = this.route.snapshot.queryParamMap.get("param1");
            this.param2 = this.route.snapshot.queryParamMap.get("param2");
            this.naviBackUrl = this.route.snapshot.queryParamMap.get("naviBackUrl");
            this.todayDate = this.pipe.transform(new Date().setDate(new Date().getDate() - 0), 'yyyy-MM-dd');
            this.cwsn.controls['form_data'].clear();
            this.ionicstorage.getData('conCol').then(function (res) {
              _this.conCol = JSON.parse(res);

              _this.ionicStorageGet();
            }); // this.urlGetApi();
          }
        }, {
          key: "ionicStorageGet",
          value: function ionicStorageGet() {
            var _this2 = this;

            this.ionicstorage.getData('apiJson').then(function (dataa) {
              _this2.apiJson = dataa != null ? JSON.parse(dataa) : '';
              setTimeout(function () {
                if (_this2.apiJson) {
                  _this2.fetchJson(_this2.apiJson.form_url);
                } else {
                  _this2.toast.presentToast('Data not found', 'error');
                }
              }, 100);
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('languageValue').then(function (dataa) {
              _this2.langstatus = dataa != null ? dataa : 1;
            }, function (error) {
              return console.error(error);
            }); // this.ionicstorage.getData('fromId').then(
            //   (dataa) => {
            //     this.fromId = dataa;
            //   },
            //   (error) => console.error(error)
            // );

            this.ionicstorage.getData('dbPk').then(function (dataa) {
              _this2.dbPk = dataa;
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('conCol').then(function (dataa) {
              _this2.conCol = JSON.parse(dataa);
              console.log(_this2.conCol, 'this.conCol');
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('dynamicFromSecData').then(function (dataa) {
              _this2.objectValId = {};

              if (dataa) {
                _this2.objectValId = JSON.parse(dataa);
              }
            }, function (error) {
              return console.error(error);
            });
          } // urlGetApi() {
          //   this.dynamicFromService.jsonFetch(169).subscribe(
          //     (res) => {
          //       try {
          //         if (res.status == 200 && res.dataStatus == true) {
          //           this.fetchJson(res.url.form_url);
          //         } else {
          //           throw res.message
          //         }
          //       } catch (err) {
          //         this.toast.presentToast(err, 'error');
          //       }
          //     },
          //     (error) => {
          //       this.toast.presentToast(error?.message, 'error');
          //     }
          //   )
          // }

        }, {
          key: "fetchJson",
          value: function fetchJson(url) {
            var _this3 = this;

            // fetch('/assets/dynamic_json.json').then(res => res.json()).then(res => {
            //   this.section = res[0].section.find(x => x.id == this.secId);
            //   this.generateFormgroup(this.section.question);
            //   console.log(this.section.question,'this.section')
            // });
            fetch(url).then(function (res) {
              return res.json();
            }).then(function (res) {
              _this3.section = res[0].section.find(function (x) {
                return x.sec_id == _this3.secId;
              }); // this.section.question.push({
              //   "id": "14064",
              //   "form_id": "169",
              //   "section_id": "233",
              //   "question_type": "photo",
              //   "question_title": "",
              //   "question_text": "Capture Image",
              //   "question_desc": "",
              //   "question_title_t": "",
              //   "question_text_t": "டெச்ட்",
              //   "question_desc_t": "",
              //   "option_1": "",
              //   "option_2": "",
              //   "option_3": "",
              //   "option_4": "",
              //   "option_5": "",
              //   "options_api": "",
              //   "table_name": null,
              //   "form_controller": "",
              //   "required": "1",
              //   "show_child_answer": null,
              //   "populate": "0",
              //   "verify": "0",
              //   "parent_id": null,
              //   "sequence_id": "3",
              //   "score": null,
              //   "correct_answer": "{}",
              //   "validation": "",
              //   "applicable_value": "",
              //   "applicable_for": "",
              //   "ordr": "140630",
              //   "options": [],
              //   "parent_form_controller": "",
              //   "parent_question_id": ""
              // })

              console.log(_this3.section, 'this.section');
              console.log(_this3.section.question, 'this.section');
            }).then(function () {
              _this3.generateFormgroup(_this3.section.question);
            });
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.cwsn = this.fb.group({
              form_data: this.fb.array([])
            });
            console.log(this.cwsn, 'this.cwsn');
          }
        }, {
          key: "form_data",
          get: function get() {
            return this.cwsn.get("form_data");
          }
        }, {
          key: "generateFormgroup",
          value: function generateFormgroup(data) {
            var _this4 = this;

            var _a;

            debugger;
            var tmp_data = new Array();

            for (var i in data) {
              // if (data[i].applicable_for !== "" && data[i].applicable_value !== "") {
              //   for (let j in this.conCol) {
              //     if (data[i].applicable_for == j && data[i].applicable_value == this.conCol[j]) {
              //       tmp_data.push(data[i]);
              //     }
              //   }
              // }
              // else {
              //   tmp_data.push(data[i]);
              // }
              if (data[i].applicable_for !== "" && data[i].applicable_value !== "") {
                var app_for = data[i].applicable_for;

                for (var j in this.conCol) {
                  if (app_for == j && data[i].applicable_value == this.conCol[j]) {
                    tmp_data.push(data[i]);
                  }
                }
              } else {
                tmp_data.push(data[i]);
              }
            }

            console.log(tmp_data, 'tmpdata');
            var resultArray = Object.keys(tmp_data).map(function (index) {
              var person = tmp_data[index];
              return person;
            });
            this.cwsn.controls['form_data'].clear();
            this.queslist = this.cwsn.controls['form_data'];

            if (resultArray.length > 0) {
              var _loop = function _loop(_i) {
                if (resultArray[_i].id != 'inline') {
                  var t_child = {
                    childs: resultArray[_i].id,
                    values: resultArray[_i].show_child_answer,
                    child_id: _i
                  };
                  if (typeof _this4.show_child[resultArray[_i].parent_question_id] == 'undefined') _this4.show_child[resultArray[_i].parent_question_id] = new Array();

                  _this4.show_child[resultArray[_i].parent_question_id].push(t_child);

                  console.log(_this4.show_child, 'this.show_child');
                  _this4.parent_values[resultArray[_i].id] = resultArray[_i].parent_question_id == '' ? true : false; //((resultArray[i].parent_id == '') ? true : false)
                  // let validator = Validators.compose([Validators.required]);

                  _this4.rcappCols.push(resultArray[_i].id);

                  var validSplit = resultArray[_i].validation.split('&&');

                  var validSplitObj = validSplit.map(function (ele) {
                    var x = ele.split('=');

                    var obj = _defineProperty({}, x[0], x[1]);

                    return obj;
                  });
                  debugger;

                  if (resultArray[_i].question_type == 'number') {
                    condArr = [];
                    resultArray[_i].validation = [];
                    var obj = {};
                    condArr.push(resultArray[_i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern('^[0-9\\W]+$'));

                    for (var _j = 0; _j < validSplitObj.length; _j++) {
                      Object.entries(validSplitObj[_j]).forEach(function (_ref) {
                        var _ref2 = _slicedToArray(_ref, 2),
                            key = _ref2[0],
                            value = _ref2[1];

                        var v = +value;

                        if (key == 'min' && value) {
                          condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.min(v));
                          obj = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(obj);
                        }

                        if (key == 'max' && value) {
                          condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(v));
                          obj = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(obj);
                        }
                      });
                    }

                    console.log(condArr, 'condArrcondArrcondArr');
                  } else if (resultArray[_i].question_type == 'text') {
                    condArr = [];
                    resultArray[_i].validation = [];
                    var _obj4 = {};
                    condArr.push(resultArray[_i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern(/^[a-zA-Z\s]*$/));

                    for (var _j2 = 0; _j2 < validSplitObj.length; _j2++) {
                      Object.entries(validSplitObj[_j2]).forEach(function (_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2),
                            key = _ref4[0],
                            value = _ref4[1];

                        var v = +value;

                        if (key == 'min' && value) {
                          condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(v));
                          _obj4 = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(_obj4);
                        }

                        if (key == 'max' && value) {
                          condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(v));
                          _obj4 = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(_obj4);
                        }
                      });
                    }
                  } else if (resultArray[_i].question_type == 'date') {
                    debugger;
                    condArr = [];
                    var _obj7 = {};
                    resultArray[_i].validation = [];
                    condArr.push(resultArray[_i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);

                    for (var _j3 = 0; _j3 < validSplitObj.length; _j3++) {
                      Object.entries(validSplitObj[_j3]).forEach(function (_ref5) {
                        var _ref6 = _slicedToArray(_ref5, 2),
                            key = _ref6[0],
                            value = _ref6[1];

                        // if(key == 'past_date'){
                        //   condArr.push(Validators.required)
                        // }
                        // if(key == 'future_date'){
                        //   condArr.push(Validators.required)
                        // }
                        if (key == 'dateValid' || value) {
                          _obj7 = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(_obj7);
                        } else if (key == 'date_length' && (value || value == '')) {
                          _obj7 = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(_obj7);
                        } else if (key == 'date_value') {
                          if (validSplitObj[0].dateValid == 'future_date') {
                            _obj7 = _defineProperty({}, key, _this4.pipe.transform(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd'));
                          } else if (validSplitObj[0].dateValid == 'past_date') {
                            _obj7 = _defineProperty({}, key, _this4.pipe.transform(new Date().setDate(new Date().getDate() - 1), 'yyyy-MM-dd'));
                          } // else if(validSplitObj[0].dateValid == 'current_future'){
                          //   obj = {
                          //     [key]: this.pipe.transform(new Date().setDate(new Date().getDate() - 0), 'yyyy-MM-dd')
                          //   }
                          // }
                          // else if(validSplitObj[0].dateValid == 'current_past'){
                          //   obj = {
                          //     [key]: this.pipe.transform(new Date().setDate(new Date().getDate() - 0), 'yyyy-MM-dd')
                          //   }
                          // }
                          else if (validSplitObj[0].dateValid == 'ndate_future') {
                            _obj7 = _defineProperty({}, key, _this4.pipe.transform(new Date().setDate(new Date().getDate() + +validSplitObj[1].date_length), 'yyyy-MM-dd'));
                          } else if (validSplitObj[0].dateValid == 'ndate_past') {
                            _obj7 = _defineProperty({}, key, _this4.pipe.transform(new Date().setDate(new Date().getDate() - +validSplitObj[1].date_length), 'yyyy-MM-dd'));
                          }

                          resultArray[_i].validation.push(_obj7);
                        }
                      });
                    }
                  } else if (resultArray[_i].question_type == 'mcq') {
                    condArr = [];
                    condArr.push(resultArray[_i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                  } else if (resultArray[_i].question_type == 'mmcq') {
                    condArr = [];
                    condArr.push(resultArray[_i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);

                    for (var _j4 = 0; _j4 < validSplitObj.length; _j4++) {
                      Object.entries(validSplitObj[_j4]).forEach(function (_ref7) {
                        var _ref8 = _slicedToArray(_ref7, 2),
                            key = _ref8[0],
                            value = _ref8[1];

                        var v = +value;

                        if (key == 'min') {
                          condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(v));
                        }

                        if (key == 'max') {
                          condArr.push(_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.maxLength(v));
                        }
                      });
                    }
                  } else if (resultArray[_i].question_type == 'yesno') {
                    condArr = [];
                    condArr.push(resultArray[_i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                  } else if (resultArray[_i].question_type == 'file') {
                    condArr = [];
                    condArr.push(resultArray[_i].required == 1 ? _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required : null);
                    _this4.finalUploads[resultArray[_i].id] = '';
                    console.log(_this4.finalUploads, 'this.finalUploads');
                    var _obj12 = {};
                    resultArray[_i].validation = [];

                    for (var _j5 = 0; _j5 < validSplitObj.length; _j5++) {
                      Object.entries(validSplitObj[_j5]).forEach(function (_ref9) {
                        var _ref0 = _slicedToArray(_ref9, 2),
                            key = _ref0[0],
                            value = _ref0[1];

                        // let v: any = value.split(',').join('');
                        if (key == 'file_type' || value) {
                          _obj12 = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(_obj12);
                        } else if (key == 'file_size' || value) {
                          _obj12 = _defineProperty({}, key, value);

                          resultArray[_i].validation.push(_obj12);
                        }
                      });
                    }
                  } else {
                    condArr = [];
                  }

                  if (parseInt(resultArray[_i].verify) == 1) {
                    _this4.queslist.push(_this4.fb.group(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].id, null),
                      form_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].form_id, null),
                      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].section_id, null),
                      question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_desc, null),
                      question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_desc_t, null),
                      question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_text, null),
                      question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_text_t, null),
                      question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_title, null),
                      question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_title_t, null),
                      question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_type, null),
                      options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options, null),
                      options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options_t, null),
                      options_api: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options_api, null),
                      table_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].table_name, null),
                      show_child: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].show_child_answer, null),
                      populate: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].populate, null),
                      parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_id, null),
                      parent_question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_question_id, null),
                      is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].is_active, null),
                      sequence_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].sequence_id, null),
                      score: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].score, null),
                      correct_answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].correct_answer, null),
                      required: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].required, null),
                      verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].verify, null),
                      parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_id, null),
                      form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].id, null),
                      dis_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].id, null)
                    }, resultArray[_i].id, new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', resultArray[_i].parent_id != null || '' ? null : _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose(condArr))), "sub", new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].sub, null)), "quesString", _this4.quesString), "validation", new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].validation, null)), "IsPhoto", false)));
                  } else {
                    _this4.queslist.push(_this4.fb.group(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].id, null),
                      form_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].form_id, null),
                      section_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].section_id, null),
                      question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_desc, null),
                      question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_desc_t, null),
                      question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_text, null),
                      question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_text_t, null),
                      question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_title, null),
                      question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_title_t, null),
                      question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_type, null),
                      options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options, null),
                      options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options_t, null),
                      options_api: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options_api, null),
                      table_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].table_name, null),
                      show_child: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].show_child_answer, null),
                      populate: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].populate, null),
                      parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_id, null),
                      parent_question_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_question_id, null),
                      is_active: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].is_active, null),
                      sequence_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].sequence_id, null),
                      score: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].score, null),
                      correct_answer: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].correct_answer, null),
                      required: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].required, null),
                      verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].verify, null),
                      parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_id, null),
                      form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].id, null)
                    }, resultArray[_i].id, new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', resultArray[_i].parent_id != null || '' ? null : _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose(condArr))), "sub", new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].sub, null)), "validation", new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].validation, null)), "quesString", _this4.quesString), "IsPhoto", false)));
                  }

                  debugger;

                  if (_this4.objectValId == null) {
                    _this4.objectValCondition = _this4.objectValId;
                  } else {
                    if (_this4.objectValId[_this4.dbPk] == undefined) {
                      _this4.objectValId[_this4.dbPk] = {};
                    }

                    _this4.objectValCondition = _this4.objectValId[_this4.dbPk][_this4.secId];
                  }

                  if (_this4.objectValCondition != undefined || null) {
                    var fromValue;

                    if (parseInt(resultArray[_i].verify) == 1) {
                      _this4.queslist.controls[_i].patchValue(_defineProperty({}, resultArray[_i].id, _this4.objectValId[_this4.dbPk][_this4.secId][resultArray[_i].id])); // this.queslist.controls[i].controls[resultArray[i].dis_form_controller].updateValueAndValidity();


                      _this4.queslist.controls[_i].controls[resultArray[_i].id].updateValueAndValidity();
                    } else {
                      if ((_a = _this4.objectValId[_this4.dbPk][_this4.secId][resultArray[_i].id]) === null || _a === void 0 ? void 0 : _a.includes(',')) {
                        fromValue = _this4.objectValId[_this4.dbPk][_this4.secId][resultArray[_i].id].split(',');
                      } else {
                        fromValue = _this4.objectValId[_this4.dbPk][_this4.secId][resultArray[_i].id];
                      }

                      _this4.queslist.controls[_i].patchValue(_defineProperty({}, resultArray[_i].id, fromValue));

                      _this4.queslist.controls[_i].controls[resultArray[_i].id].setValue(fromValue);

                      _this4.finalUploads[resultArray[_i].id] = fromValue;

                      _this4.queslist.controls[_i].controls[resultArray[_i].id].updateValueAndValidity();
                    }

                    var pquesId = _this4.objectValId[_this4.dbPk][_this4.secId][resultArray[_i].parent_question_id];

                    if (resultArray[_i].parent_question_id != '') {
                      _this4.patchMCQNew(pquesId, resultArray[_i].parent_question_id);
                    }
                  }
                } else {
                  var validator = _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);

                  _this4.inlinelist = new Array();

                  var _obj15 = _defineProperty(_defineProperty(_defineProperty(_defineProperty({
                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].id, null),
                    question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_desc, null),
                    question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_desc_t, null),
                    question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_text, null),
                    question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_text_t, null),
                    question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_title, null),
                    question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_title_t, null),
                    question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].question_type, null),
                    required: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].required, null),
                    verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].verify, null),
                    options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options, null),
                    options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].options_t, null),
                    parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_id, null),
                    form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].id, null)
                  }, resultArray[_i].id, new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', resultArray[_i].parent_id != '' ? null : validator)), "sub", new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].sub, null)), "quesString", _this4.quesString), "IsPhoto", false);

                  if (resultArray[_i].question_text != '<h3>No Form Found</h3>') {
                    for (var _j6 in resultArray[_i].question_text) {
                      var inl = resultArray[_i].question_text[_j6];

                      var temp = _this4.fb.array([]);

                      for (var k in inl.elements) {
                        if (typeof _this4.default_values[inl.elements[k].indexid] == 'undefined') {
                          _this4.default_values[inl.elements[k].indexid] = new Array();
                        }

                        if (inl.elements[k].type == 'hidden') {
                          _this4.default_values[inl.elements[k].indexid].push(_defineProperty({}, inl.elements[k].name, inl.elements[k].value));
                        }

                        temp.push(_this4.fb.group(_defineProperty({
                          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].id, null),
                          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].name, null),
                          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].type, null),
                          placeholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].placeholder, null),
                          label: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].label, null),
                          label_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].label_t, null),
                          lang: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].lang, null),
                          indexid: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].indexid, null),
                          parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(resultArray[_i].parent_id, null),
                          form_control: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].form_control, null),
                          options: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].options, null),
                          options_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].options_t, null),
                          url: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].url, null),
                          value: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].value, null)
                        }, inl.elements[k].form_control, new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', inl.elements[k].parent_form_controller != '' ? null : validator))));
                        _obj15[inl.elements[k].form_control] = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(inl.elements[k].value, null);
                      }

                      _this4.inlinelist.push({
                        "title": inl.title,
                        "elements": temp
                      });

                      console.log(_this4.inlinelist, 'inline');
                    }
                  }

                  _obj15['inline'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(_this4.inlinelist, null);

                  _this4.queslist.push(_this4.fb.group(_obj15));
                }
              },
                  condArr,
                  condArr,
                  condArr,
                  condArr,
                  condArr,
                  condArr,
                  condArr,
                  condArr;

              for (var _i = 0; _i < resultArray.length; _i++) {
                _loop(_i);
              }

              console.log(this.queslist, "finalArr");
            }
          }
        }, {
          key: "openCameraOn",
          value: function openCameraOn(index, form_controller, validate) {
            var _this5 = this;

            debugger;
            this.queslist.controls[index].controls[form_controller].setValue(null);
            var options = {
              quality: 60,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              cameraDirection: this.camera.Direction.BACK
            };
            this.camera.getPicture(options).then(function (imageData) {
              var bucketName = "renewalapplicationemis";
              var expiry = 1800;
              var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
              var splitedImage = filename.split(".");

              _this5.file.readAsDataURL(imagename, filename).then(function (base64string) {
                if (base64string) {
                  var base = base64string.split('base64,');
                  var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_10__.base64StringToBlob)(base[1], 'image/jpg');

                  if (blob.size <= 10485760) {
                    // this.queslist.controls[index].controls[form_controller].setValue(base64string)
                    // this.alertService.success('File Uploaded Successfully');
                    _this5.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                      if (result) {
                        _this5.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                          // this.imageKey = result.key;
                          _this5.queslist.controls[index].controls[form_controller].setValue(result.key);

                          _this5.finalUploads[form_controller] = result.key; // this.viewImage();

                          _this5.alertService.success('File Uploaded Successfully');
                        });
                      }
                    });
                  } else {
                    _this5.alertService.error('File Can`t uploaded because Image size should not exceed 3 MB');
                  }
                }
              });
            }, function (err) {
              // Handle error
              alert("error " + JSON.stringify(err));
            });
          } // handleMCQNew(val, i, form_name) {
          //   console.log(val, form_name)
          //   let childs = this.show_child[form_name];
          //   let occurred = false;
          //   console.log(childs, "parent chosen")
          //   for (let l in childs) {
          //     let e = childs[l];
          //     occurred = false;
          //     for (let j in e.values) {
          //       if (val.detail.value[j] == e.values[j])
          //         occurred = true;
          //     }
          //     if (occurred == true) {
          //       console.log(e.childs, "child true")
          //       this.parent_values[e.childs] = true
          //     } else {
          //       console.log(e.childs, "child false")
          //       this.parent_values[e.childs] = false
          //     }
          //   }
          //   console.log(this.parent_values, "childs")
          // }

        }, {
          key: "handleMMCQNew",
          value: function handleMMCQNew(val, i, form_name) {
            debugger;
            console.log(val, form_name);

            if (this.show_child[form_name] == undefined) {
              this.show_child[form_name] = {};
            }

            var childs = this.show_child[form_name];
            var occurred = false;
            console.log(childs, "parent chosen");

            for (var _i2 = 0; _i2 < childs.length; _i2++) {
              var e = childs[_i2];
              occurred = false;
              var chilvalue = e.values.split(',');

              for (var j = 0; j < chilvalue.length; j++) {
                if (val.includes(chilvalue[j])) {
                  occurred = true;
                }
              }

              if (occurred == true) {
                console.log(e.childs, "child true");
                this.parent_values[e.childs] = true;
                this.setValidatorsForQuestion(e.childs);
              } else {
                console.log(e.childs, "child false");
                this.parent_values[e.childs] = false;
                this.setValidatorsForQuestion(e.childs);
              }
            } // for (let l in childs) {
            //   let e = childs[l];
            //   occurred = false;
            //   for (let j in e.values) {
            //     if (val.detail.value == e.values[j]){
            //       occurred = true;
            //     }
            //   }
            //   if (occurred == true) {
            //     console.log(e.childs, "child true")
            //     this.parent_values[e.childs] = true
            //   } else {
            //     console.log(e.childs, "child false")
            //     this.parent_values[e.childs] = false
            //   }
            // }


            console.log(this.parent_values, "childs");
          }
        }, {
          key: "handleMCQNew",
          value: function handleMCQNew(val, i, form_name) {
            debugger;
            console.log(val, form_name);

            if (this.show_child[form_name] == undefined) {
              this.show_child[form_name] = {};
            }

            var childs = this.show_child[form_name];
            var occurred = false;
            console.log(childs, "parent chosen");

            for (var l in childs) {
              var e = childs[l];
              occurred = false; // for (let j in e.values) {
              //   if (val.detail.value == e.values[j]) {
              //     occurred = true;
              //   }
              // }

              if (val.detail.value == e.values) {
                occurred = true;
              }

              if (occurred == true) {
                console.log(e.childs, "child true");
                this.parent_values[e.childs] = true;
                this.setValidatorsForQuestion(e.childs);
              } else {
                console.log(e.childs, "child false");
                this.parent_values[e.childs] = false;
                this.setValidatorsForQuestion(e.childs);
              }
            }

            console.log(this.parent_values, "childs");
          }
        }, {
          key: "patchMCQNew",
          value: function patchMCQNew(val, form_name) {
            debugger;
            console.log(val, form_name);

            if (this.show_child[form_name] == undefined) {
              this.show_child[form_name] = {};
            }

            var childs = this.show_child[form_name];
            var occurred = false;
            console.log(childs, "parent chosen");

            for (var l in childs) {
              var e = childs[l];
              occurred = false; // for (let j in e.values) {
              //   if (val.detail.value == e.values[j]) {
              //     occurred = true;
              //   }
              // }

              if (val == e.values) {
                occurred = true;
              }

              if (occurred == true) {
                console.log(e.childs, "child true");
                this.parent_values[e.childs] = true;
                this.setValidatorsForQuestion(e.childs);
              } else {
                console.log(e.childs, "child false");
                this.parent_values[e.childs] = false;
                this.setValidatorsForQuestion(e.childs);
              }
            }

            console.log(this.parent_values, "childs");
          }
        }, {
          key: "setValidatorsForQuestion",
          value: function setValidatorsForQuestion(questionid) {
            debugger;
            var req = _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required;

            for (var i = 0; i < this.queslist.length; i++) {
              // const sec = this.queslist.controls[i].controls.question;
              var sec = this.queslist;

              for (var key in sec.controls) {
                if (sec.controls.hasOwnProperty(key)) {
                  var control = sec.controls[key];

                  if (control.value.id === questionid) {
                    var targetControl = control.get(questionid);
                    console.log(targetControl, 'targetControl');

                    if (targetControl) {
                      var hasValue = this.parent_values[questionid] != undefined;

                      if (!this.parent_values[questionid] || !hasValue) {
                        targetControl.clearValidators();
                      } else {
                        targetControl.setValidators(this.parent_values[questionid] == false ? null : req);
                      }

                      targetControl.updateValueAndValidity(); // Update validity status
                    } else {
                      console.error('Target control form_controller is missing:', control.value);
                    }

                    break;
                  }
                }
              }
            }
          }
        }, {
          key: "FileUploadsnew",
          value: function FileUploadsnew(event, index, form_controller, validate) {
            var _this6 = this;

            debugger;

            if (event.target.files && event.target.files[0]) {
              var fileName = event.target.files[0].name;
              var fileSize = validate.value[1].file_size * (1024 * 1024);
              var fileTypes = validate.value[0].file_type.split(','); // let fileExtss = [];
              // let fileApplication;
              // if(validate.value[0].file_type !== ''){
              //   if(validate.value[0].file_type?.includes(',')){
              //     fileTypes = "'"+validate.value[0].file_type.split(',').join("'||'")+ "'";
              //     fileTypes = fileTypes;
              //     let fileExt = validate.value[0].file_type.split(',')
              //     for(let k = 0; k < fileExt.length; k++){
              //       fileExtss.push('application/'+fileExt[k])
              //     }
              //     fileApplication = fileExtss.toString().split(',').join('||');
              //   }
              //   else{
              //     fileTypes = validate.value[0].file_type;
              //     fileApplication = 'application/'+validate.value[0].file_type;
              //   }
              // }

              console.log(fileTypes, 'fileTypes');

              if (fileSize == 0 || event.target.files[0].size <= fileSize) {
                this.doc_file = event.target.files;
                var splittedName = fileName.split(".");
                var filenameExt = false;
                var applicationType;

                for (var s = 0; s < fileTypes.length; s++) {
                  if (validate.value[0].file_type !== "") {
                    if (splittedName[1] == fileTypes[s]) {
                      filenameExt = true;
                      applicationType = event.target.files[0].type;
                      console.log(applicationType);
                    }
                  } else {
                    filenameExt = true;
                    applicationType = event.target.files[0].type;
                  }
                }

                if (filenameExt == true) {
                  this.fileType = splittedName[1];
                  console.log(event.target.files[0].type);

                  if (event.target.files[0].type == applicationType || event.target.files[0].type == '') {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(event.target.files[0]);

                    fileReader.onload = function (event) {
                      // ;
                      var bucketName = "renewalapplicationemis";
                      var filename = splittedName[0];
                      var ext = splittedName[1];
                      var expiry = 1800;

                      _this6.uploadService.getSignedUrl(bucketName, ext, filename, expiry).subscribe(function (result) {
                        if (result) {
                          // this.finalUploads[form_controller] = result.key;
                          // this.queslist.controls[index].controls[form_controller].setValue(result.key)
                          // this.form.controls['form_questions']['controls'][i].controls['result'].updateValueAndValidity();
                          var files = _this6.doc_file; // let file: File = files[0];

                          _this6.uploadService.uploadFile(result.url, files[0]).subscribe(function (res) {
                            _this6.finalUploads[form_controller] = result.key;

                            _this6.queslist.controls[index].controls[form_controller].setValue(result.key);
                          });

                          _this6.alertService.success('File Uploaded Successfully');

                          console.log(result.key, 'result.key');
                        } else {
                          _this6.alertService.error('Error in Uploading File please try again');
                        }
                      });
                    };
                  } else {
                    this.alertService.warning('Please upload only ' + validate.value[0].file_type + ' format');
                    this.queslist.controls[index].controls[form_controller].setValue(null);
                  }
                } else {
                  this.alertService.warning('Upload file name without dot(.) OR Please upload only ' + validate.value[0].file_type + ' format');
                  this.queslist.controls[index].controls[form_controller].setValue(null);
                }
              } else {
                this.alertService.warning('File Can`t uploaded because File size should not exceed ' + validate.value[1].file_size + 'MB');
                this.queslist.controls[index].controls[form_controller].setValue(null);
              }
            }
          }
        }, {
          key: "getUploadedFiles1",
          value: function getUploadedFiles1(filename, i) {
            var _this7 = this;

            var bucketName = "renewalapplicationemis";
            var filename = filename;

            if (filename == undefined || filename == "") {
              this.alertService.alert('File Not Uploaded');
              this.queslist.controls[i].controls.IsPhoto.setValue(true);
            }

            var splitword = filename.split('.')[1];
            console.log(filename, 'kfshdfkjhdskfjhsdk');
            console.log(splitword, 'kjfuiwyrewuiryidjfhsdkjfskjf');
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              console.log("file data", result);

              if (result) {
                console.log(result);
                setTimeout(function () {
                  _this7.viewImage(result.url, splitword);

                  console.log(result.url, 'result.url');
                }, 100);

                _this7.queslist.controls[i].controls.IsPhoto.setValue(true);
              }
            });
          }
        }, {
          key: "RemoveAgencyDocnew",
          value: function RemoveAgencyDocnew(form_controller, index) {
            this.finalUploads[form_controller] = "";
            this.queslist.controls[index].controls[form_controller].setValue(null);
          }
        }, {
          key: "viewImage",
          value: function viewImage(urlPdf, ext) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    console.log('daata', urlPdf);
                    _context.n = 1;
                    return this.modalCtrl.create({
                      component: _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__.ViewPdfPage,
                      componentProps: {
                        image: urlPdf,
                        extension: ext
                      },
                      cssClass: 'fullscreen',
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getsectionStatus",
          value: function getsectionStatus() {
            var _this8 = this;

            debugger;
            this.getIonSecId = {};
            this.ionicstorage.getData('sectionStatus').then(function (dataa) {
              if (dataa !== null) {
                // if (typeof dataa == 'object') {
                //   this.getIonSecId = dataa;
                // }
                // else {
                //   this.getIonSecId.push(dataa);
                // }
                _this8.getIonSecId = dataa;

                if (typeof _this8.getIonSecId[_this8.dbPk] == 'undefined') {
                  _this8.getIonSecId[_this8.dbPk] = [];
                } // this.getIonSecId[this.dbPk].push(this.secId)


                if (!_this8.getIonSecId[_this8.dbPk].includes(_this8.secId)) {
                  _this8.getIonSecId[_this8.dbPk].push(_this8.secId);

                  _this8.ionicstorage.insertData_Replace('sectionStatus', _this8.getIonSecId);
                }
              } else {
                if (typeof _this8.getIonSecId[_this8.dbPk] == 'undefined') {
                  _this8.getIonSecId[_this8.dbPk] = [];
                }

                _this8.getIonSecId[_this8.dbPk].push(_this8.secId);

                _this8.ionicstorage.insertData_Replace('sectionStatus', _this8.getIonSecId);
              }
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "localSubmit",
          value: function localSubmit() {
            if (this.objectValId == null) {
              this.objectValId = {};
            }

            var objectVal = {};
            var submitData = this.cwsn.value.form_data;
            debugger; // console.log(submitData, 'submitData')

            for (var i = 0; i < submitData.length; i++) {
              // console.log(submitData[i])
              var fromCntrl = submitData[i].form_controller; // let obj = {
              //   [submitData[i].form_controller] : submitData[i][fromCntrl]
              // }

              objectVal[submitData[i].id] = submitData[i][fromCntrl] ? submitData[i][fromCntrl] : null; // if (typeof objectValId[this.secId] === 'undefined') { objectValId[this.secId] =  new Array(); }

              if (typeof this.objectValId[this.dbPk] === 'undefined') {
                this.objectValId[this.dbPk] = {};
              }

              this.objectValId[this.dbPk][this.secId] = objectVal; // objectVal[submitData[i].form_controller] = submitData[i][fromCntrl]
            }

            this.ionicstorage.insertData_Replace('dynamicFromSecData', JSON.stringify(this.objectValId));
            this.getsectionStatus();
            this.router.navigate(['/tabs/dynamic-index'], {
              queryParams: {
                'secId': this.secId,
                formId: this.formId,
                param1: this.param1,
                param2: this.param2,
                naviBackUrl: this.naviBackUrl
              }
            });
          }
        }, {
          key: "changeEnglish",
          value: function changeEnglish() {
            this.langstatus = 1;
            this.ionicstorage.insertData_Replace('languageValue', this.langstatus);
          }
        }, {
          key: "changeTamil",
          value: function changeTamil() {
            this.langstatus = 2;
            this.ionicstorage.insertData_Replace('languageValue', this.langstatus);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/dynamic-index'], {
              queryParams: {
                'secId': this.secId,
                formId: this.formId,
                param1: this.param1,
                param2: this.param2,
                naviBackUrl: this.naviBackUrl
              }
            });
          }
        }, {
          key: "handleRefresh",
          value: function handleRefresh(event) {
            var _this9 = this;

            setTimeout(function () {
              _this9.fetchJson(_this9.apiJson.form_url);

              event.target.complete();
            }, 1000);
          }
        }]);
      }();

      _DynamicFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
        }, {
          type: _services_dynamicform_service__WEBPACK_IMPORTED_MODULE_6__.DynamicformService
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__.Camera
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_9__.File
        }];
      };

      _DynamicFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-dynamic-form',
        template: _raw_loader_dynamic_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dynamic_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DynamicFormPage);
      /***/
    },

    /***/
    19776:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.page.scss ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-back-button {\n  color: #fff;\n}\n\nsmall {\n  color: red;\n  margin-left: 10px;\n}\n\n.star {\n  color: red;\n  margin-left: 5px;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.ion-text-wrap {\n  margin-left: 5px;\n  width: 90%;\n  font-size: 18px;\n}\n\n.cardbg {\n  background-color: #F3F4FA;\n}\n\n.inputbg {\n  padding: 10px;\n  background-color: #EDDEFF;\n  border-radius: 10px;\n}\n\n.inputbg .get-upload {\n  border: 2px solid #9162b0;\n  border-radius: 20px;\n  padding: 10px;\n  display: flex;\n}\n\n.inputbg .get-upload span {\n  color: #9162b0;\n  font-weight: 700;\n  font-size: 15px;\n}\n\n.inputbg .get-upload ion-icon {\n  font-size: 30px;\n  color: #f00;\n  margin-left: 20px;\n}\n\n.card-content-md {\n  padding: 0px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.carder {\n  padding: 0%;\n  margin: 0%;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  margin: 5px;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.layout {\n  margin: 10px;\n}\n\n.btnbg {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n\n.note {\n  color: red;\n}\n\n.textright {\n  text-align: right;\n  padding: 10px;\n}\n\n.select-txt {\n  font-size: 18px;\n  color: #542374;\n}\n\n.language {\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  color: var(--ion-color-primary);\n  margin: 8px;\n  padding: 10px;\n  box-shadow: 5px 7px 5px #c6c5c5;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.keylinkbackground {\n  background-color: white;\n  padding: 15px;\n}\n\n.keylinkbackgroundinline {\n  background-color: white;\n  padding: 10px;\n}\n\n.tickfalse {\n  color: white;\n  background-color: red;\n  text-align: right;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.cancelbuttonlink {\n  margin-top: 2px;\n}\n\n.notelink {\n  color: #3930f4;\n}\n\n.rfrsh-btn {\n  text-align: center;\n  padding: 50px 0px;\n}\n\n.rfrsh-btn img {\n  width: 150px;\n  margin-bottom: 25px;\n}\n\nion-card {\n  box-shadow: none;\n}\n\nion-card ion-card-content {\n  background: #fff;\n}\n\nion-card ion-card-content h1 {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000;\n  padding: 0px 0px 5px;\n}\n\nion-card ion-card-content .botom-btn {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0px;\n}\n\nion-card ion-card-content .botom-btn ion-button {\n  margin: 0px 10px;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.textaling .lang-btn {\n  border-radius: 5px;\n  background-color: #d5b2ed;\n  color: var(--ion-color-primary);\n  margin: 0px 6px;\n  padding: 8px 12px;\n}\n\n.textaling .lang-btn.lan_active {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBREU7RUFDRSx5QkFBQTtBQUlKOztBQURFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFISTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUtOOztBQUpNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU1SOztBQUpNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU1SOztBQURFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFJSjs7QUFEQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0FBSUY7O0FBREE7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUFJRjs7QUFEQTtFQUNFLFVBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFJRjs7QUFEQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FBSUY7O0FBREE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFJRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQURBO0VBQ0UsY0FBQTtBQUlGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUhFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBREE7RUFDRSxnQkFBQTtBQUlGOztBQUhFO0VBQ0UsZ0JBQUE7QUFLSjs7QUFKSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQU1OOztBQUpJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFNTjs7QUFMTTtFQUNFLGdCQUFBO0FBT1I7O0FBRkE7RUFDRSxlQUFBO0FBS0Y7O0FBSkU7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNTjs7QUFMTTtFQUNJLGdCQUFBO0FBT1YiLCJmaWxlIjoiZHluYW1pYy1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbntcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbnNtYWxse1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5zdGFye1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToyLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmlvbi10ZXh0LXdyYXB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5jYXJkYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEZBO1xyXG4gIH1cclxuXHJcbiAgLmlucHV0Ymd7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VEREVGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuZ2V0LXVwbG9hZHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzkxNjJiMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgc3BhbntcclxuICAgICAgICBjb2xvcjogIzkxNjJiMDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgICBpb24taWNvbntcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7ICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGVudC1tZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY2FyZGVye1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcblxyXG4uYm9yZGVyc3R5bGV7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4ucGFkZGluZ3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubGF5b3V0e1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmJ0bmJne1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ub3Rle1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi50ZXh0cmlnaHR7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNlbGVjdC10eHR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNTQyMzc0O1xyXG59XHJcblxyXG4ubGFuZ3VhZ2V7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiA1cHggN3B4IDVweCAjYzZjNWM1XHJcbn1cclxuXHJcbi50ZXh0YWxpbmd7XHJcbiAgdGV4dC1hbGlnbjplbmQ7XHJcbn1cclxuXHJcbi5rZXlsaW5rYmFja2dyb3VuZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ua2V5bGlua2JhY2tncm91bmRpbmxpbmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRpY2tmYWxzZXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYW5jZWxidXR0b25saW5re1xyXG4gIG1hcmdpbi10b3A6MnB4IDtcclxufVxyXG5cclxuLm5vdGVsaW5re1xyXG4gIGNvbG9yOiByZ2IoNTcsIDQ4LCAyNDQpO1xyXG59XHJcblxyXG4ucmZyc2gtYnRue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1MHB4IDBweDtcclxuICBpbWd7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMHB4IDVweDtcclxuICAgIH1cclxuICAgIC5ib3RvbS1idG57XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50ZXh0YWxpbmd7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIC5sYW5nLWJ0bntcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDViMmVkO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAmLmxhbl9hY3RpdmV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    27751:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dynamic-form-generator/dynamic-form/dynamic-form.page.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-row style=\"align-items: center;\">\r\n      <ion-col size=\"8\">\r\n        <ion-row style=\"flex-wrap: nowrap;\">\r\n          <ion-buttons class=\"back-icon\">\r\n            <ion-icon name=\"arrow-back\" (click)=\"goBack()\">\r\n            </ion-icon>\r\n          </ion-buttons>\r\n          <ion-title class=\"ion-text-wrap\" *ngIf=\"langstatus == 1\">{{section?.section_name}}</ion-title>\r\n          <ion-title class=\"ion-text-wrap\" *ngIf=\"langstatus == 2\">{{section?.section_name_t}}</ion-title>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div class=\"textaling\">\r\n          <ion-label class=\"lang-btn\" (click)=\"changeEnglish()\" [class.lan_active]=\"langstatus == 1\">E</ion-label>\r\n          <ion-label class=\"lang-btn\" (click)=\"changeTamil()\" [class.lan_active]=\"langstatus == 2\">த</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/dynamic-index\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Form Registration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <ion-card class=\"card-content\">\r\n    <ion-card-content *ngIf=\"form_data.controls.length > 0\">\r\n      <form id=\"cwsn\" [formGroup]=\"cwsn\" >\r\n        <div formArrayName=\"form_data\">\r\n          <div *ngFor=\"let control of form_data.controls; let i = index;\" [formGroupName]=\"i\">\r\n            <div [ngSwitch]=\"control.controls.question_type.value\">\r\n              <div *ngSwitchCase=\"'yesno'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.dis_form_controller.value)\"\r\n                                  name={{control.controls.dis_form_controller.value}}>\r\n                                  <ng-container *ngIf=\"langstatus == 1\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                  <ng-container *ngIf=\"langstatus == 2\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'text'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input formControlName={{control.controls.form_controller.value}}\r\n                                  name={{control.controls.form_controller.value}} placeholder=\"Enter Text\"></ion-input>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['minlength']\">Enter proper minimum length {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['maxlength']\">Enter proper maximum length {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed alphabets</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input formControlName={{control.controls.dis_form_controller.value}}\r\n                                  disbaled=\"true\" name={{control.controls.dis_form_controller.value}}\r\n                                  placeholder=\"Enter Text\" disabled=\"true\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['minlength']\">Enter proper minimum length {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['maxlength']\">Enter proper maximum length {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed alphabets</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'date'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='future_date'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"control.controls.validation.value[2]?.date_value\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='past_date'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [max]=\"control.controls.validation.value[2]?.date_value\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='current_future'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"todayDate\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='current_past'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [max]=\"todayDate\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='ndate_future'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"todayDate\" [max]=\"control.controls.validation.value[2]?.date_value\"></ion-input>\r\n                                <ion-input *ngIf=\"control.controls.validation.value[0].dateValid=='ndate_past'\" type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} [min]=\"control.controls.validation.value[2]?.date_value\" [max]=\"todayDate\"></ion-input>\r\n                              </ion-item>\r\n                              <!-- <ion-item *ngIf=\"control.controls.validation.value=='future_date'\">\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} placeholder=\"Enter Date\" [max]=\"maxDateValue\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item *ngIf=\"control.controls.validation.value=='past_date'\">\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\" formControlName={{control.controls.form_controller.value}} placeholder=\"Enter Date\" [min]=\"minDateValue\"></ion-input>\r\n                              </ion-item> -->\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\"\r\n                                  formControlName={{control.controls.dis_form_controller.value}} disabled=\"true\"\r\n                                  placeholder=\"Enter Date\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc.value_t}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'file'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                ? this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n\r\n                              <div class=\"keylinkbackground\" *ngIf=\"control.controls.IsPhoto.value\">\r\n                                <div>\r\n                                  <ion-item class=\"item-styles\">\r\n                                    <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                      formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                      (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                      name={{control.controls.form_controller.value}}>\r\n                                      <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                      <ion-select-option value=\"2\">No</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <div *ngIf=\"finalUploads[control.controls.form_controller.value]\" class=\"get-upload\">\r\n                                <span (click)=\"getUploadedFiles1(finalUploads[control.controls.form_controller.value] ,i)\">\r\n                                  {{this.finalUploads[control.controls.form_controller.value]}}</span>\r\n                                  <ion-icon name=\"close-circle-outline\" (click)=\"RemoveAgencyDocnew(control.controls.form_controller.value, i)\"></ion-icon>\r\n                              </div>\r\n                              <ion-item *ngIf=\"!finalUploads[control.controls.form_controller.value]\">\r\n                                <ion-input type=\"file\" (change)=\"FileUploadsnew($event, i, control.controls.form_controller.value, control.controls.validation)\" formControlName={{control.controls.form_controller.value}}></ion-input>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'photo'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <!-- <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                ? this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n\r\n                              <div class=\"keylinkbackground\" *ngIf=\"control.controls.IsPhoto.value\">\r\n                                <div>\r\n                                  <ion-item class=\"item-styles\">\r\n                                    <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                      formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                      (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                      name={{control.controls.form_controller.value}}>\r\n                                      <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                      <ion-select-option value=\"2\">No</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </div>\r\n                              </div>\r\n                            </div> -->\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <div *ngIf=\"finalUploads[control.controls.form_controller.value]\" class=\"get-upload\">\r\n                                <span (click)=\"getUploadedFiles1(finalUploads[control.controls.form_controller.value] ,i)\">\r\n                                  {{this.finalUploads[control.controls.form_controller.value]}}</span>\r\n                                  <ion-icon name=\"close-circle-outline\" (click)=\"RemoveAgencyDocnew(control.controls.form_controller.value, i)\"></ion-icon>\r\n                              </div>\r\n                              <ion-item *ngIf=\"!finalUploads[control.controls.form_controller.value]\">\r\n                                <ion-input  style=\"font-size: small; height: 10px ;  display: none;\" type=\"file\" formControlName={{control.controls.form_controller.value}}></ion-input>\r\n                                <ion-icon item-end name=\"camera\"  style=\"color: var(--ion-color-primary);\" (click)=\"openCameraOn(i, control.controls.form_controller.value, control.controls.validation)\"></ion-icon>\r\n                                <!-- <ion-input type=\"file\" (change)=\"FileUploadsnew($event, i, control.controls.form_controller.value, control.controls.validation)\" formControlName={{control.controls.form_controller.value}}></ion-input> -->\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'number'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input onkeypress=\"return (event.charCode>47 && event.charCode<58)\" placeholder=\"Enter Number\"\r\n                                  formControlName={{control.controls.form_controller.value}}\r\n                                  name={{control.controls.form_controller.value}} placeholder=\"Enter Number\">\r\n                                </ion-input>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['min']\">Enter proper min value {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['max']\">Enter proper max value {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed numbers</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n\r\n                            </div>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input placeholder=\"Enter Number\"\r\n                                  formControlName={{control.controls.dis_form_controller.value}}\r\n                                  name={{control.controls.dis_form_controller.value}} disabled=\"true\">\r\n                                </ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors && (form_data.controls[i].get([control.controls.form_controller.value]).touched || form_data.controls[i].get([control.controls.form_controller.value]).dirty)\" class=\"text-danger\">\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['min']\">Enter proper minimum length {{control.controls.validation.value[0].min}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['max']\">Enter proper maximum length {{control.controls.validation.value[1].max}}</div>\r\n                                <div *ngIf=\"form_data.controls[i].get([control.controls.form_controller.value]).errors['pattern']\">Only allowed numbers</div>\r\n                              </div>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div *ngSwitchCase=\"'inline'\">\r\n                <div *ngFor=\"let obj of control.controls.inline.value;let l=index\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"row-line\" *ngIf=\"!onActive\" (click)=\"onExpand(true)\">\r\n                      <ion-row class=\"borderstyle\">\r\n                        <ion-col size=\"11\" class=\"padding\">\r\n                          <ion-label class=\"headlabel\">{{obj.title}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"textright\">\r\n                          <ion-icon name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"row-line\" *ngIf=\"onActive\" (click)=\"onExpand(false)\">\r\n                      <ion-row class=\"borderstyle\">\r\n                        <ion-col size=\"11\" class=\"padding\">\r\n                          <ion-label class=\"headlabel\">{{obj.title}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"textright\">\r\n                          <ion-icon name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" *ngIf=\"onActive\">\r\n                      <div class=\"inputbg\">\r\n                        <div *ngFor=\"let elem of obj.elements.controls let i=index\">\r\n                          <div *ngIf=\"i == 0\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </div>\r\n                          <div *ngIf=\"elem.controls.type.value == 'select'\">\r\n                            <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                            <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                            <ion-item class=\"item-styles\">\r\n                              <ion-select class=\"select\" placeholder=\"{{elem.controls.type.value}}\" ok-text=\"Ok\"\r\n                                cancel-text=\"Dismiss\" formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                                <ion-select-option [value]=\"val.id\" *ngFor=\"let val of elem.controls.options.value\">\r\n                                  {{val.value}}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-item>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"elem.controls.type.value == 'text' || elem.controls.type.value == 'number' || elem.controls.type.value == 'tel' || elem.controls.type.value == 'date'\">\r\n                            <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                            <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                            <ion-item>\r\n                              <ion-input type=\"{{elem.controls.type.value}}\"\r\n                                placeholder=\"{{elem.controls.placeholder.value}}\"\r\n                                formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                              </ion-input>\r\n                            </ion-item>\r\n                          </div>\r\n                          <div *ngIf=\"elem.controls.type.value == 'file'\">\r\n                            <div *ngIf=\"elem.controls.url.value!= null\">\r\n                              <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                              <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                              <div class=\"keylinkbackgroundinline\">\r\n                                <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                elem.controls.url.value\r\n                                ? elem.controls.url.value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n                              </div>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,elem.controls.form_control.value)\"\r\n                                  name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                  indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div *ngSwitchCase=\"'mcq'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            {{control.controls.value}}\r\n                            <div *ngIf=\"control.controls.verify.value != 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                <ng-container *ngIf=\"langstatus == 1\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"langstatus == 2\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                               \r\n                                </ion-select>\r\n                                <!-- <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                  <ion-select-option [value]=\"val.id\"\r\n                                    *ngFor=\"let val of control.controls.options.value\">\r\n                                    {{val.value}}\r\n                                  </ion-select-option>\r\n                                </ion-select> -->\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.dis_form_controller.value)\">\r\n                                  <ng-container *ngIf=\"langstatus == 1\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                  <ng-container *ngIf=\"langstatus == 2\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'mmcq'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\" [innerHTML]=\"control.controls.question_title.value\"></h1>\r\n                          <h1 *ngIf=\"langstatus == 2\" [innerHTML]=\"control.controls.question_title_t.value\"></h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text.value\"></ion-label> \r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\" [innerHTML]=\"control.controls.question_text_t.value\"></ion-label>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            {{control.controls.value}}\r\n                            <div *ngIf=\"control.controls.verify.value != 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                (ionChange)=\"handleMMCQNew($event.target.value, i,control.controls.form_controller.value)\" [multiple]=\"true\">\r\n                                <ng-container *ngIf=\"langstatus == 1\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"langstatus == 2\">\r\n                                  <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                    <div [innerHTML]=\"val.value\"></div>\r\n                                  </ion-select-option>\r\n                                </ng-container>\r\n                                </ion-select>\r\n                                <!-- <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\">\r\n                                  <ion-select-option [value]=\"val.id\"\r\n                                    *ngFor=\"let val of control.controls.options.value\">\r\n                                    {{val.value}}\r\n                                  </ion-select-option>\r\n                                </ion-select> -->\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMMCQNew($event, i,control.controls.dis_form_controller.value)\">\r\n                                  <ng-container *ngIf=\"langstatus == 1\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                  <ng-container *ngIf=\"langstatus == 2\">\r\n                                    <ion-select-option [value]=\"val.id\" *ngFor=\"let val of control.controls.options_t.value\">\r\n                                      <div [innerHTML]=\"val.value\"></div>\r\n                                    </ion-select-option>\r\n                                  </ng-container>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <div class=\"star\" *ngIf=\"control.controls.required.value == 1\">mandatory(*)</div>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <p style=\"color: red; margin-left: 10px;\"\r\n                *ngIf=\"(control.controls[control.controls.form_controller.value].hasError('required'))\">\r\n                Field is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"botom-btn\">\r\n          <ion-button (click)=\"goBack()\"><span style=\"color:#fff;\">Back</span></ion-button>\r\n          <ion-button (click)=\"localSubmit()\" [disabled]=\"!cwsn.controls.form_data.valid\"><span style=\"color:#fff;\">Save & Next</span></ion-button>\r\n        </div>\r\n      </form>\r\n    </ion-card-content>\r\n    <ion-card-content *ngIf=\"form_data.controls.length == 0\" class=\"rfrsh-btn\">\r\n      <img src=\"https://i.pinimg.com/564x/7d/d4/d5/7dd4d5852fa388f238d485080089d94e.jpg\" alt=\"\">\r\n      <h4><b>Swipe Down To Refresh</b></h4>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"handleRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dynamic-form-generator_dynamic-form_dynamic-form_module_ts-es5.js.map