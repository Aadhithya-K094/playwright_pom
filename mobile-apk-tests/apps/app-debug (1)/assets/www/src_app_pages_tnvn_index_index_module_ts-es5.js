(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_index_index_module_ts"], {
    /***/
    10744:
    /*!**************************************************!*\
      !*** ./src/app/pages/tnvn/index/index.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexPageModule": function IndexPageModule() {
          return (
            /* binding */
            _IndexPageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index.page */
      61392);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage
      }];

      var _IndexPageModule = /*#__PURE__*/_createClass(function IndexPageModule() {
        _classCallCheck(this, IndexPageModule);
      });

      _IndexPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage]
      })], _IndexPageModule);
      /***/
    },

    /***/
    61392:
    /*!************************************************!*\
      !*** ./src/app/pages/tnvn/index/index.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IndexPage": function IndexPage() {
          return (
            /* binding */
            _IndexPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./index.page.html */
      19699);
      /* harmony import */


      var _index_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index.page.scss */
      63515);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/regulatory.service */
      63987);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/post.service */
      62538);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/tnvn/services/network.service */
      81508);
      /* harmony import */


      var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/components/emimodal/emimodal.component */
      79615);
      /* harmony import */


      var src_app_components_observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/components/observationfinalremark/observationfinalremark.component */
      26463);
      /* harmony import */


      var src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/components/apiErrorLog/apiErrorLog.component */
      98747);

      var _IndexPage = /*#__PURE__*/function () {
        function IndexPage(router, rcservice, route, alertService, _apiService, _translate, alertController, usersessionservice, loading, modalController, _router, userSessionService, activatedRoute, _alertService, _postService, ionicStore, networkService) {
          var _this = this;

          _classCallCheck(this, IndexPage);

          this.router = router;
          this.rcservice = rcservice;
          this.route = route;
          this.alertService = alertService;
          this._apiService = _apiService;
          this._translate = _translate;
          this.alertController = alertController;
          this.usersessionservice = usersessionservice;
          this.loading = loading;
          this.modalController = modalController;
          this._router = _router;
          this.userSessionService = userSessionService;
          this.activatedRoute = activatedRoute;
          this._alertService = _alertService;
          this._postService = _postService;
          this.ionicStore = ionicStore;
          this.networkService = networkService;
          this.questEnglish = true;
          this.questTamil = false;
          this.classList = [];
          this.storedFinalData = [];
          this.check = true;
          this.actualValueList = [];
          this.progressValue = 100;
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
          this.submitted = false;
          this.obs_submit_btn = false;
          this.ppSchBaseDetails = [];

          this.getSchoolDetails = function (schoolId) {
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
              class_info: _this.masterApiResponse.basic_info.class_info,
              districts: _this.masterApiResponse.basic_info.districts
            };
            _this.schoolDetails = records;
            var schoolData = {
              schoolId: _this.schoolDetails.school_id,
              schoolName: _this.schoolDetails.school_name,
              distName: _this.schoolDetails.district_name,
              eduDistName: _this.schoolDetails.edu_dist_name,
              blockName: _this.schoolDetails.block_name,
              cateType: _this.schoolDetails.cate_type
            };

            _this.loading.dismiss();

            localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
            var apiData = {
              pageNo: "2",
              pageName: "emiselection",
              apiResponse: {
                records: _this.schoolDetails
              },
              pageDetails: {},
              pageFlow: _this.pageFlow,
              correctedDetails: {},
              correctedClass: _this.correctedClass
            };

            _this.loading.dismiss();
          };
        }

        return _createClass(IndexPage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.ionicStore.getData('ppSchBaseDetails').then(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                var _this3 = this;

                var languageStatus;
                return _regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      this.ppSchBaseDetails = data ? data : [];
                      this.user_type = this.userSessionService.emis_usertype();
                      this.currentPage = this.route.snapshot.queryParamMap.get("currentPage");
                      this.class_with_sec = localStorage.getItem('selectedClassSection'); // this.classroom_section_status = Number(localStorage.getItem("classroom_section_status"));

                      this.metho_section_status = Number(localStorage.getItem("metho_section_status"));
                      this.stu_attend_section_status = Number(localStorage.getItem("stu_attend_section_status"));
                      this.assessment_section_status = Number(localStorage.getItem("assessment_section_status")); // this.omr_rand_stu_section_status = Number(localStorage.getItem("omr_rand_stu_section_status"));
                      // this.omr_scanner_section_status = Number(localStorage.getItem("omr_scanner_section_status"));
                      // this.omr_student_section_status = Number(localStorage.getItem("omr_student_section_status"));

                      this.notebook_section_status = Number(localStorage.getItem("notebook_section_status"));
                      this.pre_obs_qns_section_status = Number(localStorage.getItem("pre_obs_qns_section_status"));
                      this.obs_report_section_status = Number(localStorage.getItem("obs_report_section_status"));
                      this.hod_inspect_section_status = Number(localStorage.getItem("hod_inspect_section_status"));
                      this.emidata_section_status = Number(localStorage.getItem("emidata_section_status"));
                      this.kgbv_section_status = Number(localStorage.getItem("kgbv_section_status")); // this.emiverify_section_status = Number(localStorage.getItem("emiverify_section_status"));
                      // this.obs_another_section_status = Number(localStorage.getItem("obs_another_section_status"));

                      this.end_obs_section_status = Number(localStorage.getItem("end_obs_section_status"));
                      this.finaldata = localStorage.getItem("finaldata");
                      this.routingList = JSON.parse(localStorage.getItem("routingList"));

                      if (this.routingList) {
                        this.routingList = this.routingList;
                      } else {
                        this.routingList = [];
                      }

                      if (this.finaldata) {
                        this.finaldata = this.finaldata;
                      } else {
                        this.finaldata = null;
                      }

                      this.classInfo = localStorage.getItem("classInfo");

                      if (this.classInfo) {
                        this.classInfo = JSON.parse(this.classInfo);
                        this.class_id = this.classInfo.class_id;
                        this.class_with_sec = this.class_with_sec;
                      } else {
                        this.class_id = this.route.snapshot.queryParamMap.get("class_id");
                        this.class_with_sec = this.class_with_sec;
                      }

                      this.schoolInfo = localStorage.getItem("schoolInfo");

                      if (this.schoolInfo) {
                        this.schoolInfo = JSON.parse(this.schoolInfo);
                        this.school_id = this.schoolInfo.schoolId;
                      } else {
                        this.school_id = this.route.snapshot.queryParamMap.get("school_id");
                      }

                      languageStatus = localStorage.getItem("language");

                      if (languageStatus != null) {
                        this.languageType = languageStatus;

                        this._apiService.languageChange(this.languageType);

                        this.appLanguage();
                      } else {
                        this.appLanguage();
                      }

                      this.getPPsections();
                      this.selectedlevel = localStorage.getItem("selectedlevel"); // this.warn();

                      this.ionicStore.getOffStorage().then(function (response) {
                        if (response) {
                          _this3.masterApiResponse = response;

                          if (_this3.masterApiResponse == null || _this3.masterApiResponse == undefined) {
                            _this3.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                          }
                        }
                      });
                      this.schlMngId = localStorage.getItem("schlMngId");

                    case 1:
                      return _context.a(2);
                  }
                }, _callee, this);
              }));
            });
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

            this._translate.get("classroomSelection").subscribe(function (res) {
              _this5.classroomSelection = res;
            });

            this._translate.get("teachingmethodology").subscribe(function (res) {
              _this5.teachingmethodology = res;
            });

            this._translate.get("studentAttendance").subscribe(function (res) {
              _this5.studentAttendance = res;
            });

            this._translate.get("studentAssessment").subscribe(function (res) {
              _this5.studentAssessment = res;
            });

            this._translate.get("omrRandomStudents").subscribe(function (res) {
              _this5.omrRandomStudents = res;
            });

            this._translate.get("omrScanner").subscribe(function (res) {
              _this5.omrScanner = res;
            });

            this._translate.get("omrScanned").subscribe(function (res) {
              _this5.omrScanned = res;
            });

            this._translate.get("notebookVerification").subscribe(function (res) {
              _this5.notebookVerification = res;
            });

            this._translate.get("postObservationQuestions").subscribe(function (res) {
              _this5.postObservationQuestions = res;
            });

            this._translate.get("obsReport").subscribe(function (res) {
              _this5.obsReport = res;
            });

            this._translate.get("schoolInspection").subscribe(function (res) {
              _this5.schoolInspection = res;
            });

            this._translate.get("emisdataValReport").subscribe(function (res) {
              _this5.emisdataValReport = res;
            });

            this._translate.get("emisReport").subscribe(function (res) {
              _this5.emisReport = res;
            });

            this._translate.get("Verification").subscribe(function (res) {
              _this5.Verification = res;
            });

            this._translate.get("submitObservation").subscribe(function (res) {
              _this5.submitObservation = res;
            });

            this._translate.get("secondClassObservation").subscribe(function (res) {
              _this5.secondClassObservation = res;
            });

            this._translate.get("secondClassObservationComplete").subscribe(function (res) {
              _this5.secondClassObservationComplete = res;
            });

            this._translate.get("secondObservationagainSubmit").subscribe(function (res) {
              _this5.secondObservationagainSubmit = res;
            });

            this._translate.get("saveAndContinue").subscribe(function (res) {
              _this5.saveAndContinue = res;
            });

            this._translate.get("yes").subscribe(function (res) {
              _this5.Yes = res;
            });

            this._translate.get("no").subscribe(function (res) {
              _this5.No = res;
            });

            this._translate.get("school").subscribe(function (res) {
              _this5.school = res;
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

            this._translate.get("observetheClass").subscribe(function (res) {
              _this5.observetheClass = res;
            });

            this._translate.get("observeQuestion").subscribe(function (res) {
              _this5.observeQuestion = res;
            });

            this._translate.get("observeQuestionOne").subscribe(function (res) {
              _this5.observeQuestionOne = res;
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

            this._translate.get("anotherclass").subscribe(function (res) {
              _this5.anotherclass = res;
            });

            this._translate.get("observe").subscribe(function (res) {
              _this5.observe = res;
            });

            this._translate.get("teacherSanctioned").subscribe(function (res) {
              _this5.teacherSanctioned = res;
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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tnvntabs/page-route/dashboardc']);
          }
        }, {
          key: "warn",
          value: function warn() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this6 = this;

              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.observeList = '1';
                    _context2.n = 1;
                    return this.alertController.create({
                      cssClass: 'obsWarnInfo',
                      header: this.observetheClass + " " + this.selectedClass + " " + this.selectedSection + " " + this.observeQuestion + " " + this.observeQuestionOne,
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        handler: function handler(data) {
                          // this.obs_submit_btn = true;
                          _this6.observeClass();
                        }
                      }, {
                        cssClass: 'alertButton',
                        text: 'Yes',
                        handler: function handler(data) {
                          // this.obs_submit_btn = true;
                          _this6.emisValidation();
                        }
                      }],
                      backdropDismiss: false
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
          key: "obsanotherWarnInfo",
          value: function obsanotherWarnInfo() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this7 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.observeList = '2';
                    _context3.n = 1;
                    return this.alertController.create({
                      cssClass: 'obsWarnInfo',
                      header: this.secondClassObservation + " " + this.selectedClass + " " + this.selectedSection + " " + this.secondClassObservationComplete + " " + this.secondObservationagainSubmit,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'alertButton',
                        handler: function handler(data) {
                          _this7.goToTeacherSelection(); // this.obs_submit_btn = true;

                        }
                      }],
                      backdropDismiss: false
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
          key: "getPPsections",
          value: function getPPsections() {
            var _this8 = this;

            debugger;

            if (this.finaldata != null) {
              if (this.routingList.length > 0) {
                this.routingList = JSON.parse(localStorage.getItem("routingList"));
                this.routingList.forEach(function (element, index) {
                  if (element.section_name == "methodology") {
                    element.section_status = _this8.metho_section_status;
                  } else if (element.section_name == "attendance/student-attendance") {
                    element.section_status = _this8.stu_attend_section_status;
                  } else if (element.section_name == "assessment") {
                    element.section_status = _this8.assessment_section_status;
                  } else if (element.section_name == "notebook") {
                    element.section_status = _this8.notebook_section_status;
                  } else if (element.section_name == "pre-observation-question") {
                    element.section_status = _this8.pre_obs_qns_section_status;
                  } else if (element.section_name == "observation") {
                    element.section_status = _this8.obs_report_section_status;
                  } else if (element.section_name == "hodinspection") {
                    element.section_status = _this8.hod_inspect_section_status;
                  } else if (element.section_name == "emidata") {
                    element.section_status = _this8.emidata_section_status;
                  } else if (element.section_name == "kgbv-nsbav-inspection") {
                    element.section_status = _this8.kgbv_section_status;
                  }
                });
                localStorage.setItem("routingList", JSON.stringify(this.routingList));
              } else if (this.routingList.length == 0) {
                this._apiService.getPPSections().subscribe(function (response) {
                  if (response.status == 200 && response.dataStatus == true) {
                    _this8.routingList = response.records.base_sections;
                    _this8.sub_sections_list = response.records.sections;
                    localStorage.setItem("subSectionsList", JSON.stringify(_this8.sub_sections_list));

                    _this8.routingList.forEach(function (element, index) {
                      if (element.id == "1") {
                        var _class = element["class"].split(',');

                        var test = _class.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (test) {
                          element.section_name = "methodology";
                          element.section_status = _this8.metho_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "2") {
                        var _class2 = element["class"].split(',');

                        var _test = _class2.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test) {
                          element.section_name = "attendance/student-attendance";
                          element.section_status = _this8.stu_attend_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "3") {
                        element.section_name = undefined;
                        element.section_status = undefined;
                      } else if (element.id == "4" && Number(_this8.user_type != 8)) {
                        var _class3 = element["class"].split(',');

                        var _test2 = _class3.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test2) {
                          element.section_name = "assessment";
                          element.section_status = _this8.assessment_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "5") {
                        element.section_name = undefined;
                        element.section_status = undefined;
                      } else if (element.id == "6") {
                        var _class4 = element["class"].split(',');

                        var _test3 = _class4.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test3) {
                          element.section_name = "notebook";
                          element.section_status = _this8.notebook_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "7") {
                        var _class5 = element["class"].split(',');

                        var _test4 = _class5.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test4) {
                          element.section_name = "pre-observation-question";
                          element.section_status = _this8.pre_obs_qns_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "8") {
                        var _class6 = element["class"].split(',');

                        var _test5 = _class6.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test5) {
                          element.section_name = "observation";
                          element.section_status = _this8.obs_report_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "9" && Number(_this8.user_type != 8)) {
                        var _class7 = element["class"].split(',');

                        var _test6 = _class7.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test6) {
                          element.section_name = "hodinspection";
                          element.section_status = _this8.hod_inspect_section_status == 0 ? 0 : undefined;
                        }
                      } else if (element.id == "10" && Number(_this8.user_type != 8)) {
                        var _class8 = element["class"].split(',');

                        var _test7 = _class8.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test7) {
                          element.section_name = "emidata";
                          element.section_status = _this8.emidata_section_status == 0 ? 0 : undefined;
                        }
                      } else if (element.id == "11" && (_this8.schlMngId == 32 || _this8.schlMngId == 36) && Number(_this8.user_type != 8)) {
                        var _class9 = element["class"].split(',');

                        var _test8 = _class9.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test8) {
                          element.section_name = "kgbv-nsbav-inspection";
                          element.section_status = _this8.kgbv_section_status == 0 ? 0 : undefined;
                        }
                      }
                    });

                    _this8.routingList = _this8.routingList.filter(function (sr) {
                      return sr.section_status != undefined;
                    });
                    localStorage.setItem("routingList", JSON.stringify(_this8.routingList));
                  }
                });
              } // else if (this.routingList.length == 0) {
              // this._apiService.getPPSections().subscribe((response: any) => {
              //   if (response.status == 200 && response.dataStatus == true) {
              //     this.routingList = response.records.base_sections;
              //     this.sub_sections_list = response.records.sections;
              //     localStorage.setItem("subSectionsList", JSON.stringify(this.sub_sections_list));
              //     this.routingList.forEach((element, index) => {
              //       if (element.id == "1") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "methodology";
              //         element.section_status = this.metho_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "2") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "attendance/student-attendance";
              //         element.section_status = this.stu_attend_section_status == 1 ? 1 : 0;
              //         }
              //       }
              //       else if (element.id == "3") {
              //         element.section_name = undefined;
              //         element.section_status = undefined;
              //       }
              //       else if (element.id == "4") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //           element.section_name = "assessment";
              //           element.section_status = this.assessment_section_status == 1 ? 1 : 0;
              //         }
              //       }
              //       else if (element.id == "5") {
              //         element.section_name = undefined;
              //         element.section_status = undefined;
              //       }
              //       else if (element.id == "6") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "notebook";
              //         element.section_status = this.notebook_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "7") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "pre-observation-question";
              //         element.section_status = this.pre_obs_qns_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "8") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "observation";
              //         element.section_status = this.obs_report_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "9") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "hodinspection";
              //         element.section_status = this.hod_inspect_section_status == 0 ? 0 : undefined;
              //         }
              //       } else if (element.id == "10") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "emidata";
              //         element.section_status = this.emidata_section_status == 0 ? 0 : undefined;
              //         }
              //       }
              //     });
              //     this.routingList = this.routingList.filter((sr) => sr.section_status != undefined);
              //     localStorage.setItem("routingList", JSON.stringify(this.routingList));
              //   }
              // });
              // }

            } else if (this.finaldata == null) {
              if (this.routingList.length > 0) {
                this.routingList = JSON.parse(localStorage.getItem("routingList"));
                this.routingList.forEach(function (element, index) {
                  if (element.section_name == "methodology") {
                    element.section_status = _this8.metho_section_status;
                  } else if (element.section_name == "attendance/student-attendance") {
                    element.section_status = _this8.stu_attend_section_status;
                  } else if (element.section_name == "assessment") {
                    element.section_status = _this8.assessment_section_status;
                  } else if (element.section_name == "notebook") {
                    element.section_status = _this8.notebook_section_status;
                  } else if (element.section_name == "pre-observation-question") {
                    element.section_status = _this8.pre_obs_qns_section_status;
                  } else if (element.section_name == "observation") {
                    element.section_status = _this8.obs_report_section_status;
                  } else if (element.section_name == "hodinspection") {
                    element.section_status = _this8.hod_inspect_section_status;
                  } else if (element.section_name == "emidata") {
                    element.section_status = _this8.emidata_section_status;
                  } else if (element.section_name == "kgbv-nsbav-inspection") {
                    element.section_status = _this8.kgbv_section_status;
                  }
                });
                localStorage.setItem("routingList", JSON.stringify(this.routingList));
              } else if (this.routingList.length == 0) {
                this._apiService.getPPSections().subscribe(function (response) {
                  if (response.status == 200 && response.dataStatus == true) {
                    _this8.routingList = response.records.base_sections;
                    _this8.sub_sections_list = response.records.sections;
                    localStorage.setItem("subSectionsList", JSON.stringify(_this8.sub_sections_list));

                    _this8.routingList.forEach(function (element, index) {
                      if (element.id == "1") {
                        var _class = element["class"].split(',');

                        var test = _class.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (test) {
                          element.section_name = "methodology";
                          element.section_status = _this8.metho_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "2") {
                        var _class0 = element["class"].split(',');

                        var _test9 = _class0.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test9) {
                          element.section_name = "attendance/student-attendance";
                          element.section_status = _this8.stu_attend_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "3") {
                        element.section_name = undefined;
                        element.section_status = undefined;
                      } else if (element.id == "4" && Number(_this8.user_type != 8)) {
                        var _class1 = element["class"].split(',');

                        var _test0 = _class1.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test0) {
                          element.section_name = "assessment";
                          element.section_status = _this8.assessment_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "5") {
                        element.section_name = undefined;
                        element.section_status = undefined;
                      } else if (element.id == "6") {
                        var _class10 = element["class"].split(',');

                        var _test1 = _class10.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test1) {
                          element.section_name = "notebook";
                          element.section_status = _this8.notebook_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "7") {
                        var _class11 = element["class"].split(',');

                        var _test10 = _class11.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test10) {
                          element.section_name = "pre-observation-question";
                          element.section_status = _this8.pre_obs_qns_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "8") {
                        var _class12 = element["class"].split(',');

                        var _test11 = _class12.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test11) {
                          element.section_name = "observation";
                          element.section_status = _this8.obs_report_section_status == 1 ? 1 : 0;
                        }
                      } else if (element.id == "9" && Number(_this8.user_type != 8)) {
                        var _class13 = element["class"].split(',');

                        var _test12 = _class13.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test12) {
                          element.section_name = "hodinspection";
                          element.section_status = _this8.hod_inspect_section_status == 0 ? 0 : 1;
                        }
                      } else if (element.id == "10" && Number(_this8.user_type != 8)) {
                        var _class14 = element["class"].split(',');

                        var _test13 = _class14.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test13) {
                          element.section_name = "emidata";
                          element.section_status = _this8.emidata_section_status == 0 ? 0 : 1;
                        }
                      } else if (element.id == "11" && (_this8.schlMngId == 32 || _this8.schlMngId == 36) && Number(_this8.user_type != 8)) {
                        var _class15 = element["class"].split(',');

                        var _test14 = _class15.find(function (x) {
                          return Number(x) == Number(_this8.class_id);
                        });

                        if (_test14) {
                          element.section_name = "kgbv-nsbav-inspection";
                          element.section_status = _this8.kgbv_section_status == 0 ? 0 : 1;
                        }
                      }
                    });

                    _this8.routingList = _this8.routingList.filter(function (sr) {
                      return sr.section_status != undefined;
                    });
                    localStorage.setItem("routingList", JSON.stringify(_this8.routingList));
                  }
                });
              } // else if (this.routingList.length == 0) {
              // this._apiService.getPPSections().subscribe((response: any) => {
              //   if (response.status == 200 && response.dataStatus == true) {
              //     this.routingList = response.records.base_sections;
              //     this.sub_sections_list = response.records.sections;
              //     localStorage.setItem("subSectionsList", JSON.stringify(this.sub_sections_list));
              //     this.routingList.forEach((element, index) => {
              //       if (element.id == "1") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "methodology";
              //         element.section_status = this.metho_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "2") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "attendance/student-attendance";
              //         element.section_status = this.stu_attend_section_status == 1 ? 1 : 0;
              //         }
              //       }
              //       else if (element.id == "3") {
              //         element.section_name = undefined;
              //         element.section_status = undefined;
              //       }
              //       else if (element.id == "4") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //           element.section_name = "assessment";
              //           element.section_status = this.assessment_section_status == 1 ? 1 : 0;
              //         }
              //       }
              //       else if (element.id == "5") {
              //         element.section_name = undefined;
              //         element.section_status = undefined;
              //       }
              //       else if (element.id == "6") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "notebook";
              //         element.section_status = this.notebook_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "7") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "pre-observation-question";
              //         element.section_status = this.pre_obs_qns_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "8") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "observation";
              //         element.section_status = this.obs_report_section_status == 1 ? 1 : 0;
              //         }
              //       } else if (element.id == "9") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "hodinspection";
              //         element.section_status = this.hod_inspect_section_status == 0 ? 0 : 1;
              //         }
              //       } else if (element.id == "10") {
              //         let _class = element.class.split(',');
              //         let _class_length = _class.length - 1;
              //         if (Number(this.class_id) >= Number(_class[0]) && Number(this.class_id) <= Number(_class[_class_length])) {
              //         element.section_name = "emidata";
              //         element.section_status = this.emidata_section_status == 0 ? 0 : 1;
              //         }
              //       }
              //     });
              //     this.routingList = this.routingList.filter((sr) => sr.section_status != undefined);
              //     localStorage.setItem("routingList", JSON.stringify(this.routingList));
              //   }
              // });
              // }

            }
          }
        }, {
          key: "routeToForm",
          value: function routeToForm(secName, i, secStatus, lang) {
            debugger;
            this.secname = secName;
            this.secstatus = secStatus;
            this.langstatus = lang; // if (secName == "attendance/student-attendance" && this.metho_section_status == 0) {
            //   this.alertService.showAlert("Please complete methodology section");
            // } else 

            if (secName == "assessment" && this.stu_attend_section_status == 0 && Number(this.class_id) >= 1 && Number(this.class_id) <= 12) {
              this.alertService.showAlert("Please complete student attendance section");
            } // else if (secName == "omr-random-student" && this.assessment_section_status == 0) {
            //   this.alertService.showAlert("Please complete student assessment section");
            // } else if (secName == "omr-scanner" && this.omr_rand_stu_section_status == 0) {
            //   this.alertService.showAlert("Please verify OMR students section");
            // } else if (secName == "omrscanner" && this.omr_scanner_section_status == 0) {
            //   this.alertService.showAlert("Please complete OMR scanning section");
            // } 
            else if (secName == "notebook" && this.stu_attend_section_status == 0 && (Number(this.class_id) >= 1 && Number(this.class_id) <= 2 || Number(this.class_id) >= 9 && Number(this.class_id) <= 12)) {
              this.alertService.showAlert("Please complete student attendance section");
            } else if (secName == "notebook" && this.stu_attend_section_status == 0 && Number(this.class_id) >= 3 && Number(this.class_id) <= 8) {
              this.alertService.showAlert("Please complete student attendance section");
            } else if (secName == "notebook" && this.assessment_section_status == 0 && Number(this.user_type) != 8 && Number(this.class_id) >= 3 && Number(this.class_id) <= 8) {
              this.alertService.showAlert("Please complete student assessment section");
            } // else if (secName == "pre-observation-question" && this.notebook_section_status == 0) {
            //   this.alertService.showAlert("Please complete notebook section");
            // } 
            else if (secName == "observation" && this.metho_section_status == 0) {
              this.alertService.showAlert("Please complete teaching methodology section");
            } else if (secName == "observation" && this.stu_attend_section_status == 0) {
              this.alertService.showAlert("Please complete student attendance section");
            } else if (secName == "observation" && this.notebook_section_status == 0) {
              this.alertService.showAlert("Please complete student interaction section");
            } else if (secName == "observation" && this.pre_obs_qns_section_status == 0) {
              this.alertService.showAlert("Please complete post observation questions section");
            } else if (secName == "observation" && this.assessment_section_status == 0 && Number(this.user_type) != 8 && Number(this.class_id) >= 3 && Number(this.class_id) <= 8) {
              this.alertService.showAlert("Please complete student assessment section");
            } // else if (secName == "hodinspection" && this.obs_report_section_status == 0) {
            //   this.alertService.showAlert("Please complete observation report section");
            // } 
            // else if (secName == "emidata" && this.hod_inspect_section_status == 0) {
            //   this.alertService.showAlert("Please complete school inspection section");
            // } 
            // else if (secName == "emiverify" && this.emidata_section_status == 0) {
            //   this.alertService.showAlert("Please complete emis data validation section");
            // } 
            // else if (secName == "observation-another-class" && this.emiverify_section_status == 0) {
            //   this.alertService.showAlert("Please complete emis data verification section");
            // } 
            // else if (secName == "observation/endObservation" && this.obs_report_section_status == 0) {
            //   this.alertService.showAlert("Please complete observation report section");
            // } 
            else if (secName == "emidata" || secName == "emiverify") {
              this.router.navigate(['/tnvntabs/page-route/' + secName, this.school_id]);
            } else {
              this.router.navigate(['/tnvntabs/page-route/' + secName]);
            } // this.router.navigate(['/tabs/rc-grant-form'], { queryParams: { 'AppID': this.Applicationid, 'secID': this.keyid, 'secName': this.secname, 'schoolName': this.schoolname, 'district': this.district, 'appType': this.applicationType, 'secindex': i, 'secStatus': this.secstatus, 'langStat': this.langstatus }, skipLocationChange: false });

          }
        }, {
          key: "obsfinalSubmit",
          value: function obsfinalSubmit() {
            this.obs_submit_btn = true;
            this.previousData = JSON.parse(localStorage.getItem("finaldata"));

            if (this.previousData != null) {
              this.selectedChoice = 'No';
            } else {
              this.selectedChoice = 'Yes';
            } // this.ionicStore.getOffStorage().then((response) => {
            //   if (response) {
            //     this.masterApiResponse = response;
            //     if (this.masterApiResponse == null || this.masterApiResponse == undefined) {
            //       this.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
            //     }
            //   }
            //   this.ionicStore.getStoreData().then((response) => {
            //     this.storeDetail = response;
            //     if (this.storeDetail == null || this.storeDetail == undefined) {
            //       this.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
            //     }
            //     this.selectedClass = this.storeDetail.pages.pageData[5].pageDetails.selectedClass
            //       .class_id;
            //     this.selectedSection = this.storeDetail.pages.pageData[5].pageDetails.section;
            //     if (this.previousData == undefined || this.previousData == null) {
            //       this.warn();
            //     } else {
            //       this.obsanotherWarnInfo();
            //     }
            //   })
            // });

          }
        }, {
          key: "presentModal",
          value: function presentModal(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var selectedGender, selectedIndex, _t;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    this.presentValue = listedValue;
                    this.divisionType = type;
                    _t = this.divisionType;
                    _context4.n = _t === "district" ? 1 : _t === "edu_district" ? 2 : _t === "block" ? 3 : _t === "zone" ? 4 : 5;
                    break;

                  case 1:
                    this.getDistrictList(listedValue, type, correction, showCategory, gender, index);
                    return _context4.a(3, 6);

                  case 2:
                    this.getEducationalDistrictList(listedValue, type, correction, showCategory, gender, index);
                    return _context4.a(3, 6);

                  case 3:
                    this.getBlocksList(listedValue, type, correction, showCategory, gender, index);
                    return _context4.a(3, 6);

                  case 4:
                    this.getZoneList(listedValue, type, correction, showCategory, gender, index);
                    return _context4.a(3, 6);

                  case 5:
                    this.getCountData(listedValue, type, correction, showCategory, gender, index);
                    return _context4.a(3, 6);

                  case 6:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "emisValidation",
          value: function emisValidation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    this.selectedChoice = 'Yes';
                    this.goToTeacherSelection();

                  case 1:
                    return _context5.a(2);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "observeClass",
          value: function observeClass() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var checkLstStep;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    checkLstStep = [];
                    this.routingList.filter(function (x) {
                      if (x.section_name == "hodinspection" || x.section_name == "emidata" || x.section_name == "kgbv-nsbav-inspection") {
                        checkLstStep.push(x.section_status);
                      }
                    });

                    if (!checkLstStep.includes(0)) {
                      this.selectedChoice = 'No';
                      this.goToTeacherSelection();
                    } else {
                      this._alertService.showAlert("Please fill school inspection and EMIS validation section");
                    }

                  case 1:
                    return _context6.a(2);
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getDistrictList",
          value: function getDistrictList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this9 = this;

              var selectedGender, selectedIndex, modal;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    this.schoolDetails.districts.forEach(function (data) {
                      if (data.district_name != _this9.presentValue) {
                        _this9.actualValueList.push({
                          id: data.id,
                          item: data.district_name
                        });
                      }
                    });
                    _context7.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
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
                        _this9.schoolDetails.dist_id = response.data.id;
                        _this9.correctedDistrict = response.data.item;
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
          key: "getEducationalDistrictList",
          value: function getEducationalDistrictList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this0 = this;

              var selectedGender, selectedIndex, districtDetail, temp_eduDistrictList, modal;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    districtDetail = {
                      district_id: this.schoolDetails.dist_id
                    };
                    temp_eduDistrictList = this.masterApiResponse.obs_info.edu_dist.filter(function (data) {
                      return data.district_id == _this0.schoolDetails.dist_id;
                    });
                    temp_eduDistrictList.forEach(function (data) {
                      if (data.edn_dist_name != _this0.presentValue) {
                        _this0.actualValueList.push({
                          id: data.id,
                          item: data.edn_dist_name
                        });
                      }
                    });
                    _context8.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
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
                        _this0.schoolDetails.edu_dist_id = response.data.id;
                        _this0.correctedEduDistrict = response.data.item;
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
          key: "getBlocksList",
          value: function getBlocksList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var _this1 = this;

              var selectedGender, selectedIndex, blockDetail, temp_blockList, modal;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    blockDetail = {
                      edu_dist_id: this.schoolDetails.edu_dist_id
                    };
                    temp_blockList = this.masterApiResponse.obs_info.blocks.filter(function (data) {
                      return data.edu_dist_id == _this1.schoolDetails.edu_dist_id;
                    });
                    temp_blockList.forEach(function (data) {
                      if (data.block_name != _this1.presentValue) {
                        _this1.actualValueList.push({
                          id: data.id,
                          item: data.block_name
                        });
                      }
                    });
                    _context9.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
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
                    modal = _context9.v;
                    modal.onDidDismiss().then(function (response) {
                      _this1.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this1.schoolDetails.block_id = response.data.id;
                        _this1.correctedBlock = response.data.item;
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
        }, {
          key: "getZoneList",
          value: function getZoneList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var _this10 = this;

              var selectedGender, selectedIndex, zoneDetail, temp_ZoneList, modal;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    zoneDetail = {
                      block_id: this.schoolDetails.block_id
                    };
                    temp_ZoneList = [];
                    this.masterApiResponse.obs_info.nodals.forEach(function (data) {
                      if (data.edu_dist_id == _this10.schoolDetails.edu_dist_id && data.district_id == _this10.schoolDetails.dist_id && data.block_id == _this10.schoolDetails.block_id) {
                        temp_ZoneList.push(data);
                      }
                    });
                    temp_ZoneList.forEach(function (data, index) {
                      if (data.nodal_name != _this10.presentValue) {
                        _this10.actualValueList.push({
                          id: data.hss_school_id,
                          item: data.hss_school_name
                        });
                      }
                    });
                    _context0.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
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
                    modal = _context0.v;
                    modal.onDidDismiss().then(function (response) {
                      _this10.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this10.schoolDetails.school_id = response.data.id;
                        _this10.correctedZone = response.data.item;
                      }
                    });
                    _context0.n = 2;
                    return modal.present();

                  case 2:
                    return _context0.a(2, _context0.v);
                }
              }, _callee0, this);
            }));
          }
        }, {
          key: "getCountData",
          value: function getCountData(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
              var _this11 = this;

              var selectedGender, selectedIndex, modal;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    _context1.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_10__.EmimodalComponent,
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
                    modal = _context1.v;
                    modal.onDidDismiss().then(function (response) {
                      _this11.actualValueList = [];

                      if (response.data != "Cancel") {
                        switch (_this11.divisionType) {
                          case "teacher_count":
                            {
                              _this11.correctedTotalTeachers = response.data;
                              break;
                            }

                          case "student_count":
                            {
                              _this11.correctedTotalStudents = response.data;
                              break;
                            }

                          case "count":
                            {
                              if (selectedGender == "girls") {
                                _this11.correctedClass[selectedIndex].girls = response.data.toString();
                                _this11.correctedClass[selectedIndex].showCorrected_Girls = true;
                                _this11.correctedClass[selectedIndex].listetClassGirls = false;
                              } else {
                                _this11.correctedClass[selectedIndex].boys = response.data.toString();
                                _this11.correctedClass[selectedIndex].showCorrected_Boys = true;
                                _this11.correctedClass[selectedIndex].listetClassBoys = false;
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
                    _context1.n = 2;
                    return modal.present();

                  case 2:
                    return _context1.a(2, _context1.v);
                }
              }, _callee1, this);
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
            return (currentValue.listetClassGirls == true || currentValue.showCorrected_Girls == true) && (currentValue.listetClassBoys == true || currentValue.showCorrected_Boys == true);
          }
        }, {
          key: "goToTeacherSelection",
          value: function goToTeacherSelection() {
            var _a, _b;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee11() {
              var _this12 = this;

              var level, createdby_role_id, usertype, veracity_type, observation_id, _this$storeDetail$pag, school_id, school_name, udise_code, emiverfiyInfo, school_info, _school_info, schoolInfo, mediumIds, classInfo, basicInfoObj, schoolReasons, studentReasons, teacher, not_verfied, learning_outcome_data, student_assessment_data, observation_reportconst, observation_data, emis_data, gra_data, omr_data, customizationdata, finalData, _final, connectionStatus, uniqueId, apiObj;

              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.n) {
                  case 0:
                    debugger;
                    localStorage.removeItem("routingList");
                    localStorage.setItem("selectedSection", this.storeDetail.pages.pageData[5].pageDetails.section);
                    _context11.n = 1;
                    return this.ionicStore.getFinalData();

                  case 1:
                    this.storedFinalData = _context11.v;
                    console.log(this.storedFinalData, "goto menu items");
                    level = localStorage.getItem("selectedlevel");
                    createdby_role_id = localStorage.getItem("createdby_role");
                    usertype = localStorage.getItem("usertype");
                    veracity_type = localStorage.getItem("veracity_type");
                    observation_id = localStorage.getItem("observation_id");
                    _this$storeDetail$pag = this.storeDetail.pages.pageData[0].pageDetails, school_id = _this$storeDetail$pag.school_id, school_name = _this$storeDetail$pag.school_name, udise_code = _this$storeDetail$pag.udise_code;

                    if (level == '1' || veracity_type == 'inspection') {
                      if (localStorage.getItem("veracity_type") == 'inspection') {
                        level = '5';
                      }

                      if (this.storeDetail.pages.pageData[1].pageFlow != 'observation') {
                        emiverfiyInfo = this.storeDetail.pages.pageData[2].pageDetails;
                      } else {
                        school_info = {};
                        school_info.created_by = localStorage.getItem("username");
                        school_info.veracity_type = localStorage.getItem("veracity_type");
                        school_info.district_id = this.masterApiResponse.basic_info.dist_id;
                        school_info.district_name = this.masterApiResponse.basic_info.district_name;
                        school_info.block_id = this.masterApiResponse.basic_info.block_id;
                        school_info.block_name = this.masterApiResponse.basic_info.block_name;
                        school_info.edu_dist_id = this.masterApiResponse.basic_info.edu_dist_id;
                        school_info.edu_dist_name = this.masterApiResponse.basic_info.edu_dist_name;
                        school_info.nodal_id = this.masterApiResponse.basic_info.nodal_id;
                        school_info.nodal_name = this.masterApiResponse.basic_info.nodal_name;

                        if (this.storeDetail.pages.pageData[2]) {
                          school_info.teacherSanctioned = this.storeDetail.pages.pageData[2].pageDetails.teacherSanctioned;
                          school_info.teachersAvailable = this.storeDetail.pages.pageData[2].pageDetails.teachersAvailable;
                          school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationOtherSchool;
                          school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationSameSchool;
                          school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[2].pageDetails.teachersOnLongLeave;
                          school_info.teachers_alloted = this.storeDetail.pages.pageData[2].pageDetails.teachers_alloted;
                          school_info.total_students = this.storeDetail.pages.pageData[2].pageDetails.total_students;
                        }

                        emiverfiyInfo = school_info;
                      }
                    } else {
                      _school_info = {};
                      _school_info.created_by = localStorage.getItem("username");
                      _school_info.veracity_type = localStorage.getItem("veracity_type");
                      _school_info.district_id = this.masterApiResponse.basic_info.dist_id;
                      _school_info.district_name = this.masterApiResponse.basic_info.district_name;
                      _school_info.block_id = this.masterApiResponse.basic_info.block_id;
                      _school_info.block_name = this.masterApiResponse.basic_info.block_name;
                      _school_info.edu_dist_id = this.masterApiResponse.basic_info.edu_dist_id;
                      _school_info.edu_dist_name = this.masterApiResponse.basic_info.edu_dist_name;
                      _school_info.nodal_id = this.masterApiResponse.basic_info.nodal_id;
                      _school_info.nodal_name = this.masterApiResponse.basic_info.nodal_name;

                      if (this.storeDetail.pages.pageData[2]) {
                        _school_info.teacherSanctioned = this.storeDetail.pages.pageData[2].pageDetails.teacherSanctioned;
                        _school_info.teachersAvailable = this.storeDetail.pages.pageData[2].pageDetails.teachersAvailable;
                        _school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationOtherSchool;
                        _school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[2].pageDetails.teachersDeputationSameSchool;
                        _school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[2].pageDetails.teachersOnLongLeave;
                        _school_info.teachers_alloted = this.storeDetail.pages.pageData[2].pageDetails.teachers_alloted;
                        _school_info.total_students = this.storeDetail.pages.pageData[2].pageDetails.total_students;
                      }

                      emiverfiyInfo = _school_info;
                    }

                    schoolInfo = {
                      school_id: school_id,
                      school_name: school_name,
                      observation_id: observation_id,
                      level: level,
                      subject_id: this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject_id,
                      subject_name: this.storeDetail.pages.pageData[5].pageDetails.subjectInfo.subject,
                      createdby_role: createdby_role_id,
                      latitude: localStorage.getItem("latitude"),
                      longitude: localStorage.getItem("longitude"),
                      udise_code: localStorage.getItem("udise_code") //udise_code

                    };

                    if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass) {
                      mediumIds = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map(function (el) {
                        return el.medium_id;
                      });
                      classInfo = {
                        "class": this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id,
                        medium: mediumIds.toString(),
                        class_type: this.storeDetail.pages.pageData[5].pageDetails.classType,
                        section: this.storeDetail.pages.pageData[5].pageDetails.section,
                        teacher_name: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_name,
                        // teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid,
                        teacher_emisid: this.masterApiResponse.basic_info.teacher_emisid
                      };
                    }

                    basicInfoObj = Object.assign(Object.assign(Object.assign({}, schoolInfo), emiverfiyInfo), classInfo);
                    schoolReasons = this.storeDetail.pages.pageData[0].pageDetails.schoolsReasons;

                    if (this.storeDetail.pages.pageData[9]) {
                      studentReasons = this.storeDetail.pages.pageData[9].pageDetails.studentReasonList;
                    } else {
                      studentReasons = {};
                    }

                    if (this.storeDetail.pages.pageData[5].pageDetails.reasonDetails != undefined) {
                      if (this.storeDetail.pages.pageData[5].pageDetails.teacherDetails) {
                        teacher = {
                          // teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_emisid,
                          teacher_emisid: this.masterApiResponse.basic_info.teacher_emisid,
                          teacher_name: this.storeDetail.pages.pageData[5].pageDetails.teacherDetails.teacher_name,
                          reason: this.storeDetail.pages.pageData[5].pageDetails.reasonDetails,
                          description: "Reason for not observing teacher"
                        };
                      }
                    }

                    not_verfied = {
                      schools: schoolReasons,
                      "class": teacher == undefined ? {} : teacher,
                      student: studentReasons
                    };

                    if ((_a = this.storeDetail.pages.pageData[8]) === null || _a === void 0 ? void 0 : _a.correctedDetails) {
                      if (this.storeDetail.pages.pageData[10]) {
                        student_assessment_data = this.storeDetail.pages.pageData[10].pageDetails;
                      }

                      learning_outcome_data = {
                        subject: this.storeDetail.pages.pageData[8].pageDetails.subject,
                        term: this.storeDetail.pages.pageData[8].pageDetails.term,
                        unit: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.chapter_no,
                        learning_outcome: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo.learning_outcome,
                        question_data: student_assessment_data
                      };
                    } else {
                      learning_outcome_data = {};
                    }

                    observation_reportconst = {};

                    if (this.storeDetail.pages.pageData[11]) {
                      observation_reportconst = {
                        strength: this.storeDetail.pages.pageData[11].pageDetails.strength,
                        improvement: this.storeDetail.pages.pageData[11].pageDetails.improvement
                      };
                    }

                    if (this.storeDetail.pages.pageData[2]) {
                      emis_data = {
                        emis_classdata: this.storeDetail.pages.pageData[2].correctedClass,
                        emis_correctedData: this.storeDetail.pages.pageData[2].correctedDetails
                      };
                    }

                    if (this.storeDetail.pages.pageData[18]) {
                      omr_data = this.storeDetail.pages.pageData[18].omrData;
                    }

                    if (this.storeDetail.pages.pageData[20]) {
                      gra_data = this.storeDetail.pages.pageData[20].correctedDetails.graStudents;
                    }

                    if (this.storeDetail.pages.pageData[10]) {
                      student_assessment_data = this.storeDetail.pages.pageData[10].pageDetails;
                    }

                    customizationdata = [];

                    if (this.storeDetail.pages.pageData[7]) {
                      customizationdata = _toConsumableArray(this.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList);

                      if (this.storeDetail.pages.pageData[14]) {
                        customizationdata = [].concat(_toConsumableArray(customizationdata), _toConsumableArray(this.storeDetail.pages.pageData[14].correctedDetails.sec_data));
                      }

                      if (this.storeDetail.pages.pageData[16]) {
                        customizationdata = [].concat(_toConsumableArray(customizationdata), _toConsumableArray(this.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList));
                      }

                      if (this.storeDetail.pages.pageData[15]) {
                        customizationdata = [].concat(_toConsumableArray(customizationdata), _toConsumableArray(this.storeDetail.pages.pageData[15].correctedDetails.customizeSectionList));
                      }

                      observation_data = {
                        observation_dataInfo: customizationdata
                      };
                    }

                    if (Number(this.userSessionService.teacher_type()) == 103 && Number(localStorage.getItem("school_management")) == 2) {
                      basicInfoObj['workflow'] = 2;
                    } else {
                      basicInfoObj['workflow'] = localStorage.getItem("selectedWorkflow");
                    }

                    finalData = {
                      basic_info: basicInfoObj,
                      not_verfied: not_verfied,
                      attendance_data: (_b = this.storeDetail.pages.pageData[6]) === null || _b === void 0 ? void 0 : _b.correctedDetails,
                      learning_outcome_data: learning_outcome_data,
                      student_assessment_data: student_assessment_data,
                      observation_data: observation_data,
                      omr_data: omr_data,
                      gra_data: gra_data,
                      scores_section: JSON.parse(localStorage.getItem('scoreSection')),
                      emis_data: emis_data,
                      observation_report: observation_reportconst,
                      final_remarks: localStorage.getItem("remarks"),
                      final_feedbacks: localStorage.getItem("finalobserverfeedbacks")
                    };
                    debugger;
                    _final = {
                      json: JSON.stringify(finalData)
                    };
                    connectionStatus = this.networkService.getCurrentNetworkStatus();

                    if (!(connectionStatus != 1)) {
                      _context11.n = 3;
                      break;
                    }

                    _context11.n = 2;
                    return this.ionicStore.getFinalData();

                  case 2:
                    this.storedFinalData = _context11.v;

                    if (this.storedFinalData == undefined || this.storedFinalData == null) {
                      this.storedFinalData = [];
                      this.storedFinalData.push(finalData);
                    } else {
                      this.storedFinalData = [finalData];
                    }

                    this.ionicStore.setFinalData(this.storedFinalData);
                    this.loading.present();
                    uniqueId = localStorage.getItem("uniqueId");
                    apiObj = {
                      json: JSON.stringify(this.storedFinalData),
                      unique_id: uniqueId + this.observeList
                    };

                    this._apiService.postfinalinfo(apiObj).subscribe(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
                        var _this13 = this;

                        var logDataNew, tempdata, removeitem, arrayindex, i, j, _t2;

                        return _regenerator().w(function (_context10) {
                          while (1) switch (_context10.p = _context10.n) {
                            case 0:
                              _context10.p = 0;

                              if (!(data.status == 200 && data.dataStatus == true)) {
                                _context10.n = 1;
                                break;
                              }

                              localStorage.setItem("saveApiCall", '0');
                              logDataNew = {
                                username: localStorage.getItem("username"),
                                udise_code: localStorage.getItem("udise_code"),
                                observation_id: localStorage.getItem("observation_id"),
                                form_name: "Save Observation",
                                action_name: "Final observation submission",
                                data: "Observation Saved Successfully",
                                completion_percentage: this.progressValue
                              };

                              this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                                _this13._alertService.showAlert("SOMETHING WENT WRONG");
                              });

                              if (this.selectedChoice == 'Yes') {
                                tempdata = this.storeDetail.pages.pageData;
                                removeitem = [];
                                arrayindex = 0;
                                this.storeDetail.pages.currentProgress = this.progressValue;

                                if (level == "1") {
                                  if (this.storeDetail.pages.pageData[1].pageFlow == 'observation') {
                                    arrayindex = 2;
                                  } else {
                                    arrayindex = 2;
                                  }
                                } else {
                                  arrayindex = 2;
                                }

                                for (i = arrayindex; i < this.storeDetail.pages.pageData.length; i++) {
                                  removeitem.push(i);
                                }

                                for (j = removeitem.length - 1; j >= 0; j--) {
                                  this.storeDetail.pages.pageData.splice(removeitem[j], 1);
                                }

                                ;
                                this.ionicStore.setStoreData(this.storeDetail);
                                localStorage.setItem("storedDetails", JSON.stringify(this.storeDetail));
                                this.ionicStore.setOffStorage(this.masterApiResponse);
                                localStorage.setItem("finaldata", JSON.stringify(this.masterApiResponse));
                                this.ionicStore.removeFinalData();
                                localStorage.setItem("observation_id", '');
                                localStorage.removeItem("chapterId");
                                localStorage.removeItem("scannedData");
                                localStorage.removeItem("routingList");
                                localStorage.removeItem('selectedClassSection');
                                localStorage.removeItem("classroom_section_status");
                                localStorage.removeItem("metho_section_status");
                                localStorage.removeItem("stu_attend_section_status");
                                localStorage.removeItem("assessment_section_status"); // localStorage.removeItem("omr_rand_stu_section_status");
                                // localStorage.removeItem("omr_scanner_section_status");
                                // localStorage.removeItem("omr_student_section_status");

                                localStorage.removeItem("notebook_section_status");
                                localStorage.removeItem("pre_obs_qns_section_status");
                                localStorage.removeItem("obs_report_section_status"); // localStorage.removeItem("hod_inspect_section_status");
                                // localStorage.removeItem("emidata_section_status");
                                // localStorage.removeItem("emiverify_section_status");

                                localStorage.setItem("hod_inspect_section_status", this.hod_inspect_section_status);
                                localStorage.setItem("emidata_section_status", this.emidata_section_status);
                                localStorage.setItem("kgbv_section_status", this.kgbv_section_status);
                                this.loading.dismiss();
                                this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(function () {});

                                if (this.storeDetail.pages.pageData.length <= 2) {
                                  this._router.navigate(["/tnvntabs/page-route/classroom"]);
                                }
                              } else {
                                this.loading.dismiss();
                                localStorage.setItem("storedDetails", '');
                                this.ionicStore.removeStoreData();
                                this.ionicStore.removeFinalData();
                                localStorage.removeItem("chapterId");
                                localStorage.setItem("observation_id", '');
                                localStorage.removeItem("finaldata");
                                localStorage.removeItem("scannedData");
                                localStorage.removeItem("routingList");
                                localStorage.removeItem('selectedClassSection');
                                localStorage.removeItem("classroom_section_status");
                                localStorage.removeItem("metho_section_status");
                                localStorage.removeItem("stu_attend_section_status");
                                localStorage.removeItem("assessment_section_status"); // localStorage.removeItem("omr_rand_stu_section_status");
                                // localStorage.removeItem("omr_scanner_section_status");
                                // localStorage.removeItem("omr_student_section_status");

                                localStorage.removeItem("notebook_section_status");
                                localStorage.removeItem("pre_obs_qns_section_status");
                                localStorage.removeItem("obs_report_section_status");
                                localStorage.removeItem("hod_inspect_section_status");
                                localStorage.removeItem("emidata_section_status");
                                localStorage.removeItem("kgbv_section_status");
                                this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(function () {}); // localStorage.removeItem("emiverify_section_status");

                                this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                              }

                              _context10.n = 2;
                              break;

                            case 1:
                              throw data.msg;

                            case 2:
                              _context10.n = 4;
                              break;

                            case 3:
                              _context10.p = 3;
                              _t2 = _context10.v;

                              this._alertService.showAlert(_t2);

                            case 4:
                              return _context10.a(2);
                          }
                        }, _callee10, this, [[0, 3]]);
                      }));
                    }, function (error) {
                      _this12.ionicStore.removeFinalData();

                      localStorage.removeItem("finaldata");
                      localStorage.setItem("observation_id", '');
                      localStorage.removeItem("chapterId");
                      localStorage.removeItem("scannedData");
                      localStorage.removeItem("routingList");
                      localStorage.removeItem('selectedClassSection');
                      localStorage.removeItem("classroom_section_status");
                      localStorage.removeItem("metho_section_status");
                      localStorage.removeItem("stu_attend_section_status");
                      localStorage.removeItem("assessment_section_status"); // localStorage.removeItem("omr_rand_stu_section_status");
                      // localStorage.removeItem("omr_scanner_section_status");
                      // localStorage.removeItem("omr_student_section_status");

                      localStorage.removeItem("notebook_section_status");
                      localStorage.removeItem("pre_obs_qns_section_status");
                      localStorage.removeItem("obs_report_section_status");
                      localStorage.removeItem("hod_inspect_section_status");
                      localStorage.removeItem("emidata_section_status");
                      localStorage.removeItem("kgbv_section_status"); // localStorage.removeItem("emiverify_section_status");

                      _this12.loading.dismiss();

                      _this12.ionicStore.insertData_Replace('ppSchBaseDetails', _this12.ppSchBaseDetails).then(function () {});

                      _this12._router.navigate(["/tnvntabs/page-route/dashboardc"]);

                      _this12._alertService.showAlert(error);
                    });

                    _context11.n = 4;
                    break;

                  case 3:
                    this.networkInfo = 'No internet connection';
                    this.loading.dismiss();

                    this._alertService.showAlert(this.networkInfo, 'Please check your mobile data or wifi connection.');

                  case 4:
                    return _context11.a(2);
                }
              }, _callee11, this);
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
        }, {
          key: "openDiscussModal",
          value: function openDiscussModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee13() {
              var _this14 = this;

              var modal;
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.n) {
                  case 0:
                    _context13.n = 1;
                    return this.modalController.create({
                      component: src_app_components_observationfinalremark_observationfinalremark_component__WEBPACK_IMPORTED_MODULE_11__.ObservationfinalremarkComponent,
                      cssClass: "",
                      componentProps: {},
                      showBackdrop: false,
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context13.v;
                    modal.onDidDismiss().then(function (dataReturned) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee12() {
                        var _this15 = this;

                        return _regenerator().w(function (_context12) {
                          while (1) switch (_context12.n) {
                            case 0:
                              _context12.n = 1;
                              return localStorage.setItem("finalobserverfeedbacks", dataReturned.data);

                            case 1:
                              localStorage.removeItem("routingList");
                              this.previousData = JSON.parse(localStorage.getItem("finaldata"));

                              if (this.previousData != null) {
                                this.selectedChoice = 'No';
                              }

                              this.ionicStore.getOffStorage().then(function (response) {
                                if (response) {
                                  _this15.masterApiResponse = response;

                                  if (_this15.masterApiResponse == null || _this15.masterApiResponse == undefined) {
                                    _this15.masterApiResponse = JSON.parse(localStorage.getItem("masterdata"));
                                  }
                                }

                                _this15.ionicStore.getStoreData().then(function (response) {
                                  _this15.storeDetail = response;

                                  if (_this15.storeDetail == null || _this15.storeDetail == undefined) {
                                    _this15.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                                  }

                                  _this15.selectedClass = _this15.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id;
                                  _this15.selectedSection = _this15.storeDetail.pages.pageData[5].pageDetails.section;

                                  if (_this15.previousData == undefined || _this15.previousData == null) {
                                    _this15.warn();
                                  } else {
                                    _this15.obsanotherWarnInfo();
                                  }
                                });
                              });

                            case 2:
                              return _context12.a(2);
                          }
                        }, _callee12, this);
                      }));
                    });

                    this._apiService.name.subscribe(function (response) {
                      if (response == "showText") {
                        var body = document.getElementsByTagName("ion-modal")[0];
                        body.classList.add("new-info");
                      }
                    });

                    _context13.n = 2;
                    return modal.present();

                  case 2:
                    return _context13.a(2, _context13.v);
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "showErrorLog",
          value: function showErrorLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee14() {
              var modal;
              return _regenerator().w(function (_context14) {
                while (1) switch (_context14.n) {
                  case 0:
                    _context14.n = 1;
                    return this.modalController.create({
                      component: src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_12__.ApiErrorLogComponent,
                      componentProps: {
                        selectedlevel: this.selectedlevel,
                        questionList: []
                      },
                      cssClass: "my-custom-modal-apierror",
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context14.v;
                    _context14.n = 2;
                    return modal.present();

                  case 2:
                    return _context14.a(2, _context14.v);
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "saveDisable",
          value: function saveDisable() {
            if ((this.schlMngId == 32 || this.schlMngId == 36) && this.metho_section_status == 1 && this.notebook_section_status == 1 && this.pre_obs_qns_section_status == 1 && this.obs_report_section_status == 1 && this.hod_inspect_section_status == 1 && this.emidata_section_status == 1 && this.kgbv_section_status == 1) {
              return false;
            } else if ((this.schlMngId != 32 || this.schlMngId != 36) && this.metho_section_status == 1 && this.notebook_section_status == 1 && this.pre_obs_qns_section_status == 1 && this.obs_report_section_status == 1 && this.hod_inspect_section_status == 1 && this.emidata_section_status == 1 && this.kgbv_section_status == 0) {
              return false;
            } else {
              return true;
            }
          }
        }]);
      }();

      _IndexPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: src_app_services_emis_regulatory_service__WEBPACK_IMPORTED_MODULE_2__.RegulatoryService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__.PostService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService
        }];
      };

      _IndexPage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-index',
        template: _raw_loader_index_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_index_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _IndexPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee15() {
              var _this16 = this;

              return _regenerator().w(function (_context15) {
                while (1) switch (_context15.n) {
                  case 0:
                    this.isLoading = true;
                    _context15.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this16.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context15.a(2, _context15.v);
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee16() {
              var _this17 = this;

              return _regenerator().w(function (_context16) {
                while (1) switch (_context16.n) {
                  case 0:
                    this.isLoading = true;
                    _context16.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this17.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context16.a(2, _context16.v);
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee17() {
              return _regenerator().w(function (_context17) {
                while (1) switch (_context17.n) {
                  case 0:
                    this.isLoading = false;
                    _context17.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context17.a(2, _context17.v);
                }
              }, _callee17, this);
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
    63515:
    /*!**************************************************!*\
      !*** ./src/app/pages/tnvn/index/index.page.scss ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.ion-text-wrap {\n  margin-left: 15px;\n}\n\n.bgcolor {\n  background-color: #91a0f3;\n}\n\n.ticktrue {\n  color: green;\n}\n\n.tickfalse {\n  color: red;\n}\n\n.secname {\n  font-size: 18px;\n}\n\n.btnbg {\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n\n.btnbgreject {\n  background-color: red;\n  color: white;\n}\n\n.language {\n  border: 1px solid white;\n  border-radius: 5px;\n  background-color: white;\n  color: var(--ion-color-primary);\n  margin: 8px;\n  padding: 10px;\n  box-shadow: 5px 7px 5px #c6c5c5;\n}\n\n.textaling {\n  text-align: end;\n}\n\n.borderstyle {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n  background-color: var(--ion-color-primary);\n  color: white;\n  margin: 5px;\n}\n\n.padding {\n  padding: 10px;\n}\n\n.custom-popup {\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999999;\n  padding: 420px;\n  top: -240px;\n  left: -400px;\n}\n\n.custom-popup .bg-white {\n  width: 320px;\n  border-radius: 10px;\n}\n\n.custom-popup .bg-white .cls-btn {\n  top: -10px;\n  right: -10px;\n}\n\n.optbtn {\n  text-align: end;\n}\n\n.note {\n  color: red;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.d-flex {\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n\n.pdf {\n  font-family: \"Times New Roman\", Times, serif;\n  color: grey;\n}\n\n::ng-deep.alertButton {\n  background: #8B67B3 !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUdFO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FBQUo7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFLRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtBQUZKOztBQUtFO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGSjs7QUFNRTtFQUNFLGFBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhKOztBQUlJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRk47O0FBR007RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQURSOztBQU9FO0VBQ0UsZUFBQTtBQUpKOztBQU9FO0VBQ0UsVUFBQTtFQUNBLDRDQUFBO0FBSko7O0FBT0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBTUU7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUFISiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvbi10ZXh0LXdyYXB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5iZ2NvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkxYTBmMztcclxuICB9XHJcblxyXG4gIC50aWNrdHJ1ZXtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcblxyXG4gIC50aWNrZmFsc2V7XHJcbiAgICBjb2xvcjogcmVkXHJcbiAgfVxyXG5cclxuICAuc2VjbmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmJ0bmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAuYnRuYmdyZWplY3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubGFuZ3VhZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDVweCA3cHggNXB4ICNjNmM1YzVcclxuICB9XHJcblxyXG4gIC50ZXh0YWxpbmd7XHJcbiAgICB0ZXh0LWFsaWduOmVuZDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXJzdHlsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tcG9wdXB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgICBwYWRkaW5nOiA0MjBweDtcclxuICAgIHRvcDogLTI0MHB4O1xyXG4gICAgbGVmdDogLTQwMHB4O1xyXG4gICAgLmJnLXdoaXRle1xyXG4gICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIC5jbHMtYnRue1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICAub3B0YnRue1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuXHJcbiAgLm5vdGV7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICB9XHJcblxyXG4gIC5kLWZsZXh7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAucGRme1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAuYWxlcnRCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzhCNjdCMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    19699:
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/index/index.page.html ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"margin-left: 20px;\">Palli Paarvai Sections</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-icon class=\"back-icon\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-label style=\"color: white;margin-right: 15px;font-size: 19px;\" slot=\"end\" *ngIf=\"finaldata == null\">Obs-1</ion-label>\r\n    <ion-label style=\"color: white;margin-right: 15px;font-size: 19px;\" slot=\"end\" *ngIf=\"finaldata != null\">Obs-2</ion-label>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"text-align: right;\">\r\n    <button (click)=\"showErrorLog()\" style=\"background: #fff;\">\r\n      <ion-icon  name=\"alert-circle-outline\" style=\"float:right;font-size: 30px;\" ></ion-icon>\r\n    </button>\r\n  </div>\r\n  <ion-row class=\"borderstyle\">\r\n    <ion-col size=\"12\" class=\"padding\">\r\n      <ion-row>\r\n        <!-- <ion-col size=\"6\">\r\n          <ion-label class=\"headlabel\">Palli Paarvai Sections</ion-label>\r\n        </ion-col> -->\r\n        <ion-col size=\"12\" style=\"text-align: center;\">\r\n          <ion-label class=\"headlabel\" style=\"font-size: 19px;\">You are Observing: Class {{class_id}} {{class_with_sec}}</ion-label>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"6\">\r\n          <div class=\"textaling\">\r\n            <ion-label class=\"headlabel language\" (click)=\"changeEnglish()\">E</ion-label>\r\n            <ion-label class=\"headlabel language\" (click)=\"changeTamil()\">த</ion-label>\r\n          </div>\r\n        </ion-col> -->\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <div *ngFor=\"let key of routingList;let i =index\">\r\n    <div *ngIf=\"languageType == 'en'\">\r\n      <ion-card class=\"bgcolor\"\r\n        (click)=\"routeToForm(key.section_name,i,key.section_status,1)\">\r\n        <ion-item style=\"font-size: 18px;\">\r\n          {{key.name}}\r\n          <!-- {{key.section_name == 'methodology' ? this.teachingmethodology : \"\"}}\r\n          {{key.section_name == 'attendance/student-attendance' ? this.studentAttendance : \"\"}}\r\n          {{key.section_name == 'assessment' ? this.studentAssessment: \"\"}}\r\n          {{key.section_name == 'notebook' ? this.notebookVerification : \"\"}}\r\n          {{key.section_name == 'pre-observation-question' ? this.postObservationQuestions : \"\"}}\r\n          {{key.section_name == 'observation' ? this.obsReport : \"\"}}\r\n          {{key.section_name == 'hodinspection' ? this.schoolInspection : \"\"}}\r\n          {{key.section_name == 'emidata' ? this.emisdataValReport : \"\"}} -->\r\n          <ion-icon slot=\"end\" class=\"tickfalse\" name=\"close-outline\" *ngIf=\"key.section_status == 0\"></ion-icon>\r\n          <ion-icon slot=\"end\" class=\"ticktrue\" name=\"checkmark-outline\" *ngIf=\"key.section_status == 1\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n    <div *ngIf=\"languageType == 'ta'\">\r\n      <ion-card class=\"bgcolor\"\r\n        (click)=\"routeToForm(key.section_name,i,key.section_status,1)\">\r\n        <ion-item style=\"font-size: 18px;\">\r\n          {{key.Tamil_name || key.tamil_name}}\r\n          <!-- {{key.section_name == 'methodology' ? this.teachingmethodology : \"\"}}\r\n          {{key.section_name == 'attendance/student-attendance' ? this.studentAttendance : \"\"}}\r\n          {{key.section_name == 'assessment' ? this.studentAssessment: \"\"}}\r\n          {{key.section_name == 'notebook' ? this.notebookVerification : \"\"}}\r\n          {{key.section_name == 'pre-observation-question' ? this.postObservationQuestions : \"\"}}\r\n          {{key.section_name == 'observation' ? this.obsReport : \"\"}}\r\n          {{key.section_name == 'hodinspection' ? this.schoolInspection : \"\"}}\r\n          {{key.section_name == 'emidata' ? this.emisdataValReport : \"\"}} -->\r\n          <ion-icon slot=\"end\" class=\"tickfalse\" name=\"close-outline\" *ngIf=\"key.section_status == 0\"></ion-icon>\r\n          <ion-icon slot=\"end\" class=\"ticktrue\" name=\"checkmark-outline\" *ngIf=\"key.section_status == 1\"></ion-icon>\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-footer style=\"height: 50px; background-color: #2d9cdb;\" [hidden]=\"obs_submit_btn\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button *ngIf=\"finaldata == null\" class=\"btn-next done\" [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0\" (click)=\"obsfinalSubmit()\">\r\n        <ion-label [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-22': this.languageType == 'ta'\r\n        }\"\r\n          \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button *ngIf=\"finaldata != null\" class=\"btn-next done\" [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0 || emidata_section_status == 0\" (click)=\"obsfinalSubmit()\">\r\n        <ion-label [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-22': this.languageType == 'ta'\r\n        }\"\r\n          \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>       \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"selectedChoice == 'Yes' || selectedChoice == 'No'\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button *ngIf=\"selectedChoice == 'Yes'\" class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label         \r\n          >{{saveAndContinue}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button *ngIf=\"selectedChoice == 'No'\" class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-22': this.languageType == 'ta'\r\n        }\"\r\n          \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>      \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer> -->\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"finaldata == null\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0\" class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label style=\"font-size: 20px !important;\"         \r\n          >{{selectedChoice == 'Yes' ? saveAndContinue : submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>     \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"finaldata != null && user_type != 8\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button [disabled]=\"saveDisable()\"  class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label style=\"font-size: 20px !important;\"         \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>     \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\" *ngIf=\"finaldata != null && user_type == 8\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">      \r\n      <ion-tab-button [disabled]=\"metho_section_status == 0 || notebook_section_status == 0 || pre_obs_qns_section_status == 0 || obs_report_section_status == 0\"  class=\"btn-next done\" (click)=\"openDiscussModal()\">\r\n        <ion-label style=\"font-size: 20px !important;\"         \r\n          >{{submitObservation}}\r\n        </ion-label>\r\n      </ion-tab-button>     \r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_index_index_module_ts-es5.js.map