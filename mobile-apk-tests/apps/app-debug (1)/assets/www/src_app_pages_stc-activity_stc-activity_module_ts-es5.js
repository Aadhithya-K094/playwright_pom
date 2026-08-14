(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stc-activity_stc-activity_module_ts"], {
    /***/
    50913:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-activity-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StcActivityPageRoutingModule": function StcActivityPageRoutingModule() {
          return (
            /* binding */
            _StcActivityPageRoutingModule
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


      var _stc_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stc-activity.page */
      33235);

      var routes = [{
        path: '',
        component: _stc_activity_page__WEBPACK_IMPORTED_MODULE_0__.StcActivityPage
      }];

      var _StcActivityPageRoutingModule = /*#__PURE__*/_createClass(function StcActivityPageRoutingModule() {
        _classCallCheck(this, StcActivityPageRoutingModule);
      });

      _StcActivityPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _StcActivityPageRoutingModule);
      /***/
    },

    /***/
    953:
    /*!***********************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-activity.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StcActivityPageModule": function StcActivityPageModule() {
          return (
            /* binding */
            _StcActivityPageModule
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


      var _stc_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stc-activity-routing.module */
      50913);
      /* harmony import */


      var _stc_activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stc-activity.page */
      33235);

      var _StcActivityPageModule = /*#__PURE__*/_createClass(function StcActivityPageModule() {
        _classCallCheck(this, StcActivityPageModule);
      });

      _StcActivityPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _stc_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.StcActivityPageRoutingModule],
        declarations: [_stc_activity_page__WEBPACK_IMPORTED_MODULE_1__.StcActivityPage]
      })], _StcActivityPageModule);
      /***/
    },

    /***/
    33235:
    /*!*********************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-activity.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StcActivityPage": function StcActivityPage() {
          return (
            /* binding */
            _StcActivityPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_stc_activity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./stc-activity.page.html */
      70044);
      /* harmony import */


      var _stc_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stc-activity.page.scss */
      56182);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/ionic-storage/ionic-storage.service */
      81085);
      /* harmony import */


      var src_app_services_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/json.service */
      77232);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);

      var _StcActivityPage = /*#__PURE__*/function () {
        function StcActivityPage(router, jsonService, route, sqlLite, ionStorage) {
          _classCallCheck(this, StcActivityPage);

          this.router = router;
          this.jsonService = jsonService;
          this.route = route;
          this.sqlLite = sqlLite;
          this.ionStorage = ionStorage;
          this.airArray = [];
          this.schoolList = [];
          this.districtList = [];
          this.blockList = [];
        }

        return _createClass(StcActivityPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.getSchoolList();
            this.getDistBlk();
            this.getStateList();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              _this.Type = params['Type'];
              _this.airArray = [];

              if (_this.Type == 1) {
                _this.airArray.push({
                  icon: "assets/icon/EV_Profile.svg",
                  name: "Center Name",
                  url: "/tabs/center-details"
                }, {
                  icon: "assets/icon/Center_Profile.svg",
                  name: "Staff Details",
                  url: "/tabs/stc-staff-details"
                }, {
                  icon: "assets/icon/Student_Profile.svg",
                  name: "Student Details",
                  url: "/tabs/stc-student-details"
                });
              }

              if (_this.Type == 2) {
                _this.airArray.push({
                  icon: "assets/icon/EV_Profile.svg",
                  name: "Special Training Centre details ",
                  url: "/tabs/center-details"
                }, {
                  icon: "assets/icon/Center_Profile.svg",
                  name: "Staff Details",
                  url: "/tabs/stc-staff-details"
                }, {
                  icon: "assets/icon/Student_Profile.svg",
                  name: "Student Details",
                  url: "/tabs/stc-student-details"
                });
              }
            });
          }
        }, {
          key: "goToMenu",
          value: function goToMenu(item) {
            this.router.navigate([item.url], {
              queryParams: {
                Type: this.Type
              }
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            this.router.navigate(['/tabs/stc-dashboard'], {
              queryParams: {
                Type: this.Type
              }
            });
          }
        }, {
          key: "getSchoolList",
          value: function getSchoolList() {
            var _this2 = this;

            this.ionStorage.getData('schoolList').then(function (res) {
              if (res) {} else {
                _this2.jsonService.schoolList().subscribe(function (res) {
                  if (res) {
                    _this2.schoolList = [];
                    _this2.schoolList = res[0];

                    _this2.ionStorage.removeKey('schoolList').then(function (res) {
                      _this2.ionStorage.insertData_Replace('schoolList', _this2.schoolList);
                    });

                    _this2.schoolList.forEach(function (res) {
                      if (_this2.districtList.length > 0) {
                        var len = _this2.districtList.filter(function (val) {
                          return val.district_id == res.district_id;
                        });

                        if (len.length > 0) {} else {
                          _this2.districtList.push({
                            'district_id': res.district_id,
                            'district_name': res.district_name
                          });
                        }
                      } else {
                        _this2.districtList.push({
                          'district_id': res.district_id,
                          'district_name': res.district_name
                        });
                      }
                    });

                    _this2.schoolList.forEach(function (res) {
                      if (_this2.blockList.length > 0) {
                        var len = _this2.blockList.filter(function (val) {
                          return val.block_id == res.block_id;
                        });

                        if (len.length > 0) {} else {
                          _this2.blockList.push({
                            'block_id': res.block_id,
                            block_name: res.block_name.toUpperCase(),
                            'district_id': res.district_id,
                            'district_name': res.district_name
                          });
                        }
                      } else {
                        _this2.blockList.push({
                          'block_id': res.block_id,
                          block_name: res.block_name.toUpperCase(),
                          'district_id': res.district_id,
                          'district_name': res.district_name
                        });
                      }
                    });

                    _this2.ionStorage.removeKey('districtList').then(function (res) {
                      _this2.ionStorage.insertData_Replace('districtList', _this2.districtList);
                    });

                    _this2.ionStorage.removeKey('blockList').then(function (res) {
                      _this2.ionStorage.insertData_Replace('blockList', _this2.blockList);
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "getDistBlk",
          value: function getDistBlk() {
            var _this3 = this;

            this.ionStorage.getData('blockList').then(function (res) {
              if (res) {} else {
                _this3.jsonService.DistBlkList().subscribe(function (res) {
                  if (res) {
                    _this3.blockList = res[0].schoolnew_dist;

                    _this3.ionStorage.removeKey('blockList').then(function (res) {
                      _this3.ionStorage.insertData_Replace('blockList', _this3.blockList);
                    });

                    _this3.blockList.forEach(function (res) {
                      if (_this3.districtList.length > 0) {
                        var len = _this3.districtList.filter(function (val) {
                          return val.district_id == res.District_id;
                        });

                        if (len.length > 0) {} else {
                          _this3.districtList.push({
                            'district_id': res.District_id,
                            'district_name': res.district_name
                          });
                        }
                      } else {
                        _this3.districtList.push({
                          'district_id': res.District_id,
                          'district_name': res.district_name
                        });
                      }
                    });

                    _this3.ionStorage.removeKey('districtList').then(function (res) {
                      _this3.ionStorage.insertData_Replace('districtList', _this3.districtList);
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "getStateList",
          value: function getStateList() {
            var _this4 = this;

            this.ionStorage.getData('stateList').then(function (res) {
              if (res) {} else {
                _this4.jsonService.StateList().subscribe(function (res) {
                  if (res) {
                    _this4.stateList = res[0].baseapp_state;
                    _this4.languageList = res[0].schoolnew_medium;

                    _this4.ionStorage.removeKey('stateList').then(function (res) {
                      _this4.ionStorage.insertData_Replace('stateList', _this4.stateList);
                    });

                    _this4.ionStorage.removeKey('languageList').then(function (res) {
                      _this4.ionStorage.insertData_Replace('languageList', _this4.languageList);
                    });
                  }
                });
              }
            });
          }
        }]);
      }();

      _StcActivityPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_json_service__WEBPACK_IMPORTED_MODULE_3__.JsonService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_4__.SqlitedatabaseService
        }, {
          type: src_app_services_ionic_storage_ionic_storage_service__WEBPACK_IMPORTED_MODULE_2__.IonicStorageService
        }];
      };

      _StcActivityPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-stc-activity',
        template: _raw_loader_stc_activity_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_stc_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _StcActivityPage);
      /***/
    },

    /***/
    56182:
    /*!***********************************************************!*\
      !*** ./src/app/pages/stc-activity/stc-activity.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-menu {\n  border: 1px solid #c7c7c7;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin: auto 10px;\n}\n\n.menu-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  padding: 0px;\n  margin: 10px auto;\n}\n\n.menuList {\n  margin: 5px;\n  border: 1px solid #BEBEBE;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.divList {\n  border: 1px solid #630094;\n  padding: 5px 10px;\n  border-radius: 50px;\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0Yy1hY3Rpdml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic3RjLWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctbWVudSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG59XHJcblxyXG4ubWVudS10ZXh0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi5tZW51TGlzdHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JFQkVCRTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZMaXN0e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYzMDA5NDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG59XHJcblxyXG4vLyAucm93LWhlYWR7XHJcbi8vICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2M3YzdjNztcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4vLyB9XHJcblxyXG4vLyAuYm9yZGVyQ3Nze1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2M3YzdjNztcclxuLy8gfSJdfQ== */";
      /***/
    },

    /***/
    70044:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stc-activity/stc-activity.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar >\r\n    <ion-buttons slot=\"start\" class=\"newback-icon\">\r\n      <ion-icon name=\"arrow-back\" (click)=\"navigateBack()\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n    <ion-title>{{Type == 1 ? 'Tamil Mozhi Karpom' : 'RSTC'}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row class=\"row-head\">\r\n    <ion-col *ngFor=\"let item of airArray; let i=index\" class=\"menuList\">\r\n      <ion-row (click)=\"goToMenu(item)\">\r\n        <div class=\"divList\">\r\n          <img src=\"{{item.icon}}\" style=\"margin: 10px auto;width: 44px;\r\n          height: 33px;\">\r\n        </div>\r\n        <ion-col size=\"12\" class=\"menu-text\">\r\n          <ion-label class=\"newsecondaryTex\">{{item.name}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stc-activity_stc-activity_module_ts-es5.js.map