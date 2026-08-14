(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_uniform_measurement-questions_measurement-questions_module_ts"], {
    /***/
    59059:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/uniform/measurement-questions/measurement-questions-routing.module.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MeasurementQuestionsPageRoutingModule": function MeasurementQuestionsPageRoutingModule() {
          return (
            /* binding */
            _MeasurementQuestionsPageRoutingModule
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


      var _measurement_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./measurement-questions.page */
      82604);

      var routes = [{
        path: '',
        component: _measurement_questions_page__WEBPACK_IMPORTED_MODULE_0__.MeasurementQuestionsPage
      }];

      var _MeasurementQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function MeasurementQuestionsPageRoutingModule() {
        _classCallCheck(this, MeasurementQuestionsPageRoutingModule);
      });

      _MeasurementQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MeasurementQuestionsPageRoutingModule);
      /***/
    },

    /***/
    78371:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/uniform/measurement-questions/measurement-questions.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MeasurementQuestionsPageModule": function MeasurementQuestionsPageModule() {
          return (
            /* binding */
            _MeasurementQuestionsPageModule
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


      var _measurement_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./measurement-questions-routing.module */
      59059);
      /* harmony import */


      var _measurement_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./measurement-questions.page */
      82604);

      var _MeasurementQuestionsPageModule = /*#__PURE__*/_createClass(function MeasurementQuestionsPageModule() {
        _classCallCheck(this, MeasurementQuestionsPageModule);
      });

      _MeasurementQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _measurement_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.MeasurementQuestionsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_measurement_questions_page__WEBPACK_IMPORTED_MODULE_1__.MeasurementQuestionsPage]
      })], _MeasurementQuestionsPageModule);
      /***/
    },

    /***/
    82604:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/uniform/measurement-questions/measurement-questions.page.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MeasurementQuestionsPage": function MeasurementQuestionsPage() {
          return (
            /* binding */
            _MeasurementQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_measurement_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./measurement-questions.page.html */
      69968);
      /* harmony import */


      var _measurement_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./measurement-questions.page.scss */
      80710);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _MeasurementQuestionsPage = /*#__PURE__*/function () {
        function MeasurementQuestionsPage(router, route, sqliteDB, fb, cdref, el, NetworkService, userService, alertController, alertService, usersessionService) {
          _classCallCheck(this, MeasurementQuestionsPage);

          this.router = router;
          this.route = route;
          this.sqliteDB = sqliteDB;
          this.fb = fb;
          this.cdref = cdref;
          this.el = el;
          this.NetworkService = NetworkService;
          this.userService = userService;
          this.alertController = alertController;
          this.alertService = alertService;
          this.usersessionService = usersessionService;
          this.emis_username = this.usersessionService.emis_username();
        }

        return _createClass(MeasurementQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolName = this.routeData.queryParams.schoolName;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.class_studying_id = this.routeData.queryParams.class_studying_id;
            this.sec = this.routeData.queryParams.sec;
            this.gender = this.routeData.queryParams.gender;
            this.region = this.routeData.queryParams.region;
            this.user_id = this.routeData.queryParams.user_id;
            this.measurement_completed = this.routeData.queryParams.measurement_completed;
            this.name = this.routeData.queryParams.name;
            this.IndexId = this.routeData.queryParams.IndexId;
            this.shoulderlength = '';

            if (this.gender == '1') {
              this.genderId = 1;
            } else {
              this.genderId = 2;
            }

            if (parseInt(this.class_studying_id) < 6) {
              this.classId = 1;
            } else {
              this.classId = 2;
            }

            this.measurementdetails = [];
            this.topmeasurementdetails = [];
            this.bottommeasurement = [];
            this.bottomlength = '';
            this.validatorRequired();
            this.getStudentList();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              IndexId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysSholderLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysShirtHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysHandLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysChestCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysHandCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysHipCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysPantHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysThighCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              boysLegCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsTopSholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsTopHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsTopHandLength: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsTopChestCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsTopHandCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsBottomHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsBottomHipCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsBottomLegCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsOvercoatSholder: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsOvercoatHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null),
              girlsOvercoatChestCircum: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl("", null)
            });
          }
        }, {
          key: "validatorRequired",
          value: function validatorRequired() {
            debugger;

            if (+this.gender == 1) {
              this.form.controls['boysSholderLength'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$')]);
              this.form.controls['boysShirtHeight'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              this.form.controls['boysHandLength'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              this.form.controls['boysChestCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              this.form.controls['boysHandCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              this.form.controls['boysHipCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$')]);
              this.form.controls['boysPantHeight'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              this.form.controls['boysThighCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);

              if (+this.region == 1 && +this.classId == 2 || +this.region == 2) {
                this.form.controls['boysLegCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              }

              this.form.controls['boysSholderLength'].updateValueAndValidity();
              this.form.controls['boysShirtHeight'].updateValueAndValidity();
              this.form.controls['boysHandLength'].updateValueAndValidity();
              this.form.controls['boysChestCircum'].updateValueAndValidity();
              this.form.controls['boysHandCircum'].updateValueAndValidity();
              this.form.controls['boysHipCircum'].updateValueAndValidity();
              this.form.controls['boysPantHeight'].updateValueAndValidity();
              this.form.controls['boysThighCircum'].updateValueAndValidity();
              this.form.controls['boysLegCircum'].updateValueAndValidity();
              this.cdref.detectChanges();
            } else {
              this.form.controls['girlsTopSholder'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$')]);
              this.form.controls['girlsTopHeight'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              this.form.controls['girlsTopHandLength'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              this.form.controls['girlsTopChestCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);

              if (+this.region == 1 && +this.classId == 1) {
                this.form.controls['girlsTopHandCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              }

              this.form.controls['girlsBottomHeight'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$')]);
              this.form.controls['girlsBottomHipCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$')]);

              if (+this.region == 1 && +this.classId == 2 || +this.region == 2) {
                this.form.controls['girlsBottomLegCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              }

              if (this.region == 1 && +this.classId == 2 || this.region == 2) {
                this.form.controls['girlsOvercoatSholder'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$')]);
                this.form.controls['girlsOvercoatHeight'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
                this.form.controls['girlsOvercoatChestCircum'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(?!0)[0-9]*$'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(2)]);
              }

              this.form.controls['girlsTopSholder'].updateValueAndValidity();
              this.form.controls['girlsTopHeight'].updateValueAndValidity();
              this.form.controls['girlsTopHandLength'].updateValueAndValidity();
              this.form.controls['girlsTopChestCircum'].updateValueAndValidity();
              this.form.controls['girlsTopHandCircum'].updateValueAndValidity();
              this.form.controls['girlsBottomHeight'].updateValueAndValidity();
              this.form.controls['girlsBottomHipCircum'].updateValueAndValidity();
              this.form.controls['girlsBottomLegCircum'].updateValueAndValidity();
              this.form.controls['girlsOvercoatSholder'].updateValueAndValidity();
              this.form.controls['girlsOvercoatHeight'].updateValueAndValidity();
              this.form.controls['girlsOvercoatChestCircum'].updateValueAndValidity();
              this.cdref.detectChanges();
            }
          }
        }, {
          key: "getStudentList",
          value: function getStudentList() {
            var _this = this;

            this.studList = [];
            var query = 'SELECT * FROM uniformStudentlistData WHERE user_id =' + this.user_id;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this.studList.push(data.rows.item(i));
                }

                console.log("studList", _this.studList);

                _this.form.controls['IndexId'].setValue(_this.studList[0].IndexId);

                if (_this.studList[0].IndexId != "" && _this.studList[0].IndexId != null) {
                  if (+_this.gender == 1) {
                    _this.form.controls['boysSholderLength'].setValue(_this.studList[0].boys_shoulder_len);

                    _this.form.controls['boysShirtHeight'].setValue(_this.studList[0].boys_shirt_height);

                    _this.form.controls['boysHandLength'].setValue(_this.studList[0].boys_hand_length);

                    _this.form.controls['boysChestCircum'].setValue(_this.studList[0].boys_chest_circum);

                    _this.form.controls['boysHandCircum'].setValue(_this.studList[0].boys_hand_circum);

                    _this.form.controls['boysHipCircum'].setValue(_this.studList[0].boys_hip_circum);

                    _this.form.controls['boysPantHeight'].setValue(_this.studList[0].boys_Pant_height);

                    _this.form.controls['boysThighCircum'].setValue(_this.studList[0].boys_thigh_circum);

                    if (+_this.region == 1 && +_this.classId == 2 || +_this.region == 2) {
                      _this.form.controls['boysLegCircum'].setValue(_this.studList[0].boys_leg_circum);
                    }

                    _this.form.controls['boysSholderLength'].updateValueAndValidity();

                    _this.form.controls['boysShirtHeight'].updateValueAndValidity();

                    _this.form.controls['boysHandLength'].updateValueAndValidity();

                    _this.form.controls['boysChestCircum'].updateValueAndValidity();

                    _this.form.controls['boysHandCircum'].updateValueAndValidity();

                    _this.form.controls['boysHipCircum'].updateValueAndValidity();

                    _this.form.controls['boysPantHeight'].updateValueAndValidity();

                    _this.form.controls['boysThighCircum'].updateValueAndValidity();

                    _this.form.controls['boysLegCircum'].updateValueAndValidity();

                    _this.cdref.detectChanges();
                  } else {
                    _this.form.controls['girlsTopSholder'].setValue(_this.studList[0].girls_top_sholder);

                    _this.form.controls['girlsTopHeight'].setValue(_this.studList[0].girls_top_height);

                    _this.form.controls['girlsTopHandLength'].setValue(_this.studList[0].girls_top_hand_len);

                    _this.form.controls['girlsTopChestCircum'].setValue(_this.studList[0].girls_top_chest_circum);

                    if (+_this.region == 1 && +_this.classId == 1) {
                      _this.form.controls['girlsTopHandCircum'].setValue(_this.studList[0].girls_top_hand_circum);
                    }

                    _this.form.controls['girlsBottomHeight'].setValue(_this.studList[0].girls_bottom_height);

                    _this.form.controls['girlsBottomHipCircum'].setValue(_this.studList[0].girls_bottom_hip_circum);

                    if (+_this.region == 1 && +_this.classId == 2 || +_this.region == 2) {
                      _this.form.controls['girlsBottomLegCircum'].setValue(_this.studList[0].girls_bottom_leg_circum);
                    }

                    if (_this.region == 1 && +_this.classId == 2 || _this.region == 2) {
                      _this.form.controls['girlsOvercoatSholder'].setValue(_this.studList[0].girls_overcoat_sholder);

                      _this.form.controls['girlsOvercoatHeight'].setValue(_this.studList[0].girls_overcoat_height);

                      _this.form.controls['girlsOvercoatChestCircum'].setValue(_this.studList[0].girls_overcoat_chest_cir);
                    }

                    _this.form.controls['girlsTopSholder'].updateValueAndValidity();

                    _this.form.controls['girlsTopHeight'].updateValueAndValidity();

                    _this.form.controls['girlsTopHandLength'].updateValueAndValidity();

                    _this.form.controls['girlsTopChestCircum'].updateValueAndValidity();

                    _this.form.controls['girlsTopHandCircum'].updateValueAndValidity();

                    _this.form.controls['girlsBottomHeight'].updateValueAndValidity();

                    _this.form.controls['girlsBottomHipCircum'].updateValueAndValidity();

                    _this.form.controls['girlsBottomLegCircum'].updateValueAndValidity();

                    _this.form.controls['girlsOvercoatSholder'].updateValueAndValidity();

                    _this.form.controls['girlsOvercoatHeight'].updateValueAndValidity();

                    _this.form.controls['girlsOvercoatChestCircum'].updateValueAndValidity();

                    _this.cdref.detectChanges();
                  }
                }
              }
            });
          }
        }, {
          key: "selectBottomlength",
          value: function selectBottomlength(event, id) {
            var _this2 = this;

            this.bottomlength = event.detail.value;
            var measurementpant = [];

            if (id == 1) {
              measurementpant = this.masterList.filter(function (item) {
                return item.pant_height == _this2.bottomlength;
              });
            }

            if (id == 2) {
              measurementpant = this.masterList.filter(function (item) {
                return item.hip_circum == _this2.bottomlength;
              });
            }

            this.bottommeasurement = measurementpant;
          }
        }, {
          key: "navigateNext",
          value: function navigateNext() {
            this.router.navigate(['/tabs/uniform-studentlist'], {
              queryParams: {
                class_studying_id: this.class_studying_id,
                sec: this.sec,
                schoolId: this.schoolId,
                schoolName: this.schoolName,
                region: this.region,
                "measurement_completed": this.measurement_completed
              }
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this3 = this;

            var data = {
              "records": {
                "id": this.form.value.IndexId,
                "school_id": this.schoolId,
                "class": this.class_studying_id,
                "class_section": this.sec,
                "student_id": this.user_id,
                "user_id": this.emis_username,
                "status": "2",
                "boys_shoulder_len ": this.form.value.boysSholderLength,
                "boys_shirt_height ": this.form.value.boysShirtHeight,
                "boys_hand_length ": this.form.value.boysHandLength,
                "boys_chest_circum ": this.form.value.boysChestCircum,
                "boys_hand_circum ": this.form.value.boysHandCircum,
                "boys_hip_circum ": this.form.value.boysHipCircum,
                "boys_Pant_height ": this.form.value.boysPantHeight,
                "boys_thigh_circum ": this.form.value.boysThighCircum,
                "boys_leg_circum ": this.form.value.boysLegCircum,
                "girls_top_sholder": this.form.value.girlsTopSholder,
                "girls_top_height": this.form.value.girlsTopHeight,
                "girls_top_hand_len": this.form.value.girlsTopHandLength,
                "girls_top_chest_circum": this.form.value.girlsTopChestCircum,
                "girls_top_hand_circum": this.form.value.girlsTopHandCircum,
                // "girls_top_hip_circum": "",
                // "girls_top_leg_circum": "",
                "girls_bottom_height": this.form.value.girlsBottomHeight,
                "girls_bottom_hip_circum": this.form.value.girlsBottomHipCircum,
                "girls_bottom_leg_circum": this.form.value.girlsBottomLegCircum,
                "girls_overcoat_sholder": this.form.value.girlsOvercoatSholder,
                "girls_overcoat_height": this.form.value.girlsOvercoatHeight,
                "girls_overcoat_chest_cir": this.form.value.girlsOvercoatChestCircum
              }
            };
            this.userService.submitUniformData(data).subscribe(function (res) {
              if (res.dataStatus) {
                var measurement_completed;

                if (_this3.form.value.IndexId) {
                  measurement_completed = parseInt(_this3.measurement_completed);
                } else {
                  measurement_completed = parseInt(_this3.measurement_completed) + 1;
                }

                _this3.form.controls['IndexId'].setValue(res.IndexId);

                _this3.form.controls['IndexId'].updateValueAndValidity();

                var query3 = 'UPDATE uniformStudentlistData SET status = "' + '2' + '" WHERE uniformStudentlistData.user_id = "' + _this3.user_id + '" And uniformStudentlistData.school_id = "' + _this3.schoolId + '"';
                var query = 'UPDATE uniformschoollists SET measurement_completed = "' + measurement_completed + '" WHERE uniformschoollists.school_id = "' + _this3.schoolId + '"';

                _this3.sqliteDB.update(query3).then(function (res) {
                  _this3.sqliteDB.update(query).then(function (res) {
                    _this3.updateStudList(); // let measurement_completed = parseInt(this.measurement_completed) + 1


                    _this3.router.navigate(['/tabs/uniform-studentlist'], {
                      queryParams: {
                        class_studying_id: _this3.class_studying_id,
                        sec: _this3.sec,
                        schoolId: _this3.schoolId,
                        schoolName: _this3.schoolName,
                        region: _this3.region,
                        "measurement_completed": measurement_completed
                      }
                    });

                    _this3.alertService.success('Measured Successfully');
                  });
                });
              } else {
                _this3.alertService.error(res.message);
              }
            });
          }
        }, {
          key: "updateStudList",
          value: function updateStudList() {
            var query = 'UPDATE uniformStudentlistData SET boys_shoulder_len ="' + this.form.value.boysSholderLength + '", boys_shirt_height = "' + this.form.value.boysShirtHeight + '", boys_hand_length = "' + this.form.value.boysHandLength + '", boys_chest_circum = "' + this.form.value.boysChestCircum + '", boys_hand_circum = "' + this.form.value.boysHandCircum + '", boys_hip_circum = "' + this.form.value.boysHipCircum + '", boys_Pant_height = "' + this.form.value.boysPantHeight + '", boys_thigh_circum = "' + this.form.value.boysThighCircum + '", boys_leg_circum = "' + this.form.value.boysLegCircum + '", girls_top_sholder = "' + this.form.value.girlsTopSholder + '", girls_top_height = "' + this.form.value.girlsTopHeight + '", girls_top_hand_len = "' + this.form.value.girlsTopHandLength + '", girls_top_chest_circum = "' + this.form.value.girlsTopChestCircum + '", girls_top_hand_circum = "' + this.form.value.girlsTopHandCircum + '", girls_bottom_height = "' + this.form.value.girlsBottomHeight + '", girls_bottom_hip_circum = "' + this.form.value.girlsBottomHipCircum + '", girls_bottom_leg_circum = "' + this.form.value.girlsBottomLegCircum + '", girls_overcoat_sholder = "' + this.form.value.girlsOvercoatSholder + '", girls_overcoat_height = "' + this.form.value.girlsOvercoatHeight + '", girls_overcoat_chest_cir = "' + this.form.value.girlsOvercoatChestCircum + '", IndexId = "' + this.form.value.IndexId + '", isCompleted = "' + 2 + '" WHERE uniformStudentlistData.user_id = "' + this.user_id + '" And uniformStudentlistData.school_id = "' + this.schoolId + '"';
            this.sqliteDB.update(query).then(function (res) {
              console.log("updated SucessFully");
            });
          }
        }, {
          key: "updateStudList1",
          value: function updateStudList1() {
            var _this4 = this;

            var query = 'UPDATE uniformStudentlistData SET boys_shoulder_len ="' + this.form.value.boysSholderLength + '", boys_shirt_height = "' + this.form.value.boysShirtHeight + '", boys_hand_length = "' + this.form.value.boysHandLength + '", boys_chest_circum = "' + this.form.value.boysChestCircum + '", boys_hand_circum = "' + this.form.value.boysHandCircum + '", boys_hip_circum = "' + this.form.value.boysHipCircum + '", boys_Pant_height = "' + this.form.value.boysPantHeight + '", boys_thigh_circum = "' + this.form.value.boysThighCircum + '", boys_leg_circum = "' + this.form.value.boysLegCircum + '", girls_top_sholder = "' + this.form.value.girlsTopSholder + '", girls_top_height = "' + this.form.value.girlsTopHeight + '", girls_top_hand_len = "' + this.form.value.girlsTopHandLength + '", girls_top_chest_circum = "' + this.form.value.girlsTopChestCircum + '", girls_top_hand_circum = "' + this.form.value.girlsTopHandCircum + '", girls_bottom_height = "' + this.form.value.girlsBottomHeight + '", girls_bottom_hip_circum = "' + this.form.value.girlsBottomHipCircum + '", girls_bottom_leg_circum = "' + this.form.value.girlsBottomLegCircum + '", girls_overcoat_sholder = "' + this.form.value.girlsOvercoatSholder + '", girls_overcoat_height = "' + this.form.value.girlsOvercoatHeight + '", girls_overcoat_chest_cir = "' + this.form.value.girlsOvercoatChestCircum + '", IndexId = "' + this.form.value.IndexId + '", isCompleted = "' + 3 + '" WHERE uniformStudentlistData.user_id = "' + this.user_id + '" And uniformStudentlistData.school_id = "' + this.schoolId + '"';
            this.sqliteDB.update(query).then(function (res) {
              console.log("updated SucessFully");
              var measurement_completed = parseInt(_this4.measurement_completed);

              _this4.router.navigate(['/tabs/uniform-studentlist'], {
                queryParams: {
                  class_studying_id: _this4.class_studying_id,
                  sec: _this4.sec,
                  schoolId: _this4.schoolId,
                  schoolName: _this4.schoolName,
                  region: _this4.region,
                  "measurement_completed": measurement_completed
                }
              });
            });
          }
        }, {
          key: "alertPopup",
          value: function alertPopup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    debugger;

                    if (!this.form.valid) {
                      _context.n = 3;
                      break;
                    }

                    this.submitted = false;
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Confirmation',
                      // subHeader:'the student ',
                      cssClass: 'popCalssInfo1',
                      message: "Please confirm the measurements carefully. Once saved, you cannot edit them",
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click'
                      }, {
                        text: 'Save',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(data) {
                          _this5.autoSync(); // this.alertService.success('Measured Successfully')

                        }
                      }]
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    _context.n = 4;
                    break;

                  case 3:
                    this.submitted = true;
                    this.alertService.error("Please enter valid data");

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "autoSync",
          value: function autoSync() {
            this.onDigitValidation();

            if (this.form.valid && !this.validationResult) {
              this.submitted = false;

              if (this.NetworkService.getCurrentNetworkStatus() == 0) {
                console.log("online");
                this.onSave();
              } else {
                console.log("offline");
                this.updateStudList1();
              }
            } else {
              this.submitted = true;
              this.alertService.error("Please enter valid data");
              this.focusValidator();
            }
          }
        }, {
          key: "focusValidator",
          value: function focusValidator() {
            var invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
            invalidControl.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            }); // invalidControl.scrollTo(50, 0);

            invalidControl.focus();
          }
        }, {
          key: "onDigitValidation",
          value: function onDigitValidation() {
            if (this.gender == 1) {
              if (this.classId == 1) {
                if (this.form.value.boysSholderLength && parseInt(this.form.value.boysSholderLength) < 16 || parseInt(this.form.value.boysSholderLength) > 50) {
                  this.validationResult = true;
                } else if (this.form.value.boysHipCircum && parseInt(this.form.value.boysHipCircum) < 44 || parseInt(this.form.value.boysHipCircum) > 90) {
                  this.validationResult = true;
                } else {
                  this.validationResult = false;
                }
              }

              if (this.classId == 2) {
                if (this.form.value.boysSholderLength && parseInt(this.form.value.boysSholderLength) < 28 || parseInt(this.form.value.boysSholderLength) > 52) {
                  this.validationResult = true;
                } else if (parseInt(this.form.value.boysHipCircum) < 60 || parseInt(this.form.value.boysHipCircum) > 100) {
                  this.validationResult = true;
                } else {
                  this.validationResult = false;
                }
              }
            }

            if (this.gender == 2) {
              if (this.region == 1) {
                if (this.classId == 1) {
                  if (this.form.value.girlsTopSholder && (parseInt(this.form.value.girlsTopSholder) < 20 || parseInt(this.form.value.girlsTopSholder) > 50)) {
                    this.validationResult = true;
                  } else if (this.form.value.girlsBottomHipCircum && (parseInt(this.form.value.girlsBottomHipCircum) < 48 || parseInt(this.form.value.girlsBottomHipCircum) > 90)) {
                    this.validationResult = true;
                  } else {
                    this.validationResult = false;
                  }
                }

                if (this.classId == 2) {
                  if (this.form.value.girlsTopSholder && (parseInt(this.form.value.girlsTopSholder) < 28 || parseInt(this.form.value.girlsTopSholder) > 52)) {
                    this.validationResult = true;
                  } else if (this.form.value.girlsBottomHeight && (parseInt(this.form.value.girlsBottomHeight) < 84 || parseInt(this.form.value.girlsBottomHeight) > 108)) {
                    this.validationResult = true;
                  } else if (this.form.value.girlsOvercoatSholder && (parseInt(this.form.value.girlsOvercoatSholder) < 28 || parseInt(this.form.value.girlsOvercoatSholder) > 52)) {
                    this.validationResult = true;
                  } else {
                    this.validationResult = false;
                  }
                }
              }

              if (this.region == 2) {
                if (this.classId == 1) {
                  if (this.form.value.girlsTopSholder && (parseInt(this.form.value.girlsTopSholder) < 20 || parseInt(this.form.value.girlsTopSholder) > 50)) {
                    this.validationResult = true;
                  } else if (this.form.value.girlsBottomHeight && (parseInt(this.form.value.girlsBottomHeight) < 68 || parseInt(this.form.value.girlsBottomHeight) > 104)) {
                    this.validationResult = true;
                  } else if (this.form.value.girlsOvercoatSholder && (parseInt(this.form.value.girlsOvercoatSholder) < 20 || parseInt(this.form.value.girlsOvercoatSholder) > 50)) {
                    this.validationResult = true;
                  } else {
                    this.validationResult = false;
                  }
                }

                if (this.classId == 2) {
                  if (this.form.value.girlsTopSholder && (parseInt(this.form.value.girlsTopSholder) < 28 || parseInt(this.form.value.girlsTopSholder) > 52)) {
                    this.validationResult = true;
                  } else if (this.form.value.girlsBottomHeight && (parseInt(this.form.value.girlsBottomHeight) < 88 || parseInt(this.form.value.girlsBottomHeight) > 110)) {
                    this.validationResult = true;
                  } else if (this.form.value.girlsOvercoatSholder && (parseInt(this.form.value.girlsOvercoatSholder) < 28 || parseInt(this.form.value.girlsOvercoatSholder) > 52)) {
                    this.validationResult = true;
                  } else {
                    this.validationResult = false;
                  }
                }
              }
            }
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.initialValidator();
            this.submitted = false;
            this.scrollToTop();
          }
        }]);
      }();

      _MeasurementQuestionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }];
      };

      _MeasurementQuestionsPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent]
        }]
      };
      _MeasurementQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-measurement-questions',
        template: _raw_loader_measurement_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_measurement_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MeasurementQuestionsPage);
      /***/
    },

    /***/
    80710:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/uniform/measurement-questions/measurement-questions.page.scss ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".selectdata {\n  border: 1px solid #BE3455;\n  background-color: white !important;\n}\n\n.rowcls {\n  color: #114a53;\n  border: 1px solid #be3456;\n  padding: 1%;\n  margin: 1%;\n  margin-bottom: 3% !important;\n}\n\n.colcls {\n  align-self: center;\n  font-weight: bold;\n  text-align: center;\n}\n\n.measurementcard {\n  padding: 3%;\n  margin: 3%;\n}\n\n.rowcls1 {\n  color: white;\n  text-align: center;\n  padding: 1%;\n  margin: 1%;\n  margin-bottom: 3% !important;\n  background-color: #114a53;\n}\n\n.quesInput {\n  border: 1px solid;\n}\n\n.valid-error {\n  font-size: 12px;\n}\n\n.centerItems {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lYXN1cmVtZW50LXF1ZXN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFFQSxVQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6Im1lYXN1cmVtZW50LXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZGF0YSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkUzNDU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnJvd2NscyB7XHJcbiAgICBjb2xvcjogIzExNGE1MztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZTM0NTY7XHJcbiAgICBwYWRkaW5nOiAxJTtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbGNscyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tZWFzdXJlbWVudGNhcmQge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlM2VhO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICB9XHJcblxyXG4gIC5yb3djbHMxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE0YTUzO1xyXG4gIH1cclxuXHJcbiAgLnF1ZXNJbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIH1cclxuXHJcbiAgLnZhbGlkLWVycm9ye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlckl0ZW1ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9Il19 */";
      /***/
    },

    /***/
    69968:
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uniform/measurement-questions/measurement-questions.page.html ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateNext()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div>Measurement Details</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">\r\n         Name : {{name}} Class : {{class_studying_id}} - {{sec}}\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  \r\n  <form [formGroup]=\"form\">\r\n    <div *ngIf=\"gender == 1\">\r\n\r\n      <ion-row class=\"rowcls1\" style=\"padding: 3%;margin: 3%;\">\r\n        <ion-col size=\"12\">\r\n           {{region == 1 ? 'Half Sleeve Shirt' : 'Full Sleeve Shirt'}}\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\">\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div>Shoulder length </div>\r\n          <div>(தோள்பட்டை அளவு)</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"1\" maxlength=\"3\" formControlName=\"boysSholderLength\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysSholderLength.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysSholderLength.errors && (submitted || form.controls.boysSholderLength.dirty || form.controls.boysSholderLength.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysSholderLength.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div *ngIf=\"classId == 1\" class=\"valid-error\" text-wrap>\r\n            <span *ngIf=\"form.value.boysSholderLength < 16 || form.value.boysSholderLength > 50\">Minimum 16 and Maximum 50</span>\r\n          </div>\r\n          <div *ngIf=\"classId == 2\" class=\"valid-error\" text-wrap>\r\n            <span *ngIf=\"form.value.boysSholderLength < 28 || form.value.boysSholderLength > 52\">Minimum 28 and Maximum 52</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\">\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div>Shirt height</div>\r\n          <div>உயரம்</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"boysShirtHeight\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysShirtHeight.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysShirtHeight.errors && (submitted || form.controls.boysShirtHeight.dirty || form.controls.boysShirtHeight.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysShirtHeight.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\">\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div> Hand length </div>\r\n          <div>கை நீளம்</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"boysHandLength\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysHandLength.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysHandLength.errors && (submitted || form.controls.boysHandLength.dirty || form.controls.boysHandLength.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysHandLength.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\">\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div> Chest circum </div>\r\n          <div>மார்பு சுற்றளவு</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"boysChestCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysChestCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysChestCircum.errors && (submitted || form.controls.boysChestCircum.dirty || form.controls.boysChestCircum.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysChestCircum.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row  class=\"rowcls\" >\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div>Hand circum </div>\r\n          <div>கை சுற்றளவு</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"boysHandCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysHandCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysHandCircum.errors && (submitted || form.controls.boysHandCircum.dirty || form.controls.boysHandCircum.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysHandCircum.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls1\" style=\"padding: 3%;margin: 3%;\">\r\n        <ion-col *ngIf=\"region == 1\" size=\"12\">\r\n          {{classId == 1 ? 'Half Pant' : 'Full Pant'}}\r\n        </ion-col>\r\n        <ion-col *ngIf=\"region == 2\" size=\"12\">\r\n          Full Pant\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\">\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div> Hip circum </div>\r\n          <div>(இடுப்பு சுற்றளவு)</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"1\" maxlength=\"3\" formControlName=\"boysHipCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysHipCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysHipCircum.errors && (submitted || form.controls.boysHipCircum.dirty || form.controls.boysHipCircum.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysHipCircum.errors?.required\">Field is Required</span>\r\n          </div>\r\n          <div *ngIf=\"classId == 1\" class=\"valid-error\" text-wrap>\r\n            <span *ngIf=\"form.value.boysHipCircum < 44 || form.value.boysHipCircum > 90\">Minimum 44 and Maximum 90</span>\r\n          </div>\r\n          <div *ngIf=\"classId == 2\" class=\"valid-error\" text-wrap>\r\n            <span *ngIf=\"form.value.boysHipCircum < 60 || form.value.boysHipCircum > 100\">Minimum 60 and Maximum 100</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\">\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div> Height</div>\r\n          <div>உயரம்</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"boysPantHeight\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysPantHeight.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysPantHeight.errors && (submitted || form.controls.boysPantHeight.dirty || form.controls.boysPantHeight.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysPantHeight.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\" >\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div>Thigh circum</div>\r\n          <div>தொடை சுற்றளவு</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"boysThighCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysThighCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysThighCircum.errors && (submitted || form.controls.boysThighCircum.dirty || form.controls.boysThighCircum.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysThighCircum.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"rowcls\" *ngIf=\"(region == 1 && classId == 2) || region == 2\">\r\n        <ion-col size=\"2\" class=\"centerItems\">\r\n          <img src=\"/assets/images/height.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\">\r\n          <div>Leg circum</div>\r\n          <div>கால் சுற்றளவு</div>\r\n        </ion-col>\r\n        <ion-col size=\"5\" class=\"colcls\"> \r\n          <ion-input type=\"tel\" minlength=\"1\" maxlength=\"3\" formControlName=\"boysLegCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.boysLegCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n          <div class=\"valid-error\" *ngIf=\"submitted && form.controls.boysLegCircum.errors && (submitted || form.controls.boysLegCircum.dirty || form.controls.boysLegCircum.touched)\" text-wrap>\r\n            <span *ngIf=\"form.controls.boysLegCircum.errors?.required\">Field is Required</span>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <div *ngIf=\"gender == 2\">\r\n\r\n        <ion-row class=\"rowcls1\" style=\"padding: 3%;margin: 3%;\">\r\n          <ion-col size=\"12\" *ngIf=\"region == 1\">\r\n            {{classId == 1 ? 'Top (Blouse)' : 'Salwar Top'}}\r\n          </ion-col>\r\n          <ion-col size=\"12\" *ngIf=\"region == 2\">\r\n            Salwar Top\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\" >\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div>Shoulder length </div>\r\n            <div>(தோள்பட்டை அளவு)</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"1\" maxlength=\"3\" formControlName=\"girlsTopSholder\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsTopSholder.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsTopSholder.errors && (submitted || form.controls.boysSholderLength.dirty || form.controls.boysSholderLength.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsTopSholder.errors?.required\">Field is Required</span>\r\n            </div>\r\n            <div *ngIf=\"classId == 1 && region == 1\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsTopSholder < 20 || form.value.girlsTopSholder > 50\">Minimum 20 and Maximum 50</span>\r\n            </div>\r\n            <div *ngIf=\"classId == 2 && region == 1\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsTopSholder < 28 || form.value.girlsTopSholder > 52\">Minimum 28 and Maximum 52</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"classId == 1 && region == 2\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsTopSholder < 20 || form.value.girlsTopSholder > 50\">Minimum 20 and Maximum 50</span>\r\n            </div>\r\n            <div *ngIf=\"classId == 2 && region == 2\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsTopSholder < 28 || form.value.girlsTopSholder > 52\">Minimum 28 and Maximum 52</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div>Height</div>\r\n            <div>உயரம்</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"girlsTopHeight\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsTopHeight.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsTopHeight.errors && (submitted || form.controls.girlsTopHeight.dirty || form.controls.girlsTopHeight.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsTopHeight.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div> Hand length </div>\r\n            <div>கை நீளம்</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"girlsTopHandLength\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsTopHandLength.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsTopHandLength.errors && (submitted || form.controls.girlsTopHandLength.dirty || form.controls.girlsTopHandLength.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsTopHandLength.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div> Chest circum </div>\r\n            <div>மார்பு சுற்றளவு</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"girlsTopChestCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsTopChestCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsTopChestCircum.errors && (submitted || form.controls.girlsTopChestCircum.dirty || form.controls.girlsTopChestCircum.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsTopChestCircum.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\" *ngIf=\"classId == 1 && region == 1\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div>Hand circum </div>\r\n            <div>கை சுற்றளவு</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"girlsTopHandCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsTopHandCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsTopHandCircum.errors && (submitted || form.controls.girlsTopHandCircum.dirty || form.controls.girlsTopHandCircum.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsTopHandCircum.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n  \r\n<!-- -------------------------------------------------------------------------------------------------------------- -->\r\n\r\n        <ion-row class=\"rowcls1\" style=\"padding: 3%;margin: 3%;\">\r\n          <ion-col size=\"12\" *ngIf=\"region == 1\">\r\n            {{classId == 1 ? 'Bottom (Skirt)' : 'Salwar Bottom'}}\r\n          </ion-col>\r\n          <ion-col size=\"12\" *ngIf=\"region == 2\">\r\n            Salwar Bottom\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div>Height</div>\r\n            <div>உயரம்</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"1\" maxlength=\"3\" formControlName=\"girlsBottomHeight\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsBottomHeight.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsBottomHeight.errors && (submitted || form.controls.girlsBottomHeight.dirty || form.controls.girlsBottomHeight.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsBottomHeight.errors?.required\">Field is Required</span>\r\n            </div>\r\n            <div *ngIf=\"classId == 2 && region == 1\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsBottomHeight < 84 || form.value.girlsBottomHeight > 108\">Minimum 84 and Maximum 108</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"classId == 1 && region == 2\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsBottomHeight < 68 || form.value.girlsBottomHeight > 104\">Minimum 68 and Maximum 104</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"classId == 2 && region == 2\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsBottomHeight < 88 || form.value.girlsBottomHeight > 110\">Minimum 88 and Maximum 110</span>\r\n            </div>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div> Hip circum </div>\r\n            <div>(இடுப்பு சுற்றளவு)</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"1\" maxlength=\"3\" formControlName=\"girlsBottomHipCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsBottomHipCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsBottomHipCircum.errors && (submitted || form.controls.girlsBottomHipCircum.dirty || form.controls.girlsBottomHipCircum.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsBottomHipCircum.errors?.required\">Field is Required</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"classId == 1 && region == 1\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsBottomHipCircum < 48 || form.value.girlsBottomHipCircum > 90\">Minimum 48 and Maximum 90</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"rowcls\" *ngIf=\"(region == 1 && classId == 2) || region == 2\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div>Leg circum</div>\r\n            <div>கால் சுற்றளவு</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"girlsBottomLegCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsBottomLegCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsBottomLegCircum.errors && (submitted || form.controls.girlsBottomLegCircum.dirty || form.controls.girlsBottomLegCircum.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsBottomLegCircum.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n<!-- -------------------------------------------------------------------------------------------------------------------------- -->\r\n        \r\n        <ion-row *ngIf=\"(region == 1 && classId == 2) || region == 2\" class=\"rowcls1\" style=\"padding: 3%;margin: 3%;\">\r\n          <ion-col size=\"12\">\r\n            Overcoat\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-row *ngIf=\"(region == 1 && classId == 2) || region == 2\" class=\"rowcls\" >\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div>Shoulder length </div>\r\n            <div>(தோள்பட்டை அளவு)</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"1\" maxlength=\"3\" formControlName=\"girlsOvercoatSholder\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsOvercoatSholder.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsOvercoatSholder.errors && (submitted || form.controls.boysSholderLength.dirty || form.controls.boysSholderLength.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsOvercoatSholder.errors?.required\">Field is Required</span>\r\n            </div>\r\n            <div *ngIf=\"classId == 2 && region == 1\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsOvercoatSholder < 28 || form.value.girlsOvercoatSholder > 52\">Minimum 28 and Maximum 52</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"classId == 1 && region == 2\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsOvercoatSholder < 20 || form.value.girlsOvercoatSholder > 50\">Minimum 20 and Maximum 50</span>\r\n            </div>\r\n            <div *ngIf=\"classId == 2 && region == 2\" class=\"valid-error\" text-wrap>\r\n              <span *ngIf=\"form.value.girlsOvercoatSholder < 28 || form.value.girlsOvercoatSholder > 52\">Minimum 28 and Maximum 52</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"(region == 1 && classId == 2) || region == 2\" class=\"rowcls\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div>Height</div>\r\n            <div>உயரம்</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"girlsOvercoatHeight\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsOvercoatHeight.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsOvercoatHeight.errors && (submitted || form.controls.girlsOvercoatHeight.dirty || form.controls.girlsOvercoatHeight.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsOvercoatHeight.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row *ngIf=\"(region == 1 && classId == 2) || region == 2\" class=\"rowcls\">\r\n          <ion-col size=\"2\" class=\"centerItems\">\r\n            <img src=\"/assets/images/height.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\">\r\n            <div> Chest circum </div>\r\n            <div>மார்பு சுற்றளவு</div>\r\n          </ion-col>\r\n          <ion-col size=\"5\" class=\"colcls\"> \r\n            <ion-input type=\"tel\" minlength=\"2\" maxlength=\"2\" formControlName=\"girlsOvercoatChestCircum\" placeholder=\"Please enter cm\" pattern=\"(?!0)[0-9]*$\" [style.border]=\"form.controls.girlsOvercoatChestCircum.errors?.pattern ? '1px solid red' : '1px solid'\"></ion-input>\r\n            <div class=\"valid-error\" *ngIf=\"submitted && form.controls.girlsOvercoatChestCircum.errors && (submitted || form.controls.girlsOvercoatChestCircum.dirty || form.controls.girlsOvercoatChestCircum.touched)\" text-wrap>\r\n              <span *ngIf=\"form.controls.girlsOvercoatChestCircum.errors?.required\">Field is Required</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n    \r\n    </div>\r\n\r\n    <ion-row >\r\n      <ion-col size=\"6\" style=\"text-align: center;\">\r\n        <ion-button class=\"newsecondary\" (click)=\"navigateNext()\">Back</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"text-align: center;\">\r\n        <ion-button class=\"newprimary\" (click)=\"autoSync()\">Save</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_uniform_measurement-questions_measurement-questions_module_ts-es5.js.map