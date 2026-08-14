(function () {
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_uniform_uniform-studentlist_uniform-studentlist_module_ts"], {
    /***/
    88994:
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-studentlist/uniform-studentlist-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformStudentlistPageRoutingModule": function UniformStudentlistPageRoutingModule() {
          return (
            /* binding */
            _UniformStudentlistPageRoutingModule
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


      var _uniform_studentlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uniform-studentlist.page */
      60131);

      var routes = [{
        path: '',
        component: _uniform_studentlist_page__WEBPACK_IMPORTED_MODULE_0__.UniformStudentlistPage
      }];

      var _UniformStudentlistPageRoutingModule = /*#__PURE__*/_createClass(function UniformStudentlistPageRoutingModule() {
        _classCallCheck(this, UniformStudentlistPageRoutingModule);
      });

      _UniformStudentlistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _UniformStudentlistPageRoutingModule);
      /***/
    },

    /***/
    62301:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-studentlist/uniform-studentlist.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformStudentlistPageModule": function UniformStudentlistPageModule() {
          return (
            /* binding */
            _UniformStudentlistPageModule
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


      var _uniform_studentlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./uniform-studentlist-routing.module */
      88994);
      /* harmony import */


      var _uniform_studentlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./uniform-studentlist.page */
      60131);

      var _UniformStudentlistPageModule = /*#__PURE__*/_createClass(function UniformStudentlistPageModule() {
        _classCallCheck(this, UniformStudentlistPageModule);
      });

      _UniformStudentlistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _uniform_studentlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.UniformStudentlistPageRoutingModule],
        declarations: [_uniform_studentlist_page__WEBPACK_IMPORTED_MODULE_1__.UniformStudentlistPage]
      })], _UniformStudentlistPageModule);
      /***/
    },

    /***/
    60131:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-studentlist/uniform-studentlist.page.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UniformStudentlistPage": function UniformStudentlistPage() {
          return (
            /* binding */
            _UniformStudentlistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_uniform_studentlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./uniform-studentlist.page.html */
      17823);
      /* harmony import */


      var _uniform_studentlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./uniform-studentlist.page.scss */
      95885);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

      var _UniformStudentlistPage = /*#__PURE__*/function () {
        function UniformStudentlistPage(router, route, sqliteDB, userService) {
          _classCallCheck(this, UniformStudentlistPage);

          this.router = router;
          this.route = route;
          this.sqliteDB = sqliteDB;
          this.userService = userService;
        }

        return _createClass(UniformStudentlistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.schoolName = this.routeData.queryParams.schoolName;
            this.schoolId = this.routeData.queryParams.schoolId;
            this.class_studying_id = this.routeData.queryParams.class_studying_id;
            this.sec = this.routeData.queryParams.sec;
            this.region = this.routeData.queryParams.region;
            this.measurement_completed = this.routeData.queryParams.measurement_completed;
            this.genderfilter = '';
            this.onSelectTotalStudent();
          }
        }, {
          key: "studentData",
          value: function studentData() {
            var _this = this;

            var manage;
            var datas = {
              "school_id": this.schoolId
            };
            this.userService.studentlistData(datas).subscribe(function (res) {
              manage = res.result.forEach(function (element) {
                if (element.status === null || element.status === '') {
                  element.status = '0';
                }
              });
              manage = res.result;
              var duplicate = [];
              var idSet = new Set();

              var _iterator = _createForOfIteratorHelper(manage),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var student = _step.value;

                  if (!idSet.has(student.user_id)) {
                    duplicate.push(student);
                    idSet.add(student.user_id);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this.insertLocalData(duplicate);

              _this.studentlist = manage.filter(function (item) {
                return item.class_studying_id == _this.class_studying_id && item.class_section == _this.sec;
              });
            });
          }
        }, {
          key: "navigateNext",
          value: function navigateNext(gender, class_studying_id, user_id, name, IndexId) {
            var measurement_completed = parseInt(this.measurement_completed);
            this.router.navigate(['/tabs/measurement-questions'], {
              queryParams: {
                "gender": gender,
                "class_studying_id": class_studying_id,
                "schoolId": this.schoolId,
                "schoolName": this.schoolName,
                sec: this.sec,
                "region": this.region,
                "user_id": user_id,
                "name": name,
                "measurement_completed": measurement_completed,
                "IndexId": IndexId
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/uniform-classlist'], {
              queryParams: {
                "schoolName": this.schoolName,
                "schoolId": this.schoolId,
                "region": this.region,
                "class_studying_id": this.class_studying_id,
                sec: this.sec,
                "measurement_completed": this.measurement_completed
              }
            });
          }
        }, {
          key: "onSelectTotalStudent",
          value: function onSelectTotalStudent() {
            var _this2 = this;

            this.studentDatalist = [];
            var manage = [];
            var query = 'SELECT * FROM uniformStudentlistData' + ' WHERE school_id = "' + this.schoolId + '"';
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                  manage.push(data.rows.item(i));
                }

                _this2.studentDatalist = manage.filter(function (item) {
                  return item.class_studying_id == _this2.class_studying_id && item.class_section == _this2.sec;
                });
                _this2.studentlist = manage.filter(function (item) {
                  return item.class_studying_id == _this2.class_studying_id && item.class_section == _this2.sec;
                });

                _this2.studentlist.sort(function (a, b) {
                  var nameA = a.name.toLowerCase();
                  var nameB = b.name.toLowerCase();

                  if (nameA < nameB) {
                    return -1; // Name A comes before Name B
                  }

                  if (nameA > nameB) {
                    return 1; // Name A comes after Name B
                  }

                  return 0; // Names are equal
                });

                console.log(_this2.studentlist, "studentlist local");
              } else {
                _this2.studentData();
              }
            });
          }
        }, {
          key: "insertLocalData",
          value: function insertLocalData(elementData) {
            var _this3 = this;

            var insertRows = [];
            elementData.forEach(function (element) {
              insertRows.push(["INSERT INTO uniformStudentlistData VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [null, element.school_id, element.school_name, element.user_id, element.name, element.class_studying_id, element.class_section, element.gender, element.phone_number, element.status, element.m_id, element.isCompleted, element.boys_shoulder_len, element.boys_shirt_height, element.boys_hand_length, element.boys_chest_circum, element.boys_hand_circum, element.boys_hip_circum, element.boys_Pant_height, element.boys_thigh_circum, element.boys_leg_circum, element.girls_top_sholder, element.girls_top_height, element.girls_top_hand_len, element.girls_top_chest_circum, element.girls_top_hand_circum, element.girls_bottom_height, element.girls_bottom_hip_circum, element.girls_bottom_leg_circum, element.girls_overcoat_sholder, element.girls_overcoat_height, element.girls_overcoat_chest_cir, element.uniform_status]]);
            });
            this.sqliteDB.bulkInsert(insertRows).then(function (result) {
              console.info("LocalData Stored Student data", result);

              _this3.onSelectTotalStudent();
            });
          }
        }, {
          key: "selectgender",
          value: function selectgender(event) {
            this.genderfilter = event.detail.value;
          }
        }]);
      }();

      _UniformStudentlistPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }];
      };

      _UniformStudentlistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-uniform-studentlist',
        template: _raw_loader_uniform_studentlist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_uniform_studentlist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _UniformStudentlistPage);
      /***/
    },

    /***/
    95885:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/uniform/uniform-studentlist/uniform-studentlist.page.scss ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".selectdata {\n  border: 1px solid #BE3455;\n  background-color: white !important;\n}\n\nion-row {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaWZvcm0tc3R1ZGVudGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJ1bmlmb3JtLXN0dWRlbnRsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RkYXRhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCRTM0NTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLXJvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    17823:
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/uniform/uniform-studentlist/uniform-studentlist.page.html ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"newprimary\">\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title> \r\n      <div style=\"font-size: 17px;\">{{schoolName}} - {{class_studying_id}} {{sec}}</div>\r\n      <!-- <div style=\"padding-top: 2px;font-size: small;\">{{emis_username}}</div> -->\r\n      </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-row><ion-col size=\"12\">\r\n    <ion-select class=\"selectdata\" label=\"Default label\" (ionChange)=\"selectgender($event)\"\r\n    placeholder=\"Length\" [(ngModel)]=\"genderfilter\">\r\n    <ion-select-option [value]=\"1\">Male\r\n     </ion-select-option>\r\n     <ion-select-option [value]=\"2\">Female\r\n    </ion-select-option>\r\n  </ion-select>\r\n  </ion-col></ion-row> -->\r\n  <div class=\"rowpMedium rowColr\" >\r\n    <div class=\"font-14\" style=\"padding: 0px 5px;\"><ion-text color=\"danger\">Note: </ion-text>  \r\n      <ion-row>\r\n        <ion-col size=\"2\" style=\"padding: 0px;\">\r\n            <ion-icon name='arrow-forward-circle-outline' style=\"zoom: 1.5;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"10\" style=\"text-align: left;padding: 0px;\">\r\n          <ion-label>Please fill all the measurements</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" style=\"padding: 0px;\">\r\n          <ion-icon name=\"chevron-forward-circle-outline\" style=\"zoom: 1.5; color: blue;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"10\" style=\"text-align: left;padding: 0px;\">\r\n          <ion-label>Please fill the empty measurement fields</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" style=\"padding: 0px;\">\r\n          <ion-icon name=\"checkmark-circle-outline\" style=\"zoom: 1.5; color: green;\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"10\" style=\"text-align: left;padding: 0px;\">\r\n          <ion-label>Measurements completed</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"2\" style=\"padding: 0px;\">\r\n          <ion-icon name=\"checkmark-circle-outline\" style=\"zoom: 1.5;color: rgb(11, 125, 212);\"></ion-icon>\r\n        </ion-col>\r\n        <ion-col size=\"10\" style=\"text-align: left;padding: 0px;\">\r\n          <ion-label>File are locally saved</ion-label>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-card class=\"newsecondary cardhead\">\r\n    <ion-row style=\"padding: 2%;\">\r\n      <ion-col size=\"2\" style=\"text-align: center;\"> S.No\r\n      </ion-col>\r\n      <ion-col class=\"corner-head\" size=\"4\" style=\"text-align: center;\"> Student Name\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;\"> EmisId\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;\"> Status\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card> \r\n \r\n  <ion-card *ngFor=\"let item of studentlist;let i = index\" style=\"border: 1px solid\">\r\n    <ion-row style=\"padding: 2%; opacity: 0.5;\" *ngIf=\"item.uniform_status == 1\" disabled=\"true\">\r\n      <ion-col size=\"2\" class=\"corner newsecondaryTex\" style=\"text-align: center;\"> {{i+1}}\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"corner newsecondaryTex\"> {{item.name}}\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"newsecondaryTex\" style=\"text-align: center;\"> {{item.user_id}}\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;color: rgb(11, 125, 212);\" *ngIf=\"item.isCompleted == 3\"> \r\n        <ion-icon name=\"checkmark-circle-outline\" style=\"zoom: 1.5;\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;\" *ngIf=\"item.isCompleted == 2\"> \r\n        <ion-icon name=\"checkmark-circle-outline\" style=\"zoom: 1.5; color: green;\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"3\" style=\"text-align: center;\" *ngIf=\"item.isCompleted == 1\"> \r\n        <ion-icon name=\"chevron-forward-circle-outline\" style=\"zoom: 1.5; color: blue;\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"newsecondaryTex\" style=\"text-align: center;\" *ngIf=\"item.isCompleted != 1 && item.isCompleted != 2 && item.isCompleted != 3\"  > \r\n        <ion-icon name='arrow-forward-circle-outline' style=\"zoom: 1.5;\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row style=\"padding: 2%;\" *ngIf=\"item.uniform_status == 2\">\r\n      <ion-col size=\"2\" class=\"corner newsecondaryTex\" style=\"text-align: center;\"> {{i+1}}\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"corner newsecondaryTex\"> {{item.name}}\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"newsecondaryTex\" style=\"text-align: center;\"> {{item.user_id}}\r\n      </ion-col>\r\n      <ion-col (click)=\"navigateNext(item.gender,item.class_studying_id,item.user_id,item.name,item.IndexId)\" size=\"3\" style=\"text-align: center;color: rgb(11, 125, 212);\" *ngIf=\"item.isCompleted == 3\"> \r\n        <ion-icon name=\"checkmark-circle-outline\" style=\"zoom: 1.5;\"></ion-icon>\r\n      </ion-col>\r\n      <!-- <ion-col size=\"3\" style=\"text-align: center;color: green;\" *ngIf=\"item.status == 1\"> \r\n        <ion-icon name=\"checkmark-circle-outline\" style=\"zoom: 1.5;\"></ion-icon>\r\n      </ion-col> -->\r\n      <ion-col (click)=\"navigateNext(item.gender,item.class_studying_id,item.user_id,item.name,item.IndexId)\" size=\"3\" style=\"text-align: center;\" *ngIf=\"item.isCompleted == 2\"> \r\n        <ion-icon name=\"checkmark-circle-outline\" style=\"zoom: 1.5; color: green;\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col (click)=\"navigateNext(item.gender,item.class_studying_id,item.user_id,item.name,item.IndexId)\" size=\"3\" style=\"text-align: center;\" *ngIf=\"item.isCompleted == 1\"> \r\n        <ion-icon name=\"chevron-forward-circle-outline\" style=\"zoom: 1.5; color: blue;\"></ion-icon>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"newsecondaryTex\" style=\"text-align: center;\" *ngIf=\"item.isCompleted != 1 && item.isCompleted != 2 && item.isCompleted != 3\" (click)=\"navigateNext(item.gender,item.class_studying_id,item.user_id,item.name,item.IndexId)\" > \r\n        <ion-icon name='arrow-forward-circle-outline' style=\"zoom: 1.5;\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_uniform_uniform-studentlist_uniform-studentlist_module_ts-es5.js.map