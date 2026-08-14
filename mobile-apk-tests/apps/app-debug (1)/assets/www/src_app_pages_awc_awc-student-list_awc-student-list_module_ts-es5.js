(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_awc_awc-student-list_awc-student-list_module_ts"], {
    /***/
    77546:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/awc/awc-student-list/awc-student-list-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcStudentListPageRoutingModule": function AwcStudentListPageRoutingModule() {
          return (
            /* binding */
            _AwcStudentListPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _awc_student_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-student-list.page */
      78302);

      var routes = [{
        path: '',
        component: _awc_student_list_page__WEBPACK_IMPORTED_MODULE_0__.AwcStudentListPage
      }];

      var _AwcStudentListPageRoutingModule = /*#__PURE__*/_createClass(function AwcStudentListPageRoutingModule() {
        _classCallCheck(this, AwcStudentListPageRoutingModule);
      });

      _AwcStudentListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AwcStudentListPageRoutingModule);
      /***/
    },

    /***/
    2103:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/awc/awc-student-list/awc-student-list.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcStudentListPageModule": function AwcStudentListPageModule() {
          return (
            /* binding */
            _AwcStudentListPageModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _awc_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./awc-student-list-routing.module */
      77546);
      /* harmony import */


      var _awc_student_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awc-student-list.page */
      78302);

      var _AwcStudentListPageModule = /*#__PURE__*/_createClass(function AwcStudentListPageModule() {
        _classCallCheck(this, AwcStudentListPageModule);
      });

      _AwcStudentListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _awc_student_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.AwcStudentListPageRoutingModule],
        declarations: [_awc_student_list_page__WEBPACK_IMPORTED_MODULE_1__.AwcStudentListPage]
      })], _AwcStudentListPageModule);
      /***/
    },

    /***/
    78302:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/awc/awc-student-list/awc-student-list.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AwcStudentListPage": function AwcStudentListPage() {
          return (
            /* binding */
            _AwcStudentListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_awc_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./awc-student-list.page.html */
      45255);
      /* harmony import */


      var _awc_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./awc-student-list.page.scss */
      85974);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      16738);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/diagnostic/ngx */
      34255);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      16030);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var blob_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! blob-util */
      1230);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../commonpages/view-image/view-image.page */
      29535);

      var _AwcStudentListPage = /*#__PURE__*/function () {
        function AwcStudentListPage(router, http, userService, usersessionService, locationAccuracy, uploadService, file, geolocation, modalCtrl, alertController, sqliteDB, diagnostic, androidPermissions, camera, platform, alertService, route) {
          _classCallCheck(this, AwcStudentListPage);

          this.router = router;
          this.http = http;
          this.userService = userService;
          this.usersessionService = usersessionService;
          this.locationAccuracy = locationAccuracy;
          this.uploadService = uploadService;
          this.file = file;
          this.geolocation = geolocation;
          this.modalCtrl = modalCtrl;
          this.alertController = alertController;
          this.sqliteDB = sqliteDB;
          this.diagnostic = diagnostic;
          this.androidPermissions = androidPermissions;
          this.camera = camera;
          this.platform = platform;
          this.alertService = alertService;
          this.route = route;
          this.studentList = [];
          this.blkId = '';
          this.awcCode = '';
          this.paramData = '';
          this.screenedCnt = 0;
          this.searchData = [];
          this.maleCnt = 0;
          this.feMaleCnt = 0;
          this.tdayScrndCnt = 0;
          this.activeDiv = null;
          this.DrDetails = [];
          this.showLoader = false;
        }

        return _createClass(AwcStudentListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.initializeValidators(false);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _a;

            this.activeDiv = null;
            this.blkId = this.usersessionService.user_id();
            this.currUser = this.usersessionService.emis_username();
            this.paramData = JSON.parse(this.route.snapshot.queryParams.data);
            this.awcCode = this.paramData.AwcCode ? this.paramData.AwcCode : this.paramData.Awccode;
            this.routeData = this.route.snapshot;
            this.phase_id = this.routeData.queryParams.id;
            this.viewstatus = this.routeData.queryParams.viewstatus;
            this.phaseName = this.routeData.queryParams.phaseName;
            this.UserName = this.usersessionService.emis_username();
            this.AcYears = this.routeData.queryParams.AcYears;
            this.AwcName = this.paramData.AwcName; // let obj = {
            //   AwcCode:param.AwcCode,
            //   AwcId:param.AwcId,
            //   AwcName:param.AwcName,
            //   Awwmobileno:param.Awwmobileno,
            //   BlockId:param.BlockId,
            //   DistrictId:param.DistrictId,
            //   DistrictName:param.DistrictName,
            //   BlockName:param.BlockName,
            //   Sector:param.Sector,
            //   SectorCode:param.SectorCode,
            //   SevereType:param.SevereType
            // }
            // this.paramData = obj;

            this.checkLocalDb(); // this.askToTurnOnGPS();
            // this.selectedSch(this.routeData.queryParams);

            var checkAwcViewType = localStorage.getItem('awcViewType');
            this.awcViewType = JSON.parse(checkAwcViewType);

            if (((_a = this.awcViewType) === null || _a === void 0 ? void 0 : _a.type) != 2) {
              this.awcStdList2();
            } else {
              this.awcStdList();
            }
          }
        }, {
          key: "onGoButton",
          value: function onGoButton() {
            this.router.navigate(['/tabs/list-of-awc'], {
              queryParams: {
                id: this.phase_id,
                viewstatus: this.viewstatus,
                phaseName: this.phaseName,
                AcYears: this.AcYears,
                awcCode: this.awcCode
              }
            });
          }
        }, {
          key: "studentform",
          value: function studentform(item, fun) {
            // if (this.drtDeatails.valid ){
            this.item = item;
            this.item.pageId = 1;
            this.item.Awc_Code = this.item.AwcCode;
            this.router.navigate(['/tabs/awc-form'], {
              queryParams: {
                data: JSON.stringify(this.item),
                id: this.phase_id,
                viewstatus: this.viewstatus,
                phaseName: this.phaseName,
                AcYears: this.AcYears,
                awcCode: this.awcCode,
                fun: fun
              }
            }); // }
            // else {
            //   this.alertService.error("Please Enter Your Visit Photo")
            // }
          }
        }, {
          key: "askToTurnOnGPS",
          value: function askToTurnOnGPS() {
            var _this = this;

            debugger;
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function (i) {
              _this.checkAndRequestPermission();
            }, function (error) {
              // this.alertService.alertToTurnOnPermission('Location', 'Location');
              _this.checkGPSPermission();
            });
          }
        }, {
          key: "checkGPSPermission",
          value: function checkGPSPermission() {
            var _this2 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
              if (result.hasPermission) {
                _this2.askToTurnOnGPS();
              } else {
                _this2.requestGPSPermission();
              }
            }, function (err) {// console.log("err=", err);
              // alert(err);
            });
          }
        }, {
          key: "requestGPSPermission",
          value: function requestGPSPermission() {
            var _this3 = this;

            this.locationAccuracy.canRequest().then(function (canRequest) {
              if (canRequest) {} else {
                _this3.androidPermissions.requestPermission(_this3.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (i) {
                  _this3.askToTurnOnGPS();
                }, function (error) {
                  _this3.alertService.alertWhite('To get current location please turn on device location');
                });
              }
            });
          }
        }, {
          key: "checkAndRequestPermission",
          value: function checkAndRequestPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var status;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.diagnostic.getLocationAuthorizationStatus();

                  case 1:
                    status = _context.v;

                    if (status === this.diagnostic.permissionStatus.GRANTED) {
                      // Permission is granted, proceed to get location
                      this.selectedSch(this.routeData.queryParams);
                    } else {
                      this.requestPermission();
                    } // else if (status === this.diagnostic.permissionStatus.NOT_REQUESTED) {
                    //   // Permission denied, request again
                    //   this.requestPermission();
                    // } else if (status === this.diagnostic.permissionStatus.DENIED_ALWAYS) {
                    //   // Permission permanently denied, redirect to settings
                    //   this.showSettingsAlert();
                    // }


                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "requestPermission",
          value: function requestPermission() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var result, _t;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    _context2.p = 0;
                    _context2.n = 1;
                    return this.diagnostic.requestLocationAuthorization();

                  case 1:
                    result = _context2.v;

                    if (result === this.diagnostic.permissionStatus.GRANTED) {
                      this.selectedSch(this.routeData.queryParams);
                    } else {
                      this.showSettingsAlert();
                    }

                    _context2.n = 3;
                    break;

                  case 2:
                    _context2.p = 2;
                    _t = _context2.v;
                    console.error('Error requesting location permission:', _t);

                  case 3:
                    return _context2.a(2);
                }
              }, _callee2, this, [[0, 2]]);
            }));
          }
        }, {
          key: "getLatLong",
          value: function getLatLong() {
            var _this4 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              _this4.locationCordinates = resp.coords;
              _this4.latitude = _this4.locationCordinates.latitude;
              _this4.longitude = _this4.locationCordinates.longitude;
            })["catch"](function (error) {});
          }
        }, {
          key: "showSettingsAlert",
          value: function showSettingsAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      header: 'Permission Required',
                      message: 'Location access is required. Please enable it in your device settings.',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {
                          _this5.goHome();
                        }
                      }, {
                        text: 'Open Settings',
                        handler: function handler() {
                          _this5.goHome();

                          _this5.diagnostic.switchToSettings();
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
          key: "goHome",
          value: function goHome() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "selectedSch",
          value: function selectedSch(val) {
            this.compareLatLng(val, 1);
          }
        }, {
          key: "compareLatLng",
          value: function compareLatLng(data, type) {
            var _a;

            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var storedLat, storedLng;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.showLoader = true;
                    _context4.n = 1;
                    return this.getUserGetLatLng();

                  case 1:
                    this.userLantLng = _context4.v;
                    storedLat = parseFloat(localStorage.getItem('awcLatt'));
                    storedLng = parseFloat(localStorage.getItem('awcLongg'));
                    this.currKm = (this.getDistanceFromLatLonInKm(this.userLantLng.latitude, this.userLantLng.longitude, storedLat, storedLng) * 100 / 100).toFixed(3);

                    if (Number.isNaN(this.currKm) || this.currKm == 'NaN') {
                      this.askToTurnOnGPS();
                    } else if (this.currKm > 0.5) {
                      this.latLongData = {
                        "records": {
                          "school_id": this.awcCode,
                          "user_name": this.UserName,
                          "latitude": this.userLantLng.latitude,
                          "longitude": this.userLantLng.longitude,
                          "km_diff": this.currKm,
                          "in_range_flag": 0
                        }
                      };
                      console.log(this.latLongData);
                      this.userService.PostLogForLatLong(this.latLongData).subscribe(function (res) {});
                      this.alertService.error("The selected School is more than 0.5 km, the km is : " + this.currKm + "");
                    } else {
                      this.latLongData = {
                        "records": {
                          "school_id": this.awcCode,
                          "user_name": this.UserName,
                          "latitude": this.userLantLng.latitude,
                          "longitude": this.userLantLng.longitude,
                          "km_diff": this.currKm,
                          "in_range_flag": 1
                        }
                      };
                      this.userService.PostLogForLatLong(this.latLongData).subscribe(function (res) {});
                    }

                    if (((_a = this.awcViewType) === null || _a === void 0 ? void 0 : _a.type) != 2) {
                      this.awcStdList2();
                    } else {
                      this.awcStdList();
                    }

                    this.showLoader = false;

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
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
        }, {
          key: "getUserGetLatLng",
          value: function getUserGetLatLng() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee5() {
              return _regenerator().w(function (_context5) {
                while (1) switch (_context5.n) {
                  case 0:
                    return _context5.a(2, new Promise(function (resolve, reject) {
                      var options = {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 10000
                      };
                      navigator.geolocation.getCurrentPosition(function (position) {
                        resolve(position.coords);
                      }, function (error) {
                        console.error("Error getting location:", error);
                      }, options);
                    }));
                }
              }, _callee5);
            }));
          }
        }, {
          key: "AddStudent",
          value: function AddStudent() {
            this.router.navigate(['/tabs/awc-add-std'], {
              queryParams: {
                data: JSON.stringify(this.paramData),
                id: this.phase_id,
                viewstatus: this.viewstatus,
                phaseName: this.phaseName,
                AcYears: this.AcYears,
                awcCode: this.awcCode
              }
            });
          }
        }, {
          key: "checkLocalDb",
          value: function checkLocalDb() {
            var _this6 = this;

            var query = 'SELECT * FROM awcDoctDeatailsDB WHERE AWCCode=' + this.awcCode;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this6.DrDetails = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this6.DrDetails.push(data.rows.item(i));
                } // this.initializeValidators(true)

              } else {
                _this6.checkExternalDb();
              }
            });
          }
        }, {
          key: "checkExternalDb",
          value: function checkExternalDb() {// this.userService.getGetAWCOnDatePhotoUploaded(this.UserName,this.awcCode).subscribe((data)=>{
            //   if (data.result && data.result.length > 0) {
            //     this.DrDetails = [];
            //     for (var i = 0; i < data.result.length; i++) {
            //       this.DrDetails.push(data.result[0]);
            //     }
            //     // this.initializeValidators(true)
            //   } else {
            //     // this.initializeValidators(false)
            //   }
            // });
          }
        }, {
          key: "insertLocalDB",
          value: function insertLocalDB(data) {
            this.refreshTable();
            var datainsert = 'INSERT INTO awcDoctDeatailsDB VALUES (?,?,?)';
            this.sqliteDB.insert(datainsert, [null, this.awcCode, localStorage.getItem('VisitPhoto')]).then(function (insertres) {
              if (insertres.insertId) {}
            });
          }
        }, {
          key: "refreshTable",
          value: function refreshTable() {
            var query = 'DELETE FROM awcDoctDeatailsDB';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {});
          }
        }, {
          key: "updateLocalDB",
          value: function updateLocalDB(data) {
            var _this7 = this;

            var datainsert = 'UPDATE awcDoctDeatailsDB SET VisitPhoto=' + localStorage.getItem('VisitPhoto') + 'WHERE AWCCode=' + this.awcCode;
            return this.sqliteDB.update(datainsert).then(function (data) {
              _this7.alertService.success("photo Updated");
            });
          }
        }, {
          key: "initializeValidators",
          value: function initializeValidators(data) {
            this.drtDeatails = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
              visit_photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(data ? this.DrDetails[0].VisitPhoto : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]),
              photo_updated_at: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(data ? this.DrDetails[0].PhotoUpdatedAt : '')
            });
          }
        }, {
          key: "deleteViewPhoto",
          value: function deleteViewPhoto() {
            this.drtDeatails.controls.visit_photo.setValue('');
          }
        }, {
          key: "getUploadedFiles1",
          value: function getUploadedFiles1(filename) {
            var filename;
            return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee7() {
              var _this8 = this;

              var bucketName, expiry;
              return _regenerator().w(function (_context7) {
                while (1) switch (_context7.n) {
                  case 0:
                    if (filename) {
                      bucketName = "renewalapplicationemis";
                      filename = filename;
                      expiry = 1800;
                      this.uploadService.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee6() {
                          var modal;
                          return _regenerator().w(function (_context6) {
                            while (1) switch (_context6.n) {
                              case 0:
                                if (!result) {
                                  _context6.n = 3;
                                  break;
                                }

                                _context6.n = 1;
                                return this.modalCtrl.create({
                                  component: _commonpages_view_image_view_image_page__WEBPACK_IMPORTED_MODULE_15__.ViewImagePage,
                                  componentProps: {
                                    image: result.url
                                  },
                                  cssClass: 'view-image-modal_capturedimage'
                                });

                              case 1:
                                modal = _context6.v;
                                _context6.n = 2;
                                return modal.present();

                              case 2:
                                _context6.n = 4;
                                break;

                              case 3:
                                this.alertService.error('Error while getting image');

                              case 4:
                                return _context6.a(2);
                            }
                          }, _callee6, this);
                        }));
                      });
                    } else {
                      this.alertService.warning('No data found');
                    }

                  case 1:
                    return _context7.a(2);
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "openCameraOn",
          value: function openCameraOn() {
            var _this9 = this;

            var options = {
              quality: 70,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              correctOrientation: false,
              allowEdit: false
            };
            this.platform.ready().then(function () {
              _this9.camera.getPicture(options).then(function (imageData) {
                // this.capturedImage = 'data:image/jpeg;base64,' + imageData;
                // this.addWatermark(this.userLantLng.latitude, this.userLantLng.longitude);
                var bucketName = "renewalapplicationemis";
                var expiry = 300;
                var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                var splitedImage = filename.split(".");

                _this9.file.readAsDataURL(imagename, filename).then(function (base64) {
                  if (base64) {
                    var base = base64.split('base64,');
                    var blob = (0, blob_util__WEBPACK_IMPORTED_MODULE_12__.base64StringToBlob)(base[1], 'image/jpg');

                    if (blob.size <= 4000000) {
                      _this9.uploadService.getSignedUrl(bucketName, splitedImage[1], splitedImage[0], expiry).subscribe(function (result) {
                        if (result) {
                          _this9.uploadService.uploadFile(result.url, blob).subscribe(function (res) {
                            _this9.drtDeatails.controls.visit_photo.setValue(result.key);

                            localStorage.setItem('VisitPhoto', _this9.drtDeatails.controls.visit_photo.value);

                            _this9.drtDeatails.controls.photo_updated_at.setValue(new Date());

                            _this9.alertService.success('File Uploaded Successfully');

                            _this9.getMobileNo();
                          });
                        } else {
                          _this9.alertService.error('Unable to upload the photo. Please try again.');
                        }
                      });
                    } else {
                      _this9.alertService.error('File Can`t uploaded because Image size should not exceed 5 MB');
                    }
                  }
                });
              }, function (err) {
                // Handle error
                _this9.alertService.error(err);
              });
            });
          }
        }, {
          key: "getMobileNo",
          value: function getMobileNo() {
            if (this.drtDeatails.valid) {
              this.insertLocalDB(this.drtDeatails);
              this.alertService.success("Please proceed with screening the student.");
            } else {
              this.submitted = true;
            }
          }
        }, {
          key: "awcStdList",
          value: function awcStdList() {
            var _this0 = this;

            this.studentList = [];
            this.searchData = [];
            this.userService.AwcAnganvadiStuGet(this.awcCode, this.phase_id).subscribe(function (res) {
              _this0.screenedCnt = 0;
              _this0.maleCnt = 0;
              _this0.feMaleCnt = 0;
              _this0.tdayScrndCnt = 0;
              var today = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('YYYY-MM-DD');

              if (res.dataStatus) {
                _this0.studentList = res.result;

                for (var i = 0; i < _this0.studentList.length; i++) {
                  _this0.searchData.push(_this0.studentList[i]); // ======screened cnt============


                  if (_this0.studentList[i].screening_status == 1) {
                    _this0.screenedCnt = _this0.screenedCnt + 1;
                  } // =========male female count==============


                  if (_this0.studentList[i].Gender == 1) {
                    _this0.maleCnt = _this0.maleCnt + 1;
                  } else if (_this0.studentList[i].Gender == 2) {
                    _this0.feMaleCnt = _this0.feMaleCnt + 1;
                  } // ===========today screened cnt================


                  if (_this0.studentList[i].screening_date) {
                    var frDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date(_this0.studentList[i].screening_date)).format('YYYY-MM-DD');

                    if (today == frDate) {
                      _this0.tdayScrndCnt = _this0.tdayScrndCnt + 1;
                    }
                  }
                }
              } else {
                _this0.alertService.warning(res.message);
              }
            });
          }
        }, {
          key: "awcStdList2",
          value: function awcStdList2() {
            var _this1 = this;

            var _a, _b, _c, _d, _e, _f;

            this.studentList = [];
            this.searchData = [];

            if (this.awcViewType.type != 2 && ((_b = (_a = this.awcViewType) === null || _a === void 0 ? void 0 : _a.diagnosis) === null || _b === void 0 ? void 0 : _b.length) === 0) {
              var diagnosis = [];
              var awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_staging.json'; // let awcQues = 'https://d1wpyxz35bzzz4.cloudfront.net/awc_quest_master_production.json';

              this.http.get(awcQues).subscribe(function (data) {
                var _a;

                var result = [];

                for (var i in data) {
                  result.push([i, data[i]]);
                }

                var optioning = _this1.jsonParse(data.options.data, data.options.columns);

                if (_this1.awcViewType.type != 1) {
                  diagnosis = optioning.filter(function (item) {
                    var _a;

                    return item.opt_type == ((_a = _this1.awcViewType) === null || _a === void 0 ? void 0 : _a.type);
                  }).map(function (item) {
                    return item.value;
                  });
                } else {
                  diagnosis = optioning.filter(function (item) {
                    return item.opt_type != null;
                  }).map(function (item) {
                    return item.value;
                  });
                }

                var datas = {
                  records: {
                    "type": (_a = _this1.awcViewType) === null || _a === void 0 ? void 0 : _a.type,
                    "diagnosis": diagnosis,
                    "PhaseId": _this1.phase_id,
                    "AwcCode": _this1.awcCode
                  }
                };

                _this1.userService.AwcAnganvadiDiagnosisStuGettest(datas).subscribe(function (res) {
                  _this1.screenedCnt = 0;
                  _this1.maleCnt = 0;
                  _this1.feMaleCnt = 0;
                  _this1.tdayScrndCnt = 0;
                  var today = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('YYYY-MM-DD');

                  if (res.dataStatus) {
                    _this1.studentList = res.result;

                    for (var _i = 0; _i < _this1.studentList.length; _i++) {
                      _this1.searchData.push(_this1.studentList[_i]); // ======screened cnt============


                      if (_this1.studentList[_i].screening_status == 1) {
                        _this1.screenedCnt = _this1.screenedCnt + 1;
                      } // =========male female count==============


                      if (_this1.studentList[_i].Gender == 1) {
                        _this1.maleCnt = _this1.maleCnt + 1;
                      } else if (_this1.studentList[_i].Gender == 2) {
                        _this1.feMaleCnt = _this1.feMaleCnt + 1;
                      } // ===========today screened cnt================


                      if (_this1.studentList[_i].screening_date) {
                        var frDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date(_this1.studentList[_i].screening_date)).format('YYYY-MM-DD');

                        if (today == frDate) {
                          _this1.tdayScrndCnt = _this1.tdayScrndCnt + 1;
                        }
                      }
                    }
                  } else {
                    _this1.alertService.warning(res.message);
                  }
                });
              });
            } else {
              if (((_c = this.awcViewType) === null || _c === void 0 ? void 0 : _c.type) != 2) {
                var data = {
                  records: {
                    "type": (_d = this.awcViewType) === null || _d === void 0 ? void 0 : _d.type,
                    "diagnosis": (_f = (_e = this.awcViewType) === null || _e === void 0 ? void 0 : _e.diagnosis) === null || _f === void 0 ? void 0 : _f.map(function (item) {
                      return item.value;
                    }),
                    "PhaseId": this.phase_id,
                    "AwcCode": this.awcCode
                  }
                };
                this.userService.AwcAnganvadiDiagnosisStuGettest(data).subscribe(function (res) {
                  _this1.screenedCnt = 0;
                  _this1.maleCnt = 0;
                  _this1.feMaleCnt = 0;
                  _this1.tdayScrndCnt = 0;
                  var today = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format('YYYY-MM-DD');

                  if (res.dataStatus) {
                    _this1.studentList = res.result;

                    for (var i = 0; i < _this1.studentList.length; i++) {
                      _this1.searchData.push(_this1.studentList[i]); // ======screened cnt============


                      if (_this1.studentList[i].screening_status == 1) {
                        _this1.screenedCnt = _this1.screenedCnt + 1;
                      } // =========male female count==============


                      if (_this1.studentList[i].Gender == 1) {
                        _this1.maleCnt = _this1.maleCnt + 1;
                      } else if (_this1.studentList[i].Gender == 2) {
                        _this1.feMaleCnt = _this1.feMaleCnt + 1;
                      } // ===========today screened cnt================


                      if (_this1.studentList[i].screening_date) {
                        var frDate = moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date(_this1.studentList[i].screening_date)).format('YYYY-MM-DD');

                        if (today == frDate) {
                          _this1.tdayScrndCnt = _this1.tdayScrndCnt + 1;
                        }
                      }
                    }
                  } else {
                    _this1.alertService.warning(res.message);
                  }
                });
              }
            }
          }
        }, {
          key: "jsonParse",
          value: function jsonParse(data, column) {
            var arr = [];

            for (var i = 0; i < data.length; i++) {
              var obj = {};

              for (var j = 0; j < column.length; j++) {
                obj[column[j]] = data[i][j];
              }

              obj.subques = [];
              obj.isMapped = false;
              arr.push(obj);
            }

            ;
            return arr;
          }
        }, {
          key: "ageCalculator",
          value: function ageCalculator(date) {
            // var userinput = document.getElementById("DOB").value;  
            var dob = new Date(date); //extract the year, month, and date from user date input  

            var dobdobYear = dob.getFullYear();
            var dobdobMonth = dob.getMonth(); // var dobdobDate = dob.getDate();  
            //get the current date from the system  

            var now = new Date(); //extract the year, month, and date from current date  

            var currentYear = now.getFullYear();
            var currentMonth = now.getMonth();
            var currentDate = now.getDate(); //declare a variable to collect the age in year, month, and days  

            var age = {};
            var ageString = ""; //get years  

            var yearAge = currentYear - dobdobYear; //get months  

            if (currentMonth >= dobdobMonth) //get months when current month is greater  
              var monthAge = currentMonth - dobdobMonth;else {
              yearAge--;
              var monthAge = 12 + currentMonth - dobdobMonth;
            } //get days  

            if (currentDate >= dobdobMonth) //get days when the current date is greater  
              var dateAge = currentDate - dobdobMonth;else {
              monthAge--;
              var dateAge = 31 + currentDate - dobdobMonth;

              if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
              }
            } //group the age in a single variable  

            age = {
              years: yearAge,
              months: monthAge,
              days: dateAge
            };
            var ageageString = '';
            if (age.years > 0 && age.months > 0 && age.days > 0) ageageString = age.years + " yr, " + age.months + "m";else if (age.years == 0 && age.months == 0 && age.days > 0) ageString = age.days + "days"; //when current month and date is same as birth date and month  
            else if (age.years > 0 && age.months == 0 && age.days == 0) ageageString = age.years + "yr" + "0m";else if (age.years > 0 && age.months > 0 && age.days == 0) ageageString = age.years + "y," + age.months + " m";else if (age.years == 0 && age.months > 0 && age.days > 0) ageageString = age.months + "m";else if (age.years > 0 && age.months == 0 && age.days > 0) ageageString = age.years + "y,0m";else if (age.years == 0 && age.months > 0 && age.days == 0) ageageString = age.months + "m"; //display the calculated age  

            return ageageString;
          }
        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            this.searchData = [];
            var sData = event.detail.value.trim();
            this.searchData = this.studentList.filter(function (item) {
              return item.Childname.toLowerCase().indexOf(sData.toLowerCase()) > -1;
            });
          }
        }, {
          key: "clickCuurDiv",
          value: function clickCuurDiv(currDiv) {
            this.activeDiv = currDiv == this.activeDiv ? null : currDiv;
          }
        }, {
          key: "statusCalc",
          value: function statusCalc(data) {
            var type = '';

            if (data.Underweighttype == 3 || data.StunningType == 3 || data.WastingType == 3) {
              type = 'Severe';
            } else if (data.Underweighttype == 2 || data.StunningType == 2 || data.WastingType == 2) {
              type = 'Moderate';
            } else {
              type = 'Normal';
            }

            return type;
          }
        }, {
          key: "previouspage",
          value: function previouspage(event, i) {
            this.item.pageId = 1;
            this.item.Awc_Code = this.item.AwcCode;
            this.router.navigate(['/tabs/awc-form'], {
              queryParams: {
                data: JSON.stringify(this.item),
                id: this.phase_id,
                'userLatt': this.userLantLng.latitude,
                'userLongg': this.userLantLng.longitude,
                viewstatus: this.viewstatus,
                phaseName: this.phaseName,
                AcYears: this.AcYears,
                awcCode: this.awcCode
              }
            });
          }
        }]);
      }();

      _AwcStudentListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__.LocationAccuracy
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_10__.UploadService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_13__.File
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_14__.SqlitedatabaseService
        }, {
          type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_6__.Diagnostic
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_11__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute
        }];
      };

      _AwcStudentListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
        selector: 'app-awc-student-list',
        template: _raw_loader_awc_student_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_awc_student_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AwcStudentListPage);
      /***/
    },

    /***/
    85974:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/awc/awc-student-list/awc-student-list.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tlStu {\n  background-color: #FFF1F3;\n  border-radius: 12px;\n  margin-bottom: 15px;\n  border-left: 6px solid #F96C94;\n}\n\n.scrStu {\n  background-color: #dffeff;\n  border-radius: 12px;\n  margin-bottom: 15px;\n  border-left: 6px solid #0FA8B8;\n}\n\n.tlstuNo {\n  background-color: #F96C94;\n  color: white;\n  border-radius: 22px;\n  padding: 3px;\n  font-size: 12px;\n}\n\n.scstuNo {\n  background-color: #0FA8B8;\n  color: white;\n  border-radius: 22px;\n  padding: 3px;\n  font-size: 12px;\n}\n\n.col {\n  align-self: center;\n}\n\n.label {\n  background-color: #0FA8B8;\n  font-size: 13px;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.cusRowDiv {\n  border-radius: 10px 10px 0 0px;\n  border-bottom: 1px solid #80808047;\n  position: relative;\n  z-index: 1;\n}\n\n.stdParDiv {\n  border-radius: 15px;\n  background-color: white;\n  margin-bottom: 10px;\n}\n\n.rowdivv {\n  border-left: 8px solid #0FA8B8;\n}\n\n.rowdivv2 {\n  border-left: 8px solid #F96C94;\n}\n\n.active {\n  background: #dffeff;\n}\n\n.boygirlcol {\n  text-align: center;\n  align-self: center;\n}\n\n.mtb-8p {\n  margin: 0 10px;\n}\n\n.cusSearch {\n  margin: 0 !important;\n  padding: 10px 0;\n}\n\n.stdDetails {\n  margin-bottom: 15px;\n  padding: 5px;\n  background: #e9e3e363;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.stdDetailsH {\n  text-align: right;\n  display: flex;\n  justify-content: space-between;\n  grid-gap: 15px;\n  gap: 15px;\n  align-items: center;\n  font-size: 12px;\n}\n\n.upDownIcon {\n  font-size: 22px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.justify-content-between {\n  justify-content: space-between;\n}\n\n.plr-5 {\n  padding: 0 5px;\n}\n\n.fZ10 {\n  font-size: 12px;\n}\n\n.userlabel {\n  zoom: 1.5;\n}\n\n.floatLabel {\n  font-size: 12px;\n  display: flex;\n  grid-gap: 3px;\n  gap: 3px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.fileIcons {\n  font-size: 70px;\n  color: #343232;\n  background-color: white;\n}\n\n.cancelIcon {\n  font-size: 1.5rem;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3Yy1zdHVkZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBTEo7O0FBT0E7RUFDSSxrQkFBQTtBQUpKOztBQU1BO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUdJLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFMSjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU9BO0VBQ0ksOEJBQUE7QUFKSjs7QUFNQTtFQUNJLDhCQUFBO0FBSEo7O0FBTUE7RUFDSSxtQkFBQTtBQUhKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUtBO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0FBRko7O0FBS0E7RUFDSSw4QkFBQTtBQUZKOztBQUtBO0VBQ0ksY0FBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQUtBO0VBQ0ksU0FBQTtBQUZKOztBQUtBO0VBRUksZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBQUhKOztBQWdCQTtFQUNJLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBYko7O0FBZ0JBO0VBQ0ksZUFBQTtBQWJKOztBQWdCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFiSiIsImZpbGUiOiJhd2Mtc3R1ZGVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50bFN0dXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYxRjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgI0Y5NkM5NDtcclxufVxyXG4uc2NyU3R1e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZmVmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMEZBOEI4O1xyXG59XHJcbi50bHN0dU5ve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NkM5NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4vLyAuc2NTdHVke1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkZFNztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjQUZCNDc0O1xyXG4vLyB9XHJcbi5zY3N0dU5ve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBGQThCODtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY29se1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5sYWJlbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkE4Qjg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmN1c1Jvd0RpdiB7XHJcbiAgIFxyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTJweCBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4MDgwODA0NztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnN0ZFBhckRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucm93ZGl2dntcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzBGQThCODtcclxufVxyXG4ucm93ZGl2djJ7XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNGOTZDOTQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2RmZmVmZjtcclxufVxyXG4uYm95Z2lybGNvbHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjpjZW50ZXJcclxufVxyXG5cclxuLm10Yi04cCB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLmN1c1NlYXJjaCB7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uc3RkRGV0YWlscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZTNlMzYzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5zdGREZXRhaWxzSCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udXBEb3duSWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnBsci01IHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcblxyXG4uZloxMCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi51c2VybGFiZWwge1xyXG4gICAgem9vbTogMS41O1xyXG59XHJcblxyXG4uZmxvYXRMYWJlbCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBOEI4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogM3B4O1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgLy8gcG9zaXRpb246IHN0aWNreTtcclxuICAgIC8vIHRvcDogLTFweDtcclxuICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgLy8gei1pbmRleDogNTtcclxuICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8vIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgb3BhY2l0eTogMC41OyAgICAgICAgXHJcbiAgfVxyXG5cclxuLmN1cnNvci1wb2ludGVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsZUljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIGNvbG9yOiAjMzQzMjMyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4uY2FuY2VsSWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    45255:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/awc/awc-student-list/awc-student-list.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"onGoButton()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">{{this.AwcName}} - {{currUser}}</div>\r\n      <div class=\"ion-text-wrap floatLabel\">\r\n        <ion-icon class=\"userlabel\" name=\"location-outline\"></ion-icon>\r\n        {{awcCode}} &nbsp; &nbsp;( {{AcYears}} - {{phaseName}} )\r\n      </div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div style=\"margin: 20px;\">\r\n    <ion-row class=\"tlStu\">\r\n      <ion-col size=\"10\" class=\"col\">\r\n        <div style=\"font-size: 13px;\">\r\n          <ion-label>Total Children</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"tlstuNo\">\r\n          <ion-label>{{studentList.length}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"tlStu\">\r\n      <ion-col size=\"10\" class=\"col\">\r\n        <div style=\"font-size: 13px;\">\r\n          <ion-label>Total Boys</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"tlstuNo\">\r\n          <ion-label>{{maleCnt}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"tlStu\">\r\n      <ion-col size=\"10\" class=\"col\">\r\n        <div style=\"font-size: 13px;\">\r\n          <ion-label>Total Girls</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"tlstuNo\">\r\n          <ion-label>{{feMaleCnt}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"scrStu\">\r\n      <ion-col size=\"10\" class=\"col\">\r\n        <div style=\"font-size: 13px;\">\r\n          <ion-label>Screened Children</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"scstuNo\">\r\n          <ion-label>{{screenedCnt}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"tlStu\" *ngIf = \"awcViewType?.type == 2\">\r\n      <ion-col size=\"10\" class=\"col\">\r\n        <div style=\"font-size: 13px;\">\r\n          <ion-label>Today Screening Count</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"text-align: center;\">\r\n        <div class=\"tlstuNo\">\r\n          <ion-label>{{tdayScrndCnt}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- <div>\r\n      <ion-row>\r\n      <ion-col size=\"12\" class=\"text-left\">\r\n        <ion-label>Kindly Upload Photo<span style=\"color: red;\"> *</span></ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n    </div> -->\r\n    <!-- <div class=\"mt-1\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"text-center\" *ngIf=\"!drtDeatails.value.visit_photo\">\r\n          <div>\r\n            <ion-icon name=\"camera\" class=\"fileIcons\" (click)=\"openCameraOn()\" [class.disabled]=\"currKm > 0.5 && currKm \"></ion-icon>\r\n          </div>\r\n          <ion-label class=\"text-center\" [class.disabled]=\"currKm > 0.5 && currKm \">Camera</ion-label>\r\n        </ion-col>\r\n        <div *ngIf=\"drtDeatails.controls.visit_photo.errors && (submitted || drtDeatails.controls.visit_photo.touched)\">\r\n          <ion-text color=\"danger\" style=\"font-size: 10px;\">Field is required</ion-text>\r\n        </div>\r\n        <ion-col class=\"text-center\">\r\n          <div *ngIf=\"drtDeatails.value.visit_photo\"   style=\"margin-top: 5px;\">\r\n            <ion-button size=\"small\" style=\"margin-right: 5px;\" (click)=\"getUploadedFiles1(drtDeatails.value.visit_photo)\"\r\n            color=\"warning\">View Photo</ion-button>\r\n            <ion-icon name=\"close-circle-outline\" class=\"cancelIcon cursor-pointer\" *ngIf=\"drtDeatails.value.visit_photo\" (click)=\"deleteViewPhoto()\"></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div> -->\r\n    <div class=\"label\" *ngIf=\"viewstatus == 1\" >\r\n      <ion-label>List Of Children</ion-label>\r\n      <ion-button (click)=\"AddStudent()\">Add Child</ion-button>\r\n    </div>\r\n    <div class=\"label\" *ngIf=\"viewstatus == 2\" >\r\n      <ion-label>List Of Children</ion-label>\r\n      <ion-button color=\"secondary\" (click)=\"AddStudent()\" [disabled]=true>Add Child</ion-button>\r\n    </div>\r\n\r\n    <ion-searchbar class=\"cusSearch\" *ngIf=\"studentList?.length != 0\" debounce=\"500\"\r\n      (ionChange)=\"getFilterItems($event)\" placeholder=\"Search\">\r\n    </ion-searchbar>\r\n\r\n    <div *ngIf=\"searchData.length>0\" >\r\n      <div *ngFor=\"let data of searchData;let i = index\" class=\"stdParDiv\" [class.rowdivv]=\"data.Gender == 1\"\r\n        [class.rowdivv2]=\"data.Gender == 2\" >\r\n        <ion-row class=\"cusRowDiv\" (click)=\"studentform(data,'Edit')\" [class.active]=\"data.screening_status == 1\">\r\n          <ion-col size=\"2\" class=\"boygirlcol\" *ngIf=\"data.Gender == 1\">\r\n            <img src=\"../../../../assets/icons/awc/boy.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"boygirlcol\" *ngIf=\"data.Gender == 2\">\r\n            <img src=\"../../../../assets/icons/awc/girl.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"4\" style=\"align-self:center;font-size: 12px;\">\r\n            <div>\r\n              <ion-label>\r\n                {{i+1}}. {{data.Childname}}\r\n              </ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"fZ10\">\r\n            <ion-label>\r\n              Status\r\n            </ion-label><br>\r\n            <ion-label [ngStyle]=\"{'color': data.screening_status == 1 ? '#4CAF50' :'#8D9905'}\">\r\n              {{data.screening_status==1 ?'Screened':'Not Screened'}}\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"fZ10\">\r\n            <ion-label>\r\n              Age\r\n            </ion-label><br>\r\n            <ion-label>\r\n              {{ageCalculator(data.ChildDob)}}\r\n            </ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"stdDetails\" *ngIf=\"this.AcYears == '2024-2025'\">\r\n          <div class=\"d-flex justify-content-between plr-5\">\r\n            <div>\r\n              <ion-label class=\"fZ10\">\r\n                C/o : {{data.Parentname}}\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"stdDetailsH\" (click)=\"clickCuurDiv(i)\">\r\n              Health Screening Details\r\n              <ion-icon class=\"upDownIcon\" name=\"arrow-down-circle-outline\" *ngIf=\"activeDiv != i\"></ion-icon>\r\n              <ion-icon class=\"upDownIcon\" name=\"arrow-up-circle-outline\"\r\n                *ngIf=\"activeDiv == i && activeDiv != null\"></ion-icon>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"activeDiv == i && activeDiv != null\">\r\n            <ion-row>\r\n              <ion-col size=\"4\" class=\"fZ10 text-center\">\r\n                <ion-label>\r\n                  Height\r\n                </ion-label><br>\r\n                <ion-label *ngIf=\"data.Height\">\r\n                  {{data.Height}}cm\r\n                </ion-label>\r\n                <ion-label *ngIf=\"!data.Height\">\r\n                  -\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"fZ10 text-center\">\r\n                <ion-label>\r\n                  Weight\r\n                </ion-label><br>\r\n                <ion-label *ngIf=\"data.Weight\">\r\n                  {{data.Weight}}kg\r\n                </ion-label>\r\n                <ion-label *ngIf=\"!data.Weight\">\r\n                  -\r\n                </ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"fZ10 text-center\">\r\n                <ion-label>\r\n                  Status\r\n                </ion-label><br>\r\n                <ion-label>\r\n                  {{statusCalc(data)}}\r\n                </ion-label>\r\n              </ion-col>\r\n              <!-- <ion-col size=\"3\">\r\n                <ion-icon name=\"copy-outline\" style=\"font-size: 2em;\" (click)=\"studentform(data,'View')\"></ion-icon>\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_awc_awc-student-list_awc-student-list_module_ts-es5.js.map