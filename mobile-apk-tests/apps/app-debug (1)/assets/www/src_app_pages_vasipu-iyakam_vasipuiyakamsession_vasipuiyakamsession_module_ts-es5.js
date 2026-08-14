(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_vasipuiyakamsession_vasipuiyakamsession_module_ts"], {
    /***/
    32942:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession-routing.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuiyakamsessionPageRoutingModule": function VasipuiyakamsessionPageRoutingModule() {
          return (
            /* binding */
            _VasipuiyakamsessionPageRoutingModule
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


      var _vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipuiyakamsession.page */
      74503);

      var routes = [{
        path: '',
        component: _vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamsessionPage
      }];

      var _VasipuiyakamsessionPageRoutingModule = /*#__PURE__*/_createClass(function VasipuiyakamsessionPageRoutingModule() {
        _classCallCheck(this, VasipuiyakamsessionPageRoutingModule);
      });

      _VasipuiyakamsessionPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VasipuiyakamsessionPageRoutingModule);
      /***/
    },

    /***/
    65266:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuiyakamsessionPageModule": function VasipuiyakamsessionPageModule() {
          return (
            /* binding */
            _VasipuiyakamsessionPageModule
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


      var _vasipuiyakamsession_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vasipuiyakamsession-routing.module */
      32942);
      /* harmony import */


      var _vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipuiyakamsession.page */
      74503);

      var _VasipuiyakamsessionPageModule = /*#__PURE__*/_createClass(function VasipuiyakamsessionPageModule() {
        _classCallCheck(this, VasipuiyakamsessionPageModule);
      });

      _VasipuiyakamsessionPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _vasipuiyakamsession_routing_module__WEBPACK_IMPORTED_MODULE_0__.VasipuiyakamsessionPageRoutingModule],
        declarations: [_vasipuiyakamsession_page__WEBPACK_IMPORTED_MODULE_1__.VasipuiyakamsessionPage]
      })], _VasipuiyakamsessionPageModule);
      /***/
    },

    /***/
    74503:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.page.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VasipuiyakamsessionPage": function VasipuiyakamsessionPage() {
          return (
            /* binding */
            _VasipuiyakamsessionPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_vasipuiyakamsession_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./vasipuiyakamsession.page.html */
      76682);
      /* harmony import */


      var _vasipuiyakamsession_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./vasipuiyakamsession.page.scss */
      7220);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
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


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _instruction_instruction_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../instruction/instruction.page */
      90737);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/tnvn/services/loading.service */
      47224);

      var _VasipuiyakamsessionPage = /*#__PURE__*/function () {
        function VasipuiyakamsessionPage(route, userService, modalCtrl, router, sqliteDB, fb, alertService, http, usersessionService, alertController, loading) {
          _classCallCheck(this, VasipuiyakamsessionPage);

          this.route = route;
          this.userService = userService;
          this.modalCtrl = modalCtrl;
          this.router = router;
          this.sqliteDB = sqliteDB;
          this.fb = fb;
          this.alertService = alertService;
          this.http = http;
          this.usersessionService = usersessionService;
          this.alertController = alertController;
          this.loading = loading;
          this.dataList = [];
          this.batchRecord = [];
          this.studentRecordFilter = [];
          this.totalStudentRecord = [];
          this.dataListInstruction = [];
          this.classData = [];
          this.classdataList = [];
          this.classresult = [];
          this.batchListtest = [];
          this.compleBatchStatus = false;
          this.activeClass = 0;
          this.totalsecData = [];
          this.emis_username = this.usersessionService.emis_username();
        }

        return _createClass(VasipuiyakamsessionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.vasiIpyakam();
            this.routeData = this.route.snapshot;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.schoolName = this.routeData.queryParams.schoolName;
            this.activeClass = 0;
            this.CycleId = this.routeData.queryParams.CycleId;
            this.InsertClsSec = this.routeData.queryParams.InsertClsSec;
            this.TotalClsSec = this.routeData.queryParams.TotalClsSec;
            console.log(this.TotalClsSec, this.CycleId, this.InsertClsSec, "this.InsertClsSec");
            this.userID = this.emis_username;
            this.attadActive = false;
            this.classActive = false;
            this.compleBatchStatus = false;
            this.filterActive = false;
            this.filterClasssec = '';
            this.filtersec = '';
            var date = new Date();
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) {
              month = '0' + month;
            }

            if (day.length < 2) {
              day = '0' + day;
            }

            this.currentDate = [year, month, day].join('-');
            this.onSelectTotalSec();
            this.localClassGETJSONDetails(); // this.localbatchRecord();

            this.localInstructionRecord();
            this.getlocalStudentRecord();
            this.nextStudentlistActive = false; // this.Index = 0;

            this.initializeForm();
          }
        }, {
          key: "localbatchRecord",
          value: function localbatchRecord() {
            var _this = this;

            var query = 'SELECT * FROM VIStatusbatchDatas' + ' WHERE userid = ' + this.userID;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.dataListbatch = [];
                _this.batchRecord = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this.dataListbatch.push(data.rows.item(i));
                }

                _this.batchRecord = _this.dataListbatch; // console.log("batchRecord Local",this.batchRecord)
              } else {
                if (_this.batchRecord.length > 0) {
                  _this.insertLocalBatchData(_this.batchRecord);
                } else {
                  _this.getbatchDetails();
                }
              }
            });
          }
        }, {
          key: "getbatchDetails",
          value: function getbatchDetails() {
            this.batchRecord = [];
            this.batchRecord.push({
              batchid: 1,
              batch: 1,
              sync: 1,
              schoolId: this.schoolId,
              userid: this.userID
            });

            for (var i = 2; i <= 4; i++) {
              this.batchRecord.push({
                batchid: i,
                batch: i,
                sync: 0,
                schoolId: this.schoolId,
                userid: this.userID
              });
            }

            this.insertLocalBatchData(this.batchRecord);
          }
        }, {
          key: "insertLocalBatchData",
          value: function insertLocalBatchData(elementData) {
            var _this2 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO VIStatusbatchDatas VALUES (?,?,?,?,?,?,?,?,?)", [null, element.batchid, element.batch, '', element.sync, '', element.userid, _this2.currentDate, 0]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored status batch Locally", result);

              _this2.localbatchRecord();
            });
          }
        }, {
          key: "localInstructionRecord",
          value: function localInstructionRecord() {
            var _this3 = this;

            this.dataListInstruction = [];
            var query = 'SELECT * FROM VIInstructionData' + ' WHERE userid = ' + this.userID;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this3.inActive = true;

                for (var i = 0; i < data.rows.length; i++) {
                  _this3.dataListInstruction.push(data.rows.item(i));
                }
              } else {
                _this3.inActive = false;

                _this3.schoolAlert(0);
              }
            });
          }
        }, {
          key: "schoolAlert",
          value: function schoolAlert(id) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal, _yield$modal$onWillDi, data, role;

              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalCtrl.create({
                      component: _instruction_instruction_page__WEBPACK_IMPORTED_MODULE_4__.InstructionPage,
                      componentProps: {
                        schoolID: this.schoolId,
                        sync: id
                      },
                      cssClass: 'view-image-modal'
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    _context.n = 3;
                    return modal.onWillDismiss();

                  case 3:
                    _yield$modal$onWillDi = _context.v;
                    data = _yield$modal$onWillDi.data;
                    role = _yield$modal$onWillDi.role;

                    if (role == 'success') {}

                  case 4:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "localClassGETJSONDetails",
          value: function localClassGETJSONDetails() {
            var _this4 = this;

            this.batchRecord = [];
            this.batchListtest = [];
            var query = 'SELECT * FROM VIClassData' + ' WHERE UserId = "' + this.userID + '"'; //  +
            //   ' WHERE UserId = "' + this.userID + '"';
            //  + '"' +
            // ' And school_id = "' + this.schoolId + '"';

            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this4.totalclassJsonData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this4.totalclassJsonData.push(data.rows.item(i));
                }

                _this4.classJsonData = _this4.totalclassJsonData.filter(function (item) {
                  return item.school_id == _this4.schoolId;
                }); // console.log(this.totalclassJsonData,"this.totalclassJsonData");

                if (_this4.classJsonData.length != 0) {
                  _this4.activeClass = 1;
                }

                _this4.dateclassJsonData = _this4.totalclassJsonData.filter(function (item) {
                  return item.ActiveDate == _this4.currentDate;
                });
                var uniqueAddresses1 = Array.from(new Set(_this4.dateclassJsonData.map(function (a) {
                  return a.Batch;
                }))).map(function (Batch) {
                  return _this4.dateclassJsonData.find(function (a) {
                    return a.Batch === Batch;
                  });
                });
                var uniqueAddresses = uniqueAddresses1.sort(function (a, b) {
                  return a.Batch.toString().localeCompare(b.Batch.toString());
                });
                var cmpbatch = uniqueAddresses.filter(function (item) {
                  return item.school_id == _this4.schoolId;
                });
                _this4.cmpbatch = cmpbatch.length;

                for (var w = 0; w < uniqueAddresses.length; w++) {
                  // this.batchRecord.push({ batchid: uniqueAddresses[w].Batch, batch: uniqueAddresses[w].Batch, sync: 3, schoolId: this.schoolId, userid: this.userID })
                  // this.batchListtest.push({ batchid: uniqueAddresses[w].Batch, batch: uniqueAddresses[w].Batch, sync: 3, schoolId: this.schoolId, userid: this.userID })
                  _this4.batchListtest.push({
                    batchid: w + 1,
                    batch: w + 1,
                    sync: 3,
                    schoolId: _this4.schoolId,
                    userid: _this4.userID
                  });
                }

                _this4.localbatchRecord(); // if (this.batchListtest.length == 0) {
                //   this.batchRecord = []
                //   this.batchRecord.push({ batchid: 1, batch: 1, sync: 1, schoolId: this.schoolId, userid: this.userID })
                //   for (let i = 2; i <= 4; i++) {
                //     this.batchRecord.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID })
                //   }
                //   this.localbatchRecord()
                // }
                // if (this.batchListtest.length < 4) {
                //   if (this.batchListtest.length == 1) {
                //     for (let i = 2; i <= 4; i++) {
                //       let sync = 0
                //       if (i == 2) {
                //         sync = 1
                //       }
                //       this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord()
                //   }
                //   if (this.batchListtest.length == 2) {
                //     for (let i = 3; i <= 4; i++) {
                //       let sync = 0
                //       if (i == 3) {
                //         sync = 1
                //       }
                //       this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord()
                //   }
                //   if (this.batchListtest.length == 3) {
                //     for (let i = 4; i <= 4; i++) {
                //       let sync = 0
                //       if (i == 4) {
                //         sync = 1
                //       }
                //       this.batchRecord.push({ batchid: i, batch: i, sync: sync, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord()
                //   }
                // } else {
                //   if (this.batchListtest.length == 0) {
                //     this.batchRecord = []
                //     this.batchRecord.push({ batchid: 1, batch: 1, sync: 1, schoolId: this.schoolId, userid: this.userID })
                //     for (let i = 2; i <= 4; i++) {
                //       this.batchRecord.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID })
                //       this.batchListtest.push({ batchid: i, batch: i, sync: 0, schoolId: this.schoolId, userid: this.userID })
                //     }
                //     this.localbatchRecord() 
                //   }
                // }
                // console.log(this.classJsonData,"this.classJsonData");


                _this4.localTotalBatchDetails();
              } else {
                console.log("server class");

                _this4.getclassJSON();
              }
            });
          }
        }, {
          key: "localTotalBatchDetails",
          value: function localTotalBatchDetails() {
            var _this5 = this;

            this.totalBatchData = [];
            this.totalBatchStatus = [];
            this.compleBatchStatus = false;
            var query = 'SELECT * FROM VIBatchData' + ' WHERE UserId = "' + this.userID + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this5.totalBatchStatus.push(data.rows.item(i));
                }

                _this5.totalBatchData = _this5.totalBatchStatus.filter(function (item) {
                  return item.SchlId == _this5.schoolId;
                }); // console.log(this.totalBatchData, "this.totalBatchStatus");

                if (_this5.totalBatchData[0].InsertBatchCount == _this5.totalBatchData[0].BatchCount) {
                  _this5.compleBatchStatus = true;
                } // this.createUserBatch()

              } else {// this.getclassJSON()
              }
            });
          }
        }, {
          key: "getclassJSON",
          value: function getclassJSON() {
            var _this6 = this;

            this.totalBatchData = [];
            this.classJsonData = [];
            this.batchRecord = [];
            this.compleBatchStatus = false;
            this.userService.vasipuIyakamClassSecStatus(this.emis_username).subscribe(function (res) {
              if (res.result) {
                var VIStudsListStoreGet = res.result.VIStudsListStoreGet;
                var VIUserSchlBatchCount = res.result.VIUserSchlBatchCount;
                var VIUsersTotalClsSec = res.result.VIUsersTotalClsSec;
                var VIUsersCurrentDay = res.result.VIUsersCurrentDay;
                _this6.totalclassJsonData = VIStudsListStoreGet;

                if (VIStudsListStoreGet.length == 0 && (VIUsersCurrentDay.length == 0 || VIUsersCurrentDay.length != 0)) {
                  _this6.CycleId = parseInt(VIUsersTotalClsSec[0].CycleId) + 1;
                } else {
                  _this6.CycleId = parseInt(VIUsersTotalClsSec[0].CycleId);
                }

                if (VIStudsListStoreGet.length == 0) {
                  // let filterData1 = VIUsersCurrentDay.filter(item=> item.school_id == this.schoolId)
                  // this.classJsonData = filterData1;
                  _this6.dateclassJsonData = VIUsersCurrentDay.filter(function (item) {
                    return item.activity_date == _this6.currentDate;
                  });
                } else {
                  var filterData1 = VIStudsListStoreGet.filter(function (item) {
                    return item.school_id == _this6.schoolId;
                  });
                  _this6.classJsonData = filterData1;

                  if (VIStudsListStoreGet.length != 0 && VIUsersCurrentDay.length != 0) {
                    _this6.dateclassJsonData = VIUsersCurrentDay.filter(function (item) {
                      return item.activity_date == _this6.currentDate;
                    });
                  } else {
                    _this6.dateclassJsonData = VIStudsListStoreGet.filter(function (item) {
                      return item.activity_date == _this6.currentDate;
                    });
                  }
                }

                if (_this6.classJsonData.length != 0) {
                  _this6.activeClass = 1;
                }

                var filterData2 = VIUserSchlBatchCount.filter(function (item) {
                  return item.SchlId == _this6.schoolId;
                });
                _this6.totalBatchData = filterData2; // this.updateBatchCount()
                // console.log(this.classJsonData,"this.classJsonData",this.totalBatchData,"totalBatchData");

                if (_this6.totalBatchData[0].InsertBatchCount == _this6.totalBatchData[0].BatchCount) {
                  _this6.compleBatchStatus = true;
                }

                var uniqueAddresses1 = Array.from(new Set(_this6.dateclassJsonData.map(function (a) {
                  return a.Batch;
                }))).map(function (Batch) {
                  return _this6.dateclassJsonData.find(function (a) {
                    return a.Batch === Batch;
                  });
                });
                var uniqueAddresses = uniqueAddresses1.sort(function (a, b) {
                  return a.Batch.toString().localeCompare(b.Batch.toString());
                }); //  console.log(uniqueAddresses1,uniqueAddresses,"13232435678579");

                var cmpbatch = uniqueAddresses.filter(function (item) {
                  return item.school_id == _this6.schoolId;
                });
                _this6.cmpbatch = cmpbatch.length;

                if (VIUsersCurrentDay.length == 0) {
                  for (var w = 0; w < uniqueAddresses.length; w++) {
                    _this6.batchRecord.push({
                      batchid: uniqueAddresses[w].Batch,
                      batch: uniqueAddresses[w].Batch,
                      sync: 3,
                      schoolId: _this6.schoolId,
                      userid: _this6.userID
                    });

                    _this6.batchListtest.push({
                      batchid: uniqueAddresses[w].Batch,
                      batch: uniqueAddresses[w].Batch,
                      sync: 3,
                      schoolId: _this6.schoolId,
                      userid: _this6.userID
                    });
                  }
                } else {
                  for (var _w = 0; _w < uniqueAddresses.length; _w++) {
                    _this6.batchRecord.push({
                      batchid: _w + 1,
                      batch: _w + 1,
                      sync: 3,
                      schoolId: _this6.schoolId,
                      userid: _this6.userID
                    });

                    _this6.batchListtest.push({
                      batchid: _w + 1,
                      batch: _w + 1,
                      sync: 3,
                      schoolId: _this6.schoolId,
                      userid: _this6.userID
                    });
                  }
                } // console.log(this.batchListtest.length,"this.batchListtest.length");


                if (_this6.batchListtest.length == 0) {
                  _this6.batchRecord = [];

                  _this6.batchRecord.push({
                    batchid: 1,
                    batch: 1,
                    sync: 1,
                    schoolId: _this6.schoolId,
                    userid: _this6.userID
                  });

                  for (var i = 2; i <= 4; i++) {
                    _this6.batchRecord.push({
                      batchid: i,
                      batch: i,
                      sync: 0,
                      schoolId: _this6.schoolId,
                      userid: _this6.userID
                    });
                  }

                  _this6.localbatchRecord();
                }

                if (_this6.batchListtest.length == 4) {
                  _this6.localbatchRecord();
                }

                if (_this6.batchListtest.length < 4) {
                  if (_this6.batchListtest.length == 1) {
                    for (var _i = 2; _i <= 4; _i++) {
                      var sync = 0;

                      if (_i == 2) {
                        sync = 1;
                      }

                      _this6.batchRecord.push({
                        batchid: _i,
                        batch: _i,
                        sync: sync,
                        schoolId: _this6.schoolId,
                        userid: _this6.userID
                      });
                    }

                    _this6.localbatchRecord();
                  }

                  if (_this6.batchListtest.length == 2) {
                    for (var _i2 = 3; _i2 <= 4; _i2++) {
                      var _sync = 0;

                      if (_i2 == 3) {
                        _sync = 1;
                      }

                      _this6.batchRecord.push({
                        batchid: _i2,
                        batch: _i2,
                        sync: _sync,
                        schoolId: _this6.schoolId,
                        userid: _this6.userID
                      });
                    }

                    _this6.localbatchRecord();
                  }

                  if (_this6.batchListtest.length == 3) {
                    for (var _i3 = 4; _i3 <= 4; _i3++) {
                      var _sync2 = 0;

                      if (_i3 == 4) {
                        _sync2 = 1;
                      }

                      _this6.batchRecord.push({
                        batchid: _i3,
                        batch: _i3,
                        sync: _sync2,
                        schoolId: _this6.schoolId,
                        userid: _this6.userID
                      });
                    }

                    _this6.localbatchRecord();
                  }
                } else {
                  if (_this6.batchListtest.length == 0) {
                    _this6.batchRecord = [];

                    _this6.batchRecord.push({
                      batchid: 1,
                      batch: 1,
                      sync: 1,
                      schoolId: _this6.schoolId,
                      userid: _this6.userID
                    });

                    for (var _i4 = 2; _i4 <= 4; _i4++) {
                      _this6.batchRecord.push({
                        batchid: _i4,
                        batch: _i4,
                        sync: 0,
                        schoolId: _this6.schoolId,
                        userid: _this6.userID
                      });

                      _this6.batchListtest.push({
                        batchid: _i4,
                        batch: _i4,
                        sync: 0,
                        schoolId: _this6.schoolId,
                        userid: _this6.userID
                      });
                    }

                    _this6.localbatchRecord();
                  }
                }

                _this6.insertLocalClassList(VIStudsListStoreGet);

                _this6.insertLocalTotalBatch(VIUserSchlBatchCount);

                _this6.insertLocalTotalSecList(VIUsersTotalClsSec);
              }
            });
          }
        }, {
          key: "updateBatchCount",
          value: function updateBatchCount() {
            var count = this.totalBatchData[0].InsertBatchCount; // console.log(count,"countcountcount");
            // this.totalBatchData[0].InsertBatchCount = this.classJsonData.length

            var query3 = 'UPDATE VIBatchData SET InsertBatchCount = "' + count + '" WHERE VIBatchData.UserId = "' + this.emis_username + '" And VIBatchData.SchlId = "' + this.schoolId + '"';
            this.sqliteDB.update(query3).then(function (res) {// console.log("upload Batch Count");
            });
          }
        }, {
          key: "insertLocalClassList",
          value: function insertLocalClassList(elementData) {
            var _this7 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO VIClassData VALUES (?,?,?,?,?,?,?,?,?)", [null, element.class_id, element.section, element.school_id, element.activity_date, element.Batch, _this7.userID, _this7.currentDate, 0]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored class Locally", result);
            });
          }
        }, {
          key: "insertLocalTotalBatch",
          value: function insertLocalTotalBatch(elementData) {
            var _this8 = this;

            var query = 'SELECT * FROM VIBatchData' + ' WHERE SchlId = "' + this.schoolId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length == 0) {
                var insertRows = [];
                elementData.forEach(function (element) {
                  var InsertBatchCount;

                  if (element.InsertBatchCount == null || element.InsertBatchCount == "") {
                    InsertBatchCount = 0;
                  } else {
                    InsertBatchCount = element.InsertBatchCount;
                  }

                  insertRows.push(["INSERT INTO VIBatchData VALUES (?,?,?,?,?,?,?)", [null, element.UserId, element.UserName, element.SchlId, element.SchlName, element.BatchCount, InsertBatchCount]]);
                });

                _this8.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("LocalData Stored Total batch Locally", result); // this.updateBatchCount()

                  _this8.localTotalBatchDetails();
                });
              }
            });
          }
        }, {
          key: "onSelectTotalSec",
          value: function onSelectTotalSec() {
            var _this9 = this;

            this.totalsecData = [];
            var query = 'SELECT * FROM VIStatusClsSecData' + ' WHERE UserId = "' + this.emis_username + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this9.totalsecData.push(data.rows.item(i));
                }

                _this9.TotalClsSec = _this9.totalsecData[0].TotalClsSec; // console.log(this.totalsecData,"this.totalsecData");
              } else {}
            });
          }
        }, {
          key: "insertLocalTotalSecList",
          value: function insertLocalTotalSecList(elementData) {
            var _this0 = this;

            var CycleId;
            var InsertClsSec; // console.log(elementData,"elementData");

            var query = 'SELECT * FROM VIStatusClsSecData' + ' WHERE UserId = "' + this.emis_username + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {} else {
                var insertRows = []; // elementData.forEach(element => {

                if (elementData[0].CycleId == null || elementData[0].CycleId == '') {
                  _this0.CycleId = 1;
                }

                if (elementData[0].InsertClsSec == null || elementData[0].InsertClsSec == "") {
                  InsertClsSec = 0;
                } else {
                  InsertClsSec = elementData[0].InsertClsSec;
                }

                _this0.TotalClsSec = elementData[0].TotalClsSec; // console.log(this.TotalClsSec,"this.TotalClsSec");

                insertRows.push(["INSERT INTO VIStatusClsSecData VALUES (?,?,?,?,?)", [null, elementData[0].TotalClsSec, elementData[0].UserId, InsertClsSec, _this0.CycleId]]); // });

                _this0.sqliteDB.bulkInsert(insertRows).then(function (result) {
                  console.info("LocalData Stored total section Locally", result);

                  _this0.onSelectTotalSec();
                });
              }
            });
          }
        }, {
          key: "getlocalStudentRecord",
          value: function getlocalStudentRecord() {
            var _this1 = this;

            this.studentRecord = [];
            var query = 'SELECT * FROM VIStudenData' + ' WHERE RP_Id = ' + this.userID + ' AND schoolId = ' + this.schoolId;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this1.studentRecord.push(data.rows.item(i));
                }

                var totalsmallstudent = 0;
                var totalbigstudent = 0;
                var totalsmallstudent4;
                var totalsmallstudent5;
                var totalbigstudent6;
                var totalbigstudent7;
                var totalbigstudent8;
                var totalbigstudent9;
                totalsmallstudent4 = _this1.studentRecord.filter(function (item) {
                  return item.class_studying_id == 4;
                });
                totalsmallstudent5 = _this1.studentRecord.filter(function (item) {
                  return item.class_studying_id == 5;
                });
                totalsmallstudent = totalsmallstudent4.length + totalsmallstudent5.length;
                totalbigstudent6 = _this1.studentRecord.filter(function (item) {
                  return item.class_studying_id == 6;
                });
                totalbigstudent7 = _this1.studentRecord.filter(function (item) {
                  return item.class_studying_id == 7;
                });
                totalbigstudent8 = _this1.studentRecord.filter(function (item) {
                  return item.class_studying_id == 8;
                });
                totalbigstudent9 = _this1.studentRecord.filter(function (item) {
                  return item.class_studying_id == 9;
                });
                totalbigstudent = totalbigstudent6.length + totalbigstudent7.length + totalbigstudent8.length + totalbigstudent9.length;
                _this1.totalsmallstudent = totalsmallstudent;
                _this1.totalbigstudent = totalbigstudent;
              } else {}
            });
          }
        }, {
          key: "classdropdownList",
          value: function classdropdownList(id) {
            var _this10 = this;

            if (parseInt(this.TotalClsSec) == this.totalclassJsonData.length) {
              this.confirmAlert();
            }

            if (this.compleBatchStatus == true) {
              // if( parseInt(this.TotalClsSec)  == this.totalclassJsonData.length) {
              //   this.confirmAlert()
              // } else {
              // this.alertService.success("All Batch completed in " + this.schoolName)
              this.alertPopup("All Batch completed in " + this.schoolName); // }
            } else {
              if (this.inActive == true) {
                this.index = id;
                this.classActive = true;
                this.classList = [];
                this.classListOrginal = [];
                var result = this.studentRecord.filter(function (a) {
                  var key = a.class_studying_id + '|' + a.class_section;

                  if (!this[key]) {
                    this[key] = true;
                    return true;
                  }
                }, Object.create(null));
                var _final = [];
                result.forEach(function (element) {
                  var id = element.class_studying_id;

                  if (id == 4 || id == 5 || id == 6 || id == 7 || id == 8 || id == 9) {
                    _final.push(element);
                  }
                });

                var cls = _toConsumableArray(new Set(_final.map(function (x) {
                  return x.class_studying_id;
                })));

                cls.forEach(function (val) {
                  for (var i = 0; i < _final.length; i++) {
                    if (val == _final[i].class_studying_id) {
                      var obj = {
                        'class': _final[i].class_studying_id,
                        'sec': _final[i].class_section
                      };

                      _this10.classList.push(obj);

                      _this10.classListOrginal.push(obj); // console.log(this.classList,this.classListOrginal,"this school class sec list");

                    }
                  }
                });
              } else {
                this.localInstructionRecord();
              }
            }
          } // createUserBatch(){
          //   if(this.classJsonData){
          //     const uniqueBatch = Array.from(new Set(this.classJsonData.map(a => a.Batch)))
          //     .map(Batch => {
          //       return this.classJsonData.find(a => a.Batch === Batch)
          //     })
          //     let TotaluniqueBatch = uniqueBatch.sort((a, b) => a.Batch.toString().localeCompare(b.Batch.toString())) 
          //   }
          // }

        }, {
          key: "initializeForm",
          value: function initializeForm() {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
              "class": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
              total: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
              classList: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
              presentTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
              student_details: this.fb.array([])
            });
            this.form.controls['total'].disable();
          }
        }, {
          key: "onSurveyList",
          value: function onSurveyList(item) {
            var _this11 = this;

            this.nextStudentlistActive = true;
            var control = this.form.controls['student_details'];

            for (var i = control.length - 1; i >= 0; i--) {
              control.removeAt(i);
            }

            this.queslist = [];
            this.queslist = this.form.controls.student_details;

            if (item.length > 0) {
              for (var _i5 = 0; _i5 < item.length; _i5++) {
                this.queslist.push(this.fb.group({
                  IndxID: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', null),
                  SchlID: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(this.schoolId, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                  "class": new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i5]["class"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                  sec: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(item[_i5].sec, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                  total: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
                  presentTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
                }));
              }
            }

            var _loop = function _loop(_i6) {
              var studentfilter = _this11.studentRecord.filter(function (items) {
                return items.class_studying_id == item[_i6]["class"] && items.class_section == item[_i6].sec;
              });

              _this11.form.controls['student_details']['controls'][_i6].controls['total'].setValue(studentfilter.length);

              _this11.form.controls['student_details']['controls'][_i6].controls['total'].updateValueAndValidity();
            };

            for (var _i6 = 0; _i6 < item.length; _i6++) {
              _loop(_i6);
            } // console.log(this.form, "form");

          }
        }, {
          key: "compareClass",
          value: function compareClass(classArray) {
            var _this12 = this;

            if (this.classJsonData) {
              this.classresult = [];

              var _iterator = _createForOfIteratorHelper(this.classJsonData),
                  _step;

              try {
                var _loop2 = function _loop2() {
                  var obj1 = _step.value;
                  var matchingObj = classArray.find(function (obj2) {
                    return obj2["class"] === obj1.class_id && obj2.sec === obj1.section;
                  });

                  if (matchingObj) {
                    _this12.classresult.push({
                      "class": obj1.class_id,
                      object1: obj1,
                      object2: matchingObj
                    });
                  }
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop2();
                } // console.log(this.classresult, "compare class list");

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return this.classresult;
            }
          }
        }, {
          key: "selectClass",
          value: function selectClass(data) {
            var _this13 = this;

            this.compareClass(data.detail.value);
            this.classArray = data.detail.value;
            var classArray = data.detail.value;
            var filterclassArray4 = classArray.filter(function (item) {
              return item["class"] == '4' || item["class"] == '5';
            });
            var filterclassArray9 = classArray.filter(function (item) {
              return item["class"] == '6' || item["class"] == '7' || item["class"] == '8' || item["class"] == '9';
            });

            if (this.classresult.length != 0) {
              this.form.controls['class'].setValue('');
              this.form.controls['class'].setValidators(null);
              this.form.controls['class'].updateValueAndValidity();

              if (this.classresult.length == 1) {
                // this.alertService.error("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்")
                this.alertPopup("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்");
              } else {
                // this.alertService.error("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்")
                this.alertPopup("உங்களுக்கு ஒதுக்கப்பட்ட அனைத்து பள்ளிகளில் உள்ள அனைத்து batchஐயும் complete செய்த பின் மட்டுமே மறுபடியும் உங்களால் இந்த வகுப்புகளுக்கு பாடம் எடுக்க முடியும்");
              }

              var control = this.form.controls['student_details'];

              for (var i = control.length - 1; i >= 0; i--) {
                control.removeAt(i);
              }

              this.activeNextAttd = false;
            } else {
              var InsertBatchCount;

              if (this.totalBatchData[0].InsertBatchCount == null) {
                InsertBatchCount = 0;
              } else {
                InsertBatchCount = this.totalBatchData[0].InsertBatchCount;
              }

              if (parseInt(InsertBatchCount) + 1 == parseInt(this.totalBatchData[0].BatchCount)) {
                if (this.classList.length != this.classJsonData.length + classArray.length) {
                  this.deleteAlert();
                } else {
                  if (this.classList.length == this.classJsonData.length + classArray.length) {
                    this.activeNextAttd = true;
                    this.form.controls['total'].setValue('');
                    this.form.controls['presentTotal'].setValue('');
                    this.form.controls['total'].setValidators(null);
                    this.form.controls['presentTotal'].setValidators(null);
                    this.form.controls['total'].updateValueAndValidity();
                    this.form.controls['presentTotal'].updateValueAndValidity();
                    this.totalStudentRecord = [];
                    this.studentRecordFilter = [];

                    if (this.form.value["class"].length != 0) {
                      this.nextStudentlistActive = false;
                      var studentfilter;

                      var _loop3 = function _loop3(_i7) {
                        studentfilter = _this13.studentRecord.filter(function (item) {
                          return item.class_studying_id == data.detail.value[_i7]["class"] && item.class_section == data.detail.value[_i7].sec;
                        });

                        for (var _i8 = 0; _i8 < studentfilter.length; _i8++) {
                          _this13.studentRecordFilter.push(studentfilter[_i8]);
                        }

                        _this13.studentRecordFilter.sort(function (a, b) {
                          var nameA = a.name.toLowerCase();
                          var nameB = b.name.toLowerCase();

                          if (nameA < nameB) {
                            return -1;
                          }

                          if (nameA > nameB) {
                            return 1;
                          }

                          return 0; // names are equal
                        });

                        _this13.totalStudentRecord = _this13.studentRecordFilter;
                      };

                      for (var _i7 = 0; _i7 < data.detail.value.length; _i7++) {
                        _loop3(_i7);
                      }

                      this.onSurveyList(data.detail.value);
                    } else {
                      // this.alertService.error('Please select class');
                      this.alertPopup('Please select class');
                    }
                  }
                }
              } else {
                if (filterclassArray4.length != 0 && filterclassArray9.length != 0) {
                  this.form.controls['class'].setValue('');
                  this.form.controls['class'].setValidators(null);
                  this.form.controls['class'].updateValueAndValidity(); // this.alertService.error("4&5 தொடக்க நிலை வகுப்புகளையும் 6 முதல் 9 வகுப்பு வரை உள்ள உயர்நிலை வகுப்புகளையும் இணைக்க இயலாது")

                  this.alertPopup("4&5 தொடக்க நிலை வகுப்புகளையும் 6 முதல் 9 வகுப்பு வரை உள்ள உயர்நிலை வகுப்புகளையும் இணைக்க இயலாது");
                  this.activeNextAttd = false;
                  var _control = this.form.controls['student_details'];

                  for (var _i9 = _control.length - 1; _i9 >= 0; _i9--) {
                    _control.removeAt(_i9);
                  }
                } else {
                  this.activeNextAttd = true;
                  this.form.controls['total'].setValue('');
                  this.form.controls['presentTotal'].setValue('');
                  this.form.controls['total'].setValidators(null);
                  this.form.controls['presentTotal'].setValidators(null);
                  this.form.controls['total'].updateValueAndValidity();
                  this.form.controls['presentTotal'].updateValueAndValidity();
                  this.totalStudentRecord = [];
                  this.studentRecordFilter = [];

                  if (this.form.value["class"].length != 0) {
                    this.nextStudentlistActive = false;

                    var _studentfilter;

                    var _loop4 = function _loop4(_i0) {
                      _studentfilter = _this13.studentRecord.filter(function (item) {
                        return item.class_studying_id == data.detail.value[_i0]["class"] && item.class_section == data.detail.value[_i0].sec;
                      });

                      for (var _i1 = 0; _i1 < _studentfilter.length; _i1++) {
                        _this13.studentRecordFilter.push(_studentfilter[_i1]);
                      }

                      _this13.studentRecordFilter.sort(function (a, b) {
                        var nameA = a.name.toLowerCase();
                        var nameB = b.name.toLowerCase();

                        if (nameA < nameB) {
                          return -1;
                        }

                        if (nameA > nameB) {
                          return 1;
                        }

                        return 0; // names are equal
                      });

                      _this13.totalStudentRecord = _this13.studentRecordFilter;
                    };

                    for (var _i0 = 0; _i0 < data.detail.value.length; _i0++) {
                      _loop4(_i0);
                    }

                    this.onSurveyList(data.detail.value);
                  } else {
                    // this.alertService.error('Please select class');
                    this.alertPopup('Please select class');
                  }
                }
              }
            }
          }
        }, {
          key: "validateAllFormFields",
          value: function validateAllFormFields(formGroup) {
            var _this14 = this;

            Object.keys(formGroup.controls).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup) {
                _this14.validateAllFormFields(control);
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray) {
                _this14.validateAllFormFields(control);
              }
            });
          }
        }, {
          key: "gotoAttandPage",
          value: function gotoAttandPage(classdata) {
            if (this.form.controls.presentTotal.value == this.form.controls.total.value) {
              this.gotoNext(classdata.toString());
            } else {
              if (this.form.valid) {
                this.attadActive = true;
              } else {
                this.validateAllFormFields(this.form);
                this.alertService.error("Please fill all Field");
              }
            }
          }
        }, {
          key: "callPhoneNumber",
          value: function callPhoneNumber(phoneNumber) {
            var telUrl = 'tel:' + phoneNumber;
            window.open(telUrl, '_system');
          }
        }, {
          key: "gotostudentpage",
          value: function gotostudentpage() {
            this.attadActive = false;
          }
        }, {
          key: "gotoNext",
          value: function gotoNext(classdata) {
            var _this15 = this;

            this.classData = [];
            var total = this.studentRecordFilter.filter(function (item) {
              return item.prst == '';
            });
            var totalabst = this.studentRecordFilter.filter(function (item) {
              return item.prst == 1 || item.prst == 2;
            }); // let userName = totalabst.map(user_id => user_id.user_id)
            // console.log(totalabst,"totalabst");

            this.totalprstOD = parseInt(this.form.value.total) - parseInt(this.form.value.presentTotal);
            this.totalStudent = this.studentRecordFilter.length;

            for (var q = 0; q < this.form.controls["class"].value.length; q++) {
              var finaltotalabsts = this.studentRecordFilter.filter(function (item) {
                return item.class_studying_id == _this15.form.controls["class"].value[q]["class"] && item.class_section == _this15.form.controls["class"].value[q].sec && item.prst == '';
              });
              var totalabstsperClass = this.studentRecordFilter.filter(function (item) {
                return item.class_studying_id == _this15.form.controls["class"].value[q]["class"] && item.class_section == _this15.form.controls["class"].value[q].sec;
              }); // let datafinaltotalabsts = userName.filter(item=> (item.class == this.form.controls.class.value[q].class_studying_id && item.class_section == this.form.controls.class.value[q].sec && item.prst == ''))

              var totalabsts = this.studentRecordFilter.filter(function (item) {
                return item.class_studying_id == _this15.form.controls["class"].value[q]["class"] && item.class_section == _this15.form.controls["class"].value[q].sec && (item.prst == 1 || item.prst == 2);
              });
              var userName = totalabsts.map(function (user_id) {
                return user_id.user_id;
              });

              if (this.form.controls.student_details.value[q].presentTotal == finaltotalabsts.length) {
                var data = {
                  "ClsId": this.form.controls["class"].value[q]["class"],
                  "SchlId": this.schoolId,
                  "Sec": this.form.controls["class"].value[q].sec,
                  "TotStudnt": totalabstsperClass.length,
                  "AbsentStud": userName.toString()
                };
                this.classData.push(data); // console.log(data,"datadata",this.classData);
              } else {
                total = [];
              }
            }

            if (total.length == parseInt(this.form.value.presentTotal)) {
              this.classinsertLocalData(this.classData);
            } else {
              var count = this.studentRecordFilter.length - parseInt(this.form.value.presentTotal);

              if (this.form.value["class"].length == 1) {
                // this.alertService.error('வருகை தராத மாணவர்களின் எண்ணிக்கை ' + count + ' சரியாக உள்ளீடவும்.')
                this.alertPopup('வருகை தராத மாணவர்களின் எண்ணிக்கை ' + count + ' சரியாக உள்ளீடவும்.');
              } else {
                // this.alertService.error('வகுப்பு வாரியாக வருகை தராத மாணவர்களின் எண்ணிக்கையை '+ count +' சரியாக உள்ளீடவும்.')
                this.alertPopup('வகுப்பு வாரியாக வருகை தராத மாணவர்களின் எண்ணிக்கையை ' + count + ' சரியாக உள்ளீடவும்.');
              }
            }
          }
        }, {
          key: "classinsertLocalData",
          value: function classinsertLocalData(elementData) {
            var _this16 = this;

            var cls = JSON.stringify(this.form.controls["class"].value);
            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO vasipuBatchStudentTable VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, '', '', '', element.ClsId, element.Sec, _this16.index, element.ClsId, _this16.schoolId, element.Sec, element.TotStudnt, element.AbsentStud, _this16.userID, _this16.currentDate, 0]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              // console.log("Abdullll",this.batchRecord)
              console.info("LocalData Stored FInal students Locally", result);

              _this16.goToNextPage(_this16.index);
            });
          }
        }, {
          key: "nextpageOut",
          value: function nextpageOut(id, schoolId) {
            if (this.compleBatchStatus == true) {
              if (parseInt(this.TotalClsSec) == this.totalclassJsonData.length) {
                this.confirmAlert();
              } else {
                // this.alertService.success("All Batch completed")
                this.alertPopup("All Batch completed");
              }
            } else {
              if (schoolId == this.schoolId) {
                var cls = JSON.stringify(this.form.controls["class"].value);
                this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], {
                  queryParams: {
                    "otp": '',
                    "schoolId": this.schoolId,
                    "batch": id,
                    "status": 1,
                    "class": cls,
                    "CycleId": this.CycleId,
                    "InsertClsSec": this.InsertClsSec,
                    "schoolName": this.schoolName
                  }
                }); // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": id, "status": 1, "class": cls } })
              } else {
                // this.alertService.error("நீங்கள் தேர்வு செய்த Batch - க்கு  வேறொரு பள்ளியில் பாடம் எடுத்துளீர்கள். அந்த குறிப்பிட்ட பள்ளியை கிளிக் செய்து Batch -ஐ Complete செய்யவும்.")
                this.alertPopup("நீங்கள் தேர்வு செய்த Batch - க்கு  வேறொரு பள்ளியில் பாடம் எடுத்துளீர்கள். அந்த குறிப்பிட்ட பள்ளியை கிளிக் செய்து Batch -ஐ Complete செய்யவும்.");
              }
            }
          }
        }, {
          key: "goToNextPage",
          value: function goToNextPage(id) {
            // let cls = JSON.stringify(this.form.controls.class.value);
            this.loading.show();
            this.classSectionUpdate(); // setTimeout(() => {
            // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls } })
            // },3000);
          }
        }, {
          key: "studentStatus",
          value: function studentStatus(userid, id, stu_detail, attedanceStatus, index, key, filter) {
            // console.log("class attandance");
            var total = this.studentRecordFilter.filter(function (item) {
              return item.prst == '';
            });
            this.totalprstOD = parseInt(this.form.value.total) - parseInt(this.form.value.presentTotal);
            this.totalStudent = total.length;
            this.studentRecordFilter[index].prst = id; // let query2 = 'UPDATE VIStudenData SET prst = "' + id + '" WHERE VIStudenData.user_id = "' + userid + '" And VIStudenData.schoolId = "' + this.schoolId + '"';
            // this.sqliteDB.update(query2).then(res => {
            //   console.log("upload attandance");
            // });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/vasipu-iyakam/vi-library'], {
              queryParams: {
                "CycleId": this.CycleId,
                "InsertClsSec": this.InsertClsSec,
                "schoolName": this.schoolName
              }
            }); // this.router.navigate(['/tabs/vasipu-iyakam/vi-library']);
          }
        }, {
          key: "calculateTotal",
          value: function calculateTotal(event, total, prst, i) {
            if (total == prst || total > prst) {
              var totals = 0;
              var totalprsts = 0;

              for (var _i10 = 0; _i10 < this.form.controls['student_details'].value.length; _i10++) {
                totals += parseInt(this.form.controls.student_details.value[_i10].total);

                if (this.form.controls.student_details.value[_i10].presentTotal != null && this.form.controls.student_details.value[_i10].presentTotal != '') {
                  totalprsts += parseInt(this.form.controls.student_details.value[_i10].presentTotal);
                  this.form.controls['presentTotal'].setValue(totalprsts);
                  this.form.controls['presentTotal'].updateValueAndValidity();
                }

                this.form.controls['total'].setValue(totals);
                this.form.controls['total'].updateValueAndValidity();
              }
            } else {
              this.form.controls['student_details']['controls'][i].controls['presentTotal'].setValue('');
              this.form.controls['student_details']['controls'][i].controls['presentTotal'].updateValueAndValidity();
              this.alertService.error("invalid");
            }
          }
        }, {
          key: "viewData",
          value: function viewData() {
            this.schoolAlert('');
          }
        }, {
          key: "studentAttUpdate",
          value: function studentAttUpdate() {
            var cls = JSON.stringify(this.form.controls["class"].value);
            var total = this.studentRecordFilter.filter(function (item) {
              return item.prst != '';
            });

            if (total.length != 0) {
              for (var i = 0; i < total.length; i++) {
                var query2 = 'UPDATE VIStudenData SET prst = "' + this.studentRecordFilter[i].prst + '", batch = "' + this.index + '" WHERE VIStudenData.user_id = "' + this.studentRecordFilter[i].user_id + '" And VIStudenData.schoolId = "' + this.schoolId + '"';
                this.sqliteDB.update(query2).then(function (res) {// console.log("upload attandance");
                });
              }

              this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], {
                queryParams: {
                  "otp": '',
                  "schoolId": this.schoolId,
                  "batch": this.index,
                  "status": 1,
                  "class": cls,
                  "CycleId": this.CycleId,
                  "InsertClsSec": this.InsertClsSec,
                  "schoolName": this.schoolName
                }
              }); // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls } })
            } else {
              this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], {
                queryParams: {
                  "otp": '',
                  "schoolId": this.schoolId,
                  "batch": this.index,
                  "status": 1,
                  "class": cls,
                  "CycleId": this.CycleId,
                  "InsertClsSec": this.InsertClsSec,
                  "schoolName": this.schoolName
                }
              }); // this.router.navigate(['/tabs/vasipu-iyakam/vi-photoupload'], { queryParams: { "otp": '', "schoolId": this.schoolId, "batch": this.index, "status": 1, "class": cls } })
            }
          }
        }, {
          key: "classSectionUpdate",
          value: function classSectionUpdate() {
            var _this17 = this;

            var recordClass = [];

            for (var i = 0; i < this.form.controls["class"].value.length; i++) {
              var data = {
                "class_id": this.form.controls["class"].value[i]["class"],
                "section": this.form.controls["class"].value[i].sec,
                "school_id": this.schoolId,
                "activity_date": this.currentDate,
                "Batch": this.index,
                "UserId": this.userID
              };
              recordClass.push(data);
            } // console.log(recordClass,this.form.controls.class,"this.form.controls.class",this.index);


            this.insertLocalClassList(recordClass);
            setTimeout(function () {
              _this17.studentAttUpdate();
            }, 1000);
          }
        }, {
          key: "vasiIpyakam",
          value: function vasiIpyakam() {
            var _this18 = this;

            var query = 'SELECT * FROM VasipuIStatusDetail';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this18.syncstudentStatusData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this18.syncstudentStatusData.push(data.rows.item(i));
                } // console.log(this.syncstudentStatusData);


                var _loop5 = function _loop5() {
                  if (_this18.syncstudentStatusData[m].status == 2) {
                    var datajson = JSON.parse(_this18.syncstudentStatusData[m].ClsSec);
                    var userID = _this18.syncstudentStatusData[m].userId;
                    var schoolID = _this18.syncstudentStatusData[m].schlid;
                    var batchID = _this18.syncstudentStatusData[m].batchId;
                    var _data = {
                      "records": [{
                        "IndexId": "",
                        "UserId": _this18.syncstudentStatusData[m].userId,
                        "SchlId": _this18.syncstudentStatusData[m].schlid,
                        "Batch": _this18.syncstudentStatusData[m].batchId,
                        "StudId1": _this18.syncstudentStatusData[m].stud_1,
                        "StudId2": _this18.syncstudentStatusData[m].stud_2,
                        "StudId3": _this18.syncstudentStatusData[m].stud_3,
                        "StartTime": _this18.syncstudentStatusData[m].start,
                        "EndTime": _this18.syncstudentStatusData[m].end,
                        "StartPhoto": _this18.syncstudentStatusData[m].startphoto,
                        "StartPhotoName": _this18.syncstudentStatusData[m].startphotoblob,
                        "EndPhoto": _this18.syncstudentStatusData[m].endphoto,
                        "EndPhotoName": _this18.syncstudentStatusData[m].endphotoblob,
                        "StartLat": _this18.syncstudentStatusData[m].lat1,
                        "StartLongi": _this18.syncstudentStatusData[m].long1,
                        "EndLat": _this18.syncstudentStatusData[m].lat2,
                        "EndLongi": _this18.syncstudentStatusData[m].long2,
                        "Data": datajson
                      }]
                    };

                    _this18.userService.submitSessionData(_data).subscribe(function (res) {
                      // console.log(res);
                      if (res.dataStatus) {
                        var query5 = 'UPDATE VIStatusbatchDatas SET sync = 3 WHERE VIStatusbatchDatas.userid = "' + userID + '" And VIStatusbatchDatas.batch = "' + batchID + '"';
                        var query2 = 'UPDATE VasipuIStatusDetail SET status = 3 WHERE VasipuIStatusDetail.schlid = "' + schoolID + '" And VasipuIStatusDetail.batchId = "' + batchID + '"';
                        return _this18.sqliteDB.update(query5).then(function (res) {
                          return _this18.sqliteDB.update(query2).then(function (res) {// console.log("upload start session");
                          });
                        });
                      } else {}
                    });
                  }
                };

                for (var m = 0; m < _this18.syncstudentStatusData.length; m++) {
                  _loop5();
                }
              } else {}
            });
          } //pop

        }, {
          key: "deleteAlert",
          value: function deleteAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
              var _this19 = this;

              var alert;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Notification',
                      // subHeader: 'Next cycle will start',
                      message: 'இது உங்களின் கடைசி batch-ஆக இருப்பதனால், மீதமுள்ள அனைத்து வகுப்பு மற்றும் பிரிவுகளையும் தேர்ந்தெடுக்கவும்.',
                      buttons: [// {
                      //   text: 'Cancel',
                      //   role: 'cancel',
                      //   cssClass: 'cancel_click',
                      // },
                      {
                        cssClass: 'cancel_click',
                        text: 'OK',
                        handler: function handler(data) {
                          _this19.form.controls['class'].setValue('');

                          _this19.form.controls['class'].setValidators(null);

                          _this19.form.controls['class'].updateValueAndValidity();

                          _this19.activeNextAttd = false;
                          var control = _this19.form.controls['student_details'];

                          for (var i = control.length - 1; i >= 0; i--) {
                            control.removeAt(i);
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
          key: "selectfilterClass",
          value: function selectfilterClass(item) {
            this.filterClasssec = '';
            this.filtersec = '';
            this.filterClasssec = item.detail.value["class"];
            this.filtersec = item.detail.value.sec; // this.pushfilter = []
            // this.classArray
            // let itemdata = item.detail.value
            // if(itemdata.length != 0){
            //   this.filterActive = true
            // } else {
            //   this.filterActive = false
            // }
            // // console.log(itemdata,"item");
            // for(let i=0; i < itemdata.length; i++){
            //  let filter = this.studentRecordFilter.filter(item=> item.class_studying_id == itemdata[i].class && item.class_section == itemdata[i].sec)
            // //  this.pushfilter.push(filter)
            //  for (let n = 0; n < filter.length; n++) {
            //   this.pushfilter.push(filter[n])
            // }
            // }
            // console.log(this.pushfilter,"pushfilter");
          } //pop

        }, {
          key: "confirmAlert",
          value: function confirmAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee3() {
              var _this20 = this;

              var alert;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return this.alertController.create({
                      cssClass: 'popCalssInfo',
                      header: 'Alert',
                      // subHeader: 'Next cycle will start',
                      message: 'உங்களின் ஒரு முழு சுற்று நிறைவுற்றது. அடுத்த சுற்றை துவங்க Ok-வை Click செய்யவும்.',
                      buttons: [// {
                      //   text: 'Cancel',
                      //   role: 'cancel',
                      //   cssClass: 'cancel_click',
                      // },
                      {
                        cssClass: 'cancel_click',
                        text: 'OK',
                        handler: function handler(data) {
                          _this20.router.navigate(['/tabs/home']);
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
          key: "alertPopup",
          value: function alertPopup(text) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee4() {
              var alert;
              return _regenerator().w(function (_context4) {
                while (1) switch (_context4.n) {
                  case 0:
                    _context4.n = 1;
                    return this.alertController.create({
                      header: 'Notification',
                      cssClass: 'popCalssInfo',
                      // subHeader:' Batch '+ this.batch +' completed',
                      message: text,
                      buttons: [{
                        text: 'OK',
                        cssClass: 'alert-button-confirm'
                      }]
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
        }]);
      }();

      _VasipuiyakamsessionPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: src_app_services_tnvn_services_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService
        }];
      };

      _VasipuiyakamsessionPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-vasipuiyakamsession',
        template: _raw_loader_vasipuiyakamsession_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_vasipuiyakamsession_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VasipuiyakamsessionPage);
      /***/
    },

    /***/
    7220:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.page.scss ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pagealign {\n  padding: 3%;\n  padding-top: 4% !important;\n}\n\n.pagealignbatch {\n  padding: 3% !important;\n}\n\n.selectdata {\n  border: 1px solid #BE3455;\n  background-color: white !important;\n}\n\n.headleft {\n  text-align: start;\n  padding-left: 15px;\n}\n\n.headright {\n  text-align: end;\n  padding-left: 15px;\n}\n\n.headCard {\n  border-radius: 2%;\n  margin-bottom: 5%;\n}\n\n.form-bgn {\n  border-top-right-radius: 5%;\n  border-top-left-radius: 5%;\n  background-color: #dce0e0;\n  margin: 3%;\n}\n\n.textItem {\n  padding: 5%;\n}\n\n.totalHed {\n  border-top: dotted;\n  padding-top: 5%;\n  margin-top: 6%;\n  text-align: center;\n}\n\n.studHed {\n  padding: 5px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.corner-head {\n  border-left: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhc2lwdWl5YWthbXNlc3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0U7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBRko7O0FBT0U7RUFDRSxXQUFBO0FBSko7O0FBT0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFPSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSk47O0FBT0k7RUFDRSxzQkFBQTtBQUpOIiwiZmlsZSI6InZhc2lwdWl5YWthbXNlc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VhbGlnbntcclxuICBwYWRkaW5nOiAzJTtcclxuICBwYWRkaW5nLXRvcDogNCUgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5wYWdlYWxpZ25iYXRjaHtcclxuICBwYWRkaW5nOiAzJSAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDMlICFpbXBvcnRhbnQ7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0ZGF0YSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0JFMzQ1NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGVhZGxlZnQge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweFxyXG59XHJcblxyXG4uaGVhZHJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4XHJcbn1cclxuXHJcbi5oZWFkQ2FyZCB7XHJcbiAgLy8gcGFkZGluZzogMiU7XHJcbiAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbiAgLmZvcm0tYmdue1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNlMGUwO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgfVxyXG5cclxuICAudGV4dEl0ZW0ge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvdGFsSGVkIHtcclxuICAgICAgYm9yZGVyLXRvcDogZG90dGVkO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0dWRIZWQge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcm5lci1oZWFkIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxuICAgIH0iXX0= */";
      /***/
    },

    /***/
    76682:
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/vasipuiyakamsession/vasipuiyakamsession.page.html ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header *ngIf=\"!attadActive\">\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\" *ngIf=\"!attadActive\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div>{{emis_username}}</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">{{schoolName}}</div>\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header *ngIf=\"attadActive\">\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"gotostudentpage()\" *ngIf=\"attadActive\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div style=\"font-size: small;\">{{emis_username}} - {{schoolName}}</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">Total Present : {{this.form.value.presentTotal}} - Batch {{index}}</div>\r\n      </ion-title>\r\n    <!-- <ion-title>Total Present : {{this.form.value.presentTotal}}</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!attadActive\">\r\n  <ion-row class=\"pagealign\">\r\n    <ion-col size=\"12\">\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\">\r\n        <ion-row>\r\n          <ion-col size=\"9\" class=\"headleft\" *ngIf=\"totalsmallstudent != '0'\">Total No. of. Students (4-5 Std)</ion-col>\r\n          <ion-col size=\"3\" class=\"headright\" *ngIf=\"totalsmallstudent != '0'\"><b>{{totalsmallstudent}}</b></ion-col>\r\n          <ion-col size=\"9\" class=\"headleft\" *ngIf=\"totalbigstudent != '0'\">Total No. of. Students (6-9 Std)</ion-col>\r\n          <ion-col size=\"3\" class=\"headright\" *ngIf=\"totalbigstudent != '0'\"><b>{{totalbigstudent}}</b></ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\">\r\n        <ion-row>\r\n          <ion-col size=\"9\" style=\"text-align: start;\">Instructions</ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: end; padding-right: 15px; font-size: large;\" (click)=\"schoolAlert(1)\">\r\n            <ion-icon name=\"eye-outline\"></ion-icon>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\">\r\n        <ion-row *ngFor=\"let data of totalBatchData\">\r\n          <ion-col size=\"9\" style=\"text-align: start; align-self: center;\">Total Batch in this school</ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: end; align-self: center;\" *ngIf=\"data.InsertBatchCount != null\">\r\n            {{data.InsertBatchCount}}/{{data.BatchCount}}\r\n          </ion-col>\r\n          <ion-col size=\"3\" style=\"text-align: end; align-self: center;\" *ngIf=\"data.InsertBatchCount == null\">\r\n            0 /{{data.BatchCount}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"newsecondary headCard pagealignbatch\" *ngIf=\"activeClass == '1'\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" style=\"text-align: start; align-self: center;\">Total Section completed in this school</ion-col>\r\n          <ion-col size=\"2\" *ngFor=\"let data of classJsonData\" style=\"text-align: end; align-self: center;\">\r\n            {{data.class_id}} - {{data.section}}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row class=\"pagealignbatch\">\r\n    <ion-col size=\"3\" *ngFor=\"let bat of batchRecord; let i = index\" >\r\n      <ion-card *ngIf=\"bat.sync == 0\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: #76727a8f !important; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 1\" class=\"newprimary\" style=\"font-weight: bolder;padding: 15px 0px;\"\r\n        (click)=\"classdropdownList(bat.batchid)\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 3\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: rgb(48, 167, 72) !important; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 2\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: #70BBFF; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card *ngIf=\"bat.sync == 4\" (click)=\"nextpageOut(bat.batchid,bat.schoolId)\"\r\n        style=\"font-weight: bolder;padding: 15px 0px; background-color: #a07b4b; color: #fff\">\r\n        <ion-row style=\"display: flex; justify-content: center; align-items: center;\">Batch\r\n          {{bat.batchid}}</ion-row>\r\n      </ion-card>\r\n\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n    <form [formGroup]=\"form\" class=\"pagealignbatch form-bgn\" *ngIf=\"classActive\">\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"textItem\">\r\n          <ion-label class=\"newsecondaryTex\"> Class </ion-label>\r\n          <ion-select class=\"selectdata\" label=\"Default label\" formControlName=\"class\" (ionChange)=\"selectClass($event)\" [multiple]=\"true\"\r\n            placeholder=\"Class\">\r\n            <ion-select-option [value]=\"cls\" *ngFor=\"let cls of classList\">{{cls.class}} -\r\n              {{cls.sec}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"12\" formArrayName=\"student_details\">\r\n          <ion-row *ngFor=\"let item of form.get('student_details')['controls']; let i = index;\" [formGroupName]=\"i\" style=\"padding: 3%;\">\r\n            <ion-col size=\"6\" style=\"padding: 5px;\">\r\n              <ion-label class=\"newsecondaryTex\"> Total student in {{item.value.class}}-{{item.value.sec}} </ion-label>\r\n              <ion-input class=\"selectdata\" type=\"number\" placeholder=\"Total students\" formControlName=\"total\" disabled\r\n                style=\"text-align: center;\">\r\n              </ion-input>\r\n              <ion-row>\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"(item.controls['total'].hasError('required')) && (item.controls['total'].dirty || item.controls['total'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n  \r\n            <ion-col size=\"6\" style=\"padding: 5px;\">\r\n              <ion-label class=\"newsecondaryTex\"> Total present in {{item.value.class}}-{{item.value.sec}} </ion-label>\r\n              <ion-input class=\"selectdata\" type=\"number\" placeholder=\"Total present\" formControlName=\"presentTotal\" \r\n                (ionChange)=\"calculateTotal($event,item.value.total,item.value.presentTotal,i)\"\r\n                style=\"text-align: center;\">\r\n              </ion-input>\r\n              <ion-row>\r\n                <p class=\"error-message\"\r\n                  *ngIf=\"(item.controls['presentTotal'].hasError('required')) && (item.controls['presentTotal'].dirty || item.controls['presentTotal'].touched)\">\r\n                  Field is required</p>\r\n              </ion-row>\r\n            </ion-col>\r\n          </ion-row>\r\n  \r\n          <ion-row *ngIf=\"this.form.controls.presentTotal.value != ''\" class=\"newsecondaryTex totalHed\">\r\n            <ion-col size=\"6\" style=\"padding: 5px;\">\r\n              <ion-label class=\"newsecondaryTex\"> Batch Total : {{this.form.controls.total.value}} </ion-label>\r\n            </ion-col>\r\n            <ion-col size=\"6\" style=\"padding: 5px;color: #4a4b4a;\">\r\n              <ion-label class=\"newsecondaryTex\"> Batch present Total : {{this.form.value.presentTotal}}</ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n  \r\n        <ion-col size=\"12\" style=\"text-align: center;color: white;\">\r\n          <ion-button class=\"newprimary\" (click)=\"gotoAttandPage(this.form.value.class)\">next</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n</ion-content>\r\n\r\n<ion-content *ngIf=\"attadActive\">\r\n  <ion-card>\r\n    <ion-row class=\"newsecondary studHed\">\r\n      <ion-col size=\"5.5\">\r\n        Name\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"corner-head\">\r\n        Class\r\n      </ion-col>\r\n      <ion-col size=\"2.5\" class=\"corner-head\">\r\n        contact\r\n      </ion-col>\r\n      <ion-col size=\"2\" class=\"corner-head\">\r\n        Status\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <ion-row class=\"newsecondary studHed\">\r\n      <ion-col size=\"5\" style=\"text-align: start;align-self: center;\">\r\n        <ion-label class=\"newsecondaryTex\" style=\"color: #fff;\"> <ion-icon name=\"filter-outline\"></ion-icon> Class & sec Filter </ion-label>\r\n     </ion-col>\r\n      <ion-col size=\"7\">\r\n        <ion-select class=\"selectdata\" style=\"color: #114a53;\" label=\"Default label\" (ionChange)=\"selectfilterClass($event)\"\r\n        placeholder=\"Please Select\">\r\n        <ion-select-option [value]=\"cls\" *ngFor=\"let cls of classArray\">{{cls.class}} -\r\n          {{cls.sec}}</ion-select-option> \r\n      </ion-select>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <!-- <div *ngIf=\"filterActive\">\r\n    <ion-card *ngFor=\"let data of pushfilter; let i = index\" style=\"padding: 5px;\">\r\n      <ion-row style=\"text-align: center;\">\r\n        <ion-col size=\"5.5\" style=\"align-self: center;\">\r\n          {{data.name}}\r\n          <div style=\"font-size: small;\"> {{data.user_id}} </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"corner-head\" style=\"align-self: center;\">\r\n          {{data.class_studying_id}} - {{data.class_section}}\r\n        </ion-col>\r\n        <ion-col size=\"2.5\" class=\"corner-head\" style=\"align-self: center;\">\r\n          <ion-icon name=\"call\" (click)=\"callPhoneNumber(data.phone_number)\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\" class=\"corner-head\">\r\n          <ion-button *ngIf=\"data.prst == ''\" (click)=\"studentStatus(data.user_id,1,data, 'p', i, data.key,'2')\"\r\n          style=\"color: white;--background: #58B3BE !important\">P</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '1'\" (click)=\"studentStatus(data.user_id,2,data, 'p', i, data.key,'2')\"\r\n            style=\"color: white;--background: #F9877A !important;\">A</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '2'\" (click)=\"studentStatus(data.user_id,'',data, 'od', i, data.key,'2')\"\r\n            style=\"color: white;--background: rgb(220, 178, 14)\">OD</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n    <div *ngFor=\"let data of studentRecordFilter; let i = index\">\r\n     <ion-card *ngIf=\"(filterClasssec == '') || (filterClasssec == data.class_studying_id && filtersec == data.class_section)\">\r\n      <ion-row style=\"text-align: center;\">\r\n        <ion-col size=\"5.5\" style=\"align-self: center;\">\r\n          {{data.name}}\r\n          <div style=\"font-size: small;\"> {{data.user_id}} </div>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"corner-head\" style=\"align-self: center;\">\r\n          {{data.class_studying_id}} - {{data.class_section}}\r\n        </ion-col>\r\n        <ion-col size=\"2.5\" class=\"corner-head\" style=\"align-self: center;\">\r\n          <ion-icon name=\"call\" (click)=\"callPhoneNumber(data.phone_number)\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"2\" style=\"align-self: center;\" class=\"corner-head\">\r\n          <ion-button *ngIf=\"data.prst == ''\" (click)=\"studentStatus(data.user_id,1,data, 'p', i, data.key,'1')\"\r\n          style=\"color: white;--background: #58B3BE !important\">P</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '1'\" (click)=\"studentStatus(data.user_id,2,data, 'p', i, data.key,'1')\"\r\n            style=\"color: white;--background: #F9877A !important;\">A</ion-button>\r\n          <ion-button *ngIf=\"data.prst == '2'\" (click)=\"studentStatus(data.user_id,'',data, 'od', i, data.key,'1')\"\r\n            style=\"color: white;--background: rgb(220, 178, 14)\">OD</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n    </div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"attadActive\">\r\n  <ion-row>\r\n    <ion-col size=\"6\" style=\"text-align: center;\">\r\n     <ion-button class=\"newsecondary\" (click)=\"gotostudentpage()\">Back</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\" style=\"text-align: center;\">\r\n      <ion-button class=\"newprimary\" (click)=\"gotoNext(this.form.controls.class.value)\">Save</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vasipu-iyakam_vasipuiyakamsession_vasipuiyakamsession_module_ts-es5.js.map