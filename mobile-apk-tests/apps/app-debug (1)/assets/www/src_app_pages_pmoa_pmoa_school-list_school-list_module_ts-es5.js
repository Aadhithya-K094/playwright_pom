(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_pmoa_pmoa_school-list_school-list_module_ts"], {
    /***/
    40434:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/school-list/school-list-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPageRoutingModule": function SchoolListPageRoutingModule() {
          return (
            /* binding */
            _SchoolListPageRoutingModule
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


      var _school_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list.page */
      1233);

      var routes = [{
        path: '',
        component: _school_list_page__WEBPACK_IMPORTED_MODULE_0__.SchoolListPage
      }];

      var _SchoolListPageRoutingModule = /*#__PURE__*/_createClass(function SchoolListPageRoutingModule() {
        _classCallCheck(this, SchoolListPageRoutingModule);
      });

      _SchoolListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolListPageRoutingModule);
      /***/
    },

    /***/
    10158:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/school-list/school-list.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPageModule": function SchoolListPageModule() {
          return (
            /* binding */
            _SchoolListPageModule
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


      var _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-list-routing.module */
      40434);
      /* harmony import */


      var _school_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page */
      1233);

      var _SchoolListPageModule = /*#__PURE__*/_createClass(function SchoolListPageModule() {
        _classCallCheck(this, SchoolListPageModule);
      });

      _SchoolListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _school_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolListPageRoutingModule],
        declarations: [_school_list_page__WEBPACK_IMPORTED_MODULE_1__.SchoolListPage]
      })], _SchoolListPageModule);
      /***/
    },

    /***/
    1233:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/school-list/school-list.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolListPage": function SchoolListPage() {
          return (
            /* binding */
            _SchoolListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-list.page.html */
      832);
      /* harmony import */


      var _school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-list.page.scss */
      84667);
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


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/pmoa.services */
      47567);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);

      var _SchoolListPage = /*#__PURE__*/function () {
        function SchoolListPage(router, fb, pmoaService, alertService, usersessionService, alertController, modalController, sqliteDB) {
          _classCallCheck(this, SchoolListPage);

          this.router = router;
          this.fb = fb;
          this.pmoaService = pmoaService;
          this.alertService = alertService;
          this.usersessionService = usersessionService;
          this.alertController = alertController;
          this.modalController = modalController;
          this.sqliteDB = sqliteDB;
          this.widgetsCard = false; // this.userId = '27';

          this.userId = this.usersessionService.user_id();
          this.username = this.usersessionService.username(); // this.useriddata = '412';

          this.useriddata = this.usersessionService.user_id();
          this.usernameId = this.usersessionService.emis_username();
          console.log('user', this.usernameId);
        }

        return _createClass(SchoolListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initialValidator();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.checkLocalExistSchoolList();
            this.getSchoolCount();
            this.pmoaLocalDB();
          }
        }, {
          key: "initialValidator",
          value: function initialValidator() {
            this.form = this.fb.group({
              district: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.userId),
              block: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', null)
            });
          } //back

        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/home']);
          } //next

        }, {
          key: "nextPage",
          value: function nextPage(SchoolId, SchoolName) {
            this.router.navigate(['/tabs/class-list'], {
              queryParams: {
                SchoolId: SchoolId,
                SchoolName: SchoolName
              }
            });
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this = this;

            var query1 = 'DELETE FROM  SchoolLists';
            var query2 = 'DELETE FROM  PmoaCountdetails';
            return this.sqliteDB.getDataLocalDB(query1).then(function (data) {
              return _this.sqliteDB.getDataLocalDB(query2).then(function (data) {
                _this.getSchoolData();

                _this.pmoaLocalDB(); // From Server

              });
            });
          } // Check Local Data Exist Method_________________________________________________________________________________*

        }, {
          key: "checkLocalExistSchoolList",
          value: function checkLocalExistSchoolList() {
            var _this2 = this;

            this.blockData = this.userId;
            this.sqliteDB.checkDataExistsWithConditions('SchoolLists', "BlockId", this.useriddata).then(function (res) {
              if (res == true) {
                _this2.getSchoolLocalDB(); // Local Data

              } else {
                if (_this2.blockData) {
                  _this2.getSchoolData(); // From Server

                }
              }
            });
          } //school data

        }, {
          key: "getSchoolData",
          value: function getSchoolData() {
            var _this3 = this;

            this.pmoaService.getSchoolListNew(this.useriddata).subscribe(function (response) {
              // console.log("School list response=",response);
              if (response.dataStatus == true) {
                _this3.schoolList = [];
                _this3.searchData = [];
                _this3.schoolList = response.result;
                _this3.searchData = response.result;

                if (response.result.length > 0) {
                  response.result.forEach(function (element) {
                    _this3.saveSchoolLocalDB(element);
                  });
                }
              }
            });
          }
        }, {
          key: "saveSchoolLocalDB",
          value: function saveSchoolLocalDB(element) {
            var datainsert = 'INSERT INTO SchoolLists VALUES (?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, element.BlockId, element.CompletedByDr, element.SchoolId, element.SchoolName]).then(function (insertres) {
              if (insertres) {}
            });
          }
        }, {
          key: "pmoaCountDataLocalDB",
          value: function pmoaCountDataLocalDB(element) {
            var datainsert = 'INSERT INTO PmoaCountdetails VALUES (?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, this.useriddata, element.TotSchlCount[0].Count, element.TotSchlScrndCount[0].Count, element.TotSchlRefrdPmoa[0].Count, element.TotSchlScrndByPmoa[0].Count, '']).then(function (insertres) {
              if (insertres) {// console.log('inserted successfully')
              }
            });
          }
        }, {
          key: "getSchoolLocalDB",
          value: function getSchoolLocalDB() {
            var _this4 = this;

            // this.widgetsCard = true;
            var query = 'SELECT * FROM SchoolLists' + ' WHERE BlockId = "' + this.useriddata + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this4.schoolList = [];
                _this4.searchData = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this4.schoolList.push(data.rows.item(i));

                  _this4.searchData.push(data.rows.item(i));
                }
              }
            });
          }
        }, {
          key: "pmoaLocalDB",
          value: function pmoaLocalDB() {
            var _this5 = this;

            // this.widgetsCard = true;
            var query = 'SELECT * FROM PmoaCountdetails' + ' WHERE BlkId = "' + this.useriddata + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this5.totalSchool = data.rows.item(i).TotSchlCount;
                  _this5.totalScnTech = data.rows.item(i).TotSchlScrndCount;
                  _this5.totalrefPmoa = data.rows.item(i).TotSchlRefrdPmoa;
                  _this5.totalscnPmoa = data.rows.item(i).TotSchlScrndByPmoa;
                }
              } else {
                _this5.getSchoolCount(); // From Server

              }
            });
          } // widget count

        }, {
          key: "getSchoolCount",
          value: function getSchoolCount() {
            var _this6 = this;

            this.pmoaService.getTotalCont(this.useriddata).subscribe(function (response) {
              _this6.totalSchool = response.result.TotSchlCount[0].Count;
              _this6.totalScnTech = response.result.TotSchlScrndCount[0].Count;
              _this6.totalrefPmoa = response.result.TotSchlRefrdPmoa[0].Count;
              _this6.totalscnPmoa = response.result.TotSchlScrndByPmoa[0].Count;

              _this6.pmoaCountDataLocalDB(response.result);
            });
          } // searching data 

        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this7 = this;

            this.searchData = [];
            this.searchTerm = event.detail.value.trim();
            this.searchData = this.schoolList.filter(function (item) {
              return item.SchoolName.toLowerCase().indexOf(_this7.searchTerm.toLowerCase()) > -1;
            });
          } //pop

        }, {
          key: "schoolAlert",
          value: function schoolAlert(schoolid) {
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
                      subHeader: 'All students screened by me',
                      message: 'If you have completed, please click ok',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel_click'
                      }, {
                        cssClass: 'cancel_click',
                        text: 'OK',
                        handler: function handler(data) {
                          _this8.completeScrData(schoolid);
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
          } //complete screening data

        }, {
          key: "completeScrData",
          value: function completeScrData(schoolid) {
            var _this9 = this;

            this.pmoaService.getTotalSchoolCont(schoolid).subscribe(function (response) {
              var totSdntsRefPmoa = response.result.TotStuRefrdPmoa[0].Count;
              var totSdntsScrMe = response.result.TotStuScrndByPmoa[0].Count;

              if (totSdntsRefPmoa == totSdntsScrMe) {
                var data = {
                  records: [{
                    "SchlId": schoolid,
                    "UserId": _this9.usernameId,
                    "BlockId": _this9.useriddata
                  }]
                };

                _this9.pmoaService.completeScreening(data).subscribe(function (res) {
                  if (res.dataStatus == true) {
                    _this9.onSync();
                  } else {
                    _this9.alertService.warning("Error");
                  } // window.location.reload();

                }, function (error) {});
              } else {
                _this9.alertService.warning("Some Students Not Yet Screened in this School");
              }
            });
          }
        }]);
      }();

      _SchoolListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
        }, {
          type: src_app_services_emis_pmoa_services__WEBPACK_IMPORTED_MODULE_4__.PmoaService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_2__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }];
      };

      _SchoolListPage.propDecorators = {
        selectRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['mySelect', {
            "static": false
          }]
        }]
      };
      _SchoolListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-school-list',
        template: _raw_loader_school_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolListPage);
      /***/
    },

    /***/
    84667:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/pmoa/pmoa/school-list/school-list.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  white-space: pre-line;\n}\n\nion-card {\n  border-radius: 10px;\n}\n\n.footer-btn {\n  background-color: var(--ion-color-primary);\n  color: #fff;\n  text-align: center;\n}\n\n.card-align {\n  background-color: white;\n  color: black;\n}\n\n.item-style {\n  padding-right: 2%;\n  --padding-start: 5px !important;\n  font-size: 15px;\n  padding-left: 2%;\n  --ion-color-base:none !important;\n  --ion-color-contrast:gray !important;\n  --ion-color-contrast-rgb:gray !important;\n}\n\n.select {\n  color: #2176b9;\n  white-space: pre-line !important;\n}\n\n.todays-quiz-icon {\n  font-size: 25px;\n  width: 30px;\n}\n\n.barTotal-container {\n  background-color: #6968d9;\n}\n\n.labelTotal {\n  color: #6968d9;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelTotalText {\n  color: #6968d9;\n  font-size: 15px;\n}\n\n.labelScn {\n  color: #e169e9;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelScntext {\n  color: #e169e9;\n  font-size: 15px;\n}\n\n.labelPMOAtext {\n  color: #b18504;\n  font-size: 15px;\n}\n\n.labelPMOA {\n  color: #b18504;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.bar-PMOA {\n  background-color: #b18504;\n}\n\n.labelReported {\n  color: #439de3;\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.labelReportedtext {\n  color: #439de3;\n  font-size: 15px;\n}\n\n.bar-Scn {\n  background-color: #e169e9;\n}\n\n.bar-ScnMe {\n  background-color: #439de3;\n}\n\n.student-list {\n  padding-top: 13px;\n  padding-bottom: 10px;\n  font-size: 16px;\n}\n\n.pt-15 {\n  padding-left: 15px;\n  font-size: 18px;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.grid-padding {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHFCQUFBO0FBSEo7O0FBTUU7RUFDRSxtQkFBQTtBQUhKOztBQU1FO0VBRUUsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPRTtFQUVFLHVCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVNFO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtBQU5GOztBQVNFO0VBQ0EsY0FBQTtFQUFlLGdDQUNmO0FBTkY7O0FBU0U7RUFFRSxlQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVNFO0VBQ0UseUJBQUE7QUFOSjs7QUFRRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFRRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBTkY7O0FBUUU7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBUUU7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVFFO0VBRUEsY0FBQTtFQUNBLGVBQUE7QUFORjs7QUFRRTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFRRTtFQUNFLHlCQUFBO0FBTEo7O0FBT0U7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBT0U7RUFFQSxjQUFBO0VBQ0EsZUFBQTtBQUxGOztBQU9FO0VBQ0EseUJBQUE7QUFKRjs7QUFNRTtFQUNBLHlCQUFBO0FBSEY7O0FBS0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0U7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0U7RUFDRSxvQkFBQTtBQUZKOztBQUtFO0VBQ0UsWUFBQTtBQUZKIiwiZmlsZSI6InNjaG9vbC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy8gdGVzdFxyXG5cclxucCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItYnRuXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgIFxyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYWxpZ24ge1xyXG4gICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAuaXRlbS1zdHlsZSB7XHJcbiAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAtLWlvbi1jb2xvci1iYXNlOm5vbmUgIWltcG9ydGFudDtcclxuICAtLWlvbi1jb2xvci1jb250cmFzdDpncmF5ICFpbXBvcnRhbnQ7XHJcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOmdyYXkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNlbGVjdCB7XHJcbiAgY29sb3I6ICMyMTc2Yjk7d2hpdGUtc3BhY2U6IFxyXG4gIHByZS1saW5lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudG9kYXlzLXF1aXotaWNvblxyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIH1cclxuICAuYmFyVG90YWwtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTY4ZDk7XHJcbiAgfVxyXG4gIC5sYWJlbFRvdGFsIFxyXG4gIHtcclxuICBjb2xvcjogIzY5NjhkOTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmxhYmVsVG90YWxUZXh0IFxyXG4gIHtcclxuICBjb2xvcjogIzY5NjhkOTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIC5sYWJlbFNjbiBcclxuICB7XHJcbiAgY29sb3I6ICNlMTY5ZTk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIC5sYWJlbFNjbnRleHQgXHJcbiAge1xyXG4gIGNvbG9yOiAjZTE2OWU5O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmxhYmVsUE1PQXRleHQgXHJcbiAge1xyXG4gIGNvbG9yOiAjYjE4NTA0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmxhYmVsUE1PQVxyXG4gIHtcclxuICBjb2xvcjogI2IxODUwNDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmJhci1QTU9BIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTg1MDQ7XHJcbiAgICB9XHJcbiAgLmxhYmVsUmVwb3J0ZWQgXHJcbiAge1xyXG4gIGNvbG9yOiM0MzlkZTM7IDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbiAgLmxhYmVsUmVwb3J0ZWR0ZXh0IFxyXG4gIHtcclxuICBjb2xvcjojNDM5ZGUzOyA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAuYmFyLVNjbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxNjllOTtcclxuICB9XHJcbiAgLmJhci1TY25NZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOWRlMzsgXHJcbiAgfVxyXG4gIC5zdHVkZW50LWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgLnB0LTE1IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7O1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    832:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pmoa/pmoa/school-list/school-list.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">School List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{usernameId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" style=\"color:white\" (click)=\"onSync()\">\r\n      <ion-icon name=\"sync-outline\" style=\"zoom:2.0\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"graybackgrond\">\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid class=\"grid-padding\">\r\n\r\n      <!-- <ion-card class=\"card-widget\">\r\n        <ion-row>\r\n          <ion-col class=\"barTotal-container \" size=\"0.1\"></ion-col>\r\n          <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n            <div class=\"content-text content\">\r\n              <ion-label>\r\n                <p class=\"labelTotal\">{{totalSchool}}</p>\r\n                <p class=\"labelTotalText\">Total Schools</p>\r\n              </ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <div> <img src=\"../../../../assets/icons/pmoa/Total_School.svg\" /><br />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"card-widget\">\r\n        <ion-row>\r\n          <ion-col class=\"bar-Scn\" size=\"0.1\"></ion-col>\r\n          <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n            <div class=\"content-text content\">\r\n              <ion-label>\r\n                <p class=\"labelScn\"> {{totalScnTech}} </p>\r\n                <p class=\"labelScntext\">Total Schools Screened by teacher</p>\r\n              </ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <div> <img src=\"../../../../assets/icons/pmoa/School_Screened.svg\" /><br />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"card-widget\">\r\n        <ion-row>\r\n          <ion-col class=\"bar-PMOA\" size=\"0.1\"></ion-col>\r\n          <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n            <div class=\"content-text content\">\r\n              <ion-label>\r\n                <p class=\"labelPMOA\"> {{totalrefPmoa}} </p>\r\n                <p class=\"labelPMOAtext\">Total Schools referred to PMOA</p>\r\n              </ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <div> <img src=\"../../../../assets/icons/pmoa/pmoaicon.svg\" /><br />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"card-widget\">\r\n        <ion-row>\r\n          <ion-col class=\"bar-ScnMe\" size=\"0.1\"></ion-col>\r\n          <ion-col size=\"9.6\" style=\"padding-left: 10px;\">\r\n            <div class=\"content-text content\">\r\n              <ion-label>\r\n                <p class=\"labelReported\"> {{totalscnPmoa}} </p>\r\n                <p class=\"labelReportedtext\">Total Schools Screened by me</p>\r\n              </ion-label>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <div> <img src=\"../../../../assets/icons/pmoa/screened by_me.svg\" /><br />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card> -->\r\n\r\n\r\n\r\n      <div >\r\n        <ion-row\r\n          style=\"background-color: white;border-left: 8px solid #809eeb;margin: 10px;border-radius: 18px;\">\r\n          <ion-col size=\"10\">\r\n            <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalSchool}}</ion-label><br>\r\n            <ion-label style=\"padding-left: 20px;\">Total Schools </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"align-self: center;\">\r\n            <div>\r\n              <img src=\"../../../../assets/icons/pmoa/Total_School.svg\" />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n    \r\n        <ion-row\r\n          style=\"background-color: white;border-left: 8px solid #f983fc;margin: 10px;border-radius: 18px;\">\r\n          <ion-col size=\"10\">\r\n            <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalScnTech}}</ion-label><br>\r\n            <ion-label style=\"padding-left: 20px;\"> Schools Screened by teacher </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"align-self: center;\">\r\n            <div>\r\n              <img src=\"../../../../assets/icons/pmoa/School_Screened.svg\" />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n    \r\n        <ion-row\r\n          style=\"background-color: white;border-left: 8px solid #c55b13;margin: 10px;border-radius: 18px;\">\r\n          <ion-col size=\"10\">\r\n            <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalrefPmoa}} </ion-label><br>\r\n            <ion-label style=\"padding-left: 20px;\"> Schools referred to PMOA</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"align-self: center;\">\r\n            <div>\r\n              <img src=\"../../../../assets/icons/pmoa/pmoaicon.svg\" />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n    \r\n        <ion-row\r\n          style=\"background-color: white;border-left: 8px solid #69dcf4;margin: 10px;border-radius: 18px;\">\r\n          <ion-col size=\"10\">\r\n            <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{totalscnPmoa}}</ion-label><br>\r\n            <ion-label style=\"padding-left: 20px;\"> Schools Screened by me</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"align-self: center;\">\r\n            <div>\r\n              <img src=\"../../../../assets/icons/pmoa/screened by_me.svg\">\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n\r\n      <ion-searchbar  *ngIf=\"schoolList?.length != 0\" debounce=\"500\" (ionChange)=\"getFilterItems($event)\" placeholder=\"Search\" style=\"padding-left: 12px;\r\n        padding-right: 12px;line-height:32px\"></ion-searchbar>\r\n\r\n    <div *ngIf=\"searchData?.length != 0\">\r\n      <ion-card  class=\"card-align\" *ngFor=\"let item of searchData\" style=\"color: #2176b9;\">\r\n        <ion-row style=\"padding-top: 5px;padding-left: 5px;padding-right: 0px;\">\r\n          <ion-col (click)=\"nextPage(item.SchoolId,item.SchoolName)\" size=\"10\" class=\"student-list\">\r\n            <ion-label>{{item.SchoolName}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" *ngIf=\"item.CompletedByDr == '1' \">\r\n            <img src=\"../../../../assets/icons/pmoa/icons-checks.png\" style=\"height:90%;width:80%;\" >\r\n          </ion-col>\r\n          <ion-col size=\"2\" *ngIf=\"item.CompletedByDr == '0' \">\r\n            <img src=\"../../../../assets/icons/pmoa/confirmation.svg\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-card>\r\n    </div>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_pmoa_pmoa_school-list_school-list_module_ts-es5.js.map