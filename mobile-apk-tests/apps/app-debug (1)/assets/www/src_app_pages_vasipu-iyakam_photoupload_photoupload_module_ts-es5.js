(function () {
  function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

  function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_vasipu-iyakam_photoupload_photoupload_module_ts"], {
    /***/
    32500:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload-routing.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotouploadPageRoutingModule": function PhotouploadPageRoutingModule() {
          return (
            /* binding */
            _PhotouploadPageRoutingModule
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


      var _photoupload_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./photoupload.page */
      52678);

      var routes = [{
        path: '',
        component: _photoupload_page__WEBPACK_IMPORTED_MODULE_0__.PhotouploadPage
      }];

      var _PhotouploadPageRoutingModule = /*#__PURE__*/_createClass(function PhotouploadPageRoutingModule() {
        _classCallCheck(this, PhotouploadPageRoutingModule);
      });

      _PhotouploadPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PhotouploadPageRoutingModule);
      /***/
    },

    /***/
    17464:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotouploadPageModule": function PhotouploadPageModule() {
          return (
            /* binding */
            _PhotouploadPageModule
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


      var _photoupload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./photoupload-routing.module */
      32500);
      /* harmony import */


      var _photoupload_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./photoupload.page */
      52678);

      var _PhotouploadPageModule = /*#__PURE__*/_createClass(function PhotouploadPageModule() {
        _classCallCheck(this, PhotouploadPageModule);
      });

      _PhotouploadPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _photoupload_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhotouploadPageRoutingModule],
        declarations: [_photoupload_page__WEBPACK_IMPORTED_MODULE_1__.PhotouploadPage]
      })], _PhotouploadPageModule);
      /***/
    },

    /***/
    52678:
    /*!*********************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload.page.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PhotouploadPage": function PhotouploadPage() {
          return (
            /* binding */
            _PhotouploadPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_photoupload_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./photoupload.page.html */
      75723);
      /* harmony import */


      var _photoupload_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./photoupload.page.scss */
      58866);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/upload.service */
      83102);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @awesome-cordova-plugins/camera/ngx */
      58086);
      /* harmony import */


      var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @awesome-cordova-plugins/file/ngx */
      71484);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      87152);
      /* harmony import */


      var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/network-service */
      34442);
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      79315);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _PhotouploadPage = /*#__PURE__*/function () {
        function PhotouploadPage(router, uploadService, http, usersessionService, filed, file, alertService, sqliteDB, route, userService, camera, alertController, geolocation, NetworkService, androidPermissions) {
          _classCallCheck(this, PhotouploadPage);

          this.router = router;
          this.uploadService = uploadService;
          this.http = http;
          this.usersessionService = usersessionService;
          this.filed = filed;
          this.file = file;
          this.alertService = alertService;
          this.sqliteDB = sqliteDB;
          this.route = route;
          this.userService = userService;
          this.camera = camera;
          this.alertController = alertController;
          this.geolocation = geolocation;
          this.NetworkService = NetworkService;
          this.androidPermissions = androidPermissions;
          this.url = '/assets/images/Group_upload.svg';
          this.minutes = 45;
          this.classdataList = [];
          this.finalclassdataList = []; // totalprsnt: any;
          // totalabst: any;
          // totalod: any;

          this.clssTotalList = [];
          this.timeLeft = 0; // Set the initial time in seconds (1 hour, 1 minute, and 5 seconds)

          this.imageActive = false;
          this.emis_username = this.usersessionService.emis_username();
        }

        return _createClass(PhotouploadPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.submitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
              studentOne: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
              studentTwo: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
              studentThree: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
              photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required)
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.hideSearch = true;
            this.filterActive = false;
            this.showPhoto = true;
            this.rest = false;
            this.endEnable = false;
            this.routeData = this.route.snapshot;
            this.otp = this.routeData.queryParams.otp;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.batch = this.routeData.queryParams.batch;
            this.status = this.routeData.queryParams.status;
            this.userid = this.routeData.queryParams.userid;
            this.CycleId = this.routeData.queryParams.CycleId;
            this.schoolName = this.routeData.queryParams.schoolName;
            this.InsertClsSec = this.routeData.queryParams.InsertClsSec;
            this.photoInsertClsSec = this.InsertClsSec;
            console.log(this.CycleId, this.InsertClsSec, "this.InsertClsSec");
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
            this.getGeolocation();
            this.localbatchRecord();
            this.localBatchStatusUpdate();
            this.localgetClassDetails();
            this.localTotalBatchDetails();
            this.localgetStudentStatus();
            this.localgetStudentDetailsJson();
            this.addStudentDataList = [];
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.stopTimer();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stopTimer();
          } //Malini ************************  start  *******************************

        }, {
          key: "localBatchStatusUpdate",
          value: function localBatchStatusUpdate() {
            if (this.batch == 1) {
              var query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
              this.sqliteDB.update(query3).then(function (res) {});
            }

            if (this.batch == 2) {
              var _query = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';

              this.sqliteDB.update(_query).then(function (res) {});
            }

            if (this.batch == 3) {
              var _query2 = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';

              this.sqliteDB.update(_query2).then(function (res) {});
            }

            if (this.batch == 4) {
              var _query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '4' + '", schoolId = "' + this.schoolId + '" WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';

              this.sqliteDB.update(_query3).then(function (res) {});
            }
          }
        }, {
          key: "autoSync",
          value: function autoSync() {
            debugger;
            this.localbatchRecord();

            if (this.NetworkService.getCurrentNetworkStatus() == 0) {
              console.log("online");
              this.onsave();
            } else {
              console.log("offline");
              this.offlineSave();
            }
          }
        }, {
          key: "offlineSave",
          value: function offlineSave() {
            var _this = this;

            var InsertClsSec = parseInt(this.InsertClsSec) + this.finalclassdataList.length;
            this.photoInsertClsSec = InsertClsSec;
            var batch = parseInt(this.batch) + 1;
            var query3 = 'UPDATE VIStatusbatchDatas SET sync = 2 WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + this.batch + '"';
            var query2 = 'UPDATE VIStatusbatchDatas SET sync = 1 WHERE VIStatusbatchDatas.userid = "' + this.emis_username + '" And VIStatusbatchDatas.batch = "' + batch + '"';
            var query5 = 'UPDATE VasipuIStatusDetail SET status = 2 WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
            var query6 = 'UPDATE VIStatusClsSecData SET InsertClsSec = ' + InsertClsSec + ' WHERE VIStatusClsSecData.UserId = "' + this.emis_username + '"';
            return this.sqliteDB.update(query3).then(function (res) {
              return _this.sqliteDB.update(query2).then(function (res) {
                return _this.sqliteDB.update(query5).then(function (res) {
                  return _this.sqliteDB.update(query6).then(function (res) {
                    _this.updateBatchCount(); // this.localbatchRecord();


                    _this.navigateBack();

                    _this.alertPopup('Batch ' + _this.batch + ' Completed');
                  });
                });
              });
            });
          }
        }, {
          key: "localbatchRecord",
          value: function localbatchRecord() {
            var _this2 = this;

            var query = 'SELECT * FROM VIStatusbatchDatas' + ' WHERE userid = ' + this.emis_username;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this2.dataListbatch = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this2.dataListbatch.push(data.rows.item(i));
                }
              } else {}
            });
          }
        }, {
          key: "localgetClassDetails",
          value: function localgetClassDetails() {
            var _this3 = this;

            var query = 'SELECT * FROM vasipuBatchStudentTable' + ' WHERE userId = "' + this.emis_username + '"' + ' And SchlId = "' + this.schoolId + '"' + ' And batch = "' + this.batch + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this3.classdataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this3.classdataList.push(data.rows.item(i));
                }

                for (var q = 0; q < _this3.classdataList.length; q++) {
                  _this3.finalclassdataList.push({
                    "ClsId": _this3.classdataList[q].ClsId,
                    "SchlId": _this3.schoolId,
                    "Sec": _this3.classdataList[q].Sec,
                    "TotStudnt": _this3.classdataList[q].TotStudnt,
                    "AbsentStud": _this3.classdataList[q].AbsentStud,
                    "ActivityDate": _this3.currentDate,
                    "CycleId": _this3.CycleId
                  });
                }

                var jsonData = JSON.stringify(_this3.finalclassdataList);
                var updateQuery1 = 'UPDATE VasipuIStatusDetail SET ClsSec = "' + jsonData + '" WHERE VasipuIStatusDetail.schlid = "' + _this3.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this3.batch + '"';

                _this3.sqliteDB.update(updateQuery1).then(function (res) {});

                var updateQuery = 'UPDATE VasipuIStatusDetail SET ClsSec = "' + jsonData + '" WHERE VasipuIStatusDetail.schlid = "' + _this3.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this3.batch + '"';

                _this3.sqliteDB.update(updateQuery).then(function (res) {});
              } else {}
            });
          }
        }, {
          key: "getStudentDetailsJson",
          value: function getStudentDetailsJson() {
            var _this4 = this;

            this.studentListData = [];
            var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/tnsed_attd_' + this.schoolId + '_1.json';
            this.http.get(json_name).subscribe(function (data) {
              if (data) {
                _this4.insertLocalData(data.studentlist);

                _this4.studentListData = data.studentlist;
              }
            });
          }
        }, {
          key: "localgetStudentDetailsJson",
          value: function localgetStudentDetailsJson() {
            var _this5 = this;

            this.studentListData = [];
            var query = 'SELECT * FROM VIStudenData' + ' WHERE RP_Id = "' + this.emis_username + '"' + ' And schoolId = "' + this.schoolId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this5.dataList = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this5.dataList.push(data.rows.item(i));
                }

                for (var n = 0; n < _this5.finalclassdataList.length; n++) {
                  var studentStatusData = _this5.dataList.filter(function (item) {
                    return item.prst == '' && item.class_studying_id == _this5.finalclassdataList[n].ClsId && item.class_section == _this5.finalclassdataList[n].Sec;
                  });

                  for (var c = 0; c < studentStatusData.length; c++) {
                    _this5.studentListData.push(studentStatusData[c]);
                  }
                }

                console.log(_this5.studentListData, "local json studentStatusData");
                _this5.totalStudent = _this5.studentListData.length;
              } else {
                console.log("server json");

                _this5.getStudentDetailsJson();
              }
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(elementData) {
            var _this6 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO VasipuIyakamStudentDetails VALUES (?,?,?,?,?,?,?,?)", [null, _this6.schoolId, element.unique_id_no, element.user_id, element.name, element.gender, element.class_studying_id, element.class_section]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Locally");
            });
          }
        }, {
          key: "insertStatusLocalData",
          value: function insertStatusLocalData() {
            var _this7 = this;

            var insertRows = [];
            insertRows.push(["INSERT INTO VasipuIStatusDetail VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, this.schoolId, this.batch, '', '', '', '', '0', '0', '', '', '', '1', '', '', '', '', '', '', JSON.stringify(this.finalclassdataList), this.totalStudent, this.prsnStudent, this.emis_username]]);
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Locally");

              _this7.localgetStudentStatus();
            });
          }
        }, {
          key: "openCameraForBlob",
          value: function openCameraForBlob(id, index) {
            var _this8 = this;

            var options = {
              quality: 60,
              targetWidth: 900,
              targetHeight: 600,
              destinationType: this.camera.DestinationType.FILE_URI,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              cameraDirection: this.camera.Direction.BACK
            };
            this.camera.getPicture(options).then(function (imageData) {
              var filename = imageData.substring(imageData.lastIndexOf('/') + 1);
              var imagename = imageData.substring(0, imageData.lastIndexOf('/') + 1);

              _this8.file.readAsDataURL(imagename, filename).then(function (base64string) {
                var splittedName = filename.split(".");
                var fName = splittedName[0] + '.png';

                if (base64string) {
                  // this.imageData = base64string;
                  _this8.studentStatusData[index].startphtStatus = '1';

                  if (id == 1) {
                    var d = new Date(); // for now

                    var h = d.getHours(); // => 9

                    var m = d.getMinutes(); // =>  30

                    var s = d.getSeconds();
                    _this8.startTimes = h + ':' + m;
                    _this8.timeLeft = 0;

                    _this8.startTimer();

                    var splittedbase64string = base64string.split(",");
                    var fNamebase64string = splittedbase64string[1];
                    _this8.imageData = base64string;
                    _this8.test = fNamebase64string.toString();
                    _this8.studentStatusData[index].startphoto = _this8.test;
                    _this8.studentStatusData[index].startphotoblob = fName.toString();
                    var updateQuery = 'UPDATE VasipuIStatusDetail SET startphoto = "' + _this8.test + '",start = "' + _this8.startTimes + '",startphotoblob = "' + fName + '" WHERE VasipuIStatusDetail.schlid = "' + _this8.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this8.batch + '"';

                    _this8.sqliteDB.update(updateQuery).then(function (res) {});

                    _this8.getLatLong(id, index);
                  }

                  if (id == 2) {
                    var d = new Date(); // for now

                    var h = d.getHours(); // => 9

                    var m = d.getMinutes(); // =>  30

                    var s = d.getSeconds();
                    _this8.endTimes = h + ':' + m;
                    _this8.imageData1 = base64string;

                    var image = _this8.imageData1.toString();

                    var splittedbase64string = base64string.split(",");
                    var _fNamebase64string = splittedbase64string[1];
                    _this8.test = _fNamebase64string.toString();
                    _this8.studentStatusData[index].endphoto = _this8.test;
                    _this8.studentStatusData[index].end = _this8.endTimes;
                    _this8.studentStatusData[index].endphotoblob = fName.toString();

                    var _query4 = 'UPDATE VasipuIStatusDetail SET endphoto = "' + _this8.test + '",end = "' + _this8.endTimes + '",endphotoblob = "' + fName + '" WHERE VasipuIStatusDetail.schlid = "' + _this8.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this8.batch + '"';

                    _this8.sqliteDB.update(_query4).then(function (res) {
                      console.log("upload end photo");
                    });

                    _this8.getLatLong(id, index);
                  }

                  var query2 = 'UPDATE VasipuIStatusDetail SET startphtStatus = 1 WHERE VasipuIStatusDetail.schlid = "' + _this8.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this8.batch + '"';

                  _this8.sqliteDB.update(query2).then(function (res) {
                    console.log("upload start session");
                  }); // this.alertService.success('File Uploaded Successfully');


                  _this8.alertPopup("File Uploaded Successfully");
                }
              });
            }, function (err) {
              alert("error " + JSON.stringify(err));
            });
          }
        }, {
          key: "getLatLong",
          value: function getLatLong(id, index) {
            var _this9 = this;

            console.log("location");

            if (this.NetworkService.getCurrentNetworkStatus() == 0) {
              console.log("online location");
              this.androidPermission();
              this.geolocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
              }).then(function (resp) {
                _this9.locationCordinates = resp.coords;
                console.log("locationCordinates");

                if (id == 1) {
                  _this9.lat = _this9.locationCordinates.latitude.toString();
                  _this9["long"] = _this9.locationCordinates.longitude.toString();
                  _this9.studentStatusData[index].lat1 = _this9.lat;
                  _this9.studentStatusData[index].long1 = _this9["long"];
                  var query2 = 'UPDATE VasipuIStatusDetail SET lat1 = "' + _this9.lat + '",long1 = "' + _this9["long"] + '" WHERE VasipuIStatusDetail.schlid = "' + _this9.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this9.batch + '"';

                  _this9.sqliteDB.update(query2).then(function (res) {
                    _this9.localgetStudentStatus();
                  });
                }

                if (id == 2) {
                  _this9.studentStatusData[index].lat2 = _this9.lat;
                  _this9.studentStatusData[index].long2 = _this9["long"];
                  _this9.lat1 = _this9.locationCordinates.latitude.toString();
                  _this9.long1 = _this9.locationCordinates.longitude.toString();

                  var _query5 = 'UPDATE VasipuIStatusDetail SET lat2 = "' + _this9.lat1 + '",long2 =  "' + _this9.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + _this9.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this9.batch + '"';

                  _this9.sqliteDB.update(_query5).then(function (res) {
                    _this9.autoSync();
                  });
                }
              })["catch"](function (error) {
                if (id == 2) {
                  _this9.autoSync();
                }
              });

              if (id == 2 && (this.locationCordinates == "" || this.locationCordinates == null || this.locationCordinates == undefined)) {
                this.autoSync();
              }
            } else {
              if (id == 1) {
                this.studentStatusData[index].lat1 = this.offlinelat;
                this.studentStatusData[index].long1 = this.offlinelone;
                this.lat1 = this.offlinelat;
                this.long1 = this.offlinelone;
                var query2 = 'UPDATE VasipuIStatusDetail SET lat1 = "' + this.lat1 + '",long1 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                this.sqliteDB.update(query2).then(function (res) {}); // this.autoSync()
              }

              if (id == 2) {
                this.studentStatusData[index].lat2 = this.offlinelat;
                this.studentStatusData[index].long2 = this.offlinelone;
                this.lat1 = this.offlinelat;
                this.long1 = this.offlinelone;

                var _query6 = 'UPDATE VasipuIStatusDetail SET lat2 = "' + this.lat1 + '",long2 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';

                this.sqliteDB.update(_query6).then(function (res) {
                  _this9.autoSync();
                }); // this.autoSync()
              }
            }
          }
        }, {
          key: "onadded",
          value: function onadded() {
            var _this0 = this;

            if (this.searchData.length > 0) {
              var alrterfilter = this.addStudentDataList.filter(function (item) {
                return item.Id == _this0.searchData[0].Id;
              });

              if (alrterfilter.length == 0) {
                this.addDataActive = true;
                this.addStudentDataList.push(this.searchData[0]);
                var removeData = this.dataList.filter(function (item) {
                  return item.Id != _this0.searchData[0].Id;
                });
                this.dataList = [];
                this.dataList = removeData;
                this.searchData = [];

                if (this.addStudentDataList.length == 1) {
                  this.activeSave = false;
                  var query2 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_1 = "' + this.addStudentDataList[0].user_id + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
                  this.sqliteDB.update(query2).then(function (res) {
                    _this0.localgetStudentStatus();
                  });
                }

                if (this.addStudentDataList.length == 2) {
                  this.activeSave = false;

                  var _query7 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_2 = "' + this.addStudentDataList[1].user_id + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';

                  this.sqliteDB.update(_query7).then(function (res) {
                    _this0.localgetStudentStatus();
                  });
                }

                if (this.addStudentDataList.length == 3) {
                  this.hideSearch = false;
                  this.activeSave = true;

                  var _query8 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_1 = "' + this.addStudentDataList[0].user_id + '",stud_2 = "' + this.addStudentDataList[1].user_id + '",stud_3 = "' + this.addStudentDataList[2].user_id + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';

                  this.sqliteDB.update(_query8).then(function (res) {
                    _this0.localgetStudentStatus();
                  });
                }
              } else {
                // this.alertService.error("Already added") 
                this.alertPopup("Already added");
              }
            }
          }
        }, {
          key: "onsave",
          value: function onsave() {
            var _this1 = this;

            var data = {
              "records": [{
                "IndexId": "",
                "UserId": this.emis_username,
                "SchlId": this.schoolId,
                "Batch": this.batch,
                "StudId1": this.studentStatusData[0].stud_1,
                "StudId2": this.studentStatusData[0].stud_2,
                "StudId3": this.studentStatusData[0].stud_3,
                "StartTime": this.studentStatusData[0].start,
                "EndTime": this.studentStatusData[0].end,
                "StartPhoto": this.studentStatusData[0].startphoto,
                "StartPhotoName": this.studentStatusData[0].startphotoblob,
                "EndPhoto": this.studentStatusData[0].endphoto,
                "EndPhotoName": this.studentStatusData[0].endphotoblob,
                "StartLat": this.studentStatusData[0].lat1,
                "StartLongi": this.studentStatusData[0].long1,
                "EndLat": this.studentStatusData[0].lat2,
                "EndLongi": this.studentStatusData[0].long2,
                "Data": this.finalclassdataList
              }]
            };
            this.userService.submitSessionData(data).subscribe(function (res) {
              if (res.dataStatus) {
                _this1.updateBatchCount(); // this.vasiIpyakam()


                var InsertClsSec = parseInt(_this1.InsertClsSec) + _this1.finalclassdataList.length;

                _this1.photoInsertClsSec = InsertClsSec;
                var batch = parseInt(_this1.batch) + 1;
                var query2 = 'UPDATE VasipuIStatusDetail SET status = 3 WHERE VasipuIStatusDetail.schlid = "' + _this1.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this1.batch + '"';
                var query3 = 'UPDATE VIStatusbatchDatas SET sync = "' + '3' + '" WHERE VIStatusbatchDatas.userid = "' + _this1.emis_username + '" And VIStatusbatchDatas.batch = "' + _this1.batch + '"';
                var query4 = 'UPDATE VIStatusbatchDatas SET sync = "' + '1' + '" WHERE VIStatusbatchDatas.userid = "' + _this1.emis_username + '" And VIStatusbatchDatas.batch = "' + batch + '"';
                var query6 = 'UPDATE VIStatusClsSecData SET InsertClsSec = ' + InsertClsSec + ' WHERE VIStatusClsSecData.UserId = "' + _this1.emis_username + '"';
                return _this1.sqliteDB.update(query2).then(function (res) {
                  return _this1.sqliteDB.update(query3).then(function (res) {
                    return _this1.sqliteDB.update(query4).then(function (res) {
                      return _this1.sqliteDB.update(query6).then(function (res) {
                        // this.localbatchRecord();
                        _this1.navigateBack(); // this.alertService.success('Batch ' + this.batch +' Completed');


                        _this1.alertPopup('Batch ' + _this1.batch + ' Completed');
                      });
                    });
                  });
                });
              } else {
                // this.autoSync()
                _this1.navigateBack();
              }
            });
          }
        }, {
          key: "localgetStudentStatus",
          value: function localgetStudentStatus() {
            var _this10 = this;

            this.startActive = false;
            this.studentStatusData = [];
            var query = 'SELECT * FROM VasipuIStatusDetail' + ' WHERE schlid = "' + this.schoolId + '"' + ' And batchId = "' + this.batch + '" ';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this10.studentStatusData.push(data.rows.item(i));
                }

                if (_this10.studentStatusData[0].start) {
                  _this10.calculateHoursDifference();
                }

                console.log(_this10.studentStatusData, "studentStatusData");
              } else {
                _this10.startActive = true;

                _this10.insertStatusLocalData();
              }
            });
          } // searching data 

        }, {
          key: "getFilterItems",
          value: function getFilterItems(event) {
            var _this11 = this;

            this.searchData = [];
            this.filterActive = true;
            this.searchTerm = event.trim();
            this.searchData = this.studentListData.filter(function (item) {
              return item.user_id.toLowerCase().indexOf(_this11.searchTerm.toLowerCase()) > -1;
            });

            if (this.searchData.length != 0) {
              this.statusDataActive = true;
            }
          }
        }, {
          key: "delete",
          value: function _delete(id, event, array) {
            var _this12 = this;

            this.hideSearch = true;
            this.activeSave = false;
            var removeData = this.addStudentDataList.filter(function (item) {
              return item.user_id != event;
            });
            this.addStudentDataList = [];
            this.addStudentDataList = removeData;

            if (this.addStudentDataList.length == 3) {
              this.activeSave = true;
              this.hideSearch = false;
            }

            var query1 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 0,stud_1 = "' + '' + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '" And VasipuIStatusDetail.stud_1 = "' + event + '"';
            var query2 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_2 = "' + '' + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '" And VasipuIStatusDetail.stud_2 = "' + event + '"';
            var query3 = 'UPDATE VasipuIStatusDetail SET endphtStatus = 1,stud_2 = "' + '' + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '" And VasipuIStatusDetail.stud_3 = "' + event + '"';
            this.sqliteDB.update(query1).then(function (res) {
              _this12.sqliteDB.update(query2).then(function (res) {
                _this12.sqliteDB.update(query3).then(function (res) {
                  console.log("delete student");

                  _this12.localgetStudentStatus();
                });
              });
            });
          }
        }, {
          key: "updateBatchCount",
          value: function updateBatchCount() {
            var count = parseInt(this.totalBatchData[0].InsertBatchCount) + 1;
            var query3 = 'UPDATE VIBatchData SET InsertBatchCount = "' + count + '" WHERE VIBatchData.UserId = "' + this.emis_username + '" And VIBatchData.SchlId = "' + this.schoolId + '"';
            this.sqliteDB.update(query3).then(function (res) {
              console.log("upload Count");
            });
          }
        }, {
          key: "localTotalBatchDetails",
          value: function localTotalBatchDetails() {
            var _this13 = this;

            this.totalBatchData = [];
            this.totalBatchStatus = [];
            var query = 'SELECT * FROM VIBatchData' + ' WHERE UserId = "' + this.emis_username + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  _this13.totalBatchStatus.push(data.rows.item(i));
                }

                _this13.totalBatchData = _this13.totalBatchStatus.filter(function (item) {
                  return item.SchlId == _this13.schoolId;
                });
              } else {}
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/vasipu-iyakam/vi-session'], {
              queryParams: {
                "schoolId": this.schoolId,
                "userID": this.emis_username,
                "CycleId": this.CycleId,
                "InsertClsSec": this.photoInsertClsSec,
                "schoolName": this.schoolName
              }
            });
          }
        }, {
          key: "navigateBack1",
          value: function navigateBack1() {
            this.router.navigate(['/tabs/vasipu-iyakam/vi-session'], {
              queryParams: {
                "schoolId": this.schoolId,
                "userID": this.emis_username,
                "CycleId": this.CycleId,
                "InsertClsSec": this.photoInsertClsSec,
                "schoolName": this.schoolName
              }
            });
          }
        }, {
          key: "timeEnd",
          value: function timeEnd() {
            this.rest = true;
          }
        }, {
          key: "androidPermission",
          value: function androidPermission() {
            var _this14 = this;

            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
              if (!result.hasPermission) {
                _this14.androidPermissions.requestPermission(_this14.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
              }
            }, function (err) {
              return _this14.androidPermissions.requestPermission(_this14.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
            });
          }
        }, {
          key: "getGeolocation",
          value: function getGeolocation() {
            var _this15 = this;

            this.geolocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 10000,
              maximumAge: 0
            }).then(function (resp) {
              // resp.coords.latitude and resp.coords.longitude are the latitude and longitude values
              var latitude = resp.coords.latitude;
              var longitude = resp.coords.longitude;
              _this15.offlinelat = latitude;
              _this15.offlinelone = longitude; // Now you can use latitude and longitude as needed

              console.log('this.offlinelone: ', _this15.offlinelat);
              console.log('this.offlinelone: ', _this15.offlinelone);
            })["catch"](function (error) {
              console.error('Error getting location', error);
              _this15.offlinelat = 0;
              _this15.offlinelone = 0;
            });
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this16 = this;

            this.timer = setInterval(function () {
              if (_this16.timeLeft >= 0) {
                _this16.timeLeft++;

                _this16.updateFormattedTime();
              } else {
                clearInterval(_this16.timer); // Timer has reached zero, you can perform any action here
              }
            }, 1000); // Update every 1000 milliseconds (1 second)
          }
        }, {
          key: "stopTimer",
          value: function stopTimer() {
            if (this.timer) {
              clearInterval(this.timer);
              this.timer = null;
            }
          }
        }, {
          key: "updateFormattedTime",
          value: function updateFormattedTime() {
            var hours = Math.floor(this.timeLeft / 3600);
            var minutes = Math.floor(this.timeLeft % 3600 / 60);
            var seconds = this.timeLeft % 60;
            this.formattedTime = "".concat(this.padNumber(hours), ":").concat(this.padNumber(minutes), ":").concat(this.padNumber(seconds));
          }
        }, {
          key: "padNumber",
          value: function padNumber(num) {
            return num < 10 ? '0' + num : num.toString();
          }
        }, {
          key: "resetTimer",
          value: function resetTimer() {
            this.timeLeft = 3665; // Reset the timer to 1 hour, 1 minute, and 5 seconds

            this.updateFormattedTime();
          }
        }, {
          key: "calculateHoursDifference",
          value: function calculateHoursDifference() {
            var d = new Date(); // for now

            var h = d.getHours(); // => 9

            var m = d.getMinutes(); // =>  30

            var s = d.getSeconds();
            var endTimes = h + ':' + m;

            if (this.studentStatusData[0].start) {
              this.startTimes = this.studentStatusData[0].start;
              var startDate = new Date("2000-01-01 ".concat(this.startTimes));
              var endDate = new Date("2000-01-01 ".concat(endTimes));
              var timeDifference = endDate.getTime() - startDate.getTime();
              this.hoursDifference = timeDifference / (1000 * 60 * 60);
              this.timeLeft = this.hoursDifference * 3600;
              this.startTimer();
            } else {
              this.timeLeft = 0;
              this.startTimer();
            }
          }
        }, {
          key: "alertPopup",
          value: function alertPopup(text) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
              var alert;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    _context.n = 1;
                    return this.alertController.create({
                      header: 'Notification',
                      // subHeader:' Batch '+ this.batch +' completed',
                      cssClass: 'popCalssInfo',
                      message: text,
                      buttons: [{
                        text: 'OK',
                        cssClass: 'alert-button-confirm'
                      }]
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
          } // Photoupload

        }, {
          key: "onSelectFile1",
          value: function onSelectFile1(event, id, index) {
            var _this17 = this;

            debugger;

            if (event.target.files && event.target.files[0]) {
              if (event.target.files[0].type == "image/jpeg" || event.target.files[0].type == "image/jpg") {
                if (event.target.files[0].size <= 5242880) {
                  this.doc_file = event.target.files;
                  var fileName = event.target.files[0].name;
                  var splittedName = fileName.split(".");
                  console.log(fileName, "fileName");
                  this.fileType = splittedName[1];
                  var fileReader = new FileReader();
                  fileReader.readAsDataURL(event.target.files[0]);

                  fileReader.onload = function (event) {
                    // //debugger;
                    _this17.imageActive = true;
                    _this17.uploadUrl = fileReader.result;

                    var splittedbase64string = _this17.uploadUrl.split(",");

                    var fNamebase64string = splittedbase64string[1];
                    _this17.test = fNamebase64string.toString();
                    var date = new Date();
                    var d = new Date(date),
                        month = '' + (d.getMonth() + 1),
                        day = '' + d.getDate(),
                        year = d.getFullYear();
                    var h = d.getHours(); // => 9

                    var m = d.getMinutes(); // =>  30

                    var s = d.getSeconds();
                    var datefilename1 = "";
                    var ff = '.jpg';
                    datefilename1 = _this17.emis_username + day + month + year + h + m + s + ff.toString();
                    var datefilename = datefilename1.toString();
                    console.log(datefilename, "datefilename");
                    _this17.studentStatusData[index].startphtStatus = '1';

                    if (id == 1) {
                      var d = new Date(); // for now

                      var h = d.getHours(); // => 9

                      var m = d.getMinutes(); // =>  30

                      var s = d.getSeconds();
                      _this17.startTimes = h + ':' + m;
                      _this17.timeLeft = 0;

                      _this17.startTimer();

                      _this17.test = fNamebase64string.toString();
                      _this17.studentStatusData[index].startphoto = _this17.test.toString();
                      _this17.studentStatusData[index].startphotoblob = datefilename;
                      var updateQuery = 'UPDATE VasipuIStatusDetail SET startphoto = "' + _this17.test + '",start = "' + _this17.startTimes + '",startphotoblob = "' + datefilename + '" WHERE VasipuIStatusDetail.schlid = "' + _this17.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this17.batch + '"';

                      _this17.sqliteDB.update(updateQuery).then(function (res) {});

                      _this17.uploadgetLatLong(id, index);
                    }

                    if (id == 2) {
                      var d = new Date(); // for now

                      var h = d.getHours(); // => 9

                      var m = d.getMinutes(); // =>  30

                      var s = d.getSeconds();
                      _this17.endTimes = h + ':' + m;
                      _this17.test = fNamebase64string.toString();
                      _this17.studentStatusData[index].endphoto = _this17.test;
                      _this17.studentStatusData[index].end = _this17.endTimes;
                      _this17.studentStatusData[index].endphotoblob = datefilename.toString();

                      var _query9 = 'UPDATE VasipuIStatusDetail SET endphoto = "' + _this17.test + '",end = "' + _this17.endTimes + '",endphotoblob = "' + datefilename + '" WHERE VasipuIStatusDetail.schlid = "' + _this17.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this17.batch + '"';

                      _this17.sqliteDB.update(_query9).then(function (res) {
                        console.log("upload end photo");
                      });

                      _this17.uploadgetLatLong(id, index);
                    }

                    var query2 = 'UPDATE VasipuIStatusDetail SET startphtStatus = 1 WHERE VasipuIStatusDetail.schlid = "' + _this17.schoolId + '" And VasipuIStatusDetail.batchId = "' + _this17.batch + '"';

                    _this17.sqliteDB.update(query2).then(function (res) {
                      console.log("upload start session");
                    });

                    _this17.alertService.success('File Uploaded Successfully'); // this.alertPopup("File Uploaded Successfully")

                  };
                } else {
                  this.alertService.error('File Can`t uploaded because Image size should not exceed 5MB');
                  this.jpgimage.nativeElement.value = "";
                }
              } else {
                this.alertService.error('Please upload only JPG / JPEG image format');
                this.jpgimage.nativeElement.value = "";
              }
            }
          }
        }, {
          key: "uploadgetLatLong",
          value: function uploadgetLatLong(id, index) {
            var _this18 = this;

            this.getGeolocation();

            if (id == 1) {
              this.studentStatusData[index].lat1 = this.offlinelat;
              this.studentStatusData[index].long1 = this.offlinelone;
              this.lat1 = this.offlinelat;
              this.long1 = this.offlinelone;
              var query2 = 'UPDATE VasipuIStatusDetail SET lat1 = "' + this.lat1 + '",long1 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';
              this.sqliteDB.update(query2).then(function (res) {});
            }

            if (id == 2) {
              this.studentStatusData[index].lat2 = this.offlinelat;
              this.studentStatusData[index].long2 = this.offlinelone;
              this.lat1 = this.offlinelat;
              this.long1 = this.offlinelone;

              var _query0 = 'UPDATE VasipuIStatusDetail SET lat2 = "' + this.lat1 + '",long2 =  "' + this.long1 + '" WHERE VasipuIStatusDetail.schlid = "' + this.schoolId + '" And VasipuIStatusDetail.batchId = "' + this.batch + '"';

              this.sqliteDB.update(_query0).then(function (res) {
                _this18.autoSync();
              }); // this.autoSync()
            }
          }
        }]);
      }();

      _PhotouploadPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }, {
          type: src_app_services_emis_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
        }, {
          type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_8__.SqlitedatabaseService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__.Geolocation
        }, {
          type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__.NetworkService
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__.AndroidPermissions
        }];
      };

      _PhotouploadPage.propDecorators = {
        jpgimage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
          args: ['jpgimage']
        }]
      };
      _PhotouploadPage = (0, tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-photoupload',
        template: _raw_loader_photoupload_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_photoupload_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PhotouploadPage);
      /***/
    },

    /***/
    58866:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/vasipu-iyakam/photoupload/photoupload.page.scss ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".startcard1 {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  background-color: #30a748;\n  color: white;\n  font-weight: bold;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n\n.textItem {\n  padding: 5%;\n  color: #707070 !important;\n}\n\n.card-row {\n  padding-top: 25px;\n}\n\n.selectdata {\n  border: 1px solid #134A54;\n}\n\nion-input {\n  color: #707070;\n  background-color: #FBFBFB;\n}\n\n.btn-dbl {\n  opacity: 0.5;\n}\n\n.coluitem2 {\n  padding-left: 2%;\n  padding-right: 2%;\n  font-weight: bold;\n  text-align: center;\n  color: #343434;\n}\n\n.startcard {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: center;\n  font-weight: bold;\n  font-size: smaller;\n  padding-left: 2%;\n  padding-right: 2%;\n}\n\n.cardICON {\n  text-align: center;\n  padding-top: 5px;\n  zoom: 2;\n}\n\n.cardStudent {\n  padding: 3%;\n  text-align: center;\n}\n\n.liststudentCard {\n  padding: 2%;\n  border-top-right-radius: 5%;\n  border-top-left-radius: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3RvdXBsb2FkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQztFQUNDLGNBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7QUFDSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFDRiIsImZpbGUiOiJwaG90b3VwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnRjYXJkMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCAxNjcsIDcyKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4udGV4dEl0ZW0ge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIGNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXJvdyB7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RkYXRhIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTM0QTU0O1xyXG59XHJcblxyXG4gaW9uLWlucHV0IHtcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZCO1xyXG59XHJcblxyXG4uYnRuLWRibHtcclxuICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLmNvbHVpdGVtMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IzM0MzQzNDtcclxufVxyXG5cclxuLnN0YXJ0Y2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbn1cclxuXHJcbi5jYXJkSUNPTiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgem9vbTogMjtcclxufVxyXG5cclxuLmNhcmRTdHVkZW50e1xyXG4gIHBhZGRpbmc6IDMlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RzdHVkZW50Q2FyZCB7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUlO1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    75723:
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vasipu-iyakam/photoupload/photoupload.page.html ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack1()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div>{{emis_username}} - Batch {{batch}}</div>\r\n      <div style=\"padding-top: 2px;font-size: small;\">{{schoolName}}</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-row class=\"card-row\" *ngFor=\"let data of studentStatusData; let a = index\">\r\n\r\n    <ion-col size=\"12\" style=\"text-align: center;\" *ngIf=\"data.startphtStatus == '1'\">\r\n      <div class=\"timer\">\r\n        <img src=\"/assets/images/vasipuiyagam/stopwatch.svg\"> {{ formattedTime }}\r\n      </div>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"10\" *ngIf=\"data.startphtStatus == ''\">\r\n      <ion-card class=\"newsecondary startcard\">\r\n        அமர்வின் தொடக்கத்தில் மாணவர்களுடன் வாசிப்பு இயக்க கருத்தாளரும் சேர்ந்து புகைப்படம் எடுத்து பதிவிடவும்.\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"2\" *ngIf=\"data.startphtStatus == ''\" style=\"align-self: center;\">\r\n      <input #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'1',a)\"\r\n        accept=\".jpg,.JPEG\" style=\"display: none;\" />\r\n      <label for=\"file\" class=\"upload-txt\">\r\n        <ion-icon class=\"cardICON\" name=\"cloud-upload-outline\"></ion-icon>\r\n      </label>\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"2\" class=\"imageVideo\">\r\n              <input  #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'1',a)\"  accept=\".jpg,.JPEG\"\r\n             style=\"display: none;\"  />\r\n              <label for=\"file\" class=\"upload-txt\">\r\n                <ion-icon class=\"cardICON\" name=\"cloud-upload-outline\"\r\n        ></ion-icon> \r\n              </label>\r\n            </ion-col>  -->\r\n\r\n    <!-- <ion-col size=\"12\">\r\n              <label class=\"valid-clr1\" style=\"margin-top: 3% !important;\">Only Image files with maximum size 5MB</label>\r\n            </ion-col> -->\r\n\r\n    <!-- <ion-col size=\"2\" *ngIf=\"data.startphtStatus == ''\" style=\"padding-top: 6%;\">\r\n          <ion-icon class=\"cardICON\" (click)=\"openCameraForBlob('1',a)\" \r\n          name=\"camera\"\r\n        ></ion-icon> \r\n      </ion-col> -->\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.startphtStatus == '1'\">\r\n      <ion-card class=\"startcard1\"> அமர்வு தொடங்கியது & புகைப்படம் பதிவேற்றப்பட்டது. </ion-card>\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"2\" *ngIf=\"data.startphtStatus == '1'\" style=\"padding-top: 6%;\">\r\n        <ion-icon class=\"cardICON\"\r\n        name=\"camera\"\r\n      ></ion-icon>\r\n    </ion-col> -->\r\n\r\n    <ion-col size=\"12\" class=\"coluitem2\" *ngIf=\"data.startphtStatus == '1'\">\r\n      இந்த அமர்வில் சிறப்பாக பங்கேற்ற மாணவர்களை தேர்வு செய்யவும் (3 மாணவர்கள்).\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.startphtStatus == '1' && hideSearch\">\r\n      <ion-item style=\"border: 1px solid;margin: 3%;\">\r\n        <ion-input class=\"selectitem\" type=\"number\" (ionChange)=\"getFilterItems($event.detail.value)\"\r\n          placeholder=\"Search students\">\r\n        </ion-input>\r\n        <ion-icon name=\"search\" slot=\"end\" class=\"newsecondaryTex\"></ion-icon>\r\n      </ion-item>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" *ngIf=\"filterActive && data.startphtStatus == '1'\">\r\n      <ion-row style=\"margin: 5%;\">\r\n        <ion-col size=\"12\" class=\"newsecondary cardStudent\">மாணவர் விவரங்கள்\r\n        </ion-col>\r\n        <ion-col size=\"12\" class=\"liststudentCard newsecondaryTex\" *ngFor=\"let item of searchData; let n = index\">\r\n          <div (click)=\"getFilterItems(item.user_id)\"> {{item.name}} - {{item.user_id}}</div>\r\n          <div (click)=\"getFilterItems(item.user_id)\"> {{item.class_studying_id}} - {{item.class_section}}\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" style=\"color:#707070;padding-left: 3%;border-bottom: dotted;\"\r\n          *ngFor=\"let item of addStudentDataList;let i =index\">\r\n          <ion-row>\r\n            <ion-col size=\"10\">\r\n              <div> {{item.name}} - {{item.user_id}}</div>\r\n              <div> {{item.class_studying_id}} - {{item.class_section}} </div>\r\n            </ion-col>\r\n            <ion-col size=\"2\" style=\"color:#ec4e4e;padding-left: 3%;zoom: 1.5;\">\r\n              <ion-icon name=\"trash\" (click)=\"delete(i,item.user_id,item)\"> நீக்கு </ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" *ngIf=\"!activeSave\" style=\"text-align: center;margin-top: 5%;\" (click)=\"onadded()\">\r\n          <img src=\"/assets/images/vasipuiyagam/addbutton.svg\">\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"10\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\">\r\n      <ion-card class=\"newsecondary startcard\">\r\n        அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும்.\r\n      </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"2\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\" class=\"imageVideo\"\r\n      style=\"align-self: center;\">\r\n      <input #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'2',a)\"\r\n        accept=\".jpg,.JPEG\" style=\"display: none;\" />\r\n      <label for=\"file\" class=\"upload-txt\">\r\n        <ion-icon class=\"cardICON\" name=\"cloud-upload-outline\"></ion-icon>\r\n        <!-- <ion-icon name=\"cloud-upload-outline\"></ion-icon> -->\r\n        <!-- <img src=\"{{image1}}\" class=\"image\" *ngIf=\"this.imageActive == true\" width=\"100\" height=\"100\"> -->\r\n      </label>\r\n      <!-- <label class=\"valid-clr1\" style=\"margin-top: 3% !important;\">Only Image files with maximum size 5MB</label> -->\r\n    </ion-col>\r\n\r\n    <!-- <ion-col size=\"12\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\"> \r\n        <ion-card class=\"newsecondary startcard\" > \r\n          <ion-row>\r\n            <ion-col size=\"12\">\r\n            அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும்.\r\n          </ion-col>\r\n            <ion-col size=\"12\" class=\"imageVideo\">\r\n              <input  #jpgimage type=\"file\" name=\"file\" id=\"file\" class=\"fileInput\" (change)=\"onSelectFile1($event,'2',a)\"  accept=\".jpg,.JPEG\"\r\n               />\r\n              <label for=\"file\" class=\"upload-txt\">\r\n                <ion-icon name=\"cloud-upload-outline\"></ion-icon>\r\n              </label>\r\n              <label class=\"valid-clr1\" style=\"margin-top: 3% !important;\">Only Image files with maximum size 5MB</label>\r\n            </ion-col> \r\n            </ion-row>\r\n          </ion-card> \r\n      </ion-col> -->\r\n\r\n    <!-- <ion-col size=\"10\" (click)=\"openCameraForBlob('2',a)\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\">\r\n        <ion-card class=\"newsecondary startcard\" > அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும். </ion-card> \r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" *ngIf=\"data.endphtStatus == '1' && data.status == '1'\" style=\"padding-top: 6%;\">\r\n          <ion-icon class=\"cardICON\" (click)=\"openCameraForBlob('2',a)\"\r\n          name=\"camera\"\r\n        ></ion-icon>\r\n      </ion-col> -->\r\n\r\n    <!-- <ion-col size=\"10\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\">\r\n        <ion-card class=\"newsecondary startcard\" > அமர்வின் முடிவில் மாணவர்கள் மற்றும் அவர்களின் செயல்பாடுகளுடன் புகைப்படம் எடுத்து பதிவிடவும். </ion-card> \r\n      </ion-col>\r\n      \r\n      <ion-col size=\"2\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\" style=\"padding-top: 6%;\">\r\n          <ion-icon class=\"cardICON\"\r\n          name=\"camera\"\r\n        ></ion-icon>\r\n      </ion-col> -->\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.endphtStatus == '1' && data.status == '3'\">\r\n      <ion-card class=\"startcard1\"> அமர்வு முடிந்தது. </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" *ngIf=\"data.endphtStatus == '1' && data.status == '2'\">\r\n      <ion-card class=\"startcard1\"> அமர்வு முடிந்தது. </ion-card>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"12\" style=\"text-align: center; margin-top: 10px;\" (click)=\"autoSync()\" *ngIf=\"data.status == '2'\">\r\n      <button style=\"background: transparent;\">\r\n        <img src=\"/assets/images/vasipuiyagam/savebutton.svg\" class=\"menuicon\">\r\n      </button>\r\n    </ion-col>\r\n\r\n  </ion-row>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_vasipu-iyakam_photoupload_photoupload_module_ts-es5.js.map