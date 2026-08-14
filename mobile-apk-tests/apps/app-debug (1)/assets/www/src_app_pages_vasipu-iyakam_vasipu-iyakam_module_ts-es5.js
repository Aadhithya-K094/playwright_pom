(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipu-iyakam_module_ts"], {
    /***/
    54371:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuIyakamPageRoutingModule": function VasipuIyakamPageRoutingModule() {
          return (
            /* binding */
            _VasipuIyakamPageRoutingModule
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


      var _vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipu-iyakam.page */
      68035);

      var routes = [{
        path: '',
        component: _vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_0__.VasipuIyakamPage
      }, {
        path: 'vi-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vasipu-iyakam_vasipuiyakamprofile_vasipuiyakamprofile_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./vasipuiyakamprofile/vasipuiyakamprofile.module */
          8681)).then(function (m) {
            return m.VasipuiyakamprofilePageModule;
          });
        }
      }, {
        path: 'vi-library',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vasipu-iyakam_vasipuiyakamlibrary_vasipuiyakamlibrary_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./vasipuiyakamlibrary/vasipuiyakamlibrary.module */
          63628)).then(function (m) {
            return m.VasipuiyakamlibraryPageModule;
          });
        }
      }, {
        path: 'vi-otp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vasipu-iyakam_vasipuotp_vasipuotp_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./vasipuotp/vasipuotp.module */
          88910)).then(function (m) {
            return m.VasipuotpPageModule;
          });
        }
      }, {
        path: 'vi-session',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_vasipu-iyakam_instruction_instruction_page_ts"), __webpack_require__.e("src_app_pages_vasipu-iyakam_vasipuiyakamsession_vasipuiyakamsession_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./vasipuiyakamsession/vasipuiyakamsession.module */
          65266)).then(function (m) {
            return m.VasipuiyakamsessionPageModule;
          });
        }
      }, {
        path: 'vi-classlist',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vasipu-iyakam_vasipuclasslist_vasipuclasslist_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./vasipuclasslist/vasipuclasslist.module */
          32055)).then(function (m) {
            return m.VasipuclasslistPageModule;
          });
        }
      }, {
        path: 'vi-photoupload',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vasipu-iyakam_photoupload_photoupload_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./photoupload/photoupload.module */
          17464)).then(function (m) {
            return m.PhotouploadPageModule;
          });
        }
      }, {
        path: 'vi-instruction',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_pages_vasipu-iyakam_instruction_instruction_page_ts"), __webpack_require__.e("src_app_pages_vasipu-iyakam_instruction_instruction_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./instruction/instruction.module */
          7101)).then(function (m) {
            return m.InstructionPageModule;
          });
        }
      }, {
        path: 'vasipuiyakam-report',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_vasipu-iyakam_vasipuiyakam-report_vasipuiyakam-report_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./vasipuiyakam-report/vasipuiyakam-report.module */
          19068)).then(function (m) {
            return m.VasipuiyakamReportPageModule;
          });
        }
      }];

      var _VasipuIyakamPageRoutingModule = /*#__PURE__*/_createClass(function VasipuIyakamPageRoutingModule() {
        _classCallCheck(this, VasipuIyakamPageRoutingModule);
      });

      _VasipuIyakamPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VasipuIyakamPageRoutingModule);
      /***/
    },

    /***/
    56575:
    /*!*************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuIyakamPageModule": function VasipuIyakamPageModule() {
          return (
            /* binding */
            _VasipuIyakamPageModule
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


      var _vasipu_iyakam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipu-iyakam-routing.module */
      54371);
      /* harmony import */


      var _vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipu-iyakam.page */
      68035);

      var _VasipuIyakamPageModule = /*#__PURE__*/_createClass(function VasipuIyakamPageModule() {
        _classCallCheck(this, VasipuIyakamPageModule);
      });

      _VasipuIyakamPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _vasipu_iyakam_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuIyakamPageRoutingModule],
        declarations: [_vasipu_iyakam_page__WEBPACK_IMPORTED_MODULE_1__.VasipuIyakamPage]
      })], _VasipuIyakamPageModule);
      /***/
    },

    /***/
    68035:
    /*!***********************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam.page.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuIyakamPage": function VasipuIyakamPage() {
          return (
            /* binding */
            _VasipuIyakamPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_vasipu_iyakam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vasipu-iyakam.page.html */
      8310);
      /* harmony import */


      var _vasipu_iyakam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipu-iyakam.page.scss */
      88723);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);

      var _VasipuIyakamPage = /*#__PURE__*/function () {
        function VasipuIyakamPage(router, userService, navCtrl, usersessionService, sqliteDB, alertController, alertCtrl, loading) {
          _classCallCheck(this, VasipuIyakamPage);

          this.router = router;
          this.userService = userService;
          this.navCtrl = navCtrl;
          this.usersessionService = usersessionService;
          this.sqliteDB = sqliteDB;
          this.alertController = alertController;
          this.alertCtrl = alertCtrl;
          this.loading = loading;
          this.saveData = [];
          this.sessionEmisUsertype = this.usersessionService.emis_usertype();
          this.emis_username = this.usersessionService.emis_username();
        }

        return _createClass(VasipuIyakamPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "profile",
          value: function profile() {
            this.loading.show();
            this.router.navigate(['/tabs/vasipu-iyakam/vi-profile']);
          }
        }, {
          key: "report",
          value: function report() {
            this.loading.show();
            this.router.navigate(['/tabs/vasipu-iyakam/vasipuiyakam-report']);
          }
        }, {
          key: "library",
          value: function library() {
            this.loading.show();
            this.router.navigate(['/tabs/vasipu-iyakam/vi-library'], {
              queryParams: {
                "CycleId": this.CycleId,
                "InsertClsSec": this.InsertClsSec,
                "TotalClsSec": this.TotalClsSec
              }
            }); // this.router.navigate(['/tabs/vasipu-iyakam/vi-library']);
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "localJSONDetails",
          value: function localJSONDetails() {
            var _this = this;

            var query = 'SELECT * FROM VIClassData' + ' WHERE UserId = "' + this.emis_username + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.classJsonData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this.classJsonData.push(data.rows.item(i));
                }

                _this.InsertClsSec = _this.totalsecData[0].InsertClsSec; // console.log(this.totalsecData, this.totalsecData[0].InsertClsSec, this.classJsonData, this.classJsonData.length);

                if (parseInt(_this.totalsecData[0].TotalClsSec) <= _this.classJsonData.length) {
                  console.log("delete");

                  _this.deleteQuery();
                } else {
                  _this.library();
                }
              } else {
                console.log(_this.classJsonData, "No Data");

                _this.library();
              }
            });
          }
        }, {
          key: "localTotalDetails",
          value: function localTotalDetails() {
            var _this2 = this;

            var query = 'SELECT * FROM VIStatusClsSecData' + ' WHERE UserId = "' + this.emis_username + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this2.localJSONDetails();

                _this2.totalsecData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this2.totalsecData.push(data.rows.item(i));
                } // console.log(this.totalsecData, "this.totalsecData");


                _this2.InsertClsSec = _this2.totalsecData[0].InsertClsSec;

                if (_this2.totalsecData[0].CycleId == null) {
                  _this2.CycleId = 1;
                } else {
                  _this2.CycleId = _this2.totalsecData[0].CycleId;
                }

                _this2.TotalClsSec = _this2.totalsecData[0].TotalClsSec;
              } else {
                _this2.InsertClsSec = 0;
                _this2.CycleId = 1;

                _this2.library(); // console.log(this.classJsonData, "this.totalsecData No Data");

              }
            });
          }
        }, {
          key: "deleteQuery",
          value: function deleteQuery() {
            var _this3 = this;

            this.saveData = [];
            var query = 'SELECT * FROM VasipuIStatusDetail';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this3.saveData.push(data.rows.item(i));
                }

                var filter = _this3.saveData.filter(function (item) {
                  return item.status == 2;
                });

                var filter1 = _this3.saveData.filter(function (item) {
                  return item.status != 3;
                });

                if (filter1.length == 0) {
                  if (filter.length != 0) {
                    _this3.schoolAlert();
                  } else {
                    _this3["delete"]();
                  }
                } else {
                  if (filter.length != 0) {
                    _this3.schoolAlert();
                  } else {
                    _this3.library();
                  }
                }
              } else {
                _this3["delete"]();
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this4 = this;

            var deleteQuery1 = 'DELETE FROM VIStatusbatchDatas WHERE userid = ' + this.emis_username;
            var deleteQuery2 = 'DELETE FROM VIClassData WHERE UserId =' + this.emis_username;
            var deleteQuery3 = 'DELETE FROM VasipuIStatusDetail';
            var deleteQuery4 = 'DELETE FROM VIBatchData';
            var deleteQuery5 = 'DELETE FROM VIStatusClsSecData';
            var deleteQuery6 = 'DELETE FROM VIStudenData';
            this.sqliteDB.executeQuery(deleteQuery1).then(function (result1) {
              _this4.sqliteDB.executeQuery(deleteQuery2).then(function (result2) {
                _this4.sqliteDB.executeQuery(deleteQuery3).then(function (result3) {
                  _this4.sqliteDB.executeQuery(deleteQuery4).then(function (result3) {
                    _this4.sqliteDB.executeQuery(deleteQuery5).then(function (result3) {
                      _this4.sqliteDB.executeQuery(deleteQuery6).then(function (result3) {
                        // console.log(result1, "result");
                        _this4.library();
                      });
                    });
                  });
                });
              });
            });
          } //pop

        }, {
          key: "schoolAlert",
          value: function schoolAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this5 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Alert',
                      subHeader: 'Please turn on your internet',
                      message: 'அடுத்த சுற்றை துவங்க வேண்டுமெனில், உங்களின் தற்போதைய Batch தரவுகளை Server -ல் சேமிக்க வேண்டும். தயவு செய்து Internet Connection-ஐ ON செய்யவும். ',
                      buttons: [// {
                      //   text: 'Cancel',
                      //   role: 'cancel',
                      //   cssClass: 'cancel_click',
                      // },
                      {
                        cssClass: 'cancel_click',
                        text: 'OK',
                        handler: function handler(data) {
                          _this5.navigateBack();
                        }
                      }],
                      backdropDismiss: false
                    });

                  case 1:
                    alert = _context.v;
                    _context.n = 2;
                    return alert.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      _VasipuIyakamPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }];
      };

      _VasipuIyakamPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-vasipu-iyakam',
        template: _raw_loader_vasipu_iyakam_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vasipu_iyakam_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VasipuIyakamPage);
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this6 = this;

              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    this.isLoading = true;
                    _context2.n = 1;
                    return this.loadingController.create({
                      duration: 100000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this6.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context2.a(2, _context2.v);
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "show",
          value: function show(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this7 = this;

              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    this.isLoading = true;
                    _context3.n = 1;
                    return this.loadingController.create({
                      duration: 1000,
                      message: message || ''
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this7.isLoading) {
                          a.dismiss().then(function () {});
                        }
                      });
                    });

                  case 1:
                    return _context3.a(2, _context3.v);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "dismiss",
          value: function dismiss() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    this.isLoading = false;
                    _context4.n = 1;
                    return this.loadingController.dismiss().then(function () {});

                  case 1:
                    return _context4.a(2, _context4.v);
                }
              }, _callee4, this);
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
    88723:
    /*!*************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipu-iyakam.page.scss ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-menu {\n  border-right: 1px solid;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.new-menu1 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.new-menuRow {\n  padding: 5px;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  margin: 5%;\n}\n\n.menuTxt {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdS1peWFrYW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoidmFzaXB1LWl5YWthbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LW1lbnUge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubmV3LW1lbnUxIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm5ldy1tZW51Um93IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4ubWVudVR4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
      /***/
    },

    /***/
    8310:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipu-iyakam.page.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>Select Catagory - {{emis_username}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row style=\"padding: 5px;margin-left: 5%;margin-top: 1%;\">\r\n    <ion-col size=\"12\" class=\"newprimaryTex\" style=\"text-align: left;\">\r\n      <ion-label>Menus</ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"new-menuRow\">\r\n    <ion-col size=\"4\" (click)=\"profile()\" class=\"new-menu\">\r\n      <ion-row>\r\n        <img src=\"/assets/images/vasipuiyagam/profile_icon.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text menuTxt\">\r\n          <ion-label class=\"newsecondaryTex\">கருத்தாளரின் விவரம்</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" (click)=\"localTotalDetails()\" class=\"new-menu\">\r\n      <ion-row>\r\n        <img src=\"/assets/images/vasipuiyagam/library_icon.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text menuTxt\">\r\n          <ion-label class=\"newsecondaryTex\">இன்றைய வாசிப்பு இயக்கம்</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n    <ion-col size=\"4\" (click)=\"report()\" class=\"new-menu1\">\r\n      <ion-row>\r\n        <img src=\"/assets/images/vasipuiyagam/dashboard3.svg\" class=\"menu-icon\">\r\n        <ion-col size=\"12\" class=\"menu-text menuTxt\">\r\n          <ion-label class=\"newsecondaryTex\">இம்மாத வாசிப்பு இயக்கம்</ion-label>\r\n        </ion-col> \r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipu-iyakam_module_ts-es5.js.map