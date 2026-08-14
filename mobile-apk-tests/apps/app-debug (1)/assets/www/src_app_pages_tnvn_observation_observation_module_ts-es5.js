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

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_observation_observation_module_ts"], {
    /***/
    38932:
    /*!***************************************************************!*\
      !*** ./src/app/components/expandable/expandable.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExpandableComponent": function ExpandableComponent() {
          return (
            /* binding */
            _ExpandableComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_expandable_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./expandable.component.html */
      93032);
      /* harmony import */


      var _expandable_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./expandable.component.scss */
      63680);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ExpandableComponent = /*#__PURE__*/function () {
        function ExpandableComponent(renderer) {
          _classCallCheck(this, ExpandableComponent);

          this.renderer = renderer;
          this.expanded = false;
          this.expandHeight = "150px";
        }

        return _createClass(ExpandableComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
          }
        }]);
      }();

      _ExpandableComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
        }];
      };

      _ExpandableComponent.propDecorators = {
        expandWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: ["expandWrapper", {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }]
        }],
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ["expanded"]
        }],
        expandHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
          args: ["expandHeight"]
        }]
      };
      _ExpandableComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-expandable',
        template: _raw_loader_expandable_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_expandable_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ExpandableComponent);
      /***/
    },

    /***/
    56885:
    /*!***************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-discussion/observation-discussion.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationDiscussionComponent": function ObservationDiscussionComponent() {
          return (
            /* binding */
            _ObservationDiscussionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_observation_discussion_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./observation-discussion.component.html */
      72496);
      /* harmony import */


      var _observation_discussion_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observation-discussion.component.scss */
      98726);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);

      var _ObservationDiscussionComponent = /*#__PURE__*/function () {
        function ObservationDiscussionComponent(_router, _apiService, ionicStore) {
          var _this2 = this;

          _classCallCheck(this, ObservationDiscussionComponent);

          this._router = _router;
          this._apiService = _apiService;
          this.ionicStore = ionicStore;
          this.misMatchAttendance = [];

          this.displayCounter = function (selectedAnswerDetail) {};

          this.createPage = function () {
            var apiData = {
              pageNo: '11',
              pageName: 'observationDiscussion_DIKSHA',
              apiResponse: {
                records: {}
              }
            };
            _this2.storeDetail.pages.pageData[10] = apiData;

            _this2.ionicStore.setStoreData(_this2.storeDetail);
          };

          this.goToBackPage = function () {
            _this2.misMatchAttendance = _this2.storeDetail.pages.pageData[5].correctedDetails;

            if (_this2.misMatchAttendance.length) {
              _this2._router.navigate(['/tnvntabs/page-route/attendance/student-data']);
            } else {
              _this2._router.navigate(['/tnvntabs/page-route/observation']);
            }
          };
        }

        return _createClass(ObservationDiscussionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.ionicStore.getStoreData().then(function (response) {
              _this3.storeDetail = response;

              if (_this3.storeDetail.pages.pageData[10] == undefined) {
                _this3.createPage();
              } else {
                _this3.sectionData = _this3.storeDetail.pages.pageData[5].correctedDetails.customizeSectionList.find(function (data) {
                  return data.sec_id == "6";
                });
              }
            });
          }
        }]);
      }();

      _ObservationDiscussionComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }];
      };

      _ObservationDiscussionComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-observation-discussion',
        template: _raw_loader_observation_discussion_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observation_discussion_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ObservationDiscussionComponent);
      /***/
    },

    /***/
    36013:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-end/observation-end.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationEndComponent": function ObservationEndComponent() {
          return (
            /* binding */
            _ObservationEndComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_observation_end_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./observation-end.component.html */
      17110);
      /* harmony import */


      var _observation_end_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observation-end.component.scss */
      46002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/network.service */
      81508);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);

      var _ObservationEndComponent = /*#__PURE__*/function () {
        function ObservationEndComponent(ionicStore, _apiService, _alertService, alertController, loading, _router, networkService, _translate) {
          var _this4 = this;

          _classCallCheck(this, ObservationEndComponent);

          this.ionicStore = ionicStore;
          this._apiService = _apiService;
          this._alertService = _alertService;
          this.alertController = alertController;
          this.loading = loading;
          this._router = _router;
          this.networkService = networkService;
          this._translate = _translate;
          this.classList = [];
          this.storedFinalData = [];
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

          this.createPage = function () {
            var apiData = {
              pageNo: '14',
              pageName: 'Observation_complete_percentage',
              apiResponse: {
                records: {}
              }
            };
            _this4.storeDetail.pages.pageData[13] = apiData;
            _this4.storeDetail.pages.currentProgress = _this4.progressValue;

            _this4.ionicStore.setStoreData(_this4.storeDetail);
          };

          this.finalSubmit = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    localStorage.removeItem("classInfo");
                    localStorage.removeItem("schoolInfo");
                    localStorage.removeItem("teacherInfo");
                    localStorage.removeItem("routingList");
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
                    localStorage.removeItem("emidata_section_status"); // localStorage.removeItem("emiverify_section_status");      

                    this.ionicStore.removeOffStorage();

                    this._router.navigate(["/tnvntabs/page-route/dashboardc"]);

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          };
        }

        return _createClass(ObservationEndComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.progressValue = 100;
            this.appLanguage();
            this.teacherDetail = JSON.parse(localStorage.getItem('teacherInfo'));
            this.schoolDetail = JSON.parse(localStorage.getItem('schoolInfo'));
            this.classDetail = JSON.parse(localStorage.getItem('classInfo'));
            this.selectedSection = localStorage.getItem("selectedSection");
            this.ionicStore.getOffStorage().then(function (response) {
              if (response) {
                _this5.masterApiResponse = response;
              }

              _this5.ionicStore.getStoreData().then(function (response) {
                _this5.storeDetail = response;

                _this5.ionicStore.setStoreData(_this5.storeDetail);

                localStorage.setItem("storedDetails", JSON.stringify(_this5.storeDetail)); // if(!this.storeDetail) {
                //   this.createPage();
                // }                                
                // if (this.storeDetail.pages.pageData[13] == undefined || this.storeDetail.pages.pageData[13] == null) {
                // }
              });
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            var alertInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      header: "",
                      cssClass: "my-custom-class",
                      message: this.DoneNote,
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
          key: "appLanguage",
          value: function appLanguage() {
            var _this6 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this6.languageType = data;

              _this6._translate.use(_this6.languageType);

              _this6._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this7 = this;

            this._translate.get('Observation').subscribe(function (res) {
              _this7.Observation = res;
            });

            this._translate.get('goToHomepage').subscribe(function (res) {
              _this7.goToHomepage = res;
            });

            this._translate.get('DoneNote').subscribe(function (res) {
              _this7.DoneNote = res;
            });

            this._translate.get('successfullyCompleted').subscribe(function (res) {
              _this7.successfullyCompleted = res;
            });

            this._translate.get('congratulations').subscribe(function (res) {
              _this7.congratulations = res;
            });

            this._translate.get('class').subscribe(function (res) {
              _this7["class"] = res;
            });

            this._translate.get('done').subscribe(function (res) {
              _this7.done = res;
            });
          }
        }]);
      }();

      _ObservationEndComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
        }];
      };

      _ObservationEndComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-observation-end',
        template: _raw_loader_observation_end_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observation_end_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ObservationEndComponent);
      /***/
    },

    /***/
    61631:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-teaching/observation-teaching.component.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationTeachingComponent": function ObservationTeachingComponent() {
          return (
            /* binding */
            _ObservationTeachingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_observation_teaching_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./observation-teaching.component.html */
      5806);
      /* harmony import */


      var _observation_teaching_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observation-teaching.component.scss */
      4085);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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

      var _ObservationTeachingComponent = /*#__PURE__*/function () {
        function ObservationTeachingComponent(_apiService, _router, _alertService, ionicStore, _translate) {
          _classCallCheck(this, ObservationTeachingComponent);

          this._apiService = _apiService;
          this._router = _router;
          this._alertService = _alertService;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.standardList = [];
          this.selectedClass = [];
        }

        return _createClass(ObservationTeachingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.appLanguage();
            this.ionicStore.getStoreData().then(function (response) {
              _this8.storeDetail = response;
              _this8.selectedClass = _this8.storeDetail.pages.pageData[5].correctedDetails;

              if (_this8.storeDetail.pages.pageData[5].pageDetails.selectedClass.length == 1) {
                _this8.classSelect = _this8.storeDetail.pages.pageData[5].pageDetails.selectedClass[0].class_id;
              }
            });
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

            this._translate.get("next").subscribe(function (res) {
              _this0.next = res;
            });

            this._translate.get("standardInfo").subscribe(function (res) {
              _this0.standardInfo = res;
            });

            this._translate.get("teaching").subscribe(function (res) {
              _this0.teaching = res;
            });

            this._translate.get("classroomObservation").subscribe(function (res) {
              _this0.classroomObservation = res;
            });

            this._translate.get("Observation").subscribe(function (res) {
              _this0.observation = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this0.back = res;
            });

            this._translate.get("selectStandard").subscribe(function (res) {
              _this0.selectStandard = res;
            });
          }
        }, {
          key: "radioChecked",
          value: function radioChecked(event) {
            this.selectedStandard = event;
          }
        }, {
          key: "goToMethodolgyQuestions",
          value: function goToMethodolgyQuestions() {
            var _this1 = this;

            if (this.selectedStandard != undefined) {
              this.classData = this.storeDetail.pages.pageData[5].pageDetails;
              var selectClass = this.storeDetail.pages.pageData[5].correctedDetails.filter(function (data) {
                return data.class_id == _this1.selectedStandard.class_id;
              });
              var classInfo = {
                mediumInfo: this.classData.mediumInfo,
                subjectInfo: this.classData.subjectInfo,
                classType: this.classData.classType,
                class_id: this.selectedStandard.class_id.toString()
              };
              localStorage.setItem("classInfo", JSON.stringify(classInfo));

              if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass.length == 1) {
                var givenClassId = this.storeDetail.pages.pageData[5].pageDetails.selectedClass[0].class_id;
                var selectedClassId = selectClass[0].class_id;

                if (givenClassId != selectedClassId) {
                  this.storeDetail.pages.pageData.splice(5);
                  this.ionicStore.setStoreData(this.storeDetail);
                }
              }

              this.storeDetail.pages.pageData[5].pageDetails.selectedClass = selectClass;
              this.ionicStore.setStoreData(this.storeDetail);
              var isRegularTeacher = this.storeDetail.pages.pageData[5].correctedDetails.regularTeacher;

              if (isRegularTeacher) {
                this._router.navigate(["/tnvntabs/page-route/methodology"]);
              } else {
                this._router.navigate(["/tnvntabs/page-route/assessment"]);
              }
            } else {
              this._alertService.showAlert(null, this.selectStandard);
            }
          }
        }]);
      }();

      _ObservationTeachingComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
        }];
      };

      _ObservationTeachingComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: "app-observation-teaching",
        template: _raw_loader_observation_teaching_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observation_teaching_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ObservationTeachingComponent);
      /***/
    },

    /***/
    73895:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-update/observation-update.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationUpdateComponent": function ObservationUpdateComponent() {
          return (
            /* binding */
            _ObservationUpdateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_observation_update_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./observation-update.component.html */
      53190);
      /* harmony import */


      var _observation_update_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observation-update.component.scss */
      31190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var src_app_components_observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/observationmodal/observationmodal.component */
      6709);

      var _ObservationUpdateComponent = /*#__PURE__*/function () {
        function ObservationUpdateComponent(modalController, _apiService, _router, ionicStore, _translate) {
          var _this10 = this;

          _classCallCheck(this, ObservationUpdateComponent);

          this.modalController = modalController;
          this._apiService = _apiService;
          this._router = _router;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.misMatchAttendance = [];
          this.strength = [];
          this.improvement = [];
          this.currentImprovement = [];
          this.allTeachersList = [];
          this.improvedList = [];
          this.needimproveList = [];

          this.createPage = function () {
            var apiData = {
              pageNo: "13",
              pageName: "ObservationReport_update",
              apiResponse: {
                records: {}
              }
            };
            _this10.storeDetail.pages.pageData[12] = apiData;
            _this10.storeDetail.pages.currentProgress = _this10.progressValue;

            _this10.ionicStore.setStoreData(_this10.storeDetail);
          };

          this.goToBackPage = function () {
            _this10.misMatchAttendance = _this10.storeDetail.pages.pageData[6].correctedDetails;

            if (_this10.misMatchAttendance.length) {
              _this10._router.navigate(["/tnvntabs/page-route/attendance/student-data"]);
            } else {
              _this10._router.navigate(["/tnvntabs/page-route/observation"]);
            }
          };
        }

        return _createClass(ObservationUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            var teacherInfo = localStorage.getItem('teacherInfo');
            this.teacherDetails = JSON.parse(teacherInfo);
            this.progressValue = Math.round((13 - 2) / 14 * 100);
            this.appLanguage();
            this.ionicStore.getStoreData().then(function (response) {
              _this11.storeDetail = response;
              _this11.storeDetail.pages.currentPage = "ObservationReport_update";

              _this11.ionicStore.setStoreData(_this11.storeDetail);

              _this11.teacherDetails = _this11.storeDetail.pages.pageData[5].pageDetails.teacherDetails;

              if (_this11.storeDetail.pages.pageData[11]) {
                _this11.currentImprovement = _this11.storeDetail.pages.pageData[11].pageDetails.improvement;

                if (_this11.teacherDetails.improvement) {
                  if (_this11.teacherDetails.improvement != "null") {
                    _this11.improvement = _this11.teacherDetails.improvement.split("|");

                    var currentImprovementData = _this11.currentImprovement.map(function (data) {
                      return data.action_item_description;
                    });

                    _this11.improvement = _this11.improvement.filter(function (i) {
                      return i;
                    });

                    _this11.improvement.forEach(function (previmprovement) {
                      var found = currentImprovementData.includes(previmprovement);

                      if (found) {
                        _this11.needimproveList.push(previmprovement);
                      } else {
                        _this11.improvedList.push(previmprovement);
                      }
                    });
                  }
                }
              }

              _this11.improvedList = _this11.improvedList.filter(function (i) {
                return i;
              });

              if (_this11.storeDetail.pages.pageData[12] == undefined || _this11.storeDetail.pages.pageData[12] == null) {
                _this11.createPage();
              } else {}
            });
          }
        }, {
          key: "appLanguage",
          value: function appLanguage() {
            var _this12 = this;

            this._apiService.languageInfo.subscribe(function (data) {
              _this12.languageType = data;

              _this12._translate.use(_this12.languageType);

              _this12._initialiseTranslation();
            });
          }
        }, {
          key: "_initialiseTranslation",
          value: function _initialiseTranslation() {
            var _this13 = this;

            this._translate.get("Observation").subscribe(function (res) {
              _this13.Observation = res;
            });

            this._translate.get("Report").subscribe(function (res) {
              _this13.Report = res;
            });

            this._translate.get("UpdateObservation").subscribe(function (res) {
              _this13.UpdateObservation = res;
            });

            this._translate.get("Congratulate").subscribe(function (res) {
              _this13.Congratulate = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this13.Note = res;
            });

            this._translate.get("noData").subscribe(function (res) {
              _this13.noData = res;
            });

            this._translate.get("encourage").subscribe(function (res) {
              _this13.encourage = res;
            });

            this._translate.get("workPreviousObservation").subscribe(function (res) {
              _this13.workPreviousObservation = res;
            });

            this._translate.get("submitObservation").subscribe(function (res) {
              _this13.submitObservation = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this13.back = res;
            });
          }
        }, {
          key: "openDiscussModal",
          value: function openDiscussModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this14 = this;

              var modal;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.modalController.create({
                      component: src_app_components_observationmodal_observationmodal_component__WEBPACK_IMPORTED_MODULE_4__.ObservationmodalComponent,
                      cssClass: "my-custom-modal-updateObservation",
                      componentProps: {
                        teacherDetails: this.teacherDetails
                      },
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context3.v;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned.data) {
                        var level = localStorage.getItem("selectedlevel");

                        _this14._router.navigate(["/tnvntabs/page-route/hodinspection"]);
                      }
                    });

                    this._apiService.name.subscribe(function (response) {
                      if (response == "showText") {
                        var body = document.getElementsByTagName("ion-modal")[0];
                        body.classList.add("new-info");
                      }
                    });

                    _context3.n = 2;
                    return modal.present();

                  case 2:
                    return _context3.a(2, _context3.v);
                }
              }, _callee3, this);
            }));
          }
        }]);
      }();

      _ObservationUpdateComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_3__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService
        }];
      };

      _ObservationUpdateComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-observation-update",
        template: _raw_loader_observation_update_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observation_update_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ObservationUpdateComponent);
      /***/
    },

    /***/
    53554:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationComponent": function ObservationComponent() {
          return (
            /* binding */
            _ObservationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_observation_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./observation.component.html */
      93615);
      /* harmony import */


      var _observation_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observation.component.scss */
      83012);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
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


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jspdf */
      31769);
      /* harmony import */


      var _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-path/ngx */
      33002);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! dom-to-image */
      83697);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);

      var _ObservationComponent = /*#__PURE__*/function () {
        function ObservationComponent(modalController, alertController, _router, _apiService, loading, ionicStore, _translate, userSessionService, platform, filePath, socialSharing, file) {
          var _this15 = this;

          _classCallCheck(this, ObservationComponent);

          this.modalController = modalController;
          this.alertController = alertController;
          this._router = _router;
          this._apiService = _apiService;
          this.loading = loading;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.userSessionService = userSessionService;
          this.platform = platform;
          this.filePath = filePath;
          this.socialSharing = socialSharing;
          this.file = file;
          this.items = [];
          this.class123 = [];
          this.class45 = [];
          this.class678 = [];
          this.misMatchAttendance = [];
          this.date = new Date().toLocaleDateString();
          this.showdata = false;
          this.accessedStudentList = [];
          this.graStudentList = [];
          this.scannedStudentList = [];
          this._areas = {
            aos: [],
            aod: []
          };

          this.shareImage = function () {
            var div = document.getElementById("PrintObservation");
            var table = document.getElementById("container");
            var options = {
              background: "white",
              height: div.clientHeight + 50,
              width: div.clientWidth + 50
            };
            dom_to_image__WEBPACK_IMPORTED_MODULE_10___default().toPng(div, options).then(function (dataUrl) {
              var doc = new jspdf__WEBPACK_IMPORTED_MODULE_7__.jsPDF("p", "mm", "a4");
              var width = doc.internal.pageSize.getWidth();
              var height = doc.internal.pageSize.getHeight();
              doc.addImage(dataUrl, 'PNG', 10, 10, width, height);
              var pdfOutput = doc.output();
              var buffer = new ArrayBuffer(pdfOutput.length);
              var array = new Uint8Array(buffer);

              for (var i = 0; i < pdfOutput.length; i++) {
                array[i] = pdfOutput.charCodeAt(i);
              }

              _this15.filePath.resolveNativePath('file://').then(function (filePath) {
                return console.log(filePath);
              })["catch"](function (err) {
                return console.log(err);
              });

              _this15.file.listDir(_this15.file.externalDataDirectory, '').then(function (folderList) {});

              var directory = _this15.file.externalDataDirectory;
              var fileName = "Observationreport.pdf";
              var options = {
                replace: true
              };

              _this15.file.checkFile(directory, fileName).then(function (success) {
                _this15.file.writeFile(directory, fileName, buffer, options).then(function (success) {})["catch"](function (error) {});
              })["catch"](function (error) {
                _this15.file.writeFile(directory, fileName, buffer).then(function (success) {})["catch"](function (error) {});
              });
            })["catch"](function (error) {});

            if (_this15.platform.is('cordova')) {
              var fileName = "Observationreport.pdf";
              var ROOT_DIRECTORY = _this15.file.externalDataDirectory + fileName;

              _this15.socialSharing.share("Message", "Subject", ROOT_DIRECTORY, "").then(function (entries) {})["catch"](function (error) {
                alert('error ' + JSON.stringify(error));
              });
            }
          };

          this.getAreas = function (groupedQuestions, area) {
            var _a, _b, _c;

            for (var key in groupedQuestions) {
              if (groupedQuestions.hasOwnProperty(key)) {
                var elements = groupedQuestions[key];
                var elementsSorted = lodash__WEBPACK_IMPORTED_MODULE_2___default().sortBy(elements, ["action_priority"]);

                var _loop = function _loop() {
                  var action = elementsSorted[i];

                  if (action.type_of_ans == "1") {
                    var ansdata = action.ans.ans.filter(function (data) {
                      if (data.ans == action.selectedans) {
                        return data;
                      }
                    });

                    if (action.selectedans && ansdata.length > 0) {
                      if (((_a = ansdata[0]) === null || _a === void 0 ? void 0 : _a.action_item_description) == '') return 0; // continue

                      action.selectedAnswer = {
                        "answer_id": ansdata[0].id,
                        "answer": ansdata[0].ans
                      };
                    }
                  } // if(action.selectedans){
                  //   if(action.selectedans == 'Yes'){
                  //     action.selectedAnswer = {"answer_id" : '1', "answer" : "Yes"}
                  //   }
                  //   else if(elementsSorted[i].selectedans == 'No'){
                  //     action.selectedAnswer = {"answer_id" : '2', "answer" : "No"}
                  //   }
                  //   else if(action.selectedans == 'ஆம்'){
                  //     action.selectedAnswer = {"answer_id" : '1', "answer" : "ஆம்"}
                  //   }
                  //   else if(action.selectedans == 'இல்லை'){
                  //     action.selectedAnswer = {"answer_id" : '1', "answer" : "இல்லை"}
                  //   }            
                  // }


                  if (action.ans == null) return 0; // continue

                  if (((_c = (_b = action.ans) === null || _b === void 0 ? void 0 : _b.aos) === null || _c === void 0 ? void 0 : _c.length) == 0) return 0; // continue

                  var selAnswer = action.selectedAnswer;
                  var answerId = (selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id) != undefined ? selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id : '';
                  console.log(selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id, 'selAnswer.answer_id');
                  var _area = action.ans[area];
                  var ans = action.ans.ans;
                  var joinedSel, isAOS;

                  if (Array.isArray(selAnswer)) {
                    joinedSel = selAnswer.map(function (s) {
                      return s.answer_id;
                    }).sort();

                    if (action.action_name == "CCE record") {
                      if (joinedSel.join() == "1,2,3") {
                        if (_area[1]) {
                          if (_area[1].length > 1) {
                            isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area.toString(), joinedSel.join());
                          }
                        }
                      } else {
                        joinedSel.forEach(function (js) {
                          isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area, js);
                        });
                      }
                    } else {
                      joinedSel.forEach(function (js) {
                        isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area, js);
                      });
                    }
                  } else {
                    joinedSel = selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id;
                    isAOS = lodash__WEBPACK_IMPORTED_MODULE_2___default().includes(_area, Number(joinedSel));
                  }

                  if (elementsSorted[i].action_name == "Pedagogy" && elementsSorted[i].classtype == '2' && elementsSorted[i].action_priority == '1') {
                    if (isAOS) {
                      if (Array.isArray(joinedSel)) {
                        if (_area[1] && _area[1].length > 1) {
                          _this15._areas[area].push({
                            action_item_description: _area[1],
                            param_id: action.param_id.toString()
                          });
                        } else {
                          joinedSel.forEach(function (jss) {
                            var f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, function (a) {
                              return a.id == Number(jss);
                            });
                            f.param_id = action.param_id.toString();

                            _this15._areas[area].push(f);
                          });
                        }
                      } else {
                        var f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, function (a) {
                          return a.id == Number(joinedSel);
                        });
                        f.param_id = action.param_id.toString();

                        _this15._areas[area].push(f);
                      }
                    }
                  } else {
                    if (isAOS) {
                      if (Array.isArray(joinedSel)) {
                        if (_area[1] && _area[1].length > 1) {
                          _this15._areas[area].push({
                            action_item_description: _area[1],
                            param_id: action.param_id.toString()
                          });
                        } else {
                          joinedSel.forEach(function (jss) {
                            var f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, function (a) {
                              return a.id == Number(jss);
                            });
                            f.param_id = action.param_id.toString();

                            _this15._areas[area].push(f);
                          });
                        }
                      } else {
                        var _f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, function (a) {
                          return a.id == Number(joinedSel);
                        });

                        var found = false;
                        ans.forEach(function (data) {
                          if (data.action_item_description == "") {
                            found = true;
                          }
                        });

                        if (found) {
                          return 0; // continue
                        }

                        _f.param_id = action.param_id.toString();

                        _this15._areas[area].push(_f);
                      }

                      return 1; // break
                    }
                  }

                  if (isAOS) {
                    if (Array.isArray(joinedSel)) {
                      if (_area[1] && _area[1].length > 1) {
                        _this15._areas[area].push({
                          action_item_description: _area[1],
                          param_id: action.param_id.toString()
                        });
                      } else {
                        joinedSel.forEach(function (jss) {
                          var f = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, function (a) {
                            return a.id == Number(jss);
                          });
                          f.param_id = action.param_id.toString();

                          _this15._areas[area].push(f);
                        });
                      }
                    } else {
                      var _f2 = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(ans, function (a) {
                        return a.id == Number(joinedSel);
                      });

                      _f2.param_id = action.param_id.toString();

                      _this15._areas[area].push(_f2);
                    }
                  }
                },
                    _ret;

                for (var i = 0; i < elementsSorted.length; i++) {
                  _ret = _loop();
                  if (_ret === 0) continue;
                  if (_ret === 1) break;
                }
              }
            }
          };

          this.checkpedagogy = function (groupedQuestions, area) {
            var _a, _b;

            for (var key in groupedQuestions) {
              if (groupedQuestions.hasOwnProperty(key)) {
                var elements = groupedQuestions[key];
                var elementsSorted = lodash__WEBPACK_IMPORTED_MODULE_2___default().sortBy(elements, ["action_priority"]);

                var _loop2 = function _loop2() {
                  var action = elementsSorted[_i];

                  if (action.type_of_ans == "1") {
                    var ansdata = action.ans.ans.filter(function (data) {
                      if (data.ans == action.selectedans) {
                        return data;
                      }
                    });

                    if (action.selectedans && ansdata.length > 0) {
                      action.selectedAnswer = {
                        "answer_id": ansdata[0].id,
                        "answer": ansdata[0].ans
                      };
                    }
                  } // if(action.selectedans){
                  //   if(action.selectedans == 'Yes'){
                  //     action.selectedAnswer = {"answer_id" : '1', "answer" : "Yes"}
                  //   }
                  //   else if(elementsSorted[i].selectedans == 'No'){
                  //     action.selectedAnswer = {"answer_id" : '2', "answer" : "No"}
                  //   }
                  //   else if(action.selectedans == 'ஆம்'){
                  //     action.selectedAnswer = {"answer_id" : '1', "answer" : "ஆம்"}
                  //   }
                  //   else if(action.selectedans == 'இல்லை'){
                  //     action.selectedAnswer = {"answer_id" : '1', "answer" : "இல்லை"}
                  //   } 
                  // }


                  if (action.ans == null) return 0; // continue

                  if (((_b = (_a = action.ans) === null || _a === void 0 ? void 0 : _a.aos) === null || _b === void 0 ? void 0 : _b.length) == 0) return 0; // continue

                  var selAnswer = action.selectedAnswer;
                  var answerId = (selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id) != undefined ? selAnswer === null || selAnswer === void 0 ? void 0 : selAnswer.answer_id : ''; // if (!action.ans) continue;

                  if (action.classtype == '2' && action.action_name == "Pedagogy") {
                    if (action["class"] == '1' || action["class"] == '2' || action["class"] == '3') {
                      for (var j = 0; j < selAnswer.length; j++) {
                        _this15.class123.push(selAnswer[j].answer_id);
                      }
                    }

                    if (action["class"] == '4' || action["class"] == '5') {
                      for (var _j = 0; _j < selAnswer.length; _j++) {
                        _this15.class45.push(selAnswer[_j].answer_id);
                      }
                    }

                    if (action["class"] == '6' || action["class"] == '7' || action["class"] == '8') {
                      for (var _j2 = 0; _j2 < selAnswer.length; _j2++) {
                        _this15.class678.push(selAnswer[_j2].answer_id);
                      }
                    }
                  }
                },
                    _ret2;

                for (var _i = 0; _i < elementsSorted.length; _i++) {
                  _ret2 = _loop2();
                  if (_ret2 === 0) continue;
                }
              }
            }

            if (_this15.class123.length > 0 && _this15.class45.length > 0) {
              if (_this15.class123.indexOf('4') != -1 && _this15.class45.indexOf('8') != -1) {
                for (var i = 0; i < _this15._areas.aos.length; i++) {
                  if (_this15._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }
                }

                for (var i = 0; i < _this15._areas.aod.length; i++) {
                  if (_this15._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                    _this15._areas.aod.splice(i, 1);
                  }
                }

                if (_this15.languageType == 'en') {
                  var data = {
                    param_id: '2',
                    action_item_description: 'Please Follow the steps in the pedagogy.'
                  };

                  if (_this15._areas.aod) {
                    if (_this15._areas.aod[0].param_id.toString() == '1') {
                      _this15._areas.aod.splice(1, 0, data);
                    } else {
                      _this15._areas.aod.unshift(data);
                    }
                  }
                } else {
                  var _data = {
                    param_id: '2',
                    action_item_description: 'கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.'
                  };

                  if (_this15._areas.aod) {
                    if (_this15._areas.aod[0].param_id.toString() == '1') {
                      _this15._areas.aod.splice(1, 0, _data);
                    } else {
                      _this15._areas.aod.unshift(_data);
                    }
                  }
                }
              } else if (_this15.class123.indexOf('4') == -1 && _this15.class45.indexOf('8') == -1) {
                for (var i = 0; i < _this15._areas.aod.length; i++) {
                  if (_this15._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                    _this15._areas.aod.splice(i, 1);
                  }
                }

                for (var i = 0; i < _this15._areas.aos.length; i++) {
                  if (_this15._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }
                }

                if (_this15.languageType == 'en') {
                  var _data2 = {
                    param_id: '2',
                    action_item_description: 'You are following the steps in the pedagogy. Well done!'
                  };

                  if (_this15._areas.aos) {
                    if (_this15._areas.aos[0].param_id.toString() == '1') {
                      _this15._areas.aos.splice(1, 0, _data2);
                    } else {
                      _this15._areas.aos.unshift(_data2);
                    }
                  }
                } else {
                  var _data3 = {
                    param_id: '2',
                    action_item_description: 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!'
                  };

                  if (_this15._areas.aos) {
                    if (_this15._areas.aos[0].param_id.toString() == '1') {
                      _this15._areas.aos.splice(1, 0, _data3);
                    } else {
                      _this15._areas.aos.unshift(_data3);
                    }
                  }
                }
              } else if (_this15.class123.indexOf('4') == -1 && _this15.class45.indexOf('8') != -1) {
                for (var i = 0; i < _this15._areas.aod.length; i++) {
                  if (_this15._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                    _this15._areas.aod.splice(i, 1);
                  }
                }

                for (var i = 0; i < _this15._areas.aos.length; i++) {
                  if (_this15._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }
                }
              } else if (_this15.class123.indexOf('4') != -1 && _this15.class45.indexOf('8') == -1) {
                for (var i = 0; i < _this15._areas.aod.length; i++) {
                  if (_this15._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                    _this15._areas.aod.splice(i, 1);
                  }
                }

                for (var i = 0; i < _this15._areas.aos.length; i++) {
                  if (_this15._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }
                }
              }
            }

            if (_this15.class123 && !_this15.class45) {
              if (_this15.class123.indexOf('4') != -1) {
                for (var i = 0; i < _this15._areas.aos.length; i++) {
                  if (_this15._areas.aos[i].action_item_description == 'You are following the steps in the pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }
                }
              } else {
                for (var i = 0; i < _this15._areas.aod.length; i++) {
                  if (_this15._areas.aod[i].action_item_description == 'Teacher contact activity, peer activity and independent activity need to be carried out in all classes') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'ஆசிரியர் நேர செயல்பாடு, குழு செயல்பாடு மற்றும் தனி நபர் செயல்பாடு ஆகியவை வகுப்பில் மேற்கொள்ளப்பட வேண்டும்') {
                    _this15._areas.aod.splice(i, 1);
                  }
                }
              }

              if (_this15.class45 && !_this15.class123) {
                if (_this15.class45.indexOf('8') != -1) {
                  for (var i = 0; i < _this15._areas.aos.length; i++) {
                    if (_this15._areas.aos[i].action_item_description == 'You follow the steps in the SALM pedagogy. Well done!') {
                      _this15._areas.aos.splice(i, 1);
                    }

                    if (_this15._areas.aos[i].action_item_description == 'நீங்கள் SALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                      _this15._areas.aos.splice(i, 1);
                    }
                  }
                } else {
                  for (var i = 0; i < _this15._areas.aod.length; i++) {
                    if (_this15._areas.aod[i].action_item_description == 'Follow the steps in the SALM pedagogy.') {
                      _this15._areas.aod.splice(i, 1);
                    }

                    if (_this15._areas.aod[i].action_item_description == 'SALM  கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                      _this15._areas.aod.splice(i, 1);
                    }
                  }
                }
              }
            }

            if (_this15.class678.length > 0) {
              if (_this15.class678.indexOf('8') != -1) {
                for (var i = 0; i < _this15._areas.aos.length; i++) {
                  if (_this15._areas.aos[i].action_item_description == 'You follow the steps in the ALM pedagogy. Well done!') {
                    _this15._areas.aos.splice(i, 1);
                  }

                  if (_this15._areas.aos[i].action_item_description == 'நீங்கள் ALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றுகிறீர்கள். வாழ்த்துக்கள்!') {
                    _this15._areas.aos.splice(i, 1);
                  }
                }
              } else {
                for (var i = 0; i < _this15._areas.aod.length; i++) {
                  if (_this15._areas.aod[i].action_item_description == 'Follow the steps in the ALM pedagogy.') {
                    _this15._areas.aod.splice(i, 1);
                  }

                  if (_this15._areas.aod[i].action_item_description == 'ALM கற்றல்-கற்பித்தல் செயல்பாடுகளைப் பின்பற்றவும்.') {
                    _this15._areas.aod.splice(i, 1);
                  }
                }
              }
            }

            _this15._areas.aos = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(_this15._areas.aos, function (_this) {
              return _this.param_id.toString();
            });
            _this15._areas.aod = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(_this15._areas.aod, function (_this) {
              return _this.param_id.toString();
            });
          };

          this.getList = function () {
            var _a, _b, _c;

            debugger;

            if (_this15.storeDetail.pages.pageData[7] != undefined) {
              var questionData;

              if ((_a = _this15.storeDetail.pages.pageData[14]) === null || _a === void 0 ? void 0 : _a.correctedDetails) {
                if ((_b = _this15.storeDetail.pages.pageData[16]) === null || _b === void 0 ? void 0 : _b.correctedDetails) {
                  questionData = [].concat(_toConsumableArray(_this15.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList), _toConsumableArray(_this15.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList), _toConsumableArray(_this15.storeDetail.pages.pageData[14].correctedDetails.sec_data));
                } else {
                  questionData = [].concat(_toConsumableArray(_this15.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList), _toConsumableArray(_this15.storeDetail.pages.pageData[14].correctedDetails.sec_data));
                }
              } else {
                if ((_c = _this15.storeDetail.pages.pageData[16]) === null || _c === void 0 ? void 0 : _c.correctedDetails) {
                  questionData = [].concat(_toConsumableArray(_this15.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList), _toConsumableArray(_this15.storeDetail.pages.pageData[16].correctedDetails.customizeSectionList));
                } else {
                  questionData = _toConsumableArray(_this15.storeDetail.pages.pageData[7].correctedDetails.customizeSectionList);
                }
              }

              var questionsList = [];
              questionData.forEach(function (element) {
                element.questionList.forEach(function (v) {
                  questionsList.push(v);
                });
              });
              questionsList.sort(function (x, y) {
                return Number(x.param_priority) - Number(y.param_priority) || Number(x.action_priority) - Number(y.action_priority);
              });
              var groupedQuestions = lodash__WEBPACK_IMPORTED_MODULE_2___default().groupBy(questionsList, "param_priority");
              localStorage.setItem("scoreSection", JSON.stringify(groupedQuestions));

              _this15.getAreas(groupedQuestions, "aos");

              _this15.getAreas(groupedQuestions, "aod");

              _this15._areas.aos = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(_this15._areas.aos, function (_this) {
                return _this.action_item_description;
              });
              _this15._areas.aod = lodash__WEBPACK_IMPORTED_MODULE_2___default().uniqBy(_this15._areas.aod, function (_this) {
                return _this.action_item_description;
              });
              _this15._areas.aos = _this15._areas.aos.filter(function (data) {
                if (data.action_item_description && data.action_item_description != "") {
                  return data;
                }
              });
              _this15._areas.aod = _this15._areas.aod.filter(function (data) {
                if (data.action_item_description && data.action_item_description != "") {
                  return data;
                }
              });
              var logDataNew = {
                username: localStorage.getItem("username"),
                udise_code: localStorage.getItem("udise_code"),
                observation_id: localStorage.getItem("observation_id"),
                form_name: "Observation Report",
                action_name: "Observation Report data",
                data: JSON.stringify(_this15._areas),
                completion_percentage: _this15.progressValue
              };

              _this15._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {});

              _this15.checkpedagogy(groupedQuestions, _this15._areas);
            }
          };

          this.createPage = function () {
            var apiData = {
              pageNo: "12",
              pageName: "observationReport",
              apiResponse: {
                records: {}
              },
              pageDetails: {
                strength: [],
                improvement: []
              }
            };
            _this15.storeDetail.pages.pageData[11] = apiData;

            _this15.ionicStore.setStoreData(_this15.storeDetail);

            localStorage.setItem("storedDetails", JSON.stringify(_this15.storeDetail));
          };

          this.goToNextPage = function () {
            debugger;
            _this15.misMatchAttendance = [];
            _this15.storeDetail.pages.pageData[11].pageDetails.strength = _this15._areas.aos;
            _this15.storeDetail.pages.pageData[11].pageDetails.improvement = _this15._areas.aod;
            _this15.storeDetail.pages.currentProgress = _this15.progressValue;
            var usertype = localStorage.getItem("usertype");
            var level = localStorage.getItem("selectedlevel");
            var getfinaldata = localStorage.getItem("finaldata");
            var getteacherlength = localStorage.getItem("teacherlength");

            _this15.ionicStore.setStoreData(_this15.storeDetail);

            localStorage.setItem("storedDetails", JSON.stringify(_this15.storeDetail));

            if (getfinaldata || _this15.user_type == 8) {
              // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);
              _this15._router.navigate(["/tnvntabs/page-route/index"], {
                queryParams: {
                  "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1")
                }
              });
            } else {
              if (JSON.parse(localStorage.getItem('emis_status')) == 1) {
                // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]);   
                _this15._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1")
                  }
                });
              } else {
                _this15._router.navigate(["/tnvntabs/page-route/index"], {
                  queryParams: {
                    "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1")
                  }
                });
              }
            }
          };

          this.goBack = function () {
            if (Number(_this15.storeDetail.pages.pageData[5].correctedDetails.class_id) > 8) {
              _this15._router.navigate(["/tnvntabs/page-route/index"], {
                queryParams: {
                  "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1")
                }
              });
            } else {
              _this15._router.navigate(["/tnvntabs/page-route/index"], {
                queryParams: {
                  "obs_report_section_status": localStorage.setItem("obs_report_section_status", "1")
                }
              });
            }
          };

          this.items = [{
            expanded: false
          }, {
            expanded: false
          }, {
            expanded: false
          }, {
            expanded: false
          }, {
            expanded: false
          }, {
            expanded: false
          }, {
            expanded: false
          }, {
            expanded: false
          }, {
            expanded: false
          }];
        }

        return _createClass(ObservationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this16 = this;

              var teacherInfo, classInfo, schoolInfo;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.progressValue = 89;
                    this.appLanguage();
                    this.loading.present();
                    this.observer_name = this.userSessionService.teacher_name();
                    this.designation = this.userSessionService.type_teacher();
                    teacherInfo = localStorage.getItem("teacherInfo");
                    this.teachertype = this.userSessionService.teacher_type();
                    this.user_type = this.userSessionService.emis_usertype();
                    this.remarks = localStorage.getItem("remarks");
                    this.teacherDetails = JSON.parse(teacherInfo);
                    classInfo = localStorage.getItem("classInfo");
                    this.classDetails = JSON.parse(classInfo);
                    schoolInfo = localStorage.getItem("schoolInfo");
                    this.schoolDetails = JSON.parse(schoolInfo);
                    _context4.n = 1;
                    return this.ionicStore.getStoreData().then(function (response) {
                      var _a, _b;

                      _this16.storeDetail = response;

                      if (_this16.storeDetail == null) {
                        if (_this16.storeDetail == null || _this16.storeDetail == undefined) {
                          _this16.storeDetail = JSON.parse(localStorage.getItem("storedDetails"));
                        }

                        var logDataNew = {
                          username: localStorage.getItem("username"),
                          udise_code: localStorage.getItem("udise_code"),
                          observation_id: localStorage.getItem("observation_id"),
                          form_name: "Observation Report",
                          action_name: "Observation Report data",
                          data: JSON.stringify(_this16.storeDetail),
                          completion_percentage: _this16.progressValue
                        };

                        _this16._apiService.setActivityLog(logDataNew).subscribe(function (response) {}, function (error) {});
                      }

                      if (_this16.storeDetail.pages.pageData[5] && _this16.teacherDetails == null) {
                        _this16.teacherDetails = _this16.storeDetail.pages.pageData[5].pageDetails.teacherDetails;
                      }

                      if (_this16.storeDetail.pages.pageData[0] && _this16.schoolDetails == null) {
                        _this16.schoolDetails = _this16.storeDetail.pages.pageData[0].pageDetails;
                      }

                      if (_this16.storeDetail.pages.pageData[18]) {
                        if (_this16.storeDetail.pages.pageData[18].omrData) {
                          if (_this16.storeDetail.pages.pageData[18].omrData.length > 0) {
                            _this16.scannedStudentList = _this16.storeDetail.pages.pageData[18].omrData.filter(function (data) {
                              if (data.scanned == true || data.scanned == false) {
                                return data;
                              }
                            });
                          } else {
                            _this16.scannedStudentList = _this16.storeDetail.pages.pageData[18].omrData.filter(function (data) {
                              if (data.scanned == true || data.scanned == false) {
                                return data;
                              }
                            });
                          }
                        }
                      }

                      if (_this16.storeDetail.pages.pageData[20]) {
                        if (_this16.storeDetail.pages.pageData[20].correctedDetails.graStudents) {
                          if (_this16.storeDetail.pages.pageData[20].correctedDetails.graStudents.length > 0) {
                            _this16.graStudentList = _this16.storeDetail.pages.pageData[20].correctedDetails.graStudents;
                          }
                        }
                      }

                      var Grades = ["A", "B", "C", "D"];

                      if (_this16.scannedStudentList.length > 0) {
                        for (var i = 0; i < _this16.scannedStudentList.length; i++) {
                          var gradesIdx = Math.floor(Math.random() * Grades.length);
                          _this16.scannedStudentList[i].grade = Grades[gradesIdx];
                          var scan_status = _this16.storeDetail.pages.pageData[18].omrData[i].scanned;

                          if (scan_status == true) {
                            _this16.storeDetail.pages.pageData[18].omrData[i].omr_score = String(_this16.scannedStudentList[i].CorrectAns.length) + "/" + String(_this16.scannedStudentList[i].questionsAns.length);
                          } else if (scan_status == false) {
                            _this16.storeDetail.pages.pageData[18].omrData[i].omr_score = null;
                          }
                        }
                      }

                      if (_this16.storeDetail.pages.pageData[18]) {
                        if (_this16.storeDetail.pages.pageData[18].omrData) {
                          localStorage.setItem("final-omr-student-list", JSON.stringify(_this16.storeDetail.pages.pageData[18].omrData));
                        }
                      }

                      _this16.storeDetail.pages.currentPage = "observationReport";
                      _this16.selectedclass = _this16.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id;
                      _this16.selectedSection = _this16.storeDetail.pages.pageData[5].pageDetails.section;

                      if (Number(_this16.selectedclass) != 9 && Number(_this16.selectedclass) != 10 && Number(_this16.selectedclass) != 11 && Number(_this16.selectedclass) != 12) {
                        _this16.showdata = true;
                      }

                      _this16.ionicStore.setStoreData(_this16.storeDetail);

                      localStorage.setItem("storedDetails", JSON.stringify(_this16.storeDetail));

                      if (_this16.storeDetail.pages.pageData[11] == undefined || _this16.storeDetail.pages.pageData[11] == null) {
                        _this16.createPage();
                      }

                      if (_this16.storeDetail.pages.pageData[8]) {
                        if ((_a = _this16.storeDetail.pages.pageData[8]) === null || _a === void 0 ? void 0 : _a.unitInfo) {
                          _this16.chapterDetail = (_b = _this16.storeDetail.pages.pageData[8]) === null || _b === void 0 ? void 0 : _b.correctedDetails.unitInfo.learning_outcome;

                          if (_this16.storeDetail.pages.pageData[10]) {
                            _this16.accessedStudentList = lodash__WEBPACK_IMPORTED_MODULE_2___default().remove(lodash__WEBPACK_IMPORTED_MODULE_2___default().flattenDeep(_this16.storeDetail.pages.pageData[10].pageDetails), lodash__WEBPACK_IMPORTED_MODULE_2___default().undefined);
                          }
                        }
                      }

                      _this16.getList();

                      _this16.loading.dismiss();
                    });

                  case 1:
                    if (this.platform.is("android")) {}

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "showInputAlert",
          value: function showInputAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var alert;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    _context5.n = 1;
                    return this.alertController.create({
                      header: "Note to Observer while scanning the OMR sheet:",
                      cssClass: "my-custom-class",
                      message: "<li>Take the clear picture of the OMR sheet.</li><br><li>Please scan in portrait mode (vertically) and on a flat surface.</li><br> <li>Also, make sure all 4 borders are scanned correctly.</li>",
                      backdropDismiss: false,
                      buttons: [{
                        text: "ok",
                        handler: function handler() {}
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
          key: "successInPreventScreenshot",
          value: function successInPreventScreenshot(isDone) {}
        }, {
          key: "errorInPreventScreenshot",
          value: function errorInPreventScreenshot(isError) {}
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

            this._translate.get("Observation").subscribe(function (res) {
              _this18.Observation = res;
            });

            this._translate.get("observedDate").subscribe(function (res) {
              _this18.observedDate = res;
            });

            this._translate.get("Report").subscribe(function (res) {
              _this18.Report = res;
            });

            this._translate.get("discussReport").subscribe(function (res) {
              _this18.discussReport = res;
            });

            this._translate.get("schoolObserved").subscribe(function (res) {
              _this18.schoolObserved = res;
            });

            this._translate.get("standardObserved").subscribe(function (res) {
              _this18.standardObserved = res;
            });

            this._translate.get("subject").subscribe(function (res) {
              _this18.subject = res;
            });

            this._translate.get("studentTested").subscribe(function (res) {
              _this18.studentTested = res;
            });

            this._translate.get("TodayReport").subscribe(function (res) {
              _this18.TodayReport = res;
            });

            this._translate.get("areastrength").subscribe(function (res) {
              _this18.areastrength = res;
            });

            this._translate.get("areaImprovement").subscribe(function (res) {
              _this18.areaImprovement = res;
            });

            this._translate.get("assessmentResults").subscribe(function (res) {
              _this18.assessmentResults = res;
            });

            this._translate.get("shareonwhatsapp").subscribe(function (res) {
              _this18.shareonwhatsapp = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this18.next = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this18.back = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this18.save = res;
            });
          }
        }, {
          key: "expandItem",
          value: function expandItem(item) {
            if (item.expanded) {
              item.expanded = false;
            } else {
              this.items.map(function (listItem) {
                if (item == listItem) {
                  listItem.expanded = !listItem.expanded;
                } else {
                  listItem.expanded = false;
                }

                return listItem;
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.platform.is("android")) {}
          }
        }]);
      }();

      _ObservationComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_4__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
        }, {
          type: _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__.FilePath
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__.SocialSharing
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File
        }];
      };

      _ObservationComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: "app-observation",
        template: _raw_loader_observation_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_observation_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ObservationComponent);
      /***/
    },

    /***/
    54181:
    /*!**************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ObservationModule": function ObservationModule() {
          return (
            /* binding */
            _ObservationModule
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


      var _observation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./observation.component */
      53554);
      /* harmony import */


      var src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/expandable/expandable.component */
      38932);
      /* harmony import */


      var _observation_update_observation_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./observation-update/observation-update.component */
      73895);
      /* harmony import */


      var _observation_end_observation_end_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./observation-end/observation-end.component */
      36013);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);
      /* harmony import */


      var _observation_discussion_observation_discussion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./observation-discussion/observation-discussion.component */
      56885);
      /* harmony import */


      var _observation_teaching_observation_teaching_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./observation-teaching/observation-teaching.component */
      61631);

      var routes = [{
        path: '',
        component: _observation_component__WEBPACK_IMPORTED_MODULE_0__.ObservationComponent
      }, {
        path: 'observationDiscussion',
        component: _observation_discussion_observation_discussion_component__WEBPACK_IMPORTED_MODULE_5__.ObservationDiscussionComponent
      }, {
        path: 'observationTeaching',
        component: _observation_teaching_observation_teaching_component__WEBPACK_IMPORTED_MODULE_6__.ObservationTeachingComponent
      }, {
        path: 'updateObservation',
        component: _observation_update_observation_update_component__WEBPACK_IMPORTED_MODULE_2__.ObservationUpdateComponent
      }, {
        path: 'endObservation',
        component: _observation_end_observation_end_component__WEBPACK_IMPORTED_MODULE_3__.ObservationEndComponent
      }];

      var _ObservationModule = /*#__PURE__*/_createClass(function ObservationModule() {
        _classCallCheck(this, ObservationModule);
      });

      _ObservationModule = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)],
        declarations: [_observation_component__WEBPACK_IMPORTED_MODULE_0__.ObservationComponent, _observation_teaching_observation_teaching_component__WEBPACK_IMPORTED_MODULE_6__.ObservationTeachingComponent, _observation_discussion_observation_discussion_component__WEBPACK_IMPORTED_MODULE_5__.ObservationDiscussionComponent, _observation_end_observation_end_component__WEBPACK_IMPORTED_MODULE_3__.ObservationEndComponent, _observation_update_observation_update_component__WEBPACK_IMPORTED_MODULE_2__.ObservationUpdateComponent, src_app_components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_1__.ExpandableComponent],
        exports: [],
        entryComponents: []
      })], _ObservationModule);
      /***/
    },

    /***/
    63680:
    /*!*****************************************************************!*\
      !*** ./src/app/components/expandable/expandable.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usd0JBQUE7QUFDSiIsImZpbGUiOiJleHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2xsYXBzZWQge1xyXG4gICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    98726:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-discussion/observation-discussion.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".method-header-four {\n  background: #7985F2;\n  padding: 0.51em 0.35em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLWRpc2N1c3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoib2JzZXJ2YXRpb24tZGlzY3Vzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRob2QtaGVhZGVyLWZvdXJ7XHJcblxyXG4gICAgYmFja2dyb3VuZDogIzc5ODVGMjtcclxuICAgIHBhZGRpbmc6MC41MWVtIDAuMzVlbTtcclxuIFxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    46002:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-end/observation-end.component.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYnNlcnZhdGlvbi1lbmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    4085:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-teaching/observation-teaching.component.scss ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvYnNlcnZhdGlvbi10ZWFjaGluZy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    31190:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation-update/observation-update.component.scss ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h5 {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsImZpbGUiOiJvYnNlcnZhdGlvbi11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    83012:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/tnvn/observation/observation.component.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p,\nh5,\nul > li {\n  font-size: 12px;\n}\n\nion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n/* Zebra striping */\n\ntr:nth-of-type(odd) {\n  background: #eee;\n}\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold;\n}\n\ntd, th {\n  border: 1px solid #ccc;\n  word-break: break-all;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5Q0FBQTtBQUVKOztBQUFBO0VBQ0kscUNBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURFLG1CQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFJSjs7QUFGRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEU7RUFFRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFLSiIsImZpbGUiOiJvYnNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAsXHJcbmg1LFxyXG51bD5saXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2U2ZGVlZCAhaW1wb3J0YW50OyAgXHJcbiAgfVxyXG4uYmctdHJhbnNwYXJlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnRcclxufVxyXG5cclxudGFibGUgeyBcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxyXG4gIH1cclxuICAvKiBaZWJyYSBzdHJpcGluZyAqL1xyXG4gIHRyOm50aC1vZi10eXBlKG9kZCkgeyBcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7IFxyXG4gIH1cclxuICB0aCB7IFxyXG4gICAgYmFja2dyb3VuZDogIzMzMzsgXHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gIH1cclxuICB0ZCwgdGggeyBcclxuICAgIC8vcGFkZGluZzogNnB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    93032:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expandable/expandable.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\r\n  <ng-content></ng-content>\r\n</div>";
      /***/
    },

    /***/
    72496:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-discussion/observation-discussion.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"pale-nave_blue\">\r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n              <ion-buttons slot=\"\">\r\n                  <ion-menu-button></ion-menu-button>\r\n                </ion-buttons>\r\n          </ion-col>\r\n          <ion-col class=\"\">\r\n              <ion-title class=\"ion-text-center fs-16\"><b>OBSERVATION <br>DISCUSSION</b>\r\n              </ion-title></ion-col>\r\n          <ion-col>\r\n              <app-notification></app-notification>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>    \r\n  <section class=\"p-0 h-100\">  \r\n    <h4 class=\"method-header-four text-white text-center m-0\">\r\n     <b> {{sectionData?.sec_name}} </b>       \r\n    </h4>\r\n    <div *ngIf=\"sectionData?.questionList.length\"\r\n        class=\"content-wrapper bg-dark-violet h-100\">\r\n    <app-questions [treeData]=\"sectionData?.questionList\" (valueChange)='displayCounter($event)'></app-questions>\r\n    </div>\r\n</section>\r\n  </ion-content>\r\n    <ion-footer style=\"height:50px;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button  class=\"btn-back\" (click)=\"goToBackPage()\">\r\n              <ion-label>BACK</ion-label>\r\n            </ion-tab-button>\r\n            <ion-tab-button class=\"btn-next\"  [routerLink]=\"['/tnvntabs/page-route/observation/updateObservation']\">\r\n              <ion-label>NEXT</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>        \r\n      </ion-footer>\r\n\r\n\r\n";
      /***/
    },

    /***/
    17110:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-end/observation-end.component.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar class=\"new-background-color\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-buttons slot=\"\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                  </ion-buttons>\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-center\">\r\n              <ion-title\r\n                class=\"ion-text-center\"\r\n                [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n              >\r\n                <b>{{ this.Observation }} <br /> </b>\r\n              </ion-title>\r\n            </ion-col>            \r\n           \r\n            <ion-col> \r\n                <app-notification></app-notification>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    \r\n    </ion-toolbar>\r\n   \r\n  </ion-header>\r\n  <ion-content>\r\n    <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n      <div class=\"content-wrapper\">  \r\n  \r\n    <ion-text color=\"\" class=\"ion-text-center text-success\">\r\n        <h3 [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-24': this.languageType == 'ta'}\"><b>{{this.congratulations}}</b></h3>\r\n      </ion-text>\r\n\r\n          <div class=\"check-mark\"> <ion-img width=\"80\" height=\"80\" src='../assets/icons/icons-checks.png'></ion-img></div>\r\n\r\n          <section>  \r\n              <ion-text color=\"\" class=\"ion-text-center\">\r\n              <h2 class=\"text-muted fs-18\"><b><span [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-14': this.languageType == 'ta'}\">{{this.successfullyCompleted}}</span>:</b></h2>\r\n                \r\n                      <h1 class=\"fs-18 lh-2\"><b> {{schoolDetail?.schoolName}}  <br><span>{{this.class}}</span> {{classDetail?.class_id}} {{selectedSection}} <br>{{teacherDetail?.teacher_name}}\r\n                      </b></h1>\r\n                    </ion-text>\r\n            </section> \r\n  </div>\r\n    </ion-content>\r\n    <ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">    \r\n            <ion-tab-button  class=\"btn-next done\" (click)=\"finalSubmit()\">\r\n              <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{goToHomepage}}</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>        \r\n      </ion-footer>\r\n  \r\n  \r\n  ";
      /***/
    },

    /***/
    5806:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-teaching/observation-teaching.component.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar class=\"pale-nave_blue\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n                <ion-buttons slot=\"\">\r\n                    <ion-menu-button></ion-menu-button>\r\n                  </ion-buttons>\r\n            </ion-col>\r\n            <ion-col class=\"\">\r\n                <ion-title class=\"ion-text-center fs-16\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\"><b>{{ this.classroomObservation }}</b>\r\n                </ion-title></ion-col>\r\n            <ion-col>\r\n                <app-notification></app-notification>\r\n              </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n      <app-progress [progress]=\"28\"></app-progress>\r\n\r\n    <section class=\"p-0 h-100\">  \r\n      <div\r\n          class=\"content-wrapper h-100\">\r\n      <p class=\"fs-16 mb-0\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.standardInfo}}</span> :</p>\r\n     <ion-list lines=\"none\" class=\"bg-transparent\">\r\n        <ion-radio-group [(ngModel)]=\"classSelect\">\r\n      <ion-item class=\"bg-transparent\" *ngFor=\"let standard of selectedClass\">\r\n         <ion-label >{{standard.class_id}}</ion-label>\r\n         <ion-radio color=\"favorite\" slot=\"start\" (click)=\"radioChecked(standard)\" value={{standard.class_id}} ></ion-radio>\r\n       </ion-item>\r\n     \r\n      </ion-radio-group>\r\n       </ion-list>\r\n     \r\n      </div>\r\n  </section>\r\n  \r\n  \r\n     \r\n  \r\n    </ion-content>\r\n  \r\n    <ion-footer style=\"height:50px;background-color: #2D9CDB;\">\r\n        <ion-tabs>\r\n          <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button  class=\"btn-back\" [routerLink]=\"['/tnvntabs/page-route/attendance/student-attendance']\">\r\n              <ion-label  [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}</ion-label>\r\n            </ion-tab-button>\r\n            <ion-tab-button  class=\"btn-next\" (click)=\"goToMethodolgyQuestions()\">\r\n              <ion-label  [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.next}}</ion-label>\r\n            </ion-tab-button>\r\n          </ion-tab-bar>\r\n        </ion-tabs>\r\n      </ion-footer>\r\n  \r\n  \r\n  ";
      /***/
    },

    /***/
    53190:
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation-update/observation-update.component.html ***!
      \***********************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n            <b>{{ this.Observation }}<br />{{ this.Report }} <br /> </b>\r\n          </ion-title>\r\n        </ion-col>                \r\n        <ion-col> \r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n  <div class=\"content-wrapper\">\r\n    <ion-text color=\"\" class=\"ion-text-center\">\r\n      <h5 class=\"m-0\">\r\n        <b\r\n          ><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n            this.UpdateObservation\r\n          }}</span>\r\n          : {{ reportDate }}</b\r\n        >\r\n      </h5>\r\n    </ion-text>\r\n\r\n    <section *ngIf=\"this.improvement.length\">\r\n      <p class=\"text-success\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.Congratulate\r\n        }}</span\r\n        >:\r\n      </p>\r\n\r\n      <ul *ngIf=\"improvedList.length > 0\">\r\n        <li *ngFor=\"let improved of improvedList | slice: 0:2\">\r\n          {{ improved }}\r\n        </li>\r\n      </ul>\r\n      <ion-text color=\"dark\" class=\"text-italic\">\r\n        <p class=\"fs-12\">\r\n          <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n            this.Note\r\n          }}</span>\r\n          : {{ this.workPreviousObservation }}\r\n        </p>\r\n      </ion-text>\r\n      <p class=\"text-danger\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n          {{ this.encourage }}</span\r\n        >:\r\n      </p>\r\n      <ul>\r\n        <li *ngFor=\"let needimprove of needimproveList | slice: 0:2\">\r\n          {{ needimprove }}\r\n        </li>\r\n      </ul>      \r\n    </section>\r\n\r\n    <section *ngIf=\"!this.improvement.length\">\r\n      <p\r\n        class=\"text-success\"\r\n        [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n      >\r\n        {{ this.noData }}\r\n      </p>\r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goToBackPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next submit\" (click)=\"openDiscussModal()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.submitObservation }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    93615:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/observation/observation.component.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">\r\n            <b>{{ this.Observation }}<br/>{{ this.Report }}  </b>\r\n          </ion-title>\r\n        </ion-col>              \r\n        <ion-col> \r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <ion-button  (click)=\"shareImage()\">\r\n    <ion-label style=\"color:#fff\"\r\n      >{{this.shareonwhatsapp}}\r\n    </ion-label>\r\n    <ion-icon color =\"light\" name=\"share\"></ion-icon>\r\n\r\n  </ion-button>  \r\n  <div  id=\"PrintObservation\"  style=\"max-width: 600px;margin: auto;padding: 10px;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;\">\r\n\r\n    <div color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"fs-12\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.discussReport\r\n        }}</span\r\n        ><br /><b>\r\n          {{ teacherDetails?.teacher_name }} [{{\r\n            teacherDetails?.teacher_id\r\n          }}]\r\n        </b>\r\n      </p>\r\n    </div>\r\n\r\n    <div color=\"dark\" class=\"\">\r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.observedDate}}</span>\r\n        :<b> {{ this.date }}</b>\r\n      </p>\r\n\r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">Observed By</span>\r\n        :<b> {{ this.observer_name }}, {{ this.designation }}</b>\r\n      </p>\r\n      \r\n      <p style=\"margin-bottom:2px\" *ngIf=\"schoolDetails?.schoolName\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.schoolObserved\r\n        }}</span>\r\n        : <b>{{ schoolDetails?.schoolName }} {{ schoolDetails?.eduDistName }}</b>\r\n      </p>\r\n\r\n      <p style=\"margin-bottom:2px\" *ngIf=\"schoolDetails?.school_name\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.schoolObserved\r\n        }}</span>\r\n        : <b>{{ schoolDetails?.school_name }} </b>\r\n      </p>      \r\n      <p style=\"margin-bottom:2px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.standardObserved\r\n        }}</span>\r\n        :<b> {{ this.selectedclass }} {{this.selectedSection}}</b>\r\n      </p>\r\n\r\n      <p *ngIf=\"this.showdata==true\" style=\"margin-bottom:10px\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.studentTested\r\n        }}</span>\r\n        : <br />\r\n        <b> {{ chapterDetail }} </b>\r\n      </p>\r\n    </div>\r\n\r\n    <div color=\"dark\">\r\n      <h5\r\n        class=\"text-center fs-12\"\r\n        [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n      >\r\n        <b>{{ this.TodayReport }}</b>\r\n      </h5>\r\n    </div>\r\n\r\n    <section>\r\n      <h5>\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.areastrength\r\n        }}</span>\r\n        :\r\n      </h5>\r\n      <ul class=\"my-nav-1\">\r\n        <li *ngFor=\"let strength of _areas.aos | slice: 0:5\">\r\n          <span *ngIf=\"strength.action_item_description && strength?.action_item_description != '' && this.languageType=='en'\">\r\n            {{ strength?.action_item_description }}\r\n         </span>\r\n         <span *ngIf=\"strength.action_item_description_tamil && strength?.action_item_description_tamil != '' && this.languageType=='ta'\">\r\n          {{ strength?.action_item_description_tamil }}\r\n       </span>\r\n        </li>\r\n      </ul>\r\n      <h5>\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.areaImprovement\r\n        }}</span>\r\n        :\r\n      </h5>\r\n      <ul class=\"my-nav-2\">\r\n        <li *ngFor=\"let week of _areas.aod | slice: 0:5\">\r\n          <span *ngIf=\"week.action_item_description && week?.action_item_description != ''&& this.languageType=='en'\">\r\n            {{ week?.action_item_description }}\r\n          </span>\r\n          <span *ngIf=\"week.action_item_description_tamil && week?.action_item_description_tamil != ''&& this.languageType=='ta'\">\r\n            {{ week?.action_item_description_tamil }}\r\n          </span>\r\n        </li>\r\n      </ul>\r\n      \r\n      <h5 *ngIf=\"scannedStudentList.length>0 && this.showdata==true\">\r\n        <span  [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\" >{{\r\n          this.assessmentResults\r\n        }}</span\r\n        >:\r\n      </h5>\r\n      <div *ngIf=\"scannedStudentList.length>0\" style=\"margin: 5px;\">\r\n        <!-- <div *ngFor=\"let student of scannedStudentList\" style=\"display: flex\">\r\n          <p >{{student?.name}}</p>\r\n          <p>&nbsp;:&nbsp;</p>\r\n          <p *ngIf=\"student?.CorrectAns\" style=\"font-weight: bold;\">{{ student?.CorrectAns.length }}/{{ student?.questionsAns.length  }}</p>\r\n          <p *ngIf=\"!student?.CorrectAns\" style=\"font-weight: bold;color:#ff0000\"> {{ student?.selectedReasonData }}</p>\r\n        </div> -->\r\n\r\n        <ion-grid>\r\n   \r\n          <ion-row style=\"background-color:#8B67B3;font-size: 12px;\">\r\n            <ion-col style=\"border: 1px solid #000;width:20%\">\r\n              <ion-text style=\"color:#fff;text-align:center\">\r\n                Student Name\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000;width:20%\" *ngIf=\"scannedStudentList[0].CorrectAns\">\r\n              <ion-text style=\"color:#fff;text-align:center\">\r\n                Score / Reason\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000;width:20%\" *ngIf=\"!scannedStudentList[0].CorrectAns\">\r\n              <ion-text style=\"color:#fff;text-align:center\">\r\n                Score / Reason\r\n              </ion-text>\r\n            </ion-col>                \r\n          </ion-row>\r\n\r\n          <ion-row *ngFor=\"let student of scannedStudentList; let i = index\" style=\"font-size: 12px;\">\r\n            <ion-col style=\"border: 1px solid #000\">\r\n              <ion-text>\r\n                <b>{{student?.name}}</b>\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000\" *ngIf=\"student?.CorrectAns\">\r\n              <ion-text>\r\n                <b>{{ student?.CorrectAns.length }}/{{ student?.questionsAns.length  }}</b>\r\n              </ion-text>\r\n            </ion-col>\r\n            <ion-col style=\"border: 1px solid #000\" *ngIf=\"!student?.CorrectAns\">\r\n              <b style=\"color: #ff0000;\">{{ student?.selectedReasonData }}</b>\r\n            </ion-col>                 \r\n          </ion-row>      \r\n        </ion-grid>\r\n\r\n\r\n      </div>\r\n      <!-- <ion-grid *ngIf=\"scannedStudentList.length>0\" style=\"background-color: #fff;border-radius: 8px;\">\r\n        <ion-card style=\"border-radius: 8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n            <ion-card-title >\r\n              <ion-row lines=\"none\" justify-content-end style=\"margin:15px\">\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                   Name\r\n                </ion-col>\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                  Subject\r\n                </ion-col>\r\n                <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                  Score\r\n                </ion-col>                \r\n              </ion-row>   \r\n            </ion-card-title>                                    \r\n        </ion-card>   \r\n        <ion-card *ngFor=\"let student of scannedStudentList\" style=\"border-radius: 8px;background-color: #fff;color:#000;\" >          \r\n          <ion-card-content >\r\n            <ion-row  lines=\"none\" justify-content-end>\r\n              <ion-col padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.name }}\r\n              </ion-col>\r\n              <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                {{ classDetails?.subjectInfo.subject }}\r\n              </ion-col>                \r\n              <ion-col *ngIf=\"student.CorrectAns\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.CorrectAns.length }}/{{ student?.questionsAns.length  }}\r\n              </ion-col>\r\n              <ion-col *ngIf=\"!student.CorrectAns\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.selectedReasonData }} \r\n                </ion-col>                     \r\n            </ion-row>   \r\n          </ion-card-content >                                 \r\n      </ion-card>                \r\n      </ion-grid>   -->\r\n\r\n      <h5 *ngIf=\"graStudentList.length>0\" style=\"padding-top:10px\">\r\n        <span  [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\" >GRA Assessment result</span\r\n        >:\r\n      </h5>  \r\n      <div *ngIf=\"graStudentList.length>0\" style=\"margin: 5px;\">\r\n        <div *ngFor=\"let student of graStudentList\" style=\"display: flex\">\r\n          <p >{{student?.name}}</p>\r\n          <p>&nbsp;:&nbsp;</p>\r\n          <p *ngIf=\"student?.correct_words\" style=\"font-weight: bold;\">{{ student?.correct_words }}/{{ student?.book_total_words }}</p>\r\n          <p *ngIf=\"!student?.correct_words\" style=\"font-weight: bold;color:#ff0000\"> {{ student?.selectedReason }}</p>\r\n        </div>\r\n      </div>         \r\n     <!-- <ion-grid *ngIf=\"graStudentList.length>0\" style=\"background-color: #fff;border-radius: 8px;\">\r\n        <ion-card style=\"border-radius:8px;background-color: #e6deed;color:#000;border:1px solid #8B67B3\" >          \r\n            <ion-card-title >\r\n              <ion-row lines=\"none\" justify-content-end style=\"margin:15px\">\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                   Name\r\n                </ion-col>\r\n                <ion-col padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                  Subject\r\n                </ion-col>\r\n                <ion-col align-self-center padding style=\"font-size:16px;font-weight: bold\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                  Score\r\n                </ion-col>                \r\n              </ion-row>   \r\n            </ion-card-title>                                    \r\n        </ion-card>   \r\n        <ion-card *ngFor=\"let student of graStudentList\" style=\"border-radius: 10px;background-color: #fff;color:#000;\" >          \r\n          <ion-card-content >\r\n            <ion-row  lines=\"none\" justify-content-end>\r\n              <ion-col padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.name }}\r\n              </ion-col>\r\n              <ion-col align-self-center padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\">\r\n                {{ classDetails?.subjectInfo.subject }}\r\n              </ion-col>                \r\n              <ion-col *ngIf=\"student.correct_words\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                {{ student?.correct_words }}/{{ student?.book_total_words }}\r\n              </ion-col>\r\n              <ion-col *ngIf=\"!student.correct_words\" padding style=\"font-size:14px;font-weight: 400\" size-xs=\"4\" size-sm=\"4\" size-md=\"3\" size-lg=\"1\" align-self-stretch>\r\n                         {{student?.selectedReason}} \r\n                </ion-col>                     \r\n            </ion-row>   \r\n          </ion-card-content >                                 \r\n      </ion-card>                \r\n      </ion-grid>   -->\r\n\r\n      <p class=\"mb-0\" *ngIf=\"this.remarks\">\r\n        <span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"><b>Observer Remarks</b></span\r\n        >: {{ this.remarks }}\r\n      </p>        \r\n      \r\n    </section>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer style=\"height: 50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"goBack()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToNextPage()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-16': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.save }}</ion-label\r\n        >\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_observation_observation_module_ts-es5.js.map