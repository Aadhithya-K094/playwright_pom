(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_rc_rc-grant-form_rc-grant-form_module_ts"], {
    /***/
    93665:
    /*!************************************************************************!*\
      !*** ./src/app/pages/rc/rc-grant-form/rc-grant-form-routing.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RCGrantFormPageRoutingModule": function RCGrantFormPageRoutingModule() {
          return (
            /* binding */
            _RCGrantFormPageRoutingModule
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


      var _rc_grant_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rc-grant-form.page */
      20039);

      var routes = [{
        path: '',
        component: _rc_grant_form_page__WEBPACK_IMPORTED_MODULE_0__.RCGrantFormPage
      }];

      var _RCGrantFormPageRoutingModule = /*#__PURE__*/_createClass(function RCGrantFormPageRoutingModule() {
        _classCallCheck(this, RCGrantFormPageRoutingModule);
      });

      _RCGrantFormPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RCGrantFormPageRoutingModule);
      /***/
    },

    /***/
    22683:
    /*!****************************************************************!*\
      !*** ./src/app/pages/rc/rc-grant-form/rc-grant-form.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RCGrantFormPageModule": function RCGrantFormPageModule() {
          return (
            /* binding */
            _RCGrantFormPageModule
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


      var _rc_grant_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rc-grant-form-routing.module */
      93665);
      /* harmony import */


      var _rc_grant_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rc-grant-form.page */
      20039); // import { IonicStorageModule } from '@ionic/storage';
      // import { RCParentFormPage } from './rc-parent-form/rc-parent-form.page';


      var _RCGrantFormPageModule = /*#__PURE__*/_createClass(function RCGrantFormPageModule() {
        _classCallCheck(this, RCGrantFormPageModule);
      });

      _RCGrantFormPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _rc_grant_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.RCGrantFormPageRoutingModule // IonicStorageModule.forRoot({  name: '__mydb',
        // driverOrder: ['indexeddb', 'sqlite', 'websql']})
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
        declarations: [_rc_grant_form_page__WEBPACK_IMPORTED_MODULE_1__.RCGrantFormPage]
      })], _RCGrantFormPageModule);
      /***/
    },

    /***/
    20039:
    /*!**************************************************************!*\
      !*** ./src/app/pages/rc/rc-grant-form/rc-grant-form.page.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RCGrantFormPage": function RCGrantFormPage() {
          return (
            /* binding */
            _RCGrantFormPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_rc_grant_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./rc-grant-form.page.html */
      7110);
      /* harmony import */


      var _rc_grant_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rc-grant-form.page.scss */
      9);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/regulatory.service */
      63987);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _view_pdf_view_pdf_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../view-pdf/view-pdf.page */
      65175); // import { Storage } from '@ionic/storage';
      // import { CrudService } from '../crud.service';
      // import { ViewChildComponent } from '../view-child/view-child.component';


      var _RCGrantFormPage = /*#__PURE__*/function () {
        function RCGrantFormPage(rt, http, rcservice, fb, route, uploadService, alertService, sanitizer, modalCtrl, alertController) {
          _classCallCheck(this, RCGrantFormPage);

          this.rt = rt;
          this.http = http;
          this.rcservice = rcservice;
          this.fb = fb;
          this.route = route;
          this.uploadService = uploadService;
          this.alertService = alertService;
          this.sanitizer = sanitizer;
          this.modalCtrl = modalCtrl;
          this.alertController = alertController;
          this.dynamicFormArray = [];
          this.submitted = false;
          this.queslist = [];
          this.questEnglish = true;
          this.questTamil = false;
          this.quesString = 'Question';
          this.sec_status_list = [];
          this.inlinelist = new Array();
          this.rcappCols = new Array();
          this.show_child = new Array();
          this.parent_values = new Array();
          this.default_values = {};
          this.data_patch = [];
          this.patch_data = new Array();
          this.Image = [{}];
          this.recomdations = {};
          this.recomdationsInline = {};
        }

        return _createClass(RCGrantFormPage, [{
          key: "getHtmlWithBypassedSecurity",
          value: function getHtmlWithBypassedSecurity(code) {
            return this.sanitizer.bypassSecurityTrustHtml(code);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.submitted = false;
            this.formPatchData = JSON.parse(localStorage.getItem("rc-details"));
            var x = this.cwsn.get('form_data');
            x.controls = [];
            this.recomdations = {}; // this.form_data.reset();

            debugger;
            this.sectionID = this.route.snapshot.queryParamMap.get("secID");
            this.sectionIndex = this.route.snapshot.queryParamMap.get("secindex");
            this.sectionstatus = this.route.snapshot.queryParamMap.get("secStatus");
            console.log(this.sectionID);
            console.log(this.applicationID);
            this.sectionName = this.route.snapshot.queryParamMap.get("secName");
            this.langstatus = this.route.snapshot.queryParamMap.get("langStat");
            this.applicationID = this.route.snapshot.queryParamMap.get("AppID");
            this.appType = this.route.snapshot.queryParamMap.get("appType");
            this.schoolname = this.route.snapshot.queryParamMap.get("schoolName");
            this.districtid = this.route.snapshot.queryParamMap.get("district");
            console.log(this.langstatus, "asdsad");
            console.log(this.appType);
            this.getRCquestions();
            this.Image = [{}];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.rt.navigate(['/tabs/index'], {
              queryParams: {
                'AppID': this.applicationID,
                'schoolName': this.schoolname,
                'district': this.districtid,
                'Apptype': this.appType
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "changeEnglish",
          value: function changeEnglish() {
            this.questEnglish = true;
            this.questTamil = false;
          }
        }, {
          key: "changeTamil",
          value: function changeTamil() {
            this.questEnglish = false;
            this.questTamil = true;
          }
        }, {
          key: "getRCquestions",
          value: function getRCquestions() {
            var _this = this;

            var data = {
              "application_id": this.applicationID
            };
            this.rcservice.toGetRCFormquestion(data).subscribe(function (res) {
              _this.question = res.result.questions[_this.sectionID];
              _this.sectionslist = res.result.sections;
              _this.db_data = res.first_time;
              console.log(_this.db_data); // if(this.db_data == 1){
              // this.data_patch = res.result.web_data['RCApplictn']
              // }
              // else{

              _this.data_patch = res.result.data['RCApplictn'];

              for (var i = 0; i < _this.data_patch.length; i++) {
                if (_this.data_patch[i].application_id == _this.applicationID) {
                  _this.patch_data = _this.data_patch[i];
                  console.log(_this.patch_data, 'patch data');
                }
              }

              _this.lodaCWSN(_this.question);

              console.log(_this.question);
            });
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.cwsn = this.fb.group({
              // formId: new FormControl('', null),
              form_data: this.fb.array([])
            });
          }
        }, {
          key: "form_data",
          get: function get() {
            return this.cwsn.get("form_data");
          }
        }, {
          key: "inline_data",
          get: function get() {
            return this.cwsn.get("inline_data");
          }
        }, {
          key: "lodaCWSN",
          value: function lodaCWSN(data) {
            var tmp_data = new Array();

            for (var i in data) {
              tmp_data.push(data[i]);
            }

            this.queslist = this.cwsn.controls['form_data'];
            console.log(this.queslist, "starting");
            var resultArray = Object.keys(tmp_data).map(function (index) {
              var person = tmp_data[index];
              return person;
            });
            console.log("3423432hj", resultArray);

            if (resultArray.length > 0) {
              for (var _i = 0; _i < resultArray.length; _i++) {
                /*if(typeof resultArray[i].question_text ==='object'){
                  for(let j in resultArray[i].question_text){
                    let q=resultArray[i].question_text[i];
                    dataArray=q.data_array;
                    console.log(q,"qtext");
                    if(dataArray!=''){
                      let da=resultArray[i].form_controller.split('-');
                      let val=new FormControl('', Validators.compose([Validators.required]));
                      tmp[dataArray][da[1]]=val;
                    }
                  }
                } else {
                  tmp[resultArray[i].form_controller]= new FormControl('', Validators.compose([Validators.required]));
                }*/
                //console.log(this.queslist, "DHeepesh")
                if (resultArray[_i].form_controller != "inline") {
                  var t_child = {
                    childs: resultArray[_i].form_controller,
                    values: resultArray[_i].show_child,
                    child_id: _i
                  };
                  if (typeof this.show_child[resultArray[_i].parent_form_controller] == 'undefined') this.show_child[resultArray[_i].parent_form_controller] = new Array();

                  this.show_child[resultArray[_i].parent_form_controller].push(t_child);

                  this.parent_values[resultArray[_i].form_controller] = resultArray[_i].parent_form_controller == '' ? true : false;

                  var validator = _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);

                  this.rcappCols.push(resultArray[_i].form_controller);

                  if (parseInt(resultArray[_i].verify) == 1) {
                    this.queslist.push(this.fb.group(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].id, null),
                      question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_desc, null),
                      question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_desc_t, null),
                      question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_text, null),
                      question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_text_t, null),
                      question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_title, null),
                      question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_title_t, null),
                      question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_type, null),
                      required: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].required, null),
                      verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].verify, null),
                      options: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].options, null),
                      parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].parent_form_controller, null),
                      form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].form_controller, null),
                      dis_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].dis_form_controller, null)
                    }, resultArray[_i].form_controller, new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', resultArray[_i].parent_form_controller != '' ? null : validator)), resultArray[_i].dis_form_controller, new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', resultArray[_i].parent_form_controller)), "sub", new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].sub, null)), "quesString", this.quesString), "IsPhoto", false)));
                  } else {
                    this.queslist.push(this.fb.group(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].id, null),
                      question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_desc, null),
                      question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_desc_t, null),
                      question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_text, null),
                      question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_text_t, null),
                      question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_title, null),
                      question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_title_t, null),
                      question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_type, null),
                      required: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].required, null),
                      verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].verify, null),
                      options: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].options, null),
                      parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].parent_form_controller, null),
                      form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].form_controller, null)
                    }, resultArray[_i].form_controller, new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', resultArray[_i].parent_form_controller != '' ? null : validator)), "sub", new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].sub, null)), "quesString", this.quesString), "IsPhoto", false)));
                  } // if (this.formPatchData.length > 0) {
                  //   if (this.formPatchData[this.sectionIndex].RCApplictn != undefined) {
                  //     this.queslist.controls[i].patchValue({
                  //       [resultArray[i].form_controller]: this.formPatchData[this.sectionIndex].RCApplictn[resultArray[i].form_controller]
                  //     });
                  //     this.queslist.controls[i].controls[resultArray[i].form_controller].updateValueAndValidity();
                  //   }
                  // }


                  if (this.patch_data != undefined) {
                    if (parseInt(resultArray[_i].verify) == 1) {
                      this.queslist.controls[_i].patchValue(_defineProperty(_defineProperty({}, resultArray[_i].dis_form_controller, this.patch_data[resultArray[_i].dis_form_controller]), resultArray[_i].form_controller, this.patch_data[resultArray[_i].form_controller]));

                      this.queslist.controls[_i].controls[resultArray[_i].dis_form_controller].updateValueAndValidity();

                      this.queslist.controls[_i].controls[resultArray[_i].form_controller].updateValueAndValidity();
                    } else {
                      this.queslist.controls[_i].patchValue(_defineProperty({}, resultArray[_i].form_controller, this.patch_data[resultArray[_i].form_controller]));

                      this.queslist.controls[_i].controls[resultArray[_i].form_controller].updateValueAndValidity();
                    }
                  }
                } else {
                  var _validator = _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);

                  this.inlinelist = new Array();

                  var obj = _defineProperty(_defineProperty(_defineProperty(_defineProperty({
                    id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].id, null),
                    question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_desc, null),
                    question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_desc_t, null),
                    question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_text, null),
                    question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_text_t, null),
                    question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_title, null),
                    question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_title_t, null),
                    question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].question_type, null),
                    required: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].required, null),
                    verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].verify, null),
                    options: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].options, null),
                    parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].parent_form_controller, null),
                    form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].form_controller, null)
                  }, resultArray[_i].form_controller, new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', resultArray[_i].parent_form_controller != '' ? null : _validator)), "sub", new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].sub, null)), "quesString", this.quesString), "IsPhoto", false);

                  if (resultArray[_i].question_text != '<h3>No Form Found</h3>') {
                    for (var j in resultArray[_i].question_text) {
                      var inl = resultArray[_i].question_text[j];
                      var temp = this.fb.array([]);

                      for (var k in inl.elements) {
                        if (typeof this.default_values[inl.elements[k].indexid] == 'undefined') {
                          this.default_values[inl.elements[k].indexid] = new Array();
                        }

                        if (inl.elements[k].type == 'hidden') {
                          this.default_values[inl.elements[k].indexid].push(_defineProperty({}, inl.elements[k].name, inl.elements[k].value));
                        }

                        temp.push(this.fb.group(_defineProperty({
                          id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].id, null),
                          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].name, null),
                          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].type, null),
                          placeholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].placeholder, null),
                          label: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].label, null),
                          label_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].label_t, null),
                          lang: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].lang, null),
                          indexid: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].indexid, null),
                          parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(resultArray[_i].parent_form_controller, null),
                          form_control: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].form_control, null),
                          options: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].options, null),
                          url: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].url, null),
                          value: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].value, null)
                        }, inl.elements[k].form_control, new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', inl.elements[k].parent_form_controller != '' ? null : _validator))));
                        obj[inl.elements[k].form_control] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(inl.elements[k].value, null);
                      }

                      this.inlinelist.push({
                        "title": inl.title,
                        "elements": temp
                      });
                      console.log(this.inlinelist, 'inline');
                    }
                  }

                  obj['inline'] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.inlinelist, null);
                  this.queslist.push(this.fb.group(obj));
                }
              }

              console.log("resultData", this.queslist);
              console.log(this.show_child, "childs");
              console.log(this.parent_values, "childs");
              console.log(this.default_values, 'default VALUE');
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            this.onActive = true;
            this.onExpand(true);
            setTimeout(function () {
              var d = {
                app_type: _this2.appType,
                application_id: _this2.applicationID,
                section_status: _this2.sec_status_list
              };
              var table = {};
              var frm = document.getElementsByName('dyno');
              console.log(frm);

              for (var i in frm[0]) {
                var ele = frm[0][i];

                if (typeof ele !== 'undefined' && ele !== null && ele.name !== null) {
                  console.log(ele.tag); // console.log(ele.parentElement);

                  if (typeof ele.parentElement !== 'undefined' && ele.parentElement !== null) {
                    if (typeof ele.parentElement.lang !== 'undefined' && ele.parentElement.lang != '') {
                      var par = ele.parentElement;
                      var darray = par.lang;
                      var p = par.id.split('-');
                      var indexid = par.id.replace(p[0] + '-', '');
                      console.log(darray, indexid, 'jdshfkjsdhfkjsdhfkjsdh');

                      if (typeof table[darray] === 'undefined') {
                        table[darray] = {};
                      }

                      if (typeof table[darray][indexid] === 'undefined') {
                        if (typeof _this2.default_values[indexid] !== 'undefined') {
                          var tdata = {};

                          for (var _d in _this2.default_values[indexid]) {
                            var tempdata = _this2.default_values[indexid][_d];
                            console.log(tempdata, "vasee");

                            for (var key in tempdata) {
                              tdata[key] = tempdata[key];
                            }
                          }

                          table[darray][indexid] = tdata;
                        } else {
                          table[darray][indexid] = {};
                        }
                      }

                      table[darray][indexid][p[0]] = ele.value;
                    } else {
                      if (_this2.rcappCols.indexOf(ele.name) != -1) {
                        d[ele.name] = ele.value;
                      }
                    }
                  } else {
                    if (_this2.rcappCols.indexOf(ele.name) != -1) {
                      d[ele.name] = ele.value;
                    }
                  }
                }
              }

              console.log(frm); // console.log(d)

              debugger;

              if (_this2.cwsn.valid) {
                _this2.submitted = false;
                _this2.sectionslist[_this2.sectionIndex].section_status = 1;
                var sec_status = new Object();

                for (var _i2 in _this2.sectionslist) {
                  sec_status[_this2.sectionslist[_i2].id] = _this2.sectionslist[_i2].section_status;
                }

                d['section_status'] = sec_status;
                var data = {
                  RCApplictn: d,
                  Recommendations: _this2.recomdations,
                  RecommendationsInline: _this2.recomdationsInline
                };
                console.log(data);

                if (typeof table['RCSchClsStrgth'] !== 'undefined') {
                  data['RCSchClsStrgth'] = table['RCSchClsStrgth'];
                }

                if (typeof table['RCTeachrQulfyCnt'] !== 'undefined') {
                  data['RCTeachrQulfyCnt'] = table['RCTeachrQulfyCnt'];
                }

                if (typeof table['RCBuildings'] !== 'undefined') {
                  data['RCBuildings'] = table['RCBuildings'];
                }

                if (typeof table['RCSchlFloors'] !== 'undefined') {
                  data['RCSchlFloors'] = table['RCSchlFloors'];
                }

                if (typeof table['RCSchlRooms'] !== 'undefined') {
                  data['RCSchlRooms'] = table['RCSchlRooms'];
                }

                if (typeof table['RCRoomEqupCnt'] !== 'undefined') {
                  data['RCRoomEqupCnt'] = table['RCRoomEqupCnt'];
                }

                if (typeof table['docs'] !== 'undefined') {
                  data['docs'] = table['docs'];
                }

                if (typeof table['RCOwnership'] !== 'undefined') {
                  data['RCOwnership'] = table['RCOwnership'];
                }

                if (typeof table['RCFloors'] !== 'undefined') {
                  data['RCFloors'] = table['RCFloors'];
                } //Local storage for saving all sections  


                var re_details = JSON.parse(localStorage.getItem("rc-details"));
                re_details[_this2.sectionIndex] = data;
                localStorage.setItem("rc-details", JSON.stringify(re_details)); //Save API for saving data in Database

                _this2.rcservice.saveRC(data).subscribe(function (res) {
                  _this2.alertService.success(res.message);
                });

                setTimeout(function () {
                  _this2.rt.navigate(['/tabs/index'], {
                    queryParams: {
                      'AppID': _this2.applicationID,
                      'schoolName': _this2.schoolname,
                      'district': _this2.districtid,
                      'Apptype': _this2.appType
                    },
                    skipLocationChange: false
                  });
                }, 1000);
              } else {
                _this2.submitted = true;
              }
            }, 200);
          }
        }, {
          key: "st_prop",
          value: function st_prop(event) {
            event.stopPropagation();
          }
        }, {
          key: "handleClearFile",
          value: function handleClearFile(url, key) {
            this.Image[0][url] = '';
            this[key] = '';
          }
        }, {
          key: "getUploadedFiles1",
          value: function getUploadedFiles1(filename, id) {
            var _this3 = this;

            if (filename == undefined || filename == "") {
              this.alertService.alert('File Not Uploaded');
              this.queslist.controls[id].controls.IsPhoto.setValue(true);
              return;
            }

            var splitword = filename.split('.')[1]; // Build CloudFront URL directly using folder path (matches web app pattern)

            var fileUrl = this.uploadService.getRCFileViewUrl(this.appType, filename);

            if (!fileUrl) {
              // Fallback: use getUploadedFiles API for cases where folder mapping is not available
              var bucketName = "emisapplication";
              var expiry = 1800;
              this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                if (result) {
                  var stg = 'image_' + id;
                  _this3.Image[0][stg] = result.url;
                  setTimeout(function () {
                    _this3.viewImage(_this3.Image[0]['image_' + id], splitword);
                  }, 100);

                  _this3.queslist.controls[id].controls.IsPhoto.setValue(true);
                }
              });
              return;
            }

            console.log('RC file view URL:', fileUrl);
            var stg = 'image_' + id;
            this.Image[0][stg] = fileUrl;
            setTimeout(function () {
              _this3.viewImage(_this3.Image[0]['image_' + id], splitword);
            }, 100);
            this.queslist.controls[id].controls.IsPhoto.setValue(true);
          }
        }, {
          key: "getHtml",
          value: function getHtml(html) {
            debugger;
            console.log(html);
            return (html + '').replace(/\\(.?)/g, function (s, n1) {
              switch (n1) {
                case '\\':
                  return '\\';

                case '0':
                  return "\0";

                case '':
                  return '';

                default:
                  return n1;
              }
            });
          }
        }, {
          key: "onExpand",
          value: function onExpand(item) {
            this.onActive = item;
          }
        }, {
          key: "handleMCQ",
          value: function handleMCQ(val, ind) {
            var _this4 = this;

            debugger;

            for (var _i3 = 0; _i3 < this.queslist.value.length; _i3++) {
              if (this.queslist.value[_i3].quesString == "SubQues" + ind) {
                if (this.queslist.length == _i3) {
                  this.queslist.removeAt(_i3 - 1);
                } else {
                  this.queslist.removeAt(_i3);
                }
              }
            }

            this.queslist.value.map(function (mp, index) {
              if (mp.quesString == "SubQues" + ind) {
                _this4.queslist.removeAt(index);
              }
            });
            console.log("pslice", this.queslist);

            if (this.form_data.value[ind] && this.form_data.value[ind].sub) {
              for (var i = 0; i < this.form_data.value[ind].sub.length; i++) {
                for (var j = 0; j < this.form_data.value[ind].sub[i].show_child.length; j++) {
                  if (val.detail.value == this.form_data.value[ind].sub[i].show_child[j]) {
                    var subques = this.form_data.value[ind].sub[i];
                    this.queslist.push(this.fb.group(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
                      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.id, null),
                      question_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.question_desc, null),
                      question_desc_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.question_desc_t, null),
                      question_text: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.question_text, null),
                      question_text_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.question_text_t, null),
                      question_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.question_title, null),
                      question_title_t: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.question_title_t, null),
                      question_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.question_type, null),
                      required: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.required, null),
                      verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.verify, null),
                      options: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.options, null),
                      parent_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques[i].parent_form_controller, null),
                      form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.form_controller, null),
                      dis_form_controller: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques[i].dis_form_controller, null)
                    }, subques.form_controller, new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]))), "sub", new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(subques.sub, null)), "quesString", 'SubQues' + ind), "IsPhoto", false)));
                  }
                }
              }
            }
          }
        }, {
          key: "handleMCQNew",
          value: function handleMCQNew(val, i, form_name) {
            console.log(val, form_name);
            var childs = this.show_child[form_name];
            var occurred = false;
            console.log(childs, "parent chosen");

            for (var l in childs) {
              var e = childs[l];
              occurred = false;

              for (var j in e.values) {
                if (val.detail.value == e.values[j]) occurred = true;
              }

              if (occurred == true) {
                console.log(e.childs, "child true");
                this.parent_values[e.childs] = true;
              } else {
                console.log(e.childs, "child false");
                this.parent_values[e.childs] = false;
              }
            }

            console.log(this.parent_values, "childs");
          }
        }, {
          key: "viewImage",
          value: function viewImage(urlPdf, ext) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
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
          key: "commentBox",
          value: function commentBox(id, formname) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this5 = this;

              var form_control, alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    form_control = formname;
                    _context2.n = 1;
                    return this.alertController.create({
                      header: 'Enter Your Comment',
                      cssClass: 'custom-alert',
                      inputs: [{
                        name: "formname",
                        type: 'textarea',
                        placeholder: 'Please Enter Your Remarks'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        cssClass: 'alert-button-cancel'
                      }, {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this5.CommentFormRecomdation(form_control, alertData.formname);
                        }
                      }]
                    });

                  case 1:
                    alert = _context2.v;
                    _context2.n = 2;
                    return alert.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "CommentFormRecomdation",
          value: function CommentFormRecomdation(name, data) {
            this.recomdations[name] = data;
            console.log(this.recomdations, 'kfsf');
          }
        }, {
          key: "commentBoxInline",
          value: function commentBoxInline(id, formname, tablename) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this6 = this;

              var form_control, table_name, alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    form_control = formname;
                    table_name = tablename;
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Enter Your Comment',
                      cssClass: 'custom-alert',
                      inputs: [{
                        name: "formname",
                        type: 'textarea',
                        placeholder: 'Please Enter Your Remarks'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        cssClass: 'alert-button-cancel'
                      }, {
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this6.CommentFormRecomdationInline(form_control, alertData.formname, table_name);
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
        }, {
          key: "CommentFormRecomdationInline",
          value: function CommentFormRecomdationInline(name, data, table_name) {
            console.log(table_name);
            if (typeof this.recomdationsInline[table_name] === 'undefined') this.recomdationsInline[table_name] = [];
            this.recomdationsInline[table_name].push({
              id: name,
              remark: data
            });
            console.log(this.recomdationsInline, 'kfsf');
          }
        }]);
      }();

      _RCGrantFormPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_3__.RegulatoryService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }];
      };

      _RCGrantFormPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-rc-grant-form',
        template: _raw_loader_rc_grant_form_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_rc_grant_form_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RCGrantFormPage);
      /***/
    },

    /***/
    9:
    /*!****************************************************************!*\
      !*** ./src/app/pages/rc/rc-grant-form/rc-grant-form.page.scss ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.ion-text-wrap {\n  margin-left: 15px;\n}\n\n.cardbg {\n  background-color: #F3F4FA;\n}\n\n.inputbg {\n  padding: 10px;\n  background-color: #EDDEFF;\n  border-radius: 10px;\n}\n\n.card-content-md {\n  padding-top: 13px;\n  padding-bottom: 5px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.carder {\n  padding: 0%;\n  margin: 0%;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  margin: 5px;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.layout {\n  margin: 10px;\n}\n\n.btnbg {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n\n.note {\n  color: red;\n}\n\n.textright {\n  text-align: right;\n  padding: 10px;\n}\n\n.select-txt {\n  font-size: 18px;\n}\n\n.language {\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  color: var(--ion-color-primary);\n  margin: 8px;\n  padding: 10px;\n  box-shadow: 5px 7px 5px #c6c5c5;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.keylinkbackground {\n  background-color: white;\n  padding: 15px;\n}\n\n.keylinkbackgroundinline {\n  background-color: white;\n  padding: 10px;\n}\n\n.tickfalse {\n  color: white;\n  background-color: red;\n  text-align: right;\n  border: 1px solid;\n  border-radius: 10px;\n}\n\n.cancelbuttonlink {\n  margin-top: 2px;\n}\n\n.notelink {\n  color: #3930f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJjLWdyYW50LWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoicmMtZ3JhbnQtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5pb24tdGV4dC13cmFwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZGJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjRGQTtcclxuICB9XHJcblxyXG4gIC5pbnB1dGJne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRERFRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGVudC1tZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uY2FyZGVye1xyXG4gICAgcGFkZGluZzogMCU7XHJcbiAgICBtYXJnaW46IDAlO1xyXG59XHJcblxyXG4uYm9yZGVyc3R5bGV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC5wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5sYXlvdXR7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubm90ZXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAudGV4dHJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC10eHR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAubGFuZ3VhZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA3cHggNXB4ICNjNmM1YzVcclxuICB9XHJcblxyXG4gIC50ZXh0YWxpbmd7XHJcbiAgICB0ZXh0LWFsaWduOmVuZDtcclxuICB9XHJcblxyXG4gIC5rZXlsaW5rYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC5rZXlsaW5rYmFja2dyb3VuZGlubGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC50aWNrZmFsc2V7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5jYW5jZWxidXR0b25saW5re1xyXG4gICAgbWFyZ2luLXRvcDoycHggO1xyXG4gIH1cclxuXHJcbiAgLm5vdGVsaW5re1xyXG4gICAgY29sb3I6IHJnYig1NywgNDgsIDI0NCk7XHJcbiAgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    7110:
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rc/rc-grant-form/rc-grant-form.page.html ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-wrap\">Application No - {{applicationID}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"layout\">\r\n    <ion-col size=\"12\">\r\n      <ion-row class=\"borderstyle\">\r\n        <ion-col size=\"12\" class=\"padding\">\r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n              <ion-label class=\"headlabel\">{{this.sectionName}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n      <form id=\"cwsn\" [formGroup]=\"cwsn\" name=\"dyno\">\r\n        <div formArrayName=\"form_data\">\r\n          <div *ngFor=\"let control of form_data.controls; let i = index;\" [formGroupName]=\"i\">\r\n            <div [ngSwitch]=\"control.controls.question_type.value\">\r\n\r\n              <div *ngSwitchCase=\"'yesno'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\">{{control.controls.question_title.value}}</h1>\r\n                          <h1 *ngIf=\"langstatus == 2\">{{control.controls.question_title_t.value}}</h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text.value}}</ion-label>\r\n\r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text_t.value}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"1\">\r\n                                <ion-icon name=\"pricetags-sharp\"\r\n                                  (click)=\"commentBox(i,control.controls.form_controller.value)\"></ion-icon>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.dis_form_controller.value)\"\r\n                                  name={{control.controls.dis_form_controller.value}}>\r\n                                  <ion-select-option [value]=\"val.id\"\r\n                                    *ngFor=\"let val of control.controls.options.value\">\r\n                                    {{val.value}}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'text'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\">{{control.controls.question_title.value}}</h1>\r\n                          <h1 *ngIf=\"langstatus == 2\">{{control.controls.question_title_t.value}}</h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text.value}}</ion-label>\r\n\r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text_t.value}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"1\">\r\n                                <ion-icon name=\"pricetags-sharp\"\r\n                                  (click)=\"commentBox(i,control.controls.form_controller.value)\"></ion-icon>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input formControlName={{control.controls.form_controller.value}}\r\n                                  name={{control.controls.form_controller.value}} placeholder=\"Enter Text\"></ion-input>\r\n                              </ion-item>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input formControlName={{control.controls.dis_form_controller.value}}\r\n                                  disbaled=\"true\" name={{control.controls.dis_form_controller.value}}\r\n                                  placeholder=\"Enter Text\" disabled=\"true\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                          <!-- <div *ngIf=\"control.controls.id.value==2\">\r\n                          <small class=\"error pb-2\"\r\n                            *ngIf=\"control.controls[control.controls.form_controller.value].hasError('pattern')\">\r\n                            String Only allowed\r\n                          </small>\r\n                        </div> -->\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'date'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\">{{control.controls.question_title.value}}</h1>\r\n                          <h1 *ngIf=\"langstatus == 2\">{{control.controls.question_title_t.value}}</h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text.value}}</ion-label>\r\n\r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text_t.value}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"1\">\r\n                                <ion-icon name=\"pricetags-sharp\"\r\n                                  (click)=\"commentBox(i,control.controls.form_controller.value)\"></ion-icon>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\"\r\n                                  formControlName={{control.controls.form_controller.value}}\r\n                                  name={{control.controls.form_controller.value}} placeholder=\"Enter Date\"></ion-input>\r\n                              </ion-item>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input type=\"date\" placeholder=\"Select Date\"\r\n                                  formControlName={{control.controls.dis_form_controller.value}}\r\n                                  name={{control.controls.dis_form_controller.value}} disabled=\"true\"\r\n                                  placeholder=\"Enter Date\"></ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc.value_t}}</p>\r\n                          </div>\r\n                          <!-- <div *ngIf=\"control.controls.id.value==2\">\r\n                      <small class=\"error pb-2\"\r\n                        *ngIf=\"control.controls[control.controls.form_controller.value].hasError('pattern')\">\r\n                        String Only allowed\r\n                      </small>\r\n                    </div> -->\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'file'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\">{{control.controls.question_title.value}}</h1>\r\n                          <h1 *ngIf=\"langstatus == 2\">{{control.controls.question_title_t.value}}</h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text.value}}</ion-label>\r\n\r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text_t.value}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"1\">\r\n                                <ion-icon name=\"pricetags-sharp\"\r\n                                  (click)=\"commentBox(i,control.controls.form_controller.value)\"></ion-icon>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <!-- <div *ngIf=\"!this['key_' + i]\">\r\n                              <ion-item>\r\n                                <div>\r\n                                  <input type=\"file\" placeholder=\"Choose File\" accept=\"application/pdf\"\r\n                                    (change)=\"onSelectFile1($event,i)\">\r\n                                  <input type=\"hidden\" formControlName={{control.controls.form_controller.value}}\r\n                                    name={{control.controls.form_controller.value}}>\r\n                                </div>\r\n                              </ion-item>\r\n                            </div> -->\r\n\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <!-- {{control.controls.IsPhoto.value}}\r\n                              <span *ngIf=\"!control.controls.IsPhoto.value\" (click)=\"getUploadedFiles1(\r\n                            this.cwsn.controls['form_data']['controls'][i].controls[control.controls.form_controller.value].value\r\n                            ? this.cwsn.controls['form_data']['controls'][i].controls[control.controls.form_controller.value].value\r\n                            : this['key_' + i], i)\">\r\n                                <p class=\"notelink\">Click to View If the File is Already Uploaded \r\n                                 \r\n                                </p>\r\n                              </span> -->\r\n                              <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                ? this.cwsn.controls['form_data']['controls'][i].controls[control.controls.dis_form_controller.value].value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n\r\n                              <div class=\"keylinkbackground\" *ngIf=\"control.controls.IsPhoto.value\">\r\n                                <!-- <ion-row>\r\n                                  <ion-col size=\"11\">\r\n                                    <a href=\"{{this.Image && this.Image.length > 0 && this.Image[0]['image_'+i]}}\"\r\n                                      target=\"_blank\">\r\n                                      {{\r\n                                      this.cwsn.controls['form_data']['controls'][i].controls[control.controls.form_controller.value].value\r\n                                      ?\r\n                                      this.cwsn.controls['form_data']['controls'][i].controls[control.controls.form_controller.value].value\r\n                                      : this['key_' + i]}}\r\n                                    </a>\r\n                                    <span>\r\n                                    </span>\r\n                                  </ion-col> -->\r\n                                <!-- <ion-col size=\"1\">\r\n                                  <div class=\"cancelbuttonlink\">\r\n                                    <ion-icon class=\"tickfalse\" name=\"close-outline\" *ngIf=\"this['key_' + i] || IsPhoto\"\r\n                                      (click)=\"handleClearFile('image_'+i, 'key_'+i)\"></ion-icon>\r\n                                  </div>\r\n                                </ion-col> -->\r\n                                <!-- </ion-row> -->\r\n                                <div>\r\n                                  <ion-item class=\"item-styles\">\r\n                                    <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                      formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                      (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                      name={{control.controls.form_controller.value}}>\r\n                                      <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                      <ion-select-option value=\"2\">No</ion-select-option>\r\n                                    </ion-select>\r\n                                  </ion-item>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p> -->\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'number'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\">{{control.controls.question_title.value}}</h1>\r\n                          <h1 *ngIf=\"langstatus == 2\">{{control.controls.question_title_t.value}}</h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text.value}}</ion-label>\r\n\r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text_t.value}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"1\">\r\n                                <ion-icon name=\"pricetags-sharp\"\r\n                                  (click)=\"commentBox(i,control.controls.form_controller.value)\"></ion-icon>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != '1'\">\r\n                              <ion-item>\r\n                                <ion-input type=\"number\" placeholder=\"Enter Number\"\r\n                                  formControlName={{control.controls.form_controller.value}}\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                </ion-input>\r\n                              </ion-item>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"control.controls.verify.value == '1'\">\r\n                              <ion-item>\r\n                                <ion-input type=\"number\" placeholder=\"Enter Number\"\r\n                                  formControlName={{control.controls.dis_form_controller.value}}\r\n                                  name={{control.controls.dis_form_controller.value}} disabled=\"true\">\r\n                                </ion-input>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                          <!-- <div *ngIf=\"control.controls.id.value==2\">\r\n                          <small class=\"error pb-2\"\r\n                            *ngIf=\"control.controls[control.controls.form_controller.value].hasError('pattern')\">\r\n                            String Only allowed\r\n                          </small>\r\n                        </div> -->\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'inline'\">\r\n                <div *ngFor=\"let obj of control.controls.inline.value;let l=index\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"row-line\" *ngIf=\"!onActive\" (click)=\"onExpand(true)\">\r\n                      <ion-row class=\"borderstyle\">\r\n                        <ion-col size=\"11\" class=\"padding\">\r\n                          <ion-label class=\"headlabel\">{{obj.title}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"textright\">\r\n                          <ion-icon name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" class=\"row-line\" *ngIf=\"onActive\" (click)=\"onExpand(false)\">\r\n                      <ion-row class=\"borderstyle\">\r\n                        <ion-col size=\"11\" class=\"padding\">\r\n                          <ion-label class=\"headlabel\">{{obj.title}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"textright\">\r\n                          <ion-icon name=\"add-outline\" class=\"expand-label\"></ion-icon>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" *ngIf=\"onActive\">\r\n                      <div class=\"inputbg\">\r\n                        <div *ngFor=\"let elem of obj.elements.controls let i=index\">\r\n                          <div *ngIf=\"i == 0\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                              </ion-col>\r\n                              <ion-col size=\"1\">\r\n                                <ion-icon name=\"pricetags-sharp\"\r\n                                  (click)=\"commentBoxInline(i,elem.controls.indexid.value, elem.controls.lang.value)\"></ion-icon>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                          </div>\r\n                          <div *ngIf=\"elem.controls.type.value == 'select'\">\r\n                            <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                            <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                            <ion-item class=\"item-styles\">\r\n                              <ion-select class=\"select\" placeholder=\"{{elem.controls.type.value}}\" ok-text=\"Ok\"\r\n                                cancel-text=\"Dismiss\" formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                                <ion-select-option [value]=\"val.id\" *ngFor=\"let val of elem.controls.options.value\">\r\n                                  {{val.value}}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </ion-item>\r\n                          </div>\r\n                          <div\r\n                            *ngIf=\"elem.controls.type.value == 'text' || elem.controls.type.value == 'number' || elem.controls.type.value == 'tel' || elem.controls.type.value == 'date'\">\r\n                            <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                            <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                            <ion-item>\r\n                              <ion-input type=\"{{elem.controls.type.value}}\"\r\n                                placeholder=\"{{elem.controls.placeholder.value}}\"\r\n                                formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                              </ion-input>\r\n                            </ion-item>\r\n                          </div>\r\n                          <div *ngIf=\"elem.controls.type.value == 'file'\">\r\n                            <div *ngIf=\"elem.controls.url.value!= null\">\r\n                              <ion-label *ngIf=\"langstatus == 1\">{{elem.controls.label.value}}</ion-label>\r\n                              <ion-label *ngIf=\"langstatus == 2\">{{elem.controls.label_t.value}}</ion-label>\r\n                              <div class=\"keylinkbackgroundinline\">\r\n                                <ion-button size=\"small\" color=\"light\" (click)=\"getUploadedFiles1(\r\n                                elem.controls.url.value\r\n                                ? elem.controls.url.value\r\n                                : this['key_' + i], i)\">click to view pdf</ion-button>\r\n                              </div>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{elem.controls.form_control.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,elem.controls.form_control.value)\"\r\n                                  name={{elem.controls.form_control.value}} lang=\"{{elem.controls.lang.value}}\"\r\n                                  indexid=\"{{elem.controls.indexid.value}}\" id=\"{{elem.controls.form_control.value}}\">\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngSwitchCase=\"'mcq'\">\r\n                <div *ngIf=\"parent_values[control.controls.form_controller.value]\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"carder\">\r\n                      <ion-card>\r\n                        <ion-card-content class=\"cardbg\">\r\n                          <h1 *ngIf=\"langstatus == 1\">{{control.controls.question_title.value}}</h1>\r\n                          <h1 *ngIf=\"langstatus == 2\">{{control.controls.question_title_t.value}}</h1>\r\n                          <div class=\"inputbg\">\r\n                            <ion-row>\r\n                              <ion-col size=\"11\">\r\n                                <ion-label *ngIf=\"langstatus == 1\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text.value}}</ion-label>\r\n\r\n                                <ion-label *ngIf=\"langstatus == 2\" position=\"stacked\" class=\"select-txt\">\r\n                                  {{control.controls.question_text_t.value}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"1\">\r\n                                <ion-icon name=\"pricetags-sharp\"\r\n                                  (click)=\"commentBox(i,control.controls.form_controller.value)\"></ion-icon>\r\n                              </ion-col>\r\n                            </ion-row>\r\n                            <div *ngIf=\"control.controls.verify.value != 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option [value]=\"val.id\"\r\n                                    *ngFor=\"let val of control.controls.options.value\">\r\n                                    {{val.value}}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                            <div *ngIf=\"control.controls.verify.value == 1\">\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.dis_form_controller.value}}\" disabled=\"true\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.dis_form_controller.value)\"\r\n                                  name={{control.controls.dis_form_controller.value}}>\r\n                                  <ion-select-option [value]=\"val.id\"\r\n                                    *ngFor=\"let val of control.controls.options.value\">\r\n                                    {{val.value}}\r\n                                  </ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                              <ion-item class=\"item-styles\">\r\n                                <ion-select class=\"select\" placeholder=\"Select\" ok-text=\"Ok\" cancel-text=\"Dismiss\"\r\n                                  formControlName=\"{{control.controls.form_controller.value}}\"\r\n                                  (ionChange)=\"handleMCQNew($event, i,control.controls.form_controller.value)\"\r\n                                  name={{control.controls.form_controller.value}}>\r\n                                  <ion-select-option value=\"1\">Yes</ion-select-option>\r\n                                  <ion-select-option value=\"2\">No</ion-select-option>\r\n                                </ion-select>\r\n                              </ion-item>\r\n                            </div>\r\n                            <p *ngIf=\"langstatus == 1\" class=\"note\">{{control.controls.question_desc.value}}</p>\r\n                            <p *ngIf=\"langstatus == 2\" class=\"note\">{{control.controls.question_desc_t.value}}</p>\r\n                          </div>\r\n                        </ion-card-content>\r\n                      </ion-card>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </div>\r\n              </div>\r\n\r\n              <p style=\"color: red; margin-left: 10px;\"\r\n                *ngIf=\"(submitted && control.controls[control.controls.form_controller.value].hasError('required'))\">\r\n                Field is required\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button class=\"btnbg\" (click)=\"submit()\" expand=\"full\">Submit</ion-button>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_rc_rc-grant-form_rc-grant-form_module_ts-es5.js.map