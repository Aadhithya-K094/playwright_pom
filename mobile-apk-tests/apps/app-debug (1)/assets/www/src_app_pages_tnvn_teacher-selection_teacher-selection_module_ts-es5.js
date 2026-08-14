(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_teacher-selection_teacher-selection_module_ts"], {
    /***/
    12872:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/tnvn/teacher-selection/teacher-selection.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeacherSelectionPageModule": function TeacherSelectionPageModule() {
          return (
            /* binding */
            _TeacherSelectionPageModule
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


      var _teacher_selection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./teacher-selection.page */
      75984);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var routes = [{
        path: '',
        component: _teacher_selection_page__WEBPACK_IMPORTED_MODULE_0__.TeacherSelectionPage
      }];

      var _TeacherSelectionPageModule = /*#__PURE__*/_createClass(function TeacherSelectionPageModule() {
        _classCallCheck(this, TeacherSelectionPageModule);
      });

      _TeacherSelectionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_teacher_selection_page__WEBPACK_IMPORTED_MODULE_0__.TeacherSelectionPage],
        entryComponents: []
      })], _TeacherSelectionPageModule);
      /***/
    },

    /***/
    75984:
    /*!************************************************************************!*\
      !*** ./src/app/pages/tnvn/teacher-selection/teacher-selection.page.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeacherSelectionPage": function TeacherSelectionPage() {
          return (
            /* binding */
            _TeacherSelectionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_teacher_selection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./teacher-selection.page.html */
      66468);
      /* harmony import */


      var _teacher_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./teacher-selection.page.scss */
      20178);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/classroommodal/classroommodal.component */
      71414);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/emimodal/emimodal.component */
      79615);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/post.service */
      62538);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);

      var _TeacherSelectionPage = /*#__PURE__*/function () {
        function TeacherSelectionPage(loading, modalController, _router, _apiService, _alertService, _postService, activatedRoute, ionicStore, _translate) {
          var _this = this;

          _classCallCheck(this, TeacherSelectionPage);

          this.loading = loading;
          this.modalController = modalController;
          this._router = _router;
          this._apiService = _apiService;
          this._alertService = _alertService;
          this._postService = _postService;
          this.activatedRoute = activatedRoute;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.showDropdown = false;
          this.lname = "";
          this.changedValue = "";
          this.teacherReasons = [];
          this.isChanged = false;
          this.btnDisabled = true;

          this.getSchoolTeacherDetail = function (schoolId) {
            var records = {
              teacher: _this.masterApiResponse.teacher_details,
              reasons: _this.masterApiResponse.teacher_reasons
            };
            var totalRecords = records;
            _this.teacherReasons = records.reasons;
            _this.teacherReasons = _this.filterListByLang(_this.teacherReasons);
            localStorage.setItem("teacherlength", _this.masterApiResponse.teacher_details.length);
            _this.teacherDetails = _this.masterApiResponse.teacher_details[Math.floor(Math.random() * _this.masterApiResponse.teacher_details.length)];
            _this.teacher_id = _this.teacherDetails.teacher_emisid;
            localStorage.setItem("teacherInfo", JSON.stringify(_this.teacherDetails));
            var apiData = {
              pageNo: "5",
              pageName: "teacherSeleciton",
              apiResponse: {
                records: totalRecords
              },
              pageDetails: {
                teacherDetails: _this.teacherDetails,
                teacher_id: _this.teacher_id
              },
              tempInfo: {
                showDropdown: false
              }
            };
            _this.storeDetail.pages.pageData[4] = apiData;

            _this.ionicStore.setStoreData(_this.storeDetail);
          };

          this.addData = function (status) {
            _this.storeDetail.pages.pageData[4].tempInfo.showDropdown = status;

            _this.ionicStore.setStoreData(_this.storeDetail);

            _this.btnDisabled = false;
          };

          this.goToClassroom = function () {
            var teacherReason;

            if (!_this.regularTeacher) {
              teacherReason = {
                reason: _this.selectedReason,
                description: "Reason for not observing teacher"
              };
            }

            var correctedDetails = {
              changedValue: _this.changedValue,
              isChanged: _this.isChanged,
              regularTeacher: _this.regularTeacher
            };
            _this.storeDetail.pages.pageData[4]["correctedDetails"] = correctedDetails;
            _this.storeDetail.pages.pageData[4].pageDetails.teacherDetails.teacher_emisid = _this.teacher_id;
            _this.storeDetail.pages.currentProgress = _this.progressValue;

            _this.ionicStore.setStoreData(_this.storeDetail);

            if (_this.regularTeacher != undefined && _this.regularTeacher) {
              if (!_this.isChanged && _this.changedValue == "") {
                _this._alertService.showAlert("Please check any");
              } else {
                _this._router.navigate(["/tnvntabs/page-route/classroom"]);
              }
            } else {
              if (_this.selectedReason == undefined) {
                _this._alertService.showAlert("Please Select Reason");
              } else {
                _this._router.navigate(["/tnvntabs/page-route/classroom"]);
              }
            }
          };
        }

        return _createClass(TeacherSelectionPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.regularTeacher = true;
            this.checkedValue = true;
            this.loading.present();
            this.ngOnInit();
            this.loading.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    this.progressValue = Math.round((5 - 2) / 12 * 100);
                    this.appLanguage();
                    this.loading.present();
                    _context.n = 1;
                    return this.ionicStore.getOffStorage().then(function (response) {
                      _this2.masterApiResponse = response;

                      _this2.ionicStore.getStoreData().then(function (response) {
                        _this2.storeDetail = response;

                        _this2.loading.dismiss();

                        _this2.storeDetail.pages.currentPage = "teacherSeleciton";

                        _this2.ionicStore.setStoreData(_this2.storeDetail);

                        _this2.schoolInfo = localStorage.getItem("schoolInfo");
                        _this2.schoolInfo = JSON.parse(_this2.schoolInfo);

                        if (_this2.storeDetail.pages.pageData[4] == undefined) {
                          _this2.getSchoolTeacherDetail(_this2.schoolInfo.schoolId);
                        } else {
                          var apiResponse = _this2.storeDetail.pages.pageData[4].apiResponse.records;
                          _this2.teacherReasons = apiResponse.reasons;
                          _this2.teacherReasons = _this2.filterListByLang(_this2.teacherReasons);

                          if (_this2.storeDetail.pages.pageData[4].pageDetails != undefined) {
                            _this2.teacherDetails = _this2.storeDetail.pages.pageData[4].pageDetails.teacherDetails;
                            _this2.teacher_id = _this2.storeDetail.pages.pageData[4].pageDetails.teacherDetails.teacher_emisid;
                            _this2.showDropdown = _this2.storeDetail.pages.pageData[4].tempInfo.showDropdown;

                            if (_this2.storeDetail.pages.pageData[4].pageDetails.reasonDetails != undefined) {
                              _this2.selectedReason = _this2.storeDetail.pages.pageData[4].pageDetails.reasonDetails.reason;
                            }

                            if (_this2.showDropdown) {
                              _this2.btnDisabled = false;
                            }
                          }

                          if (_this2.storeDetail.pages.pageData[4].correctedDetails != undefined) {
                            _this2.changedValue = _this2.storeDetail.pages.pageData[4].correctedDetails.changedValue;
                            _this2.isChanged = _this2.storeDetail.pages.pageData[4].correctedDetails.isChanged;
                            _this2.regularTeacher = _this2.storeDetail.pages.pageData[4].correctedDetails.regularTeacher;
                            _this2.checkedValue = _this2.regularTeacher ? "true" : "false";
                          }
                        }
                      });
                    });

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
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

            if (this.storeDetail) {
              this.teacherReasons = this.filterListByLang(this.storeDetail.pages.pageData[4].apiResponse.records.reasons);
            }

            this._translate.get("teacher").subscribe(function (res) {
              _this4.teacher = res;
            });

            this._translate.get("teacherEmisId").subscribe(function (res) {
              _this4.teacherEmisId = res;
            });

            this._translate.get("IsCorrect").subscribe(function (res) {
              _this4.IsCorrect = res;
            });

            this._translate.get("Selection").subscribe(function (res) {
              _this4.Selection = res;
            });

            this._translate.get("takeAttendance").subscribe(function (res) {
              _this4.takeAttendance = res;
            });

            this._translate.get("doIt").subscribe(function (res) {
              _this4.doIt = res;
            });

            this._translate.get("todayObserving").subscribe(function (res) {
              _this4.todayObserving = res;
            });

            this._translate.get("proceedObservation").subscribe(function (res) {
              _this4.proceedObservation = res;
            });

            this._translate.get("yes").subscribe(function (res) {
              _this4.yes = res;
            });

            this._translate.get("no").subscribe(function (res) {
              _this4.no = res;
            });

            this._translate.get("Note").subscribe(function (res) {
              _this4.Note = res;
            });

            this._translate.get("noneAbove").subscribe(function (res) {
              _this4.noneAbove = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this4.back = res;
            });

            this._translate.get("start").subscribe(function (res) {
              _this4.start = res;
            });

            this._translate.get("giveReason").subscribe(function (res) {
              _this4.giveReason = res;
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
          key: "mySelectHandler",
          value: function mySelectHandler(event) {
            this.lname = event.replace(/\s/g, "");

            if (this.lname == "Multigrade") {
              this.presentModal();
            }
          }
        }, {
          key: "mySelectReason",
          value: function mySelectReason(event) {
            var _this5 = this;

            this.selectedReason = event.target.value;
            this.masterApiResponse.teacher_details = this.masterApiResponse.teacher_details.filter(function (data) {
              if (data.teacher_emisid != _this5.teacher_id) {
                return data;
              }
            });
            this.getSchoolTeacherDetail(this.schoolInfo.schoolId);
            this.regularTeacher = this.NewBoolean;
            this.checkedValue = this.regularTeacher;
            var teacherReason = {
              reason: this.selectedReason,
              description: "Reason for not observing teacher"
            };
            this.storeDetail.pages.pageData[4].pageDetails["reasonDetails"] = teacherReason;
            this.selectedReason = undefined;
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var modal;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.modalController.create({
                      component: src_app_components_classroommodal_classroommodal_component__WEBPACK_IMPORTED_MODULE_2__.ClassroommodalComponent,
                      cssClass: " my-custom-modal-classroom",
                      backdropDismiss: false
                    });

                  case 1:
                    modal = _context2.v;
                    _context2.n = 2;
                    return modal.present();

                  case 2:
                    return _context2.a(2, _context2.v);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "proceedCheck",
          value: function proceedCheck(changedValue) {
            this.changedValue = changedValue;
            this.isChanged = false;
            this.teacher_id = this.storeDetail.pages.pageData[4].pageDetails.teacherDetails.teacher_emisid;
          }
        }, {
          key: "presentModald",
          value: function presentModald(listedValue, type, correction, showCategory) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this6 = this;

              var modal;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_3__.EmimodalComponent,
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
                    modal = _context3.v;
                    modal.onDidDismiss().then(function (response) {
                      if (response.data != "Cancel") {
                        _this6.teacher_id = response.data;
                        _this6.changedValue = response.data;
                        _this6.isChanged = true;
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
        }, {
          key: "backToEmiVerify",
          value: function backToEmiVerify() {
            if (this.storeDetail.pages.pageData[3]) {
              this._router.navigate(["/tnvntabs/page-route/emiverify", this.schoolInfo.schoolId]);
            } else {
              this._router.navigate(["/tnvntabs/page-route/dashboardc"]);
            }
          }
        }]);
      }();

      _TeacherSelectionPage.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
        }, {
          type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_7__.PostService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_8__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
        }];
      };

      _TeacherSelectionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: "app-teacher-selection",
        template: _raw_loader_teacher_selection_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_teacher_selection_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TeacherSelectionPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this7 = this;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.isLoading = true;
                    _context4.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this7.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context4.a(2, _context4.v);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this8 = this;

              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    this.isLoading = true;
                    _context5.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this8.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context5.a(2, _context5.v);
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    this.isLoading = false;
                    _context6.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context6.a(2, _context6.v);
                }
              }, _callee6, this);
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
    20178:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/tnvn/teacher-selection/teacher-selection.page.scss ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLXNlbGVjdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    66468:
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/teacher-selection/teacher-selection.page.html ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"\">\r\n          <ion-title class=\"ion-text-center\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">\r\n            <b>{{this.teacher}}<br>{{this.Selection}}<br>\r\n            </b>\r\n          </ion-title>\r\n        </ion-col>\r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n  <div class=\"content-wrapper\">\r\n\r\n    <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n      <p class=\"color-dgrey\"> {{schoolInfo?.schoolName}} </p>\r\n      <p class=\"color-dgrey\"><b><span\r\n            [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.todayObserving}}</span><br>\r\n          {{teacherDetails?.teacher_name}} [{{teacherDetails?.teacher_emisid}}]</b></p>\r\n\r\n    </ion-text>\r\n\r\n\r\n    <ion-list lines=\"none\">\r\n      <p class=\"text-center mb-0\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.proceedObservation}}</p>\r\n      <ion-radio-group [(ngModel)]=\"checkedValue\">\r\n        <div class=\"radio-toggle\">\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"yes\"  (click)=\"addData(true);regularTeacher=true;showDropdown=true\">\r\n            </ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{yes}}\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"no\" \r\n              (click)=\"addData(false);regularTeacher=false;showDropdown=true\"></ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{no}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>\r\n\r\n    <ion-list *ngIf=\"checkedValue && regularTeacher && showDropdown\" lines=\"none\">\r\n      <p class=\"text-center mb-0\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{teacherEmisId}} ({{teacherDetails?.teacher_emisid}}) {{IsCorrect}}</p>\r\n      <ion-radio-group >\r\n        <div class=\"radio-toggle\">\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"true1\" (click)=\"proceedCheck('correct')\">\r\n            </ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{yes}}\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-radio color=\"favorite\" value=\"false1\"\r\n              (click)=\"presentModald(teacherDetails.teacher_emisid,'count','ID','')\"></ion-radio>\r\n            <ion-label class=\"color-dgrey pl-1\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{no}}\r\n            </ion-label>\r\n          </ion-item>\r\n        </div>\r\n\r\n      </ion-radio-group>\r\n    </ion-list>    \r\n\r\n    <ion-list lines=\"none\">\r\n      <div *ngIf=\"regularTeacher && showDropdown\">\r\n        <p class=\"color-lgrey pl-3\" [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.emiIdVerify}}</p>\r\n\r\n        <ion-grid class=\"p-0\">\r\n          <ion-row>          \r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-text color=\"dark\" class=\"text-italic\">\r\n          <p *ngIf=\"this.languageType == 'en'\" class=\"fs-12 p-2\"><span>{{this.Note}}</span>: {{this.doIt}}\r\n            {{this.teacherDetails?.teacher_name}}'s {{this.takeAttendance}}</p>\r\n\r\n          <p *ngIf=\"this.languageType == 'ta'\" class=\"fs-12 p-2\"><span\r\n              [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{this.Note}}</span>:{{this.takeAttendance}}\r\n            {{this.teacherDetails?.teacher_name}} {{this.doIt}}</p>         \r\n        </ion-text>\r\n      </div>\r\n      <div *ngIf=\"regularTeacher ==false && showDropdown\">\r\n        <ion-item>\r\n          <div class=\"select_box\">\r\n            <select [(ngModel)]=\"selectedReason\" (change)=\"mySelectReason($event)\">\r\n              <option [ngValue]=\"selectedReason\" disabled selected>{{this.giveReason}}</option>\r\n              <option *ngFor=\"let reason_info of teacherReasons\" [ngValue]=\"reason_info.reason\">{{reason_info.reason}}\r\n              </option>\r\n              <option value=\"\">{{this.noneAbove}}</option>\r\n            </select>\r\n          </div>\r\n        </ion-item>\r\n        <ion-text color=\"dark\" class=\"text-italic\">\r\n          <p class=\"fs-12 p-2\"><span [ngClass]=\"{'ta-font': this.languageType == 'ta'}\">{{Note}}</span>: Proceed to\r\n            {{teacherDetails.teacher_name}}’s class to take attendance</p>\r\n        </ion-text>\r\n\r\n      </div>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n<ion-footer style=\"height:50px;\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button class=\"btn-back\" (click)=\"backToEmiVerify()\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">{{this.back}}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToClassroom()\" [disabled]=\"btnDisabled\">\r\n        <ion-label [ngClass]=\"{'ta-font': this.languageType == 'ta','fs-16': this.languageType == 'ta'}\">\r\n          {{this.start}}</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>  \r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_teacher-selection_teacher-selection_module_ts-es5.js.map