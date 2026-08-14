(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_geo-fence_ie-center-geo-fence_ie-center-geo-fence_module_ts"], {
    /***/
    46073:
    /*!*******************************************************************************************!*\
      !*** ./src/app/pages/geo-fence/ie-center-geo-fence/ie-center-geo-fence-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IeCenterGeoFencePageRoutingModule": function IeCenterGeoFencePageRoutingModule() {
          return (
            /* binding */
            _IeCenterGeoFencePageRoutingModule
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


      var _ie_center_geo_fence_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ie-center-geo-fence.page */
      32078);

      var routes = [{
        path: '',
        component: _ie_center_geo_fence_page__WEBPACK_IMPORTED_MODULE_0__.IeCenterGeoFencePage
      }];

      var _IeCenterGeoFencePageRoutingModule = /*#__PURE__*/_createClass(function IeCenterGeoFencePageRoutingModule() {
        _classCallCheck(this, IeCenterGeoFencePageRoutingModule);
      });

      _IeCenterGeoFencePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _IeCenterGeoFencePageRoutingModule);
      /***/
    },

    /***/
    80870:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/geo-fence/ie-center-geo-fence/ie-center-geo-fence.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IeCenterGeoFencePageModule": function IeCenterGeoFencePageModule() {
          return (
            /* binding */
            _IeCenterGeoFencePageModule
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


      var _ie_center_geo_fence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ie-center-geo-fence-routing.module */
      46073);
      /* harmony import */


      var _ie_center_geo_fence_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ie-center-geo-fence.page */
      32078);

      var _IeCenterGeoFencePageModule = /*#__PURE__*/_createClass(function IeCenterGeoFencePageModule() {
        _classCallCheck(this, IeCenterGeoFencePageModule);
      });

      _IeCenterGeoFencePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ie_center_geo_fence_routing_module__WEBPACK_IMPORTED_MODULE_0__.IeCenterGeoFencePageRoutingModule],
        declarations: [_ie_center_geo_fence_page__WEBPACK_IMPORTED_MODULE_1__.IeCenterGeoFencePage]
      })], _IeCenterGeoFencePageModule);
      /***/
    },

    /***/
    32078:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/geo-fence/ie-center-geo-fence/ie-center-geo-fence.page.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "IeCenterGeoFencePage": function IeCenterGeoFencePage() {
          return (
            /* binding */
            _IeCenterGeoFencePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_ie_center_geo_fence_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ie-center-geo-fence.page.html */
      83526);
      /* harmony import */


      var _ie_center_geo_fence_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ie-center-geo-fence.page.scss */
      49407);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/cwsn.service */
      20210);

      var _IeCenterGeoFencePage = /*#__PURE__*/function () {
        function IeCenterGeoFencePage(router, alertService, geolocation, emisService, userSessionService, ionicstorage, http, cwsnService) {
          _classCallCheck(this, IeCenterGeoFencePage);

          this.router = router;
          this.alertService = alertService;
          this.geolocation = geolocation;
          this.emisService = emisService;
          this.userSessionService = userSessionService;
          this.ionicstorage = ionicstorage;
          this.http = http;
          this.cwsnService = cwsnService;
          this.ieCentrList = [];
          this.selcedSchIdx = 0;
          this.schDetails = {};
          this.staffDetails = {};
          this.showSchDetails = false;
          this.currOtp = '';
          this.searchText = '';
          this.currKm = '';
          this.userLantLng = '';
          this.schStdList = [];
          this.flag = '';
        }

        return _createClass(IeCenterGeoFencePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getUserDetails();
          }
        }, {
          key: "getieCntrList",
          value: function getieCntrList(flag) {
            var _this = this;

            debugger;
            this.flag = flag;
            this.showSchDetails = false;
            var obj = {
              userId: this.userSessionService.emis_username(),
              blkId: this.userSessionService.BlkdId(),
              flag: flag
            };
            this.emisService.IECntrMapList(obj).subscribe(function (res) {
              if (res.dataStatus) {
                _this.ieCentrList = [];
                _this.ieCentrList = res.result;
              } else {
                _this.ieCentrList = [];

                _this.alertService.warning(res.message);
              }
            }, function (error) {
              _this.ieCentrList = [];

              _this.alertService.warning("There is some error");
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            if (this.showSchDetails) {
              this.showSchDetails = false;
            } else {
              this.router.navigate(['/tabs/home']);
            }
          }
        }, {
          key: "arrowChange",
          value: function arrowChange(sts, index) {
            if (!this.ieCentrList[index].otpSub) {
              this.ieCentrList[index].arrowSts = sts == 'down' ? 'down' : 'forward';
            } else {
              this.alertService.warning('Attendance Marked');
            }
          }
        }, {
          key: "onTriggerOtp",
          value: function onTriggerOtp(data, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (this.currKm <= 0.5) {
                      this.ieCentrList[index].isOtpTrged = true;
                      this.schDetails.isOtpTrged = true;
                      this.triggerOtp();
                    } else {
                      this.alertService.warning("The selected School is more than half(0.5)km, the km is : " + this.currKm + "");
                    }

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "compareLatLng",
          value: function compareLatLng(data, type) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.currOtp = '';
                    _context2.n = 1;
                    return this.getUserGetLatLng();

                  case 1:
                    this.userLantLng = _context2.v;
                    this.currKm = (this.getDistanceFromLatLonInKm(this.userLantLng.latitude, this.userLantLng.longitude, data.Latt, data.Longg) * 100 / 100).toFixed(3);

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this2 = this;

              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.geolocation.getCurrentPosition({
                      enableHighAccuracy: true,
                      timeout: 10000,
                      maximumAge: 0
                    }).then(function (resp) {
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
                        return _regenerator().w(function (_context3) {
                          while (1) switch (_context3.n) {
                            case 0:
                              return _context3.a(2, resp.coords);
                          }
                        }, _callee3);
                      }));
                    })["catch"](function (error) {
                      return {};
                    });

                  case 1:
                    return _context4.a(2, _context4.v);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "selectedSch",
          value: function selectedSch(val) {
            debugger;
            this.resetAll();
            this.schDetails = val;
            this.compareLatLng(val, 1);

            if (this.currKm <= 0.5) {
              if (!val.IndexId) {
                this.submitGeoFen();
              } else {
                this.gotoStdListPage(this.schDetails);
              }
            }
          }
        }, {
          key: "triggerOtp",
          value: function triggerOtp() {
            var _this3 = this;

            var otpPurposrId = 13;
            var data = {
              "records": {
                "studentDetails": {
                  "otp_purpose_id": otpPurposrId,
                  "triggered_by_username": this.userSessionService.emis_username(),
                  "triggered_by_usertype": this.userSessionService.emis_usertype(),
                  "triggered_for_username": this.staffDetails.TcherId,
                  "triggered_for_usertype": this.flag == 1 ? 2 : 3,
                  "triggered_for_name": this.staffDetails.TcherId,
                  "triggered_schoolname": ''
                },
                "otpTemplate": {
                  "TemplateId": "1707171506384943024",
                  "MobileNo": this.staffDetails.MobileNumber,
                  "TemplateMsg": "உங்கள் மொபைல் எண்ணைச் சரிபார்க்க OTP {#var#} ஐப் பயன்படுத்தவும் - தமிழ்நாடு பள்ளிக் கல்வித் துறை",
                  "var": {
                    "var1": ""
                  }
                }
              }
            };
            this.emisService.cmanOtpSend(data).subscribe(function (res) {
              if (res === null || res === void 0 ? void 0 : res.dataStatus) {
                _this3.alertService.success('OTP Send Successfully');
              } else {
                _this3.alertService.warning(res.message);
              }
            });
          }
        }, {
          key: "submitOtp",
          value: function submitOtp() {
            var _this4 = this;

            var obj = {
              "OTP": this.currOtp,
              // "UsrId": this.staffDetails.MobileNumber
              "UsrId": this.staffDetails.TcherId
            };
            this.emisService.mobileVerifyOtpSubmit(obj).subscribe(function (res) {
              if (res.dataStatus) {
                _this4.submitGeoFen();
              } else {
                _this4.alertService.warning(res.message);
              }
            }, function (error) {
              _this4.alertService.warning('There is some error while submit OTP');
            });
          }
        }, {
          key: "submitGeoFen",
          value: function submitGeoFen() {
            var _this5 = this;

            // if (this.currOtp) {
            var obj = {
              "records": {
                "IndexId": this.schDetails.IndexId,
                "UserId": this.userSessionService.emis_username(),
                "SchoolId": this.schDetails.cntrId,
                "HmTcherId": "0",
                "MobileNumber": "0",
                // "OtpTrigger": this.currOtp, 
                "OtpTrigger": "0",
                "Sts": "1",
                "module": this.flag
              }
            };
            this.emisService.GeoFencingStsCUD(obj).subscribe(function (res) {
              if (res.dataStatus) {
                _this5.alertService.success(res.message); // this.ieCentrList[this.selcedSchIdx].IndexId = res.IndxID;


                _this5.gotoStdListPage(_this5.schDetails);

                _this5.resetAll();
              } else {
                _this5.alertService.warning(res.message);
              }
            }, function (error) {
              _this5.alertService.warning('Error while submit data');
            }); // } else {
            //   this.alertService.warning('Enter valid verification code');
            // }
          }
        }, {
          key: "resetAll",
          value: function resetAll() {
            this.currOtp = '';
            this.userLantLng = '';
            this.currKm = '';
            this.showSchDetails = false;
            this.staffDetails = '';
            this.schDetails = {};
          }
        }, {
          key: "teacherChange",
          value: function teacherChange(event) {
            this.ieCentrList[this.selcedSchIdx].otp = '';
          }
        }, {
          key: "gotoStdListPage",
          value: function gotoStdListPage(center) {
            center.flag = this.flag;
            this.router.navigate(['/tabs/ie-std-list-attendance'], {
              queryParams: {
                'data': JSON.stringify(center)
              }
            });
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this6 = this;

            this.ionicstorage.getData('getUserDetailsCwsn').then(function (data) {
              if (data) {
                _this6.getieCntrList(data);
              }
            });
          }
        }]);
      }();

      _IeCenterGeoFencePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: src_app_services_cwsn_service__WEBPACK_IMPORTED_MODULE_7__.CWSNService
        }];
      };

      _IeCenterGeoFencePage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-ie-center-geo-fence',
        template: _raw_loader_ie_center_geo_fence_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ie_center_geo_fence_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _IeCenterGeoFencePage);
      /***/
    },

    /***/
    49407:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/geo-fence/ie-center-geo-fence/ie-center-geo-fence.page.scss ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: #fff;\n}\n\n.card-align {\n  margin: 0;\n}\n\n.card-align .cards {\n  padding: 10px;\n}\n\n.card-align .cards .cluster-design {\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n  border-left: 5px solid #b14fdc;\n  border-radius: 15px;\n  padding: 10px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background: #b14fdc;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: #fff;\n}\n\n.grn {\n  background-color: rgba(0, 128, 0, 0.562);\n  color: white;\n}\n\n.card-expand {\n  margin-top: 15px;\n}\n\n.bt-g {\n  border-top: 1px solid #80808085;\n}\n\n.customInput {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 5px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 100%;\n}\n\n.cuslabel {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImllLWNlbnRlci1nZW8tZmVuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFRTtFQUNFLCtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtBQUNKOztBQUNJO0VBQ0UsYUFBQTtBQUNOOztBQUFNO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFBUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRVY7O0FBQVE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRVY7O0FBRFU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7O0FBSUU7RUFDRSx3Q0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUVFLGdCQUFBO0FBRko7O0FBS0E7RUFDSSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtFO0VBQ0UsK0JBQUE7QUFGSiIsImZpbGUiOiJpZS1jZW50ZXItZ2VvLWZlbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVjYXJkLWxheW91dHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0U2RERFQjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1hbGlnbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIEBleHRlbmQgJWNhcmQtbGF5b3V0O1xyXG4gICAgLmNhcmRze1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAuY2x1c3Rlci1kZXNpZ257XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNiMTRmZGM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgIC8vIG1hcmdpbjogMTZweDtcclxuICAgICAgICAuY2x1c3Rlci10ZXh0e1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uLW91dGVye1xyXG4gICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2IxNGZkYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgLmljb24taW5uZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZ3JuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjU2Mik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1leHBhbmQge1xyXG4gICAgLy8gdHJhbnNpdGlvbjogMXM7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICBcclxuLmJ0LWcge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM4MDgwODA4NTtcclxufVxyXG5cclxuICAuY3VzdG9tSW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGF5LWNvbG9yLWNoYW5nZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jdXNsYWJlbCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    83526:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geo-fence/ie-center-geo-fence/ie-center-geo-fence.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">IE Center</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"!showSchDetails\" class=\"p-3\">\r\n    <ion-card class=\"card-align mt-2\">\r\n      <div class=\"cards\">\r\n        <ng-container *ngFor=\"let item of ieCentrList;let i=index;\">\r\n          <ion-card class=\"cluster-design\" [class.grn]=\"item.IndexId\" (click)=\"selectedSch(item)\">\r\n            <div class=\"cluster-text\">\r\n              <span>{{ item.cntrName }}</span>\r\n              <div class=\"icon-outer\">\r\n                <ion-icon class=\"icon-inner\" name=\"arrow-forward-outline\"></ion-icon>\r\n              </div>\r\n            </div>\r\n          </ion-card>\r\n        </ng-container>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div *ngIf=\"showSchDetails\" class=\"p-3\">\r\n    <ion-card class=\"card-align\">\r\n      <div class=\"schDetails p-3\">\r\n        <div class=\"\">\r\n          <div>\r\n            <ion-label class=\"bold cuslabel\"> Center Id\r\n            </ion-label>\r\n          </div>\r\n          <div class=\"mt-1\">\r\n            <input class=\"customInput p-2 col-12\" type=\"text\" value=\"{{schDetails.cntrId}}\" disabled>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-2\">\r\n          <div>\r\n            <ion-label class=\"bold cuslabel\"> Center Name\r\n            </ion-label>\r\n          </div>\r\n          <div class=\"mt-1\">\r\n            <input class=\"customInput p-2 col-12\" type=\"text\" value=\"{{schDetails.cntrName}}\" disabled>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-card>\r\n    <ion-card class=\"card-align mt-3\" *ngIf=\"currKm > 1 && currKm\">\r\n      <div class=\"p-3\">\r\n        <h6><span class=\"text-danger\">Note: </span> You are {{currKm}} km away from this school, within 1km you are\r\n          able to send verification code</h6>\r\n      </div>\r\n    </ion-card>\r\n    <!-- <div *ngIf=\"showSchDetails && staffDetails\">\r\n      <ion-card class=\"card-align mt-3\" *ngIf=\"currKm <= 1 && currKm\">\r\n        <div class=\"p-3\">\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\"> Send Verification Code\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <ion-button size=\"small\" color=\"tertiary\" (click)=\"onTriggerOtp(schDetails,selcedSchIdx)\">\r\n                <span *ngIf=\"schDetails.isOtpTrged\">Resend</span>\r\n                <span *ngIf=\"!schDetails.isOtpTrged\">Send</span>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\"> Enter Verification\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <input class=\"customInput p-2 col-12\" type=\"text\" [(ngModel)]=\"currOtp\">\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2 text-center\">\r\n            <ion-button color=\"tertiary\" (click)=\"submitOtp()\">Submit</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n    </div> -->\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_geo-fence_ie-center-geo-fence_ie-center-geo-fence_module_ts-es5.js.map