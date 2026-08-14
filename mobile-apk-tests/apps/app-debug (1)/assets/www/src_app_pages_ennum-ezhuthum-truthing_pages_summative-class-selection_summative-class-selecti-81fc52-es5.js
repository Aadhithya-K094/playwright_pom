(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_ennum-ezhuthum-truthing_pages_summative-class-selection_summative-class-selecti-81fc52"], {
    /***/
    84562:
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection-routing.module.ts ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeClassSelectionPageRoutingModule": function SummativeClassSelectionPageRoutingModule() {
          return (
            /* binding */
            _SummativeClassSelectionPageRoutingModule
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


      var _summative_class_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-class-selection.page */
      74747);

      var routes = [{
        path: '',
        component: _summative_class_selection_page__WEBPACK_IMPORTED_MODULE_0__.SummativeClassSelectionPage
      }];

      var _SummativeClassSelectionPageRoutingModule = /*#__PURE__*/_createClass(function SummativeClassSelectionPageRoutingModule() {
        _classCallCheck(this, SummativeClassSelectionPageRoutingModule);
      });

      _SummativeClassSelectionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SummativeClassSelectionPageRoutingModule);
      /***/
    },

    /***/
    98335:
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.module.ts ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeClassSelectionPageModule": function SummativeClassSelectionPageModule() {
          return (
            /* binding */
            _SummativeClassSelectionPageModule
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


      var _summative_class_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summative-class-selection-routing.module */
      84562);
      /* harmony import */


      var _summative_class_selection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-class-selection.page */
      74747);

      var _SummativeClassSelectionPageModule = /*#__PURE__*/_createClass(function SummativeClassSelectionPageModule() {
        _classCallCheck(this, SummativeClassSelectionPageModule);
      });

      _SummativeClassSelectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _summative_class_selection_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummativeClassSelectionPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_summative_class_selection_page__WEBPACK_IMPORTED_MODULE_1__.SummativeClassSelectionPage]
      })], _SummativeClassSelectionPageModule);
      /***/
    },

    /***/
    74747:
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.page.ts ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummativeClassSelectionPage": function SummativeClassSelectionPage() {
          return (
            /* binding */
            _SummativeClassSelectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_summative_class_selection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./summative-class-selection.page.html */
      63158);
      /* harmony import */


      var _summative_class_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summative-class-selection.page.scss */
      48332);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/api.service */
      43054);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/loader/ion-loader.service */
      21645);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/tnvn/services/common_Provider/toast-service/toast.service */
      95357); // import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


      var _SummativeClassSelectionPage = /*#__PURE__*/function () {
        function SummativeClassSelectionPage(apiService, ionicstorage, router, alertService, route, ionLoaderService, uploadService, alertController, http, networkService, toast, fb, userSessionService) {
          _classCallCheck(this, SummativeClassSelectionPage);

          this.apiService = apiService;
          this.ionicstorage = ionicstorage;
          this.router = router;
          this.alertService = alertService;
          this.route = route;
          this.ionLoaderService = ionLoaderService;
          this.uploadService = uploadService;
          this.alertController = alertController;
          this.http = http;
          this.networkService = networkService;
          this.toast = toast;
          this.fb = fb;
          this.userSessionService = userSessionService;
          this.studetnList = [];
          this.assessedStudents = [];
          this.selectedTest = 0;
          this.classTypeArray = [];
          this.classes = [];
          this.subjects = [];
          this.mediumOfInstructionsArray = [];
          this.classType = 'Monograde';
          this.classRadio = "";
          this.monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          this.TermsList = ['Term 1', 'Term 2', 'Term 3', 'Term 4'];
          this.newarr = {};
          this.selectivecolor = 'primary';
          this.obj = {};
          this.viewStatus = true;
          this.selectAll = false;
          this.viewStatusforDatestarted = false;
          this.classListData = [];
          this.user_name = '10300766';
          this.pass_word = '9442@1969';
          this.token_sample = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWlzX3VzZXJuYW1lIjoiMTAzMDA3NjYiLCJlbWlzX3VzZXJfaWQiOiIzMDA3NjYiLCJlbWlzX3VzZXJ0eXBlIjoiMzgiLCJlbWlzX3VzZXJ0eXBlMSI6IjEiLCJzdGF0dXMiOiJBY3RpdmUiLCJ0ZWFjaGVyX25hbWUiOiJNT0hBTiBSIiwidWRpc2VfY29kZSI6IjMzMDQxMDAwMjMzIiwidGVhY2hlcl90eXBlIjoiMTAxIiwic2Nob29sX2tleV9pZCI6IjkwMDU2IiwidGVhY2hlcl9pZCI6IjEwMzAwNzY2IiwidHlwZV90ZWFjaGVyIjoiRElTVFJJQ1QgRURVQ0FUSU9OQUwgT0ZGSUNFUiAoRWxlbWVudGFyeSkiLCJzdWJqZWN0cyI6IkNoZW1pc3RyeSIsInRlbXBfbG9naW4iOiIwIiwiZGlzdHJpY3RfaWQiOiIzNSIsImJsb2NrX2lkIjpudWxsLCJtb2QxIjoiNjAsMTAsNDEsNDIsNDMsNDQiLCJtb2QyIjoiMTEsMjcsNDksNjksMjgsNzgsNTQsMzUsMzYsMzcsMzgsODEsOCw0MiwzMiIsIm5ld3NjaGwiOm51bGwsImlhdCI6MTY3ODA4NzU2OCwiZXhwIjoxNjc4MDg3ODY4fQ.XLT-jkTVL79Q3uf-9tz3LJCoAGyUJ5PKIVPvwAcIrWE';
          this.completedCount = 0;
          this.overallsubmit = true;
          this.finalDupList = [];
          this.completedSchool = [];

          this.getWeek = function (d) {
            var firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
            return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
          };

          this.emis_usertype = this.userSessionService.emis_usertype();
          this.emis_usertype1 = this.userSessionService.emis_usertype1();
          this.teacher_id = this.userSessionService.emis_username();
        }

        return _createClass(SummativeClassSelectionPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.overallsubmit = true;
            this.errorMsg = '';
            this.schId = this.route.snapshot.queryParamMap.get("schId");
            this.assYear = this.route.snapshot.queryParamMap.get("assYear");
            this.assType = this.route.snapshot.queryParamMap.get("assType");
            this.udiseCode = this.route.snapshot.queryParamMap.get("udiseCode");
            this.observation_id = this.route.snapshot.queryParamMap.get("observation_id");
            this.udiseflag = this.route.snapshot.queryParamMap.get("udiseflag");
            this.level = this.route.snapshot.queryParamMap.get("level");
            this.skipStudID = this.route.snapshot.queryParamMap.get("skipStuID");
            this.asstStatus = this.route.snapshot.queryParamMap.get("asstStatus");
            this.getSchoolList();
            this.studetnList = [];

            if (this.level == 'L1') {
              this.scrnNmbr = 'L1 - 4';
              this.tltStudentCount = 15;
              console.log(this.tltStudentCount);
            } else if (this.level == 'L2') {
              this.scrnNmbr = 'L2 - 4';
              this.tltStudentCount = 12;
              console.log(this.tltStudentCount);
            } else if (this.level == 'L3') {
              this.scrnNmbr = 'L3 - 4';
              this.tltStudentCount = 12;
              console.log(this.tltStudentCount);
            }

            setTimeout(function () {
              var _a;

              debugger;

              if (_this.level == 'L3') {
                if (_this.completedCount >= 1) {
                  _this.overallsubmit = false;
                }
              } else {
                var btnEnabled = _this.finalStuList.filter(function (x) {
                  return x.assmnt_status == "assessed";
                });

                if (((_a = _this.finalDupList) === null || _a === void 0 ? void 0 : _a.length) == 0 && _this.completedCount != _this.tltStudentCount || _this.completedCount == _this.tltStudentCount) {
                  _this.overallsubmit = false;
                } else if (_this.finalStuList.length < _this.tltStudentCount && _this.finalStuList.length == btnEnabled.length) {
                  _this.overallsubmit = false;
                }
              }
            }, 1000);
            this.ionicstorage.getData('userInfo').then(function (dataa) {
              _this.username = dataa.username;
              _this.schoolid = dataa.school_id;
              _this.token = dataa.token;
            });
            debugger;
            this.ionicstorage.getData('clusterId').then(function (dataa) {
              _this.clusterId = dataa;
              console.log(_this.clusterId, 'this.clusterId');
            }, function (error) {
              return console.error(error);
            });
            console.log(this.schId, this.assYear, this.assType, this.observation_id);
            this.ionicstorage.getData('completedSchool').then(function (dataa) {
              _this.completedSchool = [];

              if (dataa != undefined || dataa != null) {
                _this.completedSchool = dataa;
              }
            }, function (error) {
              return console.error(error);
            });
            this.ionicstorage.getData('summativeAsseData').then(function (data) {
              if (data !== null) {
                debugger;
                console.log(data, 'studentlist');
                _this.finalStuListss = [];
                _this.finalStuList = [];
                _this.overallDupliStuList = [];
                _this.finalDupList = [];
                _this.finalStuListss = data;
                console.log(_this.finalStuListss, 'finalStuListss'); //Duplicate overall student list

                for (var i = 0; i < data.studentlist.length; i++) {
                  if (data.studentlist[i].assmnt_status !== 'Absent_today' && data.studentlist[i].assmnt_status !== 'Left_school_after_marking_attendance' && data.studentlist[i].assmnt_status !== 'Present_in_school_but_unwell') {
                    _this.overallDupliStuList.push(data.studentlist[i]);
                  }

                  if (data.studentlist[i].assmnt_status !== 'Absent_today' && data.studentlist[i].assmnt_status !== 'assessed' && data.studentlist[i].assmnt_status !== 'Left_school_after_marking_attendance' && data.studentlist[i].assmnt_status !== 'Present_in_school_but_unwell') {
                    _this.finalDupList.push(data.studentlist[i]);
                  }
                } //final student list


                var count = _this.tltStudentCount;
                var increcount = 0;

                for (var _i = 0; _i < _this.overallDupliStuList.length; _i++) {
                  if (_this.overallDupliStuList[_i].assmnt_status == null || _this.overallDupliStuList[_i].assmnt_status == 'assessed') {
                    if (increcount != count) {
                      for (var j = _i; j < _i + 1; j++) {
                        increcount++;

                        _this.finalStuList.push(_this.overallDupliStuList[j]); // delete this.overallDupliStuList[j]

                      }
                    }
                  }
                }

                _this.finalStuList.forEach(function (data) {
                  if (data.assmnt_status == null) {
                    data.isAssessed = false;
                    data.isSkipped = false;
                    data.observation_id = _this.observation_id;
                    return data;
                  } else if (data.assmnt_status == 'assessed') {
                    data.isAssessed = true;
                    data.isSkipped = true;
                    data.observation_id = _this.observation_id;
                    return data;
                  } else if (data.assmnt_status == 'absent') {
                    data.isAssessed = false;
                    data.isSkipped = true;
                    data.observation_id = _this.observation_id;
                    return data;
                  } else if (data.assmnt_status == 'Left_school_after_marking_attendance' || data.assmnt_status == 'Present_in_school_but_unwell') {
                    data.isAssessed = false;
                    data.isSkipped = true;
                    data.observation_id = _this.observation_id;
                    return data;
                  }
                });

                _this.totalStudent = _this.finalStuList.length;
                _this.completedCount = 0;

                _this.finalStuList.forEach(function (val) {
                  if (val.assmnt_status == 'assessed') {
                    _this.completedCount++;
                  }
                });

                debugger;
                console.log(_this.finalStuList, 'this.finalStuList');
                console.log(typeof _this.finalStuList, 'this.finalStuList');

                if (_this.finalStuList == null || typeof _this.finalStuList == 'undefined' || _this.finalStuList.length == 0) {
                  _this.finalDupList = [];
                  _this.overallDupliStuList = [];
                  _this.finalStuList = [];

                  _this.stuListGet();

                  console.log('stuListGet2');
                } else {
                  var assessedFlag = _this.finalStuList.filter(function (e) {
                    return e.assmnt_status == 'assessed';
                  });

                  _this.router.navigate(['/tabs'], {
                    queryParams: {
                      'assessedStatus': assessedFlag.length
                    }
                  });
                }
              } else {
                _this.stuListGet();

                console.log('stuListGet1');
              }
            }); // setTimeout(() => {
            // }, 300);

            this.downloadStateMarkedAttendance();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {} // ionViewWillEnter() {
          //   this.obj = {}
          //   if (this.route.snapshot.queryParamMap.get('id') != null) {
          //     this.apiService.setdataassessed_typeformativeid(this.route.snapshot.queryParamMap.get('id'));
          //   }
          //   this.assessment_type = this.route.snapshot.queryParamMap.get('id');
          //   let currentdate = new Date();
          //   this.Monthdata = this.monthList[currentdate.getMonth() + 1]
          //   this.ionicstorage.getData('userInfo').then(
          //     (dataa) => {
          //       this.username = dataa.username;
          //       // this.schoolid = dataa.school_id;
          //       this.token = dataa.token;
          //       // this.username = this.user_name;
          //       this.schoolid = '32421';
          //       // this.token = this.token_sample;
          //       console.log(this.username+'--'+this.schoolid+'--'+this.token);
          //       let date = new Date();
          //       let acadamicyear = date.getFullYear() + " - " + (date.getFullYear() + 1);
          //       let obj = {
          //         "academic_year": this.apiService.getacadamic_yearid(),
          //         "month_year": ('0' + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear(),
          //         "assessment_type": this.apiService.getdataassessed_typeformativeid(),
          //         "school_id": this.schoolid
          //       }
          //       this.apiService.getformationterms(obj, this.token).subscribe(async val => {
          //         this.obj = {}
          //         await val['records'].filter(val => {
          //           if (val.assessment_type == this.apiService.getdataassessed_typeformativeid()) {
          //             val.term = "term " + val.term
          //             this.obj[val.term] = this.obj[val.term] || [];
          //             let changedatedynamic = new Date(val.start_date);
          //             let getcurrentmonth = (changedatedynamic.getMonth())
          //             const getWeekNumOfMonthOfDate = (d) => {
          //               const firstDay = new Date(d.getFullYear(), d.getMonth(), 1).getDay();
          //               return Math.ceil((d.getDate() + (firstDay - 1)) / 7);
          //             }
          //             const weekNumOfDate = getWeekNumOfMonthOfDate(new Date())
          //             this.obj[val.term] = this.obj[val.term] || [];
          //             if (val.week_of_month > weekNumOfDate) {
          //               val.view_status_week = true;
          //             } else {
          //               val.view_status_week = false;
          //             }
          //             this.obj[val.term].push(val);
          //           }
          //         })
          //         this.apiService.getClassRoomDetailsAll({ username: this.username, school_id: this.schoolid, acadamicname: acadamicyear }, this.token_sample).subscribe(async data => {
          //           debugger
          //           if (data['status'] == 200 && data['dataStatus'] == true) {
          //             if (data['records'].academic_year_details.length > 0) {
          //               this.apiService.setacadamic_yearid(data['records'].academic_year_details[0].id)
          //             }
          //             // let getsavedclass = [{"id":1,"class":"1","section":[]},{"id":2,"class":"2","section":[]},{"id":3,"class":"3","section":[{"name":"A","isSelected":true,"id":1},{"name":"B","isSelected":true,"id":2}]}];
          //             // this.savedSubjects = undefined;
          //             let getsavedclass = JSON.parse(data['records'].saved_details[0].class);
          //              this.savedSubjects = JSON.parse(data['records'].saved_details[0].subject);
          //             if (getsavedclass.length > 0 && this.apiService.classes.length > 0) {
          //               let getformate = getsavedclass.map(a => {
          //                 let getfrommasterclass = this.apiService.classes.find(n => n.class == a.class);
          //                 return { class: getfrommasterclass.class, section: a.section.map(t => t.name).join() }
          //               });
          //               for (let data in this.obj) {
          //                 let finalobj = this.obj[data].filter(v => {
          //                   let selectedclass = getformate.find(s => s.class == v.class);
          //                   if (selectedclass != undefined) {
          //                     if (selectedclass.class == v.class) {
          //                       v.section = selectedclass.section;
          //                       return v
          //                     }
          //                   }
          //                 });
          //                 this.obj[data] = finalobj;
          //                 if (this.TermStore != undefined) {
          //                   this.onSelectTerm(this.TermStore);
          //                 }
          //               }
          //             } else {
          //               for (let data in this.obj) {
          //                 this.obj[data] = [];
          //               }
          //             }
          //           } else {
          //             this.alertService.error(data['msg'])
          //           }
          //         });
          //       })
          //     },
          //     (error) => console.error(error)
          //   );
          //   this.viewStatus = true;
          //   this.downloadStateMarkedAttendance();
          // }
          //get School data for BRTE and BEO from API

        }, {
          key: "getSchoolList",
          value: function getSchoolList() {
            var _this2 = this;

            this.ionicstorage.getData('getEetSchools').then(function (dataa) {
              if (dataa.school_id == '') {
                _this2.apiService.eet_school_observation().subscribe(function (dataval) {
                  try {
                    if (Object.keys(dataval.record).length > 0 && dataval.status == 200) {
                      _this2.ionicstorage.insertData_Replace('getEetSchools', dataval.record);
                    } else {
                      if (Object.keys(dataval.record).length === 0) {
                        throw "No data found in this school";
                      } else if (dataval.status !== 200) {
                        throw "Server not found...Try again later";
                      } else if (typeof dataval.record == 'undefined' || typeof dataval.record == null) {
                        throw "Server not found...Try again later";
                      } else {
                        throw "Server not found...Try again later";
                      }
                    }
                  } catch (err) {
                    // if(typeof err == 'undefined'){
                    _this2.apiService.displayToast(err, true);

                    _this2.errorLog(err, {}); // }


                    console.log(err, 'error');
                  }
                }, function (error) {
                  _this2.errorLog(error === null || error === void 0 ? void 0 : error.message, {});

                  _this2.apiService.displayToast(error === null || error === void 0 ? void 0 : error.message, true);
                });
              }
            }, function (error) {
              return console.error(error);
            });
          }
        }, {
          key: "stuListGet",
          value: function stuListGet() {
            var _this3 = this;

            debugger;
            this.finalStuList = [];
            this.overallDupliStuList = [];
            this.finalDupList = [];
            var record = {
              'observation_id': this.observation_id,
              'academic_year': this.assYear,
              'assessment_type': this.assType,
              'school_id': this.schId
            };
            debugger;
            this.apiService.toGetStudentList(record).subscribe(function (dataval) {
              try {
                if (Object.keys(dataval.records).length > 0 && dataval.status == 200) {
                  var studetentTamil = dataval.records.tamil;
                  var studetentMaths = dataval.records.maths;
                  var studetentEnglish = dataval.records.english; // let totalLength = studetentTamil.length + studetentMaths.length + studetentEnglish.length
                  // console.log(totalLength,'aiyooooo raammaaaaa');

                  var bigArrayLength = Math.max(studetentTamil.length, studetentMaths.length, studetentEnglish.length);
                  console.log(bigArrayLength, 'big number'); // API overall student list

                  for (var i = 0; i < bigArrayLength; i++) {
                    _this3.studetnList.push(studetentTamil[i]);

                    _this3.studetnList.push(studetentMaths[i]);

                    _this3.studetnList.push(studetentEnglish[i]);
                  }

                  var studetnList = _this3.studetnList.filter(function (e) {
                    return typeof e !== 'undefined';
                  });

                  console.log(studetnList, 'studetnList');
                  debugger;
                  _this3.finalStuListss = [];

                  if (typeof _this3.finalStuListss['studentlist'] == 'undefined') {
                    _this3.finalStuListss['studentlist'] = {};
                  }

                  _this3.finalStuListss['studentlist'] = studetnList;
                  console.log(_this3.finalStuListss, 'this.finalStuListssthis.finalStuListss');

                  _this3.ionicstorage.insertData_Replace('summativeAsseData', {
                    studentlist: studetnList
                  }); //Duplicate overall student list


                  for (var _i2 = 0; _i2 < studetnList.length; _i2++) {
                    if (studetnList[_i2].assmnt_status !== 'absent' && studetnList[_i2].assmnt_status !== 'Left_school_after_marking_attendance' && studetnList[_i2].assmnt_status !== 'Present_in_school_but_unwell') {
                      _this3.overallDupliStuList.push(studetnList[_i2]);
                    }

                    if (studetnList[_i2].assmnt_status !== 'absent' && studetnList[_i2].assmnt_status !== 'assessed' && studetnList[_i2].assmnt_status !== 'Left_school_after_marking_attendance' && studetnList[_i2].assmnt_status !== 'Present_in_school_but_unwell') {
                      _this3.finalDupList.push(studetnList[_i2]);
                    }
                  }

                  console.log(_this3.overallDupliStuList, 'overall Duplicate student list');
                  console.log(_this3.finalDupList, 'this.finalDupListthis.finalDupList'); //final student list

                  var count = _this3.tltStudentCount;
                  var increcount = 0;

                  for (var _i3 = 0; _i3 < _this3.overallDupliStuList.length; _i3++) {
                    if (_this3.overallDupliStuList[_i3].assmnt_status == null || _this3.overallDupliStuList[_i3].assmnt_status == 'assessed') {
                      if (increcount != count) {
                        for (var j = _i3; j < _i3 + 1; j++) {
                          increcount++;

                          _this3.finalStuList.push(_this3.overallDupliStuList[j]); // delete this.overallDupliStuList[j]

                        }
                      }
                    }
                  }

                  console.log(_this3.finalStuList, 'final list student');
                  console.log(_this3.overallDupliStuList, 'overall Duplicate student list deleted');

                  var assessedFlag = _this3.finalStuList.filter(function (e) {
                    return e.assmnt_status == 'assessed';
                  });

                  console.log(assessedFlag.length, 'flagggggData');

                  _this3.router.navigate(['/tabs'], {
                    queryParams: {
                      'assessedStatus': assessedFlag.length
                    }
                  });

                  var skipStu = _this3.overallDupliStuList.filter(function (e) {
                    return e.id == _this3.skipStudID;
                  });

                  console.log('skipstu', skipStu);

                  _this3.finalStuList.forEach(function (data) {
                    if (data.assmnt_status == null) {
                      data.isAssessed = false;
                      data.isSkipped = false;
                      data.observation_id = _this3.observation_id;
                      return data;
                    } else if (data.assmnt_status == 'assessed') {
                      data.isAssessed = true;
                      data.isSkipped = true;
                      data.observation_id = _this3.observation_id;
                      return data;
                    } else if (data.assmnt_status == 'Absent_today') {
                      data.isAssessed = false;
                      data.isSkipped = true;
                      data.observation_id = _this3.observation_id;
                      return data;
                    } else if (data.assmnt_status == 'Left_school_after_marking_attendance' || data.assmnt_status == 'Present_in_school_but_unwell') {
                      data.isAssessed = false;
                      data.isSkipped = true;
                      data.observation_id = _this3.observation_id;
                      return data;
                    }
                  });

                  console.log(_this3.finalStuList, 'lk9547');
                  _this3.totalStudent = _this3.finalStuList.length;
                  _this3.completedCount = 0;

                  _this3.finalStuList.forEach(function (val) {
                    if (val.assmnt_status == 'assessed') {
                      _this3.completedCount++;
                    }
                  });
                } else {
                  if (Object.keys(dataval.records).length === 0) {
                    throw "No data found in this school";
                  } else if (dataval.status !== 200) {
                    throw "Server not found...Try again later";
                  }
                }
              } catch (err) {
                _this3.errorMsg = err;

                _this3.apiService.displayToast(err, true);

                _this3.errorLog(err, record);
              }
            }, function (error) {
              _this3.errorLog(error === null || error === void 0 ? void 0 : error.message, {});
            });
          }
        }, {
          key: "errorLog",
          value: function errorLog(err, payload) {
            var record = {
              "observation_id": this.observation_id,
              "school_id": this.schId,
              "student_id": "",
              "oberved_date": "",
              "oberved_by": this.username,
              "page": this.scrnNmbr,
              "error": err,
              "payload": JSON.stringify(payload),
              "result": ""
            };
            console.log(record, 'recordrecord');
            this.apiService.eet_error_log(record).subscribe(function (data) {
              try {
                if (data.status == 200) {
                  throw "Data Saved Successfully";
                } else {
                  throw "Server not found";
                }
              } catch (err) {
                // this.apiService.displayToast(err, false);
                console.log('Error log api ' + err);
              }
            });
          }
        }, {
          key: "checkStuStatus",
          value: function checkStuStatus() {}
        }, {
          key: "downloadStateMarkedAttendance",
          value: function downloadStateMarkedAttendance() {
            var _this4 = this;

            var bucketName = "lmes-content";
            var filename = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.SummativeJSONLive;
            var expiry = 1800;
            this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              if (result) {
                _this4.getJsonData(result.url);
              }
            });
          }
        }, {
          key: "getJsonData",
          value: function getJsonData(url) {
            var _this5 = this;

            this.http.get(url).subscribe(function (data) {
              _this5.jsonData = data;
              console.log(_this5.jsonData, 'json data details');
            });
          }
        }, {
          key: "onSelect",
          value: function onSelect(week, id) {
            var _this6 = this;

            this.WeeksStore = {
              value: week
            };
            this.selectedWeekstyle = 'Module ' + id;
            var newweek = week.value.filter(function (val) {
              var currentdateDate = new Date();
              var D_1 = val.start_date.split("-");
              var D_2 = val.end_date.split("-"); // let  D_3 = Date_to_check.split("/");

              var d1 = new Date(D_1[0], parseInt(D_1[1]) - 1, D_1[2]);
              var d2 = new Date(D_2[0], parseInt(D_2[1]) - 1, D_2[2]);
              var d3 = new Date(currentdateDate.getFullYear(), currentdateDate.getMonth(), currentdateDate.getDate());

              if (d3 >= d1 && d3 <= d2) {
                val.view_status = true;
                _this6.viewStatus = true;
                return val;
              } else {
                val.view_status = false;

                if (week.key == _this6.getWeek(new Date())) {
                  _this6.viewStatusforDatestarted = true;
                  _this6.viewStatus = true;
                } else {
                  _this6.viewStatus = false;
                  _this6.viewStatusforDatestarted = false;
                }

                return val;
              }
            });
            this.selectiveWeek = newweek[0];
            this.formativeassessmentdata = this.formativeassessmentdata.filter(function (n) {
              n.start_date = _this6.selectiveWeek.start_date;
              n.end_date = _this6.selectiveWeek.end_date;
              n.view_status = _this6.selectiveWeek.view_status;
              n.view_status_week = _this6.selectiveWeek.view_status_week;
              n.week_of_month = _this6.selectiveWeek.week_of_month;
              n.week_of_year = _this6.selectiveWeek.week_of_year;
              n.term = _this6.selectiveWeek.term;
              n.assessment_type = _this6.selectiveWeek.assessment_type;
              n["class"] = _this6.selectiveWeek["class"];
              return n;
            });
            this.weekbasedData = this.formativeassessmentdata;
          }
        }, {
          key: "onSelectTerm",
          value: function onSelectTerm(selectedvalue) {
            console.log(selectedvalue, "selectedvalue", selectedvalue.value);
          }
        }, {
          key: "getFormativeAssessment",
          value: function getFormativeAssessment(apivalue, classes, subjects, countlist) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this7 = this;

              var filteredarray, apiclass, apisubject, apicalsstype;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    filteredarray = [];

                    if (!(apivalue == null || apivalue == 0 || typeof apivalue == 'string')) {
                      _context2.n = 1;
                      break;
                    }

                    return _context2.a(2, filteredarray);

                  case 1:
                    if (!(apivalue.length > 0)) {
                      _context2.n = 5;
                      break;
                    }

                    if (!(this.isJson(apivalue[0]["class"]) == true && this.isJson(apivalue[0].subject) == true)) {
                      _context2.n = 4;
                      break;
                    }

                    this.shownoclassmsg = true;
                    apiclass = JSON.parse(apivalue[0]["class"]);
                    apisubject = JSON.parse(apivalue[0].subject);
                    apicalsstype = apivalue[0].class_type;
                    _context2.n = 2;
                    return apiclass.filter(function (s) {
                      var findcalss = classes.find(function (n) {
                        return n["class"] == s["class"];
                      });
                      findcalss.section.find(function (n) {
                        s.section.filter(function (val) {
                          if (val.name == n.name) {
                            return n.isSelected = true;
                          }
                        });
                      });
                      var newva = findcalss.section.filter(function (s) {
                        return s.isSelected == true;
                      });
                      apisubject.filter(function (v) {
                        var findsubject = subjects.find(function (l) {
                          return l.id == v;
                        });
                        var obj = {
                          id: findcalss.id,
                          classid: findcalss["class"],
                          name: findcalss.class_id,
                          subject: findsubject.subject,
                          subject_id: findsubject.id,
                          class_type: apicalsstype,
                          color: findcalss.class_id.replace(" ", ""),
                          studentcount: findcalss.students,
                          assessedcount: 0,
                          section: newva.map(function (s) {
                            return s.name;
                          }).join()
                        };

                        if (obj.section != '') {
                          obj.studentcount = _this7.getSectionBasedStudentCount(obj.section, _this7.sectionbasedcountlist, obj.classid);
                        } else {
                          obj.studentcount = obj.studentcount;
                        }

                        filteredarray.push(obj);
                      });
                    });

                  case 2:
                    if (!(countlist.length > 0)) {
                      _context2.n = 3;
                      break;
                    }

                    _context2.n = 3;
                    return filteredarray.filter(function (t) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              if (!(t.section != '')) {
                                _context.n = 2;
                                break;
                              }

                              _context.n = 1;
                              return this.getSectionBasedStudentAssessedCount(t.section, t.name, t.subject, countlist, t.classid);

                            case 1:
                              t.assessedcount = _context.v;
                              _context.n = 4;
                              break;

                            case 2:
                              _context.n = 3;
                              return this.setCount(t.name, t.subject, countlist);

                            case 3:
                              t.assessedcount = _context.v;

                            case 4:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    });

                  case 3:
                    return _context2.a(2, filteredarray);

                  case 4:
                    return _context2.a(2, filteredarray);

                  case 5:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getSectionBasedStudentCount",
          value: function getSectionBasedStudentCount(data, sectiondata, classid) {
            var seperate = data.split(',');
            var scount = 0;

            var _final = seperate.map(function (s) {
              var ss = sectiondata.find(function (n) {
                return n.class_section == s && n.class_studying_id == classid;
              });
              scount = scount + Number(ss.students_count);
            });

            return scount;
          }
        }, {
          key: "getSectionBasedStudentAssessedCount",
          value: function getSectionBasedStudentAssessedCount(sections, name, subject, alldata, classid) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this8 = this;

              var seperate, scount, _final2;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return sections.split(',');

                  case 1:
                    seperate = _context4.v;
                    _context4.n = 2;
                    return alldata.filter(function (d) {
                      return d != undefined;
                    });

                  case 2:
                    alldata = _context4.v;
                    _context4.n = 3;
                    return alldata.filter(function (d) {
                      return d.section != '';
                    });

                  case 3:
                    alldata = _context4.v;
                    scount = 0;
                    _context4.n = 4;
                    return seperate.map(function (s) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                        var ss;
                        return _regenerator().w(function (_context3) {
                          while (1) switch (_context3.n) {
                            case 0:
                              _context3.n = 1;
                              return alldata.find(function (n) {
                                return n.section == s && n.class_studying_id == classid && n.subject == subject;
                              });

                            case 1:
                              ss = _context3.v;

                              if (ss == undefined) {
                                ss = {};
                                ss.count = '0';
                              }

                              scount = scount + Number(ss.count);

                            case 2:
                              return _context3.a(2);
                          }
                        }, _callee3);
                      }));
                    });

                  case 4:
                    _final2 = _context4.v;
                    return _context4.a(2, scount);
                }
              }, _callee4);
            }));
          }
        }, {
          key: "isJson",
          value: function isJson(str) {
            try {
              JSON.parse(str);
            } catch (e) {
              return false;
            }

            return true;
          }
        }, {
          key: "setCount",
          value: function setCount(name, subject, data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var findcount;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return data.find(function (n) {
                      if (n == undefined) {
                        return {
                          count: 0
                        };
                      } else if (n["class"] == name && n.subject == subject) {
                        return n;
                      }
                    });

                  case 1:
                    findcount = _context5.v;

                    if (!(findcount != undefined)) {
                      _context5.n = 2;
                      break;
                    }

                    return _context5.a(2, findcount.count);

                  case 2:
                    return _context5.a(2, 0);

                  case 3:
                    return _context5.a(2);
                }
              }, _callee5);
            }));
          }
        }, {
          key: "onTestBtnClick",
          value: function onTestBtnClick(value) {
            this.selectedTest = value;
          }
        }, {
          key: "Onnextnavigate",
          value: function Onnextnavigate(subject, class_studying, iterate) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var obj, getall, i;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    obj = {
                      "academic_year": this.apiService.getacadamic_yearid(),
                      "assessment_type": this.apiService.getdataassessed_typeformativeid(),
                      "class": class_studying,
                      // "term": data['term'].match(/(\d+)/)[0],
                      // "medium": data['medium'],
                      "subject": subject,
                      "school_id": this.schoolid // "class_sections": data['section']

                    };
                    _context6.n = 1;
                    return this.getQuestionsFromJson(obj.subject, obj["class"]);

                  case 1:
                    getall = _context6.v;
                    //obj.subject, obj.class
                    console.log(obj.subject, obj["class"]);
                    console.log(getall, 'get all questions');

                    for (i = iterate; i < iterate + 1; i++) {
                      if (this.overallDupliStuList[i].assmnt_status == null) {
                        this.overallDupliStuList[i].isAssessed = false;
                        this.overallDupliStuList[i].isSkipped = false, this.overallDupliStuList[i].observation_id = this.observation_id, this.overallDupliStuList[i].skippedReason = '', this.overallDupliStuList[i].questionset = this.questionSet(getall, this.overallDupliStuList[i].medium, this.overallDupliStuList[i].class_studying_id, obj.subject, obj["class"], this.overallDupliStuList[i].baseline_grade, 0); //getall, n.medium, data['class'], obj.subject, obj.class, n.baseline_grade, data['week_of_year']
                      } else if (this.overallDupliStuList[i].assmnt_status == 'assessed') {
                        this.overallDupliStuList[i].isAssessed = true;
                        this.overallDupliStuList[i].isSkipped = false, this.overallDupliStuList[i].observation_id = this.observation_id, this.overallDupliStuList[i].skippedReason = '', this.overallDupliStuList[i].questionset = this.questionSet(getall, this.overallDupliStuList[i].medium, this.overallDupliStuList[i].class_studying_id, obj.subject, obj["class"], this.overallDupliStuList[i].baseline_grade, 0); //getall, n.medium, data['class'], obj.subject, obj.class, n.baseline_grade, data['week_of_year']
                      } else if (this.overallDupliStuList[i].assmnt_status == 'absent' || this.overallDupliStuList[i].assmnt_status == 'long_absent' || this.overallDupliStuList[i].assmnt_status == 'cwsn') {
                        this.overallDupliStuList[i].isAssessed = true;
                        this.overallDupliStuList[i].isSkipped = false, this.overallDupliStuList[i].observation_id = this.observation_id, this.overallDupliStuList[i].skippedReason = '', this.overallDupliStuList[i].questionset = this.questionSet(getall, this.overallDupliStuList[i].medium, this.overallDupliStuList[i].class_studying_id, obj.subject, obj["class"], this.overallDupliStuList[i].baseline_grade, 0); //getall, n.medium, data['class'], obj.subject, obj.class, n.baseline_grade, data['week_of_year']
                      }
                    }

                    debugger;
                    this.ionicstorage.insertData_Replace('summativeAsseData', {
                      studentlist: this.overallDupliStuList
                    });
                    console.log(this.overallDupliStuList, 'final list');

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "questionSet",
          value: function questionSet(data, medium, classdata, subject, classda, grade, weekofmonth) {
            console.log(data, medium, classdata, subject, classda, grade, weekofmonth, 'data, medium, classdata, subject, classda, grade, weekofmonth');
            var another = {};

            if (grade == '1') {
              another = data;
            } else if (grade == '2') {
              if (Object.keys(data).length > 2) {
                another['Mottu'] = data['Mottu'];
                another['Malar'] = data['Malar'];
              } else {
                another['Mottu'] = data['Mottu'];
              }
            } else if (grade == '3') {
              another['Malar'] = data['Malar'];
            }

            var newobj = {};
            var keys = Object.keys(another);
            var nearr = keys.map(function (val) {
              newobj[val] = another[val].filter(function (n) {
                return n.medium_id == medium && n["class"] == classdata;
              });
            });
            return newobj;
          }
        }, {
          key: "getQuestionsFromJson",
          value: function getQuestionsFromJson(subject, studentcalss) {
            if (this.jsonData[subject] != undefined) {
              var subjectbasedQuestions = this.jsonData[subject];
              console.log(subjectbasedQuestions, 'grade ques');
              var size = 1;
              var basedondata = {};

              for (var nameofobj in subjectbasedQuestions) {
                if (size <= studentcalss) {
                  if (nameofobj == '1') {
                    basedondata['Arumbu'] = this.getOnlyQustions(subjectbasedQuestions[nameofobj]);
                  } else if (nameofobj == '2') {
                    basedondata['Mottu'] = this.getOnlyQustions(subjectbasedQuestions[nameofobj]);
                  } else if (nameofobj == '3') {
                    basedondata['Malar'] = this.getOnlyQustions(subjectbasedQuestions[nameofobj]);
                  }

                  size++;
                }
              }

              return basedondata;
            } else {
              return {};
            }
          }
        }, {
          key: "getOnlyQustions",
          value: function getOnlyQustions(objectdata) {
            var newquestionarray = [];

            for (var val in objectdata) {
              newquestionarray.push(objectdata[val]);
            }

            return newquestionarray;
          }
        }, {
          key: "findStudentToBeAssessed",
          value: function findStudentToBeAssessed(id, isSkipped, isAssessed, subject, classid, i) {
            console.log(id, isSkipped, isAssessed, i, 'iddddddddddddddddd');

            if (isSkipped !== true && isAssessed !== true) {
              this.Onnextnavigate(subject, classid, i);
              this.router.navigate(['/tabs/summative-questions', id, subject], {
                queryParams: {
                  schId: this.schId,
                  assYear: this.assYear,
                  assType: this.assType,
                  i: i,
                  observation_id: this.observation_id,
                  udiseCode: this.udiseCode,
                  level: this.level
                }
              });
            } else {
              if (isSkipped == true && isAssessed == true) {
                this.apiService.displayToast("This Students is assessed!", false);
                this.router.navigate(['/tabs/summative-class-selection']);
              } else {
                this.apiService.displayToast("This Students is absent!", false);
                this.router.navigate(['/tabs/summative-class-selection']);
              }
            }
          }
        }, {
          key: "studentlistoverAlert",
          value: function studentlistoverAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this9 = this;

              var alert, _alert;

              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    if (!(this.level == 'L3')) {
                      _context7.n = 3;
                      break;
                    }

                    _context7.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: 'You have done ' + this.completedCount + ' assessments in this school!!!',
                      message: ' Are you sure you dont want to do any more assessments in this school?',
                      buttons: [{
                        text: 'No',
                        cssClass: 'alert-button-cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Yes',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this9.finalSubmit();
                        }
                      }]
                    });

                  case 1:
                    alert = _context7.v;
                    _context7.n = 2;
                    return alert.present();

                  case 2:
                    _context7.n = 5;
                    break;

                  case 3:
                    _context7.n = 4;
                    return this.alertController.create({
                      header: 'Alert',
                      // subHeader: 'Important message',
                      message: 'Assessment for this school has been submitted successfully.',
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler(alertData) {
                          _this9.finalSubmit();
                        }
                      }]
                    });

                  case 4:
                    _alert = _context7.v;
                    _context7.n = 5;
                    return _alert.present();

                  case 5:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit() {
            var _this0 = this;

            debugger;
            this.apiService.initializeNetworkEvents(); // this.studentsList.filter(s => {
            //   console.log(s.id, this.id, 's.id,this.id');
            //   if (s.id == this.id) {
            //     s.isAssessed = true;
            //   }
            // });
            // let seperatestudent = this.studentsList.find(v => v.id == this.id && v.subject_id == this.subId);
            // seperatestudent.academic_id = "1";
            // seperatestudent.teacher_id = this.username;
            // seperatestudent.assessment_type = this.apiService.getdataassessed_typeformativeid();
            // seperatestudent.student_status = seperatestudent.questionset['status'];
            // seperatestudent.status_of_assessed = 'Assessed';
            // if (seperatestudent['questionset']['Arumbu'] != undefined && seperatestudent['questionset']['Arumbu'].length > 0) {
            //   seperatestudent['g1_score'] = seperatestudent['questionset']['Arumbu'].filter(val => val.pass == true).length;
            //   seperatestudent['g1_qa_count'] = seperatestudent['questionset']['Arumbu'].length;
            // }
            // if (seperatestudent['questionset']['Mottu'] != undefined && seperatestudent['questionset']['Mottu'].length > 0) {
            //   seperatestudent['g2_score'] = seperatestudent['questionset']['Mottu'].filter(val => val.pass == true).length;
            //   seperatestudent['g2_qa_count'] = seperatestudent['questionset']['Mottu'].length;
            // }
            // if (seperatestudent['questionset']['Malar'] != undefined && seperatestudent['questionset']['Malar'].length > 0) {
            //   seperatestudent['g3_score'] = seperatestudent['questionset']['Malar'].filter(val => val.pass == true).length;
            //   seperatestudent['g3_qa_count'] = seperatestudent['questionset']['Malar'].length;
            // }

            var seperatestudent = {
              school_status: 'completed',
              school_id: this.schId,
              teacher_id: this.teacher_id,
              udise_code: this.udiseCode,
              observation_id: this.observation_id
            };

            if (this.networkService.getCurrentNetworkStatus() == 0) {
              this.apiService.saveSummativeAssessmentDetails(seperatestudent, this.token).subscribe(function (dataa) {
                try {
                  if (dataa.status == 200 && dataa.dataStatus == true) {
                    debugger;

                    _this0.ionicstorage.getData('getEetSchools').then(function (dataa) {
                      if (dataa != undefined || dataa != null) {
                        var obj = {
                          "school_id": dataa.school_id,
                          "school_name": dataa.school_name,
                          "udise_code": dataa.udise_code
                        };

                        _this0.completedSchool.push(obj);

                        setTimeout(function () {
                          _this0.ionicstorage.insertData_Replace('completedSchool', _this0.completedSchool);

                          console.log(_this0.completedSchool, 'this.completedSchool');
                        }, 200);
                      }
                    }, function (error) {
                      return console.error(error);
                    }); // this.ionicstorage.getData('getEetSchools').then(
                    //   (dataa) => {
                    //     if (dataa != undefined || dataa != null) {
                    //       if(dataa.level == 'L3'){
                    //         let dSchlId = dataa.school_id;
                    //         let dSchlNm = dataa.school_name;
                    //         let dSchlUcod = dataa.udise_code;
                    //         let obj = {
                    //           "school_id":dSchlId,
                    //           "school_name":dSchlNm,
                    //           "udise_code":dSchlUcod
                    //         }
                    //         console.log(dataa.schools)
                    //         let pendingMap = dataa.schools.map(x => x.pending)
                    //         console.log(pendingMap,'pendingMap')
                    //         let clstrSchl = dataa.schools.find(x => x.id == this.clusterId)
                    //         clstrSchl['completed'] = (clstrSchl['completed'] == undefined || clstrSchl['completed'] == null)  ? [] : clstrSchl['completed']
                    //         clstrSchl['completed'].push(obj)
                    //         let removePendList = clstrSchl['pending']
                    //         removePendList.splice(removePendList.findIndex(i => i.school_id === dSchlId), 1)
                    //         clstrSchl['pending'] = removePendList
                    //         dataa.schools_visited = dataa.schools_visited+','+dSchlId
                    //         if(clstrSchl.pending.length == 0){
                    //           clstrSchl.status = 'completed'
                    //         }  
                    //         dataa.observation_status = false
                    //         dataa.completed = false
                    //         dataa.observation_id = ''
                    //         dataa.observation_date = ''
                    //         dataa.school_id = ''
                    //         dataa.school_name = ''
                    //         dataa.udise_code = ''    
                    //         console.log(dataa) 
                    //       }
                    //       else{
                    //         dataa.observation_status = false
                    //         dataa.completed = true
                    //         dataa.observation_id = ''
                    //         dataa.observation_date = ''
                    //         dataa.school_id = ''
                    //         dataa.school_name = ''
                    //         dataa.udise_code = ''
                    //       }
                    //       setTimeout(() => {
                    //         this.ionicstorage.insertData_Replace('getEetSchools', dataa);
                    //         console.log(dataa, 'getEetSchools')
                    //       }, 200);
                    //     }
                    //   },
                    //   (error) => console.error(error)
                    // );


                    _this0.commonAlert('Success', 'Assessment successfully Saved.'); // this.ionicstorage
                    //   .insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectkey: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn, week_of_year: this.weekofyear })
                    // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed !== true && el.isSkipped == false));
                    // if (studentsToBeAssessed.length > 0) {
                    //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                    // } else {
                    //   this.alertService.success("All Students assessed!", false);
                    //   this.router.navigate(['/tabs/summative-student']);
                    // }
                    // this.router.navigate(['/tabs/summative-class-selection'], { queryParams: { schId: this.schId, assYear: this.assYear, assType: this.assType } });

                  } else {
                    throw 'No data found in this student list';
                  }
                } catch (err) {
                  _this0.toast.presentToast(err, 'error');
                }
              });
            } else {
              // call functions on network offline, such as firebase.goOffline()
              // this.apiService.displayToast("Offline, Data stored in local!!", false);
              // this.ionicstorage
              //   .insertData_Replace('summativeAsseData', { studentlist: this.studentsList, classdata: this.class, subject: this.Medium, subjectkey: this.subjectkey, term: this.term, viewassessment: this.viewassessmenbtn, week_of_year: this.weekofyear })
              this.ionicstorage.getData('remaingusersummative').then(function (dataa) {
                var store;

                if (dataa == undefined || dataa == null) {
                  store = [];
                } else {
                  store = dataa.remainingdata;
                }

                store.push(seperatestudent);
                console.log(store, '309823wru832ru');

                _this0.ionicstorage.insertData_Replace('remaingusersummative', {
                  remainingdata: store
                }); // let studentsToBeAssessed = this.studentsList.filter(el => (el.isAssessed !== true && el.isSkipped == false));
                // if (studentsToBeAssessed.length > 0) {
                //   this.router.navigate(['/tabs/summative-questions', studentsToBeAssessed[0].id]);
                // } else {
                //   this.alertService.success("All Students assessed!", false);
                //   // this.apiService.displayToast("All Students assessed!", false)
                //   this.router.navigate(['/tabs/summative-student']);
                // }

              }, function (error) {
                return console.error(error);
              });
              debugger;
              this.ionicstorage.getData('getEetSchools').then(function (dataa) {
                if (dataa != undefined || dataa != null) {
                  if (dataa.level == 'L3') {
                    var dSchlId = dataa.school_id;
                    var dSchlNm = dataa.school_name;
                    var dSchlUcod = dataa.udise_code;
                    var obj = {
                      "school_id": dSchlId,
                      "school_name": dSchlNm,
                      "udise_code": dSchlUcod
                    };
                    console.log(dataa.schools);
                    var pendingMap = dataa.schools.map(function (x) {
                      return x.pending;
                    });
                    console.log(pendingMap, 'pendingMap');
                    var clstrSchl = dataa.schools.find(function (x) {
                      return x.id == _this0.clusterId;
                    });

                    if (typeof clstrSchl != 'undefined') {
                      clstrSchl['completed'] = clstrSchl['completed'] == undefined || clstrSchl['completed'] == null ? [] : clstrSchl['completed'];
                      clstrSchl['completed'].push(obj);
                    }

                    var removePendList = clstrSchl['pending'];

                    if (typeof removePendList != 'undefined') {
                      removePendList.splice(removePendList.findIndex(function (i) {
                        return i.school_id === dSchlId;
                      }), 1);
                      clstrSchl['pending'] = removePendList;
                    }

                    dataa.schools_visited = dataa.schools_visited + ',' + dSchlId;

                    if (clstrSchl.pending.length == 0) {
                      clstrSchl.status = 'completed';
                    }

                    dataa.observation_status = false;
                    dataa.completed = false;
                    dataa.observation_id = '';
                    dataa.observation_date = '';
                    dataa.school_id = '';
                    dataa.school_name = '';
                    dataa.udise_code = '';
                    console.log(dataa);
                  } else {
                    dataa.observation_status = false;
                    dataa.completed = true;
                    dataa.observation_id = '';
                    dataa.observation_date = '';
                    dataa.school_id = '';
                    dataa.school_name = '';
                    dataa.udise_code = '';
                  }

                  setTimeout(function () {
                    _this0.ionicstorage.insertData_Replace('getEetSchools', dataa);

                    console.log(dataa, 'getEetSchools');
                  }, 200);
                }
              }, function (error) {
                return console.error(error);
              });
              this.commonAlert('Assessment Completed Successfully', 'Offline: Data stored in local!!');
            } // this.router.navigate(['/tabs/thankyou'])

          }
        }, {
          key: "commonAlert",
          value: function commonAlert(SubHeader, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this1 = this;

              var alert;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.alertController.create({
                      header: 'Alert',
                      subHeader: SubHeader,
                      message: msg,
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'alert-button-confirm',
                        handler: function handler() {
                          _this1.router.navigate(['/tabs/thankyou']);
                        }
                      }]
                    });

                  case 1:
                    alert = _context8.v;
                    _context8.n = 2;
                    return alert.present();

                  case 2:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
        }]);
      }();

      _SummativeClassSelectionPage.ctorParameters = function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: _services_loader_ion_loader_service__WEBPACK_IMPORTED_MODULE_5__.IonLoaderService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_6__.UploadService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService
        }, {
          type: src_app_services_tnvn_services_common_Provider_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_10__.ToastService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService
        }];
      };

      _SummativeClassSelectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-summative-class-selection',
        template: _raw_loader_summative_class_selection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_summative_class_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SummativeClassSelectionPage);
      /***/
    },

    /***/
    48332:
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.page.scss ***!
      \*******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-secondary) ;\n}\n\nion-title {\n  font-size: 15px;\n}\n\nion-header {\n  background: #27AE60;\n}\n\n.selected {\n  --background: #ffc409;\n  color: white;\n}\n\n.Class1 {\n  --background: #fff;\n  --color:#353fa1;\n}\n\n.Class2 {\n  --background: #b8bef0;\n  --color:#353fa1;\n}\n\n.Class3 {\n  --background: #5c69f3;\n  --color:#fff;\n}\n\n.Class4 {\n  --background: #ded162;\n}\n\n.Class5 {\n  --background: #e8be68;\n}\n\n.Class6 {\n  --background: #80afe8;\n}\n\n.Class7 {\n  --background: #b180e8;\n}\n\n.Class8 {\n  --background: #73b6d1;\n}\n\n.Class9 {\n  --background: #73d1b2;\n}\n\n.Class10 {\n  --background: #b3c969;\n}\n\nion-back-button {\n  color: #fff;\n}\n\n.my_class {\n  --background: #efef5c !important;\n  color: #ffffff;\n}\n\n.datepassed {\n  text-align: center;\n  font-size: 25px;\n  color: red;\n  font-weight: bold;\n}\n\n.datestart {\n  text-align: center;\n  font-size: 25px;\n  color: green;\n  font-weight: bold;\n}\n\n.btn-primary {\n  width: 48%;\n}\n\nion-card {\n  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 15px;\n}\n\n.scrl-tbl {\n  max-height: calc(75%);\n  overflow-y: auto;\n  overflow-x: auto;\n}\n\ntable {\n  text-align: center;\n  width: calc(100% - 0%);\n}\n\ntable tr:first-child {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\nth {\n  background: #f7ecff;\n  font-size: 15px;\n  padding: 10px;\n  color: #333;\n}\n\nth:first-child {\n  text-align: left;\n}\n\n.student-assess-box {\n  width: calc(100% - 10%);\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\ntd {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.17);\n  padding: 5px;\n  vertical-align: top;\n}\n\ntd:first-child {\n  text-align: left;\n}\n\ntd:first-child h6 {\n  text-transform: uppercase;\n  font-size: 10px;\n  letter-spacing: 1.5px;\n  font-weight: 800;\n  color: #8b67b3;\n  margin: 5px 0px 0px;\n}\n\nion-badge {\n  border-radius: 15px;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 5px 10px 4px;\n}\n\n.button-inner {\n  display: flex;\n  position: relative;\n  flex-flow: row nowrap;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hdGl2ZS1jbGFzcy1zZWxlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUNBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtBQU1GOztBQUpBO0VBQ0UscUJBQUE7QUFPRjs7QUFMQTtFQUNFLHFCQUFBO0FBUUY7O0FBTkE7RUFDRSxxQkFBQTtBQVNGOztBQVBBO0VBQ0UscUJBQUE7QUFVRjs7QUFSQTtFQUNFLHFCQUFBO0FBV0Y7O0FBVEE7RUFDRSxXQUFBO0FBWUY7O0FBUkE7RUFDRSxnQ0FBQTtFQUNBLGNBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVkE7RUFDRSxVQUFBO0FBYUY7O0FBWEE7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0FBY0Y7O0FBWEE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFjRjs7QUFaQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFlRjs7QUFiSTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFlTjs7QUFYQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBY0Y7O0FBYkU7RUFDRSxnQkFBQTtBQWVKOztBQVpBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFlRjs7QUFiQTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBZkU7RUFDRSxnQkFBQTtBQWlCSjs7QUFoQkk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBa0JOOztBQWRBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBaUJGOztBQWRBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFpQkEiLCJmaWxlIjoic3VtbWF0aXZlLWNsYXNzLXNlbGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KVxyXG59XHJcbmlvbi10aXRsZXtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaW9uLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiAjMjdBRTYwO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmYzQwOTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5DbGFzczF7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC0tY29sb3I6IzM1M2ZhMTtcclxufVxyXG4uQ2xhc3Mye1xyXG4gIC0tYmFja2dyb3VuZDogI2I4YmVmMDtcclxuICAtLWNvbG9yOiMzNTNmYTE7XHJcbn1cclxuLkNsYXNzM3tcclxuICAtLWJhY2tncm91bmQ6ICM1YzY5ZjM7XHJcbiAgLS1jb2xvcjojZmZmO1xyXG59XHJcbi5DbGFzczR7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZGVkMTYyO1xyXG59XHJcbi5DbGFzczV7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZThiZTY4O1xyXG59XHJcbi5DbGFzczZ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjODBhZmU4O1xyXG59XHJcbi5DbGFzczd7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjYjE4MGU4O1xyXG59XHJcbi5DbGFzczh7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNzNiNmQxO1xyXG59XHJcbi5DbGFzczl7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNzNkMWIyO1xyXG59XHJcbi5DbGFzczEwe1xyXG4gIC0tYmFja2dyb3VuZDogI2IzYzk2OTtcclxufVxyXG5pb24tYmFjay1idXR0b257XHJcbiAgY29sb3I6ICNmZmY7XHJcbn0gXHJcblxyXG5cclxuLm15X2NsYXNze1xyXG4gIC0tYmFja2dyb3VuZDogI2VmZWY1YyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5kYXRlcGFzc2Vke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kYXRlc3RhcnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idG4tcHJpbWFyeXtcclxuICB3aWR0aDogNDglO1xyXG59XHJcbmlvbi1jYXJke1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uc2NybC10Ymx7XHJcbiAgbWF4LWhlaWdodDogY2FsYyg3NSUpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG50YWJsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDAlKTtcclxuICB0cntcclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxudGh7XHJcbiAgYmFja2dyb3VuZDogI2Y3ZWNmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogIzMzMztcclxuICAmOmZpcnN0LWNoaWxke1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuLnN0dWRlbnQtYXNzZXNzLWJveHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTAlKTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG50ZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNyk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgJjpmaXJzdC1jaGlsZHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoNntcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGNvbG9yOiAjOGI2N2IzO1xyXG4gICAgICBtYXJnaW46IDVweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tYmFkZ2V7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDRweDtcclxufVxyXG5cclxuLmJ1dHRvbi1pbm5lciB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG5mbGV4LXNocmluazogMDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnotaW5kZXg6IDE7XHJcbmNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    63158:
    /*!*********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ennum-ezhuthum-truthing/pages/summative-class-selection/summative-class-selection.page.html ***!
      \*********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"tabs/school-observation\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Palli Parvai</ion-title>\r\n    <!-- <span class=\"header-span\" *ngIf=\"emis_usertype == '39' && emis_usertype1 == '1'\">L1 - 4</span>\r\n    <span class=\"header-span\" *ngIf=\"emis_usertype == '6' && emis_usertype1 == '1'\">L2 - 4</span> -->\r\n    <span class=\"header-span\">{{scrnNmbr}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card class=\"card-content\">\r\n    <ion-card-content>\r\n      <div class=\"student-assess-box\">\r\n        <div class=\"note-assess\">Number of students assessed</div>\r\n        <div class=\"note-assess\"><span style=\"font-size: 25px\">{{completedCount}}</span>\r\n          of {{tltStudentCount}} assessed</div>\r\n        <progress style=\"width: 100%\" max=\"{{tltStudentCount}}\" value=\"{{completedCount}}\"></progress>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"card-content scrl-tbl\">\r\n    <table>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Class</th>\r\n        <th>Subject</th>\r\n        <th>Status</th>\r\n      </tr>\r\n      <ng-container *ngIf=\"finalStuList\">\r\n        <tr *ngFor=\"let item of finalStuList let i =index\" (click)=\"findStudentToBeAssessed(item.id, item.isSkipped, item.isAssessed,item.subject_id, item.class_studying_id,i)\">\r\n          <td>\r\n            {{item.name}}\r\n            <!-- <h6>{{item.baseline_grade == '1' ? 'ARUMBU' : item.baseline_grade == '2' ? 'MOTTU' : 'MALAR'}}</h6> -->\r\n          </td>\r\n          <td>{{item.class_studying_id}} - {{item.student_class_section}}</td>\r\n          <td>{{item.subject}}</td>\r\n          <td><ion-badge [color]=\"item.assmnt_status == 'assessed' ? 'success' : item.assmnt_status == 'absent' ? 'warning' : 'danger'\">{{item.assmnt_status?item.assmnt_status:'Not assessed'}}</ion-badge></td>\r\n        </tr>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!finalStuList\">\r\n        <tr>\r\n          <td colspan=\"4\" style=\"text-align:center;\">Please close the app and login again or Please refresh the app</td>\r\n        </tr>\r\n      </ng-container>\r\n    </table>\r\n    <h5 style=\"padding:10px;text-align:center;\">{{this.errorMsg}}</h5>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer collapse=\"fade\" *ngIf=\"finalStuListss != null\">\r\n  <ion-toolbar class=\"ion-text-center\" style=\"--background: white !important;\">\r\n    <ion-grid>\r\n      <ion-row style=\"justify-content: space-around;\">\r\n        <!-- <ion-col *ngIf=\"groupingStatus != 'pending'\">\r\n          <ion-button (click)=\"generatePdf()\" class=\"btn-submit\" color=\"secondary\" expand=\"block\">\r\n            PDF</ion-button>\r\n        </ion-col> -->\r\n          <!-- <ion-button (click)=\"findStudentToBeAssessed()\" class=\"btn-primary\" color=\"success\"><span style=\"color:#fff;\">START ASSESSMENT</span></ion-button> -->\r\n          <ion-button (click)=\"studentlistoverAlert()\" [disabled]=\"overallsubmit\" class=\"btn-primary\"><span style=\"color:#fff;\">Complete Visit</span></ion-button>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_ennum-ezhuthum-truthing_pages_summative-class-selection_summative-class-selecti-81fc52-es5.js.map