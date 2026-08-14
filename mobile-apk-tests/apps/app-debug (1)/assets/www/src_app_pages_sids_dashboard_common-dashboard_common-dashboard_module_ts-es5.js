(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_dashboard_common-dashboard_common-dashboard_module_ts"], {
    /***/
    1529:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard-routing.module.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommonDashboardPageRoutingModule": function CommonDashboardPageRoutingModule() {
          return (
            /* binding */
            _CommonDashboardPageRoutingModule
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


      var _common_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common-dashboard.page */
      70592);

      var routes = [{
        path: '',
        component: _common_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.CommonDashboardPage
      }];

      var _CommonDashboardPageRoutingModule = /*#__PURE__*/_createClass(function CommonDashboardPageRoutingModule() {
        _classCallCheck(this, CommonDashboardPageRoutingModule);
      });

      _CommonDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CommonDashboardPageRoutingModule);
      /***/
    },

    /***/
    92616:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.module.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommonDashboardPageModule": function CommonDashboardPageModule() {
          return (
            /* binding */
            _CommonDashboardPageModule
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


      var _common_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common-dashboard-routing.module */
      1529);
      /* harmony import */


      var _common_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common-dashboard.page */
      70592);

      var _CommonDashboardPageModule = /*#__PURE__*/_createClass(function CommonDashboardPageModule() {
        _classCallCheck(this, CommonDashboardPageModule);
      });

      _CommonDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _common_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonDashboardPageRoutingModule],
        declarations: [_common_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.CommonDashboardPage]
      })], _CommonDashboardPageModule);
      /***/
    },

    /***/
    70592:
    /*!********************************************************************************!*\
      !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.page.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommonDashboardPage": function CommonDashboardPage() {
          return (
            /* binding */
            _CommonDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_common_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./common-dashboard.page.html */
      14610);
      /* harmony import */


      var _common_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./common-dashboard.page.scss */
      91445);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file-transfer/ngx */
      50806);

      var _CommonDashboardPage = /*#__PURE__*/function () {
        function CommonDashboardPage(router, transfer, route, sidsService, userSessionService, utilityService, NetworkService, sqliteDB, file, alertController, alertService) {
          _classCallCheck(this, CommonDashboardPage);

          this.router = router;
          this.transfer = transfer;
          this.route = route;
          this.sidsService = sidsService;
          this.userSessionService = userSessionService;
          this.utilityService = utilityService;
          this.NetworkService = NetworkService;
          this.sqliteDB = sqliteDB;
          this.file = file;
          this.alertController = alertController;
          this.alertService = alertService;
          this.menuLists = [{
            id: 1,
            menu: 'General Questions',
            image: 'assets/icons/question.svg',
            server: 'assets/icons/sids/server_general.svg',
            url: '/tabs/sids-schooldata',
            sync: 1
          }, {
            id: 2,
            menu: 'Building',
            image: 'assets/icons/Iconawesomebuilding.svg',
            server: 'assets/icons/Iconawesome-building.svg',
            url: '/tabs/new-dashboard',
            sync: 1
          }, {
            id: 3,
            menu: 'Common Spaces',
            image: 'assets/icons/sids/local_commanspace.svg',
            server: 'assets/icons/sids/server_commonspace.svg',
            url: '/tabs/sids-commonspaces',
            sync: 1
          }];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
          this.filterGeneral = [];
        }

        return _createClass(CommonDashboardPage, [{
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
            this.getRoom(); // this.autoSync();
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
                    'expanted': '1'
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
                  'expanted': '1'
                },
                skipLocationChange: false
              });
            } // this.router.navigate([item.url], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '1' }, skipLocationChange: false });

          }
        }, {
          key: "goToBack",
          value: function goToBack() {}
        }, {
          key: "serverData",
          value: function serverData() {
            var _this = this;

            debugger;
            var query = 'SELECT * FROM sidsCommonServer' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.menuLists[2].sync = 3;
                _this.serverDatas = true;
                console.log('Server');
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
            var query = 'SELECT * FROM sidsGeneralServer' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this2.generalServer = true;
                _this2.menuLists[0].sync = 3;
                console.log('Server general');
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

            var safety = 'SELECT * FROM sids_safety_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var common = 'SELECT * FROM sids_compoundwall_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var water = 'SELECT * FROM sids_water_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var playground = 'SELECT * FROM sids_playground_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
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

            var selectQuery = 'SELECT * FROM sids_general_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
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

            var query = 'SELECT * FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
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

            var query = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
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

            var query = 'SELECT * FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
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
            this.sidsService.SecVistorSaveSchlDeta(data).subscribe(function (res) {
              _this9.onAllDelete();
            });
          }
        }, {
          key: "onAllDelete",
          value: function onAllDelete() {
            var _this0 = this;

            var query = 'DELETE FROM  sidsBuildingQuestion';
            var query1 = 'DELETE FROM  sidsFloorQuestion';
            var query2 = 'DELETE FROM  newRoomscommons';
            var query3 = 'DELETE FROM  sidsFloorSaveDatas';
            var query4 = 'DELETE FROM  sids_general_schooldata';
            var query5 = 'DELETE FROM  sids_sanitation_schooldata';
            var query6 = 'DELETE FROM  sids_water_schooldata';
            var query7 = 'DELETE FROM  sids_compoundwall_data';
            var query8 = 'DELETE FROM  sidsRoomSaves';
            var query9 = 'DELETE FROM  sidsBuildSavesDatas';
            var query10 = 'DELETE FROM  sidsCommonServer';
            var query11 = 'DELETE FROM  sids_safety_data';
            var query12 = 'DELETE FROM  sidsGeneralServer';
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
                                      _this0.menuLists = [{
                                        id: 1,
                                        menu: 'General Questions',
                                        image: 'assets/icons/question.svg',
                                        server: 'assets/icons/sids/server_general.svg',
                                        url: '/tabs/sids-schooldata',
                                        sync: 1
                                      }, {
                                        id: 2,
                                        menu: 'Building',
                                        image: 'assets/icons/Iconawesomebuilding.svg',
                                        server: 'assets/icons/Iconawesome-building.svg',
                                        url: '/tabs/new-dashboard',
                                        sync: 1
                                      }, {
                                        id: 3,
                                        menu: 'Common Spaces',
                                        image: 'assets/icons/sids/local_commanspace.svg',
                                        server: 'assets/icons/sids/server_commonspace.svg',
                                        url: '/tabs/sids-commonspaces',
                                        sync: 1
                                      }];

                                      _this0.router.navigate(['/tabs/dashboard']);
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
            this.router.navigate(['/tabs/sids-school']);
          }
        }, {
          key: "beforeSchoolAlert",
          value: function beforeSchoolAlert(school) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
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
                            _this1.router.navigate(['/tabs/sids-schooldata'], {
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
                            _this1.router.navigate(['/tabs/new-dashboard'], {
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
                            _this1.router.navigate(['/tabs/sids-commonspaces'], {
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
            this.sidsService.SecSidsSchlGenrlInfoGet(this.vistId).subscribe(function (res) {
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

            this.sidsService.SecSidsGeneralQuesGet(this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this12.filterServerGeneral = res.result;
                console.log("filterServerGeneral", _this12.filterServerGeneral); // let Text = 'data:image/jpeg;base64,'
                // let addText = Text+this.filterServerGeneral[0].GeneralPhoto;
                // this.filterServerGeneral[0].GeneralPhoto = "";
                // this.filterServerGeneral[0].GeneralPhoto = addText;

                debugger;

                if (_this12.filterServerGeneral[0].GeneralPhoto) {
                  var url = 'https://deka0egrc3bqo.cloudfront.net/' + _this12.filterServerGeneral[0].GeneralPhoto;

                  var fileTransfer = _this12.transfer.create();

                  fileTransfer.download(url, _this12.file.externalDataDirectory + _this12.filterServerGeneral[0].GeneralPhoto, true).then(function (entry) {
                    _this12.file.readAsDataURL(_this12.file.externalDataDirectory, _this12.filterServerGeneral[0].GeneralPhoto).then(function (base64string) {
                      _this12.filterServerGeneral[0].GeneralPhoto = base64string;

                      _this12.checkLocalgeneral();

                      _this12.insertLocalDB2();

                      _this12.menuLists[0].sync = 3;
                      _this12.generalServer = true;
                    });
                  });
                } else {
                  _this12.checkLocalgeneral();

                  _this12.insertLocalDB2();

                  _this12.menuLists[0].sync = 3;
                  _this12.generalServer = true;
                }
              } else {
                _this12.checkLocalDBGeneral();
              }
            });
          }
        }, {
          key: "checkLocalgeneral",
          value: function checkLocalgeneral() {
            var _this13 = this;

            var selectQuery = 'SELECT * FROM sids_general_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
              if (data.rows.length > 0) {} else {
                if (_this13.filterServerGeneral.length > 0) {
                  var general = 'INSERT INTO sids_general_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                  _this13.sqliteDB.insert(general, [// null, this.filterServerGeneral[0].SchlId, this.filterServerGeneral[0].VistUId, this.filterServerGeneral[0].SiteNum, parseFloat(this.filterServerGeneral[0].TotalArea), +this.filterServerGeneral[0].PurpLaptopYN == 1 ? true : false,
                  // this.filterServerGeneral[0].PurpLaptopFun, this.filterServerGeneral[0].PurpLaptopNonFun, +this.filterServerGeneral[0].PurpComputerYN == 1 ? true : false, this.filterServerGeneral[0].PurpComputerFun, this.filterServerGeneral[0].PurpComputerNonFun,
                  // +this.filterServerGeneral[0].PurpTabYN == 1 ? true : false, this.filterServerGeneral[0].PurpTabFun, this.filterServerGeneral[0].PurpTabNonFun, +this.filterServerGeneral[0].PurpPrinterYN == 1 ? true : false,
                  // this.filterServerGeneral[0].PurpPrinterFun, this.filterServerGeneral[0].PurpPrinterNonFun, +this.filterServerGeneral[0].PurpProjectorYN == 1 ? true : false, this.filterServerGeneral[0].PurpProjectorFun, this.filterServerGeneral[0].PurpProjectorNonFun, 1
                  null, _this13.filterServerGeneral[0].SchlId, _this13.filterServerGeneral[0].VistUId, _this13.filterServerGeneral[0].SiteNum, parseFloat(_this13.filterServerGeneral[0].TotalArea), parseFloat(_this13.filterServerGeneral[0].TotalLandAreaExcludPg), _this13.filterServerGeneral[0].LaptopNumFunc, _this13.filterServerGeneral[0].ComputerNumFunc, _this13.filterServerGeneral[0].TabNumFunc, _this13.filterServerGeneral[0].PrinterNumFunc, _this13.filterServerGeneral[0].PrjctrNumFunc, _this13.filterServerGeneral[0].ScannerNumFunc, +_this13.filterServerGeneral[0].InternetYn == 1 ? true : false, _this13.filterServerGeneral[0].InternetType, _this13.filterServerGeneral[0].InternetTypeOthers, _this13.filterServerGeneral[0].InternetServProv, _this13.filterServerGeneral[0].InternetServProvOthers, _this13.filterServerGeneral[0].Bandwidth, _this13.filterServerGeneral[0].GeneralPhoto, _this13.filterServerGeneral[0].GeneralPhotoName, // this.filterServerGeneral[0].ElectricityAvai, 
                  _this13.filterServerGeneral[0].SolarPanelAvai, _this13.filterServerGeneral[0].GeneratorAvai, _this13.filterServerGeneral[0].GeneralLatitude, _this13.filterServerGeneral[0].GeneralLongitude, 1]).then(function (insertres) {
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

            var deleteQuery = 'SELECT * FROM sids_compoundwall_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this14.commonSave = true;
              } else {
                var common = 'INSERT INTO sids_compoundwall_data VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';

                _this14.sqliteDB.insert(common, [null, _this14.schoolId, _this14.vistId, _this14.filterGeneral[0].CmpdwallSta, parseFloat(_this14.filterGeneral[0].CmpdwallReqLen), _this14.filterGeneral[0].CmpdwallReqt, parseFloat(_this14.filterGeneral[0].CmpdwallHTInc), parseFloat(_this14.filterGeneral[0].AreaWW), parseFloat(_this14.filterGeneral[0].AreaReplastering), parseFloat(_this14.filterGeneral[0].AreaBrickwork), parseInt(_this14.filterGeneral[0].SchoolTotalGates), _this14.filterGeneral[0].GateFunc, 1]).then(function (insertres) {
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

            var deleteQuery = 'SELECT * FROM sids_playground_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this15.playgroundSave = true;
              } else {
                var datainsert = 'INSERT INTO sids_playground_data VALUES (?,?,?,?,?,?,?,?)';

                _this15.sqliteDB.insert(datainsert, [null, _this15.schoolId, _this15.vistId, _this15.filterGeneral[0].PlaygroYn == 1 ? true : false, _this15.filterGeneral[0].PlaygroOutdoorGamYn == 1 ? true : false, parseFloat(_this15.filterGeneral[0].PlaygroArea), _this15.filterGeneral[0].OutsiClsNum, 1]).then(function (insertres) {
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

            var deleteQuery = 'SELECT * FROM sids_water_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this17.waterSave = true;
              } else {
                var datainsert = 'INSERT INTO sids_water_schooldata VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

                _this17.sqliteDB.insert(datainsert, [null, _this17.schoolId, _this17.vistId, _this17.filterGeneral[0].WatAvaiSchool, _this17.filterGeneral[0].ResUnAvaiWater, _this17.filterGeneral[0].srcWaterAvai, _this17.filterGeneral[0].srcWaterOthers, _this17.filterGeneral[0].BorWelFunc, _this17.filterGeneral[0].FreqWaterAvail, _this17.filterGeneral[0].DWSumpYn == 1 ? true : false, _this17.filterGeneral[0].DWSumpFun, _this17.filterGeneral[0].DWSumpAvai, _this17.filterGeneral[0].DWPumpYn == 1 ? true : false, _this17.filterGeneral[0].DWPumpFun, _this17.filterGeneral[0].DWPumpRepair, _this17.filterGeneral[0].NumDWStation, _this17.filterGeneral[0].WaterRoFunc, _this17.filterGeneral[0].srcDrnkWaterAvai, _this17.filterGeneral[0].srcDrnkWaterAvaiOthers, _this17.filterGeneral[0].WaterComHandwash]).then(function (insertres) {
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

            var deleteQuery = 'SELECT * FROM sids_safety_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
              if (data.rows.length > 0) {
                _this18.safetySave = true;
              } else {
                var safety = 'INSERT INTO sids_safety_data VALUES (?,?,?,?,?,?,?,?,?,?)';

                _this18.sqliteDB.insert(safety, [null, _this18.schoolId, _this18.vistId, _this18.filterGeneral[0].EBliShiYn == 1 ? true : false, _this18.filterGeneral[0].RefilAreReq == 1 ? true : false, _this18.filterGeneral[0].WatLoggYn == 1 ? true : false, _this18.filterGeneral[0].WatLogRepair, _this18.filterGeneral[0].OpenWellYn == 1 ? true : false, _this18.filterGeneral[0].CmnDustbinYN == 1 ? true : false, 1]).then(function (insertres) {
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
            var datainsert = "INSERT INTO sidsCommonServer VALUES (?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "1"]).then(function (insertres) {
              console.log('server inserted successfully', insertres);
            });
          }
        }, {
          key: "addBuildingServer",
          value: function addBuildingServer() {
            var _this19 = this;

            this.sidsService.SecSidsBulidVisitGet(this.vistId, this.schoolId).subscribe(function (res) {
              if (res.dataStatus) {
                _this19.filterbuild = res.result; // console.log("filterBuild",this.filterbuild);

                _this19.menuLists[1].sync = 3;
                _this19.serverDataBuilding = true; // for(let i=0; i<this.filterbuild.length; i++){
                //   if(this.filterbuild[i].BldgFrontPhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgFrontPhoto).then(responce =>{
                //       this.filterbuild[i].BldgFrontPhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                //   if(this.filterbuild[i].BldgBackPhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgBackPhoto).then(responce =>{
                //       this.filterbuild[i].BldgBackPhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                //   if(this.filterbuild[i].BldgRightSidePhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgRightSidePhoto).then(responce =>{
                //       this.filterbuild[i].BldgRightSidePhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                //   if(this.filterbuild[i].BldgLeftSidePhoto){
                //     this.sqliteDB.DonwloadImage(this.filterbuild[i].BldgLeftSidePhoto).then(responce =>{
                //       this.filterbuild[i].BldgLeftSidePhoto = responce;
                //       console.log("BldgFrontPhoto",responce);
                //     })
                //   }
                // }

                _this19.insertLocalBuild(_this19.filterbuild);
              }
            });
          }
        }, {
          key: "insertLocalBuild",
          value: function insertLocalBuild(BuildingArray) {
            var _this20 = this;

            var Text = 'https://deka0egrc3bqo.cloudfront.net/';
            console.log("Building Array", BuildingArray);
            var dataList = "INSERT INTO sidsBuildingQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var dataList2 = "INSERT INTO sidsBuildSavesDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
            BuildingArray.forEach(function (element) {
              var idbuild = parseInt(element.BldgId) - 100;

              _this20.sqliteDB.insert(dataList2, [null, idbuild, _this20.schoolId, _this20.vistId, "", element.BldgId, "1", "false", "Building Name", "", ""]).then(function (insertres) {
                console.log('sidsBuildSavesDatas successfully');
              });
            });
            BuildingArray.forEach(function (element) {
              _this20.sqliteDB.insert(dataList, [null, _this20.schoolId, _this20.vistId, element.BldgId, "", element.BldgName, // element.BldgAge,
              element.BldgFundSourceCons, element.BldgFundSourceConsOthers, element.BldgType, parseFloat(element.BldgLength), parseFloat(element.BldgBre), element.BldgCondition, parseFloat(element.ElectricityAvai), element.BldgRepair ? element.BldgRepair.toString() : element.BldgRepair, parseFloat(element.AreaWeatheringReq), parseFloat(element.AreaPressedTiles), parseFloat(element.PipeNeedHwDw), parseFloat(element.PipeNeedToilet), parseFloat(element.WireLenElectrcty), parseFloat(element.AreaWaterLeakage), parseFloat(element.AreaExtWw), parseFloat(element.AreaIntWw), parseFloat(element.AreaReplasting), parseFloat(element.AreaReflooring), parseFloat(element.AreaFlrPatchwrk), +element.AuditoriumYn == 1 ? true : false, // element.AuditoriumStageReqt ? element.AuditoriumStageReqt.toString() : element.AuditoriumStageReqt , parseFloat(element.AuditoriumStageArea), parseFloat(element.AuditoriumStageHeight), 
              // parseFloat(element.AuditoriumStageAreaLevel), 
              element.AuditoriumLights, element.AuditoriumFans, +element.AuditoriumPrjtYn == 1 ? true : false, // +element.AuditoriumPrjtFunc, 
              element.RampAvailYn, +element.RampRepairYn == 1 ? true : false, +element.RampHandrailYn == 1 ? true : false, +element.FireExtYn == 1 ? true : false, // +element.FirstAidKitYn == 1 ? true : false, +element.CCTVCameraYn == 1 ? true : false,
              //  +element.BuildTabsYn == 1 ? true : false, +element.BuildTabsNumber, 
              +element.BuildReapairComArea == 1 ? true : false, element.BldgYrConst, element.BldgConstAgency, element.BldgConstOthers, element.AudiStageStatus, Text + element.BldgFrontPhoto, element.BldgFrontPhotoName, element.BldgExterior, element.BldgInterior, +element.RainWaterFacilityYn == 1 ? true : false, // Text+element.BldgBackPhoto, element.BldgBackPhotoName, Text+element.BldgRightSidePhoto, element.BldgRightSidePhotoName, Text+element.BldgLeftSidePhoto, element.BldgLeftSidePhotoName,
              element.LATITUDE, element.LOGITUDE]).then(function (insertres) {
                console.log('sidsBuildingQuestion successfully', insertres);
                var idbuild = parseInt(element.BldgId) - 100;
                var name = element.BldgName;
                console.log(_this20.schoolId, element.BldgId);
                var query = 'UPDATE sidsBuildSavesDatas SET Status = 3 WHERE sidsBuildSavesDatas.SclId = "' + _this20.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                var query1 = 'UPDATE sidsBuildSavesDatas SET BuildName="' + name + '" WHERE sidsBuildSavesDatas.SclId = "' + _this20.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + element.BldgId + '"';
                var query2 = 'UPDATE sidsBuildSavesDatas SET BuildCondi="' + element.BldgCondition + '", FloorCondition="' + 1 + '" WHERE sidsBuildSavesDatas.SclId = "' + _this20.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + element.BldgId + '"'; // console.log("Update Query 1 ",query,"  Update Query 2  " ,query1);

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
          key: "downloadPhoto",
          value: function downloadPhoto(image) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this21 = this;

              var url, fileTransfer;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    url = 'https://deka0egrc3bqo.cloudfront.net/' + image;
                    fileTransfer = this.transfer.create();
                    _context3.n = 1;
                    return fileTransfer.download(url, this.file.externalDataDirectory + image, true).then(function (entry) {
                      _this21.file.readAsDataURL(_this21.file.externalDataDirectory, image).then(function (base64string) {
                        return base64string;
                      });
                    });

                  case 1:
                    return _context3.a(2);
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "addFloorServer",
          value: function addFloorServer() {
            var _this22 = this;

            this.sidsService.SecSidsFloorVisitDet(this.schoolId, this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this22.filterfloor = res.result;
                _this22.menuLists[1].sync = 3;
                _this22.serverDataFloor = true;
                console.log("filterfloor", _this22.filterfloor);

                _this22.insertLocalFloor(_this22.filterfloor);
              } else {
                if (_this22.serverDataBuilding) {
                  _this22.serverDataFloor = true;
                  _this22.serverDataRoom = true;
                }
              }
            });
          }
        }, {
          key: "insertLocalFloor",
          value: function insertLocalFloor(floorArray) {
            var _this23 = this;

            var dataList = "INSERT INTO sidsFloorQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var dataList2 = "INSERT INTO sidsFloorSaveDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
            floorArray.forEach(function (element) {
              var floor = parseInt(element.FoolrId) - 1000;
              var build = parseInt(element.BldgId) - 100;

              _this23.sqliteDB.insert(dataList2, [null, floor, _this23.schoolId, _this23.vistId, build, "", element.FoolrId, "1", "Floor Name", "", "", ""]).then(function (insertres) {
                console.log('sidsFloorSaveDatas successfully');
              });
            });
            floorArray.forEach(function (element) {
              _this23.sqliteDB.insert(dataList, [null, _this23.schoolId, _this23.vistId, element.BldgId, "", element.FoolrId, "", element.FloorNum, element.FloorCondi, +element.FloorSafety == 1 ? true : false, element.ReqParapetWall, parseFloat(element.ParapetWallLength), parseFloat(element.ParapetWallHeight), parseFloat(element.ParapetWallWhiteWash), parseFloat(element.ParapetWallReplasting), parseFloat(element.ParapetWallBrickWork), +element.BldOhtYn == 1 ? true : false, element.FunBldOhtYn, element.RepairSteps, element.FoolrTy, parseFloat(element.FoolrAreReq), element.OutPipY, parseFloat(element.PipLenNeed), element.WeatheringReq, +element.RoofCleaYn == 1 ? true : false, +element.CorridorYn == 1 ? true : false, element.CorriCondi, parseFloat(element.CorriLen), parseFloat(element.CorridorWidth), element.CorriLighFunc, element.CorridorRepair, parseFloat(element.AreaWw), parseFloat(element.AreaReplastering), parseFloat(element.AreaReflooring), parseFloat(element.AreaCeilingPlaster), parseFloat(element.AreaFlrPatchwork), // element.DoorReplace, 
              element.JaalisReplace, // element.DoorRepair,
              element.JaalisRepair, // parseFloat(element.DoorRepaint), 
              parseFloat(element.JaalisRepaint)]).then(function (insertres) {
                console.log('sidsFloorQuestion successfully', insertres);
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
                var idfloor = parseInt(element.FoolrId) - 1000; // let updateQuery =  'UPDATE sidsFloorSaveDatas SET Status = 3 , FloorName="' + name + '"' +
                //   ' WHERE SclId = "' + this.schoolId + '"' +
                //   ' And BuildIndx = "' + idbuild + '"' +
                //   ' And FloorId = "' + element.FloorId + '"';

                var query1 = 'UPDATE sidsFloorSaveDatas SET Status = 3 WHERE SclId = "' + _this23.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                var query2 = 'UPDATE sidsFloorSaveDatas SET FloorName="' + name + '" WHERE SclId = "' + _this23.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                var query3 = 'UPDATE sidsFloorSaveDatas SET FloorClose = ' + "3" + ' WHERE SclId = "' + _this23.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                var query4 = 'UPDATE sidsFloorSaveDatas SET FloorCondi= "' + element.FloorCondi + '", RoomCondition= "' + 1 + '" WHERE SclId = "' + _this23.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + element.FoolrId + '"';
                console.log("UPDATE", query1);
                return _this23.sqliteDB.update(query1).then(function (data) {
                  return _this23.sqliteDB.update(query2).then(function (data) {
                    return _this23.sqliteDB.update(query3).then(function (data) {
                      return _this23.sqliteDB.update(query4).then(function (data) {
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
            var _this24 = this;

            this.sidsService.SecSidsRoomsVisitDet(this.schoolId, this.vistId).subscribe(function (res) {
              if (res.dataStatus) {
                _this24.filterRoom = res.result;
                console.log("filterRoom", _this24.filterRoom);
                _this24.serverDataRoom = true;
                _this24.menuLists[1].sync = 3;

                _this24.insertLocalRoom(_this24.filterRoom);
              } else {
                if (_this24.serverDataFloor) {
                  _this24.serverDataRoom = true;
                }
              }
            });
          }
        }, {
          key: "insertLocalRoom",
          value: function insertLocalRoom(RoomArray) {
            var _this25 = this;

            var Text = 'https://deka0egrc3bqo.cloudfront.net/';
            var dataList = "INSERT INTO newRoomscommons VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            var dataList2 = "INSERT INTO sidsRoomSaves VALUES (?,?,?,?,?,?,?,?,?)";
            RoomArray.forEach(function (element) {
              var idroom = parseInt(element.RoomId) - 10000;
              var floor = parseInt(element.FloorId) - 1000;
              var build = parseInt(element.BldgId) - 100;

              _this25.sqliteDB.insert(dataList2, [null, idroom, _this25.schoolId, _this25.vistId, build, floor, element.RoomId, "1", "Room"]).then(function (insertres) {
                console.log('sidsRoomSaves successfully', idroom, floor, build);
              });
            });
            RoomArray.forEach(function (element) {
              _this25.sqliteDB.insert(dataList, [null, null, _this25.schoolId, _this25.vistId, "", element.BldgId, "", element.FloorId, element.RoomId, element.RoomUse, element.RoomName, element.RoomCondition, element.RepairType, element.MajorRepair, element.MinorRepair, parseFloat(element.AreaPlastering), // parseFloat(element.AreaExtWw), 
              parseFloat(element.AreaIntWw), parseFloat(element.AreaReplastering), parseFloat(element.AreaReflooring), parseFloat(element.AreaPatchwork), element.DoorReplace, element.WindowReplace, element.DoorRepair, element.WindowRepair, parseFloat(element.DoorRepaint), parseFloat(element.WindowRepaint), element.LatrinReplace, element.UrinalReplace, parseFloat(element.PipeNeed), parseFloat(element.DrainageNeed), parseFloat(element.RoomLength), parseFloat(element.RoomBreadth), // parseFloat(element.RoomHeight),
              element.FloorType, element.NumBenchAvail, element.NumDesksAvail, element.TubelightFunc, element.FansFunc, element.Cupboard, element.NumCupboardReq, element.TeacherTableYn == 1 ? true : false, // element.TelevisionYn == 1 ? true : false, 
              element.TelevisionFuncYn == 1 ? true : false, // element.SmartboardPrjtYn == 1 ? true : false, 
              element.SmartboardPrjtFuncYn == 1 ? true : false, element.ClassRoomProjYn == 1 ? true : false, // element.ClassRoomProjFuncYn == 1 ? true : false,
              element.LabType, // element.LabComputerYn == 1 ? true : false, 
              element.LabComputerFunc, element.LabComputerRepair, element.LabWatersupplyYn, +element.LabDrainage == 1 ? true : false, element.LibraryBooks, // element.HmRoomTblYn, 
              element.StaffrmUsedBy, element.KitchenWtrSrc, element.KitchenLPGConYn == 1 ? true : false, +element.KitchenWtrSupply == 1 ? true : false, element.KitchenStorageYn == 1 ? true : false, element.KitchenCleanYn == 1 ? true : false, element.KitchenCleanYn == 1 ? true : false, element.DiningFunctionalYn == 1 ? true : false, element.DiningSeatingCapacity, element.DiningSeatingWtrSupply, element.NoonmealStorageClean, element.StoreRoomPurpose, element.StrroomStorageClean == 1 ? true : false, element.ReasonEmpty, element.ToiletType, element.ToiletWaterCon, element.ToiletWasteDis, // +element.IwcToilet == 1 ? true : false, 
              element.Iwccubicles, element.IwccubiclesFunc, // +element.EwcToilet == 1 ? true : false, 
              element.Ewccubicles, element.Ewccubiclesfunc, // +element.UrinalToilet == 1 ? true : false, 
              element.Urinals, element.Urinalsfunc, element.ToiletTapsFunc, element.ToiletNeedTabs, element.ToiletBucket, element.Toiletmugs, element.SizeSuitable, element.Roof, element.ToiletSanitaryPad, element.SanitWasteDisp, element.HwFacility, element.AuditoriumYn == 1 ? true : false, element.AuditoriumStageYn == 1 ? true : false, // element.AuditoriumStageReqt,
              // parseFloat(element.AuditoriumStageArea), 
              // parseFloat(element.AuditoriumStageHeight), 
              // parseFloat(element.AuditoriumStageAreaLevel),
              element.AuditoriumLights, element.AuditoriumFans, // element.AuditoriumPrjtYn, 
              element.AuditoriumPrjtFunc, element.SmartRoomFacilityYn == 1 ? true : false, element.SmartRoomDeviceFunYn == 1 ? true : false, element.SmartRoomComputersYn == 1 ? true : false, element.SmartRoomFunComp, element.SmartRoomFunCompRepair, element.RoomArea, element.NumChairAvail, element.NumTableAvail, element.LabInternetConn == 1 ? true : false, element.LabInternetConnType, element.LabBandwidth, element.LabServiceProvider, element.LabServiceProviderOthers, element.LabProjector, element.LabPrinter, element.LabWebCamera, element.LabMic, element.LabHeadphones, element.LabLatitude, element.LabLogitude, Text + element.LabPhotoOne, element.LabPhotoOneName, // Text+element.LabPhotoTwo, element.LabPhotoTwoName, 
              element.HmRoomToiletYn == 1 ? true : false, element.HmRoomToiletStatus, element.DiningRoomHandwash == 1 ? true : false, element.DiningNumTapFunc, element.ToiletCubicSideHandRail, element.AudiStageStatus, element.SmartTabletFunc, element.SmartSpeakerFunc, element.SmartPaFunc, element.SmartInternet == 1 ? true : false, element.SmartInternetConnType, element.SmartInternetConnTypeOthers, element.SmartBandwidth, element.SmartServiceProvider, element.SmartServiceProviderOthers]).then(function (insertres) {
                console.info("Room Details Stored Locally", insertres);
                var id = parseInt(element.BldgId) - 100;
                var floor = parseInt(element.FloorId) - 1000;
                var room = parseInt(element.RoomId) - 10000;
                var updateQuery = 'UPDATE sidsRoomSaves SET Status = 3, RoomName="' + element.RoomName + '"' + ' WHERE SclId = "' + _this25.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + element.RoomId + '"';
                console.log("sidsRoomSaves query", updateQuery, id, floor, room);
                return _this25.sqliteDB.update(updateQuery).then(function (data) {
                  console.log("update room", data);
                  var query = 'SELECT * FROM sidsRoomSaves';
                  return _this25.sqliteDB.getDataLocalDB(query).then(function (data) {
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
            var _this26 = this;

            var datainsert = "INSERT INTO sidsGeneralServer VALUES (?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, "1"]).then(function (insertres) {
              console.log('server inserted successfully', _this26.schoolId, _this26.vistId);

              _this26.goToBack();
            });
          }
        }, {
          key: "getPopup",
          value: function getPopup() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var _this27 = this;

              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    if (!(this.menuLists[0].sync == 3 && this.menuLists[1].sync == 3 && this.menuLists[2].sync == 3)) {
                      _context4.n = 2;
                      break;
                    }

                    _context4.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirmation',
                      subHeader: 'Already Data entered if want to update',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'cancel_click',
                        handler: function handler(data) {
                          _this27.router.navigate(['/tabs/sids-school']); // console.log("Complete Check")

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
                    alert = _context4.v;
                    _context4.n = 2;
                    return alert.present();

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "autoSync",
          value: function autoSync() {
            this.NetworkService.onNetworkChange().subscribe(function (status) {
              if (status == src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.ConnectionStatus.Online) {// if(!this.generalServer){
                //   this.onSyncSaveGeneral();
                // }
                // if(!this.serverDatas){
                //   this.onSyncSaveCommon();
                // }
                // if(!this.serverDataBuilding && !this.serverDataFloor && !this.serverDataRoom){
                //   this.onSyncSaveBuilding();
                // }
              }
            });
          }
        }, {
          key: "onSyncSaveGeneral",
          value: function onSyncSaveGeneral() {
            var _this28 = this;

            var selectQuery = 'SELECT * FROM sids_general_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            ' And Status = 2"';
            return this.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
              console.log(data);

              if (data.rows.length > 0) {
                var dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataList.push(data.rows.item(i));
                }

                var dataImage = dataList[0].GeneralPhoto.split(',');

                if (dataList.length > 0) {
                  var records = {
                    "records": {
                      "IndexId": "",
                      "SchlId": _this28.schoolId,
                      "VistUId": _this28.vistId,
                      "SiteNum": dataList[0].SiteNum,
                      "TotalArea": dataList[0].TotalArea,
                      "TotalLandAreaExcludPg": dataList[0].TotalLandAreaExcludPg,
                      "LaptopNumFunc": dataList[0].LaptopNumFunc,
                      "ComputerNumFunc": dataList[0].ComputerNumFunc,
                      "TabNumFunc": dataList[0].TabNumFunc,
                      "ScannerNumFunc": dataList[0].ScannerNumFunc,
                      "PrinterNumFunc": dataList[0].PurpPrinterFun,
                      "PrjctrNumFunc": dataList[0].PrjctrNumFunc,
                      "InternetYn": dataList[0].InternetYn == "false" ? 2 : 1,
                      "InternetType": dataList[0].InternetType,
                      "InternetTypeOthers": dataList[0].InternetTypeOthers,
                      "InternetServProv": dataList[0].InternetServProv,
                      "InternetServProvOthers": dataList[0].InternetServProvOthers,
                      "Bandwidth": dataList[0].Bandwidth,
                      "GeneralPhoto": dataImage[1],
                      // "ElectricityAvai": dataList[0].ElectricityAvai,
                      "SolarPanelAvai": dataList[0].SolarPanelAvai,
                      "GeneratorAvai": dataList[0].GeneratorAvai
                    }
                  }; // console.log("records",records)

                  _this28.sidsService.SidsGeneralQues(records).subscribe(function (res) {
                    if (res.dataStatus) {
                      var query = 'UPDATE sids_general_schooldata SET Status = ' + "1" + ' WHERE sids_general_schooldata.SchlId = "' + _this28.schoolId + '" And sids_general_schooldata.VistUId = "' + _this28.vistId + '"';
                      return _this28.sqliteDB.update(query).then(function (data) {
                        var datainsert = "INSERT INTO sidsGeneralServer VALUES (?,?,?,?)";

                        _this28.sqliteDB.insert(datainsert, [null, _this28.schoolId, _this28.vistId, "1"]).then(function (insertres) {
                          console.log('server inserted successfully', insertres);
                        });

                        _this28.generalServerData();

                        _this28.alertService.success('Saved Successfully');
                      });
                    }
                  });
                }
              }
            });
          }
        }, {
          key: "onSyncSaveCommon",
          value: function onSyncSaveCommon() {
            var _this29 = this;

            var safety = 'SELECT * FROM sids_safety_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var playground = 'SELECT * FROM sids_playground_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var compoundWall = 'SELECT * FROM sids_compoundwall_data' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            var water = 'SELECT * FROM sids_water_schooldata' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(safety).then(function (data1) {
              return _this29.sqliteDB.getDataLocalDB(playground).then(function (data2) {
                return _this29.sqliteDB.getDataLocalDB(compoundWall).then(function (data3) {
                  return _this29.sqliteDB.getDataLocalDB(water).then(function (data4) {
                    var dataList1 = [];
                    var dataList3 = [];
                    var dataList4 = [];
                    var dataList2 = [];

                    if (data1.rows.length > 0) {
                      for (var i = 0; i < data1.rows.length; i++) {
                        dataList1.push(data1.rows.item(i));
                      }
                    }

                    if (data2.rows.length > 0) {
                      for (var i = 0; i < data2.rows.length; i++) {
                        dataList2.push(data2.rows.item(i));
                      }
                    }

                    if (data3.rows.length > 0) {
                      for (var i = 0; i < data3.rows.length; i++) {
                        dataList3.push(data3.rows.item(i));
                      }
                    }

                    if (data4.rows.length > 0) {
                      for (var i = 0; i < data4.rows.length; i++) {
                        dataList4.push(data4.rows.item(i));
                      }
                    }

                    if (dataList1.length > 0 && dataList2.length > 0 && dataList3.length > 0 && dataList4.length > 0) {
                      var data = {
                        "records": {
                          "IndexId": "",
                          "SchlId": _this29.schoolId,
                          "VistUId": _this29.vistId,
                          "EBliShiYn": dataList1[0].EBliShiYn == "false" ? 2 : dataList1[0].EBliShiYn == "true" ? 1 : dataList1[0].EBliShiYn == true ? 1 : 2,
                          "RefilAreReq": dataList1[0].RefilAreReq == "false" ? 2 : dataList1[0].RefilAreReq == "true" ? 1 : dataList1[0].RefilAreReq == true ? 1 : 2,
                          "WatLoggYn": dataList1[0].WatLoggYn == "false" ? 2 : dataList1[0].WatLoggYn == "true" ? 1 : dataList1[0].WatLoggYn == true ? 1 : 2,
                          "WatLogRepair": dataList1[0].WatLogRepair,
                          "OpenWellYn": dataList1[0].OpenWellYn == "false" ? 2 : dataList1[0].OpenWellYn == "true" ? 1 : dataList1[0].OpenWellYn == true ? 1 : 2,
                          "CmnDustbinYN": dataList1[0].CmnDustbinYN == "false" ? 2 : dataList1[0].CmnDustbinYN == "true" ? 1 : dataList1[0].CmnDustbinYN == true ? 1 : 2,
                          "PlaygroYn": dataList2[0].PlaygroYn == "false" ? 2 : dataList2[0].PlaygroYn == "true" ? 1 : dataList2[0].PlaygroYn == true ? 1 : 2,
                          "PlaygroOutdoorGamYn": dataList2[0].PlaygroOutdoorGamYn == "false" ? 2 : dataList2[0].PlaygroOutdoorGamYn == "true" ? 1 : dataList2[0].PlaygroOutdoorGamYn == true ? 1 : 2,
                          "PlaygroArea": dataList2[0].PlaygroArea,
                          "OutsiClsNum": dataList2[0].OutsiClsNum,
                          "WatAvaiSchool": dataList4[0].WatAvaiSchool,
                          "ResUnAvaiWater": dataList4[0].ResUnAvaiWater ? dataList4[0].ResUnAvaiWater.toString() : dataList4[0].ResUnAvaiWater,
                          "srcWaterAvai": dataList4[0].srcWaterAvai ? dataList4[0].srcWaterAvai.toString() : dataList4[0].srcWaterAvai,
                          "srcWaterOthers": dataList4[0].srcWaterOthers,
                          "BorWelFunc": dataList4[0].BorWelFunc,
                          "FreqWaterAvail": dataList4[0].FreqWaterAvail,
                          "DWSumpYn": dataList4[0].DWSumpYn == "false" ? 2 : dataList4[0].DWSumpYn == "true" ? 1 : dataList4[0].DWSumpYn == true ? 1 : 2,
                          "DWSumpFun": dataList4[0].DWSumpFun,
                          "DWSumpAvai": dataList4[0].DWSumpAvai,
                          "DWPumpYn": dataList4[0].DWPumpYn == "false" ? 2 : dataList4[0].DWPumpYn == "true" ? 1 : dataList4[0].DWPumpYn == true ? 1 : 2,
                          "DWPumpFun": dataList4[0].DWPumpFun,
                          "DWPumpRepair": dataList4[0].DWPumpRepair,
                          "NumDWStation": dataList4[0].NumDWStation,
                          "WaterRoFunc": dataList4[0].WaterRoFunc,
                          "srcDrnkWaterAvai": dataList4[0].srcDrnkWaterAvai,
                          "srcDrnkWaterAvaiOthers": dataList4[0].srcDrnkWaterAvaiOthers,
                          "WaterComHandwash": dataList4[0].WaterComHandwash,
                          "CmpdwallSta": dataList3[0].CmpdwallSta,
                          "CmpdwallReqLen": dataList3[0].CmpdwallReqLen,
                          "CmpdwallReqt": dataList3[0].CmpdwallReqt ? dataList3[0].CmpdwallReqt.toString() : dataList3[0].CmpdwallReqt,
                          "CmpdwallHTInc": dataList3[0].CmpdwallHTInc,
                          "AreaWW": dataList3[0].AreaWW,
                          "AreaReplastering": dataList3[0].AreaReplastering,
                          "AreaBrickwork": dataList3[0].AreaBrickwork,
                          "SchoolTotalGates": dataList3[0].SchoolTotalGates,
                          "GateFunc": dataList3[0].GateFunc
                        }
                      };

                      _this29.sidsService.SecSidsSchlGenrlInfo(data).subscribe(function (res) {
                        if (res.dataStatus) {
                          var datainsert = "INSERT INTO sidsCommonServer VALUES (?,?,?,?)";

                          _this29.sqliteDB.insert(datainsert, [null, _this29.schoolId, _this29.vistId, "1"]).then(function (insertres) {
                            console.log('server inserted successfully', insertres);
                          });

                          _this29.serverData();

                          _this29.alertService.success('Saved Successfully');
                        }
                      });
                    }
                  });
                });
              });
            });
          }
        }, {
          key: "onSyncSaveBuilding",
          value: function onSyncSaveBuilding() {
            var _this30 = this;

            var query = 'SELECT * FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"' + ' And Status = 2 And ClosingQuestions = 2';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataListBuilding = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListBuilding.push(data.rows.item(i));
                }

                console.log("checkBuildSavedata", dataListBuilding);

                if (dataListBuilding.length > 0) {
                  var _query = 'SELECT * FROM sidsBuildingQuestion' + ' WHERE SclId = "' + _this30.schoolId + '"' + ' And BuildingId = "' + dataListBuilding[0].BuildingId + '"' + ' And VistId = "' + _this30.vistId + '"';

                  return _this30.sqliteDB.getDataLocalDB(_query).then(function (datas) {
                    var dataListBuildingSave = [];

                    for (var i = 0; i < datas.rows.length; i++) {
                      dataListBuildingSave.push(datas.rows.item(i));
                    }

                    if (dataListBuildingSave.length > 0) {
                      var _data = {
                        "records": {
                          "IndexId": "",
                          "SchlId": _this30.schoolId,
                          "VistId": _this30.vistId,
                          "BldgId": dataListBuilding[0].BuildingId,
                          "BldgName": dataListBuildingSave[0].BldgName,
                          "BldgFundSourceCons": dataListBuildingSave[0].BldgFundSourceCons,
                          "BldgFundSourceConsOthers": dataListBuildingSave[0].BldgFundSourceConsOthers,
                          "BldgType": dataListBuildingSave[0].BldgType,
                          "BldgLength": dataListBuildingSave[0].BldgLength,
                          "BldgBre": dataListBuildingSave[0].BldgBre,
                          "BldgCondition": dataListBuildingSave[0].BldgCondition,
                          "BldgRepair": dataListBuildingSave[0].BldgRepair,
                          "BldgYrConst": dataListBuildingSave[0].BldgYrConst,
                          "BldgConstAgency": dataListBuildingSave[0].BldgConstAgency,
                          "BldgConstOthers": dataListBuildingSave[0].BldgConstOthers,
                          "BldgFrontPhoto": dataListBuildingSave[0].BldgFrontPhoto,
                          "BldgExterior": dataListBuildingSave[0].BldgExterior,
                          "BldgInterior": dataListBuildingSave[0].BldgInterior,
                          "RainWaterFacilityYn": dataListBuildingSave[0].RainWaterFacilityYn == "false" ? 2 : dataListBuildingSave[0].RainWaterFacilityYn == "true" ? 1 : dataListBuildingSave[0].RainWaterFacilityYn,
                          // "BldgBackPhoto": dataListBuildingSave[0].BldgBackPhoto,
                          // "BldgRightSidePhoto": dataListBuildingSave[0].BldgRightSidePhoto,
                          // "BldgLeftSidePhoto": dataListBuildingSave[0].BldgLeftSidePhoto,
                          "LATITUDE": dataListBuildingSave[0].LATITUDE,
                          "LOGITUDE": dataListBuildingSave[0].LOGITUDE,
                          "PipeNeedHwDw": dataListBuildingSave[0].PipeNeedHwDw,
                          "PipeNeedToilet": dataListBuildingSave[0].PipeNeedToilet,
                          "WireLenElectrcty": dataListBuildingSave[0].WireLenElectrcty,
                          "AreaWaterLeakage": dataListBuildingSave[0].AreaWaterLeakage,
                          "AreaExtWw": dataListBuildingSave[0].AreaExtWw,
                          "AreaIntWw": dataListBuildingSave[0].AreaIntWw,
                          "AreaReplasting": dataListBuildingSave[0].AreaReplasting,
                          "AreaReflooring": dataListBuildingSave[0].AreaReflooring,
                          "AreaFlrPatchwrk": dataListBuildingSave[0].AreaFlrPatchwrk,
                          "AuditoriumYn": dataListBuildingSave[0].AuditoriumYn == "false" ? 2 : dataListBuildingSave[0].AuditoriumYn == "true" ? 1 : dataListBuildingSave[0].AuditoriumYn,
                          "AudiStageStatus": dataListBuildingSave[0].AudiStageStatus,
                          "AuditoriumLights": dataListBuildingSave[0].AuditoriumLights,
                          "AuditoriumFans": dataListBuildingSave[0].AuditoriumFans,
                          "AuditoriumPrjtYn": dataListBuildingSave[0].AuditoriumPrjtYn == "false" ? 2 : dataListBuildingSave[0].AuditoriumPrjtYn == "true" ? 1 : dataListBuildingSave[0].AuditoriumPrjtYn,
                          "RampAvailYn": dataListBuildingSave[0].RampAvailYn,
                          "RampRepairYn": dataListBuildingSave[0].RampRepairYn == "false" ? 2 : dataListBuildingSave[0].RampRepairYn == "true" ? 1 : dataListBuildingSave[0].RampRepairYn,
                          "RampHandrailYn": dataListBuildingSave[0].RampHandrailYn == "false" ? 2 : dataListBuildingSave[0].RampHandrailYn == "true" ? 1 : dataListBuildingSave[0].RampHandrailYn,
                          "FireExtYn": dataListBuildingSave[0].FireExtYn == "false" ? 2 : dataListBuildingSave[0].FireExtYn == "true" ? 1 : dataListBuildingSave[0].FireExtYn,
                          "BuildReapairComArea": dataListBuildingSave[0].BuildReapairComArea == "false" ? 2 : dataListBuildingSave[0].BuildReapairComArea == "true" ? 1 : dataListBuildingSave[0].BuildReapairComArea,
                          "AreaWeatheringReq": dataListBuildingSave[0].AreaWeatheringReq == "false" ? 2 : dataListBuildingSave[0].AreaWeatheringReq == "true" ? 1 : dataListBuildingSave[0].AreaWeatheringReq,
                          "AreaPressedTiles": dataListBuildingSave[0].AreaPressedTiles == "false" ? 2 : dataListBuildingSave[0].AreaPressedTiles == "true" ? 1 : dataListBuildingSave[0].AreaPressedTiles
                        }
                      };

                      _this30.sidsService.SecSidsBulidVisit(_data).subscribe(function (res) {
                        if (res.dataStatus) {
                          _this30.alertService.success('Saved Successfully');

                          var _query2 = 'UPDATE sidsBuildSavesDatas SET Status = ' + "3" + ',ClosingQuestions =' + "3" + ' WHERE sidsBuildSavesDatas.SclId = "' + _this30.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + dataListBuilding[0].BuildingId + '"';

                          var query2 = 'DELETE FROM SidsBulidVisitGet WHERE SchlId = "' + _this30.schoolId + '"' + ' And VistUId = "' + _this30.vistId + '"' + ' And BuildId = "' + dataListBuilding[0].BuildingId + '"';
                          return _this30.sqliteDB.update(_query2).then(function (data) {
                            return _this30.sqliteDB.getDataLocalDB(query2).then(function (data) {
                              var BuildIndexId = res.IndexId;
                              var query = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + _this30.schoolId + '"' + ' And VistId = "' + _this30.vistId + '"' + ' And Status = 2 And FloorClose = 2';
                              return _this30.sqliteDB.getDataLocalDB(query).then(function (data) {
                                if (data.rows.length > 0) {
                                  var dataListData = [];

                                  for (var i = 0; i < data.rows.length; i++) {
                                    dataListData.push(data.rows.item(i));
                                  }

                                  if (dataListData.length > 0) {}
                                }
                              });
                            });
                          });
                        }
                      });
                    }
                  });
                }
              }
            });
          }
        }]);
      }();

      _CommonDashboardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__.FileTransfer
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _CommonDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-common-dashboard',
        template: _raw_loader_common_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_common_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CommonDashboardPage);
      /***/
    },

    /***/
    91445:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.page.scss ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menuicon {\n  width: 30%;\n  margin: 10px auto;\n  overflow: visible;\n}\n\n.menu-text {\n  padding: 10px !important;\n}\n\n.question {\n  background-color: #F3F4FA !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local {\n  background-color: #70BBFF !important;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n\n.local ion-label {\n  color: white !important;\n  font-weight: 500;\n}\n\n.server {\n  background-color: #A37A5C !important;\n  color: white;\n  border-radius: 15px;\n  height: 100%;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFBRTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKOztBQUZJO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUlOOztBQUFFO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUdKIiwiZmlsZSI6ImNvbW1vbi1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnVpY29uIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbi5tZW51LXRleHR7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnF1ZXN0aW9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjNGNEZBICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuICBcclxuICAubG9jYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwQkJGRiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zZXJ2ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTM3QTVDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    14610:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/dashboard/common-dashboard/common-dashboard.page.html ***!
      \************************************************************************************************************************/

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
//# sourceMappingURL=src_app_pages_sids_dashboard_common-dashboard_common-dashboard_module_ts-es5.js.map