(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_profile_settings_settings_module_ts"], {
    /***/
    14353:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/leave/profile/settings/settings-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageRoutingModule": function SettingsPageRoutingModule() {
          return (
            /* binding */
            _SettingsPageRoutingModule
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.page */
      94253);

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
      }];

      var _SettingsPageRoutingModule = /*#__PURE__*/_createClass(function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      });

      _SettingsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SettingsPageRoutingModule);
      /***/
    },

    /***/
    53872:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/leave/profile/settings/settings.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageModule": function SettingsPageModule() {
          return (
            /* binding */
            _SettingsPageModule
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings-routing.module */
      14353);
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page */
      94253);

      var _SettingsPageModule = /*#__PURE__*/_createClass(function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      });

      _SettingsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
      })], _SettingsPageModule);
      /***/
    },

    /***/
    94253:
    /*!***************************************************************!*\
      !*** ./src/app/pages/leave/profile/settings/settings.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPage": function SettingsPage() {
          return (
            /* binding */
            _SettingsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./settings.page.html */
      95083);
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page.scss */
      38537);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/sqlite/sqlitedatabase.service */
      48167);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(router, nav, sqliteDB, usersessionService, alert) {
          _classCallCheck(this, SettingsPage);

          this.router = router;
          this.nav = nav;
          this.sqliteDB = sqliteDB;
          this.usersessionService = usersessionService;
          this.alert = alert;
          this.sessionTeacherId = this.usersessionService.teacher_id();
        }

        return _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} //navigate to profile page

        }, {
          key: "getTchrinfo",
          value: function getTchrinfo(data) {
            this.router.navigate(['/tabs/myprofile'], {
              queryParams: {
                "export": data
              }
            });
          } //Refresh All Details

        }, {
          key: "refreshAllList",
          value: function refreshAllList() {
            this.refreshPersonalInfoList();
            this.refreshAcadamicInfoList();
            this.refreshJoiningInfoList();
            this.refreshTeachrContactList();
            this.refreshMainSubTrainingList();
            this.refreshTechrTrainingList();
            this.refreshBankDetList();
            this.alert.success("Data Refreshed");
          } //Delete Existing Teacher Personal Info from local DB

        }, {
          key: "refreshPersonalInfoList",
          value: function refreshPersonalInfoList() {
            var query = "DELETE FROM TchrPersonalDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {});
          } //Delete Existing Teacher Academic Info from local DB

        }, {
          key: "refreshAcadamicInfoList",
          value: function refreshAcadamicInfoList() {
            var query = "DELETE FROM TchrAcadamicDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {});
          } //Delete Existing Teacher Joining Details from local DB

        }, {
          key: "refreshJoiningInfoList",
          value: function refreshJoiningInfoList() {
            var query = "DELETE FROM TchrJoiningDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {});
          } //Delete Existing Teacher Contact Details from local DB

        }, {
          key: "refreshTeachrContactList",
          value: function refreshTeachrContactList() {
            var query = "DELETE FROM TchrContactDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {});
          } //Delete Existing Teacher Training Details from local DB

        }, {
          key: "refreshTechrTrainingList",
          value: function refreshTechrTrainingList() {
            var query = "DELETE FROM TchrTrainingDetailsDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {});
          } //Delete Existing Teacher Subject Details from local DB  

        }, {
          key: "refreshMainSubTrainingList",
          value: function refreshMainSubTrainingList() {
            var query = "DELETE FROM TchrMainSubDetailDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {});
          } //Delete Existing Teacher Bank Details from local DB 

        }, {
          key: "refreshBankDetList",
          value: function refreshBankDetList() {
            var query = "DELETE FROM TchrBankDetDb";
            return this.sqliteDB.getDataLocalDB(query).then(function (data) {
              if (data.rowsAffected > 0) {}
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/tabs/e-sr']);
          }
        }]);
      }();

      _SettingsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_app_services_sqlite_sqlitedatabase_service__WEBPACK_IMPORTED_MODULE_3__.SqlitedatabaseService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _SettingsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SettingsPage);
      /***/
    },

    /***/
    38537:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/leave/profile/settings/settings.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\n.label-cls {\n  font-size: 15px;\n  align-self: center;\n}\n\n.user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\n.iconCls {\n  zoom: 1.7;\n  color: #630094;\n  padding-top: 3%;\n  text-align: end;\n}\n\nion-card {\n  border-radius: 10px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.back-button {\n  color: white;\n  font-size: 25px;\n  margin-left: 0px;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTEwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubGFiZWwtY2xzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi51c2VyLWljb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaWNvbkNscyB7XHJcbiAgem9vbTogMS43O1xyXG4gIGNvbG9yOiAjNjMwMDk0O1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5iYWNrLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    95083:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/profile/settings/settings.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">My Profile</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\" class=\"back-button\" (click)=\"refreshAllList()\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"refresh-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <div class=\"leave-container\">\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <img src=\"./../../../../../../assets/icons/leave/Personal info Profile.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"label-cls\" (click)=\"getTchrinfo(1)\">\r\n          <ion-label>Personal Information</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCls\" (click)=\"getTchrinfo(1)\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <img src=\"./../../../../../../assets/icons/leave/Acadamic qualification.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"label-cls\" (click)=\"getTchrinfo(2)\">\r\n          <ion-label>Acadamic Qualification</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCls\" (click)=\"getTchrinfo(2)\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <img src=\"./../../../../../../assets/icons/leave/Joining details.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"label-cls\" (click)=\"getTchrinfo(3)\">\r\n          <ion-label>Joining Details</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCls\" (click)=\"getTchrinfo(3)\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <img src=\"./../../../../../../assets/icons/leave/Communication icon.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"label-cls\" (click)=\"getTchrinfo(4)\">\r\n          <ion-label>Communication Details</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCls\" (click)=\"getTchrinfo(4)\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <img src=\"./../../../../../../assets/icons/leave/Training details.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"label-cls\" (click)=\"getTchrinfo(5)\">\r\n          <ion-label>Training Details</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCls\" (click)=\"getTchrinfo(5)\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <img src=\"./../../../../../../assets/icons/leave/Main subject taught.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"label-cls\" (click)=\"getTchrinfo(6)\">\r\n          <ion-label>Main subjects Taught</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCls\" (click)=\"getTchrinfo(6)\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n          <img src=\"./../../../../../../assets/icons/leave/Bank details.svg\">\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"label-cls\" (click)=\"getTchrinfo(7)\">\r\n          <ion-label>Bank Details</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"iconCls\" (click)=\"getTchrinfo(7)\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_leave_profile_settings_settings_module_ts-es5.js.map