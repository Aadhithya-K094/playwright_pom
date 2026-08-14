(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_assessment_omr-student_omr-student_module_ts"], {
    /***/
    77711:
    /*!****************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/omr-student/omr-student.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OmrStudentComponent": function OmrStudentComponent() {
          return (
            /* binding */
            _OmrStudentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_omr_student_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./omr-student.component.html */
      16060);
      /* harmony import */


      var _omr_student_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./omr-student.component.scss */
      32378);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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

      var _OmrStudentComponent = /*#__PURE__*/function () {
        /*-- Language Variables Ends --*/
        function OmrStudentComponent(modalController, _apiService, _router, loading, alertController, _alertService, ionicStore, _translate) {
          var _this = this;

          _classCallCheck(this, OmrStudentComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this._router = _router;
          this.loading = loading;
          this.alertController = alertController;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.attendanceList = [];
          this.misMatchReason = [{
            "id": 1,
            "reason": "OMR sheets over/not available/damaged"
          }, {
            "id": 2,
            "reason": "CWSN"
          }, {
            "id": 3,
            "reason": "Other"
          }];
          this.groups = {};
          this.absentList = [];
          this.misMatchList = [];
          this.sectionStudentList = [];
          this.misMatchReasons = [];

          this.getStudentAttendanceList = function (class_id, schoolId) {
            var schoolDetail = {
              class_id: class_id,
              school_id: schoolId
            };
            var allStudents = _this.masterStudentsData.all;
            var absent_infoList = [];
            var absent_dataList = [];

            if (_this.masterStudentsData.absent_info) {
              absent_infoList = _this.masterStudentsData.absent_info;
            }

            if (_this.masterStudentsData.absent_data) {
              absent_dataList = _this.masterStudentsData.absent_data;
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
            _this.attendanceList = records.all;

            _this.attendanceList.forEach(function (data, index) {
              data.status = "active";
            });

            var groups = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(_this.attendanceList, function (a) {
              return a.class_studying_id;
            });
            var sectionStudent = [];

            if (_this.selectedSection) {
              groups[class_id] = groups[class_id].filter(function (data, index) {
                if (data.class_section == _this.selectedSection) {
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

            _this.groups = groups;
            _this.absentList = [];

            _this.loading.dismiss();

            var apiData = {
              pageNo: "20",
              pageName: "omrscanner",
              apiResponse: {
                records: {
                  attendanceList: _this.attendanceList,
                  absentList: _this.absentList,
                  misMatchReasonList: _this.misMatchReasons,
                  sectionStudentList: sectionStudent
                }
              },
              pageDetails: {
                misMatchStudentList: []
              }
            };
            _this.storeDetail.pages.pageData[19] = apiData;

            _this.ionicStore.setStoreData(_this.storeDetail);

            localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
          };

          this.getReasonsList = function () {
            var records = {
              mismatch_reasons: _this.masterApiResponse.mismatch_reasons
            };
            _this.misMatchReasons = records.mismatch_reasons;

            _this.ionicStore.setStoreData(_this.storeDetail);

            localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
          };

          this.goToClassroom = function () {
            if (_this.groups[_this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id]) {
              for (var i = 0; i < _this.groups[_this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length; i++) {
                if (_this.groups[_this.selectedClass][i].selectedReason) {
                  _this.groups[_this.selectedClass][i].selectedReasonData = _this.misMatchReason[Number(_this.groups[_this.selectedClass][i].selectedReason) - 1].reason;
                }
              }
            }

            _this.storeDetail.pages.pageData[18].omrData = _this.groups[_this.selectedClass];
            localStorage.setItem("final-omr-student-list", JSON.stringify(_this.storeDetail.pages.pageData[18].omrData));

            _this._router.navigate(["/tnvntabs/page-route/omr-scanner"]);
          };

          this.gotoCamera = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return localStorage.setItem("Camera", "1");

                  case 1:
                    this._router.navigate(["/tnvntabs/page-route/omr-scanner"]);

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          };
        }

        return _createClass(OmrStudentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.progressValue = 70;
            this.appLanguage();
            this.schoolInfo = localStorage.getItem("schoolInfo");
            this.schoolInfo = JSON.parse(this.schoolInfo);
            this.ionicStore.getStudentsData().then(function (response) {
              _this2.masterStudentsData = response;

              if (_this2.masterStudentsData == null || _this2.masterStudentsData == undefined) {
                _this2.masterStudentsData = JSON.parse(localStorage.getItem("studentsData"));
              }
            });
            this.ionicStore.getOffStorage().then(function (response) {
              _this2.masterApiResponse = response;

              if (_this2.masterApiResponse == null || _this2.masterApiResponse == undefined) {
                _this2.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
              }

              _this2.ionicStore.getStoreData().then(function (response) {
                _this2.storeDetail = response;

                if (_this2.storeDetail == null || _this2.storeDetail == undefined) {
                  _this2.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                }

                console.log(_this2.storeDetail);
                _this2.selectedClass = _this2.storeDetail.pages.pageData[5].correctedDetails.class_id;
                var scanned_students = [];

                if (_this2.storeDetail.pages.pageData[18].omrData) {
                  var omrData = _this2.storeDetail.pages.pageData[18].omrData;

                  if (omrData) {
                    if (omrData.length > 0) {
                      scanned_students = omrData.filter(function (data) {
                        if (data.scanned == true && data.status == 'active') {
                          return data;
                        }
                      });
                    } else if (omrData.length > 0) {
                      scanned_students = omrData.filter(function (data) {
                        if (data.scanned == true && data.status == 'active') {
                          return data;
                        }
                      });
                    }
                  } else if (omrData.length > 0) {
                    scanned_students = omrData.filter(function (data) {
                      if (data.scanned == true && data.status == 'active') {
                        return data;
                      }
                    });
                  } else {
                    scanned_students = [];
                  }
                } else {
                  scanned_students = [];
                }

                _this2.scanned_students = scanned_students.length;
                _this2.storeDetail.pages.currentPage = "omrScanner";

                _this2.ionicStore.setStoreData(_this2.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this2.storeDetail));
                _this2.selectedSection = _this2.storeDetail.pages.pageData[5].pageDetails.section;

                if (_this2.storeDetail.pages.pageData[18] == undefined || _this2.storeDetail.pages.pageData[18] == null) {
                  _this2.groups[_this2.selectedClass] = _this2.storeDetail.pages.pageData[18].omrData;
                  _this2.groups[_this2.selectedClass] = _this2.groups[_this2.selectedClass].filter(function (data, index) {
                    if (data.status == "active") {
                      return data;
                    }
                  });
                  _this2.total_no_of_students = _this2.groups[_this2.selectedClass].length;

                  _this2.getReasonsList();
                } else {
                  _this2.attendanceList = _this2.storeDetail.pages.pageData[18].omrData;

                  if (_this2.storeDetail.pages.pageData[5].pageDetails.section && _this2.storeDetail.pages.pageData[18].omrData.length > 0) {
                    _this2.groups[_this2.selectedClass] = _this2.storeDetail.pages.pageData[18].omrData;
                    _this2.groups[_this2.selectedClass] = _this2.groups[_this2.selectedClass].filter(function (data, index) {
                      if (data.status == "active") {
                        return data;
                      }
                    });
                    _this2.total_no_of_students = _this2.groups[_this2.selectedClass].length;
                  } else if (_this2.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents) {
                    _this2.groups[_this2.selectedClass] = _this2.storeDetail.pages.pageData[17].apiResponse.records.accessedStudents;
                    _this2.groups[_this2.selectedClass] = _this2.groups[_this2.selectedClass].filter(function (data, index) {
                      if (data.status == "active") {
                        return data;
                      }
                    });
                    _this2.total_no_of_students = _this2.groups[_this2.selectedClass].length;
                  } else {
                    _this2.groups[_this2.selectedClass] = _this2.storeDetail.pages.pageData[18].omrData[_this2.selectedClass];
                    _this2.groups[_this2.selectedClass] = _this2.groups[_this2.selectedClass].filter(function (data, index) {
                      if (data.status == "active") {
                        return data;
                      }
                    });
                  }

                  _this2.total_no_of_students = _this2.groups[_this2.selectedClass].length;
                }
              });
            });
            this.progressData = Number(this.scanned_students) / Number(this.total_no_of_students);
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this3 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this3.languageType = data;

              _this3._translate.use(_this3.languageType);

              _this3._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this4 = this;

            this._translate.get("studentAttendance").subscribe(function (res) {
              _this4.studentAttendance = res;
            });

            this._translate.get("rollCall_Info").subscribe(function (res) {
              _this4.rollCall_Info = res;
            });

            this._translate.get("p").subscribe(function (res) {
              _this4.p = res;
            });

            this._translate.get("a").subscribe(function (res) {
              _this4.a = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this4.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this4.back = res;
            });

            this._translate.get("submit").subscribe(function (res) {
              _this4.submit = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this4.Note = res;
            });
          }
        }, {
          key: "showNoteAlert",
          value: function showNoteAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      header: "Note to Observer while scanning the OMR sheet:",
                      cssClass: "my-custom-class",
                      message: "<li>Take the clear picture of the OMR sheet.</li><br><li>Please scan in portrait mode (vertically) and on a flat surface.</li><br> <li>Also, make sure all 4 borders are scanned correctly.</li>",
                      buttons: [{
                        text: "ok",
                        handler: function handler() {}
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
        }, {
          key: "openDiscussModal",
          value: function openDiscussModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this5 = this;

              var i, _i, _i2, j, cls, logDataNew, Groupstatus;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id]) {
                      for (i = 0; i < this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length; i++) {
                        if (this.groups[this.selectedClass][i].selectedReason) {
                          this.groups[this.selectedClass][i].selectedReasonData = this.misMatchReason[Number(this.groups[this.selectedClass][i].selectedReason) - 1].reason;
                        }
                      }
                    }

                    this.storeDetail.pages.pageData[18].omrData = this.groups[this.selectedClass];

                    for (_i = 0; _i < this.storeDetail.pages.pageData[18].omrData.length; _i++) {
                      this.storeDetail.pages.pageData[18].omrData[_i].omr_questions = JSON.parse(localStorage.getItem('omrQuestions_Data'));
                    }

                    for (_i2 = 0; _i2 < this.storeDetail.pages.pageData[18].omrData.length; _i2++) {
                      for (j = 0; j < this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions.length; j++) {
                        cls = this.storeDetail.pages.pageData[18].omrData[_i2].scanned;

                        if (cls == true) {
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].medium = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionA = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionB = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionC = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionD = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].subject = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j]["class"] = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].selectedOmrAns = this.storeDetail.pages.pageData[18].omrData[_i2].selectedOmrAns[j];
                        } else if (cls == false) {
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].medium = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionA = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionB = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionC = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].optionD = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].subject = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j]["class"] = undefined;
                          this.storeDetail.pages.pageData[18].omrData[_i2].omr_questions[j].selectedOmrAns = null;
                        }
                      }
                    }

                    ;
                    localStorage.setItem("final-omr-student-list", JSON.stringify(this.storeDetail.pages.pageData[18].omrData));
                    _context3.n = 1;
                    return this.ionicStore.setStoreData(this.storeDetail);

                  case 1:
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                    logDataNew = {
                      username: localStorage.getItem("username"),
                      udise_code: localStorage.getItem("udise_code"),
                      observation_id: localStorage.getItem("observation_id"),
                      form_name: "Omr Scanning",
                      action_name: "On all student completion",
                      data: "Omr Scanning students status updated",
                      completion_percentage: this.progressValue
                    };

                    this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                      _this5._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                    Groupstatus = [];

                    if (this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id]) {
                      for (i = 0; i < this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length; i++) {
                        if (this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id][i].selectedReason || this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id][i].scanned == true) {
                          Groupstatus.push(this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id][i]);
                        }
                      }
                    }

                    if (Groupstatus.length != this.groups[this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id].length) {
                      this._alertService.showAlert("Please scan or fill the reason to all students");
                    } else {
                      if (Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) >= 3 && Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) <= 9) {
                        // this._router.navigate(["/tnvntabs/page-route/google-read-assessment"]);  
                        // this._router.navigate(["/tnvntabs/page-route/notebook"]);  
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                          }
                        });
                      } else if (Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) == 10 || Number(this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id) < 3) {
                        // this._router.navigate(["/tnvntabs/page-route/notebook"]);  
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                          }
                        });
                      } else {
                        // this._router.navigate(["/tnvntabs/page-route/hodinspection"]); 
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'assessment_section_status': localStorage.setItem('assessment_section_status', "1")
                          }
                        });
                      }
                    }

                  case 2:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _OmrStudentComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_5__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
        }];
      };

      _OmrStudentComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: "omr-student",
        template: _raw_loader_omr_student_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_omr_student_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OmrStudentComponent);
      /***/
    },

    /***/
    44217:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/omr-student/omr-student.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OmrStudentModule": function OmrStudentModule() {
          return (
            /* binding */
            _OmrStudentModule
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


      var _omr_student_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./omr-student.component */
      77711);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _omr_student_component__WEBPACK_IMPORTED_MODULE_0__.OmrStudentComponent
      }];

      var _OmrStudentModule = /*#__PURE__*/_createClass(function OmrStudentModule() {
        _classCallCheck(this, OmrStudentModule);
      });

      _OmrStudentModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_omr_student_component__WEBPACK_IMPORTED_MODULE_0__.OmrStudentComponent],
        entryComponents: []
      })], _OmrStudentModule);
      /***/
    },

    /***/
    32378:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/tnvn/assessment/omr-student/omr-student.component.scss ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "button.student-present {\n  background: #43A047;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\nbutton.student-absent {\n  background: #F44537;\n  color: #ffffff;\n  border-radius: 50%;\n  text-align: center;\n  width: 24px;\n  height: 24px;\n  font-weight: bold;\n  margin-bottom: 0;\n  border: none;\n  outline: none;\n}\n\n.sc-ion-label-md-h {\n  padding-left: 1rem;\n  display: block;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.background {\n  background-color: #e6deed !important;\n}\n\n#background-comtent {\n  background: #e6deed !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9tci1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0kscUJBQUE7QUFFTjs7QUFBRTtFQUNFLHlDQUFBO0FBR0o7O0FBQUU7RUFDRSxvQ0FBQTtBQUdKOztBQURFO0VBQ0UsOEJBQUE7QUFJSiIsImZpbGUiOiJvbXItc3R1ZGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5zdHVkZW50LXByZXNlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNBMDQ3OyAgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4OyAgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbn1cclxuYnV0dG9uLnN0dWRlbnQtYWJzZW50e1xyXG4gICAgYmFja2dyb3VuZDogI0Y0NDUzNztcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7ICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG4uc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuICAubm8tcGFkZGluZyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlNmRlZWQgIWltcG9ydGFudDsgIFxyXG4gIH1cclxuICBcclxuICAuYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmRlZWQgIWltcG9ydGFudFxyXG4gIH1cclxuICAjYmFja2dyb3VuZC1jb210ZW50e1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZGVlZCAhaW1wb3J0YW50XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    16060:
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/assessment/omr-student/omr-student.component.html ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>OMR SCANNING </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<app-progress [progress]=\"this.progressValue\"></app-progress>\r\n<ion-content class=\"background\">\r\n  <div *ngFor=\"let attendance of groups | keyvalue\">\r\n    <div style=\"background-color: #e6deed;text-align:center;margin:auto;width: 100%;padding-left: 13%;padding-top: 10px;display:flex\">\r\n      <button style=\"background-color: #6b4b9c;text-align:center;color:#ffffff;font-size: 18px;display: flex;border-radius: 25px;\" (click)=\"gotoCamera()\">\r\n        <ion-icon\r\n        style=\"padding:10px\"\r\n        name=\"camera\"\r\n        class=\"fs-30\"        \r\n      ></ion-icon>\r\n        <span style=\"padding:10px\">SCAN OMR SHEETS</span>\r\n      </button>\r\n      <ion-icon\r\n      style=\"padding:10px\"\r\n      name=\"information-circle\"\r\n      class=\"fs-30\"   \r\n      (click) = \"showNoteAlert()\"     \r\n    ></ion-icon>\r\n    </div>       \r\n       \r\n    <div class=\"text-align-center\">Grade: {{ attendance.key }} {{selectedSection}}</div>\r\n    <ion-row\r\n      \r\n      *ngFor=\"let item of attendance.value; let i = index\"      \r\n    >\r\n      <ion-col size=\"6\">\r\n        <ion-item lines=\"none\">\r\n        <ion-label\r\n          ><b>{{ item.name }} ({{ item.user_id }})</b></ion-label\r\n        >\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col *ngIf = \"item.scanned==false\" class=\"my-auto\" size=\"6\">\r\n        <ion-item class=\"border\" lines=\"none\">\r\n        <ion-label style=\"font-size:12px;font-weight:bold\" *ngIf=\"!item.selectedReason\"> Select Reason</ion-label>\r\n        <ion-select\r\n          [(ngModel)]=\"item.selectedReason\"          \r\n          style=\"max-width: 100%;\"\r\n        >\r\n          <ion-select-option\r\n            *ngFor=\"let reasonData of misMatchReason\"\r\n            [value]=\"reasonData.id\"\r\n            >{{ reasonData.reason }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      </ion-col>\r\n      <ion-col *ngIf = \"item.scanned==true\" class=\"my-auto\">\r\n        <ion-label\r\n          style=\"color:green;align-items: center;text-align:center;\"><b>Completed</b></ion-label\r\n        > \r\n      </ion-col>      \r\n    </ion-row>\r\n  </div>  \r\n</ion-content>\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToClassroom()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"openDiscussModal()\">\r\n        <ion-label\r\n          class=\"no-padding\"\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{this.submit}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_assessment_omr-student_omr-student_module_ts-es5.js.map