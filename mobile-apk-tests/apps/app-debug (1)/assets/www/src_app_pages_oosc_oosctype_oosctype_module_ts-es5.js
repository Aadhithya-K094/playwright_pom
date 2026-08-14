(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_oosc_oosctype_oosctype_module_ts"], {
    /***/
    26497:
    /*!********************************************************!*\
      !*** ./src/app/pages/oosc/oosctype/oosctype.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OosctypePageModule": function OosctypePageModule() {
          return (
            /* binding */
            _OosctypePageModule
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _oosctype_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./oosctype.page */
      63902);

      var routes = [{
        path: '',
        component: _oosctype_page__WEBPACK_IMPORTED_MODULE_0__.OosctypePage
      }];

      var _OosctypePageModule = /*#__PURE__*/_createClass(function OosctypePageModule() {
        _classCallCheck(this, OosctypePageModule);
      });

      _OosctypePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        declarations: [_oosctype_page__WEBPACK_IMPORTED_MODULE_0__.OosctypePage]
      })], _OosctypePageModule);
      /***/
    },

    /***/
    63902:
    /*!******************************************************!*\
      !*** ./src/app/pages/oosc/oosctype/oosctype.page.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OosctypePage": function OosctypePage() {
          return (
            /* binding */
            _OosctypePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_oosctype_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./oosctype.page.html */
      82077);
      /* harmony import */


      var _oosctype_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./oosctype.page.scss */
      59323);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/user.service */
      92275);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _OosctypePage = /*#__PURE__*/function () {
        function OosctypePage(router, userService, sqliteDB, userSessionService, alertService, http, alertController) {
          _classCallCheck(this, OosctypePage);

          this.router = router;
          this.userService = userService;
          this.sqliteDB = sqliteDB;
          this.userSessionService = userSessionService;
          this.alertService = alertService;
          this.http = http;
          this.alertController = alertController;
        }

        return _createClass(OosctypePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getInchargeList();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.teacher_id = this.userSessionService.teacher_id();
            this.getInchargeList();
            this.getUserDetails();
            this.checkCountryLocalDB();
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this = this;

            this.userService.getOoscUserDetails(this.teacher_id).subscribe(function (res) {
              console.log("getOoscUserDetails", res);

              if (res.dataStatus == true) {
                var getOoscUserDetails = res.result;

                if (getOoscUserDetails.length > 0) {
                  _this.distId = getOoscUserDetails[0].district_id;
                }
              } else {
                _this.alertService.error("Something went wrong");
              }
            });
          }
        }, {
          key: "getInchargeList",
          value: function getInchargeList() {
            this.inchargeCategoryList = [{
              id: '1',
              incharge: 'OOSC Survey',
              image: 'assets/icons/oosc/CommonPoolStudent.svg',
              // url: '/tabs/ooscnewsurvey'
              url: '/tabs/ooscsurvey'
            }, // {
            //   id: '3',
            //   incharge: 'Potential Dropout List',
            //   image: 'assets/images/dashboard/RBSK.png',
            //   url:'/tabs/ooscsurvey'
            // },
            {
              id: '2',
              incharge: 'Never enrolled student / Migrant students outside common pool',
              image: 'assets/icons/oosc/NeverEntrolledStudents.svg',
              url: '/tabs/never-enrollment-stu-list'
            } // {
            //   id: '4',
            //   incharge: 'Other District Students',
            //   image: 'assets/icons/oosc/OtherDistrictStudent.svg',
            //   url:'/tabs/other-district-survey'
            // },
            // {
            //   id: '5',
            //   incharge: 'Survey By Academic Year',
            //   image: 'assets/icons/oosc/StudentSurveyByMe.svg',
            //   url:'/tabs/survey-by-me'
            // }
            ];
          }
        }, {
          key: "goToInchargeTeacherList",
          value: function goToInchargeTeacherList(item) {
            console.log('oooo', item);

            if (item.id == 3) {
              this.router.navigate([item.url], {
                queryParams: {
                  'distId': this.distId,
                  'Id': 1,
                  'page': 1,
                  'active': 1
                },
                skipLocationChange: false
              });
            }

            if (item.id == 4) {
              this.router.navigate([item.url], {
                queryParams: {
                  'distId': this.distId,
                  'Id': 4,
                  'page': 1,
                  'active': 1
                },
                skipLocationChange: false
              });
            } else {
              this.router.navigate([item.url], {
                queryParams: {
                  'distId': this.distId,
                  'Id': item.id,
                  'page': 1
                },
                skipLocationChange: false
              }); // this.router.navigate([item.url], { queryParams: { 'distId': this.distId, 'Id': item.id, 'page': 1 }, skipLocationChange: false });
            }
          }
        }, {
          key: "checkCountryLocalDB",
          value: function checkCountryLocalDB() {
            var _this2 = this;

            console.log('checkCountryLocalDB'); // this.masterCountryList = [];

            var query = 'SELECT * FROM allCountryDetails';
            return this.sqliteDB.getDataLocalDB(query).then(function (country) {
              if (country.rows.length > 0) {
                console.log('inside row checkCountryLocalDB');

                _this2.checkStateLocalDB();
              } else {
                console.log('inside else checkCountryLocalDB');

                _this2.getOOSCMasterDetailsJson();
              }
            });
          }
        }, {
          key: "checkStateLocalDB",
          value: function checkStateLocalDB() {
            var _this3 = this;

            var statequery = 'SELECT * FROM allStateDetails';
            return this.sqliteDB.getDataLocalDB(statequery).then(function (state) {
              if (state.rows.length == 0) {
                _this3.checkDistrictLocalDB();
              } else {
                // if (this.totalStates?.length == 0) {
                _this3.getOOSCMasterDetailsJson(); // }

              }
            });
          }
        }, {
          key: "checkDistrictLocalDB",
          value: function checkDistrictLocalDB() {
            var _this4 = this;

            // this.masterDistrictList = [];
            var districtquery = 'SELECT * FROM allDistrictDetails';
            return this.sqliteDB.getDataLocalDB(districtquery).then(function (district) {
              if (district.rows.length == 0) {
                _this4.getOOSCMasterDetailsJson();
              }
            });
          }
        }, {
          key: "getOOSCMasterDetailsJson",
          value: function getOOSCMasterDetailsJson() {
            var _this5 = this;

            console.log('getOOSCMasterDetailsJson');
            var json_name = 'https://d1wpyxz35bzzz4.cloudfront.net/osc_detail_master_country.json';
            this.http.get(json_name).subscribe(function (data) {
              if (data) {
                _this5.totalCountries = data.country;
                _this5.totalStates = data.state;
                _this5.totalDistricts = data.district;

                _this5.getCountryList(_this5.totalCountries);

                _this5.getStateList(_this5.totalStates);

                _this5.dropdownList(_this5.totalDistricts);
              }
            });
          }
        }, {
          key: "getCountryList",
          value: function getCountryList(countryData) {
            var _this6 = this;

            console.log('getCountryList');

            if (this.totalCountries.length > 0) {
              var countrydeleteQuery = 'DELETE FROM allCountryDetails';
              return this.sqliteDB.getDataLocalDB(countrydeleteQuery).then(function (data) {
                var sqlArray = [];
                countryData.forEach(function (element) {
                  sqlArray.push(['INSERT INTO allCountryDetails VALUES (?,?,?,?)', [null, element.id, element.country_code, element.country_name]]);
                });

                _this6.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {// this.checkCountryLocalDB();
                });
              });
            }
          }
        }, {
          key: "getStateList",
          value: function getStateList(stateData) {
            var _this7 = this;

            console.log('getStateList');

            if (stateData.length > 0) {
              var statedeleteQuery = 'DELETE FROM allStateDetails';
              return this.sqliteDB.getDataLocalDB(statedeleteQuery).then(function (data) {
                var sqlArray = [];
                stateData.forEach(function (element) {
                  sqlArray.push(['INSERT INTO allStateDetails VALUES (?,?,?,?)', [null, element.id, element.state_code, element.state_name]]);
                });

                _this7.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {// this.checkStateLocalDB();
                });
              });
            }
          }
        }, {
          key: "dropdownList",
          value: function dropdownList(distdata) {
            var _this8 = this;

            console.log('dropdownList');

            if (distdata.length > 0) {
              var distDeleteQuery = 'DELETE FROM allDistrictDetails';
              return this.sqliteDB.getDataLocalDB(distDeleteQuery).then(function (data) {
                var sqlArray = [];
                distdata.forEach(function (element) {
                  sqlArray.push(['INSERT INTO allDistrictDetails VALUES (?,?,?,?)', [null, element.disid, element.district_name, element.district_name_tamil]]);
                });

                _this8.sqliteDB.bulkInsert(sqlArray).then(function (insertres) {});
              });
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/home']);
          }
        }]);
      }();

      _OosctypePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
        }, {
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_5__.SqlitedatabaseService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }];
      };

      _OosctypePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-oosctype',
        template: _raw_loader_oosctype_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_oosctype_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _OosctypePage);
      /***/
    },

    /***/
    59323:
    /*!********************************************************!*\
      !*** ./src/app/pages/oosc/oosctype/oosctype.page.scss ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".square-containers {\n  padding: 10px;\n}\n\n.square {\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.square-containers .square .content {\n  width: 98%;\n  height: calc(100% - 16px);\n  color: white;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.square-containers .square .content .labeltext {\n  font-size: 22px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.square-containers .square .content p {\n  color: #fff;\n  padding: 2px;\n}\n\n.absent-container {\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  padding: 10px 5px;\n}\n\n.absent-container .square .content {\n  width: 98%;\n  color: white;\n  display: flex;\n  justify-content: center;\n  padding-top: 5px;\n}\n\n.absent-container .square .content .labeltextbold {\n  font-size: 16px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.absent-container .square .content .labeltext {\n  font-size: 16px;\n  text-align: center;\n}\n\n.absent-container .square .content p {\n  color: #000;\n  padding: 2px;\n}\n\n.card-menu {\n  height: 135px;\n  text-align: center;\n  margin: auto;\n}\n\n.mainDiv {\n  background-color: #79cbfa;\n  height: 100%;\n  justify-content: space-evenly;\n}\n\n.subDiv {\n  height: 60%;\n  justify-content: space-between;\n}\n\n.backgroundImg {\n  width: 100%;\n  margin-left: 70px;\n}\n\n.user-icon {\n  padding-top: 1px;\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9vc2N0eXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFERiIsImZpbGUiOiJvb3NjdHlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3F1YXJlLWNvbnRhaW5lcnMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3F1YXJlLWNvbnRhaW5lcnMgLnNxdWFyZSAuY29udGVudCB7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNxdWFyZS1jb250YWluZXJzIC5zcXVhcmUgLmNvbnRlbnQgLmxhYmVsdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3F1YXJlLWNvbnRhaW5lcnMgLnNxdWFyZSAuY29udGVudCBwIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5hYnNlbnQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG5cclxufVxyXG5cclxuLmFic2VudC1jb250YWluZXIgLnNxdWFyZSAuY29udGVudCB7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxufVxyXG5cclxuLmFic2VudC1jb250YWluZXIgLnNxdWFyZSAuY29udGVudCAubGFiZWx0ZXh0Ym9sZCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWJzZW50LWNvbnRhaW5lciAuc3F1YXJlIC5jb250ZW50IC5sYWJlbHRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYnNlbnQtY29udGFpbmVyIC5zcXVhcmUgLmNvbnRlbnQgcCB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uY2FyZC1tZW51IHtcclxuICBoZWlnaHQ6IDEzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAyMDMsIDI1MCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uc3ViRGl2IHtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kSW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxufVxyXG5cclxuLnVzZXItaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
      /***/
    },

    /***/
    82077:
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oosc/oosctype/oosctype.page.html ***!
      \**********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar class=\"toolbar\">\r\n    <ion-buttons slot=\"start\" class=\"back-iconNew\" (click)=\"goBack()\">\r\n      <ion-icon name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Dashboard</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{teacher_id}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content padding class=\"graybackgrond\">\r\n  <div class=\"subDiv\">\r\n    <ion-row class=\"square-containers\">\r\n      <ion-col size=\"6\" *ngFor=\"let item of inchargeCategoryList\">\r\n        <ion-card class=\"card-menu\" (click)=\"goToInchargeTeacherList(item)\">\r\n          <div class=\"ion-margin-top ion-margin-bottom\" style=\"padding-left: 5px;\r\n      padding-right: 5px;\">\r\n            <img src=\"{{item.image}}\"><br />\r\n            <span style=\"font-weight: 500;\">{{item.incharge}}</span>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_oosc_oosctype_oosctype_module_ts-es5.js.map