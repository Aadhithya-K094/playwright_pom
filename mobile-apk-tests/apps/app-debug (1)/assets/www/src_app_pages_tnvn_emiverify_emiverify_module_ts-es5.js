(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_tnvn_emiverify_emiverify_module_ts"], {
    /***/
    32335:
    /*!*************************************************************!*\
      !*** ./src/app/pages/tnvn/emiverify/emiverify.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmiverifyComponent": function EmiverifyComponent() {
          return (
            /* binding */
            _EmiverifyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_emiverify_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./emiverify.component.html */
      73137);
      /* harmony import */


      var _emiverify_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./emiverify.component.scss */
      27436);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/api.service */
      65481);
      /* harmony import */


      var src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/alert.service */
      69564);
      /* harmony import */


      var src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/tnvn/services/post.service */
      62538);
      /* harmony import */


      var src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/ionic-storage/ionic-storage.service */
      84658);
      /* harmony import */


      var src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/emimodal/emimodal.component */
      79615);
      /* harmony import */


      var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/tnvn/services/network.service */
      81508);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! jspdf */
      31769);
      /* harmony import */


      var _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-path/ngx */
      33002);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! dom-to-image */
      83697);
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_14__);

      var _EmiverifyComponent = /*#__PURE__*/function () {
        function EmiverifyComponent(loading, modalController, alertController, _router, _apiService, activatedRoute, _alertService, _postService, androidPermissions, ionicStore, _translate, networkService, filePath, platform, socialSharing, file) {
          var _this = this;

          _classCallCheck(this, EmiverifyComponent);

          this.loading = loading;
          this.modalController = modalController;
          this.alertController = alertController;
          this._router = _router;
          this._apiService = _apiService;
          this.activatedRoute = activatedRoute;
          this._alertService = _alertService;
          this._postService = _postService;
          this.androidPermissions = androidPermissions;
          this.ionicStore = ionicStore;
          this._translate = _translate;
          this.networkService = networkService;
          this.filePath = filePath;
          this.platform = platform;
          this.socialSharing = socialSharing;
          this.file = file;
          this.classList = [];
          this.check = true;
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
          this.totalNumberOfBoys = 0;
          this.totalNumberOfGirls = 0;
          this.totalNoOfStudents = 0;
          this.submitted = false;

          this.shareImage = function () {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var div, table, options, fileName, ROOT_DIRECTORY;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return document.getElementById("PrintEmis");

                  case 1:
                    div = _context.v;
                    table = document.getElementById("container");
                    options = {
                      background: "white",
                      height: div.clientHeight + 50,
                      width: div.clientWidth + 50
                    };
                    dom_to_image__WEBPACK_IMPORTED_MODULE_14___default().toPng(div, options).then(function (dataUrl) {
                      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_11__.jsPDF("p", "mm", "a4");
                      var width = doc.internal.pageSize.getWidth();
                      var height = doc.internal.pageSize.getHeight();
                      doc.addImage(dataUrl, 'PNG', 10, 10, width, height);
                      var pdfOutput = doc.output();
                      var buffer = new ArrayBuffer(pdfOutput.length);
                      var array = new Uint8Array(buffer);

                      for (var i = 0; i < pdfOutput.length; i++) {
                        array[i] = pdfOutput.charCodeAt(i);
                      }

                      _this2.filePath.resolveNativePath('file://').then(function (filePath) {
                        return console.log(filePath);
                      })["catch"](function (err) {
                        return console.log(err);
                      });

                      _this2.file.listDir(_this2.file.externalDataDirectory, '').then(function (folderList) {});

                      var directory = _this2.file.externalDataDirectory;
                      var fileName = "Emisreport.pdf";
                      var options = {
                        replace: true
                      };

                      _this2.file.checkFile(directory, fileName).then(function (success) {
                        _this2.file.writeFile(directory, fileName, buffer, options).then(function (success) {})["catch"](function (error) {});
                      })["catch"](function (error) {
                        _this2.file.writeFile(directory, fileName, buffer).then(function (success) {})["catch"](function (error) {});
                      });
                    })["catch"](function (error) {});

                    if (this.platform.is('cordova')) {
                      fileName = "Emisreport.pdf";
                      ROOT_DIRECTORY = this.file.externalDataDirectory + fileName;
                      this.socialSharing.share("Message", "Subject", ROOT_DIRECTORY, "").then(function (entries) {})["catch"](function (error) {
                        alert('error ' + JSON.stringify(error));
                      });
                    }

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          };

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
            _this.actualDetails = records;
            var schoolData = {
              schoolId: _this.schoolDetails.school_id,
              schoolName: _this.schoolDetails.school_name,
              distName: _this.schoolDetails.district_name,
              eduDistName: _this.schoolDetails.edu_dist_name,
              blockName: _this.schoolDetails.block_name,
              cateType: _this.schoolDetails.cate_type
            };
            var correctedClass = _this.storeDetail.pages.pageData[2].correctedClass;
            _this.correctedClass = correctedClass;
            var correctedValue = _this.storeDetail.pages.pageData[2].correctedDetails;

            if (Object.keys(correctedValue).length) {
              _this.correctedDistrict = correctedValue.district_name;
              _this.correctedEduDistrict = correctedValue.edu_district_name;
              _this.correctedBlock = correctedValue.block_name;
              _this.correctedZone = correctedValue.nodal_name;
              _this.correctedTotalTeachers = correctedValue.teachers_alloted;
              _this.vacancies = correctedValue.vacancies;
              _this.correctedTotalStudents = correctedValue.total_students;
              _this.correctedClass = correctedValue.classdata;
              _this.totalNumberOfBoys = Number(correctedValue.totalNumberOfBoys);
              _this.totalNumberOfGirls = Number(correctedValue.totalNumberOfGirls);
              _this.totalNoOfStudents = Number(correctedValue.totalNoOfStudents);
              _this.teacherSanctionedValue = Number(correctedValue.teacherSanctioned);
              _this.teacherSanctionedPostValue = Number(correctedValue.teacherSanctionedPost);
              _this.teachersAvailableValue = Number(correctedValue.teachersAvailable);
              _this.teachersDeputationSameSchoolValue = Number(correctedValue.teachersDeputationSameSchool);
              _this.teachersDeputationOtherSchoolValue = Number(correctedValue.teachersDeputationOtherSchool);
              _this.teachersOnLongLeaveValue = Number(correctedValue.teachersOnLongLeave);
            }

            if (_this.correctedClass.length > 0) {
              _this.correctedClass.forEach(function (data) {
                data.correctedboys = Number(data.correctedboys);
                data.correctedgirls = Number(data.correctedgirls);
                data.TotalStudents = Number(data.TotalStudents);
                data.boys = Number(data.boys);
                data.girls = Number(data.girls);
              });
            }

            _this.classList = _this.schoolDetails.class_info.filter(function (data, index) {
              return data.total != 0;
            });

            _this.addCorrectedVariable();

            _this.loading.dismiss();

            localStorage.setItem("schoolInfo", JSON.stringify(schoolData));
            var apiData = {
              pageNo: "4",
              pageName: "emiVerify",
              apiResponse: {
                records: _this.schoolDetails
              },
              pageDetails: {},
              correctedDetails: {},
              correctedClass: _this.correctedClass
            };
            _this.storeDetail.pages.pageData[3] = apiData;

            _this.ionicStore.setStoreData(_this.storeDetail);

            _this.loading.dismiss();
          };
        }

        return _createClass(EmiverifyComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this3 = this;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) {
                      if (result.hasPermission == false) {
                        _this3.androidPermissions.requestPermission(_this3.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
                      }
                    });
                    this.loading.present();
                    this.appLanguage();
                    this.progressValue = 78;
                    _context3.n = 1;
                    return this.ionicStore.getOffStorage().then(function (response) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
                        var _this4 = this;

                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              if (response) {
                                this.masterApiResponse = response;
                              }

                              this.inspectionType = localStorage.getItem("veracity_type");
                              _context2.n = 1;
                              return this.ionicStore.getStoreData().then(function (response) {
                                _this4.storeDetail = response;
                                _this4.storeDetail.pages.currentPage = "emiVerfiy";

                                _this4.ionicStore.setStoreData(_this4.storeDetail);

                                if (_this4.storeDetail.pages.pageData[3] == undefined || _this4.storeDetail.pages.pageData[3] == null) {
                                  _this4.getSchoolDetails(_this4.storeDetail.pages.pageData[0].pageDetails.school_id);
                                } else {
                                  _this4.schoolDetails = _this4.storeDetail.pages.pageData[2].apiResponse.records;
                                  _this4.actualDetails = _this4.storeDetail.pages.pageData[2].apiResponse.records;
                                  _this4.classList = _this4.schoolDetails.class_info.filter(function (data, index) {
                                    return data.total != 0;
                                  });
                                  _this4.correctedClass = _this4.storeDetail.pages.pageData[2].correctedClass;

                                  _this4.loading.dismiss();

                                  var correctedValue = _this4.storeDetail.pages.pageData[2].correctedDetails;

                                  if (Object.keys(correctedValue).length) {
                                    _this4.correctedDistrict = correctedValue.district_name;
                                    _this4.correctedEduDistrict = correctedValue.edu_district_name;
                                    _this4.correctedBlock = correctedValue.block_name;
                                    _this4.correctedZone = correctedValue.nodal_name;
                                    _this4.correctedTotalTeachers = correctedValue.teachers_alloted;
                                    _this4.vacancies = correctedValue.vacancies;
                                    _this4.correctedTotalStudents = correctedValue.total_students;
                                    _this4.totalNumberOfBoys = Number(correctedValue.totalNumberOfBoys);
                                    _this4.totalNumberOfGirls = Number(correctedValue.totalNumberOfGirls);
                                    _this4.totalNoOfStudents = Number(correctedValue.totalNoOfStudents);
                                    _this4.teacherSanctionedValue = Number(correctedValue.teacherSanctioned);
                                    _this4.teacherSanctionedPostValue = Number(correctedValue.teacherSanctionedPost);
                                    _this4.teachersAvailableValue = Number(correctedValue.teachersAvailable);
                                    _this4.teachersDeputationSameSchoolValue = Number(correctedValue.teachersDeputationSameSchool);
                                    _this4.teachersDeputationOtherSchoolValue = Number(correctedValue.teachersDeputationOtherSchool);
                                    _this4.teachersOnLongLeaveValue = Number(correctedValue.teachersOnLongLeave);

                                    if (_this4.correctedClass.length > 0) {
                                      _this4.correctedClass.forEach(function (data) {
                                        data.correctedboys = Number(data.correctedboys);
                                        data.correctedgirls = Number(data.correctedgirls);
                                        data.TotalStudents = Number(data.TotalStudents);
                                        data.boys = Number(data.boys);
                                        data.girls = Number(data.girls);
                                      });
                                    }

                                    _this4.listedZone = _this4.correctedZone != "" ? false : true, _this4.listedBlock = _this4.correctedBlock != "" ? false : true, _this4.listedEduDistrict = _this4.correctedEduDistrict != "" ? false : true, _this4.listedDistrict = _this4.correctedDistrict != "" ? false : true, _this4.listedTotalStudents = _this4.correctedTotalStudents != "" ? false : true, _this4.listedTotalTeachers = _this4.correctedTotalTeachers != "" ? false : true;
                                  }
                                }
                              });

                            case 1:
                              return _context2.a(2);
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
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

            this._translate.get("EmisReport").subscribe(function (res) {
              _this6.Report = res;
            });

            this._translate.get("school").subscribe(function (res) {
              _this6.school = res;
            });

            this._translate.get("register").subscribe(function (res) {
              _this6.register = res;
            });

            this._translate.get("schoolDetails").subscribe(function (res) {
              _this6.schoolDetail = res;
            });

            this._translate.get("studentEnroll").subscribe(function (res) {
              _this6.studentEnroll = res;
            });

            this._translate.get("teacherPosition").subscribe(function (res) {
              _this6.teacherPosition = res;
            });

            this._translate.get("validate").subscribe(function (res) {
              _this6.validate = res;
            });

            this._translate.get("emisNote").subscribe(function (res) {
              _this6.emisNote = res;
            });

            this._translate.get("primary").subscribe(function (res) {
              _this6.primary = res;
            });

            this._translate.get("emisReportNote").subscribe(function (res) {
              _this6.emisReportNote = res;
            });

            this._translate.get("secondary").subscribe(function (res) {
              _this6.secondary = res;
            });

            this._translate.get("middle").subscribe(function (res) {
              _this6.middle = res;
            });

            this._translate.get("district").subscribe(function (res) {
              _this6.district = res;
            });

            this._translate.get("educationalDistrict").subscribe(function (res) {
              _this6.educationalDistrict = res;
            });

            this._translate.get("block").subscribe(function (res) {
              _this6.block = res;
            });

            this._translate.get("zone").subscribe(function (res) {
              _this6.zone = res;
            });

            this._translate.get("shareonwhatsapp").subscribe(function (res) {
              _this6.shareonwhatsapp = res;
            });

            this._translate.get("giveCheck").subscribe(function (res) {
              _this6.giveCheck = res;
            });

            this._translate.get("teachersTotal").subscribe(function (res) {
              _this6.teachersTotal = res;
            });

            this._translate.get("studentsTotal").subscribe(function (res) {
              _this6.studentsTotal = res;
            });

            this._translate.get("boysTotal").subscribe(function (res) {
              _this6.boysTotal = res;
            });

            this._translate.get("girlsTotal").subscribe(function (res) {
              _this6.girlsTotal = res;
            });

            this._translate.get("class").subscribe(function (res) {
              _this6["class"] = res;
            });

            this._translate.get("back").subscribe(function (res) {
              _this6.back = res;
            });

            this._translate.get("save").subscribe(function (res) {
              _this6.save = res;
            });

            this._translate.get("teacherSanctioned").subscribe(function (res) {
              _this6.teacherSanctioned = res;
            });

            this._translate.get("teacherSanctionedPost").subscribe(function (res) {
              _this6.teacherSanctionedPost = res;
            });

            this._translate.get("teachersAvailable").subscribe(function (res) {
              _this6.teachersAvailable = res;
            });

            this._translate.get("teachersDeputationSameSchool").subscribe(function (res) {
              _this6.teachersDeputationSameSchool = res;
            });

            this._translate.get("teachersDeputationOtherSchool").subscribe(function (res) {
              _this6.teachersDeputationOtherSchool = res;
            });

            this._translate.get("teachersOnLongLeave").subscribe(function (res) {
              _this6.teachersOnLongLeave = res;
            });

            this._translate.get("next").subscribe(function (res) {
              _this6.next = res;
            });

            this._translate.get("vacanciesTotal").subscribe(function (res) {
              _this6.vacanciesTotal = res;
            });

            this._translate.get("teacherSanctionedRequired").subscribe(function (res) {
              _this6.teacherSanctionedRequired = res;
            });

            this._translate.get("districtNameRequired").subscribe(function (res) {
              _this6.districtNameRequired = res;
            });

            this._translate.get("eduDistrictNameRequired").subscribe(function (res) {
              _this6.eduDistrictNameRequired = res;
            });

            this._translate.get("blockNameRequired").subscribe(function (res) {
              _this6.blockNameRequired = res;
            });

            this._translate.get("nodalNameRequired").subscribe(function (res) {
              _this6.nodalNameRequired = res;
            });

            this._translate.get("totalStudentsRequired").subscribe(function (res) {
              _this6.totalStudentsRequired = res;
            });

            this._translate.get("teachersAvailableRequired").subscribe(function (res) {
              _this6.teachersAvailableRequired = res;
            });

            this._translate.get("teachersDeputationSameSchoolRequired").subscribe(function (res) {
              _this6.teachersDeputationSameSchoolRequired = res;
            });

            this._translate.get("teachersDeputationOtherSchoolRequired").subscribe(function (res) {
              _this6.teachersDeputationOtherSchoolRequired = res;
            });

            this._translate.get("teachersOnLongLeaveRequired").subscribe(function (res) {
              _this6.teachersOnLongLeaveRequired = res;
            });
          }
        }, {
          key: "presentModal",
          value: function presentModal(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
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
          key: "getDistrictList",
          value: function getDistrictList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              var _this7 = this;

              var selectedGender, selectedIndex, modal;
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    this.schoolDetails.districts.forEach(function (data) {
                      if (data.district_name != _this7.presentValue) {
                        _this7.actualValueList.push({
                          id: data.id,
                          item: data.district_name
                        });
                      }
                    });
                    _context5.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
                        _this7.schoolDetails.dist_id = response.data.id;
                        _this7.correctedDistrict = response.data.item;
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
          key: "getEducationalDistrictList",
          value: function getEducationalDistrictList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
              var _this8 = this;

              var selectedGender, selectedIndex, districtDetail, temp_eduDistrictList, modal;
              return _regenerator().w(function (_context6) {
                while (1) switch (_context6.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    districtDetail = {
                      district_id: this.schoolDetails.dist_id
                    };
                    temp_eduDistrictList = this.masterApiResponse.obs_info.edu_dist.filter(function (data) {
                      return data.district_id == _this8.schoolDetails.dist_id;
                    });
                    temp_eduDistrictList.forEach(function (data) {
                      if (data.edn_dist_name != _this8.presentValue) {
                        _this8.actualValueList.push({
                          id: data.id,
                          item: data.edn_dist_name
                        });
                      }
                    });
                    _context6.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
                        _this8.schoolDetails.edu_dist_id = response.data.id;
                        _this8.correctedEduDistrict = response.data.item;
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
          key: "getBlocksList",
          value: function getBlocksList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this9 = this;

              var selectedGender, selectedIndex, blockDetail, temp_blockList, modal;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    blockDetail = {
                      edu_dist_id: this.schoolDetails.edu_dist_id
                    };
                    temp_blockList = this.masterApiResponse.obs_info.blocks.filter(function (data) {
                      return data.edu_dist_id == _this9.schoolDetails.edu_dist_id;
                    });
                    temp_blockList.forEach(function (data) {
                      if (data.block_name != _this9.presentValue) {
                        _this9.actualValueList.push({
                          id: data.id,
                          item: data.block_name
                        });
                      }
                    });
                    _context7.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
                        _this9.schoolDetails.block_id = response.data.id;
                        _this9.correctedBlock = response.data.item;
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
          key: "getZoneList",
          value: function getZoneList(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee8() {
              var _this0 = this;

              var selectedGender, selectedIndex, zoneDetail, temp_ZoneList, modal;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    zoneDetail = {
                      block_id: this.schoolDetails.block_id
                    };
                    temp_ZoneList = [];
                    this.masterApiResponse.obs_info.nodals.forEach(function (data) {
                      if (data.edu_dist_id == _this0.schoolDetails.edu_dist_id && data.district_id == _this0.schoolDetails.dist_id && data.block_id == _this0.schoolDetails.block_id) {
                        temp_ZoneList.push(data);
                      }
                    });
                    temp_ZoneList.forEach(function (data, index) {
                      if (data.nodal_name != _this0.presentValue) {
                        _this0.actualValueList.push({
                          id: data.hss_school_id,
                          item: data.hss_school_name
                        });
                      }
                    });
                    _context8.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
                        _this0.schoolDetails.school_id = response.data.id;
                        _this0.correctedZone = response.data.item;
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
          key: "getCountData",
          value: function getCountData(listedValue, type, correction, showCategory) {
            var gender = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
            var index = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee9() {
              var _this1 = this;

              var selectedGender, selectedIndex, modal;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    selectedGender = gender;
                    selectedIndex = index;
                    _context9.n = 1;
                    return this.modalController.create({
                      component: src_app_components_emimodal_emimodal_component__WEBPACK_IMPORTED_MODULE_8__.EmimodalComponent,
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
                        switch (_this1.divisionType) {
                          case "teacher_count":
                            {
                              _this1.correctedTotalTeachers = response.data;
                              break;
                            }

                          case "student_count":
                            {
                              _this1.correctedTotalStudents = response.data;
                              break;
                            }

                          case "count":
                            {
                              if (selectedGender == "girls") {
                                _this1.correctedClass[selectedIndex].girls = response.data.toString();
                                _this1.correctedClass[selectedIndex].showCorrected_Girls = true;
                                _this1.correctedClass[selectedIndex].listetClassGirls = false;
                              } else {
                                _this1.correctedClass[selectedIndex].boys = response.data.toString();
                                _this1.correctedClass[selectedIndex].showCorrected_Boys = true;
                                _this1.correctedClass[selectedIndex].listetClassBoys = false;
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
                    _context9.n = 2;
                    return modal.present();

                  case 2:
                    return _context9.a(2, _context9.v);
                }
              }, _callee9, this);
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
          key: "showAlert",
          value: function showAlert() {
            var alertInfo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee0() {
              var _this10 = this;

              var alert;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.n) {
                  case 0:
                    _context0.n = 1;
                    return this.alertController.create({
                      header: "",
                      message: "There is a mismatch in the student enrollment data entered with the EMIS data.<br>Kindly ask the HM to make the necessary changes",
                      cssClass: "my-custom-class",
                      backdropDismiss: false,
                      buttons: [{
                        text: "ok",
                        handler: function handler() {
                          _this10.goToTeacherSelection();
                        }
                      }]
                    });

                  case 1:
                    alert = _context0.v;
                    _context0.n = 2;
                    return alert.present();

                  case 2:
                    return _context0.a(2);
                }
              }, _callee0, this);
            }));
          }
        }, {
          key: "goToValidate",
          value: function goToValidate() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee1() {
              var status, i;
              return _regenerator().w(function (_context1) {
                while (1) switch (_context1.n) {
                  case 0:
                    status = false;

                    for (i = 0; i < this.correctedClass.length; i++) {
                      if (this.correctedClass[i].correctedboys + this.correctedClass[i].correctedgirls != this.correctedClass[i].boys + this.correctedClass[i].girls) {
                        status = true;
                      }
                    }

                    if (status == true) {
                      this.showAlert(this.emisReportNote);
                    } else {
                      this.goToTeacherSelection();
                    }

                  case 1:
                    return _context1.a(2);
                }
              }, _callee1, this);
            }));
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            this.ionicStore.setStoreData(this.storeDetail); // this._router.navigate(["/tnvntabs/page-route/hodinspection"]); 

            this._router.navigate(["/tnvntabs/page-route/emidata", this.storeDetail.pages.pageData[0].pageDetails.school_id]);
          }
        }, {
          key: "goToTeacherSelection",
          value: function goToTeacherSelection() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee10() {
              return _regenerator().w(function (_context10) {
                while (1) switch (_context10.n) {
                  case 0:
                    // let classList = [];
                    // this.correctedClass.forEach((data, index) => {
                    //   classList.push({
                    //     class: data.class,
                    //     no_of_boys: data.boys,
                    //     no_of_girls: data.girls,
                    //   });
                    // });
                    // let created_on = new Date();
                    // created_on.toISOString();
                    // let pageDetails = {
                    //   nodal_id: this.schoolDetails.school_id,
                    //   nodal_name:
                    //     this.correctedZone != ""
                    //       ? this.correctedZone
                    //       : this.schoolDetails.nodal_name,
                    //   block_id: this.schoolDetails.block_id,
                    //   block_name:
                    //     this.correctedBlock != ""
                    //       ? this.correctedBlock
                    //       : this.schoolDetails.block_name,
                    //   edu_district_id: this.schoolDetails.edu_dist_id,
                    //   edu_district_name:
                    //     this.correctedEduDistrict != ""
                    //       ? this.correctedEduDistrict
                    //       : this.schoolDetails.edu_dist_name,
                    //   district_id: this.schoolDetails.dist_id,
                    //   district_name:
                    //     this.correctedDistrict != ""
                    //       ? this.correctedDistrict
                    //       : this.schoolDetails.district_name,
                    //   created_on: created_on,
                    //   created_by: localStorage.getItem("username"),
                    //   teachers_alloted:
                    //     this.correctedTotalTeachers != ""
                    //       ? this.correctedTotalTeachers
                    //       : this.listedTotalTeachers,
                    //   total_students:
                    //     this.correctedTotalStudents != ""
                    //       ? this.correctedTotalStudents
                    //       : this.listedTotalStudents,
                    //   vacancies: this.vacancies,
                    //   classdata: classList,
                    //   teacherSanctioned: this.teacherSanctionedValue,
                    //   teachersAvailable: this.teachersAvailableValue,
                    //   teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                    //   teachersDeputationOtherSchool: this
                    //     .teachersDeputationOtherSchoolValue,
                    //   teachersOnLongLeave: this.teachersOnLongLeaveValue,
                    // };
                    // let correctedDetails = {
                    //   nodal_id: this.schoolDetails.school_id,
                    //   nodal_name: this.correctedZone,
                    //   block_id: this.schoolDetails.block_id,
                    //   block_name: this.correctedBlock,
                    //   edu_district_id: this.schoolDetails.edu_dist_id,
                    //   edu_district_name: this.correctedEduDistrict,
                    //   district_id: this.schoolDetails.dist_id,
                    //   district_name: this.correctedDistrict,
                    //   created_on: created_on,
                    //   created_by: localStorage.getItem("username"),
                    //   teachers_alloted: this.correctedTotalTeachers,
                    //   total_students: this.correctedTotalStudents,
                    //   vacancies: this.vacancies,
                    //   classdata: classList,
                    //   teacherSanctioned: this.teacherSanctionedValue,
                    //   teachersAvailable: this.teachersAvailableValue,
                    //   teachersDeputationSameSchool: this.teachersDeputationSameSchoolValue,
                    //   teachersDeputationOtherSchool: this
                    //     .teachersDeputationOtherSchoolValue,
                    //   teachersOnLongLeave: this.teachersOnLongLeaveValue,
                    // };        
                    // this.storeDetail.pages.pageData[3].pageDetails = pageDetails;
                    // this.storeDetail.pages.pageData[3].correctedDetails = correctedDetails;
                    // this.storeDetail.pages.pageData[3].correctedClass = this.correctedClass;
                    // this.storeDetail.pages.currentProgress = this.progressValue;
                    // this.ionicStore.setStoreData(this.storeDetail);
                    //   const level = localStorage.getItem("selectedlevel");
                    //   const usertype = localStorage.getItem("usertype");
                    //   const veracity_type = localStorage.getItem("veracity_type");
                    //   const {
                    //     school_id,
                    //     school_name,
                    //     udise_code
                    //   } = this.storeDetail.pages.pageData[0].pageDetails;    
                    //   let emiverfiyInfo;    
                    //   if(level=='1' || veracity_type == 'inspection'){
                    //     if(this.storeDetail.pages.pageData[1].pageFlow!='observation'){
                    //       emiverfiyInfo = this.storeDetail.pages.pageData[3].pageDetails;
                    //     }else{
                    //       let school_info:any = {}
                    //       school_info.created_by = localStorage.getItem("username");    
                    //       school_info.veracity_type = localStorage.getItem("veracity_type");    
                    //       school_info.district_id =  this.masterApiResponse.dist_id;
                    //       school_info.district_name =  this.masterApiResponse.district_name;
                    //       school_info.block_id =  this.masterApiResponse.block_id;
                    //       school_info.block_name =  this.masterApiResponse.block_name;
                    //       school_info.edu_dist_id =  this.masterApiResponse.edu_dist_id;
                    //       school_info.edu_dist_name =  this.masterApiResponse.edu_dist_name;
                    //       school_info.nodal_id =  this.masterApiResponse.nodal_id;
                    //       school_info.nodal_name =  this.masterApiResponse.nodal_name;      
                    //       school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
                    //       school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
                    //       school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
                    //       school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
                    //       school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
                    //       school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
                    //       school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;
                    //       emiverfiyInfo = school_info;
                    //     }
                    //   }
                    //   else{
                    //     let school_info:any = {}
                    //     school_info.created_by = localStorage.getItem("username");    
                    //     school_info.veracity_type = localStorage.getItem("veracity_type");    
                    //     school_info.district_id =  this.masterApiResponse.dist_id;
                    //     school_info.district_name =  this.masterApiResponse.district_name;
                    //     school_info.block_id =  this.masterApiResponse.block_id;
                    //     school_info.block_name =  this.masterApiResponse.block_name;
                    //     school_info.edu_dist_id =  this.masterApiResponse.edu_dist_id;
                    //     school_info.edu_dist_name =  this.masterApiResponse.edu_dist_name;
                    //     school_info.nodal_id =  this.masterApiResponse.nodal_id;
                    //     school_info.nodal_name =  this.masterApiResponse.nodal_name;      
                    //     school_info.teacherSanctioned = this.storeDetail.pages.pageData[3].pageDetails.teacherSanctioned;
                    //     school_info.teachersAvailable = this.storeDetail.pages.pageData[3].pageDetails.teachersAvailable;
                    //     school_info.teachersDeputationOtherSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationOtherSchool;
                    //     school_info.teachersDeputationSameSchool = this.storeDetail.pages.pageData[3].pageDetails.teachersDeputationSameSchool;
                    //     school_info.teachersOnLongLeave = this.storeDetail.pages.pageData[3].pageDetails.teachersOnLongLeave;
                    //     school_info.teachers_alloted = this.storeDetail.pages.pageData[3].pageDetails.teachers_alloted;
                    //     school_info.total_students = this.storeDetail.pages.pageData[3].pageDetails.total_students;      
                    //     emiverfiyInfo = school_info;                  
                    //   }
                    //   const schoolInfo = {
                    //     school_id: school_id,
                    //     school_name: school_name,
                    //     level: level,
                    //     udise_code: udise_code
                    //   };
                    //   let mediumIds: any ;
                    //   let classInfo: any ;
                    //   if(this.storeDetail.pages.pageData[5].pageDetails.selectedClass){
                    //     mediumIds = this.storeDetail.pages.pageData[5].pageDetails.mediumInfo.map(
                    //       (el) => {
                    //         return el.medium_id;
                    //       }
                    //     );    
                    //     classInfo = {
                    //       class: this.storeDetail.pages.pageData[5].pageDetails.selectedClass.class_id,
                    //       medium: mediumIds.toString(),
                    //       class_type: this.storeDetail.pages.pageData[5].pageDetails.classType,
                    //       section: this.storeDetail.pages.pageData[5].pageDetails.section,
                    //       teacher_name: this.storeDetail.pages.pageData[5].pageDetails
                    //         .teacherDetails.teacher_name,
                    //       teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails
                    //         .teacherDetails.teacher_emisid,
                    //     };   
                    //   }
                    //   const basicInfoObj = { ...schoolInfo, ...emiverfiyInfo, ...classInfo };
                    //   const schoolReasons = this.storeDetail.pages.pageData[0].pageDetails
                    //     .schoolsReasons;
                    //     let studentReasons;
                    //    if(this.storeDetail.pages.pageData[9]){
                    //     studentReasons = this.storeDetail.pages.pageData[9].pageDetails
                    //       .studentReasonList;
                    //    } 
                    //    else{
                    //       studentReasons = {}
                    //    }
                    //   let teacher;    
                    //   if (
                    //     this.storeDetail.pages.pageData[5].pageDetails.reasonDetails != undefined
                    //   ) {
                    //     if(this.storeDetail.pages.pageData[5].pageDetails.teacherDetails){
                    //       teacher = {
                    //         teacher_emisid: this.storeDetail.pages.pageData[5].pageDetails
                    //           .teacherDetails.teacher_emisid,
                    //         teacher_name: this.storeDetail.pages.pageData[5].pageDetails
                    //           .teacherDetails.teacher_name,
                    //         reason: this.storeDetail.pages.pageData[5].pageDetails.reasonDetails,
                    //         description: "Reason for not observing teacher",
                    //       };
                    //     }
                    //   }
                    //   const not_verfied = {
                    //     schools: schoolReasons,
                    //     teacher: teacher == undefined ? {} : teacher,
                    //     student: studentReasons,
                    //   };
                    //   let learning_outcome_data;          
                    //   let questiondata = {}
                    //   if(this.storeDetail.pages.pageData[10]){
                    //     questiondata = this.storeDetail.pages.pageData[10].pageDetails
                    //   }
                    //   if(this.storeDetail.pages.pageData[8]?.correctedDetails){
                    //     learning_outcome_data = {
                    //       unit: this.storeDetail.pages.pageData[8].correctedDetails.unitInfo
                    //         .chapter_no,
                    //       learning_outcome: this.storeDetail.pages.pageData[8].correctedDetails
                    //         .unitInfo.learning_outcome,
                    //       question_data: questiondata,
                    //     };
                    //   }
                    //   else{
                    //     learning_outcome_data = {}
                    //   }
                    //   let observation_reportconst = {};
                    //   if (this.storeDetail.pages.pageData[9]) {
                    //     observation_reportconst = {
                    //       strength: this.storeDetail.pages.pageData[9].pageDetails.strength,
                    //       improvement: this.storeDetail.pages.pageData[9].pageDetails.improvement,
                    //     };
                    //   }
                    //   let observation_data;
                    //   if (this.storeDetail.pages.pageData[7]) {
                    //     observation_data = {
                    //       observation_dataInfo: this.storeDetail.pages.pageData[7].apiResponse
                    //         .records.customizeSectionList,
                    //     };
                    //   }
                    //   let finalData = {
                    //     basic_info: basicInfoObj,
                    //     not_verfied: not_verfied,
                    //     attendance_data: this.storeDetail.pages.pageData[6]?.pageDetails.misMatchStudentList,            
                    //     learning_outcome_data: learning_outcome_data,
                    //     observation_data: this.storeDetail.pages.pageData[7]
                    //       ? observation_data.observation_dataInfo
                    //       : {},
                    //     observation_report: this.storeDetail.pages.pageData[7]
                    //       ? observation_reportconst
                    //       : {},
                    //     final_remarks: "Good",
                    //   };
                    //   let final = {
                    //     json: JSON.stringify(finalData),
                    //   };          
                    //   await this.ionicStore.setStoreData(this.storeDetail);
                    //   let connectionStatus = this.networkService.getCurrentNetworkStatus();
                    if (this.storeDetail.pages.pageData[5].pageDetails.selectedClass) {
                      // this._router.navigate(["/tnvntabs/page-route/observation-another-class"]); 
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "emidata_section_status": localStorage.setItem("emidata_section_status", "1")
                        }
                      });
                    } else {
                      // this._router.navigate(["/tnvntabs/page-route/observation/endObservation"]);
                      this._router.navigate(["/tnvntabs/page-route/index"], {
                        queryParams: {
                          "emidata_section_status": localStorage.setItem("emidata_section_status", "1")
                        }
                      });
                    }

                  case 1:
                    return _context10.a(2);
                }
              }, _callee10, this);
            }));
          }
        }]);
      }();

      _EmiverifyComponent.ctorParameters = function () {
        return [{
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
        }, {
          type: src_app_services_tnvn_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
        }, {
          type: src_app_services_tnvn_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: src_app_services_tnvn_services_post_service__WEBPACK_IMPORTED_MODULE_6__.PostService
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_10__.AndroidPermissions
        }, {
          type: src_app_services_tnvn_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_7__.IonicStorageService
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService
        }, {
          type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService
        }, {
          type: _awesome_cordova_plugins_file_path_ngx__WEBPACK_IMPORTED_MODULE_12__.FilePath
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform
        }, {
          type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__.File
        }];
      };

      _EmiverifyComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
        selector: "app-emiverify",
        template: _raw_loader_emiverify_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_emiverify_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EmiverifyComponent);
      /***/
    },

    /***/
    92397:
    /*!**********************************************************!*\
      !*** ./src/app/pages/tnvn/emiverify/emiverify.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmiverifyModule": function EmiverifyModule() {
          return (
            /* binding */
            _EmiverifyModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _emiverify_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./emiverify.component */
      32335);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);

      var routes = [{
        path: '',
        component: _emiverify_component__WEBPACK_IMPORTED_MODULE_0__.EmiverifyComponent
      }];

      var _EmiverifyModule = /*#__PURE__*/_createClass(function EmiverifyModule() {
        _classCallCheck(this, EmiverifyModule);
      });

      _EmiverifyModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
        providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__.SocialSharing, _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File],
        declarations: [_emiverify_component__WEBPACK_IMPORTED_MODULE_0__.EmiverifyComponent],
        exports: [],
        entryComponents: []
      })], _EmiverifyModule);
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
              var _this11 = this;

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
                        if (!_this11.isLoading) {
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
              var _this12 = this;

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
                        if (!_this12.isLoading) {
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
    27436:
    /*!***************************************************************!*\
      !*** ./src/app/pages/tnvn/emiverify/emiverify.component.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e6deed !important;\n}\n\n.bg-transparent {\n  --background: transparent !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtaXZlcmlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQ0FBQTtBQUVKIiwiZmlsZSI6ImVtaXZlcmlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTZkZWVkICFpbXBvcnRhbnQ7ICBcclxuICB9XHJcbi5iZy10cmFuc3BhcmVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudFxyXG59Il19 */";
      /***/
    },

    /***/
    73137:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tnvn/emiverify/emiverify.component.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-buttons slot=\"\">\r\n            <ion-menu-button></ion-menu-button>\r\n          </ion-buttons>\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center\">\r\n          <ion-title\r\n            class=\"ion-text-center ion-text-uppercase\"\r\n            [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\"\r\n          >\r\n          <b>EMIS\r\n          <br/>\r\n          <span *ngIf = \"this.languageType == 'ta'\" [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\" style=\"font-size: 21px\">\r\n            {{this.Report}}</span>\r\n          <span *ngIf = \"this.languageType == 'en'\">{{this.Report}}</span>  \r\n        </b>\r\n          </ion-title>\r\n        </ion-col>   \r\n        \r\n        <ion-col>\r\n          <app-notification></app-notification>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <app-progress [progress]=\"this.progressValue\"></app-progress>\r\n\r\n \r\n    <ion-button  (click)=\"shareImage()\">\r\n        <ion-label style=\"color:#fff\"\r\n          >{{this.shareonwhatsapp}}\r\n        </ion-label>\r\n        <i class=\"ionicons ion-share\"></i>\r\n        <ion-icon color =\"light\" name=\"share\"></ion-icon>\r\n      </ion-button>  \r\n\r\n      \r\n      <div  id=\"PrintEmis\" style=\"max-width: 600px;margin: auto;padding: 10px;box-shadow: 0 0 10px rgba(0, 0, 0, .15);font-size: 16px;line-height: 24px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;\">\r\n        <ion-text color=\"\" class=\"ion-text-center pt-2\">\r\n          <p class=\"pt-2 color-dgrey\" *ngIf=\"schoolDetails\">\r\n            {{ schoolDetails?.school_name }} <b>[{{ schoolDetails?.cate_type }}]</b>\r\n          </p>\r\n        </ion-text>\r\n        <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n          <ion-label class=\" fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n            <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.schoolDetail}}</span></b>\r\n          </ion-label>    \r\n      </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.district\r\n        }}:</span></b>\r\n      </ion-label>  \r\n    </ion-item>\r\n\r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item lines= \"none\" >\r\n      <ion-text [ngClass]=\"correctedDistrict.district_name == schoolDetails?.district_name? 'text-success': 'text-danger'\"  >{{ correctedDistrict != \"\" ? correctedDistrict.district_name : \"\" }}</ion-text>\r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n      <ion-text class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.educationalDistrict\r\n        }}:</span></b>\r\n      </ion-text>     \r\n    </ion-item>   \r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item lines= \"none\" >\r\n      <ion-text [ngClass]=\"correctedEduDistrict.edn_dist_name == schoolDetails?.edu_dist_name? 'text-success': 'text-danger'\" >{{ correctedEduDistrict != \"\" ? correctedEduDistrict.edn_dist_name : \"\" }}</ion-text>      \r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n      <ion-item lines=\"none\">        \r\n      <ion-text class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.block\r\n        }}:</span></b>\r\n      </ion-text>  \r\n    </ion-item>       \r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item  lines= \"none\">\r\n      <ion-text [ngClass]=\"correctedBlock.block_name == schoolDetails?.block_name? 'text-success': 'text-danger'\" >{{ correctedBlock != \"\" ? correctedBlock.block_name : \"\" }}</ion-text>      \r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row *ngIf=\"inspectionType!='inspection' && inspectionType!='veracity'\" class=\"ion-row-list-none\" >    \r\n      <ion-col>\r\n        <ion-item lines=\"none\">\r\n      <ion-text class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.zone\r\n        }}:</span></b>\r\n      </ion-text>  \r\n    </ion-item>      \r\n    </ion-col>  \r\n    <ion-col>\r\n      <ion-item  lines= \"none\">\r\n      <ion-text [ngClass]=\"correctedZone.school_name == schoolDetails?.nodal_name? 'text-success': 'text-danger'\" >{{ correctedZone != \"\" ? correctedZone.school_name : \"\" }}</ion-text>    \r\n    </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n      <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.studentEnroll}}</span></b>\r\n      </ion-label>    \r\n    </ion-row>\r\n    \r\n      <ion-grid>        \r\n        <ion-row style=\"background-color:#8B67B3\">\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.class}}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.boysTotal}}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.girlsTotal}}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000;width:20%\">\r\n            <ion-text style=\"color:#fff;text-align:center\">\r\n              {{this.studentsTotal}}\r\n            </ion-text>\r\n          </ion-col>                  \r\n        </ion-row>    \r\n        <ion-row *ngFor=\"let classItem of classList; let i = index\">\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text>\r\n              {{this.class}} {{ classItem.class }}\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text [ngClass]=\"correctedClass[i].correctedboys == correctedClass[i].boys? 'text-success': 'text-danger'\">{{ correctedClass[i].correctedboys }}</ion-text>    \r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text [ngClass]=\"correctedClass[i].correctedgirls == correctedClass[i].girls? 'text-success': 'text-danger'\">{{ correctedClass[i].correctedgirls }}</ion-text>    \r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text [ngClass]=\"(correctedClass[i].correctedboys+correctedClass[i].correctedgirls) == (correctedClass[i].boys+correctedClass[i].girls)? 'text-success': 'text-danger'\">\r\n              {{correctedClass[i].TotalStudents}}\r\n            </ion-text>  \r\n          </ion-col>                  \r\n        </ion-row>  \r\n    \r\n        <ion-row >\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text>\r\n              <b>Total</b>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <ion-text>\r\n              <b>{{this.totalNumberOfBoys}}</b>\r\n            </ion-text>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <b>{{this.totalNumberOfGirls}}</b>\r\n          </ion-col>\r\n          <ion-col style=\"border: 1px solid #000\">\r\n            <b>{{this.totalNoOfStudents}}</b>\r\n          </ion-col>                  \r\n        </ion-row>      \r\n      </ion-grid>      \r\n      <ion-row class=\"ion-row-list-none\" style=\"background-color:#8B67B3\">    \r\n        <ion-label class=\"fs-14 c_pl-2\" style=\"width:100%;text-align:center;color:#fff\">\r\n          <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{this.teacherPosition}}</span></b>\r\n        </ion-label>    \r\n    </ion-row>  \r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teacherSanctioned\r\n        }}:</span></b>\r\n      </ion-label>        \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text  style=\"width:100%;text-align:center\">{{ this.teacherSanctionedValue }}</ion-text>            \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teacherSanctionedPost\r\n        }}:</span></b>\r\n      </ion-label>        \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text  style=\"width:100%;text-align:center\">{{ this.teacherSanctionedPostValue }}</ion-text>                \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersAvailable\r\n        }}:</span></b>\r\n      </ion-label>  \r\n \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text  style=\"width:100%;text-align:center\">{{ this.teachersAvailableValue }}</ion-text>                  \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersDeputationSameSchool\r\n        }}:</span></b>\r\n      </ion-label>        \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text style=\"width:100%;text-align:center\">{{ this.teachersDeputationSameSchoolValue }}</ion-text>                        \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersDeputationOtherSchool\r\n        }}:</span></b>\r\n      </ion-label>  \r\n    </ion-col>      \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text style=\"width:100%;text-align:center\">{{ this.teachersDeputationOtherSchoolValue }}</ion-text>                              \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>\r\n    \r\n    <ion-row class=\"ion-row-list-none\" >    \r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"color-dgrey fs-14 c_pl-2\" >\r\n        <b><span [ngClass]=\"{ 'ta-font': this.languageType == 'ta' }\">{{\r\n          this.teachersOnLongLeave\r\n        }}:</span></b>\r\n      </ion-label>      \r\n    </ion-col>  \r\n    <ion-col size=\"4\">\r\n      <ion-item lines= \"none\" >\r\n      <ion-text style=\"width:100%;text-align:center\">{{ this.teachersOnLongLeaveValue }}</ion-text>                              \r\n      </ion-item>\r\n    </ion-col>\r\n    </ion-row>           \r\n    </div>          \r\n</ion-content> \r\n\r\n<ion-footer style=\"height: 50px; background-color: #2d9cdb\">\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button\r\n        class=\"btn-back\"\r\n        (click)=\"goToBack()\"      \r\n      >\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.back }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button class=\"btn-next\" (click)=\"goToValidate()\">\r\n        <ion-label\r\n          [ngClass]=\"{\r\n            'ta-font': this.languageType == 'ta',\r\n            'fs-14': this.languageType == 'ta'\r\n          }\"\r\n          >{{ this.save }}\r\n        </ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_tnvn_emiverify_emiverify_module_ts-es5.js.map