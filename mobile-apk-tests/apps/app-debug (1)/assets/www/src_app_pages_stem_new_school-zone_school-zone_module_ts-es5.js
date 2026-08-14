(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_school-zone_school-zone_module_ts"], {
    /***/
    40292:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/stem_new/school-zone/school-zone-routing.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolZonePageRoutingModule": function SchoolZonePageRoutingModule() {
          return (
            /* binding */
            _SchoolZonePageRoutingModule
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


      var _school_zone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-zone.page */
      55990);

      var routes = [{
        path: '',
        component: _school_zone_page__WEBPACK_IMPORTED_MODULE_0__.SchoolZonePage
      }];

      var _SchoolZonePageRoutingModule = /*#__PURE__*/_createClass(function SchoolZonePageRoutingModule() {
        _classCallCheck(this, SchoolZonePageRoutingModule);
      });

      _SchoolZonePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SchoolZonePageRoutingModule);
      /***/
    },

    /***/
    62957:
    /*!******************************************************************!*\
      !*** ./src/app/pages/stem_new/school-zone/school-zone.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolZonePageModule": function SchoolZonePageModule() {
          return (
            /* binding */
            _SchoolZonePageModule
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


      var _school_zone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./school-zone-routing.module */
      40292);
      /* harmony import */


      var _school_zone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-zone.page */
      55990);

      var _SchoolZonePageModule = /*#__PURE__*/_createClass(function SchoolZonePageModule() {
        _classCallCheck(this, SchoolZonePageModule);
      });

      _SchoolZonePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _school_zone_routing_module__WEBPACK_IMPORTED_MODULE_0__.SchoolZonePageRoutingModule],
        declarations: [_school_zone_page__WEBPACK_IMPORTED_MODULE_1__.SchoolZonePage]
      })], _SchoolZonePageModule);
      /***/
    },

    /***/
    55990:
    /*!****************************************************************!*\
      !*** ./src/app/pages/stem_new/school-zone/school-zone.page.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SchoolZonePage": function SchoolZonePage() {
          return (
            /* binding */
            _SchoolZonePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_school_zone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./school-zone.page.html */
      24281);
      /* harmony import */


      var _school_zone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./school-zone.page.scss */
      27004);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
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
      /* harmony import */


      var _class_sec_list_class_sec_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../class-sec-list/class-sec-list.page */
      15907);

      var _SchoolZonePage = /*#__PURE__*/function () {
        function SchoolZonePage(router, sqliteDB, userService, upload, http, usersessionService, alertController, modalCtrl) {
          _classCallCheck(this, SchoolZonePage);

          this.router = router;
          this.sqliteDB = sqliteDB;
          this.userService = userService;
          this.upload = upload;
          this.http = http;
          this.usersessionService = usersessionService;
          this.alertController = alertController;
          this.modalCtrl = modalCtrl;
          this.username = this.usersessionService.emis_user_id();
        }

        return _createClass(SchoolZonePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            // this.getServerData()
            this.localData();
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/stem-dashboard']);
          }
        }, {
          key: "localData",
          value: function localData() {
            var _this = this;

            var query = 'SELECT * FROM schlZonedetails' + ' WHERE BlkId = "' + this.username + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this.dataList.push(data.rows.item(i));
                }

                _this.schoolListData = [];
                _this.schoolListData = _this.dataList;
              } else {
                _this.getServerData();
              }
            });
          }
        }, {
          key: "getServerData",
          value: function getServerData() {
            var _this2 = this;

            this.schoolListData = [];
            this.userService.getschoolZoneDetails().subscribe(function (response) {
              _this2.schoolListData = response.result;

              _this2.insertLocalData(_this2.schoolListData);
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(elementData) {
            var _this3 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO schlZonedetails VALUES (?,?,?,?,?,?,?)", [null, _this3.username, element.BlkName, element.SchlId, element.SchlName, element.UdiseCode, element.MobileNo]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Locally");
            });
          }
        }, {
          key: "localStudentData",
          value: function localStudentData(item) {
            var _this4 = this;

            var query = 'SELECT * FROM AllStemStudentslists' + ' WHERE SchlId = "' + item + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                console.log("local json");

                _this4.pageImage(item, '1');
              } else {
                console.log("server json");

                _this4.studentData(item);
              }
            });
          }
        }, {
          key: "studentData",
          value: function studentData(item) {
            var _this5 = this;

            var bucketName = "renewalapplicationemis";
            var filename = "middle_school_profile_info_data_" + item + ".json";
            var expiry = 1800;
            this.upload.getUploadedFiles(bucketName, filename, expiry).subscribe(function (result) {
              if (result) {
                _this5.http.get(result.url).subscribe(function (data) {
                  _this5.Data = data;

                  _this5.insertStudentLocalData(data.studentlist, item); // this.pageImage(item,'2')

                });
              }
            });
          }
        }, {
          key: "insertStudentLocalData",
          value: function insertStudentLocalData(elementData, item) {
            var _this6 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO AllStemStudentslists VALUES (?,?,?,?,?,?,?,?,?,?,?)", [null, item, element.class_section, element.class_studying_id, element.dob, element.gender, element.group_code, element.id, element.name, element.phone_number, element.user_id]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              _this6.pageImage(item, '2');
            });
          }
        }, {
          key: "pageImage",
          value: function pageImage(schoolid, local) {
            this.router.navigate(['/tabs/otp-page'], {
              queryParams: {
                "schoolId": schoolid,
                "local": local
              }
            });
          }
        }, {
          key: "viewData",
          value: function viewData(schId) {
            var _this7 = this;

            this.schoolClassData = [];
            this.userService.getclassDetails(schId).subscribe(function (response) {
              _this7.schoolClassData = response.result;

              _this7.schoolAlert();
            });
          }
        }, {
          key: "insertLocalData1",
          value: function insertLocalData1(elementData) {
            var _this8 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO schlZonedetails VALUES (?,?,?,?,?,?,?)", [null, _this8.username, element.BlkName, element.SchlId, element.SchlName, element.UdiseCode, element.MobileNo]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Locally");
            });
          }
        }, {
          key: "schoolAlert",
          value: function schoolAlert() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var modal;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.modalCtrl.create({
                      component: _class_sec_list_class_sec_list_page__WEBPACK_IMPORTED_MODULE_6__.ClassSecListPage,
                      componentProps: {
                        schoolClassData: this.schoolClassData
                      },
                      cssClass: 'view-image-modal'
                    });

                  case 1:
                    modal = _context.v;
                    _context.n = 2;
                    return modal.present();

                  case 2:
                    return _context.a(2);
                }
              }, _callee, this);
            }));
          }
        }]);
      }();

      _SchoolZonePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_2__.UploadService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
        }];
      };

      _SchoolZonePage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-school-zone',
        template: _raw_loader_school_zone_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_school_zone_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SchoolZonePage);
      /***/
    },

    /***/
    27004:
    /*!******************************************************************!*\
      !*** ./src/app/pages/stem_new/school-zone/school-zone.page.scss ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".login-bg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 0px;\n}\n\n.toolbar {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nion-title {\n  padding-inline: 10px;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbC16b25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZFQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzY2hvb2wtem9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhcmQtc3RlbS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH0gXHJcbiAgXHJcbiAgLmJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6b29tOjIuMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I4NTdmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSAiXX0= */";
      /***/
    },

    /***/
    24281:
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/school-zone/school-zone.page.html ***!
      \********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n\r\n  <div class=\"login-bg\">\r\n    <div>\r\n      <ion-buttons slot=\"start\" class=\"back-icon\">\r\n        <ion-icon style=\"margin-top: 2%;\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n        </ion-icon>\r\n        <ion-title style=\"margin-top: 2%;font-size: 11px;\">Your School Zone</ion-title>\r\n      </ion-buttons>\r\n    </div>\r\n\r\n    <ion-row class=\"card-item\">\r\n\r\n      <ion-col size=\"12\" style=\"padding-top: 5%;\">\r\n        <ion-card style=\"color: #6B4DC9;font-weight: bolder;padding: 5px\">\r\n          <ion-row>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\">School name</ion-col>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\">UDISE</ion-col>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\">Contact</ion-col>\r\n            <ion-col size=\"1.5\" style=\"text-align: center;\">View</ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n\r\n        <ion-card style=\"padding: 3px\" *ngFor=\"let item of schoolListData\">\r\n          <ion-row >\r\n            <ion-col size=\"3.5\" style=\"text-align: center;\" (click)=\"localStudentData(item.SchlId)\">\r\n              <div> {{item.SchlName}} </div>\r\n              <div style=\"font-size: small;\"> {{item.BlkName}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"3.5\" style=\"text-align: center;align-self: center;\" (click)=\"localStudentData(item.SchlId)\">\r\n              <div> {{item.UdiseCode}} </div>\r\n            </ion-col> \r\n            <ion-col size=\"3.5\" style=\"text-align: center;align-self: center;\" (click)=\"localStudentData(item.SchlId)\">\r\n              <div> {{item.MobileNo}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"1.5\" style=\"text-align: center;align-self: center;\" (click)=\"viewData(item.SchlId)\">\r\n              <ion-icon name=\"eye-outline\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row> \r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_school-zone_school-zone_module_ts-es5.js.map