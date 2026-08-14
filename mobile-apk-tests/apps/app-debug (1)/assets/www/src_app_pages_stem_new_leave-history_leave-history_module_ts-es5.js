(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_stem_new_leave-history_leave-history_module_ts"], {
    /***/
    85095:
    /*!******************************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-history/leave-history-routing.module.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveHistoryPageRoutingModule": function LeaveHistoryPageRoutingModule() {
          return (
            /* binding */
            _LeaveHistoryPageRoutingModule
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


      var _leave_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./leave-history.page */
      95294);

      var routes = [{
        path: '',
        component: _leave_history_page__WEBPACK_IMPORTED_MODULE_0__.LeaveHistoryPage
      }];

      var _LeaveHistoryPageRoutingModule = /*#__PURE__*/_createClass(function LeaveHistoryPageRoutingModule() {
        _classCallCheck(this, LeaveHistoryPageRoutingModule);
      });

      _LeaveHistoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LeaveHistoryPageRoutingModule);
      /***/
    },

    /***/
    70481:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-history/leave-history.module.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveHistoryPageModule": function LeaveHistoryPageModule() {
          return (
            /* binding */
            _LeaveHistoryPageModule
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


      var _leave_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./leave-history-routing.module */
      85095);
      /* harmony import */


      var _leave_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./leave-history.page */
      95294);

      var _LeaveHistoryPageModule = /*#__PURE__*/_createClass(function LeaveHistoryPageModule() {
        _classCallCheck(this, LeaveHistoryPageModule);
      });

      _LeaveHistoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _leave_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveHistoryPageRoutingModule],
        declarations: [_leave_history_page__WEBPACK_IMPORTED_MODULE_1__.LeaveHistoryPage]
      })], _LeaveHistoryPageModule);
      /***/
    },

    /***/
    95294:
    /*!********************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-history/leave-history.page.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveHistoryPage": function LeaveHistoryPage() {
          return (
            /* binding */
            _LeaveHistoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_leave_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./leave-history.page.html */
      39965);
      /* harmony import */


      var _leave_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./leave-history.page.scss */
      54860);
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


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _LeaveHistoryPage = /*#__PURE__*/function () {
        function LeaveHistoryPage(userService, usersessionService, router, route) {
          _classCallCheck(this, LeaveHistoryPage);

          this.userService = userService;
          this.usersessionService = usersessionService;
          this.router = router;
          this.route = route;
        }

        return _createClass(LeaveHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.username = this.usersessionService.emis_username();
            this.routeData = this.route.snapshot;
            this.userid = this.routeData.queryParams.userid;
            this.phone = this.routeData.queryParams.phone;
            this.name = this.routeData.queryParams.distric;

            if (this.userid) {
              this.username = this.userid;
            }

            this.getServerData();
          }
        }, {
          key: "getServerData",
          value: function getServerData() {
            var _this = this;

            this.history = [];
            this.userService.leavehistoryDetail(this.username).subscribe(function (response) {
              _this.history = response.result;
            });
          }
        }, {
          key: "navigateBack",
          value: function navigateBack() {
            if (this.userid) {
              this.router.navigate(['/tabs/leave-approval']);
            } else {
              this.router.navigate(['/tabs/leave-dashboard']);
            }
          }
        }]);
      }();

      _LeaveHistoryPage.ctorParameters = function () {
        return [{
          type: src_app_services_emis_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_3__.UserSessionService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }];
      };

      _LeaveHistoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-leave-history',
        template: _raw_loader_leave_history_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_leave_history_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LeaveHistoryPage);
      /***/
    },

    /***/
    54860:
    /*!**********************************************************************!*\
      !*** ./src/app/pages/stem_new/leave-history/leave-history.page.scss ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-pg {\n  background: url(\"/assets/images/card-stem.png\") no-repeat center center fixed;\n  background-size: 100% 100%;\n  height: 50%;\n}\n\n.back-icon {\n  color: white;\n  zoom: 2;\n  margin-left: 3px;\n}\n\n.title-icon {\n  margin-top: 3%;\n  font-size: 10px;\n  margin-left: 3px;\n}\n\n.arrow-icon {\n  margin-top: 2%;\n}\n\n.card-item {\n  border-radius: 50px;\n  border-top: 1px solid #b857ff;\n  background-color: #FFFFFF;\n  margin-top: 15%;\n  height: 100%;\n}\n\n.header {\n  color: #B357FF;\n  font-weight: bold;\n}\n\n.status1 {\n  background-color: #d6e9c0;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.status2 {\n  background-color: #eaacb2;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n\n.status3 {\n  background-color: #a0eab1;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLGNBQUE7QUFJSjs7QUFGRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFPSjs7QUFMRTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFORTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFTSiIsImZpbGUiOiJsZWF2ZS1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItcGd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhcmQtc3RlbS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuICAuYmFjay1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHpvb206Mi4wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcbiAgLnRpdGxlLWljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIH1cclxuICAuYXJyb3ctaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I4NTdmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5oZWFkZXIge1xyXG4gICAgY29sb3I6ICNCMzU3RkY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9IFxyXG4gIC5zdGF0dXMxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmU5YzA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIC5zdGF0dXMyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWFjYjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIC5zdGF0dXMzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGVhYjE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    39965:
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stem_new/leave-history/leave-history.page.html ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\r\n  <div class=\"header-pg\">\r\n  <ion-buttons slot=\"start\" class=\"back-icon\">\r\n    <ion-icon class=\"arrow-icon\" name=\"arrow-back\" (click)=\"navigateBack()\">\r\n    </ion-icon>\r\n    <ion-title class=\"title-icon\">Approved Status & History</ion-title>\r\n  </ion-buttons>\r\n\r\n  <ion-row class=\"card-item\">\r\n    <ion-col size=\"12\" *ngIf=\"userid\">\r\n      <ion-card style=\"color: white;background-color:#C758FF ;\">\r\n        <ion-row class=\"header\">\r\n          <ion-col size=\"4\" style=\"color: #FFE8B4;\">Resource ID</ion-col>\r\n          <ion-col size=\"4\" style=\"color: #FFE8B4;\">Name</ion-col>\r\n          <ion-col size=\"4\" style=\"color: #FFE8B4;\">Mobile</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"4\">{{userid}}</ion-col>\r\n          <ion-col size=\"4\">{{name}}</ion-col>\r\n          <ion-col size=\"4\">{{phone}}</ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size=\"12\">\r\n      <ion-card *ngFor=\"let item of history\">\r\n        <ion-row class=\"header\">\r\n          <ion-col size=\"3.5\">Status</ion-col>\r\n          <ion-col size=\"4.5\">Duration</ion-col>\r\n          <ion-col size=\"4\">No.of days</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"3.5\" *ngIf=\"item.ApprovedStatus == 1\" style=\"color: #ADC700;font-weight: bold;\"><div class=\"status1\"> Pending </div></ion-col>\r\n          <ion-col size=\"3.5\" *ngIf=\"item.ApprovedStatus == 3\" style=\"color: #FF002A;font-weight: bold;\"><div class=\"status2\"> Rejected </div></ion-col>\r\n          <ion-col size=\"3.5\" *ngIf=\"item.ApprovedStatus == 2\" style=\"color: #228616;font-weight: bold;\"><div class=\"status3\"> Approved </div></ion-col>\r\n          <ion-col size=\"4.5\">\r\n            <div>{{item.Fromdate}} -</div>\r\n            <div>{{item.ToDate}}</div>\r\n            </ion-col>\r\n          <ion-col size=\"4\">{{item.NoOfDays}}</ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</div> \r\n</ion-content> ";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_stem_new_leave-history_leave-history_module_ts-es5.js.map