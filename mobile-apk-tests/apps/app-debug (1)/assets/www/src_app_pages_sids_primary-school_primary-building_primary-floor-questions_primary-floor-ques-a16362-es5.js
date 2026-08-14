(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-building_primary-floor-questions_primary-floor-ques-a16362"], {
    /***/
    92766:
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-questions/primary-floor-questions-routing.module.ts ***!
      \******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryFloorQuestionsPageRoutingModule": function PrimaryFloorQuestionsPageRoutingModule() {
          return (
            /* binding */
            _PrimaryFloorQuestionsPageRoutingModule
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


      var _primary_floor_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-floor-questions.page */
      77162);

      var routes = [{
        path: '',
        component: _primary_floor_questions_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryFloorQuestionsPage
      }];

      var _PrimaryFloorQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryFloorQuestionsPageRoutingModule() {
        _classCallCheck(this, PrimaryFloorQuestionsPageRoutingModule);
      });

      _PrimaryFloorQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimaryFloorQuestionsPageRoutingModule);
      /***/
    },

    /***/
    83987:
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-questions/primary-floor-questions.module.ts ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryFloorQuestionsPageModule": function PrimaryFloorQuestionsPageModule() {
          return (
            /* binding */
            _PrimaryFloorQuestionsPageModule
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


      var _primary_floor_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-floor-questions-routing.module */
      92766);
      /* harmony import */


      var _primary_floor_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-floor-questions.page */
      77162);

      var _PrimaryFloorQuestionsPageModule = /*#__PURE__*/_createClass(function PrimaryFloorQuestionsPageModule() {
        _classCallCheck(this, PrimaryFloorQuestionsPageModule);
      });

      _PrimaryFloorQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_floor_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryFloorQuestionsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_primary_floor_questions_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryFloorQuestionsPage]
      })], _PrimaryFloorQuestionsPageModule);
      /***/
    },

    /***/
    77162:
    /*!********************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-questions/primary-floor-questions.page.ts ***!
      \********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryFloorQuestionsPage": function PrimaryFloorQuestionsPage() {
          return (
            /* binding */
            _PrimaryFloorQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_floor_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-floor-questions.page.html */
      72143);
      /* harmony import */


      var _primary_floor_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-floor-questions.page.scss */
      91877);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
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

      var _PrimaryFloorQuestionsPage = /*#__PURE__*/function () {
        function PrimaryFloorQuestionsPage(router, formBuilder, route, alertController, sqliteDB, utilityService, userSessionService, alertService, el, toastController) {
          _classCallCheck(this, PrimaryFloorQuestionsPage);

          this.router = router;
          this.formBuilder = formBuilder;
          this.route = route;
          this.alertController = alertController;
          this.sqliteDB = sqliteDB;
          this.utilityService = utilityService;
          this.userSessionService = userSessionService;
          this.alertService = alertService;
          this.el = el;
          this.toastController = toastController;
          this.floor = [{
            "value": "1",
            "label": "Ground"
          }, {
            "value": "2",
            "label": "First"
          }, {
            "value": "3",
            "label": "Second"
          }, {
            "value": "4",
            "label": "Third"
          }, {
            "value": "5",
            "label": "Fourth"
          }, {
            "value": "6",
            "label": "Fifth"
          }, {
            "value": "7",
            "label": "Terrace"
          }];
          this.floorBackup = [{
            "value": "1",
            "label": "Ground"
          }, {
            "value": "2",
            "label": "First"
          }, {
            "value": "3",
            "label": "Second"
          }, {
            "value": "4",
            "label": "Third"
          }, {
            "value": "5",
            "label": "Fourth"
          }, {
            "value": "6",
            "label": "Fifth"
          }, {
            "value": "7",
            "label": "Terrace"
          }];
          this.condition = [{
            "value": "1",
            "label": "Functional"
          }, {
            "value": "2",
            "label": "Under Construction"
          }, {
            "value": "3",
            "label": "Under Renovation"
          }, {
            "value": "4",
            "label": "Needs Repair"
          }];
          this.roofing = [{
            "value": "1",
            "label": "Concrete (RCC)"
          }, {
            "value": "2",
            "label": "Tiled"
          }, {
            "value": "3",
            "label": "Asbestos"
          }, {
            "value": "4",
            "label": "Tin Sheet"
          }, {
            "value": "5",
            "label": "AC Sheet"
          }, {
            "value": "6",
            "label": "Open"
          }, {
            "value": "7",
            "label": "Partially Open - Concrete/Tiles"
          }];
          this.corridorCondition = [{
            "value": "1",
            "label": "Functional"
          }, {
            "value": "2",
            "label": "Repairs"
          }];
          this.repair = [{
            "value": "1",
            "label": "Whitewashing and Painting"
          }, {
            "value": "2",
            "label": "Replastering"
          }, {
            "value": "3",
            "label": "Reflooring"
          }, {
            "value": "4",
            "label": "Ceiling Plastering"
          }, {
            "value": "5",
            "label": "Floor Patchwork"
          }, {
            "value": "6",
            "label": "Replacement of Doors"
          }, {
            "value": "7",
            "label": "Replacement of Jaalis"
          }, {
            "value": "8",
            "label": "Repair of Doors"
          }, {
            "value": "9",
            "label": "Repair of Jaalis"
          }, {
            "value": "10",
            "label": "Repainting of Doors"
          }, {
            "value": "11",
            "label": "Repainting of Jaalis"
          }];
          this.parapet = [{
            "value": "1",
            "label": "Increase in Length"
          }, {
            "value": "2",
            "label": "Increase in Height"
          }, {
            "value": "3",
            "label": "Whitewashing and Colouwashing"
          }, {
            "value": "4",
            "label": "Replastering"
          }, {
            "value": "5",
            "label": "Brickwork"
          }, {
            "value": "6",
            "label": "None"
          }];
          this.repairStep = [{
            "value": "1",
            "label": "Yes"
          }, {
            "value": "2",
            "label": "No"
          }, {
            "value": "3",
            "label": "No Steps"
          }];
          this.Weathering = [{
            "value": "1",
            "label": "Weathering Course"
          }, {
            "value": "2",
            "label": "Pressed Tiles"
          }, {
            "value": "3",
            "label": "Both"
          }];
          this.dataList = [];
          this.functionalFloor = true;
          this.dataListBuild = [];
        }

        return _createClass(PrimaryFloorQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.username = this.userSessionService.emis_username();
            console.log(this.username);
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.vistId = this.routeData.queryParams.vistId;
            this.buildingId = this.routeData.queryParams.buildingId;
            this.floorId = this.routeData.queryParams.floorId;
            this.status = this.routeData.queryParams.status;
            this.buildName = this.routeData.queryParams.buildName;
            console.log(this.schoolId, this.vistId, this.floorId, this.buildingId, "floor");
            this.udiseCode = this.utilityService.udiseCode; // this.getbuilding()

            this.visitstatus = this.routeData.queryParams.visitstatus;
            this.checkLocalDb(); // this.checkLocalFloor();

            this.presentToastWithOptions(this.buildingId, this.buildName);
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.formBuilder.group({
              "IndexId": "",
              "SchlId": this.schoolId,
              "VistId": this.vistId,
              "BldgIdxId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "BldgId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "FoolrId": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "FloorNum": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              "FloorCondi": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              "FloorSafety": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "ReqParapetWall": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "ParapetWallLength": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "ParapetWallHeight": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "ParapetWallWhiteWash": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "ParapetWallReplasting": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "ParapetWallBrickWork": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "RepairSteps": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "WeatheringReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "FoolrTy": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "FoolrAreReq": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "OutPipY": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(true, null),
              "PipLenNeed": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "RoofCleaYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "CorridorYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "CorriCondi": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "CorriLen": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "CorridorWidth": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "CorriLighFunc": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "CorridorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaWw": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaReplastering": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaReflooring": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaCeilingPlaster": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "AreaFlrPatchwork": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "DoorReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "JaalisReplace": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "DoorRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "JaalisRepair": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "DoorRepaint": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "JaalisRepaint": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "BldOhtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, null),
              "FunBldOhtYn": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null)
            });
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this = this;

            console.log(this.form);

            if (this.form.valid) {
              this.status = 2;
              this.submitted = false;
              var query = 'DELETE FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' + ' And VistId = "' + this.vistId + '"';
              return this.sqliteDB.getDataLocalDB(query).then(function (data) {
                console.log(data, "delete");

                if (data.rowsAffected > 0) {
                  _this.insertLocalDB();
                }

                if (data.rowsAffected == 0) {
                  _this.insertLocalDB();
                }
              });
            } else {
              this.alertService.error("Please Enter Valid Data");
              this.submitted = true;
              this.focusValidator();
            }
          }
        }, {
          key: "insertLocalDB",
          value: function insertLocalDB() {
            var _this2 = this;

            var _a, _b;

            var insertRows = [];

            if (+this.form.value.FloorNum == 7 || +this.form.value.FloorCondi == 2 || +this.form.value.FloorCondi == 3) {
              insertRows.push(["INSERT INTO sidsPrimaryFloorQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, this.schoolId, this.vistId, this.buildingId, this.form.value.BldgIdxId, this.floorId, this.form.value.IndexId ? this.form.value.IndexId : (_a = this.dataList[0]) === null || _a === void 0 ? void 0 : _a.FloorIndx, this.form.value.FloorNum, this.form.value.FloorCondi, 'false', '', '', '', '', '', '', this.form.value.BldOhtYn, this.form.value.FunBldOhtYn, '', '', '', 'true', this.form.value.PipLenNeed, this.form.value.WeatheringReq, this.form.value.RoofCleaYn, 'false', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']]);
              var idbuild = parseInt(this.buildingId) - 100;
              var empty = 0;
              var query3 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorClose = 1, RoomCondition = "' + empty + '" WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + this.floorId + '" And VistId = "' + this.vistId + '"';
              this.sqliteDB.update(query3).then(function (data) {});
            } else {
              insertRows.push(["INSERT INTO sidsPrimaryFloorQuestion VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, this.schoolId, this.vistId, this.buildingId, this.form.value.BldgIdxId, this.floorId, this.form.value.IndexId ? this.form.value.IndexId : (_b = this.dataList[0]) === null || _b === void 0 ? void 0 : _b.FloorIndx, this.form.value.FloorNum, this.form.value.FloorCondi, this.form.value.FloorSafety, this.form.value.ReqParapetWall, this.form.value.ParapetWallLength, this.form.value.ParapetWallHeight, this.form.value.ParapetWallWhiteWash, this.form.value.ParapetWallReplasting, this.form.value.ParapetWallBrickWork, this.form.value.BldOhtYn, this.form.value.FunBldOhtYn, this.form.value.RepairSteps, this.form.value.FoolrTy, this.form.value.FoolrAreReq, this.form.value.OutPipY, this.form.value.PipLenNeed, this.form.value.WeatheringReq, this.form.value.RoofCleaYn, this.form.value.CorridorYn, this.form.value.CorriCondi, this.form.value.CorriLen, this.form.value.CorridorWidth, this.form.value.CorriLighFunc, this.form.value.CorridorRepair, this.form.value.AreaWw, this.form.value.AreaReplastering, this.form.value.AreaReflooring, this.form.value.AreaCeilingPlaster, this.form.value.AreaFlrPatchwork, this.form.value.DoorReplace, this.form.value.JaalisReplace, this.form.value.DoorRepair, this.form.value.JaalisRepair, this.form.value.DoorRepaint, this.form.value.JaalisRepaint]]);

              if (this.form.value.IndexId && (+this.form.value.FloorCondi == 1 || +this.form.value.FloorCondi == 4)) {
                var _idbuild = parseInt(this.buildingId) - 100;

                var _query = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorClose = 2 WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + _idbuild + '" And FloorId = "' + this.floorId + '" And VistId = "' + this.vistId + '"';

                this.sqliteDB.update(_query).then(function (data) {});
              }
            }

            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("Floor Details Stored Locally");
              var idbuild = parseInt(_this2.buildingId) - 100;
              var idfloor = parseInt(_this2.floorId) - 1000;
              var build = parseInt(_this2.buildingId) - 101;
              var buildId = parseInt(_this2.buildingId) - 100;
              var floor = parseInt(_this2.floorId) - 1001;
              var floorId = parseInt(_this2.floorId) - 1000;
              console.log(idbuild, idfloor);
              var name = "";

              if (+_this2.form.value.FloorNum == 1) {
                name = "Ground";
              }

              if (+_this2.form.value.FloorNum == 2) {
                name = "First";
              }

              if (+_this2.form.value.FloorNum == 3) {
                name = "Second";
              }

              if (+_this2.form.value.FloorNum == 4) {
                name = "Third";
              }

              if (+_this2.form.value.FloorNum == 5) {
                name = "Fourth";
              }

              if (+_this2.form.value.FloorNum == 6) {
                name = "Fifth";
              }

              if (+_this2.form.value.FloorNum == 7) {
                name = "Terrace";

                _this2.deleteTerrace(); // let FloorClose =  'UPDATE sidsPrimaryFloorSaveDatas SET FloorClose = 2, RoomCondition ="'+empty+'" WHERE SclId = "' + this.schoolId + '"' +
                // ' And BuildIndx = "' + idbuild + '"' +
                // ' And FloorId = "' + this.floorId + '"';
                // return this.sqliteDB.update(FloorClose).then(rrrr => { console.log("rrrr",rrrr) });

              }

              if (+_this2.form.value.FloorCondi == 2) {
                _this2.deleteTerrace();
              }

              if (+_this2.form.value.FloorCondi == 3) {
                _this2.deleteTerrace();
              }

              var empty = 0;
              console.log("name", name);
              var updateQuery;

              if (+_this2.form.value.FloorNum == 7) {
                updateQuery = 'UPDATE sidsPrimaryFloorSaveDatas SET Status = 2 , RoomCondition ="' + empty + '",FloorName="' + name + '", FloorCondi= "' + _this2.form.value.FloorCondi + '"' + ' WHERE SclId = "' + _this2.schoolId + '"' + ' And BuildIndx = "' + idbuild + '"' + ' And FloorId = "' + _this2.floorId + '"';
              } else {
                updateQuery = 'UPDATE sidsPrimaryFloorSaveDatas SET Status = 2 , FloorName="' + name + '", FloorCondi= "' + _this2.form.value.FloorCondi + '"' + ' WHERE SclId = "' + _this2.schoolId + '"' + ' And BuildIndx = "' + idbuild + '"' + ' And FloorId = "' + _this2.floorId + '"';
              } // if(this.dataList.length > 0){
              //   if(this.dataList[0]?.FloorCondi == 2 || this.dataList[0]?.FloorCondi == 3 || this.dataList[0]?.FloorNum == 7){
              //     let query3 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorClose = 1 WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + this.floorId + '"';
              //     this.sqliteDB.update(query3).then(data => {})
              //   }
              // }


              var query2 = 'UPDATE sidsPrimaryBuildSavesDatas SET FloorCondition = 1 WHERE sidsPrimaryBuildSavesDatas.SclId = "' + _this2.schoolId + '" And sidsPrimaryBuildSavesDatas.BuildingId = "' + _this2.buildingId + '"';
              return _this2.sqliteDB.update(updateQuery).then(function (data) {
                console.log('Update Status');

                if (_this2.status == '3') {
                  _this2.router.navigate(['/tabs/primary-new-dashboard'], {
                    queryParams: {
                      'schoolId': _this2.schoolId,
                      'vistId': _this2.vistId,
                      'expanted': '3',
                      expIdBuild: build,
                      expBuildId: buildId,
                      expIdFloor: floorId,
                      expFloorId: floor,
                      'visitstatus': _this2.visitstatus
                    },
                    skipLocationChange: false
                  });
                }

                if (_this2.status != '3') {
                  _this2.router.navigate(['/tabs/primary-new-dashboard'], {
                    queryParams: {
                      'schoolId': _this2.schoolId,
                      'vistId': _this2.vistId,
                      'expanted': '2',
                      expIdBuild: build,
                      expBuildId: buildId,
                      expIdFloor: floorId,
                      expFloorId: floor,
                      'visitstatus': _this2.visitstatus
                    },
                    skipLocationChange: false
                  });
                }

                return _this2.sqliteDB.update(query2).then(function (build) {
                  console.log("buildUpdate", build);
                });
              });
            });
          }
        }, {
          key: "checkLocalDb",
          value: function checkLocalDb() {
            var _this3 = this;

            var build = 100 + parseInt(this.buildingId);
            var floor = 1000 + parseInt(this.floorId);
            var query = 'SELECT * FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              console.log(data);

              if (data.rows.length > 0) {
                _this3.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this3.dataList.push(data.rows.item(i));
                }

                console.log(_this3.dataList, "dataList");

                _this3.form.patchValue({
                  "IndexId": _this3.dataList[0].FloorIndx,
                  "SchlId": _this3.schoolId,
                  "VistId": _this3.vistId,
                  "BldgIdxId": _this3.dataList[0].BuildingIndex,
                  "BldgId": _this3.buildingId,
                  "FloorIdxId": "",
                  "FloorId": _this3.floorId,
                  "FloorNum": _this3.dataList[0].FloorNum,
                  "FloorCondi": _this3.dataList[0].FloorCondi,
                  "FloorSafety": _this3.dataList[0].FloorSafety == "false" ? false : _this3.dataList[0].FloorSafety == "true" ? true : _this3.dataList[0].FloorSafety,
                  "ReqParapetWall": _this3.dataList[0].ReqParapetWall ? Array.from(_this3.dataList[0].ReqParapetWall.split(",")) : '',
                  "ParapetWallLength": _this3.dataList[0].ParapetWallLength,
                  "ParapetWallHeight": _this3.dataList[0].ParapetWallHeight,
                  "ParapetWallWhiteWash": _this3.dataList[0].ParapetWallWhiteWash,
                  "ParapetWallReplasting": _this3.dataList[0].ParapetWallReplasting,
                  "ParapetWallBrickWork": _this3.dataList[0].ParapetWallBrickWork,
                  "RepairSteps": _this3.dataList[0].RepairSteps,
                  "WeatheringReq": _this3.dataList[0].WeatheringReq,
                  "FoolrTy": _this3.dataList[0].FoolrTy,
                  "FoolrAreReq": _this3.dataList[0].FoolrAreReq,
                  "OutPipY": _this3.dataList[0].OutPipY == "false" ? false : _this3.dataList[0].OutPipY == "true" ? true : _this3.dataList[0].OutPipY,
                  "PipLenNeed": _this3.dataList[0].PipLenNeed,
                  "RoofCleaYn": _this3.dataList[0].RoofCleaYn == "false" ? false : _this3.dataList[0].RoofCleaYn == "true" ? true : _this3.dataList[0].RoofCleaYn,
                  "CorridorYn": _this3.dataList[0].CorridorYn == "false" ? false : _this3.dataList[0].CorridorYn == "true" ? true : _this3.dataList[0].CorridorYn,
                  "CorriCondi": _this3.dataList[0].CorriCondi,
                  "CorriLen": _this3.dataList[0].CorriLen,
                  "CorridorWidth": _this3.dataList[0].CorridorWidth,
                  "CorriLighFunc": _this3.dataList[0].CorriLighFunc,
                  "CorridorRepair": _this3.dataList[0].CorridorRepair ? Array.from(_this3.dataList[0].CorridorRepair.split(",")) : '',
                  "AreaWw": _this3.dataList[0].AreaWw,
                  "AreaReplastering": _this3.dataList[0].AreaReplastering,
                  "AreaReflooring": _this3.dataList[0].AreaReflooring,
                  "AreaCeilingPlaster": _this3.dataList[0].AreaCeilingPlaster,
                  "AreaFlrPatchwork": _this3.dataList[0].AreaFlrPatchwork,
                  "DoorReplace": _this3.dataList[0].DoorReplace,
                  "JaalisReplace": _this3.dataList[0].JaalisReplace,
                  "DoorRepair": _this3.dataList[0].DoorRepair,
                  "JaalisRepair": _this3.dataList[0].JaalisRepair,
                  "DoorRepaint": _this3.dataList[0].DoorRepaint,
                  "JaalisRepaint": _this3.dataList[0].JaalisRepaint,
                  "BldOhtYn": _this3.dataList[0].BldOhtYn == "false" ? false : _this3.dataList[0].BldOhtYn == "true" ? true : _this3.dataList[0].BldOhtYn,
                  "FunBldOhtYn": _this3.dataList[0].FunBldOhtYn
                });
              } else {
                _this3.dataList = [];
                console.log("local data");

                _this3.initialValidator();

                _this3.checkLocalDbBuild();
              }
            });
          }
        }, {
          key: "checkLocalDbBuild",
          value: function checkLocalDbBuild() {
            var _this4 = this;

            var query = 'SELECT * FROM sidsPrimaryBuildingQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                // this.dataActive =true;
                // this.dataTrue = true
                _this4.dataListBuild = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this4.dataListBuild.push(data.rows.item(i));
                }

                _this4.form.patchValue({
                  "BldgIdxId": _this4.dataListBuild[0].BuildingIndex
                });
              }
            });
          }
        }, {
          key: "checkLocalFloor",
          value: function checkLocalFloor() {
            var _this5 = this;

            var query = 'SELECT FloorNum FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataList.push(data.rows.item(i));
                }

                _this5.floor = [];

                _this5.floorBackup.forEach(function (dd) {
                  dataList.forEach(function (ff) {
                    if (dd.value == ff.FloorNum) {} else {
                      _this5.floor.push(dd);
                    }
                  });
                });

                console.log("YYYYYY", _this5.floor);
              } else {
                console.log("OOOOOO", _this5.floor);
                _this5.floor = [];
                _this5.floor = _this5.floorBackup;
              }
            });
          }
        }, {
          key: "goToBack",
          value: function goToBack() {
            var build = parseInt(this.buildingId) - 101;
            var buildId = parseInt(this.buildingId) - 100;
            var floor = parseInt(this.floorId) - 1001;
            var floorId = parseInt(this.floorId) - 1000;

            if (this.status == '3') {
              this.router.navigate(['/tabs/primary-new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '3',
                  expIdBuild: build,
                  expBuildId: buildId,
                  expIdFloor: floorId,
                  expFloorId: floor,
                  'visitstatus': this.visitstatus
                },
                skipLocationChange: false
              });
            }

            if (this.status == '2') {
              this.router.navigate(['/tabs/primary-new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '2',
                  expIdBuild: build,
                  expBuildId: buildId,
                  expIdFloor: floorId,
                  expFloorId: floor,
                  'visitstatus': this.visitstatus
                },
                skipLocationChange: false
              });
            }

            if (this.status == '1') {
              this.router.navigate(['/tabs/primary-new-dashboard'], {
                queryParams: {
                  'schoolId': this.schoolId,
                  'vistId': this.vistId,
                  'expanted': '1',
                  expIdBuild: build,
                  expBuildId: buildId,
                  expIdFloor: floorId,
                  expFloorId: floor,
                  'visitstatus': this.visitstatus
                },
                skipLocationChange: false
              });
            } // this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2' }, skipLocationChange: false });

          }
        }, {
          key: "deleteTerrace",
          value: function deleteTerrace() {
            var _this6 = this;

            debugger;
            var idbuild = parseInt(this.buildingId) - 100;
            var idfloor = parseInt(this.floorId) - 1000;
            var query = 'DELETE FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + idbuild + '"' + ' And FloorIndx = "' + idfloor + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' + ' And VistId = "' + this.vistId + '"';
            var slect = 'SELECT * FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + idbuild + '"' + ' And FloorIndx = "' + idfloor + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(slect).then(function (data) {
              var dataList = [];

              for (var i = 0; i < data.rows.length; i++) {
                dataList.push(data.rows.item(i));
              }

              return _this6.sqliteDB.getDataLocalDB(query).then(function (data) {
                return _this6.sqliteDB.getDataLocalDB(query2).then(function (red) {
                  var _a, _b, _c, _d;

                  console.log("deleteTerrace", data, red, dataList);

                  if ((_a = dataList[0]) === null || _a === void 0 ? void 0 : _a.FloorIndex) {
                    if (dataList.length > 0 && ((_b = dataList[0]) === null || _b === void 0 ? void 0 : _b.FloorIndex)) {
                      var floor_id = parseInt(_this6.floorId) - 1000;
                      var params = {
                        "records": {
                          "IndexId": '',
                          "SchoolId": _this6.schoolId,
                          "VisitId": _this6.vistId,
                          "BuildId": _this6.buildingId,
                          "ToilBuildId": (_c = dataList[0]) === null || _c === void 0 ? void 0 : _c.BuildIndex,
                          "FloorId": _this6.floorId,
                          "ToilFloorId": (_d = dataList[0]) === null || _d === void 0 ? void 0 : _d.FloorIndex
                        }
                      };
                      var selectQuery = 'SELECT * FROM DeleteFloor WHERE schoolId ="' + _this6.schoolId + '" And visitId ="' + _this6.vistId + '" And FloorId ="' + _this6.floorId + '" And FloorIndxId ="' + dataList[0].FloorIndex + '"';
                      return _this6.sqliteDB.getDataLocalDB(selectQuery).then(function (data) {
                        if (data.rows.length == 0) {
                          var datainsert = "INSERT INTO DeleteFloor VALUES (?,?,?,?,?,?,?)";

                          _this6.sqliteDB.insert(datainsert, [null, _this6.schoolId, _this6.vistId, floor_id, JSON.stringify(params), dataList[0].FloorIndx, 1]).then(function (insertres) {});
                        }
                      });
                    }
                  }
                });
              });
            });
          }
        }, {
          key: "onSelectedRoom",
          value: function onSelectedRoom(ev) {
            if (+this.form.value.FloorNum == 7) {
              this.form.controls['RoofCleaYn'].setValue(false);
              this.form.controls['WeatheringReq'].setValue("");
              this.form.controls['BldOhtYn'].setValue(false);
              this.form.controls['FunBldOhtYn'].setValue("");
              this.form.controls['BldOhtYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            } else {
              this.form.controls['RoofCleaYn'].setValue(false);
              this.form.controls['WeatheringReq'].setValue("");
              this.form.controls['BldOhtYn'].setValue(false);
              this.form.controls['BldOhtYn'].setValidators(null);
              this.form.controls['FunBldOhtYn'].setValidators(null);
            }

            this.form.controls['RoofCleaYn'].updateValueAndValidity();
            this.form.controls['WeatheringReq'].updateValueAndValidity();
            this.form.controls['BldOhtYn'].updateValueAndValidity();
            this.form.controls['FunBldOhtYn'].updateValueAndValidity();
          }
        }, {
          key: "onSelecteCondi",
          value: function onSelecteCondi(ev) {
            if (+this.form.value.FloorCondi == 1 || +this.form.value.FloorCondi == 4) {
              this.form.controls['RoofCleaYn'].setValue(false);
              this.form.controls['WeatheringReq'].setValue("");
              this.form.controls['BldOhtYn'].setValue(false);
              this.form.controls['FunBldOhtYn'].setValue("");
              this.form.controls['BldOhtYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            } else {
              this.form.controls['RoofCleaYn'].setValue(false);
              this.form.controls['WeatheringReq'].setValue("");
              this.form.controls['BldOhtYn'].setValue(false);
              this.form.controls['BldOhtYn'].setValidators(null);
              this.form.controls['FunBldOhtYn'].setValidators(null);
            }

            this.form.controls['RoofCleaYn'].updateValueAndValidity();
            this.form.controls['WeatheringReq'].updateValueAndValidity();
            this.form.controls['BldOhtYn'].updateValueAndValidity();
            this.form.controls['FunBldOhtYn'].updateValueAndValidity();
          }
        }, {
          key: "getToggleClass",
          value: function getToggleClass(ev) {
            if (this.form.value.BldOhtYn) {
              this.form.controls['FunBldOhtYn'].setValue("");
              this.form.controls['FunBldOhtYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
            } else {
              this.form.controls['FunBldOhtYn'].setValue("");
              this.form.controls['FunBldOhtYn'].setValidators(null);
            }

            this.form.controls['FunBldOhtYn'].updateValueAndValidity();
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.dataList = [];
            this.form.reset();
            this.initialValidator();

            if (this.toastinstance) {
              this.toastinstance.dismiss();
            }
          }
        }, {
          key: "focusValidator",
          value: function focusValidator() {
            var invalidControl = this.el.nativeElement.querySelector('form .ng-invalid');
            invalidControl.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            }); // invalidControl.scrollTo(50, 0);

            invalidControl.focus();
          }
        }, {
          key: "presentToastWithOptions",
          value: function presentToastWithOptions(buildId, buildName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var text;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (this.toastinstance) {
                      this.toastinstance.dismiss();
                    }

                    text = 'B ' + buildId + ' ' + buildName + ' opened';
                    _context.n = 1;
                    return this.toastController.create({
                      header: text,
                      position: 'bottom',
                      cssClass: 'my-toast',
                      color: 'light',
                      buttons: [{
                        text: 'Dismiss',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 1:
                    this.toastinstance = _context.v;
                    this.toastinstance.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      _PrimaryFloorQuestionsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
        }];
      };

      _PrimaryFloorQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-primary-floor-questions',
        template: _raw_loader_primary_floor_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_floor_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimaryFloorQuestionsPage);
      /***/
    },

    /***/
    91877:
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-questions/primary-floor-questions.page.scss ***!
      \**********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktZmxvb3ItcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQkFBQTtBQUNKOztBQUVFO0VBRUUsaUJBQUE7QUFBSjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJRTtFQUNFLFdBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBR0EsMkJBQUE7QUFISjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhKOztBQU1FO0VBQ0UsYUFBQTtBQUhKOztBQU1FO0VBQ0UsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUFBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0FBSEo7O0FBTUU7OztFQUdFLGVBQUE7RUFDQSxvQkFBQTtBQUhKOztBQU1FOztFQUVFLHFCQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQUhKOztBQU9FLFNBQUE7O0FBR0EsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBUEo7O0FBVUU7RUFDRSxjQUFBO0FBUEo7O0FBV0UsT0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBVEo7O0FBWUU7RUFDRSxjQUFBO0FBVEo7O0FBYUUsV0FBQTs7QUFFQTtFQUNFLHFCQUFBO0FBWEo7O0FBY0U7RUFDRSxjQUFBO0FBWEo7O0FBZUUsWUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBYko7O0FBZ0JFO0VBQ0UsY0FBQTtBQWJKOztBQWlCRSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFmSjs7QUFrQkU7RUFDRSxjQUFBO0FBZko7O0FBbUJFLFFBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWpCSjs7QUFvQkU7RUFDRSxjQUFBO0FBakJKOztBQXFCRSxPQUFBOztBQU1BO0VBQ0UsV0FBQTtBQXZCSjs7QUEwQkU7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQXZCSjs7RUF5QkU7SUFDRSxlQUFBO0lBQ0EsZUFBQTtFQXRCSjs7RUF3QkU7O0lBRUUsZUFBQTtJQUNBLG1CQUFBO0VBckJKO0FBQ0Y7O0FBd0JFO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQXRCSjs7QUE4QkU7RUFDRSxVQUFBO0FBM0JKOztBQThCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFBQSxxQ0FBQTtBQTNCSjs7QUE4QkU7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBM0JKOztBQThCRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsVUFBQTtBQTNCSjs7QUFvQ0U7RUFDRSxXQUFBO0VBQUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsdURBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBakNKOztBQXdDRTtFQUNFLDBCQUFBO0FBckNKOztBQXdDRTtFQUNFLHlCQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBckNOOztBQXdDRTtFQUNHLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBckNMOztBQXdDSTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFyQ1I7O0FBd0NFO0VBQ0UsK0JBQUE7RUFBZ0MsZ0NBQ2hDO0FBckNKOztBQXdDSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBckNOOztBQXVDRTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUFBLGdEQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBcENKOztBQXNDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQW5DSjs7QUFxQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBbENKOztBQXFDRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQWxDSjs7QUFxQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQWxDSjs7QUFxQ0U7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0FBbENKOztBQW9DRTtFQUNFLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNKOztBQW9DRTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakNKOztBQW1DRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFoQ0o7O0FBa0NFO0VBQ0UsYUFBQTtBQS9CSiIsImZpbGUiOiJwcmltYXJ5LWZsb29yLXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luQm90dG9tMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICAubWFyZ2luVG9wMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAubWFyZ2luVG9wNSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLWNvbnRhaW5lciB7XHJcbiAgICAvLyB3aWR0aDogOTMlO1xyXG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmNkLWNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAudGltZWxpbmVUZXh0IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lSWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1hdXRob3Ige1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gICNjZC10aW1lbGluZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICNjZC10aW1lbGluZTo6YmVmb3JlIHtcclxuICAgIC8qIHRoaXMgaXMgdGhlIHZlcnRpY2FsIGxpbmUgKi9cclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMThweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2sge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyZW0gMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtYmxvY2s6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtaWNvbiBpIHtcclxuICAgIGNvbG9yOiAjNGE4N2VlO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtcGljdHVyZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtcGljdHVyZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgY29sb3I6ICMzMDNlNDk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHAsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50OjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypDT0xPUlMqL1xyXG4gIFxyXG4gIFxyXG4gIC8qUE9TSVRJVkUqL1xyXG4gIFxyXG4gIC5wb3NpdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3NpdGl2ZSBpIHtcclxuICAgIGNvbG9yOiAjNGE4N2VlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkNBTE0qL1xyXG4gIFxyXG4gIC5jYWxtIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQzY2VlNjtcclxuICB9XHJcbiAgXHJcbiAgLmNhbG0gaSB7XHJcbiAgICBjb2xvcjogIzQzY2VlNjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypCQUxBTkNFRCovXHJcbiAgXHJcbiAgLmJhbGFuY2VkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzY2Y2MzMztcclxuICB9XHJcbiAgXHJcbiAgLmJhbGFuY2VkIGkge1xyXG4gICAgY29sb3I6ICM2NmNjMzM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qRU5FUkdJWkVEKi9cclxuICBcclxuICAuZW5lcmdpemVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2YwYjg0MDtcclxuICB9XHJcbiAgXHJcbiAgLmVuZXJnaXplZCBpIHtcclxuICAgIGNvbG9yOiAjZjBiODQwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkFTU0VSVElWRSovXHJcbiAgXHJcbiAgLmFzc2VydGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZjRlM2E7XHJcbiAgfVxyXG4gIFxyXG4gIC5hc3NlcnRpdmUgaSB7XHJcbiAgICBjb2xvcjogI2VmNGUzYTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypST1lBTCovXHJcbiAgXHJcbiAgLnJveWFsIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzhhNmRlOTtcclxuICB9XHJcbiAgXHJcbiAgLnJveWFsIGkge1xyXG4gICAgY29sb3I6ICM4YTZkZTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qREFSSyovXHJcbiAgXHJcbiAgLy8gLmRhcmsge1xyXG4gIC8vICAgYm9yZGVyLWNvbG9yOiAjNDQ0O1xyXG4gIC8vIH1cclxuICBcclxuICAuZGFyayBpIHtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLXJlYWQtbW9yZSxcclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1kYXRlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2Vjb25kYXJ5IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLWxhYmVsIHtcclxuICAgIC8vIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLnZhbGlkLWNsciB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWVzLXR4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dFt0eXBlPVwiZGF0ZVwiXTpub3QoLmhhcy12YWx1ZSk6YmVmb3Jle1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpO1xyXG4gIH0gXHJcbiAgXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjEuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1wYWRkaW5nIHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi1zZWxlY3Qge1xyXG4gIC8vICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAvLyAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC8vICAgYm9yZGVyLWJvdHRvbTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4OCk7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC5pbnB1dC1jbHIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpIDFweCBzb2xpZDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmctbGVmdDowcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi1pbnB1dCB7XHJcbiAgLy8gICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICBcclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgICAvKiBtYXJnaW46IDAlOyAqL1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW9uLW5vLXBhZGRpbmd7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjRGQTtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW9uLW5vLXBhZGRpbmctcXVlc3Rpb257XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRERFRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgLnNlbGVjdCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO3doaXRlLXNwYWNlOiBcclxuICAgIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWRkIHtcclxuICAgICAgY29sb3I6IGFsaWNlYmx1ZTsgXHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZm9vdGVyLXNhdmUge1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcclxuICB9XHJcbiAgLmZvb3Rlci1ub3Qge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjMjMxNTtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgfVxyXG4gIC5mb290ZXItdmVyaWZpZWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkOGYyNjtcclxuICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICB9XHJcbiAgXHJcbiAgLnNpZHNWaWV3e1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmRhcmsge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjOEI2N0IzO1xyXG4gICAgY29sb3I6ICM4QjY3QjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWVzQ29sb3J7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGNEZBO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmdDaGVja3tcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjRkZGRkZGO1xyXG4gIH1cclxuICBpb24tc2VsZWN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5NCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QjY3QjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBpb24tdG9nZ2xle1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4QjY3QjM7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    72143:
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-building/primary-floor-questions/primary-floor-questions.page.html ***!
      \************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Floor Questions ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3; align-items: center;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Floor General Questions</ion-label>\r\n    </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n    <div>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" >\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              1\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Which Floor?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FloorNum\"\r\n                style=\"max-width: 100% !important;\" (ionChange)=\"onSelectedRoom($event)\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of floor\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['FloorNum'].errors?.required && (form.controls['FloorNum'].dirty || form.controls['FloorNum'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              2\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Floor condition<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FloorCondi\"\r\n                style=\"max-width: 100% !important;\" (ionChange)=\"onSelecteCondi($event)\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of condition\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['FloorCondi'].hasError('required') && (form.controls['FloorCondi'].dirty || form.controls['FloorCondi'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7' && (form.value.FloorCondi == 1 || form.value.FloorCondi == 4)\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             3\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Is there a need for cleaning of roof surface?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                    <div *ngIf=\"form.value.RoofCleaYn\"> Yes</div>\r\n                    <div *ngIf=\"!form.value.RoofCleaYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.RoofCleaYn?true:false}}\" formControlName=\"RoofCleaYn\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['RoofCleaYn'].hasError('required') && (form.controls['RoofCleaYn'].dirty || form.controls['RoofCleaYn'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7' && (form.value.FloorCondi == 1 || form.value.FloorCondi == 4)\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n              4\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Is there a need for weathering course or pressed tiles in the terrace?<span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WeatheringReq\"\r\n                style=\"max-width: 100% !important;\">\r\n                <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of Weathering\"> {{item1.label}}\r\n                </ion-select-option>\r\n                </ion-select>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['WeatheringReq'].hasError('required') && (form.controls['WeatheringReq'].dirty || form.controls['WeatheringReq'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7' && (form.value.FloorCondi == 1 || form.value.FloorCondi == 4)\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             5\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Does the building have an overhead tank? <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-row>\r\n                  <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                    <div *ngIf=\"form.value.BldOhtYn\"> Yes</div>\r\n                    <div *ngIf=\"!form.value.BldOhtYn\"> No</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"3\">\r\n                    <ion-toggle (ionChange)=\"getToggleClass($event)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.BldOhtYn?true:false}}\" formControlName=\"BldOhtYn\">\r\n                    </ion-toggle>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"submitted && form.controls['BldOhtYn'].hasError('required') && (form.controls['BldOhtYn'].dirty || form.controls['BldOhtYn'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n              </ion-col>\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldOhtYn && form.value.FloorNum =='7'\">\r\n\r\n        <div ng-repeat=\"activity in timeline\">\r\n          <div class=\"timeline-point-track-container\">\r\n            <div class=\"cd-timeline-picture dark\">\r\n             5A\r\n            </div>\r\n            <ion-row class=\"cd-timeline-content\">\r\n              <ion-col size=\"12\" class=\"quesColor\">\r\n                <ion-label> Number of Functional OHTs <span style=\"color:red\">*</span></ion-label>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"FunBldOhtYn\" \r\n                maxlength=\"1\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                </ion-input>\r\n                <ion-row>\r\n                  <p class=\"error-message\"\r\n                    *ngIf=\"form.controls['FunBldOhtYn'].hasError('required') && (form.controls['FunBldOhtYn'].dirty || form.controls['FunBldOhtYn'].touched)\">\r\n                    Field is required</p>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <p class=\"error-message\" *ngIf=\"form.controls.FunBldOhtYn.errors?.pattern\">Please enter a number with one value after decimal point\r\n                  </p>\r\n                </ion-row>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-building_primary-floor-questions_primary-floor-ques-a16362-es5.js.map