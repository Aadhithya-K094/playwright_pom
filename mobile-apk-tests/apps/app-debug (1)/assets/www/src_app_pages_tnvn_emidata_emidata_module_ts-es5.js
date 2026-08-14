(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_emidata_emidata_module_ts"], {
    /***/
    9229:
    /*!*********************************************************!*\
      !*** ./src/app/pages/tnvn/emidata/emidata.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmidataComponent": function EmidataComponent() {
          return (
            /* binding */
            _EmidataComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_emidata_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./emidata.component.html */
      4774);
      /* harmony import */


      var _emidata_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./emidata.component.scss */
      62675);
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


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/post.service */
      62538);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/emimodal/emimodal.component */
      79615);

      var _EmidataComponent = /*#__PURE__*/function () {
        function EmidataComponent(loading, modalController, _router, _apiService, activatedRoute, _alertService, _postService, ionicStore, _translate) {
          var _this = this;

          _classCallCheck(this, EmidataComponent);

          this.loading = loading;
          this.modalController = modalController;
          this._router = _router;
          this._apiService = _apiService;
          this.activatedRoute = activatedRoute;
          this._alertService = _alertService;
          this._postService = _postService;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.classList = [];
          this.check = true;
          this.totalNumberOfBoys = 0;
          this.totalNumberOfGirls = 0;
          this.totalNoOfStudents = 0;
          this.actualValueList = [];
          this.emisdata = {};
          this.listedDistrict = false;
          this.listedEduDistrict = false;
          this.listedBlock = false;
          this.listedZone = false;
          this.listedTotalTeachers = false;
          this.listedTotalStudents = false;
          this.correctedDistrict = "";
          this.correctedEduDistrict = "";
          this.correctedBlock = "";
          this.correctedZone = "";
          this.correctedTotalTeachers = "";
          this.correctedTotalStudents = "";
          this.correctedClass = [];
          this.isOpen = false;
          this.districtList = [];
          this.eduDistList = [];
          this.blockList = [];
          this.zoneList = [];
          this.submitted = false;

          this.getSchoolDetails = function (schoolId) {
            debugger;
            var records = {
              nodal_name: _this.masterApiResponse.basic_info.nodal_name,
              nodal_id: _this.masterApiResponse.basic_info.nodal_id,
              dist_id: _this.masterApiResponse.basic_info.dist_id,
              edu_dist_id: _this.masterApiResponse.basic_info.edu_dist_id,
              block_id: _this.masterApiResponse.basic_info.block_id,
              block_name: _this.masterApiResponse.basic_info.block_name,
              edu_dist_name: _this.masterApiResponse.basic_info.edu_dist_name,
              district_name: _this.masterApiResponse.basic_info.district_name,
              total: _this.masterApiResponse.basic_info.total,
              catty_id: _this.masterApiResponse.basic_info.catty_id,
              cate_type: _this.masterApiResponse.basic_info.cate_type,
              teach_tot: _this.masterApiResponse.basic_info.teach_tot,
              nonteach_tot: _this.masterApiResponse.basic_info.nonteach_tot,
              totstaff: _this.masterApiResponse.basic_info.totstaff,
              total_students: _this.masterApiResponse.basic_info.total_students,
              school_name: _this.masterApiResponse.basic_info.school_name,
              school_id: _this.masterApiResponse.basic_info.school_id,
              udise_code: _this.masterApiResponse.basic_info.udise_code,
              class_info: _this.masterApiResponse.class_info,
              districts: _this.masterApiResponse.districts
            };
            _this.schoolDetails = records;
            _this.actualDetails = records;
            var schoolData = {
              schoolId: _this.schoolDetails.school_id,
              schoolName: _this.schoolDetails.school_name,
              distName: _this.schoolDetails.district_name,
              eduDistName: _this.schoolDetails.edu_dist_name,
              blockName: _this.schoolDetails.block_name,
              cateType: _this.schoolDetails.cate_type
            };
            _this.classList = _this.schoolDetails.class_info.filter(function (data, index) {
              return Number(data.total) != 0;
            });
            _this.classList = _this.schoolDetails.class_info.filter(function (data, index) {
              return Number(data.total) != 0;
            });
            _this.classList = _this.classList.filter(function (data) {
              if (Number(_this.masterApiResponse.type) == 1) {
                data.correctedgirls = 0;
              } else if (Number(_this.masterApiResponse.type) == 2) {
                data.correctedboys = 0;
              }

              data.TotalStudents = 0;
              return data;
            });

            _this.addCorrectedVariable();

            localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
            var apiData = {
              pageNo: "3",
              pageName: "emidata",
              apiResponse: {
                records: _this.schoolDetails
              },
              pageDetails: {},
              correctedDetails: {},
              correctedClass: _this.correctedClass
            };
            _this.storeDetail.pages.pageData[2] = apiData;

            _this.ionicStore.setStoreData(_this.storeDetail);

            localStorage.setItem("storedDetails", JSON.stringify(_this.storeDetail));
          };
        }

        return _createClass(EmidataComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    debugger;
                    this.loading.present();
                    this.progressValue = 72;
                    this.appLanguage();
                    _context2.n = 1;
                    return this.ionicStore.getOffStorage().then(function (response) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var _this3 = this;

                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              if (response) {
                                this.masterApiResponse = response;

                                if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
                                  this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                                }
                              }

                              this.inspectionType = localStorage.getItem("veracity_type");
                              _context.n = 1;
                              return this.ionicStore.getStoreData().then(function (response) {
                                _this3.storeDetail = response;

                                if (_this3.storeDetail == null || _this3.storeDetail == undefined) {
                                  _this3.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                                }

                                _this3.storeDetail.pages.currentPage = "emidata";

                                _this3.ionicStore.setStoreData(_this3.storeDetail);

                                localStorage.setItem("storedDetails", JSON.stringify(_this3.storeDetail));

                                if (_this3.storeDetail.pages.pageData[2] == undefined || _this3.storeDetail.pages.pageData[2] == null) {
                                  _this3.getSchoolDetails(_this3.storeDetail.pages.pageData[0].pageDetails.school_id);
                                } else {
                                  _this3.schoolDetails = _this3.storeDetail.pages.pageData[2].apiResponse.records;
                                  _this3.actualDetails = _this3.storeDetail.pages.pageData[2].apiResponse.records;
                                  _this3.classList = _this3.schoolDetails.class_info.filter(function (data, index) {
                                    return data.total != 0;
                                  });
                                  _this3.classList = _this3.classList.filter(function (data) {
                                    if (!data.TotalStudents) {
                                      data.TotalStudents = 0;
                                    }

                                    return data;
                                  });
                                  _this3.correctedClass = _this3.storeDetail.pages.pageData[2].correctedClass;
                                  var correctedValue = _this3.storeDetail.pages.pageData[2].correctedDetails;

                                  if (Object.keys(correctedValue).length) {
                                    _this3.correctedDistrict = correctedValue.district_name;
                                    _this3.correctedEduDistrict = correctedValue.edu_district_name;
                                    _this3.correctedBlock = correctedValue.block_name;
                                    _this3.correctedZone = correctedValue.nodal_name;
                                    _this3.correctedTotalTeachers = correctedValue.teachers_alloted;
                                    _this3.vacancies = correctedValue.vacancies;
                                    _this3.correctedTotalStudents = correctedValue.total_students;
                                    _this3.totalNoOfStudents = correctedValue.totalNoOfStudents;
                                    _this3.totalNumberOfBoys = correctedValue.totalNumberOfBoys;
                                    _this3.totalNumberOfGirls = correctedValue.totalNumberOfGirls;
                                    _this3.teacherSanctionedValue = correctedValue.teacherSanctioned;
                                    _this3.teacherSanctionedPostValue = correctedValue.teacherSanctionedPost;
                                    _this3.teachersAvailableValue = correctedValue.teachersAvailable;
                                    _this3.teachersDeputationSameSchoolValue = correctedValue.teachersDeputationSameSchool;
                                    _this3.teachersDeputationOtherSchoolValue = correctedValue.teachersDeputationOtherSchool;
                                    _this3.teachersOnLongLeaveValue = correctedValue.teachersOnLongLeave;
                                    _this3.listedZone = _this3.correctedZone != "" ? false : true, _this3.listedBlock = _this3.correctedBlock != "" ? false : true, _this3.listedEduDistrict = _this3.correctedEduDistrict != "" ? false : true, _this3.listedDistrict = _this3.correctedDistrict != "" ? false : true, _this3.listedTotalStudents = _this3.correctedTotalStudents != "" ? false : true, _this3.listedTotalTeachers = _this3.correctedTotalTeachers != "" ? false : true;
                                  }
                                }
                              });

                            case 1:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    });

                  case 1:
                    this.loading.dismiss();

                  case 2:
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

            this._translate.get("Verification").subscribe(function (res) {
              _this5.Verification = res;
            });

            this._translate.get("school").subscribe(function (res) {
              _this5.school = res;
            });

            this._translate.get("register").subscribe(function (res) {
              _this5.register = res;
            });

            this._translate.get("schoolDetails").subscribe(function (res) {
              _this5.schoolDetail = res;
            });

            this._translate.get("studentEnroll").subscribe(function (res) {
              _this5.studentEnroll = res;
            });

            this._translate.get("teacherPosition").subscribe(function (res) {
              _this5.teacherPosition = res;
            });

            this._translate.get("validate").subscribe(function (res) {
              _this5.validate = res;
            });

            this._translate.get("emisNote").subscribe(function (res) {
              _this5.emisNote = res;
            });

            this._translate.get("shareonwhatsapp").subscribe(function (res) {
              _this5.shareonwhatsapp = res;
            });

            this._translate.get("primary").subscribe(function (res) {
              _this5.primary = res;
            });

            this._translate.get("secondary").subscribe(function (res) {
              _this5.secondary = res;
            });

            this._translate.get("middle").subscribe(function (res) {
              _this5.middle = res;
            });

            this._translate.get("district").subscribe(function (res) {
              _this5.district = res;
            });

            this._translate.get("numbersRequired").subscribe(function (res) {
              _this5.numbersRequired = res;
            });

            this._translate.get("educationalDistrict").subscribe(function (res) {
              _this5.educationalDistrict = res;
            });

            this._translate.get("block").subscribe(function (res) {
              _this5.block = res;
            });

            this._translate.get("zone").subscribe(function (res) {
              _this5.zone = res;
            });

            this._translate.get("giveCheck").subscribe(function (res) {
              _this5.giveCheck = res;
            });

            this._translate.get("teachersTotal").subscribe(function (res) {
              _this5.teachersTotal = res;
            });

            this._translate.get("studentsTotal").subscribe(function (res) {
              _this5.studentsTotal = res;
            });

            this._translate.get("boysTotal").subscribe(function (res) {
              _this5.boysTotal = res;
            });

            this._translate.get("girlsTotal").subscribe(function (res) {
              _this5.girlsTotal = res;
            });

            this._translate.get("class").subscribe(function (res) {
              _this5["class"] = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this5.back = res;
            });

            this._translate.get("teacherSanctioned").subscribe(function (res) {
              _this5.teacherSanctioned = res;
            });

            this._translate.get("teacherSanctionedPost").subscribe(function (res) {
              _this5.teacherSanctionedPost = res;
            });

            this._translate.get("teachersAvailable").subscribe(function (res) {
              _this5.teachersAvailable = res;
            });

            this._translate.get("teachersDeputationSameSchool").subscribe(function (res) {
              _this5.teachersDeputationSameSchool = res;
            });

            this._translate.get("teachersDeputationOtherSchool").subscribe(function (res) {
              _this5.teachersDeputationOtherSchool = res;
            });

            this._translate.get("teachersOnLongLeave").subscribe(function (res) {
              _this5.teachersOnLongLeave = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this5.next = res;
            });

            this._translate.get("vacanciesTotal").subscribe(function (res) {
              _this5.vacanciesTotal = res;
            });

            this._translate.get("teacherSanctionedRequired").subscribe(function (res) {
              _this5.teacherSanctionedRequired = res;
            });

            this._translate.get("districtNameRequired").subscribe(function (res) {
              _this5.districtNameRequired = res;
            });

            this._translate.get("eduDistrictNameRequired").subscribe(function (res) {
              _this5.eduDistrictNameRequired = res;
            });

            this._translate.get("blockNameRequired").subscribe(function (res) {
              _this5.blockNameRequired = res;
            });

            this._translate.get("nodalNameRequired").subscribe(function (res) {
              _this5.nodalNameRequired = res;
            });

            this._translate.get("totalStudentsRequired").subscribe(function (res) {
              _this5.totalStudentsRequired = res;
            });

            this._translate.get("teachersAvailableRequired").subscribe(function (res) {
              _this5.teachersAvailableRequired = res;
            });

            this._translate.get("teachersDeputationSameSchoolRequired").subscribe(function (res) {
              _this5.teachersDeputationSameSchoolRequired = res;
            });

            this._translate.get("teachersDeputationOtherSchoolRequired").subscribe(function (res) {
              _this5.teachersDeputationOtherSchoolRequired = res;
            });

            this._translate.get("teachersOnLongLeaveRequired").subscribe(function (res) {
              _this5.teachersOnLongLeaveRequired = res;
            });
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(event) {
            var pattern = /^([0-9])$/;
            var result = pattern.test(event.data);

            if (result == true) {
              return event;
            } else {
              event.target.value = event.target.value.slice(0, -1);
            }
          }
        }, {
          key: "presentModal",
          value: function presentModal(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var selectedGender, selectedIndex, _t;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    this.presentValue = listedValue;
                    this.divisionType = type;
                    _t = this.divisionType;
                    _context3.n = _t === "district" ? 1 : _t === "edu_district" ? 2 : _t === "block" ? 3 : _t === "zone" ? 4 : 5;
                    break;

                  case 1:
                    this.getDistrictList(listedValue, type, correction, showCategory, gender, index);
                    return _context3.a(3, 6);

                  case 2:
                    this.getEducationalDistrictList(listedValue, type, correction, showCategory, gender, index);
                    return _context3.a(3, 6);

                  case 3:
                    this.getBlocksList(listedValue, type, correction, showCategory, gender, index);
                    return _context3.a(3, 6);

                  case 4:
                    this.getZoneList(listedValue, type, correction, showCategory, gender, index);
                    return _context3.a(3, 6);

                  case 5:
                    this.getCountData(listedValue, type, correction, showCategory, gender, index);
                    return _context3.a(3, 6);

                  case 6:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDistrictList",
          value: function getDistrictList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this6 = this;

              var selectedGender, selectedIndex, modal;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    this.schoolDetails.districts.forEach(function (data) {
                      if (data.district_name != _this6.presentValue) {
                        _this6.actualValueList.push({
                          id: data.id,
                          item: data.district_name
                        });
                      }
                    });
                    _context4.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                      componentProps: {
                        listedValue: listedValue,
                        actualValue: this.actualValueList,
                        divisionType: this.divisionType,
                        correction: correction,
                        showCategory: showCategory
                      },
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context4.v;
                    modal.onDidDismiss().then(function (response) {
                      _this6.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this6.schoolDetails.dist_id = response.data.id;
                        _this6.correctedDistrict = response.data.item;
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
          key: "getEducationalDistrictList",
          value: function getEducationalDistrictList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this7 = this;

              var selectedGender, selectedIndex, districtDetail, temp_eduDistrictList, modal;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    districtDetail = {
                      district_id: this.schoolDetails.dist_id
                    };
                    temp_eduDistrictList = this.masterApiResponse.obs_info.edu_dist.filter(function (data) {
                      return data.district_id == _this7.schoolDetails.dist_id;
                    });
                    temp_eduDistrictList.forEach(function (data) {
                      if (data.edn_dist_name != _this7.presentValue) {
                        _this7.actualValueList.push({
                          id: data.id,
                          item: data.edn_dist_name
                        });
                      }
                    });
                    _context5.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                      componentProps: {
                        listedValue: listedValue,
                        actualValue: this.actualValueList,
                        divisionType: this.divisionType,
                        correction: correction,
                        showCategory: showCategory
                      },
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context5.v;
                    modal.onDidDismiss().then(function (response) {
                      _this7.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this7.schoolDetails.edu_dist_id = response.data.id;
                        _this7.correctedEduDistrict = response.data.item;
                      }
                    });
                    _context5.n = 2;
                    return modal.present();

                  case 2:
                    return _context5.a(2, _context5.v);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getBlocksList",
          value: function getBlocksList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this8 = this;

              var selectedGender, selectedIndex, blockDetail, temp_blockList, modal;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    blockDetail = {
                      edu_dist_id: this.schoolDetails.edu_dist_id
                    };
                    temp_blockList = this.masterApiResponse.obs_info.blocks.filter(function (data) {
                      return data.edu_dist_id == _this8.schoolDetails.edu_dist_id;
                    });
                    temp_blockList.forEach(function (data) {
                      if (data.block_name != _this8.presentValue) {
                        _this8.actualValueList.push({
                          id: data.id,
                          item: data.block_name
                        });
                      }
                    });
                    _context6.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                      componentProps: {
                        listedValue: listedValue,
                        actualValue: this.actualValueList,
                        divisionType: this.divisionType,
                        correction: correction,
                        showCategory: showCategory
                      },
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context6.v;
                    modal.onDidDismiss().then(function (response) {
                      _this8.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this8.schoolDetails.block_id = response.data.id;
                        _this8.correctedBlock = response.data.item;
                      }
                    });
                    _context6.n = 2;
                    return modal.present();

                  case 2:
                    return _context6.a(2, _context6.v);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getZoneList",
          value: function getZoneList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this9 = this;

              var selectedGender, selectedIndex, zoneDetail, temp_ZoneList, modal;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    zoneDetail = {
                      block_id: this.schoolDetails.block_id
                    };
                    temp_ZoneList = [];
                    this.masterApiResponse.obs_info.nodals.forEach(function (data) {
                      if (data.edu_dist_id == _this9.schoolDetails.edu_dist_id && data.district_id == _this9.schoolDetails.dist_id && data.block_id == _this9.schoolDetails.block_id) {
                        temp_ZoneList.push(data);
                      }
                    });
                    _context7.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                      componentProps: {
                        listedValue: listedValue,
                        actualValue: this.actualValueList,
                        divisionType: this.divisionType,
                        correction: correction,
                        showCategory: showCategory
                      },
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context7.v;
                    modal.onDidDismiss().then(function (response) {
                      _this9.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this9.schoolDetails.school_id = response.data.id;
                        _this9.correctedZone = response.data.item;
                      }
                    });
                    _context7.n = 2;
                    return modal.present();

                  case 2:
                    return _context7.a(2, _context7.v);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getCountData",
          value: function getCountData(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this0 = this;

              var selectedGender, selectedIndex, modal;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    _context8.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_7__.EmimodalComponent,
                      componentProps: {
                        listedValue: listedValue,
                        actualValue: this.actualValueList,
                        divisionType: this.divisionType,
                        correction: correction,
                        showCategory: showCategory
                      },
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context8.v;
                    modal.onDidDismiss().then(function (response) {
                      _this0.actualValueList = [];

                      if (response.data != "Cancel") {
                        switch (_this0.divisionType) {
                          case "teacher_count":
                            {
                              _this0.correctedTotalTeachers = response.data;
                              break;
                            }

                          case "student_count":
                            {
                              _this0.correctedTotalStudents = response.data;
                              break;
                            }

                          case "count":
                            {
                              if (selectedGender == "girls") {
                                _this0.correctedClass[selectedIndex].girls = response.data.toString();
                                _this0.correctedClass[selectedIndex].showCorrected_Girls = true;
                                _this0.correctedClass[selectedIndex].listetClassGirls = true;
                              } else {
                                _this0.correctedClass[selectedIndex].boys = response.data.toString();
                                _this0.correctedClass[selectedIndex].showCorrected_Boys = true;
                                _this0.correctedClass[selectedIndex].listetClassBoys = true;
                              }

                              break;
                            }

                          default:
                            {
                              break;
                            }
                        }
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
        }, {
          key: "addCorrectedVariable",
          value: function addCorrectedVariable() {
            this.correctedClass.forEach(function (data, index) {
              data["listetClassBoys"] = false;
              data["listetClassGirls"] = false;
              data["showCorrected_Boys"] = false;
              data["showCorrected_Girls"] = false;
              data["checked"] = false;
            });
          }
        }, {
          key: "isAllClassChecked",
          value: function isAllClassChecked(currentValue, index, array) {
            return currentValue.correctedboys && currentValue.correctedgirls;
          }
        }, {
          key: "goToSelection",
          value: function goToSelection() {
            if (this.storeDetail.pages.pageData.length < 5) {
              this._router.navigate(["/tnvntabs/page-route/emiselection", this.schoolDetails.school_id]);
            } else {
              this._router.navigate(["/tnvntabs/page-route/dashboardc"]);
            }
          }
        }, {
          key: "selectedDistrict",
          value: function selectedDistrict(event) {
            if (event) {
              this.eduDistList = this.masterApiResponse.school_area_info.eduction_district.filter(function (data) {
                if (Number(data.district_id) == Number(event.district_id)) {
                  return data;
                }
              });
            }
          }
        }, {
          key: "selectedEduDistrict",
          value: function selectedEduDistrict(event) {
            if (event) {
              this.blockList = this.masterApiResponse.school_area_info.blocks.filter(function (data) {
                if (Number(data.edu_dist_id) == Number(event.edu_dist_id)) {
                  return data;
                }
              });
            }
          }
        }, {
          key: "selectedBlock",
          value: function selectedBlock(event) {
            if (event) {
              this.zoneList = this.masterApiResponse.school_area_info.zones.filter(function (data) {
                if (Number(data.block_id) == Number(event.block_id)) {
                  return data;
                }
              });
            }
          }
        }, {
          key: "selectedZone",
          value: function selectedZone(event) {}
        }, {
          key: "addBoys",
          value: function addBoys(data) {
            data.correctedboys.replace(/^.$/, '');

            if (!data.TotalStudents) {
              data.TotalStudents = 0;
            }

            if (data.correctedboys && data.correctedgirls) {
              data.TotalStudents = Number(data.correctedboys) + Number(data.correctedgirls);
            } else if (data.correctedboys && !data.correctedgirls) {
              data.TotalStudents = Number(data.correctedboys);
            } else if (data.correctedboys && data.correctedgirls == 0) {
              data.TotalStudents = Number(data.correctedboys);
            } else if (!data.correctedboys && data.correctedgirls) {
              data.TotalStudents = Number(data.correctedgirls);
            } else if (data.correctedboys == 0 && data.correctedgirls) {
              data.TotalStudents = Number(data.correctedgirls);
            }

            this.totalNumberOfBoys = 0;
            this.totalNumberOfGirls = 0;

            for (var i = 0; i < this.classList.length; i++) {
              if (this.classList[i].correctedboys && Number(this.classList[i].correctedboys) != undefined && Number(this.classList[i].correctedboys) != 0) {
                this.totalNumberOfBoys += Number(this.classList[i].correctedboys);
              }

              if (this.classList[i].correctedgirls && Number(this.classList[i].correctedgirls) != undefined && Number(this.classList[i].correctedgirls) != 0) {
                this.totalNumberOfGirls += Number(this.classList[i].correctedgirls);
              }
            }

            this.totalNoOfStudents = this.totalNumberOfBoys + this.totalNumberOfGirls;
            return data;
          }
        }, {
          key: "addGirls",
          value: function addGirls(data) {
            data.correctedgirls.replace(/^.$/, '');

            if (!data.TotalStudents) {
              data.TotalStudents = 0;
            }

            if (data.correctedboys && data.correctedgirls) {
              data.TotalStudents = Number(data.correctedboys) + Number(data.correctedgirls);
            } else if (data.correctedboys && !data.correctedgirls) {
              data.TotalStudents = Number(data.correctedboys);
            } else if (data.correctedboys && data.correctedgirls == 0) {
              data.TotalStudents = Number(data.correctedboys);
            } else if (!data.correctedboys && data.correctedgirls) {
              data.TotalStudents = Number(data.correctedgirls);
            } else if (data.correctedboys == 0 && data.correctedgirls) {
              data.TotalStudents = Number(data.correctedgirls);
            }

            this.totalNumberOfBoys = 0;
            this.totalNumberOfGirls = 0;

            for (var i = 0; i < this.classList.length; i++) {
              if (this.classList[i].correctedboys && Number(this.classList[i].correctedboys) != undefined) {
                this.totalNumberOfBoys += Number(this.classList[i].correctedboys);
              }

              if (this.classList[i].correctedgirls && Number(this.classList[i].correctedgirls) != undefined) {
                this.totalNumberOfGirls += Number(this.classList[i].correctedgirls);
              }
            }

            this.totalNoOfStudents = this.totalNumberOfBoys + this.totalNumberOfGirls;
            return data;
          }
        }, {
          key: "goToTeacherSelection",
          value: function goToTeacherSelection() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var nulldata, i, found, classList, created_on, pageDetails, correctedDetails, _nulldata, _found, _classList, _created_on, _pageDetails, _correctedDetails;

              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    this.correctedTotalStudents = this.totalNoOfStudents;

                    if (!(this.inspectionType == 'inspection' || this.inspectionType == 'veracity')) {
                      _context9.n = 9;
                      break;
                    }

                    if (!(this.correctedTotalStudents == "")) {
                      _context9.n = 1;
                      break;
                    }

                    this._alertService.showAlert("Please fill all inputs");

                    _context9.n = 8;
                    break;

                  case 1:
                    if (!(this.teacherSanctionedValue == null || this.teacherSanctionedValue == undefined || this.teacherSanctionedPostValue == null || this.teacherSanctionedPostValue == undefined || this.teachersAvailableValue == null || this.teachersAvailableValue == undefined || this.teachersDeputationSameSchoolValue == null || this.teachersDeputationSameSchoolValue == undefined || this.teachersDeputationOtherSchoolValue == null || this.teachersDeputationOtherSchoolValue == undefined || this.teachersOnLongLeaveValue == null || this.teachersOnLongLeaveValue == undefined || this.correctedTotalStudents == null || this.correctedTotalStudents == undefined)) {
                      _context9.n = 2;
                      break;
                    }

                    this._alertService.showAlert("Please fill all inputs");

                    this.submitted = true;
                    return _context9.a(2);

                  case 2:
                    nulldata = false;

                    if (!(this.classList.length > 0)) {
                      _context9.n = 5;
                      break;
                    }

                    i = 0;

                  case 3:
                    if (!(i < this.classList.length)) {
                      _context9.n = 5;
                      break;
                    }

                    if (!(this.classList[i].correctedboys == null || this.classList[i].correctedboys == undefined || this.classList[i].correctedgirls == null || this.classList[i].correctedgirls == undefined)) {
                      _context9.n = 4;
                      break;
                    }

                    this.submitted = true;

                    this._alertService.showAlert("Please fill all inputs");

                    nulldata = false;
                    return _context9.a(2);

                  case 4:
                    i++;
                    _context9.n = 3;
                    break;

                  case 5:
                    found = this.correctedClass.every(this.isAllClassChecked);

                    if (!found) {
                      _context9.n = 7;
                      break;
                    }

                    classList = [];
                    created_on = new Date();
                    created_on.toISOString();
                    pageDetails = {
                      nodal_id: this.schoolDetails.school_id,
                      nodal_name: this.correctedZone,
                      block_id: this.schoolDetails.block_id,
                      block_name: this.correctedBlock,
                      edu_district_id: this.schoolDetails.edu_dist_id,
                      edu_district_name: this.correctedEduDistrict,
                      district_id: this.schoolDetails.dist_id,
                      district_name: this.correctedDistrict,
                      created_on: created_on,
                      created_by: localStorage.getItem("username"),
                      teachers_alloted: this.correctedTotalTeachers,
                      total_students: this.correctedTotalStudents,
                      vacancies: this.vacancies,
                      classdata: this.classList,
                      teacherSanctioned: this.teacherSanctionedValue,
                      totalNumberOfBoys: this.totalNumberOfBoys,
                      totalNumberOfGirls: this.totalNumberOfGirls,
                      totalNoOfStudents: this.totalNoOfStudents,
                      teacherSanctionedPost: this.teacherSanctionedPostValue,
                      teachersAvailable: this.teachersAvailableValue,
                      teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                      teachersDeputationOtherSchool: this.teachersDeputationOtherSchoolValue,
                      teachersOnLongLeave: this.teachersOnLongLeaveValue
                    };
                    correctedDetails = {
                      nodal_id: this.schoolDetails.nodal_id,
                      nodal_name: this.correctedZone,
                      block_id: this.schoolDetails.block_id,
                      block_name: this.correctedBlock,
                      edu_district_id: this.schoolDetails.edu_dist_id,
                      edu_district_name: this.correctedEduDistrict,
                      district_id: this.schoolDetails.dist_id,
                      district_name: this.correctedDistrict,
                      created_on: created_on,
                      created_by: localStorage.getItem("username"),
                      teachers_alloted: this.correctedTotalTeachers,
                      total_students: this.correctedTotalStudents,
                      vacancies: this.vacancies,
                      classdata: this.classList,
                      totalNumberOfBoys: this.totalNumberOfBoys,
                      totalNumberOfGirls: this.totalNumberOfGirls,
                      totalNoOfStudents: this.totalNoOfStudents,
                      teacherSanctioned: this.teacherSanctionedValue,
                      teacherSanctionedPost: this.teacherSanctionedPostValue,
                      teachersAvailable: this.teachersAvailableValue,
                      teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                      teachersDeputationOtherSchool: this.teachersDeputationOtherSchoolValue,
                      teachersOnLongLeave: this.teachersOnLongLeaveValue
                    };
                    this.storeDetail.pages.pageData[2].pageDetails = pageDetails;
                    this.storeDetail.pages.pageData[2].correctedDetails = correctedDetails;
                    this.storeDetail.pages.pageData[2].correctedClass = this.classList;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    _context9.n = 6;
                    return this.ionicStore.setStoreData(this.storeDetail);

                  case 6:
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                    this._router.navigate(["/tnvntabs/page-route/emiverify", this.schoolDetails.school_id]);

                    _context9.n = 8;
                    break;

                  case 7:
                    this._alertService.showAlert("Please fill all inputs");

                  case 8:
                    _context9.n = 17;
                    break;

                  case 9:
                    if (!(this.correctedDistrict == "" || this.correctedEduDistrict == "" || this.correctedBlock == "" || this.correctedZone == "" || this.correctedTotalStudents == "")) {
                      _context9.n = 10;
                      break;
                    }

                    this._alertService.showAlert("Please fill all inputs");

                    _context9.n = 17;
                    break;

                  case 10:
                    if (!(this.teacherSanctionedValue == null || this.teacherSanctionedValue == undefined || this.teacherSanctionedPostValue == null || this.teacherSanctionedPostValue == undefined || this.teachersAvailableValue == null || this.teachersAvailableValue == undefined || this.teachersDeputationSameSchoolValue == null || this.teachersDeputationSameSchoolValue == undefined || this.teachersDeputationOtherSchoolValue == null || this.teachersDeputationOtherSchoolValue == undefined || this.teachersOnLongLeaveValue == null || this.teachersOnLongLeaveValue == undefined || this.correctedTotalStudents == null || this.correctedTotalStudents == undefined)) {
                      _context9.n = 11;
                      break;
                    }

                    this.submitted = true;

                    this._alertService.showAlert("Please fill all inputs");

                    return _context9.a(2);

                  case 11:
                    _nulldata = false;

                    if (!(this.classList.length > 0)) {
                      _context9.n = 14;
                      break;
                    }

                    i = 0;

                  case 12:
                    if (!(i < this.classList.length)) {
                      _context9.n = 14;
                      break;
                    }

                    if (!(this.classList[i].correctedboys == null || this.classList[i].correctedboys == undefined || this.classList[i].correctedgirls == null || this.classList[i].correctedgirls == undefined)) {
                      _context9.n = 13;
                      break;
                    }

                    this.submitted = true;
                    _nulldata = false;
                    return _context9.a(2);

                  case 13:
                    i++;
                    _context9.n = 12;
                    break;

                  case 14:
                    _found = this.correctedClass.every(this.isAllClassChecked);

                    if (!_found) {
                      _context9.n = 16;
                      break;
                    }

                    _classList = [];
                    _created_on = new Date();

                    _created_on.toISOString();

                    _pageDetails = {
                      nodal_id: this.schoolDetails.school_id,
                      nodal_name: this.correctedZone,
                      block_id: this.schoolDetails.block_id,
                      block_name: this.correctedBlock,
                      edu_district_id: this.schoolDetails.edu_dist_id,
                      edu_district_name: this.correctedEduDistrict,
                      district_id: this.schoolDetails.dist_id,
                      district_name: this.correctedDistrict,
                      created_on: _created_on,
                      created_by: localStorage.getItem("username"),
                      teachers_alloted: this.correctedTotalTeachers,
                      total_students: this.correctedTotalStudents,
                      vacancies: this.vacancies,
                      classdata: this.classList,
                      teacherSanctioned: this.teacherSanctionedValue,
                      teacherSanctionedPost: this.teacherSanctionedPostValue,
                      teachersAvailable: this.teachersAvailableValue,
                      totalNumberOfBoys: this.totalNumberOfBoys,
                      totalNumberOfGirls: this.totalNumberOfGirls,
                      totalNoOfStudents: this.totalNoOfStudents,
                      teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                      teachersDeputationOtherSchool: this.teachersDeputationOtherSchoolValue,
                      teachersOnLongLeave: this.teachersOnLongLeaveValue
                    };
                    _correctedDetails = {
                      nodal_id: this.schoolDetails.nodal_id,
                      nodal_name: this.correctedZone,
                      block_id: this.schoolDetails.block_id,
                      block_name: this.correctedBlock,
                      edu_district_id: this.schoolDetails.edu_dist_id,
                      edu_district_name: this.correctedEduDistrict,
                      district_id: this.schoolDetails.dist_id,
                      district_name: this.correctedDistrict,
                      created_on: _created_on,
                      created_by: localStorage.getItem("username"),
                      teachers_alloted: this.correctedTotalTeachers,
                      total_students: this.correctedTotalStudents,
                      vacancies: this.vacancies,
                      classdata: this.classList,
                      teacherSanctioned: this.teacherSanctionedValue,
                      teacherSanctionedPost: this.teacherSanctionedPostValue,
                      teachersAvailable: this.teachersAvailableValue,
                      totalNumberOfBoys: this.totalNumberOfBoys,
                      totalNumberOfGirls: this.totalNumberOfGirls,
                      totalNoOfStudents: this.totalNoOfStudents,
                      teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                      teachersDeputationOtherSchool: this.teachersDeputationOtherSchoolValue,
                      teachersOnLongLeave: this.teachersOnLongLeaveValue
                    };
                    this.storeDetail.pages.pageData[2].pageDetails = _pageDetails;
                    this.storeDetail.pages.pageData[2].correctedDetails = _correctedDetails;
                    this.storeDetail.pages.pageData[2].correctedClass = this.classList;
                    this.storeDetail.pages.currentProgress = this.progressValue;
                    _context9.n = 15;
                    return this.ionicStore.setStoreData(this.storeDetail);

                  case 15:
                    localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));

                    this._router.navigate(["/tnvntabs/page-route/emiverify", this.schoolDetails.school_id]);

                    _context9.n = 17;
                    break;

                  case 16:
                    this._alertService.showAlert("Please fill all inputs");

                  case 17:
                    return _context9.a(2);
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "checkActualData",
          value: function checkActualData(division, data) {
            this.divisionType = division;

            switch (this.divisionType) {
              case "district":
                {
                  this.schoolDetails.dist_id = data;
                  break;
                }

              case "edu_district":
                {
                  this.schoolDetails.edu_dist_id = data;
                  break;
                }

              case "block":
                {
                  this.schoolDetails.block_id = data;
                  break;
                }

              case "zone":
                {
                  this.schoolDetails.school_id = data;
                  break;
                }

              case "teacher_count":
                {
                  this.correctedTotalTeachers = data;
                  break;
                }

              case "student_count":
                {
                  this.correctedTotalStudents = data;
                  break;
                }

              default:
                {
                  break;
                }
            }
          }
        }]);
      }();

      _EmidataComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_5__.PostService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService
        }];
      };

      _EmidataComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-emidata",
        template: _raw_loader_emidata_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_emidata_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EmidataComponent);
      /***/
    },

    /***/
    31326:
    /*!******************************************************!*\
      !*** ./src/app/pages/tnvn/emidata/emidata.module.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmidataModule": function EmidataModule() {
          return (
            /* binding */
            _EmidataModule
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


      var _emidata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./emidata.component */
      9229);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var routes = [{
        path: '',
        component: _emidata_component__WEBPACK_IMPORTED_MODULE_0__.EmidataComponent
      }];

      var _EmidataModule = /*#__PURE__*/_createClass(function EmidataModule() {
        _classCallCheck(this, EmidataModule);
      });

      _EmidataModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule],
        declarations: [_emidata_component__WEBPACK_IMPORTED_MODULE_0__.EmidataComponent],
        exports: [],
        entryComponents: []
      })], _EmidataModule);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var _this1 = this;

              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    this.isLoading = true;
                    _context0.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this1.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context0.a(2, _context0.v);
                }
              }, _callee0, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
              var _this10 = this;

              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.n) {
                  case 0:
                    this.isLoading = true;
                    _context1.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this10.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context1.a(2, _context1.v);
                }
              }, _callee1, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    this.isLoading = false;
                    _context10.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context10.a(2, _context10.v);
                }
              }, _callee10, this);
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
    62675:
    /*!***********************************************************!*\
      !*** ./src/app/pages/tnvn/emidata/emidata.component.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQUNKOztBQUNBO0VBQ0kscUNBQUE7QUFFSiIsImZpbGUiOiJlbWlkYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlNmRlZWQgIWltcG9ydGFudDsgIFxyXG4gIH1cclxuLmJnLXRyYW5zcGFyZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50XHJcbn0iXX0= */";
      /***/
    },

    /***/
    4774:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/emidata/emidata.component.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n          <b>EMIS<br />\r\n          <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n            this.Verification\r\n          }}</span></b>\r\n          </ion-title>\r\n        </ion-col>                   \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n  <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n    <p class=\"pt-2 color-dgrey\">\r\n      {{ schoolDetails?.school_name }} <b>[{{ schoolDetails?.cate_type }}]</b>\r\n    </p>\r\n  </ion-text>   \r\n  <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n      <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.schoolDetail}}</span></b>\r\n      </ion-label>    \r\n  </ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >      \r\n<ion-col >    \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{this.district}}</ion-label>\r\n  <ion-select\r\n  style=\"display:contents\"\r\n  [(ngModel)]=\"correctedDistrict\"\r\n  (ngModelChange)=\"selectedDistrict($event)\"  \r\n>          \r\n\r\n  <ion-select-option            \r\n    *ngFor=\"let district of districtList\"\r\n    [value]=\"district\"\r\n    >{{ district?.district_name }}</ion-select-option>\r\n\r\n</ion-select>  \r\n</ion-item>  \r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n\r\n<ion-col >  \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{\r\n    this.educationalDistrict\r\n  }}</ion-label>\r\n  <ion-select\r\n  style=\"display:contents\"\r\n  [(ngModel)]=\"correctedEduDistrict\"\r\n  (ngModelChange)=\"selectedEduDistrict($event)\"  \r\n>          \r\n\r\n  <ion-select-option            \r\n    *ngFor=\"let eduDistrict of eduDistList\"\r\n    [value]=\"eduDistrict\"\r\n    >{{ eduDistrict.edn_dist_name }}</ion-select-option>\r\n\r\n</ion-select>  \r\n</ion-item>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >      \r\n<ion-col>  \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{\r\n    this.block\r\n  }}</ion-label>\r\n    <ion-select\r\n    style=\"display:contents\"\r\n  [(ngModel)]=\"correctedBlock\"\r\n  (ngModelChange)=\"selectedBlock($event)\"  \r\n>          \r\n\r\n  <ion-select-option            \r\n    *ngFor=\"let block of blockList\"\r\n    [value]=\"block\"\r\n    >{{ block.block_name }}</ion-select-option>\r\n\r\n</ion-select> \r\n</ion-item>  \r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >      \r\n<ion-col >  \r\n  <ion-item lines=\"none\" style=\"display:flex;border: 1px solid #000\">\r\n  <ion-label >Select {{\r\n    this.zone\r\n  }}</ion-label>\r\n    <ion-select\r\n    style=\"display:contents\"\r\n    [(ngModel)]=\"correctedZone\"\r\n    (ngModelChange)=\"selectedZone($event)\"    \r\n  >          \r\n  \r\n    <ion-select-option            \r\n      *ngFor=\"let zone of zoneList\"\r\n      [value]=\"zone\"\r\n      >{{ zone?.school_name }}</ion-select-option>\r\n  \r\n  </ion-select>    \r\n</ion-item> \r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n  <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.studentEnroll}}</span></b>\r\n  </ion-label>    \r\n</ion-row>\r\n\r\n  <ion-grid>\r\n   \r\n    <ion-row style=\"background-color:#8B67B3\">\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.class}}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.boysTotal}}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.girlsTotal}}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000;width:20%\">\r\n        <ion-text style=\"color:#fff;text-align:center\">\r\n          {{this.studentsTotal}}\r\n        </ion-text>\r\n      </ion-col>                  \r\n    </ion-row>    \r\n    <ion-row *ngFor=\"let classItem of classList; let i = index\">\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <ion-text>\r\n          {{this.class}} {{ classItem?.class }}\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <input\r\n        style=\"width:100%;border:1px solid #000\"\r\n        type=\"tel\"        \r\n        required\r\n        numericOnly\r\n        inputmode=\"numeric\"        \r\n        pattern=\"[0-9]*\"\r\n        maxlength=\"4\"\r\n        (input)=\"numericOnly($event)\"\r\n        (change)=\"addBoys(classItem)\"                \r\n        [(ngModel)]=\"classItem.correctedboys\"\r\n      />\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <input\r\n        style=\"width:100%;border:1px solid #000\"        \r\n        type=\"tel\"        \r\n        required\r\n        numericOnly\r\n        inputmode=\"numeric\"        \r\n        pattern=\"[0-9]*\"\r\n        maxlength=\"4\"\r\n        (input)=\"numericOnly($event)\"\r\n        (change)=\"addGirls(classItem)\"                      \r\n        [(ngModel)]=\"classItem.correctedgirls\"        \r\n        /> \r\n      \r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        {{classItem?.TotalStudents}}\r\n      </ion-col>                        \r\n    </ion-row>  \r\n\r\n    <ion-row >\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <ion-text>\r\n          <b>Total</b>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <ion-text>\r\n          <b>{{this.totalNumberOfBoys}}</b>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n        <b>{{this.totalNumberOfGirls}}</b>\r\n      </ion-col>\r\n      <ion-col style=\"border: 1px solid #000\">\r\n      <b>{{this.totalNoOfStudents}}</b>\r\n      </ion-col>                  \r\n    </ion-row>      \r\n  </ion-grid>\r\n  <ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n    <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n      <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.teacherPosition}}</span></b>\r\n    </ion-label>    \r\n</ion-row>  \r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teacherSanctioned\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teacherSanctionedValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teacherSanctionedPost\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teacherSanctionedPostValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersAvailable\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n            [(ngModel)]=\"teachersAvailableValue\"            \r\n          />\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersDeputationSameSchool\r\n    }}:</span></b>\r\n  </ion-label>    \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n            [(ngModel)]=\"teachersDeputationSameSchoolValue\"            \r\n          />\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersDeputationOtherSchool\r\n    }}:</span></b>\r\n  </ion-label>  \r\n  \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teachersDeputationOtherSchoolValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n\r\n<ion-row class=\"ion-row-list-none\" >    \r\n  <ion-col size=\"8\">\r\n  <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n    <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n      this.teachersOnLongLeave\r\n    }}:</span></b>\r\n  </ion-label>  \r\n  \r\n</ion-col>  \r\n<ion-col size=\"4\">\r\n  <input\r\n  style=\"width:100%;border:1px solid #000\"\r\n  type=\"tel\"        \r\n  required\r\n  numericOnly\r\n  inputmode=\"numeric\"        \r\n  pattern=\"[0-9]*\"\r\n  maxlength=\"4\"\r\n  (input)=\"numericOnly($event)\"\r\n  [(ngModel)]=\"teachersOnLongLeaveValue\"  \r\n/>\r\n</ion-col>\r\n</ion-row>\r\n<ion-row style=\"align-item:center\">\r\n  <ion-button (click)=\"goToTeacherSelection()\" style=\"width:100%;text-align:center;color:#fff\">\r\n      {{validate}}\r\n  </ion-button>\r\n</ion-row>  \r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_emidata_emidata_module_ts-es5.js.map