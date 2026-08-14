(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_attendance_attendance_module_ts"], {
    /***/
    83327:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/attendance-verify/attendance-verify.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendanceVerifyComponent": function AttendanceVerifyComponent() {
          return (
            /* binding */
            _AttendanceVerifyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./attendance-verify.component.html */
      35316);
      /* harmony import */


      var _attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendance-verify.component.scss */
      93782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/network.service */
      81508);

      var _AttendanceVerifyComponent = /*#__PURE__*/function () {
        function AttendanceVerifyComponent(_router, ionicStore, _apiService, loading, _alertService, networkService, _translate) {
          var _this = this;

          _classCallCheck(this, AttendanceVerifyComponent);

          this._router = _router;
          this.ionicStore = ionicStore;
          this._apiService = _apiService;
          this.loading = loading;
          this._alertService = _alertService;
          this.networkService = networkService;
          this._translate = _translate;
          this.storedFinalData = [];
          this.ppSchBaseDetails = [];

          this.finalSubmit = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var level, usertype, veracity_type, _this$storeDetail$pag, school_id, school_name, udise_code, emiverfiyInfo, school_info, _school_info, schoolInfo, mediumIds, classInfo, basicInfoObj, schoolReasons, studentReasons, teacher, not_verfied, learning_outcome_data, observation_reportconst, observation_data, finalData, _final, connectionStatus;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    level = localStorage.getItem("selectedlevel");
                    usertype = localStorage.getItem("usertype");
                    veracity_type = localStorage.getItem("veracity_type");
                    _this$storeDetail$pag = this.storeDetail.pages.pageData[0].pageDetails, school_id = _this$storeDetail$pag.school_id, school_name = _this$storeDetail$pag.school_name, udise_code = _this$storeDetail$pag.udise_code;

                    if (level == '1' || veracity_type == 'inspection') {
                      if (this.storeDetail.pages.pageData[1].pageFlow != 'observation') {
                        emiverfiyInfo = this.storeDetail.pages.pageData[3].pageDetails;
                      } else {
                        school_info = {};
                        school_info.created_by = localStorage.getItem("username");
                        school_info.veracity_type = localStorage.getItem("veracity_type");
                        school_info.district_id = this.masterApiResponse.dist_id;
                        school_info.district_name = this.masterApiResponse.district_name;
                        school_info.block_id = this.masterApiResponse.block_id;
                        school_info.block_name = this.masterApiResponse.block_name;
                        school_info.edu_dist_id = this.masterApiResponse.edu_dist_id;
                        school_info.edu_dist_name = this.masterApiResponse.edu_dist_name;
                        school_info.nodal_id = this.masterApiResponse.nodal_id;
                        school_info.nodal_name = this.masterApiResponse.nodal_name;
                        school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
                        school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
                        school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
                        school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
                        school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
                        school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
                        school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;
                        emiverfiyInfo = school_info;
                      }
                    } else {
                      _school_info = {};
                      _school_info.created_by = localStorage.getItem("username");
                      _school_info.veracity_type = localStorage.getItem("veracity_type");
                      _school_info.district_id = this.masterApiResponse.dist_id;
                      _school_info.district_name = this.masterApiResponse.district_name;
                      _school_info.block_id = this.masterApiResponse.block_id;
                      _school_info.block_name = this.masterApiResponse.block_name;
                      _school_info.edu_dist_id = this.masterApiResponse.edu_dist_id;
                      _school_info.edu_dist_name = this.masterApiResponse.edu_dist_name;
                      _school_info.nodal_id = this.masterApiResponse.nodal_id;
                      _school_info.nodal_name = this.masterApiResponse.nodal_name;
                      _school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
                      _school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
                      _school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
                      _school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
                      _school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
                      _school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
                      _school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;
                      emiverfiyInfo = _school_info;
                    }

                    schoolInfo = {
                      school_id: school_id,
                      school_name: school_name,
                      level: level,
                      udise_code: udise_code
                    };
                    mediumIds = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map(function (el) {
                      return el.medium_id;
                    });
                    classInfo = {
                      "class": this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0].class_id,
                      medium: mediumIds.toString(),
                      class_type: this.storeDetail.pages.pageData[5].pageDetails.classType,
                      section: this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0].section,
                      teacher_name: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_name,
                      teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid
                    };
                    basicInfoObj = Object.assign(Object.assign(Object.assign({}, schoolInfo), emiverfiyInfo), classInfo);
                    schoolReasons = this.storeDetail.pages.pageData[0].pageDetails.schoolsReasons;

                    if (this.storeDetail.pages.pageData[9]) {
                      studentReasons = this.storeDetail.pages.pageData[9].pageDetails.studentReasonList;
                    } else {
                      studentReasons = {};
                    }

                    if (this.storeDetail.pages.pageData[5].pageDetails.reasonDetails != undefined) {
                      teacher = {
                        teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid,
                        teacher_name: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_name,
                        reason: this.storeDetail.pages.pageData[5].pageDetails.reasonDetails,
                        description: "Reason for not observing teacher"
                      };
                    }

                    not_verfied = {
                      schools: schoolReasons,
                      teacher: teacher == undefined ? {} : teacher,
                      student: studentReasons
                    };

                    if (this.storeDetail.pages.pageData[8]) {
                      learning_outcome_data = {
                        subject: this.storeDetail.pages.pageData[8].pageDetails.subject,
                        term: this.storeDetail.pages.pageData[8].pageDetails.term,
                        unit: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.chapter_no,
                        learning_outcome: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.learning_outcome,
                        question_data: this.storeDetail.pages.pageData[10].pageDetails
                      };
                    } else {
                      learning_outcome_data = {};
                    }

                    observation_reportconst = {};

                    if (this.storeDetail.pages.pageData[9]) {
                      observation_reportconst = {
                        strength: this.storeDetail.pages.pageData[9].pageDetails.strength,
                        improvement: this.storeDetail.pages.pageData[9].pageDetails.improvement
                      };
                    }

                    if (this.storeDetail.pages.pageData[7]) {
                      observation_data = {
                        observation_dataInfo: this.storeDetail.pages.pageData[7].apiResponse.records.customizeSectionList
                      };
                    }

                    finalData = {
                      basic_info: basicInfoObj,
                      not_verfied: not_verfied,
                      attendance_data: this.storeDetail.pages.pageData[6].pageDetails.misMatchStudentList,
                      otherattendance_data: this.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList,
                      learning_outcome_data: learning_outcome_data,
                      observation_data: this.storeDetail.pages.pageData[7] ? observation_data.observation_dataInfo : {},
                      observation_report: this.storeDetail.pages.pageData[7] ? observation_reportconst : {},
                      final_remarks: "Good"
                    };
                    _final = {
                      json: JSON.stringify(finalData)
                    };
                    connectionStatus = this.networkService.getCurrentNetworkStatus();

                    if (!(connectionStatus != 1)) {
                      _context2.n = 2;
                      break;
                    }

                    _context2.n = 1;
                    return this.ionicStore.getFinalData();

                  case 1:
                    this.storedFinalData = _context2.v;

                    if (this.storedFinalData == undefined || this.storedFinalData == null) {
                      this.storedFinalData = [];
                      this.storedFinalData.push(finalData);
                    } else {
                      this.storedFinalData.push(finalData);
                    }

                    this.ionicStore.setFinalData(this.storedFinalData);
                    this.loading.present();

                    this._apiService.postfinalinfo({
                      json: JSON.stringify(this.storedFinalData)
                    }).subscribe(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              this.ionicStore.removeStoreData();
                              this.ionicStore.removeOffStorage();
                              this.ionicStore.removeFinalData();
                              localStorage.removeItem("classInfo");
                              localStorage.removeItem("chapterId");
                              localStorage.removeItem("schoolInfo");
                              localStorage.removeItem("teacherInfo");
                              localStorage.removeItem("finaldata");
                              this.loading.dismiss();
                              this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(function () {});

                              this._router.navigate(['/tabs/school-info'], {
                                queryParams: {
                                  'Id': 1,
                                  'data': 1,
                                  'udise': this.masterApiResponse.udise_code
                                },
                                skipLocationChange: false
                              });

                            case 1:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      _this2.ionicStore.removeStoreData();

                      _this2.ionicStore.removeOffStorage();

                      _this2.ionicStore.removeFinalData();

                      localStorage.removeItem("classInfo");
                      localStorage.removeItem("finaldata");
                      localStorage.removeItem("chapterId");
                      localStorage.removeItem("schoolInfo");
                      localStorage.removeItem("teacherInfo");

                      _this2.loading.dismiss();

                      _this2.ionicStore.insertData_Replace('ppSchBaseDetails', _this2.ppSchBaseDetails).then(function () {});

                      _this2._router.navigate(["/tnvntabs/page-route/dashboardc"]);
                    });

                    _context2.n = 3;
                    break;

                  case 2:
                    this.loading.dismiss();

                    this._alertService.showAlert(this.networkInfo);

                  case 3:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          };
        }

        return _createClass(AttendanceVerifyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.ionicStore.getData('ppSchBaseDetails').then(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                var _this4 = this;

                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      this.ppSchBaseDetails = data ? data : [];
                      this.appLanguage();
                      this.schoolDetail = JSON.parse(localStorage.getItem("schoolInfo"));
                      this.ionicStore.getOffStorage().then(function (response) {
                        if (response) {
                          _this4.masterApiResponse = response;
                        }

                        _this4.ionicStore.getStoreData().then(function (response) {
                          _this4.storeDetail = response;
                          _this4.classDetail = _this4.storeDetail.pages.pageData[14].pageDetails.selectedClass;
                          _this4.selectedSection = _this4.storeDetail.pages.pageData[14].pageDetails.sectionList[0];
                        });
                      });

                    case 1:
                      return _context3.a(2);
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this5 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this5.languageType = data;

              _this5._translate.use(_this5.languageType);

              _this5._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this6 = this;

            this._translate.get("thankyou").subscribe(function (res) {
              _this6.thankyou = res;
            });

            this._translate.get("Attendance").subscribe(function (res) {
              _this6.Attendance = res;
            });

            this._translate.get("Verification").subscribe(function (res) {
              _this6.Verification = res;
            });

            this._translate.get("networkInfo").subscribe(function (res) {
              _this6.networkInfo = res;
            });

            this._translate.get("class").subscribe(function (res) {
              _this6["class"] = res;
            });

            this._translate.get("done").subscribe(function (res) {
              _this6.done = res;
            });
          }
        }]);
      }();

      _AttendanceVerifyComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
        }];
      };

      _AttendanceVerifyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-attendance-verify",
        template: _raw_loader_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AttendanceVerifyComponent);
      /***/
    },

    /***/
    14145:
    /*!************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/attendance.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancePageModule": function AttendancePageModule() {
          return (
            /* binding */
            _AttendancePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./attendance.page */
      83708);
      /* harmony import */


      var _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-attendance/student-attendance.component */
      48726);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);
      /* harmony import */


      var _student_data_student_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./student-data/student-data.component */
      47678);
      /* harmony import */


      var _attendance_verify_attendance_verify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./attendance-verify/attendance-verify.component */
      83327);
      /* harmony import */


      var _student_attendance_sub_student_attendance_sub_student_attendance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./student-attendance/sub-student-attendance/sub-student-attendance.component */
      60410);
      /* harmony import */


      var _student_data_sub_attendance_verify_sub_attendance_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./student-data/sub-attendance-verify/sub-attendance-verify.component */
      75539);

      var routes = [{
        path: '',
        component: _attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage
      }, {
        path: 'student-attendance',
        component: _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_1__.StudentAttendanceComponent
      }, {
        path: 'student-data',
        component: _student_data_student_data_component__WEBPACK_IMPORTED_MODULE_3__.StudentDataComponent
      }, {
        path: 'attendance-verify',
        component: _attendance_verify_attendance_verify_component__WEBPACK_IMPORTED_MODULE_4__.AttendanceVerifyComponent
      }, {
        path: 'otherClass-attendance',
        component: _student_attendance_sub_student_attendance_sub_student_attendance_component__WEBPACK_IMPORTED_MODULE_5__.SubStudentAttendanceComponent
      }, {
        path: 'otherClass-attendance-verify',
        component: _student_data_sub_attendance_verify_sub_attendance_verify_component__WEBPACK_IMPORTED_MODULE_6__.SubAttendanceVerifyComponent
      }];

      var _AttendancePageModule = /*#__PURE__*/_createClass(function AttendancePageModule() {
        _classCallCheck(this, AttendancePageModule);
      });

      _AttendancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)],
        declarations: [_attendance_page__WEBPACK_IMPORTED_MODULE_0__.AttendancePage, _student_attendance_student_attendance_component__WEBPACK_IMPORTED_MODULE_1__.StudentAttendanceComponent, _student_data_student_data_component__WEBPACK_IMPORTED_MODULE_3__.StudentDataComponent, _attendance_verify_attendance_verify_component__WEBPACK_IMPORTED_MODULE_4__.AttendanceVerifyComponent, _student_attendance_sub_student_attendance_sub_student_attendance_component__WEBPACK_IMPORTED_MODULE_5__.SubStudentAttendanceComponent, _student_data_sub_attendance_verify_sub_attendance_verify_component__WEBPACK_IMPORTED_MODULE_6__.SubAttendanceVerifyComponent],
        entryComponents: []
      })], _AttendancePageModule);
      /***/
    },

    /***/
    83708:
    /*!**********************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/attendance.page.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AttendancePage": function AttendancePage() {
          return (
            /* binding */
            _AttendancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./attendance.page.html */
      43194);
      /* harmony import */


      var _attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./attendance.page.scss */
      56805);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);

      var _AttendancePage = /*#__PURE__*/function () {
        function AttendancePage(actionSheetController, ionicStore, loading, _router, _alertService, _translate, _apiService) {
          var _this7 = this;

          _classCallCheck(this, AttendancePage);

          this.actionSheetController = actionSheetController;
          this.ionicStore = ionicStore;
          this.loading = loading;
          this._router = _router;
          this._alertService = _alertService;
          this._translate = _translate;
          this._apiService = _apiService;
          this.selectedClass = undefined;
          this.selectedSection = undefined;
          this.sectionList = [];
          this.classList = [];

          this.createPage = function () {
            var apiData = {
              pageNo: "15",
              pageName: "Other_classroom",
              apiResponse: {
                records: {}
              },
              pageDetails: {
                selectedClass: "",
                selectedSetion: "",
                sectionList: []
              }
            };
            _this7.storeDetail.pages.pageData[14] = apiData;

            _this7.ionicStore.setStoreData(_this7.storeDetail);
          };

          this.goToOtherClassAttendance = function () {
            if (_this7.selectedClass != undefined && _this7.selectedClass != "" && _this7.selectedSection != undefined && _this7.selectedSection != "") {
              _this7.storeDetail.pages.pageData[14].pageDetails.selectedClass = _this7.selectedClass;
              _this7.storeDetail.pages.pageData[14].pageDetails.selectedSetion = _this7.selectedSection;
              _this7.storeDetail.pages.pageData[14].pageDetails.sectionList = _this7.sectionList;
              var allStudents = _this7.masterApiResponse.StudentsData.all;

              _this7.ionicStore.setStoreData(_this7.storeDetail);

              _this7._router.navigate(["/tnvntabs/page-route/attendance/otherClass-attendance"]);
            } else {
              _this7._alertService.showAlert("Attendance Verification", "Please select from the below any");

              return;
            }
          };
        }

        return _createClass(AttendancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this8 = this;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.appLanguage();
                    this.loading.present();
                    _context4.n = 1;
                    return this.ionicStore.getOffStorage().then(function (response) {
                      _this8.masterApiResponse = response;

                      _this8.ionicStore.getStoreData().then(function (response) {
                        _this8.loading.dismiss();

                        _this8.storeDetail = response;
                        _this8.storeDetail.pages.currentPage = "Other_classroom";

                        _this8.ionicStore.setStoreData(_this8.storeDetail);

                        if (_this8.storeDetail.pages.pageData[14] == undefined) {
                          _this8.createPage();
                        } else {
                          _this8.selectedClass = _this8.storeDetail.pages.pageData[14].pageDetails.selectedClass;
                          _this8.selectedSection = _this8.storeDetail.pages.pageData[14].pageDetails.selectedSetion;
                          _this8.sectionList = _this8.storeDetail.pages.pageData[14].pageDetails.sectionList;
                        }

                        var classDetail = JSON.parse(localStorage.getItem("classInfo"));
                        classDetail = _this8.storeDetail.pages.pageData[5].correctedDetails;
                        var flags = [],
                            studentclass = [],
                            l = _this8.masterApiResponse.StudentsData.all.length,
                            i;

                        for (i = 0; i < l; i++) {
                          if (flags[_this8.masterApiResponse.StudentsData.all[i].class_studying_id]) continue;
                          flags[_this8.masterApiResponse.StudentsData.all[i].class_studying_id] = true;
                          studentclass.push(_this8.masterApiResponse.StudentsData.all[i].class_studying_id);
                        }

                        if (_this8.storeDetail.pages.pageData[5].correctedDetails.length > 1) {
                          _this8.classList = _this8.storeDetail.pages.pageData[5].apiResponse.records.school_class_info.filter(function (data) {
                            return data.class_id != classDetail[0].class_id;
                          });
                        } else {
                          _this8.classList = _this8.storeDetail.pages.pageData[5].apiResponse.records.school_class_info.filter(function (data) {
                            return data.class_id != classDetail[0].class_id;
                          });
                        }

                        _this8.classList = _this8.classList.filter(function (data) {
                          return Number(data.class_id) < 13;
                        });
                        var tempclass = [];
                        _this8.classList = _this8.classList.filter(function (classdata) {
                          studentclass.forEach(function (data) {
                            if (Number(data) == Number(classdata.class_id)) {
                              tempclass.push(classdata);
                            }
                          });
                        });
                        _this8.classList = tempclass;
                      });
                    });

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this9 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this9.languageType = data;

              _this9._translate.use(_this9.languageType);

              _this9._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this0 = this;

            this._translate.get("Attendance").subscribe(function (res) {
              _this0.Attendance = res;
            });

            this._translate.get("Verification").subscribe(function (res) {
              _this0.Verification = res;
            });

            this._translate.get("verifyAnotherClass").subscribe(function (res) {
              _this0.verifyAnotherClass = res;
            });

            this._translate.get("completeAttendance_verify").subscribe(function (res) {
              _this0.completeAttendance_verify = res;
            });

            this._translate.get("selectClass").subscribe(function (res) {
              _this0.selectClass = res;
            });

            this._translate.get("selectSection").subscribe(function (res) {
              _this0.selectSection = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this0.next = res;
            });
          }
        }, {
          key: "classSelectHandler",
          value: function classSelectHandler(event) {
            this.selectedClass = event;
            this.sectionList = event.section.replace(/[0-9]/, "").split(",").filter(function (a) {
              return a != "";
            });
          }
        }, {
          key: "sectionHandler",
          value: function sectionHandler(event) {
            this.selectedSection = event;
          }
        }]);
      }();

      _AttendancePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }];
      };

      _AttendancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-attendance",
        template: _raw_loader_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AttendancePage);
      /***/
    },

    /***/
    48726:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-attendance/student-attendance.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentAttendanceComponent": function StudentAttendanceComponent() {
          return (
            /* binding */
            _StudentAttendanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-attendance.component.html */
      98916);
      /* harmony import */


      var _student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-attendance.component.scss */
      93808);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _StudentAttendanceComponent = /*#__PURE__*/function () {
        function StudentAttendanceComponent(modalController, userSessionService, _apiService, _router, loading, alertController, _alertService, ionicStore, _translate) {
          var _this1 = this;

          _classCallCheck(this, StudentAttendanceComponent);

          this.modalController = modalController;
          this.userSessionService = userSessionService;
          this._apiService = _apiService;
          this._router = _router;
          this.loading = loading;
          this.alertController = alertController;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.attendanceList = [];
          this.groups = {};
          this.absentList = [];
          this.misMatchList = [];
          this.sectionStudentList = [];
          this.misMatchReasons = [];
          this.attendanceMarked = false;

          this.getStudentAttendanceList = function (class_id, schoolId) {
            var schoolDetail = {
              class_id: class_id,
              school_id: schoolId
            };
            var logDataNew = {
              username: localStorage.getItem("username"),
              udise_code: localStorage.getItem("udise_code"),
              observation_id: localStorage.getItem("observation_id"),
              form_name: "Student attendance Page",
              action_name: "Student attendance data",
              data: JSON.stringify(_this1.masterStudentsData.all),
              completion_percentage: _this1.progressValue
            };

            _this1._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
              _this1._alertService.showAlert("SOMETHING WENT WRONG");
            });

            var allStudents = _this1.masterStudentsData.all;
            var absent_infoList = [];
            var absent_dataList = [];

            if (_this1.masterStudentsData.absent_info) {
              absent_infoList = _this1.masterStudentsData.absent_info;
            }

            if (_this1.masterStudentsData.absent_data) {
              absent_dataList = _this1.masterStudentsData.absent_data;
            }

            var classArray = class_id.split(",");
            var selectedClassStudents = allStudents.filter(function (data) {
              return classArray.includes(data.class_studying_id);
            });
            var selectedClassAbsentInfo = absent_infoList.length ? absent_infoList.filter(function (data) {
              return classArray.includes(data.class_studying_id);
            }) : false;
            var selectedClassAbsentData = absent_dataList.filter(function (data) {
              return classArray.includes(data.class_studying_id);
            });
            var records = {
              all: selectedClassStudents
            };
            _this1.attendanceList = records.all;

            _this1.attendanceList.forEach(function (data, index) {
              data.status = "active";
              data.scanned = false;
            });

            var groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(_this1.attendanceList, function (a) {
              return a.class_studying_id;
            });
            var sectionStudent = [];

            if (_this1.selectedSection) {
              groups[class_id] = groups[class_id].filter(function (data, index) {
                if (data.class_section == _this1.selectedSection) {
                  return data;
                }
              });
              var boys = groups[class_id].filter(function (data, index) {
                if (Number(data.gender) == 1) {
                  return data;
                }
              });
              var girls = groups[class_id].filter(function (data, index) {
                if (Number(data.gender) == 2) {
                  return data;
                }
              });
              girls = girls.sort(function (a, b) {
                return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
              });
              boys = boys.sort(function (a, b) {
                return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
              });
              groups[class_id] = [];
              groups[class_id] = girls;

              for (var i = 0; i < boys.length; i++) {
                groups[class_id].push(boys[i]);
              }

              sectionStudent = groups[class_id];
            } else {
              var classes = class_id.split(',');

              for (var i = 0; i < classes.length; i++) {
                var _boys = groups[classes[i]].filter(function (data, index) {
                  if (Number(data.gender) == 1) {
                    return data;
                  }
                });

                var _girls = groups[classes[i]].filter(function (data, index) {
                  if (Number(data.gender) == 2) {
                    return data;
                  }
                });

                _girls = _girls.sort(function (a, b) {
                  return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
                });
                _boys = _boys.sort(function (a, b) {
                  return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
                });
                groups[classes[i]] = _girls;

                for (var j = 0; j < _boys.length; j++) {
                  groups[classes[i]].push(_boys[j]);
                }
              }
            }

            _this1.groups = groups;
            _this1.absentList = [];
            var apiData = {
              pageNo: "7",
              pageName: "stu_Attendance",
              apiResponse: {
                records: {
                  attendanceList: _this1.attendanceList,
                  absentList: _this1.absentList,
                  misMatchReasonList: _this1.misMatchReasons,
                  sectionStudentList: sectionStudent
                }
              },
              pageDetails: {
                misMatchStudentList: []
              },
              correctedDetails: []
            };

            _this1.loading.dismiss();

            _this1.storeDetail.pages.pageData[6] = apiData;

            _this1.ionicStore.setStoreData(_this1.storeDetail);

            localStorage.setItem('storedDetails', JSON.stringify(_this1.storeDetail));
          };

          this.getReasonsList = function () {
            var records = {
              mismatch_reasons: _this1.masterApiResponse.mismatch_reasons
            };
            _this1.misMatchReasons = records.mismatch_reasons;
            _this1.storeDetail.pages.pageData[6].apiResponse.records.misMatchReasonList = _this1.misMatchReasons;

            _this1.ionicStore.setStoreData(_this1.storeDetail);

            localStorage.setItem('storedDetails', JSON.stringify(_this1.storeDetail));
          };

          this.goToClassroom = function () {
            var value = localStorage.getItem("stu_attend_section_status");

            var found = _this1.attendanceList.every(_this1.isAttendanceTaken);

            if (found && _this1.attendanceMarked && Number(value) == 1) {
              _this1._router.navigate(["/tnvntabs/page-route/index", {
                queryParams: {
                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                }
              }]);
            } else {
              _this1._router.navigate(["/tnvntabs/page-route/index", {
                queryParams: {
                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "0")
                }
              }]);

              _this1._alertService.showAlert("Please Mark Attendance");
            }
          };

          this.goToObservationTeaching = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this1, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this10 = this;

              var _a, logDataNew, found, misMatchData, classInfo, isRegularTeacher, level, getfinaldata, getteacherlength;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    logDataNew = {
                      username: localStorage.getItem("username"),
                      udise_code: localStorage.getItem("udise_code"),
                      observation_id: localStorage.getItem("observation_id"),
                      form_name: "Student attendance",
                      action_name: "On submission",
                      data: "Student attendance completed successfully",
                      completion_percentage: this.progressValue
                    };

                    this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                      _this10._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                    found = this.attendanceList.every(this.isAttendanceTaken);

                    if (!found) {
                      _context5.n = 2;
                      break;
                    }

                    this.attendanceMarked = true;

                    if (this.misMatchList.length) {
                      this.misMatchList.forEach(function (data, index) {
                        data["reasonInfo"] = "";
                      });
                    }

                    misMatchData = {
                      attendanceMisMatchList: this.misMatchList
                    };
                    this.storeDetail.pages.pageData[6].correctedDetails = this.groups[this.selectedClass];
                    this.storeDetail.pages.pageData[6].pageDetails.misMatchStudentList = this.attendanceList;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    _context5.n = 1;
                    return this.storeDetail.pages.pageData[5].pageDetails;

                  case 1:
                    this.classData = _context5.v;
                    classInfo = {
                      mediumInfo: this.classData.mediumInfo,
                      subjectInfo: this.classData.subjectInfo,
                      classType: this.classData.classType,
                      class_id: this.selectedClass.toString()
                    };
                    localStorage.setItem("classInfo", JSON.stringify(classInfo));
                    isRegularTeacher = true;
                    isRegularTeacher = (_a = this.storeDetail.pages.pageData[5].correctedDetails) === null || _a === void 0 ? void 0 : _a.regularTeacher;
                    this.ionicStore.setStoreData(this.storeDetail);
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));

                    if (this.selectedClass) {
                      if (isRegularTeacher) {
                        if (Number(this.storeDetail.pages.pageData[5].observationflow) == 1) {
                          this._router.navigate(["/tnvntabs/page-route/index", {
                            queryParams: {
                              "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                            }
                          }]);
                        } else {
                          this._router.navigate(["/tnvntabs/page-route/index", {
                            queryParams: {
                              "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                            }
                          }]);
                        }
                      } else {
                        if (this.classData.selectedClass.class_id == '9' || this.classData.selectedClass.class_id == '10' || this.classData.selectedClass.class_id == '11' || this.classData.selectedClass.class_id == '12') {
                          level = localStorage.getItem("selectedlevel");
                          getfinaldata = localStorage.getItem("finaldata");
                          getteacherlength = localStorage.getItem("teacherlength");

                          if (level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                            if (Number(this.usertype) == 8) {
                              if (Number(this.classData.selectedClass.class_id) <= 12) {
                                this._router.navigate(["/tnvntabs/page-route/index", {
                                  queryParams: {
                                    "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                  }
                                }]);
                              } else {
                                this._router.navigate(["/tnvntabs/page-route/index", {
                                  queryParams: {
                                    "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                  }
                                }]);
                              }
                            } else if (Number(this.classData.selectedClass.class_id) <= 12) {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            } else {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            }
                          } else if (level == '1' && !getfinaldata) {
                            if (Number(this.usertype) == 8) {
                              if (Number(this.classData.selectedClass.class_id) <= 12) {
                                this._router.navigate(["/tnvntabs/page-route/index", {
                                  queryParams: {
                                    "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                  }
                                }]);
                              } else {
                                this._router.navigate(["/tnvntabs/page-route/index", {
                                  queryParams: {
                                    "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                  }
                                }]);
                              }
                            } else if (Number(this.classData.selectedClass.class_id) <= 12) {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            } else {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            }
                          } else {
                            if (Number(this.usertype) == 8) {
                              if (Number(this.classData.selectedClass.class_id) <= 12) {
                                this._router.navigate(["/tnvntabs/page-route/index", {
                                  queryParams: {
                                    "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                  }
                                }]);
                              } else {
                                this._router.navigate(["/tnvntabs/page-route/index", {
                                  queryParams: {
                                    "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                  }
                                }]);
                              }
                            } else if (Number(this.classData.selectedClass.class_id) <= 12) {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            } else {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            }
                          }
                        } else {
                          if (Number(this.usertype) == 8) {
                            if (Number(this.classData.selectedClass.class_id) <= 12) {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            } else {
                              this._router.navigate(["/tnvntabs/page-route/index", {
                                queryParams: {
                                  "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                                }
                              }]);
                            }
                          } else {
                            this._router.navigate(["/tnvntabs/page-route/index", {
                              queryParams: {
                                "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                              }
                            }]);
                          }
                        }
                      }
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index", {
                        queryParams: {
                          "stu_attend_section_status": localStorage.setItem("stu_attend_section_status", "1")
                        }
                      }]);
                    }

                    _context5.n = 3;
                    break;

                  case 2:
                    this.attendanceMarked = false;

                    this._alertService.showAlert("Please Mark Attendance");

                  case 3:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          };
        }

        return _createClass(StudentAttendanceComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this11 = this;

              var logDataNew, _t2;

              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.p = _context7.n) {
                  case 0:
                    this.progressValue = Math.round((7 - 2) / 14 * 100);
                    this.appLanguage();
                    this.schoolInfo = localStorage.getItem("schoolInfo");
                    this.teachertype = this.userSessionService.teacher_type();
                    this.usertype = this.userSessionService.emis_usertype();
                    this.schoolInfo = JSON.parse(this.schoolInfo);
                    _context7.p = 1;
                    _context7.n = 2;
                    return this.ionicStore.getStudentsData().then(function (response) {
                      if (response == null || response == undefined) {
                        var logDataNew = {
                          username: localStorage.getItem("username"),
                          udise_code: localStorage.getItem("udise_code"),
                          observation_id: localStorage.getItem("observation_id"),
                          form_name: "Student Attendance",
                          action_name: "Get student list from storage",
                          data: response,
                          completion_percentage: _this11.progressValue
                        };

                        _this11._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                          _this11._alertService.showAlert("SOMETHING WENT WRONG");
                        });

                        _this11.masterStudentsData = JSON.parse(localStorage.getItem("studentsData"));
                      } else {
                        _this11.masterStudentsData = response;
                      }
                    });

                  case 2:
                    _context7.n = 4;
                    break;

                  case 3:
                    _context7.p = 3;
                    _t2 = _context7.v;
                    logDataNew = {
                      username: localStorage.getItem("username"),
                      udise_code: localStorage.getItem("udise_code"),
                      observation_id: localStorage.getItem("observation_id"),
                      form_name: "Student Attendance",
                      action_name: "Error in student list from storage",
                      data: _t2,
                      completion_percentage: this.progressValue
                    };

                    this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                      _this11._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                  case 4:
                    _context7.n = 5;
                    return this.ionicStore.getOffStorage().then(function (response) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
                        var _this12 = this;

                        var _logDataNew, _logDataNew2, _t;

                        return _regenerator().w(function (_context6) {
                          while (1) switch (_context6.p = _context6.n) {
                            case 0:
                              this.masterApiResponse = response;

                              if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                                this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                                _logDataNew = {
                                  username: localStorage.getItem("username"),
                                  udise_code: localStorage.getItem("udise_code"),
                                  observation_id: localStorage.getItem("observation_id"),
                                  form_name: "Get Stored Data",
                                  action_name: "Issue in Getting Stored Data in attendance page",
                                  data: "Issue in Getting Stored Data in attendance page",
                                  completion_percentage: this.progressValue
                                };

                                this._apiService.setActivityLog(_logDataNew).subscribe(function (response) {}, function (error) {
                                  _this12._alertService.showAlert("SOMETHING WENT WRONG");
                                });
                              }

                              _context6.p = 1;
                              _context6.n = 2;
                              return this.ionicStore.getStoreData().then(function (response) {
                                _this12.storeDetail = response;

                                if (_this12.storeDetail == null) {
                                  _this12.storeDetail = JSON.parse(localStorage.getItem('storedDetails'));
                                }

                                _this12.storeDetail.pages.currentPage = "stu_Attendance";

                                _this12.ionicStore.setStoreData(_this12.storeDetail);

                                localStorage.setItem('storedDetails', JSON.stringify(_this12.storeDetail));
                                _this12.selectedClass = _this12.storeDetail.pages.pageData[5].correctedDetails.class_id;
                                _this12.selectedSection = _this12.storeDetail.pages.pageData[5].pageDetails.section;

                                if (_this12.storeDetail.pages.pageData[6] == undefined || _this12.storeDetail.pages.pageData[6] == null) {
                                  _this12.loading.present();

                                  _this12.getStudentAttendanceList(_this12.selectedClass.toString(), _this12.schoolInfo.schoolId);

                                  _this12.getReasonsList();
                                } else {
                                  _this12.attendanceList = _this12.storeDetail.pages.pageData[6].apiResponse.records.attendanceList;

                                  if (_this12.storeDetail.pages.pageData[5].pageDetails.section && _this12.storeDetail.pages.pageData[6].correctedDetails.length > 0) {
                                    _this12.groups[_this12.selectedClass] = _this12.storeDetail.pages.pageData[6].correctedDetails.filter(function (data) {
                                      if (data.class_section == _this12.storeDetail.pages.pageData[5].pageDetails.section) {
                                        return data;
                                      }
                                    });
                                  } else if (_this12.storeDetail.pages.pageData[5].pageDetails.section && _this12.storeDetail.pages.pageData[6].apiResponse.records.attendanceList.length > 0) {
                                    _this12.groups[_this12.selectedClass] = _this12.storeDetail.pages.pageData[6].apiResponse.records.attendanceList.filter(function (data) {
                                      if (data.class_section == _this12.storeDetail.pages.pageData[5].pageDetails.section) {
                                        return data;
                                      }
                                    });
                                  } else {
                                    _this12.groups = _this12.storeDetail.pages.pageData[6].correctedDetails.filter(function (data) {
                                      if (data.class_section == _this12.storeDetail.pages.pageData[5].pageDetails.section) {
                                        return data;
                                      }
                                    });
                                  }

                                  _this12.absentList = _this12.storeDetail.pages.pageData[6].apiResponse.records.absentList;
                                  _this12.misMatchReasons = _this12.storeDetail.pages.pageData[6].apiResponse.records.misMatchReasonList;
                                  _this12.misMatchList = _this12.storeDetail.pages.pageData[6].pageDetails.misMatchStudentList;
                                }
                              });

                            case 2:
                              _context6.n = 4;
                              break;

                            case 3:
                              _context6.p = 3;
                              _t = _context6.v;
                              _logDataNew2 = {
                                username: localStorage.getItem("username"),
                                udise_code: localStorage.getItem("udise_code"),
                                observation_id: localStorage.getItem("observation_id"),
                                form_name: "Student attendance",
                                action_name: "Error in Fetching student data",
                                data: _t,
                                completion_percentage: this.progressValue
                              };

                              this._apiService.setActivityLog(_logDataNew2).subscribe(function (response) {}, function (error) {
                                _this12._alertService.showAlert("SOMETHING WENT WRONG");
                              });

                            case 4:
                              return _context6.a(2);
                          }
                        }, _callee6, this, [[1, 3]]);
                      }));
                    });

                  case 5:
                    return _context7.a(2);
                }
              }, _callee7, this, [[1, 3]]);
            }));
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this13 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this13.languageType = data;

              _this13._translate.use(_this13.languageType);

              _this13._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this14 = this;

            this._translate.get("studentAttendance").subscribe(function (res) {
              _this14.studentAttendance = res;
            });

            this._translate.get("rollCall_Info").subscribe(function (res) {
              _this14.rollCall_Info = res;
            });

            this._translate.get("p").subscribe(function (res) {
              _this14.p = res;
            });

            this._translate.get("a").subscribe(function (res) {
              _this14.a = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this14.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this14.back = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this14.save = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this14.Note = res;
            });
          }
        }, {
          key: "makeAttendance",
          value: function makeAttendance(stu_detail, attedanceStatus, index, key) {
            var absentListId;

            if (this.absentList.length) {
              absentListId = this.absentList.map(function (el) {
                return el.id;
              });
            }

            if (attedanceStatus == "p") {
              this.groups[key][index].status = "active";

              if (this.absentList.length) {
                var found = absentListId.includes(stu_detail.id);

                if (found) {
                  if (this.misMatchList.indexOf(stu_detail) == -1) {
                    this.misMatchList.push(stu_detail);
                  }
                }
              }
            } else {
              this.groups[key][index].status = "Inactive";

              if (this.absentList.length) {
                var _found = !absentListId.includes(stu_detail.id);

                if (_found) {
                  if (this.misMatchList.indexOf(stu_detail) == -1) {
                    this.misMatchList.push(stu_detail);
                  }
                }
              }
            }
          }
        }, {
          key: "isAttendanceTaken",
          value: function isAttendanceTaken(currentValue, index, array) {
            return currentValue.status != "none";
          }
        }]);
      }();

      _StudentAttendanceComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_7__.UserSessionService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
        }];
      };

      _StudentAttendanceComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-student-attendance",
        template: _raw_loader_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentAttendanceComponent);
      /***/
    },

    /***/
    60410:
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-attendance/sub-student-attendance/sub-student-attendance.component.ts ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubStudentAttendanceComponent": function SubStudentAttendanceComponent() {
          return (
            /* binding */
            _SubStudentAttendanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_sub_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sub-student-attendance.component.html */
      33810);
      /* harmony import */


      var _sub_student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sub-student-attendance.component.scss */
      42736);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! lodash */
      23815);
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);

      var _SubStudentAttendanceComponent = /*#__PURE__*/function () {
        function SubStudentAttendanceComponent(modalController, _apiService, _router, alertController, _alertService, loading, ionicStore, _translate) {
          var _this15 = this;

          _classCallCheck(this, SubStudentAttendanceComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this._router = _router;
          this.alertController = alertController;
          this._alertService = _alertService;
          this.loading = loading;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.attendanceList = [];
          this.absentList = [];
          this.misMatchList = [];

          this.getStudentAttendanceList = function (class_id, schoolId) {
            var schoolDetail = {
              class_id: class_id,
              school_id: schoolId
            };
            var allStudents = _this15.masterApiResponse.StudentsData.all;
            var selectedClassStudents = allStudents.filter(function (data) {
              return data.class_studying_id == class_id;
            });
            var selectedClassAbsentInfo = [];
            var selectedClassAbsentData = [];
            var records = {
              all: selectedClassStudents,
              absent_info: selectedClassAbsentInfo.length ? selectedClassAbsentInfo : false,
              absent_data: selectedClassAbsentData
            };
            _this15.attendanceList = records.all;

            _this15.attendanceList.forEach(function (data, index) {
              data["status"] = "active";
            }); // this.groups = _.groupBy(this.attendanceList, (a) => a.class_studying_id);


            var groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(_this15.attendanceList, function (a) {
              return a.class_studying_id;
            });
            var sectionStudent = [];

            if (_this15.storeDetail.pages.pageData[14].pageDetails.selectedSetion) {
              groups[_this15.selectedClass] = groups[_this15.selectedClass].filter(function (data, index) {
                if (data.class_section == _this15.storeDetail.pages.pageData[14].pageDetails.selectedSetion) {
                  return data;
                }
              });
            }

            sectionStudent = groups[_this15.selectedClass];
            _this15.groups = groups;
            _this15.absentList = records.absent_info == false ? "" : records.absent_info;

            _this15.loading.dismiss();

            var apiData = {
              pageNo: "16",
              pageName: "other_class_attendance",
              apiResponse: {
                records: {
                  attendanceList: _this15.attendanceList,
                  absentList: _this15.absentList
                }
              },
              pageDetails: {
                misMatchStudentList: []
              }
            };
            _this15.storeDetail.pages.pageData[15] = apiData;

            _this15.ionicStore.setStoreData(_this15.storeDetail);
          };

          this.goToOtherClassroom = function () {
            _this15._router.navigate(["/tnvntabs/page-route/attendance"]);
          };

          this.goToObservationTeaching = function () {
            var found = _this15.attendanceList.every(_this15.isAttendanceTaken);

            if (found) {
              if (_this15.misMatchList.length) {
                _this15.misMatchList.forEach(function (data, index) {
                  data["reasonInfo"] = "";
                });
              }

              var misMatchData = {
                attendanceMisMatchList: _this15.misMatchList
              }; // this.storeDetail.pages.pageData[15]["correctedDetails"] =
              //   misMatchData.attendanceMisMatchList;
              // this.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList =
              //   misMatchData.attendanceMisMatchList;

              _this15.storeDetail.pages.pageData[15]["correctedDetails"] = [];
              _this15.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList = _this15.attendanceList;

              _this15.ionicStore.setStoreData(_this15.storeDetail);

              var otherClassMismatch = _this15.storeDetail.pages.pageData[15].correctedDetails;

              if (otherClassMismatch.length) {
                _this15._router.navigate(["/tnvntabs/page-route/attendance/otherClass-attendance-verify"]);
              } else {
                var level = localStorage.getItem("selectedlevel");

                if (level == '1') {
                  var selectedflow = _this15.storeDetail.pages.pageData[1].pageFlow;

                  if (selectedflow == 'observation') {
                    _this15._router.navigate(["/tnvntabs/page-route/emidata", _this15.storeDetail.pages.pageData[0].pageDetails.school_id]);
                  } else {
                    _this15._router.navigate(["/tnvntabs/page-route/attendance/attendance-verify"]);
                  }
                } else {
                  _this15._router.navigate(["/tnvntabs/page-route/attendance/attendance-verify"]);
                }
              }
            } else {
              _this15._alertService.showAlert("Please Mark Attendance");
            }
          };
        }

        return _createClass(SubStudentAttendanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.appLanguage();
            this.loading.present();
            this.schoolInfo = localStorage.getItem("schoolInfo");
            this.schoolInfo = JSON.parse(this.schoolInfo);
            this.ionicStore.getOffStorage().then(function (response) {
              _this16.masterApiResponse = response;

              _this16.ionicStore.getStoreData().then(function (response) {
                _this16.storeDetail = response;
                _this16.storeDetail.pages.currentPage = "other_class_attendance";

                _this16.ionicStore.setStoreData(_this16.storeDetail);

                _this16.selectedClass = _this16.storeDetail.pages.pageData[14].pageDetails.selectedClass.class_id;

                if (_this16.storeDetail.pages.pageData[15] == undefined) {
                  if (_this16.selectedClass) {
                    _this16.getStudentAttendanceList(_this16.selectedClass.toString(), _this16.schoolInfo.schoolId);
                  }
                } else {
                  _this16.attendanceList = _this16.storeDetail.pages.pageData[15].apiResponse.records.attendanceList;
                  _this16.groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(_this16.attendanceList, function (a) {
                    return a.class_studying_id;
                  });
                  _this16.absentList = _this16.storeDetail.pages.pageData[15].apiResponse.records.absentList;
                  _this16.misMatchList = _this16.storeDetail.pages.pageData[15].pageDetails.misMatchStudentList;

                  _this16.loading.dismiss();
                }
              });
            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this17 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this17.languageType = data;

              _this17._translate.use(_this17.languageType);

              _this17._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this18 = this;

            this._translate.get("studentAttendance").subscribe(function (res) {
              _this18.studentAttendance = res;
            });

            this._translate.get("rollCall_Info").subscribe(function (res) {
              _this18.rollCall_Info = res;
            });

            this._translate.get("p").subscribe(function (res) {
              _this18.p = res;
            });

            this._translate.get("a").subscribe(function (res) {
              _this18.a = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this18.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this18.back = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this18.Note = res;
            });
          }
        }, {
          key: "makeAttendance",
          value: function makeAttendance(stu_detail, attedanceStatus, index, key) {
            var absentListId;

            if (this.absentList.length) {
              absentListId = this.absentList.map(function (el) {
                return el.id;
              });
            }

            if (attedanceStatus == "p") {
              this.groups[key][index].status = "active";

              if (this.absentList.length) {
                var found = absentListId.includes(stu_detail.id);

                if (found) {
                  if (this.misMatchList.indexOf(stu_detail) == -1) {
                    this.misMatchList.push(stu_detail);
                  }
                }
              }
            } else {
              this.groups[key][index].status = "Inactive";

              if (this.absentList.length) {
                var _found2 = !absentListId.includes(stu_detail.id);

                if (_found2) {
                  if (this.misMatchList.indexOf(stu_detail) == -1) {
                    this.misMatchList.push(stu_detail);
                  }
                }
              }
            }
          }
        }, {
          key: "isAttendanceTaken",
          value: function isAttendanceTaken(currentValue, index, array) {
            return currentValue.status != "none";
          }
        }]);
      }();

      _SubStudentAttendanceComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
        }];
      };

      _SubStudentAttendanceComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "app-sub-student-attendance",
        template: _raw_loader_sub_student_attendance_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sub_student_attendance_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SubStudentAttendanceComponent);
      /***/
    },

    /***/
    47678:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-data/student-data.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StudentDataComponent": function StudentDataComponent() {
          return (
            /* binding */
            _StudentDataComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_student_data_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./student-data.component.html */
      44327);
      /* harmony import */


      var _student_data_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-data.component.scss */
      93149);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/components/attendancemodal/attendancemodal.component */
      20471);

      var _StudentDataComponent = /*#__PURE__*/function () {
        function StudentDataComponent(modalController, _apiService, _router, ionicStore, _translate, _alertService) {
          var _this19 = this;

          _classCallCheck(this, StudentDataComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this._router = _router;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this._alertService = _alertService;
          this.misMatchAttendance = [];
          this.misMatchReasons = [];

          this.goToObservation = function () {
            if (_this19.storeDetail.pages.pageData[5]) {
              _this19._router.navigate(["/tnvntabs/page-route/observation"]);
            } else {
              if (_this19.storeDetail.pages.pageData[5]) _this19._router.navigate(["/tnvntabs/page-route/assessment/student-performance"]);
            }
          };

          this.goToAttendanceVerify = function () {
            var isAllAssessed = _this19.misMatchAttendance.filter(function (_ma) {
              return _ma.reasonInfo == "";
            });

            if (isAllAssessed.length == 0) {
              _this19.ionicStore.setStoreData(_this19.storeDetail);

              if (_this19.storeDetail.pages.pageData[5]) {
                _this19._router.navigate(["/tnvntabs/page-route/observation/updateObservation"]);
              } else {
                _this19._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
              }
            } else {
              _this19._alertService.showAlert("Attendance Vertification", "Please verify attendance for all the students");
            }
          };
        }

        return _createClass(StudentDataComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this20 = this;

            this.appLanguage();
            this.ionicStore.getStoreData().then(function (response) {
              _this20.storeDetail = response;
              _this20.misMatchAttendance = _this20.storeDetail.pages.pageData[5].correctedDetails;
              _this20.misMatchReasons = _this20.storeDetail.pages.pageData[5].apiResponse.records.misMatchReasonList;
            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this21 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this21.languageType = data;

              _this21._translate.use(_this21.languageType);

              _this21._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this22 = this;

            this._translate.get("Attendance").subscribe(function (res) {
              _this22.Attendance = res;
            });

            this._translate.get("Verification").subscribe(function (res) {
              _this22.Verification = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this22.Note = res;
            });

            this._translate.get("mismatchInfo").subscribe(function (res) {
              _this22.mismatchInfo = res;
            });

            this._translate.get("reasonMismatch").subscribe(function (res) {
              _this22.reasonMismatch = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this22.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this22.back = res;
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal(studentName, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this23 = this;

              var modal;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    this.selectedIndex = index;
                    _context8.n = 1;
                    return this.modalController.create({
                      component: src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__.AttendancemodalComponent,
                      componentProps: {
                        misMatchReasonList: this.misMatchReasons,
                        student: studentName
                      },
                      backdropDismiss: false,
                      cssClass: "my-custom-modal-attendance"
                    });

                  case 1:
                    modal = _context8.v;
                    modal.onDidDismiss().then(function (response) {
                      if (response.data.reason != "Cancel") {
                        _this23.misMatchAttendance[_this23.selectedIndex].reasonInfo = response.data.reason;
                      }
                    });
                    _context8.n = 2;
                    return modal.present();

                  case 2:
                    return _context8.a(2, _context8.v);
                }
              }, _callee8, this);
            }));
          }
        }]);
      }();

      _StudentDataComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }];
      };

      _StudentDataComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-student-data",
        template: _raw_loader_student_data_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_student_data_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StudentDataComponent);
      /***/
    },

    /***/
    75539:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-data/sub-attendance-verify/sub-attendance-verify.component.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubAttendanceVerifyComponent": function SubAttendanceVerifyComponent() {
          return (
            /* binding */
            _SubAttendanceVerifyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_sub_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./sub-attendance-verify.component.html */
      45642);
      /* harmony import */


      var _sub_attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sub-attendance-verify.component.scss */
      79672);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/components/attendancemodal/attendancemodal.component */
      20471);

      var _SubAttendanceVerifyComponent = /*#__PURE__*/function () {
        function SubAttendanceVerifyComponent(modalController, _apiService, ionicStore, _router, _translate, _alertService) {
          var _this24 = this;

          _classCallCheck(this, SubAttendanceVerifyComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this.ionicStore = ionicStore;
          this._router = _router;
          this._translate = _translate;
          this._alertService = _alertService;
          this.misMatchAttendance = [];
          this.misMatchReasons = [];

          this.goToOtherClassAttendance = function () {
            _this24._router.navigate(["/tnvntabs/page-route/attendance/otherClass-attendance"]);
          };

          this.goToAttendanceVerify = function () {
            var isAllAssessed = _this24.misMatchAttendance.filter(function (_ma) {
              return _ma.reasonInfo == "";
            });

            if (isAllAssessed.length == 0) {
              _this24.storeDetail.pages.pageData[13].correctedDetails = _this24.misMatchAttendance;

              _this24.ionicStore.setStoreData(_this24.storeDetail);

              _this24._router.navigate(["/tnvntabs/page-route/attendance/attendance-verify"]);
            } else {
              _this24._alertService.showAlert("Attendance Vertification", "Please verify attendance for all the students");
            }
          };
        }

        return _createClass(SubAttendanceVerifyComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this25 = this;

            this.appLanguage();
            this.ionicStore.getStoreData().then(function (response) {
              _this25.storeDetail = response;
              _this25.misMatchAttendance = _this25.storeDetail.pages.pageData[13].correctedDetails;
              _this25.misMatchReasons = _this25.storeDetail.pages.pageData[5].apiResponse.records.misMatchReasonList;
            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this26 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this26.languageType = data;

              _this26._translate.use(_this26.languageType);

              _this26._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this27 = this;

            this._translate.get("Attendance").subscribe(function (res) {
              _this27.Attendance = res;
            });

            this._translate.get("Verification").subscribe(function (res) {
              _this27.Verification = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this27.Note = res;
            });

            this._translate.get("mismatchInfo").subscribe(function (res) {
              _this27.mismatchInfo = res;
            });

            this._translate.get("reasonMismatch").subscribe(function (res) {
              _this27.reasonMismatch = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this27.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this27.back = res;
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal(studentName, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var _this28 = this;

              var modal;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    this.selectedIndex = index;
                    _context9.n = 1;
                    return this.modalController.create({
                      component: src_app_components_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_5__.AttendancemodalComponent,
                      componentProps: {
                        misMatchReasonList: this.misMatchReasons,
                        student: studentName
                      },
                      backdropDismiss: false,
                      cssClass: "my-custom-modal-attendance"
                    });

                  case 1:
                    modal = _context9.v;
                    modal.onDidDismiss().then(function (response) {
                      if (response.data.reason != "Cancel") {
                        _this28.misMatchAttendance[_this28.selectedIndex].reasonInfo = response.data.reason;
                      }
                    });
                    _context9.n = 2;
                    return modal.present();

                  case 2:
                    return _context9.a(2, _context9.v);
                }
              }, _callee9, this);
            }));
          }
        }]);
      }();

      _SubAttendanceVerifyComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }];
      };

      _SubAttendanceVerifyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: "app-sub-attendance-verify",
        template: _raw_loader_sub_attendance_verify_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sub_attendance_verify_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SubAttendanceVerifyComponent);
      /***/
    },

    /***/
    93782:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/attendance-verify/attendance-verify.component.scss ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdHRlbmRhbmNlLXZlcmlmeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    56805:
    /*!************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/attendance.page.scss ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".margin_0_10 {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dGVuZGFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImF0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbl8wXzEwIHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    93808:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-attendance/student-attendance.component.scss ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button.student-present {\n  background: #43A047;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\nbutton.student-absent {\n  background: #F44537;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\n.sc-ion-label-md-h {\n  padding-left: 1rem;\n  display: block;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.background {\n  background-color: #e6deed !important;\n}\n\n#background-comtent {\n  background: #e6deed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnQtYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDRTtFQUNJLHFCQUFBO0FBRU47O0FBQUU7RUFDRSx5Q0FBQTtBQUdKOztBQURFO0VBQ0Usb0NBQUE7QUFJSjs7QUFGRTtFQUNFLDhCQUFBO0FBS0oiLCJmaWxlIjoic3R1ZGVudC1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLnN0dWRlbnQtcHJlc2VudHtcclxuICAgIGJhY2tncm91bmQ6ICM0M0EwNDc7ICBcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7ICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG5idXR0b24uc3R1ZGVudC1hYnNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjQ0NTM3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDsgIFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuXHJcbi5zYy1pb24tbGFiZWwtbWQtaHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4gIC5uby1wYWRkaW5nIHtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2U2ZGVlZCAhaW1wb3J0YW50OyAgXHJcbiAgfVxyXG4gIC5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZGVlZCAhaW1wb3J0YW50XHJcbiAgfVxyXG4gICNiYWNrZ3JvdW5kLWNvbXRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTZkZWVkICFpbXBvcnRhbnRcclxuICB9Il19 */";
      /***/
    },

    /***/
    42736:
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-attendance/sub-student-attendance/sub-student-attendance.component.scss ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button.student-present {\n  background: #43A047;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\nbutton.student-absent {\n  background: #F44537;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\n.sc-ion-label-md-h {\n  padding-left: 1rem;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi1zdHVkZW50LWF0dGVuZGFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBRUoiLCJmaWxlIjoic3ViLXN0dWRlbnQtYXR0ZW5kYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5zdHVkZW50LXByZXNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNBMDQ3OyAgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4OyAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuYnV0dG9uLnN0dWRlbnQtYWJzZW50e1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NDUzNztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7ICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG4uc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9Il19 */";
      /***/
    },

    /***/
    93149:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-data/student-data.component.scss ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWRhdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    79672:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/attendance/student-data/sub-attendance-verify/sub-attendance-verify.component.scss ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItYXR0ZW5kYW5jZS12ZXJpZnkuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    35316:
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/attendance-verify/attendance-verify.component.html ***!
      \********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar class=\"new-background-color\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-buttons slot=\"\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                  </ion-buttons>\r\n            </ion-col>\r\n            <ion-col class=\"\">\r\n                <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\"><b>{{this.Attendance}}<br>{{this.Verification}}</b>\r\n                </ion-title></ion-col>\r\n            <ion-col>\r\n                <app-notification></app-notification>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    \r\n    </ion-toolbar>\r\n   \r\n  </ion-header>\r\n  <ion-content>\r\n\r\n      <div class=\"content-wrapper\"> \r\n          <section>  \r\n              <ion-text color=\"\" class=\"ion-text-center\">\r\n              <h2 class=\"text-muted fs-18\"><b [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.thankyou}}</b></h2>\r\n                \r\n                      <h1 class=\"fs-18 lh-2\"><b><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.class}}</span> {{classDetail?.class_id}} {{selectedSection}} <br> {{schoolDetail?.schoolName}}\r\n                      </b></h1>\r\n                    </ion-text>\r\n            </section> \r\n  </div>\r\n    </ion-content>\r\n    <ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">    \r\n            <ion-tab-button  class=\"btn-next done\"  (click)=\"finalSubmit()\">\r\n              <ion-label style = \"font-size:18px!important\" [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.done}}</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>\r\n      </ion-footer>\r\n  \r\n  \r\n  ";
      /***/
    },

    /***/
    43194:
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/attendance.page.html ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.Attendance}}<br> {{this.Verification}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content>\r\n  <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n    <h3 class=\"color-dgrey mt-2\"\r\n      [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-11': this.languageType == 'ta','fs-18': this.languageType == 'en'}\">\r\n      <b>{{this.verifyAnotherClass}}.</b></h3>\r\n    <p class=\"color-dgrey px-1\"><span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-11': this.languageType == 'ta'}\">\r\n        {{this.completeAttendance_verify}}</span>:</p>\r\n  </ion-text>\r\n\r\n  <ion-list lines=\"none\" class=\"margin_0_10\">\r\n    <ion-item class=\"border\">\r\n        <ion-label> {{ this.selectClass }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedClass\" (ngModelChange)=\"classSelectHandler($event)\"\r\n          *ngIf=\"classList.length else noClass \">\r\n          <ion-select-option *ngFor=\"let classData of classList\" [value]=\"classData\">{{classData.class_id}}</ion-select-option>\r\n        </ion-select>\r\n        <ng-template #noClass>\r\n          <ion-select-option value=\"\">No Class Available</ion-select-option>\r\n        </ng-template>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"border\">\r\n        <ion-label> {{ this.selectSection }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedSection\" (ngModelChange)=\"sectionHandler($event)\"\r\n          *ngIf=\"sectionList.length else nosection \">\r\n          <ion-select-option *ngFor=\"let section of sectionList\" [value]=\"section\">{{section}}</ion-select-option>\r\n        </ion-select>\r\n        <ng-template #nosection>\r\n          <ion-select-option value=\"\">No Section Available</ion-select-option>\r\n        </ng-template>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-next done\" (click)=\"goToOtherClassAttendance()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    98916:
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-attendance/student-attendance.component.html ***!
      \**********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{this.studentAttendance}}<br /> </b>\r\n          </ion-title>\r\n        </ion-col>                   \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<app-progress [progress]=\"this.progressValue\"></app-progress>\r\n<ion-content class=\"background\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p\r\n      class=\"fs-12 p-2 color-dgrey\"\r\n      [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n    >\r\n      {{ this.rollCall_Info }}\r\n    </p>\r\n  </ion-text>  \r\n  <div *ngFor=\"let attendance of groups | keyvalue\">\r\n    <div class=\"text-align-center\">Grade: {{ attendance.key }} {{selectedSection}}</div>\r\n    <ion-row\r\n      [ngClass]=\"i % 2 == 0 ? 'bg-grey' : ''\"\r\n      *ngFor=\"let item of attendance.value; let i = index\"\r\n    >\r\n      <ion-col size=\"9\">\r\n        <ion-label\r\n          ><b>{{ item.name }}</b></ion-label\r\n        >\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-present\"\r\n          (click)=\"makeAttendance(item, 'p', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'active',\r\n            opacity_not_one: item.status != 'active'\r\n          }\"\r\n        >\r\n          {{ this.p }}\r\n        </button>\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-absent opacity_not_one\"\r\n          (click)=\"makeAttendance(item, 'a', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'Inactive',\r\n            opacity_not_one: item.status != 'Inactive'\r\n          }\"\r\n        >\r\n          {{ this.a }}\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>  \r\n</ion-content>\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToClassroom()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToObservationTeaching()\">\r\n        <ion-label\r\n          class=\"no-padding\"\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    33810:
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-attendance/sub-student-attendance/sub-student-attendance.component.html ***!
      \*************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title\r\n            class=\"ion-text-center fs-15\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{ this.studentAttendance }}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p\r\n      class=\"fs-12 p-2 color-dgrey\"\r\n      [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n    >\r\n      {{ this.rollCall_Info }}\r\n    </p>\r\n  </ion-text>  \r\n  <div *ngFor=\"let attendance of groups | keyvalue\">\r\n    <div class=\"text-align-center\">Grade: {{ attendance.key }}</div>\r\n    <ion-row\r\n      [ngClass]=\"i % 2 == 0 ? 'bg-grey' : ''\"\r\n      *ngFor=\"let item of attendance.value; let i = index\"\r\n    >\r\n      <ion-col size=\"9\">\r\n        <ion-label\r\n          ><b>{{ item.name }}</b></ion-label\r\n        >\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-present\"\r\n          (click)=\"makeAttendance(item, 'p', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'active',\r\n            opacity_not_one: item.status != 'active'\r\n          }\"\r\n        >\r\n          {{ this.p }}\r\n        </button>\r\n      </ion-col>\r\n      <ion-col class=\"my-auto\">\r\n        <button\r\n          class=\"student-absent opacity_not_one\"\r\n          (click)=\"makeAttendance(item, 'a', i, attendance.key)\"\r\n          [ngClass]=\"{\r\n            opacity_one: item.status == 'Inactive',\r\n            opacity_not_one: item.status != 'Inactive'\r\n          }\"\r\n        >\r\n          {{ this.a }}\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToOtherClassroom()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToObservationTeaching()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    44327:
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-data/student-data.component.html ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.Attendance}}<br> {{this.Verification}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"notifications\" class=\"notification-icon\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p class=\"fs-12 p-2\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.Note}}</span> : <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.mismatchInfo}}</span>.</p>\r\n  </ion-text> \r\n  <ion-row *ngFor=\"let studentData of misMatchAttendance;let i = index\" class=\"mt-2\"\r\n    [ngClass]=\"studentData.reasonInfo == ''? 'color-lpink':'color-lgreen'\">\r\n    <ion-col (click)=\"presentModal(studentData.name, i)\">\r\n      <ion-label class=\"color-dgrey\"><b>{{studentData.name}}</b> :</ion-label>\r\n      <p class=\"mb-0 fs-12 text-center color-blue\">\r\n        {{studentData.reasonInfo == ''? this.reasonMismatch :studentData.reasonInfo }}</p>\r\n    </ion-col>\r\n  </ion-row>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height:50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToObservation()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToAttendanceVerify()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";
      /***/
    },

    /***/
    45642:
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/attendance/student-data/sub-attendance-verify/sub-attendance-verify.component.html ***!
      \*****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"top-12\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.Attendance}}<br> {{this.Verification}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-icon name=\"notifications\" class=\"notification-icon\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"\">  \r\n  <ion-text color=\"dark\" class=\"text-italic\">\r\n    <p class=\"fs-12 p-2\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.Note}}</span> : <span\r\n        [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.mismatchInfo}}</span>.</p>\r\n  </ion-text>  \r\n  <ion-row *ngFor=\"let studentData of misMatchAttendance;let i = index\" class=\"mt-2\"\r\n    [ngClass]=\"studentData.reasonInfo == ''? 'color-lpink':'color-lgreen'\">\r\n    <ion-col (click)=\"presentModal(studentData.name,i)\">\r\n      <ion-label class=\"color-dgrey\"><b>{{studentData.name}}</b> :</ion-label>\r\n      <p class=\"mb-0 fs-12 text-center color-blue\">\r\n        {{studentData.reasonInfo == ''? this.reasonMismatch:studentData.reasonInfo }}</p>\r\n    </ion-col>\r\n  </ion-row>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height:50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToOtherClassAttendance()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToAttendanceVerify()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_attendance_attendance_module_ts-es5.js.map