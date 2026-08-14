(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (self["webpackChunkTNSED_Administrators"] = self["webpackChunkTNSED_Administrators"] || []).push([["src_app_pages_leave_leave-approval-list_leave-approval-list_module_ts"], {
    /***/
    81123:
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/leave/leave-approval-list/leave-approval-list-routing.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveApprovalListPageRoutingModule": function LeaveApprovalListPageRoutingModule() {
          return (
            /* binding */
            _LeaveApprovalListPageRoutingModule
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


      var _leave_approval_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./leave-approval-list.page */
      47242);

      var routes = [{
        path: '',
        component: _leave_approval_list_page__WEBPACK_IMPORTED_MODULE_0__.LeaveApprovalListPage
      }];

      var _LeaveApprovalListPageRoutingModule = /*#__PURE__*/_createClass(function LeaveApprovalListPageRoutingModule() {
        _classCallCheck(this, LeaveApprovalListPageRoutingModule);
      });

      _LeaveApprovalListPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LeaveApprovalListPageRoutingModule);
      /***/
    },

    /***/
    78164:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/leave/leave-approval-list/leave-approval-list.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveApprovalListPageModule": function LeaveApprovalListPageModule() {
          return (
            /* binding */
            _LeaveApprovalListPageModule
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


      var _leave_approval_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./leave-approval-list-routing.module */
      81123);
      /* harmony import */


      var _leave_approval_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./leave-approval-list.page */
      47242);

      var _LeaveApprovalListPageModule = /*#__PURE__*/_createClass(function LeaveApprovalListPageModule() {
        _classCallCheck(this, LeaveApprovalListPageModule);
      });

      _LeaveApprovalListPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _leave_approval_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.LeaveApprovalListPageRoutingModule],
        declarations: [_leave_approval_list_page__WEBPACK_IMPORTED_MODULE_1__.LeaveApprovalListPage]
      })], _LeaveApprovalListPageModule);
      /***/
    },

    /***/
    47242:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/leave/leave-approval-list/leave-approval-list.page.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeaveApprovalListPage": function LeaveApprovalListPage() {
          return (
            /* binding */
            _LeaveApprovalListPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      65353);
      /* harmony import */


      var _raw_loader_leave_approval_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./leave-approval-list.page.html */
      97295);
      /* harmony import */


      var _leave_approval_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./leave-approval-list.page.scss */
      61227);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      25970);
      /* harmony import */


      var src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/emis/emis.service */
      71660);
      /* harmony import */


      var src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/usersession.service */
      64461);

      var _LeaveApprovalListPage = /*#__PURE__*/function () {
        function LeaveApprovalListPage(router, emisService, usersessionService, alert) {
          _classCallCheck(this, LeaveApprovalListPage);

          this.router = router;
          this.emisService = emisService;
          this.usersessionService = usersessionService;
          this.alert = alert;
          this.LeaveSancList = [];
          this.sessionTeacherId = this.usersessionService.teacher_id();
          this.sessionTeacherType = this.usersessionService.teacher_type();
        }

        return _createClass(LeaveApprovalListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.refreshAllList();
          } //call approve staff list api function

        }, {
          key: "refreshAllList",
          value: function refreshAllList() {
            if (this.sessionTeacherType == 102) {
              this.getleavedetailsBeo();
            }

            if (this.sessionTeacherType == 101 || this.sessionTeacherType == 202 || this.sessionTeacherType == 203) {
              this.getleavedetailsDeo();
            }

            if (this.sessionTeacherType == 100) {
              this.getleavedetailsCeo();
            }

            if (this.sessionTeacherType == 144) {
              this.getleavedetailsJd();
            }
          } //get approve staff list for BEO

        }, {
          key: "getleavedetailsBeo",
          value: function getleavedetailsBeo() {
            var _this = this;

            this.emisService.getTchrsLeaveListBEOCount(this.sessionTeacherId).subscribe(function (data) {
              if (data.dataStatus == true) {
                if (data.result) {
                  var teacher_leave_list = [];
                  var hm_leave_list = [];

                  if (data.result.tchr.length > 0) {
                    teacher_leave_list = data.result.tchr;
                  }

                  if (data.result.hm.length > 0) {
                    hm_leave_list = data.result.hm;
                  }

                  _this.LeaveSancList = teacher_leave_list.concat(hm_leave_list);
                }
              }
            }, function (error) {
              _this.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //get approve staff list for DEO

        }, {
          key: "getleavedetailsDeo",
          value: function getleavedetailsDeo() {
            var _this2 = this;

            this.emisService.getTchrsLeaveListDEOCount(this.sessionTeacherId, this.sessionTeacherType).subscribe(function (data) {
              if (data.dataStatus == true) {
                if (data.result.length > 0) {
                  _this2.LeaveSancList = data.result;
                }
              }
            }, function (error) {
              _this2.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //get approve staff list for CEO

        }, {
          key: "getleavedetailsCeo",
          value: function getleavedetailsCeo() {
            var _this3 = this;

            this.emisService.getTchrsLeaveListCEOCount(this.sessionTeacherId).subscribe(function (data) {
              if (data.dataStatus == true) {
                if (data.result) {
                  var deo_leave_list = [];
                  var hm_leave_list = [];

                  if (data.result.Deo.length > 0) {
                    deo_leave_list = data.result.Deo;
                  }

                  if (data.result.hm.length > 0) {
                    hm_leave_list = data.result.hm;
                  }

                  _this3.LeaveSancList = deo_leave_list.concat(hm_leave_list);
                }
              }
            }, function (error) {
              _this3.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //get approve staff list for JD

        }, {
          key: "getleavedetailsJd",
          value: function getleavedetailsJd() {
            var _this4 = this;

            this.emisService.getTchrsLeaveListJdCount(this.sessionTeacherId).subscribe(function (data) {
              if (data.dataStatus == true) {
                if (data.result) {
                  var ceo_leave_list = [];
                  var deo_leave_list = [];

                  if (data.result.Ceo.length > 0) {
                    ceo_leave_list = data.result.Ceo;
                  }

                  if (data.result.Deo.length > 0) {
                    deo_leave_list = data.result.Deo;
                  }

                  _this4.LeaveSancList = ceo_leave_list.concat(deo_leave_list);
                }
              }
            }, function (error) {
              _this4.alert.error("Unable to connect to the server.  Please try after some time.");
            });
          } //goTo leave approval details page

        }, {
          key: "viewDetails",
          value: function viewDetails(leaveItem, fun) {
            this.router.navigate(["/tabs/leave-approval-details"], {
              queryParams: {
                'teacher_id': leaveItem.TchrId,
                'teacher_type': leaveItem.teacher_type,
                'fun': fun
              },
              skipLocationChange: false
            });
          } //goTo leave my leaves page

        }, {
          key: "viewLeaveBls",
          value: function viewLeaveBls(leaveBlsItem) {
            this.router.navigate(["/tabs/leave"], {
              queryParams: {
                'menu': 'My Leaves',
                'from_page': 'sanction',
                'TchrId': leaveBlsItem.TchrId,
                'Gender': leaveBlsItem.Gender
              },
              skipLocationChange: false
            });
          } //goTo leave dashboard page

        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/tabs/e-sr"], {
              queryParams: {
                'page': 2
              },
              skipLocationChange: false
            });
          }
        }]);
      }();

      _LeaveApprovalListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: src_app_services_emis_emis_service__WEBPACK_IMPORTED_MODULE_3__.EmisService
        }, {
          type: src_app_services_usersession_service__WEBPACK_IMPORTED_MODULE_4__.UserSessionService
        }, {
          type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
        }];
      };

      _LeaveApprovalListPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-leave-approval-list',
        template: _raw_loader_leave_approval_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_leave_approval_list_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LeaveApprovalListPage);
      /***/
    },

    /***/
    61227:
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/leave/leave-approval-list/leave-approval-list.page.scss ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pt-10 {\n  padding-left: 10px;\n  color: white;\n  margin: 0px;\n}\n\n.user-icon {\n  font-size: 17px;\n}\n\n.user-icon-label {\n  font-size: 13px;\n  padding-bottom: 4px;\n  padding-left: 4px;\n  font-weight: bold;\n}\n\n.leaveListCls {\n  align-self: center !important;\n  color: #630094 !important;\n  text-align: center !important;\n  font-size: 14px;\n  font-weight: 500 !important;\n  zoom: 1.5;\n}\n\n.leaveListClsLeft {\n  align-self: center !important;\n  color: #630094 !important;\n  text-align: left !important;\n  font-size: 14px;\n  font-weight: 500 !important;\n}\n\n.leaveListClsRight {\n  align-self: center !important;\n  color: #630094 !important;\n  text-align: right !important;\n  font-size: 14px;\n  font-weight: 500 !important;\n}\n\n.greyTextRight {\n  align-self: center !important;\n  color: #6a6a6a !important;\n  font-size: 12px !important;\n  text-align: right !important;\n  font-weight: 900 !important;\n}\n\n.greyTextLeft {\n  align-self: center !important;\n  color: #6a6a6a !important;\n  font-size: 12px !important;\n  text-align: left !important;\n  font-weight: 500 !important;\n}\n\n.viewDtlCls {\n  height: 50%;\n  margin: 1px;\n  background-color: #6a6a6a !important;\n  font-size: 14px !important;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white !important;\n  border-radius: 10px;\n}\n\n.cardCls {\n  background-color: white;\n  margin-right: 10px;\n  border-radius: 10px;\n}\n\n.cardRowCls {\n  margin-bottom: 10px;\n  margin-right: -7px;\n}\n\nion-select {\n  width: 100% !important;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXZlLWFwcHJvdmFsLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImxlYXZlLWFwcHJvdmFsLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTEwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4udXNlci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuLnVzZXItaWNvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxlYXZlTGlzdENscyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjMwMDk0ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIHpvb206IDEuNVxyXG59XHJcblxyXG4ubGVhdmVMaXN0Q2xzTGVmdCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjMwMDk0ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZWF2ZUxpc3RDbHNSaWdodCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjMwMDk0ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JleVRleHRSaWdodCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNmE2YTZhICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmV5VGV4dExlZnQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzZhNmE2YSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aWV3RHRsQ2xzIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE2YTZhICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhcmRDbHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZFJvd0NscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtN3B4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9Il19 */";
      /***/
    },

    /***/
    97295:
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leave/leave-approval-list/leave-approval-list.page.html ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" class=\"pt-10\" (click)=\"goBack()\">\r\n      <ion-icon class=\"back-icon\" size=\"large\" name=\"arrow-back\">\r\n      </ion-icon>\r\n    </ion-buttons>\r\n\r\n    <ion-title class=\"pt-15\">\r\n      <div class=\"ion-text-wrap\">Leave Sanction Request List</div>\r\n      <ion-row>\r\n        <ion-icon src=\"../assets/icons/user.svg\" class=\"user-icon\"> </ion-icon>\r\n        <div class=\"user-icon-label\">\r\n          <ion-label>{{sessionTeacherId}}</ion-label>\r\n        </div>\r\n      </ion-row>\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"secondary\">\r\n  <!-- Leave sanction list container -->\r\n  <div class=\"leave-container\">\r\n    <ion-row class=\"cardRowCls\" *ngFor=\"let leaveItem of LeaveSancList; let i = index;\">\r\n      <ion-col size=\"8.5\" class=\"cardCls\">\r\n        <ion-row>\r\n          <ion-col size=\"1\" class=\"leaveListCls\">\r\n            <ion-icon name=\"calendar\"></ion-icon>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <ion-row>\r\n              <ion-col size=\"6\" class=\"leaveListClsLeft\">\r\n                <ion-label>{{leaveItem.TchrName}}</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"leaveListClsRight\">\r\n                <ion-label>{{leaveItem.SchlName}}</ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col size=\"6\" class=\"greyTextLeft\">\r\n                <ion-label>({{leaveItem.LeaveCount}}) Leave Application</ion-label>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"greyTextRight\">\r\n                <ion-label>{{leaveItem.AppliedDate | date:'dd-MM-yyyy'}} </ion-label>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"3\" style=\"padding:0;\">\r\n        <ion-row size=\"12\" class=\"viewDtlCls\" (click)=\"viewDetails(leaveItem,'1')\">\r\n          <ion-label>View Details</ion-label>\r\n        </ion-row>\r\n        <ion-row size=\"12\" class=\"viewDtlCls\" (click)=\"viewDetails(leaveItem,'2')\">\r\n          <ion-label>Past Details</ion-label>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <!-- no message no data found -->\r\n  <div *ngIf=\"!LeaveSancList\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"noDataCls\">\r\n        <ion-label>\r\n          No Data Found\r\n        </ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_leave_leave-approval-list_leave-approval-list_module_ts-es5.js.map