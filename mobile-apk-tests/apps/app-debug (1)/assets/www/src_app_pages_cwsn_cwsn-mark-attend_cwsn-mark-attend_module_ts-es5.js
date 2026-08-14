(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_cwsn_cwsn-mark-attend_cwsn-mark-attend_module_ts"], {
    /***/
    50849:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-mark-attend/cwsn-mark-attend-routing.module.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnMarkAttendPageRoutingModule": function CwsnMarkAttendPageRoutingModule() {
          return (
            /* binding */
            _CwsnMarkAttendPageRoutingModule
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


      var _cwsn_mark_attend_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-mark-attend.page */
      6260);

      var routes = [{
        path: '',
        component: _cwsn_mark_attend_page__WEBPACK_IMPORTED_MODULE_0__.CwsnMarkAttendPage
      }];

      var _CwsnMarkAttendPageRoutingModule = /*#__PURE__*/_createClass(function CwsnMarkAttendPageRoutingModule() {
        _classCallCheck(this, CwsnMarkAttendPageRoutingModule);
      });

      _CwsnMarkAttendPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CwsnMarkAttendPageRoutingModule);
      /***/
    },

    /***/
    21925:
    /*!************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-mark-attend/cwsn-mark-attend.module.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnMarkAttendPageModule": function CwsnMarkAttendPageModule() {
          return (
            /* binding */
            _CwsnMarkAttendPageModule
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


      var _cwsn_mark_attend_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cwsn-mark-attend-routing.module */
      50849);
      /* harmony import */


      var _cwsn_mark_attend_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-mark-attend.page */
      6260);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _CwsnMarkAttendPageModule = /*#__PURE__*/_createClass(function CwsnMarkAttendPageModule() {
        _classCallCheck(this, CwsnMarkAttendPageModule);
      });

      _CwsnMarkAttendPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _cwsn_mark_attend_routing_module__WEBPACK_IMPORTED_MODULE_0__.CwsnMarkAttendPageRoutingModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_cwsn_mark_attend_page__WEBPACK_IMPORTED_MODULE_1__.CwsnMarkAttendPage]
      })], _CwsnMarkAttendPageModule);
      /***/
    },

    /***/
    6260:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-mark-attend/cwsn-mark-attend.page.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CwsnMarkAttendPage": function CwsnMarkAttendPage() {
          return (
            /* binding */
            _CwsnMarkAttendPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_cwsn_mark_attend_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cwsn-mark-attend.page.html */
      72156);
      /* harmony import */


      var _cwsn_mark_attend_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cwsn-mark-attend.page.scss */
      52474);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _cwsn_attend_filter_cwsn_attend_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../cwsn-attend-filter/cwsn-attend-filter.page */
      80795);
      /* harmony import */


      var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/json.service */
      77232);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _CwsnMarkAttendPage = /*#__PURE__*/function () {
        function CwsnMarkAttendPage(router, networkService, userSessionService, ionicstorage, cWSNService, jsonService, alertService, datePipe, alertCtrl, cdref, geolocation, modalCtrl, http, userService) {
          _classCallCheck(this, CwsnMarkAttendPage);

          this.router = router;
          this.networkService = networkService;
          this.userSessionService = userSessionService;
          this.ionicstorage = ionicstorage;
          this.cWSNService = cWSNService;
          this.jsonService = jsonService;
          this.alertService = alertService;
          this.datePipe = datePipe;
          this.alertCtrl = alertCtrl;
          this.cdref = cdref;
          this.geolocation = geolocation;
          this.modalCtrl = modalCtrl;
          this.http = http;
          this.userService = userService;
          this.vistLts = [];
          this.schList = [];
          this.schListData = [];
          this.centerList = [];
          this.submitted = false;
          this.userLantLng = {};
          this.currKm = '';
          this.currDate = '';
          this.userName = '';
          this.block_id = '';
          this.Currtype = '';
          this.currTab = 1;
          this.attenHistory = [];
          this.filteredAttenHistory = [];
          this.studentList = [];
          this.isDisable = false;
          this.centerListData = [];
        }

        return _createClass(CwsnMarkAttendPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
            this.vistLts = [{
              label: "School",
              value: 1
            }, {
              label: "IE Center",
              value: 2
            }, {
              label: "Home Based",
              value: 3
            }, {
              label: "Others",
              value: 4
            }, {
              label: "Leave",
              value: 5
            }];
            this.userName = this.userSessionService.emis_username();
            this.block_id = this.userSessionService.BlkdId();
            this.Currtype = this.userSessionService.emis_usertype1() == 2 ? 1 : 2;
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.markForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
              atten_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
              school_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              student_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              center_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              location_verify: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              lng: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null),
              user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', null)
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.currNetWrkSts = this.networkService.getCurrentNetworkStatus();
            this.getSchIElist();
          }
        }, {
          key: "getStudentList",
          value: function getStudentList(schoolId) {
            var _this = this;

            this.studentList = [];
            this.jsonService.studentList(schoolId).subscribe(function (res) {
              if (res && res != null) {
                var data = res[0].studentlist.filter(function (dd) {
                  return dd.cwsn_yn == 'Yes';
                });
                console.log(data, "studentList", _this.schListstuall, "this.schListstuall");
                var filteredStudents = data.filter(function (apiStudent) {
                  return _this.schListstuall.some(function (jsonStudent) {
                    return jsonStudent.user_id == apiStudent.user_id;
                  });
                });
                console.log(filteredStudents, "filteredStudents", _this.attenHistory);
                _this.studentList = filteredStudents;

                for (var i = 0; i < _this.studentList.length; i++) {
                  var element = _this.studentList[i];

                  if (element.name) {
                    element.name = element.name + " ( " + element.user_id + " ) ( " + element.class_studying_id + " - " + element.class_section + " )";
                  }
                }

                var today = new Date().toISOString().split('T')[0];
                _this.studentList = _this.studentList.filter(function (student) {
                  return (//   !this.attenHistory.some(history => history.student_id == student.user_id && this.datePipe.transform(this.currDate, 'yyyy-MM-dd') == today)
                    // ) .sort((a, b) => {
                    !_this.attenHistory.some(function (history) {
                      return history.student_id == student.user_id && new Date(history.atten_date).toISOString().split('T')[0] == today;
                    })
                  );
                }).sort(function (a, b) {
                  console.log(a, b, "sorting");
                  var classCompare = a.class_studying_id - b.class_studying_id;
                  if (classCompare !== 0) return classCompare;
                  var sectionCompare = (a.class_section || '').localeCompare(b.class_section || '');
                  if (sectionCompare !== 0) return sectionCompare;
                  return a.name.localeCompare(b.name);
                }).map(function (student, index) {
                  return Object.assign(Object.assign({}, student), {
                    name: "".concat(index + 1, ". ").concat(student.name)
                  });
                });
              }
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/tabs/cwsn/dashboard"]);
          }
        }, {
          key: "getSchIElist",
          value: function getSchIElist() {
            var _this2 = this;

            this.schList = [];
            this.centerList = [];
            this.schListall = [];
            this.cWSNService.getIeAndSchList(this.userName, this.Currtype, this.block_id).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.schList = res.schList;
                _this2.centerList = res.centerList;
                _this2.schListData = res.schList;
                _this2.centerListData = res.centerList;
              }

              _this2.getAttendanceStatus();
            }, function (error) {
              _this2.alertService.warning("unable to fetch details");
            });
            this.spledutherachk = '';

            if (this.currNetWrkSts == 0) {
              this.cWSNService.FindSplEdu_Therpst(this.userName).subscribe(function (data) {
                _this2.spledutherachk = data.result;

                _this2.ionicstorage.insertData_Replace('spleduTherapist', data.result);

                if (_this2.spledutherachk == 2) {
                  _this2.homeBasedjson();
                }

                if (_this2.spledutherachk == 1) {
                  _this2.getBlockDetails();
                }
              });
            } else {
              this.ionicstorage.getData('spleduTherapist').then(function (data) {
                if (data) {
                  _this2.spledutherachk = data;

                  if (_this2.spledutherachk == 2) {
                    _this2.homeBasedjson();
                  }

                  if (_this2.spledutherachk == 1) {
                    _this2.getBlockDetails();
                  }
                }
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "homeBasedjson",
          value: function homeBasedjson() {
            var _this3 = this;

            if (this.currNetWrkSts == 0) {
              this.schoolTypeall = [];
              var schemeJson = 'https://d1wpyxz35bzzz4.cloudfront.net/Homebased_ie_studends_list.json';
              this.http.get(schemeJson).subscribe(function (data) {
                _this3.schoolTypeall = data.Homebased_ie_studends_list; // this.schtype();

                if (_this3.schoolTypeall) {
                  _this3.schListall = [];
                  _this3.schListstuall = [];

                  for (var i = 0; i < _this3.schoolTypeall.length; i++) {
                    if (_this3.schoolTypeall[i].teacher_id == _this3.userName) {
                      _this3.schListall.push(_this3.schoolTypeall[i]);

                      _this3.schListstuall.push(_this3.schoolTypeall[i]);
                    }
                  }

                  if (_this3.schListall.length > 0) {
                    _this3.schListall = Array.from(new Map(_this3.schListall.map(function (s) {
                      return [s.school_id, s];
                    })).values());

                    _this3.schListall.forEach(function (element, x) {
                      _this3.schListall[x].school_name = "".concat(x + 1, ". ").concat(element.school_name, " ( ").concat(element.udise_code, " )");
                    });

                    console.log(_this3.schListall, "susus");

                    _this3.ionicstorage.insertData_Replace('sclType', _this3.schListall); // this.schtype()

                  }
                }
              });
            } else {
              this.ionicstorage.getData('sclType').then(function (dataa1) {
                if (dataa1) {
                  _this3.schListall = dataa1;
                  console.log(_this3.schListall, "susus1"); // this.schtype()
                }
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "therapistjson",
          value: function therapistjson() {
            var _this4 = this;

            if (this.currNetWrkSts == 0) {
              this.schoolTypeall = [];
              var schemeJson = 'https://d1wpyxz35bzzz4.cloudfront.net/therapist_home_based_stud_list_json.json  ';
              this.http.get(schemeJson).subscribe(function (data) {
                _this4.schoolTypeall = data.therapist_home_based_stud_list; // this.schtype();

                if (_this4.schoolTypeall) {
                  _this4.schListall = [];
                  _this4.schListstuall = [];

                  for (var i = 0; i < _this4.schoolTypeall.length; i++) {
                    if (_this4.schoolTypeall[i].block_id == _this4.block_id) {
                      _this4.schListall.push(_this4.schoolTypeall[i]);

                      _this4.schListstuall.push(_this4.schoolTypeall[i]);
                    }
                  }

                  if (_this4.schListall.length > 0) {
                    _this4.schListall = Array.from(new Map(_this4.schListall.map(function (s) {
                      return [s.school_id, s];
                    })).values());

                    _this4.schListall.forEach(function (element, x) {
                      _this4.schListall[x].school_name = "".concat(x + 1, ". ").concat(element.school_name, " ( ").concat(element.udise_code, " )");
                    });

                    _this4.ionicstorage.insertData_Replace('sclType', _this4.schListall); // this.schtype()

                  }
                }
              });
            } else {
              this.ionicstorage.getData('sclType').then(function (dataa1) {
                if (dataa1) {
                  _this4.schListall = dataa1; // this.schtype()
                }
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "getBlockDetails",
          value: function getBlockDetails() {
            var _this5 = this;

            if (this.currNetWrkSts == 0) {
              var getOoscUserDetails = [];
              this.userService.getOoscUserDetails(this.userName).subscribe(function (res) {
                if (res.dataStatus == true) {
                  getOoscUserDetails = res.result;

                  if (getOoscUserDetails.length > 0) {
                    _this5.block_id = getOoscUserDetails[0].TeacherBlockId;

                    _this5.ionicstorage.insertData_Replace('blkId', _this5.block_id);

                    _this5.therapistjson();
                  }
                } else {
                  _this5.alertService.error("Something went wrong");
                }
              });
            } else {
              this.ionicstorage.getData('blkId').then(function (dataa1) {
                if (dataa1) {
                  _this5.block_id = dataa1;

                  _this5.therapistjson();
                }
              }, function (error) {
                return console.error(error);
              });
            }
          }
        }, {
          key: "getAttendanceStatus",
          value: function getAttendanceStatus() {
            var _this6 = this;

            this.attenHistory = [];
            this.cWSNService.getCwsnMarkAtten(this.userName).subscribe(function (res) {
              _this6.currDate = res.currDate;
              _this6.attenHistory = res.result ? res.result : [];
              var today = new Date().toISOString().split('T')[0];

              if (res.dataStatus) {
                _this6.attenHistory = res.result;

                _this6.attenHistory.forEach(function (att) {
                  if (att.atten_type == 'School') {
                    var schData = _this6.schList.find(function (sc) {
                      return sc.school_id == att.school_id;
                    });

                    if (schData && schData != undefined && schData != null && schData != '') {
                      att.name = schData.school_name;
                    }
                  } else if (att.atten_type == 'IE Center') {
                    var _schData = _this6.centerList.find(function (sc) {
                      return sc.center_id == att.center_id;
                    });

                    if (_schData && _schData != undefined && _schData != null && _schData != '') {
                      att.name = _schData.user_id;
                    }
                  }
                });

                _this6.filteredAttenHistory = _toConsumableArray(_this6.attenHistory);
                _this6.centerListData = _this6.centerList.filter(function (school) {
                  return !_this6.attenHistory.some(function (history) {
                    return history.center_id === school.center_id && new Date(history.atten_date).toISOString().split('T')[0] === today;
                  });
                }).map(function (school, index) {
                  return Object.assign(Object.assign({}, school), {
                    name: "".concat(index + 1, ". ").concat(school.user_id)
                  });
                });

                var leaveType = _this6.attenHistory.filter(function (dd) {
                  return _this6.datePipe.transform(dd.atten_date, 'yyyy-MM-dd') == _this6.datePipe.transform(res.currDate, 'yyyy-MM-dd') && dd.atten_type == 'Leave';
                });

                if (leaveType.length > 0) {
                  _this6.isDisable = true;
                } else {
                  if (today == _this6.datePipe.transform(res.currDate, 'yyyy-MM-dd')) {
                    _this6.isDisable = false;
                  } else {
                    _this6.isDisable = true;
                  }
                }

                _this6.cdref.detectChanges();
              }

              _this6.schListData = _this6.schList.filter(function (school) {
                return !_this6.attenHistory.some(function (history) {
                  return history.school_id === school.school_id && new Date(history.atten_date).toISOString().split('T')[0] === today;
                });
              }).map(function (school, index) {
                return Object.assign({}, school);
              }); // school_name: `${index + 1}. ${school.school_name}`

              _this6.schListData.sort(function (a, b) {
                return a.school_name.localeCompare(b.school_name);
              });

              _this6.schListData = _this6.schListData.filter(function (sc, idx) {
                sc.school_name = "".concat(idx + 1, ". ").concat(sc.school_name);
                return sc.school_name;
              });
            }, function (error) {
              _this6.alertService.warning("unable to fetch attendance details");
            });
          }
        }, {
          key: "compareLatLng",
          value: function compareLatLng(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.userLantLng = {};
                    _context.n = 1;
                    return this.getUserGetLatLng();

                  case 1:
                    this.userLantLng = _context.v;
                    this.currKm = (this.getDistanceFromLatLonInKm(this.userLantLng.latitude, this.userLantLng.longitude, data.latitude, data.longitude) * 100 / 100).toFixed(3);
                    console.log("Total KM", this.currKm);

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getUserGetLatLng",
          value: function getUserGetLatLng() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this7 = this;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.geolocation.getCurrentPosition({
                      enableHighAccuracy: true,
                      timeout: 10000,
                      maximumAge: 0
                    }).then(function (resp) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              return _context2.a(2, resp.coords);
                          }
                        }, _callee2);
                      }));
                    })["catch"](function (error) {
                      return {};
                    });

                  case 1:
                    return _context3.a(2, _context3.v);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDistanceFromLatLonInKm",
          value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            var R = 6371; // Radius of the earth in kilometers

            var dLat = this.deg2rad(lat2 - lat1); // deg2rad below

            var dLon = this.deg2rad(lon2 - lon1);
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c; // Distance in KM

            return d;
          }
        }, {
          key: "deg2rad",
          value: function deg2rad(deg) {
            return deg * (Math.PI / 180);
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit() {
            this.submitted = true; // if (this.currKm <= 1) {

            if (this.markForm.valid) {
              this.submitted = false;
              this.postAttendance();
            } else {
              this.alertService.warning("Form is invalid");
            } // } else {
            //   this.alertService.warning("You are too far from this school / center");
            // }

          }
        }, {
          key: "cenOrSchChanges",
          value: function cenOrSchChanges(type, field) {
            this.currKm = '';
            var currFVal = this.markForm.get(field).value;
            this.compareLatLng(Object.assign({}, currFVal));

            if (type == 1 && this.markForm.value.atten_type == 3) {
              this.resetIndividualDetails(['student_id'], this.markForm);
              this.getStudentList(currFVal.school_id);
            }
          }
        }, {
          key: "resetIndividualDetails",
          value: function resetIndividualDetails() {
            var resetFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var form = arguments.length > 1 ? arguments[1] : undefined;

            for (var i = 0; i < resetFields.length; i++) {
              form.controls[resetFields[i]].reset();
              form.controls[resetFields[i]].setValue('');
              form.controls[resetFields[i]].setValidators(null);
              form.controls[resetFields[i]].updateValueAndValidity();
            }
          }
        }, {
          key: "setValidationReq",
          value: function setValidationReq() {
            var resetFields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var form = arguments.length > 1 ? arguments[1] : undefined;

            for (var i = 0; i < resetFields.length; i++) {
              form.controls[resetFields[i]].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
              form.controls[resetFields[i]].updateValueAndValidity();
            }
          }
        }, {
          key: "clearValidators",
          value: function clearValidators() {
            var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var form = arguments.length > 1 ? arguments[1] : undefined;

            var _iterator = _createForOfIteratorHelper(fields),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var field = _step.value;
                var control = form.controls[field];
                control.clearValidators();
                control.updateValueAndValidity();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "visitChanges",
          value: function visitChanges(val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var allFields;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.currKm = '';
                    allFields = ['school_id', 'center_id', 'remarks', 'location_verify', 'lat', 'lng', 'student_id']; // Clear all validators and reset form fields

                    this.resetIndividualDetails(allFields, this.markForm);
                    this.clearValidators(allFields, this.markForm); // Set validators based on selected value

                    if (val == 1) {
                      this.setValidationReq(['school_id'], this.markForm);
                    } else if (val == 2) {
                      this.setValidationReq(['center_id'], this.markForm);
                    } else if (val == 3) {
                      this.setValidationReq(['school_id', 'student_id'], this.markForm);
                    } else if (val == 4) {
                      this.setValidationReq(['remarks'], this.markForm);
                    } // Get user's lat/lng after form adjustment


                    _context4.n = 1;
                    return this.getUserGetLatLng();

                  case 1:
                    this.userLantLng = _context4.v;

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "postAttendance",
          value: function postAttendance() {
            var _this8 = this;

            var formVals = Object.assign({}, this.markForm.value);
            console.log(formVals, "formVals");
            var records;
            var data = [];

            if (this.markForm.value.atten_type != 5) {
              if (this.markForm.value.atten_type == 1) {
                var schoolList = Array.isArray(formVals.school_id) ? formVals.school_id : [formVals.school_id]; // wrap single object as array

                for (var i = 0; i < schoolList.length; i++) {
                  var element = schoolList[i];
                  console.log(element, "element");

                  if (element.school_id) {
                    var params = {
                      id: '',
                      user_id: this.userName,
                      atten_date: this.currDate,
                      atten_type: formVals.atten_type,
                      school_id: element.school_id,
                      center_id: '',
                      student_id: '',
                      remarks: formVals.remarks,
                      location_verify: this.currKm <= 1 ? 1 : 2,
                      lat: this.userLantLng.latitude,
                      lng: this.userLantLng.longitude
                    };
                    data.push(params);
                  }

                  records = {
                    records: data,
                    type: 1
                  };
                }

                ;
              } else if (this.markForm.value.atten_type == 3) {
                var studentList = Array.isArray(formVals.student_id) ? formVals.student_id : [formVals.student_id]; // wrap single object as array

                for (var _i = 0; _i < studentList.length; _i++) {
                  var _element = studentList[_i];

                  if (_element.user_id) {
                    var _params = {
                      id: '',
                      user_id: this.userName,
                      atten_date: this.currDate,
                      atten_type: formVals.atten_type,
                      school_id: formVals.school_id.school_id,
                      center_id: '',
                      student_id: _element.user_id,
                      remarks: formVals.remarks,
                      location_verify: this.currKm <= 1 ? 1 : 2,
                      lat: this.userLantLng.latitude,
                      lng: this.userLantLng.longitude
                    };
                    data.push(_params);
                  }

                  records = {
                    records: data,
                    type: 2
                  };
                }

                ;
              } else {
                records = {
                  "records": {
                    id: '',
                    user_id: this.userName,
                    atten_date: this.currDate,
                    atten_type: formVals.atten_type,
                    school_id: formVals.school_id ? formVals.school_id.school_id : '',
                    center_id: formVals.center_id ? formVals.center_id.center_id : '',
                    student_id: '',
                    remarks: formVals.remarks,
                    location_verify: this.currKm <= 1 ? 1 : 2,
                    lat: this.userLantLng.latitude,
                    lng: this.userLantLng.longitude
                  },
                  "type": 3
                };
              }

              this.cWSNService.cwsnMarkAttenCud(records).subscribe(function (res) {
                if (res.dataStatus) {
                  localStorage.setItem('isCwsnAttenMarked', '1');

                  _this8.alertService.success("Attendance marked successfully");

                  _this8.currKm = '';

                  _this8.resetIndividualDetails(['atten_type', 'school_id', 'center_id', 'remarks', 'location_verify', 'lat', 'lng'], _this8.markForm);

                  _this8.getAttendanceStatus();

                  _this8.initialValidator();
                } else {
                  _this8.alertService.warning(res.message);
                }
              }, function (error) {
                _this8.alertService.error("Unable to mark attendance");
              });
            } else {
              this.leaveApproval();
            }
          }
        }, {
          key: "cusTabChange",
          value: function cusTabChange(val) {
            this.currTab = val;
            this.attenHistory = this.filteredAttenHistory;
          }
        }, {
          key: "filterAttenHistory",
          value: function filterAttenHistory(data) {
            var text = data.toLowerCase();
            this.attenHistory = this.filteredAttenHistory.filter(function (item) {
              var _a, _b, _c;

              return ((_a = item.school_id) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(text)) || ((_b = item.name) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes(text)) || ((_c = item.atten_type) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(text));
            });
          }
        }, {
          key: "deleteAttendance",
          value: function deleteAttendance(data, index) {
            this.isDeletePopup();
            this.currentData = data;
          }
        }, {
          key: "onRemove",
          value: function onRemove(remarks) {
            var _this9 = this;

            var records = {
              records: {
                id: this.currentData.id,
                user_id: this.currentData.user_id,
                remarks: remarks
              }
            };
            this.cWSNService.CwsnMarkAttendRemove(records).subscribe(function (res) {
              if (res.dataStatus) {
                _this9.alertService.success(res.message);

                _this9.getAttendanceStatus();

                _this9.initialValidator();
              } else {
                _this9.alertService.error(res.message);
              }
            });
          }
        }, {
          key: "isDeletePopup",
          value: function isDeletePopup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this0 = this;

              var alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.alertCtrl.create({
                      header: 'Delete Record',
                      subHeader: 'Enter Remarks',
                      cssClass: 'alert-header-red',
                      inputs: [{
                        name: 'remarks',
                        type: 'text',
                        placeholder: 'Enter reason'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }, {
                        text: 'Delete',
                        role: 'confirm',
                        handler: function handler(data) {
                          _this0.onRemove(data.remarks);
                        }
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
          key: "getCalender",
          value: function getCalender() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var modal;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    _context6.n = 1;
                    return this.modalCtrl.create({
                      component: _cwsn_attend_filter_cwsn_attend_filter_page__WEBPACK_IMPORTED_MODULE_6__.CwsnAttendFilterPage // cssClass: 'view-image-modal'

                    });

                  case 1:
                    modal = _context6.v;
                    _context6.n = 2;
                    return modal.present();

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return item.id || index;
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.currTab = 1;
            this.initialValidator();
          }
        }, {
          key: "leaveApproval",
          value: function leaveApproval() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this1 = this;

              var alert;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    _context7.n = 1;
                    return this.alertCtrl.create({
                      header: 'Leave Confirmation',
                      subHeader: 'Note :',
                      message: 'You have selected Leave for today. Please note that you will not be able to mark or update any action plans for today once leave is confirmed.',
                      cssClass: 'alert-header-red',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }, {
                        text: 'Submit',
                        role: 'confirm',
                        handler: function handler(data) {
                          _this1.onApproval();
                        }
                      }]
                    });

                  case 1:
                    alert = _context7.v;
                    _context7.n = 2;
                    return alert.present();

                  case 2:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "onApproval",
          value: function onApproval() {
            var _this10 = this;

            var formVals = Object.assign({}, this.markForm.value);
            var records = {
              "records": {
                id: '',
                user_id: this.userName,
                atten_date: this.currDate,
                atten_type: formVals.atten_type,
                school_id: '',
                center_id: '',
                student_id: '',
                remarks: formVals.remarks,
                location_verify: this.currKm <= 1 ? 1 : 2,
                lat: this.userLantLng.latitude,
                lng: this.userLantLng.longitude
              },
              "type": 3
            };
            this.cWSNService.cwsnMarkAttenCud(records).subscribe(function (res) {
              if (res.dataStatus) {
                localStorage.setItem('isCwsnAttenMarked', '1');

                _this10.alertService.success("Attendance marked successfully");

                _this10.currKm = '';

                _this10.resetIndividualDetails(['atten_type', 'school_id', 'center_id', 'remarks', 'location_verify', 'lat', 'lng'], _this10.markForm);

                _this10.getAttendanceStatus();

                _this10.initialValidator();
              } else {
                _this10.alertService.warning(res.message);
              }
            }, function (error) {
              _this10.alertService.error("Unable to mark attendance");
            });
          }
        }]);
      }();

      _CwsnMarkAttendPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_8__.NetworkService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_10__.IonicStorageService
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_3__.CWSNService
        }, {
          type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_7__.JsonService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService
        }];
      };

      _CwsnMarkAttendPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-cwsn-mark-attend',
        template: _raw_loader_cwsn_mark_attend_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cwsn_mark_attend_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CwsnMarkAttendPage);
      /***/
    },

    /***/
    52474:
    /*!************************************************************************!*\
      !*** ./src/app/pages/cwsn/cwsn-mark-attend/cwsn-mark-attend.page.scss ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cusDrp {\n  border: 1px solid var(--text-color-black);\n  border-radius: 10px;\n  margin-top: 5px;\n  padding: 10px;\n}\n\n.noMar {\n  margin: 0;\n}\n\n.searchBox {\n  border: 1px solid;\n  padding: 0px 12px !important;\n  border-radius: 5px;\n  margin: 5px 15px;\n}\n\n.mandatory::after {\n  content: \" *\";\n  color: red;\n}\n\n.Custabs {\n  display: flex;\n  overflow-x: auto;\n  border-bottom: 2px solid #ccc;\n}\n\n.custab {\n  flex: 1;\n  padding: 15px;\n  text-align: center;\n  cursor: pointer;\n  background-color: #f2f2f2;\n  border-bottom: 2px solid transparent;\n}\n\n.custab.active {\n  border-bottom: 2px solid var(--primary-color);\n  background-color: white;\n}\n\n.cuscard {\n  background: white;\n  margin: 20px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  position: relative;\n}\n\n.m0 {\n  margin: 0;\n}\n\n.delete-btn {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  color: red;\n  cursor: pointer;\n}\n\n.timeline-container {\n  position: relative;\n  padding-left: 25px;\n}\n\n.timeline-item {\n  position: relative;\n  border-left: 2px solid var(--primary-color);\n  padding-left: 20px;\n  padding-bottom: 15px;\n  /* instead of margin-bottom on .timeline-content */\n  margin: 0;\n  background: #fff;\n  /* set background here instead of timeline-content */\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.timeline-marker {\n  position: absolute;\n  left: -12px;\n  top: 12px;\n  background: var(--primary-color);\n  color: #fff;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 25px;\n  font-weight: bold;\n  z-index: 1;\n}\n\n.timeline-content {\n  background: #f4f4f4;\n  /* White background for contrast */\n  padding: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN3c24tbWFyay1hdHRlbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFHQTtFQUNJLDZDQUFBO0VBRUEsdUJBQUE7QUFESjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLFNBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQXNCLGtEQUFBO0VBQ3RCLFNBQUE7RUFDQSxnQkFBQTtFQUFrQixvREFBQTtFQUNsQix3Q0FBQTtBQUFGOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0UsbUJBQUE7RUFBcUIsa0NBQUE7RUFDckIsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJjd3NuLW1hcmstYXR0ZW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXNEcnAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvci1ibGFjayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm5vTWFyIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNlYXJjaEJveHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMHB4IDEycHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5tYW5kYXRvcnk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiICpcIjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcblxyXG4uQ3VzdGFicyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uY3VzdGFiIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmN1c3RhYi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uY3VzY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm0wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aW1lbGluZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZS1pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7IC8qIGluc3RlYWQgb2YgbWFyZ2luLWJvdHRvbSBvbiAudGltZWxpbmUtY29udGVudCAqL1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmOyAvKiBzZXQgYmFja2dyb3VuZCBoZXJlIGluc3RlYWQgb2YgdGltZWxpbmUtY29udGVudCAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50aW1lbGluZS1tYXJrZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEycHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7IC8qIFdoaXRlIGJhY2tncm91bmQgZm9yIGNvbnRyYXN0ICovXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    72156:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cwsn/cwsn-mark-attend/cwsn-mark-attend.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Daily Action Plan</ion-title>\r\n     <ion-buttons slot=\"end\" class=\"pt-10\" (click)=\"isDisable ? '' : getCalender()\">\r\n      <ion-icon name=\"calendar-outline\" style=\"font-size: 25px; margin-right: 10px;\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment [(ngModel)]=\"currTab\" color=\"primary\">\r\n    <ion-segment-button value=\"1\">\r\n      <ion-label>Today's Action Plan</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"2\">\r\n      <ion-label>Today's Status</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <form [formGroup]=\"markForm\" *ngIf=\"currTab==1\">\r\n    <div class=\"d-flex jusity-content-center\">\r\n      <div class=\"col-12 mt-3\">\r\n        <div>\r\n          <ion-label class=\"mandatory\">Planned to visit</ion-label>\r\n          <ion-select class=\"cusDrp\" placeholder=\"Please Select\" formControlName=\"atten_type\"\r\n            disabled=\"{{isDisable}}\" (ionChange)=\"visitChanges(markForm.get('atten_type').value)\">\r\n            <ion-select-option *ngFor=\"let opns of vistLts\" [value]=\"opns.value\">{{opns.label}}</ion-select-option>\r\n          </ion-select>\r\n          <div class=\"error\" *ngIf=\"markForm.get('atten_type').hasError('required') && submitted\">Field is required\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\" *ngIf=\"markForm.value.atten_type==1\">\r\n          <ion-label class=\"mandatory\">School list</ion-label>\r\n          <ion-list lines=\"none\" class=\"bg-white\">\r\n            <ionic-selectable (onChange)=\"cenOrSchChanges(1, 'school_id')\" class=\"cusDrp noMar\" text-wrap\r\n              placeholder=\"Select school\" formControlName=\"school_id\" itemValueField=\"school_id\" [title]=\"'Select School'\"\r\n              itemTextField=\"school_name\" [items]=\"schListData\" [isMultiple]=\"false\" [canSearch]=\"true\" [canClear]=\"false\"\r\n              closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\" [isMultiple]=\"true\">\r\n            </ionic-selectable>\r\n          </ion-list>\r\n          <div class=\"error\" *ngIf=\"markForm.get('school_id').hasError('required') && submitted\">Field is required</div>\r\n\r\n        </div>\r\n        <div class=\"mt-3\" *ngIf=\"markForm.value.atten_type==2\">\r\n          <ion-label class=\"mandatory\">Select IE center</ion-label>\r\n          <ion-list lines=\"none\" class=\"bg-white\">\r\n            <ionic-selectable (onChange)=\"cenOrSchChanges(2, 'center_id')\" class=\"cusDrp noMar\" text-wrap [title]=\"'Select Center'\"\r\n              placeholder=\"Select school\" formControlName=\"center_id\" itemValueField=\"center_id\" itemTextField=\"name\"\r\n              [items]=\"centerListData\" [isMultiple]=\"false\" [canSearch]=\"true\" [canClear]=\"false\" closeButton=\"false\"\r\n              closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n            </ionic-selectable>\r\n          </ion-list>\r\n          <div class=\"error\" *ngIf=\"markForm.get('center_id').hasError('required') && submitted\">Field is required</div>\r\n\r\n        </div>\r\n        <div class=\"mt-3\" *ngIf=\"markForm.value.atten_type==3\">\r\n          <div style=\"text-align: center; background: var(--ion-color-primary); border-radius: 8px; color: white; padding: 10px;\">Home based</div>\r\n            <div class=\"mt-3\">\r\n              <ion-label class=\"mandatory\">School list</ion-label>\r\n              <ion-list lines=\"none\" class=\"bg-white\">\r\n                <ionic-selectable (onChange)=\"cenOrSchChanges(1, 'school_id')\" class=\"cusDrp noMar\" text-wrap\r\n                  placeholder=\"Select school\" formControlName=\"school_id\" itemValueField=\"school_id\" [title]=\"'Select School'\"\r\n                  itemTextField=\"school_name\" [items]=\"schListall\" [isMultiple]=\"false\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                  closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n                </ionic-selectable>\r\n              </ion-list>\r\n              <div class=\"error\" *ngIf=\"markForm.get('school_id').hasError('required') && submitted\">Field is required</div>\r\n            </div>\r\n\r\n            <div class=\"mt-3\" *ngIf=\"markForm.get('school_id')\">\r\n              <ion-label class=\"mandatory\">Student list</ion-label>\r\n              <ion-list lines=\"none\" class=\"bg-white\">\r\n                <ionic-selectable class=\"cusDrp noMar\" text-wrap\r\n                  placeholder=\"Select student\" formControlName=\"student_id\" itemValueField=\"id\" [title]=\"'Select Student'\"\r\n                  itemTextField=\"name\" [items]=\"studentList\" [isMultiple]=\"true\" [canSearch]=\"true\" [canClear]=\"false\"\r\n                  closeButton=\"false\" closeButtonSlot=\"end\" closeButtonText=\"Cancel\">\r\n                </ionic-selectable>\r\n              </ion-list>\r\n              <div class=\"error\" *ngIf=\"markForm.get('student_id').hasError('required') && submitted\">Field is required</div>\r\n            </div>\r\n\r\n             <!-- <div class=\"mt-3\" *ngIf=\"markForm.get('student_id')\">\r\n                <ion-label class=\"mandatory\">Remarks</ion-label>\r\n                <ion-input class=\"cusDrp\" placeholder=\"Enter value for Home based\" formControlName=\"remarks\"></ion-input>\r\n                <div class=\"error\" *ngIf=\"markForm.get('remarks').hasError('required') && submitted\">Field is required</div>\r\n            </div> -->\r\n        </div>            \r\n        <div class=\"mt-3\" *ngIf=\"markForm.value.atten_type==4\">\r\n          <ion-label class=\"mandatory\">Enter Others value</ion-label>\r\n          <ion-input class=\"cusDrp\" placeholder=\"Enter value for other\" formControlName=\"remarks\"></ion-input>\r\n          <div class=\"error\" *ngIf=\"markForm.get('remarks').hasError('required') && submitted\">Field is required</div>\r\n        </div>\r\n        <!-- <ion-card class=\"card-align mt-3\" *ngIf=\"currKm > 1 && currKm\">\r\n          <div class=\"p-2\">\r\n            <h6><span class=\"text-danger\">Note: </span> You are {{currKm}} km away from this school / IE center, within\r\n              1km you are\r\n              able to mark attendance</h6>\r\n          </div>\r\n        </ion-card> -->\r\n      </div>\r\n    </div>\r\n    <ion-list lines=\"none\" class=\"bg-white text-center\" *ngIf=\"markForm.value.atten_type\">\r\n      <ion-button (click)=\"finalSubmit()\"  disabled=\"{{isDisable}}\">\r\n        Submit\r\n      </ion-button>\r\n    </ion-list>\r\n\r\n  </form>\r\n  <div *ngIf=\"currTab==2;\">\r\n    <div class=\"searchBox\" >\r\n      <ion-input type=\"text\" placeholder=\"Search attendance...\"  [(ngModel)]=\"searchText\" (ionInput)=\"filterAttenHistory($event.target.value)\" ></ion-input>\r\n    </div>\r\n    <!-- <div class=\"cuscard\" *ngFor=\"let attenItm of attenHistory; trackBy: trackByFn; let i = index\" [ngStyle]=\"{ opacity: isDisable ? 0.5 : 1 }\">\r\n       <button *ngIf=\"attenItm.atten_type != 'Leave' && attenItm.atten_date == currDate\" \r\n        [disabled]=\"isDisable\" class=\"delete-btn\" (click)=\"deleteAttendance(attenItm, i)\">\r\n        <ion-icon name=\"trash-outline\"></ion-icon>\r\n      </button>\r\n      <h6 style=\"width: 90%;\">{{attenItm.atten_type}} / {{attenItm.name}} {{attenItm.remarks}}</h6>\r\n      <p class=\"m0 text-right\">{{attenItm.atten_date | date: 'dd-MM-YYYY'}}</p>\r\n    </div> -->\r\n\r\n    <div class=\"timeline-container\">\r\n      <div class=\"timeline-item\" *ngFor=\"let attenItm of attenHistory; trackBy: trackByFn; let i = index\"\r\n          [ngStyle]=\"{ opacity: isDisable ? 0.5 : 1 }\">\r\n\r\n        <div class=\"timeline-marker\">{{ i + 1 }}</div>\r\n\r\n        <div class=\"timeline-content\">\r\n              <button *ngIf=\"attenItm.atten_type != 'Leave' && datePipe.transform(attenItm.atten_date, 'yyyy-MM-dd') == datePipe.transform(currDate, 'yyyy-MM-dd')\" \r\n                    [disabled]=\"isDisable\" class=\"delete-btn\"\r\n                    (click)=\"deleteAttendance(attenItm, i)\">\r\n              <ion-icon name=\"trash-outline\"></ion-icon>\r\n            </button>\r\n            <h6 style=\"width: 93%;\">{{attenItm.atten_type}} / {{attenItm.name}} {{attenItm.remarks}}</h6>\r\n            <p class=\"m0 text-right\">{{attenItm.atten_date | date: 'dd-MM-yyyy h:mm a'}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"attenHistory.length==0\" class=\"text-center text-danger mt-3\">\r\n      No data found\r\n    </div>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_cwsn_cwsn-mark-attend_cwsn-mark-attend_module_ts-es5.js.map