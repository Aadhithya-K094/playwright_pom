(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_sids_primary-school_primary-building_primary-floor-closing-questions_primary-fl-729572"], {
    /***/
    29555:
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-closing-questions/primary-floor-closing-questions-routing.module.ts ***!
      \**********************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryFloorClosingQuestionsPageRoutingModule": function PrimaryFloorClosingQuestionsPageRoutingModule() {
          return (
            /* binding */
            _PrimaryFloorClosingQuestionsPageRoutingModule
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


      var _primary_floor_closing_questions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-floor-closing-questions.page */
      72769);

      var routes = [{
        path: '',
        component: _primary_floor_closing_questions_page__WEBPACK_IMPORTED_MODULE_0__.PrimaryFloorClosingQuestionsPage
      }];

      var _PrimaryFloorClosingQuestionsPageRoutingModule = /*#__PURE__*/_createClass(function PrimaryFloorClosingQuestionsPageRoutingModule() {
        _classCallCheck(this, PrimaryFloorClosingQuestionsPageRoutingModule);
      });

      _PrimaryFloorClosingQuestionsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrimaryFloorClosingQuestionsPageRoutingModule);
      /***/
    },

    /***/
    48645:
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-closing-questions/primary-floor-closing-questions.module.ts ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryFloorClosingQuestionsPageModule": function PrimaryFloorClosingQuestionsPageModule() {
          return (
            /* binding */
            _PrimaryFloorClosingQuestionsPageModule
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


      var _primary_floor_closing_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./primary-floor-closing-questions-routing.module */
      29555);
      /* harmony import */


      var _primary_floor_closing_questions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-floor-closing-questions.page */
      72769);

      var _PrimaryFloorClosingQuestionsPageModule = /*#__PURE__*/_createClass(function PrimaryFloorClosingQuestionsPageModule() {
        _classCallCheck(this, PrimaryFloorClosingQuestionsPageModule);
      });

      _PrimaryFloorClosingQuestionsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _primary_floor_closing_questions_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrimaryFloorClosingQuestionsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_primary_floor_closing_questions_page__WEBPACK_IMPORTED_MODULE_1__.PrimaryFloorClosingQuestionsPage]
      })], _PrimaryFloorClosingQuestionsPageModule);
      /***/
    },

    /***/
    72769:
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-closing-questions/primary-floor-closing-questions.page.ts ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrimaryFloorClosingQuestionsPage": function PrimaryFloorClosingQuestionsPage() {
          return (
            /* binding */
            _PrimaryFloorClosingQuestionsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_primary_floor_closing_questions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./primary-floor-closing-questions.page.html */
      5639);
      /* harmony import */


      var _primary_floor_closing_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./primary-floor-closing-questions.page.scss */
      29852);
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

      var _PrimaryFloorClosingQuestionsPage = /*#__PURE__*/function () {
        function PrimaryFloorClosingQuestionsPage(router, formBuilder, route, alertController, sqliteDB, utilityService, userSessionService, alertService, el, toastController) {
          _classCallCheck(this, PrimaryFloorClosingQuestionsPage);

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
          this.functionalFloor = true;
        }

        return _createClass(PrimaryFloorClosingQuestionsPage, [{
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
              "FloorNum": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
              "FloorCondi": new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null),
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

            debugger;
            console.log("Form", this.form);

            if (this.form.valid) {
              this.submitted = false;
              var idbuild = parseInt(this.buildingId) - 100;
              var idfloor = parseInt(this.floorId) - 1000;
              var build = parseInt(this.buildingId) - 101;
              var buildId = parseInt(this.buildingId) - 100;
              var floor = parseInt(this.floorId) - 1001;
              var floorId = parseInt(this.floorId) - 1000;
              var query = 'UPDATE sidsPrimaryFloorQuestion SET FloorSafety ="' + this.form.value.FloorSafety + '", ReqParapetWall = "' + this.form.value.ReqParapetWall + '", ParapetWallLength = "' + this.form.value.ParapetWallLength + '", ParapetWallHeight = "' + this.form.value.ParapetWallHeight + '", ParapetWallWhiteWash = "' + this.form.value.ParapetWallWhiteWash + '", ParapetWallReplasting = "' + this.form.value.ParapetWallReplasting + '", ParapetWallBrickWork = "' + this.form.value.ParapetWallBrickWork + '", RepairSteps = "' + this.form.value.RepairSteps + '", WeatheringReq = "' + this.form.value.WeatheringReq + '", FoolrTy = "' + this.form.value.FoolrTy + '", FoolrAreReq = "' + this.form.value.FoolrAreReq + '", OutPipY = "' + this.form.value.OutPipY + '", PipLenNeed = "' + this.form.value.PipLenNeed + '", RoofCleaYn = "' + this.form.value.RoofCleaYn + '", CorridorYn = "' + this.form.value.CorridorYn + '", CorriCondi = "' + this.form.value.CorriCondi + '", CorriLen = "' + this.form.value.CorriLen + '", CorridorWidth = "' + this.form.value.CorridorWidth + '", CorriLighFunc = "' + this.form.value.CorriLighFunc + '", CorridorRepair = "' + this.form.value.CorridorRepair + '", AreaWw = "' + this.form.value.AreaWw + '", AreaReplastering = "' + this.form.value.AreaReplastering + '", AreaReflooring = "' + this.form.value.AreaReflooring + '", AreaCeilingPlaster = "' + this.form.value.AreaCeilingPlaster + '", AreaFlrPatchwork = "' + this.form.value.AreaFlrPatchwork + '", DoorReplace = "' + this.form.value.DoorReplace + '", JaalisReplace = "' + this.form.value.JaalisReplace + '", DoorRepair = "' + this.form.value.DoorRepair + '", JaalisRepair = "' + this.form.value.JaalisRepair + '", DoorRepaint = "' + this.form.value.DoorRepaint + '", JaalisRepaint = "' + this.form.value.JaalisRepaint + '", BldOhtYn = "' + this.form.value.BldOhtYn + '", FunBldOhtYn = "' + this.form.value.FunBldOhtYn + '" WHERE sidsPrimaryFloorQuestion.SclId = "' + this.schoolId + '" And sidsPrimaryFloorQuestion.BuildingId = "' + this.buildingId + '" And sidsPrimaryFloorQuestion.VistId = "' + this.vistId + '" And sidsPrimaryFloorQuestion.FloorId = "' + this.floorId + '"';
              var query2 = 'UPDATE sidsPrimaryFloorSaveDatas SET FloorClose = 2, Status = 2 WHERE SclId = "' + this.schoolId + '" And BuildIndx = "' + idbuild + '" And FloorId = "' + this.floorId + '"';
              console.log(query, query2);
              return this.sqliteDB.update(query).then(function (data) {
                return _this.sqliteDB.update(query2).then(function (data) {
                  _this.alertService.success("Saved Successfully");

                  if (_this.status == '3') {
                    _this.router.navigate(['/tabs/primary-new-dashboard'], {
                      queryParams: {
                        'schoolId': _this.schoolId,
                        'vistId': _this.vistId,
                        'expanted': '3',
                        expIdBuild: build,
                        expBuildId: buildId,
                        expIdFloor: floorId,
                        expFloorId: floor,
                        'visitstatus': _this.visitstatus
                      },
                      skipLocationChange: false
                    });
                  }

                  if (_this.status != '3') {
                    _this.router.navigate(['/tabs/primary-new-dashboard'], {
                      queryParams: {
                        'schoolId': _this.schoolId,
                        'vistId': _this.vistId,
                        'expanted': '2',
                        expIdBuild: build,
                        expBuildId: buildId,
                        expIdFloor: floorId,
                        expFloorId: floor,
                        'visitstatus': _this.visitstatus
                      },
                      skipLocationChange: false
                    });
                  }
                });
              });
            } else {
              this.alertService.error('Please Fill all the Required Fields');
              this.submitted = true;
              this.focusValidator();
            }
          }
        }, {
          key: "checkLocalDb",
          value: function checkLocalDb() {
            var _this2 = this;

            var build = 100 + parseInt(this.buildingId);
            var floor = 1000 + parseInt(this.floorId);
            var query = 'SELECT * FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              console.log(data);

              if (data.rows.length > 0) {
                _this2.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this2.dataList.push(data.rows.item(i));
                }

                console.log(_this2.dataList, "dat aList");

                _this2.form.patchValue({
                  "IndexId": _this2.dataList[0].IndexId,
                  "SchlId": _this2.schoolId,
                  "VistId": _this2.vistId,
                  "BldgIdxId": "",
                  "BldgId": _this2.buildingId,
                  "FloorIdxId": "",
                  "FloorId": _this2.floorId,
                  "FloorNum": _this2.dataList[0].FloorNum,
                  "FloorCondi": _this2.dataList[0].FloorCondi,
                  "FloorSafety": _this2.dataList[0].FloorSafety == "false" ? false : _this2.dataList[0].FloorSafety == "true" ? true : _this2.dataList[0].FloorSafety,
                  "ReqParapetWall": _this2.dataList[0].ReqParapetWall ? Array.from(_this2.dataList[0].ReqParapetWall.split(",")) : '',
                  "ParapetWallLength": _this2.dataList[0].ParapetWallLength,
                  "ParapetWallHeight": _this2.dataList[0].ParapetWallHeight,
                  "ParapetWallWhiteWash": _this2.dataList[0].ParapetWallWhiteWash,
                  "ParapetWallReplasting": _this2.dataList[0].ParapetWallReplasting,
                  "ParapetWallBrickWork": _this2.dataList[0].ParapetWallBrickWork,
                  "RepairSteps": _this2.dataList[0].RepairSteps,
                  "FoolrTy": _this2.dataList[0].FoolrTy,
                  "FoolrAreReq": _this2.dataList[0].FoolrAreReq,
                  "OutPipY": _this2.dataList[0].OutPipY == "false" ? false : _this2.dataList[0].OutPipY == "true" ? true : _this2.dataList[0].OutPipY,
                  "PipLenNeed": _this2.dataList[0].PipLenNeed,
                  "WeatheringReq": _this2.dataList[0].WeatheringReq,
                  "RoofCleaYn": _this2.dataList[0].RoofCleaYn == "false" ? false : _this2.dataList[0].RoofCleaYn == "true" ? true : _this2.dataList[0].RoofCleaYn,
                  "CorridorYn": _this2.dataList[0].CorridorYn == "false" ? false : _this2.dataList[0].CorridorYn == "true" ? true : _this2.dataList[0].CorridorYn,
                  "CorriCondi": _this2.dataList[0].CorriCondi,
                  "CorriLen": _this2.dataList[0].CorriLen,
                  "CorridorWidth": _this2.dataList[0].CorridorWidth,
                  "CorriLighFunc": _this2.dataList[0].CorriLighFunc,
                  "CorridorRepair": _this2.dataList[0].CorridorRepair ? Array.from(_this2.dataList[0].CorridorRepair.split(",")) : '',
                  "AreaWw": _this2.dataList[0].AreaWw,
                  "AreaReplastering": _this2.dataList[0].AreaReplastering,
                  "AreaReflooring": _this2.dataList[0].AreaReflooring,
                  "AreaCeilingPlaster": _this2.dataList[0].AreaCeilingPlaster,
                  "AreaFlrPatchwork": _this2.dataList[0].AreaFlrPatchwork,
                  "DoorReplace": _this2.dataList[0].DoorReplace,
                  "JaalisReplace": _this2.dataList[0].JaalisReplace,
                  "DoorRepair": _this2.dataList[0].DoorRepair,
                  "JaalisRepair": _this2.dataList[0].JaalisRepair,
                  "DoorRepaint": _this2.dataList[0].DoorRepaint,
                  "JaalisRepaint": _this2.dataList[0].JaalisRepaint,
                  "BldOhtYn": _this2.dataList[0].BldOhtYn == "false" ? false : _this2.dataList[0].BldOhtYn == "true" ? true : _this2.dataList[0].BldOhtYn,
                  "FunBldOhtYn": _this2.dataList[0].FunBldOhtYn
                });

                if (_this2.form.value.FoolrTy == "") {
                  _this2.form.controls['FoolrTy'].setValidators(null);

                  _this2.form.controls['FoolrTy'].updateValueAndValidity();
                }

                if (_this2.form.value.PipLenNeed == "") {
                  _this2.form.controls['PipLenNeed'].setValidators(null);

                  _this2.form.controls['PipLenNeed'].updateValueAndValidity();
                }

                if (+_this2.form.value.FloorCondi == 2) {
                  _this2.functionalFloor = false;
                }

                if (_this2.form.value.CorridorRepair) {
                  if (_this2.form.value.CorridorRepair.length > 0) {
                    _this2.getOnFunRepair(_this2.form.value.CorridorRepair, 1);
                  }
                }

                if (_this2.form.value.ReqParapetWall) {
                  if (_this2.form.value.ReqParapetWall.length > 0) {
                    _this2.getOnFunRepair(_this2.form.value.ReqParapetWall, 2);
                  }
                } // Abdullah


                if (+_this2.form.value.FoolrTy == 6 || +_this2.form.value.FoolrTy == 7) {
                  _this2.form.controls['FoolrTy'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);

                  _this2.form.controls['FoolrTy'].updateValueAndValidity();
                }

                if (+_this2.form.value.CorridorYn != 7) {
                  _this2.form.controls['CorridorYn'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);

                  _this2.form.controls['CorridorYn'].updateValueAndValidity();
                }
              } else {
                console.log("local data");

                _this2.initialValidator();
              }
            });
          }
        }, {
          key: "checkLocalFloor",
          value: function checkLocalFloor() {
            var _this3 = this;

            var query = 'SELECT FloorNum FROM sidsPrimaryFloorQuestion' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildingId = "' + this.buildingId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                var dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  dataList.push(data.rows.item(i));
                }

                _this3.floor = [];

                _this3.floorBackup.forEach(function (dd) {
                  dataList.forEach(function (ff) {
                    if (dd.value == ff.FloorNum) {} else {
                      _this3.floor.push(dd);
                    }
                  });
                });

                console.log("YYYYYY", _this3.floor);
              } else {
                console.log("OOOOOO", _this3.floor);
                _this3.floor = [];
                _this3.floor = _this3.floorBackup;
              }
            });
          }
        }, {
          key: "onSelectCondition",
          value: function onSelectCondition(event, id) {
            console.log("DropDown", event, id);

            if (id == 3) {
              if (+this.form.value.FoolrTy == 6 || +this.form.value.FoolrTy == 7) {
                this.form.controls['FoolrAreReq'].setValue("");
                this.form.controls['FoolrAreReq'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              } else {
                this.form.controls['FoolrAreReq'].setValidators(null);
              }

              this.form.controls['FoolrAreReq'].updateValueAndValidity();
            }

            if (id == 4) {
              if (+this.form.value.CorriCondi == 1) {
                this.floorRepair = false;
                this.form.controls['CorridorRepair'].setValidators(null);
              } else {
                this.floorRepair = true;

                if (this.form.value.CorridorYn) {
                  this.form.controls['CorridorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                }
              }

              this.form.controls['CorridorRepair'].setValue("");
              this.form.controls['CorridorRepair'].updateValueAndValidity();
            }

            if (id == 5) {
              if (this.form.value.CorridorRepair == 1) {} else {}
            }
          }
        }, {
          key: "onToggleClass",
          value: function onToggleClass(event, id) {
            console.log("RadioButton", event, id);

            if (id == 1) {
              if (this.form.value.OutPipY == false) {
                this.form.controls['PipLenNeed'].setValue("");
                this.form.controls['PipLenNeed'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              } else {
                this.form.controls['PipLenNeed'].setValue("");
                this.form.controls['PipLenNeed'].setValidators(null);
              }

              this.form.controls['PipLenNeed'].updateValueAndValidity();
            }

            if (id == 2) {
              if (this.form.value.CorridorYn) {
                this.form.controls['CorriLen'].setValue("");
                this.form.controls['CorriLen'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['CorridorWidth'].setValue("");
                this.form.controls['CorridorWidth'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['CorriLighFunc'].setValue("");
                this.form.controls['CorriLighFunc'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['CorriCondi'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['CorridorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required); // this.form.controls['CorriObstYn'].setValue(false);
              } else {
                this.form.controls['CorriLen'].setValue("");
                this.form.controls['CorriLen'].setValidators(null);
                this.form.controls['CorridorWidth'].setValue("");
                this.form.controls['CorridorWidth'].setValidators(null);
                this.form.controls['CorriLighFunc'].setValue("");
                this.form.controls['CorriLighFunc'].setValidators(null);
                this.form.controls['CorriCondi'].setValidators(null);
                this.form.controls['CorridorRepair'].setValidators(null); // this.form.controls['CorriObstYn'].setValue(false);
                // this.form.controls['CorriObstYn'].setValidators(null);
              }

              this.form.controls['CorriLen'].updateValueAndValidity();
              this.form.controls['CorridorWidth'].updateValueAndValidity();
              this.form.controls['CorriLighFunc'].updateValueAndValidity();
              this.form.controls['CorriCondi'].setValue("");
              this.form.controls['CorridorRepair'].setValue("");
              this.form.controls['CorriCondi'].updateValueAndValidity();
              this.form.controls['CorridorRepair'].updateValueAndValidity();
              this.form.controls['AreaWw'].setValue("");
              this.form.controls['AreaReplastering'].setValue("");
              this.form.controls['AreaReflooring'].setValue("");
              this.form.controls['AreaCeilingPlaster'].setValue("");
              this.form.controls['AreaFlrPatchwork'].setValue("");
              this.form.controls['DoorReplace'].setValue("");
              this.form.controls['JaalisReplace'].setValue("");
              this.form.controls['DoorRepair'].setValue("");
              this.form.controls['JaalisRepair'].setValue("");
              this.form.controls['DoorRepaint'].setValue("");
              this.form.controls['JaalisRepaint'].setValue("");
              this.form.controls['ParapetWallLength'].setValue("");
              this.form.controls['ParapetWallHeight'].setValue("");
              this.form.controls['ParapetWallWhiteWash'].setValue("");
              this.form.controls['ParapetWallReplasting'].setValue("");
              this.form.controls['ParapetWallBrickWork'].setValue("");
              this.form.controls['AreaWw'].setValidators(null);
              this.form.controls['AreaReplastering'].setValidators(null);
              this.form.controls['AreaReflooring'].setValidators(null);
              this.form.controls['AreaCeilingPlaster'].setValidators(null);
              this.form.controls['AreaFlrPatchwork'].setValidators(null);
              this.form.controls['DoorReplace'].setValidators(null);
              this.form.controls['JaalisReplace'].setValidators(null);
              this.form.controls['DoorRepair'].setValidators(null);
              this.form.controls['JaalisRepair'].setValidators(null);
              this.form.controls['DoorRepaint'].setValidators(null);
              this.form.controls['JaalisRepaint'].setValidators(null);
              this.form.controls['ParapetWallLength'].setValidators(null);
              this.form.controls['ParapetWallHeight'].setValidators(null);
              this.form.controls['ParapetWallWhiteWash'].setValidators(null);
              this.form.controls['ParapetWallReplasting'].setValidators(null);
              this.form.controls['ParapetWallBrickWork'].setValidators(null);
              this.form.controls['AreaWw'].updateValueAndValidity();
              this.form.controls['AreaReplastering'].updateValueAndValidity();
              this.form.controls['AreaReflooring'].updateValueAndValidity();
              this.form.controls['AreaCeilingPlaster'].updateValueAndValidity();
              this.form.controls['AreaFlrPatchwork'].updateValueAndValidity();
              this.form.controls['DoorReplace'].updateValueAndValidity();
              this.form.controls['JaalisReplace'].updateValueAndValidity();
              this.form.controls['DoorRepair'].updateValueAndValidity();
              this.form.controls['JaalisRepair'].updateValueAndValidity();
              this.form.controls['DoorRepaint'].updateValueAndValidity();
              this.form.controls['JaalisRepaint'].updateValueAndValidity();
              this.form.controls['ParapetWallLength'].updateValueAndValidity();
              this.form.controls['ParapetWallHeight'].updateValueAndValidity();
              this.form.controls['ParapetWallWhiteWash'].updateValueAndValidity();
              this.form.controls['ParapetWallReplasting'].updateValueAndValidity();
              this.form.controls['ParapetWallBrickWork'].updateValueAndValidity(); // this.form.controls['CorriObstYn'].updateValueAndValidity();
            }

            if (id == 3) {
              if (this.form.value.FloorSafety == true) {
                this.form.controls['ReqParapetWall'].setValue("");
                this.form.controls['ReqParapetWall'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
              } else {
                this.form.controls['ReqParapetWall'].setValue("");
                this.form.controls['ReqParapetWall'].setValidators(null);
              }

              this.form.controls['ReqParapetWall'].updateValueAndValidity();
            }

            if (id == 4) {
              if (this.form.value.FloorNum != '1') {
                if (this.form.value.FloorSafety) {
                  this.form.controls['ReqParapetWall'].setValue("");
                  this.form.controls['ReqParapetWall'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                } else {
                  this.form.controls['ReqParapetWall'].setValue("");
                  this.form.controls['ReqParapetWall'].setValidators(null);
                }

                this.form.controls['ParapetWallLength'].setValue("");
                this.form.controls['ParapetWallHeight'].setValue("");
                this.form.controls['ParapetWallWhiteWash'].setValue("");
                this.form.controls['ParapetWallReplasting'].setValue("");
                this.form.controls['ParapetWallBrickWork'].setValue("");
                this.form.controls['ParapetWallLength'].setValidators(null);
                this.form.controls['ParapetWallHeight'].setValidators(null);
                this.form.controls['ParapetWallWhiteWash'].setValidators(null);
                this.form.controls['ParapetWallReplasting'].setValidators(null);
                this.form.controls['ParapetWallBrickWork'].setValidators(null);
                this.form.controls['ParapetWallLength'].updateValueAndValidity();
                this.form.controls['ParapetWallHeight'].updateValueAndValidity();
                this.form.controls['ParapetWallWhiteWash'].updateValueAndValidity();
                this.form.controls['ParapetWallReplasting'].updateValueAndValidity();
                this.form.controls['ParapetWallBrickWork'].updateValueAndValidity();
                this.form.controls['ReqParapetWall'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "onFunRepair",
          value: function onFunRepair(event, id) {
            if (id == 1) {
              console.log("onFunRepair", event);
              this.repairActive1 = false;
              this.repairActive2 = false;
              this.repairActive3 = false;
              this.repairActive4 = false;
              this.repairActive5 = false;
              this.repairActive6 = false;
              this.repairActive7 = false;
              this.repairActive8 = false;
              this.repairActive9 = false;
              this.repairActive10 = false;
              this.repairActive11 = false;

              for (var i = 0; i <= event.length; i++) {
                if (event[i] == "Whitewashing and Painting") {
                  this.repairActive1 = true;
                }

                if (event[i] == "Replastering") {
                  this.repairActive2 = true;
                }

                if (event[i] == "Reflooring") {
                  this.repairActive3 = true;
                }

                if (event[i] == "Ceiling Plastering") {
                  this.repairActive4 = true;
                }

                if (event[i] == "Floor Patchwork") {
                  this.repairActive5 = true;
                }

                if (event[i] == "Replacement of Doors") {
                  this.repairActive6 = true;
                }

                if (event[i] == "Replacement of Jaalis") {
                  this.repairActive7 = true;
                }

                if (event[i] == "Repair of Doors") {
                  this.repairActive8 = true;
                }

                if (event[i] == "Repair of Jaalis") {
                  this.repairActive9 = true;
                }

                if (event[i] == "Repainting of Doors") {
                  this.repairActive10 = true;
                }

                if (event[i] == "Repainting of Jaalis") {
                  this.repairActive11 = true;
                }
              }

              if (this.repairActive1) {
                // this.form.controls['AreaWw'].setValue("");
                this.form.controls['AreaWw'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['AreaWw'].updateValueAndValidity();
              } else {
                this.form.controls['AreaWw'].setValue("");
                this.form.controls['AreaWw'].setValidators(null);
                this.form.controls['AreaWw'].updateValueAndValidity();
              }

              if (this.repairActive2) {
                // this.form.controls['AreaReplastering'].setValue("");
                this.form.controls['AreaReplastering'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
              } else {
                this.form.controls['AreaReplastering'].setValue("");
                this.form.controls['AreaReplastering'].setValidators(null);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
              }

              if (this.repairActive3) {
                // this.form.controls['AreaReflooring'].setValue("");
                this.form.controls['AreaReflooring'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
              } else {
                this.form.controls['AreaReflooring'].setValue("");
                this.form.controls['AreaReflooring'].setValidators(null);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
              }

              if (this.repairActive4) {
                // this.form.controls['AreaCeilingPlaster'].setValue("");
                this.form.controls['AreaCeilingPlaster'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['AreaCeilingPlaster'].updateValueAndValidity();
              } else {
                this.form.controls['AreaCeilingPlaster'].setValue("");
                this.form.controls['AreaCeilingPlaster'].setValidators(null);
                this.form.controls['AreaCeilingPlaster'].updateValueAndValidity();
              }

              if (this.repairActive5) {
                // this.form.controls['AreaFlrPatchwork'].setValue("");
                this.form.controls['AreaFlrPatchwork'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['AreaFlrPatchwork'].updateValueAndValidity();
              } else {
                this.form.controls['AreaFlrPatchwork'].setValue("");
                this.form.controls['AreaFlrPatchwork'].setValidators(null);
                this.form.controls['AreaFlrPatchwork'].updateValueAndValidity();
              }

              if (this.repairActive6) {
                // this.form.controls['DoorReplace'].setValue("");
                this.form.controls['DoorReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['DoorReplace'].updateValueAndValidity();
              } else {
                this.form.controls['DoorReplace'].setValue("");
                this.form.controls['DoorReplace'].setValidators(null);
                this.form.controls['DoorReplace'].updateValueAndValidity();
              }

              if (this.repairActive7) {
                // this.form.controls['JaalisReplace'].setValue("");
                this.form.controls['JaalisReplace'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['JaalisReplace'].updateValueAndValidity();
              } else {
                this.form.controls['JaalisReplace'].setValue("");
                this.form.controls['JaalisReplace'].setValidators(null);
                this.form.controls['JaalisReplace'].updateValueAndValidity();
              }

              if (this.repairActive8) {
                // this.form.controls['DoorRepair'].setValue("");
                this.form.controls['DoorRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['DoorRepair'].updateValueAndValidity();
              } else {
                this.form.controls['DoorRepair'].setValue("");
                this.form.controls['DoorRepair'].setValidators(null);
                this.form.controls['DoorRepair'].updateValueAndValidity();
              }

              if (this.repairActive9) {
                // this.form.controls['JaalisRepair'].setValue("");
                this.form.controls['JaalisRepair'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['JaalisRepair'].updateValueAndValidity();
              } else {
                this.form.controls['JaalisRepair'].setValue("");
                this.form.controls['JaalisRepair'].setValidators(null);
                this.form.controls['JaalisRepair'].updateValueAndValidity();
              }

              if (this.repairActive10) {
                // this.form.controls['DoorRepaint'].setValue("");
                this.form.controls['DoorRepaint'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
              } else {
                this.form.controls['DoorRepaint'].setValue("");
                this.form.controls['DoorRepaint'].setValidators(null);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
              }

              if (this.repairActive11) {
                // this.form.controls['JaalisRepaint'].setValue("");
                this.form.controls['JaalisRepaint'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['JaalisRepaint'].updateValueAndValidity();
              } else {
                this.form.controls['JaalisRepaint'].setValue("");
                this.form.controls['JaalisRepaint'].setValidators(null);
                this.form.controls['JaalisRepaint'].updateValueAndValidity();
              }
            }

            if (id == 2) {
              this.parapetActive1 = false;
              this.parapetActive2 = false;
              this.parapetActive3 = false;
              this.parapetActive4 = false;
              this.parapetActive5 = false;

              for (var _i = 0; _i <= event.length; _i++) {
                if (event[_i] == "Increase in Length") {
                  this.parapetActive1 = true;
                }

                if (event[_i] == "Increase in Height") {
                  this.parapetActive2 = true;
                }

                if (event[_i] == "Whitewashing and Colouwashing") {
                  this.parapetActive3 = true;
                }

                if (event[_i] == "Replastering") {
                  this.parapetActive4 = true;
                }

                if (event[_i] == "Brickwork") {
                  this.parapetActive5 = true;
                }
              }

              if (this.parapetActive1) {
                // this.form.controls['ParapetWallLength'].setValue("");
                this.form.controls['ParapetWallLength'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallLength'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallLength'].setValue("");
                this.form.controls['ParapetWallLength'].setValidators(null);
                this.form.controls['ParapetWallLength'].updateValueAndValidity();
              }

              if (this.parapetActive2) {
                // this.form.controls['ParapetWallHeight'].setValue("");
                this.form.controls['ParapetWallHeight'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallHeight'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallHeight'].setValue("");
                this.form.controls['ParapetWallHeight'].setValidators(null);
                this.form.controls['ParapetWallHeight'].updateValueAndValidity();
              }

              if (this.parapetActive3) {
                // this.form.controls['ParapetWallWhiteWash'].setValue("");
                this.form.controls['ParapetWallWhiteWash'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallWhiteWash'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallWhiteWash'].setValue("");
                this.form.controls['ParapetWallWhiteWash'].setValidators(null);
                this.form.controls['ParapetWallWhiteWash'].updateValueAndValidity();
              }

              if (this.parapetActive4) {
                // this.form.controls['ParapetWallReplasting'].setValue("");
                this.form.controls['ParapetWallReplasting'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallReplasting'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallReplasting'].setValue("");
                this.form.controls['ParapetWallReplasting'].setValidators(null);
                this.form.controls['ParapetWallReplasting'].updateValueAndValidity();
              }

              if (this.parapetActive5) {
                // this.form.controls['ParapetWallBrickWork'].setValue("");
                this.form.controls['ParapetWallBrickWork'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallBrickWork'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallBrickWork'].setValue("");
                this.form.controls['ParapetWallBrickWork'].setValidators(null);
                this.form.controls['ParapetWallBrickWork'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "getOnFunRepair",
          value: function getOnFunRepair(event, id) {
            if (id == 1) {
              console.log("onFunRepair", event);
              this.repairActive1 = false;
              this.repairActive2 = false;
              this.repairActive3 = false;
              this.repairActive4 = false;
              this.repairActive5 = false;
              this.repairActive6 = false;
              this.repairActive7 = false;
              this.repairActive8 = false;
              this.repairActive9 = false;
              this.repairActive10 = false;
              this.repairActive11 = false;

              for (var i = 0; i <= event.length; i++) {
                if (event[i] == "Whitewashing and Painting") {
                  this.repairActive1 = true;
                }

                if (event[i] == "Replastering") {
                  this.repairActive2 = true;
                }

                if (event[i] == "Reflooring") {
                  this.repairActive3 = true;
                }

                if (event[i] == "Ceiling Plastering") {
                  this.repairActive4 = true;
                }

                if (event[i] == "Floor Patchwork") {
                  this.repairActive5 = true;
                }

                if (event[i] == "Replacement of Doors") {
                  this.repairActive6 = true;
                }

                if (event[i] == "Replacement of Jaalis") {
                  this.repairActive7 = true;
                }

                if (event[i] == "Repair of Doors") {
                  this.repairActive8 = true;
                }

                if (event[i] == "Repair of Jaalis") {
                  this.repairActive9 = true;
                }

                if (event[i] == "Repainting of Doors") {
                  this.repairActive10 = true;
                }

                if (event[i] == "Repainting of Jaalis") {
                  this.repairActive11 = true;
                }
              }

              if (this.repairActive1) {
                this.form.controls['AreaWw'].setValue(this.dataList[0].AreaWw);
                this.form.controls['AreaWw'].updateValueAndValidity();
              } else {
                this.form.controls['AreaWw'].setValue("");
                this.form.controls['AreaWw'].setValidators(null);
                this.form.controls['AreaWw'].updateValueAndValidity();
              }

              if (this.repairActive2) {
                this.form.controls['AreaReplastering'].setValue(this.dataList[0].AreaReplastering);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
              } else {
                this.form.controls['AreaReplastering'].setValue("");
                this.form.controls['AreaReplastering'].setValidators(null);
                this.form.controls['AreaReplastering'].updateValueAndValidity();
              }

              if (this.repairActive3) {
                this.form.controls['AreaReflooring'].setValue(this.dataList[0].AreaReflooring);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
              } else {
                this.form.controls['AreaReflooring'].setValue("");
                this.form.controls['AreaReflooring'].setValidators(null);
                this.form.controls['AreaReflooring'].updateValueAndValidity();
              }

              if (this.repairActive4) {
                this.form.controls['AreaCeilingPlaster'].setValue(this.dataList[0].AreaCeilingPlaster);
                this.form.controls['AreaCeilingPlaster'].updateValueAndValidity();
              } else {
                this.form.controls['AreaCeilingPlaster'].setValue("");
                this.form.controls['AreaCeilingPlaster'].setValidators(null);
                this.form.controls['AreaCeilingPlaster'].updateValueAndValidity();
              }

              if (this.repairActive5) {
                this.form.controls['AreaFlrPatchwork'].setValue(this.dataList[0].AreaFlrPatchwork);
                this.form.controls['AreaFlrPatchwork'].updateValueAndValidity();
              } else {
                this.form.controls['AreaFlrPatchwork'].setValue("");
                this.form.controls['AreaFlrPatchwork'].setValidators(null);
                this.form.controls['AreaFlrPatchwork'].updateValueAndValidity();
              }

              if (this.repairActive6) {
                this.form.controls['DoorReplace'].setValue(this.dataList[0].DoorReplace);
                this.form.controls['DoorReplace'].updateValueAndValidity();
              } else {
                this.form.controls['DoorReplace'].setValue("");
                this.form.controls['DoorReplace'].setValidators(null);
                this.form.controls['DoorReplace'].updateValueAndValidity();
              }

              if (this.repairActive7) {
                this.form.controls['JaalisReplace'].setValue(this.dataList[0].JaalisReplace);
                this.form.controls['JaalisReplace'].updateValueAndValidity();
              } else {
                this.form.controls['JaalisReplace'].setValue("");
                this.form.controls['JaalisReplace'].setValidators(null);
                this.form.controls['JaalisReplace'].updateValueAndValidity();
              }

              if (this.repairActive8) {
                this.form.controls['DoorRepair'].setValue(this.dataList[0].DoorRepair);
                this.form.controls['DoorRepair'].updateValueAndValidity();
              } else {
                this.form.controls['DoorRepair'].setValue("");
                this.form.controls['DoorRepair'].setValidators(null);
                this.form.controls['DoorRepair'].updateValueAndValidity();
              }

              if (this.repairActive9) {
                this.form.controls['JaalisRepair'].setValue(this.dataList[0].JaalisRepair);
                this.form.controls['JaalisRepair'].updateValueAndValidity();
              } else {
                this.form.controls['JaalisRepair'].setValue("");
                this.form.controls['JaalisRepair'].setValidators(null);
                this.form.controls['JaalisRepair'].updateValueAndValidity();
              }

              if (this.repairActive10) {
                this.form.controls['DoorRepaint'].setValue(this.dataList[0].DoorRepaint);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
              } else {
                this.form.controls['DoorRepaint'].setValue("");
                this.form.controls['DoorRepaint'].setValidators(null);
                this.form.controls['DoorRepaint'].updateValueAndValidity();
              }

              if (this.repairActive11) {
                this.form.controls['JaalisRepaint'].setValue(this.dataList[0].JaalisRepaint);
                this.form.controls['JaalisRepaint'].updateValueAndValidity();
              } else {
                this.form.controls['JaalisRepaint'].setValue("");
                this.form.controls['JaalisRepaint'].setValidators(null);
                this.form.controls['JaalisRepaint'].updateValueAndValidity();
              }
            }

            if (id == 2) {
              this.parapetActive1 = false;
              this.parapetActive2 = false;
              this.parapetActive3 = false;
              this.parapetActive4 = false;
              this.parapetActive5 = false;

              for (var _i2 = 0; _i2 <= event.length; _i2++) {
                if (event[_i2] == "Increase in Length") {
                  this.parapetActive1 = true;
                }

                if (event[_i2] == "Increase in Height") {
                  this.parapetActive2 = true;
                }

                if (event[_i2] == "Whitewashing and Colouwashing") {
                  this.parapetActive3 = true;
                }

                if (event[_i2] == "Replastering") {
                  this.parapetActive4 = true;
                }

                if (event[_i2] == "Brickwork") {
                  this.parapetActive5 = true;
                }
              }

              if (this.parapetActive1) {
                this.form.controls['ParapetWallLength'].setValue(this.dataList[0].ParapetWallLength);
                this.form.controls['ParapetWallLength'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallLength'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallLength'].setValue("");
                this.form.controls['ParapetWallLength'].setValidators(null);
                this.form.controls['ParapetWallLength'].updateValueAndValidity();
              }

              if (this.parapetActive2) {
                this.form.controls['ParapetWallHeight'].setValue(this.dataList[0].ParapetWallHeight);
                this.form.controls['ParapetWallHeight'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallHeight'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallHeight'].setValue("");
                this.form.controls['ParapetWallHeight'].setValidators(null);
                this.form.controls['ParapetWallHeight'].updateValueAndValidity();
              }

              if (this.parapetActive3) {
                this.form.controls['ParapetWallWhiteWash'].setValue(this.dataList[0].ParapetWallWhiteWash);
                this.form.controls['ParapetWallWhiteWash'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallWhiteWash'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallWhiteWash'].setValue("");
                this.form.controls['ParapetWallWhiteWash'].setValidators(null);
                this.form.controls['ParapetWallWhiteWash'].updateValueAndValidity();
              }

              if (this.parapetActive4) {
                this.form.controls['ParapetWallReplasting'].setValue(this.dataList[0].ParapetWallReplasting);
                this.form.controls['ParapetWallReplasting'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallReplasting'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallReplasting'].setValue("");
                this.form.controls['ParapetWallReplasting'].setValidators(null);
                this.form.controls['ParapetWallReplasting'].updateValueAndValidity();
              }

              if (this.parapetActive5) {
                this.form.controls['ParapetWallBrickWork'].setValue(this.dataList[0].ParapetWallBrickWork);
                this.form.controls['ParapetWallBrickWork'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.form.controls['ParapetWallBrickWork'].updateValueAndValidity();
              } else {
                this.form.controls['ParapetWallBrickWork'].setValue("");
                this.form.controls['ParapetWallBrickWork'].setValidators(null);
                this.form.controls['ParapetWallBrickWork'].updateValueAndValidity();
              }
            }
          }
        }, {
          key: "onChangeBuildingData",
          value: function onChangeBuildingData(event, id) {
            if (id == 11 && this.form.value.CorriLen == 0) {
              this.form.controls['CorriLen'].setValue("");
            }

            if (id == 12 && this.form.value.CorridorWidth == 0) {
              this.form.controls['CorridorWidth'].setValue("");
            }

            if (id == 13 && this.form.value.CorriLighFunc == 0) {
              this.form.controls['CorriLighFunc'].setValue("");
            }

            if (id == 10 && this.form.value.FoolrAreReq == 0) {
              this.form.controls['FoolrAreReq'].setValue("");
            }

            if (id == 14 && this.form.value.AreaWw == 0) {
              this.form.controls['AreaWw'].setValue("");
            }

            if (id == 15 && this.form.value.AreaReplastering == 0) {
              this.form.controls['AreaReplastering'].setValue("");
            }

            if (id == 16 && this.form.value.AreaReflooring == 0) {
              this.form.controls['AreaReflooring'].setValue("");
            }

            if (id == 17 && this.form.value.AreaCeilingPlaster == 0) {
              this.form.controls['AreaCeilingPlaster'].setValue("");
            }

            if (id == 18 && this.form.value.AreaFlrPatchwork == 0) {
              this.form.controls['AreaFlrPatchwork'].setValue("");
            }

            if (id == 19 && this.form.value.DoorReplace == 0) {
              this.form.controls['DoorReplace'].setValue("");
            }

            if (id == 20 && this.form.value.JaalisReplace == 0) {
              this.form.controls['JaalisReplace'].setValue("");
            }

            if (id == 21 && this.form.value.DoorRepair == 0) {
              this.form.controls['DoorRepair'].setValue("");
            }

            if (id == 22 && this.form.value.JaalisRepair == 0) {
              this.form.controls['JaalisRepair'].setValue("");
            }

            if (id == 23 && this.form.value.DoorRepaint == 0) {
              this.form.controls['DoorRepaint'].setValue("");
            }

            if (id == 24 && this.form.value.JaalisRepaint == 0) {
              this.form.controls['JaalisRepaint'].setValue("");
            }

            if (id == 25 && this.form.value.FunBldOhtYn == 0) {
              this.form.controls['FunBldOhtYn'].setValue("");
            }

            if (id == 26 && this.form.value.ParapetWallLength == 0) {
              this.form.controls['ParapetWallLength'].setValue("");
            }

            if (id == 27 && this.form.value.ParapetWallHeight == 0) {
              this.form.controls['ParapetWallHeight'].setValue("");
            }

            if (id == 28 && this.form.value.ParapetWallWhiteWash == 0) {
              this.form.controls['ParapetWallWhiteWash'].setValue("");
            }

            if (id == 29 && this.form.value.ParapetWallReplasting == 0) {
              this.form.controls['ParapetWallReplasting'].setValue("");
            }

            if (id == 30 && this.form.value.ParapetWallBrickWork == 0) {
              this.form.controls['ParapetWallBrickWork'].setValue("");
            }
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
            } // this.router.navigate(['/tabs/primary-new-dashboard'], { queryParams: { 'schoolId': this.schoolId, 'vistId': this.vistId, 'expanted': '2', 'visitstatus':this.visitstatus }, skipLocationChange: false });

          }
        }, {
          key: "deleteTerrace",
          value: function deleteTerrace() {
            var _this4 = this;

            debugger;
            var idbuild = parseInt(this.buildingId) - 100;
            var idfloor = parseInt(this.floorId) - 1000;
            var query = 'DELETE FROM sidsPrimaryRoomSaves' + ' WHERE SclId = "' + this.schoolId + '"' + ' And BuildIndx = "' + idbuild + '"' + ' And FloorIndx = "' + idfloor + '"' + ' And VistId = "' + this.vistId + '"';
            var query2 = 'DELETE FROM newPrimaryRoomscommons' + ' WHERE SchlId = "' + this.schoolId + '"' + ' And BldgId = "' + this.buildingId + '"' + ' And FloorId = "' + this.floorId + '"' + ' And VistId = "' + this.vistId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              return _this4.sqliteDB.getDataLocalDB(query2).then(function (data) {
                console.log("deleteTerrace");
              });
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
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

      _PrimaryFloorClosingQuestionsPage.ctorParameters = function () {
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

      _PrimaryFloorClosingQuestionsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-primary-floor-closing-questions',
        template: _raw_loader_primary_floor_closing_questions_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_primary_floor_closing_questions_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrimaryFloorClosingQuestionsPage);
      /***/
    },

    /***/
    29852:
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/pages/sids/primary-school/primary-building/primary-floor-closing-questions/primary-floor-closing-questions.page.scss ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marginBottom0 {\n  margin-bottom: 0;\n}\n\n.marginTop0 {\n  margin-top: 0;\n}\n\n.marginTop5 {\n  margin-top: 5px !important;\n}\n\n.cd-container {\n  max-width: 1170px;\n}\n\n.cd-container::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.timelineText {\n  color: black;\n}\n\n.timelineIcon {\n  font-size: 25px;\n  color: white;\n}\n\n.cd-author {\n  color: gray;\n}\n\n#cd-timeline {\n  position: relative;\n  margin-left: 0px !important;\n}\n\n#cd-timeline::before {\n  /* this is the vertical line */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 100%;\n  width: 2px;\n  background: gray;\n}\n\n.cd-timeline-block {\n  position: relative;\n  margin: 2em 0;\n}\n\n.cd-timeline-block:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-block:first-child {\n  margin-top: 0;\n}\n\n.cd-timeline-block:last-child {\n  margin-bottom: 0;\n}\n\n.cd-timeline-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  padding-top: 5px;\n  background: white;\n  text-align: center;\n}\n\n.cd-timeline-icon i {\n  color: #4a87ee;\n}\n\n.cd-timeline-picture {\n  text-align: center;\n  padding-top: 5px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border-color: #4a87ee;\n  border-style: solid;\n  border-width: 2px;\n  background: white;\n}\n\n.cd-timeline-picture img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.cd-timeline-content {\n  position: relative;\n  margin-left: 60px;\n  background: white;\n  border-radius: 0.25em;\n  border-color: #388;\n  border-color: var(--ion-color-primary, #388);\n  border-style: none;\n  border-width: 2px;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.cd-timeline-content:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.cd-timeline-content h2 {\n  color: #303e49;\n}\n\n.cd-timeline-content p,\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  font-size: 13px;\n  font-size: 0.8125rem;\n}\n\n.cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n  display: inline-block;\n}\n\n.cd-timeline-content p {\n  margin: 1em 0;\n  line-height: 1.6;\n}\n\n.cd-timeline-content::before {\n  content: \"\";\n  position: absolute;\n  right: 100%;\n  height: 0;\n  width: 0;\n  border: 7px solid transparent;\n  border-right: 7px solid white;\n  border-right-color: inherit;\n}\n\n/*COLORS*/\n\n/*POSITIVE*/\n\n.positive {\n  border-color: #4a87ee;\n}\n\n.positive i {\n  color: #4a87ee;\n}\n\n/*CALM*/\n\n.calm {\n  border-color: #43cee6;\n}\n\n.calm i {\n  color: #43cee6;\n}\n\n/*BALANCED*/\n\n.balanced {\n  border-color: #66cc33;\n}\n\n.balanced i {\n  color: #66cc33;\n}\n\n/*ENERGIZED*/\n\n.energized {\n  border-color: #f0b840;\n}\n\n.energized i {\n  color: #f0b840;\n}\n\n/*ASSERTIVE*/\n\n.assertive {\n  border-color: #ef4e3a;\n}\n\n.assertive i {\n  color: #ef4e3a;\n}\n\n/*ROYAL*/\n\n.royal {\n  border-color: #8a6de9;\n}\n\n.royal i {\n  color: #8a6de9;\n}\n\n/*DARK*/\n\n.dark i {\n  color: #444;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-timeline-content h2 {\n    font-size: 20px;\n    font-size: 1.25rem;\n  }\n\n  .cd-timeline-content p {\n    font-size: 16px;\n    font-size: 1rem;\n  }\n\n  .cd-timeline-content .cd-read-more,\n.cd-timeline-content .cd-date {\n    font-size: 14px;\n    font-size: 0.875rem;\n  }\n}\n\n.secondary {\n  --background: var(--ion-color-secondary);\n  background-color: var(--ion-color-secondary);\n}\n\n.valid-clr {\n  color: red;\n}\n\n.ques-txt {\n  padding-top: 5px;\n  padding-bottom: 0px;\n  white-space: pre-line;\n  color: #388;\n  color: var(--ion-color-primary, #388);\n}\n\nion-input[type=date]:not(.has-value):before {\n  color: lightgray;\n  content: attr(placeholder);\n}\n\n.back-icon {\n  color: white;\n  zoom: 1;\n  margin-left: 10px;\n}\n\n.grid-padding {\n  margin: 2%;\n}\n\n.input-clr {\n  color: #388;\n  color: var(--ion-color-primary, #388);\n  margin-left: 0px;\n  border-bottom: #388 1px solid;\n  border-bottom: var(--ion-color-primary, #388) 1px solid;\n}\n\n.error-message {\n  padding-left: 0px;\n  color: red;\n}\n\nion-label {\n  font-size: 18px !important;\n}\n\n.container {\n  background-color: #f8f9fa;\n  /* margin: 0%; */\n  padding: 10px;\n}\n\n.ion-no-padding {\n  padding-bottom: 15px;\n  background-color: #F3F4FA;\n  padding: 5px;\n}\n\n.ion-no-padding-question {\n  padding-bottom: 15px;\n  padding: 5px;\n  background-color: #EDDEFF;\n  border-radius: 0px 0px 10px 10px;\n}\n\n.select {\n  color: var(--ion-color-primary);\n  white-space: pre-line !important;\n}\n\n.add {\n  color: aliceblue;\n  padding: 8px;\n  text-align: center;\n}\n\n.footer-save {\n  color: white;\n  background-color: #388;\n  background-color: var(--ion-color-primary, #388);\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-not {\n  color: white;\n  background-color: #ec2315;\n  padding: 10px;\n  text-align: center;\n}\n\n.footer-verified {\n  color: white;\n  background-color: #1d8f26;\n  padding: 10px;\n  text-align: center;\n}\n\n.sidsView {\n  margin: 15px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n}\n\n.dark {\n  border-color: #8B67B3;\n  color: #8B67B3;\n}\n\n.quesColor {\n  background: #F3F4FA;\n  padding: 10px;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.bgCheck {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-select {\n  padding-left: 20px !important;\n  max-width: 100% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-input {\n  padding-left: 10px !important;\n  max-width: 94% !important;\n  margin: 10px;\n  border: 1px solid #8B67B3;\n  border-radius: 15px;\n  padding-right: 20px;\n  font-size: 14px;\n  background: white;\n}\n\nion-toggle {\n  --background-checked: #8B67B3;\n  --handle-background-checked: #FFFFFF;\n}\n\nion-card {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW1hcnktZmxvb3ItY2xvc2luZy1xdWVzdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFFRTtFQUNFLDBCQUFBO0FBQ0o7O0FBRUU7RUFFRSxpQkFBQTtBQUFKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFHQSwyQkFBQTtBQUhKOztBQU1FO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxnQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQUEsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTs7O0VBR0UsZUFBQTtFQUNBLG9CQUFBO0FBSEo7O0FBTUU7O0VBRUUscUJBQUE7QUFISjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBSEo7O0FBT0UsU0FBQTs7QUFHQSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFQSjs7QUFVRTtFQUNFLGNBQUE7QUFQSjs7QUFXRSxPQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFUSjs7QUFZRTtFQUNFLGNBQUE7QUFUSjs7QUFhRSxXQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFYSjs7QUFjRTtFQUNFLGNBQUE7QUFYSjs7QUFlRSxZQUFBOztBQUVBO0VBQ0UscUJBQUE7QUFiSjs7QUFnQkU7RUFDRSxjQUFBO0FBYko7O0FBaUJFLFlBQUE7O0FBRUE7RUFDRSxxQkFBQTtBQWZKOztBQWtCRTtFQUNFLGNBQUE7QUFmSjs7QUFtQkUsUUFBQTs7QUFFQTtFQUNFLHFCQUFBO0FBakJKOztBQW9CRTtFQUNFLGNBQUE7QUFqQko7O0FBcUJFLE9BQUE7O0FBTUE7RUFDRSxXQUFBO0FBdkJKOztBQTBCRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBdkJKOztFQXlCRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0VBdEJKOztFQXdCRTs7SUFFRSxlQUFBO0lBQ0EsbUJBQUE7RUFyQko7QUFDRjs7QUF3QkU7RUFDRSx3Q0FBQTtFQUNBLDRDQUFBO0FBdEJKOztBQThCRTtFQUNFLFVBQUE7QUEzQko7O0FBOEJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUFBLHFDQUFBO0FBM0JKOztBQThCRTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7QUEzQko7O0FBOEJFO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQTNCSjs7QUE4QkU7RUFDRSxVQUFBO0FBM0JKOztBQW9DRTtFQUNFLFdBQUE7RUFBQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSx1REFBQTtBQWpDSjs7QUFvQ0U7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFqQ0o7O0FBd0NFO0VBQ0UsMEJBQUE7QUFyQ0o7O0FBd0NFO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFyQ047O0FBd0NFO0VBQ0csb0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFyQ0w7O0FBd0NJO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtBQXJDUjs7QUF3Q0U7RUFDRSwrQkFBQTtFQUFnQyxnQ0FDaEM7QUFyQ0o7O0FBd0NJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyQ047O0FBdUNFO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQUEsZ0RBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFwQ0o7O0FBc0NFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBbkNKOztBQXFDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFsQ0o7O0FBcUNFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBbENKOztBQXFDRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBbENKOztBQXFDRTtFQUNFLDZCQUFBO0VBQ0Esb0NBQUE7QUFsQ0o7O0FBb0NFO0VBQ0UsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0o7O0FBb0NFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFqQ0o7O0FBbUNFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtBQWhDSjs7QUFrQ0U7RUFDRSxhQUFBO0FBL0JKIiwiZmlsZSI6InByaW1hcnktZmxvb3ItY2xvc2luZy1xdWVzdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbkJvdHRvbTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpblRvcDAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpblRvcDUge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1jb250YWluZXIge1xyXG4gICAgLy8gd2lkdGg6IDkzJTtcclxuICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC1jb250YWluZXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLnRpbWVsaW5lVGV4dCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lbGluZUljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2QtYXV0aG9yIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuICBcclxuICAjY2QtdGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAjY2QtdGltZWxpbmU6OmJlZm9yZSB7XHJcbiAgICAvKiB0aGlzIGlzIHRoZSB2ZXJ0aWNhbCBsaW5lICovXHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1ibG9jazpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1jb2xvcjogIzRhODdlZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWljb24gaSB7XHJcbiAgICBjb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLXBpY3R1cmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6ICM0YTg3ZWU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLXBpY3R1cmUgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IGgyIHtcclxuICAgIGNvbG9yOiAjMzAzZTQ5O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwLFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgLmNkLWRhdGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42O1xyXG4gIH1cclxuICBcclxuICAuY2QtdGltZWxpbmUtY29udGVudDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgd2hpdGU7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQ09MT1JTKi9cclxuICBcclxuICBcclxuICAvKlBPU0lUSVZFKi9cclxuICBcclxuICAucG9zaXRpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE4N2VlO1xyXG4gIH1cclxuICBcclxuICAucG9zaXRpdmUgaSB7XHJcbiAgICBjb2xvcjogIzRhODdlZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypDQUxNKi9cclxuICBcclxuICAuY2FsbSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0M2NlZTY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxtIGkge1xyXG4gICAgY29sb3I6ICM0M2NlZTY7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qQkFMQU5DRUQqL1xyXG4gIFxyXG4gIC5iYWxhbmNlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NmNjMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWxhbmNlZCBpIHtcclxuICAgIGNvbG9yOiAjNjZjYzMzO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkVORVJHSVpFRCovXHJcbiAgXHJcbiAgLmVuZXJnaXplZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMGI4NDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbmVyZ2l6ZWQgaSB7XHJcbiAgICBjb2xvcjogI2YwYjg0MDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLypBU1NFUlRJVkUqL1xyXG4gIFxyXG4gIC5hc3NlcnRpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWY0ZTNhO1xyXG4gIH1cclxuICBcclxuICAuYXNzZXJ0aXZlIGkge1xyXG4gICAgY29sb3I6ICNlZjRlM2E7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qUk9ZQUwqL1xyXG4gIFxyXG4gIC5yb3lhbCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4YTZkZTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3lhbCBpIHtcclxuICAgIGNvbG9yOiAjOGE2ZGU5O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKkRBUksqL1xyXG4gIFxyXG4gIC8vIC5kYXJrIHtcclxuICAvLyAgIGJvcmRlci1jb2xvcjogIzQ0NDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmRhcmsgaSB7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNkLXRpbWVsaW5lLWNvbnRlbnQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIH1cclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC5jZC10aW1lbGluZS1jb250ZW50IC5jZC1yZWFkLW1vcmUsXHJcbiAgICAuY2QtdGltZWxpbmUtY29udGVudCAuY2QtZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNlY29uZGFyeSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlvbi1sYWJlbCB7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC52YWxpZC1jbHIge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAucXVlcy10eHQge1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIH1cclxuICBcclxuICBpb24taW5wdXRbdHlwZT1cImRhdGVcIl06bm90KC5oYXMtdmFsdWUpOmJlZm9yZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKTtcclxuICB9IFxyXG4gIFxyXG4gIC5iYWNrLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgem9vbToxLjA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmdyaWQtcGFkZGluZyB7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24tc2VsZWN0IHtcclxuICAvLyAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyAgIGJvcmRlci1ib3R0b206IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgpO1xyXG4gIC8vIH1cclxuICBcclxuICAuaW5wdXQtY2xyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KSAxcHggc29saWQ7O1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICBcclxuICAvLyBpb24taW5wdXQge1xyXG4gIC8vICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgLyogbWFyZ2luOiAwJTsgKi9cclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvbi1uby1wYWRkaW5ne1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0RkE7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvbi1uby1wYWRkaW5nLXF1ZXN0aW9ue1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURERUZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIC5zZWxlY3Qge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTt3aGl0ZS1zcGFjZTogXHJcbiAgICBwcmUtbGluZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFkZCB7XHJcbiAgICAgIGNvbG9yOiBhbGljZWJsdWU7IFxyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZvb3Rlci1zYXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXHJcbiAgfVxyXG4gIC5mb290ZXItbm90IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzIzMTU7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gIH1cclxuICAuZm9vdGVyLXZlcmlmaWVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZDhmMjY7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRzVmlld3tcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXJrIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzhCNjdCMztcclxuICAgIGNvbG9yOiAjOEI2N0IzO1xyXG4gIH1cclxuICBcclxuICAucXVlc0NvbG9ye1xyXG4gICAgYmFja2dyb3VuZDogI0YzRjRGQTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJnQ2hlY2t7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzhCNjdCMztcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI0ZGRkZGRjtcclxuICB9XHJcbiAgaW9uLXNlbGVjdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhCNjdCMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTQlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOEI2N0IzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLXRvZ2dsZXtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjOEI2N0IzO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjRkZGRkZGO1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    5639:
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sids/primary-school/primary-building/primary-floor-closing-questions/primary-floor-closing-questions.page.html ***!
      \****************************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\" (click)=\"goToBack()\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">Floor ({{this.udiseCode}})</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n\r\n  <div class=\"sidsView\">\r\n    <ion-card style=\"background-color: #8B67B3; align-items: center;\">\r\n      <img src=\"assets/icons/Iconawesome-building.svg\" style=\"width: 25px; margin:15px 25px;\">\r\n      <ion-label style=\"color: #FFFFFF;\">Floor Closing Questions</ion-label>\r\n    </ion-card>\r\n\r\n  <form [formGroup]=\"form\" class=\"form-horizontal\" style=\"margin: 2%;\">\r\n    <div>\r\n      <div >\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                1\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Type of Roofing in the Floor<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"FoolrTy\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onSelectCondition($event.detail.value, 3)\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of roofing\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['FoolrTy'].hasError('required') && (form.controls['FoolrTy'].dirty || form.controls['FoolrTy'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FoolrTy == '7' || form.value.FoolrTy == '6'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                    <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"FoolrAreReq\" (ionChange)=\"onChangeBuildingData($event.detail.value, 10)\"\r\n                    maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['FoolrAreReq'].hasError('required') && (form.controls['FoolrAreReq'].dirty || form.controls['FoolrAreReq'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.FoolrAreReq.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='7'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is there a corridor?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"form.value.CorridorYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.CorridorYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" (ionChange)=\"onToggleClass($event,2)\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.CorridorYn?true:false}}\" formControlName=\"CorridorYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['CorridorYn'].hasError('required') && (form.controls['CorridorYn'].dirty || form.controls['CorridorYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.CorridorYn\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Corridor Length (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"CorriLen\" (ionChange)=\"onChangeBuildingData($event.detail.value, 11)\"\r\n                    maxlength=\"5\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['CorriLen'].hasError('required') && (form.controls['CorriLen'].dirty || form.controls['CorriLen'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.CorriLen.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.CorridorYn\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2B\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Corridor Width (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"CorridorWidth\" (ionChange)=\"onChangeBuildingData($event.detail.value, 12)\"\r\n                    maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['CorridorWidth'].hasError('required') && (form.controls['CorridorWidth'].dirty || form.controls['CorridorWidth'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.CorridorWidth.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n        \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.CorridorYn\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2C\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Number of electric lights available in the corridor<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"CorriLighFunc\"\r\n                    maxlength=\"2\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                    </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['CorriLighFunc'].hasError('required') && (form.controls['CorriLighFunc'].dirty || form.controls['CorriLighFunc'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.CorriLighFunc.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\"  *ngIf=\"form.value.CorridorYn\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                2D\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Condition of Corridor<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CorriCondi\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onSelectCondition($event.detail.value, 4)\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of corridorCondition\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['CorriCondi'].hasError('required') && (form.controls['CorriCondi'].dirty || form.controls['CorriCondi'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"floorRepair && form.value.CorridorYn\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Type of repair<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"CorridorRepair\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onFunRepair($event.detail.value, 1)\">\r\n                  <ion-select-option [value]=\"item1.label\" *ngFor=\"let item1 of repair\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['CorridorRepair'].hasError('required') && (form.controls['CorridorRepair'].dirty || form.controls['CorridorRepair'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive1\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Whitewashing and Painting Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaWw\" (ionChange)=\"onChangeBuildingData($event.detail.value, 14)\"\r\n                  maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AreaWw'].hasError('required') && (form.controls['AreaWw'].dirty || form.controls['AreaWw'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaWw.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive2\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Replastering Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaReplastering\" (ionChange)=\"onChangeBuildingData($event.detail.value, 15)\"\r\n                  maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AreaReplastering'].hasError('required') && (form.controls['AreaReplastering'].dirty || form.controls['AreaReplastering'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaReplastering.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive3\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Reflooring Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaReflooring\" (ionChange)=\"onChangeBuildingData($event.detail.value, 16)\"\r\n                  maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AreaReflooring'].hasError('required') && (form.controls['AreaReflooring'].dirty || form.controls['AreaReflooring'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaReflooring.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive4\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Ceiling Plastering Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaCeilingPlaster\" (ionChange)=\"onChangeBuildingData($event.detail.value, 17)\"\r\n                  maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AreaCeilingPlaster'].hasError('required') && (form.controls['AreaCeilingPlaster'].dirty || form.controls['AreaCeilingPlaster'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaCeilingPlaster.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive5\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Floor Patchwork Required (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"AreaFlrPatchwork\" (ionChange)=\"onChangeBuildingData($event.detail.value, 18)\"\r\n                  maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['AreaFlrPatchwork'].hasError('required') && (form.controls['AreaFlrPatchwork'].dirty || form.controls['AreaFlrPatchwork'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.AreaFlrPatchwork.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive6\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> No. of doors to be replaced<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"DoorReplace\" (ionChange)=\"onChangeBuildingData($event.detail.value, 19)\"\r\n                  maxlength=\"2\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['DoorReplace'].hasError('required') && (form.controls['DoorReplace'].dirty || form.controls['DoorReplace'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.DoorReplace.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive7\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> No. of Jaalis to be replaced<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"JaalisReplace\" (ionChange)=\"onChangeBuildingData($event.detail.value, 20)\"\r\n                  maxlength=\"2\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['JaalisReplace'].hasError('required') && (form.controls['JaalisReplace'].dirty || form.controls['JaalisReplace'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.JaalisReplace.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive8\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of doors requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"DoorRepair\" (ionChange)=\"onChangeBuildingData($event.detail.value, 21)\"\r\n                  maxlength=\"2\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['DoorRepair'].hasError('required') && (form.controls['DoorRepair'].dirty || form.controls['DoorRepair'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.DoorRepair.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive9\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Jaalis requiring repair<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"JaalisRepair\" (ionChange)=\"onChangeBuildingData($event.detail.value, 22)\"\r\n                  maxlength=\"2\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['JaalisRepair'].hasError('required') && (form.controls['JaalisRepair'].dirty || form.controls['JaalisRepair'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.JaalisRepair.errors?.pattern\">Please enter\r\n                      numbers only\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive10\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>No of requiring repainting - doors <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"DoorRepaint\" (ionChange)=\"onChangeBuildingData($event.detail.value, 23)\"\r\n                  maxlength=\"2\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['DoorRepaint'].hasError('required') && (form.controls['DoorRepaint'].dirty || form.controls['DoorRepaint'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.DoorRepaint.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"repairActive11\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label>No of requiring repainting - Jaalis<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"JaalisRepaint\" (ionChange)=\"onChangeBuildingData($event.detail.value, 24)\"\r\n                  maxlength=\"2\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['JaalisRepaint'].hasError('required') && (form.controls['JaalisRepaint'].dirty || form.controls['JaalisRepaint'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.JaalisRepaint.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n               2\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is there a need for cleaning of roof surface?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"form.value.RoofCleaYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.RoofCleaYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.RoofCleaYn?true:false}}\" formControlName=\"RoofCleaYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['RoofCleaYn'].hasError('required') && (form.controls['RoofCleaYn'].dirty || form.controls['RoofCleaYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                3\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is there a safety grill/parapet in the floor?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"form.value.FloorSafety\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.FlorSafety\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle (ionChange)=\"onToggleClass($event, 4)\" class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.DustYN?true:false}}\" formControlName=\"FloorSafety\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['FloorSafety'].hasError('required') && (form.controls['FloorSafety'].dirty || form.controls['FloorSafety'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n       \r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1' && form.value.FloorSafety\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                3A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Requirement for Parapet Wall<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" multiple=\"true\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"ReqParapetWall\"\r\n                  style=\"max-width: 100% !important;\" (ionChange)=\"onFunRepair($event.detail.value, 2)\">\r\n                  <ion-select-option [value]=\"item1.label\" *ngFor=\"let item1 of parapet\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['ReqParapetWall'].hasError('required') && (form.controls['ReqParapetWall'].dirty || form.controls['ReqParapetWall'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1' && form.value.FloorSafety && parapetActive1\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Increase in Length of Parapet Wall (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"ParapetWallLength\"\r\n                  maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" (ionChange)=\"onChangeBuildingData($event, 26)\">\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['ParapetWallLength'].hasError('required') && (form.controls['ParapetWallLength'].dirty || form.controls['ParapetWallLength'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.ParapetWallLength.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1' && form.value.FloorSafety && parapetActive2\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n               #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Increase in Height of Parapet Wall (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"ParapetWallHeight\" (ionChange)=\"onChangeBuildingData($event.detail.value, 27)\"\r\n                  maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['ParapetWallHeight'].hasError('required') && (form.controls['ParapetWallHeight'].dirty || form.controls['ParapetWallHeight'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.ParapetWallHeight.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1' && form.value.FloorSafety && parapetActive3\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Whitewashing for Parapet Wall (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"ParapetWallWhiteWash\" (ionChange)=\"onChangeBuildingData($event.detail.value, 28)\"\r\n                  maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['ParapetWallWhiteWash'].hasError('required') && (form.controls['ParapetWallWhiteWash'].dirty || form.controls['ParapetWallWhiteWash'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.ParapetWallWhiteWash.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1' && form.value.FloorSafety && parapetActive4\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n               #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Replastering for Parapet Wall (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"ParapetWallReplasting\" (ionChange)=\"onChangeBuildingData($event.detail.value, 29)\"\r\n                  maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['ParapetWallReplasting'].hasError('required') && (form.controls['ParapetWallReplasting'].dirty || form.controls['ParapetWallReplasting'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.ParapetWallReplasting.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1' && form.value.FloorSafety && parapetActive5\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                #\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Area of Brickwork for Parapet Wall (in sqft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"ParapetWallBrickWork\" (ionChange)=\"onChangeBuildingData($event.detail.value, 30)\"\r\n                  maxlength=\"4\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['ParapetWallBrickWork'].hasError('required') && (form.controls['ParapetWallBrickWork'].dirty || form.controls['ParapetWallBrickWork'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.ParapetWallBrickWork.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                4\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is there outlet pipe to drain rain water?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #007bff;text-align: end;\">\r\n                      <div *ngIf=\"form.value.OutPipY\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.OutPipY\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" (ionChange)=\"onToggleClass($event,1)\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.OutPipY?true:false}}\" formControlName=\"OutPipY\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['OutPipY'].hasError('required') && (form.controls['OutPipY'].dirty || form.controls['OutPipY'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"!form.value.OutPipY && form.value.FloorNum !='1'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                4A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Length of Pipe needed (in ft)<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"PipLenNeed\" \r\n                  maxlength=\"6\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['PipLenNeed'].hasError('required') && (form.controls['PipLenNeed'].dirty || form.controls['PipLenNeed'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.PipLenNeed.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum !='1'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                5\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is repair need for the steps?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"RepairSteps\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item1.value\" *ngFor=\"let item1 of repairStep\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['RepairSteps'].hasError('required') && (form.controls['RepairSteps'].dirty || form.controls['RepairSteps'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <!-- <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n                6\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Is there a need for weathering course or pressed tiles in the terrace?<span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-select ok-text=\"Ok\" cancel-text=\"Dismiss\" placeholder=\"Select\" formControlName=\"WeatheringReq\"\r\n                  style=\"max-width: 100% !important;\">\r\n                  <ion-select-option [value]=\"item1.label\" *ngFor=\"let item1 of Weathering\"> {{item1.label}}\r\n                  </ion-select-option>\r\n                  </ion-select>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['WeatheringReq'].hasError('required') && (form.controls['WeatheringReq'].dirty || form.controls['WeatheringReq'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.FloorNum =='7'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n               7\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Does the building have an overhead tank? <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-row>\r\n                    <ion-col size=\"2\" style=\"margin-top: 3%;margin-bottom: 3%;color: #000;text-align: end;\">\r\n                      <div *ngIf=\"form.value.BldOhtYn\"> Yes</div>\r\n                      <div *ngIf=\"!form.value.BldOhtYn\"> No</div>\r\n                    </ion-col>\r\n                    <ion-col size=\"3\">\r\n                      <ion-toggle class=\"bgCheck\" style=\"height: 25px;width: 50px;\" checked=\"{{form.value.BldOhtYn?true:false}}\" formControlName=\"BldOhtYn\">\r\n                      </ion-toggle>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"submitted && form.controls['BldOhtYn'].hasError('required') && (form.controls['BldOhtYn'].dirty || form.controls['BldOhtYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section>\r\n\r\n        <section id=\"cd-timeline\" class=\"cd-container\" *ngIf=\"form.value.BldOhtYn && form.value.FloorNum =='7'\">\r\n\r\n          <div ng-repeat=\"activity in timeline\">\r\n            <div class=\"timeline-point-track-container\">\r\n              <div class=\"cd-timeline-picture dark\">\r\n               7A\r\n              </div>\r\n              <ion-row class=\"cd-timeline-content\">\r\n                <ion-col size=\"12\" class=\"quesColor\">\r\n                  <ion-label> Number of Functional OHTs <span style=\"color:red\">*</span></ion-label>\r\n                </ion-col>\r\n\r\n                <ion-col size=\"12\" class=\"ion-no-padding-question\">\r\n                  <ion-input placeholder=\"Please Enter your answer\" type=\"tel\" formControlName=\"FunBldOhtYn\" (ionChange)=\"onChangeBuildingData($event.detail.value, 25)\"\r\n                  maxlength=\"1\" style=\"border-bottom: 1px solid;\" pattern=\"[0-9]*\\.?[0-9]{1}\" >\r\n                  </ion-input>\r\n                  <ion-row>\r\n                    <p class=\"error-message\"\r\n                      *ngIf=\"form.controls['FunBldOhtYn'].hasError('required') && (form.controls['FunBldOhtYn'].dirty || form.controls['FunBldOhtYn'].touched)\">\r\n                      Field is required</p>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <p class=\"error-message\" *ngIf=\"form.controls.FunBldOhtYn.errors?.pattern\">Please enter a number with one value after decimal point\r\n                    </p>\r\n                  </ion-row>\r\n                </ion-col>\r\n\r\n              </ion-row>\r\n            </div>\r\n          </div>\r\n        </section> -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"footer-clr\" *ngIf=\"visitstatus != 2 && visitstatus != 4\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"onSave()\">\r\n      <ion-label> Save\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n\r\n<!-- <ion-footer class=\"footer-clr\" *ngIf=\"this.status == '3'\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"footer-txt\" (click)=\"goToBack()\">\r\n      <ion-label> Already Synced to Server\r\n      </ion-label>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_sids_primary-school_primary-building_primary-floor-closing-questions_primary-fl-729572-es5.js.map