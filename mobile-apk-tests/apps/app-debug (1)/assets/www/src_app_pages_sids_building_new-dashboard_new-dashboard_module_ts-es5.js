(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_building_new-dashboard_new-dashboard_module_ts"], {
    /***/
    23823:
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-dashboard/new-dashboard-routing.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewDashboardPageRoutingModule": function NewDashboardPageRoutingModule() {
          return (
            /* binding */
            _NewDashboardPageRoutingModule
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


      var _new_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-dashboard.page */
      26314);

      var routes = [{
        path: '',
        component: _new_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.NewDashboardPage
      }];

      var _NewDashboardPageRoutingModule = /*#__PURE__*/_createClass(function NewDashboardPageRoutingModule() {
        _classCallCheck(this, NewDashboardPageRoutingModule);
      });

      _NewDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewDashboardPageRoutingModule);
      /***/
    },

    /***/
    79693:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-dashboard/new-dashboard.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewDashboardPageModule": function NewDashboardPageModule() {
          return (
            /* binding */
            _NewDashboardPageModule
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


      var _new_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-dashboard-routing.module */
      23823);
      /* harmony import */


      var _new_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-dashboard.page */
      26314);

      var _NewDashboardPageModule = /*#__PURE__*/_createClass(function NewDashboardPageModule() {
        _classCallCheck(this, NewDashboardPageModule);
      });

      _NewDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _new_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewDashboardPageRoutingModule],
        declarations: [_new_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.NewDashboardPage]
      })], _NewDashboardPageModule);
      /***/
    },

    /***/
    26314:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-dashboard/new-dashboard.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewDashboardPage": function NewDashboardPage() {
          return (
            /* binding */
            _NewDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_new_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./new-dashboard.page.html */
      59088);
      /* harmony import */


      var _new_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-dashboard.page.scss */
      58564);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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

      var _NewDashboardPage = /*#__PURE__*/function () {
        function NewDashboardPage(router, formBuilder, route, utilityService, sidsService, sqliteDB, alertController, toastController, alertService, userSessionService) {
          _classCallCheck(this, NewDashboardPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.route = route;
          this.utilityService = utilityService;
          this.sidsService = sidsService;
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
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US');
          this.deleteRoom = true;
          this.BldgCondi = "";
          this.isToastOpen = true;
        }

        return _createClass(NewDashboardPage, [{
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
            this.getRoomLocalData(this.expBuildId, this.expIdFloor);
          }
        }, {
          key: "colorvalidation",
          value: function colorvalidation() {
            this.expandbuilding(0, true, 1);
            this.expandfloor(0, 0, 1, true);
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
            } // this.checkFloorSavedata(+i+1)


            this.deleteRoom = true;
            this.checkFloorSavedata(idBuild);
            this.expandIcon = !this.expandIcon;
            this.form.controls['sids']['controls'][i].controls['Condition'].setValue(value);
            this.form.controls['sids']['controls'][i].controls['Condition'].updateValueAndValidity();
            this.getbuilding(idBuild);
            this.closingBuildID = +this.form.value.sids[i].Status == 2 || +this.form.value.sids[i].Status == 3 ? this.form.value.sids[i].Id : '';

            if (value) {
              this.presentToastWithOptions(i + 1, this.form.value.sids[i].BuildName, 1);
            } else {
              this.toastinstance.dismiss();
              this.presentToastWithOptions(i + 1, this.form.value.sids[i].BuildName, 2);
            }
          }
        }, {
          key: "expandfloor",
          value: function expandfloor(i, n, value, item) {
            this.expbuild = i;
            this.expfloor = n;
            this.exproom = value; // this.floorid = 1000 + parseInt(n+1);

            console.log("ExpandFloor", i, n, value, item);
            console.log("formfloor - controls", this.formfloor);

            for (var id = 0; id < this.formfloor.value.sidsfloor.length; id++) {
              this.formfloor.controls['sidsfloor']['controls'][id].controls['Condition'].setValue(false);
              this.formfloor.controls['sidsfloor']['controls'][id].controls['Condition'].updateValueAndValidity();
            } // this.getRoomLocalData(+i + 1, value)


            this.getRoomLocalData(this.formfloor.value.sidsfloor[n].BuildIndx ? this.formfloor.value.sidsfloor[n].BuildIndx : i + 1, value);
            this.expandfloorIcon = !this.expandfloorIcon;
            this.formfloor.controls['sidsfloor']['controls'][n].controls['Condition'].setValue(item);
            this.formfloor.controls['sidsfloor']['controls'][n].controls['Condition'].updateValueAndValidity();
            console.log("filter", this.filterbuild);

            if (this.filterbuild.length != 0) {
              // this.getfloor(i + 1, this.filterbuild[0].IndexId)
              this.getfloor(this.formfloor.value.sidsfloor[n].BuildIndx ? this.formfloor.value.sidsfloor[n].BuildIndx : i + 1, this.filterbuild[0].IndexId);
            }
          }
        }, {
          key: "checkBuildSavedata",
          value: function checkBuildSavedata() {
            var _this = this;

            var query = 'SELECT * FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And VistId = "' + this.vistId + '"';
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
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
                          _this2.onDelete(id);
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

            var query = 'DELETE FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM sidsBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
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
            var _this4 = this;

            // this.isDisabled = false 
            debugger;
            var dataId = 100 + parseInt(id);
            var dataId1 = 1000 + parseInt(floor);
            console.log(this.schoolId, this.vistId, dataId);
            var query = 'DELETE FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorId = "' + dataId1 + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM sidsFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And FloorId = "' + dataId1 + '"' + ' And VistId = "' + this.vistId + '"';
            var empty = 0;
            var query3 = 'UPDATE sidsBuildSavesDatas SET FloorCondition = ' + empty + ' WHERE sidsBuildSavesDatas.SclId = "' + this.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + id + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this4.sqliteDB.getDataLocalDB(query2).then(function (data) {
                if (data.rowsAffected > 0) {
                  _this4.alertService.error('Floor Deleted Successfully'); // this.ionViewDidEnter()


                  _this4.floorInsideRoom(id, floor);

                  return _this4.sqliteDB.getDataLocalDB(query3).then(function (data) {});
                }

                if (data.rowsAffected == 0) {
                  // this.ionViewDidEnter()
                  _this4.floorInsideRoom(id, floor);

                  _this4.alertService.error('Floor Deleted Successfully');

                  return _this4.sqliteDB.getDataLocalDB(query3).then(function (data) {});
                }
              });
            });
          }
        }, {
          key: "onDeleteRoom",
          value: function onDeleteRoom(id, floor, room) {
            var _this5 = this;

            // this.isDisabled = false 
            debugger;
            var dataIdB = 100 + parseInt(id);
            var dataIdF = 1000 + parseInt(id);
            var dataIdR = 10000 + parseInt(room);
            var query = 'DELETE FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + dataIdR + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM newRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + dataIdB + '"' + ' And FloorId = "' + dataIdF + '"' + ' And RoomId = "' + dataIdR + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this5.sqliteDB.getDataLocalDB(query2).then(function (data) {
                console.log("DeletEROMM", query, query2, data);

                if (data.rowsAffected > 0) {
                  _this5.alertService.error('Room Deleted Successfully'); // this.ionViewDidEnter()


                  _this5.checkFloorSavedata(_this5.expBuildId = id);

                  _this5.deleteRoom = true;
                }

                if (data.rowsAffected == 0) {
                  // this.ionViewDidEnter()
                  _this5.deleteRoom = true;

                  _this5.checkFloorSavedata(_this5.expBuildId = id);

                  _this5.alertService.error('Room Deleted Successfully');
                }
              });
            });
          }
        }, {
          key: "getBuildAddData",
          value: function getBuildAddData(id) {
            var _this6 = this;

            if (id == 2) {
              id = this.dataListBuilding.length + 1;
            }

            var dataId = 100 + parseInt(id);
            this.BldgCondi = "";
            var query = 'SELECT * FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                var insertRows = [];
                insertRows.push(["INSERT INTO sidsBuildSavesDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [null, id, _this6.schoolId, _this6.vistId, "", dataId, "1", "false", "Building Name", "", "1", ""]]);

                _this6.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("Dashboard Building SIDS Details Stored Locally");
                });

                _this6.checkBuildSavedata();
              } else {
                var dataListBuilding = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListBuilding.push(data.rows.item(i));
                }

                _this6.addQuesnBuildingDetails(dataListBuilding);
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
                Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].Id),
                SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].SclId),
                VistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].VistId, null),
                BuildIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].BuildIndx, null),
                BuildingId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].BuildingId, null),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].Status, null),
                Condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false, null),
                BuildName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].BuildName, null),
                BuildCondi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].BuildCondi, null),
                ClosingQuestions: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].ClosingQuestions, null),
                FloorCondition: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i].FloorCondition, null)
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
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Condition'].updateValueAndValidity();
              this.form.controls['sids']['controls'][this.expIdBuild].controls['Status'].setValue(3);
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
                  this.presentToastWithOptions(this.expBuildId, this.form.value.sids[k].BuildName, 1);
                }
              }
            }
          }
        }, {
          key: "checkFloorSavedata",
          value: function checkFloorSavedata(bulId) {
            var _this7 = this;

            var query = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + // ' And FloorId = "' + dataId + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                console.log("Local 0", bulId);

                _this7.getdashboardFloorData(bulId, 1);
              } else {
                console.log("Local 1", bulId);

                _this7.getFloorLocalData(bulId);
              }
            });
          }
        }, {
          key: "getdashboardFloorData",
          value: function getdashboardFloorData(bulId, id) {
            var _this8 = this;

            var query = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (floor) {
              if (floor.rows.length == 0) {
                console.log("sidsFloorSaveDatas Length == 0");
                var buildId = 100 + parseInt(bulId);

                var _query = 'SELECT * FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + _this8.schoolId + '"' + ' And BuildingId = "' + buildId + '"' + ' And VistId = "' + _this8.vistId + '"';

                return _this8.sqliteDB.getDataLocalDB(_query).then(function (data) {
                  var buildSaveData = [];

                  for (var i = 0; i < data.rows.length; i++) {
                    buildSaveData.push(data.rows.item(i));
                  }

                  console.log("SaveData", buildSaveData);

                  if (+buildSaveData[0].BuildCondi == 2 || +buildSaveData[0].BuildCondi == 3 || +buildSaveData[0].BuildCondi == 5) {} else {
                    _this8.getdashboardAddFloorData(bulId, id);
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
                var sidsFloorSaveDatas = sidsFloor.filter(function (dd) {
                  return +dd.Status == 1;
                });

                if (sidsFloorSaveDatas.length > 0) {
                  _this8.alertService.error("Please fill details for the previous floor");
                } else {
                  if (sidsFloor[floorLength].FloorName == "Terrace" || +sidsFloor[floorLength].FloorCondi == 2 || +sidsFloor[floorLength].FloorCondi == 3) {
                    _this8.deleteRoom = true;

                    _this8.getdashboardAddFloorData(bulId, id);
                  } else {
                    var dataFloor = parseInt(sidsFloor[floorLength].FloorId) - 1000;
                    console.log("dataFloor", dataFloor);

                    var _query2 = 'SELECT * FROM sidsRoomSaves' + ' WHERE SclId = "' + _this8.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + dataFloor + '"' + ' And VistId = "' + _this8.vistId + '"';

                    return _this8.sqliteDB.getDataLocalDB(_query2).then(function (data) {
                      if (data.rows.length == 0) {
                        _this8.alertService.error("Please add room for the previous floor");
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

                        var _sidsFloorSaveDatas = dataListFloor.filter(function (dd) {
                          return +dd.Status == 1;
                        });

                        var sidsFloorClose = dataListFloor.filter(function (dd) {
                          return +dd.FloorClose == 1;
                        });

                        if (_sidsFloorSaveDatas.length > 0) {
                          _this8.alertService.error("Please fill details for the previous Room");
                        } else {
                          if (sidsFloorClose.length > 0) {
                            _this8.alertService.error("Please fill details floor Closing questions");
                          } else {
                            _this8.deleteRoom = true;

                            _this8.getdashboardAddFloorData(bulId, id);
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
          value: function getdashboardAddFloorData(bulId, id) {
            var _this9 = this;

            var datafilter = this.dataListFloor.filter(function (item) {
              return item.BuildIndx == bulId;
            });

            if (id == 2) {
              id = datafilter.length + 1;
            }

            datafilter.forEach(function (dd) {
              if (+dd.Id == +id) {
                id = +id + 1;
                _this9.expFloorId += 1;
              }
            });
            console.log("id", id);
            var dataId = 1000 + parseInt(id);
            var query = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                _this9.floorIdAdd = id;
                var insertRows = [];
                insertRows.push(["INSERT INTO sidsFloorSaveDatas VALUES (?,?,?,?,?,?,?,?,?,?,?,?)", [null, id, _this9.schoolId, _this9.vistId, bulId, "", dataId, "1", "Floor Name", "", "1", "true"]]);

                _this9.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("Dashboard Floor SIDS Details Stored Locally");
                });

                _this9.checkFloorSavedata(bulId);
              } else {
                _this9.getFloorLocalData(bulId);
              }
            });
          }
        }, {
          key: "getFloorLocalData",
          value: function getFloorLocalData(bulId) {
            var _this0 = this;

            var query = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + // ' And FloorId = "' + dataId + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {} else {
                _this0.dataListFloor = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this0.dataListFloor.push(data.rows.item(i));
                }

                console.log("datalistFlooooooooooooooooor", _this0.dataListFloor);
                console.log("flooooooooooor", _this0.expFloorId, _this0.expIdBuild, _this0.deleteRoom);

                _this0.addFloorQuestionDetail(_this0.dataListFloor);

                if (_this0.expFloorId && _this0.expIdBuild && !_this0.deleteRoom) {
                  // Abdullah 
                  _this0.expandfloor(_this0.expIdBuild, _this0.expFloorId, _this0.expIdFloor, true);
                }

                _this0.deleteRoom = false;
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
                Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].Id),
                SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].SclId),
                VistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].VistId, null),
                BuildIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].BuildIndx, null),
                FloorIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].FloorIndx, null),
                FloorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].FloorId, null),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].Status, null),
                Condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false, null),
                FloorName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].FloorName, null),
                FloorCondi: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].FloorCondi, null),
                FloorClose: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].FloorClose, null),
                RoomCondition: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i2].RoomCondition, null)
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
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].updateValueAndValidity();
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Status'].setValue(3);
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
                Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].Id),
                SclId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].SclId),
                VistId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].VistId, null),
                BuildIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].BuildIndx, null),
                FloorIndx: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].FloorIndx, null),
                RoomId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].RoomId, null),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].Status, null),
                Condition: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(false, null),
                RoomName: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(data[_i3].RoomName, null)
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
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].setValue(true);
              this.formfloor.controls['sidsfloor']['controls'][this.expFloorId].controls['Condition'].updateValueAndValidity();
              console.log(this.expFloorId, "roomid 3");
              this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].setValue(3);
              this.formroom.controls['sidsroom']['controls'][this.expRoomId].controls['Status'].updateValueAndValidity();
            }
          }
        }, {
          key: "getdashboardRoomData",
          value: function getdashboardRoomData(bulId, floor, id) {
            var _this1 = this;

            var query = 'SELECT * FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                _this1.getdashboardAddRoomData(bulId, floor, id);
              } else {
                var dataListFloor = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataListFloor.push(data.rows.item(i));
                }

                console.log("EEEEEEEEEEE", dataListFloor);
                var sidsFloorSaveDatas = dataListFloor.filter(function (dd) {
                  return +dd.Status == 1;
                });

                if (sidsFloorSaveDatas.length > 0) {
                  _this1.alertService.error("Please fill details for the previous room");
                } else {
                  _this1.getdashboardAddRoomData(bulId, floor, id);
                }
              }
            });
          }
        }, {
          key: "getdashboardAddRoomData",
          value: function getdashboardAddRoomData(bulId, floor, id) {
            var _this10 = this;

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
                id = +_this10.lastRoomId + 1;
                _this10.expIdRoom += 1;
              } else {
                id = +_this10.lastRoomId + 1;
              }
            });
            this.lastRoomId = id; // bulId = 100 + parseInt(bulId)
            // floor = 1000 + parseInt(floor)

            var dataId = 10000 + parseInt(id);
            var query = 'SELECT * FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                var insertRows = [];
                insertRows.push(["INSERT INTO sidsRoomSaves VALUES (?,?,?,?,?,?,?,?,?)", [null, id, _this10.schoolId, _this10.vistId, bulId, floor, dataId, "1", "Room"]]);

                _this10.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("Dashboard Room SIDS Details Stored Locally");
                });

                _this10.checkRoomSavedata(bulId, floor, dataId);
              } else {
                _this10.getRoomLocalData(bulId, floor);
              }
            });
          }
        }, {
          key: "checkRoomSavedata",
          value: function checkRoomSavedata(bulId, floor, dataId) {
            var _this11 = this;

            var query = 'SELECT * FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And RoomId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                _this11.getRoomLocalData(bulId, 1);
              } else {
                _this11.getRoomLocalData(bulId, floor);
              }
            });
          }
        }, {
          key: "getRoomLocalData",
          value: function getRoomLocalData(bulId, floor) {
            var _this12 = this;

            console.log(bulId, floor);
            var dataId = 1000 + parseInt(floor);
            var query = 'SELECT * FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And FloorIndx = "' + floor + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                console.log("getRoomLocalData");

                _this12.formroom.reset();

                var _query3 = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + _this12.schoolId + '"' + ' And BuildIndx = "' + bulId + '"' + ' And VistId = "' + _this12.vistId + '"';

                return _this12.sqliteDB.getDataLocalDB(_query3).then(function (data) {
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
                        _this12.getdashboardAddRoomData(bulId, floor, 0);
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

                          if (filterstatus2FloorCondi.length > 0) {} else {
                            var filterTerrace = filterFloorSavedData.filter(function (dd) {
                              return dd.FloorName != "Terrace";
                            });

                            if (filterTerrace.length > 0) {
                              _this12.getdashboardAddRoomData(bulId, floor, 0);
                            }
                          }
                        } // else{
                        //   this.getdashboardAddRoomData(bulId,floor,0);
                        // }

                      }
                    }
                  }
                });
              } else {
                _this12.dataListRoom = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this12.dataListRoom.push(data.rows.item(i));
                }

                _this12.addRoomQuestionDetail(_this12.dataListRoom);

                _this12.roomStatus = _this12.dataListRoom[0].Status;
                console.log(_this12.dataListRoom, _this12.roomStatus, "this.roomStatus");

                for (var j = 0; j < _this12.dataListRoom.length; j++) {
                  _this12.lastRoomId = _this12.dataListRoom[j].Id;
                }
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            // this.router.navigate(['/tabs/home-sids'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId }, skipLocationChange: false });
            this.router.navigate(['/tabs/sids-common-dashboard'], {
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

            this.router.navigate(['/tabs/new-buildingquestions'], {
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

            this.router.navigate(['/tabs/new-floorquestions'], {
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
            this.router.navigate(['/tabs/newroom-general-question'], {
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
            var _this13 = this;

            // this.getbuilding(id)
            this.buldid = 100 + parseInt(id);
            var query = 'SELECT * FROM sidsBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buldid + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (datas) {
              if (datas.rows.length == 0) {
                console.log("nodata", _this13.buldid);

                _this13.alertService.error('Please Fill Building Question');
              } else {
                _this13.dataListBuildingSave = [];

                for (var i = 0; i < datas.rows.length; i++) {
                  _this13.dataListBuildingSave.push(datas.rows.item(i));
                }

                console.log("dataListBuildingSave", _this13.dataListBuildingSave);

                if (+item.value.BuildCondi == 1 || +item.value.BuildCondi == 4) {
                  if (+item.value.ClosingQuestions == 1) {
                    // let dataId = 100 + parseInt(id);
                    // this.router.navigate(['/tabs/building-closing-questions'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'buildingId': dataId,'status': item.value.Status }, skipLocationChange: false });
                    _this13.alertService.error("Enter the Building Closing Questions");
                  } else {
                    _this13.onSaveBuilding(id);
                  }
                } else {
                  _this13.onSaveBuilding(id);
                }
              }
            });
          }
        }, {
          key: "onSaveBuilding",
          value: function onSaveBuilding(id) {
            var _this14 = this;

            var dataImage1 = this.dataListBuildingSave[0].BldgFrontPhoto.split(','); // let dataImage2 = this.dataListBuildingSave[0].BldgBackPhoto.split(',')
            // let dataImage3 = this.dataListBuildingSave[0].BldgRightSidePhoto.split(',')
            // let dataImage4 = this.dataListBuildingSave[0].BldgLeftSidePhoto.split(',')

            this.buldid = 100 + parseInt(id); // for (let i = 0; i < data.length; i++) {

            var data = {
              "records": {
                "IndexId": "",
                "SchlId": this.schoolId,
                "VistId": this.vistId,
                "BldgId": this.buldid,
                "BldgName": this.dataListBuildingSave[0].BldgName,
                "BldgFundSourceCons": this.dataListBuildingSave[0].BldgFundSourceCons,
                "BldgFundSourceConsOthers": this.dataListBuildingSave[0].BldgFundSourceConsOthers,
                "BldgType": this.dataListBuildingSave[0].BldgType,
                "BldgLength": this.dataListBuildingSave[0].BldgLength,
                "BldgBre": this.dataListBuildingSave[0].BldgBre,
                "BldgCondition": this.dataListBuildingSave[0].BldgCondition,
                "ElectricityAvai": this.dataListBuildingSave[0].ElectricityAvai,
                "BldgRepair": this.dataListBuildingSave[0].BldgRepair,
                "BldgYrConst": this.dataListBuildingSave[0].BldgYrConst,
                "BldgConstAgency": this.dataListBuildingSave[0].BldgConstAgency,
                "BldgConstOthers": this.dataListBuildingSave[0].BldgConstOthers,
                "BldgFrontPhoto": dataImage1[1],
                "BldgFrontPhotoName": this.dataListBuildingSave[0].BldgFrontPhotoName,
                "BldgExterior": this.dataListBuildingSave[0].BldgExterior,
                "BldgInterior": this.dataListBuildingSave[0].BldgInterior,
                "RainWaterFacilityYn": this.dataListBuildingSave[0].RainWaterFacilityYn == "false" ? 2 : this.dataListBuildingSave[0].RainWaterFacilityYn == "true" ? 1 : this.dataListBuildingSave[0].RainWaterFacilityYn,
                // "BldgBackPhoto": dataImage2[1],
                // "BldgBackPhotoName": this.dataListBuildingSave[0].BldgBackPhotoName,
                // "BldgRightSidePhoto": dataImage3[1],
                // "BldgRightSidePhotoName": this.dataListBuildingSave[0].BldgRightSidePhotoName,
                // "BldgLeftSidePhoto": dataImage4[1],
                // "BldgLeftSidePhotoName": this.dataListBuildingSave[0].BldgLeftSidePhotoName,
                "LATITUDE": this.dataListBuildingSave[0].LATITUDE,
                "LOGITUDE": this.dataListBuildingSave[0].LOGITUDE,
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
                "AudiStageStatus": this.dataListBuildingSave[0].AudiStageStatus,
                "AuditoriumLights": this.dataListBuildingSave[0].AuditoriumLights,
                "AuditoriumFans": this.dataListBuildingSave[0].AuditoriumFans,
                "AuditoriumPrjtYn": this.dataListBuildingSave[0].AuditoriumPrjtYn == "false" ? 2 : this.dataListBuildingSave[0].AuditoriumPrjtYn == "true" ? 1 : this.dataListBuildingSave[0].AuditoriumPrjtYn,
                "RampAvailYn": this.dataListBuildingSave[0].RampAvailYn,
                "RampRepairYn": this.dataListBuildingSave[0].RampRepairYn == "false" ? 2 : this.dataListBuildingSave[0].RampRepairYn == "true" ? 1 : this.dataListBuildingSave[0].RampRepairYn,
                "RampHandrailYn": this.dataListBuildingSave[0].RampHandrailYn == "false" ? 2 : this.dataListBuildingSave[0].RampHandrailYn == "true" ? 1 : this.dataListBuildingSave[0].RampHandrailYn,
                "FireExtYn": this.dataListBuildingSave[0].FireExtYn == "false" ? 2 : this.dataListBuildingSave[0].FireExtYn == "true" ? 1 : this.dataListBuildingSave[0].FireExtYn,
                "BuildReapairComArea": this.dataListBuildingSave[0].BuildReapairComArea == "false" ? 2 : this.dataListBuildingSave[0].BuildReapairComArea == "true" ? 1 : this.dataListBuildingSave[0].BuildReapairComArea,
                "AreaWeatheringReq": this.dataListBuildingSave[0].AreaWeatheringReq == "false" ? 2 : this.dataListBuildingSave[0].AreaWeatheringReq == "true" ? 1 : this.dataListBuildingSave[0].AreaWeatheringReq,
                "AreaPressedTiles": this.dataListBuildingSave[0].AreaPressedTiles == "false" ? 2 : this.dataListBuildingSave[0].AreaPressedTiles == "true" ? 1 : this.dataListBuildingSave[0].AreaPressedTiles // "BldgAge": this.dataListBuildingSave[0].BldgAge,
                // "FirstAidKitYn": this.dataListBuildingSave[0].FirstAidKit == "false" ? 2 : this.dataListBuildingSave[0].FirstAidKit == "true" ? 1 : this.dataListBuildingSave[0].FirstAidKit,
                // "CCTVCameraYn": this.dataListBuildingSave[0].CCTVCameraYn == "false" ? 2 : this.dataListBuildingSave[0].CCTVCameraYn == "true" ? 1 : this.dataListBuildingSave[0].CCTVCameraYn,
                // "BuildTabsYn": this.dataListBuildingSave[0].BuildTabsYn == "false" ? 2 : this.dataListBuildingSave[0].BuildTabsYn == "true" ? 1 : this.dataListBuildingSave[0].BuildTabsYn,
                // "BuildTabsNumber": this.dataListBuildingSave[0].BuildTabsNumber,
                // "AuditoriumStageReqt": this.dataListBuildingSave[0].AuditoriumStageReqt,
                // "AuditoriumStageArea": this.dataListBuildingSave[0].AuditoriumStageArea,
                // "AuditoriumStageHeight": this.dataListBuildingSave[0].AuditoriumStageHeight,
                // "AuditoriumStageAreaLevel": this.dataListBuildingSave[0].AuditoriumStageAreaLevel,
                // "AuditoriumPrjtFunc": this.dataListBuildingSave[0].AuditoriumPrjtFunc == "false" ? 2 : this.dataListBuildingSave[0].AuditoriumPrjtFunc == "true" ? 1 : this.dataListBuildingSave[0].AuditoriumPrjtFunc,

              }
            };
            this.sidsService.SecSidsBulidVisit(data).subscribe(function (res) {
              if (res.dataStatus) {
                // this.alertService.success('Saved Building Question');
                _this14.alertService.success('Saved Successfully');

                var query = 'UPDATE sidsBuildSavesDatas SET Status = ' + "3" + ',ClosingQuestions =' + "3" + ' WHERE sidsBuildSavesDatas.SclId = "' + _this14.schoolId + '" And sidsBuildSavesDatas.BuildingId = "' + _this14.buldid + '"';
                var query2 = 'DELETE FROM SidsBulidVisitGet WHERE SchlId = "' + _this14.schoolId + '"' + ' And VistUId = "' + _this14.vistId + '"' + ' And BuildId = "' + _this14.buldid + '"';
                return _this14.sqliteDB.update(query).then(function (data) {
                  return _this14.sqliteDB.getDataLocalDB(query2).then(function (data) {
                    if (data.rowsAffected > 0) {
                      _this14.getbuilding(id);

                      _this14.ionViewDidEnter();
                    }

                    if (data.rowsAffected == 0) {
                      _this14.getbuilding(id);

                      _this14.ionViewDidEnter();
                    }

                    _this14.buildingId = true;
                  });
                });
              }
            });
            this.checkBuildSavedata(); // }
          }
        }, {
          key: "getbuilding",
          value: function getbuilding(id) {
            var _this15 = this;

            this.filterbuild = [];
            this.buldid = 100 + parseInt(id);
            this.buldid.toString();
            var query = 'SELECT * FROM SidsBulidVisitGet' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"' + ' And BuildId = "' + this.buldid + '"'; // console.log("hahahahahaha",query);

            return this.sqliteDB.getDataLocalDB(query).then(function (responce) {
              if (responce.rows.length == 0) {
                _this15.sidsService.SecSidsBulidVisitGet(_this15.vistId, _this15.schoolId).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this15.filterbuild = res.result.filter(function (item) {
                      return item.BldgId == _this15.buldid;
                    });
                    console.log("filterBuild  <- Get Building", _this15.filterbuild);

                    if (_this15.filterbuild.length > 0) {
                      _this15.insertLocalBuilding(_this15.filterbuild, _this15.buldid);
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
                _this15.filterbuild = jsonData.filter(function (item) {
                  return item.BldgId == _this15.buldid;
                });
                console.log("filterBuild  <- Local Building", _this15.filterbuild);
              }
            });
          }
        }, {
          key: "getfloor",
          value: function getfloor(id, indBuild) {
            var _this16 = this;

            this.buldid = 100 + parseInt(id);
            this.buldid.toString();
            var query = 'SELECT * FROM SidsFloorsVisitGet' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And VistUId = "' + this.vistId + '"' + ' And BuildIndexId = "' + indBuild + '"' + ' And BuildId = "' + this.buldid + '"';
            console.log(":::::::::::::::::", query);
            return this.sqliteDB.getDataLocalDB(query).then(function (responce) {
              if (responce.rows.length == 0) {
                _this16.sidsService.SecSidsFloorsVisitGet(_this16.vistId, indBuild).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this16.filterfloor = res.result.filter(function (item) {
                      return item.BldgId == _this16.buldid;
                    });
                    console.log("filterfloor  <- Get Floor", _this16.filterfloor);

                    if (_this16.filterfloor.length > 0) {
                      _this16.insertLocalFloor(_this16.filterfloor, _this16.buldid, indBuild);
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
                _this16.filterfloor = jsonData.filter(function (item) {
                  return item.BldgId == _this16.buldid;
                });
                console.log("filterfloor  <- Local Floor", _this16.filterfloor);
              }
            });
          }
        }, {
          key: "onFloorBuild",
          value: function onFloorBuild(iId, buildingId, floorId, item1) {
            var _this17 = this;

            console.log(buildingId, floorId);
            console.log("buildingInsert Ah", this.filterbuild);

            if (this.filterbuild.length == 0) {
              this.alertService.error('Please Sync Building Question');
            } else {
              var build = 100 + parseInt(buildingId); // this.getfloor(buildingId)

              var query5 = 'SELECT * FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + build + '"' + ' And VistId = "' + this.vistId + '"';
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
                  _this17.alertService.error('Please Sync Building Question');
                } else {
                  var floor = 1000 + parseInt(floorId);
                  var query = 'SELECT * FROM sidsFloorQuestion' + ' WHERE SclId = "' + _this17.schoolId + '"' + ' And BuildingId = "' + build + '"' + ' And FloorId = "' + floor + '"' + ' And VistId = "' + _this17.vistId + '"';
                  return _this17.sqliteDB.getDataLocalDB(query).then(function (datas) {
                    if (datas.rows.length == 0) {
                      _this17.alertService.error('Please Fill Floor Question');
                    } else {
                      // this.initialValidator()
                      _this17.dataListFloorSave = [];

                      for (var i = 0; i < datas.rows.length; i++) {
                        _this17.dataListFloorSave.push(datas.rows.item(i));
                      }

                      if (+item1.value.FloorCondi == 1 || +item1.value.FloorCondi == 4) {
                        if (item1.value.FloorName == "Terrace") {
                          _this17.onSaveFloor(buildingId, floor, iId);
                        } else {
                          if (+item1.value.FloorClose == 1) {
                            // let bdataId = 100 + parseInt(buildingId)
                            // let fdataId = 1000 + parseInt(floorId)
                            // this.router.navigate(['/tabs/floor-closing-questions'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'buildingId': bdataId, 'floorId': fdataId,'status': item1.value.Status}, skipLocationChange: false });
                            _this17.alertService.alert("Enter the Floor Closing Questions");
                          } else {
                            _this17.onSaveFloor(buildingId, floor, iId);
                          }
                        }
                      } else {
                        _this17.onSaveFloor(buildingId, floor, iId);
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
            var _this18 = this;

            var data = {
              "records": {
                "IndexId": "",
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
                // "DoorReplace":this.dataListFloorSave[0].DoorReplace,
                "JaalisReplace": this.dataListFloorSave[0].JaalisReplace,
                // "DoorRepair":this.dataListFloorSave[0].DoorRepair,
                "JaalisRepair": this.dataListFloorSave[0].JaalisRepair,
                // "DoorRepaint":this.dataListFloorSave[0].DoorRepaint,
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
            this.sidsService.SecSidsFloorsVisit(data).subscribe(function (res) {
              // this.checkRoomLocalDb(bulid, floorid)
              // if (res.dataStatus) {
              // console.log(data, res)
              var query = 'UPDATE sidsFloorSaveDatas SET Status = ' + "3" + ', FloorClose = ' + "3" + ' WHERE sidsFloorSaveDatas.SclId = "' + _this18.schoolId + '" And sidsFloorSaveDatas.BuildIndx = "' + bulid + '" And sidsFloorSaveDatas.FloorId = "' + floorid + '"';
              return _this18.sqliteDB.update(query).then(function (data) {
                // this.formfloor.controls['sidsfloor']['controls'][i].controls['Status'].setValue(3);
                // this.formfloor.controls['sidsfloor']['controls'][i].controls['Status'].updateValueAndValidity();
                //   this.checkRoomLocalDb(bulid, floorid)
                _this18.getfloor(bulid, _this18.filterbuild[0].IndexId);
              });
            });
            this.router.navigate(['/tabs/new-dashboard'], {
              queryParams: {
                'schoolId': this.schoolId,
                'vistId': this.vistId
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "checkRoomLocalDb",
          value: function checkRoomLocalDb(bulid, floorid) {
            var _this19 = this;

            if (this.filterfloor.length == 0) {
              this.alertService.error('Please Sync Floor Question');
            } else {
              var build = 100 + parseInt(bulid);
              var floor = 1000 + parseInt(floorid);
              console.log(build, this.filterfloor[0].IndexId);
              var dataFI = this.filterfloor[0].IndexId;
              var query = 'SELECT * FROM newRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + build + '"' + ' And FloorId = "' + floor + '"' + ' And VistId = "' + this.vistId + '"';
              return this.sqliteDB.getDataLocalDB(query).then(function (data) {
                if (data.rows.length > 0) {
                  // this.dataListData = []
                  for (var i = 0; i < data.rows.length; i++) {
                    _this19.dataListData.push(data.rows.item(i));
                  }

                  console.log(_this19.dataListData); // for (let m = 1; m <= this.dataListRoom.length; m++) {
                  //   console.log(m, "m", bulid, floor)
                  //   this.onSaveRoom(bulid, floor, m);
                  // }

                  console.log(_this19.dataListRoom, "room data");
                } else {
                  _this19.alertService.error('Please Enter Room Question');

                  console.log("no room data");
                }
              });
            }
          }
        }, {
          key: "onSaveRoom",
          value: function onSaveRoom(id, floor, roomid, iId) {
            var _this20 = this;

            console.log("suriyadsa", this.filterfloor);

            if (this.filterfloor.length == 0) {
              this.alertService.error('Please Sync Floor Question');
            } else {
              var floordId = 1000 + parseInt(floor);
              var query5 = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorId = "' + floordId + '"' + ' And VistId = "' + this.vistId + '"';
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
                  _this20.alertService.error('Please Sync Floor Question');
                } else {
                  console.log(id, floor, roomid);
                  _this20.buldid = 100 + parseInt(id);
                  _this20.floorid = 1000 + parseInt(floor);
                  _this20.roomid = 10000 + parseInt(roomid);
                  var dataFI = _this20.filterfloor[0].IndexId;
                  console.log(_this20.buldid, _this20.floorid, _this20.roomid);
                  var query = 'SELECT * FROM newRoomscommons' + ' WHERE SchlId = "' + _this20.schoolId + '"' + ' And BldgId = "' + _this20.buldid + '"' + ' And FloorId = "' + _this20.floorid + '"' + ' And RoomId = "' + _this20.roomid + '"' + ' And VistId = "' + _this20.vistId + '"';
                  console.log("SaveRoomId", query);
                  return _this20.sqliteDB.getDataLocalDB(query).then(function (data) {
                    if (data.rows.length > 0) {
                      _this20.dataListData = [];

                      for (var i = 0; i < data.rows.length; i++) {
                        _this20.dataListData.push(data.rows.item(i));
                      }

                      console.log(_this20.dataListData, "data room");
                      debugger; // let dataImage2 = [];
                      // if(this.dataListData[0].LabPhotoTwo){
                      //   dataImage2 = this.dataListData[0].LabPhotoTwo.split(',')
                      // }

                      var dataImage1 = _this20.dataListData[0].LabPhotoOne.split(',');

                      var datarecords = {
                        "records": {
                          "IndxId": "",
                          "SchlId": _this20.schoolId,
                          "VistId": _this20.vistId,
                          "BldgIdxId": _this20.filterbuild[0].IndexId,
                          "BldgId": _this20.buldid,
                          "FloorIdxId": _this20.filterfloor[0].IndexId,
                          "FloorId": _this20.floorid,
                          "RoomId": _this20.roomid,
                          "RoomUse": _this20.dataListData[0].RoomUse,
                          "RoomName": _this20.dataListData[0].RoomName,
                          "RoomCondition": _this20.dataListData[0].RoomCondition,
                          "RepairType": _this20.dataListData[0].RepairType,
                          "MajorRepair": _this20.dataListData[0].MajorRepair,
                          "MinorRepair": _this20.dataListData[0].MinorRepair,
                          "AreaReplastering": _this20.dataListData[0].AreaReplastering,
                          "AreaIntWw": _this20.dataListData[0].AreaIntWw,
                          "AreaPlastering": _this20.dataListData[0].AreaPlastering,
                          "AreaReflooring": _this20.dataListData[0].AreaReflooring,
                          "AreaPatchwork": _this20.dataListData[0].AreaPatchwork,
                          "DoorReplace": _this20.dataListData[0].DoorReplace,
                          "WindowReplace": _this20.dataListData[0].WindowReplace,
                          "DoorRepair": _this20.dataListData[0].DoorRepair,
                          "WindowRepair": _this20.dataListData[0].WindowRepair,
                          "DoorRepaint": _this20.dataListData[0].DoorRepaint,
                          "WindowRepaint": _this20.dataListData[0].WindowRepaint,
                          "LatrinReplace": _this20.dataListData[0].LatrinReplace,
                          "UrinalReplace": _this20.dataListData[0].UrinalReplace,
                          "PipeNeed": _this20.dataListData[0].PipeNeed,
                          "DrainageNeed": _this20.dataListData[0].DrainageNeed,
                          "RoomLength": _this20.dataListData[0].RoomLength,
                          "RoomBreadth": _this20.dataListData[0].RoomBreadth,
                          "FloorType": _this20.dataListData[0].FloorType,
                          "NumBenchAvail": _this20.dataListData[0].NumBenchAvail,
                          "NumDesksAvail": _this20.dataListData[0].NumDesksAvail,
                          "TubelightFunc": _this20.dataListData[0].TubelightFunc,
                          "FansFunc": _this20.dataListData[0].FansFunc,
                          "Cupboard": _this20.dataListData[0].Cupboard,
                          "NumCupboardReq": _this20.dataListData[0].NumCupboardReq,
                          "TeacherTableYn": _this20.dataListData[0].TeacherTableYn == "false" ? 2 : _this20.dataListData[0].TeacherTableYn == "true" ? 1 : _this20.dataListData[0].TeacherTableYn == true ? 1 : 2,
                          "TelevisionFuncYn": _this20.dataListData[0].TelevisionFuncYn == "false" ? 2 : _this20.dataListData[0].TelevisionFuncYn == "true" ? 1 : _this20.dataListData[0].TelevisionFuncYn == true ? 1 : 2,
                          "SmartboardPrjtFuncYn": _this20.dataListData[0].SmartboardPrjtFuncYn == "false" ? 2 : _this20.dataListData[0].SmartboardPrjtFuncYn == "true" ? 1 : _this20.dataListData[0].SmartboardPrjtFuncYn == true ? 1 : 2,
                          "ClassRoomProjYn": _this20.dataListData[0].ClassRoomProjYn == "false" ? 2 : _this20.dataListData[0].ClassRoomProjYn == "true" ? 1 : _this20.dataListData[0].ClassRoomProjYn == true ? 1 : 2,
                          "LabType": _this20.dataListData[0].LabType,
                          "LabComputerFunc": _this20.dataListData[0].LabComputerFunc,
                          "LabComputerRepair": _this20.dataListData[0].LabComputerRepair,
                          "LabWatersupplyYn": _this20.dataListData[0].LabWatersupplyYn == "false" ? 2 : _this20.dataListData[0].LabWatersupplyYn == "true" ? 1 : _this20.dataListData[0].LabWatersupplyYn == true ? 1 : 2,
                          "LabDrainage": _this20.dataListData[0].LabDrainage == "false" ? 2 : _this20.dataListData[0].LabDrainage == "true" ? 1 : _this20.dataListData[0].LabDrainage == true ? 1 : 2,
                          "LibraryBooks": _this20.dataListData[0].LibraryBooks == "false" ? 2 : _this20.dataListData[0].LibraryBooks == "true" ? 1 : _this20.dataListData[0].LibraryBooks == true ? 1 : 2,
                          "StaffrmUsedBy": _this20.dataListData[0].StaffrmUsedBy,
                          "KitchenWtrSrc": _this20.dataListData[0].KitchenWtrSrc,
                          "KitchenLPGConYn": _this20.dataListData[0].KitchenLPGConYn == "false" ? 2 : _this20.dataListData[0].KitchenLPGConYn == "true" ? 1 : _this20.dataListData[0].KitchenLPGConYn == true ? 1 : 2,
                          "KitchenWtrSupply": _this20.dataListData[0].KitchenWtrSupply == "false" ? 2 : _this20.dataListData[0].KitchenWtrSupply == "true" ? 1 : _this20.dataListData[0].KitchenWtrSupply == true ? 1 : 2,
                          "KitchenStorageYn": _this20.dataListData[0].KitchenStorageYn == "false" ? 2 : _this20.dataListData[0].KitchenStorageYn == "true" ? 1 : _this20.dataListData[0].KitchenStorageYn == true ? 1 : 2,
                          "KitchenCleanYn": _this20.dataListData[0].KitchenCleanYn == "false" ? 2 : _this20.dataListData[0].KitchenCleanYn == "true" ? 1 : _this20.dataListData[0].KitchenCleanYn == true ? 1 : 2,
                          "KitchenGardenYn": _this20.dataListData[0].KitchenGardenYn == "false" ? 2 : _this20.dataListData[0].KitchenGardenYn == "true" ? 1 : _this20.dataListData[0].KitchenGardenYn == true ? 1 : 2,
                          "DiningFunctionalYn": _this20.dataListData[0].DiningFunctionalYn == "false" ? 2 : _this20.dataListData[0].DiningFunctionalYn == "true" ? 1 : _this20.dataListData[0].DiningFunctionalYn == true ? 1 : 2,
                          "DiningSeatingCapacity": _this20.dataListData[0].DiningSeatingCapacity,
                          "DiningSeatingWtrSupply": _this20.dataListData[0].DiningSeatingWtrSupply == "false" ? 2 : _this20.dataListData[0].DiningSeatingWtrSupply == "true" ? 1 : _this20.dataListData[0].DiningSeatingWtrSupply == true ? 1 : 2,
                          "NoonmealStorageClean": _this20.dataListData[0].NoonmealStorageClean == "false" ? 2 : _this20.dataListData[0].NoonmealStorageClean == "true" ? 1 : _this20.dataListData[0].NoonmealStorageClean == true ? 1 : 2,
                          "StoreRoomPurpose": _this20.dataListData[0].StoreRoomPurpose,
                          "StrroomStorageClean": _this20.dataListData[0].StrroomStorageClean == "false" ? 2 : _this20.dataListData[0].StrroomStorageClean == "true" ? 1 : _this20.dataListData[0].StrroomStorageClean == true ? 1 : 2,
                          "ReasonEmpty": _this20.dataListData[0].ReasonEmpty,
                          "AuditoriumYn": _this20.dataListData[0].AuditoriumYn == "false" ? 2 : _this20.dataListData[0].AuditoriumYn == "true" ? 1 : _this20.dataListData[0].AuditoriumYn == true ? 1 : 2,
                          "AuditoriumLights": _this20.dataListData[0].AuditoriumLights,
                          "AuditoriumFans": _this20.dataListData[0].AuditoriumFans,
                          "AuditoriumPrjtFunc": _this20.dataListData[0].AuditoriumPrjtFunc == "false" ? 2 : _this20.dataListData[0].AuditoriumPrjtFunc == "true" ? 1 : _this20.dataListData[0].AuditoriumPrjtFunc == true ? 1 : 2,
                          "SmartRoomFacilityYn": _this20.dataListData[0].SmartRoomFacilityYn == "false" ? 2 : _this20.dataListData[0].SmartRoomFacilityYn == "true" ? 1 : _this20.dataListData[0].SmartRoomFacilityYn == true ? 1 : 2,
                          "SmartRoomDeviceFunYn": _this20.dataListData[0].SmartRoomDeviceFunYn == "false" ? 2 : _this20.dataListData[0].SmartRoomDeviceFunYn == "true" ? 1 : _this20.dataListData[0].SmartRoomDeviceFunYn == true ? 1 : 2,
                          "SmartRoomComputersYn": _this20.dataListData[0].SmartRoomComputersYn == "false" ? 2 : _this20.dataListData[0].SmartRoomComputersYn == "true" ? 1 : _this20.dataListData[0].SmartRoomComputersYn == true ? 1 : 2,
                          "SmartRoomFunComp": _this20.dataListData[0].SmartRoomFunComp,
                          "SmartRoomFunCompRepair": _this20.dataListData[0].SmartRoomFunCompRepair,
                          "RoomArea": _this20.dataListData[0].RoomArea,
                          "NumChairAvail": _this20.dataListData[0].NumChairAvail,
                          "NumTableAvail": _this20.dataListData[0].NumTableAvail,
                          "LabInternetConn": _this20.dataListData[0].LabInternetConn == "false" ? 2 : _this20.dataListData[0].LabInternetConn == "true" ? 1 : _this20.dataListData[0].LabInternetConn == true ? 1 : 2,
                          "LabInternetConnType": _this20.dataListData[0].LabInternetConnType,
                          "LabBandwidth": _this20.dataListData[0].LabBandwidth,
                          "LabServiceProvider": _this20.dataListData[0].LabServiceProvider,
                          "LabServiceProviderOthers": _this20.dataListData[0].LabServiceProviderOthers,
                          "LabProjector": _this20.dataListData[0].LabProjector,
                          // "LabPrinterWebcam": this.dataListData[0].LabPrinterWebcam,
                          "LabPrinter": _this20.dataListData[0].LabPrinter,
                          "LabWebCamera": _this20.dataListData[0].LabWebCamera,
                          "LabMic": _this20.dataListData[0].LabMic,
                          "LabHeadphones": _this20.dataListData[0].LabHeadphones,
                          "LabPhotoOne": dataImage1[1],
                          "LabPhotoOneName": _this20.dataListData[0].LabPhotoOneName,
                          // "LabPhotoTwo": dataImage2.length > 0 ? dataImage2[1] : '',
                          // "LabPhotoTwoName": this.dataListData[0].LabPhotoTwoName,
                          "LabLatitude": _this20.dataListData[0].LabLatitude,
                          "LabLogitude": _this20.dataListData[0].LabLogitude,
                          "HmRoomToiletYn": _this20.dataListData[0].HmRoomToiletYn == "false" ? 2 : _this20.dataListData[0].HmRoomToiletYn == "true" ? 1 : _this20.dataListData[0].HmRoomToiletYn == true ? 1 : 2,
                          "HmRoomToiletStatus": _this20.dataListData[0].HmRoomToiletStatus,
                          "DiningRoomHandwash": _this20.dataListData[0].DiningRoomHandwash == "false" ? 2 : _this20.dataListData[0].DiningRoomHandwash == "true" ? 1 : _this20.dataListData[0].DiningRoomHandwash == true ? 1 : 2,
                          "DiningNumTapFunc": _this20.dataListData[0].DiningNumTapFunc,
                          "AudiStageStatus": _this20.dataListData[0].AudiStageStatus,
                          "SmartTabletFunc": _this20.dataListData[0].SmartTabletFunc,
                          "SmartSpeakerFunc": _this20.dataListData[0].SmartSpeakerFunc,
                          "SmartPaFunc": _this20.dataListData[0].SmartPaFunc,
                          "SmartInternet": _this20.dataListData[0].SmartInternet == "false" ? 2 : _this20.dataListData[0].SmartInternet == "true" ? 1 : _this20.dataListData[0].SmartInternet == true ? 1 : 2,
                          "SmartInternetConnType": _this20.dataListData[0].SmartInternetConnType,
                          "SmartInternetConnTypeOthers": _this20.dataListData[0].SmartInternetConnTypeOthers,
                          "SmartBandwidth": _this20.dataListData[0].SmartBandwidth,
                          "SmartServiceProvider": _this20.dataListData[0].SmartServiceProvider,
                          "SmartServiceProviderOthers": _this20.dataListData[0].SmartServiceProviderOthers // "AreaExtWw": this.dataListData[0].AreaExtWw,
                          // "RoomHeight": this.dataListData[0].RoomHeight,
                          // "TelevisionYn": this.dataListData[0].TelevisionYn == "false" ? 2 : this.dataListData[0].TelevisionYn == "true" ? 1 : this.dataListData[0].TelevisionYn == true ? 1 : 2,
                          // "SmartboardPrjtYn": this.dataListData[0].SmartboardPrjtYn == "false" ? 2 : this.dataListData[0].SmartboardPrjtYn == "true" ? 1 : this.dataListData[0].SmartboardPrjtYn == true ? 1 : 2,
                          // "ClassRoomProjFuncYn": this.dataListData[0].ClassRoomProjFuncYn == "false" ? 2 : this.dataListData[0].ClassRoomProjFuncYn == "true" ? 1 : this.dataListData[0].ClassRoomProjFuncYn == true ? 1 : 2,
                          // "LabComputerYn": this.dataListData[0].LabComputerYn == "false" ? 2 : this.dataListData[0].LabComputerYn == "true" ? 1 : this.dataListData[0].LabComputerYn == true ? 1 : 2,
                          // "HmRoomTblYn": this.dataListData[0].HmRoomTblYn == "false" ? 2 : this.dataListData[0].HmRoomTblYn == "true" ? 1 : this.dataListData[0].HmRoomTblYn == true ? 1 : 2,
                          // "AuditoriumStageReqt": this.dataListData[0].AuditoriumStageReqt,
                          // "AuditoriumStageArea": this.dataListData[0].AuditoriumStageArea,
                          // "AuditoriumStageHeight": this.dataListData[0].AuditoriumStageHeight,
                          // "AuditoriumStageAreaLevel": this.dataListData[0].AuditoriumStageAreaLevel,
                          // "AuditoriumPrjtYn": this.dataListData[0].AuditoriumPrjtYn == "false" ? 2 : this.dataListData[0].AuditoriumPrjtYn == "true" ? 1 : this.dataListData[0].AuditoriumPrjtYn == true ? 1 : 2,

                        }
                      };

                      _this20.sidsService.SecSidsRoomsCUD(datarecords).subscribe(function (res) {
                        var floors = parseInt(floor) - 1000;
                        console.log(floors);
                        var query = 'UPDATE sidsRoomSaves SET Status = ' + "3" + ' WHERE sidsRoomSaves.SclId = "' + _this20.schoolId + '" And sidsRoomSaves.BuildIndx = "' + id + '" And sidsRoomSaves.FloorIndx = "' + floor + '" And sidsRoomSaves.RoomId = "' + _this20.roomid + '"';
                        return _this20.sqliteDB.update(query).then(function (data) {
                          if (_this20.dataListData[0].RoomUse != '10') {}

                          console.log(_this20.formroom.value);

                          _this20.formroom.controls['sidsroom']['controls'][iId].controls['Status'].setValue(3);

                          _this20.formroom.controls['sidsroom']['controls'][iId].controls['Status'].updateValueAndValidity(); // this.formroom.controls['sidsroom']['controls'][i].controls['Status'].setValue(3);
                          // this.formroom.controls['sidsroom']['controls'][i].controls['Status'].updateValueAndValidity();

                        }); // if (res.dataStatus) {
                        // this.alertService.success('Saved Room Question');
                        //   let query = 'UPDATE sidsRoomSave SET Status = ' + "3" + ' WHERE sidsRoomSave.SclId = "' + this.schoolId + '" And sidsRoomSave.BuildIndx = "' + id + '" And sidsRoomSave.FloorIndx = "' + floor + '"';
                        //   return this.sqliteDB.update(query).then(data => {
                        //   })
                        // })
                        // }
                      });

                      if (+_this20.dataListData[0].RoomUse == 10) {
                        var toiletData = {
                          "records": {
                            "IndexId": "",
                            "SchoolId": _this20.schoolId,
                            "VisitId": _this20.vistId,
                            "BuildId": _this20.filterbuild[0].IndexId,
                            "FloorId": _this20.filterfloor[0].IndexId,
                            "RoomId": _this20.roomid,
                            "ToiletType": _this20.dataListData[0].ToiletType,
                            "ToiletWaterCon": _this20.dataListData[0].ToiletWaterCon,
                            "ToiletWasteDis": _this20.dataListData[0].ToiletWasteDis,
                            // "IwcToilet": this.dataListData[0].IwcToilet == "false" ? 2 : this.dataListData[0].IwcToilet == "true" ? 1 : this.dataListData[0].IwcToilet == true ? 1 : 2,
                            // "EwcToilet": this.dataListData[0].EwcToilet == "false" ? 2 : this.dataListData[0].EwcToilet == "true" ? 1 : this.dataListData[0].EwcToilet == true ? 1 : 2,
                            // "UrinalToilet": this.dataListData[0].UrinalToilet == "false" ? 2 : this.dataListData[0].UrinalToilet == "true" ? 1 : this.dataListData[0].UrinalToilet == true ? 1 : 2,
                            "Iwccubicles": _this20.dataListData[0].Iwccubicles,
                            "IwccubiclesFunc": _this20.dataListData[0].IwccubiclesFunc,
                            "Ewccubicles": _this20.dataListData[0].Ewccubicles,
                            "Ewccubiclesfunc": _this20.dataListData[0].Ewccubiclesfunc,
                            "Urinals": _this20.dataListData[0].Urinals,
                            "Urinalsfunc": _this20.dataListData[0].Urinalsfunc,
                            "ToiletTapsFunc": _this20.dataListData[0].ToiletTapsFunc,
                            "ToiletNeedTabs": _this20.dataListData[0].ToiletNeedTabs,
                            "ToiletBucket": _this20.dataListData[0].ToiletBucket,
                            "Toiletmugs": _this20.dataListData[0].Toiletmugs,
                            "SizeSuitable": _this20.dataListData[0].SizeSuitable == "false" ? 2 : _this20.dataListData[0].SizeSuitable == "true" ? 1 : _this20.dataListData[0].SizeSuitable == true ? 1 : 2,
                            "Roof": _this20.dataListData[0].Roof,
                            "ToiletSanitaryPad": _this20.dataListData[0].ToiletSanitaryPad,
                            "SanitWasteDisp": _this20.dataListData[0].SanitWasteDisp,
                            "HwFacility": _this20.dataListData[0].HwFacility == "false" ? 2 : _this20.dataListData[0].HwFacility == "true" ? 1 : _this20.dataListData[0].HwFacility == true ? 1 : 2,
                            "ToiletImg": "",
                            "ToiletCubicSideHandRail": _this20.dataListData[0].ToiletCubicSideHandRail
                          }
                        };

                        _this20.sidsService.SecSidsToiletVisit(toiletData).subscribe(function (res) {
                          // if (res.dataStatus) {
                          // this.alertService.success('Saved Toilet Questions');
                          _this20.alertService.success('Saved Successfully'); // let floors = parseInt(floor) - 1000
                          // console.log(floors)
                          // let query = 'UPDATE sidsRoomSaves SET Status = ' + "3" + ' WHERE sidsRoomSaves.SclId = "' + this.schoolId + '" And sidsRoomSaves.BuildIndx = "' + id + '" And sidsRoomSaves.FloorIndx = "' + floor + '" And sidsRoomSaves.RoomId = "' + this.roomid  + '"';
                          // return this.sqliteDB.update(query).then(data => {
                          //   this.formroom.controls['sidsroom']['controls'][iId].controls['Status'].setValue(3);
                          //   this.formroom.controls['sidsroom']['controls'][iId].controls['Status'].updateValueAndValidity();
                          //   this.alertService.success('Saved Toilet Questions');


                          _this20.ionViewDidEnter(); // let query = 'UPDATE sidsRoomSave SET Status = ' + "3" + ' WHERE sidsRoomSave.SclId = "' + this.schoolId + '" And sidsRoomSave.BuildIndx = "' + this.buldid + '"';
                          // return this.sqliteDB.update(query).then(data => {
                          // })
                          // }
                          // })

                        });
                      }
                    } else {
                      _this20.alertService.error('Please Enter Room Questions');

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
            var _this21 = this;

            // local
            // let backupId = id;
            // id = +id - 1
            // let id = this.dataListBuilding.length;
            var id;

            for (var i = 0; i < this.dataListBuilding.length; i++) {
              id = +this.dataListBuilding[i].BuildingId - 100;
            } // let dataId = 100 + parseInt(id)


            var dataId = 100 + id;
            var query = 'SELECT * FROM sidsBuildSavesDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
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
                  for (var _i4 = 0; _i4 < filterLocalBuild.length; _i4++) {
                    if (+filterLocalBuild[_i4].Status == 1) {
                      _this21.alertService.error("Please fill details for the previous building");
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
                    for (var _i5 = 0; _i5 < filterCloseBuild.length; _i5++) {
                      if (+filterCloseBuild[_i5].ClosingQuestions == 1) {
                        _this21.alertService.error("Please fill details for the closing questions");
                      }
                    }
                  } else {
                    var buildLength = filterLocalBuild2.length == 0 ? 0 : filterLocalBuild2.length - 1;

                    if (+filterLocalBuild2[buildLength].BuildCondi == 2 || +filterLocalBuild2[buildLength].BuildCondi == 3 || +filterLocalBuild2[buildLength].BuildCondi == 5) {
                      _this21.getBuildAddData(id + 1);

                      _this21.lastRoomId = 0;
                    } else {
                      _this21.buildingFloor(id, filterLocalBuild2);
                    }
                  }
                }
              } else {
                _this21.sidsService.SecSidsBulidVisitGet(_this21.vistId, _this21.schoolId).subscribe(function (res) {
                  if (res.dataStatus) {
                    var filterBuild = res.result.filter(function (item) {
                      return item.BldgId == _this21.buldid;
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
                        for (var _i6 = 0; _i6 < filterServerBuild.length; _i6++) {
                          if (+filterBuild[_i6].Status == 1) {
                            _this21.alertService.error("Please fill the previous building");
                          } // else if(+filterBuild[i].Status == 2){
                          //   this.alertService.error("Please Sync the Building " + id)
                          // }
                          else {// this.buildingFloor(id, filterServerBuild);
                          }
                        }
                      } else {
                        _this21.buildingFloor(id, filterServerBuild2);
                      }
                    } else {
                      _this21.alertService.error("Please Fill the Building " + id);
                    }
                  } else {
                    _this21.alertService.error("Please Fill the Building " + id);
                  }
                });
              }
            });
          }
        }, {
          key: "buildingFloor",
          value: function buildingFloor(id, filterServerBuild2) {
            var _this22 = this;

            var query = 'SELECT * FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + // ' And FloorId = "' + dataId + '"' +
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
                      _this22.alertService.error("Please fill atleast one floor and one room in Building - " + filterServerBuild2[0].BuildName + " to add the next building");
                    } // else if(+filterLocalFloor[j].Status == 2){
                    //   this.alertService.error("Please fill atleast one floor and one room in Building - " +filterServerBuild2[0].BuildName+ "to add the next building")
                    // }
                    else {// this.buildingFloorRoom(id, filterServerBuild2, filterServerFloor);
                    }
                  }
                } else {
                  if (filterLocalFloor2[0].FloorName == "Terrace") {
                    if (filterLocalFloor2.length == 1) {
                      _this22.getBuildAddData(id + 1);

                      _this22.lastRoomId = 0;
                    } else {
                      var floorLength = filterLocalFloor2.length == 0 ? 0 : filterLocalFloor2.length - 1;

                      if (+filterLocalFloor2[floorLength].FloorCondi == 2 || +filterLocalFloor2[floorLength].FloorCondi == 3) {
                        _this22.getBuildAddData(id + 1);

                        _this22.lastRoomId = 0;
                      } else {
                        _this22.buildingFloorRoom(id, filterServerBuild2, filterLocalFloor2);
                      }
                    }
                  } else {
                    // Floor Under Contruction Condition Start...
                    var _floorLength = filterLocalFloor2.length == 0 ? 0 : filterLocalFloor2.length - 1;

                    if (+filterLocalFloor2[_floorLength].FloorCondi == 2 || +filterLocalFloor2[_floorLength].FloorCondi == 3) {
                      _this22.getBuildAddData(id + 1);

                      _this22.lastRoomId = 0;
                    } else {
                      var floorClose = filterLocalFloor2.filter(function (ff) {
                        return +ff.FloorClose == 1;
                      });

                      if (floorClose.length > 0) {
                        if (+floorClose[0].FloorCondi == 2 || +floorClose[0].FloorCondi == 3) {
                          _this22.buildingFloorRoom(id, filterServerBuild2, filterLocalFloor2);
                        } else {
                          _this22.alertService.error("Please fill floor closing questions in Building - " + filterServerBuild2[0].BuildName + " to add the next building");
                        }
                      } else {
                        _this22.buildingFloorRoom(id, filterServerBuild2, filterLocalFloor2);
                      }
                    }
                  }
                }
              } else {
                _this22.sidsService.SecSidsFloorsVisitGet(_this22.vistId, filterServerBuild2[0].IndexId).subscribe(function (res) {
                  if (res.dataStatus) {
                    var filterfloor = res.result.filter(function (item) {
                      return item.BldgId == _this22.buldid;
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
                        for (var _j = 0; _j < filterServerFloor.length; _j++) {
                          if (+filterServerFloor[_j].Status == 1) {
                            _this22.alertService.error("Please fill atleast one floor and one room in Building - " + filterServerBuild2[0].BuildName + " to add the next building");
                          } // else if(+filterServerFloor[j].Status == 2){
                          //   this.alertService.error("Please fill atleast one floor and one room in Building - " +filterServerBuild2[0].BuildName+ "to add the next building")
                          // }
                          else {// this.buildingFloorRoom(id, filterServerBuild2, filterServerFloor);
                          }
                        }
                      } else {
                        _this22.buildingFloorRoom(id, filterServerBuild2, filterServerFloor2);
                      }
                    } else {
                      _this22.alertService.error("Please Add Floor by " + filterServerBuild2[0].BuildName + " Building");
                    }
                  } else {
                    _this22.alertService.error("Please Add Floor by " + filterServerBuild2[0].BuildName + " Building");
                  }
                });
              }
            });
          }
        }, {
          key: "buildingFloorRoom",
          value: function buildingFloorRoom(id, sidsBuild, sidsFloor) {
            var _this23 = this;

            var query = 'SELECT * FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + // ' And FloorIndx = "' + dataId + '"' +
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
                      _this23.alertService.error("Please fill the room for the floor"); // this.alertService.error("Please Fill the Room by "+sidsFloor[k].FloorName+" Floor")

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
                    _this23.getBuildAddData(id + 1);

                    _this23.lastRoomId = 0;
                  } else {
                    if (sidsFloor[floorLength].FloorName == "Terrace") {
                      _this23.getBuildAddData(id + 1);

                      _this23.lastRoomId = 0;
                    } else {
                      _this23.alertService.error("Please add room for the previous floor");
                    }
                  }
                }
              } else {
                console.log("build", _this23.filterbuild, sidsBuild);
                console.log("floor", _this23.filterfloor, sidsFloor);

                if (+sidsBuild[0].Status == 3 && +sidsFloor[0].Status == 3) {
                  _this23.sidsService.SecSidsRoomsVisitGet(_this23.vistId, _this23.filterbuild[0].IndexId, _this23.filterfloor[0].FoolrId).subscribe(function (res) {
                    // this.sidsService.SecSidsRoomsVisitGet(this.vistId, sidsBuild[0].BuildingId, sidsFloor[0].FloorId).subscribe(res => {
                    if (res.dataStatus) {
                      var filterRoom = res.result.filter(function (item) {
                        return item.BldgId == _this23.buldid;
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
                              _this23.alertService.error("Please fill the room for the floor");
                            } // else if(+filterLocalRoom[k].Status == 2){
                            //   this.alertService.error("Please Sync the Room by "+sidsFloor[0].FloorName+" Floor")
                            // }
                            else {// this.getBuildAddData(id + 1);
                              // this.lastRoomId = 0;
                            }
                          }
                        } else {
                          _this23.getBuildAddData(id + 1);

                          _this23.lastRoomId = 0;
                        }
                      } else {
                        _this23.alertService.error("Please Add Room by " + sidsBuild[0].BuildName + " Building");
                      }
                    } else {
                      _this23.alertService.error("Please Add Room by " + sidsBuild[0].BuildName + " Building");
                    }
                  });
                } else {
                  _this23.alertService.error("Please Add Room by " + sidsBuild[0].BuildName + " Building");
                }
              }
            });
          }
        }, {
          key: "floorInsideRoom",
          value: function floorInsideRoom(id, floor) {
            var _this24 = this;

            //tomorrow delete before checresourece data okk...!
            var dataIdB = 100 + parseInt(id);
            var dataIdF = 1000 + parseInt(id);
            var query = 'DELETE FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And FloorIndx = "' + floor + '"' + // ' And RoomId = "' + dataIdR + '"' +
            ' And VistId = "' + this.vistId + '"';
            var query2 = 'SELECT * FROM newRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + dataIdB + '"' + ' And FloorId = "' + dataIdF + '"' + // ' And RoomId = "' + dataIdR + '"' +
            ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this24.sqliteDB.getDataLocalDB(query2).then(function (data) {
                if (data.rowsAffected > 0) {
                  console.log("Floor and Room Deleted");

                  _this24.ionViewDidEnter();
                }

                if (data.rowsAffected == 0) {
                  console.log("Floor and Room Deleted");

                  _this24.ionViewDidEnter();
                }
              });
            });
          }
        }, {
          key: "buildingInsideFloorRoom",
          value: function buildingInsideFloorRoom(id) {
            var _this25 = this;

            // Build -> Floor Delete
            var dataId = 100 + parseInt(id);
            var query = 'DELETE FROM sidsFloorSaveDatas' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM sidsFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            var query3 = 'DELETE FROM sidsRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + id + '"' + ' And VistId = "' + this.vistId + '"';
            var query4 = 'DELETE FROM newRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + dataId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this25.sqliteDB.getDataLocalDB(query2).then(function (data) {
                return _this25.sqliteDB.getDataLocalDB(query3).then(function (data) {
                  return _this25.sqliteDB.getDataLocalDB(query4).then(function (data) {
                    if (data.rowsAffected > 0) {
                      // console.log("Build Floor and Room Deleted");
                      // this.alertService.success("Building Deleted Successfully")
                      _this25.alertService.success('Saved Successfully');

                      _this25.ionViewDidEnter();
                    }

                    if (data.rowsAffected == 0) {
                      // this.alertService.success("Building Deleted Successfully")
                      _this25.alertService.success('Saved Successfully'); // console.log("Build Floor and Room Deleted");


                      _this25.ionViewDidEnter();
                    }
                  });
                });
              });
            });
          }
        }, {
          key: "addBuildingServer",
          value: function addBuildingServer(id) {
            var _this26 = this;

            this.filterbuild = [];
            this.buldid = 100 + parseInt(id);
            this.buldid.toString();
            this.sidsService.SecSidsBulidVisitGet(this.vistId, this.schoolId).subscribe(function (res) {
              if (res.dataStatus) {
                _this26.filterbuild = res.result.filter(function (item) {
                  return item.BldgId == _this26.buldid;
                });
                console.log("filterBuild", _this26.filterbuild);

                _this26.sidsService.SecSidsFloorsVisitGet(_this26.vistId, _this26.filterbuild[0].IndexId).subscribe(function (res) {
                  if (res.dataStatus) {
                    _this26.filterfloor = res.result.filter(function (item) {
                      return item.BldgId == _this26.buldid;
                    });
                    console.log("filterfloor", _this26.filterfloor);

                    _this26.sidsService.SecSidsRoomsVisitGet(_this26.vistId, _this26.filterbuild[0].IndexId, _this26.filterfloor[0].IndexId).subscribe(function (res) {
                      if (res.dataStatus) {
                        _this26.filterRoom = res.result.filter(function (item) {
                          return item.BldgId == _this26.buldid;
                        });
                        console.log("filterRoom", _this26.filterRoom);
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
              this.router.navigate(['/tabs/building-closing-questions'], {
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
            this.router.navigate(['/tabs/floor-closing-questions'], {
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
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var text;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    if (this.toastinstance) {
                      this.toastinstance.dismiss();
                    }

                    text = id == 1 ? 'B ' + buildId + ' ' + buildName + ' opened' : 'B ' + buildId + ' ' + buildName + ' closed';
                    _context2.n = 1;
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
                    this.toastinstance = _context2.v;
                    this.toastinstance.present();

                  case 2:
                    return _context2.a(2);
                }
              }, _callee2, this);
            }));
          }
        }]);
      }();

      _NewDashboardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: src_app_services_emis_sids_service__WEBPACK_IMPORTED_MODULE_3__.SidsService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }];
      };

      _NewDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-new-dashboard',
        template: _raw_loader_new_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NewDashboardPage);
      /***/
    },

    /***/
    58564:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/sids/building/new-dashboard/new-dashboard.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list .item.item-accordion {\n  line-height: 38px;\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: 0.09s all linear;\n}\n\n.list .item.item-accordion.ng-hide {\n  line-height: 0px;\n}\n\n.list .item.item-accordion.ng-hide-add,\n.list .item.item-accordion.ng-hide-remove {\n  display: block !important;\n}\n\n.row-line {\n  background-color: #a967c5;\n  margin-right: 5%;\n  color: white;\n}\n\n.row-line-local {\n  background-color: #70BBFF;\n  margin-right: 5%;\n  color: white;\n}\n\n.row-line-server {\n  background-color: #A27B5C;\n  margin-right: 5%;\n  color: white;\n}\n\n.row-add {\n  color: #8b67b3;\n  background-color: white;\n  border: #8B67B3;\n  border: 2px solid;\n  margin-top: 20px;\n}\n\n.expand-card {\n  background-color: #EFE1FF;\n  margin-left: 20px;\n  margin-right: 20px;\n  padding-bottom: 6px;\n  padding-top: 20px;\n}\n\n.expand-row {\n  padding: 5px;\n  background-color: #abc5e1;\n  border-radius: 10px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 3%;\n}\n\n.expand-label {\n  font-size: 15px;\n  font-weight: 700;\n  color: #8B67B3;\n}\n\n.expand-label {\n  zoom: 2;\n  color: white;\n}\n\n.expand-question {\n  margin: 20px;\n  padding: 5px;\n  background-color: #FFF9E7;\n  border-radius: 10px;\n}\n\n.expand-question1 {\n  margin: 2;\n  padding: 2px;\n  background-color: #FFF9E7;\n  border-radius: 10px;\n}\n\n.headlabelAdd {\n  font-size: 20px;\n  font-weight: 700;\n}\n\n.headlabel {\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n}\n\n.headlabelSub {\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n}\n\n.room-card {\n  width: 20%;\n  background-color: #8B67B3;\n  margin-left: 20px;\n  padding: 4px;\n  color: white;\n}\n\n.sync {\n  font-size: 15px;\n  font-weight: 700;\n  color: #8B67B3;\n}\n\n.sync1 {\n  font-size: 15px;\n  font-weight: 700;\n  color: #839253;\n}\n\n.syncData {\n  font-size: 15px;\n  font-weight: 700;\n  color: #0b380e;\n}\n\n.syncData1 {\n  font-size: 15px;\n  font-weight: 700;\n  color: #839253;\n}\n\n.iconexpd {\n  zoom: 2;\n  color: white;\n}\n\n.iconexpdadd {\n  zoom: 2;\n  color: #0a0909;\n}\n\n.room-card {\n  padding: 5%;\n  margin: 1%;\n  text-align: center;\n  color: white;\n  background-color: var(--ion-color-primary);\n}\n\n.room-addcard {\n  margin: 1%;\n  text-align: center;\n  color: #8b67b3;\n  background-color: white;\n  border: #8B67B3;\n  border: 2px solid #8b67b3;\n}\n\n.center-items {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUFKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFDRTs7RUFFRSx5QkFBQTtBQUVKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBRUUsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNDLE9BQUE7RUFDQSxZQUFBO0FBQ0g7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSUo7O0FBRkU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhFO0VBQ0UsT0FBQTtFQUNBLGNBQUE7QUFNSjs7QUFKRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFPSjs7QUFKRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQU9KOztBQUpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFPSiIsImZpbGUiOiJuZXctZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjA5cyBhbGwgbGluZWFyO1xyXG4gIH1cclxuICAubGlzdCAuaXRlbS5pdGVtLWFjY29yZGlvbi5uZy1oaWRlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uLm5nLWhpZGUtYWRkLFxyXG4gIC5saXN0IC5pdGVtLml0ZW0tYWNjb3JkaW9uLm5nLWhpZGUtcmVtb3ZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucm93LWxpbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk2N2M1O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5yb3ctbGluZS1sb2NhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MEJCRkY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnJvdy1saW5lLXNlcnZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMjdCNUM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLnJvdy1hZGR7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzhiNjdiMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAjOEI2N0IzO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4cGFuZC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkUxRkY7IFxyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5leHBhbmQtcm93IHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYmM1ZTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICB9XHJcblxyXG4gIC5leHBhbmQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbiAgfVxyXG5cclxuICAuZXhwYW5kLWxhYmVsIHtcclxuICAgem9vbToyO1xyXG4gICBjb2xvcjogd2hpdGU7IFxyXG4gIH1cclxuXHJcbiAgLmV4cGFuZC1xdWVzdGlvbiB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOUU3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5leHBhbmQtcXVlc3Rpb24xIHtcclxuICAgIG1hcmdpbjogMjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY5RTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRsYWJlbEFkZHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICB9XHJcblxyXG4gIC5oZWFkbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gIH1cclxuXHJcbiAgLmhlYWRsYWJlbFN1YiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDo3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7IFxyXG4gIH1cclxuXHJcbiAgLnJvb20tY2FyZCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNjdCMztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gY29sb3I6IHdoaXRlO1xyXG4gIH0gXHJcbiAgLnN5bmMge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwIDsgXHJcbiAgICBjb2xvcjogIzhCNjdCMztcclxuICB9XHJcbiAgLnN5bmMxIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMCA7IFxyXG4gICAgY29sb3I6ICM4MzkyNTM7XHJcbiAgfVxyXG4gIC5zeW5jRGF0YSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDo3MDAgOyBcclxuICAgIGNvbG9yOiAjMGIzODBlO1xyXG4gIH1cclxuICAuc3luY0RhdGExIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMCA7IFxyXG4gICAgY29sb3I6ICM4MzkyNTM7XHJcbiAgfVxyXG4gIC5pY29uZXhwZHtcclxuICAgIHpvb206MjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmljb25leHBkYWRke1xyXG4gICAgem9vbToyO1xyXG4gICAgY29sb3I6IHJnYigxMCwgOSwgOSk7XHJcbiAgfVxyXG4gIC5yb29tLWNhcmQge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgLnJvb20tYWRkY2FyZCB7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4YjY3YjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogIzhCNjdCMzsgXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOGI2N2IzO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1pdGVtc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXIgO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */";
      /***/
    },

    /***/
    59088:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/building/new-dashboard/new-dashboard.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title style=\"padding-left: 10px;\">Buildings Details ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <ion-grid style=\"padding: 15px; background-color: #FFFFFF;\">\r\n    <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n      <div formArrayName=\"sids\">\r\n        <ion-row *ngFor=\"let i = index ; let item of form.get('sids')['controls'];\" [formGroupName]=\"i\"\r\n          style=\"background-color: aliceblue;margin-bottom: 10px\">\r\n\r\n          <ion-col size=\"12\" class=\"row-line\" *ngIf=\"!item.value.Condition && item.value.Status == 1\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-icon name=\"add-outline\" class=\"expand-label\" *ngIf=\"!item.value.Condition\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-local\" *ngIf=\"!item.value.Condition && item.value.Status == 2\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-icon name=\"add-outline\" class=\"expand-label\" *ngIf=\"!item.value.Condition\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}}</ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-server\" *ngIf=\"!item.value.Condition && item.value.Status == 3\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-icon name=\"add-outline\" class=\"expand-label\" *ngIf=\"!item.value.Condition\"></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"11\" (click)=\"expandbuilding(i,true,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <!-- <ion-col size=\"2\" *ngIf=\"item.value.Status == 3\">\r\n                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n\r\n          <ion-col size=\"12\" class=\"row-line\" *ngIf=\"item.value.Condition && item.value.Status == 1\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-icon name=\"remove\" class=\"expand-label\" ></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-local\" *ngIf=\"item.value.Condition && item.value.Status == 2\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-icon name=\"remove\" class=\"expand-label\" ></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"7\" (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"onsaveBuild(item.value.Id, i, item)\" class=\"center-items\">\r\n                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n              <ion-col size=\"2\" (click)=\"schoolAlert(item.value.Id)\" class=\"center-items\">\r\n                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" class=\"row-line-server\" *ngIf=\"item.value.Condition && item.value.Status == 3\"\r\n            (click)=\"expandbuilding(i,false,item.value.Id)\">\r\n            <ion-row class=\"center-items\">\r\n              <ion-col size=\"1\">\r\n                <ion-icon name=\"remove\" class=\"expand-label\" ></ion-icon>\r\n              </ion-col>\r\n              <ion-col size=\"11\">\r\n                <ion-row class=\"headlabel\">B {{item.value.Id}}</ion-row>\r\n                <ion-row class=\"headlabelSub\">{{item.value.BuildName}} </ion-row>\r\n              </ion-col>\r\n              <!-- <ion-col size=\"2\" *ngIf=\"item.value.Status == 2\">\r\n                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n              </ion-col> -->\r\n            </ion-row>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" *ngIf=\"item.value.Condition\">\r\n\r\n            <!-- Building genral question -->\r\n            <ion-row class=\"expand-question\" (click)=\"onBuilding(item.value.Id,item.value.Status)\">\r\n              <ion-col size=\"2\" style=\"text-align: center;\">\r\n                <div>\r\n                  <img src=\"assets/icons/Building.svg\" style=\"zoom: 1;\" />\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"8\">\r\n                <div>\r\n                  <ion-label class=\"sync\">Building general question</ion-label>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"2\">\r\n                <div style=\"text-align: center;\">\r\n                  <img src=\"assets/icons/rightarrow.svg\" style=\"zoom: 1;\" />\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <!-- floor details -->\r\n            <form [formGroup]=\"formfloor\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n              <ion-row formArrayName=\"sidsfloor\">\r\n                <ion-col size=\"12\" style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%;\"\r\n                  *ngFor=\"let n = index ; let item1 of formfloor.get('sidsfloor')['controls'];\" [formGroupName]=\"n\">\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line\"\r\n                    *ngIf=\"item1.value.Status == 1 && item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item.value.Id,false)\">\r\n                      <ion-icon name=\"remove\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item.value.Id,false)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 1\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-local\"\r\n                    *ngIf=\"item1.value.Status == 2 && item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item.value.Id,false)\">\r\n                      <ion-icon name=\"remove\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item.value.Id,false)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 2\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-server\"\r\n                    *ngIf=\"item1.value.Status == 3 && item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"2\" (click)=\"expandfloor(i,n,item.value.Id,false)\">\r\n                      <ion-icon name=\"remove\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" (click)=\"expandfloor(i,n,item.value.Id,false)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <!-- <ion-col size=\"4\" *ngIf=\"item1.value.Status == 3\">\r\n                     <img src=\"assets/icons/checkserver.svg\" style=\"zoom: 1;\" />\r\n                   </ion-col> -->\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line\"\r\n                    *ngIf=\"item1.value.Status == 1 && !item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item1.value.Id,true)\">\r\n                      <ion-icon name=\"add-outline\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item1.value.Id,true)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 1\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-local\"\r\n                    *ngIf=\"item1.value.Status == 2 && !item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"1\" (click)=\"expandfloor(i,n,item1.value.Id,true)\">\r\n                      <ion-icon name=\"add-outline\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"7\" (click)=\"expandfloor(i,n,item1.value.Id,true)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status == 2\"\r\n                      (click)=\"onFloorBuild(n,item.value.Id,item1.value.Id, item1)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" *ngIf=\"item1.value.Status != 3\" (click)=\"onDeleteFloor(item.value.Id,item1.value.Id)\" class=\"center-items\">\r\n                      <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row class=\"center-items row-line-server\"\r\n                    *ngIf=\"item1.value.Status == 3 && !item1.value.Condition && (item.value.Id == item1.value.BuildIndx)\">\r\n                    <ion-col size=\"2\" (click)=\"expandfloor(i,n,item1.value.Id,true)\">\r\n                      <ion-icon name=\"add-outline\" class=\"iconexpd\">\r\n                      </ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" (click)=\"expandfloor(i,n,item1.value.Id,true)\">\r\n                      <ion-label class=\"headlabel\"> {{item1.value.FloorName}}</ion-label>\r\n                    </ion-col>\r\n                    <!-- <ion-col size=\"3\" *ngIf=\"item1.value.Status == 3\">\r\n                      <img src=\"assets/icons/checkserver.svg\" style=\"zoom: 1;\" />\r\n                    </ion-col> -->\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- Floor genral question -->\r\n                  <ion-row (click)=\"onFloor(item.value.Id,item1.value.Id,item1.value.Status, item.value.BuildName)\" class=\"expand-question\"\r\n                    *ngIf=\"item1.value.Condition\">\r\n                    <ion-col size=\"2\" style=\"text-align: center;\">\r\n                      <div>\r\n                        <img src=\"assets/icons/Building.svg\" style=\"zoom: 1;\" />\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\">\r\n                      <div>\r\n                        <ion-label class=\"sync\">Floor general question</ion-label>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\">\r\n                      <div style=\"text-align: center;\">\r\n                        <img src=\"assets/icons/rightarrow.svg\" style=\"zoom: 1;\" />\r\n                      </div>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                  <!-- <ion-col class=\"row-line\" size=\"12\"> -->\r\n                  <ion-row *ngIf=\"item1.value.Condition\">\r\n                    <ion-col size=\"12\">\r\n                      <!-- room details -->\r\n                      <form [formGroup]=\"formroom\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n                        <ion-row formArrayName=\"sidsroom\">\r\n                          <ion-col size=\"12\"\r\n                            style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%;\"\r\n                            *ngFor=\"let m = index ; let item2 of formroom.get('sidsroom')['controls'];\"\r\n                            [formGroupName]=\"m\">\r\n\r\n                            <ion-row class=\"center-items row-line\" *ngIf=\"item2.value.Status == 1 && (item.value.Id == item2.value.BuildIndx) && (item1.value.Id == item2.value.FloorIndx)\">\r\n                              <ion-col size=\"7\"\r\n                                (click)=\"onRoom(item.value.Id,item1.value.Id,item2.value.Id,item2.value.Status, item.value.BuildName)\">\r\n                                <ion-label class=\"headlabel\">{{item2.value.RoomName}} Name</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"2.5\" *ngIf=\"item2.value.Status == 1\"\r\n                                (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\">\r\n                                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <ion-col size=\"2.5\" *ngIf=\"item2.value.Status == 2\"\r\n                              (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\" >\r\n                               <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1; float: right;\" />\r\n                              </ion-col>\r\n                              <!-- <ion-col size=\"2\" *ngIf=\"item2.value.Status == 3\">\r\n                                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col> -->\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status != 3\" (click)=\"onDeleteRoom(item.value.Id,item1.value.Id,item2.value.Id)\">\r\n                                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <ion-row class=\"center-items row-line-local\" *ngIf=\"item2.value.Status == 2 && (item.value.Id == item2.value.BuildIndx) && (item1.value.Id == item2.value.FloorIndx)\">\r\n                              <ion-col size=\"7\"\r\n                              (click)=\"onRoom(item.value.Id,item1.value.Id,item2.value.Id,item2.value.Status, item.value.BuildName)\">\r\n                              <ion-label class=\"headlabel\">{{item2.value.RoomName}}</ion-label>\r\n                            </ion-col>\r\n\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status == 1\"\r\n                                (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\">\r\n                                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <ion-col size=\"3.5\" *ngIf=\"item2.value.Status == 2\"\r\n                              (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\" >\r\n                               <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1; float: left;\" />\r\n                              </ion-col>\r\n                              <!-- <ion-col size=\"2\" *ngIf=\"item2.value.Status == 3\">\r\n                                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col> -->\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status != 3\" (click)=\"onDeleteRoom(item.value.Id,item1.value.Id,item2.value.Id)\">\r\n                                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                            <ion-row class=\"center-items row-line-server\" *ngIf=\"item2.value.Status == 3 && (item.value.Id == item2.value.BuildIndx) && (item1.value.Id == item2.value.FloorIndx)\">\r\n                              <ion-col size=\"7\"\r\n                                (click)=\"onRoom(item.value.Id,item1.value.Id,item2.value.Id,item2.value.Status, item.value.BuildName)\">\r\n                                <ion-label class=\"headlabel\">{{item2.value.RoomName}}</ion-label>\r\n                              </ion-col>\r\n\r\n                              <ion-col size=\"2.5\" *ngIf=\"item2.value.Status == 1\"\r\n                                (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\">\r\n                                <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status == 2\"\r\n                              (click)=\"onSaveRoom(item.value.Id,item1.value.Id,item2.value.Id,m)\" >\r\n                               <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                              <!-- <ion-col size=\"2\" *ngIf=\"item2.value.Status == 3\">\r\n                                <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col> -->\r\n                              <ion-col size=\"1.5\" *ngIf=\"item2.value.Status != 3\" (click)=\"onDeleteRoom(item.value.Id,item1.value.Id,item2.value.Id)\">\r\n                                <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </form>\r\n\r\n                      <!-- <ion-row style=\"margin-bottom: 5%;margin-left: 5%;border-radius: 3%;\" class=\"row-line\"\r\n                        *ngFor=\"let item2 of dataListRoom;\">\r\n                        <ion-col size=\"8\"\r\n                          *ngIf=\"(item.value.Id == item2.BuildIndx) && (item1.value.Id == item2.FloorIndx)\"\r\n                          (click)=\"onRoom(item.value.Id,item1.value.Id,item2.Id)\">\r\n                          <ion-label class=\"headlabel\"> Room {{item2.Id}}</ion-label>\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" *ngIf=\"roomStatus == 1\"\r\n                          (click)=\"onRoom(item.value.Id,item1.value.Id,item2.Id)\">\r\n                          <img src=\"assets/icons/sidssync.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" *ngIf=\"roomStatus == 2\"\r\n                          (click)=\"onRoom(item.value.Id,item1.value.Id,item2.Id)\">\r\n                          <img src=\"assets/icons/check.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                        <ion-col size=\"2\" *ngIf=\"roomStatus == 3\">\r\n                          <img src=\"assets/icons/checkserver.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                        <ion-col size=\"1.5\" *ngIf=\"roomStatus != 3\">\r\n                          <img src=\"assets/icons/Iconmetro-bin.svg\" style=\"zoom: 1;\" />\r\n                        </ion-col>\r\n                      </ion-row> -->\r\n\r\n                    </ion-col>\r\n\r\n                    <ion-col *ngIf=\"item1.value.FloorName == 'Terrace' || item1.value.FloorCondi == '2' || item1.value.FloorCondi == '3'\" disabled=\"true\" size=\"11\" class=\"row-add\" style=\"opacity: 0.5;\">\r\n                      <div style=\"padding: 4px;margin-left: 10px;\">\r\n                        <ion-label class=\"headlabelAdd\">Add Room </ion-label>\r\n                      </div>\r\n                    </ion-col>\r\n\r\n                    <ion-col *ngIf=\"item1.value.FloorName != 'Terrace' && item1.value.FloorCondi != '2' && item1.value.FloorCondi != '3'\" size=\"11\" class=\"row-add\" (click)=\"getdashboardRoomData(item.value.Id,item1.value.Id,0)\">\r\n                      <div style=\"padding: 4px;margin-left: 10px;\">\r\n                        <ion-label class=\"headlabelAdd\">Add Room </ion-label>\r\n                      </div>\r\n                    </ion-col>\r\n\r\n                    <ion-row *ngIf=\"(item1.value.Status == 2 || item1.value.Status == 3) && (item1.value.FloorCondi == 1 || item1.value.FloorCondi == 4) && item1.value.RoomCondition == 1\"\r\n                      [ngClass]=\"(item1.value.FloorClose == 1) ? 'row-line' : (item1.value.FloorClose == 2) ? 'row-line-local' : 'row-line-server'\"  \r\n                      style=\"width: 93%; margin: 15px 0px; padding: 5px;\" (click)=\"getFloorClosingQues(item.value.Id, item1, n, item.value.BuildName)\">\r\n                    <ion-col size=\"1\" class=\"center-items\">\r\n                      <div>\r\n                        <ion-icon name=\"business-outline\" size=\"small\" ></ion-icon>\r\n                      </div>\r\n                    </ion-col>\r\n                    <ion-col size=\"8\" class=\"center-items\" style=\"padding: 5px;\">\r\n                      <ion-row class=\"headlabelSub\">Floor Closing Questions</ion-row>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\" class=\"center-items\">\r\n                      <ion-icon size=\"large\" name=\"chevron-forward-outline\"></ion-icon>\r\n                    </ion-col>\r\n                  </ion-row>\r\n\r\n                  </ion-row>\r\n                  <!-- </ion-col> -->\r\n\r\n                </ion-col>\r\n              </ion-row>\r\n            </form>\r\n\r\n            <ion-row *ngIf=\"item.value.BuildCondi == '2' || item.value.BuildCondi == '3' || item.value.BuildCondi == '5'\" class=\"row-add\" style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%; opacity: 0.5;\">\r\n              <ion-col size=\"1\">\r\n                <div style=\"margin-left: 5px;margin-top: 2px;\">\r\n                  <ion-icon name=\"add-outline\" class=\"iconexpdadd\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"11\" >\r\n                <div style=\"padding: 4px;margin-left: 10px;\">\r\n                  <ion-label class=\"headlabelAdd\"> Add Floor</ion-label>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"item.value.BuildCondi != '2' && item.value.BuildCondi != '3' && item.value.BuildCondi != '5'\" class=\"row-add\" style=\"margin-right: 15px;margin-left: 15px;margin-top: 3%;margin-bottom: 3%;\">\r\n              <ion-col size=\"1\">\r\n                <div style=\"margin-left: 5px;margin-top: 2px;\">\r\n                  <ion-icon name=\"add-outline\" class=\"iconexpdadd\"></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"11\" (click)=\"getdashboardFloorData(item.value.Id,2)\">\r\n                <div style=\"padding: 4px;margin-left: 10px;\">\r\n                  <ion-label class=\"headlabelAdd\"> Add Floor</ion-label>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row *ngIf=\"(item.value.Status == 2 || item.value.Status == 3) && (item.value.BuildCondi == 1 || item.value.BuildCondi == 4 || item.value.BuildCondi == 5) && item.value.FloorCondition == 1\"\r\n            [ngClass]=\"(item.value.ClosingQuestions == 1) ? 'row-line' : (item.value.ClosingQuestions == 2) ? 'row-line-local' : 'row-line-server'\"  \r\n            style=\"width: 93%; margin: 15px; padding: 5px;\" (click)=\"getClosingQues(1, item, i)\">\r\n              <ion-col size=\"1\" class=\"center-items\">\r\n                <div>\r\n                  <ion-icon name=\"business-outline\" size=\"small\" ></ion-icon>\r\n                </div>\r\n              </ion-col>\r\n              <ion-col size=\"8\" class=\"center-items\" style=\"padding: 5px;\">\r\n                <ion-row class=\"headlabelSub\">Building Closing Questions</ion-row>\r\n              </ion-col>\r\n              <ion-col size=\"3\" class=\"center-items\">\r\n                <ion-icon size=\"large\" name=\"chevron-forward-outline\"></ion-icon>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"row-add\" (click)=\"addBuildingData()\">\r\n          <ion-col size=\"1\">\r\n            <div style=\"margin-left: 5px; margin-top: 2px;\">\r\n              <ion-icon name=\"add-outline\" class=\"iconexpdadd\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <div style=\"padding: 4px;margin-left: 10px;\">\r\n              <ion-label class=\"headlabelAdd\">Add Building </ion-label>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </form>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n \r\n\r\n<!-- <ion-footer>\r\n  <ion-row style=\"text-align: center;padding: 10px;background-color: aliceblue;\">\r\n    <ion-col size=\"6\" style=\"text-align: end;margin-bottom: 5%;\">\r\n      <ion-label>Data Saved in Local</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\" style=\"margin-bottom: 5%;\">\r\n      <img src=\"assets/icons/check.svg\" class=\"floImg\">\r\n    </ion-col>\r\n   <ion-col size=\"6\" style=\"text-align: end;\">\r\n      <ion-label>Data Saved in Server</ion-label>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <img src=\"assets/icons/checkserver.svg\" class=\"floImg\">\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-footer> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_building_new-dashboard_new-dashboard_module_ts-es5.js.map