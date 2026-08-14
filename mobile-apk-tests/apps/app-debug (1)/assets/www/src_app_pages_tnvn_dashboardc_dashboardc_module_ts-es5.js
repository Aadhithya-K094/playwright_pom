(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_dashboardc_dashboardc_module_ts"], {
    /***/
    52762:
    /*!***************************************************************!*\
      !*** ./src/app/pages/tnvn/dashboardc/dashboardc.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardcComponent": function DashboardcComponent() {
          return (
            /* binding */
            _DashboardcComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_dashboardc_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./dashboardc.component.html */
      77069);
      /* harmony import */


      var _dashboardc_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboardc.component.scss */
      74052);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/post.service */
      62538);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/components/navigation/navigation.component */
      60006);
      /* harmony import */


      var src_app_components_dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/components/dashboardmodal/dashboardmodal.component */
      94926);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @awesome-cordova-plugins/keyboard/ngx */
      74628);
      /* harmony import */


      var src_app_components_schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/components/schoolListModal/schoollistmodal.component */
      97759);
      /* harmony import */


      var src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/components/apiErrorLog/apiErrorLog.component */
      98747);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @ionic/storage */
      38605);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      34255);
      /* harmony import */


      var _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pp-mark-attendance/pp-mark-attendance.page */
      39448);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);

      var _DashboardcComponent = /*#__PURE__*/function () {
        function DashboardcComponent(loading, modalController, geolocation, _apiService, _postService, _router, route, keyboard, userSessionService, camera, alertController, ionicStore, _alertService, _translate, http, storage, platform, file, alertService, uploadService, diagnostic, networkService, androidPermissions) {
          var _this = this;

          _classCallCheck(this, DashboardcComponent);

          this.loading = loading;
          this.modalController = modalController;
          this.geolocation = geolocation;
          this._apiService = _apiService;
          this._postService = _postService;
          this._router = _router;
          this.route = route;
          this.keyboard = keyboard;
          this.userSessionService = userSessionService;
          this.camera = camera;
          this.alertController = alertController;
          this.ionicStore = ionicStore;
          this._alertService = _alertService;
          this._translate = _translate;
          this.http = http;
          this.storage = storage;
          this.platform = platform;
          this.file = file;
          this.alertService = alertService;
          this.uploadService = uploadService;
          this.diagnostic = diagnostic;
          this.networkService = networkService;
          this.androidPermissions = androidPermissions;
          this.lname = "";
          this.inspectionType = 1;
          this.blockListData = [];
          this.observedSchoolList = []; //=[{"cluster_name":"CHS IRUSAPPA STREET","observed_count":"43"},{"cluster_name":"GOVT. MODEL GHSS TRIPLICANE","observed_count":"14"},{"cluster_name":"CHSS LLOYDS ROAD","observed_count":"7"},{"cluster_name":"CHENNAI GIRLS HR.SEC.SCHOOL -  NUNGAMBAKKAM","observed_count":"11"},{"cluster_name":"GOVT HOBART MUSLIM GIRLS HIGHER SECONDARY SCHOOL","observed_count":"6"},{"cluster_name":"LADY WILLINGTON HIGHER SECONDARY SCHOOL","observed_count":"8"},{"cluster_name":"GOVT HSS NANDANAM","observed_count":"4"},{"cluster_name":"CHSS ALWARPET","observed_count":"5"}];

          this.districtfinalDataList = [];
          this.blockfinalListData = [];
          this.schoolmanageData = [];
          this.daily_school_count = 0;
          this.daily_class_count = 0;
          this.daily_school_target = 0;
          this.daily_class_target = 0;
          this.inspectionList = [{
            "inspection_id": 1,
            "inspection_name": "School inspection"
          }, {
            "inspection_id": 2,
            "inspection_name": "Classroom observation"
          }];
          this.allSchoolList = [];
          this.BlockList = [];
          this.visitedSchoolList = [];
          this.unVisitedSchoolList = [];
          this.selectedSchool = {};
          this.visitedcount = 0;
          this.classTarget = 0;
          this.currentDate = "";
          this.schoolReasons = [];
          this.schoolReasonList = [];
          this.veracityList = [];
          this.sample = false;
          this.masterApiResponse = {};
          this.isKeyboardHide = true;
          this.settingRole = [];
          this.isLocVerified = false;
          this.isLtLngVerified = false;
          this.ppSchBaseDetails = [];

          this.appLanguage = function () {
            _this._apiService.languageInfo.subscribe(function (data) {
              _this.languageType = data;

              _this._translate.use(_this.languageType);

              _this._initialiseTranslation();

              _this.inspectionList = [{
                "inspection_id": 1,
                "inspection_name": _this.schoolObservation
              }, {
                "inspection_id": 2,
                "inspection_name": _this.classroomVerfication
              }];
            });
          };

          this.getBlockList = function () {
            _this.loading.present();

            var userName = localStorage.getItem("username");
            var userDetail = {
              username: userName,
              district_id: _this.district_id
            };

            _this._apiService.getBlockList(userDetail).subscribe(function (response) {
              _this.BlockList = response.records.blocklist;

              _this.loading.dismiss();
            }, function (error) {
              _this.loading.dismiss();

              _this._alertService.showAlert("SOMETHING WENT WRONG");
            });
          };

          this.gotoinspection = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this2 = this;

              var logData;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    debugger;
                    this.isKeyboardHide = true;

                    if (this.inspectionType) {
                      if (this.inspectionType == 1) {
                        localStorage.setItem("veracity_type", "inspection");
                      } else if (this.inspectionType == 2) {
                        localStorage.setItem("veracity_type", "veracity");
                      }
                    }

                    logData = {
                      username: localStorage.getItem("username"),
                      udise_code: this.udise_code,
                      form_name: "UDISE Code entry",
                      action_name: "On Submit",
                      data: "Entered udise code : " + this.udise_code,
                      completion_percentage: "0"
                    };

                    this._apiService.setActivityLog(logData).subscribe(function (response) {}, function (error) {
                      _this2._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                    this.loading.present("Getting School Info");
                    _context2.n = 1;
                    return this._apiService.getSchoolDetails(this.udise_code).subscribe(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
                        var _this3 = this;

                        var logDataNew, schoolId;
                        return _regenerator().w(function (_context) {
                          while (1) switch (_context.n) {
                            case 0:
                              this.loading.dismiss();

                              if (!data.dataStatus) {
                                this.loading.dismiss();

                                this._alertService.showAlert("Please enter correct UDISE code of the school");
                              } else {
                                logDataNew = {
                                  username: localStorage.getItem("username"),
                                  udise_code: this.udise_code,
                                  form_name: "UDISE Code entry",
                                  action_name: "On Success",
                                  data: "Udise code : " + this.udise_code + ", School name : " + data.result[0].SclNam + ", School id : " + data.result[0].SclId,
                                  completion_percentage: "0"
                                };

                                this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                                  _this3._alertService.showAlert("SOMETHING WENT WRONG");
                                });

                                schoolId = data.result[0].SclId;
                                this.inspectionDistrict = data.result[0].DistNam;
                                this.inspectionBlock = data.result[0].block_name;
                                this.inspectionSchool = data.result[0].SclNam;
                                this.selectedSchool = {
                                  "school_id": data.result[0].SclId,
                                  "school_name": data.result[0].SclNam,
                                  "latitude": data.result[0].latitude,
                                  "longitude": data.result[0].longitude
                                };
                                this.selectedlevel = 1;
                                localStorage.setItem("selectedlevel", this.selectedlevel);
                                localStorage.setItem("schlMngId", data.result[0].ManagID);
                                this.getSchoolData();
                              }

                            case 1:
                              return _context.a(2);
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      _this2.loading.dismiss();
                    });

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          };

          this.goToSchoolSearch = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this4 = this;

              var logData;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.isKeyboardHide = true;
                    this.udise_code = this.route.snapshot.queryParamMap.get("id");

                    if (this.inspectionType) {
                      if (this.inspectionType == 1) {
                        localStorage.setItem("veracity_type", "inspection");
                      } else if (this.inspectionType == 2) {
                        localStorage.setItem("veracity_type", "veracity");
                      }
                    }

                    logData = {
                      username: localStorage.getItem("username"),
                      udise_code: this.udise_code,
                      form_name: "UDISE Code entry",
                      action_name: "On Submit",
                      data: "Entered udise code : " + this.udise_code,
                      completion_percentage: "0"
                    };

                    this._apiService.setActivityLog(logData).subscribe(function (response) {}, function (error) {
                      _this4._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                    this.loading.present("Getting School Info");
                    _context4.n = 1;
                    return this._apiService.getSchoolDetails(this.udise_code).subscribe(function (data) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                        var _this5 = this;

                        var logDataNew, schoolId;
                        return _regenerator().w(function (_context3) {
                          while (1) switch (_context3.n) {
                            case 0:
                              this.loading.dismiss();

                              if (data.result[0].SclNam == null) {
                                this.loading.dismiss();

                                this._alertService.showAlert("Please enter correct UDISE code of the school");
                              } else {
                                logDataNew = {
                                  username: localStorage.getItem("username"),
                                  udise_code: this.udise_code,
                                  form_name: "UDISE Code entry",
                                  action_name: "On Success",
                                  data: "Udise code : " + this.udise_code + ", School name : " + data.result[0].SclNam + ", School id : " + data.result[0].SclId,
                                  completion_percentage: "0"
                                };

                                this._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {
                                  _this5._alertService.showAlert("SOMETHING WENT WRONG");
                                });

                                schoolId = data.result[0].SclId;
                                this.inspectionDistrict = data.result[0].DistNam;
                                this.inspectionBlock = data.result[0].block_name;
                                this.inspectionSchool = data.result[0].SclNam;
                                this.selectedSchool = {
                                  "school_id": data.result[0].SclId,
                                  "school_name": data.result[0].SclNam,
                                  "latitude": data.result[0].latitude,
                                  "longitude": data.result[0].longitude
                                };
                                this.selectedlevel = 1;
                                localStorage.setItem("selectedlevel", this.selectedlevel);
                                this.schoolDetails = data.result[0];
                                localStorage.setItem("schlMngId", data.result[0].ManagID);
                                this.getSchoolData();
                              }

                            case 1:
                              return _context3.a(2);
                          }
                        }, _callee3, this);
                      }));
                    }, function (error) {
                      _this4.loading.dismiss();
                    });

                  case 1:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          };

          this.getSchoolList = function () {
            debugger;

            _this.loading.present();

            var userName = localStorage.getItem("username");
            var userDetail;

            if (_this.selectedBlockData) {
              userDetail = {
                username: userName,
                block_id: _this.selectedBlockData
              };
            } else if (_this.userSessionService.emis_usertype() == 6) {
              userDetail = {
                username: userName,
                block_id: _this.userSessionService.block_id()
              };
            } else {
              userDetail = {
                username: userName
              };
            }

            _this._apiService.getSchoolList(userDetail).subscribe(function (response) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
                var _this6 = this;

                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, schooldata, indexvalue;

                return _regenerator().w(function (_context5) {
                  while (1) switch (_context5.n) {
                    case 0:
                      this.loading.dismiss();
                      this.veracityList = (_a = response.records) === null || _a === void 0 ? void 0 : _a.schoolList;
                      this.udiseCodeEntry = (_b = response.records) === null || _b === void 0 ? void 0 : _b.user_info.udise_code_entry;
                      this.districtDropDown = (_c = response.records) === null || _c === void 0 ? void 0 : _c.user_info.district_dropdown;
                      this.blockDropDown = (_d = response.records) === null || _d === void 0 ? void 0 : _d.user_info.block_dropdown;
                      this.daily_school_count = (_e = response.records) === null || _e === void 0 ? void 0 : _e.user_info.daily_school_count;
                      this.daily_class_count = (_f = response.records) === null || _f === void 0 ? void 0 : _f.user_info.daily_class_count;
                      this.daily_school_target = (_g = response.records) === null || _g === void 0 ? void 0 : _g.user_info.daily_school_target;
                      this.daily_class_target = (_h = response.records) === null || _h === void 0 ? void 0 : _h.user_info.daily_class_target;
                      debugger;

                      if (this.districtDropDown == '1') {
                        // this.getDistricts();
                        debugger;
                        this.districtData = this.masterApiResponse.districts;
                      } else if (this.districtDropDown == '0' && this.blockDropDown == '1') {
                        this.blockListData = this.masterApiResponse.blocks.filter(function (x) {
                          return x.district_id == _this6.userSessionService.district_id();
                        }); // this.getBlockListByDistrictId(this.userSessionService.district_id());          
                      }

                      this.blockDropDown = (_j = response.records) === null || _j === void 0 ? void 0 : _j.user_info.block_dropdown;
                      localStorage.setItem("user_type", (_k = response.records) === null || _k === void 0 ? void 0 : _k.user_info.user_type);
                      localStorage.setItem("createdby_role", (_l = response.records) === null || _l === void 0 ? void 0 : _l.createdby_role_id);

                      if (!(this.usertype == 8)) {
                        _context5.n = 5;
                        break;
                      }

                      schooldata = JSON.parse((_m = response.records) === null || _m === void 0 ? void 0 : _m.schoolList[0]);
                      this.selectedSchool = schooldata.data.completeOutput[0];
                      this.selectedlevel = 1;

                      if (!(this.pageMoved != 'yes' && this.storeDetail == null && this.storeDetail == undefined)) {
                        _context5.n = 2;
                        break;
                      }

                      _context5.n = 1;
                      return this.fetchOfflineData();

                    case 1:
                      _context5.n = 5;
                      break;

                    case 2:
                      if (!(this.pageMoved != 'yes' && this.storeDetail.pages.pageData.length == 0)) {
                        _context5.n = 4;
                        break;
                      }

                      _context5.n = 3;
                      return this.fetchOfflineData();

                    case 3:
                      _context5.n = 5;
                      break;

                    case 4:
                      if (!(this.pageMoved != 'yes')) {
                        _context5.n = 5;
                        break;
                      }

                      _context5.n = 5;
                      return this.fetchOfflineData();

                    case 5:
                      this.veracityList = this.veracityList.map(function (school, index) {
                        indexvalue = index;
                        school = JSON.parse(school);
                        _this6.schlManageId = school.data.sch_management_id;

                        if (Number(school.data.sch_management_id) == 1) {
                          school.schooltypename = _this6.primarytype;
                        }

                        if (Number(school.data.sch_management_id) == 3) {
                          school.schooltypename = _this6.hightype;
                        }

                        if (Number(school.data.sch_management_id) == 4) {
                          school.schooltypename = _this6.highertype;
                        }

                        return school;
                      });
                      this.veracityList = this.veracityList.filter(function (data) {
                        if (data.data.completeOutput.length > 0 || data.data.filteredOutput.length > 0) {
                          return data;
                        }
                      });

                      if (this.veracityList.length < 2 && this.veracityList.length > 0) {
                        this.allSchoolList = this.veracityList[0].data.completeOutput;

                        if (Number(this.userSessionService.emis_usertype()) == 6) {
                          this.observedSchoolList = this.veracityList[0].data.zoneObservation;
                          this.observedSchoolList = this.observedSchoolList.sort(function (a, b) {
                            return a.cluster_name > b.cluster_name ? 1 : b.cluster_name > a.cluster_name ? -1 : 0;
                          });
                        } else {
                          this.observedSchoolList = this.veracityList[0].data.blockObservation;
                          this.observedSchoolList = this.observedSchoolList.sort(function (a, b) {
                            return a.block_name > b.block_name ? 1 : b.block_name > a.block_name ? -1 : 0;
                          });
                        }

                        this.unVisitedSchoolList = this.veracityList[0].data.completeOutput;
                        this.selectedlevel = this.veracityList[0].level;
                        localStorage.setItem("selectedWorkflow", this.veracityList[0].data.workflow_id);
                        localStorage.setItem("selectedlevel", this.selectedlevel);
                        localStorage.setItem("selectedschooltype", this.veracityList[0].schoolType);
                        localStorage.setItem("selectedClasses", this.veracityList[0].data.class_applicaple);
                        localStorage.setItem("schlMngId", this.veracityList[0].data.completeOutput[0].manage_id);
                      }

                      this.loading.dismiss();
                      this.currentDate = response.records.current_date;
                      this.schoolReasons = response.records.school_reasons != false ? response.records.school_reasons : [];
                      this.todayQuotes = response.records.today_quotes;
                      this.targetDetails = response.records.targets;

                      if (this.targetDetails.classTarget) {
                        this.visitedcount = this.targetDetails.classTarget.visitedcount;
                        this.classTarget = this.targetDetails.classTarget.classtarget;
                      }

                      this.observedSchool = Number(Number(this.visitedcount) / Number(this.classTarget));

                    case 6:
                      return _context5.a(2);
                  }
                }, _callee5, this);
              }));
            }, function (error) {
              _this._alertService.showAlert("SOMETHING WENT WRONG");

              var logData = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                form_name: "Dashboard Api",
                action_name: "Error in Getting school list",
                data: "Entered udise code : " + localStorage.getItem("udise_code"),
                completion_percentage: "0"
              };

              _this._apiService.setActivityLog(logData).subscribe(function (response) {}, function (error) {
                _this._alertService.showAlert("SOMETHING WENT WRONG");
              });

              _this.loading.dismiss();

              _this._alertService.showAlert("SOMETHING WENT WRONG");
            });
          };
        }

        return _createClass(DashboardcComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this7 = this;

            this.initial();

            if (localStorage.getItem("saveApiCall") != '1' || localStorage.getItem("saveApiCall") == undefined && localStorage.getItem("saveApiCall") == null) {
              localStorage.setItem("saveApiCall", '0');
            }

            this.ionicStore.getOffStorage().then(function (response) {
              if (response != null) {
                _this7.masterApiResponse = response;

                _this7.initFunction();
              } else {
                _this7.masterApiResponse = {};

                _this7.jsonFetch();
              }
            });
          }
        }, {
          key: "initial",
          value: function initial() {
            var _this8 = this;

            this.ionicStore.getData('ppSchBaseDetails').then(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
                return _regenerator().w(function (_context6) {
                  while (1) switch (_context6.n) {
                    case 0:
                      this.ppSchBaseDetails = data ? data : [];

                    case 1:
                      return _context6.a(2);
                  }
                }, _callee6, this);
              }));
            });
          }
        }, {
          key: "jsonFetch",
          value: function jsonFetch() {
            var _this9 = this;

            debugger;
            fetch('https://d1wpyxz35bzzz4.cloudfront.net/pp_settings_clstyp_acadyr_rol_wrkflw.json').then(function (res) {
              return res.json();
            }).then(function (res) {
              _this9.masterApiResponse.roles = res.roles;
              _this9.masterApiResponse.teacher_reasons = res.teacher_reasons;
              _this9.masterApiResponse.mismatch_reasons = res.mismatch_reasons;
              _this9.masterApiResponse.student_reasons = res.student_reasons;
              fetch('https://d1wpyxz35bzzz4.cloudfront.net/common_master_data_med_inst_dist_blk.json').then(function (res) {
                return res.json();
              }).then(function (res) {
                debugger;
                _this9.masterApiResponse.medium_info = res.medium_instruction;
                _this9.masterApiResponse.subjects_all = res.subject;
                _this9.masterApiResponse.districts = res.districts;
                _this9.masterApiResponse.blocks = res.blocks; // this.districtDataList = res.districts;

                _this9.blockListData = res.blocks;
                fetch('https://d1wpyxz35bzzz4.cloudfront.net/pp_ob_questions_v1.json').then(function (res) {
                  return res.json();
                }).then(function (res) {
                  _this9.masterApiResponse.methodologys = res.getTeachingMethodologyNew;
                  var questionSubArr = res.getTeachingQuestionsNew_tnvnnew.concat(res.getChildQuestions_new);
                  questionSubArr.forEach(function (v) {
                    v.action_id = v.action_id.toString();
                    v.ob_qus_id = v.ob_qus_id.toString();
                    v.param_id = v.param_id.toString();
                    v.param_priority = v.param_priority.toString();
                    v.sec_id = v.sec_id.toString();
                  }); // this.masterApiResponse.methodology_questions_lang = res.getTeachingQuestionsNew_tnvnnew 

                  _this9.masterApiResponse.methodology_questions_lang = questionSubArr;

                  _this9.ionicStore.setOffStorage(_this9.masterApiResponse); //   debugger
                  //   this.storage.set('offStoreData', { masterRes: this.masterApiResponse }).then(r => {
                  //     debugger
                  //     setTimeout(() => {
                  //       this.storage.get('offStoreData').then(res=>{
                  //       });
                  //      debugger
                  //     }, 1000);
                  //  });


                  localStorage.setItem("masterdata", JSON.stringify(_this9.masterApiResponse));

                  _this9.initFunction();
                });
              });
            });
          }
        }, {
          key: "initFunction",
          value: function initFunction() {
            var _this0 = this;

            this.keyboard.onKeyboardWillShow().subscribe(function () {
              _this0.isKeyboardHide = false;
            });
            this.keyboard.onKeyboardWillHide().subscribe(function () {
              _this0.isKeyboardHide = true;
            });
            this.unVisitedSchoolList = [];

            if (this.storeDetail != undefined) {
              if (this.storeDetail.pages.pageData.length > 20) {
                this.ionicStore.getFinalData().then(function (response) {
                  if (response != null) {
                    _this0._apiService.postfinalinfo(response).subscribe(function (data) {
                      try {
                        if (data['status'] == 200 && data['dataStatus'] == true) {
                          _this0.ionicStore.removeStoreData();

                          _this0.ionicStore.removeOffStorage();

                          _this0.ionicStore.removeFinalData();

                          localStorage.removeItem("classInfo");
                          localStorage.removeItem("chapterId");
                          localStorage.removeItem("schoolInfo");
                          localStorage.removeItem("teacherInfo");
                          localStorage.removeItem("finaldata");
                          localStorage.removeItem("scannedData");
                          _this0.sSchool = undefined;
                          _this0.selectedSchool = {};
                          _this0.pageMoved = undefined;

                          _this0.dashboardPageInitiates();

                          _this0._apiService.languageDisableUpdate(false);
                        } else {
                          throw data['msg'];
                        }
                      } catch (err) {
                        _this0._alertService.showAlert(err);
                      }
                    }, function (error) {
                      _this0.ionicStore.removeStoreData();

                      _this0.ionicStore.removeOffStorage();

                      _this0.ionicStore.removeFinalData();

                      localStorage.removeItem("classInfo");
                      localStorage.removeItem("chapterId");
                      localStorage.removeItem("schoolInfo");
                      localStorage.removeItem("finaldata");
                      localStorage.removeItem("teacherInfo");
                      localStorage.removeItem("scannedData");
                      _this0.selectedSchool = {};
                      _this0.sSchool = undefined;
                      _this0.pageMoved = undefined;

                      _this0.dashboardPageInitiates();

                      _this0._apiService.languageDisableUpdate(false);

                      _this0._alertService.showAlert(error);
                    });
                  } else {
                    _this0.sSchool = undefined;

                    _this0.dashboardPageInitiates();
                  }
                });
              } else {
                this.sSchool = undefined;
                this.dashboardPageInitiates();
              }
            } else {
              this.sSchool = undefined;
              this.dashboardPageInitiates();
            }

            if (this.route.snapshot.queryParamMap.get("id")) {
              this.usertype = this.userSessionService.emis_usertype();
              this.goToSchoolSearch();
              this.isKeyboardHide = true;
            }

            var languageStatus = localStorage.getItem("language");

            if (languageStatus != null) {
              this.languageType = languageStatus;

              this._apiService.languageChange(this.languageType);

              this.appLanguage();
            } else {
              this.appLanguage();
            }
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this1 = this;

            this._translate.get("welcome").subscribe(function (res) {
              _this1.welcome = res;
            });

            this._translate.get("chooseNatureOfVisit").subscribe(function (res) {
              _this1.chooseNatureOfVisit = res;
            });

            this._translate.get("schoolObservation").subscribe(function (res) {
              _this1.schoolObservation = res;
            });

            this._translate.get("classroomVerfication").subscribe(function (res) {
              _this1.classroomVerfication = res;
            });

            this._translate.get("enterUdiseCode").subscribe(function (res) {
              _this1.enterUdiseCode = res;
            });

            this._translate.get("anyschoolUdiseCode").subscribe(function (res) {
              _this1.anyschoolUdiseCode = res;
            });

            this._translate.get("district").subscribe(function (res) {
              _this1.district = res;
            });

            this._translate.get("block").subscribe(function (res) {
              _this1.block = res;
            });

            this._translate.get("school").subscribe(function (res) {
              _this1.school = res;
            });

            this._translate.get("startSchoolObservation").subscribe(function (res) {
              _this1.startSchoolObservation = res;
            });

            this._translate.get("observationTarget").subscribe(function (res) {
              _this1.observationTarget = res;
            });

            this._translate.get("teachersTarget").subscribe(function (res) {
              _this1.teachersTarget = res;
            });

            this._translate.get("schoolsVisited").subscribe(function (res) {
              _this1.schoolsVisited = res;
            });

            this._translate.get("teachersObserved").subscribe(function (res) {
              _this1.teachersObserved = res;
            });

            this._translate.get("observedOn").subscribe(function (res) {
              _this1.observedOn = res;
            });

            this._translate.get("classroomObservation").subscribe(function (res) {
              _this1.classroomObservation = res;
            });

            this._translate.get("selectSchool").subscribe(function (res) {
              _this1.selectSchool = res;
            });

            this._translate.get("observeSchool").subscribe(function (res) {
              _this1.observeSchool = res;
            });

            this._translate.get("eitherOR").subscribe(function (res) {
              _this1.eitherOR = res;
            });

            this._translate.get("chooseSchool").subscribe(function (res) {
              _this1.chooseSchool = res;
            });

            this._translate.get("noSchool").subscribe(function (res) {
              _this1.noSchool = res;
            });

            this._translate.get("greetings").subscribe(function (res) {
              _this1.greetings = res;
            });

            this._translate.get("schooltype").subscribe(function (res) {
              _this1.schooltype = res;
            });

            this._translate.get("primarytype").subscribe(function (res) {
              _this1.primarytype = res;
            });

            this._translate.get("hightype").subscribe(function (res) {
              _this1.hightype = res;
            });

            this._translate.get("highertype").subscribe(function (res) {
              _this1.highertype = res;
            });

            this._translate.get("continue").subscribe(function (res) {
              _this1["continue"] = res;
            });

            this._translate.get("start").subscribe(function (res) {
              _this1.start = res;
            });

            this._translate.get("noneAbove").subscribe(function (res) {
              _this1.noneAbove = res;
            });

            this._translate.get("completed").subscribe(function (res) {
              _this1.completed = res;
            });

            this._translate.get("noTeacherFound").subscribe(function (res) {
              _this1.noTeacherFound = res;
            });

            this._translate.get("noStudentsFound").subscribe(function (res) {
              _this1.noStudentsFound = res;
            });

            this._translate.get("fetchingText").subscribe(function (res) {
              _this1.fetchingText = res;
            });
          }
        }, {
          key: "dashboardPageInitiates",
          value: function dashboardPageInitiates() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this10 = this;

              var filterObsArray, filterObsDistrictArray, userIdData, _userIdData;

              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    debugger;
                    this.usertype = this.userSessionService.emis_usertype();
                    this.usertype1 = this.userSessionService.emis_usertype1();
                    this.teachertype = this.userSessionService.teacher_type();
                    this.district_id = this.userSessionService.district_id(); // this.http.get<any>("assets/tnvn/user_info.json").subscribe((data: any) => {
                    // this._apiService.getVeracityUserType().subscribe((data: any) => {

                    debugger;
                    filterObsArray = this.masterApiResponse.roles.filter(function (item) {
                      return Number(item.user_type) == Number(_this10.usertype) && Number(item.user_type1) == Number(3) && item.LEVEL == 'State';
                    }); //this.usertype1
                    // const filterObsArray = this.masterApiResponse.roles.filter(item => (Number(item.user_type) == Number(this.usertype) && item.LEVEL == 'State'))//this.usertype1

                    if (filterObsArray.length > 0) {
                      filterObsArray.forEach(function (items) {
                        if (items.school_type_1 != null && items.school_type_1 != "") {
                          // items.school_type_1 = JSON.parse(items.school_type_1);
                          items.school_type_1 = typeof items.school_type_1 == 'string' ? JSON.parse(items.school_type_1) : items.school_type_1;
                          _this10.which_user_level = Number(items.school_type_1.level);
                        } else if (items.school_type_2 != null && items.school_type_2 != "") {
                          // items.school_type_2 = JSON.parse(items.school_type_2);
                          items.school_type_2 = typeof items.school_type_2 == 'string' ? JSON.parse(items.school_type_2) : items.school_type_2;
                          _this10.which_user_level = Number(items.school_type_2.level);
                        } else if (items.school_type_3 != null && items.school_type_3 != "") {
                          // items.school_type_3 = JSON.parse(items.school_type_3);
                          items.school_type_3 = typeof items.school_type_3 == 'string' ? JSON.parse(items.school_type_3) : items.school_type_3;
                          _this10.which_user_level = Number(items.school_type_3.level);
                        }
                      });
                    }

                    filterObsDistrictArray = this.masterApiResponse.roles.filter(function (item) {
                      return Number(item.user_type) == Number(_this10.usertype) && Number(item.user_type1) == Number(_this10.usertype1) && item.LEVEL == 'District';
                    }); // const filterObsDistrictArray = this.masterApiResponse.roles.filter(item => (Number(item.user_type) == Number(this.usertype) && item.LEVEL == 'District'))

                    if (filterObsDistrictArray.length > 0) {
                      filterObsDistrictArray.forEach(function (items) {
                        if (items.school_type_1 != null && items.school_type_1 != "") {
                          // items.school_type_1 = JSON.parse(items.school_type_1);
                          items.school_type_1 = typeof items.school_type_1 == 'string' ? JSON.parse(items.school_type_1) : items.school_type_1;
                          _this10.which_user_level = Number(items.school_type_1.level);
                        } else if (items.school_type_2 != null && items.school_type_2 != "") {
                          // items.school_type_2 = JSON.parse(items.school_type_2);
                          items.school_type_2 = typeof items.school_type_2 == 'string' ? JSON.parse(items.school_type_2) : items.school_type_2;
                          _this10.which_user_level = Number(items.school_type_2.level);
                        } else if (items.school_type_3 != null && items.school_type_3 != "") {
                          // items.school_type_3 = JSON.parse(items.school_type_3);
                          items.school_type_3 = typeof items.school_type_3 == 'string' ? JSON.parse(items.school_type_3) : items.school_type_3;
                          _this10.which_user_level = Number(items.school_type_3.level);
                        }
                      });
                    }

                    debugger;

                    if (!(filterObsArray.length > 0 && filterObsArray[0].LEVEL == "State" && this.which_user_level == 4)) {
                      _context7.n = 1;
                      break;
                    }

                    this.which_user = 'state';
                    localStorage.setItem("createdby_role", filterObsArray[0].id);
                    this.observationdata = [];

                    if (!((this.observationdata == undefined || this.observationdata.length == 0) && this.which_user == 'state')) {
                      _context7.n = 1;
                      break;
                    }

                    this.districtDropDown = filterObsArray[0].district_dropdown;
                    this.blockDropDown = filterObsArray[0].block_dropdown;
                    this.udiseCodeEntry = filterObsArray[0].udise_code_entry;
                    this.which_user = 'state';
                    localStorage.setItem("user_type", this.which_user);
                    this.curDate = new Date();
                    userIdData = {
                      "user_id": localStorage.getItem("username"),
                      "level": 4
                    };
                    _context7.n = 1;
                    return this._apiService.getObsCount(userIdData).then(function (response) {
                      debugger;
                      _this10.schoolmanageData = response.records.observationdata;
                      _this10.observationdata = response.records.observationdata;
                      _this10.school_type_list = response.records.school_type;

                      if (response.records.classTarget != undefined) {
                        _this10.targetDetails = response.records.classTarget;

                        if (_this10.targetDetails) {
                          _this10.visitedcount = _this10.targetDetails[0].visitedcount;
                          _this10.classTarget = _this10.targetDetails[0].classtarget;
                        }

                        _this10.observedSchool = Number(Number(_this10.visitedcount) / Number(_this10.classTarget));
                      }

                      if (response.records.today_quotes != undefined) {
                        _this10.todayQuotes = response.records.today_quotes.quotes;
                      }

                      _this10.districtfinalDataList = [];
                      _this10.districtDataList = _this10.masterApiResponse.districts.filter(function (test, index, array) {
                        return index == array.findIndex(function (findTest) {
                          return findTest.id == test.id;
                        });
                      });

                      _this10.districtDataList.forEach(function (item2) {
                        var check_district_id = String(item2.id);

                        var filterObsArray = _this10.observationdata.filter(function (item) {
                          return item.district_id == check_district_id;
                        });

                        if (filterObsArray.length > 0 && filterObsArray[0].level == "3") {
                          if (check_district_id == filterObsArray[0].district_id) {
                            var dis_wise_sch_count = [];
                            filterObsArray.forEach(function (element) {
                              if (element.school_id) {
                                dis_wise_sch_count.push(element.school_id);
                              }
                            });
                            var sum = dis_wise_sch_count.length;

                            _this10.districtfinalDataList.push({
                              "district_id": check_district_id,
                              "district_name": item2.district_name,
                              "levelsbyDistrictwise": sum
                            });
                          }
                        } else {
                          _this10.districtfinalDataList.push({
                            "district_id": check_district_id,
                            "district_name": item2.district_name,
                            "levelsbyDistrictwise": 0
                          });
                        }
                      });

                      _this10.districtfinalDataList = _this10.districtfinalDataList.filter(function (test, index, array) {
                        return index == array.findIndex(function (findTest) {
                          return findTest.district_id == test.district_id;
                        });
                      });

                      _this10.districtfinalDataList.sort(function (a, b) {
                        if (a.district_name < b.district_name) return -1;
                        if (a.district_name > b.district_name) return 1;
                        return 0;
                      });
                    }, function (error) {
                      _this10.loading.dismiss();

                      _this10._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                  case 1:
                    if (!(filterObsDistrictArray.length > 0 && filterObsDistrictArray[0].LEVEL == "District" && this.which_user_level == 3)) {
                      _context7.n = 2;
                      break;
                    }

                    this.which_user = 'district';
                    localStorage.setItem("createdby_role", filterObsDistrictArray[0].id);
                    this.observationdata = [];

                    if (!((this.observationdata == undefined || this.observationdata.length == 0) && this.which_user == 'district')) {
                      _context7.n = 2;
                      break;
                    }

                    this.districtDropDown = filterObsDistrictArray[0].district_dropdown;
                    this.blockDropDown = filterObsDistrictArray[0].block_dropdown;
                    this.udiseCodeEntry = filterObsDistrictArray[0].udise_code_entry;
                    this.which_user = 'district';
                    localStorage.setItem("user_type", this.which_user);
                    this.curDate = new Date();
                    _userIdData = {
                      "user_id": localStorage.getItem("username"),
                      "level": 3
                    };
                    console.log(1);
                    _context7.n = 2;
                    return this._apiService.getObsCount(_userIdData).then(function (response) {
                      console.log(2);

                      if (response.status == 200 && response.dataStatus == true) {
                        _this10.schoolmanageData = response.records.observationdata;
                        _this10.observationdata = response.records.observationdata;
                        _this10.school_type_list = response.records.school_type;

                        if (response.records.classTarget != undefined) {
                          _this10.targetDetails = response.records.classTarget;

                          if (_this10.targetDetails) {
                            _this10.visitedcount = _this10.targetDetails[0].visitedcount;
                            _this10.classTarget = _this10.targetDetails[0].classtarget;
                          }

                          _this10.observedSchool = Number(Number(_this10.visitedcount) / Number(_this10.classTarget));
                        }

                        if (response.records.today_quotes != undefined) {
                          _this10.todayQuotes = response.records.today_quotes.quotes;
                        }

                        _this10.blockListData = [];

                        _this10.masterApiResponse.blocks.forEach(function (element) {
                          if (String(element.district_id) == _this10.userSessionService.district_id()) {
                            _this10.blockListData.push({
                              "block_id": element.block_id,
                              "block_name": element.block_name
                            });
                          }
                        });

                        _this10.selectedBlockData = {};
                        _this10.sVeracity = {};
                        _this10.selectedSchool = {};
                        _this10.allSchoolList = [];
                        _this10.blockListData = _this10.blockListData.filter(function (test, index, array) {
                          return index == array.findIndex(function (findTest) {
                            return findTest.block_id == test.block_id;
                          });
                        });
                        _this10.blockfinalListData = [];

                        _this10.blockListData.forEach(function (item3) {
                          var check_block_id = String(item3.block_id);

                          var filterObsArray = _this10.observationdata.filter(function (item) {
                            return item.block_id == check_block_id;
                          });

                          if (filterObsArray.length > 0 && filterObsArray[0].level == "2") {
                            var block_wise_sch_count = [];
                            filterObsArray.forEach(function (element) {
                              if (element.school_id) {
                                block_wise_sch_count.push(element.school_id);
                              }
                            });
                            var sum = block_wise_sch_count.length;

                            _this10.blockfinalListData.push({
                              "block_id": check_block_id,
                              "block_name": item3.block_name,
                              "levelsbyBlockwise": sum
                            });
                          } else {
                            _this10.blockfinalListData.push({
                              "block_id": check_block_id,
                              "block_name": item3.block_name,
                              "levelsbyBlockwise": 0
                            });
                          }
                        });

                        _this10.blockfinalListData = _this10.blockfinalListData.filter(function (test, index, array) {
                          return index == array.findIndex(function (findTest) {
                            return findTest.block_id == test.block_id;
                          });
                        });

                        _this10.blockfinalListData.sort(function (a, b) {
                          if (a.block_name < b.block_name) return -1;
                          if (a.block_name > b.block_name) return 1;
                          return 0;
                        });
                      }
                    }, function (error) {
                      _this10.loading.dismiss();

                      _this10._alertService.showAlert("SOMETHING WENT WRONG");
                    });

                  case 2:
                    console.log(3);
                    this.getStorageData(filterObsArray, filterObsDistrictArray);

                  case 3:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "getStorageData",
          value: function getStorageData(filterObsArray, filterObsDistrictArray) {
            var _this11 = this;

            if (!localStorage.getItem("veracity_type")) {
              localStorage.setItem("veracity_type", "veracity");
            }

            this.ionicStore.getStoreData().then(function (response) {
              _this11.storeDetail = response;

              if (filterObsArray.length == 0 && filterObsDistrictArray.length == 0) {
                _this11.which_user_level = 1;
              }

              if (_this11.which_user_level == 1 || _this11.which_user_level == 2) {
                _this11.which_user = 'dummy_user';

                if (_this11.which_user == 'dummy_user') {
                  _this11.getSchoolList();
                }
              } else {
                _this11.getSchoolList();
              }

              ;

              if (_this11.storeDetail == null) {
                if (!_this11.route.snapshot.queryParamMap.get("id")) {
                  _this11.inspectionDistrict = undefined;
                  _this11.udise_code = undefined;
                  _this11.inspectionBlock = undefined;
                  _this11.inspectionSchool = undefined;
                  _this11.selectedSchool = {};
                }

                _this11._apiService.languageDisableUpdate(false);

                _this11.pageMoved = undefined;
                var tempData = {
                  pages: {
                    pageData: [],
                    currentProgress: 0,
                    currentPage: ""
                  },
                  dependency: {
                    dashboard: ["emiSelection"],
                    emiVerfiy: [],
                    teacherSeleciton: [],
                    classRoom: ["stu_Attendance", "teachingObservation", "teachingMethodology", "stu_Assessment_term", "stu_Assessment_accessed", "stu_Assessment_questions", "observationReport", "mismatchAttendance", "observationDiscussion_DIKSHA", "ObservationReport_update", "Observation_complete_percentage"],
                    stu_Attendance: ["mismatchAttendance"],
                    teachingObservation: ["teachingMethodology", "stu_Assessment_term", "stu_Assessment_accessed", "stu_Assessment_questions", "observationReport", "mismatchAttendance", "observationDiscussion_DIKSHA", "ObservationReport_update", "Observation_complete_percentage"],
                    teachingMethodology: [],
                    stu_Assessment_term: ["stu_Assessment_questions"],
                    stu_Assessment_accessed: ["stu_Assessment_questions"],
                    stu_Assessment_questions: [],
                    observationReport: [],
                    mismatchAttendance: [],
                    ObservationReport_update: [],
                    Observation_complete_percentage: []
                  }
                };

                _this11.ionicStore.setStoreData(tempData);

                _this11.ionicStore.getStoreData().then(function (response) {
                  _this11.storeDetail = response;
                });
              } else {
                debugger;

                if (_this11.storeDetail.pages.pageData.length) {
                  _this11.selectedSchool = _this11.storeDetail.pages.pageData[0].pageDetails;
                  _this11.sSchool = _this11.selectedSchool.school_id;
                  _this11.pageMoved = _this11.storeDetail.pages.pageData[0].pageMoved;

                  _this11.networkService.initializeNetworkEvents();

                  var netSts = _this11.networkService.getCurrentNetworkStatus();

                  console.log(_this11.storeDetail.pages.pageData[0].pageDetails, "this.storeDetail.pages.pageData[0].pageDetails", _this11.selectedSchool);

                  if (netSts == 0) {
                    _this11.fetchOfflineData();
                  }

                  if (_this11.pageMoved == "yes") {
                    _this11._apiService.languageDisableUpdate(true);
                  }

                  console.log(_this11.storeDetail.pages.pageData[0].pageDetails, "this.storeDetail.pages.pageData[0].pageDetails", _this11.selectedSchool);
                }

                if (Object.keys(_this11.storeDetail.pages).length) {
                  _this11.currentPercentage = _this11.storeDetail.pages.currentProgress;
                }
              }
            });
          }
        }, {
          key: "getSchoolData",
          value: function getSchoolData() {
            var _this12 = this;

            var schoolId = this.selectedSchool.school_id;
            fetch('https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + schoolId + '_2.json').then(function (res) {
              return res.json();
            }).then(function (data) {
              if (data) {
                debugger;
                _this12.masterApiResponse.basic_info = data.basic_info; // this.masterApiResponse.teacher_details = data.teacherlist;

                var allTechList = [].concat(_toConsumableArray(data.teacherlist), _toConsumableArray(data.Deputation_teacherlist));
                var filteredTechList = [];
                allTechList.forEach(function (obj) {
                  var idx = filteredTechList.findIndex(function (obj1) {
                    return obj.teacher_id == obj1.teacher_id;
                  });

                  if (idx == -1) {
                    filteredTechList.push(obj);
                  }
                });
                console.log(filteredTechList);
                _this12.masterApiResponse.teacher_details = filteredTechList;
                _this12.masterApiResponse.school_class_info = data.students_count_list; // this.masterApiResponse.classlist = data.classlist;

                _this12.masterApiResponse.class_info = data.class_info;

                _this12.ionicStore.setOffStorage(_this12.masterApiResponse); // this.storage.set('offStoreData', { masterRes: this.masterApiResponse }).then(r => {
                //   setTimeout(() => {
                //     this.storage.get('offStoreData').then(res=>{
                //     });
                //    debugger
                //   }, 1000);
                // });


                localStorage.setItem("masterdata", JSON.stringify(_this12.masterApiResponse));
                var emisStatus = '167';
                localStorage.setItem("udise_code", _this12.masterApiResponse.basic_info.udise_code);
                localStorage.setItem("emis_status", emisStatus);
                var schoolData = {
                  schoolId: _this12.masterApiResponse.basic_info.school_id,
                  schoolName: _this12.masterApiResponse.basic_info.school_name,
                  distName: _this12.masterApiResponse.basic_info.district_name,
                  eduDistName: _this12.masterApiResponse.basic_info.edu_dist_name,
                  blockName: _this12.masterApiResponse.basic_info.block_name,
                  cateType: _this12.masterApiResponse.basic_info.cate_type
                };
                localStorage.setItem("schoolInfo", JSON.stringify(schoolData));

                if (_this12.unVisitedSchoolList.some(function (item) {
                  return item.school_id == schoolId;
                })) {
                  _this12.unVisitedSchoolList = _this12.unVisitedSchoolList.filter(function (item) {
                    return item.school_id != schoolId;
                  });
                } else {
                  _this12.unVisitedSchoolList.splice(0, 1);
                }

                _this12.unVisitedSchoolList.push(_this12.selectedSchool);

                _this12.sSchool = schoolId;

                var found = _this12.unVisitedSchoolList.includes(_this12.selectedSchool);

                if (found) {
                  _this12.loading.dismiss();
                }
              }
            }, function (error) {
              _this12._alertService.showAlert("Choose another school");

              _this12.loading.dismiss();
            });
          }
        }, {
          key: "quickNavigation",
          value: function quickNavigation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var modal;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    _context8.n = 1;
                    return this.modalController.create({
                      component: src_app_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__.NavigationComponent,
                      cssClass: "my-custom-modal",
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context8.v;
                    _context8.n = 2;
                    return modal.present();

                  case 2:
                    return _context8.a(2, _context8.v);
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "mySelectInspection",
          value: function mySelectInspection(event, inspection) {
            if (inspection == 1) {
              localStorage.setItem("veracity_type", "inspection");
            } else if (inspection == 2) {
              localStorage.setItem("veracity_type", "veracity");
            }
          }
        }, {
          key: "mySelectHandler",
          value: function mySelectHandler(event, _sSchool) {
            debugger;

            if (event == "none") {
              this.selectedSchool = {};
              this.presentModal();
            } else if (event == undefined) {
              this._alertService.showAlert(this.chooseSchool);
            } else {
              // if (Number(this.daily_school_count) > 0 && Number(this.daily_school_count) == Number(this.daily_school_target)) {
              if (Number(this.daily_school_count) > 0 && Number(this.daily_school_count) == Number(this.daily_school_target)) {
                this._alertService.showAlert("Daily school target completed..Please do observation later");
              } else {
                var a = this.allSchoolList.find(function (data) {
                  return data.school_id == _sSchool.school_id;
                });

                if (this.which_user == 'dummy_user') {
                  this.selectedSchool = a;
                  localStorage.setItem("school_management", this.selectedSchool.manage_id);
                } else {
                  var state_user_school_id = parseInt(a.school_id);
                  var b = this.schoolmanageData.find(function (data) {
                    return data.school_id == state_user_school_id;
                  });
                  localStorage.setItem("school_management", b.manage_id);
                }

                this.fetchOfflineData();
              }
            }
          }
        }, {
          key: "SelectVeracity",
          value: function SelectVeracity(event, sveracity) {
            var _this13 = this;

            debugger;

            if (event == "none") {
              this.allSchoolList = [];
              this.presentModal();
            } else {
              if (event.data.filteredOutput.length > 0) {
                this.allSchoolList = event.data.completeOutput;
              } else {
                this.allSchoolList = event.data.completeOutput;
              }

              if (Number(this.userSessionService.emis_usertype()) == 6) {
                this.observedSchoolList = event.data.zoneObservation;
              } else {
                this.observedSchoolList = event.data.blockObservation;
              }

              this.unVisitedSchoolList = event.data.completeOutput;
              this.allSchoolList.forEach(function (element) {
                _this13.unVisitedSchoolList = _this13.unVisitedSchoolList.filter(function (data) {
                  if (Number(element.school_id) != Number(data.school_id)) {
                    return data;
                  }
                });
              });
              this.selectedlevel = event.level;
              localStorage.setItem("selectedWorkflow", event.data.workflow_id);
              localStorage.setItem("selectedlevel", this.selectedlevel);
              localStorage.setItem("selectedschooltype", event.schoolType);
              localStorage.setItem("selectedClasses", event.data.class_applicaple);
            }
          }
        }, {
          key: "SelectStateUserVeracity",
          value: function SelectStateUserVeracity(event, sveracity) {
            var _this14 = this;

            debugger;

            if (event == "none") {
              this.allSchoolList = [];
              this.presentModal();
            } else {
              this.selectedSchool = {};
              this.allSchoolList = [];
              this.unVisitedSchoolList = [];
              var schoolType = String(event.schoolType);
              var filterObsArray = this.observationdata.filter(function (item) {
                return item.sch_type_id == schoolType && item.district_id == _this14.selectedDistrictData && item.block_id == _this14.selectedBlockData;
              });

              if (filterObsArray.length > 0 && filterObsArray[0].level == "3") {
                this.selectedlevel = "4";
                localStorage.setItem("selectedWorkflow", filterObsArray[0].workflow);
                localStorage.setItem("selectedlevel", this.selectedlevel);
                localStorage.setItem("selectedschooltype", event.schoolType); // localStorage.setItem("createdby_role",filterObsArray[0].createdby_role_id);  

                if (event.schoolType == 1) {
                  var class_applicaple_for_state_user = "1,2,3,4,5,6,7,8";
                  localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                } else if (event.schoolType == 2) {
                  var _class_applicaple_for_state_user = "1,2,3,4,5,6,7,8,9,10";
                  localStorage.setItem("selectedClasses", _class_applicaple_for_state_user);
                } else {
                  var _class_applicaple_for_state_user2 = "1,2,3,4,5,6,7,8,9,10,11,12";
                  localStorage.setItem("selectedClasses", _class_applicaple_for_state_user2);
                }

                filterObsArray.forEach(function (item) {
                  var filteredSchool = _this14.schoolmanageData.find(function (data) {
                    return data.school_id == Number(item.school_id);
                  });

                  _this14.allSchoolList.push({
                    "school_id": String(filteredSchool.school_id),
                    // "school_name": filteredSchool.school_name + " " + "(" + String(filteredSchool.udise_code) + ")"
                    "school_name": filteredSchool.school_name,
                    "latitude": filteredSchool.latitude,
                    "longitude": filteredSchool.longitude
                  });
                }); // this.allSchoolList = filterObsArray;
              } else {
                this.allSchoolList = [];
              }

              this.unVisitedSchoolList = this.allSchoolList;
              this.allSchoolList.forEach(function (element) {
                _this14.unVisitedSchoolList = _this14.unVisitedSchoolList.filter(function (data) {
                  if (Number(element.school_id) != Number(data.school_id)) {
                    return data;
                  }
                });
              });
            }
          }
        }, {
          key: "SelectDistrictUserVeracity",
          value: function SelectDistrictUserVeracity(event, sveracity) {
            var _this15 = this;

            debugger;

            if (event == "none") {
              this.allSchoolList = [];
              this.presentModal();
            } else {
              this.selectedSchool = {};
              this.allSchoolList = [];
              this.unVisitedSchoolList = [];
              var schoolType = String(event.schoolType);
              var filterObsArray = this.observationdata.filter(function (item) {
                return item.sch_type_id == schoolType && item.district_id == _this15.userSessionService.district_id() && item.block_id == _this15.selectedBlockData;
              });

              if (filterObsArray.length > 0 && filterObsArray[0].level == "2") {
                this.selectedlevel = "3";
                localStorage.setItem("selectedWorkflow", filterObsArray[0].workflow);
                localStorage.setItem("selectedlevel", this.selectedlevel);
                localStorage.setItem("selectedschooltype", event.schoolType); // localStorage.setItem("createdby_role",filterObsArray[0].createdby_role_id);  

                if (event.schoolType == 1) {
                  var class_applicaple_for_state_user = "1,2,3,4,5,6,7,8";
                  localStorage.setItem("selectedClasses", class_applicaple_for_state_user);
                } else if (event.schoolType == 2) {
                  var _class_applicaple_for_state_user3 = "1,2,3,4,5,6,7,8,9,10";
                  localStorage.setItem("selectedClasses", _class_applicaple_for_state_user3);
                } else {
                  var _class_applicaple_for_state_user4 = "1,2,3,4,5,6,7,8,9,10,11,12";
                  localStorage.setItem("selectedClasses", _class_applicaple_for_state_user4);
                }

                filterObsArray.forEach(function (item) {
                  var filteredSchool = _this15.schoolmanageData.find(function (data) {
                    return data.school_id == Number(item.school_id);
                  });

                  _this15.allSchoolList.push({
                    "school_id": String(filteredSchool.school_id),
                    // "school_name": filteredSchool.school_name + " " + "(" + String(filteredSchool.udise_code) + ")"
                    "school_name": filteredSchool.school_name,
                    "latitude": filteredSchool.latitude,
                    "longitude": filteredSchool.longitude
                  });
                }); // this.allSchoolList = filterObsArray;
              } else {
                this.allSchoolList = [];
              }

              this.unVisitedSchoolList = this.allSchoolList;
              this.allSchoolList.forEach(function (element) {
                _this15.unVisitedSchoolList = _this15.unVisitedSchoolList.filter(function (data) {
                  if (Number(element.school_id) != Number(data.school_id)) {
                    return data;
                  }
                });
              });
            }
          }
        }, {
          key: "SelectBlock",
          value: function SelectBlock(event, _sSchool) {
            // This needs to be handled, for temporary, it's fixed this way
            if (event == "none") {
              this.selectedBlockData = {};
              this.presentModal();
            } else {
              debugger;
              this.sVeracity = {};
              this.selectedSchool = {};
              this.selectedBlockData = _sSchool;
              this.dashboardPageInitiates();
            }
          }
        }, {
          key: "SelectStateUserBlock",
          value: function SelectStateUserBlock(event, _sSchool) {
            var _this16 = this;

            // This needs to be handled, for temporary, it's fixed this way
            if (event == "none") {
              this.selectedBlockData = {};
              this.presentModal();
            } else {
              this.sVeracity = {};
              this.selectedSchool = {};
              this.allSchoolList = [];
              this.selectedBlockData = _sSchool;
              this.veracityList = [{
                "schoolType": 1,
                "schooltypename": "Primary/Middle School"
              }, {
                "schoolType": 2,
                "schooltypename": "High School"
              }, {
                "schoolType": 3,
                "schooltypename": "Higher Secondary School"
              }];

              if (this.veracityList.length > 0 && (this.observationdata != undefined || this.observationdata.length > 0)) {
                this.veracityList.forEach(function (item3) {
                  var schoolType = String(item3.schoolType);

                  var filterObsArray = _this16.observationdata.filter(function (item) {
                    return item.sch_type_id == schoolType && item.district_id == _this16.selectedDistrictData && item.block_id == _this16.selectedBlockData;
                  });

                  if (filterObsArray.length > 0 && filterObsArray[0].level == "3") {
                    var sch_type_wise_sch_count = [];
                    filterObsArray.forEach(function (element) {
                      if (element.school_id) {
                        sch_type_wise_sch_count.push(element.school_id);
                      }
                    });
                    var sum = sch_type_wise_sch_count.length;
                    item3.levelsbySchoolTypewise = sum;
                  } else {
                    item3.levelsbySchoolTypewise = 0;
                  }
                });
                this.veracityList.map(function (obj) {
                  return [obj['id'], obj];
                });
              } // this.veracityList.sort((a, b) => {
              //   if (a.schooltypename < b.schooltypename)
              //     return -1;
              //   if (a.schooltypename > b.schooltypename)
              //     return 1;
              //   return 0;
              // });

            }
          }
        }, {
          key: "SelectDistrictUserBlock",
          value: function SelectDistrictUserBlock(event, _sSchool) {
            var _this17 = this;

            // This needs to be handled, for temporary, it's fixed this way
            if (event == "none") {
              this.selectedBlockData = {};
              this.presentModal();
            } else {
              this.sVeracity = {};
              this.selectedSchool = {};
              this.allSchoolList = [];
              this.selectedBlockData = _sSchool;
              this.veracityList = [{
                "schoolType": 1,
                "schooltypename": "Primary/Middle School"
              }, {
                "schoolType": 2,
                "schooltypename": "High School"
              }, {
                "schoolType": 3,
                "schooltypename": "Higher Secondary School"
              }];

              if (this.veracityList.length > 0 && (this.observationdata != undefined || this.observationdata.length > 0)) {
                this.veracityList.forEach(function (item3) {
                  var schoolType = String(item3.schoolType);

                  var filterObsArray = _this17.observationdata.filter(function (item) {
                    return item.sch_type_id == schoolType && item.district_id == _this17.userSessionService.district_id() && item.block_id == _this17.selectedBlockData;
                  });

                  if (filterObsArray.length > 0 && filterObsArray[0].level == "2") {
                    var sch_type_wise_sch_count = [];
                    filterObsArray.forEach(function (element) {
                      if (element.school_id) {
                        sch_type_wise_sch_count.push(element.school_id);
                      }
                    });
                    var sum = sch_type_wise_sch_count.length;
                    item3.levelsbySchoolTypewise = sum;
                  } else {
                    item3.levelsbySchoolTypewise = 0;
                  }
                });
                this.veracityList.map(function (obj) {
                  return [obj['id'], obj];
                });
              } // this.veracityList.sort((a, b) => {
              //   if (a.schooltypename < b.schooltypename)
              //     return -1;
              //   if (a.schooltypename > b.schooltypename)
              //     return 1;
              //   return 0;
              // });

            }
          }
        }, {
          key: "SelectDistrict",
          value: function SelectDistrict(event, _sSchool) {
            var _this18 = this;

            debugger; // This needs to be handled, for temporary, it's fixed this way

            if (event == "none") {
              this.selectedDistrictData = {};
              this.presentModal();
            } else {
              debugger;
              this.selectedBlockData = {};
              this.sVeracity = {};
              this.selectedSchool = {};
              this.selectedDistrictData = _sSchool; // this.getBlockListByDistrictId(this.selectedDistrictData);

              this.blockListData = this.masterApiResponse.blocks.filter(function (x) {
                return x.district_id == _this18.selectedDistrictData;
              });
            }
          }
        }, {
          key: "SelectStateUserDistrict",
          value: function SelectStateUserDistrict(event, _sSchool) {
            var _this19 = this;

            debugger; // This needs to be handled, for temporary, it's fixed this way

            if (event == "none") {
              this.selectedDistrictData = {};
              this.presentModal();
            } else {
              this.selectedBlockData = {};
              this.sVeracity = {};
              this.selectedSchool = {};
              this.allSchoolList = [];
              this.selectedDistrictData = _sSchool;
              var selectedDistrictData = parseInt(this.selectedDistrictData);
              this.blockListData = this.masterApiResponse.blocks.filter(function (test, index, array) {
                return index == array.findIndex(function (findTest) {
                  return findTest.block_id == test.block_id;
                });
              });
              this.blockfinalListData = [];
              var filterObsDistArray = this.blockListData.filter(function (item) {
                return item.district_id == selectedDistrictData;
              });
              filterObsDistArray.forEach(function (item3) {
                var check_block_id = String(item3.block_id);

                var filterObsArray = _this19.observationdata.filter(function (item) {
                  return item.block_id == check_block_id;
                });

                if (filterObsArray.length > 0 && filterObsArray[0].level == "3" && check_block_id == filterObsArray[0].block_id) {
                  var block_wise_sch_count = [];
                  filterObsArray.forEach(function (element) {
                    if (element.school_id) {
                      block_wise_sch_count.push(element.school_id);
                    }
                  });
                  var sum = block_wise_sch_count.length;

                  _this19.blockfinalListData.push({
                    "block_id": check_block_id,
                    "block_name": item3.block_name,
                    "levelsbyBlockwise": sum
                  });
                } else {
                  _this19.blockfinalListData.push({
                    "block_id": check_block_id,
                    "block_name": item3.block_name,
                    "levelsbyBlockwise": 0
                  });
                }
              });
              this.blockfinalListData = this.blockfinalListData.filter(function (test, index, array) {
                return index == array.findIndex(function (findTest) {
                  return findTest.block_id == test.block_id;
                });
              });
              this.blockfinalListData.sort(function (a, b) {
                if (a.block_name < b.block_name) return -1;
                if (a.block_name > b.block_name) return 1;
                return 0;
              });
            }
          }
        }, {
          key: "mySelectBlock",
          value: function mySelectBlock(event, _sSchool) {
            debugger;

            if (event == "none") {
              this.selectedBlock = {};
              this.presentModal();
            } else {
              var a = this.BlockList.find(function (data) {
                return data.block_id == event.value.block_id;
              });
              this.selectedBlock = a;
              this.getSchoolList();
            }
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var _this20 = this;

              var modal;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    debugger;
                    this.allSchoolList.forEach(function (element) {
                      _this20.unVisitedSchoolList = _this20.unVisitedSchoolList.filter(function (data) {
                        if (Number(element.school_id) != Number(data.school_id)) {
                          return data;
                        }
                      });
                    });
                    _context9.n = 1;
                    return this.modalController.create({
                      component: src_app_components_dashboardmodal_dashboardmodal_component__WEBPACK_IMPORTED_MODULE_10__.DashboardmodalComponent,
                      cssClass: "my-custom-modal-dashboarc",
                      backdropDismiss: false,
                      componentProps: {
                        schoolReason: this.schoolReasons,
                        allSchoolList: this.allSchoolList,
                        unVisitedSchoolList: this.unVisitedSchoolList
                      }
                    });

                  case 1:
                    modal = _context9.v;
                    modal.onDidDismiss().then(function (response) {
                      if (response.data != "Cancel") {
                        _this20.schoolReasonList = response.data.reasonList;
                        _this20.selectedSchool = response.data.schoolDetail;
                        _this20.sSchool = response.data.schoolDetail;

                        _this20.allSchoolList.push(_this20.sSchool);

                        _this20.loading.dismiss();

                        _this20.fetchOfflineData();
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
          key: "showResult",
          value: function showResult(item, i) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var modal;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    _context0.n = 1;
                    return this.modalController.create({
                      component: src_app_components_schoolListModal_schoollistmodal_component__WEBPACK_IMPORTED_MODULE_13__.SchoolListModalComponent,
                      componentProps: {
                        viewName: item,
                        selectedlevel: this.selectedlevel,
                        questionList: []
                      },
                      cssClass: "my-custom-modal-schoolList",
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context0.v;
                    _context0.n = 2;
                    return modal.present();

                  case 2:
                    return _context0.a(2, _context0.v);
                }
              }, _callee0, this);
            }));
          }
        }, {
          key: "showErrorLog",
          value: function showErrorLog() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
              var modal;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.n) {
                  case 0:
                    _context1.n = 1;
                    return this.modalController.create({
                      component: src_app_components_apiErrorLog_apiErrorLog_component__WEBPACK_IMPORTED_MODULE_14__.ApiErrorLogComponent,
                      componentProps: {
                        selectedlevel: this.selectedlevel,
                        questionList: []
                      },
                      cssClass: "my-custom-modal-apierror",
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context1.v;
                    _context1.n = 2;
                    return modal.present();

                  case 2:
                    return _context1.a(2, _context1.v);
                }
              }, _callee1, this);
            }));
          }
        }, {
          key: "fetchOfflineData",
          value: function fetchOfflineData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
              var school_data;
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    this.loading.present("Getting School Info");
                    school_data = this.selectedSchool;
                    this.selectedSchool = school_data;
                    this.getSchoolData();

                  case 1:
                    return _context10.a(2);
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "goToEmiVerify",
          value: function goToEmiVerify() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee11() {
              var checkSchSelected, idx, _this$ppSchBaseDetail, isLocationVerify, isPhotoVerified;

              return _regenerator().w(function (_context11) {
                while (1) switch (_context11.n) {
                  case 0:
                    this.loading.present();
                    checkSchSelected = Object.keys(this.selectedSchool ? this.selectedSchool : {}).length;

                    if (checkSchSelected > 0) {
                      this.loading.dismiss();
                      idx = this.findCurrSchDetails(this.selectedSchool.school_id);

                      if (idx != -1) {
                        _this$ppSchBaseDetail = this.ppSchBaseDetails[idx], isLocationVerify = _this$ppSchBaseDetail.isLocationVerify, isPhotoVerified = _this$ppSchBaseDetail.isPhotoVerified;

                        if (isLocationVerify == 1 && isPhotoVerified == 1 || this.pageMoved == 'yes') {
                          this.goToEmiVerify1();
                        } else {
                          this.checkLocationServices();
                        }
                      } else {
                        this.getSchoolLocation();
                      }
                    } else {
                      this.loading.dismiss();
                      this.alertService.warning("Please select school");
                    }

                    this.loading.dismiss();

                  case 1:
                    return _context11.a(2);
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "checkLocationServices",
          value: function checkLocationServices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee12() {
              var isLocationEnabled, _t;

              return _regenerator().w(function (_context12) {
                while (1) switch (_context12.p = _context12.n) {
                  case 0:
                    if (!this.platform.is('cordova')) {
                      _context12.n = 4;
                      break;
                    }

                    _context12.p = 1;
                    _context12.n = 2;
                    return this.diagnostic.isLocationEnabled();

                  case 2:
                    isLocationEnabled = _context12.v;

                    if (!isLocationEnabled) {
                      this.locationAlert(); // await this.diagnostic.switchToLocationSettings();
                    } else {
                      this.onLocationCheck();
                    }

                    _context12.n = 4;
                    break;

                  case 3:
                    _context12.p = 3;
                    _t = _context12.v;
                    console.error('Error checking location services:', _t);

                  case 4:
                    return _context12.a(2);
                }
              }, _callee12, this, [[1, 3]]);
            }));
          }
        }, {
          key: "onLocationCheck",
          value: function onLocationCheck() {
            var _this21 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              var latitude = resp.coords.latitude;
              var longitude = resp.coords.longitude;

              var idx = _this21.ppSchBaseDetails.findIndex(function (obj) {
                return obj.school_id == _this21.selectedSchool.school_id;
              });

              if (idx != -1) {
                _this21.ppSchBaseDetails[idx].userLat = latitude;
                _this21.ppSchBaseDetails[idx].userLng = longitude;
              } else {
                _this21.ppSchBaseDetails.push({
                  school_id: _this21.selectedSchool.school_id,
                  userLat: latitude,
                  userLng: longitude
                });
              }

              ;

              _this21.getSchoolLocation();
            })["catch"](function (error) {
              if (error.message === 'Illegal Access') {
                _this21.alertService.alertToTurnOnPermission('Location', 'Location');
              }
            });
          }
        }, {
          key: "locationAlert",
          value: function locationAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee13() {
              var _this22 = this;

              var msg;
              return _regenerator().w(function (_context13) {
                while (1) switch (_context13.n) {
                  case 0:
                    // if (this.languageType == 'ta') {
                    //   var msg = '';
                    // } else {
                    msg = 'Please Enable Mobile Location!!!'; // }

                    _context13.n = 1;
                    return this.alertController.create({
                      header: 'Confirmation',
                      message: msg,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler() {
                          _this22.dismissAlert();
                        }
                      }, {
                        text: 'Ok',
                        cssClass: 'custom-button',
                        handler: function handler() {
                          _this22.diagnostic.switchToLocationSettings();

                          _this22.dismissAlert1();
                        }
                      }]
                    });

                  case 1:
                    this.alert1 = _context13.v;
                    _context13.n = 2;
                    return this.alert1.present();

                  case 2:
                    return _context13.a(2);
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "dismissAlert1",
          value: function dismissAlert1() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee14() {
              return _regenerator().w(function (_context14) {
                while (1) switch (_context14.n) {
                  case 0:
                    if (!this.alert) {
                      _context14.n = 1;
                      break;
                    }

                    _context14.n = 1;
                    return this.alert1.dismiss();

                  case 1:
                    return _context14.a(2);
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "presentAlertConfirmExit",
          value: function presentAlertConfirmExit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee15() {
              var _this23 = this;

              var msg;
              return _regenerator().w(function (_context15) {
                while (1) switch (_context15.n) {
                  case 0:
                    if (this.languageType == 'ta') {
                      msg = 'பள்ளி நுழைவாயிலின் முன் நீங்கள் எடுத்த ' + '<b>செல்ஃபி</b>' + ' படத்தை புவி இடம் இயக்கி பதிவு செய்யுங்கள்';
                    } else {
                      msg = 'Take a ' + '<b>selfie</b>' + ' of yourself in front of the school entrance with geo-location enabled';
                    }

                    _context15.n = 1;
                    return this.alertController.create({
                      header: 'Confirmation',
                      message: msg,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler() {
                          _this23.dismissAlert();

                          _this23.attendanceMark();
                        }
                      }, {
                        text: 'TAKE PHOTO',
                        cssClass: 'custom-button',
                        handler: function handler() {
                          _this23.handleTakePhoto();
                        }
                      }]
                    });

                  case 1:
                    this.alert = _context15.v;
                    _context15.n = 2;
                    return this.alert.present();

                  case 2:
                    return _context15.a(2);
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "handleTakePhoto",
          value: function handleTakePhoto() {
            var idx = this.findCurrSchDetails(this.selectedSchool.school_id);

            if (idx != -1) {
              var _this$ppSchBaseDetail2 = this.ppSchBaseDetails[idx],
                  userLat = _this$ppSchBaseDetail2.userLat,
                  userLng = _this$ppSchBaseDetail2.userLng;
              this.takeLatLngCapImg(userLat, userLng);
            } else {
              this.takeLatLngCapImg('', '');
            }
          }
        }, {
          key: "dismissAlert",
          value: function dismissAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee16() {
              return _regenerator().w(function (_context16) {
                while (1) switch (_context16.n) {
                  case 0:
                    if (!this.alert) {
                      _context16.n = 1;
                      break;
                    }

                    _context16.n = 1;
                    return this.alert.dismiss();

                  case 1:
                    return _context16.a(2);
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "cameraPermission",
          value: function cameraPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee17() {
              return _regenerator().w(function (_context17) {
                while (1) switch (_context17.n) {
                  case 0:
                    debugger;

                    if (!this.platform.is('cordova')) {
                      _context17.n = 1;
                      break;
                    }

                    _context17.n = 1;
                    return this.checkCameraPermission();

                  case 1:
                    return _context17.a(2);
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "checkCameraPermission",
          value: function checkCameraPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee18() {
              var status, _t2, _t3;

              return _regenerator().w(function (_context18) {
                while (1) switch (_context18.p = _context18.n) {
                  case 0:
                    _context18.p = 0;
                    _context18.n = 1;
                    return this.diagnostic.getCameraAuthorizationStatus();

                  case 1:
                    status = _context18.v;
                    _t2 = status;
                    _context18.n = _t2 === this.diagnostic.permissionStatus.GRANTED ? 2 : _t2 === this.diagnostic.permissionStatus.NOT_REQUESTED ? 3 : _t2 === this.diagnostic.permissionStatus.DENIED ? 5 : _t2 === this.diagnostic.permissionStatus.DENIED_ALWAYS ? 6 : 7;
                    break;

                  case 2:
                    this.getSchoolLocation();
                    return _context18.a(3, 8);

                  case 3:
                    _context18.n = 4;
                    return this.requestCameraPermission();

                  case 4:
                    return _context18.a(3, 8);

                  case 5:
                    this.alertService.error('Camera permission is denied.');
                    return _context18.a(3, 8);

                  case 6:
                    this.alertService.error('Camera permission is permanently denied.');
                    return _context18.a(3, 8);

                  case 7:
                    this.alertService.error('Unknown permission status.');

                  case 8:
                    _context18.n = 10;
                    break;

                  case 9:
                    _context18.p = 9;
                    _t3 = _context18.v;
                    this.alertService.error(_t3);
                    console.error('Error checking camera permission:', _t3);

                  case 10:
                    return _context18.a(2);
                }
              }, _callee18, this, [[0, 9]]);
            }));
          }
        }, {
          key: "requestCameraPermission",
          value: function requestCameraPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee19() {
              var _t4;

              return _regenerator().w(function (_context19) {
                while (1) switch (_context19.p = _context19.n) {
                  case 0:
                    _context19.p = 0;
                    _context19.n = 1;
                    return this.diagnostic.requestCameraAuthorization();

                  case 1:
                    _context19.n = 2;
                    return this.checkCameraPermission();

                  case 2:
                    _context19.n = 4;
                    break;

                  case 3:
                    _context19.p = 3;
                    _t4 = _context19.v;
                    console.error('Error requesting camera permission:', _t4);

                  case 4:
                    return _context19.a(2);
                }
              }, _callee19, this, [[0, 3]]);
            }));
          }
        }, {
          key: "getSchoolLocation",
          value: function getSchoolLocation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee20() {
              var idx, kmVal, locSts;
              return _regenerator().w(function (_context20) {
                while (1) switch (_context20.n) {
                  case 0:
                    idx = this.findCurrSchDetails(this.selectedSchool.school_id);
                    debugger;

                    if (!(idx != -1)) {
                      _context20.n = 2;
                      break;
                    }

                    _context20.n = 1;
                    return this.compareLatLng(this.ppSchBaseDetails[idx], this.selectedSchool);

                  case 1:
                    kmVal = _context20.v;
                    locSts = kmVal <= 0.5 ? 1 : 2;
                    this.ppSchBaseDetails[idx].isLocationVerify = locSts;
                    this.ppSchBaseDetails[idx].locErrmsg = locSts == 2 ? "Please goto near the school / தயவுசெய்து பள்ளிக்கு அருகில் செல்லுங்கள்" : "";
                    this.attendanceMark();
                    _context20.n = 3;
                    break;

                  case 2:
                    this.checkLocationServices();

                  case 3:
                    return _context20.a(2);
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "requestPermissions",
          value: function requestPermissions(lat, _long) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee21() {
              var permissions;
              return _regenerator().w(function (_context21) {
                while (1) switch (_context21.n) {
                  case 0:
                    if (!this.platform.is('android')) {
                      _context21.n = 2;
                      break;
                    }

                    _context21.n = 1;
                    return this.diagnostic.requestCameraAuthorization();

                  case 1:
                    permissions = _context21.v;

                    if (permissions === this.diagnostic.permissionStatus.GRANTED) {
                      this.takeLatLngCapImg(lat, _long);
                    } else {
                      console.error('Camera permission not granted');
                    }

                  case 2:
                    return _context21.a(2);
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "takeLatLngCapImg",
          value: function takeLatLngCapImg(lat, _long2) {
            var _this24 = this;

            debugger;
            localStorage.setItem("schoollat", lat);
            localStorage.setItem("schoollong", _long2);
            var options = {
              quality: 100,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              cameraDirection: this.camera.Direction.FRONT,
              correctOrientation: false // allowEdit: false,

            };
            var photoErrhandle = setTimeout(function (msg) {
              document.dispatchEvent(new Event('backbutton'));

              _this24.onSelect();
            }, 30000);
            this.platform.ready().then(function () {
              _this24.camera.getPicture(options).then(function (imageData) {
                clearTimeout(photoErrhandle); // this.capturedImage = 'data:image/jpeg;base64,' + imageData;

                _this24.capturedImage = imageData;

                _this24.addWatermark(lat, _long2);
              })["catch"](function (error) {
                clearTimeout(photoErrhandle);

                _this24.onSelect();
              });
            }, function (error) {
              clearTimeout(photoErrhandle);

              _this24.onSelect();
            });
          }
        }, {
          key: "cameraErrorHandle",
          value: function cameraErrorHandle() {
            var idx = this.findCurrSchDetails(this.selectedSchool.school_id);
            this.ppSchBaseDetails[idx].schoollatimg = "";
            this.ppSchBaseDetails[idx].isPhotoVerified = 2;
            this.ppSchBaseDetails[idx].schImgErrmsg = "Please take photo / தயவுசெய்து புகைப்படம் எடுங்கள்";
          }
        }, {
          key: "addWatermark",
          value: function addWatermark(lat, _long3) {
            var _this25 = this;

            try {
              var lat_txt = 'Lat - ' + lat;
              var long_txt = 'Long - ' + _long3;
              this.watermarkOptions = [{
                text: lat_txt,
                x: 20,
                y: 40
              }, {
                text: long_txt,
                x: 20,
                y: 80
              }];
              var image = new Image();
              image.onload = function () {
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                canvas.width = image.width;
                canvas.height = image.height;
                context.drawImage(image, 0, 0);
                context.font = '20px Arial';
                context.fillStyle = 'rgba(255, 0, 0)';

                _this25.watermarkOptions.forEach(function (option) {
                  context.fillText(option.text, option.x, option.y);
                });

                var capturedImage = canvas.toDataURL('image/jpeg');
                localStorage.setItem("viewschoollatimg", capturedImage);
                _this25.capturedImage = capturedImage.replace(/^data:image\/(png|jpeg|jpg|gif);base64,/, '');
                localStorage.setItem("schoollatimg", _this25.capturedImage); // this.schoollatimg = localStorage.getItem("schoollatimg");

                var idx = _this25.findCurrSchDetails(_this25.selectedSchool.school_id);

                _this25.ppSchBaseDetails[idx].schoollatimg = _this25.capturedImage;
                _this25.ppSchBaseDetails[idx].isPhotoVerified = _this25.capturedImage ? 1 : 2;

                _this25.onSelect();
              }, function (err) {
                console.log(err);

                _this25.onSelect();
              };
              image.src = this.capturedImage;
            } catch (_a) {
              this.onSelect();
            }
          }
        }, {
          key: "fileUpload",
          value: function fileUpload(imageData) {
            var _this26 = this;

            this.capturedImage = 'data:image/jpeg;base64,' + imageData;
            var bucketName = "renewalapplicationemis";
            var expiry = 300;
            var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
            var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
            var splitedImage = filename.split(".");
            this.file.readAsDataURL(imagename, filename).then(function (base64string) {
              if (base64string) {
                var base = base64string.split('base64,');
                var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_16__.base64StringToBlob)(base[1], 'image/jpg');

                if (blob.size <= 5242880) {
                  var obj = {
                    bucketName: bucketName,
                    ext: splitedImage[1],
                    filename: splitedImage[0],
                    expiry: expiry
                  }; // this.commonFileUpload(obj, forData, blob, base64string);

                  _this26.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                    if (result) {
                      var key = result.key;
                    }
                  });
                } else {
                  _this26.alertService.error('File Can`t uploaded because Image size should not exceed 5 MB');
                }
              }
            });
          }
        }, {
          key: "goToEmiVerify1",
          value: function goToEmiVerify1() {
            var _a, _b;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee23() {
              var _this27 = this;

              var JsonData, basic_info, level, createdby_role_id, usertype, veracity_type, getMasterData, logData, today, date, time, dateTime, pageValues, currentPage;
              return _regenerator().w(function (_context23) {
                while (1) switch (_context23.n) {
                  case 0:
                    this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(function () {});
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

                    if (!this.masterApiResponse.basic_info) {
                      getMasterData = JSON.parse(localStorage.getItem("masterdata"));
                      this.masterApiResponse.basic_info = getMasterData.basic_info;
                    }

                    basic_info["basic_info"]["school_id"] = this.masterApiResponse.basic_info.school_id;
                    basic_info["basic_info"]["school_name"] = this.masterApiResponse.basic_info.school_name;
                    basic_info["basic_info"]["district_id"] = this.masterApiResponse.basic_info.dist_id;
                    basic_info["basic_info"]["district_name"] = this.masterApiResponse.basic_info.district_name;
                    basic_info["basic_info"]["edu_dist_id"] = this.masterApiResponse.basic_info.edu_dist_id;
                    basic_info["basic_info"]["edu_dist_name"] = this.masterApiResponse.basic_info.edu_dist_name;
                    basic_info["basic_info"]["block_id"] = this.masterApiResponse.basic_info.block_id;
                    basic_info["basic_info"]["block_name"] = this.masterApiResponse.basic_info.block_name; // basic_info["basic_info"]["zone_id"] = this.masterApiResponse.basic_info.nodal_id;

                    basic_info["basic_info"]["workflow"] = localStorage.getItem("selectedWorkflow"); // basic_info["basic_info"]["schlManageId"] = this.schlManageId;    

                    JsonData.push(basic_info); // if(this.storeDetail==null){

                    if (localStorage.getItem("saveApiCall") == '0') {
                      debugger;

                      this._apiService.postfinalinfo({
                        json: JSON.stringify(JsonData)
                      }).subscribe(function (data) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(_this27, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee22() {
                          var _t5;

                          return _regenerator().w(function (_context22) {
                            while (1) switch (_context22.p = _context22.n) {
                              case 0:
                                _context22.p = 0;

                                if (!(data.status == 200 && data.dataStatus == true)) {
                                  _context22.n = 1;
                                  break;
                                }

                                localStorage.setItem("observation_id", data === null || data === void 0 ? void 0 : data.records);
                                localStorage.setItem("saveApiCall", '1');
                                _context22.n = 2;
                                break;

                              case 1:
                                throw data.msg;

                              case 2:
                                _context22.n = 4;
                                break;

                              case 3:
                                _context22.p = 3;
                                _t5 = _context22.v;

                                this._alertService.showAlert(_t5);

                              case 4:
                                return _context22.a(2);
                            }
                          }, _callee22, this, [[0, 3]]);
                        }));
                      }, function (error) {
                        _this27._alertService.showAlert(error);
                      });
                    }

                    if (this.pageMoved == undefined) {
                      debugger;

                      if (this.selectedSchool == undefined || Object.keys(this.selectedSchool).length == 0 && this.selectedSchool.constructor == Object) {
                        this._alertService.showAlert(this.chooseSchool);
                      } else {
                        if (((_a = this.masterApiResponse) === null || _a === void 0 ? void 0 : _a.teacher_details) == null) {
                          logData = {
                            username: localStorage.getItem("username"),
                            udise_code: localStorage.getItem("udise_code"),
                            form_name: "Dashboard Api",
                            action_name: "No teacher found",
                            data: "Teacher Not found : " + JSON.stringify((_b = this.masterApiResponse) === null || _b === void 0 ? void 0 : _b.teacher_details),
                            completion_percentage: "0"
                          };

                          this._apiService.setActivityLog(logData).subscribe(function (response) {}, function (error) {
                            _this27._alertService.showAlert("SOMETHING WENT WRONG");
                          });

                          this._alertService.showAlert(this.noTeacherFound);
                        } else {
                          today = new Date();
                          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                          time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                          dateTime = date + ' ' + time;
                          pageValues = {
                            pageNo: "1",
                            pageName: "dashboard",
                            pageDetails: {
                              school_id: this.selectedSchool.school_id,
                              school_name: this.selectedSchool.school_name,
                              schoolsReasons: this.schoolReasonList,
                              start_time: dateTime,
                              udise_code: localStorage.getItem("udise_code")
                            },
                            pageMoved: "yes"
                          };

                          if (this.udise_code) {
                            pageValues.pageDetails.udise_code = this.udise_code;
                          }

                          this.ionicStore.getStoreData().then(function (response) {
                            _this27.storeDetail = response;
                            _this27.storeDetail.pages.pageData[0] = pageValues;

                            _this27.ionicStore.setStoreData(_this27.storeDetail);

                            _this27._apiService.languageDisableUpdate(true);

                            if (_this27.selectedlevel) {
                              if (Number(_this27.selectedlevel) == 1 && _this27.usertype != 5) {
                                var apiData = {
                                  pageNo: "2",
                                  pageName: "emiselection",
                                  apiResponse: {
                                    records: {}
                                  },
                                  pageDetails: {},
                                  pageFlow: "observation",
                                  correctedDetails: {},
                                  correctedClass: {}
                                };
                                _this27.storeDetail.pages.pageData[1] = apiData;

                                _this27.ionicStore.setStoreData(_this27.storeDetail);

                                localStorage.setItem('storedDetails', JSON.stringify(_this27.storeDetail));

                                _this27.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);              

                              } else if (_this27.usertype == 5) {
                                var _apiData = {
                                  pageNo: "2",
                                  pageName: "emiselection",
                                  apiResponse: {
                                    records: {}
                                  },
                                  pageDetails: {},
                                  pageFlow: "observation",
                                  correctedDetails: {},
                                  correctedClass: {}
                                };
                                _this27.storeDetail.pages.pageData[1] = _apiData;

                                _this27.ionicStore.setStoreData(_this27.storeDetail);

                                localStorage.setItem('storedDetails', JSON.stringify(_this27.storeDetail));

                                _this27.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);                 

                              } else {
                                _this27.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);                 

                              }
                            } else {
                              _this27.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);

                            }
                          });
                        }
                      }
                    } else {
                      currentPage = this.storeDetail.pages.currentPage;

                      if (currentPage == "classRoom") {
                        this.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"], { queryParams: { 'currentPage': currentPage , 'school_id': this.selectedSchool.school_id}});
                      } else {
                        this._router.navigate(["/tnvntabs/page-route/index"], {
                          queryParams: {
                            'currentPage': currentPage,
                            'school_id': this.selectedSchool.school_id
                          }
                        });
                      }
                    }

                  case 1:
                    return _context23.a(2);
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "onSelect",
          value: function onSelect() {
            var _this28 = this;

            var _a, _b;

            debugger;
            this.ionicStore.insertData_Replace('ppSchBaseDetails', this.ppSchBaseDetails).then(function () {});

            if (((_a = this.masterApiResponse) === null || _a === void 0 ? void 0 : _a.teacher_details) == null) {
              var logData = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                form_name: "Dashboard Api",
                action_name: "No teacher found",
                data: "Teacher Not found : " + JSON.stringify((_b = this.masterApiResponse) === null || _b === void 0 ? void 0 : _b.teacher_details),
                completion_percentage: "0"
              };

              this._apiService.setActivityLog(logData).subscribe(function (response) {}, function (error) {
                _this28._alertService.showAlert("SOMETHING WENT WRONG");
              });

              this._alertService.showAlert(this.noTeacherFound);
            } else {
              var today = new Date();
              var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              var dateTime = date + ' ' + time;
              var pageValues = {
                pageNo: "1",
                pageName: "dashboard",
                pageDetails: {
                  school_id: this.selectedSchool.school_id,
                  school_name: this.selectedSchool.school_name,
                  schoolsReasons: this.schoolReasonList,
                  start_time: dateTime,
                  udise_code: localStorage.getItem("udise_code")
                },
                pageMoved: "yes"
              };

              if (this.udise_code) {
                pageValues.pageDetails.udise_code = this.udise_code;
              }

              this.ionicStore.getStoreData().then(function (response) {
                _this28.storeDetail = response;
                _this28.storeDetail.pages.pageData[0] = pageValues;

                _this28.ionicStore.setStoreData(_this28.storeDetail);

                _this28._apiService.languageDisableUpdate(true);

                if (_this28.selectedlevel) {
                  if (Number(_this28.selectedlevel) == 1 && _this28.usertype != 5) {
                    var apiData = {
                      pageNo: "2",
                      pageName: "emiselection",
                      apiResponse: {
                        records: {}
                      },
                      pageDetails: {},
                      pageFlow: "observation",
                      correctedDetails: {},
                      correctedClass: {}
                    };
                    _this28.storeDetail.pages.pageData[1] = apiData;

                    _this28.ionicStore.setStoreData(_this28.storeDetail);

                    localStorage.setItem('storedDetails', JSON.stringify(_this28.storeDetail));

                    _this28.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);              

                  } else if (_this28.usertype == 5) {
                    var _apiData2 = {
                      pageNo: "2",
                      pageName: "emiselection",
                      apiResponse: {
                        records: {}
                      },
                      pageDetails: {},
                      pageFlow: "observation",
                      correctedDetails: {},
                      correctedClass: {}
                    };
                    _this28.storeDetail.pages.pageData[1] = _apiData2;

                    _this28.ionicStore.setStoreData(_this28.storeDetail);

                    localStorage.setItem('storedDetails', JSON.stringify(_this28.storeDetail));

                    _this28.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);                 

                  } else {
                    _this28.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);                 

                  }
                } else {
                  _this28.navigateToClassRoom(); // this._router.navigate(["/tnvntabs/page-route/index"]);

                }
              });
            }
          }
        }, {
          key: "attendanceMark",
          value: function attendanceMark() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee24() {
              var _this29 = this;

              var idx, modal;
              return _regenerator().w(function (_context24) {
                while (1) switch (_context24.n) {
                  case 0:
                    idx = this.findCurrSchDetails(this.selectedSchool.school_id);
                    _context24.n = 1;
                    return this.modalController.create({
                      component: _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_19__.PpMarkAttendancePage,
                      cssClass: "view-image-modal",
                      backdropDismiss: false,
                      componentProps: {
                        data: Object.assign(Object.assign({}, this.selectedSchool), this.ppSchBaseDetails[idx])
                      }
                    });

                  case 1:
                    modal = _context24.v;
                    modal.onDidDismiss().then(function (response) {
                      if (response.data.callBackVal == 1) {
                        _this29.checkLocationServices();
                      } else if (response.data.callBackVal == 2) {
                        _this29.presentAlertConfirmExit();
                      } else if (response.data.callBackVal == 3) {
                        _this29.onSelect();
                      }
                    });
                    _context24.n = 2;
                    return modal.present();

                  case 2:
                    return _context24.a(2, _context24.v);
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "navigateToClassRoom",
          value: function navigateToClassRoom() {
            this._router.navigate(["/tnvntabs/page-route/classroom"]);
          }
        }, {
          key: "findCurrSchDetails",
          value: function findCurrSchDetails(school_id) {
            var idx = this.ppSchBaseDetails.findIndex(function (obj) {
              return obj.school_id == school_id;
            });
            return idx;
          }
        }, {
          key: "compareLatLng",
          value: function compareLatLng(user, school) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee25() {
              var kmDiff;
              return _regenerator().w(function (_context25) {
                while (1) switch (_context25.n) {
                  case 0:
                    kmDiff = (this.getDistanceFromLatLonInKm(user.userLat, user.userLng, school.latitude, school.longitude) * 100 / 100).toFixed(3);
                    return _context25.a(2, kmDiff);
                }
              }, _callee25, this);
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
        }]);
      }();

      _DashboardcComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__.PostService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute
        }, {
          type: _awesome_cordova_plugins_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__.Keyboard
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_11__.UserSessionService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_3__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.AlertController
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClient
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_27__.Storage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_15__.File
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_17__.UploadService
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_18__.Diagnostic
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_20__.NetworkService
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_21__.AndroidPermissions
        }];
      };

      _DashboardcComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_28__.Component)({
        selector: "app-dashboardc",
        template: _raw_loader_dashboardc_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_dashboardc_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DashboardcComponent);
      /***/
    },

    /***/
    19649:
    /*!************************************************************!*\
      !*** ./src/app/pages/tnvn/dashboardc/dashboardc.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardcPageModule": function DashboardcPageModule() {
          return (
            /* binding */
            _DashboardcPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _dashboardc_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboardc.component */
      52762);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ionic-selectable */
      93319);
      /* harmony import */


      var _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pp-mark-attendance/pp-mark-attendance.page */
      39448);

      var routes = [{
        path: '',
        component: _dashboardc_component__WEBPACK_IMPORTED_MODULE_0__.DashboardcComponent
      }];

      var _DashboardcPageModule = /*#__PURE__*/_createClass(function DashboardcPageModule() {
        _classCallCheck(this, DashboardcPageModule);
      });

      _DashboardcPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_8__.IonicSelectableModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        declarations: [_dashboardc_component__WEBPACK_IMPORTED_MODULE_0__.DashboardcComponent, _pp_mark_attendance_pp_mark_attendance_page__WEBPACK_IMPORTED_MODULE_2__.PpMarkAttendancePage],
        entryComponents: [],
        exports: []
      })], _DashboardcPageModule);
      /***/
    },

    /***/
    39448:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/tnvn/dashboardc/pp-mark-attendance/pp-mark-attendance.page.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PpMarkAttendancePage": function PpMarkAttendancePage() {
          return (
            /* binding */
            _PpMarkAttendancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_pp_mark_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pp-mark-attendance.page.html */
      76464);
      /* harmony import */


      var _pp_mark_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pp-mark-attendance.page.scss */
      77822);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PpMarkAttendancePage = /*#__PURE__*/function () {
        function PpMarkAttendancePage(modalCtrl, navParams, alertController) {
          _classCallCheck(this, PpMarkAttendancePage);

          this.modalCtrl = modalCtrl;
          this.navParams = navParams;
          this.alertController = alertController;
          this.paramData = {};
          this.paramData = this.navParams.get('data');
          debugger;
        }

        return _createClass(PpMarkAttendancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss({
              callBackVal: 4
            });
          }
        }, {
          key: "callParentFun",
          value: function callParentFun(val) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee26() {
              var _this30 = this;

              var msg, isNotverify;
              return _regenerator().w(function (_context26) {
                while (1) switch (_context26.n) {
                  case 0:
                    debugger;

                    if (!(val == 3)) {
                      _context26.n = 3;
                      break;
                    }

                    msg = '';
                    isNotverify = false;

                    if (this.paramData.isPhotoVerified != 1) {
                      isNotverify = true;
                      msg = "Selfie photo not verified , Please take Selfie photo!/செல்ஃபி புகைப்படம் சரிபார்க்கப்படவில்லை, செல்ஃபி புகைப்படம் எடுங்கள்!";
                    } else {
                      this.modalCtrl.dismiss({
                        callBackVal: val
                      });
                    }

                    if (!isNotverify) {
                      _context26.n = 2;
                      break;
                    }

                    _context26.n = 1;
                    return this.alertController.create({
                      header: 'Confirmation',
                      message: msg,
                      buttons: [{
                        text: 'Okay',
                        cssClass: 'custom-button',
                        handler: function handler() {
                          _this30.modalCtrl.dismiss({
                            callBackVal: 2
                          });
                        }
                      }]
                    });

                  case 1:
                    this.alert = _context26.v;
                    _context26.n = 2;
                    return this.alert.present();

                  case 2:
                    _context26.n = 4;
                    break;

                  case 3:
                    this.modalCtrl.dismiss({
                      callBackVal: val
                    });

                  case 4:
                    return _context26.a(2);
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "dismissAlert",
          value: function dismissAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee27() {
              return _regenerator().w(function (_context27) {
                while (1) switch (_context27.n) {
                  case 0:
                    if (!this.alert) {
                      _context27.n = 1;
                      break;
                    }

                    _context27.n = 1;
                    return this.alert.dismiss({
                      callBackVal: 4
                    });

                  case 1:
                    return _context27.a(2);
                }
              }, _callee27, this);
            }));
          }
        }]);
      }();

      _PpMarkAttendancePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController
        }];
      };

      _PpMarkAttendancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pp-mark-attendance',
        template: _raw_loader_pp_mark_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pp_mark_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PpMarkAttendancePage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee28() {
              var _this31 = this;

              return _regenerator().w(function (_context28) {
                while (1) switch (_context28.n) {
                  case 0:
                    this.isLoading = true;
                    _context28.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this31.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context28.a(2, _context28.v);
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee29() {
              var _this32 = this;

              return _regenerator().w(function (_context29) {
                while (1) switch (_context29.n) {
                  case 0:
                    this.isLoading = true;
                    _context29.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this32.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context29.a(2, _context29.v);
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee30() {
              return _regenerator().w(function (_context30) {
                while (1) switch (_context30.n) {
                  case 0:
                    this.isLoading = false;
                    _context30.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context30.a(2, _context30.v);
                }
              }, _callee30, this);
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
    74052:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/tnvn/dashboardc/dashboardc.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-bottom {\n  position: absolute;\n  bottom: 0;\n}\n\n.margin-top-10 {\n  margin-top: 10px;\n}\n\nion-content {\n  --ion-background-color:#e6deed;\n}\n\n.progressData-outer {\n  width: 100%;\n  text-align: center;\n  background-color: #c4c4c4;\n  color: #fff;\n}\n\n.progressData-inner {\n  overflow: hidden;\n  background-color: #2d9cdb;\n  height: 20px;\n}\n\n.percentageData-value {\n  position: absolute;\n  top: 0;\n  margin-bottom: 0;\n  width: 100%;\n}\n\n.last-row {\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  line-height: 1.5;\n}\n\n.width-70 {\n  width: 70%;\n  margin: 0 auto;\n}\n\n.width-school {\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n}\n\n.list-md {\n  padding: 0;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n/* Zebra striping */\n\nth {\n  color: #000;\n  font-weight: bold;\n}\n\ntd, th {\n  padding: 6px;\n  word-break: break-all;\n  text-align: left;\n}\n\nion-alert .photo {\n  font-weight: bold;\n}\n\n.custom-button {\n  font-weight: bold;\n  /* Example of making text bold */\n}\n\n.location {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZGMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBREE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBRkE7RUFDRSxVQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFGQSxtQkFBQTs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxpQkFBQTtFQUFtQixnQ0FBQTtBQU1yQjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMTAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTZkZWVkO1xyXG59XHJcbi5wcm9ncmVzc0RhdGEtb3V0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NEYXRhLWlubmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDljZGI7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucGVyY2VudGFnZURhdGEtdmFsdWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubGFzdC1yb3d7ICBcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVcclxufVxyXG4ud2lkdGgtNzAge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi53aWR0aC1zY2hvb2wge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxpc3QtbWR7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxudGFibGUgeyBcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG4vKiBaZWJyYSBzdHJpcGluZyAqL1xyXG5cclxudGggeyAgIFxyXG4gIGNvbG9yOiAjMDAwOyBcclxuICBmb250LXdlaWdodDogYm9sZDsgICBcclxufVxyXG50ZCwgdGggeyBcclxuICBwYWRkaW5nOiA2cHg7ICAgXHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7IFxyXG59XHJcblxyXG5pb24tYWxlcnQgLnBob3RvIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBFeGFtcGxlIG9mIG1ha2luZyB0ZXh0IGJvbGQgKi9cclxuICAvLyBjb2xvcjogI2ZmNTcyMjsgLyogRXhhbXBsZSBidXR0b24gdGV4dCBjb2xvciAqL1xyXG59XHJcblxyXG4vLyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDsgXHJcbi8vIH1cclxuXHJcbi5sb2NhdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    77822:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/tnvn/dashboardc/pp-mark-attendance/pp-mark-attendance.page.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  padding: 16px;\n  margin-top: 30px;\n}\n\n.main img {\n  /* max-width: 100%; */\n  height: auto;\n}\n\n.cusion-col {\n  background-color: #e8e8e8;\n  border: solid 1px var(--seconday-color);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.zoom2 {\n  zoom: 2;\n}\n\n.Cuscontent-wrapper {\n  background: #e6deed;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBwLW1hcmstYXR0ZW5kYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDRTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUVOOztBQUNFO0VBQ0UseUJBQUE7RUFDQSx1Q0FBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLE9BQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InBwLW1hcmstYXR0ZW5kYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgLm1haW4gaW1nIHtcclxuICAgICAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY3VzaW9uLWNvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tc2Vjb25kYXktY29sb3IpO1xyXG4gICAgLy8gY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuem9vbTIge1xyXG4gICAgem9vbTogMjtcclxuICB9XHJcblxyXG4gIC5DdXNjb250ZW50LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U2ZGVlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */";
      /***/
    },

    /***/
    77069:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/dashboardc/dashboardc.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"t-8\" (click)=\"quickNavigation()\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"><b>{{ this.welcome\r\n              }}</b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <button (click)=\"showErrorLog()\" style=\"background: #e6deed;float:right;padding-top: 0px;\">\r\n    <ion-icon name=\"alert-circle-outline\" style=\"float:right;font-size: 30px;\"></ion-icon>\r\n  </button>\r\n  <div class=\"content-wrapper\" style=\"border:none;background-color:none\">\r\n    <ion-text color=\"dark\" class=\"ion-text-center position-relative\">\r\n      <h2 class=\"color-dgrey mt-0\">\r\n        <b><span [ngClass]=\"{\r\n              'ta-font': this.languageType == 'ta',\r\n              'fs-25': this.languageType == 'ta',\r\n              'fs-30': this.languageType == 'en'\r\n            }\">{{ this.greetings }}</span>!</b>\r\n      </h2>\r\n      <p class=\"color-dgrey fs-12\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n        <b>{{ this.observationTarget }}:</b>\r\n      </p>\r\n      <div class=\"img-schools\">\r\n        <ion-progress-bar color=\"warning rounded-pill\" value=\"{{ observedSchool }}\" class=\"border-radius h-8\">\r\n        </ion-progress-bar>\r\n      </div>\r\n      <p class=\"fs-12 width-70\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.schoolsVisited\r\n          }}</span>\r\n        :\r\n        <b>{{ visitedcount }} /\r\n          {{ classTarget }}</b>\r\n      </p>\r\n    </ion-text>\r\n    <ion-text *ngIf=\"daily_school_target>0\">\r\n      <p class=\"fs-12 width-school\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">Daily : Number of schools Observed/School\r\n          Target</span>\r\n        :\r\n        <b>{{ daily_school_count }} /\r\n          {{ daily_school_target }}</b>\r\n      </p>\r\n    </ion-text>\r\n\r\n    <ion-text *ngIf=\"daily_class_target>0\">\r\n      <p class=\"fs-12 width-school\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">Daily : Number of Class Observed/Class Target</span>\r\n        :\r\n        <b>{{ daily_class_count }} /\r\n          {{ daily_class_target }}</b>\r\n      </p>\r\n    </ion-text>\r\n    <ion-text color=\"dark\" class=\"ion-text-center\">\r\n      <p class=\"color-dgrey mt-3\">\r\n        <span [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta',\r\n            'fs-18': this.languageType == 'ta'\r\n          }\">\r\n          {{ this.observedOn }} </span>:<br />\r\n        <b *ngIf=\"which_user == 'dummy_user'\"> {{ currentDate != \"\" ? currentDate : \"NONE\" }}</b>\r\n        <b *ngIf=\"which_user == 'state' || which_user == 'district'\"> {{ curDate | date:'dd-MM-yyyy'}}</b>\r\n      </p>\r\n    </ion-text>\r\n\r\n    <ion-list lines=\"none\" style=\"background: #e6deed\" class=\"p-0\">\r\n      <p class=\"ion-text-center mb-0\" [ngClass]=\"{\r\n          'ta-font': this.languageType == 'ta',\r\n          'fs-14': this.languageType == 'ta'\r\n        }\">\r\n        <b *ngIf=\"which_user == 'dummy_user'\">{{ this.classroomObservation }}:</b>\r\n        <!-- <b *ngIf=\"which_user == 'state'\">{{ this.selectSchool }}</b><br> -->\r\n        <b *ngIf=\"which_user == 'state' || which_user == 'district'\">{{ this.observeSchool }}</b>\r\n      </p>\r\n\r\n      <!-- <p>districtDropDown - {{districtDropDown}}</p>\r\n      <p>pageMoved - {{pageMoved}}</p>\r\n      <p>which_user - {{which_user}}</p>\r\n      <p>blockDropDown - {{blockDropDown}}</p>\r\n      <p>usertype - {{usertype}}</p>\r\n      <pre> sdfs - {{blockfinalListData | json}}</pre> -->\r\n\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"districtDropDown == 1&&pageMoved != 'yes'&&which_user == 'state'\"\r\n        class=\"border\">\r\n        <ion-label>Select District</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedDistrictData\"\r\n          (ngModelChange)=\"SelectStateUserDistrict($event, selectedDistrictData)\"\r\n          *ngIf=\"this.districtfinalDataList?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let districtDatas of this.districtfinalDataList\"\r\n            [value]=\"districtDatas.district_id\">{{ districtDatas.district_name }}\r\n            ({{districtDatas.levelsbyDistrictwise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'state'\"\r\n        class=\"border\">\r\n        <ion-label>Select Block</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedBlockData\" (ngModelChange)=\"SelectStateUserBlock($event, selectedBlockData)\"\r\n          *ngIf=\"this.blockfinalListData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let BlockData of this.blockfinalListData\" [value]=\"BlockData.block_id\">{{\r\n            BlockData.block_name }} ({{BlockData.levelsbyBlockwise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'state'\"\r\n        class=\"border\">\r\n        <ion-label>{{this.schooltype}}</ion-label>\r\n        <ion-select [(ngModel)]=\"sVeracity\" (ngModelChange)=\"SelectStateUserVeracity($event, sVeracity)\"\r\n          *ngIf=\"veracityList.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let veracity of veracityList\" [value]=\"veracity\">{{ veracity.schooltypename }}\r\n            ({{veracity.levelsbySchoolTypewise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'district'\"\r\n        class=\"border\">\r\n        <ion-label>Select Block</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedBlockData\" (ngModelChange)=\"SelectDistrictUserBlock($event, selectedBlockData)\"\r\n          *ngIf=\"this.blockfinalListData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let BlockData of this.blockfinalListData\" [value]=\"BlockData.block_id\">{{\r\n            BlockData.block_name }} ({{BlockData.levelsbyBlockwise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'district'\"\r\n        class=\"border\">\r\n        <ion-label>{{this.schooltype}}</ion-label>\r\n        <ion-select [(ngModel)]=\"sVeracity\" (ngModelChange)=\"SelectDistrictUserVeracity($event, sVeracity)\"\r\n          *ngIf=\"veracityList.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let veracity of veracityList\" [value]=\"veracity\">{{ veracity.schooltypename }}\r\n            ({{veracity.levelsbySchoolTypewise}})</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"districtDropDown == 1&&pageMoved != 'yes'&&which_user == 'dummy_user'\"\r\n        class=\"border\">\r\n        <ion-label>Select District</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedDistrictData\" (ngModelChange)=\"SelectDistrict($event, selectedDistrictData)\"\r\n          *ngIf=\"this.districtData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let districtDatas of this.districtData\" [value]=\"districtDatas.id\">{{\r\n            districtDatas.district_name }}</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'dummy_user'\"\r\n        class=\"border\">\r\n        <ion-label>Select Block</ion-label>\r\n        <ion-select [(ngModel)]=\"selectedBlockData\" (ngModelChange)=\"SelectBlock($event, selectedBlockData)\"\r\n          *ngIf=\"this.blockListData?.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let BlockData of this.blockListData\" [value]=\"BlockData.block_id\">{{\r\n            BlockData.block_name }}</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item style=\"background:#e6deed\" *ngIf=\"blockDropDown == 1&&pageMoved != 'yes'&&which_user == 'dummy_user'\"\r\n        class=\"border\">\r\n        <ion-label>{{this.schooltype}}</ion-label>\r\n        <ion-select [(ngModel)]=\"sVeracity\" (ngModelChange)=\"SelectVeracity($event, sVeracity)\"\r\n          *ngIf=\"veracityList.length; else noFound\">\r\n          <ion-select-option *ngFor=\"let veracity of veracityList\" [value]=\"veracity\">{{ veracity.schooltypename\r\n            }}</ion-select-option>\r\n\r\n        </ion-select>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"usertype==5&&pageMoved != 'yes'\" class=\"border\">\r\n        <ion-label>{{ this.chooseSchool }}</ion-label>\r\n        <ionic-selectable style=\"max-width:45% !important\" [(ngModel)]=\"selectedSchool\" [items]=\"allSchoolList\"\r\n          itemValueField=\"school_id\" itemTextField=\"school_name\" [canSearch]=\"true\"\r\n          (onChange)=\"mySelectHandler($event, selectedSchool)\">\r\n        </ionic-selectable>\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"usertype!=5 && usertype!= 8 &&pageMoved != 'yes'\" class=\"border\">\r\n        <ion-label>{{ this.chooseSchool }}</ion-label>\r\n        <ionic-selectable style=\"max-width:45% !important\" [(ngModel)]=\"selectedSchool\" [items]=\"allSchoolList\"\r\n          itemValueField=\"school_id\" itemTextField=\"school_name\" [canSearch]=\"true\"\r\n          (onChange)=\"mySelectHandler($event, selectedSchool)\">\r\n        </ionic-selectable>\r\n        <!-- <ion-select\r\n          [(ngModel)]=\"sSchool\"\r\n          (ngModelChange)=\"mySelectHandler($event, sSchool)\"\r\n          *ngIf=\"allSchoolList.length; else noFound\"\r\n        >          \r\n          <ion-select-option\r\n            *ngFor=\"let school of allSchoolList\"\r\n            [value]=\"school.school_id\"\r\n            >{{ school.school_name }}</ion-select-option\r\n          >\r\n          <ion-select-option *ngIf=\"selectedlevel!='1'\"\r\n            [value]=\"'none'\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n            >{{ this.noneAbove }}</ion-select-option\r\n          >\r\n        </ion-select> -->\r\n        <ng-template #noFound>\r\n          <ion-select-option value=\"\">{{ this.noSchool }}</ion-select-option>\r\n        </ng-template>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"usertype == 8\">\r\n        <div class=\"ion-text-center m-auto\">\r\n          <p class=\"mb-3\">{{ selectedSchool?.school_name }}</p>\r\n          <div *ngIf=\"currentPercentage>0\" class=\"progressData-outer position-relative\">\r\n            <div class=\"progressData-inner\" [style.width.%]=\"currentPercentage\"></div>\r\n            <p class=\"percentageData-value\">\r\n              {{ currentPercentage }}%\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                this.completed\r\n                }}</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"usertype!=8&& pageMoved == 'yes'\">\r\n        <div class=\"ion-text-center m-auto\" style=\"width:100%;\">\r\n          <p class=\"mb-3\">{{ selectedSchool?.school_name }}</p>\r\n          <div *ngIf=\"currentPercentage>0\" class=\"progressData-outer position-relative\">\r\n            <div class=\"progressData-inner\" [style.width.%]=\"currentPercentage\"></div>\r\n            <p class=\"percentageData-value\">\r\n              {{ currentPercentage }}%\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{completed}}</span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n      <ion-row *ngIf=\"udiseCodeEntry == 1&&pageMoved != 'yes'\" class=\"ion-row-list-none\">\r\n        <ion-item style=\"text-align:center;width:100%\">\r\n          <ion-label class=\"fs-14 c_pl-2\"><b><span style=\"font-size: 18px;\"\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n                ({{this.eitherOR}})\r\n              </span></b><br />\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"udiseCodeEntry == 1&&pageMoved != 'yes'\" class=\"ion-row-list-none\" style=\"padding-bottom: 10px;\">\r\n        <ion-item style=\"text-align:center;width:100%\">\r\n          <ion-label class=\"c_pl-2\"><b *ngIf=\"which_user == 'dummy_user'\"><span\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n                {{enterUdiseCode}}\r\n              </span>:</b>\r\n            <b *ngIf=\"which_user == 'state'||which_user == 'district'\"><span\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n                {{anyschoolUdiseCode}}\r\n              </span>:</b><br />\r\n            <input type=\"number\" required pattern=\"[0-9]\" onkeypress=\"return !(event.charCode == 46)\"\r\n              (click)=\"isKeyboardHide=false\" [(ngModel)]=\"udise_code\" style=\"width:80%;padding:10px\" />\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item style=\"width:100%\">\r\n          <ion-button (click)=gotoinspection()\r\n            style=\"justify-content:center;width:80%;margin-left:2rem;height:100%! important;margin-top:1rem;text-align:center;color:#fff\">\r\n            {{startSchoolObservation}}\r\n          </ion-button>\r\n        </ion-item>\r\n      </ion-row>\r\n\r\n\r\n      <table style=\"width:100%;margin-left:25px\"\r\n        *ngIf=\"udiseCodeEntry == 1&&inspectionType==1&&inspectionDistrict&&pageMoved != 'yes'\">\r\n        <tr>\r\n          <td></td>\r\n          <th scope=\"row\">{{district}}</th>\r\n          <td>:</td>\r\n          <td>{{inspectionDistrict}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td></td>\r\n          <th scope=\"row\">{{block}}</th>\r\n          <td>:</td>\r\n          <td>{{inspectionBlock}}</td>\r\n        </tr>\r\n        <tr>\r\n          <td></td>\r\n          <th scope=\"row\">{{school}}</th>\r\n          <td>:</td>\r\n          <td>{{inspectionSchool}}</td>\r\n        </tr>\r\n      </table>\r\n    </ion-list>\r\n\r\n    <ion-grid *ngIf=\"observedSchoolList.length>0 && usertype !=6\"\r\n      style=\"background-color: #fff;border-radius: 15px;padding:0\">\r\n      <!-- <ion-card style=\"border-radius: 8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n          <ion-card-title > -->\r\n      <ion-row justify-content-end\r\n        style=\"background-color: #d5cae0;border-top-left-radius: 15px;border-top-right-radius: 15px;line-height: 1.5\">\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Block Name\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Observed count\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          View Schools\r\n        </ion-col>\r\n        <!-- <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                View School list\r\n              </ion-col>                 -->\r\n      </ion-row>\r\n      <!-- </ion-card-title>                                    \r\n      </ion-card>    -->\r\n\r\n      <ion-row *ngFor=\"let school of observedSchoolList;let i = index\" justify-content-end\r\n        style=\"background-color: #fff;color:#000;line-height:1.5;border-bottom: 1px solid #000;\"\r\n        [ngClass]=\"{'last-row': i == observedSchoolList.length-1}\">\r\n        <ion-col padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\" align-self-stretch>\r\n          {{ school?.block_name }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          {{ school?.observed_count }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          <ion-button style=\"width:100%\" (click)=\"showResult(school,i)\">\r\n            View\r\n          </ion-button>\r\n        </ion-col>\r\n        <!-- <ion-col  padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                    View\r\n              </ion-col>                      -->\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n\r\n    <ion-grid *ngIf=\"observedSchoolList.length>0 &&usertype==6\"\r\n      style=\"background-color: #fff;border-radius: 15px;padding:0\">\r\n      <!-- <ion-card style=\"border-radius: 8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n          <ion-card-title > -->\r\n      <ion-row justify-content-end\r\n        style=\"background-color: #d5cae0;border-top-left-radius: 15px;border-top-right-radius: 15px;line-height: 1.5\">\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Cluster Name\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          Observed count\r\n        </ion-col>\r\n        <ion-col padding style=\"font-size:16px;font-weight: bold;text-align: center;\" size=\"4\" align-self-stretch>\r\n          View Schools\r\n        </ion-col>\r\n        <!-- <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                View School list\r\n              </ion-col>                 -->\r\n      </ion-row>\r\n      <!-- </ion-card-title>                                    \r\n      </ion-card>    -->\r\n\r\n      <ion-row *ngFor=\"let school of observedSchoolList;let i = index\" justify-content-end\r\n        style=\"background-color: #fff;color:#000;line-height:1.5;border-bottom: 1px solid #000;\"\r\n        [ngClass]=\"{'last-row': i == observedSchoolList.length-1}\">\r\n        <ion-col padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\" align-self-stretch>\r\n          {{ school?.cluster_name }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          {{ school?.observed_count }}\r\n        </ion-col>\r\n        <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400;text-align: center;\" size=\"4\">\r\n          <ion-button style=\"width:100%\" (click)=\"showResult(school,i)\">\r\n            View\r\n          </ion-button>\r\n        </ion-col>\r\n        <!-- <ion-col  padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                    View\r\n              </ion-col>                      -->\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n    <ion-text *ngIf=\"which_user == 'dummy_user'\" color=\"dark\" class=\"text-italic text-center text-violet df\">\r\n      <p class=\"pt-3 mb-0\">“{{ todayQuotes?.quotes }}”</p>\r\n    </ion-text>\r\n    <ion-text *ngIf=\"which_user == 'state'||which_user == 'district'\" color=\"dark\"\r\n      class=\"text-italic text-center text-violet\">\r\n      <p class=\"pt-3 mb-0\">“{{ todayQuotes?.quotes}}”</p>\r\n    </ion-text>\r\n    <!-- <ion-button *ngIf=\"schoollatimg\" style=\"width:100%;margin-bottom:10px;color:white;margin-top:10px;\" (click)=\"onViewSchoolImage()\">\r\n      View School Image \r\n    </ion-button> -->\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #8B67B3\" *ngIf=\"isKeyboardHide\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n\r\n\r\n      <!-- <ion-tab-button *ngIf=\"schoollatimg\" style=\" background: #8B67B3;color: #fff;min-width: 100%;\"\r\n        (click)=\"onViewSchoolImage()\">\r\n        <ion-label>View School Image </ion-label>\r\n      </ion-tab-button><br> -->\r\n\r\n\r\n      <ion-tab-button *ngIf=\"usertype!=8\" style=\" background: #8B67B3;color: #fff;min-width: 100%;\"\r\n        [disabled]=\"!this.masterApiResponse&&pageMoved != 'yes'\" (click)=\"goToEmiVerify()\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta',\r\n            'fs-25': this.languageType == 'en'\r\n          }\" style=\"color: #fff\">{{ pageMoved == \"yes\" ? this.continue : this.start }}<br>\r\n        </ion-label>\r\n        <!-- <ion-label *ngIf=\"pageMoved != 'yes'\" class=\"location\"><span>Note : </span>Please Enable Mobile Location Before Start</ion-label> -->\r\n      </ion-tab-button>\r\n\r\n    \r\n\r\n      <ion-tab-button *ngIf=\"usertype==8\" style=\" background: #8B67B3;color: #fff;min-width: 100%;\"\r\n        (click)=\"goToEmiVerify()\">\r\n        <ion-label [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta',\r\n            'fs-25': this.languageType == 'en'\r\n          }\" style=\"color: #fff\">{{ pageMoved == \"yes\" ? this.continue : this.start }} <br>\r\n        </ion-label>\r\n        <!-- <ion-label *ngIf=\"pageMoved != 'yes'\" class=\"location\"><span>Note : </span>Please Enable Mobile Location Before Start</ion-label> -->\r\n      </ion-tab-button>\r\n    \r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>";
      /***/
    },

    /***/
    76464:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/dashboardc/pp-mark-attendance/pp-mark-attendance.page.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"pr-3\">\r\n      <div class=\"ion-text-wrap px-2\">Mark Attendance</div>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"pt-10\" style=\"zoom:1.5\">\r\n      <ion-icon class=\"back-icon\" name=\"close-outline\" (click)=\"closeModal()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <div class=\"p-3 Cuscontent-wrapper\">\r\n    <h5>{{paramData.school_name}}</h5>\r\n    <div class=\"mt-3 align-items-center\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"cusion-col\"><b>Fields</b></ion-col>\r\n          <ion-col class=\"cusion-col\"><b>Status</b></ion-col>\r\n          <ion-col class=\"cusion-col\"><b>Action</b></ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"cusion-col\">Attendance</ion-col>\r\n          <ion-col class=\"cusion-col\">\r\n              <ion-icon class=\"text-success zoom2\" name=\"checkmark-circle-outline\" *ngIf=\"paramData?.isLocationVerify==1\"></ion-icon>\r\n              <ion-icon class=\"text-danger zoom2\" name=\"close-circle-outline\" *ngIf=\"paramData?.isLocationVerify==2\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-center\">\r\n            <ion-icon class=\"zoom2\" name=\"sync-outline\" *ngIf=\"paramData?.isLocationVerify!=1\" (click)=\"callParentFun(1)\"></ion-icon>\r\n            <span *ngIf=\"paramData?.isLocationVerify==1\">-</span>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-danger mt-2\" size=\"12\" *ngIf=\"paramData?.locErrmsg\"> \r\n            <div>\r\n              {{paramData?.locErrmsg}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col class=\"cusion-col\">Photo</ion-col>\r\n          <ion-col class=\"cusion-col\">\r\n            <ion-icon class=\"text-success zoom2\" name=\"checkmark-circle-outline\" *ngIf=\"paramData?.schoollatimg || paramData?.isPhotoVerified==1\"></ion-icon>\r\n            <ion-icon class=\"text-warning zoom2\" name=\"help-circle-outline\" *ngIf=\"!paramData?.isPhotoVerified\"></ion-icon>\r\n            <ion-icon class=\"text-danger zoom2\" name=\"close-circle-outline\" *ngIf=\"!paramData?.schoollatimg && paramData?.isPhotoVerified\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-center\">\r\n            <ion-icon *ngIf=\"paramData?.isPhotoVerified!=1\" class=\"zoom2\" name=\"camera-outline\" (click)=\"callParentFun(2)\"></ion-icon>\r\n            <span *ngIf=\"paramData?.isPhotoVerified==1\">-</span>\r\n          </ion-col>\r\n          <ion-col class=\"cusion-col text-danger mt-2\" size=\"12\" *ngIf=\"paramData?.schImgErrmsg\"> \r\n            <div>\r\n              {{paramData?.schImgErrmsg}}\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"mt-4 text-center\">\r\n        <ion-button class=\"text-light\" type=\"button\" (click)=\"callParentFun(3)\">Continue</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_dashboardc_dashboardc_module_ts-es5.js.map