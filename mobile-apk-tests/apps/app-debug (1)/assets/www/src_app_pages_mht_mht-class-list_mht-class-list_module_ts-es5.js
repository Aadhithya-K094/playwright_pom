(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_mht_mht-class-list_mht-class-list_module_ts"], {
    /***/
    61268:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/mht/mht-class-list/mht-class-list-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MhtClassListPageRoutingModule": function MhtClassListPageRoutingModule() {
          return (
            /* binding */
            _MhtClassListPageRoutingModule
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


      var _mht_class_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mht-class-list.page */
      74076);

      var routes = [{
        path: '',
        component: _mht_class_list_page__WEBPACK_IMPORTED_MODULE_0__.MhtClassListPage
      }];

      var _MhtClassListPageRoutingModule = /*#__PURE__*/_createClass(function MhtClassListPageRoutingModule() {
        _classCallCheck(this, MhtClassListPageRoutingModule);
      });

      _MhtClassListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MhtClassListPageRoutingModule);
      /***/
    },

    /***/
    71178:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/mht/mht-class-list/mht-class-list.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MhtClassListPageModule": function MhtClassListPageModule() {
          return (
            /* binding */
            _MhtClassListPageModule
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


      var _mht_class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mht-class-list-routing.module */
      61268);
      /* harmony import */


      var _mht_class_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mht-class-list.page */
      74076);

      var _MhtClassListPageModule = /*#__PURE__*/_createClass(function MhtClassListPageModule() {
        _classCallCheck(this, MhtClassListPageModule);
      });

      _MhtClassListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mht_class_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.MhtClassListPageRoutingModule],
        declarations: [_mht_class_list_page__WEBPACK_IMPORTED_MODULE_1__.MhtClassListPage]
      })], _MhtClassListPageModule);
      /***/
    },

    /***/
    74076:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/mht/mht-class-list/mht-class-list.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MhtClassListPage": function MhtClassListPage() {
          return (
            /* binding */
            _MhtClassListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_mht_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mht-class-list.page.html */
      62998);
      /* harmony import */


      var _mht_class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mht-class-list.page.scss */
      17526);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
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


      var src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/tnvn/services/network.service */
      81508);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _MhtClassListPage = /*#__PURE__*/function () {
        function MhtClassListPage(router, alertController, route, alertService, usersessionService, networkService, sqliteDB, userService) {
          _classCallCheck(this, MhtClassListPage);

          this.router = router;
          this.alertController = alertController;
          this.route = route;
          this.alertService = alertService;
          this.usersessionService = usersessionService;
          this.networkService = networkService;
          this.sqliteDB = sqliteDB;
          this.userService = userService;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US');
          this.class_in_roman = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "LKG", "UKG", "PREKG"];
          this.StudentsCounts = [];
          this.classCountDet = [];
        }

        return _createClass(MhtClassListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.routeData = this.route.snapshot;
            this.paramsId = this.routeData.queryParams.Id;
            this.SchlId = this.routeData.queryParams.SchlId;
            this.SchName = this.routeData.queryParams.SchName;
            this.acYear = this.routeData.queryParams.acYear;
            this.Latt = this.routeData.queryParams.Latt;
            this.Longg = this.routeData.queryParams.Longg;
            this.UserName = this.usersessionService.emis_username();
            this.viewType = localStorage.getItem("viewType");

            if (this.paramsId == 1) {
              this.classActive = false;
              this.sectionActive = true;
            } else {
              this.classActive = true;
              this.sectionActive = false;
            }

            this.todayDate = this.pipe.transform(new Date(), 'dd-MM-yyyy');
            this.todayDateFormat = this.pipe.transform(new Date(), 'yyyy-MM-dd'); // this. totalStudentcheckLocalDb();

            this.totalStudentsCount();
          }
        }, {
          key: "totalStudentcheckLocalDb",
          value: function totalStudentcheckLocalDb() {
            var _this = this;

            var query = 'SELECT * FROM mhtStudentCountDB WHERE SchlId=' + this.SchlId;
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rows.length > 0) {
                _this.StudentsCounts = [];

                for (var i = 0; i < data.rows.length; i++) {
                  _this.StudentsCounts.push(data.rows.item(i));
                }
              } else {
                _this.totalStudentsCount();
              }
            });
          }
        }, {
          key: "totalStudentsCount",
          value: function totalStudentsCount() {
            var _this2 = this;

            this.StudentsCounts = [];
            this.classCountDet = [];
            this.userService.mhtStudentsCount(this.UserName, this.SchlId, this.acYear).subscribe(function (res) {
              if (res.dataStatus) {
                _this2.StudentsCounts = res.result;
                _this2.classCountDet = res.result[0]['class_count']; // this.TotalStudinsertLocalDB(this.StudentsCounts)
              }

              _this2.checkLocalData();
            });
          }
        }, {
          key: "checkLocalData",
          value: function checkLocalData() {
            var _this3 = this;

            this.classList = [];
            this.allClassLists = [];
            this.sqliteDB.getExistData('AllClasslist', this.SchlId, 'SchlD').then(function (res) {
              if (res.length > 0) {
                _this3.allClassLists = res;
                _this3.classList = Array.from(new Set(_this3.allClassLists.map(function (s) {
                  return s.ClsID;
                }))).map(function (ClsID) {
                  var stuCount = _this3.classCountDet.filter(function (x) {
                    return x.class_studying_id == ClsID;
                  });

                  return {
                    ClsID: ClsID,
                    Clsroman: _this3.allClassLists.find(function (s) {
                      return s.ClsID == ClsID;
                    }).Clsroman,
                    Sync: _this3.allClassLists.find(function (s) {
                      return s.ClsID == ClsID;
                    }).Sync,
                    SyncClass: _this3.allClassLists.find(function (s) {
                      return s.ClsID == ClsID;
                    }).SyncClass,
                    Synclr: '',
                    present: _this3.allClassLists.find(function (s) {
                      return s.ClsID == ClsID;
                    }).present,
                    absent: _this3.allClassLists.find(function (s) {
                      return s.ClsID == ClsID;
                    }).absent,
                    stuCount: stuCount.length > 0 ? +stuCount[0]['TotalStudents'] : 0
                  };
                });

                _this3.classList.forEach(function (a) {
                  _this3.classLength = _this3.allClassLists.filter(function (tt) {
                    return tt.ClsID == a.ClsID;
                  });
                  _this3.classSync = _this3.allClassLists.filter(function (tt) {
                    return tt.ClsID == a.ClsID && tt.SyncClass == 1;
                  });

                  if (_this3.classLength.length == _this3.classSync.length) {
                    a.Synclr = 1;
                  } else {
                    a.Synclr = 0;
                  }
                });

                _this3.classList.sort(function (a, b) {
                  if (a.ClsID < b.ClsID) return -1;
                  if (a.ClsID > b.ClsID) return 1;
                  return 0;
                });
              } else {
                // this.router.navigate(['tabs/attendance/sync-settings']);
                _this3.alertService.error("Please Sync Student List");
              }
            });
          }
        }, {
          key: "classSelected",
          value: function classSelected(value) {
            if (this.acYear == '2023-24') {
              this.classVal = value.ClsID;
              this.goToStudentAttendance('');
            } else {
              this.goToSection(value);
            }
          }
        }, {
          key: "goToSection",
          value: function goToSection(data) {
            var _this4 = this;

            this.sectionList = [];
            this.classVal = data.ClsID;
            this.sectionsList = this.allClassLists.filter(function (tt) {
              return tt.ClsID == _this4.classVal;
            });
            var key = 'Sectn';
            this.sectionList = _toConsumableArray(new Map(this.sectionsList.map(function (item) {
              return [item[key], item];
            })).values());
            this.classId = this.class_in_roman[this.classVal];

            if (this.sectionList.length > 0) {
              this.sectionActive = true;
              this.classActive = false;
            }
          }
        }, {
          key: "goToStudentAttendance",
          value: function goToStudentAttendance(section) {
            this.section = section === null || section === void 0 ? void 0 : section.Sectn;
            this.router.navigate(['/tabs/class-student-list'], {
              queryParams: {
                'SchlId': this.SchlId,
                'Latt': this.Latt,
                'Longg': this.Longg,
                'ClsID': this.classVal,
                'Sectn': this.section,
                'SchName': this.SchName,
                'session': 1,
                'acYear': this.acYear
              },
              skipLocationChange: false
            });
          }
        }, {
          key: "moveClass",
          value: function moveClass() {
            this.sectionActive = false;
            this.classActive = true;
          }
        }, {
          key: "goToDashboard",
          value: function goToDashboard() {
            this.router.navigate(['/tabs/school-list-mht']);
          }
        }, {
          key: "onSync",
          value: function onSync() {
            var _this5 = this;

            var connectionStatus = this.networkService.getCurrentNetworkStatus();

            if (connectionStatus !== 1) {
              var deleteQuery = 'DELETE FROM AllClasslist WHERE SchlD = ' + this.SchlId;
              return this.sqliteDB.getDataLocalDB(deleteQuery).then(function (data) {
                _this5.getAllClassList();
              });
            } else {
              this.alertService.error("Internet not available, Cross check your internet connectivity and try again");
            }
          }
        }, {
          key: "getAllClassList",
          value: function getAllClassList() {
            var _this6 = this;

            this.userService.getAllClassList(2, this.SchlId).subscribe(function (res) {
              if (res) {
                res.map(function (i) {
                  return i['Clsroman'] = _this6.class_in_roman[i['class_id']];
                });

                if (res.length > 0) {
                  res.forEach(function (element) {
                    _this6.saveClassLocalDB(_this6.SchlId, element.class_id, element.section, element.Clsroman);
                  });

                  _this6.getClassLocalDB();
                }
              }
            });
          }
        }, {
          key: "saveClassLocalDB",
          value: function saveClassLocalDB(SchlD, ClsID, Sectn, Clsroman) {
            var datainsert = 'INSERT INTO AllClasslist VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            this.sqliteDB.insert(datainsert, [null, SchlD, ClsID, Sectn, Clsroman, this.SchlId, 0, 0, 0, 0, 0, 0, this.todayDate, 0, 0]).then(function (insertres) {
              if (insertres) {}
            });
          }
        }, {
          key: "TotalStudinsertLocalDB",
          value: function TotalStudinsertLocalDB(key) {
            var _this7 = this;

            key.forEach(function (element) {
              var datainsert = 'INSERT INTO mhtStudentCountDB VALUES (?,?,?,?,?,?)';

              _this7.sqliteDB.insert(datainsert, [null, element.DocAddedStudents, element.ScreenedStudents, element.TotalStudents, element.UnScreenedStudents, _this7.SchlId]).then(function (insertres) {
                if (insertres.insertId) {}
              });
            });
          }
        }, {
          key: "getClassLocalDB",
          value: function getClassLocalDB() {
            var _this8 = this;

            this.sqliteDB.getExistData('AllClasslist', this.SchlId, 'userName').then(function (res) {
              if (res.length > 0) {
                _this8.ionViewDidEnter();
              }
            });
          }
        }]);
      }();

      _MhtClassListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_6__.UserSessionService
        }, {
          type: src_app_services_tnvn_services_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }];
      };

      _MhtClassListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-mht-class-list',
        template: _raw_loader_mht_class_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mht_class_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MhtClassListPage);
      /***/
    },

    /***/
    17526:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/mht/mht-class-list/mht-class-list.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".maindiv {\n  margin: 20px;\n  background-color: white;\n  border-radius: 15px;\n}\n\n.blockLabel {\n  font-weight: 600;\n  font-size: 18px;\n  margin-left: 8px;\n}\n\n.dropDown {\n  border: 1px solid grey;\n  padding-right: 10px;\n  font-size: 15px;\n  margin-top: 10px;\n  margin-left: 8px;\n  margin-right: 8px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.cardTotal {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #68529c;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.cardtotal2 {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #3975c4;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.cardTotal3 {\n  padding: 5px;\n  padding-left: 20px;\n  border-left: 8px solid #be4eb9;\n  border-radius: 20px;\n  margin-top: 20px;\n}\n\n.totalNo {\n  font-size: 20px;\n  color: #68529c;\n  font-weight: 500;\n}\n\n.totalText {\n  font-size: 16px;\n  color: black;\n}\n\n.col {\n  align-self: center;\n}\n\n.classNo {\n  font-size: 14px;\n  color: #767676;\n  font-weight: 500;\n}\n\n.classcard {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.classcard2 {\n  border-radius: 20px;\n  border-left: 6px solid #68529c;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background: #ff001554;\n}\n\n.classText {\n  font-size: 15px;\n  font-weight: 600;\n  color: black;\n}\n\n.schName {\n  font-size: 16px;\n  color: #68529c;\n}\n\n.searchbar-input.sc-ion-searchbar-md {\n  border-radius: 25px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.1rem;\n  font-weight: 400;\n  color: #7f8490;\n  background-color: white;\n  box-shadow: 0 8px 14px rgba(0, 0, 0, 0.1) !important;\n}\n\n.labelClass {\n  width: 95%;\n  padding: 6px;\n  padding-left: 15px;\n  margin-bottom: 15px;\n  border: 1px solid #b4b4b4;\n  border-radius: 10px;\n  margin-left: 10px;\n}\n\n.headerData {\n  color: #68529c;\n  font-size: 13px;\n  background-color: aliceblue;\n  padding: 10px;\n  text-align: center;\n  font-weight: 400;\n}\n\n.countData {\n  font-size: 15px;\n  background-color: #8b67b3;\n  color: aliceblue;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  font-weight: bold;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1odC1jbGFzcy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFVSjs7QUFQQTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFVSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBV0o7O0FBVEE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSxvREFBQTtBQVlKOztBQVZFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBYUo7O0FBVkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFjSiIsImZpbGUiOiJtaHQtY2xhc3MtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmRpdntcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgLy8gcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG4uYmxvY2tMYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4uZHJvcERvd257XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2FyZFRvdGFse1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJkdG90YWwye1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoNTcsIDExNywgMTk2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jYXJkVG90YWwze1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2IoMTkwLCA3OCwgMTg1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi50b3RhbE5ve1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6cmdiKDEwNCwgODIsIDE1Nik7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi50b3RhbFRleHR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjpibGFja1xyXG59XHJcbi5jb2x7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmNsYXNzTm97XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc2NzY3NjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNsYXNzY2FyZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2xhc3NjYXJkMntcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZ2IoMTA0LCA4MiwgMTU2KTsgXHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAxNTU0O1xyXG59XHJcblxyXG4uY2xhc3NUZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOmJsYWNrXHJcbn1cclxuLnNjaE5hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjpyZ2IoMTA0LCA4MiwgMTU2KTtcclxufVxyXG4uc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgOHB4IGNlbnRlcjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjN2Y4NDkwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGFiZWxDbGFzc3tcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MCwgMTgwLCAxODApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlckRhdGEge1xyXG4gICAgY29sb3I6IHJnYigxMDQsIDgyLCAxNTYpO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIC5jb3VudERhdGEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhiNjdiMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAiXX0= */";
      /***/
    },

    /***/
    62998:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mht/mht-class-list/mht-class-list.page.html ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- class -->\r\n<ion-header *ngIf=\"classActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goToDashboard()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\" style=\"font-size: 15px;\">{{SchName}} (AY {{acYear}})</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" style=\"color:white\" (click)=\"onSync()\">\r\n      <ion-icon name=\"sync-outline\" style=\"zoom:2.0\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"graybackgrond\" *ngIf=\"classActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"text\">School Name</ion-col>\r\n    <ion-col size=\"12\" class=\"value\">{{sessionSchoolName}}</ion-col>\r\n    <ion-col size=\"12\">\r\n      <div class=\"line\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"square-container\">\r\n      <ion-col size=\"4\" *ngFor=\"let class of classList\" style=\"padding-bottom: 15px;\" >\r\n        <ion-card class=\"card-class\" (click)=\"classSelected(class)\">\r\n          <div class=\"ion-margin-top ion-margin-bottom\" style=\"text-align: center;\">\r\n            <ion-label>\r\n              <p class=\"label-class\" style=\"color:var(--ion-color-primary) !important\">{{class.Clsroman}}</p>\r\n              <p class=\"label-section\" >Std</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content> -->\r\n\r\n<ion-content class=\"graybackgrond\"  *ngIf=\"classActive\">\r\n\r\n\r\n  <div *ngFor=\"let item of StudentsCounts\">\r\n    <ion-row\r\n      style=\"background-color: white;border-left: 8px solid #D9688B;margin: 20px;border-radius: 18px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{item.TotalStudents}}</ion-label><br>\r\n        <ion-label style=\"padding-left: 20px;\">{{acYear != '2023-24' ? 'Total Students' : 'My Patients'}} </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\">\r\n        <div>\r\n          <img src=\"../../../../../assets/icons/Total_Students.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      style=\"background-color: white;border-left: 8px solid #4CAF50;margin: 20px;border-radius: 18px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{acYear == '2023-24' ? item.updatedStu : item.ScreenedStudents}}</ion-label><br>\r\n        <ion-label style=\"padding-left: 20px;\">{{acYear == '2023-24' ? 'Updated Students' :'Screened Students'}} </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\">\r\n        <div>\r\n          <img src=\"../../../../../assets/icons/Unscreened_Students.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row\r\n      style=\"background-color: white;border-left: 8px solid #E9A069;margin: 20px;border-radius: 18px;\" *ngIf=\"viewType == 2\">\r\n      <ion-col size=\"10\">\r\n        <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{acYear == '2023-24' ? item.notUpdatedStu : item.UnScreenedStudents}}</ion-label><br>\r\n        <ion-label style=\"padding-left: 20px;\">{{acYear == '2023-24' ? 'Not Updated Students' :'Unscreened Students'}} </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\">\r\n        <div>\r\n          <img src=\"../../../../../assets/icons/Screened_Students.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- <ion-row\r\n      style=\"background-color: white;border-left: 8px solid #4CAF50;margin: 20px;border-radius: 18px;\">\r\n      <ion-col size=\"10\">\r\n        <ion-label style=\"padding-left: 20px;font-weight: bold;color: #6766D5;font-size: 20px;\">{{item.DocAddedStudents}}</ion-label><br>\r\n        <ion-label style=\"padding-left: 20px;\">Newly Recommended </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\" style=\"align-self: center;\">\r\n        <div>\r\n          <img src=\"../../../../../assets/icons/Screened_Students.svg\">\r\n        </div>\r\n      </ion-col>\r\n    </ion-row> -->\r\n  </div>\r\n\r\n\r\n  <div class=\"maindiv\">\r\n    <!-- <ion-row style=\"margin:10px;justify-content: center;\">\r\n      <ion-col size=\"6\" class=\"square\" >\r\n        <ion-card style=\"border-radius: 5px;\" >\r\n          <ion-label>\r\n            <div class=\"headerData\"> Total Students </div>\r\n            <div class=\"countData\"> 10 </div>\r\n          </ion-label>\r\n        </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"square\" >\r\n          <ion-card style=\"border-radius: 5px;\" >\r\n            <ion-label>\r\n              <div class=\"headerData\"> Total Students Screened </div>\r\n              <div class=\"countData\"> 4 </div>\r\n            </ion-label>\r\n          </ion-card>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"square\" >\r\n            <ion-card style=\"border-radius: 5px;\" >\r\n              <ion-label>\r\n                <div class=\"headerData\"> Students Partialy screened</div>\r\n                <div class=\"countData\"> 3 </div>\r\n              </ion-label>\r\n            </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"6\" class=\"square\" >\r\n              <ion-card style=\"border-radius: 5px;\" >\r\n                <ion-label>\r\n                  <div class=\"headerData\"> Students Yet to be Screened </div>\r\n                  <div class=\"countData\"> 3 </div>\r\n                </ion-label>\r\n              </ion-card>\r\n              </ion-col>\r\n        </ion-row> -->\r\n  <div>\r\n    <ion-row>\r\n      <ion-col size=\"4\" *ngFor=\"let class of classList\">\r\n        <ion-card [ngClass]=\"{'classcard' : class.stuCount > 0, 'classcard2' : class.stuCount == 0}\" (click)=\"classSelected(class)\">\r\n          <div style=\"text-align: center;\">\r\n            <ion-label class=\"classText\">{{class.Clsroman}}</ion-label><br>\r\n            <ion-label class=\"classNo\">Std</ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </div>\r\n</div>\r\n\r\n</ion-content>\r\n\r\n<!-- section -->\r\n<!-- <ion-header *ngIf=\"sectionActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\" (click)=\"moveClass()\">\r\n      <ion-icon name=\"arrow-back\" >\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <div class=\"ion-text-wrap\">Section</div>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ion-header *ngIf=\"sectionActive\">\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"moveClass()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Class {{classId}} (AY {{acYear}})</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" style=\"width:24px;vertical-align: text-top;font-size: 17px;\"> </ion-icon>\r\n        <div style=\"font-size: 12px;padding-bottom: 4px;\">\r\n        <ion-label>{{UserName}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<!-- <ion-content class=\"graybackgrond\" *ngIf=\"sectionActive\">\r\n  <ion-row>\r\n    <ion-col size=\"12\" class=\"text\"> Class</ion-col>\r\n    <ion-col size=\"12\" class=\"value\"> {{classId}} Std </ion-col>\r\n    <ion-col size=\"12\">\r\n      <div class=\"line\"></div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-grid class=\"grid-padding\">\r\n    <ion-row class=\"square-container\">\r\n      <ion-col size=\"4\" *ngFor=\"let section of sectionList;let i=index;\" style=\"padding-bottom: 15px;\">\r\n        <ion-card class=\"card-class\" (click)=\"goToStudentAttendance(section)\" >\r\n          <div class=\"ion-margin-top ion-margin-bottom\" style=\"text-align: center;\">\r\n            <ion-label>\r\n              <p class=\"label-class\" style=\"color:var(--ion-color-primary)\">{{section.Sectn}}</p>\r\n              <p class=\"label-section\" >Section</p>\r\n            </ion-label>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content> -->\r\n\r\n<ion-content class=\"graybackgrond\"  *ngIf=\"sectionActive\">\r\n  <div class=\"maindiv\">\r\n\r\n  \r\n    <div>\r\n      <ion-row>\r\n        <ion-col size=\"4\" *ngFor=\"let section of sectionList;let i=index;\">\r\n          <ion-card class=\"classcard\" (click)=\"goToStudentAttendance(section)\" >\r\n            <div style=\"text-align: center;\">\r\n              <ion-label class=\"classText\">{{section.Sectn}}</ion-label><br>\r\n              <ion-label class=\"classNo\">Section</ion-label>\r\n            </div>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </div>\r\n  \r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mht_mht-class-list_mht-class-list_module_ts-es5.js.map