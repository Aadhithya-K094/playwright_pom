(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_classroom_classroom_module_ts"], {
    /***/
    33195:
    /*!*************************************************************!*\
      !*** ./src/app/pages/tnvn/classroom/classroom.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassroomComponent": function ClassroomComponent() {
          return (
            /* binding */
            _ClassroomComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_classroom_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./classroom.component.html */
      735);
      /* harmony import */


      var _classroom_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./classroom.component.scss */
      62296);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/components/classroommodal/classroommodal.component */
      71414);
      /* harmony import */


      var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/emimodal/emimodal.component */
      79615);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/storage */
      38605);

      var _ClassroomComponent = /*#__PURE__*/function () {
        function ClassroomComponent(modalController, _apiService, userSessionService, _router, alertController, _alertService, ionicStore, loading, _translate, storage) {
          var _this = this;

          _classCallCheck(this, ClassroomComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this.userSessionService = userSessionService;
          this._router = _router;
          this.alertController = alertController;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this.loading = loading;
          this._translate = _translate;
          this.storage = storage;
          this.ObservationOptions = [{
            "id": 1,
            "name": "Classroom Observation"
          }, {
            "id": 2,
            "name": "Assessments"
          }];
          this.changedValue = "";
          this.teacherReasons = [];
          this.isChanged = false;
          this.standardList = [];
          this.selectedStandardList = [];
          this.selectedMediumIds = [];
          this.toggleMultigrade = false;
          this.showMonograde = false;
          this.classInfoList = [];
          this.observationflow = 1;
          this.observationList = [{
            id: 1,
            value: "Regular Observation"
          }, {
            id: 2,
            value: "Foundational learning hour"
          }];
          this.mediumInfoList = [];
          this.subjectList = [];
          this.sectionList = [];
          this.selectedClass = {};
          this.selectedMedium = [];
          this.teachersList = [];
          this.taxonObj = {};
          this.ppSchBaseDetails = [];
          this.schClsList = [];

          this.getSchoolInfo = function (schoolId) {
            debugger;
            var records = {
              school_class_info: _this.masterApiResponse.school_class_info,
              reasons: _this.masterApiResponse.teacher_reasons,
              subjects: []
            };
            var totalRecords = records;
            _this.teacherReasons = records.reasons;
            _this.teacherReasons = _this.filterListByLang(_this.teacherReasons);
            localStorage.setItem("teacherlength", _this.masterApiResponse.teacher_details.length);
            var school_type = localStorage.getItem("selectedschooltype");
            var class_available;
            var class_available_string;

            if (localStorage.getItem("veracity_type") != 'inspection') {
              class_available_string = localStorage.getItem("selectedClasses");
              class_available = class_available_string.split(',');
              console.log(class_available[0]);
              console.log(class_available[class_available.length - 1]);
            }

            _this.classInfoList = records.school_class_info;

            if (_this.usertype == 8) {
              _this.classInfoList = _this.classInfoList.filter(function (data) {
                if (Number(data.class_id) >= 1 && Number(data.class_id) <= 12) {
                  return data;
                }
              });
            } else {
              _this.classInfoList = _this.classInfoList.filter(function (data) {
                if (localStorage.getItem("veracity_type") != 'inspection') {
                  if (Number(_this.usertype) == 24 && data.class_id < 13) {
                    return data;
                  } else {
                    if (Number(school_type) == 1 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                      return data;
                    } else if (Number(school_type) == 2 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                      return data;
                    } else if (Number(school_type) == 3 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                      return data;
                    } else if (school_type == null && data.class_id < 13) {
                      return data;
                    }
                  }
                } else if (localStorage.getItem("veracity_type") == 'inspection') {
                  if (data.class_id < 13) {
                    return data;
                  }
                }
              });
            }

            console.log(_this.classInfoList);
            var logData = {
              username: localStorage.getItem("username"),
              udise_code: localStorage.getItem("udise_code"),
              observation_id: localStorage.getItem("observation_id"),
              form_name: "Class List",
              action_name: "Class List Data",
              data: "Class info list : " + JSON.stringify(_this.classInfoList),
              completion_percentage: _this.progressValue
            };

            _this._apiService.setActivityLog(logData).subscribe(function (response) {}, function (error) {
              _this._alertService.showAlert("SOMETHING WENT WRONG");
            });

            var idx = Math.floor(Math.random() * _this.classInfoList.length);
            _this.randomClass = _this.classInfoList[idx];

            if (_this.randomClass == undefined) {
              _this.selectedSection = undefined;

              _this.showQuestionsAlert();
            }

            if (_this.randomClass) {
              var sections = _this.randomClass.section.split(",");

              var sectionsIdx = Math.floor(Math.random() * sections.length);
              _this.randomSection = sections[sectionsIdx];
              _this.selectedSection = _this.randomSection;
              localStorage.setItem('selectedClassSection', _this.selectedSection);
              var anotherSections = sections.splice(sectionsIdx, 1);
              _this.classInfoList[idx].section = sections.join(",");

              if (_this.classInfoList[idx].section == '') {
                _this.classInfoList.splice(idx, 1);
              }
            }

            var logDataNew = {
              username: localStorage.getItem("username"),
              udise_code: localStorage.getItem("udise_code"),
              observation_id: localStorage.getItem("observation_id"),
              form_name: "Randamized class",
              action_name: "On Select",
              data: "Selected Class : " + _this.randomClass.class_id + ", Selected Section : " + _this.randomSection,
              completion_percentage: _this.progressValue
            };

            _this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
              _this._alertService.showAlert("SOMETHING WENT WRONG");
            });

            var apiData = {
              pageNo: "6",
              pageName: "classRoom",
              apiResponse: {
                records: totalRecords
              },
              pageDetails: {
                teacherDetails: _this.teacherDetails,
                teacher_id: _this.teacher_id
              },
              correctedDetails: {
                regularTeacher: ""
              },
              tempInfo: {
                showDropdown: false
              },
              observationflow: _this.observationflow
            };
            debugger;
            _this.storeDetail.pages.pageData[5] = apiData;
            _this.storeDetail.pages.pageData[5].apiResponse.records.school_class_info = _this.classInfoList;

            _this.ionicStore.setStoreData(_this.storeDetail);

            localStorage.setItem('storedDetails', JSON.stringify(_this.storeDetail));

            if (_this.randomClass) {
              _this.getMediumList(_this.randomClass.class_id);
            }
          };

          this.selectStandard = function (type, standard, index) {
            var typeData = type;

            if (typeData == "checkbox") {
              _this.selectedStandardList = [];
              _this.classInfoList[index].checked = !standard.checked;
              _this.selectedStandardList = _this.classInfoList.filter(function (standard, index) {
                return standard.checked == true;
              });

              _this.getMediumList(_this.randomClass.class_id);
            } else {
              _this.selectedStandardList = [];
              _this.selectedStandardList[0] = standard;
              _this.sectionList = standard.section.split(",");

              _this.getMediumList(_this.randomClass.class_id);
            }
          };

          this.getMediumList = function (selectedStandardList) {
            debugger;
            var classIds = selectedStandardList;
            var allMediumList = _this.masterApiResponse.medium_info;
            var tempMediumList = [];
            _this.mediumInfoList = []; // this.mediumInfoList = allMediumList.sort((a,b) => (a.medium_desc > b.medium_desc) ? 1 : ((b.medium_desc > a.medium_desc) ? -1 : 0));

            _this.mediumInfoList = allMediumList.filter(function (x) {
              return x.medium_id == 16 || x.medium_id == 19;
            });
            console.log(_this.mediumInfoList, 'this.mediumInfoList');

            _this.mediumInfoList.forEach(function (data) {
              data["checked"] = false;
            });

            _this.storeDetail.pages.pageData[5].apiResponse.records["medium_info"] = _this.mediumInfoList;

            _this.ionicStore.setStoreData(_this.storeDetail);

            localStorage.setItem('storedDetails', JSON.stringify(_this.storeDetail));
          };

          this.selectobservation = function (type, observation, index) {
            _this.observationflow = observation[index].id;
          };

          this.customClassInfo = function (classInfoList) {
            classInfoList.forEach(function (data, index) {
              _this.classInfoList[index] = data;
              _this.classInfoList[index]["checked"] = false;
            });
          };
        }

        return _createClass(ClassroomComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var teacherInfo;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.userName = localStorage.getItem("username");
                    console.log(this.userName, 'this.userName');
                    this.schoolInfo = localStorage.getItem("schoolInfo");
                    this.schoolInfo = JSON.parse(this.schoolInfo);
                    teacherInfo = localStorage.getItem("teacherInfo");
                    this.schoolInfo = localStorage.getItem("schoolInfo");
                    this.schoolInfo = JSON.parse(this.schoolInfo);
                    this.progressValue = Math.round((3 - 2) / 12 * 100);
                    this.schClsList = [];
                    this.appLanguage();
                    this.gradeLabel = this.getGradeLabel();
                    this.loading.present();
                    this.ionicStore.getData('ppSchBaseDetails').then(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var _this3 = this;

                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              this.ppSchBaseDetails = data ? data : [];
                              _context.n = 1;
                              return this.ionicStore.getOffStorage().then(function (response) {
                                _this3.schClsList = response === null || response === void 0 ? void 0 : response.school_class_info.filter(function (obj) {
                                  return obj.class_id < 9;
                                }); // this.storage.get('offStoreData').then(response=>{

                                _this3.loading.dismiss();

                                _this3.masterApiResponse = response;

                                if (_this3.masterApiResponse == null) {
                                  _this3.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                                }

                                if (_this3.masterApiResponse == null || _this3.masterApiResponse == undefined) {
                                  var logDataNew = {
                                    username: localStorage.getItem("username"),
                                    udise_code: localStorage.getItem("udise_code"),
                                    observation_id: localStorage.getItem("observation_id"),
                                    form_name: "Get Stored Data",
                                    action_name: "Issue in Getting Stored Data in classroom page",
                                    data: "Issue in Getting Stored Data in classroom page" + JSON.stringify(_this3.masterApiResponse),
                                    completion_percentage: _this3.progressValue
                                  };

                                  _this3._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                                    _this3._alertService.showAlert("SOMETHING WENT WRONG");
                                  });
                                }

                                var teacherList = _this3.masterApiResponse.teacher_details;
                                _this3.teachersList = teacherList.sort(function (a, b) {
                                  return a.teacher_name > b.teacher_name ? 1 : b.teacher_name > a.teacher_name ? -1 : 0;
                                });

                                _this3.ionicStore.getStoreData().then(function (response) {
                                  _this3.storeDetail = response;
                                  console.log(_this3.storeDetail, 'this.storeDetail');

                                  if (_this3.storeDetail == null) {
                                    _this3.storeDetail = JSON.parse(localStorage.getItem('storedDetails'));
                                  }

                                  _this3.storeDetail.pages.currentPage = "classRoom";

                                  _this3.ionicStore.setStoreData(_this3.storeDetail);

                                  localStorage.setItem('storedDetails', JSON.stringify(_this3.storeDetail));
                                  _this3.usertype = _this3.userSessionService.emis_usertype();
                                  _this3.teachertype = _this3.userSessionService.teacher_type();
                                  var getFinalData = localStorage.getItem("finaldata");
                                  var level = localStorage.getItem("selectedlevel");

                                  if (Number(level) == 1) {
                                    if (_this3.storeDetail.pages.pageData[1].pageFlow == "emisVerification") {
                                      _this3.teacherDetails = _this3.storeDetail.pages.pageData[5]["pageDetails"].teacherDetails;
                                    }
                                  }

                                  if (_this3.storeDetail.pages.pageData[5] == undefined || !_this3.storeDetail.pages.pageData[5].pageDetails.selectedClass || getFinalData) {
                                    _this3.checkedValue = _this3.NewBoolean;
                                    _this3.regularTeacher = _this3.NewBoolean;
                                    _this3.showDropdown = _this3.NewBoolean;
                                    _this3.selectedMediumIds = [];
                                    _this3.selectedSubject = "";
                                    _this3.selectedTeacher = "";

                                    _this3.getSchoolInfo(_this3.storeDetail.pages.pageData[0].pageDetails.school_id);
                                  } else {
                                    _this3.selectedSubject = _this3.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id;
                                    _this3.selectedTeacher = _this3.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_id;
                                    _this3.checkedValue = "yes";
                                    _this3.regularTeacher = !_this3.NewBoolean;
                                    _this3.showDropdown = !_this3.NewBoolean;

                                    if (_this3.storeDetail.pages.pageData[5].apiResponse.records.medium_info != undefined) {
                                      // this.mediumInfoList = this.storeDetail.pages.pageData[5].apiResponse.records.medium_info;            
                                      _this3.mediumInfoList = _this3.storeDetail.pages.pageData[5].apiResponse.records.medium_info.filter(function (x) {
                                        return x.medium_id == 16 || x.medium_id == 19;
                                      });
                                      console.log(_this3.mediumInfoList, 'this.mediumInfoList');
                                      _this3.selectedMediumIds = _this3.mediumInfoList.map(function (data, index) {
                                        return data.checked == true ? data.medium_id : undefined;
                                      }).filter(function (x) {
                                        return x;
                                      });
                                      _this3.selectedMedium = _this3.mediumInfoList.filter(function (data, index) {
                                        return data.checked == true;
                                      });
                                    }

                                    _this3.subjectList = _this3.storeDetail.pages.pageData[5].apiResponse.records.subjects;
                                    _this3.randomClass = _this3.storeDetail.pages.pageData[5].pageDetails.selectedClass;
                                    _this3.randomSection = _this3.storeDetail.pages.pageData[5].pageDetails.section;
                                    var _logDataNew = {
                                      username: localStorage.getItem("username"),
                                      udise_code: localStorage.getItem("udise_code"),
                                      observation_id: localStorage.getItem("observation_id"),
                                      form_name: "Randamized class",
                                      action_name: "On Select",
                                      data: "Selected Class : " + _this3.randomClass.class_id + ", Selected Section : " + _this3.randomSection,
                                      completion_percentage: _this3.progressValue
                                    };

                                    _this3._apiService.setActivityLog(_logDataNew).subscribe(function (response) {}, function (error) {
                                      _this3._alertService.showAlert("SOMETHING WENT WRONG");
                                    });

                                    var pageDetails = _this3.storeDetail.pages.pageData[5].pageDetails;

                                    if (pageDetails.mediumInfo != undefined) {
                                      _this3.selectedMedium = pageDetails.mediumInfo;
                                      _this3.selectedSubject = pageDetails.subjectInfo.subject_id;
                                      _this3.selectedSubjectData = pageDetails.subjectInfo;
                                      _this3.selectedTeacher = _this3.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid;
                                      _this3.selectedTeacherData = pageDetails.teacherDetails;
                                      _this3.selectedMediumIds = pageDetails.mediumInfo[0].medium_id;
                                      _this3.randomClass = pageDetails.selectedClass;
                                      _this3.selectedSection = pageDetails.section;
                                      localStorage.setItem('selectedClassSection', _this3.selectedSection);

                                      if (pageDetails.classType == "2") {
                                        _this3.toggleMultigrade = true;
                                        _this3.showMonograde = false;
                                        _this3.classType = "2";
                                      } else {
                                        _this3.showMonograde = true;
                                        _this3.toggleMultigrade = false;
                                        _this3.classType = "1";
                                        _this3.randomClass = pageDetails.selectedClass;
                                        _this3.selectedSection = pageDetails.section;
                                        localStorage.setItem('selectedClassSection', _this3.selectedSection);
                                      }
                                    }
                                  }
                                });

                                _this3.loading.dismiss();

                                _this3.goToEmiVerify();
                              });

                            case 1:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    });
                    this.loading.dismiss();

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this4 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this4.languageType = data;

              _this4._translate.use(_this4.languageType);

              _this4._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this5 = this;

            if (this.storeDetail) {
              this.teacherReasons = this.filterListByLang(this.storeDetail.pages.pageData[5].apiResponse.records.reasons);
            }

            this._translate.get("observationToday").subscribe(function (res) {
              _this5.observationToday = res;
            });

            this._translate.get("classroomObservations").subscribe(function (res) {
              _this5.classroomObservations = res;
            });

            this._translate.get("assessments").subscribe(function (res) {
              _this5.assessments = res;
            });

            this._translate.get("classroom").subscribe(function (res) {
              _this5.classroom = res;
            });

            this._translate.get("class").subscribe(function (res) {
              _this5["class"] = res;
            });

            this._translate.get("todayObserving").subscribe(function (res) {
              _this5.todayObserving = res;
            });

            this._translate.get("classroomObserved").subscribe(function (res) {
              _this5.classroomObserved = res;
            });

            this._translate.get("Details").subscribe(function (res) {
              _this5.Details = res;
            });

            this._translate.get("yes").subscribe(function (res) {
              _this5.yes = res;
            });

            this._translate.get("no").subscribe(function (res) {
              _this5.no = res;
            });

            this._translate.get("giveReason").subscribe(function (res) {
              _this5.giveReason = res;
            });

            this._translate.get("takeAttendance").subscribe(function (res) {
              _this5.takeAttendance = res;
            });

            this._translate.get("selectTeacher").subscribe(function (res) {
              _this5.selectTeacher = res;
            });

            this._translate.get("doIt").subscribe(function (res) {
              _this5.doIt = res;
            });

            this._translate.get("giveSubject").subscribe(function (res) {
              _this5.giveSubject = res;
            });

            this._translate.get("giveMedium").subscribe(function (res) {
              _this5.giveMedium = res;
            });

            this._translate.get("giveClass").subscribe(function (res) {
              _this5.giveClass = res;
            });

            this._translate.get("giveSection").subscribe(function (res) {
              _this5.giveSection = res;
            });

            this._translate.get("Selection").subscribe(function (res) {
              _this5.Selection = res;
            });

            this._translate.get("multigrade").subscribe(function (res) {
              _this5.multigrade = res;
            });

            this._translate.get("monograde").subscribe(function (res) {
              _this5.monograde = res;
            });

            this._translate.get("teacherResponsible").subscribe(function (res) {
              _this5.teacherResponsible = res;
            });

            this._translate.get("selectSubject").subscribe(function (res) {
              _this5.selectSubject = res;
            });

            this._translate.get("mediumInstruction").subscribe(function (res) {
              _this5.mediumInstruction = res;
            });

            this._translate.get("selectSection").subscribe(function (res) {
              _this5.selectSection = res;
            });

            this._translate.get("teacherClass").subscribe(function (res) {
              _this5.teacherClass = res;
            });

            this._translate.get("noSubject").subscribe(function (res) {
              _this5.noSubject = res;
            });

            this._translate.get("noneAbove").subscribe(function (res) {
              _this5.noneAbove = res;
            });

            this._translate.get("noSection").subscribe(function (res) {
              _this5.noSection = res;
            });

            this._translate.get("med").subscribe(function (res) {
              _this5.med = res;
            });

            this._translate.get("noMedium").subscribe(function (res) {
              _this5.noMedium = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this5.Note = res;
            });

            this._translate.get("ok").subscribe(function (res) {
              _this5.ok = res;
            });

            this._translate.get("cancel").subscribe(function (res) {
              _this5.cancel = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this5.back = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this5.save = res;
            });

            this._translate.get("noStudents").subscribe(function (res) {
              _this5.noStudents = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this5.next = res;
            });

            this._translate.get("multigradeSingleOptionMessage").subscribe(function (res) {
              _this5.multigradeSingleOptionMessage = res;
            });
          }
        }, {
          key: "filterListByLang",
          value: function filterListByLang(list) {
            switch (this.languageType) {
              case "en":
                list = list.filter(function (sr) {
                  return sr.language_id == 2;
                });
                break;

              case "ta":
                list = list.filter(function (sr) {
                  return sr.language_id == 1;
                });

              default:
                break;
            }

            return list;
          }
        }, {
          key: "getGradeLabel",
          value: function getGradeLabel() {
            switch (this.classType) {
              case "1":
              case 1:
                return this.monograde;

              case "2":
              case 2:
                return this.multigrade;

              default:
                return this.multigrade + '/' + this.monograde;
            }
          }
        }, {
          key: "isClassAvailable",
          value: function isClassAvailable() {
            return this.classInfoList.find(function (x) {
              return Number(x.class_id) == 1 || Number(x.class_id) == 2 || Number(x.class_id) == 3 || Number(x.class_id) == 4 || Number(x.class_id) == 5;
            });
          }
        }, {
          key: "showQuestionsAlert",
          value: function showQuestionsAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this6 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: "",
                      cssClass: "my-custom-class",
                      backdropDismiss: false,
                      message: "No More Classes",
                      buttons: [{
                        text: "ok",
                        handler: function handler() {
                          _this6.ionViewWillEnter();
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
          key: "presentModald",
          value: function presentModald(listedValue, type, correction, showCategory) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this7 = this;

              var modal;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                      componentProps: {
                        listedValue: listedValue,
                        actualValue: "",
                        divisionType: type,
                        correction: correction,
                        showCategory: showCategory
                      },
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context4.v;
                    modal.onDidDismiss().then(function (response) {
                      if (response.data != "Cancel") {
                        _this7.class_id = response.data;
                        _this7.changedValue = response.data;
                        _this7.isChanged = true;
                      }
                    });
                    _context4.n = 2;
                    return modal.present();

                  case 2:
                    return _context4.a(2, _context4.v);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "mySelectHandler",
          value: function mySelectHandler(event) {
            var classRoomType = event.target.value;
            this.checkedValue = "";
            this.selectedStandardList = [];
            this.customClassInfo(this.classInfoList);

            if (Number(classRoomType) == 1) {
              this.showMonograde = true;
              this.toggleMultigrade = false;
              this.classType = 1;
              this.mediumInfoList = [];
              this.selectedMedium = [];
              this.subjectList = [];
              this.selectedSubject = "undefined";
            } else {
              this.toggleMultigrade = true;
              this.showMonograde = false;
              this.classType = 2;
              this.mediumInfoList = [];
              this.selectedMedium = [];
              this.subjectList = [];
              this.selectedSubject = "undefined";
            }

            this.gradeLabel = this.getGradeLabel();
            this.storeDetail.pages.pageData[5].apiResponse.records.medium_info = this.mediumInfoList.sort(function (a, b) {
              return a.medium_desc > b.medium_desc ? 1 : b.medium_desc > a.medium_desc ? -1 : 0;
            });
            ;
            this.storeDetail.pages.pageData[5].apiResponse.records.subjects = this.subjectList;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var modal;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.modalController.create({
                      component: src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_6__.ClassroommodalComponent,
                      cssClass: " my-custom-modal-classroom"
                    });

                  case 1:
                    modal = _context5.v;
                    _context5.n = 2;
                    return modal.present();

                  case 2:
                    return _context5.a(2, _context5.v);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "mediumSelectHandler",
          value: function mediumSelectHandler(event) {
            var _this8 = this;

            debugger;
            var selectedMediumList = [];
            this.mediumInfoList.forEach(function (data) {
              if (Number(data.medium_id) == Number(event)) {
                data.checked = true;
                selectedMediumList.push(data);
              }
            });
            this.selectedMedium = selectedMediumList;
            this.taxonObj['mediumId'] = event;
            localStorage.setItem('taxonObj', JSON.stringify(this.taxonObj));
            this.storeDetail.pages.pageData[5].apiResponse.records.medium_info = this.mediumInfoList.sort(function (a, b) {
              return a.medium_desc > b.medium_desc ? 1 : b.medium_desc > a.medium_desc ? -1 : 0;
            });
            ;
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            var selectedClass = this.randomClass.class_id;
            var classDetail = {
              class_id: selectedClass,
              medium_id: selectedMediumList
            }; // let allSubjectData = this.masterApiResponse.subjects_all;        
            // let subjects = [];     
            // allSubjectData.forEach((data)=>{         
            //   const classes = data.class_id.split(",")            
            //     classDetail.medium_id.forEach(mediumelement => {          
            //       // if(mediumelement!="1"||mediumelement!="2"){
            //       //   if(classDetail.medium_id.length==1 && mediumelement.medium_id == "1"){
            //       //     mediumelement = mediumelement
            //       //   }
            //       //   else{              
            //       //     mediumelement.medium_id  = "2"
            //       //   }            
            //       // }
            //       if(mediumelement){
            //         if(classDetail.medium_id.length==1){
            //           mediumelement = mediumelement
            //         }           
            //       }
            //       if(classes.includes(this.randomClass.class_id) && data.medium==mediumelement.medium_id){          
            //         if(subjects.indexOf(data)==-1){
            //           subjects.push(data)
            //         }          
            //       }        
            //     });      
            // }
            // )    
            // this.subjectList = subjects;

            var idArr = [0, 1];
            debugger;
            var arrayData = [];
            var rawData = this.masterApiResponse.subjects_all;
            rawData.forEach(function (dd) {
              var _a;

              var splitData = (_a = dd.class_id) === null || _a === void 0 ? void 0 : _a.split(",");

              if (splitData != undefined && splitData != null) {
                splitData.forEach(function (ee) {
                  if (+ee == +_this8.selectClass) {
                    if (arrayData.length > 0) {
                      var errorData = arrayData.filter(function (ff) {
                        return ff.subject_id == dd.subject_id;
                      });

                      if (errorData.length == 0) {
                        arrayData.push(dd);
                      }
                    } else {
                      arrayData.push(dd);
                    }
                  }
                });
              }
            });
            var data = this.masterApiResponse.subjects_all.filter(function (item) {
              var _a;

              var splitdata = (_a = item.class_id) === null || _a === void 0 ? void 0 : _a.split(',');

              if (splitdata != undefined && splitdata != null) {
                splitdata.forEach(function (element) {
                  if (+element == +_this8.selectClass) {
                    return true;
                  }
                }); // item.class_id.split(',') == this.selectClass
              }
            });
            console.log('sub', data);
            console.log('arrayData', arrayData);
            console.log(this.masterApiResponse.subjects_all, 'this.masterApiResponse.subjects_all');
            console.log(data, 'datadatadatadatadata');
            this.subjectList = arrayData; //  this.subjectList =  this.masterApiResponse.subjects_all;    

            this.storeDetail.pages.pageData[5].apiResponse.records.subjects = this.subjectList;
            console.log(this.storeDetail.pages.pageData[5].apiResponse.records.subjects, 'his.storeDetail.pages.pageData[5].apiResponse.records.subjects');
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
          }
        }, {
          key: "sectionHandler",
          value: function sectionHandler(event) {
            this.selectedSection = event;
            localStorage.setItem('selectedClassSection', this.selectedSection);
          }
        }, {
          key: "subjectSelectHandler",
          value: function subjectSelectHandler(event) {
            var _this9 = this;

            var _a;

            debugger;
            this.masterApiResponse.OmrQuestionsData = [];
            var classId = Number((_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id); // let classId = 65

            var subject = Number(event);
            this.taxonObj['classId'] = classId;
            this.taxonObj['subject'] = subject;
            localStorage.setItem('taxonObj', JSON.stringify(this.taxonObj));
            fetch('https://d1wpyxz35bzzz4.cloudfront.net/pp_omr_questions_' + classId + '_' + subject + '.json').then(function (res) {
              return res.json();
            }).then(function (res) {
              _this9.masterApiResponse.StuAssQuestion = res.taxonomys;
              res.questions.forEach(function (v) {
                v["class"] = v["class"].toString();
                v.medium = v.medium.toString();
                v.subject = v.subject.toString();

                _this9.masterApiResponse.OmrQuestionsData.push(v);
              });

              _this9.ionicStore.setOffStorage(_this9.masterApiResponse);

              console.log(_this9.masterApiResponse.OmrQuestionsData, 'this.masterApiResponse.OmrQuestionsData'); // localStorage.setItem("masterdata",JSON.stringify(this.masterApiResponse))
            });
            var subject_data = this.subjectList.filter(function (data) {
              if (Number(data.subject_id) == event) {
                return data;
              }
            });
            this.selectedSubject = event;
            this.selectedSubjectData = subject_data[0];
          }
        }, {
          key: "AssessmentSelectHandler",
          value: function AssessmentSelectHandler(event) {
            var assessment_data = this.ObservationOptions.filter(function (data) {
              if (Number(data.id) == event) {
                return data;
              }
            });
          }
        }, {
          key: "teacherSelectHandler",
          value: function teacherSelectHandler(event) {
            debugger;
            this.masterApiResponse['basic_info']['teacher_emisid'] = event;
            console.log(event);
            var teacher_data = this.teachersList.filter(function (data) {
              if (Number(data.teacher_id) == event) {
                return data;
              }
            });
            this.selectedTeacher = event;
            this.storeDetail.pages.pageData[5].pageDetails.teacherDetails = teacher_data[0];
            this.storeDetail.pages.pageData[5].pageDetails.teacher_id = teacher_data[0].teacher_id;
            this.selectedTeacherData = teacher_data[0];
            this.ionicStore.setStoreData(this.storeDetail);
            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
            localStorage.setItem("teacherInfo", JSON.stringify(teacher_data[0]));
          }
        }, {
          key: "selectMonoStandard",
          value: function selectMonoStandard(type, event) {
            var typeData = type;
            var standard = this.classInfoList.filter(function (tt) {
              return tt.class_id == event;
            });
            this.selectedStandardList = [];
            this.selectedStandardList[0] = standard[0];

            if (this.sectionList.length == 0) {
              this.sectionList = standard[0].section.split(",");
            }

            this.getMediumList(this.randomClass.class_id);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.toggleMultigrade = false;
            this.showMonograde = false;
          }
        }, {
          key: "isEmptyObject",
          value: function isEmptyObject(obj) {
            var name;

            for (name in obj) {
              return false;
            }

            return true;
          }
        }, {
          key: "showStudentsAlert",
          value: function showStudentsAlert() {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this0 = this;

              var logData, alert;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    this.showDropdown = '';
                    logData = {
                      username: localStorage.getItem("username"),
                      udise_code: localStorage.getItem("udise_code"),
                      form_name: "Students Api",
                      action_name: "Students Api Data",
                      data: "Students not available : " + JSON.stringify(this.masterApiResponse.StudentsData) + ",Class :" + ((_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id) + ",Section :" + this.randomSection,
                      completion_percentage: "0"
                    };

                    this._apiService.setActivityLog(logData).subscribe(function (response) {}, function (error) {
                      _this0._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                    _context6.n = 1;
                    return this.alertController.create({
                      header: "",
                      cssClass: "my-custom-class",
                      backdropDismiss: false,
                      message: "Students is not available in this class.please click ok to proceed",
                      buttons: [{
                        text: "ok",
                        handler: function handler() {
                          _this0.mySelectReason("Student not available");
                        }
                      }]
                    });

                  case 1:
                    alert = _context6.v;
                    _context6.n = 2;
                    return alert.present();

                  case 2:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getStudentsData",
          value: function getStudentsData() {
            var _a, _b, _c;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this1 = this;

              var classDetails, uniqueId;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    classDetails = {
                      "school_id": this.storeDetail.pages.pageData[0].pageDetails.school_id,
                      "class": (_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id,
                      "section": this.randomSection
                    };
                    this.selectClass = (_b = this.randomClass) === null || _b === void 0 ? void 0 : _b.class_id;
                    uniqueId = this.userName + this.storeDetail.pages.pageData[0].pageDetails.school_id + ((_c = this.randomClass) === null || _c === void 0 ? void 0 : _c.class_id) + this.randomSection;
                    console.log(uniqueId, 'uniqueId');
                    localStorage.setItem("uniqueId", uniqueId);
                    _context8.n = 1;
                    return this._apiService.getAllStudentsByClass(classDetails).subscribe(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this1, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
                        var _d;

                        return _regenerator().w(function (_context7) {
                          while (1) switch (_context7.n) {
                            case 0:
                              this.loading.dismiss();

                              if (!(data.status == 200 && data.dataStatus == true)) {
                                _context7.n = 3;
                                break;
                              }

                              if (((_d = data.records.StudentsData) === null || _d === void 0 ? void 0 : _d.all) == false) {
                                this.tempStudentsdata = false;

                                if (this.tempStudentsdata == false) {
                                  this.showStudentsAlert();
                                }
                              } else {
                                this.tempStudentsdata = true;
                              }

                              _context7.n = 1;
                              return data.records.StudentsData;

                            case 1:
                              this.masterApiResponse.StudentsData = _context7.v;
                              localStorage.setItem("studentsData", JSON.stringify(data.records.StudentsData));
                              _context7.n = 2;
                              return this.ionicStore.setStudentsData(data.records.StudentsData);

                            case 2:
                              _context7.n = 3;
                              break;

                            case 3:
                              return _context7.a(2);
                          }
                        }, _callee7, this);
                      }));
                    }, function (error) {
                      _this1._alertService.showAlert("Choose another school");

                      _this1.loading.dismiss();
                    });

                  case 1:
                    return _context8.a(2);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "goToStudentAttendance",
          value: function goToStudentAttendance() {
            var _a, _b, _c;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var _this10 = this;

              var checkObser, classDetails, logDataNew, classInfo, previousMedium, currentMedium, previousClass, currentClass, a, temp_SelectedClassIds;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    debugger;

                    if (((_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id) < 6 && this.ObservationOptions.length && this.showDropdown) {
                      checkObser = true;
                    } else {
                      checkObser = false;
                    }

                    console.log(this.selectedMediumIds + this.selectedSubject + this.selectedTeacher + this.checkedAssessments);

                    if (!(this.selectedMediumIds.length != 0 && this.selectedMediumIds != null && this.selectedMediumIds != undefined)) {
                      _context0.n = 20;
                      break;
                    }

                    if (!(this.selectedSubject != '' && this.selectedSubject != null && this.selectedSubject != undefined)) {
                      _context0.n = 18;
                      break;
                    }

                    if (!(this.selectedTeacher != '' && this.selectedTeacher != null && this.selectedTeacher != undefined)) {
                      _context0.n = 16;
                      break;
                    }

                    debugger;

                    if (!(this.checkedAssessments != '' && this.checkedAssessments != null && this.checkedAssessments != undefined && checkObser == true || (this.checkedAssessments == '' || this.checkedAssessments == undefined) && checkObser == false)) {
                      _context0.n = 14;
                      break;
                    }

                    _context0.n = 1;
                    return this.loading.present();

                  case 1:
                    classDetails = {
                      "school_id": this.storeDetail.pages.pageData[0].pageDetails.school_id,
                      "class": (_b = this.randomClass) === null || _b === void 0 ? void 0 : _b.class_id,
                      "section": this.randomSection
                    };
                    _context0.n = 2;
                    return this._apiService.getAllStudentsByClass(classDetails).subscribe(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
                        var _d;

                        return _regenerator().w(function (_context9) {
                          while (1) switch (_context9.n) {
                            case 0:
                              if (!(data.status == 200 && data.dataStatus == true)) {
                                _context9.n = 3;
                                break;
                              }

                              if (((_d = data.records.StudentsData) === null || _d === void 0 ? void 0 : _d.all) == false) {
                                this.tempStudentsdata = false;
                              } else {
                                this.tempStudentsdata = true;
                              }

                              _context9.n = 1;
                              return data.records.StudentsData;

                            case 1:
                              this.masterApiResponse.StudentsData = _context9.v;
                              _context9.n = 2;
                              return this.ionicStore.setStudentsData(data.records.StudentsData);

                            case 2:
                              this.loading.dismiss();
                              _context9.n = 4;
                              break;

                            case 3:
                              this.loading.dismiss();

                            case 4:
                              return _context9.a(2);
                          }
                        }, _callee9, this);
                      }));
                    }, function (error) {
                      _this10._alertService.showAlert("Choose another school");

                      _this10.loading.dismiss();
                    });

                  case 2:
                    this.masterApiResponse.school_class_info = this.masterApiResponse.school_class_info.filter(function (data) {
                      var _a;

                      if (Number(data.class_id) != Number((_a = _this10.randomClass) === null || _a === void 0 ? void 0 : _a.class_id)) {
                        return data;
                      }
                    });
                    this.ionicStore.setOffStorage(this.masterApiResponse);

                    if (this.storeDetail.pages.pageData[5] == undefined) {
                      this.getSchoolInfo(this.storeDetail.pages.pageData[0].pageDetails.school_id);
                    }

                    logDataNew = {
                      username: localStorage.getItem("username"),
                      udise_code: localStorage.getItem("udise_code"),
                      observation_id: localStorage.getItem("observation_id"),
                      form_name: "Medium ,Subject",
                      action_name: "On form submission",
                      data: "Selected Medium : " + this.selectedMedium[0].medium_desc + ", Selected Subject : " + this.selectedSubjectData.subject,
                      completion_percentage: this.progressValue
                    };

                    this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                      _this10._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                    classInfo = {
                      mediumInfo: this.selectedMedium,
                      subjectInfo: this.selectedSubjectData,
                      classType: this.classType,
                      selectedClass: this.randomClass,
                      section: this.randomSection,
                      teacherDetails: this.selectedTeacherData,
                      teacher_id: this.selectedTeacher.teacher_id
                    };

                    if ((_c = this.storeDetail.pages.pageData[5].pageDetails.correctedDetails) === null || _c === void 0 ? void 0 : _c.regularTeacher) {
                      this.storeDetail.pages.pageData[5].pageDetails.correctedDetails.regularTeacher = true;
                    }

                    if (!(this.randomClass != undefined)) {
                      _context0.n = 11;
                      break;
                    }

                    if (!this.selectedMedium.length) {
                      _context0.n = 9;
                      break;
                    }

                    if (!(this.selectedSubject != "undefined" && this.selectedSubject != "")) {
                      _context0.n = 7;
                      break;
                    }

                    if (!(this.selectedTeacher != "undefined" && this.selectedTeacher != "")) {
                      _context0.n = 5;
                      break;
                    }

                    if (this.storeDetail.pages.pageData[5].pageDetails.mediumInfo) {
                      previousMedium = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map(function (el) {
                        return el.medium_id;
                      });
                      currentMedium = classInfo.mediumInfo.map(function (el) {
                        return el.medium_id;
                      });

                      if (previousMedium.toString() == currentMedium.toString() && this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id == classInfo.subjectInfo.subject_id && this.storeDetail.pages.pageData[5].pageDetails.classType == classInfo.classType) {
                        previousClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id;
                        currentClass = this.randomClass.class_id;

                        if (this.classType == "1") {
                          if (this.randomSection != this.storeDetail.pages.pageData[5].pageDetails.section) {
                            this.ionicStore.setStoreData(this.storeDetail);
                            localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                          }
                        }

                        if (previousClass.toString() != currentClass.toString()) {
                          this.ionicStore.setStoreData(this.storeDetail);
                          localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                        }
                      } else {
                        a = JSON.parse(JSON.stringify(this.storeDetail));
                        this.ionicStore.setStoreData(this.storeDetail);
                        localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                      }
                    } else {
                      this.storeDetail.pages.pageData[5]["pageDetails"] = classInfo;
                      this.storeDetail.pages.pageData[5]["correctedDetails"] = classInfo.selectedClass;
                    }

                    this.storeDetail.pages.pageData[5].pageDetails = classInfo;
                    this.storeDetail.pages.pageData[5].correctedDetails = classInfo.selectedClass;
                    temp_SelectedClassIds = classInfo.selectedClass.class_id;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    _context0.n = 3;
                    return this.ionicStore.setStoreData(this.storeDetail);

                  case 3:
                    localStorage.setItem('storedDetails', JSON.stringify(this.storeDetail));
                    _context0.n = 4;
                    return this.pageRedirect();

                  case 4:
                    _context0.n = 6;
                    break;

                  case 5:
                    this._alertService.showAlert("Please select the teacher");

                  case 6:
                    _context0.n = 8;
                    break;

                  case 7:
                    this._alertService.showAlert(this.giveSubject);

                  case 8:
                    _context0.n = 10;
                    break;

                  case 9:
                    this._alertService.showAlert(this.giveMedium);

                  case 10:
                    _context0.n = 12;
                    break;

                  case 11:
                    this._alertService.showAlert("Class not available please check"); // let getFinalData = localStorage.getItem("finaldata")
                    // if(getFinalData){
                    // this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                    // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1")}});
                    // }else{
                    // this._router.navigate(["/tnvntabs/page-route/hodinspection"]);
                    // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'classroom_section_status': localStorage.setItem('classroom_section_status', "1")}});
                    // }      


                  case 12:
                    _context0.n = 13;
                    return this.loading.dismiss();

                  case 13:
                    _context0.n = 15;
                    break;

                  case 14:
                    this._alertService.showAlert("Please Select Observation");

                  case 15:
                    _context0.n = 17;
                    break;

                  case 16:
                    this._alertService.showAlert("Please Select Teacher");

                  case 17:
                    _context0.n = 19;
                    break;

                  case 18:
                    this._alertService.showAlert("Please Select Subject");

                  case 19:
                    _context0.n = 21;
                    break;

                  case 20:
                    this._alertService.showAlert("Please Select Medium");

                  case 21:
                    ;
                    this.loading.dismiss();

                  case 22:
                    return _context0.a(2);
                }
              }, _callee0, this);
            }));
          }
        }, {
          key: "mySelectReason",
          value: function mySelectReason(event) {
            var _this11 = this;

            if (event != undefined) {
              this.selectedReason = event;
              this.classInfoList = this.classInfoList.filter(function (data) {
                return Number(data.class_id) != 13 && Number(data.class_id) != 14;
              });
              var school_type = localStorage.getItem("selectedschooltype");
              var class_available;
              var class_available_string;

              if (localStorage.getItem("veracity_type") != 'inspection') {
                class_available_string = localStorage.getItem("selectedClasses");
                class_available = class_available_string.split(',');
                console.log(class_available[0]);
                console.log(class_available[class_available.length - 1]);
              }

              if (this.usertype == 8) {
                this.classInfoList = this.classInfoList.filter(function (data) {
                  if (Number(data.class_id) >= 1 && Number(data.class_id) <= 12) {
                    return data;
                  }
                });
              } else {
                this.classInfoList = this.classInfoList.filter(function (data) {
                  if (localStorage.getItem("veracity_type") != 'inspection') {
                    if (Number(_this11.usertype) == 24 && data.class_id < 13) {
                      return data;
                    } else {
                      if (Number(school_type) == 1 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                        return data;
                      } else if (Number(school_type) == 2 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                        return data;
                      } else if (Number(school_type) == 3 && Number(data.class_id) >= Number(class_available[0]) && Number(data.class_id) <= Number(class_available[class_available.length - 1])) {
                        return data;
                      } else if (school_type == null && data.class_id < 13) {
                        return data;
                      }
                    }
                  } else if (localStorage.getItem("veracity_type") == 'inspection') {
                    if (data.class_id < 13) {
                      return data;
                    }
                  }
                });
              }

              console.log(this.classInfoList);
              var idx = Math.floor(Math.random() * this.classInfoList.length);
              this.randomClass = this.classInfoList[idx];

              if (this.randomClass == undefined) {
                this.selectedSection = undefined;
                this.showQuestionsAlert();
              }

              if (this.randomClass != undefined) {
                var sections = this.randomClass.section.split(",");
                var sectionsIdx = Math.floor(Math.random() * sections.length);
                this.randomSection = sections[sectionsIdx];
                this.selectedSection = this.randomSection;
                localStorage.setItem('selectedClassSection', this.selectedSection);
                var anotherSections = sections.splice(sectionsIdx, 1);
                this.classInfoList[idx].section = sections.join(",");
              }

              if (this.classInfoList[idx].section == '') {
                this.classInfoList.splice(idx, 1);
              }

              this.storeDetail.pages.pageData[5].apiResponse.records.school_class_info = this.classInfoList;

              if (this.randomClass) {
                this.getMediumList(this.randomClass.class_id);
              }

              var logDataNew = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Randamized class",
                action_name: "On Select",
                data: "Selected Class : " + this.randomClass.class_id + ", Selected Section : " + this.randomSection,
                completion_percentage: this.progressValue
              };

              this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                _this11._alertService.showAlert("SOMETHING WENT WRONG");
              });

              this.regularTeacher = this.NewBoolean;
              this.checkedValue = this.regularTeacher;
              var teacherReason = {
                reason: this.selectedReason,
                description: "Reason for not observing class"
              };
              this.storeDetail.pages.pageData[5].pageDetails["reasonDetails"] = teacherReason;
              this.selectedReason = undefined;
            }
          }
        }, {
          key: "mediumSelectHandlerMultiple",
          value: function mediumSelectHandlerMultiple(event) {}
        }, {
          key: "pageRedirect",
          value: function pageRedirect() {
            var _a;

            localStorage.setItem("checkedAssessments", this.checkedAssessments);
            this.storeDetail.pages.pageData[0].pageDetails.school_id;
            var level = localStorage.getItem("selectedlevel");
            var isRegularTeacher = this.storeDetail.pages.pageData[5].correctedDetails.regularTeacher;

            if (this.storeDetail.pages.pageData[5].pageDetails) {
              var classData = this.storeDetail.pages.pageData[5].pageDetails;
              var classInfo = {
                mediumInfo: classData.mediumInfo,
                subjectInfo: classData.subjectInfo,
                classType: classData.classType,
                class_id: (_a = this.randomClass) === null || _a === void 0 ? void 0 : _a.class_id
              };
              localStorage.setItem("classInfo", JSON.stringify(classInfo));
            }

            if (this.tempStudentsdata == false) {
              this.showStudentsAlert();
            } else {
              if (this.classType == "2") {
                if (Number(level) > 1) {
                  if (isRegularTeacher) {
                    if (Number(this.storeDetail.pages.pageData[5].observationflow) == 1) {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                        }
                      });
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                        }
                      });
                    }
                  } else {
                    if (this.storeDetail.pages.pageData[5].pageDetails.classType == '2') {
                      this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0];
                    }

                    if (this.selectedClass.class_id == '9' || this.selectedClass.class_id == '10' || this.selectedClass.class_id == '11' || this.selectedClass.class_id == '12') {
                      var _level = localStorage.getItem("selectedlevel");

                      var getfinaldata = localStorage.getItem("finaldata");
                      var getteacherlength = localStorage.getItem("teacherlength");

                      if (_level != '1' && !getfinaldata && Number(getteacherlength) > 1) {
                        // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]); 
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                          }
                        });
                      } else if (_level == '1' && !getfinaldata) {
                        // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);  
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                          }
                        });
                      } else {
                        // this._router.navigate(["/tnvntabs/page-route/observation/updateObservation"]);  
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                          }
                        });
                      }
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                        }
                      });
                    }
                  }
                } else {
                  this._router.navigate(["/tnvntabs/page-route/index"], {
                    queryParams: {
                      'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                    }
                  });
                }
              } else if (this.selectedSection != undefined) {
                if (Number(level) > 1) {
                  if (isRegularTeacher) {
                    if (Number(this.storeDetail.pages.pageData[5].observationflow) == 1) {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                        }
                      });
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                        }
                      });
                    }
                  } else {
                    if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '9' || this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '10' || this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '11' || this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id == '12') {
                      var _level2 = localStorage.getItem("selectedlevel");

                      var _getfinaldata = localStorage.getItem("finaldata");

                      var _getteacherlength = localStorage.getItem("teacherlength");

                      if (_level2 != '1' && !_getfinaldata && Number(_getteacherlength) > 1) {
                        // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);   
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                          }
                        });
                      } else if (_level2 == '1' && !_getfinaldata) {
                        // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);  
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                          }
                        });
                      } else {
                        // this._router.navigate(["/tnvntabs/page-route/observation/updateObservation"]);\
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                          }
                        });
                      }
                    } else {
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                        }
                      });
                    }
                  }
                } else {
                  this._router.navigate(["/tnvntabs/page-route/index"], {
                    queryParams: {
                      'classroom_section_status': localStorage.setItem('classroom_section_status', "1")
                    }
                  });
                }
              } else {
                this._alertService.showAlert(this.giveSection);
              }
            }
          }
        }, {
          key: "goToEmiVerify",
          value: function goToEmiVerify() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
              var _this12 = this;

              var JsonData, basic_info, level, createdby_role_id, usertype, veracity_type, _this$findCurrSchDeta, isLocationVerify, userLat, userLng, schoollatimg, isPhotoVerified, localSvAPiCall;

              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    debugger;
                    JsonData = [];
                    basic_info = {
                      "basic_info": {}
                    };
                    level = localStorage.getItem("selectedlevel");
                    createdby_role_id = localStorage.getItem("createdby_role");
                    usertype = localStorage.getItem("usertype");
                    veracity_type = localStorage.getItem("veracity_type");
                    basic_info["basic_info"]["level"] = level;
                    basic_info["basic_info"]["createdby_role"] = createdby_role_id;
                    basic_info["basic_info"]["veracity_type"] = veracity_type;
                    basic_info["basic_info"]["created_by"] = localStorage.getItem("username");
                    basic_info["basic_info"]["school_id"] = this.masterApiResponse.basic_info.school_id;
                    basic_info["basic_info"]["school_name"] = this.masterApiResponse.basic_info.school_name;
                    basic_info["basic_info"]["district_id"] = this.masterApiResponse.basic_info.dist_id;
                    basic_info["basic_info"]["district_name"] = this.masterApiResponse.basic_info.district_name;
                    basic_info["basic_info"]["edu_dist_id"] = this.masterApiResponse.basic_info.edu_dist_id;
                    basic_info["basic_info"]["edu_dist_name"] = this.masterApiResponse.basic_info.edu_dist_name;
                    basic_info["basic_info"]["block_id"] = this.masterApiResponse.basic_info.block_id;
                    basic_info["basic_info"]["block_name"] = this.masterApiResponse.basic_info.block_name; // basic_info["basic_info"]["zone_id"] = this.masterApiResponse.basic_info.nodal_id;

                    basic_info["basic_info"]["workflow"] = localStorage.getItem("selectedWorkflow");

                    if (this.findCurrSchDetails(basic_info["basic_info"]["school_id"])) {
                      _this$findCurrSchDeta = this.findCurrSchDetails(basic_info["basic_info"]["school_id"]), isLocationVerify = _this$findCurrSchDeta.isLocationVerify, userLat = _this$findCurrSchDeta.userLat, userLng = _this$findCurrSchDeta.userLng, schoollatimg = _this$findCurrSchDeta.schoollatimg, isPhotoVerified = _this$findCurrSchDeta.isPhotoVerified;
                      debugger;
                      basic_info["basic_info"]["latitude"] = userLat;
                      basic_info["basic_info"]["longitude"] = userLng;
                      basic_info["basic_info"]["school_photo"] = schoollatimg;
                      basic_info["basic_info"]["photo_taken"] = isPhotoVerified;
                      basic_info["basic_info"]["location_verified"] = isLocationVerify;
                    }

                    JsonData.push(basic_info);
                    console.log(basic_info, 'basic_info');
                    localSvAPiCall = localStorage.getItem("saveApiCall");

                    if (localSvAPiCall == '0') {
                      this._apiService.postfinalinfo({
                        json: JSON.stringify(JsonData)
                      }).subscribe(function (data) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
                          var idx, _t;

                          return _regenerator().w(function (_context1) {
                            while (1) switch (_context1.p = _context1.n) {
                              case 0:
                                _context1.p = 0;

                                if (!(data.status == 200 && data.dataStatus == true)) {
                                  _context1.n = 1;
                                  break;
                                }

                                idx = this.ppSchBaseDetails.findIndex(function (obj) {
                                  return obj.school_id == basic_info["basic_info"]["school_id"];
                                });

                                if (idx != 0) {
                                  this.ppSchBaseDetails[idx].schoollatimg = '';
                                  this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(function () {});
                                }

                                localStorage.setItem("observation_id", data === null || data === void 0 ? void 0 : data.records);
                                localStorage.setItem("saveApiCall", '1');
                                _context1.n = 2;
                                break;

                              case 1:
                                throw data.msg;

                              case 2:
                                _context1.n = 4;
                                break;

                              case 3:
                                _context1.p = 3;
                                _t = _context1.v;

                                this._alertService.showAlert(_t);

                              case 4:
                                return _context1.a(2);
                            }
                          }, _callee1, this, [[0, 3]]);
                        }));
                      }, function (error) {
                        _this12._alertService.showAlert(error);
                      });
                    }

                  case 1:
                    return _context10.a(2);
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "findCurrSchDetails",
          value: function findCurrSchDetails(school_id) {
            var idx = this.ppSchBaseDetails.findIndex(function (obj) {
              return obj.school_id == school_id;
            });
            console.log(this.ppSchBaseDetails[idx], this.ppSchBaseDetails);
            return this.ppSchBaseDetails[idx];
          }
        }, {
          key: "Onnextnavigate",
          value: function Onnextnavigate(data) {
            this._router.navigate(['/tabs/dynamic-table-list'], {
              queryParams: {
                'formId': 234,
                param1: this.schoolInfo.schoolId,
                param2: data.class_id,
                naviBackUrl: "/tnvntabs/page-route/classroom"
              },
              skipLocationChange: true
            });
          }
        }]);
      }();

      _ClassroomComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_8__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__.Storage
        }];
      };

      _ClassroomComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: "app-classroom",
        template: _raw_loader_classroom_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_classroom_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClassroomComponent);
      /***/
    },

    /***/
    23631:
    /*!**********************************************************!*\
      !*** ./src/app/pages/tnvn/classroom/classroom.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClassroomModule": function ClassroomModule() {
          return (
            /* binding */
            _ClassroomModule
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


      var _classroom_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./classroom.component */
      33195);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _classroom_component__WEBPACK_IMPORTED_MODULE_0__.ClassroomComponent
      }];

      var _ClassroomModule = /*#__PURE__*/_createClass(function ClassroomModule() {
        _classCallCheck(this, ClassroomModule);
      });

      _ClassroomModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_classroom_component__WEBPACK_IMPORTED_MODULE_0__.ClassroomComponent],
        entryComponents: []
      })], _ClassroomModule);
      /***/
    },

    /***/
    47224:
    /*!***********************************************************!*\
      !*** ./src/app/services/tnvn/services/loading.service.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoadingService": function LoadingService() {
          return (
            /* binding */
            _LoadingService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _LoadingService = /*#__PURE__*/function () {
        function LoadingService(loadingController) {
          _classCallCheck(this, LoadingService);

          this.loadingController = loadingController;
          this.isLoading = false;
        }

        return _createClass(LoadingService, [{
          key: "present",
          value: function present(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee11() {
              var _this13 = this;

              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.n) {
                  case 0:
                    this.isLoading = true;
                    _context11.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this13.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context11.a(2, _context11.v);
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee12() {
              var _this14 = this;

              return _regenerator().w(function (_context12) {
                while (1) switch (_context12.n) {
                  case 0:
                    this.isLoading = true;
                    _context12.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this14.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context12.a(2, _context12.v);
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee13() {
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.n) {
                  case 0:
                    this.isLoading = false;
                    _context13.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context13.a(2, _context13.v);
                }
              }, _callee13, this);
            }));
          }
        }]);
      }();

      _LoadingService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController
        }];
      };

      _LoadingService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _LoadingService);
      /***/
    },

    /***/
    62296:
    /*!***************************************************************!*\
      !*** ./src/app/pages/tnvn/classroom/classroom.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".Class1 {\n  --background: #fff;\n  --color: #353fa1;\n}\n\n.Class2 {\n  --background: #b8bef0;\n  --color: #353fa1;\n}\n\n.Class3 {\n  --background: #5c69f3;\n  --color: #fff;\n}\n\n.Class4 {\n  --background: #ded162;\n}\n\n.Class5 {\n  --background: #e8be68;\n}\n\n.Class6 {\n  --background: #80afe8;\n}\n\n.Class7 {\n  --background: #b180e8;\n}\n\n.Class8 {\n  --background: #73b6d1;\n}\n\n.Class9 {\n  --background: #73d1b2;\n}\n\n.Class10 {\n  --background: #b3c969;\n}\n\n.Class11 {\n  --background: #6972c9;\n}\n\n.Class12 {\n  --background: #c96969;\n}\n\n.classList {\n  margin: 15px auto;\n  border-radius: 15px;\n  border: 1px solid #353fa1;\n  overflow: hidden;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzcm9vbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiY2xhc3Nyb29tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNsYXNzMSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWNvbG9yOiAjMzUzZmExO1xyXG59XHJcblxyXG4uQ2xhc3MyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2I4YmVmMDtcclxuICAgIC0tY29sb3I6ICMzNTNmYTE7XHJcbn1cclxuXHJcbi5DbGFzczMge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNWM2OWYzO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLkNsYXNzNCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNkZWQxNjI7XHJcbn1cclxuXHJcbi5DbGFzczUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZThiZTY4O1xyXG59XHJcblxyXG4uQ2xhc3M2IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzgwYWZlODtcclxufVxyXG5cclxuLkNsYXNzNyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNiMTgwZTg7XHJcbn1cclxuXHJcbi5DbGFzczgge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzNiNmQxO1xyXG59XHJcblxyXG4uQ2xhc3M5IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzczZDFiMjtcclxufVxyXG5cclxuLkNsYXNzMTAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYjNjOTY5O1xyXG59XHJcblxyXG4uQ2xhc3MxMSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM2OTcyYzk7XHJcbn1cclxuXHJcbi5DbGFzczEyIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2M5Njk2OTtcclxufVxyXG5cclxuLmNsYXNzTGlzdCB7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzUzZmExO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    735:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/classroom/classroom.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n            <b>{{ this.classroom }}<br />{{this.Selection}}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <div class=\"content-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <b>\r\n        <p class=\"color-dgrey\"> {{schoolInfo?.schoolName}} </p>\r\n      </b>\r\n    </ion-text>\r\n\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"color-dgrey\" style=\"font-size:20px\"> {{todayObserving}} <br /><b>{{class}} {{randomClass?.class_id}}\r\n          {{selectedSection}} </b></p>\r\n    </ion-text>\r\n\r\n    <ion-list lines=\"none\">\r\n      <p class=\"text-center mb-0\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{classroomObserved}}</p>\r\n      <ion-radio-group [(ngModel)]=\"checkedValue\">\r\n        <div class=\"radio-toggle\">\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"yes\" (click)=\"regularTeacher=true;showDropdown=true;getStudentsData()\">\r\n            </ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{yes}}\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"no\" (click)=\"regularTeacher=false;showDropdown=false\"></ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{no}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"none\">\r\n      <div *ngIf=\"regularTeacher==false\">\r\n        <ion-item style=\"border:1 px solid #000\">\r\n          <ion-label>Select Reason</ion-label>\r\n          <ion-select [(ngModel)]=\"selectedReason\" (ngModelChange)=\"mySelectReason($event)\"\r\n            *ngIf=\"teacherReasons.length\">\r\n            <ion-select-option *ngFor=\"let reason_info of teacherReasons\" [value]=\"reason_info.reason\">{{\r\n              reason_info.reason }}</ion-select-option>\r\n            <ion-select-option [value]=\"'none'\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{ this.noneAbove\r\n              }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <ion-item *ngIf=\"mediumInfoList.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{ this.mediumInstruction }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedMediumIds\" (ngModelChange)=\"mediumSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let mediumData of mediumInfoList\" [value]=\"mediumData.medium_id\">{{\r\n            mediumData.medium_desc }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"subjectList.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{ this.selectSubject }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedSubject\" (ngModelChange)=\"subjectSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let subjectData of subjectList\" [value]=\"subjectData.subject_id\">{{\r\n            subjectData.subject }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"teachersList.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{ this.selectTeacher }} </ion-label>\r\n        <ion-select [(ngModel)]=\"selectedTeacher\" (ngModelChange)=\"teacherSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let teacherData of teachersList\" [value]=\"teacherData.teacher_id\">{{\r\n            teacherData.teacher_name }} ({{teacherData.teacher_id}})\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"randomClass?.class_id<6&&ObservationOptions.length&&showDropdown\" class=\"border\">\r\n        <ion-label> {{observationToday}} </ion-label>\r\n        <ion-select [(ngModel)]=\"checkedAssessments\" (ngModelChange)=\"AssessmentSelectHandler($event)\">\r\n          <ion-select-option *ngFor=\"let observationData of ObservationOptions\" [value]=\"observationData.name\">{{\r\n            observationData.name }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n      <!-- <div class=\"p-2\" *ngIf=\"this.usertype==39\">\r\n        <h6>Student spot assessment</h6>\r\n       <div class=\"row\">\r\n        <div class=\"col-6\" *ngFor=\"let clsItem of schClsList\">\r\n          <ion-button class=\"Class{{clsItem.class_id}} classList\" expand=\"full\" (click)=\"Onnextnavigate(clsItem)\">\r\n            <div>Class {{clsItem.class_id}}</div>\r\n          </ion-button>\r\n        </div>\r\n       </div>\r\n      </div> -->\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" [routerLink]=\"['/tnvntabs/page-route/dashboardc']\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\">{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToStudentAttendance()\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\">{{ this.save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_classroom_classroom_module_ts-es5.js.map