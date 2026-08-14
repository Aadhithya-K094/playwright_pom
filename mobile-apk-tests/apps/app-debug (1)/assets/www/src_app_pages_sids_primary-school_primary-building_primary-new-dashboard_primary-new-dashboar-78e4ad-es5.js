(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-building_primary-new-dashboard_primary-new-dashboar-78e4ad"], {
    /***/
    39136:
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-new-dashboard/primary-new-dashboard-routing.module.ts ***!
      \**************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryNewDashboardPageRoutingModule": function PrimaryNewDashboardPageRoutingModule() {
          return (
            /* binding */
            _PrimaryNewDashboardPageRoutingModule
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


      var _primary_new_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-new-dashboard.page */
      62001);

      var routes = [{
        path: '',
        component: _primary_new_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryNewDashboardPage
      }];

      var _PrimaryNewDashboardPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryNewDashboardPageRoutingModule() {
        _classCallCheck(this, PrimaryNewDashboardPageRoutingModule);
      });

      _PrimaryNewDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimaryNewDashboardPageRoutingModule);
      /***/
    },

    /***/
    47120:
    /*!******************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-new-dashboard/primary-new-dashboard.module.ts ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryNewDashboardPageModule": function PrimaryNewDashboardPageModule() {
          return (
            /* binding */
            _PrimaryNewDashboardPageModule
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


      var _primary_new_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-new-dashboard-routing.module */
      39136);
      /* harmony import */


      var _primary_new_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-new-dashboard.page */
      62001);

      var _PrimaryNewDashboardPageModule = /*#__PURE__*/_createClass(function PrimaryNewDashboardPageModule() {
        _classCallCheck(this, PrimaryNewDashboardPageModule);
      });

      _PrimaryNewDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_new_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryNewDashboardPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_primary_new_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryNewDashboardPage]
      })], _PrimaryNewDashboardPageModule);
      /***/
    },

    /***/
    62001:
    /*!****************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-new-dashboard/primary-new-dashboard.page.ts ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryNewDashboardPage": function PrimaryNewDashboardPage() {
          return (
            /* binding */
            _PrimaryNewDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_new_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-new-dashboard.page.html */
      7146);
      /* harmony import */


      var _primary_new_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-new-dashboard.page.scss */
      61828);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/sids.service */
      35252);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _PrimaryNewDashboardPage = /*#__PURE__*/function () {
        function PrimaryNewDashboardPage(router, ionicStorage, formBuilder, sidsService, route, networkService, utilityService, emisService, sqliteDB, alertController, toastController, alertService, userSessionService) {
          _classCallCheck(this, PrimaryNewDashboardPage);

          this.router = router;
          this.ionicStorage = ionicStorage;
          this.formBuilder = formBuilder;
          this.sidsService = sidsService;
          this.route = route;
          this.networkService = networkService;
          this.utilityService = utilityService;
          this.emisService = emisService;
          this.sqliteDB = sqliteDB;
          this.alertController = alertController;
          this.toastController = toastController;
          this.alertService = alertService;
          this.userSessionService = userSessionService;
          this.expandIcon = true;
          this.floorIcon = true;
          this.filterbuild = [];
          this.dataListBuilding = [];
          this.dataListFloor = [];
          this.dataListRoom = [];
          this.dataListBuildingSave = [];
          this.dataListFloorSave = [];
          this.dataListData = [];
          this.filterfloor = [];
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
          this.deleteRoom = true;
          this.BldgCondi = "";
          this.isToastOpen = true;
        }

        return _createClass(PrimaryNewDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.vistId = this.routeData.queryParams.vistId;
            this.expId = this.routeData.queryParams.expanted;
            this.expIdBuild = this.routeData.queryParams.expIdBuild;
            this.expBuildId = this.routeData.queryParams.expBuildId;
            this.expIdFloor = this.routeData.queryParams.expIdFloor;
            this.expFloorId = this.routeData.queryParams.expFloorId;
            this.expIdRoom = this.routeData.queryParams.expIdRoom;
            this.expRoomId = this.routeData.queryParams.expRoomId;
            this.BldgCondi = this.routeData.queryParams.BldgCondition;
            this.sessionUserName = this.userSessionService.emis_username();
            this.sessionTypeName = this.userSessionService.emis_usertype();
            this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd');
            this.udiseCode = this.utilityService.udiseCode;
            console.log(this.expBuildId, this.expIdFloor, this.expIdBuild, this.expFloorId, this.expIdRoom, this.expRoomId, "dashboard", this.expId, this.BldgCondi);
            this.closingBuildID = this.expBuildId ? this.expBuildId : '';
            this.form.reset();
            this.formfloor.reset();
            this.formroom.reset();
            this.checkBuildSavedata();
            this.checkFloorSavedata(this.expBuildId ? this.expBuildId : 1);
            this.getRoomLocalData(this.expBuildId, this.expIdFloor, '', '');
          }
        }, {
          key: "colorvalidation",
          value: function colorvalidation() {
            this.expandbuilding(0, true, 1);
            this.expandfloor(0, 0, 1, true, '', '');
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.formBuilder.group({
              ifbuilding: false,
              sids: this.formBuilder.array([]) // sidsfloor: this.formBuilder.array([]),

            });
            this.formfloor = this.formBuilder.group({
              iffloor: false,
              sidsfloor: this.formBuilder.array([])
            });
            this.formroom = this.formBuilder.group({
              sidsroom: this.formBuilder.array([])
            });
          }
        }, {
          key: "sidsroomArray",
          value: function sidsroomArray() {
            return this.form.controls.sidsroom.controls;
          }
        }, {
          key: "sidsroomDetails",
          value: function sidsroomDetails() {
            return this.formBuilder.group({
              room: "",
              ifroom: false
            });
          }
        }, {
          key: "addroomData",
          value: function addroomData() {
            this.sidsroom = this.form.controls.sidsroom;
            this.sidsroom.push(this.sidsroomDetails());
          }
        }, {
          key: "expandbuilding",
          value: function expandbuilding(i, value, idBuild) {
            console.log(i, value, idBuild, "suriya", this.form.value.sids);

            for (var id = 0; id < this.form.value.sids.length; id++) {
              this.form.controls['sids']['controls'][id].controls['Condition'].setValue(false);
              this.form.controls['sids']['controls'][id].controls['Condition'].updateValueAndValidity();
            } // this.checkFloorSavedata(+i + 1)


            this.checkFloorSavedata(idBuild);
            this.expandIcon = !this.expandIcon;
            this.form.controls['sids']['controls'][i].controls['Condition'].setValue(value);
            this.form.controls['sids']['controls'][i].controls['Condition'].updateValueAndValidity();
            this.getbuilding(idBuild);
            this.closingBuildID = +this.form.value.sids[i].Status == 2 || +this.form.value.sids[i].Status == 3 ? this.form.value.sids[i].Id : '';

            if (value) {
              this.presentToastWithOptions(idBuild, this.form.value.sids[i].BuildName, 1);
            } else {
              this.toastinstance.dismiss();
              this.presentToastWithOptions(idBuild, this.form.value.sids[i].BuildName, 2);
            }
          }
        }, {
          key: "expandfloor",
          value: function expandfloor(i, n, value, item, build, floor) {
            this.expbuild = i;
            this.expfloor = n;
            this.exproom = value;
            this.floorCondition = item;
            console.log("ExpandFloor", i, n, value, item, build, floor);
            console.log("formfloor - controls", this.formfloor);

            for (var id = 0; id < this.formfloor.value.sidsfloor.length; id++) {
              this.formfloor.controls['sidsfloor']['controls'][id].controls['Condition'].setValue(false);
              this.formfloor.controls['sidsfloor']['controls'][id].controls['Condition'].updateValueAndValidity();
            } // this.getRoomLocalData(+i + 1, value, '', '')


            this.getRoomLocalData(build, floor, '', '');
            this.expandfloorIcon = !this.expandfloorIcon;
            this.formfloor.controls['sidsfloor']['controls'][n].controls['Condition'].setValue(item);
            this.formfloor.controls['sidsfloor']['controls'][n].controls['Condition'].updateValueAndValidity();
            console.log("filter", this.filterbuild);

            if (this.filterbuild.length != 0) {
              // this.getfloor(i + 1, this.filterbuild[0].IndexId)
              this.getfloor(build, this.filterbuild[0].IndexId, floor);
            }
          }
        }, {
          key: "checkBuildSavedata",
          value: function checkBuildSavedata() {
            var _this = this;

            var query = 'SELECT * FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                _this.getBuildAddData(1);
              } else {
                _this.dataListBuilding = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this.dataListBuilding.push(data.rows.item(i));
                }

                console.log("checkBuildSavedata", _this.dataListBuilding);

                for (var id = 0; id < _this.form.value.sids.length; id++) {
                  _this.form.controls['sids']['controls'][id].controls['Condition'].setValue(false);

                  _this.form.controls['sids']['controls'][id].controls['Condition'].updateValueAndValidity();
                }

                _this.addQuesnBuildingDetails(_this.dataListBuilding);
              }
            });
          }
        }, {
          key: "schoolAlert",
          value: function schoolAlert(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var _this2 = this;

              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Conformation',
                      // subHeader: 'Successfully Saved',
                      message: ' Are you sure you want to Delete the Building? ',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click'
                      }, {
                        cssClass: 'cancel_click',
                        text: 'Delete',
                        handler: function handler(data) {
                          var buildId = parseInt(id) + 100;
                          var query1 = 'SELECT * FROM sidsPrimaryBuildingQuestion' + ' WHERE SclId = "' + _this2.schoolId + '"' + ' And BuildingId = "' + buildId + '"' + ' And VistId = "' + _this2.vistId + '"';
                          return _this2.sqliteDB.getDataLocalDB(query1).then(function (data) {
                            var sidsBuild = [];

                            if (data.rows.length > 0) {
                              for (var i = 0; i < data.rows.length; i++) {
                                sidsBuild.push(data.rows.item(i));
                              }

                              if (sidsBuild[0].BuildingIndex) {
                                var dataSet = {
                                  "records": {
                                    "IndexId": sidsBuild[0].BuildingIndex,
                                    "SchoolId": _this2.schoolId,
                                    "VisitId": _this2.vistId,
                                    "BuildId": buildId,
                                    "ToilBuildId": sidsBuild[0].BuildingIndex
                                  }
                                };

                                if (_this2.networkService.getCurrentNetworkStatus() == 0) {
                                  _this2.sidsService.StgSidsDelBuilding(dataSet).subscribe(function (res) {
                                    if (res.dataStatus) {
                                      _this2.onDelete(id);
                                    }
                                  });
                                } else {
                                  _this2.alertService.error('No network connection. Please Connect to the Internet');
                                }
                              } else {
                                _this2.onDelete(id);
                              }
                            } else {
                              _this2.onDelete(id);
                            }
                          });
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
          } // async schoolAlertData() {
          //   const alert = await this.alertController.create({
          //     cssClass: 'my-custom-class',
          //     header: 'Conformation',
          //     // subHeader: 'Successfully Saved',
          //     message: 'Do you Want to continue building?',
          //     buttons: [
          //       {
          //         text: 'Reset',
          //         role: 'cancel',
          //         cssClass: 'cancel_click',
          //       },
          //       {
          //         cssClass: 'cancel_click',
          //         text: 'Countinue',
          //         handler: data => {
          //           this.colorvalidation();
          //         }
          //       }
          //     ],
          //     backdropDismiss: false
          //   });
          //   await alert.present();
          // }

        }, {
          key: "onDelete",
          value: function onDelete(id) {
            var _this3 = this;

            // this.isDisabled = false 
            debugger;
            var dataId = 100 + parseInt(id); // console.log(this.schoolId, this.vistId, dataId)

            var query = 'DELETE FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM sidsPrimaryBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this3.sqliteDB.getDataLocalDB(query2).then(function (data) {
                console.log(data, "delete");

                if (data.rowsAffected > 0) {
                  // this.ionViewDidEnter()
                  _this3.alertService.error('Building Deleted Successfully');

                  _this3.buildingInsideFloorRoom(id);
                }

                if (data.rowsAffected == 0) {
                  // this.ionViewDidEnter()
                  _this3.alertService.error('Building Deleted Successfully');

                  _this3.buildingInsideFloorRoom(id);
                }
              });
            });
          }
        }, {
          key: "onDeleteFloor",
          value: function onDeleteFloor(id, floor) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this4 = this;

              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Conformation',
                      // subHeader: 'Successfully Saved',
                      message: ' Are you sure you want to Delete the Floor? ',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click'
                      }, {
                        cssClass: 'cancel_click',
                        text: 'Delete',
                        handler: function handler(data) {
                          var bldg_id = parseInt(id) + 100;
                          var floor_id = parseInt(floor) + 1000;
                          var query = 'SELECT * FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + _this4.schoolId + '"' + ' And BuildingId = "' + bldg_id + '"' + ' And FloorId = "' + floor_id + '"' + ' And VistId = "' + _this4.vistId + '"';
                          return _this4.sqliteDB.getDataLocalDB(query).then(function (data) {
                            var sidsFloor = [];

                            if (data.rows.length > 0) {
                              for (var i = 0; i < data.rows.length; i++) {
                                sidsFloor.push(data.rows.item(i));
                              }

                              if (sidsFloor.length > 0) {
                                if (sidsFloor[0].FloorIndx) {
                                  var dataSet = {
                                    "records": {
                                      "IndexId": sidsFloor[0].FloorIndx,
                                      "SchoolId": _this4.schoolId,
                                      "VisitId": _this4.vistId,
                                      "BuildId": bldg_id.toString(),
                                      "FloorId": floor_id.toString(),
                                      "ToilBuildId": sidsFloor[0].BuildingIndex,
                                      "ToilFloorId": sidsFloor[0].FloorIndx
                                    }
                                  };

                                  if (_this4.networkService.getCurrentNetworkStatus() == 0) {
                                    _this4.sidsService.StgSidsDelFloor(dataSet).subscribe(function (res) {
                                      if (res.dataStatus) {
                                        _this4.onForceDeleteFloor(id, floor);
                                      }
                                    });
                                  } else {
                                    _this4.alertService.error('No network connection. Please Connect to the Internet');
                                  }
                                } else {
                                  _this4.onForceDeleteFloor(id, floor);
                                }
                              } else {
                                _this4.onForceDeleteFloor(id, floor);
                              }
                            } else {
                              _this4.onForceDeleteFloor(id, floor);
                            }
                          });
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
          key: "onForceDeleteFloor",
          value: function onForceDeleteFloor(id, floor) {
            var _this5 = this;

            // this.isDisabled = false 
            debugger;
            var dataId = 100 + parseInt(id);
            var dataId1 = 1000 + parseInt(floor);
            console.log(this.schoolId, this.vistId, dataId);
            var query = 'DELETE FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorId = "' + dataId1 + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And FloorId = "' + dataId1 + '"' + ' And VistId = "' + this.vistId + '"';
            var empty = 0;
            var query3 = 'UPDATE sidsPrimaryBuildSavesDatas SET FloorCondition = ' + empty + ' WHERE sidsPrimaryBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + id + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this5.sqliteDB.getDataLocalDB(query2).then(function (data) {
                if (data.rowsAffected > 0) {
                  _this5.alertService.error('Floor Deleted Successfully'); // this.ionViewDidEnter()


                  _this5.floorInsideRoom(id, floor);

                  return _this5.sqliteDB.getDataLocalDB(query3).then(function (data) {});
                }

                if (data.rowsAffected == 0) {
                  // this.ionViewDidEnter()
                  _this5.floorInsideRoom(id, floor);

                  _this5.alertService.error('Floor Deleted Successfully');

                  return _this5.sqliteDB.getDataLocalDB(query3).then(function (data) {});
                }
              });
            });
          }
        }, {
          key: "onDeleteRoom",
          value: function onDeleteRoom(id, floor, room) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this6 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    debugger;
                    console.log('id, floor, room', id, floor, room);
                    _context3.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Conformation',
                      // subHeader: 'Successfully Saved',
                      message: ' Are you sure you want to Delete the Room? ',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click'
                      }, {
                        cssClass: 'cancel_click',
                        text: 'Delete',
                        handler: function handler(data) {
                          var dataIdB = 100 + parseInt(id);
                          var dataIdF = 1000 + parseInt(floor);
                          var dataIdR = 10000 + parseInt(room);
                          var query = 'SELECT * FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + _this6.schoolId + '"' + ' And BldgId = "' + dataIdB + '"' + ' And FloorId = "' + dataIdF + '"' + ' And RoomId = "' + dataIdR + '"' + ' And VistId = "' + _this6.vistId + '"';
                          return _this6.sqliteDB.getDataLocalDB(query).then(function (data) {
                            var sidsRoom = [];

                            if (data.rows.length > 0) {
                              for (var i = 0; i < data.rows.length; i++) {
                                sidsRoom.push(data.rows.item(i));
                              }

                              console.log("Room Delete", sidsRoom);

                              if (sidsRoom[0].IndxId) {
                                var dataSet = {
                                  "records": {
                                    "IndexId": sidsRoom[0].IndxId,
                                    "ToilIndxId": sidsRoom[0].ToiletIndxId
                                  }
                                };

                                if (_this6.networkService.getCurrentNetworkStatus() == 0) {
                                  _this6.sidsService.StgSidsDelRoom(dataSet).subscribe(function (res) {
                                    if (res.dataStatus) {
                                      _this6.onForceDeleteRoom(id, floor, room);
                                    }
                                  });
                                } else {
                                  _this6.alertService.error('No network connection. Please Connect to the Internet');
                                }
                              } else {
                                _this6.onForceDeleteRoom(id, floor, room);
                              }
                            } else {
                              _this6.onForceDeleteRoom(id, floor, room);
                            }
                          });
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
        }, {
          key: "onForceDeleteRoom",
          value: function onForceDeleteRoom(id, floor, room) {
            var _this7 = this;

            // this.isDisabled = false 
            debugger;
            var dataIdB = 100 + parseInt(id);
            var dataIdF = 1000 + parseInt(id);
            var dataIdR = 10000 + parseInt(room);
            var query = 'DELETE FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + dataIdR + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + dataIdB + '"' + ' And FloorId = "' + dataIdF + '"' + ' And RoomId = "' + dataIdR + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this7.sqliteDB.getDataLocalDB(query2).then(function (data) {
                console.log("DeletEROMM", query, query2, data);

                if (data.rowsAffected > 0) {
                  _this7.alertService.error('Room Deleted Successfully'); // this.ionViewDidEnter()


                  _this7.checkFloorSavedata(_this7.expBuildId = id);

                  _this7.deleteRoom = true;
                }

                if (data.rowsAffected == 0) {
                  // this.ionViewDidEnter()
                  _this7.deleteRoom = true;

                  _this7.checkFloorSavedata(_this7.expBuildId = id);

                  _this7.alertService.error('Room Deleted Successfully');
                }
              });
            });
          }
        }, {
          key: "getBuildAddData",
          value: function getBuildAddData(id) {
            var _this8 = this;

            if (id == 2) {
              id = this.dataListBuilding.length + 1;
            }

            var dataId = 100 + parseInt(id);
            this.BldgCondi = "";
            var query = 'SELECT * FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                var insertRows = [];
                insertRows.push(["INSERT INTO sidsPrimaryBuildSavesDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, id, _this8.schoolId, _this8.vistId, "", dataId, "1", "false", "Building Name", "", "1", "", ""]]);

                _this8.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("Dashboard Building SIDS Details Stored Locally");
                });

                _this8.checkBuildSavedata();
              } else {
                var dataListBuilding = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListBuilding.push(data.rows.item(i));
                }

                _this8.addQuesnBuildingDetails(dataListBuilding);
              }
            });
          }
        }, {
          key: "addQuesnBuildingDetails",
          value: function addQuesnBuildingDetails(data) {
            var control = this.form.controls['sids'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslist = this.form.controls.sids;

            for (var _i = 0; _i < data.length; _i++) {
              this.queslist.push(this.formBuilder.group({
                Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].Id),
                SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].SclId),
                VistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].VistId, null),
                BuildIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].BuildIndx, null),
                BuildIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].BuildIndex, null),
                BuildingId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].BuildingId, null),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].Status, null),
                Condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
                BuildName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].BuildName, null),
                BuildCondi: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].BuildCondi, null),
                ClosingQuestions: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].ClosingQuestions, null),
                FloorCondition: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i].FloorCondition, null)
              })); // console.log(this.form.value, "building form")
            }

            if (this.buildingId) {
              this.expIdBuild = +this.expIdBuild - 1;
              this.buildingId = false;
            }

            console.log("build0000000", this.expIdBuild, true, this.expBuildId, this.form.value, this.expRoomId);

            if (this.expIdBuild && this.expId == 3 && this.expRoomId == undefined) {
              // this.expandbuilding(this.expIdBuild, true, this.expBuildId)
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity(); // this.form.controls['sids']['controls'][this.expIdBuild].controls['Status'].setValue(3);

              this.form.controls['sids']['controls'][this.expIdBuild].controls['Status'].updateValueAndValidity();
            }

            if (this.expIdBuild && this.expId == 1 && this.expRoomId == undefined) {
              // this.expandbuilding(this.expIdBuild, true, this.expBuildId)
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity(); // this.form.controls['sids']['controls'][this.expIdBuild].controls['Status'].setValue(1);
              // this.form.controls['sids']['controls'][this.expIdBuild].controls['Status'].updateValueAndValidity();
            }

            if (this.expIdBuild && this.expId == 2 && this.expRoomId == undefined) {
              // this.expandbuilding(this.expIdBuild, true, this.expBuildId)
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity(); // this.form.controls['sids']['controls'][this.expIdBuild].controls['Status'].setValue(2);
              // this.form.controls['sids']['controls'][this.expIdBuild].controls['Status'].updateValueAndValidity();
            }

            for (var k = 0; k < this.form.value.sids.length; k++) {
              if (this.form.value.sids[k].Id == this.expBuildId) {
                if (this.expBuildId) {
                  for (var id = 0; id < this.form.value.sids.length; id++) {
                    this.form.controls['sids']['controls'][id].controls['Condition'].setValue(false);
                    this.form.controls['sids']['controls'][id].controls['Condition'].updateValueAndValidity();
                  }

                  this.form.controls['sids']['controls'][k].controls['Condition'].setValue(true);
                  this.presentToastWithOptions(this.expBuildId, this.form.value.sids[k].BuildName, 1);
                }
              }
            }
          }
        }, {
          key: "checkFloorSavedata",
          value: function checkFloorSavedata(bulId) {
            var _this9 = this;

            var query = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + // ' And FloorId = "' + dataId + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                console.log("Local 0", bulId);
                var buildId = parseInt(bulId) + 100; // this.getdashboardFloorData(bulId, 1, '')

                var _query = 'SELECT * FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + _this9.schoolId + '"' + ' And BuildingId = "' + buildId + '"' + ' And VistId = "' + _this9.vistId + '"';

                return _this9.sqliteDB.getDataLocalDB(_query).then(function (data) {
                  if (data.rows.length > 0) {
                    _this9.getdashboardFloorData(bulId, 1, '');
                  } else {
                    console.log("No floor available");
                  }
                });
              } else {
                console.log("Local 1", bulId);

                _this9.getFloorLocalData(bulId);
              }
            });
          }
        }, {
          key: "getdashboardFloorData",
          value: function getdashboardFloorData(bulId, id, p) {
            var _this0 = this;

            var query = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (floor) {
              if (floor.rows.length == 0) {
                console.log("sidsPrimaryFloorSaveDatas Length == 0");
                var buildId = 100 + parseInt(bulId);

                var _query2 = 'SELECT * FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + _this0.schoolId + '"' + ' And BuildingId = "' + buildId + '"' + ' And VistId = "' + _this0.vistId + '"';

                return _this0.sqliteDB.getDataLocalDB(_query2).then(function (data) {
                  var buildSaveData = [];

                  for (var i = 0; i < data.rows.length; i++) {
                    buildSaveData.push(data.rows.item(i));
                  }

                  console.log("SaveData", buildSaveData);

                  if (buildSaveData.length > 0) {
                    if (+buildSaveData[0].BuildCondi == 2 || +buildSaveData[0].BuildCondi == 3) {
                      // if(this.formfloor?.value?.sidsfloor){
                      //   for (let id = 0; id < this.formfloor.value.sidsfloor.length; id++) {
                      //     this.formfloor.controls['sidsfloor']['controls'][id].controls['Condition'].setValue(false);
                      //     this.formfloor.controls['sidsfloor']['controls'][id].controls['Condition'].updateValueAndValidity();
                      //   }
                      // } // unwanted extra code...
                      _this0.formfloor = _this0.formBuilder.group({
                        iffloor: false,
                        sidsfloor: _this0.formBuilder.array([])
                      });
                      _this0.formroom = _this0.formBuilder.group({
                        sidsroom: _this0.formBuilder.array([])
                      });
                    } else {
                      _this0.getdashboardAddFloorData(bulId, id, p);
                    }
                  } else {
                    _this0.getdashboardAddFloorData(bulId, id, p);
                  }
                });
              } else {
                var sidsFloor = [];

                for (var i = 0; i < floor.rows.length; i++) {
                  sidsFloor.push(floor.rows.item(i));
                }

                console.log("YYYYYYYY", sidsFloor);
                var floorLength = sidsFloor.length == 0 ? 0 : sidsFloor.length - 1;
                console.log("floorLength", floorLength);
                var sidsPrimaryFloorSaveDatas = sidsFloor.filter(function (dd) {
                  return +dd.Status == 1;
                });

                if (sidsPrimaryFloorSaveDatas.length > 0) {
                  _this0.alertService.error("Please fill details for the previous floor");
                } else {
                  if (sidsFloor[floorLength].FloorName == "Terrace" || +sidsFloor[floorLength].FloorCondi == 2 || +sidsFloor[floorLength].FloorCondi == 3) {
                    _this0.deleteRoom = true;

                    _this0.getdashboardAddFloorData(bulId, id, p);
                  } else {
                    var dataFloor = parseInt(sidsFloor[floorLength].FloorId) - 1000;
                    console.log("dataFloor", dataFloor);

                    var _query3 = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + _this0.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + dataFloor + '"' + ' And VistId = "' + _this0.vistId + '"';

                    return _this0.sqliteDB.getDataLocalDB(_query3).then(function (data) {
                      if (data.rows.length == 0) {
                        _this0.alertService.error("Please add room for the previous floor");
                      } else {
                        var dataListFloor = [];

                        for (var i = 0; i < data.rows.length; i++) {
                          dataListFloor.push(data.rows.item(i));
                        }

                        console.log("KKKKKKKKK", dataListFloor); // let sameRoom = [];
                        // let diffrentRoom = [];
                        // sidsFloor.forEach(floors=> {
                        //   dataListFloor.forEach(rooms =>{
                        //     if(floors.Id == rooms.FloorIndx){
                        //       sameRoom.push(dataListFloor);
                        //     }else{
                        //       diffrentRoom.push(dataListFloor);
                        //     }
                        //   })
                        // })
                        // console.log("SameRoom",sameRoom)
                        // console.log("diffrentRoom",diffrentRoom)

                        var _sidsPrimaryFloorSaveDatas = dataListFloor.filter(function (dd) {
                          return +dd.Status == 1;
                        });

                        var sidsFloorClose = dataListFloor.filter(function (dd) {
                          return +dd.FloorClose == 1;
                        });

                        if (_sidsPrimaryFloorSaveDatas.length > 0) {
                          _this0.alertService.error("Please fill details for the previous Room");
                        } else {
                          if (sidsFloorClose.length > 0) {
                            _this0.alertService.error("Please fill details floor Closing questions");
                          } else {
                            _this0.deleteRoom = true;

                            _this0.getdashboardAddFloorData(bulId, id, p);
                          }
                        }
                      }
                    });
                  }
                }
              }
            });
          }
        }, {
          key: "getdashboardAddFloorData",
          value: function getdashboardAddFloorData(bulId, id, p) {
            var _this1 = this;

            var datafilter = this.dataListFloor.filter(function (item) {
              return item.BuildIndx == bulId;
            });

            if (id == 2) {
              id = datafilter.length + 1;
            }

            datafilter.forEach(function (dd) {
              if (+dd.Id == +id) {
                id = +id + 1;
                _this1.expFloorId += 1;
              }
            });
            console.log("id", id);
            var dataId = 1000 + parseInt(id);
            var query = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              var _a;

              if (data.rows.length == 0) {
                _this1.floorIdAdd = id;
                var insertRows = [];
                insertRows.push(["INSERT INTO sidsPrimaryFloorSaveDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, id, _this1.schoolId, _this1.vistId, bulId, "", dataId, "1", "Floor Name", "", "1", "true", (_a = _this1.form.value.sids[p]) === null || _a === void 0 ? void 0 : _a.BuildIndex, ""]]);

                _this1.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("Dashboard Floor SIDS Details Stored Locally");
                });

                _this1.expId = "";

                _this1.checkFloorSavedata(bulId);
              } else {
                _this1.getFloorLocalData(bulId);
              }
            });
          }
        }, {
          key: "getFloorLocalData",
          value: function getFloorLocalData(bulId) {
            var _this10 = this;

            var query = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + // ' And FloorId = "' + dataId + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {} else {
                _this10.dataListFloor = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this10.dataListFloor.push(data.rows.item(i));
                }

                console.log("datalistFlooooooooooooooooor", _this10.dataListFloor);
                console.log("flooooooooooor", _this10.expFloorId, _this10.expIdBuild, _this10.deleteRoom);

                _this10.addFloorQuestionDetail(_this10.dataListFloor);

                if (_this10.expFloorId && _this10.expIdBuild && !_this10.deleteRoom) {
                  // Abdullah 
                  _this10.expandfloor(_this10.expIdBuild, _this10.expFloorId, _this10.expIdFloor, true, _this10.expBuildId, _this10.expIdFloor);
                }

                _this10.deleteRoom = false;
              }
            });
          }
        }, {
          key: "addFloorQuestionDetail",
          value: function addFloorQuestionDetail(data) {
            var control = this.formfloor.controls['sidsfloor'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslistfloor = this.formfloor.controls.sidsfloor;

            for (var _i2 = 0; _i2 < data.length; _i2++) {
              this.queslistfloor.push(this.formBuilder.group({
                Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].Id),
                SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].SclId),
                VistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].VistId, null),
                BuildIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].BuildIndx, null),
                FloorIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].FloorIndx, null),
                FloorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].FloorId, null),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].Status, null),
                Condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
                FloorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].FloorName, null),
                FloorCondi: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].FloorCondi, null),
                FloorClose: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].FloorClose, null),
                RoomCondition: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].RoomCondition, null),
                BuildIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].BuildIndex, null),
                FloorIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i2].FloorIndex, null)
              }));
              console.log(this.queslistfloor, "floor data", this.formfloor.controls.sidsfloor);
            }

            console.log(this.expIdBuild, this.expFloorId, "floorid", this.expId);

            if (this.expIdBuild && this.expFloorId && this.expId == '2' && this.expRoomId == undefined) {
              // this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              // this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity();
              console.log(this.expFloorId, "floorid 2");
              console.log("formbuild", this.form.value.sids);
              console.log("formfloor", this.formfloor.value.sidsfloor);

              if (this.formfloor.value.sidsfloor.length == this.expFloorId) {
                console.log("sadsadsada");
              }

              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].setValue(true);
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].updateValueAndValidity(); // this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Status'].setValue(2);
              // this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Status'].updateValueAndValidity();
            }

            if (this.expIdBuild && this.expFloorId && this.expId == '3' && this.expRoomId == undefined) {
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity();
              console.log(this.expFloorId, "floorid 3");
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].setValue(true);
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].updateValueAndValidity(); // this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Status'].setValue(3);

              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Status'].updateValueAndValidity();
            }
          }
        }, {
          key: "addRoomQuestionDetail",
          value: function addRoomQuestionDetail(data) {
            console.log(this.formroom, "before");
            var control = this.formroom.controls['sidsroom'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslistroom = this.formroom.controls.sidsroom;
            console.log(this.formroom, "after");

            for (var _i3 = 0; _i3 < data.length; _i3++) {
              this.queslistroom.push(this.formBuilder.group({
                Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].Id),
                SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].SclId),
                VistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].VistId, null),
                BuildIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].BuildIndx, null),
                FloorIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].FloorIndx, null),
                RoomId: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].RoomId, null),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].Status, null),
                Condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, null),
                RoomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(data[_i3].RoomName, null)
              }));
              console.log("Room data", this.formroom);
            }

            console.log(this.expIdBuild, this.expFloorId, this.expRoomId, this.expId, "roomid");

            if (this.expIdBuild && this.expFloorId && this.expRoomId && this.expId == '2') {
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity(); // this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].setValue(true);
              // this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].updateValueAndValidity();

              console.log(this.expRoomId, "roomid 2"); // this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].setValue(2);
              // this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].updateValueAndValidity();
            }

            if (this.expIdBuild && this.expFloorId && this.expRoomId && this.expId == '1') {
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity();
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].setValue(true);
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].updateValueAndValidity();
              console.log(this.expFloorId, "roomid 1");
              this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].setValue(1);
              this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].updateValueAndValidity();
            }

            if (this.expIdBuild && this.expFloorId && this.expRoomId && this.expId == '3') {
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].setValue(true);
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity();
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].setValue(this.floorCondition);
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].updateValueAndValidity();
              console.log(this.expFloorId, "roomid 3");
              this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].setValue(3);
              this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].updateValueAndValidity();
            }
          }
        }, {
          key: "getdashboardRoomData",
          value: function getdashboardRoomData(bulId, floor, id, h, j) {
            var _this11 = this;

            var query = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                _this11.getdashboardAddRoomData(bulId, floor, id, h, j);
              } else {
                var dataListFloor = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListFloor.push(data.rows.item(i));
                }

                console.log("EEEEEEEEEEE", dataListFloor);
                var sidsPrimaryFloorSaveDatas = dataListFloor.filter(function (dd) {
                  return +dd.Status == 1;
                });

                if (sidsPrimaryFloorSaveDatas.length > 0) {
                  _this11.alertService.error("Please fill details for the previous room");
                } else {
                  _this11.getdashboardAddRoomData(bulId, floor, id, h, j);
                }
              }
            });
          }
        }, {
          key: "getdashboardAddRoomData",
          value: function getdashboardAddRoomData(bulId, floor, id, h, j) {
            var _this12 = this;

            var datafilter = this.dataListRoom.filter(function (item) {
              return item.BuildIndx == bulId;
            });
            var dataroomfilter = datafilter.filter(function (item) {
              return item.FloorIndx == floor;
            });

            if (id == 0) {
              id = dataroomfilter.length + 1;
            }

            dataroomfilter.forEach(function (dd) {
              if (+dd.Id == +id) {
                id = +_this12.lastRoomId + 1;
                _this12.expIdRoom += 1;
              } else {
                id = +_this12.lastRoomId + 1;
              }
            });
            this.lastRoomId = id; // bulId = 100 + parseInt(bulId)
            // floor = 1000 + parseInt(floor)

            var dataId = 10000 + parseInt(id);
            var query = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              var _a, _b;

              if (data.rows.length == 0) {
                var insertRows = [];
                insertRows.push(["INSERT INTO sidsPrimaryRoomSaves VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [null, id, _this12.schoolId, _this12.vistId, bulId, floor, dataId, "1", "Room", (_a = _this12.form.value.sids[h]) === null || _a === void 0 ? void 0 : _a.BuildIndex, (_b = _this12.formfloor.value.sidsfloor[j]) === null || _b === void 0 ? void 0 : _b.FloorIndex, ""]]);

                _this12.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("Dashboard Room SIDS Details Stored Locally");
                });

                _this12.checkRoomSavedata(bulId, floor, dataId, h, j);
              } else {
                _this12.getRoomLocalData(bulId, floor, h, j);
              }
            });
          }
        }, {
          key: "checkRoomSavedata",
          value: function checkRoomSavedata(bulId, floor, dataId, h, j) {
            var _this13 = this;

            var query = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                _this13.getRoomLocalData(bulId, 1, h, j);
              } else {
                _this13.getRoomLocalData(bulId, floor, h, j);
              }
            });
          }
        }, {
          key: "getRoomLocalData",
          value: function getRoomLocalData(bulId, floor, h, j) {
            var _this14 = this;

            console.log(bulId, floor);
            var dataId = 1000 + parseInt(floor);
            var query = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                console.log("getRoomLocalData");

                _this14.formroom.reset();

                var _query4 = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + _this14.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And VistId = "' + _this14.vistId + '"';

                return _this14.sqliteDB.getDataLocalDB(_query4).then(function (data) {
                  if (data.rows.length == 0) {
                    console.log("floor doesnt show");
                  } else {
                    var FloorServerData = [];

                    for (var i = 0; i < data.rows.length; i++) {
                      FloorServerData.push(data.rows.item(i));
                    }

                    console.log("FloorServerData", FloorServerData);

                    if (FloorServerData.length > 0) {
                      var filterFloorSavedData = FloorServerData.filter(function (dd) {
                        return +dd.Status == 1 && dd.FloorId == dataId;
                      });
                      console.log("filterFloorSavedData", filterFloorSavedData);

                      if (filterFloorSavedData.length > 0) {
                        _this14.getdashboardAddRoomData(bulId, floor, 0, h, j);
                      } else {
                        // status 2 la floor condition check pannitu add pannanum
                        var status2FloorCondi = FloorServerData.filter(function (dd) {
                          return +dd.Status == 2 && dd.FloorId == dataId;
                        });
                        console.log("status2FloorCondi", status2FloorCondi);

                        if (status2FloorCondi.length > 0) {
                          var filterstatus2FloorCondi = status2FloorCondi.filter(function (dd) {
                            return +dd.FloorCondi == 2 || +dd.FloorCondi == 3;
                          });

                          if (filterstatus2FloorCondi.length > 0) {
                            _this14.formroom = _this14.formBuilder.group({
                              sidsroom: _this14.formBuilder.array([])
                            });
                          } else {
                            var filterTerrace = filterFloorSavedData.filter(function (dd) {
                              return dd.FloorName != "Terrace";
                            });

                            if (filterTerrace.length > 0) {
                              _this14.getdashboardAddRoomData(bulId, floor, 0, h, j);
                            }
                          }
                        }
                      }
                    }
                  }
                });
              } else {
                _this14.dataListRoom = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this14.dataListRoom.push(data.rows.item(i));
                }

                _this14.addRoomQuestionDetail(_this14.dataListRoom);

                _this14.roomStatus = _this14.dataListRoom[0].Status;
                console.log(_this14.dataListRoom, _this14.roomStatus, "this.roomStatus");

                for (var _j = 0; _j < _this14.dataListRoom.length; _j++) {
                  _this14.lastRoomId = _this14.dataListRoom[_j].Id;
                }
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId }, skipLocationChange: false });
            this.router.navigate(['/tabs/primary-dashboard'], {
              queryParams: {
                'schoolId': this.schoolId,
                'vistId': this.vistId
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "onBuilding",
          value: function onBuilding(id, status) {
            var dataId = 100 + parseInt(id); // this.router.navigate(['/tabs/building-general-question'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'buildingId': dataId,'status': status }, skipLocationChange: false });

            this.router.navigate(['/tabs/primary-building-questions'], {
              queryParams: {
                'schoolId': this.schoolId,
                'vistId': this.vistId,
                'buildingId': dataId,
                'status': status
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "onFloor",
          value: function onFloor(id, floor, status, buildName) {
            console.log("onFloor", floor);
            var bdataId = 100 + parseInt(id);
            var fdataId = 1000 + parseInt(floor); // this.router.navigate(['/tabs/floor-general-question'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'buildingId': bdataId, 'floorId': fdataId,'status': status}, skipLocationChange: false });

            this.router.navigate(['/tabs/primary-floor-questions'], {
              queryParams: {
                'schoolId': this.schoolId,
                'vistId': this.vistId,
                'buildingId': bdataId,
                'floorId': fdataId,
                'status': status,
                'buildName': buildName
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "onRoom",
          value: function onRoom(id, floor, room, status, buildName) {
            id = 100 + parseInt(id);
            floor = 1000 + parseInt(floor);
            room = 10000 + parseInt(room);
            this.router.navigate(['/tabs/primary-room-questions'], {
              queryParams: {
                'schoolId': this.schoolId,
                'vistId': this.vistId,
                'buildingId': id,
                'floorId': floor,
                'roomId': room,
                'status': status,
                'buildName': buildName
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "onsaveBuild",
          value: function onsaveBuild(id, k, item) {
            var _this15 = this;

            // this.getbuilding(id)
            this.buldid = 100 + parseInt(id);
            var query = 'SELECT * FROM sidsPrimaryBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buldid + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (datas) {
              if (datas.rows.length == 0) {
                console.log("nodata", _this15.buldid);

                _this15.alertService.error('Please Fill Building Question');
              } else {
                _this15.dataListBuildingSave = [];

                for (var i = 0; i < datas.rows.length; i++) {
                  _this15.dataListBuildingSave.push(datas.rows.item(i));
                }

                console.log("dataListBuildingSave", _this15.dataListBuildingSave);

                if (+item.value.BuildCondi == 1 || +item.value.BuildCondi == 4) {
                  if (+item.value.ClosingQuestions == 1) {
                    // let dataId = 100 + parseInt(id);
                    // this.router.navigate(['/tabs/primary-building-closing-questions'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'buildingId': dataId,'status': item.value.Status }, skipLocationChange: false });
                    _this15.alertService.error("Enter the Building Closing Questions");
                  } else {
                    _this15.onSaveBuilding(id);
                  }
                } else {
                  _this15.onSaveBuilding(id);
                }
              }
            });
          }
        }, {
          key: "onSaveBuilding",
          value: function onSaveBuilding(id) {
            var _this16 = this;

            var _a;

            this.buldid = 100 + parseInt(id);
            var dataImage = (_a = this.dataListBuildingSave[0].BldgFrontPhoto) === null || _a === void 0 ? void 0 : _a.split(','); // for (let i = 0; i < data.length; i++) {

            var data = {
              "records": {
                "IndexId": this.dataListBuildingSave[0].BuildingIndex,
                "SchlId": this.schoolId,
                "VistId": this.vistId,
                "BldgId": this.buldid,
                "BldgName": this.dataListBuildingSave[0].BldgName,
                "BldgAge": this.dataListBuildingSave[0].BldgAge,
                "BldgFundSourceCons": this.dataListBuildingSave[0].BldgFundSourceCons,
                "BldgType": this.dataListBuildingSave[0].BldgType,
                "BldgLength": this.dataListBuildingSave[0].BldgLength,
                "BldgBre": this.dataListBuildingSave[0].BldgBre,
                "BldgCondition": this.dataListBuildingSave[0].BldgCondition,
                "BldgRepair": this.dataListBuildingSave[0].BldgRepair,
                "PipeNeedHwDw": this.dataListBuildingSave[0].PipeNeedHwDw,
                "PipeNeedToilet": this.dataListBuildingSave[0].PipeNeedToilet,
                "WireLenElectrcty": this.dataListBuildingSave[0].WireLenElectrcty,
                "AreaWaterLeakage": this.dataListBuildingSave[0].AreaWaterLeakage,
                "AreaExtWw": this.dataListBuildingSave[0].AreaExtWw,
                "AreaIntWw": this.dataListBuildingSave[0].AreaIntWw,
                "AreaReplasting": this.dataListBuildingSave[0].AreaReplasting,
                "AreaReflooring": this.dataListBuildingSave[0].AreaReflooring,
                "AreaFlrPatchwrk": this.dataListBuildingSave[0].AreaFlrPatchwrk,
                "AuditoriumYn": this.dataListBuildingSave[0].AuditoriumYn == "false" ? 2 : this.dataListBuildingSave[0].AuditoriumYn == "true" ? 1 : this.dataListBuildingSave[0].AuditoriumYn,
                "AuditoriumStageReqt": this.dataListBuildingSave[0].AuditoriumStageReqt,
                "AuditoriumStageArea": this.dataListBuildingSave[0].AuditoriumStageArea,
                "AuditoriumStageHeight": this.dataListBuildingSave[0].AuditoriumStageHeight,
                "AuditoriumStageAreaLevel": this.dataListBuildingSave[0].AuditoriumStageAreaLevel,
                "AuditoriumLights": this.dataListBuildingSave[0].AuditoriumLights,
                "AuditoriumFans": this.dataListBuildingSave[0].AuditoriumFans,
                "AuditoriumPrjtYn": this.dataListBuildingSave[0].AuditoriumPrjtYn == "false" ? 2 : this.dataListBuildingSave[0].AuditoriumPrjtYn == "true" ? 1 : this.dataListBuildingSave[0].AuditoriumPrjtYn,
                "AuditoriumPrjtFunc": this.dataListBuildingSave[0].AuditoriumPrjtFunc == "false" ? 2 : this.dataListBuildingSave[0].AuditoriumPrjtFunc == "true" ? 1 : this.dataListBuildingSave[0].AuditoriumPrjtFunc,
                "RampAvailYn": this.dataListBuildingSave[0].RampAvailYn,
                "RampRepairYn": this.dataListBuildingSave[0].RampRepairYn == "false" ? 2 : this.dataListBuildingSave[0].RampRepairYn == "true" ? 1 : this.dataListBuildingSave[0].RampRepairYn,
                "FireExtYn": this.dataListBuildingSave[0].FireExtYn == "false" ? 2 : this.dataListBuildingSave[0].FireExtYn == "true" ? 1 : this.dataListBuildingSave[0].FireExtYn,
                "FirstAidKitYn": this.dataListBuildingSave[0].FirstAidKit == "false" ? 2 : this.dataListBuildingSave[0].FirstAidKit == "true" ? 1 : this.dataListBuildingSave[0].FirstAidKit,
                "CCTVCameraYn": this.dataListBuildingSave[0].CCTVCameraYn == "false" ? 2 : this.dataListBuildingSave[0].CCTVCameraYn == "true" ? 1 : this.dataListBuildingSave[0].CCTVCameraYn,
                "BuildTabsYn": this.dataListBuildingSave[0].BuildTabsYn == "false" ? 2 : this.dataListBuildingSave[0].BuildTabsYn == "true" ? 1 : this.dataListBuildingSave[0].BuildTabsYn,
                "BuildTabsNumber": this.dataListBuildingSave[0].BuildTabsNumber,
                "BuildReapairComArea": this.dataListBuildingSave[0].BuildReapairComArea == "false" ? 2 : this.dataListBuildingSave[0].BuildReapairComArea == "true" ? 1 : this.dataListBuildingSave[0].BuildReapairComArea,
                "AreaWeatheringReq": this.dataListBuildingSave[0].AreaWeatheringReq == "false" ? 2 : this.dataListBuildingSave[0].AreaWeatheringReq == "true" ? 1 : this.dataListBuildingSave[0].AreaWeatheringReq,
                "AreaPressedTiles": this.dataListBuildingSave[0].AreaPressedTiles == "false" ? 2 : this.dataListBuildingSave[0].AreaPressedTiles == "true" ? 1 : this.dataListBuildingSave[0].AreaPressedTiles,
                "BldgFrontPhoto": this.dataListBuildingSave[0].BldgFrontPhotoName,
                "BldgLatitude": this.dataListBuildingSave[0].BldgLatitude,
                "BldgLongitude": this.dataListBuildingSave[0].BldgLongitude
              }
            };
            this.utilityService.saveBuildingSids(data).subscribe(function (res) {
              if (res.dataStatus) {
                // this.alertService.success('Saved Building Question');
                _this16.alertService.success('Saved Successfully');

                if (dataImage.length > 1) {
                  var imgObj = {
                    "records": {
                      "Photo": dataImage[1],
                      "PhotoName": _this16.dataListBuildingSave[0].BldgFrontPhotoName
                    }
                  };

                  _this16.emisService.S3ImageSave(imgObj).subscribe(function (res) {});
                }

                _this16.buildingDelete();

                var query = 'UPDATE sidsPrimaryBuildSavesDatas SET Status = ' + "3" + ',ClosingQuestions =' + "3" + ',BuildIndex = ' + res.IndexId + ' WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this16.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + _this16.buldid + '" And sidsPrimaryBuildSavesDatas.VistId = "' + _this16.vistId + '"';
                var query1 = 'UPDATE sidsPrimaryBuildingQuestion SET BuildingIndex ="' + res.IndexId + '" WHERE sidsPrimaryBuildingQuestion.SclId = "' + _this16.schoolId + '" And sidsPrimaryBuildingQuestion.BuildingId = "' + _this16.buldid + '"';
                var query2 = 'DELETE FROM SidsBulidVisitGet WHERE SchlId = "' + _this16.schoolId + '"' + ' And VistUId = "' + _this16.vistId + '"' + ' And BuildId = "' + _this16.buldid + '"';
                return _this16.sqliteDB.update(query).then(function (data) {
                  return _this16.sqliteDB.update(query1).then(function (data) {
                    return _this16.sqliteDB.getDataLocalDB(query2).then(function (data) {
                      if (data.rowsAffected > 0) {
                        _this16.getbuilding(id);

                        _this16.ionViewDidEnter();
                      }

                      if (data.rowsAffected == 0) {
                        _this16.getbuilding(id);

                        _this16.ionViewDidEnter();
                      }

                      _this16.buildingId = true;
                    });
                  });
                });
              }
            });
            this.checkBuildSavedata(); // }
          }
        }, {
          key: "buildingDelete",
          value: function buildingDelete() {
            var _this17 = this;

            var selectQuery = 'SELECT * FROM DeleteBuilding';
            this.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
              if (data.rows.length > 0) {
                var DeleteBUilding = [];

                for (var i = 0; i < data.rows.length; i++) {
                  DeleteBUilding.push(data.rows.item(i));
                }

                console.log("DeleteBUilding", DeleteBUilding);

                if (DeleteBUilding.length > 0) {
                  var _loop = function _loop(_i4) {
                    var dataSet = JSON.parse(DeleteBUilding[_i4].Records);

                    _this17.sidsService.StgSidsDelBuilding(dataSet).subscribe(function (res) {
                      if (res.dataStatus) {
                        console.log(DeleteBUilding[_i4].BuildId, "Building Deleted Completed");
                        var deleteQuery = 'DELETE FROM DeleteBuilding WHERE schoolId = ' + DeleteBUilding[_i4].schoolId + ' And visitId = ' + DeleteBUilding[_i4].visitId + ' And BuildId = ' + DeleteBUilding[_i4].BuildId;

                        _this17.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
                          console.log("local Building Deleted");
                        });
                      }
                    });
                  };

                  for (var _i4 = 0; _i4 < DeleteBUilding.length; _i4++) {
                    _loop(_i4);
                  }
                }
              }
            });
          }
        }, {
          key: "getbuilding",
          value: function getbuilding(id) {
            var _this18 = this;

            this.filterbuild = [];
            this.buldid = 100 + parseInt(id);
            this.buldid.toString();
            var query = 'SELECT * FROM SidsBulidVisitGet' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"' + ' And BuildId = "' + this.buldid + '"';
            console.log("hahahahahaha", query);
            return this.sqliteDB.getDataLocalDB(query).then(function (responce) {
              if (responce.rows.length == 0) {
                _this18.utilityService.getBuildingSids(_this18.vistId, _this18.schoolId).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this18.filterbuild = res.result.filter(function (item) {
                      return item.BldgId == _this18.buldid;
                    });
                    console.log("filterBuild  <- Get Building", _this18.filterbuild);

                    if (_this18.filterbuild.length > 0) {
                      _this18.insertLocalBuilding(_this18.filterbuild, _this18.buldid);
                    }
                  }
                });
              } else {
                var localData = [];

                for (var i = 0; i < responce.rows.length; i++) {
                  localData.push(responce.rows.item(i));
                }

                console.log("LocalBuildData", localData);
                var jsonData = JSON.parse(localData[0].JsonBuild);
                console.log("jsonData", jsonData);
                _this18.filterbuild = jsonData.filter(function (item) {
                  return item.BldgId == _this18.buldid;
                });
                console.log("filterBuild  <- Local Building", _this18.filterbuild);
              }
            });
          }
        }, {
          key: "getfloor",
          value: function getfloor(id, indBuild, floorId) {
            var _this19 = this;

            this.buldid = 100 + parseInt(id);
            this.buldid.toString();
            var query = 'SELECT * FROM SidsFloorsVisitGet' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"' + ' And BuildIndexId = "' + indBuild + '"' + ' And BuildId = "' + this.buldid + '"';
            console.log(":::::::::::::::::", query);
            return this.sqliteDB.getDataLocalDB(query).then(function (responce) {
              if (responce.rows.length == 0) {
                _this19.utilityService.getFloorSids(_this19.vistId, indBuild).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this19.filterfloor = res.result.filter(function (item) {
                      return item.BldgId == _this19.buldid;
                    });
                    console.log("filterfloor  <- Get Floor", _this19.filterfloor);

                    if (_this19.filterfloor.length > 0) {
                      _this19.insertLocalFloor(_this19.filterfloor, _this19.buldid, indBuild);
                    }
                  }
                });
              } else {
                var localData = [];

                for (var i = 0; i < responce.rows.length; i++) {
                  localData.push(responce.rows.item(i));
                }

                console.log("LocalFloorData", localData);
                var jsonData = JSON.parse(localData[0].JsonBuild);
                _this19.filterfloor = jsonData.filter(function (item) {
                  return item.BldgId == _this19.buldid;
                });
                console.log("filterfloor  <- Local Floor", _this19.filterfloor);
              }
            });
          }
        }, {
          key: "onFloorBuild",
          value: function onFloorBuild(iId, buildingId, floorId, item1) {
            var _this20 = this;

            debugger;
            console.log(buildingId, floorId);
            console.log("buildingInsert Ah", this.filterbuild);

            if (this.filterbuild.length == 0) {
              this.alertService.error('Please Sync Building Question');
            } else {
              var build = 100 + parseInt(buildingId); // this.getfloor(buildingId)

              var query5 = 'SELECT * FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + build + '"' + ' And VistId = "' + this.vistId + '"';
              return this.sqliteDB.getDataLocalDB(query5).then(function (data) {
                var dataListData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListData.push(data.rows.item(i));
                }

                console.log("BBBBBBBBBBBBBBBBBBB", dataListData);
                var BuildSuccess = dataListData.filter(function (dd) {
                  return +dd.Status != 3;
                });

                if (BuildSuccess.length > 0) {
                  _this20.alertService.error('Please Sync Building Question');
                } else {
                  var floor = 1000 + parseInt(floorId);
                  var query = 'SELECT * FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + _this20.schoolId + '"' + ' And BuildingId = "' + build + '"' + ' And FloorId = "' + floor + '"' + ' And VistId = "' + _this20.vistId + '"';
                  return _this20.sqliteDB.getDataLocalDB(query).then(function (datas) {
                    if (datas.rows.length == 0) {
                      _this20.alertService.error('Please Fill Floor Question');
                    } else {
                      // this.initialValidator()
                      _this20.dataListFloorSave = [];

                      for (var i = 0; i < datas.rows.length; i++) {
                        _this20.dataListFloorSave.push(datas.rows.item(i));
                      }

                      if (+item1.value.FloorCondi == 1 || +item1.value.FloorCondi == 4) {
                        if (item1.value.FloorName == "Terrace") {
                          _this20.onSaveFloor(buildingId, floor, iId);
                        } else {
                          if (+item1.value.FloorClose == 1) {
                            // let bdataId = 100 + parseInt(buildingId)
                            // let fdataId = 1000 + parseInt(floorId)
                            // this.router.navigate(['/tabs/primary-floor-closing-questions'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'buildingId': bdataId, 'floorId': fdataId,'status': item1.value.Status}, skipLocationChange: false });
                            _this20.alertService.alert("Enter the Floor Closing Questions");
                          } else {
                            _this20.onSaveFloor(buildingId, floor, iId);
                          }
                        }
                      } else {
                        _this20.onSaveFloor(buildingId, floor, iId);
                      }
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "onSaveFloor",
          value: function onSaveFloor(bulid, floorid, i) {
            var _this21 = this;

            var data = {
              "records": {
                "IndexId": this.dataListFloorSave[0].FloorIndx,
                "SchlId": this.dataListFloorSave[0].SclId,
                "VistId": this.dataListFloorSave[0].VistId,
                "BldgIdxId": this.filterbuild[0].IndexId,
                "BldgId": this.dataListFloorSave[0].BuildingId,
                "FoolrId": floorid,
                "FloorNum": this.dataListFloorSave[0].FloorNum,
                "FloorCondi": this.dataListFloorSave[0].FloorCondi,
                "FloorSafety": this.dataListFloorSave[0].FloorSafety == "false" ? 2 : this.dataListFloorSave[0].FloorSafety == "true" ? 1 : this.dataListFloorSave[0].FloorSafety,
                "ReqParapetWall": this.dataListFloorSave[0].ReqParapetWall,
                "ParapetWallLength": this.dataListFloorSave[0].ParapetWallLength,
                "ParapetWallHeight": this.dataListFloorSave[0].ParapetWallHeight,
                "ParapetWallWhiteWash": this.dataListFloorSave[0].ParapetWallWhiteWash,
                "ParapetWallReplasting": this.dataListFloorSave[0].ParapetWallReplasting,
                "ParapetWallBrickWork": this.dataListFloorSave[0].ParapetWallBrickWork,
                "RepairSteps": this.dataListFloorSave[0].RepairSteps,
                "WeatheringReq": this.dataListFloorSave[0].WeatheringReq,
                "FoolrTy": this.dataListFloorSave[0].FoolrTy,
                "FoolrAreReq": this.dataListFloorSave[0].FoolrAreReq,
                "OutPipY": this.dataListFloorSave[0].OutPipY == "false" ? 2 : this.dataListFloorSave[0].OutPipY == "true" ? 1 : this.dataListFloorSave[0].OutPipY,
                "PipLenNeed": this.dataListFloorSave[0].PipLenNeed,
                "RoofCleaYn": this.dataListFloorSave[0].RoofCleaYn == "false" ? 2 : this.dataListFloorSave[0].RoofCleaYn == "true" ? 1 : this.dataListFloorSave[0].RoofCleaYn,
                "CorridorYn": this.dataListFloorSave[0].CorridorYn == "false" ? 2 : this.dataListFloorSave[0].CorridorYn == "true" ? 1 : this.dataListFloorSave[0].CorridorYn,
                "CorriCondi": this.dataListFloorSave[0].CorriCondi,
                "CorriLen": this.dataListFloorSave[0].CorriLen,
                "CorridorWidth": this.dataListFloorSave[0].CorridorWidth,
                "CorriLighFunc": this.dataListFloorSave[0].CorriLighFunc,
                "CorridorRepair": this.dataListFloorSave[0].CorridorRepair,
                "AreaWw": this.dataListFloorSave[0].AreaWw,
                "AreaReplastering": this.dataListFloorSave[0].AreaReplastering,
                "AreaReflooring": this.dataListFloorSave[0].AreaReflooring,
                "AreaCeilingPlaster": this.dataListFloorSave[0].AreaCeilingPlaster,
                "AreaFlrPatchwork": this.dataListFloorSave[0].AreaFlrPatchwork,
                "DoorReplace": this.dataListFloorSave[0].DoorReplace,
                "JaalisReplace": this.dataListFloorSave[0].JaalisReplace,
                "DoorRepair": this.dataListFloorSave[0].DoorRepair,
                "JaalisRepair": this.dataListFloorSave[0].JaalisRepair,
                "DoorRepaint": this.dataListFloorSave[0].DoorRepaint,
                "JaalisRepaint": this.dataListFloorSave[0].JaalisRepaint,
                "BldOhtYn": this.dataListFloorSave[0].BldOhtYn == "false" ? 2 : this.dataListFloorSave[0].BldOhtYn == "true" ? 1 : this.dataListFloorSave[0].BldOhtYn,
                "FunBldOhtYn": this.dataListFloorSave[0].FunBldOhtYn
              }
            }; // this.alertService.success('Saved Floor Question');

            this.alertService.success('Saved Successfully');
            console.log(i, "iiiii");
            this.formfloor.controls['sidsfloor']['controls'][i].controls['Status'].setValue(3);
            this.formfloor.controls['sidsfloor']['controls'][i].controls['Status'].updateValueAndValidity();
            this.formfloor.controls['sidsfloor']['controls'][i].controls['FloorClose'].setValue(3);
            this.formfloor.controls['sidsfloor']['controls'][i].controls['FloorClose'].updateValueAndValidity();
            this.utilityService.saveFloorSids(data).subscribe(function (res) {
              // this.checkRoomLocalDb(bulid, floorid)
              // if (res.dataStatus) {
              // console.log(data, res)
              _this21.floorDelete();

              var query = 'UPDATE sidsPrimaryFloorSaveDatas SET Status = ' + "3" + ', FloorClose = ' + "3" + ', BuildIndex = ' + _this21.filterbuild[0].IndexId + ', FloorIndex = ' + res.IndexId + ' WHERE sidsPrimaryFloorSaveDatas.SclId = "' + _this21.schoolId + '" And sidsPrimaryFloorSaveDatas.BuildIndx = "' + bulid + '" And sidsPrimaryFloorSaveDatas.FloorId = "' + floorid + '" And sidsPrimaryFloorSaveDatas.VistId = "' + _this21.vistId + '"';
              debugger;
              var query2 = 'UPDATE sidsPrimaryFloorQuestion SET FloorIndx ="' + res.IndexId + '" WHERE sidsPrimaryFloorQuestion.SclId = "' + _this21.schoolId + '" And sidsPrimaryFloorQuestion.BuildingId = "' + _this21.dataListFloorSave[0].BuildingId + '" And sidsPrimaryFloorQuestion.VistId = "' + _this21.vistId + '" And sidsPrimaryFloorQuestion.FloorId = "' + floorid + '"';
              console.log("ARRRR", query2, "TTTHHIII", res.IndexId);
              return _this21.sqliteDB.update(query).then(function (data) {
                return _this21.sqliteDB.update(query2).then(function (data) {
                  // this.formfloor.controls['sidsfloor']['controls'][i].controls['Status'].setValue(3);
                  // this.formfloor.controls['sidsfloor']['controls'][i].controls['Status'].updateValueAndValidity();
                  //   this.checkRoomLocalDb(bulid, floorid)
                  _this21.getfloor(bulid, _this21.filterbuild[0].IndexId, floorid);
                });
              });
            });
            this.router.navigate(['/tabs/primary-new-dashboard'], {
              queryParams: {
                'schoolId': this.schoolId,
                'vistId': this.vistId
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "floorDelete",
          value: function floorDelete() {
            var _this22 = this;

            var selectQuery = 'SELECT * FROM DeleteFloor';
            this.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
              if (data.rows.length > 0) {
                var DeleteFloor = [];

                for (var i = 0; i < data.rows.length; i++) {
                  DeleteFloor.push(data.rows.item(i));
                }

                console.log("DeleteFloor", DeleteFloor);

                if (DeleteFloor.length > 0) {
                  var _loop2 = function _loop2(_i5) {
                    var dataSet = JSON.parse(DeleteFloor[_i5].Records);

                    _this22.sidsService.StgSidsDelFloor(dataSet).subscribe(function (res) {
                      if (res.dataStatus) {
                        console.log(DeleteFloor[_i5].FloorId, "Floor Deleted Completed");
                        var deleteQuery = 'DELETE FROM DeleteFloor WHERE schoolId = ' + DeleteFloor[_i5].schoolId + ' And visitId = ' + DeleteFloor[_i5].visitId + ' And FloorId = ' + DeleteFloor[_i5].FloorId;

                        _this22.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {});
                      }
                    });
                  };

                  for (var _i5 = 0; _i5 < DeleteFloor.length; _i5++) {
                    _loop2(_i5);
                  }
                }
              }
            });
          }
        }, {
          key: "checkRoomLocalDb",
          value: function checkRoomLocalDb(bulid, floorid) {
            var _this23 = this;

            if (this.filterfloor.length == 0) {
              this.alertService.error('Please Sync Floor Question');
            } else {
              var build = 100 + parseInt(bulid);
              var floor = 1000 + parseInt(floorid);
              console.log(build, this.filterfloor[0].IndexId);
              var dataFI = this.filterfloor[0].IndexId;
              var query = 'SELECT * FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + build + '"' + ' And FloorId = "' + floor + '"' + ' And VistId = "' + this.vistId + '"';
              return this.sqliteDB.getDataLocalDB(query).then(function (data) {
                if (data.rows.length > 0) {
                  // this.dataListData = []
                  for (var i = 0; i < data.rows.length; i++) {
                    _this23.dataListData.push(data.rows.item(i));
                  }

                  console.log(_this23.dataListData); // for (let m = 1; m <= this.dataListRoom.length; m++) {
                  //   console.log(m, "m", bulid, floor)
                  //   this.onSaveRoom(bulid, floor, m);
                  // }

                  console.log(_this23.dataListRoom, "room data");
                } else {
                  _this23.alertService.error('Please Enter Room Question');

                  console.log("no room data");
                }
              });
            }
          }
        }, {
          key: "onSaveRoom",
          value: function onSaveRoom(id, floor, roomid, iId) {
            var _this24 = this;

            debugger;
            console.log("suriyadsa", this.filterfloor);

            if (this.filterfloor.length == 0) {
              this.alertService.error('Please Sync Floor Question');
            } else {
              var floordId = 1000 + parseInt(floor);
              var query5 = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorId = "' + floordId + '"' + ' And VistId = "' + this.vistId + '"';
              return this.sqliteDB.getDataLocalDB(query5).then(function (data) {
                var dataListData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListData.push(data.rows.item(i));
                }

                console.log("datListDataAAAAAAAAAAAAAAAAAAAAAAAAAAAA", dataListData);
                var floorSuccess = dataListData.filter(function (dd) {
                  return +dd.Status != 3;
                });

                if (floorSuccess.length > 0) {
                  _this24.alertService.error('Please Sync Floor Question');
                } else {
                  console.log(id, floor, roomid);
                  _this24.buldid = 100 + parseInt(id);
                  _this24.floorid = 1000 + parseInt(floor);
                  _this24.roomid = 10000 + parseInt(roomid);
                  console.log(_this24.buldid, _this24.floorid, _this24.roomid);
                  var query = 'SELECT * FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + _this24.schoolId + '"' + ' And BldgId = "' + _this24.buldid + '"' + ' And FloorId = "' + _this24.floorid + '"' + ' And RoomId = "' + _this24.roomid + '"' + ' And VistId = "' + _this24.vistId + '"';
                  console.log("SaveRoomId", query);
                  return _this24.sqliteDB.getDataLocalDB(query).then(function (data) {
                    var _a, _b, _c;

                    if (data.rows.length > 0) {
                      _this24.dataListData = [];

                      for (var i = 0; i < data.rows.length; i++) {
                        _this24.dataListData.push(data.rows.item(i));
                      }

                      debugger;
                      var dataFI = dataListData[0].FloorIndex ? dataListData[0].FloorIndex : _this24.filterfloor[0].IndexId;
                      console.log(_this24.dataListData, "data room");
                      var dataImage1 = (_a = _this24.dataListData[0].LabPhotoOne) === null || _a === void 0 ? void 0 : _a.split(',');
                      var dataImage2 = (_b = _this24.dataListData[0].SmartRoomPhotoOne) === null || _b === void 0 ? void 0 : _b.split(',');
                      var dataImage3 = (_c = _this24.dataListData[0].RoomCeilingPhoto) === null || _c === void 0 ? void 0 : _c.split(',');
                      var datarecords = {
                        "records": {
                          "IndxId": _this24.dataListData[0].IndxId,
                          "SchlId": _this24.schoolId,
                          "VistId": _this24.vistId,
                          "BldgIdxId": _this24.filterbuild[0].IndexId,
                          "BldgId": _this24.buldid,
                          "FloorIdxId": dataFI,
                          "FloorId": _this24.floorid,
                          "RoomId": _this24.roomid,
                          "RoomUse": _this24.dataListData[0].RoomUse,
                          "RoomName": _this24.dataListData[0].RoomName,
                          "RoomCondition": _this24.dataListData[0].RoomCondition,
                          "RepairType": _this24.dataListData[0].RepairType,
                          "MajorRepair": _this24.dataListData[0].MajorRepair,
                          "MinorRepair": _this24.dataListData[0].MinorRepair,
                          "AreaReplastering": _this24.dataListData[0].AreaReplastering,
                          "AreaExtWw": _this24.dataListData[0].AreaExtWw,
                          "AreaIntWw": _this24.dataListData[0].AreaIntWw,
                          "AreaPlastering": _this24.dataListData[0].AreaPlastering,
                          "AreaReflooring": _this24.dataListData[0].AreaReflooring,
                          "AreaPatchwork": _this24.dataListData[0].AreaPatchwork,
                          "DoorReplace": _this24.dataListData[0].DoorReplace,
                          "WindowReplace": _this24.dataListData[0].WindowReplace,
                          "DoorRepair": _this24.dataListData[0].DoorRepair,
                          "WindowRepair": _this24.dataListData[0].WindowRepair,
                          "DoorRepaint": _this24.dataListData[0].DoorRepaint,
                          "WindowRepaint": _this24.dataListData[0].WindowRepaint,
                          "LatrinReplace": _this24.dataListData[0].LatrinReplace,
                          "UrinalReplace": _this24.dataListData[0].UrinalReplace,
                          "PipeNeed": _this24.dataListData[0].PipeNeed,
                          "DrainageNeed": _this24.dataListData[0].DrainageNeed,
                          "RoomLength": _this24.dataListData[0].RoomLength,
                          "RoomBreadth": _this24.dataListData[0].RoomBreadth,
                          "RoomHeight": _this24.dataListData[0].RoomHeight,
                          "FloorType": _this24.dataListData[0].FloorType,
                          "BenchFunc": _this24.dataListData[0].BenchFunc,
                          "DeskFunc": _this24.dataListData[0].DeskFunc,
                          "TubelightFunc": _this24.dataListData[0].TubelightFunc,
                          "FansFunc": _this24.dataListData[0].FansFunc,
                          "Cupboard": _this24.dataListData[0].Cupboard,
                          "RoomCeilingYn": _this24.dataListData[0].RoomCeilingYn,
                          "RoomCeilingPhoto": _this24.dataListData[0].RoomCeilingPhotoName,
                          // "RoomCeilingPhotoName": this.dataListData[0].RoomCeilingPhotoName,
                          "RoomCeilingLatitude": _this24.dataListData[0].RoomCeilingLatitude,
                          "RoomCeilingLongitude": _this24.dataListData[0].RoomCeilingLongitude,
                          "TeacherTableYn": _this24.dataListData[0].TeacherTableYn == "false" ? 2 : _this24.dataListData[0].TeacherTableYn == "true" ? 1 : _this24.dataListData[0].TeacherTableYn == true ? 1 : 2,
                          "TelevisionYn": _this24.dataListData[0].TelevisionYn == "false" ? 2 : _this24.dataListData[0].TelevisionYn == "true" ? 1 : _this24.dataListData[0].TelevisionYn == true ? 1 : 2,
                          "TelevisionFuncYn": _this24.dataListData[0].TelevisionFuncYn == "false" ? 2 : _this24.dataListData[0].TelevisionFuncYn == "true" ? 1 : _this24.dataListData[0].TelevisionFuncYn == true ? 1 : 2,
                          "SmartboardPrjtYn": _this24.dataListData[0].SmartboardPrjtYn == "false" ? 2 : _this24.dataListData[0].SmartboardPrjtYn == "true" ? 1 : _this24.dataListData[0].SmartboardPrjtYn == true ? 1 : 2,
                          "SmartboardPrjtFuncYn": _this24.dataListData[0].SmartboardPrjtFuncYn == "false" ? 2 : _this24.dataListData[0].SmartboardPrjtFuncYn == "true" ? 1 : _this24.dataListData[0].SmartboardPrjtFuncYn == true ? 1 : 2,
                          "ClassRoomProjYn": _this24.dataListData[0].ClassRoomProjYn == "false" ? 2 : _this24.dataListData[0].ClassRoomProjYn == "true" ? 1 : _this24.dataListData[0].ClassRoomProjYn == true ? 1 : 2,
                          "ClassRoomProjFuncYn": _this24.dataListData[0].ClassRoomProjFuncYn == "false" ? 2 : _this24.dataListData[0].ClassRoomProjFuncYn == "true" ? 1 : _this24.dataListData[0].ClassRoomProjFuncYn == true ? 1 : 2,
                          "LabType": _this24.dataListData[0].LabType,
                          "LabComputerYn": _this24.dataListData[0].LabComputerYn == "false" ? 2 : _this24.dataListData[0].LabComputerYn == "true" ? 1 : _this24.dataListData[0].LabComputerYn == true ? 1 : 2,
                          "LabComputerFunc": _this24.dataListData[0].LabComputerFunc,
                          "LabComputerRepair": _this24.dataListData[0].LabComputerRepair,
                          "LabWatersupplyYn": _this24.dataListData[0].LabWatersupplyYn == "false" ? 2 : _this24.dataListData[0].LabWatersupplyYn == "true" ? 1 : _this24.dataListData[0].LabWatersupplyYn == true ? 1 : 2,
                          "LabDrainage": _this24.dataListData[0].LabDrainage == "false" ? 2 : _this24.dataListData[0].LabDrainage == "true" ? 1 : _this24.dataListData[0].LabDrainage == true ? 1 : 2,
                          "LabPhotoOne": _this24.dataListData[0].LabPhotoOneName,
                          "LabLatitude": _this24.dataListData[0].LabLatitude,
                          "LabLongitude": _this24.dataListData[0].LabLongitude,
                          "LibraryBooks": _this24.dataListData[0].LibraryBooks == "false" ? 2 : _this24.dataListData[0].LibraryBooks == "true" ? 1 : _this24.dataListData[0].LibraryBooks == true ? 1 : 2,
                          "HmRoomTblYn": _this24.dataListData[0].HmRoomTblYn == "false" ? 2 : _this24.dataListData[0].HmRoomTblYn == "true" ? 1 : _this24.dataListData[0].HmRoomTblYn == true ? 1 : 2,
                          "StaffrmUsedBy": _this24.dataListData[0].StaffrmUsedBy,
                          "KitchenWtrSrc": _this24.dataListData[0].KitchenWtrSrc,
                          "KitchenLPGConYn": _this24.dataListData[0].KitchenLPGConYn == "false" ? 2 : _this24.dataListData[0].KitchenLPGConYn == "true" ? 1 : _this24.dataListData[0].KitchenLPGConYn == true ? 1 : 2,
                          "KitchenWtrSupply": _this24.dataListData[0].KitchenWtrSupply == "false" ? 2 : _this24.dataListData[0].KitchenWtrSupply == "true" ? 1 : _this24.dataListData[0].KitchenWtrSupply == true ? 1 : 2,
                          "KitchenStorageYn": _this24.dataListData[0].KitchenStorageYn == "false" ? 2 : _this24.dataListData[0].KitchenStorageYn == "true" ? 1 : _this24.dataListData[0].KitchenStorageYn == true ? 1 : 2,
                          "KitchenCleanYn": _this24.dataListData[0].KitchenCleanYn == "false" ? 2 : _this24.dataListData[0].KitchenCleanYn == "true" ? 1 : _this24.dataListData[0].KitchenCleanYn == true ? 1 : 2,
                          "DiningFunctionalYn": _this24.dataListData[0].DiningFunctionalYn == "false" ? 2 : _this24.dataListData[0].DiningFunctionalYn == "true" ? 1 : _this24.dataListData[0].DiningFunctionalYn == true ? 1 : 2,
                          "DiningSeatingCapacity": _this24.dataListData[0].DiningSeatingCapacity,
                          "DiningSeatingWtrSupply": _this24.dataListData[0].DiningSeatingWtrSupply == "false" ? 2 : _this24.dataListData[0].DiningSeatingWtrSupply == "true" ? 1 : _this24.dataListData[0].DiningSeatingWtrSupply == true ? 1 : 2,
                          "NoonmealStorageClean": _this24.dataListData[0].NoonmealStorageClean == "false" ? 2 : _this24.dataListData[0].NoonmealStorageClean == "true" ? 1 : _this24.dataListData[0].NoonmealStorageClean == true ? 1 : 2,
                          "StoreRoomPurpose": _this24.dataListData[0].StoreRoomPurpose,
                          "StrroomStorageClean": _this24.dataListData[0].StrroomStorageClean == "false" ? 2 : _this24.dataListData[0].StrroomStorageClean == "true" ? 1 : _this24.dataListData[0].StrroomStorageClean == true ? 1 : 2,
                          "ReasonEmpty": _this24.dataListData[0].ReasonEmpty,
                          "AuditoriumYn": _this24.dataListData[0].AuditoriumYn == "false" ? 2 : _this24.dataListData[0].AuditoriumYn == "true" ? 1 : _this24.dataListData[0].AuditoriumYn == true ? 1 : 2,
                          "AuditoriumStageReqt": _this24.dataListData[0].AuditoriumStageReqt,
                          "AuditoriumStageArea": _this24.dataListData[0].AuditoriumStageArea,
                          "AuditoriumStageHeight": _this24.dataListData[0].AuditoriumStageHeight,
                          "AuditoriumStageAreaLevel": _this24.dataListData[0].AuditoriumStageAreaLevel,
                          "AuditoriumLights": _this24.dataListData[0].AuditoriumLights,
                          "AuditoriumFans": _this24.dataListData[0].AuditoriumFans,
                          "AuditoriumPrjtYn": _this24.dataListData[0].AuditoriumPrjtYn == "false" ? 2 : _this24.dataListData[0].AuditoriumPrjtYn == "true" ? 1 : _this24.dataListData[0].AuditoriumPrjtYn == true ? 1 : 2,
                          "AuditoriumPrjtFunc": _this24.dataListData[0].AuditoriumPrjtFunc == "false" ? 2 : _this24.dataListData[0].AuditoriumPrjtFunc == "true" ? 1 : _this24.dataListData[0].AuditoriumPrjtFunc == true ? 1 : 2,
                          "SmartRoomFacilityYn": _this24.dataListData[0].SmartRoomFacilityYn == "false" ? 2 : _this24.dataListData[0].SmartRoomFacilityYn == "true" ? 1 : _this24.dataListData[0].SmartRoomFacilityYn == true ? 1 : 2,
                          "SmartRoomDeviceFunYn": _this24.dataListData[0].SmartRoomDeviceFunYn == "false" ? 2 : _this24.dataListData[0].SmartRoomDeviceFunYn == "true" ? 1 : _this24.dataListData[0].SmartRoomDeviceFunYn == true ? 1 : 2,
                          "SmartRoomComputersYn": _this24.dataListData[0].SmartRoomComputersYn == "false" ? 2 : _this24.dataListData[0].SmartRoomComputersYn == "true" ? 1 : _this24.dataListData[0].SmartRoomComputersYn == true ? 1 : 2,
                          "SmartRoomFunComp": _this24.dataListData[0].SmartRoomFunComp,
                          "SmartRoomFunCompRepair": _this24.dataListData[0].SmartRoomFunCompRepair,
                          "SmartRoomPhotoOne": _this24.dataListData[0].SmartRoomPhotoOneName,
                          "SmartRoomLatitude": _this24.dataListData[0].SmartRoomLatitude,
                          "SmartRoomLongitude": _this24.dataListData[0].SmartRoomLongitude
                        }
                      };

                      _this24.utilityService.saveRoomSids(datarecords).subscribe(function (res) {
                        var floors = parseInt(floor) - 1000;
                        console.log(floors);
                        _this24.dataListData[0].IndxId = res.IndexId;

                        if (dataImage1.length > 1) {
                          var imgObj = {
                            "records": {
                              "Photo": dataImage1[1],
                              "PhotoName": _this24.dataListData[0].LabPhotoOneName
                            }
                          };

                          _this24.emisService.S3ImageSave(imgObj).subscribe(function (res) {});
                        }

                        if (dataImage2.length > 1) {
                          var _imgObj = {
                            "records": {
                              "Photo": dataImage2[1],
                              "PhotoName": _this24.dataListData[0].SmartRoomPhotoOneName
                            }
                          };

                          _this24.emisService.S3ImageSave(_imgObj).subscribe(function (res) {});
                        }

                        if (dataImage3.length > 1) {
                          var _imgObj2 = {
                            "records": {
                              "Photo": dataImage3[1],
                              "PhotoName": _this24.dataListData[0].RoomCeilingPhotoName
                            }
                          };

                          _this24.emisService.S3ImageSave(_imgObj2).subscribe(function (res) {});
                        }

                        var query2 = 'UPDATE newPrimaryRoomscommons SET IndxId = ' + res.IndexId + ' WHERE SchlId = "' + _this24.schoolId + '"' + ' And BldgId = "' + _this24.buldid + '"' + ' And FloorId = "' + _this24.floorid + '"' + ' And RoomId = "' + _this24.roomid + '"' + ' And VistId = "' + _this24.vistId + '"';
                        var query = 'UPDATE sidsPrimaryRoomSaves SET Status = ' + "3" + ', RoomIndex = ' + res.IndexId + ' WHERE sidsPrimaryRoomSaves.SclId = "' + _this24.schoolId + '" And sidsPrimaryRoomSaves.BuildIndx = "' + id + '" And sidsPrimaryRoomSaves.FloorIndx = "' + floor + '" And sidsPrimaryRoomSaves.RoomId = "' + _this24.roomid + '"';

                        _this24.sqliteDB.update(query).then(function (data) {
                          if (_this24.dataListData[0].RoomUse != '10') {}

                          console.log(_this24.formroom.value);

                          _this24.sqliteDB.update(query2).then(function (data) {});

                          _this24.formroom.controls['sidsroom']['controls'][iId].controls['Status'].setValue(3);

                          _this24.formroom.controls['sidsroom']['controls'][iId].controls['Status'].updateValueAndValidity(); // this.formroom.controls['sidsroom']['controls'][i].controls['Status'].setValue(3);
                          // this.formroom.controls['sidsroom']['controls'][i].controls['Status'].updateValueAndValidity();

                        }); // if (res.dataStatus) {
                        // this.alertService.success('Saved Room Question');
                        //   let query = 'UPDATE sidsRoomSave SET Status = ' + "3" + ' WHERE sidsRoomSave.SclId = "' + this.schoolId + '" And sidsRoomSave.BuildIndx = "' + id + '" And sidsRoomSave.FloorIndx = "' + floor + '"';
                        //   return this.sqliteDB.update(query).then(data => {
                        //   })
                        // })
                        // }


                        if (+_this24.dataListData[0].RoomUse == 10) {
                          var toiletData = {
                            "records": {
                              "IndexId": _this24.dataListData[0].ToiletIndxId,
                              "SchoolId": _this24.schoolId,
                              "VisitId": _this24.vistId,
                              "BuildId": _this24.filterbuild[0].IndexId,
                              "FloorId": dataFI,
                              "RoomId": _this24.roomid,
                              "RoomIdxId": _this24.dataListData[0].IndxId,
                              "ToiletType": _this24.dataListData[0].ToiletType,
                              "ToiletWaterCon": _this24.dataListData[0].ToiletWaterCon,
                              "ToiletWasteDis": _this24.dataListData[0].ToiletWasteDis,
                              "IwcToilet": _this24.dataListData[0].IwcToilet == "false" ? 2 : _this24.dataListData[0].IwcToilet == "true" ? 1 : _this24.dataListData[0].IwcToilet == true ? 1 : 2,
                              "EwcToilet": _this24.dataListData[0].EwcToilet == "false" ? 2 : _this24.dataListData[0].EwcToilet == "true" ? 1 : _this24.dataListData[0].EwcToilet == true ? 1 : 2,
                              "UrinalToilet": _this24.dataListData[0].UrinalToilet == "false" ? 2 : _this24.dataListData[0].UrinalToilet == "true" ? 1 : _this24.dataListData[0].UrinalToilet == true ? 1 : 2,
                              "Iwccubicles": _this24.dataListData[0].Iwccubicles,
                              "IwccubiclesFunc": _this24.dataListData[0].IwccubiclesFunc,
                              "Ewccubicles": _this24.dataListData[0].Ewccubicles,
                              "Ewccubiclesfunc": _this24.dataListData[0].Ewccubiclesfunc,
                              "Urinals": _this24.dataListData[0].Urinals,
                              "Urinalsfunc": _this24.dataListData[0].Urinalsfunc,
                              "ToiletTapsFunc": _this24.dataListData[0].ToiletTapsFunc,
                              "ToiletNeedTabs": _this24.dataListData[0].ToiletNeedTabs,
                              "ToiletBucket": _this24.dataListData[0].ToiletBucket,
                              "Toiletmugs": _this24.dataListData[0].Toiletmugs,
                              "SizeSuitable": _this24.dataListData[0].SizeSuitable == "false" ? 2 : _this24.dataListData[0].SizeSuitable == "true" ? 1 : _this24.dataListData[0].SizeSuitable == true ? 1 : 2,
                              "Roof": _this24.dataListData[0].Roof,
                              "SanitWasteDisp": _this24.dataListData[0].SanitWasteDisp,
                              "HwFacility": _this24.dataListData[0].HwFacility == "false" ? 2 : _this24.dataListData[0].HwFacility == "true" ? 1 : _this24.dataListData[0].HwFacility == true ? 1 : 2,
                              "ToiletImg": ""
                            }
                          };

                          _this24.utilityService.saveToiletSids(toiletData).subscribe(function (ress) {
                            var query3 = 'UPDATE newPrimaryRoomscommons SET ToiletIndxId = ' + ress.IndexId + ' WHERE SchlId = "' + _this24.schoolId + '"' + ' And BldgId = "' + _this24.buldid + '"' + ' And FloorId = "' + _this24.floorid + '"' + ' And RoomId = "' + _this24.roomid + '"' + ' And VistId = "' + _this24.vistId + '"';

                            _this24.sqliteDB.update(query3).then(function (data) {}); // if (res.dataStatus) {
                            // this.alertService.success('Saved Toilet Questions');


                            _this24.alertService.success('Saved Successfully'); // let floors = parseInt(floor) - 1000
                            // console.log(floors)
                            // let query = 'UPDATE sidsPrimaryRoomSaves SET Status = ' + "3" + ' WHERE sidsPrimaryRoomSaves.SclId = "' + this.schoolId + '" And sidsPrimaryRoomSaves.BuildIndx = "' + id + '" And sidsPrimaryRoomSaves.FloorIndx = "' + floor + '" And sidsPrimaryRoomSaves.RoomId = "' + this.roomid  + '"';
                            // return this.sqliteDB.update(query).then(data => {
                            //   this.formroom.controls['sidsroom']['controls'][iId].controls['Status'].setValue(3);
                            //   this.formroom.controls['sidsroom']['controls'][iId].controls['Status'].updateValueAndValidity();
                            //   this.alertService.success('Saved Toilet Questions');


                            _this24.ionViewDidEnter(); // let query = 'UPDATE sidsRoomSave SET Status = ' + "3" + ' WHERE sidsRoomSave.SclId = "' + this.schoolId + '" And sidsRoomSave.BuildIndx = "' + this.buldid + '"';
                            // return this.sqliteDB.update(query).then(data => {
                            // })
                            // }
                            // })

                          });
                        }
                      });
                    } else {
                      _this24.alertService.error('Please Enter Room Questions');

                      console.log("no room data");
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "addBuildingData",
          value: function addBuildingData() {
            var _this25 = this;

            // local
            // let backupId = id;
            // id = +id - 1
            // let id = this.dataListBuilding.length; 27 june 2024 (comments date)
            var id;

            if (this.dataListBuilding.length > 0) {
              for (var i = 0; i < this.dataListBuilding.length; i++) {
                id = this.dataListBuilding[i].Id;
              }
            } else {
              id = this.dataListBuilding.length;
            } // let dataId = 100 + parseInt(id)


            var dataId = 100 + parseInt(id);
            var query = 'SELECT * FROM sidsPrimaryBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (build) {
              var sidsBuild = [];

              for (var i = 0; i < build.rows.length; i++) {
                sidsBuild.push(build.rows.item(i));
              }

              console.log("sidsBuild", sidsBuild);

              if (sidsBuild.length > 0) {
                var filterLocalBuild = sidsBuild.filter(function (dd) {
                  return +dd.Status == 1;
                });
                var filterLocalBuild2 = sidsBuild.filter(function (dd) {
                  return +dd.Status != 1;
                });
                console.log("filterLocalBuild <<<<", filterLocalBuild);
                console.log("filterLocalBuild2 >>>>", filterLocalBuild2);

                if (filterLocalBuild.length > 0) {
                  for (var _i6 = 0; _i6 < filterLocalBuild.length; _i6++) {
                    if (+filterLocalBuild[_i6].Status == 1) {
                      _this25.alertService.error("Please fill details for the previous building");
                    } // if(+filterLocalBuild[i].ClosingQuestions == 1){
                    //   this.alertService.error("Please fill details for the closing questions")
                    // }
                    // else if(+filterLocalBuild[i].Status == 2){
                    //   this.alertService.error("Please Sync the Building " + id)
                    // }
                    else {// this.buildingFloor(id, filterLocalBuild);
                    }
                  }
                } else {
                  var filterCloseBuild = filterLocalBuild2.filter(function (kk) {
                    return +kk.ClosingQuestions == 1 && (+kk.BuildCondi == 1 || +kk.BuildCondi == 4);
                  });
                  var filterCloseBuild2 = filterLocalBuild2.filter(function (kk) {
                    return +kk.ClosingQuestions != 1;
                  });
                  console.log("filterCloseBuild <<<<", filterCloseBuild);
                  console.log("filterCloseBuild2 >>>>", filterCloseBuild2);

                  if (filterCloseBuild.length > 0) {
                    for (var _i7 = 0; _i7 < filterCloseBuild.length; _i7++) {
                      if (+filterCloseBuild[_i7].ClosingQuestions == 1) {
                        _this25.alertService.error("Please fill details for the closing questions");
                      }
                    }
                  } else {
                    var buildLength = filterLocalBuild2.length == 0 ? 0 : filterLocalBuild2.length - 1;

                    if (+filterLocalBuild2[buildLength].BuildCondi == 2 || +filterLocalBuild2[buildLength].BuildCondi == 3) {
                      _this25.getBuildAddData(parseInt(id) + 1);

                      _this25.lastRoomId = 0;
                    } else {
                      _this25.buildingFloor(id, filterLocalBuild2);
                    }
                  }
                }
              } else {
                _this25.utilityService.getBuildingSids(_this25.vistId, _this25.schoolId).subscribe(function (res) {
                  if (res.dataStatus) {
                    var filterBuild = res.result.filter(function (item) {
                      return item.BldgId == _this25.buldid;
                    });
                    console.log("filterBuild", filterBuild);

                    if (filterBuild.length > 0) {
                      var filterServerBuild = filterBuild.filter(function (dd) {
                        return +dd.Status == 1;
                      });
                      var filterServerBuild2 = filterBuild.filter(function (dd) {
                        return +dd.Status != 1;
                      });
                      console.log("filterServerBuild <<<<", filterServerBuild);
                      console.log("filterServerBuild2 >>>>", filterServerBuild2);

                      if (filterServerBuild.length > 0) {
                        for (var _i8 = 0; _i8 < filterServerBuild.length; _i8++) {
                          if (+filterBuild[_i8].Status == 1) {
                            _this25.alertService.error("Please fill the previous building");
                          } // else if(+filterBuild[i].Status == 2){
                          //   this.alertService.error("Please Sync the Building " + id)
                          // }
                          else {// this.buildingFloor(id, filterServerBuild);
                          }
                        }
                      } else {
                        _this25.buildingFloor(id, filterServerBuild2);
                      }
                    } else {
                      _this25.alertService.error("Please Fill the Building " + id);
                    }
                  } else {
                    _this25.alertService.error("Please Fill the Building " + id);
                  }
                });
              }
            });
          }
        }, {
          key: "buildingFloor",
          value: function buildingFloor(id, filterServerBuild2) {
            var _this26 = this;

            var query = 'SELECT * FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + // ' And FloorId = "' + dataId + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (floor) {
              var sidsFloor = [];

              for (var i = 0; i < floor.rows.length; i++) {
                sidsFloor.push(floor.rows.item(i));
              }

              console.log("sidsFloor", sidsFloor);

              if (sidsFloor.length > 0) {
                var filterLocalFloor = sidsFloor.filter(function (dd) {
                  return +dd.Status == 1;
                });
                console.log("filterLocalFloor", filterLocalFloor);
                var filterLocalFloor2 = sidsFloor.filter(function (dd) {
                  return +dd.Status != 1;
                });
                console.log("filterLocalFloor2", filterLocalFloor2);

                if (filterLocalFloor.length > 0) {
                  for (var j = 0; j < filterLocalFloor.length; j++) {
                    if (+filterLocalFloor[j].Status == 1) {
                      _this26.alertService.error("Please fill atleast one floor and one room in Building - " + filterServerBuild2[0].BuildName + " to add the next building");
                    } // else if(+filterLocalFloor[j].Status == 2){
                    //   this.alertService.error("Please fill atleast one floor and one room in Building - " +filterServerBuild2[0].BuildName+ "to add the next building")
                    // }
                    else {// this.buildingFloorRoom(id, filterServerBuild2, filterServerFloor);
                    }
                  }
                } else {
                  if (filterLocalFloor2[0].FloorName == "Terrace") {
                    if (filterLocalFloor2.length == 1) {
                      _this26.getBuildAddData(parseInt(id) + 1);

                      _this26.lastRoomId = 0;
                    } else {
                      var floorLength = filterLocalFloor2.length == 0 ? 0 : filterLocalFloor2.length - 1;

                      if (+filterLocalFloor2[floorLength].FloorCondi == 2 || +filterLocalFloor2[floorLength].FloorCondi == 3) {
                        _this26.getBuildAddData(parseInt(id) + 1);

                        _this26.lastRoomId = 0;
                      } else {
                        _this26.buildingFloorRoom(id, filterServerBuild2, filterLocalFloor2);
                      }
                    }
                  } else {
                    // Floor Under Contruction Condition Start...
                    var _floorLength = filterLocalFloor2.length == 0 ? 0 : filterLocalFloor2.length - 1;

                    if (+filterLocalFloor2[_floorLength].FloorCondi == 2 || +filterLocalFloor2[_floorLength].FloorCondi == 3) {
                      _this26.getBuildAddData(parseInt(id) + 1);

                      _this26.lastRoomId = 0;
                    } else {
                      var floorClose = filterLocalFloor2.filter(function (ff) {
                        return +ff.FloorClose == 1;
                      });

                      if (floorClose.length > 0) {
                        _this26.alertService.error("Please fill floor closing questions in Building - " + filterServerBuild2[0].BuildName + " to add the next building");
                      } else {
                        _this26.buildingFloorRoom(id, filterServerBuild2, filterLocalFloor2);
                      }
                    }
                  }
                }
              } else {
                _this26.utilityService.getFloorSids(_this26.vistId, filterServerBuild2[0].IndexId).subscribe(function (res) {
                  if (res.dataStatus) {
                    var filterfloor = res.result.filter(function (item) {
                      return item.BldgId == _this26.buldid;
                    });
                    console.log("filterfloor", filterfloor);

                    if (filterfloor.length > 0) {
                      var filterServerFloor = filterfloor.filter(function (dd) {
                        return +dd.Status == 1;
                      });
                      console.log("filterServerFloor", filterServerFloor);
                      var filterServerFloor2 = filterfloor.filter(function (dd) {
                        return +dd.Status != 1;
                      });
                      console.log("filterServerFloor2", filterServerFloor2);

                      if (filterServerFloor.length > 0) {
                        for (var _j2 = 0; _j2 < filterServerFloor.length; _j2++) {
                          if (+filterServerFloor[_j2].Status == 1) {
                            _this26.alertService.error("Please fill atleast one floor and one room in Building - " + filterServerBuild2[0].BuildName + " to add the next building");
                          } // else if(+filterServerFloor[j].Status == 2){
                          //   this.alertService.error("Please fill atleast one floor and one room in Building - " +filterServerBuild2[0].BuildName+ "to add the next building")
                          // }
                          else {// this.buildingFloorRoom(id, filterServerBuild2, filterServerFloor);
                          }
                        }
                      } else {
                        _this26.buildingFloorRoom(id, filterServerBuild2, filterServerFloor2);
                      }
                    } else {
                      _this26.alertService.error("Please Add Floor by " + filterServerBuild2[0].BuildName + " Building");
                    }
                  } else {
                    _this26.alertService.error("Please Add Floor by " + filterServerBuild2[0].BuildName + " Building");
                  }
                });
              }
            });
          }
        }, {
          key: "buildingFloorRoom",
          value: function buildingFloorRoom(id, sidsBuild, sidsFloor) {
            var _this27 = this;

            var query = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + // ' And FloorIndx = "' + dataId + '"' +
            // ' And RoomId = "' +  + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (room) {
              var sidsRoom = [];

              for (var i = 0; i < room.rows.length; i++) {
                sidsRoom.push(room.rows.item(i));
              }

              console.log("sidsRoom", sidsRoom);

              if (sidsRoom.length > 0) {
                var filterLocalRoom = sidsRoom.filter(function (dd) {
                  return +dd.Status == 1;
                });
                console.log("filterLocalRoom", filterLocalRoom);
                var filterLocalRoom2 = sidsRoom.filter(function (dd) {
                  return +dd.Status != 1;
                });
                console.log("filterLocalRoom2", filterLocalRoom2);

                if (filterLocalRoom.length > 0) {
                  for (var k = 0; k < filterLocalRoom.length; k++) {
                    if (+filterLocalRoom[k].Status == 1) {
                      _this27.alertService.error("Please fill the room for the floor"); // this.alertService.error("Please Fill the Room by "+sidsFloor[k].FloorName+" Floor")

                    } // else if(+filterLocalRoom[k].Status == 2){
                    //   this.alertService.error("Please Sync the Room by "+sidsFloor[+filterLocalRoom[0].FloorIndx - 1].FloorName+" Floor")
                    //   // this.alertService.error("Please Sync the Room by "+sidsFloor[k].FloorName+" Floor")
                    // }
                    else {// this.getBuildAddData(id + 1);
                      // this.lastRoomId = 0;
                    }
                  }
                } else {
                  var floorLength = sidsFloor.length == 0 ? 0 : sidsFloor.length - 1;
                  var floorId = parseInt(sidsFloor[floorLength].FloorId) - 1000;
                  var roomId = sidsRoom.filter(function (dd) {
                    return dd.FloorIndx == floorId;
                  });
                  console.log("BBBFFRRR", floorLength, floorId, roomId);

                  if (roomId.length > 0) {
                    _this27.getBuildAddData(parseInt(id) + 1);

                    _this27.lastRoomId = 0;
                  } else {
                    if (sidsFloor[floorLength].FloorName == "Terrace") {
                      _this27.getBuildAddData(parseInt(id) + 1);

                      _this27.lastRoomId = 0;
                    } else {
                      _this27.alertService.error("Please add room for the previous floor");
                    }
                  }
                }
              } else {
                console.log("build", _this27.filterbuild, sidsBuild);
                console.log("floor", _this27.filterfloor, sidsFloor);

                if (+sidsBuild[0].Status == 3 && +sidsFloor[0].Status == 3) {
                  _this27.utilityService.getRoomSids(_this27.vistId, _this27.filterbuild[0].IndexId, _this27.filterfloor[0].FoolrId).subscribe(function (res) {
                    // this.utilityService.getRoomSids(this.vistId, sidsBuild[0].BuildingId, sidsFloor[0].FloorId).subscribe(res => {
                    if (res.dataStatus) {
                      var filterRoom = res.result.filter(function (item) {
                        return item.BldgId == _this27.buldid;
                      });
                      console.log("filterRoom", filterRoom);

                      if (filterRoom.length > 0) {
                        var _filterLocalRoom = filterRoom.filter(function (dd) {
                          return +dd.Status == 1;
                        });

                        console.log("filterLocalRoom", _filterLocalRoom);

                        var _filterLocalRoom2 = filterRoom.filter(function (dd) {
                          return +dd.Status != 1;
                        });

                        console.log("filterLocalRoom2", _filterLocalRoom2);

                        if (_filterLocalRoom.length > 0) {
                          for (var _k = 0; _k < _filterLocalRoom.length; _k++) {
                            if (+_filterLocalRoom[_k].Status == 1) {
                              _this27.alertService.error("Please fill the room for the floor");
                            } // else if(+filterLocalRoom[k].Status == 2){
                            //   this.alertService.error("Please Sync the Room by "+sidsFloor[0].FloorName+" Floor")
                            // }
                            else {// this.getBuildAddData(id + 1);
                              // this.lastRoomId = 0;
                            }
                          }
                        } else {
                          _this27.getBuildAddData(parseInt(id) + 1);

                          _this27.lastRoomId = 0;
                        }
                      } else {
                        _this27.alertService.error("Please Add Room by " + sidsBuild[0].BuildName + " Building");
                      }
                    } else {
                      _this27.alertService.error("Please Add Room by " + sidsBuild[0].BuildName + " Building");
                    }
                  });
                } else {
                  _this27.alertService.error("Please Add Room by " + sidsBuild[0].BuildName + " Building");
                }
              }
            });
          }
        }, {
          key: "floorInsideRoom",
          value: function floorInsideRoom(id, floor) {
            var _this28 = this;

            //tomorrow delete before checresourece data okk...!
            var dataIdB = 100 + parseInt(id);
            var dataIdF = 1000 + parseInt(id);
            var query = 'DELETE FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorIndx = "' + floor + '"' + // ' And RoomId = "' + dataIdR + '"' +
            ' And VistId = "' + this.vistId + '"';
            var query2 = 'SELECT * FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + dataIdB + '"' + ' And FloorId = "' + dataIdF + '"' + // ' And RoomId = "' + dataIdR + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this28.sqliteDB.getDataLocalDB(query2).then(function (data) {
                if (data.rowsAffected > 0) {
                  console.log("Floor and Room Deleted");

                  _this28.ionViewDidEnter();
                }

                if (data.rowsAffected == 0) {
                  console.log("Floor and Room Deleted");

                  _this28.ionViewDidEnter();
                }
              });
            });
          }
        }, {
          key: "buildingInsideFloorRoom",
          value: function buildingInsideFloorRoom(id) {
            var _this29 = this;

            // Build -> Floor Delete
            var dataId = 100 + parseInt(id);
            var query = 'DELETE FROM sidsPrimaryFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            var query3 = 'DELETE FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And VistId = "' + this.vistId + '"';
            var query4 = 'DELETE FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this29.sqliteDB.getDataLocalDB(query2).then(function (data) {
                return _this29.sqliteDB.getDataLocalDB(query3).then(function (data) {
                  return _this29.sqliteDB.getDataLocalDB(query4).then(function (data) {
                    if (data.rowsAffected > 0) {
                      // console.log("Build Floor and Room Deleted");
                      // this.alertService.success("Building Deleted Successfully")
                      _this29.alertService.success('Saved Successfully');

                      _this29.ionViewDidEnter();
                    }

                    if (data.rowsAffected == 0) {
                      // this.alertService.success("Building Deleted Successfully")
                      _this29.alertService.success('Saved Successfully'); // console.log("Build Floor and Room Deleted");


                      _this29.ionViewDidEnter();
                    }
                  });
                });
              });
            });
          }
        }, {
          key: "addBuildingServer",
          value: function addBuildingServer(id) {
            var _this30 = this;

            this.filterbuild = [];
            this.buldid = 100 + parseInt(id);
            this.buldid.toString();
            this.utilityService.getBuildingSids(this.vistId, this.schoolId).subscribe(function (res) {
              if (res.dataStatus) {
                _this30.filterbuild = res.result.filter(function (item) {
                  return item.BldgId == _this30.buldid;
                });
                console.log("filterBuild", _this30.filterbuild);

                _this30.utilityService.getFloorSids(_this30.vistId, _this30.filterbuild[0].IndexId).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this30.filterfloor = res.result.filter(function (item) {
                      return item.BldgId == _this30.buldid;
                    });
                    console.log("filterfloor", _this30.filterfloor);

                    _this30.utilityService.getRoomSids(_this30.vistId, _this30.filterbuild[0].IndexId, _this30.filterfloor[0].IndexId).subscribe(function (res) {
                      if (res.dataStatus) {
                        _this30.filterRoom = res.result.filter(function (item) {
                          return item.BldgId == _this30.buldid;
                        });
                        console.log("filterRoom", _this30.filterRoom);
                      }
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "insertLocalBuilding",
          value: function insertLocalBuilding(result, build) {
            console.log("Result", result);
            var datainsert = "INSERT INTO SidsBulidVisitGet VALUES (?,?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, build, JSON.stringify(result)]).then(function (insertres) {
              if (insertres.insertId) {
                console.log("Local Inserted Building", insertres);
              }
            });
          }
        }, {
          key: "insertLocalFloor",
          value: function insertLocalFloor(result, build, buildIndexId) {
            console.log("Result", result);
            var datainsert = "INSERT INTO SidsFloorsVisitGet VALUES (?,?,?,?,?,?)";
            this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, build, JSON.stringify(result), buildIndexId]).then(function (insertres) {
              if (insertres.insertId) {
                console.log("Local Inserted Floor", insertres);
              }
            });
          } // insertLocalRoom(result, build){
          //   console.log("Result",result);
          //   const datainsert = "INSERT INTO SidsRoomsVisitGet VALUES (?,?,?,?,?)";
          //   this.sqliteDB.insert(datainsert, [null, this.schoolId, this.vistId, build, JSON.stringify(result)
          //   ]).then(insertres => {
          //     if(insertres.insertId){
          //       console.log("Local Inserted",insertres);
          //     }
          //   })
          // }

        }, {
          key: "getClosingQues",
          value: function getClosingQues(id, item, i) {
            if (id == 1) {
              var dataId = 100 + parseInt(item.value.Id);
              this.router.navigate(['/tabs/primary-building-closing-questions'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'buildingId': dataId,
                  'status': item.value.Status
                },
                skipLocationChange: false
              });
            }
          }
        }, {
          key: "getFloorClosingQues",
          value: function getFloorClosingQues(buildId, item, n, buildName) {
            var bdataId = 100 + parseInt(buildId);
            var fdataId = 1000 + parseInt(item.value.Id);
            this.router.navigate(['/tabs/primary-floor-closing-questions'], {
              queryParams: {
                'schoolId': this.schoolId,
                'vistId': this.vistId,
                'buildingId': bdataId,
                'floorId': fdataId,
                'status': item.value.Status,
                'buildName': buildName
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.closingBuildID = null;

            if (this.toastinstance) {
              this.toastinstance.dismiss();
            }
          }
        }, {
          key: "presentToastWithOptions",
          value: function presentToastWithOptions(buildId, buildName, id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var text;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    if (this.toastinstance) {
                      this.toastinstance.dismiss();
                    }

                    text = id == 1 ? 'B ' + buildId + ' ' + buildName + ' opened' : 'B ' + buildId + ' ' + buildName + ' closed';
                    _context4.n = 1;
                    return this.toastController.create({
                      header: text,
                      position: 'bottom',
                      cssClass: 'my-toast',
                      color: 'light',
                      duration: id == 1 ? null : 1000,
                      buttons: [{
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 1:
                    this.toastinstance = _context4.v;
                    this.toastinstance.present();

                  case 2:
                    return _context4.a(2);
                }
              }, _callee4, this);
            }));
          }
        }]);
      }();

      _PrimaryNewDashboardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_6__.IonicStorageService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_4__.SidsService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_9__.UserSessionService
        }];
      };

      _PrimaryNewDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-primary-new-dashboard',
        template: _raw_loader_primary_new_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_new_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimaryNewDashboardPage);
      /***/
    },

    /***/
    61828:
    /*!******************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-new-dashboard/primary-new-dashboard.page.scss ***!
      \******************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list .item.item-accordion {\n  line-height: 38px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: 0.09s all linear;\n}\n\n.list .item.item-accordion.ng-hide {\n  line-height: 0px;\n}\n\n.list .item.item-accordion.ng-hide-add,\n.list .item.item-accordion.ng-hide-remove {\n  display: block !important;\n}\n\n.row-line {\n  background-color: #a967c5;\n  margin-right: 5%;\n  color: white;\n}\n\n.row-line-local {\n  background-color: #70BBFF;\n  margin-right: 5%;\n  color: white;\n}\n\n.row-line-server {\n  background-color: #A27B5C;\n  margin-right: 5%;\n  color: white;\n}\n\n.row-add {\n  color: #8b67b3;\n  background-color: white;\n  border: #8B67B3;\n  border: 2px solid;\n  margin-top: 20px;\n}\n\n.expand-card {\n  background-color: #EFE1FF;\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-bottom: 6px;\n  padding-top: 20px;\n}\n\n.expand-row {\n  padding: 5px;\n  background-color: #abc5e1;\n  border-radius: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 3%;\n}\n\n.expand-label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #8B67B3;\n}\n\n.expand-label {\n  zoom: 2;\n  color: white;\n}\n\n.expand-question {\n  margin: 20px;\n  padding: 5px;\n  background-color: #FFF9E7;\n  border-radius: 10px;\n}\n\n.expand-question1 {\n  margin: 2;\n  padding: 2px;\n  background-color: #FFF9E7;\n  border-radius: 10px;\n}\n\n.headlabelAdd {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.headlabel {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n}\n\n.headlabelSub {\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n\n.room-card {\n  width: 20%;\n  background-color: #8B67B3;\n  margin-left: 20px;\n  padding: 4px;\n  color: white;\n}\n\n.sync {\n  font-size: 15px;\n  font-weight: 700;\n  color: #8B67B3;\n}\n\n.sync1 {\n  font-size: 15px;\n  font-weight: 700;\n  color: #839253;\n}\n\n.syncData {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0b380e;\n}\n\n.syncData1 {\n  font-size: 15px;\n  font-weight: 700;\n  color: #839253;\n}\n\n.iconexpd {\n  zoom: 2;\n  color: white;\n}\n\n.iconexpdadd {\n  zoom: 2;\n  color: #0a0909;\n}\n\n.room-card {\n  padding: 5%;\n  margin: 1%;\n  text-align: center;\n  color: white;\n  background-color: var(--ion-color-primary);\n}\n\n.room-addcard {\n  margin: 1%;\n  text-align: center;\n  color: #8b67b3;\n  background-color: white;\n  border: #8B67B3;\n  border: 2px solid #8b67b3;\n}\n\n.center-items {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.closebtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: white;\n  color: red;\n  --padding-start: 5px;\n  --padding-end: 5px;\n  height: 40px;\n  margin: 10px;\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktbmV3LWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBQUo7O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUNFOztFQUVFLHlCQUFBO0FBRUo7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFFRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0MsT0FBQTtFQUNBLFlBQUE7QUFDSDs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGRTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7RUFDRSxPQUFBO0VBQ0EsY0FBQTtBQU1KOztBQUpFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQU9KOztBQUpFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBT0o7O0FBSkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU9KOztBQUpFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxFO0VBQ0UsYUFBQTtBQVFKIiwiZmlsZSI6InByaW1hcnktbmV3LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4wOXMgYWxsIGxpbmVhcjtcclxuICB9XHJcbiAgLmxpc3QgLml0ZW0uaXRlbS1hY2NvcmRpb24ubmctaGlkZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gIH1cclxuICAubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbi5uZy1oaWRlLWFkZCxcclxuICAubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbi5uZy1oaWRlLXJlbW92ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnJvdy1saW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E5NjdjNTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucm93LWxpbmUtbG9jYWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBCQkZGO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5yb3ctbGluZS1zZXJ2ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTI3QjVDO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5yb3ctYWRke1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4YjY3YjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogIzhCNjdCMztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5leHBhbmQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFMUZGOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kLXJvdyB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJjNWUxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gIH1cclxuXHJcbiAgLmV4cGFuZC1sYWJlbCB7XHJcbiAgIHpvb206MjtcclxuICAgY29sb3I6IHdoaXRlOyBcclxuICB9XHJcblxyXG4gIC5leHBhbmQtcXVlc3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjlFNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kLXF1ZXN0aW9uMSB7XHJcbiAgICBtYXJnaW46IDI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkbGFiZWxBZGR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgfVxyXG5cclxuICAuaGVhZGxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICB9XHJcblxyXG4gIC5oZWFkbGFiZWxTdWIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICB9XHJcblxyXG4gIC5yb29tLWNhcmQge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4QjY3QjM7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICB9IFxyXG4gIC5zeW5jIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMCA7IFxyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbiAgfVxyXG4gIC5zeW5jMSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDo3MDAgOyBcclxuICAgIGNvbG9yOiAjODM5MjUzO1xyXG4gIH1cclxuICAuc3luY0RhdGEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwIDsgXHJcbiAgICBjb2xvcjogIzBiMzgwZTtcclxuICB9XHJcbiAgLnN5bmNEYXRhMSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDo3MDAgOyBcclxuICAgIGNvbG9yOiAjODM5MjUzO1xyXG4gIH1cclxuICAuaWNvbmV4cGR7XHJcbiAgICB6b29tOjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5pY29uZXhwZGFkZHtcclxuICAgIHpvb206MjtcclxuICAgIGNvbG9yOiByZ2IoMTAsIDksIDkpO1xyXG4gIH1cclxuICAucm9vbS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5yb29tLWFkZGNhcmQge1xyXG4gICAgbWFyZ2luOiAxJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjOGI2N2IzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6ICM4QjY3QjM7IFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzhiNjdiMztcclxuICB9XHJcblxyXG4gIC5jZW50ZXItaXRlbXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyIDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VidG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    7146:
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-building/primary-new-dashboard/primary-new-dashboard.page.html ***!
      \********************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"padding-left: 10px;\">Buildings Details ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-grid style=\"padding: 15px; background-color: #FFFFFF;\">\r\n    <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n      <div formArrayName=\"sids\">\r\n        <ion-row *ngFor=\"let i = index ; let item of form.get('sids')['controls'];\" [formGroupName]=\"i\"\r\n          style=\"background-color: aliceblue;margin-bottom: 10px\">\r\n\r\n          <ion-col size=\"12\" class=\"row-line\" *ngIf=\"!item.value.Condition && item.value.Status == 1\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-icon name=\"add-outline\" class=\"expand-label\" *ngIf=\"!item.value.Condition\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-local\" *ngIf=\"!item.value.Condition && item.value.Status == 2\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-icon name=\"add-outline\" class=\"expand-label\" *ngIf=\"!item.value.Condition\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}}</ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-server\" *ngIf=\"!item.value.Condition && item.value.Status == 3\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-icon name=\"add-outline\" class=\"expand-label\" *ngIf=\"!item.value.Condition\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col *ngIf=\"item.value.Status == 3\" size=\"4\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <!-- <ion-col size=\"2\" *ngIf=\"item.value.Status == 3\">\r\n                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n\r\n          <ion-col size=\"12\" class=\"row-line\" *ngIf=\"item.value.Condition && item.value.Status == 1\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-icon name=\"remove\" class=\"expand-label\" ></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-local\" *ngIf=\"item.value.Condition && item.value.Status == 2\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-icon name=\"remove\" class=\"expand-label\" ></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-server\" *ngIf=\"item.value.Condition && item.value.Status == 3\"\r\n            (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\">\r\n                <ion-icon name=\"remove\" class=\"expand-label\" ></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col *ngIf=\"item.value.Status == 3\" size=\"4\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <!-- <ion-col size=\"2\" *ngIf=\"item.value.Status == 2\">\r\n                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.Condition\">\r\n\r\n            <!-- Building genral question -->\r\n            <ion-row class=\"expand-question\" (click)=\"onBuilding(item.value.Id,item.value.Status)\">\r\n              <ion-col size=\"2\" style=\"text-align: center;\">\r\n                <div>\r\n                  <img src=\"assets/icons/Building.svg\" style=\"zoom: 1;\" />\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"8\">\r\n                <div>\r\n                  <ion-label class=\"sync\">Building general question</ion-label>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <div style=\"text-align: center;\">\r\n                  <img src=\"assets/icons/rightarrow.svg\" style=\"zoom: 1;\" />\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <!-- floor details -->\r\n            <form [formGroup]=\"formfloor\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n              <ion-row formArrayName=\"sidsfloor\">\r\n                <ion-col size=\"12\" style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%;\"\r\n                  *ngFor=\"let n = index ; let item1 of formfloor.get('sidsfloor')['controls'];\" [formGroupName]=\"n\">\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line\"\r\n                    *ngIf=\"item1.value.Status == 1 && item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item.value.Id,false,item.value.Id, item1.value.Id)\">\r\n                      <ion-icon name=\"remove\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item.value.Id,false,item.value.Id, item1.value.Id)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 1\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-local\"\r\n                    *ngIf=\"item1.value.Status == 2 && item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item.value.Id,false,item.value.Id, item1.value.Id)\">\r\n                      <ion-icon name=\"remove\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item.value.Id,false,item.value.Id, item1.value.Id)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 2\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-server\"\r\n                    *ngIf=\"item1.value.Status == 3 && item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"2\" (click)=\"expandfloor(i,n,item.value.Id,false,item.value.Id, item1.value.Id)\">\r\n                      <ion-icon name=\"remove\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\" (click)=\"expandfloor(i,n,item.value.Id,false,item.value.Id, item1.value.Id)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <!-- <ion-col size=\"4\" *ngIf=\"item1.value.Status == 3\">\r\n                     <img src=\"assets/icons/checkserver.svg\" style=\"zoom: 1;\" />\r\n                   </ion-col> -->\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line\"\r\n                    *ngIf=\"item1.value.Status == 1 && !item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item1.value.Id,true,item.value.Id, item1.value.Id)\">\r\n                      <ion-icon name=\"add-outline\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item1.value.Id,true,item.value.Id, item1.value.Id)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 1\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-local\"\r\n                    *ngIf=\"item1.value.Status == 2 && !item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item1.value.Id,true,item.value.Id, item1.value.Id)\">\r\n                      <ion-icon name=\"add-outline\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item1.value.Id,true,item.value.Id, item1.value.Id)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 2\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-server\"\r\n                    *ngIf=\"item1.value.Status == 3 && !item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"2\" (click)=\"expandfloor(i,n,item1.value.Id,true,item.value.Id, item1.value.Id)\">\r\n                      <ion-icon name=\"add-outline\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\" (click)=\"expandfloor(i,n,item1.value.Id,true,item.value.Id, item1.value.Id)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <!-- <ion-col size=\"3\" *ngIf=\"item1.value.Status == 3\">\r\n                      <img src=\"assets/icons/checkserver.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col> -->\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- Floor genral question -->\r\n                  <ion-row (click)=\"onFloor(item.value.Id,item1.value.Id,item1.value.Status, item.value.BuildName)\" class=\"expand-question\"\r\n                    *ngIf=\"item1.value.Condition\">\r\n                    <ion-col size=\"2\" style=\"text-align: center;\">\r\n                      <div>\r\n                        <img src=\"assets/icons/Building.svg\" style=\"zoom: 1;\" />\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <div>\r\n                        <ion-label class=\"sync\">Floor general question</ion-label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                      <div style=\"text-align: center;\">\r\n                        <img src=\"assets/icons/rightarrow.svg\" style=\"zoom: 1;\" />\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row *ngIf=\"item1.value.Condition\">\r\n                    <ion-col size=\"12\">\r\n                      <!-- room details -->\r\n                      <form [formGroup]=\"formroom\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n                        <ion-row formArrayName=\"sidsroom\">\r\n                          <ion-col size=\"12\"\r\n                            style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%;\"\r\n                            *ngFor=\"let m = index ; let item2 of formroom.get('sidsroom')['controls'];\"\r\n                            [formGroupName]=\"m\">\r\n\r\n                            <ion-row class=\"center-items row-line\" *ngIf=\"item2.value.Status == 1 && (item.value.Id == item2.value.BuildIndx) && (item1.value.Id == item2.value.FloorIndx)\">\r\n                              <ion-col size=\"7\"\r\n                                (click)=\"onRoom(item.value.Id,item1.value.Id,item2.value.Id,item2.value.Status, item.value.BuildName)\">\r\n                                <ion-label class=\"headlabel\">{{item2.value.RoomName}} Name</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"2.5\" *ngIf=\"item2.value.Status == 1\"\r\n                                (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\">\r\n                                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <ion-col size=\"2.5\" *ngIf=\"item2.value.Status == 2\"\r\n                              (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\" >\r\n                               <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1; float: right;\" />\r\n                              </ion-col>\r\n                              <!-- <ion-col size=\"2\" *ngIf=\"item2.value.Status == 3\">\r\n                                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col> -->\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status != 3\" (click)=\"onDeleteRoom(item.value.Id,item1.value.Id,item2.value.Id)\">\r\n                                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <ion-row class=\"center-items row-line-local\" *ngIf=\"item2.value.Status == 2 && (item.value.Id == item2.value.BuildIndx) && (item1.value.Id == item2.value.FloorIndx)\">\r\n                              <ion-col size=\"7\"\r\n                              (click)=\"onRoom(item.value.Id,item1.value.Id,item2.value.Id,item2.value.Status, item.value.BuildName)\">\r\n                              <ion-label class=\"headlabel\">{{item2.value.RoomName}}</ion-label>\r\n                            </ion-col>\r\n\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status == 1\"\r\n                                (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\">\r\n                                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <ion-col size=\"3.5\" *ngIf=\"item2.value.Status == 2\"\r\n                              (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\" >\r\n                               <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1; float: left;\" />\r\n                              </ion-col>\r\n                              <!-- <ion-col size=\"2\" *ngIf=\"item2.value.Status == 3\">\r\n                                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col> -->\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status != 3\" (click)=\"onDeleteRoom(item.value.Id,item1.value.Id,item2.value.Id)\">\r\n                                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <ion-row class=\"center-items row-line-server\" *ngIf=\"item2.value.Status == 3 && (item.value.Id == item2.value.BuildIndx) && (item1.value.Id == item2.value.FloorIndx)\">\r\n                              <ion-col size=\"7\"\r\n                                (click)=\"onRoom(item.value.Id,item1.value.Id,item2.value.Id,item2.value.Status, item.value.BuildName)\">\r\n                                <ion-label class=\"headlabel\">{{item2.value.RoomName}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"2.5\" *ngIf=\"item2.value.Status == 1\"\r\n                                (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\">\r\n                                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status == 2\"\r\n                              (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\" >\r\n                               <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <!-- <ion-col size=\"2\" *ngIf=\"item2.value.Status == 3\">\r\n                                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col> -->\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status == 3\" (click)=\"onDeleteRoom(item.value.Id,item1.value.Id,item2.value.Id)\">\r\n                                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </form>\r\n\r\n                      <!-- <ion-row style=\"margin-bottom: 5%;margin-left: 5%;border-radius: 3%;\" class=\"row-line\"\r\n                        *ngFor=\"let item2 of dataListRoom;\">\r\n                        <ion-col size=\"8\"\r\n                          *ngIf=\"(item.value.Id == item2.BuildIndx) && (item1.value.Id == item2.FloorIndx)\"\r\n                          (click)=\"onRoom(item.value.Id,item1.value.Id,item2.Id)\">\r\n                          <ion-label class=\"headlabel\"> Room {{item2.Id}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" *ngIf=\"roomStatus == 1\"\r\n                          (click)=\"onRoom(item.value.Id,item1.value.Id,item2.Id)\">\r\n                          <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" *ngIf=\"roomStatus == 2\"\r\n                          (click)=\"onRoom(item.value.Id,item1.value.Id,item2.Id)\">\r\n                          <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" *ngIf=\"roomStatus == 3\">\r\n                          <img src=\"assets/icons/checkserver.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" *ngIf=\"roomStatus != 3\">\r\n                          <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                      </ion-row> -->\r\n\r\n                    </ion-col>\r\n\r\n                    <ion-col *ngIf=\"item1.value.FloorName == 'Terrace' || item1.value.FloorCondi == '2' || item1.value.FloorCondi == '3'\" disabled=\"true\" size=\"11\" class=\"row-add\" style=\"opacity: 0.5;\">\r\n                      <div style=\"padding: 4px;margin-left: 10px;\">\r\n                        <ion-label class=\"headlabelAdd\">Add Room </ion-label>\r\n                      </div>\r\n                    </ion-col>\r\n\r\n                    <ion-col *ngIf=\"item1.value.FloorName != 'Terrace' && item1.value.FloorCondi != '2' && item1.value.FloorCondi != '3'\" size=\"11\" class=\"row-add\" (click)=\"getdashboardRoomData(item.value.Id,item1.value.Id,0, i, n)\">\r\n                      <div style=\"padding: 4px;margin-left: 10px;\">\r\n                        <ion-label class=\"headlabelAdd\">Add Room </ion-label>\r\n                      </div>\r\n                    </ion-col>\r\n\r\n                    <ion-row *ngIf=\"(item1.value.Status == 2 || item1.value.Status == 3) && (item1.value.FloorCondi == 1 || item1.value.FloorCondi == 4) && item1.value.RoomCondition == 1\"\r\n                      [ngClass]=\"(item1.value.FloorClose == 1) ? 'row-line' : (item1.value.FloorClose == 2) ? 'row-line-local' : 'row-line-server'\"  \r\n                      style=\"width: 93%; margin: 15px 0px; padding: 5px;\" (click)=\"getFloorClosingQues(item.value.Id, item1, n, item.value.BuildName)\">\r\n                    <ion-col size=\"1\" class=\"center-items\">\r\n                      <div>\r\n                        <ion-icon name=\"business-outline\" size=\"small\" ></ion-icon>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\" class=\"center-items\" style=\"padding: 5px;\">\r\n                      <ion-row class=\"headlabelSub\">Floor Closing Questions</ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\" class=\"center-items\">\r\n                      <ion-icon size=\"large\" name=\"chevron-forward-outline\"></ion-icon>\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n            </form>\r\n\r\n            <ion-row *ngIf=\"item.value.BuildCondi == '2' || item.value.BuildCondi == '3'\" class=\"row-add\" style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%; opacity: 0.5;\">\r\n              <ion-col size=\"1\">\r\n                <div style=\"margin-left: 5px;margin-top: 2px;\">\r\n                  <ion-icon name=\"add-outline\" class=\"iconexpdadd\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"11\" >\r\n                <div style=\"padding: 4px;margin-left: 10px;\">\r\n                  <ion-label class=\"headlabelAdd\"> Add Floor</ion-label>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"item.value.BuildCondi != '2' && item.value.BuildCondi != '3'\" class=\"row-add\" style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%;\">\r\n              <ion-col size=\"1\">\r\n                <div style=\"margin-left: 5px;margin-top: 2px;\">\r\n                  <ion-icon name=\"add-outline\" class=\"iconexpdadd\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"11\" (click)=\"getdashboardFloorData(item.value.Id,2, i)\">\r\n                <div style=\"padding: 4px;margin-left: 10px;\">\r\n                  <ion-label class=\"headlabelAdd\"> Add Floor</ion-label>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"(item.value.Status == 2 || item.value.Status == 3) && (item.value.BuildCondi == 1 || item.value.BuildCondi == 4) && item.value.FloorCondition == 1\"\r\n            [ngClass]=\"(item.value.ClosingQuestions == 1) ? 'row-line' : (item.value.ClosingQuestions == 2) ? 'row-line-local' : 'row-line-server'\"  \r\n            style=\"width: 93%; margin: 15px; padding: 5px;\" (click)=\"getClosingQues(1, item, i)\">\r\n              <ion-col size=\"1\" class=\"center-items\">\r\n                <div>\r\n                  <ion-icon name=\"business-outline\" size=\"small\" ></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"8\" class=\"center-items\" style=\"padding: 5px;\">\r\n                <ion-row class=\"headlabelSub\">Building Closing Questions</ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"center-items\">\r\n                <ion-icon size=\"large\" name=\"chevron-forward-outline\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"row-add\" (click)=\"addBuildingData()\">\r\n          <ion-col size=\"1\">\r\n            <div style=\"margin-left: 5px; margin-top: 2px;\">\r\n              <ion-icon name=\"add-outline\" class=\"iconexpdadd\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <div style=\"padding: 4px;margin-left: 10px;\">\r\n              <ion-label class=\"headlabelAdd\">Add Building </ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n \r\n\r\n<!-- <ion-footer>\r\n  <ion-row style=\"text-align: center;padding: 10px;background-color: aliceblue;\">\r\n    <ion-col size=\"6\" style=\"text-align: end;margin-bottom: 5%;\">\r\n      <ion-label>Data Saved in Local</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\" style=\"margin-bottom: 5%;\">\r\n      <img src=\"assets/icons/check.svg\" class=\"floImg\">\r\n    </ion-col>\r\n   <ion-col size=\"6\" style=\"text-align: end;\">\r\n      <ion-label>Data Saved in Server</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <img src=\"assets/icons/checkserver.svg\" class=\"floImg\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-footer> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-building_primary-new-dashboard_primary-new-dashboar-78e4ad-es5.js.map