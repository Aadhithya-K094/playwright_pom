(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_student-from_student-from_module_ts"], {
    /***/
    89359:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/mht/student-from/student-from-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentFromPageRoutingModule": function StudentFromPageRoutingModule() {
          return (
            /* binding */
            _StudentFromPageRoutingModule
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


      var _student_from_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-from.page */
      58008);

      var routes = [{
        path: '',
        component: _student_from_page__WEBPACK_IMPORTED_MODULE_0__.StudentFromPage
      }];

      var _StudentFromPageRoutingModule = /*#__PURE__*/_createClass(function StudentFromPageRoutingModule() {
        _classCallCheck(this, StudentFromPageRoutingModule);
      });

      _StudentFromPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StudentFromPageRoutingModule);
      /***/
    },

    /***/
    56418:
    /*!***************************************************************!*\
      !*** ./src/app/pages/mht/student-from/student-from.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentFromPageModule": function StudentFromPageModule() {
          return (
            /* binding */
            _StudentFromPageModule
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


      var _student_from_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./student-from-routing.module */
      89359);
      /* harmony import */


      var _student_from_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-from.page */
      58008);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _StudentFromPageModule = /*#__PURE__*/_createClass(function StudentFromPageModule() {
        _classCallCheck(this, StudentFromPageModule);
      });

      _StudentFromPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _student_from_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentFromPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_student_from_page__WEBPACK_IMPORTED_MODULE_1__.StudentFromPage]
      })], _StudentFromPageModule);
      /***/
    },

    /***/
    58008:
    /*!*************************************************************!*\
      !*** ./src/app/pages/mht/student-from/student-from.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentFromPage": function StudentFromPage() {
          return (
            /* binding */
            _StudentFromPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_from_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-from.page.html */
      21444);
      /* harmony import */


      var _student_from_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-from.page.scss */
      35405);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/diagnosis.service */
      10293);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/network.service */
      81508);

      var Port = /*#__PURE__*/_createClass(function Port() {
        _classCallCheck(this, Port);
      });

      var _StudentFromPage = /*#__PURE__*/function () {
        function StudentFromPage(sqliteDB, formBuilder, route, alert, router, usersessionService, networkService, userService, alertController, diagnosisService) {
          _classCallCheck(this, StudentFromPage);

          this.sqliteDB = sqliteDB;
          this.formBuilder = formBuilder;
          this.route = route;
          this.alert = alert;
          this.router = router;
          this.usersessionService = usersessionService;
          this.networkService = networkService;
          this.userService = userService;
          this.alertController = alertController;
          this.diagnosisService = diagnosisService;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe("en-US");
          this.buttonlocal = true;
          this.stdName = '';
          this.stdUniId = 0;
          this.submitted = false;
          this.StudentForm = [];
          this.MultiDrop = true;
          this.MultiDropTab = true;
          this.labelList = [];
          this.TabletList = [];
          this.label = [];
          this.noSpecial = "^[a-zA-Z \b]+$";
          this.Action_taken = [{
            value: "1",
            label: "Treatment given during camp"
          }, {
            value: "2",
            label: "Referred to PHC / CHC / Sub-district hospital"
          }, {
            value: "3",
            label: "Referred to DEIC"
          }, {
            value: "4",
            label: "No action required"
          }, {
            value: "5",
            label: "Child already under treatment"
          }];
          this.Tablets_Pres = [{
            value: "1",
            label: "Yes"
          }, {
            value: "2",
            label: "No"
          }];
          this.Follow_req = [{
            value: "1",
            label: "Yes"
          }, {
            value: "2",
            label: "No"
          }];
          this.Status_req = [{
            value: "1",
            label: "Normal"
          }, {
            value: "2",
            label: "To be Diagnosed"
          }, {
            value: "3",
            label: "Absent"
          }, {
            value: "4",
            label: "Long Absent"
          }];
          this.outcome_status = [{
            value: "1",
            label: "Treatment completed"
          }, {
            value: "2",
            label: "On Medical Management"
          }, {
            value: "3",
            label: "On Surgical Management"
          }, {
            value: "4",
            label: "Surgery planned on"
          }, {
            value: "5",
            label: "Not willing for Surgery"
          }, {
            value: "6",
            label: "Surgery Follow up at Private"
          }, {
            value: "8",
            label: "Death"
          }, {
            value: "9",
            label: "Migration"
          }, {
            value: "10",
            label: "Under observation & follow up"
          }, {
            value: "7",
            label: "Others"
          }];
          this.date = new Date().toISOString();
          this.getArrayData = [];
          this.getTabletArray = [];
          this.serverData = [];
          this.StudentGet = {};
          this.diagnoses = this.diagnosisService.getDiagnoses();
          this.tabletsPrescribed = this.diagnosisService.getTabletsPrescribed();
        }

        return _createClass(StudentFromPage, [{
          key: "portChange",
          value: function portChange(event) {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidators();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.paramsId = this.routeData.queryParams.Id;
            this.SchlId = this.routeData.queryParams.SchlId;
            this.Doct_name = this.routeData.queryParams.Doct_name;
            this.Doct_No = this.routeData.queryParams.Doct_No;
            this.student_ID = this.routeData.queryParams.student_ID;
            this.Sectn = this.routeData.queryParams.Sectn;
            this.ClsID = this.routeData.queryParams.ClsID;
            this.SchName = this.routeData.queryParams.SchName;
            this.ComptStatus = this.routeData.queryParams.ComptStatus;
            this.stdUniId = this.routeData.queryParams.emisId ? Number(this.routeData.queryParams.emisId) : 0;
            this.stdName = this.routeData.queryParams.stdName;
            this.acYear = this.routeData.queryParams.acYear;
            this.userLatt = this.routeData.queryParams.userLatt;
            this.userLongg = this.routeData.queryParams.userLongg;
            this.schoolLatt = this.routeData.queryParams.schoolLatt;
            this.schoolLongg = this.routeData.queryParams.schoolLongg;
            this.LoginUserName = this.usersessionService.emis_username();
            var today = new Date();
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            var yes = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0);
            this.yesterdayDate = this.pipe.transform(yes, "yyyy-MM-dd");

            if (this.acYear == '2023-24') {
              this.Action_taken = [{
                value: "1",
                label: "Treatment given during camp"
              }, {
                value: "2",
                label: "Referred to PHC / CHC / Sub-district hospital"
              }, {
                value: "3",
                label: "Referred to DEIC"
              }, {
                value: "4",
                label: "No action required"
              }, {
                value: "5",
                label: "Child already under treatment"
              }];
            } else {
              this.Action_taken = [{
                value: "1",
                label: "Treatment given during camp"
              }, {
                value: "2",
                label: "Referred to PHC / CHC / Sub-district hospital"
              }, {
                value: "3",
                label: "Referred to DEIC"
              }, {
                value: "5",
                label: "Child already under treatment"
              }];
            }

            this.MultiDropTab = false;
            this.checkLocalDb();
          }
        }, {
          key: "initialValidators",
          value: function initialValidators() {
            this.form = this.formBuilder.group({
              Condition_Diagn: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
              Diadnosed_TextField: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
              Prescribtion_TextField: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
              Action_taken: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(""),
              outcome_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(""),
              Follow_Up_Req: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
              date_Req: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
              status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
              Tabets_prescribed_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
              Tabets_prescribed: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
              surgery_plannedon: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null),
              other_outcome_sts: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl("", null)
            });
          }
        }, {
          key: "checkLocalDb",
          value: function checkLocalDb() {
            this.isDisable = false;
            this.MultiDrop = true;
            this.MultiDropTab = true;
            this.localstatus = "0";
            this.StudentGet = {};
            this.getStndFormDeatails(); // const query = "SELECT * FROM mhtStudentFormDetailsDB WHERE StudentId=" + this.student_ID;
            // return this.sqliteDB.getDataLocalDB(query).then(data => {
            //   if (data.rows.length > 0) {
            //     this.localstatus = "2";
            //     let temp = [];
            //     for (var i = 0; i < data.rows.length; i++) {
            //       temp.push(data.rows.item(i));
            //     }
            //     this.StudentGet= temp[0];
            //     this.onCheck(this.StudentGet);
            //   } else {
            //     this.isDisable = false;
            //     this.MultiDrop = true;
            //     this.MultiDropTab = true;
            //     this.localstatus = "0";
            //     this.StudentGet = {};
            //     this.getStndFormDeatails();
            //   }
            // });
          }
        }, {
          key: "onCheck",
          value: function onCheck(StudentGet) {
            var _this = this;

            this.isDisable = true;
            this.loadQuestion(StudentGet);

            if (StudentGet.DgnsdCndn == 1) {
              this.form.controls["status"].setValue('1');
            } else {
              var diagVal = [];
              var conDiag = [];
              var tabletsPrescribed = [];
              var str = StudentGet.DgnsdCndn;
              var temp = new Array();
              temp = str.split(",");
              this.getArrayData = [];
              this.diagnoses.forEach(function (element) {
                for (var i = 0; i < temp.length; i++) {
                  if (element['value'] == temp[i]) {
                    _this.getArrayData.push(element['label']);

                    conDiag.push(element);
                  }
                }
              });
              var str = StudentGet.TabPresc;
              var tempVal = new Array();
              tempVal = str.split(",");
              this.getTabletArray = [];
              this.tabletsPrescribed.forEach(function (element) {
                for (var i = 0; i < tempVal.length; i++) {
                  if (element['value'] == tempVal[i]) {
                    _this.getTabletArray.push(element['label']);

                    tabletsPrescribed.push(element);
                  }
                }
              });

              for (var i = 0; i < temp.length; i++) {
                diagVal.push({
                  value: temp[i],
                  label: temp[i]
                });
              }

              this.form.controls["status"].setValue('2');
              this.form.controls["Condition_Diagn"].setValue(conDiag);
              this.form.controls["Tabets_prescribed"].setValue(tabletsPrescribed);
              this.form.controls["Action_taken"].setValue(StudentGet.ActTkn);
              this.form.controls["Follow_Up_Req"].setValue(StudentGet.FlwReqd);
              this.form.controls["date_Req"].setValue(StudentGet.FlwReqDate);
              this.form.controls["Tabets_prescribed_status"].setValue(StudentGet.TabYn); // this.form.controls["Tabets_prescribed"].setValue(StudentGet.TabPresc);

              this.form.controls.Diadnosed_TextField.setValue(StudentGet.DgnsdCndnOth);
              this.form.controls.Prescribtion_TextField.setValue(StudentGet.TabPrescOth);
              this.form.controls["outcome_status"].setValue(StudentGet.outcome_status);
              this.form.controls["surgery_plannedon"].setValue(StudentGet.surgery_plannedon);
              this.form.controls["other_outcome_sts"].setValue(StudentGet.other_outcome_sts);

              if (this.isDisable == true) {
                if (temp.includes("Others") == true || this.getArrayData.includes('Others') == true) {
                  // if (temp.includes("Others") == true) {
                  this.MultiDrop = true;
                } else {
                  this.MultiDrop = false;
                }
              } else {
                this.MultiDrop = false;
              }

              if (this.isDisable == true) {
                if (tempVal.includes("Others") == true || this.getTabletArray.includes("Others") == true) {
                  this.MultiDropTab = true;
                } else {
                  this.MultiDropTab = false;
                }
              } else {
                this.MultiDropTab = false;
              }

              if (StudentGet.LocalStatus == 0) {
                this.buttonlocal = true;
              } else if (StudentGet.LocalStatus == null) {
                this.buttonlocal = false;
              }
            }

            this.getStatus();
          }
        }, {
          key: "outComeStatus",
          value: function outComeStatus() {
            this.form.controls["surgery_plannedon"].setValue('');
            this.form.controls["other_outcome_sts"].setValue('');

            if (this.form.value.outcome_status == '4') {
              this.form.controls["surgery_plannedon"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
            } else {
              this.form.controls["surgery_plannedon"].setValidators(null);
            }

            if (this.form.value.outcome_status == '7') {
              this.form.controls["other_outcome_sts"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
            } else {
              this.form.controls["other_outcome_sts"].setValidators(null);
            }

            this.form.controls["surgery_plannedon"].updateValueAndValidity();
            this.form.controls["other_outcome_sts"].updateValueAndValidity();
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            var id = this.form.value.status;

            if (id == 2) {
              this.submitted = false;
              this.form.controls["Action_taken"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              this.form.controls["Condition_Diagn"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
              this.form.controls["outcome_status"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
            } else {
              this.form.controls["Condition_Diagn"].setValue('');
              this.form.controls["Action_taken"].setValue('');
              this.form.controls["Tabets_prescribed"].setValue('');
              this.form.controls["Tabets_prescribed_status"].setValue('');
              this.form.controls["Follow_Up_Req"].setValue('');
              this.form.controls["date_Req"].setValue('');
              this.form.controls["Diadnosed_TextField"].setValue('');
              this.form.controls["Prescribtion_TextField"].setValue('');
              this.form.controls["outcome_status"].setValue('');
              this.form.controls["Condition_Diagn"].setValidators(null);
              this.form.controls["Action_taken"].setValidators(null);
              this.form.controls["Diadnosed_TextField"].setValidators(null);
              this.form.controls["Prescribtion_TextField"].setValidators(null);
              this.form.controls["outcome_status"].setValidators(null);
              this.form.controls["surgery_plannedon"].setValidators(null);
              this.form.controls["other_outcome_sts"].setValidators(null);
              this.MultiDrop = false;
              this.MultiDropTab = false;
            }

            this.form.controls["Diadnosed_TextField"].updateValueAndValidity();
            this.form.controls["Prescribtion_TextField"].updateValueAndValidity();
            this.form.controls["Condition_Diagn"].updateValueAndValidity();
            this.form.controls["Action_taken"].updateValueAndValidity();
            this.form.controls["outcome_status"].updateValueAndValidity();
            this.form.controls["surgery_plannedon"].updateValueAndValidity();
            this.form.controls["other_outcome_sts"].updateValueAndValidity();
          }
        }, {
          key: "loadQuestion",
          value: function loadQuestion(data) {
            var _this2 = this;

            var diagVal = [];
            var conDiag = [];
            var tabletsPrescribed = [];
            var str = data.DgnsdCndn;
            var temp = new Array();
            temp = str.split(",");
            this.getArrayData = [];
            this.diagnoses.forEach(function (element) {
              for (var i = 0; i < temp.length; i++) {
                if (element['value'] == temp[i]) {
                  _this2.getArrayData.push(element['label']);

                  conDiag.push(element);
                }
              }
            });
            var str = data.TabPresc;
            var tempVal = new Array();
            tempVal = str.split(",");
            this.getTabletArray = [];
            this.tabletsPrescribed.forEach(function (element) {
              for (var i = 0; i < tempVal.length; i++) {
                if (element['value'] == tempVal[i]) {
                  _this2.getTabletArray.push(element['label']);

                  tabletsPrescribed.push(element);
                }
              }
            });
            console.log(data.Status, "ststus");
            var sts = data.Status;
            this.form.controls.status.setValue(sts);
            this.form.controls.Tabets_prescribed_status.setValue(data.TabYn);
            this.form.controls.Diadnosed_TextField.setValue(data.DgnsdCndnOth);
            this.form.controls.Prescribtion_TextField.setValue(data.TabPrescOth);
            this.form.controls.Action_taken.setValue(data.ActTkn);
            this.form.controls["Condition_Diagn"].setValue(conDiag);
            this.form.controls["Tabets_prescribed"].setValue(tabletsPrescribed);
            this.form.controls.Follow_Up_Req.setValue(data.FlwReqd);
            this.form.controls.date_Req.setValue(data.FlwReqDate);
            this.form.controls["outcome_status"].setValue(data.outcome_status);
            this.form.controls["surgery_plannedon"].setValue(data.surgery_plannedon);
            this.form.controls["other_outcome_sts"].setValue(data.other_outcome_sts);
            this.getStatus();
          }
        }, {
          key: "getStndFormDeatails",
          value: function getStndFormDeatails() {
            var _this3 = this;

            this.userService.getMHTStudentFormDeatails(this.student_ID, this.acYear).subscribe(function (res) {
              if (res.dataStatus) {
                _this3.StudentGet = res.result[0];
                _this3.isDisable = true;

                _this3.form.controls["status"].setValue(_this3.StudentGet.Status);

                if (_this3.StudentGet.Status == 2) {
                  var diagVal = [];
                  var str = _this3.StudentGet.DgnsdCndn;
                  var temp = new Array();
                  temp = str.split(",");
                  _this3.getArrayData = [];

                  _this3.diagnoses.forEach(function (element) {
                    for (var i = 0; i < temp.length; i++) {
                      if (element['value'] == temp[i]) {
                        _this3.getArrayData.push(element['label']);
                      }
                    }
                  });

                  var str = _this3.StudentGet.TabPresc;
                  var tempVal = new Array();
                  tempVal = str.split(",");
                  _this3.getTabletArray = [];

                  _this3.tabletsPrescribed.forEach(function (element) {
                    for (var i = 0; i < tempVal.length; i++) {
                      if (element['value'] == tempVal[i]) {
                        _this3.getTabletArray.push(element['label']);
                      }
                    }
                  });

                  for (var i = 0; i < temp.length; i++) {
                    diagVal.push({
                      value: temp[i],
                      label: temp[i]
                    });
                  }

                  if (_this3.isDisable == true) {
                    if (temp.includes("Others") == true || _this3.getArrayData.includes("Others") == true) {
                      _this3.MultiDrop = true;
                    } else {
                      _this3.MultiDrop = false;
                    }
                  } else {
                    _this3.MultiDrop = false;
                  }

                  if (_this3.isDisable == true) {
                    if (tempVal.includes("Others") == true || _this3.getTabletArray.includes("Others") == true) {
                      _this3.MultiDropTab = true;
                    } else {
                      _this3.MultiDropTab = false;
                    }
                  } else {
                    _this3.MultiDropTab = false;
                  }

                  _this3.loadQuestion(_this3.StudentGet); // this.insertLocalDB([this.StudentGet]);

                }
              }
            });
          }
        }, {
          key: "insertLocalDB",
          value: function insertLocalDB(key) {
            var _this4 = this;

            key.forEach(function (element, data) {
              var datainsert = 'INSERT INTO mhtStudentFormDetailsDB VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

              _this4.sqliteDB.insert(datainsert, [null, element.ActTkn, element.DgnsdCndn, element.DgnsdCndnOth, element.DrMobile, element.DrName, element.FlwReqDate, element.FlwReqd, element.IndexId, element.LocalStatus, element.SchoolId, element.StudentId, element.TabPresc, element.TabPrescOth, element.TabValue, element.TabYn, element.Username, element.Status]).then(function (insertres) {
                if (insertres.insertId) {}
              });
            });
          }
        }, {
          key: "insertLocalDB2",
          value: function insertLocalDB2(element) {
            var datainsert = 'INSERT INTO mhtStudentFormDetailsDB VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, element.ActTkn, element.DgnsdCndn, element.DgnsdCndnOth, element.DrMobile, element.DrName, element.FlwReqDate, element.FlwReqd, element.IndexId, element.LocalStatus, element.SchoolId, element.StudentId, element.TabPresc, element.TabPrescOth, element.TabValue, element.TabYn, element.Username, element.Status]).then(function (insertres) {
              if (insertres.insertId) {}
            });
          }
        }, {
          key: "getothers",
          value: function getothers(id) {
            if (id.length > 0) {
              this.MultiDrop = id.some(function (el) {
                return el.value == '52';
              });

              if (this.MultiDrop == true) {
                this.form.controls["Diadnosed_TextField"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.noSpecial)]);
              } else {
                this.form.controls["Diadnosed_TextField"].setValue('');
                this.form.controls["Diadnosed_TextField"].setValidators(null);
              }

              this.form.controls["Diadnosed_TextField"].updateValueAndValidity();
            }
          }
        }, {
          key: "getTabothers",
          value: function getTabothers(id) {
            this.MultiDropTab == false;

            if (id.length > 0) {
              this.MultiDropTab = id.some(function (el) {
                return el.value == '45';
              });

              if (this.MultiDropTab == true) {
                this.form.controls["Prescribtion_TextField"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.noSpecial)]);
              } else {
                this.form.controls["Prescribtion_TextField"].setValue('');
                this.form.controls["Prescribtion_TextField"].setValidators(null);
              }

              this.form.controls["Prescribtion_TextField"].updateValueAndValidity();
            }
          }
        }, {
          key: "diagnosisChange",
          value: function diagnosisChange(event) {
            this.getothers(event.value);
          }
        }, {
          key: "tabletsPrescribedChange",
          value: function tabletsPrescribedChange(event) {
            this.getTabothers(event.value);
          }
        }, {
          key: "getTabStatus",
          value: function getTabStatus(tabid) {
            if (tabid == 1) {
              this.form.controls["Tabets_prescribed"].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required);
            } else {
              this.form.controls["Tabets_prescribed"].setValue('');
              this.form.controls["Tabets_prescribed"].setValidators(null);
              this.form.controls["Prescribtion_TextField"].setValue('');
              this.form.controls["Prescribtion_TextField"].setValidators(null);
              this.form.controls["Prescribtion_TextField"].updateValueAndValidity();
            }

            this.form.controls["Tabets_prescribed"].updateValueAndValidity();
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/class-student-list'], {
              queryParams: {
                'SchlId': this.SchlId,
                'ClsID': this.ClsID,
                'Sectn': this.Sectn,
                'SchName': this.SchName,
                acYear: this.acYear
              },
              skipLocationChange: false
            });
            this.form.reset();
          }
        }, {
          key: "submitButton",
          value: function submitButton() {
            this.labelList = [];
            this.TabletList = [];

            if (this.form.valid) {
              var diagparamval;

              if (this.form.value.status == 2) {
                var data = this.form.value.Condition_Diagn;

                for (var i = 0; i < data.length; i++) {
                  this.labelList.push(data[i]);
                }

                diagparamval = Array.prototype.map.call(this.form.value.Condition_Diagn, function (item) {
                  return item.value;
                }).join(",");
              } else {
                diagparamval = 0;
              }

              var tabletPres;

              if (this.form.value.Tabets_prescribed_status == 1) {
                var data = this.form.value.Tabets_prescribed;

                for (var _i = 0; _i < data.length; _i++) {
                  this.TabletList.push(data[_i]);
                }

                tabletPres = Array.prototype.map.call(this.form.value.Tabets_prescribed, function (item) {
                  return item.value;
                }).join(",");
              }

              var secondParam;
              secondParam = {
                records: {
                  SchoolId: this.SchlId,
                  Username: this.LoginUserName,
                  UserLatt: this.userLatt,
                  UserLongg: this.userLongg,
                  VisitPhoto: localStorage.getItem('VisitPhoto')
                }
              };
              var params;

              if (Object.keys(this.StudentGet).length > 0) {
                params = {
                  records: {
                    IndexId: this.StudentGet.IndexId,
                    SchoolId: this.SchlId,
                    StudentId: this.student_ID,
                    Username: this.LoginUserName,
                    DrName: this.Doct_name,
                    DrMobile: this.Doct_No,
                    DgnsdCndn: diagparamval,
                    DgnsdCndnOth: this.form.value.Diadnosed_TextField,
                    ActTkn: this.form.value.Action_taken,
                    TabYn: this.form.value.Tabets_prescribed_status,
                    TabPresc: tabletPres,
                    TabPrescOth: this.form.value.Prescribtion_TextField,
                    TabValue: "",
                    FlwReqd: this.form.value.Follow_Up_Req,
                    FlwReqDate: this.form.value.date_Req,
                    LocalStatus: this.localstatus,
                    Status: this.form.value.status,
                    OutcomeSts: this.form.value.outcome_status,
                    SurgeryPlannedOn: this.form.value.surgery_plannedon,
                    OtherOutcomeStatus: this.form.value.other_outcome_sts,
                    acYear: this.acYear,
                    userLatt: this.userLatt,
                    userLongg: this.userLongg,
                    schoolLatt: this.schoolLatt,
                    schoolLongg: this.schoolLongg
                  }
                };
                this.studentDelete();
              } else {
                params = {
                  records: {
                    IndexId: "",
                    SchoolId: this.SchlId,
                    StudentId: this.student_ID,
                    Username: this.LoginUserName,
                    DrName: this.Doct_name,
                    DrMobile: this.Doct_No,
                    DgnsdCndn: diagparamval,
                    DgnsdCndnOth: this.form.value.Diadnosed_TextField,
                    ActTkn: this.form.value.Action_taken,
                    TabYn: this.form.value.Tabets_prescribed_status,
                    TabPresc: tabletPres,
                    TabPrescOth: this.form.value.Prescribtion_TextField,
                    TabValue: "",
                    FlwReqd: this.form.value.Follow_Up_Req,
                    FlwReqDate: this.form.value.date_Req,
                    LocalStatus: this.localstatus,
                    Status: this.form.value.status,
                    OutcomeSts: this.form.value.outcome_status,
                    SurgeryPlannedOn: this.form.value.surgery_plannedon,
                    OtherOutcomeStatus: this.form.value.other_outcome_sts,
                    acYear: this.acYear,
                    userLatt: this.userLatt,
                    userLongg: this.userLongg,
                    schoolLatt: this.schoolLatt,
                    schoolLongg: this.schoolLongg
                  }
                };
              }

              this.savePhoto(secondParam);
              this.onlineServerSave(params);
            } else {
              this.alert.error("Please fill the required fields");
              this.submitted = true;
            }
          }
        }, {
          key: "savePhoto",
          value: function savePhoto(params) {
            console.log(params);
            debugger;
            this.userService.saveMHTGeoFencingPhoto(params).subscribe(function (data) {});
          }
        }, {
          key: "onlineServerSave",
          value: function onlineServerSave(params) {
            var _this5 = this;

            this.localstatus = "1"; // this.userService.saveMHTGeoFencingPhoto()

            this.userService.saveMHTStudentForm(params).subscribe(function (data) {
              if (data.status == 200 && data.dataStatus == true) {
                var updateQuery = 'UPDATE mhtStudentListDB SET ComptStatus = 1,LocalTick = 0 WHERE mhtStudentListDB.StuId = "' + _this5.student_ID + '"';
                return _this5.sqliteDB.update(updateQuery).then(function (data) {
                  _this5.alert.success("Submitted Successfully");

                  _this5.form.reset();

                  _this5.onGoButton();
                });
              } else {
                _this5.alert.error(data.message);

                _this5.alert.error("Dulpicate Entry Message");
              }
            });
          }
        }, {
          key: "saveofflineData",
          value: function saveofflineData(params) {
            var _this6 = this;

            this.serverData = params.records;
            this.localstatus = "2";
            var query = "SELECT * FROM mhtStudentFormDetailsDB WHERE StudentId=" + this.student_ID;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this6.studentDelete();
              } else {
                _this6.insertLocalDB2(_this6.serverData);

                var updateQuery = 'UPDATE mhtStudentListDB SET LocalTick = 2 WHERE mhtStudentListDB.StuId = "' + _this6.student_ID + '"';
                return _this6.sqliteDB.update(updateQuery).then(function (data) {
                  _this6.alert.success("Student data saved as locally");

                  _this6.onGoButton();
                });
              }
            });
          }
        }, {
          key: "studentDelete",
          value: function studentDelete() {
            var _this7 = this;

            var query = 'DELETE FROM mhtStudentFormDetailsDB' + ' WHERE StudentId = "' + this.student_ID + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              // this.insertLocalDB2(this.StudentGet);
              _this7.alert.success("Student data updated successfully");
            });
          }
        }, {
          key: "editBtn",
          value: function editBtn() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this8 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Confirmation',
                      subHeader: 'Are you sure want to edit the form?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel'
                      }, {
                        text: 'Yes',
                        handler: function handler(data) {
                          _this8.isDisable = false;
                        }
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
          key: "followUpchange",
          value: function followUpchange(event) {
            // date_Req
            if (event.target.value == 2) {
              this.form.patchValue({
                date_Req: ''
              });
            }
          }
        }]);
      }();

      _StudentFromPage.ctorParameters = function () {
        return [{
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
        }, {
          type: src_app_services_diagnosis_service__WEBPACK_IMPORTED_MODULE_6__.DiagnosisService
        }];
      };

      _StudentFromPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-student-from',
        template: _raw_loader_student_from_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_from_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentFromPage);
      /***/
    },

    /***/
    35405:
    /*!***************************************************************!*\
      !*** ./src/app/pages/mht/student-from/student-from.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".blockLabel {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.dropDown {\n  padding-right: 15px;\n  font-size: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.input-text {\n  padding-right: 15px;\n  font-size: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.yesNoLabel {\n  width: 100%;\n  padding: 6px;\n  padding-left: 15px;\n  margin-bottom: 5px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n}\n\n.btnDiv {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n}\n\n.btnDiv2 {\n  width: 100%;\n  text-align: center;\n  padding-bottom: 20px;\n  background-color: #ee4f4f;\n}\n\n.subBtn {\n  color: white;\n  margin-left: 35px;\n  margin-right: 35px;\n  margin-bottom: 20px;\n}\n\n.footer-txt {\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 19px;\n}\n\n.footer-bckclr {\n  background: var(--ion-color-primary);\n}\n\n.footer-syncbckclr {\n  background: #3e8f3e;\n}\n\n.footer-txt-clr {\n  color: white;\n}\n\n.mainLable {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  padding: 10px;\n  margin-bottom: 15px;\n  position: sticky;\n  top: 0px;\n  left: 0;\n  width: 100%;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtZnJvbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUVJLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksb0NBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRkoiLCJmaWxlIjoic3R1ZGVudC1mcm9tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ja0xhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5kcm9wRG93biB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNlNmYzZmY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLy8gIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC10ZXh0IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgwLCAxODAsIDE4MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ueWVzTm9MYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5EaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmJ0bkRpdjIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDc5LCA3OSk7XHJcbn1cclxuXHJcbi5zdWJCdG4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmZvb3Rlci10eHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxufVxyXG5cclxuLmZvb3Rlci1iY2tjbHIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uZm9vdGVyLXN5bmNiY2tjbHIge1xyXG4gICAgYmFja2dyb3VuZDogIzNlOGYzZTtcclxufVxyXG5cclxuLmZvb3Rlci10eHQtY2xyIHtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4ubWFpbkxhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkE4Qjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59Il19 */";
      /***/
    },

    /***/
    21444:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/student-from/student-from.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">Student Form (AY {{acYear}})</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <div class=\"mainLable\"> \r\n    <h6 *ngIf=\"stdName\"><b>Name:</b> {{stdName}}</h6>\r\n    <h6 *ngIf=\"stdUniId\"><b>Id:</b> {{stdUniId}}</h6>\r\n  </div>\r\n  <form [formGroup]=\"form\">\r\n    <ion-card style=\"margin: 15px;\">\r\n      <div style=\"margin:20px;background-color: white;padding: 15px;border-radius: 15px; \">\r\n        <!-- <div style=\"text-align: end;\" (click)=\"editBtn()\">\r\n          <ion-icon name=\"create\" style=\"zoom: 2;color:rgb(57, 117, 196);background-color: #ffe7e7;padding: 4px;border-radius: 5px;\"></ion-icon>\r\n        </div> -->\r\n        <!-- {{this.form.value.status == 1}} ------- {{this.ComptStatus}} -->\r\n        \r\n        <div style=\"text-align: end;\" (click)=\"editBtn()\" *ngIf=\"this.ComptStatus != '' && this.ComptStatus != null && this.ComptStatus != '0' || this.localstatus == '2'\">\r\n          <div>\r\n            <ion-label style=\"background-color: #eeeeee;padding: 5px;border-radius: 5px;\">Edit<span>\r\n                <ion-icon name=\"create\"\r\n                  style=\"zoom: 1;color:rgb(57, 117, 196);padding-left: 3px;\"></ion-icon>\r\n              </span></ion-label>\r\n          </div>\r\n        </div>\r\n\r\n        <ion-label class=\"blockLabel\">\r\n          Status<span style=\"color: red;\"> *</span>\r\n        </ion-label>\r\n        <div style=\"width: 100%; padding: 5px; margin-bottom: 5px; border: 2px solid #b4b4b4; border-radius: 10px;\">\r\n          <div style=\"border: 1px solid rgb(180, 180, 180); border-radius: 3px;\">\r\n            <ion-radio-group formControlName=\"status\" (ionChange)=\"getStatus()\">\r\n              <ion-row>\r\n                <ion-item lines=\"none\" class=\"item-style\" *ngFor=\"let item of Status_req\">\r\n                  <ion-radio [value]=\"item.value\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-radio><span\r\n                    style=\"padding-right:40px;padding-left: 5px\">{{item.label}}</span>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"form.value.status == 2\">\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Condition Diagnosed<span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <!-- [canClear]=\"true\"\r\n          clearButtonText=\"Cancel\" -->\r\n          <ion-item lines=\"none\" class=\"item-style\" class=\"dropDown\">\r\n            <ionic-selectable \r\n            placeholder=\"Select Diagnosis\" \r\n            formControlName=\"Condition_Diagn\" \r\n            [disabledItems]=\"(isDisable || (acYear == '2023-24')) ? diagnoses : []\"\r\n            item-content\r\n              itemValueField=\"value\" \r\n              itemTextField=\"label\" \r\n              [items]=\"diagnoses\" \r\n              [isMultiple]=\"true\" \r\n              [canSearch]=\"true\"\r\n              (onChange)=\"diagnosisChange($event)\">\r\n            </ionic-selectable>\r\n          </ion-item>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.Condition_Diagn.errors?.required\">\r\n            Field is required</p>\r\n          <div *ngIf=\"MultiDrop == true\">\r\n            <div style=\"padding-top: 20px;\">\r\n              <ion-label class=\"blockLabel\">\r\n                Other Diagnosis<span style=\"color: red;\"> *</span>\r\n              </ion-label>\r\n            </div>\r\n\r\n            <div>\r\n              <ion-input class=\"dropDown\" formControlName=\"Diadnosed_TextField\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-input>\r\n            </div>\r\n            <p style=\"color: red;font-size: 14px;\"\r\n              *ngIf=\"submitted && form.controls.Diadnosed_TextField.errors?.required\">Field is required</p>\r\n\r\n              <!-- <div class=\"formLine\" style=\"color:red; font-size: 16px !important;\r\n        padding-top: 5px;\">\r\n          {{(submitted && form.controls.Diadnosed_TextField.required && (form.controls.Diadnosed_TextField.dirty ||\r\n          form.controls.Diadnosed_TextField.touched))&& form.controls.Diadnosed_TextField.errors ? 'Field is required'\r\n          : ''}}\r\n        </div> -->\r\n        <p style=\"color: red;font-size: 14px;\" *ngIf=\"form.controls.Diadnosed_TextField.errors?.pattern\">Please enter text only</p>\r\n\r\n          </div>\r\n\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Action Taken<span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <ion-select class=\"select-tab\" placeholder=\"Select Action\" autocomplete=\"off\" class=\"dropDown\"\r\n            formControlName=\"Action_taken\" [disabled]=\"isDisable || (acYear == '2023-24')\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of Action_taken\">{{item.label}}</ion-select-option>\r\n\r\n          </ion-select>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.Action_taken.errors?.required\">Field\r\n            is required</p>\r\n\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Tablets Prescribed\r\n            </ion-label>\r\n          </div>\r\n\r\n          <div class=\"yesNoLabel\">\r\n            <ion-radio-group formControlName=\"Tabets_prescribed_status\" (ionChange)=\"getTabStatus($event.detail.value)\">\r\n              <ion-row>\r\n                <ion-item lines=\"none\" class=\"item-style\" *ngFor=\"let item of Tablets_Pres\">\r\n                  <ion-radio [value]=\"item.value\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-radio><span\r\n                    style=\"padding-right:40px;padding-left: 5px\">{{item.label}}</span>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n          </div>\r\n\r\n\r\n\r\n          <div *ngIf=\"form.value.Tabets_prescribed_status == 1\">\r\n            <div style=\"padding-top: 20px;\">\r\n              <ion-label class=\"blockLabel\">\r\n                Select Prescribed\r\n              </ion-label>\r\n            </div>\r\n            <ion-item lines=\"none\" class=\"item-style\" class=\"dropDown\">\r\n              <!-- <ion-label>Diagnosis</ion-label> -->\r\n              <ionic-selectable placeholder=\"Select Prescription\" item-content formControlName=\"Tabets_prescribed\"\r\n                itemValueField=\"value\" itemTextField=\"label\" [items]=\"tabletsPrescribed\" [isMultiple]=\"true\"\r\n                [canSearch]=\"true\" (onChange)=\"tabletsPrescribedChange($event)\">\r\n              </ionic-selectable>\r\n            </ion-item>\r\n          </div>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.Tabets_prescribed.errors?.required\">\r\n            Field is required</p>\r\n          <div  *ngIf=\"MultiDropTab == true && form.value.Tabets_prescribed_status == 1\">\r\n            <div style=\"padding-top: 20px;\">\r\n              <ion-label class=\"blockLabel\">\r\n                Other Prescribtions<span style=\"color: red;\"> *</span>\r\n              </ion-label>\r\n            </div>\r\n\r\n            <div>\r\n              <ion-input class=\"dropDown\" formControlName=\"Prescribtion_TextField\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-input>\r\n            </div>\r\n            <p style=\"color: red;font-size: 14px;\"\r\n              *ngIf=\"submitted && form.controls.Prescribtion_TextField.errors?.required\">Field is required</p>\r\n\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"form.controls.Prescribtion_TextField.errors?.pattern\">Please enter text only</p>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Follow-up Required\r\n            </ion-label>\r\n          </div>\r\n\r\n\r\n          <div class=\"yesNoLabel\">\r\n            <ion-radio-group formControlName=\"Follow_Up_Req\" (ionChange)=\"followUpchange($event)\">\r\n              <ion-row>\r\n                <ion-item lines=\"none\" class=\"item-style\" *ngFor=\"let item of Follow_req\">\r\n                  <ion-radio [value]=\"item.value\" [disabled]=\"isDisable || (acYear == '2023-24')\"></ion-radio><span\r\n                    style=\"padding-right:40px;padding-left: 5px\">{{item.label}}</span>\r\n                </ion-item>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n          </div>\r\n          <div>\r\n            <div *ngIf=\"this.form.value.Follow_Up_Req == '1'\">\r\n\r\n              <div style=\"padding-top: 20px;\">\r\n                <ion-label class=\"blockLabel\">\r\n                  Date\r\n                </ion-label>\r\n              </div>\r\n\r\n              <div class=\"yesNoLabel\">\r\n                <ion-row>\r\n                  <ion-col size=\"10\">\r\n                    <ion-datetime displayFormat=\"DD/MM/YYYY\" [min]=\"yesterdayDate\" placeholder=\"Select Date\"\r\n                      formControlName=\"date_Req\" [disabled]=\"isDisable || (acYear == '2023-24')\">\r\n                    </ion-datetime>\r\n                  </ion-col>\r\n                  <ion-col size=\"2\" style=\"align-self: center;zoom: 1.2; color: rgb(104, 82, 156);\">\r\n                    <div>\r\n                      <ion-icon name=\"calendar\"></ion-icon>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Outcome Status <span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <ion-select class=\"select-tab\" placeholder=\"Select Outcome Status\" autocomplete=\"off\" class=\"dropDown\"\r\n            formControlName=\"outcome_status\" (ionChange)=\"outComeStatus()\" [disabled]=\"isDisable\">\r\n            <ion-select-option [value]=\"item.value\" *ngFor=\"let item of outcome_status\">{{item.label}}</ion-select-option>\r\n\r\n          </ion-select>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.outcome_status.errors?.required\">Field\r\n            is required</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"this.form.value.outcome_status == '7'\">\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n             Reason <span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n          <ion-input formControlName=\"other_outcome_sts\" type=\"text\" placeholder=\"Please Enter Your Answer\" class=\"input-text\">\r\n          </ion-input>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.other_outcome_sts.errors?.required\">Field\r\n            is required</p>\r\n        </div>\r\n\r\n        <div *ngIf=\"this.form.value.outcome_status == '4'\">\r\n\r\n          <div style=\"padding-top: 20px;\">\r\n            <ion-label class=\"blockLabel\">\r\n              Month and Year <span style=\"color: red;\"> *</span>\r\n            </ion-label>\r\n          </div>\r\n\r\n          <div class=\"yesNoLabel\">\r\n            <ion-row>\r\n              <ion-col size=\"10\">\r\n                <ion-datetime displayFormat=\"MM/YYYY\" pickerFormat=\"MM YYYY\" placeholder=\"Select Month and Year\"\r\n                  formControlName=\"surgery_plannedon\" [disabled]=\"isDisable\" [max]=\"2050-12\" [min]=\"2024-01\">\r\n                </ion-datetime>\r\n              </ion-col>\r\n              <ion-col size=\"2\" style=\"align-self: center;zoom: 1.2; color: rgb(104, 82, 156);\">\r\n                <div>\r\n                  <ion-icon name=\"calendar\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </div>\r\n          <p style=\"color: red;font-size: 14px;\" *ngIf=\"submitted && form.controls.surgery_plannedon.errors?.required\">Field\r\n            is required</p>\r\n          \r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n      <div>\r\n      <div class=\"btnDiv\" *ngIf=\"!isDisable || (acYear == '2023-24')\">\r\n        <div>\r\n          <ion-button expand=\"block\" (click)=\"submitButton()\" class=\"subBtn\">Submit</ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </ion-card>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mht_student-from_student-from_module_ts-es5.js.map