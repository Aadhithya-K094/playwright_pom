(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-dashboard_primary-dashboard_module_ts"], {
    /***/
    64717:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard-routing.module.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryDashboardPageRoutingModule": function PrimaryDashboardPageRoutingModule() {
          return (
            /* binding */
            _PrimaryDashboardPageRoutingModule
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


      var _primary_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-dashboard.page */
      79414);

      var routes = [{
        path: '',
        component: _primary_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryDashboardPage
      }];

      var _PrimaryDashboardPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryDashboardPageRoutingModule() {
        _classCallCheck(this, PrimaryDashboardPageRoutingModule);
      });

      _PrimaryDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimaryDashboardPageRoutingModule);
      /***/
    },

    /***/
    62311:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryDashboardPageModule": function PrimaryDashboardPageModule() {
          return (
            /* binding */
            _PrimaryDashboardPageModule
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


      var _primary_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-dashboard-routing.module */
      64717);
      /* harmony import */


      var _primary_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-dashboard.page */
      79414);

      var _PrimaryDashboardPageModule = /*#__PURE__*/_createClass(function PrimaryDashboardPageModule() {
        _classCallCheck(this, PrimaryDashboardPageModule);
      });

      _PrimaryDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryDashboardPageRoutingModule],
        declarations: [_primary_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryDashboardPage]
      })], _PrimaryDashboardPageModule);
      /***/
    },

    /***/
    79414:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.page.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryDashboardPage": function PrimaryDashboardPage() {
          return (
            /* binding */
            _PrimaryDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-dashboard.page.html */
      25837);
      /* harmony import */


      var _primary_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-dashboard.page.scss */
      64554);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _PrimaryDashboardPage = /*#__PURE__*/function () {
        function PrimaryDashboardPage(router, route, userSessionService, utilityService, sqliteDB, alertController, alertService) {
          _classCallCheck(this, PrimaryDashboardPage);

          this.router = router;
          this.route = route;
          this.userSessionService = userSessionService;
          this.utilityService = utilityService;
          this.sqliteDB = sqliteDB;
          this.alertController = alertController;
          this.alertService = alertService;
          this.menuLists = [{
            id: 1,
            menu: 'General Questions',
            image: 'assets/icons/question.svg',
            server: 'assets/icons/sids/server_general.svg',
            url: '/tabs/primary-schooldata',
            sync: 1
          }, {
            id: 2,
            menu: 'Building',
            image: 'assets/icons/Iconawesomebuilding.svg',
            server: 'assets/icons/Iconawesome-building.svg',
            url: '/tabs/primary-new-dashboard',
            sync: 1
          }, {
            id: 3,
            menu: 'Common Spaces',
            image: 'assets/icons/sids/local_commanspace.svg',
            server: 'assets/icons/sids/server_commonspace.svg',
            url: '/tabs/primary-commonspaces',
            sync: 1
          }];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US');
          this.filterGeneral = [];
        }

        return _createClass(PrimaryDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.vistId = this.routeData.queryParams.vistId;
            this.udiseCode = this.utilityService.udiseCode;
            this.visitstatus = this.routeData.visitstatus;
            this.sessionUserName = this.userSessionService.emis_username();
            this.sessionTypeName = this.userSessionService.emis_usertype();
            this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
            console.log("newSidsRoute", this.schoolId, this.vistId, this.sessionUserName, this.sessionTypeName);
            this.generalServerData();
            this.serverData();
            this.getBuilding();
            this.getFloor();
            this.getRoom();
          }
        }, {
          key: "navigateNext",
          value: function navigateNext(item) {
            if (+item.id == 3) {
              if (this.serverDataBuilding && this.serverDataFloor && this.serverDataRoom && +this.menuLists[0].sync == 3) {
                this.router.navigate([item.url], {
                  queryParams: {
                    'schoolId': this.schoolId,
                    'vistId': this.vistId,
                    'expanted': '1',
                    'visitstatus': this.visitstatus
                  },
                  skipLocationChange: false
                });
              } else {
                this.alertService.error("Please fill and sync the school and building questions");
              }
            } else {
              this.router.navigate([item.url], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '1',
                  'visitstatus': this.visitstatus
                },
                skipLocationChange: false
              });
            } // this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1', 'visitstatus':this.visitstatus }, skipLocationChange: false });

          }
        }, {
          key: "goToBack",
          value: function goToBack() {}
        }, {
          key: "serverData",
          value: function serverData() {
            var _this = this;

            debugger;
            var query = 'SELECT * FROM sidsPrimaryCommonServer' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataListData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListData.push(data.rows.item(i));
                }

                console.log('Server', dataListData);

                if (dataListData[0].Status == 3) {
                  _this.menuLists[2].sync = 3;
                  _this.serverDatas = true;
                } else {
                  _this.checkLocalDB();
                }
              } else {
                _this.serverDatas = false;
                console.log('Local');

                _this.generalQuestionServer(); // this.checkLocalDB();
                // this.getGeneralWater();

              }
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "generalServerData",
          value: function generalServerData() {
            var _this2 = this;

            debugger;
            var query = 'SELECT * FROM sidsPrimaryGeneralServer' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataListData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListData.push(data.rows.item(i));
                }

                console.log('Server general', dataListData);

                if (dataListData[0].Status == 3) {
                  _this2.generalServer = true;
                  _this2.menuLists[0].sync = 3;
                } else {
                  _this2.checkLocalDBGeneral();
                }
              } else {
                _this2.generalServer = false;
                console.log('Local general');

                _this2.serverGeneralQues();
              }
            })["catch"](function (err) {
              return console.log(err);
            });
          }
        }, {
          key: "checkLocalDB",
          value: function checkLocalDB() {
            var _this3 = this;

            var safety = 'SELECT * FROM sids_primary_safety_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var common = 'SELECT * FROM sids_primary_compoundwall_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var water = 'SELECT * FROM sids_primary_water_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var playground = 'SELECT * FROM sids_primary_playground_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            debugger;
            return this.sqliteDB.getDataLocalDB(safety).then(function (data) {
              if (data.rows.length > 0) {
                return _this3.sqliteDB.getDataLocalDB(common).then(function (data) {
                  if (data.rows.length > 0) {
                    _this3.commonSave = true;
                    return _this3.sqliteDB.getDataLocalDB(water).then(function (data) {
                      if (data.rows.length > 0) {
                        _this3.waterSave = true;
                        return _this3.sqliteDB.getDataLocalDB(playground).then(function (data) {
                          if (data.rows.length > 0) {
                            if (_this3.visitstatus == 2) {
                              _this3.menuLists[2].sync = 3;
                            } else {
                              _this3.menuLists[2].sync = 2;
                            }

                            _this3.playgroundSave = true;
                          } else {
                            _this3.playgroundSave = false;
                          }
                        });
                      } else {
                        _this3.waterSave = false;
                      }
                    });
                  } else {
                    _this3.commonSave = false;
                  }
                });
              } else {
                _this3.safetySave = true;
              }
            });
          }
        }, {
          key: "checkLocalDBGeneral",
          value: function checkLocalDBGeneral() {
            var _this4 = this;

            var selectQuery = 'SELECT * FROM sids_primary_general_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
              if (data.rows.length > 0) {
                if (_this4.visitstatus == 2) {
                  _this4.menuLists[0].sync = 3;
                } else {
                  _this4.menuLists[0].sync = 2;
                }
              } else {
                _this4.generalServer = false;
              }
            });
          }
        }, {
          key: "getBuilding",
          value: function getBuilding() {
            var _this5 = this;

            var query = 'SELECT * FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataListData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListData.push(data.rows.item(i));
                }

                var filterBuilding = dataListData.filter(function (dd) {
                  return +dd.Status != 3;
                });

                if (filterBuilding.length > 0) {
                  _this5.serverDataBuilding = false;

                  if (+filterBuilding[0].Status == 2) {
                    _this5.menuLists[1].sync = 2;
                  } else {
                    _this5.menuLists[1].sync = 1;
                  }
                } else {
                  _this5.serverDataBuilding = true;
                  _this5.menuLists[1].sync = 3;
                }

                console.log("Building IF", dataListData, _this5.serverDataBuilding);
              } else {
                _this5.serverDataBuilding = false;
                console.log("Building ELSE", data.rows);

                _this5.addBuildingServer();
              }
            });
          }
        }, {
          key: "getFloor",
          value: function getFloor() {
            var _this6 = this;

            var query = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataListData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListData.push(data.rows.item(i));
                }

                var filterFloor = dataListData.filter(function (dd) {
                  return +dd.Status != 3;
                });

                if (filterFloor.length > 0) {
                  _this6.serverDataFloor = false;

                  if (+filterFloor[0].Status == 2) {
                    _this6.menuLists[1].sync = 2;
                  } else {
                    _this6.menuLists[1].sync = 1;
                  }
                } else {
                  _this6.serverDataFloor = true;
                  _this6.menuLists[1].sync = 3;
                }

                console.log("Floor IF", dataListData, _this6.serverDataFloor);
              } else {
                _this6.serverDataFloor = false;

                _this6.addFloorServer();

                console.log("Floor ELSE", data.rows);
              }
            });
          }
        }, {
          key: "getRoom",
          value: function getRoom() {
            var _this7 = this;

            var query = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataListData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListData.push(data.rows.item(i));
                }

                var filterRoom = dataListData.filter(function (dd) {
                  return +dd.Status != 3;
                });

                if (filterRoom.length > 0) {
                  _this7.serverDataRoom = false;

                  if (+filterRoom[0].Status == 2) {
                    _this7.menuLists[1].sync = 2;
                  } else {
                    _this7.menuLists[1].sync = 1;
                  }
                } else {
                  _this7.serverDataRoom = true;
                  _this7.menuLists[1].sync = 3;
                }

                console.log("Room IF", dataListData, _this7.serverDataRoom);

                if (_this7.serverDataBuilding && _this7.serverDataFloor && _this7.serverDataRoom) {
                  _this7.menuLists[1].sync = 3;
                } // if(!this.serverDataBuilding || !this.serverDataFloor || !this.serverDataRoom){
                //   this.menuLists[1].sync = 2;
                // }

              } else {
                console.log("Room ELSE", data.rows);
                _this7.serverDataRoom = false;

                _this7.addRoomServer();
              }
            });
          }
        }, {
          key: "finalSave",
          value: function finalSave() {
            if (this.generalServer) {
              if (this.serverDataBuilding && this.serverDataFloor && this.serverDataRoom) {
                if (this.serverDatas) {
                  this.schoolAlert();
                } else {
                  this.beforeSchoolAlert(3);
                }
              } else {
                // this.alertService.error("Please Sync Building Datas");
                this.beforeSchoolAlert(2);
              }
            } else {
              // this.alertService.error("Please Sync General Datas");
              this.beforeSchoolAlert(1);
            }
          }
        }, {
          key: "schoolAlert",
          value: function schoolAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this8 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirmation',
                      // subHeader: 'Successfully Saved',
                      message: ' Are you sure you want to submit the details?  ' + ' ' + ' Submit only if entire visit is over',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click'
                      }, {
                        cssClass: 'cancel_click',
                        text: 'Save',
                        handler: function handler(data) {
                          _this8.onFinalSave();

                          console.log("Complete Check");
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
        }, {
          key: "onFinalSave",
          value: function onFinalSave() {
            var _this9 = this;

            var data = {
              "records": {
                "IndexId": this.vistId,
                "SchlId": this.schoolId,
                "VistUId": this.sessionUserName,
                "VistUTy": this.sessionTypeName,
                "VistDate": this.todayDateFormat,
                "VistStas": "2"
              }
            };
            this.utilityService.saveVisitSids(data).subscribe(function (res) {
              _this9.onAllDelete();
            });
          }
        }, {
          key: "onAllDelete",
          value: function onAllDelete() {
            var _this0 = this;

            var query = 'DELETE FROM  sidsPrimaryBuildingQuestion WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
            var query1 = 'DELETE FROM  sidsPrimaryFloorQuestion WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
            var query2 = 'DELETE FROM  newPrimaryRoomscommons WHERE SchlId =' + this.schoolId + ' AND VistId =' + this.vistId;
            var query3 = 'DELETE FROM  sidsPrimaryFloorSaveDatas WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
            var query4 = 'DELETE FROM  sids_primary_general_schooldata WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
            var query5 = 'DELETE FROM  sids_primary_playground_data WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
            var query6 = 'DELETE FROM  sids_primary_water_schooldata WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
            var query7 = 'DELETE FROM  sids_primary_compoundwall_data WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
            var query8 = 'DELETE FROM  sidsPrimaryRoomSaves WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
            var query9 = 'DELETE FROM  sidsPrimaryBuildSavesDatas WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
            var query10 = 'DELETE FROM  sidsPrimaryCommonServer WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
            var query11 = 'DELETE FROM  sids_primary_safety_data WHERE SchlId =' + this.schoolId + ' AND VistUId =' + this.vistId;
            var query12 = 'DELETE FROM  sidsPrimaryGeneralServer WHERE SclId =' + this.schoolId + ' AND VistId =' + this.vistId;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this0.sqliteDB.getDataLocalDB(query1).then(function (data) {
                return _this0.sqliteDB.getDataLocalDB(query2).then(function (data) {
                  return _this0.sqliteDB.getDataLocalDB(query3).then(function (data) {
                    return _this0.sqliteDB.getDataLocalDB(query4).then(function (data) {
                      return _this0.sqliteDB.getDataLocalDB(query5).then(function (data) {
                        return _this0.sqliteDB.getDataLocalDB(query6).then(function (data) {
                          return _this0.sqliteDB.getDataLocalDB(query7).then(function (data) {
                            return _this0.sqliteDB.getDataLocalDB(query8).then(function (data) {
                              return _this0.sqliteDB.getDataLocalDB(query9).then(function (data) {
                                return _this0.sqliteDB.getDataLocalDB(query10).then(function (data) {
                                  return _this0.sqliteDB.getDataLocalDB(query11).then(function (data) {
                                    return _this0.sqliteDB.getDataLocalDB(query12).then(function (data) {
                                      console.log(data, "delete");

                                      _this0.router.navigate(['/tabs/sids-dashboard']);

                                      for (var i = 0; i < _this0.menuLists.length; i++) {
                                        _this0.menuLists[i].sync = 1;
                                      }
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          }
        }, {
          key: "goback",
          value: function goback() {
            this.router.navigate(['/tabs/primary-sids-school']);
          }
        }, {
          key: "beforeSchoolAlert",
          value: function beforeSchoolAlert(school) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this1 = this;

              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: school == 1 ? 'General Question' : school == 2 ? "Building Question" : "Common Spaces",
                      // subHeader: 'Successfully Saved',
                      message: school == 1 ? ' Please Sync General Questions ' : school == 1 ? !this.serverDataBuilding ? 'Please Sync All Building Questions' : !this.serverDataFloor ? 'Please Sync All Floor Questions' : !this.serverDataRoom ? 'Please Sync All Room Questions' : 'Please Sync Building Questions' : "Please Sync Common Spaces",
                      buttons: [// {
                      //   text: 'Cancel',
                      //   role: 'cancel',
                      //   cssClass: 'cancel_click',
                      // },
                      {
                        cssClass: 'cancel_click',
                        text: 'Done',
                        handler: function handler(data) {
                          if (school == 1) {
                            _this1.router.navigate(['/tabs/primary-sids-schooldata'], {
                              queryParams: {
                                'schoolId': _this1.schoolId,
                                'vistId': _this1.vistId,
                                'expanted': '1',
                                'visitstatus': _this1.visitstatus
                              },
                              skipLocationChange: false
                            });
                          }

                          if (school == 2) {
                            _this1.router.navigate(['/tabs/primary-new-dashboard'], {
                              queryParams: {
                                'schoolId': _this1.schoolId,
                                'vistId': _this1.vistId,
                                'expanted': '1',
                                'visitstatus': _this1.visitstatus
                              },
                              skipLocationChange: false
                            });
                          }

                          if (school == 3) {
                            _this1.router.navigate(['/tabs/primary-commonspaces'], {
                              queryParams: {
                                'schoolId': _this1.schoolId,
                                'vistId': _this1.vistId,
                                'expanted': '1',
                                'visitstatus': _this1.visitstatus
                              },
                              skipLocationChange: false
                            });
                          }
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
          key: "generalQuestionServer",
          value: function generalQuestionServer() {
            var _this10 = this;

            debugger;
            this.utilityService.SidsSchlGenrlInfoGet(this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this10.filterGeneral = res.result;
                console.log("filterGeneral", _this10.filterGeneral);

                _this10.checkLocalsafety();

                _this10.checkLocalplayground();

                _this10.checkLocalwater();

                _this10.checkLocalcommon();

                _this10.serverDatas = true;

                _this10.insertLocalDB();

                _this10.menuLists[2].sync = 3;
              } else {
                _this10.checkLocalDB();
              }
            });
          }
        }, {
          key: "getGeneralWater",
          value: function getGeneralWater() {
            var _this11 = this;

            this.utilityService.SidsDrinWatTypDet(this.schoolId, this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this11.filterWater = res.result;
                console.log("filterWater", _this11.filterWater);

                _this11.checkLocalwater();
              }
            });
          }
        }, {
          key: "serverGeneralQues",
          value: function serverGeneralQues() {
            var _this12 = this;

            this.utilityService.SidsGeneralQuesGet(this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this12.filterServerGeneral = res.result;
                console.log("filterServerGeneral", _this12.filterServerGeneral);

                _this12.checkLocalgeneral();

                _this12.insertLocalDB2();

                _this12.menuLists[0].sync = 3;
                _this12.generalServer = true;
              } else {
                _this12.checkLocalDBGeneral();
              }
            });
          }
        }, {
          key: "checkLocalgeneral",
          value: function checkLocalgeneral() {
            var _this13 = this;

            var selectQuery = 'SELECT * FROM sids_primary_general_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
              if (data.rows.length > 0) {} else {
                if (_this13.filterServerGeneral.length > 0) {
                  var Text = 'https://deka0egrc3bqo.cloudfront.net/';
                  var general = 'INSERT INTO sids_primary_general_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                  _this13.sqliteDB.insert(general, [null, _this13.filterServerGeneral[0].SchlId, _this13.filterServerGeneral[0].VistUId, _this13.filterServerGeneral[0].IndexId, _this13.filterServerGeneral[0].SiteNum, parseFloat(_this13.filterServerGeneral[0].TotalArea), +_this13.filterServerGeneral[0].PurpLaptopYN == 1 ? true : false, _this13.filterServerGeneral[0].PurpLaptopFun, _this13.filterServerGeneral[0].PurpLaptopNonFun, +_this13.filterServerGeneral[0].PurpComputerYN == 1 ? true : false, _this13.filterServerGeneral[0].PurpComputerFun, _this13.filterServerGeneral[0].PurpComputerNonFun, +_this13.filterServerGeneral[0].PurpTabYN == 1 ? true : false, _this13.filterServerGeneral[0].PurpTabFun, _this13.filterServerGeneral[0].PurpTabNonFun, +_this13.filterServerGeneral[0].PurpPrinterYN == 1 ? true : false, _this13.filterServerGeneral[0].PurpPrinterFun, _this13.filterServerGeneral[0].PurpPrinterNonFun, +_this13.filterServerGeneral[0].PurpProjectorYN == 1 ? true : false, _this13.filterServerGeneral[0].PurpProjectorFun, _this13.filterServerGeneral[0].PurpProjectorNonFun, _this13.filterServerGeneral[0].GeneralPhoto ? Text + _this13.filterServerGeneral[0].GeneralPhoto : '', _this13.filterServerGeneral[0].GeneralPhoto, _this13.filterServerGeneral[0].GeneralLatitude, _this13.filterServerGeneral[0].GeneralLongitude, _this13.filterServerGeneral[0].EntrancePhoto ? Text + _this13.filterServerGeneral[0].EntrancePhoto : '', _this13.filterServerGeneral[0].EntrancePhoto, 1]).then(function (insertres) {
                    if (insertres.insertId) {
                      console.log('Inserted SIDS General School Data');
                    }
                  });
                }
              }
            });
          }
        }, {
          key: "checkLocalcommon",
          value: function checkLocalcommon() {
            var _this14 = this;

            var deleteQuery = 'SELECT * FROM sids_primary_compoundwall_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this14.commonSave = true;
              } else {
                var common = 'INSERT INTO sids_primary_compoundwall_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                _this14.sqliteDB.insert(common, [null, _this14.schoolId, _this14.vistId, _this14.filterGeneral[0].IndexId, _this14.filterGeneral[0].CmpdwallSta, parseFloat(_this14.filterGeneral[0].CmpdwallReqLen), _this14.filterGeneral[0].CmpdwallReqt, parseFloat(_this14.filterGeneral[0].CmpdwallHTInc), parseFloat(_this14.filterGeneral[0].AreaWW), parseFloat(_this14.filterGeneral[0].AreaReplastering), parseFloat(_this14.filterGeneral[0].AreaBrickwork), +_this14.filterGeneral[0].GateYn == 1 ? true : false, _this14.filterGeneral[0].GateFunc, 1]).then(function (insertres) {
                  if (insertres.insertId) {
                    console.log('Inserted SIDS Common School Data');
                  }
                });
              }
            });
          }
        }, {
          key: "checkLocalplayground",
          value: function checkLocalplayground() {
            var _this15 = this;

            var deleteQuery = 'SELECT * FROM sids_primary_playground_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this15.playgroundSave = true;
              } else {
                var datainsert = 'INSERT INTO sids_primary_playground_data VALUES (?,?,?,?,?,?,?,?,?,?)';

                _this15.sqliteDB.insert(datainsert, [null, _this15.schoolId, _this15.vistId, _this15.filterGeneral[0].IndexId, +_this15.filterGeneral[0].PlaygroYn == 1 ? true : false, parseFloat(_this15.filterGeneral[0].PlaygroArea), _this15.filterGeneral[0].PlayKerbwall, +_this15.filterGeneral[0].OutsiClsYN == 1 ? true : false, _this15.filterGeneral[0].OutsiClsNum, 1]).then(function (insertres) {
                  if (insertres.insertId) {}
                });
              }
            });
          }
        }, {
          key: "checkLocalsanitation",
          value: function checkLocalsanitation() {
            var _this16 = this;

            var deleteQuery = 'SELECT * FROM sids_sanitation_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {} else {
                var sanitation = 'INSERT INTO sids_sanitation_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                _this16.sqliteDB.insert(sanitation, [null, _this16.filterGeneral[0].SchlId, _this16.filterGeneral[0].VistUId, +_this16.filterGeneral[0].DustYN == 1 ? true : false, +_this16.filterGeneral[0].NapkYn == 1 ? true : false, _this16.filterGeneral[0].NapkFun, _this16.filterGeneral[0].NapkRepair, _this16.filterGeneral[0].SanWstDis, _this16.filterGeneral[0].SanWstDisFun, _this16.filterGeneral[0].SanWstDisRepair, _this16.filterGeneral[0].SoapHwLunch, _this16.filterGeneral[0].soapHwToilet, _this16.filterGeneral[0].ToilClen, _this16.filterGeneral[0].ToilWstDis, _this16.filterGeneral[0].ToiletWstDispSoak, _this16.filterGeneral[0].ToiletWstDispSeptic, _this16.filterGeneral[0].SeptiTankFun, _this16.filterGeneral[0].SeptiTankShap, parseFloat(_this16.filterGeneral[0].SeptiLen), parseFloat(_this16.filterGeneral[0].SeptiBrea), parseFloat(_this16.filterGeneral[0].SeptiRadi), parseFloat(_this16.filterGeneral[0].SeptiHeit), _this16.filterGeneral[0].SepticTankEmpty]).then(function (insertres) {
                  if (insertres.insertId) {
                    console.log('Inserted SIDS Sanitation School Data');
                  }
                });
              }
            });
          }
        }, {
          key: "checkLocalwater",
          value: function checkLocalwater() {
            var _this17 = this;

            var deleteQuery = 'SELECT * FROM sids_primary_water_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this17.waterSave = true;
              } else {
                var datainsert = 'INSERT INTO sids_primary_water_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                _this17.sqliteDB.insert(datainsert, [null, _this17.schoolId, _this17.vistId, _this17.filterGeneral[0].IndexId, _this17.filterGeneral[0].WatAvaiSchool, _this17.filterGeneral[0].ResUnAvaiWater, _this17.filterGeneral[0].srcWaterAvai, _this17.filterGeneral[0].BorWelFunc, _this17.filterGeneral[0].BorwelClosed, _this17.filterGeneral[0].BorWelReqReapir, _this17.filterGeneral[0].DWWatAvai, +_this17.filterGeneral[0].DWSumpYn == 1 ? true : false, _this17.filterGeneral[0].DWSumpFun, _this17.filterGeneral[0].DWSumpAvai, _this17.filterGeneral[0].DWPumpYn, _this17.filterGeneral[0].DWPumpFun, _this17.filterGeneral[0].DWPumpRepair, _this17.filterGeneral[0].NumDWStation]).then(function (insertres) {
                  if (insertres.insertId) {
                    console.log('Inserted SIDS water School Data', insertres);
                  }
                });
              }
            });
          }
        }, {
          key: "checkLocalsafety",
          value: function checkLocalsafety() {
            var _this18 = this;

            var deleteQuery = 'SELECT * FROM sids_primary_safety_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this18.safetySave = true;
              } else {
                var safety = 'INSERT INTO sids_primary_safety_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                _this18.sqliteDB.insert(safety, [null, _this18.schoolId, _this18.vistId, _this18.filterGeneral[0].IndexId, +_this18.filterGeneral[0].EBliShiYn == 1 ? true : false, +_this18.filterGeneral[0].RefilAreReq == 1 ? true : false, parseFloat(_this18.filterGeneral[0].RefilSqft), +_this18.filterGeneral[0].WatLoggYn == 1 ? true : false, _this18.filterGeneral[0].WatLogRepair, +_this18.filterGeneral[0].TrePrunReq == 1 ? true : false, +_this18.filterGeneral[0].OpenWellYn == 1 ? true : false, +_this18.filterGeneral[0].CmnDustbinYN == 1 ? true : false, +_this18.filterGeneral[0].ChulhaYn == 1 ? true : false, _this18.filterGeneral[0].ChulhaFunc, _this18.filterGeneral[0].ChulhaRepair, +_this18.filterGeneral[0].SChSepticTank == 1 ? true : false, _this18.filterGeneral[0].SepticTankFun, _this18.filterGeneral[0].SepticTankRepaired, 1]).then(function (insertres) {
                  if (insertres.insertId) {
                    console.log('Inserted SIDS Safety School Data');
                  }
                });
              }
            });
          }
        }, {
          key: "insertLocalDB",
          value: function insertLocalDB() {
            var datainsert = "INSERT INTO sidsPrimaryCommonServer VALUES (?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "3"]).then(function (insertres) {
              console.log('server inserted successfully', insertres);
            });
          }
        }, {
          key: "addBuildingServer",
          value: function addBuildingServer() {
            var _this19 = this;

            this.utilityService.getBuildingSids(this.vistId, this.schoolId).subscribe(function (res) {
              if (res.dataStatus) {
                _this19.filterbuild = res.result; // console.log("filterBuild",this.filterbuild);

                _this19.menuLists[1].sync = 3;
                _this19.serverDataBuilding = true;

                _this19.insertLocalBuild(_this19.filterbuild);
              }
            });
          }
        }, {
          key: "insertLocalBuild",
          value: function insertLocalBuild(BuildingArray) {
            var _this20 = this;

            console.log("Building Array", BuildingArray);
            var dataList = "INSERT INTO sidsPrimaryBuildingQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var dataList2 = "INSERT INTO sidsPrimaryBuildSavesDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var Text = 'https://deka0egrc3bqo.cloudfront.net/';
            BuildingArray.forEach(function (element) {
              var idbuild = parseInt(element.BldgId) - 100;
              var bulsidsPrimarySave = 'create table IF NOT EXISTS sidsPrimaryBuildSavesDatas(Sid INTEGER PRIMARY KEY AUTOINCREMENT, Id Varchar(100), SclId Varchar(100), VistId Varchar(100), BuildIndx Varchar(50), BuildingId Varchar(50),Status Varchar(50),Condition Varchar(50),BuildName Varchar(50),BuildCondi Varchar(50), ClosingQuestions Varchar(50), FloorCondition Varchar(50), BuildIndex Varchar(50))';

              _this20.sqliteDB.insert(dataList2, [null, idbuild, _this20.schoolId, _this20.vistId, idbuild, element.BldgId, "1", "false", "Building Name", "", "", "", element.IndexId]).then(function (insertres) {
                console.log('sidsPrimaryBuildSavesDatas successfully');
              });
            });
            BuildingArray.forEach(function (element) {
              _this20.sqliteDB.insert(dataList, [null, _this20.schoolId, _this20.vistId, element.BldgId, element.IndexId, element.BldgName, element.BldgAge, element.BldgFundSourceCons, element.BldgType, parseFloat(element.BldgLength), parseFloat(element.BldgBre), element.BldgCondition, element.BldgRepair ? element.BldgRepair.toString() : element.BldgRepair, parseFloat(element.AreaWeatheringReq), parseFloat(element.AreaPressedTiles), parseFloat(element.PipeNeedHwDw), parseFloat(element.PipeNeedToilet), parseFloat(element.WireLenElectrcty), parseFloat(element.AreaWaterLeakage), parseFloat(element.AreaExtWw), parseFloat(element.AreaIntWw), parseFloat(element.AreaReplasting), parseFloat(element.AreaReflooring), parseFloat(element.AreaFlrPatchwrk), +element.AuditoriumYn == 1 ? true : false, element.AuditoriumStageReqt ? element.AuditoriumStageReqt.toString() : element.AuditoriumStageReqt, parseFloat(element.AuditoriumStageArea), parseFloat(element.AuditoriumStageHeight), parseFloat(element.AuditoriumStageAreaLevel), element.AuditoriumLights, element.AuditoriumFans, +element.AuditoriumPrjtYn == 1 ? true : false, +element.AuditoriumPrjtFunc, element.RampAvailYn, +element.RampRepairYn == 1 ? true : false, +element.FireExtYn == 1 ? true : false, +element.FirstAidKitYn == 1 ? true : false, +element.CCTVCameraYn == 1 ? true : false, +element.BuildTabsYn == 1 ? true : false, +element.BuildTabsNumber, +element.BuildReapairComArea == 1 ? true : false, element.BldgFrontPhoto ? Text + element.BldgFrontPhoto : '', element.BldgFrontPhoto, element.BldgLatitude, element.BldgLongitude]).then(function (insertres) {
                console.log('sidsPrimaryBuildingQuestion successfully', insertres);
                var idbuild = parseInt(element.BldgId) - 100;
                var name = element.BldgName;
                console.log(_this20.schoolId, element.BldgId);
                var query = 'UPDATE sidsPrimaryBuildSavesDatas SET Status = 3 WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this20.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                var query1 = 'UPDATE sidsPrimaryBuildSavesDatas SET BuildName="' + name + '" WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this20.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                var query2 = 'UPDATE sidsPrimaryBuildSavesDatas SET BuildCondi="' + element.BldgCondition + '", FloorCondition="' + 1 + '" WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this20.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + element.BldgId + '"'; // console.log("Update Query 1 ",query,"  Update Query 2  " ,query1);

                return _this20.sqliteDB.update(query).then(function (data) {
                  return _this20.sqliteDB.update(query1).then(function (data) {
                    return _this20.sqliteDB.update(query2).then(function (data) {
                      console.log("update building");
                    });
                  });
                });
              });
            });
          }
        }, {
          key: "addFloorServer",
          value: function addFloorServer() {
            var _this21 = this;

            this.utilityService.SidsFloorVisitDet(this.schoolId, this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this21.filterfloor = res.result;
                _this21.menuLists[1].sync = 3;
                _this21.serverDataFloor = true;
                console.log("filterfloor", _this21.filterfloor);

                _this21.insertLocalFloor(_this21.filterfloor);
              } else {
                if (_this21.serverDataBuilding) {
                  _this21.serverDataFloor = true;
                  _this21.serverDataRoom = true;
                }
              }
            });
          }
        }, {
          key: "insertLocalFloor",
          value: function insertLocalFloor(floorArray) {
            var _this22 = this;

            var dataList = "INSERT INTO sidsPrimaryFloorQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var dataList2 = "INSERT INTO sidsPrimaryFloorSaveDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            floorArray.forEach(function (element) {
              var floor = parseInt(element.FoolrId) - 1000;
              var build = parseInt(element.BldgId) - 100;

              _this22.sqliteDB.insert(dataList2, [null, floor, _this22.schoolId, _this22.vistId, build, floor, element.FoolrId, "1", "Floor Name", "", "", "", element.BldgIdxId, element.IndexId]).then(function (insertres) {
                console.log('sidsPrimaryFloorSaveDatas successfully');
              });
            });
            floorArray.forEach(function (element) {
              _this22.sqliteDB.insert(dataList, [null, _this22.schoolId, _this22.vistId, element.BldgId, element.BldgIdxId, element.FoolrId, element.IndexId, element.FloorNum, element.FloorCondi, +element.FloorSafety == 1 ? true : false, element.ReqParapetWall, parseFloat(element.ParapetWallLength), parseFloat(element.ParapetWallHeight), parseFloat(element.ParapetWallWhiteWash), parseFloat(element.ParapetWallReplasting), parseFloat(element.ParapetWallBrickWork), +element.BldOhtYn == 1 ? true : false, element.FunBldOhtYn, element.RepairSteps, element.FoolrTy, parseFloat(element.FoolrAreReq), element.OutPipY, parseFloat(element.PipLenNeed), element.WeatheringReq, +element.RoofCleaYn == 1 ? true : false, +element.CorridorYn == 1 ? true : false, element.CorriCondi, parseFloat(element.CorriLen), parseFloat(element.CorridorWidth), element.CorriLighFunc, element.CorridorRepair, parseFloat(element.AreaWw), parseFloat(element.AreaReplastering), parseFloat(element.AreaReflooring), parseFloat(element.AreaCeilingPlaster), parseFloat(element.AreaFlrPatchwork), element.DoorReplace, element.JaalisReplace, element.DoorRepair, element.JaalisRepair, parseFloat(element.DoorRepaint), parseFloat(element.JaalisRepaint)]).then(function (insertres) {
                console.log('sidsPrimaryFloorQuestion successfully', insertres);
                var name = "";

                if (+element.FloorNum == 1) {
                  name = "Ground";
                }

                if (+element.FloorNum == 2) {
                  name = "First";
                }

                if (+element.FloorNum == 3) {
                  name = "Second";
                }

                if (+element.FloorNum == 4) {
                  name = "Third";
                }

                if (+element.FloorNum == 5) {
                  name = "Fourth";
                }

                if (+element.FloorNum == 6) {
                  name = "Fifth";
                }

                if (+element.FloorNum == 7) {
                  name = "Terrace";
                }

                var idbuild = parseInt(element.BldgId) - 100;
                var idfloor = parseInt(element.FoolrId) - 1000; // let updateQuery =  'UPDATE sidsPrimaryFloorSaveDatas SET Status = 3 , FloorName="' + name + '"' +
                //   ' WHERE SclId = "' + this.schoolId + '"' +
                //   ' And BuildIndx = "' + idbuild + '"' +
                //   ' And FloorId = "' + element.FloorId + '"';

                var query1 = 'UPDATE sidsPrimaryFloorSaveDatas SET Status = 3 WHERE SclId = "' + _this22.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                var query2 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorName="' + name + '" WHERE SclId = "' + _this22.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                var query3 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorClose = ' + "3" + ' WHERE SclId = "' + _this22.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                var query4 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorCondi= "' + element.FloorCondi + '", RoomCondition= "' + 1 + '" WHERE SclId = "' + _this22.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                console.log("UPDATE", query1);
                return _this22.sqliteDB.update(query1).then(function (data) {
                  return _this22.sqliteDB.update(query2).then(function (data) {
                    return _this22.sqliteDB.update(query3).then(function (data) {
                      return _this22.sqliteDB.update(query4).then(function (data) {
                        console.log("UPDATE data", data);
                      });
                    });
                  });
                });
              });
            });
          }
        }, {
          key: "addRoomServer",
          value: function addRoomServer() {
            var _this23 = this;

            this.utilityService.SidsRoomsVisitDet(this.schoolId, this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this23.filterRoom = res.result;
                console.log("filterRoom", _this23.filterRoom);
                _this23.serverDataRoom = true;
                _this23.menuLists[1].sync = 3;

                _this23.insertLocalRoom(_this23.filterRoom);
              } else {
                if (_this23.serverDataFloor) {
                  _this23.serverDataRoom = true;
                }
              }
            });
          }
        }, {
          key: "insertLocalRoom",
          value: function insertLocalRoom(RoomArray) {
            var _this24 = this;

            var dataList = "INSERT INTO newPrimaryRoomscommons VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var dataList2 = "INSERT INTO sidsPrimaryRoomSaves VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
            RoomArray.forEach(function (element) {
              var idroom = parseInt(element.RoomId) - 10000;
              var floor = parseInt(element.FloorId) - 1000;
              var build = parseInt(element.BldgId) - 100;

              _this24.sqliteDB.insert(dataList2, [null, idroom, _this24.schoolId, _this24.vistId, build, floor, element.RoomId, "1", "Room", element.BldgIdxId, element.FloorIdxId, element.IndxId]).then(function (insertres) {
                console.log('sidsPrimaryRoomSaves successfully', idroom, floor, build);
              });
            });
            var Text = 'https://deka0egrc3bqo.cloudfront.net/';
            RoomArray.forEach(function (element) {
              _this24.sqliteDB.insert(dataList, [null, element.IndxId, element.ToilIndxId, _this24.schoolId, _this24.vistId, element.BldgIdxId, element.BldgId, element.FloorIdxId, element.FloorId, element.RoomId, element.RoomUse, element.RoomName, element.RoomCondition, element.RepairType, element.MajorRepair, element.MinorRepair, parseFloat(element.AreaPlastering), parseFloat(element.AreaExtWw), parseFloat(element.AreaIntWw), parseFloat(element.AreaReplastering), parseFloat(element.AreaReflooring), parseFloat(element.AreaPatchwork), element.DoorReplace, element.WindowReplace, element.DoorRepair, element.WindowRepair, parseFloat(element.DoorRepaint), parseFloat(element.WindowRepaint), element.LatrinReplace, element.UrinalReplace, parseFloat(element.PipeNeed), parseFloat(element.DrainageNeed), parseFloat(element.RoomLength), parseFloat(element.RoomBreadth), parseFloat(element.RoomHeight), element.FloorType, element.BenchFunc, element.DeskFunc, element.TubelightFunc, element.FansFunc, element.Cupboard, element.RoomCeilingYn, element.RoomCeilingPhoto ? Text + element.RoomCeilingPhoto : '', element.RoomCeilingPhoto, element.RoomCeilingLatitude, element.RoomCeilingLongitude, element.TeacherTableYn == 1 ? true : false, element.TelevisionYn == 1 ? true : false, element.TelevisionFuncYn == 1 ? true : false, element.SmartboardPrjtYn == 1 ? true : false, element.SmartboardPrjtFuncYn == 1 ? true : false, element.ClassRoomProjYn == 1 ? true : false, element.ClassRoomProjFuncYn == 1 ? true : false, element.LabType, element.LabComputerYn == 1 ? true : false, element.LabComputerFunc, element.LabComputerRepair, element.LabWatersupplyYn, +element.LabDrainage == 1 ? true : false, element.LabPhotoOne ? Text + element.LabPhotoOne : '', element.LabPhotoOne, element.LabLatitude, element.LabLongitude, element.LibraryBooks, element.HmRoomTblYn, element.StaffrmUsedBy, element.KitchenWtrSrc, element.KitchenLPGConYn == 1 ? true : false, +element.KitchenWtrSupply == 1 ? true : false, element.KitchenStorageYn == 1 ? true : false, element.KitchenCleanYn == 1 ? true : false, element.DiningFunctionalYn == 1 ? true : false, element.DiningSeatingCapacity, element.DiningSeatingWtrSupply, element.NoonmealStorageClean, element.StoreRoomPurpose, element.StrroomStorageClean == 1 ? true : false, element.ReasonEmpty, element.ToiletType, element.ToiletWaterCon, element.ToiletWasteDis, +element.IwcToilet == 1 ? true : false, element.Iwccubicles, element.IwccubiclesFunc, +element.EwcToilet == 1 ? true : false, element.Ewccubicles, element.Ewccubiclesfunc, +element.UrinalToilet == 1 ? true : false, element.Urinals, element.Urinalsfunc, element.ToiletTapsFunc, element.ToiletNeedTabs, element.ToiletBucket, element.Toiletmugs, element.SizeSuitable, element.Roof, element.SanitWasteDisp, element.HwFacility, element.AuditoriumYn == 1 ? true : false, element.AuditoriumStageYn == 1 ? true : false, element.AuditoriumStageReqt, parseFloat(element.AuditoriumStageArea), parseFloat(element.AuditoriumStageHeight), parseFloat(element.AuditoriumStageAreaLevel), element.AuditoriumLights, element.AuditoriumFans, element.AuditoriumPrjtYn, element.AuditoriumPrjtFunc, element.SmartRoomFacilityYn == 1 ? true : false, element.SmartRoomDeviceFunYn == 1 ? true : false, element.SmartRoomComputersYn == 1 ? true : false, element.SmartRoomFunComp, element.SmartRoomFunCompRepair, element.SmartRoomPhotoOne ? Text + element.SmartRoomPhotoOne : '', element.SmartRoomPhotoOne, element.SmartRoomLatitude, element.SmartRoomLongitude]).then(function (insertres) {
                console.info("Room Details Stored Locally", insertres);
                var id = parseInt(element.BldgId) - 100;
                var floor = parseInt(element.FloorId) - 1000;
                var room = parseInt(element.RoomId) - 10000;
                var updateQuery = 'UPDATE sidsPrimaryRoomSaves SET Status = 3, RoomName="' + element.RoomName + '"' + ' WHERE SclId = "' + _this24.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + element.RoomId + '"';
                console.log("sidsPrimaryRoomSaves query", updateQuery, id, floor, room);
                return _this24.sqliteDB.update(updateQuery).then(function (data) {
                  console.log("update room", data);
                  var query = 'SELECT * FROM sidsPrimaryRoomSaves';
                  return _this24.sqliteDB.getDataLocalDB(query).then(function (data) {
                    var sidsFloor = [];

                    for (var i = 0; i < data.rows.length; i++) {
                      sidsFloor.push(data.rows.item(i));
                    }

                    console.log("555555", sidsFloor);
                  });
                });
              });
            });
          }
        }, {
          key: "insertLocalDB2",
          value: function insertLocalDB2() {
            var _this25 = this;

            var datainsert = "INSERT INTO sidsPrimaryGeneralServer VALUES (?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "3"]).then(function (insertres) {
              console.log('server inserted successfully', _this25.schoolId, _this25.vistId);

              _this25.goToBack();
            });
          }
        }, {
          key: "getPopup",
          value: function getPopup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this26 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    if (!(this.menuLists[0].sync == 3 && this.menuLists[1].sync == 3 && this.menuLists[2].sync == 3)) {
                      _context3.n = 2;
                      break;
                    }

                    _context3.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirmation',
                      subHeader: 'Already Data entered if want to update',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'cancel_click',
                        handler: function handler(data) {
                          _this26.router.navigate(['/tabs/primary-sids-school']); // console.log("Complete Check")

                        }
                      }, {
                        cssClass: 'cancel_click',
                        text: 'Yes',
                        handler: function handler(data) {
                          console.log("Data Change");
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
        }]);
      }();

      _PrimaryDashboardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _PrimaryDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-primary-dashboard',
        template: _raw_loader_primary_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimaryDashboardPage);
      /***/
    },

    /***/
    64554:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.page.scss ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menuicon {\n  width: 30%;\n  margin: 10px auto;\n  overflow: visible;\n}\n\n.menu-text {\n  padding: 10px !important;\n}\n\n.question {\n  background-color: #F3F4FA !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local {\n  background-color: #70BBFF !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local ion-label {\n  color: white !important;\n  font-weight: 500;\n}\n\n.server {\n  background-color: #A37A5C !important;\n  color: white;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3QkFBQTtBQUVKOztBQUFBO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUU7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFGSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUFJTjs7QUFBRTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSiIsImZpbGUiOiJwcmltYXJ5LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudWljb24ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuLm1lbnUtdGV4dHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4ucXVlc3Rpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGM0Y0RkEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2NhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBCQkZGICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlcnZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMzdBNUMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    25837:
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-dashboard/primary-dashboard.page.html ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"chevronback\" size=\"large\" name=\"chevron-back-outline\" (click)=\"goback()\"></ion-icon>\r\n    </ion-buttons> -->\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goback()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"padding-left: 10px;\">SIDS Dashboard ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-card style=\"padding-bottom: 30px;\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"menu menus-txt secondary\" *ngFor=\"let item of menuLists; let i = index\" style=\"background-color: white;\">\r\n        \r\n        <div [ngClass]=\"(item.sync == 1) ? 'question' : (item.sync == 2) ? 'local' : 'server'\">\r\n          <ion-row (click)=\"navigateNext(item)\">\r\n            <img [src]=\"(item.sync == 1) ? item.image : (item.sync == 2) ? item.server : item.server\" class=\"menuicon\">\r\n            <ion-col size=\"12\" class=\"menu-text\" style=\"text-align: center;\">\r\n              <ion-label *ngIf=\"item.sync == 1\" style=\"color: #555555; font-weight: 400;\">{{item.menu}}</ion-label>\r\n              <ion-label *ngIf=\"item.sync == 2\" style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n              <ion-label *ngIf=\"item.sync == 3\" style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n\r\n        <!-- <div *ngIf=\"serverDatas && generalServer && serverDataBuilding && serverDataFloor && serverDataRoom\" class=\"server\">\r\n          <ion-row (click)=\"navigateNext(item,item.menu)\">\r\n            <img [src]=\"item.server\" class=\"menuicon\">\r\n            <ion-col size=\"12\" class=\"menu-text\" style=\"text-align: center;\">\r\n              <ion-label style=\"color: white; font-weight: 400;\">{{item.menu}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div> -->\r\n      \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-row *ngIf=\"serverDatas || serverDataBuilding && serverDataFloor && serverDataRoom\" style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: #A27B5C;font-weight: bold; text-align: center;\">\r\n      <ion-label>Only partial data has been entered. Enter all data and submit final save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: rgb(139, 103, 179);font-weight: bold;\">\r\n      <ion-label>Data cannot be edited once synced to server\r\n      </ion-label>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"8\" style=\"text-align: center;margin-bottom: 5%;\">\r\n      <ion-label>Data Saved in Local</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\" style=\"margin-bottom: 5%;\">\r\n      <img src=\"assets/icons/syncwithserver.svg\" class=\"floImg\">\r\n    </ion-col>\r\n    <ion-col size=\"8\" style=\"text-align: center;\">\r\n      <ion-label>Data Saved in Server</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n      <img src=\"assets/icons/localSync.svg\" class=\"floImg\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n  <ion-row style=\"background-color: aliceblue;margin: 2%;\">\r\n    <ion-col size=\"12\" style=\"padding: 15px;margin-top: 3%;color: rgb(165, 7, 7);font-weight: bold;\">\r\n      <ion-label>Notes : </ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"12\" style=\"padding: 15px;-top: 0%;color: rgb(139, 103, 179);font-weight: bold;\">\r\n      <ion-label>Please click on final save only if you have completed the visit and submitted all details fully.\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\">\r\n  <ion-row (click)=\"finalSave()\" style=\"text-align: center;color: aliceblue;padding: 10px\">\r\n    <ion-col size=\"12\" class=\"add\">\r\n      <ion-label> Final Save </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-dashboard_primary-dashboard_module_ts-es5.js.map