(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_stem-dashboard_summary-attendance_summary-attendance_module_ts"], {
    /***/
    94002:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance-routing.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummaryAttendancePageRoutingModule": function SummaryAttendancePageRoutingModule() {
          return (
            /* binding */
            _SummaryAttendancePageRoutingModule
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


      var _summary_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summary-attendance.page */
      89871);

      var routes = [{
        path: '',
        component: _summary_attendance_page__WEBPACK_IMPORTED_MODULE_0__.SummaryAttendancePage
      }];

      var _SummaryAttendancePageRoutingModule = /*#__PURE__*/_createClass(function SummaryAttendancePageRoutingModule() {
        _classCallCheck(this, SummaryAttendancePageRoutingModule);
      });

      _SummaryAttendancePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SummaryAttendancePageRoutingModule);
      /***/
    },

    /***/
    98528:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummaryAttendancePageModule": function SummaryAttendancePageModule() {
          return (
            /* binding */
            _SummaryAttendancePageModule
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


      var _summary_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./summary-attendance-routing.module */
      94002);
      /* harmony import */


      var _summary_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summary-attendance.page */
      89871);

      var _SummaryAttendancePageModule = /*#__PURE__*/_createClass(function SummaryAttendancePageModule() {
        _classCallCheck(this, SummaryAttendancePageModule);
      });

      _SummaryAttendancePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _summary_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.SummaryAttendancePageRoutingModule],
        declarations: [_summary_attendance_page__WEBPACK_IMPORTED_MODULE_1__.SummaryAttendancePage]
      })], _SummaryAttendancePageModule);
      /***/
    },

    /***/
    89871:
    /*!*********************************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.page.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SummaryAttendancePage": function SummaryAttendancePage() {
          return (
            /* binding */
            _SummaryAttendancePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_summary_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./summary-attendance.page.html */
      57806);
      /* harmony import */


      var _summary_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./summary-attendance.page.scss */
      57485);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.api_url;

      var _SummaryAttendancePage = /*#__PURE__*/function () {
        function SummaryAttendancePage(navCtrl, alertCtrl, router, userService, usersessionService, emisService, alertService, modalCtrl, http) {
          _classCallCheck(this, SummaryAttendancePage);

          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.userService = userService;
          this.usersessionService = usersessionService;
          this.emisService = emisService;
          this.alertService = alertService;
          this.modalCtrl = modalCtrl;
          this.http = http;
          this.hideData = true;
          this.user_Id = this.usersessionService.emis_username();
        }

        return _createClass(SummaryAttendancePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hideData = true;
            this.yearList = [// {'label':'2022',value:2022},
            {
              'label': '2023',
              value: 2023
            }, {
              'label': '2024',
              value: 2024
            }, {
              'label': '2025',
              value: 2025
            }];
            this.monthList = [{
              'label': 'Janauary',
              value: 1
            }, {
              'label': 'February',
              value: 2
            }, {
              'label': 'March',
              value: 3
            }, {
              'label': 'April',
              value: 4
            }, {
              'label': 'May',
              value: 5
            }, {
              'label': 'June',
              value: 6
            }, {
              'label': 'July',
              value: 7
            }, {
              'label': 'August',
              value: 8
            }, {
              'label': 'September',
              value: 9
            }, {
              'label': 'October',
              value: 10
            }, {
              'label': 'November',
              value: 11
            }, {
              'label': 'December',
              value: 12
            }];
            this.getDistrictslist();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.hideData = true;
            this.teacherList = [];
            this.districtId = null;
            this.yearId = null;
            this.monthId = null;
            this.getDistrictslist();
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            if (this.hideData == false) {
              this.hideData = true;
            } else {
              this.router.navigate(['/tabs/stem-dashboard']);
            }
          }
        }, {
          key: "getDistrictslist",
          value: function getDistrictslist() {
            var _this = this;

            var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_country.json';
            this.http.get(json_name).subscribe(function (data) {
              if (data) {
                _this.totalcountry = data.state.map(function (l) {
                  return {
                    label: l.state_name,
                    value: l.state_code
                  };
                });
                _this.totalDistricts = data.district.map(function (l) {
                  return {
                    label: l.district_name,
                    value: l.disid
                  };
                });

                _this.totalDistricts.sort(function (a, b) {
                  if (a.label < b.label) return -1;
                  if (a.label > b.label) return 1;
                  return 0;
                });

                console.log(_this.totalDistricts, _this.user_Id);
                _this.finalDist = [];

                for (var i = 0; i < _this.totalDistricts.length; i++) {
                  if (_this.user_Id == 4033185 && (_this.totalDistricts[i].label == 'ARIYALUR' || _this.totalDistricts[i].label == 'CUDDALORE' || _this.totalDistricts[i].label == 'KALLAKURICHI' || _this.totalDistricts[i].label == 'MAYILADUTHURAI' || _this.totalDistricts[i].label == 'NAGAPATTINAM' || _this.totalDistricts[i].label == 'PERAMBALUR' || _this.totalDistricts[i].label == 'PUDUKKOTTAI' || _this.totalDistricts[i].label == 'THANJAVUR' || _this.totalDistricts[i].label == 'TIRUCHIRAPPALLI' || _this.totalDistricts[i].label == 'TIRUVARUR' || _this.totalDistricts[i].label == 'VILLUPURAM')) {
                    _this.finalDist.push(_this.totalDistricts[i]);
                  }

                  if (_this.user_Id == 4033184 && (_this.totalDistricts[i].label == 'COIMBATORE' || _this.totalDistricts[i].label == 'DHARMAPURI' || _this.totalDistricts[i].label == 'ERODE' || _this.totalDistricts[i].label == 'KRISHNAGIRI' || _this.totalDistricts[i].label == 'NAMAKKAL' || _this.totalDistricts[i].label == 'SALEM' || _this.totalDistricts[i].label == 'THE NILGIRIS' || _this.totalDistricts[i].label == 'TIRUPPUR')) {
                    _this.finalDist.push(_this.totalDistricts[i]);
                  }

                  if (_this.user_Id == 4033186 && (_this.totalDistricts[i].label == 'DINDIGUL' || _this.totalDistricts[i].label == 'KANNIYAKUMARI' || _this.totalDistricts[i].label == 'KARUR' || _this.totalDistricts[i].label == 'MADURAI' || _this.totalDistricts[i].label == 'RAMANATHAPURAM' || _this.totalDistricts[i].label == 'SIVAGANGAI' || _this.totalDistricts[i].label == 'TENKASI' || _this.totalDistricts[i].label == 'THENI' || _this.totalDistricts[i].label == 'THOOTHUKKUDI' || _this.totalDistricts[i].label == 'TIRUNELVELI' || _this.totalDistricts[i].label == 'VIRUDHUNAGAR')) {
                    _this.finalDist.push(_this.totalDistricts[i]);
                  }

                  if (_this.user_Id == 4033187 && (_this.totalDistricts[i].label == 'CHENGALPATTU' || _this.totalDistricts[i].label == 'CHENNAI (EXT. GCC)' || _this.totalDistricts[i].label == 'KANCHEEPURAM' || _this.totalDistricts[i].label == 'RANIPET' || _this.totalDistricts[i].label == 'TIRUPATHUR' || _this.totalDistricts[i].label == 'TIRUVALLUR' || _this.totalDistricts[i].label == 'TIRUVANNAMALAI' || _this.totalDistricts[i].label == 'VELLORE')) {
                    _this.finalDist.push(_this.totalDistricts[i]);
                  }
                }
              }
            });
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this2 = this;

            this.attendanceData = [];
            this.emisService.StemRpAttendenceSts().subscribe(function (res) {
              if (res.dataStatus) {
                _this2.attendanceData = res.result;
              }
            });
          }
        }, {
          key: "selectdistrict",
          value: function selectdistrict(event) {
            var _this3 = this;

            this.districtId = event.target.value;
            this.yearId = null;
            this.monthId = null;
            this.attendancedistData = this.attendanceData.filter(function (a) {
              return parseInt(a.district_id) == _this3.districtId;
            });
          }
        }, {
          key: "selectyear",
          value: function selectyear(event) {
            var _this4 = this;

            this.yearId = event.target.value;
            this.monthId = null;
            this.attendanceyearData = this.attendancedistData.filter(function (a) {
              return parseInt(a.Year) == _this4.yearId;
            });
          }
        }, {
          key: "selectmonth",
          value: function selectmonth(event) {
            var _this5 = this;

            this.dataList = [];
            this.hideData = true;
            this.monthId = event.target.value;
            var url = 'https://d1wpyxz35bzzz4.cloudfront.net/rp_daily_status_dist_id_' + this.districtId + '.json';
            this.http.get(url).subscribe(function (data) {
              // Merge the columns and values
              _this5.dataList = data.values.map(function (row) {
                var obj = {};
                data.columns.forEach(function (column, index) {
                  obj[column] = row[index];
                });
                return obj;
              });

              if (_this5.dataList.length > 0) {
                _this5.yearFilt = _this5.dataList.filter(function (a) {
                  return a.VisitYear == _this5.yearId;
                });
                _this5.showData = _this5.yearFilt.filter(function (a) {
                  return a.VisitMonth == _this5.monthId;
                });
                _this5.attendancemonth = _this5.attendanceyearData.filter(function (a) {
                  return parseInt(a.Month) == _this5.monthId;
                });

                _this5.showData.forEach(function (element) {
                  element.user_id = element.UserID;
                });

                for (var i = 0; i < _this5.showData.length; i++) {
                  for (var j = 0; j < _this5.attendancemonth.length; j++) {
                    if (_this5.showData[i].user_id == parseInt(_this5.attendancemonth[j].user_id) && _this5.showData[i].VisitingDate == _this5.attendancemonth[j].leave_date) {
                      _this5.showData[i].VisitingStatus = 'absent';
                    }
                  }
                }

                _this5.teacherList = _this5.showData.filter(function (value, index, self) {
                  return index === self.findIndex(function (t) {
                    return t["UserID"] === value["UserID"];
                  });
                });
                console.log(_this5.teacherList);

                var uniqueData = _this5.showData.filter(function (value, index, self) {
                  return index === self.findIndex(function (t) {
                    return t["VisitingDate"] === value["VisitingDate"];
                  });
                }); //total working days


                _this5.totWrkDays = uniqueData.length; // Step 2: Count occurrences of each "User ID" and their respective "Visiting Status"

                var statusCountByUser = _this5.showData.reduce(function (acc, item) {
                  var userId = item["UserID"];
                  var status = item["VisitingStatus"];

                  if (!acc[userId]) {
                    acc[userId] = {};
                  } // Count the occurrences of each "Visiting Status" for the given "User ID"


                  acc[userId][status] = (acc[userId][status] || 0) + 1;
                  return acc;
                }, []);

                _this5.userStatus = statusCountByUser;

                if (_this5.totWrkDays && _this5.userStatus) {
                  // Transforming the object to an array format
                  var statusArray = Object.keys(statusCountByUser).map(function (userId) {
                    return Object.assign({
                      "UserID": parseInt(userId)
                    }, statusCountByUser[userId] // Spread the status counts (Not Visited, Visited)
                    );
                  });
                  console.log(_this5.teacherList, statusArray, _this5.attendancemonth);

                  _this5.teacherList.forEach(function (element) {
                    element.absent = 0, element.visit = 0, element.notVisit = 0;
                  });

                  for (var _i = 0; _i < _this5.teacherList.length; _i++) {
                    for (var _j = 0; _j < statusArray.length; _j++) {
                      if (_this5.teacherList[_i].UserID == statusArray[_j].UserID) {
                        _this5.teacherList[_i].visit = statusArray[_j].Visited > 0 ? statusArray[_j].Visited : 0;
                        _this5.teacherList[_i].notVisit = statusArray[_j].NotVisited > 0 ? statusArray[_j].NotVisited : 0;
                        _this5.teacherList[_i].absent = statusArray[_j].absent > 0 ? statusArray[_j].absent : 0;
                      }
                    }
                  }

                  console.log(_this5.attendancemonth); // const statusCountByUser1 = this.attendancemonth.reduce((acc, item) => {
                  //   const userId = item["user_id"];
                  //   const status = "absent";
                  //     if (!acc[userId]) {
                  //       acc[userId] = {};
                  //     }
                  //     // Count the occurrences of each "Visiting Status" for the given "User ID"
                  //     acc[userId][status] = (acc[userId][status] || 0) + 1;
                  //     return acc;
                  //   }, []);
                  // console.log(statusCountByUser1)
                  // // Transforming the object to an array format
                  // const statusArray1 = Object.keys(statusCountByUser1).map(userId => ({
                  //   "UserID": parseInt(userId),  // Ensures User ID is an integer
                  //   ...statusCountByUser1[userId]  // Spread the status counts (Not Visited, Visited)
                  // }));
                  // console.log(statusArray1);
                  // for(let i=0;i<this.teacherList.length;i++){
                  //   for(let j=0;j<statusArray1.length;j++){
                  //     if(this.teacherList[i].UserID == statusArray1[j].UserID){
                  //       this.teacherList[i].absent = statusArray1[j].absent
                  //     }
                  //   }
                  // }

                  console.log(_this5.teacherList);
                }
              }
            });
          }
        }, {
          key: "check",
          value: function check(val) {
            var _this6 = this;

            this.individualData = this.showData.filter(function (a) {
              return a.UserID == val.UserID;
            });
            this.hideData = false;
            this.userName = val.Name;
            this.userId = val.UserID;
            this.individualData.sort(function (a, b) {
              if (a.VisitingDate < b.VisitingDate) return -1;
              if (a.VisitingDate > b.VisitingDate) return 1;
              return 0;
            });

            var _loop = function _loop(i) {
              _this6.attendancemonth.forEach(function (element, y) {
                if (_this6.individualData[i].UserID == parseInt(_this6.attendancemonth[y].user_id) && _this6.individualData[i].VisitingDate == _this6.attendancemonth[y].leave_date) {
                  _this6.individualData[i].VisitingStatus = 'Absent';
                }
              });
            };

            for (var i = 0; i < this.individualData.length; i++) {
              _loop(i);
            }

            console.log(this.individualData, this.attendancemonth);
          }
        }]);
      }();

      _SummaryAttendancePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_5__.UserSessionService
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }];
      };

      _SummaryAttendancePage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-summary-attendance',
        template: _raw_loader_summary_attendance_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_summary_attendance_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SummaryAttendancePage);
      /***/
    },

    /***/
    57485:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.page.scss ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-pg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n}\n\n.header-pg1 {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 3px;\n}\n\n.title-icon {\n  margin-top: 3%;\n  font-size: 10px;\n  margin-left: 3px;\n}\n\n.arrow-icon {\n  margin-top: 2%;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n\n.selectitem {\n  border: 1px solid #707070;\n  color: #707070;\n}\n\n.coluitem {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 2%;\n}\n\n.coluitem1 {\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 5%;\n}\n\n.valid-clr {\n  color: #950909;\n}\n\nion-label {\n  color: #8b4ecf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnktYXR0ZW5kYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2RUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0U7RUFDRSw2RUFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkU7RUFDRSxjQUFBO0FBS0o7O0FBSEU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQRTtFQUNFLGNBQUE7QUFVSjs7QUFSRTtFQUNFLGNBQUE7QUFXSiIsImZpbGUiOiJzdW1tYXJ5LWF0dGVuZGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1wZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyZC1zdGVtLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuICAuaGVhZGVyLXBnMXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY2FyZC1zdGVtLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcbiAgLnRpdGxlLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICAuYXJyb3ctaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I4NTdmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSBcclxuICAuc2VsZWN0aXRlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgfVxyXG4gIC5jb2x1aXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgfVxyXG4gIC5jb2x1aXRlbTEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gIH1cclxuICAudmFsaWQtY2xye1xyXG4gICAgY29sb3I6ICM5NTA5MDk7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzhiNGVjZjtcclxuICB9Il19 */";
      /***/
    },

    /***/
    57806:
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/stem-dashboard/summary-attendance/summary-attendance.page.html ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n\r\n<ion-header class=\"header-pg\">\r\n  <div class=\"mb-4\">\r\n    <ion-buttons slot=\"start\" class=\"back-icon\">\r\n      <ion-icon class=\"arrow-icon\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n      <ion-title class=\"title-icon\">Attendance Summary</ion-title>\r\n    </ion-buttons>\r\n  </div>\r\n\r\n  <ion-card class=\"mt-2\" *ngIf=\"hideData\">\r\n    <ion-row class=\"middle-text\">\r\n      <ion-col size=\"12\">\r\n        <ion-item mode=\"md\" fill=\"outline\" style=\"text-align: center;\">\r\n          <ion-select multiple=\"false\" [(ngModel)]=\"this.districtId\" (ionChange)=\"selectdistrict($event)\" placeholder=\"Select District\" [interfaceOptions]=\"{header:'Select option'}\">\r\n            <ion-select-option *ngFor=\"let option of finalDist\" [value]=\"option.value\" >{{ option.label }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"mt-2\" *ngIf=\"hideData\">\r\n    <ion-row class=\"middle-text\">\r\n      <ion-col size=\"6\">\r\n        <ion-item mode=\"md\" fill=\"outline\">\r\n          <ion-select multiple=\"false\" [(ngModel)]=\"this.yearId\" (ionChange)=\"selectyear($event)\" placeholder=\"Select Year\" [interfaceOptions]=\"{header:'Select option'}\">\r\n            <ion-select-option *ngFor=\"let option of yearList\" [value]=\"option.value\" >{{ option.label }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-item mode=\"md\" fill=\"outline\">\r\n          <ion-select multiple=\"false\" [(ngModel)]=\"this.monthId\" (ionChange)=\"selectmonth($event)\" placeholder=\"Select Month\" [interfaceOptions]=\"{header:'Select option'}\">\r\n            <ion-select-option *ngFor=\"let option of monthList\" [value]=\"option.value\" >{{ option.label }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-header>\r\n\r\n<ion-content class=\"header-pg\" *ngIf=\"teacherList && hideData\">\r\n  <div style=\"padding: 10PX;\" class=\"header-pg1\">\r\n    <ion-row class=\"Div_table\" style=\"border :1px solid #f4f4f4;margin-top:10px\">\r\n      <ion-col size=\"4\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n           <b>Name</b>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Days</b>\r\n       </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Visited</b>\r\n       </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Not Visited</b>\r\n       </div>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Absent</b>\r\n       </div>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n\r\n    <ion-row class=\"Div_table1\" style=\"border :1px solid #f4f4f4;align-self: center;\" *ngFor=\"let data of teacherList\">\r\n      <ion-col size=\"4\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;\" (click)=\"check(data)\">\r\n          {{data.Name}} {{data.UserID}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{totWrkDays}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{data.visit}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{data.notVisit}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"2\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\" (click)=\"check(data)\">\r\n          {{data.absent}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"teacherList.length == 0\">\r\n      <ion-col size=\"12\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          No Data Found\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-content class=\"header-pg\" *ngIf=\"!hideData\">\r\n  <div style=\"padding: 10PX;\" class=\"header-pg1\">\r\n    <ion-row class=\"Div_table\" style=\"border :1px solid #f4f4f4;margin-top:10px\">\r\n      <ion-col size=\"12\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n           <b>{{userName}} - {{userId}}</b>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"Div_table\" style=\"border :1px solid #f4f4f4;margin-top:10px\">\r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n           <b>Date</b>\r\n        </div>\r\n      </ion-col>\r\n      \r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          <b>Status</b>\r\n       </div>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n\r\n    <ion-row class=\"Div_table1\" style=\"border :1px solid #f4f4f4;align-self: center;\" *ngFor=\"let data of individualData\">\r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;\">\r\n          {{data.VisitingDate | date :  \"dd-MM-y\"}}\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"6\" class=\"Div_box\">\r\n        <div style=\"align-self: center;color: white;text-align: center;text-align: center;\">\r\n          {{data.VisitingStatus}}\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_stem-dashboard_summary-attendance_summary-attendance_module_ts-es5.js.map