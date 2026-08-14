(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_emiselection_emiselection_module_ts"], {
    /***/
    82224:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/tnvn/emiselection/emiselection.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmiSelectionComponent": function EmiSelectionComponent() {
          return (
            /* binding */
            _EmiSelectionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_emiselection_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./emiselection.component.html */
      69042);
      /* harmony import */


      var _emiselection_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./emiselection.component.scss */
      28064);
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

      var _EmiSelectionComponent = /*#__PURE__*/function () {
        function EmiSelectionComponent(loading, modalController, _router, _apiService, activatedRoute, _alertService, _postService, ionicStore, _translate) {
          var _this = this;

          _classCallCheck(this, EmiSelectionComponent);

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
          this.actualValueList = [];
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

          this.getSchoolDetails = function (schoolId) {
            var records = {
              nodal_name: _this.masterApiResponse.nodal_name,
              nodal_id: _this.masterApiResponse.nodal_id,
              dist_id: _this.masterApiResponse.dist_id,
              edu_dist_id: _this.masterApiResponse.edu_dist_id,
              block_id: _this.masterApiResponse.block_id,
              block_name: _this.masterApiResponse.block_name,
              edu_dist_name: _this.masterApiResponse.edu_dist_name,
              district_name: _this.masterApiResponse.district_name,
              total: _this.masterApiResponse.total,
              catty_id: _this.masterApiResponse.catty_id,
              cate_type: _this.masterApiResponse.cate_type,
              teach_tot: _this.masterApiResponse.teach_tot,
              nonteach_tot: _this.masterApiResponse.nonteach_tot,
              totstaff: _this.masterApiResponse.totstaff,
              total_students: _this.masterApiResponse.total_students,
              school_name: _this.masterApiResponse.school_name,
              school_id: _this.masterApiResponse.school_id,
              udise_code: _this.masterApiResponse.udise_code,
              class_info: _this.masterApiResponse.class_info,
              districts: _this.masterApiResponse.districts
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
            _this.storeDetail.pages.pageData[1] = apiData;

            _this.ionicStore.setStoreData(_this.storeDetail);

            _this.loading.dismiss();
          };
        }

        return _createClass(EmiSelectionComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.loading.present();
            this.appLanguage();
            this.ionicStore.getOffStorage().then(function (response) {
              if (response) {
                _this2.masterApiResponse = response;
              }

              _this2.ionicStore.getStoreData().then(function (response) {
                _this2.storeDetail = response;

                _this2.storeDetail.pages.pageData.splice(1);

                _this2.ionicStore.setStoreData(_this2.storeDetail);

                _this2.loading.dismiss();

                _this2.storeDetail.pages.currentPage = "emiSelection";

                _this2.ionicStore.setStoreData(_this2.storeDetail);

                if (_this2.storeDetail.pages.pageData[1] == undefined) {
                  _this2.getSchoolDetails(_this2.storeDetail.pages.pageData[0].pageDetails.school_id);
                }
              });
            });
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

            this._translate.get("Verification").subscribe(function (res) {
              _this4.Verification = res;
            });

            this._translate.get("selectthesection").subscribe(function (res) {
              _this4.selectthesection = res;
            });

            this._translate.get("proceedEmisVerify").subscribe(function (res) {
              _this4.proceedEmisVerify = res;
            });

            this._translate.get("proceedObserveClass").subscribe(function (res) {
              _this4.proceedObserveClass = res;
            });

            this._translate.get("school").subscribe(function (res) {
              _this4.school = res;
            });

            this._translate.get("primary").subscribe(function (res) {
              _this4.primary = res;
            });

            this._translate.get("secondary").subscribe(function (res) {
              _this4.secondary = res;
            });

            this._translate.get("middle").subscribe(function (res) {
              _this4.middle = res;
            });

            this._translate.get("district").subscribe(function (res) {
              _this4.district = res;
            });

            this._translate.get("educationalDistrict").subscribe(function (res) {
              _this4.educationalDistrict = res;
            });

            this._translate.get("block").subscribe(function (res) {
              _this4.block = res;
            });

            this._translate.get("zone").subscribe(function (res) {
              _this4.zone = res;
            });

            this._translate.get("giveCheck").subscribe(function (res) {
              _this4.giveCheck = res;
            });

            this._translate.get("teachersTotal").subscribe(function (res) {
              _this4.teachersTotal = res;
            });

            this._translate.get("studentsTotal").subscribe(function (res) {
              _this4.studentsTotal = res;
            });

            this._translate.get("boysTotal").subscribe(function (res) {
              _this4.boysTotal = res;
            });

            this._translate.get("girlsTotal").subscribe(function (res) {
              _this4.girlsTotal = res;
            });

            this._translate.get("class").subscribe(function (res) {
              _this4["class"] = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this4.back = res;
            });

            this._translate.get("teacherSanctioned").subscribe(function (res) {
              _this4.teacherSanctioned = res;
            });

            this._translate.get("teachersAvailable").subscribe(function (res) {
              _this4.teachersAvailable = res;
            });

            this._translate.get("teachersDeputationSameSchool").subscribe(function (res) {
              _this4.teachersDeputationSameSchool = res;
            });

            this._translate.get("teachersDeputationOtherSchool").subscribe(function (res) {
              _this4.teachersDeputationOtherSchool = res;
            });

            this._translate.get("teachersOnLongLeave").subscribe(function (res) {
              _this4.teachersOnLongLeave = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this4.next = res;
            });

            this._translate.get("vacanciesTotal").subscribe(function (res) {
              _this4.vacanciesTotal = res;
            });

            this._translate.get("teacherSanctionedRequired").subscribe(function (res) {
              _this4.teacherSanctionedRequired = res;
            });

            this._translate.get("teachersAvailableRequired").subscribe(function (res) {
              _this4.teachersAvailableRequired = res;
            });

            this._translate.get("teachersDeputationSameSchoolRequired").subscribe(function (res) {
              _this4.teachersDeputationSameSchoolRequired = res;
            });

            this._translate.get("teachersDeputationOtherSchoolRequired").subscribe(function (res) {
              _this4.teachersDeputationOtherSchoolRequired = res;
            });

            this._translate.get("teachersOnLongLeaveRequired").subscribe(function (res) {
              _this4.teachersOnLongLeaveRequired = res;
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var selectedGender, selectedIndex, _t;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    this.presentValue = listedValue;
                    this.divisionType = type;
                    _t = this.divisionType;
                    _context.n = _t === "district" ? 1 : _t === "edu_district" ? 2 : _t === "block" ? 3 : _t === "zone" ? 4 : 5;
                    break;

                  case 1:
                    this.getDistrictList(listedValue, type, correction, showCategory, gender, index);
                    return _context.a(3, 6);

                  case 2:
                    this.getEducationalDistrictList(listedValue, type, correction, showCategory, gender, index);
                    return _context.a(3, 6);

                  case 3:
                    this.getBlocksList(listedValue, type, correction, showCategory, gender, index);
                    return _context.a(3, 6);

                  case 4:
                    this.getZoneList(listedValue, type, correction, showCategory, gender, index);
                    return _context.a(3, 6);

                  case 5:
                    this.getCountData(listedValue, type, correction, showCategory, gender, index);
                    return _context.a(3, 6);

                  case 6:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "emisValidation",
          value: function emisValidation() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var apiData;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this._router.navigate(["/tnvntabs/page-route/emidata", this.storeDetail.pages.pageData[0].pageDetails.school_id]);

                    this.pageFlow = "emisVerification";
                    apiData = {
                      pageNo: "2",
                      pageName: "emiselection",
                      apiResponse: {
                        records: this.schoolDetails
                      },
                      pageDetails: {},
                      pageFlow: this.pageFlow,
                      correctedDetails: {},
                      correctedClass: this.correctedClass
                    };
                    this.storeDetail.pages.pageData[1] = apiData;
                    this.ionicStore.setStoreData(this.storeDetail);

                  case 1:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "observeClass",
          value: function observeClass() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var apiData;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this._router.navigate(["/tnvntabs/page-route/teacher-selection"]);

                    this.pageFlow = "observation";
                    apiData = {
                      pageNo: "2",
                      pageName: "emiselection",
                      apiResponse: {
                        records: this.schoolDetails
                      },
                      pageDetails: {},
                      pageFlow: this.pageFlow,
                      correctedDetails: {},
                      correctedClass: this.correctedClass
                    };
                    this.storeDetail.pages.pageData[1] = apiData;
                    this.ionicStore.setStoreData(this.storeDetail);

                  case 1:
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
              var _this5 = this;

              var selectedGender, selectedIndex, modal;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    this.schoolDetails.districts.forEach(function (data) {
                      if (data.district_name != _this5.presentValue) {
                        _this5.actualValueList.push({
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
                      _this5.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this5.schoolDetails.dist_id = response.data.id;
                        _this5.correctedDistrict = response.data.item;
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
              var _this6 = this;

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
                      return data.district_id == _this6.schoolDetails.dist_id;
                    });
                    temp_eduDistrictList.forEach(function (data) {
                      if (data.edn_dist_name != _this6.presentValue) {
                        _this6.actualValueList.push({
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
                      _this6.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this6.schoolDetails.edu_dist_id = response.data.id;
                        _this6.correctedEduDistrict = response.data.item;
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
              var _this7 = this;

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
                      return data.edu_dist_id == _this7.schoolDetails.edu_dist_id;
                    });
                    temp_blockList.forEach(function (data) {
                      if (data.block_name != _this7.presentValue) {
                        _this7.actualValueList.push({
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
                      _this7.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this7.schoolDetails.block_id = response.data.id;
                        _this7.correctedBlock = response.data.item;
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
              var _this8 = this;

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
                      if (data.edu_dist_id == _this8.schoolDetails.edu_dist_id && data.district_id == _this8.schoolDetails.dist_id && data.block_id == _this8.schoolDetails.block_id) {
                        temp_ZoneList.push(data);
                      }
                    });
                    temp_ZoneList.forEach(function (data, index) {
                      if (data.nodal_name != _this8.presentValue) {
                        _this8.actualValueList.push({
                          id: data.hss_school_id,
                          item: data.hss_school_name
                        });
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
                      _this8.actualValueList = [];

                      if (response.data != "Cancel") {
                        _this8.schoolDetails.school_id = response.data.id;
                        _this8.correctedZone = response.data.item;
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
              var _this9 = this;

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
                      _this9.actualValueList = [];

                      if (response.data != "Cancel") {
                        switch (_this9.divisionType) {
                          case "teacher_count":
                            {
                              _this9.correctedTotalTeachers = response.data;
                              break;
                            }

                          case "student_count":
                            {
                              _this9.correctedTotalStudents = response.data;
                              break;
                            }

                          case "count":
                            {
                              if (selectedGender == "girls") {
                                _this9.correctedClass[selectedIndex].girls = response.data.toString();
                                _this9.correctedClass[selectedIndex].showCorrected_Girls = true;
                                _this9.correctedClass[selectedIndex].listetClassGirls = false;
                              } else {
                                _this9.correctedClass[selectedIndex].boys = response.data.toString();
                                _this9.correctedClass[selectedIndex].showCorrected_Boys = true;
                                _this9.correctedClass[selectedIndex].listetClassBoys = false;
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
            return (currentValue.listetClassGirls == true || currentValue.showCorrected_Girls == true) && (currentValue.listetClassBoys == true || currentValue.showCorrected_Boys == true);
          }
        }, {
          key: "goToTeacherSelection",
          value: function goToTeacherSelection() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var found, classList, created_on, pageDetails, correctedDetails;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    if (!(!this.listedDistrict && this.correctedDistrict == "" || !this.listedEduDistrict && this.correctedEduDistrict == "" || !this.listedBlock && this.correctedBlock == "" || !this.listedZone && this.correctedZone == "" || !this.listedTotalStudents && this.correctedTotalStudents == "")) {
                      _context9.n = 1;
                      break;
                    }

                    this._alertService.showAlert(this.giveCheck);

                    _context9.n = 3;
                    break;

                  case 1:
                    if (!(this.teacherSanctionedValue == null || this.teacherSanctionedValue == undefined || this.teachersAvailableValue == null || this.teachersAvailableValue == undefined || this.teachersDeputationSameSchoolValue == null || this.teachersDeputationSameSchoolValue == undefined || this.teachersDeputationOtherSchoolValue == null || this.teachersDeputationOtherSchoolValue == undefined || this.teachersOnLongLeaveValue == null || this.teachersOnLongLeaveValue == undefined)) {
                      _context9.n = 2;
                      break;
                    }

                    this.submitted = true;
                    return _context9.a(2);

                  case 2:
                    found = this.correctedClass.every(this.isAllClassChecked);

                    if (found) {
                      classList = [];
                      this.correctedClass.forEach(function (data, index) {
                        classList.push({
                          "class": data["class"],
                          no_of_boys: data.boys,
                          no_of_girls: data.girls
                        });
                      });
                      created_on = new Date();
                      created_on.toISOString();
                      pageDetails = {
                        nodal_id: this.schoolDetails.school_id,
                        nodal_name: this.correctedZone != "" ? this.correctedZone : this.schoolDetails.nodal_name,
                        block_id: this.schoolDetails.block_id,
                        block_name: this.correctedBlock != "" ? this.correctedBlock : this.schoolDetails.block_name,
                        edu_district_id: this.schoolDetails.edu_dist_id,
                        edu_district_name: this.correctedEduDistrict != "" ? this.correctedEduDistrict : this.schoolDetails.edu_dist_name,
                        district_id: this.schoolDetails.dist_id,
                        district_name: this.correctedDistrict != "" ? this.correctedDistrict : this.schoolDetails.district_name,
                        created_on: created_on,
                        created_by: localStorage.getItem("username"),
                        teachers_alloted: this.correctedTotalTeachers != "" ? this.correctedTotalTeachers : this.listedTotalTeachers,
                        total_students: this.correctedTotalStudents != "" ? this.correctedTotalStudents : this.listedTotalStudents,
                        vacancies: this.vacancies,
                        classdata: classList,
                        teacherSanctioned: this.teacherSanctionedValue,
                        teachersAvailable: this.teachersAvailableValue,
                        teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                        teachersDeputationOtherSchool: this.teachersDeputationOtherSchoolValue,
                        teachersOnLongLeave: this.teachersOnLongLeaveValue
                      };
                      correctedDetails = {
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
                        classdata: classList,
                        teacherSanctioned: this.teacherSanctionedValue,
                        teachersAvailable: this.teachersAvailableValue,
                        teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                        teachersDeputationOtherSchool: this.teachersDeputationOtherSchoolValue,
                        teachersOnLongLeave: this.teachersOnLongLeaveValue
                      };
                      this.storeDetail.pages.pageData[1].pageDetails = pageDetails;
                      this.storeDetail.pages.pageData[1].correctedDetails = correctedDetails;
                      this.storeDetail.pages.pageData[1].correctedClass = this.correctedClass;
                      this.storeDetail.pages.currentProgress = 0;
                      this.ionicStore.setStoreData(this.storeDetail);

                      this._router.navigate(["/tnvntabs/page-route/teacher-selection"]);
                    } else {
                      this._alertService.showAlert(this.giveCheck);
                    }

                  case 3:
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

      _EmiSelectionComponent.ctorParameters = function () {
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

      _EmiSelectionComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: "app-emiselection",
        template: _raw_loader_emiselection_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_emiselection_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EmiSelectionComponent);
      /***/
    },

    /***/
    24680:
    /*!****************************************************************!*\
      !*** ./src/app/pages/tnvn/emiselection/emiselection.module.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmiSelectionModule": function EmiSelectionModule() {
          return (
            /* binding */
            _EmiSelectionModule
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


      var _emiselection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./emiselection.component */
      82224);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _emiselection_component__WEBPACK_IMPORTED_MODULE_0__.EmiSelectionComponent
      }];

      var _EmiSelectionModule = /*#__PURE__*/_createClass(function EmiSelectionModule() {
        _classCallCheck(this, EmiSelectionModule);
      });

      _EmiSelectionModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_emiselection_component__WEBPACK_IMPORTED_MODULE_0__.EmiSelectionComponent],
        exports: [],
        entryComponents: []
      })], _EmiSelectionModule);
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
              var _this0 = this;

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
                        if (!_this0.isLoading) {
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
              var _this1 = this;

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
                        if (!_this1.isLoading) {
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
    28064:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/tnvn/emiselection/emiselection.component.scss ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".assessment {\n  font-family: \"Segoe UI\", \"Roboto\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin: 20px;\n}\n\n.assessmentcol {\n  font-family: \"Segoe UI\", \"Roboto\", \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  color: black;\n  margin: 10px;\n}\n\n.button {\n  text-align: center;\n  border: 20px;\n}\n\nion-card {\n  margin-inline: 0px;\n  border-radius: 15px;\n  background: #ffffff;\n}\n\n.header-text {\n  margin-right: 15%;\n}\n\n.list-md {\n  background: transparent;\n}\n\nion-item {\n  --background:transparent;\n}\n\n.radio {\n  display: flex;\n  align-items: center;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRFQUFBO0VBRUEsWUFBQTtBQUFKOztBQUVBO0VBQ0ksNEVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksdUJBQUE7QUFFSjs7QUFDQTtFQUNJLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoiZW1pc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFzc2Vzc21lbnR7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgJ1JvYm90bycsICAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIC8vZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOjIwcHg7ICAgIFxyXG59XHJcbi5hc3Nlc3NtZW50Y29se1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsICdSb2JvdG8nLCAgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG4uYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAvL2ZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBib3JkZXI6MjBweFxyXG59XHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLWlubGluZTowcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDojZmZmZmZmO1xyXG59XHJcbi5oZWFkZXItdGV4dHtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcblxyXG4ubGlzdC1tZHtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcbi5yYWRpb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOjEwcHg7ICAgIFxyXG59Il19 */";
      /***/
    },

    /***/
    69042:
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/emiselection/emiselection.component.html ***!
      \***********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"t-8\">\r\n          <ion-title class=\"ion-text-center fs-18\"\r\n            ><b\r\n              >\r\n              <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n                selectthesection\r\n              }}</span></b\r\n            >\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"0\"></app-progress>\r\n\r\n  <div class=\"assessment\">    \r\n      <ion-card>\r\n        <ion-card-header>\t\t\t\t                    \r\n            <ion-item (click)=\"emisValidation()\" lines=\"none\" class=\"contentHeading ion-text-center fs-18\">              \r\n              <ion-label>{{proceedEmisVerify}}</ion-label>            \r\n            </ion-item>            \r\n        </ion-card-header>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-header>\r\n            <ion-item (click)=\"observeClass()\" lines=\"none\" class=\"contentHeading ion-text-center fs-18\">              \r\n              <ion-label>{{proceedObserveClass}}</ion-label>            \r\n            </ion-item>                                \r\n        </ion-card-header>\r\n      </ion-card>      \r\n  </div>  \r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button\r\n        class=\"btn-back\"\r\n        [routerLink]=\"['/tnvntabs/page-route/dashboardc']\"\r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToTeacherSelection()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.next }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_emiselection_emiselection_module_ts-es5.js.map