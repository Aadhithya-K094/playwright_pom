(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_geo-fence_smc-geo-fence_smc-geo-fence_module_ts"], {
    /***/
    68016:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/geo-fence/smc-geo-fence/smc-geo-fence-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmcGeoFencePageRoutingModule": function SmcGeoFencePageRoutingModule() {
          return (
            /* binding */
            _SmcGeoFencePageRoutingModule
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


      var _smc_geo_fence_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./smc-geo-fence.page */
      84734);

      var routes = [{
        path: '',
        component: _smc_geo_fence_page__WEBPACK_IMPORTED_MODULE_0__.SmcGeoFencePage
      }];

      var _SmcGeoFencePageRoutingModule = /*#__PURE__*/_createClass(function SmcGeoFencePageRoutingModule() {
        _classCallCheck(this, SmcGeoFencePageRoutingModule);
      });

      _SmcGeoFencePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SmcGeoFencePageRoutingModule);
      /***/
    },

    /***/
    17624:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/geo-fence/smc-geo-fence/smc-geo-fence.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmcGeoFencePageModule": function SmcGeoFencePageModule() {
          return (
            /* binding */
            _SmcGeoFencePageModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _smc_geo_fence_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./smc-geo-fence-routing.module */
      68016);
      /* harmony import */


      var _smc_geo_fence_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./smc-geo-fence.page */
      84734);
      /* harmony import */


      var src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/components/shared.module */
      30881);

      var _SmcGeoFencePageModule = /*#__PURE__*/_createClass(function SmcGeoFencePageModule() {
        _classCallCheck(this, SmcGeoFencePageModule);
      });

      _SmcGeoFencePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _smc_geo_fence_routing_module__WEBPACK_IMPORTED_MODULE_0__.SmcGeoFencePageRoutingModule, src_app_components_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        declarations: [_smc_geo_fence_page__WEBPACK_IMPORTED_MODULE_1__.SmcGeoFencePage]
      })], _SmcGeoFencePageModule);
      /***/
    },

    /***/
    84734:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/geo-fence/smc-geo-fence/smc-geo-fence.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmcGeoFencePage": function SmcGeoFencePage() {
          return (
            /* binding */
            _SmcGeoFencePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_smc_geo_fence_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./smc-geo-fence.page.html */
      5189);
      /* harmony import */


      var _smc_geo_fence_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./smc-geo-fence.page.scss */
      13108);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _SmcGeoFencePage = /*#__PURE__*/function () {
        function SmcGeoFencePage(router, alertService, geolocation, emisService, userSessionService) {
          _classCallCheck(this, SmcGeoFencePage);

          this.router = router;
          this.alertService = alertService;
          this.geolocation = geolocation;
          this.emisService = emisService;
          this.userSessionService = userSessionService;
          this.schList = [];
          this.selcedSchIdx = 0;
          this.schDetails = {};
          this.staffDetails = {};
          this.showSchDetails = false;
          this.currOtp = '';
          this.searchText = '';
          this.currKm = '';
          this.userLantLng = '';
          this.staffList = [];
        }

        return _createClass(SmcGeoFencePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getSchList();
          }
        }, {
          key: "getSchList",
          value: function getSchList() {
            var _this = this;

            this.showSchDetails = false;
            var obj = {
              username: this.userSessionService.emis_username(),
              usertype: this.userSessionService.emis_usertype()
            };
            this.emisService.UserSchlMapList(obj).subscribe(function (res) {
              if (res.dataStatus) {
                _this.schList = [];
                res.result.forEach(function (obj) {
                  var index = _this.schList.findIndex(function (a) {
                    return a.SchlId == obj.SchlId;
                  });

                  if (index != -1) {
                    _this.schList[index].staffList.push(obj);
                  } else {
                    var schDetails = {
                      IndexId: obj.IndexId,
                      SchlId: obj.SchlId,
                      SchlName: obj.SchlName,
                      Udise: obj.Udise,
                      Latt: obj.Latt,
                      Longg: obj.Longg,
                      OtpTrigger: obj.OtpTrigger,
                      Sts: obj.Sts,
                      Date: obj.Date,
                      staffList: [obj]
                    };

                    _this.schList.push(schDetails);
                  }

                  ;
                }); // this.schList = res.result;
              } else {
                _this.schList = [];

                _this.alertService.warning(res.message);
              }
            }, function (error) {
              _this.schList = [];

              _this.alertService.warning("There is some error");
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            if (this.showSchDetails) {
              this.showSchDetails = false;
            } else {
              this.router.navigate(['/tabs/geo-fence-dashboard']);
            }
          }
        }, {
          key: "arrowChange",
          value: function arrowChange(sts, index) {
            if (!this.schList[index].otpSub) {
              this.schList[index].arrowSts = sts == 'down' ? 'down' : 'forward';
            } else {
              this.alertService.warning('Attendance Marked');
            }
          }
        }, {
          key: "onTriggerOtp",
          value: function onTriggerOtp(data, index) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (this.currKm <= 1) {
                      this.schList[index].isOtpTrged = true;
                      this.schDetails.isOtpTrged = true;
                      this.triggerOtp();
                    } else {
                      this.alertService.warning("The selected School is more than 1km, the km is : " + this.currKm + "");
                    }

                  case 1:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "compareLatLng",
          value: function compareLatLng(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (!data.MobileNumber) {
                      _context2.n = 2;
                      break;
                    }

                    this.currOtp = '';
                    _context2.n = 1;
                    return this.getUserGetLatLng();

                  case 1:
                    this.userLantLng = _context2.v;
                    this.currKm = (this.getDistanceFromLatLonInKm(this.userLantLng.latitude, this.userLantLng.longitude, data.Latt, data.Longg) * 100 / 100).toFixed(3);
                    _context2.n = 3;
                    break;

                  case 2:
                    this.alertService.warning('Mobile number is invalid');

                  case 3:
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
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
                      return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
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
            this.resetAll();

            if (!val.IndexId) {
              var idx = this.schList.findIndex(function (x) {
                return x.SchlId == val.SchlId;
              });

              if (idx != -1) {
                this.staffList = val.staffList.filter(function (obj) {
                  return obj.MobileNumber;
                });
                this.schDetails = val;
                this.showSchDetails = true;
                this.selcedSchIdx = idx;
              } else {
                this.alertService.warning('School not found');
              }
            } else {
              this.alertService.warning('Attendance marked');
            }
          }
        }, {
          key: "triggerOtp",
          value: function triggerOtp() {
            var _this3 = this;

            debugger;
            var otpPurposrId = 11;
            var data = {
              "records": {
                "studentDetails": {
                  "otp_purpose_id": otpPurposrId,
                  "triggered_by_username": this.userSessionService.emis_username(),
                  "triggered_by_usertype": this.userSessionService.emis_usertype(),
                  "triggered_for_username": this.schDetails.Udise,
                  "triggered_for_usertype": 8,
                  "triggered_for_name": this.staffDetails.TcherId,
                  "triggered_schoolname": ''
                },
                "otpTemplate": {
                  "TemplateId": "1707163033685378848",
                  "MobileNo": this.staffDetails.MobileNumber,
                  "TemplateMsg": "உங்கள் மகனுக்கு / மகளுக்கு  {#var#} பள்ளியில் சேர்க்கைக்கு விண்ணப்பம் EMIS மூலம் கொடுக்கப்பட்டுள்ளது. மாணவரின் சேர்க்கையினை உறுதி செய்ய, அந்தப் பள்ளி தலைமை ஆசிரியரை அணுகி {#var#} என்ற OTP எண்ணை 3 நாட்களுக்குள் தெரியப்படுத்தவும்.",
                  "var": {
                    "var1": this.staffDetails.SchlName.slice(0, 30),
                    "var2": ''
                  }
                }
              }
            };
            this.emisService.sendOtptoParent(data).subscribe(function (res) {
              if (res.dataStatus) {
                if (res.result) {
                  _this3.schList[_this3.selcedSchIdx].otp = res.result[0].otp;
                }

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

            if (this.currOtp == this.schList[this.selcedSchIdx].otp) {
              var obj = {
                "records": {
                  "IndexId": this.schList[this.selcedSchIdx].IndexId,
                  "UserId": this.userSessionService.emis_username(),
                  "SchoolId": this.schDetails.SchlId,
                  "HmTcherId": this.staffDetails.TcherId,
                  "MobileNumber": this.staffDetails.MobileNumber,
                  "OtpTrigger": this.currOtp,
                  "Sts": "1"
                }
              };
              this.emisService.GeoFencingStsCUD(obj).subscribe(function (res) {
                if (res.dataStatus) {
                  _this4.alertService.success(res.message);

                  _this4.schList[_this4.selcedSchIdx].IndexId = res.IndxID;

                  _this4.resetAll();
                } else {
                  _this4.alertService.warning(res.message);
                }
              }, function (error) {
                _this4.alertService.warning('Error while submit data');
              });
            } else {
              this.alertService.warning('Enter valid verification code');
            }
          }
        }, {
          key: "resetAll",
          value: function resetAll() {
            this.currOtp = '';
            this.userLantLng = '';
            this.currKm = '';
            this.showSchDetails = false;
            this.staffDetails = '';
            this.staffList = [];
            this.schDetails = {};
          }
        }, {
          key: "teacherChange",
          value: function teacherChange(event) {
            this.schList[this.selcedSchIdx].otp = '';
          }
        }]);
      }();

      _SmcGeoFencePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_4__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }];
      };

      _SmcGeoFencePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-smc-geo-fence',
        template: _raw_loader_smc_geo_fence_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('fadeInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0,
          transform: 'rotate(280deg)'
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('800ms', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 1,
          transform: 'rotate(360deg)'
        }))])])],
        styles: [_smc_geo_fence_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      }) // ,
      //       transition(':leave', [
      //         animate('100ms', style({ opacity: 0 ,transform: 'rotate(0deg)'}))
      //       ])
      ], _SmcGeoFencePage);
      /***/
    },

    /***/
    13108:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/geo-fence/smc-geo-fence/smc-geo-fence.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card-align {\n  border-radius: 10px;\n}\n\nion-content {\n  --ion-background-color: #E6DDEB;\n}\n\nion-card {\n  background: #fff;\n}\n\n.card-align {\n  margin: 0;\n}\n\n.card-align .cards {\n  padding: 10px;\n}\n\n.card-align .cards .cluster-design {\n  border-top-left-radius: 15px !important;\n  border-bottom-left-radius: 15px !important;\n  border-left: 5px solid #b14fdc;\n  border-radius: 15px;\n  padding: 10px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.card-align .cards .cluster-design .cluster-text {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-align .cards .cluster-design .icon-outer {\n  padding: 3px;\n  background: #b14fdc;\n  border-radius: 50%;\n  line-height: 16px;\n}\n\n.card-align .cards .cluster-design .icon-outer .icon-inner {\n  margin-bottom: -2px;\n  font-size: 16px;\n  color: #fff;\n}\n\n.grn {\n  background-color: rgba(0, 128, 0, 0.562);\n  color: white;\n}\n\n.card-expand {\n  margin-top: 15px;\n}\n\n.customInput {\n  border: 1px solid var(--primary-text-color);\n  border-radius: 5px;\n  background-color: var(--seconday-color-change);\n  color: var(--primary-text-color);\n  padding: 10px;\n  width: 100%;\n}\n\n.cuslabel {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYy1nZW8tZmVuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFRTtFQUNFLCtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtBQUNKOztBQUNJO0VBQ0UsYUFBQTtBQUNOOztBQUFNO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFBUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRVY7O0FBQVE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRVY7O0FBRFU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7O0FBSUU7RUFDRSx3Q0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUVFLGdCQUFBO0FBRko7O0FBS0U7RUFDRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUZKIiwiZmlsZSI6InNtYy1nZW8tZmVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJWNhcmQtbGF5b3V0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRTZEREVCO1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWFsaWdue1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgQGV4dGVuZCAlY2FyZC1sYXlvdXQ7XHJcbiAgICAuY2FyZHN7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIC5jbHVzdGVyLWRlc2lnbntcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2IxNGZkYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgLy8gbWFyZ2luOiAxNnB4O1xyXG4gICAgICAgIC5jbHVzdGVyLXRleHR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24tb3V0ZXJ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjE0ZmRjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAuaWNvbi1pbm5lcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ncm4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNTYyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWV4cGFuZCB7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiAxcztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b21JbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXktY29sb3ItY2hhbmdlKTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmN1c2xhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    5189:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geo-fence/smc-geo-fence/smc-geo-fence.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">SMC Geo Fence</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngIf=\"!showSchDetails\" class=\"p-3\">\r\n    <ion-item class=\"customInput\">\r\n      <ion-input class=\"col-12\"\r\n      placeholder=\"Search School\" [(ngModel)]=\"searchText\" autocomplete=\"off\">\r\n    </ion-input>\r\n    <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n    </ion-item>\r\n    <ion-card class=\"card-align mt-2\">\r\n      <div class=\"cards\" >\r\n        <ng-container *ngFor=\"let item of schList | searchall:searchText;let i=index;\">\r\n          <ion-card class=\"cluster-design\" [class.grn]=\"item.IndexId\">\r\n            <div class=\"cluster-text\">\r\n              <span>{{ item.SchlName }}</span>\r\n              <div class=\"icon-outer\">\r\n                <ion-icon class=\"icon-inner\" name=\"arrow-forward-outline\" (click)=\"selectedSch(item)\"></ion-icon>\r\n              </div>\r\n            </div>\r\n          </ion-card>\r\n        </ng-container>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  <div *ngIf=\"showSchDetails\" class=\"p-3\" >\r\n    <ion-card class=\"card-align\">\r\n      <div class=\"schDetails p-3\">\r\n          <div class=\"\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\"> UDISE\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <input class=\"customInput p-2 col-12\" type=\"text\" value=\"{{schDetails.Udise}}\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\"> School Name\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <input class=\"customInput p-2 col-12\" type=\"text\" value=\"{{schDetails.SchlName}}\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\">Select Staff\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <ion-select (ionChange)=\"teacherChange($event)\" [(ngModel)]=\"staffDetails\" class=\"customInput p-2 col-12\" ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select Staff\">\r\n                <ion-select-option [value]=\"item\" *ngFor=\"let item of staffList\"> {{item.Name}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\" *ngIf=\"staffDetails\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\">Staff Designation\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <input class=\"customInput p-2 col-12\" type=\"text\" value=\"{{staffDetails.typeName}}\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\" *ngIf=\"staffDetails\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\">Phone Number\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <input class=\"customInput p-2 col-12\" type=\"text\" value=\"{{staffDetails.MobileNumber}}\" disabled>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2 d-flex justify-content-between align-items-center\" *ngIf=\"staffDetails\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\"> Get Current Location\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <ion-button size=\"small\" color=\"tertiary\" (click)=\"compareLatLng(staffDetails)\">\r\n                Get\r\n              </ion-button>\r\n            </div>\r\n            </div>\r\n      </div>\r\n    </ion-card>\r\n    <div *ngIf=\"showSchDetails && staffDetails\">\r\n      <ion-card class=\"card-align mt-3\" *ngIf=\"currKm > 1 && currKm\" >\r\n        <div class=\"p-3\">\r\n          <h6><span class=\"text-danger\">Note: </span> You are {{currKm}}km away from this school, within 1km you are able to send verification code</h6>\r\n        </div>\r\n      </ion-card>\r\n      <ion-card class=\"card-align mt-3\" *ngIf=\"currKm <= 1 && currKm\" >\r\n        <div class=\"p-3\">\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\"> Send Verification Code\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <ion-button size=\"small\" color=\"tertiary\" (click)=\"onTriggerOtp(schDetails,selcedSchIdx)\">\r\n                <span *ngIf=\"schDetails.isOtpTrged\">Resend</span>\r\n                <span *ngIf=\"!schDetails.isOtpTrged\">Send</span>\r\n              </ion-button>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2\">\r\n            <div>\r\n              <ion-label class=\"bold cuslabel\"> Enter Verification\r\n              </ion-label>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n              <input class=\"customInput p-2 col-12\" type=\"text\" [(ngModel)]=\"currOtp\">\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-2 text-center\">\r\n            <ion-button color=\"tertiary\" (click)=\"submitOtp()\">Submit</ion-button>\r\n          </div>\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_geo-fence_smc-geo-fence_smc-geo-fence_module_ts-es5.js.map